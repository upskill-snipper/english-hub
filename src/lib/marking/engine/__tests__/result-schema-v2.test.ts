// ─── MarkingResultV2 — doc-13 §2 schema & gate guard tests ───────────────────
// WHY: Doc 13 (§2.8) names `MarkingResultV2` as the canonical marking result and
// §2.9 pins the confidence-gate thresholds. These are the analytics/routing
// contract: a change to a field name, the gate thresholds, or the criterion-code
// order must be a DELIBERATE, reviewed edit. This test fails loudly otherwise.
//
// It also confirms (at compile time, via hand-written literals) that both an
// IELTS (`overall.kind:'band'`, `criteria[].scale:'band'`) and a GCSE
// (`overall.kind:'grade'`, `criteria[].scale:'marks'`) `MarkingResultV2` value
// type-check — the doc-13 §2 build-step-2 acceptance criterion.
//
// Phase 1 is ADDITIVE: this test only READS the new engine types/helpers; it
// touches nothing outside src/lib/marking/engine/.
// ─────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'

import {
  IELTS_CRITERION_CODES,
  MARKING_RESULT_SCHEMA_VERSION,
  type MarkingResultV2,
  type BandCriterionScore,
  type MarksCriterionScore,
  type MarkingError,
  type EvidenceSpanV2 as EvidenceSpan,
} from '@/lib/marking/engine/result-schema'
import {
  computeNeedsHumanReview,
  NEEDS_HUMAN_REVIEW_THRESHOLDS,
} from '@/lib/marking/engine/result/confidence'
import {
  overallDisagreement,
  computeOverallBand,
  OVERALL_DISAGREEMENT_THRESHOLD,
} from '@/lib/marking/engine/result/overall'
import type { Band } from '@/lib/ielts/types'

// ─── Hand-written literals (compile-time acceptance: IELTS + GCSE both type-check)

const verifiedSpan: EvidenceSpan = {
  quote: 'In conclusion, the benefits outweigh the drawbacks.',
  explanation: 'A clear position is restated, supporting Task Response.',
  verified: true,
}

const ieltsResult: MarkingResultV2 = {
  schemaVersion: 2,
  packVersion: 'ielts_writing_v2025.1',
  module: 'ielts_writing',
  board: 'IELTS',
  taskType: 'IELTS_Writing_Task2',
  criteria: [
    {
      code: 'TR',
      label: 'Task Response',
      scale: 'band',
      band: 7,
      maxBand: 9,
      descriptorMatched: 'addresses all parts of the task',
      evidence: [verifiedSpan],
      confidence: 0.82,
      rationale: 'All parts addressed with a clear position.',
    },
    {
      code: 'CC',
      label: 'Coherence and Cohesion',
      scale: 'band',
      band: 7,
      maxBand: 9,
      descriptorMatched: 'logically organises information',
      evidence: [verifiedSpan],
      confidence: 0.8,
      rationale: 'Clear progression with effective paragraphing.',
    },
    {
      code: 'LR',
      label: 'Lexical Resource',
      scale: 'band',
      band: 6,
      maxBand: 9,
      descriptorMatched: 'adequate range of vocabulary',
      evidence: [verifiedSpan],
      confidence: 0.75,
      rationale: 'Some less common items; occasional inaccuracy.',
    },
    {
      code: 'GRA',
      label: 'Grammatical Range and Accuracy',
      scale: 'band',
      band: 6,
      maxBand: 9,
      descriptorMatched: 'mix of simple and complex forms',
      evidence: [verifiedSpan],
      confidence: 0.78,
      rationale: 'Complex forms attempted with some errors.',
    },
  ],
  overall: {
    kind: 'band',
    overallBand: 6.5,
    proposedOverallBand: 6.5,
  },
  errors: [
    {
      type: 'grammar.tense',
      quote: 'he go to school',
      correction: 'he goes to school',
      explanation: 'Present-simple third person needs -s.',
      severity: 'moderate',
      verified: true,
    },
  ],
  integrityFlags: {
    under_length: false,
    off_topic: false,
    likely_memorised: false,
    copied_from_prompt: false,
  },
  validationFlags: {
    unverifiedEvidenceCount: 0,
    overallDisagreement: false,
    selfConsistencyRun: false,
    selfConsistencyDiverged: false,
  },
  overallConfidence: 0.8,
  needsHumanReview: false,
  feedback: {
    strengths: [{ point: 'Clear position throughout.' }],
    improvements: [
      { point: 'Widen vocabulary range.', microLessonErrorType: 'lexical.word_choice' },
    ],
    nextAction: 'Revise complex-sentence punctuation.',
    summary: 'A solid band-6.5 response.',
  },
  holisticNote: 'Competent, well-structured essay.',
  borderlineFlags: [],
  provenance: { markedAt: '2026-05-29T00:00:00.000Z', runCount: 1 },
}

