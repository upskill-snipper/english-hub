// ─── CEFR cohort aggregation (server-side) ────────────────────────────────────
// Shared read/aggregate layer over the append-only `progress_cefr` table
// (migration 20260516_progress_cefr.sql) for the teacher and parent
// dashboards. Pure aggregation — callers (the /api/school/cefr and
// /api/parent/cefr routes) own auth, role checks and which user ids are
// in scope; this module only turns rows into dashboard-ready summaries.
//
// CRITICAL — DEGRADES GRACEFULLY BEFORE THE MIGRATION IS APPLIED.
// progress_cefr is a REVIEWABLE migration that a maintainer applies to
// Supabase manually. Until then the table does not exist. Every read
// here detects the "relation does not exist" / missing-from-schema-cache
// error and returns `available: false` with a zeroed summary, so the
// dashboards render a clean "not enabled yet" state instead of 500ing.
// The moment the migration is applied this starts returning real data
// with no code change or redeploy required.
// ──────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'
import type { EALCategory } from './types'
import { CEFR_PRODUCT_BANDS, type CEFRBand, type SkillBreakdown } from './cefr'

// ─── Types ───────────────────────────────────────────────────────────────────

/** One row of the append-only progress_cefr table. */
interface CEFRRow {
  user_id: string
  cefr_level: string
  band: string
  composite_pct: number | null
  confidence: number | null
  skills: SkillBreakdown[] | null
  taken_at: string
}

export interface LatestPlacement {
  userId: string
  /** Honest ladder level (A1..C2). */
  level: string
  /** Product band (A2..C1). */
  band: CEFRBand
  compositePct: number | null
  confidence: number | null
  takenAt: string
}

