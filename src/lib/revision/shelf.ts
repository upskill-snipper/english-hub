/**
 * The board shelf: every set text on a specification, and the truth about each.
 *
 * WHY THE HONESTY MATTERS. Of 73 set texts, 33 have a real guide, 20 render a
 * "study guide in production" placeholder and 20 have no page of their own at
 * all. A shelf that lists all of a student's texts as if they were equal sends
 * roughly a third of its clicks into an apology, with no warning, from a page
 * whose whole job is to look authoritative. Making the shelf discoverable makes
 * the gaps visible, so the gaps have to be labelled rather than hidden.
 *
 * Labelling them also turns the weakness into something useful: the page becomes
 * an accurate map of the specification, which is a thing a student needs
 * regardless of whether we have written the guide yet.
 *
 * NOTHING HERE IS HAND-MAINTAINED. Readiness is derived from two generated
 * registers, both rebuilt from the filesystem on every prebuild, plus the
 * no-dedicated-page list that has a test recomputing it. A guide that gets
 * written is promoted on the shelf by the next build with no edit here.
 */

import type { ExamBoard } from '@/lib/board/board-config'
import { getSetTextsForBoard, type SetText, type TextCategory } from '@/lib/board/set-texts'
import { GUIDE_LOCATIONS } from '@/lib/revision/guide-locations.generated'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { buildTextNav, textSubpageExists } from '@/lib/revision/text-nav'
import { isStubSetText } from '@/lib/seo/set-text-stubs'

/**
 * What a student actually gets behind a card.
 *
 * `full`    a multi-section guide
 * `partial` one real page, no sub-pages yet
 * `none`    a placeholder, or no page of its own
 */
export type TextReadiness = 'full' | 'partial' | 'none'

/**
 * Three sections is the line between a guide and a page.
 *
 * Below it the reader gets an overview and little else, which is worth saying
 * plainly rather than presenting as finished work.
 */
const FULL_GUIDE_SECTIONS = 3

export interface ShelfEntry {
  text: SetText
  readiness: TextReadiness
  sectionCount: number
  href: string
  /** True when we publish the complete work, which only public-domain texts allow. */
  hasFullText: boolean
}

/**
 * Where a text's guide is, and how much of one it is.
 *
 * THE DEFECT THIS FIXES. The href was built as `/revision/texts/<slug>` for
 * every card, and readiness was judged from that page alone. Eighteen texts
 * keep their guide in another tree - nine anthology pieces under
 * /igcse/edexcel-lang/anthology, nine poems under /igcse/edexcel/poetry, 344 to
 * 856 lines each. The shelf sent students past all eighteen to a placeholder or
 * a 404, and labelled the card "no guide yet" as it did so.
 *
 * ORDER MATTERS AND IT IS DELIBERATE. A real page under /revision/texts wins
 * outright, so the canonical URL stays canonical and nothing that works today
 * moves. The generated register is consulted only when that page is a
 * placeholder or absent - the exact case that was broken.
 */
export function resolveGuide(
  slug: string,
  board?: ExamBoard,
): {
  readiness: TextReadiness
  sections: number
  href: string
} {
  const canonical = `/revision/texts/${slug}`
  const sections = buildTextNav(slug).sectionCount

  // A placeholder page and no page at all are the same thing to a reader: there
  // is no guide *here*. `isStubSetText` covers the texts served by the catch-all
  // route; PLACEHOLDER_TEXT_SLUGS covers the ones with a page that says it is
  // not written.
  const hollow = PLACEHOLDER_TEXT_SLUGS.has(slug) || isStubSetText(slug)
  if (!hollow) {
    if (sections >= FULL_GUIDE_SECTIONS) return { readiness: 'full', sections, href: canonical }
    return { readiness: 'partial', sections, href: canonical }
  }

  // Nothing here, but the guide may exist elsewhere. Prefer one written for the
  // board being drawn: War Photographer has an Edexcel IGCSE guide and an AQA
  // Power and Conflict guide, and sending an AQA student to the Edexcel one
  // would be a quieter version of the same bug.
  const elsewhere = GUIDE_LOCATIONS.get(slug)
  if (elsewhere && elsewhere.length > 0) {
    const match = elsewhere.find((g) => g.board === board) ?? elsewhere[0]
    // Those pages are single rich pages with no sub-pages of their own, so
    // `partial` is the honest label: a real guide, but not a multi-section one.
    return { readiness: 'partial', sections: 0, href: match.href }
  }

  return { readiness: 'none', sections: 0, href: canonical }
}

/** Readiness alone, for callers that do not need the destination. */
export function classifyReadiness(slug: string): { readiness: TextReadiness; sections: number } {
  const { readiness, sections } = resolveGuide(slug)
  return { readiness, sections }
}

/** Display order for the shelf, following how a specification is usually set out. */
export const CATEGORY_ORDER: TextCategory[] = [
  'shakespeare',
  '19th-century',
  'modern',
  'prose',
  'poetry-anthology',
  'non-fiction',
]

const CATEGORY_LABEL_KEYS: Record<TextCategory, string> = {
  shakespeare: 'analysis.deep.set_text.cat.shakespeare',
  '19th-century': 'analysis.deep.set_text.cat.nineteenth',
  modern: 'analysis.deep.set_text.cat.modern',
  'poetry-anthology': 'analysis.deep.set_text.cat.poetry_anthology',
  'non-fiction': 'analysis.deep.set_text.cat.non_fiction',
  prose: 'analysis.deep.set_text.cat.prose',
}

export function categoryLabelKey(category: TextCategory): string {
  return CATEGORY_LABEL_KEYS[category]
}

export function buildShelf(board: ExamBoard): ShelfEntry[] {
  return getSetTextsForBoard(board).map((text) => {
    const { readiness, sections, href } = resolveGuide(text.slug, board)
    return {
      text,
      readiness,
      sectionCount: sections,
      href,
      hasFullText: textSubpageExists(text.slug, 'read'),
    }
  })
}

/**
 * The shelf grouped for display, empty categories dropped.
 *
 * Ordering within a category puts the texts we can actually teach first. A
 * student scanning for what to revise tonight should not have to read past four
 * placeholders to find the guide, and a shelf that buries its best work is
 * worse than an alphabetical one.
 */
export function groupShelf(
  entries: ShelfEntry[],
): { category: TextCategory; labelKey: string; entries: ShelfEntry[] }[] {
  const rank: Record<TextReadiness, number> = { full: 0, partial: 1, none: 2 }
  return CATEGORY_ORDER.map((category) => ({
    category,
    labelKey: categoryLabelKey(category),
    entries: entries
      .filter((e) => e.text.category === category)
      .sort(
        (a, b) => rank[a.readiness] - rank[b.readiness] || a.text.title.localeCompare(b.text.title),
      ),
  })).filter((g) => g.entries.length > 0)
}
