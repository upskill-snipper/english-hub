/**
 * Stop a customer buying the same subscription twice.
 *
 * THE DEFECT THIS CLOSES
 * ──────────────────────
 * Neither `/api/stripe/checkout` nor `/api/promo/redeem` looked at whether the
 * customer already held a live subscription. Nothing stopped a second checkout
 * for a plan they were already paying for, and on 8 September 2026 one customer
 * acquired two Teachers Annual subscriptions half an hour apart.
 *
 * Be precise about what followed, because the obvious summary is wrong. She was
 * NOT charged twice. One subscription took GBP 67.99 and is the one she has.
 * The other never succeeded: it failed on insufficient funds, retried, failed
 * again, and was still retrying ten days later. No money was owed back. What
 * was owed was cancelling it and voiding its open invoice - a different remedy
 * that nobody would reach for from the words "charged twice".
 *
 * The damage was not the money, it was the entitlement. See
 * `DUPLICATE_INVOICE_FAILED_IGNORED` in the Stripe webhook: every failure of
 * the duplicate revoked the access the PAID subscription had bought, because
 * `profiles.subscription_status` is one field per person and both revocation
 * handlers keyed on the customer rather than the subscription.
 *
 * It was invisible from our side. Stripe listed both all along; nothing here
 * asked. Our own records could not have held both in any case - a Prisma
 * `Subscription` row is unique per user - and in that period the webhook was
 * writing her no row at all. The first person to notice was the customer.
 *
 * WHY THE CHECK IS PER PRICE, NOT PER CUSTOMER
 * ────────────────────────────────────────────
 * IELTS is sold as its own subscription (`STRIPE_PRICE_IELTS_*`, tracked by
 * `profiles.ielts_status`, see `syncIeltsEntitlement` in the webhook) and a
 * learner may legitimately hold Pro *and* IELTS at the same time. Refusing any
 * second subscription would break that real combination in order to fix a
 * different problem. So this refuses only what is genuinely a duplicate: a live
 * subscription that already carries the same price.
 *
 * STRIPE IS THE SOURCE OF TRUTH HERE
 * ──────────────────────────────────
 * Deliberately not `profiles.subscription_status` and not the Prisma row. Both
 * are written by the webhook, and the whole reason this defect survived is that
 * the webhook's record of subscriptions was wrong for 192 of our 200 accounts,
 * and missing entirely for every paying customer checked. A guard
 * built on our own broken bookkeeping would have failed in exactly the case it
 * exists for. This asks Stripe, which is the only party that actually knows
 * what it is going to charge.
 *
 * FAILS OPEN, ON PURPOSE
 * ──────────────────────
 * If Stripe cannot be reached the customer is allowed through. A blocked
 * checkout is lost revenue and a user who cannot buy the thing they came for;
 * a duplicate is recoverable - cancel the extra subscription, void any open
 * invoice on it, and refund anything it actually took. Do not read "recoverable"
 * as "cheap": the one duplicate we have found took no money at all, yet it
 * revoked the customer's paid access four times over three days (see
 * `subscriptionRevocationIsScoped` in the webhook). And do not read it as rare -
 * it belonged to one of only four paying subscribers.
 *
 * The failure is logged loudly so it is not silent, which is the habit that
 * created this whole class of bug.
 */

import type Stripe from 'stripe'

/**
 * Stripe statuses that mean the customer is on the hook for money: either
 * paying now, about to start paying, or behind on payments but not yet ended.
 *
 * `canceled`, `incomplete_expired` and `paused` are absent deliberately - a
 * customer whose subscription ended must be able to buy the same plan again,
 * which is a renewal, not a duplicate. `incomplete` is absent too: that is a
 * checkout whose payment never completed, and blocking on it would trap anyone
 * whose card was declined the first time.
 */
export const LIVE_SUBSCRIPTION_STATUSES: ReadonlySet<Stripe.Subscription.Status> = new Set([
  'active',
  'trialing',
  'past_due',
  'unpaid',
])

export interface DuplicateSubscriptionCheck {
  /** True when the customer already pays for this exact price. */
  duplicate: boolean
  /** The offending subscription, when there is one. */
  existing: Stripe.Subscription | null
  /**
   * Set when the check could not be completed. The caller allows the checkout
   * in that case; this exists so the reason reaches the logs rather than being
   * inferred from `duplicate: false`.
   */
  checkFailed?: string
}

