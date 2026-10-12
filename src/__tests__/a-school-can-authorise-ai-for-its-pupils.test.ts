import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * The consent gate's school path (12 October 2026).
 *
 * Calum decided that a pupil of a school that has recorded AI authorisation
 * (`schools.ai_authorised_at`, the school's confirmation as data controller
 * that its privacy notice covers AI marking and parents have been told)
 * passes the parental-consent step regardless of age band, an UNKNOWN age
 * included. An uploaded pupil has no date of birth, so without this every
 * one of them was told "We do not hold your date of birth". The pupil's own
 * AI-processing consent step stays exactly as it is, and everyone else keeps
 * today's fail-closed rules.
 *
 * The gate's other reads are mocked the same way as consent-check.test.ts.
 * getPupilSchoolAccess is the input here; its own lookup is driven against
 * the tables in a-pupil-is-entitled-by-their-school.test.ts.
 */

const mockResolveAgeBand = vi.fn()
const mockTryPrismaUserId = vi.fn()

vi.mock('@/lib/identity', async () => {
  // requiresGuardianConsent is pure, so the real one is used.
  const actual = await vi.importActual<typeof import('@/lib/identity/age')>('@/lib/identity/age')
  return {
    ...actual,
    resolveAgeBand: (...args: unknown[]) => mockResolveAgeBand(...args),
    tryPrismaUserId: (...args: unknown[]) => mockTryPrismaUserId(...args),
  }
})

const mockFindUnique = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: { user: { findUnique: (...args: unknown[]) => mockFindUnique(...args) } },
}))

// parental_consents: no approved row unless a test says so.
const mockSingle = vi.fn()
vi.mock('@/lib/supabase/server', () => {
  const chain = {
    select: () => chain,
    eq: () => chain,
    limit: () => chain,
    single: (...args: unknown[]) => mockSingle(...args),
  }
  return { createServiceRoleClient: () => ({ from: () => chain }) }
})

const mockHasConsent = vi.fn()
vi.mock('@/lib/consent', () => ({
  hasConsent: (...args: unknown[]) => mockHasConsent(...args),
  CONSENT_TYPES: { AI_PROCESSING: 'AI_PROCESSING' },
}))

const mockSendGuardianConsentRequest = vi.fn()
vi.mock('@/lib/parental-consent', () => ({
  sendGuardianConsentRequest: (...args: unknown[]) => mockSendGuardianConsentRequest(...args),
  getGuardianConsentState: vi.fn().mockResolvedValue({ lastSentAt: null }),
}))

const mockGetPupilSchoolAccess = vi.fn()
vi.mock('@/lib/school-entitlement', () => ({
  getPupilSchoolAccess: (...args: unknown[]) => mockGetPupilSchoolAccess(...args),
}))

import {
  checkMinorAIConsent,
  checkParentalConsent,
  DATE_OF_BIRTH_REQUIRED,
} from '@/lib/consent-check'

const PUPIL = 'a0000000-0000-4000-8000-000000000001'
const authorised = { schoolId: 'school-1', aiAuthorised: true }
const notAuthorised = { schoolId: 'school-1', aiAuthorised: false }

beforeEach(() => {
  vi.clearAllMocks()
  mockTryPrismaUserId.mockResolvedValue('cuid_1')
  mockFindUnique.mockResolvedValue({ parentId: null, accountStatus: 'ACTIVE' })
  mockSingle.mockResolvedValue({ data: null, error: { code: 'PGRST116' } })
  mockHasConsent.mockResolvedValue(true)
  mockSendGuardianConsentRequest.mockResolvedValue({ sent: false, reason: 'no_guardian_email' })
  mockGetPupilSchoolAccess.mockResolvedValue(null)
})

