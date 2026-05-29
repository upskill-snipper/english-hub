/**
 * Track A / Step 3 — the SELF-CONSISTENCY wrapper (design doc 15; IELTS spec §6;
 * architecture §1.5; DECISIONS-log OQ-4, BINDING).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * A single LLM mark — even one that has already passed the Validator (Seam D,
 * `validator.ts`: every quote verified, the overall re-derived in code) — can
 * still be *precise but unstable*: re-run the same essay at a non-zero temperature
 * and a genuinely borderline criterion may land a band higher or lower. Showing
 * one run's single number as if it were authoritative hides that instability. For
 * the marks that matter most (OQ-4: an auto-detected BORDERLINE script on a PAID
 * MOCK) we therefore sample the marker N=3 times, compare the per-criterion bands
 * across runs, and:
 *   • if the runs AGREE (no criterion spreads more than one whole band) → return
 *     the MEDIAN run as the trustworthy mark (a real, internally-consistent run —
 *     never a Frankenstein average across runs);
 *   • if any criterion's bands SPREAD by more than one band → surface a RANGE
 *     (`bandRange` per criterion + an overall `bandRange`) instead of false
 *     precision, and set `needsHumanReview = true` (doc 15 §2 rule 4/6, R3).
 *
 * This wrapper sits AROUND the marker+validator. It does NOT call Anthropic, does
 * NOT validate quotes, and does NOT compute the IELTS overall itself beyond reusing
 * the engine's one authoritative `computeOverallBand` (`./result/overall`) over the
 * per-run low/high sets — there is no second rounding implementation here.
 *
 * OQ-4 (BINDING): self-consistency N=3 fires ONLY for a script that is BOTH
 * borderline (auto-detected) AND a paid mock. Free practice — and any non-borderline
 * paid mock — stays SINGLE-RUN. The caller passes those two booleans; this module
 * owns the policy that turns them into N (so the rule lives in exactly one place and
 * is unit-tested). A single run is returned untouched (no range, no extra review
 * gate beyond whatever the Validator already set).
 *
 * BOUNDEDNESS (doc 15 §4.6, R6): the wrapper NEVER loops. It dispatches exactly N
 * runs once via `Promise.allSettled`, proceeds when at least 2 runs succeed, and —
 * if fewer than 2 succeed — returns the one surviving run flagged for human review
 * rather than retrying. There is no escalation-to-N=5 here: OQ-4 fixes N=3 for the
 * high-stakes path; the doc's optional N=5 escalation is deferred (it is not part of
 * this BINDING decision and would add an unbounded-feeling extra round). Keeping N
 * fixed at 3 is the smallest N that yields a median robust to one outlier run.
 *
 * TESTABILITY (offline, deterministic): the marker is INJECTED as
 * {@link SelfConsistencyDeps.markOnce} — a function that performs one full
 * marker+validator pass and returns a validated {@link MarkingResultV2} (or throws
 * / rejects on a run that could not be marked). Production wires this to
 * `runMarker` + `validate`; unit tests pass a stub that returns canned results, so
 * the test is offline and asserts purely the aggregation/policy logic. The wrapper
 * passes the per-run temperature into `markOnce` so a test can assert the sampling
 * profile, and so production runs differ (a non-zero temperature is what makes
 * self-consistency meaningful — doc 15 §4.4).
 */

import type { Band } from '@/lib/ielts/types'
import { computeOverallBand } from './result/overall'
import {
  IELTS_CRITERION_CODES,
  type BandCriterionScore,
  type IeltsCriterionCode,
  type MarkingResultV2,
} from './result-schema'

// ════════════════════════════════════════════════════════════════════════════════
// §1 — Tunables, policy inputs, injectable dependency
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Number of marker samples for a high-stakes (borderline + paid-mock) script.
 * Fixed at 3 by OQ-4 ("self-consistency N=3"): the smallest N that yields a median
 * robust to a single outlier run while bounding the multi-run cost at 3×. NOT
 * escalated to 5 here — that optional round (doc 15 §4.2) is outside the BINDING
 * decision and would dilute the boundedness guarantee.
 */
