// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase, type Row } from '@/__tests__/helpers/fake-supabase'

/**
 * GET /api/school/marking is scoped by membership, with the service role.
 *
 * FIXED 12 October 2026. The route read through the teacher's own session and
 * answered every failure with `{ submissions: [] }`, so a recursing RLS policy
 * told every teacher they had no work, and pupils came back named "Student".
 *
 * These tests run the route against an in-memory database that applies the
 * route's real filters (src/__tests__/helpers/fake-supabase.ts), so removing a
 * scoping filter changes what comes back and fails a test here.
 */

const state = vi.hoisted(() => ({
  userId: 'u-t1' as string | null,
  fake: null as ReturnType<
    typeof import('@/__tests__/helpers/fake-supabase').createFakeSupabase
  > | null,
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: {
      getUser: async () => ({
        data: { user: state.userId ? { id: state.userId } : null },
        error: null,
      }),
    },
  }),
  createServiceRoleClient: () => state.fake!.client,
}))

// Membership is answered from the same seeded table the route reads, the way
// the real verifySchoolMember answers it: an accepted row in one of the roles.
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: vi.fn(async (userId: string, roles?: string[]) => {
    const rows = (state.fake!.tables.school_members ?? []).filter(
      (m) => m.user_id === userId && m.invite_status === 'accepted',
    )
    if (rows.length !== 1) return null
    const m = rows[0]
    if (roles && !roles.includes(m.role as string)) return null
    return m
  }),
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: Date.now() + 60_000 })),
  getClientIp: vi.fn(() => '127.0.0.1'),
}))

import { GET } from './route'

const member = (id: string, userId: string, schoolId: string, role: string, extra: Row = {}) => ({
  id,
  user_id: userId,
  school_id: schoolId,
  role,
  invite_status: 'accepted',
  ...extra,
})

const essay = (id: string, schoolId: string, classId: string | null, studentId: string) => ({
  id,
  school_id: schoolId,
  class_id: classId,
  student_id: studentId,
  source: 'b2b_class',
  exam_board: 'AQA',
  question_text: 'How does Shakespeare present ambition?',
  essay_title: null,
  essay_text: 'Macbeth is ambitious from the start of the play.',
  status: 'ai_marked',
  submitted_at: `2026-11-1${id.slice(-1)}T09:00:00Z`,
  ai_score: 20,
  ai_max_marks: 30,
  final_teacher_mark: null,
  teacher_reviewed_at: null,
})

function seed() {
  return createFakeSupabase({
    school_members: [
      member('m-t1', 'u-t1', 'school-1', 'teacher'),
      member('m-t2', 'u-t2', 'school-1', 'teacher'),
      member('m-t0', 'u-t0', 'school-1', 'teacher'),
      member('m-a1', 'u-a1', 'school-1', 'admin'),
      member('m-h1', 'u-h1', 'school-1', 'head_of_department'),
      member('m-x', 'u-x', 'school-2', 'admin'),
      member('m-p1', 'p1', 'school-1', 'student', {
        full_name: 'Amira Khan',
        email: 'ak@pupils.example',
      }),
    ],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A', is_active: true },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-t2', name: '10B', is_active: true },
      {
        id: 'c3',
        school_id: 'school-2',
        teacher_id: 'm-x',
        name: 'Other school 10A',
        is_active: true,
      },
      // Wrongly assigned with the teacher's AUTH id. A teacher's classes are
      // the ones whose teacher_id is their school_members.id, so u-t1 must
      // not see this class's work.
      { id: 'c4', school_id: 'school-1', teacher_id: 'u-t1', name: '10C', is_active: true },
    ],
    marking_submissions: [
      essay('s1', 'school-1', 'c1', 'p1'),
      essay('s2', 'school-1', 'c2', 'p2'),
      essay('s3', 'school-2', 'c3', 'p3'),
      essay('s4', 'school-1', null, 'p4'),
      essay('s5', 'school-1', 'c4', 'p5'),
    ],
    profiles: [
      {
        id: 'p1',
        full_name: 'A. Khan (profile)',
        email: 'ak@pupils.example',
        year_group: 'Year 10',
      },
      { id: 'p2', full_name: 'Ben Ode', email: 'bo@pupils.example', year_group: 'Year 10' },
      {
        id: 'p3',
        full_name: 'Other School Pupil',
        email: 'osp@elsewhere.example',
        year_group: null,
      },
      { id: 'p4', full_name: null, email: 'p4@pupils.example', year_group: null },
    ],
    teacher_moderations: [
      {
        id: 'mod-1',
        submission_id: 's1',
        decision: 'corrected',
        teacher_grade: null,
        ao_corrections: [],
        created_at: '2026-11-12T10:00:00Z',
      },
    ],
  })
}

