// ─── Smart-IP · POST /api/submissions ────────────────────────────────────────
//
// The unified submission insert path. Every gate dependency is mocked; we drive
// the exported POST handler directly with a real NextRequest.
//
// Gate order asserted (mirrors POST /api/mark):
//   content-type(415) → auth(401) → subscription(403) → minorConsent(403) →
//   aiOptOut(403) → rateLimit(429) → JSON parse(400) → validate(400) →
//   contentSafety(400) → mark scheme(400) → insert → 201 {submissionId}
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

interface Session {
  user: { id: string; email?: string } | null
  error: { message: string } | null
}
let session: Session = { user: { id: 'auth-1', email: 'pupil@example.com' }, error: null }

let isPremium = true
let consentResult: { allowed: boolean; reason?: string } = { allowed: true }
let aiOptedOut = false
let rlResult = { success: true, remaining: 19, resetAt: Date.now() + 86_400_000 }
let safetyResult: string | null = null
let schemeResult: unknown = { id: 'aqa-lit-p1', board: 'AQA', version: 'v1.0' }

const insertSubmissionMock = vi.fn(
  async (..._args: unknown[]): Promise<{ id: string }> => ({ id: 'sub-new-1' }),
)

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: session.user }, error: session.error }) },
  }),
  createServiceRoleClient: () => ({ __svc: true }),
}))

vi.mock('@/lib/course-access', () => ({
  hasActiveSubscription: async () => isPremium,
}))
vi.mock('@/lib/consent-check', () => ({
  checkMinorAIConsent: async () => consentResult,
}))
vi.mock('@/lib/ai-preferences', () => ({
  isAiOptedOutServer: async () => aiOptedOut,
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => rlResult,
}))
vi.mock('@/lib/content-safety', () => ({
  contentSafetyCheck: () => safetyResult,
}))
vi.mock('@/lib/marking/mark-schemes', () => ({
  getMarkScheme: () => schemeResult,
}))
vi.mock('@/lib/marking/persistence', () => ({
  insertSubmission: (...a: unknown[]) => insertSubmissionMock(...a),
}))

