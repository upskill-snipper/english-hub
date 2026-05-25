'use client'

// ─── CountdownTimer ─────────────────────────────────────────────────────────
// A self-contained mm:ss countdown for a single timed mock section. Drives the
// exam realism: it ticks every second, shows a calm → warning → critical visual
// state as the clock runs down, announces the remaining time politely to screen
// readers, and fires `onExpire` EXACTLY ONCE when it reaches zero so the runner
// can auto-submit / auto-advance.
//
// Lifetime + safety:
//   • The interval is created in an effect keyed on `seconds` (the section's
//     budget) and torn down on unmount or when the section changes - no leaked
//     timers.
//   • `onExpire` is held in a ref so a changing callback identity never restarts
//     the clock, and a `firedRef` guard guarantees a single fire.
//   • `paused` halts ticking without resetting (used while a confirm dialog or
//     the Speaking prep sub-timer is in front).
// ────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { Clock, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useMockT } from '../use-mock-t'

interface CountdownTimerProps {
  /** Total budget for this section, in seconds. Changing it resets the clock. */
  seconds: number
  /** Called once when the clock hits zero. */
  onExpire: () => void
  /** When true, ticking is suspended (time is held, not reset). */
  paused?: boolean
  /** Seconds-remaining threshold at which the warning state begins. Default 300. */
  warnAt?: number
  /** Seconds-remaining threshold at which the critical state begins. Default 60. */
  criticalAt?: number
  className?: string
}

/** Format a non-negative seconds count as mm:ss (or h:mm:ss past an hour). */
export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds))
  const h = Math.floor(safe / 3600)
  const m = Math.floor((safe % 3600) / 60)
  const s = safe % 60
  const mm = h > 0 ? m.toString().padStart(2, '0') : String(m)
  const ss = s.toString().padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

export default function CountdownTimer({
  seconds,
  onExpire,
  paused = false,
  warnAt = 300,
  criticalAt = 60,
  className,
}: CountdownTimerProps) {
  const t = useMockT()
  const [remaining, setRemaining] = useState(seconds)

  // Keep the latest onExpire without re-arming the interval when it changes.
  const onExpireRef = useRef(onExpire)
  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])

  // Guard so the expiry callback fires exactly once per section budget.
  const firedRef = useRef(false)

  // Reset the clock whenever the budget changes (i.e. a new section starts).
  useEffect(() => {
    setRemaining(seconds)
    firedRef.current = false
  }, [seconds])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          if (!firedRef.current) {
            firedRef.current = true
            // Defer out of the state updater so we don't setState-in-render.
            queueMicrotask(() => onExpireRef.current())
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [paused, seconds])

  const isCritical = remaining <= criticalAt
  const isWarning = !isCritical && remaining <= warnAt

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-sm font-semibold tabular-nums transition-colors',
        isCritical
          ? 'border-destructive/40 bg-destructive/10 text-destructive'
          : isWarning
            ? 'border-amber-500/40 bg-amber-500/10 text-amber-600'
            : 'border-border/60 bg-card text-foreground',
        isCritical && remaining > 0 && 'animate-pulse',
        className,
      )}
    >
      {isCritical ? (
        <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
      ) : (
        <Clock className="size-4 shrink-0" aria-hidden="true" />
      )}
      <span aria-hidden="true">{formatClock(remaining)}</span>
      {/* Polite, low-frequency announcement for assistive tech. */}
      <span className="sr-only" role="timer" aria-live="off">
        {t('ielts.mock.timer.remaining', { time: formatClock(remaining) })}
      </span>
    </div>
  )
}
