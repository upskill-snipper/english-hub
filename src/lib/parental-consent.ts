/**
 * Self-serve parental (guardian) consent - the 13-15 direct-signup path.
 *
 * WHY THIS MODULE EXISTS
 * ----------------------
 * The guardian consent loop for students who sign up on their own (rather
 * than through a school) was broken in two places at once:
 *
 *   1. The register page fired POST /api/auth/parent-notify immediately
 *      after supabase.auth.signUp(). With email confirmation ON there is no
 *      session at that moment, so the route answered 401 and the guardian
 *      email was never sent.
 *   2. parent-notify stored its token in `consent_tokens`, while the
 *      parent-facing /consent page resolves tokens through
 *      /api/school/consent/details, which reads
 *      `parental_consents.consent_token`. Even when an email did go out,
 *      the link always rendered "invalid or expired".
 *
 * TOKEN-STORE DECISION (read this before changing it)
 * ---------------------------------------------------
 * Everything now writes `parental_consents`, and `consent_tokens` is no
 * longer written by application code. The deciding factor is the gate:
 * `checkParentalConsent()` in src/lib/consent-check.ts unblocks a minor
 * only on a linked parent or an APPROVED `parental_consents` row. Had we
 * kept the tokens in `consent_tokens`, approval would have had to write a
 * second `parental_consents` row anyway to satisfy that gate - two stores,
 * two chances to drift, and a consent audit trail split across both. One
 * table also means one answer when a guardian, the ICO or a school asks
 * "what consent do you hold for this child, and when was it given".
 * `school_id` is nullable (migration 20260823_self_serve_parental_consent)
 * and NULL means "direct signup, no school involved".
 *
 * SPAM CONTROL
 * ------------
 * A guardian's inbox is an address the student types in, so the send path
 * is throttled three ways: Upstash rate limits per account, per guardian
 * address and per IP, plus a durable per-row cooldown and lifetime cap in
 * the database (`last_sent_at`, `send_count`). The database backstop
 * matters because rateLimit() silently degrades to a per-instance
 * in-memory map when Redis is not configured, which on serverless is no
 * limit at all.
 */

import crypto from 'crypto'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ─── Policy constants ───────────────────────────────────────────────────

/** Guardian consent is mandatory below this age (UK: under-16s). */
export const GUARDIAN_CONSENT_MANDATORY_UNDER = 16

/**
 * The AI gate (checkParentalConsent) blocks every account flagged as a
 * minor, which is under-18 at signup. Anyone that gate blocks must have a
 * way to unblock themselves, so a request can be raised for any minor -
 * not only the under-16s for whom it is a legal requirement.
 */
export const GUARDIAN_CONSENT_GATE_UNDER = 18

/** How long an emailed consent link stays usable. */
export const GUARDIAN_CONSENT_LINK_TTL_DAYS = 7

/** Minimum gap between two sends the student asks for by hand. */
const MANUAL_RESEND_COOLDOWN_MS = 15 * 60 * 1000

/** Minimum gap between two sends the system triggers on the student's behalf. */
const AUTOMATIC_RESEND_COOLDOWN_MS = 24 * 60 * 60 * 1000

/** Floor applied when the student corrects the guardian address. */
const ADDRESS_CHANGE_COOLDOWN_MS = 60 * 1000

/** Hard lifetime cap on emails to a guardian for one student. */
const MAX_SENDS_PER_STUDENT = 10

// ─── Types ──────────────────────────────────────────────────────────────

export type GuardianConsentStatus = 'none' | 'pending' | 'approved' | 'denied'

export interface GuardianConsentState {
  /** True when this account is a minor and therefore needs guardian consent. */
  consentRequired: boolean
  /** True when the account is under 16, where consent is a legal requirement. */
  consentMandatory: boolean
  status: GuardianConsentStatus
  /** Masked for display - the raw address is never returned to the browser. */
  guardianEmailMasked: string | null
  /** True when we hold a guardian address we could send to. */
  hasGuardianEmail: boolean
  lastSentAt: string | null
  expiresAt: string | null
  /** True when the approved consent came from a school rather than the student. */
  approvedViaSchool: boolean
  studentName: string | null
}

export type GuardianConsentSendSkipReason =
  | 'not_required'
  | 'already_approved'
  | 'no_guardian_email'
  | 'invalid_guardian_email'
  | 'same_as_student_email'
  | 'throttled'
  | 'send_cap_reached'
  | 'profile_unavailable'
  | 'store_failed'
  | 'email_not_configured'
  | 'email_failed'

