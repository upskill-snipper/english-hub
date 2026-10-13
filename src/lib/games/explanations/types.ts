/**
 * Every skills game's questions, and the explanation a student sees after
 * answering each one.
 *
 * WHY THIS EXISTS (13 October 2026). The founder found "the depth of the
 * questions and answers is quite limited in the games" and asked for ten
 * times more. Measured that day: the seven GCSE games explained none of their
 * 440 answers, and the EAL and KS3 games explained 1,250 answers in 6 to 13
 * words each. Speed Analysis turned a wrong answer red and moved on after 1.2
 * seconds. An explanation now has up to four parts:
 *
 *   why   why the right answer is right, about THIS question;
 *   not   for a wrong option a student may choose, why it does not fit here;
 *   more  what the device does to a reader, or when the rule applies;
 *   tip   how to use it in an exam answer or in your own writing.
 *
 * HOW THEY ARE WRITTEN. The founder decided (13 October 2026) that new
 * explanations may be written with AI and must be checked before they ship.
 * Each game's explanations were written against its own bank, checked by a
 * second, independent reader against the item, and are held by
 * src/__tests__/every-game-answer-is-explained.test.ts: one for every
 * question, a `not` only for an option the question really offers, and the
 * house style (British English, no dashes for punctuation, no exclamation
 * marks, no grades).
 *
 * WHERE THE BANKS LIVE. Each game's questions moved out of its page into
 * src/data/games/banks/<slug>.ts so the explanations, the tests and the
 * account's saved results can all name the same question the same way.
 */

export interface Explanation {
  why: string
  /** By the wrong option's text exactly as the question shows it. */
  not?: Record<string, string>
  more?: string
  tip?: string
}

/** By the question's key: GameBank.key(item). */
export type GameExplanations = Record<string, Explanation>

/** A skills game's questions, described well enough to explain, record and test them. */
export interface GameBank<T> {
  slug: string
  items: readonly T[]
  /** A string unique within the game that names the question: its prompt, extract or word. */
  key(item: T): string
  /** The right answer, as the student sees it. */
  answer(item: T): string
  /** The fixed options shown with the question, or null where the student types, builds or orders. */
  options(item: T): readonly string[] | null
  /** What the question tests within the game (a device, a rule, an error type), where the bank says. */
  tag?(item: T): string | undefined
}
