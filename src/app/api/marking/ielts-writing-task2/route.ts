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
// calibrated, so it is gated by TWO independent fail-closed locks (the feature flag
// AND a promoted green calibration baseline). Both locks and their test seams live
// in `./glive` — a Next.js route file may export ONLY its HTTP handlers + segment
// config, so the G-LIVE helpers cannot live in this file (doc 17 §5 fail-closed).
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
import { hasIeltsAccess } from '@/lib/course-access'
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
import type { MarkSubmissionInput } from '@/lib/marking/engine/types'
import { assertGLive, type GLiveStatus } from './glive'

export const maxDuration = 60

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

    // 4b. IELTS entitlement (2026-06-08 paywall, audit H2). IELTS Writing
    //     Task 2 marking is billable and part of the paid IELTS plan
    //     (mirrors /api/ielts/writing-feedback). This was previously gated
    //     ONLY by the G-LIVE launch flag below — which fails closed today,
    //     masking the gap. The moment G-LIVE flips on, every authenticated
    //     user (free / never-subscribed / lapsed) would get free IELTS WT2
    //     marking. Gate on a live IELTS entitlement here so it holds
    //     independently of the launch flag.
    const hasIelts = await hasIeltsAccess(supabase, user.id)
    if (!hasIelts) {
      return forbiddenResponse(
        'IELTS Writing Task 2 marking is part of the IELTS plan. Start your free trial to continue.',
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
