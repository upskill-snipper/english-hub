/**
 * Grounded Feedback Generator — turns a VALIDATED mark into student-facing
 * teaching feedback (design doc 16; architecture §3; IELTS spec §7; OQ-6).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The Marking Engine's last stage is a SECOND model call that takes the
 * already-validated {@link MarkingResultV2} and the candidate essay and produces
 * warm, strengths-first teaching feedback: a per-criterion "one change that
 * raises it", a single concrete next action, and (only for adult IELTS
 * candidates) upgrade rewrites of the learner's own weak sentences.
 *
 * THE ONE HARD CONTRACT (doc 16 §0/§5, non-negotiable)
 * Feedback can NEVER contradict the validated mark: it may not assert a
 * different band, invent an error not in `validatedResult.errors[]`, or rewrite
 * a span that is not a real, verified error from the mark. The legacy GCSE/IELTS
 * paths got this FREE because feedback shared the marker JSON; a separate call
 * loses that guarantee, so we RE-EARN it structurally with three inseparable
 * mechanisms (doc 16 §8 "treat them as one unit"):
 *   1. The feedback tool schema has NO band / overall / free-error-type field
 *      (doc 16 §4) — the model is structurally unable to emit or alter a score.
 *      Rewrites reference an INDEX into the validated `errors[]`, never free text.
 *   2. A code-side consistency check ({@link checkFeedbackConsistency}) runs after
 *      the call and rejects any drift: a "Band N"/score claim smuggled into free
 *      text, a rewrite whose `original` is not the verified error quote, a missing
 *      criterion, the wrong number of next actions, etc. (doc 16 §5).
 *   3. A DETERMINISTIC fallback ({@link buildDeterministicFeedback}) computed
 *      purely from the mark — no model in the loop — so a learner can NEVER see
 *      feedback that contradicts the mark. This is the ultimate guarantee and is
 *      also OQ-3's "never show a guessed mark" applied to feedback: on drift we
 *      degrade to the mark-derived template rather than show drifted output.
 *
 * OQ-6 (BINDING, DECISIONS-log): "upgrade rewrites" (rewriting the learner's own
 * sentences) default OFF. They are enabled ONLY when `opts.allowRewrites === true`
 * — a server-authoritative adult signal the caller resolves (NOT a client flag;
 * doc 16 §6: school-age GCSE/EAL minors must never receive rewrites). Even when
 * ON, a rewrite is only kept if it targets a REAL, verified error span from the
 * mark; anything else is dropped by the consistency check.
 *
 * MODEL RESOLUTION (no invented ids, no bespoke client)
 * The second call routes through the shared {@link getAnthropicClient} on the
 * engine's single source of truth, `MARKING_MODELS.marker` — the latest-Sonnet
 * tier that `models.ts` and doc 16 §2 both designate the "marker / feedback"
 * tier. (The build brief refers to a `MARKING_MODELS.feedback` key; that key
 * does not exist in `models.ts`, whose own header line designates `marker` as the
 * shared marker/feedback tier. We therefore use `MARKING_MODELS.marker` rather
 * than (a) inventing a new key — which would require editing the forbidden
 * `models.ts` — or (b) naming a model string inline, which the engine rules
 * forbid.) The client is INJECTABLE via `opts.client` so the tests in
 * `__tests__/generator.test.ts` run fully offline with no SDK call.
 *
 * Phase 1 is ADDITIVE: a new module under `engine/feedback/`. It reads the
 * validated result READ-ONLY and never mutates a mark.
 */

import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { MARKING_MODELS } from '../models'
import { isMarkingErrorType, type MarkingErrorType } from '../error-taxonomy'
import type {
  MarkingResultV2,
  CriterionScoreV2,
  BandCriterionScore,
  MarkingError,
  FeedbackBlock,
  FeedbackPoint,
} from '../result-schema'

// ─── Minimal injectable client surface ───────────────────────────────────────
//
// We depend ONLY on `messages.create`, typed against the real SDK request /
// response so the call site stays honest, but narrowed to an interface so tests
// can inject a stub without constructing a real `Anthropic` instance. The real
// {@link getAnthropicClient} return value satisfies this interface.

