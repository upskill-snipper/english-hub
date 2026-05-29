// ─── Marking-Engine Router (doc 10 §1.1 / §2.2) ───────────────────────────────
//
// WHY THIS FILE EXISTS
// The Router is the FRONT DOOR of the grounded Marking Engine. Its single job
// (doc 10 §2.2) is to turn a raw submission + caller metadata into ONE of:
//   • a confident `RoutingDecision` (area, taskType, level?, packVersion, basis)
//   • a `NeedsConfirmation` clarify request (low confidence — ask the student)
//   • a thrown `RoutingError` (only when there is NO human in the loop and the
//     route is ambiguous, or when explicit metadata is structurally malformed).
// It then STOPS. It never loads descriptors, calls the marker, computes bands,
// or generates feedback (doc 10 §2.2 "The Router does NOT").
//
// WHY HEURISTICS-FIRST (doc 10 §5 R2 — the central cost/accuracy lever)
// A mis-classifying Router marks against the WRONG pack — strictly worse than
// today's status quo. So the Router spends NO model tokens on the common path:
//   Mode 3 (pin)      → `packPin` present  → trust it, confidence 1, basis 'pinned'.
//   Mode 1 (explicit) → enough trusted metadata to uniquely identify area+taskType
//                       (the GCSE UI passes `markSchemeId`; an IELTS caller passes
//                       `areaHint:'ielts'`+`taskTypeHint`) → trust it, confidence 1,
//                       basis 'explicit'. This reproduces today's GCSE behaviour
//                       byte-for-byte: existing callers never touch the model.
//   Mode 2 (classify) → ONLY when metadata is missing/partial: deterministic
//                       heuristics first; an LLM classifier (cheap tier) is the
//                       LAST resort, behind an injectable seam so unit tests stay
//                       offline + deterministic.
//
// WHY "ASK, NEVER SILENTLY GUESS" (doc 10 §2.2 confidence gate / spec §9)
// Below the confidence/margin thresholds the Router returns `NeedsConfirmation`
// (when `caps.allowClarify`) so the student disambiguates — their pick comes back
// as explicit metadata on the next call → mode 1 → mark. When there is no human
// (`caps.allowClarify === false`, e.g. an unattended B2B batch) it throws
// `RoutingError('AMBIGUOUS_SUBMISSION')` so the batch flags the item for a human
// rather than guessing a rubric. A wrong rubric is worse than a question.
//
// WHY "NEVER THROWS ON UNKNOWN" (task contract / doc 10 §5 R1 fail-safe)
// An UNKNOWN-but-well-formed input (e.g. an `markSchemeId` that does not resolve,
// or an unrecognised area/taskType the heuristics cannot place) is NOT a crash —
// it degrades to `NeedsConfirmation`. The Router only THROWS for the two narrow
// cases doc 10 enumerates: `AMBIGUOUS_SUBMISSION` (no human + low confidence) and
// `INVALID_METADATA` (structurally malformed input — e.g. an empty packPin string,
// a blank explicit area). Pack-existence fail-closed (`NO_PACK`) is the resolver's
// job (seam A, doc 10 §1.2), NOT the Router's.
//
// MODEL ROUTING (doc 10 §5 R4/R7)
// The classifier fallback uses `MARKING_MODELS.classifier` (the cheap Haiku tier)
// via `getAnthropicClient()` — NEVER a bespoke client and NEVER an inline model
// string. The live call is wrapped in an injectable `SubmissionClassifier` so the
// router core is pure + testable; the default implementation is the only place
// the SDK is touched, and it is exercised by integration tests, not unit tests.
// ──────────────────────────────────────────────────────────────────────────────

import { getMarkScheme } from '../mark-schemes'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { MARKING_MODELS } from './models'
import { RoutingError } from './routing-error'
import type {
  Area,
  Level,
  RawSubmission,
  RouterResult,
  RoutingCandidate,
  RoutingDecision,
  NeedsConfirmation,
  RoutingBasis,
  MarkSubmissionInput,
  RouteFn,
} from './types'

// ════════════════════════════════════════════════════════════════════════════════
// §1 — Tunable thresholds (doc 10 §2.2 / §4 Step 4–5: "thresholds in one place")
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Confidence gate constants (doc 10 §2.2). Kept HERE as named constants rather
 * than scattered literals so they are tunable against the calibration set (arch
 * §8) from one place. A candidate routes directly ONLY when its confidence clears
 * {@link ROUTE_CONFIRM_THRESHOLD} AND it beats the runner-up by at least
 * {@link ROUTE_MARGIN_THRESHOLD}; otherwise the Router asks (or, for unattended
 * callers, errors).
 */
