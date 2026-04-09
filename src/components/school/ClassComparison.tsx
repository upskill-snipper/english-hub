'use client'

import { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Users,
  CheckCircle,
  Percent,
  Activity,
  Download,
  Loader2,
  Plus,
  X,
  Scale,
  BookOpen,
  PenLine,
  FileSearch,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, formatPercentageWithGrade } from '@/lib/grades'
import type { Class, WeakArea, Recommendation } from '@/lib/types'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ── Types ────────────────────────────────────────────────────────────────────

interface StudentSummary {
  student_id: string
  full_name: string | null
  email: string
  year_group: string | null
  avg_quiz_score: number | null
  modules_completed: number
  total_modules_started: number
  completion_rate: number
  time_spent_seconds: number
  certificates_count: number
  trajectory: 'improving' | 'declining' | 'stable' | 'insufficient_data'
  last_activity: string | null
}

interface TrendWeek {
  week_start: string
  avg_score: number
  active_students: number
  modules_completed: number
}

interface AnalyticsResponse {
  class_id: string
  class_name: string
  student_count: number
  avg_score: number | null
  median_score: number | null
  completion_rate: number
  avg_time_spent_minutes: number
  certificates_count: number
  total_modules_completed: number
  weak_areas: WeakArea[]
  recommendations: Recommendation[]
  students_at_risk: StudentSummary[]
  student_summaries: StudentSummary[]
  trends: TrendWeek[]
}

interface ClassWithAnalytics {
  classInfo: Class & { teacher_name?: string }
  analytics: AnalyticsResponse
}

interface SkillAverage {
  skill: string
  avgScore: number
}

// ── Colour palette for classes ──────────────────────────────────────────────

const CLASS_COLORS = [
  { bg: 'bg-blue-500', text: 'text-blue-400', hex: '#3b82f6', light: 'bg-blue-500/10' },
  { bg: 'bg-emerald-500', text: 'text-emerald-400', hex: '#10b981', light: 'bg-emerald-500/10' },
  { bg: 'bg-amber-500', text: 'text-amber-400', hex: '#f59e0b', light: 'bg-amber-500/10' },
  { bg: 'bg-purple-500', text: 'text-purple-400', hex: '#a855f7', light: 'bg-purple-500/10' },
]

// ── Grade helpers ───────────────────────────────────────────────────────────

function scoreToGrade(score: number): number {
  if (score >= 90) return 9
  if (score >= 80) return 8
  if (score >= 70) return 7
  if (score >= 60) return 6
  if (score >= 50) return 5
  if (score >= 40) return 4
  if (score >= 30) return 3
  if (score >= 20) return 2
  return 1
}

function gradeColor(grade: number): string {
  if (grade >= 7) return '#22c55e'
  if (grade >= 5) return '#f59e0b'
  if (grade >= 4) return '#f97316'
  return '#ef4444'
}

function scoreColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

// ── Skill categories ────────────────────────────────────────────────────────

const SKILL_CATEGORIES = [
  'Reading Comprehension',
  'Language Analysis',
  'Structural Analysis',
  'Creative Writing',
  'Analytical Writing',
  'Quote Integration',
  'Comparison Skills',
  'Evaluation',
  'SPaG',
] as const

const SKILL_SHORT_LABELS: Record<string, string> = {
  'Reading Comprehension': 'Reading',
  'Language Analysis': 'Lang. Analysis',
  'Structural Analysis': 'Structure',
  'Creative Writing': 'Creative',
  'Analytical Writing': 'Analytical',
  'Quote Integration': 'Quotes',
  'Comparison Skills': 'Comparison',
  Evaluation: 'Evaluation',
  SPaG: 'SPaG',
}

// Year group normalisation factors (relative difficulty multiplier)
const YEAR_NORMALISATION: Record<string, number> = {
  '7': 1.25,
  '8': 1.2,
  '9': 1.15,
  '10': 1.05,
  '11': 1.0,
  '12': 0.95,
  '13': 0.9,
}

function getNormalisationFactor(yearGroup: string | null): number {
  if (!yearGroup) return 1.0
  const stripped = yearGroup.replace(/[^0-9]/g, '')
  return YEAR_NORMALISATION[stripped] ?? 1.0
}

// ── Insight generator ───────────────────────────────────────────────────────

interface Insight {
  type: 'positive' | 'warning' | 'info'
  message: string
}

