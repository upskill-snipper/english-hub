'use client'

import Link from 'next/link'
import {
  BookOpen,
  Dumbbell,
  Brain,
  FileText,
  LayoutDashboard,
  ArrowLeft,
  TrendingUp,
  Clock,
  Award,
  Flame,
  ChevronRight,
  CheckCircle2,
  Circle,
  PlayCircle,
  BarChart2,
  Star,
  Target,
  Zap,
  BookMarked,
} from 'lucide-react'
import { useState } from 'react'

// ---------------------------------------------------------------------------
// Static demo data
// ---------------------------------------------------------------------------

const stats = [
  { label: 'Day Streak', value: '12', icon: Flame, delta: '+2 this week', color: 'text-orange-400' },
  { label: 'XP Earned', value: '2,840', icon: Zap, delta: '+340 today', color: 'text-yellow-400' },
  { label: 'Avg. Score', value: '78%', icon: Target, delta: '+5% vs last week', color: 'text-brand-accent' },
  { label: 'Time Studied', value: '14h', icon: Clock, delta: 'This month', color: 'text-blue-400' },
]

const courses = [
  {
    id: 1,
    title: 'AQA Language Paper 1',
    board: 'AQA',
    progress: 68,
    lessons: 24,
    completed: 16,
    lastStudied: '2 hours ago',
    tag: 'In progress',
  },
  {
    id: 2,
    title: 'Edexcel Literature: Macbeth',
    board: 'Edexcel',
    progress: 42,
    lessons: 18,
    completed: 8,
    lastStudied: 'Yesterday',
    tag: 'In progress',
  },
  {
    id: 3,
    title: 'AQA Language Paper 2',
    board: 'AQA',
    progress: 15,
    lessons: 20,
    completed: 3,
    lastStudied: '3 days ago',
    tag: 'Just started',
  },
]

const practiceItems = [
  {
    id: 1,
    title: 'Paper 1: Descriptive Writing',
    type: 'Writing',
    questions: 4,
    avgScore: 72,
    attempts: 5,
    difficulty: 'Medium',
  },
  {
    id: 2,
    title: 'Reading Comprehension: Inference',
    type: 'Reading',
    questions: 8,
    avgScore: 85,
    attempts: 3,
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: 'Vocabulary in Context',
    type: 'Vocabulary',
    questions: 12,
    avgScore: 60,
    attempts: 2,
    difficulty: 'Hard',
  },
]

const revisionTopics = [
  { id: 1, topic: 'Literary Devices', subtopics: ['Metaphor', 'Simile', 'Personification'], mastery: 80, due: 'Today' },
  { id: 2, topic: 'Sentence Structures', subtopics: ['Simple', 'Compound', 'Complex'], mastery: 55, due: 'Tomorrow' },
  { id: 3, topic: 'Context & Audience', subtopics: ['Register', 'Purpose', 'Audience'], mastery: 35, due: 'Overdue' },
]

// ---------------------------------------------------------------------------
// Nav sections config
// ---------------------------------------------------------------------------

const navSections = [
  { id: 'stats', label: 'Dashboard', icon: LayoutDashboard, dot: 'bg-surface-overlay border border-brand-border' },
  { id: 'courses', label: 'Courses', icon: BookOpen, dot: 'bg-blue-500' },
  { id: 'practice', label: 'Practice', icon: Dumbbell, dot: 'bg-emerald-500' },
  { id: 'revision', label: 'Revision', icon: Brain, dot: 'bg-purple-500' },
  { id: 'exam-guide', label: 'Exam Guide', icon: FileText, dot: 'bg-amber-500' },
]

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StatCard({
  stat,
}: {
  stat: (typeof stats)[number]
}) {
  const Icon = stat.icon
  return (
    <div className="bg-surface-raised rounded-xl p-5 flex items-start gap-4 border border-brand-border">
      <div className="w-10 h-10 rounded-lg bg-surface-overlay flex items-center justify-center flex-shrink-0">
        <Icon className={`w-5 h-5 ${stat.color}`} />
      </div>
      <div>
        <p className="text-2xl font-bold text-brand-text">{stat.value}</p>
        <p className="text-xs text-brand-muted mt-0.5">{stat.label}</p>
        <p className={`text-xs mt-1 ${stat.color} opacity-80`}>{stat.delta}</p>
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <div className="bg-blue-500/[0.05] border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-colors group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400/80 bg-blue-500/10 px-2 py-0.5 rounded-full">
            {course.board}
          </span>
          <h3 className="text-brand-text font-semibold mt-2 text-sm leading-snug">{course.title}</h3>
        </div>
        <button className="w-8 h-8 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center transition-colors flex-shrink-0">
          <PlayCircle className="w-4 h-4 text-blue-400" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-brand-muted">{course.completed}/{course.lessons} lessons</span>
          <span className="text-xs font-semibold text-blue-400">{course.progress}%</span>
        </div>
        <div className="h-1.5 bg-blue-500/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] text-brand-muted flex items-center gap-1">
          <Clock className="w-3 h-3" /> {course.lastStudied}
        </span>
        <span className="text-[11px] text-blue-400/70 bg-blue-500/10 px-2 py-0.5 rounded-full">{course.tag}</span>
      </div>
    </div>
  )
}

