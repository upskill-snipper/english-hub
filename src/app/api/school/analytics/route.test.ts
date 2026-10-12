// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * GET /api/school/analytics (rebuilt 12 October 2026).
 *
 * It listed every pupil as "Never logged in", last active 1 January 1970,
 * because it read a column nothing updates and filled the gap with
 * `new Date(0)`; it called assignments CREATED "assignments submitted"; and
 * most of its reads ignored their errors. These tests pin the replacements:
 * last activity from what a pupil actually did, null when they have done
 * nothing, essays counted from marking_submissions, every read paged past
 * PostgREST's silent row cap, and failures answered with a 500.
 */

const state = vi.hoisted(() => ({
  userId: 'u-a1',
  maxRows: undefined as number | undefined,
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

const daysAgo = (n: number) => new Date(Date.now() - n * 86_400_000).toISOString()

function seed() {
  return createFakeSupabase(
    {
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
        // last_active_at is never updated by pupils' work: here it is null.
        {
          id: 'm-p1',
          user_id: 'p1',
          school_id: 'school-1',
          role: 'student',
          invite_status: 'accepted',
          full_name: 'Active Pupil',
          year_group: 'Year 10',
          last_active_at: null,
        },
        {
          id: 'm-p2',
          user_id: 'p2',
          school_id: 'school-1',
          role: 'student',
          invite_status: 'accepted',
          full_name: 'Quiet Pupil',
          year_group: 'Year 10',
          last_active_at: null,
        },
        {
          id: 'm-p3',
          user_id: 'p3',
          school_id: 'school-1',
          role: 'student',
          invite_status: 'accepted',
          full_name: 'Essay Pupil',
          year_group: 'Year 11',
          last_active_at: null,
        },
      ],
      school_students: [],
      profiles: [],
      classes: [
        { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A', is_active: true },
        { id: 'c2', school_id: 'school-1', teacher_id: 'm-a1', name: '11A', is_active: true },
      ],
      class_students: [
        { class_id: 'c1', student_id: 'p1', is_active: true },
        { class_id: 'c1', student_id: 'p2', is_active: true },
        { class_id: 'c2', student_id: 'p3', is_active: true },
      ],
      module_progress: [1, 2, 3, 4, 5].map((i) => ({
        id: `mp-${i}`,
        user_id: 'p1',
        module_id: `m${i}`,
        quiz_score: 70,
        completed_at: daysAgo(i),
      })),
      practice_sessions: [],
      assessment_attempts: [],
      marking_submissions: [
        // p3's only activity is an essay: they are active, not "never logged in".
        {
          id: 's1',
          school_id: 'school-1',
          class_id: 'c2',
          student_id: 'p3',
          submitted_at: daysAgo(1),
          status: 'ai_marked',
        },
      ],
    },
    { maxRows: state.maxRows },
  )
}

const call = async (userId = 'u-a1') => {
  state.userId = userId
  const res = await GET(new NextRequest('http://localhost/api/school/analytics?period=month'))
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  state.maxRows = undefined
  state.fake = seed()
})

describe('last activity', () => {
  it('is null, never 1 January 1970, for a pupil who has done nothing', async () => {
    const { status, body } = await call()
    expect(status).toBe(200)
    const quiet = body.atRisk.pupils.find((p: { userId: string }) => p.userId === 'p2')
    expect(quiet.lastActiveAt).toBeNull()
    expect(quiet.issues).toEqual([{ kind: 'no_activity' }])
    expect(JSON.stringify(body)).not.toContain('1970')
  })

  it('comes from what the pupil actually did, an essay included', async () => {
    const { body } = await call()
    const flaggedIds = body.atRisk.pupils.map((p: { userId: string }) => p.userId)
    expect(flaggedIds).not.toContain('p1')
    expect(flaggedIds).not.toContain('p3')
    expect(body.activeStudentsThisWeek).toBe(2)
  })
})

describe('what is counted', () => {
  it('counts essays submitted for marking, not assignments created', async () => {
    const { body } = await call()
    expect(body.essaysSubmittedThisWeek).toBe(1)
    expect(body).not.toHaveProperty('assignmentsSubmittedThisWeek')
  })

  it('reports quiz averages as percentages and a class with no scores as null, not 0', async () => {
    const { body } = await call()
    expect(body.averageQuizScore).toBe(70)
    const c2 = body.classStats.find((c: { classId: string }) => c.classId === 'c2')
    expect(c2.averageQuizScore).toBeNull()
    expect(body).not.toHaveProperty('resourceUsage')
  })

  it("scopes a teacher's essay counts to their own classes", async () => {
    const { body } = await call('u-t1')
    expect(body.scope).toBe('teacher')
    expect(body.totalStudents).toBe(2)
    expect(
      body.weeklyActivity.reduce(
        (n: number, w: { essaysSubmitted: number }) => n + w.essaysSubmitted,
        0,
      ),
    ).toBe(0)
  })

  it('reads every row even when the server stops at two per request', async () => {
    state.maxRows = 2
    state.fake = seed()
    const { status, body } = await call()
    expect(status).toBe(200)
    // Five scored modules for p1, all of them counted.
    const y10 = body.yearGroupStats.find((y: { yearGroup: string }) => y.yearGroup === 'Year 10')
    expect(y10.quizzesCompleted).toBe(5)
  })
})

describe('a failed read', () => {
  it.each([
    'module_progress',
    'practice_sessions',
    'assessment_attempts',
    'marking_submissions',
    'class_students',
  ])('answers 500 when %s cannot be read, rather than zeros', async (table) => {
    state.fake!.fail(table, 'simulated', 'XX000')
    const { status, body } = await call()
    expect(status).toBe(500)
    expect(body).not.toHaveProperty('atRisk')
  })
})
