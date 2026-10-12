/**
 * Load one text's quest on the server: its study guide, its comic registry,
 * the served art and the held edition, built into the plain data the page
 * hands the client player.
 *
 * SERVER AND BUILD ONLY, like src/lib/games/text-games/load.ts: it reaches the
 * comic registry, which must never be bundled for the browser.
 *
 * A TEXT IN COPYRIGHT. Its quest is built only from its guided path's own
 * quotations, and the path is measured against the fair-dealing limits
 * (quoted.ts) in loadTextGame. Rather than trust that by construction, every
 * quotation the quest shows is checked against the path's here, and a quest
 * that would quote anything more is thrown, so the page fails where it can be
 * seen instead of quoting past the limits.
 */

import { loadComics } from '@/lib/comics/load'
import { normForMatch } from '@/lib/games/text-games/text'
import {
  hasTextGame,
  loadGameArt,
  loadHeldEdition,
  loadTextGame,
} from '@/lib/games/text-games/load'
import type { TextGame } from '@/lib/games/text-games/types'
import { loadStudyGuide } from '@/lib/study-guides/load'

import { buildQuest } from './build'
import type { Challenge, Quest } from './types'

/** Every quotation a challenge shows a student. */
export function quotationsShown(c: Challenge): string[] {
  switch (c.type) {
    case 'item': {
      const it = c.item
      if (it.kind === 'where' || it.kind === 'finish') return [it.quote]
      if (it.kind === 'method') return [it.example]
      return []
    }
    case 'panel-line':
      return c.options
    case 'line-panel':
    case 'rebuild':
      return [c.quote]
    default:
      return []
  }
}

/** Every quotation a text's guided path shows, normalised for comparison. */
function pathQuotations(game: TextGame): Set<string> {
  const out = new Set<string>()
  for (const r of game.rounds)
    for (const it of r.items) {
      if (it.kind === 'where' || it.kind === 'finish') out.add(normForMatch(it.quote))
      if (it.kind === 'method') out.add(normForMatch(it.example))
    }
  return out
}

/** Quotations a quest for a text in copyright shows that its measured path does not. */
export function quotedBeyondPath(quest: Quest, game: TextGame): string[] {
  const allowed = pathQuotations(game)
  const extra = new Set<string>()
  for (const c of quest.challenges)
    for (const q of quotationsShown(c)) if (!allowed.has(normForMatch(q))) extra.add(q)
  return [...extra]
}

export async function loadQuest(slug: string): Promise<Quest | null> {
  if (!hasTextGame(slug)) return null
  const guide = await loadStudyGuide(slug)
  if (!guide) return null
  const [comics, art, held] = await Promise.all([
    loadComics(slug),
    loadGameArt(slug),
    loadHeldEdition(slug),
  ])
  const quest = buildQuest({ guide, comics, art, held })
  if (guide.rights.status === 'copyright') {
    // loadTextGame throws if the path itself breaks the limits.
    const game = await loadTextGame(slug)
    if (!game) return null
    const extra = quotedBeyondPath(quest, game)
    if (extra.length > 0) {
      throw new Error(
        `${slug}: its quest quotes beyond its measured path: ${extra.slice(0, 3).join(' | ')}`,
      )
    }
  }
  return quest
}
