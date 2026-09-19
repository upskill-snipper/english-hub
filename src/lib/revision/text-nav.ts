/**
 * The text-scoped navigation model.
 *
 * WHY THIS EXISTS. Standing on /revision/texts/macbeth, the sidebar a student
 * saw was the site-wide revision register: Poetry, Language skills, Mock exams,
 * Games, Toolkit, Vocabulary. Twenty-eight entries, not one of them about
 * Macbeth. Everything genuinely about the text was an in-body tile grid that
 * disappeared the moment you clicked into a sub-page, after which the only way
 * onward was two hand-wired footer buttons. A student who had chosen a text had
 * no way to move around inside it.
 *
 * THE RULE THIS FILE ENFORCES, AND WHY IT IS THE WHOLE POINT. A section appears
 * in the navigation only when its route is present in TEXT_SUBPAGE_ROUTES, the
 * generated register of `page.tsx` files that actually exist on disk. The
 * previous in-body grid was fed a hand-written array at each of its call sites
 * and declared 172 tiles against 93 real routes, so 79 of them pointed at
 * nothing. It filtered them out at render time, which hid the breakage rather
 * than fixing it and left twelve texts showing a "Study this text" heading above
 * an empty grid.
 *
 * Deriving the nav from the filesystem register means the failure mode inverts:
 * a section cannot be advertised unless it exists, and a new sub-page appears in
 * the nav the moment `scripts/generate-text-subpage-map.mjs` next runs, which is
 * on every prebuild. Nothing to keep in sync by hand.
 *
 * THE GROUPING is by study object - the text, its characters, its ideas, its
 * quotations, the exam - rather than by our route names. That is how a student
 * thinks about revision, and it survives the fact that the structure section is
 * called `acts` for one text, `chapters` for another and `staves` for
 * A Christmas Carol.
 */

import { TEXT_SUBPAGE_ROUTES } from '@/lib/revision/text-subpages.generated'
import { textGuideHref } from '@/lib/revision/guide-href'

/** The five study objects a text page is organised around. */
export type TextNavGroupKey = 'text' | 'characters' | 'ideas' | 'quotations' | 'exam'

/**
 * Icon names rather than components, so this module stays data-only and can be
 * imported by a server component without dragging an icon library with it.
 */
export type TextNavIcon =
  | 'read'
  | 'structure'
  | 'characters'
  | 'themes'
  | 'context'
  | 'quotes'
  | 'essays'
  | 'extract'
  | 'mark'

export interface TextNavItem {
  /** Absolute path. Always a route proven to exist. */
  href: string
  /** i18n key for the label. Resolved at render time. */
  labelKey: string
  icon: TextNavIcon
  group: TextNavGroupKey
}

export interface TextNavGroup {
  key: TextNavGroupKey
  labelKey: string
  items: TextNavItem[]
}

export interface TextNav {
  slug: string
  /** The text's own hub page. */
  hubHref: string
  groups: TextNavGroup[]
  /** How many real sections this text has. Zero means a stub. */
  sectionCount: number
}

/**
 * The section register, in the order a student would work through them.
 *
 * `segment` is the route segment under /revision/texts/<slug>. The three
 * structure spellings are alternatives, not siblings: a play has acts, a novel
 * has chapters, and A Christmas Carol has staves. Only the one that exists is
 * offered, and only one is ever offered.
 */
const STRUCTURE_SEGMENTS = [
  { segment: 'acts', labelKey: 'textnav.structure.acts' },
  { segment: 'chapters', labelKey: 'textnav.structure.chapters' },
  { segment: 'staves', labelKey: 'textnav.structure.staves' },
] as const

const SECTIONS: {
  segment: string
  labelKey: string
  icon: TextNavIcon
  group: TextNavGroupKey
}[] = [
  { segment: 'read', labelKey: 'textnav.read', icon: 'read', group: 'text' },
  {
    segment: 'characters',
    labelKey: 'textnav.characters',
    icon: 'characters',
    group: 'characters',
  },
  { segment: 'themes', labelKey: 'textnav.themes', icon: 'themes', group: 'ideas' },
  { segment: 'context', labelKey: 'textnav.context', icon: 'context', group: 'ideas' },
  { segment: 'key-quotes', labelKey: 'textnav.key_quotes', icon: 'quotes', group: 'quotations' },
  { segment: 'essay-plans', labelKey: 'textnav.essay_plans', icon: 'essays', group: 'exam' },
  {
    segment: 'extract-walkthrough',
    labelKey: 'textnav.extract_walkthrough',
    icon: 'extract',
    group: 'exam',
  },
]

