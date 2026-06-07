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
import { GRADE_SYSTEMS } from '@/lib/board/grade-boundaries'
import { useT } from '@/lib/i18n/use-t'

// ─── Board-aware grade-question labels ────────────────────────────────────
//
// The diagnostic stores target grade as a 9-1-style range (`4-5` / `6-7` /
// `8-9`) because every board maps onto 9-1 marks internally. But the
// LABEL shown to the student has to match their actual award:
//   - 9-1 boards                → "Grade 4 or 5" etc.
//   - A*-G boards (Cambridge 0500) → "D or C" / "B or A" / "A* or above"
//   - A*-E boards (IAL, UK A-Level) → "D or C" / "C or B" / "A or A*"

interface GradeOptionLabels {
  low: { label: string; description: string }
  mid: { label: string; description: string }
  high: { label: string; description: string }
}

function gradeLabelsForBoard(board: ExamBoard | null): GradeOptionLabels {
  const system = board ? GRADE_SYSTEMS[board] : '9-1'
  if (system === 'A*-E') {
    return {
      low: { label: 'Grade D or C', description: 'Solid pass' },
      mid: { label: 'Grade C or B', description: 'Strong performer' },
      high: { label: 'Grade A or A*', description: 'Top of the class' },
    }
  }
  if (system === 'A*-G') {
    return {
      low: { label: 'Grade D or C', description: 'Standard pass' },
      mid: { label: 'Grade B or A', description: 'Strong performer' },
      high: { label: 'Grade A*', description: 'Top of the class' },
    }
  }
  return {
    low: { label: 'Grade 4 or 5', description: 'Strong pass' },
    mid: { label: 'Grade 6 or 7', description: 'High achiever' },
    high: { label: 'Grade 8 or 9', description: 'Top of the class' },
  }
}

function questionsForBoard(board: ExamBoard | null): typeof QUESTIONS {
  const labels = gradeLabelsForBoard(board)
  // Clone the grade question with relabelled options. We deliberately keep
  // the `value` strings as-is (4-5 / 6-7 / 8-9) so downstream logic that
  // branches on them (buildPlan grade mapping, saved-plan persistence)
  // stays untouched.
  const [weeksQ, , weakAreaQ, hoursQ] = QUESTIONS
  const boardGradeQ: (typeof QUESTIONS)[1] = {
    id: 'grade',
    prompt: QUESTIONS[1].prompt,
    helper: QUESTIONS[1].helper,
    options: [
      { value: '4-5', label: labels.low.label, description: labels.low.description },
      { value: '6-7', label: labels.mid.label, description: labels.mid.description },
      { value: '8-9', label: labels.high.label, description: labels.high.description },
    ],
  }
  return [weeksQ, boardGradeQ, weakAreaQ, hoursQ]
}

// ─── Types ────────────────────────────────────────────────────────────────

type WeeksUntilExam = '1' | '2-4' | '5-8' | '9-12' | '13+'
type TargetGrade = '4-5' | '6-7' | '8-9'
type WeakArea = 'poetry' | 'set-texts' | 'language' | 'exam-technique' | 'spag'
type HoursPerWeek = '1-2' | '3-5' | '6-10' | '10+'

interface StudyPlanAnswers {
  weeks: WeeksUntilExam
  grade: TargetGrade
  // Multi-select: students often find more than one area hardest. Stored as an
  // array; we keep the order they tapped so the first item is the *primary*
  // weak area (used for the front-loaded WEAK_BOOST in week 1, etc.).
  weakArea: WeakArea[]
  hoursPerWeek: HoursPerWeek
}

// Icons are stored as STRING KEYS because the plan is JSON.stringified to
// localStorage. React component references don't survive serialisation -
// storing the component directly produced `{}` on reload and crashed the
// page with "Element type is invalid" on `<task.icon />`.
const ICON_MAP = {
  fileText: FileText,
  bookOpen: BookOpen,
  penTool: PenTool,
  target: Target,
  clock: Clock,
  layers: Layers,
  zap: Zap,
  trendingUp: TrendingUp,
} as const
type IconKey = keyof typeof ICON_MAP

