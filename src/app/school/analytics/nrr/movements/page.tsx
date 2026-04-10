"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Wallet } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MRRWaterfallChart } from "@/components/analytics/MRRWaterfallChart"
import { getNRRSummary, formatGBP } from "@/lib/analytics/nrr"
import { cn } from "@/lib/utils"

type MovementCategory =
  | "new"
  | "expansion"
  | "upgrade"
  | "contraction"
  | "downgrade"
  | "churn"

const CATEGORY_META: Record<
  MovementCategory,
  { label: string; colour: string; positive: boolean }
> = {
  new: { label: "New", colour: "bg-emerald-500", positive: true },
  expansion: { label: "Expansion", colour: "bg-emerald-400", positive: true },
  upgrade: { label: "Upgrade", colour: "bg-emerald-300", positive: true },
  contraction: {
    label: "Contraction",
    colour: "bg-orange-400",
    positive: false,
  },
  downgrade: { label: "Downgrade", colour: "bg-orange-500", positive: false },
  churn: { label: "Churn", colour: "bg-red-500", positive: false },
}

function movementValue(
  m: ReturnType<typeof getNRRSummary>["monthly"][number],
  cat: MovementCategory,
): number {
  switch (cat) {
    case "new":
      return m.newMRR
    case "expansion":
      return m.expansionMRR
    case "upgrade":
      return m.upgradeMRR
    case "contraction":
      return m.contractionMRR
    case "downgrade":
      return m.downgradeMRR
    case "churn":
      return m.churnMRR
  }
}

export default function MovementsPage() {
  const summary = useMemo(() => getNRRSummary(), [])
  const [selectedMonth, setSelectedMonth] = useState<string>(
    summary.monthly[summary.monthly.length - 1]?.month ?? "",
  )

  const month = useMemo(
    () =>
      summary.monthly.find((m) => m.month === selectedMonth) ??
      summary.monthly[summary.monthly.length - 1],
    [summary, selectedMonth],
  )

  const categories: MovementCategory[] = [
    "new",
    "expansion",
    "upgrade",
    "contraction",
    "downgrade",
    "churn",
  ]

  // Find the max value across all months and categories, to scale bars.
  const globalMax = useMemo(() => {
    let max = 0
    for (const m of summary.monthly) {
      for (const c of categories) {
        const v = movementValue(m, c)
        if (v > max) max = v
      }
    }
    return max || 1
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary])

  function handleExport() {
    if (typeof window === "undefined") return
    const header = [
      "month",
      "new_mrr_gbp",
      "expansion_mrr_gbp",
      "upgrade_mrr_gbp",
      "contraction_mrr_gbp",
      "downgrade_mrr_gbp",
      "churn_mrr_gbp",
      "reactivation_mrr_gbp",
      "net_movement_gbp",
    ].join(",")
    const rows = summary.monthly.map((m) => {
      const net =
        m.newMRR +
        m.expansionMRR +
        m.upgradeMRR +
        m.reactivationMRR -
        m.contractionMRR -
        m.downgradeMRR -
        m.churnMRR
      return [
        m.month,
        m.newMRR,
        m.expansionMRR,
        m.upgradeMRR,
        m.contractionMRR,
        m.downgradeMRR,
        m.churnMRR,
        m.reactivationMRR,
        net,
      ].join(",")
    })
    const csv = [header, ...rows].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `english-hub-movements-${new Date().toISOString().slice(0, 10)}.csv`
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
                <Wallet className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  MRR Movements
                </h1>
                <p className="text-sm text-muted-foreground">
                  New, expansion, contraction, and churn by month
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

        {/* Waterfall */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>Monthly Waterfall</CardTitle>
              <CardDescription>
                How MRR moved between starting and ending balance
              </CardDescription>
            </div>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground"
            >
              {summary.monthly
                .slice()
                .reverse()
                .map((m) => (
                  <option key={m.month} value={m.month}>
                    {m.label}
                  </option>
                ))}
            </select>
          </CardHeader>
          <CardContent>
            {month && <MRRWaterfallChart month={month} />}
          </CardContent>
        </Card>

        {/* Movement timeline table */}
        <Card>
          <CardHeader>
            <CardTitle>24-Month Movement Tracker</CardTitle>
            <CardDescription>
              GBP per month, broken down by movement type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] text-xs">
                <thead>
                  <tr className="border-b border-border/60 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 pr-3 text-left font-medium">Month</th>
                    {categories.map((c) => (
                      <th
                        key={c}
                        className="px-2 py-2 text-right font-medium"
                      >
                        {CATEGORY_META[c].label}
                      </th>
                    ))}
                    <th className="pl-2 py-2 text-right font-medium">Net</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {summary.monthly
                    .slice()
                    .reverse()
                    .map((m) => {
                      const net =
                        m.newMRR +
                        m.expansionMRR +
                        m.upgradeMRR +
                        m.reactivationMRR -
                        m.contractionMRR -
                        m.downgradeMRR -
                        m.churnMRR
                      return (
                        <tr
                          key={m.month}
                          className={cn(
                            "hover:bg-muted/30 transition-colors cursor-pointer",
                            selectedMonth === m.month && "bg-muted/40",
                          )}
                          onClick={() => setSelectedMonth(m.month)}
                        >
                          <td className="py-2 pr-3 font-medium">{m.label}</td>
                          {categories.map((c) => {
                            const v = movementValue(m, c)
                            const pct = (v / globalMax) * 100
                            const meta = CATEGORY_META[c]
                            return (
                              <td
                                key={c}
                                className="px-2 py-2 text-right tabular-nums"
                              >
                                <div className="flex items-center justify-end gap-2">
                                  <div className="relative h-1.5 w-10 rounded-full bg-muted/40">
                                    <div
                                      className={cn(
                                        "absolute inset-y-0 left-0 rounded-full",
                                        meta.colour,
                                      )}
                                      style={{ width: `${pct}%` }}
                                    />
                                  </div>
                                  <span
                                    className={cn(
                                      "text-[11px]",
                                      meta.positive
                                        ? "text-emerald-300"
                                        : "text-red-300",
                                    )}
                                  >
                                    {meta.positive ? "+" : "-"}
                                    {formatGBP(v, true)}
                                  </span>
                                </div>
                              </td>
                            )
                          })}
                          <td
                            className={cn(
                              "pl-2 py-2 text-right font-semibold tabular-nums",
                              net >= 0 ? "text-emerald-400" : "text-red-400",
                            )}
                          >
                            {net >= 0 ? "+" : "-"}
                            {formatGBP(Math.abs(net), true)}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
