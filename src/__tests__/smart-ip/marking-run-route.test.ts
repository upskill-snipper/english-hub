// ─── Smart-IP · POST /api/marking/run ────────────────────────────────────────
//
// Focus (per the suite brief):
//   • state guard - only status 'submitted' | 'pending' may be marked; any
//     other status ⇒ 400 and NO persist
//   • authorisation by source - b2c_self: owning student only; b2b_class:
//     verified school member, same-school enforced
//   • the AI mark is ALWAYS a DRAFT - applyAiResult is called with
//     'ai_marked' (b2c) or 'teacher_review_required' (b2b); NEVER 'approved'
//
// All heavy collaborators are mocked. We assert on the persistence mock's
// status argument rather than re-implementing the model path.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import { logAiDecision } from '@/lib/ai-audit-log'
import { refundTrialAllowance } from '@/lib/usage/trial-allowance'

interface Session {
  user: { id: string; email?: string } | null
  error: { message: string } | null
}
let session: Session = { user: { id: 'student-1' }, error: null }
let rlResult = { success: true, remaining: 29, resetAt: Date.now() + 86_400_000 }
let loadedRow: Record<string, unknown> | null = null
let schoolMember: unknown = null
let feedbackResult: unknown = {
  ok: true,
  result: {
    markSchemeId: 'aqa-lit-p1',
    questionId: 'q1',
    totalMarks: 20,
    maxMarks: 30,
    predictedGrade: '6',
    gradeBand: 'Grade 6-7',
    aoScores: [{ id: 'AO1', label: 'AO1', marks: 10, maxMarks: 15, band: '', justification: '' }],
    strengths: [],
    improvements: [],
    nextStepsToNextGrade: [],
    summary: 'ok',
  },
}

const applyAiResultMock = vi.fn(
  async (..._args: unknown[]): Promise<Record<string, unknown>> => ({
    id: 'sub-1',
    status: 'ai_marked',
  }),
)
const loadSubmissionMock = vi.fn(
  async (..._args: unknown[]): Promise<Record<string, unknown> | null> => loadedRow,
)
const captureVersionsMock = vi.fn(async (..._args: unknown[]) => ({
  modelVersionId: null,
  promptVersionId: null,
  rubricVersionId: null,
}))

