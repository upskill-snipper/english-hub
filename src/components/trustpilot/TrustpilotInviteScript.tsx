'use client'

/**
 * Async-loads the Trustpilot InviteJS bootstrap script and registers the
 * integration key once. No-op when `NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY` is
 * empty — keeps preview deployments clean.
 *
 * Loads from https://invitejs.trustpilot.com/tp.min.js. Registration is
 * idempotent: guarded by `window.__tpLoaded` so re-mounts (React strict
 * mode, fast refresh) don't double-register.
 */

import { useEffect } from 'react'

declare global {
  interface Window {
    tp?: (...args: unknown[]) => void
    __tpLoaded?: boolean
  }
}

export function TrustpilotInviteScript() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const key = process.env.NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY
    if (!key) return
    if (window.__tpLoaded) return
    window.__tpLoaded = true

    const script = document.createElement('script')
    script.src = 'https://invitejs.trustpilot.com/tp.min.js'
    script.async = true
    script.defer = true
    script.onload = () => {
      try {
        if (typeof window.tp === 'function') {
          window.tp('register', key)
        }
      } catch (err) {
        // Non-fatal. Trustpilot is a review tool, not a critical path.
        console.warn('[trustpilot] register failed', err)
      }
    }
    document.body.appendChild(script)
  }, [])

  return null
}

export default TrustpilotInviteScript
