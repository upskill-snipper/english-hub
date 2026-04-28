/**
 * GradeDistributionChart — visual GCSE 1-9 grade distribution.
 *
 * Single source of truth for "Working At Grade Distribution" across:
 *   /demo/school, /school/dashboard, /school/analytics,
 *   /dashboard/analytics, /dashboard/parent, /dashboard/parent/progress,
 *   /dashboard/progress, /dashboard/teacher analytics, etc.
 *
 * Design goals (vs. the previous tiny-bar version):
 *  1. Stacked-bar at the top — students can see proportions in 0.5 s.
 *  2. Per-grade vertical bars with count AND percentage on each bar.
 *  3. Three summary cards below, each with %, count, and a sparkline-style
 *     mini-bar so empty bands still feel real.
 *  4. Hover tooltips on every bar.
 *  5. Empty-state when total = 0.
 *  6. Matches the project's teal/blue/red band semantics:
 *     - teal-700  → Grade 7-9 (top performers)
 *     - blue-500  → Grade 4-6 (standard pass)
 *     - red-500   → Grade 1-3 (below pass)
 */

'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'

export type GradeCounts = Record<number, number> | Record<string, number>

export interface GradeDistributionChartProps {
  /** Counts keyed by grade number (1-9). Missing keys treated as 0. */
  counts: GradeCounts
  /** Optional title — set to null to suppress. */
  title?: string | null
  /** Heading-level for the title (h2/h3/h4). Defaults to h3. */
  titleAs?: 'h2' | 'h3' | 'h4'
  /** Show the per-grade vertical bars block. Defaults to true. */
  showBars?: boolean
  /** Show the stacked-overview band at the top. Defaults to true. */
  showStacked?: boolean
  /** Show the three summary cards. Defaults to true. */
  showSummary?: boolean
  /** Hide the inline legend (e.g. when the parent card already shows it). */
  hideLegend?: boolean
  /** Height (px) of the vertical-bar block. Defaults to 200. */
  barHeight?: number
  /** Optional className for the outer wrapper. */
  className?: string
}

const GRADE_BAND: Record<number, 'top' | 'pass' | 'below'> = {
  1: 'below',
  2: 'below',
  3: 'below',
  4: 'pass',
  5: 'pass',
  6: 'pass',
  7: 'top',
  8: 'top',
  9: 'top',
}

const BAND_BAR_BG: Record<'top' | 'pass' | 'below', string> = {
  top: 'bg-teal-700',
  pass: 'bg-blue-500',
  below: 'bg-red-500',
}

const BAND_DOT_BG: Record<'top' | 'pass' | 'below', string> = {
  top: 'bg-teal-700',
  pass: 'bg-blue-500',
  below: 'bg-red-500',
}

const BAND_CARD: Record<
  'top' | 'pass' | 'below',
  { ring: string; bg: string; text: string; subtext: string; label: string }
> = {
  top: {
    ring: 'border-teal-700/30',
    bg: 'bg-teal-700/5',
    text: 'text-teal-700',
    subtext: 'text-teal-700/80',
    label: 'Grade 7-9 (Strong pass+)',
  },
  pass: {
    ring: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    text: 'text-blue-700 dark:text-blue-400',
    subtext: 'text-blue-700/80 dark:text-blue-400/80',
    label: 'Grade 4-6 (Standard pass+)',
  },
  below: {
    ring: 'border-red-500/30',
    bg: 'bg-red-500/5',
    text: 'text-red-600 dark:text-red-400',
    subtext: 'text-red-600/80 dark:text-red-400/80',
    label: 'Grade 1-3 (Below pass)',
  },
}

function bandFor(grade: number): 'top' | 'pass' | 'below' {
  return GRADE_BAND[grade] ?? 'below'
}