// The b2c_self branch now gates on hasActiveSubscription (2026-06-08 paywall),
// which reads supabase.from('profiles').select('subscription_status').eq().single().
// Give the mock a chainable .from() returning a 'pro' profile so the entitlement
// check passes — these tests exercise the state/authorisation contract, not the
// paywall (the paywall is covered by the gate-logic audit + course-access tests).
vi.mock('@/lib/supabase/server', () => {
  const profileBuilder = {
    select: () => profileBuilder,
    eq: () => profileBuilder,
    single: async () => ({ data: { subscription_status: 'pro' }, error: null }),
    maybeSingle: async () => ({ data: { subscription_status: 'pro' }, error: null }),
  }
  return {
    createServerSupabaseClient: () => ({
      auth: { getUser: async () => ({ data: { user: session.user }, error: session.error }) },
      from: () => profileBuilder,
    }),
    createServiceRoleClient: () => ({ __svc: true }),
  }
})
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => rlResult,
  getClientIp: () => '127.0.0.1',
}))
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: async () => schoolMember,
}))
vi.mock('@/lib/marking/persistence', () => ({
  loadSubmission: (...a: unknown[]) => loadSubmissionMock(...a),
  applyAiResult: (...a: unknown[]) => applyAiResultMock(...a),
  deriveUncertaintyFlags: () => [],
}))
vi.mock('@/lib/marking/versioning-capture', () => ({
  captureVersions: (...a: unknown[]) => captureVersionsMock(...a),
}))
vi.mock('@/lib/marking/mark-schemes', () => ({
  getMarkScheme: () => ({ id: 'aqa-lit-p1', board: 'AQA', version: 'v1.0' }),
}))
vi.mock('@/lib/marking/prompt-builder', () => ({
  buildMarkingPrompt: () => ({ systemPrompt: 'SYS', userMessage: 'USR' }),
}))
vi.mock('@/lib/marking/feedback-generator', () => ({
  generateFeedback: () => feedbackResult,
}))
vi.mock('@/lib/i18n/ai-language-directive', () => ({
  withArabicDirective: (s: string) => s,
  resolveLocaleFromRequest: () => 'en',
}))
vi.mock('@/lib/ai-audit-log', () => ({
  // The real mapper, not a stub: the routes rely on it to carry the
  // prompt-cache counters into the audit record, and a vi.fn() here would
  // hide a regression in exactly the telemetry that decides whether
  // caching pays (see src/lib/ai/cached-system.ts).
  aiAuditTokenUsage: (u: Record<string, number | null | undefined>) => ({
    inputTokens: u.input_tokens,
    outputTokens: u.output_tokens,
    cacheReadTokens: u.cache_read_input_tokens ?? undefined,
    cacheCreationTokens: u.cache_creation_input_tokens ?? undefined,
  }),
  logAiDecision: vi.fn(),
  hashAuditInput: (v: string) => `H(${v})`,
}))
interface ModelReply {
  content: { type: string; text: string }[]
  usage: { input_tokens: number; output_tokens: number }
  stop_reason?: string
}
const anthropicCreate = vi.fn(
  async (..._args: unknown[]): Promise<ModelReply> => ({
    content: [{ type: 'text', text: '{"ok":true}' }],
    usage: { input_tokens: 10, output_tokens: 20 },
  }),
)
// The no-card trial AI ceiling. These fixtures are subscribers, not no-card
// trials, so the meter is a pass-through here - exactly as it is in production
// for anyone who has paid. The meter itself is covered by
// src/lib/usage/__tests__/free-allowance.test.ts.
vi.mock('@/lib/usage/trial-allowance', () => ({
  EMPTY_TRIAL_GATE: { response: null, consumed: null, state: null },
  enforceTrialAllowance: vi.fn(async () => ({
    response: null,
    consumed: null,
    state: null,
  })),
  refundTrialAllowance: vi.fn(async () => undefined),
}))

vi.mock('@/lib/anthropic-client', () => ({
  getAnthropicClient: () => ({ messages: { create: (...a: unknown[]) => anthropicCreate(...a) } }),
  ANTHROPIC_MODEL: 'claude-test',
}))

function baseRow(over: Record<string, unknown> = {}) {
  return {
    id: 'sub-1',
    student_id: 'student-1',
    school_id: null,
    source: 'b2c_self',
    status: 'submitted',
    mark_scheme_id: 'aqa-lit-p1',
    rubric_ref: 'q1',
    question_text: 'Q',
    essay_text: 'A sufficiently long student answer for marking.',
    studied_text: null,
    qualification: 'GCSE',
    ...over,
  }
}

