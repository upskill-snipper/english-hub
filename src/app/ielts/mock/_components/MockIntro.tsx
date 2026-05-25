'use client'

// ─── MockIntro ──────────────────────────────────────────────────────────────
// The setup screen for the full mock. The candidate picks their track (Academic
// vs General Training, persisted via useIeltsTrack), reads exactly how the real
// exam is structured and timed, sees what THIS mock contains for the chosen
// track, and starts. It owns the single <h1> for the route. Starting the mock
// is a deliberate, one-way commitment - the copy makes the timed, no-going-back
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
import { useMockT } from '../use-mock-t'

type SetTrack = ReturnType<typeof useIeltsTrack>[1]

// Section names stay Latin (brand terms); the minutes + blurb are chrome and
// resolve from the dictionary at render via their keys.
const STRUCTURE = [
  {
    icon: Headphones,
    accent: 'text-sky-500',
    bg: 'bg-sky-500/10',
    title: 'Listening',
    minutesKey: 'ielts.mock.intro.structure.listening.minutes',
    blurbKey: 'ielts.mock.intro.structure.listening.blurb',
  },
  {
    icon: BookOpen,
    accent: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    title: 'Reading',
    minutesKey: 'ielts.mock.intro.structure.reading.minutes',
    blurbKey: 'ielts.mock.intro.structure.reading.blurb',
  },
  {
    icon: PenLine,
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Writing',
    minutesKey: 'ielts.mock.intro.structure.writing.minutes',
    blurbKey: 'ielts.mock.intro.structure.writing.blurb',
  },
  {
    icon: Mic,
    accent: 'text-rose-400',
    bg: 'bg-rose-500/10',
    title: 'Speaking',
    minutesKey: 'ielts.mock.intro.structure.speaking.minutes',
    blurbKey: 'ielts.mock.intro.structure.speaking.blurb',
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
  const t = useMockT()
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
                {t('ielts.mock.intro.title')}
              </h1>
              <p className="text-sm text-muted-foreground">{t('ielts.mock.intro.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6">
        {/* Setup card */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {t('ielts.mock.intro.setup_badge')}
            </span>
            <TrackToggle value={track} onChange={setTrack} />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {t('ielts.mock.intro.lead', {
              track: trackLabel,
              minutes: t('ielts.mock.intro.duration_value'),
            })}
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
                    <p className="text-xs text-muted-foreground">{t(s.minutesKey)}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {t(s.blurbKey)}
                </p>
              </div>
            ))}
          </div>

          {/* What this mock contains */}
          {mock && (
            <div className="mt-6 rounded-xl border border-border/40 bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">
                {t('ielts.mock.intro.contains.heading')}
              </p>
              <ul className="mt-2 space-y-1">
                <li>
                  •{' '}
                  {t('ielts.mock.intro.contains.listening', {
                    title: mock.listening.title,
                    n: listeningQuestionCount(mock),
                  })}
                </li>
                <li>
                  •{' '}
                  {t('ielts.mock.intro.contains.reading', {
                    title: mock.reading.title,
                    n: readingQuestionCount(mock),
                  })}
                </li>
                <li>
                  •{' '}
                  {t('ielts.mock.intro.contains.writing', {
                    title1: mock.writingTask1.title,
                    title2: mock.writingTask2.title,
                  })}
                </li>
                <li>
                  •{' '}
                  {t('ielts.mock.intro.contains.speaking', {
                    title: mock.speakingPart2.title,
                  })}
                </li>
              </ul>
            </div>
          )}

          {/* Predicted-band disclaimer */}
          <div className="mt-6 flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-xs leading-relaxed text-muted-foreground">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
            <p>
              {t('ielts.mock.intro.disclaimer.lead')}{' '}
              <strong className="text-foreground">
                {t('ielts.mock.intro.disclaimer.practice')}
              </strong>
              {t('ielts.mock.intro.disclaimer.mid')}{' '}
              <strong className="text-foreground">
                {t('ielts.mock.intro.disclaimer.estimate')}
              </strong>{' '}
              {t('ielts.mock.intro.disclaimer.tail')}
            </p>
          </div>

          {/* Start / fallback */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={onStart} disabled={!mock}>
              <Play className="size-4" />
              {t('ielts.mock.intro.start')}
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ielts/plan" />}>
              {t('ielts.mock.intro.back_to_plan')}
            </Button>
          </div>
          {!mock && (
            <p className="mt-3 text-sm text-destructive">
              {t('ielts.mock.intro.assemble_fail', { track: trackLabel })}
            </p>
          )}
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" size="sm" render={<Link href="/ielts/progress" />}>
            <TrendingUp className="size-3.5" />
            {t('ielts.mock.intro.view_progress')}
          </Button>
          <Button variant="ghost" size="sm" render={<Link href="/ielts/plan" />}>
            <CalendarDays className="size-3.5" />
            {t('ielts.mock.intro.study_plan')}
          </Button>
        </div>
      </div>
    </main>
  )
}
