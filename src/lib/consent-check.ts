import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { hasConsent, CONSENT_TYPES } from '@/lib/consent'

// ─── Types ──────────────────────────────────────────────────────────────

export interface ConsentCheckResult {
  allowed: boolean
  reason?: string
}

interface ResolvedUser {
  /** Prisma User.id (a cuid / synthetic id, NOT the Supabase auth uuid). */
  id: string | null
  isMinor: boolean
  parentId: string | null
}

// ─── Identity resolution ────────────────────────────────────────────────

/**
 * Callers pass the Supabase auth uuid (that is what `supabase.auth.getUser()`
 * returns and what every AI route hands us). The Prisma `User` row keys on
 * its own id and carries the Supabase uuid in `supabaseUserId`, so looking
 * the user up by `id` alone matched nothing for anyone who signed up through
 * Supabase Auth: `checkParentalConsent` answered "User not found." and the
 * approved `parental_consents` row below was never even consulted. That
 * meant a guardian could approve consent and the student would still be
 * blocked. We now try the correct column first and keep the legacy `id`
 * lookup as a fallback for seeded/synthetic rows (e.g. the App Review
 * account, whose id is 'usr_apple_reviewer').
 *
 * `findFirst` rather than `findUnique` for the uuid lookup: `supabaseUserId`
 * is a NULLABLE unique column, and findUnique throws when handed a null or
 * undefined value for one.
 */
async function resolvePrismaUser(supabaseUserId: string): Promise<ResolvedUser | null> {
  const select = { id: true, isMinor: true, parentId: true } as const

  try {
    const byUuid = await prisma.user.findFirst({
      where: { supabaseUserId, accountStatus: 'ACTIVE' },
      select,
    })
    if (byUuid) return byUuid
  } catch {
    // Fall through to the legacy lookup below.
  }

  const byId = await prisma.user.findUnique({
    where: { id: supabaseUserId, accountStatus: 'ACTIVE' },
    select,
  })
  return byId ?? null
}

/**
 * Fallback minor check for accounts that have no Prisma projection row.
 * The Prisma row is written by /api/auth/register, which needs a session -
 * with Supabase email confirmation ON there is none at signup, so a large
 * share of real accounts exist only in Supabase. `profiles` is written
 * during signup regardless, so it is the honest source for "is this a
 * minor" when the projection is missing. Returns null when we genuinely
 * cannot tell, so the caller can fail closed rather than guess.
 */
async function isMinorFromProfile(supabaseUserId: string): Promise<boolean | null> {
  const age = await ageFromProfile(supabaseUserId)
  if (age === null) return null
  return age.requiresParentalConsent
}

/**
 * The age signal the consent gate needs.
 *
 * DEFECT this fixes (2026-08-23): the gate required parental consent from
 * every `isMinor` account, and `isMinor` means UNDER 18. But the signup form
 * only collects a guardian email for 13-15 year-olds, and our published
 * privacy policy states plainly that "users aged 13-15 require" parental
 * consent. So 16 and 17 year-olds were blocked from AI marking with no way
 * to resolve it: we never asked for a guardian address, so the guardian
 * request could not even be raised. Under UK GDPR the digital consent age is
 * 13, so a 16-17 year-old consents for themselves.
 *
 * `requiresParentalConsent` is therefore UNDER 16 - matching the policy, the
 * signup form and the law. Under-18 status is still what drives the
 * Children's Code design protections (high-privacy defaults, analytics
 * suppression); that is a separate concern and is unchanged.
 *
 * Returns null when we genuinely cannot tell, so callers fail closed.
 */
