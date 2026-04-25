'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Clock,
  Play,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Timer,
  FileText,
  ArrowRight,
  RotateCcw,
  Pause,
  Award,
  BookOpen,
  Eye,
  History,
  Send,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  mockExamPapers,
  getMockExamsByBoard,
  getMockExamById,
  formatExamTime,
  type MockExamPaper,
  type MockExamSection,
} from '@/data/mock-exams'
import { useAuthUserLoading } from '@/store/auth-store'
import {
  useExamStore,
  useExamPhaseStatus,
  useExamActions,
  useExamNavigation,
  useExamHistory,
  useExamAnswers,
} from '@/store/exam-store'
import { useBoard } from '@/hooks/useBoard'
import { useExamTimer, type TimerWarning } from '@/hooks/useExamTimer'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import EssayFeedbackInline from '@/components/EssayFeedbackInline'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function wordCountForAnswer(text: string): number {
  const trimmed = text.trim()
  if (!trimmed) return 0
  return trimmed.split(/\s+/).length
}

// ─── Board Config ────────────────────────────────────────────────────────────

const DEFAULT_BOARD_STYLE = {
  color: 'text-foreground',
  bg: 'bg-muted/30',
  ring: 'ring-border',
} as const

const BOARD_CONFIG: Record<string, { color: string; bg: string; ring: string }> = {
  AQA: { color: 'text-blue-400', bg: 'bg-blue-500/10', ring: 'ring-blue-500/30' },
  Edexcel: { color: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'ring-violet-500/30' },
  OCR: { color: 'text-clay-600', bg: 'bg-orange-500/10', ring: 'ring-orange-500/30' },
  WJEC: { color: 'text-red-400', bg: 'bg-red-500/10', ring: 'ring-red-500/30' },
  Eduqas: { color: 'text-red-400', bg: 'bg-red-500/10', ring: 'ring-red-500/30' },
  CAIE: { color: 'text-teal-300', bg: 'bg-teal-500/10', ring: 'ring-teal-500/30' },
  Cambridge: { color: 'text-teal-300', bg: 'bg-teal-500/10', ring: 'ring-teal-500/30' },
  'Edexcel IGCSE': { color: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'ring-violet-500/30' },
  IGCSE: { color: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'ring-violet-500/30' },
  IAL: { color: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'ring-violet-500/30' },
}

/**
 * Map a user's selected `ExamBoard` ID (cookie value) onto the legacy display
 * names used inside the mock-exam data. A single board may have papers tagged
 * across several legacy names (e.g. an IGCSE student should see "Edexcel
 * IGCSE", "IGCSE", AND "Edexcel" tagged papers).
 */
