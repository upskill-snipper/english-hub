'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpDown,
  GitCompareArrows,
  Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Class, ClassAnalytics } from '@/lib/types'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

/* ── Types ──────────────────────────────────────────────────────────────────── */

interface TeacherComparisonProps {
  classAnalytics: ClassAnalytics[]
  classes: Class[]
  avgDeptScore: number
}

interface NormalisedClassData {
  classId: string
  className: string
  yearGroup: string
  examBoard: string
  studentCount: number
  rawAvgScore: number
  rawCompletion: number
  valueAdded: number // score relative to year group average
  completionVA: number // completion relative to year group average
  studentsAtRisk: number
  riskPercentage: number
}

/* ── Helpers ────────────────────────────────────────────────────────────────── */

/**
 * Compute value-added by comparing each class against its year-group
 * average. This normalises for different ability levels across year groups.
 */
function computeNormalisedData(
  classAnalytics: ClassAnalytics[],
  classes: Class[],
): NormalisedClassData[] {
  // Build year-group averages
  const ygScores = new Map<string, number[]>()
  const ygCompletions = new Map<string, number[]>()

  for (const cls of classes) {
    const yg = cls.year_group ?? 'Unknown'
    const analytics = classAnalytics.find((a) => a.class_id === cls.id)
    if (!analytics) continue

    const scores = ygScores.get(yg) ?? []
    scores.push(analytics.avg_score)
    ygScores.set(yg, scores)

    const completions = ygCompletions.get(yg) ?? []
    completions.push(analytics.completion_rate)
    ygCompletions.set(yg, completions)
  }

  const ygAvgScore = new Map<string, number>()
  const ygAvgCompletion = new Map<string, number>()

  for (const [yg, scores] of ygScores.entries()) {
    ygAvgScore.set(yg, scores.reduce((a, b) => a + b, 0) / scores.length)
  }
  for (const [yg, completions] of ygCompletions.entries()) {
    ygAvgCompletion.set(
      yg,
      completions.reduce((a, b) => a + b, 0) / completions.length,
    )
  }

  // Build normalised data per class
  return classes
    .map((cls) => {
      const analytics = classAnalytics.find((a) => a.class_id === cls.id)
      if (!analytics) return null

      const yg = cls.year_group ?? 'Unknown'
      const ygScore = ygAvgScore.get(yg) ?? analytics.avg_score
      const ygCompletion = ygAvgCompletion.get(yg) ?? analytics.completion_rate

      return {
        classId: cls.id,
        className: cls.name,
        yearGroup: yg,
        examBoard: cls.exam_board ?? 'Unspecified',
        studentCount: analytics.student_count,
        rawAvgScore: Math.round(analytics.avg_score),
        rawCompletion: Math.round(analytics.completion_rate),
        valueAdded: Math.round(analytics.avg_score - ygScore),
        completionVA: Math.round(analytics.completion_rate - ygCompletion),
        studentsAtRisk: analytics.students_at_risk,
        riskPercentage:
          analytics.student_count > 0
            ? Math.round(
                (analytics.students_at_risk / analytics.student_count) * 100,
              )
            : 0,
      }
    })
    .filter(Boolean) as NormalisedClassData[]
}

/* ── Component ──────────────────────────────────────────────────────────────── */

