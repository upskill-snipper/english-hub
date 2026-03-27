'use client'

import { useState, useMemo, useCallback, memo } from 'react'
import { cn } from '@/lib/utils'
import type { WeakArea } from '@/lib/types'

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface StudentSkillScore {
  studentId: string
  studentName: string
  overallScore: number
  skills: Record<string, number> // skill name → score 0-100
}

type SortKey = 'name' | 'overall' | string // string = specific skill name
type SortDirection = 'asc' | 'desc'

interface WeakAreaHeatMapProps {
  /** Original simple mode: list of weak areas */
  weakAreas?: WeakArea[]
  onCellClick?: (area: WeakArea) => void

  /** Advanced grid mode: students x skills matrix */
  students?: StudentSkillScore[]
  skills?: string[]
  onStudentSkillClick?: (studentId: string, skill: string, score: number) => void

  /** Threshold below which cells are considered weak (default 50) */
  threshold?: number
  /** When true, only show cells below threshold */
  highlightMode?: boolean
  /** Enable export button */
  onExport?: (data: string) => void

  className?: string
}

/* ── Color helpers ─────────────────────────────────────────────────────────── */

function scoreToBgColor(score: number): string {
  if (score < 30) return 'bg-red-500/30'
  if (score < 40) return 'bg-red-500/20'
  if (score < 50) return 'bg-orange-500/20'
  if (score < 60) return 'bg-amber-500/15'
  if (score < 70) return 'bg-amber-400/10'
  if (score < 80) return 'bg-green-500/10'
  return 'bg-green-500/20'
}

function scoreToInlineBg(score: number): string {
  if (score < 30) return 'rgba(239,68,68,0.30)'
  if (score < 40) return 'rgba(239,68,68,0.20)'
  if (score < 50) return 'rgba(249,115,22,0.20)'
  if (score < 60) return 'rgba(245,158,11,0.15)'
  if (score < 70) return 'rgba(250,204,21,0.12)'
  if (score < 80) return 'rgba(34,197,94,0.12)'
  return 'rgba(34,197,94,0.22)'
}

function scoreToTextColor(score: number): string {
  if (score < 40) return 'text-red-400'
  if (score < 55) return 'text-orange-400'
  if (score < 70) return 'text-amber-400'
  return 'text-green-400'
}

function scoreToCellColor(score: number): string {
  if (score < 40)
    return 'bg-red-500/25 border-red-500/40 hover:bg-red-500/35'
  if (score < 55)
    return 'bg-orange-500/20 border-orange-500/35 hover:bg-orange-500/30'
  if (score < 70)
    return 'bg-amber-500/15 border-amber-500/30 hover:bg-amber-500/25'
  return 'bg-green-500/15 border-green-500/30 hover:bg-green-500/25'
}

