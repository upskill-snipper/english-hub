'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

import { readQuestProgress } from '@/lib/games/quest/progress'
import { useT } from '@/lib/i18n/use-t'

import { fillText } from './parts'

/**
 * On the index of text games, how far this student has got with one text:
 * the stars they have earned in its quest. Read from this browser after
 * hydration, so the server HTML (which cannot know) and the first browser
 * render agree, and nothing is shown for a text not yet played. It reports;
 * it never urges.
 *
 * Until 12 October 2026 it counted the guided path's rounds. The text pages
 * now play quests (src/lib/games/quest), so it reads the quest's store; the
 * index does not build every quest, so it gives the stars earned rather than
 * "of how many".
 */
export function TextGameProgressNote({ slug }: { slug: string }) {
  const t = useT()
  const [stars, setStars] = useState(0)
  useEffect(() => {
    const p = readQuestProgress(slug)
    setStars(Object.values(p.levels).reduce((n, l) => n + l.stars, 0))
  }, [slug])
  if (stars === 0) return null
  return (
    <p className="inline-flex items-center gap-1 text-xs font-medium text-amber-900 dark:text-amber-200">
      <Star className="size-3.5 fill-amber-400 text-amber-500" aria-hidden="true" />
      {fillText(t('quest.progress.stars'), { n: stars })}
    </p>
  )
}
