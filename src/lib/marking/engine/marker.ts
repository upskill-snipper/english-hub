/**
 * Seam C — the grounded MARKER call (Track A / Step 1).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * This is the one place the engine actually asks Claude to mark an essay. Per the
 * engine façade (doc 10 §2.1, `src/lib/marking/engine/types.ts`) the pipeline is
 *   route → resolvePack → retrieve → MARK → validate → generateFeedback,
 * and this module owns the MARK arrow: it turns a {@link MarkRequest} (pack +
 * retrieval blocks + submission + model tier) into a {@link RawMarkResult} — the
 * UN-validated, model-proposed mark. It deliberately does NOT compute the final
 * overall band, verify quotes, gate confidence, or set `needsHumanReview`; those
 * are the Validator's job (Seam D, doc 14). Keeping the marker thin is what lets
 * OQ-3 hold: a schema-fatal or fabricated-evidence output is caught downstream and
 * routed to a human rather than shown as a guessed mark.
 *
 * WHAT IT DOES (spec §2–§4, doc 20 §4 Step 2):
 *   1. Assembles a CACHEABLE, stable system prompt: the examiner persona + the four
 *      criteria + the 0–9 meaning + the absolute rules + the retrieved band
 *      descriptors. This whole block is stable per pack version, so it carries the
 *      Anthropic `cache_control: { type: 'ephemeral' }` breakpoint on its LAST
 *      block — honouring R-CACHE: descriptors sit BEFORE the breakpoint (cached),
 *      exemplars sit AFTER it (submission-specific, never invalidate the prefix).
 *   2. Assembles the USER message: the task prompt + track + the candidate's essay
 *      verbatim + the retrieved exemplar block (the `{{EXEMPLARS}}` slot). The
 *      exemplar block lives here, after the cache boundary, because Retrieval
 *      returns `rubricBlock` and `exemplarBlock` as TWO separate strings precisely
 *      so the assembler can split them across the breakpoint (doc 12 §2.5/§6).
 *   3. Forces the tool: `tool_choice: { type: 'tool', name: ieltsAssessmentTool }`
 *      so the model can only answer by calling `submit_ielts_writing_assessment`
 *      (spec §4; doc 13 §3.1). There is NO prose-parsing fallback — if no tool_use
 *      block comes back, this throws (a hard failure the Validator/route turns into
 *      human review, never a silent guess).
 *   4. Runs the OUTBOUND PII-MINIMISATION GUARD (DP-1,
 *      `../privacy/outbound-minimisation` → {@link assertMinimisedPayload}) on the
 *      assembled request body BEFORE dispatch, passing the essay (and task prompt)
 *      via `allowVerbatim` so the markable signal is allowed through but any
 *      identifier in the system prompt / surrounding metadata is refused.
 *   5. Maps the validated tool payload field-for-field into {@link RawMarkResult},
 *      carrying the model's `proposed_overall_band` as `proposedOverall.proposedOverallBand`
 *      (the real `overallBand` is filled with the model's proposal here ONLY as a
 *      placeholder the Validator overwrites — see {@link toRawMarkResult}).
 *
 * MODEL ROUTING (binding — DECISIONS-log OQ-1 / plan DP-7)
 * -------------------------------------------------------
 * The model id is NEVER named here. {@link MarkRequest.modelTier} is a key into
 * `MARKING_MODELS` (`./models`); this module resolves it to a concrete id at call
 * time and routes the call through `getAnthropicClient()` — never a bespoke client,
 * never an invented model id. The Haiku guard (`assertNotHaiku`) already runs at
 * `models.ts` load, so a marker tier can never be a Haiku-class model (IELTS §1).
 *
 * TESTABILITY (offline, deterministic)
 * ------------------------------------
 * The actual network call is injected as {@link MarkerDeps.createMessage}. In
 * production it defaults to `getAnthropicClient().messages.create`; in unit tests a
 * stub returns a canned tool_use block, so the test is offline and deterministic
 * (it asserts the mapping, that the PII guard ran, that tool_choice was forced, and
 * that the rubric/exemplar blocks landed on the right side of the cache boundary).
 * The guard is likewise injectable so a test can spy on it.
 */

