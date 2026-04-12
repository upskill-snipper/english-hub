'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  Gamepad2,
  GraduationCap,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { WeeklyActivityChart, type WeeklyActivityPoint } from '@/components/parent/WeeklyActivityChart'

// ── LocalStorage keys ─────────────────────────────────────────────────────────
const STUDIED_POEMS_KEY = 'english-hub-studied-poems'
const GAME_SCORES_KEY = 'english-hub-game-scores'
const QUIZ_HISTORY_KEY = 'english-hub-quiz-history'
const REVISION_PROGRESS_KEY = 'english-hub-revision-progress'
const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

interface QuizResultLike {
  date?: string
  mode?: string
  score?: number
  total?: number
  percentage?: number
  grade?: string
}

interface GameScoreLike {
  date?: string
  game?: string
  score?: number
}

interface RevisionProgressLike {
  visited?: string[]
  percentage?: number
}

interface ParentAccountLike {
  childName?: string
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function formatDate(iso?: string): string {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

// ── Reading age estimation (simple mock heuristic) ────────────────────────────
function estimateReadingAge(averageScore: number | null, poemCount: number): number {
  // [P2:data] TODO: Supabase — use real reading age assessments
  const base = 10
  const scoreBoost = averageScore != null ? (averageScore / 100) * 5 : 0
  const poemBoost = Math.min(poemCount * 0.1, 2)
  return Math.round((base + scoreBoost + poemBoost) * 10) / 10
}

interface ProgressState {
  poems: string[]
  quizzes: QuizResultLike[]
  games: GameScoreLike[]
  revisionPercent: number
  averageScore: number | null
  highestScore: number | null
  weekly: WeeklyActivityPoint[]
  childName: string
}

function buildProgressState(): ProgressState {
  const poems = safeParse<string[]>(localStorage.getItem(STUDIED_POEMS_KEY)) ?? []
  const quizzes = safeParse<QuizResultLike[]>(localStorage.getItem(QUIZ_HISTORY_KEY)) ?? []
  const games = safeParse<GameScoreLike[]>(localStorage.getItem(GAME_SCORES_KEY)) ?? []
  const revision = safeParse<RevisionProgressLike>(localStorage.getItem(REVISION_PROGRESS_KEY)) ?? {}
  const account = safeParse<ParentAccountLike>(localStorage.getItem(PARENT_ACCOUNT_KEY)) ?? {}

  const scores = quizzes.map((q) => q.percentage ?? 0).filter((n) => n > 0)
  const averageScore = scores.length
    ? Math.round(scores.reduce((acc, n) => acc + n, 0) / scores.length)
    : null
  const highestScore = scores.length ? Math.max(...scores) : null

  // Build 8-week timeline
  const now = new Date()
  const weekly: WeeklyActivityPoint[] = []
  for (let i = 7; i >= 0; i--) {
    const weekStart = new Date(now)
    weekStart.setDate(now.getDate() - i * 7 - now.getDay())
    weekStart.setHours(0, 0, 0, 0)
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekStart.getDate() + 7)

    const inWeek = (iso?: string) => {
      if (!iso) return false
      const d = new Date(iso)
      return d >= weekStart && d < weekEnd
    }
    const weekQuizzes = quizzes.filter((q) => inWeek(q.date)).length
    const weekGames = games.filter((g) => inWeek(g.date)).length
    weekly.push({
      label: weekStart.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      minutes: weekQuizzes * 10 + weekGames * 5,
    })
  }

  return {
    poems,
    quizzes,
    games,
    revisionPercent: revision.percentage ?? 0,
    averageScore,
    highestScore,
    weekly,
    childName: account.childName ?? 'Your child',
  }
}

export default function ParentProgressPage() {
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<ProgressState | null>(null)

  useEffect(() => {
    setMounted(true)
    setState(buildProgressState())
  }, [])

  const readingAge = useMemo(() => {
    if (!state) return 0
    return estimateReadingAge(state.averageScore, state.poems.length)
  }, [state])

  const recentQuizzes = state?.quizzes.slice(0, 8) ?? []

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Detailed Progress
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mounted && state
              ? `A complete breakdown of ${state.childName.split(' ')[0]}'s learning.`
              : 'Loading progress...'}
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">Read-only view</Badge>
      </div>

      {/* Headline stats */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Poems</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {state?.poems.length ?? 0}
            </p>
            <p className="text-xs text-muted-foreground">studied</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Gamepad2 className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Games</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {state?.games.length ?? 0}
            </p>
            <p className="text-xs text-muted-foreground">played</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Quizzes</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {state?.quizzes.length ?? 0}
            </p>
            <p className="text-xs text-muted-foreground">completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Reading age</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {state ? `${readingAge}` : '—'}
            </p>
            <p className="text-xs text-muted-foreground">years (est.)</p>
          </CardContent>
        </Card>
      </div>

      {/* Week-by-week chart */}
      <WeeklyActivityChart
        data={state?.weekly ?? []}
        title="Week-by-week activity"
        description="Learning time over the last 8 weeks"
      />

      {/* Quiz scores list */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Recent quiz scores</CardTitle>
              <CardDescription>
                Average {state?.averageScore ?? 0}% · Highest {state?.highestScore ?? 0}%
              </CardDescription>
            </div>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          {recentQuizzes.length === 0 ? (
            <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              {mounted ? 'No quizzes completed yet.' : 'Loading...'}
            </p>
          ) : (
            <ul className="space-y-3">
              {recentQuizzes.map((quiz, index) => {
                const pct = quiz.percentage ?? 0
                return (
                  <li
                    key={`${quiz.date ?? 'q'}-${index}`}
                    className="space-y-2 rounded-lg border border-border p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {quiz.mode ?? 'Quiz'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(quiz.date)}
                          {quiz.grade ? ` · Grade ${quiz.grade}` : ''}
                          {quiz.score != null && quiz.total != null
                            ? ` · ${quiz.score}/${quiz.total}`
                            : ''}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-foreground">
                        {pct}%
                      </span>
                    </div>
                    <Progress value={pct} className="h-1.5" />
                  </li>
                )
              })}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Poems studied */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Poems studied</CardTitle>
          <CardDescription>
            Poems your child has opened in the revision area
          </CardDescription>
        </CardHeader>
        <CardContent>
          {state && state.poems.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {state.poems.map((slug) => {
                const label = slug
                  .split('-')
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join(' ')
                return (
                  <Badge key={slug} variant="secondary" className="text-xs">
                    {label}
                  </Badge>
                )
              })}
            </div>
          ) : (
            <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              {mounted ? 'No poems studied yet.' : 'Loading...'}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Games played */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Games played</CardTitle>
          <CardDescription>Recent results from learning games</CardDescription>
        </CardHeader>
        <CardContent>
          {state && state.games.length > 0 ? (
            <ul className="space-y-2">
              {state.games.slice(0, 10).map((game, index) => (
                <li
                  key={`${game.date ?? 'g'}-${index}`}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Gamepad2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {game.game ?? 'Learning game'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(game.date)}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {game.score != null ? game.score : '—'}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              {mounted ? 'No games played yet.' : 'Loading...'}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Overall revision progress */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Overall revision progress</CardTitle>
          <CardDescription>Sections visited across the revision hub</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Hub coverage</span>
            <span className="text-sm font-bold text-foreground">
              {state?.revisionPercent ?? 0}%
            </span>
          </div>
          <Progress value={state?.revisionPercent ?? 0} className="h-2" />
          <Separator />
          <p className="text-xs text-muted-foreground">
            Tracks which revision sections (Poetry, Set Texts, Language, Flashcards,
            Exam Technique) have been opened at least once.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
