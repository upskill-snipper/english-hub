/**
 * Tests for the G-LIVE Gate (gate.ts).
 *
 * WHY these tests exist:
 * The gate is the hard, fail-closed checkpoint that gates learner exposure. Its
 * value is entirely in *refusing* unsafe builds, so the tests assert that each
 * documented failure mode (design doc 17 §5, §Tolerances) throws, and that a
 * fully-green baseline passes. Every throwing test also asserts the specific
 * failed-check identifier so a future refactor cannot silently pass for the
 * wrong reason.
 */

import { describe, it, expect } from 'vitest'
import { summarise, type CalibrationReport, type MarkPair } from '../metrics'
import {
  assertCalibrationGreen,
  baselineFromPairs,
  CalibrationGateError,
  MIN_GATE_SAMPLE_SIZE,
  WITHIN_HALF_BAND_FLOOR,
  type CalibrationBaseline,
  type PriorBaselineRef,
} from '../gate'

/**
 * A self-consistent CalibrationReport stub. The gate treats the report as
 * authoritative and gates on the baseline's `withinHalfBand`/`n` directly, so
 * the report's inner figures only need to be a valid shape here.
 */
function makeReport(overrides: Partial<CalibrationReport> = {}): CalibrationReport {
  return {
    count: 60,
    exactBandAgreement: 0.6,
    withinHalfBandAgreement: 0.85,
    perCriterionCorrelation: [],
    ...overrides,
  }
}

/**
 * Build a green-by-default baseline: n>=50, a healthy spread across bands 4-9
 * with >=5 each, accuracy above the floor, and a prior baseline it does not
 * regress against. Individual tests override single fields to exercise one
 * failure mode at a time.
 */
function makeBaseline(overrides: Partial<CalibrationBaseline> = {}): CalibrationBaseline {
  const perBandCoverage: Record<number, number> = {
    4: 10,
    5: 10,
    6: 10,
    7: 10,
    8: 10,
    9: 10,
  }
  const prior: PriorBaselineRef = { id: 'prior-1', withinHalfBand: 0.84 }
  return {
    id: 'baseline-1',
    n: 60,
    withinHalfBand: 0.85,
    perBandCoverage,
    report: makeReport(),
    priorBaseline: prior,
    ...overrides,
  }
}

describe('assertCalibrationGreen', () => {
  it('passes a fully-green baseline (returns void, does not throw)', () => {
    expect(() => assertCalibrationGreen(makeBaseline())).not.toThrow()
    expect(assertCalibrationGreen(makeBaseline())).toBeUndefined()
  })

  it('passes a green first-ever baseline with no prior (regression check skipped)', () => {
    const baseline = makeBaseline({ priorBaseline: null })
    expect(() => assertCalibrationGreen(baseline)).not.toThrow()
  })

  it('throws when n is below the statistical floor', () => {
    // n below 50, even though every other signal is healthy.
    const baseline = makeBaseline({
      n: MIN_GATE_SAMPLE_SIZE - 1,
      perBandCoverage: { 4: 8, 5: 8, 6: 8, 7: 8, 8: 8, 9: 9 },
    })
    expect(() => assertCalibrationGreen(baseline)).toThrowError(CalibrationGateError)
    try {
      assertCalibrationGreen(baseline)
      throw new Error('expected gate to throw')
    } catch (e) {
      expect(e).toBeInstanceOf(CalibrationGateError)
      expect((e as CalibrationGateError).check).toBe('sufficient-n')
    }
  })

  it('throws when a populated band has a coverage gap (< 5 submissions)', () => {
    const baseline = makeBaseline({
      n: 56,
      // Band 9 has only 1 submission — a coverage gap.
      perBandCoverage: { 4: 11, 5: 11, 6: 11, 7: 11, 8: 11, 9: 1 },
    })
    try {
      assertCalibrationGreen(baseline)
      throw new Error('expected gate to throw')
    } catch (e) {
      expect(e).toBeInstanceOf(CalibrationGateError)
      expect((e as CalibrationGateError).check).toBe('band-coverage')
    }
  })

  it('throws when coverage is concentrated in a single band (no spread)', () => {
    const baseline = makeBaseline({
      n: 60,
      perBandCoverage: { 6: 60 },
    })
    try {
      assertCalibrationGreen(baseline)
      throw new Error('expected gate to throw')
    } catch (e) {
      expect(e).toBeInstanceOf(CalibrationGateError)
      expect((e as CalibrationGateError).check).toBe('band-coverage')
    }
  })

  it('throws when coverage includes a band outside the reportable range', () => {
    const baseline = makeBaseline({
      n: 60,
      // Band 3 is below the reportable floor of 4 — malformed baseline.
      perBandCoverage: { 3: 10, 4: 10, 5: 10, 6: 10, 7: 10, 8: 10 },
    })
    try {
      assertCalibrationGreen(baseline)
      throw new Error('expected gate to throw')
    } catch (e) {
      expect(e).toBeInstanceOf(CalibrationGateError)
      expect((e as CalibrationGateError).check).toBe('band-coverage')
    }
  })

  it('throws when within-half-band is below the absolute floor', () => {
    const baseline = makeBaseline({
      withinHalfBand: WITHIN_HALF_BAND_FLOOR - 0.05,
      // Prior is also low so the regression check cannot fire first.
      priorBaseline: { id: 'prior-low', withinHalfBand: 0.7 },
    })
    try {
      assertCalibrationGreen(baseline)
      throw new Error('expected gate to throw')
    } catch (e) {
      expect(e).toBeInstanceOf(CalibrationGateError)
      expect((e as CalibrationGateError).check).toBe('absolute-floor')
    }
  })

  it('throws when within-half-band regresses below the prior baseline', () => {
    const baseline = makeBaseline({
      // Above the floor, so only the regression check can fire.
      withinHalfBand: 0.86,
      priorBaseline: { id: 'prior-high', withinHalfBand: 0.92 },
    })
    try {
      assertCalibrationGreen(baseline)
      throw new Error('expected gate to throw')
    } catch (e) {
      expect(e).toBeInstanceOf(CalibrationGateError)
      expect((e as CalibrationGateError).check).toBe('no-regression')
    }
  })

  it('tolerates sampling noise within the allowed regression drop', () => {
    // A drop smaller than MAX_WITHIN_HALF_BAND_DROP must NOT block release.
    const baseline = makeBaseline({
      withinHalfBand: 0.85,
      priorBaseline: { id: 'prior-noise', withinHalfBand: 0.875 },
    })
    expect(() => assertCalibrationGreen(baseline)).not.toThrow()
  })
})

describe('baselineFromPairs', () => {
  /** A perfectly-agreeing pair so within-half-band derives to 1.0. */
  function perfectPair(overall: number): MarkPair {
    const criteria = { TR: overall, CC: overall, LR: overall, GRA: overall }
    return {
      aiOverall: overall,
      humanOverall: overall,
      aiCriteria: criteria,
      humanCriteria: criteria,
    }
  }

  it('derives withinHalfBand and n from metrics.ts, never re-deriving locally', () => {
    const pairs: readonly MarkPair[] = [perfectPair(6), perfectPair(7), perfectPair(5)]
    const report = summarise(pairs)
    const baseline = baselineFromPairs({
      id: 'b1',
      pairs,
      report,
      perBandCoverage: { 5: 1, 6: 1, 7: 1 },
      priorBaseline: null,
    })
    expect(baseline.n).toBe(3)
    // Comes straight from metrics.ts, matching the report it was built with.
    expect(baseline.withinHalfBand).toBe(report.withinHalfBandAgreement)
    expect(baseline.withinHalfBand).toBe(1)
  })
})