export type GuardianConsentSendResult =
  | { sent: true; guardianEmailMasked: string; expiresAt: string }
  | {
      sent: false
      reason: GuardianConsentSendSkipReason
      guardianEmailMasked?: string
      lastSentAt?: string | null
      retryAfterSeconds?: number
    }

export type GuardianConsentTrigger = 'ai_gate' | 'manual_resend' | 'signup'

interface SendArgs {
  /** Supabase auth user id of the student (this is also profiles.id). */
  studentUserId: string
  /** Optional new guardian address supplied by the student; falls back to the profile. */
  guardianEmail?: string | null
  trigger: GuardianConsentTrigger
  /** Client IP, when the send is driven by a request. */
  ip?: string
}

// ─── Small helpers ──────────────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  if (email.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Partial mask for display and logs. A guardian address attached to a
 * child's account is safeguarding-sensitive, so it never leaves the server
 * in full and never reaches a log line intact.
 */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!local || !domain) return '***'
  const [host, ...rest] = domain.split('.')
  const maskedLocal = local.length <= 1 ? local : `${local[0]}***`
  const maskedHost = host.length <= 1 ? host : `${host[0]}***`
  return `${maskedLocal}@${maskedHost}${rest.length ? '.' + rest.join('.') : ''}`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function calculateAge(dateOfBirth: string | null | undefined): number | null {
  if (!dateOfBirth) return null
  const dob = new Date(dateOfBirth)
  if (Number.isNaN(dob.getTime())) return null
  const today = new Date()
  let age = today.getUTCFullYear() - dob.getUTCFullYear()
  const monthDiff = today.getUTCMonth() - dob.getUTCMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getUTCDate() < dob.getUTCDate())) {
    age--
  }
  return age
}

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
}

interface StudentProfile {
  id: string
  full_name: string | null
  email: string | null
  date_of_birth: string | null
  is_minor: boolean | null
  parent_guardian_email: string | null
}

async function loadStudentProfile(
  admin: ReturnType<typeof createServiceRoleClient>,
  studentUserId: string,
): Promise<StudentProfile | null> {
  const { data, error } = await admin
    .from('profiles')
    .select('id, full_name, email, date_of_birth, is_minor, parent_guardian_email')
    .eq('id', studentUserId)
    .maybeSingle()
  if (error || !data) return null
  return data as StudentProfile
}

/**
 * A minor is anyone the AI gate blocks. We prefer the date of birth (it
 * is the fact) and fall back to the `is_minor` flag written at signup.
 */
function requiresGuardianConsent(profile: StudentProfile): {
  required: boolean
  mandatory: boolean
} {
  const age = calculateAge(profile.date_of_birth)
  if (age === null) {
    return { required: profile.is_minor === true, mandatory: profile.is_minor === true }
  }
  return {
    required: age < GUARDIAN_CONSENT_GATE_UNDER,
    mandatory: age < GUARDIAN_CONSENT_MANDATORY_UNDER,
  }
}

// ─── Read: current consent state for a signed-in student ────────────────

/**
 * Returns what we actually hold for this student. Every field is read from
 * the database - nothing here is inferred or defaulted to make the UI look
 * healthier than it is, because an empty state on a consent screen has to
 * be believable to a parent.
 */
export async function getGuardianConsentState(
  studentUserId: string,
): Promise<GuardianConsentState> {
  const empty: GuardianConsentState = {
    consentRequired: false,
    consentMandatory: false,
    status: 'none',
    guardianEmailMasked: null,
    hasGuardianEmail: false,
    lastSentAt: null,
    expiresAt: null,
    approvedViaSchool: false,
    studentName: null,
  }

  const admin = createServiceRoleClient()
  const profile = await loadStudentProfile(admin, studentUserId)
  if (!profile) return empty

  const { required, mandatory } = requiresGuardianConsent(profile)
  const guardianEmail = profile.parent_guardian_email?.trim() || null

  // Every consent row for this student, school and self-serve alike. An
  // approved school row satisfies the same gate, so the student must not
  // be nagged to chase a second approval they do not need.
  const { data: rows } = await admin
    .from('parental_consents')
    .select('status, school_id, parent_email, last_sent_at, expires_at, consented_at, created_at')
    .eq('student_user_id', studentUserId)
    .order('created_at', { ascending: false })

  const consents = (rows ?? []) as Array<{
    status: string
    school_id: string | null
    parent_email: string | null
    last_sent_at: string | null
    expires_at: string | null
  }>

  const approved = consents.find((c) => c.status === 'approved')
  const selfServe = consents.find((c) => c.school_id === null)
  const pending = consents.find((c) => c.status === 'pending')
  const denied = consents.find((c) => c.status === 'denied')

  const status: GuardianConsentStatus = approved
    ? 'approved'
    : pending
      ? 'pending'
      : denied
        ? 'denied'
        : 'none'

  const displayEmail = selfServe?.parent_email ?? approved?.parent_email ?? guardianEmail

  return {
    consentRequired: required,
    consentMandatory: mandatory,
    status,
    guardianEmailMasked: displayEmail ? maskEmail(displayEmail) : null,
    hasGuardianEmail: Boolean(guardianEmail || selfServe?.parent_email),
    lastSentAt: selfServe?.last_sent_at ?? null,
    expiresAt: selfServe?.expires_at ?? null,
    approvedViaSchool: Boolean(approved && approved.school_id !== null),
    studentName: profile.full_name,
  }
}

