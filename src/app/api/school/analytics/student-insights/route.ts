import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ── Types ──

interface StrengthWeakness {
  area: string
  score: number
  /** Number of assessments contributing to this score */
  sample_size: number
  trend: 'improving' | 'stable' | 'declining'
}

interface GradePrediction {
  /** Predicted GCSE grade based on current trajectory */
  predicted_grade: string
  /** Confidence level: how reliable is this prediction */
  confidence: 'high' | 'medium' | 'low'
  /** Target grade set by teacher or student */
  target_grade: string | null
  /** Whether the student is on track to meet their target */
  on_track: boolean | null
}

interface RecommendedLesson {
  course_id: string
  course_name: string
  module_id: string
  module_name: string
  reason: string
  priority: 'high' | 'medium' | 'low'
}

interface EngagementMetrics {
  avg_session_duration_minutes: number
  sessions_per_week: number
  last_active_at: string | null
  streak_days: number
  total_time_spent_hours: number
}

interface StudentInsight {
  student_id: string
  student_name: string | null
  email: string
  year_group: string | null
  overall_avg_score: number | null
  modules_completed: number
  total_modules_started: number
  completion_rate: number
  grade_prediction: GradePrediction
  strengths: StrengthWeakness[]
  weaknesses: StrengthWeakness[]
  recommended_lessons: RecommendedLesson[]
  engagement: EngagementMetrics
  trajectory: 'improving' | 'stable' | 'declining' | 'insufficient_data'
  risk_level: 'none' | 'low' | 'medium' | 'high'
}

