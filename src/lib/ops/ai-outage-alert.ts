// ─── Telling a person that the AI is down ────────────────────────────────────
//
// WHY THIS EXISTS (21 October 2026)
// The Anthropic account ran out of credit on 12 October 2026 at 15:10 UTC.
// Every AI call failed from then on, and the first anyone heard of it was a
// read-only check on 16 October. In between, 12 new trial learners had their
// first essays saved and never marked. `/api/health/ai` ran every morning at
// 06:30 and failed every morning, but a failing cron is a non-2xx in the
// Vercel cron log, and nobody reads that log. A check that reports to nobody
// is the shape this codebase keeps finding (docs/HANDOVER.md section 4).
//
// So a failure now sends an email, from two places:
//   1. `/api/health/ai`, every morning that any configured model fails. A
//      standing outage is re-announced daily until it is fixed.
//   2. `logAiDecision`, on the first live request that fails in a way that
//      will not pass on its own (an empty account, a rejected key, a retired
//      model: `needsHuman` in src/lib/ai/provider-failure.ts). That is the one
//      that would have fired at 15:10 on 12 October, when the first learner's
//      essay failed, rather than at 06:30 the next morning. It is limited to
//      one email per kind of failure every six hours, held in the same lease
//      table the cron jobs use (src/lib/cron/lock.ts), so a busy outage sends
//      one email rather than one per learner.
//
// THE RECIPIENT is `AI_ALERT_EMAIL`, or `OPERATOR_DIGEST_EMAIL` when that is
// not set. Wiring an automatic send to a real address is the owner's call, as
// it is for the digest, so there is no address in the code. When neither is
// set nothing can be sent, and that is not quiet either: every attempt prints
// an error naming the variable to set, and /api/health/ai reports
// `alert.reason: 'no-recipient'` in its response.
//
// THE TRANSPORT is `sendEmail` in src/lib/email.ts, which uses Resend when no
// SMTP host is configured, as in production. A Sentry event is raised as well;
// production had no Sentry DSN when this was written, so that is a no-op until
// one is set, and the email is the alert.
//
// No learner data goes into an alert: no user id, no essay, only the feature,
// the model, the provider's sentence and the time.
// ────────────────────────────────────────────────────────────────────────────

import type { AiProviderFailure, AiProviderFailureKind } from '@/lib/ai/provider-failure'

/** One live-request alert per kind of failure in this window. */
export const AI_ALERT_THROTTLE_SECONDS = 6 * 60 * 60

/** The lease name that throttles live alerts for one kind of failure. */
export function aiAlertLockName(kind: AiProviderFailureKind): string {
  return `ai-alert:${kind}`
}

/** Who is told. Null when nobody has been named. */
export function aiAlertRecipient(
  env: Record<string, string | undefined> = process.env,
): string | null {
  const to = env.AI_ALERT_EMAIL?.trim() || env.OPERATOR_DIGEST_EMAIL?.trim()
  return to || null
}

export interface AiOutageAlertInput {
  /** Where the failure was seen. */
  source: 'health/ai' | 'live-request'
  failure: AiProviderFailure
  /** The AI feature a live request was for, e.g. 'marking/run'. */
  feature?: string | null
  model?: string | null
  /** Further lines for the body, e.g. one per failed probe. */
  lines?: readonly string[]
  at?: Date
}

export type AiOutageAlertOutcome =
  | { sent: true; messageId?: string }
  | { sent: false; reason: 'no-recipient' | 'throttled' | 'send-failed'; detail?: string }

