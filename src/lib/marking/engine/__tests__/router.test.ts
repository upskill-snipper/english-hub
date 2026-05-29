// ─── Router unit tests (doc 10 §2.2 acceptance, Step 4–5) ─────────────────────
//
// These tests pin the Router's contract from `types.ts` (RouterResult) and doc 10
// §2.2. They are OFFLINE + DETERMINISTIC: the LLM classifier is always injected as
// a pure stub (or disabled), so NO live model call is made. A spy classifier also
// PROVES the heuristics-first guarantee — the model is never touched on the common
// (explicit/pinned) path (doc 10 §5 R2: no model cost on the common path).
// ──────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi } from 'vitest'

import {
  route,
  RoutingError,
  ROUTER_THRESHOLDS,
  type SubmissionClassifier,
} from '@/lib/marking/engine/router'
import { listMarkSchemeIds, getMarkScheme } from '@/lib/marking/mark-schemes'
import type {
  MarkSubmissionInput,
  RawSubmission,
  RoutingCandidate,
  RoutingDecision,
  NeedsConfirmation,
} from '@/lib/marking/engine/types'

// ── Fixtures ──────────────────────────────────────────────────────────────────

/** A classifier stub that fails the test if it is ever called (heuristics-first). */
const mustNotCall: SubmissionClassifier = vi.fn(async () => {
  throw new Error('classifier must not be called on the explicit/pinned path')
})

/** Build a full façade input around a raw submission. */
function makeInput(
  raw: Partial<RawSubmission>,
  caps: { allowClarify: boolean } = { allowClarify: true },
): MarkSubmissionInput {
  return {
    rawSubmission: {
      questionText: 'Some question.',
      answerText: 'Some answer text written by a student.',
      ...raw,
    },
    context: { userId: 'u1', source: 'b2c_self', locale: 'en-GB', isMinor: false },
    caps,
  }
}

/** A stub classifier returning fixed candidates (no model call). */
function stubClassifier(candidates: readonly RoutingCandidate[]): SubmissionClassifier {
  return vi.fn(async () => candidates)
}

function asDecision(r: RoutingDecision | NeedsConfirmation): RoutingDecision {
  expect(r.status).toBe('routed')
  return r as RoutingDecision
}
function asClarify(r: RoutingDecision | NeedsConfirmation): NeedsConfirmation {
  expect(r.status).toBe('needs_confirmation')
  return r as NeedsConfirmation
}

// ════════════════════════════════════════════════════════════════════════════════
// Mode 1 — explicit metadata short-circuits to confidence 1 with NO model call
// ════════════════════════════════════════════════════════════════════════════════

describe('route — explicit GCSE metadata (mode 1)', () => {
  const knownSchemeId = listMarkSchemeIds()[0]!

  it('routes a known markSchemeId with basis "explicit", confidence 1, and no model call', async () => {
    const result = await route(makeInput({ markSchemeId: knownSchemeId }), {
      classifier: mustNotCall,
    })
    const decision = asDecision(result)
    expect(decision.area).toBe('gcse')
    expect(decision.basis).toBe('explicit')
    expect(decision.confidence).toBe(1)
    expect(decision.packVersion).not.toBe('')
    expect(decision.packVersion).toContain(knownSchemeId)
    expect(mustNotCall).not.toHaveBeenCalled()
  })

  it('selects the taskType from the named questionId when it exists on the scheme', async () => {
    const scheme = getMarkScheme(knownSchemeId)!
    const question = scheme.questions[0]!
    const result = await route(
      makeInput({ markSchemeId: knownSchemeId, questionId: question.id }),
      { classifier: mustNotCall },
    )
    expect(asDecision(result).taskType).toBe(question.questionType)
  })

  it('carries the caller level hint through onto the decision (soft signal)', async () => {
    const level = { area: 'gcse' as const, value: '5', scaleHint: 'gcse_grade' }
    const result = await route(makeInput({ markSchemeId: knownSchemeId, levelHint: level }), {
      classifier: mustNotCall,
    })
    expect(asDecision(result).level).toEqual(level)
  })
})

