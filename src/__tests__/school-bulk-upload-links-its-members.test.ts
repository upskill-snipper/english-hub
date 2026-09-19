import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The school bulk upload never linked a single student.
 *
 * FOUND 19 September 2026 by sweeping every Supabase write in `src` against the
 * live column set (`scripts/check-supabase-columns.mjs`). The commit route
 * upserted into `school_members` naming a `class_code` column the table does
 * not have and never has had.
 *
 * PostgREST rejects the whole request when one column is unknown, so NOT ONE
 * member row was written for any bulk-uploaded student. `school_members` holds
 * 0 rows, which is the proof.
 *
 * IT WAS INVISIBLE FOR TWO COMPOUNDING REASONS, and both are the house pattern:
 *
 *   1. Supabase returns `{ error }` rather than throwing, so the `try/catch`
 *      wrapped around it never fired. The comment above it said
 *      "best-effort", which reads like a considered decision and was in fact
 *      a guarantee that nothing would ever be noticed.
 *   2. Nothing read the result, so the error object was dropped on the floor.
 *
 * The route then returned `created: N` and the school was told the import had
 * worked. This is the B2B onboarding path, and "founding schools" is a live
 * campaign.
 *
 * WHAT IS DELIBERATELY NOT FIXED HERE. The class code. Class membership lives
 * in `class_students`, and joining a student to a class moves
 * `schools.seats_used`, which is seat billing. That is a real piece of work and
 * guessing at it from a CSV import at night is how billing defects are made.
 * The count of unassigned class codes is returned instead, so the caller knows
 * the codes were not acted on rather than assuming they were.
 */

const ROUTE = readFileSync(
  join(process.cwd(), 'src/app/api/school/bulk-upload/commit/route.ts'),
  'utf8',
)

/**
 * The live columns of school_members, read from the production database on
 * 19 September 2026. `class_code` is not among them.
 */
const LIVE_COLUMNS = [
  'id',
  'school_id',
  'user_id',
  'role',
  'full_name',
  'email',
  'invite_status',
  'year_group',
]

/** Top-level keys of the object passed to the school_members upsert. */
function upsertedKeys(): string[] {
  const at = ROUTE.indexOf(".from('school_members').upsert(")
  if (at === -1) return []
  const open = ROUTE.indexOf('{', at)
  let depth = 0
  let end = open
  do {
    if (ROUTE[end] === '{') depth += 1
    if (ROUTE[end] === '}') depth -= 1
    end += 1
  } while (depth > 0 && end < ROUTE.length)

  const keys: string[] = []
  let nest = 0
  for (const line of ROUTE.slice(open + 1, end - 1).split('\n')) {
    if (nest === 0) {
      const m = line.trim().match(/^([a-z_][a-z0-9_]*)\s*:/i)
      if (m) keys.push(m[1])
    }
    nest += (line.match(/[[{(]/g) ?? []).length - (line.match(/[\]})]/g) ?? []).length
  }
  return keys
}

describe('the upsert was found', () => {
  it('parsed a realistic set of keys', () => {
    // Vacuity guard: every assertion below passes on a parser that matched
    // nothing, which is how a check like this goes quiet.
    expect(upsertedKeys().length).toBeGreaterThan(4)
  })
})

describe('it writes only columns school_members has', () => {
  it('every key is a real column', () => {
    const unknown = upsertedKeys().filter((k) => !LIVE_COLUMNS.includes(k))
    expect(
      unknown,
      'PostgREST rejects the whole upsert on an unknown column, so every student in the import is lost',
    ).toEqual([])
  })

  it('and class_code, the one that broke it, is gone', () => {
    expect(upsertedKeys()).not.toContain('class_code')
  })
})

describe('a failure can no longer pass for success', () => {
  it('the upsert result is read', () => {
    // THE ASSERTION THAT MATTERS. try/catch alone did nothing here: the client
    // resolves with an error rather than throwing.
    expect(ROUTE).toContain('const { error: memberError } = await admin')
  })

  it('and a failed row is recorded, not just logged', () => {
    expect(ROUTE).toContain('memberFailures.push(email)')
    expect(ROUTE).toContain('memberLinkFailures')
  })

  it('and reaches the caller, not only the server log', () => {
    // A console line on a serverless function is not a report. The school ran
    // this import and was told it had worked.
    expect(ROUTE).toContain('memberLinkFailures: memberFailures')
  })

  it('and the catch logs at error level rather than warn', () => {
    // It was console.warn under a comment calling the step "best-effort",
    // which is how a silent failure acquires a respectable-looking excuse.
    //
    // Scoped to the school_members block, not the whole file: the auth-user
    // rollback further up warns on purpose, and a blanket ban on the prefix
    // failed for that reason on the first run.
    const at = ROUTE.indexOf('// 8. Link Supabase school_members')
    expect(at).toBeGreaterThan(-1)
    const block = ROUTE.slice(at, ROUTE.indexOf('const response: CommitResponse', at))
    expect(block).not.toContain('console.warn(')
    expect(block).toContain("console.error('bulk-upload.commit")
  })
})

describe('the class code is not quietly dropped', () => {
  it('rows supplying one are counted', () => {
    expect(ROUTE).toContain('classCodesSupplied += 1')
  })

  it('and the count is returned so nobody assumes it was applied', () => {
    expect(ROUTE).toContain('classCodesNotAssigned: classCodesSupplied')
  })
})
