// ─── A class pupil's essay is marked, and the pupil sees it ─────────────────
//
// THE DEFECT (as at d682afc1). An enrolled pupil's essay is saved as
// 'b2b_class', and POST /api/marking/run let only staff run marking on those,
// so the submit page told the pupil "Only school staff can run marking for
// class submissions". No staff screen called the route either. Every class
// essay stayed 'submitted' for ever, and the pupil never got an AI mark.
//
// Calum decided on 12 October 2026 that a school pupil sees their AI feedback
// straight away, labelled as AI, and their teacher reviews it afterwards.
// These tests pin the route's side of that: who may run it, who pays, whose
// consent is checked, and what status the mark is written with.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { logAiDecision } from '@/lib/ai-audit-log'
import { enforceTrialAllowance } from '@/lib/usage/trial-allowance'

const PUPIL = 'a0000000-0000-4000-8000-0000000000a1'
const TEACHER = 'a0000000-0000-4000-8000-0000000000b2'
const SCHOOL = 'a0000000-0000-4000-8000-0000000000c3'

let caller = PUPIL
let loadedRow: Record<string, unknown> | null = null
let schoolMember: unknown = null

const mockPaid = vi.fn()
const mockConsent = vi.fn()
const mockOptOut = vi.fn()
const mockSchoolActive = vi.fn()
const applyAiResultMock = vi.fn(async (..._args: unknown[]) => ({ id: 'sub-1' }))
const anthropicCreate = vi.fn(async (..._args: unknown[]) => ({
  content: [{ type: 'text', text: '{}' }],
  usage: { input_tokens: 10, output_tokens: 20 },
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: { id: caller } }, error: null }) },
  }),
  createServiceRoleClient: () => ({ __svc: true }),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true, remaining: 29, resetAt: Date.now() + 1000 }),
}))
vi.mock('@/lib/school-auth', () => ({ verifySchoolMember: async () => schoolMember }))
vi.mock('@/lib/school-access', () => ({
  checkSchoolAccessActive: (...a: unknown[]) => mockSchoolActive(...a),
}))
vi.mock('@/lib/course-access', () => ({
  hasActiveSubscription: (...a: unknown[]) => mockPaid(...a),
}))
vi.mock('@/lib/consent-check', () => ({
  checkMinorAIConsent: (...a: unknown[]) => mockConsent(...a),
}))
vi.mock('@/lib/ai-preferences', () => ({
  isAiOptedOutServer: (...a: unknown[]) => mockOptOut(...a),
}))
vi.mock('@/lib/marking/persistence', () => ({
  loadSubmission: async () => loadedRow,
  applyAiResult: (...a: unknown[]) => applyAiResultMock(...a),
  deriveUncertaintyFlags: () => [],
}))
vi.mock('@/lib/marking/versioning-capture', () => ({
  captureVersions: async () => ({
    modelVersionId: null,
    promptVersionId: null,
    rubricVersionId: null,
  }),
}))
vi.mock('@/lib/marking/mark-schemes', () => ({
  // With its question: the route checks the row's question is on the paper
  // before building the prompt (23 October 2026).
  getMarkScheme: () => ({
    id: 'aqa-lit-p1',
    board: 'AQA',
    version: 'v1.0',
    questions: [{ id: 'q1', questionType: 'Essay' }],
  }),
}))
vi.mock('@/lib/marking/prompt-builder', () => ({
  buildMarkingPrompt: () => ({ systemPrompt: 'SYS', userMessage: 'USR' }),
}))
vi.mock('@/lib/marking/feedback-generator', () => ({
  generateFeedback: () => ({
    ok: true,
    result: {
      totalMarks: 20,
      maxMarks: 30,
      predictedGrade: '6',
      gradeBand: 'Grade 6-7',
      aoScores: [],
      summary: 'ok',
    },
  }),
}))
vi.mock('@/lib/i18n/ai-language-directive', () => ({ resolveLocaleFromRequest: () => 'en' }))
vi.mock('@/lib/ai/cached-system', () => ({ cachedSystemBlocks: (s: string) => s }))
vi.mock('@/lib/ai-audit-log', () => ({
  aiAuditTokenUsage: () => undefined,
  logAiDecision: vi.fn(),
}))
vi.mock('@/lib/usage/trial-allowance', () => ({
  EMPTY_TRIAL_GATE: { response: null, consumed: null, state: null },
  enforceTrialAllowance: vi.fn(async () => ({ response: null, consumed: null, state: null })),
  refundTrialAllowance: vi.fn(async () => undefined),
}))
vi.mock('@/lib/anthropic-client', () => ({
  getAnthropicClient: () => ({ messages: { create: (...a: unknown[]) => anthropicCreate(...a) } }),
  ANTHROPIC_MODEL: 'claude-test',
}))

