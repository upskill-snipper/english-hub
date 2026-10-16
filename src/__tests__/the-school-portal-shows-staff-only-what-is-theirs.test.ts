// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * The school portal's authorisation holes, closed on 16 October 2026, held by
 * what the routes return against a database of real rows (the fake applies
 * every filter a route builds, so deleting a check changes the answer).
 *
 * Found by a read-only audit on 13 October 2026, before any school had signed
 * up and before teachers could see pupils' game results through these same
 * scopes. Each case here failed on the code before the fix:
 *
 *   - a PUPIL could create an ADMIN invitation and read every member's email;
 *   - any teacher could list, enrol into or remove from ANY class, and enrol
 *     ANY account on the platform, by id or by email, which makes it a pupil
 *     of the school (school-paid AI, the school's consent basis);
 *   - class analytics, class performance, interventions and student insights
 *     checked the school, not the class;
 *   - a pupil could read any class's assignments, and every classmate's score
 *     and feedback on one;
 *   - school staff could override the mark on a CONSUMER essay, which has no
 *     school, because the school check ran only when there was one;
 *   - the report generator would put ANY platform profile into a report.
 *
 * The cast: school-1 has an admin (a1), two teachers (t1 teaches c1, t2
 * teaches c2) and two pupils (p1 in c1, p2 in c2). s1 is a stranger: an
 * account on the platform that belongs to no school.
 */

const state = vi.hoisted(() => ({
  userId: 'u-t1',
  fake: null as ReturnType<
    typeof import('@/__tests__/helpers/fake-supabase').createFakeSupabase
  > | null,
  assignments: [] as Array<Record<string, unknown>>,
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
  getClientIp: vi.fn(() => '127.0.0.1'),
  rateLimitResponse: vi.fn(),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    assignment: {
      findMany: vi.fn(async ({ where }: { where: { classId: { in: string[] } } }) =>
        state.assignments.filter((a) => where.classId.in.includes(a.classId as string)),
      ),
      findUnique: vi.fn(
        async ({ where }: { where: { id: string } }) =>
          state.assignments.find((a) => a.id === where.id) ?? null,
      ),
    },
  },
}))

import * as members from '@/app/api/school/members/route'
import * as member from '@/app/api/school/members/[id]/route'
import * as roster from '@/app/api/school/classes/[classId]/students/route'
import * as classAnalytics from '@/app/api/school/classes/[classId]/analytics/route'
import * as classPerformance from '@/app/api/school/analytics/class-performance/route'
import * as interventions from '@/app/api/school/interventions/route'
import * as assignments from '@/app/api/school/assignments/route'
import * as assignment from '@/app/api/school/assignments/[id]/route'
import * as override from '@/app/api/school/marking/override/route'
import * as reports from '@/app/api/school/reports/generate/route'
import * as insights from '@/app/api/school/analytics/student-insights/route'
import * as settings from '@/app/api/school/settings/route'

const staff = (id: string, user: string, role: string, school = 'school-1') => ({
  id,
  user_id: user,
  school_id: school,
  role,
  invite_status: 'accepted',
  full_name: user,
  email: `${user}@example.invalid`,
})

