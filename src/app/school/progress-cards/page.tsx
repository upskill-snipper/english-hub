'use client'

import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import {
  Printer,
  Download,
  CheckSquare,
  Square,
  Users,
  FileText,
  AlertTriangle,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ProgressCard, PROGRESS_CARD_PRINT_STYLES } from '@/components/school/ProgressCard'
import type { ProgressCardData } from '@/components/school/ProgressCard'

/* ── API shapes ─────────────────────────────────────────────────────────────
 * Classes:  GET /api/school/classes -> { classes: [...] }
 * Pupils:   GET /api/school/classes/[classId]/analytics -> { student_summaries }
 * The card renders only what those endpoints return - fields they lack
 * (predicted/target grades, effort, strengths, revision hours) stay empty.
 * ──────────────────────────────────────────────────────────────────────────── */

interface SchoolClass {
  id: string
  name: string
  year_group: string | null
  exam_board: string | null
}

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
  trajectory: 'improving' | 'stable' | 'declining'
  last_activity: string | null
}

function summaryToCard(s: StudentSummary, cls: SchoolClass): ProgressCardData {
  return {
    student_id: s.student_id,
    student_name: s.full_name ?? s.email,
    year_group: s.year_group ?? cls.year_group,
    exam_board: cls.exam_board,
    modules_completed: s.modules_completed,
    total_modules: s.total_modules_started > 0 ? s.total_modules_started : null,
    avg_quiz_score: s.avg_quiz_score,
    trajectory: s.trajectory ?? null,
    // Not provided by the analytics API - rendered as absent, never invented.
    strengths: [],
    weaknesses: [],
    predicted_grade: null,
    target_grade: null,
    effort_rating: null,
    teacher_comment: '',
    next_steps: [],
    recommended_revision_hours: null,
    actual_revision_hours: null,
  }
}

/* ── Page Component ────────────────────────────────────────────────────────── */

