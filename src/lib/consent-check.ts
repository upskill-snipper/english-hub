import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { hasConsent, CONSENT_TYPES } from '@/lib/consent'
import {
  resolveAgeBand,
  requiresGuardianConsent,
  tryPrismaUserId,
  type AgeBand,
} from '@/lib/identity'

// ─── Types ──────────────────────────────────────────────────────────────

export interface ConsentCheckResult {
  allowed: boolean
  reason?: string
}

// ─── Identity resolution ────────────────────────────────────────────────

/**
 * The one thing this gate still needs off the Prisma row: whether a parent
 * is linked. Identity resolution itself belongs to src/lib/identity, which
 * projects the account if it has no row yet, so a Supabase-native learner is
 * no longer answered "User not found." and refused on that basis.
 *
 * Returns null when the account cannot be resolved or is not ACTIVE. Null
 * means "no linked parent", which is the fail-closed reading.
 */
async function linkedParentId(supabaseUserId: string): Promise<string | null> {
  const prismaUserId = await tryPrismaUserId(supabaseUserId)
  if (!prismaUserId) return null

  try {
    const row = await prisma.user.findUnique({
      where: { id: prismaUserId },
      select: { parentId: true, accountStatus: true },
    })
    if (!row || row.accountStatus !== 'ACTIVE') return null
    return row.parentId
  } catch {
    return null
  }
}

/**
 * The one query the AI gate actually turns on: an approved row in
 * `parental_consents` for this student. Keyed on the SUPABASE uuid because
 * `parental_consents.student_user_id` references `profiles(id)` - do not
 * "helpfully" swap in the Prisma id here. Covers both sources of consent:
 * a school-requested row (school_id set) and a self-serve row raised by
 * /api/auth/parent-notify (school_id NULL).
 */
async function hasApprovedParentalConsent(supabaseUserId: string): Promise<boolean> {
  try {
    const admin = createServiceRoleClient()
    const { data: approvedConsent } = await admin
      .from('parental_consents')
      .select('id')
      .eq('student_user_id', supabaseUserId)
      .eq('status', 'approved')
      .limit(1)
      .single()

    return Boolean(approvedConsent)
  } catch {
    // A failed read is not an approval.
    return false
  }
}

// ─── Refusal messages ───────────────────────────────────────────────────
//
// Every message below has to name a control the learner can actually reach.
// The previous AI-processing refusal said "update your consent preferences in
// settings", and no such control existed anywhere in the product: the consent
// page could only withdraw, and the ledger could not hold the row in any
// case. A refusal that names nothing real is a dead end, not a gate.

const PARENTAL_CONSENT_REQUIRED =
  'Parental consent is required before you can use this feature. Please ask your parent or guardian to complete the consent process.'

const AI_PROCESSING_REQUIRED =
  'You have not given consent for AI processing yet. Open Manage Your Consents at /dashboard/consent, choose "Give consent" for AI processing, then try again.'

/**
 * Sentinel reason for "we do not hold a date of birth". It is matched on in
 * checkMinorAIConsent (an unknown age must not trigger a guardian email - we
 * do not know there is a guardian to email), so it has to be one constant
 * rather than a repeated literal.
 */
export const DATE_OF_BIRTH_REQUIRED =
  'We do not hold your date of birth, so we cannot tell whether this account needs a parent or guardian’s permission. Add it on your dashboard at /dashboard and we will tell you what, if anything, is still needed.'

// ─── checkParentalConsent ───────────────────────────────────────────────

/**
 * Checks whether this account has the parental consent it needs.
 *
 * The age question is answered by resolveAgeBand (src/lib/identity/age.ts),
 * NOT by `User.isMinor`. The old short-circuit here was
 * `if (!user.isMinor) return { allowed: true }`, and `isMinor` is a boolean
 * that three code paths write with three different meanings and that the
 * 2026-04-20 backfill set to `false` from an invented date of birth. Any
 * `false` in it was therefore capable of meaning "we never asked", and this
 * gate read it as "adult".
 *
 * Bands and their consequences:
 *   SIXTEEN_OR_OVER     consents for themselves (UK GDPR digital consent age
 *                       is 13; our published policy requires guardian consent
 *                       for 13-15 and the signup form only collects a
 *                       guardian email for that band)
 *   UNDER_16            guardian consent required
 *   UNDER_18_IMPRECISE  a child, precision unknown - fail closed, guardian
 *                       consent required
 *   UNKNOWN             no date of birth held. NOT an adult: blocked, with
 *                       the message that asks for the date.
 *
 * Takes the Supabase auth user id.
 */
