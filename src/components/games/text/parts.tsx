'use client'

import { Fragment, type ReactNode } from 'react'
import {
  Check,
  CircleCheck,
  CircleHelp,
  Lightbulb,
  ListOrdered,
  MapPin,
  Quote,
  RotateCcw,
  ScanSearch,
  TextCursorInput,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'

import { PanelFrame } from '@/components/comics/linocut/frames'
import { LazyPlate } from '@/components/comics/linocut/lazy-plate'
import { PlayOnView } from '@/components/comics/linocut/play-on-view'
import { EnglishText } from '@/components/i18n/EnglishText'
import type { PanelDescriptor, PortraitDescriptor } from '@/lib/comics/types'
import type { RoundKind } from '@/lib/games/text-games/types'
import { cn } from '@/lib/utils'

/**
 * The pieces every round of a text game is built from: the options, the
 * feedback, a quotation, a comic panel or portrait, and the words around them.
 *
 * Text from the study guide (names, quotations, methods, themes, explanations)
 * is English in every locale and is wrapped in EnglishText, so a screen reader
 * on the Arabic site reads it as English and the browser lays it out left to
 * right. Everything else comes through the dictionary.
 */

export type T = (key: string) => string

/** Each round's name, description and icon. The keys are literal so the dictionary check can see them. */
export const ROUND_META: Record<
  RoundKind | 'review',
  { titleKey: string; descKey: string; icon: LucideIcon }
> = {
  who: {
    titleKey: 'text_games.round.who.title',
    descKey: 'text_games.round.who.desc',
    icon: Users,
  },
  order: {
    titleKey: 'text_games.round.order.title',
    descKey: 'text_games.round.order.desc',
    icon: ListOrdered,
  },
  where: {
    titleKey: 'text_games.round.where.title',
    descKey: 'text_games.round.where.desc',
    icon: MapPin,
  },
  finish: {
    titleKey: 'text_games.round.finish.title',
    descKey: 'text_games.round.finish.desc',
    icon: TextCursorInput,
  },
  method: {
    titleKey: 'text_games.round.method.title',
    descKey: 'text_games.round.method.desc',
    icon: ScanSearch,
  },
  theme: {
    titleKey: 'text_games.round.theme.title',
    descKey: 'text_games.round.theme.desc',
    icon: Lightbulb,
  },
  review: {
    titleKey: 'text_games.round.review.title',
    descKey: 'text_games.round.review.title',
    icon: RotateCcw,
  },
}

/**
 * A translated sentence with its {placeholders} filled by nodes: the English
 * names in "What is {from} to {to}?" stay marked as English inside an Arabic
 * or Spanish sentence.
 */
export function fill(template: string, values: Record<string, ReactNode>): ReactNode {
  const parts = template.split(/\{(\w+)\}/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <Fragment key={i}>{values[part] ?? `{${part}}`}</Fragment>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

/** The same, for a plain string: an aria-label, an announcement. */
export function fillText(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m))
}

/** Guide text: English, left to right, in any locale. */
export function En({
  children,
  as = 'span',
  className,
}: {
  children: ReactNode
  as?: 'span' | 'p' | 'div' | 'strong'
  className?: string
}) {
  return (
    <EnglishText as={as} className={className}>
      {children}
    </EnglishText>
  )
}

/** A quotation from the text, in the guide's exact words. */
export function QuoteBlock({ children }: { children: ReactNode }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
      <Quote className="absolute end-4 top-4 size-8 text-primary/15" aria-hidden="true" />
      <EnglishText
        as="blockquote"
        className="relative border-s-4 border-primary/60 ps-4 font-heading text-xl italic leading-snug text-foreground sm:text-2xl"
      >
        {children}
      </EnglishText>
    </figure>
  )
}

/**
 * A comic panel. `plain` leaves off its quotation and caption boxes, for a
 * story-order card, where they would crowd a small picture. `motion` lets the
 * print play its wipe and push-in once when it comes into view (switched off
 * by prefers-reduced-motion in the linocut stylesheet).
 */
export function PanelArt({
  panel,
  plain = false,
  motion = true,
}: {
  panel: PanelDescriptor
  plain?: boolean
  motion?: boolean
}) {
  const piece: PanelDescriptor = plain ? { ...panel, quote: undefined, caption: undefined } : panel
  const frame = (
    <PanelFrame piece={piece}>
      <LazyPlate plate={panel} />
    </PanelFrame>
  )
  return motion ? <PlayOnView>{frame}</PlayOnView> : frame
}

/** A character's portrait from the comics, with their name under it. */
export function PortraitArt({ portrait, name }: { portrait: PortraitDescriptor; name: string }) {
  return (
    <figure className="lc-sheet mx-auto w-full max-w-[220px] p-2" dir="ltr" lang="en">
      <div className="lc-print">
        <LazyPlate plate={portrait} />
      </div>
      <figcaption className="mt-2 text-center text-sm font-semibold leading-snug">
        {name}
      </figcaption>
    </figure>
  )
}

