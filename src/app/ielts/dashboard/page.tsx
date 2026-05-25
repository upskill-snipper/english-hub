'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Clock,
  Dumbbell,
  Flag,
  Flame,
  Headphones,
  LayoutDashboard,
  Map,
  Mic,
  PenLine,
  Play,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'

import {
  buildIeltsProfile,
  daysUntilExam,
  getAttempts,
  getCompletedLessons,
  getGoals,
} from '@/lib/ielts/store'
import { levelMeta } from '@/lib/ielts/curriculum'
import { ALL_LESSONS, lessonsForSkill, LESSON_COUNT } from '@/lib/ielts/lessons'
import { HARDEST_SKILL, COMMON_MISTAKES, SECTION_FACTS } from '@/lib/ielts/exam-facts'
import {
  SKILL_META,
  IELTS_SKILLS,
  type Band,
  type IeltsAttempt,
  type IeltsProfile,
  type IeltsSkill,
} from '@/lib/ielts/types'
import { bandColour, bandBgColour, bandLabel, bandTier } from '@/lib/ielts/bands'
import type { Lesson } from '@/lib/ielts/curriculum'
import type { IeltsGoals } from '@/lib/ielts/store'

// ─── My IELTS Dashboard — the signed-in learner home ───────────────────────
// Mirrors the GCSE "Your Hub" (/revision) + /dashboard experience for the IELTS
// readiness program. Reads the localStorage-backed IELTS store AFTER mount (a
// hydration-safe `mounted` guard, exactly like /ielts/progress and the GCSE
// toolkit dashboards) so there is never any localStorage access at module scope
// or during SSR. Everything routes back into the existing IELTS surface:
// learn (lessons), per-skill practice, the planner, the plan and mocks.
//
// COLD START: a brand-new learner has no attempts (profile.hasData === false)
// and therefore no measured weakest skill. Rather than show an empty
// "recommended" lens, we steer them to WRITING via HARDEST_SKILL — Writing is
// the lowest-scoring module for virtually every nationality and lowest of all
// for Gulf test-takers, so it is the highest-leverage place to begin. Once they
// have data, the same lens switches to their actual weakest skill.
// ────────────────────────────────────────────────────────────────────────────

const SKILL_ICON: Record<IeltsSkill, LucideIcon> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
}

const PRACTICE_HREF: Record<IeltsSkill, string> = {
  listening: '/ielts/listening',
  reading: '/ielts/reading',
  writing: '/ielts/writing',
  speaking: '/ielts/speaking',
}

/** A lesson lives at /ielts/learn/<skill>/<slug> (see curriculum.ts). */
function lessonHref(lesson: Lesson): string {
  return `/ielts/learn/${lesson.skill}/${lesson.slug}`
}

/** Format an ISO date for the attempts list — UK style, defensively. */
function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ─── Study streak ───────────────────────────────────────────────────────────
// Reads the SAME `english-hub-streak-dates` key the IELTS store stamps on every
// practice/lesson/goal action (store.touchStreak), so IELTS activity counts
// toward the streak. Logic mirrors the GCSE toolkit progress dashboard exactly.
function calculateStreak(): number {
  if (typeof window === 'undefined') return 0
  const raw = window.localStorage.getItem('english-hub-streak-dates')
  if (!raw) return 0
  try {
    const dates: string[] = JSON.parse(raw)
    const days = dates.map((d) => new Date(d).toISOString().slice(0, 10))
    const unique = Array.from(new Set(days)).sort((a, b) => (a < b ? 1 : -1))
    if (unique.length === 0) return 0
    const today = new Date().toISOString().slice(0, 10)
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10)
    if (unique[0] !== today && unique[0] !== yesterday) return 0
    let streak = 1
    for (let i = 1; i < unique.length; i++) {
      const prev = new Date(unique[i - 1])
      const curr = new Date(unique[i])
      const diffDays = Math.round((prev.getTime() - curr.getTime()) / 86_400_000)
      if (diffDays === 1) streak++
      else break
    }
    return streak
  } catch {
    return 0
  }
}

