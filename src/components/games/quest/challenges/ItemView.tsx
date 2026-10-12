'use client'

import { midSentence } from '@/lib/games/text-games/text'
import type { ChoiceItem } from '@/lib/games/text-games/types'

import { SequenceView } from './SequenceView'
import {
  En,
  fill,
  PlainPanel,
  PortraitPlate,
  Question,
  QuoteCard,
  TextOptions,
  type ChallengeProps,
} from './shared'

/**
 * A challenge carrying one of the guided path's own items (src/lib/games/
 * text-games): who's who, where a quotation comes from, the missing word, the
 * method and the theme, each as the path asks it, and story order as a tap-in-
 * order sequence. The item and its one right answer are the path builder's.
 */
export function ItemView(props: ChallengeProps) {
  const { dealt, quest, answered, onAnswer, headingRef, t } = props
  const c = dealt.challenge
  if (c.type !== 'item') return null
  const it = c.item
  if (it.kind === 'order') return <SequenceView {...props} />

  const item = it as ChoiceItem
  const options = (
    <TextOptions
      options={dealt.options}
      answer={item.answer}
      answered={answered}
      onAnswer={onAnswer}
      t={t}
    />
  )

  switch (item.kind) {
    case 'who': {
      if (item.mode === 'role') {
        return (
          <div className="space-y-5">
            <Question headingRef={headingRef} eyebrow={t('quest.kind.who')}>
              {t('text_games.q.who_role')}
            </Question>
            <div className="rounded-2xl border border-border/70 bg-card p-4 text-lg leading-relaxed">
              <En as="p">{item.role}</En>
            </div>
            {options}
          </div>
        )
      }
      const portraits = item.portraits
        .map((n) => ({ name: n, piece: quest.art.portraits[n] }))
        .filter((p) => p.piece)
      return (
        <div className="space-y-5">
          <Question headingRef={headingRef} eyebrow={t('quest.kind.who')}>
            {fill(t('text_games.q.who_relation'), {
              from: <En>{midSentence(item.from)}</En>,
              to: <En>{midSentence(item.to)}</En>,
            })}
          </Question>
          {portraits.length > 0 && (
            <div className="mx-auto grid max-w-xs grid-cols-2 gap-3">
              {portraits.map((p) => (
                <PortraitPlate key={p.name} portrait={p.piece} name={p.name} />
              ))}
            </div>
          )}
          {options}
        </div>
      )
    }
    case 'where':
      return (
        <div className="space-y-5">
          <Question headingRef={headingRef} eyebrow={t('quest.kind.where')}>
            {t('text_games.q.where')}
          </Question>
          <QuoteCard>{item.quote}</QuoteCard>
          {options}
        </div>
      )
    case 'finish':
      return (
        <div className="space-y-5">
          <Question headingRef={headingRef} eyebrow={t('quest.kind.finish')}>
            {t('text_games.q.finish')}
          </Question>
          <QuoteCard>
            {item.before}
            <span
              className="mx-1 inline-block min-w-[4.5rem] border-b-[3px] border-primary/70 align-baseline text-primary"
              aria-label={t('text_games.q.blank')}
            >
              {answered ? item.answer : ' '}
            </span>
            {item.after}
          </QuoteCard>
          {options}
        </div>
      )
    case 'method':
      return (
        <div className="space-y-5">
          <Question headingRef={headingRef} eyebrow={t('quest.kind.method')}>
            {t('text_games.q.method')}
          </Question>
          <QuoteCard>{item.example}</QuoteCard>
          {options}
        </div>
      )
    case 'theme': {
      const panel = item.moment.panel ? quest.art.panels[item.moment.panel] : undefined
      return (
        <div className="space-y-5">
          <Question headingRef={headingRef} eyebrow={t('quest.kind.theme')}>
            {t('text_games.q.theme')}
          </Question>
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
            {panel && <PlainPanel panel={panel} className="mx-auto max-w-sm p-2" />}
            <div className="px-4 py-3">
              <En as="p" className="font-heading text-lg">
                {item.moment.title}
              </En>
              <En as="p" className="text-sm text-muted-foreground">
                {item.moment.where}
              </En>
            </div>
          </div>
          <TextOptions
            options={dealt.options}
            answer={item.answer}
            answered={answered}
            onAnswer={onAnswer}
            t={t}
          />
        </div>
      )
    }
  }
}
