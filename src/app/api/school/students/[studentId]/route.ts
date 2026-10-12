// ─── One pupil, as their teacher sees them ─────────────────────────────────
// GET /api/school/students/[studentId]
//
// What a member of staff may know about one pupil: who they are, which of
// the viewer's classes they are in, the essays they have submitted for
// marking, their strongest and weakest assessment objectives across those
// essays, and their course progress.
//
// CHANGED 12 OCTOBER 2026:
//   * Scope. Any member of the school could read any pupil, a teacher
//     included, and a pupil could read their own record here too. Now a
//     teacher may open only pupils actively enrolled in a class they teach;
//     admins and heads of department may open any pupil of the school
//     (../../_lib/staff-scope.ts canViewPupil). Anything else answers 404,
//     so the response does not confirm the pupil exists.
//   * The objective view: the pupil's strongest and weakest objectives, from
//     ai_ao_breakdown with their teacher's adjustments, computed by the same
//     code as the department view so the two always agree.
//   * analytics.predicted_grade is now always null. It mapped the pupil's
//     average QUIZ score onto a GCSE grade (90 per cent = "Grade 9"), which
//     is not a prediction of anything, and the old page presented it as
//     their predicted grade. The key stays because this route is in the
//     published mobile contract (src/__tests__/mobile-contract.test.ts).
//   * Reads that fail answer 500 instead of quietly becoming empty lists.
//
// The keys the mobile contract publishes (analytics, enrolments,
// module_progress, assessment_attempts, practice_sessions, certificates,
// weak_areas, recommendations) are all still returned.

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
import { allCourses } from '@/data/courses'
import type { StudentAnalytics, WeakArea, Recommendation } from '@/lib/types'
import { canViewPupil, resolveStaffScope, scopedClassIds } from '../../_lib/staff-scope'
import { ScopedReadError, readPupilIdentities } from '../../_lib/reads'
import { loadMarkedEssays, type StatusTotals } from '../../_lib/marked-essays'
import { objectivesByPupil, type PupilObjectives } from '../../_lib/objectives'

export const dynamic = 'force-dynamic'

/** Essays of one pupil read at most; far more than a year's work. */
const ESSAY_LIMIT = 500

export interface PupilEssay {
  id: string
  title: string | null
  status: string
  submittedAt: string
  aiScore: number | null
  aiMaxMarks: number | null
  classId: string | null
  className: string | null
}

export interface PupilResponse {
  pupil: {
    id: string
    name: string | null
    email: string | null
    yearGroup: string | null
    classes: Array<{ id: string; name: string | null }>
  }
  /** The most recent thing the pupil did that the platform records, or null. */
  lastActivityAt: string | null
  objectives: PupilObjectives | null
  essays: PupilEssay[]
  essayTotals: StatusTotals
  // Published mobile-contract keys.
  analytics: StudentAnalytics
  enrolments: Array<Record<string, unknown>>
  module_progress: Array<Record<string, unknown>>
  assessment_attempts: Array<Record<string, unknown>>
  practice_sessions: Array<Record<string, unknown>>
  certificates: Array<Record<string, unknown>>
  weak_areas: WeakArea[]
  recommendations: Recommendation[]
}

