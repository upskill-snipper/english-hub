import type { GameBank, GameExplanations } from './explanations/types'

/**
 * Which questions in a skills game give other questions away (24 October
 * 2026), so ./deal-round.ts can keep them out of one round.
 *
 * WHAT COUNTS. A question gives another away when what every student sees
 * with it, its prompt and the explanation's why, more and tip, states the
 * other's answer or quotes the other's sentence. Measured that day: in the
 * EAL games 391 of 1,058 explanations did, and 71 per cent of all give-aways
 * came from explanations alone ("three woman" explains "child and children",
 * and "five child" can follow it; a Word Class explanation calls "light" a
 * verb in "light the candle", a later question word for word).
 *
 *   - An ANSWER is looked for only where it names something particular: three
 *     characters or more, and the answer to at most MAX_SHARED questions. An
 *     answer most questions share ("Metaphor", "noun", "an") is the game's
 *     subject, not a give-away; the dealer's group cap spreads those instead.
 *     Nor where the bank says the answer is an ordinary word (its
 *     `ordinaryAnswer`): Quote Detective's 95 one-word answers ("that", "it",
 *     "must") matched words in other explanations 2,446 times, almost all
 *     meaningless, and the dealer pulled those questions forward for nothing
 *     (24 October 2026).
 *   - A SENTENCE (a question's own key) is looked for when it is at least
 *     three words long.
 *   - Whole words only, case and punctuation ignored, so "an" is never found
 *     in "and".
 *   - Not the options, and not a wrong option's "why not": a distractor shown
 *     in one question is not the answer to another, and "why not" text is
 *     shown only to a student who picked that option.
 *
 * Two questions with the same particular answer also share a fact, so the
 * same answer is not asked twice in a round.
 *
 * A game whose questions share something this cannot see (the same quotation
 * cut two ways, the same scene) says so in its bank's `facts`.
 */

/** An answer given by more questions than this is the game's subject, not a give-away. */
export const MAX_SHARED = 3

export interface GiveAways {
  /** By question key: facts no other question in the round may share. */
  facts: ReadonlyMap<string, readonly string[]>
  /** By question key: the keys of the questions it gives away. */
  reveals: ReadonlyMap<string, ReadonlySet<string>>
}

/** Text as compared: lower case, words and apostrophes kept, everything else a space. */
export function wordsOf(text: string): string {
  return ` ${text
    .toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[^a-z0-9'À-ɏ]+/g, ' ')
    .replace(/(^| )'+|'+( |$)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `
}

export function findGiveAways<T>(
  bank: Pick<GameBank<T>, 'items' | 'key' | 'answer' | 'ordinaryAnswer'>,
  explanations: GameExplanations | null,
): GiveAways {
  const items = bank.items
  const keys = items.map((i) => bank.key(i))
  const answers = items.map((i) => wordsOf(bank.answer(i)))
  const count = new Map<string, number>()
  for (const a of answers) count.set(a, (count.get(a) ?? 0) + 1)

  const ordinary = items.map((i) => bank.ordinaryAnswer?.(i) === true)
  const particular = (a: string) => a.trim().length >= 3 && (count.get(a) ?? 0) <= MAX_SHARED
  const sentence = keys.map((k) => {
    const w = wordsOf(k)
    return w.trim().split(' ').length >= 3 ? w : null
  })

  const shown = items.map((_, j) => {
    const ex = explanations?.[keys[j]]
    return wordsOf([keys[j], ex?.why, ex?.more, ex?.tip].filter(Boolean).join(' '))
  })

  const facts = new Map<string, string[]>()
  const reveals = new Map<string, Set<string>>()
  items.forEach((_, i) => {
    if (particular(answers[i]) && !ordinary[i]) facts.set(keys[i], [`answer:${answers[i].trim()}`])
  })
  for (let j = 0; j < items.length; j++) {
    for (let i = 0; i < items.length; i++) {
      if (i === j || keys[i] === keys[j]) continue
      const gives =
        (particular(answers[i]) && !ordinary[i] && shown[j].includes(answers[i])) ||
        (sentence[i] !== null && shown[j].includes(sentence[i]!))
      if (!gives) continue
      let set = reveals.get(keys[j])
      if (!set) reveals.set(keys[j], (set = new Set()))
      set.add(keys[i])
    }
  }
  return { facts, reveals }
}
