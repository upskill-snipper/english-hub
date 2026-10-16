import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Capital Letter Quest: four versions of one sentence, and the student chooses
 * the one with capital letters in all the right places. Every question has the
 * same stem ("Which sentence is written correctly?"), and the page shuffles
 * the four sentences for each attempt and marks the sentence itself.
 *
 * Moved out of src/app/games/capital-letter-quest/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). Two
 * questions offered two versions a careful writer could defend, and marked the
 * more usual one wrong:
 *
 *   - The Thames. "The river Thames is long." was the answer and "The River
 *     Thames is long." was marked wrong. Both are found in print, but "River
 *     Thames" is the usual form (the river is titled so in guidebooks and by
 *     the River Thames Society, and this bank writes "Oxford Street" with a
 *     capital S in another question), so a student who knew the name was
 *     marked wrong. "The River Thames is long." is now the answer, and the
 *     option that was the answer is now "the River Thames is long.", wrong at
 *     the start of the sentence. Its one-line rule now says that the word
 *     River is part of the name.
 *   - Chinese New Year. "The Chinese new year is fun." was the answer and "The
 *     Chinese New Year is fun." was marked wrong. The festival's name is
 *     capitalised in dictionaries (Oxford Advanced Learner's Dictionary lists
 *     "Chinese New Year"), as Christmas is in a later question. "The Chinese
 *     New Year is fun." is now the answer, and the option that was the answer
 *     is now "the Chinese New Year is fun.", wrong at the start of the
 *     sentence. Its one-line rule now names both: nationality adjectives and
 *     festival names.
 *
 * The other 58 questions are unchanged. Each keeps the one-line rule it was
 * written with; the page no longer shows it, because the explanation says
 * more. The rule also names the question's kind when an answer is recorded.
 */

export interface CapitalQuestion {
  /** The four sentence options shown to the learner */
  options: [string, string, string, string]
  /** Index (0-3) of the correctly capitalised sentence */
  answerIndex: number
  /** The capitalisation rule being tested (the earlier one-line rule; the explanation replaced it on the page) */
  ruleTested: string
}

