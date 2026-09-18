// ─── POST /api/unsubscribe ───────────────────────────────────────────────────
//
// The action behind the unsubscribe link that, until 19 September 2026, went
// nowhere: four email templates built `/unsubscribe?token=...` URLs and no such
// route existed, so every marketing email we sent advertised an opt-out that
// returned a 404. See `@/lib/email/unsubscribe-token` for the full history.
//
// This handler serves two callers:
//   1. The confirm button on /unsubscribe, for a human who clicked the link.
//   2. Mail providers performing RFC 8058 one-click unsubscribe, which POST
//      here server-to-server from the `List-Unsubscribe-Post` header.
//
// ── WHY IT IS CSRF-EXEMPT, WHICH IS NOT A SHORTCUT ──────────────────────────
// Every non-GET /api/** path is gated by the same-origin attestation in
// `@/lib/security/csrf-origin`, which refuses a request with no `Origin`
// header by design. Gmail and Apple Mail send the RFC 8058 POST with no Origin
// at all, so without an explicit exemption this route would have been
// advertised in a header and then 403'd before the handler ever ran - the dead
// unsubscribe link again, in a new costume.
//
// The exemption is sound on that file's own test: this route carries NO
// ambient cookie authority. It authenticates purely from the HMAC token, which
// a victim's browser cannot produce. An attacker who can make a victim's
// browser POST here gains nothing they could not achieve by not sending the
// victim any email.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { verifyUnsubscribeToken } from '@/lib/email/unsubscribe-token'
import { optOutOfMarketing } from '@/lib/email/marketing-preference'
import { rateLimit } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

/**
 * Read the token from a form post, a JSON body, or the query string.
 *
 * RFC 8058 specifies `List-Unsubscribe=One-Click` as a form-encoded body and
 * says nothing about where the recipient's identity lives, so providers send
 * the whole URL including its query. Accepting all three shapes is what makes
 * this work across Gmail, Apple Mail and Outlook rather than only the one that
 * was tested.
 */
async function readToken(request: NextRequest): Promise<string | null> {
  const fromQuery = request.nextUrl.searchParams.get('token')
  if (fromQuery) return fromQuery

  const contentType = request.headers.get('content-type') ?? ''
  try {
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData()
      const value = form.get('token')
      return typeof value === 'string' && value ? value : null
    }
    if (contentType.includes('application/json')) {
      const body = (await request.json()) as { token?: unknown }
      return typeof body?.token === 'string' && body.token ? body.token : null
    }
  } catch {
    return null
  }
  return null
}

export async function POST(request: NextRequest) {
  const token = await readToken(request)

  // An unauthenticated endpoint that writes needs a ceiling, keyed on the
  // token so one leaked link cannot be used to hammer the database.
  const rl = await rateLimit(`unsubscribe:${(token ?? 'anon').slice(0, 64)}`, {
    limit: 10,
    windowSeconds: 3_600,
  })
  if (!rl.success) {
    return NextResponse.json({ ok: false, error: 'Too many requests.' }, { status: 429 })
  }

  if (!token) {
    return NextResponse.json({ ok: false, error: 'Missing token.' }, { status: 400 })
  }

  const result = verifyUnsubscribeToken(token, Date.now())
  if (!result.valid) {
    // Deliberately one message for every failure mode. Distinguishing "expired"
    // from "bad signature" would tell a prober whether a token was ever real.
    console.warn('[api/unsubscribe] token rejected', { reason: result.reason })
    return NextResponse.json(
      { ok: false, error: 'This unsubscribe link is no longer valid.' },
      { status: 400 },
    )
  }

  try {
    const outcome = await optOutOfMarketing(result.supabaseUserId)
    if (!outcome.changed) {
      // Neither store could be written. Saying "done" here would be the exact
      // failure pattern this codebase is full of: reporting success for work
      // that did not happen, on the one action a regulator would check.
      console.error('[api/unsubscribe] no store accepted the opt-out')
      return NextResponse.json(
        { ok: false, error: 'We could not update your preferences. Please try again.' },
        { status: 500 },
      )
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/unsubscribe] failed', err)
    return NextResponse.json(
      { ok: false, error: 'We could not update your preferences. Please try again.' },
      { status: 500 },
    )
  }
}
