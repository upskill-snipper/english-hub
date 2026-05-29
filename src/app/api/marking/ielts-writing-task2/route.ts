// ─── POST /api/marking/ielts-writing-task2 ───────────────────────────────────
// TRACK B (plan P7.4 / P9.5) — the grounded IELTS Writing Task 2 marking route,
// wired to the engine facade behind the G-LIVE release gate.
//
// WHY THIS ROUTE EXISTS (and why it is HARD-GATED OFF until G-LIVE)
// ----------------------------------------------------------------
// The live GCSE path (`/api/mark`, `/api/marking/run`) and the legacy un-grounded
// `/api/ielts/*` routes stay exactly as they are. This is a NEW, additive route
// that exposes the grounded Marking Engine (`src/lib/marking/engine`) for IELTS
// Writing Task 2. It MUST NOT mark a single real learner until the build is proven
// calibrated, so it is gated by TWO independent locks that BOTH must open:
//
//   (a) A feature flag (env `IELTS_WRITING_TASK2_MARKING_ENABLED`, default OFF).
//       An ops kill-switch — the route is dark even if a green baseline exists.
//   (b) A runtime calibration assertion: `assertCalibrationGreen(currentBaseline)`
//       (src/lib/marking/engine/calibration/gate.ts). The gate is FAIL-CLOSED —
//       with no promoted green baseline it THROWS, so the route answers 503
//       "marking not yet calibrated". This is the G-LIVE enforcement living IN the
//       request path: the engine cannot reach a learner until a green baseline is
//       promoted (DECISIONS-log OQ-8: launch on an honest, calibrated posture).
//
// Until G-LIVE there is NO promoted baseline (`loadCurrentCalibrationBaseline`
// returns null), so even with the flag flipped the gate denies the request. Both
// locks are belt-and-braces by design (doc 17 §5 fail-closed).
//
// GATE CHAIN ORDER (reused, NOT reimplemented — identical to `/api/mark`)
// ----------------------------------------------------------------------
// auth → consent (minor) → AI-opt-out → rate limit → content safety → audit.
// Every check reuses the SAME helper `/api/mark` uses (`createServerSupabaseClient`,
// `checkMinorAIConsent`, `isAiOptedOutServer`, `rateLimit`, `contentSafetyCheck`,
// `logAiDecision`) so the Children's-Code posture is byte-for-byte consistent. The
// gate chain runs to completion BEFORE any model call (the facade) is reached.
//
// FLOW
//   1. content-type → 2. auth → 3. consent → 4. AI-opt-out → 5. rate limit →
//   6. parse + validate → 7. content safety →
//   8. G-LIVE: feature flag + assertCalibrationGreen (else 503) →
//   9. markSubmission() (engine facade — the FIRST and ONLY model call) →
//  10. persist via persistEngineResult →
//  11. audit (logAiDecision) → 12. return the OQ-5 disposition.
// ──────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { contentSafetyCheck } from '@/lib/content-safety'
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { logAiDecision } from '@/lib/ai-audit-log'
import { markSubmission, type MarkSubmissionResult } from '@/lib/marking/engine/mark'
import {
  persistEngineResult,
  type EngineSubmissionWriter,
} from '@/lib/marking/engine/persistence/persist'
import {
  assertCalibrationGreen,
  CalibrationGateError,
  type CalibrationBaseline,
} from '@/lib/marking/engine/calibration/gate'
import type { MarkSubmissionInput } from '@/lib/marking/engine/types'

export const maxDuration = 60

// ─── Feature flag (env, default OFF) ──────────────────────────────────────────

/**
 * Env name of the G-LIVE feature flag. Lives in one place so the route and its
 * test agree on the exact key. OFF unless the value is the literal string `'true'`
 * — any other value (unset, `'1'`, `'false'`, typo) keeps the route dark, which is
 * the safe default for a route that must not reach learners pre-launch.
 */
export const IELTS_WT2_FLAG_ENV = 'IELTS_WRITING_TASK2_MARKING_ENABLED'

/**
 * Whether the G-LIVE feature flag is ON. Strict equality to `'true'` so the flag
 * fails CLOSED for every other value — flipping it on is a deliberate, exact act,
 * never an accident of a truthy-ish env value.
 */
function isFeatureFlagEnabled(): boolean {
  return process.env[IELTS_WT2_FLAG_ENV] === 'true'
}

// ─── Calibration baseline lookup (the G-LIVE gate's input) ────────────────────

