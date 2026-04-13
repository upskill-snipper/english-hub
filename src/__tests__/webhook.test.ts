import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

const mockConstructEvent = vi.fn()
const mockRetrieveSubscription = vi.fn()

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...args: unknown[]) => mockConstructEvent(...args) },
    subscriptions: { retrieve: (...args: unknown[]) => mockRetrieveSubscription(...args) },
  },
}))

// Build a chainable Supabase mock that records calls.
// The real webhook route performs an idempotency check against
// `webhook_events` before processing events, then inserts into
// `webhook_events` afterwards. We need table-aware mocks so the
// idempotency check returns "no existing event" while profile
// lookups return the expected profile data.
function createSupabaseMock() {
  const updateInFn = vi.fn(() => ({ error: null, count: 0 }))
  const updateEqFn = vi.fn(() => ({ error: null, in: updateInFn }))
  const updateFn = vi.fn(() => ({ eq: updateEqFn }))

  const singleFn = vi.fn(() => ({ data: { id: 'user-123', email: 'test@test.com', subscription_status: 'pro' }, error: null }))
  const inFn = vi.fn(() => ({ single: vi.fn(() => ({ data: null, error: null })) }))
  const selectEqFn = vi.fn(() => ({ single: singleFn, in: inFn }))
  const selectFn = vi.fn(() => ({ eq: selectEqFn }))

  const upsertFn = vi.fn(() => ({ error: null }))
  const insertFn = vi.fn(() => ({ error: null }))

  // webhook_events table — idempotency check must return null (no duplicate)
  const webhookEventsChain = {
    select: vi.fn(() => ({
      eq: vi.fn(() => ({
        single: vi.fn(() => ({ data: null, error: null })),
      })),
    })),
    insert: insertFn,
  }

  // Default chain for all other tables (profiles, enrolments, affiliate_referrals, etc.)
  const defaultChain = () => ({
    update: updateFn,
    select: selectFn,
    upsert: upsertFn,
    insert: insertFn,
  })

  const fromFn = vi.fn((table: string) => {
    if (table === 'webhook_events') return webhookEventsChain
    return defaultChain()
  })

  return {
    from: fromFn,
    // Expose inner mocks so tests can inspect/override them
    _mocks: { fromFn, updateFn, updateEqFn, selectFn, selectEqFn, singleFn, inFn, upsertFn, insertFn },
  }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => supabaseMock,
}))

