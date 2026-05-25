'use client'

// ─── TrackToggle ────────────────────────────────────────────────────────────
// IELTS Academic vs General Training (GT) track switcher + its state hook.
//
// Reading and Writing differ between the two tracks (Listening/Speaking are
// identical), so the Reading and Writing pages let the learner pick a track and
// filter their content + band table accordingly. The choice is persisted to
// localStorage so it carries across pages and sessions.
//
// `useIeltsTrack()` is SSR-safe: it returns 'academic' on the server and during
// the first client render, then syncs to the stored value after mount - this
// avoids a hydration mismatch (the server has no localStorage).
//
// The control is modelled on LanguageToggle (role=group + aria-pressed
// segmented buttons). The labels "Academic" / "General Training" are IELTS
// technical brand terms and stay in English/Latin per the dictionary's
// brand-term convention, so they are not routed through t().
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import type { IeltsTrack } from '@/lib/ielts/types'

const STORAGE_KEY = 'english-hub-ielts-track'
const DEFAULT_TRACK: IeltsTrack = 'academic'

function isTrack(value: unknown): value is IeltsTrack {
  return value === 'academic' || value === 'general'
}

function readStoredTrack(): IeltsTrack {
  if (typeof window === 'undefined') return DEFAULT_TRACK
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isTrack(stored) ? stored : DEFAULT_TRACK
  } catch {
    // localStorage can throw (private mode / disabled storage) - fall back.
    return DEFAULT_TRACK
  }
}

/**
 * localStorage-backed IELTS track state.
 *
 * Returns a `[track, setTrack]` tuple. SSR and the first client render both see
 * 'academic'; the real persisted value is read on mount, so server and client
 * markup match before hydration.
 */
export function useIeltsTrack(): [IeltsTrack, (track: IeltsTrack) => void] {
  const [track, setTrackState] = useState<IeltsTrack>(DEFAULT_TRACK)

  // Read the persisted value once, after mount (client-only).
  useEffect(() => {
    setTrackState(readStoredTrack())
  }, [])

  const setTrack = useCallback((next: IeltsTrack) => {
    setTrackState(next)
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Persistence is best-effort; the in-memory state still updates.
      }
    }
  }, [])

  return [track, setTrack]
}

const TRACK_DEFS: { value: IeltsTrack; label: string }[] = [
  { value: 'academic', label: 'Academic' },
  { value: 'general', label: 'General Training' },
]

export interface TrackToggleProps {
  value: IeltsTrack
  onChange: (track: IeltsTrack) => void
  className?: string
}

/**
 * Two-option segmented control for the IELTS track. Presentational + accessible
 * (role=group, aria-pressed per option); state is owned by the caller (pair it
 * with `useIeltsTrack`).
 */
export function TrackToggle({ value, onChange, className }: TrackToggleProps) {
  return (
    <div
      role="group"
      aria-label="IELTS track"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-background/80 p-0.5 text-xs font-medium shadow-sm backdrop-blur',
        className,
      )}
    >
      {TRACK_DEFS.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={active}
            className={cn(
              'rounded-full px-3 py-1 transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
