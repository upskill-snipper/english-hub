import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * The no-card trial.
 *
 * Production on 18 September 2026 held 206 profiles and zero TRIALING
 * subscriptions, because the only writer of the trial sat behind a session
 * gate that nothing could satisfy: the register page calls it straight after
 * `supabase.auth.signUp()`, and with email confirmation on there is no session
 * at that instant. Every account was told "your free trial is ready" and then
 * refused on its first essay.
 *
 * These tests pin the three properties that matter more than the happy path:
 * it must not downgrade a payer, it must not hand a fresh trial to a dormant
 * account on login, and it must never throw into an authentication flow.
 */

// ─── Mocks ──────────────────────────────────────────────────────────────

const mockTryPrismaUserId = vi.fn()
vi.mock('@/lib/identity', () => ({
  tryPrismaUserId: (...args: unknown[]) => mockTryPrismaUserId(...args),
}))

const mockUpsert = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: { subscription: { upsert: (...args: unknown[]) => mockUpsert(...args) } },
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn() }))

// A profile row the SELECT chain will return, and a capture of the UPDATE.
let profileRow: Record<string, unknown> | null = null
let selectThrows = false
let updateError: unknown = null
let updateCall: { payload: Record<string, unknown>; orFilter: string } | null = null

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => {
            if (selectThrows) throw new Error('database unreachable')
            return { data: profileRow, error: null }
          },
        }),
      }),
      update: (payload: Record<string, unknown>) => ({
        eq: () => ({
          or: async (orFilter: string) => {
            updateCall = { payload, orFilter }
            return { error: updateError }
          },
        }),
      }),
    }),
  }),
}))

import { provisionSignupTrial } from '@/lib/billing/provision-signup-trial'
import { PRICING } from '@/constants/pricing'

const UID = 'a0000000-0000-4000-8000-000000000001'
const daysAgo = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString()

beforeEach(() => {
  vi.clearAllMocks()
  profileRow = { subscription_status: 'free', created_at: daysAgo(0), role: 'student' }
  selectThrows = false
  updateError = null
  updateCall = null
  mockTryPrismaUserId.mockResolvedValue('cuid_prisma_user')
  mockUpsert.mockResolvedValue({})
})

// ─── The path that has never once run in production ─────────────────────

describe('provisionSignupTrial: a freshly confirmed account', () => {
  it('writes both halves of the entitlement, because two surfaces read it', async () => {
    const result = await provisionSignupTrial(UID)

    expect(result.provisioned).toBe(true)
    // Prisma row: the mobile-parity half and what the trial-allowance meter reads.
    expect(mockUpsert).toHaveBeenCalledOnce()
    const upsertArg = mockUpsert.mock.calls[0][0]
    expect(upsertArg.create.status).toBe('TRIALING')
    expect(upsertArg.create.platform).toBe('WEB')
    // Profile: the half the web entitlement gate reads.
    expect(updateCall?.payload.subscription_status).toBe('pro')
  })

  it('leaves stripeSubscriptionId unset, which is what marks it a no-card trial', async () => {
    await provisionSignupTrial(UID)
    expect(mockUpsert.mock.calls[0][0].create.stripeSubscriptionId).toBeUndefined()
  })

  it('runs the trial clock from confirmation, not from signup', async () => {
    profileRow = { subscription_status: 'free', created_at: daysAgo(3), role: 'student' }
    const result = await provisionSignupTrial(UID)

    expect(result.provisioned).toBe(true)
    if (!result.provisioned) return
    // Confirmed on day 3 of a 7-day window: the trial still has a full 7 days
    // to run, because the clock a user experiences starts when they can first
    // use the product.
    const daysLeft = (result.trialEndsAt.getTime() - Date.now()) / (24 * 60 * 60 * 1000)
    expect(daysLeft).toBeGreaterThan(PRICING.TRIAL_DAYS - 0.1)
  })

  it('marks a teacher trial as a teacher plan, reading the role the trigger wrote', async () => {
    profileRow = { subscription_status: 'free', created_at: daysAgo(0), role: 'teacher' }
    await provisionSignupTrial(UID)
    expect(mockUpsert.mock.calls[0][0].create.isTeacherPlan).toBe(true)
  })

  it('takes no date of birth, which is what stopped teachers reaching the old path', async () => {
    // The old route's Zod schema required dateOfBirth and the client only
    // called it when one had been entered, so teacher signups never reached
    // the trial block on any path. The signature is the guarantee.
    expect(provisionSignupTrial.length).toBe(1)
  })
})

// ─── Never downgrade ────────────────────────────────────────────────────