import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { MARKING_MODELS } from './models'
import type { MarkRequest, RawMarkResult } from './types'
import type {
  CriterionScoreV2,
  BandCriterionScore,
  MarkingError,
  IntegrityFlags,
  Overall,
  EvidenceSpanV2,
} from './result-schema'
import { IELTS_CRITERION_CODES, type IeltsCriterionCode } from './result-schema'
import {
  ieltsAssessmentTool,
  IELTS_ASSESSMENT_TOOL_NAME,
  type IeltsAssessmentToolInput,
  type IeltsToolCriterion,
  type IeltsCriterionName,
} from './ielts/assessment-tool-schema'
import {
  assertMinimisedPayload,
  type MinimisableBody,
  type AssertMinimisedOptions,
} from '../privacy/outbound-minimisation'

// ════════════════════════════════════════════════════════════════════════════════
// §1 — Tunables + injectable dependencies
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Max output tokens for the marker call. The tool payload (four criteria with
 * 1–3 evidence spans each, an error list, flags, a holistic note) is well within
 * a few thousand tokens; 4096 leaves comfortable headroom without inviting the
 * model to pad. Per-call parameter, not encoded in `models.ts` (which is a pure id
 * map — doc 22 §3 keeps params at the call site).
 */
export const MARKER_MAX_TOKENS = 4096 as const

/**
 * Marker sampling temperature. Low-but-non-zero so a borderline essay can be run
 * for self-consistency (spec §6) and produce a genuine spread, while a clearly
 * non-borderline essay stays stable. The self-consistency wrapper (a later step)
 * reuses the SAME retrieval anchors across runs (doc 12 §3.2); this constant is the
 * single-run default.
 */
export const MARKER_TEMPERATURE = 0.2 as const

/**
 * The minimal shape of the model call this module needs — a subset of the SDK's
 * `messages.create`. Typed structurally (not via the SDK's overloaded signature)
 * so a test stub can satisfy it without constructing a real client, while the
 * production default still binds the genuine SDK method.
 */
export type CreateMessageFn = (
  body: Anthropic.Messages.MessageCreateParamsNonStreaming,
) => Promise<Anthropic.Messages.Message>

/**
 * The PII-minimisation guard contract (DP-1). Injected so a test can assert it was
 * invoked on the outbound body with the essay carved out via `allowVerbatim`.
 * Structurally identical to {@link assertMinimisedPayload} (the production default
 * must be assignable to this), so `body`/`opts` use the guard's own types: it scans
 * the assembled body and throws on any identifier OUTSIDE the allowed verbatim
 * spans. The assembled `MessageCreateParams` is a structural superset of
 * {@link MinimisableBody}, so passing it satisfies this contract.
 */
export type AssertMinimisedFn = (body: MinimisableBody, opts?: AssertMinimisedOptions) => void

/**
 * Injectable side-effects for {@link runMarker}. Both default to the real
 * implementations; tests override them to stay offline and to spy.
 */
export interface MarkerDeps {
  /** The model call. Defaults to `getAnthropicClient().messages.create`. */
  readonly createMessage?: CreateMessageFn
  /** The outbound PII guard. Defaults to {@link assertMinimisedPayload}. */
  readonly assertMinimised?: AssertMinimisedFn
  /** Optional explicit API key forwarded to `getAnthropicClient` (else env). */
  readonly apiKey?: string
}

// ════════════════════════════════════════════════════════════════════════════════
// §2 — Prompt assembly (cacheable rubric prefix; exemplars after the breakpoint)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The stable examiner-persona + rules text (spec §2). Everything here is constant
 * per pack version, so together with the injected band descriptors it forms the
 * cacheable system prefix. It restates the four criteria, the 0–9 meaning, the
 * mandatory integrity checks and the absolute rules, and — critically — the
 * OUTPUT-ONLY-VIA-THE-TOOL rule so the model never emits prose. The error-tagging
 * taxonomy is enforced structurally by the tool enum, so it is summarised, not
 * re-listed, here (the tool schema is the single source of truth — doc 13 R1).
 */
