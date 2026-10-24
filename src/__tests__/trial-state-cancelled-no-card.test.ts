import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * Day 8, after the expiry cron has run (23 October 2026).
 *
 * `/api/cron/trial-expiry` ends a no-card trial by setting the Prisma row to
 * CANCELLED. getTrialState only recognised a TRIALING row past its end, so from
 * 04:15 on day 8 every processed trialist resolved to 'unknown': the "your trial
 * ended" card and the day-8 email described an account the resolver could not
 * name. These pin the fix and the two rows it must never catch: a payer, and a
 * mobile store purchase, which also carries a null Stripe id.
 */

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: {
      getUser: async () => ({ data: { user: { id: 'uuid-1', email: 'a@b.com' } }, error: null }),
    },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
    }),
  }),
}))

const mockSubFindUnique = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: async () => ({ id: 'cuid-1' }) },
    subscription: { findUnique: (...a: unknown[]) => mockSubFindUnique(...a) },
  },
}))

import { getTrialState } from '@/lib/billing/trial-state'

const ended = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)

function expiredNoCardRow(over: Record<string, unknown> = {}) {
  return {
    status: 'CANCELLED',
    currentPeriodEnd: ended,
    cancelledAt: new Date(ended.getTime() + 60_000),
    stripeSubscriptionId: null,
    platform: 'WEB',
    revenuecatAppUserId: null,
    ...over,
  }
}

beforeEach(() => {
  mockSubFindUnique.mockReset()
})

describe('a no-card trial the expiry cron has cancelled', () => {
  it('answers trial-ended, with the date it ended', async () => {
    mockSubFindUnique.mockResolvedValue(expiredNoCardRow())
    const s = await getTrialState()
    expect(s.kind).toBe('trial-ended')
    expect(s.isPremium).toBe(false)
    expect(s.trialEndedAt?.toISOString()).toBe(ended.toISOString())
  })

  it('asks Prisma for the platform and RevenueCat columns it relies on', async () => {
    mockSubFindUnique.mockResolvedValue(expiredNoCardRow())
    await getTrialState()
    const select = (mockSubFindUnique.mock.calls[0]?.[0] as { select: Record<string, boolean> })
      .select
    expect(select.platform).toBe(true)
    expect(select.revenuecatAppUserId).toBe(true)
  })

  it('never calls a cancelled payer a finished trial', async () => {
    mockSubFindUnique.mockResolvedValue(expiredNoCardRow({ stripeSubscriptionId: 'sub_paid' }))
    expect((await getTrialState()).kind).not.toBe('trial-ended')
  })

  it('never calls a lapsed mobile purchase a finished trial', async () => {
    mockSubFindUnique.mockResolvedValue(
      expiredNoCardRow({ platform: 'IOS', revenuecatAppUserId: 'rc_1' }),
    )
    expect((await getTrialState()).kind).not.toBe('trial-ended')
  })
})
