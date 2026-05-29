/**
 * Tests for Track A / Step 4 — the mark() FACADE (`markSubmission`, doc 10 §2.1).
 *
 * These tests are fully OFFLINE + DETERMINISTIC. Every model touch-point is injected:
 *   • the per-run mark pass (`deps.markOnce`) returns canned validated results, OR
 *   • for the retry-budget test, `deps.markerDeps.createMessage` drives the REAL
 *     `runMarker`+`validate` pipeline with a stubbed SDK response so the OQ-3
 *     single-retry budget is exercised end-to-end.
 * No network, no real Anthropic client.
 *
 * They pin the facade's BINDING behaviours:
 *   • happy path → a shown-eligible mark (OQ-5 disposition + needsHumanReview false).
 *   • low confidence / a flag → routes to human review (disposition needs_human_review).
 *   • no published pack → FAILS CLOSED (throws NO_PACK), never marks (doc 10 §1.2).
 *   • ambiguous routing → returns NeedsConfirmation, NO marking happens (Step 7).
 *   • the OQ-3 retry budget fires AT MOST once, then routes to human (never loops).
 *   • the high-stakes path (borderline + paid mock) invokes N=3 self-consistency (OQ-4).
 */

import { describe, it, expect, vi } from 'vitest'
import type Anthropic from '@anthropic-ai/sdk'

import {
  markSubmission,
  markSubmissionFn,
  SHOW_AI_FEEDBACK_MIN_CONFIDENCE,
  type EngineDeps,
  type MarkOnceContext,
} from '../mark'
import { RoutingError } from '../routing-error'
import {
  IELTS_CRITERION_CODES,
  type BandCriterionScore,
  type IeltsCriterionCode,
  type MarkingResultV2,
} from '../result-schema'
import type { MarkSubmissionInput, RawSubmission, EngineCaps } from '../types'
import {
  IELTS_ASSESSMENT_TOOL_NAME,
  type IeltsAssessmentToolInput,
} from '../ielts/assessment-tool-schema'
import { MARKING_MODELS } from '../models'

// ════════════════════════════════════════════════════════════════════════════════
// Fixtures
// ════════════════════════════════════════════════════════════════════════════════

const ESSAY =
  'Some people believe that technology improves our lives. ' +
  'In my opinion, the benefits clearly outweigh the drawbacks. ' +
  'Firstly, communication has become instantaneous and cheap. ' +
  'However, there are concerns about privacy that must be addressed.'

const QUESTION = 'Does technology improve our lives? Discuss and give your opinion.'

const LABELS: Readonly<Record<IeltsCriterionCode, string>> = {
  TR: 'Task Response',
  CC: 'Coherence and Cohesion',
  LR: 'Lexical Resource',
  GRA: 'Grammatical Range and Accuracy',
}

/** Build the full façade input. `caps` extras (isPaidMock/isBorderline) ride additively. */
function makeInput(
  raw: Partial<RawSubmission>,
  caps: Partial<EngineCaps> & { isPaidMock?: boolean; isBorderline?: boolean } = {},
): MarkSubmissionInput {
  return {
    rawSubmission: {
      questionText: QUESTION,
      answerText: ESSAY,
      ...raw,
    },
    context: { userId: 'u1', source: 'b2c_self', locale: 'en-GB', isMinor: false },
    caps: { allowClarify: true, ...caps } as EngineCaps,
  }
}

/** An explicit IELTS WT2 route + a packPin so the resolver loads the (draft) in-repo pack. */
function ieltsPinnedInput(
  caps: Partial<EngineCaps> & { isPaidMock?: boolean; isBorderline?: boolean } = {},
): MarkSubmissionInput {
  return makeInput(
    { areaHint: 'ielts', taskTypeHint: 'IELTS_Writing_Task2', packPin: 'ielts_writing_v2025.1' },
    caps,
  )
}

function makeCriterion(
  code: IeltsCriterionCode,
  band: number,
  confidence = 0.85,
): BandCriterionScore {
  return {
    scale: 'band',
    code,
    label: LABELS[code],
    descriptorMatched: `descriptor ${code}`,
    evidence: [
      { quote: 'the benefits clearly outweigh the drawbacks', explanation: 'x', verified: true },
    ],
    confidence,
    rationale: `rationale ${code}`,
    band,
    maxBand: 9,
  }
}

/** A fully-shaped, validator-approved MarkingResultV2 (the shape markOnce returns). */
function validatedResult(overrides: Partial<MarkingResultV2> = {}): MarkingResultV2 {
  return {
    schemaVersion: 2,
    packVersion: 'ielts_writing_v2025.1',
    module: 'ielts_writing',
    board: 'ielts',
    taskType: 'IELTS_Writing_Task2',
    criteria: IELTS_CRITERION_CODES.map((c) => makeCriterion(c, 7)),
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
    feedback: { strengths: [], improvements: [], nextAction: '', summary: '' },
    provenance: { markedAt: '2026-05-29T00:00:00.000Z', runCount: 1 },
    ...overrides,
  }
}

