/**
 * Tests for learner mastery + error analytics (design doc 18 §4.1 mastery,
 * §4.2 error-analytics). Deterministic, fixture-based — no DB, no model calls.
 *
 * Invariants exercised:
 * - results sort by provenance.markedAt (id tie-break) before trending, so input
 *   order MUST NOT change output;
 * - direction thresholds (±0.05 normalised) are shared across mastery + cohort;
 * - both criterion scales (band/maxBand and awardedMarks/maxMarks) normalise to
 *   [0,1], with divide-by-zero guarded;
 * - errorProfile aggregates on the ENGINE taxonomy (grammar/lexical/discourse/task)
 *   and skips unknown types;
 * - DP-3: cohortErrorAggregate cannot emit any quote or identifier.
 */

import { describe, it, expect } from 'vitest'
import type { MarkingResultV2, BandCriterionScore, MarkingError } from '../../result-schema'
import { MARKING_ERROR_CATEGORIES } from '../../error-taxonomy'
import {
  type LearnerResult,
  perCriterionTrend,
  masteryNarrative,
  errorProfile,
  cohortErrorAggregate,
  classifyDirection,
  TREND_THRESHOLDS,
  DEFAULT_TOP_N,
} from '../mastery'

/** Build a band-scale criterion tersely (IELTS shape, maxBand 9). */
function band(code: string, label: string, value: number): BandCriterionScore {
  return {
    scale: 'band',
    code,
    label,
    descriptorMatched: `descriptor:${code}`,
    evidence: [],
    confidence: 0.8,
    rationale: `rationale:${code}`,
    band: value,
    maxBand: 9,
  }
}

/** Build a tagged error tersely. */
function err(type: MarkingError['type'], quote: string): MarkingError {
  return { type, quote, correction: `fix:${quote}`, severity: 'minor', verified: true }
}

/** Build a MarkingResultV2 fixture with the given criteria/errors at a timestamp. */
function makeResult(
  markedAt: string,
  criteria: readonly BandCriterionScore[],
  errors: readonly MarkingError[],
): MarkingResultV2 {
  return {
    schemaVersion: 2,
    packVersion: 'ielts_writing_v2025.1',
    module: 'ielts_writing',
    board: 'IELTS',
    taskType: 'IELTS_Writing_Task2',
    criteria,
    overall: { kind: 'band', overallBand: 6, proposedOverallBand: 6 },
    errors,
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
    feedback: { strengths: [], improvements: [], nextAction: 'practise', summary: 'ok' },
    provenance: { markedAt, runCount: 1 },
  }
}

/** Build a LearnerResult wrapper. */
function lr(
  learnerId: string,
  id: string,
  markedAt: string,
  criteria: readonly BandCriterionScore[] = [],
  errors: readonly MarkingError[] = [],
): LearnerResult {
  return { learnerId, id, result: makeResult(markedAt, criteria, errors) }
}

describe('classifyDirection', () => {
  it('uses the shared ±0.05 thresholds', () => {
    expect(classifyDirection(TREND_THRESHOLDS.improving)).toBe('improving')
    expect(classifyDirection(0.049)).toBe('flat')
    expect(classifyDirection(0)).toBe('flat')
    expect(classifyDirection(-0.049)).toBe('flat')
    expect(classifyDirection(TREND_THRESHOLDS.declining)).toBe('declining')
  })
})

