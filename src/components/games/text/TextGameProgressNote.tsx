'use client'

import { useEffect, useState } from 'react'

import { readProgress, roundsDone, type TextProgress } from '@/lib/games/text-games/progress'
import { ROUND_KINDS } from '@/lib/games/text-games/types'
import { useT } from '@/lib/i18n/use-t'

import { fillText } from './parts'

/**
 * On the index of text games, how far this student has got with one text:
 * "3 of 6 rounds done". Read from this browser after hydration, so the server
 * HTML (which cannot know) and the first browser render agree, and nothing is
 * shown for a text not yet played. It reports; it never urges.
 */
export function TextGameProgressNote({ slug }: { slug: string }) {
  const t = useT()
  const [progress, setProgress] = useState<TextProgress | null>(null)
  useEffect(() => setProgress(readProgress(slug)), [slug])
  if (!progress || progress.total === 0) return null
  const done = roundsDone(progress, ROUND_KINDS)
  if (done === 0) return null
  return (
    <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
      {fillText(t('text_games.progress.rounds_done'), {
        done: Math.min(done, progress.total),
        total: progress.total,
      })}
    </p>
  )
}
