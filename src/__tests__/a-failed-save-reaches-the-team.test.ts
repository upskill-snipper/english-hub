// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest'
import type { SupabaseClient } from '@supabase/supabase-js'
import {
  SAVE_FAILURE_ENDPOINT,
  describeSaveError,
  parseSaveFailureReport,
  reportSaveFailure,
  sanitiseSaveMessage,
  type SaveFailureReporter,
} from '@/lib/save-failure-report'
import { persistMockAttempt, type MockAttempt } from '@/lib/mock-exams/persist-attempt'
import { savePracticeSession } from '@/lib/practice/save-session'
import type { PracticeQuestion } from '@/data/practice/types'

/**
 * A failed save of a student's work reaches the team, once, and carries none
 * of the student's work.
 *
 * WHY (10 October 2026). Production's practice_sessions table was empty, and
 * nothing could say whether the saves were failing, because a failure reached
 * nobody: /practice showed the student "Could not save" and kept the error,
 * the mock exam logged it to the student's own browser console, and the
 * browser has no Sentry. The answer had to be read from Postgres statistics.
 * Both saves now report a failure through src/lib/save-failure-report.ts to
 * /api/save-failures (tested in src/app/api/save-failures/route.test.ts).
 *
 * THE PRIVACY LINE. Most users are children. When Postgres refuses a row it
 * puts the row's values in the error's `details` ("Failing row contains
 * (...)"), and the row holds the student's answer. A report carries the code,
 * the status and the message with quoted values removed, never `details`,
 * `hint`, the answer or the account: each test below checks the answer is
 * not in what would be sent.
 */

const ANSWER = 'An unmistakable answer: the schoolboy droops under the cruel eye'

const MOCK: MockAttempt = {
  paperId: 'aqa-lit-p1-a',
  paperName: 'Paper 1: Shakespeare and the 19th-Century Novel',
  examBoard: 'AQA',
  paperType: 'literature',
  paperNumber: 1,
  elapsedSeconds: 3600,
  questions: [{ number: 1, label: 'Macbeth', marks: 34, earned: null, answer: ANSWER }],
}

const QUESTION = {
  id: 'aqa-lang-p1-q4',
  board: 'aqa',
  paper: 1,
  questionType: 'evaluation',
  title: 'Question 4',
  marks: 20,
} as PracticeQuestion

/** What row-level security returns when it refuses the insert, with the row in `details`. */
const REFUSED = {
  code: '42501',
  message: 'new row violates row-level security policy for table "practice_sessions"',
  details: `Failing row contains (5f0c, ${ANSWER}, null)`,
  hint: null,
}

/** A Supabase stand-in whose insert resolves to `result`. */
function client(result: { error: unknown; status?: number }) {
  const insert = vi.fn().mockResolvedValue(result)
  return {
    supabase: { from: vi.fn().mockReturnValue({ insert }) } as unknown as SupabaseClient,
    insert,
  }
}
const throwing = {
  from: () => {
    throw new Error('Failed to fetch')
  },
} as unknown as SupabaseClient

/** The report a call to the reporter would send, built as reportSaveFailure builds it. */
const sent = (call: Parameters<SaveFailureReporter>) => ({
  path: call[0],
  ...describeSaveError(call[1], call[2]),
})

describe('a finished mock exam that fails to save', () => {
  it('is reported once, with its code and status and none of the answers', async () => {
    const report = vi.fn<SaveFailureReporter>()
    const { supabase } = client({ error: REFUSED, status: 403 })
    const outcome = await persistMockAttempt(supabase, 'user-1', MOCK, report)
    expect(outcome).toMatchObject({ attempted: true, saved: false })
    expect(report).toHaveBeenCalledOnce()
    const r = sent(report.mock.calls[0])
    expect(r).toEqual({
      path: 'mock-exam',
      code: '42501',
      status: 403,
      message: 'new row violates row-level security policy for table "practice_sessions"',
    })
    expect(JSON.stringify(r)).not.toContain(ANSWER)
  })

  it('is reported once when the client throws, as "thrown"', async () => {
    const report = vi.fn<SaveFailureReporter>()
    await persistMockAttempt(throwing, 'user-1', MOCK, report)
    expect(report).toHaveBeenCalledOnce()
    expect(sent(report.mock.calls[0])).toEqual({
      path: 'mock-exam',
      code: 'thrown',
      status: null,
      message: 'Failed to fetch',
    })
  })

  it('reports nothing when the save succeeds, or when nobody is signed in', async () => {
    const report = vi.fn<SaveFailureReporter>()
    const { supabase, insert } = client({ error: null, status: 201 })
    expect(await persistMockAttempt(supabase, 'user-1', MOCK, report)).toEqual({
      attempted: true,
      saved: true,
    })
    expect(await persistMockAttempt(supabase, null, MOCK, report)).toEqual({
      attempted: false,
      saved: false,
    })
    expect(insert).toHaveBeenCalledOnce()
    expect(report).not.toHaveBeenCalled()
  })
})

