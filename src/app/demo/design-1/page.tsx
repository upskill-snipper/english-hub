'use client'

import React from 'react'

export default function BentoBoxDashboard() {
  const courses = [
    { name: 'GCSE English Language', paper: 'Paper 1', progress: 64, color: 'emerald' },
    { name: 'IGCSE Literature', paper: 'Paper 2', progress: 41, color: 'cyan' },
    { name: 'Creative Writing', paper: 'Module 3', progress: 88, color: 'emerald' },
    { name: 'Poetry Analysis', paper: 'AQA Anthology', progress: 23, color: 'cyan' },
  ]

  const activity = [
    { action: 'Completed', detail: 'Unseen Poetry Practice Q3', time: '2h ago' },
    { action: 'Reviewed', detail: 'Inspector Calls Essay Draft', time: '5h ago' },
    { action: 'Started', detail: 'Language Paper 2 — Q5 Writing', time: '1d ago' },
    { action: 'Achieved', detail: 'Grade 7 on Mock Exam', time: '2d ago' },
    { action: 'Completed', detail: 'Romeo & Juliet Act 3 Notes', time: '3d ago' },
  ]

  const sparklinePath = 'M0 28 L8 24 L16 26 L24 18 L32 20 L40 12 L48 14 L56 6 L64 10 L72 4 L80 8'

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 p-6 md:p-10 selection:bg-teal-700/30">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center">
            <span className="text-[10px] font-bold text-black">EH</span>
          </div>
          <span className="text-ink-500 text-sm font-light tracking-wide">english hub</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-full bg-cream-100 border border-ink-200 text-[10px] tracking-[0.2em] uppercase text-ink-500">
            gcse 2026
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-800/20 to-teal-600/10 border border-ink-200" />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 gap-4 max-w-[1400px] mx-auto auto-rows-[180px]">

        {/* Hero stat — full width, 1 row */}
        <div className="col-span-4 rounded-3xl bg-gradient-to-br from-teal-800/8 via-transparent to-teal-600/5 border border-ink-200 p-8 flex items-center justify-between group hover:scale-[1.01] hover:border-ink-200 transition-all duration-500 cursor-default overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500 mb-2">overall progress</p>
            <div className="flex items-baseline gap-3">
              <span className="text-7xl font-light tracking-tight bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">78%</span>
              <span className="text-sm text-teal-700/60 font-light">+12% this month</span>
            </div>
            <p className="text-ink-500 text-xs mt-3 font-light">Across 4 active courses</p>
          </div>
          <div className="relative z-10">
            <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <circle cx="70" cy="70" r="60" fill="none" stroke="currentColor" strokeOpacity="0.1" className="text-ink-200" strokeWidth="3" />
              <circle
                cx="70" cy="70" r="60" fill="none"
                stroke="url(#progressGrad)" strokeWidth="3" strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 60 * 0.78} ${2 * Math.PI * 60 * 0.22}`}
                transform="rotate(-90 70 70)"
                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <text x="70" y="66" textAnchor="middle" className="fill-ink-900 text-lg font-light">78</text>
              <text x="70" y="82" textAnchor="middle" className="fill-ink-500 text-[8px] tracking-[0.15em] uppercase">percent</text>
            </svg>
          </div>
        </div>

        {/* Streak card — 1 col, 1 row */}
        <div className="col-span-1 rounded-3xl bg-gradient-to-br from-teal-800/10 via-transparent to-teal-600/3 border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">streak</p>
          <div>
            <span className="text-6xl font-light tracking-tight text-ink-900">14</span>
            <span className="text-lg font-light text-ink-500 ml-1">days</span>
          </div>
          <div className="flex gap-[3px]">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 7 ? 'bg-teal-700/40' : 'bg-cream-100'}`} />
            ))}
          </div>
        </div>

        {/* Weekly performance with sparkline — 2 cols, 1 row */}
        <div className="col-span-2 rounded-3xl bg-gradient-to-br from-teal-600/8 via-transparent to-teal-600/5 border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">weekly performance</p>
            <span className="text-[10px] text-teal-700/50">+8.3%</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-5xl font-light tracking-tight text-ink-900">6.4</span>
            <svg width="80" height="32" viewBox="0 0 80 32" className="mb-2 opacity-60">
              <path d={sparklinePath} fill="none" stroke="url(#sparkGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-ink-500/40 text-xs font-light">avg. grade this week</p>
        </div>

        {/* Questions answered — 1 col, 1 row */}
        <div className="col-span-1 rounded-3xl bg-gradient-to-br from-clay-500/10 via-transparent to-clay-400/5 border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">questions</p>
          <span className="text-6xl font-light tracking-tight text-ink-900">247</span>
          <p className="text-ink-500/40 text-xs font-light">answered this term</p>
        </div>

        {/* Courses in progress — 2 cols, 2 rows */}
        <div className="col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-teal-800/6 via-transparent to-teal-600/4 border border-ink-200 p-6 flex flex-col group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500 mb-5">courses in progress</p>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            {courses.map((course, i) => (
              <div key={i} className="group/item">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-ink-600 font-light">{course.name}</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-ink-500">{course.paper}</span>
                </div>
                <div className="h-1 rounded-full bg-cream-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${course.color === 'emerald' ? 'bg-gradient-to-r from-teal-800/60 to-teal-500/40' : 'bg-gradient-to-r from-teal-600/60 to-teal-400/40'}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-[10px] text-ink-500/40">{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next session — 1 col, 1 row */}
        <div className="col-span-1 rounded-3xl bg-gradient-to-br from-teal-600/10 via-transparent to-teal-600/5 border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">next session</p>
          <div>
            <p className="text-2xl font-light text-ink-900">14:30</p>
            <p className="text-xs text-ink-500 font-light mt-0.5">Tomorrow</p>
          </div>
          <p className="text-[11px] text-teal-700/40 font-light">Language Paper 1</p>
        </div>

        {/* Exam countdown — 1 col, 1 row */}
        <div className="col-span-1 rounded-3xl bg-gradient-to-br from-teal-800/8 via-transparent to-transparent border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default relative overflow-hidden">
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-teal-800/5 blur-2xl" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500 relative z-10">exam in</p>
          <span className="text-6xl font-light tracking-tight text-ink-900 relative z-10">67</span>
          <p className="text-ink-500/40 text-xs font-light relative z-10">days remaining</p>
        </div>

        {/* Recent activity — 1 col, 2 rows */}
        <div className="col-span-1 row-span-2 rounded-3xl bg-gradient-to-b from-white/[0.03] via-transparent to-transparent border border-ink-200 p-6 flex flex-col group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500 mb-5">recent activity</p>
          <div className="flex flex-col gap-4 flex-1">
            {activity.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-teal-600/60' : 'bg-cream-100'}`} />
                  <span className="text-[10px] tracking-[0.15em] uppercase text-ink-500/50">{item.action}</span>
                </div>
                <p className="text-xs text-ink-500 font-light leading-relaxed pl-3">{item.detail}</p>
                <p className="text-[10px] text-ink-500/30 pl-3">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grade target — 1 col, 1 row */}
        <div className="col-span-1 rounded-3xl bg-gradient-to-br from-clay-500/8 via-transparent to-teal-600/5 border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">target grade</p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-light tracking-tight bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">8</span>
            <span className="text-lg text-ink-500/40 font-light">/ 9</span>
          </div>
          <p className="text-ink-500/40 text-xs font-light">predicted: 7</p>
        </div>

        {/* Topics mastered — 2 cols */}
        <div className="col-span-2 rounded-3xl bg-gradient-to-br from-teal-600/6 via-transparent to-teal-600/4 border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">topics mastered</p>
            <p className="text-[10px] text-ink-500/40">out of 42</p>
          </div>
          <div className="flex items-end gap-6">
            <span className="text-6xl font-light tracking-tight text-ink-900">29</span>
            <div className="flex gap-[2px] mb-3 flex-1 max-w-[200px]">
              {[...Array(42)].map((_, i) => (
                <div key={i} className={`flex-1 h-6 rounded-sm ${i < 29 ? 'bg-gradient-to-t from-teal-800/30 to-teal-500/10' : 'bg-white'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Motivational quote — 1 col */}
        <div className="col-span-1 rounded-3xl border border-ink-200 p-6 flex flex-col justify-center items-center text-center group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default backdrop-blur-xl bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/5 via-transparent to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <p className="text-ink-500 text-xs font-light italic leading-relaxed relative z-10">
            &ldquo;The limits of my language mean the limits of my world.&rdquo;
          </p>
          <p className="text-[10px] text-ink-500/30 mt-3 tracking-[0.15em] uppercase relative z-10">Wittgenstein</p>
        </div>

        {/* Study time — 1 col */}
        <div className="col-span-1 rounded-3xl bg-gradient-to-br from-teal-800/10 via-transparent to-transparent border border-ink-200 p-6 flex flex-col justify-between group hover:scale-[1.02] hover:border-ink-200 transition-all duration-500 cursor-default">
          <p className="text-[10px] tracking-[0.2em] uppercase text-ink-500">study time</p>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-light tracking-tight text-ink-900">3.2</span>
            <span className="text-sm text-ink-500 font-light">hrs/day</span>
          </div>
          <div className="flex gap-1 items-end h-6">
            {[40, 65, 55, 80, 70, 90, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-teal-800/25 to-teal-500/5" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="flex justify-center mt-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-ink-500/30">english hub — bento</p>
      </div>
    </div>
  )
}
