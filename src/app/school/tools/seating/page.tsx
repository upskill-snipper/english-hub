'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Shuffle,
  Printer,
  Save,
  FolderOpen,
  Trash2,
  Loader2,
  Grid3X3,
  Palette,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSchool } from '@/hooks/useSchool'
import type { Class, StudentAnalytics } from '@/lib/types'
import { SeatingPlan } from '@/components/school/SeatingPlan'
import type { SeatingStudent } from '@/components/school/SeatingPlan'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ── Types ────────────────────────────────────────────────────────────────────

interface SeatAssignment {
  row: number
  col: number
  studentId: string | null
}

interface SavedPlan {
  id: string
  name: string
  classId: string
  rows: number
  cols: number
  seats: SeatAssignment[]
  savedAt: string
}

type ArrangeMode = 'mixed' | 'friendship' | 'target' | 'random'
type ColorMode = 'grade' | 'trajectory' | 'target' | 'gender'

const ARRANGE_OPTIONS: { value: ArrangeMode; label: string; description: string }[] = [
  { value: 'mixed', label: 'Mixed Ability', description: 'Spread grades evenly across the room' },
  { value: 'friendship', label: 'Friendship Groups', description: 'Group similar-performing students together' },
  { value: 'target', label: 'By Target Grade', description: 'Arrange seats by target grade' },
  { value: 'random', label: 'Random', description: 'Randomly assign seats' },
]

const COLOR_OPTIONS: { value: ColorMode; label: string }[] = [
  { value: 'grade', label: 'Current Grade' },
  { value: 'trajectory', label: 'Trajectory' },
  { value: 'target', label: 'Target Grade' },
  { value: 'gender', label: 'Gender' },
]

const LS_KEY = 'english-hub-seating-plans'

// ── Helpers ──────────────────────────────────────────────────────────────────

function gradeToNum(grade: string | null): number {
  if (!grade) return 0
  const g = grade.replace(/[^0-9]/g, '')
  return parseInt(g, 10) || 0
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function buildInitialSeats(rows: number, cols: number): SeatAssignment[] {
  const seats: SeatAssignment[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      seats.push({ row: r, col: c, studentId: null })
    }
  }
  return seats
}

function autoArrange(
  students: SeatingStudent[],
  rows: number,
  cols: number,
  mode: ArrangeMode
): SeatAssignment[] {
  const seats = buildInitialSeats(rows, cols)
  let ordered: SeatingStudent[]

  switch (mode) {
    case 'mixed': {
      // Sort by grade, then distribute in a zigzag across rows
      const sorted = [...students].sort((a, b) => gradeToNum(b.grade) - gradeToNum(a.grade))
      ordered = []
      const numCols = cols
      for (let r = 0; r < rows; r++) {
        const rowStudents = sorted.slice(r * numCols, (r + 1) * numCols)
        ordered.push(...(r % 2 === 0 ? rowStudents : rowStudents.reverse()))
      }
      break
    }
    case 'friendship': {
      // Group similar grades together
      ordered = [...students].sort((a, b) => gradeToNum(b.grade) - gradeToNum(a.grade))
      break
    }
    case 'target': {
      ordered = [...students].sort((a, b) => gradeToNum(b.target) - gradeToNum(a.target))
      break
    }
    case 'random':
    default:
      ordered = shuffleArray(students)
      break
  }

  ordered.forEach((student, idx) => {
    if (idx < seats.length) {
      seats[idx].studentId = student.id
    }
  })

  return seats
}

