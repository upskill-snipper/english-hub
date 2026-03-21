'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Trophy,
  CheckCircle,
  Play,
  GraduationCap,
  Flame,
  Clock,
  FileText,
  Layers,
  TrendingUp,
  Award,
  Star,
  ChevronRight,
  BarChart2,
} from 'lucide-react'

// ─── Board Config ─────────────────────────────────────────────────────────────

type BoardKey = 'KS3' | 'AQA' | 'Edexcel' | 'OCR' | 'WJEC'

const BOARDS: Record<BoardKey, { color: string; subtitle: string; bg: string; border: string }> = {
  KS3: {
    color: '#10b981',
    subtitle: 'Key Stage 3 English',
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.25)',
  },
  AQA: {
    color: '#3b82f6',
    subtitle: 'GCSE English Language & Literature',
    bg: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.25)',
  },
  Edexcel: {
    color: '#8b5cf6',
    subtitle: 'GCSE & IGCSE English',
    bg: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.25)',
  },
  OCR: {
    color: '#f97316',
    subtitle: 'GCSE English Language & Literature',
    bg: 'rgba(249, 115, 22, 0.1)',
    border: 'rgba(249, 115, 22, 0.25)',
  },
  WJEC: {
    color: '#ef4444',
    subtitle: 'GCSE English Language & Literature',
    bg: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.25)',
  },
}

// ─── Static Demo Data ─────────────────────────────────────────────────────────

const DEMO_STATS = [
  { label: 'Enrolled', value: '4', sub: 'courses', icon: BookOpen },
  { label: 'Completed', value: '18', sub: 'modules', icon: CheckCircle },
  { label: 'Certificates', value: '2', sub: 'earned', icon: Trophy },
  { label: 'Streak', value: '7', sub: 'days', icon: Flame },
]

const DEMO_COURSES = [
  {
    id: 'c1',
    title: 'English Language: Writing Skills',
    level: 'GCSE',
    progress: 65,
    completed: 6,
    total: 9,
    nextModule: 'Descriptive Writing Techniques',
  },
  {
    id: 'c2',
    title: 'English Literature: Poetry Analysis',
    level: 'GCSE',
    progress: 40,
    completed: 4,
    total: 10,
    nextModule: 'Comparing Poems',
  },
  {
    id: 'c3',
    title: 'Reading Comprehension',
    level: 'Foundation',
    progress: 90,
    completed: 9,
    total: 10,
    nextModule: 'Inference & Deduction',
  },
]

const DEMO_ACTIVITY = [
  { id: 'a1', module: 'The Writer\'s Craft', course: 'Writing Skills', time: '2h ago', score: 88 },
  { id: 'a2', module: 'Unseen Poetry', course: 'Poetry Analysis', time: '1d ago', score: 74 },
  { id: 'a3', module: 'Skimming & Scanning', course: 'Reading Comprehension', time: '2d ago', score: null },
]

