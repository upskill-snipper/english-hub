// ─── Who a member of school staff may see ──────────────────────────────────
//
// WHY THIS EXISTS (12 October 2026)
// The school portal read its own tables two ways. Some routes used the
// service role; /api/school/marking used the signed-in teacher's session, so
// row-level security decided what came back. Production RLS on
// school_members, classes and class_students was recursing (42P17), every
// such read failed, and the route turned the failure into
// `{ submissions: [] }`: a teacher would have been shown "no submissions
// yet" whatever their pupils had written. Commit 003dae87 repairs the RLS,
// but the portal must not depend on it.
//
// So the portal's routes read with the service role and scope EXPLICITLY,
// here, by membership:
//
//   * admin and head_of_department see the whole school;
//   * a teacher sees the classes whose classes.teacher_id is THEIR
//     school_members.id. That is not their auth user id, and confusing the
//     two silently returns nothing (docs/system/08 section 7);
//   * anyone else, including a member of another school, sees nothing.
//
// Membership itself comes from verifySchoolMember, the check
// POST /api/marking/[submissionId]/review also uses, so the queue lists
// exactly the work its review route will let the same person act on.
//
// Every read failure is returned as a failure. None of it is turned into an
// empty result.
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'
import { verifySchoolMember } from '@/lib/school-auth'

export const STAFF_ROLES = ['admin', 'head_of_department', 'teacher'] as const
export type StaffRole = (typeof STAFF_ROLES)[number]

/**
 * The synthetic school id verifySchoolMember gives a site admin who has no
 * membership. It is not a uuid and names no school, so it can scope nothing.
 */
const SITE_ADMIN_SCHOOL_ID = '__site_admin__'

export interface ScopedClass {
  id: string
  name: string | null
  year_group: string | null
  exam_board: string | null
  is_active: boolean | null
  teacher_id: string | null
}

export interface StaffScope {
  userId: string
  schoolId: string
  /** The viewer's own school_members.id. */
  memberId: string
  /** The viewer's name as the school holds it. */
  fullName: string | null
  role: StaffRole
  /** True for admin and head of department. */
  wholeSchool: boolean
  /**
   * Every class the viewer may see: all of the school's for whole-school
   * staff, the classes they teach for a teacher. Inactive classes are
   * included, so work written in a class that was later archived stays with
   * the teacher who set it.
   */
  classes: ScopedClass[]
}

export type ScopeResult =
  | { ok: true; scope: StaffScope }
  | { ok: false; status: 403 | 500; error: string }

/** Resolve what this user may see. Never throws. */
export async function resolveStaffScope(svc: SupabaseClient, userId: string): Promise<ScopeResult> {
  let member: { id?: unknown; school_id?: unknown; role?: unknown; full_name?: unknown } | null
  try {
    member = (await verifySchoolMember(userId, [...STAFF_ROLES])) as typeof member
  } catch (err) {
    console.error('[school/staff-scope] membership check failed', err)
    return { ok: false, status: 500, error: 'We could not check your school membership.' }
  }

  if (!member) {
    return { ok: false, status: 403, error: 'This is for school staff only.' }
  }

  const schoolId = typeof member.school_id === 'string' ? member.school_id : ''
  const memberId = typeof member.id === 'string' ? member.id : ''
  const role = member.role as StaffRole

  if (schoolId === SITE_ADMIN_SCHOOL_ID) {
    return {
      ok: false,
      status: 403,
      error:
        'This account is a platform administrator, not a member of a school, so it has no school to show.',
    }
  }
  if (!schoolId || !memberId || !(STAFF_ROLES as readonly string[]).includes(role)) {
    return { ok: false, status: 403, error: 'This is for school staff only.' }
  }

  const wholeSchool = role === 'admin' || role === 'head_of_department'

  let query = svc
    .from('classes')
    .select('id, name, year_group, exam_board, is_active, teacher_id')
    .eq('school_id', schoolId)
  if (!wholeSchool) query = query.eq('teacher_id', memberId)

  const { data, error } = await query
  if (error) {
    console.error('[school/staff-scope] classes read failed', error)
    return { ok: false, status: 500, error: 'We could not read your classes.' }
  }

  return {
    ok: true,
    scope: {
      userId,
      schoolId,
      memberId,
      fullName: typeof member.full_name === 'string' ? member.full_name : null,
      role,
      wholeSchool,
      classes: (data ?? []) as ScopedClass[],
    },
  }
}

/** Ids of the classes in scope. */
export function scopedClassIds(scope: StaffScope): string[] {
  return scope.classes.map((c) => c.id)
}

/**
 * Is this class one the viewer may see or change? A teacher's own class, or
 * any class of the school for whole-school staff.
 *
 * WHY (16 October 2026). Several routes asked only whether a class belonged
 * to the caller's school, so any teacher could read or change any class: list
 * its pupils, enrol and remove them, read its analytics, set its assignments.
 * A class outside scope is answered as not found, so its existence is not
 * confirmed to someone who may not see it.
 */
export function classInScope(scope: StaffScope, classId: string): ScopedClass | null {
  return scope.classes.find((c) => c.id === classId) ?? null
}

