import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Rate limit
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-overview:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    // Auth
    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const admin = createServiceRoleClient()
    const schoolId = member.school_id

    // Parallel fetch: school info, members, classes
    const [schoolResult, membersResult, classesResult] = await Promise.all([
      admin.from('schools').select('*').eq('id', schoolId).single(),
      admin.from('school_members').select('id, role, full_name, user_id')
        .eq('school_id', schoolId).eq('invite_status', 'accepted'),
      admin.from('classes').select('id, name, year_group, exam_board, student_count, teacher_id, is_active')
        .eq('school_id', schoolId).eq('is_active', true).order('name'),
    ])

    if (schoolResult.error || !schoolResult.data) {
      return NextResponse.json({ error: 'School not found' }, { status: 404 })
    }

    const classes = classesResult.data || []
    const members = membersResult.data || []
    const classIds = classes.map((c: { id: string }) => c.id)

    // Count teachers (teacher + head_of_department roles)
    const teachers = members.filter((m: { role: string }) =>
      m.role === 'teacher' || m.role === 'head_of_department'
    )
    const totalTeachers = teachers.length

    // Get all active students across all classes
    let allStudentRows: { student_id: string; class_id: string }[] = []
    if (classIds.length > 0) {
      const { data: studentRows } = await admin
        .from('class_students')
        .select('student_id, class_id')
        .in('class_id', classIds)
        .eq('is_active', true)
      allStudentRows = (studentRows || []) as { student_id: string; class_id: string }[]
    }

    const studentIds = Array.from(new Set(allStudentRows.map(s => s.student_id)))
    const totalStudents = studentIds.length

    // Early return if no students
    if (studentIds.length === 0) {
      const classSummaries = classes.map((c: { id: string; name: string; year_group: string | null; exam_board: string | null; student_count: number; teacher_id: string | null }) => {
        const teacher = members.find((m: { id: string }) => m.id === c.teacher_id)
        return {
          class_id: c.id,
          class_name: c.name,
          year_group: c.year_group,
          exam_board: c.exam_board,
          student_count: 0,
          avg_score: null,
          teacher_name: (teacher as { full_name?: string })?.full_name || null,
        }
      })

      return NextResponse.json({
        school: schoolResult.data,
        stats: {
          total_students: 0,
          total_teachers: totalTeachers,
          total_classes: classIds.length,
          active_students_this_week: 0,
          avg_quiz_score: 0,
          completion_rate: 0,
        },
        classes: classSummaries,
        top_performers: [],
        at_risk_students: [],
        trends: [],
      })
    }

    // Fetch all progress for school students in one query
    const { data: allProgress } = await admin
      .from('module_progress')
      .select('user_id, module_id, course_id, quiz_score, completed, time_spent_seconds, completed_at')
      .in('user_id', studentIds)

    const progress = (allProgress || []) as Array<{
      user_id: string; module_id: string; course_id: string;
      quiz_score: number | null; completed: boolean;
      time_spent_seconds: number; completed_at: string | null
    }>

    // Fetch profiles for student names
    const { data: profilesData } = await admin
      .from('profiles')
      .select('id, full_name, email')
      .in('id', studentIds)

    const profiles = (profilesData || []) as Array<{ id: string; full_name: string | null; email: string }>
    const profileMap = new Map(profiles.map(p => [p.id, p]))

    // Active students this week
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    const activeStudentIds = new Set(
      progress
        .filter(p => p.completed_at && p.completed_at >= oneWeekAgo)
        .map(p => p.user_id)
    )
    const activeStudentsThisWeek = activeStudentIds.size

    // Avg quiz score across all students
    const allScores = progress.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
    const avgScore = allScores.length > 0
      ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
      : 0

    // Completion rate: completed / total progress entries
    const completedCount = progress.filter(p => p.completed).length
    const completionRate = progress.length > 0
      ? Math.round((completedCount / progress.length) * 100)
      : 0

    // Build per-student aggregate for top/bottom rankings
    const studentAgg = new Map<string, { totalScore: number; scoreCount: number; completed: number; total: number }>()
    for (const p of progress) {
      if (!studentAgg.has(p.user_id)) {
        studentAgg.set(p.user_id, { totalScore: 0, scoreCount: 0, completed: 0, total: 0 })
      }
      const agg = studentAgg.get(p.user_id)!
      agg.total++
      if (p.completed) agg.completed++
      if (p.quiz_score !== null) {
        agg.totalScore += p.quiz_score
        agg.scoreCount++
      }
    }

    const rankedStudents = studentIds
      .map(sid => {
        const agg = studentAgg.get(sid)
        const profile = profileMap.get(sid)
        const avg = agg && agg.scoreCount > 0 ? Math.round(agg.totalScore / agg.scoreCount) : null
        return {
          student_id: sid,
          full_name: profile?.full_name || null,
          email: profile?.email || '',
          avg_score: avg,
          modules_completed: agg?.completed || 0,
          completion_rate: agg && agg.total > 0 ? Math.round((agg.completed / agg.total) * 100) : 0,
        }
      })
      .sort((a, b) => (b.avg_score ?? -1) - (a.avg_score ?? -1))

    const topPerformers = rankedStudents.filter(s => s.avg_score !== null).slice(0, 5)
    const atRiskStudents = rankedStudents
      .filter(s => s.avg_score !== null && s.avg_score < 50)
      .sort((a, b) => (a.avg_score ?? 0) - (b.avg_score ?? 0))
      .slice(0, 5)

    // Class summaries with student count + avg score
    const studentsByClass = new Map<string, string[]>()
    for (const row of allStudentRows) {
      if (!studentsByClass.has(row.class_id)) studentsByClass.set(row.class_id, [])
      studentsByClass.get(row.class_id)!.push(row.student_id)
    }

    const classSummaries = classes.map((c: { id: string; name: string; year_group: string | null; exam_board: string | null; student_count: number; teacher_id: string | null }) => {
      const classStudentIds = studentsByClass.get(c.id) || []
      const classScores = progress
        .filter(p => classStudentIds.includes(p.user_id) && p.quiz_score !== null)
        .map(p => p.quiz_score as number)
      const classAvg = classScores.length > 0
        ? Math.round(classScores.reduce((a, b) => a + b, 0) / classScores.length)
        : null
      const teacher = members.find((m: { id: string }) => m.id === c.teacher_id)
      return {
        class_id: c.id,
        class_name: c.name,
        year_group: c.year_group,
        exam_board: c.exam_board,
        student_count: classStudentIds.length,
        avg_score: classAvg,
        teacher_name: (teacher as { full_name?: string })?.full_name || null,
      }
    })

    // Trend data: weekly averages for last 8 weeks
    const trends: Array<{
      week_start: string
      avg_score: number
      active_students: number
      modules_completed: number
    }> = []

    for (let i = 7; i >= 0; i--) {
      const weekStart = new Date(Date.now() - (i + 1) * 7 * 24 * 60 * 60 * 1000)
      const weekEnd = new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000)
      const weekStartISO = weekStart.toISOString()
      const weekEndISO = weekEnd.toISOString()

      const weekProgress = progress.filter(
        p => p.completed_at && p.completed_at >= weekStartISO && p.completed_at < weekEndISO
      )

      const weekScores = weekProgress.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
      const weekAvg = weekScores.length > 0
        ? Math.round(weekScores.reduce((a, b) => a + b, 0) / weekScores.length)
        : 0
      const weekActive = new Set(weekProgress.map(p => p.user_id)).size
      const weekCompleted = weekProgress.filter(p => p.completed).length

      trends.push({
        week_start: weekStart.toISOString().split('T')[0],
        avg_score: weekAvg,
        active_students: weekActive,
        modules_completed: weekCompleted,
      })
    }

    return NextResponse.json({
      school: schoolResult.data,
      stats: {
        total_students: totalStudents,
        total_teachers: totalTeachers,
        total_classes: classIds.length,
        active_students_this_week: activeStudentsThisWeek,
        avg_quiz_score: avgScore,
        completion_rate: completionRate,
      },
      classes: classSummaries,
      top_performers: topPerformers,
      at_risk_students: atRiskStudents,
      trends,
    })
  } catch (error) {
    console.error('School overview error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
