/**
 * The revision-notes library's own slugs, mapped to set-text slugs.
 *
 * WHY THIS IS SHARED RATHER THAN LOCAL. The revision-notes guides were written
 * with shorter directory names than the set-text register uses -
 * `christmas-carol` against `a-christmas-carol`, `inspector-calls` against
 * `an-inspector-calls` - and the map lived privately inside that route's board
 * guard.
 *
 * That was fine while only the guard needed it. It stopped being fine on
 * 19 September 2026, when the text-scoped rail started rendering on those pages
 * and answering "is this text on your course?". Resolving `christmas-carol`
 * against SET_TEXTS finds nothing, so the rail was about to tell an AQA student
 * that A Christmas Carol is not on their course - a text all four UK boards
 * set, and one of the most studied on the site.
 *
 * Two consumers, one map, and a test that every alias points at a real set text.
 */

import { getSetText } from '@/lib/board/set-texts'

/** Local directory name -> set-text slug, where they differ. */
export const TEXT_SLUG_ALIASES: Readonly<Record<string, string>> = {
  'christmas-carol': 'a-christmas-carol',
  'inspector-calls': 'an-inspector-calls',
  'merchant-of-venice': 'the-merchant-of-venice',
  'sign-of-four': 'the-sign-of-four',
  'view-from-the-bridge': 'a-view-from-the-bridge',
  'much-ado': 'much-ado-about-nothing',
}

/**
 * The set-text slug for a route segment, or the segment itself.
 *
 * Returning the input unchanged is deliberate: most slugs match already, and a
 * caller that needs to know whether the result is a real set text should ask
 * `getSetText`, which is a different question from "what is this called".
 */
export function canonicalTextSlug(slug: string): string {
  return TEXT_SLUG_ALIASES[slug] ?? slug
}

/**
 * Is this a set text we actually hold, under either name?
 *
 * The rail needs this before it tells anybody a text is off their course:
 * "we have no record of this" and "your board does not set this" are different
 * statements, and only one of them is safe to print.
 */
export function isKnownSetText(slug: string): boolean {
  return Boolean(getSetText(canonicalTextSlug(slug)))
}
