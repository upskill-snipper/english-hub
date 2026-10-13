'use client'

import { useEffect, useState } from 'react'
import { Lightbulb } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { fill } from '@/components/games/fill'
import { EnglishText } from '@/components/i18n/EnglishText'
import { loadExplanations } from '@/lib/games/explanations/load'
import type { Explanation } from '@/lib/games/explanations/types'

/**
 * The explanation shown after a skills game question is answered: why the
 * answer is right, why the option chosen is not (when it was wrong), what the
 * device does or when the rule applies, and how to use it
 * (src/lib/games/explanations/types.ts).
 *
 * A game page renders this in its feedback, keyed by its bank's key(item). It
 * renders nothing until the explanation has loaded, and nothing at all for a
 * question without one, so a page can be wired before its explanations are
 * written. The explanation is English content, as the questions are, and is
 * marked as such inside an Arabic or Spanish page.
 */
export function AnswerExplanation({
  game,
  question,
  correct,
  chosen,
  className,
}: {
  game: string
  /** GameBank.key(item) for the question just answered. */
  question: string
  correct: boolean
  /** The option the student chose, as shown. Left out for a typed answer. */
  chosen?: string | null
  className?: string
}) {
  const t = useT()
  const [ex, setEx] = useState<Explanation | null>(null)

  useEffect(() => {
    let live = true
    setEx(null)
    void loadExplanations(game).then((all) => {
      if (live) setEx(all?.[question] ?? null)
    })
    return () => {
      live = false
    }
  }, [game, question])

  if (!ex) return null
  const whyNot = !correct && chosen ? ex.not?.[chosen] : undefined

  return (
    <div
      className={
        className ??
        'mt-4 space-y-2.5 rounded-xl border border-border/70 bg-muted/40 p-4 text-sm leading-relaxed'
      }
      data-answer-explanation=""
    >
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <Lightbulb className="size-3.5" aria-hidden="true" />
        {t('games.deep.title')}
      </p>
      <p>
        <span className="font-semibold text-foreground">{t('games.deep.why')} </span>
        <EnglishText as="span">{ex.why}</EnglishText>
      </p>
      {whyNot && (
        <p>
          <span className="font-semibold text-foreground">
            {fill(t('games.deep.why_not'), {
              chosen: <EnglishText as="span">{chosen}</EnglishText>,
            })}{' '}
          </span>
          <EnglishText as="span">{whyNot}</EnglishText>
        </p>
      )}
      {ex.more && (
        <p>
          <span className="font-semibold text-foreground">{t('games.deep.more')} </span>
          <EnglishText as="span">{ex.more}</EnglishText>
        </p>
      )}
      {ex.tip && (
        <p>
          <span className="font-semibold text-foreground">{t('games.deep.tip')} </span>
          <EnglishText as="span">{ex.tip}</EnglishText>
        </p>
      )}
    </div>
  )
}
