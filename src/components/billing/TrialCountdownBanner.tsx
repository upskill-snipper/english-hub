'use client'

/**
 * TrialCountdownBanner
 *
 * Top-of-page banner that counts down the user's free trial in real time
 * and links them to the upgrade page. Designed to slot above the
 * existing hero on /dashboard and /revision.
 *
 * Visibility rules (intentionally fail-closed):
 *   - hides when `isPremium === true` - they have already converted
 *   - hides when `trialEndsAt === null` - no active trial
 *   - hides once the trial end is in the past - server SHOULD have
 *     filtered this out already, but we double-check on the client so a
 *     stale page never shows a negative countdown
 *
 * Visual states:
 *   - default: teal/cream brand banner ("X days left in your free trial")
 *   - last-day: warning amber with stronger CTA when fewer than 24h
 *     remain (covers days 0 and 1 in the founder's spec)
 *
 * The countdown re-renders every 60 s. We intentionally do NOT tick at
 * 1 Hz - minute-level granularity is enough for a multi-day timer and
 * keeps the React reconciler quiet.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

interface TrialCountdownBannerProps {
  /** ISO string or Date. Null when the user has no active trial. */
  trialEndsAt: Date | string | null
  /** True once the user converts to a paid plan - banner self-hides. */
  isPremium: boolean
  /** Optional className passthrough so callers can tweak spacing. */
  className?: string
}

interface Remaining {
  totalMs: number
  days: number
  hours: number
  minutes: number
}

function diff(target: number, now: number): Remaining {
  const totalMs = Math.max(0, target - now)
  const totalMinutes = Math.floor(totalMs / 60_000)
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60
  return { totalMs, days, hours, minutes }
}

export function TrialCountdownBanner({
  trialEndsAt,
  isPremium,
  className,
}: TrialCountdownBannerProps) {
  const t = useT()
  // Normalise once per render - props may be a Date (server-rendered) or
  // an ISO string (after JSON round-trip via the client cache).
  const targetMs =
    trialEndsAt == null
      ? null
      : trialEndsAt instanceof Date
        ? trialEndsAt.getTime()
        : new Date(trialEndsAt).getTime()

  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (targetMs == null) return
    // Tick every 60 s. We refresh `now` rather than the target so the
    // banner updates even if the parent re-renders.
    const id = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(id)
  }, [targetMs])

  // Hidden states - return null AFTER hooks so the hook order stays
  // stable across renders.
  if (isPremium) return null
  if (targetMs == null) return null
  if (targetMs <= now) return null

  const remaining = diff(targetMs, now)
  // "Last day" = under 24 h left. Covers the founder's day 0 / day 1
  // request without us having to track the calendar boundary explicitly.
  const isLastDay = remaining.totalMs < 24 * 60 * 60 * 1000

  // Headline is composed of locale-formatted numeric segments + a
  // translated "left in your free trial" tail. Splitting like this
  // keeps the dictionary free of `{n}`-style ICU placeholders.
  const leftSuffix = t('billing.trial.left_suffix')
  const headline = (() => {
    if (isLastDay) {
      if (remaining.hours >= 1) {
        return `${remaining.hours}${t('billing.trial.unit_h')} ${remaining.minutes}${t('billing.trial.unit_m')} ${leftSuffix}`
      }
      return `${remaining.minutes}${t('billing.trial.unit_m')} ${leftSuffix}`
    }
    const dayLabel =
      remaining.days === 1 ? t('billing.trial.unit_day') : t('billing.trial.unit_days')
    // Show days + hours so the timer visibly ticks across the
    // first-of-the-day boundary.
    return `${remaining.days} ${dayLabel} ${remaining.hours}${t('billing.trial.unit_h')} ${leftSuffix}`
  })()

  const Icon = isLastDay ? AlertTriangle : Clock

  return (
    <div
      role="status"
      aria-live="polite"
      data-trial-banner=""
      className={cn(
        'rounded-2xl border px-4 py-3 sm:px-5 sm:py-4',
        'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between',
        // Default brand variant - teal accent on cream tint, navy text.
        // Mirrors the existing /revision hero gradient family.
        !isLastDay &&
          'border-teal-500/30 bg-gradient-to-r from-teal-500/[0.08] via-cream-50 to-teal-500/[0.04] text-ink-800 dark:from-teal-500/10 dark:via-card dark:to-teal-500/5 dark:text-foreground',
        // Last-day variant - amber alert.
        isLastDay &&
          'border-ochre-500/50 bg-gradient-to-r from-ochre-200/60 via-clay-200/40 to-ochre-200/60 text-ink-900 dark:from-amber-500/15 dark:via-amber-500/10 dark:to-amber-500/15 dark:text-foreground',
        className,
      )}
    >
      <div className="flex items-start gap-3 sm:items-center">
        <span
          className={cn(
            'flex size-9 shrink-0 items-center justify-center rounded-xl',
            isLastDay
              ? 'bg-clay-500/15 text-clay-600 dark:bg-amber-500/20 dark:text-amber-300'
              : 'bg-teal-500/15 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
          )}
          aria-hidden="true"
        >
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight sm:text-base">{headline}</p>
          <p className="mt-0.5 text-xs text-ink-600 dark:text-muted-foreground sm:text-sm">
            {isLastDay ? t('billing.trial.subline_last_day') : t('billing.trial.subline_default')}
          </p>
        </div>
      </div>

      <Button
        size="sm"
        variant={isLastDay ? 'default' : 'default'}
        className={cn(
          'shrink-0 self-start sm:self-auto',
          isLastDay &&
            'bg-clay-500 text-white hover:bg-clay-600 dark:bg-amber-500 dark:text-ink-900 dark:hover:bg-amber-400',
        )}
        render={<Link href="/pricing" />}
      >
        {isLastDay ? (
          <>
            {t('billing.trial.cta_upgrade_now')} <ArrowRight className="size-3.5" />
          </>
        ) : (
          <>
            <Sparkles className="size-3.5" /> {t('billing.trial.cta_upgrade_now')}
          </>
        )}
      </Button>
    </div>
  )
}

export default TrialCountdownBanner
