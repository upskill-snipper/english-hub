import { getGameTaxon } from '@/lib/learning-profile/taxonomy'
import { getSetText } from '@/lib/board/set-texts'
import type { GameAnalytics } from './analytics'

/**
 * The display name of every game and text in a set of analytics, keyed
 * 'skills:<slug>' or 'quest:<slug>'. Game names come from the game taxonomy,
 * set-text titles from the set-text register; both are English, and a title
 * is shown in English in every locale, as the quests show it.
 */
export function activityNames(
  a: GameAnalytics,
  extraGames: readonly string[] = [],
): Record<string, string> {
  const out: Record<string, string> = {}
  for (const slug of extraGames) out[`skills:${slug}`] = getGameTaxon(slug).title
  for (const act of a.activities) {
    const key = `${act.source}:${act.activity}`
    out[key] =
      act.source === 'quest'
        ? (getSetText(act.activity)?.title ?? act.activity)
        : getGameTaxon(act.activity).title
  }
  return out
}
