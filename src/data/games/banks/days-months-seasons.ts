import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Days, Months & Seasons: choose the right answer about the days of the week,
 * the months of the year, the seasons, dates and the words English uses for
 * them.
 *
 * Moved out of src/app/games/days-months-seasons/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * Two conventions the questions rest on, which the explanations say aloud so
 * that a learner from another country is not left guessing: the week starts on
 * Monday, as on UK calendars (calendars in the USA and some other countries
 * start on Sunday, and some on Saturday); and the English is British English.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-eal.md) found this
 * bank had 53 questions, all recall, that 16 of them tested facts about the
 * world rather than English, and that a round averaged 5.8 give-aways (the
 * tip on "Which day comes first?" listed all seven days, and "What day comes
 * after Wednesday?" could follow it). It now holds 240: 80 at tier 1, 82 at
 * tier 2 and 78 at tier 3 (80 each as written; two moved down when checked,
 * below):
 *
 *   - Tier 1 (A1, recall): a day or month by its place or its neighbour, the
 *     word spelt on its own (ten more words, among them autumn, tomorrow,
 *     calendar and fortnight), short forms on a calendar ('Thu', 'Jun'), and
 *     calendar words (week, weekend, yesterday, the seasons in order).
 *   - Tier 2 (A2, understanding): on, in or at with a time ("My birthday is
 *     ___ 3 May."); dates read aloud and written ("the fourteenth of
 *     February", 04/06 as 4 June in British order); capital letters (days and
 *     months take one, seasons do not); spelling in a sentence (weather or
 *     whether, the fifth, the twelfth); words that count from today (the day
 *     after tomorrow, last month, a fortnight, weekly); short forms in use.
 *   - Tier 3 (B1, the language in use): since, for and ago, by and until,
 *     during and while, and the tense a time phrase asks for; a turn in a
 *     conversation, whose wrong replies answer a different question; short
 *     texts, notices and letters with gaps to fill or a date to work out
 *     ("a week today", "every other week", a bank holiday, DD/MM/YYYY).
 *
 * REAL TEXT. Ten questions quote a novel out of UK copyright, copied exactly
 * from src/data/full-texts, with the source in `note`: Jane Eyre (chapters 5,
 * 32 and 35), Frankenstein (Letters I and IV, chapter 19), Strange Case of Dr
 * Jekyll and Mr Hyde, Animal Farm (chapter 4) and Pride and Prejudice
 * (chapters 6 and 13). The other sentences are the site's own.
 *
 * GIVE-AWAYS. `facts` holds the days, months and seasons a question names
 * (namesOf) and the rule it tests, so no round holds two questions about one
 * day or one rule. Every explanation names only the days, months and seasons
 * its own question names, and states only its own question's rule.
 *
 * FIXED. "Which is the LAST day of the week (the weekend day after
 * Saturday)?" gave its answer in the brackets: it now asks about a UK
 * calendar, and Monday, which no one would choose, left its options. "Put
 * these in order. Which day is in the MIDDLE: Monday, ?, Friday?" offered
 * Monday, already in the question, and two weekend days: it now names the
 * school week and offers Tuesday and Thursday, the near neighbours. "Which
 * day comes FIRST" offered Wednesday, which no one would choose: it now
 * offers Saturday, the first day of the week in some countries. The
 * explanations of all 37 questions kept were rewritten to the give-away rule
 * above.
 *
 * REMOVED. The fourteen month-and-season questions ("Which season is
 * December in?", "Which month is in Summer?") and "How many days are there in
 * a week?" and "How many months are there in a year?". They tested the UK's
 * weather and the calendar's arithmetic, not English: a learner from
 * Australia knows December as summer. The seasons stay, asked by their order
 * and what the words mean.
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided on 13
 * October 2026. Every question was read against its options, every date and
 * sum worked out, and every novel's line found word for word in
 * src/data/full-texts. Fixed:
 *   - "Which is the correct spelling?" over March, Mart, Marsh and Mars had
 *     four right answers (a mart, a marsh and the planet are English words
 *     too): it now asks for the spelling of the month.
 *   - "A week today" offered Monday 3 July, which is a Wednesday when 3 June
 *     is a Monday: it now offers Monday 1 July, four weeks on.
 *   - "The other day" offered "on a different day", which the phrase
 *     literally is: it now offers "some day soon", the misreading of
 *     "another day".
 *   - "Dec. 11th" from Frankenstein moved from tier 3 to tier 2: it asks what
 *     the three tier 2 dates from novels ask.
 *   - "Parents' evening is on 11/03" moved from tier 3 to tier 2: it asks
 *     what the tier 2 letter dated 12/01/2026 asks.
 * Kept after checking: Mart (Turkish and Russian), Mars (French and
 * Swedish), Aprel (Russian, Uzbek), Julai (Malay, Swahili) and diery (the
 * sound of "die" and "ry") are spellings EAL learners do write, and "Mars" is
 * never a word in a sentence here.
 */

export type Subtype =
  | 'order'
  | 'next-before'
  | 'spelling-choice'
  | 'short-form'
  | 'calendar-word'
  | 'preposition'
  | 'saying-dates'
  | 'capitals'
  | 'spelling-in-sentence'
  | 'time-words'
  | 'time-phrase'
  | 'dialogue'
  | 'short-text'

export interface Question {
  subtype: Subtype
  /** 1 recall and recognition (A1), 2 understanding (A2), 3 using the language in context (B1). */
  tier: 1 | 2 | 3
  /** The question; a dialogue puts each speaker on a line of its own. */
  prompt: string
  options: string[]
  answer: string
  /** Shown under the question in small type: where a real line comes from, or a convention. */
  note?: string
  /**
   * What would give this question away to another in the same round, beyond
   * the days, months and seasons it names (BANK.facts finds those itself): the
   * rule it tests, or the pair of words it sets against each other.
   */
  facts?: string[]
}

export const QUESTION_BANK: Question[] = [
  // ── Tier 1: order, a day or month by its place ────────────────────────────
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which day comes FIRST in the week (UK calendars often start here)?',
    options: ['Monday', 'Sunday', 'Saturday', 'Friday'],
    answer: 'Monday',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the THIRD day of the week, counting from Monday?',
    options: ['Tuesday', 'Wednesday', 'Thursday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the LAST day of the week on a UK calendar?',
    options: ['Sunday', 'Saturday', 'Friday'],
    answer: 'Sunday',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which day is in the MIDDLE of the school week, from Monday to Friday?',
    options: ['Wednesday', 'Tuesday', 'Thursday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the FIRST month of the year?',
    options: ['January', 'March', 'December', 'June'],
    answer: 'January',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the LAST month of the year?',
    options: ['November', 'December', 'October', 'January'],
    answer: 'December',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the SIXTH month of the year?',
    options: ['May', 'June', 'July', 'August'],
    answer: 'June',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which month is number 9 (the ninth month)?',
    options: ['August', 'September', 'October', 'November'],
    answer: 'September',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the SECOND day of the week, counting from Monday?',
    options: ['Tuesday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the FOURTH month of the year?',
    options: ['March', 'April', 'May', 'February'],
    answer: 'April',
  },

  // ── Tier 1: next-before, what comes after or before ───────────────────────
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes AFTER Wednesday?',
    options: ['Thursday', 'Tuesday', 'Friday', 'Monday'],
    answer: 'Thursday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes BEFORE Monday?',
    options: ['Sunday', 'Tuesday', 'Saturday', 'Friday'],
    answer: 'Sunday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes AFTER Friday?',
    options: ['Saturday', 'Thursday', 'Sunday', 'Monday'],
    answer: 'Saturday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes BEFORE Thursday?',
    options: ['Wednesday', 'Friday', 'Tuesday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes AFTER Sunday?',
    options: ['Monday', 'Saturday', 'Tuesday', 'Friday'],
    answer: 'Monday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes BEFORE Saturday?',
    options: ['Friday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Friday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes AFTER March?',
    options: ['April', 'February', 'May', 'June'],
    answer: 'April',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes BEFORE January?',
    options: ['December', 'November', 'February', 'October'],
    answer: 'December',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes AFTER July?',
    options: ['August', 'June', 'September', 'May'],
    answer: 'August',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes BEFORE October?',
    options: ['September', 'November', 'August', 'December'],
    answer: 'September',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes AFTER November?',
    options: ['December', 'October', 'January', 'September'],
    answer: 'December',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes AFTER Tuesday?',
    options: ['Wednesday', 'Monday', 'Thursday', 'Friday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes BEFORE June?',
    options: ['May', 'July', 'April', 'August'],
    answer: 'May',
  },

  // ── Tier 1: spelling-choice, the word on its own ──────────────────────────
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Wednesday', 'Wensday', 'Wendsday', 'Wednsday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['February', 'Febuary', 'Februery', 'Feburary'],
    answer: 'February',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Tuesday', 'Tusday', 'Teusday', 'Tuseday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Thursday', 'Thirsday', 'Thusday', 'Thrusday'],
    answer: 'Thursday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Saturday', 'Saterday', 'Satuday', 'Saturaday'],
    answer: 'Saturday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['January', 'Janurary', 'Januery', 'Janaury'],
    answer: 'January',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['August', 'Agust', 'Augost', 'Augest'],
    answer: 'August',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['September', 'Septmber', 'Setember', 'Septembre'],
    answer: 'September',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Friday', 'Friaday', 'Fryday', 'Firday'],
    answer: 'Friday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['October', 'Octuber', 'Octobre', 'Octobor'],
    answer: 'October',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['December', 'Desember', 'Decembre', 'Decmber'],
    answer: 'December',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Monday', 'Munday', 'Monady', 'Mondey'],
    answer: 'Monday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['Sunday', 'Sonday', 'Sunaday', 'Sundey'],
    answer: 'Sunday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['November', 'Novmber', 'Novembre', 'Noveber'],
    answer: 'November',
  },
  // ── New questions (24 October 2026) ────────────────────────────────────────

  // Tier 1: more places and neighbours. Each month whose name looks like a
  // number (Sept, Oct, Nov, Dec) is offered where that number is asked.
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the FIFTH day of the week, counting from Monday?',
    options: ['Friday', 'Thursday', 'Saturday', 'Sunday'],
    answer: 'Friday',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the SEVENTH month of the year?',
    options: ['July', 'June', 'August', 'September'],
    answer: 'July',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the SECOND month of the year?',
    options: ['February', 'January', 'March', 'December'],
    answer: 'February',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the TENTH month of the year?',
    options: ['October', 'September', 'November', 'December'],
    answer: 'October',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the EIGHTH month of the year?',
    options: ['August', 'July', 'September', 'October'],
    answer: 'August',
  },
  {
    subtype: 'order',
    tier: 1,
    prompt: 'Which is the ELEVENTH month of the year?',
    options: ['November', 'October', 'December', 'September'],
    answer: 'November',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes AFTER Monday?',
    options: ['Tuesday', 'Sunday', 'Wednesday', 'Thursday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What day comes BEFORE Sunday?',
    options: ['Saturday', 'Monday', 'Friday', 'Thursday'],
    answer: 'Saturday',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes AFTER January?',
    options: ['February', 'December', 'March', 'April'],
    answer: 'February',
  },
  {
    subtype: 'next-before',
    tier: 1,
    prompt: 'What month comes BEFORE September?',
    options: ['August', 'October', 'July', 'June'],
    answer: 'August',
  },

  // Tier 1: short forms on calendars and timetables. Each is offered beside
  // the days or months that begin with the same letters.
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Thu' mean?",
    options: ['Thursday', 'Tuesday', 'Wednesday', 'Friday'],
    answer: 'Thursday',
    facts: ['pair:tue-thu'],
  },
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Tue' mean?",
    options: ['Tuesday', 'Thursday', 'Monday', 'Wednesday'],
    answer: 'Tuesday',
    facts: ['pair:tue-thu'],
  },
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Sat' mean?",
    options: ['Saturday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Saturday',
  },
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Wed' mean?",
    options: ['Wednesday', 'Tuesday', 'Thursday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Mar' mean?",
    options: ['March', 'May', 'April', 'August'],
    answer: 'March',
  },
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Jun' mean?",
    options: ['June', 'July', 'January', 'August'],
    answer: 'June',
  },
  {
    subtype: 'short-form',
    tier: 1,
    prompt: "On a calendar, what does 'Aug' mean?",
    options: ['August', 'April', 'autumn'],
    answer: 'August',
  },

  // Tier 1: the words for parts of the calendar. A season is asked by its
  // place among the seasons or by what the word means, never by which months
  // it holds: that is a fact about the weather of one country, not English.
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Seven days make one ___.',
    options: ['week', 'month', 'weekend', 'year'],
    answer: 'week',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Saturday and Sunday are the ___.',
    options: ['weekend', 'weekdays', 'week'],
    answer: 'weekend',
    facts: ['set:weekday'],
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'The days from Monday to Friday are called ___.',
    options: ['weekdays', 'weekends', 'holidays'],
    answer: 'weekdays',
    facts: ['set:weekday'],
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'The day after today is ___.',
    options: ['tomorrow', 'yesterday', 'tonight', 'today'],
    answer: 'tomorrow',
    facts: ['set:yesterday-tomorrow'],
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'The day before today was ___.',
    options: ['yesterday', 'tomorrow', 'tonight'],
    answer: 'yesterday',
    facts: ['set:yesterday-tomorrow'],
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Twelve months make one ___.',
    options: ['year', 'decade', 'season', 'week'],
    answer: 'year',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which season comes after winter?',
    options: ['spring', 'summer', 'autumn'],
    answer: 'spring',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which season comes after spring?',
    options: ['summer', 'winter', 'autumn'],
    answer: 'summer',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which season comes after summer?',
    options: ['autumn', 'spring', 'winter'],
    answer: 'autumn',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which season comes before spring?',
    options: ['winter', 'summer', 'autumn'],
    answer: 'winter',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which word is a season, not a month?',
    options: ['autumn', 'August', 'April', 'March'],
    answer: 'autumn',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which is the coldest season of the year?',
    options: ['winter', 'summer', 'spring', 'autumn'],
    answer: 'winter',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'We usually eat breakfast in the ___.',
    options: ['morning', 'evening', 'night', 'afternoon'],
    answer: 'morning',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: "The time from twelve o'clock (midday) until about six o'clock is the ___.",
    options: ['afternoon', 'evening', 'morning', 'night-time'],
    answer: 'afternoon',
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which day is NOT a weekday?',
    options: ['Sunday', 'Monday', 'Thursday', 'Friday'],
    answer: 'Sunday',
    facts: ['set:weekday'],
  },
  {
    subtype: 'calendar-word',
    tier: 1,
    prompt: 'Which year comes after this year?',
    options: ['next year', 'last year', 'past year'],
    answer: 'next year',
  },

  // Tier 1: more words to spell. Every wrong spelling is one learners write:
  // a letter left out or doubled, or the word as another language spells it.
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['autumn', 'autum', 'autumm', 'atumn'],
    answer: 'autumn',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['tomorrow', 'tommorow', 'tomorow', 'tommorrow'],
    answer: 'tomorrow',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['yesterday', 'yesturday', 'yestarday', 'yesterdey'],
    answer: 'yesterday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['calendar', 'calender', 'calandar', 'callendar'],
    answer: 'calendar',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['fortnight', 'fortnite', 'fourtnight', 'forthnight'],
    answer: 'fortnight',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['holiday', 'holliday', 'holyday', 'holidey'],
    answer: 'holiday',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling of the month?',
    options: ['March', 'Mart', 'Marsh', 'Mars'],
    answer: 'March',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['April', 'Aprel', 'Apirl', 'Aprile'],
    answer: 'April',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['July', 'Juli', 'Julai', 'Jully'],
    answer: 'July',
  },
  {
    subtype: 'spelling-choice',
    tier: 1,
    prompt: 'Which is the correct spelling?',
    options: ['summer', 'sumer', 'summar', 'sommer'],
    answer: 'summer',
  },

  // Tier 2: on, in or at. Each question's rule is a fact, so no round holds
  // two questions an explanation of one rule would answer.
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'My birthday is ___ 3 May.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'My birthday is ___ May.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'We have PE ___ Tuesdays.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'I was born ___ 2011.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'We go skiing ___ winter.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'I do my homework ___ the evening.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:part-of-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'Owls hunt ___ night.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    facts: ['rule:part-of-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'It is Friday and school has finished. Which do people in the UK usually say?',
    options: [
      'See you at the weekend.',
      'See you in the weekend.',
      'See you at weekend.',
      'See you in weekend.',
    ],
    answer: 'See you at the weekend.',
    facts: ['rule:weekend'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'School finishes ___ 22 July.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'We moved to Leeds ___ the summer of 2023.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: "I'll see you ___ Monday morning.",
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day', 'rule:part-of-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: "The shop is closed ___ New Year's Day.",
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'Our exams are ___ June.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'Is the party ___ Friday?',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'Many birds fly south ___ autumn.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'I go swimming ___ Saturday mornings.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day', 'rule:part-of-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'My dentist appointment is ___ the afternoon.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:part-of-day'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'We were on holiday ___ the end of August.',
    options: ['at', 'in', 'on'],
    answer: 'at',
    facts: ['rule:at-start-end'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'My parents got married ___ the 1990s.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'It often rains ___ April.',
    options: ['in', 'on', 'at'],
    answer: 'in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'preposition',
    tier: 2,
    prompt: 'The bus was late ___ Wednesday.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },

  // Tier 2: capital letters. Days and months take one and seasons do not; a
  // learner may also give one to an ordinary word (as German does to every
  // noun) or leave one off "I". Each question shows a sentence with one word
  // wrong and asks which; the options are words from it, so none differs from
  // another only in its capitals. A word written small is named in `facts`,
  // which find only capitalised days and months for themselves.
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence needs a capital letter. Which one?\n“We play cricket on sundays in summer.”',
    options: ['sundays', 'summer', 'cricket', 'play'],
    answer: 'sundays',
    facts: ['rule:capitals', 'name:sunday'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence needs a capital letter. Which one?\n“My cousin stays with us in summer, usually in august.”',
    options: ['august', 'summer', 'cousin', 'stays'],
    answer: 'august',
    facts: ['rule:capitals', 'name:august'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence should NOT have a capital letter. Which one?\n“In Winter I walk to school with Mohammed.”',
    options: ['Winter', 'Mohammed', 'In', 'I'],
    answer: 'Winter',
    facts: ['rule:capitals'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence needs a capital letter. Which one?\n“Our school trip is on friday 12 March.”',
    options: ['friday', 'school', 'trip'],
    answer: 'friday',
    facts: ['rule:capitals', 'name:friday'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence should NOT have a capital letter. Which one?\n“My favourite season is Autumn, and my birthday is in October.”',
    options: ['Autumn', 'October', 'My'],
    answer: 'Autumn',
    facts: ['rule:capitals'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence needs a capital letter. Which one?\n“I was born in june, in the middle of summer.”',
    options: ['june', 'summer', 'middle', 'born'],
    answer: 'june',
    facts: ['rule:capitals', 'name:june'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence should NOT have a capital letter. Which one?\n“Every Friday in December we have a Quiz.”',
    options: ['Quiz', 'Friday', 'December', 'Every'],
    answer: 'Quiz',
    facts: ['rule:capitals'],
  },
  {
    subtype: 'capitals',
    tier: 2,
    prompt:
      'One word in this sentence should NOT have a capital letter. Which one?\n“Last Summer we went to Scotland in August.”',
    options: ['Summer', 'Scotland', 'August', 'Last'],
    answer: 'Summer',
    facts: ['rule:capitals'],
  },

  // Tier 2: dates read aloud and written down. A date is said with an ordinal
  // ("the fourteenth of February"); a UK date in figures puts the day before
  // the month (04/06 is 4 June), and the wrong options include the American
  // order. Three dates are real lines, copied exactly from
  // src/data/full-texts, with the source in `note`.
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 14 February?',
    options: [
      'the fourteenth of February',
      'the fourteen of February',
      'the fortieth of February',
      'the fourth of February',
    ],
    answer: 'the fourteenth of February',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 30 April?',
    options: [
      'the thirtieth of April',
      'the thirteenth of April',
      'the thirty of April',
      'the third of April',
    ],
    answer: 'the thirtieth of April',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 12 August?',
    options: [
      'the twelfth of August',
      'the twelve of August',
      'the twentieth of August',
      'the second of August',
    ],
    answer: 'the twelfth of August',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 23 September?',
    options: [
      'the twenty-third of September',
      'the twenty-three of September',
      'the twentieth of September',
      'the third of September',
    ],
    answer: 'the twenty-third of September',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 2 October?',
    options: [
      'the second of October',
      'the two of October',
      'the twelfth of October',
      'the twentieth of October',
    ],
    answer: 'the second of October',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt:
      "Your friend says, 'My birthday is the eleventh of December.' How do you write the date?",
    options: ['11 December', '7 December', '11 November', '12 December'],
    answer: '11 December',
    facts: ['rule:short-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: "Which is the usual way to write 'the twenty-first of March' in short?",
    options: ['21st March', '12th March', '21st May', '20th March'],
    answer: '21st March',
    facts: ['rule:short-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'In the UK, what is the date 04/06?',
    options: ['4 June', '6 April', '4 July'],
    answer: '4 June',
    facts: ['rule:uk-order'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'A UK letter is dated 12/01/2026. Which month is it?',
    options: ['January', 'December', 'October'],
    answer: 'January',
    facts: ['rule:uk-order'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'On a UK form you write your birthday as 07/11. When is your birthday?',
    options: [
      'the seventh of November',
      'the eleventh of July',
      'the seventh of October',
      'the seventh of December',
    ],
    answer: 'the seventh of November',
    facts: ['rule:uk-order', 'rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you write 9 March the British way, in numbers?',
    options: ['09/03', '03/09', '09/04'],
    answer: '09/03',
    facts: ['rule:uk-order'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt:
      'Charlotte Brontë writes: “It was the 5th of November, and a holiday.” How do you say the date?',
    options: ['the fifth of November', 'the five of November', 'the fifteenth of November'],
    answer: 'the fifth of November',
    note: 'Charlotte Brontë, Jane Eyre (1847), chapter 32',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt:
      'Robert Louis Stevenson writes: “On the 8th of January Utterson had dined at the doctor’s with a small party…” How do you say the date?',
    options: ['the eighth of January', 'the eight of January', 'the eighteenth of January'],
    answer: 'the eighth of January',
    note: "Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886), 'Incident of Dr. Lanyon'",
    facts: ['rule:ordinal-date', 'rule:on-day'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt:
      'Mary Shelley writes: “We quitted London on the 27th of March, and remained a few days at Windsor, rambling in its beautiful forest.” How do you say the date?',
    options: [
      'the twenty-seventh of March',
      'the twenty-seven of March',
      'the seventeenth of March',
      'the seventh of March',
    ],
    answer: 'the twenty-seventh of March',
    note: 'Mary Shelley, Frankenstein (1818), chapter 19',
    facts: ['rule:ordinal-date', 'rule:on-day'],
  },

  // Tier 2: spelling in a sentence. The sentence decides between words that
  // sound alike (weather, whether), and the other wrong spellings are ones
  // learners write. Where a sentence shows a rule another question tests
  // ("at the weekend"), it carries that rule as a fact.
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'I write my plans for each day in my ___.',
    options: ['diary', 'dairy', 'diery'],
    answer: 'diary',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'What is the ___ like in winter?',
    options: ['weather', 'whether', 'wheather'],
    answer: 'weather',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'Our trip is at the ___ of June.',
    options: ['beginning', 'begining', 'beggining'],
    answer: 'beginning',
    facts: ['rule:at-start-end'],
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'Good ___. Sleep well.',
    options: ['night', 'knight', 'nite'],
    answer: 'night',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: "It is my sister's ___ today.",
    options: ['birthday', 'birtday', 'berthday'],
    answer: 'birthday',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: "We don't go to school at the ___.",
    options: ['weekend', 'weakend', 'wekend'],
    answer: 'weekend',
    facts: ['rule:weekend'],
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'There are twelve ___ in a year.',
    options: ['months', 'monthes', 'mounths', 'munths'],
    answer: 'months',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'I was ill for the ___ week.',
    options: ['whole', 'hole', 'wole'],
    answer: 'whole',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'Today is the ___ of May.',
    options: ['third', 'therd', 'thrid'],
    answer: 'third',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'Is it the ___ of June today?',
    options: ['fifth', 'fivth', 'fith'],
    answer: 'fifth',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'The ___ of July is a Sunday this year.',
    options: ['twelfth', 'twelth', 'twelveth'],
    answer: 'twelfth',
  },
  {
    subtype: 'spelling-in-sentence',
    tier: 2,
    prompt: 'Is the ___ of October a school day?',
    options: ['ninth', 'nineth', 'ninith'],
    answer: 'ninth',
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 21 June?',
    options: [
      'the twenty-first of June',
      'the twenty-one of June',
      'the twelfth of June',
      'the twenty-first of July',
    ],
    answer: 'the twenty-first of June',
    facts: ['rule:ordinal-date'],
  },
  {
    subtype: 'saying-dates',
    tier: 2,
    prompt: 'How do you say 3 January?',
    options: [
      'the third of January',
      'the three of January',
      'the thirteenth of January',
      'the thirtieth of January',
    ],
    answer: 'the third of January',
    facts: ['rule:ordinal-date'],
  },

  // Tier 2: when? Words that count from today (the day after tomorrow, last
  // month, three days ago), how often (weekly, monthly), and the greeting for
  // a time of day. Each counts from a day or month the question gives.
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'Today is Friday. What day is the day after tomorrow?',
    options: ['Sunday', 'Saturday', 'Monday', 'Thursday'],
    answer: 'Sunday',
    facts: ['rule:relative-day'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'Today is Thursday. What day was the day before yesterday?',
    options: ['Tuesday', 'Wednesday', 'Monday', 'Saturday'],
    answer: 'Tuesday',
    facts: ['rule:relative-day'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'It is March now. What was last month?',
    options: ['February', 'April', 'January', 'December'],
    answer: 'February',
    facts: ['rule:relative-month'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'It is October now. Which month is the month after next?',
    options: ['December', 'November', 'January', 'September'],
    answer: 'December',
    facts: ['rule:relative-month'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: "In British English, 'a fortnight' is ___.",
    options: ['two weeks', 'four days', 'four weeks', 'fourteen weeks'],
    answer: 'two weeks',
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'A magazine comes out twelve times a year. It is a ___ magazine.',
    options: ['monthly', 'weekly', 'yearly', 'fortnightly'],
    answer: 'monthly',
    facts: ['set:how-often'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'We have a spelling test every Friday. It is a ___ test.',
    options: ['weekly', 'daily', 'monthly', 'yearly'],
    answer: 'weekly',
    facts: ['set:how-often'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: "You arrive at a friend's house at 7 pm. What do you say?",
    options: ['Good evening.', 'Good night.', 'Good afternoon.', 'Good morning.'],
    answer: 'Good evening.',
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: "It is Monday morning. Sam says, 'I'm going to the cinema tonight.' When is he going?",
    options: ['Monday evening', 'Sunday evening', 'Tuesday evening', 'Monday morning'],
    answer: 'Monday evening',
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'Today is Wednesday 10 June. On a UK calendar, when does next week start?',
    options: ['Monday 15 June', 'Thursday 11 June', 'Monday 8 June', 'Sunday 14 June'],
    answer: 'Monday 15 June',
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: "It is Tuesday. Sara says: 'I saw Omar yesterday.' Which day did she see him?",
    options: ['Monday', 'Wednesday', 'Sunday'],
    answer: 'Monday',
    facts: ['rule:relative-day'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'It is May. Which month was the month before last?',
    options: ['March', 'April', 'February', 'June'],
    answer: 'March',
    facts: ['rule:relative-month'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: 'Today is Sunday. Which day was three days ago?',
    options: ['Thursday', 'Wednesday', 'Friday', 'Tuesday'],
    answer: 'Thursday',
    facts: ['rule:relative-day', 'rule:ago'],
  },
  {
    subtype: 'time-words',
    tier: 2,
    prompt: "In the UK, what is 'half term'?",
    options: [
      'a short holiday in the middle of a term',
      'a day when school finishes at lunchtime',
      'the end of the school year',
      'a test halfway through the year',
    ],
    answer: 'a short holiday in the middle of a term',
  },

  // Tier 2: more calendar words, each asked by what it means.
  {
    subtype: 'calendar-word',
    tier: 2,
    prompt: "Your American friend says 'fall'. What do people in the UK usually call this season?",
    options: ['autumn', 'spring', 'winter', 'summer'],
    answer: 'autumn',
  },
  {
    subtype: 'calendar-word',
    tier: 2,
    prompt: "What is a 'leap year'?",
    options: ['a year with 366 days', 'a year with 365 days', 'a year with 13 months'],
    answer: 'a year with 366 days',
  },
  {
    subtype: 'calendar-word',
    tier: 2,
    prompt: 'What do we call 31 December, the last day of the year?',
    options: ["New Year's Eve", "New Year's Day", 'Christmas Eve', 'Boxing Day'],
    answer: "New Year's Eve",
  },
  {
    subtype: 'calendar-word',
    tier: 2,
    prompt: "Your school letter says the trip is 'midweek'. Which day is it most likely to be?",
    options: ['Wednesday', 'Monday', 'Saturday', 'Friday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'calendar-word',
    tier: 2,
    prompt: "Which word means 'ten years'?",
    options: ['decade', 'century', 'fortnight', 'dozen'],
    answer: 'decade',
  },

  // Tier 2: short forms in use, on a planner, a sign and a timetable. A
  // short form names its day or month in `facts`, which see full names only.
  {
    subtype: 'short-form',
    tier: 2,
    prompt: "Your planner says 'Tues 3 Mar'. When is it?",
    options: [
      'Tuesday the third of March',
      'Thursday the third of March',
      'Tuesday the third of May',
      'Tuesday the thirtieth of March',
    ],
    answer: 'Tuesday the third of March',
    facts: ['pair:tue-thu', 'rule:ordinal-date'],
  },
  {
    subtype: 'short-form',
    tier: 2,
    prompt: "A café sign says 'Open Mon to Fri'. On which day is it closed?",
    options: ['Saturday', 'Monday', 'Wednesday', 'Friday'],
    answer: 'Saturday',
    facts: ['name:monday', 'name:friday'],
  },
  {
    subtype: 'short-form',
    tier: 2,
    prompt: "A UK calendar shows the days as M, T, W, T, F, S, S. Which day is the second 'T'?",
    options: ['Thursday', 'Tuesday', 'Wednesday', 'Friday'],
    answer: 'Thursday',
    facts: ['pair:tue-thu'],
  },
  {
    subtype: 'short-form',
    tier: 2,
    prompt: "A bus timetable says 'Sat & Sun only'. When does the bus run?",
    options: ['at the weekend', 'on weekdays', 'every day', 'on Saturdays only'],
    answer: 'at the weekend',
    facts: ['rule:weekend', 'set:weekday', 'name:saturday', 'name:sunday'],
  },

  // Tier 3: time phrases in a sentence. Since, for and ago; by and until;
  // during and while; and the tense a time phrase asks for. Each wrong option
  // is the mistake learners make, often carried over from their own language
  // (French "depuis", Spanish "desde" and "durante").
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'I have lived in Bristol ___ March.',
    options: ['since', 'for', 'ago', 'during'],
    answer: 'since',
    facts: ['rule:since'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'She has been at this school ___ six months.',
    options: ['for', 'since', 'ago'],
    answer: 'for',
    facts: ['rule:for'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'We moved here two years ___.',
    options: ['ago', 'since', 'for'],
    answer: 'ago',
    facts: ['rule:ago'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'We have known each other ___ we were five.',
    options: ['since', 'for', 'from', 'during'],
    answer: 'since',
    facts: ['rule:since'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'The festival lasts ___ three days.',
    options: ['for', 'during', 'since'],
    answer: 'for',
    facts: ['rule:for', 'rule:during'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: "I haven't seen my cousin ___ last summer.",
    options: ['since', 'for', 'from', 'during'],
    answer: 'since',
    facts: ['rule:since'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'You must hand in your project ___ Friday.',
    options: ['by', 'until', 'since'],
    answer: 'by',
    facts: ['rule:by-until'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'Builders are working in the shop. It stays closed ___ Monday.',
    options: ['until', 'by', 'since'],
    answer: 'until',
    facts: ['rule:by-until'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'We stayed with my aunt ___ the summer holidays.',
    options: ['during', 'while', 'since'],
    answer: 'during',
    facts: ['rule:during'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'My phone rang ___ the film.',
    options: ['during', 'while', 'for'],
    answer: 'during',
    facts: ['rule:during'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'The library is open ___ Monday ___ Friday.',
    options: ['from … to', 'since … to', 'between … to'],
    answer: 'from … to',
    facts: ['rule:from-to'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'The pool is closed now. It opens again ___ two weeks.',
    options: ['in', 'since', 'ago'],
    answer: 'in',
    facts: ['rule:in-future'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'Last weekend we ___ my cousins in Leeds.',
    options: ['visited', 'have visited', 'visit', 'are visiting'],
    answer: 'visited',
    facts: ['rule:past-time'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'I ___ to the dentist two weeks ago.',
    options: ['went', 'have gone', 'go', 'have been'],
    answer: 'went',
    facts: ['rule:past-time', 'rule:ago'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'We ___ here since 2019.',
    options: ['have lived', 'live', 'lived', 'are living'],
    answer: 'have lived',
    facts: ['rule:since', 'rule:present-perfect'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'Next summer my family ___ to Pakistan.',
    options: ['is going to travel', 'travelled', 'has travelled', 'has been travelling'],
    answer: 'is going to travel',
    facts: ['rule:future-plan'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'I usually ___ my grandparents on Sundays.',
    options: ['visit', 'am visiting', 'visited', 'have visited'],
    answer: 'visit',
    facts: ['rule:habit'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'What ___ you do last Saturday?',
    options: ['did', 'do', 'have', 'are'],
    answer: 'did',
    facts: ['rule:past-time'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'The concert is ___ the evening of 14 March.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day', 'rule:part-of-day'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'We had a picnic ___ a hot day in July.',
    options: ['on', 'in', 'at'],
    answer: 'on',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'You want to see your friend again soon. Which sentence is right?',
    options: [
      "Let's meet next Friday.",
      "Let's meet on next Friday.",
      "Let's meet in next Friday.",
      "Let's meet at next Friday.",
    ],
    answer: "Let's meet next Friday.",
    facts: ['rule:no-prep'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'When I was a child, we ___ go to the beach every summer.',
    options: ['used to', 'use to', 'were used to', 'have used to'],
    answer: 'used to',
    facts: ['rule:used-to'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: "It hasn't rained ___ weeks.",
    options: ['for', 'since', 'ago'],
    answer: 'for',
    facts: ['rule:for'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'My parents ___ in 2005.',
    options: ['got married', 'have got married', 'get married', 'are getting married'],
    answer: 'got married',
    facts: ['rule:past-time'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'I first met Jo ___ 2018, and we have been friends ever since.',
    options: ['in', 'since', 'for'],
    answer: 'in',
    facts: ['rule:in-period', 'rule:since'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'My brother ___ for four years, but now he works in a bank.',
    options: ['was a student', 'has been a student', 'is a student', 'is being a student'],
    answer: 'was a student',
    facts: ['rule:for', 'rule:past-time'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: 'By the time we arrived at the cinema, the film ___.',
    options: ['had started', 'has started', 'starts', 'is starting'],
    answer: 'had started',
    facts: ['rule:past-perfect'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: "I've been waiting here ___ ages.",
    options: ['for', 'since', 'ago'],
    answer: 'for',
    facts: ['rule:for'],
  },
  {
    subtype: 'time-phrase',
    tier: 3,
    prompt: "We've had this car ___ 2015.",
    options: ['since', 'for', 'ago', 'from'],
    answer: 'since',
    facts: ['rule:since'],
  },

  // Tier 3: a turn in a conversation. The wrong replies are real replies to a
  // different question ("It's Tuesday" answers "What day is it?", not "What's
  // the date?"; "Two weeks ago" answers "When?", not "How long?"), or the
  // right reply with the wrong little word or tense.
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: "Ana: What's the date today?\nBen: ___",
    options: ["It's the twelfth.", "It's Tuesday.", "It's March.", "It's twelve o'clock."],
    answer: "It's the twelfth.",
    facts: ['rule:day-date'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Leo: What day is it today?\nMia: ___',
    options: ["It's Thursday.", "It's the third.", "It's June.", "It's three o'clock."],
    answer: "It's Thursday.",
    facts: ['rule:day-date'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Sam: When is your birthday?\nAisha: ___',
    options: [
      "It's on the second of May.",
      "It's in the second of May.",
      "It's at the second of May.",
      "It's on May the two.",
    ],
    answer: "It's on the second of May.",
    facts: ['rule:on-day'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Grandad: How long are you staying in London?\nZara: ___',
    options: ['For a fortnight.', 'Since a fortnight.', 'A fortnight ago.', 'In a fortnight.'],
    answer: 'For a fortnight.',
    facts: ['rule:for', 'rule:how-long'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Teacher: When did you start learning English?\nOmar: ___',
    options: ['Two years ago.', 'For two years.', 'Since two years.', 'In two years.'],
    answer: 'Two years ago.',
    facts: ['rule:ago', 'rule:how-long'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Nadia: How long have you lived here?\nTom: ___',
    options: ['For three years.', 'Since three years.', 'Three years ago.', 'In three years.'],
    answer: 'For three years.',
    facts: ['rule:for', 'rule:how-long'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Priya: Is the exam in May or in June?\nJack: ___',
    options: [
      "It's in June, on the tenth.",
      "It's on June, in the tenth.",
      "It's in June, in the tenth.",
      "It's at June, on the tenth.",
    ],
    answer: "It's in June, on the tenth.",
    facts: ['rule:in-period', 'rule:on-day'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Ella: How often do you go swimming?\nFinn: ___',
    options: ['Twice a week.', 'For two weeks.', 'Two weeks ago.', 'In two weeks.'],
    answer: 'Twice a week.',
    facts: ['rule:how-often'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Kai: When did you go to Spain?\nLina: ___',
    options: ['Last summer.', 'Next summer.', 'Since summer.', 'For the summer.'],
    answer: 'Last summer.',
    facts: ['rule:last-next'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Dad: When does the new term start?\nAmira: ___',
    options: [
      'On Monday the fourth.',
      'In Monday the fourth.',
      'At Monday the fourth.',
      'On Monday the four.',
    ],
    answer: 'On Monday the fourth.',
    facts: ['rule:on-day'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt:
      'Ali: Is your sister older than you?\nSofia: Yes. She was born ___ 2008, and I was born ___ 2011.',
    options: ['in … in', 'on … on', 'in … on', 'at … in'],
    answer: 'in … in',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Ben: How long is the summer holiday?\nMum: ___',
    options: ['About six weeks.', 'Since six weeks.', 'Six weeks ago.', 'In six weeks.'],
    answer: 'About six weeks.',
    facts: ['rule:how-long'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: "Rosa: When's the party?\nJamal: It's ___ Saturday, ___ the evening.",
    options: ['on … in', 'in … on', 'on … at', 'at … in'],
    answer: 'on … in',
    facts: ['rule:on-day', 'rule:part-of-day'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: "Max: Shall we go to the park today?\nEva: Not today. Let's go ___.",
    options: ['tomorrow', 'yesterday', 'last week', 'the day before'],
    answer: 'tomorrow',
    facts: ['set:yesterday-tomorrow'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Mrs Jones: Have you finished your homework?\nKofi: Yes, I finished it ___.',
    options: ['yesterday', 'tomorrow', 'next week', 'since Monday'],
    answer: 'yesterday',
    facts: ['rule:past-time', 'set:yesterday-tomorrow'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Lucy: How was your weekend?\nRaj: ___',
    options: [
      'It was great, thanks.',
      'It is great, thanks.',
      'It will be great, thanks.',
      'It was being great, thanks.',
    ],
    answer: 'It was great, thanks.',
    facts: ['rule:past-time'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Teacher: When did you arrive in the UK?\nYusuf: ___',
    options: ['In 2022.', 'Since 2022.', 'For 2022.', 'On 2022.'],
    answer: 'In 2022.',
    facts: ['rule:in-period'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Hassan: How long have you been learning the guitar?\nChloe: ___',
    options: ['Since last summer.', 'For last summer.', 'In last summer.', 'During last summer.'],
    answer: 'Since last summer.',
    facts: ['rule:since', 'rule:how-long'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Noor: Are you doing anything this weekend?\nIvan: ___',
    options: [
      "Yes, I'm visiting my grandma on Sunday.",
      'Yes, I visited my grandma on Sunday.',
      "Yes, I've visited my grandma on Sunday.",
      'Yes, I visit my grandma since Sunday.',
    ],
    answer: "Yes, I'm visiting my grandma on Sunday.",
    facts: ['rule:future-plan'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Ivy: When did you last see Amir?\nNoah: ___',
    options: [
      'The day before yesterday.',
      'The day after tomorrow.',
      'Since the day before yesterday.',
      'In the day before yesterday.',
    ],
    answer: 'The day before yesterday.',
    facts: ['rule:relative-day', 'set:yesterday-tomorrow'],
  },
  {
    subtype: 'dialogue',
    tier: 3,
    prompt: 'Mr Ali: What did you do in the summer holidays?\nGrace: ___',
    options: [
      'We went camping in Wales.',
      'We go camping in Wales.',
      'We have gone camping in Wales.',
      'We will go camping in Wales.',
    ],
    answer: 'We went camping in Wales.',
    facts: ['rule:past-time'],
  },

  // Tier 3: reading. A notice, a letter, a form or a message to act on; a
  // short text with two gaps; British ways of saying when ("a week today",
  // "every other week", a bank holiday); and six real lines from novels out of
  // UK copyright, copied exactly from src/data/full-texts, each named in
  // `note`. Where a notice names a day by its short form or implies it (the
  // weekend), `facts` name the day.
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Charlotte Brontë writes: “Five o’clock had hardly struck ___ the morning of the 19th of January, when Bessie brought a candle into my closet…” Which word fills the gap?',
    options: ['on', 'in', 'at'],
    answer: 'on',
    note: 'Charlotte Brontë, Jane Eyre (1847), chapter 5',
    facts: ['rule:on-day', 'rule:part-of-day'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Mary Shelley writes: “___ Monday (July 31st), we were nearly surrounded by ice…” The writer means the Monday just gone. What fills the gap?',
    options: ['Last', 'On last', 'In last'],
    answer: 'Last',
    note: 'Mary Shelley, Frankenstein (1818), Letter IV',
    facts: ['rule:no-prep'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'In Animal Farm, two farmers pretend to laugh at the animals’ rebellion. George Orwell writes: “The whole thing would be over in a fortnight, they said.” What do the farmers mean?',
    options: [
      'It would end within two weeks.',
      'It would start in two weeks.',
      'It had ended two weeks before.',
      'It would happen every two weeks.',
    ],
    answer: 'It would end within two weeks.',
    note: 'George Orwell, Animal Farm (1945), chapter 4',
    facts: ['rule:in-future'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'In Pride and Prejudice, Mr Bennet says: “About a month ago I received this letter, and about a fortnight ago I answered it…” When did he answer the letter?',
    options: [
      'two weeks before he speaks',
      'a month before he speaks',
      'two weeks after he speaks',
      'every two weeks for a month',
    ],
    answer: 'two weeks before he speaks',
    note: 'Jane Austen, Pride and Prejudice (1813), chapter 13',
    facts: ['rule:ago'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'In Pride and Prejudice, Elizabeth says of her sister Jane and Mr Bingley: “She has known him only a fortnight.” What does Elizabeth mean?',
    options: [
      'Jane has not known him long enough to be sure.',
      'Jane has known him well for a very long time.',
      'Jane is going to meet him in two weeks.',
      'Jane has known him for two months.',
    ],
    answer: 'Jane has not known him long enough to be sure.',
    note: 'Jane Austen, Pride and Prejudice (1813), chapter 6',
    facts: ['rule:how-long'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'In Jane Eyre, St John Rivers tells Jane: “…I shall return from Cambridge in a fortnight…” When will he come back?',
    options: ['two weeks from now', 'two weeks before now', 'for two weeks', 'every two weeks'],
    answer: 'two weeks from now',
    note: 'Charlotte Brontë, Jane Eyre (1847), chapter 35',
    facts: ['rule:in-future'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A library notice says: “Closed at the weekend and on Mondays.” On which day can you visit?',
    options: ['Thursday', 'Monday', 'Saturday', 'Sunday'],
    answer: 'Thursday',
    facts: ['rule:weekend', 'set:weekday', 'name:saturday', 'name:sunday'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Today is Monday 3 June. Your teacher says the school trip is “a week today”. When is the trip?',
    options: ['Monday 10 June', 'Tuesday 4 June', 'Monday 1 July', 'Monday 17 June'],
    answer: 'Monday 10 June',
    facts: ['rule:week-today'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Today is Wednesday 4 March. Ella says, “My exam is a week tomorrow.” When is her exam?',
    options: ['Thursday 12 March', 'Thursday 5 March', 'Wednesday 11 March', 'Friday 13 March'],
    answer: 'Thursday 12 March',
    facts: ['rule:week-today'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt: 'Your teacher says, “I saw your mum the other day.” When did she see her?',
    options: ['a few days ago', 'the next day', 'some day soon', 'every other day'],
    answer: 'a few days ago',
    facts: ['rule:other-day'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A school letter says: “Monday is a bank holiday, so the school will be closed.” Counting the weekend, how many days in a row will pupils be at home?',
    options: ['3 days', '2 days', '4 days'],
    answer: '3 days',
    facts: ['rule:bank-holiday', 'name:saturday', 'name:sunday'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt: 'Lena says, “My aunt visits us every other week.” How often does she come?',
    options: [
      'once every two weeks',
      'twice every week',
      'every week but one',
      'two times a fortnight',
    ],
    answer: 'once every two weeks',
    facts: ['rule:every-other'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt: 'A sign at a swimming pool says: “Open all year round.” When can you swim there?',
    options: ['in every season', 'only in the summer', 'once every year', 'for one whole year'],
    answer: 'in every season',
    facts: ['rule:all-year'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt: 'Your school has an annual sports day. How often is it?',
    options: ['once a year', 'once a month', 'every day', 'twice a year'],
    answer: 'once a year',
    facts: ['rule:annual'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A UK form asks for your date of birth as DD/MM/YYYY. You were born on 7 August 2012. What do you write?',
    options: ['07/08/2012', '08/07/2012', '2012/08/07', '07/08/12'],
    answer: '07/08/2012',
    facts: ['rule:uk-order'],
  },
  {
    subtype: 'short-text',
    tier: 2,
    prompt: "Ms Shah's letter says: “Parents' evening is on 11/03.” When is it?",
    options: ['11 March', '3 November', '11 May', '3 March'],
    answer: '11 March',
    facts: ['rule:uk-order'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Ali writes: “I was born ___ 2010, ___ a cold Tuesday in January.” Which words fill the gaps?',
    options: ['in … on', 'on … in', 'in … in', 'at … on'],
    answer: 'in … on',
    facts: ['rule:in-period', 'rule:on-day'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      "A club notice says: “We meet ___ Wednesday evenings ___ seven o'clock.” Which words fill the gaps?",
    options: ['on … at', 'in … at', 'on … in', 'at … on'],
    answer: 'on … at',
    facts: ['rule:on-day', 'rule:part-of-day', 'rule:at-time'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Mia writes in her diary: “We got home ___ midnight, so I stayed in bed ___ the morning.” Which words fill the gaps?',
    options: ['at … in', 'in … at', 'on … in', 'at … on'],
    answer: 'at … in',
    facts: ['rule:at-time', 'rule:part-of-day'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      "An email says: “I've worked here ___ two years. I started ___ June 2023.” Which words fill the gaps?",
    options: ['for … in', 'since … in', 'for … on', 'since … on'],
    answer: 'for … in',
    facts: ['rule:for', 'rule:in-period'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A text message says: “The match was ___ Saturday. We won, and the next one is ___ two weeks.” Which words fill the gaps?',
    options: ['on … in', 'in … on', 'on … since', 'at … for'],
    answer: 'on … in',
    facts: ['rule:on-day', 'rule:in-future'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A note on the fridge says: “Dentist: the day after tomorrow, 10 am.” Today is Tuesday. When is the dentist?',
    options: ['Thursday', 'Wednesday', 'Friday', 'Saturday'],
    answer: 'Thursday',
    facts: ['rule:relative-day'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A sign at the pool says: “Swimming lessons every Tuesday and Thursday, except in August.” Which of these days has a lesson?',
    options: ['a Tuesday in May', 'a Thursday in August', 'a Monday in May', 'a Saturday in March'],
    answer: 'a Tuesday in May',
    facts: ['rule:except'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      "Leo writes: “I ___ to Spain last summer, and next summer I'm going to Italy.” Which word fills the gap?",
    options: ['went', 'go', 'have gone', 'am going'],
    answer: 'went',
    facts: ['rule:past-time'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A calendar note says: “Book club: the first Monday of every month.” Which date could it be?',
    options: ['Monday 2 March', 'Monday 9 March', 'Sunday 1 March', 'Monday 30 March'],
    answer: 'Monday 2 March',
    facts: ['rule:first-of-month'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'Today is Friday 6 May. Your friend says, “See you in a fortnight.” When will you see her?',
    options: ['Friday 20 May', 'Friday 13 May', 'Friday 3 June', 'Saturday 7 May'],
    answer: 'Friday 20 May',
    facts: ['rule:in-future'],
  },
  {
    subtype: 'short-text',
    tier: 2,
    prompt: 'Frankenstein begins with a letter dated “Dec. 11th”. How do you say this date?',
    options: ['the eleventh of December', 'the eleven of December', 'the first of December'],
    answer: 'the eleventh of December',
    note: 'Mary Shelley, Frankenstein (1818), Letter I',
    facts: ['rule:ordinal-date', 'name:december'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A school letter says: “Term ends on Friday 21 July. The new term begins on Monday 4 September.” Which sentence is true?',
    options: [
      'The holiday is about six weeks long.',
      'The new term begins on a Friday.',
      'Term ends in the middle of the week.',
      'The holiday is shorter than a fortnight.',
    ],
    answer: 'The holiday is about six weeks long.',
    facts: ['rule:holiday-length'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt: 'Today is 30 May. Kim says, “I wrote to the council on 2 May.” When did she write?',
    options: ['four weeks ago', 'in four weeks', 'for four weeks', 'four weeks later'],
    answer: 'four weeks ago',
    facts: ['rule:ago'],
  },
  {
    subtype: 'short-text',
    tier: 3,
    prompt:
      'A sign says: “No parking Mon to Sat, 8 am to 6 pm.” On which day can you park here all day?',
    options: ['Sunday', 'Saturday', 'Monday', 'Friday'],
    answer: 'Sunday',
    facts: ['name:monday', 'name:saturday'],
  },
]

/** The days and months, which take a capital letter, and the seasons, which do not. */
const DAY_OR_MONTH =
  /\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|January|February|March|April|May|June|July|August|September|October|November|December)s?\b/g
const SEASON = /\b(spring|summer|autumn|winter)\b/gi

/** The days, months and seasons a question names, in its prompt or its answer. */
export function namesOf(q: Question): string[] {
  const text = `${q.prompt} ${q.answer}`
  const names = [...text.matchAll(DAY_OR_MONTH), ...text.matchAll(SEASON)].map((m) =>
    m[1].toLowerCase(),
  )
  return [...new Set(names)]
}

export const BANK: GameBank<Question> = {
  slug: 'days-months-seasons',
  items: QUESTION_BANK,
  // Every prompt is different except the spelling questions' "Which is the
  // correct spelling?", which the word asked about tells apart.
  key: (q) => (q.subtype === 'spelling-choice' ? `${q.prompt} ${q.answer}` : q.prompt),
  answer: (q) => q.answer,
  // The page deals the options in a new order each time; the options are fixed.
  options: (q) => q.options,
  tag: (q) => q.subtype,
  tier: (q) => q.tier,
  // Two questions that name the same day, month or season are never dealt in
  // one round, nor two that test the same rule: an explanation names only the
  // days, months and seasons its own question names, so nothing one shows can
  // answer another in the round.
  facts: (q) => [...namesOf(q).map((n) => `name:${n}`), ...(q.facts ?? [])],
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
