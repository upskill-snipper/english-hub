'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowUp,
  ArrowDown,
  Minus,
  Users,
  Clock,
  BarChart3,
  Eye,
  EyeOff,
  AlertTriangle,
  Trophy,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { StudentAnalytics } from '@/lib/types'
import {
  calculateEngagementScore,
  classifyEngagement,
  getTimeOfDayDistribution,
  getDayOfWeekDistribution,
  countActiveStudentsInRange,
  avgSessionsPerStudentInRange,
  identifyDisengagedStudents,
  type SessionRecord,
  type EngagementLevel,
} from '@/lib/engagement-metrics'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface EngagementTrackerProps {
  students: StudentAnalytics[]
  sessions: SessionRecord[]
  className?: string
}

/* ── Colour helpers ────────────────────────────────────────────────────────── */

const engagementColors: Record<EngagementLevel, string> = {
  'highly-engaged': 'text-emerald-500',
  'engaged': 'text-green-500',
  'moderate': 'text-amber-500',
  'at-risk': 'text-orange-500',
  'disengaged': 'text-red-500',
}

const engagementBadgeVariants: Record<EngagementLevel, string> = {
  'highly-engaged': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'engaged': 'bg-green-500/10 text-green-500 border-green-500/20',
  'moderate': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  'at-risk': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'disengaged': 'bg-red-500/10 text-red-500 border-red-500/20',
}

