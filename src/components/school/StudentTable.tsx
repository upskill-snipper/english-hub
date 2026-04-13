'use client'

import { useState, useMemo, useCallback } from 'react'
import {
  ArrowUp,
  ArrowDown,
  Minus,
  ArrowUpDown,
  Search,
} from 'lucide-react'
import { cn, formatDuration } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import type { StudentAnalytics } from '@/lib/types'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from '@/lib/grades'

/* ── Column configuration ──────────────────────────────────────────────────── */

type SortKey =
  | 'student_name'
  | 'avg_quiz_score'
  | 'completion_rate'
  | 'total_time_spent_seconds'
  | 'last_active_at'
  | 'trajectory'
  | 'predicted_grade'

type SortDir = 'asc' | 'desc'

export interface ColumnConfig {
  key: SortKey
  label: string
  align?: 'left' | 'center' | 'right'
  visible?: boolean
}

const DEFAULT_COLUMNS: ColumnConfig[] = [
  { key: 'student_name', label: 'Name', align: 'left' },
  { key: 'avg_quiz_score', label: 'Avg Score', align: 'center' },
  { key: 'completion_rate', label: 'Completion', align: 'center' },
  { key: 'total_time_spent_seconds', label: 'Time Spent', align: 'center' },
  { key: 'last_active_at', label: 'Last Active', align: 'center' },
  { key: 'trajectory', label: 'Trajectory', align: 'center' },
  { key: 'predicted_grade', label: 'Grade', align: 'center' },
]

/* ── Props ─────────────────────────────────────────────────────────────────── */

