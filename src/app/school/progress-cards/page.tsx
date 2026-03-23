'use client'

import { useState, useCallback, useMemo, useRef } from 'react'
import {
  Printer,
  Download,
  CheckSquare,
  Square,
  Users,
  FileText,
  ChevronDown,
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
import {
  ProgressCard,
  PROGRESS_CARD_PRINT_STYLES,
} from '@/components/school/ProgressCard'
import type { ProgressCardData } from '@/components/school/ProgressCard'
import type { Class } from '@/lib/types'

/* ── Mock Data ──────────────────────────────────────────────────────────────── */

const MOCK_CLASSES: Class[] = [
  {
    id: 'cls-1',
    school_id: 'sch-1',
    teacher_id: 'tch-1',
    name: '10A English Literature',
    year_group: '10',
    exam_board: 'AQA',
    academic_year: '2025-26',
    student_count: 4,
    is_active: true,
    created_at: '2025-09-01',
  },
  {
    id: 'cls-2',
    school_id: 'sch-1',
    teacher_id: 'tch-1',
    name: '11B English Language',
    year_group: '11',
    exam_board: 'Edexcel',
    academic_year: '2025-26',
    student_count: 3,
    is_active: true,
    created_at: '2025-09-01',
  },
]

function generateMockStudents(classData: Class): ProgressCardData[] {
  const names =
    classData.id === 'cls-1'
      ? ['Amara Johnson', 'Ben Carter', 'Chloe Nguyen', 'Daniel Okonkwo']
      : ['Emma Williams', 'Finn Murphy', 'Grace Chen']

  const strengths = [
    ['Character analysis', 'Use of quotations', 'Essay structure'],
    ['Creative writing', 'Vocabulary range', 'Descriptive techniques'],
    ['Analytical writing', 'Context understanding', 'Thematic links'],
    ['Close reading', 'Language analysis', 'Comparison skills'],
  ]

  const weaknesses = [
    ['Time management in exams', 'Spelling accuracy', 'Paragraph transitions'],
    ['Quotation embedding', 'Analytical depth', 'Exam technique'],
    ['Spelling and grammar', 'Using evidence', 'Conclusion writing'],
    ['Planning essays', 'Writer intent analysis', 'Technical terminology'],
  ]

  const nextSteps = [
    ['Practise timed essay writing (45 mins)', 'Review spelling of key terminology', 'Use PEEL paragraphs consistently'],
    ['Embed quotations using colons and commas', 'Add "zooming in" to word-level analysis', 'Complete 2 past papers by half term'],
    ['Use spell-check tools before submission', 'Include at least 3 quotations per paragraph', 'Write a strong concluding sentence'],
    ['Spend 5 minutes planning before writing', 'Analyse what the writer wants the reader to feel', 'Learn 10 new analytical terms this term'],
  ]

  return names.map((name, i) => ({
    student_id: `stu-${classData.id}-${i}`,
    student_name: name,
    student_email: `${name.toLowerCase().replace(/\s/g, '.')}@school.edu`,
    year_group: classData.year_group,
    exam_board: classData.exam_board,
    modules_completed: Math.floor(Math.random() * 8) + 2,
    total_modules: 12,
    completion_rate: Math.random() * 40 + 30,
    avg_quiz_score: Math.random() * 30 + 55,
    total_time_spent_seconds: Math.floor(Math.random() * 36000) + 7200,
    practice_sessions_count: Math.floor(Math.random() * 15) + 3,
    avg_practice_rating: Math.random() * 2 + 3,
    certificates_count: Math.floor(Math.random() * 3),
    last_active_at: '2026-03-20T14:30:00Z',
    trajectory: (['improving', 'stable', 'declining'] as const)[i % 3],
    strengths: strengths[i % strengths.length],
    weaknesses: weaknesses[i % weaknesses.length],
    predicted_grade: String(Math.floor(Math.random() * 4) + 4),
    target_grade: String(Math.floor(Math.random() * 3) + 6),
    effort_rating: Math.floor(Math.random() * 3) + 2,
    teacher_comment: '',
    next_steps: nextSteps[i % nextSteps.length],
    recommended_revision_hours: 20,
    actual_revision_hours: Math.floor(Math.random() * 18) + 4,
  }))
}

/* ── Page Component ────────────────────────────────────────────────────────── */

export default function ProgressCardsPage() {
  const [selectedClassId, setSelectedClassId] = useState<string>('')
  const [students, setStudents] = useState<ProgressCardData[]>([])
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const printRef = useRef<HTMLDivElement>(null)

  const selectedClass = MOCK_CLASSES.find((c) => c.id === selectedClassId) ?? null
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  /* ── Handlers ────────────────────────────────────────────────────────────── */

  const handleClassChange = useCallback((classId: string) => {
    setSelectedClassId(classId)
    const cls = MOCK_CLASSES.find((c) => c.id === classId)
    if (cls) {
      const mockStudents = generateMockStudents(cls)
      setStudents(mockStudents)
      setSelectedIds(new Set(mockStudents.map((s) => s.student_id)))
    } else {
      setStudents([])
      setSelectedIds(new Set())
    }
  }, [])

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
        email: s.student_email,
        year_group: s.year_group,
        exam_board: s.exam_board,
        predicted_grade: s.predicted_grade,
        target_grade: s.target_grade,
        modules_completed: `${s.modules_completed}/${s.total_modules}`,
        avg_score: `${Math.round(s.avg_quiz_score)}%`,
        effort_rating: `${s.effort_rating}/5`,
        trajectory: s.trajectory,
        strengths: s.strengths.join('; '),
        weaknesses: s.weaknesses.join('; '),
        next_steps: s.next_steps.join('; '),
        teacher_comment: s.teacher_comment,
        actual_revision_hours: s.actual_revision_hours,
        recommended_revision_hours: s.recommended_revision_hours,
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
            Generate and print student progress cards for parent consultations.
          </p>
        </div>

        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Generate Progress Cards</CardTitle>
            <CardDescription>
              Select a class to auto-populate student cards with their analytics data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-end gap-4">
              {/* Class selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Class</label>
                <Select
                  value={selectedClassId}
                  onValueChange={handleClassChange}
                >
                  <SelectTrigger className="w-[260px]">
                    <SelectValue placeholder="Select a class..." />
                  </SelectTrigger>
                  <SelectContent>
                    {MOCK_CLASSES.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action buttons */}
              {students.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Button variant="default" size="sm" onClick={handlePrintAll}>
                    <Printer className="h-3.5 w-3.5 mr-1.5" />
                    Print All ({students.length})
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrintSelected}
                    disabled={selectedIds.size === 0}
                  >
                    <FileText className="h-3.5 w-3.5 mr-1.5" />
                    Print Selected ({selectedIds.size})
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleExport}
                    disabled={selectedIds.size === 0}
                  >
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Export CSV
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Student Selection + Preview */}
        {students.length > 0 && (
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
                  {selectedClass?.name} &middot; {selectedClass?.exam_board} &middot;{' '}
                  Year {selectedClass?.year_group}
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
                    title={
                      selectedIds.has(student.student_id) ? 'Deselect' : 'Select for printing'
                    }
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
                    className={cn(
                      !selectedIds.has(student.student_id) && 'opacity-50',
                    )}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {!selectedClassId && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted mb-4">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              No class selected
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Select a class above to generate progress cards for all students.
              You can edit comments and select which cards to print.
            </p>
          </div>
        )}
      </div>

      {/* ── Printable Output (hidden on screen) ──────────────────────────────── */}
      <div
        id="progress-cards-root"
        ref={printRef}
        className="hidden print:block"
      >
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
