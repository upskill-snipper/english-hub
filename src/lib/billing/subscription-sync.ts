/**
 * Writing the Prisma `Subscription` row for a Stripe subscription.
 *
 * ─── The defect this module exists for ──────────────────────────────────
 *
 * `/api/stripe/webhook` resolved the customer to a SUPABASE auth uuid - from
 * `subscription.metadata.userId`, or from a `profiles` lookup by
 * `stripe_customer_id` - and then handed that uuid straight to
 * `prisma.subscription.upsert({ where: { userId } })`. `Subscription.userId`
 * is a foreign key to `User.id`, which is a cuid. On create the foreign key
 * fails and the upsert throws.
 *
 * The throw was caught and logged as a line saying the row "can be
 * back-filled". It never was. So for every customer without a Prisma `User`
 * row - on 2026-09-17 that was 192 of 200 accounts - NO `Subscription` row
 * was ever written, and nothing downstream could tell a payer from a free
 * user:
 *
 *   - `/api/me/entitlements` and `src/lib/entitlements.ts` read the Prisma
 *     row, so a paying subscriber is served the free-tier entitlement.
 *   - `src/lib/billing/trial-state.ts` reads it, so the trial banner is
 *     wrong.
 *   - `/api/cron/trial-ending` and `/api/cron/trial-expiry` key on rows that
 *     do not exist, so the whole trial lifecycle skips these accounts.
 *   - Grandfathered pricing (R-031) is captured onto the same row, so a
 *     locked Early Access price was never recorded either.
 *
 * ─── What this module does about it ─────────────────────────────────────
 *
 *   1. It resolves the Supabase uuid through the identity layer
 *      (`src/lib/identity/`), which is the one place allowed to project a
 *      Supabase account into Prisma. The row is therefore written against a
 *      real `User.id`.
 *
 *   2. It is LOUD when it cannot. A swallowed billing-record write is how
 *      this stayed invisible for months. A failure is reported to Sentry at
 *      error level AND written to the log as one greppable line carrying
 *      every fact needed to reconcile the row by hand later.
 *
 *   3. It still never throws. Stripe retries a non-2xx webhook for three
 *      days, and several handlers on the same event are not idempotent
 *      (affiliate commission booking, IELTS entitlement), so failing the
 *      request risks double-processing a payment event. Loud, not fatal.
 *
 * This module writes to Prisma only. It never calls Stripe and never moves
 * money.
 */

import * as Sentry from '@sentry/nextjs'
import type Stripe from 'stripe'
import { prisma } from '@/lib/prisma'
import { IdentityConflict, IdentityUnresolved, requirePrismaUserId } from '@/lib/identity'
import { subscriptionPeriodEnd, subscriptionPeriodStart } from './stripe-shapes'
import { planTierFromSubscription } from './plan-from-price'

/**
 * The marker every unrecorded-subscription log line starts with.
 *
 * It is a single fixed token on purpose: it is what an operator greps for in
 * the Vercel logs and what a log-drain alert matches on. Do not reword it.
 */
export const UNRECORDED_SUBSCRIPTION_MARKER = 'BILLING_SUBSCRIPTION_UNRECORDED'

/**
 * The marker logged when a write was REFUSED because the stored row is a
 * live subscription and the incoming one is a dead stranger. Not an error:
 * the row is right and the event was a duplicate's. Greppable all the same.
 */
export const LIVE_ROW_PROTECTED_MARKER = 'BILLING_LIVE_ROW_PROTECTED'

/**
 * Logged when a write was refused because the stored row has NO Stripe id - a
 * no-card signup trial, or a store purchase - and the incoming subscription is
 * not live. A dead Stripe subscription is not the correction of anything such
 * a row holds; only a live one gets to take it over.
 */
export const UNLINKED_ROW_PROTECTED_MARKER = 'BILLING_UNLINKED_ROW_PROTECTED'

/**
 * Logged when any status other than cancelled arrived for the very
 * subscription the row already records as cancelled. Stripe never moves a
 * canceled subscription to another status, so that delivery is stale by
 * definition.
 */
export const STALE_EVENT_REFUSED_MARKER = 'BILLING_STALE_EVENT_REFUSED'

