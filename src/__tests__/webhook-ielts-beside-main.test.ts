import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'
import type { Subscription } from '@prisma/client'
import { pickEntitlement } from '@/lib/entitlements'

/**
 * An IELTS-only subscription and the one-per-user Prisma `Subscription` row
 * (24 October 2026).
 *
 * IELTS is a standalone product: its entitlement is `profiles.ielts_status`,
 * and every handler already refused to let an IELTS-only subscription write
 * `profiles.subscription_status`. The Prisma row had no such carve-out. It is
 * one row per user, so a second Stripe subscription does not appear beside the
 * first: it REPLACES it. And the sync lets any LIVE subscription take the row.
 * Mobile entitlements (`pickEntitlement`) read only that row, and the
 * trial-expiry cron finds the no-card trial only by it. So:
 *
 *   - a main-plan holder who bought IELTS had the IELTS subscription written
 *     over the main plan's row; when IELTS ended, its CANCELLED was written to
 *     the same row and mobile read a paying customer as free;
 *   - a no-card trialist who bought IELTS had the trial row taken by the
 *     IELTS subscription, so the trial-expiry cron (which wants a row with no
 *     Stripe id) never saw it again and the trial's 'pro' stayed for good,
 *     including after the IELTS plan ended.
 *
 * The row is now the main entitlement's only. These run the real route and
 * the real sync module over a stateful fake row.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const MAIN = 'price_student_annual'
const IELTS = 'price_ielts_monthly'
const DAY = 24 * 60 * 60
const NOW = Math.floor(Date.now() / 1000)
const MAIN_END = NOW + 300 * DAY
const IELTS_END = NOW + 30 * DAY
const TRIAL_END = NOW + 5 * DAY

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => PRISMA_CUID,
  tryPrismaUserId: async () => PRISMA_CUID,
  findExistingUser: async () => ({ id: PRISMA_CUID }),
  IdentityUnresolved: class extends Error {},
  IdentityConflict: class extends Error {},
}))

// ─── A stateful Prisma row ──────────────────────────────────────────────

type Row = Subscription

let row: Row | null = null

function applyWrite(target: Record<string, unknown>, data: Record<string, unknown>) {
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value === 'object' && 'increment' in (value as object)) {
      target[key] = Number(target[key] ?? 0) + Number((value as { increment: number }).increment)
    } else {
      target[key] = value
    }
  }
}

const mockUpsert = vi.fn(
  async (args: { create: Record<string, unknown>; update: Record<string, unknown> }) => {
    if (row) {
      applyWrite(row as unknown as Record<string, unknown>, args.update)
    } else {
      row = {
        paymentCount: 0,
        grandfatheredPriceMinor: null,
        isTeacherPlan: false,
        ...args.create,
      } as unknown as Row
    }
    return { id: 'row_1' }
  },
)

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: (args: { create: Record<string, unknown>; update: Record<string, unknown> }) =>
        mockUpsert(args),
      findUnique: async () => (row ? { ...row } : null),
      update: async ({ data }: { data: Record<string, unknown> }) => {
        if (row) applyWrite(row as unknown as Record<string, unknown>, data)
        return { id: 'row_1' }
      },
    },
  },
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

// ─── Stripe ─────────────────────────────────────────────────────────────

/** Every subscription Stripe holds for the customer, as it holds it now. */
let stripeSubs: Record<string, Stripe.Subscription> = {}
const mockConstructEvent = vi.fn()

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: {
      retrieve: async (id: string) => {
        const sub = stripeSubs[id]
        if (!sub) throw new Error(`no such subscription ${id}`)
        return sub
      },
      list: async () => ({ data: Object.values(stripeSubs) }),
    },
    customers: { retrieve: async () => ({ deleted: false, email: 'p@example.com' }) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: (id: string | null | undefined) => id === IELTS,
}))

// ─── Supabase ───────────────────────────────────────────────────────────

let profile: Record<string, unknown> = {}
let profileUpdates: Record<string, unknown>[] = []

