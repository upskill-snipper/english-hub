/**
 * Tests for the grounded Feedback Generator (doc 16; OQ-6).
 *
 * These run fully OFFLINE: a stub {@link FeedbackModelClient} is injected via
 * `opts.client`, so no real Anthropic call is made. They prove the hard contract
 * (doc 16 §0/§5):
 *   • feedback derives only from the given mark (deterministic fallback is
 *     mark-shaped and passes the consistency check by construction);
 *   • a model output that contradicts the mark → deterministic fallback;
 *   • rewrites are OFF by default;
 *   • rewrites are ON only with the adult flag AND only on real, verified error
 *     spans.
 */

import { describe, it, expect, vi } from 'vitest'
import type Anthropic from '@anthropic-ai/sdk'
import {
  generateFeedback,
  buildDeterministicFeedback,
  checkFeedbackConsistency,
  buildSystemPrompt,
  FEEDBACK_TOOL_NAME,
  feedbackTool,
  type FeedbackModelClient,
  type FeedbackToolPayload,
} from '../generator'
import type { MarkingResultV2, BandCriterionScore, MarkingError } from '../../result-schema'

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const ESSAY =
  'Some people believe technology is harmful. In my opinion it is benefical. ' +
  'It help students to learn faster and connect with others around the world.'

function bandCriterion(code: string, label: string, band: number): BandCriterionScore {
  return {
    scale: 'band',
    code,
    label,
    band,
    maxBand: 9,
    descriptorMatched: `descriptor for ${code}`,
    evidence: [{ quote: 'it is benefical', explanation: 'shows position', verified: true }],
    confidence: 0.8,
    rationale: `rationale for ${code}`,
  }
}

function verifiedError(type: MarkingError['type'], quote: string): MarkingError {
  return {
    type,
    quote,
    correction: 'beneficial',
    explanation: 'spelling',
    severity: 'minor',
    verified: true,
  }
}

function makeMark(over: Partial<MarkingResultV2> = {}): MarkingResultV2 {
  return {
    schemaVersion: 2,
    packVersion: 'ielts_writing_v2025.1',
    module: 'ielts_writing',
    board: 'IELTS',
    taskType: 'IELTS_Writing_Task2',
    criteria: [
      bandCriterion('TR', 'Task Response', 6),
      bandCriterion('CC', 'Coherence and Cohesion', 7),
      bandCriterion('LR', 'Lexical Resource', 5),
      bandCriterion('GRA', 'Grammatical Range and Accuracy', 5),
    ],
    overall: { kind: 'band', overallBand: 6, proposedOverallBand: 6 },
    errors: [verifiedError('lexical.spelling', 'benefical')],
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
    feedback: { strengths: [], improvements: [], nextAction: '', summary: '' },
    holisticNote: 'A solid attempt with clear ideas.',
    provenance: { markedAt: '2026-05-29T00:00:00.000Z', runCount: 1 },
    ...over,
  }
}

/** A clean, mark-consistent model payload. */
function cleanPayload(over: Partial<FeedbackToolPayload> = {}): FeedbackToolPayload {
  return {
    summary: 'You have made a strong start with clear ideas.',
    strengths: ['Your ideas are clear and relevant.'],
    per_criterion: [
      {
        name: 'Task Response',
        why: 'You answer the question.',
        one_change: 'Add a clearer position.',
      },
      { name: 'Coherence and Cohesion', why: 'Ideas connect.', one_change: 'Use more linkers.' },
      {
        name: 'Lexical Resource',
        why: 'Range is developing.',
        one_change: 'Use more precise words.',
      },
      {
        name: 'Grammatical Range and Accuracy',
        why: 'Some good structures.',
        one_change: 'Proofread for spelling.',
      },
    ],
    next_action: 'Rewrite one paragraph focusing on vocabulary precision.',
    ...over,
  }
}

/** Build a stub client that returns the given tool payload as a tool_use block. */
function stubClient(
  payload: FeedbackToolPayload,
  spy?: (body: Anthropic.Messages.MessageCreateParamsNonStreaming) => void,
): FeedbackModelClient {
  return {
    messages: {
      create: async (body) => {
        spy?.(body)
        return {
          id: 'msg_1',
          type: 'message',
          role: 'assistant',
          model: 'claude-test',
          stop_reason: 'tool_use',
          stop_sequence: null,
          usage: { input_tokens: 10, output_tokens: 20 } as Anthropic.Messages.Usage,
          content: [
            {
              type: 'tool_use',
              id: 'tool_1',
              name: FEEDBACK_TOOL_NAME,
              input: payload as unknown as Record<string, unknown>,
            } as Anthropic.Messages.ToolUseBlock,
          ],
        } as Anthropic.Messages.Message
      },
    },
  }
}

// ─── Schema-level guard (the hard contract at the type level, doc 16 §4) ──────

