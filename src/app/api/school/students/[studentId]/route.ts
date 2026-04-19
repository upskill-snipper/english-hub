import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifySchoolMember } from '@/lib/school-auth'
import { verifyStudentInSchool } from '@/lib/school-student-auth'
import { allCourses } from '@/data/courses'
import type { StudentAnalytics, WeakArea, Recommendation } from '@/lib/types'

export const dynamic = 'force-dynamic'

function predictGrade(avgScore: number): string {
  if (avgScore >= 90) return 'Grade 9'
  if (avgScore >= 80) return 'Grade 8'
  if (avgScore >= 70) return 'Grade 7'
  if (avgScore >= 60) return 'Grade 6'
  if (avgScore >= 50) return 'Grade 5'
  if (avgScore >= 40) return 'Grade 4'
  if (avgScore >= 30) return 'Grade 3'
  if (avgScore >= 20) return 'Grade 2'
  return 'Grade 1'
}

export async function GET(request: NextRequest, props: { params: Promise<{ studentId: string }> }) {
  const params = await props.params;
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-student-detail:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const membership = await verifySchoolMember(user.id)
    if (!membership) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const { studentId } = params
    const staffRoles = ['admin', 'head_of_department', 'teacher']

    // Students can only view their own progress
    if (!staffRoles.includes(membership.role) && user.id !== studentId) {
      return NextResponse.json({ error: 'Forbidden: you can only view your own progress' }, { status: 403 })
    }

    if (!(await verifyStudentInSchool(studentId, membership.school_id))) {
      return NextResponse.json({ error: 'Student not found in your school' }, { status: 404 })
    }

    const admin = createServiceRoleClient()

    // Fetch all data in parallel
    const [profileRes, enrolmentsRes, progressRes, assessmentsRes, practiceRes, certificatesRes] = await Promise.all([
      admin.from('profiles').select('id, email, full_name, year_group, exam_board, created_at').eq('id', studentId).single(),
      admin.from('enrolments').select('course_id, enrolled_at, payment_type').eq('user_id', studentId),
      admin.from('module_progress').select('module_id, course_id, quiz_score, completed, quiz_attempts, time_spent_seconds, completed_at').eq('user_id', studentId),
      admin.from('assessment_attempts').select('id, course_id, score, passed, time_taken_seconds, attempted_at').eq('user_id', studentId).order('attempted_at', { ascending: false }),
      admin.from('practice_sessions').select('id, exam_board, paper, question_type, self_rating, time_spent_seconds, created_at').eq('user_id', studentId).order('created_at', { ascending: false }),
      admin.from('certificates').select('id, course_id, score, grade, issued_at').eq('user_id', studentId),
    ])

    if (profileRes.error || !profileRes.data) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const profile = profileRes.data
    const enrolments = enrolmentsRes.data || []
    const progress = (progressRes.data || []) as Array<{
      module_id: string; course_id: string; quiz_score: number | null;
      completed: boolean; quiz_attempts: number; time_spent_seconds: number; completed_at: string | null
    }>
    const assessments = assessmentsRes.data || []
    const practice = (practiceRes.data || []) as Array<{
      id: string; exam_board: string; paper: string; question_type: string;
      self_rating: number | null; time_spent_seconds: number; created_at: string
    }>
    const certificates = certificatesRes.data || []

    // Build course/module name lookups from static course data
    const courseMap = new Map(allCourses.map(c => [c.id, c]))
    const moduleMap = new Map<string, { title: string; courseId: string }>()
    for (const course of allCourses) {
      for (const mod of course.moduleList) {
        moduleMap.set(mod.id, { title: mod.title, courseId: course.id })
      }
    }

    const totalModulesAvailable = allCourses.reduce((sum, c) => sum + c.moduleList.length, 0)

    // Enrolments with course names
    const enrolmentsWithNames = enrolments.map(e => ({
      ...e,
      course_name: courseMap.get(e.course_id)?.title || e.course_id,
    }))

    // Module progress with names
    const moduleProgressWithNames = progress.map(mp => ({
      ...mp,
      course_name: courseMap.get(mp.course_id)?.title || mp.course_id,
      module_name: moduleMap.get(mp.module_id)?.title || mp.module_id,
    }))

    // Compute stats
    const modulesCompleted = progress.filter(p => p.completed).length
    const quizScores = progress.filter(p => p.quiz_score !== null).map(p => p.quiz_score as number)
    const avgQuizScore = quizScores.length > 0
      ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
      : 0
    const totalTimeSpent = progress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0)

    // Practice ratings
    const practiceRatings = practice.filter(p => p.self_rating !== null).map(p => p.self_rating as number)
    const avgPracticeRating = practiceRatings.length > 0
      ? Math.round((practiceRatings.reduce((a, b) => a + b, 0) / practiceRatings.length) * 10) / 10
      : 0

    // Strengths/weaknesses: average quiz score per course
    const courseScoreMap = new Map<string, { total: number; count: number; name: string }>()
    for (const mp of progress) {
      if (mp.quiz_score !== null) {
        const courseName = courseMap.get(mp.course_id)?.title || mp.course_id
        const entry = courseScoreMap.get(mp.course_id) || { total: 0, count: 0, name: courseName }
        entry.total += mp.quiz_score
        entry.count += 1
        courseScoreMap.set(mp.course_id, entry)
      }
    }
    const courseAvgs = Array.from(courseScoreMap.entries())
      .map(([id, v]) => ({ id, name: v.name, avg: v.total / v.count }))
      .sort((a, b) => b.avg - a.avg)

    const strengths = courseAvgs.slice(0, 3).map(c => c.name)
    const weaknesses = courseAvgs.length > 3
      ? courseAvgs.slice(-3).reverse().map(c => c.name)
      : courseAvgs.slice(Math.max(0, courseAvgs.length - 3)).reverse().map(c => c.name)

    // Trajectory: compare last 4 weeks avg vs previous 4 weeks
    const now = new Date()
    const fourWeeksAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000)
    const eightWeeksAgo = new Date(now.getTime() - 56 * 24 * 60 * 60 * 1000)

    const recentScores = progress
      .filter(p => p.completed_at && new Date(p.completed_at) >= fourWeeksAgo && p.quiz_score !== null)
      .map(p => p.quiz_score as number)
    const previousScores = progress
      .filter(p => p.completed_at && new Date(p.completed_at) >= eightWeeksAgo && new Date(p.completed_at) < fourWeeksAgo && p.quiz_score !== null)
      .map(p => p.quiz_score as number)

    const recentAvg = recentScores.length > 0 ? recentScores.reduce((a, b) => a + b, 0) / recentScores.length : 0
    const previousAvg = previousScores.length > 0 ? previousScores.reduce((a, b) => a + b, 0) / previousScores.length : 0

    let trajectory: 'improving' | 'stable' | 'declining' = 'stable'
    if (recentScores.length > 0 && previousScores.length > 0) {
      const diff = recentAvg - previousAvg
      if (diff > 5) trajectory = 'improving'
      else if (diff < -5) trajectory = 'declining'
    }

    // Predicted grade
    const predictedGrade = quizScores.length > 0 ? predictGrade(avgQuizScore) : null

    // Last active: most recent activity timestamp
    const timestamps: string[] = []
    for (const p of progress) {
      if (p.completed_at) timestamps.push(p.completed_at)
    }
    for (const a of assessments) {
      if (a.attempted_at) timestamps.push(a.attempted_at)
    }
    for (const p of practice) {
      if (p.created_at) timestamps.push(p.created_at)
    }
    const lastActiveAt = timestamps.length > 0
      ? timestamps.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0]
      : null

    // Build weak areas
    const weakAreas: WeakArea[] = courseAvgs
      .filter(c => c.avg < 70)
      .slice(-5)
      .reverse()
      .map(c => {
        const severity: WeakArea['severity'] = c.avg < 40 ? 'critical' : c.avg < 55 ? 'warning' : 'minor'
        return {
          course_id: c.id,
          course_name: c.name,
          avg_score: Math.round(c.avg),
          students_below_threshold: 1,
          severity,
        }
      })

    // Build recommendations
    const recommendations: Recommendation[] = []

    if (weakAreas.length > 0) {
      const worst = weakAreas[0]
      recommendations.push({
        priority: 1,
        title: `Focus on ${worst.course_name}`,
        description: `Average score of ${worst.avg_score}% in ${worst.course_name} indicates significant gaps in understanding.`,
        affected_students: 1,
        suggested_action: `Revisit all modules in ${worst.course_name} and retake the quizzes, focusing on areas with the lowest scores.`,
        course_ids: [worst.course_id],
      })
    }

    if (practice.length < 5) {
      recommendations.push({
        priority: 2,
        title: 'Increase practice session frequency',
        description: `Only ${practice.length} practice session${practice.length !== 1 ? 's' : ''} completed. Regular exam practice improves confidence and readiness.`,
        affected_students: 1,
        suggested_action: 'Aim for at least 3 practice sessions per week using the exam question bank.',
      })
    }

    if (trajectory === 'declining') {
      recommendations.push({
        priority: 1,
        title: 'Address declining performance',
        description: 'Recent quiz scores are trending downward compared to the previous period.',
        affected_students: 1,
        suggested_action: 'Schedule a one-to-one review session to identify and address knowledge gaps.',
      })
    }

    if (modulesCompleted > 0 && totalModulesAvailable > 0 && (modulesCompleted / totalModulesAvailable) < 0.3) {
      recommendations.push({
        priority: 3,
        title: 'Improve course completion rate',
        description: `Only ${Math.round((modulesCompleted / totalModulesAvailable) * 100)}% of available modules completed.`,
        affected_students: 1,
        suggested_action: 'Set a weekly target of completing at least 2 modules to maintain steady progress.',
      })
    }

    if (trajectory === 'improving') {
      recommendations.push({
        priority: 3,
        title: 'Maintain upward momentum',
        description: 'Performance is improving. Keep up the good work!',
        affected_students: 1,
        suggested_action: 'Continue current study pattern and consider attempting more challenging assessment questions.',
      })
    }

    // Sort recommendations by priority
    recommendations.sort((a, b) => a.priority - b.priority)

    // Build the full StudentAnalytics object
    const analytics: StudentAnalytics = {
      student_id: studentId,
      student_name: profile.full_name || profile.email,
      year_group: profile.year_group,
      exam_board: profile.exam_board,
      modules_completed: modulesCompleted,
      total_modules: totalModulesAvailable,
      completion_rate: totalModulesAvailable > 0 ? Math.round((modulesCompleted / totalModulesAvailable) * 100) : 0,
      avg_quiz_score: avgQuizScore,
      total_time_spent_seconds: totalTimeSpent,
      practice_sessions_count: practice.length,
      avg_practice_rating: avgPracticeRating,
      certificates_count: certificates.length,
      last_active_at: lastActiveAt,
      trajectory,
      strengths,
      weaknesses,
      predicted_grade: predictedGrade,
    }

    return NextResponse.json({
      analytics,
      enrolments: enrolmentsWithNames,
      module_progress: moduleProgressWithNames,
      assessment_attempts: assessments,
      practice_sessions: practice,
      certificates,
      weak_areas: weakAreas,
      recommendations,
    })
  } catch (error) {
    console.error('Student analytics error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
