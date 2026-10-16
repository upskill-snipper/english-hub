import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { classInScope, pupilsOfSchool, resolveStaffScope } from '../../../_lib/staff-scope'

export const dynamic = 'force-dynamic'

// ─── Who may use this route: staff only ──────────────────────────────────────
//
// FIXED 12 OCTOBER 2026. Every handler here called verifySchoolMember with no
// roles, so a PUPIL with a school_members row could list a class's pupils
// (names, emails, progress), add any account to any class in the school, and
// remove pupils from classes. That mattered more from that day: an active
// enrolment in an active class now makes someone a school pupil
// (src/lib/school-entitlement.ts), which opens AI marking paid for by the
// school and, where the school has recorded its AI authorisation, stands in
// for a parent's consent. Enrolment is therefore a staff act, matching the
// class_students access rules in 20261012_school_access_rules.sql. Every
// caller of this route is a /school portal page, which admits staff only.
//
// FIXED AGAIN 16 OCTOBER 2026, two more holes:
//   * the class only had to belong to the caller's school, so ANY teacher
//     could list, enrol into and remove from ANY class. Now the class must be
//     in the caller's scope (their own class, or any for whole-school staff);
//   * enrolment took ANY account on the platform, by id or by an email looked
//     up across every profile. Enrolment makes someone a pupil of a live
//     school (school-paid AI, and the school's consent basis), so a teacher
//     could pull a stranger's child into a class and read their work. Only the
//     school's own pupils may be enrolled now, and the email path looks among
//     them only (pupilsOfSchool in ../../../_lib/staff-scope.ts).

/**
 * The gate every handler here shares: staff, and the class in scope. A class
 * outside scope is "not found", so its existence is not confirmed.
 */
async function staffWithClass(
  userId: string,
  classId: string,
): Promise<
  | { ok: true; member: { school_id: string; id: string; role: string } }
  | { ok: false; response: NextResponse }
> {
  const resolved = await resolveStaffScope(createServiceRoleClient(), userId)
  if (!resolved.ok) {
    return {
      ok: false,
      response: NextResponse.json({ error: resolved.error }, { status: resolved.status }),
    }
  }
  if (!classInScope(resolved.scope, classId)) {
    return { ok: false, response: NextResponse.json({ error: 'Class not found' }, { status: 404 }) }
  }
  const { schoolId, memberId, role } = resolved.scope
  return { ok: true, member: { school_id: schoolId, id: memberId, role } }
}

function getTrajectory(
  scores: number[],
): 'improving' | 'declining' | 'stable' | 'insufficient_data' {
  if (scores.length < 3) return 'insufficient_data'
  const recent = scores.slice(-3)
  const earlier = scores.slice(-6, -3)
  if (earlier.length === 0) return 'insufficient_data'
  const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length
  const earlierAvg = earlier.reduce((a, b) => a + b, 0) / earlier.length
  const diff = recentAvg - earlierAvg
  if (diff > 5) return 'improving'
  if (diff < -5) return 'declining'
  return 'stable'
}