describe('feedback tool schema', () => {
  it('exposes no band / overall / mintable error-type field', () => {
    const props = feedbackTool.input_schema.properties as Record<string, unknown>
    expect(props).not.toHaveProperty('band')
    expect(props).not.toHaveProperty('overall_band')
    expect(props).not.toHaveProperty('overall')
    // rewrites reference an integer index, never a free error type
    const rw = (props.upgrade_rewrites as { items: { properties: Record<string, unknown> } }).items
      .properties
    expect(rw).toHaveProperty('error_index')
    expect(rw).not.toHaveProperty('type')
  })
})

// ─── Deterministic fallback (derives only from the mark) ──────────────────────

describe('buildDeterministicFeedback', () => {
  it('derives strengths from the highest-banded criteria and passes the consistency check', () => {
    const mark = makeMark()
    const fb = buildDeterministicFeedback(mark)
    // CC=7 is highest, so it should appear among strengths.
    expect(fb.strengths.some((s) => s.point.includes('Coherence and Cohesion'))).toBe(true)
    // exactly one next action, four per-criterion improvements, a summary.
    expect(fb.nextAction).not.toEqual('')
    expect(fb.improvements).toHaveLength(4)
    expect(fb.summary).not.toEqual('')
    // no rewrites in the fallback.
    expect(fb.improvements.every((i) => i.upgradeRewrite === undefined)).toBe(true)
    // passes its own consistency check by construction.
    expect(checkFeedbackConsistency(fb, mark, ESSAY).ok).toBe(true)
  })

  it('never emits a band/score claim in prose', () => {
    const fb = buildDeterministicFeedback(makeMark())
    const all = [
      fb.summary,
      fb.nextAction,
      ...fb.strengths.map((s) => s.point),
      ...fb.improvements.map((i) => i.point),
    ]
    for (const t of all) expect(/\b(band|score|grade)\b\s*(of\s*)?\d/i.test(t)).toBe(false)
  })
})

// ─── Consistency check (the hard contract enforced in code) ───────────────────

describe('checkFeedbackConsistency', () => {
  it('rejects a smuggled band claim in free text', () => {
    const mark = makeMark()
    const fb = buildDeterministicFeedback(mark)
    const drifted = { ...fb, summary: 'You scored Band 7 overall, great work.' }
    expect(checkFeedbackConsistency(drifted, mark, ESSAY).ok).toBe(false)
  })

  it('rejects a rewrite whose quote is not a verified error span', () => {
    const mark = makeMark()
    const fb = buildDeterministicFeedback(mark)
    const drifted = {
      ...fb,
      improvements: [
        ...fb.improvements,
        { point: 'note', upgradeRewrite: 'beneficial', quote: 'a sentence never marked' },
      ],
    }
    expect(checkFeedbackConsistency(drifted, mark, ESSAY).ok).toBe(false)
  })

  it('accepts a rewrite whose quote IS a verified error verbatim in the essay', () => {
    const mark = makeMark()
    const fb = buildDeterministicFeedback(mark)
    const ok = {
      ...fb,
      improvements: [
        ...fb.improvements,
        { point: 'fixed a spelling slip', upgradeRewrite: 'beneficial', quote: 'benefical' },
      ],
    }
    expect(checkFeedbackConsistency(ok, mark, ESSAY).ok).toBe(true)
  })
})

// ─── generateFeedback: model pass, drift → fallback ───────────────────────────