const SUBJECTS: Readonly<Record<AiProviderFailureKind, string>> = {
  credit_exhausted: 'AI is down: the Anthropic account is out of credit',
  key_rejected: 'AI is down: the Anthropic API key was rejected',
  access_denied: 'AI is down: the API key may not use the model',
  model_unavailable: 'AI is down: a model id was rejected',
  not_configured: 'AI is down: no Anthropic API key is set',
  rate_limited: 'AI check failed: rate limited at the provider',
  overloaded: 'AI check failed: the provider is overloaded',
  timeout: 'AI check failed: no reply in time',
  other: 'AI check failed',
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** The email, as text and as HTML. Pure, so a test can read what is sent. */
export function renderAiOutageAlert(input: AiOutageAlertInput): {
  subject: string
  text: string
  html: string
} {
  const { failure } = input
  const at = (input.at ?? new Date()).toISOString()
  const seen =
    input.source === 'health/ai'
      ? 'The daily AI check (/api/health/ai) failed.'
      : `A learner's request to ${input.feature ?? 'an AI feature'} failed.`

  const lines = [
    `The English Hub - AI alert, ${at}`,
    '',
    'WHAT FAILED',
    `  ${seen}`,
    `  Kind: ${failure.kind}`,
    `  Provider status: ${failure.status ?? 'none'}${failure.type ? ` (${failure.type})` : ''}`,
    `  Provider says: ${(failure.message ?? 'nothing').slice(0, 300)}`,
    ...(input.model ? [`  Model: ${input.model}`] : []),
    '',
    'WHAT TO DO',
    `  ${failure.action}`,
  ]

  if (failure.needsHuman) {
    lines.push(
      '',
      'WHAT LEARNERS SEE',
      '  Every AI feature fails until this is fixed. Essays are saved but not marked,',
      '  and the learner is told that marking is unavailable.',
    )
  }

  if (input.lines?.length) lines.push('', 'DETAIL', ...input.lines.map((l) => `  ${l}`))

  lines.push(
    '',
    'HOW TO CHECK IT IS FIXED',
    '  The daily check runs at 06:30 UTC. To run it now:',
    '  curl -H "Authorization: Bearer $CRON_SECRET" https://theenglishhub.app/api/health/ai',
    "  Every AI call is recorded in AuditLog with action = 'ai_decision'.",
    '',
    'Alerts from live requests are limited to one every six hours for the same',
    'kind of failure. The daily check sends one every morning until it passes.',
  )

  const text = lines.join('\n')
  return {
    subject: `[The English Hub] ${SUBJECTS[failure.kind]}`,
    text,
    html: `<pre style="font-family:monospace;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
  }
}

/**
 * Send the alert. Never throws: it runs on failure paths that must not fail
 * again because of it. `throttle` is for live requests; the daily check does
 * not use it, so a standing outage is announced every morning.
 */
export async function sendAiOutageAlert(
  input: AiOutageAlertInput,
  options: { throttle?: boolean } = {},
): Promise<AiOutageAlertOutcome> {
  try {
    const { subject, text, html } = renderAiOutageAlert(input)
    const tags = { ai_failure: input.failure.kind, ai_alert_source: input.source }

    // Raised before anything can return early, so a DSN set later records
    // every failure even when the email is throttled or has no recipient.
    // Imported here rather than at the top: this module is reached from
    // ai-audit-log, and the SDK stays out of every bundle that never alerts
    // (client-bundle-guards.test.ts).
    const Sentry = await import('@sentry/nextjs')
    Sentry.captureMessage(subject, { level: 'error', tags })

    const to = aiAlertRecipient()
    if (!to) {
      console.error(
        `[ai-alert] NOT SENT, nobody to tell: set AI_ALERT_EMAIL in Vercel. ${subject}. ${input.failure.action}`,
      )
      return { sent: false, reason: 'no-recipient' }
    }

    let lockName: string | null = null
    if (options.throttle) {
      lockName = aiAlertLockName(input.failure.kind)
      try {
        const { claimCronLock } = await import('@/lib/cron/lock')
        if (!(await claimCronLock(lockName, AI_ALERT_THROTTLE_SECONDS))) {
          return { sent: false, reason: 'throttled' }
        }
      } catch (err) {
        // The throttle's storage is unreachable. Send anyway: a second email
        // is a much smaller failure than none at all.
        console.error(
          `[ai-alert] throttle unavailable, sending anyway: ${err instanceof Error ? err.message : String(err)}`,
        )
        lockName = null
      }
    }

    const { sendEmail } = await import('@/lib/email')
    const result = await sendEmail(to, subject, html, text)
    if (result.success) {
      console.error(`[ai-alert] SENT: ${subject}`)
      return { sent: true, messageId: result.messageId }
    }

    // Give the lease back, so the next failure tries again rather than
    // waiting six hours behind an email that never left.
    if (lockName) {
      const { releaseCronLock } = await import('@/lib/cron/lock')
      await releaseCronLock(lockName)
    }
    console.error(`[ai-alert] NOT SENT, the email failed: ${result.error ?? 'unknown'}. ${subject}`)
    return { sent: false, reason: 'send-failed', detail: result.error }
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err)
    console.error(`[ai-alert] NOT SENT: ${detail}`)
    return { sent: false, reason: 'send-failed', detail }
  }
}