export async function GET(request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-class-students:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { classId } = params
    const gate = await staffWithClass(user.id, classId)
    if (!gate.ok) return gate.response
    const member = gate.member

    const admin = createServiceRoleClient()
    const { data: classStudents } = await admin
      .from('class_students')
      .select('student_id, joined_at')
      .eq('class_id', classId)
      .eq('is_active', true)

    const studentIds = (classStudents || []).map((s: { student_id: string }) => s.student_id)

    if (studentIds.length === 0) {
      return NextResponse.json({ students: [] })
    }

    const [profilesResult, progressResult, practiceResult] = await Promise.all([
      admin.from('profiles').select('id, email, full_name, year_group').in('id', studentIds),
      admin
        .from('module_progress')
        .select('user_id, module_id, quiz_score, completed, time_spent_seconds, completed_at')
        .in('user_id', studentIds),
      admin.from('practice_sessions').select('user_id, created_at').in('user_id', studentIds),
    ])

    // Aggregate progress by student
    const progressByStudent = new Map<
      string,
      Array<{
        module_id: string
        quiz_score: number | null
        completed: boolean
        time_spent_seconds: number
        completed_at: string | null
      }>
    >()
    for (const p of (progressResult.data || []) as Array<{
      user_id: string
      module_id: string
      quiz_score: number | null
      completed: boolean
      time_spent_seconds: number
      completed_at: string | null
    }>) {
      if (!progressByStudent.has(p.user_id)) progressByStudent.set(p.user_id, [])
      progressByStudent.get(p.user_id)!.push(p)
    }

    // Practice count by student
    const practiceByStudent = new Map<string, number>()
    for (const p of (practiceResult.data || []) as Array<{ user_id: string }>) {
      practiceByStudent.set(p.user_id, (practiceByStudent.get(p.user_id) || 0) + 1)
    }

    const students = (profilesResult.data || []).map(
      (profile: {
        id: string
        email: string
        full_name: string | null
        year_group: string | null
      }) => {
        const studentProgress = progressByStudent.get(profile.id) || []
        const joinInfo = (classStudents || []).find(
          (s: { student_id: string }) => s.student_id === profile.id,
        )

        const scores = studentProgress
          .filter((p) => p.quiz_score !== null && p.completed_at)
          .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime())
          .map((p) => p.quiz_score as number)

        const completedModules = studentProgress.filter((p) => p.completed).length
        const avgScore =
          scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
        const totalTime = studentProgress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0)
        const lastActivity = studentProgress
          .filter((p) => p.completed_at)
          .sort(
            (a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime(),
          )[0]

        const trajectory = getTrajectory(scores)

        return {
          student_id: profile.id,
          full_name: profile.full_name,
          email: profile.email,
          year_group: profile.year_group,
          joined_at: joinInfo?.joined_at,
          modules_completed: completedModules,
          total_modules_started: studentProgress.length,
          avg_quiz_score: avgScore,
          completion_rate:
            studentProgress.length > 0
              ? Math.round((completedModules / studentProgress.length) * 100)
              : 0,
          time_spent_seconds: totalTime,
          practice_sessions: practiceByStudent.get(profile.id) || 0,
          last_activity: lastActivity?.completed_at || null,
          trajectory,
        }
      },
    )

    return NextResponse.json({ students })
  } catch (error) {
    console.error('Class students error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-class-add-student:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { classId } = params
    const gate = await staffWithClass(user.id, classId)
    if (!gate.ok) return gate.response
    const member = gate.member

    let body: { studentIds?: string[]; studentId?: string; email?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    // Accept bulk studentIds (spec), falling back to single studentId or legacy email
    let studentIds: string[] = []

    if (body.studentIds !== undefined) {
      if (!Array.isArray(body.studentIds) || body.studentIds.length === 0) {
        return NextResponse.json({ error: 'studentIds must be a non-empty array' }, { status: 422 })
      }
      if (body.studentIds.some((id) => typeof id !== 'string' || id.trim().length === 0)) {
        return NextResponse.json(
          { error: 'All studentIds must be non-empty strings' },
          { status: 422 },
        )
      }
      studentIds = body.studentIds.map((id) => id.trim())
    } else if (body.studentId && typeof body.studentId === 'string') {
      studentIds = [body.studentId.trim()]
    } else if (body.email && typeof body.email === 'string') {
      // By email, as the class page sends it, but only among this school's
      // pupils: an address is looked up in the school's own pupil records and
      // in the profiles of accounts that are pupils of this school, never
      // across the platform.
      const email = body.email.toLowerCase().trim()
      const { data: byMember } = await admin
        .from('school_members')
        .select('user_id')
        .eq('school_id', member.school_id)
        .eq('role', 'student')
        .eq('email', email)
        .not('user_id', 'is', null)
        .limit(1)
      let found = ((byMember ?? []) as Array<{ user_id: string | null }>)[0]?.user_id ?? null
      if (!found) {
        const { data: profiles } = await admin
          .from('profiles')
          .select('id')
          .eq('email', email)
          .limit(1)
        const candidate = ((profiles ?? []) as Array<{ id: string }>)[0]?.id ?? null
        if (
          candidate &&
          (await pupilsOfSchool(admin, member.school_id, [candidate])).has(candidate)
        ) {
          found = candidate
        }
      }
      if (!found) {
        return NextResponse.json(
          { error: 'No pupil of your school has that email address' },
          { status: 404 },
        )
      }
      studentIds = [found]
    } else {
      return NextResponse.json({ error: 'studentIds is required' }, { status: 422 })
    }

    // Dedup incoming IDs so duplicates in the request body don't get double-counted.
    const requestedIds = Array.from(new Set(studentIds))

    // Only this school's own pupils can be enrolled. Anyone else is refused
    // by name in `errors`, never silently dropped.
    const ownPupils = await pupilsOfSchool(admin, member.school_id, requestedIds)
    const notOurs = requestedIds.filter((id) => !ownPupils.has(id))
    const uniqueStudentIds = requestedIds.filter((id) => ownPupils.has(id))
    if (uniqueStudentIds.length === 0) {
      return NextResponse.json(
        { error: 'Only pupils of your school can be added to a class', refused: notOurs },
        { status: 422 },
      )
    }

    // Fetch school + all class IDs in this school IN PARALLEL (2 reads).
    const [schoolResult, schoolClassesResult] = await Promise.all([
      admin.from('schools').select('seat_limit, seats_used').eq('id', member.school_id).single(),
      admin.from('classes').select('id').eq('school_id', member.school_id),
    ])

    const school = schoolResult.data
    const schoolClassIds = (schoolClassesResult.data || []).map((c: { id: string }) => c.id)

    const added: string[] = []
    const skipped: string[] = []
    const errors: string[] = notOurs.map((id) => `${id}: not a pupil of this school`)

    // ── Step 1: batched membership lookup ──
    // In a single query per predicate, find:
    //  (a) existing rows in THIS class (to decide skip vs reactivate vs insert)
    //  (b) existing active memberships anywhere in the school (so we know which
    //      students already count against seats_used)
    const [thisClassRowsResult, schoolMembershipsResult] = await Promise.all([
      admin
        .from('class_students')
        .select('id, student_id, is_active')
        .eq('class_id', classId)
        .in('student_id', uniqueStudentIds),
      schoolClassIds.length > 0
        ? admin
            .from('class_students')
            .select('student_id')
            .in('class_id', schoolClassIds)
            .in('student_id', uniqueStudentIds)
            .eq('is_active', true)
        : Promise.resolve({ data: [] as Array<{ student_id: string }> }),
    ])

    const thisClassRows = (thisClassRowsResult.data || []) as Array<{
      id: string
      student_id: string
      is_active: boolean
    }>
    const alreadyInSchoolIds = new Set(
      ((schoolMembershipsResult.data || []) as Array<{ student_id: string }>).map(
        (r) => r.student_id,
      ),
    )

    const alreadyActiveHere = new Set(
      thisClassRows.filter((r) => r.is_active).map((r) => r.student_id),
    )
    const inactiveHere = thisClassRows
      .filter((r) => !r.is_active)
      .reduce((acc, r) => {
        acc.set(r.student_id, r.id)
        return acc
      }, new Map<string, string>())

    // Partition the incoming list.
    const toReactivateIds: string[] = []
    const toReactivateRowIds: string[] = []
    const toInsertIds: string[] = []

    for (const sid of uniqueStudentIds) {
      if (alreadyActiveHere.has(sid)) {
        skipped.push(sid)
        continue
      }
      const inactiveRowId = inactiveHere.get(sid)
      if (inactiveRowId) {
        toReactivateIds.push(sid)
        toReactivateRowIds.push(inactiveRowId)
      } else {
        toInsertIds.push(sid)
      }
    }

    // The union of students being added to this class.
    const newMembershipIds = [...toReactivateIds, ...toInsertIds]

    // New-to-school: those not already counted against seats_used anywhere.
    const newToSchoolIds = newMembershipIds.filter((id) => !alreadyInSchoolIds.has(id))
    const newSeatsNeeded = newToSchoolIds.length

    // ── Step 2: seat-limit pre-check ──
    if (school && school.seats_used + newSeatsNeeded > school.seat_limit) {
      return NextResponse.json(
        {
          error: 'school seat limit reached',
          details: {
            seat_limit: school.seat_limit,
            seats_used: school.seats_used,
            seats_requested: newSeatsNeeded,
          },
        },
        { status: 422 },
      )
    }

    // Track rows we create so we can roll back atomically on seat-race failure.
    let insertedRowIds: string[] = []

    // ── Step 3: batch reactivate ──
    if (toReactivateRowIds.length > 0) {
      const { error: reactivateError } = await admin
        .from('class_students')
        .update({ is_active: true, removed_at: null, joined_at: new Date().toISOString() })
        .in('id', toReactivateRowIds)
      if (reactivateError) {
        console.error('Reactivate students error:', reactivateError)
        return NextResponse.json(
          { error: 'Failed to reactivate students', details: reactivateError.message },
          { status: 500 },
        )
      }
      added.push(...toReactivateIds)
    }

    // ── Step 4: batch insert new rows ──
    if (toInsertIds.length > 0) {
      const { data: insertedRows, error: insertError } = await admin
        .from('class_students')
        .insert(
          toInsertIds.map((id) => ({
            class_id: classId,
            student_id: id,
            is_active: true,
          })),
        )
        .select('id, student_id')

      if (insertError) {
        console.error('Bulk add students error:', insertError)
        // Roll back any reactivations we just performed, so the request is atomic.
        if (toReactivateRowIds.length > 0) {
          await admin
            .from('class_students')
            .update({ is_active: false, removed_at: new Date().toISOString() })
            .in('id', toReactivateRowIds)
        }
        return NextResponse.json(
          { error: 'Failed to add students', details: insertError.message },
          { status: 500 },
        )
      }

      insertedRowIds = ((insertedRows || []) as Array<{ id: string; student_id: string }>).map(
        (r) => r.id,
      )
      added.push(...toInsertIds)
    }

    // ── Step 5: seats_used increment (guarded against over-allocation race) ──
    if (school && newSeatsNeeded > 0) {
      // Only commit the increment if the CURRENT seats_used is still low enough
      // to accommodate our N new seats. Under concurrency, `.lt` acts as the
      // guard: row won't update if another request ate into the budget.
      const { data: updatedSchool, error: seatsError } = await admin
        .from('schools')
        .update({ seats_used: school.seats_used + newSeatsNeeded })
        .eq('id', member.school_id)
        .lt('seats_used', school.seat_limit - newSeatsNeeded + 1)
        .select('id')
        .maybeSingle()

      if (seatsError || !updatedSchool) {
        // Race lost (or write failed) - roll back the whole bulk-add atomically.
        console.error('Seats_used race lost; rolling back bulk-add', {
          seatsError,
          attempted: newSeatsNeeded,
        })

        if (insertedRowIds.length > 0) {
          await admin.from('class_students').delete().in('id', insertedRowIds)
        }
        if (toReactivateRowIds.length > 0) {
          await admin
            .from('class_students')
            .update({ is_active: false, removed_at: new Date().toISOString() })
            .in('id', toReactivateRowIds)
        }

        return NextResponse.json(
          {
            error: 'school seat limit reached (concurrent allocation). Please retry.',
          },
          { status: 409 },
        )
      }
    }

    // ── Step 6: NOTHING is written to the pupils' profiles ──
    //
    // A DEFECT, FIXED 12 OCTOBER 2026: this step wrote 'pro' to every added
    // pupil's profiles.subscription_status when the school's own
    // subscription_status was 'active' or 'trialing'. That field is one per
    // PERSON (CLAUDE.md, structural fact 2): the trial-expiry cron wiped the
    // grant after seven days with no school exception, a grant made before a
    // pupil's first sign-in never expired, and nothing took it back when the
    // school's pilot ended. Calum decided that a school pupil's access comes
    // from the school's live pilot, checked at the moment of use; the
    // class_students rows written above are what grant it, through
    // getPupilSchoolAccess in src/lib/school-entitlement.ts.

    // ── Step 7: refresh class.student_count ──
    const { count: studentCount } = await admin
      .from('class_students')
      .select('id', { count: 'exact', head: true })
      .eq('class_id', classId)
      .eq('is_active', true)

    await admin
      .from('classes')
      .update({ student_count: studentCount || 0 })
      .eq('id', classId)

    if (added.length === 0 && errors.length > 0) {
      return NextResponse.json(
        { error: 'Failed to add any students', details: errors },
        { status: 422 },
      )
    }

    return NextResponse.json({ success: true, added, skipped, errors }, { status: 201 })
  } catch (error) {
    console.error('Add student error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  props: { params: Promise<{ classId: string }> },
) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-class-remove-student:${ip}`, {
      limit: 20,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { classId } = params
    const gate = await staffWithClass(user.id, classId)
    if (!gate.ok) return gate.response
    const member = gate.member

    let body: { studentId?: string; student_id?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const student_id = body.studentId ?? body.student_id
    if (!student_id || typeof student_id !== 'string' || student_id.trim().length === 0) {
      return NextResponse.json({ error: 'studentId is required' }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    const trimmedStudentId = student_id.trim()

    // Soft delete: set is_active = false
    const { error: removeError } = await admin
      .from('class_students')
      .update({ is_active: false, removed_at: new Date().toISOString() })
      .eq('class_id', classId)
      .eq('student_id', trimmedStudentId)
      .eq('is_active', true)

    if (removeError) {
      console.error('Remove student error:', removeError)
      return NextResponse.json({ error: 'Failed to remove student' }, { status: 500 })
    }

    // Update class student_count
    const { count: studentCount } = await admin
      .from('class_students')
      .select('id', { count: 'exact', head: true })
      .eq('class_id', classId)
      .eq('is_active', true)

    await admin
      .from('classes')
      .update({ student_count: studentCount || 0 })
      .eq('id', classId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Remove student error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
