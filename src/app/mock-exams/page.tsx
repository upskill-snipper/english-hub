'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
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
import { useT } from '@/lib/i18n/use-t'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
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
  color: 'text-muted-foreground',
  bg: 'bg-muted/50',
  gradient: 'from-muted/40 to-muted/10',
  border: 'border-border',
  badge: 'bg-muted/50 text-muted-foreground border-border',
  accent: 'text-muted-foreground',
}

const BOARD_CONFIG: Record<string, typeof DEFAULT_BOARD_CONFIG> = {
  AQA: {
    color: 'text-blue-700 dark:text-blue-300',
    bg: 'bg-blue-500/10',
    gradient: 'from-blue-500/10 to-blue-500/[0.03]',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/10 text-blue-700 border-blue-500/30 dark:text-blue-300',
    accent: 'text-blue-700 dark:text-blue-300',
  },
  Edexcel: {
    color: 'text-purple-700 dark:text-purple-300',
    bg: 'bg-purple-500/10',
    gradient: 'from-purple-500/10 to-purple-500/[0.03]',
    border: 'border-purple-500/30',
    badge: 'bg-purple-500/10 text-purple-700 border-purple-500/30 dark:text-purple-300',
    accent: 'text-purple-700 dark:text-purple-300',
  },
  OCR: {
    color: 'text-orange-700 dark:text-orange-300',
    bg: 'bg-orange-500/10',
    gradient: 'from-orange-500/10 to-orange-500/[0.03]',
    border: 'border-orange-500/30',
    badge: 'bg-orange-500/10 text-orange-700 border-orange-500/30 dark:text-orange-300',
    accent: 'text-orange-700 dark:text-orange-300',
  },
  WJEC: {
    color: 'text-red-700 dark:text-red-300',
    bg: 'bg-red-500/10',
    gradient: 'from-red-500/10 to-red-500/[0.03]',
    border: 'border-red-500/30',
    badge: 'bg-red-500/10 text-red-700 border-red-500/30 dark:text-red-300',
    accent: 'text-red-700 dark:text-red-300',
  },
  CAIE: {
    color: 'text-teal-700 dark:text-teal-300',
    bg: 'bg-teal-500/10',
    gradient: 'from-teal-500/10 to-teal-500/[0.03]',
    border: 'border-teal-500/30',
    badge: 'bg-teal-500/10 text-teal-700 border-teal-500/30 dark:text-teal-300',
    accent: 'text-teal-700 dark:text-teal-300',
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

// IAL uses A*-E grading. We represent A*=9, A=8, B=7, C=6, D=5, E=4 numerically
// so the existing GradeBoundary/display logic works; the paper card's
// examBoard label ("IAL") is enough of a hint that the numbers are letter-
// equivalents. Boundaries below are approximate typical Pearson IAL cut-offs
// (verify against the current live specification before exam entry).
const IAL_LIT_BOUNDARIES_60: GradeBoundary[] = [
  { grade: 9, minMarks: 48 }, // A*
  { grade: 8, minMarks: 42 }, // A
  { grade: 7, minMarks: 36 }, // B
  { grade: 6, minMarks: 30 }, // C
  { grade: 5, minMarks: 24 }, // D
  { grade: 4, minMarks: 18 }, // E
]

const IAL_LIT_BOUNDARIES_40: GradeBoundary[] = [
  { grade: 9, minMarks: 32 }, // A*
  { grade: 8, minMarks: 28 }, // A
  { grade: 7, minMarks: 24 }, // B
  { grade: 6, minMarks: 20 }, // C
  { grade: 5, minMarks: 16 }, // D
  { grade: 4, minMarks: 12 }, // E
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
      {
        number: 2,
        label: 'Language analysis (how does the writer use language...)',
        marks: 8,
        type: 'Language Analysis',
      },
      {
        number: 3,
        label: 'Structure analysis (how does the writer structure...)',
        marks: 8,
        type: 'Structure',
      },
      {
        number: 4,
        label: 'Evaluation (to what extent do you agree...)',
        marks: 20,
        type: 'Evaluation',
      },
      {
        number: 5,
        label: 'Creative writing (description or narrative)',
        marks: 40,
        type: 'Creative Writing',
      },
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
      {
        number: 3,
        label: 'Language analysis (how does the writer use language...)',
        marks: 12,
        type: 'Language Analysis',
      },
      {
        number: 4,
        label: 'Comparison of viewpoints and perspectives',
        marks: 16,
        type: 'Comparison',
      },
      {
        number: 5,
        label: 'Transactional writing (letter, article, speech, leaflet)',
        marks: 40,
        type: 'Transactional Writing',
      },
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
      {
        number: 1,
        label: 'Shakespeare play (extract-based essay + wider play)',
        marks: 34,
        type: 'Extract + Essay',
      },
      {
        number: 2,
        label: '19th-century novel (extract-based essay + wider text)',
        marks: 30,
        type: 'Extract + Essay',
      },
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
      {
        number: 2,
        label: 'Poetry anthology (comparison of two poems)',
        marks: 30,
        type: 'Comparison',
      },
      {
        number: 3,
        label: 'Unseen poetry (analysis + comparison)',
        marks: 32,
        type: 'Analysis + Comparison',
      },
    ],
    gradeBoundaries: AQA_LIT_P2_BOUNDARIES,
    pastGrade: null,
  },
  // ── Pearson Edexcel IAL Literature (WET01-04) ──────────────────────
  // Four mock papers mirroring the real IAL unit structure. Boundary
  // numbers 9/8/7/6/5/4 map to A*/A/B/C/D/E respectively (see
  // IAL_LIT_BOUNDARIES_XX above). The examBoard is "IAL" so the
  // BOARD_ID_TO_LEGACY mapping for 'ial-edexcel' matches them.
  {
    id: 'ial-wet01-full',
    paperName: 'IAL Unit 1 — Poetry and Drama (WET01)',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'IAL',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 60,
    questionCount: 2,
    difficulty: 'Higher',
    paperId: 'ial-wet01-full',
    questions: [
      {
        number: 1,
        label: 'Unseen poem + anthology comparison (AO1/2/4)',
        marks: 30,
        type: 'Comparison',
      },
      { number: 2, label: 'Drama essay (AO1/2/3)', marks: 30, type: 'Extended Response' },
    ],
    gradeBoundaries: IAL_LIT_BOUNDARIES_60,
    pastGrade: null,
  },
  {
    id: 'ial-wet02-full',
    paperName: 'IAL Unit 2 — Prose (WET02)',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'IAL',
    timeAllowed: '1 hour 45 minutes',
    timeMinutes: 105,
    totalMarks: 40,
    questionCount: 1,
    difficulty: 'Higher',
    paperId: 'ial-wet02-full',
    questions: [
      {
        number: 1,
        label: 'Comparative prose essay — pre-1900 + post-1900 (AO1/2/3/4)',
        marks: 40,
        type: 'Comparative Analysis',
      },
    ],
    gradeBoundaries: IAL_LIT_BOUNDARIES_40,
    pastGrade: null,
  },
  {
    id: 'ial-wet03-full',
    paperName: 'IAL Unit 3 — Poetry and Prose, A2 (WET03)',
    paperType: 'literature',
    paperNumber: 1,
    examBoard: 'IAL',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 60,
    questionCount: 2,
    difficulty: 'Higher',
    paperId: 'ial-wet03-full',
    questions: [
      {
        number: 1,
        label: 'Unseen pre-1900 poem + anthology comparison (AO1/2/3/4)',
        marks: 30,
        type: 'Comparison',
      },
      {
        number: 2,
        label: 'Prose essay with AO5 critical perspective',
        marks: 30,
        type: 'Extended Response',
      },
    ],
    gradeBoundaries: IAL_LIT_BOUNDARIES_60,
    pastGrade: null,
  },
  {
    id: 'ial-wet04-full',
    paperName: 'IAL Unit 4 — Shakespeare + Pre-1900 Drama (WET04)',
    paperType: 'literature',
    paperNumber: 2,
    examBoard: 'IAL',
    timeAllowed: '2 hours 15 minutes',
    timeMinutes: 135,
    totalMarks: 60,
    questionCount: 2,
    difficulty: 'Higher',
    paperId: 'ial-wet04-full',
    questions: [
      {
        number: 1,
        label: 'Shakespeare essay with AO5 (AO1/2/3/5)',
        marks: 30,
        type: 'Extended Response',
      },
      {
        number: 2,
        label: 'Pre-1900 drama essay with AO5 (AO1/2/3/5)',
        marks: 30,
        type: 'Extended Response',
      },
    ],
    gradeBoundaries: IAL_LIT_BOUNDARIES_60,
    pastGrade: null,
  },
]

