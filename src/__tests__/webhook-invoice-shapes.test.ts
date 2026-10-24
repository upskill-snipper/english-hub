import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D2 - which subscription an invoice belongs to.
 *
 * Under the pinned `2026-02-25.clover` version an Invoice has no top-level
 * `subscription`; it is `parent.subscription_details.subscription`
 * (node_modules/stripe/types/Invoices.d.ts:336, :1041, :1067). Both invoice
 * handlers read the old field. So under the clover shape:
 *
 *   - invoice.paid found no subscription, retrieved nothing, granted nothing
 *     and recorded nothing. Production on 20 October 2026 held 19 invoice.paid
 *     deliveries in the webhook journal and paymentCount 0 on every row.
 *   - invoice.payment_failed could not exclude the failing subscription from
 *     the coverage check, so the failing subscription "covered" itself: every
 *     failure was logged as a duplicate's and the customer was never told.
 *
 * The endpoint's payload version is a dashboard setting nobody here can see,
 * so every fixture comes in both shapes.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const PRICE = 'price_monthly'
const PERIOD_END = Math.floor(Date.UTC(2026, 10, 19) / 1000)

// ─── Identity, Prisma, Sentry ───────────────────────────────────────────

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => PRISMA_CUID,
  tryPrismaUserId: async () => PRISMA_CUID,
  IdentityUnresolved: class extends Error {},
  IdentityConflict: class extends Error {},
}))

interface UpsertArgs {
  where: { userId: string }
  create: Record<string, unknown>
  update: Record<string, unknown>
}
const mockUpsert = vi.fn(async (_args: UpsertArgs) => ({ id: 'row_1' }))
const mockFindUnique = vi.fn(async () => null as Record<string, unknown> | null)

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: (args: UpsertArgs) => mockUpsert(args),
      findUnique: () => mockFindUnique(),
      update: vi.fn(async () => ({ id: 'row_1' })),
    },
  },
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

// ─── Stripe ─────────────────────────────────────────────────────────────

const mockConstructEvent = vi.fn()
const mockRetrieveSubscription = vi.fn()
const mockListSubscriptions = vi.fn(async () => ({ data: [] as unknown[] }))

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: {
      retrieve: (...a: unknown[]) => mockRetrieveSubscription(...(a as [])),
      list: (...a: unknown[]) => mockListSubscriptions(...(a as [])),
    },
    customers: { retrieve: async () => ({ deleted: false, email: 'p@example.com' }) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: () => false,
}))

// ─── Supabase ───────────────────────────────────────────────────────────

let profileUpdates: Record<string, unknown>[] = []

