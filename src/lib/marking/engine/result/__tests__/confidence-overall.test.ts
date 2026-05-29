// ─── Guard tests for the MarkingResultV2 code-owned helpers (doc 13 §2.9/§5.1) ─
// WHY: doc 13 build-step 3 + 6 require the confidence-gate thresholds (0.7 / 0.6)
// and the overall-disagreement rule (> 0.5) to be PINNED so a change is a
// deliberate, reviewed edit, and require the overall recompute to REUSE
// `src/lib/ielts/bands.ts:overallBand` (never re-implement the half-band rounding).
//
// These tests live alongside the helpers they protect (result/confidence.ts +
// result/overall.ts) and touch nothing outside src/lib/marking/engine/result/.
// ─────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'

import {
  computeNeedsHumanReview,
  NEEDS_HUMAN_REVIEW_THRESHOLDS,
} from '@/lib/marking/engine/result/confidence'
import {
  computeOverallBand,
  overallDisagreement,
  OVERALL_DISAGREEMENT_THRESHOLD,
} from '@/lib/marking/engine/result/overall'
import { overallBand } from '@/lib/ielts/bands'
import type { Band } from '@/lib/ielts/types'

const clearGate = {
  overallConfidence: 0.9,
  criteria: [{ confidence: 0.8 }, { confidence: 0.85 }],
  integrityFlags: {
    under_length: false,
    off_topic: false,
    likely_memorised: false,
    copied_from_prompt: false,
  },
  validationFlags: { overallDisagreement: false, selfConsistencyDiverged: false },
} as const

describe('confidence gate thresholds are pinned at 0.7 / 0.6 (doc 13 §2.9)', () => {
  it('pins the exact threshold constants', () => {
    expect(NEEDS_HUMAN_REVIEW_THRESHOLDS.overall).toBe(0.7)
    expect(NEEDS_HUMAN_REVIEW_THRESHOLDS.criterion).toBe(0.6)
  })

  it('overall 0.69 → review, 0.70 → ok (strict <)', () => {
    expect(computeNeedsHumanReview({ ...clearGate, overallConfidence: 0.69 })).toBe(true)
    expect(computeNeedsHumanReview({ ...clearGate, overallConfidence: 0.7 })).toBe(false)
  })

  it('criterion 0.59 → review, 0.60 → ok (strict <)', () => {
    expect(computeNeedsHumanReview({ ...clearGate, criteria: [{ confidence: 0.59 }] })).toBe(true)
    expect(computeNeedsHumanReview({ ...clearGate, criteria: [{ confidence: 0.6 }] })).toBe(false)
  })

  it('an all-clear result does NOT need human review', () => {
    expect(computeNeedsHumanReview(clearGate)).toBe(false)
  })

  it('each integrity / validation trigger independently flips to review', () => {
    expect(
      computeNeedsHumanReview({
        ...clearGate,
        integrityFlags: { ...clearGate.integrityFlags, off_topic: true },
      }),
    ).toBe(true)
    expect(
      computeNeedsHumanReview({
        ...clearGate,
        validationFlags: { ...clearGate.validationFlags, overallDisagreement: true },
      }),
    ).toBe(true)
    expect(
      computeNeedsHumanReview({
        ...clearGate,
        validationFlags: { ...clearGate.validationFlags, selfConsistencyDiverged: true },
      }),
    ).toBe(true)
  })
})

describe('overallDisagreement is pinned at > 0.5 (doc 13 §5.1)', () => {
  it('pins the threshold constant', () => {
    expect(OVERALL_DISAGREEMENT_THRESHOLD).toBe(0.5)
  })

  it('exactly 0.5 apart is NOT a disagreement; more than 0.5 IS', () => {
    expect(overallDisagreement(6.5, 6.0)).toBe(false)
    expect(overallDisagreement(7.0, 6.0)).toBe(true)
    expect(overallDisagreement(6.5, 6.5)).toBe(false)
  })
})

describe('computeOverallBand reuses ielts/bands.overallBand (doc 13 §1.2)', () => {
  it('delegates to the exact same rounding as bands.ts', () => {
    const cases: [Band, Band, Band, Band][] = [
      [6.5 as Band, 6.5 as Band, 6.5 as Band, 5.5 as Band],
      [7 as Band, 7 as Band, 7 as Band, 6 as Band],
      [8 as Band, 7 as Band, 7 as Band, 7 as Band],
    ]
    for (const bands of cases) {
      expect(computeOverallBand(bands)).toBe(overallBand([...bands]))
    }
  })

  it('applies the half-band rule (.24 floor, .25 half, .74 half, .75 up)', () => {
    expect(computeOverallBand([6.24 as Band, 6.24 as Band, 6.24 as Band, 6.24 as Band])).toBe(6)
    expect(computeOverallBand([6.25 as Band, 6.25 as Band, 6.25 as Band, 6.25 as Band])).toBe(6.5)
    expect(computeOverallBand([6.74 as Band, 6.74 as Band, 6.74 as Band, 6.74 as Band])).toBe(6.5)
    expect(computeOverallBand([6.75 as Band, 6.75 as Band, 6.75 as Band, 6.75 as Band])).toBe(7)
  })

  it('returns null until all four bands are present', () => {
    expect(computeOverallBand([6 as Band, 6 as Band, 6 as Band, null])).toBeNull()
  })
})
