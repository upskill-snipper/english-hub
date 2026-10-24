// ─── Sending a lifecycle email: the switch, the ledger, the unsubscribe ─────
//
// ADDED 23 October 2026 (document 08, Part B). Every registration-to-
// subscription email goes through claimThenSendLifecycle, so each one:
//
//   1. claims a LifecycleEmail row (unique on user and kind) BEFORE it sends,
//      so a re-run, two racing auth callbacks or a Stripe retry cannot send
//      twice;
//   2. releases the claim if the send fails, so a delivery failure is retried
//      by the next run instead of being recorded as sent;
//   3. carries List-Unsubscribe and List-Unsubscribe-Post (RFC 8058), signed
//      with the same token /api/unsubscribe verifies, so a mail client's own
//      unsubscribe control turns marketing off in both stores.
//
// The kill switch is TRIAL_LIFECYCLE_EMAILS_ENABLED, read per call. It is off
// unless it is exactly 'true', and every caller logs one "skipped" line when it
// is off, because a disabled run that says nothing is indistinguishable from a
// schedule that never fired (REL-8).
//
// The one exception to "no ledger, no send" is the payment-failed notice
// (`sendWithoutLedger`): it was live before this ledger existed, it tells a
// paying customer that their access has changed, and the webhook's own
// webhook_events table already stops the same event being processed twice.
// Withholding it because the ledger table has not been created yet would be
// a silent failure of exactly the kind this codebase keeps finding. It logs
// LIFECYCLE_SENT_UNLEDGERED when it does this.
// ────────────────────────────────────────────────────────────────────────────

import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { createUnsubscribeToken } from '@/lib/email/unsubscribe-token'
import { SITE_URL } from '@/lib/email-templates/lifecycle-shell'

/** The ledger kinds of the sequence. Billing kinds carry a Stripe id, below. */
export const LIFECYCLE_KIND = {
  ACCOUNT_READY: 'M0_ACCOUNT_READY',
  FIRST_ESSAY: 'M1_FIRST_ESSAY',
  TRIAL_ENDING: 'M2_TRIAL_ENDING',
  TRIAL_ENDED: 'M3_TRIAL_ENDED',
  QUESTS_FREE: 'M4_QUESTS_FREE',
  ONE_ESSAY: 'M5_ONE_ESSAY',
} as const

/** One payment-failed notice per invoice, however many retries fail. */
export function paymentFailedKind(invoiceId: string): string {
  return `M6_PAYMENT_FAILED:${invoiceId}`
}

/** One cancellation confirmation per subscription. */
export function planCancelledKind(subscriptionId: string): string {
  return `M7_CANCEL_SCHEDULED:${subscriptionId}`
}

/** One "your plan has ended" per subscription. */
export function planEndedKind(subscriptionId: string): string {
  return `M7_PLAN_ENDED:${subscriptionId}`
}

export const LIFECYCLE_FLAG = 'TRIAL_LIFECYCLE_EMAILS_ENABLED'

/** The kill switch, read per call so setting it in Vercel needs no deploy logic. */
export function lifecycleEmailsEnabled(): boolean {
  return process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED === 'true'
}

/** The skipped reason every caller reports while the switch is off. */
export const LIFECYCLE_DISABLED_REASON = `disabled - set ${LIFECYCLE_FLAG}=true to enable`

export interface UnsubscribeLink {
  /** For the footer: the page with the confirm button. */
  pageUrl: string
  /** For the message: RFC 8058 one-click, or null when no token could be signed. */
  headers: Record<string, string> | null
}

/**
 * The unsubscribe link for one Supabase user. Without CRON_SECRET or a
 * Supabase id no token can be signed, and the footer falls back to the bare
 * page, which explains how to opt out when signed in. No header is sent then:
 * a one-click header that cannot work is worse than none.
 */
