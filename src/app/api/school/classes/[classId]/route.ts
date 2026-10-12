// GET / PATCH / DELETE /api/school/classes/[classId]
//
// SCOPED 12 OCTOBER 2026:
//   * GET admitted any member of the school, so a pupil holding a
//     school_members row could read a class's whole roster, with every
//     classmate's email address. It is now for staff only, and a teacher
//     still sees only a class they teach.
//   * PATCH let any member, a pupil included, rename any class in the school
//     or reassign its teacher, which is also how one teacher could have made
//     another teacher's class, and its pupils' essays, their own. Now an
//     admin or head of department may edit any class; a teacher may edit
//     only a class they teach, and may not reassign it.
//   * Reads that fail answer 500 instead of an empty roster.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { readAllPages } from '../../_lib/reads'

export const dynamic = 'force-dynamic'

const STAFF = ['admin', 'head_of_department', 'teacher']

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

export async function GET(request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-class-detail:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const member = await verifySchoolMember(user.id, STAFF)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: school staff only' }, { status: 403 })
    }

    const { classId } = params
    const admin = createServiceRoleClient()

    const { data: classData, error: classError } = await admin
      .from('classes')
      .select('*')
      .eq('id', classId)
      .eq('school_id', member.school_id)
      .single()

    // Teachers may only access classes they are assigned to
    if (
      !classError &&
      classData &&
      member.role === 'teacher' &&
      classData.teacher_id !== member.id
    ) {
      return NextResponse.json(
        { error: 'Forbidden: you are not assigned to this class' },
        { status: 403 },
      )
    }

    if (classError || !classData) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    // Get students in this class
    const { data: classStudents, error: rosterError } = await admin
      .from('class_students')
      .select('student_id, joined_at')
      .eq('class_id', classId)
      .eq('is_active', true)
    if (rosterError) {
      console.error('Class roster read failed:', rosterError)
      return NextResponse.json({ error: 'Failed to read the class' }, { status: 500 })
    }

    const studentIds = (classStudents || []).map((s: { student_id: string }) => s.student_id)

    if (studentIds.length === 0) {
      return NextResponse.json({
        class: classData,
        students: [],
        student_count: 0,
      })
    }

    // Progress, practice and certificates are paged: a class of thirty can
    // pass PostgREST's 1,000-row cap, which truncates without an error. A
    // failed page throws, and the handler answers 500.
    const paged = <T>(table: string, columns: string, orderBy: string[]) =>
      readAllPages<T>(table, (from, to) => {
        let q = admin.from(table).select(columns, { count: 'exact' }).in('user_id', studentIds)
        for (const col of orderBy) q = q.order(col)
        return q.range(from, to)
      })
    type ProgressRow = {
      user_id: string
      module_id: string
      course_id: string
      quiz_score: number | null
      completed: boolean
      time_spent_seconds: number
      completed_at: string | null
    }
    const [profilesResult, progressRows, practiceRows, certRows] = await Promise.all([
      admin
        .from('profiles')
        .select('id, email, full_name, year_group, exam_board')
        .in('id', studentIds),
      paged<ProgressRow>(
        'module_progress',
        'user_id, module_id, course_id, quiz_score, completed, time_spent_seconds, completed_at',
        ['user_id', 'module_id'],
      ),
      paged<{ user_id: string }>('practice_sessions', 'user_id', ['id']),
      paged<{ user_id: string }>('certificates', 'user_id', ['id']),
    ])
    if (profilesResult.error) {
      console.error('Class profiles read failed:', profilesResult.error)
      return NextResponse.json({ error: 'Failed to read the class' }, { status: 500 })
    }
    const progressResult = { data: progressRows }
    const practiceResult = { data: practiceRows }
    const certsResult = { data: certRows }

    // Aggregate progress by student
    const progressByStudent = new Map<
      string,
      Array<{
        module_id: string
        course_id: string
        quiz_score: number | null
        completed: boolean
        time_spent_seconds: number
        completed_at: string | null
      }>
    >()
    for (const p of (progressResult.data || []) as Array<{
      user_id: string
      module_id: string
      course_id: string
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

    // Certificates count by student
    const certsByStudent = new Map<string, number>()
    for (const c of (certsResult.data || []) as Array<{ user_id: string }>) {
      certsByStudent.set(c.user_id, (certsByStudent.get(c.user_id) || 0) + 1)
    }

    // Trajectory helper
    const getTrajectory = (
      scores: number[],
    ): 'improving' | 'declining' | 'stable' | 'insufficient_data' => {
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

    const students = (profilesResult.data || []).map(
      (profile: {
        id: string
        email: string
        full_name: string | null
        year_group: string | null
        exam_board: string | null
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
          exam_board: profile.exam_board,
          joined_at: joinInfo?.joined_at,
          avg_quiz_score: avgScore,
          modules_completed: completedModules,
          total_modules_started: studentProgress.length,
          completion_rate:
            studentProgress.length > 0
              ? Math.round((completedModules / studentProgress.length) * 100)
              : 0,
          time_spent_seconds: totalTime,
          practice_sessions: practiceByStudent.get(profile.id) || 0,
          certificates_count: certsByStudent.get(profile.id) || 0,
          last_activity: lastActivity?.completed_at || null,
          trajectory,
        }
      },
    )

    return NextResponse.json({
      class: classData,
      students,
      student_count: students.length,
    })
  } catch (error) {
    console.error('Class detail error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-class-update:${ip}`, { limit: 10, windowSeconds: 60 })
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

    const member = await verifySchoolMember(user.id, STAFF)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: school staff only' }, { status: 403 })
    }

    const { classId } = params
    if (!(await verifyClassBelongsToSchool(classId, member.school_id))) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // A teacher may edit only a class they teach, and may not hand it to
    // anyone else (see the header).
    if (member.role === 'teacher') {
      const { data: owned, error: ownedError } = await createServiceRoleClient()
        .from('classes')
        .select('id')
        .eq('id', classId)
        .eq('teacher_id', member.id)
        .maybeSingle()
      if (ownedError) {
        console.error('Class ownership check failed:', ownedError)
        return NextResponse.json({ error: 'Failed to check the class' }, { status: 500 })
      }
      if (!owned) {
        return NextResponse.json(
          { error: 'Forbidden: you are not assigned to this class' },
          { status: 403 },
        )
      }
      if (body.teacher_id !== undefined) {
        return NextResponse.json(
          { error: 'Only an administrator or head of department can reassign a class' },
          { status: 403 },
        )
      }
    }

    // Only allow specific fields to be updated
    const allowedFields = ['name', 'year_group', 'exam_board', 'teacher_id', 'academic_year']
    const updates: Record<string, unknown> = {}
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field]
      }
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 422 })
    }

    // Validate name if provided
    if (updates.name !== undefined) {
      if (typeof updates.name !== 'string' || (updates.name as string).trim().length === 0) {
        return NextResponse.json({ error: 'Class name cannot be empty' }, { status: 422 })
      }
      if ((updates.name as string).trim().length > 100) {
        return NextResponse.json(
          { error: 'Class name must be 100 characters or fewer' },
          { status: 422 },
        )
      }
      updates.name = (updates.name as string).trim()
    }

    const admin = createServiceRoleClient()

    // Validate teacher_id belongs to the same school if provided
    if (updates.teacher_id !== undefined && updates.teacher_id !== null) {
      const { data: assignedMember, error: memberErr } = await admin
        .from('school_members')
        .select('id')
        .eq('id', updates.teacher_id as string)
        .eq('school_id', member.school_id)
        .eq('invite_status', 'accepted')
        .single()
      if (memberErr || !assignedMember) {
        return NextResponse.json(
          { error: 'Assigned teacher is not a member of this school' },
          { status: 422 },
        )
      }
    }

    const { data: updated, error: updateError } = await admin
      .from('classes')
      .update(updates)
      .eq('id', classId)
      .select()
      .single()

    if (updateError) {
      console.error('Class update error:', updateError)
      return NextResponse.json({ error: 'Failed to update class' }, { status: 500 })
    }

    return NextResponse.json({ class: updated })
  } catch (error) {
    console.error('Class update error:', error)
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
    const rl = await rateLimit(`school-class-delete:${ip}`, { limit: 5, windowSeconds: 60 })
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

    const member = await verifySchoolMember(user.id, ['admin'])
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: school admin only' }, { status: 403 })
    }

    const { classId } = params
    if (!(await verifyClassBelongsToSchool(classId, member.school_id))) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    // Soft delete: set is_active = false
    const admin = createServiceRoleClient()
    const { data: updated, error: deleteError } = await admin
      .from('classes')
      .update({ is_active: false })
      .eq('id', classId)
      .select()
      .single()

    if (deleteError) {
      console.error('Class soft-delete error:', deleteError)
      return NextResponse.json({ error: 'Failed to delete class' }, { status: 500 })
    }

    return NextResponse.json({ success: true, class: updated })
  } catch (error) {
    console.error('Class delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT is an alias for PATCH - the spec exposes PUT /api/school/classes/[id]
export const PUT = PATCH
