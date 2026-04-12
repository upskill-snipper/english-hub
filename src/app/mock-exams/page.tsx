'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Clock,
  FileText,
  Award,
  BookOpen,
  Sparkles,
  GraduationCap,
  ArrowRight,
  BarChart3,
  Target,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Play,
  TrendingUp,
  Info,
  CheckCircle2,
  Timer,
  Hash,
  Layers,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  getMockExamsByBoard,
  getAvailableBoards,
  formatExamTime,
  type MockExamPaper,
} from '@/data/mock-exams'
import { useBoard, getBoardConfig, type ExamBoard } from '@/hooks/useBoard'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

// ─── Types ──────────────────────────────────────────────────────────────────

interface GradeBoundary {
  grade: number
  minMarks: number
}

interface ExamCardData {
  id: string
  paperName: string
  paperType: 'language' | 'literature'
  paperNumber: 1 | 2
  examBoard: string
  timeAllowed: string
  timeMinutes: number
  totalMarks: number
  questionCount: number
  difficulty: 'Foundation' | 'Intermediate' | 'Higher'
  questions: QuestionSummary[]
  gradeBoundaries: GradeBoundary[]
  /** Optional past performance grade (1-9 scale) */
  pastGrade?: number | null
  paperId: string
}

interface QuestionSummary {
  number: number
  label: string
  marks: number
  type: string
}

// ─── Board Config ────────────────────────────────────────────────────────────

const DEFAULT_BOARD_CONFIG = {
  color: 'text-slate-400',
  bg: 'bg-slate-500/10',
  gradient: 'from-slate-500/20 to-slate-600/5',
  border: 'border-slate-500/30',
  badge: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
  accent: 'text-slate-400',
}

const BOARD_CONFIG: Record<string, typeof DEFAULT_BOARD_CONFIG> = {
  AQA: {
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    gradient: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    accent: 'text-blue-400',
  },
  Edexcel: {
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    gradient: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    accent: 'text-violet-400',
  },
  OCR: {
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    gradient: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/30',
    badge: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    accent: 'text-orange-400',
  },
  WJEC: {
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    gradient: 'from-red-500/20 to-red-600/5',
    border: 'border-red-500/30',
    badge: 'bg-red-500/15 text-red-300 border-red-500/30',
    accent: 'text-red-400',
  },
  CAIE: {
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/30',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    accent: 'text-emerald-400',
  },
}

// ─── AQA Grade Boundaries (realistic) ────────────────────────────────────────

const AQA_LANG_P1_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 68 },
  { grade: 8, minMarks: 61 },
  { grade: 7, minMarks: 54 },
  { grade: 6, minMarks: 46 },
  { grade: 5, minMarks: 38 },
  { grade: 4, minMarks: 30 },
  { grade: 3, minMarks: 22 },
  { grade: 2, minMarks: 14 },
  { grade: 1, minMarks: 7 },
]

const AQA_LANG_P2_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 67 },
  { grade: 8, minMarks: 60 },
  { grade: 7, minMarks: 52 },
  { grade: 6, minMarks: 44 },
  { grade: 5, minMarks: 36 },
  { grade: 4, minMarks: 28 },
  { grade: 3, minMarks: 21 },
  { grade: 2, minMarks: 14 },
  { grade: 1, minMarks: 7 },
]

const AQA_LIT_P1_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 56 },
  { grade: 8, minMarks: 50 },
  { grade: 7, minMarks: 44 },
  { grade: 6, minMarks: 37 },
  { grade: 5, minMarks: 30 },
  { grade: 4, minMarks: 24 },
  { grade: 3, minMarks: 18 },
  { grade: 2, minMarks: 12 },
  { grade: 1, minMarks: 6 },
]

const AQA_LIT_P2_BOUNDARIES: GradeBoundary[] = [
  { grade: 9, minMarks: 79 },
  { grade: 8, minMarks: 71 },
  { grade: 7, minMarks: 62 },
  { grade: 6, minMarks: 53 },
  { grade: 5, minMarks: 44 },
  { grade: 4, minMarks: 35 },
  { grade: 3, minMarks: 26 },
  { grade: 2, minMarks: 17 },
  { grade: 1, minMarks: 9 },
]

// ─── Exam Card Data ──────────────────────────────────────────────────────────

