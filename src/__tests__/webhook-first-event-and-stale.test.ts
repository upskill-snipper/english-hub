import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D9, D10, D11 - three small holes in the first and last events.
 *
 * D9. `customer.subscription.created` with no `metadata.userId` and no
 *     profile carrying the customer id answered 500. Stripe retries a 500 for
 *     three days, so a subscription made by hand in the dashboard produced
 *     72 hours of failed deliveries and a red endpoint, and nothing changed
 *     between attempts. It now answers 200 with a reason, logs every fact it
 *     has, and raises a Sentry message so a person links the customer.
 *
 * D10. A first event whose subscription is not yet live (`incomplete`: the
 *     card needs 3-D Secure, or the payment is pending) wrote 'incomplete'
 *     over the profile. A no-card trialist is 'pro'; starting a checkout and
 *     stalling at the bank step ended their trial on the spot. A non-live
 *     first status is now written only over a profile that is not 'pro'.
 *
 * D11. `invoice.paid` granted 'pro' on the strength of the invoice alone. A
 *     delivery arriving late, after `customer.subscription.deleted`, re-granted
 *     access to a cancelled customer. The handler already retrieves the
 *     subscription from Stripe; it now refuses to grant when that
 *     subscription is no longer live.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const PERIOD_END = Math.floor(Date.UTC(2026, 10, 19) / 1000)

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => PRISMA_CUID,
  tryPrismaUserId: async () => PRISMA_CUID,
  IdentityUnresolved: class extends Error {},
  IdentityConflict: class extends Error {},
}))

const mockUpsert = vi.fn(async () => ({ id: 'row_1' }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: () => mockUpsert(),
      findUnique: vi.fn(async () => null),
      update: vi.fn(async () => ({ id: 'row_1' })),
    },
  },
}))

const mockCaptureException = vi.fn()
const mockCaptureMessage = vi.fn()
vi.mock('@sentry/nextjs', () => ({
  captureException: (...a: unknown[]) => mockCaptureException(...(a as [])),
  captureMessage: (...a: unknown[]) => mockCaptureMessage(...(a as [])),
}))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

const mockConstructEvent = vi.fn()
const mockRetrieveSubscription = vi.fn()
vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: {
      retrieve: (...a: unknown[]) => mockRetrieveSubscription(...(a as [])),
      list: async () => ({ data: [] }),
    },
    customers: { retrieve: async () => ({ deleted: false, email: 'p@example.com' }) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: () => false,
}))

/** What the profiles lookup returns; null means no profile for this customer. */
let profileRow: Record<string, unknown> | null = null
let profileUpdates: Record<string, unknown>[] = []

function createSupabaseMock() {
  const profiles = {
    update: (payload: Record<string, unknown>) => {
      profileUpdates.push(payload)
      return { eq: () => ({ error: null, in: () => ({ error: null, count: 0 }) }) }
    },
    select: () => ({
      eq: () => ({
        single: async () => ({ data: profileRow, error: profileRow ? null : { code: 'PGRST116' } }),
        in: () => ({ single: async () => ({ data: null, error: null }) }),
      }),
    }),
    upsert: () => ({ error: null }),
    insert: () => ({ error: null }),
  }
  const webhookEvents = {
    select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
    insert: async () => ({ error: null }),
    delete: () => ({ eq: async () => ({ error: null }) }),
  }
  return { from: (table: string) => (table === 'webhook_events' ? webhookEvents : profiles) }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => supabaseMock }))

function subscription(
  status: Stripe.Subscription.Status,
  over: Record<string, unknown> = {},
): Stripe.Subscription {
  return {
    id: 'sub_1',
    object: 'subscription',
    customer: 'cus_1',
    status,
    metadata: { userId: SUPABASE_UUID },
    items: {
      data: [
        {
          id: 'si_1',
          current_period_end: PERIOD_END,
          price: { id: 'price_monthly', recurring: { interval: 'month' }, product: 'prod_1' },
        },
      ],
    },
    ...over,
  } as unknown as Stripe.Subscription
}

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

async function post(event: Stripe.Event): Promise<Response> {
  mockConstructEvent.mockReturnValue(event)
  const { POST } = await import('@/app/api/stripe/webhook/route')
  return POST(request())
}

let errorSpy: ReturnType<typeof vi.spyOn>
let warnSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  profileUpdates = []
  profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'pro' }
  supabaseMock = createSupabaseMock()
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
  warnSpy.mockRestore()
})

const statusWrites = () =>
  profileUpdates.filter((u) => 'subscription_status' in u).map((u) => u.subscription_status)
const loggedLines = (spy: ReturnType<typeof vi.spyOn>) =>
  (spy.mock.calls as unknown as unknown[][]).map((c) => String(c[0]))

// ═══════════════════════════════════════════════════════════════════════
// D9
// ═══════════════════════════════════════════════════════════════════════