export type SubscriptionSyncFailureReason =
  /**
   * No Prisma `User` row and none could be projected - a deleted auth
   * record, a missing service-role key, or Supabase unreachable.
   */
  | 'identity_unresolved'
  /**
   * The email belongs to a Prisma row linked to a different Supabase user.
   * Operator review only - merging two people is never automatic.
   */
  | 'identity_conflict'
  /** Identity resolved, but the `Subscription` upsert itself failed. */
  | 'row_write_failed'
  /**
   * The stored row is a live subscription with a DIFFERENT Stripe id and the
   * incoming subscription is not live. Writing it would replace the paid
   * subscription's record with a dead duplicate's. Refused on purpose.
   */
  | 'live_row_protected'
  /**
   * The stored row has no Stripe id (a signup trial or a store purchase) and
   * the incoming subscription is not live. Only a live subscription takes
   * such a row; see step 2b below.
   */
  | 'unlinked_row_protected'
  /**
   * A status other than cancelled for the very subscription the row already
   * records as cancelled: a delivery that arrived after the deletion. See
   * step 2c.
   */
  | 'stale_event'

export type SubscriptionSyncResult =
  | { ok: true; prismaUserId: string }
  | { ok: false; reason: SubscriptionSyncFailureReason; message: string }

export interface SyncStripeSubscriptionArgs {
  /** The Supabase auth uuid the webhook resolved for this customer. */
  supabaseUserId: string
  subscription: Stripe.Subscription
  /** Stripe event type, e.g. 'customer.subscription.updated'. For the log. */
  source: string
  /** Stripe event id, so a log line ties back to the delivery. */
  eventId?: string | null
  /**
   * True when this sync is driven by a paid invoice that took money, so
   * `paymentCount` goes up by one. Until 23 October 2026 nothing on the
   * Stripe path incremented it, and `invoice.paid` could not even find its
   * subscription under the pinned API shape, so every web row read 0 while
   * the webhook journal held 19 paid invoices. The caller passes false for a
   * zero-amount invoice: `src/lib/usage/trial-allowance.ts` reads a non-zero
   * count as evidence of a card on file, and a GBP 0 trial-start invoice is
   * not that.
   */
  recordPayment?: boolean
}

/**
 * Map a Stripe subscription `status` to our Prisma `SubscriptionStatus`
 * enum. Kept narrow on purpose - `incomplete` / `unpaid` etc. fall back to
 * `PAST_DUE` so the entitlement layer still revokes Pro access.
 */
export function mapStripeToPrismaStatus(
  stripeStatus: Stripe.Subscription.Status,
): 'ACTIVE' | 'CANCELLED' | 'PAST_DUE' | 'TRIALING' | 'PAUSED' {
  switch (stripeStatus) {
    case 'active':
      return 'ACTIVE'
    case 'trialing':
      return 'TRIALING'
    case 'past_due':
    case 'unpaid':
    case 'incomplete':
    case 'incomplete_expired':
      return 'PAST_DUE'
    case 'canceled':
      return 'CANCELLED'
    case 'paused':
      return 'PAUSED'
    default:
      return 'PAST_DUE'
  }
}

export interface SubscriptionFacts {
  stripeCustomerId: string | null
  stripeSubscriptionId: string
  stripeStatus: string
  status: ReturnType<typeof mapStripeToPrismaStatus>
  plan: 'MONTHLY' | 'ANNUAL'
  currentPeriodStart: Date | null
  currentPeriodEnd: Date | null
  cancelledAt: Date | null
  /**
   * Read from the price (see `./plan-from-price.ts`). `null` means the price
   * is not a configured teacher or student price, so the stored value is
   * left alone. Until 23 October 2026 the Stripe path never wrote this, so
   * every web teacher read as a student on mobile.
   */
  isTeacherPlan: boolean | null
  teacherPriceId: string | null
}

/**
 * Everything read off the Stripe object, extracted once so the write and the
 * failure report cannot disagree about what was supposed to be stored.
 */