const MARKER_PERSONA_AND_RULES = `You are an experienced, certified IELTS examiner marking a Writing Task 2 response.
You mark strictly and ONLY against the official band descriptors provided to you in
this conversation. You never invent criteria, never guess, and never award a band you
cannot justify with specific evidence quoted from the candidate's text.

YOUR MARKING IS:
- Criterion-referenced: assess each of the four criteria independently.
- Descriptor-anchored: for each band you award, identify the specific descriptor
  language that matches the candidate's performance at that band.
- Evidence-based: for every band, quote 1-3 exact spans from the candidate's essay
  that justify it. Every quoted span MUST appear verbatim in the essay. Never fabricate.
- Calibrated: use any graded exemplars provided as anchors for what each band looks like.
- Honest about uncertainty: where you are torn between two bands, flag it as borderline
  and explain which descriptor features push each way.

THE FOUR CRITERIA (each scored as a WHOLE band, 0-9):
1. Task Response (TR) - Does the response fully address all parts of the task? Is the
   position clear and sustained throughout? Are main ideas relevant, developed, and
   supported? (Under-length and off-topic responses are limited here.)
2. Coherence and Cohesion (CC) - Is information logically organised? Is paragraphing
   appropriate? Are cohesive devices and referencing used accurately and not mechanically?
3. Lexical Resource (LR) - Range and precision of vocabulary; collocation; appropriacy
   and register; spelling and word formation.
4. Grammatical Range and Accuracy (GRA) - Range of structures; accuracy; error density;
   punctuation.

MANDATORY INTEGRITY CHECKS (perform before scoring):
- If the essay is under 250 words, apply the under-length consideration to Task Response
  and set integrity_flags.under_length = true.
- Words copied directly from the task prompt do NOT count as the candidate's own work,
  do not count toward length, and must not inflate Lexical or Grammatical judgements; set
  integrity_flags.copied_from_prompt when this occurs.
- If the essay does not address the task, is off-topic, or appears partly/fully memorised,
  Task Response is severely limited - set the relevant integrity flag and explain.
- Task 2 requires a clear position maintained throughout; if absent/unclear, TR is limited.

ERROR TAGGING:
Tag every notable error to exactly ONE type from the fixed taxonomy enumerated in the
tool's "errors[].type" schema (grammar.*, lexical.*, discourse.*, task.*). Use only those
exact strings.

OUTPUT:
Submit your assessment by calling the tool "${IELTS_ASSESSMENT_TOOL_NAME}" with the
required structure. Output NOTHING outside the tool call. For each criterion provide the
whole-band score, the matched descriptor language, 1-3 evidence spans (each an exact quote
plus why it justifies the band), and your confidence (0-1). Then the tagged error list,
integrity flags, borderline flags, a holistic note, your own proposed overall band, and
overall confidence.

ABSOLUTE RULES:
- Assess only against the descriptors provided. If you rely on a rule not in them, stop -
  it does not apply.
- Every evidence span must be a verbatim quote from the candidate's essay.
- Do not award a band you cannot tie to a descriptor and evidence.
- If you are uncertain, lower your confidence and flag it - do not bluff.`

/**
 * The official-band-descriptors section header (spec §2 `{{BAND_DESCRIPTORS}}`).
 * The descriptor text itself comes from {@link MarkRequest.retrieval}'s
 * `rubricBlock`, which Retrieval guarantees is the WHOLE rubric and cacheable
 * (doc 12 §2.1).
 */
const BAND_DESCRIPTORS_HEADER = 'OFFICIAL BAND DESCRIPTORS (mark only against these):'

