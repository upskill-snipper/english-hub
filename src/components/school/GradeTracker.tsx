'use client'

import { useState, useMemo, useCallback } from 'react'
import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Minus,
  TrendingDown,
  Target,
  BarChart3,
  Filter,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


import type { StudentAnalytics } from '@/lib/types'

/* ── Types ──────────────────────────────────────────────────────────────────── */

/** Extended student data for grade tracking — adds target and starting grades */
export interface GradeTrackerStudent extends StudentAnalytics {
  target_grade: number | null
  starting_grade: number | null
}

type SortKey = 'name' | 'current' | 'target' | 'gap' | 'trajectory'
type SortDir = 'asc' | 'desc'
type TargetFilter = 'all' | 'above' | 'on' | 'below'
type GradeRange = 'all' | '1-3' | '4-6' | '7-9'

interface GradeTrackerProps {
  students: GradeTrackerStudent[]
  className?: string
}

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function parseGrade(grade: string | null): number {
  if (!grade) return 0
  const n = parseInt(grade, 10)
  return isNaN(n) ? 0 : Math.min(9, Math.max(0, n))
}

function getGap(current: number, target: number | null): number | null {
  if (target === null || target === 0) return null
  return current - target
}

function getTargetStatus(current: number, target: number | null): 'above' | 'on' | 'below' | 'unknown' {
  if (target === null || target === 0) return 'unknown'
  if (current > target) return 'above'
  if (current === target) return 'on'
  return 'below'
}

