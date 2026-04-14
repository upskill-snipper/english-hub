'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  RotateCcw,
  Sparkles,
  Target,
  BookOpen,
  PenTool,
  FileText,
  Layers,
  Zap,
  TrendingUp,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'

import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

// ─── Types ────────────────────────────────────────────────────────────────

type WeeksUntilExam = '1' | '2-4' | '5-8' | '9-12' | '13+'
type TargetGrade = '4-5' | '6-7' | '8-9'
type WeakArea = 'poetry' | 'set-texts' | 'language' | 'exam-technique' | 'spag'
type HoursPerWeek = '1-2' | '3-5' | '6-10' | '10+'

interface StudyPlanAnswers {
  weeks: WeeksUntilExam
  grade: TargetGrade
  weakArea: WeakArea
  hoursPerWeek: HoursPerWeek
}

interface PlannedTask {
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
}

interface PlannedWeek {
  week: number
  focus: string
  tasks: PlannedTask[]
}

interface SavedPlan {
  answers: StudyPlanAnswers
  board: ExamBoard | null
  createdAt: string
  weeks: PlannedWeek[]
}

const STORAGE_KEY = 'english-hub-study-plan'

// ─── Question definitions (board removed) ─────────────────────────────────

interface Question<T extends string> {
  id: keyof StudyPlanAnswers
  prompt: string
  helper?: string
  options: { value: T; label: string; description?: string }[]
}

const QUESTIONS: [
  Question<WeeksUntilExam>,
  Question<TargetGrade>,
  Question<WeakArea>,
  Question<HoursPerWeek>,
] = [
  {
    id: 'weeks',
    prompt: 'How long until your first English exam?',
    helper: 'Pick the closest range -- we will scale your plan to fit.',
    options: [
      { value: '1', label: 'Less than a week', description: 'Crunch mode' },
      { value: '2-4', label: '2 to 4 weeks', description: 'Final sprint' },
      { value: '5-8', label: '5 to 8 weeks', description: 'Focused build' },
      { value: '9-12', label: '9 to 12 weeks', description: 'Steady term' },
      { value: '13+', label: '13+ weeks', description: 'Plenty of time' },
    ],
  },
  {
    id: 'grade',
    prompt: 'Which grade are you aiming for?',
    helper: 'Be ambitious but realistic -- we will pitch your plan accordingly.',
    options: [
      { value: '4-5', label: 'Grade 4 or 5', description: 'Strong pass' },
      { value: '6-7', label: 'Grade 6 or 7', description: 'High achiever' },
      { value: '8-9', label: 'Grade 8 or 9', description: 'Top of the class' },
    ],
  },
  {
    id: 'weakArea',
    prompt: 'Which area do you find hardest right now?',
    helper: 'We will give this extra time in your plan.',
    options: [
      { value: 'poetry', label: 'Poetry analysis', description: 'Anthology comparisons' },
      { value: 'set-texts', label: 'Set text essays', description: 'Shakespeare, novels, modern texts' },
      { value: 'language', label: 'Language paper', description: 'Reading and writing skills' },
      { value: 'exam-technique', label: 'Exam technique', description: 'Structure and timing' },
      { value: 'spag', label: 'SPaG accuracy', description: 'Spelling, punctuation, grammar' },
    ],
  },
  {
    id: 'hoursPerWeek',
    prompt: 'How many hours can you revise English per week?',
    helper: 'Be honest -- a plan you stick to beats a perfect plan you abandon.',
    options: [
      { value: '1-2', label: '1 to 2 hours', description: 'A little a day' },
      { value: '3-5', label: '3 to 5 hours', description: 'Solid commitment' },
      { value: '6-10', label: '6 to 10 hours', description: 'Heavy revision' },
      { value: '10+', label: '10+ hours', description: 'Exam crunch' },
    ],
  },
]

// ─── Board-specific link helpers ──────────────────────────────────────────