// ─── Email body ─────────────────────────────────────────────────────────

/**
 * `mandatory` distinguishes the two populations this email actually reaches.
 *
 * DEFECT THIS FIXES (QA, 2026-08-23): the body asserted "Because they are
 * under 16" unconditionally, but a request is raised for ANY minor the AI gate
 * blocks - GUARDIAN_CONSENT_GATE_UNDER is 18, not 16. A 16 or 17 year old's
 * guardian was therefore emailed a false statement about their child's age, in
 * the one message where we ask them to make a data-protection decision. The
 * reason sentence is now chosen from the age we actually hold.
 */
function buildSelfServeConsentEmail(args: {
  studentName: string
  consentUrl: string
  mandatory: boolean
}): {
  subject: string
  html: string
  text: string
} {
  const safeName = escapeHtml(args.studentName)
  const safeUrl = escapeHtml(args.consentUrl)

  const reason = args.mandatory
    ? 'Because they are under 16, we need your consent before they can use our AI marking and feedback features.'
    : 'Because they are under 18, we ask for your consent before they can use our AI marking and feedback features.'

  const subject = 'Your consent is needed for your child on The English Hub'

  // Deliberately claims nothing we cannot evidence: it states what the
  // student did, what we process, how long the link lasts, and what
  // happens if the guardian does nothing.
  const html = [
    `<h2>A consent request from The English Hub</h2>`,
    `<p>Dear parent or guardian,</p>`,
    `<p><strong>${safeName}</strong> has created an account on The English Hub, an online English revision and marking service for GCSE, IGCSE and IELTS students, and has given us this address as their parent or guardian.</p>`,
    `<p>${reason} To provide the service we process:</p>`,
    `<ul>`,
    `<li>their name, email address and date of birth</li>`,
    `<li>the work they submit for marking and the feedback we return</li>`,
    `<li>their progress through the revision material</li>`,
    `</ul>`,
    `<p>We do not sell personal data, and we do not use children's data for marketing.</p>`,
    `<p>You can review the full details and give or refuse consent here:</p>`,
    `<p><a href="${safeUrl}">Review this consent request</a></p>`,
    `<p>This link works for ${GUARDIAN_CONSENT_LINK_TTL_DAYS} days. If you do nothing, the AI marking features stay switched off for their account.</p>`,
    `<p>If you were not expecting this, or you do not know this student, please contact us at support@theenglishhub.app and we will look into it.</p>`,
    `<p>The English Hub<br />A trading name of Upskill Energy Limited</p>`,
  ].join('\n')

  const text = [
    'A consent request from The English Hub',
    '',
    `${args.studentName} has created an account on The English Hub, an online English revision and marking service for GCSE, IGCSE and IELTS students, and has given us this address as their parent or guardian.`,
    '',
    `${reason} To provide the service we process their name, email address and date of birth, the work they submit for marking and the feedback we return, and their progress through the revision material.`,
    '',
    'We do not sell personal data, and we do not use children’s data for marketing.',
    '',
    'Review the full details and give or refuse consent here:',
    args.consentUrl,
    '',
    `This link works for ${GUARDIAN_CONSENT_LINK_TTL_DAYS} days. If you do nothing, the AI marking features stay switched off for their account.`,
    '',
    'If you were not expecting this, or you do not know this student, please contact us at support@theenglishhub.app and we will look into it.',
    '',
    'The English Hub, a trading name of Upskill Energy Limited',
  ].join('\n')

  return { subject, html, text }
}

/**
 * Sends through whichever provider is configured. Resend first because
 * that is what this route has always used; SMTP is the fallback so a
 * deployment that only has SMTP credentials still reaches the guardian.
 *
 * Exported so the consent-decision confirmation (PUT /api/school/consent)
 * reaches the guardian through the same provider that sent them the
 * request - a guardian who received the request via Resend should not have
 * the confirmation silently dropped because only SMTP was wired up there.
 */
