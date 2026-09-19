import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SUPABASE_SUBJECT_TABLES } from '@/lib/data-retention'

/**
 * Children's handwriting kept past its own expiry (PAY-9).
 *
 * `examiner_marking_runs` holds TRANSCRIBED CHILDREN'S HANDWRITING - a pupil's
 * exam script, typed out by the marking tool - with a 180-day `expires_at`.
 *
 * Nothing swept it on a schedule. The only sweep was lazy, inside
 * `GET /api/examiner/runs`, and scoped to `owner_id`: it ran when the owning
 * teacher next opened their list. So a teacher who marked a set of scripts in
 * June and never came back kept those children's writing indefinitely, past the
 * expiry the product itself had set. The retention period was a promise the
 * code did not keep.
 *
 * VERIFIED AGAINST PRODUCTION before the change: the table exists, `expires_at`
 * exists, and it holds 0 rows - the examiner tool is new. That is the right
 * moment to add a sweep rather than the wrong one, and it is why this is a
 * prospective fix rather than a clean-up.
 *
 * WHAT THESE GUARD. That the unconditional sweep exists, that it deletes by
 * expiry and NOT by owner, and that it leaves an audit row - a deletion of
 * children's data that leaves no trace cannot be evidenced to a regulator
 * asking whether the stated period was honoured.
 */

const ROOT = process.cwd()
const RETENTION = readFileSync(join(ROOT, 'src/lib/data-retention.ts'), 'utf8')
const RUNS_ROUTE = readFileSync(join(ROOT, 'src/app/api/examiner/runs/route.ts'), 'utf8')

/** The scheduled sweep block, isolated so assertions cannot match the lazy one. */
function sweepBlock(): string {
  const at = RETENTION.indexOf('// ── 1c. Expired examiner marking runs')
  expect(at, 'the scheduled sweep is not in cleanupExpiredData').toBeGreaterThan(-1)
  return RETENTION.slice(at, RETENTION.indexOf('// ── 2. Hard-delete', at))
}

describe('the scheduled sweep exists', () => {
  it('inside the retention cleanup, not only on read', () => {
    const block = sweepBlock()
    expect(block).toContain("from('examiner_marking_runs')")
    expect(block).toContain('.delete()')
  })

  it('and deletes by expiry, never scoped to one owner', () => {
    // THE ASSERTION THAT MATTERS. The lazy sweep is `.eq('owner_id', ...)` and
    // that is exactly why it never ran for an absent teacher. A scheduled
    // sweep that copied it would reproduce the defect it exists to fix.
    const block = sweepBlock()
    expect(block).toContain(".lt('expires_at'")
    expect(block, 'the scheduled sweep is scoped to an owner').not.toContain("eq('owner_id'")
  })

  it('and records what it deleted', () => {
    const block = sweepBlock()
    expect(block).toContain("auditRetentionAction('EXAMINER_RUNS_EXPIRED'")
    expect(block).toContain('deleted: removed')
  })

  it('and counts it as children-priority work, not general tidying', () => {
    const block = sweepBlock()
    expect(block).toContain('summary.childrenPriorityCleanups += removed')
  })

  it('and a failure is reported rather than swallowed', () => {
    // A retention step that fails quietly is a retention promise that silently
    // stops being kept - which is the defect, one level up.
    const block = sweepBlock()
    expect(block).toContain("step: 'examiner_runs_expiry'")
  })
})

describe('the lazy sweep is still there as well', () => {
  it('so an owner who does return still gets an immediate clean-up', () => {
    // The counterweight: deleting the read-time sweep would make the scheduled
    // one the only path, and a teacher would see expired runs until the next
    // cron ran.
    expect(RUNS_ROUTE).toContain("from('examiner_marking_runs')")
    expect(RUNS_ROUTE).toContain(".eq('owner_id', user.id)")
    expect(RUNS_ROUTE).toContain(".lt('expires_at'")
  })
})

describe('the same tables are exportable to the person they belong to', () => {
  it('both examiner tables are subject tables', () => {
    // PAY-9's other half, already shipped: a subject-access export said nothing
    // about these at all. Pinned so a table cannot quietly leave the list.
    const names = SUPABASE_SUBJECT_TABLES.map((t) => t.table)
    expect(names).toContain('examiner_marking_runs')
    expect(names).toContain('examiner_mark_schemes')
  })

  it('keyed on owner_id, which is how the rows are actually addressed', () => {
    for (const table of ['examiner_marking_runs', 'examiner_mark_schemes']) {
      const entry = SUPABASE_SUBJECT_TABLES.find((t) => t.table === table)
      expect(entry, `${table} missing`).toBeDefined()
      expect(entry!.column, `${table} is keyed on the wrong column`).toBe('owner_id')
    }
  })

  it('and the list is a realistic size, not an empty array', () => {
    // Vacuity guard: `[].map(...)` contains nothing and satisfies no toContain,
    // but an empty list would make the two tests above fail rather than pass -
    // so this guards the opposite risk, a list that has quietly shrunk.
    expect(SUPABASE_SUBJECT_TABLES.length).toBeGreaterThan(10)
  })
})