function generateInsights(classes: ClassWithAnalytics[], normalise: boolean): Insight[] {
  const insights: Insight[] = []
  if (classes.length < 2) return insights

  const getScore = (c: ClassWithAnalytics) => {
    const raw = c.analytics.avg_score ?? 0
    if (!normalise) return raw
    const factor = getNormalisationFactor(c.classInfo.year_group)
    return Math.min(raw * factor, 100)
  }

  // Compare average scores
  const sorted = [...classes].sort((a, b) => getScore(b) - getScore(a))
  const top = sorted[0]
  const bottom = sorted[sorted.length - 1]
  const diff = Math.round(getScore(top) - getScore(bottom))
  if (diff > 5) {
    insights.push({
      type: diff > 15 ? 'warning' : 'info',
      message: `${top.analytics.class_name} scores ${diff}pp higher on average than ${bottom.analytics.class_name}${normalise ? ' (normalised)' : ''}.`,
    })
  }

  // Compare at-risk students
  for (let i = 0; i < classes.length; i++) {
    for (let j = i + 1; j < classes.length; j++) {
      const a = classes[i]
      const b = classes[j]
      const aRisk = a.analytics.students_at_risk.length
      const bRisk = b.analytics.students_at_risk.length
      if (aRisk > 0 && bRisk > 0) {
        const ratio = Math.max(aRisk, bRisk) / Math.max(Math.min(aRisk, bRisk), 1)
        if (ratio >= 2) {
          const more = aRisk > bRisk ? a : b
          const less = aRisk > bRisk ? b : a
          insights.push({
            type: 'warning',
            message: `${more.analytics.class_name} has ${Math.round(ratio)}x more at-risk students than ${less.analytics.class_name}.`,
          })
        }
      }
    }
  }

  // Engagement comparison
  for (const cls of classes) {
    const trends = cls.analytics.trends
    if (trends.length >= 4) {
      const recent2 = trends.slice(-2)
      const previous2 = trends.slice(-4, -2)
      const recentAvgActive =
        recent2.reduce((s, t) => s + t.active_students, 0) / recent2.length
      const prevAvgActive =
        previous2.reduce((s, t) => s + t.active_students, 0) / previous2.length
      if (prevAvgActive > 0) {
        const changePct = Math.round(
          ((recentAvgActive - prevAvgActive) / prevAvgActive) * 100,
        )
        if (changePct <= -15) {
          insights.push({
            type: 'warning',
            message: `${cls.analytics.class_name}'s engagement has dropped ${Math.abs(changePct)}% in the last 2 weeks.`,
          })
        } else if (changePct >= 15) {
          insights.push({
            type: 'positive',
            message: `${cls.analytics.class_name}'s engagement has risen ${changePct}% in the last 2 weeks.`,
          })
        }
      }
    }
  }

  // Skill-based comparison
  for (const skill of SKILL_CATEGORIES) {
    const skillScores = classes.map((c) => {
      const areas = c.analytics.weak_areas.filter(
        (w) => w.course_name.toLowerCase().includes(skill.toLowerCase()),
      )
      return {
        name: c.analytics.class_name,
        score: areas.length > 0 ? areas[0].avg_score : null,
      }
    }).filter((s) => s.score !== null)

    if (skillScores.length >= 2) {
      const best = skillScores.reduce((a, b) => ((a.score ?? 0) > (b.score ?? 0) ? a : b))
      const worst = skillScores.reduce((a, b) => ((a.score ?? 0) < (b.score ?? 0) ? a : b))
      const skillDiff = Math.round((best.score ?? 0) - (worst.score ?? 0))
      if (skillDiff > 15) {
        insights.push({
          type: 'info',
          message: `${best.name} scores ${skillDiff}pp higher in ${SKILL_SHORT_LABELS[skill] ?? skill} than ${worst.name}.`,
        })
      }
    }
  }

  // Completion rate
  const completionSorted = [...classes].sort(
    (a, b) => b.analytics.completion_rate - a.analytics.completion_rate,
  )
  const completionDiff = Math.round(
    completionSorted[0].analytics.completion_rate -
      completionSorted[completionSorted.length - 1].analytics.completion_rate,
  )
  if (completionDiff > 10) {
    insights.push({
      type: 'info',
      message: `Completion rate gap of ${completionDiff}% between ${completionSorted[0].analytics.class_name} and ${completionSorted[completionSorted.length - 1].analytics.class_name}.`,
    })
  }

  return insights.slice(0, 8)
}

