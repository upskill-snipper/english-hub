'use client'

// ─── A pupil's strongest and weakest assessment objectives ─────────────────
//
// "For each pupil, which objectives are strengths and which are holding them
// back." The API names a strongest and a weakest objective only when the
// pupil has at least two and they differ; otherwise this says why there is
// nothing to name, rather than promoting a lone objective to a strength.
// ────────────────────────────────────────────────────────────────────────────

import { TrendingDown, TrendingUp } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import type { ObjectiveStat, PupilObjectives } from '@/app/api/school/_lib/objectives'
import { ObjectiveList, SmallSampleBadge, mixesSubjects, percent } from './ObjectiveList'

function Highlight({
  tone,
  title,
  objective,
}: {
  tone: 'strong' | 'weak'
  title: string
  objective: ObjectiveStat
}) {
  const t = useT()
  const Icon = tone === 'strong' ? TrendingUp : TrendingDown
  return (
    <div
      className={
        tone === 'strong'
          ? 'rounded-xl border border-green-500/30 bg-green-500/5 p-4'
          : 'rounded-xl border border-amber-500/30 bg-amber-500/5 p-4'
      }
    >
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {title}
      </p>
      <p className="mt-2 text-lg font-bold text-foreground">
        {objective.ao}
        <span className="ms-2 text-base font-semibold tabular-nums">
          {percent(objective.meanShare)}
        </span>
      </p>
      {objective.label ? <p className="text-sm text-muted-foreground">{objective.label}</p> : null}
      {objective.subjectLabel ? (
        <p className="text-xs text-muted-foreground">{objective.subjectLabel}</p>
      ) : null}
      <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {t('school.objectives.essays_n').replace('{n}', String(objective.essays))}
        {objective.smallSample ? <SmallSampleBadge /> : null}
      </p>
    </div>
  )
}

export function PupilStrengths({ objectives }: { objectives: PupilObjectives | null }) {
  const t = useT()

  if (!objectives || objectives.objectives.length === 0) {
    return <p className="text-sm text-muted-foreground">{t('school.pupil.no_objectives')}</p>
  }

  return (
    <div className="space-y-5">
      <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {t('school.objectives.essays_n').replace('{n}', String(objectives.essays))}
        {objectives.smallSample ? <SmallSampleBadge /> : null}
      </p>

      {objectives.strongest && objectives.weakest ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <Highlight
            tone="strong"
            title={t('school.pupil.strongest')}
            objective={objectives.strongest}
          />
          <Highlight tone="weak" title={t('school.pupil.weakest')} objective={objectives.weakest} />
        </div>
      ) : (
        <p className="rounded-lg border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
          {objectives.objectives.length === 1
            ? t('school.objectives.one_objective')
            : t('school.objectives.no_difference')}
        </p>
      )}

      <ObjectiveList
        objectives={objectives.objectives}
        showSubject={mixesSubjects(objectives.objectives)}
      />
    </div>
  )
}
