import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * The Stripe webhook must actually record the subscription.
 *
 * THE DEFECT
 * ──────────
 * The webhook resolved the customer to a SUPABASE auth uuid - from
 * `subscription.metadata.userId`, or from a `profiles` lookup by
 * `stripe_customer_id` - and handed it to
 * `prisma.subscription.upsert({ where: { userId } })`. `Subscription.userId`
 * is a foreign key to `User.id`, a cuid. The upsert threw, the catch
 * swallowed it with a line saying the row "can be back-filled", and for every
 * customer with no Prisma `User` row - 192 of 200 accounts on 2026-09-17 - no
 * `Subscription` row was ever written. A real annual subscriber had
 * `profiles.subscription_status = 'pro'` and zero Subscription rows, so
 * `/api/me/entitlements` served her the free tier.
 *
 * These tests pin the three properties that fix has to keep:
 *   1. the row is written against the PRISMA user id, resolved through the
 *      identity layer - never the Supabase uuid;
 *   2. a failure is LOUD - a greppable marker in the log and a Sentry
 *      exception - because being quiet is how this survived for months;
 *   3. a failure still does not fail the webhook, because Stripe retries a
 *      non-2xx for three days and the other handlers on the same event are
 *      not idempotent.
 */

// ─── Identity layer ─────────────────────────────────────────────────────

class IdentityUnresolved extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'IdentityUnresolved'
  }
}
class IdentityConflict extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'IdentityConflict'
  }
}

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'

const mockRequirePrismaUserId = vi.fn(async (_supabaseUserId: string) => PRISMA_CUID)

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: (id: string) => mockRequirePrismaUserId(id),
  IdentityUnresolved,
  IdentityConflict,
}))

// ─── Prisma ─────────────────────────────────────────────────────────────

interface UpsertArgs {
  where: { userId: string }
  create: Record<string, unknown>
  update: Record<string, unknown>
}
interface WhereArgs {
  where: { userId: string }
  data?: Record<string, unknown>
}
interface ExistingSubRow {
  id: string
  plan: string
  isTeacherPlan: boolean
  grandfatheredPriceMinor: number | null
}

const mockSubscriptionUpsert = vi.fn(
  async (_args: UpsertArgs): Promise<{ id: string }> => ({ id: 'sub_row_1' }),
)
const mockSubscriptionFindUnique = vi.fn(
  async (_args: WhereArgs): Promise<ExistingSubRow | null> => null,
)
const mockSubscriptionUpdate = vi.fn(
  async (_args: WhereArgs): Promise<{ id: string }> => ({ id: 'sub_row_1' }),
)

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: (args: UpsertArgs) => mockSubscriptionUpsert(args),
      findUnique: (args: WhereArgs) => mockSubscriptionFindUnique(args),
      update: (args: WhereArgs) => mockSubscriptionUpdate(args),
    },
  },
}))

// ─── Sentry ─────────────────────────────────────────────────────────────

const mockCaptureException = vi.fn()
const mockCaptureMessage = vi.fn()

vi.mock('@sentry/nextjs', () => ({
  captureException: (...args: unknown[]) => mockCaptureException(...(args as [])),
  captureMessage: (...args: unknown[]) => mockCaptureMessage(...(args as [])),
}))

// ─── Stripe ─────────────────────────────────────────────────────────────

const mockConstructEvent = vi.fn()
const mockRetrieveSubscription = vi.fn()
const mockRetrieveCustomer = vi.fn(async () => ({ deleted: false, email: 'payer@example.com' }))
// What ELSE the customer holds. Empty by default: most customers have one
// subscription, and the revocation handlers must behave exactly as before for
// them. Tests that care set this explicitly.
const mockListSubscriptions = vi.fn(async () => ({ data: [] as unknown[] }))

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...args: unknown[]) => mockConstructEvent(...(args as [])) },
    subscriptions: {
      retrieve: (...args: unknown[]) => mockRetrieveSubscription(...(args as [])),
      list: (...args: unknown[]) => mockListSubscriptions(...(args as [])),
    },
    customers: { retrieve: (...args: unknown[]) => mockRetrieveCustomer(...(args as [])) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: () => false,
}))

// ─── Supabase ───────────────────────────────────────────────────────────

