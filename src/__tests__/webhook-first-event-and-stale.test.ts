import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D9, D10, D11, D15 - holes in the first and last events.
 *
 * D9. `customer.subscription.created` with no `metadata.userId` and no
 *     profile carrying the customer id answered 500. Stripe retries a 500 for
 *     three days, so a subscription made by hand in the dashboard produced
 *     72 hours of failed deliveries and a red endpoint, and nothing changed
 *     between attempts. It now answers 200 with a reason, logs every fact it
 *     has, and raises a Sentry message so a person links the customer. The
 *     `.updated` and `.deleted` handlers had the opposite fault: the lookup's
 *     error was discarded, so a database blip read as "nobody", the event was
 *     consumed with a 200 and the claim kept, and a cancelled customer's
 *     deletion was lost for good. All three now share one resolver: a database
 *     error throws (claim released, Stripe retries); no profile is answered
 *     with `ignored: 'unresolved_user'`.
 *
 * D10. A first event whose subscription is not yet live (`incomplete`: the
 *     card needs 3-D Secure, or the payment is pending) wrote 'incomplete'
 *     over the profile. A no-card trialist is 'pro'; starting a checkout and
 *     stalling at the bank step ended their trial on the spot. A never-live
 *     status (`incomplete`, and `incomplete_expired` a day later) is now
 *     written only over a profile that is not 'pro', and neither moves the
 *     end date. The profile read fails closed: an error throws rather than
 *     reading as "not pro".
 *
 * D11. `invoice.paid` granted 'pro' on the strength of the invoice alone. A
 *     delivery arriving late, after `customer.subscription.deleted`, re-granted
 *     access to a cancelled customer. The handler already retrieves the
 *     subscription from Stripe; it now refuses to grant when that
 *     subscription is no longer live.
 *
 * D15. `customer.subscription.created` acted on its snapshot. Delivered after
 *     `.deleted` for the same id it wrote 'pro' over 'cancelled'; delivered
 *     after a renewal it wrote the FIRST period's end date over the current
 *     one, and the Prisma row followed. The handler now retrieves the
 *     subscription and acts on Stripe's current state: live grants with the
 *     current period, `incomplete` takes the D10 path, anything else is a
 *     status the lifecycle handlers own and the event writes nothing. When
 *     Stripe cannot be asked the snapshot is used, except over a terminal
 *     profile, where the handler throws so that Stripe retries.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const PERIOD_END = Math.floor(Date.UTC(2026, 10, 19) / 1000)
const RENEWED_END = Math.floor(Date.UTC(2026, 11, 19) / 1000)
const PAST = Math.floor(Date.UTC(2026, 8, 19) / 1000)

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

const mockCaptureException = vi.fn()
const mockCaptureMessage = vi.fn()
vi.mock('@sentry/nextjs', () => ({
  captureException: (...a: unknown[]) => mockCaptureException(...(a as [])),
  captureMessage: (...a: unknown[]) => mockCaptureMessage(...(a as [])),
}))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

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

/** What the profiles lookup returns; null means no profile for this customer. */
let profileRow: Record<string, unknown> | null = null
/** When set, every profiles read fails with this error instead of answering. */
let profileReadError: { code: string; message: string } | null = null
let profileUpdates: Record<string, unknown>[] = []
/** Event ids whose claim was released (webhook_events.delete). */
let released: string[] = []

