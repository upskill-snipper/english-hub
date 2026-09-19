/**
 * The URL of a set text's study guide, wherever it actually is.
 *
 * WHY THIS IS NOT A TEMPLATE STRING. It used to be, in six places:
 * `/revision/texts/${slug}`, written out at the all-texts index, the Edexcel
 * IGCSE hub, the IAL hub, the revision homepage's featured text, the study
 * planner and the revision-notes pages. That is the right URL for most texts
 * and the wrong one for twenty-eight of the seventy-three. Their guides sit in
 * four other trees - the Edexcel anthology and poetry sets, the AQA Power and
 * Conflict cluster and the revision-notes library - while /revision/texts holds
 * a placeholder or nothing at all.
 *
 * Six copies of the wrong assumption meant six surfaces sending students past a
 * finished guide to an apology, and fixing one fixed one.
 *
 * DELIBERATELY TINY. It imports three generated registers and nothing else, so
 * a client component can use it without pulling the set-text table in with it.
 * `resolveGuide` in shelf.ts answers the richer question - where, and how much
 * of a guide is there - for callers that need readiness as well.
 */

import { GUIDE_LOCATIONS } from './guide-locations.generated'
import { PLACEHOLDER_TEXT_SLUGS } from './placeholder-texts.generated'
import { isStubSetText } from '@/lib/seo/set-text-stubs'

/**
 * Where to send a reader who wants `slug`.
 *
 * `board` is optional and only breaks ties: War Photographer has both an
 * Edexcel IGCSE guide and an AQA Power and Conflict one. Pass it when the
 * caller knows which specification the reader is on.
 *
 * A real page under /revision/texts always wins, so nothing that works today
 * moves. A text with no guide anywhere still returns the canonical URL: the
 * catch-all route serves it and says the guide is in production, which is true
 * and is better than a dead link.
 */
export function textGuideHref(slug: string, board?: string | null): string {
  const canonical = `/revision/texts/${slug}`

  // Not hollow means there is a real page at the canonical URL. It wins.
  if (!PLACEHOLDER_TEXT_SLUGS.has(slug) && !isStubSetText(slug)) return canonical

  const elsewhere = GUIDE_LOCATIONS.get(slug)
  if (!elsewhere || elsewhere.length === 0) return canonical

  return (elsewhere.find((g) => g.board === board) ?? elsewhere[0]).href
}