async function ageFromProfile(
  supabaseUserId: string,
): Promise<{ requiresParentalConsent: boolean } | null> {
  try {
    const admin = createServiceRoleClient()
    const { data } = await admin
      .from('profiles')
      .select('date_of_birth, is_minor')
      .eq('id', supabaseUserId)
      .maybeSingle()

    if (!data) return null

    const profile = data as { date_of_birth: string | null; is_minor: boolean | null }
    if (profile.date_of_birth) {
      const dob = new Date(profile.date_of_birth)
      if (!Number.isNaN(dob.getTime())) {
        const today = new Date()
        let age = today.getUTCFullYear() - dob.getUTCFullYear()
        const monthDiff = today.getUTCMonth() - dob.getUTCMonth()
        if (monthDiff < 0 || (monthDiff === 0 && today.getUTCDate() < dob.getUTCDate())) {
          age--
        }
        return { requiresParentalConsent: age < 16 }
      }
    }
    // No usable date of birth. `is_minor` only tells us under-18, which is
    // too coarse to decide 16-17. Fail closed (treat as needing consent)
    // rather than opening the AI gate on a guess.
    if (typeof profile.is_minor === 'boolean') {
      return { requiresParentalConsent: profile.is_minor }
    }
    return null
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
  const admin = createServiceRoleClient()
  const { data: approvedConsent } = await admin
    .from('parental_consents')
    .select('id')
    .eq('student_user_id', supabaseUserId)
    .eq('status', 'approved')
    .limit(1)
    .single()

  return Boolean(approvedConsent)
}

const PARENTAL_CONSENT_REQUIRED =
  'Parental consent is required before you can use this feature. Please ask your parent or guardian to complete the consent process.'

const AI_PROCESSING_REQUIRED =
  'You must consent to AI processing before using this feature. Please update your consent preferences in settings.'

/**
 * Sentinel reason for "we could not identify this account at all". It is
 * matched on in checkMinorAIConsent, so it has to be one constant rather
 * than a repeated literal.
 */
const USER_NOT_FOUND = 'User not found.'

// ─── checkParentalConsent ───────────────────────────────────────────────

/**
 * Checks whether a minor user has the required parental consent to access
 * a feature. A minor is considered to have parental consent if:
 *
 * 1. They have a linked parent (via parentId in the User model), OR
 * 2. They have an approved record in the parental_consents table
 *    (written by either the school consent flow or the self-serve
 *    guardian flow).
 *
 * Non-minor users always pass this check.
 *
 * Takes the Supabase auth user id.
 */
export async function checkParentalConsent(supabaseUserId: string): Promise<ConsentCheckResult> {
  const user = await resolvePrismaUser(supabaseUserId)

  if (!user) {
    // No projection row. Decide from the Supabase profile rather than
    // hard-failing every Supabase-native account with "User not found."
    const minor = await isMinorFromProfile(supabaseUserId)
    if (minor === null) {
      return { allowed: false, reason: USER_NOT_FOUND }
    }
    if (!minor) {
      return { allowed: true }
    }
    if (await hasApprovedParentalConsent(supabaseUserId)) {
      return { allowed: true }
    }
    return { allowed: false, reason: PARENTAL_CONSENT_REQUIRED }
  }

  // Users who do not require parental consent pass straight through.
  //
  // `user.isMinor` is UNDER 18, but only UNDER 16 requires parental consent
  // (published policy: "users aged 13-15 require" it; the signup form only
  // collects a guardian email for that band). Prefer the profile's date of
  // birth, which can distinguish 16-17 from 13-15; fall back to isMinor when
  // there is no usable date, which fails closed.
  if (!user.isMinor) {
    return { allowed: true }
  }
  const age = await ageFromProfile(supabaseUserId)
  if (age && !age.requiresParentalConsent) {
    return { allowed: true }
  }

  // Check 1: User has a linked parent via the parent-linking system
  if (user.parentId) {
    return { allowed: true }
  }

  // Check 2: An approved parental consent record (school or self-serve)
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
 * Combined check for minor users accessing AI-powered features.
 * Verifies both:
 * 1. If the user is a minor, they have parental consent
 * 2. The user has AI_PROCESSING consent (required for all users)
 *
 * Returns { allowed: true } if all checks pass, or { allowed: false, reason }
 * with a user-facing message if any check fails.
 */
export async function checkMinorAIConsent(supabaseUserId: string): Promise<ConsentCheckResult> {
  // ORDER IS LOAD-BEARING (changed 2026-08-23).
  //
  // DEFECT this fixes: the guardian consent request is raised from this
  // function, but the raise used to sit *after* an early return on the
  // AI_PROCESSING ledger check. That ledger cannot hold a row for a
  // Supabase-native account (see the note further down), so for exactly
  // the population the self-serve guardian loop was built for - a 13-15
  // year-old who signed up directly - this function answered "consent to
  // AI processing" and returned before any guardian was emailed. The
  // durable trigger fired for nobody.
  //
  // Parental consent is also the only leg with an off-platform dependency
  // (a guardian's inbox and a 7-day link), so it must start at the
  // student's first blocked attempt rather than after they have cleared a
  // separate, self-service consent.
  const parental = await checkParentalConsent(supabaseUserId)

  // "User not found." means we could not identify the account at all, so we
  // cannot know whether it belongs to a minor. Do not raise a guardian
  // request on a guess, and do not let that message displace the
  // AI-processing one that this branch has always returned.
  const identityUnknown = !parental.allowed && parental.reason === USER_NOT_FOUND

  if (!parental.allowed && !identityUnknown) {
    const followUp = await raiseGuardianConsentRequest(supabaseUserId)
    return {
      allowed: false,
      reason: `${parental.reason ?? PARENTAL_CONSENT_REQUIRED}${followUp}`,
    }
  }

  // AI processing consent (applies to all users).
  //
  // KNOWN CROSS-FILE DEFECT (not fixable from this file): the Prisma
  // `Consent.userId` column references `User.id`, but every writer
  // (/api/consent, src/lib/consent.ts) passes the Supabase auth uuid, so
  // consent rows for Supabase-native accounts cannot be written or read
  // under that id. We look the ledger up under the Supabase id first
  // (existing behaviour) and, failing that, under the resolved Prisma id
  // so seeded/legacy rows are honoured. Making the ledger actually
  // writable needs the same id resolution in src/lib/consent.ts and
  // /api/consent - owned elsewhere, flagged to the lead.
  let hasAIConsent = await hasConsent(supabaseUserId, CONSENT_TYPES.AI_PROCESSING)

  if (!hasAIConsent) {
    try {
      const resolved = await prisma.user.findFirst({
        where: { supabaseUserId, accountStatus: 'ACTIVE' },
        select: { id: true },
      })
      if (resolved?.id && resolved.id !== supabaseUserId) {
        hasAIConsent = await hasConsent(resolved.id, CONSENT_TYPES.AI_PROCESSING)
      }
    } catch {
      // Leave hasAIConsent false - fail closed on the consent ledger.
    }
  }

  if (!hasAIConsent) {
    return { allowed: false, reason: AI_PROCESSING_REQUIRED }
  }

  // Only reachable when the account could not be identified at all: fail
  // closed with the honest reason rather than letting it through.
  if (!parental.allowed) return parental

  return { allowed: true }
}
