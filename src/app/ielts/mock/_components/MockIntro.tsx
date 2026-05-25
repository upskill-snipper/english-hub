'use client'

// ─── MockIntro ──────────────────────────────────────────────────────────────
// The setup screen for the full mock. The candidate picks their track (Academic
// vs General Training, persisted via useIeltsTrack), reads exactly how the real
// exam is structured and timed, sees what THIS mock contains for the chosen
// track, and starts. It owns the single <h1> for the route. Starting the mock
// is a deliberate, one-way commitment — the copy makes the timed, no-going-back
// nature explicit so it is not a surprise.
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import {
  Headphones,
  BookOpen,
  PenLine,
  Mic,
  Clock,
  Play,
  TrendingUp,
  CalendarDays,
  AlertTriangle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TrackToggle, type useIeltsTrack } from '@/app/ielts/_components/TrackToggle'
import type { IeltsTrack } from '@/lib/ielts/types'

import type { AssembledMock } from '../mock-types'
import { listeningQuestionCount, readingQuestionCount } from '../assemble'

type SetTrack = ReturnType<typeof useIeltsTrack>[1]

const STRUCTURE = [
  {
    icon: Headphones,
    accent: 'text-sky-500',
    bg: 'bg-sky-500/10',
    title: 'Listening',
    minutes: '≈ 30 minutes',
    blurb: 'Four recorded sections, ~40 questions, marked automatically.',
  },
  {
    icon: BookOpen,
    accent: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    title: 'Reading',
    minutes: '60 minutes',
    blurb: 'Long passages with ~40 questions, marked automatically.',
  },
  {
    icon: PenLine,
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Writing',
    minutes: '60 minutes',
    blurb: 'Task 1 + Task 2 in one hour, given an AI examiner band.',
  },
  {
    icon: Mic,
    accent: 'text-rose-400',
    bg: 'bg-rose-500/10',
    title: 'Speaking',
    minutes: '≈ 14 minutes',
    blurb: 'A Part 1 / 2 / 3 interview, scored from a typed transcript.',
  },
]

export default function MockIntro({
  track,
  setTrack,
  mock,
  onStart,
}: {
  track: IeltsTrack
  setTrack: SetTrack
  mock: AssembledMock | null
  onStart: () => void
}) {
  const trackLabel = track === 'general' ? 'General Training' : 'Academic'

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Clock className="size-6 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                Full IELTS Mock Test
              </h1>
              <p className="text-sm text-muted-foreground">
                Timed, exam-realistic practice across all four skills — with a predicted band.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6">
        {/* Setup card */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Set up your mock
            </span>
            <TrackToggle value={track} onChange={setTrack} />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            You are about to sit a complete{' '}
            <strong className="text-foreground">{trackLabel}</strong> IELTS mock. The four sections
            run back-to-back in the real exam order, each under its own countdown. When a
            section&apos;s timer reaches zero it is submitted automatically and you{' '}
            <strong className="text-foreground">cannot return to it</strong> — exactly like the real
            test. Set aside about <strong className="text-foreground">2 hours 45 minutes</strong> of
            uninterrupted time.
          </p>

          {/* Structure grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {STRUCTURE.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border/40 bg-background/50 p-4"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg ${s.bg}`}
                    aria-hidden="true"
                  >
                    <s.icon className={`size-4 ${s.accent}`} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.minutes}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.blurb}</p>
              </div>
            ))}
          </div>

          {/* What this mock contains */}
          {mock && (
            <div className="mt-6 rounded-xl border border-border/40 bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">This mock contains</p>
              <ul className="mt-2 space-y-1">
                <li>
                  • Listening: <span className="text-foreground">{mock.listening.title}</span> (
                  {listeningQuestionCount(mock)} questions)
                </li>
                <li>
                  • Reading: <span className="text-foreground">{mock.reading.title}</span> (
                  {readingQuestionCount(mock)} questions)
                </li>
                <li>
                  • Writing: <span className="text-foreground">{mock.writingTask1.title}</span>{' '}
                  (Task 1) and <span className="text-foreground">{mock.writingTask2.title}</span>{' '}
                  (Task 2)
                </li>
                <li>
                  • Speaking: a Part 1, Part 2 and Part 3 set (
                  <span className="text-foreground">{mock.speakingPart2.title}</span> for the long
                  turn)
                </li>
              </ul>
            </div>
          )}

          {/* Predicted-band disclaimer */}
          <div className="mt-6 flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs leading-relaxed text-muted-foreground">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
            <p>
              This is a <strong className="text-foreground">practice mock</strong>. Every band is an{' '}
              <strong className="text-foreground">estimate for preparation only</strong> — it is not
              an official IELTS result, and your score on test day may differ. Writing and Speaking
              bands are generated by AI.
            </p>
          </div>

          {/* Start / fallback */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={onStart} disabled={!mock}>
              <Play className="size-4" />
              Start full mock
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ielts/plan" />}>
              Back to study plan
            </Button>
          </div>
          {!mock && (
            <p className="mt-3 text-sm text-destructive">
              A full {trackLabel} mock could not be assembled from the practice library right now.
              Please try the individual skill pages, or switch track.
            </p>
          )}
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" size="sm" render={<Link href="/ielts/progress" />}>
            <TrendingUp className="size-3.5" />
            View progress
          </Button>
          <Button variant="ghost" size="sm" render={<Link href="/ielts/plan" />}>
            <CalendarDays className="size-3.5" />
            Study plan
          </Button>
        </div>
      </div>
    </main>
  )
}