export const SELF_CONSISTENCY_N = 3 as const

/** Single-run N for every non-high-stakes script (free practice, non-borderline mock). */
export const SINGLE_RUN_N = 1 as const

/**
 * Minimum successful runs required to aggregate a high-stakes mark. With N=3 we can
 * still compute a 2-sample spread/median if one run fails, so we proceed on ≥2 and
 * only fall back to a single flagged run below that (doc 15 §4.6).
 */
export const MIN_SUCCESSFUL_RUNS = 2 as const

/**
 * The sampling temperature profile for the N=3 high-stakes runs (doc 15 §4.4):
 * run 1 at temperature 0 (the deterministic "best estimate", preferred on a median
 * tie) and runs 2–3 at 0.4 (high enough to expose genuine band ambiguity, low
 * enough not to manufacture false disagreement — R2). Recorded per run in the
 * outcome so calibration can later A/B alternative profiles.
 */
export const SELF_CONSISTENCY_TEMPERATURE_PROFILE: readonly number[] = [0, 0.4, 0.4]

/** Temperature for the lone single-run path (deterministic, cheapest). */
export const SINGLE_RUN_TEMPERATURE = 0 as const

/**
 * The two server-authoritative signals OQ-4 keys N on. Decided by the CALLER (the
 * route), never inferred inside the wrapper, so "high-stakes" cannot silently widen:
 *   • `isBorderline` — auto-detected borderline (e.g. a prior single run's
 *     criterion confidence/overall sat on a band edge). This module does not detect
 *     it; it consumes the boolean.
 *   • `isPaidMock`   — a paid mock exam attempt (not free practice).
 * N=3 fires ONLY when BOTH are true (OQ-4); otherwise N=1.
 */
export interface SelfConsistencyPolicyInput {
  readonly isBorderline: boolean
  readonly isPaidMock: boolean
}

/**
 * One full marker pass: assemble → mark → validate, returning a validated result.
 * Injected so the wrapper is testable offline. Implementations MUST return a result
 * that has already been through the Validator (quotes verified, overall recomputed)
 * or reject; a rejected run is treated as a failed sample (dropped, R6). The
 * `temperature` lets production vary runs and lets tests assert the profile.
 *
 * @param temperature The sampling temperature for THIS run (from the profile).
 * @param runIndex    0-based index of this run (for logging/diagnostics only).
 */
export type MarkOnceFn = (temperature: number, runIndex: number) => Promise<MarkingResultV2>

/** Injectable dependencies for {@link runSelfConsistentMark}. */
export interface SelfConsistencyDeps {
  /** One validated marker pass at a given temperature (REQUIRED; no production default —
   *  wiring `runMarker`+`validate` is the route's job, doc 15 §5 Step 4). */
  readonly markOnce: MarkOnceFn
  /** Override the temperature profile (tests/calibration). Defaults to the const above. */
  readonly temperatureProfile?: readonly number[]
}

// ════════════════════════════════════════════════════════════════════════════════
// §2 — Output shape (additive — wraps, never replaces, a MarkingResultV2)
// ════════════════════════════════════════════════════════════════════════════════

/** A surfaced band range when runs disagree by more than one band. */
export interface BandRange {
  readonly low: number
  readonly high: number
}

/** Per-criterion cross-run aggregation (doc 15 §2.1). */
export interface PerCriterionAgreement {
  readonly code: IeltsCriterionCode
  /** One integer/half band per SUCCESSFUL run, in run order. */
  readonly bands: readonly number[]
  /** Median band (lower-tie for conservatism) — the criterion's point estimate. */
  readonly point: number
  /** max − min across runs. `> 1` means the runs genuinely disagree. */
  readonly spread: number
  /** Present ONLY when `spread > 1`: the honest range to show instead of `point`. */
  readonly bandRange?: BandRange
}

