'use client'

import Link from 'next/link'
import {
  BookOpen,
  CheckCircle,
  Trophy,
  Crown,
  Play,
  ArrowRight,
  Home,
  FileText,
  Layers,
  GraduationCap,
  Settings,
  ChevronLeft,
} from 'lucide-react'

// ─── Static Demo Data ────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: BookOpen, label: 'Courses', active: false },
  { icon: Layers, label: 'Practice', active: false },
  { icon: FileText, label: 'Revision', active: false },
  { icon: GraduationCap, label: 'Exam Guide', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const STAT_CARDS = [
  {
    label: 'Enrolled',
    value: '3',
    icon: BookOpen,
    color: 'text-brand-blue',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    label: 'Completed',
    value: '12',
    icon: CheckCircle,
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
    border: 'border-brand-accent/20',
  },
  {
    label: 'Certificates',
    value: '1',
    icon: Trophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    label: 'Plan',
    value: 'Pro',
    icon: Crown,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
]

const COURSES = [
  {
    title: 'GCSE English Language',
    subtitle: 'AQA · Paper 1 & 2',
    progress: 60,
    modules: '18 / 30 modules',
    tag: 'In Progress',
    tagColor: 'bg-brand-accent/15 text-brand-accent',
    accentColor: '#10b981',
    lastActivity: '2 hours ago',
  },
  {
    title: 'GCSE English Literature',
    subtitle: 'AQA · Poetry & Prose',
    progress: 35,
    modules: '7 / 20 modules',
    tag: 'In Progress',
    tagColor: 'bg-blue-500/15 text-blue-400',
    accentColor: '#3b82f6',
    lastActivity: 'Yesterday',
  },
  {
    title: 'Creative Writing Mastery',
    subtitle: 'KS3 · Foundation',
    progress: 100,
    modules: '15 / 15 modules',
    tag: 'Completed',
    tagColor: 'bg-yellow-400/15 text-yellow-400',
    accentColor: '#facc15',
    lastActivity: '3 days ago',
  },
]

const QUICK_ACTIONS = [
  { label: 'Continue Learning', icon: Play },
  { label: 'Practice Writing', icon: FileText },
  { label: 'Mock Exam', icon: GraduationCap },
  { label: 'View Progress', icon: ArrowRight },
]

const ACTIVITY_FEED = [
  { text: 'Completed "Descriptive Writing" module', time: '2h ago', dot: '#10b981' },
  { text: 'Scored 88% on Language Analysis quiz', time: '5h ago', dot: '#3b82f6' },
  { text: 'Unlocked "Persuasive Techniques" badge', time: 'Yesterday', dot: '#facc15' },
  { text: 'Started GCSE English Literature', time: '3d ago', dot: '#8b5cf6' },
]

const NOW_STUDYING = {
  module: 'Analysing Writer\'s Craft',
  course: 'GCSE English Language',
  progress: 60,
  timeLeft: '12 min left',
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-56 bg-surface border-r border-brand-border flex flex-col z-20 pb-20">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-brand-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-brand-accent/20 flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-brand-accent" />
          </div>
          <span className="font-semibold text-brand-text text-sm tracking-tight">EnglishHub</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-2 mb-3 text-[10px] font-semibold uppercase tracking-widest text-brand-muted/60">
          Main Menu
        </p>
        {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium transition-all duration-150
              ${active
                ? 'bg-brand-accent/15 text-brand-accent shadow-glow-sm'
                : 'text-brand-muted hover:bg-surface-raised hover:text-brand-text'
              }`}
          >
            <Icon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-brand-accent' : ''}`} />
            {label}
            {active && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-accent" />
            )}
          </button>
        ))}
      </nav>

      {/* Profile stub */}
      <div className="px-3 pb-4 border-t border-brand-border pt-3">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-raised">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-accent to-blue-500 flex items-center justify-center text-xs font-bold text-white">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-brand-text truncate">Alex Johnson</p>
            <p className="text-[10px] text-brand-muted truncate">Pro Member</p>
          </div>
          <Crown className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
        </div>
      </div>
    </aside>
  )
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  bg,
  border,
}: (typeof STAT_CARDS)[0]) {
  return (
    <div
      className={`bg-surface-raised border ${border} rounded-xl p-4 flex items-center gap-4 shadow-soft hover:shadow-medium transition-shadow duration-200`}
    >
      <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <p className="text-2xl font-bold text-brand-text leading-none">{value}</p>
        <p className="text-xs text-brand-muted mt-0.5">{label}</p>
      </div>
    </div>
  )
}

