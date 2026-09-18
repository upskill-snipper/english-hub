import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * invoice.paid and the IELTS carve-out.
 *
 * checkout.session.completed, customer.subscription.updated and
 * customer.subscription.deleted all check isIeltsOnlySubscription() before
 * touching profiles.subscription_status. invoice.paid did not. IELTS is a
 * standalone GBP 39/month product gated by profiles.ielts_status, and the
 * global 'pro' flag unlocks every GCSE, IGCSE and Teacher feature through
 * hasActiveSubscription() — so the highest-priced SKU was handing out the whole
 * catalogue, first on the GBP 0 trial invoice and then on every renewal. And
 * because .deleted also carves IELTS out, that 'pro' was never cleared: an
 * IELTS trial taken and cancelled inside seven days left a permanently free
 * Pro account.
 *
 * This file is separate from webhook.test.ts because that file mocks
 * '@/lib/stripe' with only `stripe`, leaving the route's isIeltsPriceId import
 * undefined. These tests need the real one.
 */

const IELTS_MONTHLY = 'price_ielts_monthly_test'
const IELTS_ANNUAL = 'price_ielts_annual_test'
const PRO_MONTHLY = 'price_pro_monthly_test'

process.env.STRIPE_PRICE_IELTS_MONTHLY = IELTS_MONTHLY
process.env.STRIPE_PRICE_IELTS_ANNUAL = IELTS_ANNUAL

const mockConstructEvent = vi.fn()
const mockRetrieveSubscription = vi.fn()

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...a) },
    subscriptions: { retrieve: (...a: unknown[]) => mockRetrieveSubscription(...a) },
  },
  // The real implementation, against the ids pinned above.
  isIeltsPriceId: (id: string | null | undefined) =>
    !!id && [IELTS_MONTHLY, IELTS_ANNUAL].includes(id),
  IELTS_PRICE_IDS: [IELTS_MONTHLY, IELTS_ANNUAL],
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

/** Every profiles.update payload the route wrote, in order. */
let profileUpdates: Record<string, unknown>[] = []

function createSupabaseMock() {
  const profilesChain = () => ({
    update: (payload: Record<string, unknown>) => {
      profileUpdates.push(payload)
      return { eq: () => ({ error: null, in: () => ({ error: null, count: 0 }) }) }
    },
    select: () => ({
      eq: () => ({
        single: () => ({
          data: { id: 'user-123', email: 't@t.com', subscription_status: 'free' },
          error: null,
        }),
        in: () => ({ single: () => ({ data: null, error: null }) }),
      }),
    }),
    upsert: () => ({ error: null }),
    insert: () => ({ error: null }),
  })

  const webhookEvents = {
    select: () => ({ eq: () => ({ single: () => ({ data: null, error: null }) }) }),
    insert: () => ({ error: null }),
  }

  return {
    from: (table: string) => (table === 'webhook_events' ? webhookEvents : profilesChain()),
  }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => supabaseMock }))

function makeEvent(type: string, data: unknown): Stripe.Event {
  return {
    id: `evt_${Math.random().toString(36).slice(2)}`,
    object: 'event',
    api_version: '2023-10-16',
    created: Math.floor(Date.now() / 1000),
    type,
    data: { object: data },
    livemode: false,
    pending_webhooks: 0,
    request: null,
  } as unknown as Stripe.Event
}

function request(): NextRequest {
  return new NextRequest('http://localhost/api/stripe/webhook', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json', 'stripe-signature': 'sig' }),
    body: '{}',
  })
}

/** A subscription carrying the given recurring price ids. */
function subscription(priceIds: string[], periodEnd: number) {
  return {
    id: 'sub_test',
    status: 'active',
    current_period_end: periodEnd,
    items: { data: priceIds.map((id) => ({ price: { id, recurring: { interval: 'month' } } })) },
  }
}

const INVOICE_PERIOD_END = 1_700_000_000
const SUB_PERIOD_END = 1_800_000_000

let POST: (req: NextRequest) => Promise<Response>

beforeEach(async () => {
  vi.resetModules()
  vi.clearAllMocks()
  profileUpdates = []
  supabaseMock = createSupabaseMock()
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  mockConstructEvent.mockReturnValue(
    makeEvent('invoice.paid', {
      id: 'in_test',
      customer: 'cus_test',
      subscription: 'sub_test',
      period_end: INVOICE_PERIOD_END,
    }),
  )
  const mod = await import('@/app/api/stripe/webhook/route')
  POST = mod.POST
})

