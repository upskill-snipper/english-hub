import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { compareSchema } from '@/lib/schema/drift.mjs'
import type { KnownDrift, LiveSchema, SchemaManifest } from '@/lib/schema/drift'
import manifestJson from '@/lib/schema/expected-schema.json'
import knownJson from '../../scripts/schema-drift-known.json'

/**
 * The schema checker, and the manifest it answers from (DATA-1).
 *
 * THE DEFECT. `scripts/check-schema-drift.mjs` compared only what MIGRATIONS
 * declare against `information_schema`. That is structurally blind to the more
 * common failure here: a table that CODE reads and no migration declares. Five
 * public forms - creator applications, school contact, waitlist, feedback,
 * teacher leads - wrote to nothing for months while this script reported no
 * drift, because none of them had a migration to be missing from. And nothing
 * ran it: it was in neither CI nor the crons, so it was only as good as the
 * last person who remembered.
 *
 * THE TRAP IN THE OBVIOUS FIX. The route runs inside a Vercel function. The
 * migration files and the `src/` tree are not in its bundle. A route that
 * scanned them at runtime would parse ZERO files, find nothing missing, and
 * report a clean schema for ever - a health check that proves configuration
 * rather than function, which is the pattern this repository keeps finding.
 * Hence the committed manifest, and hence the first test below, which is the
 * one that stops the manifest becoming a lie.
 *
 * Verified against production on 19 September 2026: 529 expectations, 31
 * findings, zero false positives. The first version of the index and trigger
 * patterns reported objects called `concurrently`, `if` and `is`; a report with
 * false alarms is a report people stop reading, which is exactly how
 * `email_subscribers` trained everyone to skim this output.
 */

const ROOT = process.cwd()
const manifest = manifestJson as unknown as SchemaManifest
const known = knownJson as unknown as KnownDrift

const DRIFT_KINDS = new Set([
  'missing-table',
  'missing-column',
  'code-references-missing-table',
  'prisma-model-without-table',
  'missing-policy',
  'missing-index',
  'missing-trigger',
  'missing-function',
])

// ─── The manifest cannot go stale ───────────────────────────────────────────

