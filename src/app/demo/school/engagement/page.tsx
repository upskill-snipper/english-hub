'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'
import {
  Users,
  Activity,
  Clock,
  FileText,
  TrendingUp,
  TrendingDown,
  Info,
  Bell,
  Flame,
  BookOpen,
  ClipboardList,
  FolderOpen,
  BarChart3,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { DEMO_STUDENTS, DEMO_CLASSES } from '@/data/demo-data'
import { Heatmap, RankBars } from '@/components/dataviz'

// -- Seeded random helper -------------------------------------------------------

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// -- Engagement heatmap data (7 days x 24 hours) --------------------------------

function generateHeatmapData(): number[][] {
  const grid: number[][] = []
  for (let day = 0; day < 7; day++) {
    const row: number[] = []
    for (let hour = 0; hour < 24; hour++) {
      const seed = day * 100 + hour + 42
      let base = seededRandom(seed)

      // Peak morning (7-9am)
      if (hour >= 7 && hour <= 9) base = 0.6 + seededRandom(seed + 1) * 0.4
      // Moderate midday (10am-2pm)
      else if (hour >= 10 && hour <= 14) base = 0.3 + seededRandom(seed + 2) * 0.4
      // Peak evening (6-9pm)
      else if (hour >= 18 && hour <= 21) base = 0.55 + seededRandom(seed + 3) * 0.45
      // Low overnight (11pm-6am)
      else if (hour >= 23 || hour <= 5) base = seededRandom(seed + 4) * 0.1
      // Moderate afternoon (3-5pm)
      else if (hour >= 15 && hour <= 17) base = 0.25 + seededRandom(seed + 5) * 0.35

      // Weekends slightly lower overall
      if (day >= 5) base *= 0.65

      row.push(Math.round(base * 100))
    }
    grid.push(row)
  }
  return grid
}

const HEATMAP_DATA = generateHeatmapData()
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// -- Year group engagement data -------------------------------------------------

const YEAR_GROUP_ENGAGEMENT = [
  {
    year: 'Year 7',
    students: 64,
    activePct: 91,
    avgSessions: 4.2,
    avgDuration: '18 min',
    trend: 'up' as const,
  },
  {
    year: 'Year 8',
    students: 58,
    activePct: 87,
    avgSessions: 3.8,
    avgDuration: '21 min',
    trend: 'up' as const,
  },
  {
    year: 'Year 9',
    students: 62,
    activePct: 82,
    avgSessions: 3.5,
    avgDuration: '22 min',
    trend: 'down' as const,
  },
  {
    year: 'Year 10',
    students: 54,
    activePct: 88,
    avgSessions: 4.5,
    avgDuration: '26 min',
    trend: 'up' as const,
  },
  {
    year: 'Year 11',
    students: 52,
    activePct: 93,
    avgSessions: 5.1,
    avgDuration: '28 min',
    trend: 'up' as const,
  },
  {
    year: 'Year 12',
    students: 30,
    activePct: 79,
    avgSessions: 3.2,
    avgDuration: '24 min',
    trend: 'down' as const,
  },
  {
    year: 'Year 13',
    students: 22,
    activePct: 85,
    avgSessions: 4.8,
    avgDuration: '31 min',
    trend: 'up' as const,
  },
]

// -- Most active students -------------------------------------------------------

const MOST_ACTIVE_STUDENTS = [
  { id: 's1', name: 'Amelia Richardson', streak: 42, sessions: 12 },
  { id: 's2', name: 'Oliver Chen', streak: 38, sessions: 11 },
  { id: 's3', name: 'Sophie Williams', streak: 35, sessions: 10 },
  { id: 's4', name: 'James Okonkwo', streak: 31, sessions: 9 },
  { id: 's5', name: 'Chloe Patel', streak: 28, sessions: 9 },
  { id: 's6', name: 'Ethan Murray', streak: 26, sessions: 8 },
  { id: 's7', name: 'Isabella Novak', streak: 24, sessions: 8 },
  { id: 's8', name: 'Noah Begum', streak: 22, sessions: 7 },
  { id: 's9', name: 'Mia Thompson', streak: 20, sessions: 7 },
  { id: 's10', name: 'Liam Carter', streak: 18, sessions: 7 },
]

// -- Inactive students (7+ days) ------------------------------------------------

const INACTIVE_STUDENTS = [
  { id: 'si1', name: 'Tyler Robinson', lastActive: '2026-03-22', daysInactive: 13 },
  { id: 'si2', name: 'Grace Hutchinson', lastActive: '2026-03-24', daysInactive: 11 },
  { id: 'si3', name: 'Kyle Bennett', lastActive: '2026-03-25', daysInactive: 10 },
  { id: 'si4', name: 'Priya Sharma', lastActive: '2026-03-26', daysInactive: 9 },
  { id: 'si5', name: "Brandon O'Neill", lastActive: '2026-03-27', daysInactive: 8 },
  { id: 'si6', name: 'Fatima Al-Rashid', lastActive: '2026-03-28', daysInactive: 7 },
  { id: 'si7', name: 'Callum Frost', lastActive: '2026-03-28', daysInactive: 7 },
]

// -- Content engagement data ----------------------------------------------------

const POPULAR_COURSES = [
  { name: 'Macbeth - Full GCSE Course', views: 1284, trend: '+12%' },
  { name: 'AQA Language Paper 1', views: 1102, trend: '+8%' },
  { name: 'An Inspector Calls', views: 987, trend: '+15%' },
  { name: 'Poetry: Power & Conflict', views: 876, trend: '+5%' },
  { name: 'A Christmas Carol', views: 812, trend: '+3%' },
]

const POPULAR_QUIZZES = [
  { name: 'Macbeth Key Quotes Quiz', attempts: 342, avgScore: 74 },
  { name: 'Language Devices Identifier', attempts: 298, avgScore: 68 },
  { name: 'Inspector Calls Context Quiz', attempts: 276, avgScore: 71 },
  { name: 'Poetry Terminology Match', attempts: 254, avgScore: 66 },
  { name: 'Grammar & Punctuation Test', attempts: 231, avgScore: 72 },
]

const POPULAR_RESOURCES = [
  { name: 'GCSE English Revision Guide (PDF)', downloads: 198 },
  { name: 'Quote Bank: Shakespeare Texts', downloads: 176 },
  { name: 'Essay Structure Template', downloads: 164 },
  { name: 'Language Paper 1 Model Answers', downloads: 152 },
  { name: 'Poetry Comparison Framework', downloads: 141 },
]

// -- Time-of-day analysis -------------------------------------------------------

const TIME_OF_DAY = [
  { label: '6-8am', value: 12, period: 'Early Morning' },
  { label: '8-10am', value: 78, period: 'Morning' },
  { label: '10-12pm', value: 45, period: 'Late Morning' },
  { label: '12-2pm', value: 38, period: 'Lunch' },
  { label: '2-4pm', value: 28, period: 'Early Afternoon' },
  { label: '4-6pm', value: 42, period: 'After School' },
  { label: '6-8pm', value: 72, period: 'Evening' },
  { label: '8-10pm', value: 65, period: 'Late Evening' },
  { label: '10-12am', value: 18, period: 'Night' },
]

// -- Page component -------------------------------------------------------------

export default function EngagementPage() {
  const t = useT()
  const [remindersSent, setRemindersSent] = useState<Set<string>>(new Set())

  const totalStudents = DEMO_STUDENTS.length > 0 ? DEMO_STUDENTS.length : 342

  function handleSendReminder(studentId: string, studentName: string) {
    setRemindersSent((prev) => new Set(prev).add(studentId))
    toast.success(`${t('demo.b15.engagement.toast_reminder_pre')} ${studentName}`, {
      description: t('demo.b15.engagement.toast_reminder_desc'),
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 text-center">
        <p className="text-sm text-amber-700 dark:text-amber-300">
          <Info className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
          {t('demo.b15.engagement.banner')}{' '}
          <Link
            href="/for-schools/register"
            className="underline underline-offset-2 hover:text-amber-600 dark:hover:text-amber-200 font-medium"
          >
            {t('demo.b15.engagement.register_link')}
          </Link>{' '}
          {t('demo.b15.engagement.register_sub')}
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Activity className="w-8 h-8 text-primary" />
            {t('demo.b15.engagement.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('demo.b15.engagement.subtitle')}</p>
        </div>

        {/* ── Engagement stats cards ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('demo.b15.engagement.dau')}</p>
                  <p className="text-2xl font-bold mt-1">
                    287<span className="text-base font-normal text-muted-foreground">/342</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{t('demo.b15.engagement.dau_pct')}</span>
                  <span className="text-primary">{t('demo.b15.engagement.dau_vs')}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '84%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('demo.b15.engagement.weekly_login')}
                  </p>
                  <p className="text-2xl font-bold mt-1">
                    305<span className="text-base font-normal text-muted-foreground">/342</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">
                    {t('demo.b15.engagement.weekly_pct')}
                  </span>
                  <span className="text-primary">{t('demo.b15.engagement.weekly_vs')}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '89%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('demo.b15.engagement.avg_session')}
                  </p>
                  <p className="text-2xl font-bold mt-1">
                    23
                    <span className="text-base font-normal text-muted-foreground">
                      {' '}
                      {t('demo.b15.engagement.avg_session_min')}
                    </span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">
                    {t('demo.b15.engagement.avg_target')}
                  </span>
                  <span className="text-accent">{t('demo.b15.engagement.avg_vs')}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/60">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t('demo.b15.engagement.content_today')}
                  </p>
                  <p className="text-2xl font-bold mt-1">
                    456
                    <span className="text-base font-normal text-muted-foreground">
                      {' '}
                      {t('demo.b15.engagement.pages_suffix')}
                    </span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-amber-700 dark:text-amber-300" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{t('demo.b15.engagement.avg_day')}</span>
                  <span className="text-amber-700 dark:text-amber-300">
                    {t('demo.b15.engagement.content_vs')}
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Engagement Heatmap ─────────────────────────────────── */}
        <Card className="bg-card border-border/60 mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              {t('demo.b15.engagement.heatmap_title')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('demo.b15.engagement.heatmap_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Heatmap
              rows={DAY_LABELS}
              cols={Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))}
              getValue={(r, c) => HEATMAP_DATA[r][c]}
              getLabel={(r, c) =>
                `${DAY_LABELS[r]} ${c.toString().padStart(2, '0')}:00 - ${HEATMAP_DATA[r][c]}% activity`
              }
            />
            {/* Legend */}
            <div className="flex items-center gap-2 mt-3 justify-end">
              <span className="text-xs text-muted-foreground">
                {t('demo.b15.engagement.legend_less')}
              </span>
              <div className="w-4 h-4 rounded-sm bg-muted" />
              <div className="w-4 h-4 rounded-sm bg-primary/20" />
              <div className="w-4 h-4 rounded-sm bg-primary/40" />
              <div className="w-4 h-4 rounded-sm bg-primary/60" />
              <div className="w-4 h-4 rounded-sm bg-primary/80" />
              <div className="w-4 h-4 rounded-sm bg-primary" />
              <span className="text-xs text-muted-foreground">
                {t('demo.b15.engagement.legend_more')}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* ── Year Group Engagement table ────────────────────────── */}
        <Card className="bg-card border-border/60 mb-8">
          <CardHeader>
            <CardTitle className="text-lg">{t('demo.b15.engagement.year_group_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">
                      {t('demo.b15.engagement.col_year')}
                    </th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">
                      {t('demo.b15.engagement.col_students')}
                    </th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">
                      {t('demo.b15.engagement.col_active_pct')}
                    </th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">
                      {t('demo.b15.engagement.col_avg_sessions')}
                    </th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">
                      {t('demo.b15.engagement.col_avg_duration')}
                    </th>
                    <th className="text-center py-3 px-3 text-muted-foreground font-medium">
                      {t('demo.b15.engagement.col_trend')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {YEAR_GROUP_ENGAGEMENT.map((yg) => (
                    <tr key={yg.year} className="border-b border-border/40 hover:bg-muted/50">
                      <td className="py-3 px-3 font-medium">{yg.year}</td>
                      <td className="py-3 px-3 text-right text-muted-foreground">{yg.students}</td>
                      <td className="py-3 px-3 text-right">
                        <span
                          className={
                            yg.activePct >= 85
                              ? 'text-primary'
                              : yg.activePct >= 75
                                ? 'text-amber-700 dark:text-amber-300'
                                : 'text-red-700 dark:text-red-300'
                          }
                        >
                          {yg.activePct}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right text-muted-foreground">
                        {yg.avgSessions}
                      </td>
                      <td className="py-3 px-3 text-right text-muted-foreground">
                        {yg.avgDuration}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {yg.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-primary inline-block" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400 inline-block" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* ── Most Active Students (top 10) ──────────────────── */}
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                {t('demo.b15.engagement.most_active_title')}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {t('demo.b15.engagement.most_active_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {MOST_ACTIVE_STUDENTS.map((student, idx) => (
                  <Link
                    key={student.id}
                    href={`/demo/school/students/${student.id}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-sm font-bold text-muted-foreground">
                        {idx + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {student.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {student.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="outline"
                        className="border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs"
                      >
                        <Flame className="w-3 h-3 mr-1" />
                        {student.streak}
                        {t('demo.b15.engagement.streak_suffix')}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {student.sessions} {t('demo.b15.engagement.sessions_suffix')}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ── Inactive Students (7+ days) ────────────────────── */}
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-700 dark:text-red-300" />
                {t('demo.b15.engagement.inactive_title')}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {t('demo.b15.engagement.inactive_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {INACTIVE_STUDENTS.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-red-500/5 border border-red-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-xs font-bold text-red-700 dark:text-red-300">
                        {student.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t('demo.b15.engagement.last_active')} {student.lastActive}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className="border-red-500/30 text-red-700 dark:text-red-300 text-xs"
                      >
                        {student.daysInactive}
                        {t('demo.b15.engagement.days_inactive_suffix')}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-xs h-7"
                        disabled={remindersSent.has(student.id)}
                        onClick={() => handleSendReminder(student.id, student.name)}
                      >
                        {remindersSent.has(student.id)
                          ? t('demo.b15.engagement.sent')
                          : t('demo.b15.engagement.send_reminder')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Content Engagement ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Popular Courses */}
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                {t('demo.b15.engagement.popular_courses')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {POPULAR_COURSES.map((course, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-muted-foreground w-4">{idx + 1}</span>
                      <span className="text-sm truncate">{course.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-xs text-muted-foreground">
                        {course.views} {t('demo.b15.engagement.views_suffix')}
                      </span>
                      <span className="text-xs text-primary">{course.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Most Attempted Quizzes */}
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-amber-700 dark:text-amber-300" />
                {t('demo.b15.engagement.popular_quizzes')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {POPULAR_QUIZZES.map((quiz, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-muted-foreground w-4">{idx + 1}</span>
                      <span className="text-sm truncate">{quiz.name}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="text-xs text-muted-foreground">
                        {quiz.attempts} {t('demo.b15.engagement.attempts_suffix')}
                      </span>
                      <span className="text-xs text-amber-700 dark:text-amber-300">
                        {quiz.avgScore}
                        {t('demo.b15.engagement.avg_score_suffix')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Most Viewed Resources */}
          <Card className="bg-card border-border/60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-primary" />
                {t('demo.b15.engagement.popular_resources')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {POPULAR_RESOURCES.map((resource, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-muted-foreground w-4">{idx + 1}</span>
                      <span className="text-sm truncate">{resource.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0 ml-2">
                      {resource.downloads} {t('demo.b15.engagement.downloads_suffix')}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Time-of-Day Analysis ───────────────────────────────── */}
        <Card className="bg-card border-border/60">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              {t('demo.b15.engagement.time_of_day')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('demo.b15.engagement.time_of_day_desc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RankBars
              data={TIME_OF_DAY.map((slot) => ({ label: slot.label, value: slot.value }))}
              labelKey="label"
              valueKey="value"
              height={Math.max(220, TIME_OF_DAY.length * 30)}
              suffix="%"
            />
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                <span className="text-xs text-muted-foreground">
                  {t('demo.b15.engagement.peak_hours')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-primary/60" />
                <span className="text-xs text-muted-foreground">
                  {t('demo.b15.engagement.moderate')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-muted" />
                <span className="text-xs text-muted-foreground">
                  {t('demo.b15.engagement.low')}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
