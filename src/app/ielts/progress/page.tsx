'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  ArrowLeft,
  ArrowRight,
  Target,
  AlertTriangle,
  Clock,
  Headphones,
  BookOpen,
  PenLine,
  Mic,
  TrendingUp,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'
import { buildIeltsProfile, getAttempts } from '@/lib/ielts/store'
import {
  IELTS_SKILLS,
  SKILL_META,
  type Band,
  type IeltsAttempt,
  type IeltsProfile,
  type IeltsSkill,
} from '@/lib/ielts/types'
import { bandColour, bandBgColour, bandLabel, bandTier } from '@/lib/ielts/bands'
import { BandChip } from '../_components/BandChip'

// ─── IELTS progress dashboard ──────────────────────────────────────────────
// The payoff of the loop. Reads the localStorage-backed profile + attempts
// (after mount, to stay hydration-safe like the GCSE toolkit dashboard) and
// shows overall band, per-skill bands, the weakest-skill callout, a
// dependency-free band-over-time view and a recent-attempts list. Empty state
// routes the learner to the diagnostic to seed their first data.
// ────────────────────────────────────────────────────────────────────────────

const SKILL_ICON: Record<IeltsSkill, typeof Headphones> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
}

// Solid accent for the trend bars + legend swatches. Kept as literal strings
// (not derived from SKILL_META.colour via .replace) so Tailwind's JIT always
// compiles them — these mirror the per-skill accents in SKILL_META.
const SKILL_BAR_BG: Record<IeltsSkill, string> = {
  listening: 'bg-sky-400',
  reading: 'bg-emerald-400',
  writing: 'bg-violet-400',
  speaking: 'bg-rose-400',
}

/** Format an ISO date for the attempts list — UK style, defensively. */
function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ── Band-over-time: lightweight inline bars (no chart library) ──────────────

