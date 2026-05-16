/**
 * GradeDistributionChart — visual GCSE 1-9 grade distribution.
 *
 * Single source of truth for "Working At Grade Distribution" across:
 *   /demo/school, /school/dashboard, /school/analytics,
 *   /dashboard/analytics, /dashboard/parent, /dashboard/parent/progress,
 *   /dashboard/progress, /dashboard/teacher analytics, etc.
 *
 * The per-grade bar chart now renders through the premium "cinematic
 * glass" Recharts layer (ChartFrame + BarChart + GlassTooltip) instead
 * of hand-rolled CSS bars, so it animates and matches every other
 * school/teacher surface. The stacked overview, three summary cards,
 * legend and empty-state keep their on-theme band semantics:
 *     - teal-700  → Grade 7-9 (top performers)
 *     - blue-500  → Grade 4-6 (standard pass)
 *     - red-500   → Grade 1-3 (below pass)
 *
 * Public API is unchanged (same props, defaults, exports).
 */

'use client'

import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from 'recharts'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { ChartFrame, GlassTooltip, GRID, AXIS } from '@/components/dataviz'

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

/** Solid colours for the Recharts <Cell> fills (mirror the band CSS). */
const BAND_FILL: Record<'top' | 'pass' | 'below', string> = {
  top: 'hsl(173 80% 26%)', // teal-700
  pass: 'hsl(217 91% 60%)', // blue-500
  below: 'hsl(0 84% 60%)', // red-500
}

const BAND_CARD: Record<
  'top' | 'pass' | 'below',
  { ring: string; bg: string; text: string; subtext: string; labelKey: string }
> = {
  top: {
    ring: 'border-teal-700/30',
    bg: 'bg-teal-700/5',
    text: 'text-teal-700',
    subtext: 'text-teal-700/80',
    labelKey: 'analytics.grade_band.top',
  },
  pass: {
    ring: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    text: 'text-blue-700 dark:text-blue-400',
    subtext: 'text-blue-700/80 dark:text-blue-400/80',
    labelKey: 'analytics.grade_band.pass',
  },
  below: {
    ring: 'border-red-500/30',
    bg: 'bg-red-500/5',
    text: 'text-red-600 dark:text-red-400',
    subtext: 'text-red-600/80 dark:text-red-400/80',
    labelKey: 'analytics.grade_band.below',
  },
}

function bandFor(grade: number): 'top' | 'pass' | 'below' {
  return GRADE_BAND[grade] ?? 'below'
}

export function GradeDistributionChart({
  counts,
  title,
  titleAs: TitleTag = 'h3',
  showBars = true,
  showStacked = true,
  showSummary = true,
  hideLegend = false,
  barHeight = 200,
  className,
}: GradeDistributionChartProps) {
  const t = useT()
  const resolvedTitle =
    title === null ? null : (title ?? t('analytics.grade.working_at_distribution'))
  const { data, total, bands } = useMemo(() => {
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

  // Recharts wants ascending categories left→right (G1 … G9); the band
  // semantics + counts are unchanged, only render order is reversed for
  // the chart so "top of pass" reads on the right like before.
  const chartData = useMemo(
    () =>
      [...data].reverse().map((d) => ({
        grade: `G${d.grade}`,
        count: d.count,
        band: d.band,
        pct: pctOf(d.count),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, total],
  )

  // Empty state
  if (total === 0) {
    return (
      <div className={cn('w-full', className)}>
        {resolvedTitle && (
          <TitleTag className="mb-3 text-sm font-semibold text-foreground">
            {resolvedTitle}
          </TitleTag>
        )}
        <div className="rounded-lg border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
          {t('analytics.grade.no_data_yet')}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('w-full space-y-5', className)}>
      {/* ── Title + inline legend ────────────────────────────────────────── */}
      {(resolvedTitle || !hideLegend) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          {resolvedTitle ? (
            <TitleTag className="text-sm font-semibold text-foreground sm:text-base">
              {resolvedTitle}
            </TitleTag>
          ) : (
            <span />
          )}
          {!hideLegend && (
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-muted-foreground sm:text-xs"
              role="list"
              aria-label={t('analytics.grade.legend_aria')}
            >
              <span className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', BAND_DOT_BG.top)}
                  aria-hidden="true"
                />
                {t('analytics.grade.range_7_9')}
              </span>
              <span className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', BAND_DOT_BG.pass)}
                  aria-hidden="true"
                />
                {t('analytics.grade.range_4_6')}
              </span>
              <span className="flex items-center gap-1.5" role="listitem">
                <span
                  className={cn('inline-block h-2.5 w-2.5 rounded-full', BAND_DOT_BG.below)}
                  aria-hidden="true"
                />
                {t('analytics.grade.range_1_3')}
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
            aria-label={`${t('analytics.grade.distribution_aria_prefix')}: ${bands.top} ${t('analytics.unit.students')} ${t('analytics.grade.range_7_9')}, ${bands.pass} ${t('analytics.grade.range_4_6')}, ${bands.below} ${t('analytics.grade.range_1_3')}`}
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
                  title={`${t(BAND_CARD[band].labelKey)}: ${value} ${t('analytics.unit.students')} (${Math.round(pct)}%)`}
                />
              )
            })}
          </div>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            {total} {t('analytics.unit.students_total')} · {pctOf(bands.top)}%{' '}
            {t('analytics.grade.achieving_7_9')}
          </p>
        </div>
      )}

      {/* ── Per-grade vertical bars (premium Recharts layer) ────────────── */}
      {showBars && (
        <div className="rounded-lg border border-border/60 bg-card/40 p-4">
          <div role="img" aria-label={t('analytics.grade.bar_chart_aria')}>
            <ChartFrame height={barHeight}>
              <BarChart
                data={chartData}
                margin={{ top: 24, right: 8, bottom: 4, left: -16 }}
                barCategoryGap="18%"
              >
                <CartesianGrid {...GRID} />
                <XAxis
                  dataKey="grade"
                  {...AXIS}
                  tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis {...AXIS} width={40} allowDecimals={false} />
                <Tooltip content={<GlassTooltip />} cursor={{ fill: 'hsl(var(--muted)/0.4)' }} />
                <Bar
                  dataKey="count"
                  name={t('analytics.unit.students')}
                  radius={[6, 6, 0, 0]}
                  isAnimationActive
                  animationDuration={900}
                >
                  {chartData.map((d, i) => (
                    <Cell key={i} fill={BAND_FILL[d.band]} />
                  ))}
                  <LabelList
                    dataKey="count"
                    position="top"
                    className="fill-foreground"
                    style={{ fontSize: 12, fontWeight: 700 }}
                  />
                </Bar>
              </BarChart>
            </ChartFrame>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground/80">
            <span>{t('analytics.grade.bottom')}</span>
            <span>{t('analytics.grade.top_of_pass')}</span>
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
                <p className={cn('text-[11px] font-medium', cfg.subtext)}>{t(cfg.labelKey)}</p>
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
