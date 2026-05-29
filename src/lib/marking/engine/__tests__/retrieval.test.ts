/**
 * Tests for the Retrieval layer (doc 12). Pure unit logic — no Prisma, no live DB, no
 * network/model. Asserts the doc-12 acceptance set:
 *   • descriptor selection emits ONLY the task's (pack's) criteria, whole rubric;
 *   • nearest-band exemplar selection (estimate 6 → bands 6 & 7; top-of-range fallback);
 *   • zero-exemplar path returns none + sets `exemplarsOmitted`;
 *   • rubricBlock and exemplarBlock are SEPARATE fields with an explicit cache boundary;
 *   • the cheap first-pass estimate is deterministic, model-free, integer-in-range, and
 *     under-length essays cap low;
 *   • the exemplar block honours the token cap (trim ladder).
 */

import { describe, it, expect } from 'vitest'
import type {
  KnowledgePack,
  PackCriterion,
  PackExemplar,
  PackEstimator,
  RawSubmission,
} from '../types'
import {
  selectMarkingContext,
  retrieve,
  estimateFirstPassBand,
  selectExemplars,
  buildExemplarBank,
  formatRubricBlock,
  formatExemplarBlock,
  approxTokens,
  MAX_EXEMPLARS,
} from '../retrieval'

// ── Fixtures ──────────────────────────────────────────────────────────────────

const ESTIMATOR: PackEstimator = {
  minBand: 4,
  maxBand: 8,
  thresholds: {
    ttrHigh: 0.5,
    ttrLow: 0.35,
    meanSentenceLenHigh: 18,
    meanSentenceLenLow: 10,
    paragraphCountGood: 4,
    discourseMarkerHitsGood: 4,
    minWordCount: 250,
    underLengthCapBand: 5,
  },
}

const CRITERIA: readonly PackCriterion[] = [
  {
    code: 'TR',
    label: 'Task Response',
    bands: [
      { band: 5, descriptor: 'addresses the task only partially' },
      { band: 6, descriptor: 'addresses all parts of the task' },
      { band: 7, descriptor: 'addresses all parts with a clear position' },
    ],
  },
  {
    code: 'CC',
    label: 'Coherence and Cohesion',
    bands: [
      { band: 6, descriptor: 'arranges information coherently' },
      { band: 7, descriptor: 'logically organises with clear progression' },
    ],
  },
  {
    code: 'LR',
    label: 'Lexical Resource',
    bands: [{ band: 6, descriptor: 'adequate range of vocabulary' }],
  },
  {
    code: 'GRA',
    label: 'Grammatical Range and Accuracy',
    bands: [{ band: 6, descriptor: 'mix of simple and complex forms' }],
  },
]

function exemplar(
  id: string,
  overallBand: number,
  essay = 'A graded sample essay body.',
): PackExemplar {
  return {
    id,
    overallBand,
    essay,
    rationale: `Awarded band ${overallBand} for balanced argument.`,
    sourceTag: 'own_expert_marked',
  }
}

const EXEMPLARS: readonly PackExemplar[] = [
  exemplar('b5', 5),
  exemplar('b6', 6),
  exemplar('b7', 7),
  exemplar('b8', 8),
]

function makePack(overrides: Partial<KnowledgePack> = {}): KnowledgePack {
  return {
    version: 'ielts_writing_v2025.1',
    // Manifest is not consulted by Retrieval; a minimal cast keeps the fixture focused.
    manifest: {} as KnowledgePack['manifest'],
    criteria: CRITERIA,
    exemplars: EXEMPLARS,
    conventions: {},
    promptTemplate: '{{BAND_DESCRIPTORS}} {{EXEMPLARS}}',
    estimator: ESTIMATOR,
    ...overrides,
  }
}

/** A long, lexically diverse, well-paragraphed answer that should estimate high. */
function makeStrongAnswer(): string {
  const sentence =
    'Modern societies increasingly depend on renewable technologies because conventional fossil resources steadily diminish over successive decades, however careful planning remains essential. '
  const para = sentence.repeat(4)
  // Four paragraphs with discourse markers, well over 250 words.
  return [
    `Firstly, ${para}`,
    `Moreover, ${para} Therefore policymakers must intervene.`,
    `On the other hand, ${para} For example, subsidies distort markets.`,
    `In conclusion, ${para} Consequently, balance is required.`,
  ].join('\n\n')
}

function makeSubmission(answerText: string): RawSubmission {
  return { questionText: 'Discuss both views and give your opinion.', answerText }
}

// ── Descriptor selection: ONLY the task's descriptors, whole rubric ────────────

