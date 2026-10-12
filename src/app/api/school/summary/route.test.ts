// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * GET /api/school/summary (added 12 October 2026) replaces the dashboard's
 * and onboarding wizard's browser-side reads of school_members and classes,
 * which RLS recursion turned into zeros. Scoped like the marking queue; a
 * failed read is a 500, never a dashboard of zeros.
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

const recent = new Date(Date.now() - 2 * 86_400_000).toISOString()
const old = '2026-01-01T09:00:00Z'

function seed() {
  return createFakeSupabase({
    schools: [
      {
        id: 'school-1',
        name: 'Test Academy',
        access_type: 'paid',
        access_until: '2099-12-31T23:59:59Z',
        subscription_status: 'active',
      },
    ],
    school_members: [
      {
        id: 'm-a1',
        user_id: 'u-a1',
        school_id: 'school-1',
        role: 'admin',
        invite_status: 'accepted',
        full_name: 'Ada Admin',
      },
      {
        id: 'm-t1',
        user_id: 'u-t1',
        school_id: 'school-1',
        role: 'teacher',
        invite_status: 'accepted',
        full_name: 'Tom Teacher',
      },
      {
        id: 'm-t0',
        user_id: 'u-t0',
        school_id: 'school-1',
        role: 'teacher',
        invite_status: 'accepted',
      },
      {
        id: 'm-p1',
        user_id: 'p1',
        school_id: 'school-1',
        role: 'student',
        invite_status: 'accepted',
        full_name: 'Pupil One',
      },
      {
        id: 'm-p9',
        user_id: 'p9',
        school_id: 'school-1',
        role: 'student',
        invite_status: 'accepted',
        full_name: 'No Class Pupil',
      },
    ],
    school_students: [],
    profiles: [],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A', is_active: true },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-a1', name: '10B', is_active: true },
      { id: 'c3', school_id: 'school-1', teacher_id: 'm-t1', name: 'Archived', is_active: false },
    ],
    class_students: [
      { class_id: 'c1', student_id: 'p1', is_active: true },
      { class_id: 'c1', student_id: 'p2', is_active: true },
      { class_id: 'c2', student_id: 'p3', is_active: true },
    ],
    marking_submissions: [
      {
        id: 's1',
        school_id: 'school-1',
        class_id: 'c1',
        status: 'ai_marked',
        submitted_at: recent,
        teacher_reviewed_at: null,
      },
      {
        id: 's2',
        school_id: 'school-1',
        class_id: 'c1',
        status: 'submitted',
        submitted_at: recent,
        teacher_reviewed_at: null,
      },
      {
        id: 's3',
        school_id: 'school-1',
        class_id: 'c2',
        status: 'approved',
        submitted_at: old,
        teacher_reviewed_at: recent,
      },
      {
        id: 's4',
        school_id: 'school-2',
        class_id: 'cx',
        status: 'ai_marked',
        submitted_at: recent,
        teacher_reviewed_at: null,
      },
    ],
  })
}

const call = async (userId: string) => {
  state.userId = userId
  const res = await GET(new NextRequest('http://localhost/api/school/summary'))
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  state.fake = seed()
})

describe('the dashboard summary', () => {
  it('gives a teacher their own active classes, pupils and queue', async () => {
    const { status, body } = await call('u-t1')
    expect(status).toBe(200)
    expect(body.viewer).toEqual({ role: 'teacher', scope: 'teacher' })
    expect(body.classes.map((c: { id: string }) => c.id)).toEqual(['c1'])
    expect(body.counts).toEqual({ pupils: 2, staff: null, classes: 1 })
    expect(body.marking).toEqual({
      awaitingReview: 1,
      notYetMarked: 1,
      submittedLast7Days: 2,
      reviewedLast7Days: 0,
    })
    expect(body.setup).toBeNull()
    expect(body.staffList).toBeNull()
  })

  it('gives an admin the whole school, counting pupils with and without a class', async () => {
    const { body } = await call('u-a1')
    expect(body.viewer.scope).toBe('school')
    // p1 and p9 hold memberships; p2 and p3 are on class rosters.
    expect(body.counts).toEqual({ pupils: 4, staff: 3, classes: 2 })
    expect(body.marking.awaitingReview).toBe(1)
    expect(body.marking.reviewedLast7Days).toBe(1)
    expect(body.school).toMatchObject({ name: 'Test Academy', accessType: 'paid' })
    expect(body.setup).toEqual({
      hasStaff: true,
      hasPupils: true,
      hasClasses: true,
      hasEnrolments: true,
    })
    // Teachers and heads of department, for assigning a class; not the admin.
    expect(body.staffList).toHaveLength(2)
    expect(body.staffList).toEqual(
      expect.arrayContaining([
        { id: 'm-t1', name: 'Tom Teacher', role: 'teacher' },
        { id: 'm-t0', name: null, role: 'teacher' },
      ]),
    )
  })

  it('tells a teacher with no classes the truth rather than counting the school', async () => {
    const { body } = await call('u-t0')
    expect(body.counts).toEqual({ pupils: 0, staff: null, classes: 0 })
    expect(body.marking.awaitingReview).toBe(0)
  })

  it.each(['class_students', 'marking_submissions', 'schools', 'school_members'])(
    'answers 500, not a dashboard of zeros, when %s cannot be read',
    async (table) => {
      state.fake!.fail(table, 'infinite recursion detected in policy', '42P17')
      const { status, body } = await call('u-a1')
      expect(status).toBe(500)
      expect(body).not.toHaveProperty('counts')
    },
  )
})