export function readSubscriptionFacts(subscription: Stripe.Subscription): SubscriptionFacts {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  // The period lives on the subscription in older API versions and on each
  // subscription item under the pinned `2026-02-25.clover` version. Reading
  // only the top-level field is what wrote `now` into both period columns of
  // six of the seven Stripe-linked rows in production (20 October 2026). The
  // readers accept both shapes; see `./stripe-shapes.ts`.
  const periodStart = subscriptionPeriodStart(subscription)
  const periodEnd = subscriptionPeriodEnd(subscription)
  // `items` is sometimes absent on test fixtures and on certain Stripe event
  // shapes; tolerate that and default to MONTHLY.
  const interval = subscription.items?.data?.[0]?.price?.recurring?.interval

  return {
    stripeCustomerId: typeof subscription.customer === 'string' ? subscription.customer : null,
    stripeSubscriptionId: subscription.id,
    stripeStatus: subscription.status,
    status: mapStripeToPrismaStatus(subscription.status),
    plan: interval === 'year' ? 'ANNUAL' : 'MONTHLY',
    currentPeriodStart: periodStart ? new Date(periodStart * 1000) : null,
    currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
    cancelledAt:
      subscription.status === 'canceled' && sub.ended_at ? new Date(sub.ended_at * 1000) : null,
    ...planTierFromSubscription(subscription),
  }
}

/**
 * Report a billing record that was NOT written.
 *
 * Two destinations on purpose. Sentry is where a human is paged; the log
 * line is what survives in the Vercel log drain and what the reconciliation
 * script's report is read alongside. The log line carries the full set of
 * facts - customer, subscription, status, plan, period - so the row can be
 * reconstructed from the log alone if Stripe access is not to hand.
 */
function reportUnrecordedSubscription(args: {
  reason: SubscriptionSyncFailureReason
  supabaseUserId: string
  source: string
  eventId?: string | null
  facts: SubscriptionFacts
  error: unknown
}): void {
  const message = args.error instanceof Error ? args.error.message : String(args.error)

  const payload = {
    marker: UNRECORDED_SUBSCRIPTION_MARKER,
    level: 'error',
    reason: args.reason,
    eventType: args.source,
    eventId: args.eventId ?? null,
    supabaseUserId: args.supabaseUserId,
    stripeCustomerId: args.facts.stripeCustomerId,
    stripeSubscriptionId: args.facts.stripeSubscriptionId,
    stripeStatus: args.facts.stripeStatus,
    prismaStatus: args.facts.status,
    plan: args.facts.plan,
    currentPeriodStart: args.facts.currentPeriodStart?.toISOString() ?? null,
    currentPeriodEnd: args.facts.currentPeriodEnd?.toISOString() ?? null,
    cancelledAt: args.facts.cancelledAt?.toISOString() ?? null,
    error: message,
    // Said in words as well as in a field, because the previous version of
    // this failure was logged as something that would be back-filled, and so
    // read as routine for months.
    impact:
      'No Subscription row was written. This customer reads as a free user to ' +
      'entitlements, trial lifecycle and renewal logic until the row is reconciled.',
  }

  // One line, one marker, at error level.
  console.error(`${UNRECORDED_SUBSCRIPTION_MARKER} ${JSON.stringify(payload)}`)

  const sentryError =
    args.error instanceof Error
      ? args.error
      : new Error(`${UNRECORDED_SUBSCRIPTION_MARKER}: ${message}`)

  Sentry.captureException(sentryError, {
    level: 'error',
    tags: {
      surface: 'stripe-webhook',
      defect: 'subscription-unrecorded',
      reason: args.reason,
    },
    // Group every instance of this defect into one issue per reason rather
    // than one issue per stack, so the event count reads as "deliveries
    // affected" instead of scattering across unrelated titles.
    fingerprint: ['stripe-webhook', 'subscription-unrecorded', args.reason],
    extra: payload,
  })
}

/**
 * Upsert the Prisma `Subscription` row for a Stripe subscription, resolving
 * the customer through the identity layer first.
 *
 * Never throws. Returns the outcome so the caller can decide what else to do
 * - the webhook's grandfathering capture, for instance, needs the real Prisma
 * user id and must be skipped when there is not one.
 */