/**
 * Build the system blocks. Returns an ARRAY of Anthropic text blocks (not a single
 * string) so the cache breakpoint can be set on the LAST block: the entire system
 * prompt — persona + rules + the full rubric descriptors — is the stable, per-pack
 * prefix, and `cache_control: { type: 'ephemeral' }` on its final block tells
 * Anthropic to cache everything up to and including it. The submission-specific
 * exemplar block is NOT here (it goes in the user message, after this boundary),
 * which is exactly what `retrieval.cacheableBoundary === 'after-rubric'` asserts.
 *
 * @internal Exported for the unit test's cache-boundary assertion.
 */
export function buildSystemBlocks(
  rubricBlock: string,
): readonly Anthropic.Messages.TextBlockParam[] {
  const rubricText = `${BAND_DESCRIPTORS_HEADER}\n${rubricBlock}`
  return [
    { type: 'text', text: MARKER_PERSONA_AND_RULES },
    // The rubric descriptors close the cacheable prefix. The breakpoint sits HERE
    // (after-rubric) so the per-submission exemplars/essay never invalidate it.
    {
      type: 'text',
      text: rubricText,
      cache_control: { type: 'ephemeral' },
    },
  ]
}

/**
 * Build the user-message text (spec §3): the task prompt, the track, the essay
 * verbatim, and the retrieved exemplar block. The exemplar block is appended AFTER
 * the essay so the whole user message sits past the cache breakpoint (R-CACHE):
 * exemplars are submission-specific (nearest-band selected) and must never be part
 * of the cached prefix.
 *
 * `studiedText` is included when present (forwarded for completeness), though IELTS
 * Task 2 normally has none.
 *
 * @internal Exported for the unit test's "exemplars after the boundary" assertion.
 */
export function buildUserMessageText(req: MarkRequest): string {
  const { submission, retrieval } = req
  const parts: string[] = [
    'TASK PROMPT:',
    submission.questionText,
    '',
    "CANDIDATE'S ESSAY (verbatim):",
    '---',
    submission.answerText,
    '---',
  ]
  if (submission.studiedText !== undefined && submission.studiedText.trim() !== '') {
    parts.push('', 'STUDIED TEXT / EXTRACT (context only):', '---', submission.studiedText, '---')
  }
  // Exemplars fill the spec §3 {{EXEMPLARS}} slot. They live in the user message,
  // AFTER the essay, so they sit past the cache boundary (doc 12 §2.5/§6). When
  // Retrieval omitted exemplars the block is empty and we skip the header so the
  // marker stays descriptor-grounded.
  const exemplarBlock = retrieval.exemplarBlock.trim()
  if (exemplarBlock !== '') {
    parts.push(
      '',
      'CALIBRATION EXEMPLARS (graded anchors - use to judge where this essay sits):',
      exemplarBlock,
    )
  }
  parts.push('', 'Mark this essay now using the tool.')
  return parts.join('\n')
}

/**
 * Assemble the full, dispatch-ready `messages.create` request body for the marker.
 * Forces the assessment tool via `tool_choice`. Pulled out so the unit test can
 * inspect the exact body (tool_choice forced, cache_control placement) and so the
 * PII guard runs over the same object that is dispatched.
 *
 * @internal Exported for the unit test.
 */
