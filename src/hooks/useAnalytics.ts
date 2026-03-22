'use client'

import { useEffect, useState, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { loadAllCourses } from '@/data/course-loader'
import type { Enrolment, ModuleProgress, AssessmentAttempt, Certificate, CourseData } from '@/lib/types'

// ── Types ────────────────────────────────────────────────────────────────────

export interface PracticeSession {
  id: string
  user_id: string
  question_id: string
  board: string
  question_type: string
  difficulty: string
  self_rating: number | null
  time_seconds: number | null
  created_at: string
}

export interface SkillScore {
  name: string
  score: number
  total: number
  percentage: number
}

export interface WeeklyDay {
  label: string
  date: string
  studyMinutes: number
  questionsAnswered: number
}

export interface CourseProgress {
  courseId: string
  course: CourseData
  totalModules: number
  completedModules: number
  percentage: number
  lastActivity: string | null
}

export interface ActivityItem {
  id: string
  type: 'module' | 'assessment' | 'practice'
  title: string
  subtitle: string
  score: number | null
  timestamp: string
}

export interface Recommendation {
  type: 'weak_area' | 'next_module' | 'revision'
  title: string
  description: string
  href?: string
}

export interface AnalyticsData {
  // Overview
  totalStudyTimeSeconds: number
  weekStudyTimeSeconds: number
  modulesCompleted: number
  totalModules: number
  averagePracticeScore: number
  currentStreak: number
  examReadiness: number

  // Course progress
  courseProgress: CourseProgress[]

  // Skills
  skillScores: SkillScore[]

  // Weekly activity
  weeklyActivity: WeeklyDay[]

  // Recommendations
  recommendations: Recommendation[]

  // Recent activity
  recentActivity: ActivityItem[]

  // Raw data for class view
  enrolments: Enrolment[]
  moduleProgress: ModuleProgress[]
  assessments: AssessmentAttempt[]
  practiceSessions: PracticeSession[]
  certificates: Certificate[]

  loading: boolean
  error: string | null
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const SKILL_CATEGORIES: Record<string, string[]> = {
  'Reading Comprehension': ['Language Analysis', 'Structure Analysis', 'Evaluation', 'Reading'],
  'Creative Writing': ['Creative Writing', 'Descriptive Writing', 'Narrative Writing'],
  'Analysis & Evaluation': ['Evaluation', 'Comparison', 'Critical Analysis', 'Analysis'],
  'Technical Accuracy': ['SPaG', 'Grammar', 'Punctuation', 'Spelling', 'Technical'],
}

function getDayLabel(date: Date): string {
  return date.toLocaleDateString('en-GB', { weekday: 'short' })
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function startOfDay(date: Date): Date {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

function calculateStreak(
  moduleProgress: ModuleProgress[],
  practiceSessions: PracticeSession[],
  assessments: AssessmentAttempt[]
): number {
  // Collect all activity dates
  const activityDates = new Set<string>()

  for (const mp of moduleProgress) {
    if (mp.completed_at) {
      activityDates.add(new Date(mp.completed_at).toDateString())
    }
  }
  for (const ps of practiceSessions) {
    activityDates.add(new Date(ps.created_at).toDateString())
  }
  for (const a of assessments) {
    activityDates.add(new Date(a.attempted_at).toDateString())
  }

  if (activityDates.size === 0) return 0

  // Count consecutive days backwards from today
  let streak = 0
  const today = startOfDay(new Date())

  for (let i = 0; i < 365; i++) {
    const checkDate = new Date(today)
    checkDate.setDate(checkDate.getDate() - i)
    if (activityDates.has(checkDate.toDateString())) {
      streak++
    } else if (i > 0) {
      // Allow today to be missing (streak from yesterday)
      break
    }
  }

  return streak
}

function calculateExamReadiness(
  courseProgress: CourseProgress[],
  averageScore: number,
  skillScores: SkillScore[]
): number {
  if (courseProgress.length === 0) return 0

  // 40% weight: course completion
  const avgCompletion =
    courseProgress.reduce((sum, cp) => sum + cp.percentage, 0) / courseProgress.length

  // 30% weight: average practice/assessment score
  const scoreComponent = averageScore

  // 30% weight: skill coverage (are all skills above 40%?)
  const skillComponent =
    skillScores.length > 0
      ? skillScores.reduce((sum, s) => sum + Math.min(s.percentage, 100), 0) / skillScores.length
      : 0

  return Math.round(avgCompletion * 0.4 + scoreComponent * 0.3 + skillComponent * 0.3)
}

// ── Main Hook ────────────────────────────────────────────────────────────────

export function useAnalytics(): AnalyticsData {
  const { user } = useAuthStore()
  const [allCourses, setAllCourses] = useState<CourseData[]>([])
  const [enrolments, setEnrolments] = useState<Enrolment[]>([])
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress[]>([])
  const [assessments, setAssessments] = useState<AssessmentAttempt[]>([])
  const [practiceSessions, setPracticeSessions] = useState<PracticeSession[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const courseMap = useMemo(
    () => new Map<string, CourseData>(allCourses.map((c) => [c.id, c])),
    [allCourses]
  )

  useEffect(() => {
    loadAllCourses().then(setAllCourses)
  }, [])

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    const supabase = createClient()

    async function fetchAll() {
      try {
        setError(null)
        const userId = user!.id

        const [enrolRes, progressRes, assessRes, practiceRes, certRes] = await Promise.all([
          supabase.from('enrolments').select('*').eq('user_id', userId),
          supabase.from('module_progress').select('*').eq('user_id', userId),
          supabase
            .from('assessment_attempts')
            .select('*')
            .eq('user_id', userId)
            .order('attempted_at', { ascending: false }),
          supabase
            .from('practice_sessions')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false }),
          supabase.from('certificates').select('*').eq('user_id', userId),
        ])

        if (enrolRes.error) throw enrolRes.error
        if (progressRes.error) throw progressRes.error
        if (assessRes.error) throw assessRes.error
        if (practiceRes.error) throw practiceRes.error
        if (certRes.error) throw certRes.error

        setEnrolments(enrolRes.data ?? [])
        setModuleProgress(progressRes.data ?? [])
        setAssessments(assessRes.data ?? [])
        setPracticeSessions(practiceRes.data ?? [])
        setCertificates(certRes.data ?? [])
      } catch (err) {
        console.error('Analytics fetch error:', err)
        setError('Failed to load analytics data. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [user])

  // ── Total study time ───────────────────────────────────────────────────

  const totalStudyTimeSeconds = useMemo(() => {
    const moduleTime = moduleProgress.reduce((s, mp) => s + (mp.time_spent_seconds || 0), 0)
    const practiceTime = practiceSessions.reduce((s, ps) => s + (ps.time_seconds || 0), 0)
    const assessTime = assessments.reduce((s, a) => s + (a.time_taken_seconds || 0), 0)
    return moduleTime + practiceTime + assessTime
  }, [moduleProgress, practiceSessions, assessments])

  const weekStudyTimeSeconds = useMemo(() => {
    const now = new Date()
    const weekAgo = new Date(now)
    weekAgo.setDate(weekAgo.getDate() - 7)

    let total = 0

    for (const mp of moduleProgress) {
      if (mp.completed_at && new Date(mp.completed_at) >= weekAgo) {
        total += mp.time_spent_seconds || 0
      }
    }
    for (const ps of practiceSessions) {
      if (new Date(ps.created_at) >= weekAgo) {
        total += ps.time_seconds || 0
      }
    }
    for (const a of assessments) {
      if (new Date(a.attempted_at) >= weekAgo) {
        total += a.time_taken_seconds || 0
      }
    }

    return total
  }, [moduleProgress, practiceSessions, assessments])

  // ── Modules completed ──────────────────────────────────────────────────

  const modulesCompleted = useMemo(
    () => moduleProgress.filter((mp) => mp.completed).length,
    [moduleProgress]
  )

  const totalModules = useMemo(() => {
    let total = 0
    for (const e of enrolments) {
      const course = courseMap.get(e.course_id)
      if (course) total += course.moduleList.length
    }
    return total
  }, [enrolments, courseMap])

  // ── Average practice score ─────────────────────────────────────────────

  const averagePracticeScore = useMemo(() => {
    const scores: number[] = []

    // Quiz scores from module progress
    for (const mp of moduleProgress) {
      if (mp.quiz_score !== null) scores.push(mp.quiz_score)
    }

    // Assessment scores
    for (const a of assessments) {
      scores.push(a.score)
    }

    // Practice self-ratings (convert 1-5 to percentage)
    for (const ps of practiceSessions) {
      if (ps.self_rating !== null) {
        scores.push(ps.self_rating * 20)
      }
    }

    if (scores.length === 0) return 0
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }, [moduleProgress, assessments, practiceSessions])

  // ── Current streak ─────────────────────────────────────────────────────

  const currentStreak = useMemo(
    () => calculateStreak(moduleProgress, practiceSessions, assessments),
    [moduleProgress, practiceSessions, assessments]
  )

  // ── Course progress ────────────────────────────────────────────────────

  const courseProgress: CourseProgress[] = useMemo(() => {
    return enrolments
      .map((e) => {
        const course = courseMap.get(e.course_id)
        if (!course) return null

        const totalMods = course.moduleList.length
        const completedMods = moduleProgress.filter(
          (mp) => mp.course_id === e.course_id && mp.completed
        ).length

        const lastMod = moduleProgress
          .filter((mp) => mp.course_id === e.course_id && mp.completed_at)
          .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())[0]

        return {
          courseId: e.course_id,
          course,
          totalModules: totalMods,
          completedModules: completedMods,
          percentage: totalMods > 0 ? Math.round((completedMods / totalMods) * 100) : 0,
          lastActivity: lastMod?.completed_at ?? null,
        }
      })
      .filter(Boolean) as CourseProgress[]
  }, [enrolments, moduleProgress, courseMap])

  // ── Skill scores ───────────────────────────────────────────────────────

  const skillScores: SkillScore[] = useMemo(() => {
    const skillMap = new Map<string, { total: number; count: number }>()

    // Initialize all categories
    for (const skillName of Object.keys(SKILL_CATEGORIES)) {
      skillMap.set(skillName, { total: 0, count: 0 })
    }

    // Map practice sessions to skill categories
    for (const ps of practiceSessions) {
      if (ps.self_rating === null) continue
      const score = ps.self_rating * 20 // Convert 1-5 to percentage

      for (const [skillName, keywords] of Object.entries(SKILL_CATEGORIES)) {
        if (keywords.some((kw) => ps.question_type?.toLowerCase().includes(kw.toLowerCase()))) {
          const existing = skillMap.get(skillName)!
          existing.total += score
          existing.count++
        }
      }
    }

    // Map assessment question types
    for (const a of assessments) {
      const course = courseMap.get(a.course_id)
      if (!course) continue

      // Use overall assessment score distributed across skills based on course type
      const title = course.title.toLowerCase()
      if (title.includes('reading') || title.includes('paper 1')) {
        const rc = skillMap.get('Reading Comprehension')!
        rc.total += a.score
        rc.count++
        const ae = skillMap.get('Analysis & Evaluation')!
        ae.total += a.score
        ae.count++
      }
      if (title.includes('writing') || title.includes('paper 2')) {
        const cw = skillMap.get('Creative Writing')!
        cw.total += a.score
        cw.count++
        const ta = skillMap.get('Technical Accuracy')!
        ta.total += a.score
        ta.count++
      }
    }

    return Object.keys(SKILL_CATEGORIES).map((name) => {
      const data = skillMap.get(name)!
      const percentage = data.count > 0 ? Math.round(data.total / data.count) : 0
      return {
        name,
        score: data.count > 0 ? Math.round(data.total / data.count) : 0,
        total: data.count,
        percentage,
      }
    })
  }, [practiceSessions, assessments, courseMap])

  // ── Weekly activity ────────────────────────────────────────────────────

  const weeklyActivity: WeeklyDay[] = useMemo(() => {
    const days: WeeklyDay[] = []
    const now = new Date()

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      const dayStart = startOfDay(date)

      let studySeconds = 0
      let questions = 0

      for (const mp of moduleProgress) {
        if (mp.completed_at && isSameDay(new Date(mp.completed_at), dayStart)) {
          studySeconds += mp.time_spent_seconds || 0
        }
      }
      for (const ps of practiceSessions) {
        if (isSameDay(new Date(ps.created_at), dayStart)) {
          studySeconds += ps.time_seconds || 0
          questions++
        }
      }
      for (const a of assessments) {
        if (isSameDay(new Date(a.attempted_at), dayStart)) {
          studySeconds += a.time_taken_seconds || 0
          questions += a.questions_answered?.length || 0
        }
      }

      days.push({
        label: getDayLabel(dayStart),
        date: dayStart.toISOString().split('T')[0],
        studyMinutes: Math.round(studySeconds / 60),
        questionsAnswered: questions,
      })
    }

    return days
  }, [moduleProgress, practiceSessions, assessments])

  // ── Recommendations ────────────────────────────────────────────────────

  const recommendations: Recommendation[] = useMemo(() => {
    const recs: Recommendation[] = []

    // Find weak skills (below 50%)
    for (const skill of skillScores) {
      if (skill.total > 0 && skill.percentage < 50) {
        recs.push({
          type: 'weak_area',
          title: `Improve your ${skill.name}`,
          description: `Your ${skill.name} score is ${skill.percentage}%. Practice more questions in this area.`,
          href: '/practice',
        })
      }
    }

    // Suggest skills with no data
    for (const skill of skillScores) {
      if (skill.total === 0) {
        recs.push({
          type: 'weak_area',
          title: `Start practising ${skill.name}`,
          description: `You have not attempted any ${skill.name} questions yet.`,
          href: '/practice',
        })
      }
    }

    // Recommend next modules for incomplete courses
    for (const cp of courseProgress) {
      if (cp.percentage < 100) {
        const completedIds = new Set(
          moduleProgress
            .filter((mp) => mp.course_id === cp.courseId && mp.completed)
            .map((mp) => mp.module_id)
        )
        const nextMod = cp.course.moduleList.find((m) => !completedIds.has(m.id))
        if (nextMod) {
          recs.push({
            type: 'next_module',
            title: `Continue: ${nextMod.title}`,
            description: `${cp.course.title} - ${cp.percentage}% complete`,
            href: `/learn/${cp.courseId}/${nextMod.id}`,
          })
        }
      }
    }

    // Suggest revision if there are completed modules with low quiz scores
    const lowScoreModules = moduleProgress.filter(
      (mp) => mp.completed && mp.quiz_score !== null && mp.quiz_score < 60
    )
    if (lowScoreModules.length > 0) {
      recs.push({
        type: 'revision',
        title: 'Revise low-scoring modules',
        description: `You have ${lowScoreModules.length} completed module${lowScoreModules.length === 1 ? '' : 's'} with quiz scores below 60%. Consider revising.`,
        href: '/revision',
      })
    }

    return recs.slice(0, 5) // Cap at 5 recommendations
  }, [skillScores, courseProgress, moduleProgress])

  // ── Recent activity ────────────────────────────────────────────────────

  const recentActivity: ActivityItem[] = useMemo(() => {
    const items: ActivityItem[] = []

    for (const mp of moduleProgress) {
      if (!mp.completed || !mp.completed_at) continue
      const course = courseMap.get(mp.course_id)
      const mod = course?.moduleList.find((m) => m.id === mp.module_id)
      items.push({
        id: mp.id,
        type: 'module',
        title: `Completed Module: ${mod?.title ?? 'Unknown'}`,
        subtitle: course?.title ?? 'Unknown Course',
        score: mp.quiz_score,
        timestamp: mp.completed_at,
      })
    }

    for (const a of assessments) {
      const course = courseMap.get(a.course_id)
      items.push({
        id: a.id,
        type: 'assessment',
        title: `Assessment: ${course?.title ?? 'Unknown'}`,
        subtitle: a.passed ? 'Passed' : 'Not yet passed',
        score: a.score,
        timestamp: a.attempted_at,
      })
    }

    for (const ps of practiceSessions) {
      items.push({
        id: ps.id,
        type: 'practice',
        title: `Practice: ${ps.question_type || 'Question'}`,
        subtitle: `${ps.board} - ${ps.difficulty}`,
        score: ps.self_rating !== null ? ps.self_rating * 20 : null,
        timestamp: ps.created_at,
      })
    }

    // Sort by timestamp descending, take top 10
    items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    return items.slice(0, 10)
  }, [moduleProgress, assessments, practiceSessions, courseMap])

  // ── Exam readiness ─────────────────────────────────────────────────────

  const examReadiness = useMemo(
    () => calculateExamReadiness(courseProgress, averagePracticeScore, skillScores),
    [courseProgress, averagePracticeScore, skillScores]
  )

  return {
    totalStudyTimeSeconds,
    weekStudyTimeSeconds,
    modulesCompleted,
    totalModules,
    averagePracticeScore,
    currentStreak,
    examReadiness,
    courseProgress,
    skillScores,
    weeklyActivity,
    recommendations,
    recentActivity,
    enrolments,
    moduleProgress,
    assessments,
    practiceSessions,
    certificates,
    loading,
    error,
  }
}
