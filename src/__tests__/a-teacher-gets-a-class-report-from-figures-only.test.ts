// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { createFakeSupabase } from '@/__tests__/helpers/fake-supabase'
import type { StoredRound } from '@/lib/game-results/types'

/**
 * The AI class report for a teacher (23 October 2026;
 * POST /api/school/classes/[classId]/coach; src/lib/game-results/class-coach.ts).
 *
 * What this holds, each to the founder's decision of 23 October:
 *   - only staff with the class in scope may ask, as for the Games tab;
 *   - only where the school's access is live and it has recorded its
 *     authorisation for AI processing;
 *   - a pupil who has switched AI off is left out, and the report is refused
 *     below a floor of pupils and answers, so it is never one child's record;
 *   - the prompt carries the class's pooled figures and no name or pupil id;
 *   - a reply that names a grade is refused and nothing is stored;
 *   - one report a day per class, and the Games tab carries the latest.
 */

const state = vi.hoisted(() => ({
  userId: 'u-t1' as string | null,
  fake: null as ReturnType<
    typeof import('@/__tests__/helpers/fake-supabase').createFakeSupabase
  > | null,
  rounds: {} as Record<string, StoredRound[]>,
  optedOut: new Set<string>(),
  reply: '',
  prompts: [] as string[],
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
    const since = opts.since?.getTime() ?? 0
    return (state.rounds[userId] ?? []).filter((r) => Date.parse(r.finishedAt) >= since)
  }),
}))
vi.mock('@/lib/ai-preferences', () => ({
  isAiOptedOutServer: vi.fn(async (id: string) => state.optedOut.has(id)),
  withoutAiOptedOut: vi.fn(async (people: { id: string }[]) =>
    people.filter((p) => !state.optedOut.has(p.id)),
  ),
}))
const create = vi.fn(async (args: { messages: { content: string }[] }) => {
  state.prompts.push(args.messages[0].content)
  return {
    content: [{ type: 'text', text: state.reply }],
    stop_reason: 'end_turn',
    usage: { input_tokens: 10, output_tokens: 10 },
  }
})
vi.mock('@/lib/anthropic-client', () => ({
  ANTHROPIC_MODEL: 'claude-test',
  getAnthropicClient: () => ({ messages: { create } }),
}))
vi.mock('@/lib/ai-audit-log', () => ({
  logAiDecision: vi.fn(async () => {}),
  aiAuditTokenUsage: () => ({}),
}))

import { POST } from '@/app/api/school/classes/[classId]/coach/route'
import { GET } from '@/app/api/school/classes/[classId]/games/route'
import { logAiDecision } from '@/lib/ai-audit-log'
import { classCoachInput, CLASS_COACH_MIN_PUPILS } from '@/lib/game-results/class-coach'
import { summariseClass } from '@/lib/game-results/class-view'
import { analyseRounds } from '@/lib/game-results/analytics'

const NAMES = ['Amira Khan', 'Ben Ode', 'Cara Lin', 'Dev Patel']
const PUPILS = ['p1', 'p2', 'p3', 'p4']

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

function seed(school: Record<string, unknown> = {}) {
  return createFakeSupabase({
    schools: [
      {
        id: 'school-1',
        access_type: 'trial',
        access_until: '2026-12-31T00:00:00Z',
        subscription_status: null,
        ai_authorised_at: '2026-10-12T10:00:00Z',
        ...school,
      },
    ],
    school_members: [
      member('m-t1', 'u-t1', 'school-1', 'teacher'),
      member('m-t2', 'u-t2', 'school-1', 'teacher'),
      member('m-h1', 'u-h1', 'school-1', 'head_of_department'),
      ...PUPILS.map((p, n) =>
        member(`m-${p}`, p, 'school-1', 'student', {
          full_name: NAMES[n],
          accepted_at: '2026-09-25T00:00:00Z',
          created_at: '2026-09-25T00:00:00Z',
        }),
      ),
    ],
    classes: [
      { id: 'c1', school_id: 'school-1', teacher_id: 'm-t1', name: '10A', is_active: true },
      { id: 'c2', school_id: 'school-1', teacher_id: 'm-t2', name: '10B', is_active: true },
    ],
    class_students: PUPILS.map((p) => ({
      class_id: 'c1',
      student_id: p,
      is_active: true,
      joined_at: '2026-10-01T00:00:00Z',
    })),
    school_students: [],
    profiles: [],
    class_coach_reports: [],
  })
}