function createSupabaseMock() {
  const updateInFn = vi.fn(() => ({ error: null, count: 0 }))
  const updateEqFn = vi.fn(() => ({ error: null, in: updateInFn }))
  const updateFn = vi.fn(() => ({ eq: updateEqFn }))

  const singleFn = vi.fn(() => ({
    data: { id: SUPABASE_UUID, email: 'payer@example.com', subscription_status: 'pro' },
    error: null,
  }))
  const inFn = vi.fn(() => ({ single: vi.fn(() => ({ data: null, error: null })) }))
  const selectEqFn = vi.fn(() => ({ single: singleFn, in: inFn }))
  const selectFn = vi.fn(() => ({ eq: selectEqFn }))

  const insertFn = vi.fn(() => ({ error: null }))

  const webhookEventsChain = {
    select: vi.fn(() => ({
      eq: vi.fn(() => ({ single: vi.fn(() => ({ data: null, error: null })) })),
    })),
    insert: insertFn,
  }

  const fromFn = vi.fn((table: string) => {
    if (table === 'webhook_events') return webhookEventsChain
    return {
      update: updateFn,
      select: selectFn,
      upsert: vi.fn(() => ({ error: null })),
      insert: insertFn,
    }
  })

  return { from: fromFn }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => supabaseMock,
}))

vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

// ─── Fixtures ───────────────────────────────────────────────────────────

function makeSubscription(overrides: Record<string, unknown> = {}): Stripe.Subscription {
  return {
    id: 'sub_stripe_123',
    object: 'subscription',
    customer: 'cus_stripe_123',
    status: 'trialing',
    trial_end: Math.floor(Date.UTC(2026, 8, 15) / 1000),
    current_period_start: Math.floor(Date.UTC(2026, 8, 8) / 1000),
    current_period_end: Math.floor(Date.UTC(2027, 8, 8) / 1000),
    metadata: { userId: SUPABASE_UUID },
    items: { data: [{ price: { id: 'price_annual', recurring: { interval: 'year' } } }] },
    ...overrides,
  } as unknown as Stripe.Subscription
}

function makeEvent(type: string, data: unknown): Stripe.Event {
  return {
    id: 'evt_test_1',
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

function buildRequest(body = '{}'): NextRequest {
  return new NextRequest('http://localhost/api/stripe/webhook', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json', 'stripe-signature': 'sig' }),
    body,
  })
}

let errorSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  supabaseMock = createSupabaseMock()
  mockRequirePrismaUserId.mockResolvedValue(PRISMA_CUID)
  mockSubscriptionUpsert.mockResolvedValue({ id: 'sub_row_1' })
  mockSubscriptionFindUnique.mockResolvedValue(null)
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  process.env.NEXT_PUBLIC_SITE_URL = 'https://theenglishhub.app'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
})

const MARKER = 'BILLING_SUBSCRIPTION_UNRECORDED '

function loggedMarkerPayloads(): Record<string, unknown>[] {
  const calls = errorSpy.mock.calls as unknown as unknown[][]
  return calls
    .map((call) => (typeof call[0] === 'string' ? call[0] : ''))
    .filter((line) => line.startsWith(MARKER))
    .map((line) => JSON.parse(line.slice(MARKER.length)) as Record<string, unknown>)
}

// ═══════════════════════════════════════════════════════════════════════
// The billing module
// ═══════════════════════════════════════════════════════════════════════

