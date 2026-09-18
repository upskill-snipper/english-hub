// ─── AI Decision Audit Log ───────────────────────────────────────────────────
//
// EU AI Act Art. 12 (record-keeping) & Art. 19 (automatic logs): every
// invocation of the Anthropic model that produces a decision about a learner
// (marking, grading, CEFR banding, feedback, generated notes) must leave a
// durable, queryable record describing WHAT the system was asked, WHICH model
// and prompt/mark scheme produced the output, WHEN it ran, and WHAT it
// returned - so the provider can demonstrate traceability and investigate a
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
// ── Identity (the defect that made this file a no-op) ────────────────────────
// `AuditLog.userId` is a foreign key to `User.id`, a cuid. Every AI route
// passed the SUPABASE AUTH UUID instead, and only 8 of 200 real accounts had a
// Prisma `User` row at all, so the insert failed the foreign-key constraint and
// the catch below swallowed it. Nothing was ever persisted. For 11 of the 13 AI
// routes this record is the only place the provider's error class is captured,
// which is why two model outages (2026-08-18 and 2026-09-17) ran undiagnosed.
//
// The fix is the shared identity layer: the Supabase uuid is resolved to the
// Prisma `User.id` through `tryPrismaUserId`, which projects the account just
// in time. That projection is ADDITIVE ONLY - it makes the ledger addressable
// and never grants a consent, a parent link or a subscription.
//
// Three rules follow, and all three are tested:
//   1. A value that is not a subject at all - the literal 'anonymous' that the
//      free IELTS diagnostic passes for signed-out visitors, an empty string -
//      is NEVER written into the foreign-key column. It resolves to NULL.
//   2. When identity cannot be resolved the record is still written, with
//      `userId: null`. An unlinkable row is worth far more than no row: it
//      still carries the model id, the error class and the latency.
//   3. Nothing here may throw into the route (see the reliability contract).
//
// So an audit can still find a person's records when the link is NULL, the
// record carries a SHA-256 of the Supabase id rather than the id itself. Hash
// not raw, for the same reason the learner's text is hashed: erasure nullifies
// `AuditLog.userId` (data-retention.ts step 9) and a raw uuid left in `details`
// would quietly survive that erasure as a pointer to the erased person.
//
// ── Reliability contract ─────────────────────────────────────────────────────
// This logger is best-effort and MUST NEVER affect the user-facing request:
// every public function swallows its own errors (console.error only) and never
// throws into the route handler. A logging outage must not break marking.
//
// But a swallowed error must not swallow the DIAGNOSTIC. When persistence
// fails, the catch prints the model id, the AI error class and status it was
// carrying, and the class of the persistence failure itself, so the thing this
// record exists to make visible survives the loss of the row.
//
// Persistence: writes to the existing `AuditLog` Prisma model
// (action = 'ai_decision'). No new table/columns were introduced - the
// `details Json?` column carries the structured record below. `ipAddress` is
// non-nullable on that model, so it always defaults to 'unknown' here, exactly
// as the existing consent/data-retention audit writers do.
// ────────────────────────────────────────────────────────────────────────────

import { createHash } from 'crypto'

import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'

// ─── Configuration ───────────────────────────────────────────────────────────

/**
 * When `false` (default) only a SHA-256 hash + length of the learner input is
 * persisted - never the raw text. Set the `AI_AUDIT_STORE_RAW_INPUT` env var to
 * the literal string `"true"` to additionally persist the raw input (e.g. for a
 * time-boxed model-quality investigation). This is deliberately a hard opt-in:
 * the default protects minors' free text per GDPR data-minimisation.
 */
export const AI_AUDIT_STORE_RAW_INPUT: boolean = process.env.AI_AUDIT_STORE_RAW_INPUT === 'true'

/**
 * The single Anthropic model these routes call. Logged on every record.
 * Re-exported from the client so the audit trail can never disagree with
 * what was actually called (it did until 2026-08-18, when routes still
 * logged a model that had been retired).
 */
export const AI_AUDIT_MODEL: string = ANTHROPIC_MODEL

/** Marker so an AI decision can be filtered out of the generic AuditLog feed. */
export const AI_DECISION_ACTION = 'ai_decision' as const

/**
 * Values a caller may pass in `userId` that do not identify a person.
 * `src/app/api/ielts/diagnostic-assess/route.ts` passes the literal
 * 'anonymous' for signed-out visitors to the free diagnostic; the others are
 * defensive. None of them may reach the foreign-key column, where they would
 * either violate the constraint or - worse, if a row ever carried that id -
 * attach one visitor's record to somebody else's account.
 */
