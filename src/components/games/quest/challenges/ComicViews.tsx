'use client'

import { useState } from 'react'
import { Check, RotateCcw, ThumbsDown, ThumbsUp, X } from 'lucide-react'

import { placedIsRight } from '@/lib/games/quest/deal'
import { cn } from '@/lib/utils'

import {
  En,
  fill,
  fillText,
  optionState,
  OptionButton,
  PlainPanel,
  PortraitPlate,
  Question,
  QuoteCard,
  TextOptions,
  type ChallengeProps,
} from './shared'

/**
 * The challenges a quest builds from the comics and the guide (src/lib/games/
 * quest/build.ts), one view each. Every option, line and phrase is the comic
 * registry's or the guide's own; nothing here is written for the question.
 */

/** Once answered, says which button was the student's and which was right, so colour is not the only sign. */
function StateLabel({ state, t }: { state: string; t: ChallengeProps['t'] }) {
  const key =
    state === 'right'
      ? t('quest.option.your_right')
      : state === 'wrong'
        ? t('quest.option.your_wrong')
        : state === 'missed'
          ? t('quest.option.the_answer')
          : null
  return key ? <span className="sr-only">{key}</span> : null
}

/** "Which line belongs in this panel?" The panel is shown without its quotation box. */
export function PanelLineView({ dealt, quest, answered, onAnswer, headingRef, t }: ChallengeProps) {
  const c = dealt.challenge
  if (c.type !== 'panel-line') return null
  const panel = c.moment.panel ? quest.art.panels[c.moment.panel] : undefined
  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.panel_line')}>
        {t('quest.q.panel_line')}
      </Question>
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
        {panel && <PlainPanel panel={panel} motion className="mx-auto max-w-sm p-2" />}
        <div className="px-4 pb-3 pt-1">
          <En as="p" className="font-heading text-lg">
            {c.moment.title}
          </En>
          <En as="p" className="text-sm text-muted-foreground">
            {c.moment.where}
          </En>
        </div>
      </div>
      <TextOptions
        options={dealt.options}
        answer={c.answer}
        answered={answered}
        onAnswer={onAnswer}
        t={t}
      />
    </div>
  )
}

/** "Which moment is this line from?" Answered by choosing a panel. */
export function LinePanelView({ dealt, quest, answered, onAnswer, headingRef, t }: ChallengeProps) {
  const c = dealt.challenge
  if (c.type !== 'line-panel') return null
  const byTitle = new Map(quest.moments.map((m) => [m.title, m]))
  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.line_panel')}>
        {t('quest.q.line_panel')}
      </Question>
      <QuoteCard>{c.quote}</QuoteCard>
      <div
        className="grid grid-cols-2 gap-2.5"
        role="group"
        aria-label={t('quest.options')}
        data-quest-options
      >
        {dealt.options.map((title, i) => {
          const m = byTitle.get(title)
          const panel = m?.panel ? quest.art.panels[m.panel] : undefined
          const state = optionState(title, c.answer, answered)
          return (
            <OptionButton
              key={title}
              index={i}
              state={state}
              onChoose={() => onAnswer({ correct: title === c.answer, chosen: title })}
              t={t}
              className="flex-col items-stretch gap-2 p-2"
            >
              {panel && <PlainPanel panel={panel} className="pointer-events-none" />}
              <En as="span" className="block px-1 text-sm font-medium leading-snug">
                {title}
              </En>
            </OptionButton>
          )
        })}
      </div>
    </div>
  )
}