export function unsubscribeLinkFor(
  supabaseUserId: string | null | undefined,
  now: number = Date.now(),
): UnsubscribeLink {
  const token = supabaseUserId ? createUnsubscribeToken(supabaseUserId, now) : null
  if (!token) return { pageUrl: `${SITE_URL}/unsubscribe`, headers: null }
  const encoded = encodeURIComponent(token)
  return {
    pageUrl: `${SITE_URL}/unsubscribe?token=${encoded}`,
    headers: {
      'List-Unsubscribe': `<${SITE_URL}/api/unsubscribe?token=${encoded}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    },
  }
}

export type LifecycleSendOutcome =
  | 'sent'
  | 'sent-unledgered'
  | 'already-sent'
  | 'claim-failed'
  | 'send-failed'

export interface LifecycleSendArgs {
  /** The Prisma `User.id` (a cuid). Null only for a billing notice whose identity did not resolve. */
  userId: string | null
  kind: string
  to: string
  subject: string
  html: string
  text: string
  headers: Record<string, string> | null
  /** Names the caller in every log line. */
  logPrefix: string
  /** Billing notices only. See the header. */
  sendWithoutLedger?: boolean
  /**
   * A second claim taken after the ledger's, released with it. The
   * trial-ending cron keeps writing its RenewalReminder row this way, so the
   * record it has always written still appears.
   */
  alsoClaim?: () => Promise<() => Promise<void>>
}

/** Prisma's unique-constraint code, read without importing the runtime class. */
function isUniqueViolation(err: unknown): boolean {
  return (err as { code?: unknown } | null)?.code === 'P2002'
}

function errText(err: unknown): string {
  return err instanceof Error ? err.message : String(err)
}

async function releaseLedger(claimId: string, args: LifecycleSendArgs): Promise<void> {
  try {
    await prisma.lifecycleEmail.delete({ where: { id: claimId } })
  } catch (err) {
    // The row stays, so this person will not be retried: say so loudly.
    console.error(
      `${args.logPrefix} LIFECYCLE_LEDGER_RELEASE_FAILED kind=${args.kind} claim=${claimId}: ${errText(err)}`,
    )
  }
}

/**
 * Claim, send, and release on failure. Never throws.
 *
 * 'already-sent' is the unique index answering: this person has had this
 * email. 'claim-failed' means the ledger could not be written for any other
 * reason (most likely the table does not exist yet), and nothing was sent.
 */
export async function claimThenSendLifecycle(
  args: LifecycleSendArgs,
): Promise<LifecycleSendOutcome> {
  let claimId: string | null = null

  if (args.userId) {
    try {
      const row = await prisma.lifecycleEmail.create({
        data: { userId: args.userId, kind: args.kind },
        select: { id: true },
      })
      claimId = row.id
    } catch (err) {
      if (isUniqueViolation(err)) return 'already-sent'
      console.error(
        `${args.logPrefix} LIFECYCLE_LEDGER_CLAIM_FAILED kind=${args.kind}: ${errText(err)}. ` +
          'If the table is missing, apply supabase/migrations/20261023_lifecycle_email_ledger.sql ' +
          'and check information_schema.columns, not _migrations_applied.',
      )
      if (!args.sendWithoutLedger) return 'claim-failed'
    }
  } else if (!args.sendWithoutLedger) {
    console.error(
      `${args.logPrefix} LIFECYCLE_NO_USER kind=${args.kind}: nothing to key the ledger on`,
    )
    return 'claim-failed'
  }

  let releaseExtra: (() => Promise<void>) | null = null
  if (args.alsoClaim) {
    try {
      releaseExtra = await args.alsoClaim()
    } catch (err) {
      console.error(`${args.logPrefix} second claim failed kind=${args.kind}: ${errText(err)}`)
      if (claimId) await releaseLedger(claimId, args)
      return 'claim-failed'
    }
  }

  let success = false
  let failure = ''
  try {
    const result = await sendEmail(
      args.to,
      args.subject,
      args.html,
      args.text,
      args.headers ? { headers: args.headers } : undefined,
    )
    success = result.success
    failure = result.error ?? ''
  } catch (err) {
    failure = errText(err)
  }

  if (success) {
    if (!claimId) {
      console.warn(`${args.logPrefix} LIFECYCLE_SENT_UNLEDGERED kind=${args.kind}`)
      return 'sent-unledgered'
    }
    return 'sent'
  }

  // Release both claims so the next run retries this person.
  if (claimId) await releaseLedger(claimId, args)
  if (releaseExtra) {
    try {
      await releaseExtra()
    } catch (err) {
      console.error(
        `${args.logPrefix} second claim release failed kind=${args.kind}: ${errText(err)}`,
      )
    }
  }
  console.warn(`${args.logPrefix} LIFECYCLE_SEND_FAILED kind=${args.kind}: ${failure}`)
  return 'send-failed'
}
