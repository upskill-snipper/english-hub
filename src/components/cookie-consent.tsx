'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { initGA4 } from '@/lib/gtag'

type ConsentValue = 'all' | 'essential' | null

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('cookie-consent') === 'all'
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay so the slide-up animation is visible
      const timer = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  // Allow re-opening the banner via a custom event (UK PECR requirement)
  useEffect(() => {
    function handleOpenConsent() {
      const currentConsent = localStorage.getItem('cookie-consent')
      setAnalyticsEnabled(currentConsent === 'all')
      setShowPreferences(false)
      setVisible(true)
    }
    window.addEventListener('open-cookie-consent', handleOpenConsent)
    return () => window.removeEventListener('open-cookie-consent', handleOpenConsent)
  }, [])

  function saveConsent(value: ConsentValue) {
    if (!value) return
    localStorage.setItem('cookie-consent', value)
    setVisible(false)

    if (value === 'all') {
      // Use the canonical initGA4() from src/lib/gtag.ts so we get the
      // privacy-respecting config (anonymize_ip + SameSite=None;Secure
      // cookie flags). The earlier local enableGA4() helper is a duplicate
      // that competed with this and produced inconsistent state on
      // first-consent flows. Removed in favour of the single source of
      // truth.
      initGA4()
    }

    // Notify any consent-gated components in the tree (e.g. analytics scripts)
    // that consent has changed so they can mount/unmount immediately rather
    // than waiting for a page reload.
    window.dispatchEvent(new CustomEvent('cookie-consent-changed'))

    // Log consent choice server-side for PECR/ICO compliance (fire-and-forget)
    logConsentToServer(value)
  }

  function logConsentToServer(value: ConsentValue) {
    if (!value) return
    const choice = value === 'all' ? 'accept_all' : value === 'essential' ? 'reject_all' : 'custom'

    // Reuse or create a stable visitor ID for anonymous users
    let visitorId = localStorage.getItem('cookie-visitor-id')
    if (!visitorId) {
      visitorId = crypto.randomUUID()
      localStorage.setItem('cookie-visitor-id', visitorId)
    }

    fetch('/api/consent/cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        choice,
        analytics: value === 'all',
        marketing: false,
        visitorId,
      }),
    }).catch(() => {
      // Best-effort — consent is also stored client-side as the primary record
    })
  }

  // Note: the previous local `enableGA4()` helper was removed in favour
  // of the canonical `initGA4()` from src/lib/gtag.ts (imported at the
  // top of this file). Single init path = no race conditions, no
  // double-config, and the privacy-respecting flags (anonymize_ip,
  // SameSite=None;Secure) consistently apply on first consent.

  function handleSavePreferences() {
    if (analyticsEnabled) {
      saveConsent('all')
    } else {
      // Custom selection with analytics disabled — still log as "custom"
      localStorage.setItem('cookie-consent', 'essential')
      setVisible(false)
      window.dispatchEvent(new CustomEvent('cookie-consent-changed'))
      logConsentToServerCustom(analyticsEnabled)
    }
  }

  function handleDismiss() {
    // ePrivacy: user must be able to close the banner without consenting.
    // Treat dismissal as refusal of all non-essential cookies (no consent
    // recorded as "all"); we persist 'essential' so the banner does not
    // re-appear on every page-load and we log the choice for audit trail.
    localStorage.setItem('cookie-consent', 'essential')
    setVisible(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-changed'))
    logConsentToServer('essential')
  }

  function logConsentToServerCustom(analytics: boolean) {
    let visitorId = localStorage.getItem('cookie-visitor-id')
    if (!visitorId) {
      visitorId = crypto.randomUUID()
      localStorage.setItem('cookie-visitor-id', visitorId)
    }

    fetch('/api/consent/cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        choice: 'custom',
        analytics,
        marketing: false,
        visitorId,
      }),
    }).catch(() => {})
  }

  // Focus trap: keep Tab within the consent dialog while visible
  const dialogRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!visible || !dialogRef.current) return
    const dialog = dialogRef.current
    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    // Auto-focus the first button
    const firstBtn = dialog.querySelector<HTMLElement>('button')
    firstBtn?.focus()
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [visible, showPreferences])

  if (!visible) return null

  return (
    <div
      ref={dialogRef}
      className="fixed bottom-0 inset-x-0 z-[100] animate-slide-up"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl p-4">
        <div className="relative rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-2xl p-6">
          {/* Dismiss (close) — ePrivacy: user must be able to close without consenting */}
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Close cookie banner without accepting non-essential cookies"
            className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {!showPreferences ? (
            /* ── Main banner ────────────────────────────── */
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1 space-y-1 pr-6">
                <p className="text-sm font-medium text-foreground">Cookie settings</p>
                <p className="text-xs text-muted-foreground">
                  We use essential cookies to make the site work. With your consent we also use
                  analytics cookies to understand how the site is used. You can accept, reject, or
                  manage your preferences. Read our{' '}
                  <Link
                    href="/cookie-policy"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={() => saveConsent('essential')}
                  className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => saveConsent('all')}
                  className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            /* ── Preferences panel ─────────────────────── */
            <div className="space-y-4">
              <div className="space-y-1 pr-6">
                <p className="text-sm font-medium text-foreground">Cookie Preferences</p>
                <p className="text-xs text-muted-foreground">
                  Choose which cookies you allow. All non-essential cookies are off by default.{' '}
                  <Link
                    href="/cookie-policy"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>

              {/* Essential */}
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Essential Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Required for the site to function. Cannot be disabled.
                  </p>
                </div>
                <span className="text-xs text-muted-foreground italic">Always on</span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Analytics Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Help us understand how visitors interact with the site.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  aria-label="Toggle analytics cookies"
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    analyticsEnabled ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-foreground shadow-sm transition-transform ${
                      analyticsEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => saveConsent('essential')}
                  className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => saveConsent('all')}
                  className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
