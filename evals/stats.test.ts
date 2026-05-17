// ─── Unit tests for the Art. 15 statistical core ─────────────────────────────
// Sanity cases only — pure, offline, deterministic. No network, no LLM. These
// guard the maths a regulator-facing accuracy figure depends on.

import { describe, it, expect } from 'vitest'

import {
  adjacentAgreement,
  aggregateAoMae,
  aoAbsoluteErrors,
  bandConfusionMatrix,
  bootstrapQwkCI,
  exactAgreement,
  gradeDistance,
  gradeIndex,
  gradeToBand,
  meanGradeError,
  mulberry32,
  percentile,
  quadraticWeightedKappa,
  testRetestStability,
} from './stats'

describe('grade scale helpers', () => {
  it('orders grades U < 1 < … < 9', () => {
    expect(gradeIndex('U')).toBe(0)
    expect(gradeIndex('1')).toBe(1)
    expect(gradeIndex('9')).toBe(9)
  })

  it('clamps unknown grades to the bottom (penalised, not dropped)', () => {
    expect(gradeIndex('banana')).toBe(0)
    expect(gradeIndex('')).toBe(0)
  })

  it('maps grades to production bands', () => {
    expect(gradeToBand('9')).toBe('Grade 8-9')
    expect(gradeToBand('8')).toBe('Grade 8-9')
    expect(gradeToBand('7')).toBe('Grade 6-7')
    expect(gradeToBand('4')).toBe('Grade 4-5')
    expect(gradeToBand('1')).toBe('Grade 1-3')
    expect(gradeToBand('U')).toBe('Grade 1-3')
  })

  it('computes absolute grade distance', () => {
    expect(gradeDistance('9', '9')).toBe(0)
    expect(gradeDistance('9', '7')).toBe(2)
    expect(gradeDistance('U', '9')).toBe(9)
  })
})

describe('agreement metrics', () => {
  const ex = ['9', '7', '5', '4', '2']

  it('exact agreement: identical sequences → 1', () => {
    expect(exactAgreement(ex, ex)).toBe(1)
  })

  it('exact agreement: empty → 1 (vacuous)', () => {
    expect(exactAgreement([], [])).toBe(1)
  })

  it('exact agreement: half right → 0.5', () => {
    expect(exactAgreement(['9', '7'], ['9', '6'])).toBe(0.5)
  })

  it('adjacent agreement counts ±1 as a hit', () => {
    // 9→8 (dist1, hit), 7→5 (dist2, miss), 5→5 (hit), 4→4 (hit), 2→1 (hit)
    expect(adjacentAgreement(ex, ['8', '5', '5', '4', '1'])).toBeCloseTo(4 / 5)
  })

  it('mean grade error averages step distances', () => {
    expect(meanGradeError(['9', '9'], ['7', '8'])).toBeCloseTo((2 + 1) / 2)
  })
})

describe('quadraticWeightedKappa', () => {
  it('perfect agreement → 1', () => {
    expect(quadraticWeightedKappa(['9', '5', '1'], ['9', '5', '1'])).toBe(1)
  })

  it('all-identical labels (no possible disagreement) → 1', () => {
    expect(quadraticWeightedKappa(['5', '5', '5'], ['5', '5', '5'])).toBe(1)
  })

  it('systematic large disagreement → strongly negative', () => {
    const a = ['9', '9', '9', '1', '1', '1']
    const b = ['1', '1', '1', '9', '9', '9']
    expect(quadraticWeightedKappa(a, b)).toBeLessThan(-0.5)
  })

  it('near-miss disagreement scores higher than far-miss', () => {
    const ex = ['9', '8', '7', '6', '5', '4']
    const near = ['8', '7', '6', '5', '4', '3'] // off by 1
    const far = ['1', '2', '3', '1', '9', '9'] // wild
    expect(quadraticWeightedKappa(ex, near)).toBeGreaterThan(quadraticWeightedKappa(ex, far))
  })

  it('empty input → 1 (vacuous)', () => {
    expect(quadraticWeightedKappa([], [])).toBe(1)
  })
})

describe('seeded PRNG + percentile', () => {
  it('mulberry32 is deterministic for a fixed seed', () => {
    const a = mulberry32(123)
    const b = mulberry32(123)
    const seqA = [a(), a(), a(), a()]
    const seqB = [b(), b(), b(), b()]
    expect(seqA).toEqual(seqB)
    for (const x of seqA) {
      expect(x).toBeGreaterThanOrEqual(0)
      expect(x).toBeLessThan(1)
    }
  })

  it('different seeds diverge', () => {
    const a = mulberry32(1)
    const b = mulberry32(2)
    expect(a()).not.toBe(b())
  })

  it('percentile endpoints and interpolation', () => {
    const s = [0, 1, 2, 3, 4]
    expect(percentile(s, 0)).toBe(0)
    expect(percentile(s, 1)).toBe(4)
    expect(percentile(s, 0.5)).toBe(2)
    expect(percentile([10, 20], 0.5)).toBe(15)
  })
})