function createSupabaseMock() {
  const profiles = {
    update: (payload: Record<string, unknown>) => {
      profileUpdates.push(payload)
      return { eq: () => ({ error: null, in: () => ({ error: null, count: 0 }) }) }
    },
    select: () => ({
      eq: () => ({
        single: async () => ({
          data: { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'pro' },
          error: null,
        }),
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

// ─── Fixtures in both shapes ────────────────────────────────────────────

type Shape = 'old' | 'clover'

/** The live subscription the invoice belongs to, as the pinned client returns it. */
function liveSubscription(id = 'sub_1'): Stripe.Subscription {
  return {
    id,
    object: 'subscription',
    customer: 'cus_1',
    status: 'active',
    metadata: { userId: SUPABASE_UUID },
    items: {
      data: [
        {
          id: 'si_1',
          current_period_start: PERIOD_END - 30 * 86_400,
          current_period_end: PERIOD_END,
          price: { id: PRICE, recurring: { interval: 'month' }, product: 'prod_1' },
        },
      ],
    },
  } as unknown as Stripe.Subscription
}

/** An invoice naming its subscription in the given shape. */
function invoice(
  shape: Shape,
  subscriptionId: string | null,
  over: Record<string, unknown> = {},
): Stripe.Invoice {
  const naming =
    shape === 'old'
      ? { subscription: subscriptionId }
      : {
          parent: subscriptionId
            ? {
                type: 'subscription_details',
                subscription_details: { subscription: subscriptionId },
              }
            : null,
        }
  // The line items in the shape's own form. Before clover a line carries
  // `price` (a Price object); under clover it carries `pricing.price_details`
  // with the price as a string id and the product as a bare id
  // (InvoiceLineItems.d.ts:81, :272-293). Until 23 October 2026 the clover
  // fixture carried an old-shape line, so the clover read of pricesOnInvoice -
  // which decides whether the customer is told their payment failed - was
  // never exercised.
  const lines =
    shape === 'old'
      ? { data: [{ price: { id: PRICE } }] }
      : {
          data: [
            {
              pricing: {
                type: 'price_details',
                price_details: { price: PRICE, product: 'prod_1' },
                unit_amount_decimal: '399',
              },
            },
          ],
        }
  return {
    id: 'in_1',
    object: 'invoice',
    customer: 'cus_1',
    amount_due: 399,
    amount_paid: 399,
    currency: 'gbp',
    lines,
    ...naming,
    ...over,
  } as unknown as Stripe.Invoice
}

/** The event, labelled with the API version whose shape the fixture is in. */
function makeEvent(type: string, data: unknown, shape: Shape = 'old'): Stripe.Event {
  return {
    id: `evt_${Math.random().toString(36).slice(2)}`,
    object: 'event',
    api_version: shape === 'old' ? '2023-10-16' : '2026-02-25.clover',
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
let fetchSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  profileUpdates = []
  supabaseMock = createSupabaseMock()
  mockFindUnique.mockResolvedValue(null)
  mockListSubscriptions.mockResolvedValue({ data: [] })
  mockRetrieveSubscription.mockResolvedValue(liveSubscription())
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  process.env.RESEND_API_KEY = 'rk_test'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  fetchSpy = vi
    .spyOn(globalThis, 'fetch')
    .mockResolvedValue(new Response('{}', { status: 200 }) as never)
})

afterEach(() => {
  errorSpy.mockRestore()
  warnSpy.mockRestore()
  fetchSpy.mockRestore()
  delete process.env.RESEND_API_KEY
})

const emailSent = () =>
  (fetchSpy.mock.calls as unknown as unknown[][]).some((c) => String(c[0]).includes('resend'))

// ═══════════════════════════════════════════════════════════════════════

describe.each<Shape>(['old', 'clover'])('invoice.paid in the %s shape', (shape) => {
  it('finds the subscription and grants pro', async () => {
    const res = await post(makeEvent('invoice.paid', invoice(shape, 'sub_1'), shape))
    expect(res.status).toBe(200)
    expect(mockRetrieveSubscription).toHaveBeenCalledWith('sub_1')
    expect(profileUpdates.some((u) => u.subscription_status === 'pro')).toBe(true)
  })

  it('records the payment on the Prisma row', async () => {
    await post(makeEvent('invoice.paid', invoice(shape, 'sub_1'), shape))
    const args = mockUpsert.mock.calls[0]?.[0]
    expect(args, 'the Prisma row must be written on a paid invoice').toBeDefined()
    expect(args!.where.userId).toBe(PRISMA_CUID)
    expect(args!.update.paymentCount).toEqual({ increment: 1 })
    expect(args!.create.paymentCount).toBe(1)
  })

  it('records the renewal period on the Prisma row', async () => {
    await post(makeEvent('invoice.paid', invoice(shape, 'sub_1'), shape))
    const args = mockUpsert.mock.calls[0]![0]
    expect((args.update.currentPeriodEnd as Date).toISOString()).toBe(
      new Date(PERIOD_END * 1000).toISOString(),
    )
  })

  it('does not count a zero-amount trial invoice as a payment', async () => {
    // paymentCount is read by src/lib/usage/trial-allowance.ts as evidence of
    // a card on file; a GBP 0 trial-start invoice must not supply it.
    await post(makeEvent('invoice.paid', invoice(shape, 'sub_1', { amount_paid: 0 }), shape))
    const args = mockUpsert.mock.calls[0]![0]
    expect(args.update).not.toHaveProperty('paymentCount')
    expect(args.create.paymentCount ?? 0).toBe(0)
  })
})

describe('invoice.paid with no subscription in either shape', () => {
  it('writes nothing and retrieves nothing', async () => {
    await post(makeEvent('invoice.paid', invoice('clover', null)))
    expect(mockRetrieveSubscription).not.toHaveBeenCalled()
    expect(profileUpdates).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
  })
})

describe.each<Shape>(['old', 'clover'])('invoice.payment_failed in the %s shape', (shape) => {
  it('excludes the failing subscription itself from the coverage check', async () => {
    // Stripe lists the failing subscription (it is live: past_due). If the
    // handler cannot read which subscription failed it cannot exclude it, the
    // subscription covers itself, and the failure is misfiled as a duplicate's
    // with no email to the customer.
    mockListSubscriptions.mockResolvedValue({
      data: [{ ...liveSubscription('sub_failing'), status: 'past_due' }],
    })
    const res = await post(
      makeEvent('invoice.payment_failed', invoice(shape, 'sub_failing'), shape),
    )
    expect(res.status).toBe(200)
    const listArgs = (mockListSubscriptions.mock.calls as unknown as unknown[][])[0]?.[0] as {
      customer?: string
    }
    expect(listArgs?.customer).toBe('cus_1')
    expect(emailSent(), 'the dunning email must reach the customer').toBe(true)
  })

  it('still stands down when ANOTHER live subscription covers the price', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [liveSubscription('sub_the_paid_one')] })
    await post(makeEvent('invoice.payment_failed', invoice(shape, 'sub_failing'), shape))
    expect(emailSent()).toBe(false)
  })
})
