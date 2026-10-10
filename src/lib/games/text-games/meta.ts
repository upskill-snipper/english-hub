/**
 * The search-result title and description of a text's game page.
 *
 * Computed here rather than in the page's generateMetadata so the text-games
 * test can measure every one of them: src/__tests__/a-title-fits-in-a-search-result.test.ts
 * cannot read a title that generateMetadata computes, and says so. Google shows
 * about 60 characters of a title and 160 of a description.
 *
 * Pages under /games render their titles without the site template (the games
 * layout sets a plain-string title, which passes no template down), so the
 * brand is added here when it fits.
 *
 * The description names only the rounds the path really has: a text whose
 * guide has no language analysis is not promised a methods round.
 */

import type { RoundKind, TextGame } from './types'

export const TITLE_LIMIT = 60
export const DESCRIPTION_LIMIT = 160
const BRAND = ' - The English Hub'

export function textGameTitle(title: string): string {
  const candidates = [`${title} revision game${BRAND}`, `${title} revision game`, `${title} quiz`]
  return candidates.find((c) => c.length <= TITLE_LIMIT) ?? title.slice(0, TITLE_LIMIT)
}

/** What each round covers, in the plain words of a search result. */
const COVERS: Record<RoundKind, string> = {
  who: 'characters',
  order: 'story order',
  where: 'quotations',
  finish: 'quotations',
  method: 'methods',
  theme: 'themes',
}

function list(items: string[]): string {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}

export function textGameDescription(game: Pick<TextGame, 'title' | 'author' | 'rounds'>): string {
  const covers = list([...new Set(game.rounds.map((r) => COVERS[r.kind]))])
  const n = game.rounds.length
  const candidates = [
    `Revise ${game.title} by ${game.author} in ${n} short rounds on ${covers}, built from our study guide, with every answer marked at once.`,
    `Revise ${game.title} in ${n} short rounds on ${covers}, built from our study guide, with every answer marked at once.`,
    `Revise ${game.title} in ${n} short rounds on ${covers}, built from our study guide.`,
    `${n} short revision rounds on ${game.title}, built from our study guide.`,
  ]
  return candidates.find((c) => c.length <= DESCRIPTION_LIMIT) ?? candidates[candidates.length - 1]
}

/** The share card's caption: the full title, since a card is not cut off at 60 characters. */
export function textGameSocialTitle(title: string): string {
  return `${title} revision game${BRAND}`
}
