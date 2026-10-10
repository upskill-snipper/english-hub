'use client'

import type { WhoRelationItem, WhoRoleItem } from '@/lib/games/text-games/types'

import { En, fill, PortraitArt, PromptCard } from '../parts'
import { ChoiceQuestion, type QuestionProps } from './shared'

/**
 * Who's who. From the cast list: the guide's description of a character, and
 * whose it is, with their portrait shown once answered (shown before, it would
 * give the answer away). From the character map: "What is X to Y?", with both
 * portraits beside the question, since the question names them anyway.
 */
export function WhoQuestion(props: QuestionProps) {
  const { dealt, art, t } = props
  const item = dealt.item as WhoRoleItem | WhoRelationItem

  if (item.mode === 'role') {
    const portrait = item.portrait ? art.portraits[item.portrait] : undefined
    return (
      <ChoiceQuestion
        props={props}
        question={t('text_games.q.who_role')}
        prompt={
          <PromptCard>
            <En as="p">{item.role}</En>
          </PromptCard>
        }
        after={portrait && <PortraitArt portrait={portrait} name={item.answer} />}
      />
    )
  }

  const portraits = item.portraits
    .map((n) => ({ name: n, piece: art.portraits[n] }))
    .filter((p) => p.piece)
  return (
    <ChoiceQuestion
      props={props}
      question={fill(t('text_games.q.who_relation'), {
        from: <En>{item.from}</En>,
        to: <En>{item.to}</En>,
      })}
      prompt={
        portraits.length > 0 && (
          <div className={portraits.length > 1 ? 'grid grid-cols-2 gap-3' : 'grid gap-3'}>
            {portraits.map((p) => (
              <PortraitArt key={p.name} portrait={p.piece} name={p.name} />
            ))}
          </div>
        )
      }
    />
  )
}