function makeReq(body: unknown = { submissionId: 'sub-1' }, json = true): NextRequest {
  const headers: Record<string, string> = {}
  if (json) headers['content-type'] = 'application/json'
  return new NextRequest('http://localhost/api/marking/run', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

async function POST(req: NextRequest) {
  const mod = await import('@/app/api/marking/run/route')
  return mod.POST(req)
}

beforeEach(() => {
  session = { user: { id: 'student-1' }, error: null }
  rlResult = { success: true, remaining: 29, resetAt: Date.now() + 86_400_000 }
  loadedRow = baseRow()
  schoolMember = null
  feedbackResult = {
    ok: true,
    result: {
      markSchemeId: 'aqa-lit-p1',
      questionId: 'q1',
      totalMarks: 20,
      maxMarks: 30,
      predictedGrade: '6',
      gradeBand: 'Grade 6-7',
      aoScores: [{ id: 'AO1', label: 'AO1', marks: 10, maxMarks: 15, band: '', justification: '' }],
      strengths: [],
      improvements: [],
      nextStepsToNextGrade: [],
      summary: 'ok',
    },
  }
  applyAiResultMock.mockClear()
  applyAiResultMock.mockResolvedValue({ id: 'sub-1', status: 'ai_marked' })
  loadSubmissionMock.mockClear()
  captureVersionsMock.mockClear()
  anthropicCreate.mockClear()
  process.env.ANTHROPIC_API_KEY = 'test-key'
})

describe('POST /api/marking/run - preconditions', () => {
  it('415 for non-JSON content type', async () => {
    const res = await POST(makeReq({ submissionId: 'sub-1' }, false))
    expect(res.status).toBe(415)
  })

  it('401 when unauthenticated', async () => {
    session = { user: null, error: { message: 'x' } }
    const res = await POST(makeReq())
    expect(res.status).toBe(401)
  })

  it('429 when rate-limited', async () => {
    rlResult = { success: false, remaining: 0, resetAt: Date.now() + 1000 }
    const res = await POST(makeReq())
    expect(res.status).toBe(429)
  })

  it('400 when submissionId missing', async () => {
    const res = await POST(makeReq({}))
    expect(res.status).toBe(400)
  })

  it('404 when the submission does not exist', async () => {
    loadedRow = null
    const res = await POST(makeReq())
    expect(res.status).toBe(404)
  })
})

describe('POST /api/marking/run - state guard', () => {
  it.each(['ai_marked', 'teacher_review_required', 'approved', 'rejected', 'training_ready'])(
    "rejects status '%s' with 400 and NEVER persists",
    async (status) => {
      loadedRow = baseRow({ status })
      const res = await POST(makeReq())
      expect(res.status).toBe(400)
      expect((await res.json()).error).toMatch(/not awaiting marking/i)
      expect(applyAiResultMock).not.toHaveBeenCalled()
    },
  )

  it("proceeds for status 'submitted'", async () => {
    loadedRow = baseRow({ status: 'submitted' })
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
    expect(applyAiResultMock).toHaveBeenCalledTimes(1)
  })

  it("proceeds for status 'pending'", async () => {
    loadedRow = baseRow({ status: 'pending' })
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
    expect(applyAiResultMock).toHaveBeenCalledTimes(1)
  })
})

describe('POST /api/marking/run - authorisation by source', () => {
  it('b2c_self: forbids a non-owning student', async () => {
    loadedRow = baseRow({ source: 'b2c_self', student_id: 'other-student' })
    const res = await POST(makeReq())
    expect(res.status).toBe(403)
    expect(applyAiResultMock).not.toHaveBeenCalled()
  })

  it('b2c_self: owning student is allowed', async () => {
    loadedRow = baseRow({ source: 'b2c_self', student_id: 'student-1' })
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
  })

  it('b2b_class: forbids when caller is not a verified school member', async () => {
    loadedRow = baseRow({ source: 'b2b_class', school_id: 'sch-1' })
    schoolMember = null
    const res = await POST(makeReq())
    expect(res.status).toBe(403)
    expect(applyAiResultMock).not.toHaveBeenCalled()
  })

  it('b2b_class: forbids a member from a DIFFERENT school', async () => {
    loadedRow = baseRow({ source: 'b2b_class', school_id: 'sch-1' })
    schoolMember = { school_id: 'sch-OTHER', role: 'teacher', id: 'mem-1' }
    const res = await POST(makeReq())
    expect(res.status).toBe(403)
    expect((await res.json()).error).toMatch(/another school/i)
  })

  it('b2b_class: same-school member is allowed', async () => {
    loadedRow = baseRow({ source: 'b2b_class', school_id: 'sch-1' })
    schoolMember = { school_id: 'sch-1', role: 'teacher', id: 'mem-1' }
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
  })
})

describe('POST /api/marking/run - AI mark is always a DRAFT', () => {
  it("b2c_self ⇒ applyAiResult called with status 'ai_marked' (never 'approved')", async () => {
    loadedRow = baseRow({ source: 'b2c_self', student_id: 'student-1' })
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
    const persistArg = applyAiResultMock.mock.calls[0][2] as { status: string }
    expect(persistArg.status).toBe('ai_marked')
    expect(persistArg.status).not.toBe('approved')
  })

  it("b2b_class ⇒ applyAiResult called with status 'teacher_review_required'", async () => {
    loadedRow = baseRow({ source: 'b2b_class', school_id: 'sch-1' })
    schoolMember = { school_id: 'sch-1', role: 'admin', id: 'mem-1' }
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
    const persistArg = applyAiResultMock.mock.calls[0][2] as { status: string }
    expect(persistArg.status).toBe('teacher_review_required')
    expect(persistArg.status).not.toBe('approved')
  })

  it('no status this route can ever persist equals "approved"', async () => {
    // Exercise both branches; assert the union of persisted statuses excludes
    // 'approved' entirely (the AI mark is a draft by construction).
    loadedRow = baseRow({ source: 'b2c_self', student_id: 'student-1' })
    await POST(makeReq())
    loadedRow = baseRow({ source: 'b2b_class', school_id: 'sch-1' })
    schoolMember = { school_id: 'sch-1', role: 'admin', id: 'mem-1' }
    await POST(makeReq())
    const statuses = applyAiResultMock.mock.calls.map((c) => (c[2] as { status: string }).status)
    expect(statuses).toEqual(['ai_marked', 'teacher_review_required'])
    expect(statuses).not.toContain('approved')
  })
})

describe('POST /api/marking/run - model-path rejections do not persist', () => {
  it('INVALID_SUBMISSION ⇒ 400, no persist', async () => {
    feedbackResult = { ok: false, error: { type: 'INVALID_SUBMISSION' } }
    const res = await POST(makeReq())
    expect(res.status).toBe(400)
    expect(applyAiResultMock).not.toHaveBeenCalled()
  })

  it('OFF_TOPIC ⇒ 400, no persist', async () => {
    feedbackResult = { ok: false, error: { type: 'OFF_TOPIC' } }
    const res = await POST(makeReq())
    expect(res.status).toBe(400)
    expect(applyAiResultMock).not.toHaveBeenCalled()
  })

  it('503 when ANTHROPIC_API_KEY is not configured (no persist)', async () => {
    delete process.env.ANTHROPIC_API_KEY
    const res = await POST(makeReq())
    expect(res.status).toBe(503)
    expect(applyAiResultMock).not.toHaveBeenCalled()
  })
})

// ─── The reply budget (10 October 2026) ─────────────────────────────────────
//
// Four of the 36 runs in production's AI audit log failed as "Model response
// was not valid JSON", every one at exactly 4,096 output tokens: the cap had
// cut the reply off, the model had not written bad JSON. "The reply budget"
// in the route has the whole account. The figures below are what the new
// numbers rest on, read from the audit log on 10 October 2026.
// ────────────────────────────────────────────────────────────────────────────

/** The longest reply production had marked when the cap was raised. */
const LONGEST_MARKED_REPLY = 3_980
/** The slowest rate any marked reply over 1,000 tokens was written at. */
const SLOWEST_TOKENS_PER_SECOND = 86
/** How long Cloudflare, in front of the site, waits for the origin before showing its 524 page. */
const CLOUDFLARE_WAIT_S = 125

const NOT_JSON = {
  ok: false,
  error: { type: 'INVALID_RESPONSE', reason: 'Model response was not valid JSON' },
}

/** A reply the model was stopped in the middle of, as production's four were. */
const cutOff = (over: Partial<ModelReply> = {}): ModelReply => ({
  content: [{ type: 'text', text: '{"aoScores": [{"id": "AO1", "justification": "The response' }],
  usage: { input_tokens: 10, output_tokens: 8_192 },
  stop_reason: 'max_tokens',
  ...over,
})

/** What the route sent with its one call to the model. */
function sentToModel() {
  expect(anthropicCreate).toHaveBeenCalledOnce()
  const [body, options] = anthropicCreate.mock.calls[0] as [
    { max_tokens: number },
    { timeout: number; signal?: AbortSignal },
  ]
  return { body, options }
}

describe('POST /api/marking/run - a reply cut off at max_tokens', () => {
  beforeEach(() => {
    vi.mocked(logAiDecision).mockClear()
    vi.mocked(refundTrialAllowance).mockClear()
  })

  it('is logged as TRUNCATED, not as malformed JSON, and is refunded and not persisted', async () => {
    feedbackResult = NOT_JSON
    anthropicCreate.mockResolvedValueOnce(cutOff())
    const res = await POST(makeReq())
    expect(res.status).toBe(500)
    expect(applyAiResultMock).not.toHaveBeenCalled()
    expect(refundTrialAllowance).toHaveBeenCalledOnce()
    expect(logAiDecision).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        errorClass: 'TRUNCATED',
        outputSummary: { rejected: 'TRUNCATED' },
        tokenUsage: expect.objectContaining({ outputTokens: 8_192 }),
      }),
    )
  })

  it('but a reply that finished and was malformed is still INVALID_RESPONSE', async () => {
    feedbackResult = NOT_JSON
    anthropicCreate.mockResolvedValueOnce(cutOff({ stop_reason: 'end_turn' }))
    const res = await POST(makeReq())
    expect(res.status).toBe(500)
    expect(logAiDecision).toHaveBeenCalledWith(
      expect.objectContaining({ success: false, errorClass: 'INVALID_RESPONSE' }),
    )
  })

  it('and a reply that reached the cap after its JSON closed is marked as normal', async () => {
    // The parser reads from the first { to the last }, so text after the JSON
    // can run into the cap without harming the mark. Rejecting on stop_reason
    // alone would throw that mark away.
    anthropicCreate.mockResolvedValueOnce(cutOff())
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
    expect(applyAiResultMock).toHaveBeenCalledTimes(1)
  })
})

