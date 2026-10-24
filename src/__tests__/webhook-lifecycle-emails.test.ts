import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * What the Stripe webhook actually sends (23 October 2026).
 *
 * src/__tests__/webhook.test.ts checks the payment-failed handler's profile
 * lookup and nothing else, so the email's "To avoid any interruption to your
 * subscription", false the moment the handler had written past_due, was never
 * read by a test. These assert the body that reaches Resend, through the real
 * sendEmail and the real lifecycle sender, for M6 (payment failed), M7 (plan
 * ended) and the card-trial reminder, plus the ledger that makes each one
 * once: claimed before the send, released when Resend refuses.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr_webhook_1'

const order: string[] = []
const ledger = new Set<string>()
let ledgerThrows = false

vi.mock('@/lib/prisma', () => ({
  prisma: {
    lifecycleEmail: {
      create: vi.fn(async ({ data }: { data: { userId: string; kind: string } }) => {
        if (ledgerThrows) throw new Error('relation "LifecycleEmail" does not exist')
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
  findExistingUser: async () => ({ id: PRISMA_CUID }),
  tryPrismaUserId: async () => PRISMA_CUID,
}))

vi.mock('@/lib/billing/subscription-sync', () => ({
  syncStripeSubscriptionToPrisma: async () => ({ ok: true, prismaUserId: PRISMA_CUID }),
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))

const mockConstructEvent = vi.fn()
const mockListSubscriptions = vi.fn(async () => ({ data: [] as unknown[] }))
vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: {
      retrieve: vi.fn(),
      list: (...a: unknown[]) => mockListSubscriptions(...(a as [])),
    },
    customers: { retrieve: vi.fn(async () => ({ deleted: false, email: 'payer@example.com' })) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: (id: string | null | undefined) => id === 'price_ielts_monthly',
}))

const profileUpdates: Record<string, unknown>[] = []
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: (table: string) => {
      if (table === 'webhook_events') {
        return {
          select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
          insert: async () => ({ error: null }),
        }
      }
      return {
        select: () => ({
          eq: () => ({
            single: async () => ({
              data: { id: SUPABASE_UUID, email: 'profile@example.com' },
              error: null,
            }),
          }),
        }),
        update: (row: Record<string, unknown>) => {
          profileUpdates.push(row)
          return {
            eq: () => ({
              error: null,
              in: async () => ({ error: null, count: 0 }),
            }),
          }
        },
        insert: async () => ({ error: null }),
      }
    },
  }),
}))

let fetchSpy: ReturnType<typeof vi.spyOn>
let resendStatus = 200

beforeEach(() => {
  order.length = 0
  ledger.clear()
  ledgerThrows = false
  profileUpdates.length = 0
  resendStatus = 200
  mockListSubscriptions.mockResolvedValue({ data: [] })
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  process.env.RESEND_API_KEY = 're_test'
  process.env.CRON_SECRET = 'test-cron-secret'
  process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED = 'true'
  delete process.env.SMTP_HOST
  fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async (url) => {
    if (String(url).includes('api.resend.com')) order.push('send')
    return new Response(resendStatus === 200 ? '{"id":"re_1"}' : 'refused', {
      status: resendStatus,
    }) as never
  })
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'info').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
  delete process.env.RESEND_API_KEY
  delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
})