describe('a pupil of a school that has authorised AI', () => {
  it('passes the parental step with an UNKNOWN age, and the admit records why', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')
    mockGetPupilSchoolAccess.mockResolvedValue(authorised)

    await expect(checkParentalConsent(PUPIL)).resolves.toEqual({
      allowed: true,
      basis: 'school_ai_authorisation',
    })
    expect(mockGetPupilSchoolAccess).toHaveBeenCalledWith(PUPIL)
  })

  it.each(['UNDER_16', 'UNDER_18_IMPRECISE'] as const)(
    'passes it as %s with no parent link and no consent row',
    async (band) => {
      mockResolveAgeBand.mockResolvedValue(band)
      mockGetPupilSchoolAccess.mockResolvedValue(authorised)

      await expect(checkParentalConsent(PUPIL)).resolves.toEqual({
        allowed: true,
        basis: 'school_ai_authorisation',
      })
    },
  )

  it('is still asked for their own AI-processing consent, unchanged', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')
    mockGetPupilSchoolAccess.mockResolvedValue(authorised)
    mockHasConsent.mockResolvedValue(false)

    const result = await checkMinorAIConsent(PUPIL)
    expect(result.allowed).toBe(false)
    expect(result.code).toBe('ai_processing_consent_required')
  })

  it('and once they give it is admitted, with the school recorded as the basis and no guardian email', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')
    mockGetPupilSchoolAccess.mockResolvedValue(authorised)

    await expect(checkMinorAIConsent(PUPIL)).resolves.toEqual({
      allowed: true,
      basis: 'school_ai_authorisation',
    })
    expect(mockSendGuardianConsentRequest).not.toHaveBeenCalled()
  })
})

describe('a pupil whose school has NOT authorised AI', () => {
  it('with an UNKNOWN age is refused and asked for a date of birth, as before', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')
    mockGetPupilSchoolAccess.mockResolvedValue(notAuthorised)

    const result = await checkParentalConsent(PUPIL)
    expect(result).toEqual({
      allowed: false,
      reason: DATE_OF_BIRTH_REQUIRED,
      code: 'date_of_birth_required',
    })
  })

  it('under 16 is refused, and the guardian request is raised as before', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockGetPupilSchoolAccess.mockResolvedValue(notAuthorised)

    const result = await checkMinorAIConsent(PUPIL)
    expect(result.allowed).toBe(false)
    expect(result.code).toBe('parental_consent_required')
    expect(result.basis).toBeUndefined()
    expect(mockSendGuardianConsentRequest).toHaveBeenCalledWith({
      studentUserId: PUPIL,
      trigger: 'ai_gate',
    })
  })
})

describe('everyone else keeps today’s rules exactly', () => {
  it.each([
    ['UNKNOWN', 'date_of_birth_required'],
    ['UNDER_16', 'parental_consent_required'],
    ['UNDER_18_IMPRECISE', 'parental_consent_required'],
  ] as const)('a %s account with no school is refused with %s', async (band, code) => {
    mockResolveAgeBand.mockResolvedValue(band)

    const result = await checkParentalConsent(PUPIL)
    expect(result.allowed).toBe(false)
    expect(result.code).toBe(code)
    expect(result.basis).toBeUndefined()
  })

  it('a 16-or-over account is admitted on its own consent, and no school is asked', async () => {
    mockResolveAgeBand.mockResolvedValue('SIXTEEN_OR_OVER')
    await expect(checkParentalConsent(PUPIL)).resolves.toEqual({
      allowed: true,
      basis: 'sixteen_or_over',
    })
    expect(mockGetPupilSchoolAccess).not.toHaveBeenCalled()
  })

  it('a child with a linked parent or an approved consent row is admitted on that, and no school is asked', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockFindUnique.mockResolvedValue({ parentId: 'cuid_parent', accountStatus: 'ACTIVE' })
    await expect(checkParentalConsent(PUPIL)).resolves.toEqual({
      allowed: true,
      basis: 'linked_parent',
    })

    mockFindUnique.mockResolvedValue({ parentId: null, accountStatus: 'ACTIVE' })
    mockSingle.mockResolvedValue({ data: { id: 'consent-1' }, error: null })
    await expect(checkParentalConsent(PUPIL)).resolves.toEqual({
      allowed: true,
      basis: 'parental_consent_record',
    })

    expect(mockGetPupilSchoolAccess).not.toHaveBeenCalled()
  })

  it('a school that is not live gives nothing: getPupilSchoolAccess answers null for it', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockGetPupilSchoolAccess.mockResolvedValue(null)
    await expect(checkParentalConsent(PUPIL)).resolves.toMatchObject({ allowed: false })
  })
})
