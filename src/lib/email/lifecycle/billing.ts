// ─── The billing notices: M6 payment failed, M7 cancelled and ended ─────────
//
// ADDED 23 October 2026 (document 08, Part B).
//
// M6 replaces the Stripe webhook's inline "Action Required: Payment Failed"
// email. Its "To avoid any interruption to your subscription" was false: the
// handler had already written `past_due` to the profile, and the web gate
// reads 'pro' only, so the interruption had happened by the time the email
// was read. The webhook now says which happened (`accessPaused`), and the
// copy says "paused" only then; otherwise it states nothing about access
// (24 October 2026: an earlier "stays active for now ... the plan will end"
// was unsupported, see buildPaymentFailedEmail). M6 was live before this
// ledger existed, so it is NOT behind
// TRIAL_LIFECYCLE_EMAILS_ENABLED, and it sends without a ledger row rather
// than not at all when the row cannot be written.
//
// M7 confirms a cancellation. Nothing did before: /api/stripe/cancel returned
// a reference number to the page and sent no email (the confirmation now
// follows the cancelled subscription's status, its IELTS-only flag and
// whether another plan remains), and
// customer.subscription.deleted revoked access silently. Both are new copy the
// founder has not yet seen live, so both wait for the switch.
//
// Recipient: the address the caller resolved. The webhook asks Stripe for the
// customer's email first and falls back to the profile, as its other notices
// do; the cancel route uses the signed-in account's address.
//
// None of these throws: an email must never fail a webhook (Stripe retries a
// non-2xx for three days) or a cancellation.
// ────────────────────────────────────────────────────────────────────────────

import { tryPrismaUserId } from '@/lib/identity'
import {
  buildPaymentFailedEmail,
  buildPlanCancelledEmail,
  buildPlanEndedEmail,
  type CancelledPlanStatus,
} from '@/lib/email-templates/lifecycle-emails'
import {
  LIFECYCLE_DISABLED_REASON,
  claimThenSendLifecycle,
  lifecycleEmailsEnabled,
  paymentFailedKind,
  planCancelledKind,
  planEndedKind,
  unsubscribeLinkFor,
  type LifecycleSendOutcome,
} from './send'

export type BillingEmailOutcome = LifecycleSendOutcome | 'skipped'

function errText(err: unknown): string {
  return err instanceof Error ? err.message : String(err)
}

export interface PaymentFailedArgs {
  /** The profile id (Supabase uuid), when the customer resolved to one. */
  supabaseUserId: string | null
  to: string
  invoiceId: string
  amountMinor: number | null | undefined
  currency: string | null | undefined
  /** True only when this event removed access (the profile was moved to past_due). */
  accessPaused: boolean
  /** Every price on the failed invoice is an IELTS price. */
  ieltsOnly: boolean
  /**
   * `invoice.attempt_count`: 1 on the first failed attempt, then one more per
   * automatic retry. Missing or not a number is read as the first attempt.
   */
  attemptCount?: number | null
}

/**
 * M6. One per invoice, however many of Stripe's retries fail.
 *
 * ─── How "one per invoice" is kept (corrected 24 October 2026) ────────────
 * The ledger row (user, `M6_PAYMENT_FAILED:<invoice>`) is the mechanism, and
 * it needs a Prisma user to key on. The first version resolved the user
 * read-only, and with no user it sent without a ledger row, as it does when
 * the ledger table is missing. Each Stripe retry arrives as a NEW event id, so
 * webhook_events did not stop it either, and a payer with no Prisma row yet
 * was sent the notice again on every failed retry of the same invoice. Now:
 *
 *   1. the user is resolved with tryPrismaUserId, which projects a missing
 *      row as M7 and the subscription sync already do for the same customer,
 *      so the ledger keys the notice whenever the customer has a profile;
 *   2. when there is still no ledger row to claim (no profile linked to the
 *      Stripe customer, a projection that failed, or the ledger table
 *      missing), Stripe's own count decides: the notice goes on the
 *      invoice's first attempt only. The cost, accepted: if that one send is
 *      refused there is no later one for this invoice.
 */
