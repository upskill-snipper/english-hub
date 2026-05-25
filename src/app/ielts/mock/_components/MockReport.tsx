'use client'

// ─── MockReport ─────────────────────────────────────────────────────────────
// The terminal screen of the mock: a predicted band report. It shows the four
// per-section bands (each a coloured chip), the OVERALL band computed with
// overallBand() of the four skill bands (the official rounding rule - null until
// all four scored), a short "what this means" plain-English explainer, and the
// per-task criteria breakdown for Writing / Speaking. It is framed throughout as
// a practice prediction, never an official result. Each skill's result has
// already been persisted via saveAttempt by its stage, so progress + the
// dashboard already reflect this sitting.
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { TrendingUp, CalendarDays, RotateCcw, Award, CheckCircle2, Info } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { Band, CriterionFeedback, IeltsSkill, IeltsTrack } from '@/lib/ielts/types'
import { overallBand, bandLabel, bandTier, bandColour, bandBgColour } from '@/lib/ielts/bands'

import type { MockResults } from '../mock-types'
import { useMockT } from '../use-mock-t'

interface SkillRow {
  skill: IeltsSkill
  label: string
  band: Band | null
  detail: string
  status: 'scored' | 'submitted'
  criteria: CriterionFeedback[]
  note?: string
}

export default function MockReport({
  results,
  track,
  onRestart,
}: {
  results: MockResults
  track: IeltsTrack
  onRestart: () => void
}) {
  const t = useMockT()
  const rows: SkillRow[] = [
    {
      skill: 'listening',
      label: t('ielts.mock.report.label.listening'),
      band: results.listening?.band ?? null,
      detail: results.listening
        ? t('ielts.mock.report.detail.correct', {
            correct: results.listening.correct,
            total: results.listening.total,
          })
        : t('ielts.mock.report.detail.not_completed'),
      status: 'scored',
      criteria: [],
    },
    {
      skill: 'reading',
      label: t('ielts.mock.report.label.reading'),
      band: results.reading?.band ?? null,
      detail: results.reading
        ? t('ielts.mock.report.detail.correct', {
            correct: results.reading.correct,
            total: results.reading.total,
          })
        : t('ielts.mock.report.detail.not_completed'),
      status: 'scored',
      criteria: [],
    },
    {
      skill: 'writing',
      label: t('ielts.mock.report.label.writing'),
      band: results.writing?.band ?? null,
      detail:
        results.writing?.status === 'scored'
          ? t('ielts.mock.report.detail.writing_scored')
          : t('ielts.mock.report.detail.recorded'),
      status: results.writing?.status ?? 'submitted',
      criteria: results.writing?.criteria ?? [],
      note: results.writing?.note,
    },
    {
      skill: 'speaking',
      label: t('ielts.mock.report.label.speaking'),
      band: results.speaking?.band ?? null,
      detail:
        results.speaking?.status === 'scored'
          ? t('ielts.mock.report.detail.speaking_scored')
          : t('ielts.mock.report.detail.recorded'),
      status: results.speaking?.status ?? 'submitted',
      criteria: results.speaking?.criteria ?? [],
      note: results.speaking?.note,
    },
  ]

  const skillBands = rows.map((r) => r.band)
  const overall = overallBand(skillBands)
  const scoredCount = skillBands.filter((b) => b !== null).length
  const trackLabel = track === 'general' ? 'General Training' : 'Academic'

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Award className="size-6 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                {t('ielts.mock.report.title')}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('ielts.mock.report.subtitle', { track: trackLabel })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
        {/* Overall band hero */}
        <div className={`rounded-2xl border p-6 text-center sm:p-8 ${bandBgColour(overall)}`}>
          <p className="text-sm font-medium text-muted-foreground">
            {t('ielts.mock.report.overall_label')}
          </p>
          <div className={`mt-1 text-6xl font-bold tabular-nums ${bandColour(overall)}`}>
            {bandLabel(overall)}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {overall !== null
              ? bandTier(overall)
              : t('ielts.mock.report.overall_incomplete', { n: scoredCount })}
          </p>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
            {t('ielts.mock.report.overall_explainer')}
          </p>
        </div>

        {/* Per-section bands */}
        <div className="grid gap-3 sm:grid-cols-2">
          {rows.map((row) => (
            <div key={row.skill} className={`rounded-2xl border p-5 ${bandBgColour(row.band)}`}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">{row.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{row.detail}</p>
                </div>
                <span
                  className={`font-heading text-3xl font-bold tabular-nums ${bandColour(row.band)}`}
                >
                  {bandLabel(row.band)}
                </span>
              </div>
              {row.status === 'submitted' && row.note && (
                <p className="mt-3 rounded-lg border border-amber-500/25 bg-amber-500/5 p-2.5 text-[11px] leading-relaxed text-muted-foreground">
                  {row.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* What this means */}
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <h2 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
            <Info className="size-4 text-primary" />
            {t('ielts.mock.report.what_heading')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {overall !== null
              ? t('ielts.mock.report.what_scored', {
                  band: bandLabel(overall),
                  tier: bandTier(overall),
                })
              : t('ielts.mock.report.what_incomplete', { n: scoredCount })}
          </p>
        </div>

        {/* Criteria breakdown for the AI-marked skills */}
        {rows
          .filter((r) => r.criteria.length > 0)
          .map((row) => (
            <div
              key={`${row.skill}-criteria`}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <h2 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                {t('ielts.mock.report.criteria_heading', { skill: row.label })}
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {row.criteria.map((c, i) => (
                  <div
                    key={`${c.criterion}-${i}`}
                    className={`rounded-xl border p-3 ${bandBgColour(c.band)}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-foreground">{c.criterion}</span>
                      <span
                        className={`font-heading text-xl font-bold tabular-nums ${bandColour(c.band)}`}
                      >
                        {bandLabel(c.band)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {c.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Button size="lg" onClick={onRestart}>
            <RotateCcw className="size-4" />
            {t('ielts.mock.report.sit_another')}
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/ielts/plan" />}>
            <CalendarDays className="size-4" />
            {t('ielts.mock.report.study_plan')}
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/ielts/progress" />}>
            <TrendingUp className="size-4" />
            {t('ielts.mock.report.view_progress')}
          </Button>
        </div>

        <p className="pb-4 text-center text-[11px] text-muted-foreground/70">
          {t('ielts.mock.report.footer_disclaimer')}
        </p>
      </div>
    </main>
  )
}