export default function ProgressCardsPage() {
  const [classes, setClasses] = useState<SchoolClass[]>([])
  const [classesLoading, setClassesLoading] = useState(true)
  const [classesError, setClassesError] = useState(false)
  const [classesReloadKey, setClassesReloadKey] = useState(0)

  const [selectedClassId, setSelectedClassId] = useState<string>('')
  const [students, setStudents] = useState<ProgressCardData[]>([])
  const [studentsLoading, setStudentsLoading] = useState(false)
  const [studentsError, setStudentsError] = useState(false)

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const printRef = useRef<HTMLDivElement>(null)

  const selectedClass = classes.find((c) => c.id === selectedClassId) ?? null
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  /* ── Class list ──────────────────────────────────────────────────────────── */

  useEffect(() => {
    let cancelled = false
    setClassesLoading(true)
    setClassesError(false)
    fetch('/api/school/classes')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((json: { classes?: SchoolClass[] }) => {
        if (!cancelled) setClasses(json.classes ?? [])
      })
      .catch(() => {
        if (!cancelled) setClassesError(true)
      })
      .finally(() => {
        if (!cancelled) setClassesLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [classesReloadKey])

  /* ── Per-class pupil rows ────────────────────────────────────────────────── */

  const loadStudents = useCallback(async (classId: string, cls: SchoolClass) => {
    setStudentsLoading(true)
    setStudentsError(false)
    setStudents([])
    setSelectedIds(new Set())
    try {
      const res = await fetch(`/api/school/classes/${classId}/analytics`)
      if (!res.ok) throw new Error('fetch failed')
      const json = (await res.json()) as { student_summaries?: StudentSummary[] }
      const rows = (json.student_summaries ?? []).map((s) => summaryToCard(s, cls))
      setStudents(rows)
      setSelectedIds(new Set(rows.map((r) => r.student_id)))
    } catch {
      setStudentsError(true)
    } finally {
      setStudentsLoading(false)
    }
  }, [])

  const handleClassChange = useCallback(
    (classId: string) => {
      setSelectedClassId(classId)
      const cls = classes.find((c) => c.id === classId)
      if (cls) {
        loadStudents(classId, cls)
      } else {
        setStudents([])
        setSelectedIds(new Set())
      }
    },
    [classes, loadStudents],
  )

  const handleCommentChange = useCallback((studentId: string, comment: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.student_id === studentId ? { ...s, teacher_comment: comment } : s)),
    )
  }, [])

  const toggleStudent = useCallback((studentId: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(studentId)) {
        next.delete(studentId)
      } else {
        next.add(studentId)
      }
      return next
    })
  }, [])

  const toggleAll = useCallback(() => {
    if (selectedIds.size === students.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(students.map((s) => s.student_id)))
    }
  }, [selectedIds.size, students])

  const handlePrintAll = useCallback(() => {
    if (students.length === 0) return
    setSelectedIds(new Set(students.map((s) => s.student_id)))
    // Small delay to let state update before printing
    setTimeout(() => window.print(), 100)
  }, [students])

  const handlePrintSelected = useCallback(() => {
    if (selectedIds.size === 0) return
    window.print()
  }, [selectedIds])

  const handleExport = useCallback(() => {
    if (students.length === 0) return

    const exportData = students
      .filter((s) => selectedIds.has(s.student_id))
      .map((s) => ({
        name: s.student_name,
        student_id: s.student_id,
        year_group: s.year_group ?? '',
        exam_board: s.exam_board ?? '',
        modules_completed:
          s.total_modules !== null
            ? `${s.modules_completed}/${s.total_modules}`
            : String(s.modules_completed),
        avg_score: s.avg_quiz_score !== null ? `${Math.round(s.avg_quiz_score)}%` : '',
        trajectory: s.trajectory ?? '',
        teacher_comment: s.teacher_comment,
      }))

    const headers = Object.keys(exportData[0] || {})
    const csvRows = [
      headers.join(','),
      ...exportData.map((row) =>
        headers
          .map((h) => {
            const val = String(row[h as keyof typeof row] ?? '')
            return `"${val.replace(/"/g, '""')}"`
          })
          .join(','),
      ),
    ]

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `progress-cards-${selectedClass?.name?.replace(/\s+/g, '-') ?? 'class'}-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }, [students, selectedIds, selectedClass])

  /* ── Printable cards (only selected) ─────────────────────────────────────── */

  const printableStudents = useMemo(
    () => students.filter((s) => selectedIds.has(s.student_id)),
    [students, selectedIds],
  )

  const actionsReady = !studentsLoading && !studentsError && students.length > 0

  /* ── JSX ─────────────────────────────────────────────────────────────────── */

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PROGRESS_CARD_PRINT_STYLES }} />

      {/* ── Screen UI ────────────────────────────────────────────────────────── */}
      <div className="space-y-6 no-print" data-print-hide>
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Progress Cards</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Generate and print pupil progress cards for parent consultations.
          </p>
        </div>

        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Generate Progress Cards</CardTitle>
            <CardDescription>
              Select a class to populate pupil cards from their real analytics data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {classesError ? (
              <div className="flex flex-col items-start gap-3">
                <p className="text-sm text-muted-foreground">We could not load your classes.</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setClassesReloadKey((k) => k + 1)}
                >
                  Try again
                </Button>
              </div>
            ) : !classesLoading && classes.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Your school has no classes yet. Create a class and add pupils first.
              </p>
            ) : (
              <div className="flex flex-wrap items-end gap-4">
                {/* Class selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Class</label>
                  <Select
                    value={selectedClassId}
                    onValueChange={handleClassChange}
                    disabled={classesLoading}
                  >
                    <SelectTrigger className="w-[260px]">
                      <SelectValue
                        placeholder={classesLoading ? 'Loading classes…' : 'Select a class...'}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls.id} value={cls.id}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Action buttons - disabled until real rows are loaded */}
                {selectedClassId && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handlePrintAll}
                      disabled={!actionsReady}
                    >
                      <Printer className="h-3.5 w-3.5 mr-1.5" />
                      Print All ({students.length})
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrintSelected}
                      disabled={!actionsReady || selectedIds.size === 0}
                    >
                      <FileText className="h-3.5 w-3.5 mr-1.5" />
                      Print Selected ({selectedIds.size})
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleExport}
                      disabled={!actionsReady || selectedIds.size === 0}
                    >
                      <Download className="h-3.5 w-3.5 mr-1.5" />
                      Export CSV
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pupil rows: loading / error / empty / cards */}
        {selectedClassId && studentsLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {selectedClassId && !studentsLoading && studentsError && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <AlertTriangle className="h-8 w-8 text-red-400 mb-3" />
            <p className="text-sm text-muted-foreground">
              We could not load this class&apos;s pupil data. Nothing is shown rather than
              placeholder pupils.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => selectedClass && loadStudents(selectedClassId, selectedClass)}
            >
              Try again
            </Button>
          </div>
        )}

        {selectedClassId && !studentsLoading && !studentsError && students.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mb-4">
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              No pupil data in this class yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Progress cards appear once pupils in this class have activity on the platform.
            </p>
          </div>
        )}

        {actionsReady && (
          <>
            {/* Selection toolbar */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAll}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {selectedIds.size === students.length ? (
                    <CheckSquare className="h-4 w-4 text-primary" />
                  ) : (
                    <Square className="h-4 w-4" />
                  )}
                  {selectedIds.size === students.length ? 'Deselect all' : 'Select all'}
                </button>
                <span className="text-xs text-muted-foreground">
                  {selectedIds.size} of {students.length} selected
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                <span>
                  {selectedClass?.name}
                  {selectedClass?.exam_board ? ` · ${selectedClass.exam_board}` : ''}
                  {selectedClass?.year_group ? ` · ${selectedClass.year_group}` : ''}
                </span>
              </div>
            </div>

            {/* Cards Grid (screen preview) */}
            <div className="grid gap-4 lg:grid-cols-2">
              {students.map((student) => (
                <div key={student.student_id} className="relative">
                  {/* Selection checkbox overlay */}
                  <button
                    onClick={() => toggleStudent(student.student_id)}
                    className={cn(
                      'absolute top-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-md border transition-colors',
                      selectedIds.has(student.student_id)
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-card text-muted-foreground hover:border-primary/50',
                    )}
                    title={selectedIds.has(student.student_id) ? 'Deselect' : 'Select for printing'}
                  >
                    {selectedIds.has(student.student_id) && (
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>

                  <ProgressCard
                    student={student}
                    schoolName={selectedClass?.name}
                    date={today}
                    editable
                    onCommentChange={handleCommentChange}
                    className={cn(!selectedIds.has(student.student_id) && 'opacity-50')}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty state - no class selected */}
        {!selectedClassId && !classesError && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mb-4">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">No class selected</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Select a class above to generate progress cards for its pupils. You can edit comments
              and choose which cards to print.
            </p>
          </div>
        )}
      </div>

      {/* ── Printable Output (hidden on screen) ──────────────────────────────── */}
      <div id="progress-cards-root" ref={printRef} className="hidden print:block">
        {printableStudents.map((student) => (
          <ProgressCard
            key={student.student_id}
            student={student}
            schoolName={selectedClass?.name}
            date={today}
            editable={false}
          />
        ))}
      </div>
    </>
  )
}