/**
 * The per-run cross-run agreement record fed to the calibration harness (doc 15 §8,
 * R/Step 6). Lets calibration correlate low AI-vs-AI agreement with high AI-vs-human
 * disagreement and tune N / thresholds. Pure data; no behaviour.
 */
export interface AgreementRecord {
  readonly runs: number
  readonly temperatureProfile: readonly number[]
  readonly perCriterionBands: Readonly<Record<IeltsCriterionCode, readonly number[]>>
  readonly maxSpread: number
  readonly consistencyConfidence: number
}

/** The full self-consistency outcome the route persists/returns (doc 15 §2.1). */
export interface SelfConsistencyOutcome {
  /** Actual successful runs aggregated (1 single-run, 2 or 3 high-stakes). */
  readonly runs: number
  /** Temperature used per ATTEMPTED run, in order. */
  readonly temperatureProfile: readonly number[]
  /** Per-criterion cross-run agreement (empty `bands` impossible — always ≥1 run). */
  readonly perCriterion: readonly PerCriterionAgreement[]
  /**
   * The chosen marker result to return: the MEDIAN run (a single real run), with
   * `needsHumanReview` forced true and `validationFlags.selfConsistencyDiverged`
   * set when a range was surfaced. Never an average across runs (R3).
   */
  readonly result: MarkingResultV2
  /** Overall band range, present only when any criterion spread `> 1`. */
  readonly overallRange?: BandRange
  /** 0..1 cross-run agreement signal (1 = identical runs; ≤0.5 = >1 spread). */
  readonly consistencyConfidence: number
  /** Self-consistency-driven review gate (range surfaced OR mass run failure). */
  readonly needsHumanReview: boolean
  /** Calibration feed (doc 15 §8). */
  readonly agreementRecord: AgreementRecord
  /** True when only a single run was executed (low-stakes path) — no aggregation done. */
  readonly singleRun: boolean
}

// ════════════════════════════════════════════════════════════════════════════════
// §3 — Pure cross-run maths (median lower-tie, spread, range, confidence)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Median band with a LOWER-tie rule (doc 15 §2 rule 3, R for conservatism): for an
 * even count the two middle values are averaged DOWN to the lower band rather than
 * rounded up, so a tie never silently inflates a candidate's mark. Bands are valid
 * half-steps (the Validator guaranteed it upstream), so an odd count returns the
 * exact middle and an even count returns `min(a,b)` of the two middles.
 *
 * @param bands One band per successful run (length ≥ 1).
 * @returns The point-estimate band.
 */
export function medianBandLowerTie(bands: readonly number[]): number {
  const sorted = [...bands].sort((a, b) => a - b)
  const n = sorted.length
  const mid = Math.floor(n / 2)
  if (n % 2 === 1) {
    return sorted[mid] as number
  }
  // Even count: take the LOWER of the two central values (conservative tie-break).
  return Math.min(sorted[mid - 1] as number, sorted[mid] as number)
}

/** Cross-run spread (max − min) for one criterion's per-run bands. */
export function crossRunSpread(bands: readonly number[]): number {
  let min = Infinity
  let max = -Infinity
  for (const b of bands) {
    if (b < min) min = b
    if (b > max) max = b
  }
  return max - min
}

/** The honest low/high range for a disagreeing criterion. */
export function surfaceRange(bands: readonly number[]): BandRange {
  return { low: Math.min(...bands), high: Math.max(...bands) }
}

/**
 * Map the maximum per-criterion spread to a 0..1 consistency-confidence component
 * (doc 15 §2 rule 5): identical runs (spread 0) → 1.0; a one-band wobble on the
 * worst criterion (spread 1) → 0.7 (still trustworthy, the band-rounding tolerance);
 * any spread > 1 → 0.5 capped (genuine disagreement → low confidence → range +
 * review). Monotonic and clamped to [0,1].
 *
 * @param maxSpread The largest cross-run spread across all four criteria.
 */