describe('perCriterionTrend', () => {
  it('orders by markedAt ascending regardless of input order', () => {
    const late = lr('L1', 'r-late', '2026-03-01T00:00:00Z', [band('GRA', 'Grammar', 9)])
    const early = lr('L1', 'r-early', '2026-01-01T00:00:00Z', [band('GRA', 'Grammar', 5)])
    const [gra] = perCriterionTrend([late, early]) // input reversed on purpose
    expect(gra.code).toBe('GRA')
    expect(gra.normalisedScores).toEqual([5 / 9, 9 / 9])
    expect(gra.awardedScores).toEqual([5, 9])
    expect(gra.delta).toBeCloseTo(4 / 9, 10)
    expect(gra.direction).toBe('improving')
  })

  it('breaks markedAt ties by id lexicographically', () => {
    const same = '2026-01-01T00:00:00Z'
    const r2 = lr('L1', 'r-2', same, [band('GRA', 'Grammar', 8)])
    const r1 = lr('L1', 'r-1', same, [band('GRA', 'Grammar', 2)])
    const [gra] = perCriterionTrend([r2, r1])
    expect(gra.awardedScores).toEqual([2, 8]) // r-1 sorts before r-2
  })

  it('guards divide-by-zero when maxBand is 0', () => {
    const zeroMax: BandCriterionScore = { ...band('GRA', 'Grammar', 0), maxBand: 0 }
    const r = lr('L1', 'r', '2026-01-01T00:00:00Z', [zeroMax])
    const [gra] = perCriterionTrend([r])
    expect(gra.normalisedScores).toEqual([0])
    expect(gra.direction).toBe('flat')
  })

  it('tracks multiple criteria independently and preserves first-seen order', () => {
    const r1 = lr('L1', 'r-1', '2026-01-01T00:00:00Z', [
      band('GRA', 'Grammar', 5),
      band('TR', 'Task Response', 6),
    ])
    const r2 = lr('L1', 'r-2', '2026-02-01T00:00:00Z', [
      band('GRA', 'Grammar', 7),
      band('TR', 'Task Response', 4),
    ])
    const trends = perCriterionTrend([r1, r2])
    expect(trends.map((t) => t.code)).toEqual(['GRA', 'TR'])
    expect(trends[0].direction).toBe('improving')
    expect(trends[1].direction).toBe('declining')
  })

  it('returns empty for no submissions', () => {
    expect(perCriterionTrend([])).toEqual([])
  })
})

describe('masteryNarrative', () => {
  it('names most-improved (raw marks, 1dp) and weakest criterion', () => {
    const r1 = lr('L1', 'r-1', '2026-01-01T00:00:00Z', [
      band('GRA', 'Grammar', 5.5),
      band('TR', 'Task Response', 3),
    ])
    const r2 = lr('L1', 'r-2', '2026-02-01T00:00:00Z', [
      band('GRA', 'Grammar', 6.5),
      band('TR', 'Task Response', 3),
    ])
    const narrative = masteryNarrative([r1, r2])
    expect(narrative).toContain('grammar has climbed from 5.5 to 6.5')
    expect(narrative).toContain('over 2 submissions')
    expect(narrative).toContain('persistent weak point is task response')
  })

  it('uses singular "submission" for one result', () => {
    const r = lr('L1', 'r', '2026-01-01T00:00:00Z', [band('GRA', 'Grammar', 5)])
    expect(masteryNarrative([r])).toContain('over 1 submission;')
  })

  it('handles an empty history gracefully', () => {
    expect(masteryNarrative([])).toMatch(/no mastery trend/i)
  })
})

describe('errorProfile', () => {
  it('aggregates per type + per category, keeps most-recent evidence', () => {
    const r1 = lr(
      'L1',
      'r-1',
      '2026-01-01T00:00:00Z',
      [],
      [err('grammar.tense', 'I goed home'), err('lexical.spelling', 'recieve')],
    )
    const r2 = lr(
      'L1',
      'r-2',
      '2026-02-01T00:00:00Z',
      [],
      [err('grammar.tense', 'she go yesterday')],
    )
    const profile = errorProfile('L1', [r1, r2])

    expect(profile.learnerId).toBe('L1')
    expect(profile.totalErrors).toBe(3)
    expect(profile.byCategory.grammar).toBe(2)
    expect(profile.byCategory.lexical).toBe(1)
    expect(profile.byCategory.discourse).toBe(0)

    const tense = profile.byType.find((t) => t.type === 'grammar.tense')
    expect(tense?.count).toBe(2)
    expect(tense?.category).toBe('grammar')
    expect(tense?.latestEvidence).toBe('she go yesterday') // newest wins
  })

  it('sorts byType by count desc then type asc and slices topN', () => {
    const r = lr(
      'L1',
      'r',
      '2026-01-01T00:00:00Z',
      [],
      [
        err('lexical.spelling', 'a'),
        err('lexical.spelling', 'b'),
        err('grammar.tense', 'c'),
        err('discourse.cohesion', 'd'),
        err('task.relevance', 'e'),
      ],
    )
    const profile = errorProfile('L1', [r], 2)
    // lexical.spelling count 2 first; the rest count-1, lexicographic by type.
    expect(profile.byType.map((t) => t.type)).toEqual([
      'lexical.spelling',
      'discourse.cohesion',
      'grammar.tense',
      'task.relevance',
    ])
    expect(profile.topTypes.map((t) => t.type)).toEqual(['lexical.spelling', 'discourse.cohesion'])
  })

  it('defaults topN to DEFAULT_TOP_N', () => {
    const r = lr(
      'L1',
      'r',
      '2026-01-01T00:00:00Z',
      [],
      [
        err('grammar.tense', 'a'),
        err('lexical.spelling', 'b'),
        err('discourse.cohesion', 'c'),
        err('task.relevance', 'd'),
      ],
    )
    const profile = errorProfile('L1', [r])
    expect(profile.topTypes).toHaveLength(DEFAULT_TOP_N)
  })

  it('seeds every taxonomy category at zero', () => {
    const profile = errorProfile('L1', [])
    for (const category of MARKING_ERROR_CATEGORIES) {
      expect(profile.byCategory[category]).toBe(0)
    }
    expect(profile.totalErrors).toBe(0)
  })
})