function statusColor(status: 'above' | 'on' | 'below' | 'unknown') {
  switch (status) {
    case 'above':
      return { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20', dot: 'bg-green-500' }
    case 'on':
      return { bg: 'bg-amber-500/10', text: 'text-clay-600', border: 'border-amber-500/20', dot: 'bg-amber-500' }
    case 'below':
      return { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20', dot: 'bg-red-500' }
    default:
      return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border', dot: 'bg-muted-foreground' }
  }
}

function gradeColor(grade: number): string {
  if (grade >= 7) return 'bg-green-500/10 text-green-400'
  if (grade >= 5) return 'bg-amber-500/10 text-clay-600'
  if (grade >= 1) return 'bg-red-500/10 text-red-400'
  return 'bg-muted text-muted-foreground'
}

function trajectoryIcon(trajectory: string) {
  switch (trajectory) {
    case 'improving':
      return <ArrowUp className="h-4 w-4 text-green-400" />
    case 'declining':
      return <ArrowDown className="h-4 w-4 text-red-400" />
    default:
      return <Minus className="h-4 w-4 text-muted-foreground" />
  }
}

function trajectoryLabel(trajectory: string): string {
  switch (trajectory) {
    case 'improving':
      return 'Improving'
    case 'declining':
      return 'Declining'
    default:
      return 'Stable'
  }
}

/* ── Grade Distribution Bar (stacked horizontal) ───────────────────────────── */

function GradeDistributionBar({ students }: { students: GradeTrackerStudent[] }) {
  const distribution = useMemo(() => {
    const counts: Record<number, number> = {}
    for (let g = 1; g <= 9; g++) counts[g] = 0

    for (const s of students) {
      const grade = parseGrade(s.predicted_grade)
      if (grade >= 1 && grade <= 9) counts[grade]++
    }

    return counts
  }, [students])

  const total = students.length || 1

  const gradeColors: Record<number, string> = {
    1: 'bg-red-600',
    2: 'bg-red-500',
    3: 'bg-red-400',
    4: 'bg-amber-500',
    5: 'bg-amber-400',
    6: 'bg-yellow-400',
    7: 'bg-green-400',
    8: 'bg-green-500',
    9: 'bg-emerald-500',
  }

  return (
    <div>
      <div className="flex h-8 w-full overflow-hidden rounded-lg border border-border">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((grade) => {
          const count = distribution[grade]
          const pct = (count / total) * 100
          if (pct === 0) return null
          return (
            <div
              key={grade}
              className={cn(
                'flex items-center justify-center text-[10px] font-bold text-white transition-all',
                gradeColors[grade],
              )}
              style={{ width: `${pct}%` }}
              title={`Grade ${grade}: ${count} student${count !== 1 ? 's' : ''} (${Math.round(pct)}%)`}
            >
              {pct >= 6 && grade}
            </div>
          )
        })}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((grade) => {
          const count = distribution[grade]
          if (count === 0) return null
          return (
            <div key={grade} className="flex items-center gap-1">
              <div className={cn('h-2.5 w-2.5 rounded-sm', gradeColors[grade])} />
              <span>Grade {grade}: {count}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Flight Path Row ───────────────────────────────────────────────────────── */

function FlightPath({
  starting,
  current,
  target,
}: {
  starting: number | null
  current: number
  target: number | null
}) {
  if (starting === null && target === null) {
    return <span className="text-xs text-muted-foreground">No data</span>
  }

  const min = 1
  const max = 9
  const range = max - min

  const toPercent = (g: number) => ((g - min) / range) * 100

  return (
    <div className="relative h-6 w-full min-w-[120px]">
      {/* Track */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 rounded-full bg-border" />

      {/* Starting grade marker */}
      {starting !== null && starting >= 1 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-muted-foreground bg-background"
          style={{ left: `${toPercent(starting)}%` }}
          title={`Starting: Grade ${starting}`}
        />
      )}

      {/* Target grade marker */}
      {target !== null && target >= 1 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${toPercent(target)}%` }}
          title={`Target: Grade ${target}`}
        >
          <Target className="h-4 w-4 text-blue-400" />
        </div>
      )}

      {/* Current grade marker */}
      {current >= 1 && (
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-background',
            target !== null
              ? current >= target
                ? 'bg-green-500'
                : current === target - 1
                  ? 'bg-amber-500'
                  : 'bg-red-500'
              : 'bg-primary',
          )}
          style={{ left: `${toPercent(current)}%` }}
          title={`Current: Grade ${current}`}
        />
      )}
    </div>
  )
}

/* ── Main Component ─────────────────────────────────────────────────────────── */

export function GradeTracker({ students, className }: GradeTrackerProps) {
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [targetFilter, setTargetFilter] = useState<TargetFilter>('all')
  const [gradeRange, setGradeRange] = useState<GradeRange>('all')

  /* ── Sort handler ─────────────────────────────────────────────────────────── */

  const handleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
      } else {
        setSortKey(key)
        setSortDir(key === 'name' ? 'asc' : 'desc')
      }
    },
    [sortKey],
  )

  /* ── Derived student data ─────────────────────────────────────────────────── */

  const enriched = useMemo(
    () =>
      students.map((s) => {
        const current = parseGrade(s.predicted_grade)
        const target = s.target_grade
        const starting = s.starting_grade
        const gap = getGap(current, target)
        const status = getTargetStatus(current, target)
        return { ...s, current, target, starting, gap, status }
      }),
    [students],
  )

  /* ── Filtering ────────────────────────────────────────────────────────────── */

  const filtered = useMemo(() => {
    let result = [...enriched]

    // Target filter
    if (targetFilter !== 'all') {
      result = result.filter((s) => s.status === targetFilter)
    }

    // Grade range filter
    if (gradeRange !== 'all') {
      const [lo, hi] = gradeRange.split('-').map(Number)
      result = result.filter((s) => s.current >= lo && s.current <= hi)
    }

    // Sorting
    result.sort((a, b) => {
      let aVal: string | number
      let bVal: string | number

      switch (sortKey) {
        case 'name':
          aVal = a.student_name.toLowerCase()
          bVal = b.student_name.toLowerCase()
          break
        case 'current':
          aVal = a.current
          bVal = b.current
          break
        case 'target':
          aVal = a.target ?? 0
          bVal = b.target ?? 0
          break
        case 'gap':
          aVal = a.gap ?? -99
          bVal = b.gap ?? -99
          break
        case 'trajectory': {
          const order: Record<string, number> = { improving: 3, stable: 2, declining: 1 }
          aVal = order[a.trajectory] ?? 0
          bVal = order[b.trajectory] ?? 0
          break
        }
        default:
          return 0
      }

      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1
      return 0
    })

    return result
  }, [enriched, targetFilter, gradeRange, sortKey, sortDir])

  /* ── Summary stats ────────────────────────────────────────────────────────── */

  const stats = useMemo(() => {
    const withTarget = enriched.filter((s) => s.status !== 'unknown')
    const aboveCount = withTarget.filter((s) => s.status === 'above').length
    const onCount = withTarget.filter((s) => s.status === 'on').length
    const belowCount = withTarget.filter((s) => s.status === 'below').length

    const totalWithTargets = withTarget.length || 1
    const onTargetPct = Math.round(((aboveCount + onCount) / totalWithTargets) * 100)

    const grades = enriched.map((s) => s.current).filter((g) => g > 0)
    const avgGrade = grades.length > 0 ? (grades.reduce((a, b) => a + b, 0) / grades.length) : 0

    return {
      aboveCount,
      onCount,
      belowCount,
      onTargetPct,
      avgGrade: Math.round(avgGrade * 10) / 10,
      totalStudents: enriched.length,
      totalWithTargets: withTarget.length,
    }
  }, [enriched])

  /* ── Render sort header ───────────────────────────────────────────────────── */

  function SortHeader({ label, sortKeyName, align }: { label: string; sortKeyName: SortKey; align?: string }) {
    return (
      <th
        className={cn(
          'px-3 py-2.5 font-medium text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors whitespace-nowrap text-xs',
          align === 'center' && 'text-center',
          align === 'right' && 'text-right',
        )}
        role="columnheader"
        tabIndex={0}
        aria-sort={sortKey === sortKeyName ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
        onClick={() => handleSort(sortKeyName)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleSort(sortKeyName)
          }
        }}
      >
        <span className="inline-flex items-center gap-1">
          {label}
          {sortKey === sortKeyName ? (
            sortDir === 'asc' ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )
          ) : (
            <ArrowUpDown className="h-3 w-3 opacity-30" />
          )}
        </span>
      </th>
    )
  }

  /* ── JSX ──────────────────────────────────────────────────────────────────── */

  return (
    <div className={cn('space-y-6', className)}>
      {/* ── Summary Stats Row ───────────────────────────────────────────────── */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Students</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight text-foreground">{stats.totalStudents}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.totalWithTargets} with targets set</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                <Target className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">On Target</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight text-green-400">{stats.onTargetPct}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.aboveCount + stats.onCount} of {stats.totalWithTargets} students
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                <BarChart3 className="h-4 w-4 text-blue-400" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Avg Grade</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight text-foreground">{stats.avgGrade}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                <TrendingDown className="h-4 w-4 text-red-400" />
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Below Target</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold tracking-tight text-red-400">{stats.belowCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              student{stats.belowCount !== 1 ? 's' : ''} need support
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ── Target vs Predicted Breakdown ───────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Target vs Predicted</CardTitle>
          <CardDescription>How students are tracking against their target grades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* Horizontal stacked bar for target status */}
            <div className="flex h-6 w-full overflow-hidden rounded-lg border border-border">
              {stats.aboveCount > 0 && (
                <div
                  className="flex items-center justify-center text-[10px] font-bold text-white bg-green-500 transition-all"
                  style={{ width: `${(stats.aboveCount / (stats.totalWithTargets || 1)) * 100}%` }}
                  title={`Above target: ${stats.aboveCount}`}
                >
                  {(stats.aboveCount / (stats.totalWithTargets || 1)) * 100 >= 10 && `${stats.aboveCount} above`}
                </div>
              )}
              {stats.onCount > 0 && (
                <div
                  className="flex items-center justify-center text-[10px] font-bold text-white bg-amber-500 transition-all"
                  style={{ width: `${(stats.onCount / (stats.totalWithTargets || 1)) * 100}%` }}
                  title={`On target: ${stats.onCount}`}
                >
                  {(stats.onCount / (stats.totalWithTargets || 1)) * 100 >= 10 && `${stats.onCount} on`}
                </div>
              )}
              {stats.belowCount > 0 && (
                <div
                  className="flex items-center justify-center text-[10px] font-bold text-white bg-red-500 transition-all"
                  style={{ width: `${(stats.belowCount / (stats.totalWithTargets || 1)) * 100}%` }}
                  title={`Below target: ${stats.belowCount}`}
                >
                  {(stats.belowCount / (stats.totalWithTargets || 1)) * 100 >= 10 && `${stats.belowCount} below`}
                </div>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                <span>Above target ({stats.aboveCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span>On target ({stats.onCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span>Below target ({stats.belowCount})</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Grade Distribution ──────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Grade Distribution</CardTitle>
          <CardDescription>Predicted grades across the class (1-9 scale)</CardDescription>
        </CardHeader>
        <CardContent>
          <GradeDistributionBar students={students} />
        </CardContent>
      </Card>

      {/* ── Filters ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Filter className="h-3.5 w-3.5" />
          <span>Filter:</span>
        </div>

        {/* Target filter */}
        <div className="flex items-center gap-1">
          {(['all', 'above', 'on', 'below'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setTargetFilter(f)}
              className={cn(
                'px-2.5 py-1 rounded-md text-xs font-medium transition-colors',
                targetFilter === f
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground',
              )}
            >
              {f === 'all' ? 'All' : f === 'above' ? 'Above' : f === 'on' ? 'On Target' : 'Below'}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-border" />

        {/* Grade range filter */}
        <div className="flex items-center gap-1">
          {(['all', '1-3', '4-6', '7-9'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setGradeRange(r)}
              className={cn(
                'px-2.5 py-1 rounded-md text-xs font-medium transition-colors',
                gradeRange === r
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground',
              )}
            >
              {r === 'all' ? 'All Grades' : `Grade ${r}`}
            </button>
          ))}
        </div>
      </div>

      {/* ── Student Table ───────────────────────────────────────────────────── */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <SortHeader label="Student" sortKeyName="name" />
              <SortHeader label="Current" sortKeyName="current" align="center" />
              <SortHeader label="Target" sortKeyName="target" align="center" />
              <SortHeader label="Gap" sortKeyName="gap" align="center" />
              <th className="px-3 py-2.5 font-medium text-muted-foreground text-xs text-center whitespace-nowrap">
                Status
              </th>
              <SortHeader label="Trajectory" sortKeyName="trajectory" align="center" />
              <th className="px-3 py-2.5 font-medium text-muted-foreground text-xs whitespace-nowrap min-w-[160px]">
                Flight Path
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                  No students match the current filters.
                </td>
              </tr>
            ) : (
              filtered.map((student) => {
                const colors = statusColor(student.status)
                return (
                  <tr
                    key={student.student_id}
                    className="border-b border-border/50 last:border-0 transition-colors hover:bg-accent/50"
                  >
                    {/* Name */}
                    <td className="px-3 py-2.5">
                      <div>
                        <p className="font-medium text-foreground truncate max-w-[200px]">
                          {student.student_name}
                        </p>
                        <p className="text-xs text-muted-foreground">{student.year_group ?? ''}</p>
                      </div>
                    </td>

                    {/* Current predicted grade */}
                    <td className="px-3 py-2.5 text-center">
                      <span
                        className={cn(
                          'inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold',
                          gradeColor(student.current),
                        )}
                      >
                        {student.current > 0 ? student.current : '-'}
                      </span>
                    </td>

                    {/* Target grade */}
                    <td className="px-3 py-2.5 text-center">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold bg-blue-500/10 text-blue-400">
                        {student.target !== null && student.target > 0 ? student.target : '-'}
                      </span>
                    </td>

                    {/* Gap */}
                    <td className="px-3 py-2.5 text-center">
                      {student.gap !== null ? (
                        <span
                          className={cn(
                            'inline-flex items-center gap-0.5 text-sm font-semibold tabular-nums',
                            student.gap > 0
                              ? 'text-green-400'
                              : student.gap === 0
                                ? 'text-clay-600'
                                : 'text-red-400',
                          )}
                        >
                          {student.gap > 0 && '+'}
                          {student.gap}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </td>

                    {/* Status badge */}
                    <td className="px-3 py-2.5 text-center">
                      {student.status !== 'unknown' ? (
                        <Badge
                          variant="outline"
                          className={cn('text-[10px]', colors.text, colors.border)}
                        >
                          {student.status === 'above'
                            ? 'Above'
                            : student.status === 'on'
                              ? 'On Target'
                              : 'Below'}
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </td>

                    {/* Trajectory */}
                    <td className="px-3 py-2.5">
                      <div className="flex items-center justify-center gap-1">
                        {trajectoryIcon(student.trajectory)}
                        <span
                          className={cn(
                            'text-xs hidden sm:inline',
                            student.trajectory === 'improving' && 'text-green-400',
                            student.trajectory === 'declining' && 'text-red-400',
                            student.trajectory === 'stable' && 'text-muted-foreground',
                          )}
                        >
                          {trajectoryLabel(student.trajectory)}
                        </span>
                      </div>
                    </td>

                    {/* Flight path */}
                    <td className="px-3 py-2.5">
                      <FlightPath
                        starting={student.starting}
                        current={student.current}
                        target={student.target}
                      />
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Row count */}
      {filtered.length > 0 && (
        <p className="text-xs text-muted-foreground">
          Showing {filtered.length} of {students.length} student
          {students.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* ── Flight Path Legend ───────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="font-medium">Flight Path Legend:</span>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
          <span>Starting grade</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3.5 w-3.5 rounded-full bg-primary border-2 border-background" />
          <span>Current grade</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Target className="h-3.5 w-3.5 text-blue-400" />
          <span>Target grade</span>
        </div>
      </div>
    </div>
  )
}
