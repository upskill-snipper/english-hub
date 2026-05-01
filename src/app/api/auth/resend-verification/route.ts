/**
 * POST /api/auth/resend-verification
 *
 * Re-sends a verification email for a user who signed up but never received
 * (or lost) the original confirmation email. Sister endpoint to the existing
 * /api/auth/parent-notify and /auth/forgot-password flows.
 *
 * Account-enumeration defence: the response is identical regardless of
 * whether the email exists, is already verified, or has never registered.
 * We always return 200 with a generic body. Any divergence in HTTP status,
 * timing, or response shape would let an attacker probe which addresses
 * have unverified accounts — a known primitive for email-bombing and
 * targeted phishing on platforms used by minors.
 *
 * Rate limits (defence in depth — both must be passed):
 *   - 3 per IP per hour     (mitigates spray attacks from one source)
 *   - 5 per email per day   (mitigates email-bombing of a known address)
 *
 * Email send is best-effort: if Resend is unconfigured or fails, we still
 * return 200. Logging happens server-side so operators can see the failure
 * without leaking the state to the caller.
 */
import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendViaResend, escapeHtml } from '@/lib/email/resend'

export const dynamic = 'force-dynamic'

// Minimal RFC 5322-ish email validation.
function isValidEmail(email: string): boolean {
  if (email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Generic 200 used in every path so callers can't distinguish outcomes.
const GENERIC_OK = {
  ok: true,
  message: "If an account exists for that email, we've sent a fresh verification link.",
}

export async function POST(request: NextRequest) {
  // ─── 1. Per-IP rate limit: 3/hour ─────────────────────────────────────
  // Applied first so an attacker can't bypass it by varying the email.
  const ip = getClientIp(request.headers)
  const ipRl = await rateLimit(`resend-verification-ip:${ip}`, {
    limit: 3,
    windowSeconds: 60 * 60,
  })
  if (!ipRl.success) {
    // Use a generic 200 even on rate-limit so we don't tip off scrapers
    // about the limit threshold. The user can retry in an hour.
    return NextResponse.json(GENERIC_OK)
  }

  // ─── 2. Parse body ───────────────────────────────────────────────────
  let body: { email?: unknown }
  try {
    body = await request.json()
  } catch {
    // Bad payload — still return generic 200 to deny enumeration via
    // malformed-input branching.
    return NextResponse.json(GENERIC_OK)
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(GENERIC_OK)
  }

  // ─── 3. Per-email rate limit: 5/day ──────────────────────────────────
  const emailRl = await rateLimit(`resend-verification-email:${email}`, {
    limit: 5,
    windowSeconds: 24 * 60 * 60,
  })
  if (!emailRl.success) {
    return NextResponse.json(GENERIC_OK)
  }

  // ─── 4. Look up the user via the admin API ───────────────────────────
  // We need to know whether the user (a) exists and (b) is unverified
  // before generating a link. The service-role client is required because
  // listUsers/generateLink are admin-only.
  const admin = createServiceRoleClient()

  let needsVerification = false
  try {
    // Supabase JS v2: admin.listUsers supports filtering server-side
    // via `email` in newer versions, but we fall back to scanning the
    // first page (perPage 1000) in case the deployed SDK is older.
    // For accounts at scale, the email-scoped filter is the right path.
    const { data, error } = await admin.auth.admin.listUsers({
      page: 1,
      perPage: 1000,
    })
    if (!error && data?.users) {
      const target = data.users.find((u) => u.email?.toLowerCase() === email)
      // `email_confirmed_at` is null until the user clicks the link.
      if (target && !target.email_confirmed_at) {
        needsVerification = true
      }
    }
  } catch (err) {
    // Log + swallow — caller still gets 200. We don't want a transient
    // Supabase admin failure to leak existence either.
    console.error('[resend-verification] listUsers failed:', err)
  }

  if (!needsVerification) {
    // Either the email isn't registered, or the account is already
    // confirmed. Same response in both cases.
    return NextResponse.json(GENERIC_OK)
  }

  // ─── 5. Generate a fresh verification link ───────────────────────────
  // Supabase's `generateLink({ type: 'signup' })` requires the password,
  // which we don't have (and shouldn't ask for). For an existing
  // unconfirmed user, the correct admin operation is `type: 'magiclink'`,
  // which mints a one-time link that — when clicked — confirms the email
  // address (equivalent UX to the signup confirmation link). The user
  // lands on /auth/callback exactly as they would after the original
  // signup email.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'

  let actionLink: string | null = null
  try {
    const { data, error } = await admin.auth.admin.generateLink({
      type: 'magiclink',
      email,
      options: {
        redirectTo: `${siteUrl}/auth/callback`,
      },
    })
    if (!error && data?.properties?.action_link) {
      actionLink = data.properties.action_link
    } else if (error) {
      console.error('[resend-verification] generateLink error:', error)
    }
  } catch (err) {
    console.error('[resend-verification] generateLink threw:', err)
  }

  if (!actionLink) {
    // Couldn't mint a link — generic 200, log server-side.
    return NextResponse.json(GENERIC_OK)
  }

  // ─── 6. Send via Resend (best-effort) ────────────────────────────────
  const safeLink = escapeHtml(actionLink)
  const html = [
    `<h2>Confirm your email — The English Hub</h2>`,
    `<p>Hi,</p>`,
    `<p>You asked us to resend the verification link for your English Hub account. Click the button below to confirm your email and finish setting up your account:</p>`,
    `<p><a href="${safeLink}" style="display:inline-block;padding:12px 24px;background:#0f172a;color:#fff;text-decoration:none;border-radius:6px;">Confirm email</a></p>`,
    `<p>Or copy and paste this link into your browser:</p>`,
    `<p style="word-break:break-all;color:#475569;font-size:14px;">${safeLink}</p>`,
    `<p style="color:#64748b;font-size:14px;">If you didn't request this email, you can safely ignore it.</p>`,
    `<br />`,
    `<p>Thanks,<br/>The English Hub Team</p>`,
  ].join('\n')

  const result = await sendViaResend({
    to: email,
    subject: 'Confirm your email — The English Hub',
    html,
    tags: [{ name: 'category', value: 'resend-verification' }],
  })

  if (!result.sent) {
    // Logged inside sendViaResend; surface generic 200 anyway.
    console.warn('[resend-verification] Resend not delivered — reason:', result.reason)
  }

  return NextResponse.json(GENERIC_OK)
}
