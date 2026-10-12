import {
  BookImage,
  Brush,
  Crown,
  Flag,
  Library,
  Quote,
  Repeat,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from 'lucide-react'

import type { AchievementId } from '@/lib/games/quest/progress'

/**
 * Each achievement's name, what earns it, and its icon. The keys are literal
 * and held in titleKey and descKey, the property names the dictionary check
 * (scripts/check-dictionary-keys-exist.mjs) looks up; a key built from the id
 * at render could not be checked.
 */
export const ACHIEVEMENT_WORDS: Record<
  AchievementId,
  { titleKey: string; descKey: string; icon: LucideIcon }
> = {
  'first-level': {
    titleKey: 'quest.ach.first_level.name',
    descKey: 'quest.ach.first_level.what',
    icon: Flag,
  },
  'three-stars': {
    titleKey: 'quest.ach.three_stars.name',
    descKey: 'quest.ach.three_stars.what',
    icon: Star,
  },
  perfect: {
    titleKey: 'quest.ach.perfect.name',
    descKey: 'quest.ach.perfect.what',
    icon: Sparkles,
  },
  'chapter-inked': {
    titleKey: 'quest.ach.chapter_inked.name',
    descKey: 'quest.ach.chapter_inked.what',
    icon: Brush,
  },
  'comic-complete': {
    titleKey: 'quest.ach.comic_complete.name',
    descKey: 'quest.ach.comic_complete.what',
    icon: BookImage,
  },
  'full-cast': {
    titleKey: 'quest.ach.full_cast.name',
    descKey: 'quest.ach.full_cast.what',
    icon: Users,
  },
  'whole-story': {
    titleKey: 'quest.ach.whole_story.name',
    descKey: 'quest.ach.whole_story.what',
    icon: Crown,
  },
  'quote-smith': {
    titleKey: 'quest.ach.quote_smith.name',
    descKey: 'quest.ach.quote_smith.what',
    icon: Quote,
  },
  'three-texts': {
    titleKey: 'quest.ach.three_texts.name',
    descKey: 'quest.ach.three_texts.what',
    icon: Library,
  },
  review: { titleKey: 'quest.ach.review.name', descKey: 'quest.ach.review.what', icon: Repeat },
}