export const ROUTER_THRESHOLDS = {
  /** Minimum top-candidate confidence to route without asking the student. */
  confirmThreshold: 0.75,
  /** Minimum confidence lead over the runner-up to route without asking. */
  marginThreshold: 0.15,
  /** How many candidates to surface in a `NeedsConfirmation` (doc 10 §2.2 top-N). */
  maxCandidates: 3,
} as const

// ════════════════════════════════════════════════════════════════════════════════
// §2 — RoutingError (the concrete throwable implementing the seam shape)
// ════════════════════════════════════════════════════════════════════════════════

// The concrete `RoutingError` class now lives in the dependency-free
// `./routing-error` module so the fail-closed pack resolver (`resolve-pack.ts`)
// and its OFFLINE unit tests can throw it WITHOUT inheriting this module's
// `server-only` Anthropic-SDK dependency (the default classifier calls
// `getAnthropicClient`). It is re-exported here so this module's public API — and
// the existing `import { RoutingError } from '@/lib/marking/engine/router'` in the
// router unit tests — stays byte-identical.
export { RoutingError } from './routing-error'

// ════════════════════════════════════════════════════════════════════════════════
// §3 — Classifier seam (injectable so unit tests are offline + deterministic)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * The cheap, LAST-resort classifier the Router calls ONLY when deterministic
 * heuristics cannot place an ambiguous submission (doc 10 §2.2 mode 2b). It
 * returns ranked candidates; the Router applies the confidence gate.
 *
 * WHY INJECTABLE: the default implementation calls the model (cost + non-
 * determinism). Making it a parameter lets the unit tests pass a pure stub so
 * they assert routing logic without a live call (doc 10 Step 5 acceptance:
 * "The LLM fallback is mocked; no live call in unit tests").
 */
export type SubmissionClassifier = (
  submission: RawSubmission,
) => Promise<readonly RoutingCandidate[]>

/**
 * Options for {@link route}. `classifier` overrides the default (model-backed)
 * classifier — supplied as `null` to DISABLE the fallback entirely (heuristics
 * only), or as a stub in tests.
 */
export interface RouteOptions {
  /**
   * Classifier used for the ambiguous fallback. `undefined` ⇒ the default
   * model-backed classifier; an explicit function ⇒ that function;
   * `null` ⇒ no classifier (heuristics-only — every ambiguous case clarifies).
   */
  readonly classifier?: SubmissionClassifier | null
}

// ════════════════════════════════════════════════════════════════════════════════
// §4 — Explicit / pinned mode helpers (heuristics-first, NO model cost)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Build the persisted pack-version token for an explicitly-routed GCSE scheme.
 * Reconciles with the existing registry: the legacy `MarkScheme` carries an `id`
 * and an optional free-text `version` (mark-schemes/types.ts). We synthesise a
 * stable `pack_version` of the form `<schemeId>@<version|'live'>` so provenance
 * (doc 11 §2.5) can record exactly which ruleset marked the script, without
 * forking the legacy id space.
 */
function gcsePackVersion(schemeId: string, schemeVersion: string | undefined): string {
  return `${schemeId}@${schemeVersion ?? 'live'}`
}

/**
 * The IELTS pack ref the spec/seam settle on (types.ts §5 examples: packId
 * `ielts_writing_task2_academic`, persisted `pack_version` `ielts_writing_v2025.1`).
 * The Router only points AT this version; the resolver (seam A) fails closed with
 * NO_PACK until the IELTS pack actually ships (doc 10 §4 Step 3/9). Centralised
 * here so the IELTS area "plugs in" by metadata, not by editing core logic.
 */
const IELTS_WRITING_TASK2_PACK_VERSION = 'ielts_writing_v2025.1'

/** Recognised IELTS Writing Task 2 task-type spellings the caller may send. */
const IELTS_TASK2_ALIASES: ReadonlySet<string> = new Set([
  'ielts_writing_task2',
  'ielts writing task 2',
  'writing_task2',
  'task2',
  'task 2',
])

/** Normalise a free-text task type for tolerant matching (case/space-insensitive). */
function normaliseTaskType(taskType: string): string {
  return taskType.trim().toLowerCase()
}