interface PlannedTask {
  title: string
  description: string
  href: string
  icon: IconKey
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
  /**
   * When true, the user can pick more than one option (rendered as a multi-
   * select with a "Continue" button). Defaults to false (single-select, auto-
   * advances on tap). Currently used only on `weakArea` per Lauren's feedback
   * 2026-04-28: students often find more than one area hardest.
   */
  multiSelect?: boolean
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
    // Default labels target 9-1 boards. gradeLabelsForBoard() below swaps
    // these to A*-E wording for IAL / UK A-Level, or A*-G wording for
    // Cambridge 0500, before the component renders the question.
    options: [
      { value: '4-5', label: 'Grade 4 or 5', description: 'Strong pass' },
      { value: '6-7', label: 'Grade 6 or 7', description: 'High achiever' },
      { value: '8-9', label: 'Grade 8 or 9', description: 'Top of the class' },
    ],
  },
  {
    id: 'weakArea',
    prompt: 'Which areas do you find hardest right now?',
    helper: 'Pick all that apply -- we will give these extra time in your plan.',
    multiSelect: true,
    options: [
      { value: 'poetry', label: 'Poetry analysis', description: 'Anthology comparisons' },
      {
        value: 'set-texts',
        label: 'Set text essays',
        description: 'Shakespeare, novels, modern texts',
      },
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

  // Block library - each block has a focus theme and 3 linked tasks
  const POETRY: PlannedTask = {
    title: 'Annotate two anthology poems',
    description: 'Read closely, mark techniques, and write a one-paragraph response to each.',
    href: getPoetryHref(board),
    icon: 'fileText',
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
  }
  const POETRY_COMPARE: PlannedTask = {
    title: 'Practise a poetry comparison',
    description: 'Pair two poems on the same theme and write a comparative paragraph.',
    href: getPoetryHref(board),
    icon: 'fileText',
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
  }
  const TEXT_DEEPDIVE: PlannedTask = {
    title: featuredText
      ? `Deep-dive a chapter or scene from "${featuredText.title}"`
      : 'Deep-dive a set text chapter or scene',
    description: 'Re-read, summarise, and extract 5 key quotes.',
    href: getTextsHref(board, featuredText?.slug),
    icon: 'bookOpen',
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
  }
  const READING: PlannedTask = {
    title: 'Reading comprehension drill',
    description: 'Tackle a past extract and answer the analysis questions.',
    href: getReadingHref(board),
    icon: 'bookOpen',
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
  }
  const WRITING: PlannedTask = {
    title: 'Creative or transactional writing',
    description: 'Write to a 45-minute prompt. Plan, draft, check.',
    href: '/revision/language/writing',
    icon: 'penTool',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  }
  const SPAG: PlannedTask = {
    title: 'SPaG accuracy session',
    description: "Review the SPaG mastery guide and proofread last week's writing.",
    href: '/revision/language/spag',
    icon: 'penTool',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  }
  const ESSAY_STRUCTURE: PlannedTask = {
    title: 'Essay structure workout',
    description: 'Write a thesis and three topic sentences for a past question.',
    href: '/revision/exam-technique/essay-structure',
    icon: 'target',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  }
  const QUESTION_TYPES: PlannedTask = {
    title: 'Decode question command words',
    description: 'Practise identifying what each command word actually wants.',
    href: '/revision/exam-technique/question-types',
    icon: 'target',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  }
  const TIMING: PlannedTask = {
    title: 'Timed exam practice',
    description: 'Sit one full question under exam conditions.',
    href: '/revision/exam-technique/time-management',
    icon: 'clock',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  }
  const FLASHCARDS: PlannedTask = {
    title: 'Flashcard sprint',
    description: '15 minutes of smart review on quotes and terminology.',
    href: '/revision/flashcards',
    icon: 'layers',
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  }
  const QUIZ: PlannedTask = {
    title: 'Topic quiz check-in',
    description: "Take a quick quiz on this week's topics to test recall.",
    href: '/revision/quiz',
    icon: 'zap',
    colour: 'text-clay-600',
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
    icon: 'trendingUp',
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
  }

  // Weak-area boosts -- one per area the student flagged as hard.
  // weakArea is now an array (multi-select); we rotate through them so each
  // chosen area gets its own week-0/2/4 boost slot rather than collapsing them.
  const WEAK_BOOST_MAP: Record<WeakArea, PlannedTask> = {
    poetry: POETRY_COMPARE,
    'set-texts': TEXT_DEEPDIVE,
    language: READING,
    'exam-technique': ESSAY_STRUCTURE,
    spag: SPAG,
  }
  const weakAreasList: WeakArea[] = (() => {
    // Backward compat: old saved plans stored a single string. Accept either.
    const raw = answers.weakArea as unknown as WeakArea | WeakArea[] | undefined
    if (Array.isArray(raw)) return raw.length > 0 ? raw : ['exam-technique']
    if (raw) return [raw]
    return ['exam-technique']
  })()
  const WEAK_BOOSTS: PlannedTask[] = weakAreasList.map((a) => WEAK_BOOST_MAP[a])

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
    ? [
        READING,
        WRITING,
        ESSAY_STRUCTURE,
        FLASHCARDS,
        QUESTION_TYPES,
        SPAG,
        TIMING,
        QUIZ,
        GRADE_GUIDE,
      ]
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
    if (w % 2 === 0) {
      // Rotate which weak-area boost we feature each even week, so a student
      // who flagged 3 weak areas sees all 3 cycled through their plan.
      const boost = WEAK_BOOSTS[Math.floor(w / 2) % WEAK_BOOSTS.length]
      if (boost) tasks.push(boost)
    }
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
  const t = useT()
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

  // Board-aware question set - reshapes the grade question's labels for
  // IAL / UK A-Level (A*-E) and Cambridge 0500 (A*-G). Values (4-5 / 6-7 /
  // 8-9) stay stable so downstream plan-builder logic doesn't branch.
  const boardQuestions = useMemo(() => questionsForBoard(board), [board])
  const currentQuestion = boardQuestions[step]
  const isComplete = step >= boardQuestions.length

  // Handles both single-select (auto-advance on click) and multi-select
  // (advance on Continue). The DiagnosticStep below decides which UI to render
  // based on `question.multiSelect`; this fn just persists whatever shape it
  // gets handed (string for single, string[] for multi).
  const handleAnswer = <T extends string>(value: T | T[]) => {
    const next = { ...answers, [currentQuestion.id]: value }
    setAnswers(next)

    if (step < boardQuestions.length - 1) {
      setStep(step + 1)
      return
    }

    // Last question - generate plan
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
        <Breadcrumb
          items={[
            { label: 'Revision', href: '/revision' },
            { label: t('rev.misc.plan.breadcrumb') },
          ]}
        />
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.misc.plan.back_revision')}
          </Button>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" />
                {t('rev.misc.plan.badge_saved')}
              </Badge>
              <h1 className="text-heading-lg font-heading text-foreground">
                {t('rev.misc.plan.saved_title').replace(
                  '{board}',
                  planBoardConfig?.shortName ?? '',
                )}
              </h1>
              <p className="text-body-sm text-muted-foreground">
                {t('rev.misc.plan.generated_on').replace('{date}', created)}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleRetake}>
              <RotateCcw className="size-3.5" />
              {t('rev.misc.plan.retake_diagnostic')}
            </Button>
          </div>
        </div>

        {/* Plan summary */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-heading-md font-heading text-foreground mb-4">
            {t('rev.misc.plan.summary')}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" />
                {t('rev.misc.plan.time_horizon')}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {boardQuestions[0].options.find((o) => o.value === meta.weeks)?.label}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="size-3.5" />
                {t('rev.misc.plan.target_grade')}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {boardQuestions[1].options.find((o) => o.value === meta.grade)?.label}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <GraduationCap className="size-3.5" />
                {t('rev.misc.plan.exam_board')}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {planBoardConfig?.shortName ?? t('rev.misc.plan.not_set')}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Target className="size-3.5" />
                {t('rev.misc.plan.weakest_area')}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground capitalize">
                {Array.isArray(meta.weakArea)
                  ? meta.weakArea.map((a) => a.replace('-', ' ')).join(', ')
                  : (meta.weakArea as unknown as string).replace('-', ' ')}
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                {t('rev.misc.plan.hours_per_week')}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {boardQuestions[3].options.find((o) => o.value === meta.hoursPerWeek)?.label}
              </p>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center gap-2 text-xs text-primary">
                <Sparkles className="size-3.5" />
                {t('rev.misc.plan.plan_length')}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {(planWeeks.length === 1
                  ? t('rev.misc.plan.weeks_count_one')
                  : t('rev.misc.plan.weeks_count')
                ).replace('{count}', String(planWeeks.length))}
              </p>
            </div>
          </div>
        </section>

        {/* Weeks */}
        <section className="space-y-4">
          <h2 className="text-heading-md font-heading text-foreground">
            {t('rev.misc.plan.week_by_week')}
          </h2>
          {planWeeks.map((week) => (
            <div key={week.week} className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <Badge variant="secondary" className="mb-1.5">
                    {t('rev.misc.plan.week_label').replace('{n}', String(week.week))}
                  </Badge>
                  <h3 className="text-heading-sm font-heading text-foreground">{week.focus}</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  {(week.tasks.length === 1
                    ? t('rev.misc.plan.tasks_count_one')
                    : t('rev.misc.plan.tasks_count')
                  ).replace('{count}', String(week.tasks.length))}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {week.tasks.map((task, i) => {
                  const Icon = ICON_MAP[task.icon] ?? BookOpen
                  return (
                    <Link
                      key={task.title + i}
                      href={task.href}
                      className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
                    >
                      <div
                        className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${task.bgColour}`}
                      >
                        <Icon className={`size-4 ${task.colour}`} />
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
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-emerald-500/[0.04] p-6 text-center">
          <CheckCircle2 className="mx-auto mb-3 size-8 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            {t('rev.misc.plan.stick_title')}
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
            {t('rev.misc.plan.stick_body')}
          </p>
          <Button variant="default" size="lg" className="mt-5" render={<Link href="/revision" />}>
            {t('rev.misc.plan.back_revision')}
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
        <Breadcrumb
          items={[
            { label: 'Revision', href: '/revision' },
            { label: t('rev.misc.plan.breadcrumb') },
          ]}
        />
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.misc.plan.back_revision')}
          </Button>
          <Badge variant="secondary" className="mb-3">
            <Sparkles className="mr-1 size-3" />
            {boardName
              ? t('rev.misc.plan.diagnostic_badge_board')
                  .replace('{count}', String(QUESTIONS.length))
                  .replace('{board}', boardName)
              : t('rev.misc.plan.diagnostic_badge').replace('{count}', String(QUESTIONS.length))}
          </Badge>
          <h1 className="text-heading-lg font-heading text-foreground">
            {t('rev.misc.plan.intro_title')}
          </h1>
          <p className="mt-2 max-w-2xl text-body-sm text-muted-foreground">
            {boardName
              ? t('rev.misc.plan.intro_body_board')
                  .replace('{count}', String(QUESTIONS.length))
                  .replace('{board}', boardName)
              : t('rev.misc.plan.intro_body').replace('{count}', String(QUESTIONS.length))}
          </p>
        </div>

        <DiagnosticStep
          question={boardQuestions[0]}
          stepIndex={0}
          totalSteps={boardQuestions.length}
          onSelect={handleAnswer}
          onBack={handleBack}
          canGoBack={false}
          currentValue={answers[boardQuestions[0].id]}
        />
      </div>
    )
  }

  // ── In-progress diagnostic ───────────────────────────────────────────
  if (!isComplete) {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumb
          items={[
            { label: 'Revision', href: '/revision' },
            { label: t('rev.misc.plan.breadcrumb') },
          ]}
        />
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="mb-3 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.misc.plan.back_revision')}
          </Button>
          <Badge variant="secondary" className="mb-3">
            <Sparkles className="mr-1 size-3" />
            {boardName
              ? t('rev.misc.plan.building_badge_board').replace('{board}', boardName)
              : t('rev.misc.plan.building_badge')}
          </Badge>
          <h1 className="text-heading-lg font-heading text-foreground">
            {t('rev.misc.plan.few_questions')}
          </h1>
        </div>

        <DiagnosticStep
          question={currentQuestion}
          stepIndex={step}
          totalSteps={boardQuestions.length}
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
      <p className="text-body-sm text-muted-foreground">{t('rev.misc.plan.building_fallback')}</p>
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
  onSelect: (value: T | T[]) => void
  onBack: () => void
  canGoBack: boolean
  currentValue: string | string[] | undefined
}) {
  const t = useT()
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100)
  const isMulti = question.multiSelect ?? false

  // Local state for multi-select mode. We hydrate from currentValue so a
  // student navigating back keeps their previous picks. Resetting when
  // question.id changes is handled by React's key on the parent.
  const [localSelections, setLocalSelections] = useState<T[]>(() => {
    if (Array.isArray(currentValue)) return currentValue as T[]
    return []
  })

  // When the question changes (next step), reset local multi-select state
  // unless the new question already has values (back-navigation case).
  useEffect(() => {
    if (Array.isArray(currentValue)) {
      setLocalSelections(currentValue as T[])
    } else {
      setLocalSelections([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id])

  const toggleSelection = (value: T) => {
    setLocalSelections((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value)
      return [...prev, value]
    })
  }

  const handleClick = (opt: { value: T }) => {
    if (isMulti) {
      toggleSelection(opt.value)
      return
    }
    onSelect(opt.value)
  }

  const handleContinue = () => {
    if (localSelections.length === 0) return
    onSelect(localSelections)
  }

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-caption font-medium text-muted-foreground">
            {t('rev.misc.plan.step_x_of_y')
              .replace('{n}', String(stepIndex + 1))
              .replace('{total}', String(totalSteps))}
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
      {isMulti && (
        <p className="mt-2 text-caption text-muted-foreground">
          {localSelections.length === 0
            ? t('rev.misc.plan.select_one_or_more')
            : t('rev.misc.plan.n_selected').replace('{count}', String(localSelections.length))}
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {question.options.map((opt) => {
          const isSelected = isMulti
            ? localSelections.includes(opt.value)
            : currentValue === opt.value
          // Multi-select: render a square checkbox indicator.
          // Single-select: keep the existing rounded radio dot for visual continuity.
          const indicatorRadius = isMulti ? 'rounded-md' : 'rounded-full'
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleClick(opt)}
              aria-pressed={isMulti ? isSelected : undefined}
              className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? 'border-primary/40 bg-primary/[0.06]'
                  : 'border-border/40 bg-background/50 hover:border-border hover:bg-background'
              }`}
            >
              <div
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center border transition-colors ${indicatorRadius} ${
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

      <div className="mt-6 flex items-center justify-between gap-3">
        {canGoBack ? (
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="size-3.5" />
            {t('rev.misc.plan.previous')}
          </Button>
        ) : (
          <span aria-hidden="true" />
        )}

        {isMulti && (
          <Button
            variant="default"
            size="sm"
            onClick={handleContinue}
            disabled={localSelections.length === 0}
          >
            {t('rev.misc.plan.continue')}
            <ArrowRight className="size-3.5" />
          </Button>
        )}
      </div>
    </section>
  )
}
