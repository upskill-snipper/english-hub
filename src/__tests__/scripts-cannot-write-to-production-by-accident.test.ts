import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { assertWritableTarget, resolveTarget } from '../../scripts/_guard.mjs'

/**
 * A seed script that would have put a known-password admin into the live
 * database (MAINT-6).
 *
 * THE DEFECT (19 September 2026). `.env.local` in this repository points at the
 * PRODUCTION Supabase project and carries the service-role key, so RLS does not
 * apply to anything run with it. Several scripts load that file by default and
 * write.
 *
 * `scripts/seed.ts` was the worst: it upserts an ADMINISTRATOR account into
 * whatever database is loaded, and the passwords were string literals in a
 * PUBLIC repository. `npx tsx scripts/seed.ts` in a normal checkout would have
 * created a known-credential admin in the live database holding children's
 * data. Nothing stopped it - CLAUDE.md warns "grep before running anything",
 * which is a warning, not a guard.
 *
 * VERIFIED, AND THE NEWS IS GOOD: a read-only check of production found neither
 * seeded account. The script was never run against it. A near miss rather than
 * a live breach - but the passwords are out of the repo now regardless, because
 * "it has not happened yet" is not a control.
 *
 * TWO SCRIPTS ARE DELIBERATELY NOT GATED, and that is the interesting part:
 *
 *   - `apply-migrations.mjs` is the SUPPORTED production runner, invoked by
 *     `npm run build`. Adding a two-key turn would break every deploy.
 *   - `confirm-stuck-users.ts` already has its own latch (--dry-run, --force,
 *     STUCK_USER_REMEDIATION=yes, a hardcoded allowlist and documented exit
 *     codes). Layering this guard on top would create a three-key turn with
 *     opposite conventions, and the auth runbook documents running it with no
 *     flags - which would silently become a no-op exiting 0, leaving a locked
 *     out child locked out while the operator reads success.
 */

const ROOT = process.cwd()
const read = (rel: string) => readFileSync(join(ROOT, rel), 'utf8')

/**
 * Source with comments removed.
 *
 * Needed because both files here DOCUMENT what they deliberately do not do -
 * the guard's header explains why it never calls `process.exit`, and seed.ts's
 * header names the environment variables it now requires. Asserting against the
 * raw text matches the explanation instead of the code, which is the fifth time
 * tonight a check has measured a comment rather than the thing it describes.
 */
const code = (rel: string) =>
  read(rel)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')

/** Scripts that construct a DB client at module scope and write. */
const GATED_WRITERS = [
  'scripts/seed.ts',
  'scripts/seed-reviewers.ts',
  'scripts/grant-reviewer-entitlement.ts',
  'scripts/drop-email-subscribers.ts',
  'scripts/apply-rls-migration.ts',
  'scripts/apply-pending-migrations.ts',
  'scripts/load-specimen-gold.mjs',
  'scripts/backfill-prisma-users.mjs',
]

// ─── The guard itself ───────────────────────────────────────────────────────

describe('the guard', () => {
  it('lets a local target through with no ceremony', () => {
    const r = assertWritableTarget({
      script: 's',
      argv: [],
      env: { DATABASE_URL: 'postgresql://postgres@localhost:5432/eh' },
    })
    expect(r.mode).toBe('apply')
    expect(r.kind).toBe('local')
  })

  it('refuses production with neither key', () => {
    const r = assertWritableTarget({
      script: 's',
      argv: [],
      env: { DATABASE_URL: 'postgresql://x@aws-1-ap-south-1.pooler.supabase.com:6543/postgres' },
    })
    expect(r.mode).toBe('plan')
    expect(r.kind).toBe('production')
  })

  it.each([
    ['only the flag', ['--apply'], {}],
    ['only the env key', [], { EH_ALLOW_PRODUCTION_WRITE: '1' }],
  ])('refuses production with %s', (_name, argv, extra) => {
    // One key is a habit. Two is a decision.
    const r = assertWritableTarget({
      script: 's',
      argv: argv as string[],
      env: { DATABASE_URL: 'https://arjjzkudncwqprpyamkw.supabase.co', ...extra },
    })
    expect(r.mode).toBe('plan')
  })

  it('allows production when both keys are turned', () => {
    const r = assertWritableTarget({
      script: 's',
      argv: ['--apply'],
      env: {
        DATABASE_URL: 'https://arjjzkudncwqprpyamkw.supabase.co',
        EH_ALLOW_PRODUCTION_WRITE: '1',
      },
    })
    expect(r.mode).toBe('apply')
  })

  it('treats an unrecognised target as production', () => {
    // Fail closed. Guessing "probably local" writes to a customer database;
    // guessing "probably production" costs an operator one more flag.
    const r = assertWritableTarget({
      script: 's',
      argv: [],
      env: { DATABASE_URL: 'postgresql://user@some-unknown-host.example/db' },
    })
    expect(r.mode).toBe('plan')
    expect(r.kind).toBe('unknown')
  })

  it('treats a completely unset target as production', () => {
    const r = assertWritableTarget({ script: 's', argv: [], env: {} })
    expect(r.mode).toBe('plan')
    expect(r.kind).toBe('unknown')
  })

  it('never exits and never throws', () => {
    // An earlier draft had plan mode call process.exit(0), which makes the
    // guard untestable and kills the vitest worker. The guard reports; the
    // script decides.
    expect(() => assertWritableTarget({ script: 's', argv: [], env: {} })).not.toThrow()
    expect(code('scripts/_guard.mjs')).not.toMatch(/process\.exit/)
  })

  it('recognises the real production host from a pooler URL', () => {
    const { kind } = resolveTarget({
      DATABASE_URL: 'postgresql://u:p@aws-1-ap-south-1.pooler.supabase.com:6543/postgres',
    })
    expect(kind).toBe('production')
  })
})

