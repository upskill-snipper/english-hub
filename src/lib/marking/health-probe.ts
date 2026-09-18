// ─── End-to-end marking probe ────────────────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, REL-9)
//
// `/api/health/ai` asks seven model ids to reply with the word "ok" inside 8
// tokens. That proves a model id is callable on this key and nothing else. It
// would have gone on answering green through every failure this product has
// actually had:
//
//   - The model's SAFETY LAYER refusing to mark perfectly benign exam prose.
//     That happened during the live examiner smoke test on 18 September. An
//     8-token liveness ping cannot see it, because nothing in the ping looks
//     like a child's essay.
//   - `generateFeedback` failing to parse the response. The marking route
//     parses TEXT, not a tool call - if the model stops emitting the JSON shape
//     the prompt asks for, marking breaks for every learner while the model is
//     perfectly healthy and the liveness probe is perfectly green.
//   - A mark that parses but is nonsense - a total outside the range the paper
//     can award.
//
// And the test suite cannot catch any of it either: it "passes in ten seconds
// and mocks every database call" (CLAUDE.md), which is exactly why it passed
// throughout the two model-retirement outages.
//
// ── IT PROBES THE PATH LEARNERS USE, WHICH IS NOT THE ONE YOU WOULD GUESS ───
//
// There are two marking implementations, and the obvious one is the wrong one.
// The backlog asked for a probe of "the marking engine's forced tool-use call,
// prompt and schema". The learner-facing routes do not use that engine.
// `/api/mark` and `/api/mark/stream` go:
//
//     getMarkScheme -> buildMarkingPrompt -> anthropic.messages.create
//                   -> generateFeedback (a TEXT parser)
//
// The forced-tool engine has exactly one caller, `/api/marking/ielts-writing-
// task2`, which sits behind a feature flag and a calibration gate that returns
// 503. A probe built against it would fail every run for reasons that have
// nothing to do with whether marking works.
//
// ── WHAT IT DELIBERATELY DOES NOT REPLICATE ─────────────────────────────────
//
// The real route adds two things this does not, and saying so here matters
// because otherwise the probe green-lights a prompt no learner is sent:
//
//   1. `getExaminerExemplars` - a live DB read that appends recent approved
//      marks. It is fail-open and frequently empty, so its absence changes the
//      prompt less than it sounds.
//   2. `withArabicDirective` - appended only for AR readers. The probe tests
//      the EN prompt.
//
// A failure of either would not be caught here. Both are additive suffixes to a
// prompt this probe does exercise in full.
// ────────────────────────────────────────────────────────────────────────────

import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { getMarkScheme } from './mark-schemes'
import { buildMarkingPrompt } from './prompt-builder'
import { generateFeedback } from './feedback-generator'
import { cachedSystemBlock } from '@/lib/ai/cached-system'

/** The paper the probe marks against. A real, registered, verified scheme. */
export const PROBE_SCHEME_ID = 'aqa-lang-paper1'

/**
 * Short but genuinely essay-shaped.
 *
 * Long enough that the model is doing the real task rather than refusing an
 * empty one, short enough that a daily probe costs a fraction of a penny. The
 * content is deliberately ordinary GCSE prose: the failure this exists to catch
 * is a safety layer refusing benign exam writing, so the probe must look like
 * the thing that gets refused.
 */
export const PROBE_ESSAY =
  'The writer uses the image of the empty station to suggest isolation. The ' +
  'short sentence "No one came." stands alone, which slows the reader down and ' +
  'makes the silence feel heavier. Later the description of the "grey, patient ' +
  'rain" gives the weather a human quality, as if it is waiting alongside him. ' +
  'These choices build a mood of quiet disappointment rather than sudden shock.'

/**
 * Matches production. `/api/mark` passes `{ timeout: 50_000 }` under a
 * maxDuration of 60, so a 45-second mark is a SUCCESS for a paying learner. A
 * tighter probe timeout would report red on a run the product treats as fine.
 */
export const PROBE_TIMEOUT_MS = 50_000

export type ProbeStage = 'config' | 'provider' | 'parse' | 'range' | 'ok'

