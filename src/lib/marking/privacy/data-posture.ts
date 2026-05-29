// ─── Marking Data Posture (DP-2 single typed posture + DP-5 retention) ────────
//
// WHY THIS FILE EXISTS (read before editing or before writing ANY privacy copy)
//
// Doc 19 (`business-docs/architecture/marking-engine/19-design-data-protection.md`)
// §0 states the one rule that governs the whole data-protection layer:
//
//     "Every data-protection claim in the product UI, the DPIA, the
//      subprocessor register, and the marketing copy MUST match the real,
//      partly-pending posture encoded in code as the single source of truth:
//      ANTHROPIC_DATA_POLICY and isZeroRetentionConfigured()."
//
// The highest-rated risk in doc 19 §5 is CLAIM DRIFT: a marking-UI component
// rendering "we never train on your work" / "instantly deleted" / "zero
// retention" while the written confirmations are NOT in hand
// (`isZeroRetentionConfigured() === false` today). That is a Children's-Code
// and consumer-protection exposure.
//
// This module makes the wrong claim STRUCTURALLY IMPOSSIBLE for the marking
// path. It does NOT restate the posture - it DERIVES every claim from the real
// state in `@/lib/anthropic-client` (`ANTHROPIC_DATA_POLICY` +
// `isZeroRetentionConfigured()`). Nothing here is hand-asserted; if the source
// flags change, the claimable surface changes with them, automatically.
//
//   ╔══════════════════════════════════════════════════════════════════════╗
//   ║  ANY marking-UI privacy copy MUST render from `MARKING_PRIVACY_CLAIMS` ║
//   ║  / `describeDataPosture()` here. It must NEVER hardcode "never train", ║
//   ║  "deleted immediately", "zero retention" or similar strings inline.    ║
//   ╚══════════════════════════════════════════════════════════════════════╝
//
// The three-tier model (doc 19 §0):
//   • ENFORCED IN CODE   → may be claimed present-tense       (claimableInUI: true)
//   • CONTRACTUAL        → may be claimed as "under our agreement with our AI
//                          provider", NOT "the system is configured to…"
//                          (claimableInUI: true, but worded as agreement)
//   • PENDING (residual) → written confirmation not yet in hand; flags
//                          hard-coded false → MUST NOT be claimed
//                          (claimableInUI: false)
//
// Critically: `no_training` and `zero_retention` are NOT settled. They are
// modelled as `{ status: 'contractual_pending' | 'confirmed', claimableInUI }`
// and resolve to `contractual_pending` (claimableInUI: false) until
// `isZeroRetentionConfigured()` returns true. They can only ever become
// `confirmed` (claimableInUI: true) by the source flags flipping in
// anthropic-client.ts - a CONTRACTUAL act for counsel, never a code edit here.
//
// RETENTION (DP-5): doc 19 §1.4 records that retention/deletion diverges across
// the two marking paths and that the Supabase (at-rest) and Anthropic
// (processor) DPAs are both PENDING/unconfirmed; §4 Step 4 requires
// "documented retention windows per data class" but supplies NO numeric figures
// and the codebase has no agreed retention schedule to source. Per the build
// rule "flag any figure not yet decided as TODO, do not invent", every numeric
// window below is `windowDays: null` with an explicit `todo`. Do not paper over
// an undecided window with a guessed number.
// ─────────────────────────────────────────────────────────────────────────────

import { ANTHROPIC_DATA_POLICY, isZeroRetentionConfigured } from '@/lib/anthropic-client'

// ── DP-2: typed posture model ────────────────────────────────────────────────

/**
 * Which tier of guarantee a claim belongs to (doc 19 §0). This decides HOW a
 * claim may be worded in UI, not merely whether it may appear.
 */
export type PostureTier =
  /** Mechanically guaranteed by THIS codebase on every call. Present tense OK. */
  | 'enforced_in_code'
  /** Guaranteed by the Anthropic commercial contract / DPA, not a request flag. */
  | 'contractual'
  /** Written confirmation not yet in hand; flag is false. NOT claimable. */
  | 'pending'

/**
 * Settlement state for the two contractual-but-pending claims (`no_training`,
 * `zero_retention`). Deliberately NOT a plain boolean: a claim is structurally
 * not-assertable as settled until the source confirmation flips.
 *
 *   • `contractual_pending` — the contract supports it, but the written
 *     confirmation is NOT yet obtained → `claimableInUI` is false.
 *   • `confirmed` — `isZeroRetentionConfigured()` is true (DPA counter-signed +
 *     written ZDR + written no-training) → `claimableInUI` is true.
 */
