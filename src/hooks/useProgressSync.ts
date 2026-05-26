'use client'

import { useEffect, useRef, useState } from 'react'
import * as Sentry from '@sentry/nextjs'
import { useAuthUser } from '@/store/auth-store'

// ── Storage keys ─────────────────────────────────────────────────────────────
// These are the canonical localStorage keys written by the per-feature progress
// trackers (poems reader, games engine, quiz runner, reading-age estimator).
const STORAGE_KEYS = {
  poems: 'english-hub:progress:poems',
  games: 'english-hub:progress:games',
  quizzes: 'english-hub:progress:quizzes',
  readingAge: 'english-hub:progress:reading-age',
} as const

const LAST_SYNC_KEY = 'english-hub:progress:lastSync'
const MIN_SYNC_INTERVAL_MS = 5 * 60 * 1000 // 5 minutes

export type ProgressSyncStatus = 'idle' | 'syncing' | 'success' | 'error'

export interface ProgressSyncState {
  status: ProgressSyncStatus
  lastSyncAt?: string
  error?: string
}

/**
 * Safely parse a JSON string from localStorage. Returns `null` on any failure
 * (missing key, malformed JSON, quota error, etc.) - never throws.
 */
function readJSON(key: string): unknown {
  try {
    if (typeof window === 'undefined') return null
    const raw = window.localStorage.getItem(key)
    if (raw === null) return null
    return JSON.parse(raw) as unknown
  } catch {
    return null
  }
}

/**
 * `useProgressSync` - bridges anonymous localStorage progress to the
 * authenticated Supabase store.
 *
 * Behaviour:
 *   - SSR-safe: bails out when `window` is undefined.
 *   - Runs once per mount, only if a user is signed in (via `useAuthUser`).
 *   - Reads the four `english-hub:progress:*` localStorage buckets and POSTs
 *     them as a single bundle to `/api/progress/sync` (created by a sibling
 *     agent).
 *   - Throttled: skips if `english-hub:progress:lastSync` is < 5 minutes old.
 *   - Failure-tolerant: errors are forwarded to Sentry and surfaced via the
 *     returned `status`/`error` fields, but never thrown.
 *
 * Returns `{ status, lastSyncAt?, error? }` for optional UI affordances
 * (e.g. a small "syncing…" indicator in the authed shell header).
 *
 * ## How to mount
 * Call once at the top of the authed layout so it runs on every authed page
 * load without re-mounting per-route. The orchestrator will wire this up:
 *
 * ```tsx
 * // src/app/(authed)/layout.tsx
 * 'use client'
 * import { useProgressSync } from '@/hooks/useProgressSync'
 *
 * export default function AuthedLayout({ children }: { children: React.ReactNode }) {
 *   useProgressSync()
 *   return <>{children}</>
 * }
 * ```
 */
export function useProgressSync(): ProgressSyncState {
  const user = useAuthUser()
  const [state, setState] = useState<ProgressSyncState>({ status: 'idle' })
  const hasRunRef = useRef(false)

  useEffect(() => {
    // SSR / non-browser: bail early.
    if (typeof window === 'undefined') return
    // Only sync for authenticated users.
    if (!user) return
    // Guard against React strict-mode double-invocation.
    if (hasRunRef.current) return
    hasRunRef.current = true

    // Throttle: skip if we synced recently.
    try {
      const lastSyncRaw = window.localStorage.getItem(LAST_SYNC_KEY)
      if (lastSyncRaw) {
        const lastSyncMs = Date.parse(lastSyncRaw)
        if (!Number.isNaN(lastSyncMs) && Date.now() - lastSyncMs < MIN_SYNC_INTERVAL_MS) {
          setState({ status: 'idle', lastSyncAt: lastSyncRaw })
          return
        }
      }
    } catch {
      // Reading the throttle marker should never block a sync attempt.
    }

    const payload = {
      poems: readJSON(STORAGE_KEYS.poems),
      games: readJSON(STORAGE_KEYS.games),
      quizzes: readJSON(STORAGE_KEYS.quizzes),
      readingAge: readJSON(STORAGE_KEYS.readingAge),
    }

    // Nothing to sync - skip the network round-trip but still mark idle.
    const hasAnyData = Object.values(payload).some((v) => v !== null)
    if (!hasAnyData) {
      setState({ status: 'idle' })
      return
    }

    let cancelled = false
    setState({ status: 'syncing' })

    const run = async () => {
      try {
        const res = await fetch('/api/progress/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          throw new Error(`Progress sync failed with status ${res.status}`)
        }

        const now = new Date().toISOString()
        try {
          window.localStorage.setItem(LAST_SYNC_KEY, now)
        } catch {
          // Quota / private-mode failures shouldn't fail the sync result.
        }

        if (!cancelled) {
          setState({ status: 'success', lastSyncAt: now })
        }
      } catch (err) {
        try {
          Sentry.captureException(err, {
            tags: { feature: 'progress-sync' },
          })
        } catch {
          // Sentry failures are intentionally swallowed.
        }
        if (!cancelled) {
          setState({
            status: 'error',
            error: err instanceof Error ? err.message : 'Unknown sync error',
          })
        }
      }
    }

    void run()

    return () => {
      cancelled = true
    }
  }, [user])

  return state
}
