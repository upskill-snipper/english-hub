import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * webhook:D8 - the trial-expiry cron must never downgrade a paying customer.
 *
 * The cron selects Prisma rows that are TRIALING with no Stripe id and a
 * period end in the past, and flips the profile from 'pro' to 'free'. Its
 * docblock called that airtight: a paying customer "always carries a
 * stripeSubscriptionId". That is true only when the webhook managed to write
 * the row. When the Prisma sync failed (identity unresolved, row write failed,
 * or the row protected as a live duplicate's), the signup-trial row stayed
 * TRIALING with no Stripe id while Stripe held an ACTIVE subscription, and on
 * day eight this job revoked the access the customer had paid for. The
 * profile's own stripe_customer_id was never consulted.
 *
 * So before downgrading, if the profile has a Stripe customer, ask Stripe
 * whether that customer holds a live subscription. If so, or if Stripe cannot
 * be asked, leave the trial alone: a day's grace on an unpaid trial costs
 * pennies; a revoked payer is the September 2026 incident again. The query
 * also excludes RevenueCat rows by platform, which carry a null Stripe id for
 * their own reasons.
 */

const SECRET = 'test-secret-abcdef'
const DAY = 24 * 60 * 60 * 1000

type SubRow = { id: string; user: { supabaseUserId: string | null } | null }

const state: {
  expired: SubRow[]
  whereClauses: Array<Record<string, unknown>>
  rowUpdates: Array<{ id: string; data: Record<string, unknown> }>
  profiles: Record<string, { subscription_status: string; stripe_customer_id: string | null }>
  /** When set, every profile read fails with this error instead of answering. */
  profileReadError: { code: string; message: string } | null
  profileUpdates: Array<{ id: string; payload: Record<string, unknown> }>
  stripeSubs: Record<string, Array<{ id: string; status: string }>>
  stripeThrows: boolean
  listCalls: string[]
} = {
  expired: [],
  whereClauses: [],
  rowUpdates: [],
  profiles: {},
  profileReadError: null,
  profileUpdates: [],
  stripeSubs: {},
  stripeThrows: false,
  listCalls: [],
}

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      findMany: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
        state.whereClauses.push(where)
        return state.expired
      }),
      update: vi.fn(
        async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
          state.rowUpdates.push({ id: where.id, data })
          return { id: where.id }
        },
      ),
    },
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        eq: (_col: string, id: string) => ({
          single: async () =>
            state.profileReadError
              ? { data: null, error: state.profileReadError }
              : { data: state.profiles[id] ?? null, error: null },
        }),
      }),
      update: (payload: Record<string, unknown>) => ({
        eq: (_col: string, id: string) => ({
          eq: async () => {
            state.profileUpdates.push({ id, payload })
            return { error: null }
          },
        }),
      }),
    }),
  }),
}))

vi.mock('@/lib/stripe', () => ({
  stripe: {
    subscriptions: {
      list: async ({ customer }: { customer: string }) => {
        state.listCalls.push(customer)
        if (state.stripeThrows) throw new Error('Stripe unreachable')
        return { data: state.stripeSubs[customer] ?? [] }
      },
    },
  },
}))

vi.mock('@/lib/cron/observability', () => ({
  runCron: async <T>(_name: string, body: () => Promise<T>) => {
    const result = await body()
    return Response.json({ ok: true, ...result })
  },
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))

const { GET } = await import('@/app/api/cron/trial-expiry/route')

function req(): NextRequest {
  return new NextRequest('http://localhost/api/cron/trial-expiry', {
    method: 'GET',
    headers: new Headers({ authorization: `Bearer ${SECRET}` }),
  })
}

function trialRow(id: string, supabaseUserId: string): SubRow {
  return { id, user: { supabaseUserId } }
}

let warnSpy: ReturnType<typeof vi.spyOn>
let errorSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  process.env.CRON_SECRET = SECRET
  state.expired = []
  state.whereClauses = []
  state.rowUpdates = []
  state.profiles = {}
  state.profileReadError = null
  state.profileUpdates = []
  state.stripeSubs = {}
  state.stripeThrows = false
  state.listCalls = []
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  warnSpy.mockRestore()
  errorSpy.mockRestore()
})

const downgraded = (uuid: string) =>
  state.profileUpdates.some((u) => u.id === uuid && u.payload.subscription_status === 'free')
const rowCancelled = (id: string) =>
  state.rowUpdates.some((u) => u.id === id && u.data.status === 'CANCELLED')

// ═══════════════════════════════════════════════════════════════════════

describe('an ordinary expired trial', () => {
  it('is downgraded and its row closed', async () => {
    state.expired = [trialRow('row_1', 'uuid_1')]
    state.profiles.uuid_1 = { subscription_status: 'pro', stripe_customer_id: null }
    const res = await GET(req())
    expect(res.status).toBe(200)
    expect(downgraded('uuid_1')).toBe(true)
    expect(rowCancelled('row_1')).toBe(true)
  })

  it('never calls Stripe when the profile has no Stripe customer', async () => {
    state.expired = [trialRow('row_1', 'uuid_1')]
    state.profiles.uuid_1 = { subscription_status: 'pro', stripe_customer_id: null }
    await GET(req())
    expect(state.listCalls).toEqual([])
  })
})

