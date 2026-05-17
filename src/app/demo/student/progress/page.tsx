'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from '@/lib/grades'
import GradeProgressCard from '@/components/GradeProgressCard'
import GradeRecommendations from '@/components/GradeRecommendations'
import ReadingProfileCard from '@/components/ReadingProfileCard'
import {
  GlassPanel,
  PanelEyebrow,
  RadialScore,
  TrendArea,
  RankBars,
  SERIES,
} from '@/components/dataviz'
import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Trophy,
  Flame,
  BookOpen,
  FileText,
  PenTool,
  Target,
  Zap,
  Award,
  Star,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Clock,
  BarChart3,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Demo data -- Aisha Rahman's progress perspective
// ---------------------------------------------------------------------------

const OVERALL_PERCENT = 67

const STUDENT = {
  name: 'Aisha Rahman',
  yearGroup: 'Year 11',
  streak: 7,
  longestStreak: 14,
  totalStudyHours: 48,
  averageScore: 74,
  targetGrade: '7',
  predictedGrade: '6',
  totalQuizzes: 12,
  totalEssays: 5,
  totalMocks: 2,
}

const modules = [
  {
    name: 'GCSE English Literature',
    percent: 68,
    score: 73,
    color: 'green' as const,
    lessons: 15,
    completedLessons: 10,
    topics: [
      { name: 'Macbeth', mastery: 78, status: 'good' as const },
      { name: 'Inspector Calls', mastery: 85, status: 'mastered' as const },
      { name: 'Poetry Anthology', mastery: 55, status: 'developing' as const },
      { name: 'Unseen Poetry', mastery: 48, status: 'weak' as const },
      { name: '19th Century Novel', mastery: 62, status: 'developing' as const },
    ],
  },
  {
    name: 'GCSE English Language',
    percent: 54,
    score: 68,
    color: 'amber' as const,
    lessons: 18,
    completedLessons: 10,
    topics: [
      { name: 'Reading Comprehension', mastery: 80, status: 'good' as const },
      { name: 'Language Analysis', mastery: 72, status: 'good' as const },
      { name: 'Summary Writing', mastery: 65, status: 'developing' as const },
      { name: 'Directed Writing', mastery: 58, status: 'developing' as const },
      { name: 'Descriptive Writing', mastery: 75, status: 'good' as const },
      { name: 'Narrative Writing', mastery: 70, status: 'good' as const },
      { name: 'Exam Technique', mastery: 42, status: 'weak' as const },
    ],
  },
  {
    name: 'Creative Writing Workshop',
    percent: 82,
    score: 88,
    color: 'complete' as const,
    lessons: 8,
    completedLessons: 7,
    topics: [
      { name: 'Narrative Voice', mastery: 92, status: 'mastered' as const },
      { name: 'Descriptive Techniques', mastery: 88, status: 'mastered' as const },
      { name: 'Dialogue', mastery: 78, status: 'good' as const },
      { name: 'Story Structure', mastery: 85, status: 'mastered' as const },
    ],
  },
  {
    name: 'Exam Technique',
    percent: 20,
    score: 55,
    color: 'red' as const,
    lessons: 6,
    completedLessons: 1,
    topics: [
      { name: 'Time Management', mastery: 40, status: 'weak' as const },
      { name: 'Question Decoding', mastery: 55, status: 'developing' as const },
      { name: 'High-mark Answers', mastery: 38, status: 'weak' as const },
    ],
  },
]

const recentActivity = [
  { icon: BookOpen, text: 'Completed Module 7: Inspector Calls Act 3', when: 'Yesterday' },
  { icon: Target, text: 'Quiz Score: 8/10 on Poetry Terms', when: '2 days ago' },
  { icon: FileText, text: 'Essay submitted: Macbeth Analysis (22/30)', when: '3 days ago' },
  { icon: PenTool, text: 'Started Module: Exam Technique', when: '4 days ago' },
  { icon: BookOpen, text: 'Completed Creative Writing: Narrative Voice', when: '5 days ago' },
  { icon: Target, text: 'Quiz Score: 14/20 on Unseen Poetry', when: '1 week ago' },
]