describe('generateFeedback', () => {
  it('uses the model output when it is consistent with the mark', async () => {
    const mark = makeMark()
    const res = await generateFeedback(mark, ESSAY, { client: stubClient(cleanPayload()) })
    expect(res.source).toBe('model')
    expect(res.consistencyChecksPassed).toBe(true)
    expect(res.feedback.summary).toContain('strong start')
    expect(res.feedback.improvements).toHaveLength(4)
  })

  it('falls back deterministically when the model smuggles a band claim', async () => {
    const mark = makeMark()
    const drifting = cleanPayload({ summary: 'Overall you are at Band 7 now.' })
    const res = await generateFeedback(mark, ESSAY, { client: stubClient(drifting) })
    expect(res.source).toBe('fallback')
    expect(res.consistencyChecksPassed).toBe(false)
    // fallback is mark-derived and itself consistent.
    expect(checkFeedbackConsistency(res.feedback, mark, ESSAY).ok).toBe(true)
  })

  it('falls back when the model call throws (never shows an error to a learner)', async () => {
    const mark = makeMark()
    const throwing: FeedbackModelClient = {
      messages: {
        create: async () => {
          throw new Error('network')
        },
      },
    }
    const res = await generateFeedback(mark, ESSAY, { client: throwing })
    expect(res.source).toBe('fallback')
    expect(res.consistencyChecksPassed).toBe(false)
  })

  // ─── OQ-6: rewrites OFF by default ──────────────────────────────────────────

  it('drops rewrites by default (OQ-6: allowRewrites unset)', async () => {
    const mark = makeMark()
    const withRewrite = cleanPayload({
      upgrade_rewrites: [
        { error_index: 0, original: 'benefical', rewrite: 'beneficial', note: 'spelling fix' },
      ],
    })
    const res = await generateFeedback(mark, ESSAY, { client: stubClient(withRewrite) })
    expect(res.source).toBe('model')
    expect(res.feedback.improvements.every((i) => i.upgradeRewrite === undefined)).toBe(true)
  })

  it('does not advertise rewrite targets in the prompt when disabled', async () => {
    const mark = makeMark()
    let captured = ''
    const spy = (body: Anthropic.Messages.MessageCreateParamsNonStreaming) => {
      const msg = body.messages[0]?.content
      captured = typeof msg === 'string' ? msg : JSON.stringify(msg)
    }
    await generateFeedback(mark, ESSAY, { client: stubClient(cleanPayload(), spy) })
    expect(captured).toContain('rewrites disabled')
  })

  // ─── OQ-6: rewrites ON only with the adult flag + only real spans ───────────

  it('keeps a rewrite ONLY with allowRewrites AND when it targets a real verified error', async () => {
    const mark = makeMark()
    const withRewrite = cleanPayload({
      upgrade_rewrites: [
        { error_index: 0, original: 'benefical', rewrite: 'beneficial', note: 'spelling fix' },
      ],
    })
    const res = await generateFeedback(mark, ESSAY, {
      client: stubClient(withRewrite),
      allowRewrites: true,
    })
    expect(res.source).toBe('model')
    const kept = res.feedback.improvements.filter((i) => i.upgradeRewrite !== undefined)
    expect(kept).toHaveLength(1)
    expect(kept[0]?.upgradeRewrite).toBe('beneficial')
    expect(kept[0]?.quote).toBe('benefical')
    // micro-lesson key resolved by CODE from the error taxonomy, not the model.
    expect(kept[0]?.microLessonErrorType).toBe('lexical.spelling')
  })

  it('drops a fabricated rewrite even when allowRewrites is true', async () => {
    const mark = makeMark()
    const fabricated = cleanPayload({
      upgrade_rewrites: [
        // error_index 0 exists, but `original` does not match the verified quote.
        { error_index: 0, original: 'a fabricated sentence', rewrite: 'whatever', note: 'nope' },
      ],
    })
    const res = await generateFeedback(mark, ESSAY, {
      client: stubClient(fabricated),
      allowRewrites: true,
    })
    expect(res.feedback.improvements.every((i) => i.upgradeRewrite === undefined)).toBe(true)
  })

  it('drops a rewrite pointing at an out-of-range error index', async () => {
    const mark = makeMark()
    const oob = cleanPayload({
      upgrade_rewrites: [
        { error_index: 99, original: 'benefical', rewrite: 'beneficial', note: 'x' },
      ],
    })
    const res = await generateFeedback(mark, ESSAY, {
      client: stubClient(oob),
      allowRewrites: true,
    })
    expect(res.feedback.improvements.every((i) => i.upgradeRewrite === undefined)).toBe(true)
  })
})

// ─── Prompt + model routing ───────────────────────────────────────────────────

describe('prompt + routing', () => {
  it('system prompt gates rewrites on the OQ-6 flag', () => {
    expect(buildSystemPrompt(false, false)).toContain('MUST NOT include any upgrade rewrites')
    expect(buildSystemPrompt(true, false)).toContain('MAY include up to two upgrade rewrites')
  })

  it('younger-learner tone toggle changes the prompt deterministically', () => {
    expect(buildSystemPrompt(false, true)).toContain('younger learner')
    expect(buildSystemPrompt(false, false)).not.toContain('younger learner')
  })

  it('forces the feedback tool and routes through the marker/feedback model tier', async () => {
    const mark = makeMark()
    const create = vi.fn(stubClient(cleanPayload()).messages.create)
    await generateFeedback(mark, ESSAY, { client: { messages: { create } } })
    expect(create).toHaveBeenCalledTimes(1)
    const body = create.mock.calls[0]?.[0]
    expect(body?.tool_choice).toEqual({ type: 'tool', name: FEEDBACK_TOOL_NAME })
    // routed through MARKING_MODELS.marker (latest Sonnet) — never an inline id.
    expect(body?.model).toBe('claude-sonnet-4-6')
  })

  it('does not leak essay text into anything but the user message (outbound minimisation)', async () => {
    const mark = makeMark()
    let body: Anthropic.Messages.MessageCreateParamsNonStreaming | undefined
    const spy = (b: Anthropic.Messages.MessageCreateParamsNonStreaming) => {
      body = b
    }
    await generateFeedback(mark, ESSAY, { client: stubClient(cleanPayload(), spy) })
    const system = typeof body?.system === 'string' ? body.system : JSON.stringify(body?.system)
    expect(system).not.toContain('benefical') // essay content stays out of the system block
  })
})
