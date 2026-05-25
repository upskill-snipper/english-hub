// ─── AI Decision Audit Log ───────────────────────────────────────────────────
//
// EU AI Act Art. 12 (record-keeping) & Art. 19 (automatic logs): every
// invocation of the Anthropic model that produces a decision about a learner
// (marking, grading, CEFR banding, feedback, generated notes) must leave a
// durable, queryable record describing WHAT the system was asked, WHICH model
// and prompt/mark scheme produced the output, WHEN it ran, and WHAT it
// returned — so the provider can demonstrate traceability and investigate a
// contested or anomalous AI decision after the fact.
//
// ── Data-protection rationale (read before changing the default) ─────────────
// Many of our users are minors (`User.isMinor`). Art. 12 logging is in tension
// with the UK GDPR / Children's Code data-minimisation principle: we need
// enough to make the decision auditable, but we must NOT build a standing
// corpus of children's free-text essays beyond what the feature itself
// requires.
//
// Therefore, by default we DO NOT persist the raw learner input. We store a
// SHA-256 hash of it plus its length. The hash is sufficient to:
//   • prove which exact text produced a logged decision (re-hash + compare),
//   • detect duplicate / replayed submissions,
//   • correlate a complaint ("you mis-marked my essay") with its log entry,
// without retaining the child's writing itself. Raw-input retention is gated
// behind a single explicit flag (`AI_AUDIT_STORE_RAW_INPUT`, default OFF) so
// turning it on is a deliberate, reviewable decision rather than an accident.
//
// ── Reliability contract ─────────────────────────────────────────────────────
// This logger is best-effort and MUST NEVER affect the user-facing request:
// every public function swallows its own errors (console.error only) and never
// throws into the route handler. A logging outage must not break marking.
//
// Persistence: writes to the existing `AuditLog` Prisma model
// (action = 'ai_decision'). No new table/columns were introduced — the
// `details Json?` column carries the structured record below. `ipAddress` is
// non-nullable on that model, so it always defaults to 'unknown' here, exactly
// as the existing consent/data-retention audit writers do.
// ────────────────────────────────────────────────────────────────────────────

import { createHash } from 'crypto'

// ─── Configuration ───────────────────────────────────────────────────────────

/**
 * When `false` (default) only a SHA-256 hash + length of the learner input is
 * persisted — never the raw text. Set the `AI_AUDIT_STORE_RAW_INPUT` env var to
 * the literal string `"true"` to additionally persist the raw input (e.g. for a
 * time-boxed model-quality investigation). This is deliberately a hard opt-in:
 * the default protects minors' free text per GDPR data-minimisation.
 */
export const AI_AUDIT_STORE_RAW_INPUT: boolean = process.env.AI_AUDIT_STORE_RAW_INPUT === 'true'

/** The single Anthropic model these routes call. Logged on every record. */
export const AI_AUDIT_MODEL = 'claude-sonnet-4-20250514' as const

/** Marker so an AI decision can be filtered out of the generic AuditLog feed. */
export const AI_DECISION_ACTION = 'ai_decision' as const

// ─── Types ───────────────────────────────────────────────────────────────────

/** The AI-backed routes that emit decision logs. */
export type AiAuditFeature =
  | 'mark'
  | 'mark/stream'
  | 'essay-feedback'
  | 'essay/feedback'
  | 'cefr-assess'
  | 'toolkit/generate-notes'
  | 'marking/run'
  | 'ielts/writing-feedback'
  | 'ielts/speaking-feedback'

/** Token usage, when the SDK surfaces it (streaming/raw-fetch paths may not). */
export interface AiAuditTokenUsage {
  inputTokens?: number
  outputTokens?: number
}

/**
 * Snapshot of the consent / opt-out posture at decision time. All routes have
 * already enforced these gates before calling the model; capturing the state
 * here makes the log self-contained for an Art. 12 audit (you can see the
 * decision was taken while the user was opted-in) without a later join.
 */
export interface AiConsentSnapshot {
  /** `PrivacySettings.aiOptOut` — false because the route would have 403'd. */
  aiOptOut: boolean
  /** Whether AI_PROCESSING consent + (for minors) parental consent passed. */
  aiProcessingConsentOk: boolean
  /** `PrivacySettings.aiTrainingOptIn`, if known in scope. */
  aiTrainingOptIn?: boolean
}

export interface LogAiDecisionInput {
  /** Route/feature that made the decision. */
  feature: AiAuditFeature
  /** User making the request, when authenticated and in scope. */
  userId?: string | null
  /** `User.isMinor` — drives the data-minimisation posture of this record. */
  isMinor?: boolean | null
  /** Resolved request locale ('en' | 'ar' | other). */
  locale?: string | null

  /**
   * The learner-supplied free text the decision was made about (essay /
   * response / topic input). By default only its SHA-256 hash + length are
   * stored; the raw value is dropped unless `AI_AUDIT_STORE_RAW_INPUT` is on.
   */
  inputText?: string | null

  /** Mark-scheme id (marking routes). */
  markSchemeId?: string | null
  /** Question id within the mark scheme (marking routes). */
  questionId?: string | null
  /** Identifier of the prompt scheme / topic / CEFR band, where applicable. */
  promptSchemeId?: string | null

  /** Wall-clock time the Anthropic request was dispatched. */
  requestStartedAt: Date
  /** Wall-clock time the Anthropic response (or error) was known. */
  responseFinishedAt: Date

