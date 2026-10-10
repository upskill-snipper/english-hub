/**
 * Which texts have guided games. Deliberately tiny: it imports one generated
 * register and nothing else, so the sitemap, the index page and any client
 * component that links to a game can ask it without carrying a guide, the
 * comic registry or a held edition.
 *
 * A text has a guided path when it has a study guide
 * (src/lib/study-guides/guide-rights.generated.ts, generated from each guide's
 * own `rights.status`) and it is not left out below.
 *
 * Texts in copyright were left out until 10 October 2026, on the reasoning
 * that a game quotes a text far more freely than a guide does. Measured, it
 * does not: a path is built only from its guide's own quotations, so it quotes
 * a subset of what the guide page already quotes within the fair-dealing
 * limits. Each path of a text in copyright is held to those limits by
 * quoted.ts, when it is built and on every test run.
 */

import {
  COPYRIGHT_GUIDE_SLUGS,
  PUBLIC_DOMAIN_GUIDE_SLUGS,
} from '@/lib/study-guides/guide-rights.generated'

/**
 * Texts left out of the text games on purpose.
 *
 * Do not go gentle into that good night: the founder asked (10 October 2026)
 * for this poem to be skipped in all agent-built work, because agents
 * processing it are repeatedly stopped by a content filter. It keeps its study
 * guide; it has no games. Anything that links to a game asks hasTextGame().
 */
export const LEFT_OUT_OF_TEXT_GAMES: ReadonlySet<string> = new Set([
  'do-not-go-gentle-into-that-good-night',
])

/** Does `slug` have a guided path at /games/texts/<slug>? */
export function hasTextGame(slug: string): boolean {
  return (
    (PUBLIC_DOMAIN_GUIDE_SLUGS.has(slug) || COPYRIGHT_GUIDE_SLUGS.has(slug)) &&
    !LEFT_OUT_OF_TEXT_GAMES.has(slug)
  )
}

/** Every text with a guided path, in slug order. */
export function textGameSlugs(): string[] {
  return [...PUBLIC_DOMAIN_GUIDE_SLUGS, ...COPYRIGHT_GUIDE_SLUGS].filter(hasTextGame).sort()
}