/** The single SDK surface the generator uses (so tests can inject a stub). */
export interface FeedbackModelClient {
  readonly messages: {
    create(
      body: Anthropic.Messages.MessageCreateParamsNonStreaming,
    ): Promise<Anthropic.Messages.Message>
  }
}

// ─── Public option / result shapes ───────────────────────────────────────────

/** Options for {@link generateFeedback}. */
export interface GenerateFeedbackOptions {
  /**
   * OQ-6 gate. When `true` (a SERVER-authoritative adult signal — never a client
   * flag), the generator may include upgrade rewrites of the learner's own weak
   * sentences. Defaults to `false` so school-age minors never receive rewrites
   * (doc 16 §6).
   */
  readonly allowRewrites?: boolean
  /**
   * Use a warmer, confidence-building register for younger learners (doc 16 §2.1
   * tone toggle). Independent of {@link allowRewrites}; defaults to `false`.
   */
  readonly youngerLearnerTone?: boolean
  /**
   * Injected model client for offline tests. Defaults to the shared
   * {@link getAnthropicClient} so production routes through the documented
   * no-training / data-minimisation posture.
   */
  readonly client?: FeedbackModelClient
  /** Optional explicit API key forwarded to {@link getAnthropicClient}. */
  readonly apiKey?: string
  /** Max tokens for the feedback call. Defaults to {@link DEFAULT_MAX_TOKENS}. */
  readonly maxTokens?: number
}

/**
 * The generator's output: the canonical {@link FeedbackBlock} (so it slots
 * straight into `MarkingResultV2.feedback`) plus provenance describing HOW it was
 * produced — whether the model output passed the consistency check, or the
 * deterministic fallback was used instead.
 */
export interface GenerateFeedbackResult {
  /** The student-facing feedback block (canonical shape). */
  readonly feedback: FeedbackBlock
  /**
   * `true` when the MODEL's feedback passed {@link checkFeedbackConsistency} and
   * was used; `false` when it drifted (or the call failed) and the deterministic
   * fallback was substituted. Mirrors doc 16 §5 `consistencyChecksPassed`.
   */
  readonly consistencyChecksPassed: boolean
  /** How the returned feedback was produced (for audit / calibration §10). */
  readonly source: 'model' | 'fallback'
}

// ─── Tuning constants (pinned so a change is a deliberate, reviewed edit) ──────

/** Tool the feedback model is FORCED to call (doc 16 §4). */
export const FEEDBACK_TOOL_NAME = 'submit_ielts_feedback' as const

/** Default token ceiling for the feedback call. */
export const DEFAULT_MAX_TOKENS = 1536 as const

/** Length caps mirroring the GCSE anti-rewrite-smuggling caps (doc 16 §5.7). */
export const FEEDBACK_CAPS = {
  summary: 600,
  strength: 300,
  why: 400,
  oneChange: 300,
  rewriteNote: 250,
  nextAction: 300,
} as const

/** Max strengths / improvements surfaced (doc 16 §2.1: strengths 1–4). */
export const MAX_STRENGTHS = 4 as const

/** The four IELTS criterion codes, in fixed order (doc 13 §3.3 / result-schema). */
const IELTS_ORDER: readonly string[] = ['TR', 'CC', 'LR', 'GRA']

// ─── Entry point ─────────────────────────────────────────────────────────────

/**
 * Generate student-facing teaching feedback FROM a validated mark.
 *
 * Flow (doc 16 §2): build a forced-tool prompt carrying the validated mark + the
 * essay → call the marker/feedback model → parse the tool payload → run the
 * consistency check against the mark → on pass return the model feedback, on any
 * drift OR call failure return the deterministic fallback. The returned
 * {@link FeedbackBlock} is guaranteed consistent with the mark either way.
 *
 * @param validatedResult The validated, code-owned mark (read-only source of truth).
 * @param essayText       The candidate essay, verbatim (rewrite spans verified against it).
 * @param opts            See {@link GenerateFeedbackOptions} (rewrites OFF by default).
 * @returns The feedback block plus provenance (model vs deterministic fallback).
 */
