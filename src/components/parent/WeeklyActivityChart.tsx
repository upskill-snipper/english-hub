'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// TODO: replace with Supabase — weekly activity aggregated server-side
export interface WeeklyActivityPoint {
  label: string
  minutes: number
}

export interface WeeklyActivityChartProps {
  title?: string
  description?: string
  data: WeeklyActivityPoint[]
}

function formatMinutes(minutes: number): string {
  if (minutes <= 0) return '0m'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

export function WeeklyActivityChart({
  title = 'Weekly Activity',
  description = 'Time spent learning each week',
  data,
}: WeeklyActivityChartProps) {
  const hasData = data.length > 0
  const max = hasData ? Math.max(...data.map((d) => d.minutes), 1) : 1
  const totalMinutes = data.reduce((acc, d) => acc + d.minutes, 0)
  const averageMinutes = hasData ? Math.round(totalMinutes / data.length) : 0

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Avg / week</p>
            <p className="text-sm font-bold text-foreground">
              {formatMinutes(averageMinutes)}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!hasData ? (
          <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
            No activity recorded yet.
          </div>
        ) : (
          <div className="flex h-40 items-end gap-2">
            {data.map((point, index) => {
              const pct = Math.round((point.minutes / max) * 100)
              const height = Math.max(pct, 3)
              return (
                <div
                  key={`${point.label}-${index}`}
                  className="group flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className="relative flex w-full flex-1 items-end"
                    aria-label={`${point.label}: ${formatMinutes(point.minutes)}`}
                  >
                    <div
                      className="w-full rounded-t-md border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20"
                      style={{ height: `${height}%` }}
                    >
                      <div className="h-1 w-full rounded-t-md bg-primary/60" />
                    </div>
                  </div>
                  <span className="truncate text-[10px] font-medium text-muted-foreground">
                    {point.label}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {hasData && (
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            <span>Total: {formatMinutes(totalMinutes)}</span>
            <span>Peak: {formatMinutes(max)}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
