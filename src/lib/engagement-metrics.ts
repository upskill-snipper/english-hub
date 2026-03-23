// ── Engagement Metrics ──────────────────────────────────────────────────────
// Pure calculation functions for student engagement tracking.

import type { StudentAnalytics } from '@/lib/types'

/* ── Types ─────────────────────────────────────────────────────────────────── */

export type EngagementLevel =
  | 'highly-engaged'
  | 'engaged'
  | 'moderate'
  | 'at-risk'
  | 'disengaged'

export interface SessionRecord {
  student_id: string
  started_at: string          // ISO date-time
  duration_seconds: number
  modules_completed: number
}

export interface ActivityPattern {
  peakDay: string             // e.g. 'Monday'
  peakHour: number            // 0-23
  avgSessionLength: number    // seconds
}

export interface DailyActivity {
  date: string                // YYYY-MM-DD
  timeSpentSeconds: number
  modulesCompleted: number
}

export interface DisengagedStudent {
  student_id: string
  student_name: string
  daysSinceLastActive: number
  trajectory: 'declining' | 'stable' | 'improving'
  lastSessionDate: string | null
}

/* ── Constants ─────────────────────────────────────────────────────────────── */

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const ENGAGEMENT_THRESHOLDS = {
  'highly-engaged': 80,
  'engaged': 60,
  'moderate': 40,
  'at-risk': 20,
} as const

/* ── Score Calculation ─────────────────────────────────────────────────────── */

/**
 * Compute a 0-100 engagement score from multiple activity signals.
 *
 * Weights:
 *   - sessions count (30%) — normalised against 14 sessions/week target
 *   - modules completed (25%) — normalised against 10 modules target
 *   - streak (25%) — normalised against 14-day streak target
 *   - time spent (20%) — normalised against 3600 seconds (1 hr) target
 */
export function calculateEngagementScore(
  sessions: number,
  modulesCompleted: number,
  streak: number,
  timeSpentSeconds: number,
): number {
  const sessionScore = Math.min(sessions / 14, 1) * 30
  const moduleScore = Math.min(modulesCompleted / 10, 1) * 25
  const streakScore = Math.min(streak / 14, 1) * 25
  const timeScore = Math.min(timeSpentSeconds / 3600, 1) * 20

  return Math.round(Math.min(sessionScore + moduleScore + streakScore + timeScore, 100))
}

/* ── Classification ────────────────────────────────────────────────────────── */

export function classifyEngagement(score: number): EngagementLevel {
  if (score >= ENGAGEMENT_THRESHOLDS['highly-engaged']) return 'highly-engaged'
  if (score >= ENGAGEMENT_THRESHOLDS['engaged']) return 'engaged'
  if (score >= ENGAGEMENT_THRESHOLDS['moderate']) return 'moderate'
  if (score >= ENGAGEMENT_THRESHOLDS['at-risk']) return 'at-risk'
  return 'disengaged'
}

/* ── Streak ─────────────────────────────────────────────────────────────────── */

/**
 * Calculate the current consecutive-day streak from session records.
 * Sessions must be sorted newest-first or the function will sort them.
 */
export function calculateStreak(sessions: SessionRecord[]): number {
  if (sessions.length === 0) return 0

  // Unique dates, sorted descending
  const uniqueDates = [
    ...new Set(
      sessions.map((s) => s.started_at.slice(0, 10)),
    ),
  ].sort((a, b) => b.localeCompare(a))

  if (uniqueDates.length === 0) return 0

  let streak = 1
  for (let i = 1; i < uniqueDates.length; i++) {
    const prev = new Date(uniqueDates[i - 1])
    const curr = new Date(uniqueDates[i])
    const diffMs = prev.getTime() - curr.getTime()
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      streak++
    } else {
      break
    }
  }

  return streak
}

/* ── Activity Pattern ──────────────────────────────────────────────────────── */

export function getActivityPattern(sessions: SessionRecord[]): ActivityPattern {
  if (sessions.length === 0) {
    return { peakDay: 'Monday', peakHour: 9, avgSessionLength: 0 }
  }

  // Day distribution
  const dayCounts: Record<string, number> = {}
  for (const day of DAYS) dayCounts[day] = 0

  // Hour distribution
  const hourCounts: number[] = new Array(24).fill(0)

  let totalDuration = 0

  for (const session of sessions) {
    const dt = new Date(session.started_at)
    const day = DAYS[dt.getDay()]
    dayCounts[day]++
    hourCounts[dt.getHours()]++
    totalDuration += session.duration_seconds
  }

  const peakDay = Object.entries(dayCounts).reduce(
    (best, [day, count]) => (count > best.count ? { day, count } : best),
    { day: 'Monday', count: 0 },
  ).day

  const peakHour = hourCounts.reduce(
    (best, count, hour) => (count > best.count ? { hour, count } : best),
    { hour: 9, count: 0 },
  ).hour

  const avgSessionLength = Math.round(totalDuration / sessions.length)

  return { peakDay, peakHour, avgSessionLength }
}

/* ── Time-of-Day Distribution ──────────────────────────────────────────────── */