export function GradeDistributionChart({
  counts,
  title = 'Working At Grade Distribution',
  titleAs: TitleTag = 'h3',
  showBars = true,
  showStacked = true,
  showSummary = true,
  hideLegend = false,
  barHeight = 200,
  className,
}: GradeDistributionChartProps) {
  const { data, total, max, bands } = useMemo(() => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1].map((g) => {
      // Accept both numeric and string keys; treat undefined as 0.
      const raw =
        (counts as Record<number, number>)[g] ?? (counts as Record<string, number>)[String(g)] ?? 0
      const count = Number.isFinite(raw) ? raw : 0
      return { grade: g, count, band: bandFor(g) }
    })
    const totalSum = arr.reduce((s, x) => s + x.count, 0)
    const maxCount = Math.max(...arr.map((x) => x.count), 0)
    const tops = arr.filter((x) => x.band === 'top').reduce((s, x) => s + x.count, 0)
    const pass = arr.filter((x) => x.band === 'pass').reduce((s, x) => s + x.count, 0)
    const below = arr.filter((x) => x.band === 'below').reduce((s, x) => s + x.count, 0)
    return {
      data: arr,
      total: totalSum,
      max: maxCount,
      bands: { top: tops, pass, below },
    }
  }, [counts])

  const pctOf = (n: number) => (total > 0 ? Math.round((n / total) * 100) : 0)

  // Empty state
  if (total === 0) {
    return (
      <div className={cn('w-full', className)}>
        {title && (
          <TitleTag className="mb-3 text-sm font-semibold text-foreground">{title}</TitleTag>
        )}
        <div className="rounded-lg border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
          No grade data yet — once students complete assessments, their working grades will appear
          here.
        </div>
      </div>
    )
  }

  return (
    <div className={cn('w-full space-y-5', className)}>
      {/* ── Title + inline legend ────────────────────────────────────────── */}
      {(title || !hideLegend) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          {title ? (
            <TitleTag className="text-sm font-semibold text-foreground sm:text-base">
              {title}
            </TitleTag>
          ) : (
            <span />
          )}
          {!hideLegend && (
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-muted-foreground sm:text-xs"
              role="list"
              aria-label="Grade band legend"
            >
              <span className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', BAND_DOT_BG.top)}
                  aria-hidden="true"
                />
                Grade 7-9
              </span>
              <span className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', BAND_DOT_BG.pass)}
                  aria-hidden="true"
                />
                Grade 4-6
              </span>
              <span className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', BAND_DOT_BG.below)}
                  aria-hidden="true"
                />
                Grade 1-3
              </span>
            </div>
          )}
        </div>
      )}

      {/* ── Stacked overview bar — at-a-glance proportions ──────────────── */}
      {showStacked && (
        <div>
          <div
            className="flex h-3.5 w-full overflow-hidden rounded-full border border-border/50 bg-muted"
            role="img"
            aria-label={`Grade distribution: ${bands.top} students at Grade 7-9, ${bands.pass} at Grade 4-6, ${bands.below} at Grade 1-3`}
          >
            {(['top', 'pass', 'below'] as const).map((band) => {
              const value = bands[band]
              if (value === 0) return null
              const pct = (value / total) * 100
              return (
                <div
                  key={band}
                  className={cn(BAND_BAR_BG[band], 'transition-all')}
                  style={{ width: `${pct}%` }}
                  title={`${BAND_CARD[band].label}: ${value} student${value === 1 ? '' : 's'} (${Math.round(pct)}%)`}
                />
              )
            })}
          </div>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            {total} student{total === 1 ? '' : 's'} total · {pctOf(bands.top)}% achieving Grade 7-9
          </p>
        </div>
      )}

      {/* ── Per-grade vertical bars ─────────────────────────────────────── */}
      {showBars && (
        <div className="rounded-lg border border-border/60 bg-card/40 p-4">
          <div
            className="flex items-end gap-1.5 sm:gap-2"
            style={{ height: barHeight }}
            role="img"
            aria-label="Grade distribution bar chart, Grade 9 to Grade 1"
          >
            {data.map(({ grade, count, band }) => {
              const heightPct = max > 0 ? Math.max((count / max) * 100, count > 0 ? 6 : 0) : 0
              const pct = pctOf(count)
              return (
                <div
                  key={grade}
                  className="group flex flex-1 flex-col items-center gap-1.5"
                  title={`Grade ${grade}: ${count} student${count === 1 ? '' : 's'} (${pct}%)`}
                >
                  {/* Count + % stacked above bar */}
                  <div className="flex flex-col items-center leading-tight">
                    <span className="text-sm font-bold text-foreground tabular-nums sm:text-base">
                      {count}
                    </span>
                    <span className="text-[10px] text-muted-foreground tabular-nums">{pct}%</span>
                  </div>
                  {/* Bar */}
                  <div className="flex w-full flex-1 items-end justify-center">
                    <div
                      className={cn(
                        'w-full max-w-[44px] rounded-t-md transition-all duration-200 group-hover:opacity-90',
                        BAND_BAR_BG[band],
                      )}
                      style={{
                        height: `${heightPct}%`,
                        minHeight: count > 0 ? 4 : 0,
                      }}
                    />
                  </div>
                  {/* Grade label */}
                  <span className="text-[11px] font-semibold text-muted-foreground sm:text-xs">
                    G{grade}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground/80">
            <span>Top of pass · 9</span>
            <span>Bottom · 1</span>
          </div>
        </div>
      )}

      {/* ── Summary cards (3 bands) ─────────────────────────────────────── */}
      {showSummary && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(['top', 'pass', 'below'] as const).map((band) => {
            const v = bands[band]
            const pct = pctOf(v)
            const cfg = BAND_CARD[band]
            return (
              <div
                key={band}
                className={cn('flex flex-col gap-2 rounded-lg border p-3.5', cfg.ring, cfg.bg)}
              >
                <div className="flex items-baseline gap-2">
                  <span className={cn('text-2xl font-bold', cfg.text)}>{v}</span>
                  <span className={cn('text-sm font-semibold', cfg.subtext)} aria-hidden="true">
                    · {pct}%
                  </span>
                </div>
                <p className={cn('text-[11px] font-medium', cfg.subtext)}>{cfg.label}</p>
                {/* Mini sparkline bar showing this band's contribution */}
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60"
                  aria-hidden="true"
                >
                  <div
                    className={cn('h-full rounded-full', BAND_BAR_BG[band])}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default GradeDistributionChart
