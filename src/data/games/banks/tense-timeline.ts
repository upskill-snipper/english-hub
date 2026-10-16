import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Tense Timeline: name the tense of a sentence, from four of the eight the
 * game teaches.
 *
 * Moved out of src/app/games/tense-timeline/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * game asks "Which tense is this?", marks one tense right, and offers three
 * others drawn at random from the remaining seven. In 15 of the 56 sentences a
 * second verb is written in another of the eight tenses, so the draw could
 * offer a tense that is plainly in the sentence, and a student who read it
 * closely was marked wrong:
 *
 *   - "I was cooking dinner when the phone rang" could offer Past Simple
 *     (rang) beside Past Continuous; "He was waiting ... when he saw", "While
 *     she was walking home, it began to rain" the same;
 *   - seven Past Perfect sentences carry a Past Simple verb for the later
 *     event ("By the time we arrived", "When I got home", "until I moved");
 *   - "I think it will rain", "I am sure you will pass" and "I promise I will
 *     phone you when I land" carry a Present Simple verb (think, am, promise,
 *     land), and "We are going to have a barbecue if the weather stays fine"
 *     another (stays);
 *   - "I have lost my keys and I cannot find them" carries a second present
 *     verb.
 *
 * In six of them the tense that was marked right is not the main clause's:
 * "While she was walking home, it began to rain", "They were tired because
 * they had walked all day", "He realised he had forgotten his passport", "I
 * think it will rain", "I promise I will phone you" and "I am sure you will
 * pass" all have a main verb in another tense, so a student who named THAT was
 * right on any reading of the sentence.
 *
 * Each of those 15 now names the other tense in `alsoReadAs`, and the page no
 * longer offers it as a wrong answer (tensesOffered), so exactly one option is
 * right, as in Speed Analysis. The explanation of the sentence says what the
 * other verb is doing.
 *
 * AN ORDER HAS NO TENSE (second reader, 16 October 2026). "Don't worry, I will
 * help you with your bags" was listed too, for the don't of its order. But an
 * order uses the plain verb and is not the present simple, as that sentence's
 * own explanation said, and the other three orders ("Look", "Look at those
 * dark clouds", "Be careful") were never listed. It has no `alsoReadAs` now, so
 * Present Simple may be offered there as it always could be, and the
 * explanations of all four sentences say why an order is not the present
 * simple.
 *
 * PUNCTUATION (second reader, 16 October 2026). Three sentences used an
 * exclamation mark or a spaced hyphen, which the house style does not, and the
 * student reads them: "Look! The children ..." now has a comma after Look, and
 * "Look at those dark clouds" and "Be careful" a colon, with a full stop for
 * the closing exclamation mark. Otherwise the sentences are unchanged.
 *
 * The one-line `why` each sentence carried is gone: its explanation replaces
 * it, and nothing else read it.
 *
 * OPTIONS. The page shows the right tense and three of the others, drawn at
 * random each time, so a question has no fixed four. `options` here is every
 * tense a round could offer for the sentence (the eight, less alsoReadAs), so
 * that a "why not" can be written for any wrong tense the student might pick.
 */

export type Tense =
  | 'Present Simple'
  | 'Present Continuous'
  | 'Past Simple'
  | 'Past Continuous'
  | 'Present Perfect'
  | 'Past Perfect'
  | "Future 'will'"
  | "'going to' Future"

export const ALL_TENSES: Tense[] = [
  'Present Simple',
  'Present Continuous',
  'Past Simple',
  'Past Continuous',
  'Present Perfect',
  'Past Perfect',
  "Future 'will'",
  "'going to' Future",
]

export interface TenseItem {
  sentence: string
  tense: Tense
  /**
   * Another tense that a second verb in the sentence is written in. It is never
   * offered as a wrong answer, because it is also in the sentence.
   */
  alsoReadAs?: Tense[]
}

/** Every tense a round may offer for this sentence: the eight, less any that are also in it. */
export function tensesOffered(item: TenseItem): Tense[] {
  return ALL_TENSES.filter((t) => !item.alsoReadAs?.includes(t))
}

export const SENTENCE_BANK: TenseItem[] = [
  // Present Simple
  {
    sentence: 'The train leaves at half past seven every morning.',
    tense: 'Present Simple',
  },
  {
    sentence: 'My sister works in a small bakery on the high street.',
    tense: 'Present Simple',
  },
  {
    sentence: 'Water boils at one hundred degrees Celsius.',
    tense: 'Present Simple',
  },
  {
    sentence: 'We usually have dinner at about seven o’clock.',
    tense: 'Present Simple',
  },
  {
    sentence: 'She speaks three languages fluently.',
    tense: 'Present Simple',
  },
  {
    sentence: 'The shop opens at nine and closes at six.',
    tense: 'Present Simple',
  },
  {
    sentence: 'He never drinks coffee after lunch.',
    tense: 'Present Simple',
  },

  // Present Continuous
  {
    sentence: 'Look, the children are playing in the garden right now.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'I am reading a fascinating novel this week.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'They are building a new library near the station.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'Why are you wearing your coat indoors?',
    tense: 'Present Continuous',
  },
  {
    sentence: 'My parents are travelling around Italy at the moment.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'She is studying for her exams this month.',
    tense: 'Present Continuous',
  },
  {
    sentence: 'The weather is getting colder these days.',
    tense: 'Present Continuous',
  },

  // Past Simple
  {
    sentence: 'We visited my grandmother in Wales last summer.',
    tense: 'Past Simple',
  },
  {
    sentence: 'He bought a second-hand bicycle yesterday.',
    tense: 'Past Simple',
  },
  {
    sentence: 'The film started at eight and finished at ten.',
    tense: 'Past Simple',
  },
  {
    sentence: 'They moved to Manchester three years ago.',
    tense: 'Past Simple',
  },
  {
    sentence: 'I broke my arm when I was nine.',
    tense: 'Past Simple',
  },
  {
    sentence: 'She wrote a letter to the council last week.',
    tense: 'Past Simple',
  },
  {
    sentence: 'We did not see anyone at the party.',
    tense: 'Past Simple',
  },

  // Past Continuous
  {
    sentence: 'I was cooking dinner when the phone rang.',
    tense: 'Past Continuous',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'They were watching television all evening.',
    tense: 'Past Continuous',
  },
  {
    sentence: 'While she was walking home, it began to rain.',
    tense: 'Past Continuous',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'At nine o’clock last night we were still revising.',
    tense: 'Past Continuous',
  },
  {
    sentence: 'He was waiting for the bus when he saw the accident.',
    tense: 'Past Continuous',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'The sun was shining and the birds were singing.',
    tense: 'Past Continuous',
  },
  {
    sentence: 'What were you doing at midnight?',
    tense: 'Past Continuous',
  },

  // Present Perfect
  {
    sentence: 'I have never been to Japan.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'She has just finished her homework.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'We have lived in this village since 2015.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'They have already eaten their lunch.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'Have you ever ridden a horse?',
    tense: 'Present Perfect',
  },
  {
    sentence: 'He has worked here for ten years.',
    tense: 'Present Perfect',
  },
  {
    sentence: 'I have lost my keys and I cannot find them.',
    tense: 'Present Perfect',
    alsoReadAs: ['Present Simple'],
  },

  // Past Perfect
  {
    sentence: 'By the time we arrived, the train had already left.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'She had finished the report before the meeting began.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'They were tired because they had walked all day.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'When I got home, my brother had cooked dinner.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'He realised he had forgotten his passport.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'The film had started by the time we sat down.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },
  {
    sentence: 'I had never seen snow until I moved to Scotland.',
    tense: 'Past Perfect',
    alsoReadAs: ['Past Simple'],
  },

  // Future 'will'
  {
    sentence: 'I think it will rain later this afternoon.',
    tense: "Future 'will'",
    alsoReadAs: ['Present Simple'],
  },
  {
    sentence: 'Don’t worry, I will help you with your bags.',
    tense: "Future 'will'",
  },
  {
    sentence: 'She will be twenty years old next month.',
    tense: "Future 'will'",
  },
  {
    sentence: 'The shop will close early on Christmas Eve.',
    tense: "Future 'will'",
  },
  {
    sentence: 'I promise I will phone you when I land.',
    tense: "Future 'will'",
    alsoReadAs: ['Present Simple'],
  },
  {
    sentence: 'Perhaps they will arrive before dark.',
    tense: "Future 'will'",
  },
  {
    sentence: 'I am sure you will pass the test.',
    tense: "Future 'will'",
    alsoReadAs: ['Present Simple'],
  },

  // 'going to' Future
  {
    sentence: 'We are going to visit the museum tomorrow.',
    tense: "'going to' Future",
  },
  {
    sentence: 'Look at those dark clouds: it is going to rain.',
    tense: "'going to' Future",
  },
  {
    sentence: 'She is going to study medicine at university.',
    tense: "'going to' Future",
  },
  {
    sentence: 'They are going to sell their old car next week.',
    tense: "'going to' Future",
  },
  {
    sentence: 'I am going to start a new job in September.',
    tense: "'going to' Future",
  },
  {
    sentence: 'Be careful: you are going to drop those plates.',
    tense: "'going to' Future",
  },
  {
    sentence: 'We are going to have a barbecue if the weather stays fine.',
    tense: "'going to' Future",
    alsoReadAs: ['Present Simple'],
  },
]

export const BANK: GameBank<TenseItem> = {
  slug: 'tense-timeline',
  items: SENTENCE_BANK,
  // No two sentences are the same, and the sentence is what the student sees.
  key: (item) => item.sentence,
  answer: (item) => item.tense,
  // The tenses a round can show, not the four it does: see OPTIONS above.
  options: (item) => tensesOffered(item),
  tag: (item) => item.tense,
}