const badges = [
  {
    name: '7-Day Streak',
    icon: Flame,
    earned: true,
    desc: '7 consecutive days of study',
    progress: 100,
  },
  { name: 'Quiz Champion', icon: Zap, earned: true, desc: 'Completed 10+ quizzes', progress: 100 },
  {
    name: 'First Essay',
    icon: FileText,
    earned: true,
    desc: 'Submitted first essay',
    progress: 100,
  },
  {
    name: 'Course Star',
    icon: Award,
    earned: true,
    desc: '82% in Creative Writing',
    progress: 100,
  },
  {
    name: 'Perfect Score',
    icon: Star,
    earned: false,
    desc: 'Score 100% on any quiz',
    progress: 80,
  },
  { name: 'Essay Master', icon: PenTool, earned: false, desc: 'Submit 10 essays', progress: 50 },
  {
    name: 'Mock Veteran',
    icon: Trophy,
    earned: false,
    desc: 'Complete 5 mock exams',
    progress: 40,
  },
  {
    name: 'Consistent Learner',
    icon: Target,
    earned: false,
    desc: '14-day study streak',
    progress: 50,
  },
]

const mockResults: {
  name: string
  score: number
  grade: string
  date: string
  trend: 'up' | 'down' | 'stable'
}[] = [
  { name: 'Language Paper 2 Mock', score: 78, grade: '7', date: '25 Mar 2026', trend: 'up' },
  { name: 'Literature Paper 1 Mock', score: 72, grade: '6', date: '10 Mar 2026', trend: 'stable' },
]

const essayResults = [
  {
    title: 'Macbeth Act 1 Essay',
    score: 73,
    grade: '6',
    feedback: 'Strong analysis of ambition. Improve linking to context.',
    date: '20 Mar',
  },
  {
    title: 'Creative Writing: Narrative Voice',
    score: 90,
    grade: '8',
    feedback: 'Excellent use of first-person perspective. Very engaging.',
    date: '12 Mar',
  },
  {
    title: 'Inspector Calls: Responsibility',
    score: 82,
    grade: '7',
    feedback: 'Good thematic analysis. Include more stage direction references.',
    date: '5 Mar',
  },
  {
    title: 'Language Paper 1: Descriptive',
    score: 68,
    grade: '5',
    feedback: 'Good sensory detail but needs more varied sentence structures.',
    date: '25 Feb',
  },
  {
    title: 'Poetry Comparison: Power',
    score: 55,
    grade: '4',
    feedback: 'Address both poems in each paragraph. Use comparative connectives.',
    date: '18 Feb',
  },
]

const scores = [62, 70, 55, 78, 80, 65, 85, 72, 74, 77, 80, 73]
const scoreMonths = [
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
]

function moduleAccent(
  color: 'amber' | 'green' | 'complete' | 'red',
): 'primary' | 'teal' | 'sage' | 'clay' | 'ochre' {
  if (color === 'green') return 'sage'
  if (color === 'amber') return 'ochre'
  if (color === 'red') return 'clay'
  return 'primary'
}

function moduleBarColor(color: 'amber' | 'green' | 'complete' | 'red') {
  if (color === 'green') return 'bg-green-500'
  if (color === 'amber') return 'bg-amber-500'
  if (color === 'red') return 'bg-red-500'
  return 'bg-primary'
}

function moduleBadgeColor(color: 'amber' | 'green' | 'complete' | 'red') {
  if (color === 'green')
    return 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30'
  if (color === 'amber')
    return 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30'
  if (color === 'red') return 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30'
  return 'bg-primary/10 text-primary border-primary/30'
}

function moduleLabel(color: 'amber' | 'green' | 'complete' | 'red') {
  if (color === 'green') return 'Good'
  if (color === 'amber') return 'In Progress'
  if (color === 'red') return 'Needs Attention'
  return 'Almost Done!'
}

function masteryLabel(status: 'mastered' | 'good' | 'developing' | 'weak') {
  if (status === 'mastered') return 'Mastered'
  if (status === 'good') return 'Good'
  if (status === 'developing') return 'Developing'
  return 'Needs Work'
}

