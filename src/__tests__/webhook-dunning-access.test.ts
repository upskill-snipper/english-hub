import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D7 - a declined renewal does not revoke access on the spot.
 *
 * THE PRODUCT CHOICE (23 October 2026). The web gate reads
 * `profiles.subscription_status === 'pro'` exactly. `invoice.payment_failed`
 * wrote 'past_due' at once, and `customer.subscription.updated` mirrored
 * Stripe's past_due onto the same field, so the FIRST failed renewal attempt
 * removed web access while Stripe's own retry schedule was still running and
 * the dunning email promised "to avoid any interruption". A declined card is
 * usually an expired card or a bank's fraud check, and most are recovered by
 * a retry within days.
 *
 * So: access survives Stripe's retry window. past_due writes nothing to the
 * profile's status (the Prisma row still records PAST_DUE, which mobile
 * already treats as read-only grace). Access is revoked when Stripe gives up:
 * `customer.subscription.deleted`, or a status of `unpaid`. The founder can
 * reverse this by putting `past_due` back into the status map in
 * handleSubscriptionUpdated and the write back into the invoice handler.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const PRICE = 'price_monthly'
const PERIOD_END = Math.floor(Date.UTC(2026, 10, 19) / 1000)

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

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: (args: UpsertArgs) => mockUpsert(args),
      findUnique: vi.fn(async () => null),
      update: vi.fn(async () => ({ id: 'row_1' })),
    },
  },
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

const mockConstructEvent = vi.fn()
vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: { retrieve: vi.fn(), list: async () => ({ data: [] }) },
    customers: { retrieve: async () => ({ deleted: false, email: 'p@example.com' }) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: () => false,
}))

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

type Shape = 'old' | 'clover'

function subscription(status: Stripe.Subscription.Status): Stripe.Subscription {
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
          price: { id: PRICE, recurring: { interval: 'month' }, product: 'prod_1' },
        },
      ],
    },
  } as unknown as Stripe.Subscription
}

function failedInvoice(shape: Shape): Stripe.Invoice {
  return {
    id: 'in_1',
    object: 'invoice',
    customer: 'cus_1',
    amount_due: 399,
    amount_paid: 0,
    currency: 'gbp',
    lines: { data: [{ price: { id: PRICE } }] },
    ...(shape === 'old'
      ? { subscription: 'sub_1' }
      : {
          parent: { type: 'subscription_details', subscription_details: { subscription: 'sub_1' } },
        }),
  } as unknown as Stripe.Invoice
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
let fetchSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  profileUpdates = []
  supabaseMock = createSupabaseMock()
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

const statusWrites = () =>
  profileUpdates.filter((u) => 'subscription_status' in u).map((u) => u.subscription_status)
const emailSent = () =>
  (fetchSpy.mock.calls as unknown as unknown[][]).some((c) => String(c[0]).includes('resend'))

// ═══════════════════════════════════════════════════════════════════════

describe.each<Shape>(['old', 'clover'])('invoice.payment_failed (%s shape)', (shape) => {
  it('does not touch the web entitlement', async () => {
    const res = await post(makeEvent('invoice.payment_failed', failedInvoice(shape)))
    expect(res.status).toBe(200)
    expect(statusWrites()).toEqual([])
  })

  it('still tells the customer, and the email is now true about interruption', async () => {
    await post(makeEvent('invoice.payment_failed', failedInvoice(shape)))
    expect(emailSent()).toBe(true)
  })
})

describe('customer.subscription.updated with status past_due', () => {
  it('leaves the web entitlement as it was', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('past_due')))
    expect(statusWrites()).toEqual([])
  })

  it('still records PAST_DUE on the Prisma row, which mobile reads as grace', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('past_due')))
    const args = mockUpsert.mock.calls[0]?.[0]
    expect(args?.update.status).toBe('PAST_DUE')
  })

  it('still keeps the end date current', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('past_due')))
    expect(profileUpdates.some((u) => 'subscription_end_date' in u)).toBe(true)
  })
})

describe('when Stripe gives up', () => {
  it('customer.subscription.updated with status unpaid revokes', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('unpaid')))
    expect(statusWrites()).toEqual(['unpaid'])
  })

  it('customer.subscription.deleted revokes', async () => {
    await post(
      makeEvent('customer.subscription.deleted', {
        ...subscription('canceled'),
        ended_at: PERIOD_END,
      }),
    )
    expect(statusWrites()).toEqual(['cancelled'])
  })
})