describe('a /practice answer that fails to save', () => {
  const input = {
    userId: 'user-1',
    currentQuestion: QUESTION,
    answer: ANSWER,
    rating: 0,
    elapsed: 312,
    timedMode: false,
  }

  it('is reported once, with its code and status and none of the answer', async () => {
    const report = vi.fn<SaveFailureReporter>()
    const { supabase } = client({ error: REFUSED, status: 403 })
    expect(await savePracticeSession(supabase, input, report)).toBe(false)
    expect(report).toHaveBeenCalledOnce()
    const r = sent(report.mock.calls[0])
    expect(r).toMatchObject({ path: 'practice', code: '42501', status: 403 })
    expect(JSON.stringify(r)).not.toContain(ANSWER)
  })

  it('is reported once when the client throws', async () => {
    const report = vi.fn<SaveFailureReporter>()
    expect(await savePracticeSession(throwing, input, report)).toBe(false)
    expect(report).toHaveBeenCalledOnce()
    expect(sent(report.mock.calls[0])).toMatchObject({ path: 'practice', code: 'thrown' })
  })

  it('reports nothing when the save succeeds, and still sends no self-rating of 0', async () => {
    const report = vi.fn<SaveFailureReporter>()
    const { supabase, insert } = client({ error: null, status: 201 })
    expect(await savePracticeSession(supabase, input, report)).toBe(true)
    expect(report).not.toHaveBeenCalled()
    expect(insert.mock.calls[0][0]).toMatchObject({
      user_id: 'user-1',
      self_rating: null,
      user_answer: ANSWER,
    })
  })
})

describe('what a report may carry', () => {
  it('keeps the database names in a message and drops quoted values', () => {
    expect(sanitiseSaveMessage('invalid input syntax for type integer: "12.5"')).toBe(
      'invalid input syntax for type integer: "…"',
    )
    expect(
      sanitiseSaveMessage(
        "Could not find the 'timed_mode' column of 'practice_sessions' in the schema cache",
      ),
    ).toBe("Could not find the 'timed_mode' column of 'practice_sessions' in the schema cache")
    expect(sanitiseSaveMessage(`value "${ANSWER}" too long`)).not.toContain('schoolboy')
    expect(sanitiseSaveMessage('x'.repeat(1000))).toHaveLength(300)
    expect(sanitiseSaveMessage(undefined)).toBe('')
  })

  it('never reads details or hint', () => {
    const r = describeSaveError({ ...REFUSED, hint: ANSWER })
    expect(Object.keys(r).sort()).toEqual(['code', 'message', 'status'])
    expect(JSON.stringify(r)).not.toContain(ANSWER)
  })

  it('lets the server accept the four fields and nothing else', () => {
    expect(
      parseSaveFailureReport({
        path: 'practice',
        code: '42501',
        status: 403,
        message: 'refused',
        details: ANSWER,
        answer: ANSWER,
        userId: 'user-1',
      }),
    ).toEqual({ path: 'practice', code: '42501', status: 403, message: 'refused' })
    expect(parseSaveFailureReport({ path: 'essay', code: '42501' })).toBeNull()
    expect(parseSaveFailureReport({ path: 'practice', code: 'not a code at all' })).toBeNull()
    expect(parseSaveFailureReport('practice')).toBeNull()
    expect(parseSaveFailureReport({ path: 'mock-exam', code: 'thrown', status: 99999 })).toEqual({
      path: 'mock-exam',
      code: 'thrown',
      status: null,
      message: '',
    })
  })
})

describe('sending a report', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('posts the report alone, to the site itself, without waiting', () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }))
    vi.stubGlobal('fetch', fetchMock)
    reportSaveFailure('practice', REFUSED, 403)
    expect(fetchMock).toHaveBeenCalledOnce()
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe(SAVE_FAILURE_ENDPOINT)
    expect(init).toMatchObject({ method: 'POST', credentials: 'same-origin', keepalive: true })
    expect(JSON.parse(String(init.body))).toEqual({
      path: 'practice',
      code: '42501',
      status: 403,
      message: 'new row violates row-level security policy for table "practice_sessions"',
    })
    expect(String(init.body)).not.toContain(ANSWER)
  })

  it('and never throws, whether fetch throws or rejects', () => {
    vi.stubGlobal('fetch', () => {
      throw new Error('offline')
    })
    expect(() => reportSaveFailure('practice', REFUSED)).not.toThrow()
    vi.stubGlobal('fetch', () => Promise.reject(new Error('offline')))
    expect(() => reportSaveFailure('mock-exam', REFUSED)).not.toThrow()
  })
})
