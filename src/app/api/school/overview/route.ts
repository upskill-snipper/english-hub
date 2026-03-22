import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Rate limit
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-overview:${ip}`, { limit: 30, windowSeconds: 60 })
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
          avg_score: 0,
          completion_rate: 0,
          students_at_risk: 0,
          teacher_name: (teacher as { full_name?: string })?.full_name || null,
        }
      })

      return NextResponse.json({
        overview: {
          school: schoolResult.data,
          total_students: 0,
          total_teachers: totalTeachers,
          total_classes: classIds.length,
          active_students_this_week: 0,
          avg_score_all: 0,
          completion_rate_all: 0,
          classes: classSummaries,
          trends: [],
        },
        topStudents: [],
        atRiskStudents: [],
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

    // Fetch profiles for student names and year groups
    const { data: profilesData } = await admin
      .from('profiles')
      .select('id, full_name, email, year_group')
      .in('id', studentIds)

    const profiles = (profilesData || []) as Array<{ id: string; full_name: string | null; email: string; year_group: string | null }>
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
    // Track recent vs previous scores for trajectory, and last active date
    const fourWeeksAgo = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000)
    const eightWeeksAgo = new Date(Date.now() - 56 * 24 * 60 * 60 * 1000)

    const studentAgg = new Map<string, {
      totalScore: number; scoreCount: number; completed: number; total: number;
      recentScores: number[]; previousScores: number[]; lastActiveAt: string | null
    }>()
    for (const p of progress) {
      if (!studentAgg.has(p.user_id)) {
        studentAgg.set(p.user_id, {
          totalScore: 0, scoreCount: 0, completed: 0, total: 0,
          recentScores: [], previousScores: [], lastActiveAt: null,
        })
      }
      const agg = studentAgg.get(p.user_id)!
      agg.total++
      if (p.completed) agg.completed++
      if (p.quiz_score !== null) {
        agg.totalScore += p.quiz_score
        agg.scoreCount++
      }
      // Track last active
      if (p.completed_at) {
        if (!agg.lastActiveAt || p.completed_at > agg.lastActiveAt) {
          agg.lastActiveAt = p.completed_at
        }
        // Trajectory data
        if (p.quiz_score !== null) {
          const completedDate = new Date(p.completed_at)
          if (completedDate >= fourWeeksAgo) {
            agg.recentScores.push(p.quiz_score)
          } else if (completedDate >= eightWeeksAgo) {
            agg.previousScores.push(p.quiz_score)
          }
        }
      }
    }

    const computeTrajectory = (recent: number[], previous: number[]): 'improving' | 'stable' | 'declining' => {
      if (recent.length === 0 || previous.length === 0) return 'stable'
      const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length
      const prevAvg = previous.reduce((a, b) => a + b, 0) / previous.length
      const diff = recentAvg - prevAvg
      if (diff > 5) return 'improving'
      if (diff < -5) return 'declining'
      return 'stable'
    }

    const rankedStudents = studentIds
      .map(sid => {
        const agg = studentAgg.get(sid)
        const profile = profileMap.get(sid)
        const avg = agg && agg.scoreCount > 0 ? Math.round(agg.totalScore / agg.scoreCount) : null
        const trajectory = agg ? computeTrajectory(agg.recentScores, agg.previousScores) : 'stable' as const
        return {
          student_id: sid,
          student_name: profile?.full_name || profile?.email || 'Unknown',
          year_group: profile?.year_group || null,
          avg_quiz_score: avg ?? 0,
          trajectory,
          last_active_at: agg?.lastActiveAt || null,
          modules_completed: agg?.completed || 0,
          completion_rate: agg && agg.total > 0 ? Math.round((agg.completed / agg.total) * 100) : 0,
        }
      })
      .sort((a, b) => b.avg_quiz_score - a.avg_quiz_score)

    const topPerformers = rankedStudents.filter(s => s.avg_quiz_score > 0).slice(0, 5)
    const atRiskStudents = rankedStudents
      .filter(s => s.avg_quiz_score > 0 && s.avg_quiz_score < 50)
      .sort((a, b) => a.avg_quiz_score - b.avg_quiz_score)
      .slice(0, 5)

    // Class summaries with student count + avg score
    const studentsByClass = new Map<string, string[]>()
    for (const row of allStudentRows) {
      if (!studentsByClass.has(row.class_id)) studentsByClass.set(row.class_id, [])
      studentsByClass.get(row.class_id)!.push(row.student_id)
    }

    const classSummaries = classes.map((c: { id: string; name: string; year_group: string | null; exam_board: string | null; student_count: number; teacher_id: string | null }) => {
      const classStudentIds = studentsByClass.get(c.id) || []
      const classProgress = progress.filter(p => classStudentIds.includes(p.user_id))
      const classScores = classProgress
        .filter(p => p.quiz_score !== null)
        .map(p => p.quiz_score as number)
      const classAvg = classScores.length > 0
        ? Math.round(classScores.reduce((a, b) => a + b, 0) / classScores.length)
        : 0
      const classCompleted = classProgress.filter(p => p.completed).length
      const classCompletionRate = classProgress.length > 0
        ? Math.round((classCompleted / classProgress.length) * 100)
        : 0

      // Count at-risk students: avg score < 50 for this class
      let studentsAtRisk = 0
      for (const sid of classStudentIds) {
        const studentClassScores = classProgress
          .filter(p => p.user_id === sid && p.quiz_score !== null)
          .map(p => p.quiz_score as number)
        if (studentClassScores.length > 0) {
          const studentAvg = studentClassScores.reduce((a, b) => a + b, 0) / studentClassScores.length
          if (studentAvg < 50) studentsAtRisk++
        }
      }

      const teacher = members.find((m: { id: string }) => m.id === c.teacher_id)
      return {
        class_id: c.id,
        class_name: c.name,
        year_group: c.year_group,
        exam_board: c.exam_board,
        student_count: classStudentIds.length,
        avg_score: classAvg,
        completion_rate: classCompletionRate,
        students_at_risk: studentsAtRisk,
        teacher_name: (teacher as { full_name?: string })?.full_name || null,
      }
    })

    // Trend data: weekly averages for last 8 weeks
    const trends: Array<{
      date: string
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
        date: weekStart.toISOString().split('T')[0],
        avg_score: weekAvg,
        active_students: weekActive,
        modules_completed: weekCompleted,
      })
    }

    return NextResponse.json({
      overview: {
        school: schoolResult.data,
        total_students: totalStudents,
        total_teachers: totalTeachers,
        total_classes: classIds.length,
        active_students_this_week: activeStudentsThisWeek,
        avg_score_all: avgScore,
        completion_rate_all: completionRate,
        classes: classSummaries,
        trends,
      },
      topStudents: topPerformers,
      atRiskStudents: atRiskStudents,
    })
  } catch (error) {
    console.error('School overview error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