// ─── The hole itself ────────────────────────────────────────────────────

describe('invoice.paid on an IELTS-only subscription', () => {
  beforeEach(() => {
    mockRetrieveSubscription.mockResolvedValue(subscription([IELTS_MONTHLY], SUB_PERIOD_END))
  })

  it('never grants the global pro flag', async () => {
    await POST(request())
    for (const u of profileUpdates) {
      expect(u, 'an IELTS-only invoice must not touch subscription_status').not.toHaveProperty(
        'subscription_status',
      )
    }
  })

  it('never writes a subscription_end_date, which gates the whole catalogue', async () => {
    await POST(request())
    for (const u of profileUpdates) {
      expect(u).not.toHaveProperty('subscription_end_date')
    }
  })

  it('does set the IELTS entitlement, so the customer gets what they paid for', async () => {
    await POST(request())
    expect(profileUpdates).toContainEqual({ ielts_status: 'active' })
  })

  it('treats an annual IELTS subscription the same way', async () => {
    mockRetrieveSubscription.mockResolvedValue(subscription([IELTS_ANNUAL], SUB_PERIOD_END))
    await POST(request())
    expect(profileUpdates).toContainEqual({ ielts_status: 'active' })
    expect(profileUpdates.some((u) => 'subscription_status' in u)).toBe(false)
  })
})

// ─── The ordinary path must still work ──────────────────────────────────

describe('invoice.paid on a non-IELTS subscription', () => {
  beforeEach(() => {
    mockRetrieveSubscription.mockResolvedValue(subscription([PRO_MONTHLY], SUB_PERIOD_END))
  })

  it('still grants pro', async () => {
    await POST(request())
    const pro = profileUpdates.find((u) => u.subscription_status === 'pro')
    expect(pro).toBeDefined()
  })

  it("takes the period end from the subscription, not the invoice's billing line", async () => {
    await POST(request())
    const pro = profileUpdates.find((u) => u.subscription_status === 'pro')
    // The invoice's period_end is the billing line's window and diverges from
    // the renewal boundary on proration, mid-cycle changes and trial
    // conversion. Entitlement has to follow the subscription.
    expect(pro?.subscription_end_date).toBe(new Date(SUB_PERIOD_END * 1000).toISOString())
    expect(pro?.subscription_end_date).not.toBe(new Date(INVOICE_PERIOD_END * 1000).toISOString())
  })
})

// ─── Mixed and degenerate cases ─────────────────────────────────────────

describe('invoice.paid edge cases', () => {
  it('keeps pro AND the IELTS flag on a mixed subscription', async () => {
    mockRetrieveSubscription.mockResolvedValue(
      subscription([IELTS_MONTHLY, PRO_MONTHLY], SUB_PERIOD_END),
    )
    await POST(request())
    expect(profileUpdates.some((u) => u.subscription_status === 'pro')).toBe(true)
    expect(profileUpdates).toContainEqual({ ielts_status: 'active' })
  })

  it('fails closed when the subscription cannot be retrieved', async () => {
    // Granting pro without being able to check whether this is IELTS-only is
    // the exact defect. Do nothing and let .updated reconcile.
    mockRetrieveSubscription.mockRejectedValue(new Error('Stripe unreachable'))
    const res = await POST(request())
    expect(res.status).toBe(200)
    expect(profileUpdates.some((u) => 'subscription_status' in u)).toBe(false)
  })

  it('writes nothing for an invoice with no subscription', async () => {
    mockConstructEvent.mockReturnValue(
      makeEvent('invoice.paid', {
        id: 'in_oneoff',
        customer: 'cus_test',
        subscription: null,
        period_end: INVOICE_PERIOD_END,
      }),
    )
    await POST(request())
    expect(profileUpdates).toEqual([])
  })

  it('accepts an expanded subscription object, not only an id string', async () => {
    mockConstructEvent.mockReturnValue(
      makeEvent('invoice.paid', {
        id: 'in_test',
        customer: 'cus_test',
        subscription: { id: 'sub_test' },
        period_end: INVOICE_PERIOD_END,
      }),
    )
    mockRetrieveSubscription.mockResolvedValue(subscription([IELTS_MONTHLY], SUB_PERIOD_END))
    await POST(request())
    expect(profileUpdates).toContainEqual({ ielts_status: 'active' })
    expect(profileUpdates.some((u) => 'subscription_status' in u)).toBe(false)
  })
})
