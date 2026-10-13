// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn(),
  createServiceRoleClient: vi.fn(),
}))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: vi.fn() }))
vi.mock('@/lib/course-access', () => ({ hasActiveSubscription: vi.fn() }))
vi.mock('@/lib/consent-check', () => ({ checkMinorAIConsent: vi.fn() }))
vi.mock('@/lib/ai-preferences', () => ({ isAiOptedOutServer: vi.fn() }))
vi.mock('@/lib/usage/trial-allowance', () => ({
  EMPTY_TRIAL_GATE: { response: null, state: null },
  enforceTrialAllowance: vi.fn(),
  refundTrialAllowance: vi.fn(),
}))
vi.mock('@/lib/usage/free-allowance', () => ({ applyAllowanceHeaders: (r: unknown) => r }))
const create = vi.fn()
vi.mock('@/lib/anthropic-client', () => ({
  ANTHROPIC_MODEL: 'claude-test',
  getAnthropicClient: () => ({ messages: { create } }),
}))
vi.mock('@/lib/ai-audit-log', () => ({ logAiDecision: vi.fn(), aiAuditTokenUsage: () => ({}) }))
vi.mock('@/lib/game-results/store', () => ({ readRounds: vi.fn() }))

import { POST } from './route'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { enforceTrialAllowance, refundTrialAllowance } from '@/lib/usage/trial-allowance'
import { logAiDecision } from '@/lib/ai-audit-log'
import { readRounds } from '@/lib/game-results/store'
import type { StoredRound } from '@/lib/game-results/types'

/**
 * POST /api/games/coach: the gate the founder's decisions of 13 October 2026
 * set (suggestions on, a plan or a school) on top of the gate every AI feature
 * passes (opt-out, consent, allowance), and what happens to the reply.
 *
 * The point of most of these: a refusal spends nothing (the model is never
 * called), a failed reply is given back (the allowance is refunded), and a
 * reply that breaks a rule is neither shown nor stored.
 */

const ACCOUNT = '7d1c9a52-1f0e-4b7a-9c3d-2e8f6a4b1c90'

const goodReply = {
  summary: 'You know Macbeth well: 18 of your last 20 questions on the plot were right.',
  strengths: [
    {
      title: 'Plot of Macbeth',
      evidence: '18 of the last 20 right',
      why: 'It lets you pick the right moment.',
    },
  ],
  workOn: [
    {
      title: 'Naming methods',
      evidence: '3 of the last 10 right',
      how: 'Name the method, then explain its effect.',
    },
  ],
  nextSteps: [
    {
      action: 'Play the Craft level.',
      link: '/games/texts/macbeth',
      why: 'Precise terms explain effects.',
    },
  ],
}

function rounds(n: number): StoredRound[] {
  return [
    {
      source: 'quest',
      activity: 'macbeth',
      level: 'chapter-1',
      answered: n,
      correct: n,
      score: null,
      maxScore: null,
      durationSeconds: 300,
      items: Array.from({ length: n }, (_, i) => ({
        i: `q${i}`,
        k: i % 2 ? 'order' : 'method',
        c: (i % 3 ? 1 : 0) as 0 | 1,
      })),
      finishedAt: new Date().toISOString(),
    },
  ]
}

let suggestionsOn: boolean | null
let lastReportAt: string | null
let insert: ReturnType<typeof vi.fn>

function db() {
  insert = vi.fn(() => ({
    select: () => ({
      single: async () => ({ data: { id: 'r1', created_at: '2026-10-13T12:00:00Z' }, error: null }),
    }),
  }))
  vi.mocked(createServiceRoleClient).mockReturnValue({
    from: (table: string) => {
      if (table === 'profiles') {
        return {
          select: () => ({
            eq: () => ({
              maybeSingle: async () => ({
                data:
                  suggestionsOn === null ? null : { personalised_recommendations: suggestionsOn },
              }),
            }),
          }),
        }
      }
      // coach_reports
      return {
        select: () => ({
          eq: () => ({
            eq: () => ({
              order: () => ({
                limit: () => ({
                  maybeSingle: async () => ({
                    data: lastReportAt ? { created_at: lastReportAt } : null,
                  }),
                }),
              }),
            }),
          }),
        }),
        insert,
      }
    },
  } as unknown as ReturnType<typeof createServiceRoleClient>)
}

const post = () =>
  new NextRequest('https://theenglishhub.app/api/games/coach', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: '{}',
  })