function getPoetryHref(board: ExamBoard | null): string {
  switch (board) {
    case 'aqa':
      return '/revision/poetry/power-and-conflict'
    case 'edexcel':
      return '/revision/poetry/edexcel'
    case 'eduqas':
      return '/revision/poetry/eduqas'
    case 'ocr':
      return '/revision/poetry/ocr'
    case 'edexcel-igcse':
      return '/igcse/edexcel'
    default:
      return '/revision/poetry'
  }
}

function getTextsHref(board: ExamBoard | null, slug?: string): string {
  // Edexcel IGCSE set-text guides live under category subfolders
  // (e.g. /igcse/edexcel/shakespeare/macbeth), not at /igcse/edexcel/[slug].
  // Until a flat [slug] resolver exists, fall back to the IGCSE hub.
  if (board === 'edexcel-igcse') return '/igcse/edexcel'
  if (slug) return `/revision/texts/${slug}`
  return '/revision/texts'
}

function getReadingHref(board: ExamBoard | null): string {
  if (board === 'cambridge-0500') return '/igcse/cambridge/0500'
  if (board === 'cambridge-0990') return '/igcse/cambridge/0990'
  return '/revision/language/reading'
}

// ─── Plan generator ───────────────────────────────────────────────────────

function buildPlan(answers: StudyPlanAnswers, board: ExamBoard | null): PlannedWeek[] {
  const isCambridge = board === 'cambridge-0500' || board === 'cambridge-0990'

  const weekCount = (() => {
    switch (answers.weeks) {
      case '1':
        return 1
      case '2-4':
        return 4
      case '5-8':
        return 6
      case '9-12':
        return 10
      case '13+':
        return 12
      default:
        return 6
    }
  })()

  // Pick a featured set text for this board (if any)
  const setTexts = getSetTextsForBoard(board)
  const featuredText =
    setTexts.find((t) => t.slug === 'macbeth') ??
    setTexts.find((t) => t.slug === 'an-inspector-calls') ??
    setTexts[0]

  // Block library — each block has a focus theme and 3 linked tasks
  const POETRY: PlannedTask = {
    title: 'Annotate two anthology poems',
    description: 'Read closely, mark techniques, and write a one-paragraph response to each.',
    href: getPoetryHref(board),
    icon: FileText,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
  }
  const POETRY_COMPARE: PlannedTask = {
    title: 'Practise a poetry comparison',
    description: 'Pair two poems on the same theme and write a comparative paragraph.',
    href: getPoetryHref(board),
    icon: FileText,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
  }
  const TEXT_DEEPDIVE: PlannedTask = {
    title: featuredText
      ? `Deep-dive a chapter or scene from "${featuredText.title}"`
      : 'Deep-dive a set text chapter or scene',
    description: 'Re-read, summarise, and extract 5 key quotes.',
    href: getTextsHref(board, featuredText?.slug),
    icon: BookOpen,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
  }
  const READING: PlannedTask = {
    title: 'Reading comprehension drill',
    description: 'Tackle a past extract and answer the analysis questions.',
    href: getReadingHref(board),
    icon: BookOpen,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
  }
  const WRITING: PlannedTask = {
    title: 'Creative or transactional writing',
    description: 'Write to a 45-minute prompt. Plan, draft, check.',
    href: '/revision/language/writing',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  }
  const SPAG: PlannedTask = {
    title: 'SPaG accuracy session',
    description: 'Review the SPaG mastery guide and proofread last week\'s writing.',
    href: '/revision/language/spag',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  }
  const ESSAY_STRUCTURE: PlannedTask = {
    title: 'Essay structure workout',
    description: 'Write a thesis and three topic sentences for a past question.',
    href: '/revision/exam-technique/essay-structure',
    icon: Target,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  }
  const QUESTION_TYPES: PlannedTask = {
    title: 'Decode question command words',
    description: 'Practise identifying what each command word actually wants.',
    href: '/revision/exam-technique/question-types',
    icon: Target,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  }
  const TIMING: PlannedTask = {
    title: 'Timed exam practice',
    description: 'Sit one full question under exam conditions.',
    href: '/revision/exam-technique/time-management',
    icon: Clock,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  }
  const FLASHCARDS: PlannedTask = {
    title: 'Flashcard sprint',
    description: '15 minutes of smart review on quotes and terminology.',
    href: '/revision/flashcards',
    icon: Layers,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
  }
  const QUIZ: PlannedTask = {
    title: 'Topic quiz check-in',
    description: 'Take a quick quiz on this week\'s topics to test recall.',
    href: '/revision/quiz',
    icon: Zap,
    colour: 'text-orange-400',
    bgColour: 'bg-orange-500/10',
  }
  const GRADE_GUIDE: PlannedTask = {
    title:
      answers.grade === '4-5'
        ? 'Read the Grade 5 mastery guide'
        : answers.grade === '6-7'
          ? 'Read the Grade 7 mastery guide'
          : 'Read the Grade 9 mastery guide',
    description: 'Tick off any skills you feel confident with.',
    href:
      answers.grade === '4-5'
        ? '/revision/grade-targets/grade-5'
        : answers.grade === '6-7'
          ? '/revision/grade-targets/grade-7'
          : '/revision/grade-targets/grade-9',
    icon: TrendingUp,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
  }

  // Weak-area boost
  const WEAK_BOOST: PlannedTask = (() => {
    switch (answers.weakArea) {
      case 'poetry':
        return POETRY_COMPARE
      case 'set-texts':
        return TEXT_DEEPDIVE
      case 'language':
        return READING
      case 'exam-technique':
        return ESSAY_STRUCTURE
      case 'spag':
        return SPAG
    }
  })()

  // Hour-aware task count
  const tasksPerWeek = (() => {
    switch (answers.hoursPerWeek) {
      case '1-2':
        return 2
      case '3-5':
        return 3
      case '6-10':
        return 4
      case '10+':
        return 4
      default:
        return 3
    }
  })()

  // For Cambridge 0500/0990 (language only), drop poetry/set-text blocks from rotation
  const rotation: PlannedTask[] = isCambridge
    ? [READING, WRITING, ESSAY_STRUCTURE, FLASHCARDS, QUESTION_TYPES, SPAG, TIMING, QUIZ, GRADE_GUIDE]
    : [
        POETRY,
        TEXT_DEEPDIVE,
        READING,
        WRITING,
        ESSAY_STRUCTURE,
        FLASHCARDS,
        QUESTION_TYPES,
        POETRY_COMPARE,
        SPAG,
        TIMING,
        QUIZ,
        GRADE_GUIDE,
      ]

  const weeks: PlannedWeek[] = []
  for (let w = 0; w < weekCount; w++) {
    const tasks: PlannedTask[] = []
    if (w % 2 === 0) tasks.push(WEAK_BOOST)
    let i = w
    while (tasks.length < tasksPerWeek) {
      const candidate = rotation[i % rotation.length]
      if (!tasks.some((t) => t.title === candidate.title)) tasks.push(candidate)
      i++
    }

    const focus = (() => {
      if (w === weekCount - 1 && weekCount > 1) return 'Final exam practice & review'
      if (w === 0) return 'Foundations & diagnostics'
      const focuses = [
        'Build core knowledge',
        'Apply techniques',
        'Practise under timing',
        'Stretch and challenge',
        'Consolidate weak areas',
      ]
      return focuses[(w - 1) % focuses.length]
    })()

    weeks.push({ week: w + 1, focus, tasks })
  }
  return weeks
}

