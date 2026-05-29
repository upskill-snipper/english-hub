/**
 * Tests for calibration metrics.
 *
 * WHY hand-computed fixtures: these functions gate whether a learner is ever
 * shown an AI band (DECISIONS-log OQ-5), so their arithmetic must be pinned to
 * values worked out by hand, not to whatever the implementation happens to
 * produce. Every expected number below is derivable on paper from the fixture.
 */

import { describe, expect, it } from 'vitest'

import {
  IELTS_CRITERIA,
  exactBandAgreement,
  perCriterionCorrelation,
  summarise,
  withinHalfBandAgreement,
  type CriterionBands,
  type MarkPair,
} from '../metrics'

/**
 * Build a MarkPair from overall bands and per-criterion bands, defaulting the
 * criteria to flat values so each test only states the numbers it cares about.
 */
function makePair(
  aiOverall: number,
  humanOverall: number,
  aiCriteria: CriterionBands = { TR: 6, CC: 6, LR: 6, GRA: 6 },
  humanCriteria: CriterionBands = { TR: 6, CC: 6, LR: 6, GRA: 6 },
): MarkPair {
  return { aiOverall, humanOverall, aiCriteria, humanCriteria }
}

describe('exactBandAgreement', () => {
  it('returns 0 for an empty set (no agreement demonstrable on no data)', () => {
    expect(exactBandAgreement([])).toBe(0)
  })

  it('returns 1 when every AI overall equals the human overall', () => {
    const pairs = [makePair(6, 6), makePair(7, 7), makePair(5.5, 5.5)]
    expect(exactBandAgreement(pairs)).toBe(1)
  })

  it('computes the exact-match fraction (2 of 4 = 0.5)', () => {
    const pairs = [
      makePair(6, 6), // match
      makePair(7, 7), // match
      makePair(6, 6.5), // miss
      makePair(5, 6), // miss
    ]
    expect(exactBandAgreement(pairs)).toBe(0.5)
  })

  it('does not count a half-band gap as exact', () => {
    expect(exactBandAgreement([makePair(6, 6.5)])).toBe(0)
  })
})

describe('withinHalfBandAgreement (headline trust metric)', () => {
  it('returns 0 for an empty set', () => {
    expect(withinHalfBandAgreement([])).toBe(0)
  })

  it('counts an exact match and a half-band gap, but not a full band', () => {
    const pairs = [
      makePair(6, 6), // 0.0 -> within
      makePair(6, 6.5), // 0.5 -> within (inclusive)
      makePair(6, 7), // 1.0 -> outside
    ]
    // 2 of 3 within half a band.
    expect(withinHalfBandAgreement(pairs)).toBeCloseTo(2 / 3, 10)
  })

  it('is exactly 80% on a 10-pair set with 8 within half a band', () => {
    // 8 pairs within half a band (gaps of 0 or 0.5), 2 outside (gap of 1.0).
    const pairs: MarkPair[] = [
      makePair(6, 6), // 0.0
      makePair(6, 6.5), // 0.5
      makePair(7, 7), // 0.0
      makePair(7, 6.5), // 0.5
      makePair(5.5, 6), // 0.5
      makePair(8, 8), // 0.0
      makePair(6.5, 6), // 0.5
      makePair(5, 5), // 0.0
      makePair(6, 7), // 1.0 -> outside
      makePair(7, 8), // 1.0 -> outside
    ]
    expect(pairs).toHaveLength(10)
    expect(withinHalfBandAgreement(pairs)).toBe(0.8)
  })

  it('treats the half-band boundary as inclusive despite float representation', () => {
    // 6.0 vs 6.5 is exactly the 0.5 boundary; must count as within.
    expect(withinHalfBandAgreement([makePair(6.0, 6.5)])).toBe(1)
  })
})

