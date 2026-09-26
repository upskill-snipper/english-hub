import { BookOpenText, ExternalLink, Headphones, Library, PlayCircle } from 'lucide-react'

import { t } from '@/lib/i18n/t'
import { WHERE_TO_READ, type ReadSource } from '@/lib/study-guides/where-to-read'

const ICON: Record<ReadSource['kind'], typeof BookOpenText> = {
  'full-text': BookOpenText,
  video: PlayCircle,
  audio: Headphones,
  'board-anthology': Library,
}

/**
 * "Read the whole text": the authorised copies listed for this text in
 * src/lib/study-guides/where-to-read.ts, which explains what qualifies. Renders
 * nothing for a text with none, which is most novels and plays.
 */
export async function ReadTheText({ slug }: { slug: string }) {
  const sources = WHERE_TO_READ[slug]
  if (!sources || sources.length === 0) return null

  const [heading, intro, newTab, ...kinds] = await Promise.all([
    t('study_guide.read.heading'),
    t('study_guide.read.intro'),
    t('study_guide.read.new_tab'),
    t('study_guide.read.kind.full_text'),
    t('study_guide.read.kind.video'),
    t('study_guide.read.kind.audio'),
    t('study_guide.read.kind.board_anthology'),
  ])
  const kindLabel: Record<ReadSource['kind'], string> = {
    'full-text': kinds[0],
    video: kinds[1],
    audio: kinds[2],
    'board-anthology': kinds[3],
  }

  return (
    <aside
      aria-label={heading}
      className="rounded-xl border border-primary/25 bg-primary/[0.04] p-4 sm:p-5"
    >
      <p className="font-heading text-heading-sm text-foreground">{heading}</p>
      <p className="mt-1 text-body-sm text-muted-foreground">{intro}</p>
      <ul className="mt-3 space-y-2">
        {sources.map((s) => {
          const Icon = ICON[s.kind]
          return (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-body-sm font-medium text-primary hover:underline"
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{kindLabel[s.kind]}:</span>
                {s.label}
                <ExternalLink className="size-3.5 opacity-60" aria-hidden="true" />
                <span className="sr-only">({newTab})</span>
              </a>
              {s.note && (
                <span className="ms-2 text-body-xs text-muted-foreground">({s.note})</span>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
