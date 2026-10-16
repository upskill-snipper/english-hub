import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Numbers & Time: read a number, an ordinal, a clock time or a date and choose
 * how to say it in English, or read the words and choose the figures. Four kinds
 * of question: cardinal numbers, ordinal numbers, clock times and dates.
 *
 * Moved out of src/app/games/numbers-and-time/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Five of
 * the 57 had a fault; every other question has one right option and was left
 * as it was.
 *   - "12:00" offered "twelve midnight" beside the answer "twelve midday". Written
 *     without am or pm, 12:00 is midday on a 24-hour clock (where midnight is
 *     00:00) but can be either on a 12-hour one, and this bank uses both (3:15 is
 *     a 12-hour time; 14:00, 18:30 and 23:15 are 24-hour times), so midnight was
 *     as defensible as midday. It became "quarter past twelve".
 *   - "The month after April" and "The month before September" were headed "Read
 *     the date. Choose the order of months." Neither is a date, and neither asks
 *     for an order. Both are now headed "Read the clue. Choose the month."
 *   - "fortieth" and "seventh" were headed "Read the ordinal. Choose the number."
 *     and offered the plain numbers "40" and "7" beside the answers "40th" and
 *     "7th". A plain number is also "a number", so the heading made it a second
 *     right answer. Both are now headed "Read the ordinal. Choose it in digits,
 *     like 3rd."
 *
 * The page's own comment said the bank had 56 items. It has 57, and the comment
 * below now says so.
 *
 * The questions use British English throughout, and the explanations say so:
 * "three hundred and five", "the first of May" and "two thousand and eight".
 */

export type ItemType = 'cardinal' | 'ordinal' | 'clock' | 'date'

export interface NumberItem {
  /** What the learner reads / sees as the prompt */
  prompt: string
  /** Short instruction shown above the prompt */
  task: string
  /** The correct answer (must also appear in options) */
  answer: string
  /** Distractor answers - must be plausible and the same shape as the answer */
  distractors: string[]
  type: ItemType
}