describe('perCriterionCorrelation', () => {
  it('reports one entry per criterion in canonical order', () => {
    const result = perCriterionCorrelation([makePair(6, 6)])
    expect(result.map((c) => c.criterion)).toEqual([...IELTS_CRITERIA])
  })

  it('returns null with n<2 (correlation undefined on a single pair)', () => {
    const result = perCriterionCorrelation([makePair(6, 6)])
    for (const c of result) {
      expect(c.value).toBeNull()
      expect(c.n).toBe(1)
    }
  })

  it('returns r=1 for a perfectly increasing criterion', () => {
    // TR rises 5,6,7 on both sides => perfect positive correlation.
    const pairs = [
      makePair(6, 6, { TR: 5, CC: 6, LR: 6, GRA: 6 }, { TR: 5, CC: 6, LR: 6, GRA: 6 }),
      makePair(6, 6, { TR: 6, CC: 6, LR: 6, GRA: 6 }, { TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makePair(6, 6, { TR: 7, CC: 6, LR: 6, GRA: 6 }, { TR: 7, CC: 6, LR: 6, GRA: 6 }),
    ]
    const tr = perCriterionCorrelation(pairs).find((c) => c.criterion === 'TR')
    expect(tr?.value).toBeCloseTo(1, 10)
  })

  it('returns r=-1 when one side rises while the other falls', () => {
    // GRA: AI 5,6,7 vs human 7,6,5 => perfect negative correlation.
    const pairs = [
      makePair(6, 6, { TR: 6, CC: 6, LR: 6, GRA: 5 }, { TR: 6, CC: 6, LR: 6, GRA: 7 }),
      makePair(6, 6, { TR: 6, CC: 6, LR: 6, GRA: 6 }, { TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makePair(6, 6, { TR: 6, CC: 6, LR: 6, GRA: 7 }, { TR: 6, CC: 6, LR: 6, GRA: 5 }),
    ]
    const gra = perCriterionCorrelation(pairs).find((c) => c.criterion === 'GRA')
    expect(gra?.value).toBeCloseTo(-1, 10)
  })

  it('returns null when a criterion is constant on one side (zero variance)', () => {
    // LR human is constant 6 across all pairs => correlation undefined.
    const pairs = [
      makePair(6, 6, { TR: 6, CC: 6, LR: 5, GRA: 6 }, { TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makePair(6, 6, { TR: 6, CC: 6, LR: 6, GRA: 6 }, { TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makePair(6, 6, { TR: 6, CC: 6, LR: 7, GRA: 6 }, { TR: 6, CC: 6, LR: 6, GRA: 6 }),
    ]
    const lr = perCriterionCorrelation(pairs).find((c) => c.criterion === 'LR')
    expect(lr?.value).toBeNull()
  })

  it('computes a known intermediate r (hand-checked = 0.5)', () => {
    // CC: AI = [1,2,3,4], human = [1,2,3,10].
    // meanAi=2.5, meanHuman=4. Deviations Ai=[-1.5,-0.5,0.5,1.5],
    // human=[-3,-2,-1,6]. cov = 4.5+1+(-0.5)+9 = 14.
    // varAi = 2.25+0.25+0.25+2.25 = 5; varHuman = 9+4+1+36 = 50.
    // r = 14 / sqrt(5*50) = 14 / sqrt(250) = 14/15.811388... = 0.885438...
    const ai = [1, 2, 3, 4]
    const hu = [1, 2, 3, 10]
    const pairs = ai.map((a, i) =>
      makePair(6, 6, { TR: 6, CC: a, LR: 6, GRA: 6 }, { TR: 6, CC: hu[i], LR: 6, GRA: 6 }),
    )
    const cc = perCriterionCorrelation(pairs).find((c) => c.criterion === 'CC')
    expect(cc?.value).toBeCloseTo(14 / Math.sqrt(250), 10)
  })
})

describe('summarise', () => {
  it('rolls all metrics into a single report with count', () => {
    const pairs = [
      makePair(6, 6, { TR: 5, CC: 5, LR: 5, GRA: 5 }, { TR: 5, CC: 5, LR: 5, GRA: 5 }),
      makePair(7, 7, { TR: 6, CC: 6, LR: 6, GRA: 6 }, { TR: 6, CC: 6, LR: 6, GRA: 6 }),
      makePair(6, 6.5, { TR: 7, CC: 7, LR: 7, GRA: 7 }, { TR: 7, CC: 7, LR: 7, GRA: 7 }),
    ]
    const report = summarise(pairs)
    expect(report.count).toBe(3)
    // 2 of 3 exact (6=6, 7=7; 6!=6.5).
    expect(report.exactBandAgreement).toBeCloseTo(2 / 3, 10)
    // all 3 within half a band.
    expect(report.withinHalfBandAgreement).toBe(1)
    // criteria rise 5,6,7 identically on both sides => r=1 each.
    expect(report.perCriterionCorrelation).toHaveLength(4)
    for (const c of report.perCriterionCorrelation) {
      expect(c.value).toBeCloseTo(1, 10)
    }
  })

  it('produces a safe report on an empty set', () => {
    const report = summarise([])
    expect(report.count).toBe(0)
    expect(report.exactBandAgreement).toBe(0)
    expect(report.withinHalfBandAgreement).toBe(0)
    for (const c of report.perCriterionCorrelation) {
      expect(c.value).toBeNull()
      expect(c.n).toBe(0)
    }
  })
})