// ── Teaching suggestions ────────────────────────────────────────────────────

function generateSuggestions(
  classes: ClassWithAnalytics[],
): { title: string; description: string }[] {
  const suggestions: { title: string; description: string }[] = []
  if (classes.length < 2) return suggestions

  // Find classes with large at-risk counts
  for (const cls of classes) {
    const riskPct =
      cls.analytics.student_count > 0
        ? (cls.analytics.students_at_risk.length / cls.analytics.student_count) * 100
        : 0
    if (riskPct > 25) {
      suggestions.push({
        title: `Targeted intervention for ${cls.analytics.class_name}`,
        description: `${Math.round(riskPct)}% of students are at risk. Consider small-group sessions focusing on weak areas, or peer mentoring with stronger students from another class.`,
      })
    }
  }

  // Compare engagement trends
  const lowEngagement = classes.filter((c) => {
    const activeStudents = c.analytics.trends.length > 0
      ? c.analytics.trends[c.analytics.trends.length - 1].active_students
      : 0
    return c.analytics.student_count > 0 && activeStudents / c.analytics.student_count < 0.6
  })
  if (lowEngagement.length > 0) {
    suggestions.push({
      title: 'Boost engagement in underperforming classes',
      description: `${lowEngagement.map((c) => c.analytics.class_name).join(', ')} ${lowEngagement.length === 1 ? 'has' : 'have'} low active student rates. Consider gamified activities, peer discussions, or varied assignment formats to re-engage students.`,
    })
  }

  // Cross-class skill sharing
  const allWeak = new Map<string, string[]>()
  const allStrong = new Map<string, string[]>()
  for (const cls of classes) {
    for (const area of cls.analytics.weak_areas) {
      if (area.avg_score < 40) {
        const list = allWeak.get(area.course_name) ?? []
        list.push(cls.analytics.class_name)
        allWeak.set(area.course_name, list)
      }
      if (area.avg_score >= 70) {
        const list = allStrong.get(area.course_name) ?? []
        list.push(cls.analytics.class_name)
        allStrong.set(area.course_name, list)
      }
    }
  }
  for (const [skill, weakClasses] of allWeak) {
    const strongClasses = allStrong.get(skill)
    if (strongClasses && strongClasses.length > 0) {
      suggestions.push({
        title: `Cross-class collaboration on ${skill}`,
        description: `${strongClasses.join(', ')} ${strongClasses.length === 1 ? 'performs' : 'perform'} well in ${skill} while ${weakClasses.join(', ')} ${weakClasses.length === 1 ? 'struggles' : 'struggle'}. Consider shared resources or collaborative sessions.`,
      })
    }
  }

  // Completion pacing
  const avgCompletion =
    classes.reduce((s, c) => s + c.analytics.completion_rate, 0) / classes.length
  const behind = classes.filter((c) => c.analytics.completion_rate < avgCompletion - 15)
  if (behind.length > 0) {
    suggestions.push({
      title: 'Pacing alignment needed',
      description: `${behind.map((c) => c.analytics.class_name).join(', ')} ${behind.length === 1 ? 'is' : 'are'} significantly behind the average completion rate. Review workload and consider adjusting deadlines or providing additional scaffolding.`,
    })
  }

  return suggestions.slice(0, 5)
}

// ── Skeleton ────────────────────────────────────────────────────────────────

function ComparisonSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Skeleton className="h-4 w-24 mb-3" />
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="pt-6">
          <Skeleton className="h-48 w-full" />
        </CardContent>
      </Card>
    </div>
  )
}

// ── SVG Chart Components ────────────────────────────────────────────────────

