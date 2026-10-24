import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * /api/essay-feedback, end to end with the model and the database mocked.
 *
 * Until 9 October 2026 the route marked against a second mark-scheme corpus
 * chosen by board and "Paper 1" / "Paper 2" / "Literature", so an inline
 * Literature answer from the mock-exam or practice page was marked against the
 * board's Language paper and stored as LANGUAGE. It took each objective's
 * maximum from the model's reply, and refused CAIE, the board the inline
 * feedback sends for a Cambridge mock. These tests drive the real handler,
 * prompt builder and validation; only the gates, the model and Prisma are
 * stand-ins, and no request leaves the process.
 */

const UUID = '11111111-2222-3333-4444-555555555555'

const mockGetUser = vi.fn()
const mockCreate = vi.fn()
const mockFindUnique = vi.fn()
const mockEssayCreate = vi.fn()
const mockRefund = vi.fn()
const mockAudit = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({ auth: { getUser: mockGetUser } }),
}))
vi.mock('@/lib/course-access', () => ({ hasActiveSubscription: vi.fn().mockResolvedValue(true) }))
// 12 October 2026: a pupil of a live school is sent to Mark an essay instead.
// Not a pupil unless a test says so.
const mockGetPupilSchoolAccess = vi.fn()
vi.mock('@/lib/school-entitlement', () => ({
  getPupilSchoolAccess: (...args: unknown[]) => mockGetPupilSchoolAccess(...args),
}))
vi.mock('@/lib/consent-check', () => ({
  checkMinorAIConsent: vi.fn().mockResolvedValue({ allowed: true }),
}))
vi.mock('@/lib/ai-preferences', () => ({ isAiOptedOutServer: vi.fn().mockResolvedValue(false) }))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn().mockResolvedValue({ success: true, remaining: 9, resetAt: Date.now() + 1000 }),
}))
vi.mock('@/lib/usage/trial-allowance', () => ({
  EMPTY_TRIAL_GATE: { response: null, consumed: null, state: null },
  enforceTrialAllowance: vi.fn().mockResolvedValue({ response: null, consumed: null, state: null }),
  refundTrialAllowance: (...args: unknown[]) => mockRefund(...args),
}))
vi.mock('@/lib/usage/free-allowance', () => ({
  applyAllowanceHeaders: <T>(response: T) => response,
}))
vi.mock('@/lib/ai-audit-log', () => ({ logAiDecision: (...args: unknown[]) => mockAudit(...args) }))
vi.mock('@/lib/anthropic-client', () => ({
  ANTHROPIC_MODEL: 'claude-test-model',
  getAnthropicClient: () => ({ messages: { create: (...args: unknown[]) => mockCreate(...args) } }),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...args: unknown[]) => mockFindUnique(...args) },
    essay: { create: (...args: unknown[]) => mockEssayCreate(...args) },
  },
}))

// An invented answer, long enough to pass validation and the prose checks.
const ESSAY = [
  'The poet presents the river as a living force that shapes the people who live beside it.',
  'In the opening stanza the verb "carves" suggests patience and power at once, as if the water',
  'has been working on the valley for centuries. By contrast, the second poem describes a city park',
  'where nature is trimmed and controlled, and the short, clipped lines mirror that sense of order.',
  'Both poets use the natural world to explore belonging, but the first celebrates wildness while',
  'the second questions whether a managed landscape can ever feel like home. The shift to the present',
  'tense in the final stanza of the first poem makes the reader feel the movement of the river',
  'directly, and the closing image of the bridge suggests a connection between generations that the',
  'city poem never quite achieves.',
].join(' ')

const QUESTION = 'Compare how the poets present the relationship between people and nature.'

function reply(aoScores: unknown[], gradeBand = 'Grade 8-9') {
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify({
          gradeBand,
          gradeJustification: 'A perceptive comparison. This scheme is unverified.',
          aoScores,
          strengths: [{ point: 'Precise analysis', quote: 'carves' }],
          improvements: [
            { point: 'Context', suggestion: 'Link the setting to when it was written.' },
          ],
          annotatedFeedback: 'Paragraph one is strong.',
        }),
      },
    ],
    usage: { input_tokens: 10, output_tokens: 10 },
  }
}

async function post(body: Record<string, unknown>) {
  const { POST } = await import('@/app/api/essay-feedback/route')
  const res = await POST(
    new NextRequest(new URL('http://localhost:3000/api/essay-feedback'), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }),
  )
  return { status: res.status, json: await res.json() }
}