describe('route — explicit IELTS metadata (mode 1)', () => {
  it('routes areaHint:ielts + Task-2 task type to the IELTS pack with confidence 1, no model call', async () => {
    const result = await route(
      makeInput({ areaHint: 'ielts', taskTypeHint: 'IELTS_Writing_Task2' }),
      { classifier: mustNotCall },
    )
    const decision = asDecision(result)
    expect(decision.area).toBe('ielts')
    expect(decision.basis).toBe('explicit')
    expect(decision.confidence).toBe(1)
    expect(decision.taskType).toBe('IELTS_Writing_Task2')
    expect(decision.packVersion).toBe('ielts_writing_v2025.1')
    expect(mustNotCall).not.toHaveBeenCalled()
  })

  it('accepts tolerant task-type spellings (case/space-insensitive)', async () => {
    for (const tt of ['task 2', 'Task2', 'writing_task2']) {
      const result = await route(makeInput({ areaHint: 'ielts', taskTypeHint: tt }), {
        classifier: null,
      })
      expect(asDecision(result).area).toBe('ielts')
    }
  })

  it('does NOT short-circuit IELTS when the task type is unrecognised (falls to classify)', async () => {
    // areaHint ielts but a non-Task-2 task type: not enough to uniquely route ⇒
    // it must go to the classifier path (here disabled ⇒ clarify), never throw.
    const result = await route(makeInput({ areaHint: 'ielts', taskTypeHint: 'speaking_part1' }), {
      classifier: null,
    })
    expect(result.status).toBe('needs_confirmation')
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Mode 3 — pin override
// ════════════════════════════════════════════════════════════════════════════════

describe('route — pin override (mode 3)', () => {
  it('routes a packPin with basis "pinned", confidence 1, and no model call', async () => {
    const result = await route(makeInput({ packPin: 'ielts_writing_v2025.1' }), {
      classifier: mustNotCall,
    })
    const decision = asDecision(result)
    expect(decision.basis).toBe('pinned')
    expect(decision.confidence).toBe(1)
    expect(decision.packVersion).toBe('ielts_writing_v2025.1')
    expect(decision.area).toBe('ielts') // inferred from the pin prefix
    expect(mustNotCall).not.toHaveBeenCalled()
  })

  it('throws INVALID_METADATA on a blank packPin (structurally malformed)', async () => {
    await expect(route(makeInput({ packPin: '   ' }))).rejects.toMatchObject({
      code: 'INVALID_METADATA',
    })
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Mode 2 — classify cascade + confidence gate
// ════════════════════════════════════════════════════════════════════════════════

describe('route — confidence gate (mode 2)', () => {
  it('routes directly when one candidate is high-confidence and clears the margin', async () => {
    const classifier = stubClassifier([
      { area: 'ielts', taskType: 'IELTS_Writing_Task2', confidence: 0.95, label: 'IELTS T2' },
      { area: 'gcse', taskType: 'Essay', confidence: 0.2, label: 'GCSE' },
    ])
    const result = await route(makeInput({}), { classifier })
    const decision = asDecision(result)
    expect(decision.basis).toBe('classified')
    expect(decision.area).toBe('ielts')
    expect(decision.confidence).toBe(0.95)
    // The classified path leaves the version for the resolver to fix (doc 10 §2.1).
    expect(decision.packVersion).toBe('')
    expect(classifier).toHaveBeenCalledTimes(1)
  })

  it('returns needs_confirmation with both labels on a near-tie (margin too small)', async () => {
    const classifier = stubClassifier([
      { area: 'ielts', taskType: 'IELTS_Writing_Task2', confidence: 0.8, label: 'IELTS T2' },
      { area: 'gcse', taskType: 'Essay', confidence: 0.78, label: 'GCSE Essay' },
    ])
    const clarify = asClarify(await route(makeInput({}), { classifier }))
    expect(clarify.candidates.length).toBe(2)
    expect(clarify.candidates.map((c) => c.label)).toEqual(['IELTS T2', 'GCSE Essay'])
    expect(clarify.reason).toBeTruthy()
  })

  it('returns needs_confirmation when the top candidate is below the confirm threshold', async () => {
    const classifier = stubClassifier([
      { area: 'ielts', taskType: 'IELTS_Writing_Task2', confidence: 0.5, label: 'IELTS T2' },
    ])
    expect((await route(makeInput({}), { classifier })).status).toBe('needs_confirmation')
  })

  it('caps the surfaced candidates at maxCandidates', async () => {
    const many: RoutingCandidate[] = Array.from({ length: 6 }, (_, i) => ({
      area: 'gcse',
      taskType: `T${i}`,
      confidence: 0.5 - i * 0.01,
      label: `cand ${i}`,
    }))
    const clarify = asClarify(await route(makeInput({}), { classifier: stubClassifier(many) }))
    expect(clarify.candidates.length).toBe(ROUTER_THRESHOLDS.maxCandidates)
  })

  it('synthesises a label for a candidate that has none', async () => {
    const classifier = stubClassifier([
      { area: 'gcse', taskType: 'Essay', confidence: 0.5, label: '' },
    ])
    const clarify = asClarify(await route(makeInput({}), { classifier }))
    expect(clarify.candidates[0]!.label).toContain('gcse')
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// "Ask, never silently guess" + "never throws on unknown"
// ════════════════════════════════════════════════════════════════════════════════

describe('route — fail-safe behaviour', () => {
  it('degrades to needs_confirmation (NOT a throw) for an UNKNOWN-but-well-formed markSchemeId', async () => {
    const result = await route(makeInput({ markSchemeId: 'this-scheme-does-not-exist' }), {
      classifier: null,
    })
    // Unknown id is "ask", not crash. NO_PACK fail-closed is the resolver's job.
    expect(result.status).toBe('needs_confirmation')
  })

  it('does not throw on a bare submission with no metadata (classifier disabled ⇒ clarify)', async () => {
    const result = await route(makeInput({}), { classifier: null })
    expect(result.status).toBe('needs_confirmation')
  })

  it('throws AMBIGUOUS_SUBMISSION when confidence is low AND allowClarify is false', async () => {
    const classifier = stubClassifier([
      { area: 'ielts', taskType: 'IELTS_Writing_Task2', confidence: 0.4, label: 'IELTS T2' },
    ])
    await expect(
      route(makeInput({}, { allowClarify: false }), { classifier }),
    ).rejects.toMatchObject({ code: 'AMBIGUOUS_SUBMISSION' })
  })

  it('throws AMBIGUOUS_SUBMISSION when there are zero candidates AND allowClarify is false', async () => {
    await expect(
      route(makeInput({}, { allowClarify: false }), { classifier: null }),
    ).rejects.toMatchObject({ code: 'AMBIGUOUS_SUBMISSION' })
  })

  it('a low-confidence batch error is a real RoutingError instance with a typed code', async () => {
    try {
      await route(makeInput({}, { allowClarify: false }), { classifier: null })
      expect.unreachable('should have thrown')
    } catch (err) {
      expect(err).toBeInstanceOf(RoutingError)
      expect((err as RoutingError).code).toBe('AMBIGUOUS_SUBMISSION')
    }
  })

  it('still asks (does not throw) on low confidence when allowClarify is true', async () => {
    const classifier = stubClassifier([
      { area: 'ielts', taskType: 'IELTS_Writing_Task2', confidence: 0.4, label: 'IELTS T2' },
    ])
    const result = await route(makeInput({}, { allowClarify: true }), { classifier })
    expect(result.status).toBe('needs_confirmation')
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Thresholds come from config, not magic literals (doc 10 §2.2)
// ════════════════════════════════════════════════════════════════════════════════

describe('ROUTER_THRESHOLDS', () => {
  it('exposes tunable confirm/margin/max-candidate constants in [0,1] where applicable', () => {
    expect(ROUTER_THRESHOLDS.confirmThreshold).toBeGreaterThan(0)
    expect(ROUTER_THRESHOLDS.confirmThreshold).toBeLessThanOrEqual(1)
    expect(ROUTER_THRESHOLDS.marginThreshold).toBeGreaterThanOrEqual(0)
    expect(ROUTER_THRESHOLDS.maxCandidates).toBeGreaterThanOrEqual(1)
  })
})
