// ─── EU AI Act Art. 15 — Statistical core ────────────────────────────────────
//
// Pure, dependency-free statistics for the marking-accuracy harness. NO imports
// from `@/...`, NO I/O, NO network, NO `Math.random()` — the bootstrap uses a
// seeded PRNG so confidence intervals are byte-for-byte reproducible in CI and
// across machines (a regulator must be able to re-derive the published number).
//
// Implements, against the ordinal grade scale `U,1,2,…,9`:
//   • exact-agreement & adjacent (±1) agreement
//   • Quadratic Weighted Kappa (QWK) with a percentile bootstrap 95% CI
//   • per-AO mean absolute error (AO-MAE)
//   • grade-band confusion matrix
//   • test–retest (model output) variance over N re-runs
//
// These are the Annex IV(4)-appropriate measures named in doc 06 §A1.
// ────────────────────────────────────────────────────────────────────────────

import {
  GRADE_BANDS,
  GRADE_ORDER,
  type BandConfusion,
  type ConfidenceInterval,
  type ExaminerAOMark,
  type StabilityMetrics,
} from './types'

// ─── Grade scale helpers ─────────────────────────────────────────────────────

/**
 * Index of a grade on the ordinal scale. Unknown/garbled grades are clamped to
 * the bottom (index 0 = "U") so a malformed model output is *penalised*, never
 * silently dropped — a defensible-accuracy instrument must not flatter itself.
 */
export function gradeIndex(grade: string): number {
  const idx = GRADE_ORDER.indexOf(grade)
  return idx === -1 ? 0 : idx
}

/** Map a numeric/U grade to its production band (`grade-predictor.ts`). */
export function gradeToBand(grade: string): string {
  switch (grade) {
    case '9':
    case '8':
      return 'Grade 8-9'
    case '7':
    case '6':
      return 'Grade 6-7'
    case '5':
    case '4':
      return 'Grade 4-5'
    default:
      return 'Grade 1-3'
  }
}

/** Absolute grade-step distance between two grades. */
export function gradeDistance(a: string, b: string): number {
  return Math.abs(gradeIndex(a) - gradeIndex(b))
}

// ─── Agreement ───────────────────────────────────────────────────────────────

export function exactAgreement(examiner: readonly string[], predicted: readonly string[]): number {
  const n = examiner.length
  if (n === 0) return 1
  let hits = 0
  for (let i = 0; i < n; i++) if (examiner[i] === predicted[i]) hits++
  return hits / n
}

/** Fraction within ±`tol` grade steps (tol defaults to 1 = adjacent). */
export function adjacentAgreement(
  examiner: readonly string[],
  predicted: readonly string[],
  tol = 1,
): number {
  const n = examiner.length
  if (n === 0) return 1
  let hits = 0
  for (let i = 0; i < n; i++) {
    if (gradeDistance(examiner[i], predicted[i]) <= tol) hits++
  }
  return hits / n
}

/** Mean absolute grade-step error. */
export function meanGradeError(examiner: readonly string[], predicted: readonly string[]): number {
  const n = examiner.length
  if (n === 0) return 0
  let acc = 0
  for (let i = 0; i < n; i++) acc += gradeDistance(examiner[i], predicted[i])
  return acc / n
}

// ─── Quadratic Weighted Kappa ────────────────────────────────────────────────

/**
 * Quadratic Weighted Kappa between two equal-length grade sequences.
 * Standard Cohen's kappa with quadratic weights over the ordinal grade scale.
 *
 * Returns 1 for perfect agreement, ~0 for chance-level, can be negative.
 * Edge case: if no disagreement is even *possible* under the marginals (e.g.
 * every label identical), the expected-disagreement denominator is 0 → we
 * return 1 (perfect), which is the conventional definition.
 */