// ─── Utility ─────────────────────────────────────────────────────────────────

function getDifficultyBadge(difficulty: string) {
  switch (difficulty) {
    case 'Foundation':
      return 'bg-green-500/10 text-green-700 border-green-500/30 dark:text-green-300'
    case 'Intermediate':
      return 'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:text-amber-300'
    case 'Higher':
      return 'bg-red-500/10 text-red-700 border-red-500/30 dark:text-red-300'
    default:
      return 'bg-muted text-muted-foreground border-border'
  }
}

function getGradeColor(grade: number) {
  if (grade >= 7) return 'text-teal-700 dark:text-teal-300'
  if (grade >= 5) return 'text-amber-700 dark:text-amber-300'
  return 'text-red-700 dark:text-red-300'
}

function getGradeBg(grade: number) {
  if (grade >= 7) return 'bg-teal-500/10 border-teal-500/30'
  if (grade >= 5) return 'bg-amber-500/10 border-amber-500/30'
  return 'bg-red-500/10 border-red-500/30'
}

// ─── Grade Boundaries Component ──────────────────────────────────────────────

function GradeBoundariesTable({
  boundaries,
  totalMarks,
}: {
  boundaries: GradeBoundary[]
  totalMarks: number
}) {
  return (
    <div className="grid grid-cols-9 gap-1">
      {boundaries.map(({ grade, minMarks }) => (
        <div
          key={grade}
          className={cn(
            'rounded-lg p-2 text-center border',
            grade >= 7
              ? 'bg-teal-500/10 border-teal-500/30'
              : grade >= 5
                ? 'bg-amber-500/10 border-amber-500/30'
                : 'bg-muted border-border',
          )}
        >
          <div className={cn('text-sm font-bold', getGradeColor(grade))}>{grade}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">
            {minMarks}/{totalMarks}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Question List Component ─────────────────────────────────────────────────

function QuestionBreakdown({ questions }: { questions: QuestionSummary[] }) {
  const t = useT()
  return (
    <div className="space-y-2">
      {questions.map((q) => (
        <div key={q.number} className="flex items-center gap-3 text-sm">
          <span className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">
            {q.number}
          </span>
          <span className="text-foreground/80 flex-1 min-w-0">{q.label}</span>
          <Badge variant="outline" className="text-xs shrink-0">
            {q.marks} {q.marks === 1 ? t('marking.mark_singular') : t('marking.mark_plural')}
          </Badge>
        </div>
      ))}
    </div>
  )
}

// ─── Past Performance Component ──────────────────────────────────────────────

function PastPerformance({ grade }: { grade: number | null | undefined }) {
  const t = useT()
  if (grade == null) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <BarChart3 className="h-4 w-4" />
        <span>{t('mock.no_attempts')}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <TrendingUp className="h-4 w-4" />
        <span>{t('mock.best_grade')}</span>
      </div>
      <div
        className={cn(
          'flex items-center justify-center h-8 w-8 rounded-lg border font-bold text-sm',
          getGradeBg(grade),
          getGradeColor(grade),
        )}
      >
        {grade}
      </div>
    </div>
  )
}

// ─── Exam Paper Card ─────────────────────────────────────────────────────────

function ExamPaperCard({ exam }: { exam: ExamCardData }) {
  const t = useT()
  const [showDetails, setShowDetails] = useState(false)
  const config = BOARD_CONFIG[exam.examBoard] ?? DEFAULT_BOARD_CONFIG
  const isLanguage = exam.paperType === 'language'

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-border">
      {/* Header gradient strip */}
      <div
        className={cn(
          'h-1.5',
          isLanguage
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
            : 'bg-gradient-to-r from-teal-600 to-clay-500',
        )}
      />

      <CardHeader className="pb-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge className={cn(config.badge, 'text-xs')}>{exam.examBoard}</Badge>
              <Badge className={cn(getDifficultyBadge(exam.difficulty), 'text-xs border')}>
                {exam.difficulty}
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  'text-xs',
                  isLanguage
                    ? 'border-cyan-500/30 text-cyan-700 dark:text-cyan-300'
                    : 'border-pink-500/30 text-pink-700 dark:text-pink-300',
                )}
              >
                {isLanguage ? t('mock.language') : t('mock.literature')}
              </Badge>
            </div>
            <CardTitle className="text-lg">{exam.paperName}</CardTitle>
            <CardDescription className="mt-1">
              {t('mock.explorations_in')}{' '}
              {isLanguage
                ? exam.paperNumber === 1
                  ? t('mock.theme_creative_reading')
                  : t('mock.theme_writers_views')
                : exam.paperNumber === 1
                  ? t('mock.theme_shakespeare_19c')
                  : t('mock.theme_modern_poetry')}
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
              <p className="text-xs text-muted-foreground">{t('mock.time')}</p>
              <p className="text-sm font-semibold text-foreground">{exam.timeAllowed}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Award className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('mock.marks')}</p>
              <p className="text-sm font-semibold text-foreground">{exam.totalMarks}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Hash className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('mock.questions')}</p>
              <p className="text-sm font-semibold text-foreground">{exam.questionCount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
            <Layers className="h-4 w-4 text-muted-foreground shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('mock.sections')}</p>
              <p className="text-sm font-semibold text-foreground">
                {isLanguage ? t('mock.sections_reading_writing') : exam.questionCount}
              </p>
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
          {showDetails ? t('mock.hide_details') : t('mock.view_details')}
        </button>

        {showDetails && (
          <div className="mt-4 space-y-5 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            {/* Question breakdown */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                {t('mock.question_breakdown')}
              </h4>
              <QuestionBreakdown questions={exam.questions} />
            </div>

            <Separator />

            {/* Grade boundaries */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                {t('mock.grade_boundaries')} ({exam.examBoard})
              </h4>
              <GradeBoundariesTable
                boundaries={exam.gradeBoundaries}
                totalMarks={exam.totalMarks}
              />
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <Info className="h-3 w-3" />
                {t('mock.boundaries_note_prefix')} {exam.examBoard}{' '}
                {t('mock.boundaries_note_suffix')}
              </p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs text-muted-foreground">
          {exam.examBoard} {t('mock.gcse_english')}{' '}
          {exam.paperType === 'language' ? t('mock.language') : t('mock.literature')} &middot;{' '}
          {t('mock.paper')} {exam.paperNumber}
        </p>
        <Button size="default" render={<Link href={`/mock-exams/${exam.paperId}`} />}>
          <Play className="h-4 w-4 mr-1.5" />
          {t('mock.start_exam')}
        </Button>
      </CardFooter>
    </Card>
  )
}

// ─── How Mock Exams Help Section ─────────────────────────────────────────────

function HowMockExamsWork() {
  const t = useT()
  const steps = [
    {
      icon: Target,
      title: t('mock.step_simulate_title'),
      description: t('mock.step_simulate_desc'),
    },
    {
      icon: Clock,
      title: t('mock.step_time_title'),
      description: t('mock.step_time_desc'),
    },
    {
      icon: BarChart3,
      title: t('mock.step_track_title'),
      description: t('mock.step_track_desc'),
    },
    {
      icon: BookOpen,
      title: t('mock.step_model_title'),
      description: t('mock.step_model_desc'),
    },
    {
      icon: CheckCircle2,
      title: t('mock.step_weak_title'),
      description: t('mock.step_weak_desc'),
    },
    {
      icon: Sparkles,
      title: t('mock.step_ai_title'),
      description: t('mock.step_ai_desc'),
    },
  ]

  return (
    <section className="border-t border-border bg-card/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/[0.06] text-primary text-sm gap-2 px-3 py-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            {t('mock.how_it_works')}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {t('mock.how_mocks_help')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('mock.how_mocks_help_desc')}</p>
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
  ks3: ['KS3'],
  aqa: ['AQA'],
  edexcel: ['Edexcel'],
  ocr: ['OCR'],
  eduqas: ['WJEC', 'Eduqas'],
  'edexcel-igcse': ['Edexcel IGCSE', 'IGCSE'],
  'edexcel-igcse-lang': ['Edexcel IGCSE', 'IGCSE'],
  'cambridge-0500': ['CAIE', 'Cambridge', 'Cambridge 0500'],
  'cambridge-0990': ['CAIE', 'Cambridge', 'Cambridge 0990'],
  'cambridge-0475': ['CAIE', 'Cambridge', 'Cambridge 0475'],
  'ial-edexcel': ['Edexcel', 'IAL'],
  // UK A-Level boards — no mock exams authored yet; keep both generic tags
  'aqa-a-level': ['AQA', 'A-Level'],
  'edexcel-a-level': ['Edexcel', 'A-Level'],
  'ocr-a-level': ['OCR', 'A-Level'],
  'eduqas-a-level': ['WJEC', 'Eduqas', 'A-Level'],
}

export default function MockExamsPage() {
  const t = useT()
  const allBoards = useMemo(() => getAvailableBoards(), [])
  const { board: userBoard, isHydrated: isBoardHydrated } = useBoard()
  const searchParams = useSearchParams()

  // URL params take precedence over the cookie-derived board. Lets the
  // IAL hub deep-link into /mock-exams?board=ial-edexcel&unit=WET04
  // without the student having to flip their cookie first.
  const boardParam = searchParams?.get('board')
  const unitParam = searchParams?.get('unit') // e.g. "WET01", "WET04-full"
  const effectiveBoard = (boardParam as ExamBoard | null) ?? userBoard
  const boardConfig = getBoardConfig(effectiveBoard)

  const totalPapers = useMemo(
    () => allBoards.reduce((sum, b) => sum + getMockExamsByBoard(b).length, 0),
    [allBoards],
  )

  // Restrict the visible exam cards to the user's chosen board.
  // If the board cookie hasn't hydrated yet AND no URL param is set, show all.
  const boardScopedExams = useMemo(() => {
    if (!boardParam && (!isBoardHydrated || !userBoard)) return EXAM_CARDS
    const legacy = BOARD_ID_TO_LEGACY[effectiveBoard as ExamBoard] ?? []
    return EXAM_CARDS.filter((e) =>
      legacy.some((name) => e.examBoard.toLowerCase() === name.toLowerCase()),
    )
  }, [effectiveBoard, userBoard, isBoardHydrated, boardParam])

  // Additional unit-level filter — matches paper codes like "WET01" or
  // exam ids containing "WET04-full". Only applies when `?unit=...` is
  // explicitly passed; otherwise every board-scoped paper is shown.
  const unitScopedExams = useMemo(() => {
    if (!unitParam) return boardScopedExams
    const needle = unitParam.toLowerCase()
    return boardScopedExams.filter(
      (e) =>
        e.paperId.toLowerCase().includes(needle) ||
        e.id.toLowerCase().includes(needle) ||
        e.paperName.toLowerCase().includes(needle),
    )
  }, [boardScopedExams, unitParam])

  // Filter exam cards based on active tab
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredExams = useMemo(() => {
    if (activeTab === 'all') return unitScopedExams
    if (activeTab === 'language') return unitScopedExams.filter((e) => e.paperType === 'language')
    if (activeTab === 'literature')
      return unitScopedExams.filter((e) => e.paperType === 'literature')
    return unitScopedExams
  }, [activeTab, unitScopedExams])

  const showComingSoon =
    (isBoardHydrated || !!boardParam) && !!effectiveBoard && unitScopedExams.length === 0

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-clay-500/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <GraduationCap className="w-4 h-4" />{' '}
            {boardConfig
              ? `${boardConfig.name} ${t('mock.mock_exams')}`
              : t('mock.gcse_mock_exams')}
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
            {t('mock.hero_headline')}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('mock.hero_subhead')}
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-primary" /> {t('mock.stat_papers')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> {t('mock.stat_timed')}
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4 text-primary" /> {t('mock.stat_grades')}
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary" /> {t('mock.stat_ai_feedback')}
            </span>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Button size="lg" className="shadow-lg shadow-primary/20" render={<a href="#exams" />}>
              {t('mock.view_papers')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* Sample-paper PDF coming soon — see public/sample-papers/ */}
            <Button
              variant="outline"
              size="lg"
              disabled
              aria-disabled="true"
              title={t('mock.sample_coming_soon')}
            >
              {t('mock.sample_coming_soon')}
            </Button>
            <Button variant="secondary" size="lg" render={<a href="#how-it-works" />}>
              {t('mock.how_it_works')}
            </Button>
          </div>
        </div>
      </section>

      {/* Exam Papers */}
      <section id="exams" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {boardConfig ? `${boardConfig.name} ${t('mock.exam_papers')}` : t('mock.exam_papers')}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t('mock.choose_paper_prefix')} {boardConfig?.name ?? 'GCSE'}{' '}
            {t('mock.choose_paper_suffix')}
          </p>
        </div>

        {/* Filter tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList variant="line">
            <TabsTrigger value="all">{t('mock.tab_all')}</TabsTrigger>
            <TabsTrigger value="language">{t('mock.language')}</TabsTrigger>
            <TabsTrigger value="literature">{t('mock.literature')}</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Exam cards grid */}
        {showComingSoon ? (
          <div className="rounded-2xl border border-border/40 bg-card/30 p-10 text-center">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary/80" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              {boardConfig?.name ?? t('mock.your_board')} {t('mock.coming_soon_title')}
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-5">
              {t('mock.coming_soon_prefix')}{' '}
              {boardConfig?.fullName ?? t('mock.your_selected_board')}.{' '}
              {t('mock.coming_soon_suffix')}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button variant="secondary" render={<Link href="/revision" />}>
                {t('mock.go_to_revision')}
              </Button>
              <Button variant="outline" render={<Link href="/board-select" />}>
                {t('board.change_exam_board')}
              </Button>
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
              {t('mock.more_papers_prefix')} {totalPapers - 4}+ {t('mock.more_papers_middle')}{' '}
              {allBoards.length} {t('mock.more_papers_suffix')}
            </p>
            <Button variant="secondary" render={<Link href="/auth/register" />}>
              {t('mock.signup_full_access')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>

      {/* Grade Boundaries Overview */}
      <section className="border-t border-border/40 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {t('mock.understanding_grades')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('mock.understanding_grades_desc')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
              {[
                {
                  grade: 9,
                  label: 'A**',
                  colour: 'bg-teal-500/10 border-teal-500/30 text-teal-700 dark:text-teal-300',
                },
                {
                  grade: 8,
                  label: 'A*',
                  colour: 'bg-teal-500/10 border-teal-500/30 text-teal-700 dark:text-teal-300',
                },
                {
                  grade: 7,
                  label: 'A',
                  colour: 'bg-teal-500/10 border-teal-500/30 text-teal-700 dark:text-teal-300',
                },
                {
                  grade: 6,
                  label: 'B+',
                  colour: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300',
                },
                {
                  grade: 5,
                  label: 'B/C',
                  colour: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
                },
                {
                  grade: 4,
                  label: 'C',
                  colour: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
                },
                {
                  grade: 3,
                  label: 'D',
                  colour:
                    'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300',
                },
                {
                  grade: 2,
                  label: 'E/F',
                  colour: 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300',
                },
                {
                  grade: 1,
                  label: 'G',
                  colour: 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300',
                },
              ].map(({ grade, label, colour }) => (
                <div key={grade} className={cn('rounded-xl border p-3 text-center', colour)}>
                  <div className="text-2xl font-bold">{grade}</div>
                  <div className="text-[10px] mt-1 opacity-70">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs text-muted-foreground px-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-amber-600 dark:text-amber-300" />{' '}
                {t('mock.standard_pass')}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-teal-700 dark:text-teal-300" />{' '}
                {t('mock.strong_pass')}
              </span>
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
              <h2 className="text-3xl font-bold text-foreground mb-3">{t('mock.cta_headline')}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('mock.cta_body')}</p>
              <div className="flex gap-3 justify-center">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20"
                  render={<Link href="/auth/register" />}
                >
                  {t('mock.start_trial')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" size="lg" render={<Link href="/auth/login" />}>
                  {t('mock.sign_in')}
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{t('mock.trial_terms')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
