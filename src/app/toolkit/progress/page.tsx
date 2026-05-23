'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import DOMPurify from 'dompurify'
import { useT } from '@/lib/i18n/use-t'
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Flame,
  Trophy,
  TrendingUp,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Gamepad2,
  FileEdit,
} from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-config'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel } from '@/lib/grades'
import { Badge } from '@/components/ui/badge'
import {
  LS_KEYS,
  lsGet,
  gradeColour,
  gradeBgColour,
  type QuizHistoryEntry,
  type StudiedPoem,
  type GameScoreEntry,
  type RevisionProgressEntry,
  type MarkingHistoryEntry,
} from '@/components/toolkit/toolkit-types'

// ─── Progress Dashboard ──────────────────────────────────────────────────
// Full progress tracking: stats, grade predictor, streak, topic breakdown,
// strengths, weaknesses, study history, and AI-suggested focus areas.
// ──────────────────────────────────────────────────────────────────────────

function calculateStreak(): number {
  if (typeof window === 'undefined') return 0
  const raw = localStorage.getItem(LS_KEYS.streakDates)
  if (!raw) return 0
  try {
    const dates: string[] = JSON.parse(raw)
    if (!dates.length) return 0
    const unique = [...new Set(dates.map((d) => new Date(d).toISOString().slice(0, 10)))]
      .sort()
      .reverse()
    const today = new Date().toISOString().slice(0, 10)
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    if (unique[0] !== today && unique[0] !== yesterday) return 0
    let streak = 1
    for (let i = 1; i < unique.length; i++) {
      const prev = new Date(unique[i - 1])
      const curr = new Date(unique[i])
      const diffDays = Math.round((prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays === 1) streak++
      else break
    }
    return streak
  } catch {
    return 0
  }
}

// ── Stat Card ──────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: typeof BookOpen
  label: string
  value: string | number
  colour: string
  bgColour: string
}

