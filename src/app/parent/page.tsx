'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Clock,
  Flame,
  GraduationCap,
  FileText,
  Trophy,
  TrendingUp,
  Users,
  Calendar,
  Award,
  Target,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// ── Mock Data ─────────────────────────────────────────────────────────────────

const childInfo = {
  name: 'Olivia Thompson',
  initials: 'OT',
  yearGroup: 'Year 10',
  school: 'Greenfield Academy',
  class: '10B English',
  workingAtGrade: 6,
  predictedGrade: 7,
  targetGrade: 8,
}

const weeklyActivity = {
  timeSpentMinutes: 185,
  modulesCompleted: 12,
  streak: 5,
}

const quickStats = {
  totalModulesDone: 87,
  mockExamsTaken: 4,
  essaysSubmitted: 6,
}

const classComparison = {
  percentile: 78,
  classAvgGrade: 5.4,
}

const upcomingAssignments = [
  {
    id: '1',
    title: 'An Inspector Calls — Essay Plan',
    dueDate: '2026-03-25',
    subject: 'Literature',
    status: 'not_started' as const,
  },
  {
    id: '2',
    title: 'Language Paper 1 — Mock Exam',
    dueDate: '2026-03-28',
    subject: 'Language',
    status: 'in_progress' as const,
  },
  {
    id: '3',
    title: 'Power & Conflict Poetry Revision',
    dueDate: '2026-04-02',
    subject: 'Literature',
    status: 'not_started' as const,
  },
]

const recentAchievements = [
  {
    id: '1',
    title: 'Macbeth Mastery',
    description: 'Completed all Macbeth revision modules with 85%+ score',
    date: '2026-03-20',
    type: 'certificate' as const,
  },
  {
    id: '2',
    title: '5-Day Streak',
    description: 'Studied for 5 consecutive days',
    date: '2026-03-19',
    type: 'streak' as const,
  },
  {
    id: '3',
    title: 'Essay Excellence',
    description: 'Scored Grade 8 on practice essay response',
    date: '2026-03-17',
    type: 'grade' as const,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function getGradeColour(grade: number): string {
  if (grade >= 7) return 'text-emerald-400'
  if (grade >= 5) return 'text-amber-400'
  return 'text-red-400'
}

function getGradeBg(grade: number): string {
  if (grade >= 7) return 'bg-emerald-500/10 border-emerald-500/20'
  if (grade >= 5) return 'bg-amber-500/10 border-amber-500/20'
  return 'bg-red-500/10 border-red-500/20'
}

function getStatusBadge(status: 'not_started' | 'in_progress' | 'completed') {
  switch (status) {
    case 'completed':
      return <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Done</Badge>
    case 'in_progress':
      return <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">In Progress</Badge>
    default:
      return <Badge variant="secondary">Not Started</Badge>
  }
}

function formatDueDate(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Due today'
  if (diffDays === 1) return 'Due tomorrow'
  if (diffDays < 7) return `Due in ${diffDays} days`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

function getAchievementIcon(type: 'certificate' | 'streak' | 'grade') {
  switch (type) {
    case 'certificate':
      return <Award className="h-4 w-4 text-amber-400" />
    case 'streak':
      return <Flame className="h-4 w-4 text-orange-400" />
    case 'grade':
      return <Target className="h-4 w-4 text-emerald-400" />
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-heading-lg text-foreground">Parent Dashboard</h1>
        <p className="mt-1 text-body-sm text-muted-foreground">
          Track {childInfo.name.split(' ')[0]}&apos;s learning progress and achievements
        </p>
      </div>

      {/* Child info card */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">
                  {childInfo.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-bold text-foreground">{childInfo.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {childInfo.yearGroup} &middot; {childInfo.school}
                </p>
                <p className="text-xs text-muted-foreground">{childInfo.class}</p>
              </div>
            </div>

            {/* Grade indicators */}
            <div className={cn(
              'flex items-center gap-3 rounded-xl border px-4 py-3',
              getGradeBg(childInfo.predictedGrade)
            )}>
              <div className="text-center">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Working At
                </p>
                <p className={cn('text-3xl font-extrabold', getGradeColour(childInfo.workingAtGrade))}>
                  {childInfo.workingAtGrade}
                </p>
              </div>
              <Separator orientation="vertical" className="h-10" />
              <div className="text-center">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Predicted
                </p>
                <p className={cn('text-3xl font-extrabold', getGradeColour(childInfo.predictedGrade))}>
                  {childInfo.predictedGrade}
                </p>
              </div>
              <Separator orientation="vertical" className="h-10" />
              <div className="text-center">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Target
                </p>
                <p className="text-3xl font-extrabold text-foreground/60">
                  {childInfo.targetGrade}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* This week's activity */}
      <div>
        <h3 className="mb-3 text-heading-md text-foreground">This Week</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {Math.floor(weeklyActivity.timeSpentMinutes / 60)}h {weeklyActivity.timeSpentMinutes % 60}m
                </p>
                <p className="text-xs text-muted-foreground">Time spent</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                <BookOpen className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{weeklyActivity.modulesCompleted}</p>
                <p className="text-xs text-muted-foreground">Modules completed</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{weeklyActivity.streak} days</p>
                <p className="text-xs text-muted-foreground">Current streak</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick stats & class comparison */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Quick stats */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Total modules done</span>
              </div>
              <span className="text-sm font-bold text-foreground">{quickStats.totalModulesDone}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Mock exams taken</span>
              </div>
              <span className="text-sm font-bold text-foreground">{quickStats.mockExamsTaken}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Essays submitted</span>
              </div>
              <span className="text-sm font-bold text-foreground">{quickStats.essaysSubmitted}</span>
            </div>
          </CardContent>
        </Card>

        {/* Class comparison */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">How Your Child Compares</CardTitle>
            <CardDescription>Anonymised class comparison</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Class percentile</span>
                <span className="text-sm font-bold text-foreground">
                  Top {100 - classComparison.percentile}%
                </span>
              </div>
              <div className="relative">
                <Progress value={classComparison.percentile} className="h-3" />
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {childInfo.name.split(' ')[0]} is performing better than {classComparison.percentile}% of the class
              </p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Class average grade</span>
              </div>
              <span className="text-sm font-bold text-foreground">{classComparison.classAvgGrade}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-muted-foreground">Working at grade</span>
              </div>
              <span className={cn('text-sm font-bold', getGradeColour(childInfo.workingAtGrade))}>
                {childInfo.workingAtGrade}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-muted-foreground">Predicted grade</span>
              </div>
              <span className={cn('text-sm font-bold', getGradeColour(childInfo.predictedGrade))}>
                {childInfo.predictedGrade}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming assignments */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Upcoming Assignments</CardTitle>
            <Badge variant="secondary" className="text-xs">
              {upcomingAssignments.length} pending
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex flex-col gap-2 rounded-lg border border-border p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{assignment.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {assignment.subject} &middot; {formatDueDate(assignment.dueDate)}
                    </p>
                  </div>
                </div>
                {getStatusBadge(assignment.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent achievements */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Recent Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-amber-400" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-start gap-3 rounded-lg border border-border p-3"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/50">
                  {getAchievementIcon(achievement.type)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    {new Date(achievement.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick links */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link href="/parent/progress">
          <Card className="cursor-pointer transition-shadow hover:shadow-card-hover">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">View Detailed Progress</p>
                  <p className="text-xs text-muted-foreground">Charts, trends & analysis</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
        <Link href="/parent/reports">
          <Card className="cursor-pointer transition-shadow hover:shadow-card-hover">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">View Reports</p>
                  <p className="text-xs text-muted-foreground">Reports from teachers</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