describe('syncStripeSubscriptionToPrisma', () => {
  it('writes the row against the Prisma User.id, never the Supabase uuid', async () => {
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')

    const result = await syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: makeSubscription(),
      source: 'customer.subscription.created',
      eventId: 'evt_1',
    })

    expect(result).toEqual({ ok: true, prismaUserId: PRISMA_CUID })
    expect(mockRequirePrismaUserId).toHaveBeenCalledWith(SUPABASE_UUID)

    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.where.userId).toBe(PRISMA_CUID)
    expect(args.create.userId).toBe(PRISMA_CUID)
    // The uuid must not leak into the write in any position.
    expect(JSON.stringify(args)).not.toContain(SUPABASE_UUID)
  })

  it('records the plan and status read off the Stripe object', async () => {
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')

    await syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: makeSubscription(),
      source: 'customer.subscription.created',
    })

    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.create.plan).toBe('ANNUAL')
    expect(args.create.status).toBe('TRIALING')
    expect(args.create.platform).toBe('WEB')
    expect(args.create.stripeSubscriptionId).toBe('sub_stripe_123')
    expect(args.create.stripeCustomerId).toBe('cus_stripe_123')
  })

  it('is loud but not fatal when the identity cannot be resolved', async () => {
    mockRequirePrismaUserId.mockRejectedValueOnce(
      new IdentityUnresolved('No Prisma user and no Supabase auth record.'),
    )
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')

    const result = await syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: makeSubscription(),
      source: 'customer.subscription.created',
      eventId: 'evt_9',
    })

    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('identity_unresolved')
    expect(mockSubscriptionUpsert).not.toHaveBeenCalled()

    // Loud in the log, with enough to reconcile the row by hand.
    const [payload] = loggedMarkerPayloads()
    expect(payload).toBeDefined()
    expect(payload.reason).toBe('identity_unresolved')
    expect(payload.supabaseUserId).toBe(SUPABASE_UUID)
    expect(payload.stripeCustomerId).toBe('cus_stripe_123')
    expect(payload.stripeSubscriptionId).toBe('sub_stripe_123')
    expect(payload.plan).toBe('ANNUAL')
    expect(payload.prismaStatus).toBe('TRIALING')
    expect(payload.currentPeriodEnd).toBe('2027-09-08T00:00:00.000Z')
    expect(payload.eventId).toBe('evt_9')
    // And it says what it means, rather than calling itself back-fillable.
    expect(String(payload.impact)).toContain('reads as a free user')

    // Loud in Sentry too.
    expect(mockCaptureException).toHaveBeenCalledTimes(1)
    const opts = mockCaptureException.mock.calls[0][1] as {
      level: string
      tags: Record<string, string>
    }
    expect(opts.level).toBe('error')
    expect(opts.tags.defect).toBe('subscription-unrecorded')
  })

  it('distinguishes an identity conflict, which needs a human', async () => {
    mockRequirePrismaUserId.mockRejectedValueOnce(
      new IdentityConflict('Linked to a different Supabase user.'),
    )
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')

    const result = await syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: makeSubscription(),
      source: 'customer.subscription.updated',
    })

    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('identity_conflict')
    expect(loggedMarkerPayloads()[0]?.reason).toBe('identity_conflict')
  })

  it('is loud but not fatal when the row write itself fails', async () => {
    mockSubscriptionUpsert.mockRejectedValueOnce(new Error('FK violation'))
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')

    const result = await syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: makeSubscription(),
      source: 'customer.subscription.created',
    })

    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('row_write_failed')
    expect(loggedMarkerPayloads()[0]?.reason).toBe('row_write_failed')
    expect(mockCaptureException).toHaveBeenCalledTimes(1)
  })

  it('does not overwrite a stored period when Stripe sends none', async () => {
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')

    await syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: makeSubscription({
        current_period_start: undefined,
        current_period_end: undefined,
      }),
      source: 'customer.subscription.updated',
    })

    const args = mockSubscriptionUpsert.mock.calls[0][0]
    // The create branch must supply both - the columns are NOT NULL.
    expect(args.create.currentPeriodStart).toBeInstanceOf(Date)
    expect(args.create.currentPeriodEnd).toBeInstanceOf(Date)
    // The update branch must leave the real stored dates alone.
    expect(args.update).not.toHaveProperty('currentPeriodStart')
    expect(args.update).not.toHaveProperty('currentPeriodEnd')
  })
})

describe('readSubscriptionFacts', () => {
  it('maps Stripe statuses onto the Prisma enum, failing closed on the unknown', async () => {
    const { mapStripeToPrismaStatus } = await import('@/lib/billing/subscription-sync')
    expect(mapStripeToPrismaStatus('active')).toBe('ACTIVE')
    expect(mapStripeToPrismaStatus('trialing')).toBe('TRIALING')
    expect(mapStripeToPrismaStatus('past_due')).toBe('PAST_DUE')
    expect(mapStripeToPrismaStatus('unpaid')).toBe('PAST_DUE')
    expect(mapStripeToPrismaStatus('incomplete')).toBe('PAST_DUE')
    expect(mapStripeToPrismaStatus('canceled')).toBe('CANCELLED')
    expect(mapStripeToPrismaStatus('paused')).toBe('PAUSED')
    expect(mapStripeToPrismaStatus('something_new' as never)).toBe('PAST_DUE')
  })

  it('sets cancelledAt only on a genuinely cancelled subscription', async () => {
    const { readSubscriptionFacts } = await import('@/lib/billing/subscription-sync')

    const live = readSubscriptionFacts(makeSubscription({ ended_at: 1_700_000_000 }))
    expect(live.cancelledAt).toBeNull()

    const gone = readSubscriptionFacts(
      makeSubscription({ status: 'canceled', ended_at: 1_700_000_000 }),
    )
    expect(gone.cancelledAt?.toISOString()).toBe(new Date(1_700_000_000 * 1000).toISOString())
  })

  it('defaults to MONTHLY when the payload carries no recurring interval', async () => {
    const { readSubscriptionFacts } = await import('@/lib/billing/subscription-sync')
    expect(readSubscriptionFacts(makeSubscription({ items: undefined })).plan).toBe('MONTHLY')
  })
})

