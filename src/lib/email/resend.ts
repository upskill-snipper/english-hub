// ─── Resend wrapper ────────────────────────────────────────────────────────
//
// Thin typed wrapper around the Resend HTTP API. Used for transactional
// emails that don't need the trustpilot-BCC pipeline (that lives in
// `src/lib/email.ts`). Safe-by-default: when `RESEND_API_KEY` is missing,
// every send returns `{ sent: false, reason: 'no-key' }` without throwing,
// so calling code can always progress - the user-facing success state
// should never depend on email delivery.
//
// Uses the raw HTTPS endpoint instead of the `resend` SDK because we
// don't need streaming, and avoiding a runtime import keeps Vercel's
// edge/serverless cold-starts snappy.
// ──────────────────────────────────────────────────────────────────────────

export type ResendSendResult =
  | { sent: true; messageId: string }
  | { sent: false; reason: 'no-key' | 'http-error' | 'network-error'; detail?: string }

export interface ResendSendOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  from?: string
  replyTo?: string
  /** Blind copies. Used by the Trustpilot invitation pipeline. */
  bcc?: string | string[]
  tags?: Array<{ name: string; value: string }>
  /**
   * Extra RFC 5322 headers. Added 19 September 2026 (RET-7) so marketing mail
   * can carry `List-Unsubscribe` and `List-Unsubscribe-Post`: without them
   * Gmail and Outlook show no unsubscribe control of their own, and a reader
   * who wants out has only the "report spam" button - which costs us domain
   * reputation for every recipient, not just the one who clicked it.
   */
  headers?: Record<string, string>
}

const DEFAULT_FROM = 'The English Hub <noreply@theenglishhub.app>'

/** The JSON Resend expects for one email. Shared by the single and batch sends. */
function toResendPayload(opts: ResendSendOptions) {
  return {
    from: opts.from ?? DEFAULT_FROM,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    ...(opts.text ? { text: opts.text } : {}),
    ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    ...(opts.bcc && opts.bcc.length ? { bcc: opts.bcc } : {}),
    ...(opts.tags ? { tags: opts.tags } : {}),
    ...(opts.headers && Object.keys(opts.headers).length ? { headers: opts.headers } : {}),
  }
}

export async function sendViaResend(opts: ResendSendOptions): Promise<ResendSendResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[resend] RESEND_API_KEY not set - email not sent.', {
      to: opts.to,
      subject: opts.subject,
    })
    return { sent: false, reason: 'no-key' }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toResendPayload(opts)),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('[resend] HTTP error', res.status, detail)
      return { sent: false, reason: 'http-error', detail: `${res.status}: ${detail.slice(0, 500)}` }
    }

    const body = (await res.json()) as { id?: string }
    return { sent: true, messageId: body.id ?? 'unknown' }
  } catch (err) {
    const detail = err instanceof Error ? err.message : 'unknown error'
    console.error('[resend] network error', detail)
    return { sent: false, reason: 'network-error', detail }
  }
}

// ─── Batch send ───────────────────────────────────────────────────────────

/** Resend's batch endpoint takes at most this many emails per request. */
export const RESEND_BATCH_LIMIT = 100

export interface ResendBatchResult {
  /** Emails Resend accepted. */
  sent: number
  /** Emails it did not accept, and why. */
  failed: Array<{
    to: string | string[]
    reason: 'no-key' | 'http-error' | 'network-error'
    detail?: string
  }>
}

/**
 * Send many emails through Resend's batch endpoint, up to 100 per request.
 *
 * ADDED 11 October 2026 for the school bulk upload, which emails up to 500
 * pupils at once. Resend allows 10 requests a second per team, shared with
 * every other email the site sends, and answers 429 beyond that, so 500 single
 * sends fired together would mostly be refused and those pupils would never get
 * their passwords. Batched, it is five requests, sent one after another.
 *
 * Same contract as sendViaResend: it never throws, and a missing key is a
 * result rather than an exception. A failed request fails every email in it,
 * so the caller can say exactly who was not sent.
 */
export async function sendBatchViaResend(
  messages: readonly ResendSendOptions[],
): Promise<ResendBatchResult> {
  const result: ResendBatchResult = { sent: 0, failed: [] }
  if (messages.length === 0) return result

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[resend] RESEND_API_KEY not set - batch not sent.', { count: messages.length })
    for (const m of messages) result.failed.push({ to: m.to, reason: 'no-key' })
    return result
  }

  for (let start = 0; start < messages.length; start += RESEND_BATCH_LIMIT) {
    const chunk = messages.slice(start, start + RESEND_BATCH_LIMIT)
    try {
      const res = await fetch('https://api.resend.com/emails/batch', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chunk.map(toResendPayload)),
      })
      if (!res.ok) {
        const detail = await res.text().catch(() => '')
        console.error('[resend] batch HTTP error', res.status, detail)
        for (const m of chunk) {
          result.failed.push({
            to: m.to,
            reason: 'http-error',
            detail: `${res.status}: ${detail.slice(0, 500)}`,
          })
        }
        continue
      }
      result.sent += chunk.length
    } catch (err) {
      const detail = err instanceof Error ? err.message : 'unknown error'
      console.error('[resend] batch network error', detail)
      for (const m of chunk) result.failed.push({ to: m.to, reason: 'network-error', detail })
    }
  }
  return result
}

// ─── Plain-text HTML escape - used everywhere we interpolate user input ───

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