function BandTrend({ attempts, ariaLabel }: { attempts: IeltsAttempt[]; ariaLabel: string }) {
  // Oldest → newest so the trend reads left-to-right.
  const series = useMemo(
    () =>
      [...attempts]
        .filter((a) => typeof a.band === 'number')
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [attempts],
  )

  if (series.length === 0) return null

  return (
    <div className="flex h-32 items-end gap-1.5" role="img" aria-label={ariaLabel}>
      {series.map((a) => {
        const band = a.band as Band
        // Bands run 0–9; give the shortest bars a visible floor.
        const heightPct = Math.max(8, (band / 9) * 100)
        const meta = SKILL_META[a.skill]
        return (
          <div
            key={a.id}
            className="group/bar flex flex-1 flex-col items-center justify-end gap-1"
            title={`${meta.label} · Band ${bandLabel(band)} · ${formatDate(a.date)}`}
          >
            <span className="font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover/bar:opacity-100">
              {bandLabel(band)}
            </span>
            <div
              className={cn('w-full rounded-t-sm transition-all', meta.bgColour)}
              style={{ height: `${heightPct}%` }}
            >
              <div className={cn('h-1 w-full rounded-t-sm', SKILL_BAR_BG[a.skill])} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function IeltsProgressPage() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [profile, setProfile] = useState<IeltsProfile | null>(null)
  const [attempts, setAttempts] = useState<IeltsAttempt[]>([])

  useEffect(() => {
    setMounted(true)
    setProfile(buildIeltsProfile())
    setAttempts(getAttempts())
  }, [])

  const recentAttempts = useMemo(() => attempts.slice(0, 12), [attempts])

  // ── Loading / pre-hydration skeleton ──────────────────────────────────────
  if (!mounted || !profile) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <ProgressHeader t={t} />
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="h-40 animate-pulse rounded-2xl border border-border bg-card" />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl border border-border bg-card" />
            ))}
          </div>
        </div>
      </main>
    )
  }

  // ── Empty state — no data yet ──────────────────────────────────────────────
  if (!profile.hasData) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <ProgressHeader t={t} />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-7 w-7 text-primary" aria-hidden />
            </span>
            <h2 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground">
              {t('ielts.progress.empty.title')}
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
              {t('ielts.progress.empty.body')}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 px-7 text-base"
                render={<Link href="/ielts/diagnostic" />}
              >
                {t('ielts.cta.start_diagnostic')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/ielts" />}
              >
                {t('ielts.progress.empty.explore')}
              </Button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const overall = profile.overallBand
  const weakest = profile.weakestSkill

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <ProgressHeader t={t} />

      <div className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6">
        {/* ── Overall band ─────────────────────────────────────────── */}
        <section>
          <div className={cn('rounded-2xl border p-8 text-center sm:p-10', bandBgColour(overall))}>
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {t('ielts.band.overall')}
            </p>
            <p
              className={cn(
                'mt-2 font-serif text-6xl font-medium sm:text-7xl',
                bandColour(overall),
              )}
            >
              {bandLabel(overall)}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{bandTier(overall)}</p>
            {overall === null ? (
              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-muted-foreground">
                {t('ielts.progress.overall.locked_lead')}{' '}
                {IELTS_SKILLS.filter((s) => profile.skills[s].band !== null).length}{' '}
                {t('ielts.progress.overall.locked_tail')}
              </p>
            ) : (
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                {t('ielts.estimate_note')}
              </p>
            )}
          </div>
        </section>

        {/* ── Per-skill bands ──────────────────────────────────────── */}
        <section>
          <h2 className="mb-4 font-serif text-xl font-medium">
            {t('ielts.progress.bands_by_skill')}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {IELTS_SKILLS.map((skill) => {
              const sb = profile.skills[skill]
              return (
                <Link key={skill} href={SKILL_META[skill].href} className="group/chip">
                  <BandChip
                    label={SKILL_META[skill].label}
                    short={SKILL_META[skill].short}
                    band={sb.band}
                    attempts={sb.attempts}
                    notAttemptedLabel={t('ielts.progress.chip.not_attempted')}
                    attemptOneLabel={t('ielts.progress.chip.attempt_one')}
                    attemptsOtherLabel={t('ielts.progress.chip.attempts_other')}
                    className="h-full group-hover/chip:border-foreground/20"
                  />
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Weakest-skill callout ────────────────────────────────── */}
        {weakest ? (
          <section>
            <div className="flex flex-col gap-4 rounded-2xl border border-clay-500/25 bg-clay-500/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clay-500/10">
                  <AlertTriangle className="h-5 w-5 text-clay-500" aria-hidden />
                </span>
                <div>
                  <p className="font-serif text-base font-semibold text-foreground">
                    {t('ielts.progress.weakest.title_lead')} {SKILL_META[weakest].label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t('ielts.progress.weakest.body_lead')}
                    {bandLabel(profile.skills[weakest].band)}
                    {t('ielts.progress.weakest.body_tail')}
                  </p>
                </div>
              </div>
              <Button className="shrink-0 gap-1.5" render={<Link href="/ielts/plan" />}>
                {t('ielts.cta.view_plan')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </section>
        ) : null}

        {/* ── Band over time ───────────────────────────────────────── */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-medium">
            <TrendingUp className="h-5 w-5 text-muted-foreground" aria-hidden />
            {t('ielts.progress.trend.heading')}
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            {attempts.length >= 2 ? (
              <>
                <BandTrend attempts={attempts} ariaLabel={t('ielts.progress.trend.aria')} />
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {IELTS_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <span
                        className={cn('inline-block h-2.5 w-2.5 rounded-sm', SKILL_BAR_BG[skill])}
                        aria-hidden
                      />
                      {SKILL_META[skill].label}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">{t('ielts.progress.trend.empty')}</p>
            )}
          </div>
        </section>

        {/* ── Recent attempts ──────────────────────────────────────── */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-serif text-xl font-medium">
            <Clock className="h-5 w-5 text-muted-foreground" aria-hidden />
            {t('ielts.progress.recent.heading')}
          </h2>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
            {recentAttempts.map((a) => {
              const meta = SKILL_META[a.skill]
              const Icon = SKILL_ICON[a.skill]
              return (
                <div key={a.id} className="flex items-center gap-3 px-5 py-3.5">
                  <span
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                      meta.bgColour,
                    )}
                  >
                    <Icon className={cn('h-4 w-4', meta.colour)} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{meta.label}</p>
                    <p className="font-mono text-xs text-muted-foreground">{formatDate(a.date)}</p>
                  </div>
                  <Badge variant="outline" className={cn('shrink-0 font-mono', bandColour(a.band))}>
                    {t('ielts.band')} {bandLabel(a.band)}
                  </Badge>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

// ── Shared header (used by skeleton, empty + populated states) ──────────────

function ProgressHeader({ t }: { t: (key: string) => string }) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link
          href="/ielts"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('ielts.nav')}
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <BarChart3 className="h-6 w-6 text-emerald-500" aria-hidden />
          </span>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t('ielts.progress.header.title')}
            </h1>
            <p className="text-sm text-muted-foreground">{t('ielts.progress.header.subtitle')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
