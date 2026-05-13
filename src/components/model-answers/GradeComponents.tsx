import { t } from '@/lib/i18n/t'
import type { GradeLevel } from './grade-data'

/* ─── Grade badge ───────────────────────────────────────────── */

export function GradeBadge({ grade, color }: { grade: string; color: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white ${color}`}
    >
      {grade}
    </span>
  )
}

/* ─── "What makes this a Grade X?" summary box ──────────────── */

// Maps the EN descriptor strings on the GradeLevel records to dictionary keys.
// Keeps grade-data.ts framework-agnostic — only this consumer translates.
const DESCRIPTOR_KEY: Record<string, string> = {
  Exceptional: 'model_answers.grade.descriptor.exceptional',
  Strong: 'model_answers.grade.descriptor.strong',
  Solid: 'model_answers.grade.descriptor.solid',
  Developing: 'model_answers.grade.descriptor.developing',
}

export async function GradeSummary({ level, points }: { level: GradeLevel; points: string[] }) {
  const headingPrefix = await t('model_answers.summary.heading_prefix')
  const gradeLabel = await t(`model_answers.grade.label.${level.grade}`)
  const descriptorKey = DESCRIPTOR_KEY[level.descriptor]
  const descriptor = descriptorKey ? await t(descriptorKey) : level.descriptor

  return (
    <div className={`mt-4 rounded-xl border-2 ${level.borderColor} bg-card p-5`}>
      <h4 className="font-bold text-foreground">
        {headingPrefix} {gradeLabel} ({descriptor})?
      </h4>
      <ul className="mt-2 space-y-1.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${level.bgColor}`} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
