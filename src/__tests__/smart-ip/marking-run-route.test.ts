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

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

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

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: session.user }, error: session.error }) },
  }),
  createServiceRoleClient: () => ({ __svc: true }),
}))
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
  logAiDecision: vi.fn(),
  hashAuditInput: (v: string) => `H(${v})`,
}))
const anthropicCreate = vi.fn(async (..._args: unknown[]) => ({
  content: [{ type: 'text', text: '{"ok":true}' }],
  usage: { input_tokens: 10, output_tokens: 20 },
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
