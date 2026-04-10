'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Calendar,
  ChevronRight,
  FileText,
  Gamepad2,
  Mail,
  Settings2,
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
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

// TODO: replace with Supabase — generate reports server-side and email via Resend

const STUDIED_POEMS_KEY = 'english-hub-studied-poems'
const GAME_SCORES_KEY = 'english-hub-game-scores'
const QUIZ_HISTORY_KEY = 'english-hub-quiz-history'
const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

interface QuizResultLike {
  date?: string
  mode?: string
  percentage?: number
  grade?: string
}

interface GameScoreLike {
  date?: string
  game?: string
  score?: number
}

interface ParentAccountLike {
  name?: string
  email?: string
  childName?: string
}

interface WeeklyReport {
  weekStartIso: string
  weekLabel: string
  poemsStudied: number
  quizzesCompleted: number
  averageScore: number | null
  gamesPlayed: number
  estimatedMinutes: number
  topQuiz: QuizResultLike | null
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function startOfWeek(date: Date): Date {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - d.getDay())
  return d
}

function formatWeekRange(startIso: string): string {
  const start = new Date(startIso)
  const end = new Date(start)
  end.setDate(end.getDate() + 6)
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return `${fmt(start)} – ${fmt(end)}`
}

function buildReports(): WeeklyReport[] {
  const poems = safeParse<string[]>(localStorage.getItem(STUDIED_POEMS_KEY)) ?? []
  const quizzes = safeParse<QuizResultLike[]>(localStorage.getItem(QUIZ_HISTORY_KEY)) ?? []
  const games = safeParse<GameScoreLike[]>(localStorage.getItem(GAME_SCORES_KEY)) ?? []

  // Build the last 4 weeks, newest first
  const reports: WeeklyReport[] = []
  for (let i = 0; i < 4; i++) {
    const weekStart = startOfWeek(new Date())
    weekStart.setDate(weekStart.getDate() - i * 7)
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekStart.getDate() + 7)

    const inWeek = (iso?: string) => {
      if (!iso) return false
      const d = new Date(iso)
      return d >= weekStart && d < weekEnd
    }

    const weekQuizzes = quizzes.filter((q) => inWeek(q.date))
    const weekGames = games.filter((g) => inWeek(g.date))
    const scores = weekQuizzes.map((q) => q.percentage ?? 0).filter((n) => n > 0)
    const averageScore = scores.length
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : null

    const topQuiz = weekQuizzes.reduce<QuizResultLike | null>((top, q) => {
      if (!top) return q
      return (q.percentage ?? 0) > (top.percentage ?? 0) ? q : top
    }, null)

    reports.push({
      weekStartIso: weekStart.toISOString(),
      weekLabel: formatWeekRange(weekStart.toISOString()),
      // For the latest week, also surface studied poem count as a proxy
      poemsStudied: i === 0 ? poems.length : 0,
      quizzesCompleted: weekQuizzes.length,
      averageScore,
      gamesPlayed: weekGames.length,
      estimatedMinutes: weekQuizzes.length * 10 + weekGames.length * 5,
      topQuiz,
    })
  }
  return reports
}

