'use client'

import React, { useState } from 'react'

const mockData = {
  user: { name: 'Amira', xp: 4820, level: 12, streak: 17 },
  dailyChallenge: {
    title: 'Simile Sprint',
    description: 'Identify 10 similes in under 2 minutes',
    xpReward: 150,
    timeLeft: '4h 23m',
  },
  courses: [
    { name: 'Paper 1: Creative Reading & Writing', emoji: '📖', progress: 72, color: 'from-teal-800 to-teal-600' },
    { name: "Paper 2: Writers' Viewpoints", emoji: '✍️', progress: 45, color: 'from-orange-500 to-clay-400' },
    { name: 'Poetry Anthology', emoji: '🎭', progress: 88, color: 'from-violet-500 to-purple-600' },
    { name: 'Shakespeare: Macbeth', emoji: '🗡️', progress: 31, color: 'from-rose-500 to-red-600' },
    { name: 'Unseen Poetry', emoji: '🔮', progress: 60, color: 'from-teal-800 to-indigo-600' },
    { name: 'Creative Writing Craft', emoji: '🖊️', progress: 53, color: 'from-amber-500 to-orange-600' },
  ],
  achievements: [
    { emoji: '🏆', label: 'First Essay' },
    { emoji: '⚡', label: '5-Day Streak' },
    { emoji: '🧠', label: 'Quiz Master' },
    { emoji: '📝', label: '10 Annotations' },
    { emoji: '🎯', label: 'Perfect Score' },
    { emoji: '🌟', label: 'Early Bird' },
    { emoji: '🦉', label: 'Night Owl' },
    { emoji: '💎', label: 'Gem Collector' },
  ],
  recentActivity: [
    { action: 'Completed quiz on metaphors', xp: 80, time: '2h ago' },
    { action: 'Finished Paper 1 Q5 practice', xp: 120, time: '5h ago' },
    { action: 'Read extract from "A Christmas Carol"', xp: 40, time: 'Yesterday' },
  ],
  weeklyXp: [320, 450, 280, 510, 600, 390, 0],
  weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
}