describe('provisionSignupTrial: an account that already has an entitlement', () => {
  it.each(['pro', 'active', 'trialing', 'past_due', 'cancelled'])(
    'writes nothing when the profile is already %s',
    async (status) => {
      profileRow = { subscription_status: status, created_at: daysAgo(1), role: 'student' }

      const result = await provisionSignupTrial(UID)

      expect(result).toEqual({ provisioned: false, reason: 'already-subscribed' })
      expect(mockUpsert).not.toHaveBeenCalled()
      expect(updateCall).toBeNull()
    },
  )

  it('is case-insensitive, so a PRO row cannot be shortened to a 7-day trial', async () => {
    profileRow = { subscription_status: 'PRO', created_at: daysAgo(1), role: 'student' }
    const result = await provisionSignupTrial(UID)
    expect(result).toEqual({ provisioned: false, reason: 'already-subscribed' })
  })

  it('also filters on status at the database, not only in application code', async () => {
    // The read-then-write window is the one a Stripe webhook could land in.
    // The conditional UPDATE is what closes it, so it has to stay.
    await provisionSignupTrial(UID)
    expect(updateCall?.orFilter).toContain('subscription_status.eq.free')
    expect(updateCall?.orFilter).toContain('subscription_status.is.null')
  })
})

// ─── Never hand a dormant account a fresh trial ─────────────────────────

describe('provisionSignupTrial: the window guard', () => {
  it('refuses an account created outside the trial window', async () => {
    profileRow = {
      subscription_status: 'free',
      created_at: daysAgo(PRICING.TRIAL_DAYS + 1),
      role: 'student',
    }

    const result = await provisionSignupTrial(UID)

    // This is what stops /api/auth/record-login handing every one of the ~100
    // dormant free accounts a trial the next time they sign in. Whether they
    // get one retrospectively is Calum's decision, not this function's.
    expect(result).toEqual({ provisioned: false, reason: 'outside-window' })
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('refuses rather than guesses when created_at is missing or unparseable', async () => {
    for (const created of [null, 'not a date']) {
      vi.clearAllMocks()
      mockTryPrismaUserId.mockResolvedValue('cuid_prisma_user')
      profileRow = { subscription_status: 'free', created_at: created, role: 'student' }

      const result = await provisionSignupTrial(UID)

      expect(result).toEqual({ provisioned: false, reason: 'outside-window' })
      expect(mockUpsert).not.toHaveBeenCalled()
    }
  })

  it('writes nothing at all when there is no profile', async () => {
    profileRow = null
    const result = await provisionSignupTrial(UID)
    expect(result).toEqual({ provisioned: false, reason: 'no-profile' })
    expect(mockUpsert).not.toHaveBeenCalled()
  })
})

// ─── Never throw into an authentication flow ────────────────────────────

describe('provisionSignupTrial: failure is contained', () => {
  it('returns a failure instead of throwing when the database is unreachable', async () => {
    selectThrows = true
    await expect(provisionSignupTrial(UID)).resolves.toEqual({
      provisioned: false,
      reason: 'error',
    })
  })

  it('returns a failure instead of throwing when the Prisma upsert rejects', async () => {
    mockUpsert.mockRejectedValue(new Error('connection pool exhausted'))
    await expect(provisionSignupTrial(UID)).resolves.toEqual({
      provisioned: false,
      reason: 'error',
    })
  })

  it('reports the profile write failing, rather than claiming a trial exists', async () => {
    // Half-provisioned is the dangerous state: a Prisma TRIALING row with a
    // 'free' profile means the meter says trial and the gate says upgrade.
    // The caller has to be able to see it.
    updateError = { message: 'permission denied' }
    const result = await provisionSignupTrial(UID)
    expect(result).toEqual({ provisioned: false, reason: 'error' })
  })

  it('does not write a subscription it cannot attach to a user', async () => {
    mockTryPrismaUserId.mockResolvedValue(null)
    const result = await provisionSignupTrial(UID)
    expect(result).toEqual({ provisioned: false, reason: 'identity-unresolved' })
    expect(mockUpsert).not.toHaveBeenCalled()
  })
})

// ─── Idempotence ────────────────────────────────────────────────────────

describe('provisionSignupTrial: called twice', () => {
  it('cannot extend a trial, because the upsert update branch is empty', async () => {
    await provisionSignupTrial(UID)
    // An empty `update` is the whole safety property: a second callback, a
    // refreshed page or a login on day 3 must not move currentPeriodEnd.
    expect(mockUpsert.mock.calls[0][0].update).toEqual({})
  })
})
