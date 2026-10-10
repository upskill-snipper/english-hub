'use client'

import type { FinishItem } from '@/lib/games/text-games/types'
import { cn } from '@/lib/utils'

import { En, PanelArt, QuoteBlock } from '../parts'
import { ChoiceQuestion, type QuestionProps } from './shared'

/**
 * Finish the quotation: the guide's quotation with one word missing. Once
 * answered, the word is filled in, so the student reads the whole line as the
 * text has it.
 */
export function FinishQuestion(props: QuestionProps) {
  const { dealt, art, answered, t } = props
  const item = dealt.item as FinishItem
  const panel = item.moment?.panel ? art.panels[item.moment.panel] : undefined
  return (
    <ChoiceQuestion
      props={props}
      question={t('text_games.q.finish')}
      prompt={
        <QuoteBlock>
          {item.before}
          {answered ? (
            <mark
              className={cn(
                'rounded px-1 not-italic',
                answered.correct
                  ? 'bg-emerald-200 text-emerald-950 dark:bg-emerald-800 dark:text-emerald-50'
                  : 'bg-amber-200 text-amber-950 dark:bg-amber-800 dark:text-amber-50',
              )}
            >
              {item.answer}
            </mark>
          ) : (
            <span className="mx-1 inline-block min-w-[4.5em] border-b-2 border-primary align-baseline">
              <span className="sr-only">({t('text_games.q.blank')})</span>
            </span>
          )}
          {item.after}
        </QuoteBlock>
      }
      after={
        item.moment && (
          <div className="space-y-3">
            <En as="p" className="font-heading text-base font-semibold text-foreground">
              {item.moment.title}
            </En>
            {panel && <PanelArt panel={panel} />}
          </div>
        )
      }
    />
  )
}
