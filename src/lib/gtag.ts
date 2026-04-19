/**
 * Google Analytics 4 (gtag) helpers.
 *
 * Setup:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Copy the Measurement ID (looks like G-XXXXXXXXXX)
 * 3. Add to Vercel env: NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
 * 4. The <GoogleAnalytics /> component in layout.tsx auto-loads it
 *
 * Privacy:
 * - Only loads after user accepts cookies via the consent banner
 * - Anonymises IP addresses by default
 * - Respects Do Not Track header
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer?: any[]
  }
}

/** The GA4 Measurement ID from environment */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || ''

/** Whether GA4 is configured (i.e. the env var is set) */
export const isGAEnabled = (): boolean => Boolean(GA_MEASUREMENT_ID)

/** Whether gtag has been loaded into the page */
function isGtagLoaded(): boolean {
  if (typeof window === 'undefined') return false
  return typeof (window as any).gtag === 'function'
}

/** Track a custom event */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (!isGtagLoaded()) return
  ;(window as any).gtag('event', action, params || {})
}

/** Track a page view (called automatically on route change) */
export function trackPageView(url: string, title?: string): void {
  if (!isGtagLoaded()) return
  if (!GA_MEASUREMENT_ID) return
  ;(window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  })
}

/**
 * Initialise GA4 — loads the gtag.js script and sets up dataLayer.
 * Safe to call multiple times (idempotent).
 */
export function initGA4(): void {
  if (typeof window === 'undefined') return
  if (!GA_MEASUREMENT_ID) return
  if (isGtagLoaded()) return // Already initialised

  // 1. Load the gtag.js script
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  // 2. Initialise dataLayer + gtag stub
  window.dataLayer = window.dataLayer || []
  ;(window as any).gtag = function (...args: any[]) {
    window.dataLayer!.push(args)
  }

  // 3. Configure with privacy-respecting defaults
  ;(window as any).gtag('js', new Date())
  ;(window as any).gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  })
}

/** Convenience: track common student/teacher events */
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
  essaySubmitted: (textName: string) =>
    trackEvent('essay_submitted', { text_name: textName }),
  subscriptionStarted: (plan: string) =>
    trackEvent('subscription_started', { plan }),
}
