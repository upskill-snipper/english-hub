/**
 * Google Analytics 4 — server-side Measurement Protocol relay.
 *
 * Why server-side instead of gtag.js?
 *   - uBlock Origin, Brave Shields, AdGuard, Privacy Badger and most
 *     mainstream content blockers block requests to googletagmanager.com
 *     and google-analytics.com out of the box. That's roughly 30–40 %
 *     of UK web traffic — silent data loss.
 *   - PostHog's eu.i.posthog.com is NOT on those blocklists, which is
 *     why PostHog kept receiving data while GA4 stayed empty even with
 *     correct env vars + CSP + consent flow.
 *   - Server-side Measurement Protocol POSTs from our origin to
 *     /g/collect bypass every browser-side blocker. Same endpoint
 *     gtag.js uses, just from the server.
 *
 * The flow
 *   1. User accepts cookies → consent mirrored to a first-party cookie
 *      `eh-cookie-consent=all` so the server can verify consent
 *      without trusting the request body.
 *   2. Client posts {event_name, params} to /api/ga4/track.
 *   3. Route handler reads the consent cookie, generates/reuses a
 *      stable cid (`eh_ga_cid` cookie), POSTs to GA4 /g/collect.
 *   4. Returns 204 to the client.
 *
 * Privacy
 *   - No event fires unless `cookie-consent === 'all'`.
 *   - cid is a random ID stored in our own first-party cookie. No PII.
 *   - We never forward the visitor's IP to GA4 (`_uip` omitted), so
 *     GA4 truncates server-relayed events the same way it would if
 *     anonymize_ip was set.
 *   - Revoking consent (essential-only) clears `eh-cookie-consent`,
 *     stopping all server-side firing on the next route change.
 */

/** The GA4 Measurement ID, baked in at build time from NEXT_PUBLIC_GA4_ID. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || ''

/** Whether GA4 is configured (env var set). */
export const isGAEnabled = (): boolean => Boolean(GA_MEASUREMENT_ID)

/**
 * Mirror localStorage `cookie-consent` into a first-party cookie so
 * /api/ga4/track can verify consent server-side. Idempotent.
 *
 * The public name `initGA4` is kept for backwards compat with the
 * existing call-site in cookie-consent.tsx — the previous gtag.js
 * script-injection has been removed; all tracking now goes through
 * the server-side relay.
 */
export function initGA4(): void {
  if (typeof window === 'undefined') return

  let consent: string | null = null
  try {
    consent = localStorage.getItem('cookie-consent')
  } catch {
    // localStorage blocked (private browsing in some browsers / sandboxed iframes)
    return
  }

  if (consent === 'all') {
    // 1-year first-party cookie — matches gtag.js _ga lifetime.
    document.cookie = `eh-cookie-consent=all; Max-Age=${60 * 60 * 24 * 365}; Path=/; SameSite=Lax`
  } else {
    // Revoked or essential-only — clear so server stops relaying events.
    document.cookie = 'eh-cookie-consent=; Max-Age=0; Path=/; SameSite=Lax'
  }
}

/**
 * POST to /api/ga4/track. Server checks consent, fires the GA4 event
 * via Measurement Protocol. Fire-and-forget — analytics must never
 * break the user experience.
 */
function postTrack(payload: { event_name: string; params?: Record<string, unknown> }): void {
  if (typeof window === 'undefined') return
  if (!GA_MEASUREMENT_ID) return

  const body = JSON.stringify(payload)

  // Prefer sendBeacon for navigation-triggered events — it survives
  // page unload (which `fetch` doesn't reliably). Fall back to fetch
  // with `keepalive` for browsers without Beacon support.
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' })
      const sent = navigator.sendBeacon('/api/ga4/track', blob)
      if (sent) return
    }
  } catch {
    // fall through to fetch
  }

  try {
    void fetch('/api/ga4/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
      credentials: 'same-origin',
    }).catch(() => {})
  } catch {
    // Silent
  }
}

/** Track a custom event (sign_up, login, purchase, etc.). */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  postTrack({ event_name: action, params: params ?? {} })
}

/**
 * Track a page view. Called automatically on every Next.js route
 * change by <GoogleAnalytics />.
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === 'undefined') return
  postTrack({
    event_name: 'page_view',
    params: {
      page_path: url,
      page_location: `${window.location.origin}${url}`,
      page_title: title ?? document.title,
      page_referrer: document.referrer,
    },
  })
}

/** Convenience wrappers for the events we actually care about. */
export const events = {
  signUp: (method: string) => trackEvent('sign_up', { method }),
  login: (method: string) => trackEvent('login', { method }),
  boardSelected: (board: string) => trackEvent('board_selected', { board }),
  textViewed: (textName: string) => trackEvent('text_viewed', { text_name: textName }),
  quizStarted: (textName: string) => trackEvent('quiz_started', { text_name: textName }),
  quizCompleted: (textName: string, score: number, total: number) =>
    trackEvent('quiz_completed', { text_name: textName, score, total }),
  documentDownloaded: (type: string, format: string) =>
    trackEvent('document_downloaded', { document_type: type, format }),
  essaySubmitted: (textName: string) => trackEvent('essay_submitted', { text_name: textName }),
  subscriptionStarted: (plan: string) => trackEvent('subscription_started', { plan }),
}
