/**
 * Guardian consent request for self-serve (non-school) student accounts.
 *
 * GET  - returns the signed-in student's guardian consent state.
 * POST - raises (or re-raises) the request and emails the guardian.
 *
 * Two defects this route used to carry:
 *
 *   1. It was called from the register page immediately after
 *      supabase.auth.signUp(). With email confirmation ON there is no
 *      session at that point, so every call was answered 401 and no
 *      guardian was ever emailed for a direct signup. The send is now
 *      triggered server-side from the AI gate (src/lib/consent-check.ts),
 *      where a verified session always exists, and this route is the
 *      signed-in student's manual send/resend control.
 *   2. It wrote its token to `consent_tokens`, but the parent-facing
 *      /consent page resolves tokens out of `parental_consents`. The
 *      emailed link therefore always rendered "invalid or expired", and
 *      an approval recorded in `consent_tokens` would not have satisfied
 *      checkParentalConsent() anyway. Token storage now lives in
 *      src/lib/parental-consent.ts, which writes `parental_consents` -
 *      see the token-store note at the top of that module.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  getGuardianConsentState,
  sendGuardianConsentRequest,
  isValidEmail,
  type GuardianConsentSendSkipReason,
} from '@/lib/parental-consent'

export const dynamic = 'force-dynamic'

/**
 * Response text per skip reason. Kept server-side (rather than leaking the
 * raw reason code to the UI) so the student sees something actionable and
 * true in every branch, including the ones where nothing was sent.
 */
const SKIP_MESSAGES: Record<GuardianConsentSendSkipReason, string> = {
  not_required: 'Your account does not need parental consent.',
  already_approved: 'Your parent or guardian has already given consent.',
  no_guardian_email:
    'We do not have a parent or guardian email address for your account. Enter one and we will send the request.',
  invalid_guardian_email: 'That does not look like a valid email address. Please check it.',
  same_as_student_email:
    'The parent or guardian email must be different from your own email address.',
  throttled:
    'We have sent a request recently. Please wait a little longer before sending another one.',
  send_cap_reached:
    'We have sent as many consent requests as we can for this account. Please contact support@theenglishhub.app.',
  profile_unavailable: 'We could not load your account details. Please try again shortly.',
  store_failed: 'We could not start the consent request right now. Please try again shortly.',
  email_not_configured: 'We could not send the email right now. Please try again shortly.',
  email_failed: 'We could not send the email right now. Please try again shortly.',
}

/** Reasons that are the caller's to fix, and so answer 4xx rather than 5xx. */
const CLIENT_ERROR_STATUS: Partial<Record<GuardianConsentSendSkipReason, number>> = {
  not_required: 422,
  already_approved: 422,
  no_guardian_email: 422,
  invalid_guardian_email: 422,
  same_as_student_email: 422,
  throttled: 429,
  send_cap_reached: 429,
}

// ─── GET - current state for the signed-in student ──────────────────────

export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json(
      { error: 'You must be signed in to view your parental consent status.' },
      { status: 401 },
    )
  }

  // Read-only, but it fans out to two database queries, so it is bounded
  // per account like every other authenticated endpoint here.
  const rl = await rateLimit(`parent-notify-state:${user.id}`, { limit: 30, windowSeconds: 60 })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
      },
    )
  }

  try {
    const state = await getGuardianConsentState(user.id)
    return NextResponse.json(state)
  } catch (err) {
    console.error('[parent-notify] failed to read guardian consent state:', err)
    return NextResponse.json(
      { error: 'We could not load your consent status. Please try again shortly.' },
      { status: 500 },
    )
  }
}

// ─── POST - send or resend the guardian consent email ───────────────────

export async function POST(request: NextRequest) {
  // ─── 1. Authenticate the caller ─────────────────────────────────────────
  // Only a signed-in user (the student themselves) may trigger a parental
  // consent email. Anonymous callers are rejected to prevent mass email /
  // phishing from our domain.
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json(
      { error: 'You must be signed in to request a parental consent email.' },
      { status: 401 },
    )
  }

  // ─── 2. Per-user rate limit (Upstash - survives across serverless instances) ─
  const rl = await rateLimit(`parent-notify:${user.id}`, {
    limit: 5,
    windowSeconds: 60 * 60,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many parental consent emails requested. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
      },
    )
  }

  // ─── 3. Per-IP backstop (mitigates stolen-token abuse) ──────────────────
  const ip = getClientIp(request.headers)
  const ipRl = await rateLimit(`parent-notify-ip:${ip}`, {
    limit: 10,
    windowSeconds: 60 * 60,
  })
  if (!ipRl.success) {
    return NextResponse.json(
      { error: 'Too many requests from this location. Please try again later.' },
      { status: 429 },
    )
  }

  // ─── 4. Parse body ──────────────────────────────────────────────────────
  // Every field is optional: with no body at all we resend to the guardian
  // address already held on the profile.
  let body: { parentEmail?: unknown; studentId?: unknown } = {}
  try {
    body = await request.json()
  } catch {
    body = {}
  }

  const parentEmail = typeof body.parentEmail === 'string' ? body.parentEmail.trim() : ''
  const studentId = typeof body.studentId === 'string' ? body.studentId.trim() : ''

  if (parentEmail && !isValidEmail(parentEmail)) {
    return NextResponse.json({ error: SKIP_MESSAGES.invalid_guardian_email }, { status: 422 })
  }

  // ─── 5. Ownership check ─────────────────────────────────────────────────
  // If a studentId is supplied it MUST match the authenticated user. The
  // student name is no longer accepted from the caller: it is read from the
  // profile, so a caller cannot put arbitrary text into an email we send.
  if (studentId && studentId !== user.id) {
    return NextResponse.json(
      { error: 'You can only request parental consent for your own account.' },
      { status: 403 },
    )
  }

  // ─── 6. Raise the request ───────────────────────────────────────────────
  const result = await sendGuardianConsentRequest({
    studentUserId: user.id,
    guardianEmail: parentEmail || null,
    trigger: 'manual_resend',
    ip,
  })

  if (result.sent) {
    return NextResponse.json({
      success: true,
      guardian_email_masked: result.guardianEmailMasked,
      expires_at: result.expiresAt,
      message: `We have emailed ${result.guardianEmailMasked} with a link to give their consent. The link lasts 7 days.`,
    })
  }

  const status = CLIENT_ERROR_STATUS[result.reason] ?? 503
  return NextResponse.json(
    {
      error: SKIP_MESSAGES[result.reason],
      reason: result.reason,
      ...(result.guardianEmailMasked ? { guardian_email_masked: result.guardianEmailMasked } : {}),
      ...(result.lastSentAt ? { last_sent_at: result.lastSentAt } : {}),
    },
    {
      status,
      ...(result.retryAfterSeconds
        ? { headers: { 'Retry-After': String(result.retryAfterSeconds) } }
        : {}),
    },
  )
}
