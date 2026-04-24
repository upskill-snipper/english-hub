import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest'
import { NextRequest } from 'next/server'

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

const mockSessionCreate = vi.fn()
const mockCustomerCreate = vi.fn()

const MOCK_PRICE_IDS = {
  PRO_MONTHLY: 'price_monthly_123',
  PRO_ANNUAL: 'price_annual_123',
  KS3_READING: 'price_ks3_reading',
  KS3_WRITING: 'price_ks3_writing',
  KS3_GRAMMAR: 'price_ks3_grammar',
  GCSE_LANG_READING: 'price_gcse_lang_reading',
  GCSE_LANG_WRITING: 'price_gcse_lang_writing',
  GCSE_LIT_POETRY: 'price_gcse_lit_poetry',
  GCSE_LIT_PROSE: 'price_gcse_lit_prose',
  GCSE_REVISION: 'price_gcse_revision',
}

const MOCK_COURSE_PRICE_MAP: Record<string, string> = {
  'ks3-reading': 'price_ks3_reading',
  'ks3-writing': 'price_ks3_writing',
}

vi.mock('@/lib/stripe', () => ({
  stripe: {
    checkout: { sessions: { create: (...args: unknown[]) => mockSessionCreate(...args) } },
    customers: { create: (...args: unknown[]) => mockCustomerCreate(...args) },
  },
  PRICE_IDS: MOCK_PRICE_IDS,
  COURSE_PRICE_MAP: MOCK_COURSE_PRICE_MAP,
}))

const mockRateLimit = vi.fn()
const mockGetClientIp = vi.fn()

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: (...args: unknown[]) => mockRateLimit(...args),
  getClientIp: (...args: unknown[]) => mockGetClientIp(...args),
}))

