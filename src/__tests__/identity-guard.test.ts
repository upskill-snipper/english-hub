import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

/**
 * Guard: identity resolution lives in exactly one module.
 *
 * This defect class arrived because three subsystems each grew their own
 * private lookup from a Supabase auth uuid to a Prisma `User` row, and all
 * three were wrong in the same way. Nothing in review caught it, because
 * each one looked reasonable on its own.
 *
 * So the rule is mechanical: outside src/lib/identity/, a file may not look
 * a user up by `supabaseUserId` and may not create a `User` row. New code
 * calls requirePrismaUserId / tryPrismaUserId, which project the account
 * just in time, and gets the answer the foreign keys agree with.
 */

const SRC = join(process.cwd(), 'src')

/**
 * Files allowed to resolve or create identity themselves.
 *
 * `src/lib/identity/` is the module itself. The three signup routes create
 * the FIRST row for a brand-new account, which is a different act from
 * projecting an existing one; they are listed rather than rewritten so this
 * change does not touch the registration path.
 *
 * The last two are LEGACY and should move onto the identity module. They are
 * listed so this guard can be enforced now rather than after they move:
 *   - api/account/delete       owned by the erasure fix (Critical 2)
 *   - api/profile/grade-progress  best-effort read, no correctness risk
 *
 * Adding to this list requires a reason you would defend in an audit. The
 * default answer is to call the identity module instead.
 */
const ALLOWED = [
  'lib/identity',
  'app/api/auth/register/route.ts',
  'app/api/auth/teacher-signup/route.ts',
  // app/api/admin/verify-user/route.ts was here until 2026-09-17: it built
  // its own projection with an invented name, country and date of birth and
  // `isMinor: false`. It now calls projectSupabaseUser, so it is scanned
  // like everything else and must stay that way.
  'app/api/account/delete/route.ts',
  'app/api/profile/grade-progress/route.ts',
]

const FORBIDDEN: { pattern: RegExp; what: string }[] = [
  {
    pattern:
      /prisma\s*\.\s*user\s*\.\s*(findFirst|findMany|updateMany|deleteMany)\s*\(\s*\{[^}]*supabaseUserId/,
    what: 'a private lookup by supabaseUserId',
  },
  {
    pattern: /prisma\s*\.\s*user\s*\.\s*(create|upsert)\s*\(/,
    what: 'a User row created outside the identity module',
  },
]

function sourceFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      // Tests describe the rule; they are not bound by it.
      if (entry === '__tests__' || entry === 'node_modules') continue
      sourceFiles(full, acc)
      continue
    }
    if (!/\.(ts|tsx)$/.test(entry)) continue
    if (/\.test\.(ts|tsx)$/.test(entry)) continue
    acc.push(full)
  }
  return acc
}

function isAllowed(relPath: string): boolean {
  const posix = relPath.split(sep).join('/')
  return ALLOWED.some((a) => posix === a || posix.startsWith(`${a}/`))
}

describe('identity resolution has exactly one home', () => {
  const files = sourceFiles(SRC)

  it('scans a real source tree', () => {
    expect(files.length).toBeGreaterThan(100)
  })

  it('finds no private identity lookup outside src/lib/identity', () => {
    const offences: string[] = []

    for (const file of files) {
      const rel = relative(SRC, file)
      if (isAllowed(rel)) continue

      const source = readFileSync(file, 'utf8')
      for (const { pattern, what } of FORBIDDEN) {
        if (pattern.test(source)) {
          offences.push(`${rel.split(sep).join('/')}: ${what}`)
        }
      }
    }

    expect(offences).toEqual([])
  })

  it('keeps the consent library and the AI gate free of direct user lookups', () => {
    // These two files are where the defect was found, and the fix is only
    // durable if they stay delegated.
    for (const rel of ['lib/consent.ts', 'lib/consent-check.ts']) {
      const source = readFileSync(join(SRC, rel), 'utf8')
      expect(source).not.toMatch(/prisma\s*\.\s*user\s*\.\s*findFirst/)
      expect(source).toMatch(/@\/lib\/identity/)
    }
  })
})
