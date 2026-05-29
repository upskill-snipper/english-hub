// ─── Track A / Step 4 — the mark() FACADE (doc 10 §2.1 "the facade") ──────────
//
// WHY THIS FILE EXISTS
// --------------------
// Doc 10 §2.1 defines ONE callable entry — `markSubmission(input)` — that runs the
// engine's components in a fixed order and returns either a finished, trustworthy
// mark or a clarify request, NEVER a guessed mark. Every sibling piece is already
// built (router, resolve-pack, retrieval, marker, validator, self-consistency,
// result/confidence); this module is the single place that COMPOSES them. Routes
// (`/api/mark`, `/api/marking/run`, the future IELTS route) become thin adapters
// that build an `EngineInput`, call this, and shape the HTTP response + persistence.
//
// THE PIPELINE (doc 10 §2.1 / §2.2)
//   1. route       — RoutingDecision | NeedsConfirmation (or throws RoutingError).
//                    A NeedsConfirmation short-circuits: the engine does NOT mark
//                    (doc 10 §2.2 / Step 7 confirm-loop contract).
//   2. resolvePack — FAIL-CLOSED (doc 10 §1.2): no published pack ⇒ throws NO_PACK.
//                    The facade NEVER guesses a pack and never marks against null.
//   3. retrieve    — pure descriptor + nearest-exemplar selection (doc 12).
//   4. mark        — the grounded forced-tool model call (Seam C), wrapped by the
//                    self-consistency policy for high-stakes scripts (OQ-4).
//   5. validate    — the anti-hallucination backstop (Seam D); the OQ-3 SINGLE
//                    retry budget lives HERE in the facade (the validator only
//                    signals retry/humanReview; spending the one retry is ours).
//   → MarkingResultV2 carrying the OQ-5 disposition (see DISPOSITION below).
//
// FEEDBACK IS A SEPARATE LATER CALL (Track C — task contract)
// The facade returns the VALIDATED mark, not prose. `MarkingResultV2.feedback` is a
// required field, so the facade attaches a deterministic, mark-derived placeholder
// (`buildDeterministicFeedback` — pure, no model, cannot contradict the mark). The
// Feedback Generator (doc 16) is a separate model call a route makes AFTER this.
//
// OQ-3 (BINDING) — ONE shared retry budget for schema-fatal OR fabricated evidence
// A bad model output (missing criterion, out-of-range band, invented quote) gets
// AT MOST ONE re-mark. If the second mark is still invalid, the result is returned
// with `needsHumanReview = true` — never a guessed mark shown to a learner. The
// validator owns the *decision* (`retry` vs `humanReview`); the facade owns the
// *budget* (it re-marks once, then forces human review). The budget is per-mark, so
// under self-consistency it applies independently within each run's mark+validate.
//
// OQ-4 (BINDING) — N=3 self-consistency ONLY for borderline + paid mock
// High-stakes scripts run the marker 3× and aggregate (median run, or a surfaced
// range + forced human review on divergence). Everything else is single-run. The
// policy lives in `self-consistency.ts:chooseRunCount`; the facade passes the two
// server-authoritative booleans straight through (it never infers "high-stakes").
//
// OQ-5 (BINDING) — the display disposition
// A mark is eligible to be shown to a learner as labelled "AI practice feedback"
// ONLY when `overallConfidence >= 0.7` AND zero validator/integrity flags AND it is
// not a high-stakes self-consistency DIVERGENCE; otherwise it routes to human
// review. The validator already sets `result.needsHumanReview` per the OQ-5 gate;
// the facade surfaces a small, explicit {@link MarkDisposition} so a route never has
// to re-derive the rule. `needsHumanReview === false` ⇔ shown-eligible.
//
// OFFLINE TESTABILITY
// Every model call is injected: `markOnce` (one full mark+validate pass) and the
// optional `classifier` (the router fallback) are `EngineDeps` fields. Production
// wires `markOnce` to `runMarker` + the validate bridge below; unit tests pass pure
// stubs so the facade is asserted with zero network. No bespoke client, no inline
// model id — the model tier is `MARKING_MODELS.marker` via the injected marker.
// ──────────────────────────────────────────────────────────────────────────────

