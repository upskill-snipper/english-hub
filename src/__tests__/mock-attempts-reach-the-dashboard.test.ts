import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { SupabaseClient } from '@supabase/supabase-js'
import {
  attemptRow,
  multipleChoiceScore,
  persistMockAttempt,
  type MockAttempt,
  type MockAttemptQuestion,
} from '@/lib/mock-exams/persist-attempt'

/**
 * SF-4's second half: a finished mock exam is recorded.
 *
 * The handoff to /marking/submit was built. Persistence was not, so a student
 * could sit a full paper, read the results screen, and leave no trace -
 * /dashboard/grades counts practice out of `practice_sessions` and would still
 * tell them they had done none.
 *
 * THE COLUMN NAMES ARE THE POINT. The neighbouring insert on /practice named
 * five columns that do not exist, so every save there failed and the table held
 * zero rows for months (see practice-sessions-writes-real-columns.test.ts).
 * Writing a second inserter against the same table without pinning its columns
 * would have been the same bug twice, so the same pinned list is asserted here.
 *
 * Read from information_schema on production, 19 September 2026.
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
]

const QUESTIONS: MockAttemptQuestion[] = [
  { number: 1, label: 'True or false', marks: 4, isMultipleChoice: true, earned: 3, answer: '' },
  { number: 2, label: 'Summary', marks: 8, isMultipleChoice: true, earned: 8, answer: '' },
  { number: 3, label: 'Language analysis', marks: 12, earned: null, answer: 'The writer uses...' },
  { number: 4, label: 'Transactional writing', marks: 40, earned: null, answer: 'Dear Sir,\nI am' },
]

const ATTEMPT: MockAttempt = {
  paperId: 'aqa-lang-p2',
  paperName: 'English Language Paper 2',
  examBoard: 'AQA',
  paperType: 'language',
  paperNumber: 2,
  elapsedSeconds: 5400,
  questions: QUESTIONS,
}

/** A Supabase stand-in whose insert resolves to whatever it is given. */
function fakeClient(result: { error: { message: string } | null }) {
  const insert = vi.fn().mockResolvedValue(result)
  return {
    client: { from: vi.fn().mockReturnValue({ insert }) } as unknown as SupabaseClient,
    insert,
  }
}

describe('the row only names columns that exist', () => {
  it('every key is a real column', () => {
    const unknown = Object.keys(attemptRow('user-1', ATTEMPT)).filter(
      (k) => !LIVE_COLUMNS.includes(k),
    )
    expect(unknown, 'these columns do not exist, so the insert would fail silently').toEqual([])
  })

  it('and the pinned list matches the migration that created the table', () => {
    const sql = readFileSync(
      join(process.cwd(), 'supabase/migrations/001_initial_schema.sql'),
      'utf8',
    )
    const at = sql.indexOf('CREATE TABLE IF NOT EXISTS public.practice_sessions')
    const block = sql.slice(at, sql.indexOf(');', at))
    for (const column of LIVE_COLUMNS) expect(block, `${column} missing`).toContain(column)
  })

  it('never sends self_rating 0, which the CHECK constraint rejects', () => {
    // A mock exam has no self-rating. 0 is not "unrated", it is a constraint
    // violation, and it is the second reason the /practice insert never worked.
    expect(attemptRow('user-1', ATTEMPT).self_rating).toBeNull()
  })

  it('marks the row as a whole-paper attempt', () => {
    // So the dashboard can tell it from the single-question rows /practice
    // writes into the same table.
    expect(attemptRow('user-1', ATTEMPT).question_type).toBe('mock-exam')
  })
})

describe('what it records', () => {
  it('scores only the multiple-choice questions', () => {
    // Written answers are never scored by the app on this surface, and must not
    // start being scored here.
    expect(multipleChoiceScore(QUESTIONS)).toEqual({ earned: 11, available: 12 })
  })

  it('counts no written question towards the available marks', () => {
    // The counterweight: summing every question's marks would give 64 and
    // present a self-marked paper as though the app had marked it.
    const { available } = multipleChoiceScore(QUESTIONS)
    expect(available).toBeLessThan(QUESTIONS.reduce((a, q) => a + q.marks, 0))
  })

  it('keeps the written answers, which is what makes the attempt worth revisiting', () => {
    const data = attemptRow('user-1', ATTEMPT).question_data
    const q3 = data.questions.find((q) => q.number === 3)
    expect(q3?.answer).toBe('The writer uses...')
  })

  it('and counts their words', () => {
    const data = attemptRow('user-1', ATTEMPT).question_data
    expect(data.questions.find((q) => q.number === 3)?.words).toBe(3)
    expect(data.questions.find((q) => q.number === 1)?.words).toBe(0)
  })

  it('records the time the student actually spent', () => {
    expect(attemptRow('user-1', ATTEMPT).time_spent_seconds).toBe(5400)
  })
})

describe('a failed save does not cost the student their results screen', () => {
  it('writes nothing for a signed-out visitor, and says it did not try', () => {
    const { client, insert } = fakeClient({ error: null })
    return persistMockAttempt(client, null, ATTEMPT).then((outcome) => {
      expect(insert).not.toHaveBeenCalled()
      expect(outcome).toEqual({ attempted: false, saved: false })
    })
  })

  it('reports a database error rather than throwing', async () => {
    const { client } = fakeClient({ error: { message: 'column does not exist' } })
    const outcome = await persistMockAttempt(client, 'user-1', ATTEMPT)
    expect(outcome.attempted).toBe(true)
    expect(outcome.saved).toBe(false)
    expect(outcome.error).toContain('column does not exist')
  })

  it('and survives the client throwing outright', async () => {
    const client = {
      from: () => {
        throw new Error('network down')
      },
    } as unknown as SupabaseClient
    const outcome = await persistMockAttempt(client, 'user-1', ATTEMPT)
    expect(outcome).toMatchObject({ attempted: true, saved: false })
  })

  it('reports success when it succeeds', async () => {
    const { client, insert } = fakeClient({ error: null })
    const outcome = await persistMockAttempt(client, 'user-1', ATTEMPT)
    expect(insert).toHaveBeenCalledOnce()
    expect(outcome).toEqual({ attempted: true, saved: true })
  })
})

describe('the page says so when it did not save', () => {
  const page = readFileSync(join(process.cwd(), 'src/app/mock-exams/[id]/page.tsx'), 'utf8')

  it('renders a notice on a failed save', () => {
    // THE ASSERTION THAT MATTERS. A save that fails quietly is this codebase's
    // commonest defect: the student would find an empty dashboard weeks later
    // with no idea why.
    expect(page).toContain('saveOutcome?.attempted && !saveOutcome.saved')
    expect(page).toContain("t('mock.not_saved')")
  })

  it('and not to a signed-out visitor, for whom nothing went wrong', () => {
    // The counterweight: showing it whenever `!saved` would tell every
    // signed-out visitor that something failed when nothing was attempted.
    expect(page).toContain('saveOutcome?.attempted &&')
  })

  it('the string it shows is a real dictionary key', () => {
    const en = readFileSync(join(process.cwd(), 'src/lib/i18n/generated/en.ts'), 'utf8')
    expect(en).toContain("'mock.not_saved'")
  })
})