export function TeacherComparison({
  classAnalytics,
  classes,
  avgDeptScore,
}: TeacherComparisonProps) {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'valueAdded' | 'rawAvgScore' | 'rawCompletion'>(
    'valueAdded',
  )

  const normalisedData = useMemo(
    () => computeNormalisedData(classAnalytics, classes),
    [classAnalytics, classes],
  )

  // If no classes explicitly selected, show all
  const displayData = useMemo(() => {
    const data =
      selectedClasses.length > 0
        ? normalisedData.filter((d) => selectedClasses.includes(d.classId))
        : normalisedData

    return [...data].sort((a, b) => {
      if (sortBy === 'valueAdded') return b.valueAdded - a.valueAdded
      if (sortBy === 'rawAvgScore') return b.rawAvgScore - a.rawAvgScore
      return b.rawCompletion - a.rawCompletion
    })
  }, [normalisedData, selectedClasses, sortBy])

  function toggleClass(classId: string) {
    setSelectedClasses((prev) =>
      prev.includes(classId)
        ? prev.filter((id) => id !== classId)
        : [...prev, classId],
    )
  }

  if (normalisedData.length === 0) {
    return (
      <Card>
        <CardContent className="py-10 text-center">
          <p className="text-sm text-muted-foreground">
            No class data available for comparison.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* ── Controls ────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <GitCompareArrows className="h-4 w-4 text-primary" />
            Class Comparison
          </CardTitle>
          <CardDescription>
            Side-by-side comparison normalised for year group. Value-added shows
            performance relative to the year group average.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Class selector chips */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Select classes to compare (or view all)
            </p>
            <div className="flex flex-wrap gap-2">
              {normalisedData.map((cls) => (
                <button
                  key={cls.classId}
                  onClick={() => toggleClass(cls.classId)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    selectedClasses.includes(cls.classId)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
                  )}
                >
                  {cls.className}
                  <span className="text-[10px] opacity-60">{cls.yearGroup}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sort control */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Sort by:</span>
            <Select
              value={sortBy}
              onValueChange={(v) =>
                setSortBy(v as 'valueAdded' | 'rawAvgScore' | 'rawCompletion')
              }
            >
              <SelectTrigger className="h-8 w-44 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="valueAdded">Value Added</SelectItem>
                <SelectItem value="rawAvgScore">Raw Avg Score</SelectItem>
                <SelectItem value="rawCompletion">Completion Rate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* ── Comparison cards ────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {displayData.map((cls) => (
          <Card key={cls.classId} className="relative overflow-hidden">
            {/* Value-added indicator strip */}
            <div
              className={cn(
                'absolute left-0 top-0 h-full w-1',
                cls.valueAdded > 5
                  ? 'bg-green-500'
                  : cls.valueAdded >= -5
                    ? 'bg-amber-500'
                    : 'bg-red-500',
              )}
            />

            <CardHeader className="pb-3 pl-5">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-sm font-semibold">
                    {cls.className}
                  </CardTitle>
                  <CardDescription className="mt-0.5">
                    {cls.yearGroup} · {cls.examBoard} · {cls.studentCount} students
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    'shrink-0 tabular-nums',
                    cls.valueAdded > 0
                      ? 'border-green-500/30 text-green-400'
                      : cls.valueAdded === 0
                        ? 'border-border text-muted-foreground'
                        : 'border-red-500/30 text-red-400',
                  )}
                >
                  {cls.valueAdded > 0 ? '+' : ''}
                  {cls.valueAdded}pp VA
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 pl-5">
              {/* Raw score */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Avg Score</span>
                  <span
                    className={cn(
                      'font-medium tabular-nums',
                      cls.rawAvgScore >= avgDeptScore
                        ? 'text-green-400'
                        : 'text-red-400',
                    )}
                  >
                    {cls.rawAvgScore}%
                  </span>
                </div>
                <Progress value={cls.rawAvgScore} className="h-1.5" />
              </div>

              {/* Completion */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-medium tabular-nums text-foreground">
                    {cls.rawCompletion}%
                    {cls.completionVA !== 0 && (
                      <span
                        className={cn(
                          'ml-1',
                          cls.completionVA > 0 ? 'text-green-400' : 'text-red-400',
                        )}
                      >
                        ({cls.completionVA > 0 ? '+' : ''}
                        {cls.completionVA}pp)
                      </span>
                    )}
                  </span>
                </div>
                <Progress value={cls.rawCompletion} className="h-1.5" />
              </div>

              {/* At risk */}
              {cls.studentsAtRisk > 0 && (
                <div className="flex items-center justify-between rounded-md bg-red-500/5 px-2 py-1.5">
                  <span className="text-xs text-red-400">Students at risk</span>
                  <span className="text-xs font-medium tabular-nums text-red-400">
                    {cls.studentsAtRisk} ({cls.riskPercentage}%)
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Info callout ────────────────────────────────────────── */}
      <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
        <div className="text-xs text-muted-foreground">
          <p className="font-medium text-foreground">About Value Added (VA)</p>
          <p className="mt-1">
            Value Added measures each class's performance relative to the average
            for its year group. A positive VA means the class is outperforming
            comparable classes; a negative VA means it is underperforming. This
            normalises for different starting points and ability levels across year
            groups.
          </p>
        </div>
      </div>
    </div>
  )
}
