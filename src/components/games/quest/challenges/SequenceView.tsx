'use client'

import { useState } from 'react'
import { Check, RotateCcw, X } from 'lucide-react'

import { placedIsRight } from '@/lib/games/quest/deal'
import type { OrderItem } from '@/lib/games/text-games/types'
import { cn } from '@/lib/utils'

import { En, fillText, PlainPanel, Question, type ChallengeProps } from './shared'

/**
 * Story order: tap the moments in the order they come in the text. Each card
 * is the moment's comic panel where it has one, with its title. A tap places a
 * card in the next slot; tapping a placed card takes it back out. The answer
 * is checked once every card is placed.
 */
export function SequenceView({
  dealt,
  quest,
  answered,
  onAnswer,
  onTap,
  headingRef,
  t,
}: ChallengeProps) {
  const c = dealt.challenge
  const item = (c.type === 'item' ? c.item : null) as OrderItem | null
  const [placed, setPlaced] = useState<number[]>([])
  if (!item) return null
  const n = item.moments.length
  const shown = answered?.placed ?? placed
  const full = shown.length === n

  const toggle = (i: number) => {
    if (answered) return
    onTap()
    setPlaced((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))
  }

  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.order')}>
        {t('text_games.q.order')}
      </Question>

      <div
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
        role="group"
        aria-label={t('quest.order.cards')}
      >
        {dealt.deck.map((i) => {
          const m = item.moments[i]
          const panel = m.panel ? quest.art.panels[m.panel] : undefined
          const at = shown.indexOf(i)
          const verdict = answered ? (at === i ? 'right' : 'wrong') : null
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              aria-disabled={!!answered}
              aria-pressed={at >= 0}
              aria-label={
                at >= 0
                  ? `${m.title}, ${fillText(t('text_games.order.position'), { n: at + 1 })}`
                  : m.title
              }
              className={cn(
                'q-key relative overflow-hidden rounded-2xl border-2 bg-card text-start transition-colors',
                at >= 0 && !answered && 'border-primary bg-primary/[0.06]',
                at < 0 && !answered && 'border-border hover:border-primary/50',
                verdict === 'right' && 'border-emerald-500',
                verdict === 'wrong' && 'border-red-500',
              )}
            >
              {panel && <PlainPanel panel={panel} className="pointer-events-none p-1.5 pb-0" />}
              <En as="p" className="px-2.5 py-2 text-sm font-medium leading-snug">
                {m.title}
              </En>
              {at >= 0 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'q-pop absolute end-2 top-2 flex size-8 items-center justify-center rounded-full text-sm font-bold text-white shadow',
                    verdict === 'wrong'
                      ? 'bg-red-500'
                      : verdict === 'right'
                        ? 'bg-emerald-500'
                        : 'bg-primary',
                  )}
                >
                  {verdict === 'right' ? (
                    <Check className="size-4" strokeWidth={3} />
                  ) : verdict === 'wrong' ? (
                    <X className="size-4" strokeWidth={3} />
                  ) : (
                    at + 1
                  )}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {!answered && (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPlaced([])}
            disabled={placed.length === 0}
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            {t('text_games.order.clear')}
          </button>
          <button
            type="button"
            data-quest-check
            disabled={!full}
            onClick={() => onAnswer({ correct: placedIsRight(c, placed), placed })}
            className="q-key q-key-primary ms-auto rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground disabled:opacity-40"
          >
            {t('text_games.order.check')}
          </button>
        </div>
      )}
    </div>
  )
}
