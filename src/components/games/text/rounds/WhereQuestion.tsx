'use client'

import type { WhereItem } from '@/lib/games/text-games/types'

import { En, PanelArt, QuoteBlock } from '../parts'
import { ChoiceQuestion, type QuestionProps } from './shared'

/**
 * Where is it? A quotation, exactly as the guide gives it, and where in the
 * text it comes from. The moment's comic panel, where there is one, comes with
 * the answer: shown with the question, it would point at it.
 */
export function WhereQuestion(props: QuestionProps) {
  const { dealt, art, t } = props
  const item = dealt.item as WhereItem
  const panel = item.moment?.panel ? art.panels[item.moment.panel] : undefined
  return (
    <ChoiceQuestion
      props={props}
      question={t('text_games.q.where')}
      prompt={<QuoteBlock>{item.quote}</QuoteBlock>}
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