export async function sendPaymentFailedEmail(
  args: PaymentFailedArgs,
): Promise<BillingEmailOutcome> {
  const LOG = '[stripe/webhook:payment-failed]'
  try {
    const userId = args.supabaseUserId ? await tryPrismaUserId(args.supabaseUserId) : null
    const firstAttempt = typeof args.attemptCount !== 'number' || args.attemptCount <= 1
    if (!userId && !firstAttempt) {
      console.info(
        `${LOG} skipped invoice=${args.invoiceId} attempt=${args.attemptCount}: no ledger user, ` +
          "so only the invoice's first failed attempt is told; this is a retry.",
      )
      return 'skipped'
    }
    const unsubscribe = unsubscribeLinkFor(args.supabaseUserId)
    const email = buildPaymentFailedEmail({
      amountMinor: args.amountMinor,
      currency: args.currency,
      accessPaused: args.accessPaused,
      ieltsOnly: args.ieltsOnly,
      unsubscribeUrl: unsubscribe.pageUrl,
    })
    return await claimThenSendLifecycle({
      userId,
      kind: paymentFailedKind(args.invoiceId),
      to: args.to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers: unsubscribe.headers,
      logPrefix: LOG,
      // Without a ledger row the notice still goes, but only once per
      // invoice: on its first attempt (see the docblock).
      sendWithoutLedger: firstAttempt,
    })
  } catch (err) {
    console.error(`${LOG} failed: ${errText(err)}`)
    return 'send-failed'
  }
}

export interface PlanCancelledArgs {
  supabaseUserId: string
  to: string
  subscriptionId: string
  /** The subscription's Stripe status when it was cancelled; each has its own copy. */
  status: CancelledPlanStatus
  /** Every recurring price on it is an IELTS price. */
  ieltsOnly: boolean
  /** Another live subscription remains on the customer. */
  otherPlanRemains: boolean
}

/**
 * M7, from /api/stripe/cancel once Stripe has accepted the cancellation. The
 * route says which status was cancelled and whether another plan remains,
 * because both change what is true (see buildPlanCancelledEmail).
 */
export async function sendPlanCancelledEmail(
  args: PlanCancelledArgs,
): Promise<BillingEmailOutcome> {
  const LOG = '[stripe/cancel:plan-cancelled]'
  if (!lifecycleEmailsEnabled()) {
    console.info(`${LOG} skipped - ${LIFECYCLE_DISABLED_REASON}`)
    return 'skipped'
  }
  try {
    const userId = await tryPrismaUserId(args.supabaseUserId)
    const unsubscribe = unsubscribeLinkFor(args.supabaseUserId)
    const email = buildPlanCancelledEmail({
      status: args.status,
      ieltsOnly: args.ieltsOnly,
      otherPlanRemains: args.otherPlanRemains,
      unsubscribeUrl: unsubscribe.pageUrl,
    })
    return await claimThenSendLifecycle({
      userId,
      kind: planCancelledKind(args.subscriptionId),
      to: args.to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers: unsubscribe.headers,
      logPrefix: LOG,
    })
  } catch (err) {
    console.error(`${LOG} failed: ${errText(err)}`)
    return 'send-failed'
  }
}

export interface PlanEndedArgs {
  supabaseUserId: string
  subscriptionId: string
  /** Resolves the recipient. Called only when the switch is on. */
  resolveEmail: () => Promise<string | null>
}

/**
 * M7, from customer.subscription.deleted, and only when that event revoked
 * the entitlement: never for a duplicate being cleaned up, never for an
 * IELTS-only plan whose holder may still have a paid plan alongside it, and
 * (since 24 October 2026) never for a main plan that ended while an IELTS plan
 * remains, since "your account stays open on the free plan" would then be
 * false. The webhook decides all three before it calls this.
 */
export async function sendPlanEndedEmail(args: PlanEndedArgs): Promise<BillingEmailOutcome> {
  const LOG = '[stripe/webhook:plan-ended]'
  if (!lifecycleEmailsEnabled()) {
    console.info(`${LOG} skipped - ${LIFECYCLE_DISABLED_REASON}`)
    return 'skipped'
  }
  try {
    const to = await args.resolveEmail()
    if (!to) {
      console.warn(`${LOG} no address for the customer, nothing sent`)
      return 'skipped'
    }
    const userId = await tryPrismaUserId(args.supabaseUserId)
    const unsubscribe = unsubscribeLinkFor(args.supabaseUserId)
    const email = buildPlanEndedEmail({ unsubscribeUrl: unsubscribe.pageUrl })
    return await claimThenSendLifecycle({
      userId,
      kind: planEndedKind(args.subscriptionId),
      to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers: unsubscribe.headers,
      logPrefix: LOG,
    })
  } catch (err) {
    console.error(`${LOG} failed: ${errText(err)}`)
    return 'send-failed'
  }
}