describe('bootstrapQwkCI', () => {
  it('returns null for n < 2 (CI not estimable)', () => {
    expect(bootstrapQwkCI(['9'], ['9'])).toBeNull()
    expect(bootstrapQwkCI([], [])).toBeNull()
  })

  it('is reproducible for a fixed seed and brackets perfect agreement at 1', () => {
    const ex = ['9', '8', '7', '6', '5', '4', '3', '2']
    const ci1 = bootstrapQwkCI(ex, ex, { resamples: 500, seed: 42 })
    const ci2 = bootstrapQwkCI(ex, ex, { resamples: 500, seed: 42 })
    expect(ci1).not.toBeNull()
    expect(ci1).toEqual(ci2) // byte-for-byte reproducible
    // Perfect agreement: every resample is also perfect → CI collapses to 1.
    expect(ci1!.lo).toBeCloseTo(1)
    expect(ci1!.hi).toBeCloseTo(1)
  })

  it('produces a lo ≤ hi interval for noisy data', () => {
    const ex = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U']
    const pr = ['8', '8', '6', '6', '5', '5', '3', '1', '1', 'U']
    const ci = bootstrapQwkCI(ex, pr, { resamples: 800, seed: 7 })
    expect(ci).not.toBeNull()
    expect(ci!.lo).toBeLessThanOrEqual(ci!.hi)
    // Point estimate should fall inside (or on) its own bootstrap CI envelope.
    const point = quadraticWeightedKappa(ex, pr)
    expect(point).toBeGreaterThanOrEqual(ci!.lo - 1e-9)
    expect(point).toBeLessThanOrEqual(ci!.hi + 1e-9)
  })
})

describe('AO mean absolute error', () => {
  it('matches AOs by id (case-insensitive) and skips unpaired', () => {
    const errs = aoAbsoluteErrors(
      [
        { id: 'AO1', marks: 10, maxMarks: 12 },
        { id: 'AO2', marks: 8, maxMarks: 12 },
        { id: 'AO3', marks: 5, maxMarks: 6 }, // unpaired
      ],
      [
        { id: 'ao1', marks: 7, maxMarks: 12 },
        { id: 'AO2', marks: 8, maxMarks: 12 },
      ],
    )
    expect(errs).toEqual({ AO1: 3, AO2: 0 })
  })

  it('aggregates per-AO MAE across cases', () => {
    const agg = aggregateAoMae([
      { AO1: 2, AO2: 0 },
      { AO1: 4, AO2: 2 },
    ])
    expect(agg.AO1).toBeCloseTo(3)
    expect(agg.AO2).toBeCloseTo(1)
  })

  it('empty inputs → empty maps', () => {
    expect(aoAbsoluteErrors([], [])).toEqual({})
    expect(aggregateAoMae([])).toEqual({})
  })
})

describe('band confusion matrix', () => {
  it('places counts on the diagonal for perfect band agreement', () => {
    const { bands, matrix } = bandConfusionMatrix(
      ['9', '7', '5', '1'],
      ['8', '6', '4', 'U'], // same bands, different grades
    )
    expect(bands).toEqual(['Grade 1-3', 'Grade 4-5', 'Grade 6-7', 'Grade 8-9'])
    // Each example sits on the diagonal (band preserved).
    const total = matrix.reduce((s, row) => s + row.reduce((a, b) => a + b, 0), 0)
    const diag = matrix.reduce((s, row, i) => s + row[i], 0)
    expect(total).toBe(4)
    expect(diag).toBe(4)
  })

  it('records off-diagonal band confusions', () => {
    // examiner Grade 8-9, predicted Grade 1-3 → one off-diagonal cell.
    const { matrix } = bandConfusionMatrix(['9'], ['1'])
    expect(matrix[3][0]).toBe(1)
  })
})

describe('test–retest stability', () => {
  it('deterministic runs → 0 instability', () => {
    const s = testRetestStability([
      ['9', '7', '5'],
      ['9', '7', '5'],
      ['9', '7', '5'],
    ])
    expect(s.runs).toBe(3)
    expect(s.cases).toBe(3)
    expect(s.gradeInstabilityRate).toBe(0)
    expect(s.meanGradeSpread).toBe(0)
    expect(s.maxGradeSpread).toBe(0)
  })

  it('detects an unstable case and its spread', () => {
    // Case 0 stable; case 1 varies 7→9 (spread 2).
    const s = testRetestStability([
      ['5', '7'],
      ['5', '8'],
      ['5', '9'],
    ])
    expect(s.gradeInstabilityRate).toBeCloseTo(1 / 2)
    expect(s.maxGradeSpread).toBe(2)
    expect(s.meanGradeSpread).toBeCloseTo((0 + 2) / 2)
  })

  it('fewer than 2 runs → trivially stable', () => {
    expect(testRetestStability([['9', '7']]).gradeInstabilityRate).toBe(0)
    expect(testRetestStability([]).cases).toBe(0)
  })
})