/**
 * Mode 3 — pin override (doc 10 §2.2). A `packPin` bypasses version resolution.
 * A blank/whitespace pin is structurally invalid (the caller asked to pin to
 * "nothing") → INVALID_METADATA. Otherwise the decision points straight at the
 * pinned version; the resolver still validates the pin loads (seam A).
 */
function tryPinned(submission: RawSubmission): RoutingDecision | null {
  if (submission.packPin === undefined) return null
  const pin = submission.packPin.trim()
  if (pin === '') {
    throw new RoutingError(
      'INVALID_METADATA',
      'packPin was supplied but is empty/blank; supply a real pack version or omit it.',
      submission.packPin,
    )
  }
  return {
    status: 'routed',
    // The pinned area/taskType are best-effort from any hints the caller also
    // sent; the pin itself is authoritative for the pack version.
    area: submission.areaHint ?? inferAreaFromPin(pin),
    taskType: submission.taskTypeHint ?? '',
    level: submission.levelHint,
    packVersion: pin,
    confidence: 1,
    basis: 'pinned',
  }
}

/** Best-effort area inference from a pin token's prefix (IELTS pins begin `ielts_`). */
function inferAreaFromPin(pin: string): Area {
  if (pin.toLowerCase().startsWith('ielts')) return 'ielts'
  if (pin.toLowerCase().startsWith('eal') || pin.toLowerCase().startsWith('cefr')) return 'eal'
  // GCSE legacy pins are `<schemeId>@<version>`; the prefix is the scheme id.
  return 'gcse'
}

/**
 * Mode 1 — explicit GCSE (doc 10 §2.2). The GCSE UI/B2B row supplies a
 * `markSchemeId` (+ optional `questionId`). We RECONCILE it with the existing
 * registry via `getMarkScheme` (the single live lookup, doc 10 §1.2):
 *   • resolves → confident explicit decision, packVersion from the scheme.
 *   • does NOT resolve → return null so the caller degrades to clarify (NOT a
 *     throw: an unknown-but-well-formed id is "ask", per the fail-safe contract;
 *     the hard NO_PACK fail-closed is the resolver's concern, doc 10 §1.2/§4 R1).
 */
function tryExplicitGcse(submission: RawSubmission): RoutingDecision | null {
  const id = submission.markSchemeId?.trim()
  if (!id) return null
  const scheme = getMarkScheme(id)
  if (!scheme) return null // unknown id ⇒ caller will clarify, not crash
  // Prefer the caller's explicit question type when it names a real question on
  // the scheme; else fall back to the scheme's first question type as the
  // taskType label (the resolver re-selects the exact question by id later).
  const question =
    submission.questionId !== undefined
      ? scheme.questions.find((q) => q.id === submission.questionId)
      : undefined
  const taskType =
    question?.questionType ?? submission.taskTypeHint ?? scheme.questions[0]?.questionType ?? ''
  return {
    status: 'routed',
    area: 'gcse',
    taskType,
    level: submission.levelHint,
    packVersion: gcsePackVersion(scheme.id, scheme.version),
    confidence: 1,
    basis: 'explicit',
  }
}

/**
 * Mode 1 — explicit IELTS (doc 10 §2.2, §2.3 "an area plugs in via metadata").
 * When the caller asserts `areaHint:'ielts'` AND names a Task-2 task type, the
 * Router trusts it and points at the IELTS Writing Task 2 pack version. No model
 * call. The resolver fails closed (NO_PACK) until the pack ships (doc 10 §4 Step 9).
 */
function tryExplicitIelts(submission: RawSubmission): RoutingDecision | null {
  if (submission.areaHint !== 'ielts') return null
  const tt = submission.taskTypeHint
  if (tt === undefined) return null
  if (!IELTS_TASK2_ALIASES.has(normaliseTaskType(tt))) return null
  return {
    status: 'routed',
    area: 'ielts',
    taskType: 'IELTS_Writing_Task2',
    level: submission.levelHint ?? ieltsBandLevel(submission.levelHint),
    packVersion: IELTS_WRITING_TASK2_PACK_VERSION,
    confidence: 1,
    basis: 'explicit',
  }
}

/** Coerce a caller level hint onto the IELTS band scale label (soft; doc 10 §6 R7). */
function ieltsBandLevel(level: Level | undefined): Level | undefined {
  if (level === undefined) return undefined
  return { area: 'ielts', value: level.value, scaleHint: level.scaleHint ?? 'ielts_band' }
}

// ════════════════════════════════════════════════════════════════════════════════
// §5 — Confidence gate (doc 10 §2.2): candidates → decision | clarify | error
// ════════════════════════════════════════════════════════════════════════════════

