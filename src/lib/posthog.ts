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

// NO top-level `import posthog from 'posthog-js'`.
//
// THE DEFECT (19 September 2026, PERF-7 phase B). This module was imported by
// PostHogProvider, which the root layout renders, so ~185 KB of posthog-js was
// downloaded, parsed and initialised in every visitor's browser on first paint
// - before they had been asked whether they consent to analytics, and whether
// or not they ever accepted.
//
// `opt_out_capturing_by_default: true` meant no EVENTS were sent pre-consent,
// which is what made this look acceptable. But `persistence:
// 'localStorage+cookie'` means `posthog.init()` itself writes a `distinct_id`
// cookie the moment it runs. Setting a non-essential identifying cookie before
// consent is a PECR reg. 6 problem regardless of what is later done with it.
// So deferring the load is not only 185 KB - it closes that gap.
//
// The import is now dynamic and gated on `canCaptureAnalytics()`, so the SDK is
// fetched at the moment a visitor accepts analytics cookies and never for
// anyone who does not.
type PostHogClient = typeof import('posthog-js').default

/** Null until a consenting visitor has actually caused the SDK to load. */
let ph: PostHogClient | null = null

/** In-flight load, so concurrent callers share one import. */
let loading: Promise<void> | null = null

/**
 * Events fired in the same tick as consent, before the chunk resolves.
 *
 * Without this queue the `pricing_viewed` and `signup_started` events that fire
 * immediately after the Accept-all click are silently dropped - which are
 * exactly the events the funnel exists to measure. Bounded so a
 * never-consenting visitor cannot grow it without limit.
 */
const pending: { event: string; props?: CaptureProps }[] = []
const PENDING_MAX = 20

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

/**
 * Load and initialise PostHog - but only for a visitor who has affirmatively
 * consented and is not flagged as a minor.
 *
 * The consent check happens BEFORE the dynamic import, so a non-consenting
 * visitor never downloads the SDK and never gets its cookie. Safe to call
 * repeatedly: concurrent callers share one in-flight load.
 */
export async function initPostHog(): Promise<void> {
  if (ph) return
  if (loading) return loading
  if (typeof window === 'undefined') return

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return // No-op in envs without a key (local dev, preview).

  // The gate that makes this a consent-gated load rather than merely a lazy one.
  if (!canCaptureAnalytics()) return

  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com'

  loading = (async () => {
    const client = (await import('posthog-js')).default

    client.init(key, {
      api_host: host,
      // EU region data residency - do not fall back to the US cluster.
      ui_host: 'https://eu.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // Handled manually in PostHogProvider on route change.
      capture_pageleave: true,
      autocapture: false, // We only want intentional, named events.
      disable_session_recording: true,
      // Still default-off, belt and braces: the load is already gated, but an
      // accidental capture() that bypasses the helper must fail closed.
      opt_out_capturing_by_default: true,
      persistence: 'localStorage+cookie',
      loaded: (loadedClient) => {
        if (canCaptureAnalytics()) {
          loadedClient.opt_in_capturing()
        } else {
          loadedClient.opt_out_capturing()
        }
      },
    })

    ph = client
    flushPending()
  })()

  try {
    await loading
  } finally {
    loading = null
  }
}

/**
 * Send anything queued while the SDK was loading.
 *
 * Consent is re-checked PER EVENT at flush time, not only when the event was
 * queued. `setAgeAssurance()` is called from session boot, so a signed-in
 * child's minor flag can land in the ~200ms between an event being queued and
 * the chunk resolving. That window is the only way this deferred load could
 * ship a child's event, and re-checking here closes it.
 */
function flushPending(): void {
  const queued = pending.splice(0, pending.length)
  if (!ph) return
  for (const item of queued) {
    if (!canCaptureAnalytics()) return
    ph.capture(item.event, item.props)
  }
}

/**
 * Re-evaluate consent + minor state and flip PostHog opt-in accordingly.
 * Called by PostHogProvider on the `cookie-consent-changed` event.
 */
export function refreshOptInState(): void {
  // Not loaded yet. If consent has just been given, THIS is what starts the
  // download - PostHogProvider calls us on `cookie-consent-changed` and on
  // window focus. Without it a consenting visitor would be measured only from
  // their next page load.
  if (!ph) {
    if (canCaptureAnalytics()) void initPostHog()
    return
  }
  if (canCaptureAnalytics()) {
    ph.opt_in_capturing()
  } else {
    ph.opt_out_capturing()
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
  if (!ph) {
    // Consent passes but the chunk has not arrived. Queue rather than drop:
    // the funnel events fire in the same tick as the Accept-all click.
    if (pending.length < PENDING_MAX) pending.push({ event, props })
    void initPostHog()
    return
  }
  ph.capture(event, props)
}

export function identify(userId: string, props?: CaptureProps): void {
  if (!canCaptureAnalytics()) return
  if (!ph) {
    void initPostHog()
    return
  }
  ph.identify(userId, props)
}

export function reset(): void {
  // Nothing loaded means nothing to reset - and must NOT trigger a load.
  if (!ph) {
    pending.length = 0
    return
  }
  ph.reset()
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
