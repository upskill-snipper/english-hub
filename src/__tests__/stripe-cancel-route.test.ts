import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * The in-app cancel button.
 *
 * `/dashboard/subscription/cancel` is the only caller of this route and posts
 * `{ reason, feedback, cancelImmediately: false }`. The route required
 * `fullName`, `email`, `subscriptionPlan` and `startDate`, so every click
 * returned 400 "Missing required fields". Nobody has ever cancelled from
 * inside the product.
 *
 * The first test below is the whole point: it sends the body the page actually
 * sends and expects success. Everything else pins the faults that sat behind
 * the 400 and would have surfaced the moment it was lifted.
 */

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

const mockRateLimit = vi.fn()
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: (...a: unknown[]) => mockRateLimit(...a),
  getClientIp: () => '127.0.0.1',
}))

let authUser: { id: string } | null = { id: 'user-123' }
let customerId: string | null = 'cus_123'
const feedbackInserts: Record<string, unknown>[] = []
let feedbackError: unknown = null

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      insert: async (row: Record<string, unknown>) => {
        feedbackInserts.push(row)
        return { error: feedbackError }
      },
    }),
  }),
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: authUser }, error: null }) },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({
            data: customerId ? { stripe_customer_id: customerId } : null,
            error: null,
          }),
        }),
      }),
    }),
  }),
}))

import { POST } from '@/app/api/stripe/cancel/route'

const PERIOD_END = 1_800_000_000
const PERIOD_END_ISO = new Date(PERIOD_END * 1000).toISOString()

function sub(over: Record<string, unknown> = {}) {
  return {
    id: 'sub_1',
    status: 'active',
    cancel_at_period_end: false,
    current_period_end: PERIOD_END,
    metadata: {},
    ...over,
  }
}

function post(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/stripe/cancel', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(body),
  })
}

/** Exactly what src/app/dashboard/subscription/cancel/page.tsx sends. */
const PAGE_BODY = {
  reason: 'too-expensive',
  feedback: 'Too pricey for me',
  cancelImmediately: false,
}

beforeEach(() => {
  vi.clearAllMocks()
  feedbackInserts.length = 0
  feedbackError = null
  authUser = { id: 'user-123' }
  customerId = 'cus_123'
  mockRateLimit.mockResolvedValue({ success: true, resetAt: Date.now() + 1000 })
  mockList.mockResolvedValue({ data: [sub()] })
  mockUpdate.mockImplementation(async (_id: string, params: Record<string, unknown>) => ({
    ...sub(),
    ...params,
  }))
})

// ─── The regression ─────────────────────────────────────────────────────

describe('the body the cancel page actually sends', () => {
  it('succeeds, where it previously returned 400', async () => {
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(200)
  })

  it('returns accessEndsAt, which the page renders and the old route omitted', async () => {
    const res = await POST(post(PAGE_BODY))
    const json = await res.json()
    // The page does setAccessEndDate(data.accessEndsAt). The old route returned
    // only { referenceNumber, message }, so even a success showed nothing.
    expect(json.accessEndsAt).toBe(PERIOD_END_ISO)
    expect(json.referenceNumber).toMatch(/^CAN-/)
  })

  it('schedules at period end rather than cancelling outright', async () => {
    await POST(post(PAGE_BODY))
    expect(mockUpdate).toHaveBeenCalledWith(
      'sub_1',
      expect.objectContaining({
        cancel_at_period_end: true,
      }),
    )
  })

  it('keeps the reason and the feedback on the subscription', async () => {
    await POST(post(PAGE_BODY))
    const params = mockUpdate.mock.calls[0][1] as { metadata: Record<string, string> }
    expect(params.metadata.cancellation_reason).toBe('too-expensive')
    expect(params.metadata.cancellation_feedback).toBe('Too pricey for me')
  })

  it('accepts a body with no reason and no feedback at all', async () => {
    // Nothing may block a customer from leaving. The legacy route made four
    // fields mandatory; none is now required.
    const res = await POST(post({}))
    expect(res.status).toBe(200)
  })
})

// ─── The faults behind the 400 ──────────────────────────────────────────

