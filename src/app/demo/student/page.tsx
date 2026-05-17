'use client'

import { useState } from 'react'
import { useT } from '@/lib/i18n/use-t'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  Trophy,
  RotateCcw,
  ChevronDown,
  FileText,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Target,
  ArrowRight,
  Flame,
  Award,
  Zap,
  ThumbsUp,
  AlertTriangle,
  Lightbulb,
  Play,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from '@/lib/grades'
import GradeProgressCard from '@/components/GradeProgressCard'
import GradeRecommendations from '@/components/GradeRecommendations'
import ReadingProfileCard from '@/components/ReadingProfileCard'
import { GlassPanel, PanelEyebrow, KpiTile, RadialScore, RankBars } from '@/components/dataviz'

// ---------------------------------------------------------------------------
// Demo data -- Aisha Rahman's student perspective
// ---------------------------------------------------------------------------

const STUDENT = {
  name: 'Aisha',
  yearGroup: 'Year 11',
  school: 'Riverside Academy',
  overallProgress: 65,
  streak: 7,
  quizzesCompleted: 12,
  essaysSubmitted: 5,
  averageScore: 74,
  targetGrade: '7',
  predictedGrade: '6',
  totalAssignments: 20,
  assignmentsDone: 14,
}

const COURSES = [
  {
    id: 'igcse-lang-p1',
    title: 'GCSE English Literature',
    board: 'AQA',
    progress: 68,
    nextLesson: 'Macbeth Act 3 Analysis',
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/15',
    accent: 'text-primary',
  },
  {
    id: 'igcse-lang-p2',
    title: 'GCSE English Language',
    board: 'AQA',
    progress: 54,
    nextLesson: 'Paper 2 Q5: Writing to Argue',
    color: 'from-primary/20 to-primary/5',
    border: 'border-blue-500/15',
    accent: 'text-primary',
  },
  {
    id: 'creative-writing',
    title: 'Creative Writing Workshop',
    board: 'Enrichment',
    progress: 82,
    nextLesson: 'Crafting Dialogue',
    color: 'from-clay-500/20 to-clay-400/5',
    border: 'border-purple-500/15',
    accent: 'text-clay-600',
  },
]

const ASSIGNMENTS = [
  {
    id: 1,
    title: 'Macbeth Essay: How does Shakespeare present ambition?',
    course: 'GCSE English Literature',
    dueDate: 'Mon 7 Apr',
    type: 'essay' as const,
  },
  {
    id: 2,
    title: 'Paper 1 Practice -- Reading Comprehension',
    course: 'GCSE English Language',
    dueDate: 'Wed 9 Apr',
    type: 'homework' as const,
  },
  {
    id: 3,
    title: 'Poetry Anthology: Ozymandias Quiz',
    course: 'GCSE English Literature',
    dueDate: 'Fri 11 Apr',
    type: 'quiz' as const,
  },
]

const RECENT_SCORES = [
  { id: 1, title: 'An Inspector Calls Quiz', score: 8, maxScore: 10, type: 'quiz', date: '28 Mar' },
  { id: 2, title: 'Language Paper 2 Mock', score: 31, maxScore: 40, type: 'exam', date: '25 Mar' },
  { id: 3, title: 'Macbeth Act 1 Essay', score: 22, maxScore: 30, type: 'essay', date: '20 Mar' },
  { id: 4, title: 'Unseen Poetry Practice', score: 14, maxScore: 20, type: 'quiz', date: '17 Mar' },
  {
    id: 5,
    title: 'Creative Writing: Narrative Voice',
    score: 27,
    maxScore: 30,
    type: 'essay',
    date: '12 Mar',
  },
]

const STRENGTHS = [
  { topic: 'Creative Writing', score: 90, detail: 'Strong narrative voice and imagery' },
  { topic: 'Inspector Calls', score: 85, detail: 'Excellent character analysis' },
  { topic: 'Reading Comprehension', score: 80, detail: 'Good inference skills' },
  { topic: 'Language Analysis', score: 78, detail: 'Solid PEE paragraphs' },
]

