// ─── Marking-Engine Model Tiering (single place to change model ids) ──────────
//
// WHY THIS FILE EXISTS
// The grounded Marking Engine talks to Claude in three distinct roles:
//   • classifier  — the cheap Router fallback that labels an ambiguous
//                   submission (area / task type / level) via a forced tool.
//   • marker      — the expensive, accuracy-critical call that actually marks
//                   the essay against the rubric via a forced tool.
//   • escalation  — the "re-mark / second opinion" call used when the first
//                   mark is borderline or contested.
//
// The component specs (docs 13/14/20) *aspirationally* name stronger ids
// (`claude-sonnet-4-6`, `claude-opus-4-8`) and an `effort` field. NONE of those
// are confirmed callable against the deployed account / installed SDK
// (`@anthropic-ai/sdk@0.90.0`). The ONLY id this codebase has ever successfully
// called is `ANTHROPIC_MODEL` (`claude-sonnet-4-20250514`) — see
// `src/lib/anthropic-client.ts`. Hard-coding an unconfirmed id here would make
// every marker step fail closed at runtime with an opaque model error.
//
// Therefore this module deliberately defaults ALL THREE tiers to the one
// confirmed id, and is the SINGLE place to change when a stronger callable id
// is confirmed by the founder (plan P0.1). No SDK calls happen here — these are
// pure constants plus a load-time guard.
//
// ── OQ-1 (OPEN QUESTION — read before changing a model id) ────────────────────
// Plan §C OQ-1: "What is the confirmed, callable escalation model id?"
//
//   Status: UNRESOLVED. Until the founder confirms a stronger callable id
//   (and that the SDK accepts it, ideally with `tool_choice`-forced tool use),
//   an "escalation re-mark" is a SAME-MODEL RE-RUN — we call `escalation`,
//   which is intentionally identical to `marker`, again (typically at a
//   different temperature / with self-consistency, handled by the caller, NOT
//   here). This is the honest behaviour: escalation buys a fresh sample, not a
//   bigger model, until OQ-1 is closed.
//
//   THIS FILE IS THE ONE PLACE TO CHANGE WHEN OQ-1 IS RESOLVED. When a
//   stronger id is confirmed:
//     1. Import / add the new id (still route every call through
//        `getAnthropicClient()` so the no-training/minimisation posture is
//        inherited — never construct a bespoke client).
//     2. Point `escalation` (and optionally `marker`) at it.
//     3. Do NOT add an `effort` field unless the SDK/account confirm one.
//     4. The `assertNotHaiku` guard below still applies to marker + escalation.
//
// ── IELTS §1 HARD RULE ────────────────────────────────────────────────────────
// IELTS spec §1: "Never mark on Haiku." A Haiku-class model is too weak for the
// accuracy-critical marker / escalation roles. `assertNotHaiku` enforces this at
// module load so a regression (someone pointing `marker` at a Haiku id) fails
// fast, loudly, and before any learner-facing mark can be produced.
// ──────────────────────────────────────────────────────────────────────────────

import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'

/**
 * The three model roles the marking engine uses. ALL default to the single
 * confirmed callable id (`ANTHROPIC_MODEL`). Keep this object as the ONE source
 * of truth for marking model ids — the Router, the marker, and the escalation
 * re-run all read from here, never from a hard-coded literal.
 *
 * `escalation` is intentionally identical to `marker` until OQ-1 is resolved
 * (see the file header): escalation today means a same-model re-run, not a
 * stronger model.
 */
export const MARKING_MODELS = {
  /** Cheap Router classifier fallback (forced-tool submission labelling). */
  classifier: ANTHROPIC_MODEL,
  /** Accuracy-critical marker (forced-tool rubric assessment). */
  marker: ANTHROPIC_MODEL,
  /**
   * Escalation / re-mark. Same-model re-run until a stronger callable id is
   * confirmed (OQ-1). This is the field to repoint when OQ-1 closes.
   */
  escalation: ANTHROPIC_MODEL,
} as const

/** The role keys of {@link MARKING_MODELS}. */
export type MarkingModelTier = keyof typeof MARKING_MODELS

/**
 * Guard enforcing IELTS §1 ("Never mark on Haiku") for the accuracy-critical
 * tiers. Throws if `modelId` is empty or looks like a Haiku-class id (case-
 * insensitive substring match on `haiku`, covering ids like
 * `claude-3-5-haiku-…` or any future `*-haiku-*`).
 *
 * Deliberately a substring check rather than an allow-list: the set of valid
 * strong ids changes over time (OQ-1), but "must not be Haiku" is the stable,
 * spec-mandated invariant. Pure; no SDK calls.
 *
 * @param modelId The model id assigned to a marker/escalation tier.
 * @throws {Error} if the id is empty/blank or contains `haiku`.
 */
export function assertNotHaiku(modelId: string): void {
  if (typeof modelId !== 'string' || modelId.trim() === '') {
    throw new Error('assertNotHaiku: marking model id must be a non-empty callable string')
  }
  if (modelId.toLowerCase().includes('haiku')) {
    throw new Error(
      `assertNotHaiku: refusing to mark on a Haiku-class model id "${modelId}" ` +
        '(IELTS §1: never mark on Haiku). Point MARKING_MODELS.marker/.escalation ' +
        'at a stronger callable id in src/lib/marking/engine/models.ts.',
    )
  }
}

// ── Module-load enforcement of the "never mark on Haiku" rule ─────────────────
// Run the guard against the two accuracy-critical tiers as soon as this module
// is imported, so any misconfiguration fails fast at startup / test time rather
// than at the first learner-facing mark. The classifier tier is intentionally
// exempt (a weaker model is acceptable for routing only).
assertNotHaiku(MARKING_MODELS.marker)
assertNotHaiku(MARKING_MODELS.escalation)
