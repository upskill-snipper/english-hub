'use client'

import React from 'react'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ReadingProgressTrackerProps {
  /** 0-100 percentage of text read */
  percentage: number
  /** Number of sections completed */
  sectionsCompleted: number
  /** Total number of sections */
  totalSections: number
  /** Estimated minutes remaining */
  estimatedMinutesRemaining: number
  /** Display variant */
  variant?: 'ring' | 'bar'
  /** Compact mode for inline use */
  compact?: boolean
}

// ─── SVG Ring ────────────────────────────────────────────────────────────────

function ProgressRing({
  percentage,
  size = 80,
  strokeWidth = 6,
}: {
  percentage: number
  size?: number
  strokeWidth?: number
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg width={size} height={size} className="rotate-[-90deg]" aria-hidden="true">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-border"
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="text-brand-accent transition-[stroke-dashoffset] duration-500 ease-out"
      />
    </svg>
  )
}

// ─── Time formatter ──────────────────────────────────────────────────────────

function formatTime(minutes: number, t: (k: string) => string): string {
  if (minutes < 1) return t('reading_progress.less_than_a_min')
  if (minutes < 60) return `${Math.round(minutes)} ${t('reading_progress.min_unit')}`
  const h = Math.floor(minutes / 60)
  const m = Math.round(minutes % 60)
  const hUnit = t('reading_progress.hour_unit')
  const mUnit = t('reading_progress.minute_short')
  return m === 0 ? `${h}${hUnit}` : `${h}${hUnit} ${m}${mUnit}`
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

function ReadingProgressTracker({
  percentage,
  sectionsCompleted,
  totalSections,
  estimatedMinutesRemaining,
  variant = 'ring',
  compact = false,
}: ReadingProgressTrackerProps) {
  const t = useT()
  const clamped = Math.min(100, Math.max(0, Math.round(percentage)))

  if (variant === 'bar') {
    return (
      <div className="flex flex-col gap-2">
        {/* Bar track */}
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-border">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-brand-accent transition-all duration-500 ease-out"
            style={{ width: `${clamped}%` }}
          />
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium text-foreground">
            {clamped}% {t('reading_progress.complete')}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <CheckIcon />
              {sectionsCompleted}/{totalSections} {t('reading_progress.sections')}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon />
              {formatTime(estimatedMinutesRemaining, t)} {t('reading_progress.left')}
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Ring variant
  return (
    <div
      className={`flex items-center gap-4 ${compact ? '' : 'rounded-xl border border-border bg-card p-4'}`}
    >
      {/* Ring */}
      <div className="relative flex-shrink-0">
        <ProgressRing percentage={clamped} size={compact ? 56 : 80} strokeWidth={compact ? 4 : 6} />
        <span
          className={`absolute inset-0 flex items-center justify-center font-bold text-foreground ${
            compact ? 'text-xs' : 'text-sm'
          }`}
        >
          {clamped}%
        </span>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-foreground">{t('reading_progress.title')}</span>
        <div className="flex flex-col gap-0.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckIcon />
            {sectionsCompleted} {t('reading_progress.of')} {totalSections}{' '}
            {t('reading_progress.sections')}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon />
            {formatTime(estimatedMinutesRemaining, t)} {t('reading_progress.remaining')}
          </span>
        </div>
      </div>
    </div>
  )
}

export { ReadingProgressTracker, type ReadingProgressTrackerProps }
