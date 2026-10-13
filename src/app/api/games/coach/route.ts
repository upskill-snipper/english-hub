import { NextRequest, NextResponse } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { AI_OPT_OUT_CODE } from '@/lib/consent-codes'
import {
  enforceTrialAllowance,
  refundTrialAllowance,
  EMPTY_TRIAL_GATE,
  type TrialAllowanceGate,
} from '@/lib/usage/trial-allowance'
import { applyAllowanceHeaders } from '@/lib/usage/free-allowance'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { withArabicDirective, resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { logAiDecision, aiAuditTokenUsage } from '@/lib/ai-audit-log'
import { requireJsonContentType } from '@/lib/api-response'
import { readRounds } from '@/lib/game-results/store'
import { analyseRounds } from '@/lib/game-results/analytics'
import { activityNames } from '@/lib/game-results/names'
import { allowedLinks } from '@/lib/game-results/next-steps'
import {
  COACH_COOLDOWN_HOURS,
  COACH_MIN_ANSWERS,
  COACH_SYSTEM_PROMPT,
  coachInput,
  validateCoachReply,
} from '@/lib/game-results/coach'

export const dynamic = 'force-dynamic'

/**
 * POST /api/games/coach: the signed-in student asks the AI coach for a
 * feedback report on their game results (src/lib/game-results/coach.ts).
 *
 * The gate, in order, each refusal carrying a `code` the hub can act on:
 *
 *   1. signed in, and AI not switched off for the account (`ai_opted_out`),
 *      checked first so an opted-out student is never offered a plan;
 *   2. their personalised-suggestions setting is on (`suggestions_off`): the
 *      founder decided on 13 October 2026 that the coach follows the setting
 *      the Children's Code defaults switch off for under-18s;
 *   3. a plan or a live school (`needs_plan`): the coach is for paying
 *      students and school pupils, his decision the same day;
 *   4. enough evidence (`too_few_answers`): at least COACH_MIN_ANSWERS
 *      answered questions, so a report is not written from three clicks;
 *   5. one report a day (`cooldown`);
 *   6. the AI consent gate every AI feature uses (checkMinorAIConsent);
 *   7. the no-card trial's AI allowance, refunded on every failure after it.
 *
 * Then one model call under a 45 s deadline, the reply held to
 * validateCoachReply (shape, lengths, allowed links, no grade), stored in
 * coach_reports, and recorded by logAiDecision. A refused reply is not shown
 * and not stored, and the allowance is given back.
 *
 * The prompt carries figures and labels only (see coachInput): no name, no
 * email, no school, no age and nothing the student typed.
 */
export const maxDuration = 60
const COACH_MAX_TOKENS = 4_000
const COACH_DEADLINE_MS = 45_000

function refuse(
  status: number,
  code: string,
  message: string,
  extra: Record<string, unknown> = {},
) {
  return NextResponse.json({ error: message, code, ...extra }, { status })
}

export async function POST(request: NextRequest) {
  let trialGate: TrialAllowanceGate = EMPTY_TRIAL_GATE
  try {
    const ctError = requireJsonContentType(request)
    if (ctError) return ctError

    // 1. Signed in.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return refuse(401, 'unauthorised', 'Sign in to ask for feedback.')

    const rl = await rateLimit(`games-coach:${user.id}`, { limit: 5, windowSeconds: 86_400 })
    if (!rl.success) return refuse(429, 'rate_limited', 'Too many requests. Try again tomorrow.')

    // The AI opt-out first: someone who has switched AI off is told so, and is
    // never sent on to the suggestions switch or offered a plan.
    if (await isAiOptedOutServer(user.id)) {
      return NextResponse.json(
        {
          error: 'AI features are turned off for your account, so the coach cannot write a report.',
          code: AI_OPT_OUT_CODE,
        },
        { status: 403 },
      )
    }

    const admin = createServiceRoleClient()

    // 2. The suggestions setting. Unsure means off.
    const { data: profile } = await admin
      .from('profiles')
      .select('personalised_recommendations')
      .eq('id', user.id)
      .maybeSingle<{ personalised_recommendations: boolean | null }>()
    if (profile?.personalised_recommendations !== true) {
      return refuse(
        403,
        'suggestions_off',
        'Switch suggestions on in your hub first. The coach uses your results to write suggestions for you.',
      )
    }

    // 3. A plan or a live school.
    if (!(await hasActiveSubscription(supabase, user.id))) {
      return refuse(
        403,
        'needs_plan',
        'The AI coach comes with a plan, or through your school. Your results and their analysis stay free.',
      )
    }

    // 4. Enough evidence.
    const rounds = await readRounds(user.id)
    const analytics = analyseRounds(rounds)
    if (analytics.totals.answered < COACH_MIN_ANSWERS) {
      return refuse(
        422,
        'too_few_answers',
        `Answer at least ${COACH_MIN_ANSWERS} questions in the games first, so the coach has enough to go on.`,
        { answered: analytics.totals.answered, needed: COACH_MIN_ANSWERS },
      )
    }

    // 5. One report a day.
    const { data: last } = await admin
      .from('coach_reports')
      .select('created_at')
      .eq('user_id', user.id)
      .eq('audience', 'student')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle<{ created_at: string }>()
    if (last) {
      const next = new Date(Date.parse(last.created_at) + COACH_COOLDOWN_HOURS * 3_600_000)
      if (next.getTime() > Date.now()) {
        return refuse(429, 'cooldown', 'You can ask for a new report once a day.', {
          nextAvailableAt: next.toISOString(),
        })
      }
    }

    // 6. AI consent, the gate every AI feature uses. Last before the allowance:
    //    for a child whose guardian has not yet agreed it emails the guardian,
    //    which should happen only when the coach would otherwise run.
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return NextResponse.json(
        {
          error: consentCheck.reason ?? 'Consent is required to use this feature.',
          ...(consentCheck.code ? { code: consentCheck.code } : {}),
        },
        { status: 403 },
      )
    }
    // 7. The no-card trial's AI allowance; a live school pays for its pupils.
    trialGate = await enforceTrialAllowance(request, user, { schoolFunded: true })
    if (trialGate.response) return trialGate.response

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[games/coach] ANTHROPIC_API_KEY not configured')
      await refundTrialAllowance(trialGate)
      return refuse(503, 'unavailable', 'The coach is not available just now. Try again later.')
    }

    const names = activityNames(analytics)
    const input = coachInput(analytics, names)
    const allowed = allowedLinks(analytics)
    const userMessage = JSON.stringify(input)
    const auditBase = {
      feature: 'games/coach' as const,
      userId: user.id,
      locale: resolveLocaleFromRequest(request),
      inputText: userMessage,
      consentSnapshot: {
        aiOptOut: false,
        aiProcessingConsentOk: true,
        parentalConsentBasis: consentCheck.basis,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
    }

    const startedAt = new Date()
    const deadline = new AbortController()
    const timer = setTimeout(() => deadline.abort(), COACH_DEADLINE_MS)
    let message: Anthropic.Message
    try {
      message = await getAnthropicClient(apiKey).messages.create(
        {
          model: ANTHROPIC_MODEL,
          max_tokens: COACH_MAX_TOKENS,
          system: withArabicDirective(COACH_SYSTEM_PROMPT, request),
          messages: [{ role: 'user', content: userMessage }],
        },
        { timeout: COACH_DEADLINE_MS, signal: deadline.signal },
      )
    } catch (err) {
      const e = err as { status?: number; message?: string }
      void logAiDecision({
        ...auditBase,
        requestStartedAt: startedAt,
        responseFinishedAt: new Date(),
        success: false,
        errorClass: deadline.signal.aborted
          ? 'timeout'
          : e.status
            ? `http_${e.status}`
            : 'anthropic_error',
        errorMessage: typeof e.message === 'string' ? e.message.slice(0, 300) : null,
      })
      console.error(
        '[games/coach] model call failed',
        e.status ?? '',
        deadline.signal.aborted ? 'timeout' : '',
      )
      await refundTrialAllowance(trialGate)
      return refuse(
        503,
        'unavailable',
        'The coach could not write a report just now. Try again later.',
      )
    } finally {
      clearTimeout(timer)
    }
    const finishedAt = new Date()

    const text = message.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('')
    const checked = validateCoachReply(text, allowed)
    if (!checked.ok) {
      const rejected = message.stop_reason === 'max_tokens' ? 'TRUNCATED' : checked.rejected
      void logAiDecision({
        ...auditBase,
        requestStartedAt: startedAt,
        responseFinishedAt: finishedAt,
        tokenUsage: message.usage ? aiAuditTokenUsage(message.usage) : undefined,
        success: false,
        outputSummary: { rejected },
        errorClass: rejected,
        errorMessage: checked.detail.slice(0, 300),
      })
      console.error('[games/coach] reply refused', rejected, checked.detail.slice(0, 120))
      await refundTrialAllowance(trialGate)
      return refuse(
        502,
        'unavailable',
        'The coach could not write a report just now. Try again later.',
      )
    }

    const windowStart = analytics.totals.firstPlayed
    const { data: stored, error: storeError } = await admin
      .from('coach_reports')
      .insert({
        user_id: user.id,
        audience: 'student',
        requested_by: user.id,
        school_id: null,
        window_start: windowStart,
        window_end: analytics.totals.lastPlayed,
        answers_used: analytics.totals.answered,
        report: checked.report,
        model: ANTHROPIC_MODEL,
      })
      .select('id, created_at')
      .single<{ id: string; created_at: string }>()
    if (storeError) {
      // The student still gets the report they paid an allowance for; that it
      // was not kept is said here, where it can be seen.
      console.error('[games/coach] report not stored', storeError.code ?? '', storeError.message)
    }

    void logAiDecision({
      ...auditBase,
      requestStartedAt: startedAt,
      responseFinishedAt: finishedAt,
      tokenUsage: message.usage ? aiAuditTokenUsage(message.usage) : undefined,
      success: true,
      outputSummary: {
        strengths: checked.report.strengths.length,
        workOn: checked.report.workOn.length,
        nextSteps: checked.report.nextSteps.length,
        answersUsed: analytics.totals.answered,
        stored: !storeError,
      },
    })

    return applyAllowanceHeaders(
      NextResponse.json({
        report: checked.report,
        createdAt: stored?.created_at ?? finishedAt.toISOString(),
        answersUsed: analytics.totals.answered,
        stored: !storeError,
      }),
      trialGate.state,
    )
  } catch (err) {
    console.error('[games/coach] failed', err instanceof Error ? err.message : String(err))
    await refundTrialAllowance(trialGate)
    return refuse(500, 'failed', 'Something went wrong. Try again later.')
  }
}
