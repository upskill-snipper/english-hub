// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'
import type { StoredRound } from '@/lib/game-results/types'

/**
 * Teachers see their pupils' game results (16 October 2026): the class view
 * (GET /api/school/classes/[classId]/games) and the pupil page
 * (GET /api/school/students/[studentId]/games).
 *
 * What these hold:
 *   - staff see only classes and pupils in their scope; anyone else 404 or 403;
 *   - only the school's own pupils, so an enrolment written around the API
 *     (still possible until document 21's database rules are approved) never
 *     opens another child's games;
 *   - only rounds finished since the pupil joined, and nothing at all when the
 *     enrolment gives no date;
 *   - a read failure is a 503, never an empty record.
 */

const state = vi.hoisted(() => ({
  userId: 'u-t1' as string | null,
  fake: null as ReturnType<
    typeof import('@/__tests__/helpers/fake-supabase').createFakeSupabase
  > | null,
  rounds: {} as Record<string, StoredRound[]>,
  calls: [] as { userId: string; since: string | null }[],
  readFails: false,
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
vi.mock('@/lib/game-results/store', () => ({
  ANALYTICS_WINDOW_DAYS: 365,
  readRounds: vi.fn(async (userId: string, opts: { since?: Date } = {}) => {
    state.calls.push({ userId, since: opts.since ? opts.since.toISOString() : null })
    if (state.readFails) throw new Error('game_rounds read failed: simulated')
    const since = opts.since?.getTime() ?? 0
    return (state.rounds[userId] ?? []).filter((r) => Date.parse(r.finishedAt) >= since)
  }),
}))

import { GET as classGames } from '@/app/api/school/classes/[classId]/games/route'
import { GET as pupilGames } from '@/app/api/school/students/[studentId]/games/route'

function round(answers: number, right: number, finishedAt: string): StoredRound {
  return {
    source: 'skills',
    activity: 'speed-analysis',
    level: null,
    answered: answers,
    correct: right,
    score: null,
    maxScore: null,
    durationSeconds: 120,
    items: Array.from({ length: answers }, (_, i) => ({
      i: `q${String(i).padStart(6, '0')}`,
      k: 'metaphor',
      c: (i < right ? 1 : 0) as 0 | 1,
    })),
    finishedAt,
  }
}

const member = (id: string, user: string, school: string, role: string, extra = {}) => ({
  id,
  user_id: user,
  school_id: school,
  role,
  invite_status: 'accepted',
  ...extra,
})

function seed() {
  return createFakeSupabase({
    school_members: [
      member('m-t1', 'u-t1', 'school-1', 'teacher'),
      member('m-t2', 'u-t2', 'school-1', 'teacher'),
      member('m-h1', 'u-h1', 'school-1', 'head_of_department'),
      member('m-x', 'u-x', 'school-2', 'admin'),
      member('m-p1', 'p1', 'school-1', 'student', {
        full_name: 'Amira Khan',
        accepted_at: '2026-09-25T00:00:00Z',
        created_at: '2026-09-25T00:00:00Z',
      }),
      member('m-p2', 'p2', 'school-1', 'student', {
        full_name: 'Ben Ode',
        accepted_at: '2026-09-25T00:00:00Z',
        created_at: '2026-09-25T00:00:00Z',
      }),
      // A pupil of the school in no class yet.
      member('m-p3', 'p3', 'school-1', 'student', {
        full_name: 'Cara Lin',
        accepted_at: '2026-10-02T00:00:00Z',
        created_at: '2026-10-02T00:00:00Z',
      }),
    ],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A', is_active: true },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-t2', name: '10B', is_active: true },
    ],
    class_students: [
      { class_id: 'c1', student_id: 'p1', is_active: true, joined_at: '2026-10-01T00:00:00Z' },
      // Someone else's child, enrolled straight into the database: not a pupil of the school.
      { class_id: 'c1', student_id: 'p9', is_active: true, joined_at: '2026-09-01T00:00:00Z' },
      // An enrolment that does not say when.
      { class_id: 'c1', student_id: 'p2', is_active: true, joined_at: null },
      { class_id: 'c2', student_id: 'p2', is_active: true, joined_at: '2026-10-05T00:00:00Z' },
    ],
    school_students: [],
    profiles: [{ id: 'p9', full_name: 'Not Ours' }],
  })
}

const asClass = async (userId: string | null, classId = 'c1') => {
  state.userId = userId
  const res = await classGames(
    new NextRequest(`http://localhost/api/school/classes/${classId}/games`),
    {
      params: Promise.resolve({ classId }),
    },
  )
  return { status: res.status, body: await res.json() }
}
const asPupil = async (userId: string | null, studentId: string) => {
  state.userId = userId
  const res = await pupilGames(
    new NextRequest(`http://localhost/api/school/students/${studentId}/games`),
    { params: Promise.resolve({ studentId }) },
  )
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  state.fake = seed()
  state.calls = []
  state.readFails = false
  state.rounds = {
    // Before joining c1 on 1 October: ten wrong. After: ten right.
    p1: [round(10, 10, '2026-10-10T09:00:00Z'), round(10, 0, '2026-09-20T09:00:00Z')],
    p2: [round(6, 3, '2026-10-08T09:00:00Z')],
    p9: [round(10, 10, '2026-10-10T09:00:00Z')],
  }
})

