import type { Challenge } from '@/lib/games/quest/types'
import type { QuestKind } from './skills'

/**
 * The kind a quest challenge is filed under in a student's saved results
 * (./skills.ts QUEST_KINDS says which skill group each kind belongs to).
 *
 * Exhaustive over Challenge: a new challenge type will not compile until it is
 * filed here, so no question is ever saved as a kind the analytics cannot
 * place.
 */
export function questKind(c: Challenge): QuestKind {
  switch (c.type) {
    case 'item': {
      const it = c.item
      if (it.kind === 'who') return it.mode === 'relation' ? 'who-relation' : 'who-role'
      return it.kind
    }
    case 'panel-line':
    case 'line-panel':
      return 'comic'
    case 'rebuild':
      return 'rebuild'
    case 'whose':
    case 'marker':
      return 'portrait'
    case 'theme-check':
      return 'theme-check'
    case 'evidence':
      return 'analysis-quote'
  }
}
