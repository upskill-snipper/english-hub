'use client'

import { useMemo } from 'react'
import { retentionBucket, type CohortTable } from '@/lib/analytics/cohorts'
import { formatGBP } from '@/lib/analytics/nrr'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'
import { Heatmap } from '@/components/dataviz'

interface CohortHeatmapProps {
  table: CohortTable
  maxMonthsShown?: number
  className?: string
}

export function CohortHeatmap({ table, maxMonthsShown = 12, className }: CohortHeatmapProps) {
  const t = useT()
  const maxAge = Math.min(table.maxAge, maxMonthsShown)

  // Map the cohort table onto the premium "cinematic glass" Heatmap
  // primitive. Row labels keep the initial-MRR context that the old
  // bespoke <table> showed in its own column; columns are month offsets.
  const rows = useMemo(
    () => table.rows.map((r) => `${r.label}  ·  ${formatGBP(r.initialMRR, true)}`),
    [table.rows],
  )
  const cols = useMemo(() => Array.from({ length: maxAge + 1 }, (_, i) => `M${i}`), [maxAge])

  // retained[] is a % of initial MRR; it routinely exceeds 100 (expansion).
  // The Heatmap primitive expects a 0-100 intensity, so clamp purely for
  // colour intensity while the precise value + bucket label live in the
  // hover label (no data is lost).
  const getValue = (ri: number, ci: number): number => {
    const v = table.rows[ri]?.retained[ci]
    if (v === undefined) return 0
    return Math.max(0, Math.min(100, v))
  }

  const getLabel = (ri: number, ci: number): string => {
    const row = table.rows[ri]
    const v = row?.retained[ci]
    if (row === undefined || v === undefined) {
      return t('analytics.cohort.no_data_yet')
    }
    const bucket = retentionBucket(v)
    return `${row.label} · ${t('analytics.cohort.month')} ${ci} - ${v.toFixed(1)}% ${t('analytics.cohort.of_initial_mrr_retained')} (${bucket.label})`
  }

  return (
    <div className={cn('w-full', className)}>
      <Heatmap rows={rows} cols={cols} getValue={getValue} getLabel={getLabel} />

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
        <LegendSwatch className="bg-emerald-500/80" label="≥ 120%" />
        <LegendSwatch className="bg-emerald-500/60" label="110 - 120%" />
        <LegendSwatch className="bg-emerald-500/35" label="100 - 110%" />
        <LegendSwatch className="bg-amber-500/35" label="95 - 100%" />
        <LegendSwatch className="bg-orange-500/40" label="85 - 95%" />
        <LegendSwatch className="bg-red-500/40" label="< 85%" />
      </div>
    </div>
  )
}

function LegendSwatch({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('inline-block h-3 w-5 rounded-sm', className)} />
      {label}
    </span>
  )
}