describe('customer.subscription.created for a customer nobody can resolve', () => {
  beforeEach(() => {
    profileRow = null
  })

  it('answers 200 with a reason instead of 500 for three days', async () => {
    const res = await post(
      makeEvent('customer.subscription.created', subscription('active', { metadata: {} })),
    )
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.received).toBe(true)
    expect(body.ignored).toBe('unresolved_user')
  })

  it('stores what is known: the ids in the log and a Sentry message', async () => {
    await post(
      makeEvent(
        'customer.subscription.created',
        subscription('active', { id: 'sub_handmade', customer: 'cus_orphan', metadata: {} }),
      ),
    )
    const line = loggedLines(errorSpy).find((l) => l.includes('unresolved_user'))
    expect(line).toBeDefined()
    expect(line).toContain('sub_handmade')
    expect(line).toContain('cus_orphan')
    expect(mockCaptureMessage).toHaveBeenCalled()
    const extra = (mockCaptureMessage.mock.calls[0] as unknown as [string, { extra: unknown }])[1]
      .extra as Record<string, unknown>
    expect(extra.subscriptionId).toBe('sub_handmade')
    expect(extra.customerId).toBe('cus_orphan')
  })

  it('writes nothing to anyone', async () => {
    await post(makeEvent('customer.subscription.created', subscription('active', { metadata: {} })))
    expect(profileUpdates).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
  })
})

// ═══════════════════════════════════════════════════════════════════════
// D10
// ═══════════════════════════════════════════════════════════════════════

describe('a first event whose subscription is not yet live', () => {
  it('customer.subscription.created does not write incomplete over a pro profile', async () => {
    await post(makeEvent('customer.subscription.created', subscription('incomplete')))
    expect(statusWrites()).toEqual([])
  })

  it('customer.subscription.created still writes incomplete over a free profile', async () => {
    profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'free' }
    await post(makeEvent('customer.subscription.created', subscription('incomplete')))
    expect(statusWrites()).toEqual(['incomplete'])
  })

  it('checkout.session.completed does not write incomplete over a pro profile', async () => {
    mockRetrieveSubscription.mockResolvedValue(subscription('incomplete'))
    await post(
      makeEvent('checkout.session.completed', {
        id: 'cs_1',
        mode: 'subscription',
        subscription: 'sub_1',
        metadata: { userId: SUPABASE_UUID },
      }),
    )
    expect(statusWrites()).toEqual([])
  })

  it('checkout.session.completed still writes incomplete over a free profile', async () => {
    profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'free' }
    mockRetrieveSubscription.mockResolvedValue(subscription('incomplete'))
    await post(
      makeEvent('checkout.session.completed', {
        id: 'cs_1',
        mode: 'subscription',
        subscription: 'sub_1',
        metadata: { userId: SUPABASE_UUID },
      }),
    )
    expect(statusWrites()).toEqual(['incomplete'])
  })

  it('customer.subscription.updated does not write incomplete over a pro profile either', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('incomplete')))
    expect(statusWrites()).toEqual([])
  })

  it('a live first event still grants pro', async () => {
    profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'free' }
    await post(makeEvent('customer.subscription.created', subscription('trialing')))
    expect(statusWrites()).toEqual(['pro'])
  })
})

// ═══════════════════════════════════════════════════════════════════════
// D11
// ═══════════════════════════════════════════════════════════════════════

describe('invoice.paid arriving after the subscription has ended', () => {
  function paidInvoice(): Stripe.Invoice {
    return {
      id: 'in_late',
      object: 'invoice',
      customer: 'cus_1',
      amount_paid: 399,
      currency: 'gbp',
      subscription: 'sub_1',
      lines: { data: [{ price: { id: 'price_monthly' } }] },
    } as unknown as Stripe.Invoice
  }

  it.each<Stripe.Subscription.Status>(['canceled', 'incomplete_expired', 'unpaid'])(
    'does not re-grant pro when Stripe now says the subscription is %s',
    async (status) => {
      profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'cancelled' }
      mockRetrieveSubscription.mockResolvedValue(subscription(status))
      const res = await post(makeEvent('invoice.paid', paidInvoice()))
      expect(res.status).toBe(200)
      expect(statusWrites()).toEqual([])
    },
  )

  it('says why', async () => {
    profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'cancelled' }
    mockRetrieveSubscription.mockResolvedValue(subscription('canceled'))
    await post(makeEvent('invoice.paid', paidInvoice()))
    expect(loggedLines(warnSpy).some((l) => l.includes('STALE_INVOICE_PAID_IGNORED'))).toBe(true)
  })

  it('still grants pro when the subscription is live', async () => {
    profileRow = { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'free' }
    mockRetrieveSubscription.mockResolvedValue(subscription('active'))
    await post(makeEvent('invoice.paid', paidInvoice()))
    expect(statusWrites()).toEqual(['pro'])
  })
})
