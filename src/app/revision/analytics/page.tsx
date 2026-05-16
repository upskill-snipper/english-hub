// ─── /revision/analytics ────────────────────────────────────────────────────
//
// Personal learning analytics for the signed-in student. This is the
// "mirror" of the teacher-dashboard widget at /school/dashboard:
//   - Snapshot: what you've done, how well you're doing, how often
//   - Weak topics: where your correct-rate is lowest
//   - Suggestions: the three highest-leverage topics to revise next,
//     with deep-links into /revision/*
//   - Difficulty distribution: the spread of easy/medium/hard/very-hard
//     questions you've actually answered
//
// Data is sourced from `public.quiz_responses` via the helper at
// `src/lib/analytics/learner.ts`. The query runs under the authenticated
// user's session, so RLS already scopes rows to the current user — we
// still pass `user_id` explicitly for clarity and to keep the helper
// composable with service-role callers.
//
// Auth gate: anon users are redirected to /auth/login?redirect=<self>.
// The rest of /revision/* stays public (see src/app/revision/layout.tsx
// — no auth check there).
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { AlertCircle, ArrowRight, BarChart3, Target, TrendingUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import {
  getLearnerSnapshot,
  type DifficultyBand,
  type LearnerSnapshot,
} from '@/lib/analytics/learner'

export const metadata = {
  openGraph: {
    title: 'Your Analytics -- The English Hub',
    description:
      'See your own quiz performance, weakest topics, and a suggested next-step study plan based on real answers.',
  },
  alternates: { canonical: 'https://theenglishhub.app/revision/analytics' },
  title: 'Your Analytics',
  description:
    'See your own quiz performance, weakest topics, and a suggested next-step study plan based on real answers.',
}

// Never cached — always reflect the user's latest responses.
export const dynamic = 'force-dynamic'

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function RevisionAnalyticsPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login?redirect=/revision/analytics')
  }

  const snapshot = await getLearnerSnapshot(supabase, user.id)

  return (
    <div className="space-y-8 pb-16">
      <PageHero snapshot={snapshot} />

      {!snapshot.hasData ? (
        <EmptyState />
      ) : (
        <>
          <ProgressSnapshot snapshot={snapshot} />
          <div className="grid gap-6 lg:grid-cols-2">
            <WeakTopicsCard snapshot={snapshot} />
            <SuggestionsCard snapshot={snapshot} />
          </div>
          <DifficultyDistributionCard snapshot={snapshot} />
        </>
      )}
    </div>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function PageHero({ snapshot }: { snapshot: LearnerSnapshot }) {
  const subtitle = snapshot.hasData
    ? `Based on ${snapshot.progress.totalAnswered.toLocaleString()} real answer${snapshot.progress.totalAnswered === 1 ? '' : 's'} you've given across quizzes.`
    : 'Your personal performance dashboard -- powered by the quizzes you take on this site.'

  return (
    <section
      aria-labelledby="analytics-hero-heading"
      className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl"
      />

      <div className="relative">
        <Badge variant="secondary" className="mb-4">
          <BarChart3 className="mr-1 size-3" aria-hidden="true" />
          Personal analytics
        </Badge>
        <h1
          id="analytics-hero-heading"
          className="text-display-sm font-heading text-foreground sm:text-display"
        >
          Your Analytics
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  )
}

// ─── Empty state ────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <Card>
      <CardContent className="py-12">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <BarChart3 className="size-6 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">No data yet</h2>
          <p className="mt-2 text-body-sm text-muted-foreground">
            Take your first quiz at{' '}
            <Link href="/revision/quiz" className="text-primary hover:underline">
              /revision/quiz
            </Link>{' '}
            and come back. Your weak spots, progress trend, and suggested next-steps will appear
            here once you've answered a handful of questions.
          </p>
          <Button className="mt-5" render={<Link href="/revision/quiz" />}>
            Start your first quiz
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Progress snapshot ──────────────────────────────────────────────────────

function ProgressSnapshot({ snapshot }: { snapshot: LearnerSnapshot }) {
  const { progress } = snapshot

  const tiles: Array<{
    label: string
    value: string
    sub: string
    accent: string
    bg: string
    icon: typeof TrendingUp
  }> = [
    {
      label: 'Questions answered',
      value: progress.totalAnswered.toLocaleString(),
      sub: `${progress.totalCorrect.toLocaleString()} correct overall`,
      accent: 'text-blue-400',
      bg: 'bg-blue-500/10',
      icon: BarChart3,
    },
    {
      label: 'Correct last 7 days',
      value: progress.answeredLast7Days > 0 ? `${progress.correctRateLast7Days}%` : '--',
      sub:
        progress.answeredLast7Days > 0
          ? `over ${progress.answeredLast7Days} answer${progress.answeredLast7Days === 1 ? '' : 's'}`
          : 'no activity this week',
      accent: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      icon: TrendingUp,
    },
    {
      label: 'Correct last 30 days',
      value: progress.answeredLast30Days > 0 ? `${progress.correctRateLast30Days}%` : '--',
      sub:
        progress.answeredLast30Days > 0
          ? `over ${progress.answeredLast30Days} answer${progress.answeredLast30Days === 1 ? '' : 's'}`
          : 'no activity this month',
      accent: 'text-violet-400',
      bg: 'bg-violet-500/10',
      icon: TrendingUp,
    },
    {
      label: 'Answering streak',
      value: `${progress.currentStreakDays}d`,
      sub:
        progress.longestStreakDays > progress.currentStreakDays
          ? `best: ${progress.longestStreakDays}d`
          : progress.currentStreakDays > 0
            ? 'keep it going!'
            : 'answer a question today to start',
      accent: 'text-clay-600',
      bg: 'bg-amber-500/10',
      icon: Target,
    },
  ]

  return (
    <section aria-labelledby="progress-snapshot-heading">
      <div className="mb-4 flex items-center gap-3">
        <TrendingUp className="size-5 text-primary" aria-hidden="true" />
        <h2 id="progress-snapshot-heading" className="text-heading-lg font-heading text-foreground">
          Your progress snapshot
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-border"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-xs font-medium uppercase tracking-wider ${t.accent}/80`}>
                  {t.label}
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground tabular-nums">
                  {t.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{t.sub}</p>
              </div>
              <div className={`flex size-10 items-center justify-center rounded-xl ${t.bg}`}>
                <t.icon className={`size-5 ${t.accent}`} aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Weak topics card ───────────────────────────────────────────────────────

function WeakTopicsCard({ snapshot }: { snapshot: LearnerSnapshot }) {
  const topics = snapshot.weakTopics

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="size-4 text-clay-600" aria-hidden="true" />
          <CardTitle>Your weakest topics</CardTitle>
        </div>
        <CardDescription>
          Topics where your correct-rate is lowest, based on at least 2 attempts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {topics.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border/60 bg-background/40 p-5 text-center text-body-sm text-muted-foreground">
            Keep answering quiz questions -- we'll surface weak spots once you have at least 2
            attempts in a topic.
          </div>
        ) : (
          <ul className="space-y-3">
            {topics.map((t) => (
              <li
                key={t.topicKey}
                className="flex items-center justify-between gap-3 rounded-lg border border-border/40 bg-background/50 px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{t.topicLabel}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {t.totalCorrect} of {t.totalAnswered} correct
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="min-w-[3.5rem] text-right text-sm font-semibold tabular-nums text-foreground">
                    {t.correctRate}%
                  </div>
                  <TopicProgressBar percentage={t.correctRate} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

function TopicProgressBar({ percentage }: { percentage: number }) {
  const band =
    percentage >= 80
      ? 'bg-emerald-400'
      : percentage >= 60
        ? 'bg-primary'
        : percentage >= 40
          ? 'bg-clay-600'
          : 'bg-red-400'
  return (
    <div
      className="h-2 w-20 overflow-hidden rounded-full bg-border/60"
      aria-label={`${percentage}% correct`}
    >
      <div
        className={`h-full ${band} transition-all`}
        style={{ width: `${Math.max(2, Math.min(100, percentage))}%` }}
      />
    </div>
  )
}

// ─── Suggestions card ───────────────────────────────────────────────────────

function SuggestionsCard({ snapshot }: { snapshot: LearnerSnapshot }) {
  const suggestions = snapshot.suggestions
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="size-4 text-emerald-400" aria-hidden="true" />
          <CardTitle>Suggested next study</CardTitle>
        </div>
        <CardDescription>
          The three topics with the biggest potential for improvement, with a direct link to the
          matching revision section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {suggestions.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border/60 bg-background/40 p-5 text-center text-body-sm text-muted-foreground">
            Once you've answered a few more questions, we'll recommend a next-step study path here.
          </div>
        ) : (
          <ul className="space-y-3">
            {suggestions.map((s) => (
              <li
                key={s.topicKey}
                className="rounded-lg border border-border/40 bg-background/50 p-4 transition-colors hover:border-border"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{s.topicLabel}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.reason}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="shrink-0 tabular-nums"
                    aria-label={`Current correct rate ${s.correctRate}%`}
                  >
                    {s.correctRate}%
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3"
                  render={<Link href={s.href} />}
                >
                  Revise this now
                  <ArrowRight className="size-3.5" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

// ─── Difficulty distribution ────────────────────────────────────────────────

const DIFFICULTY_META: Record<DifficultyBand, { label: string; className: string; hint: string }> =
  {
    easy: {
      label: 'Easy',
      className: 'bg-emerald-400',
      hint: 'You get these right ~80% of the time.',
    },
    medium: {
      label: 'Medium',
      className: 'bg-primary',
      hint: '50-79% correct -- room to grow.',
    },
    hard: {
      label: 'Hard',
      className: 'bg-clay-600',
      hint: '25-49% correct -- focus area.',
    },
    'very-hard': {
      label: 'Very hard',
      className: 'bg-red-400',
      hint: 'Below 25% correct -- needs dedicated revision.',
    },
  }

function DifficultyDistributionCard({ snapshot }: { snapshot: LearnerSnapshot }) {
  const total = snapshot.progress.totalAnswered
  const buckets = snapshot.difficultyDistribution

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart3 className="size-4 text-primary" aria-hidden="true" />
          <CardTitle>Overall difficulty distribution</CardTitle>
        </div>
        <CardDescription>
          How the questions you've answered break down by how hard they've been for you personally.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {total === 0 ? (
          <p className="text-sm text-muted-foreground">No answers yet.</p>
        ) : (
          <>
            {/* Stacked bar */}
            <div
              role="img"
              aria-label="Stacked bar of difficulty distribution"
              className="flex h-6 w-full overflow-hidden rounded-full border border-border/40 bg-border/40"
            >
              {buckets.map((b) => {
                const meta = DIFFICULTY_META[b.difficulty]
                if (b.count === 0) return null
                return (
                  <div
                    key={b.difficulty}
                    className={`${meta.className} h-full`}
                    style={{ width: `${b.percentage}%` }}
                    title={`${meta.label}: ${b.count} (${b.percentage}%)`}
                  />
                )
              })}
            </div>
            {/* Legend */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {buckets.map((b) => {
                const meta = DIFFICULTY_META[b.difficulty]
                return (
                  <div
                    key={b.difficulty}
                    className="rounded-lg border border-border/40 bg-background/50 p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-3 shrink-0 rounded-full ${meta.className}`}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-foreground">{meta.label}</span>
                    </div>
                    <p className="mt-1.5 text-xs tabular-nums text-foreground">
                      {b.count} answer{b.count === 1 ? '' : 's'}{' '}
                      <span className="text-muted-foreground">({b.percentage}%)</span>
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {meta.hint}
                    </p>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
