'use client'

import React, { useState } from 'react'

// ─── Mock Data ───────────────────────────────────────────────────────────────

const COURSES = [
  { id: 1, title: 'GCSE ENGLISH LANG', paper: 'Paper 1', progress: 72, color: '#84cc16', xp: 1480 },
  { id: 2, title: 'IGCSE LITERATURE', paper: 'Paper 2', progress: 45, color: '#ec4899', xp: 920 },
  { id: 3, title: 'CREATIVE WRITING', paper: 'Coursework', progress: 88, color: '#3b82f6', xp: 2100 },
  { id: 4, title: 'POETRY ANALYSIS', paper: 'Anthology', progress: 31, color: '#facc15', xp: 640 },
]

const ACTIVITY = [
  { time: '2m ago', action: 'Completed "Unseen Poetry" drill', xp: '+45 XP', color: '#ec4899' },
  { time: '1h ago', action: 'Streak restored — 14 days running', xp: '+20 XP', color: '#84cc16' },
  { time: '3h ago', action: 'Paper 1 Q5 practice submitted', xp: '+80 XP', color: '#3b82f6' },
  { time: '5h ago', action: 'Flashcard set "Macbeth Act 3" cleared', xp: '+35 XP', color: '#facc15' },
  { time: '1d ago', action: 'Timed essay: 38/40 — new personal best', xp: '+120 XP', color: '#ec4899' },
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
    <div className="min-h-screen bg-black text-white font-mono selection:bg-lime-400 selection:text-black overflow-x-hidden">

      {/* ── TOP BAR ── */}
      <header className="border-b-4 border-pink-500 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-black font-sans uppercase tracking-tighter text-lime-400"
            style={{ textShadow: '0 0 20px #84cc16, 0 0 40px #84cc1666' }}>
            ENG//HUB
          </span>
          <span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-0.5 uppercase">v2.0-neon</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-yellow-400 font-black text-lg font-sans">14-DAY STREAK</span>
          <div className="border-2 border-lime-400 px-3 py-1 shadow-[3px_3px_0_#84cc16] hover:shadow-[1px_1px_0_#84cc16] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
            <span className="text-sm uppercase">calum_x</span>
          </div>
        </div>
      </header>

      {/* ── STATS STRIP ── */}
      <section className="flex flex-wrap border-b-2 border-zinc-800">
        {[
          { label: 'TOTAL XP', value: '5,140', accent: '#84cc16', border: 'border-l-lime-400' },
          { label: 'RANK', value: 'RELENTLESS', accent: '#ec4899', border: 'border-l-pink-500' },
          { label: 'COURSES', value: '4', accent: '#3b82f6', border: 'border-l-blue-500' },
          { label: 'ESSAYS', value: '23', accent: '#facc15', border: 'border-l-yellow-400' },
          { label: 'ACCURACY', value: '91%', accent: '#84cc16', border: 'border-l-lime-400' },
          { label: 'HOURS', value: '47.2', accent: '#ec4899', border: 'border-l-pink-500' },
        ].map((stat, i) => (
          <div key={i}
            className={`flex-1 min-w-[140px] border-l-4 ${stat.border} border-r border-r-zinc-900 px-4 py-5 hover:bg-zinc-950 transition-colors`}>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{stat.label}</div>
            <div className="text-2xl font-black font-sans" style={{ color: stat.accent, textShadow: `0 0 12px ${stat.accent}55` }}>
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
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateX(50%)' }}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-bold">
              active modules
            </span>
          </div>

          <h2 className="text-4xl font-black font-sans uppercase tracking-tight mb-6 text-white"
            style={{ textShadow: '0 0 30px #3b82f644' }}>
            ACTIVE COURSES
          </h2>

          <div className="space-y-4 lg:pl-6">
            {COURSES.map((course) => {
              const isHovered = hoveredCourse === course.id
              return (
                <div
                  key={course.id}
                  onMouseEnter={() => setHoveredCourse(course.id)}
                  onMouseLeave={() => setHoveredCourse(null)}
                  className="rounded-none border-2 p-4 transition-all duration-150 cursor-pointer"
                  style={{
                    borderColor: isHovered ? course.color : '#27272a',
                    boxShadow: isHovered ? `6px_6px_0_${course.color}` : '4px 4px 0 #18181b',
                    ...(isHovered && { boxShadow: `6px 6px 0 ${course.color}` }),
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-black font-sans uppercase" style={{ color: course.color }}>
                        {course.title}
                      </h3>
                      <span className="text-xs text-zinc-500">{course.paper}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black font-sans" style={{ color: course.color, textShadow: `0 0 10px ${course.color}44` }}>
                        {course.progress}%
                      </div>
                      <div className="text-[10px] text-zinc-600 uppercase">{course.xp} xp</div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-zinc-900 rounded-none border border-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-none transition-all duration-500"
                      style={{ width: `${course.progress}%`, backgroundColor: course.color, boxShadow: `0 0 8px ${course.color}88` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── ASYMMETRIC OVERLAP ELEMENT ── */}
          <div className="mt-8 -mr-4 lg:-mr-12 border-2 border-yellow-400 rounded-none p-5 bg-black shadow-[8px_8px_0_#facc15] relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-yellow-400 mb-1">weekly challenge</div>
                <div className="text-xl font-black font-sans uppercase text-white">
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
        <div className="w-full lg:w-[420px] border-l-0 lg:border-l-2 border-t-2 lg:border-t-0 border-zinc-800 p-6 lg:p-8">
          <h2 className="text-4xl font-black font-sans uppercase tracking-tight mb-6"
            style={{ color: '#ec4899', textShadow: '0 0 25px #ec489944' }}>
            FEED
          </h2>

          <div className="space-y-0">
            {ACTIVITY.map((item, i) => {
              const isHovered = hoveredActivity === i
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredActivity(i)}
                  onMouseLeave={() => setHoveredActivity(null)}
                  className="border-b border-zinc-900 py-3 px-3 -mx-3 transition-all duration-100 cursor-default"
                  style={{
                    backgroundColor: isHovered ? '#0a0a0a' : 'transparent',
                    borderLeft: isHovered ? `3px solid ${item.color}` : '3px solid transparent',
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm text-zinc-300 leading-snug">{item.action}</div>
                      <div className="text-[10px] text-zinc-600 mt-1 uppercase">{item.time}</div>
                    </div>
                    <span className="text-xs font-black font-sans whitespace-nowrap shrink-0 px-2 py-0.5 border rounded-none"
                      style={{ color: item.color, borderColor: item.color }}>
                      {item.xp}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── QUICK ACTIONS ── */}
          <div className="mt-8 space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">quick actions</div>
            {[
              { label: 'START PRACTICE', color: '#84cc16', shadow: '#84cc16' },
              { label: 'REVIEW ESSAYS', color: '#3b82f6', shadow: '#3b82f6' },
              { label: 'FLASHCARDS', color: '#ec4899', shadow: '#ec4899' },
            ].map((btn, i) => (
              <button
                key={i}
                className="block w-full text-left rounded-none border-2 px-4 py-3 font-black font-sans uppercase text-sm transition-all duration-100 hover:translate-x-[2px] hover:translate-y-[2px]"
                style={{
                  borderColor: btn.color,
                  color: btn.color,
                  boxShadow: `4px 4px 0 ${btn.shadow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `1px 1px 0 ${btn.shadow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `4px 4px 0 ${btn.shadow}`
                  e.currentTarget.style.transform = ''
                }}
              >
                {'>'} {btn.label}
              </button>
            ))}
          </div>

          {/* ── GRADE TARGETS ── */}
          <div className="mt-8 border-2 border-blue-500 rounded-none p-4 shadow-[4px_4px_0_#3b82f6]">
            <div className="text-[10px] uppercase tracking-widest text-teal-700 mb-3">grade targets</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { subject: 'ENG LANG', current: '6', target: '8', color: '#84cc16' },
                { subject: 'ENG LIT', current: '5', target: '7', color: '#ec4899' },
              ].map((g, i) => (
                <div key={i} className="border border-zinc-800 p-3 rounded-none">
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">{g.subject}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black font-sans" style={{ color: g.color, textShadow: `0 0 15px ${g.color}44` }}>
                      {g.current}
                    </span>
                    <span className="text-zinc-600 text-sm font-bold">{'//'}</span>
                    <span className="text-xl font-black font-sans text-zinc-400">{g.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── NOW STUDYING — TERMINAL BAR ── */}
      <footer className="fixed bottom-0 left-0 right-0 border-t-2 border-lime-400 bg-black z-50">
        <div className="px-6 py-3 flex items-center gap-4 overflow-hidden">
          <span className="shrink-0 bg-lime-400 text-black text-[10px] font-black uppercase px-2 py-0.5 tracking-wider">
            NOW STUDYING
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-2 text-lime-400 text-sm whitespace-nowrap">
              {TERMINAL_LINES.map((line, i) => (
                <React.Fragment key={i}>
                  <span className="opacity-70">{line}</span>
                  {i < TERMINAL_LINES.length - 1 && <span className="text-zinc-700 mx-2">|</span>}
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
