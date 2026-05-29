/**
 * WHY: These tests pin the behaviour of the anti-hallucination BACKSTOP. The
 * validator is the last line of defence against showing a candidate a fabricated
 * or arithmetically wrong mark, so its failure modes — fabrication caught,
 * arithmetic overridden, missing criterion rejected, OQ-5 thresholds routed, the
 * OQ-3 single-retry budget honoured — must be locked down and deterministic.
 */

import { describe, expect, it } from 'vitest'
import {
  normaliseForMatch,
  quoteAppearsInEssay,
  validate,
  type ValidateOptions,
} from '../validator'
import { IELTS_CRITERION_CODES } from '../result-schema'
import type {
  BandCriterionScore,
  IeltsCriterionCode,
  MarkingError,
  MarkingResultV2,
} from '../result-schema'

const ESSAY =
  'Some people believe that technology improves our lives. ' +
  'In my opinion, the benefits clearly outweigh the drawbacks. ' +
  'Firstly, communication has become instantaneous and cheap.'

const LABELS: Readonly<Record<IeltsCriterionCode, string>> = {
  TR: 'Task Response',
  CC: 'Coherence and Cohesion',
  LR: 'Lexical Resource',
  GRA: 'Grammatical Range and Accuracy',
}

/** Build one band criterion with sane, high-confidence, verbatim-quote defaults. */
function criterion(
  code: IeltsCriterionCode,
  overrides: Partial<BandCriterionScore> = {},
): BandCriterionScore {
  return {
    scale: 'band',
    code,
    label: LABELS[code],
    descriptorMatched: 'matched descriptor',
    rationale: 'rationale',
    band: 7,
    maxBand: 9,
    confidence: 0.9,
    evidence: [
      {
        quote: 'the benefits clearly outweigh the drawbacks',
        explanation: 'clear position',
        verified: false,
      },
    ],
    ...overrides,
  }
}

/** A verbatim error quote (default errors list is one valid grammar example). */
function validError(quote: string): MarkingError {
  return {
    type: 'grammar.subject_verb_agreement',
    quote,
    correction: 'corrected',
    severity: 'minor',
    verified: false,
  }
}

/** Build a full, valid result that should pass cleanly. */
function validResult(overrides: Partial<MarkingResultV2> = {}): MarkingResultV2 {
  return {
    schemaVersion: 2,
    packVersion: 'ielts_writing_v2025.1',
    module: 'ielts_writing',
    board: 'IELTS',
    taskType: 'IELTS_Writing_Task2',
    criteria: IELTS_CRITERION_CODES.map((code) => criterion(code)),
    overall: { kind: 'band', overallBand: 7, proposedOverallBand: 7 },
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
    },
    overallConfidence: 0.9,
    needsHumanReview: false,
    feedback: {
      strengths: [],
      improvements: [],
      nextAction: 'Develop your second body paragraph further.',
      summary: 'A solid response.',
    },
    provenance: { markedAt: '2026-05-29T00:00:00.000Z', runCount: 1 },
    ...overrides,
  }
}

const FRESH: ValidateOptions = { retryAlreadyHappened: false }
const AFTER_RETRY: ValidateOptions = { retryAlreadyHappened: true }

describe('normaliseForMatch', () => {
  it('lowercases, collapses whitespace, and maps smart punctuation', () => {
    expect(normaliseForMatch('  The   QUICK\nbrown  ')).toBe('the quick brown')
    expect(normaliseForMatch('don’t “stop”')).toBe('don\'t "stop"')
    expect(normaliseForMatch('a–b—c')).toBe('a-b-c')
  })

  it('does not strip punctuation or stopwords (would loosen the backstop)', () => {
    expect(normaliseForMatch("it's, really!")).toBe("it's, really!")
  })
})

