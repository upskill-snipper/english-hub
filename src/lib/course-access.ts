import type { SupabaseClient } from '@supabase/supabase-js'
import { getPupilSchoolAccess, type PupilSchoolAccess } from '@/lib/school-entitlement'

/**
 * Course access verification utility.
 *
 * A user has access to a course if ANY of the following are true:
 *   1. They have an active subscription (subscription_status = 'pro')
 *   2. They are a pupil of a school whose access is live (12 October 2026)
 *   3. They have purchased the specific course (enrolment record exists)
 *   4. The content is a free preview module (caller must check this separately)
 *
 * This module is intended for server-side use in API routes and server
 * components. Client components ask GET /api/user/access, which answers
 * from resolvePaidAccess below, rather than reading the profile themselves.
 */

export interface CourseAccessResult {
  hasAccess: boolean
  reason: 'pro_subscription' | 'school_access' | 'course_enrolment' | 'no_access'
  subscriptionStatus: string | null
}

// ─── The paid-access choke point ────────────────────────────────────────────
//
// A DEFECT, FIXED 12 OCTOBER 2026. Every GCSE AI route asked one question,
// `profiles.subscription_status === 'pro'`, and nothing else. So being added
// to a school gave a pupil no AI access that lasted: the school paths wrote
// 'pro' onto the pupil's profile to get past this test, the trial-expiry cron
// wiped it after seven days, and an uploaded pupil had only the 40-call
// no-card trial. Calum decided that a school pupil's access comes from the
// school's live pilot, checked at the moment of use, with nothing written to
// the profile. `subscription_status` is one field per PERSON (CLAUDE.md,
// structural fact 2), and a school's access is a fact about the school.
//
// So this is the one place that answers "may this person use a paid
// feature?", and it has two sources: the person's own subscription or trial,
// and their school. Each is judged on its own evidence. A failed profile read
// grants nothing, and does not stop a school that is independently confirmed
// live; a failed school read grants nothing either (getPupilSchoolAccess
// fails closed). The school is only asked when the profile does not already
// answer yes, so a paying subscriber costs no extra query.
//
// IELTS is NOT covered: a school's pilot is for GCSE, and hasIeltsAccess
// below keeps its own entitlement.

/** Why this person may use paid features, or that they may not. */
export type PaidAccess =
  | { allowed: true; via: 'subscription' }
  | { allowed: true; via: 'school'; school: PupilSchoolAccess }
  | { allowed: false; via: null }

/**
 * Resolve whether a user may use paid (non-IELTS) features, and through
 * which source.
 *
 * @param supabase - An authenticated Supabase client (server or service role)
 * @param userId   - The Supabase auth uuid
 */
export async function resolvePaidAccess(
  supabase: SupabaseClient,
  userId: string,
): Promise<PaidAccess> {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('subscription_status')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('[course-access] Failed to check subscription:', error)
  } else if (profile?.subscription_status === 'pro') {
    return { allowed: true, via: 'subscription' }
  }

  const school = await getPupilSchoolAccess(userId)
  if (school) return { allowed: true, via: 'school', school }

  return { allowed: false, via: null }
}

/**
 * Check whether a user has access to a specific course.
 *
 * @param supabase  - An authenticated Supabase client (server or service role)
 * @param userId    - The user's ID
 * @param courseId  - The course to check access for
 * @returns         - Access result with reason
 */
export async function checkCourseAccess(
  supabase: SupabaseClient,
  userId: string,
  courseId: string,
): Promise<CourseAccessResult> {
  // 1. Check subscription status on the user's profile
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('subscription_status')
    .eq('id', userId)
    .single()

  if (profileError) {
    console.error('[course-access] Failed to fetch profile:', profileError)
    return { hasAccess: false, reason: 'no_access', subscriptionStatus: null }
  }

  const subscriptionStatus = profile?.subscription_status ?? 'free'

  if (subscriptionStatus === 'pro') {
    return { hasAccess: true, reason: 'pro_subscription', subscriptionStatus }
  }

  // 2. A pupil of a live school: the same answer resolvePaidAccess gives.
  if (await getPupilSchoolAccess(userId)) {
    return { hasAccess: true, reason: 'school_access', subscriptionStatus }
  }

  // 3. Check for a one-time purchase enrolment
  const { data: enrolment, error: enrolError } = await supabase
    .from('enrolments')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .maybeSingle()

  if (enrolError) {
    console.error('[course-access] Failed to check enrolment:', enrolError)
    return { hasAccess: false, reason: 'no_access', subscriptionStatus }
  }

  if (enrolment) {
    return { hasAccess: true, reason: 'course_enrolment', subscriptionStatus }
  }

  return { hasAccess: false, reason: 'no_access', subscriptionStatus }
}

/**
 * Whether a user may use paid features: their own subscription or trial
 * ('pro'), or a school whose access is live. The name predates the school
 * source and is kept because every paywalled route calls it; see
 * resolvePaidAccess for the rule and why it has two sources.
 *
 * Use this for features that are subscription-gated but not tied to a
 * specific course (e.g., AI essay feedback, premium tools).
 *
 * @param supabase  - An authenticated Supabase client
 * @param userId    - The Supabase auth uuid
 * @returns         - Whether the user may use paid features
 */
export async function hasActiveSubscription(
  supabase: SupabaseClient,
  userId: string,
): Promise<boolean> {
  return (await resolvePaidAccess(supabase, userId)).allowed
}

/**
 * Whether the user may use premium IELTS features (AI Writing/Speaking band
 * feedback). IELTS is a SEPARATE paid entitlement from the global 'pro' flag, so
 * it has its own column `profiles.ielts_status` ('free' | 'active').
 *
 * Access is granted when EITHER:
 *   • `ielts_status === 'active'` — a dedicated IELTS subscription (the new SKU), OR
 *   • `subscription_status === 'pro'` — the legacy all-access plan, which is
 *     grandfathered into IELTS so no existing subscriber loses a feature.
 *
 * A NEW IELTS-only subscriber gets `ielts_status='active'` WITHOUT
 * `subscription_status='pro'`, so they get IELTS but not GCSE marking — that
 * separation is the whole point of the distinct entitlement.
 *
 * @param supabase - An authenticated Supabase client
 * @param userId   - The user's ID
 * @returns        - Whether the user has IELTS premium access
 */
export async function hasIeltsAccess(supabase: SupabaseClient, userId: string): Promise<boolean> {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('subscription_status, ielts_status')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('[course-access] Failed to check IELTS access:', error)
    return false
  }

  const p = profile as { subscription_status?: string; ielts_status?: string } | null
  return p?.ielts_status === 'active' || p?.subscription_status === 'pro'
}