describe('which subscription gets cancelled', () => {
  it('cancels a trialing subscription, not just an active one', async () => {
    // A 7-day card trial is `trialing`. The old route listed status:'active'
    // only, so the people most likely to be cancelling were told they had no
    // subscription.
    mockList.mockResolvedValue({ data: [sub({ status: 'trialing' })] })
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(200)
    expect(mockUpdate).toHaveBeenCalled()
  })

  it('cancels a past_due subscription, which is still being billed for', async () => {
    mockList.mockResolvedValue({ data: [sub({ status: 'past_due' })] })
    expect((await POST(post(PAGE_BODY))).status).toBe(200)
  })

  it('refuses to guess when the customer holds two live subscriptions', async () => {
    // The old route took subscriptions.data[0], so a Pro + IELTS holder could
    // have had the wrong product cancelled with no warning.
    mockList.mockResolvedValue({ data: [sub(), sub({ id: 'sub_2' })] })
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(409)
    expect(mockUpdate).not.toHaveBeenCalled()
    const json = await res.json()
    expect(json.subscriptions).toHaveLength(2)
  })

  it('cancels the named one when the caller disambiguates', async () => {
    mockList.mockResolvedValue({ data: [sub(), sub({ id: 'sub_2' })] })
    const res = await POST(post({ ...PAGE_BODY, subscriptionId: 'sub_2' }))
    expect(res.status).toBe(200)
    expect(mockUpdate).toHaveBeenCalledWith('sub_2', expect.anything())
  })

  it('rejects a subscription id that is not on this account', async () => {
    mockList.mockResolvedValue({ data: [sub()] })
    const res = await POST(post({ ...PAGE_BODY, subscriptionId: 'sub_someone_else' }))
    expect(res.status).toBe(404)
    expect(mockUpdate).not.toHaveBeenCalled()
  })

  it('ignores subscriptions in a dead status', async () => {
    mockList.mockResolvedValue({
      data: [sub({ status: 'canceled' }), sub({ status: 'incomplete_expired', id: 'sub_2' })],
    })
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(404)
  })
})

// ─── Clicking twice ─────────────────────────────────────────────────────

describe('a subscription already scheduled to end', () => {
  it('reassures rather than reporting no subscription', async () => {
    mockList.mockResolvedValue({ data: [sub({ cancel_at_period_end: true })] })
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.alreadyScheduled).toBe(true)
    expect(json.accessEndsAt).toBe(PERIOD_END_ISO)
    // And it must not touch Stripe a second time.
    expect(mockUpdate).not.toHaveBeenCalled()
  })
})

// ─── Money stays the owner's ────────────────────────────────────────────

describe('scope', () => {
  it('refuses immediate cancellation, which would forfeit paid time', async () => {
    const res = await POST(post({ ...PAGE_BODY, cancelImmediately: true }))
    expect(res.status).toBe(400)
    expect(mockUpdate).not.toHaveBeenCalled()
  })

  it('never issues a refund on any path', async () => {
    await POST(post(PAGE_BODY))
    const calls = JSON.stringify(mockUpdate.mock.calls)
    expect(calls).not.toMatch(/refund|proration_behavior/i)
  })
})

// ─── Guards that must survive ───────────────────────────────────────────

describe('guards', () => {
  it('401s an unauthenticated caller', async () => {
    authUser = null
    expect((await POST(post(PAGE_BODY))).status).toBe(401)
  })

  it('400s when the profile has no Stripe customer', async () => {
    customerId = null
    expect((await POST(post(PAGE_BODY))).status).toBe(400)
  })

  it('429s when rate limited, before reaching Stripe', async () => {
    mockRateLimit.mockResolvedValue({ success: false, resetAt: Date.now() + 60_000 })
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(429)
    expect(mockList).not.toHaveBeenCalled()
  })

  it('400s on an over-long reason', async () => {
    const res = await POST(post({ reason: 'x'.repeat(2001) }))
    expect(res.status).toBe(400)
  })
})

// ─── The reason is kept ─────────────────────────────────────────────────

describe('recording why they left', () => {
  it('writes the reason and feedback to the database', () => {
    // Until now the answer went nowhere: the route could not succeed at all,
    // and once it could, the reason lived only in Stripe metadata - capped,
    // unqueryable, and invisible unless someone opened each subscription by
    // hand. These reasons are the only churn data the business has.
    return POST(post(PAGE_BODY)).then(() => {
      expect(feedbackInserts).toHaveLength(1)
      expect(feedbackInserts[0]).toMatchObject({
        user_id: 'user-123',
        reason: 'too-expensive',
        feedback: 'Too pricey for me',
        stripe_subscription_id: 'sub_1',
      })
    })
  })

  it('records when their access actually ends, for a later win-back', async () => {
    await POST(post(PAGE_BODY))
    expect(feedbackInserts[0]?.access_ends_at).toBe(PERIOD_END_ISO)
  })

  it('writes nothing when the customer said nothing', async () => {
    await POST(post({}))
    expect(feedbackInserts).toHaveLength(0)
  })

  it('never blocks a cancellation because the reason could not be stored', async () => {
    feedbackError = { message: 'permission denied' }
    const res = await POST(post(PAGE_BODY))
    expect(res.status).toBe(200)
    expect(mockUpdate).toHaveBeenCalled()
  })

  it('caps the free text so a paste cannot fill the table', async () => {
    await POST(post({ ...PAGE_BODY, feedback: 'x'.repeat(1999) }))
    expect(String(feedbackInserts[0]?.feedback).length).toBeLessThanOrEqual(2000)
  })

  it('stores no name, email or Stripe customer alongside the reason', async () => {
    // A churn reason joined to an identity is more personal data than the
    // question "why do people leave" requires.
    await POST(post(PAGE_BODY))
    const keys = Object.keys(feedbackInserts[0] ?? {})
    expect(keys).not.toContain('email')
    expect(keys).not.toContain('name')
    expect(keys).not.toContain('stripe_customer_id')
  })
})