export async function syncStripeSubscriptionToPrisma(
  args: SyncStripeSubscriptionArgs,
): Promise<SubscriptionSyncResult> {
  const facts = readSubscriptionFacts(args.subscription)

  // ── 1. Resolve the Supabase uuid to the Prisma User.id the FK wants ──
  let prismaUserId: string
  try {
    prismaUserId = await requirePrismaUserId(args.supabaseUserId)
  } catch (err) {
    // IdentityConflict is the one case an operator must look at by hand;
    // everything else (including an unexpected throw) is reported as
    // unresolved, which is the honest description of the outcome.
    const reason: SubscriptionSyncFailureReason =
      err instanceof IdentityConflict
        ? 'identity_conflict'
        : err instanceof IdentityUnresolved
          ? 'identity_unresolved'
          : 'identity_unresolved'

    reportUnrecordedSubscription({
      reason,
      supabaseUserId: args.supabaseUserId,
      source: args.source,
      eventId: args.eventId,
      facts,
      error: err,
    })
    return { ok: false, reason, message: err instanceof Error ? err.message : String(err) }
  }

  // ── 2. Guards on our own evidence, before the write ─────────────────
  //
  // One row per user, so a second Stripe subscription does not appear as a
  // second row: it REPLACES the first. The webhook asks Stripe whether another
  // live subscription covers the customer before it calls this module, and
  // since 23 October 2026 that check fails closed, but this layer stands on
  // its own because it holds when Stripe's answer and our row disagree. Three
  // refusals, each for a case that happened or was shown reachable:
  //
  //   2a. Dead incoming, live row of a DIFFERENT Stripe id. On 18 September
  //       2026 the deletion of a failing duplicate wrote CANCELLED, the
  //       duplicate's id and the duplicate's period over the row of a Teachers
  //       Annual subscription the customer had paid GBP 67.99 for and which
  //       Stripe showed Active until 2027. A stale ACTIVE row whose period has
  //       passed is not protected, because then the write is the correction.
  //
  //   2b. Dead incoming, row with NO Stripe id. That row is a no-card signup
  //       trial (TRIALING, ended by the trial-expiry cron) or a store purchase
  //       (the RevenueCat reconciler's). A stalled checkout used to write the
  //       `incomplete` subscription over a trialist's row as PAST_DUE with the
  //       dead subscription's id: the cron then never saw the trial again, the
  //       profile stayed 'pro' for good once the `.updated` handler stopped
  //       writing `incomplete_expired` over a pro profile, and mobile read the
  //       trial as grace. A dead Stripe subscription is not the correction of
  //       anything such a row holds, whatever its period, so it does not take
  //       the row. A LIVE one still does: that is trial conversion, unchanged.
  //       The cost, accepted: a subscription that was live once but whose
  //       row write was missed cannot record its later past_due or
  //       cancellation on the unlinked row. The trial-expiry cron asks Stripe
  //       before it ends such a row, and scripts/stripe-reconcile-subscriptions.mjs
  //       puts a subscription that still keeps access onto it.
  //
  //   2c. Any status other than CANCELLED for the very subscription the row
  //       already records as CANCELLED with a cancelledAt. Stripe never moves
  //       a canceled subscription to another status, so such a delivery is
  //       stale by definition: a `customer.subscription.created` (live)
  //       arriving after the `.deleted`, or a late past_due `.updated`, both of
  //       which Stripe's at-least-once, unordered delivery allows. Written,
  //       they put a cancelled customer back to ACTIVE, or to PAST_DUE, which
  //       mobile reads as grace. A genuine re-subscription arrives under a new
  //       id and still takes the row.
  //
  // There is deliberately no "the period never moves backwards" rule: a plan
  // change with `billing_cycle_anchor: now` legitimately shortens the period.
  const incomingIsLive = facts.status === 'ACTIVE' || facts.status === 'TRIALING'
  let existing: {
    stripeSubscriptionId: string | null
    status: string
    currentPeriodEnd: Date
    cancelledAt: Date | null
  } | null = null
  try {
    existing = await prisma.subscription.findUnique({
      where: { userId: prismaUserId },
      select: {
        stripeSubscriptionId: true,
        status: true,
        currentPeriodEnd: true,
        cancelledAt: true,
      },
    })
  } catch (err) {
    // The upsert below will report the same connection fault far more
    // loudly if it is real; a failed read here must not block the write.
    console.warn(`[billing] row guard could not read the existing row: ${String(err)}`)
  }

  const refuse = (
    reason: SubscriptionSyncFailureReason,
    marker: string,
    detail: string,
  ): SubscriptionSyncResult => {
    const message =
      `${marker} ${JSON.stringify({
        marker,
        eventType: args.source,
        eventId: args.eventId ?? null,
        supabaseUserId: args.supabaseUserId,
        keptSubscriptionId: existing?.stripeSubscriptionId ?? null,
        keptStatus: existing?.status ?? null,
        keptPeriodEnd: existing?.currentPeriodEnd.toISOString() ?? null,
        refusedSubscriptionId: facts.stripeSubscriptionId,
        refusedStripeStatus: facts.stripeStatus,
      })} ` + detail
    console.warn(message)
    return { ok: false, reason, message }
  }

  if (existing) {
    const sameSubscription =
      existing.stripeSubscriptionId !== null &&
      existing.stripeSubscriptionId === facts.stripeSubscriptionId
    const existingIsLive =
      (existing.status === 'ACTIVE' || existing.status === 'TRIALING') &&
      existing.currentPeriodEnd.getTime() > Date.now()

    if (!incomingIsLive && existing.stripeSubscriptionId && !sameSubscription && existingIsLive) {
      return refuse(
        'live_row_protected',
        LIVE_ROW_PROTECTED_MARKER,
        'The stored row is a live subscription and the incoming one is a dead duplicate. Row ' +
          'left as it was. Check Stripe for two subscriptions on this customer.',
      )
    }
    if (!incomingIsLive && existing.stripeSubscriptionId === null) {
      return refuse(
        'unlinked_row_protected',
        UNLINKED_ROW_PROTECTED_MARKER,
        'The stored row has no Stripe subscription (a signup trial or a store purchase) and the ' +
          'incoming subscription is not live, so it does not take the row. A live one would.',
      )
    }
    if (
      facts.status !== 'CANCELLED' &&
      sameSubscription &&
      existing.status === 'CANCELLED' &&
      Boolean(existing.cancelledAt)
    ) {
      return refuse(
        'stale_event',
        STALE_EVENT_REFUSED_MARKER,
        'The row already records this very subscription as cancelled, and Stripe never moves ' +
          'a canceled subscription to another status, so this delivery is stale. Row left as ' +
          'it was.',
      )
    }
  }

  // ── 3. Write the row ────────────────────────────────────────────────
  //
  // `currentPeriodStart` / `currentPeriodEnd` are NOT NULL in the schema and
  // a create must supply both. When Stripe's payload carries no period (some
  // event shapes omit it) the create falls back to `now` rather than refusing
  // the write: a row that exists with an approximate period is recoverable, a
  // missing row is the defect being fixed. The UPDATE branch applies no such
  // fallback - an absent period leaves the stored one alone rather than
  // overwriting a real date with today.
  try {
    await prisma.subscription.upsert({
      where: { userId: prismaUserId },
      create: {
        userId: prismaUserId,
        stripeCustomerId: facts.stripeCustomerId,
        stripeSubscriptionId: facts.stripeSubscriptionId,
        plan: facts.plan,
        status: facts.status,
        currentPeriodStart: facts.currentPeriodStart ?? new Date(),
        currentPeriodEnd: facts.currentPeriodEnd ?? new Date(),
        cancelledAt: facts.cancelledAt,
        platform: 'WEB',
        // The column defaults to false; an unknown price leaves it there.
        isTeacherPlan: facts.isTeacherPlan ?? false,
        teacherPriceId: facts.teacherPriceId,
        ...(args.recordPayment && { paymentCount: 1 }),
      },
      update: {
        stripeCustomerId: facts.stripeCustomerId,
        stripeSubscriptionId: facts.stripeSubscriptionId,
        plan: facts.plan,
        status: facts.status,
        ...(facts.currentPeriodStart && { currentPeriodStart: facts.currentPeriodStart }),
        ...(facts.currentPeriodEnd && { currentPeriodEnd: facts.currentPeriodEnd }),
        cancelledAt: facts.cancelledAt,
        // Only when the price said something; see `planTierFromSubscription`.
        ...(facts.isTeacherPlan !== null && {
          isTeacherPlan: facts.isTeacherPlan,
          teacherPriceId: facts.teacherPriceId,
        }),
        // Once per paid invoice. The webhook claims the event id before it
        // runs this, so a Stripe retry of the same delivery cannot count a
        // payment twice.
        ...(args.recordPayment && { paymentCount: { increment: 1 } }),
      },
    })
  } catch (err) {
    reportUnrecordedSubscription({
      reason: 'row_write_failed',
      supabaseUserId: args.supabaseUserId,
      source: args.source,
      eventId: args.eventId,
      facts,
      error: err,
    })
    return {
      ok: false,
      reason: 'row_write_failed',
      message: err instanceof Error ? err.message : String(err),
    }
  }

  return { ok: true, prismaUserId }
}