export async function checkParentalConsent(supabaseUserId: string): Promise<ConsentCheckResult> {
  const band: AgeBand = await resolveAgeBand(supabaseUserId)

  if (band === 'UNKNOWN') {
    return { allowed: false, reason: DATE_OF_BIRTH_REQUIRED }
  }

  if (!requiresGuardianConsent(band)) {
    return { allowed: true }
  }

  // Check 1: a linked parent via the parent-linking system.
  if (await linkedParentId(supabaseUserId)) {
    return { allowed: true }
  }

  // Check 2: an approved parental consent record (school or self-serve).
  if (await hasApprovedParentalConsent(supabaseUserId)) {
    return { allowed: true }
  }

  return { allowed: false, reason: PARENTAL_CONSENT_REQUIRED }
}

// ─── Guardian consent request (side effect of a blocked minor) ──────────

/**
 * Raises the guardian consent request for a student the parental gate has
 * just blocked, and returns the sentence to append to the refusal.
 *
 * It has to happen server-side rather than at signup: the register page
 * fires before Supabase has issued a session, so its call was answered 401
 * and no guardian was ever emailed. An AI route is the first server-side
 * moment in the blocked student's journey where a verified session exists.
 * The helper is throttled per account, per guardian address and per IP, and
 * is a no-op when a request was already sent recently, so repeated marking
 * attempts cannot be turned into a mail flood.
 *
 * Never throws: an email or database problem must not turn a 403 into a 500.
 */
async function raiseGuardianConsentRequest(supabaseUserId: string): Promise<string> {
  try {
    const { sendGuardianConsentRequest, getGuardianConsentState } =
      await import('@/lib/parental-consent')
    const result = await sendGuardianConsentRequest({
      studentUserId: supabaseUserId,
      trigger: 'ai_gate',
    })

    if (result.sent) {
      return ` We have emailed your parent or guardian at ${result.guardianEmailMasked} to ask for their approval. Once they approve it, try again.`
    }
    if (result.reason === 'no_guardian_email') {
      return " Add your parent or guardian's email address at /consent/status and we will send them the request."
    }
    if (result.reason === 'throttled' || result.reason === 'send_cap_reached') {
      // Only claim a previous send when the record shows one.
      const state = await getGuardianConsentState(supabaseUserId)
      return state.lastSentAt
        ? ` We have already sent a request to ${state.guardianEmailMasked ?? 'your parent or guardian'}. You can check its status at /consent/status.`
        : ' You can check the status of your request at /consent/status.'
    }
    return ' You can send or resend the request at /consent/status.'
  } catch (err) {
    console.error('[consent-check] failed to raise guardian consent request:', err)
    return ''
  }
}

// ─── checkMinorAIConsent ────────────────────────────────────────────────

/**
 * Combined check for accessing AI-powered features. Verifies both:
 *   1. the account has whatever parental consent its age band requires, and
 *   2. the account has AI_PROCESSING consent (required for everyone).
 *
 * Returns { allowed: true } if all checks pass, or { allowed: false, reason }
 * with a user-facing message if any check fails. Every failure message names
 * a control that exists.
 */
export async function checkMinorAIConsent(supabaseUserId: string): Promise<ConsentCheckResult> {
  // ORDER IS LOAD-BEARING (changed 2026-08-23).
  //
  // DEFECT this fixes: the guardian consent request is raised from this
  // function, but the raise used to sit *after* an early return on the
  // AI_PROCESSING ledger check - a ledger that could hold no row at all for
  // a Supabase-native account. So for exactly the population the self-serve
  // guardian loop was built for, a 13-15 year-old who signed up directly,
  // this function answered "consent to AI processing" and returned before
  // any guardian was emailed. The durable trigger fired for nobody.
  //
  // Parental consent is also the only leg with an off-platform dependency
  // (a guardian's inbox and a 7-day link), so it must start at the student's
  // first blocked attempt rather than after they have cleared a separate,
  // self-service consent.
  const parental = await checkParentalConsent(supabaseUserId)

  if (!parental.allowed) {
    // An unknown age must not raise a guardian request: we do not know the
    // account belongs to a child, and we have no guardian address for it.
    // Return the honest ask instead, which is self-service.
    if (parental.reason === DATE_OF_BIRTH_REQUIRED) return parental

    const followUp = await raiseGuardianConsentRequest(supabaseUserId)
    return {
      allowed: false,
      reason: `${parental.reason ?? PARENTAL_CONSENT_REQUIRED}${followUp}`,
    }
  }

  // AI processing consent (applies to everyone).
  //
  // hasConsent resolves the Supabase uuid to the Prisma id through
  // src/lib/identity, so the ledger this reads is the same one
  // /api/consent writes. The old compensating second lookup by
  // supabaseUserId has been removed: identity resolution lives in exactly
  // one module now, and src/__tests__/identity-guard.test.ts fails the suite
  // if a second copy appears here or anywhere else.
  const hasAIConsent = await hasConsent(supabaseUserId, CONSENT_TYPES.AI_PROCESSING)

  if (!hasAIConsent) {
    return { allowed: false, reason: AI_PROCESSING_REQUIRED }
  }

  return { allowed: true }
}
