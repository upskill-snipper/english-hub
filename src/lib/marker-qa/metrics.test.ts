// ─── Unit tests - paid-marker QA metrics ─────────────────────────────────────
// Pure, offline, deterministic. Guards the gold-calibration / inter-marker /
// drift maths the admin QA scorecard depends on. No network, no DB, no clock.

import { describe, it, expect } from 'vitest'

import {
  perMarkerGoldAccuracy,
  interMarkerAgreement,
  markerDriftFlags,
  DEFAULT_QA_THRESHOLDS,
  MIN_GOLD_FOR_VERDICT,
  type GoldOutcomeRow,
  type MarkedScriptRow,
} from './metrics'

// ─── Builders ────────────────────────────────────────────────────────────────

function gold(over: Partial<GoldOutcomeRow> & { markerId: string }): GoldOutcomeRow {
  return {
    submissionId: over.submissionId ?? `s-${Math.random()}`,
    markerId: over.markerId,
    markerName: over.markerName ?? `Marker ${over.markerId}`,
    board: over.board ?? 'AQA',
    paper: over.paper ?? 'Paper 1',
    goldExpected: over.goldExpected ?? { mark: 20, grade: '6' },
    markerMark: over.markerMark ?? null,
    markerGrade: over.markerGrade ?? null,
    decidedAt: over.decidedAt ?? null,
  }
}

function script(
  over: Partial<MarkedScriptRow> & { scriptKey: string; markerId: string },
): MarkedScriptRow {
  return {
    submissionId: over.submissionId ?? `${over.scriptKey}-${over.markerId}`,
    scriptKey: over.scriptKey,
    markerId: over.markerId,
    markerName: over.markerName ?? `Marker ${over.markerId}`,
    mark: over.mark ?? null,
    grade: over.grade ?? null,
  }
}

/** N scoreable gold items for a marker with a per-index mark error. */
function goldRun(
  markerId: string,
  count: number,
  errFn: (i: number) => number,
  startIdx = 0,
): GoldOutcomeRow[] {
  return Array.from({ length: count }, (_, k) => {
    const i = startIdx + k
    const expected = 20
    return gold({
      markerId,
      submissionId: `${markerId}-g${i}`,
      goldExpected: { mark: expected, grade: '6' },
      markerMark: expected + errFn(i),
      markerGrade: '6',
      decidedAt: `2026-05-${String((i % 27) + 1).padStart(2, '0')}T00:00:00.000Z`,
    })
  })
}

// ─── perMarkerGoldAccuracy ───────────────────────────────────────────────────