export const NON_SUBJECT_USER_IDS: readonly string[] = [
  'anonymous',
  'guest',
  'unknown',
  'none',
  'null',
  'undefined',
]

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
  | 'ielts/diagnostic-assess'
  | 'ielts/statement-feedback'
  | 'examiner/transcribe'
  | 'examiner/mark'
  | 'examiner/split'

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
  /** `PrivacySettings.aiOptOut` - false because the route would have 403'd. */
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
  /** `User.isMinor` - drives the data-minimisation posture of this record. */
  isMinor?: boolean | null
  /** Resolved request locale ('en' | 'ar' | 'es' | other). */
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
   * Compact, structured summary of the decision the model produced - e.g.
   * `{ predictedGrade, band, aoScores }` for marking, `{ gradeBand }` for
   * feedback, `{ overallBand }` for CEFR. Keep it small; no raw model prose.
   */
  outputSummary?: unknown
  /** Error class/name on the failure path (e.g. 'TimeoutError'). */
  errorClass?: string | null
  /** Short, non-PII error message on the failure path. */
  errorMessage?: string | null
  /**
   * Provider HTTP status on the failure path, when the caller has it. Both
   * model outages presented as a status (400 on a retired/rejected model id),
   * so it is worth capturing where it is known. Optional and honest: the
   * routes currently pass class and message only, and this is null for them
   * rather than a guessed value. `logAiDecisionError` fills it in when the
   * caught value carries a numeric `status`.
   */
  errorStatus?: number | null

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
function describeError(err: unknown): {
  errorClass: string
  errorMessage: string
  errorStatus: number | null
} {
  const status = (err as { status?: unknown } | null)?.status
  const errorStatus = typeof status === 'number' ? status : null

  if (err instanceof Error) {
    return { errorClass: err.name || 'Error', errorMessage: err.message.slice(0, 300), errorStatus }
  }
  return { errorClass: 'UnknownError', errorMessage: String(err).slice(0, 300), errorStatus }
}

// ─── Identity ────────────────────────────────────────────────────────────────

/** How the record relates to a person, recorded on every row. */
export type AiAuditSubjectIdentity =
  /** Resolved to a Prisma `User.id`; the foreign key is populated. */
  | 'linked'
  /** A real signed-in caller whose account could not be resolved; userId NULL. */
  | 'unresolved'
  /** No subject at all - a signed-out visitor; userId NULL. */
  | 'anonymous'

export interface AiAuditSubject {
  identity: AiAuditSubjectIdentity
  /** The value written to `AuditLog.userId`. NULL unless identity is 'linked'. */
  prismaUserId: string | null
  /** SHA-256 of the id the caller passed. NULL when there was no subject. */
  supabaseUserSha256: string | null
  /** Error class that prevented resolution, when identity is 'unresolved'. */
  unresolvedReason: string | null
}

/**
 * Trims the caller's id and rejects the non-subject sentinels. Case-insensitive
 * on the sentinel comparison only: the id itself is never case-folded, because
 * both a cuid and a Supabase uuid are case-sensitive.
 */
export function normaliseSubjectId(raw: string | null | undefined): string | null {
  if (typeof raw !== 'string') return null
  const trimmed = raw.trim()
  if (!trimmed) return null
  if (NON_SUBJECT_USER_IDS.includes(trimmed.toLowerCase())) return null
  return trimmed
}

/**
 * Resolves what the caller passed into something that can legally be written
 * into the foreign-key column. Total: it never throws, and on any failure it
 * degrades to an unlinked record rather than losing one.
 */
async function resolveAuditSubject(raw: string | null | undefined): Promise<AiAuditSubject> {
  const supabaseUserId = normaliseSubjectId(raw)
  if (!supabaseUserId) {
    return {
      identity: 'anonymous',
      prismaUserId: null,
      supabaseUserSha256: null,
      unresolvedReason: null,
    }
  }

  const supabaseUserSha256 = sha256Hex(supabaseUserId)

  try {
    // Dynamic import for the same reason as Prisma below: the identity module
    // reaches the database and the Supabase service-role client.
    const { tryPrismaUserId } = await import('@/lib/identity')
    const prismaUserId = await tryPrismaUserId(supabaseUserId)

    if (prismaUserId) {
      return { identity: 'linked', prismaUserId, supabaseUserSha256, unresolvedReason: null }
    }
    return {
      identity: 'unresolved',
      prismaUserId: null,
      supabaseUserSha256,
      unresolvedReason: 'IdentityUnresolved',
    }
  } catch (err) {
    return {
      identity: 'unresolved',
      prismaUserId: null,
      supabaseUserSha256,
      unresolvedReason: describeError(err).errorClass,
    }
  }
}

/**
 * Build the `details` JSON blob persisted on the AuditLog row. Pure + total -
 * never throws - so it is safe to call from the catch path too.
 */
