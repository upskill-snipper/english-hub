/**
 * Unit tests for the grounded MARKER (Seam C) — offline + deterministic.
 *
 * WHY THESE TESTS
 * The marker is the one place a model call happens, so the risks worth pinning are
 * structural, not behavioural: (1) a well-formed forced-tool payload maps cleanly
 * into a `RawMarkResult`; (2) the outbound PII guard actually runs on the dispatched
 * body with the essay carved out; (3) `tool_choice` forces the named assessment tool
 * (no prose path); (4) the retrieval blocks land on the correct side of the cache
 * boundary — rubric descriptors inside the cached system prefix, exemplars after it,
 * in the user message. The model call and the PII guard are injected, so every test
 * is offline and deterministic (no network, no env, no real SDK).
 *
 * @vitest-environment node
 */

import { describe, it, expect, vi } from 'vitest'
import type Anthropic from '@anthropic-ai/sdk'
import {
  runMarker,
  buildMarkerRequestBody,
  buildSystemBlocks,
  buildUserMessageText,
  extractToolPayload,
  toRawMarkResult,
  MarkerToolUseError,
  MARKER_MAX_TOKENS,
  type MarkerDeps,
  type CreateMessageFn,
  type AssertMinimisedFn,
} from '../marker'
import { MARKING_MODELS } from '../models'
import {
  IELTS_ASSESSMENT_TOOL_NAME,
  type IeltsAssessmentToolInput,
} from '../ielts/assessment-tool-schema'
import type { MarkRequest } from '../types'
import type { KnowledgePack, RetrievalResult, RawSubmission } from '../types'

// ─── Fixtures ────────────────────────────────────────────────────────────────

const ESSAY =
  'Some people believe that universities should focus on practical skills, while ' +
  'others argue they should prioritise theoretical knowledge. In my opinion, both ' +
  'have merit and a balanced curriculum serves graduates best in the modern economy.'

const QUESTION =
  'Some say universities should teach practical skills; others, theory. Discuss both ' +
  'views and give your own opinion.'

const RUBRIC_BLOCK =
  'TR band 7: addresses all parts of the task with a clear position throughout.\n' +
  'CC band 7: logically organises information with clear progression.\n' +
  'LR band 7: uses a sufficient range of vocabulary to allow some flexibility.\n' +
  'GRA band 7: uses a variety of complex structures with good control.'

const EXEMPLAR_BLOCK =
  'EXEMPLAR (band 7): "A balanced curriculum serves graduates best" — clear position, ' +
  'developed with relevant support.'

/** A minimal RetrievalResult satisfying the seam shape used by the marker. */
const retrieval: RetrievalResult = {
  rubricBlock: RUBRIC_BLOCK,
  exemplarBlock: EXEMPLAR_BLOCK,
  selectedExemplars: [],
  cacheableBoundary: 'after-rubric',
  firstPassEstimate: { band: 7, source: 'heuristic' },
  packVersion: 'ielts_writing_v2025.1',
  budget: {
    estTokens: 800,
    exemplarTokens: 60,
    exemplarTrimmed: false,
    exemplarsOmitted: false,
    cacheableTokens: 600,
  },
}

const submission: RawSubmission = {
  questionText: QUESTION,
  answerText: ESSAY,
}

/**
 * A KnowledgePack is required on MarkRequest but the marker only reads the
 * retrieval blocks + submission + tier for the wire body, so a minimal cast keeps
 * the fixture focused without reconstructing the whole pack.
 */
const pack = { version: 'ielts_writing_v2025.1' } as unknown as KnowledgePack

const markRequest: MarkRequest = {
  pack,
  retrieval,
  submission,
  modelTier: 'marker',
}

/** A well-formed forced-tool payload exactly as the model would return it. */
function goodToolPayload(): IeltsAssessmentToolInput {
  return {
    criteria: [
      {
        name: 'Task Response',
        band: 7,
        descriptor_matched: 'addresses all parts with a clear position throughout',
        evidence: [{ quote: 'both have merit', explanation: 'states a clear balanced position' }],
        confidence: 0.82,
      },
      {
        name: 'Coherence and Cohesion',
        band: 7,
        descriptor_matched: 'logically organises information',
        evidence: [{ quote: 'In my opinion', explanation: 'signposts the position clearly' }],
        confidence: 0.8,
      },
      {
        name: 'Lexical Resource',
        band: 7,
        descriptor_matched: 'sufficient range to allow some flexibility',
        evidence: [{ quote: 'balanced curriculum', explanation: 'appropriate collocation' }],
        confidence: 0.79,
      },
      {
        name: 'Grammatical Range and Accuracy',
        band: 6,
        descriptor_matched: 'a mix of simple and complex structures',
        evidence: [{ quote: 'while others argue', explanation: 'subordinate clause used' }],
        confidence: 0.77,
      },
    ],
    errors: [
      {
        type: 'grammar.article',
        quote: 'in the modern economy',
        correction: 'in the modern economy',
        explanation: 'article use is acceptable here; minor example',
        severity: 'minor',
      },
    ],
    integrity_flags: {
      under_length: false,
      off_topic: false,
      likely_memorised: false,
      copied_from_prompt: false,
    },
    borderline_flags: ['GRA borderline 6/7: complex range present but control uneven'],
    proposed_overall_band: 7,
    overall_confidence: 0.8,
    holistic_note: 'A competent, well-organised response with a clear position.',
  }
}