export async function generateFeedback(
  validatedResult: MarkingResultV2,
  essayText: string,
  opts: GenerateFeedbackOptions = {},
): Promise<GenerateFeedbackResult> {
  const allowRewrites = opts.allowRewrites === true
  const fallback = buildDeterministicFeedback(validatedResult, opts)

  let payload: FeedbackToolPayload | null = null
  try {
    const client = opts.client ?? getAnthropicClient(opts.apiKey)
    const response = await client.messages.create(
      buildFeedbackRequest(validatedResult, essayText, allowRewrites, opts),
    )
    payload = extractToolPayload(response)
  } catch {
    // A failed / unparseable model call degrades to the mark-derived fallback —
    // a student never sees an error in place of feedback (doc 16 §5).
    return { feedback: fallback, consistencyChecksPassed: false, source: 'fallback' }
  }

  if (payload === null) {
    return { feedback: fallback, consistencyChecksPassed: false, source: 'fallback' }
  }

  const built = buildFeedbackFromPayload(payload, validatedResult, essayText, allowRewrites)
  const consistent = checkFeedbackConsistency(built, validatedResult, essayText)
  if (!consistent.ok) {
    return { feedback: fallback, consistencyChecksPassed: false, source: 'fallback' }
  }
  return { feedback: built, consistencyChecksPassed: true, source: 'model' }
}

// ─── Forced-tool schema (NO band / overall / free-error-type field) ──────────

/**
 * The feedback forced-tool definition (doc 16 §4). By OMISSION it contains no
 * band, no overall band, and no model-mintable error-type enum — so the model
 * cannot restate or alter the score. A rewrite references `error_index` (an index
 * into the validated `errors[]`); CODE resolves the taxonomy type + verbatim
 * quote, removing the model's ability to fabricate either.
 */
export const feedbackTool = {
  name: FEEDBACK_TOOL_NAME,
  description: 'Submit student-facing teaching feedback derived from the validated mark.',
  input_schema: {
    type: 'object',
    properties: {
      summary: { type: 'string' },
      strengths: {
        type: 'array',
        minItems: 1,
        maxItems: MAX_STRENGTHS,
        items: { type: 'string' },
      },
      per_criterion: {
        type: 'array',
        minItems: 4,
        maxItems: 4,
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              enum: [
                'Task Response',
                'Coherence and Cohesion',
                'Lexical Resource',
                'Grammatical Range and Accuracy',
              ],
            },
            why: { type: 'string' },
            one_change: { type: 'string' },
          },
          required: ['name', 'why', 'one_change'],
        },
      },
      upgrade_rewrites: {
        type: 'array',
        minItems: 0,
        maxItems: 2,
        items: {
          type: 'object',
          properties: {
            error_index: {
              type: 'integer',
              description: 'Index into the supplied errors[] this rewrite fixes.',
            },
            original: {
              type: 'string',
              description: 'Verbatim span; must equal errors[error_index].quote.',
            },
            rewrite: { type: 'string' },
            note: { type: 'string', description: 'One line: what changed and why.' },
          },
          required: ['error_index', 'original', 'rewrite', 'note'],
        },
      },
      next_action: { type: 'string' },
    },
    required: ['summary', 'strengths', 'per_criterion', 'next_action'],
  },
} as const satisfies Anthropic.Tool

// ─── Untrusted wire payload (what the model returns inside the tool block) ────

/** One per-criterion feedback block as the model returns it (doc 16 §4). */
interface PerCriterionPayload {
  readonly name: string
  readonly why: string
  readonly one_change: string
}

/** One upgrade rewrite as the model returns it (doc 16 §4). */
interface UpgradeRewritePayload {
  readonly error_index: number
  readonly original: string
  readonly rewrite: string
  readonly note: string
}

/** The full feedback tool payload (untrusted; doc 16 §4). */
export interface FeedbackToolPayload {
  readonly summary: string
  readonly strengths: readonly string[]
  readonly per_criterion: readonly PerCriterionPayload[]
  readonly upgrade_rewrites?: readonly UpgradeRewritePayload[]
  readonly next_action: string
}

// ─── Prompt construction ──────────────────────────────────────────────────────

