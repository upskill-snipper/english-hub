/**
 * Parental Consent API — GDPR-compliant consent management for students aged 14-16 (UK).
 *
 * Required database migration:
 *
 * CREATE TABLE parental_consents (
 *   id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 *   student_user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
 *   school_id     uuid NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
 *   parent_email  text NOT NULL,
 *   consent_token text NOT NULL UNIQUE,
 *   status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'denied')),
 *   consented_at  timestamptz,
 *   created_at    timestamptz NOT NULL DEFAULT now(),
 *   UNIQUE (student_user_id, school_id)
 * );
 *
 * CREATE INDEX idx_parental_consents_token ON parental_consents(consent_token);
 * CREATE INDEX idx_parental_consents_student ON parental_consents(student_user_id);
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendEmail } from '@/lib/email'
import {
  buildParentConsentEmail,
  buildParentConsentApprovedEmail,
  buildParentConsentDeniedEmail,
} from '@/lib/email-templates/parent-consent'
import crypto from 'crypto'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateConsentToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

function isUnder16(dateOfBirth: string): boolean {
  const dob = new Date(dateOfBirth)
  const today = new Date()
  let age = today.getFullYear() - dob.getFullYear()
  const monthDiff = today.getMonth() - dob.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--
  }
  return age < 16
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Partial mask of an email for log/error lines — parent_email is PII
 * (safeguarding sensitive) so we never log the full address on send failures.
 * Example: "p***@e***.com"
 */
function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!local || !domain) return '***'
  const [host, ...rest] = domain.split('.')
  const maskedLocal = local.length <= 1 ? local : `${local[0]}***`
  const maskedHost = host.length <= 1 ? host : `${host[0]}***`
  return `${maskedLocal}@${maskedHost}${rest.length ? '.' + rest.join('.') : ''}`
}

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
}

/**
 * Send the parental consent-request email. Non-fatal: a Resend/SMTP outage
 * must not break the consent flow — the DB row is the source of truth.
 * Skips silently if SMTP isn't configured.
 */
