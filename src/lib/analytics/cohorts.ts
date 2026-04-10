// ─── Cohort Analysis Helpers ────────────────────────────────────────────────
//
// A cohort is the group of customers that signed up in a given month.
// For each cohort we track the percentage of its initial MRR that is still
// retained N months later. Expansion can push retention above 100%, which is
// the "net dollar retention" story investors want to see.

import { generateMRRMovements } from "./mrr-movements"

export interface CohortRow {
  cohortMonth: string // YYYY-MM, the month the cohort signed up
  label: string // "Apr 2024"
  initialMRR: number
  initialCustomers: number
  // retained[i] = % of initial MRR retained at month (cohortMonth + i).
  // retained[0] is always 100.
  retained: number[]
}

export interface CohortTable {
  rows: CohortRow[]
  maxAge: number
}

// Deterministic PRNG shared with mrr-movements so cohort story is consistent.
function mulberry32(seed: number) {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Generates a cohort retention table for the same ~24 month window as the
 * MRR movement data. Retention curves trend slightly upward over time thanks
 * to expansion revenue, with a small short-term dip for early-stage churn.
 */
export function generateCohorts(
  anchor: Date = new Date(2026, 3, 1),
  monthCount = 24,
): CohortTable {
  const { monthly } = generateMRRMovements(anchor, monthCount)
  const rng = mulberry32(20240101)
  const rows: CohortRow[] = []

  for (let i = 0; i < monthly.length; i++) {
    const m = monthly[i]
    const age = monthly.length - 1 - i // how many months of follow-up we can show
    const initialMRR = m.newMRR
    const initialCustomers = Math.max(3, Math.round(initialMRR / 900))

    const retained: number[] = [100]
    let current = 100

    for (let t = 1; t <= age; t++) {
      // Early churn bites harder in the first 3 months.
      const churnRate = t <= 3 ? 0.02 + rng() * 0.012 : 0.008 + rng() * 0.008
      const expansionRate = 0.012 + rng() * 0.014
      current = current * (1 - churnRate) * (1 + expansionRate)
      retained.push(Number(current.toFixed(1)))
    }

    rows.push({
      cohortMonth: m.month,
      label: m.label,
      initialMRR,
      initialCustomers,
      retained,
    })
  }

  return { rows, maxAge: monthly.length - 1 }
}

/**
 * Picks the colour intensity for a retention cell. Values are bucketed into
 * ranges representing strong expansion, healthy retention, and shrinkage.
 * Returns a Tailwind-compatible class fragment (see CohortHeatmap).
 */
export function retentionBucket(value: number): {
  bg: string
  text: string
  label: string
} {
  if (value >= 120)
    return { bg: "bg-emerald-500/80", text: "text-white", label: "Strong expansion" }
  if (value >= 110)
    return { bg: "bg-emerald-500/60", text: "text-white", label: "Net expansion" }
  if (value >= 100)
    return { bg: "bg-emerald-500/35", text: "text-emerald-100", label: "Above par" }
  if (value >= 95)
    return { bg: "bg-amber-500/35", text: "text-amber-100", label: "Flat" }
  if (value >= 85)
    return { bg: "bg-orange-500/40", text: "text-orange-100", label: "Shrinking" }
  return { bg: "bg-red-500/40", text: "text-red-100", label: "High churn" }
}

/** Average retention across all cohorts at a given age (month offset). */
export function averageRetentionAtAge(
  table: CohortTable,
  age: number,
): number | null {
  const points = table.rows
    .map((row) => row.retained[age])
    .filter((v): v is number => typeof v === "number")
  if (points.length === 0) return null
  return points.reduce((s, v) => s + v, 0) / points.length
}

/**
 * Serialises a cohort table to CSV. First column is the cohort label,
 * subsequent columns are month offsets (M0, M1, ...).
 */
export function cohortsToCSV(table: CohortTable): string {
  const header = [
    "cohort",
    "initial_mrr_gbp",
    "initial_customers",
    ...Array.from({ length: table.maxAge + 1 }, (_, i) => `M${i}`),
  ].join(",")

  const lines = table.rows.map((row) => {
    const cells: (string | number)[] = [
      row.cohortMonth,
      row.initialMRR,
      row.initialCustomers,
    ]
    for (let i = 0; i <= table.maxAge; i++) {
      const v = row.retained[i]
      cells.push(v === undefined ? "" : v.toFixed(1))
    }
    return cells.join(",")
  })

  return [header, ...lines].join("\n")
}
