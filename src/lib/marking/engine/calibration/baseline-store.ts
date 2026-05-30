// ─── Calibration Baseline Store ────────────────────────────────────────────
//
// The persistence seam between the calibration_baselines table (Stage 5) and
// the engine's in-memory CalibrationBaseline shape (gate.ts). Two jobs:
//
//   • loadPromotedBaseline(areaKey) — read the live (promoted) baseline for a
//     marking area and map it to a CalibrationBaseline the G-LIVE gate can reason
//     over. This is what finally makes loadCurrentCalibrationBaseline return a
//     real baseline instead of null.
//   • persistBaseline(...) — write a measured/promoted run, demoting the prior
//     promoted row for the area when promoting a new one (at most one live
//     baseline per area).
//
// Server-only: uses the service-role Supabase client (the calibration loop runs
// from the admin route only). Pre-migration safe: a missing table degrades to
// null / a thrown persist error, never a crash on read.
//
// Supabase generated types don't know about calibration_baselines yet (Prisma
// client not regenerated), so rows are cast through `unknown` to the shapes the
// migration guarantees.
// ───────────────────────────────────────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import type { CalibrationBaseline, PriorBaselineRef } from './gate'
import type { CalibrationReport } from './metrics'

/** A row of calibration_baselines, as selected. */
interface BaselineRow {
  id: string
  area_key: string
  n: number
  within_half_band: number
  per_band_coverage: Record<string, number> | null
  report: CalibrationReport | null
  prior_baseline_id: string | null
  status: string
  gate_passed: boolean
}

const SELECT_COLUMNS =
  'id, area_key, n, within_half_band, per_band_coverage, report,' +
  ' prior_baseline_id, status, gate_passed'

/**
 * Coerce a string-keyed coverage map (jsonb) into the numeric-keyed
 * Record<number, number> the gate expects. Non-numeric keys are dropped.
 */
function toNumberKeyed(raw: Record<string, number> | null): Record<number, number> {
  const out: Record<number, number> = {}
  if (!raw) return out
  for (const [k, v] of Object.entries(raw)) {
    const n = Number(k)
    if (Number.isFinite(n) && typeof v === 'number') out[n] = v
  }
  return out
}

/**
 * Map a DB row to the in-memory CalibrationBaseline. `priorRef` is the resolved
 * prior-baseline reference (or null for the first promotion), looked up
 * separately so the gate's regression check has the prior's headline number.
 */
function rowToBaseline(row: BaselineRow, priorRef: PriorBaselineRef | null): CalibrationBaseline {
  return {
    id: row.id,
    n: row.n,
    withinHalfBand: row.within_half_band,
    perBandCoverage: toNumberKeyed(row.per_band_coverage),
    // The gate treats `report` as authoritative; default to a minimal report
    // if a legacy row somehow lacks one (never recomputed here).
    report: (row.report as CalibrationReport) ?? {
      count: row.n,
      exactBandAgreement: 0,
      withinHalfBandAgreement: row.within_half_band,
      perCriterionCorrelation: [],
    },
    priorBaseline: priorRef,
  }
}

/**
 * Load the live (promoted) calibration baseline for a marking area, or null when
 * none has been promoted. Resolves the prior-baseline reference (one extra read)
 * so the gate's no-regression check has a comparison point.
 *
 * @param areaKey stable area id, e.g. 'ielts:academic:writing-task-2'
 */
export async function loadPromotedBaseline(areaKey: string): Promise<CalibrationBaseline | null> {
  let admin: ReturnType<typeof createServiceRoleClient>
  try {
    admin = createServiceRoleClient()
  } catch {
    return null
  }

  const { data, error } = await admin
    .from('calibration_baselines')
    .select(SELECT_COLUMNS)
    .eq('area_key', areaKey)
    .eq('status', 'promoted')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  // Missing table (pre-migration) or no promoted row → not calibrated (null).
  if (error || !data) return null
  const row = data as unknown as BaselineRow

  // Resolve the prior baseline reference for the regression check, if any.
  let priorRef: PriorBaselineRef | null = null
  if (row.prior_baseline_id) {
    const { data: priorData } = await admin
      .from('calibration_baselines')
      .select('id, within_half_band')
      .eq('id', row.prior_baseline_id)
      .maybeSingle()
    if (priorData) {
      const p = priorData as unknown as { id: string; within_half_band: number }
      priorRef = { id: p.id, withinHalfBand: p.within_half_band }
    }
  }

  return rowToBaseline(row, priorRef)
}

