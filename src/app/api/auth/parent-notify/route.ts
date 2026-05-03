import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

// ─── HTML escape for safe interpolation into email templates ────────────────
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Minimal RFC 5322-ish email validation. Stricter validation happens in Resend.
function isValidEmail(email: string): boolean {
  if (email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  // ─── 1. Authenticate the caller ─────────────────────────────────────────
  // Only a signed-in user (the student themselves, during onboarding) may
  // trigger a parental-consent email. Anonymous callers are rejected to
  // prevent mass email / phishing from our domain.
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

  // ─── 2. Per-user rate limit (Upstash — survives across serverless instances) ─
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
  let body: { parentEmail?: unknown; studentName?: unknown; studentId?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parentEmail = typeof body.parentEmail === 'string' ? body.parentEmail.trim() : ''
  const studentName = typeof body.studentName === 'string' ? body.studentName.trim() : ''
  const studentId = typeof body.studentId === 'string' ? body.studentId.trim() : ''

  if (!parentEmail || !studentName) {
    return NextResponse.json({ error: 'parentEmail and studentName are required' }, { status: 400 })
  }
  if (!isValidEmail(parentEmail)) {
    return NextResponse.json({ error: 'Invalid parent email address' }, { status: 400 })
  }
  if (studentName.length > 100) {
    return NextResponse.json({ error: 'Student name is too long' }, { status: 400 })
  }

  // ─── 5. Ownership check ─────────────────────────────────────────────────
  // If a studentId is supplied it MUST match the authenticated user.
  // (The normal flow is that a student requests the consent email for
  // their own account; a teacher or admin provisioning accounts uses a
  // different endpoint.)
  if (studentId && studentId !== user.id) {
    return NextResponse.json(
      { error: 'You can only request parental consent for your own account.' },
      { status: 403 },
    )
  }
  const effectiveStudentId = studentId || user.id

  // ─── 6. Service config ──────────────────────────────────────────────────
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.warn('[parent-notify] RESEND_API_KEY not configured — skipping parental consent email')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
  }

  // ─── 7. Generate and store consent token ────────────────────────────────
  // Supabase's PostgREST client does NOT throw on database errors — it
  // returns `{ data, error }` from the awaited builder. Wrapping the call
  // in try/catch alone lets a real RLS / schema / network failure slip
  // through silently, leaving the parent with a link whose token has no
  // matching row in `consent_tokens` (the consent page would 404). We
  // therefore inspect `error` explicitly and refuse to send the email
  // when the token wasn't persisted.
  const consentToken = crypto.randomBytes(32).toString('hex')
  let tokenStored = false
  try {
    const admin = createServiceRoleClient()
    const { error: upsertError } = await admin.from('consent_tokens').upsert({
      token: consentToken,
      student_id: effectiveStudentId,
      parent_email: parentEmail,
      student_name: studentName,
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
    })
    if (upsertError) {
      console.error('[parent-notify] consent_tokens upsert returned error:', upsertError)
    } else {
      tokenStored = true
    }
  } catch (err) {
    console.error('[parent-notify] consent_tokens upsert threw:', err)
  }

  if (!tokenStored) {
    // Don't send a link the consent endpoint won't recognise. The student
    // can retry; the founder/operators can investigate via logs.
    return NextResponse.json(
      { error: 'Unable to start the parental consent flow right now. Please try again shortly.' },
      { status: 503 },
    )
  }

  // ─── 8. Build email (every interpolated value HTML-escaped) ─────────────
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
  const consentUrl = `${siteUrl}/consent?token=${encodeURIComponent(consentToken)}`
  const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
  const subject = 'Parental Consent Required - The English Hub'

  const safeName = escapeHtml(studentName)
  const safeConsentUrl = escapeHtml(consentUrl)

  const html = [
    `<h2>Parental Consent Required</h2>`,
    `<p>Dear Parent/Guardian,</p>`,
    `<p>Your child, <strong>${safeName}</strong>, has created an account on <strong>The English Hub</strong>, an online English learning platform.</p>`,
    `<p>As they are under 16, we require parental consent before they can fully use the platform. The English Hub collects the following data to provide our educational services:</p>`,
    `<ul>`,
    `<li>Name and email address</li>`,
    `<li>Date of birth</li>`,
    `<li>Learning progress and assessment results</li>`,
    `<li>Usage data to improve the learning experience</li>`,
    `</ul>`,
    `<p>All data is stored securely and used solely for educational purposes. We do not share personal data with third parties for marketing.</p>`,
    `<p>To review our data practices and provide your consent, please visit the link below:</p>`,
    `<p><a href="${safeConsentUrl}">Provide Parental Consent</a></p>`,
    `<p>If you did not expect this email or have any questions, please contact our support team.</p>`,
    `<br />`,
    `<p>Best regards,<br />The English Hub Team</p>`,
  ].join('\n')

  // ─── 9. Send via Resend ─────────────────────────────────────────────────
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({ from: fromAddress, to: parentEmail, subject, html }),
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error(
        `[parent-notify] Failed to send parental consent email: ${res.status} ${errorBody}`,
      )
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[parent-notify] Error sending parental consent email:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