function buildDetails(input: LogAiDecisionInput, subject: AiAuditSubject): Record<string, unknown> {
  const latencyMs = Math.max(
    0,
    input.responseFinishedAt.getTime() - input.requestStartedAt.getTime(),
  )

  const rawInput = typeof input.inputText === 'string' ? input.inputText : ''
  const inputHash = rawInput ? sha256Hex(rawInput) : null

  return {
    schemaVersion: 2,
    feature: input.feature,
    model: AI_AUDIT_MODEL,
    // Who the record is about, and how confident the link is. `identity` is
    // the honest word: 'linked' means the foreign key is populated, the other
    // two mean it is NULL and say why.
    subject: {
      identity: subject.identity,
      supabaseUserSha256: subject.supabaseUserSha256,
      unresolvedReason: subject.unresolvedReason,
    },
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
    errorStatus: input.errorStatus ?? null,
    consentSnapshot: input.consentSnapshot ?? null,
  }
}

/**
 * The line printed when a record cannot be persisted as intended.
 *
 * It carries the model id and the provider error class/status the lost row was
 * going to hold, because those are the only two facts that would have made the
 * two model outages visible. It deliberately mirrors the format of the route's
 * own runtime log line (`class=… status=… model=…`) so one grep finds both.
 *
 * Pure and exported so a test can assert the diagnostic is not lost - a
 * console.error nobody can inspect is how this failure hid for ten weeks.
 */
export function formatAuditPersistenceFailure(args: {
  input: LogAiDecisionInput
  outcome: 'record-not-persisted' | 'persisted-without-user-link'
  persistErrorClass: string
  persistErrorMessage: string
  subject?: AiAuditSubject | null
}): string {
  const { input, subject } = args
  return (
    `[ai-audit-log] ${args.outcome}: feature=${input.feature} ` +
    `model=${AI_AUDIT_MODEL} success=${input.success} ` +
    `aiErrorClass=${input.errorClass ?? 'n/a'} ` +
    `aiErrorStatus=${input.errorStatus ?? 'n/a'} ` +
    `aiErrorMessage=${(input.errorMessage ?? 'n/a').slice(0, 300)} ` +
    `identity=${subject?.identity ?? 'unknown'} ` +
    `persistErrorClass=${args.persistErrorClass} ` +
    `persistErrorMessage=${args.persistErrorMessage.slice(0, 300)}`
  )
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
 * not add latency - the function already self-suppresses errors regardless.
 */
export async function logAiDecision(input: LogAiDecisionInput): Promise<void> {
  let subject: AiAuditSubject | null = null

  try {
    subject = await resolveAuditSubject(input.userId)
    const details = buildDetails(input, subject)

    // Dynamic import keeps Prisma out of any client bundle, mirroring the
    // pattern already used by `src/lib/ai-preferences.ts`.
    const { prisma } = await import('@/lib/prisma')

    const row = {
      action: AI_DECISION_ACTION,
      resource: 'ai_decision',
      resourceId: input.feature,
      ipAddress: input.ipAddress?.trim() || 'unknown',
    }

    try {
      await prisma.auditLog.create({
        data: { ...row, userId: subject.prismaUserId, details: details as object },
      })
      return
    } catch (writeErr) {
      // The only write that can fail on the link itself is one that carries a
      // link. If there was none, there is nothing to retry - fall through.
      if (subject.prismaUserId === null) throw writeErr

      // Rather than lose the record to a foreign-key or connection fault on the
      // link, persist it unlinked and say so in the record. An unlinkable row
      // still carries the model, the error class and the latency.
      const failure = describeError(writeErr)
      const unlinked = {
        ...details,
        subject: {
          identity: 'unresolved' as AiAuditSubjectIdentity,
          supabaseUserSha256: subject.supabaseUserSha256,
          unresolvedReason: failure.errorClass,
          userLinkDropped: true,
        },
      }

      await prisma.auditLog.create({
        data: { ...row, userId: null, details: unlinked as object },
      })

      console.error(
        formatAuditPersistenceFailure({
          input,
          subject,
          outcome: 'persisted-without-user-link',
          persistErrorClass: failure.errorClass,
          persistErrorMessage: failure.errorMessage,
        }),
      )
      return
    }
  } catch (err) {
    // Never surface logging failures to the learner / route. Record-keeping is
    // important but must not break the AI feature it is observing - and the
    // diagnostic the row carried must not be lost with the row.
    const failure = describeError(err)
    console.error(
      formatAuditPersistenceFailure({
        input,
        subject,
        outcome: 'record-not-persisted',
        persistErrorClass: failure.errorClass,
        persistErrorMessage: failure.errorMessage,
      }),
    )
  }
}

/**
 * Convenience wrapper for the handled-error path: derives `errorClass` /
 * `errorMessage` from a caught value so call sites stay terse. Always sets
 * `success: false`. Same best-effort guarantees as `logAiDecision`.
 */
export async function logAiDecisionError(
  input: Omit<LogAiDecisionInput, 'success' | 'errorClass' | 'errorMessage' | 'errorStatus'>,
  err: unknown,
): Promise<void> {
  const { errorClass, errorMessage, errorStatus } = describeError(err)
  await logAiDecision({ ...input, success: false, errorClass, errorMessage, errorStatus })
}

/** Exposed for callers that want to log the hash alongside their own telemetry. */
export function hashAuditInput(value: string): string {
  return sha256Hex(value)
}
