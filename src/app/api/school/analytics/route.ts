// ─── School analytics: activity and quiz progress ──────────────────────────
//
// GET /api/school/analytics?period=week|month|term|year
//
// Scope, as everywhere in the portal (../_lib/staff-scope.ts): admins and
// heads of department see the whole school, a teacher the pupils in the
// classes they teach. Reads use the service role; any failed read answers
// 500. The assessment-objective view is /api/school/analytics/marking.
//
// REBUILT 12 OCTOBER 2026. What the previous version reported, wrongly:
//   * Every pupil "Never logged in", last active 1 January 1970. It read
//     school_members.last_active_at, which nothing updates as pupils work,
//     and filled the gap with `new Date(0)`. Last activity is now the newest
//     thing the pupil actually did here: a quiz or module finished, a
//     practice session, an assessment, an essay submitted for marking. A
//     pupil with none of those is "no activity yet", and their date is null.
//   * "Assignments submitted" counted assignments CREATED (Prisma
//     Assignment.createdAt). Nothing in the codebase creates an
//     AssignmentSubmission, so a true count could only ever be zero. It is
//     replaced by essays submitted for marking, the pupils' real work in the
//     pilot.
//   * Quiz averages were converted into GCSE grades on the page ("Grade 6
//     average working grade"). A quiz percentage is not a grade; they are
//     reported as percentages.
//   * A class with no quiz scores averaged 0 per cent; it is now null.
//   * resourceUsage was always empty, because no table records resource use,
//     and is gone rather than promised.
//   * Most reads ignored their error, so a failed read became a zero.
//
// Reads that can exceed PostgREST's row cap are paged (../_lib/reads.ts
// readAllPages), so a large school's history is read whole, not cut off at
// 1,000 rows without a word.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { getSchoolStudents } from '@/lib/school-students'
import {
  errorResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { IN_CHUNK, STAFF_ROLES, chunks, resolveStaffScope } from '../_lib/staff-scope'
import {
  ScopedReadError,
  countScopedSubmissions,
  readAllPages,
  readPupilIdentities,
} from '../_lib/reads'

export const dynamic = 'force-dynamic'

const DAY = 86_400_000
const PERIOD_DAYS: Record<string, number> = { week: 7, month: 30, term: 90, year: 365 }
const WEEKS = 8
/** A pupil whose last activity is at least this old is listed as inactive. */
const INACTIVE_DAYS = 7
/** A quiz average below this is listed. */
const LOW_QUIZ_AVERAGE = 40

export type PupilIssue =
  | { kind: 'no_activity' }
  | { kind: 'inactive'; days: number }
  | { kind: 'low_quiz_average'; percent: number }

export interface AnalyticsResponse {
  scope: 'school' | 'teacher'
  period: string
  totalStudents: number
  /** Accepted staff; whole-school viewers only. */
  totalTeachers: number | null
  totalClasses: number
  /** Pupils with any recorded activity in the last 7 days. */
  activeStudentsThisWeek: number
  /** Essays submitted for marking in the last 7 days. */
  essaysSubmittedThisWeek: number
  /** Mean quiz score in the period, as a percentage; null with no quiz scores. */
  averageQuizScore: number | null
  atRisk: {
    total: number
    pupils: Array<{
      userId: string
      name: string | null
      yearGroup: string | null
      /** Null when the pupil has done nothing the platform records. */
      lastActiveAt: string | null
      issues: PupilIssue[]
    }>
  }
  yearGroupStats: Array<{
    yearGroup: string | null
    studentCount: number
    averageQuizScore: number | null
    quizzesCompleted: number
    atRiskCount: number
  }>
  classStats: Array<{
    classId: string
    className: string | null
    teacherName: string | null
    studentCount: number
    averageQuizScore: number | null
  }>
  weeklyActivity: Array<{ weekStart: string; activeStudents: number; essaysSubmitted: number }>
}

type Svc = ReturnType<typeof createServiceRoleClient>

/**
 * Every row of one per-pupil activity table, for these pupils, paged.
 * `pupilColumn` holds the pupil's auth uuid; the table must have an `id`
 * primary key, used to keep pages stable.
 */
async function readActivity<T>(
  svc: Svc,
  table: string,
  columns: string,
  pupilColumn: string,
  tsColumn: string,
  pupilIds: string[],
  extra?: { schoolId: string },
): Promise<T[]> {
  const out: T[] = []
  for (const chunk of chunks(pupilIds, IN_CHUNK)) {
    out.push(
      ...(await readAllPages<T>(table, (from, to) => {
        let q = svc
          .from(table)
          .select(columns, { count: 'exact' })
          .in(pupilColumn, chunk)
          .not(tsColumn, 'is', null)
        if (extra) q = q.eq('school_id', extra.schoolId)
        // `id` (each table's primary key) last, so rows that share a
        // timestamp still sort the same way on every page.
        return q.order(tsColumn, { ascending: false }).order('id').range(from, to)
      })),
    )
  }
  return out
}

function mean(xs: number[]): number | null {
  return xs.length > 0 ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : null
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in required')

    const limit = await rateLimit(`school-analytics:${user.id}`, { limit: 20, windowSeconds: 60 })
    if (!limit.success) return rateLimitResponse(limit.resetAt)

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return errorResponse(resolved.error, resolved.status)
    const { scope } = resolved

    const period = new URL(request.url).searchParams.get('period') ?? 'month'
    const now = Date.now()
    const periodStart = now - (PERIOD_DAYS[period] ?? PERIOD_DAYS.month) * DAY

    const classes = scope.classes.filter((c) => c.is_active !== false)

    // ── Who is in scope ─────────────────────────────────────────────────────
    const roster: Array<{ class_id: string; student_id: string }> = []
    for (const chunk of chunks(
      classes.map((c) => c.id),
      IN_CHUNK,
    )) {
      const { data, error } = await svc
        .from('class_students')
        .select('class_id, student_id')
        .in('class_id', chunk)
        .eq('is_active', true)
      if (error) throw new ScopedReadError('class_students', error.message)
      roster.push(...((data ?? []) as typeof roster))
    }

    const pupilIds = new Set(roster.map((r) => r.student_id))
    const memberActive = new Map<string, string>()
    let totalTeachers: number | null = null
    const staffNames = new Map<string, string | null>()

    if (scope.wholeSchool) {
      const [members, staffRes] = await Promise.all([
        getSchoolStudents(svc, scope.schoolId, { acceptedOnly: true }),
        svc
          .from('school_members')
          .select('id, full_name, email, role')
          .eq('school_id', scope.schoolId)
          .eq('invite_status', 'accepted')
          .in('role', [...STAFF_ROLES]),
      ])
      if (staffRes.error) throw new ScopedReadError('school_members', staffRes.error.message)
      for (const m of members) {
        if (!m.user_id) continue
        pupilIds.add(m.user_id)
        if (m.last_active_at) memberActive.set(m.user_id, m.last_active_at)
      }
      const staff = (staffRes.data ?? []) as Array<{
        id: string
        full_name: string | null
        email: string | null
        role: string
      }>
      totalTeachers = staff.length
      for (const s of staff) staffNames.set(s.id, s.full_name?.trim() || s.email || null)
    }

    const ids = Array.from(pupilIds)

    // ── What they did ───────────────────────────────────────────────────────
    const [progress, practice, attempts, essays, identities, essaysThisWeek] = await Promise.all([
      readActivity<{ user_id: string; completed_at: string; quiz_score: number | null }>(
        svc,
        'module_progress',
        'user_id, completed_at, quiz_score',
        'user_id',
        'completed_at',
        ids,
      ),
      readActivity<{ user_id: string; created_at: string }>(
        svc,
        'practice_sessions',
        'user_id, created_at',
        'user_id',
        'created_at',
        ids,
      ),
      readActivity<{ user_id: string; attempted_at: string }>(
        svc,
        'assessment_attempts',
        'user_id, attempted_at',
        'user_id',
        'attempted_at',
        ids,
      ),
      readActivity<{ student_id: string; submitted_at: string; class_id: string | null }>(
        svc,
        'marking_submissions',
        'student_id, submitted_at, class_id',
        'student_id',
        'submitted_at',
        ids,
        { schoolId: scope.schoolId },
      ),
      readPupilIdentities(svc, scope.schoolId, ids),
      countScopedSubmissions(svc, scope, { since: new Date(now - 7 * DAY).toISOString() }),
    ])

    // Every timestamp of activity, per pupil.
    const events: Array<{ id: string; at: number }> = [
      ...progress.map((r) => ({ id: r.user_id, at: Date.parse(r.completed_at) })),
      ...practice.map((r) => ({ id: r.user_id, at: Date.parse(r.created_at) })),
      ...attempts.map((r) => ({ id: r.user_id, at: Date.parse(r.attempted_at) })),
      ...essays.map((r) => ({ id: r.student_id, at: Date.parse(r.submitted_at) })),
      ...Array.from(memberActive.entries()).map(([id, at]) => ({ id, at: Date.parse(at) })),
    ].filter((e) => Number.isFinite(e.at))

    const last = new Map<string, number>()
    for (const e of events) if (e.at > (last.get(e.id) ?? -Infinity)) last.set(e.id, e.at)

    // Quiz scores: all-time per pupil for risk; within the period for the headline.
    const quizAll = new Map<string, number[]>()
    const quizPeriod: number[] = []
    for (const r of progress) {
      if (typeof r.quiz_score !== 'number') continue
      const list = quizAll.get(r.user_id) ?? []
      list.push(r.quiz_score)
      quizAll.set(r.user_id, list)
      if (Date.parse(r.completed_at) >= periodStart) quizPeriod.push(r.quiz_score)
    }

    // ── At risk ─────────────────────────────────────────────────────────────
    const flagged: AnalyticsResponse['atRisk']['pupils'] = []
    for (const id of ids) {
      const issues: PupilIssue[] = []
      const at = last.get(id)
      if (at === undefined) issues.push({ kind: 'no_activity' })
      else {
        const days = Math.floor((now - at) / DAY)
        if (days >= INACTIVE_DAYS) issues.push({ kind: 'inactive', days })
      }
      const avg = mean(quizAll.get(id) ?? [])
      if (avg !== null && avg < LOW_QUIZ_AVERAGE) {
        issues.push({ kind: 'low_quiz_average', percent: avg })
      }
      if (issues.length === 0) continue
      const who = identities.get(id)
      flagged.push({
        userId: id,
        name: who?.name ?? who?.email ?? null,
        yearGroup: who?.yearGroup ?? null,
        lastActiveAt: at === undefined ? null : new Date(at).toISOString(),
        issues,
      })
    }
    // Longest without activity first; never-active pupils before them.
    flagged.sort((a, b) => (a.lastActiveAt ?? '').localeCompare(b.lastActiveAt ?? ''))

    // ── Year groups ─────────────────────────────────────────────────────────
    const flaggedIds = new Set(flagged.map((f) => f.userId))
    const byYear = new Map<string | null, string[]>()
    for (const id of ids) {
      const yg = identities.get(id)?.yearGroup ?? null
      byYear.set(yg, [...(byYear.get(yg) ?? []), id])
    }
    const yearGroupStats = Array.from(byYear.entries())
      .map(([yearGroup, members]) => {
        const scores = members.flatMap((id) => quizAll.get(id) ?? [])
        return {
          yearGroup,
          studentCount: members.length,
          averageQuizScore: mean(scores),
          quizzesCompleted: scores.length,
          atRiskCount: members.filter((id) => flaggedIds.has(id)).length,
        }
      })
      .sort((a, b) => (a.yearGroup ?? '~').localeCompare(b.yearGroup ?? '~'))

    // ── Classes ─────────────────────────────────────────────────────────────
    const classStats = classes
      .map((c) => {
        const members = Array.from(
          new Set(roster.filter((r) => r.class_id === c.id).map((r) => r.student_id)),
        )
        return {
          classId: c.id,
          className: c.name,
          teacherName: c.teacher_id ? (staffNames.get(c.teacher_id) ?? null) : null,
          studentCount: members.length,
          averageQuizScore: mean(members.flatMap((id) => quizAll.get(id) ?? [])),
        }
      })
      .sort(
        (a, b) =>
          (b.averageQuizScore ?? -1) - (a.averageQuizScore ?? -1) ||
          (a.className ?? '').localeCompare(b.className ?? ''),
      )

    // ── Last eight weeks ────────────────────────────────────────────────────
    // A pupil's activity anywhere counts towards "active"; an essay counts
    // towards a teacher's figures only if it was written in their class.
    const classIds = new Set(scope.classes.map((c) => c.id))
    const essaysInScope = scope.wholeSchool
      ? essays
      : essays.filter((r) => r.class_id !== null && classIds.has(r.class_id))
    const weeklyActivity: AnalyticsResponse['weeklyActivity'] = []
    for (let i = WEEKS - 1; i >= 0; i--) {
      const start = now - (i + 1) * 7 * DAY
      const end = now - i * 7 * DAY
      weeklyActivity.push({
        weekStart: new Date(start).toISOString().split('T')[0],
        activeStudents: new Set(
          events.filter((e) => e.at >= start && e.at < end && pupilIds.has(e.id)).map((e) => e.id),
        ).size,
        essaysSubmitted: essaysInScope.filter((r) => {
          const at = Date.parse(r.submitted_at)
          return at >= start && at < end
        }).length,
      })
    }

    const body: AnalyticsResponse = {
      scope: scope.wholeSchool ? 'school' : 'teacher',
      period,
      totalStudents: ids.length,
      totalTeachers,
      totalClasses: classes.length,
      activeStudentsThisWeek: ids.filter((id) => (last.get(id) ?? -Infinity) >= now - 7 * DAY)
        .length,
      essaysSubmittedThisWeek: essaysThisWeek,
      averageQuizScore: mean(quizPeriod),
      atRisk: { total: flagged.length, pupils: flagged.slice(0, 100) },
      yearGroupStats,
      classStats,
      weeklyActivity,
    }
    return NextResponse.json(body)
  } catch (err) {
    console.error('[school/analytics GET] failed', err)
    return serverErrorResponse('We could not load your school analytics. Please try again.')
  }
}
