/**
 * Reading the two Stripe object shapes this application can be handed.
 *
 * ─── The defect this module exists for ──────────────────────────────────
 *
 * `src/lib/stripe.ts` pins API version `2026-02-25.clover`, and the installed
 * SDK (stripe 20.4.1) types that shape. In it:
 *
 *   - a Subscription has NO `current_period_start` / `current_period_end`.
 *     They live on each subscription item
 *     (`node_modules/stripe/types/SubscriptionItems.d.ts:53` and `:58`), and
 *     `Subscriptions.d.ts` does not mention either field.
 *   - an Invoice has NO top-level `subscription`. The subscription that
 *     generated it is `invoice.parent.subscription_details.subscription`
 *     (`node_modules/stripe/types/Invoices.d.ts:336`, `:1041`, `:1067`), a
 *     string id or an expanded object.
 *
 * Every webhook handler and the Prisma sync read the OLD fields. So on every
 * object fetched through the pinned client, the period end was undefined and
 * the invoice's subscription was undefined. On 20 October 2026 the production
 * `Subscription` rows showed it: `currentPeriodEnd` equal to
 * `currentPeriodStart` on six of seven Stripe-linked rows (the create fallback
 * wrote `now` for both), and `paymentCount` 0 on every row although the
 * webhook journal held 19 `invoice.paid` deliveries that could not find their
 * subscription.
 *
 * ─── Why both shapes, not just the new one ──────────────────────────────
 *
 * A webhook PAYLOAD follows the API version configured on the webhook
 * endpoint in the Stripe dashboard, which nobody on this machine can see and
 * which may be older than the pinned client. Objects RETRIEVED by the client
 * (`stripe.subscriptions.retrieve`) follow the pinned version. The same
 * handler therefore sees both shapes, sometimes in one request. Each reader
 * below accepts either and says `null` only when neither carries the fact.
 *
 * These are pure functions over plain objects. They never call Stripe.
 */

import type Stripe from 'stripe'

/** A finite, positive epoch-seconds value, or null. */
function epochSeconds(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : null
}

/**
 * The subscription's current period end, as epoch seconds.
 *
 * Old shape: `subscription.current_period_end`. New shape: the LATEST
 * `current_period_end` across `subscription.items.data`, because the
 * entitlement should run until the last item's period closes. Null when
 * neither shape carries one.
 */
export function subscriptionPeriodEnd(subscription: Stripe.Subscription): number | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  const top = epochSeconds(sub?.current_period_end)
  if (top !== null) return top

  let latest: number | null = null
  for (const item of (sub?.items?.data ?? []) as unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const end = epochSeconds((item as any)?.current_period_end)
    if (end !== null && (latest === null || end > latest)) latest = end
  }
  return latest
}

/**
 * The subscription's current period start, as epoch seconds.
 *
 * Old shape: `subscription.current_period_start`. New shape: the EARLIEST
 * `current_period_start` across the items. Null when neither carries one.
 */
export function subscriptionPeriodStart(subscription: Stripe.Subscription): number | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  const top = epochSeconds(sub?.current_period_start)
  if (top !== null) return top

  let earliest: number | null = null
  for (const item of (sub?.items?.data ?? []) as unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const start = epochSeconds((item as any)?.current_period_start)
    if (start !== null && (earliest === null || start < earliest)) earliest = start
  }
  return earliest
}

/**
 * A Stripe id, from a string or an expanded object carrying `id`. Null for
 * anything else, including the empty string. Exported because every "string
 * or expanded object" field in the Stripe API wants exactly this reading.
 */
export function idOf(value: unknown): string | null {
  if (typeof value === 'string') return value.length > 0 ? value : null
  if (value && typeof value === 'object') {
    const id = (value as { id?: unknown }).id
    if (typeof id === 'string' && id.length > 0) return id
  }
  return null
}

/**
 * The id of the subscription that generated an invoice.
 *
 * Old shape: `invoice.subscription`. New shape:
 * `invoice.parent.subscription_details.subscription`. Either may be a string
 * or an expanded object. Null for a one-off invoice, and null when neither
 * shape is present: the caller must treat that as "unknown", never as "no
 * subscription".
 */
export function invoiceSubscriptionId(invoice: Stripe.Invoice): string | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inv = invoice as any
  const top = idOf(inv?.subscription)
  if (top !== null) return top
  return idOf(inv?.parent?.subscription_details?.subscription)
}

/**
 * The id of the invoice a charge paid, when the charge itself says so.
 *
 * Old shape only: `charge.invoice`, a string or an expanded object. Under
 * clover a Charge has no `invoice` field at all (`Charges.d.ts` mentions the
 * word once, in the `receipt_url` comment on line 178), and the link runs the
 * other way, through the InvoicePayment object (`InvoicePayments.d.ts:49`
 * `invoice`, `:81` `payment.payment_intent`). So null here means "this
 * payload does not carry it", not "no invoice": the caller has to ask Stripe
 * by payment intent. Until 23 October 2026 the refund handler read only this
 * field, so on a clover payload every refunded subscription charge resolved
 * to no subscription and its affiliate commission was never voided.
 */
export function chargeInvoiceId(charge: Stripe.Charge): string | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return idOf((charge as any)?.invoice)
}