function severityBadge(severity: 'critical' | 'warning' | 'minor') {
  switch (severity) {
    case 'critical':
      return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'warning':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'minor':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
}

/* ── Grid Heatmap (advanced mode) ──────────────────────────────────────────── */

const GridHeatMap = memo(function GridHeatMap({
  students,
  skills,
  threshold = 50,
  highlightMode = false,
  onStudentSkillClick,
  onExport,
  className,
}: {
  students: StudentSkillScore[]
  skills: string[]
  threshold: number
  highlightMode: boolean
  onStudentSkillClick?: (studentId: string, skill: string, score: number) => void
  onExport?: (data: string) => void
  className?: string
}) {
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDirection>('asc')
  const [showHighlightOnly, setShowHighlightOnly] = useState(highlightMode)
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)

  /* Sorting */
  const sorted = useMemo(() => {
    const copy = [...students]
    copy.sort((a, b) => {
      let aVal: number | string
      let bVal: number | string
      if (sortKey === 'name') {
        aVal = a.studentName.toLowerCase()
        bVal = b.studentName.toLowerCase()
      } else if (sortKey === 'overall') {
        aVal = a.overallScore
        bVal = b.overallScore
      } else {
        aVal = a.skills[sortKey] ?? 0
        bVal = b.skills[sortKey] ?? 0
      }
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1
      return 0
    })
    return copy
  }, [students, sortKey, sortDir])

  /* Column averages */
  const columnAverages = useMemo(() => {
    const avgs: Record<string, number> = {}
    for (const skill of skills) {
      let sum = 0
      let count = 0
      for (const s of students) {
        if (s.skills[skill] !== undefined) {
          sum += s.skills[skill]
          count++
        }
      }
      avgs[skill] = count > 0 ? Math.round(sum / count) : 0
    }
    return avgs
  }, [students, skills])

  const handleSort = useCallback((key: SortKey) => {
    setSortKey((prev) => {
      if (prev === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
        return key
      }
      setSortDir('asc')
      return key
    })
  }, [])

  const handleExport = useCallback(() => {
    if (!onExport) return
    const header = ['Student', 'Overall', ...skills].join(',')
    const rows = sorted.map((s) => {
      const skillScores = skills.map((sk) => s.skills[sk] ?? '')
      return [s.studentName, s.overallScore, ...skillScores].join(',')
    })
    const avgRow = ['CLASS AVERAGE', '', ...skills.map((sk) => columnAverages[sk])].join(',')
    onExport([header, ...rows, avgRow].join('\n'))
  }, [onExport, sorted, skills, columnAverages])

  const sortIndicator = (key: SortKey) => {
    if (sortKey !== key) return null
    return <span className="ml-0.5 text-[10px]">{sortDir === 'asc' ? '\u25B2' : '\u25BC'}</span>
  }

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {/* Controls */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 print:hidden">
        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={showHighlightOnly}
            onChange={(e) => setShowHighlightOnly(e.target.checked)}
            className="rounded border-border"
          />
          Show only below threshold ({threshold}%)
        </label>
        {onExport && (
          <button
            type="button"
            onClick={handleExport}
            className="rounded-md border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            Export CSV
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b bg-muted/30">
              <th
                className="sticky left-0 z-10 cursor-pointer bg-muted/30 px-3 py-2 text-left font-semibold text-muted-foreground hover:text-foreground"
                onClick={() => handleSort('name')}
              >
                Student{sortIndicator('name')}
              </th>
              <th
                className="cursor-pointer px-2 py-2 text-center font-semibold text-muted-foreground hover:text-foreground"
                onClick={() => handleSort('overall')}
              >
                Overall{sortIndicator('overall')}
              </th>
              {skills.map((skill) => (
                <th
                  key={skill}
                  className="cursor-pointer px-2 py-2 text-center font-semibold text-muted-foreground hover:text-foreground whitespace-nowrap"
                  onClick={() => handleSort(skill)}
                >
                  <span className="inline-block max-w-[80px] truncate" title={skill}>
                    {skill}
                  </span>
                  {sortIndicator(skill)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((student, rowIdx) => {
              const hasWeakCell = showHighlightOnly
                ? skills.some((sk) => (student.skills[sk] ?? 100) < threshold)
                : true
              if (!hasWeakCell) return null
              return (
                <tr key={student.studentId} className="border-b last:border-b-0 hover:bg-muted/20">
                  <td className="sticky left-0 z-10 bg-background px-3 py-2 font-medium text-foreground whitespace-nowrap">
                    {student.studentName}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <span className={cn('font-semibold tabular-nums', scoreToTextColor(student.overallScore))}>
                      {Math.round(student.overallScore)}%
                    </span>
                  </td>
                  {skills.map((skill, colIdx) => {
                    const score = student.skills[skill]
                    const isBelow = score !== undefined && score < threshold
                    const dimmed = showHighlightOnly && !isBelow
                    const isHovered = hoveredCell?.row === rowIdx && hoveredCell?.col === colIdx
                    return (
                      <td
                        key={skill}
                        className={cn(
                          'relative px-2 py-2 text-center tabular-nums transition-all duration-100',
                          score !== undefined && !dimmed && 'cursor-pointer',
                          isHovered && 'ring-2 ring-foreground/20 ring-inset',
                        )}
                        style={{
                          backgroundColor:
                            score !== undefined && !dimmed
                              ? scoreToInlineBg(score)
                              : undefined,
                        }}
                        onClick={() =>
                          score !== undefined &&
                          onStudentSkillClick?.(student.studentId, skill, score)
                        }
                        onMouseEnter={() => setHoveredCell({ row: rowIdx, col: colIdx })}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        {score !== undefined ? (
                          <span
                            className={cn(
                              'text-xs font-medium',
                              dimmed ? 'text-muted-foreground/70' : scoreToTextColor(score),
                            )}
                          >
                            {Math.round(score)}
                          </span>
                        ) : (
                          <span className="text-muted-foreground/20">-</span>
                        )}
                        {/* Hover tooltip */}
                        {isHovered && score !== undefined && !dimmed && (
                          <div className="absolute -top-10 left-1/2 z-30 -translate-x-1/2 rounded-md bg-foreground px-2.5 py-1.5 text-[11px] text-background whitespace-nowrap shadow-lg">
                            <p className="font-semibold">{student.studentName}</p>
                            <p>
                              {skill}: {Math.round(score)}%
                              {isBelow && ' (below threshold)'}
                            </p>
                            <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[var(--foreground)]" />
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
          {/* Column averages footer */}
          <tfoot>
            <tr className="border-t-2 bg-muted/40">
              <td className="sticky left-0 z-10 bg-muted/40 px-3 py-2 text-xs font-bold text-muted-foreground">
                Class Average
              </td>
              <td className="px-2 py-2 text-center">
                <span className="font-bold text-foreground tabular-nums">
                  {students.length > 0
                    ? Math.round(
                        students.reduce((s, st) => s + st.overallScore, 0) / students.length,
                      )
                    : 0}
                  %
                </span>
              </td>
              {skills.map((skill) => (
                <td key={skill} className="px-2 py-2 text-center">
                  <span className={cn('font-bold tabular-nums', scoreToTextColor(columnAverages[skill]))}>
                    {columnAverages[skill]}
                  </span>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-1 text-[10px] text-muted-foreground">
        <span className="mr-1.5 font-medium">Score scale:</span>
        {[
          { bg: 'bg-red-500/30', label: '<30%' },
          { bg: 'bg-red-500/20', label: '30-40%' },
          { bg: 'bg-orange-500/20', label: '40-50%' },
          { bg: 'bg-amber-500/15', label: '50-60%' },
          { bg: 'bg-amber-400/10', label: '60-70%' },
          { bg: 'bg-green-500/10', label: '70-80%' },
          { bg: 'bg-green-500/20', label: '80%+' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-0.5 ml-1">
            <div className={cn('h-3 w-5 rounded-sm', item.bg)} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

/* ── Original Card-style Heatmap ───────────────────────────────────────────── */

export const WeakAreaHeatMap = memo(function WeakAreaHeatMap({
  weakAreas,
  onCellClick,
  students,
  skills,
  onStudentSkillClick,
  threshold = 50,
  highlightMode = false,
  onExport,
  className,
}: WeakAreaHeatMapProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  /* ── Advanced grid mode ─────────────────────────────────────────────────── */
  if (students && skills) {
    return (
      <GridHeatMap
        students={students}
        skills={skills}
        threshold={threshold}
        highlightMode={highlightMode}
        onStudentSkillClick={onStudentSkillClick}
        onExport={onExport}
        className={className}
      />
    )
  }

  /* ── Original simple mode ───────────────────────────────────────────────── */
  const sorted = [...(weakAreas ?? [])].sort((a, b) => {
    const severityOrder = { critical: 0, warning: 1, minor: 2 }
    const severityDiff = severityOrder[a.severity] - severityOrder[b.severity]
    if (severityDiff !== 0) return severityDiff
    return a.avg_score - b.avg_score
  })

  if (sorted.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center py-12 text-muted-foreground text-sm',
          className,
        )}
      >
        No weak areas identified. All students are performing well.
      </div>
    )
  }

  return (
    <div className={cn('print:break-inside-avoid', className)}>
      {/* Heat map grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sorted.map((area, i) => (
          <div
            key={`${area.course_id}-${area.module_id ?? i}`}
            className={cn(
              'relative rounded-lg border p-4 transition-all duration-200 cursor-pointer',
              scoreToCellColor(area.avg_score),
              hoveredIndex === i && 'ring-1 ring-foreground/20 scale-[1.02]',
            )}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onCellClick?.(area)}
          >
            {/* Tooltip on hover */}
            {hoveredIndex === i && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 rounded-md bg-foreground px-3 py-1.5 text-xs text-background whitespace-nowrap shadow-lg">
                <p className="font-medium">{area.module_name ?? area.course_name}</p>
                <p>
                  Avg: {Math.round(area.avg_score)}% &middot;{' '}
                  {area.students_below_threshold} student
                  {area.students_below_threshold !== 1 ? 's' : ''} struggling
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-foreground" />
              </div>
            )}

            {/* Score badge */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={cn(
                  'text-2xl font-bold tabular-nums leading-none',
                  scoreToTextColor(area.avg_score),
                )}
              >
                {Math.round(area.avg_score)}%
              </span>
              <span
                className={cn(
                  'inline-flex h-5 items-center rounded-full border px-2 text-[10px] font-semibold uppercase shrink-0',
                  severityBadge(area.severity),
                )}
              >
                {area.severity}
              </span>
            </div>

            {/* Module / course name */}
            <p className="font-medium text-foreground text-sm truncate leading-snug">
              {area.module_name ?? area.course_name}
            </p>
            {area.module_name && (
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {area.course_name}
              </p>
            )}

            {/* Students struggling count */}
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {area.students_below_threshold}
              </span>{' '}
              student{area.students_below_threshold !== 1 ? 's' : ''} below
              threshold
            </p>
          </div>
        ))}
      </div>

      {/* Legend bar */}
      <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
        <span className="mr-2">Score scale:</span>
        <div className="flex items-center gap-1">
          <div className="h-3 w-8 rounded-sm bg-red-500/25" />
          <span>&lt;40%</span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <div className="h-3 w-8 rounded-sm bg-orange-500/20" />
          <span>40-55%</span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <div className="h-3 w-8 rounded-sm bg-amber-500/15" />
          <span>55-70%</span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <div className="h-3 w-8 rounded-sm bg-green-500/15" />
          <span>&gt;70%</span>
        </div>
      </div>
    </div>
  )
})