// ─── "What to study next" model (weakest-first) ─────────────────────────────
// Ranks the four skills weakest-first so the prioritised list and the
// recommended lens agree. A measured low band is most urgent; an unmeasured
// skill comes next (still worth a baseline); an on/above-target skill sinks.
interface RankedSkill {
  skill: IeltsSkill
  band: Band | null
  gap: number // target - band (0 when unknown or already met)
  weight: number // lower = more urgent
}

function rankSkills(profile: IeltsProfile, target: Band | null): RankedSkill[] {
  const rows: RankedSkill[] = IELTS_SKILLS.map((skill) => {
    const band = profile.skills[skill]?.band ?? null
    const gap = band === null || target === null ? 0 : Math.max(0, target - band)
    const weight = band === null ? 0 : gap > 0 ? -gap : 1
    return { skill, band, gap, weight }
  })
  return rows.sort((a, b) => a.weight - b.weight)
}

export default function IeltsDashboardPage() {
  const [mounted, setMounted] = useState(false)
  const [profile, setProfile] = useState<IeltsProfile | null>(null)
  const [goals, setGoalsState] = useState<IeltsGoals>({})
  const [attempts, setAttempts] = useState<IeltsAttempt[]>([])
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([])
  const [daysLeft, setDaysLeft] = useState<number | null>(null)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    setMounted(true)
    setProfile(buildIeltsProfile())
    setGoalsState(getGoals())
    setAttempts(getAttempts())
    setCompletedLessonIds(getCompletedLessons())
    setDaysLeft(daysUntilExam())
    setStreak(calculateStreak())
  }, [])

  // ── Derived data (all from the resolved store snapshot) ──────────────────

  const completedSet = useMemo(() => new Set(completedLessonIds), [completedLessonIds])

  /** First lesson the learner has not completed — drives "Continue learning". */
  const nextLesson = useMemo(
    () => ALL_LESSONS.find((l) => !completedSet.has(l.id)) ?? null,
    [completedSet],
  )

  const lessonsDone = useMemo(
    () => ALL_LESSONS.filter((l) => completedSet.has(l.id)).length,
    [completedSet],
  )

  /** Skills with activity (≥1 lesson done OR ≥1 attempt) but not yet finished. */
  const inProgress = useMemo(() => {
    if (!profile)
      return [] as {
        skill: IeltsSkill
        lessonsDone: number
        lessonsTotal: number
        band: Band | null
      }[]
    return IELTS_SKILLS.map((skill) => {
      const lessonsTotal = lessonsForSkill(skill).length
      const skLessonsDone = lessonsForSkill(skill).filter((l) => completedSet.has(l.id)).length
      const band = profile.skills[skill]?.band ?? null
      const started = skLessonsDone > 0 || (profile.skills[skill]?.attempts ?? 0) > 0
      const finished = lessonsTotal > 0 && skLessonsDone >= lessonsTotal
      return { skill, lessonsDone: skLessonsDone, lessonsTotal, band, started, finished }
    })
      .filter((row) => row.started && !row.finished)
      .map(({ skill, lessonsDone: d, lessonsTotal, band }) => ({
        skill,
        lessonsDone: d,
        lessonsTotal,
        band,
      }))
  }, [profile, completedSet])

  const targetBand = goals.targetBand ?? null
  const overall = profile?.overallBand ?? null

  /**
   * The cold-start steer. When there is NO data yet there is no measured
   * weakest skill, so we recommend WRITING (HARDEST_SKILL). Once data exists,
   * we use the profile's actual weakest skill.
   */
  const hasData = profile?.hasData ?? false
  const recommendedSkill: IeltsSkill = hasData
    ? (profile?.weakestSkill ?? HARDEST_SKILL)
    : HARDEST_SKILL

  const ranked = useMemo(
    () => (profile ? rankSkills(profile, targetBand) : []),
    [profile, targetBand],
  )

  const recentAttempts = useMemo(() => attempts.slice(0, 8), [attempts])

  // ── Pre-hydration / loading skeleton ─────────────────────────────────────
  if (!mounted || !profile) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <DashboardHeader />
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
          <div className="h-44 animate-pulse rounded-2xl border border-border bg-card" />
          <div className="grid gap-4 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-2xl border border-border bg-card"
              />
            ))}
          </div>
        </div>
      </main>
    )
  }

  const levelLabel = goals.level ? levelMeta(goals.level).label : null

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 pb-16 sm:px-6">
        {/* ── HERO: target · predicted · countdown · streak ─────────────── */}
        <section
          aria-labelledby="ielts-dashboard-heading"
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.05] p-6 sm:p-8"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
          />
          <PanelEyebrow>My IELTS Dashboard</PanelEyebrow>
          <h1
            id="ielts-dashboard-heading"
            className="mt-2 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {hasData ? 'Here’s where you stand today.' : 'Welcome — let’s build your IELTS plan.'}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {hasData
              ? 'Your predicted band, exam countdown and what to study next — all in one place. Keep your weakest skill moving and the overall band follows.'
              : 'Take the placement test or set your goal and we’ll turn it into a focused, weakest-first study plan.'}
          </p>

          {/* Headline stat pills */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {/* Target band */}
            <Link
              href="/ielts/planner"
              className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3.5 py-1.5 text-xs transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/[0.05]"
            >
              <Target className="size-3.5 text-emerald-500" aria-hidden />
              <span className="text-muted-foreground">Target</span>
              <span className="font-semibold text-foreground">
                {targetBand !== null ? `Band ${bandLabel(targetBand)}` : 'Set a goal'}
              </span>
              {targetBand === null && (
                <ArrowRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              )}
            </Link>

            {/* Predicted / overall band */}
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs',
                bandBgColour(overall),
              )}
            >
              <TrendingUp className={cn('size-3.5', bandColour(overall))} aria-hidden />
              <span className="text-muted-foreground">Predicted</span>
              <span className={cn('font-semibold', bandColour(overall))}>
                {overall !== null ? `Band ${bandLabel(overall)}` : 'Not yet predicted'}
              </span>
            </span>

            {/* Exam countdown */}
            {daysLeft !== null ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3.5 py-1.5 text-xs">
                <CalendarDays className="size-3.5 text-primary" aria-hidden />
                <span className="font-semibold text-foreground">
                  {daysLeft === 0
                    ? 'Exam day is here'
                    : `${daysLeft} day${daysLeft === 1 ? '' : 's'} to your exam`}
                </span>
              </span>
            ) : (
              <Link
                href="/ielts/planner"
                className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3.5 py-1.5 text-xs transition-colors hover:border-primary/40 hover:bg-primary/[0.05]"
              >
                <CalendarDays className="size-3.5 text-primary" aria-hidden />
                <span className="font-semibold text-foreground">Set your exam date</span>
                <ArrowRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}

            {/* Study streak */}
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3.5 py-1.5 text-xs">
              <Flame
                className={cn('size-3.5', streak >= 3 ? 'text-amber-500' : 'text-muted-foreground')}
                aria-hidden
              />
              <span className="font-semibold text-foreground">
                {streak > 0 ? `${streak}-day streak` : 'Start your streak today'}
              </span>
            </span>

            {/* Current level (if chosen) + tier of the predicted band */}
            {levelLabel && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3.5 py-1.5 text-xs">
                <BarChart3 className="size-3.5 text-cyan-500" aria-hidden />
                <span className="text-muted-foreground">Level</span>
                <span className="font-semibold text-foreground">{levelLabel}</span>
              </span>
            )}
          </div>

          {overall !== null && (
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              {bandTier(overall)} · predicted bands are estimates from your practice, not a
              guarantee.
            </p>
          )}
        </section>

        {/* ── QUICK ACTIONS ─────────────────────────────────────────────── */}
        <section
          aria-label="Quick actions"
          className="flex flex-col gap-2 sm:flex-row sm:flex-wrap"
        >
          <Button
            size="lg"
            className="gap-2"
            render={<Link href={nextLesson ? lessonHref(nextLesson) : '/ielts/learn'} />}
          >
            <Play className="size-4" aria-hidden />
            {lessonsDone === 0 ? 'Start learning' : 'Continue learning'}
            <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            render={<Link href="/ielts/mock" />}
          >
            <ClipboardCheck className="size-4" aria-hidden />
            Take a mock
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            render={<Link href="/ielts/planner" />}
          >
            <Map className="size-4" aria-hidden />
            Study plan
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            render={<Link href={PRACTICE_HREF[recommendedSkill]} />}
          >
            <Dumbbell className="size-4" aria-hidden />
            Practise a skill
          </Button>
        </section>

        {/* ── EMPTY STATE (brand-new learner) ──────────────────────────── */}
        {!hasData && (
          <section
            aria-labelledby="ielts-empty-heading"
            className="rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.05] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary"
                >
                  <Sparkles className="size-6" />
                </span>
                <div>
                  <h2
                    id="ielts-empty-heading"
                    className="font-serif text-xl font-semibold text-foreground"
                  >
                    No practice yet — start here
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Take the quick placement test to estimate your bands, or set your target band
                    and exam date and we’ll build the schedule around it. Not sure where to begin?{' '}
                    <span className="font-medium text-foreground">Writing</span> is the most common
                    weak spot — see the recommendation below.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button size="lg" className="gap-2" render={<Link href="/ielts/diagnostic" />}>
                  Take the placement test
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
                <Button variant="outline" size="lg" render={<Link href="/ielts/planner" />}>
                  Set goals
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* ── 3-LENS GRID (In progress · Recommended next · Per-skill) ──── */}
        <section aria-label="Your IELTS overview" className="grid gap-4 lg:grid-cols-3">
          {/* Lens 1 — In progress */}
          <GlassPanel accent="primary" className="p-5">
            <PanelEyebrow>In progress</PanelEyebrow>
            <h2 className="mt-1 flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <Clock className="size-4 text-primary" aria-hidden />
              Pick up where you left off
            </h2>

            <ul className="mt-4 space-y-2">
              {inProgress.length === 0 && (
                <li className="rounded-lg border border-dashed border-border/50 px-3 py-3 text-xs text-muted-foreground">
                  Nothing in progress yet — start a lesson or take the placement test to begin.
                </li>
              )}
              {inProgress.map((row) => {
                const Icon = SKILL_ICON[row.skill]
                const meta = SKILL_META[row.skill]
                // Deep-link to the skill's first incomplete lesson — there is no
                // /ielts/learn/<skill> index route, only the hub + per-lesson pages.
                const nextForSkill = lessonsForSkill(row.skill).find((l) => !completedSet.has(l.id))
                const href = nextForSkill ? lessonHref(nextForSkill) : '/ielts/learn'
                return (
                  <li key={row.skill}>
                    <Link
                      href={href}
                      className="group flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 px-3 py-2 transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                    >
                      <span
                        className={cn(
                          'flex size-7 shrink-0 items-center justify-center rounded-md',
                          meta.bgColour,
                        )}
                      >
                        <Icon className={cn('size-3.5', meta.colour)} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                          {meta.label}
                        </span>
                        <span className="block truncate text-[0.7rem] text-muted-foreground">
                          {row.lessonsTotal > 0
                            ? `${row.lessonsDone} of ${row.lessonsTotal} lessons`
                            : 'In progress'}
                          {row.band !== null ? ` · Band ${bandLabel(row.band)}` : ''}
                        </span>
                      </span>
                      <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Link
              href="/ielts/progress"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-1.5"
            >
              View progress <ArrowRight className="size-3" aria-hidden />
            </Link>
          </GlassPanel>

          {/* Lens 2 — Recommended next (weakest skill, or Writing-first cold start) */}
          <GlassPanel accent="clay" className="p-5">
            <PanelEyebrow>Recommended next</PanelEyebrow>
            <h2 className="mt-1 flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <Sparkles className="size-4 text-clay-600" aria-hidden />
              {hasData ? 'Your highest-leverage focus' : 'A strong place to start'}
            </h2>

            <RecommendedNext
              skill={recommendedSkill}
              band={hasData ? (profile.skills[recommendedSkill]?.band ?? null) : null}
              isColdStart={!hasData}
            />
          </GlassPanel>

          {/* Lens 3 — Per-skill band chips */}
          <GlassPanel accent="teal" className="p-5">
            <PanelEyebrow>Your bands</PanelEyebrow>
            <h2 className="mt-1 flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <BarChart3 className="size-4 text-teal-500" aria-hidden />
              Band by skill
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {IELTS_SKILLS.map((skill) => {
                const sb = profile.skills[skill]
                const Icon = SKILL_ICON[skill]
                return (
                  <Link
                    key={skill}
                    href={PRACTICE_HREF[skill]}
                    className={cn(
                      'group flex flex-col gap-1 rounded-lg border p-3 transition-colors',
                      bandBgColour(sb.band),
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <Icon className={cn('size-3.5', SKILL_META[skill].colour)} aria-hidden />
                      <span className="truncate font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                        {SKILL_META[skill].label}
                      </span>
                    </span>
                    <span
                      className={cn(
                        'font-serif text-xl font-medium leading-none',
                        bandColour(sb.band),
                      )}
                    >
                      {bandLabel(sb.band)}
                    </span>
                  </Link>
                )
              })}
            </div>

            <Link
              href="/ielts/progress"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-600 transition-all hover:gap-1.5"
            >
              Full progress <ArrowRight className="size-3" aria-hidden />
            </Link>
          </GlassPanel>
        </section>

        {/* ── WHAT TO STUDY NEXT (prioritised, weakest-first) ───────────── */}
        <section aria-labelledby="study-next-heading">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2
              id="study-next-heading"
              className="flex items-center gap-2 font-serif text-xl font-medium text-foreground"
            >
              <Flag className="size-5 text-muted-foreground" aria-hidden />
              What to study next
            </h2>
            <div className="flex items-center gap-3">
              <Link
                href="/ielts/plan"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-1.5"
              >
                Full plan <ArrowUpRight className="size-3" aria-hidden />
              </Link>
              <Link
                href="/ielts/planner"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Dated schedule
              </Link>
            </div>
          </div>

          <ol className="space-y-3">
            {ranked.map((row, i) => {
              const Icon = SKILL_ICON[row.skill]
              const meta = SKILL_META[row.skill]
              const firstLesson = lessonsForSkill(row.skill).find((l) => !completedSet.has(l.id))
              return (
                <li
                  key={row.skill}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-foreground/[0.06] font-mono text-xs font-semibold text-muted-foreground">
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        'flex size-9 shrink-0 items-center justify-center rounded-lg',
                        meta.bgColour,
                      )}
                    >
                      <Icon className={cn('size-4', meta.colour)} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">
                        {meta.label}
                        {i === 0 && (
                          <Badge
                            variant="default"
                            className="ml-2 align-middle text-[0.6rem] uppercase tracking-wider"
                          >
                            Start here
                          </Badge>
                        )}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {studyNextReason(row, targetBand)}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 pl-10 sm:pl-0">
                    {firstLesson && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5"
                        render={<Link href={lessonHref(firstLesson)} />}
                      >
                        <BookOpen className="size-3.5" aria-hidden />
                        Learn
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="gap-1.5"
                      render={<Link href={PRACTICE_HREF[row.skill]} />}
                    >
                      <Dumbbell className="size-3.5" aria-hidden />
                      Practise
                    </Button>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* ── RECENTLY STUDIED (recent attempts, newest first) ──────────── */}
        <section aria-labelledby="recent-heading">
          <h2
            id="recent-heading"
            className="mb-4 flex items-center gap-2 font-serif text-xl font-medium text-foreground"
          >
            <Clock className="size-5 text-muted-foreground" aria-hidden />
            Recently studied
          </h2>

          {recentAttempts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/60 bg-card/40 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your practice attempts will appear here. Try a{' '}
                <Link
                  href={PRACTICE_HREF[recommendedSkill]}
                  className="font-medium text-primary hover:underline"
                >
                  {SKILL_META[recommendedSkill].label.toLowerCase()} task
                </Link>{' '}
                or a{' '}
                <Link href="/ielts/mock" className="font-medium text-primary hover:underline">
                  full mock
                </Link>{' '}
                to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
              {recentAttempts.map((a) => {
                const meta = SKILL_META[a.skill]
                const Icon = SKILL_ICON[a.skill]
                return (
                  <Link
                    key={a.id}
                    href={PRACTICE_HREF[a.skill]}
                    className="group flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-muted/40"
                  >
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                        meta.bgColour,
                      )}
                    >
                      <Icon className={cn('h-4 w-4', meta.colour)} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                        {meta.label}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {formatDate(a.date)}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn('shrink-0 font-mono', bandColour(a.band))}
                    >
                      Band {bandLabel(a.band)}
                    </Badge>
                  </Link>
                )
              })}
            </div>
          )}

          <p className="mt-3 font-mono text-[11px] text-muted-foreground">
            {lessonsDone} of {LESSON_COUNT} lessons complete · {attempts.length} practice{' '}
            {attempts.length === 1 ? 'attempt' : 'attempts'} logged.
          </p>
        </section>
      </div>
    </main>
  )
}

// ─── Recommended-next body (handles the Writing-first cold start) ───────────

function RecommendedNext({
  skill,
  band,
  isColdStart,
}: {
  skill: IeltsSkill
  band: Band | null
  isColdStart: boolean
}) {
  const meta = SKILL_META[skill]
  const Icon = SKILL_ICON[skill]
  const section = SECTION_FACTS.find((s) => s.skill === skill)
  const topMistake = COMMON_MISTAKES[skill]?.[0]
  const firstLesson = lessonsForSkill(skill)[0]

  return (
    <div className="mt-4">
      <div className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/50 p-3">
        <span
          className={cn(
            'flex size-9 shrink-0 items-center justify-center rounded-lg',
            meta.bgColour,
          )}
        >
          <Icon className={cn('size-4', meta.colour)} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {meta.label}
            {!isColdStart && band !== null && (
              <span className={cn('ml-2 font-mono text-xs', bandColour(band))}>
                Band {bandLabel(band)}
              </span>
            )}
          </p>
          <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">
            {isColdStart ? (
              <>
                Writing is the lowest-scoring module for almost every nationality — and the lowest
                of all for Gulf learners. It’s the highest-leverage place to begin
                {section ? ` (the global mean is just Band ${section.meanBandAcademic}).` : '.'}
              </>
            ) : (
              <>
                This is your weakest skill right now, so it’s where focused practice lifts your
                overall band fastest.
              </>
            )}
          </p>
          {topMistake && (
            <p className="mt-2 text-[0.72rem] leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Watch out for:</span> {topMistake}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {firstLesson && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            render={<Link href={`/ielts/learn/${skill}/${firstLesson.slug}`} />}
          >
            <BookOpen className="size-3.5" aria-hidden />
            Learn the method
          </Button>
        )}
        <Button size="sm" className="gap-1.5" render={<Link href={PRACTICE_HREF[skill]} />}>
          <Dumbbell className="size-3.5" aria-hidden />
          Practise {meta.label.toLowerCase()}
        </Button>
      </div>
    </div>
  )
}

// ─── "Why this skill is next" microcopy for the prioritised list ────────────

function studyNextReason(row: RankedSkill, target: Band | null): string {
  if (row.band === null) {
    return row.skill === HARDEST_SKILL
      ? 'Not measured yet — and the toughest module for most learners, so it’s worth a baseline early.'
      : 'Not measured yet — take a short practice set to get a baseline band.'
  }
  if (target !== null && row.gap > 0) {
    const steps = Math.round(row.gap * 2) / 2
    return `Band ${bandLabel(row.band)} now vs your Band ${bandLabel(target)} target — about ${steps} band${steps === 1 ? '' : 's'} to close.`
  }
  if (target !== null && row.gap === 0) {
    return `Band ${bandLabel(row.band)} — at or above your target. Keep it warm with light practice.`
  }
  return `Band ${bandLabel(row.band)} — keep building range and accuracy.`
}

// ─── Shared header (used by skeleton + populated states) ────────────────────

function DashboardHeader() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Link
          href="/ielts"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          IELTS hub
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <LayoutDashboard className="h-6 w-6 text-primary" aria-hidden />
          </span>
          <div>
            <p className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              My IELTS Dashboard
            </p>
            <p className="text-sm text-muted-foreground">
              Your learner home for the IELTS readiness program.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
