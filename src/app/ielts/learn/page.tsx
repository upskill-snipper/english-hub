'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  Compass,
  CheckCircle2,
  Circle,
  Clock,
  GraduationCap,
  Sparkles,
  PlayCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  LEVELS,
  levelMeta,
  unitsForSkill,
  type IeltsLevel,
  type Lesson,
  type Unit,
} from '@/lib/ielts/curriculum'
import { lessonsForUnit, LESSON_COUNT } from '@/lib/ielts/lessons'
import { getCompletedLessons } from '@/lib/ielts/store'
import { IELTS_SKILLS, SKILL_META, type IeltsSkill } from '@/lib/ielts/types'

// ─── IELTS LEARN hub — the self-learning library ───────────────────────────
// A scannable, encouraging library of every IELTS lesson, organised by skill
// (a cross-skill Foundation track first, then Listening / Reading / Writing /
// Speaking). Each skill shows its curriculum UNITS, and each unit lists its
// lessons. A LEVEL filter narrows the library to one rung of the
// beginner→ready ladder; per-skill completion ("3 / 7 done") and a "Continue
// learning" card come from the localStorage-backed completion store.
//
// Client component: completion lives in localStorage, so (like the IELTS
// progress dashboard) we mount first, then read it — keeping SSR hydration-safe.
// Exactly one <h1>. Metadata + canonical live in ./layout.tsx.
// ────────────────────────────────────────────────────────────────────────────

// Foundation isn't in SKILL_META (that's the four exam skills only), so the
// section "tracks" extend it with a Foundation orientation entry. Tailwind class
// strings are literal so the JIT always compiles them.
type LearnTrack = IeltsSkill | 'foundation'

interface TrackMeta {
  id: LearnTrack
  label: string
  blurb: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  /** Where this track's practice lives (Foundation points back into the loop). */
  practiceHref: string
}

const TRACKS: TrackMeta[] = [
  {
    id: 'foundation',
    label: 'Foundation',
    blurb:
      'New to IELTS? Start here — the format, the band scale, and the core English the test assumes.',
    icon: Compass,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    practiceHref: '/ielts/diagnostic',
  },
  {
    id: 'listening',
    label: SKILL_META.listening.label,
    blurb:
      'Predict, follow the recording, and capture answers in the exact words within the word limit.',
    icon: Headphones,
    colour: SKILL_META.listening.colour,
    bgColour: SKILL_META.listening.bgColour,
    practiceHref: SKILL_META.listening.href,
  },
  {
    id: 'reading',
    label: SKILL_META.reading.label,
    blurb:
      'Skim, scan and tackle every question type — including True / False / Not Given — to time.',
    icon: BookOpen,
    colour: SKILL_META.reading.colour,
    bgColour: SKILL_META.reading.bgColour,
    practiceHref: SKILL_META.reading.href,
  },
  {
    id: 'writing',
    label: SKILL_META.writing.label,
    blurb: 'Plan Task 1 and Task 2, then build coherence, range and accuracy the examiner rewards.',
    icon: PenLine,
    colour: SKILL_META.writing.colour,
    bgColour: SKILL_META.writing.bgColour,
    practiceHref: SKILL_META.writing.href,
  },
  {
    id: 'speaking',
    label: SKILL_META.speaking.label,
    blurb:
      'Give natural, extended answers across all three parts with fluency and clear pronunciation.',
    icon: Mic,
    colour: SKILL_META.speaking.colour,
    bgColour: SKILL_META.speaking.bgColour,
    practiceHref: SKILL_META.speaking.href,
  },
]

/** A unit with its lessons resolved (and optionally level-filtered). */
interface UnitWithLessons {
  unit: Unit
  lessons: Lesson[]
}

function lessonHref(lesson: Lesson): string {
  return `/ielts/learn/${lesson.skill}/${lesson.slug}`
}

