/**
 * Where a set text's guided games are, or null when it has none.
 *
 * WHAT THE RULE IS. A text has guided games at /games/texts/<slug> when its
 * study guide is of a public-domain text and it is not one of the texts left
 * out of the games. A game quotes and rearranges the text far more freely than
 * a guide does, and the fair-dealing limits on a text in copyright do not
 * stretch that far, so copyrighted texts get no text games in this phase.
 * Offering "Play this text" on An Inspector Calls would be a link to a page
 * that does not exist.
 *
 * THE RULE IS NOT DECIDED HERE. It belongs to the games themselves, in
 * src/lib/games/text-games/slugs.ts, which is also what the route's
 * generateStaticParams, its index page and the sitemap read. This file only
 * turns that answer into a link, so the rail, the revision hub, the games hub
 * and the homepage cannot offer a text the games do not have. (A first version
 * of this file kept its own copy of the left-out list; two lists for one fact
 * is how one of them goes stale.)
 *
 * SMALL ENOUGH FOR THE CLIENT. slugs.ts imports one generated register and
 * nothing else, so the rail and other client components can use this without
 * carrying the set-text table, a study guide or the comic registry.
 * text-games-are-offered-only-where-they-exist.test.ts holds the register to
 * the guides it is generated from.
 */

import { hasTextGame } from '@/lib/games/text-games/slugs'

/** The index of every text that has guided games. */
export const TEXT_GAMES_INDEX = '/games/texts'

/**
 * Slugs as they arrive from a URL or a progress row. Anything else is not
 * looked up, so a query string cannot put arbitrary text into an href.
 */
const SLUG = /^[a-z0-9-]+$/

/**
 * The guided-games page for `slug`, or null when the text has none.
 *
 * Expects the set-text slug. The revision-notes library spells six texts
 * without their article (`christmas-carol`); callers holding a route segment
 * pass it through `canonicalTextSlug` first, as the rail already does for every
 * other link it builds.
 */
export function textGamesHref(slug: string | null | undefined): string | null {
  if (!slug || !SLUG.test(slug)) return null
  return hasTextGame(slug) ? `${TEXT_GAMES_INDEX}/${slug}` : null
}
