import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D3, D4, D5 (and D16, D17) - what another subscription covers.
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
 * Two layers close this. The handlers run one coverage check for every
 * non-live status and skip every write when covered. And the sync module
 * refuses, on its own evidence, to overwrite a live row with a dead
 * subscription of a different id, a row with no Stripe id with any dead
 * subscription, or a row that records a subscription as cancelled with a live
 * status for that same subscription.
 *
 * D16. Coverage was judged PER PRICE, borrowed from the checkout guard. A
 *     customer who held Student Monthly, bought Student Annual and cancelled
 *     the monthly plan was revoked when the monthly subscription ended, and a
 *     promo-built subscription never matched a catalogue price at all. It is
 *     now judged on ACCESS: another subscription that keeps the web gate open
 *     (or, for an IELTS-only event, another that carries IELTS).
 *
 * D17. The borrowed list of "live" statuses included `unpaid`, so two dead
 *     subscriptions covered each other and neither ever wrote 'unpaid'. The
 *     coverage list is now active, trialing and past_due (the retry-window
 *     choice). And the borrowed check failed OPEN: when Stripe could not be
 *     asked, "unknown" was read as "not covered" and the write went ahead,
 *     which is the 18 September outcome exactly. It now throws, the claim is
 *     released and Stripe retries.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const PRICE = 'price_teacher_annual'
const MONTHLY = 'price_student_monthly'
const ANNUAL = 'price_student_annual'
const IELTS = 'price_ielts_monthly'
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
  cancelledAt?: Date | null
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
/** The IELTS price ids this test recognises; one id, so the carve-out can be exercised. */
const IELTS_IDS = new Set([IELTS])

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
  isIeltsPriceId: (id: string | null | undefined) => !!id && IELTS_IDS.has(id),
}))

// ─── Supabase ───────────────────────────────────────────────────────────

let profileUpdates: Record<string, unknown>[] = []
let released: string[] = []

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
    delete: () => ({
      eq: async (_col: string, id: string) => {
        released.push(id)
        return { error: null }
      },
    }),
  }
  return { from: (table: string) => (table === 'webhook_events' ? webhookEvents : profiles) }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => supabaseMock }))

// ─── Fixtures ───────────────────────────────────────────────────────────

/** A subscription whose single item bills `priceId`; the product is a bare id, as in a webhook payload. */
function subscription(
  id: string,
  status: Stripe.Subscription.Status,
  over: Record<string, unknown> = {},
  priceId: string = PRICE,
  interval: 'month' | 'year' = 'year',
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
          price: { id: priceId, recurring: { interval }, product: 'prod_1' },
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
    // Clover: the fixtures above carry their period on the item.
    api_version: '2026-02-25.clover',
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
let infoSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  profileUpdates = []
  released = []
  supabaseMock = createSupabaseMock()
  mockFindUnique.mockResolvedValue(null)
  mockListSubscriptions.mockResolvedValue({ data: [] })
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
  warnSpy.mockRestore()
  infoSpy.mockRestore()
})

const statusWrites = () =>
  profileUpdates.filter((u) => 'subscription_status' in u).map((u) => u.subscription_status)
const ieltsWrites = () =>
  profileUpdates.filter((u) => 'ielts_status' in u).map((u) => u.ielts_status)