/** A human-readable label for the confirm UI when a candidate has none. */
function labelFor(c: RoutingCandidate): string {
  return c.label && c.label.trim() !== '' ? c.label : `${c.area} — ${c.taskType}`
}

/**
 * Apply the confidence gate to ranked candidates (doc 10 §2.2):
 *   • top confidence ≥ confirmThreshold AND margin ≥ marginThreshold ⇒ route
 *     (basis 'classified', packVersion left to the resolver to fix).
 *   • otherwise, with a human in the loop ⇒ NeedsConfirmation (top-N).
 *   • otherwise, no human (allowClarify=false) ⇒ throw AMBIGUOUS_SUBMISSION.
 *
 * `packVersionFor` maps a routed classified candidate to its pack version; for
 * the classified path the Router does not itself resolve versions (the resolver
 * does), so it emits the candidate's area/taskType and an EMPTY packVersion the
 * façade replaces after `resolvePack` (doc 10 §2.1 step 2). Returning empty here
 * is intentional and documented, NOT a bug.
 */
function applyGate(candidates: readonly RoutingCandidate[], allowClarify: boolean): RouterResult {
  if (candidates.length === 0) {
    // No candidate at all: cannot guess. Ask if we can, else error for batches.
    if (allowClarify) {
      return clarify([], 'Could not determine the exam area or task type from the submission.')
    }
    throw new RoutingError(
      'AMBIGUOUS_SUBMISSION',
      'No routing candidate could be produced and no human is available to confirm.',
    )
  }
  const ranked = [...candidates].sort((a, b) => b.confidence - a.confidence)
  const top = ranked[0]!
  const runnerUp = ranked[1]
  const margin = runnerUp ? top.confidence - runnerUp.confidence : top.confidence
  const confident =
    top.confidence >= ROUTER_THRESHOLDS.confirmThreshold &&
    margin >= ROUTER_THRESHOLDS.marginThreshold
  if (confident) {
    return {
      status: 'routed',
      area: top.area,
      taskType: top.taskType,
      level: top.level,
      packVersion: '', // resolver fixes the version for the classified path
      confidence: top.confidence,
      basis: 'classified' satisfies RoutingBasis,
    }
  }
  if (allowClarify) {
    return clarify(
      ranked.slice(0, ROUTER_THRESHOLDS.maxCandidates),
      'The submission could match more than one exam/task; please confirm which is correct.',
    )
  }
  throw new RoutingError(
    'AMBIGUOUS_SUBMISSION',
    `Routing confidence ${top.confidence.toFixed(2)} below threshold ` +
      `${ROUTER_THRESHOLDS.confirmThreshold} (margin ${margin.toFixed(2)}) and no human is ` +
      'available to confirm; flag for manual review rather than marking against a guessed pack.',
  )
}

/** Construct a NeedsConfirmation with safe labels on every candidate. */
function clarify(candidates: readonly RoutingCandidate[], reason: string): NeedsConfirmation {
  return {
    status: 'needs_confirmation',
    candidates: candidates.map((c) => ({ ...c, label: labelFor(c) })),
    reason,
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// §6 — Default model-backed classifier (the ONLY place the SDK is touched)
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Default classifier: a cheap forced-tool call on `MARKING_MODELS.classifier`
 * (doc 10 §2.2 mode 2b, §5 R4/R7) via the shared `getAnthropicClient()`. Kept
 * deliberately thin and isolated so unit tests inject a stub instead. Any failure
 * (SDK error, malformed tool output) degrades to ZERO candidates → the gate then
 * clarifies (or errors for batches) — the Router never crashes on a flaky model.
 *
 * NOTE: this is exercised by integration tests, not the offline unit suite. The
 * exact tool schema is owned by doc 10 Step 5 / the classify module; this default
 * is the minimal honest wiring proving the cheap tier + shared client are used.
 */
export const defaultSubmissionClassifier: SubmissionClassifier = async (submission) => {
  try {
    const client = getAnthropicClient()
    const response = await client.messages.create({
      model: MARKING_MODELS.classifier,
      max_tokens: 512,
      tools: [
        {
          name: 'classify_submission',
          description:
            'Rank the exam area + task type this student submission targets, each with a ' +
            'calibrated confidence in [0,1].',
          input_schema: {
            type: 'object',
            properties: {
              candidates: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    area: { type: 'string' },
                    taskType: { type: 'string' },
                    confidence: { type: 'number' },
                    label: { type: 'string' },
                  },
                  required: ['area', 'taskType', 'confidence'],
                },
              },
            },
            required: ['candidates'],
          },
        },
      ],
      tool_choice: { type: 'tool', name: 'classify_submission' },
      messages: [
        {
          role: 'user',
          content:
            `QUESTION:\n${submission.questionText}\n\nANSWER:\n${submission.answerText}`.slice(
              0,
              8000,
            ),
        },
      ],
    })
    const toolUse = response.content.find((b) => b.type === 'tool_use')
    if (!toolUse || toolUse.type !== 'tool_use') return []
    const input = toolUse.input as { candidates?: unknown }
    if (!Array.isArray(input.candidates)) return []
    return input.candidates
      .filter(
        (c): c is { area: string; taskType: string; confidence: number; label?: string } =>
          typeof c === 'object' &&
          c !== null &&
          typeof (c as { area?: unknown }).area === 'string' &&
          typeof (c as { taskType?: unknown }).taskType === 'string' &&
          typeof (c as { confidence?: unknown }).confidence === 'number',
      )
      .map((c) => ({
        area: c.area,
        taskType: c.taskType,
        confidence: Math.max(0, Math.min(1, c.confidence)),
        label: c.label ?? `${c.area} — ${c.taskType}`,
      }))
  } catch {
    // A model/SDK failure must not crash routing: no candidates ⇒ the gate
    // clarifies (or errors for unattended batches) — fail safe, never guess.
    return []
  }
}

