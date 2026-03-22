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

function getTrajectory(scores: number[]): 'improving' | 'declining' | 'stable' | 'insufficient_data' {
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

export async function GET(
  request: NextRequest,
  { params }: { params: { classId: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-class-students:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
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
      admin.from('module_progress')
        .select('user_id, module_id, quiz_score, completed, time_spent_seconds, completed_at')
        .in('user_id', studentIds),
      admin.from('practice_sessions').select('user_id, created_at').in('user_id', studentIds),
    ])

    // Aggregate progress by student
    const progressByStudent = new Map<string, Array<{
      module_id: string; quiz_score: number | null;
      completed: boolean; time_spent_seconds: number; completed_at: string | null
    }>>()
    for (const p of (progressResult.data || []) as Array<{
      user_id: string; module_id: string; quiz_score: number | null;
      completed: boolean; time_spent_seconds: number; completed_at: string | null
    }>) {
      if (!progressByStudent.has(p.user_id)) progressByStudent.set(p.user_id, [])
      progressByStudent.get(p.user_id)!.push(p)
    }

    // Practice count by student
    const practiceByStudent = new Map<string, number>()
    for (const p of (practiceResult.data || []) as Array<{ user_id: string }>) {
      practiceByStudent.set(p.user_id, (practiceByStudent.get(p.user_id) || 0) + 1)
    }

    const students = (profilesResult.data || []).map((profile: {
      id: string; email: string; full_name: string | null; year_group: string | null
    }) => {
      const studentProgress = progressByStudent.get(profile.id) || []
      const joinInfo = (classStudents || []).find((s: { student_id: string }) => s.student_id === profile.id)

      const scores = studentProgress
        .filter(p => p.quiz_score !== null && p.completed_at)
        .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime())
        .map(p => p.quiz_score as number)

      const completedModules = studentProgress.filter(p => p.completed).length
      const avgScore = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : null
      const totalTime = studentProgress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0)
      const lastActivity = studentProgress
        .filter(p => p.completed_at)
        .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())[0]

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
        completion_rate: studentProgress.length > 0
          ? Math.round((completedModules / studentProgress.length) * 100)
          : 0,
        time_spent_seconds: totalTime,
        practice_sessions: practiceByStudent.get(profile.id) || 0,
        last_activity: lastActivity?.completed_at || null,
        trajectory,
      }
    })

    return NextResponse.json({ students })
  } catch (error) {
    console.error('Class students error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { classId: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-class-add-student:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
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

    let body: { email?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { email } = body
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return NextResponse.json({ error: 'email is required' }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Look up user by email
    const { data: profile } = await admin
      .from('profiles')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (!profile) {
      return NextResponse.json({ error: 'No user found with that email' }, { status: 404 })
    }

    const studentId = profile.id

    // Check seat limit and subscription status
    const { data: school } = await admin
      .from('schools')
      .select('seat_limit, seats_used, subscription_status')
      .eq('id', member.school_id)
      .single()

    if (school && school.seats_used >= school.seat_limit) {
      return NextResponse.json({ error: 'School seat limit reached' }, { status: 422 })
    }

    // Check if the student is already in any class at this school (for seat counting)
    const { data: schoolClasses } = await admin
      .from('classes')
      .select('id')
      .eq('school_id', member.school_id)

    const schoolClassIds = (schoolClasses || []).map((c: { id: string }) => c.id)
    let alreadyInSchool = false

    if (schoolClassIds.length > 0) {
      const { data: existingMembership } = await admin
        .from('class_students')
        .select('id')
        .in('class_id', schoolClassIds)
        .eq('student_id', studentId)
        .eq('is_active', true)
        .limit(1)

      alreadyInSchool = !!existingMembership && existingMembership.length > 0
    }

    // Check if already in class (active or inactive)
    const { data: existing } = await admin
      .from('class_students')
      .select('id, is_active')
      .eq('class_id', classId)
      .eq('student_id', studentId)
      .single()

    if (existing && existing.is_active) {
      return NextResponse.json({ error: 'Student is already in this class' }, { status: 422 })
    }

    if (existing && !existing.is_active) {
      // Reactivate
      const { error: updateError } = await admin
        .from('class_students')
        .update({ is_active: true, removed_at: null, joined_at: new Date().toISOString() })
        .eq('id', existing.id)

      if (updateError) {
        console.error('Reactivate student error:', updateError)
        return NextResponse.json({ error: 'Failed to add student' }, { status: 500 })
      }
    } else {
      // Insert new
      const { error: insertError } = await admin
        .from('class_students')
        .insert({ class_id: classId, student_id: studentId })

      if (insertError) {
        console.error('Add student error:', insertError)
        return NextResponse.json({ error: 'Failed to add student' }, { status: 500 })
      }
    }

    // Increment seats_used if this is a new student at the school
    if (!alreadyInSchool && school) {
      await admin
        .from('schools')
        .update({ seats_used: school.seats_used + 1 })
        .eq('id', member.school_id)
        .lt('seats_used', school.seat_limit)
    }

    // Update class student_count
    const { count: studentCount } = await admin
      .from('class_students')
      .select('id', { count: 'exact', head: true })
      .eq('class_id', classId)
      .eq('is_active', true)

    await admin.from('classes').update({ student_count: studentCount || 0 }).eq('id', classId)

    // Grant pro access to the student only if the school has an active subscription
    const schoolSubStatus = school?.subscription_status
    if (schoolSubStatus === 'active' || schoolSubStatus === 'trialing') {
      await admin
        .from('profiles')
        .update({ subscription_status: 'pro' })
        .eq('id', studentId)
    }

    return NextResponse.json({ success: true, student_id: studentId }, { status: 201 })
  } catch (error) {
    console.error('Add student error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { classId: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-class-remove-student:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
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

    let body: { student_id?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { student_id } = body
    if (!student_id) {
      return NextResponse.json({ error: 'student_id is required' }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Soft delete: set is_active = false
    const { error: removeError } = await admin
      .from('class_students')
      .update({ is_active: false, removed_at: new Date().toISOString() })
      .eq('class_id', classId)
      .eq('student_id', student_id)
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

    await admin.from('classes').update({ student_count: studentCount || 0 }).eq('id', classId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Remove student error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
