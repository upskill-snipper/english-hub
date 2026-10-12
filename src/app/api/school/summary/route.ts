// ─── The school portal's front page, in one scoped read ────────────────────
// GET /api/school/summary
//
// WHY THIS EXISTS (12 October 2026)
// /school/dashboard and /school/onboarding read school_members, schools and
// classes straight from the browser with the signed-in user's Supabase
// session, so row-level security decided what they saw. Production RLS on
// those tables was recursing (42P17): every one of those reads failed, the
// pages treated the failure as "no data", and a school's dashboard showed no
// pupils, no classes and a setup checklist telling them to start again. The
// dashboard also counted assignments from a table that has never existed
// (`assignments`; see src/__tests__/every-queried-table-is-declared.test.ts).
//
// This route reads with the service role and scopes by membership
// (../_lib/staff-scope.ts), the same rule as the marking queue:
//   * admin and head_of_department: the whole school;
//   * teacher: the classes they teach.
// Any failed read answers 500. Nothing is counted as zero because it could
// not be read.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { resolveSchoolAccessType, type SchoolAccess } from '@/lib/school-access'
import { getSchoolStudents } from '@/lib/school-students'
import {
  errorResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import {
  IN_CHUNK,
  STAFF_ROLES,
  chunks,
  resolveStaffScope,
  type StaffRole,
} from '../_lib/staff-scope'
import { ScopedReadError, countScopedSubmissions } from '../_lib/reads'
import { AWAITING_REVIEW_STATUSES, NOT_YET_MARKED_STATUSES } from '../_lib/objectives'

export const dynamic = 'force-dynamic'

export interface SchoolSummary {
  school: {
    id: string
    name: string
    accessType: SchoolAccess['accessType']
    accessUntil: string | null
  }
  viewer: { role: StaffRole; scope: 'school' | 'teacher' }
  counts: {
    /** The school's pupils for whole-school staff; pupils in their classes for a teacher. */
    pupils: number
    /** Accepted staff, whole-school viewers only. */
    staff: number | null
    /** Active classes in scope. */
    classes: number
  }
  /** Active classes in scope, by name. */
  classes: Array<{
    id: string
    name: string | null
    yearGroup: string | null
    examBoard: string | null
    pupils: number
  }>
  marking: {
    awaitingReview: number
    notYetMarked: number
    submittedLast7Days: number
    reviewedLast7Days: number
  }
  /** What a new school still has to do. Whole-school viewers only. */
  setup: {
    hasStaff: boolean
    hasPupils: boolean
    hasClasses: boolean
    hasEnrolments: boolean
  } | null
  /** Teachers and heads of department, for assigning a class. Whole-school viewers only. */
  staffList: Array<{ id: string; name: string | null; role: StaffRole }> | null
}

export async function GET(_req: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in required')

    const limit = await rateLimit(`school-summary:${user.id}`, { limit: 60, windowSeconds: 60 })
    if (!limit.success) return rateLimitResponse(limit.resetAt)

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return errorResponse(resolved.error, resolved.status)
    const { scope } = resolved

    const activeClasses = scope.classes.filter((c) => c.is_active !== false)
    const weekAgo = new Date(Date.now() - 7 * 86_400_000).toISOString()

    const [
      schoolRes,
      rosterRows,
      awaitingReview,
      notYetMarked,
      submittedLast7Days,
      reviewedLast7Days,
    ] = await Promise.all([
      svc
        .from('schools')
        .select('id, name, access_type, access_until, subscription_status')
        .eq('id', scope.schoolId)
        .maybeSingle(),
      readRoster(
        svc,
        activeClasses.map((c) => c.id),
      ),
      countScopedSubmissions(svc, scope, { statuses: AWAITING_REVIEW_STATUSES }),
      countScopedSubmissions(svc, scope, { statuses: NOT_YET_MARKED_STATUSES }),
      countScopedSubmissions(svc, scope, { since: weekAgo }),
      countScopedSubmissions(svc, scope, { reviewedSince: weekAgo }),
    ])
    if (schoolRes.error) throw new ScopedReadError('schools', schoolRes.error.message)
    const school = schoolRes.data as {
      id: string
      name: string
      access_type: string | null
      access_until: string | null
      subscription_status: string | null
    } | null
    if (!school) throw new ScopedReadError('schools', "the member's school has no row")

    const pupilsByClass = new Map<string, Set<string>>()
    for (const r of rosterRows) {
      const set = pupilsByClass.get(r.class_id) ?? new Set<string>()
      set.add(r.student_id)
      pupilsByClass.set(r.class_id, set)
    }

    let pupils: number
    let staff: number | null = null
    let setup: SchoolSummary['setup'] = null
    let staffList: SchoolSummary['staffList'] = null

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
      const staffRows = (staffRes.data ?? []) as Array<{
        id: string
        full_name: string | null
        email: string | null
        role: StaffRole
      }>
      // A pupil enrolled in a class but holding no school membership still
      // counts: the class roster is the evidence they are this school's.
      const enrolled = new Set(rosterRows.map((r) => r.student_id))
      const all = new Set([
        ...members.map((m) => m.user_id).filter((id): id is string => !!id),
        ...enrolled,
      ])
      pupils = all.size
      staff = staffRows.length
      staffList = staffRows
        .filter((s) => s.role === 'teacher' || s.role === 'head_of_department')
        .map((s) => ({ id: s.id, name: s.full_name?.trim() || s.email || null, role: s.role }))
      setup = {
        hasStaff: staffRows.some((s) => s.role !== 'admin'),
        hasPupils: all.size > 0,
        hasClasses: activeClasses.length > 0,
        hasEnrolments: enrolled.size > 0,
      }
    } else {
      // A teacher's pupils are the pupils in the active classes they teach.
      pupils = new Set(rosterRows.map((r) => r.student_id)).size
    }

    const body: SchoolSummary = {
      school: {
        id: school.id,
        name: school.name,
        accessType: resolveSchoolAccessType(school),
        accessUntil: school.access_until,
      },
      viewer: { role: scope.role, scope: scope.wholeSchool ? 'school' : 'teacher' },
      counts: { pupils, staff, classes: activeClasses.length },
      classes: activeClasses
        .map((c) => ({
          id: c.id,
          name: c.name,
          yearGroup: c.year_group,
          examBoard: c.exam_board,
          pupils: pupilsByClass.get(c.id)?.size ?? 0,
        }))
        .sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')),
      marking: { awaitingReview, notYetMarked, submittedLast7Days, reviewedLast7Days },
      setup,
      staffList,
    }
    return NextResponse.json(body)
  } catch (err) {
    console.error('[school/summary GET] failed', err)
    return serverErrorResponse('We could not load your school summary. Please try again.')
  }
}

/** Active class enrolments for these classes. Throws on a failed read. */
async function readRoster(
  svc: ReturnType<typeof createServiceRoleClient>,
  classIds: string[],
): Promise<Array<{ class_id: string; student_id: string }>> {
  const out: Array<{ class_id: string; student_id: string }> = []
  for (const chunk of chunks(classIds, IN_CHUNK)) {
    const { data, error } = await svc
      .from('class_students')
      .select('class_id, student_id')
      .in('class_id', chunk)
      .eq('is_active', true)
    if (error) throw new ScopedReadError('class_students', error.message)
    out.push(...((data ?? []) as Array<{ class_id: string; student_id: string }>))
  }
  return out
}