/** Wrap a tool payload in a minimal Anthropic message with a tool_use block. */
function messageWithToolUse(payload: IeltsAssessmentToolInput): Anthropic.Messages.Message {
  return {
    id: 'msg_test',
    type: 'message',
    role: 'assistant',
    model: MARKING_MODELS.marker,
    stop_reason: 'tool_use',
    stop_sequence: null,
    usage: { input_tokens: 100, output_tokens: 50 } as Anthropic.Messages.Usage,
    content: [
      {
        type: 'tool_use',
        id: 'toolu_test',
        name: IELTS_ASSESSMENT_TOOL_NAME,
        input: payload,
      },
    ],
  } as Anthropic.Messages.Message
}

// ─── Mapping: well-formed payload → valid RawMarkResult ───────────────────────

describe('toRawMarkResult', () => {
  it('maps a well-formed tool payload into a valid RawMarkResult', () => {
    const raw = toRawMarkResult(goodToolPayload())

    expect(raw.criteria).toHaveLength(4)
    // Criterion codes canonicalised; bands and confidence carried through.
    const tr = raw.criteria.find((c) => c.code === 'TR')
    expect(tr).toBeDefined()
    expect(tr?.scale).toBe('band')
    if (tr?.scale === 'band') {
      expect(tr.band).toBe(7)
      expect(tr.maxBand).toBe(9)
    }
    // Evidence is carried UNVERIFIED — the Validator owns `verified`.
    expect(raw.criteria.every((c) => c.evidence.every((e) => e.verified === false))).toBe(true)

    // Errors mapped + carried unverified, severity preserved.
    expect(raw.errors).toHaveLength(1)
    expect(raw.errors[0].type).toBe('grammar.article')
    expect(raw.errors[0].verified).toBe(false)
    expect(raw.errors[0].severity).toBe('minor')

    // Integrity flags pass through unchanged (all four present).
    expect(raw.integrityFlags.under_length).toBe(false)
    expect(raw.integrityFlags.copied_from_prompt).toBe(false)

    // The model's overall is carried as a PROPOSAL only (not a computed overall).
    expect(raw.proposedOverall.kind).toBe('band')
    if (raw.proposedOverall.kind === 'band') {
      expect(raw.proposedOverall.proposedOverallBand).toBe(7)
    }
    expect(raw.proposedConfidence).toBe(0.8)
    expect(raw.holisticNote).toContain('competent')
    expect(raw.borderlineFlags).toHaveLength(1)
  })

  it('defaults a missing error severity to moderate', () => {
    const payload = goodToolPayload()
    const withoutSeverity = {
      ...payload,
      errors: [{ ...payload.errors[0], severity: undefined }],
    } as IeltsAssessmentToolInput
    const raw = toRawMarkResult(withoutSeverity)
    expect(raw.errors[0].severity).toBe('moderate')
  })
})

// ─── Forced tool_choice + cache boundary on the request body ──────────────────

describe('buildMarkerRequestBody', () => {
  it('forces the assessment tool via tool_choice', () => {
    const body = buildMarkerRequestBody(markRequest)
    expect(body.tool_choice).toEqual({ type: 'tool', name: IELTS_ASSESSMENT_TOOL_NAME })
    expect(body.tools).toHaveLength(1)
    expect(body.tools?.[0].name).toBe(IELTS_ASSESSMENT_TOOL_NAME)
    expect(body.model).toBe(MARKING_MODELS.marker)
    expect(body.max_tokens).toBe(MARKER_MAX_TOKENS)
  })

  it('places the rubric descriptors in the cached system prefix and exemplars after the boundary', () => {
    const blocks = buildSystemBlocks(RUBRIC_BLOCK)
    // The cache_control breakpoint is on the LAST system block (after-rubric).
    expect(blocks).toHaveLength(2)
    expect(blocks[0].cache_control).toBeUndefined()
    expect(blocks[1].cache_control).toEqual({ type: 'ephemeral' })
    // The cached block contains the rubric; the persona block does not.
    expect(blocks[1].text).toContain(RUBRIC_BLOCK)
    expect(blocks[0].text).not.toContain(RUBRIC_BLOCK)

    // Exemplars must NOT be in the cached system prefix...
    const systemText = blocks.map((b) => b.text).join('\n')
    expect(systemText).not.toContain(EXEMPLAR_BLOCK)
    // ...they belong in the user message (after the boundary), with the essay.
    const userText = buildUserMessageText(markRequest)
    expect(userText).toContain(EXEMPLAR_BLOCK)
    expect(userText).toContain(ESSAY)
    expect(userText).toContain('Mark this essay now using the tool.')
  })

  it('names all four criteria and the output-only-via-tool rule in the system prompt', () => {
    const systemText = buildSystemBlocks(RUBRIC_BLOCK)
      .map((b) => b.text)
      .join('\n')
    expect(systemText).toContain('Task Response')
    expect(systemText).toContain('Coherence and Cohesion')
    expect(systemText).toContain('Lexical Resource')
    expect(systemText).toContain('Grammatical Range and Accuracy')
    expect(systemText).toContain('Output NOTHING outside the tool call')
    expect(systemText).toContain(IELTS_ASSESSMENT_TOOL_NAME)
  })

  it('omits the exemplar header when retrieval returned no exemplars', () => {
    const noExemplars: MarkRequest = {
      ...markRequest,
      retrieval: { ...retrieval, exemplarBlock: '' },
    }
    const userText = buildUserMessageText(noExemplars)
    expect(userText).not.toContain('CALIBRATION EXEMPLARS')
    expect(userText).toContain(ESSAY)
  })
})

