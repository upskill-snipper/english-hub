'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowRight, CircleCheck, CircleX, Flame } from 'lucide-react'

import { hashSeed } from '@/lib/games/text-games/seed'
import type { DealtChallenge } from '@/lib/games/quest/deal'
import type { Quest } from '@/lib/games/quest/types'
import { cn } from '@/lib/utils'

import {
  En,
  fillText,
  FullPanel,
  PortraitPlate,
  type QuestAnswer,
  type T,
} from './challenges/shared'

/** The praise for a right answer, varied but fixed for each challenge. */
const PRAISE = ['quest.fb.right.1', 'quest.fb.right.2', 'quest.fb.right.3', 'quest.fb.right.4']

interface Body {
  /** The right answer, said, when the student's was wrong. */
  answer?: ReactNode
  where?: string
  /** The guide's own words on it. */
  why?: string
  /** A panel, a portrait, the order in the text. */
  extra?: ReactNode
}

function bodyFor(dealt: DealtChallenge, answered: QuestAnswer, quest: Quest, t: T): Body {
  const c = dealt.challenge
  const moment = (i: number) => quest.moments[i]
  switch (c.type) {
    case 'item': {
      const it = c.item
      if (it.kind === 'order') {
        return {
          extra: (
            <div>
              <p className="mb-1.5 text-sm font-semibold">{t('text_games.fb.order_heading')}</p>
              <ol className="list-decimal space-y-1 ps-5 text-sm">
                {it.moments.map((m) => (
                  <li key={m.index}>
                    <En>{m.title}</En>
                  </li>
                ))}
              </ol>
            </div>
          ),
        }
      }
      return {
        answer: answered.correct ? undefined : <En>{it.answer}</En>,
        where: it.kind === 'where' ? undefined : it.where,
        why: it.explanation,
        extra:
          it.kind === 'who' &&
          it.mode === 'role' &&
          it.portrait &&
          quest.art.portraits[it.portrait] ? (
            <PortraitPlate
              portrait={quest.art.portraits[it.portrait]}
              name={it.answer}
              className="mx-auto max-w-[9rem]"
            />
          ) : undefined,
      }
    }
    case 'panel-line':
    case 'line-panel': {
      const m = moment(c.moment.index)
      const panel = m.panel ? quest.art.panels[m.panel] : undefined
      return {
        answer: answered.correct ? undefined : <En>{c.answer}</En>,
        where: m.where,
        why: m.significance,
        // The payoff: the line in its panel, as the comic prints it.
        extra: panel ? <FullPanel panel={panel} className="mx-auto max-w-sm" /> : undefined,
      }
    }
    case 'rebuild':
      return {
        answer: answered.correct ? undefined : <En>{c.quote}</En>,
        where: c.where,
        why: c.moment ? moment(c.moment.index).significance : c.explanation,
      }
    case 'whose':
      return {
        answer: answered.correct ? undefined : <En>{c.answer}</En>,
        where: c.where,
        why: c.explanation,
        extra: quest.art.portraits[c.answer] ? (
          <PortraitPlate
            portrait={quest.art.portraits[c.answer]}
            name={c.answer}
            className="mx-auto max-w-[9rem]"
          />
        ) : undefined,
      }
    case 'marker':
      return {
        answer: answered.correct ? undefined : fillText(t('quest.marker.label'), { n: c.answer }),
        where: c.where,
        why: c.explanation,
      }
    case 'theme-check': {
      const m = moment(c.moment.index)
      return {
        // Every theme the guide gives the moment, right or wrong: the answer
        // was yes or no, and this is what it rested on. Not set as "The
        // answer:", which read oddly above a sentence.
        extra: (
          <p className="text-base">
            {t('text_games.fb.also')} <En>{c.carries.join(', ')}</En>
          </p>
        ),
        where: m.where,
        why: m.significance,
      }
    }
  }
}

/**
 * The sheet that rises after every answer: right or not, the XP it earned, the
 * right answer when it was missed, the guide's own words on it, and Continue,
 * which takes focus so Enter moves on.
 */
export function FeedbackSheet({
  dealt,
  answered,
  quest,
  gained,
  run,
  onContinue,
  continueLabel,
  t,
}: {
  dealt: DealtChallenge
  answered: QuestAnswer
  quest: Quest
  /** XP this answer earned. */
  gained: number
  /** Right answers in a row, this one included. */
  run: number
  onContinue: () => void
  continueLabel: string
  t: T
}) {
  const go = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    go.current?.focus({ preventScroll: true })
  }, [])
  const body = bodyFor(dealt, answered, quest, t)
  const ok = answered.correct
  const praise = PRAISE[hashSeed(dealt.challenge.id) % PRAISE.length]

  return (
    <section
      aria-live="polite"
      aria-label={ok ? t(praise) : t('text_games.fb.wrong')}
      className={cn(
        'q-sheet fixed inset-x-0 bottom-0 z-[70] max-h-[72dvh] overflow-y-auto border-t-2 shadow-[0_-12px_32px_-12px_rgba(0,0,0,0.25)]',
        ok
          ? 'border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-50'
          : 'border-red-500 bg-red-50 text-red-950 dark:bg-red-950 dark:text-red-50',
      )}
    >
      <div className="mx-auto max-w-xl space-y-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          {ok ? (
            <CircleCheck
              className="q-pop size-8 shrink-0 text-emerald-600 dark:text-emerald-400"
              aria-hidden="true"
            />
          ) : (
            <CircleX
              className="size-8 shrink-0 text-red-600 dark:text-red-400"
              aria-hidden="true"
            />
          )}
          <p className="font-heading text-2xl">{ok ? t(praise) : t('text_games.fb.wrong')}</p>
          {gained > 0 && (
            <span className="ms-auto inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-sm font-bold text-white">
              {run >= 3 && <Flame className="size-4" aria-hidden="true" />}
              {fillText(t('quest.xp_gain'), { n: gained })}
            </span>
          )}
        </div>

        {run >= 3 && ok && (
          <p className="text-sm font-semibold">{fillText(t('quest.fb.run'), { n: run })}</p>
        )}

        {body.answer && (
          <p className="text-base">
            <span className="font-semibold">{t('quest.fb.answer_is')}</span> {body.answer}
          </p>
        )}
        {body.extra && <div className="pt-1">{body.extra}</div>}
        {body.why && (
          <div className="rounded-xl bg-background/70 p-3 text-sm leading-relaxed text-foreground dark:bg-background/20 dark:text-inherit">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide opacity-70">
              {t('text_games.fb.why')}
              {body.where && (
                <>
                  {' · '}
                  <En>{body.where}</En>
                </>
              )}
            </p>
            <En as="p">{body.why}</En>
          </div>
        )}

        <button
          ref={go}
          type="button"
          onClick={onContinue}
          data-quest-continue
          className={cn(
            'q-key flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-bold text-white',
            ok ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-red-600 hover:bg-red-700',
          )}
        >
          {continueLabel}
          <ArrowRight className="size-5 rtl:rotate-180" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