const endDateWritten = () => profileUpdates.some((u) => 'subscription_end_date' in u)

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
    expect(endDateWritten()).toBe(false)
  })

  it('says so in the 200, so the delivery log reads honestly', async () => {
    const res = await post(makeEvent('customer.subscription.updated', THE_DUPLICATE('canceled')))
    expect((await res.json()).ignored).toBe('covered_by_other_subscription')
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
// Coverage is about access, not prices (D16)
// ═══════════════════════════════════════════════════════════════════════

describe('what counts as cover', () => {
  const monthly = (id: string, status: Stripe.Subscription.Status = 'active') =>
    subscription(id, status, {}, MONTHLY, 'month')
  const annual = (id: string, status: Stripe.Subscription.Status = 'active') =>
    subscription(id, status, {}, ANNUAL, 'year')
  const ieltsOnly = (id: string, status: Stripe.Subscription.Status = 'active') =>
    subscription(id, status, {}, IELTS, 'month')

  it('monthly then annual: the live annual plan covers the cancelled monthly one', async () => {
    // Student Monthly, then Student Annual at checkout (a different price, so
    // the checkout guard rightly allowed it), then the monthly plan cancelled.
    // Judged per price this revoked a paying customer when the monthly
    // subscription ended, and the stale-event guard then refused to let the
    // annual plan's next renewal restore them.
    mockListSubscriptions.mockResolvedValue({ data: [annual('sub_annual')] })
    const res = await post(
      makeEvent('customer.subscription.deleted', {
        ...monthly('sub_monthly', 'canceled'),
        ended_at: PAST,
      }),
    )
    expect(res.status).toBe(200)
    expect(statusWrites()).toEqual([])
    expect(endDateWritten()).toBe(false)
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('the same through customer.subscription.updated with status canceled', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [annual('sub_annual')] })
    await post(makeEvent('customer.subscription.updated', monthly('sub_monthly', 'canceled')))
    expect(statusWrites()).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('a promo-built subscription (ad-hoc price, bare product id) covers a catalogue one', async () => {
    // /api/promo/redeem builds a price unique to the redemption; in a webhook
    // payload its product is a bare id, so the catalogue price it was derived
    // from cannot be read and a per-price rule could never match it.
    mockListSubscriptions.mockResolvedValue({
      data: [subscription('sub_promo', 'active', {}, 'price_1AdHocXYZ', 'year')],
    })
    await post(
      makeEvent('customer.subscription.deleted', {
        ...annual('sub_annual', 'canceled'),
        ended_at: PAST,
      }),
    )
    expect(statusWrites()).toEqual([])
  })

  it('an IELTS-only live subscription does NOT cover a Pro cancellation', async () => {
    // IELTS is a standalone product: holding it is no reason to keep 'pro'.
    mockListSubscriptions.mockResolvedValue({ data: [ieltsOnly('sub_ielts')] })
    await post(
      makeEvent('customer.subscription.deleted', {
        ...monthly('sub_monthly', 'canceled'),
        ended_at: PAST,
      }),
    )
    expect(statusWrites()).toEqual(['cancelled'])
  })

  it('an IELTS-only cancellation is covered by another live IELTS subscription, and the flag stays', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [ieltsOnly('sub_ielts_two')] })
    await post(
      makeEvent('customer.subscription.deleted', {
        ...ieltsOnly('sub_ielts', 'canceled'),
        ended_at: PAST,
      }),
    )
    expect(ieltsWrites()).toEqual([])
    expect(statusWrites()).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('an IELTS-only cancellation with no other IELTS subscription clears the flag and nothing else', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [annual('sub_annual')] })
    await post(
      makeEvent('customer.subscription.deleted', {
        ...ieltsOnly('sub_ielts', 'canceled'),
        ended_at: PAST,
      }),
    )
    expect(ieltsWrites()).toEqual(['free'])
    expect(statusWrites()).toEqual([])
    // The end date belongs to the Pro plan; an IELTS cancellation must not move it.
    expect(endDateWritten()).toBe(false)
  })
})

// ═══════════════════════════════════════════════════════════════════════
// Which statuses keep access (D17), and what Stripe's silence means
// ═══════════════════════════════════════════════════════════════════════

