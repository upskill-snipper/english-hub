import nodemailer from 'nodemailer'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { shouldBccTrustpilot } from '@/lib/trustpilot/should-bcc'

// ─── SMTP Configuration ─────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const FROM_ADDRESS = process.env.FROM_EMAIL || 'noreply@theenglishhub.app'
const FROM_NAME = 'The English Hub'
const FROM = `${FROM_NAME} <${FROM_ADDRESS}>`

// ─── Send Email ──────────────────────────────────────────────────────────

/**
 * Send an email. When a plain-text `text` body is supplied alongside the
 * HTML, nodemailer emits a `multipart/alternative` message — improving
 * deliverability (spam scoring) and accessibility (screen readers, text-only
 * clients). The 3-arg call form remains supported for existing callers.
 */
export type SendEmailOptions = {
  /**
   * When set, runs the Trustpilot BCC pipeline before sending:
   *   • shouldBccTrustpilot() decides eligibility (age, opt-outs, dedup).
   *   • On `ok` — BCC `TRUSTPILOT_INVITE_EMAIL` + write `trustpilot_invite`
   *     row with status 'sent'.
   *   • On `skip` — write a row with status 'skipped' and the reason. Email
   *     still sends normally (just without the BCC).
   * Requires `userId` so the eligibility + dedup queries can run.
   */
  trustpilotTrigger?: string
  /** Supabase auth user id — required when `trustpilotTrigger` is set. */
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
      // Trustpilot is non-critical — a failure here must never block the
      // primary email send. Log and carry on.
      console.warn('[email] trustpilot BCC pipeline errored', err)
    }
  }

  try {
    const info = await transporter.sendMail({
      from: FROM,
      to,
      subject,
      html,
      ...(text ? { text } : {}),
      ...(bcc.length > 0 ? { bcc } : {}),
    })

    // Fire-and-forget — do not block the caller on the audit-row write.
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

// ─── Verify SMTP connection (call on startup if desired) ─────────────────

export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify()
    return true
  } catch (err) {
    console.error('[email] SMTP verification failed:', err)
    return false
  }
}
