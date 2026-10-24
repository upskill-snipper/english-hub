import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * The cancellation confirmation, M7 (23 October 2026).
 *
 * A cancellation made in the product was confirmed only by the page that
 * asked for it. These pin the email the route now sends after the response:
 * once per subscription through the LifecycleEmail ledger, to the signed-in
 * account's address, with both one-click headers, no date (the period end it
 * would read is missing under the pinned Stripe API version), the free-days
 * wording for a trial, and nothing while the switch is off or when the
 * cancellation had already been scheduled.
 */

const USER = { id: '11111111-2222-4333-8444-555555555555', email: 'leaver@example.com' }
const order: string[] = []
const ledger = new Set<string>()

vi.mock('@/lib/prisma', () => ({
  prisma: {
    lifecycleEmail: {
      create: vi.fn(async ({ data }: { data: { userId: string; kind: string } }) => {
        const key = `${data.userId}|${data.kind}`
        if (ledger.has(key)) throw Object.assign(new Error('unique'), { code: 'P2002' })
        ledger.add(key)
        order.push(`claim:${data.kind}`)
        return { id: key }
      }),
      delete: vi.fn(async ({ where }: { where: { id: string } }) => {
        ledger.delete(where.id)
        order.push('release')
        return { id: where.id }
      }),
    },
  },
}))

vi.mock('@/lib/identity', () => ({
  findExistingUser: async () => ({ id: 'cuid_leaver' }),
  tryPrismaUserId: async () => 'cuid_leaver',
}))

const mockList = vi.fn()
const mockUpdate = vi.fn()
vi.mock('@/lib/stripe', () => ({
  stripe: {
    subscriptions: {
      list: (...a: unknown[]) => mockList(...a),
      update: (...a: unknown[]) => mockUpdate(...a),
    },
  },
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true, resetAt: Date.now() + 1000 }),
  getClientIp: () => '127.0.0.1',
}))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({ from: () => ({ insert: async () => ({ error: null }) }) }),
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: USER }, error: null }) },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: { stripe_customer_id: 'cus_1' }, error: null }),
        }),
      }),
    }),
  }),
}))

let fetchSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  order.length = 0
  ledger.clear()
  process.env.RESEND_API_KEY = 're_test'
  process.env.CRON_SECRET = 'test-cron-secret'
  process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED = 'true'
  delete process.env.SMTP_HOST
  mockList.mockResolvedValue({
    data: [{ id: 'sub_1', status: 'active', cancel_at_period_end: false, metadata: {} }],
  })
  mockUpdate.mockImplementation(async (id: string, params: Record<string, unknown>) => ({
    id,
    status: 'active',
    ...params,
  }))
  fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
    order.push('send')
    return new Response('{"id":"re_1"}', { status: 200 }) as never
  })
  vi.spyOn(console, 'info').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
  delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
})

const { POST } = await import('@/app/api/stripe/cancel/route')

function cancel(): Promise<Response> {
  return POST(
    new NextRequest('http://localhost/api/stripe/cancel', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ reason: 'too-expensive', cancelImmediately: false }),
    }),
  )
}

type ResendBody = { to: string; subject: string; html: string; headers?: Record<string, string> }

function bodies(): ResendBody[] {
  return (fetchSpy.mock.calls as unknown as unknown[][])
    .filter((c) => String(c[0]).includes('api.resend.com'))
    .map((c) => JSON.parse((c[1] as { body: string }).body) as ResendBody)
}

describe('M7 cancellation confirmation', () => {
  it('sends once, to the account, after the cancellation succeeds', async () => {
    const res = await cancel()
    expect(res.status).toBe(200)
    await vi.waitFor(() => expect(bodies()).toHaveLength(1))

    const b = bodies()[0]
    expect(b.to).toBe('leaver@example.com')
    expect(b.subject).toBe(
      'Your plan is cancelled: access continues until the end of the period you have paid for',
    )
    expect(b.html).toContain('/account/billing?ref=em-cx')
    expect(b.headers?.['List-Unsubscribe']).toMatch(
      /^<https:\/\/theenglishhub\.app\/api\/unsubscribe\?token=/,
    )
    expect(b.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')
    expect(order).toEqual(['claim:M7_CANCEL_SCHEDULED:sub_1', 'send'])
  })

  it('uses the free-days wording for a subscription still in its trial', async () => {
    mockList.mockResolvedValue({
      data: [{ id: 'sub_t', status: 'trialing', cancel_at_period_end: false, metadata: {} }],
    })
    await cancel()
    await vi.waitFor(() => expect(bodies()).toHaveLength(1))
    expect(bodies()[0].subject).toBe(
      'Your plan is cancelled: access continues until your free trial ends',
    )
  })

  it('states no date', async () => {
    await cancel()
    await vi.waitFor(() => expect(bodies()).toHaveLength(1))
    expect(bodies()[0].html).not.toMatch(
      /\b\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) \d{4}\b/,
    )
  })

  it('sends nothing while the switch is off', async () => {
    delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
    const res = await cancel()
    expect(res.status).toBe(200)
    await new Promise((r) => setTimeout(r, 20))
    expect(bodies()).toHaveLength(0)
  })

  it('sends nothing when the cancellation was already scheduled', async () => {
    mockList.mockResolvedValue({
      data: [{ id: 'sub_1', status: 'active', cancel_at_period_end: true, metadata: {} }],
    })
    await cancel()
    await new Promise((r) => setTimeout(r, 20))
    expect(bodies()).toHaveLength(0)
  })
})