const GROUP_ORDER: { key: TextNavGroupKey; labelKey: string }[] = [
  { key: 'text', labelKey: 'textnav.group.the_text' },
  { key: 'characters', labelKey: 'textnav.group.characters' },
  { key: 'ideas', labelKey: 'textnav.group.ideas' },
  { key: 'quotations', labelKey: 'textnav.group.quotations' },
  { key: 'exam', labelKey: 'textnav.group.exam' },
]

/** True when /revision/texts/<slug>/<segment> is a real page on disk. */
export function textSubpageExists(slug: string, segment: string): boolean {
  return TEXT_SUBPAGE_ROUTES.has(`/revision/texts/${slug}/${segment}`)
}

/**
 * The structure section for a text, or null when it has none.
 *
 * Macbeth is the awkward case: it carries `acts` AND `act-1`, `act-2`, `act-3`.
 * The index is the right destination when it exists, because the per-act pages
 * are reachable from it; offering four entries in a sidebar would crowd out
 * everything else.
 */
function structureItem(slug: string): TextNavItem | null {
  for (const candidate of STRUCTURE_SEGMENTS) {
    if (textSubpageExists(slug, candidate.segment)) {
      return {
        href: `/revision/texts/${slug}/${candidate.segment}`,
        labelKey: candidate.labelKey,
        icon: 'structure',
        group: 'text',
      }
    }
  }
  return null
}

/**
 * Build the navigation for one text from what actually exists.
 *
 * Returns empty groups for a text with no sub-pages - twenty of the fifty-three
 * text folders are placeholders - so the caller can render the hub without a
 * rail rather than rendering a rail full of nothing.
 */
export function buildTextNav(slug: string): TextNav {
  const items: TextNavItem[] = []

  const structure = structureItem(slug)

  for (const section of SECTIONS) {
    if (!textSubpageExists(slug, section.segment)) continue
    items.push({
      href: `/revision/texts/${slug}/${section.segment}`,
      labelKey: section.labelKey,
      icon: section.icon,
      group: section.group,
    })
    // The structure entry belongs directly after "Read the full text", which is
    // the only other member of the `text` group.
    if (section.segment === 'read' && structure) items.push(structure)
  }

  // A text with no `read` route still gets its structure entry; without this the
  // fifty-one texts that have chapters but no readable full text would lose it.
  if (structure && !items.includes(structure)) items.unshift(structure)

  const groups: TextNavGroup[] = GROUP_ORDER.map((g) => ({
    key: g.key,
    labelKey: g.labelKey,
    items: items.filter((i) => i.group === g.key),
  })).filter((g) => g.items.length > 0)

  return {
    slug,
    // Not the canonical URL unconditionally. For 28 set texts that page is a
    // placeholder and the real guide is in another tree, so the rail's own
    // "back to this text" link used to send the reader from the guide they were
    // reading to an apology about it.
    hubHref: textGuideHref(slug),
    groups,
    sectionCount: items.length,
  }
}

/**
 * Every route prefix under which a set text's guide can live.
 *
 * WHY THERE ARE FIVE AND NOT ONE. /revision/texts is where a guide is supposed
 * to be, and for 28 of the set texts it is not: their only real guide sits in
 * the Edexcel anthology or poetry sets, the AQA Power and Conflict cluster, or
 * the revision-notes library. The board shelves were corrected on 19 September
 * 2026 to link to the guide that exists rather than to the placeholder.
 *
 * That left the reader on a real guide with no text-scoped navigation, because
 * this resolver only recognised the canonical prefix. Studying The Yellow
 * Wallpaper, they saw the site-wide menu and no way back to the text they were
 * reading - which is how a founder clicking through IGCSE Language reported
 * ending up "back on an overview page".
 *
 * Kept as an explicit list rather than a loose pattern: a prefix that is not
 * here is not a guide, and a bare hub - /revision/texts, /resources/revision-
 * notes - must not resolve to a text either.
 */
const TEXT_ROUTE_PREFIXES = [
  '/revision/texts',
  '/igcse/edexcel-lang/anthology',
  '/igcse/edexcel/poetry',
  '/revision/poetry/power-and-conflict',
  '/resources/revision-notes',
] as const

/**
 * Pull the text slug out of a pathname, or null when the path is not inside a
 * text.
 *
 * Deliberately strict about the shape: a bare prefix is the shelf, not a text,
 * and prefix + one segment is the only depth that names one.
 */
export function textSlugFromPath(pathname: string | null | undefined): string | null {
  if (!pathname) return null
  for (const prefix of TEXT_ROUTE_PREFIXES) {
    const match = new RegExp(`^${prefix}/([a-z0-9-]+)(?:/|$)`).exec(pathname)
    if (match?.[1]) return match[1]
  }
  return null
}
