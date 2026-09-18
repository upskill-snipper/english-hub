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

// ─── Shape ──────────────────────────────────────────────────────────────

describe('the response', () => {
  it('carries every field the plan page destructures', async () => {
    const json = await (await GET()).json()
    for (const key of [
      'plan',
      'status',
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
