import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  listSubmissionsForStudent,
  parseGradeToNumber,
  studentCanSeeGrade,
  SUBMISSION_LIST_SELECT,
} from '@/lib/marking/persistence'

/**
 * A student's marking history existed on one device only (SF-2).
 *
 * THE DEFECT (19 September 2026). `/marking/history` and the `/marking`
 * landing page read `localStorage.getItem('english-hub-marking-history')` and
 * nothing else, and there was no list endpoint to read instead: `GET
 * /api/marking/{id}` is per-id, and `/api/submissions` exported only `POST`.
 *
 * So a student who marked essays on the school desktop opened the site on
 * their phone and saw an empty history and an empty progress graph. Their work
 * was safe in `marking_submissions` the whole time - nothing could ask for it.
 * Clearing browser data had the same effect, permanently.
 *
 * WHAT IS DELIBERATELY NOT IN THIS CHANGE. The original plan also wanted
 * `/api/mark` and `/api/mark/stream` to start persisting rows. They must not,
 * yet: `GET /api/school/marking` filters on `school_id` with no status filter,
 * so every essay an enrolled pupil marked privately through the mobile app
 * would appear in their teacher's dashboard - a child's private practice work
 * disclosed to their school with no consent step for it. It would also put
 * essay bodies on a path the retention docs describe as audit-row-only, and
 * outside the parental-deletion route. That half is a separate item with a
 * retention decision attached to it, and it needs Calum.
 */

// ─── The grade parser, which decides what a progress graph shows ────────────

describe('parsing a grade out of a TEXT column', () => {
  it.each([
    ['7', 7],
    ['Grade 8', 8],
    ['9', 9],
    ['1', 1],
  ])('reads %s as %s', (input, expected) => {
    expect(parseGradeToNumber(input)).toBe(expected)
  })

  it.each([[''], ['U'], ['ungraded'], ['pending'], [null], [undefined], [{}]])(
    'returns null rather than 0 for %s',
    (input) => {
      // This is the load-bearing case. An unmarked essay scored as 0 would
      // drag a student's average down and draw a false decline on their
      // progress graph - the one thing this screen must never do.
      expect(parseGradeToNumber(input)).toBeNull()
    },
  )

  it('rejects out-of-range numbers', () => {
    expect(parseGradeToNumber(0)).toBeNull()
    expect(parseGradeToNumber(10)).toBeNull()
    expect(parseGradeToNumber(7)).toBe(7)
  })
})

// ─── Who may see a mark ─────────────────────────────────────────────────────

describe('the student-visibility safeguard', () => {
  it('shows a self-study learner their AI mark as soon as it exists', () => {
    expect(studentCanSeeGrade('ai_marked', 'b2c_self')).toBe(true)
  })

  it('withholds an AI draft from a school pupil until a teacher approves', () => {
    // The teacher is in the loop by design: an unapproved AI mark reaching a
    // pupil through a LIST view would defeat the per-id route's safeguard.
    expect(studentCanSeeGrade('ai_marked', 'b2b_class')).toBe(false)
    expect(studentCanSeeGrade('teacher_review_required', 'b2b_class')).toBe(false)
  })

  it('shows a school pupil work a teacher has RETURNED to them', () => {
    // Withholding 'returned' was a real bug once: it made "send back to
    // student" a no-op from the student's side. It must not come back via
    // the list endpoint.
    expect(studentCanSeeGrade('returned', 'b2b_class')).toBe(true)
  })

  it('shows an approved mark to both', () => {
    expect(studentCanSeeGrade('approved', 'b2b_class')).toBe(true)
    expect(studentCanSeeGrade('approved', 'b2c_self')).toBe(true)
  })

  it('withholds a freshly submitted, unmarked row from everyone', () => {
    expect(studentCanSeeGrade('submitted', 'b2c_self')).toBe(false)
    expect(studentCanSeeGrade('submitted', 'b2b_class')).toBe(false)
  })
})

// ─── The query itself ───────────────────────────────────────────────────────

interface Captured {
  table?: string
  select?: string
  eqArgs?: [string, string]
  orderArgs?: [string, { ascending: boolean }]
  limitArg?: number
}

function fakeClient(rows: Record<string, unknown>[], captured: Captured, error?: unknown) {
  const builder = {
    select(cols: string) {
      captured.select = cols
      return builder
    },
    eq(col: string, val: string) {
      captured.eqArgs = [col, val]
      return builder
    },
    order(col: string, opts: { ascending: boolean }) {
      captured.orderArgs = [col, opts]
      return builder
    },
    limit(n: number) {
      captured.limitArg = n
      return Promise.resolve({ data: error ? null : rows, error: error ?? null })
    },
  }
  return {
    from(table: string) {
      captured.table = table
      return builder
    },
  } as never
}