export function spreadToConsistencyConfidence(maxSpread: number): number {
  if (maxSpread <= 0) return 1
  if (maxSpread <= 1) return 0.7
  // Beyond one band: decay from 0.5, never below 0 (genuine divergence → low).
  const decayed = 0.5 - (maxSpread - 1) * 0.2
  return Math.max(0, Math.min(1, decayed))
}

// ════════════════════════════════════════════════════════════════════════════════
// §4 — Policy: how N is chosen (OQ-4, the single source of truth)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * OQ-4 (BINDING): N=3 self-consistency fires ONLY for a script that is BOTH
 * auto-detected borderline AND a paid mock. Everything else — free practice, and
 * any non-borderline paid mock — is single-run. Pure; the one place this rule lives.
 *
 * @returns {@link SELF_CONSISTENCY_N} (3) when high-stakes, else {@link SINGLE_RUN_N} (1).
 */
export function chooseRunCount(policy: SelfConsistencyPolicyInput): number {
  const highStakes = policy.isBorderline && policy.isPaidMock
  return highStakes ? SELF_CONSISTENCY_N : SINGLE_RUN_N
}

// ════════════════════════════════════════════════════════════════════════════════
// §5 — Internal helpers for the high-stakes aggregation
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Pull the four band criteria of a validated result into a code→band map. The
 * Validator already guaranteed all four IELTS criteria are present exactly once and
 * are band-scale, so this is a straightforward, total lookup (any gap would be a
 * caller contract breach, surfaced as an explicit throw — never a silent NaN).
 */
function bandsByCode(result: MarkingResultV2): Readonly<Record<IeltsCriterionCode, number>> {
  const out: Partial<Record<IeltsCriterionCode, number>> = {}
  for (const c of result.criteria) {
    if (c.scale === 'band') {
      out[c.code as IeltsCriterionCode] = c.band
    }
  }
  for (const code of IELTS_CRITERION_CODES) {
    if (out[code] === undefined) {
      throw new Error(
        `self-consistency: validated run missing criterion ${code}; ` +
          'markOnce must return a Validator-approved MarkingResultV2.',
      )
    }
  }
  return out as Record<IeltsCriterionCode, number>
}

/**
 * Choose the MEDIAN RUN: the successful run whose per-criterion bands are, in
 * aggregate, closest to the per-criterion point estimates (sum of absolute band
 * distances). Returning ONE real run — not a synthetic average — keeps the chosen
 * result internally consistent (its evidence spans, errors and overall all came
 * from the same model call, R3). Ties break toward the EARLIER run, and run 1 is
 * the temperature-0 best estimate, so a tie favours the deterministic read.
 */
function selectMedianRun(
  runs: readonly MarkingResultV2[],
  points: Readonly<Record<IeltsCriterionCode, number>>,
): MarkingResultV2 {
  let best = runs[0] as MarkingResultV2
  let bestDistance = Infinity
  for (const run of runs) {
    const map = bandsByCode(run)
    let distance = 0
    for (const code of IELTS_CRITERION_CODES) {
      distance += Math.abs(map[code] - points[code])
    }
    if (distance < bestDistance) {
      bestDistance = distance
      best = run
    }
  }
  return best
}

/**
 * Build the {@link SelfConsistencyOutcome} for the single-run (low-stakes) path. No
 * aggregation, no range, no extra review gate — the lone run is returned exactly as
 * the Validator produced it (its own `needsHumanReview` stands). `consistencyConfidence`
 * is 1 because a single run cannot, by definition, disagree with itself; the WIDER
 * confidence number (validator/confidence doc) is what actually gates a single-run
 * display, not this self-consistency component.
 */
