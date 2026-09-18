import nodemailer from 'nodemailer'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { shouldBccTrustpilot } from '@/lib/trustpilot/should-bcc'
import { sendViaResend } from '@/lib/email/resend'

// ─── Transport selection ────────────────────────────────────────────────
//
// THE DEFECT THIS FIXES (18 September 2026)
// This module built a nodemailer transport at module load from SMTP_HOST,
// SMTP_PORT, SMTP_USER and SMTP_PASS. None of those four is set in production,
// so the transport was constructed with `host: undefined`, every send threw,
// and `sendEmail` returned `{ success: false }` to callers that carry on
// regardless. The mail on this path is not marketing: it is safeguarding
// alerts to the designated lead, DSAR acknowledgements, parental-consent and
// parent-link notices, school invitations, bulk-import notices, dormancy
// warnings and data-retention notices. None of them has ever been delivered.
//
// Resend is configured in production and already carries the contact form,
// the school enquiry form and the Stripe webhook's mail, so it is the
// transport that demonstrably works. When SMTP is not configured this module
// now uses it, and says which transport carried the message.
//
// Setting the SMTP_* variables in Vercel switches the path back with no code
// change, because the choice is made per send, not at module load.
// ────────────────────────────────────────────────────────────────────────

/** True when a real SMTP host is configured. Read per send, never cached. */
function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_HOST.trim())
}

// ─── SMTP Configuration ─────────────────────────────────────────────────

let cachedTransporter: nodemailer.Transporter | null = null

/**
 * Built on first use rather than at module load, so importing this file in an
 * environment with no SMTP settings cannot construct a transport pointed at
 * `undefined`.
 */
function getTransporter(): nodemailer.Transporter {
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  return cachedTransporter
}

/** Test seam: drop the cached transport after changing the environment. */
export function __resetEmailTransportForTests(): void {
  cachedTransporter = null
}

const FROM_ADDRESS = process.env.FROM_EMAIL || 'noreply@theenglishhub.app'
const FROM_NAME = 'The English Hub'
const FROM = `${FROM_NAME} <${FROM_ADDRESS}>`

// ─── Send Email ──────────────────────────────────────────────────────────

/**
 * Send an email. When a plain-text `text` body is supplied alongside the
 * HTML, nodemailer emits a `multipart/alternative` message - improving
 * deliverability (spam scoring) and accessibility (screen readers, text-only
 * clients). The 3-arg call form remains supported for existing callers.
 */
export type SendEmailOptions = {
  /**
   * When set, runs the Trustpilot BCC pipeline before sending:
   *   • shouldBccTrustpilot() decides eligibility (age, opt-outs, dedup).
   *   • On `ok` - BCC `TRUSTPILOT_INVITE_EMAIL` + write `trustpilot_invite`
   *     row with status 'sent'.
   *   • On `skip` - write a row with status 'skipped' and the reason. Email
   *     still sends normally (just without the BCC).
   * Requires `userId` so the eligibility + dedup queries can run.
   */
  trustpilotTrigger?: string
  /** Supabase auth user id - required when `trustpilotTrigger` is set. */
  userId?: string
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  text?: string,
  options?: SendEmailOptions,
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const bcc: string[] = []
  let trustpilotDecision:
    | { ok: true; trigger: string; userId: string }
    | { ok: false; trigger: string; userId: string; reason: string }
    | null = null

  if (options?.trustpilotTrigger && options.userId) {
    try {
      const decision = await shouldBccTrustpilot({
        userId: options.userId,
        trigger: options.trustpilotTrigger,
        prisma,
      })
      if (decision.ok) {
        const inviteEmail = process.env.TRUSTPILOT_INVITE_EMAIL
        if (inviteEmail) bcc.push(inviteEmail)
        trustpilotDecision = {
          ok: true,
          trigger: options.trustpilotTrigger,
          userId: options.userId,
        }
      } else {
        trustpilotDecision = {
          ok: false,
          trigger: options.trustpilotTrigger,
          userId: options.userId,
          reason: decision.reason,
        }
      }
    } catch (err) {
      // Trustpilot is non-critical - a failure here must never block the
      // primary email send. Log and carry on.
      console.warn('[email] trustpilot BCC pipeline errored', err)
    }
  }

  try {
    // The transport is chosen per send. See the header: SMTP is unset in
    // production, and this mail has to arrive.
    let messageId: string | undefined
    if (smtpConfigured()) {
      const info = await getTransporter().sendMail({
        from: FROM,
        to,
        subject,
        html,
        ...(text ? { text } : {}),
        ...(bcc.length > 0 ? { bcc } : {}),
      })
      messageId = info.messageId
    } else {
      const r = await sendViaResend({
        to,
        subject,
        html,
        from: FROM,
        ...(text ? { text } : {}),
        ...(bcc.length > 0 ? { bcc } : {}),
      })
      if (!r.sent) {
        // Neither transport is configured. Say so loudly and specifically:
        // a silent false here is what hid the original defect.
        const detail =
          r.reason === 'no-key'
            ? 'no SMTP_HOST and no RESEND_API_KEY are set, so there is no way to send mail'
            : `resend ${r.reason}: ${r.detail ?? ''}`
        console.error(`[email] Failed to send to ${to}: ${detail}`)
        return { success: false, error: detail }
      }
      messageId = r.messageId
    }
    const info = { messageId }

    // Fire-and-forget - do not block the caller on the audit-row write.
    if (trustpilotDecision) {
      void recordTrustpilotOutcome(trustpilotDecision, info.messageId).catch((err) =>
        console.warn('[email] trustpilot_invite row write failed', err),
      )
    }

    return { success: true, messageId: info.messageId }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown email error'
    console.error(`[email] Failed to send to ${to}: ${message}`)
    return { success: false, error: message }
  }
}

async function recordTrustpilotOutcome(
  decision:
    | { ok: true; trigger: string; userId: string }
    | { ok: false; trigger: string; userId: string; reason: string },
  messageId?: string,
): Promise<void> {
  const supabase = createServiceRoleClient()
  await supabase.from('trustpilot_invite').insert({
    user_id: decision.userId,
    trigger: decision.trigger,
    status: decision.ok ? 'sent' : 'skipped',
    message_id: messageId ?? null,
    skipped_reason: decision.ok ? null : decision.reason,
  })
}

// ─── Verify the configured transport ─────────────────────────────────────

/** Which transport a send would use right now, for health checks and logs. */
export function activeEmailTransport(): 'smtp' | 'resend' | 'none' {
  if (smtpConfigured()) return 'smtp'
  return process.env.RESEND_API_KEY ? 'resend' : 'none'
}

/**
 * Prove the configured transport can actually be reached. Returns false when
 * nothing is configured at all, which is the state production was in until
 * 18 September 2026 and which no caller could previously detect.
 *
 * Nothing calls this yet. It is the check `/api/health` should make.
 */
export async function verifyEmailConnection(): Promise<boolean> {
  const transport = activeEmailTransport()
  if (transport === 'none') {
    console.error('[email] no transport configured: set SMTP_HOST or RESEND_API_KEY')
    return false
  }
  if (transport === 'resend') {
    // The Resend wrapper has no verify endpoint; the key's presence is the
    // only thing checkable without spending a send.
    return true
  }
  try {
    await getTransporter().verify()
    return true
  } catch (err) {
    console.error('[email] SMTP verification failed:', err)
    return false
  }
}
