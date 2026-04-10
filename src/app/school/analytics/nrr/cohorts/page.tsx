"use client"

import { useMemo } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Grid3x3 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CohortHeatmap } from "@/components/analytics/CohortHeatmap"
import {
  averageRetentionAtAge,
  cohortsToCSV,
  generateCohorts,
} from "@/lib/analytics/cohorts"
import { formatPct } from "@/lib/analytics/nrr"

export default function CohortsPage() {
  const cohorts = useMemo(() => generateCohorts(), [])

  const summary = useMemo(() => {
    const ages = [1, 3, 6, 12]
    return ages
      .map((a) => ({
        age: a,
        retention: averageRetentionAtAge(cohorts, a),
      }))
      .filter(
        (s): s is { age: number; retention: number } => s.retention !== null,
      )
  }, [cohorts])

  function handleExport() {
    if (typeof window === "undefined") return
    const csv = cohortsToCSV(cohorts)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `english-hub-cohorts-${new Date().toISOString().slice(0, 10)}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="text-foreground">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="gap-1.5">
              <Link href="/school/analytics/nrr">
                <ArrowLeft className="h-4 w-4" />
                NRR Dashboard
              </Link>
            </Button>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <Grid3x3 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Cohort Retention Heatmap
                </h1>
                <p className="text-sm text-muted-foreground">
                  Revenue retained by signup cohort, month over month
                </p>
              </div>
            </div>
          </div>

          <Button
            size="sm"
            className="gap-1.5 bg-emerald-500 text-white hover:bg-emerald-600"
            onClick={handleExport}
          >
            <Download className="h-4 w-4" />
            Export for investors
          </Button>
        </div>

        {/* Average retention summary */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {summary.map((s) => (
            <Card key={s.age}>
              <CardContent className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Month {s.age} retention
                </p>
                <p
                  className={`mt-1 text-3xl font-bold tabular-nums ${
                    s.retention >= 100
                      ? "text-emerald-400"
                      : "text-amber-400"
                  }`}
                >
                  {formatPct(s.retention)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Average across all cohorts
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full heatmap */}
        <Card>
          <CardHeader>
            <CardTitle>24-Month Cohort Heatmap</CardTitle>
            <CardDescription>
              Each row is a monthly signup cohort. Columns show how much of the
              cohort&apos;s initial MRR is retained N months later. Values above
              100% indicate net expansion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CohortHeatmap table={cohorts} maxMonthsShown={cohorts.maxAge} />
          </CardContent>
        </Card>

        {/* How to read it */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">How to read this chart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">M0</span> is the
              signup month, always 100%. Columns to the right track what
              happens to each cohort as time passes.
            </p>
            <p>
              <span className="font-medium text-emerald-400">
                Green cells above 100%
              </span>{" "}
              mean expansion outpaces churn — the cohort is now paying more
              than it did at signup.
            </p>
            <p>
              <span className="font-medium text-amber-400">Amber</span> and
              <span className="font-medium text-red-400"> red cells</span>{" "}
              indicate contraction or churn exceeding expansion for that cohort
              at that age.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