function makeEvent(type: string, data: unknown, id = 'evt_1'): Stripe.Event {
  return {
    id,
    object: 'event',
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

type ResendBody = {
  to: string
  subject: string
  html: string
  text?: string
  headers?: Record<string, string>
}

function resendBodies(): ResendBody[] {
  return (fetchSpy.mock.calls as unknown as unknown[][])
    .filter((c) => String(c[0]).includes('api.resend.com'))
    .map((c) => JSON.parse((c[1] as { body: string }).body) as ResendBody)
}

async function deliver(event: Stripe.Event) {
  mockConstructEvent.mockReturnValue(event)
  const { POST } = await import('@/app/api/stripe/webhook/route')
  return POST(request())
}

const FAILED_INVOICE = {
  id: 'in_fail_1',
  customer: 'cus_1',
  subscription: 'sub_1',
  amount_due: 699,
  currency: 'gbp',
  lines: { data: [{ price: { id: 'price_student_monthly' } }] },
}

function expectOneClick(body: ResendBody) {
  expect(body.headers?.['List-Unsubscribe']).toMatch(
    /^<https:\/\/theenglishhub\.app\/api\/unsubscribe\?token=[^>]+>$/,
  )
  expect(body.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')
}

// ─── M6 ─────────────────────────────────────────────────────────────────────

// Merged 24 October 2026 with fix/stripe-webhook-2026-10-23, which keeps
// access through Stripe's retries: invoice.payment_failed writes nothing to
// the per-person field for any invoice. This file was written while the
// handler still wrote past_due, and asserted the "paused" copy that went with
// it. M6 says "paused" only when this handler removed access, so every M6 is
// now the copy that states nothing about access, and the two tests that
// pinned the write and the "paused" subject pin its absence instead. The
// "paused" variant itself is still built and checked in
// lifecycle-emails-copy.test.ts, for the day the retry-window choice is
// reversed.
describe('M6 payment failed', () => {
  it('sends the true copy once, to the Stripe customer, with both headers', async () => {
    const res = await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE))
    expect(res.status).toBe(200)

    const bodies = resendBodies()
    expect(bodies).toHaveLength(1)
    const [b] = bodies
    expect(b.to).toBe('payer@example.com')
    expect(b.subject).toBe('Your payment did not go through')
    expect(b.html).toContain('We tried to take £6.99 for your English Hub plan')
    expect(b.html).toContain('/account/billing?src=em-pf')
    expect(b.html).not.toMatch(/avoid any interruption/i)
    expect(b.text).toContain('To keep your plan, update your payment details')
    expect(b.text).not.toMatch(/paused|stays active|will end/i)
    expectOneClick(b)
    // The handler kept access through the retry window, which is why
    // "paused" would be false.
    expect(profileUpdates).not.toContainEqual({ subscription_status: 'past_due' })
  })

  it('claims the ledger row, keyed on the invoice, before the send', async () => {
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE))
    expect(order).toEqual(['claim:M6_PAYMENT_FAILED:in_fail_1', 'send'])
  })

  it('sends nothing the second time the same invoice fails', async () => {
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE, 'evt_1'))
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE, 'evt_2'))
    expect(resendBodies()).toHaveLength(1)
  })

  it('releases the claim when Resend refuses, so a later retry can tell them', async () => {
    resendStatus = 500
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE))
    expect(order).toEqual(['claim:M6_PAYMENT_FAILED:in_fail_1', 'send', 'release'])
    expect(ledger.size).toBe(0)
  })

  it('still tells the customer when the ledger table does not exist yet', async () => {
    ledgerThrows = true
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE))
    expect(resendBodies()).toHaveLength(1)
  })

  it('is not behind the lifecycle switch: it was live before it', async () => {
    delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE))
    expect(resendBodies()).toHaveLength(1)
  })

  // 24 October 2026. This handler wrote past_due for an IELTS-only invoice
  // too, the one handler with no IELTS carve-out, so a customer holding a
  // Student plan beside an IELTS plan lost their Student access when the
  // IELTS payment failed, and invoice.paid never wrote 'pro' back. The email
  // then said their plan "stays active for now".
  it('an IELTS-only failure leaves the per-person field alone and names the IELTS plan', async () => {
    const ieltsInvoice = {
      ...FAILED_INVOICE,
      id: 'in_ielts_1',
      subscription: 'sub_ielts',
      amount_due: 3900,
      lines: { data: [{ price: { id: 'price_ielts_monthly' } }] },
    }
    const res = await deliver(makeEvent('invoice.payment_failed', ieltsInvoice))
    expect(res.status).toBe(200)

    expect(profileUpdates).not.toContainEqual({ subscription_status: 'past_due' })
    const bodies = resendBodies()
    expect(bodies).toHaveLength(1)
    expect(bodies[0].subject).toBe('Your payment did not go through')
    expect(bodies[0].text).toContain('We tried to take £39.00 for your IELTS plan')
    expect(bodies[0].text).not.toMatch(/paused|stays active|will end/i)
  })

  it('a failure on a mixed invoice, IELTS and a main plan, writes nothing and names the main plan', async () => {
    const mixed = {
      ...FAILED_INVOICE,
      id: 'in_mixed_1',
      lines: {
        data: [
          { price: { id: 'price_ielts_monthly' } },
          { price: { id: 'price_student_monthly' } },
        ],
      },
    }
    await deliver(makeEvent('invoice.payment_failed', mixed))
    expect(profileUpdates).not.toContainEqual({ subscription_status: 'past_due' })
    const [b] = resendBodies()
    expect(b.subject).toBe('Your payment did not go through')
    expect(b.text).toContain('for your English Hub plan')
    expect(b.text).not.toMatch(/paused/i)
  })

  it('sends nothing for a duplicate covered by another live subscription', async () => {
    mockListSubscriptions.mockResolvedValue({
      data: [
        {
          id: 'sub_paid',
          status: 'active',
          items: { data: [{ price: { id: 'price_student_monthly', product: 'prod_x' } }] },
        },
      ],
    })
    await deliver(makeEvent('invoice.payment_failed', FAILED_INVOICE))
    expect(resendBodies()).toHaveLength(0)
  })
})