function legacyBoardNamesForExamBoard(board: string | null): string[] {
  if (!board) return []
  switch (board) {
    case 'aqa':
      return ['AQA']
    case 'edexcel':
      return ['Edexcel']
    case 'ocr':
      return ['OCR']
    case 'eduqas':
      return ['WJEC', 'Eduqas']
    case 'edexcel-igcse':
    case 'edexcel-igcse-lang':
      return ['Edexcel IGCSE', 'IGCSE', 'Edexcel']
    case 'cambridge-0500':
    case 'cambridge-0990':
    case 'cambridge-0475':
      return ['CAIE', 'Cambridge']
    case 'ial-edexcel':
      return ['IAL', 'Edexcel']
    case 'aqa-a-level':
      return ['AQA']
    case 'edexcel-a-level':
      return ['Edexcel']
    case 'ocr-a-level':
      return ['OCR']
    case 'eduqas-a-level':
      return ['WJEC', 'Eduqas']
    case 'ks3':
      return ['KS3']
    default:
      return []
  }
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function MockExamPage() {
  const { user, isLoading } = useAuthUserLoading()
  const router = useRouter()
  const { phase, _hasHydrated } = useExamPhaseStatus()
  const { isHydrated: boardHydrated } = useBoard()

  // Auth redirect guard
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login?redirect=' + encodeURIComponent(window.location.pathname))
    }
  }, [isLoading, user, router])

  // Auth loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect via useEffect
  }

  // Wait for hydration to avoid flash of wrong state
  if (!_hasHydrated || !boardHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {phase === 'config' && <ExamConfigScreen />}
      {phase === 'in-progress' && <ExamInProgress />}
      {phase === 'results' && <ExamResults />}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAM CONFIGURATION SCREEN
// ═══════════════════════════════════════════════════════════════════════════════

function ExamConfigScreen() {
  const { board: globalBoard } = useBoard()

  // Restrict the visible boards to the legacy names that match the user's
  // chosen exam board cookie. Falls back to the four GCSE boards only when
  // the user has not yet picked a board (anonymous landing case).
  const allowedBoardNames = useMemo(
    () =>
      legacyBoardNamesForExamBoard(globalBoard).length > 0
        ? legacyBoardNamesForExamBoard(globalBoard)
        : ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    [globalBoard],
  )

  const [selectedBoard, setSelectedBoard] = useState<string | null>(allowedBoardNames[0] ?? null)
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null)
  const { startExam } = useExamActions()
  const examHistory = useExamHistory()

  // Sync local board state when global board changes (e.g. after hydration from localStorage)
  useEffect(() => {
    if (globalBoard) {
      const first = allowedBoardNames[0]
      if (first && first !== selectedBoard) {
        setSelectedBoard(first)
        setSelectedExamId(null)
      }
    }
  }, [globalBoard, allowedBoardNames]) // eslint-disable-line react-hooks/exhaustive-deps

  // Aggregate every paper across every legacy name that maps to the user's
  // board. Important for IGCSE/IAL where papers may be tagged "IGCSE" or
  // "Edexcel" in the underlying data.
  const availablePapers = useMemo(() => {
    if (!selectedBoard) return []
    return allowedBoardNames.flatMap((name) => getMockExamsByBoard(name))
  }, [selectedBoard, allowedBoardNames])
  const selectedPaper = selectedExamId ? getMockExamById(selectedExamId) : null

  const handleStart = () => {
    if (!selectedPaper) return
    startExam(selectedPaper.id, selectedPaper.totalTimeMinutes)
  }

  const boards = allowedBoardNames

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Mock Exam Mode</h1>
            <p className="text-sm text-muted-foreground">
              Simulate real exam conditions with timed papers
            </p>
          </div>
        </div>
      </div>

      {/* Step 1: Board Selection */}
      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          1. Select Exam Board
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {boards.map((board) => {
            const config = BOARD_CONFIG[board] ?? DEFAULT_BOARD_STYLE
            const isSelected = selectedBoard === board
            return (
              <button
                key={board}
                onClick={() => {
                  setSelectedBoard(board)
                  setSelectedExamId(null)
                }}
                className={cn(
                  'group relative rounded-xl border p-4 text-left transition-all duration-200',
                  'hover:border-border/80 hover:shadow-sm',
                  isSelected
                    ? `border-2 ${config.ring} ${config.bg} shadow-sm`
                    : 'border-border/50 bg-card',
                )}
              >
                <div
                  className={cn('text-lg font-bold', isSelected ? config.color : 'text-foreground')}
                >
                  {board}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {getMockExamsByBoard(board).length} paper
                  {getMockExamsByBoard(board).length !== 1 ? 's' : ''} available
                </div>
                {isSelected && (
                  <CheckCircle className={cn('absolute top-2 right-2 h-4 w-4', config.color)} />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Step 2: Paper Selection */}
      {selectedBoard && (
        <section className="mb-6 animate-fade-in">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            2. Select Paper
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {availablePapers.map((paper) => {
              const isSelected = selectedExamId === paper.id
              const config = BOARD_CONFIG[paper.board] ?? DEFAULT_BOARD_STYLE
              return (
                <button
                  key={paper.id}
                  onClick={() => setSelectedExamId(paper.id)}
                  className={cn(
                    'group relative rounded-xl border p-4 text-left transition-all duration-200',
                    'hover:border-border/80 hover:shadow-sm',
                    isSelected
                      ? `border-2 ${config.ring} ${config.bg} shadow-sm`
                      : 'border-border/50 bg-card',
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      Paper {paper.paperNumber}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="mr-1 h-3 w-3" />
                      {formatExamTime(paper.totalTimeMinutes)}
                    </Badge>
                  </div>
                  <div className="text-sm font-semibold text-foreground">{paper.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{paper.subtitle}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {paper.sections.map((s) => (
                      <span key={s.id} className="text-xs text-muted-foreground">
                        {s.title} ({s.totalMarks} marks)
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-xs font-medium text-muted-foreground">
                    Total: {paper.totalMarks} marks
                  </div>
                  {isSelected && (
                    <CheckCircle className={cn('absolute top-2 right-2 h-4 w-4', config.color)} />
                  )}
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* Step 3: Exam Summary & Start */}
      {selectedPaper && (
        <section className="mb-6 animate-fade-in">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            3. Ready to Begin
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>{selectedPaper.title}</CardTitle>
              <CardDescription>{selectedPaper.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {formatExamTime(selectedPaper.totalTimeMinutes)}
                    </div>
                    <div className="text-xs text-muted-foreground">Time allowed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                    <FileText className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {selectedPaper.sections.length} section
                      {selectedPaper.sections.length !== 1 ? 's' : ''}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {selectedPaper.sections.reduce((a, s) => a + s.questions.length, 0)} questions
                      total
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/10">
                    <Award className="h-4 w-4 text-clay-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {selectedPaper.totalMarks} marks
                    </div>
                    <div className="text-xs text-muted-foreground">Total available</div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Exam conditions:</strong> Once you start, a
                    countdown timer will begin. The timer will warn you at 5 minutes and 1 minute
                    remaining. You can pause for accessibility, but try to complete the exam in one
                    sitting for the most realistic experience.
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" render={<Link href="/dashboard" />}>
                <ChevronLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <Button size="lg" onClick={handleStart}>
                <Play className="h-4 w-4" />
                Start Mock Exam
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}

      {/* Exam History */}
      {examHistory.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <History className="h-4 w-4" />
            Previous Attempts
          </h2>
          <div className="space-y-2">
            {examHistory.slice(0, 5).map((attempt) => {
              const paper = getMockExamById(attempt.examId)
              const timeUsed = Math.round(attempt.timeSpentSeconds / 60)
              const answeredCount = Object.values(attempt.answers).filter(
                (a) => a.trim().length > 0,
              ).length
              return (
                <Card key={attempt.id} className="animate-fade-in">
                  <CardContent className="flex items-center justify-between py-3 px-4">
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {attempt.paperTitle}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {attempt.board}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{timeUsed} min used</span>
                        <span className="text-xs text-muted-foreground">
                          {answeredCount} question{answeredCount !== 1 ? 's' : ''} answered
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(attempt.startedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAM IN PROGRESS
// ═══════════════════════════════════════════════════════════════════════════════

function ExamInProgress() {
  const currentExamId = useExamStore((s) => s.currentExamId)
  const answers = useExamAnswers()
  const { currentSectionIndex, setSection, nextSection, prevSection } = useExamNavigation()
  const { setAnswer, submitExam } = useExamActions()

  const paper = currentExamId ? getMockExamById(currentExamId) : null
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [timerWarning, setTimerWarning] = useState<TimerWarning>('none')

  const handleTimeUp = useCallback(() => {
    if (paper) {
      submitExam(paper.board, paper.title)
    }
  }, [paper, submitExam])

  const handleWarning = useCallback((warning: TimerWarning) => {
    setTimerWarning(warning)
  }, [])

  const handleTabSwitch = useCallback((count: number) => {
    // Could show a toast notification here. The count is persisted in the store
    // and will be visible in the exam results.
    console.warn(`[Mock Exam] Tab switch detected (total: ${count})`)
  }, [])

  const {
    formattedTime,
    isPaused,
    togglePause,
    warning,
    percentRemaining,
    isExpired,
    tabSwitchCount,
  } = useExamTimer(paper?.totalTimeMinutes ?? 0, {
    onTimeUp: handleTimeUp,
    onWarning: handleWarning,
    onTabSwitch: handleTabSwitch,
  })

  // Auto-submit if time expired on rehydration (e.g. user closed the tab and came back after time ran out)
  useEffect(() => {
    if (isExpired && paper) {
      submitExam(paper.board, paper.title)
    }
    // Only run when isExpired becomes true, not on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpired])

  if (!paper) return null

  const section = paper.sections[currentSectionIndex]
  const totalQuestions = paper.sections.reduce((a, s) => a + s.questions.length, 0)
  const answeredCount = Object.values(answers).filter((a) => a.trim().length > 0).length

  const handleSubmit = () => {
    submitExam(paper.board, paper.title)
    setShowSubmitDialog(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar — Timer & Progress */}
      <div
        className={cn(
          'sticky top-14 z-40 border-b bg-background/95 backdrop-blur-sm',
          warning === '1min' && 'border-red-500/50',
          warning === '5min' && 'border-yellow-500/50',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          {/* Left: Paper info */}
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-foreground">{paper.title}</div>
            <div className="text-xs text-muted-foreground">
              Section {currentSectionIndex + 1} of {paper.sections.length}
            </div>
          </div>

          {/* Center: Progress */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              {answeredCount}/{totalQuestions} answered
            </span>
            <Progress value={(answeredCount / totalQuestions) * 100} className="w-24 sm:w-32" />
          </div>

          {/* Right: Timer */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePause}
              className="rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors"
              title={isPaused ? 'Resume timer' : 'Pause timer'}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <div
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-lg font-bold tabular-nums',
                warning === 'none' && 'bg-primary/10 text-primary',
                warning === '5min' && 'bg-yellow-500/10 text-clay-600 animate-pulse',
                warning === '1min' && 'bg-red-500/10 text-red-400 animate-pulse',
                warning === 'expired' && 'bg-red-500/20 text-red-400',
              )}
            >
              <Timer className="h-4 w-4" />
              {formattedTime}
            </div>
          </div>
        </div>

        {/* Time progress bar */}
        <div className="h-0.5 bg-muted">
          <div
            className={cn(
              'h-full transition-all duration-1000',
              warning === 'none' && 'bg-primary',
              warning === '5min' && 'bg-yellow-500',
              warning === '1min' && 'bg-red-500',
              warning === 'expired' && 'bg-red-500',
            )}
            style={{ width: `${percentRemaining}%` }}
          />
        </div>

        {/* Warning banners */}
        {warning === '5min' && !isPaused && (
          <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-4 py-1.5 text-center text-sm font-medium text-clay-600">
            <AlertTriangle className="mr-1.5 inline h-3.5 w-3.5" />5 minutes remaining! Consider
            finishing your current answer.
          </div>
        )}
        {warning === '1min' && !isPaused && (
          <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-1.5 text-center text-sm font-medium text-red-400">
            <AlertTriangle className="mr-1.5 inline h-3.5 w-3.5" />1 minute remaining! Your exam
            will be submitted automatically.
          </div>
        )}
        {isPaused && (
          <div className="bg-blue-500/10 border-b border-blue-500/20 px-4 py-1.5 text-center text-sm font-medium text-blue-400">
            <Pause className="mr-1.5 inline h-3.5 w-3.5" />
            Timer paused. Click resume to continue.
          </div>
        )}
        {tabSwitchCount > 0 && (
          <div className="bg-orange-500/10 border-b border-orange-500/20 px-4 py-1.5 text-center text-sm font-medium text-clay-600">
            <AlertTriangle className="mr-1.5 inline h-3.5 w-3.5" />
            You have left this tab {tabSwitchCount} time{tabSwitchCount !== 1 ? 's' : ''}. In a real
            exam, this would be flagged.
          </div>
        )}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-0">
        {/* Sidebar — Section Navigation */}
        <aside className="hidden w-56 shrink-0 border-r bg-card/40 p-4 lg:block">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Sections
          </h3>
          <nav className="space-y-1">
            {paper.sections.map((s, i) => {
              const sectionAnswered = s.questions.filter(
                (q) => answers[q.id]?.trim().length > 0,
              ).length
              const isActive = i === currentSectionIndex
              return (
                <button
                  key={s.id}
                  onClick={() => setSection(i)}
                  className={cn(
                    'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                  )}
                >
                  <div className="truncate">{s.title}</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-xs">
                    <span>
                      {sectionAnswered}/{s.questions.length}
                    </span>
                    {sectionAnswered === s.questions.length && (
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    )}
                  </div>
                </button>
              )
            })}
          </nav>

          <Separator className="my-4" />

          <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
            <DialogTrigger
              render={
                <button
                  className={cn(
                    'w-full rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    'bg-primary/10 text-primary hover:bg-primary/20',
                  )}
                />
              }
            >
              <Send className="mr-1.5 inline h-3.5 w-3.5" />
              Submit Exam
            </DialogTrigger>
            <SubmitConfirmDialog
              answeredCount={answeredCount}
              totalQuestions={totalQuestions}
              onConfirm={handleSubmit}
            />
          </Dialog>
        </aside>

        {/* Main Content — Questions */}
        <main className="flex-1 px-4 py-6 sm:px-6">
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline">
                Section {currentSectionIndex + 1} of {paper.sections.length}
              </Badge>
              <Badge variant="secondary">{section.totalMarks} marks</Badge>
              <Badge variant="secondary">
                <Clock className="mr-1 h-3 w-3" />~{section.suggestedTimeMinutes} min
              </Badge>
            </div>
            <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
            {section.description && (
              <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
                {section.description}
              </p>
            )}
          </div>

          {/* Extract (if first question has one) */}
          {section.questions[0]?.extract && (
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Source Text</CardTitle>
                {section.questions[0].extractSource && (
                  <CardDescription>{section.questions[0].extractSource}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <ScrollArea className="max-h-72">
                  <div className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                    {section.questions[0].extract}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          )}

          {/* Questions */}
          <div className="space-y-6">
            {section.questions.map((question) => (
              <Card key={question.id} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {question.questionNumber}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {question.marks} mark{question.marks !== 1 ? 's' : ''}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        ~{question.suggestedTimeMinutes} min
                      </Badge>
                    </div>
                    {answers[question.id]?.trim().length > 0 && (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 whitespace-pre-line text-sm leading-relaxed text-foreground">
                    {question.questionText}
                  </div>
                  <Textarea
                    placeholder={
                      question.questionType === 'multiple-choice'
                        ? 'Type your selected answers (e.g., A, C, F, H)...'
                        : question.questionType === 'short-answer'
                          ? 'Write your answer here...'
                          : 'Write your response here...'
                    }
                    value={answers[question.id] ?? ''}
                    onChange={(e) => setAnswer(question.id, e.target.value)}
                    className="min-h-[100px] resize-y"
                    style={{
                      minHeight:
                        question.questionType === 'creative-writing' ||
                        question.questionType === 'transactional-writing'
                          ? '250px'
                          : question.questionType === 'evaluation' ||
                              question.questionType === 'comparison'
                            ? '180px'
                            : question.questionType === 'analysis'
                              ? '150px'
                              : '80px',
                    }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Section Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => prevSection()}
              disabled={currentSectionIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Section
            </Button>

            {currentSectionIndex < paper.sections.length - 1 ? (
              <Button onClick={() => nextSection(paper.sections.length)}>
                Next Section
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
                <DialogTrigger
                  render={
                    <button
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all',
                        'bg-primary text-primary-foreground hover:bg-primary/85 shadow-sm',
                      )}
                    />
                  }
                >
                  <Send className="h-4 w-4" />
                  Submit Exam
                </DialogTrigger>
                <SubmitConfirmDialog
                  answeredCount={answeredCount}
                  totalQuestions={totalQuestions}
                  onConfirm={handleSubmit}
                />
              </Dialog>
            )}
          </div>

          {/* Mobile section nav */}
          <div className="mt-4 flex flex-wrap gap-1 lg:hidden">
            {paper.sections.map((s, i) => {
              const sectionAnswered = s.questions.filter(
                (q) => answers[q.id]?.trim().length > 0,
              ).length
              return (
                <button
                  key={s.id}
                  onClick={() => setSection(i)}
                  className={cn(
                    'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                    i === currentSectionIndex
                      ? 'bg-primary text-primary-foreground'
                      : sectionAnswered === s.questions.length
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-muted text-muted-foreground',
                  )}
                >
                  S{i + 1}
                </button>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

// ─── Submit Confirmation Dialog ──────────────────────────────────────────────

function SubmitConfirmDialog({
  answeredCount,
  totalQuestions,
  onConfirm,
}: {
  answeredCount: number
  totalQuestions: number
  onConfirm: () => void
}) {
  const unanswered = totalQuestions - answeredCount

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Submit your exam?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. Your answers will be submitted for review.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-3 py-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Questions answered</span>
          <span className="font-medium text-foreground">
            {answeredCount} / {totalQuestions}
          </span>
        </div>
        {unanswered > 0 && (
          <div className="flex items-start gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
            <span className="text-sm text-muted-foreground">
              You have <strong className="text-clay-600">{unanswered}</strong> unanswered question
              {unanswered !== 1 ? 's' : ''}. Are you sure you want to submit?
            </span>
          </div>
        )}
      </div>

      <DialogFooter>
        <DialogClose
          render={
            <button className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-transparent px-3.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-foreground" />
          }
        >
          Keep Working
        </DialogClose>
        <button
          onClick={onConfirm}
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
        >
          <Send className="h-3.5 w-3.5" />
          Submit Exam
        </button>
      </DialogFooter>
    </DialogContent>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXAM RESULTS
// ═══════════════════════════════════════════════════════════════════════════════

function ExamResults() {
  const currentExamId = useExamStore((s) => s.currentExamId)
  const startedAt = useExamStore((s) => s.startedAt)
  const timeRemainingSeconds = useExamStore((s) => s.timeRemainingSeconds)
  const answers = useExamAnswers()
  const examHistory = useExamHistory()
  const { resetExam } = useExamActions()
  const [showModelAnswers, setShowModelAnswers] = useState<Record<string, boolean>>({})
  const [selectedGrade, setSelectedGrade] = useState<string>('Grade 6-7')

  const paper = currentExamId ? getMockExamById(currentExamId) : null
  const latestAttempt = examHistory[0]

  if (!paper || !latestAttempt) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-muted-foreground">No exam data found.</p>
        <Button className="mt-4" onClick={resetExam}>
          <RotateCcw className="h-4 w-4" />
          Start New Exam
        </Button>
      </div>
    )
  }

  const timeSpentMinutes = Math.round(latestAttempt.timeSpentSeconds / 60)
  const totalQuestions = paper.sections.reduce((a, s) => a + s.questions.length, 0)
  const answeredCount = Object.values(latestAttempt.answers).filter(
    (a) => a.trim().length > 0,
  ).length
  const completionPercent = Math.round((answeredCount / totalQuestions) * 100)

  // Grade estimate based on completion
  const getGradeEstimate = () => {
    if (completionPercent >= 90)
      return { grade: '8-9', color: 'text-clay-600', bg: 'bg-yellow-500/10' }
    if (completionPercent >= 75)
      return { grade: '6-7', color: 'text-blue-400', bg: 'bg-blue-500/10' }
    if (completionPercent >= 50)
      return { grade: '4-5', color: 'text-green-400', bg: 'bg-green-500/10' }
    return { grade: '2-3', color: 'text-muted-foreground', bg: 'bg-muted' }
  }
  const gradeEstimate = getGradeEstimate()

  const toggleModelAnswer = (questionId: string) => {
    setShowModelAnswers((prev) => ({ ...prev, [questionId]: !prev[questionId] }))
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
            <CheckCircle className="h-5 w-5 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Exam Complete</h1>
            <p className="text-sm text-muted-foreground">{paper.title}</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="animate-fade-in">
          <CardContent className="py-4 px-3 text-center">
            <div className={cn('text-2xl font-bold', gradeEstimate.color)}>
              Grade {gradeEstimate.grade}
            </div>
            <div className="text-xs text-muted-foreground mt-1">Estimated grade</div>
          </CardContent>
        </Card>
        <Card className="animate-fade-in">
          <CardContent className="py-4 px-3 text-center">
            <div className="text-2xl font-bold text-foreground">
              {timeSpentMinutes}
              <span className="text-sm font-normal text-muted-foreground"> min</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              of {paper.totalTimeMinutes} min allocated
            </div>
          </CardContent>
        </Card>
        <Card className="animate-fade-in">
          <CardContent className="py-4 px-3 text-center">
            <div className="text-2xl font-bold text-foreground">
              {answeredCount}
              <span className="text-sm font-normal text-muted-foreground"> / {totalQuestions}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Questions answered</div>
          </CardContent>
        </Card>
        <Card className="animate-fade-in">
          <CardContent className="py-4 px-3 text-center">
            <div className="text-2xl font-bold text-foreground">{completionPercent}%</div>
            <div className="text-xs text-muted-foreground mt-1">Completion rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Time Usage Bar */}
      <Card className="mb-6">
        <CardContent className="py-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Time usage</span>
            <span className="font-medium text-foreground">
              {timeSpentMinutes} / {paper.totalTimeMinutes} minutes
            </span>
          </div>
          <Progress value={(timeSpentMinutes / paper.totalTimeMinutes) * 100} />
          {timeSpentMinutes < paper.totalTimeMinutes && (
            <p className="mt-2 text-xs text-muted-foreground">
              You finished with {paper.totalTimeMinutes - timeSpentMinutes} minutes to spare. In the
              real exam, use spare time to review your answers.
            </p>
          )}
          {timeSpentMinutes >= paper.totalTimeMinutes && (
            <p className="mt-2 text-xs text-clay-600">
              You used all the allocated time. Practise time management to leave a review buffer.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Grade band selector for model answers */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Show model answers for:</span>
        {['Grade 4-5', 'Grade 6-7', 'Grade 8-9'].map((grade) => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={cn(
              'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
              selectedGrade === grade
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground',
            )}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Section-by-Section Breakdown */}
      <div className="space-y-6">
        {paper.sections.map((section, sectionIdx) => {
          const sectionAnswered = section.questions.filter(
            (q) => latestAttempt.answers[q.id]?.trim().length > 0,
          ).length

          return (
            <Card key={section.id} className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>
                      {sectionAnswered}/{section.questions.length} answered | {section.totalMarks}{' '}
                      marks available
                    </CardDescription>
                  </div>
                  <Badge
                    variant={sectionAnswered === section.questions.length ? 'default' : 'secondary'}
                    className={cn(
                      sectionAnswered === section.questions.length &&
                        'bg-green-500/10 text-green-400 border-green-500/30',
                    )}
                  >
                    {sectionAnswered === section.questions.length
                      ? 'Complete'
                      : `${sectionAnswered}/${section.questions.length}`}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.questions.map((question) => {
                  const studentAnswer = latestAttempt.answers[question.id] ?? ''
                  const hasAnswer = studentAnswer.trim().length > 0
                  const isModelVisible = showModelAnswers[question.id]

                  return (
                    <div key={question.id} className="rounded-lg border border-border/50 p-4">
                      {/* Question header */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {question.questionNumber}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {question.marks} mark{question.marks !== 1 ? 's' : ''}
                        </Badge>
                        {hasAnswer ? (
                          <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                        ) : (
                          <span className="text-xs text-red-400">Not answered</span>
                        )}
                      </div>

                      {/* Question text */}
                      <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                        {question.questionText.slice(0, 150)}
                        {question.questionText.length > 150 && '...'}
                      </p>

                      {/* Student answer */}
                      {hasAnswer && (
                        <div className="mb-3 rounded-lg bg-muted/50 p-3">
                          <div className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Your Answer
                          </div>
                          <p className="text-sm text-foreground whitespace-pre-line">
                            {studentAnswer.length > 500
                              ? `${studentAnswer.slice(0, 500)}...`
                              : studentAnswer}
                          </p>
                        </div>
                      )}

                      {/* AI Essay Feedback (inline) — only for long-form answers */}
                      {hasAnswer && wordCountForAnswer(studentAnswer) >= 100 && (
                        <EssayFeedbackInline
                          board={paper.board}
                          paper={`Paper ${paper.paperNumber}`}
                          questionType={question.questionType}
                          questionText={question.questionText}
                          existingAnswer={studentAnswer}
                          className="my-2"
                        />
                      )}

                      {/* Toggle model answer */}
                      <button
                        onClick={() => toggleModelAnswer(question.id)}
                        className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        {isModelVisible ? 'Hide' : 'Show'} model answer
                      </button>

                      {/* Model answer */}
                      {isModelVisible && (
                        <div className="mt-3 rounded-lg border border-green-500/20 bg-green-500/5 p-3 animate-fade-in">
                          <div className="mb-1 text-xs font-semibold text-green-400 uppercase tracking-wider">
                            Model Answer ({selectedGrade})
                          </div>
                          <p className="text-sm text-foreground/90 whitespace-pre-line">
                            {question.modelAnswers?.[selectedGrade] ??
                              question.modelAnswers?.['Grade 6-7'] ??
                              question.modelAnswers?.['Grade 4-5'] ??
                              'Model answer not available for this grade band.'}
                          </p>

                          {/* Marking guide */}
                          {question.markScheme &&
                            (Array.isArray(question.markScheme)
                              ? question.markScheme.length > 0
                              : Object.keys(question.markScheme).length > 0) && (
                              <div className="mt-3 border-t border-green-500/10 pt-3">
                                <div className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                  Marking Guide
                                </div>
                                <ul className="space-y-0.5">
                                  {(Array.isArray(question.markScheme)
                                    ? question.markScheme
                                    : Object.entries(
                                        question.markScheme as Record<string, string[]>,
                                      ).flatMap(([cat, points]) => [`${cat}:`, ...points])
                                  ).map((point, i) => (
                                    <li
                                      key={i}
                                      className="flex gap-1.5 text-xs text-muted-foreground"
                                    >
                                      <span className="text-primary">-</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Button variant="outline" render={<Link href="/dashboard" />}>
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <Button onClick={resetExam}>
          <RotateCcw className="h-4 w-4" />
          Try Another Exam
        </Button>
      </div>
    </div>
  )
}
