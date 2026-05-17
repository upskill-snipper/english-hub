// ─── Smart IP — Paid-marker QA: gold-set calibration & inter-marker agreement ─
//
// PURE functions only. No I/O, no network, no `@/...` imports, no Date.now(),
// no Math.random() — every output is a deterministic function of its inputs so
// the API layer and the unit tests share one auditable implementation.
//
// Two QA signals are computed here:
//
//   1. Per-marker GOLD accuracy.  Some queue items are gold: `is_gold=true`
//      with an expert-true `gold_expected` = { mark, grade, ao? } inserted
//      blind into a marker's queue. When that marker APPROVES the item, their
//      `teacher_moderations` decision is compared to `gold_expected`:
//        • mark-level   exact / within ±1 / mean-abs-error  (raw marks)
//        • grade-level  QWK vs gold        (reuses evals/stats.ts — the same
//                                            Art. 15 ordinal-kappa core)
//
//   2. Inter-marker agreement.  Where the SAME logical script
//      (board, paper, question, studied_text) was marked by ≥2 markers, every
//      unordered marker pair on that script contributes a paired observation;
//      we report pairwise exact / within ±1 / QWK across all such pairs.
//
//   3. Drift flags.  A marker is flagged if their overall gold exact-rate is
//      below an absolute floor, OR their most-recent N gold items dropped a
//      configurable margin below their own earlier baseline (regression).
//
// gold_expected is the expert ground truth and is ADMIN-ONLY — these functions
// never travel to a marker; the marker console is a different workspace. The
// only place gold leaves the DB is the admin-gated routes that call this file.
//
// Statistics REUSE: grade-scale agreement (exact/adjacent/QWK/distance) is
// delegated to `evals/stats.ts` (the EU AI Act Art. 15 core) — NOT duplicated.
// Raw-mark exact/±1/MAE are computed here because that core operates on the
// ordinal grade scale, not arbitrary integer mark totals.
// ────────────────────────────────────────────────────────────────────────────

import { exactAgreement as gradeExactAgreement, quadraticWeightedKappa } from '../../../evals/stats'

// ─── QA thresholds (documented, single source of truth) ──────────────────────
//
// Chosen for GCSE/IGCSE English extended-response marking, where examiner
// tolerance is conventionally ±1 mark band and exact agreement on a long-form
// essay is inherently noisy. Tunable via `QaThresholds` per call; these are the
// defaults the scorecard publishes.
//
//   • GOLD_EXACT_MIN      0.55  — ≥55% of approved gold items must hit the
//                                 expert mark EXACTLY. Below ⇒ accuracy flag.
//   • GOLD_WITHIN1_MIN    0.85  — ≥85% must land within ±1 mark of expert.
//                                 ±1 is the accepted marking tolerance, so a
//                                 marker below this is materially miscalibrated.
//   • GOLD_QWK_MIN        0.70  — grade-level QWK vs gold ≥ 0.70 ("substantial"
//                                 agreement on the Landis–Koch scale).
//   • DRIFT_WINDOW        8     — size of the "recent" gold window (last N, by
//                                 moderation time) used for regression checks.
//   • DRIFT_MIN_BASELINE  4     — need ≥4 gold items BEFORE the window to have
//                                 a meaningful earlier baseline to regress from.
//   • DRIFT_DROP          0.15  — flag drift if recent-window exact-rate is
//                                 ≥15 percentage points below the earlier
//                                 baseline exact-rate (sustained regression).
//
// A marker with too few gold items to judge is reported `insufficientData`
// (NOT flagged) — we never fail a marker on noise.
export interface QaThresholds {
  goldExactMin: number
  goldWithin1Min: number
  goldQwkMin: number
  driftWindow: number
  driftMinBaseline: number
  driftDrop: number
}

export const DEFAULT_QA_THRESHOLDS: QaThresholds = {
  goldExactMin: 0.55,
  goldWithin1Min: 0.85,
  goldQwkMin: 0.7,
  driftWindow: 8,
  driftMinBaseline: 4,
  driftDrop: 0.15,
}

