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
 * That is the CHECKOUT question. The webhook's revocation handlers ask a
 * different one - does some other subscription still justify this person's
 * access - and for them a per-price answer is wrong (a customer who moved from
 * monthly to annual was revoked when the monthly plan ended). They use
 * `findCoveringSubscription` below, which does not compare prices at all.
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
import { idOf } from './stripe-shapes'

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

/**
 * Stripe statuses under which the WEB GATE is left open, which is a different
 * question from the one above. `active` and `trialing` grant 'pro'. `past_due`
 * is here by the retry-window choice of 23 October 2026: the webhook writes
 * nothing to `profiles.subscription_status` while Stripe retries a failed
 * payment, so a past_due subscription still keeps the gate open. `unpaid` is
 * not: that is Stripe having given up, and the webhook revokes on it.
 *
 * Used wherever the question is "does this customer still have web access
 * through some subscription": the webhook's coverage check before a
 * non-paying write, and the trial-expiry cron before it ends a trial. Until
 * 23 October 2026 the cron kept its own list (active and trialing only), so a
 * payer whose card was being retried was downgraded by the cron while the
 * webhook was deliberately keeping them 'pro'. One list, two readers. If the
 * retry-window choice is reversed, remove `past_due` here and both follow.
 */
export const WEB_ACCESS_STATUSES: ReadonlySet<Stripe.Subscription.Status> = new Set([
  'active',
  'trialing',
  'past_due',
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

/** True when the subscription carries at least one IELTS price. */
export function carriesIelts(
  subscription: Stripe.Subscription,
  isIeltsPriceId: (priceId: string | null | undefined) => boolean,
): boolean {
  return (subscription.items?.data ?? []).some((item) => isIeltsPriceId(item.price?.id))
}

/**
 * True when EVERY recurring price on the subscription is an IELTS price, so
 * the subscription grants IELTS and nothing else. IELTS is a standalone
 * product gated by `profiles.ielts_status`; an IELTS-only subscription must
 * never grant or revoke the global 'pro'. A subscription with no recurring
 * prices is not IELTS-only.
 */
export function isIeltsOnly(
  subscription: Stripe.Subscription,
  isIeltsPriceId: (priceId: string | null | undefined) => boolean,
): boolean {
  const recurring = (subscription.items?.data ?? []).filter((item) => item.price?.recurring)
  if (recurring.length === 0) return false
  return recurring.every((item) => isIeltsPriceId(item.price?.id))
}

export interface CoverageCheck {
  /** True when another subscription still justifies the access this event would remove. */
  covered: boolean
  /** That subscription, when there is one. */
  coveringSubscription: Stripe.Subscription | null
  /**
   * The event's OWN subscription as Stripe holds it now, read from the same
   * list, or null when the list did not include it. A webhook payload is a
   * snapshot that can arrive late; this is the current truth, so a caller can
   * tell a stale delivery from a real change without a second Stripe call.
   */
  current: Stripe.Subscription | null
}

/**
 * Does ANOTHER subscription on this customer still justify the access that an
 * ending or failing subscription would otherwise take away?
 *
 * ─── Why this is not `findDuplicateSubscription` ────────────────────────
 *
 * The checkout question is "is the customer already paying for THIS price",
 * and matching per price is right there. The webhook's revocation handlers
 * borrowed that function and so judged coverage per price too, which asks the
 * wrong question of a per-person field. A customer who held Student Monthly,
 * bought Student Annual (a different price, so the checkout guard rightly
 * allowed it), then cancelled the monthly plan was revoked when the monthly
 * subscription ended: the annual one did not match the monthly price, so it
 * did not count as cover, 'cancelled' was written over a paying customer, and
 * the stale-event guard then refused to let the annual plan's next renewal
 * restore them. A promo-redeemed subscription never matched a catalogue price
 * either, because a webhook payload's `price.product` is a bare id and the
 * base price recorded on it cannot be read.
 *
 * So the question here is about ACCESS, not prices, and the two
 * subscriptions' prices are never compared with each other. For a
 * subscription that granted 'pro' (anything not IELTS-only), cover is any
 * other subscription in `liveStatuses` that is itself not IELTS-only. For an
 * IELTS-only subscription, cover is any other subscription in `liveStatuses`
 * that carries an IELTS price.
 *
 * `liveStatuses` defaults to `WEB_ACCESS_STATUSES`, not the broader
 * `LIVE_SUBSCRIPTION_STATUSES`: the checkout list includes `unpaid` because an
 * unpaid customer is still on the hook for money, but an unpaid subscription
 * keeps nobody's access, and reusing that list here let two dead
 * subscriptions cover each other so that neither ever wrote 'unpaid'.
 *
 * ─── Fails CLOSED, unlike the checkout guard ────────────────────────────
 *
 * If Stripe cannot be asked this THROWS. The caller is a webhook handler about
 * to write a non-paying value over a per-person field; "unknown" must not be
 * read as "not covered", because that is the 18 September 2026 outcome
 * exactly (the duplicate's dunning ended, a check failed open, and a paid
 * customer was cancelled). A thrown handler releases the event claim and
 * Stripe retries for three days, which is the right behaviour for a question
 * that could not be answered.
 */
export async function findCoveringSubscription(
  stripe: Stripe,
  customerId: string,
  options: {
    /** The subscription the event is about; it can never cover itself. */
    excludeSubscriptionId: string
    /** What the ending subscription granted, which decides what counts as cover. */
    grants: 'pro' | 'ielts'
    isIeltsPriceId: (priceId: string | null | undefined) => boolean
    liveStatuses?: ReadonlySet<string>
  },
): Promise<CoverageCheck> {
  const live = options.liveStatuses ?? WEB_ACCESS_STATUSES
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: 'all',
    limit: 100,
  })

  const covers = (sub: Stripe.Subscription): boolean =>
    options.grants === 'pro'
      ? !isIeltsOnly(sub, options.isIeltsPriceId)
      : carriesIelts(sub, options.isIeltsPriceId)

  const coveringSubscription =
    subscriptions.data.find(
      (sub) => sub.id !== options.excludeSubscriptionId && live.has(sub.status) && covers(sub),
    ) ?? null
  const current = subscriptions.data.find((sub) => sub.id === options.excludeSubscriptionId) ?? null

  return { covered: coveringSubscription !== null, coveringSubscription, current }
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

/**
 * The same, from an invoice's line items, in both API shapes.
 *
 * Old shape: `line.price` is a Price object (`price.id`, and `price.product`
 * when expanded). Clover: a line has no `price`; it has
 * `line.pricing.price_details.price` (a string id, or an expanded Price) and
 * `line.pricing.price_details.product` (a bare id) - `InvoiceLineItems.d.ts:81`
 * and `:272-293`. Until 23 October 2026 the clover branch read the price as a
 * string only, so an expanded Price was dropped, and the test fixtures
 * labelled "clover" still carried old-shape lines, so nothing proved the read.
 *
 * The `basePriceId` of a promo-built price lives on the PRODUCT's metadata,
 * which an invoice line carries only when the price and its product are both
 * expanded objects. A webhook payload never expands them, and under clover
 * `price_details.product` is a bare id anyway. So from an invoice line the
 * base price is readable only in the old shape with an expanded product. The
 * `invoice.payment_failed` coverage check therefore cannot recognise a
 * promo-built duplicate from the invoice itself; it rests on
 * `findDuplicateSubscription` matching `basePriceId` on the OTHER
 * subscription, which it lists with the product expanded.
 */
export function pricesOnInvoice(invoice: Stripe.Invoice): string[] {
  const out = new Set<string>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const line of ((invoice as any).lines?.data ?? []) as any[]) {
    const priceRef = line?.price ?? line?.pricing?.price_details?.price
    const priceId = idOf(priceRef)
    if (priceId) out.add(priceId)
    const product = priceRef && typeof priceRef === 'object' ? priceRef.product : null
    if (
      product &&
      typeof product === 'object' &&
      !product.deleted &&
      typeof product.metadata?.basePriceId === 'string' &&
      product.metadata.basePriceId
    ) {
      out.add(product.metadata.basePriceId as string)
    }
  }
  return [...out]
}