const DEMO_QUICK_ACTIONS = [
  { label: 'Browse Courses', href: '/courses', icon: BookOpen },
  { label: 'Practice Questions', href: '/practice', icon: FileText },
  { label: 'Revision Cards', href: '/revision', icon: Layers },
  { label: 'Grade Dashboard', href: '/dashboard/grades', icon: BarChart2 },
]

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Design4Page() {
  const [selectedBoard, setSelectedBoard] = useState<BoardKey>('AQA')
  const board = BOARDS[selectedBoard]
  const accentColor = board.color
  const accentBg = board.bg
  const accentBorder = board.border

  // Helpers for inline styles
  const accentStyle = { color: accentColor }
  const accentBgStyle = { backgroundColor: accentBg, borderColor: accentBorder }
  const accentButtonStyle = {
    backgroundColor: accentColor,
    color: '#fff',
  }
  const accentProgressStyle = { backgroundColor: accentColor }
  const accentLeftBorderStyle = {
    borderLeftColor: accentColor,
    borderLeftWidth: '3px',
    borderLeftStyle: 'solid' as const,
  }

  return (
    <div className="min-h-screen bg-brand-bg">

      {/* ── Top Header ────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-brand-border bg-surface/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="flex items-center gap-1.5 text-sm text-brand-muted transition-colors hover:text-brand-text"
            >
              <ArrowLeft className="h-4 w-4" />
              Demo
            </Link>
            <span className="text-brand-border">/</span>
            <h1 className="text-sm font-semibold text-brand-text">Design 4: Board Blocks</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-brand-muted sm:inline">Selected board:</span>
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ backgroundColor: accentBg, color: accentColor, border: `1px solid ${accentBorder}` }}
            >
              {selectedBoard}
            </span>
          </div>
        </div>
      </header>

      {/* ── Board Selector Bar ────────────────────────────────────────────── */}
      <div className="border-b border-brand-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-brand-muted">
              Exam Board:
            </span>
            {(Object.keys(BOARDS) as BoardKey[]).map((key) => {
              const isActive = selectedBoard === key
              return (
                <button
                  key={key}
                  onClick={() => setSelectedBoard(key)}
                  className="rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          backgroundColor: BOARDS[key].color,
                          borderColor: BOARDS[key].color,
                          color: '#fff',
                          boxShadow: `0 0 0 3px ${BOARDS[key].bg}`,
                        }
                      : {
                          backgroundColor: 'transparent',
                          borderColor: 'var(--color-brand-border, #2a2a2a)',
                          color: 'var(--color-brand-muted, #888)',
                        }
                  }
                >
                  {key}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Main Layout ───────────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-7xl gap-0">

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <aside
          className="hidden w-48 shrink-0 border-r border-brand-border bg-surface md:flex md:flex-col"
          style={{ minHeight: 'calc(100vh - 8rem)' }}
        >
          <div className="flex flex-col gap-4 p-5">

            {/* Board identity block */}
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: accentBg, border: `1px solid ${accentBorder}` }}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5" style={accentStyle} />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={accentStyle}>
                  Exam Board
                </span>
              </div>
              <div className="text-xl font-extrabold tracking-tight" style={accentStyle}>
                {selectedBoard}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-brand-muted">
                {board.subtitle}
              </div>
              {/* Accent bar */}
              <div
                className="mt-3 h-1 w-8 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-0.5">
              {[
                { label: 'Dashboard', icon: BarChart2, active: true },
                { label: 'My Courses', icon: BookOpen, active: false },
                { label: 'Practice', icon: FileText, active: false },
                { label: 'Revision', icon: Layers, active: false },
                { label: 'Progress', icon: TrendingUp, active: false },
                { label: 'Certificates', icon: Award, active: false },
              ].map(({ label, icon: Icon, active }) => (
                <button
                  key={label}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150"
                  style={
                    active
                      ? { backgroundColor: accentBg, color: accentColor }
                      : { color: 'var(--color-brand-muted, #888)' }
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                  {active && (
                    <ChevronRight className="ml-auto h-3.5 w-3.5" style={accentStyle} />
                  )}
                </button>
              ))}
            </nav>

            {/* Change board hint */}
            <button
              onClick={() => {}}
              className="mt-auto text-left text-[11px] text-brand-muted/50 transition-colors hover:text-brand-muted"
            >
              Change board
            </button>
          </div>
        </aside>

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6">

          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-brand-text">
              Good afternoon, Alex
            </h2>
            <p className="mt-1 text-sm text-brand-muted">
              Friday, 21 March 2026 · {selectedBoard} track
            </p>
          </div>

          {/* ── Stats Row ─────────────────────────────────────────────────── */}
          <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {DEMO_STATS.map(({ label, value, sub, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-brand-border bg-surface p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: accentBg }}
                  >
                    <Icon className="h-5 w-5" style={accentStyle} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                    {label}
                  </span>
                </div>
                <div className="text-2xl font-bold tracking-tight text-brand-text">{value}</div>
                <p className="mt-0.5 text-xs text-brand-muted">{sub}</p>
              </div>
            ))}
          </div>

          {/* ── Quick Actions ─────────────────────────────────────────────── */}
          <div className="mb-6 flex flex-wrap gap-2">
            {DEMO_QUICK_ACTIONS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
                style={{
                  borderColor: accentBorder,
                  backgroundColor: 'transparent',
                  color: 'var(--color-brand-text, #f0f0f0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = accentBg
                  e.currentTarget.style.borderColor = accentColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = accentBorder
                }}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ backgroundColor: accentBg }}
                >
                  <Icon className="h-3.5 w-3.5" style={accentStyle} />
                </span>
                {label}
              </button>
            ))}
          </div>

          {/* ── Continue Learning ──────────────────────────────────────────── */}
          <section className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-brand-text">Continue Learning</h3>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={accentStyle}
              >
                View all <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {DEMO_COURSES.map((course) => (
                <div
                  key={course.id}
                  className="rounded-xl border border-brand-border bg-surface p-5 transition-all duration-200 hover:bg-surface-raised"
                  style={accentLeftBorderStyle}
                >
                  {/* Level badge */}
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mb-1 font-semibold leading-snug text-brand-text">
                    {course.title}
                  </h4>

                  {/* Progress text */}
                  <p className="mb-3 text-xs text-brand-muted">
                    {course.completed} of {course.total} modules
                  </p>

                  {/* Progress bar */}
                  <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-brand-border">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%`, ...accentProgressStyle }}
                      role="progressbar"
                      aria-valuenow={course.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${course.progress}% complete`}
                    />
                  </div>

                  {/* Continue button */}
                  <button
                    className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150"
                    style={{ backgroundColor: accentBg, color: accentColor }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = accentColor
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = accentBg
                      e.currentTarget.style.color = accentColor
                    }}
                  >
                    <Play className="h-3.5 w-3.5" />
                    Continue
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* ── Two-col: Activity + Achievements ──────────────────────────── */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* Recent Activity */}
            <section>
              <h3 className="mb-3 text-lg font-semibold text-brand-text">Recent Activity</h3>
              <div className="rounded-xl border border-brand-border bg-surface p-5">
                <div className="divide-y divide-brand-border">
                  {DEMO_ACTIVITY.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: accentBg }}
                      >
                        <CheckCircle className="h-4 w-4" style={accentStyle} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-brand-text">
                          {item.module}
                        </p>
                        <p className="truncate text-xs text-brand-muted">
                          {item.course}
                          <span className="ml-1.5 opacity-70">· {item.time}</span>
                        </p>
                      </div>
                      {item.score !== null && (
                        <span
                          className="shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold"
                          style={{ backgroundColor: accentBg, color: accentColor }}
                        >
                          {item.score}%
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="mb-3 text-lg font-semibold text-brand-text">Achievements</h3>
              <div className="rounded-xl border border-brand-border bg-surface p-5">
                <div className="space-y-3">
                  {[
                    { title: 'English Language: Foundation', grade: 'Distinction', score: 94, date: '15 Jan 2026' },
                    { title: 'Reading Comprehension', grade: 'Merit', score: 78, date: '3 Feb 2026' },
                  ].map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-surface-raised"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: accentBg }}
                      >
                        <Award className="h-5 w-5" style={accentStyle} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-brand-text">
                          {cert.title}
                        </h4>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span
                            className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-semibold"
                            style={{
                              backgroundColor: accentBg,
                              borderColor: accentBorder,
                              color: accentColor,
                            }}
                          >
                            <Star className="h-2.5 w-2.5" />
                            {cert.grade}
                          </span>
                          <span className="text-xs text-brand-muted">{cert.score}%</span>
                          <span className="text-xs text-brand-muted opacity-70">· {cert.date}</span>
                        </div>
                        <button
                          className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium transition-colors"
                          style={accentStyle}
                        >
                          View Certificate <ChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* ── Design Notes ──────────────────────────────────────────────── */}
          <div className="mt-8 rounded-xl border border-brand-border bg-surface-raised p-5">
            <h3 className="mb-2 text-sm font-semibold text-brand-text">Design Concept: Board Blocks</h3>
            <p className="text-xs leading-relaxed text-brand-muted">
              Every accent in the UI — progress bars, icon backgrounds, active nav items, card borders,
              badges, and buttons — is driven by a single <code className="rounded bg-brand-border px-1 py-0.5 font-mono text-[11px]">selectedBoard</code> state value.
              Switching boards above instantly repaints the entire page without touching Tailwind classes.
              Board colors: KS3 emerald · AQA blue · Edexcel violet · OCR orange · WJEC red.
            </p>
          </div>

        </main>
      </div>
    </div>
  )
}
