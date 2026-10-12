// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * GET /api/school/students/[studentId] (changed 12 October 2026).
 *
 * Any member of the school could read any pupil, a teacher included. Now a
 * teacher reads only pupils in their own classes, the pupil's objective view
 * is built from the essays the viewer may see, and the "predicted grade"
 * that was a quiz average mapped onto a GCSE grade is gone.
 */

const state = vi.hoisted(() => ({
  userId: 'u-t1',
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

const breakdown = (ao1: number, ao2: number) => [
  { id: 'AO1', label: 'Response', marks: ao1, maxMarks: 12, band: 'L3', justification: 'x' },
  { id: 'AO2', label: 'Language', marks: ao2, maxMarks: 12, band: 'L3', justification: 'y' },
]

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
        id: 'm-t2',
        user_id: 'u-t2',
        school_id: 'school-1',
        role: 'teacher',
        invite_status: 'accepted',
      },
      {
        id: 'm-h1',
        user_id: 'u-h1',
        school_id: 'school-1',
        role: 'head_of_department',
        invite_status: 'accepted',
      },
      {
        id: 'm-x',
        user_id: 'u-x',
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
        year_group: 'Year 10',
      },
      // A pupil with a school membership but no class yet.
      {
        id: 'm-p4',
        user_id: 'p4',
        school_id: 'school-1',
        role: 'student',
        invite_status: 'accepted',
      },
    ],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A' },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-t2', name: '10B' },
    ],
    class_students: [
      { class_id: 'c1', student_id: 'p1', is_active: true },
      { class_id: 'c2', student_id: 'p1', is_active: true },
      { class_id: 'c2', student_id: 'p2', is_active: true },
    ],
    school_students: [],
    marking_submissions: [
      {
        id: 's1',
        school_id: 'school-1',
        class_id: 'c1',
        student_id: 'p1',
        mark_scheme_id: 'aqa-lit-paper1',
        status: 'approved',
        submitted_at: '2026-11-16T09:00:00Z',
        ai_score: 14,
        ai_max_marks: 24,
        ai_ao_breakdown: breakdown(10, 4),
      },
      // Written in the OTHER teacher's class: invisible to u-t1.
      {
        id: 's2',
        school_id: 'school-1',
        class_id: 'c2',
        student_id: 'p1',
        mark_scheme_id: 'aqa-lit-paper1',
        status: 'ai_marked',
        submitted_at: '2026-11-17T09:00:00Z',
        ai_score: 14,
        ai_max_marks: 24,
        ai_ao_breakdown: breakdown(2, 12),
      },
    ],
    teacher_moderations: [],
    profiles: [
      {
        id: 'p1',
        full_name: 'A. Khan',
        email: 'ak@pupils.example',
        year_group: null,
        exam_board: 'AQA',
      },
    ],
    module_progress: [
      {
        user_id: 'p1',
        module_id: 'm1',
        course_id: 'c-x',
        quiz_score: 95,
        completed: true,
        quiz_attempts: 1,
        time_spent_seconds: 60,
        completed_at: '2026-11-15T09:00:00Z',
      },
    ],
    enrolments: [],
    assessment_attempts: [],
    practice_sessions: [],
    certificates: [],
  })
}

const open = async (userId: string, pupilId: string) => {
  state.userId = userId
  const res = await GET(new NextRequest(`http://localhost/api/school/students/${pupilId}`), {
    params: Promise.resolve({ studentId: pupilId }),
  })
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  state.fake = seed()
})

describe('who may open a pupil', () => {
  it('a teacher may open a pupil in their class', async () => {
    const { status, body } = await open('u-t1', 'p1')
    expect(status).toBe(200)
    expect(body.pupil).toMatchObject({ name: 'Amira Khan', yearGroup: 'Year 10' })
    expect(body.pupil.classes).toEqual([{ id: 'c1', name: '10A' }])
  })

  it("a teacher may not open a pupil who is only in someone else's class", async () => {
    expect((await open('u-t1', 'p2')).status).toBe(404)
  })

  it('a head of department may open any pupil of the school, including one with no class', async () => {
    expect((await open('u-h1', 'p2')).status).toBe(200)
    expect((await open('u-h1', 'p4')).status).toBe(200)
  })

  it('a member of another school may not open this school’s pupil', async () => {
    expect((await open('u-x', 'p1')).status).toBe(404)
  })
})

describe('what the page is given', () => {
  it('builds the objective view only from essays the viewer may see', async () => {
    const { body } = await open('u-t1', 'p1')
    expect(body.essays.map((e: { id: string }) => e.id)).toEqual(['s1'])
    expect(body.objectives).toMatchObject({ essays: 1, smallSample: true })
    expect(body.objectives.strongest.ao).toBe('AO1')
    expect(body.objectives.weakest.ao).toBe('AO2')
  })

  it('never turns a quiz average into a predicted grade', async () => {
    const { body } = await open('u-t1', 'p1')
    expect(body.analytics.avg_quiz_score).toBe(95)
    expect(body.analytics.predicted_grade).toBeNull()
  })

  it('reports the last activity from what the pupil actually did', async () => {
    const { body } = await open('u-t1', 'p1')
    expect(body.lastActivityAt).toBe('2026-11-16T09:00:00Z')
  })

  it.each(['class_students', 'marking_submissions', 'module_progress', 'profiles'])(
    'answers 500, not a blank record, when %s cannot be read',
    async (table) => {
      state.fake!.fail(table, 'simulated', 'XX000')
      const { status, body } = await open('u-h1', 'p1')
      expect(status).toBe(500)
      expect(body).not.toHaveProperty('pupil')
    },
  )
})