interface ProgressRow {
  module_id: string
  course_id: string
  quiz_score: number | null
  completed: boolean
  quiz_attempts: number
  time_spent_seconds: number
  completed_at: string | null
}

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ studentId: string }> },
) {
  try {
    const { studentId } = await props.params
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in required')

    const limit = await rateLimit(`school-student-detail:${user.id}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!limit.success) return rateLimitResponse(limit.resetAt)

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return errorResponse(resolved.error, resolved.status)
    const { scope } = resolved

    if (!(await canViewPupil(svc, scope, studentId))) {
      return notFoundResponse('That pupil is not in your classes.')
    }

    const classIds = scopedClassIds(scope)
    const [
      identities,
      enrolledRes,
      loaded,
      progressRes,
      enrolmentsRes,
      assessmentsRes,
      practiceRes,
      certificatesRes,
    ] = await Promise.all([
      readPupilIdentities(svc, scope.schoolId, [studentId]),
      classIds.length > 0
        ? svc
            .from('class_students')
            .select('class_id')
            .eq('student_id', studentId)
            .eq('is_active', true)
            .in('class_id', classIds)
        : Promise.resolve({ data: [] as Array<{ class_id: string }>, error: null }),
      loadMarkedEssays(svc, scope, { studentId, limit: ESSAY_LIMIT }),
      svc
        .from('module_progress')
        .select(
          'module_id, course_id, quiz_score, completed, quiz_attempts, time_spent_seconds, completed_at',
        )
        .eq('user_id', studentId),
      svc
        .from('enrolments')
        .select('course_id, enrolled_at, payment_type')
        .eq('user_id', studentId),
      svc
        .from('assessment_attempts')
        .select('id, course_id, score, passed, time_taken_seconds, attempted_at')
        .eq('user_id', studentId)
        .order('attempted_at', { ascending: false }),
      svc
        .from('practice_sessions')
        .select('id, exam_board, paper, question_type, self_rating, time_spent_seconds, created_at')
        .eq('user_id', studentId)
        .order('created_at', { ascending: false }),
      svc
        .from('certificates')
        .select('id, course_id, score, grade, issued_at')
        .eq('user_id', studentId),
    ])

    for (const [table, res] of [
      ['class_students', enrolledRes],
      ['module_progress', progressRes],
      ['enrolments', enrolmentsRes],
      ['assessment_attempts', assessmentsRes],
      ['practice_sessions', practiceRes],
      ['certificates', certificatesRes],
    ] as const) {
      if (res.error) throw new ScopedReadError(table, res.error.message)
    }

    const who = identities.get(studentId)
    const className = new Map(scope.classes.map((c) => [c.id, c.name]))
    const classes = ((enrolledRes.data ?? []) as Array<{ class_id: string }>).map((r) => ({
      id: r.class_id,
      name: className.get(r.class_id) ?? null,
    }))

    const progress = (progressRes.data ?? []) as ProgressRow[]
    const enrolments = (enrolmentsRes.data ?? []) as Array<
      { course_id: string } & Record<string, unknown>
    >
    const assessments = (assessmentsRes.data ?? []) as Array<
      { attempted_at: string | null } & Record<string, unknown>
    >
    const practice = (practiceRes.data ?? []) as Array<
      { created_at: string | null; self_rating: number | null } & Record<string, unknown>
    >
    const certificates = (certificatesRes.data ?? []) as Array<Record<string, unknown>>

    // ── Last activity: the newest timestamp across everything recorded ──────
    const stamps = [
      ...progress.map((p) => p.completed_at),
      ...assessments.map((a) => a.attempted_at),
      ...practice.map((p) => p.created_at),
      ...loaded.rows.map((r) => r.submitted_at),
    ].filter((s): s is string => typeof s === 'string' && !Number.isNaN(Date.parse(s)))
    const lastActivityAt =
      stamps.length > 0 ? stamps.reduce((a, b) => (Date.parse(a) > Date.parse(b) ? a : b)) : null

    // ── Course progress, as before ─────────────────────────────────────────
    const courseMap = new Map(allCourses.map((c) => [c.id, c]))
    const moduleMap = new Map<string, string>()
    for (const course of allCourses)
      for (const mod of course.moduleList) moduleMap.set(mod.id, mod.title)
    const totalModulesAvailable = allCourses.reduce((sum, c) => sum + c.moduleList.length, 0)

    const modulesCompleted = progress.filter((p) => p.completed).length
    const quizScores = progress
      .filter((p) => p.quiz_score !== null)
      .map((p) => p.quiz_score as number)
    const avgQuizScore =
      quizScores.length > 0
        ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
        : 0
    const ratings = practice
      .filter((p) => p.self_rating !== null)
      .map((p) => p.self_rating as number)

    const byCourse = new Map<string, { total: number; count: number; name: string }>()
    for (const p of progress) {
      if (p.quiz_score === null) continue
      const entry = byCourse.get(p.course_id) ?? {
        total: 0,
        count: 0,
        name: courseMap.get(p.course_id)?.title ?? p.course_id,
      }
      entry.total += p.quiz_score
      entry.count += 1
      byCourse.set(p.course_id, entry)
    }
    const courseAvgs = Array.from(byCourse.entries())
      .map(([id, v]) => ({ id, name: v.name, avg: v.total / v.count }))
      .sort((a, b) => b.avg - a.avg)

    // Quiz trend: the last four weeks against the four before. Unchanged
    // from the previous version of this route; 'stable' when either window
    // is empty, which the mobile contract's type cannot express otherwise.
    const now = Date.now()
    const inWindow = (p: ProgressRow, from: number, to: number) => {
      const at = p.completed_at ? Date.parse(p.completed_at) : Number.NaN
      return p.quiz_score !== null && at >= from && at < to
    }
    const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length
    const recent = progress
      .filter((p) => inWindow(p, now - 28 * 86_400_000, now + 1))
      .map((p) => p.quiz_score as number)
    const previous = progress
      .filter((p) => inWindow(p, now - 56 * 86_400_000, now - 28 * 86_400_000))
      .map((p) => p.quiz_score as number)
    let trajectory: StudentAnalytics['trajectory'] = 'stable'
    if (recent.length > 0 && previous.length > 0) {
      const diff = mean(recent) - mean(previous)
      if (diff > 5) trajectory = 'improving'
      else if (diff < -5) trajectory = 'declining'
    }

    const weakAreas: WeakArea[] = courseAvgs
      .filter((c) => c.avg < 70)
      .slice(-5)
      .reverse()
      .map((c) => ({
        course_id: c.id,
        course_name: c.name,
        avg_score: Math.round(c.avg),
        students_below_threshold: 1,
        severity: c.avg < 40 ? 'critical' : c.avg < 55 ? 'warning' : 'minor',
      }))

    // Recommendations as the route has always made them, from the same data.
    const recommendations: Recommendation[] = []
    if (weakAreas.length > 0) {
      const worst = weakAreas[0]
      recommendations.push({
        priority: 1,
        title: `Focus on ${worst.course_name}`,
        description: `Average score of ${worst.avg_score}% in ${worst.course_name} indicates significant gaps in understanding.`,
        affected_students: 1,
        suggested_action: `Revisit all modules in ${worst.course_name} and retake the quizzes, focusing on areas with the lowest scores.`,
        course_ids: [worst.course_id],
      })
    }
    if (practice.length < 5) {
      recommendations.push({
        priority: 2,
        title: 'Increase practice session frequency',
        description: `Only ${practice.length} practice session${practice.length !== 1 ? 's' : ''} completed. Regular exam practice improves confidence and readiness.`,
        affected_students: 1,
        suggested_action:
          'Aim for at least 3 practice sessions per week using the exam question bank.',
      })
    }
    if (trajectory === 'declining') {
      recommendations.push({
        priority: 1,
        title: 'Address declining performance',
        description: 'Recent quiz scores are trending downward compared to the previous period.',
        affected_students: 1,
        suggested_action:
          'Schedule a one-to-one review session to identify and address knowledge gaps.',
      })
    }
    if (
      modulesCompleted > 0 &&
      totalModulesAvailable > 0 &&
      modulesCompleted / totalModulesAvailable < 0.3
    ) {
      recommendations.push({
        priority: 3,
        title: 'Improve course completion rate',
        description: `Only ${Math.round((modulesCompleted / totalModulesAvailable) * 100)}% of available modules completed.`,
        affected_students: 1,
        suggested_action:
          'Set a weekly target of completing at least 2 modules to maintain steady progress.',
      })
    }
    if (trajectory === 'improving') {
      recommendations.push({
        priority: 3,
        title: 'Maintain upward momentum',
        description: 'Recent quiz scores are higher than in the previous period.',
        affected_students: 1,
        suggested_action:
          'Continue current study pattern and consider attempting more challenging assessment questions.',
      })
    }
    recommendations.sort((a, b) => a.priority - b.priority)

    const analytics: StudentAnalytics = {
      student_id: studentId,
      student_name: who?.name ?? who?.email ?? '',
      year_group: who?.yearGroup ?? null,
      exam_board: who?.examBoard ?? null,
      modules_completed: modulesCompleted,
      total_modules: totalModulesAvailable,
      completion_rate:
        totalModulesAvailable > 0
          ? Math.round((modulesCompleted / totalModulesAvailable) * 100)
          : 0,
      avg_quiz_score: avgQuizScore,
      total_time_spent_seconds: progress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0),
      practice_sessions_count: practice.length,
      avg_practice_rating:
        ratings.length > 0
          ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10
          : 0,
      certificates_count: certificates.length,
      last_active_at: lastActivityAt,
      trajectory,
      strengths: courseAvgs.slice(0, 3).map((c) => c.name),
      weaknesses: courseAvgs
        .slice(Math.max(0, courseAvgs.length - 3))
        .reverse()
        .map((c) => c.name),
      // Never a quiz average dressed as a GCSE grade (see header).
      predicted_grade: null,
    }

    const body: PupilResponse = {
      pupil: {
        id: studentId,
        name: who?.name ?? null,
        email: who?.email ?? null,
        yearGroup: who?.yearGroup ?? null,
        classes,
      },
      lastActivityAt,
      objectives: objectivesByPupil(loaded.essays)[0] ?? null,
      essays: loaded.rows.map((r) => ({
        id: r.id,
        title: r.essay_title ?? r.question_text ?? null,
        status: r.status,
        submittedAt: r.submitted_at,
        aiScore: r.ai_score,
        aiMaxMarks: r.ai_max_marks,
        classId: r.class_id,
        className: r.class_id ? (className.get(r.class_id) ?? null) : null,
      })),
      essayTotals: loaded.totals,
      analytics,
      enrolments: enrolments.map((e) => ({
        ...e,
        course_name: courseMap.get(e.course_id)?.title ?? e.course_id,
      })),
      module_progress: progress.map((mp) => ({
        ...mp,
        course_name: courseMap.get(mp.course_id)?.title ?? mp.course_id,
        module_name: moduleMap.get(mp.module_id) ?? mp.module_id,
      })),
      assessment_attempts: assessments,
      practice_sessions: practice,
      certificates,
      weak_areas: weakAreas,
      recommendations,
    }

    return NextResponse.json(body)
  } catch (err) {
    console.error('[school/students/[studentId] GET] failed', err)
    return serverErrorResponse("We could not load this pupil's record. Please try again.")
  }
}