describe('perMarkerGoldAccuracy', () => {
  it('empty input → empty array', () => {
    expect(perMarkerGoldAccuracy([])).toEqual([])
  })

  it('perfect marker: exact=1, within1=1, MAE=0, gradeExact=1, QWK=1', () => {
    const rows = goldRun('m1', 6, () => 0)
    const [r] = perMarkerGoldAccuracy(rows)
    expect(r.markerId).toBe('m1')
    expect(r.gradedCount).toBe(6)
    expect(r.totalGold).toBe(6)
    expect(r.exactRate).toBe(1)
    expect(r.within1Rate).toBe(1)
    expect(r.meanAbsError).toBe(0)
    expect(r.gradeExact).toBe(1)
    expect(r.gradeQwk).toBe(1)
    expect(r.insufficientData).toBe(false)
  })

  it('computes exact / within1 / MAE on raw marks', () => {
    // errors: 0, 0, 1, 2, 3  (5 items) → exact 2/5, within1 3/5, MAE 6/5
    const errs = [0, 0, 1, 2, 3]
    const rows = errs.map((e, i) =>
      gold({
        markerId: 'm1',
        submissionId: `g${i}`,
        goldExpected: { mark: 20, grade: '6' },
        markerMark: 20 + e,
        markerGrade: '6',
      }),
    )
    const [r] = perMarkerGoldAccuracy(rows)
    expect(r.gradedCount).toBe(5)
    expect(r.exactRate).toBe(0.4)
    expect(r.within1Rate).toBe(0.6)
    expect(r.meanAbsError).toBeCloseTo(1.2, 5)
  })

  it('items lacking a comparable mark pair are excluded from gradedCount', () => {
    const rows = [
      gold({ markerId: 'm1', goldExpected: { mark: null, grade: '6' }, markerMark: 5 }),
      gold({ markerId: 'm1', goldExpected: { mark: 20, grade: '6' }, markerMark: null }),
      gold({ markerId: 'm1', goldExpected: { mark: 20, grade: '6' }, markerMark: 20 }),
    ]
    const [r] = perMarkerGoldAccuracy(rows)
    expect(r.totalGold).toBe(3)
    expect(r.gradedCount).toBe(1)
    expect(r.exactRate).toBe(1)
  })

  it('flags insufficientData below MIN_GOLD_FOR_VERDICT', () => {
    const rows = goldRun('m1', MIN_GOLD_FOR_VERDICT - 1, () => 0)
    const [r] = perMarkerGoldAccuracy(rows)
    expect(r.gradedCount).toBe(MIN_GOLD_FOR_VERDICT - 1)
    expect(r.insufficientData).toBe(true)
  })

  it('grade QWK = 0 for a systematic offset (gold 9 always marked 6)', () => {
    const rows = Array.from({ length: 8 }, (_, i) =>
      gold({
        markerId: 'm1',
        submissionId: `g${i}`,
        goldExpected: { mark: 40, grade: '9' },
        markerMark: 30,
        markerGrade: '6',
      }),
    )
    const [r] = perMarkerGoldAccuracy(rows)
    expect(r.gradeExact).toBe(0)
    // Observed disagreement equals expected disagreement under the marginals
    // ⇒ the Art. 15 QWK core yields 0 (no better than chance). Asserts we
    // delegated to evals/stats.ts rather than re-implementing kappa.
    expect(r.gradeQwk).toBe(0)
    expect(r.meanAbsError).toBe(10)
  })

  it('separates and sorts markers by gradedCount desc', () => {
    const rows = [...goldRun('low', 2, () => 0), ...goldRun('high', 5, () => 0)]
    const res = perMarkerGoldAccuracy(rows)
    expect(res.map((r) => r.markerId)).toEqual(['high', 'low'])
  })

  it('does not expose gold_expected on the output shape', () => {
    const [r] = perMarkerGoldAccuracy(goldRun('m1', 5, () => 0))
    expect(Object.keys(r)).not.toContain('goldExpected')
    expect(JSON.stringify(r)).not.toContain('goldExpected')
  })
})

// ─── interMarkerAgreement ────────────────────────────────────────────────────