export async function deliverGuardianEmail(
  to: string,
  subject: string,
  html: string,
  text: string,
): Promise<boolean> {
  if (process.env.RESEND_API_KEY) {
    const { sendViaResend } = await import('@/lib/email/resend')
    const result = await sendViaResend({ to, subject, html, text })
    if (result.sent) return true
    console.error('[parental-consent] Resend send failed:', result.reason, result.detail ?? '')
  }

  if (process.env.SMTP_HOST) {
    const { sendEmail } = await import('@/lib/email')
    const result = await sendEmail(to, subject, html, text)
    if (result.success) return true
    console.error('[parental-consent] SMTP send failed:', result.error ?? 'unknown error')
  }

  return false
}

// ─── Write: raise (or re-raise) a guardian consent request ──────────────

/**
 * Creates or refreshes the student's self-serve `parental_consents` row and
 * emails the guardian a link to it.
 *
 * Never throws: callers sit on a request path (the AI gate, a resend
 * button) where a mail or database problem must not turn into a 500. The
 * outcome is always a discriminated result the caller can report honestly.
 */
export async function sendGuardianConsentRequest(
  args: SendArgs,
): Promise<GuardianConsentSendResult> {
  try {
    const admin = createServiceRoleClient()
    const profile = await loadStudentProfile(admin, args.studentUserId)
    if (!profile) return { sent: false, reason: 'profile_unavailable' }

    // `mandatory` is carried through to the email body: a request is raised for
    // any minor under 18, so the message must not tell every guardian their
    // child is under 16.
    const { required, mandatory } = requiresGuardianConsent(profile)
    if (!required) return { sent: false, reason: 'not_required' }

    // ── Which address ───────────────────────────────────────────────────
    const supplied = args.guardianEmail?.trim().toLowerCase() || ''
    const stored = profile.parent_guardian_email?.trim().toLowerCase() || ''
    const guardianEmail = supplied || stored
    if (!guardianEmail) return { sent: false, reason: 'no_guardian_email' }
    if (!isValidEmail(guardianEmail)) return { sent: false, reason: 'invalid_guardian_email' }

    // A student must not be able to approve their own consent by pointing
    // the request at their own inbox.
    if (profile.email && guardianEmail === profile.email.trim().toLowerCase()) {
      return { sent: false, reason: 'same_as_student_email' }
    }

    const masked = maskEmail(guardianEmail)

    // ── Existing state ──────────────────────────────────────────────────
    const { data: allRows } = await admin
      .from('parental_consents')
      .select('id, status, school_id, parent_email, last_sent_at, send_count')
      .eq('student_user_id', args.studentUserId)

    const rows = (allRows ?? []) as Array<{
      id: string
      status: string
      school_id: string | null
      parent_email: string | null
      last_sent_at: string | null
      send_count: number | null
    }>

    if (rows.some((r) => r.status === 'approved')) {
      return { sent: false, reason: 'already_approved', guardianEmailMasked: masked }
    }

    const existing = rows.find((r) => r.school_id === null) ?? null

    // ── Durable throttle (works with or without Redis) ──────────────────
    const sendCount = existing?.send_count ?? 0
    if (sendCount >= MAX_SENDS_PER_STUDENT) {
      return {
        sent: false,
        reason: 'send_cap_reached',
        guardianEmailMasked: masked,
        lastSentAt: existing?.last_sent_at ?? null,
      }
    }

    // A corrected address must not be held behind the full cooldown - a
    // student who mistyped their guardian's email would be stuck for 15
    // minutes. It still gets a short floor so the "change the address"
    // control cannot be driven in a loop to mail a list of strangers, and
    // MAX_SENDS_PER_STUDENT caps the total regardless of how many
    // addresses are tried.
    const addressChanged = Boolean(
      existing?.parent_email && existing.parent_email.toLowerCase() !== guardianEmail,
    )
    const cooldownMs = addressChanged
      ? ADDRESS_CHANGE_COOLDOWN_MS
      : args.trigger === 'manual_resend'
        ? MANUAL_RESEND_COOLDOWN_MS
        : AUTOMATIC_RESEND_COOLDOWN_MS
    if (existing?.last_sent_at) {
      const elapsed = Date.now() - new Date(existing.last_sent_at).getTime()
      if (elapsed >= 0 && elapsed < cooldownMs) {
        return {
          sent: false,
          reason: 'throttled',
          guardianEmailMasked: masked,
          lastSentAt: existing.last_sent_at,
          retryAfterSeconds: Math.ceil((cooldownMs - elapsed) / 1000),
        }
      }
    }

    // ── Upstash limits: per account, per guardian address, per IP ───────
    const accountRl = await rateLimit(`guardian-consent:${args.studentUserId}`, {
      limit: 5,
      windowSeconds: 24 * 60 * 60,
    })
    if (!accountRl.success) {
      return { sent: false, reason: 'throttled', guardianEmailMasked: masked }
    }

    // Keyed on a hash so the guardian's address is not written into Redis.
    const addressKey = crypto.createHash('sha256').update(guardianEmail).digest('hex').slice(0, 32)
    const addressRl = await rateLimit(`guardian-consent-to:${addressKey}`, {
      limit: 5,
      windowSeconds: 24 * 60 * 60,
    })
    if (!addressRl.success) {
      return { sent: false, reason: 'throttled', guardianEmailMasked: masked }
    }

    if (args.ip) {
      const ipRl = await rateLimit(`guardian-consent-ip:${args.ip}`, {
        limit: 10,
        windowSeconds: 60 * 60,
      })
      if (!ipRl.success) {
        return { sent: false, reason: 'throttled', guardianEmailMasked: masked }
      }
    }

    // ── Persist the token BEFORE sending ────────────────────────────────
    // PostgREST returns { data, error } rather than throwing, so the error
    // is inspected explicitly. Sending a link whose token was never stored
    // is exactly the failure this whole module exists to remove.
    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(
      Date.now() + GUARDIAN_CONSENT_LINK_TTL_DAYS * 24 * 60 * 60 * 1000,
    ).toISOString()

    let consentRowId = existing?.id ?? null
    if (existing) {
      const { error } = await admin
        .from('parental_consents')
        .update({
          parent_email: guardianEmail,
          consent_token: token,
          status: 'pending',
          consented_at: null,
          expires_at: expiresAt,
        })
        .eq('id', existing.id)
      if (error) {
        console.error('[parental-consent] consent row update failed:', error)
        return { sent: false, reason: 'store_failed', guardianEmailMasked: masked }
      }
    } else {
      const { data: inserted, error } = await admin
        .from('parental_consents')
        .insert({
          student_user_id: args.studentUserId,
          // NULL school: this is a direct signup, no school is party to it.
          school_id: null,
          parent_email: guardianEmail,
          consent_token: token,
          status: 'pending',
          expires_at: expiresAt,
        })
        .select('id')
        .single()
      if (error || !inserted) {
        console.error('[parental-consent] consent row insert failed:', error)
        return { sent: false, reason: 'store_failed', guardianEmailMasked: masked }
      }
      consentRowId = (inserted as { id: string }).id
    }

    // ── Send ────────────────────────────────────────────────────────────
    const consentUrl = `${getSiteUrl()}/consent?token=${encodeURIComponent(token)}`
    const { subject, html, text } = buildSelfServeConsentEmail({
      studentName: profile.full_name?.trim() || 'Your child',
      consentUrl,
      mandatory,
    })

    if (!process.env.RESEND_API_KEY && !process.env.SMTP_HOST) {
      console.warn(
        '[parental-consent] no email provider configured - guardian consent email not sent',
      )
      return { sent: false, reason: 'email_not_configured', guardianEmailMasked: masked }
    }

    const delivered = await deliverGuardianEmail(guardianEmail, subject, html, text)
    if (!delivered) {
      return { sent: false, reason: 'email_failed', guardianEmailMasked: masked }
    }

    // When the student corrected the address, keep the profile in step so
    // any later automatic send goes to the address that actually worked.
    if (supplied && supplied !== stored) {
      const { error: profileError } = await admin
        .from('profiles')
        .update({ parent_guardian_email: guardianEmail })
        .eq('id', args.studentUserId)
      if (profileError) {
        console.warn('[parental-consent] failed to update profile guardian email:', profileError)
      }
    }

    // Throttle counters are bumped only after a confirmed send, so a
    // provider outage does not lock the student out of retrying.
    if (consentRowId) {
      const { error: stampError } = await admin
        .from('parental_consents')
        .update({ last_sent_at: new Date().toISOString(), send_count: sendCount + 1 })
        .eq('id', consentRowId)
      if (stampError) {
        // Non-fatal: the email is already with the guardian. Worst case the
        // student can resend sooner than the cooldown intends.
        console.warn('[parental-consent] failed to stamp send counters:', stampError)
      }
    }

    return { sent: true, guardianEmailMasked: masked, expiresAt }
  } catch (err) {
    console.error('[parental-consent] unexpected failure raising consent request:', err)
    return { sent: false, reason: 'store_failed' }
  }
}
