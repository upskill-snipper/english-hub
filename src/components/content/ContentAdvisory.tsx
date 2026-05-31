// Content advisory — surfaces the themes present in a set text so school
// leaders, parents and teachers can review BEFORE assigning the text to
// students. Standard educational practice mirrored from the published
// exam-board teaching materials.
//
// This component is intentionally neutral: it states what is in the
// published syllabus text and links to the school content policy. It
// does NOT make value judgements and does NOT block content.
//
// 2026-05-20 — cultural-sensitivity audit (Qatar / GCC market): every
// set-text page now carries an advisory at the top so a Qatari head
// teacher visiting the site can see at a glance whether a given text
// is right for their cohort.

import Link from 'next/link'
import { Info } from 'lucide-react'

export type AdvisoryTheme =
  /** Allegorical or symbolic depictions of farm animals (e.g. Animal Farm). */
  | 'allegorical_animals'
  /** Scenes of violence, conflict or warfare. */
  | 'violence'
  /** Depictions of crime, criminality or institutional injustice. */
  | 'crime_injustice'
  /** Depictions of death, mortality or grief. */
  | 'mortality'
  /** Intimate-relationship themes, romantic content or implied sexual content. */
  | 'intimate_relationships'
  /** Depictions of mental illness, breakdown or suicide. */
  | 'mental_health'
  /** Depictions of addiction, substance use or alcohol. */
  | 'addiction'
  /** Discrimination, racism, prejudice or class conflict. */
  | 'discrimination'
  /** Colonialism, empire, or post-colonial themes. */
  | 'colonialism'
  /** Mythological or religious imagery and references. */
  | 'mythological_religious'
  /** Supernatural elements (ghosts, witches, the gothic). */
  | 'supernatural'
  /** Political ideology, totalitarianism, propaganda. */
  | 'political_ideology'

const THEME_LABELS: Record<AdvisoryTheme, string> = {
  allegorical_animals: 'Allegorical depictions of farm animals',
  violence: 'Scenes of violence or conflict',
  crime_injustice: 'Depictions of crime or institutional injustice',
  mortality: 'Death, mortality and grief',
  intimate_relationships: 'Intimate-relationship themes',
  mental_health: 'Mental illness or breakdown',
  addiction: 'Addiction or substance use',
  discrimination: 'Discrimination, racism or class conflict',
  colonialism: 'Colonialism or empire',
  mythological_religious: 'Mythological or religious imagery',
  supernatural: 'Supernatural elements',
  political_ideology: 'Political ideology or propaganda',
}

export interface ContentAdvisoryProps {
  /** Themes present in the published syllabus text. */
  themes?: AdvisoryTheme[]
  /** Optional override note (e.g. board-specific framing). */
  note?: string
  /** Exam-board names the text is set for ("AQA · Edexcel · OCR"). */
  boards?: string
  /** Compact variant — used inline on cards rather than as a top-of-page panel. */
  compact?: boolean
}

const DEFAULT_NOTE =
  'This text is part of a published exam-board syllabus. School leaders, parents and teachers are encouraged to review its themes before assigning it to students.'

export function ContentAdvisory({ themes, note, boards, compact = false }: ContentAdvisoryProps) {
  const resolvedNote = note ?? DEFAULT_NOTE
  const hasThemes = themes && themes.length > 0
  return (
    <aside
      aria-label="Content guidance"
      className={
        compact
          ? 'flex items-start gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-xs text-muted-foreground'
          : 'rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-4 sm:p-5'
      }
    >
      <Info
        aria-hidden="true"
        className={
          compact
            ? 'mt-0.5 size-3.5 shrink-0 text-amber-600 dark:text-amber-300'
            : 'mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-300'
        }
      />
      <div className={compact ? 'flex-1' : 'flex-1 space-y-2'}>
        {!compact && (
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
            Content guidance{boards ? <> · {boards}</> : null}
          </p>
        )}
        <p className={compact ? '' : 'text-sm leading-relaxed text-foreground'}>{resolvedNote}</p>
        {hasThemes && !compact && (
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            {themes.map((theme) => (
              <li key={theme} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1 shrink-0 rounded-full bg-amber-500/70"
                />
                <span>{THEME_LABELS[theme]}</span>
              </li>
            ))}
          </ul>
        )}
        {!compact && (
          <p className="pt-1 text-[11px] text-muted-foreground">
            See our{' '}
            <Link
              href="/legal/school-content-policy"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              School content policy
            </Link>{' '}
            for how content is selected and how schools can shape what students see.
          </p>
        )}
      </div>
    </aside>
  )
}