/**
 * Does this customer already hold a live subscription for any of `priceIds`?
 *
 * MATCHING ON TWO THINGS, because the two routes build their line items
 * differently. `/api/stripe/checkout` passes a catalogue price id, which
 * matches directly. `/api/promo/redeem` builds an ad-hoc `price_data` line so
 * the discount is baked in, which means its price id is unique to that
 * redemption and can never match anything. It does, however, stamp the
 * catalogue price it was derived from onto the product as
 * `metadata.basePriceId`. Matching on both means a customer who redeemed a
 * promo last week is recognised when they arrive at standard checkout for the
 * same plan, and vice versa - which is precisely the crossing-over case that
 * a price-id comparison alone would wave through.
 *
 * One Stripe call. `status: 'all'` rather than one call per status, then
 * filtered here, so the set of statuses that count as "live" is stated once
 * above and not spread across request parameters.
 */
export async function findDuplicateSubscription(
  stripe: Stripe,
  customerId: string,
  priceIds: string | readonly string[],
  options: { excludeSubscriptionId?: string } = {},
): Promise<DuplicateSubscriptionCheck> {
  const wanted = new Set((typeof priceIds === 'string' ? [priceIds] : priceIds).filter(Boolean))
  if (wanted.size === 0) return { duplicate: false, existing: null }

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'all',
      limit: 100,
      expand: ['data.items.data.price.product'],
    })

    const matchesWanted = (item: Stripe.SubscriptionItem): boolean => {
      if (item.price?.id && wanted.has(item.price.id)) return true
      // The promo path's ad-hoc price: the catalogue price it came from is on
      // the product. A string here means Stripe did not expand it, in which
      // case there is nothing to read and we do not guess.
      const product = item.price?.product
      if (product && typeof product === 'object' && !('deleted' in product && product.deleted)) {
        const base = (product as Stripe.Product).metadata?.basePriceId
        if (base && wanted.has(base)) return true
      }
      return false
    }

    const existing =
      subscriptions.data.find(
        (sub) =>
          sub.id !== options.excludeSubscriptionId &&
          LIVE_SUBSCRIPTION_STATUSES.has(sub.status) &&
          sub.items.data.some(matchesWanted),
      ) ?? null

    return { duplicate: existing !== null, existing }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(
      `[billing] DUPLICATE_SUBSCRIPTION_CHECK_FAILED customer=${customerId} ` +
        `prices=${[...wanted].join(',')}: ${message}. ` +
        'Allowing the checkout to proceed - a customer who cannot buy is a worse outcome than a ' +
        'duplicate we can refund. Check Stripe for two subscriptions on this customer.',
    )
    return { duplicate: false, existing: null, checkFailed: message }
  }
}

/**
 * What the customer is told. Names the plan they already have, does not
 * pretend it is their mistake, and points at the one place where they can see
 * and change it.
 */
export function duplicateSubscriptionMessage(): string {
  return (
    'Our records show you already have a subscription for this plan, so we have stopped rather than ' +
    'start a second one. You can see it, change it or cancel it on your billing page. If that does ' +
    'not look right, email support@theenglishhub.app and we will sort it out.'
  )
}

/**
 * The catalogue prices a subscription represents: its own price ids, plus the
 * `basePriceId` recorded on the product for promo-built ad-hoc prices. Same
 * two-way rule `findDuplicateSubscription` matches on, exported so callers do
 * not reimplement half of it.
 */
export function pricesOnSubscription(subscription: Stripe.Subscription): string[] {
  const out = new Set<string>()
  for (const item of subscription.items?.data ?? []) {
    if (item.price?.id) out.add(item.price.id)
    const product = item.price?.product
    if (product && typeof product === 'object' && !('deleted' in product && product.deleted)) {
      const base = (product as Stripe.Product).metadata?.basePriceId
      if (base) out.add(base)
    }
  }
  return [...out]
}

/** The same, from an invoice's line items. */
export function pricesOnInvoice(invoice: Stripe.Invoice): string[] {
  const out = new Set<string>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const line of ((invoice as any).lines?.data ?? []) as any[]) {
    const priceId = line?.price?.id ?? line?.pricing?.price_details?.price
    if (typeof priceId === 'string' && priceId) out.add(priceId)
    const product = line?.price?.product
    if (product && typeof product === 'object' && product.metadata?.basePriceId) {
      out.add(product.metadata.basePriceId as string)
    }
  }
  return [...out]
}