export function quadraticWeightedKappa(
  examiner: readonly string[],
  predicted: readonly string[],
): number {
  const n = examiner.length
  if (n === 0) return 1
  const K = GRADE_ORDER.length

  const observed: number[][] = Array.from({ length: K }, () => new Array<number>(K).fill(0))
  const examinerHist = new Array<number>(K).fill(0)
  const predictedHist = new Array<number>(K).fill(0)

  for (let i = 0; i < n; i++) {
    const a = gradeIndex(examiner[i])
    const b = gradeIndex(predicted[i])
    observed[a][b] += 1
    examinerHist[a] += 1
    predictedHist[b] += 1
  }

  const denom = (K - 1) * (K - 1)
  let numerator = 0
  let denominator = 0
  for (let a = 0; a < K; a++) {
    for (let b = 0; b < K; b++) {
      const w = ((a - b) * (a - b)) / denom
      const expected = (examinerHist[a] * predictedHist[b]) / n
      numerator += w * observed[a][b]
      denominator += w * expected
    }
  }
  if (denominator === 0) return 1
  return 1 - numerator / denominator
}

// ─── Seeded PRNG (mulberry32) for a reproducible bootstrap ────────────────────

/**
 * mulberry32 — a tiny, well-distributed deterministic 32-bit PRNG. We do NOT
 * use `Math.random()`: CI must reproduce the exact same confidence interval
 * every run so the published Art. 15 figure is auditable and non-flaky.
 */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return function next(): number {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Default bootstrap configuration. */
export const DEFAULT_BOOTSTRAP = {
  resamples: 2000,
  seed: 0x5eed,
  /** Two-sided 95% CI. */
  alpha: 0.05,
} as const

/**
 * Percentile bootstrap 95% CI for QWK.
 *
 * Resamples (examiner, predicted) PAIRS with replacement `resamples` times,
 * recomputes QWK each time, and returns the empirical [α/2, 1−α/2] percentiles.
 * Deterministic given `seed`. Returns `null` when n < 2 (a CI from <2 paired
 * observations is meaningless — we report it as "not estimable" rather than
 * fabricate a point interval).
 */
export function bootstrapQwkCI(
  examiner: readonly string[],
  predicted: readonly string[],
  opts: { resamples?: number; seed?: number; alpha?: number } = {},
): ConfidenceInterval | null {
  const n = examiner.length
  if (n < 2) return null
  const resamples = opts.resamples ?? DEFAULT_BOOTSTRAP.resamples
  const seed = opts.seed ?? DEFAULT_BOOTSTRAP.seed
  const alpha = opts.alpha ?? DEFAULT_BOOTSTRAP.alpha

  const rand = mulberry32(seed)
  const stats: number[] = new Array(resamples)

  const exSample = new Array<string>(n)
  const prSample = new Array<string>(n)
  for (let r = 0; r < resamples; r++) {
    for (let i = 0; i < n; i++) {
      const j = Math.floor(rand() * n)
      exSample[i] = examiner[j]
      prSample[i] = predicted[j]
    }
    stats[r] = quadraticWeightedKappa(exSample, prSample)
  }

  stats.sort((x, y) => x - y)
  return {
    lo: percentile(stats, alpha / 2),
    hi: percentile(stats, 1 - alpha / 2),
  }
}

/** Linear-interpolated percentile of a pre-sorted ascending array. */
export function percentile(sorted: readonly number[], q: number): number {
  const n = sorted.length
  if (n === 0) return NaN
  if (n === 1) return sorted[0]
  const clampedQ = Math.min(1, Math.max(0, q))
  const pos = clampedQ * (n - 1)
  const lo = Math.floor(pos)
  const hi = Math.ceil(pos)
  if (lo === hi) return sorted[lo]
  const frac = pos - lo
  return sorted[lo] * (1 - frac) + sorted[hi] * frac
}

// ─── Per-AO mean absolute error ──────────────────────────────────────────────

/**
 * AO-level absolute errors for a single case: |predicted − examiner| per AO id,
 * matched by id. AOs present in only one side are skipped (they cannot form an
 * error pair); the caller decides how to treat missing-AO cases.
 */
export function aoAbsoluteErrors(
  examinerMarks: readonly ExaminerAOMark[],
  predictedMarks: readonly ExaminerAOMark[],
): Record<string, number> {
  const pred = new Map<string, number>()
  for (const m of predictedMarks) pred.set(m.id.toUpperCase(), m.marks)
  const out: Record<string, number> = {}
  for (const m of examinerMarks) {
    const key = m.id.toUpperCase()
    const p = pred.get(key)
    if (typeof p === 'number') out[key] = Math.abs(p - m.marks)
  }
  return out
}

/** Aggregate per-AO MAE across many cases' per-AO error maps. */
export function aggregateAoMae(
  perCase: readonly Readonly<Record<string, number>>[],
): Record<string, number> {
  const sums = new Map<string, number>()
  const counts = new Map<string, number>()
  for (const m of perCase) {
    for (const [ao, err] of Object.entries(m)) {
      sums.set(ao, (sums.get(ao) ?? 0) + err)
      counts.set(ao, (counts.get(ao) ?? 0) + 1)
    }
  }
  const out: Record<string, number> = {}
  for (const [ao, total] of sums) {
    const c = counts.get(ao) ?? 0
    if (c > 0) out[ao] = total / c
  }
  return out
}

// ─── Grade-band confusion matrix ─────────────────────────────────────────────

/**
 * Confusion matrix over the 4 production grade bands. Rows = examiner band,
 * columns = predicted band, both indexed by GRADE_BANDS order.
 */
export function bandConfusionMatrix(
  examiner: readonly string[],
  predicted: readonly string[],
): BandConfusion {
  const K = GRADE_BANDS.length
  const idx = new Map<string, number>(GRADE_BANDS.map((b, i) => [b, i]))
  const matrix: number[][] = Array.from({ length: K }, () => new Array<number>(K).fill(0))
  const n = Math.min(examiner.length, predicted.length)
  for (let i = 0; i < n; i++) {
    const a = idx.get(gradeToBand(examiner[i]))
    const b = idx.get(gradeToBand(predicted[i]))
    if (a !== undefined && b !== undefined) matrix[a][b] += 1
  }
  return { bands: GRADE_BANDS, matrix }
}

// ─── Test–retest (model output) variance ─────────────────────────────────────

/**
 * Stability across N independent runs of the SAME ordered case list.
 *
 * `runsGrades[r][i]` = predicted grade for case i on run r. All rows must be the
 * same length and aligned by case. Returns the fraction of cases whose grade
 * was not identical on every run, plus the mean/max grade-step spread.
 *
 * The deterministic examiner-replay adapter yields perfect stability (rate 0);
 * this metric only becomes informative for the (sampled) LLM adapter, which is
 * exactly why doc 06 §A2 requires N≥3 re-runs.
 */
export function testRetestStability(runsGrades: readonly (readonly string[])[]): StabilityMetrics {
  const runs = runsGrades.length
  const cases = runs > 0 ? runsGrades[0].length : 0
  if (runs < 2 || cases === 0) {
    return {
      runs,
      cases,
      gradeInstabilityRate: 0,
      meanGradeSpread: 0,
      maxGradeSpread: 0,
    }
  }
  let unstable = 0
  let spreadSum = 0
  let spreadMax = 0
  for (let i = 0; i < cases; i++) {
    let lo = Infinity
    let hi = -Infinity
    let allSame = true
    const first = runsGrades[0][i]
    for (let r = 0; r < runs; r++) {
      const g = runsGrades[r][i]
      if (g !== first) allSame = false
      const gi = gradeIndex(g)
      if (gi < lo) lo = gi
      if (gi > hi) hi = gi
    }
    const spread = hi - lo
    spreadSum += spread
    if (spread > spreadMax) spreadMax = spread
    if (!allSame) unstable++
  }
  return {
    runs,
    cases,
    gradeInstabilityRate: unstable / cases,
    meanGradeSpread: spreadSum / cases,
    maxGradeSpread: spreadMax,
  }
}