export default function DopamineDashboard() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const maxWeeklyXp = Math.max(...mockData.weeklyXp)
  const totalWeeklyXp = mockData.weeklyXp.reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900 relative overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-clay-500/10 via-teal-800/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-clay-600 text-sm font-medium tracking-wide uppercase">English Hub</p>
            <h1 className="text-2xl font-bold mt-1">Hey, {mockData.user.name}! 👋</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-cream-100 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold">
              <span className="text-yellow-400">💪</span>
              <span>{mockData.user.xp.toLocaleString()} XP</span>
            </div>
            <div className="bg-cream-100 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold">
              <span>Lv. {mockData.user.level}</span>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-teal-800/10 via-clay-500/5 to-teal-800/10 backdrop-blur rounded-[20px] p-8 mb-6 border border-ink-200 text-center">
          <div className="text-5xl mb-3 animate-bounce inline-block">🔥</div>
          <h2 className="text-4xl font-extrabold mb-2">
            You&apos;re on fire!
          </h2>
          <p className="text-lg text-ink-600 mb-4">You&apos;ve been studying for</p>
          <div className="inline-block">
            <span className="text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {mockData.user.streak}
            </span>
            <span className="text-2xl font-bold text-orange-300 ml-3">days straight</span>
          </div>
          <p className="text-clay-600 text-sm mt-3">Keep it up! Your longest streak was 23 days.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-teal-800 to-teal-600 rounded-[20px] p-6">
            <span className="text-3xl">⭐</span>
            <p className="text-sm font-medium text-ink-900 mt-2">Total Score</p>
            <p className="text-3xl font-extrabold mt-1">87%</p>
            <p className="text-xs text-ink-600 mt-1">Avg. across all quizzes</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-clay-400 rounded-[20px] p-6">
            <span className="text-3xl">🎯</span>
            <p className="text-sm font-medium text-ink-900 mt-2">Weekly Goal</p>
            <p className="text-3xl font-extrabold mt-1">{totalWeeklyXp} / 3000</p>
            <div className="mt-2 bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-white/90 rounded-full transition-all duration-700"
                style={{ width: `${Math.min((totalWeeklyXp / 3000) * 100, 100)}%` }}
              />
            </div>
          </div>
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-[20px] p-6">
            <span className="text-3xl">📚</span>
            <p className="text-sm font-medium text-ink-900 mt-2">Courses Active</p>
            <p className="text-3xl font-extrabold mt-1">{mockData.courses.length}</p>
            <p className="text-xs text-ink-600 mt-1">GCSE English Language & Lit</p>
          </div>
        </div>

        {/* Daily Challenge + Weekly XP */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Daily Challenge */}
          <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-[20px] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-4xl">⚔️</span>
                <span className="text-xs font-bold uppercase tracking-widest text-ink-600">Daily Challenge</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-2">{mockData.dailyChallenge.title}</h3>
              <p className="text-ink-900 text-sm">{mockData.dailyChallenge.description}</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-ink-600">⏰ {mockData.dailyChallenge.timeLeft} left</span>
                <span className="text-sm font-bold text-yellow-200">+{mockData.dailyChallenge.xpReward} XP</span>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 text-sm uppercase tracking-wide">
                Start Challenge 💪
              </button>
            </div>
          </div>

          {/* Weekly XP Chart */}
          <div className="bg-cream-100 backdrop-blur border border-ink-200 rounded-[20px] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">This Week</h3>
              <span className="text-sm text-clay-600 font-semibold">{totalWeeklyXp} XP</span>
            </div>
            <div className="flex items-end gap-2 h-32">
              {mockData.weeklyXp.map((xp, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full relative flex-1 flex items-end">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        xp === 0
                          ? 'bg-cream-100 min-h-[4px]'
                          : i === 4
                            ? 'bg-gradient-to-t from-yellow-500 to-orange-400'
                            : 'bg-gradient-to-t from-clay-500 to-clay-400'
                      }`}
                      style={{ height: xp === 0 ? '4px' : `${(xp / maxWeeklyXp) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-clay-600 font-medium">{mockData.weekDays[i]}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-clay-600 mt-3 text-center">🏅 Best day: Friday — 600 XP</p>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Your Courses 📚</h3>
            <button className="text-sm text-clay-600 hover:text-ink-900 transition-colors font-medium">View All →</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {mockData.courses.map((course, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${course.color} rounded-[20px] p-6 cursor-pointer transition-all duration-200 ${
                  hoveredCourse === i ? 'scale-105 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCourse(i)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <span className="text-4xl">{course.emoji}</span>
                <h4 className="font-bold mt-3 text-sm leading-snug">{course.name}</h4>
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-semibold text-ink-900 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-white/90 rounded-full transition-all duration-700"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements + Recent Activity */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Achievements */}
          <div className="bg-cream-100 backdrop-blur border border-ink-200 rounded-[20px] p-6">
            <h3 className="font-bold text-lg mb-4">Achievements 🏆</h3>
            <div className="flex flex-wrap gap-3">
              {mockData.achievements.map((badge, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-clay-500/30 to-clay-400/30 border border-ink-200 flex items-center justify-center text-2xl hover:scale-110 hover:border-white/30 transition-all duration-200 cursor-pointer">
                    {badge.emoji}
                  </div>
                  <span className="text-[10px] text-clay-600 mt-1 font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm text-clay-600 hover:text-ink-900 transition-colors font-medium">
              See all 24 badges →
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-cream-100 backdrop-blur border border-ink-200 rounded-[20px] p-6">
            <h3 className="font-bold text-lg mb-4">Recent Activity ⚡</h3>
            <div className="space-y-3">
              {mockData.recentActivity.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-cream-100 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-clay-600 mt-0.5">{item.time}</p>
                  </div>
                  <span className="text-sm font-bold text-teal-700">+{item.xp} XP</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Level Progress Banner */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-clay-500 rounded-[20px] p-6 mb-8 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-black">
                {mockData.user.level}
              </div>
              <div>
                <p className="font-bold">Level {mockData.user.level} — Essay Explorer</p>
                <p className="text-sm text-ink-600">820 XP to Level {mockData.user.level + 1}</p>
              </div>
            </div>
            <span className="text-3xl">🚀</span>
          </div>
          <div className="bg-white/20 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full transition-all duration-1000"
              style={{ width: '68%' }}
            />
          </div>
          <div className="flex justify-between text-xs text-ink-600 mt-1.5 font-medium">
            <span>Level {mockData.user.level}</span>
            <span>68%</span>
            <span>Level {mockData.user.level + 1}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-ink-500 text-xs pb-4">
          <p>English Hub — GCSE & IGCSE English Platform</p>
        </div>
      </div>
    </div>
  )
}