function StatCard({ icon: Icon, label, value, colour, bgColour }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bgColour}`}>
        <Icon className={`h-5 w-5 ${colour}`} />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
        <p className="text-lg font-serif font-medium">{value}</p>
      </div>
    </div>
  )
}

// ── Progress Bar ───────────────────────────────────────────────────────────

function ProgressBar({
  label,
  value,
  max,
  colour,
}: {
  label: string
  value: number
  max: number
  colour: string
}) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono text-xs">{pct}%</span>
      </div>
      <div className="progress-track h-2">
        <div
          className={`h-full rounded-full transition-all duration-700 ${colour}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function ProgressPage() {
  const tx = useT()
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)
  const [mounted, setMounted] = useState(false)

  // Data
  const [quizHistory, setQuizHistory] = useState<QuizHistoryEntry[]>([])
  const [studiedPoems, setStudiedPoems] = useState<StudiedPoem[]>([])
  const [gameScores, setGameScores] = useState<GameScoreEntry[]>([])
  const [revisionProgress, setRevisionProgress] = useState<RevisionProgressEntry[]>([])
  const [markingHistory, setMarkingHistory] = useState<MarkingHistoryEntry[]>([])
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    setMounted(true)
    setQuizHistory(lsGet<QuizHistoryEntry[]>(LS_KEYS.quizHistory, []))
    setStudiedPoems(lsGet<StudiedPoem[]>(LS_KEYS.studiedPoems, []))
    setGameScores(lsGet<GameScoreEntry[]>(LS_KEYS.gameScores, []))
    setRevisionProgress(lsGet<RevisionProgressEntry[]>(LS_KEYS.revisionProgress, []))
    setMarkingHistory(lsGet<MarkingHistoryEntry[]>(LS_KEYS.markingHistory, []))
    setStreak(calculateStreak())
  }, [])

  // ── Computed stats ─────────────────────────────────────────────────────

  const allScores = useMemo(
    () => [...quizHistory.map((q) => q.score), ...gameScores.map((g) => g.score)],
    [quizHistory, gameScores],
  )

  const avgScore = useMemo(() => {
    if (allScores.length === 0) return 0
    return Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
  }, [allScores])

  const predictedGrade = useMemo(() => {
    if (allScores.length === 0) return 0
    return percentageToGCSEGrade(avgScore)
  }, [allScores, avgScore])

  // Topic breakdown
  const topicBreakdown = useMemo(() => {
    const topics: Record<string, { count: number; totalScore: number }> = {}
    quizHistory.forEach((q) => {
      if (!topics[q.topic]) topics[q.topic] = { count: 0, totalScore: 0 }
      topics[q.topic].count++
      topics[q.topic].totalScore += q.score
    })
    return Object.entries(topics)
      .map(([name, data]) => ({
        name,
        count: data.count,
        avgScore: Math.round(data.totalScore / data.count),
      }))
      .sort((a, b) => b.count - a.count)
  }, [quizHistory])

  // Strengths and weaknesses
  const strengths = useMemo(() => topicBreakdown.filter((t) => t.avgScore >= 80), [topicBreakdown])
  const weaknesses = useMemo(() => topicBreakdown.filter((t) => t.avgScore < 60), [topicBreakdown])

  // Study history (recent 20 items)
  const studyHistory = useMemo(() => {
    const items: { type: string; label: string; date: string; score?: number }[] = [
      ...quizHistory.map((q) => ({
        type: 'quiz' as const,
        label: `Quiz: ${q.topic}`,
        date: q.date,
        score: q.score,
      })),
      ...studiedPoems.map((p) => ({
        type: 'poem' as const,
        label: `Studied: ${p.title}`,
        date: p.date,
      })),
      ...gameScores.map((g) => ({
        type: 'game' as const,
        label: `Game: ${g.game}`,
        date: g.date,
        score: g.score,
      })),
      ...markingHistory.map((m) => ({
        type: 'essay' as const,
        label: `Essay: ${m.topic}`,
        date: m.date,
        score: m.score,
      })),
    ]
    return items
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 20)
  }, [quizHistory, studiedPoems, gameScores, markingHistory])

  // AI-suggested focus areas
  const suggestions = useMemo(() => {
    const suggestions: string[] = []

    if (weaknesses.length > 0) {
      suggestions.push(
        `Focus on **${weaknesses[0].name}** -- your average score is ${weaknesses[0].avgScore}%. Try the AI Test Builder for targeted practice.`,
      )
    }

    if (quizHistory.length < 5) {
      suggestions.push(
        'Take more quizzes to build a reliable progress profile. Aim for at least 5 across different topics.',
      )
    }

    if (streak < 3) {
      suggestions.push(
        'Build a study streak! Consistent daily revision is more effective than cramming. Even 15 minutes counts.',
      )
    }

    if (predictedGrade > 0 && predictedGrade < 7) {
      suggestions.push(
        `To push towards Grade 7+, focus on embedding quotations and analysing writer's methods rather than retelling the plot.`,
      )
    }

    if (studiedPoems.length < 5) {
      suggestions.push(
        'Study more poems from your anthology. Comparative analysis across multiple poems is key for top grades.',
      )
    }

    if (suggestions.length === 0) {
      suggestions.push(
        'Great progress! Keep building on your strengths and revisiting areas you have not practised recently.',
      )
    }

    return suggestions.slice(0, 3)
  }, [weaknesses, quizHistory, streak, predictedGrade, studiedPoems])

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
              {tx('toolkit.progress.title')}
            </h1>
            <p className="text-sm text-muted-foreground">{tx('toolkit.progress.subtitle')}</p>
          </div>
        </section>
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-20 rounded-xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <Link
            href="/toolkit"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {tx('toolkit.progress.back')}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <BarChart3 className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                  {tx('toolkit.progress.title')}
                </h1>
                {boardConfig && (
                  <Badge variant="outline" className="font-mono text-xs">
                    {boardConfig.shortName}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{tx('toolkit.progress.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-8">
        {/* ── Overall Stats ──────────────────────────────────────── */}
        <section>
          <h2 className="font-serif text-xl font-medium mb-4">
            {tx('toolkit.progress.overall_stats')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <StatCard
              icon={BookOpen}
              label={tx('toolkit.progress.label_poems')}
              value={studiedPoems.length}
              colour="text-blue-500"
              bgColour="bg-blue-500/10"
            />
            <StatCard
              icon={Trophy}
              label={tx('toolkit.progress.label_quizzes')}
              value={quizHistory.length}
              colour="text-violet-500"
              bgColour="bg-violet-500/10"
            />
            <StatCard
              icon={Gamepad2}
              label={tx('toolkit.progress.label_games')}
              value={gameScores.length}
              colour="text-emerald-500"
              bgColour="bg-emerald-500/10"
            />
            <StatCard
              icon={FileEdit}
              label={tx('toolkit.progress.label_essays')}
              value={markingHistory.length}
              colour="text-amber-500"
              bgColour="bg-amber-500/10"
            />
            <StatCard
              icon={Flame}
              label={tx('toolkit.progress.label_streak')}
              value={streak}
              colour="text-orange-500"
              bgColour="bg-orange-500/10"
            />
          </div>
        </section>

        {/* ── Grade Predictor ────────────────────────────────────── */}
        <section id="grade-predictor">
          <h2 className="font-serif text-xl font-medium mb-4">
            {tx('toolkit.progress.grade_predictor')}
          </h2>
          {allScores.length > 0 ? (
            <div className={`rounded-xl border p-8 text-center ${gradeBgColour(predictedGrade)}`}>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {tx('toolkit.progress.predicted_gcse')}
              </p>
              <p
                className={`font-serif text-6xl sm:text-7xl font-medium mb-2 ${gradeColour(predictedGrade)}`}
              >
                {predictedGrade}
              </p>
              <p className="text-muted-foreground">
                Based on {allScores.length} scores with an average of {avgScore}%
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {percentageToGCSEGradeLabel(avgScore)} equivalent -- take more quizzes for a more
                accurate prediction
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <Target className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                No score data yet. Take quizzes and play games to see your predicted grade.
              </p>
              <Link href="/toolkit/test-builder" className="btn-primary mt-4 inline-flex">
                Take a Quiz
              </Link>
            </div>
          )}
        </section>

        {/* ── Streak Tracker ─────────────────────────────────────── */}
        <section>
          <h2 className="font-serif text-xl font-medium mb-4">Streak Tracker</h2>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                  streak >= 7 ? 'bg-amber-500/10' : streak >= 3 ? 'bg-emerald-500/10' : 'bg-muted'
                }`}
              >
                <Flame
                  className={`h-8 w-8 ${
                    streak >= 7
                      ? 'text-amber-500'
                      : streak >= 3
                        ? 'text-emerald-500'
                        : 'text-muted-foreground'
                  }`}
                />
              </div>
              <div>
                <p className="font-serif text-3xl font-medium">
                  {streak} day{streak !== 1 ? 's' : ''}
                </p>
                <p className="text-sm text-muted-foreground">
                  {streak >= 7
                    ? 'Amazing streak! Keep it going!'
                    : streak >= 3
                      ? 'Good consistency! Push for a week!'
                      : streak >= 1
                        ? 'You are building a habit. Come back tomorrow!'
                        : 'Start studying today to begin your streak.'}
                </p>
              </div>
            </div>
            {/* Simple streak dots for last 7 days */}
            <div className="mt-4 flex gap-1.5">
              {Array.from({ length: 7 }).map((_, i) => {
                const day = new Date()
                day.setDate(day.getDate() - (6 - i))
                const dayStr = day.toISOString().slice(0, 10)
                const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                const label = labels[day.getDay() === 0 ? 6 : day.getDay() - 1]

                // Check if this day is within the streak
                const isActive = i >= 7 - streak
                const isToday = i === 6

                return (
                  <div key={dayStr} className="flex-1 text-center">
                    <div
                      className={`h-3 rounded-full mb-1 ${
                        isActive ? 'bg-primary' : isToday ? 'bg-primary/30' : 'bg-border'
                      }`}
                    />
                    <span className="text-[10px] font-mono text-muted-foreground">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Topic Breakdown ────────────────────────────────────── */}
        {topicBreakdown.length > 0 && (
          <section>
            <h2 className="font-serif text-xl font-medium mb-4">Topic Breakdown</h2>
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft space-y-4">
              {topicBreakdown.slice(0, 10).map((topic) => (
                <ProgressBar
                  key={topic.name}
                  label={`${topic.name} (${topic.count} quiz${topic.count !== 1 ? 'zes' : ''})`}
                  value={topic.avgScore}
                  max={100}
                  colour={
                    topic.avgScore >= 80
                      ? 'bg-emerald-500'
                      : topic.avgScore >= 60
                        ? 'bg-amber-500'
                        : 'bg-red-500'
                  }
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Strengths & Weaknesses ─────────────────────────────── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Strengths */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              Strengths
            </h2>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 space-y-3">
              {strengths.length > 0 ? (
                strengths.map((t) => (
                  <div key={t.name} className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">{t.name}</span>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs font-mono">
                      {t.avgScore}%
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Score 80%+ on a topic to see it here.
                </p>
              )}
            </div>
          </section>

          {/* Weaknesses */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Areas to Improve
            </h2>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-3">
              {weaknesses.length > 0 ? (
                weaknesses.map((t) => (
                  <div key={t.name} className="flex items-center justify-between">
                    <span className="text-sm text-red-700">{t.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-xs font-mono">
                        {t.avgScore}%
                      </Badge>
                      <Link
                        href="/toolkit/test-builder"
                        className="text-xs text-red-600 hover:text-red-700 underline flex items-center gap-0.5"
                      >
                        Improve this <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Topics scoring below 60% will appear here with improvement links.
                </p>
              )}
            </div>
          </section>
        </div>

        {/* ── Study History ───────────────────────────────────────── */}
        <section>
          <h2 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            Study History
          </h2>
          {studyHistory.length > 0 ? (
            <div className="rounded-xl border border-border bg-card shadow-soft divide-y divide-border">
              {studyHistory.map((item, i) => {
                const dateObj = new Date(item.date)
                const dateStr = dateObj.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
                const timeStr = dateObj.toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })

                const iconMap: Record<string, typeof BookOpen> = {
                  quiz: Trophy,
                  poem: BookOpen,
                  game: Gamepad2,
                  essay: FileEdit,
                }
                const Icon = iconMap[item.type] || BookOpen

                return (
                  <div key={i} className="flex items-center gap-3 px-5 py-3">
                    <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{item.label}</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {dateStr} at {timeStr}
                      </p>
                    </div>
                    {item.score !== undefined && (
                      <Badge
                        variant="outline"
                        className={`text-xs font-mono shrink-0 ${
                          item.score >= 80
                            ? 'border-emerald-500/30 text-emerald-600'
                            : item.score >= 60
                              ? 'border-amber-500/30 text-amber-600'
                              : 'border-red-500/30 text-red-600'
                        }`}
                      >
                        {item.score}%
                      </Badge>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-muted-foreground">
                Your study activity will appear here as you use the platform.
              </p>
            </div>
          )}
        </section>

        {/* ── AI-Suggested Focus ──────────────────────────────────── */}
        <section>
          <h2 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Suggested Focus
          </h2>
          <div className="space-y-3">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-primary/15 bg-primary/5 p-5 flex items-start gap-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                  <span className="text-xs font-mono font-bold text-primary">{i + 1}</span>
                </div>
                <p
                  className="text-sm text-foreground/80 leading-relaxed"
                  // P2 (Cycle 3): `s` is built from localStorage quiz history
                  // (user's own data, so cross-user XSS is not possible) but
                  // wrapping in DOMPurify costs nothing and blocks self-XSS
                  // if the localStorage schema ever widens to include other
                  // fields under user control.
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      s.replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-foreground font-semibold">$1</strong>',
                      ),
                      { USE_PROFILES: { html: true } },
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