export default function IeltsLearnHubPage() {
  const [mounted, setMounted] = useState(false)
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [activeLevel, setActiveLevel] = useState<IeltsLevel | 'all'>('all')

  useEffect(() => {
    setMounted(true)
    setCompleted(new Set(getCompletedLessons()))
  }, [])

  // Lessons in a stable curriculum order (track order → unit order → file order),
  // used both for "continue" and for the per-track sections below.
  const orderedLessons = useMemo<Lesson[]>(() => {
    const out: Lesson[] = []
    for (const track of TRACKS) {
      for (const unit of unitsForSkill(track.id)) {
        out.push(...lessonsForUnit(unit.id))
      }
    }
    return out
  }, [])

  // First lesson the learner hasn't completed yet (respecting the level filter
  // when one is active) — drives the "Continue learning" card.
  const continueLesson = useMemo<Lesson | undefined>(() => {
    const pool =
      activeLevel === 'all' ? orderedLessons : orderedLessons.filter((l) => l.level === activeLevel)
    return pool.find((l) => !completed.has(l.id))
  }, [orderedLessons, completed, activeLevel])

  const totalDone = useMemo(
    () => orderedLessons.filter((l) => completed.has(l.id)).length,
    [orderedLessons, completed],
  )

  // Per-track units + (level-filtered) lessons, plus completion tallies.
  const trackSections = useMemo(() => {
    return TRACKS.map((track) => {
      const units: UnitWithLessons[] = unitsForSkill(track.id).map((unit) => {
        const all = lessonsForUnit(unit.id)
        const lessons = activeLevel === 'all' ? all : all.filter((l) => l.level === activeLevel)
        return { unit, lessons }
      })
      // All lessons for this track (ignoring the filter) for the completion ratio.
      const allTrackLessons = unitsForSkill(track.id).flatMap((u) => lessonsForUnit(u.id))
      const done = allTrackLessons.filter((l) => completed.has(l.id)).length
      const visibleUnits = units.filter((u) => u.lessons.length > 0)
      return {
        track,
        visibleUnits,
        total: allTrackLessons.length,
        done,
      }
    })
  }, [activeLevel, completed])

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <Link
            href="/ielts"
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to IELTS
          </Link>
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-clay-500">
                Self-study library
              </p>
              <h1 className="mt-1 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Learn IELTS, step by step
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Short, original lessons across every skill — from the very basics to a top band.
                Work through a track in order, or pick the topic you need. Your progress saves on
                this device.
              </p>
            </div>
          </div>

          {/* Overall progress pill */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span className="font-semibold text-foreground" suppressHydrationWarning>
                {mounted ? totalDone : 0}
              </span>{' '}
              of {LESSON_COUNT} lessons done
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-8 sm:px-6">
        {/* ── Continue learning ───────────────────────────────────────── */}
        <ContinueCard mounted={mounted} lesson={continueLesson} hasProgress={totalDone > 0} />

        {/* ── Level filter ────────────────────────────────────────────── */}
        <section aria-labelledby="level-filter-heading">
          <h2 id="level-filter-heading" className="sr-only">
            Filter lessons by level
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Level
            </span>
            <LevelChip
              label="All levels"
              active={activeLevel === 'all'}
              onClick={() => setActiveLevel('all')}
            />
            {LEVELS.map((lvl) => (
              <LevelChip
                key={lvl.id}
                label={lvl.label}
                sub={lvl.bandRange}
                active={activeLevel === lvl.id}
                onClick={() => setActiveLevel(lvl.id)}
              />
            ))}
          </div>
          {activeLevel !== 'all' ? (
            <p className="mt-3 text-sm text-muted-foreground">{levelMeta(activeLevel).blurb}</p>
          ) : null}
        </section>

        {/* ── Tracks (Foundation + four skills) ───────────────────────── */}
        {trackSections.map(({ track, visibleUnits, total, done }) => (
          <TrackSection
            key={track.id}
            track={track}
            visibleUnits={visibleUnits}
            total={total}
            done={done}
            mounted={mounted}
            completed={completed}
            levelFiltered={activeLevel !== 'all'}
          />
        ))}
      </div>
    </main>
  )
}

// ── Continue learning card ──────────────────────────────────────────────────