describe('the committed manifest', () => {
  it('matches a fresh scan of the repository', () => {
    // THE ASSERTION THIS FILE EXISTS FOR. Everything else here is checking a
    // snapshot; this is what makes the snapshot true. Without it, adding a
    // `.from('new_table')` and forgetting to regenerate leaves the daily check
    // reporting on a repository that no longer exists, in green.
    const result = execFileSync(
      process.execPath,
      [join(ROOT, 'scripts/generate-schema-manifest.mjs'), '--check'],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
    )
    expect(result).toContain('current')
  })

  it('describes a real schema rather than an empty one', () => {
    // An empty manifest would make every comparison pass. This is the guard
    // against the bundling trap described above arriving by a different route.
    expect(Object.keys(manifest.tables).length).toBeGreaterThan(50)
    expect(Object.keys(manifest.codeTables).length).toBeGreaterThan(40)
    expect(Object.keys(manifest.policies).length).toBeGreaterThan(100)
    expect(Object.keys(manifest.indexes).length).toBeGreaterThan(100)
  })

  it('carries no absolute path from whichever machine generated it', () => {
    const raw = readFileSync(join(ROOT, 'src/lib/schema/expected-schema.json'), 'utf8')
    expect(raw).not.toMatch(/[A-Za-z]:\//)
    expect(raw).not.toMatch(/\/Users\//)
  })

  it('picked up no SQL keyword as an object name', () => {
    // `concurrently`, `if` and `is` were all reported as missing indexes by the
    // first version of the pattern.
    for (const name of Object.keys(manifest.indexes)) {
      expect(['concurrently', 'if', 'is', 'not', 'exists']).not.toContain(name)
    }
    for (const name of Object.keys(manifest.triggers)) {
      expect(['concurrently', 'if', 'is', 'not', 'exists']).not.toContain(name)
    }
  })
})

// ─── The allowlist is a register, not a silencer ────────────────────────────

describe('the known-drift allowlist', () => {
  it('gives every entry a real kind', () => {
    for (const entry of known.allow) {
      expect(DRIFT_KINDS.has(entry.kind), `${entry.kind} is not a drift kind`).toBe(true)
    }
  })

  it('says why for every entry', () => {
    // An allowlist without reasons is a silencer. Each of these has a decision
    // attached - DATA-3 to DATA-9 - and the reason is what makes it possible
    // to tell later whether it is still true.
    for (const entry of known.allow) {
      expect(entry.why, `${entry.object} has no reason`).toBeTruthy()
      expect(entry.why.length).toBeGreaterThan(30)
    }
  })

  it('lists each object once', () => {
    const keys = known.allow.map((e) => `${e.kind}:${e.object}`)
    expect(keys.length).toBe(new Set(keys).size)
  })

  it('does not silence a whole kind', () => {
    // Allowlisting every `code-references-missing-table` would turn off the
    // half of the checker that DATA-1 was written to add.
    expect(known.allow.length).toBeLessThan(60)
  })

  it('still records the debt it was written to record', () => {
    // The tempting way to "fix" a red check is to empty this file. That is not
    // a fix; it is deleting the only written record of which decisions
    // (DATA-3 to DATA-9) these findings are waiting on. Emptying it also makes
    // the CLI report all 31 as new and exit 1, but a mutation check showed the
    // suite itself said nothing, so it says something now.
    expect(known.allow.length).toBeGreaterThanOrEqual(25)

    const objects = new Set(known.allow.map((e) => e.object))
    for (const required of [
      'email_subscribers', // DATA-3
      'student_progress', // DATA-4, and the mobile 500
      'BulkUploadJob', // DATA-9
      'marking_submissions.pack_version', // DATA-6
      'profiles_updated_at', // DATA-7, a baselined-unexecuted trigger
    ]) {
      expect(objects.has(required), `${required} has gone from the register`).toBe(true)
    }
  })
})

// ─── The comparison itself ──────────────────────────────────────────────────

function live(overrides: Partial<LiveSchema> = {}): LiveSchema {
  return {
    tables: [],
    columns: [],
    policies: [],
    indexes: [],
    triggers: [],
    functions: [],
    ...overrides,
  }
}

function tinyManifest(overrides: Partial<SchemaManifest> = {}): SchemaManifest {
  return {
    generatedAt: 'test',
    tables: {},
    columns: {},
    codeTables: {},
    prismaTables: {},
    policies: {},
    indexes: {},
    triggers: {},
    functions: {},
    ...overrides,
  } as SchemaManifest
}

describe('compareSchema', () => {
  it('finds a table the code reads that does not exist', () => {
    const report = compareSchema(
      tinyManifest({ codeTables: { creator_applications: 'src/app/api/creator-apply/route.ts' } }),
      live({ tables: ['profiles'] }),
      { allow: [] },
    )
    expect(report.introduced).toHaveLength(1)
    expect(report.introduced[0].kind).toBe('code-references-missing-table')
  })

  it('distinguishes a Prisma PascalCase table from its lower-case twin', () => {
    // `BulkUploadJob` and `bulkuploadjob` are different objects in Postgres.
    // A case-insensitive comparison would report the model as satisfied by a
    // table that is not the one Prisma writes to.
    const report = compareSchema(
      tinyManifest({ prismaTables: { BulkUploadJob: 'prisma/schema.prisma' } }),
      live({ tables: ['bulkuploadjob'] }),
      { allow: [] },
    )
    expect(report.introduced.map((f) => f.object)).toEqual(['BulkUploadJob'])
  })

  it('does not report a column on a table that is itself missing', () => {
    // Reporting both doubles the noise for one cause.
    const report = compareSchema(
      tinyManifest({
        tables: { gone: 'x.sql' },
        columns: { 'gone.a_column': 'x.sql' },
      }),
      live({ tables: [] }),
      { allow: [] },
    )
    expect(report.introduced).toHaveLength(1)
    expect(report.introduced[0].kind).toBe('missing-table')
  })

  it('does not report an index on a table that is itself missing', () => {
    const report = compareSchema(
      tinyManifest({ indexes: { idx_a: { file: 'x.sql', table: 'gone' } } }),
      live({ tables: [] }),
      { allow: [] },
    )
    expect(report.introduced).toHaveLength(0)
  })

  it('checks an auth-schema trigger against the auth schema', () => {
    // `on_auth_user_created` is on `auth.users`. Scoped to `public` it reads as
    // permanently missing, which is a false alarm that never goes away.
    const manifestWithAuthTrigger = tinyManifest({
      triggers: { on_auth_user_created: { file: 'x.sql', table: 'users', schema: 'auth' } },
    })
    expect(
      compareSchema(manifestWithAuthTrigger, live({ triggers: ['auth.on_auth_user_created'] }), {
        allow: [],
      }).introduced,
    ).toHaveLength(0)
    expect(
      compareSchema(manifestWithAuthTrigger, live({ triggers: ['public.on_auth_user_created'] }), {
        allow: [],
      }).introduced,
    ).toHaveLength(1)
  })

  it('separates new drift from recorded drift', () => {
    const report = compareSchema(
      tinyManifest({ tables: { old_news: 'a.sql', brand_new: 'b.sql' } }),
      live({ tables: [] }),
      { allow: [{ kind: 'missing-table', object: 'old_news', why: 'recorded under DATA-3' }] },
    )
    expect(report.introduced.map((f) => f.object)).toEqual(['brand_new'])
    expect(report.expected.map((f) => f.object)).toEqual(['old_news'])
  })

  it('reports an allowlist entry whose drift has been fixed', () => {
    // Otherwise the register becomes a second document that lies about the
    // schema, which is the thing this whole area exists to prevent.
    const report = compareSchema(tinyManifest(), live({ tables: ['fixed'] }), {
      allow: [{ kind: 'missing-table', object: 'fixed', why: 'was missing in May' }],
    })
    expect(report.stale.map((s) => s.object)).toEqual(['fixed'])
  })
})

// ─── The route ──────────────────────────────────────────────────────────────

describe('/api/health/schema', () => {
  const ORIGINAL = process.env.CRON_SECRET
  const SRC = readFileSync(join(ROOT, 'src/app/api/health/schema/route.ts'), 'utf8')

  beforeEach(() => {
    process.env.CRON_SECRET = 'schema-probe-secret'
  })
  afterEach(() => {
    if (ORIGINAL === undefined) delete process.env.CRON_SECRET
    else process.env.CRON_SECRET = ORIGINAL
    vi.restoreAllMocks()
  })

  it('refuses an unauthenticated caller', async () => {
    const { GET } = await import('@/app/api/health/schema/route')
    const { NextRequest } = await import('next/server')
    const res = await GET(new NextRequest('http://localhost/api/health/schema'))
    expect(res.status).toBe(401)
  })

  it('answers 503 on new drift, not 200', () => {
    const body = SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
    expect(body).toMatch(/status: introduced === 0 \? 200 : 503/)
  })

  it('answers 500 when it cannot read the schema, never "no drift"', () => {
    // The failure this endpoint exists to end. A checker that cannot see the
    // database and reports clean is worse than no checker.
    const body = SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
    const catchBlock = body.slice(body.indexOf('} catch'))
    expect(catchBlock.slice(0, 500)).toMatch(/status: 500/)
    expect(catchBlock.slice(0, 500)).toMatch(/ok: false/)
  })

  it('is scheduled, because a checker nothing runs is not a checker', () => {
    const vercel = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8')) as {
      crons: { path: string }[]
    }
    expect(vercel.crons.some((c) => c.path === '/api/health/schema')).toBe(true)
  })

  it('imports the manifest statically rather than reading the filesystem', () => {
    // Reading `supabase/migrations/` here would parse zero files inside the
    // function bundle and report a clean schema for ever.
    expect(SRC).toContain("from '@/lib/schema/expected-schema.json'")
    expect(SRC).not.toMatch(/readdirSync|readFileSync|node:fs/)
  })
})
