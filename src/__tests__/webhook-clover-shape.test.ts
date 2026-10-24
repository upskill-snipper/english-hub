import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D1 - the period end under the clover API shape.
 *
 * `src/lib/stripe.ts` pins `2026-02-25.clover`. In that shape a Subscription
 * carries no `current_period_end`; the field lives on each subscription item.
 * Every handler read the top-level field, so a subscription RETRIEVED through
 * the pinned client (checkout.session.completed, invoice.paid) had no period
 * end at all, and the Prisma sync fell back to `now` for both period columns.
 * Production on 20 October 2026: `currentPeriodEnd` equal to
 * `currentPeriodStart` on six of seven Stripe-linked rows.
 *
 * The webhook PAYLOAD, however, follows the API version pinned on the endpoint
 * in the Stripe dashboard, which may still send the old field. So every
 * fixture here comes in both shapes, and the handlers must read either.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'

const PERIOD_START = Math.floor(Date.UTC(2026, 8, 19) / 1000)
const PERIOD_END = Math.floor(Date.UTC(2026, 9, 19) / 1000)
const PERIOD_END_ISO = new Date(PERIOD_END * 1000).toISOString()

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

/** Every profiles.update payload, in order. */
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

/** A live monthly subscription whose period is expressed in the given shape. */
function subscription(shape: Shape, over: Record<string, unknown> = {}): Stripe.Subscription {
  const item: Record<string, unknown> = {
    id: 'si_1',
    price: { id: 'price_monthly', recurring: { interval: 'month' } },
  }
  if (shape === 'clover') {
    item.current_period_start = PERIOD_START
    item.current_period_end = PERIOD_END
  }
  return {
    id: 'sub_1',
    object: 'subscription',
    customer: 'cus_1',
    status: 'active',
    metadata: { userId: SUPABASE_UUID },
    items: { data: [item] },
    ...(shape === 'old'
      ? { current_period_start: PERIOD_START, current_period_end: PERIOD_END }
      : {}),
    ...over,
  } as unknown as Stripe.Subscription
}

/** The event, labelled with the API version whose shape the fixture is in. */
function makeEvent(type: string, data: unknown, shape: Shape = 'clover'): Stripe.Event {
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

beforeEach(() => {
  vi.clearAllMocks()
  profileUpdates = []
  supabaseMock = createSupabaseMock()
  mockFindUnique.mockResolvedValue(null)
  mockListSubscriptions.mockResolvedValue({ data: [] })
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
  warnSpy.mockRestore()
})

const endDateWritten = () =>
  profileUpdates.find((u) => 'subscription_end_date' in u)?.subscription_end_date

// ═══════════════════════════════════════════════════════════════════════

describe.each<Shape>(['old', 'clover'])('period end read from the %s shape', (shape) => {
  it('checkout.session.completed writes the end date the gates will show', async () => {
    mockRetrieveSubscription.mockResolvedValue(subscription(shape))
    const res = await post(
      makeEvent(
        'checkout.session.completed',
        {
          id: 'cs_1',
          mode: 'subscription',
          subscription: 'sub_1',
          metadata: { userId: SUPABASE_UUID },
        },
        shape,
      ),
    )
    expect(res.status).toBe(200)
    expect(endDateWritten()).toBe(PERIOD_END_ISO)
  })

  it('customer.subscription.created writes the end date', async () => {
    // The created handler acts on Stripe's current state of the subscription
    // when it can get it; here Stripe answers with the same subscription.
    mockRetrieveSubscription.mockResolvedValue(subscription(shape))
    await post(makeEvent('customer.subscription.created', subscription(shape), shape))
    expect(endDateWritten()).toBe(PERIOD_END_ISO)
  })

  it('customer.subscription.updated writes the end date rather than nulling it', async () => {
    await post(makeEvent('customer.subscription.updated', subscription(shape), shape))
    expect(endDateWritten()).toBe(PERIOD_END_ISO)
  })

  it('customer.subscription.deleted falls back to the period end when ended_at is absent', async () => {
    await post(
      makeEvent(
        'customer.subscription.deleted',
        subscription(shape, { status: 'canceled', ended_at: null, cancel_at: null }),
        shape,
      ),
    )
    expect(endDateWritten()).toBe(PERIOD_END_ISO)
  })

  it('the Prisma row carries the real period, not today twice', async () => {
    await post(makeEvent('customer.subscription.updated', subscription(shape), shape))
    const args = mockUpsert.mock.calls[0]![0]
    expect((args.create.currentPeriodStart as Date).toISOString()).toBe(
      new Date(PERIOD_START * 1000).toISOString(),
    )
    expect((args.create.currentPeriodEnd as Date).toISOString()).toBe(PERIOD_END_ISO)
    expect((args.update.currentPeriodEnd as Date).toISOString()).toBe(PERIOD_END_ISO)
  })
})

describe('when neither shape carries a period', () => {
  const bare = () =>
    subscription('clover', { items: { data: [{ id: 'si_1', price: { id: 'price_monthly' } }] } })

  it('customer.subscription.updated leaves the stored end date alone instead of writing null', async () => {
    await post(makeEvent('customer.subscription.updated', bare()))
    const statusWrite = profileUpdates.find((u) => 'subscription_status' in u)
    expect(statusWrite).toBeDefined()
    expect(statusWrite).not.toHaveProperty('subscription_end_date')
  })

  it('the Prisma update leaves the stored period alone', async () => {
    await post(makeEvent('customer.subscription.updated', bare()))
    const args = mockUpsert.mock.calls[0]![0]
    expect(args.update).not.toHaveProperty('currentPeriodStart')
    expect(args.update).not.toHaveProperty('currentPeriodEnd')
  })
})
