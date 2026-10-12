// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * /api/school/classes and /api/school/classes/[classId] (scoped 12 October 2026).
 *
 * A pupil holding a school_members row could list every class and read any
 * class's roster with its pupils' email addresses, and any member, a pupil
 * included, could rename a class or reassign its teacher; reassigning is how
 * one teacher could take over another's class and its pupils' essays.
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
  getClientIp: vi.fn(() => '127.0.0.1'),
}))

import { GET as listClasses } from '../route'
import { GET as getClass, PATCH as patchClass } from './route'

function seed() {
  return createFakeSupabase({
    school_members: [
      {
        id: 'm-a1',
        user_id: 'u-a1',
        school_id: 'school-1',
        role: 'admin',
        invite_status: 'accepted',
        full_name: 'Ada',
      },
      {
        id: 'm-t1',
        user_id: 'u-t1',
        school_id: 'school-1',
        role: 'teacher',
        invite_status: 'accepted',
        full_name: 'Tom',
      },
      {
        id: 'm-t2',
        user_id: 'u-t2',
        school_id: 'school-1',
        role: 'teacher',
        invite_status: 'accepted',
        full_name: 'Tess',
      },
      {
        id: 'm-p1',
        user_id: 'p1',
        school_id: 'school-1',
        role: 'student',
        invite_status: 'accepted',
        full_name: 'Pupil',
      },
    ],
    classes: [
      {
        id: 'c1',
        school_id: 'school-1',
        teacher_id: 'm-t1',
        name: '10A',
        created_at: '2026-10-01',
      },
      {
        id: 'c2',
        school_id: 'school-1',
        teacher_id: 'm-t2',
        name: '10B',
        created_at: '2026-10-02',
      },
    ],
    class_students: [
      { class_id: 'c1', student_id: 'p1', is_active: true, joined_at: '2026-10-03' },
    ],
    profiles: [
      {
        id: 'p1',
        email: 'pupil@pupils.example',
        full_name: 'Pupil',
        year_group: 'Year 10',
        exam_board: 'AQA',
      },
    ],
    module_progress: [],
    practice_sessions: [],
    certificates: [],
  })
}

const as = (userId: string) => {
  state.userId = userId
}
const req = (url: string, init?: ConstructorParameters<typeof NextRequest>[1]) =>
  new NextRequest(`http://localhost${url}`, init)
const params = (classId: string) => ({ params: Promise.resolve({ classId }) })
const patch = (classId: string, body: Record<string, unknown>) =>
  patchClass(
    req(`/api/school/classes/${classId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
    params(classId),
  )

beforeEach(() => {
  state.fake = seed()
})

describe('reading classes', () => {
  it('refuses a pupil the class list and any roster', async () => {
    as('p1')
    expect((await listClasses(req('/api/school/classes'))).status).toBe(403)
    expect((await getClass(req('/api/school/classes/c1'), params('c1'))).status).toBe(403)
  })

  it("gives a teacher their own class and refuses another teacher's", async () => {
    as('u-t1')
    const own = await getClass(req('/api/school/classes/c1'), params('c1'))
    expect(own.status).toBe(200)
    expect((await own.json()).students).toHaveLength(1)
    expect((await getClass(req('/api/school/classes/c2'), params('c2'))).status).toBe(403)
  })

  it('answers 500, not an empty roster, when the roster cannot be read', async () => {
    as('u-a1')
    state.fake!.fail('class_students', 'simulated', 'XX000')
    expect((await getClass(req('/api/school/classes/c1'), params('c1'))).status).toBe(500)
    expect((await listClasses(req('/api/school/classes'))).status).toBe(500)
  })
})

describe('editing a class', () => {
  it('refuses a pupil', async () => {
    as('p1')
    expect((await patch('c1', { name: 'Renamed' })).status).toBe(403)
  })

  it("refuses a teacher another teacher's class", async () => {
    as('u-t1')
    expect((await patch('c2', { name: 'Mine now' })).status).toBe(403)
    expect(state.fake!.tables.classes.find((c) => c.id === 'c2')?.name).toBe('10B')
  })

  it('refuses a teacher reassigning even their own class', async () => {
    as('u-t1')
    expect((await patch('c1', { teacher_id: 'm-t2' })).status).toBe(403)
    expect(state.fake!.tables.classes.find((c) => c.id === 'c1')?.teacher_id).toBe('m-t1')
  })

  it('lets a teacher rename their own class', async () => {
    as('u-t1')
    expect((await patch('c1', { name: '10A English' })).status).toBe(200)
    expect(state.fake!.tables.classes.find((c) => c.id === 'c1')?.name).toBe('10A English')
  })

  it('lets an admin reassign a class', async () => {
    as('u-a1')
    expect((await patch('c2', { teacher_id: 'm-t1' })).status).toBe(200)
    expect(state.fake!.tables.classes.find((c) => c.id === 'c2')?.teacher_id).toBe('m-t1')
  })
})