export interface ContractualClaimStatus {
  status: 'contractual_pending' | 'confirmed'
  /** True ONLY when the claim may be shown to a user right now. */
  claimableInUI: boolean
}

/** A single, classified data-protection claim derived from the real state. */
export interface PostureClaim {
  /** Stable machine key (matches doc 19 §2 Step 2). */
  key: PostureClaimKey
  /** Which guarantee tier this claim sits in. */
  tier: PostureTier
  /**
   * Settlement state. Present for the two contractual-but-pending claims
   * (`no_training`, `zero_retention`); `null` for claims whose tier alone
   * decides claimability (enforced-in-code claims are always claimable;
   * the contractual region claim is always claimable but agreement-worded).
   */
  contractual: ContractualClaimStatus | null
  /** Whether this exact claim may be rendered in marking UI right now. */
  claimableInUI: boolean
  /** The UI-safe string to show IF (and only if) `claimableInUI` is true. */
  text: string
}

/** The fixed set of marking-path data-protection claims (doc 19 §2 Step 2). */
export type PostureClaimKey =
  | 'no_pii_to_model'
  | 'human_review_for_minors'
  | 'eu_uk_at_rest'
  | 'no_training'
  | 'zero_retention'

/**
 * Derive the contractual-claim settlement state from the REAL source flags.
 * A contractual-but-pending claim is `confirmed` (and only then claimable)
 * exactly when `isZeroRetentionConfigured()` returns true - i.e. when the DPA
 * is counter-signed AND the written ZDR + no-training confirmations are in
 * hand. Until then it is `contractual_pending` and MUST NOT be claimed.
 */
function deriveContractualStatus(): ContractualClaimStatus {
  const confirmed = isZeroRetentionConfigured()
  return {
    status: confirmed ? 'confirmed' : 'contractual_pending',
    claimableInUI: confirmed,
  }
}

/**
 * THE single typed data-posture object for the marking path (DP-2).
 *
 * Every field is DERIVED from `@/lib/anthropic-client` - it never re-asserts a
 * posture. `noTraining` and `zeroRetention` are structurally not-assertable as
 * settled until `isZeroRetentionConfigured()` is true (see
 * `ContractualClaimStatus`). Read this object; do not duplicate its reasoning.
 */
export const MARKING_DATA_POSTURE = {
  /** Provider + endpoint, straight from the canonical policy. */
  provider: ANTHROPIC_DATA_POLICY.provider,
  api: ANTHROPIC_DATA_POLICY.api,
  /** US processing region for the model call (contractual transfer control). */
  modelProcessingRegion: ANTHROPIC_DATA_POLICY.contractual.processingRegion,
  transferMechanism: ANTHROPIC_DATA_POLICY.contractual.transferMechanism,

  /**
   * ENFORCED IN CODE - present-tense claimable. PII never reaches the model:
   * the marking prompt types carry only essay/question/board-year and no
   * identifier field (doc 19 §1.1). This is a property of the codebase, not the
   * contract, so it is always claimable.
   */
  noPiiToModel: {
    tier: 'enforced_in_code' as const,
    claimableInUI: true,
  },

  /**
   * ENFORCED IN CODE - present-tense claimable. The marking gate chain runs
   * minor consent + AI opt-out checks before any model call and AI output for
   * minors is treated as draft requiring human oversight (doc 19 §1.5).
   */
  humanReviewForMinors: {
    tier: 'enforced_in_code' as const,
    claimableInUI: true,
  },

  /**
   * CONTRACTUAL - always claimable but must be agreement-worded. Learner essay
   * text persisted via the marking spine is stored in the EU/UK at rest
   * (`subprocessors.ts` Supabase entry). The model processing region itself is
   * US (above); this claim is about the at-rest store only.
   */
  euUkAtRest: {
    tier: 'contractual' as const,
    claimableInUI: true,
  },

  /**
   * CONTRACTUAL but PENDING. Anthropic's commercial terms say API
   * inputs/outputs are not trained on, but the written no-training confirmation
   * for the child-data path is not in hand. Structurally not-assertable as
   * settled until `isZeroRetentionConfigured()` is true.
   */
  noTraining: deriveContractualStatus(),

  /**
   * CONTRACTUAL but PENDING. Zero / limited retention is available
   * contractually on request, but the written ZDR confirmation is not in hand
   * (and the SDK exposes no retention switch - it is never a runtime/endpoint
   * state in this codebase). Structurally not-assertable as settled until
   * `isZeroRetentionConfigured()` is true.
   */
  zeroRetention: deriveContractualStatus(),
} as const

