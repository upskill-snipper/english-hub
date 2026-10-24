import { describe, it, expect } from 'vitest'
import type Stripe from 'stripe'
import { pricesOnInvoice } from '@/lib/billing/duplicate-subscription-guard'

/**
 * `pricesOnInvoice` feeds the invoice.payment_failed coverage check, which
 * decides whether a customer is told their payment failed. An invoice line
 * carries its price in two shapes: `line.price` (a Price object) before
 * `2026-02-25.clover`, and `line.pricing.price_details.price` (a string id, or
 * an expanded Price) under it - node_modules/stripe/types/InvoiceLineItems.d.ts
 * line 81 and lines 272 to 293. Until 23 October 2026 nothing proved the
 * clover read: the webhook fixtures labelled "clover" carried old-shape lines,
 * and an expanded Price under price_details was dropped by a string check.
 */

const PRICE = 'price_monthly'

function invoice(lines: unknown): Stripe.Invoice {
  return { id: 'in_1', object: 'invoice', lines } as unknown as Stripe.Invoice
}

describe('pricesOnInvoice', () => {
  it('reads the old shape, line.price.id', () => {
    expect(pricesOnInvoice(invoice({ data: [{ price: { id: PRICE } }] }))).toEqual([PRICE])
  })

  it('reads the clover shape, line.pricing.price_details.price as a string', () => {
    const inv = invoice({
      data: [
        {
          pricing: {
            type: 'price_details',
            price_details: { price: PRICE, product: 'prod_1' },
            unit_amount_decimal: '399',
          },
        },
      ],
    })
    expect(pricesOnInvoice(inv)).toEqual([PRICE])
  })

  it('reads an expanded Price object under price_details', () => {
    const inv = invoice({
      data: [
        {
          pricing: {
            type: 'price_details',
            price_details: { price: { id: PRICE, object: 'price' }, product: 'prod_1' },
            unit_amount_decimal: '399',
          },
        },
      ],
    })
    expect(pricesOnInvoice(inv)).toEqual([PRICE])
  })

  it('adds the promo base price only when the product is an expanded object', () => {
    // Old shape with the product expanded: the base price is readable.
    const expanded = invoice({
      data: [
        {
          price: {
            id: 'price_adhoc',
            product: { id: 'prod_1', metadata: { basePriceId: PRICE } },
          },
        },
      ],
    })
    expect(pricesOnInvoice(expanded)).toEqual(['price_adhoc', PRICE])

    // Clover: price_details.product is a bare id, so the base price cannot be
    // read from the invoice at all. The payment_failed coverage check rests on
    // findDuplicateSubscription matching basePriceId on the OTHER subscription.
    const clover = invoice({
      data: [
        {
          pricing: {
            type: 'price_details',
            price_details: { price: 'price_adhoc', product: 'prod_1' },
            unit_amount_decimal: '2000',
          },
        },
      ],
    })
    expect(pricesOnInvoice(clover)).toEqual(['price_adhoc'])
  })

  it('is empty for pricing: null, an empty line list and no lines at all', () => {
    expect(pricesOnInvoice(invoice({ data: [{ pricing: null }] }))).toEqual([])
    expect(pricesOnInvoice(invoice({ data: [] }))).toEqual([])
    expect(pricesOnInvoice(invoice(undefined))).toEqual([])
  })

  it("does not count an empty id or a deleted product's base price", () => {
    const inv = invoice({
      data: [
        {
          price: {
            id: '',
            product: { id: 'prod_1', deleted: true, metadata: { basePriceId: PRICE } },
          },
        },
      ],
    })
    expect(pricesOnInvoice(inv)).toEqual([])
  })

  it('returns each price once across several lines', () => {
    const inv = invoice({
      data: [
        { price: { id: PRICE } },
        { pricing: { type: 'price_details', price_details: { price: PRICE, product: 'prod_1' } } },
      ],
    })
    expect(pricesOnInvoice(inv)).toEqual([PRICE])
  })
})