const goodReply = JSON.stringify({
  summary: 'Most of the class know their methods: 3 of 4 pupils are secure in naming them.',
  strengths: [
    {
      title: 'Naming methods',
      evidence: '3 of 4 pupils secure',
      why: 'Precise terms let pupils explain effects.',
    },
  ],
  workOn: [
    {
      title: 'Metaphor against simile',
      evidence: '2 pupils chose simile for metaphor',
      how: 'Set a round and discuss the difference.',
    },
  ],
  nextSteps: [
    {
      action: 'Set Speed Analysis for homework this week.',
      link: '/games/speed-analysis',
      why: 'Spotting methods quickly is what examiners reward.',
    },
  ],
})

const ask = async (userId: string | null, classId = 'c1') => {
  state.userId = userId
  const res = await POST(
    new NextRequest(`http://localhost/api/school/classes/${classId}/coach`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: '{}',
    }),
    { params: Promise.resolve({ classId }) },
  )
  return { status: res.status, body: await res.json() }
}
const games = async (userId: string | null, classId = 'c1') => {
  state.userId = userId
  const res = await GET(new NextRequest(`http://localhost/api/school/classes/${classId}/games`), {
    params: Promise.resolve({ classId }),
  })
  return { status: res.status, body: await res.json() }
}

beforeEach(() => {
  vi.clearAllMocks()
  process.env.ANTHROPIC_API_KEY = 'test-key'
  state.fake = seed()
  state.optedOut = new Set()
  state.reply = goodReply
  state.prompts = []
  // Twelve answers each, since joining: 48 across the class.
  state.rounds = Object.fromEntries(
    PUPILS.map((p, n) => [p, [round(12, 12 - n * 2, '2026-10-10T09:00:00Z')]]),
  )
})

describe('who may ask', () => {
  it('a stranger, a pupil and a teacher without the class are refused', async () => {
    expect((await ask(null)).status).toBe(401)
    expect((await ask('p1')).status).toBe(403)
    expect((await ask('u-t2')).status).toBe(404)
    expect(create).not.toHaveBeenCalled()
  })

  it('the class teacher and a head of department may', async () => {
    expect((await ask('u-t1')).status).toBe(200)
    state.fake = seed()
    expect((await ask('u-h1')).status).toBe(200)
  })
})

describe('the school', () => {
  it('must have recorded its authorisation for AI processing', async () => {
    state.fake = seed({ ai_authorised_at: null })
    const { status, body } = await ask('u-t1')
    expect(status).toBe(403)
    expect(body.code).toBe('school_ai_not_authorised')
    expect(create).not.toHaveBeenCalled()
  })

  it('must be live', async () => {
    state.fake = seed({ access_until: '2026-01-01T00:00:00Z' })
    const { status, body } = await ask('u-t1')
    expect(status).toBe(403)
    expect(body.code).toBe('school_not_live')
  })
})

describe('the pupils counted', () => {
  it('leaves out a pupil who has switched AI off', async () => {
    state.optedOut = new Set(['p4'])
    const { status, body } = await ask('u-t1')
    expect(status).toBe(200)
    expect(body.pupilsUsed).toBe(3)
    expect(body.answersUsed).toBe(36)
    expect(state.fake!.tables.class_coach_reports[0]).toMatchObject({
      pupils_used: 3,
      answers_used: 36,
    })
  })

  it('refuses below the floor, so a class report is never one child in disguise', async () => {
    state.optedOut = new Set(['p3', 'p4'])
    const { status, body } = await ask('u-t1')
    expect(status).toBe(422)
    expect(body.code).toBe('too_few')
    expect(body.minPupils).toBe(CLASS_COACH_MIN_PUPILS)
    expect(create).not.toHaveBeenCalled()
  })
})

