'use client'

/**
 * LearningProfileView - renders the learner's game-derived learning
 * profile: time invested, strand mastery, named strengths, focus areas,
 * and one-tap "next step" actions.
 *
 * `variant="full"`  → the dashboard page (all sections).
 * `variant="compact"` → an embeddable summary card (totals + top focus).
 *
 * Client-only: the profile is built from localStorage so it works for
 * guests and offline, then syncs server-side via /api/progress/games.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Trophy,
  Target,
  Clock,
  TrendingUp,
  TrendingDown,
  Minus,
  Gamepad2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import {
  buildLearningProfile,
  formatDuration,
  CLASSIFICATION_LABEL,
  type LearningProfile,
  type Trend,
} from '@/lib/learning-profile/profile'

function TrendIcon({ trend }: { trend: Trend }) {
  if (trend === 'improving')
    return <TrendingUp className="size-3.5 text-emerald-500" aria-label="improving" />
  if (trend === 'declining')
    return <TrendingDown className="size-3.5 text-red-500" aria-label="declining" />
  return <Minus className="size-3.5 text-muted-foreground" aria-label="steady" />
}

function masteryBar(mastery: number) {
  const tone = mastery >= 80 ? 'bg-emerald-500' : mastery >= 60 ? 'bg-amber-500' : 'bg-red-500'
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-border">
      <div
        className={`h-full rounded-full ${tone} transition-all`}
        style={{ width: `${Math.min(100, Math.max(2, mastery))}%` }}
      />
    </div>
  )
}

const EMPTY_STATE = (
  <div className="rounded-xl border border-border/60 bg-card p-6 text-center">
    <Gamepad2 className="mx-auto size-7 text-muted-foreground" />
    <h3 className="mt-3 text-base font-semibold text-foreground">
      Your learning profile is empty - for now
    </h3>
    <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
      Play a few games and we’ll track your time and accuracy to map your strengths, spot what to
      focus on next, and point you at the right practice.
    </p>
    <Link
      href="/games"
      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      <Gamepad2 className="size-4" /> Play a game
    </Link>
  </div>
)

export default function LearningProfileView({
  variant = 'full',
}: {
  variant?: 'full' | 'compact'
}) {
  const [profile, setProfile] = useState<LearningProfile | null>(null)

  useEffect(() => {
    // Build on the client after mount (localStorage access).
    setProfile(buildLearningProfile())
  }, [])

  if (!profile) {
    return (
      <div className="rounded-xl border border-border/60 bg-card p-6">
        <div className="h-4 w-40 animate-pulse rounded bg-border" />
        <div className="mt-4 h-2 w-full animate-pulse rounded bg-border" />
        <div className="mt-2 h-2 w-2/3 animate-pulse rounded bg-border" />
      </div>
    )
  }

  if (!profile.hasData) return EMPTY_STATE

  const { totals, strands, strengths, focusAreas, nextSteps, skills } = profile

  const Totals = (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <Clock className="size-4 text-primary" />
        <p className="mt-2 text-xl font-bold text-foreground">
          {formatDuration(totals.totalTimeSeconds)}
        </p>
        <p className="text-xs text-muted-foreground">Time invested</p>
      </div>
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <Gamepad2 className="size-4 text-primary" />
        <p className="mt-2 text-xl font-bold text-foreground">{totals.totalAttempts}</p>
        <p className="text-xs text-muted-foreground">Rounds played</p>
      </div>
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <Trophy className="size-4 text-emerald-500" />
        <p className="mt-2 text-xl font-bold text-foreground">{strengths.length}</p>
        <p className="text-xs text-muted-foreground">Strengths</p>
      </div>
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <Target className="size-4 text-red-500" />
        <p className="mt-2 text-xl font-bold text-foreground">{focusAreas.length}</p>
        <p className="text-xs text-muted-foreground">To focus on</p>
      </div>
    </div>
  )

  const NextSteps =
    nextSteps.length > 0 ? (
      <div>
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Sparkles className="size-4 text-primary" /> What to focus on next
        </h3>
        <div className="space-y-3">
          {nextSteps.map((ns) => (
            <div key={ns.skill} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-foreground">{ns.label}</p>
                {ns.game && (
                  <Link
                    href={`/games/${ns.game.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Gamepad2 className="size-3.5" /> Play {ns.game.title}
                  </Link>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{ns.reason}</p>
              {ns.learnHref && (
                <Link
                  href={ns.learnHref}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Learn this skill <ArrowRight className="size-3" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null

  if (variant === 'compact') {
    return (
      <div className="space-y-4">
        {Totals}
        {nextSteps[0] && (
          <Link
            href={nextSteps[0].game ? `/games/${nextSteps[0].game.slug}` : '/dashboard/learning'}
            className="block rounded-xl border border-primary/30 bg-primary/[0.04] p-4 transition-colors hover:border-primary/50 hover:bg-primary/[0.07]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              Focus next
            </p>
            <p className="mt-1 font-semibold text-foreground">{nextSteps[0].label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{nextSteps[0].reason}</p>
          </Link>
        )}
        <Link
          href="/dashboard/learning"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          See your full learning profile <ArrowRight className="size-3.5" />
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {Totals}

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Mastery by area</h3>
        <div className="space-y-3">
          {strands.map((s) => (
            <div key={s.strand}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{s.label}</span>
                <span className="text-muted-foreground">
                  {s.mastery}% · {formatDuration(s.totalTimeSeconds)}
                </span>
              </div>
              {masteryBar(s.mastery)}
            </div>
          ))}
        </div>
      </div>

      {NextSteps}

      {strengths.length > 0 && (
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Trophy className="size-4 text-emerald-500" /> Your strengths
          </h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((s) => (
              <span
                key={s.skill}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
              >
                {s.label} · {s.mastery}%
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Every skill you’ve practised</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Skill
                </th>
                <th className="py-2 pr-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Mastery
                </th>
                <th className="py-2 pr-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Trend
                </th>
                <th className="py-2 pr-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Time
                </th>
                <th className="py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.skill} className="border-b border-border/50">
                  <td className="py-2 pr-3 text-foreground">{s.label}</td>
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="w-9 text-muted-foreground">{s.mastery}%</span>
                      <div className="w-24">{masteryBar(s.mastery)}</div>
                    </div>
                  </td>
                  <td className="py-2 pr-3">
                    <TrendIcon trend={s.trend} />
                  </td>
                  <td className="py-2 pr-3 text-muted-foreground">
                    {formatDuration(s.totalTimeSeconds)}
                  </td>
                  <td className="py-2 text-muted-foreground">
                    {CLASSIFICATION_LABEL[s.classification]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
