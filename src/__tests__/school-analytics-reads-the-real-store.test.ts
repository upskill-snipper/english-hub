import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * School analytics counted rows in tables that do not exist (DATA-9).
 *
 * THE DEFECT (19 September 2026). `/api/school/analytics` and
 * `/api/school/overview` queried `assignments` and `assignment_submissions`.
 * Neither table exists: no migration declares them, and a read-only probe
 * against production returns PGRST205 for both. supabase-js returns `{ error }`
 * rather than throwing, the error was never destructured, and `count ?? 0` and
 * `data ?? []` turned a missing relation into a confident zero and an empty
 * chart. Those tiles have read 0 since the day they shipped and would have gone
 * on doing so for ever.
 *
 * The real store is Prisma's quoted-camelCase `Assignment` and
 * `AssignmentSubmission`, created by 0_init and verified PRESENT in production
 * by the same probe.
 *
 * THE IDENTITY TRAP THIS AVOIDS. `AssignmentSubmission.studentId` looks like it
 * should hold a Prisma cuid - almost every other Prisma foreign key does, and
 * structural fact 1 in CLAUDE.md exists because of it. It does not: the write
 * path fills it from `class_students.student_id`, a SUPABASE uuid. Had the
 * usual assumption been applied, the query would have matched nothing and
 * returned the same empty chart - a silent zero replaced by a different silent
 * zero, looking exactly like a fix.
 *
 * WHY EVERY NEW READ IS WRAPPED. These values feed dashboard tiles, and
 * `useSchool` turns any non-ok response from these routes into "you are not a
 * school member" across four surfaces. Swapping a read that fails silently for
 * one that throws would convert a cosmetic zero into an app-wide entitlement
 * flip. A count is never worth a 500.
 *
 * 12 OCTOBER 2026: `/api/school/analytics` NO LONGER READS EITHER TABLE. Its
 * "assignments submitted" counted Assignment rows CREATED, and nothing in the
 * codebase creates an AssignmentSubmission, so no true count could ever be
 * above zero. It now reports essays submitted for marking, from
 * marking_submissions, and fails with a 500 when a read fails: `useSchool`
 * reads only `/api/school/overview`, so the reason above for swallowing
 * errors never applied to it, and its own page shows an error state. The
 * assertions about wrapped Prisma reads and a zero fallback therefore hold
 * for the overview route alone.
 */

const ROOT = process.cwd()

function code(rel: string): string {
  return readFileSync(join(ROOT, rel), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split(/\r?\n/)
    .map((l) => l.replace(/\/\/.*$/, ''))
    .join('\n')
}

const ANALYTICS = code('src/app/api/school/analytics/route.ts')
const OVERVIEW = code('src/app/api/school/overview/route.ts')

describe('the server-side school routes', () => {
  it.each([
    ['analytics', ANALYTICS],
    ['overview', OVERVIEW],
  ])('%s no longer queries the non-existent snake_case tables', (_name, body) => {
    expect(body).not.toMatch(/\.from\(\s*['"]assignments['"]\s*\)/)
    expect(body).not.toMatch(/\.from\(\s*['"]assignment_submissions['"]\s*\)/)
  })

  it('overview reads the Prisma store instead', () => {
    expect(OVERVIEW).toMatch(/prisma\.assignment/i)
  })

  it('analytics no longer reports assignments, which nobody can submit', () => {
    expect(ANALYTICS).not.toMatch(/prisma\.assignment/i)
    expect(ANALYTICS).not.toMatch(/assignmentsSubmitted/)
    // It counts the pupils' real work instead.
    expect(ANALYTICS).toMatch(/essaysSubmittedThisWeek/)
    expect(ANALYTICS).toMatch(/'marking_submissions'/)
  })
})

describe('the new reads cannot take the school workspace down', () => {
  it.each([['overview', OVERVIEW]])(
    '%s wraps every Prisma assignment read in its OWN try/catch',
    (_name, body) => {
      // The first version of this assertion looked for `catch (` anywhere in the
      // 700 characters after the call. Both routes have a catch-all at the end of
      // the handler, so it passed with the guard deleted - it was measuring the
      // route's own error handler, not the wrap. Removing the guard is exactly
      // the regression this test exists to catch, and it did not catch it.
      //
      // Now: walk backwards from each call to the nearest block opener and
      // require it to be `try {`.
      const calls = [...body.matchAll(/prisma\.assignment\w*\./g)]
      expect(calls.length).toBeGreaterThan(0)
      for (const call of calls) {
        const before = body.slice(0, call.index ?? 0)
        const lastTry = before.lastIndexOf('try {')
        const lastBrace = Math.max(before.lastIndexOf('{'), before.lastIndexOf('}'))
        expect(
          lastTry !== -1 && lastTry + 4 >= lastBrace,
          `the read at offset ${call.index} is not inside a try block of its own - ` +
            'a missing relation would throw P2021, the route would 500, and useSchool ' +
            'would reclassify every school user as not-a-member',
        ).toBe(true)
      }
    },
  )

  it('overview still falls back to a zero rather than an error', () => {
    expect(OVERVIEW).toMatch(/assignments(?:Submitted)?ThisWeek = 0/)
  })
})

describe('the record of what is still undeclared', () => {
  const RECORD = readFileSync(
    join(ROOT, 'src/__tests__/every-queried-table-is-declared.test.ts'),
    'utf8',
  )

  it('no longer claims the Prisma tables do not exist', () => {
    // The entry used to read "neither exists". Half of that was wrong: the
    // camelCase pair is present in production. A record that is wrong in the
    // reassuring direction is how this went unnoticed.
    expect(RECORD).not.toContain('neither exists, so the school analytics page has never had data')
  })

  it('records that the dashboard no longer reads the missing table', () => {
    // /school/dashboard queried Supabase straight from the browser and so
    // showed 0 for ever. Since 12 October 2026 it reads GET
    // /api/school/summary, and the record says so rather than still naming it.
    expect(RECORD).toContain('src/app/school/dashboard/page.tsx')
    expect(RECORD).toContain('removed on 12 October 2026')
  })
})