/**
 * Load the currently-promoted green calibration baseline, or `null` when none has
 * been promoted yet.
 *
 * WHY this returns `null` today: baseline storage (`calibration_runs`) is a later
 * migration-lane concern (doc 17 §schema) — no baseline has been promoted, so this
 * is the honest pre-G-LIVE state. A `null` baseline means {@link assertGLive}
 * cannot prove the build is safe, so the route answers 503. When the calibration
 * pipeline promotes a baseline, this function is the single seam that begins
 * returning it; the request-path gate logic here does not change.
 */
export async function loadCurrentCalibrationBaseline(): Promise<CalibrationBaseline | null> {
  // No promoted baseline exists pre-G-LIVE (doc 17 §schema). Fail-closed: the
  // absence of a baseline is treated as "not calibrated", not as "allow".
  return null
}

/**
 * The baseline loader the handler actually calls. Held in a module-level variable
 * (defaulting to the real {@link loadCurrentCalibrationBaseline}) so a test can
 * swap in a stub that returns a promoted green baseline, exercising the green path
 * WITHOUT relying on spying an internal call site. Production never reassigns it.
 */
let activeCalibrationBaselineLoader: () => Promise<CalibrationBaseline | null> =
  loadCurrentCalibrationBaseline

/**
 * TEST-ONLY seam: override the baseline loader the handler uses. Pass `null` to
 * restore the production default. Exported so the offline test can simulate a
 * promoted green baseline; never called by production code.
 */
export function __setCalibrationBaselineLoader(
  loader: (() => Promise<CalibrationBaseline | null>) | null,
): void {
  activeCalibrationBaselineLoader = loader ?? loadCurrentCalibrationBaseline
}

/**
 * Result of the two-lock G-LIVE check, surfaced to the handler so it can answer
 * with the right status without re-deriving the rule.
 *
 *   • `'allowed'`        — flag ON AND a promoted baseline passed the gate.
 *   • `'feature_off'`    — flag OFF (route is dark) → 503.
 *   • `'not_calibrated'` — flag ON but no green baseline (gate threw / null) → 503.
 */
type GLiveStatus = 'allowed' | 'feature_off' | 'not_calibrated'

/**
 * Enforce the G-LIVE release gate in the request path (BOTH locks):
 *   (a) the env feature flag is ON, AND
 *   (b) a promoted calibration baseline passes {@link assertCalibrationGreen}.
 *
 * Fail-closed throughout: a missing flag, a missing baseline, or a thrown
 * {@link CalibrationGateError} all deny the request. The gate's throw is its
 * negative answer (doc 17 §5) — we catch it and translate to `'not_calibrated'`
 * so the route returns a clean 503 rather than a 500.
 *
 * Exported for the route's offline test (it can stub the baseline loader and the
 * flag to assert each branch without a model call).
 */
export async function assertGLive(
  loadBaseline: () => Promise<CalibrationBaseline | null> = activeCalibrationBaselineLoader,
): Promise<GLiveStatus> {
  // Lock (a): the ops kill-switch. OFF ⇒ the route is dark regardless of data.
  if (!isFeatureFlagEnabled()) {
    return 'feature_off'
  }

  // Lock (b): the calibration gate. No baseline ⇒ cannot prove safety ⇒ deny.
  const baseline = await loadBaseline()
  if (baseline === null) {
    return 'not_calibrated'
  }

  try {
    // FAIL-CLOSED: assertCalibrationGreen returns void on a green baseline and
    // THROWS CalibrationGateError otherwise. Either way no learner-facing mark
    // happens unless this returns cleanly.
    assertCalibrationGreen(baseline)
    return 'allowed'
  } catch (err) {
    if (err instanceof CalibrationGateError) {
      // A measured-but-not-green baseline: the gate's negative answer. Treat as
      // "not yet calibrated" (503), never as a 500 — this is an expected outcome.
      return 'not_calibrated'
    }
    // Any other error is genuinely unexpected; let the handler map it to a 500.
    throw err
  }
}

// ─── Request body ─────────────────────────────────────────────────────────────