export function buildMarkerRequestBody(
  req: MarkRequest,
): Anthropic.Messages.MessageCreateParamsNonStreaming {
  const modelId = MARKING_MODELS[req.modelTier]
  return {
    model: modelId,
    max_tokens: MARKER_MAX_TOKENS,
    temperature: MARKER_TEMPERATURE,
    system: buildSystemBlocks(req.retrieval.rubricBlock) as Anthropic.Messages.TextBlockParam[],
    messages: [
      {
        role: 'user',
        content: buildUserMessageText(req),
      },
    ],
    tools: [ieltsAssessmentTool as Anthropic.Tool],
    // FORCED tool use: the model can only answer via the assessment tool (spec §4).
    tool_choice: { type: 'tool', name: IELTS_ASSESSMENT_TOOL_NAME },
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// §3 — Response extraction + mapping to RawMarkResult
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Thrown when the model did not return the forced tool_use block. There is NO
 * prose fallback by design (doc 20 §5 "keep a hard failure, not a silent prose
 * fallback"): an absent/unparsable tool call is a schema-fatal output that the
 * Validator/route turns into human review (OQ-3), never a guessed mark.
 */
export class MarkerToolUseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MarkerToolUseError'
  }
}

/**
 * Extract the single `submit_ielts_writing_assessment` tool_use payload from the
 * model response. Throws {@link MarkerToolUseError} if no matching tool_use block
 * is present (the only acceptable shape under forced tool_choice).
 *
 * @internal Exported for the unit test.
 */
export function extractToolPayload(message: Anthropic.Messages.Message): IeltsAssessmentToolInput {
  const block = message.content.find(
    (b): b is Anthropic.Messages.ToolUseBlock =>
      b.type === 'tool_use' && b.name === IELTS_ASSESSMENT_TOOL_NAME,
  )
  if (block === undefined) {
    throw new MarkerToolUseError(
      `Marker response contained no "${IELTS_ASSESSMENT_TOOL_NAME}" tool_use block ` +
        '(forced tool_choice was set). Refusing to parse prose; routing to human review.',
    )
  }
  // The SDK types `input` as `unknown`; the forced tool schema constrains the wire
  // shape, and the Validator (Seam D) is the authority that re-checks every field
  // and quote. We narrow to the wire payload type here without runtime coercion.
  return block.input as IeltsAssessmentToolInput
}

/**
 * Map the four IELTS full criterion names to the canonical short codes the result
 * schema uses (doc 13 §3.2). The Validator reorders to [TR, CC, LR, GRA]; the
 * marker preserves the model's order and lets the Validator canonicalise.
 */
const CRITERION_NAME_TO_CODE: Readonly<Record<IeltsCriterionName, IeltsCriterionCode>> = {
  'Task Response': 'TR',
  'Coherence and Cohesion': 'CC',
  'Lexical Resource': 'LR',
  'Grammatical Range and Accuracy': 'GRA',
}

/** The human-readable label kept on each criterion score (the full name). */
function labelForCode(code: IeltsCriterionCode): IeltsCriterionName {
  switch (code) {
    case 'TR':
      return 'Task Response'
    case 'CC':
      return 'Coherence and Cohesion'
    case 'LR':
      return 'Lexical Resource'
    case 'GRA':
      return 'Grammatical Range and Accuracy'
  }
}

/**
 * Map one tool-payload criterion to a {@link BandCriterionScore}. Evidence spans
 * are carried with `verified: false` — the marker NEVER asserts a quote is
 * verbatim; the Validator's substring check sets `verified` (doc 13 §2.2). The
 * per-criterion `rationale` reuses the model's matched-descriptor text (the model
 * supplies `descriptor_matched`, not a separate rationale, in the §4 schema).
 */
function toCriterionScore(c: IeltsToolCriterion): BandCriterionScore {
  const code = CRITERION_NAME_TO_CODE[c.name]
  const evidence: readonly EvidenceSpanV2[] = c.evidence.map((e) => ({
    quote: e.quote,
    explanation: e.explanation,
    // Validator-owned: the marker leaves every span UNVERIFIED.
    verified: false,
  }))
  return {
    scale: 'band',
    code,
    label: labelForCode(code),
    descriptorMatched: c.descriptor_matched,
    evidence,
    confidence: c.confidence,
    rationale: c.descriptor_matched,
    band: c.band,
    maxBand: 9,
  }
}

/**
 * Map the tagged errors. Like evidence, every error quote is carried UNVERIFIED
 * (`verified: false`) for the Validator to confirm. `severity` is required on the
 * canonical {@link MarkingError}; the wire schema makes it optional, so a missing
 * severity defaults to `'moderate'` (a neutral middle — the Validator may refine).
 */
function toMarkingError(e: IeltsAssessmentToolInput['errors'][number]): MarkingError {
  return {
    type: e.type,
    quote: e.quote,
    correction: e.correction,
    explanation: e.explanation,
    severity: e.severity ?? 'moderate',
    verified: false,
  }
}

/**
 * Build the {@link Overall} the marker carries. The marker does NOT compute the
 * authoritative overall band (that is the Validator's code-side recompute, OQ —
 * doc 14 / spec §5). It carries the model's `proposed_overall_band` as
 * `proposedOverallBand`, and seeds `overallBand` with the same value as a
 * placeholder the Validator OVERWRITES. This keeps {@link RawMarkResult.proposedOverall}
 * a fully-typed `Overall` without the marker pretending to own the final figure.
 */
function toProposedOverall(payload: IeltsAssessmentToolInput): Overall {
  return {
    kind: 'band',
    // Placeholder only — the Validator recomputes the real overall in code.
    overallBand: payload.proposed_overall_band,
    proposedOverallBand: payload.proposed_overall_band,
  }
}

/**
 * Map a validated forced-tool payload into a {@link RawMarkResult} (Seam C output).
 * This is the UN-validated mark: quotes are unverified, the overall is the model's
 * proposal, confidence/needsHumanReview are not yet code-owned. The Validator turns
 * this into a canonical `MarkingResultV2`.
 *
 * @internal Exported for the unit test.
 */
export function toRawMarkResult(payload: IeltsAssessmentToolInput): RawMarkResult {
  const criteria: readonly CriterionScoreV2[] = payload.criteria.map(toCriterionScore)
  const errors: readonly MarkingError[] = payload.errors.map(toMarkingError)
  const integrityFlags: IntegrityFlags = payload.integrity_flags
  return {
    criteria,
    errors,
    integrityFlags,
    proposedOverall: toProposedOverall(payload),
    borderlineFlags: payload.borderline_flags,
    holisticNote: payload.holistic_note,
    proposedConfidence: payload.overall_confidence,
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// §4 — The marker entry point
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Run the grounded marker (Seam C). Assembles the cacheable system prefix + user
 * message, runs the outbound PII guard on the body, dispatches a FORCED-tool call
 * to `MARKING_MODELS[req.modelTier]` via `getAnthropicClient()`, and maps the tool
 * payload into a {@link RawMarkResult}. Does NOT validate quotes, recompute the
 * overall, or gate confidence — those are the Validator's (OQ-3 keeps an invalid
 * output out of the learner's hands by deferring to that human-review path).
 *
 * @param req  The mark request: pack-derived prompt template inputs, retrieval
 *             blocks (rubric + exemplars), submission, and model tier.
 * @param deps Injectable model call + PII guard (defaults wire the real SDK +
 *             {@link assertMinimisedPayload}); overridden in tests for offline runs.
 * @returns    The model's raw, un-validated mark.
 * @throws {MarkerToolUseError} if the model returns no forced tool_use block.
 * @throws {Error} if the PII guard detects an identifier outside the essay.
 */
export async function runMarker(req: MarkRequest, deps: MarkerDeps = {}): Promise<RawMarkResult> {
  const assertMinimised: AssertMinimisedFn = deps.assertMinimised ?? assertMinimisedPayload
  const createMessage: CreateMessageFn =
    deps.createMessage ?? ((body) => getAnthropicClient(deps.apiKey).messages.create(body))

  const body = buildMarkerRequestBody(req)

  // DP-1: minimise BEFORE dispatch. The essay (and the task prompt the candidate is
  // responding to) are the markable signal and may legitimately contain PII-looking
  // text, so they are carved out via allowVerbatim; any identifier in the system
  // prompt or surrounding metadata is refused.
  //
  // The SDK's `MessageCreateParamsNonStreaming` carries `system` + `messages` and is
  // structurally a `MinimisableBody` at runtime, but TS will not infer the guard's
  // open `[key: string]: unknown` index signature onto the closed SDK type — so we
  // view it through `MinimisableBody` explicitly. The guard deep-scans every reachable
  // string regardless of the static type, so this view does not weaken the check.
  assertMinimised(body as unknown as MinimisableBody, {
    allowVerbatim: [req.submission.answerText, req.submission.questionText],
  })

  const message = await createMessage(body)
  const payload = extractToolPayload(message)
  return toRawMarkResult(payload)
}