// ─── Every writer is gated, above its client ────────────────────────────────

describe('the scripts that write', () => {
  it.each(GATED_WRITERS)('%s calls the guard', (rel) => {
    expect(existsSync(join(ROOT, rel)), `${rel} is missing`).toBe(true)
    expect(read(rel)).toContain('assertWritableTarget')
  })

  it.each(GATED_WRITERS)('%s calls it ABOVE the client construction', (rel) => {
    // Nine of eleven build their client at module scope, above main(). A check
    // at the top of main() would run after the connection already existed.
    const src = read(rel)
    const guardAt = src.indexOf('assertWritableTarget(')
    const clientAt = src.search(/(new PrismaClient\(|createClient\()/)
    expect(guardAt).toBeGreaterThan(-1)
    expect(clientAt).toBeGreaterThan(-1)
    expect(
      guardAt,
      `${rel} constructs its client before checking where it is pointed`,
    ).toBeLessThan(clientAt)
  })

  it.each(GATED_WRITERS)('%s stops rather than continuing in plan mode', (rel) => {
    const src = read(rel)
    const at = src.indexOf('assertWritableTarget(')
    const after = src.slice(at, at + 400)
    expect(after, `${rel} reads the guard and ignores it`).toMatch(/process\.exit\(1\)/)
  })
})

// ─── The credentials that were in a public repository ───────────────────────

describe('scripts/seed.ts', () => {
  const src = read('scripts/seed.ts')

  it('carries no hardcoded password', () => {
    // The literals are gone from the source AND from the comments describing
    // them: if the script was ever run anywhere, an account may still be using
    // one, so restating them in a public repo would be pointless exposure.
    expect(src).not.toMatch(/Admin123/)
    expect(src).not.toMatch(/Student123/)
    expect(src).not.toMatch(/hash\(\s*["'][^"']{6,}["']\s*,/)
  })

  it('refuses rather than inventing a default', () => {
    // A fallback would quietly put a guessable admin password back the first
    // time somebody forgot the variable.
    const body = code('scripts/seed.ts')
    expect(body).toContain('SEED_ADMIN_PASSWORD')
    expect(body).toContain('SEED_STUDENT_PASSWORD')
    const at = body.indexOf('SEED_ADMIN_PASSWORD')
    expect(body.slice(at, at + 300)).toMatch(/process\.exit\(1\)/)
  })
})

// ─── What is not gated, and why ─────────────────────────────────────────────

describe('the deliberate exclusions', () => {
  it('leaves the supported migration runner ungated', () => {
    // apply-migrations.mjs is invoked by `npm run build`. A two-key turn here
    // would break every deploy.
    expect(read('scripts/apply-migrations.mjs')).not.toContain('assertWritableTarget')
  })

  it('leaves confirm-stuck-users.ts to its own latch', () => {
    // It already has --dry-run/--force, a STUCK_USER_REMEDIATION=yes latch, a
    // hardcoded allowlist and documented exit codes. The auth runbook documents
    // running it with no flags; adding this guard would make that a silent
    // no-op exiting 0, leaving a locked-out child locked out.
    const src = read('scripts/confirm-stuck-users.ts')
    expect(src).not.toContain('assertWritableTarget')
    expect(src).toContain('STUCK_USER_REMEDIATION')
  })
})