function makeRequest(body: unknown, opts: { json?: boolean } = {}): NextRequest {
  const headers: Record<string, string> = {}
  if (opts.json !== false) headers['content-type'] = 'application/json'
  return new NextRequest('http://localhost/api/submissions', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

const validBody = {
  source: 'b2c_self',
  examBoard: 'AQA',
  qualification: 'GCSE',
  paper: 'Paper 1',
  questionText: 'Explore how the writer presents conflict in the extract.',
  questionType: 'extended',
  studiedText: 'Macbeth',
  studentAnswer:
    'The writer presents conflict through a sustained use of imagery and structure. '.repeat(3),
  targetGrade: '7',
  markSchemeId: 'aqa-lit-p1',
  questionId: 'q3',
}

async function POST(req: NextRequest) {
  const mod = await import('@/app/api/submissions/route')
  return mod.POST(req)
}

beforeEach(() => {
  session = { user: { id: 'auth-1', email: 'pupil@example.com' }, error: null }
  isPremium = true
  consentResult = { allowed: true }
  aiOptedOut = false
  rlResult = { success: true, remaining: 19, resetAt: Date.now() + 86_400_000 }
  safetyResult = null
  schemeResult = { id: 'aqa-lit-p1', board: 'AQA', version: 'v1.0' }
  insertSubmissionMock.mockClear()
  insertSubmissionMock.mockResolvedValue({ id: 'sub-new-1' })
})

describe('POST /api/submissions - gate order', () => {
  it('415 when Content-Type is not application/json', async () => {
    const res = await POST(makeRequest(validBody, { json: false }))
    expect(res.status).toBe(415)
    expect(insertSubmissionMock).not.toHaveBeenCalled()
  })

  it('401 when unauthenticated', async () => {
    session = { user: null, error: { message: 'no session' } }
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(401)
  })

  it('403 when not premium', async () => {
    isPremium = false
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(403)
    expect(insertSubmissionMock).not.toHaveBeenCalled()
  })

  it('403 when minor / AI consent not allowed', async () => {
    consentResult = { allowed: false, reason: 'Parental consent required.' }
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(403)
    const json = await res.json()
    expect(json.error).toMatch(/parental consent/i)
  })

  it('403 when AI is opted out for the account', async () => {
    aiOptedOut = true
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(403)
  })

  it('429 when rate-limited', async () => {
    rlResult = { success: false, remaining: 0, resetAt: Date.now() + 1000 }
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(429)
    expect(insertSubmissionMock).not.toHaveBeenCalled()
  })

  it('400 on invalid JSON body', async () => {
    const res = await POST(makeRequest('{ not json', {}))
    expect(res.status).toBe(400)
  })
})

describe('POST /api/submissions - validation', () => {
  it('400 when source is neither b2c_self nor b2b_class', async () => {
    const res = await POST(makeRequest({ ...validBody, source: 'nonsense' }))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/source must be/i)
  })

  it('400 when the answer is too short to mark reliably', async () => {
    const res = await POST(makeRequest({ ...validBody, studentAnswer: 'too short' }))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/too short/i)
  })

  it('400 when questionText is missing', async () => {
    const b = { ...validBody } as Record<string, unknown>
    delete b.questionText
    const res = await POST(makeRequest(b))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/questionText is required/i)
  })

  it('400 when markSchemeId is missing', async () => {
    const b = { ...validBody } as Record<string, unknown>
    delete b.markSchemeId
    const res = await POST(makeRequest(b))
    expect(res.status).toBe(400)
  })

  it('400 when content-safety pre-check rejects', async () => {
    safetyResult = 'Unsafe content detected.'
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/unsafe content/i)
    expect(insertSubmissionMock).not.toHaveBeenCalled()
  })

  it('400 when the mark scheme is unknown', async () => {
    schemeResult = null
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(400)
    expect((await res.json()).error).toMatch(/unknown mark scheme/i)
    expect(insertSubmissionMock).not.toHaveBeenCalled()
  })
})

describe('POST /api/submissions - happy path & mapping', () => {
  it('returns 201 { submissionId } and binds student_id from the SESSION not the body', async () => {
    const res = await POST(
      makeRequest({ ...validBody, studentId: 'attacker-supplied-id' } as Record<string, unknown>),
    )
    expect(res.status).toBe(201)
    const json = await res.json()
    expect(json).toEqual({ submissionId: 'sub-new-1' })

    expect(insertSubmissionMock).toHaveBeenCalledTimes(1)
    const arg = insertSubmissionMock.mock.calls[0][1] as Record<string, unknown>
    expect(arg.studentId).toBe('auth-1') // from session, never the body
    // studentAnswer is passed through to be mapped onto essay_text by persistence
    expect(arg.studentAnswer).toBe(validBody.studentAnswer)
    expect(arg.questionId).toBe('q3')
    expect(arg.source).toBe('b2c_self')
  })

  it('500 when the DB insert throws (mapped to a friendly server error)', async () => {
    insertSubmissionMock.mockRejectedValueOnce(new Error('pg down'))
    const res = await POST(makeRequest(validBody))
    expect(res.status).toBe(500)
    expect((await res.json()).error).toMatch(/failed to save/i)
  })

  it('b2b_class submission also succeeds (schoolId/classId optional)', async () => {
    const res = await POST(
      makeRequest({ ...validBody, source: 'b2b_class', schoolId: 'sch-1', classId: 'cls-1' }),
    )
    expect(res.status).toBe(201)
    const arg = insertSubmissionMock.mock.calls[0][1] as Record<string, unknown>
    expect(arg.source).toBe('b2b_class')
    expect(arg.schoolId).toBe('sch-1')
    expect(arg.classId).toBe('cls-1')
  })
})