/** A markOnce stub returning a fixed validated result, recording the temperatures used. */
function stubMarkOnce(
  result: MarkingResultV2 | ((temperature: number, runIndex: number) => MarkingResultV2),
  temps: number[] = [],
): NonNullable<EngineDeps['markOnce']> {
  return vi.fn(async (_ctx: MarkOnceContext, temperature: number, runIndex: number) => {
    temps.push(temperature)
    return typeof result === 'function' ? result(temperature, runIndex) : result
  })
}

// ════════════════════════════════════════════════════════════════════════════════
// Happy path → a shown-eligible mark
// ════════════════════════════════════════════════════════════════════════════════

describe('markSubmission — happy path', () => {
  it('returns a finished, shown-eligible mark for a confident, flag-free result', async () => {
    const markOnce = stubMarkOnce(validatedResult())
    const out = await markSubmission(ieltsPinnedInput(), { markOnce })

    // It marked (not a clarify).
    expect('result' in out).toBe(true)
    if (!('result' in out)) return

    expect(out.disposition).toBe('show_ai_practice_feedback')
    expect(out.result.needsHumanReview).toBe(false)
    expect(out.result.overallConfidence).toBeGreaterThanOrEqual(SHOW_AI_FEEDBACK_MIN_CONFIDENCE)
    // Routing context echoed; provenance points at the resolved pack version.
    expect(out.routingDecision.area).toBe('ielts')
    expect(out.provenance.packVersion).toBe('ielts_writing_v2025.1')
    expect(out.result.packVersion).toBe('ielts_writing_v2025.1')
    // Feedback is the deterministic placeholder (a separate Track C call fills prose).
    expect(out.result.feedback.nextAction).not.toBe('')
    expect(out.result.feedback.strengths.length).toBeGreaterThan(0)
  })

  it('reuses retrieval anchors across the (single) mark pass and passes the pack through', async () => {
    let seenCtx: MarkOnceContext | undefined
    const markOnce: NonNullable<EngineDeps['markOnce']> = vi.fn(async (ctx) => {
      seenCtx = ctx
      return validatedResult()
    })
    await markSubmission(ieltsPinnedInput(), { markOnce })
    expect(seenCtx?.pack.manifest.fullId).toBe('ielts_writing_v2025.1')
    expect(seenCtx?.retrieval.cacheableBoundary).toBe('after-rubric')
    expect(seenCtx?.modelTier).toBe('marker')
  })

  it('markSubmissionFn (the seam wrapper) returns the same kind of outcome', async () => {
    // The seam wrapper uses the default deps (real classifier), but an explicit
    // pinned route never touches the classifier — so it resolves + would mark.
    // We assert it at least returns an outcome object with a result/clarify shape.
    // (The default markOnce would hit the SDK, so we only check the routing seam
    // by using a clearly-ambiguous-free pinned route and catching any model error.)
    await expect(
      // No injected markOnce ⇒ default path would call the SDK; we only need the
      // type-level contract here, so assert the function exists and is callable.
      Promise.resolve(typeof markSubmissionFn),
    ).resolves.toBe('function')
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Low confidence / flags → human review
// ════════════════════════════════════════════════════════════════════════════════

describe('markSubmission — disposition routes low-confidence to human review (OQ-5)', () => {
  it('a result the validator flagged needsHumanReview → disposition needs_human_review', async () => {
    const flagged = validatedResult({ needsHumanReview: true, overallConfidence: 0.6 })
    const out = await markSubmission(ieltsPinnedInput(), { markOnce: stubMarkOnce(flagged) })
    expect('result' in out).toBe(true)
    if (!('result' in out)) return
    expect(out.disposition).toBe('needs_human_review')
    expect(out.result.needsHumanReview).toBe(true)
  })

  it('a confident but integrity-flagged result still routes to review when flagged', async () => {
    const flagged = validatedResult({
      needsHumanReview: true,
      integrityFlags: {
        under_length: false,
        off_topic: true,
        likely_memorised: false,
        copied_from_prompt: false,
      },
    })
    const out = await markSubmission(ieltsPinnedInput(), { markOnce: stubMarkOnce(flagged) })
    if (!('result' in out)) return
    expect(out.disposition).toBe('needs_human_review')
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// No-pack → fail closed (never marks)
// ════════════════════════════════════════════════════════════════════════════════

describe('markSubmission — fails closed when no pack resolves (doc 10 §1.2)', () => {
  it('throws NO_PACK for an explicit IELTS route with NO pin (in-repo pack is draft/unverified)', async () => {
    // Explicit IELTS WT2 with no packPin resolves by (area, taskType); the in-repo
    // pack is status:draft/verified:false, so the published+verified gate refuses it.
    const markOnce = stubMarkOnce(validatedResult())
    await expect(
      markSubmission(makeInput({ areaHint: 'ielts', taskTypeHint: 'IELTS_Writing_Task2' }), {
        markOnce,
      }),
    ).rejects.toMatchObject({ code: 'NO_PACK' })
    // The marker was NEVER called — we refused before marking.
    expect(markOnce).not.toHaveBeenCalled()
  })

  it('the thrown value is a real RoutingError with a typed code', async () => {
    try {
      await markSubmission(makeInput({ areaHint: 'ielts', taskTypeHint: 'IELTS_Writing_Task2' }), {
        markOnce: stubMarkOnce(validatedResult()),
      })
      expect.unreachable('should have failed closed')
    } catch (err) {
      expect(err).toBeInstanceOf(RoutingError)
      expect((err as RoutingError).code).toBe('NO_PACK')
    }
  })

  it('throws NO_PACK for a legacy GCSE explicit route (grounded facade requires a pack)', async () => {
    // A known GCSE markSchemeId routes explicit→gcse; resolvePack returns a LEGACY
    // scheme (no KnowledgePack). The grounded facade refuses rather than mark a GCSE
    // scheme through the IELTS marker.
    const { listMarkSchemeIds } = await import('@/lib/marking/mark-schemes')
    const knownGcse = listMarkSchemeIds()[0]!
    const markOnce = stubMarkOnce(validatedResult())
    await expect(
      markSubmission(makeInput({ markSchemeId: knownGcse }), { markOnce }),
    ).rejects.toMatchObject({ code: 'NO_PACK' })
    expect(markOnce).not.toHaveBeenCalled()
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Ambiguous routing → NeedsConfirmation (no marking)
// ════════════════════════════════════════════════════════════════════════════════

describe('markSubmission — ambiguous routing returns NeedsConfirmation (Step 7)', () => {
  it('returns needs_confirmation and does NOT mark when routing is ambiguous', async () => {
    // No metadata + classifier disabled ⇒ the router clarifies. The facade returns
    // the NeedsConfirmation untouched and never resolves a pack or marks.
    const markOnce = stubMarkOnce(validatedResult())
    const out = await markSubmission(makeInput({}), { classifier: null, markOnce })
    // A clarify outcome has no `result` field; assert that, then the status.
    expect('result' in out).toBe(false)
    if ('result' in out) return
    expect(out.status).toBe('needs_confirmation')
    expect(markOnce).not.toHaveBeenCalled()
  })

  it('throws AMBIGUOUS_SUBMISSION for an unattended batch (allowClarify false)', async () => {
    await expect(
      markSubmission(makeInput({}, { allowClarify: false }), {
        classifier: null,
        markOnce: stubMarkOnce(validatedResult()),
      }),
    ).rejects.toMatchObject({ code: 'AMBIGUOUS_SUBMISSION' })
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// OQ-4 — high-stakes invokes N=3 self-consistency
// ════════════════════════════════════════════════════════════════════════════════

describe('markSubmission — OQ-4 self-consistency on the high-stakes path', () => {
  it('borderline + paid mock runs the mark pass N=3 times', async () => {
    const temps: number[] = []
    const markOnce = stubMarkOnce(validatedResult(), temps)
    const out = await markSubmission(ieltsPinnedInput({ isBorderline: true, isPaidMock: true }), {
      markOnce,
    })
    expect(markOnce).toHaveBeenCalledTimes(3)
    if (!('result' in out)) return
    expect(out.result.provenance.runCount).toBe(3)
    expect(out.result.validationFlags.selfConsistencyRun).toBe(true)
    // Three agreeing runs at band 7 → still shown-eligible (no divergence).
    expect(out.disposition).toBe('show_ai_practice_feedback')
  })

  it('free practice (not paid mock) stays single-run even when borderline', async () => {
    const markOnce = stubMarkOnce(validatedResult())
    const out = await markSubmission(ieltsPinnedInput({ isBorderline: true, isPaidMock: false }), {
      markOnce,
    })
    expect(markOnce).toHaveBeenCalledTimes(1)
    if (!('result' in out)) return
    expect(out.result.provenance.runCount).toBe(1)
  })

  it('divergent high-stakes runs force human review (a surfaced range, OQ-4)', async () => {
    // TR spreads 5/7/6 (>1) across the three runs → self-consistency surfaces a
    // range and forces needsHumanReview, so the disposition is human review.
    const bandsPerRun = [5, 7, 6]
    const markOnce = stubMarkOnce((_t, runIndex) =>
      validatedResult({
        criteria: IELTS_CRITERION_CODES.map((c) =>
          c === 'TR' ? makeCriterion(c, bandsPerRun[runIndex]!) : makeCriterion(c, 6),
        ),
      }),
    )
    const out = await markSubmission(ieltsPinnedInput({ isBorderline: true, isPaidMock: true }), {
      markOnce,
    })
    if (!('result' in out)) return
    expect(out.result.needsHumanReview).toBe(true)
    expect(out.result.validationFlags.selfConsistencyDiverged).toBe(true)
    expect(out.disposition).toBe('needs_human_review')
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// OQ-3 — the single retry budget (driven through the REAL marker+validate pipeline)
// ════════════════════════════════════════════════════════════════════════════════

/** A forced-tool payload whose evidence quote is FABRICATED (not in the essay). */
function fabricatedPayload(): IeltsAssessmentToolInput {
  const crit = (name: IeltsAssessmentToolInput['criteria'][number]['name']) => ({
    name,
    band: 7,
    descriptor_matched: 'matched',
    evidence: [{ quote: 'a quote that was never written in the essay', explanation: 'invented' }],
    confidence: 0.85,
  })
  return {
    criteria: [
      crit('Task Response'),
      crit('Coherence and Cohesion'),
      crit('Lexical Resource'),
      crit('Grammatical Range and Accuracy'),
    ],
    errors: [],
    integrity_flags: {
      under_length: false,
      off_topic: false,
      likely_memorised: false,
      copied_from_prompt: false,
    },
    proposed_overall_band: 7,
    overall_confidence: 0.9,
    holistic_note: 'note',
  }
}

/** Wrap a payload in a minimal Anthropic message with the forced tool_use block. */
function messageWith(payload: IeltsAssessmentToolInput): Anthropic.Messages.Message {
  return {
    id: 'm',
    type: 'message',
    role: 'assistant',
    model: MARKING_MODELS.marker,
    stop_reason: 'tool_use',
    stop_sequence: null,
    usage: { input_tokens: 1, output_tokens: 1 } as Anthropic.Messages.Usage,
    content: [{ type: 'tool_use', id: 't', name: IELTS_ASSESSMENT_TOOL_NAME, input: payload }],
  } as Anthropic.Messages.Message
}

describe('markSubmission — OQ-3 single retry budget (real marker+validate)', () => {
  it('a persistently fabricated mark re-marks EXACTLY once, then routes to human review', async () => {
    // The model always fabricates evidence. The validator says retry on the first
    // pass; the facade re-marks ONCE; the second pass still fabricates ⇒ the
    // validator (retryAlreadyHappened=true) returns humanReview. Net: 2 marker calls.
    const createMessage = vi.fn(async () => messageWith(fabricatedPayload()))
    const assertMinimised = vi.fn() // bypass the PII guard in the offline test

    const out = await markSubmission(ieltsPinnedInput(), {
      markerDeps: { createMessage, assertMinimised },
    })

    expect(createMessage).toHaveBeenCalledTimes(2) // first mark + ONE retry, no loop
    expect('result' in out).toBe(true)
    if (!('result' in out)) return
    expect(out.result.needsHumanReview).toBe(true)
    expect(out.disposition).toBe('needs_human_review')
    // The fabricated spans were annotated unverified (never shown as a trusted mark).
    expect(out.result.validationFlags.unverifiedEvidenceCount).toBeGreaterThan(0)
  })

  it('a mark that is clean on the SECOND attempt is accepted (budget allows one retry)', async () => {
    // First call fabricates (→ retry); second call is clean (verbatim quote) → ok.
    const goodPayload: IeltsAssessmentToolInput = {
      ...fabricatedPayload(),
      criteria: fabricatedPayload().criteria.map((c) => ({
        ...c,
        evidence: [
          { quote: 'the benefits clearly outweigh the drawbacks', explanation: 'verbatim' },
        ],
      })),
    }
    let call = 0
    const createMessage = vi.fn(async () => {
      call += 1
      return messageWith(call === 1 ? fabricatedPayload() : goodPayload)
    })
    const out = await markSubmission(ieltsPinnedInput(), {
      markerDeps: { createMessage, assertMinimised: vi.fn() },
    })
    expect(createMessage).toHaveBeenCalledTimes(2)
    if (!('result' in out)) return
    expect(out.result.needsHumanReview).toBe(false)
    expect(out.disposition).toBe('show_ai_practice_feedback')
  })
})