/**
 * Which of these accounts are pupils of this school: a school_members row with
 * role 'student' (bulk upload), or a school_students row that has not been
 * removed (join code).
 *
 * WHY (16 October 2026). Enrolling an account in a class makes it a pupil of
 * a live school: AI marking paid for by the school and, where the school has
 * recorded its AI authorisation, a basis that stands in for a parent's
 * consent (src/lib/consent-check.ts). The class route enrolled ANY account on
 * the platform, by id or by an email looked up across every profile, so a
 * teacher could pull a stranger's child into their class and read their work.
 * Only the school's own pupils may now be enrolled, and the email path looks
 * only among them. Throws on a failed read.
 */
export async function pupilsOfSchool(
  svc: SupabaseClient,
  schoolId: string,
  userIds: readonly string[],
): Promise<Set<string>> {
  const out = new Set<string>()
  for (const chunk of chunks(userIds, IN_CHUNK)) {
    const [members, joined] = await Promise.all([
      svc
        .from('school_members')
        .select('user_id')
        .eq('school_id', schoolId)
        .eq('role', 'student')
        .in('user_id', chunk),
      svc
        .from('school_students')
        .select('user_id')
        .eq('school_id', schoolId)
        .neq('status', 'removed')
        .in('user_id', chunk),
    ])
    if (members.error) throw new Error(`school_members read failed: ${members.error.message}`)
    if (joined.error) throw new Error(`school_students read failed: ${joined.error.message}`)
    for (const r of (members.data ?? []) as Array<{ user_id: string | null }>) {
      if (r.user_id) out.add(r.user_id)
    }
    for (const r of (joined.data ?? []) as Array<{ user_id: string | null }>) {
      if (r.user_id) out.add(r.user_id)
    }
  }
  return out
}

/**
 * May this viewer see this submission? The rule the queries below apply,
 * stated once for single-row reads.
 */
export function canSeeSubmission(
  scope: StaffScope,
  row: { school_id: string | null; class_id: string | null },
): boolean {
  if (row.school_id !== scope.schoolId) return false
  if (scope.wholeSchool) return true
  return row.class_id !== null && scopedClassIds(scope).includes(row.class_id)
}

/**
 * The pupils this viewer may look at individually: those actively enrolled
 * in a class in scope. For whole-school staff, pupils who hold a school
 * membership but sit in no class yet are added by the caller.
 */
export async function readScopedPupilIds(
  svc: SupabaseClient,
  scope: StaffScope,
): Promise<string[]> {
  const ids = scopedClassIds(scope)
  if (ids.length === 0) return []
  const out = new Set<string>()
  for (const chunk of chunks(ids, IN_CHUNK)) {
    const { data, error } = await svc
      .from('class_students')
      .select('student_id')
      .in('class_id', chunk)
      .eq('is_active', true)
    if (error) throw new Error(`class_students read failed: ${error.message}`)
    for (const row of (data ?? []) as Array<{ student_id: string }>) out.add(row.student_id)
  }
  return Array.from(out)
}

/**
 * May this viewer open this pupil's own page?
 *
 *   * a teacher: the pupil is actively enrolled in a class they teach;
 *   * admin or head of department: the pupil is enrolled in any of the
 *     school's classes, or holds the school's pupil membership without a
 *     class yet (school_members role 'student', or a join-code
 *     school_students row that has not been removed).
 *
 * Throws on a failed read; the caller answers 500 rather than "not found".
 */
export async function canViewPupil(
  svc: SupabaseClient,
  scope: StaffScope,
  pupilId: string,
): Promise<boolean> {
  for (const chunk of chunks(scopedClassIds(scope), IN_CHUNK)) {
    const { data, error } = await svc
      .from('class_students')
      .select('class_id')
      .eq('student_id', pupilId)
      .eq('is_active', true)
      .in('class_id', chunk)
      .limit(1)
    if (error) throw new Error(`class_students read failed: ${error.message}`)
    if ((data ?? []).length > 0) return true
  }
  if (!scope.wholeSchool) return false

  const [members, joined] = await Promise.all([
    svc
      .from('school_members')
      .select('user_id')
      .eq('school_id', scope.schoolId)
      .eq('role', 'student')
      .eq('user_id', pupilId)
      .limit(1),
    svc
      .from('school_students')
      .select('user_id')
      .eq('school_id', scope.schoolId)
      .eq('user_id', pupilId)
      .neq('status', 'removed')
      .limit(1),
  ])
  if (members.error) throw new Error(`school_members read failed: ${members.error.message}`)
  if (joined.error) throw new Error(`school_students read failed: ${joined.error.message}`)
  return (members.data ?? []).length > 0 || (joined.data ?? []).length > 0
}

/**
 * PostgREST reads go out as GET requests with the filter in the URL. An
 * `in` list of a few thousand uuids makes a URL the server refuses, and the
 * refusal comes back as an error, so lists are read in slices.
 */
export const IN_CHUNK = 150

export function chunks<T>(items: readonly T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size))
  return out
}
