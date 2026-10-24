import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * GET /api/user/subscription.
 *
 * THE DEFECT (19 September 2026): this route did not exist. src/app/api/user/
 * held `password` and `profile` and nothing else, while
 * /dashboard/subscription fetched it on mount and treats a 404 as "you have no
 * subscription". So the plan page said "No Active Subscription" to **every**
 * account, including the four paying customers, and settings links to it.
 *
 * The tests below are mostly about WHICH source of truth answers. Production
 * held 13 Prisma users against 206 profiles, so a route keyed off the Prisma
 * Subscription row would have reproduced the same wrong answer for most
 * people. profiles.subscription_status is what the web gates actually read,
 * so that is what decides; Prisma enriches.
 */

let authUser: { id: string } | null = { id: 'user-123' }
let profileRow: Record<string, unknown> | null = null

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: authUser }, error: null }) },
    from: () => ({
      select: () => ({
        eq: () => ({ single: async () => ({ data: profileRow, error: null }) }),
      }),
    }),
  }),
}))

const mockFindUnique = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: { subscription: { findUnique: (...a: unknown[]) => mockFindUnique(...a) } },
}))

const mockTryPrismaUserId = vi.fn()
vi.mock('@/lib/identity', () => ({
  tryPrismaUserId: (...a: unknown[]) => mockTryPrismaUserId(...a),
}))

import { GET } from '@/app/api/user/subscription/route'

const END = '2026-10-19T00:00:00.000Z'

beforeEach(() => {
  vi.clearAllMocks()
  authUser = { id: 'user-123' }
  profileRow = {
    subscription_status: 'pro',
    subscription_end_date: END,
    created_at: '2026-09-01T00:00:00.000Z',
  }
  mockTryPrismaUserId.mockResolvedValue(null)
  mockFindUnique.mockResolvedValue(null)
})

// ─── The regression ─────────────────────────────────────────────────────

describe('a paying customer with no Prisma row', () => {
  it('is told they have a subscription, where the page used to say they had none', async () => {
    const res = await GET()
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.status).toBe('ACTIVE')
  })

  it('gets the period end the entitlement gates actually enforce', async () => {
    const json = await (await GET()).json()
    expect(json.currentPeriodEnd).toBe(END)
  })

  it('answers without a Prisma row at all', async () => {
    await GET()
    expect(mockFindUnique).not.toHaveBeenCalled()
  })
})

// ─── Which source decides ───────────────────────────────────────────────

describe('profile and Prisma together', () => {
  it('lets the Prisma row distinguish a trial from a paid plan', async () => {
    // The profile writes 'pro' for both a no-card trial and a real payer, so
    // only the Prisma row can tell the plan page which banner to show.
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue({
      status: 'TRIALING',
      currentPeriodStart: new Date('2026-09-12T00:00:00.000Z'),
      currentPeriodEnd: new Date('2026-09-19T00:00:00.000Z'),
      cancelledAt: null,
      paymentCount: 0,
      coolingOffWaived: false,
    })
    const json = await (await GET()).json()
    expect(json.status).toBe('TRIALING')
  })

  it('still takes the period end from the profile, which is what is enforced', async () => {
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue({
      status: 'ACTIVE',
      currentPeriodStart: new Date('2026-09-12T00:00:00.000Z'),
      currentPeriodEnd: new Date('2027-01-01T00:00:00.000Z'),
      cancelledAt: null,
      paymentCount: 3,
      coolingOffWaived: false,
    })
    const json = await (await GET()).json()
    expect(json.currentPeriodEnd).toBe(END)
    // and the detail the profile cannot carry comes through
    expect(json.paymentCount).toBe(3)
  })

  it('never lets a Prisma failure break the plan page', async () => {
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockRejectedValue(new Error('connection pool exhausted'))
    const res = await GET()
    expect(res.status).toBe(200)
    expect((await res.json()).status).toBe('ACTIVE')
  })
})

// ─── Everyone else ──────────────────────────────────────────────────────

describe('accounts with no plan', () => {
  it.each(['free', '', 'something_unknown'])('404s a %s profile', async (status) => {
    profileRow = { subscription_status: status, subscription_end_date: null, created_at: null }
    const res = await GET()
    // 404 is what the page already handles as its empty state; changing it
    // would mean changing the page too.
    expect(res.status).toBe(404)
  })

  it('404s when there is no profile at all', async () => {
    profileRow = null
    expect((await GET()).status).toBe(404)
  })

  it('401s an unauthenticated caller', async () => {
    authUser = null
    expect((await GET()).status).toBe(401)
  })
})

// ─── Status mapping ─────────────────────────────────────────────────────

describe('status mapping', () => {
  it.each([
    ['pro', 'ACTIVE'],
    ['active', 'ACTIVE'],
    ['trialing', 'TRIALING'],
    ['past_due', 'PAST_DUE'],
    ['cancelled', 'CANCELLED'],
    ['canceled', 'CANCELLED'],
  ])('maps %s to %s', async (profileStatus, expected) => {
    profileRow = {
      subscription_status: profileStatus,
      subscription_end_date: END,
      created_at: null,
    }
    const json = await (await GET()).json()
    expect(json.status).toBe(expected)
  })

  it('is case-insensitive, because the column is free text', async () => {
    profileRow = { subscription_status: 'PRO', subscription_end_date: END, created_at: null }
    expect((await (await GET()).json()).status).toBe('ACTIVE')
  })
})

