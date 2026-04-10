// ─── MRR Movement Types and Mock Data Generator ─────────────────────────────
//
// Generates ~24 months of synthetic subscription movement data for the
// Net Revenue Retention dashboard. Movement types follow standard SaaS
// taxonomy:
//
//  - new        : brand-new customer MRR (does not contribute to NRR)
//  - expansion  : additional seats / usage from existing customers
//  - upgrade    : existing customer moves to a higher plan tier
//  - contraction: existing customer removes seats / usage (downgrade in size)
//  - downgrade  : existing customer moves to a lower plan tier
//  - churn      : existing customer cancels entirely
//  - reactivation: previously churned customer returns
//
// All values are expressed in GBP monthly recurring revenue.

export type MovementType =
  | "new"
  | "expansion"
  | "upgrade"
  | "contraction"
  | "downgrade"
  | "churn"
  | "reactivation"

export interface MRRMovement {
  id: string
  month: string // YYYY-MM
  type: MovementType
  amount: number // positive GBP number (direction is implied by type)
  customerId: string
  customerName: string
  plan: "Starter" | "Growth" | "School" | "District"
}

export interface MonthlyMRR {
  month: string // YYYY-MM
  label: string // "Apr 2024"
  startingMRR: number
  newMRR: number
  expansionMRR: number
  upgradeMRR: number
  contractionMRR: number
  downgradeMRR: number
  churnMRR: number
  reactivationMRR: number
  endingMRR: number
  customers: number
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function monthKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
}

function monthLabel(d: Date): string {
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" })
}

// Deterministic PRNG so results are stable between reloads.
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

const CUSTOMER_NAMES = [
  "Ashdown Secondary",
  "Brookfield Academy",
  "Cedar Park School",
  "Dalesbury College",
  "Eastview Comprehensive",
  "Fernhill Grammar",
  "Glenwood High",
  "Harrowfield Trust",
  "Ingleton Academy",
  "Juniper Lane School",
  "Kingsbridge College",
  "Larkmead Secondary",
  "Millbank Academy",
  "Northgate High",
  "Oakridge Trust",
  "Priory Park School",
  "Queensmere College",
  "Redhill Academy",
  "Saxonvale School",
  "Thornhill Grammar",
  "Upland Secondary",
  "Vineyard College",
  "Westmere Academy",
  "Yorkgate School",
]

const PLANS: MRRMovement["plan"][] = ["Starter", "Growth", "School", "District"]

// ── Generator ────────────────────────────────────────────────────────────────

/**
 * Generates 24 months of synthetic subscription movement data ending at
 * the given anchor month. Tuned to produce NRR around 112% with healthy
 * expansion and modest, realistic churn.
 */
export function generateMRRMovements(
  anchor: Date = new Date(2026, 3, 1), // Apr 2026
  monthCount = 24,
): { movements: MRRMovement[]; monthly: MonthlyMRR[] } {
  const rng = mulberry32(20260410)
  const movements: MRRMovement[] = []
  const monthly: MonthlyMRR[] = []

  // Seed the book with an initial customer base.
  let startingMRR = 42_000 // GBP / month
  let customerCount = 48

  for (let i = monthCount - 1; i >= 0; i--) {
    const d = new Date(anchor.getFullYear(), anchor.getMonth() - i, 1)
    const mk = monthKey(d)

    // Growth cadence: new MRR trends upward over time.
    const newMRR = Math.round(3_200 + (monthCount - i) * 140 + rng() * 1_800)
    const newCustomers = 3 + Math.floor(rng() * 4)

    // Expansion ~ 10-13% of starting MRR (seats + usage).
    const expansionMRR = Math.round(startingMRR * (0.10 + rng() * 0.03))

    // Upgrade ~ 4-6% of starting MRR (plan-tier moves).
    const upgradeMRR = Math.round(startingMRR * (0.04 + rng() * 0.02))

    // Contraction ~ 1.0-2.0% of starting MRR.
    const contractionMRR = Math.round(startingMRR * (0.010 + rng() * 0.010))

    // Downgrade ~ 0.4-1.0% of starting MRR.
    const downgradeMRR = Math.round(startingMRR * (0.004 + rng() * 0.006))

    // Gross revenue churn ~ 1.5-2.5% (healthy for SMB/education SaaS).
    const churnMRR = Math.round(startingMRR * (0.015 + rng() * 0.010))

    // Reactivations are small but non-zero.
    const reactivationMRR = Math.round(startingMRR * (0.003 + rng() * 0.003))

    const endingMRR =
      startingMRR +
      newMRR +
      expansionMRR +
      upgradeMRR +
      reactivationMRR -
      contractionMRR -
      downgradeMRR -
      churnMRR

    // Fabricate individual movement rows (sampled, not exhaustive).
    const addMovements = (
      type: MovementType,
      totalAmount: number,
      count: number,
    ) => {
      if (totalAmount <= 0 || count <= 0) return
      const base = totalAmount / count
      for (let k = 0; k < count; k++) {
        const jitter = 0.6 + rng() * 0.8
        const amt = Math.max(50, Math.round(base * jitter))
        movements.push({
          id: `${mk}-${type}-${k}`,
          month: mk,
          type,
          amount: amt,
          customerId: `cust-${Math.floor(rng() * 9_999)}`,
          customerName:
            CUSTOMER_NAMES[Math.floor(rng() * CUSTOMER_NAMES.length)],
          plan: PLANS[Math.floor(rng() * PLANS.length)],
        })
      }
    }

    addMovements("new", newMRR, newCustomers)
    addMovements("expansion", expansionMRR, 5)
    addMovements("upgrade", upgradeMRR, 2)
    addMovements("contraction", contractionMRR, 2)
    addMovements("downgrade", downgradeMRR, 1)
    addMovements("churn", churnMRR, 2)
    addMovements("reactivation", reactivationMRR, 1)

    const churnedCustomers = 1 + Math.floor(rng() * 2)
    const nextCustomerCount = customerCount + newCustomers - churnedCustomers

    monthly.push({
      month: mk,
      label: monthLabel(d),
      startingMRR,
      newMRR,
      expansionMRR,
      upgradeMRR,
      contractionMRR,
      downgradeMRR,
      churnMRR,
      reactivationMRR,
      endingMRR,
      customers: customerCount,
    })

    startingMRR = endingMRR
    customerCount = nextCustomerCount
  }

  return { movements, monthly }
}

/** Total GBP of movements of a given type across all months. */
export function totalByType(
  movements: MRRMovement[],
  type: MovementType,
): number {
  return movements
    .filter((m) => m.type === type)
    .reduce((sum, m) => sum + m.amount, 0)
}

/** Movements bucketed by month and type. */
export function movementsByMonth(
  movements: MRRMovement[],
): Record<string, Record<MovementType, number>> {
  const out: Record<string, Record<MovementType, number>> = {}
  for (const m of movements) {
    if (!out[m.month]) {
      out[m.month] = {
        new: 0,
        expansion: 0,
        upgrade: 0,
        contraction: 0,
        downgrade: 0,
        churn: 0,
        reactivation: 0,
      }
    }
    out[m.month][m.type] += m.amount
  }
  return out
}
