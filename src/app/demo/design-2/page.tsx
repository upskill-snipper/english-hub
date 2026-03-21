'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  PenTool,
  RotateCcw,
  Map,
  LayoutDashboard,
  TrendingUp,
  Clock,
  CheckCircle2,
  Flame,
  Star,
  ChevronRight,
  Zap,
  Award,
  Target,
  Play,
} from 'lucide-react'

// ─── Static demo data ───────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'practice', label: 'Practice', icon: PenTool },
  { id: 'revision', label: 'Revision', icon: RotateCcw },
  { id: 'guide', label: 'Guide', icon: Map },
]

const FILTER_CHIPS = [
  { id: 'all', label: 'All' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'completed', label: 'Completed' },
]

const STATS = [
  { label: 'Streak', value: '12', unit: 'days', icon: Flame, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { label: 'XP Earned', value: '3,240', unit: 'xp', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { label: 'Completed', value: '18', unit: 'topics', icon: CheckCircle2, color: 'text-brand-accent', bg: 'bg-brand-accent/10' },
  { label: 'Accuracy', value: '84', unit: '%', icon: Target, color: 'text-blue-400', bg: 'bg-blue-400/10' },
]

const COURSES = [
  {
    id: 1,
    title: 'Language & Structure',
    exam: 'AQA English Language',
    progress: 72,
    lessons: 18,
    completed: 13,
    color: 'from-blue-500 to-blue-700',
    chipColor: 'bg-blue-500/15 text-blue-400',
    badge: 'AQA',
  },
  {
    id: 2,
    title: 'Power & Conflict Poetry',
    exam: 'AQA English Literature',
    progress: 45,
    lessons: 24,
    completed: 11,
    color: 'from-purple-500 to-purple-700',
    chipColor: 'bg-purple-500/15 text-purple-400',
    badge: 'AQA',
  },
  {
    id: 3,
    title: 'Macbeth',
    exam: 'Edexcel English Literature',
    progress: 88,
    lessons: 16,
    completed: 14,
    color: 'from-brand-accent to-emerald-700',
    chipColor: 'bg-brand-accent/15 text-brand-accent',
    badge: 'Edexcel',
  },
  {
    id: 4,
    title: 'Unseen Poetry',
    exam: 'OCR English Literature',
    progress: 30,
    lessons: 12,
    completed: 4,
    color: 'from-orange-500 to-orange-700',
    chipColor: 'bg-orange-500/15 text-orange-400',
    badge: 'OCR',
  },
]

const ACTIVITY = [
  { id: 1, icon: CheckCircle2, iconColor: 'text-brand-accent', text: 'Completed "Metaphor & Simile" quiz', sub: '15 min ago · +80 XP', dot: 'bg-brand-accent' },
  { id: 2, icon: Star, iconColor: 'text-yellow-400', text: 'Earned "Streak Master" badge', sub: '2 hours ago · 12-day streak', dot: 'bg-yellow-400' },
  { id: 3, icon: BookOpen, iconColor: 'text-blue-400', text: 'Started "Language Techniques" lesson', sub: 'Yesterday · AQA Language', dot: 'bg-blue-400' },
  { id: 4, icon: Award, iconColor: 'text-purple-400', text: 'Scored 92% on Power & Conflict test', sub: '2 days ago · Personal best', dot: 'bg-purple-400' },
  { id: 5, icon: RotateCcw, iconColor: 'text-orange-400', text: 'Revised "An Inspector Calls" flashcards', sub: '3 days ago · 24 cards', dot: 'bg-orange-400' },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function Design2Page() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCourses = COURSES.filter((c) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'in-progress') return c.progress < 100 && c.progress > 0
    if (activeFilter === 'completed') return c.progress === 100
    return true
  })

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">

      {/* ── Page header ── */}
      <div className="border-b border-brand-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/demo"
            className="flex items-center gap-1.5 text-brand-muted hover:text-brand-text transition-colors text-sm"
          >
            <ArrowLeft size={15} />
            Back to demos
          </Link>
          <span className="text-brand-border">·</span>
          <span className="text-brand-muted text-sm font-medium">Design 2: Pill Navigation</span>
        </div>
      </div>

      {/* ── Pill Navigation bar ── */}
      <div className="sticky top-0 z-30 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-0.5">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
              const isActive = activeNav === id
              return (
                <button
                  key={id}
                  onClick={() => setActiveNav(id)}
                  className={[
                    'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0',
                    isActive
                      ? 'bg-surface-raised text-brand-text border border-brand-border shadow-medium'
                      : 'text-brand-muted hover:text-brand-text hover:bg-surface/60',
                  ].join(' ')}
                >
                  <Icon size={15} className={isActive ? 'text-brand-accent' : ''} />
                  {label}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

        {/* ── Greeting ── */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-brand-text">
              Good morning, Alex 👋
            </h1>
            <p className="text-brand-muted text-sm mt-1">{today}</p>
          </div>
          <div className="flex items-center gap-2 bg-surface-raised border border-brand-border rounded-full px-4 py-2 flex-shrink-0">
            <Flame size={15} className="text-orange-400" />
            <span className="text-sm font-semibold text-brand-text">12</span>
            <span className="text-xs text-brand-muted">day streak</span>
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATS.map(({ label, value, unit, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="bg-surface border border-brand-border rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center`}>
                <Icon size={16} className={color} />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-brand-text">{value}</span>
                  <span className={`text-xs font-medium ${color}`}>{unit}</span>
                </div>
                <p className="text-xs text-brand-muted mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Courses section ── */}
        <div>

          {/* Section heading + filter chips */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-base font-semibold text-brand-text">My Courses</h2>
            <div className="flex items-center gap-2">
              {FILTER_CHIPS.map(({ id, label }) => {
                const isActive = activeFilter === id
                return (
                  <button
                    key={id}
                    onClick={() => setActiveFilter(id)}
                    className={[
                      'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                      isActive
                        ? 'bg-brand-accent text-white shadow-glow-sm'
                        : 'bg-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-accent/40',
                    ].join(' ')}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Course card grid */}
          {filteredCourses.length === 0 ? (
            <div className="bg-surface border border-brand-border rounded-2xl p-8 text-center">
              <CheckCircle2 size={32} className="text-brand-accent mx-auto mb-3" />
              <p className="text-brand-text font-medium">No courses here yet</p>
              <p className="text-brand-muted text-sm mt-1">Try a different filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-surface border border-brand-border rounded-2xl overflow-hidden hover:border-brand-accent/30 transition-all duration-200 group cursor-pointer"
                >
                  {/* Gradient top strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${course.color}`} />

                  <div className="p-4 space-y-3">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${course.chipColor}`}>
                          {course.badge}
                        </span>
                        <h3 className="font-semibold text-brand-text leading-snug">{course.title}</h3>
                        <p className="text-xs text-brand-muted mt-0.5">{course.exam}</p>
                      </div>
                      <button className="w-9 h-9 rounded-full bg-surface-raised border border-brand-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-all duration-200">
                        <Play size={13} className="text-brand-muted group-hover:text-brand-accent transition-colors ml-0.5" />
                      </button>
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-brand-muted">
                          {course.completed}/{course.lessons} lessons
                        </span>
                        <span className="text-xs font-semibold text-brand-text">{course.progress}%</span>
                      </div>
                      <div className="h-2 bg-surface-raised rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-500`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Footer chip */}
                    <div className="flex items-center gap-2 pt-0.5">
                      <div className="flex items-center gap-1.5 bg-surface-raised rounded-full px-3 py-1">
                        <TrendingUp size={11} className="text-brand-accent" />
                        <span className="text-xs text-brand-muted">
                          {course.progress >= 80 ? 'Almost done!' : course.progress >= 50 ? 'On track' : 'Just started'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-surface-raised rounded-full px-3 py-1">
                        <Clock size={11} className="text-brand-muted" />
                        <span className="text-xs text-brand-muted">
                          {course.lessons - course.completed} left
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Activity feed ── */}
        <div className="bg-surface border border-brand-border rounded-2xl overflow-hidden">
          {/* Card header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-brand-accent/10 flex items-center justify-center">
                <Zap size={13} className="text-brand-accent" />
              </div>
              <h2 className="text-sm font-semibold text-brand-text">Recent Activity</h2>
            </div>
            <button className="flex items-center gap-1 text-xs text-brand-accent hover:text-brand-text transition-colors rounded-full px-2.5 py-1 hover:bg-surface-raised">
              See all
              <ChevronRight size={12} />
            </button>
          </div>

          {/* Activity list */}
          <div className="divide-y divide-brand-border">
            {ACTIVITY.map(({ id, icon: Icon, iconColor, text, sub, dot }) => (
              <div key={id} className="flex items-start gap-4 px-5 py-3.5 hover:bg-surface-raised/50 transition-colors">
                {/* Icon pill */}
                <div className="w-8 h-8 rounded-full bg-surface-raised border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={14} className={iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-brand-text leading-snug">{text}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
                    <span className="text-xs text-brand-muted truncate">{sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quick action pills ── */}
        <div className="pb-4">
          <h2 className="text-sm font-semibold text-brand-text mb-3">Quick Actions</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Start a quiz', icon: Zap, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
              { label: 'Flashcard session', icon: RotateCcw, color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
              { label: 'Continue lesson', icon: Play, color: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20' },
              { label: 'View progress', icon: TrendingUp, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
              { label: 'Earn badges', icon: Award, color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' },
            ].map(({ label, icon: Icon, color }) => (
              <button
                key={label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 active:scale-95 ${color}`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
