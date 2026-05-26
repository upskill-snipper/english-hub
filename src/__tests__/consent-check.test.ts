import { describe, it, expect, vi, beforeEach } from 'vitest'

// ---------------------------------------------------------------------------
// Mocks - Prisma & Supabase
// ---------------------------------------------------------------------------

const mockFindUnique = vi.fn()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...args: unknown[]) => mockFindUnique(...args) },
  },
}))

const mockSingle = vi.fn()
const mockLimit = vi.fn(() => ({ single: mockSingle }))
const mockEqStatus = vi.fn(() => ({ limit: mockLimit }))
const mockEqStudent = vi.fn(() => ({ eq: mockEqStatus }))
const mockSelect = vi.fn(() => ({ eq: mockEqStudent }))
const mockFrom = vi.fn(() => ({ select: mockSelect }))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: mockFrom,
  }),
}))

const mockHasConsent = vi.fn()

vi.mock('@/lib/consent', () => ({
  hasConsent: (...args: unknown[]) => mockHasConsent(...args),
  CONSENT_TYPES: {
    TERMS: 'TERMS',
    PRIVACY: 'PRIVACY',
    AI_PROCESSING: 'AI_PROCESSING',
    DATA_TRANSFER: 'DATA_TRANSFER',
    MARKETING: 'MARKETING',
    COOLING_OFF_WAIVER: 'COOLING_OFF_WAIVER',
    COOKIE_ANALYTICS: 'COOKIE_ANALYTICS',
    COOKIE_MARKETING: 'COOKIE_MARKETING',
  },
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function resetMocks() {
  mockFindUnique.mockReset()
  mockFrom.mockReset()
  mockSelect.mockReset()
  mockEqStudent.mockReset()
  mockEqStatus.mockReset()
  mockLimit.mockReset()
  mockSingle.mockReset()
  mockHasConsent.mockReset()

  // Restore default chaining
  mockFrom.mockReturnValue({ select: mockSelect })
  mockSelect.mockReturnValue({ eq: mockEqStudent })
  mockEqStudent.mockReturnValue({ eq: mockEqStatus })
  mockEqStatus.mockReturnValue({ limit: mockLimit })
  mockLimit.mockReturnValue({ single: mockSingle })
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('checkParentalConsent', () => {
  beforeEach(() => {
    resetMocks()
  })

  it('returns allowed: false when user not found', async () => {
    mockFindUnique.mockResolvedValue(null)

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('user-404')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/not found/i)
  })

  it('returns allowed: true for non-minor users', async () => {
    mockFindUnique.mockResolvedValue({ isMinor: false, parentId: null })

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('adult-user')

    expect(result.allowed).toBe(true)
    expect(result.reason).toBeUndefined()
  })

  it('returns allowed: true for minor with linked parent', async () => {
    mockFindUnique.mockResolvedValue({ isMinor: true, parentId: 'parent-123' })

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('child-with-parent')

    expect(result.allowed).toBe(true)
  })

  it('returns allowed: true for minor with approved school consent', async () => {
    mockFindUnique.mockResolvedValue({ isMinor: true, parentId: null })
    mockSingle.mockResolvedValue({ data: { id: 'consent-1' }, error: null })

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('child-school-consent')

    expect(result.allowed).toBe(true)
  })

  it('returns allowed: false for minor with no parental consent', async () => {
    mockFindUnique.mockResolvedValue({ isMinor: true, parentId: null })
    mockSingle.mockResolvedValue({ data: null, error: { code: 'PGRST116' } })

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('child-no-consent')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/parental consent/i)
  })
})

describe('checkMinorAIConsent', () => {
  beforeEach(() => {
    resetMocks()
  })

  it('returns allowed: false when AI processing consent is missing', async () => {
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('user-no-ai-consent')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/ai processing/i)
  })

  it('returns allowed: true for adult user with AI consent', async () => {
    mockHasConsent.mockResolvedValue(true)
    mockFindUnique.mockResolvedValue({ isMinor: false, parentId: null })

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('adult-with-ai')

    expect(result.allowed).toBe(true)
  })

  it('returns allowed: false for minor without parental consent even with AI consent', async () => {
    mockHasConsent.mockResolvedValue(true)
    mockFindUnique.mockResolvedValue({ isMinor: true, parentId: null })
    mockSingle.mockResolvedValue({ data: null, error: { code: 'PGRST116' } })

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('child-ai-no-parent')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/parental consent/i)
  })

  it('returns allowed: true for minor with both AI consent and parental consent', async () => {
    mockHasConsent.mockResolvedValue(true)
    mockFindUnique.mockResolvedValue({ isMinor: true, parentId: 'parent-1' })

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('child-all-consent')

    expect(result.allowed).toBe(true)
  })

  it('checks AI consent before parental consent (short-circuits)', async () => {
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    await checkMinorAIConsent('user-no-ai')

    // Prisma should NOT have been called because AI consent check fails first
    expect(mockFindUnique).not.toHaveBeenCalled()
  })
})