describe('cohortErrorAggregate (DP-3 de-identification)', () => {
  function cohort(): ReadonlyMap<string, ReadonlyArray<LearnerResult>> {
    return new Map<string, LearnerResult[]>([
      [
        'learner-alpha',
        [
          lr(
            'learner-alpha',
            'a-1',
            '2026-01-01T00:00:00Z',
            [],
            [err('grammar.tense', 'SECRET QUOTE A'), err('grammar.tense', 'SECRET QUOTE B')],
          ),
          lr(
            'learner-alpha',
            'a-2',
            '2026-03-01T00:00:00Z',
            [],
            [err('lexical.spelling', 'recieve')],
          ),
        ],
      ],
      [
        'learner-beta',
        [
          lr(
            'learner-beta',
            'b-1',
            '2026-02-01T00:00:00Z',
            [],
            [err('grammar.tense', 'SECRET QUOTE C')],
          ),
        ],
      ],
    ])
  }

  it('counts types, categories, distinct learners', () => {
    const agg = cohortErrorAggregate(cohort())
    expect(agg.learnerCount).toBe(2)
    expect(agg.totalErrors).toBe(4) // 3x grammar.tense + 1x lexical.spelling
    expect(agg.byCategory.grammar).toBe(3)
    expect(agg.byCategory.lexical).toBe(1)

    const tense = agg.byType.find((t) => t.type === 'grammar.tense')
    expect(tense?.count).toBe(3)
    expect(tense?.learnerCount).toBe(2)
  })

  it('sorts byType by count desc then type asc and surfaces topN', () => {
    const agg = cohortErrorAggregate(cohort(), 1)
    expect(agg.byType.map((t) => t.type)).toEqual(['grammar.tense', 'lexical.spelling'])
    expect(agg.topTypes.map((t) => t.type)).toEqual(['grammar.tense'])
  })

  it('classifies cross-cohort direction with the shared thresholds', () => {
    const agg = cohortErrorAggregate(cohort())
    const tense = agg.byType.find((t) => t.type === 'grammar.tense')
    // grammar.tense clusters in the OLDER half of the global ordering, so its rate
    // falls over time ⇒ improving mastery.
    expect(tense?.direction).toBe('improving')
  })

  it('STRUCTURALLY cannot leak quotes or identifiers (DP-3)', () => {
    const agg = cohortErrorAggregate(cohort())
    const serialised = JSON.stringify(agg)
    expect(serialised).not.toContain('SECRET QUOTE')
    expect(serialised).not.toContain('recieve')
    expect(serialised).not.toContain('learner-alpha')
    expect(serialised).not.toContain('learner-beta')

    // Every leaf STRING must be a known taxonomy type/category or a direction —
    // never free text. (Object keys are field names / category codes, also safe.)
    const KNOWN = new Set<string>([
      'grammar.tense',
      'lexical.spelling',
      ...MARKING_ERROR_CATEGORIES,
      'improving',
      'declining',
      'flat',
    ])
    const assertNoFreeText = (value: unknown): void => {
      if (typeof value === 'string') {
        expect(KNOWN.has(value)).toBe(true)
      } else if (Array.isArray(value)) {
        value.forEach(assertNoFreeText)
      } else if (value !== null && typeof value === 'object') {
        for (const v of Object.values(value as Record<string, unknown>)) {
          assertNoFreeText(v)
        }
      }
      // numbers / booleans are inherently safe.
    }
    assertNoFreeText(agg)
  })

  it('returns flat direction and zero counts for an empty cohort', () => {
    const agg = cohortErrorAggregate(new Map())
    expect(agg.learnerCount).toBe(0)
    expect(agg.totalErrors).toBe(0)
    expect(agg.byType).toEqual([])
    expect(agg.byCategory.grammar).toBe(0)
  })
})
