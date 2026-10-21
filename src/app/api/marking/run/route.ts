// ─── POST /api/marking/run ───────────────────────────────────────────────────
// Run the AI marker against a previously-submitted `marking_submissions` row.
//
// This is the SECOND step of the spine (POST /api/submissions is the first).
// Separating them keeps the latency-heavy model call off the submission path.
//
// The AI mark produced here is ALWAYS A DRAFT, and is labelled as AI wherever
// it is shown. This route only ever writes status 'ai_marked' - it NEVER
// writes 'approved'. Final marks are a human act, persisted elsewhere (the
// review / override writers).
//
// Body: { submissionId }. Authorisation:
//   • b2c_self  - caller must be the owning student.
//   • b2b_class - caller must be the owning pupil, or an accepted member of
//                 staff at the row's school (verifySchoolMember), same-school
//                 checked, and the school's access must be live.
//
// A DEFECT, FIXED 12 OCTOBER 2026: a class pupil's essay was never marked. An
// enrolled pupil's essay is saved as b2b_class, and this route let only staff
// run marking on those, so the submit page told the pupil "Only school staff
// can run marking for class submissions" and no staff screen called this
// route either. Every class essay stayed 'submitted' for ever. Calum decided
// that a school pupil sees their AI feedback straight away, labelled as AI,
// as an individual pupil does; the teacher reviews afterwards, may change
// the mark, and the pupil then sees the teacher's decision. So the pupil may
// now run marking on their own class essay, a class essay is written as
// 'ai_marked' like any other, and GET /api/marking/[submissionId] shows it to
// them. 'teacher_review_required' is left to the review route's "correct"
// decision, a correction in progress.
//
// DB access is via the Supabase service-role client only.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { checkSchoolAccessActive } from '@/lib/school-access'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import {
  enforceTrialAllowance,
  refundTrialAllowance,
  EMPTY_TRIAL_GATE,
  type TrialAllowanceGate,
} from '@/lib/usage/trial-allowance'
import { applyAllowanceHeaders } from '@/lib/usage/free-allowance'
import { rateLimit } from '@/lib/rate-limit'
import {
  badRequestResponse,
  forbiddenResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  successResponse,
  unauthorizedResponse,
  requireJsonContentType,
} from '@/lib/api-response'
import { getMarkScheme } from '@/lib/marking/mark-schemes'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { cachedSystemBlocks } from '@/lib/ai/cached-system'
import { logAiDecision, aiAuditTokenUsage } from '@/lib/ai-audit-log'
import {
  classifyAiProviderFailure,
  readProviderError,
  type AiProviderFailureKind,
} from '@/lib/ai/provider-failure'
import { captureVersions } from '@/lib/marking/versioning-capture'
import { loadSubmission, applyAiResult, deriveUncertaintyFlags } from '@/lib/marking/persistence'
import { AI_OPT_OUT_CODE } from '@/lib/consent-codes'

export const dynamic = 'force-dynamic'