describe('quoteAppearsInEssay', () => {
  it('matches a verbatim span ignoring case and whitespace', () => {
    expect(quoteAppearsInEssay('THE BENEFITS   clearly outweigh', ESSAY)).toBe(true)
  })

  it('rejects an empty or whitespace-only quote', () => {
    expect(quoteAppearsInEssay('', ESSAY)).toBe(false)
    expect(quoteAppearsInEssay('   ', ESSAY)).toBe(false)
  })

  it('rejects a quote that is not in the essay', () => {
    expect(quoteAppearsInEssay('artificial intelligence is dangerous', ESSAY)).toBe(false)
  })
})

describe('validate — happy path', () => {
  it('returns ok and marks every evidence span verified for a clean result', () => {
    const outcome = validate(validResult(), ESSAY, FRESH)
    expect(outcome.kind).toBe('ok')
    if (outcome.kind !== 'ok') return
    for (const c of outcome.result.criteria) {
      if (c.scale !== 'band') continue
      for (const span of c.evidence) {
        expect(span.verified).toBe(true)
      }
    }
    expect(outcome.result.needsHumanReview).toBe(false)
  })
})

describe('validate — Check 2: fabrication backstop', () => {
  it('catches a fabricated evidence span and flags it (fresh -> retry)', () => {
    const result = validResult({
      criteria: IELTS_CRITERION_CODES.map((code) =>
        code === 'TR'
          ? criterion(code, {
              evidence: [
                {
                  quote: 'a quote that was never written',
                  explanation: 'invented',
                  verified: false,
                },
              ],
            })
          : criterion(code),
      ),
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('retry')
    if (outcome.kind !== 'retry') return
    expect(outcome.reasons.some((r) => r.includes('fabricated evidence'))).toBe(true)
  })

  it('catches a fabricated error quote and routes to human after retry spent', () => {
    const result = validResult({
      errors: [validError('is went to the shops')],
    })
    const outcome = validate(result, ESSAY, AFTER_RETRY)
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.result.needsHumanReview).toBe(true)
    expect(outcome.result.errors[0]?.verified).toBe(false)
  })

  it('passes a verbatim error quote', () => {
    const result = validResult({
      errors: [validError('communication has become instantaneous')],
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('ok')
    if (outcome.kind !== 'ok') return
    expect(outcome.result.errors[0]?.verified).toBe(true)
  })
})

describe('validate — Check 3: recompute overall (never trust model arithmetic)', () => {
  it('overwrites the model overall with the recomputed value + flags disagreement', () => {
    // Bands all 7 -> computed overall 7, but the model lies and proposes 9.
    const result = validResult({
      overall: { kind: 'band', overallBand: 9, proposedOverallBand: 9 },
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.result.overall.kind).toBe('band')
    if (outcome.result.overall.kind !== 'band') return
    expect(outcome.result.overall.overallBand).toBe(7)
    expect(outcome.result.overall.proposedOverallBand).toBe(9)
    expect(outcome.result.validationFlags.overallDisagreement).toBe(true)
    expect(outcome.reasons.some((r) => r.includes('band disagreement'))).toBe(true)
  })

  it('does not flag disagreement within the 0.5 tolerance', () => {
    // Bands 7,7,7,8 -> mean 7.25 -> rounds to 7.5; model proposes 7 (diff 0.5).
    const result = validResult({
      criteria: [
        criterion('TR', { band: 7 }),
        criterion('CC', { band: 7 }),
        criterion('LR', { band: 7 }),
        criterion('GRA', { band: 8 }),
      ],
      overall: { kind: 'band', overallBand: 7, proposedOverallBand: 7 },
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('ok')
    if (outcome.kind !== 'ok') return
    if (outcome.result.overall.kind !== 'band') return
    expect(outcome.result.overall.overallBand).toBe(7.5)
    expect(outcome.result.validationFlags.overallDisagreement).toBe(false)
  })
})

describe('validate — Check 1: range-check criteria', () => {
  it('fails when a criterion is missing (fresh -> retry)', () => {
    const result = validResult({
      criteria: [criterion('TR'), criterion('CC'), criterion('LR')],
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('retry')
    if (outcome.kind !== 'retry') return
    expect(outcome.reasons.some((r) => r.includes('missing criterion: GRA'))).toBe(true)
  })

  it('routes a missing criterion to human review after the retry is spent', () => {
    const result = validResult({
      criteria: [criterion('TR'), criterion('CC'), criterion('LR')],
    })
    const outcome = validate(result, ESSAY, AFTER_RETRY)
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.result.needsHumanReview).toBe(true)
  })

  it('fails an out-of-range band', () => {
    const result = validResult({
      criteria: IELTS_CRITERION_CODES.map((code) =>
        code === 'LR' ? criterion(code, { band: 11 }) : criterion(code),
      ),
    })
    expect(validate(result, ESSAY, FRESH).kind).toBe('retry')
  })

  it('fails a non-half-band value', () => {
    const result = validResult({
      criteria: IELTS_CRITERION_CODES.map((code) =>
        code === 'CC' ? criterion(code, { band: 7.3 }) : criterion(code),
      ),
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('retry')
    if (outcome.kind !== 'retry') return
    expect(outcome.reasons.some((r) => r.includes('half-band'))).toBe(true)
  })

  it('fails a duplicate criterion', () => {
    const result = validResult({
      criteria: [
        criterion('TR'),
        criterion('TR'),
        criterion('CC'),
        criterion('LR'),
        criterion('GRA'),
      ],
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('retry')
    if (outcome.kind !== 'retry') return
    expect(outcome.reasons.some((r) => r.includes('duplicate criterion'))).toBe(true)
  })
})

describe('validate — Check 4: needs-human-review thresholds (OQ-5)', () => {
  it('routes to review when overallConfidence < 0.7', () => {
    const outcome = validate(validResult({ overallConfidence: 0.65 }), ESSAY, FRESH)
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.reasons.some((r) => r.includes('overallConfidence'))).toBe(true)
  })

  it('routes to review when a criterion confidence < 0.6', () => {
    const result = validResult({
      criteria: IELTS_CRITERION_CODES.map((code) =>
        code === 'LR' ? criterion(code, { confidence: 0.5 }) : criterion(code),
      ),
    })
    const outcome = validate(result, ESSAY, FRESH)
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.reasons.some((r) => r.includes('criterion confidence below 0.6'))).toBe(true)
  })

  it('routes to review when an integrity flag is set', () => {
    const outcome = validate(
      validResult({
        integrityFlags: {
          under_length: false,
          off_topic: true,
          likely_memorised: false,
          copied_from_prompt: false,
        },
      }),
      ESSAY,
      FRESH,
    )
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.reasons.some((r) => r.includes('integrity flag'))).toBe(true)
  })

  it('routes to review when self-consistency diverged', () => {
    const outcome = validate(
      validResult({
        validationFlags: {
          unverifiedEvidenceCount: 0,
          overallDisagreement: false,
          selfConsistencyRun: true,
          selfConsistencyDiverged: true,
        },
      }),
      ESSAY,
      FRESH,
    )
    expect(outcome.kind).toBe('humanReview')
    if (outcome.kind !== 'humanReview') return
    expect(outcome.reasons.some((r) => r.includes('self-consistency'))).toBe(true)
  })
})

describe('validate — determinism + purity', () => {
  it('produces identical outcomes for identical inputs', () => {
    expect(validate(validResult(), ESSAY, FRESH)).toEqual(validate(validResult(), ESSAY, FRESH))
  })

  it('does not mutate the input result', () => {
    const input = validResult({
      overall: { kind: 'band', overallBand: 9, proposedOverallBand: 9 },
    })
    const snapshot = JSON.parse(JSON.stringify(input))
    validate(input, ESSAY, FRESH)
    expect(input).toEqual(snapshot)
  })
})