const ROW = {
  id: 'sub-1',
  question_text: 'Explore how Dickens presents Scrooge',
  essay_title: null,
  exam_board: 'AQA',
  paper: 'Paper 1',
  mark_scheme_id: 'aqa-lit-paper1',
  ai_grade: 'Grade 7',
  ai_grade_band: 'Level 4',
  ai_score: 24,
  ai_max_marks: 30,
  teacher_grade: null,
  status: 'ai_marked',
  source: 'b2c_self',
  submitted_at: '2026-09-18T10:00:00.000Z',
  essay_text: 'one two three four five',
}

describe('listing a student’s own submissions', () => {
  it('queries newest-first, scoped to the student, with the limit applied', async () => {
    const captured: Captured = {}
    await listSubmissionsForStudent(fakeClient([ROW], captured), 'student-uuid', 25)
    expect(captured.table).toBe('marking_submissions')
    expect(captured.eqArgs).toEqual(['student_id', 'student-uuid'])
    expect(captured.orderArgs).toEqual(['submitted_at', { ascending: false }])
    expect(captured.limitArg).toBe(25)
  })

  it('NEVER returns the essay body', async () => {
    // The body is selected only to count words. Shipping children's essay
    // text to render a list of titles would be a gratuitous widening of what
    // crosses the wire.
    const [item] = await listSubmissionsForStudent(fakeClient([ROW], {}), 'u', 10)
    expect(JSON.stringify(item)).not.toContain('one two three')
    expect(item).not.toHaveProperty('essay_text')
    expect(item.wordCount).toBe(5)
  })

  it('falls back to the question text when essay_title is null', async () => {
    // insertSubmission never writes essay_title, so it is NULL on every row
    // the spine creates. Mapping title straight from it would have rendered a
    // column of blanks - worse than what it replaced.
    const [item] = await listSubmissionsForStudent(fakeClient([ROW], {}), 'u', 10)
    expect(item.title).toBe('Explore how Dickens presents Scrooge')
  })

  it('prefers a teacher grade over the AI grade', async () => {
    // The per-id hydration this replaces resolved `teacher_grade ?? ai_grade`.
    // Selecting only ai_grade would quietly show a pupil the AI's draft in
    // place of their teacher's approved mark.
    const [item] = await listSubmissionsForStudent(
      fakeClient([{ ...ROW, teacher_grade: '8', ai_grade: '6' }], {}),
      'u',
      10,
    )
    expect(item.grade).toBe(8)
  })

  it('selects teacher_grade at all, without which the above is impossible', () => {
    expect(SUBMISSION_LIST_SELECT).toContain('teacher_grade')
  })

  it('does not select the heavy columns the list has no use for', () => {
    expect(SUBMISSION_LIST_SELECT).not.toContain('ai_result')
    expect(SUBMISSION_LIST_SELECT).not.toContain('ai_feedback')
  })

  it('rethrows a database error rather than reporting an empty history', async () => {
    // An empty array here would read to the caller as "this student has never
    // marked anything", which is the defect being fixed wearing a new hat.
    // The route decides to degrade; the query must not decide it silently.
    await expect(
      listSubmissionsForStudent(fakeClient([], {}, new Error('boom')), 'u', 10),
    ).rejects.toThrow()
  })
})

// ─── The wiring, asserted structurally ──────────────────────────────────────

describe('the surfaces that were localStorage-only', () => {
  function code(rel: string): string {
    return readFileSync(join(process.cwd(), rel), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .split(/\r?\n/)
      .map((l) => l.replace(/\/\/.*$/, ''))
      .join('\n')
  }

  it('the API exposes a GET, which it never did', () => {
    expect(code('src/app/api/submissions/route.ts')).toMatch(
      /export async function GET\(request: NextRequest\)/,
    )
  })

  it('the GET reads through the RLS-scoped client, not the service role', () => {
    // With the service-role client, RLS is bypassed and the only thing
    // standing between one child and another child's essays is the correctness
    // of the user id passed in.
    const body = code('src/app/api/submissions/route.ts')
    const get = body.slice(
      body.indexOf('export async function GET'),
      body.indexOf('export async function POST'),
    )
    expect(get).toContain('createServerSupabaseClient()')
    expect(get).not.toContain('createServiceRoleClient')
  })

  it('the GET applies the visibility safeguard', () => {
    const body = code('src/app/api/submissions/route.ts')
    const get = body.slice(
      body.indexOf('export async function GET'),
      body.indexOf('export async function POST'),
    )
    expect(get).toContain('studentCanSeeGrade(')
  })

  it.each(['src/app/marking/history/page.tsx', 'src/app/marking/page.tsx'])(
    '%s asks the server rather than only this device',
    (rel) => {
      const body = code(rel)
      expect(body).toContain("fetch('/api/submissions")
      // localStorage stays as a merge fallback - legacy /api/mark entries were
      // never persisted server-side, and dropping them would delete history a
      // student can currently see.
      expect(body).toContain('english-hub-marking-history')
    },
  )

  it('the history page no longer hydrates grades one request at a time', () => {
    // The per-id hydration loop only ever ran for entries ALREADY in the local
    // array, so it could not help a second device. The list carries the grade.
    const body = code('src/app/marking/history/page.tsx')
    expect(body).not.toMatch(/fetch\(`\/api\/marking\/\$\{/)
  })
})