// ─── The real plan and price (webhook:D12, D13) ─────────────────────────
//
// The route answered `plan: 'MONTHLY'` for everyone and the page priced the
// student monthly plan, so an annual subscriber and every teacher saw the
// wrong plan and the wrong amount on their own plan page.

describe('the plan and the price', () => {
  function rowWith(over: Record<string, unknown>) {
    return {
      status: 'ACTIVE',
      plan: 'MONTHLY',
      isTeacherPlan: false,
      grandfatheredPriceMinor: null,
      currentPeriodStart: new Date('2026-09-12T00:00:00.000Z'),
      currentPeriodEnd: new Date('2027-09-12T00:00:00.000Z'),
      cancelledAt: null,
      paymentCount: 1,
      coolingOffWaived: false,
      ...over,
    }
  }

  it('reports an annual teacher plan as what it is, at the price locked at signup', async () => {
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue(
      rowWith({ plan: 'ANNUAL', isTeacherPlan: true, grandfatheredPriceMinor: 6799 }),
    )
    const json = await (await GET()).json()
    expect(json.plan).toBe('ANNUAL')
    expect(json.interval).toBe('year')
    expect(json.isTeacherPlan).toBe(true)
    expect(json.priceMinor).toBe(6799)
  })

  it('falls back to the current list price for the plan and tier when no price was locked', async () => {
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue(rowWith({ plan: 'ANNUAL', grandfatheredPriceMinor: null }))
    const json = await (await GET()).json()
    expect(json.plan).toBe('ANNUAL')
    // PRICING.STUDENT_ANNUAL, early access, in pence.
    expect(json.priceMinor).toBe(2999)
  })

  it('answers student monthly when there is no row, which is what a trialist would pay', async () => {
    const json = await (await GET()).json()
    expect(json.plan).toBe('MONTHLY')
    expect(json.interval).toBe('month')
    expect(json.isTeacherPlan).toBe(false)
    expect(json.priceMinor).toBe(399)
  })
})

// ─── Shape ──────────────────────────────────────────────────────────────

describe('the response', () => {
  it('carries every field the plan page destructures', async () => {
    const json = await (await GET()).json()
    for (const key of [
      'plan',
      'interval',
      'isTeacherPlan',
      'priceMinor',
      'status',
      'paymentRetrying',
      'currentPeriodStart',
      'currentPeriodEnd',
      'cancelledAt',
      'paymentCount',
      'coolingOffWaived',
    ]) {
      expect(json, `missing ${key}`).toHaveProperty(key)
    }
  })

  it('invents no period end when neither source has one', async () => {
    // A date a customer might plan around must not be guessed.
    profileRow = { subscription_status: 'pro', subscription_end_date: null, created_at: null }
    const json = await (await GET()).json()
    expect(json.currentPeriodEnd).toBeNull()
  })
})

// ─── The retry window ───────────────────────────────────────────────────
//
// After a failed payment the webhook leaves the profile on 'pro' while Stripe
// retries (23 October 2026) and the Prisma row records PAST_DUE. The page used
// to prefer the row and say PAST_DUE to a customer whose gate was open.

describe('during Stripe retries of a failed payment', () => {
  const pastDueRow = () => ({
    status: 'PAST_DUE',
    plan: 'MONTHLY',
    isTeacherPlan: false,
    grandfatheredPriceMinor: null,
    currentPeriodStart: new Date('2026-09-12T00:00:00.000Z'),
    currentPeriodEnd: new Date('2026-10-12T00:00:00.000Z'),
    cancelledAt: null,
    paymentCount: 2,
    coolingOffWaived: false,
  })

  it('says ACTIVE, as the gate does, and flags the retry', async () => {
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue(pastDueRow())
    const json = await (await GET()).json()
    expect(json.status).toBe('ACTIVE')
    expect(json.paymentRetrying).toBe(true)
  })

  it('still says PAST_DUE when the profile itself holds past_due', async () => {
    // The pre-October profiles written by the old handler: the gate is closed
    // and the page must not pretend otherwise.
    profileRow = { subscription_status: 'past_due', subscription_end_date: END, created_at: null }
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue(pastDueRow())
    const json = await (await GET()).json()
    expect(json.status).toBe('PAST_DUE')
    expect(json.paymentRetrying).toBe(false)
  })

  it('does not flag a retry when the row agrees the plan is live', async () => {
    mockTryPrismaUserId.mockResolvedValue('cuid_1')
    mockFindUnique.mockResolvedValue({ ...pastDueRow(), status: 'ACTIVE' })
    const json = await (await GET()).json()
    expect(json.status).toBe('ACTIVE')
    expect(json.paymentRetrying).toBe(false)
  })
})