function CourseCard({
  title,
  subtitle,
  progress,
  modules,
  tag,
  tagColor,
  accentColor,
  lastActivity,
}: (typeof COURSES)[0]) {
  const isComplete = progress === 100
  return (
    <div className="bg-surface-raised border border-brand-border rounded-xl p-5 hover:border-brand-accent/30 hover:shadow-glow transition-all duration-200 group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0 pr-3">
          <h3 className="text-sm font-semibold text-brand-text truncate group-hover:text-brand-accent transition-colors duration-150">
            {title}
          </h3>
          <p className="text-xs text-brand-muted mt-0.5">{subtitle}</p>
        </div>
        <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColor}`}>
          {tag}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-brand-muted mb-1.5">
          <span>{modules}</span>
          <span className="font-semibold" style={{ color: accentColor }}>{progress}%</span>
        </div>
        <div className="h-1.5 bg-brand-bg rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: accentColor }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] text-brand-muted">Last: {lastActivity}</span>
        <button
          className={`flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-150
            ${isComplete
              ? 'bg-yellow-400/15 text-yellow-400 hover:bg-yellow-400/25'
              : 'bg-brand-accent/15 text-brand-accent hover:bg-brand-accent/25'
            }`}
        >
          {isComplete ? (
            <>
              <Trophy className="w-3 h-3" />
              Review
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              Continue
            </>
          )}
        </button>
      </div>
    </div>
  )
}

function ActivityFeed() {
  return (
    <div className="bg-surface-raised border border-brand-border rounded-xl p-5">
      <h2 className="text-sm font-semibold text-brand-text mb-4">Recent Activity</h2>
      <ul className="space-y-3">
        {ACTIVITY_FEED.map(({ text, time, dot }, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1.5 relative">
              <span
                className="block w-2 h-2 rounded-full"
                style={{ backgroundColor: dot }}
              />
              {i < ACTIVITY_FEED.length - 1 && (
                <span className="absolute left-[3px] top-3 w-px h-6 bg-brand-border" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-brand-text leading-snug">{text}</p>
              <p className="text-[10px] text-brand-muted mt-0.5">{time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function NowStudyingBar() {
  return (
    <div className="fixed bottom-0 left-56 right-0 z-30 bg-surface border-t border-brand-border px-6 py-3">
      <div className="flex items-center gap-4 max-w-5xl">
        {/* Play button */}
        <button className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 shadow-glow hover:bg-brand-accent-hover transition-colors duration-150">
          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
        </button>

        {/* Module info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-brand-text truncate">
                Now Studying — {NOW_STUDYING.module}
              </p>
              <p className="text-[10px] text-brand-muted">{NOW_STUDYING.course}</p>
            </div>
            <span className="flex-shrink-0 ml-4 text-[10px] text-brand-muted">{NOW_STUDYING.timeLeft}</span>
          </div>
          {/* Thin progress bar */}
          <div className="h-1 bg-brand-border rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-accent rounded-full"
              style={{ width: `${NOW_STUDYING.progress}%` }}
            />
          </div>
        </div>

        {/* Skip / forward */}
        <button className="flex-shrink-0 flex items-center gap-1 text-[11px] font-medium text-brand-muted hover:text-brand-text transition-colors duration-150">
          <ArrowRight className="w-4 h-4" />
          <span className="hidden sm:inline">Next</span>
        </button>
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Design1Page() {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text">
      {/* Sidebar */}
      <Sidebar />

      {/* Main wrapper — offset by sidebar width, padded for bottom bar */}
      <div className="ml-56 pb-20 min-h-screen flex flex-col">

        {/* ── Top header bar ── */}
        <header className="sticky top-0 z-10 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-text transition-colors duration-150"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Demo Index
            </Link>
            <span className="text-brand-border">·</span>
            <span className="text-xs font-semibold text-brand-text">Design 1: Spotify Learn</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent px-2.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
            Concept Preview
          </span>
        </header>

        {/* ── Content stage ── */}
        <main className="flex-1 px-6 py-7">

          {/* Greeting */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-brand-text leading-tight">
              Good morning, Alex
            </h1>
            <p className="text-sm text-brand-muted mt-1">{today}</p>
          </div>

          {/* Stat cards */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {STAT_CARDS.map((card) => (
              <StatCard key={card.label} {...card} />
            ))}
          </section>

          {/* Quick action pills */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2">
              {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-raised border border-brand-border text-xs font-medium text-brand-muted hover:border-brand-accent/40 hover:text-brand-accent hover:bg-brand-accent/5 transition-all duration-150"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              ))}
            </div>
          </section>

          {/* Courses + Activity — two column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-6">

            {/* Course cards */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-brand-text">My Courses</h2>
                <button className="flex items-center gap-1 text-xs text-brand-accent hover:text-brand-accent/80 transition-colors duration-150">
                  View all <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
                {COURSES.map((course) => (
                  <CourseCard key={course.title} {...course} />
                ))}
              </div>
            </section>

            {/* Activity feed */}
            <section>
              <ActivityFeed />

              {/* Motivational nudge */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-brand-accent/10 to-blue-500/10 border border-brand-accent/20">
                <p className="text-xs font-semibold text-brand-text mb-1">
                  Keep it up!
                </p>
                <p className="text-[11px] text-brand-muted leading-relaxed">
                  You're 60% through GCSE English Language. Complete 2 more modules to unlock your next badge.
                </p>
                <button className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors duration-150">
                  Continue now <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* Now Studying bar — fixed bottom */}
      <NowStudyingBar />
    </div>
  )
}