// ═══════════════════════════════════════════════════════════════════════
// The webhook paths
// ═══════════════════════════════════════════════════════════════════════

describe('Stripe webhook records the subscription on every lifecycle path', () => {
  async function post(event: Stripe.Event): Promise<Response> {
    mockConstructEvent.mockReturnValue(event)
    const { POST } = await import('@/app/api/stripe/webhook/route')
    return POST(buildRequest())
  }

  it('checkout.session.completed writes the row against the Prisma id', async () => {
    mockRetrieveSubscription.mockResolvedValue(makeSubscription())

    const res = await post(
      makeEvent('checkout.session.completed', {
        id: 'cs_1',
        mode: 'subscription',
        subscription: 'sub_stripe_123',
        metadata: { userId: SUPABASE_UUID },
      }),
    )

    expect(res.status).toBe(200)
    expect(mockRequirePrismaUserId).toHaveBeenCalledWith(SUPABASE_UUID)
    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.where.userId).toBe(PRISMA_CUID)
  })

  it('customer.subscription.created writes the row against the Prisma id', async () => {
    const res = await post(makeEvent('customer.subscription.created', makeSubscription()))

    expect(res.status).toBe(200)
    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.where.userId).toBe(PRISMA_CUID)
  })

  it('customer.subscription.updated writes the row against the Prisma id', async () => {
    const res = await post(
      makeEvent('customer.subscription.updated', makeSubscription({ status: 'active' })),
    )

    expect(res.status).toBe(200)
    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.where.userId).toBe(PRISMA_CUID)
    expect(args.update.status).toBe('ACTIVE')
  })

  it('customer.subscription.deleted writes the row against the Prisma id', async () => {
    const res = await post(
      makeEvent(
        'customer.subscription.deleted',
        makeSubscription({ status: 'canceled', ended_at: 1_700_000_000 }),
      ),
    )

    expect(res.status).toBe(200)
    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.where.userId).toBe(PRISMA_CUID)
    expect(args.update.status).toBe('CANCELLED')
  })

  it('resolves the customer through profiles when metadata carries no userId', async () => {
    const res = await post(
      makeEvent('customer.subscription.updated', makeSubscription({ metadata: {} })),
    )

    expect(res.status).toBe(200)
    // The profiles fallback yields a Supabase uuid, which must still be
    // translated rather than written straight to Prisma.
    expect(mockRequirePrismaUserId).toHaveBeenCalledWith(SUPABASE_UUID)
    const args = mockSubscriptionUpsert.mock.calls[0][0]
    expect(args.where.userId).toBe(PRISMA_CUID)
  })

  it('still returns 200 when the row cannot be written, so Stripe does not retry', async () => {
    mockRequirePrismaUserId.mockRejectedValue(new IdentityUnresolved('gone'))

    const res = await post(makeEvent('customer.subscription.created', makeSubscription()))

    expect(res.status).toBe(200)
    expect(loggedMarkerPayloads()[0]?.reason).toBe('identity_unresolved')
  })

  it('captures the grandfathered price against the Prisma id, not the uuid', async () => {
    mockRetrieveSubscription.mockResolvedValue(makeSubscription())
    mockSubscriptionFindUnique.mockResolvedValue({
      id: 'sub_row_1',
      plan: 'ANNUAL',
      isTeacherPlan: false,
      grandfatheredPriceMinor: null,
    } as never)

    await post(
      makeEvent('checkout.session.completed', {
        id: 'cs_1',
        mode: 'subscription',
        subscription: 'sub_stripe_123',
        metadata: { userId: SUPABASE_UUID },
      }),
    )

    expect(mockSubscriptionFindUnique).toHaveBeenCalledWith({ where: { userId: PRISMA_CUID } })
    const updateArgs = mockSubscriptionUpdate.mock.calls[0][0]
    expect(updateArgs.where.userId).toBe(PRISMA_CUID)
  })
})

// ═══════════════════════════════════════════════════════════════════════
// The trial-ending notice a paying subscriber receives
// ═══════════════════════════════════════════════════════════════════════