describe('what the model is given, and what comes back', () => {
  it('is written from pooled figures: no name, no pupil id, no email', async () => {
    const { status } = await ask('u-t1')
    expect(status).toBe(200)
    expect(state.prompts).toHaveLength(1)
    const prompt = state.prompts[0]
    for (const name of [...NAMES, ...NAMES.map((n) => n.split(' ')[0])]) {
      expect(prompt, name).not.toContain(name)
    }
    for (const id of [...PUPILS, 'u-t1', 'm-p1', 'school-1', 'c1']) {
      expect(prompt, id).not.toMatch(new RegExp(`"${id}"`))
    }
    expect(prompt).not.toMatch(/@/)
    const input = JSON.parse(prompt)
    expect(input.pupilsWithResults).toBe(4)
    expect(input.answeredInTotal).toBe(48)
    expect(input.skills[0].pupils).toMatchObject({ secure: expect.any(Number) })
  })

  it('stores the report and records the decision against the teacher, under the school basis', async () => {
    const { body } = await ask('u-t1')
    expect(body.report.summary).toContain('3 of 4 pupils')
    expect(body.stored).toBe(true)
    const row = state.fake!.tables.class_coach_reports[0]
    expect(row).toMatchObject({ class_id: 'c1', school_id: 'school-1', requested_by: 'u-t1' })
    expect(JSON.stringify(row)).not.toMatch(/Amira|p1|p2/)
    expect(logAiDecision).toHaveBeenCalledWith(
      expect.objectContaining({
        feature: 'school/class-coach',
        userId: 'u-t1',
        success: true,
        consentSnapshot: expect.objectContaining({
          parentalConsentBasis: 'school_ai_authorisation',
        }),
      }),
    )
  })

  it('refuses a reply that names a grade, and stores nothing', async () => {
    state.reply = goodReply.replace(
      'Most of the class',
      'The class is at grade 7. Most of the class',
    )
    const { status, body } = await ask('u-t1')
    expect(status).toBe(502)
    expect(body.report).toBeUndefined()
    expect(state.fake!.tables.class_coach_reports).toHaveLength(0)
    expect(logAiDecision).toHaveBeenCalledWith(
      expect.objectContaining({ success: false, errorClass: 'grade_claim' }),
    )
  })

  it('writes one report a day for a class', async () => {
    expect((await ask('u-t1')).status).toBe(200)
    const { status, body } = await ask('u-t1')
    expect(status).toBe(429)
    expect(body.code).toBe('cooldown')
    expect(create).toHaveBeenCalledTimes(1)
  })
})

describe('the Games tab', () => {
  it('carries the latest report and whether the school may ask for one', async () => {
    const before = await games('u-t1')
    expect(before.body.report).toMatchObject({ latest: null, schoolAiAuthorised: true })
    await ask('u-t1')
    const after = await games('u-t1')
    expect(after.body.report.latest).toMatchObject({ pupilsUsed: 4, answersUsed: 48 })
    expect(after.body.report.latest.report.summary).toContain('3 of 4 pupils')
  })

  it('says the school is not authorised, and still shows the figures', async () => {
    state.fake = seed({ ai_authorised_at: null })
    const { status, body } = await games('u-t1')
    expect(status).toBe(200)
    expect(body.report.schoolAiAuthorised).toBe(false)
    expect(body.summary.pupilsWithData).toBe(4)
  })
})

describe('classCoachInput', () => {
  it('carries no pupil row: names and ids cannot reach the prompt', () => {
    const summary = summariseClass(
      PUPILS.map((p, n) => ({
        id: p,
        name: NAMES[n],
        joinedAt: '2026-10-01T00:00:00Z',
        analytics: analyseRounds([round(12, 12 - n * 2, '2026-10-10T09:00:00Z')]),
      })),
    )
    const json = JSON.stringify(classCoachInput(summary, {}, ['/games']))
    expect(json).not.toMatch(/Amira|Ben|Cara|Dev|"p[1-4]"|"id"|"name"/)
    expect(json).toContain('"pupilsWithResults":4')
    expect(json).toContain('"allowedLinks":[{"link":"/games"')
  })
})
