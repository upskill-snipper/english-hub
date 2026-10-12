'use client'

import type { ReactNode, RefObject } from 'react'
import { Check, X } from 'lucide-react'

import { PanelFrame } from '@/components/comics/linocut/frames'
import { LazyPlate } from '@/components/comics/linocut/lazy-plate'
import { PlayOnView } from '@/components/comics/linocut/play-on-view'
import { EnglishText } from '@/components/i18n/EnglishText'
import type { PanelDescriptor, PortraitDescriptor } from '@/lib/comics/types'
import type { DealtChallenge } from '@/lib/games/quest/deal'
import type { Quest } from '@/lib/games/quest/types'
import { cn } from '@/lib/utils'

/** A translation lookup, as useT() returns it. */
export type T = (key: string) => string

/** What a student did with one challenge. */
export interface QuestAnswer {
  correct: boolean
  /** A choice: the option chosen. A marker: its number. A theme card: yes or no. */
  chosen?: string | number | boolean
  /** A story order or a rebuilt quotation: positions in the source, in the order placed. */
  placed?: number[]
}

export interface ChallengeProps {
  dealt: DealtChallenge
  quest: Quest
  answered: QuestAnswer | null
  onAnswer: (answer: QuestAnswer) => void
  /** Plays the small tap sound, when sound is on. */
  onTap: () => void
  /** The question's heading, which takes focus when the challenge is shown. */
  headingRef: RefObject<HTMLHeadingElement | null>
  t: T
}

/** A translated sentence with {placeholders} filled by nodes (names stay marked English). */
export { fill, fillText } from '@/components/games/fill'

export function Question({
  headingRef,
  eyebrow,
  children,
}: {
  headingRef: RefObject<HTMLHeadingElement | null>
  eyebrow?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="space-y-1">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      )}
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="font-heading text-[1.35rem] leading-snug text-foreground outline-none sm:text-2xl"
      >
        {children}
      </h2>
    </div>
  )
}

/** Words from the text or the guide: English and left to right, whatever the page's language. */
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

/** A quotation from the text, set large. */
export function QuoteCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <figure
      className={cn(
        'relative rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-sm',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-3 start-4 font-heading text-5xl leading-none text-primary/30"
      >
        &ldquo;
      </span>
      <EnglishText
        as="blockquote"
        className="font-heading text-xl italic leading-snug text-foreground sm:text-2xl"
      >
        {children}
      </EnglishText>
    </figure>
  )
}

/** A comic panel without its quotation and caption boxes, which a challenge may be asking for. */
export function PlainPanel({
  panel,
  className,
  motion = false,
}: {
  panel: PanelDescriptor
  className?: string
  motion?: boolean
}) {
  const frame = (
    <PanelFrame piece={{ ...panel, quote: undefined, caption: undefined }}>
      <LazyPlate plate={panel} />
    </PanelFrame>
  )
  return (
    <div className={className} dir="ltr">
      {motion ? <PlayOnView>{frame}</PlayOnView> : frame}
    </div>
  )
}

/** A panel with its quotation and caption, as the comic prints it. */
export function FullPanel({ panel, className }: { panel: PanelDescriptor; className?: string }) {
  return (
    <div className={className} dir="ltr">
      <PlayOnView>
        <PanelFrame piece={panel}>
          <LazyPlate plate={panel} />
        </PanelFrame>
      </PlayOnView>
    </div>
  )
}

export function PortraitPlate({
  portrait,
  name,
  className,
}: {
  portrait: PortraitDescriptor
  name?: string
  className?: string
}) {
  return (
    <figure className={cn('lc-sheet w-full p-1.5', className)} dir="ltr" lang="en">
      <div className="lc-print overflow-hidden rounded-sm">
        <LazyPlate plate={portrait} />
      </div>
      {name && (
        <figcaption className="mt-1.5 truncate text-center text-sm font-semibold leading-snug">
          {name}
        </figcaption>
      )}
    </figure>
  )
}

const LETTERS = ['A', 'B', 'C', 'D', 'E']

export type OptionState = 'idle' | 'right' | 'wrong' | 'missed' | 'faded'

/** How an option looks once the challenge is answered: the right one green, a wrong choice red. */
export function optionState(
  option: string,
  answer: string,
  answered: QuestAnswer | null,
): OptionState {
  if (!answered) return 'idle'
  if (option === answer) return answered.chosen === option ? 'right' : 'missed'
  if (answered.chosen === option) return 'wrong'
  return 'faded'
}

const STATE_CLASS: Record<OptionState, string> = {
  idle: 'border-border bg-card hover:border-primary/50 hover:bg-primary/[0.03]',
  right:
    'q-pop border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-50',
  missed: 'border-emerald-500 border-dashed bg-emerald-50/60 dark:bg-emerald-950/20',
  wrong: 'q-shake border-red-500 bg-red-50 text-red-950 dark:bg-red-950/40 dark:text-red-50',
  faded: 'border-border/60 bg-card opacity-55',
}

/**
 * One option: a real button with a letter, a number key and a spoken state.
 * Once answered it stays focusable but inert (aria-disabled), so a screen
 * reader can go back over the options and hear which was right; colour is
 * never the only sign, each state has an icon too.
 */
export function OptionButton({
  index,
  state,
  onChoose,
  children,
  t,
  className,
}: {
  index: number
  state: OptionState
  onChoose: () => void
  children: ReactNode
  t: T
  className?: string
}) {
  const done = state !== 'idle'
  const label =
    state === 'right'
      ? t('quest.option.your_right')
      : state === 'wrong'
        ? t('quest.option.your_wrong')
        : state === 'missed'
          ? t('quest.option.the_answer')
          : undefined
  return (
    <button
      type="button"
      onClick={done ? undefined : onChoose}
      aria-disabled={done}
      data-state={state}
      className={cn(
        'q-key group flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-3.5 text-start text-base leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        STATE_CLASS[state],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border-2 text-xs font-bold',
          state === 'right' || state === 'missed'
            ? 'border-emerald-500 bg-emerald-500 text-white'
            : state === 'wrong'
              ? 'border-red-500 bg-red-500 text-white'
              : 'border-border text-muted-foreground group-hover:border-primary/60',
        )}
      >
        {state === 'right' || state === 'missed' ? (
          <Check className="size-4" strokeWidth={3} />
        ) : state === 'wrong' ? (
          <X className="size-4" strokeWidth={3} />
        ) : (
          LETTERS[index]
        )}
      </span>
      <span className="min-w-0 flex-1 pt-0.5">{children}</span>
      {label && <span className="sr-only">{label}</span>}
    </button>
  )
}

/** A choice of text options, number keys 1 to 5 choosing them. */
export function TextOptions({
  options,
  answer,
  answered,
  onAnswer,
  t,
  english = true,
}: {
  options: string[]
  answer: string
  answered: QuestAnswer | null
  onAnswer: (a: QuestAnswer) => void
  t: T
  /** Options are the text's or the guide's words (true), or the site's own (false). */
  english?: boolean
}) {
  return (
    <div role="group" aria-label={t('quest.options')} className="grid gap-2.5" data-quest-options>
      {options.map((o, i) => (
        <OptionButton
          key={o}
          index={i}
          state={optionState(o, answer, answered)}
          onChoose={() => onAnswer({ correct: o === answer, chosen: o })}
          t={t}
        >
          {english ? <En>{o}</En> : o}
        </OptionButton>
      ))}
    </div>
  )
}
