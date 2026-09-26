import type { ReactNode } from 'react'
import { Clapperboard } from 'lucide-react'

import { RegisteredPanel } from '@/components/comics/linocut/pieces'
import { loadComics } from '@/lib/comics/load'
import { t } from '@/lib/i18n/t'
import { inPart, showsPartChips } from '@/lib/study-guides/parts'
import type { StudyGuide } from '@/lib/study-guides/types'
import { StoryVisualsClient, type StoryVisualsLabels } from './story-visuals-client'

/**
 * The visual-learning block for one text: server wrapper that resolves the
 * labels in the reader's locale and hands the guide's timeline and character
 * map to the animated client component.
 *
 * COMIC PANELS (26 September 2026). Where a text has linocut panels registered
 * in src/data/comics/<slug>/, each is rendered HERE, on the server, and handed
 * to the client as a finished React element keyed by its moment's title. The
 * client only chooses which one to show. So the drawings, and the carving code
 * that builds them, never enter the client bundle; the page carries their
 * markup instead. Only panels for moments in this timeline are sent, so an act
 * page sends that act's panels and no others.
 *
 * `headingLevel` follows the page it sits in: an h2 on a guide page, an h3
 * inside a supplement block that already has its own h2.
 */
export async function StoryVisuals({
  guide,
  headingLevel = 'h2',
  part,
  scenesOnly = Boolean(part),
}: {
  guide: StudyGuide
  headingLevel?: 'h2' | 'h3'
  /**
   * For a single act or chapter page: keep only the moments in this part of the
   * text ("Act 1", "Chapter 3"), matched exactly on the reference before its
   * first comma (see src/lib/study-guides/parts.ts).
   */
  part?: string
  /**
   * Scene player only, without the whole-text arc and character map. The
   * default for a single part; an act-by-act or chapter-by-chapter overview
   * page sets it too, since its parent page already carries the arc and map.
   */
  scenesOnly?: boolean
}) {
  const timeline = part ? guide.timeline.filter((m) => inPart(m.where, part)) : guide.timeline
  if (timeline.length === 0) return null

  const keys = [
    'arc_title',
    'arc_desc',
    'arc_note',
    'scenes_title',
    'map_title',
    'map_hint',
    'play',
    'pause',
    'previous',
    'next',
    'moment_of',
    'of',
    'setting',
    'who',
    'why',
    'tension',
    'all_themes',
    'theme_filter',
    'parts',
  ] as const
  // The whole-text intro names the arc and the character map, so a page that
  // shows the scene player alone says what it does show instead, and offers
  // the part chips only where the player draws them.
  const [heading, intro, ...values] = await Promise.all([
    t('study_guide.visuals.heading'),
    t(
      part
        ? 'study_guide.visuals.intro_part'
        : !scenesOnly
          ? 'study_guide.visuals.intro'
          : showsPartChips(timeline.map((m) => m.where))
            ? 'study_guide.visuals.intro_scenes'
            : 'study_guide.visuals.intro_scenes_all',
    ),
    ...keys.map((k) => t(`study_guide.visuals.${k}`)),
  ])
  const v = Object.fromEntries(keys.map((k, i) => [k, values[i]])) as Record<
    (typeof keys)[number],
    string
  >
  const labels: StoryVisualsLabels = {
    arcTitle: v.arc_title,
    arcDesc: v.arc_desc,
    arcNote: v.arc_note,
    scenesTitle: v.scenes_title,
    mapTitle: v.map_title,
    mapHint: v.map_hint,
    play: v.play,
    pause: v.pause,
    previous: v.previous,
    next: v.next,
    momentOf: v.moment_of,
    of: v.of,
    setting: v.setting,
    who: v.who,
    why: v.why,
    tension: v.tension,
    allThemes: v.all_themes,
    themeFilter: v.theme_filter,
    parts: v.parts,
  }

  // The theme filter lists the guide's own themes where it has them. A
  // supplement whose themes live on the existing page still tags its moments,
  // so the filter falls back to the themes the moments name.
  const themes =
    guide.themes && guide.themes.length > 0
      ? guide.themes.map((th) => th.title)
      : [...new Set(timeline.flatMap((m) => m.themes))]

  const comics = await loadComics(guide.slug)
  const panels: Record<string, ReactNode> = {}
  for (const panel of comics?.panels ?? [])
    if (timeline.some((m) => m.title === panel.moment))
      panels[panel.moment] = <RegisteredPanel slug={guide.slug} panel={panel} />

  const Heading = headingLevel
  const id = `guide-${guide.slug}-visuals`

  return (
    <section aria-labelledby={id}>
      <div className="mb-5 flex items-center gap-3">
        <Clapperboard className="size-5 text-primary" aria-hidden="true" />
        <div>
          <Heading id={id} className="font-heading text-heading-lg text-foreground">
            {heading}
          </Heading>
          <p className="text-body-sm text-muted-foreground">{intro}</p>
        </div>
      </div>
      <StoryVisualsClient
        timeline={timeline}
        relationships={guide.relationships}
        themes={themes}
        labels={labels}
        scenesOnly={scenesOnly}
        panels={panels}
      />
    </section>
  )
}