function createSupabaseMock() {
  const profiles = {
    update: (payload: Record<string, unknown>) => {
      profileUpdates.push(payload)
      return { eq: () => ({ error: null, in: () => ({ error: null, count: 0 }) }) }
    },
    select: () => ({
      eq: () => ({
        single: async () =>
          profileReadError
            ? { data: null, error: profileReadError }
            : { data: profileRow, error: profileRow ? null : { code: 'PGRST116' } },
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

type Shape = 'old' | 'clover'

/** A subscription in the clover shape (period on the item), monthly, metadata set. */
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

/** The same subscription with its period expressed in the given shape. */
function shaped(
  shape: Shape,
  status: Stripe.Subscription.Status,
  periodEnd: number,
  over: Record<string, unknown> = {},
): Stripe.Subscription {
  const item: Record<string, unknown> = {
    id: 'si_1',
    price: { id: 'price_monthly', recurring: { interval: 'month' }, product: 'prod_1' },
  }
  if (shape === 'clover') item.current_period_end = periodEnd
  return {
    id: 'sub_1',
    object: 'subscription',
    customer: 'cus_1',
    status,
    metadata: { userId: SUPABASE_UUID },
    items: { data: [item] },
    ...(shape === 'old' ? { current_period_end: periodEnd } : {}),
    ...over,
  } as unknown as Stripe.Subscription
}

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

const proProfile = () => ({ id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'pro' })
const freeProfile = () => ({ ...proProfile(), subscription_status: 'free' })
const cancelledProfile = () => ({
  ...proProfile(),
  subscription_status: 'cancelled',
  subscription_end_date: new Date(PAST * 1000).toISOString(),
})

let errorSpy: ReturnType<typeof vi.spyOn>
let warnSpy: ReturnType<typeof vi.spyOn>
let infoSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  // Retrieve answers nothing unless a test says otherwise, so the created
  // handler falls back to its snapshot; a test about the current state sets it.
  mockRetrieveSubscription.mockReset()
  mockFindUnique.mockResolvedValue(null)
  mockListSubscriptions.mockResolvedValue({ data: [] })
  profileUpdates = []
  released = []
  profileReadError = null
  profileRow = proProfile()
  supabaseMock = createSupabaseMock()
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
const endDateWrites = () =>
  profileUpdates.filter((u) => 'subscription_end_date' in u).map((u) => u.subscription_end_date)
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

describe.each(['customer.subscription.updated', 'customer.subscription.deleted'])(
  '%s for a customer nobody can resolve',
  (type) => {
    beforeEach(() => {
      profileRow = null
    })

    it('answers 200 with the same reason, raises the same Sentry message, writes nothing', async () => {
      // These two handlers used to console.error and return, so a dashboard
      // subscription's deletion left no trace a person would see.
      const res = await post(makeEvent(type, subscription('canceled', { metadata: {} })))
      expect(res.status).toBe(200)
      expect((await res.json()).ignored).toBe('unresolved_user')
      expect(profileUpdates).toEqual([])
      expect(mockUpsert).not.toHaveBeenCalled()
      const call = mockCaptureMessage.mock.calls[0] as unknown as
        | [string, { fingerprint: string[] }]
        | undefined
      expect(call?.[1].fingerprint).toEqual(['stripe-webhook', 'unresolved-user'])
    })
  },
)

describe.each([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
])('%s when the profiles lookup fails', (type) => {
  it('throws: 500, the claim released, nothing written, so Stripe retries', async () => {
    // The lookup's error used to be discarded, so a database blip read as
    // "no profile", the event was consumed with a 200 and the claim kept, and
    // a cancelled customer's deletion was never seen again.
    profileReadError = { code: '08006', message: 'connection reset' }
    const event = makeEvent(type, subscription('canceled', { metadata: {} }))
    const res = await post(event)
    expect(res.status).toBe(500)
    expect(released).toEqual([event.id])
    expect(profileUpdates).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
    expect(mockCaptureMessage).not.toHaveBeenCalled()
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
    profileRow = freeProfile()
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
    profileRow = freeProfile()
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
    profileRow = freeProfile()
    await post(makeEvent('customer.subscription.created', subscription('trialing')))
    expect(statusWrites()).toEqual(['pro'])
  })
})

describe('a subscription that never went live expires (incomplete_expired)', () => {
  const trialRow = (): ExistingRow => ({
    stripeSubscriptionId: null,
    status: 'TRIALING',
    currentPeriodEnd: new Date(PERIOD_END * 1000),
  })

  it('writes neither cancelled nor its end date over a pro profile, and leaves the trial row', async () => {
    // A no-card trialist's abandoned checkout. Until 23 October 2026 this
    // wrote 'cancelled' a day after the checkout stalled, ending a seven-day
    // trial on day two, and the dead subscription had taken the TRIALING row
    // so the trial-expiry cron could never end the trial properly either.
    mockFindUnique.mockResolvedValue(trialRow())
    const res = await post(
      makeEvent('customer.subscription.updated', subscription('incomplete_expired')),
    )
    expect(res.status).toBe(200)
    expect(statusWrites()).toEqual([])
    expect(endDateWrites()).toEqual([])
    expect(mockUpsert, 'the trial row must stay TRIALING for the cron').not.toHaveBeenCalled()
  })

  it('says why', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('incomplete_expired')))
    expect(loggedLines(infoSpy).some((l) => l.includes('NEVER_LIVE_STATUS_HELD_BACK'))).toBe(true)
  })

  it('still writes cancelled over a free profile, so a lapsed checkout is recorded', async () => {
    profileRow = freeProfile()
    await post(makeEvent('customer.subscription.updated', subscription('incomplete_expired')))
    expect(statusWrites()).toEqual(['cancelled'])
  })

  it('a stalled incomplete does not move the end date of a pro profile either', async () => {
    await post(makeEvent('customer.subscription.updated', subscription('incomplete')))
    expect(endDateWrites()).toEqual([])
  })

  it('past_due, by contrast, still keeps the end date current', async () => {
    // The customer's own subscription in its retry window: the status is
    // deliberately not written, the period is real and is.
    await post(makeEvent('customer.subscription.updated', subscription('past_due')))
    expect(statusWrites()).toEqual([])
    expect(endDateWrites()).toHaveLength(1)
  })
})

describe('the pro check fails closed', () => {
  it('a database error on the profile read throws rather than reading as not pro', async () => {
    // With the error discarded, a transient fault let a never-live first
    // status overwrite 'pro'.
    profileReadError = { code: '08006', message: 'connection reset' }
    mockRetrieveSubscription.mockResolvedValue(subscription('incomplete'))
    const event = makeEvent('checkout.session.completed', {
      id: 'cs_1',
      mode: 'subscription',
      subscription: 'sub_1',
      metadata: { userId: SUPABASE_UUID },
    })
    const res = await post(event)
    expect(res.status).toBe(500)
    expect(released).toEqual([event.id])
    expect(statusWrites()).toEqual([])
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
      profileRow = cancelledProfile()
      mockRetrieveSubscription.mockResolvedValue(subscription(status))
      const res = await post(makeEvent('invoice.paid', paidInvoice(), 'old'))
      expect(res.status).toBe(200)
      expect(statusWrites()).toEqual([])
    },
  )

  it('says why', async () => {
    profileRow = cancelledProfile()
    mockRetrieveSubscription.mockResolvedValue(subscription('canceled'))
    await post(makeEvent('invoice.paid', paidInvoice(), 'old'))
    expect(loggedLines(warnSpy).some((l) => l.includes('STALE_INVOICE_PAID_IGNORED'))).toBe(true)
  })

  it('still grants pro when the subscription is live', async () => {
    profileRow = freeProfile()
    mockRetrieveSubscription.mockResolvedValue(subscription('active'))
    await post(makeEvent('invoice.paid', paidInvoice(), 'old'))
    expect(statusWrites()).toEqual(['pro'])
  })
})

// ═══════════════════════════════════════════════════════════════════════
// D15: customer.subscription.created acts on Stripe's current state
// ═══════════════════════════════════════════════════════════════════════

describe.each<Shape>(['old', 'clover'])(
  'customer.subscription.created with a %s-shaped snapshot',
  (shape) => {
    it('arriving after customer.subscription.deleted writes nothing to the profile or the row', async () => {
      profileRow = cancelledProfile()
      mockRetrieveSubscription.mockResolvedValue(subscription('canceled'))
      const res = await post(
        makeEvent('customer.subscription.created', shaped(shape, 'active', PERIOD_END), shape),
      )
      expect(res.status).toBe(200)
      expect((await res.json()).ignored).toBe('stale_event')
      expect(profileUpdates).toEqual([])
      expect(mockUpsert).not.toHaveBeenCalled()
      expect(mockRetrieveSubscription).toHaveBeenCalledWith('sub_1')
      expect(
        loggedLines(warnSpy).some((l) => l.includes('STALE_SUBSCRIPTION_CREATED_IGNORED')),
      ).toBe(true)
    })

    it('arriving after a renewal writes the current period end, not the first one', async () => {
      // Stripe now holds the renewed period. Acting on the snapshot moved the
      // profile's end date and the Prisma period back to the first period.
      mockRetrieveSubscription.mockResolvedValue(shaped('clover', 'active', RENEWED_END))
      await post(
        makeEvent('customer.subscription.created', shaped(shape, 'active', PERIOD_END), shape),
      )
      const renewed = new Date(RENEWED_END * 1000).toISOString()
      expect(endDateWrites()).toEqual([renewed])
      expect(endDateWrites()).not.toContain(new Date(PERIOD_END * 1000).toISOString())
      const args = mockUpsert.mock.calls[0]?.[0]
      expect(args).toBeDefined()
      expect((args!.create.currentPeriodEnd as Date).toISOString()).toBe(renewed)
      expect((args!.update.currentPeriodEnd as Date).toISOString()).toBe(renewed)
    })

    it('for a genuinely new subscription over a cancelled profile still grants pro', async () => {
      // The control: a customer who cancelled and later bought again.
      profileRow = cancelledProfile()
      const fresh = shaped(shape, 'trialing', PERIOD_END, { id: 'sub_new' })
      mockRetrieveSubscription.mockResolvedValue(
        shaped('clover', 'trialing', PERIOD_END, { id: 'sub_new' }),
      )
      await post(makeEvent('customer.subscription.created', fresh, shape))
      expect(statusWrites()).toEqual(['pro'])
      expect(mockUpsert).toHaveBeenCalled()
    })
  },
)

describe('a past_due delivered after the deletion', () => {
  const cancelledRow = (): ExistingRow => ({
    stripeSubscriptionId: 'sub_1',
    status: 'CANCELLED',
    currentPeriodEnd: new Date(PAST * 1000),
    cancelledAt: new Date(PAST * 1000),
  })

  it.each<Shape>(['old', 'clover'])(
    'moves neither the end date nor the row (%s shape)',
    async (shape) => {
      // past_due writes no status, only its period end. Over a cancelled
      // profile that future date reopened the stale-event guard, which refuses
      // to re-grant only while the stored end date is in the past.
      profileRow = cancelledProfile()
      mockFindUnique.mockResolvedValue(cancelledRow())
      const res = await post(
        makeEvent('customer.subscription.updated', shaped(shape, 'past_due', RENEWED_END), shape),
      )
      expect(res.status).toBe(200)
      expect(profileUpdates).toEqual([])
      expect(
        mockUpsert,
        'Stripe never moves a canceled subscription to past_due',
      ).not.toHaveBeenCalled()
      expect(loggedLines(warnSpy).some((l) => l.includes('STALE_PAST_DUE_END_DATE_IGNORED'))).toBe(
        true,
      )
    },
  )

  it('so a late active for the same subscription is still refused afterwards', async () => {
    profileRow = cancelledProfile()
    mockFindUnique.mockResolvedValue(cancelledRow())
    await post(makeEvent('customer.subscription.updated', subscription('past_due')))
    // Apply whatever the first delivery wrote, as the database would.
    profileRow = Object.assign({ ...profileRow }, ...profileUpdates)
    const res = await post(makeEvent('customer.subscription.updated', subscription('active')))
    expect((await res.json()).ignored).toBe('stale_event')
    expect(statusWrites()).toEqual([])
  })
})

describe('invoice.paid when the profiles lookup fails', () => {
  it('throws: 500, the claim released, nothing retrieved, so Stripe retries', async () => {
    // The lookup's error used to be discarded: a database blip read as "no
    // profile", the delivery was answered 200 and the payment never recorded.
    profileReadError = { code: '08006', message: 'connection reset' }
    const event = makeEvent(
      'invoice.paid',
      { id: 'in_1', object: 'invoice', customer: 'cus_1', amount_paid: 399, subscription: 'sub_1' },
      'old',
    )
    const res = await post(event)
    expect(res.status).toBe(500)
    expect(released).toEqual([event.id])
    expect(mockRetrieveSubscription).not.toHaveBeenCalled()
    expect(profileUpdates).toEqual([])
  })
})

describe('customer.subscription.created when Stripe cannot say what the subscription is now', () => {
  it('over a cancelled profile throws: 500, claim released, nothing written', async () => {
    // Writing 'pro' over 'cancelled' on a snapshot is the exact regression.
    profileRow = cancelledProfile()
    mockRetrieveSubscription.mockRejectedValue(new Error('Stripe unreachable'))
    const event = makeEvent('customer.subscription.created', subscription('active'))
    const res = await post(event)
    expect(res.status).toBe(500)
    expect(released).toEqual([event.id])
    expect(profileUpdates).toEqual([])
    expect(mockUpsert).not.toHaveBeenCalled()
  })

  it('over a profile that is not terminal uses the snapshot', async () => {
    profileRow = freeProfile()
    mockRetrieveSubscription.mockRejectedValue(new Error('Stripe unreachable'))
    const res = await post(makeEvent('customer.subscription.created', subscription('active')))
    expect(res.status).toBe(200)
    expect(statusWrites()).toEqual(['pro'])
  })
})

describe('customer.subscription.created whose subscription Stripe now holds in a lifecycle status', () => {
  it.each<Stripe.Subscription.Status>(['past_due', 'unpaid', 'incomplete_expired', 'paused'])(
    'writes nothing when the current status is %s',
    async (status) => {
      // Those statuses belong to the .updated and .deleted handlers, which
      // have seen or will see them with the coverage check.
      mockRetrieveSubscription.mockResolvedValue(subscription(status))
      const res = await post(makeEvent('customer.subscription.created', subscription('active')))
      expect((await res.json()).ignored).toBe('stale_event')
      expect(profileUpdates).toEqual([])
      expect(mockUpsert).not.toHaveBeenCalled()
    },
  )

  it('takes the first-status path when the current status is incomplete', async () => {
    profileRow = freeProfile()
    mockRetrieveSubscription.mockResolvedValue(subscription('incomplete'))
    await post(makeEvent('customer.subscription.created', subscription('incomplete')))
    expect(statusWrites()).toEqual(['incomplete'])
  })
})