/**
 * Build the full non-streaming Messages request for the feedback call. The
 * system block states the hard contract (ground every point in the mark; never
 * assert a band; rewrites only when permitted); the user message carries the
 * validated mark JSON + the essay. No learner PII is included — the mark and
 * essay only (doc 16 §4 outbound-minimisation).
 */
function buildFeedbackRequest(
  validatedResult: MarkingResultV2,
  essayText: string,
  allowRewrites: boolean,
  opts: GenerateFeedbackOptions,
): Anthropic.Messages.MessageCreateParamsNonStreaming {
  return {
    model: MARKING_MODELS.marker,
    max_tokens: opts.maxTokens ?? DEFAULT_MAX_TOKENS,
    system: buildSystemPrompt(allowRewrites, opts.youngerLearnerTone === true),
    tools: [feedbackTool],
    tool_choice: { type: 'tool', name: FEEDBACK_TOOL_NAME },
    messages: [
      {
        role: 'user',
        content: buildUserMessage(validatedResult, essayText, allowRewrites),
      },
    ],
  }
}

/**
 * The system prompt (doc 16 §0/§5/§6/§7). Encodes the hard contract, the
 * strengths-first/per-criterion/one-next-action structure, the rewrite policy
 * gate, and the optional younger-learner tone. Deterministic in its toggles so
 * the offline snapshot-style assertions are stable.
 *
 * @param allowRewrites Whether the OQ-6 adult rewrite gate is open.
 * @param youngerTone   Whether to use the warmer younger-learner register.
 */
export function buildSystemPrompt(allowRewrites: boolean, youngerTone: boolean): string {
  const tone = youngerTone
    ? 'Use a warm, encouraging, confidence-building tone suitable for a younger learner. Keep sentences short and plain.'
    : 'Use a warm, professional, encouraging tone.'
  const rewriteRule = allowRewrites
    ? 'You MAY include up to two upgrade rewrites. Each rewrite MUST target one of the supplied errors by its error_index, and "original" MUST be copied verbatim from that error\'s quote. Do not rewrite any sentence that is not a supplied error.'
    : 'You MUST NOT include any upgrade rewrites. Leave upgrade_rewrites empty or omit it.'
  return [
    "You are a supportive English-writing teacher. You are given a FINAL, ALREADY-VALIDATED assessment of a learner's essay. Your job is to explain it kindly and usefully.",
    'HARD RULES (these are non-negotiable):',
    '- NEVER state, change, imply or argue a band/score/grade. Do not write "Band 7", "score", or any number that looks like a band. The mark is fixed and is not yours to alter.',
    '- NEVER invent an error or weakness that is not in the supplied assessment. Ground every point in the supplied criteria, errors and notes.',
    '- Lead with genuine strengths, then give, for EACH of the four criteria, the single highest-leverage change that would help most.',
    '- Give exactly ONE concrete next action.',
    rewriteRule,
    'TONE: ' + tone,
    'Return your feedback ONLY by calling the submit_ielts_feedback tool.',
  ].join('\n')
}

/**
 * The user message: the validated mark (criteria codes/labels/bands, the indexed
 * verified errors the model may reference for rewrites, holistic note) plus the
 * essay. Bands are included for grounding ONLY; the system prompt forbids
 * restating them and the tool schema has no band field, so they cannot leak into
 * output without the consistency check catching it.
 */
export function buildUserMessage(
  validatedResult: MarkingResultV2,
  essayText: string,
  allowRewrites: boolean,
): string {
  const criteria = validatedResult.criteria
    .map((c) => `- ${c.code} (${c.label}): ${describeCriterionBand(c)} — ${c.rationale}`)
    .join('\n')
  const errorLines = allowRewrites
    ? eligibleRewriteErrors(validatedResult)
        .map((e) => `  [${e.index}] type=${e.error.type} quote=${JSON.stringify(e.error.quote)}`)
        .join('\n')
    : '(rewrites disabled for this learner)'
  return [
    'VALIDATED ASSESSMENT (do not contradict; do not restate any band):',
    'Criteria:',
    criteria,
    'Holistic note: ' + (validatedResult.holisticNote ?? '(none)'),
    'Verified errors available for rewrites (reference by index):',
    errorLines,
    '',
    'LEARNER ESSAY (verbatim):',
    essayText,
  ].join('\n')
}

