import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * The AI consent gate.
 *
 * Rewritten 2026-09-17. The gate used to answer the age question from
 * `User.isMinor` and short-circuit on `if (!user.isMinor) return allowed`.
 * That column is written by three code paths with three different meanings,
 * and the 2026-04-20 backfill set it to `false` from an invented date of
 * birth, so a `false` could mean "we never asked" - and the gate read it as
 * "adult". The age question now goes through resolveAgeBand, and an unknown
 * age blocks instead of passing.
 *
 * The old tests mocked `prisma.user.findUnique` returning `{ isMinor }` and
 * asserted on that short-circuit, so they are replaced rather than amended:
 * they asserted the behaviour this change exists to remove.
 */

// ─── Mocks ──────────────────────────────────────────────────────────────

const mockResolveAgeBand = vi.fn()
const mockTryPrismaUserId = vi.fn()

vi.mock('@/lib/identity', async () => {
  // requiresGuardianConsent is pure, so the real one is used: mocking it
  // would let the band-to-consequence mapping drift untested.
  const actual = await vi.importActual<typeof import('@/lib/identity/age')>('@/lib/identity/age')
  return {
    ...actual,
    resolveAgeBand: (...args: unknown[]) => mockResolveAgeBand(...args),
    tryPrismaUserId: (...args: unknown[]) => mockTryPrismaUserId(...args),
  }
})

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
  createServiceRoleClient: () => ({ from: mockFrom }),
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

// The AI gate raises the guardian consent request as a side effect, via a
// dynamic import. Mocked so the tests assert the trigger fires without
// reaching Supabase, Upstash or an email provider.
const mockSendGuardianConsentRequest = vi.fn()
const mockGetGuardianConsentState = vi.fn()

vi.mock('@/lib/parental-consent', () => ({
  sendGuardianConsentRequest: (...args: unknown[]) => mockSendGuardianConsentRequest(...args),
  getGuardianConsentState: (...args: unknown[]) => mockGetGuardianConsentState(...args),
}))

// ─── Helpers ────────────────────────────────────────────────────────────

/** No approved row in parental_consents - what PostgREST returns for none. */
function noApprovedParentalConsent() {
  mockSingle.mockResolvedValue({ data: null, error: { code: 'PGRST116' } })
}

function approvedParentalConsent() {
  mockSingle.mockResolvedValue({ data: { id: 'consent-1' }, error: null })
}

/** A projected Prisma row with no linked parent - the projection default. */
function projectedRowWithNoParent() {
  mockTryPrismaUserId.mockResolvedValue('cuid_1')
  mockFindUnique.mockResolvedValue({ parentId: null, accountStatus: 'ACTIVE' })
}

function resetMocks() {
  mockResolveAgeBand.mockReset()
  mockTryPrismaUserId.mockReset()
  mockFindUnique.mockReset()
  mockFrom.mockReset()
  mockSelect.mockReset()
  mockEqStudent.mockReset()
  mockEqStatus.mockReset()
  mockLimit.mockReset()
  mockSingle.mockReset()
  mockHasConsent.mockReset()
  mockSendGuardianConsentRequest.mockReset()
  mockGetGuardianConsentState.mockReset()

  mockSendGuardianConsentRequest.mockResolvedValue({ sent: false, reason: 'no_guardian_email' })
  mockGetGuardianConsentState.mockResolvedValue({ lastSentAt: null, guardianEmailMasked: null })
  projectedRowWithNoParent()
  noApprovedParentalConsent()

  mockFrom.mockReturnValue({ select: mockSelect })
  mockSelect.mockReturnValue({ eq: mockEqStudent })
  mockEqStudent.mockReturnValue({ eq: mockEqStatus })
  mockEqStatus.mockReturnValue({ limit: mockLimit })
  mockLimit.mockReturnValue({ single: mockSingle })
}

// ─── checkParentalConsent ───────────────────────────────────────────────

