'use client'

import { useEffect, useState } from 'react'
import { BookOpen, Flame, Trophy, TrendingUp } from 'lucide-react'
import {
  LS_KEYS,
  lsGet,
  gradeColour,
  type QuizHistoryEntry,
  type StudiedPoem,
  type GameScoreEntry,
} from './toolkit-types'
import { percentageToGCSEGrade } from '@/lib/grades'
import { useT } from '@/lib/i18n/use-t'

// ─── Progress Preview ──────────────────────────────────────────────────────
// A compact row of stat cards shown at the top of the Toolkit Hub.
// Reads from localStorage and renders client-side.
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
      if (diffDays === 1) {
        streak++
      } else {
        break
      }
    }
    return streak
  } catch {
    return 0
  }
}

interface StatCardProps {
  icon: typeof BookOpen
  label: string
  value: string | number
  colour: string
  bgColour: string
  sub?: string
}

function StatCard({ icon: Icon, label, value, colour, bgColour, sub }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bgColour}`}>
        <Icon className={`h-5 w-5 ${colour}`} />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
        <p className="text-xl font-serif font-medium">{value}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
  )
}

export function ToolkitProgressPreview() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [quizzes, setQuizzes] = useState(0)
  const [avgScore, setAvgScore] = useState(0)
  const [poems, setPoems] = useState(0)
  const [streak, setStreak] = useState(0)
  const [predictedGrade, setPredictedGrade] = useState(0)

  useEffect(() => {
    setMounted(true)
    const quizHistory = lsGet<QuizHistoryEntry[]>(LS_KEYS.quizHistory, [])
    const studiedPoems = lsGet<StudiedPoem[]>(LS_KEYS.studiedPoems, [])
    const gameScores = lsGet<GameScoreEntry[]>(LS_KEYS.gameScores, [])

    setQuizzes(quizHistory.length)
    setPoems(studiedPoems.length)
    setStreak(calculateStreak())

    // Calculate average score and predicted grade
    const allScores = [...quizHistory.map((q) => q.score), ...gameScores.map((g) => g.score)]
    if (allScores.length > 0) {
      const avg = allScores.reduce((a, b) => a + b, 0) / allScores.length
      setAvgScore(Math.round(avg))
      setPredictedGrade(percentageToGCSEGrade(avg))
    }
  }, [])

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-[88px] rounded-xl border border-border bg-card animate-pulse" />
        ))}
      </div>
    )
  }

  const dayLabel = streak === 1 ? t('toolkit.progress.day') : t('toolkit.progress.days')
  const gradeLabel = t('toolkit.progress.grade_prefix')
  const avgSuffix = t('toolkit.progress.avg_suffix')

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <StatCard
        icon={Trophy}
        label={t('toolkit.progress.quizzes_taken')}
        value={quizzes}
        colour="text-violet-500"
        bgColour="bg-violet-500/10"
      />
      <StatCard
        icon={BookOpen}
        label={t('toolkit.progress.poems_studied')}
        value={poems}
        colour="text-blue-500"
        bgColour="bg-blue-500/10"
      />
      <StatCard
        icon={Flame}
        label={t('toolkit.progress.study_streak')}
        value={`${streak} ${dayLabel}`}
        colour="text-amber-500"
        bgColour="bg-amber-500/10"
      />
      <StatCard
        icon={TrendingUp}
        label={t('toolkit.progress.predicted_grade')}
        value={predictedGrade > 0 ? `${gradeLabel} ${predictedGrade}` : '--'}
        colour={predictedGrade > 0 ? gradeColour(predictedGrade) : 'text-muted-foreground'}
        bgColour={
          predictedGrade >= 7
            ? 'bg-emerald-500/10'
            : predictedGrade >= 4
              ? 'bg-amber-500/10'
              : 'bg-muted'
        }
        sub={avgScore > 0 ? `${avgScore}% ${avgSuffix}` : t('toolkit.progress.take_quizzes_hint')}
      />
    </div>
  )
}
