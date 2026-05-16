'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, FileText, Gamepad2, Sparkles, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { ChildProgressCard } from '@/components/parent/ChildProgressCard'
import { CEFRProgressCard } from '@/components/parent/CEFRProgressCard'
import {
  WeeklyActivityChart,
  type WeeklyActivityPoint,
} from '@/components/parent/WeeklyActivityChart'

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
  durationSeconds?: number
}

interface ParentAccountLike {
  name?: string
  childName?: string
}

interface RevisionProgressLike {
  visited?: string[]
  percentage?: number
}

interface ActivityRow {
  id: string
  type: 'quiz' | 'poem' | 'game'
  subject: string | null
  meta: string
  date: string | null
}

interface DashboardState {
  poemCount: number
  quizCount: number
  gameCount: number
  averageQuizScore: number | null
  revisionPercent: number
  recentActivity: ActivityRow[]
  weekly: WeeklyActivityPoint[]
  totalMinutesThisWeek: number
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function formatRelativeDate(
  iso: string | null,
  labels: { today: string; yesterday: string; daysAgo: string },
): string {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  const diffMs = Date.now() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays <= 0) return labels.today
  if (diffDays === 1) return labels.yesterday
  if (diffDays < 7) return `${diffDays} ${labels.daysAgo}`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

function buildDashboardState(): DashboardState {
  const poems = safeParse<string[]>(localStorage.getItem(STUDIED_POEMS_KEY)) ?? []
  const quizzes = safeParse<QuizResultLike[]>(localStorage.getItem(QUIZ_HISTORY_KEY)) ?? []
  const games = safeParse<GameScoreLike[]>(localStorage.getItem(GAME_SCORES_KEY)) ?? []
  const revision =
    safeParse<RevisionProgressLike>(localStorage.getItem(REVISION_PROGRESS_KEY)) ?? {}

  const recentQuizzes = quizzes.slice(0, 10)
  const averageQuizScore = recentQuizzes.length
    ? Math.round(
        recentQuizzes.reduce((acc, q) => acc + (q.percentage ?? 0), 0) / recentQuizzes.length,
      )
    : null

  // Build recent activity from all three sources
  const activities: ActivityRow[] = []

  recentQuizzes.slice(0, 5).forEach((q, index) => {
    activities.push({
      id: `quiz-${index}-${q.date ?? index}`,
      type: 'quiz',
      subject: q.mode ?? null,
      meta: q.percentage != null ? `${q.percentage}%${q.grade ? ` · ${q.grade}` : ''}` : '',
      date: q.date ?? null,
    })
  })

  games.slice(0, 5).forEach((g, index) => {
    activities.push({
      id: `game-${index}-${g.date ?? index}`,
      type: 'game',
      subject: g.game ?? null,
      meta: g.score != null ? String(g.score) : '',
      date: g.date ?? null,
    })
  })

  poems
    .slice(-5)
    .reverse()
    .forEach((slug, index) => {
      const friendly = slug
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ')
      activities.push({
        id: `poem-${index}-${slug}`,
        type: 'poem',
        subject: friendly,
        meta: '',
        date: null,
      })
    })

  // Sort by date descending; items without a date sink
  activities.sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Weekly activity: last 8 weeks, derived from quiz+game counts * rough minutes
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

    const weekQuizzes = recentQuizzes.filter((q) => inWeek(q.date)).length
    const weekGames = games.filter((g) => inWeek(g.date)).length
    // Rough estimate: each quiz ~10 min, each game ~5 min
    const minutes = weekQuizzes * 10 + weekGames * 5

    weekly.push({
      label: weekStart.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      minutes,
    })
  }

  const totalMinutesThisWeek = weekly[weekly.length - 1]?.minutes ?? 0

  return {
    poemCount: poems.length,
    quizCount: quizzes.length,
    gameCount: games.length,
    averageQuizScore,
    revisionPercent: revision.percentage ?? 0,
    recentActivity: activities.slice(0, 8),
    weekly,
    totalMinutesThisWeek,
  }
}

