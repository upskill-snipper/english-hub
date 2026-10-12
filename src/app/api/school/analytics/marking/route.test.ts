// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'

/**
 * GET /api/school/analytics/marking, the department view (rebuilt 12 October
 * 2026). Built from ai_ao_breakdown with teachers' adjusted marks, scoped by
 * membership, and a failed read is a failure, never an empty department.
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

const ao = (id: string, marks: number, maxMarks: number) => ({
  id,
  label: `${id} label`,
  marks,
  maxMarks,
  band: 'L3',
  justification: 'because',
})

const essay = (
  id: string,
  schoolId: string,
  classId: string,
  studentId: string,
  aos: ReturnType<typeof ao>[],
  status = 'ai_marked',
) => ({
  id,
  school_id: schoolId,
  class_id: classId,
  student_id: studentId,
  exam_board: 'AQA',
  qualification: 'GCSE',
  mark_scheme_id: 'aqa-lit-paper1',
  question_text: 'How is ambition presented?',
  essay_title: null,
  status,
  submitted_at: `2026-11-1${id.slice(-1)}T09:00:00Z`,
  ai_score: aos.reduce((s, a) => s + a.marks, 0),
  ai_max_marks: aos.reduce((s, a) => s + a.maxMarks, 0),
  ai_ao_breakdown: aos,
})

function seed(options: Parameters<typeof createFakeSupabase>[1] = {}) {
  return createFakeSupabase(
    {
      school_members: [
        {
          id: 'm-t1',
          user_id: 'u-t1',
          school_id: 'school-1',
          role: 'teacher',
          invite_status: 'accepted',
        },
        {
          id: 'm-a1',
          user_id: 'u-a1',
          school_id: 'school-1',
          role: 'admin',
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
        },
      ],
      classes: [
        { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A' },
        { id: 'c2', school_id: 'school-1', teacher_id: 'm-other', name: '10B' },
        { id: 'c9', school_id: 'school-2', teacher_id: 'm-x', name: 'Elsewhere' },
      ],
      marking_submissions: [
        essay('s1', 'school-1', 'c1', 'p1', [ao('AO1', 9, 12), ao('AO2', 3, 12)]),
        essay('s2', 'school-1', 'c1', 'p2', [ao('AO1', 6, 12), ao('AO2', 6, 12)]),
        essay('s3', 'school-1', 'c2', 'p3', [ao('AO1', 0, 12), ao('AO2', 12, 12)]),
        essay('s4', 'school-2', 'c9', 'p9', [ao('AO1', 12, 12), ao('AO2', 12, 12)]),
        { ...essay('s5', 'school-1', 'c1', 'p1', []), status: 'submitted', ai_ao_breakdown: null },
      ],
      teacher_moderations: [
        // The teacher raised s1's AO2 from 3 to 9.
        {
          id: 'mod-1',
          submission_id: 's1',
          decision: 'corrected',
          teacher_grade: null,
          ao_corrections: [{ ao: 'AO2', score: 9, maxScore: 12, comment: null }],
          created_at: '2026-11-12T10:00:00Z',
        },
      ],
      profiles: [],
    },
    options,
  )
}

const call = async (userId: string, query = '') => {
  state.userId = userId
  const res = await GET(new NextRequest(`http://localhost/api/school/analytics/marking${query}`))
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  state.fake = seed()
})

describe('the department view', () => {
  it('gives a teacher their own classes only, with their adjustment applied', async () => {
    const { status, body } = await call('u-t1')
    expect(status).toBe(200)
    expect(body.scope).toBe('teacher')
    expect(body.classes.map((c: { classId: string }) => c.classId)).toEqual(['c1'])
    // AO2 across s1 (adjusted to 9/12) and s2 (6/12) = mean of 0.75 and 0.5.
    const ao2 = body.overall.objectives.find((o: { ao: string }) => o.ao === 'AO2')
    expect(ao2).toMatchObject({ meanShare: 0.625, essays: 2, adjustedEssays: 1, smallSample: true })
    expect(body.totals).toMatchObject({ essays: 3, notYetMarked: 1, awaitingReview: 2 })
  })

  it('gives an admin every class in the school and nothing from another school', async () => {
    const { body } = await call('u-a1')
    expect(body.scope).toBe('school')
    expect(body.classes.map((c: { classId: string }) => c.classId).sort()).toEqual(['c1', 'c2'])
    expect(body.overall.essays).toBe(3)
    expect(JSON.stringify(body)).not.toContain('Elsewhere')
  })

  it("names each pupil's strongest and weakest objective", async () => {
    const { body } = await call('u-a1')
    const p3 = body.pupils.find((p: { studentId: string }) => p.studentId === 'p3')
    expect(p3.strongest.ao).toBe('AO2')
    expect(p3.weakest.ao).toBe('AO1')
    const p1 = body.pupils.find((p: { studentId: string }) => p.studentId === 'p1')
    expect(p1.name).toBe('Amira Khan')
  })

  it('refuses a class outside the viewer’s scope', async () => {
    expect((await call('u-t1', '?classId=c2')).status).toBe(404)
  })

  it('is honestly empty for a school with no essays, not filled with a sample', async () => {
    state.fake!.tables.school_members.push({
      id: 'm-z',
      user_id: 'u-z',
      school_id: 'school-3',
      role: 'admin',
      invite_status: 'accepted',
    })
    const { status, body } = await call('u-z')
    expect(status).toBe(200)
    expect(body.overall).toEqual({ essays: 0, smallSample: true, objectives: [] })
    expect(body.classes).toEqual([])
    expect(body.pupils).toEqual([])
    expect(body.totals.essays).toBe(0)
  })

  it('counts every essay when the server answers one row per request', async () => {
    // PostgREST stops at its row cap without an error; the reads page past it.
    state.fake = seed({ maxRows: { marking_submissions: 1 } })
    const { status, body } = await call('u-a1')
    expect(status).toBe(200)
    expect(body.totals.essays).toBe(4)
    expect(body.overall.essays).toBe(3)
    expect(body.truncated).toBe(false)
  })

  it('reports agreement in marks, never a grade against a mark', async () => {
    const { body } = await call('u-t1')
    expect(body.agreement).toEqual({
      reviewed: 1,
      unchanged: 0,
      raised: 1,
      lowered: 0,
      meanAbsChangeWhenChanged: 6,
    })
  })

  it.each(['marking_submissions', 'teacher_moderations', 'classes', 'profiles'])(
    'answers 500, not an empty department, when %s cannot be read',
    async (table) => {
      state.fake!.fail(table, 'infinite recursion detected in policy', '42P17')
      const { status, body } = await call('u-a1')
      expect(status).toBe(500)
      expect(body).not.toHaveProperty('overall')
    },
  )
})