function loadSavedPlans(): SavedPlan[] {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function savePlans(plans: SavedPlan[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(plans))
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SeatingPlanPage() {
  const router = useRouter()
  const { classes, isLoading: schoolLoading } = useSchool()

  // Selection state
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null)
  const [students, setStudents] = useState<SeatingStudent[]>([])
  const [loadingStudents, setLoadingStudents] = useState(false)

  // Grid config
  const [rows, setRows] = useState(5)
  const [cols, setCols] = useState(6)
  const [seats, setSeats] = useState<SeatAssignment[]>(() => buildInitialSeats(5, 6))

  // Display
  const [colorMode, setColorMode] = useState<ColorMode>('grade')
  const [arrangeMode, setArrangeMode] = useState<ArrangeMode>('random')

  // Save/load
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([])
  const [planName, setPlanName] = useState('')
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [showLoadDialog, setShowLoadDialog] = useState(false)

  // Load saved plans from localStorage
  useEffect(() => {
    setSavedPlans(loadSavedPlans())
  }, [])

  // Fetch students when class is selected
  useEffect(() => {
    if (!selectedClassId) {
      setStudents([])
      return
    }

    let cancelled = false
    setLoadingStudents(true)

    async function fetchStudents() {
      try {
        const res = await fetch(`/api/school/classes/${selectedClassId}/analytics`)
        if (!res.ok) throw new Error('Failed to load students')
        const data = await res.json()

        if (cancelled) return

        const studentList: SeatingStudent[] = (data.student_summaries ?? data.students ?? []).map(
          (s: Record<string, unknown>) => ({
            id: (s.student_id as string) ?? (s.id as string) ?? '',
            name: (s.full_name as string) ?? (s.student_name as string) ?? (s.email as string) ?? 'Unknown',
            grade: (s.predicted_grade as string) ?? (s.avg_quiz_score != null ? String(Math.round(s.avg_quiz_score as number)) : null),
            target: (s.target_grade as string) ?? null,
            trajectory: ((s.trajectory as string) ?? 'stable') as 'improving' | 'stable' | 'declining',
          })
        )

        setStudents(studentList)

        // Auto-assign with current arrangement mode
        const newSeats = autoArrange(studentList, rows, cols, arrangeMode)
        setSeats(newSeats)
      } catch (err) {
        console.error('Failed to fetch students for seating:', err)
      } finally {
        if (!cancelled) setLoadingStudents(false)
      }
    }

    fetchStudents()
    return () => {
      cancelled = true
    }
  }, [selectedClassId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Rebuild seats when grid dimensions change
  const handleGridResize = useCallback(
    (newRows: number, newCols: number) => {
      setRows(newRows)
      setCols(newCols)
      if (students.length > 0) {
        setSeats(autoArrange(students, newRows, newCols, arrangeMode))
      } else {
        setSeats(buildInitialSeats(newRows, newCols))
      }
    },
    [students, arrangeMode]
  )

  // Auto-arrange handler
  function handleAutoArrange(mode: ArrangeMode) {
    setArrangeMode(mode)
    setSeats(autoArrange(students, rows, cols, mode))
  }

  // Save plan
  function handleSave() {
    if (!planName.trim() || !selectedClassId) return
    const plan: SavedPlan = {
      id: crypto.randomUUID(),
      name: planName.trim(),
      classId: selectedClassId,
      rows,
      cols,
      seats,
      savedAt: new Date().toISOString(),
    }
    const updated = [...savedPlans, plan]
    setSavedPlans(updated)
    savePlans(updated)
    setPlanName('')
    setShowSaveDialog(false)
  }

  // Load plan
  function handleLoad(plan: SavedPlan) {
    setSelectedClassId(plan.classId)
    setRows(plan.rows)
    setCols(plan.cols)
    setSeats(plan.seats)
    setShowLoadDialog(false)
  }

  // Delete plan
  function handleDeletePlan(planId: string) {
    const updated = savedPlans.filter((p) => p.id !== planId)
    setSavedPlans(updated)
    savePlans(updated)
  }

  // Print
  function handlePrint() {
    window.print()
  }

  const selectedClass = classes.find((c) => c.id === selectedClassId)
  const plansForClass = savedPlans.filter((p) => p.classId === selectedClassId)

  if (schoolLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push('/school')}
            className="shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Seating Plan</h1>
            <p className="text-sm text-muted-foreground">
              Drag and drop students to arrange your classroom
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-1.5 h-3.5 w-3.5" />
            Print
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSaveDialog(true)}
            disabled={!selectedClassId}
          >
            <Save className="mr-1.5 h-3.5 w-3.5" />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={() => setShowLoadDialog(true)}>
            <FolderOpen className="mr-1.5 h-3.5 w-3.5" />
            Load
          </Button>
        </div>
      </div>

      {/* Print header (hidden on screen) */}
      <div className="hidden print:block">
        <h1 className="text-xl font-bold">
          Seating Plan — {selectedClass?.name ?? 'Class'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Controls */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:hidden">
        {/* Class selector */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Class</Label>
          <Select
            value={selectedClassId ?? undefined}
            onValueChange={(v) => setSelectedClassId(v)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a class..." />
            </SelectTrigger>
            <SelectContent>
              {classes.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name} ({c.student_count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Grid size */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">
            <Grid3X3 className="mr-1 inline h-3.5 w-3.5" />
            Grid Size
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={1}
              max={10}
              value={rows}
              onChange={(e) => handleGridResize(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)), cols)}
              className="w-16 text-center"
            />
            <span className="text-xs text-muted-foreground">x</span>
            <Input
              type="number"
              min={1}
              max={10}
              value={cols}
              onChange={(e) => handleGridResize(rows, Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
              className="w-16 text-center"
            />
            <span className="text-xs text-muted-foreground">({rows * cols} seats)</span>
          </div>
        </div>

        {/* Auto-arrange */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">
            <Shuffle className="mr-1 inline h-3.5 w-3.5" />
            Auto-Arrange
          </Label>
          <Select
            value={arrangeMode}
            onValueChange={(v) => handleAutoArrange(v as ArrangeMode)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ARRANGE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Color mode */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">
            <Palette className="mr-1 inline h-3.5 w-3.5" />
            Color Code By
          </Label>
          <Select
            value={colorMode}
            onValueChange={(v) => setColorMode(v as ColorMode)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {COLOR_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Arrangement info banner */}
      {selectedClassId && !loadingStudents && students.length > 0 && (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-4 py-2 text-sm print:hidden">
          <Badge variant="outline" className="shrink-0">
            {students.length} students
          </Badge>
          <span className="text-muted-foreground">
            {ARRANGE_OPTIONS.find((o) => o.value === arrangeMode)?.description}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto"
            onClick={() => handleAutoArrange(arrangeMode)}
          >
            <Shuffle className="mr-1 h-3 w-3" />
            Re-shuffle
          </Button>
        </div>
      )}

      {/* Seating grid */}
      {loadingStudents ? (
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : !selectedClassId ? (
        <Card>
          <CardContent className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
            Select a class to build a seating plan
          </CardContent>
        </Card>
      ) : students.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
            No students found in this class
          </CardContent>
        </Card>
      ) : (
        <Card className="print:border-0 print:shadow-none">
          <CardContent className="p-4 sm:p-6">
            <SeatingPlan
              students={students}
              layout={{ rows, cols }}
              seats={seats}
              onSeatsChange={setSeats}
              colorMode={colorMode}
            />
          </CardContent>
        </Card>
      )}

      {/* Color legend */}
      {students.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground print:mt-4">
          <span className="font-medium">Legend:</span>
          {colorMode === 'grade' || colorMode === 'target' ? (
            <>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-emerald-500/40" /> 7-9
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-blue-500/40" /> 5-6
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-amber-500/40" /> 4
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-red-500/40" /> 1-3
              </span>
            </>
          ) : colorMode === 'trajectory' ? (
            <>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-emerald-500/40" /> Improving
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-blue-500/40" /> Stable
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-red-500/40" /> Declining
              </span>
            </>
          ) : (
            <span>All students</span>
          )}
        </div>
      )}

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm print:hidden">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Save Seating Plan</CardTitle>
              <CardDescription>
                Save this layout to load it later
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label>Plan Name</Label>
                <Input
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  placeholder="e.g. 10A Spring Term"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setShowSaveDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={!planName.trim()}>
                  Save Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Load Dialog */}
      {showLoadDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm print:hidden">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Load Seating Plan</CardTitle>
              <CardDescription>
                Choose a previously saved plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {savedPlans.length === 0 ? (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  No saved plans yet
                </p>
              ) : (
                <div className="max-h-64 space-y-2 overflow-y-auto">
                  {savedPlans.map((plan) => {
                    const cls = classes.find((c) => c.id === plan.classId)
                    return (
                      <div
                        key={plan.id}
                        className="flex items-center justify-between rounded-lg border border-border p-3"
                      >
                        <div>
                          <p className="text-sm font-medium">{plan.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {cls?.name ?? 'Unknown class'} &middot; {plan.rows}x{plan.cols} &middot;{' '}
                            {new Date(plan.savedAt).toLocaleDateString('en-GB')}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLoad(plan)}
                          >
                            Load
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleDeletePlan(plan.id)}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setShowLoadDialog(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
