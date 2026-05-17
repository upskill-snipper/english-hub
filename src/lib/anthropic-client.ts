// ─── Shared Anthropic Client (single source of privacy posture) ──────────────
//
// WHY THIS FILE EXISTS
// Six API routes call Anthropic's Claude. Until now each route did its own
// `new Anthropic({ apiKey })`. That scattered (a) API-key handling, (b) the
// timeout, and — most importantly for compliance — (c) the *documented*
// data-protection posture across six files, so a reviewer auditing "what is
// our no-training / zero-retention configuration?" had no single answer.
//
// This module is that single answer. Every Anthropic call in the codebase now
// flows through `getAnthropicClient()`, and the exact, citeable contractual
// position is written down ONCE here (the `ANTHROPIC_DATA_POLICY` block).
//
// ── HONEST SCOPE OF WHAT CODE CAN vs CANNOT ENFORCE (read before editing) ────
// Researched against the installed SDK `@anthropic-ai/sdk@0.90.0`:
//
//   • The SDK `ClientOptions` interface (node_modules/@anthropic-ai/sdk/
//     client.d.ts L20–102) exposes: apiKey, authToken, baseURL, timeout,
//     fetchOptions, fetch, maxRetries, defaultHeaders, defaultQuery,
//     dangerouslyAllowBrowser, logLevel, logger. **There is NO data-retention,
//     no-training, "privacy", "zero-data-retention" or `anthropic-*` privacy
//     option or header.** A full type-level search of the SDK
//     (`retention|no-train|privacy|zero-data|zdr`) returns zero matches.
//
//   • The per-message `Metadata` object (messages.d.ts) exposes ONLY
//     `user_id`, and its own docstring says to pass an opaque id and to NOT
//     include name/email/phone. It is not a privacy switch.
//
// Therefore: **no-training and zero-/limited-retention are governed by
// Anthropic's COMMERCIAL CONTRACT, not by any request flag.** It is technically
// dishonest to claim a header enforces this — none exists. What this codebase
// *can* and *does* enforce in code is narrower and is enumerated in
// `ANTHROPIC_DATA_POLICY.enforcedInCode` below:
//   1. Data minimisation BEFORE the call (no name/email/DOB/school is ever put
//      in the prompt — done in the prompt builders, not here).
//   2. We never enrol these API calls in any optional Anthropic training/feed-
//      back programme (we send no such flag and use the standard commercial
//      Messages API only).
//   3. Centralised, reviewable client construction + a sane request timeout
//      and bounded retries.
//   4. `zeroRetentionConfigured` introspection so other code/tests/docs can
//      assert the *posture* without re-deriving it.
//
// The residual (counter-signed Anthropic DPA + written ZDR/no-training
// confirmation for the child-data path) is a CONTRACTUAL act for counsel — see
// `business-docs/compliance/eu-ai-act/17-anthropic-dpa-zdr-pack.md` and
// `human-action-checklist.md` item 4. Do not paper over it with a fake flag.
// ────────────────────────────────────────────────────────────────────────────

import Anthropic from '@anthropic-ai/sdk'

/**
 * The single Claude model every route uses. Kept here so the model string,
 * the audit-log model constant (`src/lib/ai-audit-log.ts` `AI_AUDIT_MODEL`)
 * and the compliance docs can be reconciled from one place. (This constant is
 * exported for reference/tests; routes still pass the model explicitly so the
 * refactor stays mechanical and per-route request bodies are unchanged.)
 */
export const ANTHROPIC_MODEL = 'claude-sonnet-4-20250514' as const

/**
 * Hard request timeout (ms) applied at the client level. The SDK default is
 * 600_000 (10 min); five of the six routes already passed a per-request
 * `{ timeout: 50_000 }`. Setting it on the client gives every path (including
 * the streaming route and the raw-fetch notes route, which set no timeout) a
 * single, documented ceiling without changing any per-request override that a
 * route still passes.
 */
export const ANTHROPIC_CLIENT_TIMEOUT_MS = 50_000 as const

