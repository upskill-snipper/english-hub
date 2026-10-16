import type { GameBank } from '@/lib/games/explanations/types'

/**
 * The Verb To Be: read a sentence and choose the form of "to be" that fills
 * the gap. A label beside the question counter names the tense the sentence
 * needs (present, past, future, short form). Most sentences offer eight
 * options (am, is, are, was, were, will be, been, being); a short form offers
 * six of them and the short form itself, in a new order each time.
 *
 * Moved out of src/app/games/to-be-conjugation/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * label is small, and a student reads the sentence first. Eight sentences read
 * as natural English in a second tense, so a student who chose it was marked
 * wrong for good English:
 *
 *   - Three past sentences had no past word, and read at least as well in the
 *     present ("The shops are closed on Sunday" is the usual sentence). Each
 *     now carries one: "The film we saw last night ___ really exciting.",
 *     "Last Sunday the shops ___ closed." and "The students ___ quiet during
 *     the test yesterday."
 *   - "We ___ late for the bus this morning." fits "were", "are" and "will be"
 *     depending on the hour. It is now "yesterday morning".
 *   - English often uses the present for a plan, so four future sentences were
 *     just as natural with "am", "are" or "is": "I am at home this evening",
 *     "They are here tomorrow morning", "We are on holiday next week" and,
 *     the usual way to say it, "The exam is next Friday". Each now carries a
 *     word that only the future fits: "I ___ at home soon.", "They ___ here in
 *     about an hour.", "This time next week we ___ on holiday." and "The exam
 *     ___ over in two hours."
 *
 * A NINTH, FOUND BY THE SECOND READER (16 October 2026). "He ___ twelve years
 * old next month." answered "will be", but English gives a coming age in the
 * present as readily as in the future ("He's twelve next month", as "The exam
 * is next Friday" above), so "is" was good English marked wrong. It is now "He
 * ___ taller than his father one day.": a guess about the future, which only
 * "will be" fits.
 *
 * The other 45 sentences are unchanged. Each keeps the one-line rule it was
 * written with; the page no longer shows it, because the explanation says
 * more. A present sentence with no time word can be read in the past too
 * ("The coffee was too hot to drink"). Those stay, because the present is how
 * a sentence with no time word is read, and the label says present; where it
 * matters, the explanation points the student to the label.
 */

export type Tense = 'present' | 'past' | 'future' | 'short form'

export interface VerbItem {
  sentence: string // contains ___
  answer: string
  tense: Tense // shown to the student as a label above the sentence
  why: string // the earlier one-line rule; the explanation replaced it on the page
}