// ─── M7 ended ───────────────────────────────────────────────────────────────

function endedSubscription(over: Record<string, unknown> = {}) {
  return {
    id: 'sub_ended_1',
    customer: 'cus_1',
    status: 'canceled',
    ended_at: Math.floor(Date.now() / 1000),
    metadata: { userId: SUPABASE_UUID },
    items: { data: [{ price: { id: 'price_student_monthly', recurring: { interval: 'month' } } }] },
    ...over,
  }
}

describe('M7 plan ended', () => {
  it('sends once when the deletion revoked the entitlement, with both headers', async () => {
    await deliver(makeEvent('customer.subscription.deleted', endedSubscription()))

    const bodies = resendBodies()
    expect(bodies).toHaveLength(1)
    expect(bodies[0].to).toBe('payer@example.com')
    expect(bodies[0].subject).toBe('Your plan has ended')
    expect(bodies[0].html).toContain('Your account stays open on the free plan.')
    expectOneClick(bodies[0])
    expect(order).toEqual(['claim:M7_PLAN_ENDED:sub_ended_1', 'send'])
    // The entitlement write it sits beside is unchanged.
    expect(profileUpdates.some((u) => u.subscription_status === 'cancelled')).toBe(true)
  })

  it('sends nothing while the switch is off', async () => {
    delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
    await deliver(makeEvent('customer.subscription.deleted', endedSubscription()))
    expect(resendBodies()).toHaveLength(0)
    expect(profileUpdates.some((u) => u.subscription_status === 'cancelled')).toBe(true)
  })

  it('sends nothing when a duplicate is cleaned up and the paid plan lives on', async () => {
    mockListSubscriptions.mockResolvedValue({
      data: [
        {
          id: 'sub_paid',
          status: 'active',
          items: { data: [{ price: { id: 'price_student_monthly', product: 'prod_x' } }] },
        },
      ],
    })
    await deliver(makeEvent('customer.subscription.deleted', endedSubscription()))
    expect(resendBodies()).toHaveLength(0)
  })
})

// ─── The card-trial reminder, which nothing else here references ────────────

describe('the card-trial reminder', () => {
  it('reaches Resend with the copy that names the one payment', async () => {
    await deliver(
      makeEvent('customer.subscription.trial_will_end', {
        id: 'sub_trial_1',
        customer: 'cus_1',
        trial_end: Math.floor(Date.UTC(2026, 10, 3) / 1000),
      }),
    )
    const bodies = resendBodies()
    expect(bodies).toHaveLength(1)
    expect(bodies[0].to).toBe('payer@example.com')
    expect(bodies[0].subject).toBe('Your free trial is ending soon - The English Hub')
    expect(bodies[0].html).toContain('the first payment for the plan you chose')
  })
})
