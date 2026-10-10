'use client'

import type { ReactNode, RefObject } from 'react'

import type { Dealt } from '@/lib/games/text-games/arrange'
import type { ChoiceItem, GameArt } from '@/lib/games/text-games/types'

import { ChoiceOptions, Feedback, type T } from '../parts'

/** What a student did with one question. */
export interface Answer {
  correct: boolean
  /** A choice question: the option chosen. */
  chosen?: string
  /** A story-order puzzle: the moments in the order placed, as positions in the item. */
  placed?: number[]
}

/** What the runner gives every round's question component. */
export interface QuestionProps {
  dealt: Dealt
  art: GameArt
  answered: Answer | null
  onAnswer: (answer: Answer) => void
  /** The question's heading, which takes focus when the question is shown. */
  headingRef: RefObject<HTMLHeadingElement | null>
  t: T
}

/** The question line every round opens with: a heading the runner moves focus to. */
export function QuestionHeading({
  headingRef,
  children,
}: {
  headingRef: RefObject<HTMLHeadingElement | null>
  children: ReactNode
}) {
  return (
    <h3
      ref={headingRef}
      tabIndex={-1}
      className="font-heading text-heading-md text-foreground outline-none"
    >
      {children}
    </h3>
  )
}

/**
 * A multiple-choice question: the question, what it is about (`prompt`), the
 * options, and once answered the feedback with whatever the round adds to it.
 */
export function ChoiceQuestion({
  props,
  question,
  prompt,
  after,
}: {
  props: QuestionProps
  question: ReactNode
  prompt?: ReactNode
  /** Added to the feedback: a panel, a portrait, a list. */
  after?: ReactNode
}) {
  const { dealt, answered, onAnswer, headingRef, t } = props
  const item = dealt.item as ChoiceItem
  return (
    <div className="space-y-5">
      <QuestionHeading headingRef={headingRef}>{question}</QuestionHeading>
      {prompt}
      <ChoiceOptions
        options={dealt.options}
        answer={item.answer}
        chosen={answered?.chosen}
        onChoose={(option) => onAnswer({ correct: option === item.answer, chosen: option })}
        t={t}
      />
      {answered && (
        <Feedback
          correct={answered.correct}
          answer={item.answer}
          // In "Where is it?" the place is the answer, already said above.
          where={item.kind === 'where' ? undefined : item.where}
          explanation={item.explanation}
          t={t}
        >
          {after}
        </Feedback>
      )}
    </div>
  )
}