describe('customer.subscription.trial_will_end email', () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    process.env.RESEND_API_KEY = 'rk_test'
    fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response('{}', { status: 200 }) as never)
  })

  afterEach(() => {
    fetchSpy.mockRestore()
    delete process.env.RESEND_API_KEY
  })

  async function sendTrialWillEnd(): Promise<string> {
    mockConstructEvent.mockReturnValue(
      makeEvent('customer.subscription.trial_will_end', makeSubscription()),
    )
    const { POST } = await import('@/app/api/stripe/webhook/route')
    await POST(buildRequest())

    const calls = fetchSpy.mock.calls as unknown as unknown[][]
    const call = calls.find((c) => String(c[0]).includes('api.resend.com'))
    expect(call).toBeDefined()
    const body = JSON.parse((call![1] as { body: string }).body) as { html: string }
    return body.html
  }

  it('names the single payment instead of only saying the subscription "will begin"', async () => {
    const html = await sendTrialWillEnd()

    // The wording that made a paying annual subscriber write in believing she
    // was about to be charged a second time.
    expect(html).not.toContain('your subscription will automatically begin')
    expect(html).toContain('the first payment for the plan you chose')
    // Scoped to THIS subscription, which is all this handler can see.
    expect(html).toContain('the only payment this subscription takes')
  })

  it('does not promise the charge is not a duplicate, because nothing checks that', async () => {
    const html = await sendTrialWillEnd()

    // Neither /api/stripe/checkout nor /api/promo/redeem looks at whether the
    // customer already holds a live subscription, so a second subscription is
    // possible and this handler cannot see it. An unconditional "this is not
    // an extra charge" would be wrong for exactly the customer who needs it
    // to be right. Say nothing about other subscriptions; invite the report.
    expect(html).not.toContain('not an extra charge')
    expect(html).not.toMatch(/anything you have already paid/i)
    expect(html).toContain('already hold another subscription')
    expect(html).toContain('refund anything that has been taken twice')
  })

  it('points at the real billing page and a real support address', async () => {
    const html = await sendTrialWillEnd()
    expect(html).toContain('https://theenglishhub.app/account/billing')
    expect(html).toContain('support@theenglishhub.app')
  })

  it('states only the trial end date Stripe gave us, and invents no amount', async () => {
    const html = await sendTrialWillEnd()
    expect(html).toContain('Tuesday, 15 September 2026')
    // No price is asserted - the subscription object is not the invoice.
    expect(html).not.toMatch(/[£$€]\s?\d/)
  })
})

// ═══════════════════════════════════════════════════════════════════════
// A failing DUPLICATE must not revoke a paid subscription
//
// `profiles.subscription_status` is ONE field per person. Both revocation
// handlers used to write it keyed on the CUSTOMER, never asking which
// subscription the event was about.
//
// On 8 Sept 2026 a customer acquired two Teachers Annual subscriptions. One
// took GBP 67.99. The other never succeeded, and every time it failed it took
// away the access she had paid for:
//
//   15 Sept 18:44  duplicate fails           -> past_due
//   16 Sept 21:15  the paid one settles      -> pro
//   17 Sept 20:44  duplicate's retry fails   -> past_due
//   18 Sept 04:18  duplicate's dunning ends  -> cancelled
//
// She was locked out of a subscription Stripe showed Active until 2027, and
// we emailed her twice telling her to update her payment method. The first
// person to notice was her.
// ═══════════════════════════════════════════════════════════════════════