export interface MarkingProbeResult {
  ok: boolean
  /** Where it got to. 'ok' only when a mark came back and was in range. */
  stage: ProbeStage
  detail: string
  latencyMs: number
  model: string
  schemeId: string
  questionId: string
  /** Present only on success. */
  totalMarks?: number
  maxMarks?: number
  predictedGrade?: string
}

/**
 * Mark one fixed essay through the real path and report where it got to.
 *
 * Never throws: a health probe that throws is an outage report the monitoring
 * layer cannot read.
 */
export async function runMarkingProbe(): Promise<MarkingProbeResult> {
  const startedAt = Date.now()
  const base = {
    latencyMs: 0,
    model: ANTHROPIC_MODEL,
    schemeId: PROBE_SCHEME_ID,
    questionId: '',
  }

  const scheme = getMarkScheme(PROBE_SCHEME_ID)
  if (!scheme) {
    return {
      ...base,
      ok: false,
      stage: 'config',
      detail: `Mark scheme "${PROBE_SCHEME_ID}" is not registered`,
    }
  }

  const question = scheme.questions[0]
  if (!question) {
    return { ...base, ok: false, stage: 'config', detail: 'Scheme has no questions' }
  }

  const questionId = question.id

  let prompt
  try {
    prompt = buildMarkingPrompt({
      scheme,
      questionId,
      questionText: question.taskDescription,
      essay: PROBE_ESSAY,
    })
  } catch (err) {
    return {
      ...base,
      questionId,
      ok: false,
      stage: 'config',
      detail: `Prompt build failed: ${err instanceof Error ? err.message : String(err)}`,
    }
  }

  let text: string
  try {
    const anthropic = getAnthropicClient()
    const message = await anthropic.messages.create(
      {
        model: ANTHROPIC_MODEL,
        max_tokens: 4_096,
        system: cachedSystemBlock(prompt.systemPrompt),
        messages: [{ role: 'user', content: prompt.userMessage }],
      },
      { timeout: PROBE_TIMEOUT_MS },
    )

    // A refusal arrives as a successful response with prose in it, not as an
    // error - which is precisely why the liveness ping cannot see one.
    text = message.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('')
  } catch (err) {
    return {
      ...base,
      questionId,
      ok: false,
      stage: 'provider',
      detail: err instanceof Error ? err.message.slice(0, 300) : String(err).slice(0, 300),
      latencyMs: Date.now() - startedAt,
    }
  }

  const latencyMs = Date.now() - startedAt

  const feedback = generateFeedback({ scheme, questionId, rawResponseText: text })
  if (!feedback.ok) {
    return {
      ...base,
      questionId,
      latencyMs,
      ok: false,
      stage: 'parse',
      // This is the interesting failure: the model answered, and what it
      // answered could not be turned into a mark. A refusal lands here too.
      detail: `${feedback.error.type}${'reason' in feedback.error ? `: ${String(feedback.error.reason).slice(0, 200)}` : ''}`,
    }
  }

  const { totalMarks, predictedGrade } = feedback.result
  const maxMarks = question.totalMarks

  // Falsifiable on purpose. predictGrade sums the AO marks for totalMarks but
  // takes the ceiling from the question, so the two CAN disagree - unlike the
  // per-AO relation, which generateFeedback clamps by construction and which
  // therefore cannot fail however broken the model is.
  if (!Number.isInteger(totalMarks) || totalMarks < 0 || totalMarks > maxMarks) {
    return {
      ...base,
      questionId,
      latencyMs,
      ok: false,
      stage: 'range',
      detail: `Parsed a total of ${totalMarks} on a paper worth ${maxMarks}`,
      totalMarks,
      maxMarks,
    }
  }

  return {
    ok: true,
    stage: 'ok',
    detail: `Marked ${totalMarks}/${maxMarks} (${predictedGrade})`,
    latencyMs,
    model: ANTHROPIC_MODEL,
    schemeId: PROBE_SCHEME_ID,
    questionId,
    totalMarks,
    maxMarks,
    predictedGrade,
  }
}