// ─── The reply budget ───────────────────────────────────────────────────────
// FIXED 10 October 2026: about one essay in nine came back unmarked. The AI
// audit log held 36 runs of this route from 19 September to 7 October: 30
// marked, 2 deliberate refusals (OFF_TOPIC, INVALID_SUBMISSION) and 4 logged
// as "Model response was not valid JSON". All 4 had used exactly 4,096 output
// tokens, which was this call's max_tokens: the model was stopped mid-reply,
// before it closed the JSON. Marked replies ran from 1,586 to 3,980 tokens,
// so the cap sat barely above the longest reply that had ever got through.
// The student was told "Failed to process the AI response", and the log could
// not tell a reply that was cut off from one that was malformed.
//
// The cap could not be raised on its own. The model writes 86 tokens a second
// at the slowest seen (93 typically), so 4,096 tokens took 44 to 47 s, against
// a 50 s timeout and a 60 s maxDuration. Nor did that timeout work as one: the
// SDK's `timeout` applies to each attempt and it retries a timed-out attempt
// twice, so the timeout branch below could not run inside 60 s. Vercel would
// end the function first, with no 503, no refund and no audit row. The three
// numbers now move together:
//   - MARKING_MAX_TOKENS, 8,000: twice the longest marked reply. Three of the
//     cut-off essays were sent again and came back at 3,356 to 3,980 tokens,
//     so the cut-off replies were probably not far past 4,096.
//   - MARKING_DEADLINE_MS, 95 s: 8,000 tokens at 86 a second is 93 s. It is
//     ONE deadline for the whole call, retries included: an abort signal that
//     ends the attempt in flight and stops the SDK starting another.
//   - maxDuration, 120 s. Up to 9 s were seen between saving the essay and
//     calling the model, and up to 14 s between its reply and the audit row,
//     so 9 + 95 + 14 = 118 s still fits. It also stays under the 125 s
//     Cloudflare waits for this site's origin before it shows its own 524.
// Vercel applies this export, not vercel.json's 60 s for src/app/api/**: the
// Next.js builder spreads a route's own config over the vercel.json match
// (getPageLambdaGroups in @vercel/next). A reply that still stops at the cap
// is logged as TRUNCATED, not INVALID_RESPONSE, so the audit log says whether
// 8,000 is enough. Pinned by src/__tests__/smart-ip/marking-run-route.test.ts.
// ────────────────────────────────────────────────────────────────────────────
export const maxDuration = 120
const MARKING_MAX_TOKENS = 8_000
const MARKING_DEADLINE_MS = 95_000

// ─── What the learner is told when the marker cannot be reached ─────────────
// From 12 to 21 October 2026 the Anthropic account was out of credit and
// every run failed here. Twelve learners, each on their first essay, were
// told "The AI marking service is currently unavailable. Please try again
// later." That was true, and it did not blame the essay, but it left out the
// two things they needed: that the essay was already saved, and how to try
// again without saving it again. Trying again meant pressing Submit on the
// same form, and every press saved another copy: 37 saved rows for 13 essays,
// one learner's essay saved 11 times in an hour and a half.
//
// So the sentence now says the essay is saved and where, and when the cause
// is known to be ours (anything but an unclassified 400), that the essay is
// not the problem. Pressing Submit again on the same essay now marks the saved
// copy (src/app/marking/submit/page.tsx), and the saved copy has its own
// "Mark this essay now" button (src/app/marking/results/[id]/page.tsx). A
// member of staff marking a pupil's essay is told the same, about "the essay".
function notMarked(cause: string, forStaff: boolean): string {
  return `${cause}, so ${forStaff ? 'this essay has' : 'your essay has'} not been marked.`
}

function essayIsSaved(forStaff: boolean): string {
  return forStaff
    ? 'The essay is saved, so it can be marked later without being submitted again.'
    : 'Your essay is saved in My marked essays, so you do not need to paste it again: you can have it marked from there.'
}

function markingUnavailable(kind: AiProviderFailureKind, forStaff: boolean): string {
  return [
    notMarked('AI marking is not working at the moment', forStaff),
    // An unclassified failure might, in principle, be about this request, so
    // it is not promised to be ours.
    kind === 'other'
      ? null
      : `This is a problem on our side, not with ${forStaff ? 'the' : 'your'} essay.`,
    essayIsSaved(forStaff),
  ]
    .filter(Boolean)
    .join(' ')
}

interface RunRequestBody {
  submissionId: string
}