/** Rebuild a quotation: tap its words in order. */
export function RebuildView({ dealt, answered, onAnswer, onTap, headingRef, t }: ChallengeProps) {
  const c = dealt.challenge
  const [placed, setPlaced] = useState<number[]>([])
  if (c.type !== 'rebuild') return null
  const shown = answered?.placed ?? placed
  const full = shown.length === c.words.length
  const right = answered ? answered.correct : null

  const take = (i: number) => {
    if (answered) return
    onTap()
    setPlaced((p) => (p.includes(i) ? p : [...p, i]))
  }
  const giveBack = (i: number) => {
    if (answered) return
    onTap()
    setPlaced((p) => p.filter((x) => x !== i))
  }

  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.rebuild')}>
        {t('quest.q.rebuild')}
      </Question>
      <En as="p" className="text-sm text-muted-foreground">
        {c.where}
      </En>

      {/* Left to right like the quotation, but not lang="en" as a whole: the
          prompt shown while it is empty is in the page's language. Each word
          is marked English on its own. */}
      <div
        dir="ltr"
        role="group"
        aria-label={t('quest.rebuild.line')}
        className={cn(
          'grid rounded-2xl border-2 border-dashed p-3 transition-colors',
          right === true &&
            'q-pop border-solid border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
          right === false && 'q-shake border-solid border-red-500 bg-red-50 dark:bg-red-950/30',
          right === null && 'border-border bg-muted/30',
        )}
      >
        {/* Every word, unseen, under the line: it is as tall from the first
            tap as at the last, so the words below never move under a finger.
            They did, in the first build, and a quick second tap landed on the
            wrong word. */}
        <div
          aria-hidden="true"
          className="invisible col-start-1 row-start-1 flex flex-wrap content-start gap-2"
        >
          {c.words.map((w, i) => (
            <span
              key={i}
              className="rounded-xl border-2 px-3 py-1.5 font-heading text-lg leading-tight"
            >
              {w}
            </span>
          ))}
        </div>
        <div className="col-start-1 row-start-1 flex min-h-[2.75rem] flex-wrap content-start gap-2">
          {shown.length === 0 && (
            <span className="self-center text-sm text-muted-foreground" dir="auto">
              {t('quest.rebuild.empty')}
            </span>
          )}
          {shown.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => giveBack(i)}
              aria-disabled={!!answered}
              lang="en"
              className="q-key q-in rounded-xl border-2 border-primary/50 bg-card px-3 py-1.5 font-heading text-lg leading-tight"
            >
              {c.words[i]}
            </button>
          ))}
        </div>
      </div>

      {!answered && (
        <div
          dir="ltr"
          lang="en"
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={t('quest.rebuild.words')}
        >
          {dealt.deck.map((i) => {
            const used = placed.includes(i)
            return (
              <button
                key={i}
                type="button"
                onClick={() => take(i)}
                disabled={used}
                className={cn(
                  'q-key rounded-xl border-2 border-border bg-card px-3 py-1.5 font-heading text-lg leading-tight',
                  used && 'invisible',
                )}
              >
                {c.words[i]}
              </button>
            )
          })}
        </div>
      )}

      {!answered && (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPlaced([])}
            disabled={placed.length === 0}
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            {t('quest.rebuild.clear')}
          </button>
          <button
            type="button"
            data-quest-check
            disabled={!full}
            onClick={() => onAnswer({ correct: placedIsRight(c, placed), placed })}
            className="q-key q-key-primary ms-auto rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground disabled:opacity-40"
          >
            {t('quest.check')}
          </button>
        </div>
      )}
    </div>
  )
}

/** "Whose description is this?" Answered by choosing a portrait. */
export function WhoseView({ dealt, quest, answered, onAnswer, headingRef, t }: ChallengeProps) {
  const c = dealt.challenge
  if (c.type !== 'whose') return null
  const anyArt = dealt.options.some((n) => quest.art.portraits[n])
  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.whose')}>
        {t('quest.q.whose')}
      </Question>
      <QuoteCard>{c.phrase}</QuoteCard>
      {anyArt ? (
        <div
          className="grid grid-cols-2 gap-2.5"
          role="group"
          aria-label={t('quest.options')}
          data-quest-options
        >
          {dealt.options.map((name, i) => {
            const portrait = quest.art.portraits[name]
            return (
              <OptionButton
                key={name}
                index={i}
                state={optionState(name, c.answer, answered)}
                onChoose={() => onAnswer({ correct: name === c.answer, chosen: name })}
                t={t}
                className="flex-col items-stretch gap-1 p-2"
              >
                {portrait ? (
                  <PortraitPlate portrait={portrait} name={name} className="pointer-events-none" />
                ) : (
                  <En as="span" className="block py-6 text-center font-semibold">
                    {name}
                  </En>
                )}
              </OptionButton>
            )
          })}
        </div>
      ) : (
        <TextOptions
          options={dealt.options}
          answer={c.answer}
          answered={answered}
          onAnswer={onAnswer}
          t={t}
        />
      )}
    </div>
  )
}