function systemPrompt(): string {
  return mockCreate.mock.calls[0][0].system
}

function stored() {
  return mockEssayCreate.mock.calls[0][0].data
}

const originalKey = process.env.ANTHROPIC_API_KEY

beforeEach(() => {
  vi.clearAllMocks()
  // Present so the route reaches the (mocked) client; never sent anywhere.
  process.env.ANTHROPIC_API_KEY = 'test-key-not-real'
  mockGetUser.mockResolvedValue({ data: { user: { id: UUID, email: null } }, error: null })
  mockFindUnique.mockResolvedValue({ id: 'cuid-test-user' })
  mockEssayCreate.mockResolvedValue({ id: 'essay-1' })
  mockGetPupilSchoolAccess.mockResolvedValue(null)
})

describe('a pupil of a live school (12 October 2026)', () => {
  // This route stores its feedback where no teacher can see it, and Calum
  // decided a school pupil's teacher reviews their AI feedback. The pages hide
  // the entry points; this is the backstop for any that were missed.
  it('is refused with the code the pages switch on, before anything is sent or stored', async () => {
    mockGetPupilSchoolAccess.mockResolvedValue({ schoolId: 'school-1', aiAuthorised: true })
    const { status, json } = await post({
      board: 'AQA',
      paper: 'Paper 1',
      questionType: 'Essay',
      questionText: QUESTION,
      essay: ESSAY,
    })
    expect(status).toBe(403)
    expect(json.code).toBe('school_pupil_uses_marking')
    expect(json.error).toContain('/marking/submit')
    expect(mockGetPupilSchoolAccess).toHaveBeenCalledWith(UUID)
    expect(mockCreate).not.toHaveBeenCalled()
    expect(mockEssayCreate).not.toHaveBeenCalled()
  })
})

afterEach(() => {
  if (originalKey === undefined) delete process.env.ANTHROPIC_API_KEY
  else process.env.ANTHROPIC_API_KEY = originalKey
})

