import { describe, expect, it, vi } from 'vitest'

/**
 * /consent/status agrees with the AI gate about who needs a parent's consent.
 *
 * THE DEFECT (12 October 2026). The AI gate asks for a guardian below 16
 * (PARENTAL_CONSENT_AGE, and the imprecise band for a minor of unknown exact
 * age). getGuardianConsentState, which drives /consent/status, still used 18
 * from when the gate blocked every minor, so a 16 or 17 year-old was told a
 * parent's consent was required for AI feedback the gate was already giving
 * them.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring
 * GUARDIAN_CONSENT_GATE_UNDER = 18 fails the seventeen-year-old case.
 */

const yearsAgo = (years: number, extraDays = 30) => {
  const d = new Date()
  d.setFullYear(d.getFullYear() - years)
  d.setDate(d.getDate() - extraDays)
  return d.toISOString().slice(0, 10)
}

let profile: Record<string, unknown> | null = null
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: (table: string) => {
      if (table === 'profiles') {
        return {
          select: () => ({
            eq: () => ({ maybeSingle: async () => ({ data: profile, error: null }) }),
          }),
        }
      }
      // parental_consents: none held.
      return { select: () => ({ eq: () => ({ order: async () => ({ data: [] }) }) }) }
    },
  }),
}))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: async () => ({ success: true }) }))

const { getGuardianConsentState } = await import('@/lib/parental-consent')

function student(dateOfBirth: string | null, isMinor: boolean) {
  return {
    id: 'uuid-student',
    full_name: 'Test Learner',
    email: 'learner@example.com',
    date_of_birth: dateOfBirth,
    is_minor: isMinor,
    parent_guardian_email: null,
  }
}

describe('who /consent/status says needs a parent', () => {
  it('not a seventeen-year-old, whom the gate lets consent for themselves', async () => {
    profile = student(yearsAgo(17), true)
    expect((await getGuardianConsentState('uuid-student')).consentRequired).toBe(false)
  })

  it('a fourteen-year-old, as the gate does', async () => {
    profile = student(yearsAgo(14), true)
    const state = await getGuardianConsentState('uuid-student')
    expect(state.consentRequired).toBe(true)
    expect(state.consentMandatory).toBe(true)
  })

  it('a minor whose exact age we do not hold, failing closed like the gate', async () => {
    profile = student(null, true)
    expect((await getGuardianConsentState('uuid-student')).consentRequired).toBe(true)
  })
})