// ─── extractToolPayload: hard-fail, no prose path ─────────────────────────────

describe('extractToolPayload', () => {
  it('returns the tool_use input when the forced tool was called', () => {
    const payload = goodToolPayload()
    const got = extractToolPayload(messageWithToolUse(payload))
    expect(got).toEqual(payload)
  })

  it('throws MarkerToolUseError when no tool_use block is present (no prose fallback)', () => {
    const proseOnly = {
      id: 'msg',
      type: 'message',
      role: 'assistant',
      model: MARKING_MODELS.marker,
      stop_reason: 'end_turn',
      stop_sequence: null,
      usage: { input_tokens: 1, output_tokens: 1 } as Anthropic.Messages.Usage,
      content: [{ type: 'text', text: 'Band 7 overall.' }],
    } as Anthropic.Messages.Message
    expect(() => extractToolPayload(proseOnly)).toThrow(MarkerToolUseError)
  })
})

// ─── runMarker: end-to-end with injected deps (PII guard + model call) ─────────

describe('runMarker', () => {
  it('invokes the PII guard on the outbound body with the essay allow-listed, then maps the payload', async () => {
    const createMessage: CreateMessageFn = vi.fn(async () => messageWithToolUse(goodToolPayload()))
    const assertMinimised: AssertMinimisedFn = vi.fn()
    const deps: MarkerDeps = { createMessage, assertMinimised }

    const raw = await runMarker(markRequest, deps)

    // Model call happened exactly once, with the forced-tool body.
    expect(createMessage).toHaveBeenCalledTimes(1)
    const sentBody = vi.mocked(createMessage).mock.calls[0]?.[0]
    expect(sentBody).toBeDefined()
    expect(sentBody?.tool_choice).toEqual({ type: 'tool', name: IELTS_ASSESSMENT_TOOL_NAME })

    // PII guard ran BEFORE dispatch, on the same body, with the essay + question
    // carved out via allowVerbatim.
    expect(assertMinimised).toHaveBeenCalledTimes(1)
    const guardCall = vi.mocked(assertMinimised).mock.calls[0]
    expect(guardCall?.[0]).toBe(sentBody)
    const guardOpts = guardCall?.[1]
    expect(guardOpts?.allowVerbatim).toContain(ESSAY)
    expect(guardOpts?.allowVerbatim).toContain(QUESTION)

    // Result mapped correctly.
    expect(raw.criteria).toHaveLength(4)
    expect(raw.proposedConfidence).toBe(0.8)
  })

  it('runs the PII guard before the model call (dispatch is blocked on a violation)', async () => {
    const order: string[] = []
    const createMessage = vi.fn(async () => {
      order.push('create')
      return messageWithToolUse(goodToolPayload())
    })
    const assertMinimised = vi.fn(() => {
      order.push('guard')
      throw new Error('identifier detected in system prompt')
    })

    await expect(runMarker(markRequest, { createMessage, assertMinimised })).rejects.toThrow(
      'identifier detected',
    )
    // The guard threw, so the model was never called.
    expect(order).toEqual(['guard'])
    expect(createMessage).not.toHaveBeenCalled()
  })

  it('propagates MarkerToolUseError when the model returns no tool_use block', async () => {
    const createMessage = vi.fn(
      async () =>
        ({
          id: 'msg',
          type: 'message',
          role: 'assistant',
          model: MARKING_MODELS.marker,
          stop_reason: 'end_turn',
          stop_sequence: null,
          usage: { input_tokens: 1, output_tokens: 1 } as Anthropic.Messages.Usage,
          content: [{ type: 'text', text: 'no tool here' }],
        }) as Anthropic.Messages.Message,
    )
    await expect(
      runMarker(markRequest, { createMessage, assertMinimised: vi.fn() }),
    ).rejects.toThrow(MarkerToolUseError)
  })
})
