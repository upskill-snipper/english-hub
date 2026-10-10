'use client'

import { useState } from 'react'
import { Check, Eraser, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { orderIsRight } from '@/lib/games/text-games/arrange'
import type { OrderItem } from '@/lib/games/text-games/types'
import { cn } from '@/lib/utils'

import { En, Feedback, fillText, PanelArt } from '../parts'
import { QuestionHeading, type QuestionProps } from './shared'

/**
 * Story order: tap the moments in the order they come in the text.
 *
 * TAP TO PLACE, NOT DRAG. Every card is a real button: tapping one puts it in
 * the next place, tapping a placed one takes it back out. That works the same
 * with a finger, a mouse, a keyboard (Tab and Enter) and a switch or screen
 * reader, where dragging works for only the first two. Each card says out loud
 * whether it is placed, and where.
 *
 * Each card shows the moment's comic panel where one is drawn, above its
 * button, so the picture keeps its own alt text rather than being folded into
 * the button's name. Never the moment's "where": an act and scene number
 * would give the order away.
 */
export function OrderQuestion(props: QuestionProps) {
  const { dealt, art, answered, onAnswer, headingRef, t } = props
  const item = dealt.item as OrderItem
  const count = item.moments.length
  const [placed, setPlaced] = useState<number[]>([])
  const shown = answered?.placed ?? placed
  const done = answered !== null

  const toggle = (m: number) => {
    if (done) return
    setPlaced((p) => (p.includes(m) ? p.filter((x) => x !== m) : [...p, m]))
  }

  const rightPlaces = done ? shown.filter((m, pos) => m === pos).length : 0

  return (
    <div className="space-y-5">
      <QuestionHeading headingRef={headingRef}>{t('text_games.q.order')}</QuestionHeading>

      <ul className="grid gap-3 sm:grid-cols-2">
        {dealt.deck.map((m) => {
          const moment = item.moments[m]
          const panel = moment.panel ? art.panels[moment.panel] : undefined
          const at = shown.indexOf(m)
          const isPlaced = at >= 0
          const rightHere = done && at === m
          return (
            <li
              key={moment.index}
              className={cn(
                'flex flex-col overflow-hidden rounded-2xl border-2 bg-card transition-colors motion-reduce:transition-none',
                !done && isPlaced && 'border-primary',
                !done && !isPlaced && 'border-border',
                done && rightHere && 'border-emerald-600 dark:border-emerald-500',
                done && !rightHere && 'border-amber-600 dark:border-amber-500',
              )}
            >
              {panel && (
                <div className="p-2 pb-0">
                  <PanelArt panel={panel} plain motion={false} />
                </div>
              )}
              <button
                type="button"
                aria-pressed={isPlaced}
                aria-disabled={done || undefined}
                onClick={() => toggle(m)}
                className={cn(
                  'flex min-h-11 w-full flex-1 items-center gap-3 px-3 py-3 text-start outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-ring/40',
                  done ? 'cursor-default' : 'hover:bg-primary/5',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold',
                    isPlaced
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-dashed border-border text-muted-foreground',
                  )}
                >
                  {isPlaced ? at + 1 : ''}
                </span>
                <En className="min-w-0 flex-1 break-words font-medium text-foreground">
                  {moment.title}
                </En>
                <span className="sr-only">
                  {isPlaced
                    ? fillText(t('text_games.order.position'), { n: at + 1 })
                    : t('text_games.order.not_placed')}
                </span>
                {done &&
                  (rightHere ? (
                    <Check
                      className="size-5 shrink-0 text-emerald-700 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <X
                      className="size-5 shrink-0 text-amber-700 dark:text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
              </button>
            </li>
          )
        })}
      </ul>

      {!done && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {placed.length === 0 ? t('text_games.order.empty') : t('text_games.order.hint')}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              size="lg"
              className="h-auto min-h-11 whitespace-normal py-2"
              disabled={placed.length !== count}
              onClick={() => onAnswer({ correct: orderIsRight(placed, count), placed })}
            >
              {t('text_games.order.check')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto min-h-11 whitespace-normal py-2"
              disabled={placed.length === 0}
              onClick={() => setPlaced([])}
            >
              <Eraser aria-hidden="true" />
              {t('text_games.order.clear')}
            </Button>
          </div>
        </div>
      )}

      {answered && (
        <Feedback correct={answered.correct} t={t}>
          {!answered.correct && (
            <p className="text-base text-foreground">
              {fillText(t('text_games.fb.order_placed'), { n: rightPlaces, total: count })}
            </p>
          )}
          {answered.correct && (
            <p className="text-base text-foreground">{t('text_games.fb.order_right')}</p>
          )}
          <div>
            <p className="text-overline uppercase text-muted-foreground">
              {t('text_games.fb.order_heading')}
            </p>
            <ol className="mt-2 space-y-3">
              {item.moments.map((moment, pos) => (
                <li key={moment.index} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
                  >
                    {pos + 1}
                  </span>
                  <En as="div" className="min-w-0 flex-1 text-body-sm leading-relaxed">
                    <span className="block font-semibold text-foreground">
                      {moment.where}: {moment.title}
                    </span>
                    <span className="block text-foreground/90">{moment.significance}</span>
                  </En>
                </li>
              ))}
            </ol>
          </div>
        </Feedback>
      )}
    </div>
  )
}