describe('a failing duplicate does not revoke the subscription that was paid for', () => {
  const SAME_PRICE = 'price_annual'

  function liveSubscriptionOnSamePrice(id = 'sub_the_paid_one') {
    return {
      id,
      status: 'active',
      items: { data: [{ price: { id: SAME_PRICE, product: 'prod_x' } }] },
    }
  }

  function failedInvoice(subscriptionId = 'sub_the_duplicate') {
    return {
      id: 'in_dup_0015',
      customer: 'cus_stripe_123',
      subscription: subscriptionId,
      amount_due: 6799,
      currency: 'gbp',
      lines: { data: [{ price: { id: SAME_PRICE } }] },
    } as unknown as Stripe.Invoice
  }

  function profileWrites() {
    // Every .update({...}) that reached the profiles table.
    const fromCalls = (supabaseMock.from as ReturnType<typeof vi.fn>).mock.results
    return fromCalls
      .map((r) => r.value as { update?: ReturnType<typeof vi.fn> })
      .filter((v) => typeof v.update === 'function')
      .flatMap((v) => (v.update as ReturnType<typeof vi.fn>).mock.calls.map((c) => c[0]))
  }

  it('invoice.payment_failed leaves the entitlement alone when another live subscription covers it', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [liveSubscriptionOnSamePrice()] })
    mockConstructEvent.mockReturnValue(makeEvent('invoice.payment_failed', failedInvoice()))

    const { POST } = await import('@/app/api/stripe/webhook/route')
    const res = await POST(buildRequest())

    expect(res.status).toBe(200)
    const writes = profileWrites()
    expect(writes.some((w) => w?.subscription_status === 'past_due')).toBe(false)
    // The coverage check actually ran, and excluded the failing subscription
    // itself - otherwise it would "cover" itself and nothing would ever be
    // revoked, turning this fix into a worse bug than the one it closes.
    expect(mockListSubscriptions).toHaveBeenCalled()
    const listArgs = (mockListSubscriptions.mock.calls as unknown as unknown[][])[0]?.[0] as
      | { customer?: string }
      | undefined
    expect(listArgs?.customer).toBe('cus_stripe_123')
  })

  it('invoice.payment_failed still revokes when the failure is the only subscription', async () => {
    // The control. Without this, a fix that simply stopped writing past_due
    // would pass the test above and break real dunning.
    mockListSubscriptions.mockResolvedValue({ data: [] })
    mockConstructEvent.mockReturnValue(makeEvent('invoice.payment_failed', failedInvoice()))

    const { POST } = await import('@/app/api/stripe/webhook/route')
    await POST(buildRequest())

    expect(profileWrites().some((w) => w?.subscription_status === 'past_due')).toBe(true)
  })

  it('customer.subscription.deleted leaves the entitlement alone when another live subscription covers it', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [liveSubscriptionOnSamePrice()] })
    mockConstructEvent.mockReturnValue(
      makeEvent(
        'customer.subscription.deleted',
        makeSubscription({ id: 'sub_the_duplicate', status: 'canceled' }),
      ),
    )

    const { POST } = await import('@/app/api/stripe/webhook/route')
    await POST(buildRequest())

    const writes = profileWrites()
    expect(writes.some((w) => w?.subscription_status === 'cancelled')).toBe(false)
    // The end date must not move either. handleSubscriptionDeleted sets it from
    // ended_at, which for an immediate cancellation is now - and the stale-event
    // guard on customer.subscription.updated then refuses to re-grant Pro once
    // that date has passed. Writing the duplicate's end date here is what made
    // the obvious repair (touching the good subscription in the dashboard)
    // silently fail with "Refusing to re-grant Pro".
    expect(writes.some((w) => 'subscription_end_date' in (w ?? {}))).toBe(false)
  })

  it('customer.subscription.deleted still cancels a genuine last subscription', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [] })
    mockConstructEvent.mockReturnValue(
      makeEvent('customer.subscription.deleted', makeSubscription({ status: 'canceled' })),
    )

    const { POST } = await import('@/app/api/stripe/webhook/route')
    await POST(buildRequest())

    expect(profileWrites().some((w) => w?.subscription_status === 'cancelled')).toBe(true)
  })

  it('excludes the failing subscription itself from the coverage check', async () => {
    // Otherwise the subscription being cancelled would "cover" itself and
    // nothing would ever be revoked - the fix turning into a worse bug.
    mockListSubscriptions.mockResolvedValue({ data: [] })
    mockConstructEvent.mockReturnValue(
      makeEvent('customer.subscription.deleted', makeSubscription({ status: 'canceled' })),
    )

    const { POST } = await import('@/app/api/stripe/webhook/route')
    await POST(buildRequest())

    expect(profileWrites().some((w) => w?.subscription_status === 'cancelled')).toBe(true)
  })
})

// ═══════════════════════════════════════════════════════════════════════
// Structural guard
// ═══════════════════════════════════════════════════════════════════════

describe('the webhook has no second billing writer', () => {
  it('routes every Subscription write through src/lib/billing', () => {
    const source = readFileSync(join(process.cwd(), 'src/app/api/stripe/webhook/route.ts'), 'utf8')
    // A local upsert is how the uuid got into Prisma in the first place.
    expect(source).not.toMatch(/prisma\s*\.\s*subscription\s*\.\s*upsert/)
    expect(source).toContain("from '@/lib/billing/subscription-sync'")
  })
})
