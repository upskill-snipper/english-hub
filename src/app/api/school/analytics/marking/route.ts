// ─── School analytics: assessment objectives across marked essays ──────────
//
// GET /api/school/analytics/marking?period=90d|12m|all&classId=<uuid>
//
// The department view the pilot proposal promises: "which assessment
// objectives are costing marks, class by class, and for each pupil which
// objectives are strengths and which are holding them back".
//
// Scope, as everywhere in the portal (../../_lib/staff-scope.ts):
//   * admin and head_of_department: the whole school;
//   * teacher: the classes they teach.
//
// REBUILT 12 OCTOBER 2026. What the previous version got wrong:
//   * Its "weaknesses" came only from teacher corrections, so a school whose
//     essays the AI had marked but nobody had yet reviewed saw nothing, and
//     even then it showed where teachers disagreed with the AI, not where
//     pupils lose marks. It also could not read the corrections the review
//     route writes ({ ao, score, maxScore, comment }) and counted them as
//     nothing.
//   * "Average mark movement" subtracted teacher_moderations.ai_score (total
//     MARKS, e.g. 23) from teacher_score (a GRADE, e.g. 6), reporting a fall
//     of 17 "marks" where a teacher had agreed with the AI. Hardest questions
//     and the improvement trend read teacher_grade as a mark the same way.
//   * Every read failure, and the whole handler's failure, returned a
//     well-formed empty payload, so a broken read looked like a school with
//     no marking.
//   * It read pupils' names from profiles, but reported "Student" whenever
//     that read failed.
//
// Now every figure comes from ai_ao_breakdown with the teacher's adjusted
// mark where one exists (../../_lib/objectives.ts), is measured in marks or
// as a share of marks, never as a grade, and carries its sample size. Any
// failed read answers 500.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import {
  errorResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { resolveStaffScope } from '../../_lib/staff-scope'
import { readPupilIdentities } from '../../_lib/reads'
import { loadMarkedEssays, type StatusTotals } from '../../_lib/marked-essays'
import {
  adjustmentsByObjective,
  markAgreement,
  objectivesByClass,
  objectivesByPupil,
  questionsByShare,
  summariseObjectives,
  type AdjustmentStat,
  type ClassObjectives,
  type MarkAgreement,
  type ObjectiveGroup,
  type PupilObjectives,
  type QuestionStat,
} from '../../_lib/objectives'

export const dynamic = 'force-dynamic'

const PERIOD_DAYS = { '90d': 90, '12m': 365, all: null } as const
export type ObjectivePeriod = keyof typeof PERIOD_DAYS

/** Enough for a department's year of essays; the response states if it was reached. */
const ESSAY_LIMIT = 5000

export interface DepartmentObjectivesResponse {
  scope: 'school' | 'teacher'
  period: ObjectivePeriod
  generatedAt: string
  /** True when more than ESSAY_LIMIT essays matched, so the oldest were left out. */
  truncated: boolean
  totals: StatusTotals
  overall: ObjectiveGroup
  classes: Array<ClassObjectives & { className: string | null }>
  pupils: Array<PupilObjectives & { name: string | null; classIds: string[] }>
  adjustments: AdjustmentStat[]
  agreement: MarkAgreement
  questions: QuestionStat[]
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in required')

    const limit = await rateLimit(`school-analytics-marking:${user.id}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!limit.success) return rateLimitResponse(limit.resetAt)

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return errorResponse(resolved.error, resolved.status)
    const { scope } = resolved

    const params = new URL(request.url).searchParams
    const rawPeriod = params.get('period') ?? 'all'
    const period: ObjectivePeriod =
      rawPeriod in PERIOD_DAYS ? (rawPeriod as ObjectivePeriod) : 'all'
    const days = PERIOD_DAYS[period]
    const since = days === null ? undefined : new Date(Date.now() - days * 86_400_000).toISOString()

    const classId = params.get('classId') ?? undefined
    if (classId && !scope.classes.some((c) => c.id === classId)) {
      return notFoundResponse('That class is not one you can see.')
    }

    const { essays, totals, truncated } = await loadMarkedEssays(svc, scope, {
      since,
      classId,
      limit: ESSAY_LIMIT,
    })

    const pupilObjectives = objectivesByPupil(essays)
    const names = await readPupilIdentities(
      svc,
      scope.schoolId,
      pupilObjectives.map((p) => p.studentId),
    )
    const classesOf = new Map<string, Set<string>>()
    for (const e of essays) {
      if (!e.classId) continue
      const set = classesOf.get(e.studentId) ?? new Set<string>()
      set.add(e.classId)
      classesOf.set(e.studentId, set)
    }
    const className = new Map(scope.classes.map((c) => [c.id, c.name]))

    const body: DepartmentObjectivesResponse = {
      scope: scope.wholeSchool ? 'school' : 'teacher',
      period,
      generatedAt: new Date().toISOString(),
      truncated,
      totals,
      overall: summariseObjectives(essays),
      classes: objectivesByClass(essays)
        .map((c) => ({ ...c, className: className.get(c.classId) ?? null }))
        .sort((a, b) => (a.className ?? '').localeCompare(b.className ?? '')),
      pupils: pupilObjectives
        .map((p) => {
          const who = names.get(p.studentId)
          return {
            ...p,
            name: who?.name ?? who?.email ?? null,
            classIds: Array.from(classesOf.get(p.studentId) ?? []),
          }
        })
        .sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')),
      adjustments: adjustmentsByObjective(essays),
      agreement: markAgreement(essays),
      questions: questionsByShare(essays).slice(0, 10),
    }

    return NextResponse.json(body)
  } catch (err) {
    console.error('[school/analytics/marking GET] failed', err)
    return serverErrorResponse(
      'We could not build the assessment objective view. Please try again.',
    )
  }
}