/** "Which marker points to this?" Tap a numbered marker on the portrait, or its number below. */
export function MarkerView({ dealt, quest, answered, onAnswer, headingRef, t }: ChallengeProps) {
  const c = dealt.challenge
  if (c.type !== 'marker') return null
  const portrait = quest.art.portraits[c.portrait]
  const markers = quest.art.markers[c.portrait]
  if (!portrait || !markers) return null
  const choose = (n: number) => {
    if (!answered) onAnswer({ correct: n === c.answer, chosen: n })
  }
  const stateOf = (n: number) =>
    !answered
      ? 'idle'
      : n === c.answer
        ? answered.chosen === n
          ? 'right'
          : 'missed'
        : answered.chosen === n
          ? 'wrong'
          : 'faded'

  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.marker')}>
        {fill(t('quest.q.marker'), { name: <En>{c.portrait}</En> })}
      </Question>
      <QuoteCard>{c.phrase}</QuoteCard>
      <div className="relative mx-auto w-full max-w-[19rem]" dir="ltr">
        <PortraitPlate portrait={portrait} />
        {/* A ring over each printed marker: the plate draws the discs, these make them tappable. */}
        <div className="pointer-events-none absolute inset-1.5" aria-hidden="true">
          {markers.at.map(([x, y], i) => {
            const n = i + 1
            const s = stateOf(n)
            return (
              <button
                key={n}
                type="button"
                tabIndex={-1}
                onClick={() => choose(n)}
                className={cn(
                  'pointer-events-auto absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] transition-colors',
                  s === 'idle' && 'border-transparent hover:border-primary',
                  (s === 'right' || s === 'missed') && 'q-pop border-emerald-500 bg-emerald-500/20',
                  s === 'wrong' && 'q-shake border-red-500 bg-red-500/20',
                  s === 'faded' && 'border-transparent',
                )}
                style={{
                  left: `${(x / markers.width) * 100}%`,
                  top: `${(y / markers.height) * 100}%`,
                }}
              />
            )
          })}
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center gap-2.5"
        role="group"
        aria-label={t('quest.marker.numbers')}
        data-quest-options
      >
        {markers.at.map((_, i) => {
          const n = i + 1
          const s = stateOf(n)
          return (
            <button
              key={n}
              type="button"
              onClick={() => choose(n)}
              aria-disabled={!!answered}
              aria-label={fillText(t('quest.marker.label'), { n })}
              className={cn(
                'q-key flex size-14 items-center justify-center rounded-2xl border-2 text-xl font-bold',
                s === 'idle' && 'border-border bg-card hover:border-primary/60',
                (s === 'right' || s === 'missed') && 'border-emerald-500 bg-emerald-500 text-white',
                s === 'wrong' && 'border-red-500 bg-red-500 text-white',
                s === 'faded' && 'border-border/60 opacity-50',
              )}
            >
              {s === 'right' || s === 'missed' ? (
                <Check className="size-6" strokeWidth={3} />
              ) : s === 'wrong' ? (
                <X className="size-6" strokeWidth={3} />
              ) : (
                n
              )}
              <StateLabel state={s} t={t} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

/** A quick yes or no: is this theme at work in this moment? */
export function ThemeCheckView({
  dealt,
  quest,
  answered,
  onAnswer,
  headingRef,
  t,
}: ChallengeProps) {
  const c = dealt.challenge
  if (c.type !== 'theme-check') return null
  const panel = c.moment.panel ? quest.art.panels[c.moment.panel] : undefined
  const verdict = (yes: boolean) =>
    !answered
      ? 'idle'
      : yes === c.answer
        ? answered.chosen === yes
          ? 'right'
          : 'missed'
        : answered.chosen === yes
          ? 'wrong'
          : 'faded'
  const button = (yes: boolean) => {
    const s = verdict(yes)
    const Icon = yes ? ThumbsUp : ThumbsDown
    return (
      <button
        type="button"
        onClick={() => !answered && onAnswer({ correct: yes === c.answer, chosen: yes })}
        aria-disabled={!!answered}
        className={cn(
          'q-key flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-lg font-semibold',
          s === 'idle' && 'border-border bg-card hover:border-primary/60',
          (s === 'right' || s === 'missed') &&
            'q-pop border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-50',
          s === 'wrong' &&
            'q-shake border-red-500 bg-red-50 text-red-950 dark:bg-red-950/40 dark:text-red-50',
          s === 'faded' && 'border-border/60 opacity-50',
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
        {yes ? t('quest.yes') : t('quest.no')}
        <StateLabel state={s} t={t} />
      </button>
    )
  }
  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.theme_check')}>
        {fill(t('quest.q.theme_check'), { theme: <En className="text-primary">{c.theme}</En> })}
      </Question>
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
        {panel && <PlainPanel panel={panel} motion className="mx-auto max-w-sm p-2" />}
        <div className="px-4 pb-3 pt-1">
          <En as="p" className="font-heading text-lg">
            {c.moment.title}
          </En>
          <En as="p" className="text-sm text-muted-foreground">
            {c.moment.where}
          </En>
        </div>
      </div>
      <div className="flex gap-3" data-quest-options>
        {button(true)}
        {button(false)}
      </div>
    </div>
  )
}
