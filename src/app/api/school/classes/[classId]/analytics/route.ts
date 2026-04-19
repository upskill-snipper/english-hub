import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import type { WeakArea, Recommendation } from '@/lib/types'

export const dynamic = 'force-dynamic'

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

export async function GET(request: NextRequest, props: { params: Promise<{ classId: string }> }) {
  const params = await props.params;
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-class-analytics:${ip}`, { limit: 20, windowSeconds: 60 })
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
    const admin = createServiceRoleClient()

    // Verify class belongs to school
    const { data: classData } = await admin
      .from('classes')
      .select('id, name, year_group, exam_board')
      .eq('id', classId)
      .eq('school_id', member.school_id)
      .single()

    if (!classData) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    // Get students
    const { data: classStudents } = await admin
      .from('class_students')
      .select('student_id')
      .eq('class_id', classId)
      .eq('is_active', true)

    const studentIds = (classStudents || []).map((s: { student_id: string }) => s.student_id)

    if (studentIds.length === 0) {
      return NextResponse.json({
        class_id: classId,
        class_name: classData.name,
        student_count: 0,
        avg_score: null,
        median_score: null,
        completion_rate: 0,
        avg_time_spent_minutes: 0,
        certificates_count: 0,
        total_modules_completed: 0,
        weak_areas: [],
        recommendations: [{
          priority: 1 as const,
          title: 'No students enrolled',
          description: 'Share a join code to get students started.',
          affected_students: 0,
          suggested_action: 'Generate a join code from the class settings page.',
        }],
        students_at_risk: [],
        student_summaries: [],
        trends: [],
      })
    }

    // Fetch all data in parallel
    const [profilesResult, progressResult, modulesResult, coursesResult, certsResult] = await Promise.all([
      admin.from('profiles').select('id, email, full_name, year_group').in('id', studentIds),
      admin.from('module_progress')
        .select('user_id, module_id, course_id, quiz_score, completed, time_spent_seconds, completed_at')
        .in('user_id', studentIds),
      admin.from('modules').select('id, title, course_id'),
      admin.from('courses').select('id, title'),
      admin.from('certificates').select('user_id').in('user_id', studentIds),
    ])

    const progress = (progressResult.data || []) as Array<{
      user_id: string; module_id: string; course_id: string; quiz_score: number | null;
      completed: boolean; time_spent_seconds: number; completed_at: string | null
    }>

    const moduleMap = new Map(
      (modulesResult.data || []).map((m: { id: string; title: string; course_id: string }) => [m.id, m])
    )
    const courseMap = new Map(
      (coursesResult.data || []).map((c: { id: string; title: string }) => [c.id, c])
    )

    // Certificate counts
    const certsByStudent = new Map<string, number>()
    for (const c of (certsResult.data || []) as Array<{ user_id: string }>) {
      certsByStudent.set(c.user_id, (certsByStudent.get(c.user_id) || 0) + 1)
    }
    const totalCerts = Array.from(certsByStudent.values()).reduce((a, b) => a + b, 0)

    // ── Overall class stats ──

    const allScores = progress.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
    const avgScore = allScores.length > 0
      ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
      : null

    // Median score
    let medianScore: number | null = null
    if (allScores.length > 0) {
      const sorted = [...allScores].sort((a, b) => a - b)
      const mid = Math.floor(sorted.length / 2)
      medianScore = sorted.length % 2 !== 0
        ? sorted[mid]
        : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
    }

    const completedCount = progress.filter(p => p.completed).length
    const completionRate = progress.length > 0
      ? Math.round((completedCount / progress.length) * 100)
      : 0

    const totalTimeSeconds = progress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0)
    const avgTimeMinutes = studentIds.length > 0
      ? Math.round(totalTimeSeconds / studentIds.length / 60)
      : 0

    // ── Weak areas: modules/courses with avg score below 60% ──

    const moduleScoreAgg = new Map<string, { total: number; count: number; belowThreshold: number; courseId: string }>()
    for (const p of progress) {
      if (p.quiz_score !== null) {
        if (!moduleScoreAgg.has(p.module_id)) {
          moduleScoreAgg.set(p.module_id, { total: 0, count: 0, belowThreshold: 0, courseId: p.course_id })
        }
        const entry = moduleScoreAgg.get(p.module_id)!
        entry.total += p.quiz_score
        entry.count++
        if (p.quiz_score < 50) entry.belowThreshold++
      }
    }

    const weakAreas: WeakArea[] = Array.from(moduleScoreAgg.entries())
      .map(([moduleId, data]) => {
        const mod = moduleMap.get(moduleId)
        const course = courseMap.get(data.courseId)
        const moduleAvg = Math.round(data.total / data.count)
        let severity: 'critical' | 'warning' | 'minor' = 'minor'
        if (moduleAvg < 40) severity = 'critical'
        else if (moduleAvg < 55) severity = 'warning'

        return {
          course_id: data.courseId,
          course_name: course?.title || data.courseId,
          module_id: moduleId,
          module_name: (mod as { title?: string })?.title || moduleId,
          avg_score: moduleAvg,
          students_below_threshold: data.belowThreshold,
          severity,
        }
      })
      .filter(m => m.avg_score < 60)
      .sort((a, b) => a.avg_score - b.avg_score)
      .slice(0, 10)

    // ── Per-student summaries with trajectory ──

    const studentSummaries = (profilesResult.data || []).map((profile: {
      id: string; email: string; full_name: string | null; year_group: string | null
    }) => {
      const studentProgress = progress.filter(p => p.user_id === profile.id)
      const scores = studentProgress
        .filter(p => p.quiz_score !== null && p.completed_at)
        .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime())
        .map(p => p.quiz_score as number)

      const completed = studentProgress.filter(p => p.completed).length
      const studentAvg = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : null
      const timeSpent = studentProgress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0)
      const trajectory = getTrajectory(scores)

      const lastActivity = studentProgress
        .filter(p => p.completed_at)
        .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())[0]

      return {
        student_id: profile.id,
        full_name: profile.full_name,
        email: profile.email,
        year_group: profile.year_group,
        avg_quiz_score: studentAvg,
        modules_completed: completed,
        total_modules_started: studentProgress.length,
        completion_rate: studentProgress.length > 0
          ? Math.round((completed / studentProgress.length) * 100) : 0,
        time_spent_seconds: timeSpent,
        certificates_count: certsByStudent.get(profile.id) || 0,
        trajectory,
        last_activity: lastActivity?.completed_at || null,
      }
    }).sort((a: { avg_quiz_score: number | null }, b: { avg_quiz_score: number | null }) =>
      (b.avg_quiz_score ?? 0) - (a.avg_quiz_score ?? 0)
    )

    // Students at risk: avg score < 50%
    const studentsAtRisk = studentSummaries.filter(
      (s: { avg_quiz_score: number | null }) => s.avg_quiz_score !== null && s.avg_quiz_score < 50
    )

    // ── Recommendations ──

    const recommendations: Recommendation[] = []

    // Critical weak areas
    const criticalAreas = weakAreas.filter(w => w.severity === 'critical')
    if (criticalAreas.length > 0) {
      recommendations.push({
        priority: 1,
        title: 'Critical weak areas detected',
        description: `${criticalAreas.length} module(s) have a class average below 40%. Focus on "${criticalAreas[0].module_name}" (avg: ${criticalAreas[0].avg_score}%).`,
        affected_students: criticalAreas[0].students_below_threshold,
        suggested_action: 'Review lesson content and consider running a targeted revision session.',
        course_ids: Array.from(new Set(criticalAreas.map(w => w.course_id))),
      })
    }

    // Declining students
    const decliningStudents = studentSummaries.filter(
      (s: { trajectory: string }) => s.trajectory === 'declining'
    )
    if (decliningStudents.length > 0) {
      recommendations.push({
        priority: 1,
        title: 'Students showing declining performance',
        description: `${decliningStudents.length} student(s) have declining quiz scores over recent modules.`,
        affected_students: decliningStudents.length,
        suggested_action: 'Schedule one-to-one check-ins with declining students to identify barriers.',
      })
    }

    // At-risk students
    if (studentsAtRisk.length > 0) {
      recommendations.push({
        priority: 2,
        title: 'Students at risk',
        description: `${studentsAtRisk.length} student(s) averaging below 50%. They may need additional support.`,
        affected_students: studentsAtRisk.length,
        suggested_action: 'Consider differentiated resources or peer tutoring arrangements.',
      })
    }

    // Low completion rate
    if (completionRate < 50) {
      recommendations.push({
        priority: 2,
        title: 'Low completion rate',
        description: `Class completion rate is ${completionRate}%. Students may be disengaged or overwhelmed.`,
        affected_students: studentIds.length,
        suggested_action: 'Review workload and consider breaking modules into smaller chunks.',
      })
    }

    // Zero-progress students
    const zeroProgress = studentSummaries.filter(
      (s: { modules_completed: number }) => s.modules_completed === 0
    )
    if (zeroProgress.length > 0) {
      recommendations.push({
        priority: 3,
        title: 'Students with no completed modules',
        description: `${zeroProgress.length} student(s) have not completed any modules yet.`,
        affected_students: zeroProgress.length,
        suggested_action: 'Check that these students can log in and know how to access their assignments.',
      })
    }

    // Sort recommendations by priority
    recommendations.sort((a, b) => a.priority - b.priority)

    // ── Trend data: weekly averages for last 8 weeks ──

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
      class_id: classId,
      class_name: classData.name,
      student_count: studentIds.length,
      avg_score: avgScore,
      median_score: medianScore,
      completion_rate: completionRate,
      avg_time_spent_minutes: avgTimeMinutes,
      certificates_count: totalCerts,
      total_modules_completed: completedCount,
      weak_areas: weakAreas,
      recommendations,
      students_at_risk: studentsAtRisk,
      student_summaries: studentSummaries,
      trends,
    })
  } catch (error) {
    console.error('Class analytics error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