// Stat card configs
const statCards: {
  label: string
  value: string
  trend: string
  trendUp: boolean
  accent: 'primary' | 'teal' | 'sage' | 'clay' | 'ochre'
}[] = [
  {
    label: 'Average Grade',
    value: `Grade ${percentageToGCSEGrade(STUDENT.averageScore)}`,
    trend: 'improving',
    trendUp: true,
    accent: 'primary',
  },
  {
    label: 'Study Hours',
    value: `${STUDENT.totalStudyHours}h`,
    trend: '+6h',
    trendUp: true,
    accent: 'teal',
  },
  {
    label: 'Quizzes Done',
    value: `${STUDENT.totalQuizzes}`,
    trend: '+3',
    trendUp: true,
    accent: 'sage',
  },
  {
    label: 'Essays Written',
    value: `${STUDENT.totalEssays}`,
    trend: '+2',
    trendUp: true,
    accent: 'clay',
  },
  {
    label: 'Mock Exams',
    value: `${STUDENT.totalMocks}`,
    trend: 'new',
    trendUp: true,
    accent: 'ochre',
  },
  {
    label: 'Longest Streak',
    value: `${STUDENT.longestStreak}d`,
    trend: '',
    trendUp: true,
    accent: 'ochre',
  },
]

export default function StudentProgressPage() {
  const t = useT()
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-center text-sm font-medium text-white">
        <span className="mr-2">{t('demo.b15.student_prog.banner')}</span>
        <span className="text-white/80">
          {t('demo.b15.student_prog.viewing_as')} {STUDENT.name} ({STUDENT.yearGroup})
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/demo/student"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('demo.b15.student_prog.back')}
        </Link>

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {t('demo.b15.student_prog.title')}
            </h1>
            <p className="mt-1 text-muted-foreground">
              {STUDENT.name} -- {STUDENT.yearGroup}
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SECTION 1: Large Progress Hero                                   */}
        {/* ================================================================ */}
        <section className="mb-8">
          <GlassPanel accent="primary" className="p-8">
            <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16">
              {/* Progress Ring */}
              <div className="relative pb-6">
                <div className="flex flex-col items-center">
                  <RadialScore value={OVERALL_PERCENT} size={250} />
                  <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {t('demo.b15.student_prog.overall_progress')}
                  </span>
                </div>
                {/* Streak badge overlay */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-3 py-1.5 shadow-lg shadow-amber-500/5">
                  <Flame className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                    {STUDENT.streak} day streak
                  </span>
                </div>
              </div>

              {/* Grade info */}
              <div className="flex flex-col items-center gap-4 md:items-start">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-xl bg-primary/10 border border-primary/20 px-4 py-3 text-center`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-primary/60 mb-0.5">
                      {t('demo.b15.student_prog.working_at')}
                    </p>
                    <p
                      className={`text-3xl font-bold ${gcseGradeColor(percentageToGCSEGrade(STUDENT.averageScore))}`}
                    >
                      Grade {percentageToGCSEGrade(STUDENT.averageScore)}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-amber-700/70 dark:text-amber-300/70 mb-0.5">
                      {t('demo.b15.student_prog.predicted')}
                    </p>
                    <p className="text-3xl font-bold text-amber-700 dark:text-amber-300">
                      Grade {STUDENT.predictedGrade}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-primary/60 mb-0.5">
                      {t('demo.b15.student_prog.target')}
                    </p>
                    <p className="text-3xl font-bold text-primary">Grade {STUDENT.targetGrade}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                    On Track -- {100 - OVERALL_PERCENT}% to go
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Best streak: {STUDENT.longestStreak} days
                </p>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: Key Stats Grid (2x3)                                  */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">{t('demo.b15.student_prog.key_stats')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {statCards.map((s) => (
              <GlassPanel key={s.label} accent={s.accent} className="p-4">
                <PanelEyebrow>{s.label}</PanelEyebrow>
                <div className="mt-2 flex items-end justify-between">
                  <p className="font-heading text-3xl font-bold tracking-tight text-foreground">
                    {s.value}
                  </p>
                  {s.trend && (
                    <span className="flex items-center gap-0.5 text-xs font-medium text-primary mb-1">
                      {s.trendUp && <ArrowUpRight className="h-3 w-3" />}
                      {s.trend}
                    </span>
                  )}
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3: Score Trend Bar Chart                                  */}
        {/* ================================================================ */}
        <section className="mb-8">
          <GlassPanel accent="clay" className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay-500/10">
                  <BarChart3 className="h-5 w-5 text-clay-600 dark:text-clay-300" />
                </div>
                <div>
                  <PanelEyebrow>Score Trend</PanelEyebrow>
                  <p className="text-xs text-muted-foreground">Last 12 assessments</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                <TrendingUp className="h-3 w-3" />
                +11% this term
              </span>
            </div>

            <TrendArea
              data={scores.map((s, i) => ({ month: scoreMonths[i], score: s }))}
              xKey="month"
              yKey="score"
              height={240}
              color={SERIES[3]}
              suffix="%"
              domain={[0, 100]}
            />

            <p className="mt-3 text-center text-[10px] text-muted-foreground">
              Average across the last 12 assessments: avg {avgScore}%
            </p>

            {/* Accessible equivalent */}
            <table className="sr-only">
              <thead>
                <tr>
                  <th>Assessment</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((s, i) => (
                  <tr key={i}>
                    <td>{scoreMonths[i]}</td>
                    <td>{s}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassPanel>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3b: Grade Progress & Next Grade Recommendations          */}
        {/* ================================================================ */}
        <section className="mb-8">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-cyan-500/[0.06] via-card to-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  {t('demo.b15.student_prog.next_grade_recs')}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {t('demo.b15.student_prog.personalised_advice')} Grade {STUDENT.targetGrade}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <GradeProgressCard
                currentGrade={Number(STUDENT.predictedGrade)}
                predictedGrade={Number(STUDENT.predictedGrade)}
                targetGrade={Number(STUDENT.targetGrade)}
                trend="up"
              />
            </div>

            <GradeRecommendations
              currentGrade={Number(STUDENT.predictedGrade)}
              weakAreas={modules
                .flatMap((m) =>
                  m.topics.filter((t) => t.status === 'weak' || t.status === 'developing'),
                )
                .map((t) => t.name)}
              maxActions={5}
              showResources
              showProgress
            />
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3c: Reading Profile                                       */}
        {/* ================================================================ */}
        <section className="mb-8">
          <ReadingProfileCard
            readingAge={186}
            decodingAge={192}
            fluencyAge={180}
            assessmentDate="2026-02-12"
            yearGroup="Year 11"
            compact
          />
        </section>

        {/* ================================================================ */}
        {/* SECTION 4: Module Mastery Grid                                    */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">
            {t('demo.b15.student_prog.module_mastery')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <GlassPanel key={mod.name} accent={moduleAccent(mod.color)} className="p-5">
                {/* Module header with mini ring */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <RadialScore value={mod.percent} size={64} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground leading-tight">{mod.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {mod.completedLessons}/{mod.lessons} lessons
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${moduleBadgeColor(mod.color)}`}
                      >
                        {moduleLabel(mod.color)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Avg: {percentageToGCSEGradeLabel(mod.score)}
                    </p>
                  </div>
                </div>

                {/* Topic breakdown */}
                <RankBars
                  data={mod.topics.map((t) => ({ name: t.name, mastery: t.mastery }))}
                  labelKey="name"
                  valueKey="mastery"
                  height={Math.max(160, mod.topics.length * 34)}
                  suffix="%"
                />
                <ul className="sr-only">
                  {mod.topics.map((t) => (
                    <li key={t.name}>
                      {t.name}: {t.mastery}% -- {masteryLabel(t.status)}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 5: Achievement Badges (horizontal scroll)                */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">
            {t('demo.b15.student_prog.achievement_badges')}
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
            {badges.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.name}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-center transition-all shrink-0 w-[140px] snap-start ${
                    b.earned
                      ? 'border-clay-500/30 bg-gradient-to-b from-clay-500/15 to-purple-500/5 hover:from-clay-500/20 hover:border-purple-500/40'
                      : 'border-border/60 bg-card grayscale hover:grayscale-0 hover:border-border'
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full transition-all ${
                      b.earned
                        ? 'bg-gradient-to-br from-clay-500/30 to-indigo-500/30 text-clay-600 dark:text-clay-300 shadow-lg shadow-clay-500/10 ring-2 ring-purple-500/20'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {b.earned ? <Icon className="h-8 w-8" /> : <Lock className="h-6 w-6" />}
                  </div>
                  <span className="text-xs font-semibold leading-tight">{b.name}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">{b.desc}</span>
                  {!b.earned && (
                    <div className="w-full mt-auto">
                      <div className="h-1.5 rounded-full bg-muted">
                        <div
                          className="h-1.5 rounded-full bg-clay-500/50 transition-all"
                          style={{ width: `${b.progress}%` }}
                        />
                      </div>
                      <p className="text-[9px] text-muted-foreground mt-1">{b.progress}% there</p>
                    </div>
                  )}
                  {b.earned && (
                    <span className="text-[10px] text-clay-600 dark:text-clay-300 font-medium">
                      {t('demo.b15.student_prog.earned')}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 6: Mock Exam Results (side-by-side)                      */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">{t('demo.b15.student_prog.mock_results')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockResults.map((m) => {
              const trendColor =
                m.trend === 'up'
                  ? 'text-primary'
                  : m.trend === 'down'
                    ? 'text-red-700 dark:text-red-300'
                    : 'text-muted-foreground'
              const trendBg =
                m.trend === 'up'
                  ? 'bg-primary/10 border-primary/20'
                  : m.trend === 'down'
                    ? 'bg-red-500/10 border-red-500/30'
                    : 'bg-muted border-border'
              return (
                <div
                  key={m.name}
                  className="rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-border"
                >
                  <p className="text-sm font-medium text-foreground mb-4">{m.name}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className={`text-5xl font-bold tracking-tight ${gcseGradeColor(percentageToGCSEGrade(m.score))}`}
                    >
                      Grade {percentageToGCSEGrade(m.score)}
                    </span>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm text-muted-foreground">{m.score}%</span>
                    </div>
                    <div
                      className={`ml-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${trendBg} ${trendColor}`}
                    >
                      {m.trend === 'up' ? (
                        <TrendingUp className="h-3.5 w-3.5" />
                      ) : m.trend === 'down' ? (
                        <TrendingDown className="h-3.5 w-3.5" />
                      ) : (
                        <Minus className="h-3.5 w-3.5" />
                      )}
                      {m.trend === 'up' ? 'Improving' : m.trend === 'down' ? 'Declining' : 'Stable'}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {m.date}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* Essay Results                                                     */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">
            {t('demo.b15.student_prog.essay_submissions')}
          </h2>
          <div className="rounded-2xl border border-border/60 bg-card divide-y divide-border/60">
            {essayResults.map((e, i) => {
              const gradeNum = parseInt(e.grade)
              const gradeColor =
                gradeNum >= 7
                  ? 'text-primary bg-primary/10 border-primary/30'
                  : gradeNum >= 5
                    ? 'text-amber-700 dark:text-amber-300 bg-amber-500/20 border-amber-500/30'
                    : 'text-red-700 dark:text-red-300 bg-red-500/20 border-red-500/30'
              return (
                <div key={i} className="px-5 py-4 transition-colors hover:bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-foreground">{e.title}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${gradeColor}`}
                      >
                        Grade {e.grade}
                      </span>
                      <span className="text-xs text-muted-foreground">({e.score}%)</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{e.feedback}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{e.date}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* Recent Activity                                                   */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">
            {t('demo.b15.student_prog.recent_activity')}
          </h2>
          <div className="rounded-2xl border border-border/60 bg-card divide-y divide-border/60">
            {recentActivity.map((a, i) => {
              const Icon = a.icon
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-muted/50"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-clay-500/20 to-indigo-500/20 text-clay-600 dark:text-clay-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{a.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.when}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* CTA                                                               */}
        {/* ================================================================ */}
        <div className="rounded-2xl border border-clay-500/30 bg-gradient-to-r from-clay-500/10 via-indigo-500/10 to-clay-400/10 p-8 text-center">
          <Trophy className="mx-auto h-10 w-10 text-clay-600 dark:text-clay-300 mb-3" />
          <p className="text-xl font-semibold mb-1">
            {t('demo.b15.student_prog.cta_heading')} {STUDENT.name.split(' ')[0]}!
          </p>
          <p className="text-sm text-muted-foreground mb-5">
            {t('demo.b15.student_prog.cta_body_pre')} {100 - OVERALL_PERCENT}%{' '}
            {t('demo.b15.student_prog.cta_body_post')}
          </p>
          <Link
            href="/demo/student"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white hover:from-clay-500 hover:to-indigo-500 transition-all shadow-lg shadow-clay-500/20"
          >
            {t('demo.b15.student_prog.continue_btn')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          {t('demo.b15.student_prog.footer')}
        </p>
      </div>
    </div>
  )
}
