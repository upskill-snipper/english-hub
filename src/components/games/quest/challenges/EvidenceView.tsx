'use client'

import { En, Question, TextOptions, type ChallengeProps } from './shared'

/**
 * "Which quotation is this reading about?" (24 October 2026,
 * src/lib/games/quest/types.ts, EvidenceChallenge): the guide's reading of a
 * line, the line's own words elided, and quotations to choose from.
 */
export function EvidenceView({ dealt, answered, onAnswer, headingRef, t }: ChallengeProps) {
  const c = dealt.challenge
  if (c.type !== 'evidence') return null
  return (
    <div className="space-y-5">
      <Question headingRef={headingRef} eyebrow={t('quest.kind.evidence')}>
        {t('quest.q.evidence')}
      </Question>
      <En
        as="p"
        className="block rounded-2xl border border-border/70 bg-card px-5 py-4 text-base leading-relaxed shadow-sm"
      >
        {c.point}
      </En>
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
