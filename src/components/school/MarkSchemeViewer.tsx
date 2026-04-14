'use client'

import { useState, useMemo } from 'react'
import {
  markSchemeQuestions,
  boards,
  getPapersForBoard,
  getMarkSchemesForPaper,
  type MarkScheme,
  type Board,
} from '@/data/mark-scheme-questions'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Printer,
  ChevronDown,
  FileText,
  Target,
  AlertTriangle,
  Award,
} from 'lucide-react'

// ── Helpers ──────────────────────────────────────────────────────────────────

const levelColours: Record<number, string> = {
  1: 'bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800',
  2: 'bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800',
  3: 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800',
  4: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800',
}

const levelLabels: Record<number, string> = {
  1: 'Level 1',
  2: 'Level 2',
  3: 'Level 3',
  4: 'Level 4',
}

const levelBadgeVariants: Record<number, string> = {
  1: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  2: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  3: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  4: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
}

// ── Single Question Detail ───────────────────────────────────────────────────

function QuestionDetail({ scheme }: { scheme: MarkScheme }) {
  return (
    <div className="space-y-6 print:space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{scheme.question}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {scheme.board} &middot; {scheme.subject} &middot; {scheme.paper}
          </p>
        </div>
        <Badge variant="secondary" className="w-fit text-sm font-semibold">
          <Target className="mr-1 h-3.5 w-3.5" />
          {scheme.totalMarks} marks
        </Badge>
      </div>

      {/* Level descriptors */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Award className="h-4 w-4 text-primary" />
          Level Descriptors
        </h4>
        <div className="space-y-3">
          {scheme.levels.map((lvl) => (
            <div
              key={lvl.level}
              className={cn(
                'rounded-lg border p-4 transition-colors',
                levelColours[lvl.level] ?? 'bg-muted/50 border-border'
              )}
            >
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                    levelBadgeVariants[lvl.level] ?? 'bg-muted text-foreground'
                  )}
                >
                  {levelLabels[lvl.level] ?? `Level ${lvl.level}`}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {lvl.marks} mark{lvl.marks === '1' ? '' : 's'}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">{lvl.descriptor}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column: Tips + Mistakes */}
      <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
        {/* Top Tips */}
        <Card size="sm" className="border-emerald-200 dark:border-emerald-800">
          <CardHeader className="border-b border-emerald-100 dark:border-emerald-900">
            <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <Lightbulb className="h-4 w-4" />
              Top Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-3">
            <ul className="space-y-2">
              {scheme.topTips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card size="sm" className="border-red-200 dark:border-red-800">
          <CardHeader className="border-b border-red-100 dark:border-red-900">
            <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
              <AlertTriangle className="h-4 w-4" />
              Common Mistakes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-3">
            <ul className="space-y-2">
              {scheme.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Marker annotations */}
      {scheme.exampleAnnotations && (
        <Card size="sm" className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm text-primary">
              <FileText className="h-4 w-4" />
              Marker Annotations — What Good Marking Looks Like
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic leading-relaxed text-foreground/80">
              {scheme.exampleAnnotations}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// ── Dropdown select (native for reliability + printability) ──────────────────

function NativeSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled,
}: {
  label: string
  value: string
  onChange: (val: string) => void
  options: { value: string; label: string }[]
  placeholder: string
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={cn(
            'h-9 w-full appearance-none rounded-lg border border-border bg-background px-3 pr-8 text-sm text-foreground shadow-sm transition-colors',
            'focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'print:hidden'
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground print:hidden" />
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export function MarkSchemeViewer() {
  const [selectedBoard, setSelectedBoard] = useState<string>('')
  const [selectedPaper, setSelectedPaper] = useState<string>('')
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>('')

  // Derived data
  const papers = useMemo(() => {
    if (!selectedBoard) return []
    return getPapersForBoard(selectedBoard)
  }, [selectedBoard])

  const questions = useMemo(() => {
    if (!selectedBoard || !selectedPaper) return []
    return getMarkSchemesForPaper(selectedBoard, selectedPaper)
  }, [selectedBoard, selectedPaper])

  const activeScheme = useMemo(() => {
    if (!selectedQuestionId) return null
    return markSchemeQuestions.find((ms) => ms.id === selectedQuestionId) ?? null
  }, [selectedQuestionId])

  // Reset child selections when parent changes
  function handleBoardChange(board: string) {
    setSelectedBoard(board)
    setSelectedPaper('')
    setSelectedQuestionId('')
  }

  function handlePaperChange(paper: string) {
    setSelectedPaper(paper)
    setSelectedQuestionId('')
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between print:hidden">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <BookOpen className="h-6 w-6 text-primary" />
            Marking Guide
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse GCSE English marking criteria by board, paper, and question. Select a question to
            view detailed level descriptors, tips, and common mistakes.
          </p>
        </div>
        {activeScheme && (
          <button
            onClick={() => window.print()}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            <Printer className="h-4 w-4" />
            Print
          </button>
        )}
      </div>

      {/* Filters */}
      <Card className="print:hidden">
        <CardContent className="pt-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <NativeSelect
              label="Exam Board"
              value={selectedBoard}
              onChange={handleBoardChange}
              placeholder="Select board..."
              options={boards.map((b) => ({ value: b, label: b === 'WJEC' ? 'WJEC / Eduqas' : b }))}
            />
            <NativeSelect
              label="Paper"
              value={selectedPaper}
              onChange={handlePaperChange}
              placeholder="Select paper..."
              options={papers.map((p) => ({ value: p, label: p }))}
              disabled={!selectedBoard}
            />
            <NativeSelect
              label="Question"
              value={selectedQuestionId}
              onChange={setSelectedQuestionId}
              placeholder="Select question..."
              options={questions.map((q) => ({
                value: q.id,
                label: `${q.question} (${q.totalMarks} marks)`,
              }))}
              disabled={!selectedPaper}
            />
          </div>
        </CardContent>
      </Card>

      {/* Content area */}
      {activeScheme ? (
        <Card>
          <CardContent className="pt-5">
            <QuestionDetail scheme={activeScheme} />
          </CardContent>
        </Card>
      ) : selectedPaper && questions.length > 0 ? (
        /* Show overview of all questions for the selected paper */
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            Select a question above, or browse the overview below:
          </p>
          {questions.map((q) => (
            <Card
              key={q.id}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => setSelectedQuestionId(q.id)}
            >
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{q.question}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {q.levels.length} levels &middot; {q.topTips.length} tips
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {q.totalMarks} marks
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : selectedBoard && !selectedPaper ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FileText className="mb-3 h-10 w-10 text-muted-foreground/70" />
            <p className="text-sm text-muted-foreground">
              Select a paper to see available questions.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="mb-3 h-10 w-10 text-muted-foreground/70" />
            <p className="font-medium text-foreground">Get started</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose an exam board above to browse marking guides.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {boards.map((b) => (
                <button
                  key={b}
                  onClick={() => handleBoardChange(b)}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted hover:border-primary/30"
                >
                  {b === 'WJEC' ? 'WJEC / Eduqas' : b}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Print header (only visible when printing) */}
      {activeScheme && (
        <div className="hidden print:block print:mb-4">
          <p className="text-xs text-muted-foreground">
            {activeScheme.board} &middot; {activeScheme.subject} &middot; {activeScheme.paper} &middot;{' '}
            {activeScheme.question} &middot; Printed from The English Hub
          </p>
        </div>
      )}
    </div>
  )
}