/** Minimum approved-gold sample below which a marker is "insufficient data". */
export const MIN_GOLD_FOR_VERDICT = 5

// ─── Input row shapes (denormalised from the frozen schema) ──────────────────
//
// Shaped so the API layer can build them with a single join. `mark` is the raw
// integer mark total; `grade` is the ordinal GCSE grade string (U,1..9).

/** The expert-true answer carried on a gold submission (`gold_expected`). */
export interface GoldExpected {
  mark: number | null
  grade: string | null
  /** Optional per-AO expected marks, AO id → marks. Not scored here yet. */
  ao?: Record<string, number> | null
}

/**
 * One APPROVED gold item: a gold submission joined to the marker's moderation
 * decision on it. Only approved decisions should be passed in (an unapproved
 * gold item has no marker verdict to score).
 */
export interface GoldOutcomeRow {
  submissionId: string
  markerId: string
  markerName: string
  board: string | null
  paper: string | null
  /** Expert ground truth (NEVER exposed to markers). */
  goldExpected: GoldExpected
  /** The marker's mark on this item (teacher_moderations.teacher_score). */
  markerMark: number | null
  /** The marker's grade on this item (teacher_moderations.teacher_grade). */
  markerGrade: string | null
  /** Moderation timestamp (ISO) — used only for drift ordering. */
  decidedAt: string | null
}

/**
 * One marked script for the inter-marker comparison. `scriptKey` identifies the
 * logical script: same (board, paper, question, studied_text). Two rows with
 * the same scriptKey but different markerId form a comparable pair.
 */
export interface MarkedScriptRow {
  submissionId: string
  scriptKey: string
  markerId: string
  markerName: string
  mark: number | null
  grade: string | null
}

// ─── Small numeric helpers (kept local; dependency-light) ────────────────────

/** Round to 3 dp for stable JSON / display. */
export function r3(n: number): number {
  return Math.round(n * 1000) / 1000
}

function mean(xs: readonly number[]): number {
  return xs.length === 0 ? 0 : xs.reduce((a, b) => a + b, 0) / xs.length
}

/** A numeric value is usable only if it is a finite number. */
function num(v: number | null | undefined): v is number {
  return typeof v === 'number' && Number.isFinite(v)
}

function str(v: string | null | undefined): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

// ─── 1. Per-marker gold accuracy ─────────────────────────────────────────────

export interface PerMarkerGoldAccuracy {
  markerId: string
  markerName: string
  /** Approved gold items with a usable expert mark AND a marker mark. */
  gradedCount: number
  /** Approved gold items seen for this marker (incl. unscoreable ones). */
  totalGold: number
  /** Fraction whose marker mark equals the expert mark exactly. */
  exactRate: number
  /** Fraction whose marker mark is within ±1 of the expert mark. */
  within1Rate: number
  /** Mean |markerMark − expertMark| over scoreable items. */
  meanAbsError: number
  /** Grade-level QWK vs gold (evals/stats.ts). 1 = perfect; 0 = chance. */
  gradeQwk: number
  /** Grade-level exact agreement vs gold (evals/stats.ts). */
  gradeExact: number
  /** TRUE when gradedCount < MIN_GOLD_FOR_VERDICT (verdict suppressed). */
  insufficientData: boolean
}

/**
 * Per-marker gold calibration. Groups approved gold outcomes by marker and
 * computes mark-level exact/±1/MAE (raw marks, here) and grade-level QWK/exact
 * (delegated to the Art. 15 core). Empty input → empty array. A marker whose
 * gold items all lack a comparable mark pair gets zeros + insufficientData.
 */