function seed() {
  return createFakeSupabase({
    schools: [
      { id: 'school-1', name: 'One', seat_limit: 100, seats_used: 2 },
      { id: 'school-2', name: 'Two', seat_limit: 100, seats_used: 0 },
    ],
    school_members: [
      staff('m-a1', 'u-a1', 'admin'),
      staff('m-h1', 'u-h1', 'head_of_department'),
      staff('m-t1', 'u-t1', 'teacher'),
      staff('m-t2', 'u-t2', 'teacher'),
      staff('m-p1', 'p1', 'student'),
      staff('m-p2', 'p2', 'student'),
      staff('m-x1', 'u-x1', 'teacher', 'school-2'),
    ],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A', is_active: true },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-t2', name: '10B', is_active: true },
      { id: 'c3', school_id: 'school-2', teacher_id: 'm-x1', name: '9X', is_active: true },
    ],
    class_students: [
      { id: 'cs1', class_id: 'c1', student_id: 'p1', is_active: true, joined_at: '2026-09-01' },
      { id: 'cs2', class_id: 'c2', student_id: 'p2', is_active: true, joined_at: '2026-09-01' },
    ],
    school_students: [],
    profiles: [
      { id: 'p1', email: 'p1@example.invalid', full_name: 'Pupil One', year_group: 'Year 10' },
      { id: 'p2', email: 'p2@example.invalid', full_name: 'Pupil Two', year_group: 'Year 10' },
      { id: 's1', email: 's1@example.invalid', full_name: 'Stranger', year_group: 'Year 9' },
    ],
    marking_submissions: [
      { id: 'sub-consumer', student_id: 's1', school_id: null, class_id: null, ai_grade: '5' },
      { id: 'sub-c2', student_id: 'p2', school_id: 'school-1', class_id: 'c2', ai_grade: '6' },
    ],
    module_progress: [],
    practice_sessions: [],
    courses: [],
    modules: [],
    assessment_attempts: [],
  })
}

const req = (url: string, init?: { method?: string; body?: unknown }) =>
  new NextRequest(`https://theenglishhub.app${url}`, {
    method: init?.method ?? 'GET',
    headers: { 'content-type': 'application/json' },
    ...(init?.body !== undefined ? { body: JSON.stringify(init.body) } : {}),
  })
const params = <T extends Record<string, string>>(p: T) => ({ params: Promise.resolve(p) })
const as = (userId: string) => {
  state.userId = userId
}