// ─── Component ─────────────────────────────────────────────────────────────

export function StudyPlanClient({ initialBoard }: { initialBoard: ExamBoard | null }) {
  const { board: hookBoard } = useBoard()
  const board = hookBoard ?? initialBoard
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? null

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<StudyPlanAnswers>>({})
  const [savedPlan, setSavedPlan] = useState<SavedPlan | null>(null)
  const [mounted, setMounted] = useState(false)

  // Load saved plan on mount
  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: SavedPlan = JSON.parse(stored)
        setSavedPlan(parsed)
      }
    } catch {
      // ignore
    }
  }, [])

  const planWeeks = useMemo(() => {
    if (!savedPlan) return null
    return savedPlan.weeks
  }, [savedPlan])

  const currentQuestion = QUESTIONS[step]
  const isComplete = step >= QUESTIONS.length

  const handleAnswer = <T extends string>(value: T) => {
    const next = { ...answers, [currentQuestion.id]: value }
    setAnswers(next)

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
      return
    }

    // Last question — generate plan
    const fullAnswers = next as StudyPlanAnswers
    const generated = buildPlan(fullAnswers, board)
    const plan: SavedPlan = {
      answers: fullAnswers,
      board,
      createdAt: new Date().toISOString(),
      weeks: generated,
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
    } catch {
      // ignore
    }
    setSavedPlan(plan)
    setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleRetake = () => {
    setStep(0)
    setAnswers({})
    setSavedPlan(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  // Pre-mount: render skeleton to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="space-y-8 pb-16">
        <div className="h-40 rounded-2xl border border-border/60 bg-card animate-pulse" />
      </div>
    )
  }

  // ── Saved plan view ──────────────────────────────────────────────────
  if (savedPlan && planWeeks) {
    const meta = savedPlan.answers
    const planBoardConfig = getBoardConfig(savedPlan.board ?? board)
    const created = new Date(savedPlan.createdAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    return (
      <div className="space-y-8 pb-16">
        <Breadcrumb items={[{ label: 'Revision', href: '/revision' }, { label: 'Study Plan' }]} />
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Revision Hub
          </Button>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" />
                Your study plan
              </Badge>
              <h1 className="text-heading-lg font-heading text-foreground">
                Your Personalised {planBoardConfig?.shortName ?? ''} Plan
              </h1>
              <p className="text-body-sm text-muted-foreground">Generated on {created}</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleRetake}>
              <RotateCcw className="size-3.5" />
              Retake Diagnostic
            </Button>
          </div>
        </div>

        {/* Plan summary */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-heading-md font-heading text-foreground mb-4">Plan summary</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" />
                Time horizon
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {QUESTIONS[0].options.find((o) => o.value === meta.weeks)?.label}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="size-3.5" />
                Target grade
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {QUESTIONS[1].options.find((o) => o.value === meta.grade)?.label}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <GraduationCap className="size-3.5" />
                Exam board
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {planBoardConfig?.shortName ?? 'Not set'}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Target className="size-3.5" />
                Weakest area
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground capitalize">
                {meta.weakArea.replace('-', ' ')}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                Hours per week
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {QUESTIONS[3].options.find((o) => o.value === meta.hoursPerWeek)?.label}
              </p>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center gap-2 text-xs text-primary">
                <Sparkles className="size-3.5" />
                Plan length
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {planWeeks.length} week{planWeeks.length === 1 ? '' : 's'}
              </p>
            </div>
          </div>
        </section>

        {/* Weeks */}
        <section className="space-y-4">
          <h2 className="text-heading-md font-heading text-foreground">Week-by-week tasks</h2>
          {planWeeks.map((week) => (
            <div
              key={week.week}
              className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <Badge variant="secondary" className="mb-1.5">
                    Week {week.week}
                  </Badge>
                  <h3 className="text-heading-sm font-heading text-foreground">{week.focus}</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  {week.tasks.length} task{week.tasks.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {week.tasks.map((task, i) => (
                  <Link
                    key={task.title + i}
                    href={task.href}
                    className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
                  >
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${task.bgColour}`}
                    >
                      <task.icon className={`size-4 ${task.colour}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                        {task.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-emerald-500/[0.04] p-6 text-center">
          <CheckCircle2 className="mx-auto mb-3 size-8 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Stick with the plan</h2>
          <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
            Your plan is saved on this device. Come back any time and tick off tasks as you
            complete them. If your situation changes, you can always retake the diagnostic.
          </p>
          <Button variant="default" size="lg" className="mt-5" render={<Link href="/revision" />}>
            Back to Revision Hub
            <ArrowRight className="size-4" />
          </Button>
        </section>
      </div>
    )
  }

  // ── Diagnostic intro ─────────────────────────────────────────────────
  if (step === 0 && Object.keys(answers).length === 0) {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumb items={[{ label: 'Revision', href: '/revision' }, { label: 'Study Plan' }]} />
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Revision Hub
          </Button>
          <Badge variant="secondary" className="mb-3">
            <Sparkles className="mr-1 size-3" />
            {QUESTIONS.length}-question diagnostic
            {boardName ? ` for ${boardName}` : ''}
          </Badge>
          <h1 className="text-heading-lg font-heading text-foreground">
            Build your personalised study plan
          </h1>
          <p className="mt-2 max-w-2xl text-body-sm text-muted-foreground">
            Answer {QUESTIONS.length} quick questions and we will generate a week-by-week revision
            plan tailored to your exam date, target grade, and weakest area
            {boardName ? ` -- using ${boardName} texts and links throughout` : ''}. Your plan is
            saved on this device so you can come back any time.
          </p>
        </div>

        <DiagnosticStep
          question={QUESTIONS[0]}
          stepIndex={0}
          totalSteps={QUESTIONS.length}
          onSelect={handleAnswer}
          onBack={handleBack}
          canGoBack={false}
          currentValue={answers[QUESTIONS[0].id]}
        />
      </div>
    )
  }

  // ── In-progress diagnostic ───────────────────────────────────────────
  if (!isComplete) {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumb items={[{ label: 'Revision', href: '/revision' }, { label: 'Study Plan' }]} />
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Revision Hub
          </Button>
          <Badge variant="secondary" className="mb-3">
            <Sparkles className="mr-1 size-3" />
            Building your plan
            {boardName ? ` for ${boardName}` : ''}
          </Badge>
          <h1 className="text-heading-lg font-heading text-foreground">A few quick questions</h1>
        </div>

        <DiagnosticStep
          question={currentQuestion}
          stepIndex={step}
          totalSteps={QUESTIONS.length}
          onSelect={handleAnswer}
          onBack={handleBack}
          canGoBack
          currentValue={answers[currentQuestion.id]}
        />
      </div>
    )
  }

  // ── Generating fallback (should rarely show) ─────────────────────────
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
      <Sparkles className="mx-auto mb-3 size-8 text-primary animate-pulse" />
      <p className="text-body-sm text-muted-foreground">Building your plan...</p>
    </div>
  )
}

// ─── Diagnostic step component ────────────────────────────────────────────

function DiagnosticStep<T extends string>({
  question,
  stepIndex,
  totalSteps,
  onSelect,
  onBack,
  canGoBack,
  currentValue,
}: {
  question: Question<T>
  stepIndex: number
  totalSteps: number
  onSelect: (value: T) => void
  onBack: () => void
  canGoBack: boolean
  currentValue: string | undefined
}) {
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100)

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-caption font-medium text-muted-foreground">
            Question {stepIndex + 1} of {totalSteps}
          </span>
          <span className="text-caption font-semibold text-foreground">{progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-heading-md font-heading text-foreground">{question.prompt}</h2>
      {question.helper && (
        <p className="mt-1 text-body-sm text-muted-foreground">{question.helper}</p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {question.options.map((opt) => {
          const isSelected = currentValue === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? 'border-primary/40 bg-primary/[0.06]'
                  : 'border-border/40 bg-background/50 hover:border-border hover:bg-background'
              }`}
            >
              <div
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isSelected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-muted-foreground/30 group-hover:border-foreground/40'
                }`}
              >
                {isSelected && <CheckCircle2 className="size-3" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">{opt.label}</p>
                {opt.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{opt.description}</p>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {canGoBack && (
        <div className="mt-6 flex justify-start">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="size-3.5" />
            Previous
          </Button>
        </div>
      )}
    </section>
  )
}

