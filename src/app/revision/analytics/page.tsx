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
// user's session, so RLS already scopes rows to the current user - we
// still pass `user_id` explicitly for clarity and to keep the helper
// composable with service-role callers.
//
// Auth gate: anon users are redirected to /auth/login?redirect=<self>.
// The rest of /revision/* stays public (see src/app/revision/layout.tsx
// - no auth check there).
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { AlertCircle, ArrowRight, BarChart3, Target, TrendingUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { t } from '@/lib/i18n/t'
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

// Never cached - always reflect the user's latest responses.
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

async function PageHero({ snapshot }: { snapshot: LearnerSnapshot }) {
  const subtitle = snapshot.hasData
    ? (snapshot.progress.totalAnswered === 1
        ? await t('rev.misc.analytics.subtitle_data_one')
        : await t('rev.misc.analytics.subtitle_data')
      ).replace('{count}', snapshot.progress.totalAnswered.toLocaleString())
    : await t('rev.misc.analytics.subtitle_empty')

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
          {await t('rev.misc.analytics.badge')}
        </Badge>
        <h1
          id="analytics-hero-heading"
          className="text-display-sm font-heading text-foreground sm:text-display"
        >
          {await t('rev.misc.analytics.title')}
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  )
}

// ─── Empty state ────────────────────────────────────────────────────────────

