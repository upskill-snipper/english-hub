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
  tags?: Array<{ name: string; value: string }>
}

const DEFAULT_FROM = 'The English Hub <noreply@theenglishhub.app>'

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
      body: JSON.stringify({
        from: opts.from ?? DEFAULT_FROM,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        ...(opts.text ? { text: opts.text } : {}),
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
        ...(opts.tags ? { tags: opts.tags } : {}),
      }),
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

// ─── Plain-text HTML escape - used everywhere we interpolate user input ───

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
