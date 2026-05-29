// ─── Marking-Engine Model Tiering (single place to change model ids) ──────────
//
// WHY THIS FILE EXISTS
// The grounded Marking Engine talks to Claude in three distinct roles:
//   • classifier  — the cheap Router fallback that labels an ambiguous
//                   submission (area / task type / level) via a forced tool.
//   • marker      — the expensive, accuracy-critical call that actually marks
//                   the essay against the rubric via a forced tool.
//   • escalation  — the "re-mark / second opinion" call used when the first
//                   mark is borderline or contested (also reused as the offline
//                   calibration judge — doc 22 §2).
//
// WHY THESE IDS (OQ-1 → Decision A, 2026-05-29)
// The founder's decision (DECISIONS-log.md, "OQ-1 → A: use the latest the SDK
// resolves") is that the model layer uses the LATEST models the SDK resolves,
// tiered per `22-design-model-architecture.md` §2/§9: marker = latest Sonnet,
// escalation/judge = latest Opus, classifier = latest Haiku.
//
// HOW "the latest the SDK resolves" was turned into concrete ids:
//   1. The bumped SDK (`@anthropic-ai/sdk@0.100.1`) enumerates the models it
//      knows in its `Model` union
//      (node_modules/@anthropic-ai/sdk/src/resources/messages/messages.ts
//      L1200-1216), newest-first per family.
//   2. The bare family aliases `claude-{sonnet,opus,haiku}-latest` are NOT
//      callable on this account — a live probe returned HTTP 404
//      not_found_error for all three (2026-05-29). So we do NOT use them.
//   3. The newest id per family that the SDK lists AND that the production key
//      can actually call was confirmed with a live 4-token probe (2026-05-29):
//        • marker      → claude-sonnet-4-6   (latest Sonnet, callable ✓)
//        • escalation  → claude-opus-4-8     (latest Opus,   callable ✓)
//        • classifier  → claude-haiku-4-5    (latest Haiku,  callable ✓)
//      These are the "latest the SDK resolves" in the only sense that is true
//      on this account: the newest family ids the SDK exposes and the key
//      serves. They are the SINGLE swap-point — no route, marker, judge, or
//      feedback module ever names a model string inline.
//
// All calls still flow through `getAnthropicClient()` (plan DP-7) — never a
// bespoke client — so the no-training / data-minimisation posture is inherited.
//
// ── OQ-1 STATUS ───────────────────────────────────────────────────────────────
// Plan §C OQ-1 ("the confirmed, callable model id per tier") is RESOLVED for all
// three production tiers: each id above was confirmed callable on the prod key.
// Escalation is now a genuinely STRONGER model (latest Opus) than the marker
// (latest Sonnet), not merely a same-model re-run.
//
// Guard before any tier marks for learners: a model triple is still gated by the
// calibration harness / G-LIVE within-half-band floor (doc 22 §6) before it is
// exposed — confirming an id is callable is necessary, not sufficient.
//
// IF AN ID EVER STOPS RESOLVING (account loses access / id retired): repoint the
// affected constant below at the next-newest callable id of the same family, or,
// as a last resort, at `ANTHROPIC_MODEL` (the one id this codebase has always
// been able to call — src/lib/anthropic-client.ts). One-file change, re-gated.
//
// ── IELTS §1 HARD RULE ────────────────────────────────────────────────────────
// IELTS spec §1: "Never mark on Haiku." A Haiku-class model is too weak for the
// accuracy-critical marker / escalation roles. `assertNotHaiku` enforces this at
// module load so a regression (someone pointing `marker` at a Haiku id) fails
// fast, loudly, and before any learner-facing mark can be produced. The
// classifier tier is intentionally exempt (a Haiku-class model is correct for
// routing-only labelling).
// ──────────────────────────────────────────────────────────────────────────────

import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'