describe('formatRubricBlock — descriptor selection', () => {
  it('emits ALL four criteria and EVERY band (whole rubric, doc 12 §2.1)', () => {
    const block = formatRubricBlock(CRITERIA)
    for (const c of CRITERIA) {
      expect(block).toContain(c.code)
      expect(block).toContain(c.label)
      for (const b of c.bands) {
        expect(block).toContain(b.descriptor)
        expect(block).toContain(`Band ${b.band}`)
      }
    }
  })

  it("contains ONLY the pack's criteria — no other criterion codes leak in", () => {
    const block = formatRubricBlock(CRITERIA)
    // A criterion not in this pack must not appear.
    expect(block).not.toContain('AO1')
    expect(block).not.toContain('AO2')
  })

  it('is byte-identical for the same criteria (cache-stability invariant, doc 12 §2.5)', () => {
    expect(formatRubricBlock(CRITERIA)).toBe(formatRubricBlock(CRITERIA))
  })
})

// ── First-pass estimate: cheap, deterministic, model-free, in range ────────────

describe('estimateFirstPassBand — cheap no-model heuristic', () => {
  it('caps an under-length (<250w) essay low (doc 12 §2.4/§3.1)', () => {
    const est = estimateFirstPassBand(makeSubmission('This is a very short answer.'), ESTIMATOR)
    expect(est.band).toBeLessThanOrEqual(ESTIMATOR.thresholds.underLengthCapBand as number)
  })

  it('estimates a long, diverse, well-paragraphed essay >= 7', () => {
    const est = estimateFirstPassBand(makeSubmission(makeStrongAnswer()), ESTIMATOR)
    expect(est.band).toBeGreaterThanOrEqual(7)
  })

  it('always returns an integer band within the estimator range [4, 8]', () => {
    for (const text of ['', 'short', makeStrongAnswer(), 'word '.repeat(300)]) {
      const est = estimateFirstPassBand(makeSubmission(text), ESTIMATOR)
      expect(Number.isInteger(est.band)).toBe(true)
      expect(est.band).toBeGreaterThanOrEqual(4)
      expect(est.band).toBeLessThanOrEqual(8)
    }
  })

  it('is deterministic — same input yields same output', () => {
    const sub = makeSubmission(makeStrongAnswer())
    expect(estimateFirstPassBand(sub, ESTIMATOR)).toEqual(estimateFirstPassBand(sub, ESTIMATOR))
  })

  it('stamps source heuristic by default and honours forceEstimateSource (provenance only)', () => {
    const sub = makeSubmission(makeStrongAnswer())
    expect(estimateFirstPassBand(sub, ESTIMATOR).source).toBe('heuristic')
    const forced = estimateFirstPassBand(sub, ESTIMATOR, { forceEstimateSource: 'cheap-model' })
    expect(forced.source).toBe('cheap-model')
    // Forcing the source must NOT change the computed band (model-free computation).
    expect(forced.band).toBe(estimateFirstPassBand(sub, ESTIMATOR).band)
  })

  it('floors an empty answer at the estimator minimum', () => {
    expect(estimateFirstPassBand(makeSubmission('   '), ESTIMATOR).band).toBe(ESTIMATOR.minBand)
  })
})

// ── Nearest-band exemplar selection ────────────────────────────────────────────

describe('selectExemplars — nearest-band anchoring', () => {
  const bank = buildExemplarBank(EXEMPLARS)

  it('estimate 6 selects band-6 and band-7 exemplars (the spec example)', () => {
    const sel = selectExemplars(bank, 6)
    const bands = sel.map((e) => e.overallBand).sort()
    expect(bands).toEqual([6, 7])
  })

  it('top-of-range estimate 8 with no band-9 falls back to bands 7 and 8', () => {
    const sel = selectExemplars(bank, 8)
    const bands = sel.map((e) => e.overallBand).sort()
    expect(bands).toEqual([7, 8])
  })

  it('puts the estimated band first (most relevant anchor)', () => {
    expect(selectExemplars(bank, 6)[0]?.overallBand).toBe(6)
  })

  it('empty bank returns [] without throwing (zero-exemplar fallback)', () => {
    expect(selectExemplars(buildExemplarBank([]), 6)).toEqual([])
  })

  it('never returns more than MAX_EXEMPLARS scripts', () => {
    const dense = buildExemplarBank([
      exemplar('a', 6),
      exemplar('b', 6),
      exemplar('c', 7),
      exemplar('d', 7),
      exemplar('e', 5),
    ])
    expect(selectExemplars(dense, 6).length).toBeLessThanOrEqual(MAX_EXEMPLARS)
  })

  it('buckets half-band exemplars to their rounded integer band', () => {
    const bank2 = buildExemplarBank([exemplar('h', 6.5)])
    // 6.5 rounds to 7 (round-half-up), so an estimate of 6 should still find it at band 7.
    const sel = selectExemplars(bank2, 6)
    expect(sel.map((e) => e.id)).toContain('h')
  })
})

// ── Exemplar block formatting + token cap (trim ladder) ────────────────────────

