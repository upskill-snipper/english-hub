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

import { findExistingUser, tryPrismaUserId } from '@/lib/identity'
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
}

/** M6. One per invoice, however many of Stripe's retries fail. */
export async function sendPaymentFailedEmail(
  args: PaymentFailedArgs,
): Promise<BillingEmailOutcome> {
  const LOG = '[stripe/webhook:payment-failed]'
  try {
    // Read-only: a billing notice is no reason to create an identity row.
    let userId: string | null = null
    if (args.supabaseUserId) {
      try {
        userId = (await findExistingUser(args.supabaseUserId))?.id ?? null
      } catch {
        userId = null
      }
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
      sendWithoutLedger: true,
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
 * the entitlement: never for a duplicate being cleaned up, and never for an
 * IELTS-only plan whose holder may still have a paid plan alongside it, since
 * "your account stays open on the free plan" would then be false.
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