vi.mock('@/lib/affiliate/attribution', () => ({
  attributeAffiliateReferral: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildRequest(body: string, signature: string | null): NextRequest {
  const headers = new Headers({ 'content-type': 'application/json' })
  if (signature) headers.set('stripe-signature', signature)
  return new NextRequest('http://localhost/api/stripe/webhook', {
    method: 'POST',
    headers,
    body,
  })
}

function makeEvent(type: string, data: unknown): Stripe.Event {
  return {
    id: 'evt_test',
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

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Stripe Webhook POST handler', () => {
  let POST: (req: NextRequest) => Promise<Response>

  beforeEach(async () => {
    vi.resetModules()
    vi.clearAllMocks()
    supabaseMock = createSupabaseMock()
    process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'

    // Re-import to pick up fresh mocks
    const mod = await import('@/app/api/stripe/webhook/route')
    POST = mod.POST
  })

  // ── Signature verification ──────────────────────────────────────────────

  it('returns 500 when STRIPE_WEBHOOK_SECRET is not set', async () => {
    delete process.env.STRIPE_WEBHOOK_SECRET
    const mod = await import('@/app/api/stripe/webhook/route')
    const res = await mod.POST(buildRequest('{}', 'sig_test'))
    expect(res.status).toBe(500)
    expect(await res.json()).toEqual({ error: 'Webhook endpoint is not configured' })
  })

  it('returns 400 when stripe-signature header is missing', async () => {
    const res = await POST(buildRequest('{}', null))
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({ error: 'Missing stripe-signature header' })
  })

  it('returns 400 when signature verification fails', async () => {
    mockConstructEvent.mockImplementation(() => {
      throw new Error('Invalid signature')
    })
    const res = await POST(buildRequest('{}', 'bad_sig'))
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({ error: 'Invalid webhook signature' })
  })

  // ── checkout.session.completed (subscription) ──────────────────────────

  it('handles checkout.session.completed for subscriptions', async () => {
    const session = {
      id: 'cs_test',
      mode: 'subscription',
      subscription: 'sub_123',
      metadata: { userId: 'user-123' },
      payment_intent: null,
    }
    mockConstructEvent.mockReturnValue(makeEvent('checkout.session.completed', session))
    mockRetrieveSubscription.mockResolvedValue({
      id: 'sub_123',
      status: 'active',
      current_period_end: 1700000000,
    })

    const res = await POST(buildRequest('{}', 'sig_ok'))

    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ received: true })
    expect(mockRetrieveSubscription).toHaveBeenCalledWith('sub_123')
    expect(supabaseMock.from).toHaveBeenCalledWith('profiles')
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'pro' })
    )
    expect(supabaseMock._mocks.updateEqFn).toHaveBeenCalledWith('id', 'user-123')
  })

  it('maps trialing subscription status to pro', async () => {
    const session = {
      id: 'cs_test',
      mode: 'subscription',
      subscription: 'sub_trial',
      metadata: { userId: 'user-123' },
    }
    mockConstructEvent.mockReturnValue(makeEvent('checkout.session.completed', session))
    mockRetrieveSubscription.mockResolvedValue({
      id: 'sub_trial',
      status: 'trialing',
      current_period_end: 1700000000,
    })

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'pro' })
    )
  })

  it('maps incomplete subscription status to incomplete', async () => {
    const session = {
      id: 'cs_test',
      mode: 'subscription',
      subscription: 'sub_inc',
      metadata: { userId: 'user-123' },
    }
    mockConstructEvent.mockReturnValue(makeEvent('checkout.session.completed', session))
    mockRetrieveSubscription.mockResolvedValue({
      id: 'sub_inc',
      status: 'incomplete',
      current_period_end: 1700000000,
    })

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'incomplete' })
    )
  })

  // ── checkout.session.completed (one-time payment) ──────────────────────

  it('handles checkout.session.completed for one-time payments', async () => {
    const session = {
      id: 'cs_pay',
      mode: 'payment',
      subscription: null,
      payment_intent: 'pi_abc',
      metadata: { userId: 'user-123', courseId: 'course-456' },
    }
    mockConstructEvent.mockReturnValue(makeEvent('checkout.session.completed', session))

    const res = await POST(buildRequest('{}', 'sig_ok'))

    expect(res.status).toBe(200)
    expect(supabaseMock.from).toHaveBeenCalledWith('enrolments')
    expect(supabaseMock._mocks.upsertFn).toHaveBeenCalledWith(
      {
        user_id: 'user-123',
        course_id: 'course-456',
        payment_type: 'one_time',
        stripe_payment_intent_id: 'pi_abc',
      },
      { onConflict: 'user_id,course_id' }
    )
  })

  it('returns 400 when checkout.session.completed is missing userId', async () => {
    const session = {
      id: 'cs_no_user',
      mode: 'subscription',
      subscription: 'sub_x',
      metadata: {},
    }
    mockConstructEvent.mockReturnValue(makeEvent('checkout.session.completed', session))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toContain('Missing required metadata')
  })

  it('returns 400 when payment checkout is missing courseId', async () => {
    const session = {
      id: 'cs_no_course',
      mode: 'payment',
      payment_intent: 'pi_x',
      metadata: { userId: 'user-123' },
    }
    mockConstructEvent.mockReturnValue(makeEvent('checkout.session.completed', session))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toContain('Missing required metadata')
  })

  // ── customer.subscription.updated ──────────────────────────────────────

  it('handles customer.subscription.updated with userId in metadata', async () => {
    const subscription = {
      id: 'sub_upd',
      status: 'past_due',
      customer: 'cus_123',
      metadata: { userId: 'user-123' },
      current_period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.updated', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'past_due' })
    )
  })

  it('handles customer.subscription.updated falling back to stripe_customer_id lookup', async () => {
    const subscription = {
      id: 'sub_upd2',
      status: 'active',
      customer: 'cus_456',
      metadata: {},
      current_period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.updated', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    // Should have queried profiles by stripe_customer_id
    expect(supabaseMock._mocks.selectEqFn).toHaveBeenCalledWith('stripe_customer_id', 'cus_456')
  })

  // ── customer.subscription.deleted ──────────────────────────────────────

  it('handles customer.subscription.deleted and sets status to cancelled', async () => {
    const subscription = {
      id: 'sub_del',
      status: 'canceled',
      customer: 'cus_123',
      metadata: { userId: 'user-123' },
      ended_at: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.deleted', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'cancelled' })
    )
    // Should also check affiliate_referrals
    expect(supabaseMock.from).toHaveBeenCalledWith('affiliate_referrals')
  })

  // ── invoice.payment_failed ─────────────────────────────────────────────

  it('handles invoice.payment_failed by looking up customer profile', async () => {
    const invoice = {
      id: 'inv_fail',
      customer: 'cus_789',
      amount_due: 2000,
      currency: 'gbp',
    }
    mockConstructEvent.mockReturnValue(makeEvent('invoice.payment_failed', invoice))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock.from).toHaveBeenCalledWith('profiles')
    expect(supabaseMock._mocks.selectEqFn).toHaveBeenCalledWith('stripe_customer_id', 'cus_789')
  })

  // ── invoice.paid ───────────────────────────────────────────────────────

  it('handles invoice.paid and updates subscription status to pro', async () => {
    const invoice = {
      id: 'inv_paid',
      customer: 'cus_123',
      subscription: 'sub_abc',
      amount_paid: 1500,
      currency: 'gbp',
      period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('invoice.paid', invoice))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'pro' })
    )
  })

  it('handles invoice.paid without subscription (no profile update)', async () => {
    const invoice = {
      id: 'inv_paid_no_sub',
      customer: 'cus_123',
      subscription: null,
      amount_paid: 500,
      currency: 'gbp',
    }
    mockConstructEvent.mockReturnValue(makeEvent('invoice.paid', invoice))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    // update should not be called because invoice.subscription is null
    expect(supabaseMock._mocks.updateFn).not.toHaveBeenCalled()
  })

  // ── charge.succeeded ───────────────────────────────────────────────────

  it('handles charge.succeeded (logging only)', async () => {
    const charge = {
      id: 'ch_test',
      customer: 'cus_123',
      amount: 2000,
      currency: 'gbp',
    }
    mockConstructEvent.mockReturnValue(makeEvent('charge.succeeded', charge))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ received: true })
  })

  // ── customer.subscription.created ──────────────────────────────────────

  it('handles customer.subscription.created with userId in metadata', async () => {
    const subscription = {
      id: 'sub_new',
      status: 'active',
      customer: 'cus_123',
      metadata: { userId: 'user-123' },
      current_period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.created', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.updateFn).toHaveBeenCalledWith(
      expect.objectContaining({ subscription_status: 'pro' })
    )
    expect(supabaseMock._mocks.updateEqFn).toHaveBeenCalledWith('id', 'user-123')
  })

  it('handles customer.subscription.created falling back to customer lookup', async () => {
    const subscription = {
      id: 'sub_new2',
      status: 'active',
      customer: 'cus_999',
      metadata: {},
      current_period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.created', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(supabaseMock._mocks.selectEqFn).toHaveBeenCalledWith('stripe_customer_id', 'cus_999')
  })

  it('returns 200 and does nothing when user cannot be resolved for subscription.created', async () => {
    // Override single() to return no profile
    supabaseMock._mocks.singleFn.mockReturnValue({ data: null, error: null } as any)

    const subscription = {
      id: 'sub_orphan',
      status: 'active',
      customer: 'cus_unknown',
      metadata: {},
      current_period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.created', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    // update should not be called since no user was found
    expect(supabaseMock._mocks.updateFn).not.toHaveBeenCalled()
  })

  // ── Unhandled event ────────────────────────────────────────────────────

  it('returns 200 for unhandled event types', async () => {
    mockConstructEvent.mockReturnValue(makeEvent('payment_intent.created', { id: 'pi_x' }))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ received: true })
  })

  // ── Error handling ─────────────────────────────────────────────────────

  it('returns 500 when supabase update throws', async () => {
    supabaseMock._mocks.updateEqFn.mockReturnValue({ error: { message: 'DB error' } } as any)

    const subscription = {
      id: 'sub_err',
      status: 'active',
      customer: 'cus_123',
      metadata: { userId: 'user-123' },
      current_period_end: 1700000000,
    }
    mockConstructEvent.mockReturnValue(makeEvent('customer.subscription.updated', subscription))

    const res = await POST(buildRequest('{}', 'sig_ok'))
    expect(res.status).toBe(500)
    expect(await res.json()).toEqual({ error: 'Webhook handler failed' })
  })
})