function createSupabaseMock() {
  return {
    from: (table: string) => {
      if (table === 'webhook_events') {
        return {
          insert: async () => ({ error: null }),
          delete: () => ({ eq: async () => ({ error: null }) }),
        }
      }
      return {
        select: () => ({
          eq: () => ({
            single: async () => ({ data: { id: SUPABASE_UUID, ...profile }, error: null }),
          }),
        }),
        update: (payload: Record<string, unknown>) => {
          if (table === 'profiles') {
            profileUpdates.push(payload)
            profile = { ...profile, ...payload }
          }
          return { eq: () => ({ error: null, in: async () => ({ error: null, count: 0 }) }) }
        },
        insert: async () => ({ error: null }),
      }
    },
  }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => supabaseMock }))

// ─── Fixtures ───────────────────────────────────────────────────────────

function subscription(
  id: string,
  status: Stripe.Subscription.Status,
  priceId: string,
  periodEnd: number,
  over: Record<string, unknown> = {},
): Stripe.Subscription {
  return {
    id,
    object: 'subscription',
    customer: 'cus_1',
    status,
    metadata: { userId: SUPABASE_UUID },
    items: {
      data: [
        {
          id: `si_${id}`,
          current_period_start: NOW - DAY,
          current_period_end: periodEnd,
          price: {
            id: priceId,
            recurring: { interval: priceId === MAIN ? 'year' : 'month' },
            product: 'prod_1',
          },
        },
      ],
    },
    ...over,
  } as unknown as Stripe.Subscription
}

const mainPlan = (status: Stripe.Subscription.Status = 'active') =>
  subscription('sub_main', status, MAIN, MAIN_END)
const ieltsPlan = (status: Stripe.Subscription.Status = 'active') =>
  subscription('sub_ielts', status, IELTS, IELTS_END)

let eventSeq = 0
function makeEvent(type: string, data: unknown): Stripe.Event {
  eventSeq += 1
  return {
    id: `evt_${eventSeq}`,
    object: 'event',
    api_version: '2026-02-25.clover',
    created: NOW,
    type,
    data: { object: data },
    livemode: false,
    pending_webhooks: 0,
    request: null,
  } as unknown as Stripe.Event
}

async function deliver(type: string, data: unknown): Promise<Response> {
  mockConstructEvent.mockReturnValue(makeEvent(type, data))
  const { POST } = await import('@/app/api/stripe/webhook/route')
  return POST(
    new NextRequest('http://localhost/api/stripe/webhook', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json', 'stripe-signature': 'sig' }),
      body: '{}',
    }),
  )
}

const checkout = (subscriptionId: string) =>
  deliver('checkout.session.completed', {
    id: `cs_${subscriptionId}`,
    mode: 'subscription',
    subscription: subscriptionId,
    metadata: { userId: SUPABASE_UUID },
  })

const paidInvoice = (subscriptionId: string, amount: number) =>
  deliver('invoice.paid', {
    id: `in_${subscriptionId}_${eventSeq}`,
    customer: 'cus_1',
    subscription: subscriptionId,
    amount_paid: amount,
    lines: { data: [] },
  })

const mobile = () => pickEntitlement(row ? [row] : [], { now: new Date() })

beforeEach(() => {
  vi.clearAllMocks()
  row = null
  stripeSubs = {}
  profile = {}
  profileUpdates = []
  supabaseMock = createSupabaseMock()
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'info').mockImplementation(() => {})
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
})

// ═══════════════════════════════════════════════════════════════════════