export default function ParentDashboardPage() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [account, setAccount] = useState<ParentAccountLike | null>(null)
  const [state, setState] = useState<DashboardState | null>(null)

  useEffect(() => {
    setMounted(true)
    // [P2:data] Supabase — fetch aggregates via server components/RPC
    setAccount(safeParse<ParentAccountLike>(localStorage.getItem(PARENT_ACCOUNT_KEY)))
    setState(buildDashboardState())
  }, [])

  const yourChildLabel = t('parent.your_child')
  const childName = account?.childName ?? yourChildLabel
  const firstName = useMemo(
    () => (childName === yourChildLabel ? yourChildLabel : childName.split(' ')[0]),
    [childName, yourChildLabel],
  )

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {t('parent.dashboard_title')}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mounted
              ? `${t('parent.dashboard_subtitle_prefix')} ${firstName} ${t('parent.dashboard_subtitle_suffix')}`
              : t('parent.loading_dashboard')}
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">
          {t('parent.read_only_view')}
        </Badge>
      </div>

      {/* Child progress card */}
      <ChildProgressCard
        name={childName}
        yearGroup="Year 10"
        school="The English Hub"
        workingAtGrade={
          state?.averageQuizScore != null
            ? Math.max(1, Math.min(9, Math.round(state.averageQuizScore / 11)))
            : undefined
        }
        predictedGrade={
          state?.averageQuizScore != null
            ? Math.max(1, Math.min(9, Math.round(state.averageQuizScore / 11) + 1))
            : undefined
        }
        targetGrade={7}
        overallProgress={state?.revisionPercent ?? 0}
        modulesCompleted={(state?.poemCount ?? 0) + (state?.quizCount ?? 0)}
        recentScoreAverage={state?.averageQuizScore ?? null}
      />

      {/* English level (CEFR placement) */}
      <CEFRProgressCard />

      {/* This week snapshot */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-foreground">{t('parent.this_week')}</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {state
                    ? `${Math.floor(state.totalMinutesThisWeek / 60)}h ${state.totalMinutesThisWeek % 60}m`
                    : '—'}
                </p>
                <p className="text-xs text-muted-foreground">{t('parent.time_spent')}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{state?.poemCount ?? 0}</p>
                <p className="text-xs text-muted-foreground">{t('parent.poems_studied')}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {state?.averageQuizScore != null ? `${state.averageQuizScore}%` : '—'}
                </p>
                <p className="text-xs text-muted-foreground">{t('parent.avg_quiz_score')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Weekly chart */}
      <WeeklyActivityChart
        data={state?.weekly ?? []}
        title={t('parent.last_8_weeks')}
        description={t('parent.last_8_weeks_desc')}
      />

      {/* Grades summary + recent activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{t('parent.grades_summary')}</CardTitle>
            <CardDescription>{t('parent.grades_summary_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t('parent.quizzes_taken')}</span>
              </div>
              <span className="text-sm font-bold text-foreground">{state?.quizCount ?? 0}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t('parent.average_score')}</span>
              </div>
              <span className="text-sm font-bold text-foreground">
                {state?.averageQuizScore != null ? `${state.averageQuizScore}%` : '—'}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t('parent.poems_studied')}</span>
              </div>
              <span className="text-sm font-bold text-foreground">{state?.poemCount ?? 0}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t('parent.games_played')}</span>
              </div>
              <span className="text-sm font-bold text-foreground">{state?.gameCount ?? 0}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{t('parent.recent_activity')}</CardTitle>
            <CardDescription>{`${t('parent.recent_activity_prefix')} ${firstName} ${t('parent.recent_activity_suffix')}`}</CardDescription>
          </CardHeader>
          <CardContent>
            {state && state.recentActivity.length > 0 ? (
              <ul className="space-y-3">
                {state.recentActivity.map((row) => {
                  const title =
                    row.type === 'quiz'
                      ? row.subject
                        ? `${t('parent.quiz_prefix')} ${row.subject}`
                        : t('parent.quiz_completed')
                      : row.type === 'game'
                        ? row.subject
                          ? `${t('parent.game_prefix')} ${row.subject}`
                          : t('parent.played_a_game')
                        : `${t('parent.studied_prefix')} "${row.subject}"`
                  const metaLabel =
                    row.type === 'quiz'
                      ? row.meta || t('parent.completed')
                      : row.type === 'game'
                        ? row.meta
                          ? `${t('parent.score_prefix')} ${row.meta}`
                          : t('parent.completed')
                        : t('parent.poetry_revision')
                  return (
                    <li
                      key={row.id}
                      className="flex items-start gap-3 rounded-lg border border-border p-3"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        {row.type === 'quiz' ? (
                          <Sparkles className="h-4 w-4 text-primary" />
                        ) : row.type === 'game' ? (
                          <Gamepad2 className="h-4 w-4 text-primary" />
                        ) : (
                          <BookOpen className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground">{metaLabel}</p>
                      </div>
                      {row.date && (
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {formatRelativeDate(row.date, {
                            today: t('parent.today'),
                            yesterday: t('parent.yesterday'),
                            daysAgo: t('parent.days_ago'),
                          })}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                {mounted ? t('parent.no_activity_yet') : t('parent.loading_activity')}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          variant="outline"
          size="lg"
          className="h-auto justify-between py-4"
          render={<Link href="/parent/progress" />}
        >
          <span className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-left">
              <span className="block text-sm font-semibold text-foreground">
                {t('parent.view_detailed_progress')}
              </span>
              <span className="block text-xs text-muted-foreground">
                {t('parent.view_detailed_progress_desc')}
              </span>
            </span>
          </span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-auto justify-between py-4"
          render={<Link href="/parent/reports" />}
        >
          <span className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-left">
              <span className="block text-sm font-semibold text-foreground">
                {t('parent.weekly_email_reports')}
              </span>
              <span className="block text-xs text-muted-foreground">
                {t('parent.weekly_email_reports_desc')}
              </span>
            </span>
          </span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}