export function getTimeOfDayDistribution(
  sessions: SessionRecord[],
): { hour: number; count: number }[] {
  const hourCounts: number[] = new Array(24).fill(0)
  for (const session of sessions) {
    const hour = new Date(session.started_at).getHours()
    hourCounts[hour]++
  }
  return hourCounts.map((count, hour) => ({ hour, count }))
}

/* ── Day-of-Week Distribution ──────────────────────────────────────────────── */

export function getDayOfWeekDistribution(
  sessions: SessionRecord[],
): { day: string; count: number }[] {
  const dayCounts: Record<string, number> = {}
  for (const day of DAYS) dayCounts[day] = 0

  for (const session of sessions) {
    const day = DAYS[new Date(session.started_at).getDay()]
    dayCounts[day]++
  }

  return DAYS.map((day) => ({ day, count: dayCounts[day] }))
}

/* ── Disengaged Students ───────────────────────────────────────────────────── */

/**
 * Identify students with declining or zero activity.
 * Returns students who have had no sessions in the last `thresholdDays` days,
 * or whose trajectory is 'declining'.
 */
export function identifyDisengagedStudents(
  students: StudentAnalytics[],
  sessions: SessionRecord[],
  thresholdDays = 7,
): DisengagedStudent[] {
  const now = new Date()
  const thresholdDate = new Date(now.getTime() - thresholdDays * 24 * 60 * 60 * 1000)

  // Group sessions by student
  const sessionsByStudent = new Map<string, SessionRecord[]>()
  for (const s of sessions) {
    const list = sessionsByStudent.get(s.student_id) ?? []
    list.push(s)
    sessionsByStudent.set(s.student_id, list)
  }

  const results: DisengagedStudent[] = []

  for (const student of students) {
    const studentSessions = sessionsByStudent.get(student.student_id) ?? []
    const recentSessions = studentSessions.filter(
      (s) => new Date(s.started_at) >= thresholdDate,
    )

    // Zero recent sessions or declining trajectory
    if (recentSessions.length === 0 || student.trajectory === 'declining') {
      const lastSession = studentSessions.length > 0
        ? studentSessions.reduce((latest, s) =>
            s.started_at > latest.started_at ? s : latest,
          )
        : null

      const daysSinceLastActive = lastSession
        ? Math.floor(
            (now.getTime() - new Date(lastSession.started_at).getTime()) /
              (1000 * 60 * 60 * 24),
          )
        : Infinity

      results.push({
        student_id: student.student_id,
        student_name: student.student_name,
        daysSinceLastActive: daysSinceLastActive === Infinity ? -1 : daysSinceLastActive,
        trajectory: student.trajectory,
        lastSessionDate: lastSession?.started_at.slice(0, 10) ?? null,
      })
    }
  }

  // Sort: most disengaged first
  return results.sort((a, b) => b.daysSinceLastActive - a.daysSinceLastActive)
}

/* ── Heatmap Data Builder ──────────────────────────────────────────────────── */

/**
 * Build 12 weeks of daily activity data for a student, suitable for a
 * contribution-graph heatmap.
 */
export function buildHeatmapData(
  sessions: SessionRecord[],
  weeks = 12,
): DailyActivity[] {
  const now = new Date()
  const startDate = new Date(now)
  startDate.setDate(startDate.getDate() - weeks * 7 + 1)
  startDate.setHours(0, 0, 0, 0)

  // Index sessions by date
  const dateMap = new Map<string, { time: number; modules: number }>()
  for (const s of sessions) {
    const dateKey = s.started_at.slice(0, 10)
    const existing = dateMap.get(dateKey) ?? { time: 0, modules: 0 }
    existing.time += s.duration_seconds
    existing.modules += s.modules_completed
    dateMap.set(dateKey, existing)
  }

  const result: DailyActivity[] = []
  const cursor = new Date(startDate)

  for (let i = 0; i < weeks * 7; i++) {
    const dateKey = cursor.toISOString().slice(0, 10)
    const data = dateMap.get(dateKey)
    result.push({
      date: dateKey,
      timeSpentSeconds: data?.time ?? 0,
      modulesCompleted: data?.modules ?? 0,
    })
    cursor.setDate(cursor.getDate() + 1)
  }

  return result
}

/* ── Weekly Comparison Helpers ──────────────────────────────────────────────── */

export function countActiveStudentsInRange(
  sessions: SessionRecord[],
  fromDate: Date,
  toDate: Date,
): number {
  const activeIds = new Set<string>()
  for (const s of sessions) {
    const d = new Date(s.started_at)
    if (d >= fromDate && d < toDate) {
      activeIds.add(s.student_id)
    }
  }
  return activeIds.size
}

export function avgSessionsPerStudentInRange(
  sessions: SessionRecord[],
  studentCount: number,
  fromDate: Date,
  toDate: Date,
): number {
  if (studentCount === 0) return 0
  const count = sessions.filter((s) => {
    const d = new Date(s.started_at)
    return d >= fromDate && d < toDate
  }).length
  return Math.round((count / studentCount) * 10) / 10
}