describe('a main-plan holder who buys IELTS', () => {
  beforeEach(() => {
    row = {
      id: 'row_1',
      userId: PRISMA_CUID,
      stripeCustomerId: 'cus_1',
      stripeSubscriptionId: 'sub_main',
      plan: 'ANNUAL',
      status: 'ACTIVE',
      currentPeriodStart: new Date((NOW - DAY) * 1000),
      currentPeriodEnd: new Date(MAIN_END * 1000),
      cancelledAt: null,
      platform: 'WEB',
      isTeacherPlan: false,
      paymentCount: 1,
      grandfatheredPriceMinor: 6799,
    } as unknown as Row
    profile = {
      subscription_status: 'pro',
      subscription_end_date: new Date(MAIN_END * 1000).toISOString(),
      ielts_status: 'free',
    }
    stripeSubs = { sub_main: mainPlan(), sub_ielts: ieltsPlan('trialing') }
  })

  it('the IELTS checkout leaves the main plan on the row', async () => {
    const res = await checkout('sub_ielts')
    expect(res.status).toBe(200)
    expect(row?.stripeSubscriptionId).toBe('sub_main')
    expect(row?.status).toBe('ACTIVE')
    // The IELTS entitlement itself is still granted.
    expect(profile.ielts_status).toBe('active')
  })

  it('when the IELTS plan later ends, mobile still reads the main plan as pro', async () => {
    await checkout('sub_ielts')
    stripeSubs.sub_ielts = ieltsPlan('canceled')
    await deliver('customer.subscription.deleted', {
      ...ieltsPlan('canceled'),
      ended_at: NOW,
    })
    expect(row?.stripeSubscriptionId).toBe('sub_main')
    expect(row?.status).toBe('ACTIVE')
    expect(mobile().pro).toBe(true)
    expect(profile.subscription_status).toBe('pro')
    expect(profile.ielts_status).toBe('free')
  })

  it('an IELTS payment is not counted on the main plan row', async () => {
    stripeSubs.sub_ielts = ieltsPlan('active')
    await paidInvoice('sub_ielts', 3900)
    expect(row?.stripeSubscriptionId).toBe('sub_main')
    expect(row?.paymentCount).toBe(1)
  })

  it('the IELTS created and updated events do not take the row either', async () => {
    await deliver('customer.subscription.created', ieltsPlan('trialing'))
    stripeSubs.sub_ielts = ieltsPlan('active')
    await deliver('customer.subscription.updated', ieltsPlan('active'))
    expect(row?.stripeSubscriptionId).toBe('sub_main')
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('the main plan itself still writes its row', async () => {
    // The control: a fix that stopped every row write would pass the above.
    // Stripe holds it past_due too, or the snapshot would be stale.
    stripeSubs.sub_main = mainPlan('past_due')
    await deliver('customer.subscription.updated', mainPlan('past_due'))
    expect(row?.stripeSubscriptionId).toBe('sub_main')
    expect(row?.status).toBe('PAST_DUE')
  })
})

describe('an IELTS-only buyer with no main plan', () => {
  it('gets the IELTS flag and no row, so mobile never reads IELTS as pro', async () => {
    // Case (2) of the finding: with the IELTS subscription on the row, a main
    // plan deleted beside it left the row ACTIVE (the live-row guard) and
    // mobile granted full Pro to an IELTS-only payer. With IELTS never taking
    // the row, a new purchase cannot reach that state.
    profile = { subscription_status: 'free', ielts_status: 'free' }
    stripeSubs = { sub_ielts: ieltsPlan('active') }
    await checkout('sub_ielts')
    expect(row).toBeNull()
    expect(mobile().pro).toBe(false)
    expect(profile.ielts_status).toBe('active')
  })
})

describe('a no-card trialist who buys IELTS', () => {
  beforeEach(() => {
    row = {
      id: 'row_1',
      userId: PRISMA_CUID,
      stripeCustomerId: null,
      stripeSubscriptionId: null,
      plan: 'MONTHLY',
      status: 'TRIALING',
      currentPeriodStart: new Date((NOW - 2 * DAY) * 1000),
      currentPeriodEnd: new Date(TRIAL_END * 1000),
      cancelledAt: null,
      platform: 'WEB',
      isTeacherPlan: false,
      paymentCount: 0,
      grandfatheredPriceMinor: null,
    } as unknown as Row
    profile = {
      subscription_status: 'pro',
      subscription_end_date: new Date(TRIAL_END * 1000).toISOString(),
      ielts_status: 'free',
    }
    stripeSubs = { sub_ielts: ieltsPlan('trialing') }
  })

  it('leaves the trial row for the trial-expiry cron to end', async () => {
    // The cron selects TRIALING rows with no Stripe id. Taken by the IELTS
    // subscription, the row was never selected again and 'pro' stayed.
    await checkout('sub_ielts')
    await deliver('customer.subscription.created', ieltsPlan('trialing'))
    expect(row?.stripeSubscriptionId).toBeNull()
    expect(row?.status).toBe('TRIALING')
    expect(profile.ielts_status).toBe('active')
  })

  it("does not move the trial's end date to the IELTS period", async () => {
    // The checkout and created handlers wrote the IELTS subscription's period
    // end with no status, over the date the trial (or a main plan) runs on.
    await checkout('sub_ielts')
    await deliver('customer.subscription.created', ieltsPlan('trialing'))
    expect(profileUpdates.some((u) => 'subscription_end_date' in u)).toBe(false)
    expect(profileUpdates.some((u) => 'subscription_status' in u)).toBe(false)
    expect(profile.subscription_end_date).toBe(new Date(TRIAL_END * 1000).toISOString())
  })

  it('a main-plan checkout still takes the trial row: that is trial conversion', async () => {
    stripeSubs = { sub_main: mainPlan('trialing') }
    await checkout('sub_main')
    expect(row?.stripeSubscriptionId).toBe('sub_main')
    expect(row?.status).toBe('TRIALING')
  })
})

describe('a subscription switched in place between a main price and an IELTS price', () => {
  // 31 October 2026, detection only. Every handler judges IELTS-only on the
  // event in hand, so a switch on one subscription is never reconciled: a
  // main plan moved to the IELTS price keeps 'pro' after it ends, and one
  // moved off IELTS keeps ielts_status 'active'. The remedy is the founder's
  // (the portal setting is not visible from here); the switch is now loud.
  const updatedWithPrevious = (sub: Stripe.Subscription, previousPrice: string) => {
    mockConstructEvent.mockReturnValue({
      ...makeEvent('customer.subscription.updated', sub),
      data: {
        object: sub,
        previous_attributes: {
          items: { data: [{ price: { id: previousPrice, recurring: { interval: 'year' } } }] },
        },
      },
    })
    return import('@/app/api/stripe/webhook/route').then(({ POST }) =>
      POST(
        new NextRequest('http://localhost/api/stripe/webhook', {
          method: 'POST',
          headers: new Headers({ 'content-type': 'application/json', 'stripe-signature': 'sig' }),
          body: '{}',
        }),
      ),
    )
  }
  const switched = () =>
    (console.error as unknown as { mock: { calls: unknown[][] } }).mock.calls.some((c) =>
      String(c[0]).includes('SUBSCRIPTION_PRODUCT_SWITCHED_IN_PLACE'),
    )

  beforeEach(() => {
    profile = { subscription_status: 'pro', ielts_status: 'free' }
  })

  it('reports a main plan moved onto the IELTS price', async () => {
    const moved = subscription('sub_main', 'active', IELTS, IELTS_END)
    stripeSubs = { sub_main: moved }
    await updatedWithPrevious(moved, MAIN)
    expect(switched()).toBe(true)
  })

  it('reports an IELTS plan moved onto a main price', async () => {
    const moved = subscription('sub_ielts', 'active', MAIN, MAIN_END)
    stripeSubs = { sub_ielts: moved }
    await updatedWithPrevious(moved, IELTS)
    expect(switched()).toBe(true)
  })

  it('says nothing about a change within the main catalogue (the control)', async () => {
    const moved = subscription('sub_main', 'active', MAIN, MAIN_END)
    stripeSubs = { sub_main: moved }
    await updatedWithPrevious(moved, 'price_student_monthly')
    expect(switched()).toBe(false)
  })
})