beforeEach(() => {
  state.fake = seed()
  state.assignments = []
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('members', () => {
  it('a pupil cannot list the school’s members', async () => {
    as('p1')
    expect((await members.GET(req('/api/school/members'))).status).toBe(403)
  })

  it('staff see staff, and no pupil’s email', async () => {
    as('u-t1')
    const res = await members.GET(req('/api/school/members'))
    expect(res.status).toBe(200)
    const roles = ((await res.json()).members as Array<{ role: string }>).map((m) => m.role)
    expect(roles).not.toContain('student')
    expect(roles).toContain('admin')
  })

  it('a pupil cannot invite anyone, least of all an admin', async () => {
    as('p1')
    const res = await members.POST(
      req('/api/school/members', {
        method: 'POST',
        body: { email: 'me@evil.invalid', name: 'Me', role: 'admin' },
      }),
    )
    expect(res.status).toBe(403)
    expect(state.fake!.tables.school_members.some((m) => m.email === 'me@evil.invalid')).toBe(false)
  })

  it('a teacher cannot invite; an admin can', async () => {
    as('u-t1')
    const body = { email: 'new@example.invalid', name: 'New', role: 'teacher' }
    expect((await members.POST(req('/api/school/members', { method: 'POST', body }))).status).toBe(
      403,
    )
    as('u-a1')
    expect((await members.POST(req('/api/school/members', { method: 'POST', body }))).status).toBe(
      201,
    )
  })

  it('a pupil cannot read another member’s record; a teacher reads only a pupil they teach', async () => {
    as('p1')
    expect((await member.GET(req('/api/school/members/m-p2'), params({ id: 'm-p2' }))).status).toBe(
      403,
    )
    as('u-t1')
    expect((await member.GET(req('/api/school/members/m-p2'), params({ id: 'm-p2' }))).status).toBe(
      404,
    )
    expect((await member.GET(req('/api/school/members/m-p1'), params({ id: 'm-p1' }))).status).toBe(
      200,
    )
  })
})

describe('a class roster', () => {
  it('belongs to its teacher: another teacher cannot read it or change it', async () => {
    as('u-t1')
    expect(
      (await roster.GET(req('/api/school/classes/c2/students'), params({ classId: 'c2' }))).status,
    ).toBe(404)
    const add = await roster.POST(
      req('/api/school/classes/c2/students', { method: 'POST', body: { studentIds: ['p1'] } }),
      params({ classId: 'c2' }),
    )
    expect(add.status).toBe(404)
    const remove = await roster.DELETE(
      req('/api/school/classes/c2/students', { method: 'DELETE', body: { studentId: 'p2' } }),
      params({ classId: 'c2' }),
    )
    expect(remove.status).toBe(404)
    expect(state.fake!.tables.class_students.find((r) => r.id === 'cs2')!.is_active).toBe(true)
  })

  it('takes only the school’s own pupils, by id', async () => {
    as('u-t1')
    const res = await roster.POST(
      req('/api/school/classes/c1/students', { method: 'POST', body: { studentIds: ['s1'] } }),
      params({ classId: 'c1' }),
    )
    expect(res.status).toBe(422)
    expect(state.fake!.tables.class_students.some((r) => r.student_id === 's1')).toBe(false)
  })

  it('takes only the school’s own pupils, by email, and never looks across the platform', async () => {
    as('u-t1')
    const stranger = await roster.POST(
      req('/api/school/classes/c1/students', {
        method: 'POST',
        body: { email: 's1@example.invalid' },
      }),
      params({ classId: 'c1' }),
    )
    expect(stranger.status).toBe(404)
    const ours = await roster.POST(
      req('/api/school/classes/c1/students', {
        method: 'POST',
        body: { email: 'p2@example.invalid' },
      }),
      params({ classId: 'c1' }),
    )
    expect(ours.status).toBe(201)
    expect(
      state.fake!.tables.class_students.some((r) => r.class_id === 'c1' && r.student_id === 'p2'),
    ).toBe(true)
  })

  it('is not a pupil’s to change', async () => {
    as('p1')
    const res = await roster.POST(
      req('/api/school/classes/c1/students', { method: 'POST', body: { studentIds: ['p2'] } }),
      params({ classId: 'c1' }),
    )
    expect(res.status).toBe(403)
  })
})

describe('class figures', () => {
  it('class analytics: staff only, and only for a class in scope', async () => {
    as('p1')
    expect(
      (await classAnalytics.GET(req('/api/school/classes/c1/analytics'), params({ classId: 'c1' })))
        .status,
    ).toBe(403)
    as('u-t1')
    expect(
      (await classAnalytics.GET(req('/api/school/classes/c2/analytics'), params({ classId: 'c2' })))
        .status,
    ).toBe(404)
    expect(
      (await classAnalytics.GET(req('/api/school/classes/c1/analytics'), params({ classId: 'c1' })))
        .status,
    ).toBe(200)
  })

  it('class performance: only for a class in scope', async () => {
    as('p1')
    expect(
      (await classPerformance.GET(req('/api/school/analytics/class-performance?classId=c1')))
        .status,
    ).toBe(403)
    as('u-t1')
    expect(
      (await classPerformance.GET(req('/api/school/analytics/class-performance?classId=c2')))
        .status,
    ).toBe(404)
  })

  it('interventions: ?classId narrows the caller’s scope, it does not replace it', async () => {
    as('u-t1')
    expect((await interventions.GET(req('/api/school/interventions?classId=c2'))).status).toBe(404)
    as('p1')
    expect((await interventions.GET(req('/api/school/interventions'))).status).toBe(403)
  })

  it('student insights: a teacher sees their own pupils only', async () => {
    as('u-t1')
    expect(
      (await insights.GET(req('/api/school/analytics/student-insights?classId=c2'))).status,
    ).toBe(404)
    expect(
      (await insights.GET(req('/api/school/analytics/student-insights?studentId=p2'))).status,
    ).toBe(404)
  })

  it('school settings are for staff', async () => {
    as('p1')
    expect((await settings.GET(req('/api/school/settings'))).status).toBe(403)
  })
})

describe('assignments', () => {
  beforeEach(() => {
    state.assignments = [
      {
        id: 'as1',
        classId: 'c1',
        teacherId: 'm-t1',
        title: 'Macbeth essay',
        description: null,
        type: 'ESSAY',
        status: 'ACTIVE',
        courseId: null,
        moduleIds: [],
        dueDate: null,
        createdAt: new Date('2026-10-01'),
        updatedAt: new Date('2026-10-01'),
        submissions: [
          {
            id: 'su1',
            studentId: 'p1',
            status: 'GRADED',
            score: 70,
            feedback: 'Good',
            submittedAt: null,
            gradedAt: null,
          },
          {
            id: 'su2',
            studentId: 'p9',
            status: 'GRADED',
            score: 30,
            feedback: 'Private',
            submittedAt: null,
            gradedAt: null,
          },
        ],
      },
      {
        id: 'as2',
        classId: 'c2',
        teacherId: 'm-t2',
        title: 'Poetry',
        description: null,
        type: 'ESSAY',
        status: 'ACTIVE',
        courseId: null,
        moduleIds: [],
        dueDate: null,
        createdAt: new Date('2026-10-01'),
        updatedAt: new Date('2026-10-01'),
        submissions: [],
      },
    ]
  })

  it('a pupil sees their own class’s assignments, and no other class’s', async () => {
    as('p1')
    const mine = await assignments.GET(req('/api/school/assignments'))
    expect(mine.status).toBe(200)
    expect(((await mine.json()).assignments as Array<{ id: string }>).map((a) => a.id)).toEqual([
      'as1',
    ])
    expect((await assignments.GET(req('/api/school/assignments?classId=c2'))).status).toBe(404)
  })

  it('a pupil sees their own submission, never a classmate’s score or feedback', async () => {
    as('p1')
    const res = await assignment.GET(req('/api/school/assignments/as1'), params({ id: 'as1' }))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.assignment.submissions.map((s: { studentId: string }) => s.studentId)).toEqual([
      'p1',
    ])
    expect(JSON.stringify(body)).not.toContain('Private')
    expect(body.assignment.avgScore).toBeNull()
  })

  it('a teacher cannot open another teacher’s class’s assignment', async () => {
    as('u-t1')
    expect(
      (await assignment.GET(req('/api/school/assignments/as2'), params({ id: 'as2' }))).status,
    ).toBe(404)
  })
})

describe('marking override', () => {
  const body = (submissionId: string) => ({ submissionId, teacherGrade: '9', teacherComment: 'x' })

  it('never reaches a consumer essay, which belongs to no school', async () => {
    as('u-a1')
    const res = await override.POST(
      req('/api/school/marking/override', { method: 'POST', body: body('sub-consumer') }),
    )
    expect(res.status).toBe(404)
    expect(
      state.fake!.tables.marking_submissions.find((r) => r.id === 'sub-consumer')!.teacher_grade,
    ).toBeUndefined()
  })

  it('reaches a teacher’s own classes only', async () => {
    as('u-t1')
    const res = await override.POST(
      req('/api/school/marking/override', { method: 'POST', body: body('sub-c2') }),
    )
    expect(res.status).toBe(404)
  })
})

describe('reports', () => {
  it('are for staff', async () => {
    as('p1')
    const res = await reports.POST(
      req('/api/school/reports/generate', {
        method: 'POST',
        body: { type: 'class', class_id: 'c1' },
      }),
    )
    expect(res.status).toBe(403)
  })

  it('never carry a pupil who is not in the class, or a class out of scope', async () => {
    as('u-t1')
    const notInClass = await reports.POST(
      req('/api/school/reports/generate', {
        method: 'POST',
        body: { type: 'student', class_id: 'c1', student_id: 's1' },
      }),
    )
    expect(notInClass.status).toBe(404)
    expect(JSON.stringify(await notInClass.json())).not.toContain('Stranger')
    const outOfScope = await reports.POST(
      req('/api/school/reports/generate', {
        method: 'POST',
        body: { type: 'class', class_id: 'c2' },
      }),
    )
    expect(outOfScope.status).toBe(404)
  })
})
