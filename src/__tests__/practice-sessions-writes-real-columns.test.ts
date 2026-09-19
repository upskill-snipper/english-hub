import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Every practice session a student saved was thrown away by the database.
 *
 * FOUND 19 September 2026, while checking SF-4. `/practice` inserted into
 * `practice_sessions` using five column names the table does not have:
 *
 *   question_id   board   answer   time_seconds   timed_mode
 *
 * The table has had `exam_board`, `user_answer`, `time_spent_seconds` and a
 * `question_data` JSONB since 001_initial_schema.sql. So every save failed,
 * the student saw "Could not save your session", and the table held 0 rows.
 * Ever. `/dashboard/grades` counts a student's practice out of this table, so
 * that count has been zero for everyone since the page shipped.
 *
 * A SECOND, INDEPENDENT REASON it could not work: `self_rating` is
 * CHECK (self_rating BETWEEN 1 AND 5) and the page's `rating` state starts at
 * 0, so a student who saved without rating themselves failed the constraint
 * even with the right column names. Both are fixed; this pins both.
 *
 * VERIFIED AGAINST PRODUCTION, NOT THE MIGRATION. CLAUDE.md structural fact 3
 * says `_migrations_applied` records an intention rather than a reality, so the
 * live column set was read from information_schema before anything was
 * changed. In this case the migration and the database agreed, and it was the
 * CODE that had drifted away from both - which is the case the schema-drift
 * checker does not cover, because it compares migrations against the database
 * and never looks at what the application asks for.
 *
 * WHAT THIS TEST IS. A pin on the column set, checked against the literal the
 * page inserts. It cannot reach the database, so it cannot prove the table
 * still looks like this; re-verify with information_schema if a migration
 * touches the table. What it does catch is the thing that actually happened:
 * somebody writing a plausible column name that no table has.
 */

const ROOT = process.cwd()
const PRACTICE = readFileSync(join(ROOT, 'src/app/practice/page.tsx'), 'utf8')
const GRADES = readFileSync(join(ROOT, 'src/app/dashboard/grades/page.tsx'), 'utf8')
const MIGRATION = readFileSync(join(ROOT, 'supabase/migrations/001_initial_schema.sql'), 'utf8')

/**
 * The live columns, read from information_schema on production on 19 September
 * 2026 and identical to the migration's definition.
 */
const LIVE_COLUMNS = [
  'id',
  'user_id',
  'exam_board',
  'paper',
  'question_type',
  'question_data',
  'user_answer',
  'self_rating',
  'time_spent_seconds',
  'created_at',
] as const

/** The keys of the object literal passed to .insert() for practice_sessions. */
function insertedKeys(source: string): string[] {
  const at = source.indexOf(".from('practice_sessions').insert({")
  if (at === -1) return []
  const open = source.indexOf('{', at)
  // Walk to the matching brace so a nested object (question_data) is included
  // rather than ending the scan early.
  let depth = 0
  let end = open
  do {
    if (source[end] === '{') depth += 1
    if (source[end] === '}') depth -= 1
    end += 1
  } while (depth > 0 && end < source.length)

  const body = source.slice(open + 1, end - 1)
  // Top-level keys only: skip anything nested inside question_data.
  const keys: string[] = []
  let nest = 0
  for (const line of body.split('\n')) {
    const trimmed = line.trim()
    if (nest === 0) {
      const m = trimmed.match(/^([a-z_][a-z0-9_]*)\s*:/i)
      if (m) keys.push(m[1])
    }
    nest += (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length
  }
  return keys
}

describe('the insert was found at all', () => {
  it('parsed a realistic set of keys', () => {
    // Without this, every assertion below passes by parsing nothing - the
    // failure mode of every check in this repository that has gone quiet.
    expect(insertedKeys(PRACTICE).length).toBeGreaterThan(5)
  })
})

describe('/practice writes columns that exist', () => {
  it('every key it inserts is a real column', () => {
    const unknown = insertedKeys(PRACTICE).filter(
      (k) => !(LIVE_COLUMNS as readonly string[]).includes(k),
    )
    expect(
      unknown,
      'these columns do not exist on practice_sessions, so the insert fails and the session is lost',
    ).toEqual([])
  })

  it.each(['question_id', 'board', 'answer', 'time_seconds', 'timed_mode'])(
    'and %s, which it used to insert, is gone',
    (dead) => {
      // Named individually so a failure says which one came back.
      const keys = insertedKeys(PRACTICE)
      expect(keys).not.toContain(dead)
    },
  )

  it('keeps the three orphaned fields in question_data rather than dropping them', () => {
    // The counterweight. Deleting question_id, timed_mode and the rest would
    // satisfy the assertions above and quietly lose data the page collects.
    expect(PRACTICE).toContain('question_data: {')
    expect(PRACTICE).toContain('questionId: currentQuestion.id')
    expect(PRACTICE).toContain('timedMode,')
  })

  it('and never sends self_rating 0, which the CHECK constraint rejects', () => {
    // The second, independent reason this could not work.
    expect(MIGRATION).toContain('self_rating INTEGER CHECK (self_rating BETWEEN 1 AND 5)')
    expect(PRACTICE).toContain('self_rating: rating > 0 ? rating : null')
  })
})

describe('the grades page describes the same table', () => {
  it.each(['question_id', 'difficulty', 'time_seconds'])(
    'no longer declares %s, which the table has never had',
    (dead) => {
      const block = GRADES.slice(
        GRADES.indexOf('interface PracticeSession'),
        GRADES.indexOf('}', GRADES.indexOf('interface PracticeSession')),
      )
      expect(block).not.toContain(dead)
    },
  )

  it('and declares only real columns', () => {
    const start = GRADES.indexOf('interface PracticeSession')
    const block = GRADES.slice(start, GRADES.indexOf('}', start))
    const declared = [...block.matchAll(/^\s{2}([a-z_][a-z0-9_]*)\??:/gim)].map((m) => m[1])
    expect(declared.length).toBeGreaterThan(5)
    const unknown = declared.filter((k) => !(LIVE_COLUMNS as readonly string[]).includes(k))
    expect(unknown, 'the interface describes columns the table does not have').toEqual([])
  })
})

describe('the pinned column set matches the migration that created it', () => {
  it('so a migration that changes the table fails this too', () => {
    const at = MIGRATION.indexOf('CREATE TABLE IF NOT EXISTS public.practice_sessions')
    const block = MIGRATION.slice(at, MIGRATION.indexOf(');', at))
    for (const column of LIVE_COLUMNS) {
      expect(block, `${column} is not in the migration`).toContain(column)
    }
  })
})
