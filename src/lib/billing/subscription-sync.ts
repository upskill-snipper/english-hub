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

/**
 * The marker every unrecorded-subscription log line starts with.
 *
 * It is a single fixed token on purpose: it is what an operator greps for in
 * the Vercel logs and what a log-drain alert matches on. Do not reword it.
 */
export const UNRECORDED_SUBSCRIPTION_MARKER = 'BILLING_SUBSCRIPTION_UNRECORDED'

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
}

/**
 * Everything read off the Stripe object, extracted once so the write and the
 * failure report cannot disagree about what was supposed to be stored.
 */
export function readSubscriptionFacts(subscription: Stripe.Subscription): SubscriptionFacts {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  const periodStart = sub.current_period_start as number | undefined
  const periodEnd = sub.current_period_end as number | undefined
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

  // ── 2. Write the row ────────────────────────────────────────────────
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
      },
      update: {
        stripeCustomerId: facts.stripeCustomerId,
        stripeSubscriptionId: facts.stripeSubscriptionId,
        plan: facts.plan,
        status: facts.status,
        ...(facts.currentPeriodStart && { currentPeriodStart: facts.currentPeriodStart }),
        ...(facts.currentPeriodEnd && { currentPeriodEnd: facts.currentPeriodEnd }),
        cancelledAt: facts.cancelledAt,
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
