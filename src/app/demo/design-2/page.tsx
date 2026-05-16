'use client'

import React, { useState } from 'react'

// ─── Mock Data ───────────────────────────────────────────────────────────────

// Neon palette tokens — Tailwind class strings (not hex literals) so the
// brutalist neon identity is preserved while staying lint-clean. `hex`
// drives the inline brutalist hard-shadow offsets (boxShadow is a
// non-colour dynamic style and is intentionally retained).
const NEON = {
  lime: { text: 'text-lime-400', border: 'border-lime-400', hex: '#84cc16' },
  pink: { text: 'text-pink-500', border: 'border-pink-500', hex: '#ec4899' },
  blue: { text: 'text-blue-500', border: 'border-blue-500', hex: '#3b82f6' },
  yellow: { text: 'text-yellow-400', border: 'border-yellow-400', hex: '#facc15' },
} as const

type NeonKey = keyof typeof NEON

const COURSES: ReadonlyArray<{
  id: number
  title: string
  paper: string
  progress: number
  neon: NeonKey
  xp: number
}> = [
  { id: 1, title: 'GCSE ENGLISH LANG', paper: 'Paper 1', progress: 72, neon: 'lime', xp: 1480 },
  { id: 2, title: 'IGCSE LITERATURE', paper: 'Paper 2', progress: 45, neon: 'pink', xp: 920 },
  { id: 3, title: 'CREATIVE WRITING', paper: 'Coursework', progress: 88, neon: 'blue', xp: 2100 },
  { id: 4, title: 'POETRY ANALYSIS', paper: 'Anthology', progress: 31, neon: 'yellow', xp: 640 },
]

const ACTIVITY: ReadonlyArray<{ time: string; action: string; xp: string; neon: NeonKey }> = [
  { time: '2m ago', action: 'Completed "Unseen Poetry" drill', xp: '+45 XP', neon: 'pink' },
  { time: '1h ago', action: 'Streak restored — 14 days running', xp: '+20 XP', neon: 'lime' },
  { time: '3h ago', action: 'Paper 1 Q5 practice submitted', xp: '+80 XP', neon: 'blue' },
  { time: '5h ago', action: 'Flashcard set "Macbeth Act 3" cleared', xp: '+35 XP', neon: 'yellow' },
  { time: '1d ago', action: 'Timed essay: 38/40 — new personal best', xp: '+120 XP', neon: 'pink' },
]