/** Input for persisting a calibration run. */
export interface PersistBaselineInput {
  readonly areaKey: string
  readonly examBoard: string | null
  readonly qualification: string | null
  readonly paper: string | null
  readonly n: number
  readonly withinHalfBand: number
  readonly exactBand: number | null
  // Coverage map keyed by band (IELTS, numeric) OR label (GCSE grade / KS3-EAL
  // level, string). Stored verbatim as jsonb, so both key kinds are accepted.
  readonly perBandCoverage: Readonly<Record<number, number>> | Readonly<Record<string, number>>
  // Full metric report — a band CalibrationReport (IELTS) or an OrdinalReport
  // (GCSE/KS3/EAL). Stored verbatim as jsonb (audit only), so accept either shape.
  readonly report: CalibrationReport | Record<string, unknown>
  readonly priorBaselineId: string | null
  /** True to write as the live baseline (demotes the prior promoted row). */
  readonly promote: boolean
  /** Did assertCalibrationGreen pass? */
  readonly gatePassed: boolean
  /** Per-check pass/fail + messages, for audit. */
  readonly gateDetail: unknown
  readonly createdBy: string | null
}

/** Result of a persist: the new row id and its stored status. */
export interface PersistBaselineResult {
  readonly id: string
  readonly status: 'measured' | 'promoted'
}

/**
 * Persist a calibration run. When `promote` is true, first demotes any existing
 * promoted row for the area (status → 'measured') so at most one live baseline
 * exists per area, then inserts this row as 'promoted'. When false, inserts as
 * 'measured' (recorded for history/audit, not live).
 *
 * Sequential best-effort (PostgREST has no multi-statement transaction): the
 * demote runs before the insert; a failed insert leaves no new promoted row.
 *
 * @throws Error when the insert fails (caller surfaces a 500 / shows the error).
 */
export async function persistBaseline(input: PersistBaselineInput): Promise<PersistBaselineResult> {
  const admin = createServiceRoleClient()
  const status: 'measured' | 'promoted' = input.promote ? 'promoted' : 'measured'

  if (input.promote) {
    // Demote the current promoted baseline for this area (if any) first.
    const { error: demoteErr } = await admin
      .from('calibration_baselines')
      .update({ status: 'measured' })
      .eq('area_key', input.areaKey)
      .eq('status', 'promoted')
    if (demoteErr) {
      throw new Error(`Failed to demote prior baseline: ${demoteErr.message}`)
    }
  }

  // Coverage is stored string-keyed in jsonb.
  const coverageJson: Record<string, number> = {}
  for (const [k, v] of Object.entries(input.perBandCoverage)) coverageJson[k] = v

  const { data, error } = await admin
    .from('calibration_baselines')
    .insert({
      area_key: input.areaKey,
      exam_board: input.examBoard,
      qualification: input.qualification,
      paper: input.paper,
      n: input.n,
      within_half_band: input.withinHalfBand,
      exact_band: input.exactBand,
      per_band_coverage: coverageJson,
      report: input.report,
      prior_baseline_id: input.priorBaselineId,
      status,
      gate_passed: input.gatePassed,
      gate_detail: input.gateDetail,
      created_by: input.createdBy,
    })
    .select('id, status')
    .single()

  if (error || !data) {
    throw new Error(`Failed to persist calibration baseline: ${error?.message ?? 'no row'}`)
  }
  const row = data as unknown as { id: string; status: 'measured' | 'promoted' }
  return { id: row.id, status: row.status }
}

/**
 * Read the id of the current promoted baseline for an area (or null). Used by
 * the run route to set prior_baseline_id on a new promotion.
 */
export async function getPromotedBaselineId(areaKey: string): Promise<string | null> {
  let admin: ReturnType<typeof createServiceRoleClient>
  try {
    admin = createServiceRoleClient()
  } catch {
    return null
  }
  const { data, error } = await admin
    .from('calibration_baselines')
    .select('id')
    .eq('area_key', areaKey)
    .eq('status', 'promoted')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error || !data) return null
  return (data as unknown as { id: string }).id
}