describe('checkParentalConsent', () => {
  beforeEach(resetMocks)

  it('lets a 16 or 17 year-old consent for themselves', async () => {
    mockResolveAgeBand.mockResolvedValue('SIXTEEN_OR_OVER')

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('sixteen-year-old')

    expect(result.allowed).toBe(true)
    expect(result.reason).toBeUndefined()
  })

  it('blocks an under-16 with no guardian approval', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('child-no-consent')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/parent or guardian/i)
  })

  it('allows an under-16 whose guardian has approved', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    approvedParentalConsent()

    const { checkParentalConsent } = await import('@/lib/consent-check')
    await expect(checkParentalConsent('child-school-consent')).resolves.toEqual({ allowed: true })
  })

  it('allows an under-16 with a linked parent', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockFindUnique.mockResolvedValue({ parentId: 'cuid_parent', accountStatus: 'ACTIVE' })

    const { checkParentalConsent } = await import('@/lib/consent-check')
    await expect(checkParentalConsent('child-with-parent')).resolves.toEqual({ allowed: true })
  })

  it('blocks a child of imprecise age - fails closed rather than guessing', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_18_IMPRECISE')

    const { checkParentalConsent } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('child-imprecise')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/parent or guardian/i)
  })

  it('does NOT treat an unknown date of birth as an adult', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')

    const { checkParentalConsent, DATE_OF_BIRTH_REQUIRED } = await import('@/lib/consent-check')
    const result = await checkParentalConsent('unknown-age')

    expect(result).not.toEqual({ allowed: true })
    expect(result.allowed).toBe(false)
    expect(result.reason).toBe(DATE_OF_BIRTH_REQUIRED)
  })

  it('ignores a linked parent on an account that is not ACTIVE', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockFindUnique.mockResolvedValue({ parentId: 'cuid_parent', accountStatus: 'SUSPENDED' })

    const { checkParentalConsent } = await import('@/lib/consent-check')
    await expect(checkParentalConsent('suspended-child')).resolves.toMatchObject({ allowed: false })
  })
})

// ─── checkMinorAIConsent ────────────────────────────────────────────────

describe('checkMinorAIConsent', () => {
  beforeEach(resetMocks)

  it('allows an adult who has given AI processing consent', async () => {
    mockResolveAgeBand.mockResolvedValue('SIXTEEN_OR_OVER')
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    await expect(checkMinorAIConsent('adult-with-ai')).resolves.toEqual({ allowed: true })
  })

  it('names a control that exists when AI processing consent is missing', async () => {
    mockResolveAgeBand.mockResolvedValue('SIXTEEN_OR_OVER')
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('user-no-ai-consent')

    expect(result.allowed).toBe(false)
    // The old message sent people to "settings", where no such control has
    // ever existed. The page named here now carries a Give consent button.
    expect(result.reason).toContain('/dashboard/consent')
    expect(result.reason).not.toMatch(/in settings/i)
  })

  it('keeps a minor without guardian consent blocked, even with AI consent', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('child-ai-no-parent')

    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/parent or guardian/i)
  })

  it('allows a minor who has both guardian consent and AI consent', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    approvedParentalConsent()
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    await expect(checkMinorAIConsent('child-all-consent')).resolves.toEqual({ allowed: true })
  })

  it('blocks an unknown date of birth and asks for it, without emailing a guardian', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent, DATE_OF_BIRTH_REQUIRED } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('unknown-age')

    expect(result).not.toEqual({ allowed: true })
    expect(result.reason).toBe(DATE_OF_BIRTH_REQUIRED)
    // We do not know this account belongs to a child and we hold no guardian
    // address for it, so raising a guardian request would be a guess.
    expect(mockSendGuardianConsentRequest).not.toHaveBeenCalled()
    // The refusal points at the prompt that actually collects the date.
    expect(result.reason).toContain('/dashboard')
  })

  // Ordering pinned 2026-08-23 (QA): the guardian request is raised from this
  // function, and it used to sit after an early return on the AI_PROCESSING
  // ledger check - a ledger that could hold no row at all for a
  // Supabase-native account. For exactly the 13-15 population the self-serve
  // guardian loop was built for, the trigger fired for nobody.
  it('evaluates parental consent before the AI-processing ledger', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    await checkMinorAIConsent('child-blocked')

    expect(mockResolveAgeBand).toHaveBeenCalled()
    expect(mockSendGuardianConsentRequest).toHaveBeenCalled()
  })

  it('raises the guardian consent request for a blocked minor even without AI consent', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockHasConsent.mockResolvedValue(false)
    mockSendGuardianConsentRequest.mockResolvedValue({
      sent: true,
      guardianEmailMasked: 'p***@e***.com',
      expiresAt: '2026-08-30T00:00:00.000Z',
    })

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('child-blocked')

    expect(mockSendGuardianConsentRequest).toHaveBeenCalledWith({
      studentUserId: 'child-blocked',
      trigger: 'ai_gate',
    })
    expect(result.allowed).toBe(false)
    expect(result.reason).toMatch(/p\*\*\*@e\*\*\*\.com/)
  })

  it('fails closed when the parental_consents read fails', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockSingle.mockRejectedValue(new Error('supabase down'))
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('child-db-down')

    expect(result.allowed).toBe(false)
  })
})
