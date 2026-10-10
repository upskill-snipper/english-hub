/**
 * Which texts have guided games. Deliberately tiny: it imports one generated
 * register and nothing else, so the sitemap, the index page and any client
 * component that links to a game can ask it without carrying a guide, the
 * comic registry or a held edition.
 *
 * A text has a guided path when its study guide is of a public-domain text
 * (src/lib/study-guides/public-domain.generated.ts, generated from each
 * guide's own `rights.status`) and it is not left out below.
 */

import { PUBLIC_DOMAIN_GUIDE_SLUGS } from '@/lib/study-guides/public-domain.generated'

/**
 * Public-domain texts left out of the text games on purpose.
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
  return PUBLIC_DOMAIN_GUIDE_SLUGS.has(slug) && !LEFT_OUT_OF_TEXT_GAMES.has(slug)
}

/** Every text with a guided path, in slug order. */
export function textGameSlugs(): string[] {
  return [...PUBLIC_DOMAIN_GUIDE_SLUGS].filter(hasTextGame).sort()
}