function PracticeCard({ item }: { item: (typeof practiceItems)[number] }) {
  const difficultyColor =
    item.difficulty === 'Easy'
      ? 'text-emerald-400 bg-emerald-500/10'
      : item.difficulty === 'Medium'
      ? 'text-yellow-400 bg-yellow-500/10'
      : 'text-red-400 bg-red-500/10'

  return (
    <div className="bg-emerald-500/[0.05] border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            {item.type}
          </span>
          <h3 className="text-brand-text font-semibold mt-2 text-sm leading-snug">{item.title}</h3>
        </div>
        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${difficultyColor}`}>
          {item.difficulty}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-emerald-500/5 rounded-lg p-2 text-center">
          <p className="text-sm font-bold text-emerald-400">{item.questions}</p>
          <p className="text-[10px] text-brand-muted">Questions</p>
        </div>
        <div className="bg-emerald-500/5 rounded-lg p-2 text-center">
          <p className="text-sm font-bold text-emerald-400">{item.avgScore}%</p>
          <p className="text-[10px] text-brand-muted">Avg Score</p>
        </div>
        <div className="bg-emerald-500/5 rounded-lg p-2 text-center">
          <p className="text-sm font-bold text-emerald-400">{item.attempts}</p>
          <p className="text-[10px] text-brand-muted">Attempts</p>
        </div>
      </div>

      <button className="w-full py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
        <Dumbbell className="w-4 h-4" />
        Practice Now
      </button>
    </div>
  )
}

function RevisionCard({ topic }: { topic: (typeof revisionTopics)[number] }) {
  const dueColor =
    topic.due === 'Overdue'
      ? 'text-red-400 bg-red-500/10'
      : topic.due === 'Today'
      ? 'text-purple-300 bg-purple-500/15'
      : 'text-brand-muted bg-surface-overlay'

  const masteryColor =
    topic.mastery >= 70 ? 'bg-purple-500' : topic.mastery >= 40 ? 'bg-purple-400' : 'bg-purple-300/60'

  return (
    <div className="bg-purple-500/[0.05] border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-brand-text font-semibold text-sm">{topic.topic}</h3>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${dueColor}`}>{topic.due}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            {topic.subtopics.map((s) => (
              <span key={s} className="text-[10px] text-purple-400/70 bg-purple-500/10 px-1.5 py-0.5 rounded">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mastery */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-brand-muted">Mastery</span>
          <span className="text-xs font-semibold text-purple-400">{topic.mastery}%</span>
        </div>
        <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
          <div className={`h-full ${masteryColor} rounded-full transition-all`} style={{ width: `${topic.mastery}%` }} />
        </div>
      </div>

      <button className="w-full py-2 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
        <Brain className="w-4 h-4" />
        Revise Now
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section wrapper with tint + left border
// ---------------------------------------------------------------------------

function TintedSection({
  id,
  bg,
  border,
  children,
}: {
  id: string
  bg: string
  border: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`${bg} border-l-4 ${border} py-10 px-6 transition-colors scroll-mt-16`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  accent,
}: {
  icon: React.ElementType
  title: string
  subtitle: string
  accent: string
}) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className={`w-10 h-10 rounded-xl ${accent} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-brand-text font-bold text-xl">{title}</h2>
        <p className="text-brand-muted text-sm mt-0.5">{subtitle}</p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function Design3Page() {
  const [activeSection, setActiveSection] = useState('stats')

  const scrollTo = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* ── Page header ─────────────────────────────────────────────── */}
      <div className="bg-surface border-b border-brand-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link
            href="/demo"
            className="flex items-center gap-1.5 text-brand-muted hover:text-brand-text transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Demo
          </Link>
          <div className="h-4 w-px bg-brand-border" />
          <div>
            <h1 className="text-brand-text font-bold text-base leading-none">Design 3: Tinted Sections</h1>
            <p className="text-brand-muted text-xs mt-0.5">
              Color-coded sections — each area has its own background tint
            </p>
          </div>
        </div>
      </div>

      {/* ── Sticky top nav ──────────────────────────────────────────── */}
      <nav className="sticky top-0 z-30 bg-surface/95 backdrop-blur border-b border-brand-border px-6 py-0">
        <div className="max-w-5xl mx-auto flex items-center gap-1 overflow-x-auto scrollbar-none">
          {navSections.map((s) => {
            const Icon = s.icon
            const isActive = activeSection === s.id
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-2 px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                  isActive
                    ? 'text-brand-text border-brand-accent'
                    : 'text-brand-muted border-transparent hover:text-brand-text hover:border-brand-border'
                }`}
              >
                {/* colored dot */}
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                <Icon className="w-4 h-4" />
                {s.label}
              </button>
            )
          })}
        </div>
      </nav>

      {/* ── Stats section (neutral) ─────────────────────────────────── */}
      <section
        id="stats"
        className="bg-brand-bg border-l-4 border-transparent py-10 px-6 scroll-mt-16"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            icon={LayoutDashboard}
            title="Dashboard"
            subtitle="Your learning snapshot for this week"
            accent="bg-surface-raised text-brand-muted"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>

          {/* Weekly activity bar chart (decorative) */}
          <div className="mt-6 bg-surface-raised rounded-xl p-5 border border-brand-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-brand-muted" />
                <span className="text-sm font-semibold text-brand-text">Weekly Activity</span>
              </div>
              <span className="text-xs text-brand-muted">Last 7 days</span>
            </div>
            <div className="flex items-end gap-2 h-16">
              {[40, 65, 55, 80, 70, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-sm bg-brand-accent/60 transition-all hover:bg-brand-accent"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[9px] text-brand-muted">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses section (blue tint) ─────────────────────────────── */}
      <TintedSection id="courses" bg="bg-blue-500/[0.03]" border="border-blue-500/40">
        <SectionHeader
          icon={BookOpen}
          title="My Courses"
          subtitle="Continue where you left off"
          accent="bg-blue-500/15 text-blue-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
        <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
          Browse all courses <ChevronRight className="w-4 h-4" />
        </button>
      </TintedSection>

      {/* ── Practice section (green tint) ──────────────────────────── */}
      <TintedSection id="practice" bg="bg-emerald-500/[0.03]" border="border-emerald-500/40">
        <SectionHeader
          icon={Dumbbell}
          title="Practice"
          subtitle="Targeted question practice to sharpen your skills"
          accent="bg-emerald-500/15 text-emerald-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {practiceItems.map((item) => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
        {/* Recommended practice banner */}
        <div className="bg-emerald-500/[0.07] border border-emerald-500/20 rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-brand-text">Recommended for you</p>
            <p className="text-xs text-brand-muted mt-0.5">
              Based on your weakest area — try <span className="text-emerald-400">Paper 1 Q5: Descriptive Writing</span>
            </p>
          </div>
          <button className="flex-shrink-0 px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-sm font-semibold transition-colors">
            Start
          </button>
        </div>
      </TintedSection>

      {/* ── Revision section (purple tint) ─────────────────────────── */}
      <TintedSection id="revision" bg="bg-purple-500/[0.03]" border="border-purple-500/40">
        <SectionHeader
          icon={Brain}
          title="Revision"
          subtitle="Spaced repetition keeps knowledge locked in long-term"
          accent="bg-purple-500/15 text-purple-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {revisionTopics.map((t) => (
            <RevisionCard key={t.id} topic={t} />
          ))}
        </div>

        {/* Revision streak notice */}
        <div className="bg-purple-500/[0.07] border border-purple-500/20 rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-text">3 topics due today</p>
            <p className="text-xs text-brand-muted mt-0.5">
              Keeping up with your revision schedule improves retention by up to 80%
            </p>
          </div>
        </div>
      </TintedSection>

      {/* ── Exam Guide section (amber tint) ────────────────────────── */}
      <TintedSection id="exam-guide" bg="bg-amber-500/[0.03]" border="border-amber-500/40">
        <SectionHeader
          icon={FileText}
          title="Exam Guide"
          subtitle="Mark schemes, examiner tips, and grade boundaries"
          accent="bg-amber-500/15 text-amber-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tips card */}
          <div className="bg-amber-500/[0.05] border border-amber-500/20 rounded-xl p-5">
            <h3 className="text-brand-text font-semibold text-sm mb-3 flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-amber-400" />
              Examiner Top Tips
            </h3>
            <ul className="space-y-2">
              {[
                'Always embed your quotations naturally in sentences',
                'Use subject terminology precisely — avoid vague language',
                'Link effect to the reader, not just the author\'s technique',
                'Structure your response with a clear argument',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-brand-muted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Grade boundaries card */}
          <div className="bg-amber-500/[0.05] border border-amber-500/20 rounded-xl p-5">
            <h3 className="text-brand-text font-semibold text-sm mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Grade Boundaries (AQA 2024)
            </h3>
            <div className="space-y-2">
              {[
                { grade: '9', min: '160', color: 'bg-emerald-500' },
                { grade: '7', min: '130', color: 'bg-blue-500' },
                { grade: '5', min: '95', color: 'bg-amber-500' },
                { grade: '4', min: '75', color: 'bg-orange-500' },
              ].map((b) => (
                <div key={b.grade} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-brand-text w-8">Gr {b.grade}</span>
                  <div className="flex-1 h-1.5 bg-amber-500/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${b.color} rounded-full`}
                      style={{ width: `${(parseInt(b.min) / 200) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-brand-muted w-12 text-right">{b.min}/200</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              Full Grade Guide
            </button>
          </div>
        </div>
      </TintedSection>

      {/* ── Footer spacer ───────────────────────────────────────────── */}
      <div className="h-16 bg-brand-bg border-t border-brand-border flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <p className="text-xs text-brand-muted">Design 3: Tinted Sections demo</p>
          <Link href="/demo" className="text-xs text-brand-accent hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Back to all demos
          </Link>
        </div>
      </div>
    </div>
  )
}