import { route, type SubmissionClassifier } from './router'
import { resolvePack } from './resolve-pack'
import { retrieve } from './retrieval'
import { runMarker, type MarkerDeps } from './marker'
import { validate, type ValidationOutcome } from './validator'
import {
  runSelfConsistentMark,
  type SelfConsistencyPolicyInput,
  type SelfConsistencyOutcome,
  type MarkOnceFn,
} from './self-consistency'
import { buildDeterministicFeedback } from './feedback/generator'
import { MARKING_RESULT_SCHEMA_VERSION } from './result-schema'
import type {
  KnowledgePack,
  MarkSubmissionInput,
  MarkSubmissionOutcome,
  EngineResult,
  EngineProvenance,
  NeedsConfirmation,
  RoutingDecision,
  PackResolveResult,
  PackResolveRequest,
  RawMarkResult,
  RawSubmission,
  RetrievalResult,
  MarkingResultV2,
  MarkingModelTier,
} from './types'

// ════════════════════════════════════════════════════════════════════════════════
// §1 — Disposition (OQ-5): the shown-eligible vs needs-human-review decision
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The OQ-5 display disposition the facade carries on a finished {@link EngineResult}.
 *
 *   • `'show_ai_practice_feedback'` — eligible to show to a learner as labelled
 *     "AI practice feedback": `overallConfidence >= 0.7` AND zero flags AND not a
 *     high-stakes divergence. This is exactly `result.needsHumanReview === false`
 *     (the validator/self-consistency already encode the full gate), surfaced here
 *     so a route need not re-derive it.
 *   • `'needs_human_review'` — anything else: low confidence, any integrity /
 *     validation flag, an unresolved schema/fabrication failure after the one
 *     retry, or a self-consistency divergence. NEVER shown as a confident mark.
 */
export type MarkDisposition = 'show_ai_practice_feedback' | 'needs_human_review'

/** The OQ-5 confidence floor for showing a mark as "AI practice feedback" (doc 10 OQ-5). */
export const SHOW_AI_FEEDBACK_MIN_CONFIDENCE = 0.7 as const

/**
 * A finished facade result enriched with the OQ-5 {@link MarkDisposition}.
 * Extends the doc-10 {@link EngineResult} additively so existing consumers keep
 * working and a route can branch on `disposition` without re-deriving the gate.
 */
export interface EngineMarkResult extends EngineResult {
  /** The OQ-5 display disposition (shown-eligible vs human review). */
  readonly disposition: MarkDisposition
}

/**
 * The facade outcome: either a finished {@link EngineMarkResult} (mark produced) or
 * a {@link NeedsConfirmation} (routing was ambiguous and `caps.allowClarify` true —
 * NO marking happened). Fail-closed failures (NO_PACK / AMBIGUOUS_SUBMISSION /
 * INVALID_METADATA) are THROWN as `RoutingError`, not returned, so they are not
 * members of this union (a route catches + maps them to a 4xx — doc 10 Step 8).
 */
export type MarkSubmissionResult = EngineMarkResult | NeedsConfirmation

// ════════════════════════════════════════════════════════════════════════════════
// §2 — Injectable dependencies (offline-by-construction)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * One full mark pass at a given temperature: assemble the {@link MarkRequest},
 * run the marker, bridge its {@link RawMarkResult} into a {@link MarkingResultV2},
 * validate it (with the OQ-3 single-retry budget), and return the validated mark —
 * or REJECT when the mark cannot be trusted even after the retry routed it to human
 * review is NOT a rejection (a flagged result is still returned). A rejection means
 * "this run could not produce any result" (e.g. the model threw); self-consistency
 * treats a rejected run as a dropped sample (doc 15 §4.6).
 *
 * This is the {@link MarkOnceFn} self-consistency consumes. The default
 * ({@link defaultMarkOnce}) wires `runMarker` + `validate`; tests inject a stub.
 */
export type FacadeMarkOnceFn = MarkOnceFn

/**
 * Injectable side-effects for {@link markSubmission}. Every model touch-point is
 * here so the whole facade runs offline in tests.
 */
export interface EngineDeps {
  /**
   * One validated mark pass at a temperature (the self-consistency unit of work).
   * Receives the resolved pack + retrieval blocks + submission so it can build the
   * marker request. Defaults to {@link defaultMarkOnce} (real `runMarker`+validate).
   * Tests inject a pure stub that returns canned {@link MarkingResultV2} runs.
   */
  readonly markOnce?: (
    ctx: MarkOnceContext,
    temperature: number,
    runIndex: number,
  ) => Promise<MarkingResultV2>
  /**
   * Router classifier fallback (doc 10 §2.2 mode 2b). `undefined` ⇒ the router's
   * default model-backed classifier; `null` ⇒ heuristics-only (every ambiguous
   * case clarifies); a function ⇒ that stub (tests). Forwarded to `route`.
   */
  readonly classifier?: SubmissionClassifier | null
  /** Marker deps forwarded to the default `markOnce` (model call + PII guard). Ignored if `markOnce` is overridden. */
  readonly markerDeps?: MarkerDeps
  /** Override the marker model tier (defaults to `'marker'` — never an inline id). */
  readonly modelTier?: MarkingModelTier
}