/** Human-readable band/marks of a criterion for the prompt (never trusted back). */
function describeCriterionBand(c: CriterionScoreV2): string {
  return c.scale === 'band'
    ? `band ${c.band}/${c.maxBand}`
    : `${c.awardedMarks}/${c.maxMarks} marks (${c.band})`
}

// ─── Response parsing ─────────────────────────────────────────────────────────

/**
 * Pull the forced-tool payload out of a Messages response. Returns `null` if the
 * expected `tool_use` block is absent or malformed — the caller then degrades to
 * the deterministic fallback (doc 16 §5). Pure; no narrowing trust beyond shape.
 */
export function extractToolPayload(
  response: Anthropic.Messages.Message,
): FeedbackToolPayload | null {
  const block = response.content.find(
    (b): b is Anthropic.Messages.ToolUseBlock =>
      b.type === 'tool_use' && b.name === FEEDBACK_TOOL_NAME,
  )
  if (block === undefined) return null
  return coercePayload(block.input)
}

/** Validate the raw tool input into a {@link FeedbackToolPayload}, or `null`. */
function coercePayload(input: unknown): FeedbackToolPayload | null {
  if (typeof input !== 'object' || input === null) return null
  const o = input as Record<string, unknown>
  if (typeof o.summary !== 'string') return null
  if (typeof o.next_action !== 'string') return null
  if (!Array.isArray(o.strengths) || !o.strengths.every((s) => typeof s === 'string')) return null
  if (!Array.isArray(o.per_criterion)) return null
  const perCriterion: PerCriterionPayload[] = []
  for (const raw of o.per_criterion) {
    if (typeof raw !== 'object' || raw === null) return null
    const r = raw as Record<string, unknown>
    if (typeof r.name !== 'string' || typeof r.why !== 'string' || typeof r.one_change !== 'string')
      return null
    perCriterion.push({ name: r.name, why: r.why, one_change: r.one_change })
  }
  const rewrites: UpgradeRewritePayload[] = []
  if (o.upgrade_rewrites !== undefined) {
    if (!Array.isArray(o.upgrade_rewrites)) return null
    for (const raw of o.upgrade_rewrites) {
      if (typeof raw !== 'object' || raw === null) return null
      const r = raw as Record<string, unknown>
      if (
        typeof r.error_index !== 'number' ||
        typeof r.original !== 'string' ||
        typeof r.rewrite !== 'string' ||
        typeof r.note !== 'string'
      )
        return null
      rewrites.push({
        error_index: r.error_index,
        original: r.original,
        rewrite: r.rewrite,
        note: r.note,
      })
    }
  }
  return {
    summary: o.summary,
    strengths: o.strengths as string[],
    per_criterion: perCriterion,
    upgrade_rewrites: rewrites,
    next_action: o.next_action,
  }
}

// ─── Payload → FeedbackBlock (code owns rewrite provenance) ───────────────────

/**
 * Project the untrusted payload into a canonical {@link FeedbackBlock}. CODE — not
 * the model — resolves each rewrite's taxonomy type and micro-lesson key from the
 * referenced error, and DROPS any rewrite that is not a real, verified error span
 * (doc 16 §4/§5). Length caps are applied here (doc 16 §5.7). Rewrites are only
 * carried at all when `allowRewrites` is set (OQ-6).
 */
export function buildFeedbackFromPayload(
  payload: FeedbackToolPayload,
  validatedResult: MarkingResultV2,
  essayText: string,
  allowRewrites: boolean,
): FeedbackBlock {
  const strengths: FeedbackPoint[] = payload.strengths
    .slice(0, MAX_STRENGTHS)
    .map((s) => ({ point: cap(s, FEEDBACK_CAPS.strength) }))

  const improvements: FeedbackPoint[] = payload.per_criterion.map((pc) => {
    const point = cap(`${pc.name}: ${pc.one_change}`, FEEDBACK_CAPS.why + FEEDBACK_CAPS.oneChange)
    return { point }
  })

  // Attach kept rewrites as extra improvement points carrying upgradeRewrite +
  // a code-resolved micro-lesson key. Only when the OQ-6 gate is open.
  if (allowRewrites) {
    for (const rw of payload.upgrade_rewrites ?? []) {
      const resolved = resolveRewrite(rw, validatedResult, essayText)
      if (resolved !== null) improvements.push(resolved)
    }
  }

  return {
    strengths,
    improvements,
    nextAction: cap(payload.next_action, FEEDBACK_CAPS.nextAction),
    summary: cap(payload.summary, FEEDBACK_CAPS.summary),
  }
}