// ════════════════════════════════════════════════════════════════════════════════
// §7 — The Router entry point (doc 10 §2.2): the only export the façade wires in
// ════════════════════════════════════════════════════════════════════════════════

/**
 * Route a submission to a pack decision (doc 10 §2.2). Heuristics-first:
 *   1. `packPin`            ⇒ basis 'pinned',  confidence 1 (no model call).
 *   2. explicit GCSE id     ⇒ basis 'explicit', confidence 1 (reconciled with
 *                             `getMarkScheme`; unknown id ⇒ clarify, not throw).
 *   3. explicit IELTS hints ⇒ basis 'explicit', confidence 1 (no model call).
 *   4. otherwise            ⇒ deterministic-then-classifier mode 2, gated by
 *                             confidence ⇒ route | clarify | AMBIGUOUS_SUBMISSION.
 *
 * NEVER throws on an UNKNOWN-but-well-formed input — it degrades to
 * `NeedsConfirmation`. Throws ONLY `INVALID_METADATA` (malformed input) or
 * `AMBIGUOUS_SUBMISSION` (no human + low confidence). Pack EXISTENCE (NO_PACK)
 * is the resolver's fail-closed concern, not the Router's.
 *
 * @param input The façade input (submission + context + caps).
 * @param options Optional injected classifier (tests pass a stub; `null` disables).
 * @returns A `RoutingDecision` or a `NeedsConfirmation`.
 * @throws {RoutingError} `'INVALID_METADATA'` | `'AMBIGUOUS_SUBMISSION'` only.
 */
export async function route(
  input: MarkSubmissionInput,
  options: RouteOptions = {},
): Promise<RouterResult> {
  const { rawSubmission, caps } = input

  // ── Mode 3: pin override (highest priority; doc 10 §2.2). ──────────────────
  const pinned = tryPinned(rawSubmission)
  if (pinned) return pinned

  // ── Mode 1: explicit metadata short-circuits (no model cost). ──────────────
  const explicit = tryExplicitGcse(rawSubmission) ?? tryExplicitIelts(rawSubmission)
  if (explicit) return explicit

  // ── Mode 2: ambiguous ⇒ classify (deterministic-first, model last resort). ─
  // The deterministic heuristic layer (word-count/structure/question-text match,
  // CEFR/IELTS level reuse — doc 10 §4 Step 5) is owned by the classify module;
  // here the Router consumes ranked candidates and applies the gate. The default
  // classifier is the cheap model tier; tests inject a pure stub; `null` disables.
  const classifier =
    options.classifier === undefined ? defaultSubmissionClassifier : options.classifier

  const candidates = classifier ? await classifier(rawSubmission) : []
  return applyGate(candidates, caps.allowClarify)
}

/**
 * The Router as the seam contract type (doc 10 §2.2 `RouteFn`). The façade wires
 * THIS in. It uses the default classifier; call {@link route} directly to inject
 * a stub. A type-level assignment so a contract drift fails `tsc`, not at runtime.
 */
export const routeFn: RouteFn = (input) => route(input)