// Chainable Supabase mock
function createSupabaseMock() {
  const singleFn = vi.fn(() => ({
    data: { stripe_customer_id: 'cus_existing_123' },
    error: null,
  }))
  const selectEqFn = vi.fn(() => ({ single: singleFn }))
  const selectFn = vi.fn(() => ({ eq: selectEqFn }))

  const updateEqFn = vi.fn(() => ({ error: null }))
  const updateFn = vi.fn(() => ({ eq: updateEqFn }))

  const fromFn = vi.fn(() => ({
    select: selectFn,
    update: updateFn,
  }))

  const getUserFn = vi.fn(() => ({
    data: { user: { id: 'user-abc', email: 'test@example.com' } },
    error: null,
  }))

  return {
    from: fromFn,
    auth: { getUser: getUserFn },
    _mocks: { fromFn, selectFn, selectEqFn, singleFn, updateFn, updateEqFn, getUserFn },
  }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => supabaseMock,
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/stripe/checkout', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

// ---------------------------------------------------------------------------
// Import handler (AFTER mocks are registered)
// ---------------------------------------------------------------------------

let POST: (req: NextRequest) => Promise<Response>

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('POST /api/stripe/checkout', () => {
  beforeAll(async () => {
    const mod = await import('@/app/api/stripe/checkout/route')
    POST = mod.POST
  })

  beforeEach(() => {
    vi.clearAllMocks()

    // Defaults: rate limit passes, IP resolved
    mockRateLimit.mockResolvedValue({ success: true, resetAt: Date.now() + 300_000 })
    mockGetClientIp.mockReturnValue('127.0.0.1')

    // Fresh supabase mock per test
    supabaseMock = createSupabaseMock()

    // Default session create response
    mockSessionCreate.mockResolvedValue({ url: 'https://checkout.stripe.com/session_123' })

    // Env vars used by route
    process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000'
    process.env.STRIPE_PRICE_PRO_MONTHLY = 'price_monthly_123'
    process.env.STRIPE_PRICE_PRO_ANNUAL = 'price_annual_123'
  })

  // ---- 1. Rate limiting ----
  it('returns 429 when rate limited', async () => {
    mockRateLimit.mockResolvedValue({ success: false, resetAt: Date.now() + 60_000 })

    const res = await POST(buildRequest({ priceId: 'price_monthly_123', mode: 'subscription' }))

    expect(res.status).toBe(429)
    const json = await res.json()
    expect(json.error).toMatch(/too many requests/i)
    expect(res.headers.get('Retry-After')).toBeTruthy()
  })

  // ---- 2. Invalid / missing body ----
  it('returns 400 for invalid body (unparseable JSON)', async () => {
    const req = new NextRequest('http://localhost/api/stripe/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: 'not-json{{{',
    })

    const res = await POST(req)

    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/invalid request body/i)
  })

  it('returns 400 when priceId and plan are both missing', async () => {
    const res = await POST(buildRequest({ mode: 'subscription' }))

    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/missing required fields/i)
  })

  // ---- 3. Invalid mode ----
  it('returns 400 for invalid mode', async () => {
    const res = await POST(buildRequest({ priceId: 'price_monthly_123', mode: 'donate' }))

    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/invalid mode/i)
  })

  // ---- 4. Invalid priceId ----
  it('returns 400 for invalid priceId', async () => {
    const res = await POST(buildRequest({ priceId: 'price_fake_999', mode: 'subscription' }))

    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toMatch(/invalid price id/i)
  })

  // ---- 5. Unauthenticated ----
  it('returns 401 for unauthenticated requests', async () => {
    supabaseMock._mocks.getUserFn.mockResolvedValue({
      data: { user: null } as any,
      error: { message: 'Not authenticated' } as any,
    })

    const res = await POST(buildRequest({ priceId: 'price_monthly_123', mode: 'subscription' }))

    expect(res.status).toBe(401)
    const json = await res.json()
    expect(json.error).toMatch(/unauthorized/i)
  })

  // ---- 6. Valid subscription request returns checkout URL ----
  it('returns checkout URL for valid subscription request', async () => {
    const res = await POST(buildRequest({ priceId: 'price_monthly_123', mode: 'subscription' }))

    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.url).toBe('https://checkout.stripe.com/session_123')

    expect(mockSessionCreate).toHaveBeenCalledOnce()
    const params = mockSessionCreate.mock.calls[0][0]
    expect(params.mode).toBe('subscription')
    expect(params.customer).toBe('cus_existing_123')
    expect(params.line_items).toEqual([{ price: 'price_monthly_123', quantity: 1 }])
  })

  // ---- 7. Valid payment request returns checkout URL ----
  it('returns checkout URL for valid payment request', async () => {
    const res = await POST(
      buildRequest({ priceId: 'price_ks3_reading', mode: 'payment', courseId: 'ks3-reading' })
    )

    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.url).toBe('https://checkout.stripe.com/session_123')

    const params = mockSessionCreate.mock.calls[0][0]
    expect(params.mode).toBe('payment')
    expect(params.payment_intent_data.metadata.courseId).toBe('ks3-reading')
  })

  // ---- 8. Subscription includes trial_period_days ----
  it('includes trial_period_days for subscriptions', async () => {
    await POST(buildRequest({ priceId: 'price_annual_123', mode: 'subscription' }))

    const params = mockSessionCreate.mock.calls[0][0]
    expect(params.subscription_data).toBeDefined()
    // PRICING.TRIAL_DAYS === 7 — the 30-day trial was replaced by a 7-day
    // card-required trial on 2026-04-20. If this assertion changes, update
    // `src/constants/pricing.ts` (TRIAL_DAYS) first.
    expect(params.subscription_data.trial_period_days).toBe(7)
    expect(params.allow_promotion_codes).toBe(true)
  })

  // ---- 9. Affiliate referral metadata ----
  it('includes affiliate referral metadata when provided', async () => {
    await POST(
      buildRequest({
        priceId: 'price_monthly_123',
        mode: 'subscription',
        rewardful_referral: 'ref_abc123',
      })
    )

    const params = mockSessionCreate.mock.calls[0][0]
    expect(params.metadata.rewardful_referral).toBe('ref_abc123')
  })
})