// Original bank of 50+ sentences. Each gap is filled with a form of 'to be'.
export const VERB_BANK: VerbItem[] = [
  // ── Present ───────────────────────────────────────────────────────
  {
    sentence: 'I ___ a student at the language school.',
    answer: 'am',
    tense: 'present',
    why: 'Use "am" with the pronoun "I" in the present.',
  },
  {
    sentence: 'She ___ my best friend from class.',
    answer: 'is',
    tense: 'present',
    why: 'Use "is" with "he", "she" or "it" in the present.',
  },
  {
    sentence: 'They ___ from Spain and Portugal.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "they", "we" or "you" in the present.',
  },
  {
    sentence: 'We ___ ready to begin the lesson.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "we" in the present.',
  },
  {
    sentence: 'He ___ a very kind teacher.',
    answer: 'is',
    tense: 'present',
    why: 'Use "is" with "he" in the present.',
  },
  {
    sentence: 'You ___ very good at grammar.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "you", whether one person or many.',
  },
  {
    sentence: 'The coffee ___ too hot to drink.',
    answer: 'is',
    tense: 'present',
    why: 'A single thing ("the coffee") takes "is".',
  },
  {
    sentence: 'My parents ___ at work right now.',
    answer: 'are',
    tense: 'present',
    why: '"My parents" is plural, so use "are".',
  },
  {
    sentence: 'It ___ a beautiful sunny day today.',
    answer: 'is',
    tense: 'present',
    why: 'Use "is" with "it" in the present.',
  },
  {
    sentence: 'The children ___ playing in the garden.',
    answer: 'are',
    tense: 'present',
    why: '"The children" is plural, so use "are".',
  },
  {
    sentence: 'I ___ happy to help you with English.',
    answer: 'am',
    tense: 'present',
    why: 'Use "am" with "I".',
  },
  {
    sentence: 'This book ___ very interesting.',
    answer: 'is',
    tense: 'present',
    why: 'A single thing ("this book") takes "is".',
  },
  {
    sentence: 'We ___ in the same class this term.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "we".',
  },
  {
    sentence: 'Tom and Lucy ___ brother and sister.',
    answer: 'are',
    tense: 'present',
    why: 'Two people joined by "and" are plural, so use "are".',
  },
  {
    sentence: 'The weather ___ cold in winter.',
    answer: 'is',
    tense: 'present',
    why: '"The weather" is singular, so use "is".',
  },

  // ── Past ──────────────────────────────────────────────────────────
  {
    sentence: 'Yesterday I ___ very tired after work.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "I" in the past.',
  },
  {
    sentence: 'She ___ at the cinema last night.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "she" in the past.',
  },
  {
    sentence: 'They ___ on holiday in Italy last summer.',
    answer: 'were',
    tense: 'past',
    why: 'Use "were" with "they" in the past.',
  },
  {
    sentence: 'We ___ late for the bus yesterday morning.',
    answer: 'were',
    tense: 'past',
    why: 'Use "were" with "we" in the past.',
  },
  {
    sentence: 'He ___ a footballer when he was young.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "he" in the past.',
  },
  {
    sentence: 'You ___ very helpful yesterday, thank you.',
    answer: 'were',
    tense: 'past',
    why: 'Use "were" with "you" in the past.',
  },
  {
    sentence: 'The film we saw last night ___ really exciting.',
    answer: 'was',
    tense: 'past',
    why: 'A single thing ("the film") takes "was" in the past.',
  },
  {
    sentence: 'My grandparents ___ born in Wales.',
    answer: 'were',
    tense: 'past',
    why: '"My grandparents" is plural, so use "were".',
  },
  {
    sentence: 'It ___ raining when we left the house.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "it" in the past.',
  },
  {
    sentence: 'Last Sunday the shops ___ closed.',
    answer: 'were',
    tense: 'past',
    why: '"The shops" is plural, so use "were".',
  },
  {
    sentence: 'I ___ born in nineteen ninety.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "I" in the past.',
  },
  {
    sentence: 'The students ___ quiet during the test yesterday.',
    answer: 'were',
    tense: 'past',
    why: '"The students" is plural, so use "were".',
  },
  {
    sentence: 'Last week ___ very busy at the office.',
    answer: 'was',
    tense: 'past',
    why: '"Last week" is singular, so use "was".',
  },

  // ── Future ────────────────────────────────────────────────────────
  {
    sentence: 'I ___ at home soon.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" to talk about the future.',
  },
  {
    sentence: 'She ___ ready in five minutes.',
    answer: 'will be',
    tense: 'future',
    why: '"Will be" works for every subject in the future.',
  },
  {
    sentence: 'They ___ here in about an hour.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for a future plan.',
  },
  {
    sentence: 'This time next week we ___ on holiday.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" to describe the future.',
  },
  {
    sentence: 'It ___ sunny at the weekend, I hope.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for a future prediction.',
  },
  {
    sentence: 'You ___ fine after a good rest.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for the future with "you".',
  },
  {
    sentence: 'The exam ___ over in two hours.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for a future event.',
  },
  {
    sentence: 'He ___ taller than his father one day.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for the future with "he".',
  },

  // ── Perfect / continuous forms ────────────────────────────────────
  {
    sentence: 'I have ___ to London many times.',
    answer: 'been',
    tense: 'present',
    why: 'After "have" or "has", use the past participle "been".',
  },
  {
    sentence: 'She has ___ a teacher for ten years.',
    answer: 'been',
    tense: 'present',
    why: 'After "has", use "been".',
  },
  {
    sentence: 'They have ___ very busy this week.',
    answer: 'been',
    tense: 'present',
    why: 'After "have", use "been".',
  },
  {
    sentence: 'Have you ever ___ to Scotland?',
    answer: 'been',
    tense: 'present',
    why: 'After "have", use the participle "been".',
  },
  {
    sentence: 'The dog is ___ very noisy today.',
    answer: 'being',
    tense: 'present',
    why: 'After "is", "are" or "am", use "being" for actions happening now.',
  },
  {
    sentence: 'Why are you ___ so unkind to him?',
    answer: 'being',
    tense: 'present',
    why: 'After "are", use "being" for behaviour happening now.',
  },
  {
    sentence: 'You are ___ very patient with the class.',
    answer: 'being',
    tense: 'present',
    why: 'After "are", use "being".',
  },
  {
    sentence: 'He had ___ ill for a week before the trip.',
    answer: 'been',
    tense: 'past',
    why: 'After "had", use the participle "been".',
  },

  // ── Short / contracted & negative forms ───────────────────────────
  {
    sentence: '___ a teacher, not a student. (I am)',
    answer: "I'm",
    tense: 'short form',
    why: '"I am" is shortened to "I’m".',
  },
  {
    sentence: 'She ___ very tall. (she is not)',
    answer: "isn't",
    tense: 'short form',
    why: '"is not" is shortened to "isn’t".',
  },
  {
    sentence: 'We ___ ready yet. (we are not)',
    answer: "aren't",
    tense: 'short form',
    why: '"are not" is shortened to "aren’t".',
  },
  {
    sentence: 'He ___ at school yesterday. (he was not)',
    answer: "wasn't",
    tense: 'short form',
    why: '"was not" is shortened to "wasn’t".',
  },
  {
    sentence: 'They ___ at home last night. (they were not)',
    answer: "weren't",
    tense: 'short form',
    why: '"were not" is shortened to "weren’t".',
  },
  {
    sentence: "You ___ late, don't worry. (you are not)",
    answer: "aren't",
    tense: 'short form',
    why: '"are not" is shortened to "aren’t".',
  },
  {
    sentence: 'It ___ very cold today. (it is not)',
    answer: "isn't",
    tense: 'short form',
    why: '"is not" is shortened to "isn’t".',
  },
  {
    sentence: '___ going to the party tonight. (We are)',
    answer: "We're",
    tense: 'short form',
    why: '"We are" is shortened to "We’re".',
  },
  {
    sentence: '___ a good friend of mine. (He is)',
    answer: "He's",
    tense: 'short form',
    why: '"He is" is shortened to "He’s".',
  },
  {
    sentence: '___ from a small village. (They are)',
    answer: "They're",
    tense: 'short form',
    why: '"They are" is shortened to "They’re".',
  },
]

/** The options every sentence offers, except a short form's. */
export const OPTIONS = ['am', 'is', 'are', 'was', 'were', 'will be', 'been', 'being'] as const

/**
 * The options a sentence offers: the standard eight, or for a short form six of
 * them (no "been" or "being") plus the short form itself. The page shuffles a
 * short form's options when it deals them; this is the same set, in a fixed order.
 */
export function optionSet(item: VerbItem): string[] {
  return item.tense === 'short form'
    ? ['am', 'is', 'are', 'was', 'were', 'will be', item.answer]
    : [...OPTIONS]
}

export const BANK: GameBank<VerbItem> = {
  slug: 'to-be-conjugation',
  items: VERB_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (v) => v.sentence,
  answer: (v) => v.answer,
  options: optionSet,
  // The form asked for ("chose is when the answer was are"). The short forms
  // share one kind: apostrophes are dropped from a kind, so "We're" would be
  // recorded as the past tense "were".
  tag: (v) => (v.tense === 'short form' ? v.tense : v.answer),
}