interface IeltsWt2RequestBody {
  /** The `marking_submissions.id` row this mark is written onto (created at submit). */
  submissionId: string
  /** The IELTS Writing Task 2 question/prompt the learner answered. */
  promptText: string
  /** The learner's essay. */
  essay: string
  /** Optional: this is a PAID MOCK attempt (OQ-4 high-stakes self-consistency signal). */
  isPaidMock?: boolean
  /** Optional: a prior pass flagged this as borderline (OQ-4 high-stakes signal). */
  isBorderline?: boolean
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type — reject non-JSON early (mirrors /api/mark).
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return unsupportedMediaTypeResponse()
    }

    // 2. Authenticate (gate chain step 1).
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse('You must be signed in to use AI marking.')
    }

    // 3. Parental consent for minor users (gate chain step 2) — same helper as /api/mark.
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return forbiddenResponse(consentCheck.reason ?? 'Consent is required to use this feature.')
    }

    // 4. AI opt-out enforcement (gate chain step 3, Children's Code GAP-12B).
    const aiOptedOut = await isAiOptedOutServer(user.id)
    if (aiOptedOut) {
      return forbiddenResponse(
        'AI features are currently disabled for your account. To re-enable AI marking, visit your privacy settings or ask a parent/guardian to update your preferences.',
      )
    }

    // 5. Rate limit (gate chain step 4): 10 essays / day, same budget as /api/mark.
    const rl = await rateLimit(`mark:ielts-wt2:${user.id}`, {
      limit: 10,
      windowSeconds: 86_400,
    })
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt)
    }

    // 6. Parse + validate the body.
    let body: IeltsWt2RequestBody
    try {
      body = (await request.json()) as IeltsWt2RequestBody
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }
    const validation = validateBody(body)
    if (validation) return badRequestResponse(validation)

    // 7. Content safety pre-check (gate chain step 5) — same helper as /api/mark.
    const safetyError = contentSafetyCheck({
      questionText: body.promptText,
      essay: body.essay,
    })
    if (safetyError) return badRequestResponse(safetyError)

    // 8. G-LIVE GATE (BOTH locks). This runs AFTER the full Children's-Code gate
    //    chain and BEFORE any model call. Pre-launch it always denies (no green
    //    baseline), so the engine facade below is never reached.
    let gLive: GLiveStatus
    try {
      gLive = await assertGLive()
    } catch (err) {
      console.error('[api/marking/ielts-writing-task2] G-LIVE check errored', err)
      return serverErrorResponse('Something went wrong. Please try again later.')
    }
    if (gLive !== 'allowed') {
      // Both the OFF flag and the missing/red baseline surface as 503: the feature
      // is not yet live. We do NOT distinguish them to the client — neither is a
      // user error, and revealing the flag state leaks ops posture.
      return serviceUnavailableResponse('IELTS Writing Task 2 marking is not yet calibrated.')
    }

    // ── Past the gate: a green baseline is promoted AND the flag is on. ──────────

    // 9. Mark via the engine facade (Seam C). This is the FIRST model call in the
    //    request — everything above is non-model gating. Build the canonical
    //    EngineInput; the facade routes → resolves pack → retrieves → marks →
    //    validates and returns the OQ-5 disposition (or a NeedsConfirmation, or
    //    throws RoutingError for fail-closed conditions).
    const aiRequestStartedAt = new Date()
    const auditBase = {
      // 'mark' is the existing audited feature class; this route is the grounded
      // IELTS variant of the same "AI marking" decision, so it shares the class.
      feature: 'mark' as const,
      userId: user.id,
      locale: resolveLocaleFromRequest(request),
      inputText: body.essay,
      consentSnapshot: {
        aiOptOut: false,
        aiProcessingConsentOk: true,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
    }

    // The facade reads the OQ-4 high-stakes signals (isPaidMock / isBorderline)
    // off `caps` via a structural read (see mark.ts toSelfConsistencyPolicy), so we
    // attach them additively. `EngineCaps` itself only declares `allowClarify`, so
    // we widen the object's type at the boundary the same way the facade reads it —
    // without forking the canonical EngineCaps interface.
    const caps: MarkSubmissionInput['caps'] & {
      readonly isPaidMock: boolean
      readonly isBorderline: boolean
    } = {
      allowClarify: false,
      isPaidMock: body.isPaidMock === true,
      isBorderline: body.isBorderline === true,
    }

    const input: MarkSubmissionInput = {
      rawSubmission: {
        // Canonical RawSubmission fields (engine/types.ts): the prompt is
        // `questionText`, the learner's essay is `answerText`. The router classifies
        // (area, taskType) from these — this route is IELTS Writing Task 2, but we
        // do not pin a pack so the resolver picks the published version (doc 10 §2.2).
        questionText: body.promptText,
        answerText: body.essay,
        areaHint: 'ielts',
      },
      context: {
        userId: user.id,
        // B2C self-serve practice path. The OQ-6 rewrite policy / minor gating reads
        // `isMinor`; this route serves adult IELTS candidates, but consent + opt-out
        // above already enforce the Children's-Code posture, so isMinor is false here.
        source: 'b2c_self',
        locale: resolveLocaleFromRequest(request),
        isMinor: false,
      },
      caps,
    }

    let outcome: MarkSubmissionResult
    try {
      outcome = await markSubmission(input)
    } catch (err) {
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: new Date(),
        success: false,
        errorClass: 'engine_error',
        errorMessage: err instanceof Error ? err.message.slice(0, 300) : null,
      })
      // Fail-closed (doc 10 §1.2): NO_PACK / AMBIGUOUS_SUBMISSION / INVALID_METADATA
      // and any engine error surface as a service error rather than a guessed mark.
      console.error('[api/marking/ielts-writing-task2] engine error', err)
      return serviceUnavailableResponse(
        'The AI marking service is currently unavailable. Please try again later.',
      )
    }
    const aiResponseFinishedAt = new Date()

    // The router asked for a clarification (ambiguous submission + allowClarify).
    // We disable clarify on this route, so this is defensive; surface as a 400 so
    // the client re-submits with clearer context rather than receiving a mark.
    //
    // The union (EngineMarkResult | NeedsConfirmation) is NOT discriminated on a
    // shared key with the same name+type across both arms, so we narrow on the
    // POSITIVE discriminant unique to the finished-mark arm: only EngineMarkResult
    // carries `disposition`. Its ABSENCE means routing returned NeedsConfirmation.
    if (!('disposition' in outcome)) {
      return badRequestResponse(
        'We could not confidently identify this as an IELTS Writing Task 2 response. Please resubmit.',
      )
    }

    // Past the union narrowing: `outcome` is a finished EngineMarkResult carrying
    // the validated MarkingResultV2 + the OQ-5 disposition.
    const { result, disposition } = outcome

    // 10. Persist the validated MarkingResultV2 onto its marking_submissions row.
    //     The full result is the audit source of truth (EU AI Act Art.12/15); the
    //     other columns are queryable projections. The Supabase client's
    //     `markingSubmission` delegate is not the writer here — persistence uses the
    //     engine's structural writer seam; in production a Prisma-style client is
    //     injected. We pass the supabase client cast to the structural writer shape.
    try {
      const writer = supabase as unknown as EngineSubmissionWriter
      await persistEngineResult(writer, { submissionId: body.submissionId }, result)
    } catch (err) {
      // Persistence failure must not leak a mark that was never durably recorded.
      console.error('[api/marking/ielts-writing-task2] persist failed', err)
      return serverErrorResponse('Failed to save your mark. Please try again.')
    }

    // 11. Audit the successful decision (EU AI Act Art.12/19), best-effort.
    void logAiDecision({
      ...auditBase,
      requestStartedAt: aiRequestStartedAt,
      responseFinishedAt: aiResponseFinishedAt,
      success: true,
      outputSummary: {
        disposition,
        needsHumanReview: result.needsHumanReview,
        overallConfidence: result.overallConfidence,
      },
    })

    // 12. Return the OQ-5 disposition + the validated mark.
    //     `disposition === 'show_ai_practice_feedback'` ⇔ shown-eligible; otherwise
    //     `'needs_human_review'` — the client must NOT present it as a confident mark.
    return NextResponse.json({
      disposition,
      result,
      remaining: rl.remaining,
    })
  } catch (err) {
    console.error('[api/marking/ielts-writing-task2] unexpected error', err)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}