const EXAM_CARDS: ExamCardData[] = [
  {
    id: 'aqa-lang-p1',
    paperName: 'English Language Paper 1',
    paperType: 'language',
    paperNumber: 1,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 80,
    questionCount: 5,
    difficulty: 'Higher',
    paperId: 'aqa-lang-p1',
    questions: [
      { number: 1, label: 'List 4 things', marks: 4, type: 'Retrieval' },
      { number: 2, label: 'Language analysis (how does the writer use language...)', marks: 8, type: 'Language Analysis' },
      { number: 3, label: 'Structure analysis (how does the writer structure...)', marks: 8, type: 'Structure' },
      { number: 4, label: 'Evaluation (to what extent do you agree...)', marks: 20, type: 'Evaluation' },
      { number: 5, label: 'Creative writing (description or narrative)', marks: 40, type: 'Creative Writing' },
    ],
    gradeBoundaries: AQA_LANG_P1_BOUNDARIES,
    pastGrade: null,
  },
  {
    id: 'aqa-lang-p2',
    paperName: 'English Language Paper 2',
    paperType: 'language',
    paperNumber: 2,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 80,
    questionCount: 5,
    difficulty: 'Higher',
    paperId: 'aqa-lang-p2',
    questions: [
      { number: 1, label: 'True or false statements', marks: 4, type: 'Retrieval' },
      { number: 2, label: 'Summary of differences/similarities', marks: 8, type: 'Summary' },
      { number: 3, label: 'Language analysis (how does the writer use language...)', marks: 12, type: 'Language Analysis' },
      { number: 4, label: 'Comparison of viewpoints and perspectives', marks: 16, type: 'Comparison' },
      { number: 5, label: 'Transactional writing (letter, article, speech, leaflet)', marks: 40, type: 'Transactional Writing' },
    ],
    gradeBoundaries: AQA_LANG_P2_BOUNDARIES,
    pastGrade: null,
  },
  {
    id: 'aqa-lit-p1',
    paperName: 'English Literature Paper 1',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'AQA',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 64,
    questionCount: 2,
    difficulty: 'Higher',
    paperId: 'aqa-lit-p1',
    questions: [
      { number: 1, label: 'Shakespeare play (extract-based essay + wider play)', marks: 34, type: 'Extract + Essay' },
      { number: 2, label: '19th-century novel (extract-based essay + wider text)', marks: 30, type: 'Extract + Essay' },
    ],
    gradeBoundaries: AQA_LIT_P1_BOUNDARIES,
    pastGrade: null,
  },
  {
    id: 'aqa-lit-p2',
    paperName: 'English Literature Paper 2',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'AQA',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 96,
    questionCount: 3,
    difficulty: 'Higher',
    paperId: 'aqa-lit-p2',
    questions: [
      { number: 1, label: 'Modern text (essay on theme or character)', marks: 34, type: 'Essay' },
      { number: 2, label: 'Poetry anthology (comparison of two poems)', marks: 30, type: 'Comparison' },
      { number: 3, label: 'Unseen poetry (analysis + comparison)', marks: 32, type: 'Analysis + Comparison' },
    ],
    gradeBoundaries: AQA_LIT_P2_BOUNDARIES,
    pastGrade: null,
  },
]

// ─── Utility ─────────────────────────────────────────────────────────────────

function getDifficultyBadge(difficulty: string) {
  switch (difficulty) {
    case 'Foundation':
      return 'bg-green-500/15 text-green-300 border-green-500/30'
    case 'Intermediate':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    case 'Higher':
      return 'bg-red-500/15 text-red-300 border-red-500/30'
    default:
      return 'bg-slate-500/15 text-slate-300 border-slate-500/30'
  }
}

function getGradeColor(grade: number) {
  if (grade >= 7) return 'text-emerald-400'
  if (grade >= 5) return 'text-amber-400'
  return 'text-red-400'
}

function getGradeBg(grade: number) {
  if (grade >= 7) return 'bg-emerald-500/15 border-emerald-500/30'
  if (grade >= 5) return 'bg-amber-500/15 border-amber-500/30'
  return 'bg-red-500/15 border-red-500/30'
}

// ─── Grade Boundaries Component ──────────────────────────────────────────────

function GradeBoundariesTable({ boundaries, totalMarks }: { boundaries: GradeBoundary[]; totalMarks: number }) {
  return (
    <div className="grid grid-cols-9 gap-1">
      {boundaries.map(({ grade, minMarks }) => (
        <div
          key={grade}
          className={cn(
            'rounded-lg p-2 text-center border',
            grade >= 7
              ? 'bg-emerald-500/10 border-emerald-500/20'
              : grade >= 5
                ? 'bg-amber-500/10 border-amber-500/20'
                : 'bg-slate-500/10 border-slate-500/20'
          )}
        >
          <div className={cn('text-sm font-bold', getGradeColor(grade))}>{grade}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">{minMarks}/{totalMarks}</div>
        </div>
      ))}
    </div>
  )
}