function formatHour(hour: number): string {
  if (hour === 0) return '12am'
  if (hour < 12) return `${hour}am`
  if (hour === 12) return '12pm'
  return `${hour - 12}pm`
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function EngagementTracker({
  students,
  sessions,
  className,
}: EngagementTrackerProps) {
  const [anonymousLeaderboard, setAnonymousLeaderboard] = useState(false)

  /* ── Derived data ────────────────────────────────────────────────────────── */

  const now = useMemo(() => new Date(), [])

  // Week boundaries
  const thisWeekStart = useMemo(() => {
    const d = new Date(now)
    d.setDate(d.getDate() - d.getDay() + 1) // Monday
    d.setHours(0, 0, 0, 0)
    return d
  }, [now])

  const lastWeekStart = useMemo(() => {
    const d = new Date(thisWeekStart)
    d.setDate(d.getDate() - 7)
    return d
  }, [thisWeekStart])

  // Active students this week vs last
  const activeThisWeek = useMemo(
    () => countActiveStudentsInRange(sessions, thisWeekStart, now),
    [sessions, thisWeekStart, now],
  )
  const activeLastWeek = useMemo(
    () => countActiveStudentsInRange(sessions, lastWeekStart, thisWeekStart),
    [sessions, lastWeekStart, thisWeekStart],
  )

  // Average sessions per student this week
  const avgSessionsThisWeek = useMemo(
    () =>
      avgSessionsPerStudentInRange(
        sessions,
        students.length,
        thisWeekStart,
        now,
      ),
    [sessions, students.length, thisWeekStart, now],
  )

  // Class engagement score
  const classEngagement = useMemo(() => {
    if (students.length === 0) return { score: 0, trend: 'neutral' as const }

    const thisWeekSessions = sessions.filter(
      (s) => new Date(s.started_at) >= thisWeekStart,
    )
    const lastWeekSessions = sessions.filter((s) => {
      const d = new Date(s.started_at)
      return d >= lastWeekStart && d < thisWeekStart
    })

    const totalModules = students.reduce(
      (sum, st) => sum + st.modules_completed,
      0,
    )
    const totalTime = students.reduce(
      (sum, st) => sum + st.total_time_spent_seconds,
      0,
    )

    // Simple streak approximation from total sessions
    const avgStreak = Math.min(thisWeekSessions.length / Math.max(students.length, 1), 14)

    const score = calculateEngagementScore(
      thisWeekSessions.length,
      totalModules,
      Math.round(avgStreak),
      totalTime,
    )

    const lastScore = calculateEngagementScore(
      lastWeekSessions.length,
      Math.round(totalModules * 0.9), // approximate
      Math.max(Math.round(avgStreak) - 1, 0),
      Math.round(totalTime * 0.9),
    )

    const trend: 'up' | 'down' | 'neutral' =
      score > lastScore + 3 ? 'up' : score < lastScore - 3 ? 'down' : 'neutral'

    return { score, trend }
  }, [students, sessions, thisWeekStart, lastWeekStart])

  const engagementLevel = classifyEngagement(classEngagement.score)

  // Time of day distribution
  const timeDistribution = useMemo(
    () => getTimeOfDayDistribution(sessions),
    [sessions],
  )
  const maxHourCount = useMemo(
    () => Math.max(...timeDistribution.map((t) => t.count), 1),
    [timeDistribution],
  )

  // Day of week distribution
  const dayDistribution = useMemo(
    () => getDayOfWeekDistribution(sessions),
    [sessions],
  )
  const maxDayCount = useMemo(
    () => Math.max(...dayDistribution.map((d) => d.count), 1),
    [dayDistribution],
  )

  // Leaderboard: top 5 most active students by session count
  const leaderboard = useMemo(() => {
    const sessionCounts = new Map<string, number>()
    for (const s of sessions) {
      sessionCounts.set(s.student_id, (sessionCounts.get(s.student_id) ?? 0) + 1)
    }

    return students
      .map((st) => ({
        ...st,
        sessionCount: sessionCounts.get(st.student_id) ?? 0,
      }))
      .sort((a, b) => b.sessionCount - a.sessionCount)
      .slice(0, 5)
  }, [students, sessions])

  // Needs encouragement: 0 sessions in last 7 days
  const needsEncouragement = useMemo(
    () => identifyDisengagedStudents(students, sessions, 7),
    [students, sessions],
  )

  /* ── Trend arrow helper ──────────────────────────────────────────────────── */

  const TrendArrow = ({ trend }: { trend: 'up' | 'down' | 'neutral' }) => {
    if (trend === 'up') return <ArrowUp className="h-4 w-4 text-green-500" />
    if (trend === 'down') return <ArrowDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-muted-foreground" />
  }

  /* ── Render ──────────────────────────────────────────────────────────────── */

  return (
    <div className={cn('space-y-6', className)}>
      {/* ── Top Stats Row ──────────────────────────────────────────────────── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Class Engagement Score */}
        <Card className="border-l-4 border-l-primary">
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Class Engagement
              </p>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className={cn('text-3xl font-bold tabular-nums', engagementColors[engagementLevel])}>
                {classEngagement.score}
              </span>
              <span className="text-sm text-muted-foreground mb-1">/100</span>
              <TrendArrow trend={classEngagement.trend} />
            </div>
            <Badge
              variant="outline"
              className={cn('mt-2 text-[10px] capitalize', engagementBadgeVariants[engagementLevel])}
            >
              {engagementLevel.replace('-', ' ')}
            </Badge>
          </CardContent>
        </Card>

        {/* Active Students */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Active This Week
              </p>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-3xl font-bold tabular-nums text-foreground">
                {activeThisWeek}
              </span>
              <span className="text-sm text-muted-foreground mb-1">
                / {students.length}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Last week: {activeLastWeek}
              {activeThisWeek > activeLastWeek && (
                <span className="ml-1 text-green-500">
                  (+{activeThisWeek - activeLastWeek})
                </span>
              )}
              {activeThisWeek < activeLastWeek && (
                <span className="ml-1 text-red-500">
                  ({activeThisWeek - activeLastWeek})
                </span>
              )}
            </p>
          </CardContent>
        </Card>

        {/* Avg Sessions */}
        <Card className="border-l-4 border-l-purple-500">
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Avg Sessions / Student
              </p>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold tabular-nums text-foreground">
                {avgSessionsThisWeek}
              </span>
              <span className="text-sm text-muted-foreground ml-1">this week</span>
            </div>
          </CardContent>
        </Card>

        {/* Needs Encouragement */}
        <Card className="border-l-4 border-l-amber-500">
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Needs Encouragement
              </p>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold tabular-nums text-foreground">
                {needsEncouragement.length}
              </span>
              <span className="text-sm text-muted-foreground ml-1">students</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              0 sessions in last 7 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ── Distribution Charts Row ────────────────────────────────────────── */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Time of Day */}
        <Card>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-foreground">
                Time of Day Distribution
              </h3>
            </div>
            <div className="flex items-end gap-[3px] h-[120px]">
              {timeDistribution.map(({ hour, count }) => (
                <TooltipProvider key={hour} delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                        <div
                          className={cn(
                            'w-full rounded-t transition-all duration-200',
                            count > 0
                              ? 'bg-primary/70 hover:bg-primary'
                              : 'bg-muted',
                          )}
                          style={{
                            height: `${Math.max((count / maxHourCount) * 100, 2)}%`,
                            minHeight: '2px',
                          }}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      <p className="font-medium">{formatHour(hour)}</p>
                      <p className="text-muted-foreground">{count} sessions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="flex justify-between mt-1.5 text-[9px] text-muted-foreground">
              <span>12am</span>
              <span>6am</span>
              <span>12pm</span>
              <span>6pm</span>
              <span>11pm</span>
            </div>
          </CardContent>
        </Card>

        {/* Day of Week */}
        <Card>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-foreground">
                Day of Week Distribution
              </h3>
            </div>
            <div className="space-y-2">
              {dayDistribution.map(({ day, count }) => (
                <div key={day} className="flex items-center gap-3">
                  <span className="w-8 text-xs text-muted-foreground shrink-0">
                    {day.slice(0, 3)}
                  </span>
                  <div className="flex-1">
                    <Progress
                      value={maxDayCount > 0 ? (count / maxDayCount) * 100 : 0}
                      className="h-5"
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-medium tabular-nums text-foreground">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ── Leaderboard & Needs Encouragement Row ──────────────────────────── */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Engagement Leaderboard */}
        <Card>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-amber-500" />
                <h3 className="text-sm font-medium text-foreground">
                  Engagement Leaderboard
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground">Anonymous</span>
                <Switch
                  checked={anonymousLeaderboard}
                  onCheckedChange={setAnonymousLeaderboard}
                  className="scale-75"
                />
                {anonymousLeaderboard ? (
                  <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />
                ) : (
                  <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </div>
            </div>

            {leaderboard.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity recorded yet.</p>
            ) : (
              <div className="space-y-3">
                {leaderboard.map((student, idx) => {
                  const score = calculateEngagementScore(
                    student.sessionCount,
                    student.modules_completed,
                    0,
                    student.total_time_spent_seconds,
                  )
                  const level = classifyEngagement(score)
                  const medals = ['text-amber-500', 'text-zinc-400', 'text-amber-700']

                  return (
                    <div
                      key={student.student_id}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={cn(
                          'w-5 text-center text-sm font-bold tabular-nums',
                          idx < 3 ? medals[idx] : 'text-muted-foreground',
                        )}
                      >
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {anonymousLeaderboard
                            ? `Student ${idx + 1}`
                            : student.student_name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {student.sessionCount} sessions
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-[10px] capitalize shrink-0',
                          engagementBadgeVariants[level],
                        )}
                      >
                        {score}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Needs Encouragement */}
        <Card>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <h3 className="text-sm font-medium text-foreground">
                Needs Encouragement
              </h3>
              {needsEncouragement.length > 0 && (
                <Badge variant="destructive" className="ml-auto text-[10px]">
                  {needsEncouragement.length}
                </Badge>
              )}
            </div>

            {needsEncouragement.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                  <Activity className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm font-medium text-foreground">All students active!</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Everyone has logged at least one session in the last 7 days.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[280px] overflow-y-auto">
                {needsEncouragement.map((student) => (
                  <div
                    key={student.student_id}
                    className="flex items-center gap-3 rounded-lg border p-2.5"
                  >
                    <div
                      className={cn(
                        'h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold',
                        student.trajectory === 'declining'
                          ? 'bg-red-500/10 text-red-500'
                          : 'bg-amber-500/10 text-amber-500',
                      )}
                    >
                      {student.student_name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {student.student_name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {student.daysSinceLastActive === -1
                          ? 'Never logged in'
                          : `Last active ${student.daysSinceLastActive} day${student.daysSinceLastActive !== 1 ? 's' : ''} ago`}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        'text-[10px] capitalize shrink-0',
                        student.trajectory === 'declining'
                          ? 'bg-red-500/10 text-red-500 border-red-500/20'
                          : 'bg-amber-500/10 text-amber-500 border-amber-500/20',
                      )}
                    >
                      {student.trajectory}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
