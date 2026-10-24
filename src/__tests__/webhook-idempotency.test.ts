import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * webhook:D6 - idempotency that holds under concurrency and under failure.
 *
 * The route used to SELECT the event id from `webhook_events`, process the
 * event, and INSERT the id afterwards. Three holes:
 *
 *   1. Two deliveries of one event arriving together both pass the SELECT
 *      and both process. Stripe retries a slow endpoint while the first
 *      attempt is still running, so this is the ordinary case, not a corner.
 *   2. The SELECT's error was discarded (`const { data } = ...`), so a table
 *      that had gone missing, or an RLS change, read as "not yet processed"
 *      for every event, for ever, and nothing said so.
 *   3. A handler that threw had no row, which is right (Stripe's retry must
 *      run), but a handler that succeeded and then failed to INSERT also had
 *      no row, and the only signal was a warning.
 *
 * Now the id is CLAIMED by inserting it before anything runs; the table's
 * primary key makes a second claim fail, and that conflict means "already
 * processed". If processing throws the claim is released so the retry can
 * run. A claim that fails for any other reason is reported at error level
 * rather than swallowed.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => PRISMA_CUID,
  tryPrismaUserId: async () => PRISMA_CUID,
  IdentityUnresolved: class extends Error {},
  IdentityConflict: class extends Error {},
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: vi.fn(async () => ({ id: 'row_1' })),
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

// ─── Supabase, recording the ORDER of what happened ─────────────────────

/** Every call that matters, in the order it was made. */
let order: string[] = []
let claimError: { code?: string; message: string } | null = null
let releaseError: { message: string } | null = null
let profileUpdateError: { message: string } | null = null
let claimInserts: Record<string, unknown>[] = []
let released: string[] = []

function createSupabaseMock() {
  const profiles = {
    update: () => {
      order.push('profiles.update')
      return {
        eq: () => ({ error: profileUpdateError, in: () => ({ error: null, count: 0 }) }),
      }
    },
    select: () => ({
      eq: () => ({
        single: async () => ({
          data: { id: SUPABASE_UUID, email: 'p@example.com', subscription_status: 'free' },
          error: null,
        }),
        in: () => ({ single: async () => ({ data: null, error: null }) }),
      }),
    }),
    upsert: () => ({ error: null }),
    insert: () => ({ error: null }),
  }
  const webhookEvents = {
    // The old lookup. If the route still gates on it, this fixture says
    // "never seen", so only the insert can stop a duplicate.
    select: () => ({
      eq: () => ({
        single: async () => {
          order.push('webhook_events.select')
          return { data: null, error: { code: 'PGRST116', message: 'no rows' } }
        },
      }),
    }),
    insert: async (row: Record<string, unknown>) => {
      order.push('webhook_events.insert')
      claimInserts.push(row)
      return { error: claimError }
    },
    delete: () => ({
      eq: async (_col: string, id: string) => {
        order.push('webhook_events.delete')
        released.push(id)
        return { error: releaseError }
      },
    }),
  }
  return { from: (table: string) => (table === 'webhook_events' ? webhookEvents : profiles) }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => supabaseMock }))

// ─── Fixtures ───────────────────────────────────────────────────────────

const EVENT_ID = 'evt_once_only'

function updatedEvent(): Stripe.Event {
  return {
    id: EVENT_ID,
    object: 'event',
    api_version: '2023-10-16',
    created: Math.floor(Date.now() / 1000),
    type: 'customer.subscription.updated',
    data: {
      object: {
        id: 'sub_1',
        object: 'subscription',
        customer: 'cus_1',
        status: 'active',
        metadata: { userId: SUPABASE_UUID },
        items: {
          data: [
            {
              id: 'si_1',
              current_period_end: 1_800_000_000,
              price: { id: 'price_1', recurring: { interval: 'month' } },
            },
          ],
        },
      },
    },
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

async function post(): Promise<Response> {
  mockConstructEvent.mockReturnValue(updatedEvent())
  const { POST } = await import('@/app/api/stripe/webhook/route')
  return POST(request())
}

let errorSpy: ReturnType<typeof vi.spyOn>
let warnSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  order = []
  claimInserts = []
  released = []
  claimError = null
  releaseError = null
  profileUpdateError = null
  supabaseMock = createSupabaseMock()
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
  warnSpy.mockRestore()
})