const AREAS_TO_IMPROVE = [
  {
    topic: 'Unseen Poetry',
    score: 55,
    suggestion: 'Practise annotating unseen poems under timed conditions',
  },
  {
    topic: 'Exam Technique',
    score: 48,
    suggestion: 'Focus on timing -- try the Timed Reading module',
  },
  {
    topic: 'Comparison Essays',
    score: 52,
    suggestion: "Use comparative connectives: 'whereas', 'in contrast'",
  },
]

const RECOMMENDED_NEXT = [
  {
    title: 'Unseen Poetry: Step-by-Step',
    course: 'GCSE English Literature',
    reason: 'Your weakest area -- targeted practice will boost your grade',
    priority: 'high' as const,
    courseId: 'igcse-lit-poetry',
    icon: Target,
  },
  {
    title: 'Exam Technique Masterclass',
    course: 'Exam Skills',
    reason: 'Improve time management for Paper 1 and Paper 2',
    priority: 'high' as const,
    courseId: 'exam-technique',
    icon: Clock,
  },
  {
    title: 'Macbeth Act 3 Analysis',
    course: 'GCSE English Literature',
    reason: 'Continue your Literature course -- next lesson ready',
    priority: 'medium' as const,
    courseId: 'igcse-lang-p1',
    icon: BookOpen,
  },
]

const FLASHCARDS = [
  {
    front: 'Pathetic Fallacy',
    back: 'When the weather or environment reflects the mood or emotions of the characters.',
  },
  {
    front: 'Dramatic Irony',
    back: 'When the audience knows something that the characters do not.',
  },
  {
    front: 'Soliloquy',
    back: 'A speech in a play where a character speaks their thoughts aloud, alone on stage.',
  },
  {
    front: 'Foreshadowing',
    back: 'A literary device where the author hints at events that will occur later in the story.',
  },
  {
    front: 'Juxtaposition',
    back: 'Placing two contrasting things close together to highlight their differences.',
  },
]

// ---------------------------------------------------------------------------
// Flashcard Widget
// ---------------------------------------------------------------------------