/** A card holding guide prose: a character's role, a method's example. */
export function PromptCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 text-lg leading-relaxed text-foreground sm:p-6">
      {children}
    </div>
  )
}

const LETTERS = ['A', 'B', 'C', 'D']

/**
 * The options of a choice question, as real buttons. Once answered they stay
 * focusable but inert (aria-disabled), so a screen-reader user can go back
 * over them and hear which was theirs and which was right; colour is never
 * the only sign, each carries an icon and a spoken label too.
 */
export function ChoiceOptions({
  options,
  answer,
  chosen,
  onChoose,
  t,
}: {
  options: string[]
  answer: string
  chosen: string | undefined
  onChoose: (option: string) => void
  t: T
}) {
  const answered = chosen !== undefined
  return (
    <ul className="grid gap-2.5" aria-label={t('text_games.q.options')}>
      {options.map((option, i) => {
        const isAnswer = option === answer
        const isChosen = option === chosen
        const state = !answered ? 'idle' : isAnswer ? 'right' : isChosen ? 'wrong' : 'other'
        return (
          <li key={option}>
            <button
              type="button"
              aria-disabled={answered || undefined}
              onClick={() => {
                if (!answered) onChoose(option)
              }}
              className={cn(
                'flex min-h-11 w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-start text-base leading-snug outline-none transition-colors focus-visible:ring-4 focus-visible:ring-ring/40 motion-reduce:transition-none',
                state === 'idle' &&
                  'border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5',
                state === 'right' &&
                  'border-emerald-600 bg-emerald-50 text-emerald-950 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-50',
                state === 'wrong' &&
                  'border-amber-600 bg-amber-50 text-amber-950 dark:border-amber-500 dark:bg-amber-950/50 dark:text-amber-50',
                state === 'other' &&
                  'cursor-default border-border/60 bg-card text-muted-foreground',
                answered && 'cursor-default',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                  state === 'right'
                    ? 'bg-emerald-600 text-white'
                    : state === 'wrong'
                      ? 'bg-amber-600 text-white'
                      : 'bg-muted text-muted-foreground',
                )}
              >
                {state === 'right' ? (
                  <Check className="size-3.5" strokeWidth={3} />
                ) : state === 'wrong' ? (
                  <X className="size-3.5" strokeWidth={3} />
                ) : (
                  LETTERS[i]
                )}
              </span>
              <En className="block min-w-0 flex-1 break-words text-start">{option}</En>
              {state === 'right' && (
                <span className="sr-only">({t('text_games.fb.right_answer')})</span>
              )}
              {isChosen && <span className="sr-only">({t('text_games.fb.your_answer')})</span>}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Right or not, the right answer, and why, in the guide's words, with where in
 * the text it comes from. `children` is whatever the round adds: the moment's
 * panel, a portrait, the themes the guide gives the moment.
 */
export function Feedback({
  correct,
  answer,
  where,
  explanation,
  t,
  children,
}: {
  correct: boolean
  answer?: ReactNode
  where?: string
  explanation?: string
  t: T
  children?: ReactNode
}) {
  const Icon = correct ? CircleCheck : CircleHelp
  return (
    <div
      className={cn(
        'space-y-3 rounded-2xl border-2 p-4 motion-safe:animate-fade-in sm:p-5',
        correct
          ? 'border-emerald-600/40 bg-emerald-50/70 dark:border-emerald-500/40 dark:bg-emerald-950/30'
          : 'border-amber-600/40 bg-amber-50/70 dark:border-amber-500/40 dark:bg-amber-950/30',
      )}
    >
      <p
        className={cn(
          'flex items-center gap-2 text-lg font-semibold',
          correct ? 'text-emerald-800 dark:text-emerald-200' : 'text-amber-800 dark:text-amber-200',
        )}
      >
        <Icon className="size-5 shrink-0" aria-hidden="true" />
        {correct ? t('text_games.fb.correct') : t('text_games.fb.wrong')}
      </p>
      {!correct && answer !== undefined && (
        <p className="text-base text-foreground">
          {fill(t('text_games.fb.answer'), { answer: <En as="strong">{answer}</En> })}
        </p>
      )}
      {where && (
        <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            <span className="font-medium text-foreground">{t('text_games.fb.where')}:</span>{' '}
            <En>{where}</En>
          </span>
        </p>
      )}
      {explanation && (
        <div>
          <p className="text-overline uppercase text-muted-foreground">{t('text_games.fb.why')}</p>
          <En as="p" className="mt-1 text-body-sm leading-relaxed text-foreground">
            {explanation}
          </En>
        </div>
      )}
      {children}
    </div>
  )
}

/** A round's heading line: its icon, its name, and what it asks. */
export function RoundBadge({ kind, t }: { kind: RoundKind | 'review'; t: T }) {
  const meta = ROUND_META[kind]
  const Icon = meta.icon
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
      <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      {t(meta.titleKey)}
    </span>
  )
}
