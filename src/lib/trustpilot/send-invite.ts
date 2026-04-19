/**
 * Trustpilot invitation sender + deduplication.
 *
 * This module is safe to import from anywhere. Until the feature flag is
 * enabled (see `TRUSTPILOT_ENABLED` below), `sendTrustpilotInvite` logs the
 * invite it *would* have sent but does not hit SendGrid or Trustpilot's API.
 *
 * Required environment variables before enabling:
 *   TRUSTPILOT_BUSINESS_UNIT_ID   — from Trustpilot Business account
 *   TRUSTPILOT_API_KEY            — Trustpilot API key (for AFS links)
 *   SENDGRID_API_KEY              — already in use for transactional email
 *   TRUSTPILOT_ENABLED            — set to "true" to enable sending
 *
 * Cloudflare Email Routing note:
 *   The `from` address is `reviews@theenglishhub.app`. That alias must be
 *   configured to forward inbound replies to info@upskillenergy.com via
 *   Cloudflare Email Routing (see FILING-DAY-WORKSHEET.md Section "Email
 *   aliases") AND the domain's SPF / DKIM must authorise SendGrid or the
 *   email will land in spam.
 */

import {
  renderTrustpilotEmail,
  type TrustpilotTrigger,
  type TrustpilotVars,
} from './email-templates'

export type SendTrustpilotInviteInput = {
  trigger: TrustpilotTrigger
  toEmail: string
  vars: TrustpilotVars
  /** Supabase user id for deduplication (prevents re-sending same trigger to same user). */
  userId: string
}

export type SendTrustpilotInviteResult = {
  sent: boolean
  skipped?: 'disabled' | 'already_sent' | 'invalid'
  messageId?: string
  error?: string
}

function isEnabled(): boolean {
  return process.env.TRUSTPILOT_ENABLED === 'true'
}

/**
 * Main entry point. Deduplicates, renders, and dispatches an invite.
 *
 * Dedup is the caller's job — this function does NOT look up or insert into
 * the `trustpilot_invite` table. The caller should check `hasAlreadyBeenSent`
 * first and record the send afterwards.
 *
 * Returns a structured result. Never throws on expected conditions; throws only
 * on genuine unexpected infrastructure failures.
 */
export async function sendTrustpilotInvite(
  input: SendTrustpilotInviteInput,
): Promise<SendTrustpilotInviteResult> {
  const { trigger, toEmail, vars, userId } = input

  if (!toEmail || !userId) {
    return { sent: false, skipped: 'invalid', error: 'Missing toEmail or userId' }
  }

  if (!isEnabled()) {
    // Feature flag off — log only. Lets us ship the trigger code without
    // actually sending emails until Trustpilot Business + SendGrid + domain
    // auth are all configured.
    console.info('[trustpilot] would send', {
      trigger,
      toEmail,
      userId,
      inviteLinkPresent: Boolean(vars.trustpilot_invite_link),
    })
    return { sent: false, skipped: 'disabled' }
  }

  const email = renderTrustpilotEmail(trigger, vars)

  // Guard: ensure the invite link variable is set — rendering without it
  // produces a broken CTA.
  if (!vars.trustpilot_invite_link) {
    return { sent: false, skipped: 'invalid', error: 'trustpilot_invite_link missing' }
  }

  try {
    const apiKey = process.env.SENDGRID_API_KEY
    if (!apiKey) throw new Error('SENDGRID_API_KEY not set')

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }],
            subject: email.subject,
            custom_args: { trigger, user_id: userId },
          },
        ],
        from: { email: email.from.email, name: email.from.name },
        reply_to: { email: email.replyTo },
        content: [
          // Plain-text first then HTML. Keeping plain-text is important for
          // deliverability + for the "headers/preview" fallback on mail clients.
          { type: 'text/plain', value: email.body },
          {
            type: 'text/html',
            value: email.body
              .split('\n\n')
              .map(
                (p) =>
                  `<p style="margin:0 0 16px 0;font-family:sans-serif;color:#111;line-height:1.6">${escapeHtml(p).replace(/\n/g, '<br>')}</p>`,
              )
              .join(''),
          },
        ],
        mail_settings: {
          sandbox_mode: { enable: process.env.SENDGRID_SANDBOX === 'true' },
        },
        tracking_settings: {
          click_tracking: { enable: true, enable_text: false },
          open_tracking: { enable: true },
        },
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      return {
        sent: false,
        error: `SendGrid returned ${res.status}: ${text.slice(0, 200)}`,
      }
    }

    const messageId = res.headers.get('x-message-id') ?? undefined
    return { sent: true, messageId }
  } catch (err) {
    return {
      sent: false,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Build a Trustpilot invitation link for a given user.
 *
 * Format (from Trustpilot docs):
 *   https://www.trustpilot.com/evaluate/theenglishhub.app?email=<email>&name=<name>&orderid=<id>
 *
 * Once Trustpilot Business is configured, replace this with the AFS link
 * returned by the Trustpilot API for per-invitation tracking.
 */
export function buildTrustpilotInviteLink(args: {
  email: string
  name: string
  orderId?: string
}): string {
  const params = new URLSearchParams({
    email: args.email,
    name: args.name,
  })
  if (args.orderId) params.set('orderid', args.orderId)
  return `https://www.trustpilot.com/evaluate/theenglishhub.app?${params.toString()}`
}