const gcseResult: MarkingResultV2 = {
  schemaVersion: 2,
  packVersion: 'aqa_lit_paper1_v2025.1',
  module: 'gcse_english',
  board: 'AQA',
  subject: 'English Literature',
  qualification: 'GCSE',
  taskType: 'GCSE_Lit_Paper1_Q1',
  questionId: 'Q1',
  criteria: [
    {
      code: 'AO1',
      label: 'AO1 — Read, understand and respond',
      scale: 'marks',
      awardedMarks: 10,
      maxMarks: 12,
      band: 'Level 4',
      descriptorMatched: 'critical, exploratory response',
      evidence: [verifiedSpan],
      confidence: 0.7,
      rationale: 'Perceptive engagement with the text.',
    },
  ],
  overall: {
    kind: 'grade',
    totalMarks: 10,
    maxMarks: 12,
    predictedGrade: '7',
    gradeBand: 'Grade 6-7',
    boundarySource: 'aqa-proxy',
    boundaryDetail: 'Indicative AQA proxy curve.',
  },
  errors: [],
  integrityFlags: {
    under_length: false,
    off_topic: false,
    likely_memorised: false,
    copied_from_prompt: false,
  },
  validationFlags: {
    unverifiedEvidenceCount: 0,
    overallDisagreement: false,
    selfConsistencyRun: false,
    selfConsistencyDiverged: false,
    gradeIndicativeOnly: true,
  },
  overallConfidence: 0.72,
  needsHumanReview: false,
  feedback: {
    strengths: [{ point: 'Perceptive textual analysis.' }],
    improvements: [{ point: 'Embed quotations more fluently.' }],
    nextAction: 'Practise integrating shorter quotations.',
    nextStepsToNextGrade: ['Analyse writer methods in more depth.'],
    summary: 'A strong Level 4 response.',
  },
  provenance: { markedAt: '2026-05-29T00:00:00.000Z', runCount: 1 },
}

describe('MarkingResultV2: schema discriminators & criterion codes', () => {
  it('pins the schema-version discriminator at 2', () => {
    expect(MARKING_RESULT_SCHEMA_VERSION).toBe(2)
    expect(ieltsResult.schemaVersion).toBe(2)
    expect(gcseResult.schemaVersion).toBe(2)
  })

  it('pins the canonical IELTS criterion-code order [TR, CC, LR, GRA]', () => {
    expect([...IELTS_CRITERION_CODES]).toEqual(['TR', 'CC', 'LR', 'GRA'])
  })

  it('IELTS result uses the band-scale criterion + band overall unions', () => {
    expect(ieltsResult.overall.kind).toBe('band')
    expect(ieltsResult.criteria.map((c) => c.code)).toEqual(['TR', 'CC', 'LR', 'GRA'])
    for (const c of ieltsResult.criteria) {
      // Narrow on the discriminant per doc 13 §2.4.
      expect(c.scale).toBe('band')
      const band = c as BandCriterionScore
      expect(band.maxBand).toBe(9)
      expect(Number.isInteger(band.band)).toBe(true)
    }
  })

  it('GCSE result uses the marks-scale criterion + grade overall unions', () => {
    expect(gcseResult.overall.kind).toBe('grade')
    const c = gcseResult.criteria[0] as MarksCriterionScore
    expect(c.scale).toBe('marks')
    expect(c.awardedMarks).toBeLessThanOrEqual(c.maxMarks)
    expect(typeof c.band).toBe('string')
  })

  it('errors carry a required severity and validator-owned verified flag (doc 13 §2.3)', () => {
    const err: MarkingError = ieltsResult.errors[0]
    expect(err.severity).toBe('moderate')
    expect(err.verified).toBe(true)
    expect(err.type).toBe('grammar.tense')
  })

  it('evidence spans carry the validator-owned verified flag (doc 13 §2.2)', () => {
    expect(ieltsResult.criteria[0].evidence[0].verified).toBe(true)
  })
})

