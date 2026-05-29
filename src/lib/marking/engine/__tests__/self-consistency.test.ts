/**
 * Tests for Track A / Step 3 — the self-consistency wrapper (doc 15; OQ-4).
 *
 * These tests are fully OFFLINE: the marker is injected as `markOnce`, so no
 * Anthropic call happens. They assert the BINDING behaviours:
 *   • OQ-4 policy — N=3 ONLY for borderline + paid mock; free practice / non-borderline
 *     mock stays single-run.
 *   • 3 agreeing runs → a single band (median run), no range, no forced review.
 *   • >1 spread on any criterion → a per-criterion + overall range, selfConsistencyDiverged,
 *     needsHumanReview = true (never false precision).
 *   • Bounded fan-out — proceeds on ≥2 of 3 successful runs; <2 → lone run flagged.
 *   • The temperature profile is passed to each run.
 */

import { describe, it, expect, vi } from 'vitest'
import {
  runSelfConsistentMark,
  chooseRunCount,
  medianBandLowerTie,
  crossRunSpread,
  surfaceRange,
  spreadToConsistencyConfidence,
  SELF_CONSISTENCY_N,
  SINGLE_RUN_N,
  SELF_CONSISTENCY_TEMPERATURE_PROFILE,
  type MarkOnceFn,
} from '../self-consistency'
import {
  IELTS_CRITERION_CODES,
  type BandCriterionScore,
  type IeltsCriterionCode,
  type MarkingResultV2,
} from '../result-schema'

// ── Fixture builder ───────────────────────────────────────────────────────────
// A minimal, Validator-shaped MarkingResultV2 with the four IELTS criteria at the
// given bands. `needsHumanReview` defaults false so we can prove the wrapper FORCES
// it true on divergence (rather than it being pre-set).

const CRITERION_LABEL: Readonly<Record<IeltsCriterionCode, string>> = {
  TR: 'Task Response',
  CC: 'Coherence and Cohesion',
  LR: 'Lexical Resource',
  GRA: 'Grammatical Range and Accuracy',
}

function makeCriterion(code: IeltsCriterionCode, band: number): BandCriterionScore {
  return {
    scale: 'band',
    code,
    label: CRITERION_LABEL[code],
    descriptorMatched: `descriptor for ${code} at band ${band}`,
    evidence: [{ quote: `quote-${code}`, explanation: `why ${code}`, verified: true }],
    confidence: 0.85,
    rationale: `rationale ${code}`,
    band,
    maxBand: 9,
  }
}

interface BandSet {
  readonly TR: number
  readonly CC: number
  readonly LR: number
  readonly GRA: number
}

function makeResult(bands: BandSet, overrides: Partial<MarkingResultV2> = {}): MarkingResultV2 {
  const criteria: BandCriterionScore[] = IELTS_CRITERION_CODES.map((code) =>
    makeCriterion(code, bands[code]),
  )
  // A plausible overall — the wrapper does not re-validate it; it only reads bands.
  const proposed = (bands.TR + bands.CC + bands.LR + bands.GRA) / 4
  // The wrapper reads only `criteria`, `needsHumanReview` and `validationFlags`; the
  // remaining fields are carried through verbatim. We cast through `unknown` so the
  // FIXTURE does not have to mirror every optional field of the production
  // `IntegrityFlags`/`MarkingResultV2` shape (those are exercised by the validator's
  // own tests, not here) — keeping this offline test focused on aggregation logic.
  const base = {
    criteria,
    errors: [],
    integrityFlags: {
      under_length: false,
      copied_from_prompt: false,
      off_topic: false,
      memorised: false,
    },
    overall: { kind: 'band', overallBand: proposed, proposedOverallBand: proposed },
    overallConfidence: 0.85,
    borderlineFlags: [],
    holisticNote: 'note',
    validationFlags: { unverifiedEvidenceCount: 0 },
    needsHumanReview: false,
  } as unknown as MarkingResultV2
  return { ...base, ...overrides }
}

/** Build a `markOnce` that returns the supplied results in run order, recording temps. */
function markOnceReturning(results: readonly MarkingResultV2[], temps: number[]): MarkOnceFn {
  let i = 0
  return vi.fn(async (temperature: number) => {
    temps.push(temperature)
    const r = results[i] ?? results[results.length - 1]
    i += 1
    return r as MarkingResultV2
  })
}