/**
 * ─── ANTHROPIC DATA POLICY (canonical, citeable) ───────────────────────────
 *
 * Plain-English statement of the contractual data-protection position, with
 * the exact sources researched on 2026-05-17. This is the text counsel and the
 * DPIA (doc 15 C5) reconcile against. It is a CONSTANT, not behaviour: nothing
 * here is a request flag (the SDK has none — see file header).
 *
 * Citations (verify at sign-off; URLs as of 2026-05-17):
 *   • Anthropic Commercial Terms of Service — "We will not train our models
 *     on any Customer Content (Inputs or Outputs) from our Commercial
 *     Services" — https://www.anthropic.com/legal/commercial-terms
 *   • Anthropic Usage Policy — https://www.anthropic.com/legal/aup
 *   • Anthropic Data Processing Addendum (DPA) — processor terms, sub-
 *     processors, SCCs for US transfer —
 *     https://www.anthropic.com/legal/commercial-terms (DPA incorporated /
 *     available on request) ; trust centre: https://trust.anthropic.com
 *   • Anthropic Privacy Center — commercial/API inputs & outputs are NOT
 *     used to train models by default; default API retention for
 *     non-flagged traffic is limited (and Zero Data Retention is available
 *     contractually on request) — https://privacy.anthropic.com
 *
 * NOTE: the bullet wording is a faithful summary; the *operative* text is
 * whatever the counter-signed agreement says. Treat `dpaCountersigned` /
 * `writtenZdrConfirmation` as FALSE until counsel completes checklist item 4.
 */
export const ANTHROPIC_DATA_POLICY = {
  /** Provider legal entity. */
  provider: 'Anthropic, PBC',
  /** Endpoint family used (standard commercial Messages API). */
  api: 'Messages API (commercial)',
  /** Researched against this SDK version. */
  sdkPackage: '@anthropic-ai/sdk',
  sdkVersionResearched: '0.90.0',
  researchedOn: '2026-05-17',

  /**
   * Governed by the COMMERCIAL CONTRACT (not a request flag). Summary only —
   * operative text is the counter-signed agreement.
   */
  contractual: {
    /** Anthropic Commercial Terms: API Inputs/Outputs are not used to train models. */
    noModelTrainingByDefault: true,
    /**
     * Default commercial API retention is limited; Zero Data Retention (ZDR)
     * is available CONTRACTUALLY on request. Not a code/endpoint switch in
     * this SDK.
     */
    zeroDataRetentionAvailableContractually: true,
    /** US processing; transfer mechanism (SCCs / DPA) is the contractual control. */
    processingRegion: 'US',
    transferMechanism: 'Anthropic DPA + Standard Contractual Clauses (per DPA)',
  },

  /**
   * The honest "is the paperwork done?" flags. These start FALSE and are the
   * counsel residual (checklist item 4 / doc 17). Code MUST NOT flip these to
   * true on its own — they represent a signed document, not a runtime state.
   */
  dpaCountersigned: false as boolean,
  writtenZdrConfirmation: false as boolean,
  writtenNoTrainingConfirmation: false as boolean,

  /**
   * What is actually enforced by THIS codebase (true statements only):
   */
  enforcedInCode: [
    'Data minimisation before the request: prompts carry only the learner essay/response + question + board/year metadata; no name, email, DOB or school is ever sent (built in src/lib/marking/prompt-builder.ts and the other prompt builders, not here).',
    'No enrolment in any optional Anthropic training/feedback programme: only the standard commercial Messages API is called; no opt-in training flag is sent (the SDK exposes none).',
    'Single, centralised client construction with a documented request timeout and bounded retries (this module).',
    'AI-decision audit logging stores only a SHA-256 hash + length of learner input by default (src/lib/ai-audit-log.ts), so record-keeping does not itself create a children-text corpus.',
  ],

  /**
   * What is NOT enforceable in code and is therefore a CONTRACTUAL/counsel
   * residual (do not claim otherwise on public pages until closed):
   */
  contractualResidual: [
    'Counter-signed Anthropic DPA for the child-data marking path.',
    'Written Zero-Data-Retention confirmation (or explicit acceptance of the standard limited-retention default) for minors’ submissions.',
    'Written no-training confirmation referenced to the Commercial Terms clause.',
  ],
} as const

