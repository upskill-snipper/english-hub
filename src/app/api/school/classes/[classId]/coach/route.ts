import { NextRequest, NextResponse } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { withoutAiOptedOut } from '@/lib/ai-preferences'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { withArabicDirective, resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { logAiDecision, aiAuditTokenUsage } from '@/lib/ai-audit-log'
import { requireJsonContentType } from '@/lib/api-response'
import { classInScope, resolveStaffScope } from '../../../_lib/staff-scope'
import {
  classPupils,
  inBatches,
  pupilGameAnalytics,
  teacherWindowStart,
} from '../../../_lib/pupil-games'
import { latestClassReport, schoolAiStatus } from '../../../_lib/class-report'
import { summariseClass } from '@/lib/game-results/class-view'
import { activityNames } from '@/lib/game-results/names'
import { allowedLinks } from '@/lib/game-results/next-steps'
import { validateCoachReply, type CoachReport } from '@/lib/game-results/coach'
import {
  CLASS_COACH_COOLDOWN_HOURS,
  CLASS_COACH_MIN_ANSWERS,
  CLASS_COACH_MIN_PUPILS,
  CLASS_COACH_SYSTEM_PROMPT,
  classCoachInput,
} from '@/lib/game-results/class-coach'

export const dynamic = 'force-dynamic'

/**
 * POST /api/school/classes/[classId]/coach: a teacher asks for the AI class
 * report on their class's game results (src/lib/game-results/class-coach.ts
 * says what it is, and why it waited for the founder until 23 October 2026).
 *
 * The gate, in order, each refusal carrying a `code` the Games tab can act on:
 *
 *   1. signed in, and staff with the class in scope (resolveStaffScope,
 *      classInScope): a teacher their own classes, admins and heads of
 *      department any class of the school. Anyone else gets 404, so a class's
 *      existence is not confirmed;
 *   2. the school's access is live (`school_not_live`) and it has recorded its
 *      authorisation for AI processing (`school_ai_not_authorised`): the record
 *      a school makes once, as data controller, that its privacy notice covers
 *      AI processing and parents have been told (schoolAiStatus);
 *   3. the pupils: those enrolled in the class and pupils of the school
 *      (classPupils), LESS any pupil who has switched AI off
 *      (withoutAiOptedOut). Their rounds count only from the day each joined
 *      the class, as on the Games tab;
 *   4. a floor (`too_few`): at least CLASS_COACH_MIN_PUPILS pupils with results
 *      and CLASS_COACH_MIN_ANSWERS answered questions between them, so that a
 *      "class report" is never one child's record in disguise;
 *   5. one report a day per class (`cooldown`).
 *
 * Then one model call under a 45 s deadline, the reply held to
 * validateCoachReply (shape, lengths, allowed links, no grade), stored in
 * class_coach_reports, and recorded by logAiDecision, which hands its own
 * write to after() so the record outlives the response. A refused reply is
 * not shown and not stored.
 *
 * The prompt carries the class's pooled figures and labels only (see
 * classCoachInput): no name, no pupil id, no email, no age and nothing a pupil
 * typed. The teacher is the account on the record; the pupils are counted,
 * not named. A read failure anywhere is a 503, never a report written from
 * part of the class.
 */
export const maxDuration = 60
const MAX_TOKENS = 4_000
const DEADLINE_MS = 45_000

export interface ClassCoachResponse {
  report: CoachReport
  createdAt: string
  pupilsUsed: number
  answersUsed: number
  stored: boolean
}

function refuse(
  status: number,
  code: string,
  message: string,
  extra: Record<string, unknown> = {},
) {
  return NextResponse.json({ error: message, code, ...extra }, { status })
}

export async function POST(request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const { classId } = await props.params
  try {
    const ctError = requireJsonContentType(request)
    if (ctError) return ctError

    // 1. Signed in, and staff with the class in scope.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return refuse(401, 'unauthorised', 'Sign in to ask for a report.')

    const rl = await rateLimit(`school-class-coach:${user.id}`, {
      limit: 10,
      windowSeconds: 86_400,
    })
    if (!rl.success) return refuse(429, 'rate_limited', 'Too many requests. Try again tomorrow.')

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return refuse(resolved.status, 'forbidden', resolved.error)
    const { scope } = resolved
    const cls = classInScope(scope, classId)
    if (!cls) return refuse(404, 'not_found', 'Class not found')

    // 2. The school: live, and its AI authorisation recorded.
    const aiStatus = await schoolAiStatus(svc, scope.schoolId)
    if (aiStatus === 'not_live') {
      return refuse(
        403,
        'school_not_live',
        "The school's access is not live, so no report can be written.",
      )
    }
    if (aiStatus === 'not_authorised') {
      return refuse(
        403,
        'school_ai_not_authorised',
        'The school has not recorded its authorisation for AI processing, so no report can be written. An administrator can arrange this with The English Hub.',
      )
    }

    // 3. The pupils, less any who has switched AI off. The rows carry no name:
    //    the summary is pooled, and the prompt is built from the pool.
    const pupils = await classPupils(svc, scope.schoolId, classId)
    const included = await withoutAiOptedOut(pupils)
    const analytics = await inBatches(included, 5, (p) =>
      pupilGameAnalytics(p.id, teacherWindowStart(p.joinedAt)),
    )
    const summary = summariseClass(
      included.map((p, n) => ({
        id: p.id,
        name: null,
        joinedAt: p.joinedAt,
        analytics: analytics[n],
      })),
    )

    // 4. The floor.
    if (
      summary.pupilsWithData < CLASS_COACH_MIN_PUPILS ||
      summary.answered < CLASS_COACH_MIN_ANSWERS
    ) {
      return refuse(
        422,
        'too_few',
        `A class report needs at least ${CLASS_COACH_MIN_PUPILS} pupils with results and ${CLASS_COACH_MIN_ANSWERS} answered questions between them.`,
        {
          pupils: summary.pupilsWithData,
          answered: summary.answered,
          minPupils: CLASS_COACH_MIN_PUPILS,
          minAnswers: CLASS_COACH_MIN_ANSWERS,
        },
      )
    }

    // 5. One report a day per class.
    const last = await latestClassReport(svc, classId)
    if (last) {
      const next = new Date(Date.parse(last.createdAt) + CLASS_COACH_COOLDOWN_HOURS * 3_600_000)
      if (next.getTime() > Date.now()) {
        return refuse(429, 'cooldown', 'One report a day for each class.', {
          nextAvailableAt: next.toISOString(),
        })
      }
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[school-class-coach] ANTHROPIC_API_KEY not configured')
      return refuse(503, 'unavailable', 'The report cannot be written just now. Try again later.')
    }

    const names: Record<string, string> = {}
    const allowed = new Set<string>()
    for (const a of analytics) {
      Object.assign(names, activityNames(a))
      for (const link of allowedLinks(a)) allowed.add(link)
    }
    const input = classCoachInput(summary, names, [...allowed])
    const userMessage = JSON.stringify(input)
    const auditBase = {
      feature: 'school/class-coach' as const,
      userId: user.id,
      locale: resolveLocaleFromRequest(request),
      inputText: userMessage,
      consentSnapshot: {
        aiOptOut: false,
        aiProcessingConsentOk: true,
        parentalConsentBasis: 'school_ai_authorisation' as const,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
    }

    const startedAt = new Date()
    const deadline = new AbortController()
    const timer = setTimeout(() => deadline.abort(), DEADLINE_MS)
    let message: Anthropic.Message
    try {
      message = await getAnthropicClient(apiKey).messages.create(
        {
          model: ANTHROPIC_MODEL,
          max_tokens: MAX_TOKENS,
          system: withArabicDirective(CLASS_COACH_SYSTEM_PROMPT, request),
          messages: [{ role: 'user', content: userMessage }],
        },
        { timeout: DEADLINE_MS, signal: deadline.signal },
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
        '[school-class-coach] model call failed',
        e.status ?? '',
        deadline.signal.aborted ? 'timeout' : '',
      )
      return refuse(
        503,
        'unavailable',
        'The report could not be written just now. Try again later.',
      )
    } finally {
      clearTimeout(timer)
    }
    const finishedAt = new Date()

    const text = message.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('')
    const checked = validateCoachReply(text, [...allowed])
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
      console.error('[school-class-coach] reply refused', rejected, checked.detail.slice(0, 120))
      return refuse(
        502,
        'unavailable',
        'The report could not be written just now. Try again later.',
      )
    }

    // The window the figures came from: the earliest first round to the
    // latest last round among the pupils counted.
    const firsts = analytics.map((a) => a.totals.firstPlayed).filter((d): d is string => !!d)
    const lasts = analytics.map((a) => a.totals.lastPlayed).filter((d): d is string => !!d)
    const { data: stored, error: storeError } = await svc
      .from('class_coach_reports')
      .insert({
        class_id: classId,
        school_id: scope.schoolId,
        requested_by: user.id,
        pupils_used: summary.pupilsWithData,
        answers_used: summary.answered,
        window_start: firsts.length ? firsts.sort()[0] : null,
        window_end: lasts.length ? lasts.sort().at(-1) : null,
        report: checked.report,
        model: ANTHROPIC_MODEL,
        created_at: finishedAt.toISOString(),
      })
      .select('id, created_at')
      .single<{ id: string; created_at: string }>()
    if (storeError) {
      // The teacher still gets the report; that it was not kept is said here,
      // where it can be seen, and the tab will show no "latest" for it.
      console.error(
        '[school-class-coach] report not stored',
        storeError.code ?? '',
        storeError.message,
      )
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
        pupilsUsed: summary.pupilsWithData,
        answersUsed: summary.answered,
        stored: !storeError,
      },
    })

    const body: ClassCoachResponse = {
      report: checked.report,
      createdAt: stored?.created_at ?? finishedAt.toISOString(),
      pupilsUsed: summary.pupilsWithData,
      answersUsed: summary.answered,
      stored: !storeError,
    }
    return NextResponse.json(body, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err) {
    console.error('[school-class-coach] failed', err instanceof Error ? err.message : String(err))
    return refuse(503, 'unavailable', 'The report could not be written just now. Try again later.')
  }
}