const call = async (userId: string | null) => {
  state.userId = userId
  const res = await GET(new NextRequest('http://localhost/api/school/marking'))
  return { status: res.status, body: await res.json() }
}

const ids = (body: { submissions: Array<{ id: string }> }) =>
  body.submissions.map((s) => s.id).sort()

beforeEach(() => {
  vi.clearAllMocks()
  state.fake = seed()
})

describe('who sees which essays', () => {
  it("a teacher sees only their own classes' essays", async () => {
    const { status, body } = await call('u-t1')
    expect(status).toBe(200)
    expect(body.scope).toBe('teacher')
    expect(ids(body)).toEqual(['s1'])
  })

  it('a second teacher in the same school sees only theirs', async () => {
    expect(ids((await call('u-t2')).body)).toEqual(['s2'])
  })

  it('an admin sees the whole school, and nothing from another school', async () => {
    const { body } = await call('u-a1')
    expect(body.scope).toBe('school')
    expect(ids(body)).toEqual(['s1', 's2', 's4', 's5'])
  })

  it('a head of department sees the whole school', async () => {
    expect(ids((await call('u-h1')).body)).toEqual(['s1', 's2', 's4', 's5'])
  })

  it('a member of another school sees none of this school', async () => {
    const { status, body } = await call('u-x')
    expect(status).toBe(200)
    expect(ids(body)).toEqual(['s3'])
  })

  it('a teacher with no classes is told so, not shown a quiet queue', async () => {
    const { status, body } = await call('u-t0')
    expect(status).toBe(200)
    expect(body.hasClasses).toBe(false)
    expect(body.submissions).toEqual([])
  })

  it('someone who is not school staff is refused', async () => {
    expect((await call('u-nobody')).status).toBe(403)
    // A pupil holds a school_members row too, as role 'student'.
    expect((await call('p1')).status).toBe(403)
  })

  it('someone signed out is refused', async () => {
    expect((await call(null)).status).toBe(401)
  })
})

describe('what a row says', () => {
  it("names the pupil from the school's record, read server-side", async () => {
    const row = (await call('u-t1')).body.submissions[0]
    expect(row.studentName).toBe('Amira Khan')
    expect(row.className).toBe('10A')
    expect(row.lastDecision).toEqual({ decision: 'corrected', at: '2026-11-12T10:00:00Z' })
  })

  it("falls back to the pupil's profile, then their email, never to 'Student'", async () => {
    const rows = (await call('u-a1')).body.submissions as Array<{
      id: string
      studentName: string | null
    }>
    const byId = Object.fromEntries(rows.map((r) => [r.id, r.studentName]))
    expect(byId.s2).toBe('Ben Ode')
    expect(byId.s4).toBe('p4@pupils.example')
    expect(byId.s5).toBeNull()
  })

  it('sends no essay text in the list', async () => {
    const row = (await call('u-t1')).body.submissions[0]
    expect(JSON.stringify(row)).not.toContain('Macbeth is ambitious')
    expect(row.wordCount).toBe(9)
  })
})

describe('nothing waiting for a teacher falls off the list', () => {
  it('keeps an old essay awaiting review when hundreds of newer ones are done', async () => {
    const done = Array.from({ length: 205 }, (_, i) => ({
      ...essay(`d${i}`, 'school-1', 'c1', 'p1'),
      id: `done-${String(i).padStart(3, '0')}`,
      status: 'approved',
      submitted_at: new Date(Date.UTC(2026, 10, 20, 0, i)).toISOString(),
    }))
    state.fake!.tables.marking_submissions.push(...done)
    // s1 (ai_marked, 11 November) is older than every approved essay above.
    const { body } = await call('u-t1')
    const ids = body.submissions.map((s: { id: string }) => s.id)
    expect(ids).toContain('s1')
    expect(ids.filter((id: string) => id.startsWith('done-'))).toHaveLength(200)
    expect(body.truncated).toEqual({ open: null, done: 200 })
  })
})

describe('a failed read is reported as a failure', () => {
  it.each(['marking_submissions', 'classes', 'profiles', 'school_members', 'teacher_moderations'])(
    'when %s cannot be read, the queue answers 500 and no list',
    async (table) => {
      // 42P17 is what production's recursing RLS returned on 12 October.
      state.fake!.fail(table, 'infinite recursion detected in policy', '42P17')
      const { status, body } = await call('u-a1')
      expect(status).toBe(500)
      expect(body).not.toHaveProperty('submissions')
      expect(typeof body.error).toBe('string')
    },
  )
})