export function perMarkerGoldAccuracy(rows: readonly GoldOutcomeRow[]): PerMarkerGoldAccuracy[] {
  const byMarker = new Map<string, GoldOutcomeRow[]>()
  for (const row of rows) {
    const arr = byMarker.get(row.markerId)
    if (arr) arr.push(row)
    else byMarker.set(row.markerId, [row])
  }

  const out: PerMarkerGoldAccuracy[] = []
  for (const [markerId, items] of byMarker) {
    const markerName = items.find((i) => str(i.markerName))?.markerName ?? markerId

    const absErrors: number[] = []
    let exact = 0
    let within1 = 0
    const goldGrades: string[] = []
    const markerGrades: string[] = []

    for (const it of items) {
      // Mark-level: needs both an expert mark and a marker mark.
      if (num(it.goldExpected.mark) && num(it.markerMark)) {
        const err = Math.abs(it.markerMark - it.goldExpected.mark)
        absErrors.push(err)
        if (err === 0) exact++
        if (err <= 1) within1++
      }
      // Grade-level: needs both an expert grade and a marker grade. Paired
      // positionally for QWK (evals/stats.ts clamps unknown grades, never
      // silently drops — a garbled marker grade is penalised, as intended).
      if (str(it.goldExpected.grade) && str(it.markerGrade)) {
        goldGrades.push(it.goldExpected.grade)
        markerGrades.push(it.markerGrade)
      }
    }

    const gradedCount = absErrors.length
    out.push({
      markerId,
      markerName,
      gradedCount,
      totalGold: items.length,
      exactRate: gradedCount > 0 ? r3(exact / gradedCount) : 0,
      within1Rate: gradedCount > 0 ? r3(within1 / gradedCount) : 0,
      meanAbsError: gradedCount > 0 ? r3(mean(absErrors)) : 0,
      // QWK/exact are vacuously 1 on an empty set in the core; report 0 when
      // we have no grade pairs so an empty marker doesn't look perfect.
      gradeQwk: goldGrades.length > 0 ? r3(quadraticWeightedKappa(goldGrades, markerGrades)) : 0,
      gradeExact: goldGrades.length > 0 ? r3(gradeExactAgreement(goldGrades, markerGrades)) : 0,
      insufficientData: gradedCount < MIN_GOLD_FOR_VERDICT,
    })
  }

  // Most-scored markers first (most statistically meaningful at the top).
  return out.sort((a, b) => b.gradedCount - a.gradedCount)
}

// ─── 2. Inter-marker agreement (pairwise on shared scripts) ──────────────────

export interface MarkerPairAgreement {
  markerAId: string
  markerAName: string
  markerBId: string
  markerBName: string
  /** Shared scripts both markers marked (with a comparable mark pair). */
  sharedScripts: number
  /** Fraction of shared scripts with an exactly-equal mark. */
  exactRate: number
  /** Fraction within ±1 mark. */
  within1Rate: number
  /** Mean |markA − markB| over shared scripts. */
  meanAbsError: number
  /** Grade-level QWK between the two markers (evals/stats.ts). */
  gradeQwk: number
}

export interface InterMarkerAgreement {
  /** Distinct scripts seen by ≥2 markers (any comparable pairing). */
  sharedScriptCount: number
  /** Total unordered marker-pair observations across all shared scripts. */
  pairObservations: number
  /** Overall pairwise mark exact-agreement across all paired observations. */
  overallExactRate: number
  /** Overall pairwise within-±1 mark agreement. */
  overallWithin1Rate: number
  /** Overall pairwise mean absolute mark error. */
  overallMeanAbsError: number
  /** Overall grade-level QWK pooled across every marker pair. */
  overallGradeQwk: number
  /** Per marker-pair breakdown, most-shared first. */
  pairs: MarkerPairAgreement[]
}

/** Stable ordered key for an unordered marker pair. */
function pairKey(a: string, b: string): [string, string] {
  return a <= b ? [a, b] : [b, a]
}

/**
 * Inter-marker agreement. For every script marked by ≥2 markers, every
 * unordered pair of (distinct) markers on that script yields one paired
 * observation. We report exact/±1/MAE on raw marks and pooled grade QWK, both
 * overall and per marker-pair. Empty / no-shared-script input → all zeros.
 *
 * Only marks present on BOTH sides of a pair count toward the mark metrics;
 * only grades present on both sides count toward grade QWK.
 */