let log: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  vi.clearAllMocks()
  process.env.ANTHROPIC_API_KEY = 'test-key'
  suggestionsOn = true
  lastReportAt = null
  db()
  vi.mocked(createServerSupabaseClient).mockReturnValue({
    auth: {
      getUser: async () => ({ data: { user: { id: ACCOUNT, email: 'x@example.invalid' } } }),
    },
  } as unknown as ReturnType<typeof createServerSupabaseClient>)
  vi.mocked(rateLimit).mockResolvedValue({ success: true, remaining: 4, resetAt: 0 })
  vi.mocked(isAiOptedOutServer).mockResolvedValue(false)
  vi.mocked(hasActiveSubscription).mockResolvedValue(true)
  vi.mocked(readRounds).mockResolvedValue(rounds(30))
  vi.mocked(checkMinorAIConsent).mockResolvedValue({
    allowed: true,
    basis: 'sixteen_or_over',
  } as never)
  vi.mocked(enforceTrialAllowance).mockResolvedValue({ response: null, state: null } as never)
  create.mockResolvedValue({
    content: [{ type: 'text', text: JSON.stringify(goodReply) }],
    stop_reason: 'end_turn',
    usage: { input_tokens: 900, output_tokens: 300 },
  })
  log = vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => log.mockRestore())

const body = async (res: Response) => (await res.json()) as Record<string, unknown>

describe('POST /api/games/coach: who may ask', () => {
  it('tells an opted-out student so first, and never offers them a plan', async () => {
    vi.mocked(isAiOptedOutServer).mockResolvedValue(true)
    vi.mocked(hasActiveSubscription).mockResolvedValue(false)
    const res = await POST(post())
    expect(res.status).toBe(403)
    expect((await body(res)).code).toBe('ai_opted_out')
    expect(create).not.toHaveBeenCalled()
  })

  it('needs suggestions switched on, and treats an unreadable setting as off', async () => {
    suggestionsOn = false
    expect((await body(await POST(post()))).code).toBe('suggestions_off')
    suggestionsOn = null
    expect((await body(await POST(post()))).code).toBe('suggestions_off')
    expect(create).not.toHaveBeenCalled()
  })

  it('is for a plan or a school', async () => {
    vi.mocked(hasActiveSubscription).mockResolvedValue(false)
    const res = await POST(post())
    expect(res.status).toBe(403)
    expect((await body(res)).code).toBe('needs_plan')
    expect(create).not.toHaveBeenCalled()
  })

  it('needs enough answers to say anything useful', async () => {
    vi.mocked(readRounds).mockResolvedValue(rounds(12))
    const res = await POST(post())
    expect(res.status).toBe(422)
    expect(await body(res)).toMatchObject({ code: 'too_few_answers', answered: 12, needed: 20 })
    expect(create).not.toHaveBeenCalled()
  })

  it('writes one report a day', async () => {
    lastReportAt = new Date(Date.now() - 3 * 3_600_000).toISOString()
    const res = await POST(post())
    expect(res.status).toBe(429)
    expect((await body(res)).code).toBe('cooldown')
    expect(create).not.toHaveBeenCalled()
  })

  it('passes the AI consent gate, with its own code', async () => {
    vi.mocked(checkMinorAIConsent).mockResolvedValue({
      allowed: false,
      code: 'parental_consent_required',
      reason: 'A parent or guardian has to give permission first.',
    } as never)
    const res = await POST(post())
    expect(res.status).toBe(403)
    expect((await body(res)).code).toBe('parental_consent_required')
    expect(create).not.toHaveBeenCalled()
  })
})

describe('POST /api/games/coach: the reply', () => {
  it('returns, stores and records a reply that keeps the rules', async () => {
    const res = await POST(post())
    expect(res.status).toBe(200)
    expect((await body(res)).report).toEqual(goodReply)
    const row = insert.mock.calls[0][0]
    expect(row).toMatchObject({
      user_id: ACCOUNT,
      audience: 'student',
      requested_by: ACCOUNT,
      answers_used: 30,
    })
    expect(vi.mocked(logAiDecision).mock.calls[0][0]).toMatchObject({
      feature: 'games/coach',
      success: true,
    })
  })

  it('sends the model figures, never the student’s identity', async () => {
    await POST(post())
    const sent = JSON.stringify(create.mock.calls[0][0])
    expect(sent).not.toContain(ACCOUNT)
    expect(sent).not.toContain('example.invalid')
    expect(sent).toContain('allowedLinks')
  })

  it('refuses a reply that names a grade: not shown, not stored, allowance given back', async () => {
    create.mockResolvedValueOnce({
      content: [
        {
          type: 'text',
          text: JSON.stringify({ ...goodReply, summary: 'You are working at grade 6.' }),
        },
      ],
      stop_reason: 'end_turn',
      usage: {},
    })
    const res = await POST(post())
    expect(res.status).toBe(502)
    expect((await body(res)).report).toBeUndefined()
    expect(insert).not.toHaveBeenCalled()
    expect(refundTrialAllowance).toHaveBeenCalled()
    expect(vi.mocked(logAiDecision).mock.calls[0][0]).toMatchObject({
      success: false,
      errorClass: 'grade_claim',
    })
  })

  it('gives the allowance back when the model cannot be reached', async () => {
    create.mockRejectedValueOnce(Object.assign(new Error('overloaded'), { status: 529 }))
    const res = await POST(post())
    expect(res.status).toBe(503)
    expect(refundTrialAllowance).toHaveBeenCalled()
    expect(insert).not.toHaveBeenCalled()
  })
})