/**
 * True when the privacy posture is fully papered (DPA counter-signed AND
 * written ZDR + no-training confirmations obtained). This is deliberately a
 * function of the contractual flags above (which are hard-coded FALSE until
 * counsel acts), NOT of any SDK capability — because the SDK has no retention
 * control to introspect. Other code/tests/docs can import this to assert the
 * posture without re-deriving the reasoning.
 */
export function isZeroRetentionConfigured(): boolean {
  return (
    ANTHROPIC_DATA_POLICY.dpaCountersigned &&
    ANTHROPIC_DATA_POLICY.writtenZdrConfirmation &&
    ANTHROPIC_DATA_POLICY.writtenNoTrainingConfirmation
  )
}

/** Stable snapshot for `/api/*` debug, tests and the compliance docs. */
export interface AnthropicClientIntrospection {
  model: typeof ANTHROPIC_MODEL
  timeoutMs: typeof ANTHROPIC_CLIENT_TIMEOUT_MS
  sdkVersionResearched: string
  /**
   * Fully papered (DPA + written ZDR + written no-training). FALSE until
   * counsel completes human-action-checklist.md item 4. NOT a request flag —
   * the SDK exposes no retention/no-training option (researched 2026-05-17).
   */
  zeroRetentionConfigured: boolean
  /** Honest statement of what the code enforces vs what the contract governs. */
  enforcedInCode: readonly string[]
  contractualResidual: readonly string[]
}

export function describeAnthropicClient(): AnthropicClientIntrospection {
  return {
    model: ANTHROPIC_MODEL,
    timeoutMs: ANTHROPIC_CLIENT_TIMEOUT_MS,
    sdkVersionResearched: ANTHROPIC_DATA_POLICY.sdkVersionResearched,
    zeroRetentionConfigured: isZeroRetentionConfigured(),
    enforcedInCode: ANTHROPIC_DATA_POLICY.enforcedInCode,
    contractualResidual: ANTHROPIC_DATA_POLICY.contractualResidual,
  }
}

/** Thrown when the API key is missing so callers keep their existing 503 path. */
export class AnthropicNotConfiguredError extends Error {
  constructor() {
    super('ANTHROPIC_API_KEY is not configured')
    this.name = 'AnthropicNotConfiguredError'
  }
}

/**
 * Construct the shared, privacy-posture-documented Anthropic client.
 *
 * Behaviour is intentionally identical to the previous inline
 * `new Anthropic({ apiKey })` plus a documented client-level timeout — so the
 * six-route refactor is mechanical and request/response/branch logic is
 * unchanged. The privacy posture is DOCUMENTED here (ANTHROPIC_DATA_POLICY);
 * it is NOT a header, because the SDK has none (see file header).
 *
 * @param apiKey Optional explicit key. Defaults to `process.env.ANTHROPIC_API_KEY`.
 * @throws {AnthropicNotConfiguredError} when no API key is available, so each
 *         route can keep returning its existing "temporarily unavailable" 503.
 */
export function getAnthropicClient(apiKey?: string): Anthropic {
  const key = apiKey ?? process.env.ANTHROPIC_API_KEY
  if (!key) {
    throw new AnthropicNotConfiguredError()
  }
  return new Anthropic({
    apiKey: key,
    // Documented client-level ceiling. Per-request `{ timeout: 50_000 }`
    // overrides that some routes still pass are preserved and remain
    // authoritative for those calls; this only tightens the previously
    // unbounded paths (streaming route, raw-fetch notes route) to the same
    // value without changing any route's own options.
    timeout: ANTHROPIC_CLIENT_TIMEOUT_MS,
  })
}
