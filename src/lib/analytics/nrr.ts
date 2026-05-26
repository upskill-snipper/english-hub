// ─── Net Revenue Retention Calculation ──────────────────────────────────────
//
// NRR measures the percentage of recurring revenue retained from existing
// customers over a period, including expansion and upgrades, after
// subtracting contraction, downgrades, and churn.
//
//   NRR = (starting_mrr + expansion + upgrade - contraction - downgrade - churn)
//         / starting_mrr
//
// NRR is calculated against the *existing customer* base only - new MRR is
// explicitly excluded. Values > 100% indicate net expansion ("negative net
// churn"), which is the key investor signal.

import { generateMRRMovements, type MonthlyMRR } from './mrr-movements'

export interface NRRPoint {
  month: string
  label: string
  nrr: number // percentage, e.g. 112.3
  grossRetention: number // percentage - excludes expansion/upgrade
  startingMRR: number
  endingMRR: number
}

export interface NRRSummary {
  headlineNRR: number
  previousNRR: number
  momChange: number
  grossRetention: number
  trailing12NRR: number
  points: NRRPoint[]
  monthly: MonthlyMRR[]
}

/**
 * Calculates NRR for a single month from its movement row.
 * Returns 0 if starting MRR is 0 to avoid division errors.
 */
export function calculateNRR(row: MonthlyMRR): number {
  if (row.startingMRR <= 0) return 0
  const retained =
    row.startingMRR +
    row.expansionMRR +
    row.upgradeMRR -
    row.contractionMRR -
    row.downgradeMRR -
    row.churnMRR
  return (retained / row.startingMRR) * 100
}

/**
 * Gross Revenue Retention: excludes expansion and upgrades.
 * Measures pure retention - customers who stayed with what they had.
 */
export function calculateGRR(row: MonthlyMRR): number {
  if (row.startingMRR <= 0) return 0
  const retained = row.startingMRR - row.contractionMRR - row.downgradeMRR - row.churnMRR
  return (retained / row.startingMRR) * 100
}

/**
 * Trailing-N-month NRR calculated as a compound product of monthly NRR.
 * This gives a more robust view than a simple average.
 */
export function trailingNRR(points: NRRPoint[], months = 12): number {
  const tail = points.slice(-months)
  if (tail.length === 0) return 0
  // Compound: NRR_12 = product(NRR_i / 100) ^ (12 / n) → normalised to pct
  const product = tail.reduce((acc, p) => acc * (p.nrr / 100), 1)
  const normalised = Math.pow(product, months / tail.length)
  return normalised * 100
}

/**
 * Full NRR summary suitable for the investor dashboard.
 * Generates the synthetic data and wraps it with derived stats.
 */
export function getNRRSummary(anchor?: Date, monthCount = 24): NRRSummary {
  const { monthly } = generateMRRMovements(anchor, monthCount)

  const points: NRRPoint[] = monthly.map((row) => ({
    month: row.month,
    label: row.label,
    nrr: calculateNRR(row),
    grossRetention: calculateGRR(row),
    startingMRR: row.startingMRR,
    endingMRR: row.endingMRR,
  }))

  const headline = points[points.length - 1]
  const previous = points[points.length - 2] ?? headline
  const trailing = trailingNRR(points, 12)

  return {
    headlineNRR: headline?.nrr ?? 0,
    previousNRR: previous?.nrr ?? 0,
    momChange: (headline?.nrr ?? 0) - (previous?.nrr ?? 0),
    grossRetention: headline?.grossRetention ?? 0,
    trailing12NRR: trailing,
    points,
    monthly,
  }
}

/** Formats a percentage to one decimal place with a trailing %. */
export function formatPct(value: number, digits = 1): string {
  return `${value.toFixed(digits)}%`
}

/** Formats a GBP value as a compact currency string. */
export function formatGBP(value: number, compact = false): string {
  if (compact) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value)
  }
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Converts the NRR summary to CSV string suitable for investor export.
 * Columns: month, starting_mrr, new, expansion, upgrade, contraction,
 * downgrade, churn, ending_mrr, nrr, grr.
 */
export function nrrSummaryToCSV(summary: NRRSummary): string {
  const header = [
    'month',
    'starting_mrr_gbp',
    'new_mrr_gbp',
    'expansion_mrr_gbp',
    'upgrade_mrr_gbp',
    'contraction_mrr_gbp',
    'downgrade_mrr_gbp',
    'churn_mrr_gbp',
    'reactivation_mrr_gbp',
    'ending_mrr_gbp',
    'customers',
    'nrr_pct',
    'grr_pct',
  ].join(',')

  const rows = summary.monthly.map((row) => {
    const nrr = calculateNRR(row).toFixed(2)
    const grr = calculateGRR(row).toFixed(2)
    return [
      row.month,
      row.startingMRR,
      row.newMRR,
      row.expansionMRR,
      row.upgradeMRR,
      row.contractionMRR,
      row.downgradeMRR,
      row.churnMRR,
      row.reactivationMRR,
      row.endingMRR,
      row.customers,
      nrr,
      grr,
    ].join(',')
  })

  return [header, ...rows].join('\n')
}

/**
 * Triggers a browser download of an NRR CSV export. Must be called from
 * client code (uses `window`/`document`).
 */
export function downloadNRRCsv(summary: NRRSummary, filename?: string): void {
  if (typeof window === 'undefined') return
  const csv = nrrSummaryToCSV(summary)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const name = filename ?? `english-hub-nrr-${new Date().toISOString().slice(0, 10)}.csv`
  link.href = url
  link.download = name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