export function interMarkerAgreement(rows: readonly MarkedScriptRow[]): InterMarkerAgreement {
  const byScript = new Map<string, MarkedScriptRow[]>()
  for (const row of rows) {
    if (!str(row.scriptKey)) continue
    const arr = byScript.get(row.scriptKey)
    if (arr) arr.push(row)
    else byScript.set(row.scriptKey, [row])
  }

  interface PairAcc {
    aId: string
    aName: string
    bId: string
    bName: string
    errors: number[]
    exact: number
    within1: number
    goldA: string[]
    goldB: string[]
  }
  const pairAcc = new Map<string, PairAcc>()
  const sharedScripts = new Set<string>()

  // Overall pools.
  const allErrors: number[] = []
  let allExact = 0
  let allWithin1 = 0
  const allGradesA: string[] = []
  const allGradesB: string[] = []
  let pairObservations = 0

  for (const [scriptKey, marks] of byScript) {
    // Collapse to one row per marker on this script (first-seen wins) so a
    // marker who touched the same script twice doesn't pair with themselves.
    const byMarker = new Map<string, MarkedScriptRow>()
    for (const m of marks) {
      if (!byMarker.has(m.markerId)) byMarker.set(m.markerId, m)
    }
    const distinct = [...byMarker.values()]
    if (distinct.length < 2) continue
    sharedScripts.add(scriptKey)

    for (let i = 0; i < distinct.length; i++) {
      for (let j = i + 1; j < distinct.length; j++) {
        const x = distinct[i]
        const y = distinct[j]
        const [aId, bId] = pairKey(x.markerId, y.markerId)
        // Orient x/y so x is marker A (aId) and y is marker B.
        const a = x.markerId === aId ? x : y
        const b = x.markerId === aId ? y : x
        const key = `${aId} ${bId}`
        let acc = pairAcc.get(key)
        if (!acc) {
          acc = {
            aId,
            aName: str(a.markerName) ? a.markerName : aId,
            bId,
            bName: str(b.markerName) ? b.markerName : bId,
            errors: [],
            exact: 0,
            within1: 0,
            goldA: [],
            goldB: [],
          }
          pairAcc.set(key, acc)
        }

        let counted = false
        if (num(a.mark) && num(b.mark)) {
          const err = Math.abs(a.mark - b.mark)
          acc.errors.push(err)
          allErrors.push(err)
          if (err === 0) {
            acc.exact++
            allExact++
          }
          if (err <= 1) {
            acc.within1++
            allWithin1++
          }
          counted = true
        }
        if (str(a.grade) && str(b.grade)) {
          acc.goldA.push(a.grade)
          acc.goldB.push(b.grade)
          allGradesA.push(a.grade)
          allGradesB.push(b.grade)
          counted = true
        }
        if (counted) pairObservations++
      }
    }
  }

  const pairs: MarkerPairAgreement[] = []
  for (const acc of pairAcc.values()) {
    const n = acc.errors.length
    pairs.push({
      markerAId: acc.aId,
      markerAName: acc.aName,
      markerBId: acc.bId,
      markerBName: acc.bName,
      sharedScripts: n,
      exactRate: n > 0 ? r3(acc.exact / n) : 0,
      within1Rate: n > 0 ? r3(acc.within1 / n) : 0,
      meanAbsError: n > 0 ? r3(mean(acc.errors)) : 0,
      gradeQwk: acc.goldA.length > 0 ? r3(quadraticWeightedKappa(acc.goldA, acc.goldB)) : 0,
    })
  }
  pairs.sort((a, b) => b.sharedScripts - a.sharedScripts)

  const nErr = allErrors.length
  return {
    sharedScriptCount: sharedScripts.size,
    pairObservations,
    overallExactRate: nErr > 0 ? r3(allExact / nErr) : 0,
    overallWithin1Rate: nErr > 0 ? r3(allWithin1 / nErr) : 0,
    overallMeanAbsError: nErr > 0 ? r3(mean(allErrors)) : 0,
    overallGradeQwk: allGradesA.length > 0 ? r3(quadraticWeightedKappa(allGradesA, allGradesB)) : 0,
    pairs,
  }
}

// ─── 3. Drift flags ──────────────────────────────────────────────────────────

export type DriftReason = 'low_exact' | 'low_within1' | 'low_grade_qwk' | 'regression'