function formatMinutes(minutes: number): string {
  if (minutes <= 0) return '0m'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

export default function ParentReportsPage() {
  const [mounted, setMounted] = useState(false)
  const [account, setAccount] = useState<ParentAccountLike | null>(null)
  const [reports, setReports] = useState<WeeklyReport[]>([])
  const [selectedIso, setSelectedIso] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    setAccount(safeParse<ParentAccountLike>(localStorage.getItem(PARENT_ACCOUNT_KEY)))
    const built = buildReports()
    setReports(built)
    setSelectedIso(built[0]?.weekStartIso ?? null)
  }, [])

  const selected = useMemo(
    () => reports.find((r) => r.weekStartIso === selectedIso) ?? null,
    [reports, selectedIso]
  )

  const childName = account?.childName ?? 'your child'
  const firstName =
    childName === 'your child' ? 'your child' : childName.split(' ')[0]
  const parentName = account?.name ?? 'Parent'
  const parentEmail = account?.email ?? 'you@example.com'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Weekly Reports
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Preview the weekly email summaries we send to {parentEmail}.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/parent/settings" />}
        >
          <Settings2 className="h-4 w-4" />
          Notification settings
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Week list */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Past 4 weeks</CardTitle>
              <CardDescription>Select a week to preview its report</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {reports.map((report, index) => {
                const isSelected = report.weekStartIso === selectedIso
                return (
                  <button
                    key={report.weekStartIso}
                    type="button"
                    onClick={() => setSelectedIso(report.weekStartIso)}
                    className={
                      'flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left transition-colors ' +
                      (isSelected
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-border bg-card text-foreground hover:bg-accent')
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">
                          {report.weekLabel}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {index === 0 ? 'This week' : `${index} week${index === 1 ? '' : 's'} ago`}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </button>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Report preview */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="border-b border-border bg-muted/30 pb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                <span>Email preview</span>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">From:</span>{' '}
                  reports@theenglishhub.app
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">To:</span> {parentEmail}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Subject:</span>{' '}
                  {firstName}&apos;s weekly report &middot; {selected?.weekLabel ?? ''}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pt-6">
              {selected ? (
                <>
                  <div>
                    <p className="text-sm text-muted-foreground">Hi {parentName},</p>
                    <p className="mt-3 text-sm text-foreground">
                      Here&apos;s how {firstName} got on during{' '}
                      <strong>{selected.weekLabel}</strong> on The English Hub.
                    </p>
                  </div>

                  <Separator />

                  {/* Summary stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Time spent
                      </div>
                      <p className="mt-1 text-xl font-bold text-foreground">
                        {formatMinutes(selected.estimatedMinutes)}
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sparkles className="h-3.5 w-3.5" />
                        Avg quiz score
                      </div>
                      <p className="mt-1 text-xl font-bold text-foreground">
                        {selected.averageScore != null
                          ? `${selected.averageScore}%`
                          : '—'}
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="h-3.5 w-3.5" />
                        Poems studied
                      </div>
                      <p className="mt-1 text-xl font-bold text-foreground">
                        {selected.poemsStudied}
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Gamepad2 className="h-3.5 w-3.5" />
                        Games played
                      </div>
                      <p className="mt-1 text-xl font-bold text-foreground">
                        {selected.gamesPlayed}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Highlight */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Highlight of the week
                    </p>
                    {selected.topQuiz ? (
                      <div className="rounded-lg border border-primary/20 bg-primary/10 p-3">
                        <p className="text-sm font-semibold text-primary">
                          {selected.topQuiz.mode ?? 'Top quiz result'}
                        </p>
                        <p className="text-xs text-primary/80">
                          Scored {selected.topQuiz.percentage ?? 0}%
                          {selected.topQuiz.grade
                            ? ` (Grade ${selected.topQuiz.grade})`
                            : ''}
                        </p>
                      </div>
                    ) : (
                      <p className="rounded-lg border border-dashed border-border p-3 text-sm text-muted-foreground">
                        No quiz results this week yet.
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Suggested focus */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Suggested focus for next week
                    </p>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li className="flex items-start gap-2">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Review one poem from the AQA Power &amp; Conflict cluster.
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Complete a short quiz on unseen prose.
                      </li>
                      <li className="flex items-start gap-2">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Read for 20 minutes on three separate days.
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      This is a preview of the actual email we send every{' '}
                      <strong className="text-foreground">Sunday evening</strong>.
                    </p>
                    <Badge variant="secondary" className="text-xs">Preview</Badge>
                  </div>
                </>
              ) : (
                <p className="py-10 text-center text-sm text-muted-foreground">
                  {mounted ? 'Select a week to preview its report.' : 'Loading...'}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
