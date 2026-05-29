/**
 * Tests for next-best-action + predictive readiness (design doc 18 §4.3 / §4.4).
 * Deterministic, fixture-based — no DB, no model calls.
 *
 * Invariants exercised:
 * - recommendations key on the SAME engine taxonomy / marker criterion codes;
 * - spaced-repetition resurfacing lifts a dormant weak area up the queue;
 * - tie-breaking is deterministic (error types before criteria, canonical order);
 * - focusOn returns exactly one;
 * - readinessEstimate REFUSES to forecast below MIN_TREND_POINTS (the load-bearing
 *   low-data refusal) and never emits false-precision weeks;
 * - improving → finite weeks WITH an uncertainty band; flat/declining → stalled,
 *   no weeks; at-target → achieved; no NaN/Infinity across any status.
 */

import { describe, it, expect } from 'vitest'
import {
  nextBestActions,
  focusOn,
  microLessonSlugFor,
  readinessEstimate,
  MIN_TREND_POINTS,
  ON_TRACK_HORIZON_WEEKS,
  MAX_RECOMMENDATIONS,
  type TrendPoint,
} from '../recommendation'
import type { ErrorProfile, ErrorTypeStat, CriterionTrend, TrendDirection } from '../mastery'
import {
  errorCategory,
  MARKING_ERROR_CATEGORIES,
  type MarkingErrorType,
} from '../../error-taxonomy'

// ─── Fixture helpers ─────────────────────────────────────────────────────────

function stat(type: MarkingErrorType, count: number): ErrorTypeStat {
  return { type, category: errorCategory(type), count }
}

/** Build an ErrorProfile from a list of (type,count) stats. */
function makeProfile(stats: readonly ErrorTypeStat[]): ErrorProfile {
  const byCategory = {} as Record<(typeof MARKING_ERROR_CATEGORIES)[number], number>
  for (const c of MARKING_ERROR_CATEGORIES) byCategory[c] = 0
  let total = 0
  for (const s of stats) {
    byCategory[s.category] += s.count
    total += s.count
  }
  const sorted = [...stats].sort((a, b) =>
    b.count !== a.count ? b.count - a.count : a.type < b.type ? -1 : 1,
  )
  return {
    learnerId: 'L1',
    totalErrors: total,
    byType: sorted,
    byCategory,
    topTypes: sorted.slice(0, 3),
  }
}

function trend(
  code: string,
  label: string,
  normalised: readonly number[],
  direction: TrendDirection,
): CriterionTrend {
  return {
    code,
    label,
    normalisedScores: normalised,
    awardedScores: normalised.map((n) => n * 9),
    delta: normalised.length > 1 ? normalised[normalised.length - 1] - normalised[0] : 0,
    direction,
  }
}

function daysAfter(base: string, days: number): string {
  return new Date(new Date(base).getTime() + days * 24 * 60 * 60 * 1000).toISOString()
}

// ─── microLessonSlugFor ──────────────────────────────────────────────────────

describe('microLessonSlugFor', () => {
  it('derives a stable URL-safe slug from an error type (no second map)', () => {
    expect(microLessonSlugFor({ kind: 'error_type', errorType: 'grammar.tense' })).toBe(
      'grammar-tense',
    )
    expect(microLessonSlugFor({ kind: 'error_type', errorType: 'lexical.word_choice' })).toBe(
      'lexical-word_choice',
    )
  })

  it('derives a criterion slug from the marker code', () => {
    expect(microLessonSlugFor({ kind: 'criterion', criterionCode: 'GRA' })).toBe('criterion-gra')
  })
})

// ─── nextBestActions ─────────────────────────────────────────────────────────