describe('marking against a named scheme question', () => {
  // Edexcel Literature Paper 1 Section B since 24 October 2026: two grids, as
  // Pearson marks it, AO1 and AO3 together out of 32 ('AO1+AO3') and AO4 out
  // of 8. Until then this used Paper 2 Section B Part 1 with AO2 15 and AO3 5
  // on ladders of their own, which Pearson marks on one grid.
  const body = {
    board: 'Edexcel',
    paper: 'Paper 1',
    questionType: 'Post-1914 literature essay',
    schemeId: 'edexcel-lit-paper1',
    questionId: 'Section B',
    questionText: QUESTION,
    essay: ESSAY,
  }

  it('tells the model that question’s objectives and tariffs, and its status', async () => {
    mockCreate.mockResolvedValue(
      reply([
        { id: 'AO1+AO3', score: 26, maxScore: 32 },
        { id: 'AO4', score: 6, maxScore: 8 },
      ]),
    )
    const { status } = await post(body)
    expect(status).toBe(200)
    const system = systemPrompt()
    expect(system).toContain(
      'You are marking a response to Edexcel English Literature, Paper 1, question Section B',
    )
    expect(system).toContain('AO1+AO3 - Response and context, on one grid - maximum 32 marks.')
    expect(system).toContain('AO4 - Spelling, punctuation and grammar - maximum 8 marks.')
    expect(system).not.toMatch(/^AO[256] - /m)
    expect(system).toContain('NOT VERIFIED')
    // A reply that split the combined grid into AO1 and AO3 would be refused
    // as incomplete (below), so the model is told it is one entry.
    expect(system).toContain('never split into its objectives')
    expect(system).not.toContain('NO MARK SCHEME')
  })

  it('holds the marks to the scheme, and reports which scheme it used', async () => {
    mockCreate.mockResolvedValue(
      reply([
        { id: 'ao1+ao3', score: 40, maxScore: 40, comment: 'Detailed.' },
        { id: 'AO4', score: 6, maxScore: 40 },
        { id: 'AO2', score: 8, maxScore: 8 },
      ]),
    )
    const { status, json } = await post(body)
    expect(status).toBe(200)
    expect(json.feedback.aoScores).toEqual([
      expect.objectContaining({ id: 'AO1+AO3', score: 32, maxScore: 32, comment: 'Detailed.' }),
      expect.objectContaining({ id: 'AO4', score: 6, maxScore: 8 }),
    ])
    expect(json.scheme).toMatchObject({
      id: 'edexcel-lit-paper1',
      questionId: 'Section B',
      question: 'Section B - Post-1914 literature essay (40 marks)',
      verified: false,
    })
    expect(mockAudit).toHaveBeenCalledWith(
      expect.objectContaining({ promptSchemeId: 'edexcel-lit-paper1/Section B' }),
    )
  })

  it('stores Literature, Edexcel, and columns by meaning', async () => {
    mockCreate.mockResolvedValue(
      reply([
        { id: 'AO1+AO3', score: 24, maxScore: 32 },
        { id: 'AO4', score: 8, maxScore: 8 },
      ]),
    )
    await post(body)
    const data = stored()
    expect(data.subject).toBe('LITERATURE')
    expect(data.examBoard).toBe('EDEXCEL')
    expect(data.aiFeedback.create).toMatchObject({
      overallScore: 80,
      // AO2 is not assessed, and AO1 is marked together with AO3 on one grid,
      // so neither column has an objective of its own: neutral, not zero.
      structureScore: 80,
      argumentScore: 80,
      vocabularyScore: 100,
      grammarScore: 100,
    })
    expect(data.aiFeedback.create.limitations).toContain(
      'edexcel-lit-paper1, Section B (an unverified scheme)',
    )
  })

  it('refuses a reply that leaves out one of the question’s objectives', async () => {
    mockCreate.mockResolvedValue(reply([{ id: 'AO1+AO3', score: 20, maxScore: 32 }]))
    const { status, json } = await post(body)
    expect(status).toBe(500)
    expect(json.error).toMatch(/incomplete response/)
    expect(mockRefund).toHaveBeenCalled()
    expect(mockEssayCreate).not.toHaveBeenCalled()
  })

  it.each([
    ['a question the scheme does not have', 'edexcel-lit-paper2', 'Q4'],
    ['an unknown scheme', 'edexcel-lit-paper9', 'Section B Part 1'],
    ['a prototype key', 'constructor', 'Q1'],
  ])('refuses %s without calling the model', async (_label, schemeId, questionId) => {
    const { status, json } = await post({ ...body, schemeId, questionId })
    expect(status).toBe(400)
    expect(json.error).toMatch(/not one we can mark against/)
    expect(mockCreate).not.toHaveBeenCalled()
  })
})

describe('general feedback, when no scheme matches', () => {
  // An inline Literature answer with no scheme on the site: AQA Literature
  // Paper 2, or a practice question with no tariff. Before 9 October this was
  // marked against AQA Language Paper 1 and stored as LANGUAGE.
  const body = {
    board: 'AQA',
    paper: 'Paper 2',
    questionType: 'Poetry Comparison',
    subject: 'English Literature',
    questionText: QUESTION,
    essay: ESSAY,
  }

  it('names no tariff, keeps no marks, and stores the subject it was given', async () => {
    mockCreate.mockResolvedValue(reply([{ id: 'AO1', score: 9, maxScore: 10 }], 'Grade 6-7'))
    const { status, json } = await post(body)
    expect(status).toBe(200)
    const system = systemPrompt()
    expect(system).toContain('NO MARK SCHEME')
    expect(system).toContain('general English Literature assessment objectives')
    expect(system).not.toMatch(/maximum \d+ marks/)
    expect(json.feedback.aoScores).toEqual([])
    expect(json.scheme).toBeNull()
    const data = stored()
    expect(data.subject).toBe('LITERATURE')
    expect(data.aiFeedback.create).toMatchObject({
      overallScore: 64,
      argumentScore: 64,
      structureScore: 64,
      vocabularyScore: 64,
      grammarScore: 64,
    })
    expect(mockAudit).toHaveBeenCalledWith(
      expect.objectContaining({ promptSchemeId: 'general/English Literature' }),
    )
  })

  it('accepts CAIE, which the inline feedback sends for Cambridge, and stores 0500', async () => {
    mockCreate.mockResolvedValue(reply([], 'Grade 4-5'))
    const { status } = await post({
      ...body,
      board: 'CAIE',
      paper: 'Paper 1',
      questionType: 'writing',
      subject: 'English Language',
    })
    expect(status).toBe(200)
    expect(stored().examBoard).toBe('CAMBRIDGE_0500')
    expect(stored().subject).toBe('LANGUAGE')
  })
})