export interface MarkerDriftFlag {
  markerId: string
  markerName: string
  flagged: boolean
  /** Why the marker is flagged (empty when not flagged / insufficient data). */
  reasons: DriftReason[]
  insufficientData: boolean
  /** Exact-rate over the most-recent `driftWindow` gold items. */
  recentExactRate: number
  /** Exact-rate over gold items BEFORE the recent window (baseline). */
  baselineExactRate: number
  /** Window-vs-baseline drop (baseline − recent); >0 means recently worse. */
  exactDrop: number
}

/**
 * Flag markers whose gold calibration is below the absolute floor OR who are
 * regressing (recent gold window materially worse than their own earlier
 * baseline). Pure: ordering is derived from `decidedAt` (ISO) with a stable
 * fallback to submissionId so the result is deterministic regardless of input
 * order. A marker with < MIN_GOLD_FOR_VERDICT scoreable gold items is reported
 * `insufficientData` and never flagged.
 */
export function markerDriftFlags(
  rows: readonly GoldOutcomeRow[],
  thresholds: QaThresholds = DEFAULT_QA_THRESHOLDS,
): MarkerDriftFlag[] {
  const accuracy = perMarkerGoldAccuracy(rows)
  const accById = new Map(accuracy.map((a) => [a.markerId, a]))

  const byMarker = new Map<string, GoldOutcomeRow[]>()
  for (const row of rows) {
    const arr = byMarker.get(row.markerId)
    if (arr) arr.push(row)
    else byMarker.set(row.markerId, [row])
  }

  const out: MarkerDriftFlag[] = []
  for (const [markerId, items] of byMarker) {
    const acc = accById.get(markerId)
    const markerName =
      acc?.markerName ?? items.find((i) => str(i.markerName))?.markerName ?? markerId

    // Scoreable, time-ordered items (oldest → newest). Items without a
    // comparable mark pair can't contribute to a calibration trend.
    const scoreable = items
      .filter((i) => num(i.goldExpected.mark) && num(i.markerMark))
      .map((i) => ({
        err: Math.abs((i.markerMark as number) - (i.goldExpected.mark as number)),
        // Stable sort key: time then id. Missing time sorts first (oldest).
        sortKey: `${i.decidedAt ?? ''} ${i.submissionId}`,
      }))
      .sort((a, b) => (a.sortKey < b.sortKey ? -1 : a.sortKey > b.sortKey ? 1 : 0))

    const insufficientData = scoreable.length < MIN_GOLD_FOR_VERDICT

    const reasons: DriftReason[] = []
    let recentExactRate = 0
    let baselineExactRate = 0
    let exactDrop = 0

    if (!insufficientData && acc) {
      // Absolute floors (overall calibration).
      if (acc.exactRate < thresholds.goldExactMin) reasons.push('low_exact')
      if (acc.within1Rate < thresholds.goldWithin1Min) reasons.push('low_within1')
      if (acc.gradeQwk < thresholds.goldQwkMin) reasons.push('low_grade_qwk')

      // Regression: recent window vs earlier baseline. Only when there is
      // enough history on BOTH sides to be meaningful.
      const w = Math.max(1, Math.floor(thresholds.driftWindow))
      if (scoreable.length >= w + thresholds.driftMinBaseline) {
        const recent = scoreable.slice(scoreable.length - w)
        const baseline = scoreable.slice(0, scoreable.length - w)
        recentExactRate = r3(recent.filter((s) => s.err === 0).length / recent.length)
        baselineExactRate = r3(baseline.filter((s) => s.err === 0).length / baseline.length)
        exactDrop = r3(baselineExactRate - recentExactRate)
        if (exactDrop >= thresholds.driftDrop) reasons.push('regression')
      }
    }

    out.push({
      markerId,
      markerName,
      flagged: !insufficientData && reasons.length > 0,
      reasons,
      insufficientData,
      recentExactRate,
      baselineExactRate,
      exactDrop,
    })
  }

  // Flagged markers first, then by worst exact drop — triage order.
  return out.sort((a, b) => {
    if (a.flagged !== b.flagged) return a.flagged ? -1 : 1
    return b.exactDrop - a.exactDrop
  })
}