describe('nextBestActions', () => {
  it('returns nothing for a clean/empty profile (honest: nothing to recommend)', () => {
    expect(nextBestActions({ errorProfile: makeProfile([]) })).toEqual([])
    expect(focusOn({ errorProfile: makeProfile([]) })).toBeNull()
  })

  it('ranks recurring errors by frequency share, most frequent first', () => {
    const p = makeProfile([
      stat('grammar.tense', 3),
      stat('lexical.spelling', 2),
      stat('discourse.cohesion', 1),
    ])
    const recs = nextBestActions({ errorProfile: p })
    expect(recs[0].target).toEqual({ kind: 'error_type', errorType: 'grammar.tense' })
    expect(recs[1].target).toEqual({ kind: 'error_type', errorType: 'lexical.spelling' })
    expect(recs[0].priorityScore).toBeGreaterThan(recs[1].priorityScore)
    expect(recs[0].microLessonSlug).toBe('grammar-tense')
  })

  it('applies spaced-repetition resurfacing: a dormant weak area is boosted up', () => {
    const p = makeProfile([stat('grammar.tense', 3), stat('lexical.collocation', 2)])

    // Without recency, the more frequent tense leads.
    expect(nextBestActions({ errorProfile: p })[0].target).toEqual({
      kind: 'error_type',
      errorType: 'grammar.tense',
    })

    // With heavy dormancy on the rarer error, resurfacing lifts it ahead.
    const boosted = nextBestActions({
      errorProfile: p,
      recency: [
        { type: 'grammar.tense', submissionsSinceLastSeen: 0 },
        { type: 'lexical.collocation', submissionsSinceLastSeen: 50 },
      ],
    })
    expect(boosted[0].target).toEqual({
      kind: 'error_type',
      errorType: 'lexical.collocation',
    })
    expect(boosted[0].reason).toMatch(/not practised in 50 submission/)
  })

  it('clamps NaN dormancy to zero (deterministic, no crash)', () => {
    const p = makeProfile([stat('grammar.tense', 2)])
    const recs = nextBestActions({
      errorProfile: p,
      recency: [{ type: 'grammar.tense', submissionsSinceLastSeen: Number.NaN }],
    })
    expect(recs[0].priorityScore).toBeCloseTo(1, 5) // pure share, no boost
  })

  it('recommends a weak criterion and a declining one, skips a strong stable one', () => {
    const p = makeProfile([])
    const recs = nextBestActions({
      errorProfile: p,
      criterionTrends: [
        trend('GRA', 'Grammar', [0.5], 'flat'), // weak → recommended
        trend('LR', 'Lexical Resource', [0.9, 0.78], 'declining'), // declining → recommended
        trend('TR', 'Task Response', [0.95], 'flat'), // strong + stable → skipped
      ],
    })
    const targets = recs.map((r) => r.target)
    expect(targets).toContainEqual({ kind: 'criterion', criterionCode: 'GRA' })
    expect(targets).toContainEqual({ kind: 'criterion', criterionCode: 'LR' })
    expect(targets).not.toContainEqual({ kind: 'criterion', criterionCode: 'TR' })
  })

  it('breaks ties deterministically: error types before criteria; canonical order', () => {
    const p = makeProfile([stat('grammar.article', 1), stat('grammar.tense', 1)])
    const recs = nextBestActions({
      errorProfile: p,
      criterionTrends: [trend('GRA', 'Grammar', [0.7], 'flat')],
    })
    const articleIdx = recs.findIndex(
      (r) => r.target.kind === 'error_type' && r.target.errorType === 'grammar.article',
    )
    const tenseIdx = recs.findIndex(
      (r) => r.target.kind === 'error_type' && r.target.errorType === 'grammar.tense',
    )
    const criterionIdx = recs.findIndex((r) => r.target.kind === 'criterion')
    // article (canonical idx 1) before tense (idx 2); both errors before criterion.
    expect(articleIdx).toBeLessThan(tenseIdx)
    expect(tenseIdx).toBeLessThan(criterionIdx)
    // Determinism: re-running yields identical order.
    const again = nextBestActions({
      errorProfile: p,
      criterionTrends: [trend('GRA', 'Grammar', [0.7], 'flat')],
    })
    expect(again.map((r) => r.microLessonSlug)).toEqual(recs.map((r) => r.microLessonSlug))
  })

  it('caps the list at MAX_RECOMMENDATIONS', () => {
    const types: MarkingErrorType[] = [
      'grammar.subject_verb_agreement',
      'grammar.article',
      'grammar.tense',
      'grammar.preposition',
      'grammar.word_order',
      'grammar.sentence_structure',
      'grammar.punctuation',
    ]
    const p = makeProfile(types.map((t) => stat(t, 1)))
    expect(nextBestActions({ errorProfile: p }).length).toBe(MAX_RECOMMENDATIONS)
  })

  it('focusOn returns exactly the top recommendation', () => {
    const p = makeProfile([stat('grammar.tense', 2), stat('lexical.spelling', 1)])
    const top = focusOn({ errorProfile: p })
    expect(top).not.toBeNull()
    expect(top!.target).toEqual({ kind: 'error_type', errorType: 'grammar.tense' })
    expect(top).toEqual(nextBestActions({ errorProfile: p })[0])
  })
})

