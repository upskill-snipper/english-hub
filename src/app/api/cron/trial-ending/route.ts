import { NextRequest, NextResponse } from 'next/server'

import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'
import { runTrialSequence } from '@/lib/email/lifecycle/trial-sequence'
import { LIFECYCLE_DISABLED_REASON, lifecycleEmailsEnabled } from '@/lib/email/lifecycle/send'

export const dynamic = 'force-dynamic'

/**
 * Cron: trial-ending reminder + post-expiry follow-up for the no-card
 * signup trial.
 *
 * Defect being fixed (2026-08-23 conversion audit)
 * ────────────────────────────────────────────────
 * Signup provisions a 7-day full-product trial with no card (Option C
 * paywall, /api/auth/register). `/api/cron/trial-expiry` then silently
 * downgrades it on day 7. Nothing warned the user first and nothing
 * followed up, so the entire main trial population lost premium access
 * without ever being told. `src/lib/renewal-reminders.ts` contains a
 * `sendTrialEndingReminders()` that was never wired to any route (its own
 * comment says so) and is shaped for Stripe-managed card trials, so it did
 * not cover this population.
 *
 * What this route does
 * ────────────────────
 *   1. WARN  - trials ending within the next 2 days get one reminder.
 *   2. FOLLOW UP - trials that ended in the last 3 days get one winback.
 *
 * Audience discriminator (mirrors /api/cron/trial-expiry)
 * ──────────────────────────────────────────────────────
 * We only ever touch rows that are ALL of:
 *   • stripeSubscriptionId = null   - the no-card signup trials
 *   • platform = WEB and revenuecatAppUserId = null - excludes mobile
 *     RevenueCat rows, which also legitimately carry a null Stripe id
 *     (see the schema note on the Stripe identity columns). trial-expiry
 *     does not need this filter because `status = TRIALING` already
 *     excludes them; the follow-up query below keys on CANCELLED, which
 *     does not, so the filter is required here.
 *   • paymentCount = 0              - no payment recorded on the row.
 *
 * A paying or previously-paying customer can therefore never receive either
 * of these emails - but the guarantee rests on `stripeSubscriptionId = null`,
 * NOT on `paymentCount`, and this comment used to say otherwise.
 * `paymentCount` is incremented in exactly one place in the repository,
 * `src/lib/revenuecat/reconcile.ts`, so it is 0 for every web customer no
 * matter how many invoices Stripe has actually paid. Treat it as a
 * RevenueCat-only counter and never as proof that nobody has paid. The
 * filter is kept because it is correct for the mobile population and costs
 * nothing, but the Stripe identity column is the load-bearing one: every
 * row this repository writes for a Stripe subscription carries
 * `subscription.id` there (see `src/lib/billing/subscription-sync.ts`), so
 * a Stripe customer is structurally excluded from both queries.
 *
 * Idempotency ledger
 * ──────────────────
 * `RenewalReminder` rows with `type = TRIAL_ENDING`, keyed on
 * `subscriptionId`. Two sends have to be distinguished without a schema
 * change (adding a `TRIAL_WINBACK` enum value needs a Prisma migration,
 * which is outside this change's ownership), so they are told apart by
 * comparing `sentAt` with `nextPaymentDate`:
 *
 *   • warning   row - written only while `now < currentPeriodEnd`, so
 *                     `sentAt <= nextPaymentDate`.
 *   • follow-up row - written only while `now > currentPeriodEnd`, so
 *                     `sentAt >  nextPaymentDate`.
 *
 * The query gates guarantee those two conditions, so the discriminator is
 * derivable rather than a sentinel value stuffed into a column.
 *
 * The ledger row is written BEFORE the send and deleted again if the send
 * fails. That way a re-run (a manual curl, a double schedule, or simply the
 * next nightly firing - Vercel does not retry a failed cron: REL-6)
 * can never re-send, while a genuine delivery failure is still retried on
 * the next nightly run rather than being silently dropped.
 *
 * Backlog safety
 * ──────────────
 * Both windows are narrow and bounded, so switching the feature flag on
 * for the first time cannot blast every historical trial. `MAX_SENDS_PER_RUN`
 * is a second belt on top of that.
 *
 * Auth: GET with `Authorization: Bearer ${CRON_SECRET}`, which is what
 * Vercel Cron actually sends. POST delegates to the same handler for manual
 * invocation. (Two crons in this repo previously shipped POST-only and so
 * returned 405 to every scheduled invocation, forever.)
 */

/*
 * ─── 23 October 2026: the whole no-card sequence ───────────────────────────
 *
 * This route now runs M1 to M5 of document 08's sequence, not only the two
 * sends described above, and the work lives in
 * src/lib/email/lifecycle/trial-sequence.ts, whose header has the windows and
 * the audiences. Three things above changed:
 *
 *   • The follow-up (M3) is no longer marketing-gated. It states facts about
 *     the person's own account, so every trialist receives it; the price and
 *     the plan link go only to adults who may receive marketing (corrected
 *     24 October 2026: at first it was every adult), and everyone else gets
 *     the service copy. Neither M2 nor M3 goes to a Stripe customer or to an
 *     unconfirmed address.
 *   • Every send claims a LifecycleEmail row (unique on user and kind) before
 *     it sends and releases it on failure. The RenewalReminder TRIAL_ENDING
 *     row is still written beside it for M2 and M3, so the record this route
 *     has always left still appears.
 *   • Age is read by emailAgeGroup (src/lib/identity/age.ts): a missing date
 *     of birth is a child, not "not under 13", and the 2000-01-01 backfill
 *     placeholder is never read as an age.
 *
 * The feature flag, the auth and the response shape are unchanged.
 */

// ─── Handlers ────────────────────────────────────────────────────────────

export async function GET(request: NextRequest): Promise<Response> {
  const auth = authoriseCronRequest(request, 'trial-ending')
  if (!auth.ok) return auth.response

  return executeTrialEndingCron()
}

export async function POST(request: NextRequest): Promise<Response> {
  // Manual invocation uses the same Bearer shape as the scheduled GET.
  return GET(request)
}

// ─── Body ────────────────────────────────────────────────────────────────

async function executeTrialEndingCron(): Promise<Response> {
  // ── Feature flag (default OFF) ─────────────────────────────────────
  //
  // Deliberately opt-in. The founder reviews the copy, confirms the
  // unsubscribe link resolves, and then sets TRIAL_LIFECYCLE_EMAILS_ENABLED
  // = 'true' in the Vercel project env. Until then this route is a no-op
  // that still returns 200, so the schedule can ship without sending
  // anything. The same switch governs the account-ready email and the
  // cancellation confirmations (src/lib/email/lifecycle/send.ts).
  if (!lifecycleEmailsEnabled()) {
    // Logged, not silent. Without this line a disabled run emits nothing
    // at all and is indistinguishable in the Vercel log from a schedule
    // that never fired (REL-8, and chapter 09 named it).
    console.info(`[cron:trial-ending] skipped - ${LIFECYCLE_DISABLED_REASON}`)
    return NextResponse.json({ ok: true, skipped: LIFECYCLE_DISABLED_REASON }, { status: 200 })
  }

  return runCron('trial-ending', () => runTrialSequence(new Date()))
}
