import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

/**
 * The machine-readable refusal reason.
 *
 * Every AI route answers 403 for at least four different states: not a
 * subscriber, no AI-processing consent, no guardian consent for a child, and
 * the Children's Code AI opt-out. The browser can only offer a learner the
 * way out of the consent ones if it can tell them apart, and matching on an
 * English sentence is not telling them apart - it breaks the first time the
 * copy is edited, and it would put a "give consent" button in front of
 * somebody whose real problem is that they have not paid.
 *
 * So: the gate sets a code on every refusal, and every route that refuses on
 * that gate passes it through. Both halves are asserted here, the second
 * mechanically, so a new AI route cannot quietly drop it.
 */

// ─── Mocks (mirroring consent-check.test.ts) ────────────────────────────

const mockResolveAgeBand = vi.fn()
const mockTryPrismaUserId = vi.fn()

vi.mock('@/lib/identity', async () => {
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

const mockSendGuardianConsentRequest = vi.fn()
const mockGetGuardianConsentState = vi.fn()

vi.mock('@/lib/parental-consent', () => ({
  sendGuardianConsentRequest: (...args: unknown[]) => mockSendGuardianConsentRequest(...args),
  getGuardianConsentState: (...args: unknown[]) => mockGetGuardianConsentState(...args),
}))

import { CONSENT_REFUSAL_CODES } from '@/lib/consent-codes'

function resetMocks() {
  for (const m of [
    mockResolveAgeBand,
    mockTryPrismaUserId,
    mockFindUnique,
    mockFrom,
    mockSelect,
    mockEqStudent,
    mockEqStatus,
    mockLimit,
    mockSingle,
    mockHasConsent,
    mockSendGuardianConsentRequest,
    mockGetGuardianConsentState,
  ]) {
    m.mockReset()
  }

  mockSendGuardianConsentRequest.mockResolvedValue({ sent: false, reason: 'no_guardian_email' })
  mockGetGuardianConsentState.mockResolvedValue({ lastSentAt: null, guardianEmailMasked: null })
  mockTryPrismaUserId.mockResolvedValue('cuid_1')
  mockFindUnique.mockResolvedValue({ parentId: null, accountStatus: 'ACTIVE' })
  mockSingle.mockResolvedValue({ data: null, error: { code: 'PGRST116' } })

  mockFrom.mockReturnValue({ select: mockSelect })
  mockSelect.mockReturnValue({ eq: mockEqStudent })
  mockEqStudent.mockReturnValue({ eq: mockEqStatus })
  mockEqStatus.mockReturnValue({ limit: mockLimit })
  mockLimit.mockReturnValue({ single: mockSingle })
}

// ─── The gate sets a code on every refusal ──────────────────────────────

describe('checkMinorAIConsent refusal codes', () => {
  beforeEach(resetMocks)

  it('codes a missing AI-processing consent as the one the panel acts on', async () => {
    mockResolveAgeBand.mockResolvedValue('SIXTEEN_OR_OVER')
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('adult-no-consent')

    expect(result.allowed).toBe(false)
    expect(result.code).toBe(CONSENT_REFUSAL_CODES.AI_PROCESSING_REQUIRED)
  })

  it('codes a blocked child as needing a guardian, not as a self-grant', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_16')
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('fourteen-year-old')

    expect(result.allowed).toBe(false)
    expect(result.code).toBe(CONSENT_REFUSAL_CODES.PARENTAL_CONSENT_REQUIRED)
    // The code survives the guardian sentence being appended to the message.
    expect(result.reason).toMatch(/parent or guardian/i)
  })

  it('codes an imprecise child age as needing a guardian', async () => {
    mockResolveAgeBand.mockResolvedValue('UNDER_18_IMPRECISE')
    mockHasConsent.mockResolvedValue(false)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('child-imprecise')

    expect(result.code).toBe(CONSENT_REFUSAL_CODES.PARENTAL_CONSENT_REQUIRED)
  })

  it('codes an unknown age as the date-of-birth ask', async () => {
    mockResolveAgeBand.mockResolvedValue('UNKNOWN')
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('no-dob')

    expect(result.allowed).toBe(false)
    expect(result.code).toBe(CONSENT_REFUSAL_CODES.DATE_OF_BIRTH_REQUIRED)
    // An unknown age must not email a guardian we do not know exists.
    expect(mockSendGuardianConsentRequest).not.toHaveBeenCalled()
  })

  it('carries no code when the learner is allowed through', async () => {
    mockResolveAgeBand.mockResolvedValue('SIXTEEN_OR_OVER')
    mockHasConsent.mockResolvedValue(true)

    const { checkMinorAIConsent } = await import('@/lib/consent-check')
    const result = await checkMinorAIConsent('allowed')

    expect(result.allowed).toBe(true)
    expect(result.code).toBeUndefined()
  })
})

// ─── Every route that refuses on the gate passes the code on ────────────

const API_ROOT = join(process.cwd(), 'src', 'app', 'api')

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === '__tests__' || entry === 'node_modules') continue
      walk(full, out)
    } else if (entry.endsWith('.ts') && !entry.endsWith('.test.ts')) {
      out.push(full)
    }
  }
  return out
}

describe('AI routes expose the refusal code', () => {
  it('every route refusing on checkMinorAIConsent sends its code in the body', () => {
    const offenders: string[] = []

    for (const file of walk(API_ROOT)) {
      const source = readFileSync(file, 'utf8')
      if (!source.includes('checkMinorAIConsent')) continue
      // The refusal is the branch we care about, not the import.
      if (!source.includes('consentCheck.allowed')) continue
      if (!source.includes('consentCheck.code')) {
        offenders.push(relative(process.cwd(), file).split(sep).join('/'))
      }
    }

    expect(
      offenders,
      `These routes refuse for consent without a machine-readable code, so the browser ` +
        `cannot offer the learner the inline consent panel:\n  ${offenders.join('\n  ')}`,
    ).toEqual([])
  })
})
