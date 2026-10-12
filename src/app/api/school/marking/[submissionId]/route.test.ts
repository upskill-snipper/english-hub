// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * GET /api/school/marking/[submissionId] (added 12 October 2026) opens one
 * essay for review. Same scope as the queue; an essay outside it answers 404
 * so the response does not confirm that it exists.
 */

const state = vi.hoisted(() => ({
  userId: 'u-t1' as string,
  fake: null as ReturnType<
    typeof import('@/__tests__/helpers/fake-supabase').createFakeSupabase
  > | null,
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: { id: state.userId } }, error: null }) },
  }),
  createServiceRoleClient: () => state.fake!.client,
}))
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: vi.fn(async (userId: string, roles?: string[]) => {
    const m = (state.fake!.tables.school_members ?? []).find(
      (r) => r.user_id === userId && r.invite_status === 'accepted',
    )
    return m && (!roles || roles.includes(m.role as string)) ? m : null
  }),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: Date.now() + 60_000 })),
}))

import { GET } from './route'

const breakdown = [
  {
    id: 'AO1',
    label: 'Response',
    marks: 8,
    maxMarks: 12,
    band: 'L4',
    justification: 'Clear reading.',
  },
  {
    id: 'AO2',
    label: 'Language',
    marks: 5,
    maxMarks: 12,
    band: 'L3',
    justification: 'Some analysis.',
  },
]

// Submission ids are uuids in the table; the route 404s anything else.
const S1 = '11111111-1111-4111-8111-111111111111'
const S2 = '22222222-2222-4222-8222-222222222222'

function seed() {
  return createFakeSupabase({
    school_members: [
      {
        id: 'm-t1',
        user_id: 'u-t1',
        school_id: 'school-1',
        role: 'teacher',
        invite_status: 'accepted',
      },
      {
        id: 'm-a2',
        user_id: 'u-a2',
        school_id: 'school-2',
        role: 'admin',
        invite_status: 'accepted',
      },
      {
        id: 'm-p1',
        user_id: 'p1',
        school_id: 'school-1',
        role: 'student',
        invite_status: 'accepted',
        full_name: 'Amira Khan',
      },
    ],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A' },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-other', name: '10B' },
    ],
    marking_submissions: [
      {
        id: S1,
        school_id: 'school-1',
        class_id: 'c1',
        student_id: 'p1',
        essay_text: 'An essay about Macbeth.',
        status: 'ai_marked',
        submitted_at: '2026-11-16T09:00:00Z',
        ai_grade: '6+',
        ai_uncertainty_flags: ['GRADE_INDICATIVE_ONLY'],
        ai_ao_breakdown: breakdown,
      },
      { id: S2, school_id: 'school-1', class_id: 'c2', student_id: 'p2', status: 'ai_marked' },
    ],
    profiles: [],
    teacher_moderations: [
      {
        id: 'mod-1',
        submission_id: S1,
        decision: 'corrected',
        teacher_grade: '6',
        ao_corrections: [{ ao: 'AO2', score: 7, maxScore: 12, comment: 'Better than that.' }],
        created_at: '2026-11-16T10:00:00Z',
      },
    ],
  })
}

const open = async (userId: string, id: string) => {
  state.userId = userId
  const res = await GET(new NextRequest(`http://localhost/api/school/marking/${id}`), {
    params: Promise.resolve({ submissionId: id }),
  })
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  state.fake = seed()
})

describe('opening one essay', () => {
  it("lets a teacher open their own class's essay, with the teacher's adjustment applied", async () => {
    const { status, body } = await open('u-t1', S1)
    expect(status).toBe(200)
    const s = body.submission
    expect(s.studentName).toBe('Amira Khan')
    expect(s.className).toBe('10A')
    expect(s.essayText).toBe('An essay about Macbeth.')
    expect(s.aiGrade).toBe('6')
    expect(s.aiGradeIndicative).toBe(true)
    expect(s.objectives).toEqual([
      expect.objectContaining({
        ao: 'AO1',
        marks: 8,
        aiMarks: 8,
        adjusted: false,
        aiComment: 'Clear reading.',
      }),
      expect.objectContaining({
        ao: 'AO2',
        marks: 7,
        aiMarks: 5,
        adjusted: true,
        teacherComment: 'Better than that.',
      }),
    ])
    expect(s.history).toEqual([{ decision: 'corrected', at: '2026-11-16T10:00:00Z', grade: '6' }])
  })

  it("answers 404 for another teacher's class", async () => {
    expect((await open('u-t1', S2)).status).toBe(404)
  })

  it('answers 404 to a member of another school', async () => {
    expect((await open('u-a2', S1)).status).toBe(404)
  })

  it('answers 404, not a server error, for an id that is not a uuid', async () => {
    expect((await open('u-t1', 'not-an-id')).status).toBe(404)
  })

  it('answers 500, not an empty essay, when the read fails', async () => {
    state.fake!.fail('marking_submissions', 'infinite recursion detected in policy', '42P17')
    const { status, body } = await open('u-t1', S1)
    expect(status).toBe(500)
    expect(body).not.toHaveProperty('submission')
  })
})