/**
 * GET /api/school/analytics/student-insights?studentId=xxx
 * GET /api/school/analytics/student-insights?classId=xxx (returns all students in class)
 *
 * Returns individual student analytics including:
 * - Grade predictions based on current performance trajectory
 * - Strengths and weaknesses across skill areas
 * - Recommended lessons to address gaps
 * - Engagement metrics (session frequency, duration, streaks)
 * - Risk level assessment
 *
 * In production, grade predictions would use a statistical model trained on
 * historical cohort data, correlating module scores with actual GCSE outcomes.
 * Recommended lessons would come from a content-matching algorithm that maps
 * weak skill areas to specific modules in the course catalogue.
 */
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-student-insights:${ip}`, { limit: 20, windowSeconds: 60 })
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

    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get('studentId')
    const classId = searchParams.get('classId')

    if (!studentId && !classId) {
      return NextResponse.json(
        { error: 'Either studentId or classId query parameter is required' },
        { status: 400 }
      )
    }

    const admin = createServiceRoleClient()
    let targetStudentIds: string[] = []

    if (classId) {
      // Verify class belongs to school
      const { data: classData } = await admin
        .from('classes')
        .select('id')
        .eq('id', classId)
        .eq('school_id', member.school_id)
        .single()

      if (!classData) {
        return NextResponse.json({ error: 'Class not found' }, { status: 404 })
      }

      const { data: classStudents } = await admin
        .from('class_students')
        .select('student_id')
        .eq('class_id', classId)
        .eq('is_active', true)

      targetStudentIds = (classStudents || []).map((s: { student_id: string }) => s.student_id)
    } else if (studentId) {
      targetStudentIds = [studentId]
    }

    if (targetStudentIds.length === 0) {
      return NextResponse.json({ students: [], generated_at: new Date().toISOString() })
    }

    // Fetch all data in parallel
    const [profilesResult, progressResult, coursesResult, modulesResult] = await Promise.all([
      admin.from('profiles')
        .select('id, email, full_name, year_group')
        .in('id', targetStudentIds),
      admin.from('module_progress')
        .select('user_id, module_id, course_id, quiz_score, completed, time_spent_seconds, completed_at')
        .in('user_id', targetStudentIds)
        .order('completed_at', { ascending: true }),
      admin.from('courses').select('id, title'),
      admin.from('modules').select('id, title, course_id'),
    ])

    const profiles = (profilesResult.data || []) as Array<{
      id: string; email: string; full_name: string | null; year_group: string | null
    }>
    const progress = (progressResult.data || []) as Array<{
      user_id: string; module_id: string; course_id: string;
      quiz_score: number | null; completed: boolean;
      time_spent_seconds: number; completed_at: string | null
    }>
    const courseMap = new Map(
      (coursesResult.data || []).map((c: { id: string; title: string }) => [c.id, c.title])
    )
    const moduleMap = new Map(
      (modulesResult.data || []).map((m: { id: string; title: string; course_id: string }) => [m.id, m])
    )

    const profileMap = new Map(profiles.map(p => [p.id, p]))

    // Skill areas derived from module groupings
    // In production, modules would have explicit skill tags
    const skillAreas = ['Reading Comprehension', 'Creative Writing', 'SPaG', 'Analysis & Evaluation', 'Spoken Language']

    const students: StudentInsight[] = targetStudentIds.map(sid => {
      const profile = profileMap.get(sid)
      const studentProgress = progress.filter(p => p.user_id === sid)
      const scores = studentProgress
        .filter(p => p.quiz_score !== null)
        .map(p => p.quiz_score as number)

      const completedModules = studentProgress.filter(p => p.completed).length
      const overallAvg = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null

      // ── Trajectory calculation ──
      const scoredEntries = studentProgress
        .filter(p => p.quiz_score !== null && p.completed_at)
        .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime())

      let trajectory: StudentInsight['trajectory'] = 'insufficient_data'
      if (scoredEntries.length >= 6) {
        const recentHalf = scoredEntries.slice(-Math.ceil(scoredEntries.length / 2))
        const earlierHalf = scoredEntries.slice(0, Math.floor(scoredEntries.length / 2))
        const recentAvg = recentHalf.reduce((a, p) => a + (p.quiz_score as number), 0) / recentHalf.length
        const earlierAvg = earlierHalf.reduce((a, p) => a + (p.quiz_score as number), 0) / earlierHalf.length
        const diff = recentAvg - earlierAvg
        if (diff > 5) trajectory = 'improving'
        else if (diff < -5) trajectory = 'declining'
        else trajectory = 'stable'
      }

      // ── Grade prediction ──
      // In production: use regression model trained on historical GCSE outcomes
      // Mapped from percentage average to GCSE 9-1 grade
      function predictGrade(avg: number | null): string {
        if (avg === null) return 'N/A'
        if (avg >= 90) return '9'
        if (avg >= 80) return '8'
        if (avg >= 70) return '7'
        if (avg >= 60) return '6'
        if (avg >= 50) return '5'
        if (avg >= 40) return '4'
        if (avg >= 30) return '3'
        if (avg >= 20) return '2'
        return '1'
      }

      const predicted = predictGrade(overallAvg)
      const confidence: GradePrediction['confidence'] =
        scores.length >= 10 ? 'high' : scores.length >= 5 ? 'medium' : 'low'

      const gradePrediction: GradePrediction = {
        predicted_grade: predicted,
        confidence,
        // In production, target_grade would come from a teacher-set target in the DB
        target_grade: null,
        on_track: null,
      }

      // ── Strengths and weaknesses ──
      // Assign progress entries to skill areas using module_id hash
      const skillScoreMap = new Map<string, { scores: number[]; recentScores: number[]; olderScores: number[] }>()

      for (const skill of skillAreas) {
        skillScoreMap.set(skill, { scores: [], recentScores: [], olderScores: [] })
      }

      const fourWeeksAgo = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString()

      for (const p of studentProgress) {
        if (p.quiz_score === null) continue
        const hash = p.module_id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
        const skillIndex = hash % skillAreas.length
        const skill = skillAreas[skillIndex]
        const entry = skillScoreMap.get(skill)!
        entry.scores.push(p.quiz_score)
        if (p.completed_at && p.completed_at >= fourWeeksAgo) {
          entry.recentScores.push(p.quiz_score)
        } else {
          entry.olderScores.push(p.quiz_score)
        }
      }

      const allSkillResults: StrengthWeakness[] = skillAreas
        .filter(skill => skillScoreMap.get(skill)!.scores.length > 0)
        .map(skill => {
          const data = skillScoreMap.get(skill)!
          const avg = Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length)

          let trend: StrengthWeakness['trend'] = 'stable'
          if (data.recentScores.length > 0 && data.olderScores.length > 0) {
            const recentAvg = data.recentScores.reduce((a, b) => a + b, 0) / data.recentScores.length
            const olderAvg = data.olderScores.reduce((a, b) => a + b, 0) / data.olderScores.length
            if (recentAvg - olderAvg > 5) trend = 'improving'
            else if (recentAvg - olderAvg < -5) trend = 'declining'
          }

          return {
            area: skill,
            score: avg,
            sample_size: data.scores.length,
            trend,
          }
        })
        .sort((a, b) => b.score - a.score)

      const strengths = allSkillResults.filter(s => s.score >= 60).slice(0, 3)
      const weaknesses = allSkillResults.filter(s => s.score < 60).slice(0, 3)

      // ── Recommended lessons ──
      // In production: match weak areas to uncompleted modules with relevant skill tags
      const completedModuleIds = new Set(
        studentProgress.filter(p => p.completed).map(p => p.module_id)
      )

      const recommendedLessons: RecommendedLesson[] = []
      const weakSkillIndices = weaknesses.map(w => skillAreas.indexOf(w.area))

      for (const [moduleId, mod] of moduleMap) {
        if (completedModuleIds.has(moduleId)) continue
        const hash = moduleId.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
        const skillIndex = hash % skillAreas.length
        if (weakSkillIndices.includes(skillIndex) && recommendedLessons.length < 5) {
          const courseName = courseMap.get((mod as { course_id: string }).course_id) || 'Unknown Course'
          recommendedLessons.push({
            course_id: (mod as { course_id: string }).course_id,
            course_name: courseName,
            module_id: moduleId,
            module_name: (mod as { title: string }).title,
            reason: `Targets weak area: ${skillAreas[skillIndex]}`,
            priority: weaknesses.find(w => w.area === skillAreas[skillIndex])!.score < 40
              ? 'high' : 'medium',
          })
        }
      }

      // ── Engagement metrics ──
      const totalTimeSeconds = studentProgress.reduce((sum, p) => sum + (p.time_spent_seconds || 0), 0)
      const completedDates = studentProgress
        .filter(p => p.completed_at)
        .map(p => new Date(p.completed_at!))
        .sort((a, b) => b.getTime() - a.getTime())

      const lastActiveAt = completedDates.length > 0 ? completedDates[0].toISOString() : null

      // Sessions per week (last 4 weeks)
      const fourWeeksAgoDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000)
      const recentSessions = completedDates.filter(d => d >= fourWeeksAgoDate).length
      const sessionsPerWeek = Math.round((recentSessions / 4) * 10) / 10

      // Streak: consecutive days with activity (simplified)
      let streakDays = 0
      if (completedDates.length > 0) {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        let checkDate = new Date(today)
        const activityDates = new Set(
          completedDates.map(d => d.toISOString().split('T')[0])
        )
        while (activityDates.has(checkDate.toISOString().split('T')[0])) {
          streakDays++
          checkDate.setDate(checkDate.getDate() - 1)
        }
      }

      const engagement: EngagementMetrics = {
        avg_session_duration_minutes: completedModules > 0
          ? Math.round(totalTimeSeconds / completedModules / 60) : 0,
        sessions_per_week: sessionsPerWeek,
        last_active_at: lastActiveAt,
        streak_days: streakDays,
        total_time_spent_hours: Math.round(totalTimeSeconds / 3600 * 10) / 10,
      }

      // ── Risk level ──
      let riskLevel: StudentInsight['risk_level'] = 'none'
      if (overallAvg !== null) {
        if (overallAvg < 30 || trajectory === 'declining') riskLevel = 'high'
        else if (overallAvg < 50) riskLevel = 'medium'
        else if (overallAvg < 60 && trajectory !== 'improving') riskLevel = 'low'
      } else if (completedModules === 0 && studentProgress.length > 0) {
        riskLevel = 'medium'
      }

      return {
        student_id: sid,
        student_name: profile?.full_name || null,
        email: profile?.email || 'unknown',
        year_group: profile?.year_group || null,
        overall_avg_score: overallAvg,
        modules_completed: completedModules,
        total_modules_started: studentProgress.length,
        completion_rate: studentProgress.length > 0
          ? Math.round((completedModules / studentProgress.length) * 100) : 0,
        grade_prediction: gradePrediction,
        strengths,
        weaknesses,
        recommended_lessons: recommendedLessons,
        engagement,
        trajectory,
        risk_level: riskLevel,
      }
    })

    return NextResponse.json({
      students,
      generated_at: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Student insights error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