/**
 * Latest Sonnet id the SDK resolves AND the prod key can call (confirmed
 * 2026-05-29) — the high-volume marker / feedback tier. WHY a concrete id and
 * not `claude-sonnet-latest`: that alias 404s on this account (see header).
 */
export const MARKER_MODEL = 'claude-sonnet-4-6' as const

/**
 * Latest Opus id the SDK resolves AND the prod key can call (confirmed
 * 2026-05-29) — the strongest tier, used for escalation re-marks and the
 * offline calibration judge. Only fires on the flagged minority of scripts
 * (doc 22 §1), so its higher cost is bounded.
 */
export const ESCALATION_MODEL = 'claude-opus-4-8' as const

/**
 * Latest Haiku id the SDK resolves AND the prod key can call (confirmed
 * 2026-05-29) — the cheap routing/classifier tier ONLY. MUST NOT be used for
 * marking (IELTS §1; enforced by `assertNotHaiku`).
 */
export const CLASSIFIER_MODEL = 'claude-haiku-4-5' as const

/**
 * The three model roles the marking engine uses, each pointed at the latest
 * callable id of its family (Decision A / OQ-1). Keep this object as the ONE
 * source of truth for marking model ids — the Router, the marker, and the
 * escalation re-run all read from here, never from a hard-coded literal.
 *
 * `escalation` is now a STRONGER model (latest Opus) than `marker` (latest
 * Sonnet): escalation buys both a fresh sample AND more capability. The offline
 * calibration judge (doc 22 §2) reuses {@link ESCALATION_MODEL}.
 *
 * Note: the per-role *parameters* (extended-thinking effort, max_tokens,
 * temperature, forced `tool_choice`) described in doc 22 §3 are applied by each
 * call site, not encoded here — this object stays a pure id map so the
 * swap-point is unambiguous and the load-time Haiku guard can run over plain
 * strings.
 */
export const MARKING_MODELS = {
  /** Cheap Router classifier fallback (forced-tool submission labelling). */
  classifier: CLASSIFIER_MODEL,
  /** Accuracy-critical marker (forced-tool rubric assessment). Latest Sonnet. */
  marker: MARKER_MODEL,
  /**
   * Escalation / re-mark (and offline judge). Latest Opus — a genuinely
   * stronger model than the marker tier (OQ-1 resolved, Decision A).
   */
  escalation: ESCALATION_MODEL,
} as const

/** The role keys of {@link MARKING_MODELS}. */
export type MarkingModelTier = keyof typeof MARKING_MODELS

/**
 * Guard enforcing IELTS §1 ("Never mark on Haiku") for the accuracy-critical
 * tiers. Throws if `modelId` is empty or looks like a Haiku-class id (case-
 * insensitive substring match on `haiku`, covering ids like
 * `claude-3-5-haiku-…`, `claude-haiku-4-5`, or any future `*-haiku-*`).
 *
 * Deliberately a substring check rather than an allow-list: the set of valid
 * strong ids changes over time (the SDK family-latest ids move), but "must not
 * be Haiku" is the stable, spec-mandated invariant. Pure; no SDK calls.
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

// Reference ANTHROPIC_MODEL so the documented last-resort fallback id stays
// imported and visible here: if a family-latest id ever stops resolving on the
// account, the safe escape hatch is to repoint that tier's constant above back
// to ANTHROPIC_MODEL — the one id this codebase has always been able to call
// (src/lib/anthropic-client.ts). This is a documented escape hatch, not live
// behaviour.
void ANTHROPIC_MODEL

// ── Module-load enforcement of the "never mark on Haiku" rule ─────────────────
// Run the guard against the two accuracy-critical tiers as soon as this module
// is imported, so any misconfiguration fails fast at startup / test time rather
// than at the first learner-facing mark. The classifier tier is intentionally
// exempt (a weaker model is acceptable for routing only).
assertNotHaiku(MARKING_MODELS.marker)
assertNotHaiku(MARKING_MODELS.escalation)