/**
 * Resolve one rewrite to a {@link FeedbackPoint}, or `null` if it does not target
 * a real, verified error whose quote is verbatim in the essay. This is where the
 * model loses the ability to fabricate a rewrite target (doc 16 §5.3/§5.4).
 */
function resolveRewrite(
  rw: UpgradeRewritePayload,
  validatedResult: MarkingResultV2,
  essayText: string,
): FeedbackPoint | null {
  const err = validatedResult.errors[rw.error_index]
  if (err === undefined) return null
  if (err.verified !== true) return null
  if (normalise(rw.original) !== normalise(err.quote)) return null
  if (!normalise(essayText).includes(normalise(err.quote))) return null
  const microLessonErrorType: MarkingErrorType | undefined = isMarkingErrorType(err.type)
    ? err.type
    : undefined
  return {
    point: cap(rw.note, FEEDBACK_CAPS.rewriteNote),
    upgradeRewrite: rw.rewrite,
    quote: err.quote,
    ...(microLessonErrorType !== undefined ? { microLessonErrorType } : {}),
  }
}

// ─── The consistency check (the hard contract, enforced in code) ──────────────

/** Result of {@link checkFeedbackConsistency}: ok, plus reasons on failure. */
export interface ConsistencyResult {
  readonly ok: boolean
  readonly violations: readonly string[]
}

/**
 * Verify built feedback does not contradict the mark (doc 16 §5). Hard-fail (ok
 * = false) on any of:
 *  - a "Band N" / score / grade claim in any free text (defence in depth — the
 *    schema already omits band fields, but a regex catches smuggled claims);
 *  - any upgradeRewrite whose `quote` is not a verified error quote present
 *    verbatim in the essay (no invented rewrite targets);
 *  - zero or empty next action (exactly one required);
 *  - zero strengths (strengths-first requires at least one).
 *
 * Pure; the caller substitutes the deterministic fallback on any violation.
 */
export function checkFeedbackConsistency(
  feedback: FeedbackBlock,
  validatedResult: MarkingResultV2,
  essayText: string,
): ConsistencyResult {
  const violations: string[] = []
  const normEssay = normalise(essayText)
  const verifiedQuotes = new Set(
    validatedResult.errors.filter((e) => e.verified).map((e) => normalise(e.quote)),
  )

  const freeText = [
    feedback.summary,
    feedback.nextAction,
    ...feedback.strengths.map((s) => s.point),
    ...feedback.improvements.map((i) => i.point),
  ]
  for (const text of freeText) {
    if (BAND_CLAIM_RE.test(text)) {
      violations.push(`free-text band/score claim: ${JSON.stringify(text)}`)
    }
  }

  for (const imp of feedback.improvements) {
    if (imp.upgradeRewrite === undefined) continue
    const q = imp.quote === undefined ? '' : normalise(imp.quote)
    if (q === '' || !verifiedQuotes.has(q)) {
      violations.push('rewrite targets a non-verified error span')
    } else if (!normEssay.includes(q)) {
      violations.push('rewrite quote not verbatim in essay')
    }
  }

  if (feedback.nextAction.trim() === '') {
    violations.push('missing next action')
  }
  if (feedback.strengths.length === 0) {
    violations.push('no strengths (strengths-first required)')
  }

  return { ok: violations.length === 0, violations }
}

/**
 * Matches a smuggled band/score/grade claim in free text (defence in depth).
 * Catches "band 7", "band 6.5", "score of 8", "grade 5" etc. Deliberately broad:
 * feedback should never quantify the mark in prose.
 */
const BAND_CLAIM_RE = /\b(band|score|grade)\b\s*(of\s*)?\d/i

// ─── Deterministic fallback (computed purely from the mark) ───────────────────

