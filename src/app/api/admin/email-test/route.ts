import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifyAdmin } from '@/lib/admin-auth'
import { sendViaResend, escapeHtml } from '@/lib/email/resend'

// ─── POST /api/admin/email-test ─────────────────────────────────────────
//
// Diagnostic endpoint: sends a "Test from The English Hub" email through
// the Resend wrapper and returns the raw result so the founder can verify
// the API key works AND that the sending domain is verified.
//
// Gated by:
//   1. verifyAdmin() - must be a logged-in admin
//   2. Optional `x-admin-token` header that must match ADMIN_DIAGNOSTIC_TOKEN
//      (only enforced if the env var is set, so it's opt-in extra hardening)
//
// Body: { to: string }
// ────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 10 per IP per minute ───────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-email-test:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    // ── Admin auth ─────────────────────────────────────────
    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // ── Optional second-factor: x-admin-token header ──────
    const requiredToken = process.env.ADMIN_DIAGNOSTIC_TOKEN
    if (requiredToken) {
      const provided = request.headers.get('x-admin-token')
      if (provided !== requiredToken) {
        return NextResponse.json({ error: 'Forbidden - invalid x-admin-token' }, { status: 403 })
      }
    }

    // ── Parse + validate ──────────────────────────────────
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const to = (body as { to?: unknown })?.to
    if (typeof to !== 'string' || !to.includes('@') || to.length > 254) {
      return NextResponse.json(
        { error: 'Body must include a valid `to` email address' },
        { status: 400 },
      )
    }

    // ── Send the test email ──────────────────────────────
    const safeTo = escapeHtml(to)
    const sentAt = new Date().toISOString()
    const result = await sendViaResend({
      to,
      subject: 'Test from The English Hub',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color: #0f172a;">Email diagnostics test</h2>
          <p>This is a test email sent from <strong>The English Hub</strong> via Resend.</p>
          <p>If you received this, the Resend API key is valid AND the sending domain is verified.</p>
          <hr />
          <p style="color: #64748b; font-size: 12px;">
            Recipient: ${safeTo}<br />
            Sent at: ${sentAt}<br />
            Source: /api/admin/email-test
          </p>
        </div>
      `,
      text: `Email diagnostics test\n\nThis is a test email from The English Hub via Resend.\nRecipient: ${to}\nSent at: ${sentAt}`,
      tags: [{ name: 'category', value: 'diagnostic' }],
    })

    if (!result.sent) {
      return NextResponse.json(
        {
          ok: false,
          reason: result.reason,
          detail: 'detail' in result ? result.detail : undefined,
          hint:
            result.reason === 'no-key'
              ? 'RESEND_API_KEY is not set in this environment. Add it in Vercel → Settings → Environment Variables.'
              : result.reason === 'http-error'
                ? 'Resend rejected the send. Most common cause: sending domain (theenglishhub.app) is not verified at https://resend.com/domains.'
                : 'Network error reaching Resend. Try again in a moment.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      ok: true,
      messageId: result.messageId,
      to,
      sentAt,
    })
  } catch (error) {
    console.error('[api/admin/email-test] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
