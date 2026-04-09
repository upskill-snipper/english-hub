'use client'

import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { percentageToGCSEGradeLabel, percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

// ── Mock Data ─────────────────────────────────────────────────────────────────

const weeklyRevisionTime = [
  { week: '27 Jan', minutes: 95 },
  { week: '3 Feb', minutes: 120 },
  { week: '10 Feb', minutes: 80 },
  { week: '17 Feb', minutes: 145 },
  { week: '24 Feb', minutes: 160 },
  { week: '3 Mar', minutes: 110 },
  { week: '10 Mar', minutes: 175 },
  { week: '17 Mar', minutes: 185 },
]

const scoreTrend = [
  { date: 'Jan 15', score: 62 },
  { date: 'Jan 28', score: 65 },
  { date: 'Feb 8', score: 60 },
  { date: 'Feb 18', score: 68 },
  { date: 'Mar 1', score: 72 },
  { date: 'Mar 10', score: 70 },
  { date: 'Mar 18', score: 78 },
]

const topicCompletion = [
  { topic: 'Shakespeare — Macbeth', completed: 18, total: 20, percentage: 90 },
  { topic: 'Poetry — Power & Conflict', completed: 12, total: 18, percentage: 67 },
  { topic: 'Language Paper 1 — Explorations', completed: 14, total: 16, percentage: 88 },
  { topic: 'Language Paper 2 — Writers\' Viewpoints', completed: 8, total: 16, percentage: 50 },
  { topic: 'Modern Prose — An Inspector Calls', completed: 10, total: 15, percentage: 67 },
  { topic: 'Unseen Poetry', completed: 5, total: 10, percentage: 50 },
]

const strengths = [
  'Character analysis and quotation embedding',
  'Language Paper 1 creative writing responses',
  'Understanding dramatic irony in Shakespeare',
]

const weaknesses = [
  'Comparing writers\' perspectives (Paper 2 Q4)',
  'Unseen poetry analysis — especially structure',
  'Consistent use of subject terminology',
]

const teacherNextSteps = [
  {
    id: '1',
    step: 'Focus on Language Paper 2 Question 4 — practise comparing viewpoints using the provided model answers.',
    priority: 'high' as const,
  },
  {
    id: '2',
    step: 'Complete the remaining Power & Conflict poetry modules, especially the comparison essay tasks.',
    priority: 'medium' as const,
  },
  {
    id: '3',
    step: 'Attempt one unseen poetry response per week to build confidence with unfamiliar texts.',
    priority: 'medium' as const,
  },
  {
    id: '4',
    step: 'Review the subject terminology flashcard deck — aim for 90%+ on the test mode.',
    priority: 'low' as const,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function getPriorityColour(priority: 'high' | 'medium' | 'low') {
  switch (priority) {
    case 'high':
      return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'medium':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'low':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

function getCompletionColour(percentage: number): string {
  if (percentage >= 80) return 'text-emerald-400'
  if (percentage >= 60) return 'text-amber-400'
  return 'text-red-400'
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ParentProgressPage() {
  const maxMinutes = Math.max(...weeklyRevisionTime.map((w) => w.minutes))
  const maxScore = 100

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/parent">
          <Button variant="ghost" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-heading-lg text-foreground">Progress</h1>
          <p className="text-body-sm text-muted-foreground">
            Detailed breakdown of Olivia&apos;s learning journey
          </p>
        </div>
      </div>

      {/* Weekly revision time - bar chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Weekly Revision Time</CardTitle>
          <CardDescription>Last 8 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2 sm:gap-3" style={{ height: 200 }}>
            {weeklyRevisionTime.map((week, i) => {
              const heightPercent = (week.minutes / maxMinutes) * 100
              const isLatest = i === weeklyRevisionTime.length - 1
              return (
                <div key={week.week} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-xs font-medium text-foreground">
                    {Math.floor(week.minutes / 60)}h{week.minutes % 60 > 0 ? ` ${week.minutes % 60}m` : ''}
                  </span>
                  <div
                    className={cn(
                      'w-full rounded-t-md transition-all',
                      isLatest ? 'bg-primary' : 'bg-primary/30'
                    )}
                    style={{ height: `${heightPercent}%`, minHeight: 8 }}
                  />
                  <span className="text-[10px] text-muted-foreground leading-tight text-center">
                    {week.week}
                  </span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Score trend line */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Score Trend</CardTitle>
          <CardDescription>Average quiz/assessment scores over time</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Simple SVG line chart */}
          <div className="relative w-full" style={{ height: 200 }}>
            <svg
              viewBox={`0 0 ${(scoreTrend.length - 1) * 100} 100`}
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              {/* Grid lines */}
              {[25, 50, 75].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={100 - y}
                  x2={(scoreTrend.length - 1) * 100}
                  y2={100 - y}
                  stroke="currentColor"
                  className="text-border"
                  strokeWidth="0.5"
                />
              ))}

              {/* Gradient fill */}
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path
                d={
                  `M0,${100 - scoreTrend[0].score} ` +
                  scoreTrend
                    .map((point, i) => `L${i * 100},${100 - point.score}`)
                    .join(' ') +
                  ` L${(scoreTrend.length - 1) * 100},100 L0,100 Z`
                }
                fill="url(#scoreGradient)"
              />

              {/* Line */}
              <polyline
                points={scoreTrend
                  .map((point, i) => `${i * 100},${100 - point.score}`)
                  .join(' ')}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {scoreTrend.map((point, i) => (
                <circle
                  key={point.date}
                  cx={i * 100}
                  cy={100 - point.score}
                  r="3"
                  fill="hsl(var(--primary))"
                  stroke="hsl(var(--background))"
                  strokeWidth="1.5"
                />
              ))}
            </svg>

            {/* X-axis labels */}
            <div className="mt-2 flex justify-between">
              {scoreTrend.map((point) => (
                <span key={point.date} className="text-[10px] text-muted-foreground">
                  {point.date}
                </span>
              ))}
            </div>
          </div>

          {/* Trend summary */}
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">
              Improved from {percentageToGCSEGradeLabel(scoreTrend[0].score)} to {percentageToGCSEGradeLabel(scoreTrend[scoreTrend.length - 1].score)}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Module completion by topic */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Module Completion by Topic</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topicCompletion.map((topic) => (
            <div key={topic.topic}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm text-foreground">{topic.topic}</span>
                <span className={cn('text-sm font-bold', getCompletionColour(topic.percentage))}>
                  {topic.completed}/{topic.total}
                </span>
              </div>
              <Progress value={topic.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <CardTitle className="text-base">Strengths</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5">
              {strengths.map((strength, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span className="text-sm text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <CardTitle className="text-base">Areas for Improvement</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5">
              {weaknesses.map((weakness, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span className="text-sm text-muted-foreground">{weakness}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Teacher's recommended next steps */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">Teacher&apos;s Recommended Next Steps</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {teacherNextSteps.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 rounded-lg border border-border p-3 sm:flex-row sm:items-start sm:gap-3"
              >
                <Badge className={cn('shrink-0 w-fit', getPriorityColour(item.priority))}>
                  {item.priority}
                </Badge>
                <p className="text-sm text-muted-foreground">{item.step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