export const QUESTION_BANK: CapitalQuestion[] = [
  // ── Sentence start ──────────────────────────────────────────────────────────
  {
    options: [
      'the dog is asleep.',
      'The dog is asleep.',
      'the Dog is asleep.',
      'The Dog Is Asleep.',
    ],
    answerIndex: 1,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: [
      'we walk to school.',
      'we Walk to school.',
      'We walk to school.',
      'We Walk To School.',
    ],
    answerIndex: 2,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: [
      'it is raining today.',
      'It is raining today.',
      'it is Raining today.',
      'It Is Raining Today.',
    ],
    answerIndex: 1,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: ['she likes tea.', 'She likes tea.', 'she Likes tea.', 'she likes Tea.'],
    answerIndex: 1,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: ['my book is new.', 'my Book is new.', 'My book is new.', 'My Book Is New.'],
    answerIndex: 2,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: [
      'where do you live?',
      'Where do you live?',
      'where do You live?',
      'Where Do You Live?',
    ],
    answerIndex: 1,
    ruleTested: 'A question still begins with a capital letter.',
  },
  // ── The pronoun "I" ─────────────────────────────────────────────────────────
  {
    options: [
      'Yesterday i was tired.',
      'yesterday I was tired.',
      'Yesterday I was tired.',
      'Yesterday I Was Tired.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: [
      'my friend and i play football.',
      'My friend and i play football.',
      'My friend and I play football.',
      'My Friend And I Play Football.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: ['can i help you?', 'Can i help you?', 'Can I help you?', 'Can I Help You?'],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: [
      'i think i am right.',
      'I think i am right.',
      'i think I am right.',
      'I think I am right.',
    ],
    answerIndex: 3,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: [
      'tomorrow i will visit her.',
      'Tomorrow i will visit her.',
      'Tomorrow I will visit her.',
      'Tomorrow I Will Visit Her.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  // ── Names of people ─────────────────────────────────────────────────────────
  {
    options: ['my name is sara.', 'My name is sara.', 'My name is Sara.', 'My Name Is Sara.'],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'ahmed is my brother.',
      'Ahmed is my brother.',
      'ahmed is my Brother.',
      'Ahmed Is My Brother.',
    ],
    answerIndex: 1,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: ['this is mr brown.', 'This is mr brown.', 'This is Mr Brown.', 'This Is Mr Brown.'],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'i sat next to maria and tom.',
      'I sat next to maria and tom.',
      'I sat next to Maria and Tom.',
      'I Sat Next To Maria And Tom.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'have you met lucy?',
      'Have you met lucy?',
      'Have you met Lucy?',
      'Have You Met Lucy?',
    ],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'my teacher is mrs khan.',
      'My teacher is mrs khan.',
      'My teacher is Mrs Khan.',
      'My Teacher Is Mrs Khan.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles and names of people start with a capital letter.',
  },
  // ── Places (cities, countries) ──────────────────────────────────────────────
  {
    options: ['i live in london.', 'I live in london.', 'I live in London.', 'I Live In London.'],
    answerIndex: 2,
    ruleTested: 'Names of places start with a capital letter.',
  },
  {
    options: [
      'she is from spain.',
      'She is from spain.',
      'She is from Spain.',
      'She Is From Spain.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of countries start with a capital letter.',
  },
  {
    options: [
      'we visited paris in june.',
      'We visited paris in june.',
      'We visited Paris in June.',
      'We visited Paris in june.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of places and months start with a capital letter.',
  },
  {
    options: [
      'the river thames is long.',
      'The river thames is long.',
      'The River Thames is long.',
      'the River Thames is long.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of rivers, including the word River, start with capital letters.',
  },
  {
    options: [
      'my school is in manchester.',
      'My school is in manchester.',
      'My school is in Manchester.',
      'My School Is In Manchester.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of cities start with a capital letter.',
  },
  {
    options: [
      'they moved to scotland.',
      'They moved to scotland.',
      'They moved to Scotland.',
      'They Moved To Scotland.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of countries start with a capital letter.',
  },
  {
    options: [
      'oxford street is busy.',
      'Oxford street is busy.',
      'Oxford Street is busy.',
      'oxford Street is busy.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of streets start with a capital letter.',
  },
  // ── Days of the week ────────────────────────────────────────────────────────
  {
    options: [
      'we have a test on monday.',
      'We have a test on monday.',
      'We have a test on Monday.',
      'We Have A Test On Monday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'see you on friday.',
      'See you on friday.',
      'See you on Friday.',
      'See You On Friday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'the shop is closed on sunday.',
      'The shop is closed on sunday.',
      'The shop is closed on Sunday.',
      'The Shop Is Closed On Sunday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'i play tennis every saturday.',
      'I play tennis every saturday.',
      'I play tennis every Saturday.',
      'I Play Tennis Every Saturday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'the meeting is on wednesday.',
      'The meeting is on wednesday.',
      'The meeting is on Wednesday.',
      'The meeting is on wednesday',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  // ── Months of the year ──────────────────────────────────────────────────────
  {
    options: [
      'my birthday is in march.',
      'My birthday is in march.',
      'My birthday is in March.',
      'My Birthday Is In March.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'school ends in july.',
      'School ends in july.',
      'School ends in July.',
      'School Ends In July.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'it snows in december.',
      'It snows in december.',
      'It snows in December.',
      'It Snows In December.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'we travel in august.',
      'We travel in august.',
      'We travel in August.',
      'We Travel In August.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'the term starts in september.',
      'The term starts in september.',
      'The term starts in September.',
      'The Term Starts In September.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  // ── Languages and nationalities ─────────────────────────────────────────────
  {
    options: [
      'i am learning english.',
      'I am learning english.',
      'I am learning English.',
      'I Am Learning English.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of languages start with a capital letter.',
  },
  {
    options: [
      'she speaks french and arabic.',
      'She speaks french and arabic.',
      'She speaks French and Arabic.',
      'She Speaks French And Arabic.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of languages start with a capital letter.',
  },
  {
    options: ['he is italian.', 'He is italian.', 'He is Italian.', 'He Is Italian.'],
    answerIndex: 2,
    ruleTested: 'Nationalities start with a capital letter.',
  },
  {
    options: [
      'we ate polish food.',
      'We ate polish food.',
      'We ate Polish food.',
      'We Ate Polish Food.',
    ],
    answerIndex: 2,
    ruleTested: 'Nationality adjectives start with a capital letter.',
  },
  {
    options: [
      'my class learns spanish.',
      'My class learns spanish.',
      'My class learns Spanish.',
      'My Class Learns Spanish.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of languages start with a capital letter.',
  },
  {
    options: [
      'the chinese new year is fun.',
      'The chinese new year is fun.',
      'the Chinese New Year is fun.',
      'The Chinese New Year is fun.',
    ],
    answerIndex: 3,
    ruleTested: 'Nationality adjectives and festival names start with capital letters.',
  },
  // ── Titles (Mr, Mrs, Dr, Miss) ──────────────────────────────────────────────
  {
    options: [
      'please call dr smith.',
      'Please call dr smith.',
      'Please call Dr Smith.',
      'Please Call Dr Smith.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Dr start with a capital letter.',
  },
  {
    options: [
      'miss jones is kind.',
      'Miss jones is kind.',
      'Miss Jones is kind.',
      'miss Jones is kind.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Miss start with a capital letter.',
  },
  {
    options: [
      'we wrote to mr patel.',
      'We wrote to mr patel.',
      'We wrote to Mr Patel.',
      'We Wrote To Mr Patel.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Mr start with a capital letter.',
  },
  {
    options: [
      'thank you, mrs evans.',
      'Thank you, mrs evans.',
      'Thank you, Mrs Evans.',
      'Thank You, Mrs Evans.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Mrs start with a capital letter.',
  },
  {
    options: [
      'ask professor lee.',
      'Ask professor lee.',
      'Ask Professor Lee.',
      'ask Professor Lee.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Professor start with a capital letter.',
  },
  // ── Brand and company names ─────────────────────────────────────────────────
  {
    options: [
      'i have a new samsung phone.',
      'I have a new samsung phone.',
      'I have a new Samsung phone.',
      'I Have A New Samsung Phone.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'we drink coca-cola at parties.',
      'We drink coca-cola at parties.',
      'We drink Coca-Cola at parties.',
      'We Drink Coca-Cola At Parties.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'she bought nike trainers.',
      'She bought nike trainers.',
      'She bought Nike trainers.',
      'She Bought Nike Trainers.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'he watched a film on netflix.',
      'He watched a film on netflix.',
      'He watched a film on Netflix.',
      'He Watched A Film On Netflix.',
    ],
    answerIndex: 2,
    ruleTested: 'Company names start with a capital letter.',
  },
  {
    options: [
      'i searched for it on google.',
      'I searched for it on google.',
      'I searched for it on Google.',
      'I Searched For It On Google.',
    ],
    answerIndex: 2,
    ruleTested: 'Company names start with a capital letter.',
  },
  // ── Mixed: several rules in one sentence ────────────────────────────────────
  {
    options: [
      'on monday i fly to france.',
      'On monday i fly to france.',
      'On Monday I fly to France.',
      'On Monday I Fly To France.',
    ],
    answerIndex: 2,
    ruleTested: 'Sentence start, "I", day and country all need capitals.',
  },
  {
    options: [
      'in april sam visits germany.',
      'In april sam visits germany.',
      'In April Sam visits Germany.',
      'In April Sam Visits Germany.',
    ],
    answerIndex: 2,
    ruleTested: 'Month, name and country all need capital letters.',
  },
  {
    options: [
      'i think english is easier than german.',
      'I think english is easier than german.',
      'I think English is easier than German.',
      'I Think English Is Easier Than German.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" and language names need capitals.',
  },
  {
    options: [
      'next friday dr ali leaves for cairo.',
      'Next friday dr ali leaves for cairo.',
      'Next Friday Dr Ali leaves for Cairo.',
      'Next Friday Dr Ali Leaves For Cairo.',
    ],
    answerIndex: 2,
    ruleTested: 'Day, title, name and city all need capital letters.',
  },
  {
    options: [
      'my friend olga speaks russian and english.',
      'My friend olga speaks russian and english.',
      'My friend Olga speaks Russian and English.',
      'My Friend Olga Speaks Russian And English.',
    ],
    answerIndex: 2,
    ruleTested: 'Names and languages start with capital letters.',
  },
  {
    options: [
      'in january we move to canada.',
      'In january we move to canada.',
      'In January we move to Canada.',
      'In January We Move To Canada.',
    ],
    answerIndex: 2,
    ruleTested: 'Month and country names start with capital letters.',
  },
  {
    options: [
      'miss ford and i visit york on sunday.',
      'Miss ford and i visit york on sunday.',
      'Miss Ford and I visit York on Sunday.',
      'Miss Ford And I Visit York On Sunday.',
    ],
    answerIndex: 2,
    ruleTested: 'Title, "I", place and day all need capitals.',
  },
  {
    options: [
      'the toyota is parked outside.',
      'The toyota is parked outside.',
      'The Toyota is parked outside.',
      'The Toyota Is Parked Outside.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'we celebrate christmas in december.',
      'We celebrate christmas in december.',
      'We celebrate Christmas in December.',
      'We Celebrate Christmas In December.',
    ],
    answerIndex: 2,
    ruleTested: 'Festival and month names start with capital letters.',
  },
  {
    options: [
      'do you like the bbc news?',
      'Do you like the bbc news?',
      'Do you like the BBC news?',
      'Do You Like The BBC News?',
    ],
    answerIndex: 2,
    ruleTested: 'Organisation names and initials are capitalised.',
  },
]

/**
 * What each rule is called when an answer is recorded: ten short kinds, not the
 * 32 sentences the rules are written as (a kind has at most 40 characters, and
 * a kind with a handful of answers says more than thirty with one or two).
 */
const TOPIC: Record<string, string> = {
  'A sentence begins with a capital letter.': 'sentence start',
  'A question still begins with a capital letter.': 'sentence start',
  'The pronoun "I" is always a capital letter.': 'the pronoun I',
  'Names of people start with a capital letter.': 'names of people',
  'Titles and names of people start with a capital letter.': 'names of people',
  'Names of places start with a capital letter.': 'places',
  'Names of countries start with a capital letter.': 'places',
  'Names of places and months start with a capital letter.': 'places',
  'Names of rivers, including the word River, start with capital letters.': 'places',
  'Names of cities start with a capital letter.': 'places',
  'Names of streets start with a capital letter.': 'places',
  'Days of the week start with a capital letter.': 'days',
  'Months of the year start with a capital letter.': 'months',
  'Names of languages start with a capital letter.': 'languages and nationalities',
  'Nationalities start with a capital letter.': 'languages and nationalities',
  'Nationality adjectives start with a capital letter.': 'languages and nationalities',
  'Titles like Dr start with a capital letter.': 'titles',
  'Titles like Miss start with a capital letter.': 'titles',
  'Titles like Mr start with a capital letter.': 'titles',
  'Titles like Mrs start with a capital letter.': 'titles',
  'Titles like Professor start with a capital letter.': 'titles',
  'Brand names start with a capital letter.': 'brands and organisations',
  'Company names start with a capital letter.': 'brands and organisations',
  'Organisation names and initials are capitalised.': 'brands and organisations',
  'Nationality adjectives and festival names start with capital letters.': 'several rules',
  'Sentence start, "I", day and country all need capitals.': 'several rules',
  'Month, name and country all need capital letters.': 'several rules',
  'The pronoun "I" and language names need capitals.': 'several rules',
  'Day, title, name and city all need capital letters.': 'several rules',
  'Names and languages start with capital letters.': 'several rules',
  'Month and country names start with capital letters.': 'several rules',
  'Title, "I", place and day all need capitals.': 'several rules',
  'Festival and month names start with capital letters.': 'several rules',
}

export const BANK: GameBank<CapitalQuestion> = {
  slug: 'capital-letter-quest',
  items: QUESTION_BANK,
  // Every question asks the same thing, so a question is named by its right
  // answer, which is one of the four sentences the student sees. No two are alike.
  key: (q) => q.options[q.answerIndex],
  answer: (q) => q.options[q.answerIndex],
  options: (q) => q.options,
  tag: (q) => TOPIC[q.ruleTested] ?? 'capital letters',
}