/**
 * Build a complete {@link FeedbackBlock} from the validated mark ALONE — no model
 * in the loop (doc 16 §5). Strengths = the highest-banded criteria; one-change =
 * a canned per-criterion tip; next action = a canned, mark-derived line. This is
 * the ultimate guarantee that a learner never sees feedback that contradicts the
 * mark: it is computed FROM the mark and so cannot drift from it. It also passes
 * {@link checkFeedbackConsistency} by construction (no band claims; no rewrites;
 * one next action; ≥1 strength).
 */
export function buildDeterministicFeedback(
  validatedResult: MarkingResultV2,
  opts: GenerateFeedbackOptions = {},
): FeedbackBlock {
  const criteria = orderCriteria(validatedResult.criteria)
  const ranked = [...criteria].sort((a, b) => bandValue(b) - bandValue(a))
  const top = ranked.slice(0, Math.min(2, ranked.length))
  const weakest = ranked[ranked.length - 1]

  const strengths: FeedbackPoint[] =
    top.length > 0
      ? top.map((c) => ({
          point: cap(`You showed real strength in ${c.label}.`, FEEDBACK_CAPS.strength),
        }))
      : [{ point: 'You made a genuine attempt at this task — that is the first step.' }]

  const improvements: FeedbackPoint[] = criteria.map((c) => ({
    point: cap(
      `${c.label}: ${cannedOneChange(c.code)}`,
      FEEDBACK_CAPS.oneChange + FEEDBACK_CAPS.why,
    ),
  }))

  const nextActionTarget = weakest !== undefined ? weakest.label : 'your weakest area'
  const summaryLead =
    opts.youngerLearnerTone === true ? 'Great effort!' : 'Well done on completing this.'

  return {
    strengths,
    improvements,
    nextAction: cap(
      `Pick one essay and rewrite a single paragraph focusing only on ${nextActionTarget}.`,
      FEEDBACK_CAPS.nextAction,
    ),
    summary: cap(
      `${summaryLead} Build on what is already working and take one focused step at a time.`,
      FEEDBACK_CAPS.summary,
    ),
  }
}

/** A canned, band-agnostic "one change" tip per IELTS criterion code (doc 16 §5). */
function cannedOneChange(code: string): string {
  switch (code) {
    case 'TR':
      return 'make sure every part of the question is directly answered with a clear position.'
    case 'CC':
      return 'use clear paragraphs and link your ideas with cohesive words like "however" and "as a result".'
    case 'LR':
      return 'replace a few common words with more precise vocabulary, and check word forms.'
    case 'GRA':
      return 'vary your sentence structures and proofread for tense and agreement.'
    default:
      return 'focus on one clear, specific improvement in this area.'
  }
}

// ─── Small pure helpers ────────────────────────────────────────────────────────

/** Eligible rewrite targets: verified errors, with their original index. */
function eligibleRewriteErrors(
  validatedResult: MarkingResultV2,
): readonly { readonly index: number; readonly error: MarkingError }[] {
  return validatedResult.errors
    .map((error, index) => ({ index, error }))
    .filter((e) => e.error.verified === true)
}

/** Order criteria into [TR, CC, LR, GRA] where codes are known; stable otherwise. */
function orderCriteria(criteria: readonly CriterionScoreV2[]): readonly CriterionScoreV2[] {
  return [...criteria].sort((a, b) => {
    const ia = IELTS_ORDER.indexOf(a.code)
    const ib = IELTS_ORDER.indexOf(b.code)
    if (ia === -1 && ib === -1) return 0
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })
}

/** Numeric ranking value of a criterion (band scale, or marks ratio × 9). */
function bandValue(c: CriterionScoreV2): number {
  if (c.scale === 'band') return (c as BandCriterionScore).band
  return c.maxMarks > 0 ? (c.awardedMarks / c.maxMarks) * 9 : 0
}

/** Whitespace-normalised comparison key (mirrors the marker §5.2 substring rule). */
function normalise(s: string): string {
  return s.replace(/\s+/g, ' ').trim().toLowerCase()
}

/** Truncate to `max` chars (anti-rewrite-smuggling caps, doc 16 §5.7). */
function cap(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max)
}