function buildSingleRunOutcome(run: MarkingResultV2, temperature: number): SelfConsistencyOutcome {
  const perCriterion: PerCriterionAgreement[] = IELTS_CRITERION_CODES.map((code) => {
    const band = bandsByCode(run)[code]
    return { code, bands: [band], point: band, spread: 0 }
  })
  const perCriterionBands = Object.fromEntries(
    perCriterion.map((p) => [p.code, p.bands]),
  ) as Record<IeltsCriterionCode, readonly number[]>
  return {
    runs: 1,
    temperatureProfile: [temperature],
    perCriterion,
    result: run,
    consistencyConfidence: 1,
    needsHumanReview: run.needsHumanReview,
    agreementRecord: {
      runs: 1,
      temperatureProfile: [temperature],
      perCriterionBands,
      maxSpread: 0,
      consistencyConfidence: 1,
    },
    singleRun: true,
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// §6 — The wrapper entry point
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Run the marker with self-consistency for high-stakes scripts (OQ-4).
 *
 * Flow:
 *   1. `chooseRunCount(policy)` → 1 (single-run) or 3 (borderline + paid mock).
 *   2. SINGLE-RUN: one `markOnce` at temperature 0; return the Validator's result
 *      untouched (no range, no extra gate).
 *   3. HIGH-STAKES: dispatch exactly 3 runs ONCE via `Promise.allSettled` at the
 *      temperature profile. Never loops.
 *      • ≥2 succeed → per-criterion median (lower-tie) + spread; if ANY spread > 1,
 *        attach `bandRange` per criterion, compute the overall `bandRange` via the
 *        engine's `computeOverallBand` over the low-set and high-set, force
 *        `needsHumanReview = true`, and set `validationFlags.selfConsistencyDiverged`.
 *        Otherwise return the MEDIAN RUN as the trustworthy single-number mark.
 *      • <2 succeed → return the one surviving run flagged for human review (mass
 *        failure fallback, R6). 0 succeed → throw (nothing to return).
 *
 * @param policy The OQ-4 signals (`isBorderline`, `isPaidMock`).
 * @param deps   Injected marker pass (+ optional temperature profile override).
 * @returns      A {@link SelfConsistencyOutcome}.
 * @throws {Error} only when every dispatched run failed (no result to surface).
 */
export async function runSelfConsistentMark(
  policy: SelfConsistencyPolicyInput,
  deps: SelfConsistencyDeps,
): Promise<SelfConsistencyOutcome> {
  const n = chooseRunCount(policy)

  // ── Single-run (low-stakes) path: one deterministic run, returned as-is.
  if (n === SINGLE_RUN_N) {
    const run = await deps.markOnce(SINGLE_RUN_TEMPERATURE, 0)
    return buildSingleRunOutcome(run, SINGLE_RUN_TEMPERATURE)
  }

  // ── High-stakes path: exactly N runs, once, in parallel. Bounded — no loop.
  const profile = (deps.temperatureProfile ?? SELF_CONSISTENCY_TEMPERATURE_PROFILE).slice(0, n)
  const settled = await Promise.allSettled(
    profile.map((temperature, index) => deps.markOnce(temperature, index)),
  )
  const successful: MarkingResultV2[] = []
  for (const s of settled) {
    if (s.status === 'fulfilled') {
      successful.push(s.value)
    }
  }

  // 0 successes: nothing to surface — the route turns this throw into human review.
  if (successful.length === 0) {
    throw new Error(
      'self-consistency: all marker runs failed; no result to aggregate (routing to human review).',
    )
  }

  // <2 successes: cannot measure cross-run agreement. Return the lone survivor but
  // FORCE human review (we never present a high-stakes mark we could not corroborate).
  if (successful.length < MIN_SUCCESSFUL_RUNS) {
    const lone = successful[0] as MarkingResultV2
    const flagged: MarkingResultV2 = {
      ...lone,
      needsHumanReview: true,
      validationFlags: { ...lone.validationFlags, selfConsistencyDiverged: false },
    }
    const perCriterion: PerCriterionAgreement[] = IELTS_CRITERION_CODES.map((code) => {
      const band = bandsByCode(lone)[code]
      return { code, bands: [band], point: band, spread: 0 }
    })
    const perCriterionBands = Object.fromEntries(
      perCriterion.map((p) => [p.code, p.bands]),
    ) as Record<IeltsCriterionCode, readonly number[]>
    return {
      runs: 1,
      temperatureProfile: profile,
      perCriterion,
      result: flagged,
      // A single survivor cannot corroborate itself: confidence is unknown, so we
      // do not claim 1.0 here — 0 spread but flagged for review keeps it honest.
      consistencyConfidence: spreadToConsistencyConfidence(0),
      needsHumanReview: true,
      agreementRecord: {
        runs: 1,
        temperatureProfile: profile,
        perCriterionBands,
        maxSpread: 0,
        consistencyConfidence: spreadToConsistencyConfidence(0),
      },
      singleRun: false,
    }
  }

  // ── ≥2 successes: aggregate per criterion.
  const maps = successful.map(bandsByCode)
  const perCriterion: PerCriterionAgreement[] = IELTS_CRITERION_CODES.map((code) => {
    const bands = maps.map((m) => m[code])
    const point = medianBandLowerTie(bands)
    const spread = crossRunSpread(bands)
    const base: PerCriterionAgreement = { code, bands, point, spread }
    return spread > 1 ? { ...base, bandRange: surfaceRange(bands) } : base
  })

  const points = Object.fromEntries(perCriterion.map((p) => [p.code, p.point])) as Record<
    IeltsCriterionCode,
    number
  >

  const maxSpread = perCriterion.reduce((acc, p) => Math.max(acc, p.spread), 0)
  const consistencyConfidence = spreadToConsistencyConfidence(maxSpread)
  const diverged = perCriterion.some((p) => p.spread > 1)

  const perCriterionBands = Object.fromEntries(
    perCriterion.map((p) => [p.code, p.bands]),
  ) as Record<IeltsCriterionCode, readonly number[]>

  const agreementRecord: AgreementRecord = {
    runs: successful.length,
    temperatureProfile: profile,
    perCriterionBands,
    maxSpread,
    consistencyConfidence,
  }

  // The returned mark is the MEDIAN RUN (one real run), never an average (R3).
  const medianRun = selectMedianRun(successful, points)

  // ── Runs AGREE (no criterion spread > 1): return the median run as the
  // single-number mark, carrying the measured consistency divergence flag = false.
  if (!diverged) {
    const result: MarkingResultV2 = {
      ...medianRun,
      validationFlags: { ...medianRun.validationFlags, selfConsistencyDiverged: false },
    }
    return {
      runs: successful.length,
      temperatureProfile: profile,
      perCriterion,
      result,
      consistencyConfidence,
      needsHumanReview: result.needsHumanReview,
      agreementRecord,
      singleRun: false,
    }
  }

  // ── Runs DISAGREE on at least one criterion: surface a RANGE, force review.
  // The overall range is the engine's authoritative overall computed over the
  // per-run LOW set and HIGH set — no bespoke rounding here (doc 15 §2 rule 4).
  const lowBands = IELTS_CRITERION_CODES.map((code) => surfaceRange(maps.map((m) => m[code])).low)
  const highBands = IELTS_CRITERION_CODES.map((code) => surfaceRange(maps.map((m) => m[code])).high)
  const overallLow = computeOverallBand(lowBands as Band[])
  const overallHigh = computeOverallBand(highBands as Band[])
  const overallRange: BandRange | undefined =
    overallLow !== null && overallHigh !== null ? { low: overallLow, high: overallHigh } : undefined

  const result: MarkingResultV2 = {
    ...medianRun,
    needsHumanReview: true,
    validationFlags: { ...medianRun.validationFlags, selfConsistencyDiverged: true },
  }

  return {
    runs: successful.length,
    temperatureProfile: profile,
    perCriterion,
    result,
    ...(overallRange !== undefined ? { overallRange } : {}),
    consistencyConfidence,
    needsHumanReview: true,
    agreementRecord,
    singleRun: false,
  }
}