export async function POST(request: NextRequest) {
  // The no-card trial AI ceiling is held here rather than inside the try below,
  // so the catch at the bottom can still give the allowance back. A paying
  // subscriber and a card-on-file trial are never metered - see
  // src/lib/usage/trial-allowance.ts.
  let trialGate: TrialAllowanceGate = EMPTY_TRIAL_GATE

  try {
    // 0. Content-Type
    const ctError = requireJsonContentType(request)
    if (ctError) return ctError

    // 1. Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse('You must be signed in to run marking.')
    }

    // 2. Rate limit - generous; the heavy work is one model call per row.
    const rl = await rateLimit(`marking-run:${user.id}`, {
      limit: 30,
      windowSeconds: 86_400,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 3. Parse body
    let body: RunRequestBody
    try {
      body = (await request.json()) as RunRequestBody
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }
    if (
      !body ||
      typeof body !== 'object' ||
      typeof body.submissionId !== 'string' ||
      body.submissionId.trim().length === 0
    ) {
      return badRequestResponse('submissionId is required.')
    }
    const submissionId = body.submissionId.trim()

    // 4. Load the row (service role - Supabase only).
    const svc = createServiceRoleClient()
    let row
    try {
      row = await loadSubmission(svc, submissionId)
    } catch (dbErr) {
      console.error('[api/marking/run] load failed', dbErr)
      return serverErrorResponse('Failed to load the submission. Please try again.')
    }
    if (!row) return notFoundResponse('Submission not found.')

    // 5. Authorise by source, and settle who pays for the run.
    //
    // 2026-06-08 paywall (audit H1): AI marking is billable. The owner
    // branches previously trusted ownership alone, so a user who created a
    // submission while on a paid plan and then lapsed could keep POSTing
    // their leftover pending submissionId and consume paid AI marking (up to
    // the 30/day rate limit) indefinitely. The owner is gated on the paid
    // access choke point at the moment of use, which since 12 October 2026
    // also admits a pupil of a school whose access is live.
    const isOwner = row.student_id === user.id
    let runByStaff = false
    if (row.source === 'b2c_self') {
      if (!isOwner) {
        return forbiddenResponse('You can only run marking on your own submission.')
      }
      const isPremium = await hasActiveSubscription(supabase, user.id)
      if (!isPremium) {
        return forbiddenResponse(
          'AI marking is a Premium feature. Start your free trial to continue.',
        )
      }
    } else if (isOwner) {
      // b2b_class, the pupil's own essay (see the header for why this branch
      // exists). Their access comes from their school's live pilot, or from
      // their own plan, and is checked now rather than at enrolment.
      const isPremium = await hasActiveSubscription(supabase, user.id)
      if (!isPremium) {
        return forbiddenResponse(
          "Your school's AI marking is not active at the moment, so this essay was saved but not marked. Ask your teacher.",
        )
      }
    } else {
      // b2b_class - a member of staff at the row's school.
      const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
      if (!member) {
        return forbiddenResponse(
          'Only the pupil who wrote this essay, or staff at their school, can run marking on it.',
        )
      }
      const memberSchoolId = (member as { school_id: string | null }).school_id
      if (row.school_id && memberSchoolId && row.school_id !== memberSchoolId) {
        return forbiddenResponse('Submission belongs to another school.')
      }
      // The school pays for a run its staff start, so its access must be
      // live now, by the one rule in src/lib/school-access.ts. Before 12
      // October 2026 nothing here asked, so an expired school's staff could
      // still spend on AI marking.
      if (!row.school_id || !(await checkSchoolAccessActive(row.school_id))) {
        return forbiddenResponse(
          "This school's access has ended, so its pupils' essays cannot be marked.",
        )
      }
      runByStaff = true
    }

    // 6. Guard the state machine - only mark a row that is awaiting marking.
    //    Re-running an already-marked / teacher-touched row would silently
    //    clobber a draft a teacher may be mid-review on.
    if (row.status !== 'submitted' && row.status !== 'pending') {
      return badRequestResponse(`Submission is not awaiting marking (status: ${row.status}).`)
    }

    if (!row.mark_scheme_id) {
      return badRequestResponse('Submission has no mark scheme associated.')
    }

    // 7. Resolve mark scheme + build prompt. `rubric_ref` holds the in-scheme
    //    question id captured at submission time.
    const scheme = getMarkScheme(row.mark_scheme_id)
    if (!scheme) {
      return badRequestResponse(`Unknown mark scheme "${row.mark_scheme_id}".`)
    }
    const questionId = row.rubric_ref ?? ''
    let prompt
    try {
      prompt = buildMarkingPrompt({
        scheme,
        questionId,
        questionText: row.question_text ?? '',
        essay: row.essay_text,
        studiedText: row.studied_text ?? undefined,
      })
    } catch (err) {
      console.error('[api/marking/run] prompt build failed', err)
      return badRequestResponse(err instanceof Error ? err.message : 'Invalid question.')
    }

    // 7b. The PUPIL's consent and AI opt-out, at the moment their work goes to
    //     the model.
    //
    // A DEFECT, FIXED 12 OCTOBER 2026 (docs/system/05 section 6): this route
    // made a model call behind no consent gate and no opt-out check, then
    // wrote an audit entry asserting that both had passed. /api/submissions
    // checks them, but only when the essay is saved, so consent withdrawn in
    // between was never seen, and opening class essays to pupils and staff
    // made the gap wider. Both are now checked here, for row.student_id and
    // not for the caller: when staff start the run the session is theirs, and
    // a teacher's consent is not the one that matters. checkMinorAIConsent
    // also admits a pupil of a live school that has recorded its AI
    // authorisation, and says so in `basis`, which the audit entry records.
    const consentCheck = await checkMinorAIConsent(row.student_id)
    if (!consentCheck.allowed) {
      if (runByStaff) {
        // The pupil-facing sentence and code would point a teacher at a
        // control that only the pupil or their parent can use.
        return forbiddenResponse(
          "This pupil's consent for AI marking is not in place, so their essay cannot be marked yet.",
        )
      }
      return forbiddenResponse(
        consentCheck.reason ?? 'Consent is required to use this feature.',
        consentCheck.code ? { code: consentCheck.code } : undefined,
      )
    }
    if (await isAiOptedOutServer(row.student_id)) {
      return forbiddenResponse(
        runByStaff
          ? "AI features are turned off for this pupil's account, so their essay cannot be marked."
          : 'AI features are currently disabled for your account. To re-enable them, visit your privacy settings or ask a parent/guardian to update your preferences.',
        { code: AI_OPT_OUT_CODE },
      )
    }

    // NO-CARD TRIAL AI CEILING. This is the last gate before we spend money,
    // and it sits in the same position as checkMinorAIConsent and
    // isAiOptedOutServer: after content-type / auth / entitlement / consent /
    // AI opt-out / validation / content-safety, immediately before the first
    // model call. A trial signup carries `subscription_status = 'pro'`, the
    // identical flag the paywall above reads, so without this a free account
    // has the same unlimited AI access a paying one does. Refused with 402 and
    // code 'free_allowance_exhausted', never 403 or 429.
    //
    // `schoolFunded`: a pupil of a live school is paid for by the school here,
    // not by their trial (src/lib/usage/trial-allowance.ts). A run started by
    // staff is the school's, and its access was checked live above, so it is
    // never charged to the teacher's own trial.
    if (!runByStaff) {
      trialGate = await enforceTrialAllowance(request, user, { schoolFunded: true })
      if (trialGate.response) return trialGate.response
    }

    // 8. Anthropic key
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[api/marking/run] ANTHROPIC_API_KEY not configured')
      await refundTrialAllowance(trialGate)
      return serviceUnavailableResponse(markingUnavailable('not_configured', runByStaff))
    }

    // 9. Call Claude (shared client - privacy posture documented centrally).
    const anthropic = getAnthropicClient(apiKey)
    const aiRequestStartedAt = new Date()
    // EU AI Act Art. 12/19 traceability for the Smart-IP marking spine.
    // 'marking/run' is a first-class member of the AiAuditFeature union.
    const auditBase = {
      feature: 'marking/run' as const,
      userId: user.id,
      locale: resolveLocaleFromRequest(request),
      inputText: row.essay_text,
      markSchemeId: row.mark_scheme_id,
      questionId,
      promptSchemeId: row.mark_scheme_id,
      // True now: both were checked for the pupil at step 7b.
      consentSnapshot: {
        aiOptOut: false,
        aiProcessingConsentOk: true,
        parentalConsentBasis: consentCheck.basis,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
    }

    let message
    // One deadline for the whole call, retries included (see the reply budget
    // at the top). `timeout` is still needed: without it the client's 50 s
    // per-attempt cap would cut a long reply short and retry it.
    const deadline = new AbortController()
    const deadlineTimer = setTimeout(() => deadline.abort(), MARKING_DEADLINE_MS)
    try {
      message = await anthropic.messages.create(
        {
          model: ANTHROPIC_MODEL,
          max_tokens: MARKING_MAX_TOKENS,
          // Cache the mark-scheme prefix; the AR directive follows the
          // breakpoint so both locales share one entry. Renders byte-identically
          // to the old withArabicDirective() string - see @/lib/ai/cached-system.
          system: cachedSystemBlocks(prompt.systemPrompt, request),
          messages: [{ role: 'user', content: prompt.userMessage }],
        },
        { timeout: MARKING_DEADLINE_MS, signal: deadline.signal },
      )
    } catch (aiError: unknown) {
      const err = aiError as { status?: number; message?: string; error?: { type?: string } }
      const pastDeadline = deadline.signal.aborted
      const provider = classifyAiProviderFailure(readProviderError(aiError))
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: new Date(),
        success: false,
        errorClass: pastDeadline
          ? 'timeout'
          : (err.error?.type ?? (err.status ? `http_${err.status}` : 'anthropic_error')),
        errorMessage: pastDeadline
          ? `No reply within ${MARKING_DEADLINE_MS / 1000} s`
          : typeof err.message === 'string'
            ? err.message.slice(0, 300)
            : null,
        errorStatus: pastDeadline ? null : provider.status,
      })
      if (
        pastDeadline ||
        err.message?.includes('timeout') ||
        err.message?.includes('ETIMEDOUT') ||
        err.error?.type === 'timeout_error'
      ) {
        console.error('[api/marking/run] Anthropic timeout')
        await refundTrialAllowance(trialGate)
        return serviceUnavailableResponse(
          `${notMarked('AI marking timed out', runByStaff)} ${essayIsSaved(runByStaff)}`,
        )
      }
      if (err.status === 429) {
        console.error('[api/marking/run] Anthropic rate limit')
        await refundTrialAllowance(trialGate)
        return serviceUnavailableResponse(
          `${notMarked('AI marking is very busy at the moment', runByStaff)} ${essayIsSaved(runByStaff)}`,
        )
      }
      console.error(
        `[api/marking/run] Anthropic error: kind=${provider.kind} status=${provider.status ?? 'none'}`,
        aiError,
      )
      await refundTrialAllowance(trialGate)
      return serviceUnavailableResponse(markingUnavailable(provider.kind, runByStaff))
    } finally {
      clearTimeout(deadlineTimer)
    }
    const aiResponseFinishedAt = new Date()

    // 10. Extract text + parse into a structured MarkingResult.
    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')

    const feedback = generateFeedback({
      scheme,
      questionId,
      rawResponseText: responseText,
    })

    if (!feedback.ok) {
      // A reply that stopped at max_tokens is unfinished, not malformed. Saying
      // so is what lets the audit log show whether MARKING_MAX_TOKENS still
      // falls short. A reply that hit the cap after its JSON closed parses, and
      // is marked as normal.
      const truncated =
        feedback.error.type === 'INVALID_RESPONSE' && message.stop_reason === 'max_tokens'
      const rejected = truncated ? 'TRUNCATED' : feedback.error.type
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: aiResponseFinishedAt,
        tokenUsage: message.usage ? aiAuditTokenUsage(message.usage) : undefined,
        success: false,
        outputSummary: { rejected },
        errorClass: rejected,
        errorMessage: truncated
          ? `Reply stopped at max_tokens (${MARKING_MAX_TOKENS}) before its JSON closed`
          : 'reason' in feedback.error
            ? String(feedback.error.reason)
            : null,
      })
      if (feedback.error.type === 'INVALID_SUBMISSION') {
        await refundTrialAllowance(trialGate)
        return badRequestResponse(
          'This submission does not appear to be an essay. It cannot be marked.',
        )
      }
      if (feedback.error.type === 'OFF_TOPIC') {
        await refundTrialAllowance(trialGate)
        return badRequestResponse('This submission is not GCSE English work. It cannot be marked.')
      }
      if (truncated) {
        // No reply text: the cause is known, and the text quotes the essay.
        console.error('[api/marking/run] reply cut off at max_tokens', MARKING_MAX_TOKENS)
      } else {
        console.error(
          '[api/marking/run] failed to parse model response',
          feedback.error.reason,
          responseText.slice(0, 500),
        )
      }
      await refundTrialAllowance(trialGate)
      return serverErrorResponse('Failed to process the AI response. Please try again.')
    }

    const result = feedback.result

    // 11. Capture model / prompt / rubric provenance (best-effort, never throws).
    const versions = await captureVersions(svc, {
      promptText: `${prompt.systemPrompt}\n\n${prompt.userMessage}`,
      markSchemeId: row.mark_scheme_id,
      schemeVersion: scheme.version ?? 'v1.0',
      examBoard: scheme.board,
      qualification: row.qualification,
    })

    // 12. Persist the DRAFT AI result as 'ai_marked', for class work as for
    //     self-study: the pupil sees it straight away, labelled as AI, and a
    //     teacher reviews class work afterwards (see the header). Until 12
    //     October 2026 class work was written as 'teacher_review_required'
    //     and hidden from the pupil until approved. Never 'approved' from here.
    const nextStatus = 'ai_marked' as const
    try {
      await applyAiResult(svc, submissionId, {
        result,
        uncertaintyFlags: deriveUncertaintyFlags(result),
        modelVersionId: versions.modelVersionId,
        promptVersionId: versions.promptVersionId,
        rubricVersionId: versions.rubricVersionId,
        status: nextStatus,
      })
    } catch (dbErr) {
      console.error('[api/marking/run] persist failed', dbErr)
      await refundTrialAllowance(trialGate)
      return serverErrorResponse('Failed to save the marking result. Please try again.')
    }

    // 13. EU AI Act Art. 12/19 - record the successful (draft) AI decision.
    void logAiDecision({
      ...auditBase,
      requestStartedAt: aiRequestStartedAt,
      responseFinishedAt: aiResponseFinishedAt,
      tokenUsage: message.usage ? aiAuditTokenUsage(message.usage) : undefined,
      success: true,
      outputSummary: {
        predictedGrade: result.predictedGrade,
        gradeBand: result.gradeBand,
        totalMarks: result.totalMarks,
        maxMarks: result.maxMarks,
        status: nextStatus,
        aoScores: result.aoScores.map((ao) => ({
          id: ao.id,
          marks: ao.marks,
          maxMarks: ao.maxMarks,
        })),
      },
    })

    // The AI mark is a DRAFT - never presented as final. The caller/UI must
    // label it accordingly; a class pupil's teacher reviews it afterwards.
    return applyAllowanceHeaders(successResponse({ result }), trialGate.state)
  } catch (err) {
    console.error('[api/marking/run] unexpected error', err)
    await refundTrialAllowance(trialGate)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}