describe('formatExemplarBlock — budgeting and trimming', () => {
  it('empty selection yields an empty block flagged omitted', () => {
    const res = formatExemplarBlock([], 1200)
    expect(res.block).toBe('')
    expect(res.omitted).toBe(true)
    expect(res.trimmed).toBe(false)
    expect(res.tokens).toBe(0)
  })

  it('full set under cap is rendered untrimmed with band tag + rationale + essay', () => {
    const res = formatExemplarBlock([exemplar('b6', 6), exemplar('b7', 7)], 1200)
    expect(res.trimmed).toBe(false)
    expect(res.omitted).toBe(false)
    expect(res.block).toContain('Band 6')
    expect(res.block).toContain('Band 7')
    expect(res.block).toContain('Examiner note')
  })

  it('drops to the single nearest exemplar when the full set exceeds the cap', () => {
    const big = 'lorem ipsum dolor sit amet '.repeat(200)
    const sel = [exemplar('b6', 6, big), exemplar('b7', 7, big)]
    // Cap large enough for one but not both.
    const cap =
      approxTokens(`### Exemplar (Band 6) [own_expert_marked]\nExaminer note: x\n\n${big}`) + 50
    const res = formatExemplarBlock(sel, cap)
    expect(res.trimmed).toBe(true)
    expect(res.tokens).toBeLessThanOrEqual(cap)
    // Only the nearest (first) exemplar survives.
    expect(res.block).toContain('Band 6')
    expect(res.block).not.toContain('Band 7')
  })

  it('truncates the essay body but keeps band tag + rationale when a single exemplar is over cap', () => {
    const big = 'word '.repeat(2000)
    const ex = exemplar('b6', 6, big)
    const res = formatExemplarBlock([ex], 80)
    expect(res.trimmed).toBe(true)
    expect(res.tokens).toBeLessThanOrEqual(80)
    expect(res.block).toContain('Band 6')
    expect(res.block).toContain(ex.rationale)
    expect(res.block).toContain('[truncated]')
  })
})

// ── Public orchestration: selectMarkingContext / retrieve ──────────────────────

describe('selectMarkingContext — orchestration', () => {
  it('returns the whole rubric + two nearest-band exemplars + budget + packVersion', () => {
    // A mid-band essay (~band 6) so it selects bands 6 & 7.
    const sub = makeSubmission(
      'Firstly, ' +
        'people often disagree about this topic for many different reasons every day. '.repeat(20) +
        '\n\nHowever, in conclusion the balance matters greatly.',
    )
    const res = selectMarkingContext(makePack(), sub)

    // Whole rubric present.
    expect(res.rubricBlock).toContain('TR')
    expect(res.rubricBlock).toContain('GRA')

    // Separate fields + explicit cache boundary (R-CACHE).
    expect(res.cacheableBoundary).toBe('after-rubric')
    expect(typeof res.rubricBlock).toBe('string')
    expect(typeof res.exemplarBlock).toBe('string')
    // The submission-specific exemplar block must NOT be part of the cacheable rubric block.
    expect(res.rubricBlock).not.toContain('Examiner note')

    // Provenance + budget populated.
    expect(res.packVersion).toBe('ielts_writing_v2025.1')
    expect(res.budget.cacheableTokens).toBe(approxTokens(res.rubricBlock))
    expect(res.budget.exemplarTokens).toBe(approxTokens(res.exemplarBlock))
    expect(res.selectedExemplars.length).toBeGreaterThan(0)
    expect(res.selectedExemplars.length).toBeLessThanOrEqual(MAX_EXEMPLARS)
  })

  it('zero-exemplar pack returns rubric only with exemplarsOmitted = true (no anchors)', () => {
    const res = selectMarkingContext(
      makePack({ exemplars: [] }),
      makeSubmission(makeStrongAnswer()),
    )
    expect(res.exemplarBlock).toBe('')
    expect(res.selectedExemplars).toEqual([])
    expect(res.budget.exemplarsOmitted).toBe(true)
    expect(res.budget.exemplarTokens).toBe(0)
    // Rubric still present so the marker stays descriptor-grounded.
    expect(res.rubricBlock).toContain('TR')
  })

  it('honours an explicit exemplarTokenCap override', () => {
    const res = selectMarkingContext(makePack(), makeSubmission(makeStrongAnswer()), {
      exemplarTokenCap: 30,
    })
    expect(res.budget.exemplarTokens).toBeLessThanOrEqual(30)
  })

  it('rubric block is byte-identical across two submissions sharing a pack version (cache stability)', () => {
    const a = selectMarkingContext(makePack(), makeSubmission('Short under-length answer.'))
    const b = selectMarkingContext(makePack(), makeSubmission(makeStrongAnswer()))
    // Different essays → likely different exemplar blocks, but the cached rubric prefix
    // must be identical (the whole point of returning the blocks separately).
    expect(a.rubricBlock).toBe(b.rubricBlock)
  })

  it('retrieve() seam adapter delegates to selectMarkingContext', () => {
    const pack = makePack()
    const submission = makeSubmission(makeStrongAnswer())
    expect(retrieve({ pack, submission })).toEqual(selectMarkingContext(pack, submission))
  })

  it('is deterministic — same pack + submission yields an equal result (consistency, doc 12 §0)', () => {
    const pack = makePack()
    const sub = makeSubmission(makeStrongAnswer())
    expect(selectMarkingContext(pack, sub)).toEqual(selectMarkingContext(pack, sub))
  })
})