/**
 * The context the facade hands to a `markOnce` run: everything a single
 * marker+validator pass needs that does NOT vary across self-consistency runs (the
 * pack, the retrieval anchors reused across runs per doc 12 §3.2, the submission).
 */
export interface MarkOnceContext {
  /** The resolved, loaded knowledge pack (never null — resolvePack fails closed). */
  readonly pack: KnowledgePack
  /** The retrieval anchors, computed ONCE and reused across all SC runs (doc 12 §3.2). */
  readonly retrieval: RetrievalResult
  /** The submission being marked. */
  readonly submission: RawSubmission
  /** The marker model tier to call. */
  readonly modelTier: MarkingModelTier
}

// ════════════════════════════════════════════════════════════════════════════════
// §3 — RawMarkResult → MarkingResultV2 bridge (so the validator can run)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Bridge the marker's {@link RawMarkResult} into a {@link MarkingResultV2} the
 * validator consumes. This is purely a SHAPE assembly — it asserts NOTHING about
 * correctness: every evidence/error quote is still `verified: false` (the validator
 * sets `verified`), the overall is still the model's proposal (the validator
 * recomputes it in code), and `needsHumanReview` is seeded `false` (the validator
 * code-owns it). Putting the assembly here keeps the marker thin (it returns the
 * raw mark) and the validator pure (it consumes the canonical shape), with the
 * facade as the one place the two are joined — exactly the doc 10 §2.1 seam split.
 *
 * `feedback` is a deterministic, mark-derived placeholder: the canonical schema
 * requires the field, but real feedback is a SEPARATE Track C call (doc 16) a route
 * makes after this facade returns. The placeholder is computed FROM the mark so it
 * can never contradict it (it is the feedback generator's own fallback).
 */
function toMarkingResultV2(
  raw: RawMarkResult,
  decision: RoutingDecision,
  resolved: PackResolveResult,
): MarkingResultV2 {
  const base: MarkingResultV2 = {
    schemaVersion: MARKING_RESULT_SCHEMA_VERSION,
    packVersion: resolved.ref.fullId,
    module: 'ielts_writing',
    board: decision.area,
    taskType: decision.taskType,
    criteria: raw.criteria,
    // The marker always proposes a band overall; if it ever proposes a non-band
    // overall the validator's schema check (overall.kind !== 'band') catches it.
    // We carry it through unchanged so the validator can flag a malformed mark
    // rather than the bridge silently masking one.
    overall: raw.proposedOverall,
    errors: raw.errors,
    integrityFlags: raw.integrityFlags,
    validationFlags: {
      // Seeded; the validator overwrites unverifiedEvidenceCount + overallDisagreement.
      unverifiedEvidenceCount: 0,
      overallDisagreement: false,
      // selfConsistencyRun is set true by the facade when N=3 ran (see runScRun);
      // the bridge defaults it false for a single pass.
      selfConsistencyRun: false,
      selfConsistencyDiverged: false,
    },
    overallConfidence: raw.proposedConfidence,
    // Code-owned by the validator's confidence gate — seeded false here.
    needsHumanReview: false,
    feedback: { strengths: [], improvements: [], nextAction: '', summary: '' },
    ...(raw.holisticNote !== undefined ? { holisticNote: raw.holisticNote } : {}),
    ...(raw.borderlineFlags !== undefined ? { borderlineFlags: raw.borderlineFlags } : {}),
    provenance: {
      markedAt: new Date().toISOString(),
      runCount: 1,
      rubricVersionId: resolved.ref.fullId,
    },
  }
  return base
}

// ════════════════════════════════════════════════════════════════════════════════
// §4 — The default markOnce: marker → bridge → validate (with the OQ-3 retry budget)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The production `markOnce` (doc 10 §2.1 step 4–5): run the grounded marker, bridge
 * its raw output to a {@link MarkingResultV2}, and validate it. The OQ-3 SINGLE
 * retry budget is applied HERE, per mark pass: if the validator says `retry`
 * (schema-fatal or fabricated evidence) we re-run the marker ONCE; if it is still
 * invalid we return the validator's `humanReview` result (needsHumanReview = true) —
 * NEVER a guessed mark. A clean mark returns the validated `ok` result.
 *
 * WHY the retry lives in markOnce and not at the top of the facade: the OQ-3 budget
 * is per-mark, and under OQ-4 self-consistency there are up to 3 independent marks.
 * Each gets its own one retry; binding the budget to a single pass keeps the rule
 * "one re-mark per bad mark" true on both the single-run and the N=3 paths.
 *
 * A mark pass REJECTS only when the marker call itself throws (e.g. no tool_use, an
 * SDK failure) — self-consistency then drops that run as a failed sample. A mark
 * that validated to humanReview is a real (flagged) result, not a rejection.
 */
async function defaultMarkOnce(
  ctx: MarkOnceContext,
  decision: RoutingDecision,
  resolved: PackResolveResult,
  temperature: number,
  markerDeps: MarkerDeps,
): Promise<MarkingResultV2> {
  const runOnce = async (): Promise<RawMarkResult> =>
    runMarker(
      {
        pack: ctx.pack,
        retrieval: ctx.retrieval,
        submission: ctx.submission,
        modelTier: ctx.modelTier,
      },
      markerDeps,
    )
  // NOTE: the marker uses its own fixed sampling temperature (MARKER_TEMPERATURE);
  // it does not expose a per-call temperature today. `temperature` here is recorded
  // in provenance for calibration (doc 15 §8) and reserved for when the marker
  // accepts a per-run temperature; it does not change the current marker call.
  void temperature

  // First mark + validate.
  const firstRaw = await runOnce()
  const firstResult = toMarkingResultV2(firstRaw, decision, resolved)
  const firstOutcome = validate(firstResult, ctx.submission.answerText, {
    retryAlreadyHappened: false,
  })
  if (firstOutcome.kind === 'ok' || firstOutcome.kind === 'humanReview') {
    return outcomeResult(firstOutcome)
  }

  // OQ-3: the validator asked for the one retry. Re-mark ONCE, then validate with
  // retryAlreadyHappened=true so a second failure routes to human review, not a loop.
  const secondRaw = await runOnce()
  const secondResult = toMarkingResultV2(secondRaw, decision, resolved)
  const secondOutcome = validate(secondResult, ctx.submission.answerText, {
    retryAlreadyHappened: true,
  })
  // After the retry the validator returns ok | humanReview (never retry again).
  return outcomeResult(secondOutcome)
}

/** Extract the validated result from an `ok` | `humanReview` outcome (never `retry`). */
function outcomeResult(outcome: ValidationOutcome): MarkingResultV2 {
  if (outcome.kind === 'retry') {
    // Unreachable: callers only pass outcomes already narrowed to ok|humanReview.
    // Throwing here surfaces a contract breach loudly rather than masking it.
    throw new Error('outcomeResult: a retry outcome must be resolved before extraction')
  }
  return outcome.result
}

// ════════════════════════════════════════════════════════════════════════════════
// §5 — The facade entry point
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Mark a submission end-to-end (doc 10 §2.1 `markSubmission`).
 *
 * Composes: route → resolvePack → retrieve → (self-consistency over
 * mark+validate) → MarkingResultV2, then attaches the OQ-5 {@link MarkDisposition}.
 *
 *   • Returns a {@link NeedsConfirmation} (NO marking) when routing is ambiguous
 *     and `caps.allowClarify` is true (doc 10 §2.2 / Step 7).
 *   • Throws `RoutingError` for fail-closed conditions: `NO_PACK` (no published
 *     pack — never guesses), `AMBIGUOUS_SUBMISSION` (low confidence, no human),
 *     `INVALID_METADATA` (malformed pin/metadata). A route maps these to 4xx.
 *   • Otherwise returns an {@link EngineMarkResult}: the validated mark with its
 *     OQ-5 disposition. `disposition === 'show_ai_practice_feedback'` ⇔ shown-
 *     eligible; otherwise the mark routes to human review (never shown as confident).
 *
 * Feedback prose is NOT generated here — that is a separate Track C call (doc 16);
 * the returned mark carries a deterministic, mark-derived feedback placeholder.
 *
 * @param input The engine input (submission + context + caps).
 * @param deps  Injected model touch-points (offline in tests). Defaults wire the
 *              real marker + validator; the classifier defaults to the router's.
 * @returns A finished {@link EngineMarkResult} or a {@link NeedsConfirmation}.
 * @throws {RoutingError} on NO_PACK / AMBIGUOUS_SUBMISSION / INVALID_METADATA.
 */
export async function markSubmission(
  input: MarkSubmissionInput,
  deps: EngineDeps = {},
): Promise<MarkSubmissionResult> {
  // ── 1. Route. A NeedsConfirmation short-circuits — the engine does NOT mark
  //    (doc 10 §2.2 / Step 7). A RoutingError (AMBIGUOUS_SUBMISSION / INVALID_
  //    METADATA) propagates to the route adapter.
  const routed = await route(
    input,
    deps.classifier === undefined ? {} : { classifier: deps.classifier },
  )
  if (routed.status === 'needs_confirmation') {
    return routed
  }
  const decision: RoutingDecision = routed

  // ── 2. Resolve the pack. FAIL-CLOSED: a miss throws NO_PACK (doc 10 §1.2) — we
  //    never guess a rubric or mark against null. A legacy GCSE scheme has no
  //    loaded KnowledgePack; the grounded marker pipeline requires one, so a
  //    legacy resolve is surfaced as NO_PACK at this seam (the GCSE inline path is
  //    not the grounded engine's marker — doc 10 §1.2 keeps GCSE on its own route).
  const resolved = await resolvePack(toPackResolveRequest(decision))
  if (resolved.kind !== 'pack') {
    // A legacy scheme reached the grounded facade: refuse rather than mark a GCSE
    // scheme through the IELTS marker. Reuse the resolver's typed fail-closed error.
    const { RoutingError } = await import('./routing-error')
    throw new RoutingError(
      'NO_PACK',
      `The grounded marking facade requires a knowledge pack, but "${resolved.ref.fullId}" ` +
        'resolved to a legacy GCSE scheme; route GCSE through its own path (fail-closed).',
      resolved.ref.fullId,
    )
  }
  const pack: KnowledgePack = resolved.pack

  // ── 3. Retrieve (pure): descriptors + nearest-band exemplars. Computed ONCE and
  //    reused across all self-consistency runs so the anchors are identical (doc 12 §3.2).
  const retrieval = retrieve({ pack, submission: input.rawSubmission })

  // ── 4–5. Mark (with OQ-4 self-consistency) + validate (with OQ-3 retry budget).
  const modelTier: MarkingModelTier = deps.modelTier ?? 'marker'
  const ctx: MarkOnceContext = {
    pack,
    retrieval,
    submission: input.rawSubmission,
    modelTier,
  }
  const markerDeps: MarkerDeps = deps.markerDeps ?? {}

  // Bind the per-run mark pass: prefer an injected markOnce (tests), else the real
  // marker+validate pipeline. Either way it returns a validated MarkingResultV2.
  const markOnce: MarkOnceFn = (temperature, runIndex) =>
    deps.markOnce !== undefined
      ? deps.markOnce(ctx, temperature, runIndex)
      : defaultMarkOnce(ctx, decision, resolved, temperature, markerDeps)

  // OQ-4: N is chosen INSIDE runSelfConsistentMark from these two server-authoritative
  // signals (it never widens "high-stakes"). Borderline/paid-mock come from context.
  const policy = toSelfConsistencyPolicy(input)
  const sc = await runSelfConsistentMark(policy, { markOnce })

  // ── 6. Assemble the finished result. The self-consistency outcome already carries
  //    the chosen (median) run with needsHumanReview forced true on divergence and
  //    `selfConsistencyDiverged` set; stamp the run count + the SC flag for audit.
  const result = finaliseResult(sc, decision, input.rawSubmission.answerText)
  const provenance = toEngineProvenance(decision, resolved, result)
  const disposition: MarkDisposition = result.needsHumanReview
    ? 'needs_human_review'
    : 'show_ai_practice_feedback'

  return { routingDecision: decision, result, provenance, disposition }
}

// ════════════════════════════════════════════════════════════════════════════════
// §6 — Small pure mappers (decision → resolve request, context → SC policy, etc.)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Build the seam-A {@link PackResolveRequest} from a {@link RoutingDecision}. A
 * pinned/explicit decision carries an exact pack version; the resolver re-validates
 * it loads. For a classified decision the version is empty (the resolver fixes it),
 * so the request leans on (area, taskType). The packPin is forwarded ONLY when the
 * decision was pinned, so an explicit/classified route resolves by (area, taskType)
 * + the published-version gate rather than pinning to a possibly-draft version.
 */
function toPackResolveRequest(decision: RoutingDecision): PackResolveRequest {
  return {
    area: decision.area,
    taskType: decision.taskType,
    ...(decision.level !== undefined ? { level: decision.level } : {}),
    ...(decision.basis === 'pinned' && decision.packVersion !== ''
      ? { packPin: decision.packVersion }
      : {}),
  }
}

/**
 * Derive the OQ-4 self-consistency policy from the engine input. The two signals
 * are SERVER-authoritative and provided by the caller; the facade only forwards
 * them and never infers "high-stakes" itself (doc 10 OQ-4 / self-consistency §1):
 *   • isPaidMock   — a paid mock attempt (not free practice). Read from a typed
 *                    cap when present; defaults FALSE (free practice → single-run)
 *                    so the expensive N=3 path is never entered by accident.
 *   • isBorderline — an auto-detected borderline signal the caller resolves from a
 *                    prior pass; defaults FALSE.
 * These ride on `caps`/`context` via optional fields read defensively so the facade
 * compiles against today's `EngineCaps`/`EngineContext` without forking them.
 */
function toSelfConsistencyPolicy(input: MarkSubmissionInput): SelfConsistencyPolicyInput {
  const caps = input.caps as { readonly isPaidMock?: boolean; readonly isBorderline?: boolean }
  return {
    isPaidMock: caps.isPaidMock === true,
    isBorderline: caps.isBorderline === true,
  }
}

/**
 * Finalise the chosen self-consistency run into the returned {@link MarkingResultV2}.
 * The SC outcome already forced `needsHumanReview` true + `selfConsistencyDiverged`
 * on divergence and chose the median run; here we stamp the actual run count and the
 * `selfConsistencyRun` flag (true when N>1 ran) into provenance/validationFlags for
 * the audit trail, and echo the routing context onto the result.
 */
function finaliseResult(
  sc: SelfConsistencyOutcome,
  decision: RoutingDecision,
  essayText: string,
): MarkingResultV2 {
  const ran = sc.runs > 1 || !sc.singleRun
  return {
    ...sc.result,
    board: decision.area,
    taskType: decision.taskType,
    validationFlags: {
      ...sc.result.validationFlags,
      selfConsistencyRun: ran,
    },
    // Feedback PROSE is a separate Track C call (doc 16) a route makes AFTER this
    // facade returns. Until then the mark carries the feedback generator's own
    // DETERMINISTIC, mark-derived fallback (pure, no model) so the required field is
    // populated and can never contradict the mark. `essayText` is unused by the
    // deterministic builder but kept in the signature so a future inline call could
    // pass it without a signature change.
    feedback: buildDeterministicFeedback(sc.result),
    provenance: {
      ...sc.result.provenance,
      runCount: sc.runs,
    },
  }
}

/**
 * Build the engine-level {@link EngineProvenance} (doc 10 §2.1 EngineResult). The
 * facade returns provenance but does NOT persist it — a route hands it to
 * `versioning-capture` after `markSubmission` returns (doc 10 §5 R5). The model id
 * is the marker tier resolved at call time; the pack version is the resolved pack's
 * fullId (the FK back to the exact ruleset, doc 11 §2.5).
 */
function toEngineProvenance(
  decision: RoutingDecision,
  resolved: Extract<PackResolveResult, { kind: 'pack' }>,
  result: MarkingResultV2,
): EngineProvenance {
  return {
    packVersion: resolved.ref.fullId,
    ...(resolved.ref.checksum !== undefined ? { packChecksum: resolved.ref.checksum } : {}),
    ...(result.provenance.modelVersionId !== undefined
      ? { modelVersion: result.provenance.modelVersionId }
      : {}),
    ...(result.provenance.promptVersionId !== undefined
      ? { promptVersion: result.provenance.promptVersionId }
      : {}),
  }
}

/**
 * The facade as the doc-10 {@link MarkSubmissionFn}-shaped seam: returns the doc-10
 * {@link MarkSubmissionOutcome} (an {@link EngineResult} | {@link NeedsConfirmation}).
 * `markSubmission` returns the RICHER {@link EngineMarkResult} (with `disposition`),
 * which is assignable to {@link EngineResult}; this wrapper narrows it to the seam
 * contract so a contract drift fails `tsc`. A route may call either.
 */
export const markSubmissionFn = (input: MarkSubmissionInput): Promise<MarkSubmissionOutcome> =>
  markSubmission(input)