describe('an expired trial row whose customer is paying in Stripe', () => {
  beforeEach(() => {
    state.expired = [trialRow('row_1', 'uuid_1')]
    state.profiles.uuid_1 = { subscription_status: 'pro', stripe_customer_id: 'cus_1' }
  })

  // past_due counts as live here because the webhook keeps web access through
  // Stripe's retry window (23 October 2026); until this list was shared with
  // the webhook, the cron downgraded exactly that customer on day eight.
  it.each(['active', 'trialing', 'past_due'])(
    'is left alone when Stripe shows a %s subscription',
    async (status) => {
      state.stripeSubs.cus_1 = [{ id: 'sub_1', status }]
      const res = await GET(req())
      expect(res.status).toBe(200)
      expect(downgraded('uuid_1')).toBe(false)
      // The row stays as it is: the reconcile script and the webhook will put
      // the real subscription on it. Marking it CANCELLED would hide the gap.
      expect(rowCancelled('row_1')).toBe(false)
      expect(state.listCalls).toEqual(['cus_1'])
    },
  )

  it('says so, with the ids, and counts it', async () => {
    state.stripeSubs.cus_1 = [{ id: 'sub_1', status: 'active' }]
    const json = await (await GET(req())).json()
    expect(json.skippedPaid).toBe(1)
    expect(json.downgraded).toBe(0)
    const line = (warnSpy.mock.calls as unknown as unknown[][])
      .map((c) => String(c[0]))
      .find((l) => l.includes('TRIAL_EXPIRY_SKIPPED_PAID'))
    expect(line).toBeDefined()
    expect(line).toContain('cus_1')
    expect(line).toContain('sub_1')
  })

  it('is still downgraded when Stripe shows only ended subscriptions', async () => {
    // The control: a customer who once paid and stopped is an expired
    // trialist like any other.
    state.stripeSubs.cus_1 = [
      { id: 'sub_old', status: 'canceled' },
      { id: 'sub_older', status: 'incomplete_expired' },
    ]
    await GET(req())
    expect(downgraded('uuid_1')).toBe(true)
    expect(rowCancelled('row_1')).toBe(true)
  })

  it('is left alone when Stripe cannot be asked, and retried next run', async () => {
    state.stripeThrows = true
    const json = await (await GET(req())).json()
    expect(downgraded('uuid_1')).toBe(false)
    expect(rowCancelled('row_1')).toBe(false)
    expect(json.skippedUnknown).toBe(1)
  })

  it('is still downgraded when Stripe shows only an unpaid subscription', async () => {
    // unpaid is Stripe having given up, and the webhook has already revoked on
    // it; it keeps nobody's web access, so it does not keep a trial either.
    state.stripeSubs.cus_1 = [{ id: 'sub_1', status: 'unpaid' }]
    await GET(req())
    expect(downgraded('uuid_1')).toBe(true)
  })
})

describe('an expired trial whose profile cannot be read', () => {
  beforeEach(() => {
    state.expired = [trialRow('row_1', 'uuid_1')]
    state.profiles.uuid_1 = { subscription_status: 'pro', stripe_customer_id: 'cus_1' }
    state.stripeSubs.cus_1 = [{ id: 'sub_1', status: 'active' }]
    state.profileReadError = { code: '08006', message: 'connection reset' }
  })

  it('is left alone and retried next run, not downgraded unasked', async () => {
    // The read's error used to be discarded: the profile read as "no Stripe
    // customer", Stripe was never asked, and a payer was downgraded.
    const json = await (await GET(req())).json()
    expect(downgraded('uuid_1')).toBe(false)
    expect(rowCancelled('row_1')).toBe(false)
    expect(json.skippedUnknown).toBe(1)
    expect(json.downgraded).toBe(0)
  })

  it('says so, with the row and the user', async () => {
    await GET(req())
    const line = (errorSpy.mock.calls as unknown as unknown[][])
      .map((c) => String(c[0]))
      .find((l) => l.includes('TRIAL_EXPIRY_PROFILE_UNREADABLE'))
    expect(line).toBeDefined()
    expect(line).toContain('row_1')
    expect(line).toContain('uuid_1')
  })

  it('treats "no such profile" as an answer, not a fault', async () => {
    state.profileReadError = { code: 'PGRST116', message: 'no rows' }
    const json = await (await GET(req())).json()
    expect(json.skippedUnknown).toBe(0)
    expect(rowCancelled('row_1')).toBe(true)
  })
})

describe('the query', () => {
  it('excludes RevenueCat rows by platform, not only by status', async () => {
    await GET(req())
    const where = state.whereClauses[0]!
    expect(where.status).toBe('TRIALING')
    expect(where.stripeSubscriptionId).toBeNull()
    expect(where.platform).toBe('WEB')
  })
})
