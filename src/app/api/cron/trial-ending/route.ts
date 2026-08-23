import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { ReminderType, SubscriptionPlatform, SubscriptionStatus } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { runCron } from '@/lib/cron/observability'
import { buildTrialEndingEmail, buildTrialEndedEmail } from '@/lib/email-templates/trial-lifecycle'

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
 *   • paymentCount = 0              - never taken a payment, so this can
 *                                     never reach a paying customer.
 * A paying or previously-paying customer can therefore never receive
 * either of these emails.
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
 * fails. That way a re-run (manual curl, Vercel retry, double schedule)
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

// ─── Constants ───────────────────────────────────────────────────────────

const DAY_MS = 24 * 60 * 60 * 1000
/** Warn when the trial ends within this many days. */
const WARN_LEAD_DAYS = 2
/** Follow up only on trials that ended within this many days. */
const FOLLOW_UP_WINDOW_DAYS = 3
/** Safety valve: cap the blast radius of any single run. */
const MAX_SENDS_PER_RUN = 200
/** Children's Code belt-and-braces: registration already enforces 13+. */
const MIN_AGE_YEARS = 13

// ─── Handlers ────────────────────────────────────────────────────────────

export async function GET(request: NextRequest): Promise<Response> {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    console.error('[cron:trial-ending] CRON_SECRET is not configured')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const authHeader = request.headers.get('authorization') ?? ''
  const incoming = Buffer.from(authHeader)
  const expected = Buffer.from(`Bearer ${cronSecret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

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
  // preferences link resolves, and then sets TRIAL_LIFECYCLE_EMAILS_ENABLED
  // = 'true' in the Vercel project env. Until then this route is a no-op
  // that still returns 200, so the schedule can ship without sending
  // anything.
  if (process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED !== 'true') {
    return NextResponse.json(
      { ok: true, skipped: 'disabled - set TRIAL_LIFECYCLE_EMAILS_ENABLED=true to enable' },
      { status: 200 },
    )
  }

  return runCron('trial-ending', async () => {
    const now = new Date()
    let budget = MAX_SENDS_PER_RUN

    const skipped: Record<string, number> = {
      alreadySent: 0,
      noEmail: 0,
      underAge: 0,
      sendFailed: 0,
      budgetExhausted: 0,
    }

    // ── 1. Warning: trials ending within WARN_LEAD_DAYS ─────────────
    const warnCutoff = new Date(now.getTime() + WARN_LEAD_DAYS * DAY_MS)

    const endingSoon = await prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.TRIALING,
        stripeSubscriptionId: null,
        platform: SubscriptionPlatform.WEB,
        revenuecatAppUserId: null,
        paymentCount: 0,
        currentPeriodEnd: { gt: now, lte: warnCutoff },
        user: { deletedAt: null, accountStatus: 'ACTIVE' },
      },
      select: {
        id: true,
        currentPeriodEnd: true,
        user: {
          select: { id: true, email: true, firstName: true, dateOfBirth: true },
        },
        renewalReminders: {
          where: { type: ReminderType.TRIAL_ENDING },
          select: { sentAt: true, nextPaymentDate: true },
        },
      },
    })

    let warned = 0

    for (const sub of endingSoon) {
      // A warning row is one written before the trial boundary.
      if (sub.renewalReminders.some((r) => r.sentAt <= r.nextPaymentDate)) {
        skipped.alreadySent++
        continue
      }
      if (!sub.user?.email) {
        skipped.noEmail++
        continue
      }
      if (isUnderMinimumAge(sub.user.dateOfBirth, now)) {
        // Registration enforces 13+; anything younger here is bad data and
        // must not be emailed.
        skipped.underAge++
        continue
      }
      // Budget is checked last so it is only ever consumed by a candidate
      // that would genuinely have been sent, keeping the counters honest.
      if (budget <= 0) {
        skipped.budgetExhausted++
        continue
      }

      const { subject, html, text } = buildTrialEndingEmail({
        firstName: sub.user.firstName,
        trialEndsAt: sub.currentPeriodEnd,
      })

      const sent = await claimThenSend({
        subscriptionId: sub.id,
        nextPaymentDate: sub.currentPeriodEnd,
        to: sub.user.email,
        subject,
        html,
        text,
      })

      if (sent) {
        warned++
        budget--
      } else {
        skipped.sendFailed++
      }
    }

    // ── 2. Follow-up: trials that ended in the last window ───────────
    //
    // trial-expiry flips these rows to CANCELLED, so that is the state we
    // look for. This is winback, i.e. marketing rather than a service
    // notice, so it is hard-gated on `PrivacySettings.marketingEnabled`,
    // the same consent signal weekly-student-reports uses. That flag is
    // OFF by default (Children's Code: marketing off by default for
    // children), so this send only ever reaches users who opted in.
    const followUpFloor = new Date(now.getTime() - FOLLOW_UP_WINDOW_DAYS * DAY_MS)

    const recentlyExpired = await prisma.subscription.findMany({
      where: {
        status: SubscriptionStatus.CANCELLED,
        stripeSubscriptionId: null,
        platform: SubscriptionPlatform.WEB,
        revenuecatAppUserId: null,
        paymentCount: 0,
        currentPeriodEnd: { lt: now, gte: followUpFloor },
        user: {
          deletedAt: null,
          accountStatus: 'ACTIVE',
          privacySettings: { marketingEnabled: true },
        },
      },
      select: {
        id: true,
        currentPeriodEnd: true,
        user: {
          select: { id: true, email: true, firstName: true, dateOfBirth: true },
        },
        renewalReminders: {
          where: { type: ReminderType.TRIAL_ENDING },
          select: { sentAt: true, nextPaymentDate: true },
        },
      },
    })

    let followedUp = 0

    for (const sub of recentlyExpired) {
      // A follow-up row is one written after the trial boundary.
      if (sub.renewalReminders.some((r) => r.sentAt > r.nextPaymentDate)) {
        skipped.alreadySent++
        continue
      }
      if (!sub.user?.email) {
        skipped.noEmail++
        continue
      }
      if (isUnderMinimumAge(sub.user.dateOfBirth, now)) {
        skipped.underAge++
        continue
      }
      if (budget <= 0) {
        skipped.budgetExhausted++
        continue
      }

      const { subject, html, text } = buildTrialEndedEmail({
        firstName: sub.user.firstName,
        trialEndsAt: sub.currentPeriodEnd,
      })

      const sent = await claimThenSend({
        subscriptionId: sub.id,
        nextPaymentDate: sub.currentPeriodEnd,
        to: sub.user.email,
        subject,
        html,
        text,
      })

      if (sent) {
        followedUp++
        budget--
      } else {
        skipped.sendFailed++
      }
    }

    return {
      candidatesEndingSoon: endingSoon.length,
      candidatesRecentlyExpired: recentlyExpired.length,
      warned,
      followedUp,
      skipped,
    }
  })
}

// ─── Helpers ─────────────────────────────────────────────────────────────

interface ClaimThenSendArgs {
  subscriptionId: string
  nextPaymentDate: Date
  to: string
  subject: string
  html: string
  text: string
}

/**
 * Write the idempotency ledger row first, then send.
 *
 * Ordering matters: recording after the send leaves a window where a
 * successful send with a failed ledger write is re-sent on the next run.
 * Claiming first closes that window, and deleting the claim when the send
 * fails keeps a genuine delivery failure retryable rather than silently
 * swallowed (which is the defect this whole route exists to fix).
 *
 * `amount` is 0 and `currency` 'GBP' because no payment is due: the no-card
 * trial simply ends. Neither value is shown to the user - the templates do
 * not reference an amount at all - so this records a true fact rather than
 * a placeholder price.
 */
async function claimThenSend(args: ClaimThenSendArgs): Promise<boolean> {
  let claimId: string
  try {
    const claim = await prisma.renewalReminder.create({
      data: {
        subscriptionId: args.subscriptionId,
        type: ReminderType.TRIAL_ENDING,
        amount: 0,
        currency: 'GBP',
        nextPaymentDate: args.nextPaymentDate,
      },
      select: { id: true },
    })
    claimId = claim.id
  } catch (err) {
    console.error('[cron:trial-ending] ledger claim failed, skipping send', {
      subscriptionId: args.subscriptionId,
      error: err instanceof Error ? err.message : String(err),
    })
    return false
  }

  const result = await sendEmail(args.to, args.subject, args.html, args.text)
  if (result.success) return true

  // Release the claim so the next nightly run retries this recipient.
  try {
    await prisma.renewalReminder.delete({ where: { id: claimId } })
  } catch (err) {
    console.error('[cron:trial-ending] failed to release ledger claim after send failure', {
      subscriptionId: args.subscriptionId,
      claimId,
      error: err instanceof Error ? err.message : String(err),
    })
  }
  console.warn('[cron:trial-ending] email send failed', {
    subscriptionId: args.subscriptionId,
    error: result.error,
  })
  return false
}

/**
 * True when the account holder is younger than 13. Registration already
 * enforces this, so a hit here means bad data - we skip the send rather
 * than email a child.
 */
function isUnderMinimumAge(dateOfBirth: Date | null | undefined, now: Date): boolean {
  if (!dateOfBirth) return false
  const thirteenthBirthday = new Date(dateOfBirth.getTime())
  thirteenthBirthday.setUTCFullYear(thirteenthBirthday.getUTCFullYear() + MIN_AGE_YEARS)
  return thirteenthBirthday > now
}
