import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

async function verifyClassBelongsToSchool(classId: string, schoolId: string) {
  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('classes')
    .select('id')
    .eq('id', classId)
    .eq('school_id', schoolId)
    .single()
  return !error && !!data
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

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const { classId } = params
    if (!(await verifyClassBelongsToSchool(classId, member.school_id))) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

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

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const { classId } = params
    if (!(await verifyClassBelongsToSchool(classId, member.school_id))) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

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
      // Legacy single-by-email path
      const { data: profile } = await admin
        .from('profiles')
        .select('id')
        .eq('email', body.email.toLowerCase().trim())
        .single()
      if (!profile) {
        return NextResponse.json({ error: 'No user found with that email' }, { status: 404 })
      }
      studentIds = [profile.id]
    } else {
      return NextResponse.json({ error: 'studentIds is required' }, { status: 422 })
    }

    // Dedup incoming IDs so duplicates in the request body don't get double-counted.
    const uniqueStudentIds = Array.from(new Set(studentIds))

    // Fetch school + all class IDs in this school IN PARALLEL (2 reads).
    const [schoolResult, schoolClassesResult] = await Promise.all([
      admin
        .from('schools')
        .select('seat_limit, seats_used, subscription_status')
        .eq('id', member.school_id)
        .single(),
      admin.from('classes').select('id').eq('school_id', member.school_id),
    ])

    const school = schoolResult.data
    const schoolClassIds = (schoolClassesResult.data || []).map((c: { id: string }) => c.id)

    const added: string[] = []
    const skipped: string[] = []
    const errors: string[] = []

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
        // Race lost (or write failed) — roll back the whole bulk-add atomically.
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

    // ── Step 6: batch grant pro access ──
    const schoolSubStatus = school?.subscription_status
    if ((schoolSubStatus === 'active' || schoolSubStatus === 'trialing') && added.length > 0) {
      const { error: proError } = await admin
        .from('profiles')
        .update({ subscription_status: 'pro' })
        .in('id', added)
      if (proError) {
        // Not fatal to the enrolment — log and surface as a soft error.
        console.error('Grant pro access error:', proError)
        errors.push(`subscription_status update failed: ${proError.message}`)
      }
    }

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

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const { classId } = params
    if (!(await verifyClassBelongsToSchool(classId, member.school_id))) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

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
