'use client'

import type { MethodItem } from '@/lib/games/text-games/types'

import { En, PromptCard } from '../parts'
import { ChoiceQuestion, type QuestionProps } from './shared'

/**
 * Method spotter: one of the guide's examples, and the method it is the
 * guide's example of. Asked that way on purpose. A passage can show several
 * methods at once, so "which method is this?" could have more than one fair
 * answer; "which method does the guide give this as an example of?" has one.
 */
export function MethodQuestion(props: QuestionProps) {
  const { dealt, t } = props
  const item = dealt.item as MethodItem
  return (
    <ChoiceQuestion
      props={props}
      question={t('text_games.q.method')}
      prompt={
        <PromptCard>
          <En as="p">{item.example}</En>
        </PromptCard>
      }
    />
  )
}