// ─── readinessEstimate ───────────────────────────────────────────────────────

describe('readinessEstimate', () => {
  const base = '2026-01-01T00:00:00.000Z'

  it('REFUSES to forecast with <MIN_TREND_POINTS (low-data refusal)', () => {
    const r = readinessEstimate(
      [
        { date: base, band: 5 },
        { date: daysAfter(base, 7), band: 5.5 },
      ],
      7,
    )
    expect(r.status).toBe('insufficient_data')
    expect(r.weeksToTarget).toBeNull()
    expect(r.weeksToTargetLow).toBeNull()
    expect(r.weeksToTargetHigh).toBeNull()
    expect(r.ratePerWeek).toBeNull()
    expect(r.confidence).toBeLessThan(0.3)
    expect(r.summary).toMatch(/[Nn]ot enough data yet/)
    expect(r.sampleCount).toBe(2)
  })

  it('handles zero data without NaN and refuses', () => {
    const r = readinessEstimate([], 7)
    expect(r.status).toBe('insufficient_data')
    expect(r.currentBand).toBeNull()
    expect(r.confidence).toBe(0)
    expect(r.summary).toMatch(/[Nn]ot enough data yet/)
  })

  it('forecasts finite weeks WITH an uncertainty band when improving (on_track)', () => {
    const t: TrendPoint[] = [
      { date: base, band: 5.0 },
      { date: daysAfter(base, 7), band: 5.5 },
      { date: daysAfter(base, 14), band: 6.0 },
      { date: daysAfter(base, 21), band: 6.5 },
    ]
    const r = readinessEstimate(t, 7)
    expect(r.status).toBe('on_track')
    expect(r.ratePerWeek).toBeCloseTo(0.5, 2)
    expect(r.weeksToTarget).toBeGreaterThan(0)
    expect(r.weeksToTarget).toBeLessThanOrEqual(ON_TRACK_HORIZON_WEEKS)
    expect(r.weeksToTargetLow).toBeLessThanOrEqual(r.weeksToTarget!)
    expect(r.weeksToTargetHigh).toBeGreaterThanOrEqual(r.weeksToTarget!)
    // A clean fit yields meaningful (non-trivial) confidence in (0,1].
    expect(r.confidence).toBeGreaterThan(0.3)
    expect(r.confidence).toBeLessThanOrEqual(1)
    expect(r.summary).toMatch(/trajectory/)
  })

  it('classifies a very slow improver as slow, not on_track', () => {
    const t: TrendPoint[] = [
      { date: base, band: 5.0 },
      { date: daysAfter(base, 30), band: 5.05 },
      { date: daysAfter(base, 60), band: 5.1 },
      { date: daysAfter(base, 90), band: 5.15 },
    ]
    const r = readinessEstimate(t, 7)
    expect(r.status).toBe('slow')
    expect(r.weeksToTarget).toBeGreaterThan(ON_TRACK_HORIZON_WEEKS)
    expect(r.weeksToTargetHigh).toBeGreaterThan(r.weeksToTarget!)
  })

  it('reports achieved when already at/above target', () => {
    const t: TrendPoint[] = [
      { date: base, band: 7.0 },
      { date: daysAfter(base, 7), band: 7.5 },
      { date: daysAfter(base, 14), band: 7.5 },
    ]
    const r = readinessEstimate(t, 7)
    expect(r.status).toBe('achieved')
    expect(r.weeksToTarget).toBe(0)
    expect(r.summary).toMatch(/[Aa]lready at or above/)
  })

  it('reports stalled with NO weeks for a flat trajectory (refuses to extrapolate)', () => {
    const t: TrendPoint[] = [
      { date: base, band: 6.0 },
      { date: daysAfter(base, 7), band: 6.0 },
      { date: daysAfter(base, 14), band: 6.0 },
      { date: daysAfter(base, 21), band: 6.0 },
    ]
    const r = readinessEstimate(t, 7)
    expect(r.status).toBe('stalled')
    expect(r.weeksToTarget).toBeNull()
    expect(r.weeksToTargetLow).toBeNull()
    expect(r.weeksToTargetHigh).toBeNull()
    expect(r.summary).toMatch(/no upward trend|flat or declining/)
  })

  it('reports stalled for a declining trajectory and never returns a fake finish', () => {
    const t: TrendPoint[] = [
      { date: base, band: 6.5 },
      { date: daysAfter(base, 7), band: 6.0 },
      { date: daysAfter(base, 14), band: 5.5 },
    ]
    const r = readinessEstimate(t, 7)
    expect(r.status).toBe('stalled')
    expect(r.weeksToTarget).toBeNull()
    expect(r.ratePerWeek!).toBeLessThan(0)
  })

  it('is order-independent (sorts by date internally) and deterministic', () => {
    const ordered: TrendPoint[] = [
      { date: base, band: 5.0 },
      { date: daysAfter(base, 7), band: 5.5 },
      { date: daysAfter(base, 14), band: 6.0 },
    ]
    const shuffled = [ordered[2], ordered[0], ordered[1]]
    const a = readinessEstimate(ordered, 7)
    const b = readinessEstimate(shuffled, 7)
    expect(a.weeksToTarget).toBeCloseTo(b.weeksToTarget!, 6)
    expect(a.status).toBe(b.status)
  })

  it('produces no NaN/Infinity on any numeric field across statuses', () => {
    const cases: TrendPoint[][] = [
      [],
      [{ date: base, band: 6 }],
      [
        { date: base, band: 5 },
        { date: daysAfter(base, 7), band: 6 },
        { date: daysAfter(base, 14), band: 7 },
      ],
      [
        { date: base, band: 6 },
        { date: daysAfter(base, 7), band: 6 },
        { date: daysAfter(base, 14), band: 6 },
      ],
    ]
    for (const c of cases) {
      const r = readinessEstimate(c, 8)
      for (const v of [
        r.currentBand,
        r.ratePerWeek,
        r.weeksToTarget,
        r.weeksToTargetLow,
        r.weeksToTargetHigh,
        r.confidence,
      ]) {
        if (v !== null) expect(Number.isFinite(v)).toBe(true)
      }
    }
  })

  it('widens the uncertainty band (relative to horizon) for a noisier fit', () => {
    const clean: TrendPoint[] = [
      { date: base, band: 5.0 },
      { date: daysAfter(base, 7), band: 5.5 },
      { date: daysAfter(base, 14), band: 6.0 },
      { date: daysAfter(base, 21), band: 6.5 },
    ]
    const noisy: TrendPoint[] = [
      { date: base, band: 5.0 },
      { date: daysAfter(base, 7), band: 6.2 },
      { date: daysAfter(base, 14), band: 5.3 },
      { date: daysAfter(base, 21), band: 6.5 },
    ]
    const rc = readinessEstimate(clean, 7)
    const rn = readinessEstimate(noisy, 7)
    // Confidence is the primary honesty signal: a noisier fit is less confident.
    expect(rn.confidence).toBeLessThan(rc.confidence)
    // Width = 2*(1-confidence)*weeksToTarget; the RELATIVE band (width/horizon)
    // isolates the noise factor from the differing horizon magnitudes.
    const relWidth = (r: typeof rc): number =>
      (r.weeksToTargetHigh! - r.weeksToTargetLow!) / r.weeksToTarget!
    expect(relWidth(rn)).toBeGreaterThan(relWidth(rc))
  })

  it('drops invalid points (bad dates / non-finite bands) before fitting', () => {
    const t: TrendPoint[] = [
      { date: base, band: 5.0 },
      { date: 'not-a-date', band: 9 },
      { date: daysAfter(base, 7), band: Number.NaN },
      { date: daysAfter(base, 14), band: 6.0 },
      { date: daysAfter(base, 21), band: 6.5 },
    ]
    const r = readinessEstimate(t, 7)
    expect(r.sampleCount).toBe(3) // three valid points remain
    expect(['on_track', 'slow']).toContain(r.status)
  })

  it('MIN_TREND_POINTS is the documented small-N threshold', () => {
    expect(MIN_TREND_POINTS).toBe(3)
  })
})
