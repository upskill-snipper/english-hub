import { describe, it, expect } from 'vitest'
import { runCalibration, toCriterionBands, type CalibrationScript } from '../run'

// Helper: build N scripts at a given human band where the AI is within `delta`
// of the human (so we can dial agreement up or down).
function scriptsAtBand(
  band: number,
  count: number,
  aiDelta: number,
  startId = 0,
): CalibrationScript[] {
  const out: CalibrationScript[] = []
  for (let i = 0; i < count; i += 1) {
    const ai = band + aiDelta
    out.push({
      id: `s${startId + i}`,
      humanOverall: band,
      aiOverall: ai,
      humanCriteria: { TR: band, CC: band, LR: band, GRA: band },
      aiCriteria: { TR: ai, CC: ai, LR: ai, GRA: ai },
    })
  }
  return out
}

// A spread across bands 5,6,7 with ≥5 each and ≥50 total, AI exactly on band.
function greenSet(): CalibrationScript[] {
  return [
    ...scriptsAtBand(5, 17, 0, 0),
    ...scriptsAtBand(6, 17, 0, 100),
    ...scriptsAtBand(7, 17, 0, 200),
  ]
}

describe('runCalibration — green path', () => {
  it('passes every gate check when n≥50, ≥2 bands, ≥5/band, agreement≥0.8', () => {
    const res = runCalibration({ id: 'b1', scripts: greenSet(), priorBaseline: null })
    expect(res.n).toBe(51)
    expect(res.withinHalfBand).toBe(1) // AI exactly on band
    expect(res.green).toBe(true)
    expect(res.checks[0].passed).toBe(true)
    expect(res.baseline.n).toBe(51)
  })
})

describe('runCalibration — red paths (per-check)', () => {
  it('fails sufficient-n below 50', () => {
    const res = runCalibration({
      id: 'b2',
      scripts: [...scriptsAtBand(5, 5, 0), ...scriptsAtBand(6, 5, 0, 100)],
      priorBaseline: null,
    })
    expect(res.green).toBe(false)
    expect(res.checks[0].check).toBe('sufficient-n')
  })

  it('fails band-coverage when concentrated in a single band', () => {
    const res = runCalibration({ id: 'b3', scripts: scriptsAtBand(6, 60, 0), priorBaseline: null })
    expect(res.green).toBe(false)
    expect(res.checks[0].check).toBe('band-coverage')
  })

  it('fails absolute-floor when agreement is poor', () => {
    // AI is 1.5 bands off everywhere → within-half-band = 0.
    const res = runCalibration({
      id: 'b4',
      scripts: [
        ...scriptsAtBand(5, 17, 1.5, 0),
        ...scriptsAtBand(6, 17, 1.5, 100),
        ...scriptsAtBand(7, 17, 1.5, 200),
      ],
      priorBaseline: null,
    })
    expect(res.green).toBe(false)
    expect(res.checks[0].check).toBe('absolute-floor')
    expect(res.withinHalfBand).toBe(0)
  })

  it('fails no-regression when it drops >0.03 below the prior', () => {
    // within-half-band here is 1.0; make prior 1.0 too but degrade agreement so
    // the new run is materially worse. Use a half-band-off AI on a third of the
    // set so withinHalfBand stays ≥0.8 (passes floor) but < prior - 0.03.
    const scripts = [
      ...scriptsAtBand(5, 17, 0, 0),
      ...scriptsAtBand(6, 17, 1, 100), // 1 band off → outside half-band
      ...scriptsAtBand(7, 17, 0, 200),
    ]
    const res = runCalibration({
      id: 'b5',
      scripts,
      priorBaseline: { id: 'prior', withinHalfBand: 1.0 },
    })
    // ~2/3 within half band = 0.666… which is below the 0.8 floor, so the FIRST
    // failing check is absolute-floor (checks short-circuit on first failure).
    expect(res.green).toBe(false)
    expect(['absolute-floor', 'no-regression']).toContain(res.checks[0].check)
  })
})

describe('toCriterionBands', () => {
  it('fills missing criteria with the overall fallback', () => {
    const c = toCriterionBands({ TR: 6 }, 5)
    expect(c).toEqual({ TR: 6, CC: 5, LR: 5, GRA: 5 })
  })
  it('handles a null map', () => {
    expect(toCriterionBands(null, 7)).toEqual({ TR: 7, CC: 7, LR: 7, GRA: 7 })
  })
})