// Original bank - 57 items (the page's own comment said 56). UK English throughout.
export const ITEM_BANK: NumberItem[] = [
  // ── Cardinal numbers: digits → words ──────────────────────────────────────
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '7',
    answer: 'seven',
    distractors: ['seventy', 'seventeen', 'eleven'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '13',
    answer: 'thirteen',
    distractors: ['thirty', 'thirteenth', 'three'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '30',
    answer: 'thirty',
    distractors: ['thirteen', 'three', 'thirtieth'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '15',
    answer: 'fifteen',
    distractors: ['fifty', 'five', 'fortyfive'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '50',
    answer: 'fifty',
    distractors: ['fifteen', 'five hundred', 'five'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '47',
    answer: 'forty-seven',
    distractors: ['fourty-seven', 'seventy-four', 'forty-eleven'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '82',
    answer: 'eighty-two',
    distractors: ['eighteen-two', 'twenty-eight', 'eighty-twelve'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '100',
    answer: 'one hundred',
    distractors: ['one thousand', 'a hundredth', 'ten hundred'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '1,000',
    answer: 'one thousand',
    distractors: ['one hundred', 'ten thousand', 'one million'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '21',
    answer: 'twenty-one',
    distractors: ['twelve', 'two-one', 'twenty-first'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '40',
    answer: 'forty',
    distractors: ['fourty', 'fourteen', 'four'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '66',
    answer: 'sixty-six',
    distractors: ['sixteen-six', 'sixty-sixth', 'six-six'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '90',
    answer: 'ninety',
    distractors: ['nineteen', 'ninty', 'nine'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '305',
    answer: 'three hundred and five',
    distractors: ['three hundred and fifty', 'three thousand and five', 'thirty-five'],
  },
  {
    type: 'cardinal',
    task: 'Read the words. Choose the number.',
    prompt: 'sixteen',
    answer: '16',
    distractors: ['60', '6', '60,000'],
  },
  {
    type: 'cardinal',
    task: 'Read the words. Choose the number.',
    prompt: 'ninety-nine',
    answer: '99',
    distractors: ['909', '19', '90'],
  },
  {
    type: 'cardinal',
    task: 'Read the words. Choose the number.',
    prompt: 'two hundred and twelve',
    answer: '212',
    distractors: ['2,012', '220', '2,120'],
  },

  // ── Ordinal numbers ───────────────────────────────────────────────────────
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '1st',
    answer: 'first',
    distractors: ['oneth', 'fourth', 'once'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '2nd',
    answer: 'second',
    distractors: ['twoth', 'twelfth', 'twentieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '3rd',
    answer: 'third',
    distractors: ['threeth', 'thirteenth', 'thirtieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '5th',
    answer: 'fifth',
    distractors: ['fiveth', 'fifteenth', 'fiftieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '8th',
    answer: 'eighth',
    distractors: ['eightth', 'eighteenth', 'eightieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '9th',
    answer: 'ninth',
    distractors: ['nineth', 'nineteenth', 'ninetieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '12th',
    answer: 'twelfth',
    distractors: ['twelveth', 'twentieth', 'twelve'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '20th',
    answer: 'twentieth',
    distractors: ['twentyth', 'twelfth', 'second'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '21st',
    answer: 'twenty-first',
    distractors: ['twenty-oneth', 'twelfth', 'twenty-one'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '30th',
    answer: 'thirtieth',
    distractors: ['thirteenth', 'thirtyth', 'third'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '100th',
    answer: 'hundredth',
    distractors: ['one hundred', 'hundreth', 'thousandth'],
  },
  {
    type: 'ordinal',
    task: 'Read the ordinal. Choose it in digits, like 3rd.',
    prompt: 'fortieth',
    answer: '40th',
    distractors: ['14th', '4th', '40'],
  },
  {
    type: 'ordinal',
    task: 'Read the ordinal. Choose it in digits, like 3rd.',
    prompt: 'seventh',
    answer: '7th',
    distractors: ['7', '17th', '70th'],
  },

  // ── Clock times: time → words ─────────────────────────────────────────────
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:00',
    answer: "three o'clock",
    distractors: ['three thirty', 'half past three', 'quarter past three'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:15',
    answer: 'quarter past three',
    distractors: ['quarter to three', 'half past three', 'three fifteen to'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:30',
    answer: 'half past three',
    distractors: ['half to three', 'half past four', 'quarter past three'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:45',
    answer: 'quarter to four',
    distractors: ['quarter past four', 'quarter to three', 'three forty-five past'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '9:05',
    answer: 'five past nine',
    distractors: ['five to nine', 'nine past five', 'five past ten'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '10:50',
    answer: 'ten to eleven',
    distractors: ['ten past eleven', 'ten to ten', 'fifty past ten'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '6:20',
    answer: 'twenty past six',
    distractors: ['twenty to six', 'six past twenty', 'twenty past seven'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '7:40',
    answer: 'twenty to eight',
    distractors: ['twenty past eight', 'twenty to seven', 'forty past seven'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '12:00',
    answer: 'twelve midday',
    distractors: ['quarter past twelve', 'twelve past', 'half past twelve'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '2:25',
    answer: 'twenty-five past two',
    distractors: ['twenty-five to two', 'twenty-five past three', 'half past two'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '8:35',
    answer: 'twenty-five to nine',
    distractors: ['twenty-five past nine', 'twenty-five to eight', 'thirty-five past eight'],
  },
  {
    type: 'clock',
    task: 'Read the 24-hour time. Choose the 12-hour time.',
    prompt: '14:00',
    answer: '2:00 pm',
    distractors: ['4:00 pm', '2:00 am', '12:00 pm'],
  },
  {
    type: 'clock',
    task: 'Read the 24-hour time. Choose the 12-hour time.',
    prompt: '18:30',
    answer: '6:30 pm',
    distractors: ['8:30 pm', '6:30 am', '6:13 pm'],
  },
  {
    type: 'clock',
    task: 'Read the 24-hour time. Choose the 12-hour time.',
    prompt: '23:15',
    answer: '11:15 pm',
    distractors: ['1:15 pm', '11:15 am', '11:50 pm'],
  },
  {
    type: 'clock',
    task: 'Read the time in words. Choose the clock.',
    prompt: 'quarter past seven',
    answer: '7:15',
    distractors: ['7:45', '6:15', '7:50'],
  },
  {
    type: 'clock',
    task: 'Read the time in words. Choose the clock.',
    prompt: 'half past ten',
    answer: '10:30',
    distractors: ['10:15', '11:30', '9:30'],
  },
  {
    type: 'clock',
    task: 'Read the time in words. Choose the clock.',
    prompt: 'quarter to five',
    answer: '4:45',
    distractors: ['5:45', '4:15', '5:15'],
  },

  // ── Dates ─────────────────────────────────────────────────────────────────
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '1 May',
    answer: 'the first of May',
    distractors: ['the first of March', 'May the one', 'the one of May'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '3 June',
    answer: 'the third of June',
    distractors: ['the thirtieth of June', 'June the three', 'the third of July'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '22 March',
    answer: 'the twenty-second of March',
    distractors: ['the twenty-two of March', 'the second of March', 'the twenty-second of May'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '31 December',
    answer: 'the thirty-first of December',
    distractors: [
      'the thirteenth of December',
      'the thirty-one of December',
      'the thirty-first of November',
    ],
  },
  {
    type: 'date',
    task: 'Read the clue. Choose the month.',
    prompt: 'The month after April',
    answer: 'May',
    distractors: ['March', 'June', 'August'],
  },
  {
    type: 'date',
    task: 'Read the clue. Choose the month.',
    prompt: 'The month before September',
    answer: 'August',
    distractors: ['October', 'July', 'November'],
  },
  {
    type: 'date',
    task: 'Read the day. Choose the day after it.',
    prompt: 'The day after Tuesday',
    answer: 'Wednesday',
    distractors: ['Monday', 'Thursday', 'Friday'],
  },
  {
    type: 'date',
    task: 'Read the day. Choose the day before it.',
    prompt: 'The day before Sunday',
    answer: 'Saturday',
    distractors: ['Monday', 'Friday', 'Sunday'],
  },
  {
    type: 'date',
    task: 'Read the year. Choose how to say it.',
    prompt: '1999',
    answer: 'nineteen ninety-nine',
    distractors: ['one thousand nine hundred', 'nineteen nine nine', 'one nine ninety-nine'],
  },
  {
    type: 'date',
    task: 'Read the year. Choose how to say it.',
    prompt: '2008',
    answer: 'two thousand and eight',
    distractors: ['twenty eight', 'two thousand eighty', 'twenty oh eighty'],
  },
]

export const BANK: GameBank<NumberItem> = {
  slug: 'numbers-and-time',
  items: ITEM_BANK,
  // No two prompts are the same, and the prompt is what the student sees.
  key: (q) => q.prompt,
  answer: (q) => q.answer,
  // The page deals these four in a new order each time; the four are fixed.
  options: (q) => [q.answer, ...q.distractors],
  tag: (q) => q.type,
}