async function sendConsentRequestEmail(args: {
  parentEmail: string
  studentName: string
  schoolName: string
  token: string
}): Promise<void> {
  if (!process.env.SMTP_HOST) {
    console.warn('[consent] SMTP_HOST not configured — skipping parental consent email')
    return
  }
  try {
    const consentUrl = `${getSiteUrl()}/consent?token=${encodeURIComponent(args.token)}`
    const { subject, html } = buildParentConsentEmail({
      studentName: args.studentName,
      schoolName: args.schoolName,
      consentUrl,
    })
    const result = await sendEmail(args.parentEmail, subject, html)
    if (!result.success) {
      console.warn(
        `[consent] Failed to send consent-request email to ${maskEmail(args.parentEmail)}: ${result.error ?? 'unknown error'}`,
      )
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error'
    console.warn(
      `[consent] Error sending consent-request email to ${maskEmail(args.parentEmail)}: ${message}`,
    )
  }
}

/**
 * Send the post-decision confirmation email (approve or deny). Non-fatal.
 */
async function sendConsentDecisionEmail(args: {
  parentEmail: string
  studentName: string
  schoolName: string
  decision: 'approved' | 'denied'
}): Promise<void> {
  if (!process.env.SMTP_HOST) {
    console.warn('[consent] SMTP_HOST not configured — skipping decision email')
    return
  }
  try {
    const built =
      args.decision === 'approved'
        ? buildParentConsentApprovedEmail({
            studentName: args.studentName,
            schoolName: args.schoolName,
          })
        : buildParentConsentDeniedEmail({
            studentName: args.studentName,
            schoolName: args.schoolName,
          })
    const result = await sendEmail(args.parentEmail, built.subject, built.html)
    if (!result.success) {
      console.warn(
        `[consent] Failed to send ${args.decision} confirmation to ${maskEmail(args.parentEmail)}: ${result.error ?? 'unknown error'}`,
      )
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error'
    console.warn(
      `[consent] Error sending ${args.decision} confirmation to ${maskEmail(args.parentEmail)}: ${message}`,
    )
  }
}

// ---------------------------------------------------------------------------
// GET — Check consent status for the authenticated student
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`consent-check:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'You must be logged in.' }, { status: 401 })
    }

    const admin = createServiceRoleClient()

    // Get the student's profile to check date_of_birth
    const { data: profile } = await admin
      .from('profiles')
      .select('date_of_birth')
      .eq('id', user.id)
      .single()

    // If no DOB or not under 16, consent is not required
    if (!profile?.date_of_birth || !isUnder16(profile.date_of_birth)) {
      return NextResponse.json({
        consent_required: false,
        status: null,
      })
    }

    // Check for existing consent records for this student
    const { data: consents } = await admin
      .from('parental_consents')
      .select('id, school_id, parent_email, status, consented_at, created_at')
      .eq('student_user_id', user.id)
      .order('created_at', { ascending: false })

    return NextResponse.json({
      consent_required: true,
      consents: consents ?? [],
    })
  } catch (error) {
    console.error('Consent check error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// POST — Submit a parental consent request (student sends to parent's email)
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`consent-submit:${ip}`, { limit: 5, windowSeconds: 300 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many consent requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'You must be logged in.' }, { status: 401 })
    }

    let body: { parent_email?: string; school_id?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const parentEmail = (body.parent_email ?? '').trim().toLowerCase()
    const schoolId = (body.school_id ?? '').trim()

    if (!parentEmail || !isValidEmail(parentEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid parent/guardian email address.' },
        { status: 422 },
      )
    }

    if (!schoolId) {
      return NextResponse.json({ error: 'School ID is required.' }, { status: 422 })
    }

    // Prevent students from using their own email as parent email
    if (user.email && parentEmail === user.email.toLowerCase()) {
      return NextResponse.json(
        { error: 'The parent/guardian email must be different from your own email.' },
        { status: 422 },
      )
    }

    const admin = createServiceRoleClient()

    // Verify the student's profile and age
    const { data: profile } = await admin
      .from('profiles')
      .select('date_of_birth, full_name')
      .eq('id', user.id)
      .single()

    if (!profile?.date_of_birth || !isUnder16(profile.date_of_birth)) {
      return NextResponse.json(
        { error: 'Parental consent is not required for your age group.' },
        { status: 422 },
      )
    }

    // Verify the school exists
    const { data: school } = await admin
      .from('schools')
      .select('id, name')
      .eq('id', schoolId)
      .single()

    if (!school) {
      return NextResponse.json({ error: 'School not found.' }, { status: 404 })
    }

    // Check for existing consent record
    const { data: existing } = await admin
      .from('parental_consents')
      .select('id, status, parent_email')
      .eq('student_user_id', user.id)
      .eq('school_id', schoolId)
      .single()

    if (existing) {
      if (existing.status === 'approved') {
        return NextResponse.json(
          { error: 'Parental consent has already been granted.' },
          { status: 422 },
        )
      }

      // Update existing pending/denied record with new token and parent email
      const newToken = generateConsentToken()
      const { error: updateError } = await admin
        .from('parental_consents')
        .update({
          parent_email: parentEmail,
          consent_token: newToken,
          status: 'pending',
          consented_at: null,
        })
        .eq('id', existing.id)

      if (updateError) {
        console.error('Failed to update consent record:', updateError)
        return NextResponse.json({ error: 'Failed to send consent request.' }, { status: 500 })
      }

      // Fire the consent-request email (non-fatal — DB write is source of truth)
      await sendConsentRequestEmail({
        parentEmail,
        studentName: profile.full_name ?? 'your child',
        schoolName: school.name,
        token: newToken,
      })

      return NextResponse.json({
        success: true,
        message: 'Consent request has been re-sent to your parent/guardian.',
      })
    }

    // Create new consent record
    const consentToken = generateConsentToken()
    const { error: insertError } = await admin.from('parental_consents').insert({
      student_user_id: user.id,
      school_id: schoolId,
      parent_email: parentEmail,
      consent_token: consentToken,
      status: 'pending',
    })

    if (insertError) {
      console.error('Failed to create consent record:', insertError)
      return NextResponse.json({ error: 'Failed to send consent request.' }, { status: 500 })
    }

    // Fire the consent-request email (non-fatal — DB write is source of truth)
    await sendConsentRequestEmail({
      parentEmail,
      studentName: profile.full_name ?? 'your child',
      schoolName: school.name,
      token: consentToken,
    })

    return NextResponse.json({
      success: true,
      message: 'Consent request has been sent to your parent/guardian.',
    })
  } catch (error) {
    console.error('Consent submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// PUT — Parent confirms or denies consent via token (no auth required)
// ---------------------------------------------------------------------------

export async function PUT(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`consent-confirm:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    let body: { token?: string; action?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const token = (body.token ?? '').trim()
    const action = (body.action ?? '').trim()

    if (!token) {
      return NextResponse.json({ error: 'Consent token is required.' }, { status: 422 })
    }

    if (action !== 'approve' && action !== 'deny') {
      return NextResponse.json({ error: 'Action must be "approve" or "deny".' }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Look up the consent record by token
    const { data: consent, error: lookupError } = await admin
      .from('parental_consents')
      .select('id, status, student_user_id, school_id, parent_email')
      .eq('consent_token', token)
      .single()

    if (lookupError || !consent) {
      return NextResponse.json({ error: 'Invalid or expired consent token.' }, { status: 404 })
    }

    // Idempotency guard: a parent clicking their link twice (or a replayed
    // form submit) must NOT trigger a second decision email. Because the
    // token is nulled on the first successful update, a replay will fall
    // into these 410 branches and short-circuit before any email is sent.
    if (consent.status === 'approved') {
      return NextResponse.json({ error: 'Consent has already been granted.' }, { status: 410 })
    }

    if (consent.status === 'denied') {
      return NextResponse.json(
        { error: 'Consent has already been denied. The student can request a new consent form.' },
        { status: 410 },
      )
    }

    const newStatus: 'approved' | 'denied' = action === 'approve' ? 'approved' : 'denied'

    const { error: updateError } = await admin
      .from('parental_consents')
      .update({
        status: newStatus,
        consented_at: new Date().toISOString(),
        consent_token: null, // Invalidate token after use
      })
      .eq('id', consent.id)

    if (updateError) {
      console.error('Failed to update consent:', updateError)
      return NextResponse.json({ error: 'Failed to process consent.' }, { status: 500 })
    }

    // Fetch student + school names for the confirmation email. If either
    // lookup fails we still send with safe fallbacks — the email is
    // notification-only and must never block the happy path.
    const [{ data: studentProfile }, { data: school }] = await Promise.all([
      admin.from('profiles').select('full_name').eq('id', consent.student_user_id).single(),
      admin.from('schools').select('name').eq('id', consent.school_id).single(),
    ])

    // Fire the post-decision confirmation email (non-fatal).
    await sendConsentDecisionEmail({
      parentEmail: consent.parent_email,
      studentName: studentProfile?.full_name ?? 'your child',
      schoolName: school?.name ?? 'their school',
      decision: newStatus,
    })

    return NextResponse.json({
      success: true,
      status: newStatus,
      message:
        action === 'approve'
          ? 'Thank you. You have granted consent for your child to use The English Hub at their school.'
          : "You have denied consent. Your child's data will not be processed for school features.",
    })
  } catch (error) {
    console.error('Consent confirm error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