describe('the class view', () => {
  it('shows a teacher their class, counting only rounds since each pupil joined', async () => {
    const { status, body } = await asClass('u-t1')
    expect(status).toBe(200)
    expect(body.class).toEqual({ id: 'c1', name: '10A' })
    const amira = body.summary.rows.find((r: { id: string }) => r.id === 'p1')
    expect(amira).toMatchObject({ name: 'Amira Khan', answered: 10, accuracy: 100 })
    expect(state.calls).toContainEqual({ userId: 'p1', since: '2026-10-01T00:00:00.000Z' })
  })

  it('never shows a child who is not a pupil of the school, however they were enrolled', async () => {
    const { body } = await asClass('u-t1')
    expect(body.summary.rows.map((r: { id: string }) => r.id)).not.toContain('p9')
    expect(state.calls.map((c) => c.userId)).not.toContain('p9')
    expect(JSON.stringify(body)).not.toContain('Not Ours')
  })

  it('shows nothing of a pupil whose enrolment does not say when they joined', async () => {
    const { body } = await asClass('u-t1')
    const ben = body.summary.rows.find((r: { id: string }) => r.id === 'p2')
    expect(ben).toMatchObject({ name: 'Ben Ode', answered: 0, joinedAt: null })
    expect(state.calls.map((c) => c.userId)).not.toContain('p2')
  })

  it('is refused to another teacher, a pupil, a stranger and another school', async () => {
    expect((await asClass('u-t2')).status).toBe(404)
    expect((await asClass('p1')).status).toBe(403)
    expect((await asClass('u-x')).status).toBe(404)
    expect((await asClass(null)).status).toBe(401)
  })

  it('is open to a head of department for any class of the school', async () => {
    expect((await asClass('u-h1', 'c2')).status).toBe(200)
  })

  it('answers 503, never an empty class, when the results cannot be read', async () => {
    state.readFails = true
    const { status, body } = await asClass('u-t1')
    expect(status).toBe(503)
    expect(body).not.toHaveProperty('summary')
  })

  it.each(['class_students', 'school_members'])(
    'answers 503 when %s cannot be read',
    async (table) => {
      state.fake!.fail(table, 'simulated', 'XX000')
      expect((await asClass('u-h1')).status).not.toBe(200)
    },
  )
})

describe('the pupil page', () => {
  it('shows a teacher their pupil from the day the pupil joined their class', async () => {
    const { status, body } = await asPupil('u-t1', 'p1')
    expect(status).toBe(200)
    expect(body.since).toBe('2026-10-01T00:00:00.000Z')
    expect(body.analytics.totals).toMatchObject({ answered: 10, correct: 10 })
  })

  it('never opens a child who is not a pupil of the school', async () => {
    expect((await asPupil('u-t1', 'p9')).status).toBe(404)
    expect(state.calls.map((c) => c.userId)).not.toContain('p9')
  })

  it('is refused to a teacher who does not teach the pupil, and to the pupil', async () => {
    expect((await asPupil('u-t2', 'p1')).status).toBe(404)
    expect((await asPupil('p1', 'p1')).status).toBe(403)
  })

  it('uses the class a teacher can see, and skips an enrolment with no date', async () => {
    // p2 is in c1 with no date and in c2 from 5 October; u-t2 teaches c2.
    const { body } = await asPupil('u-t2', 'p2')
    expect(body.since).toBe('2026-10-05T00:00:00.000Z')
  })

  it('for a head of department, falls back to the day the pupil joined the school', async () => {
    const { status, body } = await asPupil('u-h1', 'p3')
    expect(status).toBe(200)
    expect(body.since).toBe('2026-10-02T00:00:00.000Z')
  })

  it('answers 503 when the results cannot be read', async () => {
    state.readFails = true
    expect((await asPupil('u-t1', 'p1')).status).toBe(503)
  })
})