describe('interMarkerAgreement', () => {
  it('empty input → all zeros', () => {
    const a = interMarkerAgreement([])
    expect(a.sharedScriptCount).toBe(0)
    expect(a.pairObservations).toBe(0)
    expect(a.overallExactRate).toBe(0)
    expect(a.overallWithin1Rate).toBe(0)
    expect(a.overallMeanAbsError).toBe(0)
    expect(a.overallGradeQwk).toBe(0)
    expect(a.pairs).toEqual([])
  })

  it('a script marked by only one marker is not a shared script', () => {
    const a = interMarkerAgreement([
      script({ scriptKey: 'k1', markerId: 'm1', mark: 20, grade: '6' }),
      script({ scriptKey: 'k2', markerId: 'm1', mark: 18, grade: '5' }),
    ])
    expect(a.sharedScriptCount).toBe(0)
    expect(a.pairs).toEqual([])
  })

  it('two markers, two shared scripts: pairwise exact/±1/MAE', () => {
    // k1: 20 vs 20 (err 0). k2: 18 vs 20 (err 2).
    const a = interMarkerAgreement([
      script({ scriptKey: 'k1', markerId: 'm1', mark: 20, grade: '6' }),
      script({ scriptKey: 'k1', markerId: 'm2', mark: 20, grade: '6' }),
      script({ scriptKey: 'k2', markerId: 'm1', mark: 18, grade: '5' }),
      script({ scriptKey: 'k2', markerId: 'm2', mark: 20, grade: '6' }),
    ])
    expect(a.sharedScriptCount).toBe(2)
    expect(a.pairObservations).toBe(2)
    expect(a.overallExactRate).toBe(0.5)
    expect(a.overallWithin1Rate).toBe(0.5) // err 0 ≤1 yes; err 2 ≤1 no
    expect(a.overallMeanAbsError).toBe(1) // (0+2)/2
    expect(a.pairs).toHaveLength(1)
    const p = a.pairs[0]
    expect([p.markerAId, p.markerBId].sort()).toEqual(['m1', 'm2'])
    expect(p.sharedScripts).toBe(2)
    expect(p.exactRate).toBe(0.5)
  })

  it('three markers on one script → 3 unordered pair observations', () => {
    const a = interMarkerAgreement([
      script({ scriptKey: 'k', markerId: 'm1', mark: 20, grade: '6' }),
      script({ scriptKey: 'k', markerId: 'm2', mark: 20, grade: '6' }),
      script({ scriptKey: 'k', markerId: 'm3', mark: 21, grade: '6' }),
    ])
    expect(a.sharedScriptCount).toBe(1)
    expect(a.pairObservations).toBe(3) // (m1,m2),(m1,m3),(m2,m3)
    expect(a.pairs).toHaveLength(3)
    // errors: m1-m2 = 0, m1-m3 = 1, m2-m3 = 1. Values are rounded to 3 dp.
    expect(a.overallExactRate).toBe(0.333)
    expect(a.overallWithin1Rate).toBe(1)
    expect(a.overallMeanAbsError).toBe(0.667)
  })

  it('same marker twice on a script does not self-pair', () => {
    const a = interMarkerAgreement([
      script({ scriptKey: 'k', submissionId: 'a', markerId: 'm1', mark: 20, grade: '6' }),
      script({ scriptKey: 'k', submissionId: 'b', markerId: 'm1', mark: 25, grade: '7' }),
    ])
    expect(a.sharedScriptCount).toBe(0)
    expect(a.pairObservations).toBe(0)
  })

  it('grade QWK pooled across pairs is 1 for perfectly-agreeing markers', () => {
    const rows: MarkedScriptRow[] = []
    const grades = ['9', '7', '5', '4', '2']
    grades.forEach((g, i) => {
      rows.push(script({ scriptKey: `k${i}`, markerId: 'm1', mark: 10 + i, grade: g }))
      rows.push(script({ scriptKey: `k${i}`, markerId: 'm2', mark: 10 + i, grade: g }))
    })
    const a = interMarkerAgreement(rows)
    expect(a.overallGradeQwk).toBe(1)
    expect(a.overallExactRate).toBe(1)
  })

  it('mark-only rows still count for mark metrics; grade-less skip QWK', () => {
    const a = interMarkerAgreement([
      script({ scriptKey: 'k', markerId: 'm1', mark: 20, grade: null }),
      script({ scriptKey: 'k', markerId: 'm2', mark: 22, grade: null }),
    ])
    expect(a.sharedScriptCount).toBe(1)
    expect(a.overallMeanAbsError).toBe(2)
    expect(a.overallGradeQwk).toBe(0) // no grade pairs
  })

  it('is order-independent (deterministic regardless of row order)', () => {
    const base: MarkedScriptRow[] = [
      script({ scriptKey: 'k1', markerId: 'm1', mark: 20, grade: '6' }),
      script({ scriptKey: 'k1', markerId: 'm2', mark: 19, grade: '6' }),
      script({ scriptKey: 'k2', markerId: 'm2', mark: 30, grade: '8' }),
      script({ scriptKey: 'k2', markerId: 'm1', mark: 28, grade: '7' }),
    ]
    const a = interMarkerAgreement(base)
    const b = interMarkerAgreement([...base].reverse())
    expect(a).toEqual(b)
  })
})