function classEssay(over: Record<string, unknown> = {}) {
  return {
    id: 'sub-1',
    student_id: PUPIL,
    school_id: SCHOOL,
    class_id: 'class-1',
    source: 'b2b_class',
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

async function run() {
  const { POST } = await import('@/app/api/marking/run/route')
  return POST(
    new NextRequest('http://localhost/api/marking/run', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ submissionId: 'sub-1' }),
    }),
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  caller = PUPIL
  loadedRow = classEssay()
  schoolMember = null
  mockPaid.mockResolvedValue(true)
  mockConsent.mockResolvedValue({ allowed: true, basis: 'school_ai_authorisation' })
  mockOptOut.mockResolvedValue(false)
  mockSchoolActive.mockResolvedValue(true)
  process.env.ANTHROPIC_API_KEY = 'test-key'
})

describe('the pupil runs marking on their own class essay', () => {
  it('is marked, and written as ai_marked so they see it straight away', async () => {
    const res = await run()
    expect(res.status).toBe(200)
    expect(anthropicCreate).toHaveBeenCalledOnce()
    expect((applyAiResultMock.mock.calls[0][2] as { status: string }).status).toBe('ai_marked')
  })

  it('their access is asked of the paid-access choke point, at the moment of use, by their uuid', async () => {
    await run()
    expect(mockPaid).toHaveBeenCalledWith(expect.anything(), PUPIL)
  })

  it('is refused, with nothing spent, when their school’s access is not live and they have no plan', async () => {
    mockPaid.mockResolvedValue(false)
    const res = await run()
    expect(res.status).toBe(403)
    expect((await res.json()).error).toMatch(/school's AI marking is not active/i)
    expect(anthropicCreate).not.toHaveBeenCalled()
    expect(applyAiResultMock).not.toHaveBeenCalled()
  })

  it('is funded by the school, not metered against a no-card trial', async () => {
    await run()
    expect(enforceTrialAllowance).toHaveBeenCalledWith(expect.anything(), expect.anything(), {
      schoolFunded: true,
    })
  })

  it('another pupil cannot run marking on it', async () => {
    caller = 'a0000000-0000-4000-8000-0000000000d4'
    const res = await run()
    expect(res.status).toBe(403)
    expect(anthropicCreate).not.toHaveBeenCalled()
  })
})

describe('consent and opt-out are checked for the PUPIL, before the model is called', () => {
  it('a pupil refused for consent gets the refusal and its code, and nothing is sent', async () => {
    mockConsent.mockResolvedValue({
      allowed: false,
      reason: 'Parental consent is required...',
      code: 'parental_consent_required',
    })
    const res = await run()
    expect(res.status).toBe(403)
    expect((await res.json()).code).toBe('parental_consent_required')
    expect(anthropicCreate).not.toHaveBeenCalled()
    expect(enforceTrialAllowance).not.toHaveBeenCalled()
  })

  it('a pupil who has opted out of AI is refused', async () => {
    mockOptOut.mockResolvedValue(true)
    const res = await run()
    expect(res.status).toBe(403)
    expect(mockOptOut).toHaveBeenCalledWith(PUPIL)
    expect(anthropicCreate).not.toHaveBeenCalled()
  })

  it('the audit entry records which rule passed the parental step', async () => {
    await run()
    expect(logAiDecision).toHaveBeenCalledWith(
      expect.objectContaining({
        success: true,
        consentSnapshot: expect.objectContaining({
          aiOptOut: false,
          aiProcessingConsentOk: true,
          parentalConsentBasis: 'school_ai_authorisation',
        }),
      }),
    )
  })
})

describe('staff may still run it', () => {
  beforeEach(() => {
    caller = TEACHER
    schoolMember = { school_id: SCHOOL, role: 'teacher', id: 'mem-1' }
  })

  it('a teacher at the pupil’s school marks it, checking the PUPIL’s consent, not their own', async () => {
    const res = await run()
    expect(res.status).toBe(200)
    expect(mockConsent).toHaveBeenCalledWith(PUPIL)
    expect(mockConsent).not.toHaveBeenCalledWith(TEACHER)
    expect(mockOptOut).toHaveBeenCalledWith(PUPIL)
  })

  it('the school pays: the run is not metered against the teacher’s own trial', async () => {
    await run()
    expect(enforceTrialAllowance).not.toHaveBeenCalled()
  })

  it('but only while the school’s access is live', async () => {
    mockSchoolActive.mockResolvedValue(false)
    const res = await run()
    expect(res.status).toBe(403)
    expect(mockSchoolActive).toHaveBeenCalledWith(SCHOOL)
    expect(anthropicCreate).not.toHaveBeenCalled()
  })

  it('and a consent refusal is worded for the teacher, without the pupil’s self-service code', async () => {
    mockConsent.mockResolvedValue({
      allowed: false,
      reason: 'You have not given consent for AI processing yet...',
      code: 'ai_processing_consent_required',
    })
    const res = await run()
    const body = await res.json()
    expect(res.status).toBe(403)
    expect(body.error).toMatch(/this pupil's consent/i)
    expect(body.code).toBeUndefined()
    expect(anthropicCreate).not.toHaveBeenCalled()
  })

  it('staff at another school are refused', async () => {
    schoolMember = { school_id: 'another-school', role: 'teacher', id: 'mem-2' }
    const res = await run()
    expect(res.status).toBe(403)
    expect(anthropicCreate).not.toHaveBeenCalled()
  })
})
