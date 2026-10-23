import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D3, D4, D5 - a dead duplicate must not touch the live subscription.
 *
 * `profiles.subscription_status` is one field per PERSON and the Prisma
 * `Subscription` row is one row per user. On 8 September 2026 a customer held
 * two Teachers Annual subscriptions; the duplicate failed, retried and was
 * cancelled, and each of those events revoked the access the paid one had
 * bought. `invoice.payment_failed` and `customer.subscription.deleted` were
 * taught to ask Stripe whether another live subscription covers the price.
 * `customer.subscription.updated` was not: it mirrored the duplicate's
 * past_due, unpaid or cancelled status straight onto the profile (D3, D4). And
 * both `.updated` and `.deleted` still wrote the duplicate over the Prisma
 * row, replacing the paid subscription's id, status and period with the dead
 * one's (D5).
 *
 * Two layers close this. The handlers run the same coverage check for every
 * non-live status and skip every write when covered. And the sync module
 * refuses, on its own evidence, to overwrite a live row with a dead
 * subscription of a different id, so the protection holds when Stripe cannot
 * be reached and the coverage check fails open.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const PRICE = 'price_teacher_annual'
const FUTURE = Math.floor(Date.UTC(2027, 8, 8) / 1000)
const PAST = Math.floor(Date.UTC(2026, 8, 19) / 1000)

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
interface ExistingRow {
  stripeSubscriptionId: string | null
  status: string
  currentPeriodEnd: Date
}
const mockUpsert = vi.fn(async (_args: UpsertArgs) => ({ id: 'row_1' }))
const mockFindUnique = vi.fn(async () => null as ExistingRow | null)

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
const mockListSubscriptions = vi.fn(async () => ({ data: [] as unknown[] }))

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: {
      retrieve: vi.fn(),
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
          data: {
            id: SUPABASE_UUID,
            email: 'p@example.com',
            subscription_status: 'pro',
            subscription_end_date: new Date(FUTURE * 1000).toISOString(),
          },
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

// ─── Fixtures ───────────────────────────────────────────────────────────

function subscription(
  id: string,
  status: Stripe.Subscription.Status,
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
          current_period_start: PAST,
          current_period_end: FUTURE,
          price: { id: PRICE, recurring: { interval: 'year' }, product: 'prod_1' },
        },
      ],
    },
    ...over,
  } as unknown as Stripe.Subscription
}

const THE_PAID_ONE = () => subscription('sub_the_paid_one', 'active')
const THE_DUPLICATE = (status: Stripe.Subscription.Status) =>
  subscription('sub_the_duplicate', status)

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

const statusWrites = () =>
  profileUpdates.filter((u) => 'subscription_status' in u).map((u) => u.subscription_status)

// ═══════════════════════════════════════════════════════════════════════
// customer.subscription.updated (D3, D4)
// ═══════════════════════════════════════════════════════════════════════

