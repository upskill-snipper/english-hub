import { describe, it, expect } from 'vitest'
import type Stripe from 'stripe'
import {
  chargeInvoiceId,
  idOf,
  invoiceSubscriptionId,
  subscriptionPeriodEnd,
  subscriptionPeriodStart,
} from '@/lib/billing/stripe-shapes'

/**
 * Stripe hands this application two shapes of the same object.
 *
 * The pinned client (`2026-02-25.clover`, stripe 20.4.1) returns a
 * Subscription with no `current_period_*` fields (they live on each item) and
 * an Invoice with no top-level `subscription` (it is
 * `parent.subscription_details.subscription`). The webhook endpoint's payloads
 * follow whatever API version the Stripe dashboard pins, which may be older
 * and carry the old fields. Every reader must accept both and say null only
 * when neither shape has the fact. These tests pin that for each reader.
 */

const START = 1_758_000_000
const END = 1_760_592_000
const LATER_END = 1_790_000_000

function sub(shape: Record<string, unknown>): Stripe.Subscription {
  return { id: 'sub_1', object: 'subscription', ...shape } as unknown as Stripe.Subscription
}

function invoice(shape: Record<string, unknown>): Stripe.Invoice {
  return { id: 'in_1', object: 'invoice', ...shape } as unknown as Stripe.Invoice
}

describe('subscriptionPeriodEnd', () => {
  it('reads the old top-level field', () => {
    expect(subscriptionPeriodEnd(sub({ current_period_end: END }))).toBe(END)
  })

  it('reads the clover shape from the subscription item', () => {
    expect(subscriptionPeriodEnd(sub({ items: { data: [{ current_period_end: END }] } }))).toBe(END)
  })

  it('takes the LATEST end across several items', () => {
    const s = sub({
      items: { data: [{ current_period_end: END }, { current_period_end: LATER_END }] },
    })
    expect(subscriptionPeriodEnd(s)).toBe(LATER_END)
  })

  it('prefers the top-level field when both shapes are present', () => {
    const s = sub({ current_period_end: END, items: { data: [{ current_period_end: LATER_END }] } })
    expect(subscriptionPeriodEnd(s)).toBe(END)
  })

  it('is null when neither shape carries one', () => {
    expect(subscriptionPeriodEnd(sub({}))).toBeNull()
    expect(subscriptionPeriodEnd(sub({ items: { data: [] } }))).toBeNull()
    expect(subscriptionPeriodEnd(sub({ items: { data: [{ price: { id: 'p' } }] } }))).toBeNull()
  })

  it('ignores values that are not a usable timestamp', () => {
    expect(subscriptionPeriodEnd(sub({ current_period_end: 0 }))).toBeNull()
    expect(subscriptionPeriodEnd(sub({ current_period_end: '1700000000' }))).toBeNull()
    expect(subscriptionPeriodEnd(sub({ current_period_end: Number.NaN }))).toBeNull()
  })
})

describe('subscriptionPeriodStart', () => {
  it('reads the old top-level field', () => {
    expect(subscriptionPeriodStart(sub({ current_period_start: START }))).toBe(START)
  })

  it('reads the clover shape and takes the EARLIEST start across items', () => {
    const s = sub({
      items: { data: [{ current_period_start: START + 100 }, { current_period_start: START }] },
    })
    expect(subscriptionPeriodStart(s)).toBe(START)
  })

  it('is null when neither shape carries one', () => {
    expect(subscriptionPeriodStart(sub({}))).toBeNull()
    expect(subscriptionPeriodStart(sub({ items: { data: [{}] } }))).toBeNull()
  })
})

describe('invoiceSubscriptionId', () => {
  it('reads the old top-level field as a string', () => {
    expect(invoiceSubscriptionId(invoice({ subscription: 'sub_old' }))).toBe('sub_old')
  })

  it('reads the old top-level field when expanded to an object', () => {
    expect(invoiceSubscriptionId(invoice({ subscription: { id: 'sub_old' } }))).toBe('sub_old')
  })

  it('reads the clover shape as a string', () => {
    const inv = invoice({ parent: { subscription_details: { subscription: 'sub_new' } } })
    expect(invoiceSubscriptionId(inv)).toBe('sub_new')
  })

  it('reads the clover shape when expanded to an object', () => {
    const inv = invoice({
      parent: {
        type: 'subscription_details',
        subscription_details: { subscription: { id: 'sub_new' } },
      },
    })
    expect(invoiceSubscriptionId(inv)).toBe('sub_new')
  })

  it('is null for a one-off invoice in either shape', () => {
    expect(invoiceSubscriptionId(invoice({ subscription: null }))).toBeNull()
    expect(invoiceSubscriptionId(invoice({ parent: null }))).toBeNull()
    expect(invoiceSubscriptionId(invoice({ parent: { subscription_details: null } }))).toBeNull()
    expect(invoiceSubscriptionId(invoice({}))).toBeNull()
  })

  it('never returns an empty string as an id', () => {
    expect(invoiceSubscriptionId(invoice({ subscription: '' }))).toBeNull()
    expect(invoiceSubscriptionId(invoice({ subscription: {} }))).toBeNull()
  })
})

describe('chargeInvoiceId', () => {
  function charge(shape: Record<string, unknown>): Stripe.Charge {
    return { id: 'ch_1', object: 'charge', ...shape } as unknown as Stripe.Charge
  }

  it('reads the old-shape field as a string', () => {
    expect(chargeInvoiceId(charge({ invoice: 'in_old' }))).toBe('in_old')
  })

  it('reads the old-shape field when expanded to an object', () => {
    expect(chargeInvoiceId(charge({ invoice: { id: 'in_old' } }))).toBe('in_old')
  })

  it('is null when the charge carries no invoice field, which is every clover payload', () => {
    // The caller then asks Stripe by payment intent; null is "not here", not
    // "no invoice".
    expect(chargeInvoiceId(charge({ payment_intent: 'pi_1' }))).toBeNull()
    expect(chargeInvoiceId(charge({ invoice: null }))).toBeNull()
  })

  it('never returns an empty string as an id', () => {
    expect(chargeInvoiceId(charge({ invoice: '' }))).toBeNull()
    expect(chargeInvoiceId(charge({ invoice: {} }))).toBeNull()
  })
})

describe('idOf', () => {
  it('reads a string id and an expanded object alike', () => {
    expect(idOf('pi_1')).toBe('pi_1')
    expect(idOf({ id: 'pi_1', object: 'payment_intent' })).toBe('pi_1')
  })

  it('is null for nothing, an empty string, a number and an object without an id', () => {
    expect(idOf(null)).toBeNull()
    expect(idOf(undefined)).toBeNull()
    expect(idOf('')).toBeNull()
    expect(idOf(42)).toBeNull()
    expect(idOf({ object: 'invoice' })).toBeNull()
  })
})