// ─── markerDriftFlags ────────────────────────────────────────────────────────

describe('markerDriftFlags', () => {
  it('empty input → empty array', () => {
    expect(markerDriftFlags([])).toEqual([])
  })

  it('insufficient data → not flagged, insufficientData true', () => {
    const rows = goldRun('m1', MIN_GOLD_FOR_VERDICT - 1, () => 0)
    const [f] = markerDriftFlags(rows)
    expect(f.insufficientData).toBe(true)
    expect(f.flagged).toBe(false)
    expect(f.reasons).toEqual([])
  })

  it('a calibrated marker is not flagged', () => {
    const rows = goldRun('m1', 12, () => 0) // all exact
    const [f] = markerDriftFlags(rows)
    expect(f.flagged).toBe(false)
    expect(f.reasons).toEqual([])
    expect(f.insufficientData).toBe(false)
  })

  it('flags low_exact + low_within1 for a poorly-calibrated marker', () => {
    // Every item off by 3 → exact 0, within1 0 (both below floor).
    const rows = goldRun('m1', 10, () => 3)
    const [f] = markerDriftFlags(rows)
    expect(f.flagged).toBe(true)
    expect(f.reasons).toContain('low_exact')
    expect(f.reasons).toContain('low_within1')
  })

  it('flags regression: good baseline then a bad recent window', () => {
    const w = DEFAULT_QA_THRESHOLDS.driftWindow
    // Baseline (oldest, idx 0..5): exact. Recent window (idx 6..6+w-1): off by 3.
    const baseline = goldRun('m1', 6, () => 0, 0)
    const recent = goldRun('m1', w, () => 3, 6)
    const f = markerDriftFlags([...recent, ...baseline]).find((x) => x.markerId === 'm1')!
    expect(f.insufficientData).toBe(false)
    expect(f.baselineExactRate).toBe(1)
    expect(f.recentExactRate).toBe(0)
    expect(f.exactDrop).toBe(1)
    expect(f.reasons).toContain('regression')
    expect(f.flagged).toBe(true)
  })

  it('no regression when recent window matches baseline', () => {
    const w = DEFAULT_QA_THRESHOLDS.driftWindow
    const rows = goldRun('m1', w + 6, () => 0)
    const [f] = markerDriftFlags(rows)
    expect(f.exactDrop).toBe(0)
    expect(f.reasons).not.toContain('regression')
  })

  it('respects custom thresholds', () => {
    const rows = goldRun('m1', 10, () => 1) // exact 0, within1 1
    // Default: within1Min 0.85 → within1=1 passes; exact 0 < 0.55 → low_exact.
    const def = markerDriftFlags(rows)[0]
    expect(def.reasons).toEqual(['low_exact'])
    // Loosen exact floor to 0 → no flags at all.
    const loose = markerDriftFlags(rows, {
      ...DEFAULT_QA_THRESHOLDS,
      goldExactMin: 0,
    })[0]
    expect(loose.flagged).toBe(false)
  })

  it('orders flagged markers before clean ones', () => {
    const bad = goldRun('bad', 10, () => 4)
    const good = goldRun('good', 10, () => 0)
    const res = markerDriftFlags([...good, ...bad])
    expect(res[0].markerId).toBe('bad')
    expect(res[0].flagged).toBe(true)
    expect(res[1].flagged).toBe(false)
  })

  it('is order-independent', () => {
    const rows = goldRun('m1', 15, (i) => (i < 7 ? 0 : 3))
    const a = markerDriftFlags(rows)
    const b = markerDriftFlags([...rows].reverse())
    expect(a).toEqual(b)
  })
})