function ComparisonBarChart({
  data,
  height = 220,
  className,
}: {
  data: { label: string; values: { name: string; value: number; color: string }[] }[]
  height?: number
  className?: string
}) {
  const maxValue = useMemo(() => {
    const all = data.flatMap((d) => d.values.map((v) => v.value))
    return Math.max(...all, 10) * 1.15
  }, [data])

  const padding = { top: 20, right: 20, bottom: 40, left: 50 }
  const width = 700
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const groupWidth = chartW / data.length
  const barWidth = Math.min(groupWidth / (data[0]?.values.length ?? 1) - 4, 32)

  const yTicks = useMemo(() => {
    const count = 4
    return Array.from({ length: count + 1 }, (_, i) => {
      const value = Math.round((maxValue / count) * i)
      const y = padding.top + chartH - (value / maxValue) * chartH
      return { value, y }
    })
  }, [maxValue, chartH, padding.top])

  if (data.length === 0) {
    return (
      <div className={cn('flex items-center justify-center text-sm text-muted-foreground', className)} style={{ height }}>
        No data available.
      </div>
    )
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={cn('w-full', className)} preserveAspectRatio="xMidYMid meet">
      {/* Grid */}
      {yTicks.map((tick) => (
        <g key={tick.value}>
          <line
            x1={padding.left} x2={width - padding.right}
            y1={tick.y} y2={tick.y}
            stroke="currentColor" className="text-border"
            strokeDasharray="4 4" strokeWidth="0.5"
          />
          <text x={padding.left - 8} y={tick.y + 4} textAnchor="end" className="fill-muted-foreground" fontSize="10">
            {tick.value}%
          </text>
        </g>
      ))}

      {/* Bars */}
      {data.map((group, gi) => {
        const groupX = padding.left + gi * groupWidth + groupWidth / 2
        return (
          <g key={gi}>
            {group.values.map((v, vi) => {
              const totalBarsWidth = group.values.length * (barWidth + 2)
              const barX = groupX - totalBarsWidth / 2 + vi * (barWidth + 2)
              const barH = Math.max((v.value / maxValue) * chartH, 2)
              const barY = padding.top + chartH - barH
              return (
                <g key={vi}>
                  <rect
                    x={barX} y={barY}
                    width={barWidth} height={barH}
                    fill={v.color} rx="3" ry="3"
                    className="transition-all duration-300"
                  />
                  <title>{`${v.name}: Grade ${percentageToGCSEGrade(Math.round(v.value))} (${Math.round(v.value)}%)`}</title>
                  <text
                    x={barX + barWidth / 2} y={barY - 4}
                    textAnchor="middle" className="fill-muted-foreground" fontSize="9" fontWeight="600"
                  >
                    {Math.round(v.value)}
                  </text>
                </g>
              )
            })}
            {/* X label */}
            <text
              x={groupX} y={height - 8}
              textAnchor="middle" className="fill-muted-foreground" fontSize="9"
            >
              {group.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function TrendLineOverlay({
  series,
  height = 220,
  className,
}: {
  series: { name: string; color: string; data: { label: string; value: number }[] }[]
  height?: number
  className?: string
}) {
  const padding = { top: 20, right: 20, bottom: 30, left: 50 }
  const width = 700
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const maxLen = Math.max(...series.map((s) => s.data.length))
  const labels = series.find((s) => s.data.length === maxLen)?.data.map((d) => d.label) ?? []

  const maxValue = useMemo(() => {
    const all = series.flatMap((s) => s.data.map((d) => d.value))
    return Math.max(...all, 10) * 1.15
  }, [series])

  const yTicks = useMemo(() => {
    const count = 4
    return Array.from({ length: count + 1 }, (_, i) => {
      const value = Math.round((maxValue / count) * i)
      const y = padding.top + chartH - (value / maxValue) * chartH
      return { value, y }
    })
  }, [maxValue, chartH, padding.top])

  if (series.length === 0 || maxLen === 0) {
    return (
      <div className={cn('flex items-center justify-center text-sm text-muted-foreground', className)} style={{ height }}>
        No trend data available.
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Legend */}
      <div className="mb-2 flex flex-wrap items-center gap-4 text-xs">
        {series.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="text-muted-foreground">{s.name}</span>
          </div>
        ))}
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid */}
        {yTicks.map((tick) => (
          <g key={tick.value}>
            <line
              x1={padding.left} x2={width - padding.right}
              y1={tick.y} y2={tick.y}
              stroke="currentColor" className="text-border"
              strokeDasharray="4 4" strokeWidth="0.5"
            />
            <text x={padding.left - 8} y={tick.y + 4} textAnchor="end" className="fill-muted-foreground" fontSize="10">
              {tick.value}%
            </text>
          </g>
        ))}

        {/* Lines */}
        {series.map((s) => {
          const pts = s.data.map((d, i) => ({
            x: padding.left + (i / Math.max(s.data.length - 1, 1)) * chartW,
            y: padding.top + chartH - (d.value / maxValue) * chartH,
          }))
          const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
          return (
            <g key={s.name}>
              <path d={path} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {pts.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={3.5} fill={s.color} stroke="var(--background)" strokeWidth="2" />
                  <title>{`${s.name} - ${s.data[i].label}: Grade ${percentageToGCSEGrade(Math.round(s.data[i].value))} (${Math.round(s.data[i].value)}%)`}</title>
                </g>
              ))}
            </g>
          )
        })}

        {/* X labels */}
        {labels.map((label, i) => (
          <text
            key={i}
            x={padding.left + (i / Math.max(labels.length - 1, 1)) * chartW}
            y={height - 6}
            textAnchor="middle" className="fill-muted-foreground" fontSize="9"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  )
}

function GradeDistributionChart({
  distributions,
  height = 200,
  className,
}: {
  distributions: { name: string; color: string; grades: Record<number, number> }[]
  height?: number
  className?: string
}) {
  const grades = [9, 8, 7, 6, 5, 4, 3, 2, 1]
  const maxValue = useMemo(() => {
    const all = distributions.flatMap((d) => grades.map((g) => d.grades[g] ?? 0))
    return Math.max(...all, 1) * 1.2
  }, [distributions])

  const padding = { top: 20, right: 20, bottom: 40, left: 50 }
  const width = 700
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom
  const groupWidth = chartW / grades.length
  const barWidth = Math.min(groupWidth / distributions.length - 3, 28)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={cn('w-full', className)} preserveAspectRatio="xMidYMid meet">
      {/* Y axis */}
      {[0, 1, 2, 3, 4].map((i) => {
        const val = Math.round((maxValue / 4) * i)
        const y = padding.top + chartH - (val / maxValue) * chartH
        return (
          <g key={i}>
            <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke="currentColor" className="text-border" strokeDasharray="4 4" strokeWidth="0.5" />
            <text x={padding.left - 8} y={y + 4} textAnchor="end" className="fill-muted-foreground" fontSize="10">{val}</text>
          </g>
        )
      })}

      {/* Bars per grade */}
      {grades.map((grade, gi) => {
        const groupX = padding.left + gi * groupWidth + groupWidth / 2
        return (
          <g key={grade}>
            {distributions.map((dist, di) => {
              const count = dist.grades[grade] ?? 0
              const totalBarsWidth = distributions.length * (barWidth + 2)
              const barX = groupX - totalBarsWidth / 2 + di * (barWidth + 2)
              const barH = Math.max((count / maxValue) * chartH, 1)
              const barY = padding.top + chartH - barH
              return (
                <g key={di}>
                  <rect x={barX} y={barY} width={barWidth} height={barH} fill={dist.color} rx="2" ry="2" />
                  {count > 0 && (
                    <text x={barX + barWidth / 2} y={barY - 3} textAnchor="middle" className="fill-muted-foreground" fontSize="8" fontWeight="600">
                      {count}
                    </text>
                  )}
                </g>
              )
            })}
            <text x={groupX} y={height - 8} textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontWeight="600">
              Grade {grade}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ── Print report helper ─────────────────────────────────────────────────────

function exportReport(
  classes: ClassWithAnalytics[],
  insights: Insight[],
  suggestions: { title: string; description: string }[],
  normalise: boolean,
) {
  const lines: string[] = []
  lines.push('CLASS COMPARISON REPORT')
  lines.push(`Generated: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`)
  lines.push(`Normalised for year groups: ${normalise ? 'Yes' : 'No'}`)
  lines.push('')
  lines.push('='.repeat(60))
  lines.push('')

  // Summary table
  lines.push('SUMMARY')
  lines.push('-'.repeat(60))
  for (const cls of classes) {
    const a = cls.analytics
    const activeRecent = a.trends.length > 0 ? a.trends[a.trends.length - 1].active_students : 0
    const engPct = a.student_count > 0 ? Math.round((activeRecent / a.student_count) * 100) : 0
    lines.push(`  ${a.class_name} (Year ${cls.classInfo.year_group ?? 'N/A'})`)
    lines.push(`    Students: ${a.student_count}`)
    lines.push(`    Average Score: ${percentageToGCSEGradeLabel(Math.round(a.avg_score ?? 0))}`)
    lines.push(`    Completion Rate: ${Math.round(a.completion_rate)}%`)
    lines.push(`    Engagement: ${engPct}%`)
    lines.push(`    At-Risk Students: ${a.students_at_risk.length}`)
    lines.push('')
  }

  lines.push('='.repeat(60))
  lines.push('')
  lines.push('INSIGHTS')
  lines.push('-'.repeat(60))
  for (const insight of insights) {
    const icon = insight.type === 'positive' ? '[+]' : insight.type === 'warning' ? '[!]' : '[i]'
    lines.push(`  ${icon} ${insight.message}`)
  }

  lines.push('')
  lines.push('='.repeat(60))
  lines.push('')
  lines.push('TEACHING SUGGESTIONS')
  lines.push('-'.repeat(60))
  for (const s of suggestions) {
    lines.push(`  ${s.title}`)
    lines.push(`    ${s.description}`)
    lines.push('')
  }

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `class-comparison-${Date.now()}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// ── Main Component ──────────────────────────────────────────────────────────

export function ClassComparison() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Available classes
  const [availableClasses, setAvailableClasses] = useState<(Class & { teacher_name?: string })[]>([])
  const [loadingClasses, setLoadingClasses] = useState(true)

  // Selected class IDs (2-4)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  // Loaded analytics per class
  const [classData, setClassData] = useState<Map<string, ClassWithAnalytics>>(new Map())
  const [loadingAnalytics, setLoadingAnalytics] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Options
  const [normalise, setNormalise] = useState(false)

  // ── Load available classes ──────────────────────────────────────────────

  useEffect(() => {
    async function loadClasses() {
      try {
        const res = await fetch('/api/school/classes')
        if (!res.ok) throw new Error('Failed to load classes')
        const data = await res.json()
        const list = Array.isArray(data) ? data : data.classes ?? []
        setAvailableClasses(list)

        // Check URL params for pre-selected classes
        const paramIds = searchParams.get('classes')?.split(',').filter(Boolean) ?? []
        if (paramIds.length >= 2 && paramIds.length <= 4) {
          setSelectedIds(paramIds)
        }
      } catch {
        setError('Could not load classes.')
      } finally {
        setLoadingClasses(false)
      }
    }
    loadClasses()
  }, [searchParams])

  // ── Load analytics when selection changes ───────────────────────────────

  useEffect(() => {
    if (selectedIds.length < 2) return

    const idsToLoad = selectedIds.filter((id) => !classData.has(id))
    if (idsToLoad.length === 0) return

    async function loadAnalytics() {
      setLoadingAnalytics(true)
      setError(null)
      try {
        const results = await Promise.all(
          idsToLoad.map(async (id) => {
            const [classRes, analyticsRes] = await Promise.all([
              fetch(`/api/school/classes?classId=${id}`),
              fetch(`/api/school/classes/${id}/analytics`),
            ])
            if (!classRes.ok || !analyticsRes.ok) throw new Error(`Failed to load class ${id}`)
            const classInfo = await classRes.json()
            const analytics: AnalyticsResponse = await analyticsRes.json()
            return { classInfo, analytics } as ClassWithAnalytics
          }),
        )
        setClassData((prev) => {
          const next = new Map(prev)
          for (const r of results) next.set(r.analytics.class_id, r)
          return next
        })
      } catch (err) {
        console.error('Failed to load analytics:', err)
        setError('Could not load analytics for one or more classes.')
      } finally {
        setLoadingAnalytics(false)
      }
    }
    loadAnalytics()
  }, [selectedIds]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Derived data ────────────────────────────────────────────────────────

  const selectedClasses = useMemo(() => {
    return selectedIds
      .map((id) => classData.get(id))
      .filter(Boolean) as ClassWithAnalytics[]
  }, [selectedIds, classData])

  const isReady = selectedClasses.length >= 2 && !loadingAnalytics

  const insights = useMemo(
    () => (isReady ? generateInsights(selectedClasses, normalise) : []),
    [selectedClasses, isReady, normalise],
  )

  const suggestions = useMemo(
    () => (isReady ? generateSuggestions(selectedClasses) : []),
    [selectedClasses, isReady],
  )

  // Normalised or raw score
  const getScore = useCallback(
    (cls: ClassWithAnalytics): number => {
      const raw = cls.analytics.avg_score ?? 0
      if (!normalise) return raw
      return Math.min(raw * getNormalisationFactor(cls.classInfo.year_group), 100)
    },
    [normalise],
  )

  // Skill breakdown per class
  const skillComparison = useMemo(() => {
    return SKILL_CATEGORIES.map((skill) => ({
      label: SKILL_SHORT_LABELS[skill] ?? skill,
      values: selectedClasses.map((cls, i) => {
        const match = cls.analytics.weak_areas.find((w) =>
          w.course_name.toLowerCase().includes(skill.toLowerCase()),
        )
        return {
          name: cls.analytics.class_name,
          value: match ? match.avg_score : 0,
          color: CLASS_COLORS[i % CLASS_COLORS.length].hex,
        }
      }),
    }))
  }, [selectedClasses])

  // Grade distributions
  const gradeDistributions = useMemo(() => {
    return selectedClasses.map((cls, i) => {
      const grades: Record<number, number> = {}
      for (const s of cls.analytics.student_summaries) {
        const score = s.avg_quiz_score ?? 0
        const grade = scoreToGrade(score)
        grades[grade] = (grades[grade] ?? 0) + 1
      }
      return {
        name: cls.analytics.class_name,
        color: CLASS_COLORS[i % CLASS_COLORS.length].hex,
        grades,
      }
    })
  }, [selectedClasses])

  // Trend overlay (last 8 weeks)
  const trendSeries = useMemo(() => {
    return selectedClasses.map((cls, i) => {
      const trends = cls.analytics.trends.slice(-8)
      return {
        name: cls.analytics.class_name,
        color: CLASS_COLORS[i % CLASS_COLORS.length].hex,
        data: trends.map((t) => ({
          label: new Date(t.week_start).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
          value: t.avg_score,
        })),
      }
    })
  }, [selectedClasses])

  // ── Handlers ────────────────────────────────────────────────────────────

  function addClassToSelection(classId: string) {
    if (selectedIds.length >= 4) return
    if (selectedIds.includes(classId)) return
    setSelectedIds((prev) => [...prev, classId])
  }

  function removeClassFromSelection(classId: string) {
    setSelectedIds((prev) => prev.filter((id) => id !== classId))
  }

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Link href="/school/classes">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Class Comparison</h1>
          </div>
          <p className="text-sm text-muted-foreground ml-11">
            Compare 2-4 classes side by side to identify patterns and opportunities.
          </p>
        </div>
        {isReady && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => exportReport(selectedClasses, insights, suggestions, normalise)}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        )}
      </div>

      {/* Class Selector */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Select Classes to Compare</CardTitle>
          <CardDescription>Choose between 2 and 4 classes for comparison.</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingClasses ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading classes...
            </div>
          ) : (
            <div className="space-y-4">
              {/* Selected classes */}
              {selectedIds.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedIds.map((id, i) => {
                    const cls = availableClasses.find((c) => c.id === id)
                    const color = CLASS_COLORS[i % CLASS_COLORS.length]
                    return (
                      <Badge
                        key={id}
                        variant="secondary"
                        className={cn('gap-1.5 px-3 py-1.5 text-sm', color.light, color.text)}
                      >
                        <span className={cn('h-2 w-2 rounded-full', color.bg)} />
                        {cls?.name ?? id}
                        <button
                          onClick={() => removeClassFromSelection(id)}
                          className="ml-1 rounded-full p-0.5 hover:bg-background/50"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )
                  })}
                </div>
              )}

              {/* Add class dropdown */}
              {selectedIds.length < 4 && (
                <Select onValueChange={addClassToSelection}>
                  <SelectTrigger className="w-full sm:w-72">
                    <SelectValue placeholder="Add a class to compare..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableClasses
                      .filter((c) => !selectedIds.includes(c.id))
                      .map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                          {c.year_group ? ` (Year ${c.year_group})` : ''}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}

              {/* Normalise toggle */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <Switch id="normalise" checked={normalise} onCheckedChange={setNormalise} />
                <Label htmlFor="normalise" className="text-sm text-muted-foreground cursor-pointer">
                  <Scale className="inline-block h-3.5 w-3.5 mr-1 -mt-0.5" />
                  Normalise for different year groups
                </Label>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Loading state */}
      {loadingAnalytics && <ComparisonSkeleton />}

      {/* Error */}
      {error && (
        <Card className="border-red-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertTriangle className="h-4 w-4" />
              {error}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Not enough classes selected */}
      {!loadingAnalytics && selectedIds.length < 2 && (
        <Card>
          <CardContent className="py-12">
            <div className="flex flex-col items-center text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mb-3 opacity-30" />
              <p className="text-sm font-medium">Select at least 2 classes above to start comparing.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Comparison Content */}
      {isReady && (
        <>
          {/* Key Metrics Side by Side */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${selectedClasses.length}, minmax(0, 1fr))` }}>
            {selectedClasses.map((cls, i) => {
              const a = cls.analytics
              const color = CLASS_COLORS[i % CLASS_COLORS.length]
              const activeRecent =
                a.trends.length > 0 ? a.trends[a.trends.length - 1].active_students : 0
              const engagementPct =
                a.student_count > 0 ? Math.round((activeRecent / a.student_count) * 100) : 0

              return (
                <Card key={a.class_id} className={cn('border-t-4')} style={{ borderTopColor: color.hex }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm truncate">{a.class_name}</CardTitle>
                    {cls.classInfo.year_group && (
                      <p className="text-xs text-muted-foreground">Year {cls.classInfo.year_group}</p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Avg Score */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Avg Score</span>
                      <span className={cn('text-lg font-bold tabular-nums', scoreColor(getScore(cls)))}>
                        {Math.round(getScore(cls))}%
                      </span>
                    </div>

                    {/* Completion */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Completion</span>
                      <span className="text-sm font-semibold tabular-nums">{Math.round(a.completion_rate)}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${a.completion_rate}%`, backgroundColor: color.hex }}
                      />
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Engagement</span>
                      <span className="text-sm font-semibold tabular-nums">{engagementPct}%</span>
                    </div>

                    {/* Students */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Students</span>
                      <span className="text-sm font-semibold tabular-nums">{a.student_count}</span>
                    </div>

                    {/* At Risk */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">At Risk</span>
                      <span className={cn(
                        'text-sm font-semibold tabular-nums',
                        a.students_at_risk.length > 0 ? 'text-red-400' : 'text-foreground',
                      )}>
                        {a.students_at_risk.length}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Skill Breakdown Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                Skill Breakdown Comparison
              </CardTitle>
              <CardDescription>Average score per skill area across selected classes.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Legend */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs">
                {selectedClasses.map((cls, i) => (
                  <div key={cls.analytics.class_id} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CLASS_COLORS[i % CLASS_COLORS.length].hex }} />
                    <span className="text-muted-foreground">{cls.analytics.class_name}</span>
                  </div>
                ))}
              </div>
              <ComparisonBarChart data={skillComparison} height={240} />
            </CardContent>
          </Card>

          {/* Grade Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                Grade Distribution (GCSE 9-1)
              </CardTitle>
              <CardDescription>Number of students at each predicted grade level.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs">
                {gradeDistributions.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-muted-foreground">{d.name}</span>
                  </div>
                ))}
              </div>
              <GradeDistributionChart distributions={gradeDistributions} height={220} />
            </CardContent>
          </Card>

          {/* Trend Comparison (Last 8 Weeks) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                Trend Comparison (Last 8 Weeks)
              </CardTitle>
              <CardDescription>Average score progression over recent weeks.</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendLineOverlay series={trendSeries} height={240} />
            </CardContent>
          </Card>

          {/* Insights */}
          {insights.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-amber-400" />
                  Insights
                </CardTitle>
                <CardDescription>Auto-generated observations based on class data.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insights.map((insight, i) => (
                    <div
                      key={i}
                      className={cn(
                        'flex items-start gap-3 rounded-lg border px-4 py-3 text-sm',
                        insight.type === 'warning' && 'border-amber-500/20 bg-amber-500/5',
                        insight.type === 'positive' && 'border-green-500/20 bg-green-500/5',
                        insight.type === 'info' && 'border-blue-500/20 bg-blue-500/5',
                      )}
                    >
                      {insight.type === 'warning' && <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />}
                      {insight.type === 'positive' && <TrendingUp className="h-4 w-4 mt-0.5 shrink-0 text-green-400" />}
                      {insight.type === 'info' && <BarChart3 className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" />}
                      <span className="text-muted-foreground">{insight.message}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Teaching Suggestions */}
          {suggestions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  Teaching Approach Suggestions
                </CardTitle>
                <CardDescription>Recommendations based on comparison patterns.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestions.map((s, i) => (
                    <div key={i} className="rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-3">
                      <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