interface StudentTableProps {
  students: StudentAnalytics[]
  onRowClick?: (studentId: string) => void
  columns?: ColumnConfig[]
  className?: string
  showSearch?: boolean
  compact?: boolean
  emptyMessage?: string
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */

function scoreColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

function scoreBarBg(score: number): string {
  if (score >= 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
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

function formatRelativeDate(iso: string | null): string {
  if (!iso) return 'Never'
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / 86_400_000)
  if (diffDays < 1) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`
  return `${Math.floor(diffDays / 30)}mo ago`
}

/* ── Component ─────────────────────────────────────────────────────────────── */

export function StudentTable({
  students,
  onRowClick,
  columns = DEFAULT_COLUMNS,
  className,
  showSearch = true,
  compact = false,
  emptyMessage,
}: StudentTableProps) {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('avg_quiz_score')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const visibleColumns = useMemo(
    () => columns.filter((c) => c.visible !== false),
    [columns],
  )

  const handleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
      } else {
        setSortKey(key)
        setSortDir('desc')
      }
    },
    [sortKey],
  )

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim()
    let result = [...students]

    if (term) {
      result = result.filter(
        (s) =>
          s.student_name.toLowerCase().includes(term) ||
          s.student_id.toLowerCase().includes(term),
      )
    }

    result.sort((a, b) => {
      let aVal: string | number | null
      let bVal: string | number | null

      switch (sortKey) {
        case 'student_name':
          aVal = a.student_name.toLowerCase()
          bVal = b.student_name.toLowerCase()
          break
        case 'avg_quiz_score':
          aVal = a.avg_quiz_score
          bVal = b.avg_quiz_score
          break
        case 'completion_rate':
          aVal = a.completion_rate
          bVal = b.completion_rate
          break
        case 'total_time_spent_seconds':
          aVal = a.total_time_spent_seconds
          bVal = b.total_time_spent_seconds
          break
        case 'last_active_at':
          aVal = a.last_active_at ?? ''
          bVal = b.last_active_at ?? ''
          break
        case 'trajectory': {
          const order: Record<string, number> = { improving: 3, stable: 2, declining: 1 }
          aVal = order[a.trajectory] ?? 0
          bVal = order[b.trajectory] ?? 0
          break
        }
        case 'predicted_grade':
          aVal = parseInt(a.predicted_grade ?? '0')
          bVal = parseInt(b.predicted_grade ?? '0')
          break
        default:
          return 0
      }

      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1
      return 0
    })

    return result
  }, [students, search, sortKey, sortDir])

  /* ── Render cell by column key ───────────────────────────────────────────── */

  function renderCell(student: StudentAnalytics, key: SortKey) {
    const cellPad = cn('px-3 py-2.5', compact && 'px-2 py-2')

    switch (key) {
      case 'student_name':
        return (
          <td key={key} className={cellPad}>
            <div>
              <p className="font-medium text-foreground truncate max-w-[200px]">
                {student.student_name}
              </p>
              <p className="text-xs text-muted-foreground">
                {student.year_group ?? ''}
              </p>
            </div>
          </td>
        )

      case 'avg_quiz_score':
        return (
          <td key={key} className={cn(cellPad, 'text-center')}>
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  'font-semibold tabular-nums',
                  scoreColor(student.avg_quiz_score),
                )}
              >
                {percentageToGCSEGradeLabel(Math.round(student.avg_quiz_score))}
              </span>
              <div className="h-1 w-12 rounded-full bg-border overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all',
                    scoreBarBg(student.avg_quiz_score),
                  )}
                  style={{ width: `${student.avg_quiz_score}%` }}
                />
              </div>
            </div>
          </td>
        )

      case 'completion_rate':
        return (
          <td key={key} className={cn(cellPad, 'text-center')}>
            <div className="flex flex-col items-center gap-1">
              <span className="font-medium tabular-nums text-foreground">
                {Math.round(student.completion_rate)}%
              </span>
              <div className="h-1 w-12 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${student.completion_rate}%` }}
                />
              </div>
            </div>
          </td>
        )

      case 'total_time_spent_seconds':
        return (
          <td
            key={key}
            className={cn(
              cellPad,
              'text-center tabular-nums text-muted-foreground',
            )}
          >
            {formatDuration(student.total_time_spent_seconds)}
          </td>
        )

      case 'last_active_at':
        return (
          <td
            key={key}
            className={cn(cellPad, 'text-center text-muted-foreground')}
          >
            {formatRelativeDate(student.last_active_at)}
          </td>
        )

      case 'trajectory':
        return (
          <td key={key} className={cellPad}>
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
        )

      case 'predicted_grade':
        return (
          <td key={key} className={cn(cellPad, 'text-center')}>
            <span
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold',
                parseInt(student.predicted_grade ?? '0') >= 7
                  ? 'bg-green-500/10 text-green-400'
                  : parseInt(student.predicted_grade ?? '0') >= 5
                    ? 'bg-amber-500/10 text-amber-400'
                    : 'bg-red-500/10 text-red-400',
              )}
            >
              {student.predicted_grade ?? '-'}
            </span>
          </td>
        )

      default:
        return <td key={key} className={cellPad} />
    }
  }

  /* ── JSX ─────────────────────────────────────────────────────────────────── */

  return (
    <div className={className}>
      {showSearch && (
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {visibleColumns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-3 py-2.5 font-medium text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors whitespace-nowrap',
                    compact ? 'px-2 py-2 text-xs' : '',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                  )}
                  role="columnheader"
                  tabIndex={0}
                  aria-sort={sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
                  onClick={() => handleSort(col.key)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSort(col.key) } }}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {sortKey === col.key ? (
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
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={visibleColumns.length}
                  className="px-4 py-8 text-center text-muted-foreground"
                >
                  {emptyMessage ??
                    (search
                      ? 'No students match your search.'
                      : 'No students found.')}
                </td>
              </tr>
            ) : (
              filtered.map((student) => (
                <tr
                  key={student.student_id}
                  className={cn(
                    'border-b border-border/50 last:border-0 transition-colors',
                    onRowClick && 'cursor-pointer hover:bg-accent/50',
                  )}
                  role={onRowClick ? 'link' : undefined}
                  tabIndex={onRowClick ? 0 : undefined}
                  onClick={() => onRowClick?.(student.student_id)}
                  onKeyDown={onRowClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRowClick(student.student_id) } } : undefined}
                >
                  {visibleColumns.map((col) => renderCell(student, col.key))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filtered.length > 0 && (
        <p className="mt-2 text-xs text-muted-foreground">
          Showing {filtered.length} of {students.length} student
          {students.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}
