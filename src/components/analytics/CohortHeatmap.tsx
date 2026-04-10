"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { retentionBucket, type CohortTable } from "@/lib/analytics/cohorts"
import { formatGBP } from "@/lib/analytics/nrr"
import { cn } from "@/lib/utils"

interface CohortHeatmapProps {
  table: CohortTable
  maxMonthsShown?: number
  className?: string
}

export function CohortHeatmap({
  table,
  maxMonthsShown = 12,
  className,
}: CohortHeatmapProps) {
  const maxAge = Math.min(table.maxAge, maxMonthsShown)
  const ageColumns = Array.from({ length: maxAge + 1 }, (_, i) => i)

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="w-full min-w-[720px] border-separate border-spacing-1 text-xs">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-card px-3 py-2 text-left font-medium text-muted-foreground">
              Cohort
            </th>
            <th className="px-2 py-2 text-right font-medium text-muted-foreground">
              Initial MRR
            </th>
            {ageColumns.map((m) => (
              <th
                key={m}
                className="px-2 py-2 text-center font-medium text-muted-foreground"
              >
                M{m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.cohortMonth}>
              <td className="sticky left-0 z-10 whitespace-nowrap bg-card px-3 py-1.5 font-medium text-foreground">
                {row.label}
              </td>
              <td className="px-2 py-1.5 text-right tabular-nums text-muted-foreground">
                {formatGBP(row.initialMRR, true)}
              </td>
              {ageColumns.map((m) => {
                const value = row.retained[m]
                if (value === undefined) {
                  return (
                    <td
                      key={m}
                      className="h-8 w-14 rounded-md border border-dashed border-border/40 bg-muted/10"
                      aria-label="No data yet"
                    />
                  )
                }
                const bucket = retentionBucket(value)
                return (
                  <td key={m} className="p-0">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "flex h-8 w-14 items-center justify-center rounded-md text-[11px] font-semibold tabular-nums transition-transform hover:scale-105",
                            bucket.bg,
                            bucket.text,
                          )}
                        >
                          {Math.round(value)}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p className="font-medium">
                          {row.label} &middot; Month {m}
                        </p>
                        <p className="text-muted-foreground">
                          {value.toFixed(1)}% of initial MRR retained
                        </p>
                        <p className="text-muted-foreground">{bucket.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
        <LegendSwatch className="bg-emerald-500/80" label="≥ 120%" />
        <LegendSwatch className="bg-emerald-500/60" label="110 – 120%" />
        <LegendSwatch className="bg-emerald-500/35" label="100 – 110%" />
        <LegendSwatch className="bg-amber-500/35" label="95 – 100%" />
        <LegendSwatch className="bg-orange-500/40" label="85 – 95%" />
        <LegendSwatch className="bg-red-500/40" label="< 85%" />
      </div>
    </div>
  )
}

function LegendSwatch({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("inline-block h-3 w-5 rounded-sm", className)} />
      {label}
    </span>
  )
}