// ── DP-2: UI-safe claim strings (the ONLY strings any marking UI may use) ─────

/**
 * Build the classified claim list. Each entry's `claimableInUI` is the GATE the
 * UI must respect; `text` is the exact string to render IF that gate is true.
 *
 * The two contractual-but-pending claims (`no_training`, `zero_retention`)
 * intentionally carry a present-tense `text` that is ONLY emitted by
 * `describeDataPosture()` when claimable, so the present-tense form can never
 * leak while the flags are pending.
 */
function buildClaims(): readonly PostureClaim[] {
  const noTraining = MARKING_DATA_POSTURE.noTraining
  const zeroRetention = MARKING_DATA_POSTURE.zeroRetention
  return [
    {
      key: 'no_pii_to_model',
      tier: 'enforced_in_code',
      contractual: null,
      claimableInUI: MARKING_DATA_POSTURE.noPiiToModel.claimableInUI,
      text: 'Your name, email, date of birth and school are never sent to our AI provider - only your essay, the question and the exam board and year.',
    },
    {
      key: 'human_review_for_minors',
      tier: 'enforced_in_code',
      contractual: null,
      claimableInUI: MARKING_DATA_POSTURE.humanReviewForMinors.claimableInUI,
      text: 'For under-18s, AI marking requires parental consent, respects your AI opt-out, and is provided as draft feedback for human oversight - it is not a final, unreviewed decision.',
    },
    {
      key: 'eu_uk_at_rest',
      tier: 'contractual',
      contractual: null,
      claimableInUI: MARKING_DATA_POSTURE.euUkAtRest.claimableInUI,
      text: 'Where your essay is stored, it is held at rest in the EU/UK under our data-processing agreement with our storage provider.',
    },
    {
      key: 'no_training',
      tier: noTraining.status === 'confirmed' ? 'contractual' : 'pending',
      contractual: noTraining,
      claimableInUI: noTraining.claimableInUI,
      // Present-tense form - emitted ONLY when confirmed (see describeDataPosture).
      text: 'Under our agreement with our AI provider, your work is not used to train AI models.',
    },
    {
      key: 'zero_retention',
      tier: zeroRetention.status === 'confirmed' ? 'contractual' : 'pending',
      contractual: zeroRetention,
      claimableInUI: zeroRetention.claimableInUI,
      // Present-tense form - emitted ONLY when confirmed (see describeDataPosture).
      text: 'Under our agreement with our AI provider, your essay is not retained by the AI provider after marking.',
    },
  ]
}

/**
 * MARKING_PRIVACY_CLAIMS - the exact, UI-safe claim set for the marking path,
 * keyed by claim. This is the ONLY source a marking-UI privacy component may
 * import for these strings. Each entry exposes `claimableInUI`; the UI MUST NOT
 * render an entry whose `claimableInUI` is false.
 *
 * NOTE: this map contains the present-tense `text` for pending claims too, so
 * that a single map serves both "what could be claimed" tooling and the live UI
 * - but live UI should call `describeDataPosture()`, which returns ONLY the
 * currently-claimable strings, to be safe by default.
 */
export const MARKING_PRIVACY_CLAIMS: Readonly<Record<PostureClaimKey, PostureClaim>> =
  Object.freeze(
    buildClaims().reduce(
      (acc, claim) => {
        acc[claim.key] = claim
        return acc
      },
      {} as Record<PostureClaimKey, PostureClaim>,
    ),
  )

/**
 * Return ONLY the privacy strings that may be shown to a user right now.
 *
 * This is the safe-by-default accessor for live marking UI: it filters out
 * every claim whose `claimableInUI` is false, so while
 * `isZeroRetentionConfigured()` is false the result CANNOT contain an
 * unconditional "we do not train" / "instantly deleted" / "zero retention"
 * claim. The returned list is in the fixed claim order above.
 */
export function describeDataPosture(): readonly string[] {
  return buildClaims()
    .filter((claim) => claim.claimableInUI)
    .map((claim) => claim.text)
}

// ── DP-5: retention policy (typed windows; undecided figures flagged TODO) ────