describe('which other subscriptions count as live', () => {
  it('a past_due one does: the customer keeps access through the retry window', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [subscription('sub_b', 'past_due')] })
    await post(makeEvent('customer.subscription.updated', subscription('sub_a', 'unpaid')))
    expect(statusWrites()).toEqual([])
  })

  it('an unpaid one does not: two dead subscriptions do not keep each other alive', async () => {
    // With the checkout list (which includes unpaid) borrowed here, A's unpaid
    // was covered by B's unpaid and vice versa, so the profile stayed 'pro'
    // with nobody paying.
    mockListSubscriptions.mockResolvedValue({ data: [subscription('sub_b', 'unpaid')] })
    await post(makeEvent('customer.subscription.updated', subscription('sub_a', 'unpaid')))
    expect(statusWrites()).toEqual(['unpaid'])
  })

  it('a canceled one does not either', async () => {
    mockListSubscriptions.mockResolvedValue({ data: [subscription('sub_b', 'canceled')] })
    await post(
      makeEvent('customer.subscription.deleted', {
        ...subscription('sub_a', 'canceled'),
        ended_at: PAST,
      }),
    )
    expect(statusWrites()).toEqual(['cancelled'])
  })
})

describe.each(['customer.subscription.updated', 'customer.subscription.deleted'])(
  '%s when Stripe cannot be asked whether another subscription covers',
  (type) => {
    it('throws: 500, the claim released, nothing written, so Stripe retries', async () => {
      // "Unknown" used to be read as "not covered" and the write went ahead:
      // the 18 September 2026 deletion exactly.
      mockListSubscriptions.mockRejectedValue(new Error('Stripe unreachable'))
      const event = makeEvent(type, { ...THE_DUPLICATE('canceled'), ended_at: PAST })
      const res = await post(event)
      expect(res.status).toBe(500)
      expect(released).toEqual([event.id])
      expect(statusWrites()).toEqual([])
      expect(endDateWritten()).toBe(false)
      expect(mockUpsert).not.toHaveBeenCalled()
    })
  },
)

describe('a pro payer whose second checkout at a different price stalls and expires', () => {
  it('keeps pro: the live plan covers, the never-live one writes nothing', async () => {
    mockListSubscriptions.mockResolvedValue({
      data: [subscription('sub_annual', 'active', {}, ANNUAL, 'year')],
    })
    await post(
      makeEvent(
        'customer.subscription.updated',
        subscription('sub_stalled', 'incomplete_expired', {}, MONTHLY, 'month'),
      ),
    )
    expect(statusWrites()).toEqual([])
    expect(endDateWritten()).toBe(false)
    expect(mockUpsert).not.toHaveBeenCalled()
  })
})