// ════════════════════════════════════════════════════════════════════════════════
// Pure maths
// ════════════════════════════════════════════════════════════════════════════════

describe('cross-run maths', () => {
  it('medianBandLowerTie returns the middle of an odd count', () => {
    expect(medianBandLowerTie([5, 7, 6])).toBe(6)
  })

  it('medianBandLowerTie breaks an even tie toward the LOWER band', () => {
    expect(medianBandLowerTie([6, 7])).toBe(6)
    expect(medianBandLowerTie([7, 6, 8, 5])).toBe(6) // sorted 5,6,7,8 → lower of 6,7
  })

  it('crossRunSpread is max − min', () => {
    expect(crossRunSpread([6, 6, 6])).toBe(0)
    expect(crossRunSpread([6, 7, 6])).toBe(1)
    expect(crossRunSpread([5, 7, 6])).toBe(2)
  })

  it('surfaceRange returns low/high', () => {
    expect(surfaceRange([7, 5, 6])).toEqual({ low: 5, high: 7 })
  })

  it('spreadToConsistencyConfidence: 0→1, 1→0.7, >1→≤0.5, clamped ≥0', () => {
    expect(spreadToConsistencyConfidence(0)).toBe(1)
    expect(spreadToConsistencyConfidence(1)).toBe(0.7)
    expect(spreadToConsistencyConfidence(2)).toBeLessThanOrEqual(0.5)
    expect(spreadToConsistencyConfidence(10)).toBeGreaterThanOrEqual(0)
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// OQ-4 policy ladder
// ════════════════════════════════════════════════════════════════════════════════

describe('chooseRunCount (OQ-4)', () => {
  it('N=3 only when borderline AND paid mock', () => {
    expect(chooseRunCount({ isBorderline: true, isPaidMock: true })).toBe(SELF_CONSISTENCY_N)
  })

  it('single-run for free practice (not paid mock)', () => {
    expect(chooseRunCount({ isBorderline: true, isPaidMock: false })).toBe(SINGLE_RUN_N)
  })

  it('single-run for a non-borderline paid mock', () => {
    expect(chooseRunCount({ isBorderline: false, isPaidMock: true })).toBe(SINGLE_RUN_N)
  })

  it('single-run for free non-borderline', () => {
    expect(chooseRunCount({ isBorderline: false, isPaidMock: false })).toBe(SINGLE_RUN_N)
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Wrapper behaviour
// ════════════════════════════════════════════════════════════════════════════════

describe('runSelfConsistentMark — single-run (free practice)', () => {
  it('calls the marker exactly once and returns the run untouched', async () => {
    const temps: number[] = []
    const run = makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 })
    const markOnce = markOnceReturning([run], temps)

    const outcome = await runSelfConsistentMark(
      { isBorderline: true, isPaidMock: false },
      { markOnce },
    )

    expect(markOnce).toHaveBeenCalledTimes(1)
    expect(outcome.singleRun).toBe(true)
    expect(outcome.runs).toBe(1)
    expect(outcome.overallRange).toBeUndefined()
    expect(outcome.needsHumanReview).toBe(false)
    expect(outcome.consistencyConfidence).toBe(1)
    expect(outcome.result).toBe(run)
  })
})

describe('runSelfConsistentMark — high-stakes, 3 agreeing runs', () => {
  it('runs N=3, returns a single band (no range), no forced review', async () => {
    const temps: number[] = []
    const results = [
      makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 }),
    ]
    const markOnce = markOnceReturning(results, temps)

    const outcome = await runSelfConsistentMark(
      { isBorderline: true, isPaidMock: true },
      { markOnce },
    )

    expect(markOnce).toHaveBeenCalledTimes(3)
    expect(outcome.runs).toBe(3)
    expect(outcome.singleRun).toBe(false)
    expect(outcome.overallRange).toBeUndefined()
    expect(outcome.perCriterion.every((p) => p.spread === 0)).toBe(true)
    expect(outcome.perCriterion.every((p) => p.bandRange === undefined)).toBe(true)
    expect(outcome.consistencyConfidence).toBe(1)
    expect(outcome.needsHumanReview).toBe(false)
    expect(outcome.result.validationFlags.selfConsistencyDiverged).toBe(false)
    // Temperature profile passed through.
    expect(temps).toEqual([...SELF_CONSISTENCY_TEMPERATURE_PROFILE])
  })

  it('a single one-band outlier does NOT trigger a range (spread = 1)', async () => {
    const temps: number[] = []
    const results = [
      makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makeResult({ TR: 7, CC: 6, LR: 6, GRA: 6 }),
      makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 }),
    ]
    const markOnce = markOnceReturning(results, temps)

    const outcome = await runSelfConsistentMark(
      { isBorderline: true, isPaidMock: true },
      { markOnce },
    )

    const tr = outcome.perCriterion.find((p) => p.code === 'TR')
    expect(tr?.spread).toBe(1)
    expect(tr?.point).toBe(6) // median of [6,7,6] = 6
    expect(tr?.bandRange).toBeUndefined()
    expect(outcome.overallRange).toBeUndefined()
    expect(outcome.needsHumanReview).toBe(false)
    expect(outcome.consistencyConfidence).toBe(0.7)
  })
})

describe('runSelfConsistentMark — high-stakes, runs disagree (>1 spread)', () => {
  it('surfaces a per-criterion + overall RANGE and forces human review', async () => {
    const temps: number[] = []
    const results = [
      makeResult({ TR: 5, CC: 6, LR: 6, GRA: 6 }),
      makeResult({ TR: 7, CC: 6, LR: 6, GRA: 6 }),
      makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 }),
    ]
    const markOnce = markOnceReturning(results, temps)

    const outcome = await runSelfConsistentMark(
      { isBorderline: true, isPaidMock: true },
      { markOnce },
    )

    const tr = outcome.perCriterion.find((p) => p.code === 'TR')
    expect(tr?.spread).toBe(2)
    expect(tr?.bandRange).toEqual({ low: 5, high: 7 })
    expect(outcome.overallRange).toBeDefined()
    expect(outcome.overallRange?.low).toBeLessThan(outcome.overallRange?.high ?? 0)
    expect(outcome.needsHumanReview).toBe(true)
    expect(outcome.result.needsHumanReview).toBe(true)
    expect(outcome.result.validationFlags.selfConsistencyDiverged).toBe(true)
    expect(outcome.consistencyConfidence).toBeLessThanOrEqual(0.5)
  })
})