// ─── Validation ──────────────────────────────────────────────────────────────

/**
 * Validate the request body. Returns an error message string when invalid, or
 * `null` when the body is acceptable. Limits mirror /api/mark so the two routes
 * apply a consistent floor/ceiling on learner input.
 */
function validateBody(body: IeltsWt2RequestBody): string | null {
  if (!body || typeof body !== 'object') return 'Request body must be an object.'
  if (!body.submissionId || typeof body.submissionId !== 'string') {
    return 'submissionId is required.'
  }
  if (!body.promptText || typeof body.promptText !== 'string') {
    return 'promptText is required.'
  }
  if (!body.essay || typeof body.essay !== 'string') {
    return 'essay is required.'
  }
  if (body.essay.length < 80) {
    return 'Your essay is too short to mark reliably. Please write at least a few paragraphs.'
  }
  if (body.essay.length > 30_000) {
    return 'Your essay exceeds the 30,000 character limit.'
  }
  if (body.promptText.length > 2_000) {
    return 'The prompt text exceeds the 2,000 character limit.'
  }
  if (body.isPaidMock !== undefined && typeof body.isPaidMock !== 'boolean') {
    return 'isPaidMock must be a boolean.'
  }
  if (body.isBorderline !== undefined && typeof body.isBorderline !== 'boolean') {
    return 'isBorderline must be a boolean.'
  }
  return null
}