describe('customer.subscription.updated for a duplicate while another live subscription covers the price', () => {
  beforeEach(() => {
    mockListSubscriptions.mockResolvedValue({ data: [THE_PAID_ONE()] })
  })

  it.each<Stripe.Subscription.Status>(['past_due', 'unpaid', 'canceled', 'incomplete_expired'])(
    'does not write %s over the paid subscription on the profile',
    async (status) => {
      const res = await post(makeEvent('customer.subscription.updated', THE_DUPLICATE(status)))
      expect(res.status).toBe(200)
      expect(statusWrites()).toEqual([])
    },
  )

  it('asks Stripe about this customer and excludes the duplicate itself', async () => {
    await post(makeEvent('customer.subscription.updated', THE_DUPLICATE('unpaid')))
    const args = (mockListSubscriptions.mock.calls as unknown as unknown[][])[0]?.[0] as {
      customer?: string
    }
    expect(args?.customer).toBe('cus_1')
  })

  it('does not write the duplicate over the Prisma row of the live one', async () => {
    await post(makeEvent('customer.subscription.updated', THE_DUPLICATE('past_due')))
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('leaves the end date alone, so the stale-event guard cannot lock the customer out', async () => {
    await post(makeEvent('customer.subscription.updated', THE_DUPLICATE('canceled')))
    expect(profileUpdates.some((u) => 'subscription_end_date' in u)).toBe(false)
  })
})

describe('customer.subscription.updated when there is no other subscription', () => {
  it('still mirrors a terminal status, so real revocation keeps working', async () => {
    // The control. A fix that merely stopped writing non-live statuses would
    // pass the tests above and let a cancelled customer keep access.
    await post(makeEvent('customer.subscription.updated', THE_DUPLICATE('unpaid')))
    expect(statusWrites()).toEqual(['unpaid'])
    expect(mockUpsert).toHaveBeenCalled()
  })

  it('does not run the coverage check for a live status', async () => {
    // One Stripe call per non-live event is the price of the guard; a renewal
    // must not pay it.
    await post(makeEvent('customer.subscription.updated', THE_PAID_ONE()))
    expect(mockListSubscriptions).not.toHaveBeenCalled()
    expect(statusWrites()).toEqual(['pro'])
  })
})

// ═══════════════════════════════════════════════════════════════════════
// customer.subscription.deleted (D5)
// ═══════════════════════════════════════════════════════════════════════

describe('customer.subscription.deleted for a duplicate while another live subscription covers the price', () => {
  it('does not write the duplicate over the Prisma row of the live one', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [THE_PAID_ONE()] })
    await post(makeEvent('customer.subscription.deleted', THE_DUPLICATE('canceled')))
    expect(statusWrites()).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('still records a genuine last cancellation on the Prisma row', async () => {
    await post(makeEvent('customer.subscription.deleted', THE_DUPLICATE('canceled')))
    expect(statusWrites()).toEqual(['cancelled'])
    expect(mockUpsert).toHaveBeenCalled()
  })
})

// ═══════════════════════════════════════════════════════════════════════
// The sync module's own guard (D5 when Stripe cannot be asked)
// ═══════════════════════════════════════════════════════════════════════

describe('syncStripeSubscriptionToPrisma refuses to overwrite a live row with a dead stranger', () => {
  async function sync(sub: Stripe.Subscription) {
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')
    return syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: sub,
      source: 'customer.subscription.deleted',
      eventId: 'evt_1',
    })
  }

  const liveRow = (id = 'sub_the_paid_one'): ExistingRow => ({
    stripeSubscriptionId: id,
    status: 'ACTIVE',
    currentPeriodEnd: new Date(FUTURE * 1000),
  })

  it('keeps the live row when a different, dead subscription arrives', async () => {
    mockFindUnique.mockResolvedValue(liveRow())
    const result = await sync(THE_DUPLICATE('canceled'))
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('live_row_protected')
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('says so in the log, with both ids, so the row can be read alongside Stripe', async () => {
    mockFindUnique.mockResolvedValue(liveRow())
    await sync(THE_DUPLICATE('past_due'))
    const line = (warnSpy.mock.calls as unknown as unknown[][])
      .map((c) => String(c[0]))
      .find((l) => l.includes('BILLING_LIVE_ROW_PROTECTED'))
    expect(line).toBeDefined()
    expect(line).toContain('sub_the_paid_one')
    expect(line).toContain('sub_the_duplicate')
  })

  it('writes the cancellation of the live subscription ITSELF', async () => {
    mockFindUnique.mockResolvedValue(liveRow())
    const result = await sync(subscription('sub_the_paid_one', 'canceled'))
    expect(result.ok).toBe(true)
    expect(mockUpsert).toHaveBeenCalled()
  })

  it('lets a live replacement take the row', async () => {
    // A customer whose first subscription ended and who bought again.
    mockFindUnique.mockResolvedValue(liveRow())
    const result = await sync(subscription('sub_the_new_one', 'active'))
    expect(result.ok).toBe(true)
    expect(mockUpsert).toHaveBeenCalled()
  })

  it('does not protect a row whose period has already passed', async () => {
    // An ACTIVE row with a past period end is a stale record, not a live
    // subscription, and must not block the write that corrects it.
    mockFindUnique.mockResolvedValue({ ...liveRow(), currentPeriodEnd: new Date(PAST * 1000) })
    const result = await sync(THE_DUPLICATE('canceled'))
    expect(result.ok).toBe(true)
  })

  it('does not protect a no-card trial row, which carries no Stripe id', async () => {
    mockFindUnique.mockResolvedValue({ ...liveRow(), stripeSubscriptionId: null })
    const result = await sync(THE_DUPLICATE('canceled'))
    expect(result.ok).toBe(true)
  })

  it('writes when there is no row yet', async () => {
    mockFindUnique.mockResolvedValue(null)
    const result = await sync(THE_DUPLICATE('canceled'))
    expect(result.ok).toBe(true)
  })
})
