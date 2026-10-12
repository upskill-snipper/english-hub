'use client'

// ─── A list of assessment objectives with the share of marks achieved ──────
//
// Used by the department view and by each pupil's page. It shows only what
// /api/school/analytics/marking computes (src/app/api/school/_lib/objectives.ts):
// a share of the available marks, the number of essays behind it, and a
// "small sample" label under three essays. It never shows a grade.
// ────────────────────────────────────────────────────────────────────────────

import { Badge } from '@/components/ui/badge'
import { useT } from '@/lib/i18n/use-t'
import type { ObjectiveStat } from '@/app/api/school/_lib/objectives'

export function percent(share: number): string {
  return `${Math.round(share * 100)}%`
}

export function SmallSampleBadge() {
  const t = useT()
  return (
    <Badge
      variant="outline"
      className="border-amber-500/30 bg-amber-500/10 text-[11px] text-amber-800 dark:text-amber-300"
      title={t('school.objectives.small_sample_hint')}
    >
      {t('school.objectives.small_sample')}
    </Badge>
  )
}

export function ShareBar({ share, label }: { share: number; label: string }) {
  const width = Math.max(0, Math.min(100, Math.round(share * 100)))
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-muted" role="img" aria-label={label}>
      <div className="h-full rounded-full bg-primary" style={{ width: `${width}%` }} />
    </div>
  )
}

/** The objective's code, label and subject in one line. */
export function objectiveName(o: Pick<ObjectiveStat, 'ao' | 'label' | 'subjectLabel'>): string {
  return [o.ao, o.label].filter(Boolean).join(' · ')
}

export function ObjectiveList({
  objectives,
  showSubject,
}: {
  objectives: readonly ObjectiveStat[]
  /** Show the subject under each objective, for lists that mix subjects. */
  showSubject: boolean
}) {
  const t = useT()
  return (
    <ul className="space-y-3">
      {objectives.map((o) => (
        <li key={o.key} className="space-y-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p className="min-w-0 text-sm text-foreground">
              <span className="font-semibold">{o.ao}</span>
              {o.label ? <span className="ms-2 text-muted-foreground">{o.label}</span> : null}
              {showSubject && o.subjectLabel ? (
                <span className="block text-xs text-muted-foreground">{o.subjectLabel}</span>
              ) : null}
            </p>
            <p className="flex flex-wrap items-center gap-2 text-sm tabular-nums">
              <span className="font-semibold text-foreground">{percent(o.meanShare)}</span>
              <span className="text-xs text-muted-foreground">
                {t('school.objectives.essays_n').replace('{n}', String(o.essays))}
              </span>
              {o.smallSample ? <SmallSampleBadge /> : null}
            </p>
          </div>
          <ShareBar share={o.meanShare} label={`${objectiveName(o)}: ${percent(o.meanShare)}`} />
          {o.adjustedEssays > 0 ? (
            <p className="text-xs text-muted-foreground">
              {t('school.objectives.adjusted_n').replace('{n}', String(o.adjustedEssays))}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

/** Whether a list spans more than one subject, so each row must name its own. */
export function mixesSubjects(objectives: readonly ObjectiveStat[]): boolean {
  return new Set(objectives.map((o) => o.subjectLabel ?? '')).size > 1
}