const TERMINAL_LINES = [
  '> loading module: unseen-prose-extraction.v3',
  '> user.streak = 14 | user.xp = 5140 | rank = "RELENTLESS"',
  '> next_task: Paper 2 Section B — Descriptive Writing',
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NeonBrutalistDashboard() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-lime-400 selection:text-black overflow-x-hidden">
      {/* ── TOP BAR ── */}
      <header className="border-b-4 border-pink-500 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="text-4xl font-black font-sans uppercase tracking-tighter text-lime-400"
            style={{ textShadow: '0 0 20px #84cc16, 0 0 40px #84cc1666' }}
          >
            ENG//HUB
          </span>
          <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 uppercase">
            v2.0-neon
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-lime-400 font-black text-lg font-sans">14-DAY STREAK</span>
          <div
            className="border-2 border-lime-400 px-3 py-1 hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
            style={{ boxShadow: '3px 3px 0 #84cc16' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '1px 1px 0 #84cc16'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '3px 3px 0 #84cc16'
            }}
          >
            <span className="text-sm uppercase">calum_x</span>
          </div>
        </div>
      </header>

      {/* ── STATS STRIP ── */}
      <section className="flex flex-wrap border-b-2 border-border">
        {[
          {
            label: 'TOTAL XP',
            value: '5,140',
            accent: 'text-lime-400',
            border: 'border-l-lime-400',
          },
          {
            label: 'RANK',
            value: 'RELENTLESS',
            accent: 'text-pink-500',
            border: 'border-l-pink-500',
          },
          { label: 'COURSES', value: '4', accent: 'text-blue-500', border: 'border-l-blue-500' },
          {
            label: 'ESSAYS',
            value: '23',
            accent: 'text-yellow-400',
            border: 'border-l-yellow-400',
          },
          { label: 'ACCURACY', value: '91%', accent: 'text-lime-400', border: 'border-l-lime-400' },
          { label: 'HOURS', value: '47.2', accent: 'text-pink-500', border: 'border-l-pink-500' },
        ].map((stat, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[140px] border-l-4 ${stat.border} border-r border-r-border px-4 py-5 hover:bg-muted transition-colors`}
          >
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              {stat.label}
            </div>
            <div
              className={`text-2xl font-black font-sans ${stat.accent} drop-shadow-[0_0_12px_currentColor]`}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="flex flex-col lg:flex-row">
        {/* ── LEFT: COURSES + VERTICAL LABEL ── */}
        <div className="relative flex-1 p-6 lg:p-8">
          {/* Vertical rotated label */}
          <div
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateX(50%)' }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 font-bold">
              active modules
            </span>
          </div>

          <h2 className="text-4xl font-black font-sans uppercase tracking-tight mb-6 text-foreground drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
            ACTIVE COURSES
          </h2>

          <div className="space-y-4 lg:pl-6">
            {COURSES.map((course) => {
              const isHovered = hoveredCourse === course.id
              const neon = NEON[course.neon]
              return (
                <div
                  key={course.id}
                  onMouseEnter={() => setHoveredCourse(course.id)}
                  onMouseLeave={() => setHoveredCourse(null)}
                  className={`rounded-none border-2 p-4 transition-all duration-150 cursor-pointer ${isHovered ? neon.border : 'border-border'}`}
                  style={{
                    boxShadow: isHovered ? `6px 6px 0 ${neon.hex}` : '4px 4px 0 hsl(var(--muted))',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className={`text-lg font-black font-sans uppercase ${neon.text}`}>
                        {course.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">{course.paper}</span>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-black font-sans ${neon.text} drop-shadow-[0_0_10px_currentColor]`}
                      >
                        {course.progress}%
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase">
                        {course.xp} xp
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-muted rounded-none border border-border overflow-hidden">
                    <div
                      className={`h-full rounded-none transition-all duration-500 bg-current ${neon.text}`}
                      style={{ width: `${course.progress}%`, boxShadow: `0 0 8px ${neon.hex}` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── ASYMMETRIC OVERLAP ELEMENT ── */}
          <div
            className="mt-8 -mr-4 lg:-mr-12 border-2 border-yellow-400 rounded-none p-5 bg-background relative z-10"
            style={{ boxShadow: '8px 8px 0 #facc15' }}
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-yellow-400 mb-1">
                  weekly challenge
                </div>
                <div className="text-xl font-black font-sans uppercase text-foreground">
                  WRITE 3 TIMED ESSAYS BEFORE FRIDAY
                </div>
              </div>
              <div className="border-2 border-yellow-400 px-4 py-2 text-yellow-400 font-black font-sans uppercase text-sm hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer">
                2 / 3 DONE
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: ACTIVITY FEED ── */}
        <div className="w-full lg:w-[420px] border-l-0 lg:border-l-2 border-t-2 lg:border-t-0 border-border p-6 lg:p-8">
          <h2 className="text-4xl font-black font-sans uppercase tracking-tight mb-6 text-pink-500 drop-shadow-[0_0_25px_currentColor]">
            FEED
          </h2>

          <div className="space-y-0">
            {ACTIVITY.map((item, i) => {
              const isHovered = hoveredActivity === i
              const neon = NEON[item.neon]
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredActivity(i)}
                  onMouseLeave={() => setHoveredActivity(null)}
                  className={`border-b border-border py-3 px-3 -mx-3 transition-all duration-100 cursor-default border-l-[3px] ${isHovered ? `bg-muted ${neon.border}` : 'border-l-transparent'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm text-foreground/80 leading-snug">{item.action}</div>
                      <div className="text-[10px] text-muted-foreground mt-1 uppercase">
                        {item.time}
                      </div>
                    </div>
                    <span
                      className={`text-xs font-black font-sans whitespace-nowrap shrink-0 px-2 py-0.5 border rounded-none ${neon.text} ${neon.border}`}
                    >
                      {item.xp}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── QUICK ACTIONS ── */}
          <div className="mt-8 space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              quick actions
            </div>
            {[
              { label: 'START PRACTICE', neon: 'lime' as NeonKey },
              { label: 'REVIEW ESSAYS', neon: 'blue' as NeonKey },
              { label: 'FLASHCARDS', neon: 'pink' as NeonKey },
            ].map((btn, i) => {
              const neon = NEON[btn.neon]
              return (
                <button
                  key={i}
                  className={`block w-full text-left rounded-none border-2 px-4 py-3 font-black font-sans uppercase text-sm transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px] ${neon.border} ${neon.text}`}
                  style={{ boxShadow: `4px 4px 0 ${neon.hex}` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `1px 1px 0 ${neon.hex}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `4px 4px 0 ${neon.hex}`
                    e.currentTarget.style.transform = ''
                  }}
                >
                  {'>'} {btn.label}
                </button>
              )
            })}
          </div>

          {/* ── GRADE TARGETS ── */}
          <div
            className="mt-8 border-2 border-blue-500 rounded-none p-4"
            style={{ boxShadow: '4px 4px 0 #3b82f6' }}
          >
            <div className="text-[10px] uppercase tracking-widest text-blue-500 mb-3">
              grade targets
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { subject: 'ENG LANG', current: '6', target: '8', neon: 'lime' as NeonKey },
                { subject: 'ENG LIT', current: '5', target: '7', neon: 'pink' as NeonKey },
              ].map((g, i) => {
                const neon = NEON[g.neon]
                return (
                  <div key={i} className="border border-border p-3 rounded-none">
                    <div className="text-[10px] text-muted-foreground uppercase mb-1">
                      {g.subject}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-3xl font-black font-sans ${neon.text} drop-shadow-[0_0_15px_currentColor]`}
                      >
                        {g.current}
                      </span>
                      <span className="text-muted-foreground text-sm font-bold">{'//'}</span>
                      <span className="text-xl font-black font-sans text-muted-foreground">
                        {g.target}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── NOW STUDYING — TERMINAL BAR ── */}
      <footer className="fixed bottom-0 left-0 right-0 border-t-2 border-lime-400 bg-background z-50">
        <div className="px-6 py-3 flex items-center gap-4 overflow-hidden">
          <span className="shrink-0 bg-lime-400 text-black text-[10px] font-black uppercase px-2 py-0.5 tracking-wider">
            NOW STUDYING
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-2 text-lime-400 text-sm whitespace-nowrap">
              {TERMINAL_LINES.map((line, i) => (
                <React.Fragment key={i}>
                  <span className="opacity-70">{line}</span>
                  {i < TERMINAL_LINES.length - 1 && (
                    <span className="text-muted-foreground mx-2">|</span>
                  )}
                </React.Fragment>
              ))}
              <span className="animate-pulse text-lime-400 ml-1 text-base">{'│'}</span>
            </div>
          </div>
          <div className="shrink-0 hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-[10px] text-lime-400 uppercase tracking-wider">live</span>
          </div>
        </div>
      </footer>

      {/* Bottom spacer for fixed terminal bar */}
      <div className="h-14" />
    </div>
  )
}
