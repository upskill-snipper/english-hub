/**
 * PostHog EU client wrapper.
 *
 * Initialised lazily on the client only. All capture calls are gated by
 * `canCaptureAnalytics()` so we never send events for:
 *   1. Visitors who haven't accepted analytics cookies (PECR reg. 6).
 *   2. Users flagged as minors (ICO Children's Code standard 15 - no
 *      behavioural profiling of under-16s by default).
 *
 * Key events tracked (product funnel):
 *   - home_viewed
 *   - pricing_viewed
 *   - signup_started (email entered)
 *   - signup_completed (verified)
 *   - first_essay_submitted
 *   - subscription_started (trial started)
 *   - subscription_paid_converted (first successful payment)
 *
 * Environment:
 *   NEXT_PUBLIC_POSTHOG_KEY   - project API key (phc_…)
 *   NEXT_PUBLIC_POSTHOG_HOST  - defaults to https://eu.i.posthog.com
 */

import posthog from 'posthog-js'

let initialised = false

function hasAnalyticsCookieConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return window.localStorage.getItem('cookie-consent') === 'all'
  } catch {
    return false
  }
}

/**
 * True when we must NOT capture analytics for age reasons.
 *
 * THE DEFECT THIS FIXES (19 September 2026)
 *
 * This used to answer the question "is the flag literally set to 'true'",
 * which quietly turned "we do not know how old this person is" into "adult".
 * `profiles.is_minor` is NOT NULL DEFAULT false, and on 19 September
 * production held 209 profiles of which 209 had a NULL date_of_birth and
 * is_minor false. So on a product whose users are children, EVERY signed-in
 * account was treated as an adult by this gate, and any of them who accepted
 * analytics cookies was captured and identified.
 *
 * It now recognises three states. 'unknown' counts as not-capturable, which is
 * the only defensible default under the Children's Code: an unverified age is
 * not an adult age.
 *
 * The catch also returned false - fail OPEN - while the server-side branch
 * directly above returned true. So a private window, where localStorage
 * throws, tracked a child. Both now fail closed.
 */
function isMinorFlagged(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const v = window.localStorage.getItem('eh-is-minor')
    // Absent means a logged-out visitor, who has no profile and no age on
    // record; the cookie-consent gate below is what governs them.
    if (v === null) return false
    return v !== 'adult'
  } catch {
    return true
  }
}

/**
 * Single source of truth for "should we send any PostHog event right now".
 * Wrap every capture behind this. Returns false for minors or
 * non-consented visitors.
 */
export function canCaptureAnalytics(): boolean {
  if (typeof window === 'undefined') return false
  if (isMinorFlagged()) return false
  if (!hasAnalyticsCookieConsent()) return false
  return true
}

export function initPostHog(): void {
  if (initialised) return
  if (typeof window === 'undefined') return

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return // No-op in envs without a key (local dev, preview).

  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'

  posthog.init(key, {
    api_host: host,
    // EU region data residency - do not fall back to the US cluster.
    ui_host: 'https://eu.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false, // Handled manually in PostHogProvider on route change.
    capture_pageleave: true,
    autocapture: false, // We only want intentional, named events.
    disable_session_recording: true,
    // Default to OFF - every capture goes through canCaptureAnalytics().
    // This also covers any accidental posthog.capture() call that bypasses
    // the helper: if the user hasn't consented or is a minor, nothing ships.
    opt_out_capturing_by_default: true,
    persistence: 'localStorage+cookie',
    loaded: (ph) => {
      if (canCaptureAnalytics()) {
        ph.opt_in_capturing()
      } else {
        ph.opt_out_capturing()
      }
    },
  })

  initialised = true
}

/**
 * Re-evaluate consent + minor state and flip PostHog opt-in accordingly.
 * Called by PostHogProvider on the `cookie-consent-changed` event.
 */
export function refreshOptInState(): void {
  if (!initialised) return
  if (canCaptureAnalytics()) {
    posthog.opt_in_capturing()
  } else {
    posthog.opt_out_capturing()
  }
}

export type CaptureProps = Record<string, string | number | boolean | null | undefined>

/**
 * Fire a product-analytics event. No-op unless the user has affirmatively
 * consented AND is not flagged as a minor. This is the ONLY function that
 * should call posthog.capture() directly.
 */
export function capture(event: string, props?: CaptureProps): void {
  if (!canCaptureAnalytics()) return
  if (!initialised) return
  posthog.capture(event, props)
}

export function identify(userId: string, props?: CaptureProps): void {
  if (!canCaptureAnalytics()) return
  if (!initialised) return
  posthog.identify(userId, props)
}

export function reset(): void {
  if (!initialised) return
  posthog.reset()
}

/**
 * Called from auth/session boot when a User row is hydrated. Drives the
 * minor check used by canCaptureAnalytics(). Pass isMinor=true for any
 * account flagged as under 16.
 */
/**
 * What we know about this account's age.
 *
 *   'minor'   - confirmed under 18. Never captured.
 *   'unknown' - signed in, but no date of birth on record. Never captured:
 *               an unverified age is not an adult age.
 *   'adult'   - confirmed 18 or over. Capturable, subject to cookie consent.
 *
 * Was a boolean, where `false` meant both "confirmed adult" and "we have no
 * idea" - see isMinorFlagged above for what that cost.
 */
export type AgeAssurance = 'minor' | 'unknown' | 'adult'

export function setAgeAssurance(state: AgeAssurance): void {
  if (typeof window === 'undefined') return
  try {
    if (state === 'adult') {
      // Written, not removed. An absent key means "logged out"; a signed-in
      // adult is a different thing and must survive a shared-device sign-out
      // being distinguishable from it.
      window.localStorage.setItem('eh-is-minor', 'adult')
    } else {
      window.localStorage.setItem('eh-is-minor', state === 'minor' ? 'true' : 'unknown')
    }
  } catch {
    // no-op: isMinorFlagged fails closed if storage is unavailable.
  }
  refreshOptInState()
}

/** Clear the flag entirely, for sign-out. */
export function clearAgeAssurance(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem('eh-is-minor')
  } catch {
    // no-op
  }
  refreshOptInState()
}

// Named funnel events - import these instead of using raw strings so
// typos become compile errors.
export const EVENTS = {
  HOME_VIEWED: 'home_viewed',
  PRICING_VIEWED: 'pricing_viewed',
  SIGNUP_STARTED: 'signup_started',
  SIGNUP_COMPLETED: 'signup_completed',
  FIRST_ESSAY_SUBMITTED: 'first_essay_submitted',
  SUBSCRIPTION_STARTED: 'subscription_started',
  SUBSCRIPTION_PAID_CONVERTED: 'subscription_paid_converted',
} as const
