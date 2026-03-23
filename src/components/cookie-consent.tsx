'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentValue = 'all' | 'essential' | null

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('cookie-consent') === 'all'
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay so the slide-up animation is visible
      const timer = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  function saveConsent(value: ConsentValue) {
    if (!value) return
    localStorage.setItem('cookie-consent', value)
    setVisible(false)

    if (value === 'all') {
      enableGA4()
    }
  }

  function enableGA4() {
    const gaId = process.env.NEXT_PUBLIC_GA4_ID
    if (!gaId) return

    // Load gtag.js dynamically
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
      }
    window.gtag('js', new Date())
    window.gtag('config', gaId)
  }

  function handleSavePreferences() {
    saveConsent(analyticsEnabled ? 'all' : 'essential')
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100] animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl p-4">
        <div className="rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-2xl p-6">
          {!showPreferences ? (
            /* ── Main banner ────────────────────────────── */
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground">
                  We use cookies to improve your experience
                </p>
                <p className="text-xs text-muted-foreground">
                  We use essential cookies to make the site work, and analytics
                  cookies to help us understand how you use it.{' '}
                  <Link
                    href="/cookie-policy"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={() => saveConsent('essential')}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  Essential Only
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
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Cookie Preferences
                </p>
                <p className="text-xs text-muted-foreground">
                  Choose which cookies you allow.{' '}
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
                  <p className="text-sm font-medium text-foreground">
                    Essential Cookies
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Required for the site to function. Cannot be disabled.
                  </p>
                </div>
                <span className="text-xs text-muted-foreground italic">
                  Always on
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Analytics Cookies
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Help us understand how visitors interact with the site.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                    analyticsEnabled ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                      analyticsEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  Back
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
