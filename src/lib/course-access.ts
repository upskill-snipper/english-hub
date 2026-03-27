import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Course access verification utility.
 *
 * A user has access to a course if ANY of the following are true:
 *   1. They have an active subscription (subscription_status = 'pro')
 *   2. They have purchased the specific course (enrolment record exists)
 *   3. The content is a free preview module (caller must check this separately)
 *
 * This module is intended for server-side use in API routes and server
 * components. For client-side checks, see the `checkAccess` logic in the
 * learn page client components (which should mirror this logic).
 */

export interface CourseAccessResult {
  hasAccess: boolean
  reason: 'pro_subscription' | 'course_enrolment' | 'no_access'
  subscriptionStatus: string | null
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
  courseId: string
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

  // 2. Check for a one-time purchase enrolment
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
 * Check whether a user has an active subscription (pro status).
 *
 * Use this for features that are subscription-gated but not tied to a
 * specific course (e.g., AI essay feedback, premium tools).
 *
 * @param supabase  - An authenticated Supabase client
 * @param userId    - The user's ID
 * @returns         - Whether the user has an active subscription
 */
export async function hasActiveSubscription(
  supabase: SupabaseClient,
  userId: string
): Promise<boolean> {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('subscription_status')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('[course-access] Failed to check subscription:', error)
    return false
  }

  return profile?.subscription_status === 'pro'
}