function ContinueCard({
  mounted,
  lesson,
  hasProgress,
}: {
  mounted: boolean
  lesson: Lesson | undefined
  hasProgress: boolean
}) {
  // Pre-hydration skeleton (keeps SSR/CSR markup aligned).
  if (!mounted) {
    return <div className="h-28 animate-pulse rounded-2xl border border-border bg-card" />
  }

  // Everything (in the current filter) is done.
  if (!lesson) {
    return (
      <section
        aria-label="Continue learning"
        className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-6"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden />
          </span>
          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground">
              You&rsquo;ve completed everything here
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Nice work. Put it into practice, or switch the level filter to find more.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const meta = SKILL_META[lesson.skill as IeltsSkill] // foundation handled below
  const accent = lesson.skill === 'foundation' ? 'text-amber-400' : meta?.colour

  return (
    <section
      aria-label="Continue learning"
      className="rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/[0.05] p-6 shadow-soft"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
            {hasProgress ? 'Continue learning' : 'Start learning'}
          </p>
          <h2 className="mt-1.5 truncate font-serif text-xl font-semibold tracking-tight text-foreground">
            {lesson.title}
          </h2>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {lesson.summary}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className={cn('font-semibold capitalize', accent)}>{lesson.skill}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {lesson.estMinutes} min
            </span>
            <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wide">
              {levelMeta(lesson.level).label}
            </Badge>
          </div>
        </div>
        <Button
          size="lg"
          className="h-12 shrink-0 gap-2 px-6 text-base"
          render={<Link href={lessonHref(lesson)} />}
        >
          <PlayCircle className="h-5 w-5" aria-hidden />
          {hasProgress ? 'Continue' : 'Begin'}
        </Button>
      </div>
    </section>
  )
}

// ── Level filter chip ───────────────────────────────────────────────────────

function LevelChip({
  label,
  sub,
  active,
  onClick,
}: {
  label: string
  sub?: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors',
        active
          ? 'border-primary/40 bg-primary/10 font-medium text-foreground'
          : 'border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground',
      )}
    >
      {label}
      {sub ? <span className="font-mono text-[10px] text-muted-foreground">{sub}</span> : null}
    </button>
  )
}

// ── One track (Foundation or a skill) with its units + lessons ──────────────

function TrackSection({
  track,
  visibleUnits,
  total,
  done,
  mounted,
  completed,
  levelFiltered,
}: {
  track: TrackMeta
  visibleUnits: UnitWithLessons[]
  total: number
  done: number
  mounted: boolean
  completed: Set<string>
  levelFiltered: boolean
}) {
  const Icon = track.icon

  return (
    <section aria-labelledby={`track-${track.id}-heading`} className="scroll-mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl',
              track.bgColour,
            )}
          >
            <Icon className={cn('h-5 w-5', track.colour)} aria-hidden />
          </span>
          <div>
            <h2
              id={`track-${track.id}-heading`}
              className="font-serif text-xl font-semibold tracking-tight text-foreground"
            >
              {track.label}
            </h2>
            <p className="text-xs text-muted-foreground">{track.blurb}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-xs text-muted-foreground"
            suppressHydrationWarning
            aria-label={`${mounted ? done : 0} of ${total} lessons completed`}
          >
            {mounted ? done : 0} / {total} done
          </span>
          <Button
            variant="ghost"
            size="sm"
            className={cn('h-8 gap-1.5 px-2.5', track.colour)}
            render={<Link href={track.practiceHref} />}
          >
            Practise
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Progress bar for the track */}
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted" role="presentation">
        <div
          className={cn('h-full rounded-full bg-primary transition-all')}
          style={{ width: `${mounted && total > 0 ? Math.round((done / total) * 100) : 0}%` }}
        />
      </div>

      {visibleUnits.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-border/60 bg-card/40 px-4 py-6 text-center text-sm text-muted-foreground">
          {levelFiltered
            ? 'No lessons at this level in this track — try another level.'
            : 'Lessons coming soon.'}
        </p>
      ) : (
        <div className="mt-4 space-y-5">
          {visibleUnits.map(({ unit, lessons }) => (
            <div key={unit.id}>
              <div className="mb-2">
                <h3 className="text-sm font-semibold text-foreground">{unit.title}</h3>
                <p className="text-xs text-muted-foreground">{unit.blurb}</p>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <LessonRow lesson={lesson} complete={mounted && completed.has(lesson.id)} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// ── A single lesson link row ────────────────────────────────────────────────

function LessonRow({ lesson, complete }: { lesson: Lesson; complete: boolean }) {
  return (
    <Link
      href={lessonHref(lesson)}
      className={cn(
        'group flex h-full items-start gap-3 rounded-xl border bg-card p-3.5 transition-all hover:border-border hover:shadow-card-hover',
        complete ? 'border-emerald-500/30' : 'border-border/60',
      )}
    >
      <span className="mt-0.5 shrink-0" suppressHydrationWarning>
        {complete ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-label="Completed" />
        ) : (
          <Circle
            className="h-5 w-5 text-muted-foreground/40 group-hover:text-muted-foreground/70"
            aria-hidden
          />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium text-foreground group-hover:text-primary">
            {lesson.title}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" aria-hidden />
            {lesson.estMinutes}m
          </span>
        </span>
        <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
          {lesson.summary}
        </span>
        <span className="mt-1.5 inline-flex">
          <Badge variant="outline" className="font-mono text-[9px] uppercase tracking-wide">
            {lesson.level}
          </Badge>
        </span>
      </span>
    </Link>
  )
}
