import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'

/**
 * charge.refunded under both Stripe API shapes.
 *
 * A refund voids the affiliate commission booked against the subscription the
 * charge paid for. The handler found that subscription through
 * `charge.invoice`, which exists only in the OLD shape: under the pinned
 * `2026-02-25.clover` version a Charge has no `invoice` field at all
 * (node_modules/stripe/types/Charges.d.ts mentions the word once, in the
 * receipt_url comment), and the charge-to-invoice link is the InvoicePayment
 * object, looked up by payment intent (InvoicePayments.d.ts:49 `invoice`, :81
 * `payment.payment_intent`). So on a clover payload every refund resolved to
 * no subscription, no commission was voided, and a console.warn was the only
 * trace. Commission is money, so the unresolvable case and a failed lookup are
 * now reported at error level, not warned.
 */

const SUB = 'sub_1'
const INVOICE = 'in_1'
const PI = 'pi_1'

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => 'ckusr0000prismacuid0001',
  tryPrismaUserId: async () => 'ckusr0000prismacuid0001',
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
const mockListInvoicePayments = vi.fn()
const mockRetrieveInvoice = vi.fn()
vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: { retrieve: vi.fn(), list: async () => ({ data: [] }) },
    customers: { retrieve: async () => ({ deleted: false, email: 'p@example.com' }) },
    invoices: { retrieve: (...a: unknown[]) => mockRetrieveInvoice(...(a as [])) },
    invoicePayments: { list: (...a: unknown[]) => mockListInvoicePayments(...(a as [])) },
  },
  isIeltsPriceId: () => false,
}))

/** Every affiliate_referrals update: the payload and the subscription id it was keyed on. */
let voids: Array<{ payload: Record<string, unknown>; subscriptionId: string }> = []

function createSupabaseMock() {
  const affiliateReferrals = {
    update: (payload: Record<string, unknown>) => ({
      eq: (_col: string, subscriptionId: string) => ({
        in: async () => {
          voids.push({ payload, subscriptionId })
          return { error: null, count: 1 }
        },
      }),
    }),
  }
  const webhookEvents = {
    insert: async () => ({ error: null }),
    delete: () => ({ eq: async () => ({ error: null }) }),
  }
  const profiles = {
    select: () => ({
      eq: () => ({ single: async () => ({ data: null, error: { code: 'PGRST116' } }) }),
    }),
    update: () => ({ eq: () => ({ error: null }) }),
  }
  return {
    from: (table: string) =>
      table === 'webhook_events'
        ? webhookEvents
        : table === 'affiliate_referrals'
          ? affiliateReferrals
          : profiles,
  }
}

let supabaseMock: ReturnType<typeof createSupabaseMock>
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => supabaseMock }))

// ─── Fixtures in both shapes ────────────────────────────────────────────

type Shape = 'old' | 'clover'

/** A refunded charge. Old shape names its invoice; clover names only the payment intent. */
function charge(shape: Shape, over: Record<string, unknown> = {}): Stripe.Charge {
  return {
    id: 'ch_1',
    object: 'charge',
    customer: 'cus_1',
    amount: 399,
    amount_refunded: 399,
    refunded: true,
    payment_intent: PI,
    ...(shape === 'old' ? { invoice: INVOICE } : {}),
    ...over,
  } as unknown as Stripe.Charge
}

/** The invoice as the pinned client returns it: the subscription under `parent`. */
function cloverInvoice(subscriptionId: string | null): Stripe.Invoice {
  return {
    id: INVOICE,
    object: 'invoice',
    parent: subscriptionId
      ? { type: 'subscription_details', subscription_details: { subscription: subscriptionId } }
      : null,
  } as unknown as Stripe.Invoice
}

function makeEvent(data: unknown, shape: Shape): Stripe.Event {
  return {
    id: `evt_${Math.random().toString(36).slice(2)}`,
    object: 'event',
    api_version: shape === 'old' ? '2023-10-16' : '2026-02-25.clover',
    created: Math.floor(Date.now() / 1000),
    type: 'charge.refunded',
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
  voids = []
  supabaseMock = createSupabaseMock()
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  mockListInvoicePayments.mockResolvedValue({ data: [{ id: 'inpay_1', invoice: INVOICE }] })
  mockRetrieveInvoice.mockResolvedValue(cloverInvoice(SUB))
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
  warnSpy.mockRestore()
  infoSpy.mockRestore()
})

const listArgs = () =>
  (mockListInvoicePayments.mock.calls as unknown as unknown[][])[0]?.[0] as
    | { payment?: { type?: string; payment_intent?: string } }
    | undefined