export interface CEFRCohortSummary {
  /**
   * false ⇒ the progress_cefr table does not exist yet (migration not
   * applied). The dashboard should show a "will activate once enabled"
   * notice rather than an empty-data state.
   */
  available: boolean
  /** Distinct learners with ≥1 completed placement. */
  learnersAssessed: number
  /** Total placement attempts across the cohort (append-only history). */
  totalPlacements: number
  /** Count of learners whose LATEST placement sits in each band. */
  bandDistribution: Record<CEFRBand, number>
  /** Mean per-skill % across each learner's latest placement. */
  skillAverages: { skill: EALCategory; averagePct: number; sampleSize: number }[]
  /** Each learner's most recent placement (newest first). */
  latestByUser: LatestPlacement[]
  /** Monthly cohort trend: mean band rank (A2=0 … C1=3) + volume. */
  trend: { month: string; averageBandRank: number; placements: number }[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function emptyBandDistribution(): Record<CEFRBand, number> {
  return CEFR_PRODUCT_BANDS.reduce(
    (acc, b) => {
      acc[b] = 0
      return acc
    },
    {} as Record<CEFRBand, number>,
  )
}

/** Zeroed summary used both for "no data" and "table not migrated". */
function emptySummary(available: boolean): CEFRCohortSummary {
  return {
    available,
    learnersAssessed: 0,
    totalPlacements: 0,
    bandDistribution: emptyBandDistribution(),
    skillAverages: [],
    latestByUser: [],
    trend: [],
  }
}

/**
 * True when a Supabase error means "progress_cefr does not exist yet"
 * (migration not applied). Postgres raises 42P01; PostgREST surfaces it
 * as PGRST205 (table missing from schema cache) or a "does not exist"
 * message. We treat all of these as "not enabled yet", never a 500.
 */
function isMissingTableError(
  error: {
    code?: string
    message?: string
  } | null,
): boolean {
  if (!error) return false
  if (error.code === '42P01' || error.code === 'PGRST205') return true
  const msg = (error.message ?? '').toLowerCase()
  return (
    msg.includes('does not exist') ||
    msg.includes('could not find the table') ||
    msg.includes('schema cache')
  )
}

function coerceBand(raw: string): CEFRBand {
  return (CEFR_PRODUCT_BANDS as readonly string[]).includes(raw) ? (raw as CEFRBand) : 'A2'
}

/** Product-band rank: A2→0, B1→1, B2→2, C1→3. */
function bandRank(band: CEFRBand): number {
  const i = CEFR_PRODUCT_BANDS.indexOf(band)
  return i < 0 ? 0 : i
}

// ─── Main aggregation ─────────────────────────────────────────────────────────

/**
 * Summarise CEFR placements for a set of learner ids (already scoped &
 * authorised by the caller). Pass a SERVICE-ROLE client — the caller is
 * reading across other users' rows, which RLS only permits for
 * service_role (mirrors how /api/school/analytics reads module_progress).
 *
 * Never throws on a missing table: returns `available: false`.
 */
export async function summariseCEFRCohort(
  serviceClient: SupabaseClient,
  userIds: string[],
): Promise<CEFRCohortSummary> {
  if (userIds.length === 0) {
    // Table may well exist; there's simply no one in scope.
    return emptySummary(true)
  }

  const { data, error } = await serviceClient
    .from('progress_cefr')
    .select('user_id, cefr_level, band, composite_pct, confidence, skills, taken_at')
    .in('user_id', userIds)
    .order('taken_at', { ascending: false })

  if (error) {
    if (isMissingTableError(error)) {
      return emptySummary(false)
    }
    // Real, unexpected error — surface as empty-but-available so the
    // dashboard stays up; the caller logs the error.
    throw new Error(`progress_cefr read failed: ${error.message}`)
  }

  const rows = (data ?? []) as CEFRRow[]
  if (rows.length === 0) return emptySummary(true)

  // Rows are newest-first; the first time we see a user is their latest.
  const latestByUserMap = new Map<string, CEFRRow>()
  for (const r of rows) {
    if (!latestByUserMap.has(r.user_id)) latestByUserMap.set(r.user_id, r)
  }

  const bandDistribution = emptyBandDistribution()
  const latestByUser: LatestPlacement[] = []
  const skillTotals = new Map<EALCategory, { sum: number; n: number }>()

  for (const r of latestByUserMap.values()) {
    const band = coerceBand(r.band)
    bandDistribution[band] += 1
    latestByUser.push({
      userId: r.user_id,
      level: r.cefr_level,
      band,
      compositePct: r.composite_pct,
      confidence: r.confidence,
      takenAt: r.taken_at,
    })
    for (const s of r.skills ?? []) {
      const cur = skillTotals.get(s.skill) ?? { sum: 0, n: 0 }
      cur.sum += s.percentage
      cur.n += 1
      skillTotals.set(s.skill, cur)
    }
  }

  latestByUser.sort((a, b) => b.takenAt.localeCompare(a.takenAt))

  const skillAverages = [...skillTotals.entries()]
    .map(([skill, { sum, n }]) => ({
      skill,
      averagePct: n > 0 ? Math.round(sum / n) : 0,
      sampleSize: n,
    }))
    .sort((a, b) => a.averagePct - b.averagePct)

  // Monthly trend across ALL placements (not just latest).
  const monthMap = new Map<string, { rankSum: number; n: number }>()
  for (const r of rows) {
    const month = r.taken_at.slice(0, 7) // YYYY-MM
    const cur = monthMap.get(month) ?? { rankSum: 0, n: 0 }
    cur.rankSum += bandRank(coerceBand(r.band))
    cur.n += 1
    monthMap.set(month, cur)
  }
  const trend = [...monthMap.entries()]
    .map(([month, { rankSum, n }]) => ({
      month,
      averageBandRank: n > 0 ? Math.round((rankSum / n) * 100) / 100 : 0,
      placements: n,
    }))
    .sort((a, b) => a.month.localeCompare(b.month))

  return {
    available: true,
    learnersAssessed: latestByUserMap.size,
    totalPlacements: rows.length,
    bandDistribution,
    skillAverages,
    latestByUser,
    trend,
  }
}

/** Human-readable band labels for dashboard rendering (EN). */
export const CEFR_BAND_DESCRIPTION: Record<CEFRBand, string> = {
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Intermediate',
  C1: 'Advanced',
}