function FlashcardWidget() {
  const t = useT()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = FLASHCARDS[index]

  function handleNext() {
    setFlipped(false)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % FLASHCARDS.length)
    }, 150)
  }

  return (
    <div className="space-y-4">
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative cursor-pointer select-none"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-44 transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className="absolute inset-0 rounded-xl border border-border/60 bg-gradient-to-br from-violet-500/10 to-clay-400/10 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-xs text-muted-foreground mb-3">
              {t('demo.b15.student.tap_to_reveal')}
            </p>
            <p className="text-lg font-medium text-foreground text-center">{card.front}</p>
            <p className="text-xs text-muted-foreground mt-4">
              {index + 1} / {FLASHCARDS.length}
            </p>
          </div>
          <div
            className="absolute inset-0 rounded-xl border border-primary/20 bg-gradient-to-br from-violet-500/15 to-clay-400/15 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-xs text-primary/70 mb-3">{t('demo.b15.student.definition')}</p>
            <p className="text-sm text-foreground text-center leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          {t('demo.b15.student.next_card')}
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function StudentDemoPage() {
  const t = useT()
  const [flashcardsOpen, setFlashcardsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
          <p className="text-sm text-primary">
            <span className="font-semibold">{t('demo.b15.student.banner')}</span> --{' '}
            {t('demo.b15.student.banner_sub')}
          </p>
        </div>

        {/* ── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="mb-10">
          <GlassPanel accent="primary" className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left: Welcome text */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-2">
                  {t('demo.b15.student.welcome')} {STUDENT.name}
                </h1>
                <p className="text-muted-foreground text-sm mb-5">
                  {STUDENT.yearGroup} &middot; {STUDENT.school}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {/* Working At Grade */}
                  <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-blue-500/5 px-3 py-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {t('demo.b15.student.working_at')}{' '}
                      <span
                        className={`font-semibold ${gcseGradeColor(percentageToGCSEGrade(STUDENT.averageScore))}`}
                      >
                        Grade {percentageToGCSEGrade(STUDENT.averageScore)}
                      </span>
                    </span>
                  </div>
                  {/* Predicted grade */}
                  <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
                    <Award className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                    <span className="text-sm text-muted-foreground">
                      {t('demo.b15.student.predicted')}{' '}
                      <span className="font-semibold text-amber-700 dark:text-amber-300">
                        Grade {STUDENT.predictedGrade}
                      </span>
                    </span>
                  </div>
                  {/* Target grade */}
                  <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {t('demo.b15.student.target')}{' '}
                      <span className="font-semibold text-primary">
                        Grade {STUDENT.targetGrade}
                      </span>
                    </span>
                  </div>
                  {/* Streak badge */}
                  <div className="flex items-center gap-2 rounded-lg border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-3 py-2">
                    <Flame className="h-4 w-4 text-orange-700 dark:text-orange-300" />
                    <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                      {STUDENT.streak} {t('demo.b15.student.day_streak')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Progress ring */}
              <div className="flex flex-shrink-0 flex-col items-center gap-2">
                <RadialScore value={STUDENT.overallProgress} size={200} />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t('demo.b15.student.overall_progress')}
                </span>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* ── QUICK STATS ROW ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Average Grade */}
            <KpiTile
              label={t('demo.b15.student.avg_grade')}
              value={percentageToGCSEGrade(STUDENT.averageScore)}
              prefix="Grade "
              icon={TrendingUp}
              accent="primary"
            />

            {/* Assignments Done */}
            <KpiTile
              label={t('demo.b15.student.completed')}
              value={STUDENT.assignmentsDone}
              suffix={`/${STUDENT.totalAssignments}`}
              icon={CheckCircle}
              accent="teal"
            />

            {/* Study Streak */}
            <KpiTile
              label={t('demo.b15.student.streak')}
              value={STUDENT.streak}
              suffix={` ${t('demo.b15.student.days_suffix')}`}
              icon={Flame}
              accent="ochre"
            />

            {/* Next Goal */}
            <GlassPanel accent="clay" className="p-5">
              <div className="flex items-start justify-between gap-3">
                <PanelEyebrow>{t('demo.b15.student.next_goal')}</PanelEyebrow>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                  <Star className="h-4 w-4 text-muted-foreground" aria-hidden />
                </span>
              </div>
              <p className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground">
                Grade {STUDENT.targetGrade}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">
                {Number(STUDENT.targetGrade) - Number(STUDENT.predictedGrade)}{' '}
                {Number(STUDENT.targetGrade) - Number(STUDENT.predictedGrade) !== 1
                  ? t('demo.b15.student.grades_to_go_plural')
                  : t('demo.b15.student.grades_to_go')}
              </p>
              <div className="mt-2">
                <Link
                  href="/demo/student/progress"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  {t('demo.b15.student.view_progress')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </GlassPanel>
          </div>
        </section>

        {/* ── STRENGTHS & IMPROVEMENTS (side by side) ───────────────────── */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Strengths */}
            <GlassPanel accent="sage" className="p-6">
              <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-primary" />
                {t('demo.b15.student.your_strengths')}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {STRENGTHS.map((s) => (
                  <span
                    key={s.topic}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {s.topic}
                    <span className="text-primary/60">G{percentageToGCSEGrade(s.score)}</span>
                  </span>
                ))}
              </div>
              <RankBars
                data={STRENGTHS.map((s) => ({ topic: s.topic, score: s.score }))}
                labelKey="topic"
                valueKey="score"
                height={Math.max(180, STRENGTHS.length * 40)}
                suffix="%"
              />
              <ul className="sr-only">
                {STRENGTHS.map((s) => (
                  <li key={s.topic}>
                    {s.topic}: {s.score}% (Grade {percentageToGCSEGrade(s.score)}) — {s.detail}
                  </li>
                ))}
              </ul>
            </GlassPanel>

            {/* Areas to Improve */}
            <GlassPanel accent="ochre" className="p-6">
              <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                {t('demo.b15.student.areas_improve')}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {AREAS_TO_IMPROVE.map((a) => (
                  <span
                    key={a.topic}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
                      a.score < 50
                        ? 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300'
                    }`}
                  >
                    <AlertTriangle className="h-3 w-3" />
                    {a.topic}
                    <span className="opacity-60">G{percentageToGCSEGrade(a.score)}</span>
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {AREAS_TO_IMPROVE.map((a) => (
                  <div key={a.topic} className="rounded-lg border border-border/60 bg-card/60 p-3">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <span className="font-medium text-sm text-foreground">{a.topic}</span>
                      <span
                        className={`tabular-nums text-xs shrink-0 ${a.score < 50 ? 'text-red-700/80 dark:text-red-300/80' : 'text-amber-700/80 dark:text-amber-300/80'}`}
                      >
                        G{percentageToGCSEGrade(a.score)}
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Lightbulb className="h-3 w-3 text-amber-600/50 dark:text-amber-400/50 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{a.suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </section>

        {/* ── GRADE PROGRESS & RECOMMENDATIONS ─────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            {t('demo.b15.student.next_grade_recs')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Grade Progress Card */}
            <div className="lg:col-span-1">
              <GradeProgressCard
                currentGrade={Number(STUDENT.predictedGrade)}
                predictedGrade={Number(STUDENT.predictedGrade)}
                targetGrade={Number(STUDENT.targetGrade)}
                trend="up"
              />
            </div>
            {/* Recommendations */}
            <div className="lg:col-span-2">
              <GradeRecommendations
                currentGrade={Number(STUDENT.predictedGrade)}
                weakAreas={AREAS_TO_IMPROVE.map((a) => a.topic)}
                maxActions={3}
                showResources={false}
                compact
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="sm"
              render={<Link href="/demo/student/progress" />}
              className="text-primary border-primary/20 hover:bg-primary/10"
            >
              {t('demo.b15.student.view_full_recs')}
              <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </div>
        </section>

        {/* ── READING PROFILE ──────────────────────────────────────────── */}
        <section className="mb-10">
          <ReadingProfileCard
            readingAge={186}
            decodingAge={192}
            fluencyAge={180}
            assessmentDate="2026-02-12"
            yearGroup="Year 11"
            compact
          />
        </section>

        {/* ── MY COURSES (2-col compact grid) ──────────────────────────── */}
        <section id="courses" className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-foreground">
              {t('demo.b15.student.my_courses')}
            </h2>
            <Link
              href="/demo/student/courses"
              className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              {t('demo.b15.student.view_all')} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/demo/student/courses/${course.id}`}
                className={`rounded-xl border ${course.border} bg-gradient-to-br ${course.color} p-5 transition-all hover:scale-[1.01] hover:border-border block`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground mb-0.5">{course.title}</h3>
                    <span className="text-[10px] text-muted-foreground">{course.board}</span>
                  </div>
                  <div className="relative flex-shrink-0 ml-3">
                    <RadialScore value={course.progress} size={56} />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Play className="h-3 w-3 text-muted-foreground/50" />
                  <span className="truncate">
                    <span className="text-muted-foreground">
                      {t('demo.b15.student.next_label')}
                    </span>{' '}
                    {course.nextLesson}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── RECOMMENDED NEXT (prominent CTA cards) ───────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            {t('demo.b15.student.recommended_next')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RECOMMENDED_NEXT.map((r) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className={`group rounded-xl border p-5 transition-all ${
                    r.priority === 'high'
                      ? 'border-primary/20 bg-gradient-to-b from-violet-500/10 to-clay-500/[0.02]'
                      : 'border-border/60 bg-card'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        r.priority === 'high' ? 'bg-primary/15' : 'bg-muted'
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${r.priority === 'high' ? 'text-primary' : 'text-muted-foreground'}`}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-medium uppercase tracking-wider ${
                        r.priority === 'high' ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {r.priority === 'high'
                        ? t('demo.b15.student.priority')
                        : t('demo.b15.student.up_next')}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{r.title}</h3>
                  <p className="text-[11px] text-muted-foreground mb-3">{r.course}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{r.reason}</p>
                  <Button
                    size="sm"
                    className={`w-full ${
                      r.priority === 'high'
                        ? 'bg-primary/20 border-violet-500/30 text-primary hover:bg-primary/30'
                        : 'bg-muted border-border text-muted-foreground hover:bg-muted/80'
                    }`}
                    variant="outline"
                    render={<Link href={`/demo/student/courses/${r.courseId}`} />}
                  >
                    <Play className="h-3.5 w-3.5 mr-1.5" />
                    {t('demo.b15.student.start')}
                  </Button>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── READING ASSESSMENT CTA ───────────────────────────────────── */}
        <section className="mb-10">
          <Link
            href="/assessment/reading"
            className="group block rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/10 via-blue-500/10 to-clay-500/10 p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {t('demo.b15.student.reading_assessment')}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t('demo.b15.student.reading_assessment_sub')}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 shrink-0 hidden sm:block" />
            </div>
          </Link>
        </section>

        {/* ── RECENT RESULTS (clean table with color-coded scores) ──────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">
            {t('demo.b15.student.recent_results')}
          </h2>
          <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                      {t('demo.b15.student.col_assessment')}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                      {t('demo.b15.student.col_type')}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                      {t('demo.b15.student.col_score')}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                      {t('demo.b15.student.col_date')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_SCORES.map((s) => {
                    const pct = Math.round((s.score / s.maxScore) * 100)
                    const scoreColor =
                      pct >= 80
                        ? 'text-primary'
                        : pct >= 60
                          ? 'text-amber-700 dark:text-amber-300'
                          : 'text-red-700 dark:text-red-300'
                    const scoreBg =
                      pct >= 80 ? 'bg-primary/10' : pct >= 60 ? 'bg-amber-500/10' : 'bg-red-500/10'
                    return (
                      <tr
                        key={s.id}
                        className="border-b border-border/60 last:border-0 hover:bg-muted/50"
                      >
                        <td className="px-5 py-3 text-foreground">{s.title}</td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              s.type === 'essay'
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : s.type === 'exam'
                                  ? 'bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/30'
                                  : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                            }`}
                          >
                            {s.type}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${scoreBg} ${scoreColor}`}
                          >
                            {s.score}/{s.maxScore}
                            <span className="opacity-60">({pct}%)</span>
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs text-muted-foreground">{s.date}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── UPCOMING ASSIGNMENTS + FLASHCARDS (side by side) ──────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Upcoming Assignments */}
          <section>
            <h2 className="text-lg font-medium text-foreground mb-4">
              {t('demo.b15.student.upcoming_assignments')}
            </h2>
            <div className="space-y-3">
              {ASSIGNMENTS.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card px-4 py-3 hover:border-border transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      a.type === 'essay'
                        ? 'bg-primary/10'
                        : a.type === 'quiz'
                          ? 'bg-amber-500/10'
                          : 'bg-clay-500/10'
                    }`}
                  >
                    {a.type === 'essay' ? (
                      <FileText className="h-4 w-4 text-primary" />
                    ) : a.type === 'quiz' ? (
                      <Trophy className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                    ) : (
                      <BookOpen className="h-4 w-4 text-clay-600 dark:text-clay-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{a.title}</p>
                    <p className="text-[11px] text-muted-foreground">{a.course}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Clock className="h-3 w-3" />
                    {a.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Flashcard Practice (collapsible) */}
          <section id="flashcards">
            <button
              onClick={() => setFlashcardsOpen(!flashcardsOpen)}
              className="flex items-center gap-2 text-lg font-medium text-foreground mb-4 w-full text-left hover:text-foreground/80 transition-colors"
            >
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${flashcardsOpen ? 'rotate-0' : '-rotate-90'}`}
              />
              {t('demo.b15.student.flashcard_practice')}
              <span className="text-xs text-muted-foreground font-normal ml-1">
                ({FLASHCARDS.length} {t('demo.b15.student.cards_suffix')})
              </span>
            </button>
            {flashcardsOpen ? (
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <p className="text-xs text-muted-foreground mb-4">
                  {t('demo.b15.student.literary_terms')}
                </p>
                <FlashcardWidget />
              </div>
            ) : (
              <div
                onClick={() => setFlashcardsOpen(true)}
                className="rounded-xl border border-dashed border-border/60 bg-card p-6 flex items-center justify-center cursor-pointer hover:border-border transition-colors"
              >
                <p className="text-sm text-muted-foreground">
                  {t('demo.b15.student.click_expand')}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-clay-500/10 p-8 text-center">
            <h2 className="text-xl font-medium text-foreground mb-2">
              {t('demo.b15.student.get_full_access')}
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              {t('demo.b15.student.full_access_sub')}
            </p>
            <Button
              render={<Link href="/auth/register" />}
              className="bg-gradient-to-r from-violet-500 to-clay-400 text-primary-foreground border-0 hover:opacity-90"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {t('demo.b15.student.start_free_trial')}
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