// ─── Question List Component ─────────────────────────────────────────────────

function QuestionBreakdown({ questions }: { questions: QuestionSummary[] }) {
  return (
    <div className="space-y-2">
      {questions.map((q) => (
        <div key={q.number} className="flex items-center gap-3 text-sm">
          <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">
            {q.number}
          </span>
          <span className="text-foreground/80 flex-1 min-w-0">{q.label}</span>
          <Badge variant="outline" className="text-xs shrink-0">{q.marks} marks</Badge>
        </div>
      ))}
    </div>
  )
}

// ─── Past Performance Component ──────────────────────────────────────────────

function PastPerformance({ grade }: { grade: number | null | undefined }) {
  if (grade == null) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <BarChart3 className="h-4 w-4" />
        <span>No attempts yet</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <TrendingUp className="h-4 w-4" />
        <span>Best grade:</span>
      </div>
      <div className={cn('flex items-center justify-center h-8 w-8 rounded-lg border font-bold text-sm', getGradeBg(grade), getGradeColor(grade))}>
        {grade}
      </div>
    </div>
  )
}

// ─── Exam Paper Card ─────────────────────────────────────────────────────────

function ExamPaperCard({ exam }: { exam: ExamCardData }) {
  const [showDetails, setShowDetails] = useState(false)
  const config = BOARD_CONFIG[exam.examBoard] ?? DEFAULT_BOARD_CONFIG
  const isLanguage = exam.paperType === 'language'

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-border">
      {/* Header gradient strip */}
      <div className={cn('h-1.5', isLanguage ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-violet-500 to-pink-500')} />

      <CardHeader className="pb-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge className={cn(config.badge, 'text-xs')}>{exam.examBoard}</Badge>
              <Badge className={cn(getDifficultyBadge(exam.difficulty), 'text-xs border')}>
                {exam.difficulty}
              </Badge>
              <Badge variant="outline" className={cn('text-xs', isLanguage ? 'border-cyan-500/30 text-cyan-300' : 'border-pink-500/30 text-pink-300')}>
                {isLanguage ? 'Language' : 'Literature'}
              </Badge>
            </div>
            <CardTitle className="text-lg">
              {exam.paperName}
            </CardTitle>
            <CardDescription className="mt-1">
              Explorations in {isLanguage ? (exam.paperNumber === 1 ? 'Creative Reading and Writing' : "Writers' Viewpoints and Perspectives") : (exam.paperNumber === 1 ? 'Shakespeare and the 19th-Century Novel' : 'Modern Texts and Poetry')}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Key stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Timer className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="text-sm font-semibold text-foreground">{exam.timeAllowed}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Award className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Marks</p>
              <p className="text-sm font-semibold text-foreground">{exam.totalMarks}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Hash className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Questions</p>
              <p className="text-sm font-semibold text-foreground">{exam.questionCount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Layers className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Sections</p>
              <p className="text-sm font-semibold text-foreground">{isLanguage ? '2 (Reading + Writing)' : exam.questionCount}</p>
            </div>
          </div>
        </div>

        {/* Past performance */}
        <div className="mt-4">
          <PastPerformance grade={exam.pastGrade} />
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 mt-4 transition-colors"
        >
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {showDetails ? 'Hide details' : 'View question breakdown & grade boundaries'}
        </button>

        {showDetails && (
          <div className="mt-4 space-y-5 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            {/* Question breakdown */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Question Breakdown
              </h4>
              <QuestionBreakdown questions={exam.questions} />
            </div>

            <Separator />

            {/* Grade boundaries */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Grade Boundaries ({exam.examBoard})
              </h4>
              <GradeBoundariesTable boundaries={exam.gradeBoundaries} totalMarks={exam.totalMarks} />
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <Info className="h-3 w-3" />
                Based on recent {exam.examBoard} grade boundaries. Boundaries vary each year.
              </p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs text-muted-foreground">
          {exam.examBoard} GCSE English {exam.paperType === 'language' ? 'Language' : 'Literature'} &middot; Paper {exam.paperNumber}
        </p>
        <Button size="default" render={<Link href={`/mock-exams/${exam.paperId}`} />}>
          <Play className="h-4 w-4 mr-1.5" />
          Start Exam
        </Button>
      </CardFooter>
    </Card>
  )
}

// ─── How Mock Exams Help Section ─────────────────────────────────────────────

function HowMockExamsWork() {
  const steps = [
    {
      icon: Target,
      title: 'Simulate real exam conditions',
      description: 'Each mock mirrors the exact format, timing, and mark allocation of the real GCSE exam. You will face the same question types and time pressure.',
    },
    {
      icon: Clock,
      title: 'Build time management skills',
      description: 'Learn to allocate your time effectively across sections. Language Paper 1 gives you 1 hour 45 minutes for 5 questions -- knowing when to move on is crucial.',
    },
    {
      icon: BarChart3,
      title: 'Track your progress in grades 1--9',
      description: 'After each attempt, see your estimated GCSE grade based on real exam board grade boundaries. Watch your grade improve with each attempt.',
    },
    {
      icon: BookOpen,
      title: 'Learn from model answers',
      description: 'Every question includes model answers at Grade 4-5, Grade 6-7, and Grade 8-9 so you can see exactly what examiners are looking for at each level.',
    },
    {
      icon: CheckCircle2,
      title: 'Identify your weak areas',
      description: 'Detailed mark breakdowns show whether you need to improve your reading analysis, creative writing, or essay technique.',
    },
    {
      icon: Sparkles,
      title: 'Get AI-powered feedback',
      description: 'Submit your written responses for instant AI feedback that grades your work and provides specific, actionable improvements.',
    },
  ]

  return (
    <section className="border-t border-border bg-card/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/[0.06] text-primary text-sm gap-2 px-3 py-1">
            <HelpCircle className="w-3.5 h-3.5" />
            How It Works
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            How Mock Exams Help You Succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practising under real exam conditions is the single most effective way to improve your GCSE English grade.
            Our mocks replicate the exact format used by AQA, Edexcel, OCR, and WJEC.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-border/40">
              <CardContent className="pt-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

// Map a user's selected ExamBoard ID to the legacy `examBoard` strings used in
// the static EXAM_CARDS list ("AQA", "Edexcel", "OCR", "WJEC", "CAIE").
const BOARD_ID_TO_LEGACY: Record<ExamBoard, string[]> = {
  'aqa': ['AQA'],
  'edexcel': ['Edexcel'],
  'ocr': ['OCR'],
  'eduqas': ['WJEC', 'Eduqas'],
  'edexcel-igcse': ['Edexcel IGCSE', 'IGCSE'],
  'cambridge-0500': ['CAIE', 'Cambridge', 'Cambridge 0500'],
  'cambridge-0990': ['CAIE', 'Cambridge', 'Cambridge 0990'],
}

export default function MockExamsPage() {
  const allBoards = useMemo(() => getAvailableBoards(), [])
  const { board: userBoard, isHydrated: isBoardHydrated } = useBoard()
  const boardConfig = getBoardConfig(userBoard)

  const totalPapers = useMemo(
    () => allBoards.reduce((sum, b) => sum + getMockExamsByBoard(b).length, 0),
    [allBoards]
  )

  // Restrict the visible exam cards to the user's chosen board.
  // If the board cookie hasn't hydrated yet, show all cards (avoids flash of empty).
  const boardScopedExams = useMemo(() => {
    if (!isBoardHydrated || !userBoard) return EXAM_CARDS
    const legacy = BOARD_ID_TO_LEGACY[userBoard] ?? []
    return EXAM_CARDS.filter((e) =>
      legacy.some((name) => e.examBoard.toLowerCase() === name.toLowerCase())
    )
  }, [userBoard, isBoardHydrated])

  // Filter exam cards based on active tab
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredExams = useMemo(() => {
    if (activeTab === 'all') return boardScopedExams
    if (activeTab === 'language') return boardScopedExams.filter((e) => e.paperType === 'language')
    if (activeTab === 'literature') return boardScopedExams.filter((e) => e.paperType === 'literature')
    return boardScopedExams
  }, [activeTab, boardScopedExams])

  const showComingSoon = isBoardHydrated && !!userBoard && boardScopedExams.length === 0

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-violet-500/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5">
            <GraduationCap className="w-4 h-4" /> {boardConfig ? `${boardConfig.name} Mock Exams` : 'GCSE Mock Exams'}
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
            {boardConfig ? `${boardConfig.name} English Mock Exams` : 'GCSE English Mock Exams'}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Full-length, timed mock exams matching the exact {boardConfig?.name ?? 'AQA'} format. Language Paper 1 and 2, Literature Paper 1 and 2 -- complete with grade boundaries, model answers, and mark schemes.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-primary" /> 4 exam papers
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> Timed conditions
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4 text-primary" /> Grades 1-9
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary" /> AI feedback
            </span>
          </div>

          <div className="flex gap-3 justify-center">
            <Button size="lg" className="shadow-lg shadow-primary/20" render={<a href="#exams" />}>
              View Exam Papers <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" render={<a href="#how-it-works" />}>
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Exam Papers */}
      <section id="exams" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {boardConfig ? `${boardConfig.name} Exam Papers` : 'Exam Papers'}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Choose a paper to start. Each mock follows the exact{' '}
            {boardConfig?.name ?? 'GCSE'} specification with realistic questions,
            proper timing, and accurate grade boundaries.
          </p>
        </div>

        {/* Filter tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList variant="line">
            <TabsTrigger value="all">All Papers</TabsTrigger>
            <TabsTrigger value="language">Language</TabsTrigger>
            <TabsTrigger value="literature">Literature</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Exam cards grid */}
        {showComingSoon ? (
          <div className="rounded-2xl border border-border/40 bg-card/30 p-10 text-center">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary/80" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              {boardConfig?.name ?? 'Your board'} mock exams — coming soon
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-5">
              We&apos;re building a full set of timed mock papers for{' '}
              {boardConfig?.fullName ?? 'your selected board'}. In the meantime, you can
              still use our flashcards, model answers, and revision notes.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button variant="secondary" render={<Link href="/revision" />}>Go to Revision Hub</Button>
              <Button variant="outline" render={<Link href="/board-select" />}>Change exam board</Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredExams.map((exam) => (
              <ExamPaperCard key={exam.id} exam={exam} />
            ))}
          </div>
        )}

        {/* Additional boards note */}
        {totalPapers > 4 && (
          <div className="mt-10 rounded-xl border border-border/40 bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              We also have {totalPapers - 4}+ additional mock papers across {allBoards.length} exam boards including Edexcel, OCR, WJEC, and CAIE.
            </p>
            <Button variant="secondary" render={<Link href="/auth/register" />}>
              Sign Up for Full Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>

      {/* Grade Boundaries Overview */}
      <section className="border-t border-border/40 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Understanding GCSE Grades 1-9
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GCSE English is graded on a 1-9 scale, where 9 is the highest grade. A grade 4 is a
              standard pass and a grade 5 is a strong pass. Here is how the grades map to the old letter system.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
              {[
                { grade: 9, label: 'A**', colour: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' },
                { grade: 8, label: 'A*', colour: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' },
                { grade: 7, label: 'A', colour: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' },
                { grade: 6, label: 'B+', colour: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300' },
                { grade: 5, label: 'B/C', colour: 'bg-amber-500/15 border-amber-500/30 text-amber-300' },
                { grade: 4, label: 'C', colour: 'bg-amber-500/15 border-amber-500/30 text-amber-300' },
                { grade: 3, label: 'D', colour: 'bg-orange-500/15 border-orange-500/30 text-orange-300' },
                { grade: 2, label: 'E/F', colour: 'bg-red-500/15 border-red-500/30 text-red-300' },
                { grade: 1, label: 'G', colour: 'bg-red-500/15 border-red-500/30 text-red-300' },
              ].map(({ grade, label, colour }) => (
                <div key={grade} className={cn('rounded-xl border p-3 text-center', colour)}>
                  <div className="text-2xl font-bold">{grade}</div>
                  <div className="text-[10px] mt-1 opacity-70">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs text-muted-foreground px-2">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-amber-400" /> Grade 4 = Standard pass</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-400" /> Grade 5 = Strong pass</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Mock Exams Work */}
      <div id="how-it-works">
        <HowMockExamsWork />
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="relative p-10 sm:p-14 rounded-2xl border border-border/40 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/[0.06] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Ready to Ace Your GCSE English?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of students preparing for their GCSEs. Get access to all mock papers, AI essay feedback, model answers, and detailed grade tracking.
              </p>
              <div className="flex gap-3 justify-center">
                <Button size="lg" className="shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" render={<Link href="/auth/login" />}>
                  Sign In
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                First month free &middot; Cancel anytime &middot; No commitment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