describe('computeNeedsHumanReview: the confidence gate (doc 13 §2.9)', () => {
  const clear = {
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

  it('pins the gate thresholds (0.7 overall, 0.6 criterion)', () => {
    expect(NEEDS_HUMAN_REVIEW_THRESHOLDS.overall).toBe(0.7)
    expect(NEEDS_HUMAN_REVIEW_THRESHOLDS.criterion).toBe(0.6)
  })

  it('an all-clear result does NOT need human review', () => {
    expect(computeNeedsHumanReview(clear)).toBe(false)
  })

  it('trigger 1: overall confidence below 0.7', () => {
    expect(computeNeedsHumanReview({ ...clear, overallConfidence: 0.69 })).toBe(true)
  })

  it('trigger 2: any criterion confidence below 0.6', () => {
    expect(
      computeNeedsHumanReview({ ...clear, criteria: [{ confidence: 0.8 }, { confidence: 0.59 }] }),
    ).toBe(true)
  })

  it('trigger 3: any integrity flag raised', () => {
    expect(
      computeNeedsHumanReview({
        ...clear,
        integrityFlags: { ...clear.integrityFlags, off_topic: true },
      }),
    ).toBe(true)
  })

  it('trigger 4: overall proposed-vs-computed disagreement', () => {
    expect(
      computeNeedsHumanReview({
        ...clear,
        validationFlags: { ...clear.validationFlags, overallDisagreement: true },
      }),
    ).toBe(true)
  })

  it('trigger 5: self-consistency diverged', () => {
    expect(
      computeNeedsHumanReview({
        ...clear,
        validationFlags: { ...clear.validationFlags, selfConsistencyDiverged: true },
      }),
    ).toBe(true)
  })
})

describe('overallDisagreement: |proposed − computed| > 0.5 (doc 13 §3.3)', () => {
  it('pins the disagreement threshold at 0.5', () => {
    expect(OVERALL_DISAGREEMENT_THRESHOLD).toBe(0.5)
  })

  it('exactly 0.5 apart is NOT a disagreement (strictly greater than)', () => {
    expect(overallDisagreement(6.5, 6.0)).toBe(false)
  })

  it('more than 0.5 apart IS a disagreement', () => {
    expect(overallDisagreement(7.0, 6.0)).toBe(true)
  })

  it('identical values are not a disagreement', () => {
    expect(overallDisagreement(6.5, 6.5)).toBe(false)
  })
})

describe('computeOverallBand: reuses ielts/bands half-band rounding (doc 13 §1.2)', () => {
  it.each<[string, [Band, Band, Band, Band], Band]>([
    ['frac < .25 floors', [6.24 as Band, 6.24 as Band, 6.24 as Band, 6.24 as Band], 6 as Band],
    ['frac .25 → half', [6.25 as Band, 6.25 as Band, 6.25 as Band, 6.25 as Band], 6.5 as Band],
    [
      'frac < .75 stays half',
      [6.74 as Band, 6.74 as Band, 6.74 as Band, 6.74 as Band],
      6.5 as Band,
    ],
    ['frac >= .75 rounds up', [6.75 as Band, 6.75 as Band, 6.75 as Band, 6.75 as Band], 7 as Band],
  ])('%s', (_label, bands, expected) => {
    expect(computeOverallBand(bands)).toBe(expected)
  })

  it('returns null until all four bands are present', () => {
    expect(computeOverallBand([6 as Band, 6 as Band, 6 as Band, null])).toBeNull()
  })
})