// ═══════════════════════════════════════════════════════════════════════

describe('the claim comes first', () => {
  it('inserts the event id BEFORE any handler runs', async () => {
    const res = await post()
    expect(res.status).toBe(200)
    const claimAt = order.indexOf('webhook_events.insert')
    const firstWrite = order.indexOf('profiles.update')
    expect(claimAt).toBeGreaterThanOrEqual(0)
    expect(firstWrite).toBeGreaterThanOrEqual(0)
    expect(claimAt, `order was ${order.join(' > ')}`).toBeLessThan(firstWrite)
  })

  it('records the id and the type on the claim', async () => {
    await post()
    expect(claimInserts[0]).toMatchObject({
      event_id: EVENT_ID,
      event_type: 'customer.subscription.updated',
    })
  })

  it('does not insert a second time after processing', async () => {
    await post()
    expect(order.filter((o) => o === 'webhook_events.insert')).toHaveLength(1)
  })
})

describe('a conflict on the claim', () => {
  it('means already processed: answer 200 and run nothing', async () => {
    claimError = { code: '23505', message: 'duplicate key value violates unique constraint' }
    const res = await post()
    expect(res.status).toBe(200)
    expect(order).not.toContain('profiles.update')
    expect(mockRetrieveSubscription).not.toHaveBeenCalled()
  })

  it('is not reported as a fault', async () => {
    claimError = { code: '23505', message: 'duplicate key value violates unique constraint' }
    await post()
    expect(mockCaptureException).not.toHaveBeenCalled()
    expect(mockCaptureMessage).not.toHaveBeenCalled()
  })
})

describe('when processing throws', () => {
  beforeEach(() => {
    profileUpdateError = { message: 'connection reset' }
  })

  it('releases the claim so Stripe retry can run, and answers 500', async () => {
    const res = await post()
    expect(res.status).toBe(500)
    expect(released).toEqual([EVENT_ID])
    expect(order.indexOf('webhook_events.delete')).toBeGreaterThan(order.indexOf('profiles.update'))
  })

  it('reports a release that itself fails, because the retry will then be refused', async () => {
    releaseError = { message: 'permission denied' }
    await post()
    const reported = (errorSpy.mock.calls as unknown as unknown[][]).some((c) =>
      String(c[0]).includes('IDEMPOTENCY_RELEASE_FAILED'),
    )
    expect(reported).toBe(true)
    expect(
      mockCaptureMessage.mock.calls.length + mockCaptureException.mock.calls.length,
    ).toBeGreaterThan(0)
  })
})

describe('when the claim fails for a reason other than a conflict', () => {
  beforeEach(() => {
    claimError = { code: '42P01', message: 'relation "webhook_events" does not exist' }
  })

  it('is loud: the error reaches the log and Sentry at error level', async () => {
    await post()
    const line = (errorSpy.mock.calls as unknown as unknown[][])
      .map((c) => String(c[0]))
      .find((l) => l.includes('IDEMPOTENCY_CLAIM_FAILED'))
    expect(line).toBeDefined()
    expect(line).toContain(EVENT_ID)
    expect(line).toContain('does not exist')
    const sentryCall = mockCaptureMessage.mock.calls[0] as unknown as [string, { level: string }]
    expect(sentryCall?.[1]?.level).toBe('error')
  })

  it('still processes the event, so a paying customer is not left waiting on a broken journal', async () => {
    const res = await post()
    expect(res.status).toBe(200)
    expect(order).toContain('profiles.update')
  })
})

describe('a successful run', () => {
  it('keeps the claim', async () => {
    await post()
    expect(released).toEqual([])
  })

  it('does not gate on the old select, whose error used to be discarded', async () => {
    await post()
    expect(order).not.toContain('webhook_events.select')
  })
})