/** The data classes the marking engine may write (doc 19 §1.4 / §4 Step 4). */
export type RetentionDataClass =
  | 'marking_submission_essay_text'
  | 'marking_ai_result'
  | 'ai_audit_log'
  | 'feedback'
  | 'analytics_projection'

/** Where the data physically lives, and whether retention is ours to set. */
export type RetentionController =
  /** We control retention/deletion (our database / store). */
  | 'first_party'
  /** Provider-side retention governed by the (pending) Anthropic contract. */
  | 'processor_contractual'

/** A single typed retention window for one data class. */
export interface RetentionRule {
  dataClass: RetentionDataClass
  /** Human-readable description of what this class contains. */
  description: string
  /** Who controls the retention window. */
  controller: RetentionController
  /**
   * Retention window in days, or `null` when NOT yet decided. Per the build
   * rule, undecided windows are `null` + a `todo`; they are NOT guessed.
   */
  windowDays: number | null
  /**
   * Set when `windowDays` is null (or otherwise unconfirmed): the exact
   * decision/confirmation still required before this figure can be claimed.
   */
  todo: string | null
}

/**
 * RETENTION_POLICY (DP-5) - typed retention windows per marking data class.
 *
 * Doc 19 §1.4 / §4 Step 4 require documented windows per data class but provide
 * NO numeric schedule, and the codebase has no agreed marking-retention
 * schedule to source. Per "do not invent", every window is `null` with an
 * explicit `todo`. Provider-side classes are additionally gated on the PENDING
 * Anthropic DPA/ZDR confirmation (see `MARKING_DATA_POSTURE.zeroRetention`).
 *
 * When a window is decided, replace `windowDays: null` + clear `todo`; do NOT
 * hardcode the figure anywhere else.
 */
export const RETENTION_POLICY: readonly RetentionRule[] = [
  {
    dataClass: 'marking_submission_essay_text',
    description:
      'Learner essay/response free text persisted on the marking spine (marking_submissions.essay_text, EU/UK at rest).',
    controller: 'first_party',
    windowDays: null,
    todo: 'Decide and document the essay-text retention window for the IELTS/GCSE marking spine; must be covered by the privacy/delete-essay + cron/data-retention purge (doc 19 §1.4, §4 Step 4).',
  },
  {
    dataClass: 'marking_ai_result',
    description:
      'Structured AI marking result fields persisted alongside the submission (bands, feedback, versions).',
    controller: 'first_party',
    windowDays: null,
    todo: 'Decide whether the AI result outlives the essay text or is purged with it; document the window (doc 19 §4 Step 4).',
  },
  {
    dataClass: 'ai_audit_log',
    description:
      'AI-decision audit rows: SHA-256 hash + length of input by default (raw input only behind opt-in env), plus isMinor + consent snapshot.',
    controller: 'first_party',
    windowDays: null,
    todo: 'Decide the AI-audit retention window (must balance EU AI Act record-keeping against data minimisation); document and ensure deletion routes purge it (doc 19 §1.3, §4 Step 4).',
  },
  {
    dataClass: 'feedback',
    description:
      'Learner-facing feedback text returned by the marker (may contain verbatim essay substrings as evidence quotes).',
    controller: 'first_party',
    windowDays: null,
    todo: 'Decide the feedback retention window; treat evidence quotes as essay-equivalent for retention/deletion (doc 19 §5 analytics-leakage risk).',
  },
  {
    dataClass: 'analytics_projection',
    description:
      'De-identified learner-model / error-taxonomy projection: bands, taxonomy tags/counts, confidence, integrity flags, hashed learner id - no essay_text, no quotes, no identifiers.',
    controller: 'first_party',
    windowDays: null,
    todo: 'Decide the analytics-projection retention window once the §4 learner-model store exists; confirm it carries no verbatim essay content (doc 19 §1.3, §3 Step 3).',
  },
  {
    dataClass: 'marking_submission_essay_text',
    description:
      'Provider-side (Anthropic) retention of the inputs/outputs sent for marking. Governed by the commercial contract, NOT a request flag.',
    controller: 'processor_contractual',
    windowDays: null,
    todo: 'Provider-side retention is UNCONFIRMED: depends on the pending written ZDR / DPA confirmation (isZeroRetentionConfigured() === false today). Do not state a figure until confirmed (doc 19 §1.2, §1.4).',
  },
] as const
