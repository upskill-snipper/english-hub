'use client'

import { useState, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'

// ── Types ────────────────────────────────────────────────────────────────────

export interface SeatingStudent {
  id: string
  name: string
  grade: string | null
  target: string | null
  trajectory: 'improving' | 'stable' | 'declining'
}

export interface SeatingLayout {
  rows: number
  cols: number
}

type ColorMode = 'grade' | 'trajectory' | 'target' | 'gender'

interface SeatAssignment {
  row: number
  col: number
  studentId: string | null
}

interface SeatingPlanProps {
  students: SeatingStudent[]
  layout: SeatingLayout
  seats: SeatAssignment[]
  onSeatsChange: (seats: SeatAssignment[]) => void
  colorMode?: ColorMode
  className?: string
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const GRADE_ORDER = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U']

function gradeColor(grade: string | null): string {
  if (!grade) return 'bg-muted text-muted-foreground'
  const g = grade.replace(/[^0-9A-U*]/gi, '').toUpperCase()
  if (['9', '8', 'A*', 'A'].includes(g))
    return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
  if (['7', '6', 'B', 'C'].includes(g)) return 'bg-blue-500/20 text-blue-400 border-blue-500/40'
  if (['5', '4', 'D'].includes(g)) return 'bg-amber-500/20 text-clay-600 border-amber-500/40'
  return 'bg-red-500/20 text-red-400 border-red-500/40'
}

function trajectoryColor(trajectory: string): string {
  if (trajectory === 'improving') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
  if (trajectory === 'declining') return 'bg-red-500/20 text-red-400 border-red-500/40'
  return 'bg-blue-500/20 text-blue-400 border-blue-500/40'
}

function targetColor(target: string | null): string {
  return gradeColor(target)
}

function getSeatColor(student: SeatingStudent | undefined, mode: ColorMode): string {
  if (!student) return 'bg-muted/50 border-dashed border-border'
  switch (mode) {
    case 'grade':
      return gradeColor(student.grade)
    case 'trajectory':
      return trajectoryColor(student.trajectory)
    case 'target':
      return targetColor(student.target)
    case 'gender':
      return 'bg-primary/10 text-primary border-primary/30'
    default:
      return 'bg-muted text-foreground border-border'
  }
}

function trajectoryArrow(t: string): string {
  if (t === 'improving') return '\u2191'
  if (t === 'declining') return '\u2193'
  return '\u2192'
}

// ── Component ────────────────────────────────────────────────────────────────

export function SeatingPlan({
  students,
  layout,
  seats,
  onSeatsChange,
  colorMode = 'grade',
  className,
}: SeatingPlanProps) {
  const [draggedStudentId, setDraggedStudentId] = useState<string | null>(null)
  const [dragSource, setDragSource] = useState<{ row: number; col: number } | null>(null)
  const [hoveredSeat, setHoveredSeat] = useState<{ row: number; col: number } | null>(null)
  const [tooltipStudent, setTooltipStudent] = useState<SeatingStudent | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const gridRef = useRef<HTMLDivElement>(null)

  const studentMap = new Map(students.map((s) => [s.id, s]))

  const getStudentAt = useCallback(
    (row: number, col: number): SeatingStudent | undefined => {
      const seat = seats.find((s) => s.row === row && s.col === col)
      if (!seat?.studentId) return undefined
      return studentMap.get(seat.studentId)
    },
    [seats, studentMap],
  )

  const assignedIds = new Set(seats.filter((s) => s.studentId).map((s) => s.studentId!))
  const unassigned = students.filter((s) => !assignedIds.has(s.id))

  // ── Drag handlers ────────────────────────────────────────────────────────

  function handleDragStartFromSeat(e: React.DragEvent, row: number, col: number) {
    const student = getStudentAt(row, col)
    if (!student) return
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', student.id)
    setDraggedStudentId(student.id)
    setDragSource({ row, col })
  }

  function handleDragStartFromBank(e: React.DragEvent, studentId: string) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', studentId)
    setDraggedStudentId(studentId)
    setDragSource(null)
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  function handleDropOnSeat(e: React.DragEvent, row: number, col: number) {
    e.preventDefault()
    const studentId = e.dataTransfer.getData('text/plain')
    if (!studentId) return

    const newSeats = seats.map((s) => ({ ...s }))

    // If dragged from another seat, clear that seat
    if (dragSource) {
      const sourceIdx = newSeats.findIndex(
        (s) => s.row === dragSource.row && s.col === dragSource.col,
      )
      if (sourceIdx >= 0) newSeats[sourceIdx] = { ...newSeats[sourceIdx], studentId: null }
    }

    // Check if target seat has a student (swap)
    const targetIdx = newSeats.findIndex((s) => s.row === row && s.col === col)
    const existingStudentId = targetIdx >= 0 ? newSeats[targetIdx].studentId : null

    if (targetIdx >= 0) {
      newSeats[targetIdx] = { ...newSeats[targetIdx], studentId }
    } else {
      newSeats.push({ row, col, studentId })
    }

    // If swapping from a seat, put the displaced student back in the source seat
    if (dragSource && existingStudentId && existingStudentId !== studentId) {
      const srcIdx = newSeats.findIndex((s) => s.row === dragSource.row && s.col === dragSource.col)
      if (srcIdx >= 0) {
        newSeats[srcIdx] = { ...newSeats[srcIdx], studentId: existingStudentId }
      }
    }

    onSeatsChange(newSeats)
    setDraggedStudentId(null)
    setDragSource(null)
  }

  function handleDropOnBank(e: React.DragEvent) {
    e.preventDefault()
    if (!dragSource) return
    const newSeats = seats.map((s) => ({ ...s }))
    const idx = newSeats.findIndex((s) => s.row === dragSource.row && s.col === dragSource.col)
    if (idx >= 0) newSeats[idx] = { ...newSeats[idx], studentId: null }
    onSeatsChange(newSeats)
    setDraggedStudentId(null)
    setDragSource(null)
  }

  function handleDragEnd() {
    setDraggedStudentId(null)
    setDragSource(null)
  }

  // ── Tooltip ──────────────────────────────────────────────────────────────

  function handleSeatMouseEnter(e: React.MouseEvent, row: number, col: number) {
    const student = getStudentAt(row, col)
    if (!student) {
      setTooltipStudent(null)
      return
    }
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top })
    setTooltipStudent(student)
    setHoveredSeat({ row, col })
  }

  function handleSeatMouseLeave() {
    setTooltipStudent(null)
    setHoveredSeat(null)
  }

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Teacher desk indicator */}
      <div className="mx-auto w-48 rounded-lg border border-border bg-muted/30 py-1.5 text-center text-xs font-medium text-muted-foreground print:border-black/20">
        FRONT OF CLASSROOM
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="relative mx-auto w-full max-w-4xl"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${layout.cols}, minmax(0, 1fr))`,
          gap: '0.5rem',
        }}
      >
        {Array.from({ length: layout.rows }).map((_, row) =>
          Array.from({ length: layout.cols }).map((_, col) => {
            const student = getStudentAt(row, col)
            const isDragOver =
              hoveredSeat?.row === row && hoveredSeat?.col === col && draggedStudentId
            const colorClass = getSeatColor(student, colorMode)

            return (
              <div
                key={`${row}-${col}`}
                draggable={!!student}
                onDragStart={(e) => handleDragStartFromSeat(e, row, col)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDropOnSeat(e, row, col)}
                onDragEnter={() => setHoveredSeat({ row, col })}
                onDragLeave={() => {
                  if (hoveredSeat?.row === row && hoveredSeat?.col === col) setHoveredSeat(null)
                }}
                onDragEnd={handleDragEnd}
                onMouseEnter={(e) => handleSeatMouseEnter(e, row, col)}
                onMouseLeave={handleSeatMouseLeave}
                className={cn(
                  'relative flex min-h-[3.5rem] cursor-grab flex-col items-center justify-center rounded-lg border p-1.5 text-center transition-all sm:min-h-[4rem] print:min-h-[3rem] print:border-black/30',
                  colorClass,
                  isDragOver && 'ring-2 ring-primary scale-105',
                  !student && 'cursor-default',
                  student && 'hover:scale-[1.02] hover:shadow-md',
                )}
              >
                {student ? (
                  <>
                    <span className="text-[0.65rem] font-semibold leading-tight sm:text-xs print:text-[9px]">
                      {student.name.length > 14
                        ? student.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('. ') + '.'
                        : student.name}
                    </span>
                    <span className="mt-0.5 text-[0.55rem] opacity-70 sm:text-[0.65rem] print:text-[8px]">
                      {student.grade ?? '-'} {trajectoryArrow(student.trajectory)}
                    </span>
                  </>
                ) : (
                  <span className="text-[0.6rem] text-muted-foreground/70">Empty</span>
                )}
              </div>
            )
          }),
        )}
      </div>

      {/* Tooltip (fixed position, rendered via portal-like approach) */}
      {tooltipStudent && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg print:hidden"
          style={{ left: tooltipPos.x, top: tooltipPos.y - 8 }}
        >
          <p className="font-semibold">{tooltipStudent.name}</p>
          <p className="text-muted-foreground">
            Grade: {tooltipStudent.grade ?? 'N/A'} | Target: {tooltipStudent.target ?? 'N/A'}
          </p>
          <p className="text-muted-foreground capitalize">
            Trajectory: {tooltipStudent.trajectory}
          </p>
        </div>
      )}

      {/* Unassigned students bank */}
      {unassigned.length > 0 && (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDropOnBank}
          className="rounded-lg border border-dashed border-border p-3 print:hidden"
        >
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Unassigned Students ({unassigned.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {unassigned.map((s) => (
              <div
                key={s.id}
                draggable
                onDragStart={(e) => handleDragStartFromBank(e, s.id)}
                onDragEnd={handleDragEnd}
                className={cn(
                  'cursor-grab rounded-md border px-2.5 py-1.5 text-xs font-medium transition-all hover:scale-105 hover:shadow-sm',
                  getSeatColor(s, colorMode),
                )}
              >
                {s.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