// ═══════════════════════════════════════════════════════════════════════

describe.each<Shape>(['old', 'clover'])('charge.refunded in the %s shape', (shape) => {
  it('voids the commission on the subscription the charge paid for', async () => {
    const res = await post(makeEvent(charge(shape), shape))
    expect(res.status).toBe(200)
    expect(voids).toHaveLength(1)
    expect(voids[0]!.subscriptionId).toBe(SUB)
    expect(voids[0]!.payload.commission_status).toBe('refunded')
    expect(mockRetrieveInvoice).toHaveBeenCalledWith(INVOICE)
  })

  it('reports nothing at error level when it succeeds', async () => {
    await post(makeEvent(charge(shape), shape))
    expect(mockCaptureMessage).not.toHaveBeenCalled()
    expect(mockCaptureException).not.toHaveBeenCalled()
  })
})

describe('how the invoice is found', () => {
  it('old shape: reads charge.invoice and never asks for invoice payments', async () => {
    await post(makeEvent(charge('old'), 'old'))
    expect(mockListInvoicePayments).not.toHaveBeenCalled()
  })

  it('old shape: accepts an expanded invoice object', async () => {
    await post(makeEvent(charge('old', { invoice: { id: INVOICE, object: 'invoice' } }), 'old'))
    expect(voids.map((v) => v.subscriptionId)).toEqual([SUB])
  })

  it('clover: asks for the invoice payment on the payment intent', async () => {
    await post(makeEvent(charge('clover'), 'clover'))
    expect(listArgs()?.payment).toEqual({ type: 'payment_intent', payment_intent: PI })
  })

  it('clover: accepts an expanded invoice on the invoice payment', async () => {
    mockListInvoicePayments.mockResolvedValue({
      data: [{ id: 'inpay_1', invoice: { id: INVOICE, object: 'invoice' } }],
    })
    await post(makeEvent(charge('clover'), 'clover'))
    expect(voids.map((v) => v.subscriptionId)).toEqual([SUB])
  })
})

describe('when there is nothing to void', () => {
  it('a payment intent with no invoice is a one-off purchase: no void, no alarm', async () => {
    mockListInvoicePayments.mockResolvedValue({ data: [] })
    const res = await post(makeEvent(charge('clover'), 'clover'))
    expect(res.status).toBe(200)
    expect(voids).toEqual([])
    expect(mockRetrieveInvoice).not.toHaveBeenCalled()
    expect(mockCaptureMessage).not.toHaveBeenCalled()
    expect(mockCaptureException).not.toHaveBeenCalled()
  })

  it('an invoice with no subscription behind it voids nothing', async () => {
    mockRetrieveInvoice.mockResolvedValue(cloverInvoice(null))
    await post(makeEvent(charge('old'), 'old'))
    expect(voids).toEqual([])
    expect(mockCaptureMessage).not.toHaveBeenCalled()
  })
})

describe('when the subscription cannot be found', () => {
  it('neither an invoice nor a payment intent on the charge: reported at error level', async () => {
    const res = await post(makeEvent(charge('clover', { payment_intent: null }), 'clover'))
    expect(res.status).toBe(200)
    expect(voids).toEqual([])
    expect(mockListInvoicePayments).not.toHaveBeenCalled()
    const call = mockCaptureMessage.mock.calls[0] as unknown as
      | [string, { level: string; extra: Record<string, unknown> }]
      | undefined
    expect(call, 'a commission that should have been voided is money').toBeDefined()
    expect(call![1].level).toBe('error')
    expect(call![1].extra.chargeId).toBe('ch_1')
    const line = (errorSpy.mock.calls as unknown as unknown[][])
      .map((c) => String(c[0]))
      .find((l) => l.includes('REFUND_SUBSCRIPTION_UNRESOLVED'))
    expect(line).toBeDefined()
    expect(line).toContain('ch_1')
  })

  it('a failing Stripe lookup is reported, with the charge and payment intent, and still answers 200', async () => {
    mockListInvoicePayments.mockRejectedValue(new Error('Stripe unreachable'))
    const res = await post(makeEvent(charge('clover'), 'clover'))
    expect(res.status).toBe(200)
    expect(voids).toEqual([])
    expect(mockCaptureException).toHaveBeenCalled()
    const opts = (
      mockCaptureException.mock.calls[0] as unknown as [
        unknown,
        { extra: Record<string, unknown>; level: string },
      ]
    )[1]
    expect(opts.level).toBe('error')
    expect(opts.extra).toMatchObject({ chargeId: 'ch_1', paymentIntentId: PI })
  })
})