  /** Token usage if the SDK exposed it. */
  tokenUsage?: AiAuditTokenUsage | null

  /** `true` on a successful, parsed AI decision; `false` on handled error. */
  success: boolean
  /**
   * Compact, structured summary of the decision the model produced — e.g.
   * `{ predictedGrade, band, aoScores }` for marking, `{ gradeBand }` for
   * feedback, `{ overallBand }` for CEFR. Keep it small; no raw model prose.
   */
  outputSummary?: unknown
  /** Error class/name on the failure path (e.g. 'TimeoutError'). */
  errorClass?: string | null
  /** Short, non-PII error message on the failure path. */
  errorMessage?: string | null

  /** Consent / opt-out posture at decision time. */
  consentSnapshot?: AiConsentSnapshot

  /** Request IP, if available. Defaults to 'unknown' (column is NOT NULL). */
  ipAddress?: string | null
}

// ─── Internal helpers ────────────────────────────────────────────────────────

function sha256Hex(value: string): string {
  return createHash('sha256').update(value, 'utf8').digest('hex')
}

/** Best-effort error-class extraction without leaking PII. */
function describeError(err: unknown): { errorClass: string; errorMessage: string } {
  if (err instanceof Error) {
    return { errorClass: err.name || 'Error', errorMessage: err.message.slice(0, 300) }
  }
  return { errorClass: 'UnknownError', errorMessage: String(err).slice(0, 300) }
}

/**
 * Build the `details` JSON blob persisted on the AuditLog row. Pure + total —
 * never throws — so it is safe to call from the catch path too.
 */
function buildDetails(input: LogAiDecisionInput): Record<string, unknown> {
  const latencyMs = Math.max(
    0,
    input.responseFinishedAt.getTime() - input.requestStartedAt.getTime(),
  )

  const rawInput = typeof input.inputText === 'string' ? input.inputText : ''
  const inputHash = rawInput ? sha256Hex(rawInput) : null

  return {
    schemaVersion: 1,
    feature: input.feature,
    model: AI_AUDIT_MODEL,
    sdk: '@anthropic-ai/sdk',
    apiVersion: '2023-06-01',
    isMinor: input.isMinor ?? null,
    locale: input.locale ?? null,
    markSchemeId: input.markSchemeId ?? null,
    questionId: input.questionId ?? null,
    promptSchemeId: input.promptSchemeId ?? null,
    requestStartedAt: input.requestStartedAt.toISOString(),
    responseFinishedAt: input.responseFinishedAt.toISOString(),
    latencyMs,
    // Data-minimisation: hash + length by default; raw text only when the
    // explicit opt-in flag is set (see file header).
    inputSha256: inputHash,
    inputLength: rawInput.length,
    rawInputStored: AI_AUDIT_STORE_RAW_INPUT && rawInput.length > 0,
    rawInput: AI_AUDIT_STORE_RAW_INPUT && rawInput.length > 0 ? rawInput : undefined,
    tokenUsage: input.tokenUsage
      ? {
          inputTokens: input.tokenUsage.inputTokens ?? null,
          outputTokens: input.tokenUsage.outputTokens ?? null,
        }
      : null,
    success: input.success,
    outputSummary: input.outputSummary ?? null,
    errorClass: input.errorClass ?? null,
    errorMessage: input.errorMessage ?? null,
    consentSnapshot: input.consentSnapshot ?? null,
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Persist one AI-decision record (EU AI Act Art. 12 / Art. 19).
 *
 * Best-effort and non-blocking: this never throws into the request path. Call
 * it after the Anthropic response (or handled error) is known, on BOTH the
 * success and the handled-error branches, passing only data already in scope.
 *
 * Awaiting it is fine (the body is wrapped in try/catch) but callers may also
 * fire-and-forget with `void logAiDecision(...).catch(() => {})` if they must
 * not add latency — the function already self-suppresses errors regardless.
 */
export async function logAiDecision(input: LogAiDecisionInput): Promise<void> {
  try {
    const details = buildDetails(input)

    // Dynamic import keeps Prisma out of any client bundle, mirroring the
    // pattern already used by `src/lib/ai-preferences.ts`.
    const { prisma } = await import('@/lib/prisma')

    await prisma.auditLog.create({
      data: {
        userId: input.userId ?? null,
        action: AI_DECISION_ACTION,
        resource: 'ai_decision',
        resourceId: input.feature,
        details: details as object,
        ipAddress: input.ipAddress?.trim() || 'unknown',
      },
    })
  } catch (err) {
    // Never surface logging failures to the learner / route. Record-keeping is
    // important but must not break the AI feature it is observing.
    console.error('[ai-audit-log] failed to persist AI decision record', err)
  }
}

/**
 * Convenience wrapper for the handled-error path: derives `errorClass` /
 * `errorMessage` from a caught value so call sites stay terse. Always sets
 * `success: false`. Same best-effort guarantees as `logAiDecision`.
 */
export async function logAiDecisionError(
  input: Omit<LogAiDecisionInput, 'success' | 'errorClass' | 'errorMessage'>,
  err: unknown,
): Promise<void> {
  const { errorClass, errorMessage } = describeError(err)
  await logAiDecision({ ...input, success: false, errorClass, errorMessage })
}

/** Exposed for callers that want to log the hash alongside their own telemetry. */
export function hashAuditInput(value: string): string {
  return sha256Hex(value)
}
