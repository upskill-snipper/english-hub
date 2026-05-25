'use client'

// ─── StageHeader ────────────────────────────────────────────────────────────
// The sticky top bar shown during every timed stage of the mock. It pins the
// section name, the step indicator (e.g. "Section 2 of 4"), the live countdown,
// and the manual "Submit section" action. Keeping it in one component keeps the
// four section runners visually identical and the timer placement consistent.
// ────────────────────────────────────────────────────────────────────────────

import type { ReactNode } from 'react'
import CountdownTimer from './CountdownTimer'

export default function StageHeader({
  title,
  stepLabel,
  seconds,
  onExpire,
  paused,
  warnAt,
  action,
}: {
  title: string
  stepLabel: string
  seconds: number
  onExpire: () => void
  paused?: boolean
  warnAt?: number
  /** Right-aligned action(s), typically the manual submit button. */
  action?: ReactNode
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{stepLabel}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <CountdownTimer seconds={seconds} onExpire={onExpire} paused={paused} warnAt={warnAt} />
          {action}
        </div>
      </div>
    </div>
  )
}
