// ─── GET /api/marking/[submissionId]: what a pupil may see, at each status ──
//
// CHANGED 12 October 2026. A class ('b2b_class') pupil used to see nothing
// until a teacher had approved or returned their essay. Calum decided that a
// school pupil sees their AI feedback straight away, labelled as AI, exactly
// as an individual pupil does; the teacher reviews afterwards, may change the
// mark, and the pupil then sees the teacher's decision. The rule is one
// function, studentCanSeeGrade, shared with the list endpoint and the results
// page; this pins what the route actually returns for every status.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

const PUPIL = 'a0000000-0000-4000-8000-0000000000a1'
const SCHOOL = 'a0000000-0000-4000-8000-0000000000c3'

let caller = PUPIL
let row: Record<string, unknown> | null = null
let schoolMember: unknown = null

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: { id: caller } }, error: null }) },
  }),
  createServiceRoleClient: () => ({}),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true, remaining: 59, resetAt: Date.now() + 1000 }),
}))
vi.mock('@/lib/school-auth', () => ({ verifySchoolMember: async () => schoolMember }))
vi.mock('@/lib/marking/persistence', async () => {
  // The REAL visibility rule; only the read is a stand-in.
  const actual = await vi.importActual<typeof import('@/lib/marking/persistence')>(
    '@/lib/marking/persistence',
  )
  return { ...actual, loadSubmission: async () => row }
})

function essay(source: string, status: string) {
  return {
    id: 'sub-1',
    school_id: source === 'b2b_class' ? SCHOOL : null,
    student_id: PUPIL,
    class_id: source === 'b2b_class' ? 'class-1' : null,
    source,
    status,
    essay_text: 'The essay.',
    ai_result: { predictedGrade: '6', summary: 'AI summary' },
    ai_grade: '6',
    ai_feedback: 'AI summary',
    teacher_grade: '7',
    teacher_comment: 'Teacher comment',
    final_teacher_mark: '7',
    final_teacher_feedback: 'Teacher comment',
  }
}

async function read() {
  const { GET } = await import('@/app/api/marking/[submissionId]/route')
  const res = await GET(new NextRequest('http://localhost/api/marking/sub-1'), {
    params: Promise.resolve({ submissionId: 'sub-1' }),
  })
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  caller = PUPIL
  schoolMember = null
})

const VISIBLE_TO_A_CLASS_PUPIL = ['ai_marked', 'approved', 'returned', 'teacher_reviewed']
const HIDDEN_FROM_A_CLASS_PUPIL = [
  'submitted',
  'pending',
  'teacher_review_required',
  'rejected',
  'training_ready',
  'excluded_from_training',
]

describe('a class pupil reading their own essay', () => {
  it.each(VISIBLE_TO_A_CLASS_PUPIL)('sees the result at %s', async (status) => {
    row = essay('b2b_class', status)
    const { status: http, body } = await read()
    expect(http).toBe(200)
    expect(body.submission.ai_result).toEqual({ predictedGrade: '6', summary: 'AI summary' })
    expect(body.submission.teacher_grade).toBe('7')
    expect(body.submission.teacher_comment).toBe('Teacher comment')
  })

  it.each(HIDDEN_FROM_A_CLASS_PUPIL)('sees no result at %s', async (status) => {
    row = essay('b2b_class', status)
    const { status: http, body } = await read()
    expect(http).toBe(200)
    expect(body.submission.status).toBe(status)
    expect(body.submission.ai_result).toBeNull()
    expect(body.submission.ai_grade).toBeNull()
    expect(body.submission.teacher_grade).toBeNull()
    expect(body.submission.teacher_comment).toBeNull()
    expect(body.submission.final_teacher_mark).toBeNull()
    // The essay itself is theirs, and stays readable.
    expect(body.submission.essay_text).toBe('The essay.')
  })
})

describe('a self-study pupil keeps the rule they had', () => {
  it.each(['ai_marked', 'approved', 'returned'])('sees the result at %s', async (status) => {
    row = essay('b2c_self', status)
    expect((await read()).body.submission.ai_result).not.toBeNull()
  })

  it.each(['submitted', 'pending', 'teacher_review_required', 'rejected'])(
    'sees no result at %s',
    async (status) => {
      row = essay('b2c_self', status)
      expect((await read()).body.submission.ai_result).toBeNull()
    },
  )
})

describe('anyone else', () => {
  it('another pupil is told it does not exist', async () => {
    caller = 'a0000000-0000-4000-8000-0000000000d4'
    row = essay('b2b_class', 'ai_marked')
    expect((await read()).status).toBe(404)
  })

  it('staff at the pupil’s school see the full row, whatever its status', async () => {
    caller = 'a0000000-0000-4000-8000-0000000000b2'
    schoolMember = { school_id: SCHOOL, role: 'teacher', id: 'mem-1' }
    row = essay('b2b_class', 'teacher_review_required')
    const { body } = await read()
    expect(body.submission.ai_result).not.toBeNull()
  })
})
