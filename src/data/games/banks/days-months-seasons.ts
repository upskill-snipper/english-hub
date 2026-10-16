import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Days, Months & Seasons: choose the right answer about the days of the week,
 * the months of the year and the four seasons. Four kinds of question: put a day
 * or month in order, say which comes next or before, match a month to its
 * season, and choose the correct spelling.
 *
 * Moved out of src/app/games/days-months-seasons/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * The questions are unchanged. Each was checked while it was explained, and
 * every one has one right option. Two conventions they rest on, which the
 * explanations say aloud so that a learner from another country is not left
 * guessing:
 *   - The week starts on Monday. The first question says so ("UK calendars often
 *     start here"); calendars in the USA and some other countries start on
 *     Sunday, and the last-day question names the weekend day after Saturday.
 *   - The seasons are the UK weather service's whole months: spring March to
 *     May, summer June to August, autumn September to November, winter December
 *     to February, in the northern hemisphere (the page says so on every
 *     month-season question). Counted from the equinoxes and solstices instead,
 *     spring would start on about 20 March, summer on 21 June, autumn on 22
 *     September and winter on 21 December, so March, June, September and
 *     December would each fall in two seasons. The questions use the whole-month
 *     way that UK schools teach. Every season explanation says that this is how
 *     the seasons are usually counted in the UK, and those for March, June,
 *     September and December give the other way too.
 */

export type Subtype = 'order' | 'next-before' | 'month-season' | 'spelling-choice'

export interface Question {
  subtype: Subtype
  prompt: string
  options: string[]
  answer: string
  note?: string
}

// Northern-hemisphere seasons assumed (UK English). Months grouped:
// Winter: Dec, Jan, Feb · Spring: Mar, Apr, May · Summer: Jun, Jul, Aug · Autumn: Sep, Oct, Nov

export const QUESTION_BANK: Question[] = [
  // ── Subtype: order - put days/months in the right place ──────────────────────
  {
    subtype: 'order',
    prompt: 'Which day comes FIRST in the week (UK calendars often start here)?',
    options: ['Monday', 'Friday', 'Sunday', 'Wednesday'],
    answer: 'Monday',
  },
  {
    subtype: 'order',
    prompt: 'Which is the THIRD day of the week, counting from Monday?',
    options: ['Tuesday', 'Wednesday', 'Thursday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'order',
    prompt: 'Which is the LAST day of the week (the weekend day after Saturday)?',
    options: ['Friday', 'Saturday', 'Sunday', 'Monday'],
    answer: 'Sunday',
  },
  {
    subtype: 'order',
    prompt: 'Put these in order. Which day is in the MIDDLE: Monday, ?, Friday?',
    options: ['Wednesday', 'Sunday', 'Saturday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'order',
    prompt: 'Which is the FIRST month of the year?',
    options: ['January', 'March', 'December', 'June'],
    answer: 'January',
  },
  {
    subtype: 'order',
    prompt: 'Which is the LAST month of the year?',
    options: ['November', 'December', 'October', 'January'],
    answer: 'December',
  },
  {
    subtype: 'order',
    prompt: 'Which is the SIXTH month of the year?',
    options: ['May', 'June', 'July', 'August'],
    answer: 'June',
  },
  {
    subtype: 'order',
    prompt: 'Which month is number 9 (the ninth month)?',
    options: ['August', 'September', 'October', 'November'],
    answer: 'September',
  },
  {
    subtype: 'order',
    prompt: 'Which is the SECOND day of the week, counting from Monday?',
    options: ['Tuesday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'order',
    prompt: 'How many days are there in a week?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    subtype: 'order',
    prompt: 'How many months are there in a year?',
    options: ['10', '11', '12', '13'],
    answer: '12',
  },
  {
    subtype: 'order',
    prompt: 'Which is the FOURTH month of the year?',
    options: ['March', 'April', 'May', 'February'],
    answer: 'April',
  },

  // ── Subtype: next-before - what comes after/before ───────────────────────────
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Wednesday?',
    options: ['Thursday', 'Tuesday', 'Friday', 'Monday'],
    answer: 'Thursday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes BEFORE Monday?',
    options: ['Sunday', 'Tuesday', 'Saturday', 'Friday'],
    answer: 'Sunday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Friday?',
    options: ['Saturday', 'Thursday', 'Sunday', 'Monday'],
    answer: 'Saturday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes BEFORE Thursday?',
    options: ['Wednesday', 'Friday', 'Tuesday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Sunday?',
    options: ['Monday', 'Saturday', 'Tuesday', 'Friday'],
    answer: 'Monday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes BEFORE Saturday?',
    options: ['Friday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Friday',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes AFTER March?',
    options: ['April', 'February', 'May', 'June'],
    answer: 'April',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes BEFORE January?',
    options: ['December', 'November', 'February', 'October'],
    answer: 'December',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes AFTER July?',
    options: ['August', 'June', 'September', 'May'],
    answer: 'August',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes BEFORE October?',
    options: ['September', 'November', 'August', 'December'],
    answer: 'September',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes AFTER November?',
    options: ['December', 'October', 'January', 'September'],
    answer: 'December',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Tuesday?',
    options: ['Wednesday', 'Monday', 'Thursday', 'Friday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes BEFORE June?',
    options: ['May', 'July', 'April', 'August'],
    answer: 'May',
  },

  // ── Subtype: month-season - match a month to its season or number ─────────────
  {
    subtype: 'month-season',
    prompt: 'Which season is December in?',
    options: ['Winter', 'Summer', 'Spring', 'Autumn'],
    answer: 'Winter',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is July in?',
    options: ['Summer', 'Winter', 'Autumn', 'Spring'],
    answer: 'Summer',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is April in?',
    options: ['Spring', 'Autumn', 'Winter', 'Summer'],
    answer: 'Spring',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is October in?',
    options: ['Autumn', 'Spring', 'Summer', 'Winter'],
    answer: 'Autumn',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is February in?',
    options: ['Winter', 'Spring', 'Summer', 'Autumn'],
    answer: 'Winter',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is May in?',
    options: ['Spring', 'Summer', 'Autumn', 'Winter'],
    answer: 'Spring',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is August in?',
    options: ['Summer', 'Autumn', 'Winter', 'Spring'],
    answer: 'Summer',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is November in?',
    options: ['Autumn', 'Winter', 'Spring', 'Summer'],
    answer: 'Autumn',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Summer?',
    options: ['June', 'January', 'March', 'October'],
    answer: 'June',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Winter?',
    options: ['January', 'May', 'July', 'September'],
    answer: 'January',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Spring?',
    options: ['March', 'December', 'August', 'November'],
    answer: 'March',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Autumn?',
    options: ['September', 'June', 'February', 'April'],
    answer: 'September',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is January in?',
    options: ['Winter', 'Spring', 'Summer', 'Autumn'],
    answer: 'Winter',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is September in?',
    options: ['Autumn', 'Summer', 'Spring', 'Winter'],
    answer: 'Autumn',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },

  // ── Subtype: spelling-choice - choose the correctly spelt word ───────────────
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Wednesday', 'Wensday', 'Wendsday', 'Wednsday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['February', 'Febuary', 'Februery', 'Feburary'],
    answer: 'February',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Tuesday', 'Tusday', 'Teusday', 'Tuseday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Thursday', 'Thirsday', 'Thusday', 'Thrusday'],
    answer: 'Thursday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Saturday', 'Saterday', 'Satuday', 'Saturaday'],
    answer: 'Saturday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['January', 'Janurary', 'Januery', 'Janaury'],
    answer: 'January',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['August', 'Agust', 'Augost', 'Augest'],
    answer: 'August',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['September', 'Septmber', 'Setember', 'Septembre'],
    answer: 'September',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Friday', 'Friaday', 'Fryday', 'Firday'],
    answer: 'Friday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['October', 'Octuber', 'Octobre', 'Octobor'],
    answer: 'October',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['December', 'Desember', 'Decembre', 'Decmber'],
    answer: 'December',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Monday', 'Munday', 'Monady', 'Mondey'],
    answer: 'Monday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Sunday', 'Sonday', 'Sunaday', 'Sundey'],
    answer: 'Sunday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['November', 'Novmber', 'Novembre', 'Noveber'],
    answer: 'November',
  },
]

export const BANK: GameBank<Question> = {
  slug: 'days-months-seasons',
  items: QUESTION_BANK,
  // Every prompt is different except the spelling questions' "Which is the
  // correct spelling?", which the word asked about tells apart.
  key: (q) => (q.subtype === 'spelling-choice' ? `${q.prompt} ${q.answer}` : q.prompt),
  answer: (q) => q.answer,
  // The page deals the four in a new order each time; the four are fixed.
  options: (q) => q.options,
  tag: (q) => q.subtype,
}