describe('runSelfConsistentMark — partial failure tolerance (bounded)', () => {
  it('proceeds on ≥2 of 3 successful runs', async () => {
    const temps: number[] = []
    let call = 0
    const ok1 = makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 })
    const ok2 = makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 })
    const markOnce: MarkOnceFn = vi.fn(async (temperature: number) => {
      temps.push(temperature)
      call += 1
      if (call === 2) {
        throw new Error('transient model failure')
      }
      return call === 1 ? ok1 : ok2
    })

    const outcome = await runSelfConsistentMark(
      { isBorderline: true, isPaidMock: true },
      { markOnce },
    )

    expect(markOnce).toHaveBeenCalledTimes(3) // all dispatched once, no loop
    expect(outcome.runs).toBe(2) // one dropped
    expect(outcome.needsHumanReview).toBe(false)
    expect(outcome.overallRange).toBeUndefined()
  })

  it('with only 1 of 3 succeeding, returns the lone run FLAGGED for review', async () => {
    const temps: number[] = []
    let call = 0
    const ok = makeResult({ TR: 6, CC: 6, LR: 6, GRA: 6 })
    const markOnce: MarkOnceFn = vi.fn(async (temperature: number) => {
      temps.push(temperature)
      call += 1
      if (call !== 1) {
        throw new Error('failure')
      }
      return ok
    })

    const outcome = await runSelfConsistentMark(
      { isBorderline: true, isPaidMock: true },
      { markOnce },
    )

    expect(outcome.runs).toBe(1)
    expect(outcome.needsHumanReview).toBe(true)
    expect(outcome.result.needsHumanReview).toBe(true)
    expect(outcome.singleRun).toBe(false)
  })

  it('throws when every run fails (nothing to surface)', async () => {
    const markOnce: MarkOnceFn = vi.fn(async () => {
      throw new Error('all down')
    })

    await expect(
      runSelfConsistentMark({ isBorderline: true, isPaidMock: true }, { markOnce }),
    ).rejects.toThrow(/all marker runs failed/i)
  })
})