describe('the IELTS flag through the retry window', () => {
  const ieltsSub = (status: Stripe.Subscription.Status) =>
    subscription('sub_ielts', status, {}, IELTS, 'month')

  it('past_due leaves ielts_status alone, as it leaves subscription_status alone', async () => {
    // The same product decision applied to both products: until 23 October
    // 2026 an IELTS subscriber lost access on the first failed attempt.
    await post(makeEvent('customer.subscription.updated', ieltsSub('past_due')))
    expect(ieltsWrites()).toEqual([])
    expect(statusWrites()).toEqual([])
  })

  it('unpaid clears it: Stripe has given up', async () => {
    await post(makeEvent('customer.subscription.updated', ieltsSub('unpaid')))
    expect(ieltsWrites()).toEqual(['free'])
    expect(statusWrites()).toEqual([])
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
// The sync module's own guards (D5 when Stripe cannot be asked, and more)
// ═══════════════════════════════════════════════════════════════════════

describe('syncStripeSubscriptionToPrisma guards the row on its own evidence', () => {
  async function sync(sub: Stripe.Subscription, source = 'customer.subscription.deleted') {
    const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')
    return syncStripeSubscriptionToPrisma({
      supabaseUserId: SUPABASE_UUID,
      subscription: sub,
      source,
      eventId: 'evt_1',
    })
  }

  const liveRow = (id = 'sub_the_paid_one'): ExistingRow => ({
    stripeSubscriptionId: id,
    status: 'ACTIVE',
    currentPeriodEnd: new Date(FUTURE * 1000),
    cancelledAt: null,
  })
  const trialRow = (): ExistingRow => ({
    stripeSubscriptionId: null,
    status: 'TRIALING',
    currentPeriodEnd: new Date(FUTURE * 1000),
    cancelledAt: null,
  })
  const cancelledRow = (id: string): ExistingRow => ({
    stripeSubscriptionId: id,
    status: 'CANCELLED',
    currentPeriodEnd: new Date(PAST * 1000),
    cancelledAt: new Date(PAST * 1000),
  })
  const warnLine = (marker: string) =>
    (warnSpy.mock.calls as unknown as unknown[][])
      .map((c) => String(c[0]))
      .find((l) => l.includes(marker))

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
    const line = warnLine('BILLING_LIVE_ROW_PROTECTED')
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

  it('a dead stranger does not take a no-card trial row, which carries no Stripe id', async () => {
    // The stalled-checkout case: the `incomplete` subscription used to be
    // written over the TRIALING row as PAST_DUE with its own id, so the
    // trial-expiry cron never saw the trial again.
    mockFindUnique.mockResolvedValue(trialRow())
    const result = await sync(subscription('sub_stalled', 'incomplete'))
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('unlinked_row_protected')
    expect(mockUpsert).not.toHaveBeenCalled()
    expect(warnLine('BILLING_UNLINKED_ROW_PROTECTED')).toContain('sub_stalled')
  })

  it('a dead stranger does not take an unlinked row even after its period has passed', async () => {
    // The row is still the cron's to end; the dead subscription is not the
    // correction of anything it holds.
    mockFindUnique.mockResolvedValue({ ...trialRow(), currentPeriodEnd: new Date(PAST * 1000) })
    const result = await sync(subscription('sub_stalled', 'incomplete_expired'))
    expect(result.ok).toBe(false)
  })

  it('a live subscription does take the trial row: that is trial conversion', async () => {
    mockFindUnique.mockResolvedValue(trialRow())
    const result = await sync(subscription('sub_paid', 'trialing'), 'checkout.session.completed')
    expect(result.ok).toBe(true)
    expect(mockUpsert).toHaveBeenCalled()
  })

  it('refuses a live status for the very subscription the row records as cancelled', async () => {
    // Stripe never reactivates a canceled subscription, so this is a stale
    // delivery: a created event arriving after the deletion.
    mockFindUnique.mockResolvedValue(cancelledRow('sub_gone'))
    const result = await sync(subscription('sub_gone', 'active'), 'customer.subscription.created')
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('stale_event')
    expect(mockUpsert).not.toHaveBeenCalled()
    expect(warnLine('BILLING_STALE_EVENT_REFUSED')).toContain('sub_gone')
  })

  it('refuses a late past_due for the very subscription the row records as cancelled', async () => {
    // Not only a live status: Stripe never moves a canceled subscription to
    // any other status, and PAST_DUE written here would read as grace on
    // mobile for a customer who has gone.
    mockFindUnique.mockResolvedValue(cancelledRow('sub_gone'))
    const result = await sync(subscription('sub_gone', 'past_due'), 'customer.subscription.updated')
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toBe('stale_event')
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('still lets a re-delivered cancellation through for the same subscription', async () => {
    mockFindUnique.mockResolvedValue(cancelledRow('sub_gone'))
    const result = await sync({
      ...subscription('sub_gone', 'canceled'),
      ended_at: PAST,
    } as unknown as Stripe.Subscription)
    expect(result.ok).toBe(true)
  })

  it('lets a live subscription of a NEW id take a cancelled row: a genuine re-subscription', async () => {
    mockFindUnique.mockResolvedValue(cancelledRow('sub_gone'))
    const result = await sync(subscription('sub_again', 'active'), 'customer.subscription.created')
    expect(result.ok).toBe(true)
    expect(mockUpsert).toHaveBeenCalled()
  })

  it('writes when there is no row yet', async () => {
    mockFindUnique.mockResolvedValue(null)
    const result = await sync(THE_DUPLICATE('canceled'))
    expect(result.ok).toBe(true)
  })
})