async function EmptyState() {
  return (
    <Card>
      <CardContent className="py-12">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <BarChart3 className="size-6 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-heading-md font-heading text-foreground">
            {await t('rev.misc.analytics.empty_heading')}
          </h2>
          <p className="mt-2 text-body-sm text-muted-foreground">
            {await t('rev.misc.analytics.empty_body')}
          </p>
          <Button className="mt-5" render={<Link href="/revision/quiz" />}>
            {await t('rev.misc.analytics.empty_cta')}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Progress snapshot ──────────────────────────────────────────────────────

async function ProgressSnapshot({ snapshot }: { snapshot: LearnerSnapshot }) {
  const { progress } = snapshot

  const overAnswers = async (n: number) =>
    (n === 1
      ? await t('rev.misc.analytics.tile.over_answers_one')
      : await t('rev.misc.analytics.tile.over_answers')
    ).replace('{count}', String(n))

  const tiles: Array<{
    label: string
    value: string
    sub: string
    accent: string
    bg: string
    icon: typeof TrendingUp
  }> = [
    {
      label: await t('rev.misc.analytics.tile.answered'),
      value: progress.totalAnswered.toLocaleString(),
      sub: (await t('rev.misc.analytics.tile.answered_sub')).replace(
        '{count}',
        progress.totalCorrect.toLocaleString(),
      ),
      accent: 'text-blue-400',
      bg: 'bg-blue-500/10',
      icon: BarChart3,
    },
    {
      label: await t('rev.misc.analytics.tile.correct_7d'),
      value: progress.answeredLast7Days > 0 ? `${progress.correctRateLast7Days}%` : '--',
      sub:
        progress.answeredLast7Days > 0
          ? await overAnswers(progress.answeredLast7Days)
          : await t('rev.misc.analytics.tile.no_activity_week'),
      accent: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      icon: TrendingUp,
    },
    {
      label: await t('rev.misc.analytics.tile.correct_30d'),
      value: progress.answeredLast30Days > 0 ? `${progress.correctRateLast30Days}%` : '--',
      sub:
        progress.answeredLast30Days > 0
          ? await overAnswers(progress.answeredLast30Days)
          : await t('rev.misc.analytics.tile.no_activity_month'),
      accent: 'text-violet-400',
      bg: 'bg-violet-500/10',
      icon: TrendingUp,
    },
    {
      label: await t('rev.misc.analytics.tile.streak'),
      value: `${progress.currentStreakDays}d`,
      sub:
        progress.longestStreakDays > progress.currentStreakDays
          ? (await t('rev.misc.analytics.tile.streak_best')).replace(
              '{count}',
              String(progress.longestStreakDays),
            )
          : progress.currentStreakDays > 0
            ? await t('rev.misc.analytics.tile.streak_keep')
            : await t('rev.misc.analytics.tile.streak_start'),
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
          {await t('rev.misc.analytics.snapshot_heading')}
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-border"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-xs font-medium uppercase tracking-wider ${tile.accent}/80`}>
                  {tile.label}
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground tabular-nums">
                  {tile.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{tile.sub}</p>
              </div>
              <div className={`flex size-10 items-center justify-center rounded-xl ${tile.bg}`}>
                <tile.icon className={`size-5 ${tile.accent}`} aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Weak topics card ───────────────────────────────────────────────────────

async function WeakTopicsCard({ snapshot }: { snapshot: LearnerSnapshot }) {
  const topics = snapshot.weakTopics
  const xOfY = await t('rev.misc.analytics.weak.x_of_y')

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="size-4 text-clay-600" aria-hidden="true" />
          <CardTitle>{await t('rev.misc.analytics.weak.title')}</CardTitle>
        </div>
        <CardDescription>{await t('rev.misc.analytics.weak.desc')}</CardDescription>
      </CardHeader>
      <CardContent>
        {topics.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border/60 bg-background/40 p-5 text-center text-body-sm text-muted-foreground">
            {await t('rev.misc.analytics.weak.empty')}
          </div>
        ) : (
          <ul className="space-y-3">
            {topics.map((topic) => (
              <li
                key={topic.topicKey}
                className="flex items-center justify-between gap-3 rounded-lg border border-border/40 bg-background/50 px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {topic.topicLabel}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {xOfY
                      .replace('{correct}', String(topic.totalCorrect))
                      .replace('{total}', String(topic.totalAnswered))}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="min-w-[3.5rem] text-right text-sm font-semibold tabular-nums text-foreground">
                    {topic.correctRate}%
                  </div>
                  <TopicProgressBar percentage={topic.correctRate} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

async function TopicProgressBar({ percentage }: { percentage: number }) {
  const band =
    percentage >= 80
      ? 'bg-emerald-400'
      : percentage >= 60
        ? 'bg-primary'
        : percentage >= 40
          ? 'bg-clay-600'
          : 'bg-red-400'
  const ariaLabel = (await t('rev.misc.analytics.weak.pct_correct_aria')).replace(
    '{pct}',
    String(percentage),
  )
  return (
    <div className="h-2 w-20 overflow-hidden rounded-full bg-border/60" aria-label={ariaLabel}>
      <div
        className={`h-full ${band} transition-all`}
        style={{ width: `${Math.max(2, Math.min(100, percentage))}%` }}
      />
    </div>
  )
}

// ─── Suggestions card ───────────────────────────────────────────────────────

async function SuggestionsCard({ snapshot }: { snapshot: LearnerSnapshot }) {
  const suggestions = snapshot.suggestions
  const reviseNow = await t('rev.misc.analytics.suggest.revise_now')
  const rateAria = await t('rev.misc.analytics.suggest.rate_aria')
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="size-4 text-emerald-400" aria-hidden="true" />
          <CardTitle>{await t('rev.misc.analytics.suggest.title')}</CardTitle>
        </div>
        <CardDescription>{await t('rev.misc.analytics.suggest.desc')}</CardDescription>
      </CardHeader>
      <CardContent>
        {suggestions.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border/60 bg-background/40 p-5 text-center text-body-sm text-muted-foreground">
            {await t('rev.misc.analytics.suggest.empty')}
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
                    aria-label={rateAria.replace('{pct}', String(s.correctRate))}
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
                  {reviseNow}
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

const DIFFICULTY_CLASSNAME: Record<DifficultyBand, string> = {
  easy: 'bg-emerald-400',
  medium: 'bg-primary',
  hard: 'bg-clay-600',
  'very-hard': 'bg-red-400',
}

const DIFFICULTY_LABEL_KEY: Record<DifficultyBand, string> = {
  easy: 'rev.misc.analytics.diff.easy',
  medium: 'rev.misc.analytics.diff.medium',
  hard: 'rev.misc.analytics.diff.hard',
  'very-hard': 'rev.misc.analytics.diff.very_hard',
}

const DIFFICULTY_HINT_KEY: Record<DifficultyBand, string> = {
  easy: 'rev.misc.analytics.diff.easy_hint',
  medium: 'rev.misc.analytics.diff.medium_hint',
  hard: 'rev.misc.analytics.diff.hard_hint',
  'very-hard': 'rev.misc.analytics.diff.very_hard_hint',
}

async function DifficultyDistributionCard({ snapshot }: { snapshot: LearnerSnapshot }) {
  const total = snapshot.progress.totalAnswered
  const buckets = snapshot.difficultyDistribution

  // Resolve all difficulty labels/hints up-front (locale read once).
  const labels: Record<string, string> = {}
  const hints: Record<string, string> = {}
  for (const b of buckets) {
    labels[b.difficulty] = await t(DIFFICULTY_LABEL_KEY[b.difficulty])
    hints[b.difficulty] = await t(DIFFICULTY_HINT_KEY[b.difficulty])
  }
  const answersPct = await t('rev.misc.analytics.diff.answers_pct')
  const answersPctOne = await t('rev.misc.analytics.diff.answers_pct_one')

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart3 className="size-4 text-primary" aria-hidden="true" />
          <CardTitle>{await t('rev.misc.analytics.diff.title')}</CardTitle>
        </div>
        <CardDescription>{await t('rev.misc.analytics.diff.desc')}</CardDescription>
      </CardHeader>
      <CardContent>
        {total === 0 ? (
          <p className="text-sm text-muted-foreground">
            {await t('rev.misc.analytics.diff.no_answers')}
          </p>
        ) : (
          <>
            {/* Stacked bar */}
            <div
              role="img"
              aria-label={await t('rev.misc.analytics.diff.bar_aria')}
              className="flex h-6 w-full overflow-hidden rounded-full border border-border/40 bg-border/40"
            >
              {buckets.map((b) => {
                if (b.count === 0) return null
                return (
                  <div
                    key={b.difficulty}
                    className={`${DIFFICULTY_CLASSNAME[b.difficulty]} h-full`}
                    style={{ width: `${b.percentage}%` }}
                    title={`${labels[b.difficulty]}: ${b.count} (${b.percentage}%)`}
                  />
                )
              })}
            </div>
            {/* Legend */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {buckets.map((b) => (
                <div
                  key={b.difficulty}
                  className="rounded-lg border border-border/40 bg-background/50 p-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-3 shrink-0 rounded-full ${DIFFICULTY_CLASSNAME[b.difficulty]}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-foreground">
                      {labels[b.difficulty]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs tabular-nums text-muted-foreground">
                    {(b.count === 1 ? answersPctOne : answersPct)
                      .replace('{count}', String(b.count))
                      .replace('{pct}', String(b.percentage))}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {hints[b.difficulty]}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