describe('POST /api/marking/run - the reply budget', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('leaves room for twice the longest reply ever marked', async () => {
    await POST(makeReq())
    expect(sentToModel().body.max_tokens).toBeGreaterThanOrEqual(2 * LONGEST_MARKED_REPLY)
  })

  it('gives the model time to write that much at the slowest rate seen', async () => {
    await POST(makeReq())
    const { body, options } = sentToModel()
    // Without its own timeout the call gets the client's 50 s per attempt.
    expect(body.max_tokens / SLOWEST_TOKENS_PER_SECOND).toBeLessThan(options.timeout / 1000)
  })

  it('and lets the function outlive the call, but not past what Cloudflare will wait', async () => {
    const { maxDuration } = await import('@/app/api/marking/run/route')
    await POST(makeReq())
    // Ten seconds after the deadline to refund, log and answer.
    expect(maxDuration).toBeGreaterThanOrEqual(sentToModel().options.timeout / 1000 + 10)
    expect(maxDuration).toBeLessThan(CLOUDFLARE_WAIT_S)
  })

  it("a call still running at the deadline gets the route's own 503, refunded and logged, before Vercel would end the function", async () => {
    vi.mocked(logAiDecision).mockClear()
    vi.mocked(refundTrialAllowance).mockClear()
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })
    const { maxDuration } = await import('@/app/api/marking/run/route')
    // A model that never answers. Only the route's deadline signal ends the
    // call: the SDK's own per-attempt timeout is followed by a retry.
    anthropicCreate.mockImplementationOnce(
      (_body: unknown, options: unknown) =>
        new Promise<ModelReply>((_resolve, reject) => {
          const signal = (options as { signal?: AbortSignal } | undefined)?.signal
          if (!signal) {
            reject(new Error('no deadline: the call runs until Vercel ends the function'))
            return
          }
          signal.addEventListener('abort', () => reject(new Error('Request was aborted.')))
        }),
    )
    let settled = false
    const pending = POST(makeReq()).then((res) => {
      settled = true
      return res
    })
    // Let the route reach the model, and so start its deadline, before the
    // clock moves. setImmediate is real here; only setTimeout is faked.
    for (let i = 0; i < 100 && anthropicCreate.mock.calls.length === 0; i++) {
      await new Promise((resolve) => setImmediate(resolve))
    }
    expect(anthropicCreate).toHaveBeenCalledOnce()
    await vi.advanceTimersByTimeAsync((maxDuration - 10) * 1000)
    expect(settled, 'the call was still running ten seconds before Vercel would end it').toBe(true)
    const res = await pending
    expect(res.status).toBe(503)
    expect((await res.json()).error).toMatch(/timed out/i)
    expect(refundTrialAllowance).toHaveBeenCalledOnce()
    expect(logAiDecision).toHaveBeenCalledWith(
      expect.objectContaining({ success: false, errorClass: 'timeout' }),
    )
  })

  it('and the deadline is cleared once the model answers', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })
    const res = await POST(makeReq())
    expect(res.status).toBe(200)
    expect(vi.getTimerCount()).toBe(0)
  })
})
