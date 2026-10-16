import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Punctuation Repair: pick the version of a broken sentence that is punctuated
 * correctly.
 *
 * Moved out of src/app/games/punctuation-repair/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The game
 * marks one option right. In nine of the 57 questions a second option was also
 * a correct sentence, or the marked answer was not correct, so a student who read
 * closely could be marked wrong:
 *
 *   - "first we mixed the ingredients then we baked the cake": the marked answer,
 *     "First, we mixed the ingredients, then we baked the cake.", joins two
 *     clauses with a comma alone, which is the comma splice that this bank's own
 *     "Comma-splice fixes" section teaches against. It now reads "First, we mixed
 *     the ingredients, and then we baked the cake." and no other option is
 *     correct.
 *   - "the children who were tired fell asleep quickly" offered the sentence with
 *     no commas beside the one with a pair. Both are correct sentences with
 *     different meanings: without commas only the tired children fell asleep,
 *     with them all the children did and all were tired. Dropping the no-comma
 *     option still left a repair that changes the meaning of the sentence it
 *     repairs, so the question now uses a name, "priya who was tired fell asleep
 *     quickly", whose clause can only be extra information. Its options are the
 *     pair of commas and three with a stray, a missing or a misplaced comma.
 *   - "the players changing room was locked" offered "The player's changing room
 *     was locked." beside "The players' changing room was locked." Both are
 *     correct for one player or several. Replaced by "The players's changing room
 *     was locked."
 *   - "look out for that car" offered "Look out for that car." beside "Look out
 *     for that car!". A command may end in a full stop. Replaced by "Look Out For
 *     That Car!".
 *   - "wow that was the best concert ive ever been to" offered the same sentence
 *     ending in a full stop beside the one ending in an exclamation mark. Replaced
 *     by one ending in a question mark.
 *   - "there is one thing i value above all else honesty" offered a comma before
 *     "honesty" beside the colon. A comma there is a defensible apposition.
 *     Replaced by "There is one thing I value: above all else honesty."
 *   - "my favourite subjects are english history and art" offered "English,
 *     History and Art.", which many schools write, and "English history and
 *     art.", which reads as English history and art. Replaced by "My favourite
 *     Subjects are English, history and art." and "My favourite subjects, are
 *     English, history and art."
 *   - "suddenly the lights went out" and "meanwhile the rest of the team kept
 *     practising" each offered the sentence with no comma after the one-word
 *     opener, which many style guides allow. Replaced by "Suddenly, the lights,
 *     went out." and "Meanwhile, the rest of the team kept practising" (no full
 *     stop).
 *
 * Every other option was read against the marked answer and fails on a rule the
 * explanations name. The questions, their order and the right answer's position
 * are otherwise unchanged. The rule for the comma after a longer opening clause
 * ("Because it was raining, ...") is the one this bank teaches and the school
 * curriculum expects, so those questions still offer the version without it.
 *
 * Each question also gained a `topic`, grouping the page's own section headings
 * (the "Mixed" section's questions filed under the skill each tests). It is the
 * tag the student's account records, in place of the long `ruleTested` sentences.
 * `ruleTested` itself is unchanged.
 */

export interface PunctuationItem {
  broken: string
  options: [string, string, string, string]
  answerIndex: number
  ruleTested: string
  /** Which punctuation skill the question belongs to; the tag for the student's account. */
  topic: string
}

export const PUNCTUATION_BANK: PunctuationItem[] = [
  // ── Capital letters & full stops ──────────────────────────────────────────
  {
    broken: 'the dog ran across the field',
    options: [
      'The dog ran across the field.',
      'the dog ran across the field.',
      'The dog ran across the field',
      'The Dog ran across the Field.',
    ],
    answerIndex: 0,
    ruleTested: 'Capital letter to open and full stop to close a sentence',
    topic: 'capital-letters-and-full-stops',
  },
  {
    broken: 'we visited london in july',
    options: [
      'We visited London in July.',
      'We visited london in july.',
      'we visited London in July',
      'We Visited London In July.',
    ],
    answerIndex: 0,
    ruleTested: 'Capital letters for proper nouns',
    topic: 'capital-letters-and-full-stops',
  },
  {
    broken: 'my friend sarah lives in manchester',
    options: [
      'My friend sarah lives in manchester.',
      'My friend Sarah lives in Manchester.',
      'my friend Sarah lives in Manchester.',
      'My Friend Sarah Lives In Manchester.',
    ],
    answerIndex: 1,
    ruleTested: 'Capital letters for names and places',
    topic: 'capital-letters-and-full-stops',
  },
  {
    broken: 'the film starts at eight oclock',
    options: [
      'The film starts at eight oclock.',
      "the film starts at eight o'clock.",
      "The film starts at eight o'clock.",
      "The film starts at eight o'clock",
    ],
    answerIndex: 2,
    ruleTested: "Apostrophe in o'clock and sentence punctuation",
    topic: 'apostrophes',
  },
  {
    broken: 'i think we should leave now',
    options: [
      'i think we should leave now.',
      'I think we should leave now',
      'I think we should leave now.',
      'I Think We Should Leave Now.',
    ],
    answerIndex: 2,
    ruleTested: 'Capital "I" as a pronoun',
    topic: 'capital-letters-and-full-stops',
  },
  // ── Question & exclamation marks ──────────────────────────────────────────
  {
    broken: 'where are you going',
    options: [
      'Where are you going.',
      'Where are you going?',
      'where are you going?',
      'Where are you going!',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark to end a direct question',
    topic: 'question-and-exclamation-marks',
  },
  {
    broken: 'what a wonderful surprise',
    options: [
      'What a wonderful surprise.',
      'what a wonderful surprise!',
      'What a wonderful surprise?',
      'What a wonderful surprise!',
    ],
    answerIndex: 3,
    ruleTested: 'Exclamation mark for an exclamatory sentence',
    topic: 'question-and-exclamation-marks',
  },
  {
    broken: 'can you help me carry these books',
    options: [
      'Can you help me carry these books?',
      'Can you help me carry these books.',
      'can you help me carry these books?',
      'Can you help me carry these books!',
    ],
    answerIndex: 0,
    ruleTested: 'Question mark after a request phrased as a question',
    topic: 'question-and-exclamation-marks',
  },
  {
    broken: 'look out for that car',
    options: [
      'Look Out For That Car!',
      'Look out for that car?',
      'Look out for that car!',
      'look out for that car!',
    ],
    answerIndex: 2,
    ruleTested: 'Exclamation mark for urgency or strong feeling',
    topic: 'question-and-exclamation-marks',
  },
  {
    broken: 'did she really say that',
    options: [
      'Did she really say that!',
      'Did she really say that?',
      'did she really say that?',
      'Did she really say that.',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark for a direct question',
    topic: 'question-and-exclamation-marks',
  },
  {
    broken: 'how did you manage to fix it so quickly',
    options: [
      'How did you manage to fix it so quickly.',
      'how did you manage to fix it so quickly?',
      'How did you manage to fix it so quickly?',
      'How did you manage to fix it so quickly',
    ],
    answerIndex: 2,
    ruleTested: 'Question mark with "how" question word',
    topic: 'question-and-exclamation-marks',
  },
  // ── Commas in lists ───────────────────────────────────────────────────────
  {
    broken: 'i bought apples bananas grapes and oranges',
    options: [
      'I bought apples, bananas, grapes and oranges.',
      'I bought apples bananas grapes and oranges.',
      'I bought, apples, bananas, grapes and oranges.',
      'I bought apples, bananas, grapes, and, oranges.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas to separate items in a list',
    topic: 'commas-in-lists',
  },
  {
    broken: 'she packed a towel sun cream a hat and a book',
    options: [
      'She packed a towel sun cream, a hat and a book.',
      'She packed a towel, sun cream, a hat and a book.',
      'She packed a towel, sun cream, a hat, and a book,',
      'she packed a towel, sun cream, a hat and a book.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list of nouns',
    topic: 'commas-in-lists',
  },
  {
    broken: 'the recipe needs flour butter sugar and eggs',
    options: [
      'The recipe needs flour, butter, sugar and eggs.',
      'The recipe needs flour butter, sugar and eggs.',
      'The recipe, needs, flour, butter, sugar and eggs.',
      'The recipe needs flour, butter, sugar and eggs',
    ],
    answerIndex: 0,
    ruleTested: 'Commas separating list items before "and"',
    topic: 'commas-in-lists',
  },
  {
    broken: 'we hiked swam cycled and camped during the trip',
    options: [
      'We hiked swam cycled and camped during the trip.',
      'We hiked, swam, cycled and camped during the trip.',
      'We hiked, swam, cycled, and camped, during the trip.',
      'we hiked, swam, cycled and camped during the trip.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list of verbs',
    topic: 'commas-in-lists',
  },
  {
    broken: 'the flag was red white and blue',
    options: [
      'The flag was red white and blue.',
      'The flag was red, white, and, blue.',
      'The flag was red, white and blue.',
      'The flag was, red, white and blue.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas in a short list of adjectives',
    topic: 'commas-in-lists',
  },
  // ── Commas after subordinate clauses / fronted adverbials ─────────────────
  {
    broken: 'because it was raining we stayed indoors',
    options: [
      'Because it was raining we stayed indoors.',
      'Because it was raining, we stayed indoors.',
      'because it was raining, we stayed indoors.',
      'Because it was raining, we stayed indoors',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a subordinate clause at the start',
    topic: 'commas-after-openers',
  },
  {
    broken: 'after the match had finished the players shook hands',
    options: [
      'After the match had finished the players shook hands.',
      'After the match had finished, the players shook hands.',
      'After the match had finished, the players shook hands',
      'after the match had finished, the players shook hands.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted subordinate clause',
    topic: 'commas-after-openers',
  },
  {
    broken: 'although she was tired she finished her homework',
    options: [
      'Although she was tired she finished her homework.',
      'although she was tired, she finished her homework.',
      'Although she was tired, she finished her homework.',
      'Although she was tired, she finished her homework',
    ],
    answerIndex: 2,
    ruleTested: 'Comma separating a fronted "although" clause',
    topic: 'commas-after-openers',
  },
  {
    broken: 'when the bell rang the students left the room',
    options: [
      'When the bell rang the students left the room.',
      'When the bell rang, the students left the room.',
      'when the bell rang, the students left the room.',
      'When the bell rang the students, left the room.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a "when" subordinate clause',
    topic: 'commas-after-openers',
  },
  {
    broken: 'suddenly the lights went out',
    options: [
      'Suddenly, the lights, went out.',
      'Suddenly, the lights went out.',
      'suddenly, the lights went out.',
      'Suddenly the lights went out',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted adverbial',
    topic: 'commas-after-openers',
  },
  {
    broken: 'if you finish early you may go outside',
    options: [
      'If you finish early you may go outside.',
      'If you finish early, you may go outside.',
      'if you finish early, you may go outside.',
      'If you finish early, you may go outside',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted conditional clause',
    topic: 'commas-after-openers',
  },
  {
    broken: 'meanwhile the rest of the team kept practising',
    options: [
      'Meanwhile, the rest of the team kept practising',
      'meanwhile, the rest of the team kept practising.',
      'Meanwhile, the rest of the team kept practising.',
      'Meanwhile the rest of the team, kept practising.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a fronted adverbial of time',
    topic: 'commas-after-openers',
  },
  // ── Comma-splice fixes ────────────────────────────────────────────────────
  {
    broken: 'it was late, we went home',
    options: [
      'It was late, we went home.',
      'It was late, so we went home.',
      'It was late we went home.',
      'It was late, so we went home',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a conjunction',
    topic: 'comma-splices',
  },
  {
    broken: 'the test was hard, everyone passed it',
    options: [
      'The test was hard, everyone passed it.',
      'The test was hard everyone passed it.',
      'The test was hard, but everyone passed it.',
      'The test was hard, but everyone passed it',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "but"',
    topic: 'comma-splices',
  },
  {
    broken: 'she loves reading, her brother prefers sport',
    options: [
      'She loves reading, her brother prefers sport.',
      'She loves reading; her brother prefers sport.',
      'She loves reading her brother prefers sport.',
      'She loves reading, her brother, prefers sport.',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a semicolon',
    topic: 'comma-splices',
  },
  {
    broken: 'the rain stopped, the sun came out',
    options: [
      'The rain stopped, the sun came out.',
      'The rain stopped the sun came out.',
      'The rain stopped, and the sun came out.',
      'The rain stopped and, the sun came out.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "and"',
    topic: 'comma-splices',
  },
  {
    broken: 'he trained every day, he wanted to win',
    options: [
      'He trained every day, he wanted to win.',
      'He trained every day because he wanted to win.',
      'He trained every day he wanted to win.',
      'He trained every day, because, he wanted to win.',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a subordinating conjunction',
    topic: 'comma-splices',
  },
  {
    broken: 'we waited for an hour, the bus never arrived',
    options: [
      'We waited for an hour, the bus never arrived.',
      'We waited for an hour. The bus never arrived.',
      'We waited for an hour the bus never arrived.',
      'We waited for an hour, the bus never arrived',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice by using two sentences',
    topic: 'comma-splices',
  },
  {
    broken: 'the museum was closed, we visited the park instead',
    options: [
      'The museum was closed, we visited the park instead.',
      'The museum was closed we visited the park instead.',
      'The museum was closed, so we visited the park instead.',
      'The museum was closed so, we visited the park instead.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "so"',
    topic: 'comma-splices',
  },
  // ── Speech marks ──────────────────────────────────────────────────────────
  {
    broken: 'come here at once said the teacher',
    options: [
      '"Come here at once," said the teacher.',
      '"Come here at once" said the teacher.',
      'Come here at once, said the teacher.',
      '"Come here at once", said the teacher.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma inside speech marks before the reporting clause',
    topic: 'speech-marks',
  },
  {
    broken: 'tom asked are we nearly there yet',
    options: [
      'Tom asked, "Are we nearly there yet".',
      'Tom asked, "Are we nearly there yet?"',
      'Tom asked "are we nearly there yet?"',
      'Tom asked, Are we nearly there yet?',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark inside speech marks',
    topic: 'speech-marks',
  },
  {
    broken: 'i am so excited shouted maya',
    options: [
      '"I am so excited" shouted Maya.',
      '"I am so excited," shouted maya.',
      '"I am so excited!" shouted Maya.',
      'I am so excited! shouted Maya.',
    ],
    answerIndex: 2,
    ruleTested: 'Exclamation mark inside speech marks',
    topic: 'speech-marks',
  },
  {
    broken: 'the guide explained this castle is over 800 years old',
    options: [
      'The guide explained, "This castle is over 800 years old."',
      'The guide explained "This castle is over 800 years old".',
      'The guide explained, this castle is over 800 years old.',
      'The guide explained, "this castle is over 800 years old."',
    ],
    answerIndex: 0,
    ruleTested: 'Comma before speech and capital letter to open the speech',
    topic: 'speech-marks',
  },
  {
    broken: 'please be quiet whispered the librarian',
    options: [
      '"Please be quiet," whispered the librarian.',
      '"Please be quiet" whispered the librarian.',
      '"Please be quiet," whispered the Librarian.',
      'Please be quiet, whispered the librarian.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma inside speech marks with a reporting verb',
    topic: 'speech-marks',
  },
  {
    broken: 'she said i will meet you after school',
    options: [
      'She said "I will meet you after school."',
      'She said, "I will meet you after school."',
      'She said, "i will meet you after school."',
      'She said, I will meet you after school.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma before direct speech and capital to begin it',
    topic: 'speech-marks',
  },
  {
    broken: 'wait for me called jack',
    options: [
      '"Wait for me!" called Jack.',
      '"Wait for me" called Jack.',
      '"Wait for me!" called jack.',
      'Wait for me! called Jack.',
    ],
    answerIndex: 0,
    ruleTested: 'Exclamation mark and speech marks for a shout',
    topic: 'speech-marks',
  },
  // ── Apostrophes (possession & contraction) ────────────────────────────────
  {
    broken: 'thats my sisters bicycle',
    options: [
      'Thats my sisters bicycle.',
      "That's my sister's bicycle.",
      "Thats my sister's bicycle.",
      "That's my sisters bicycle.",
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophes for contraction and singular possession',
    topic: 'apostrophes',
  },
  {
    broken: 'the dogs tail wagged happily',
    options: [
      'The dogs tail wagged happily.',
      "The dog's tail wagged happily.",
      "The dogs' tail wagged happily.",
      "The dog's tail wagged happily",
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophe for singular possession',
    topic: 'apostrophes',
  },
  {
    broken: 'we couldnt find the keys anywhere',
    options: [
      'We couldnt find the keys anywhere.',
      "We could'nt find the keys anywhere.",
      "We couldn't find the keys anywhere.",
      "We couldn't find the keys anywhere",
    ],
    answerIndex: 2,
    ruleTested: 'Apostrophe in a contraction (could not)',
    topic: 'apostrophes',
  },
  {
    broken: 'the players changing room was locked',
    options: [
      'The players changing room was locked.',
      "The players' changing room was locked.",
      "The players's changing room was locked.",
      'The players changing-room was locked.',
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophe for plural possession',
    topic: 'apostrophes',
  },
  {
    broken: 'its going to be a long day isnt it',
    options: [
      'Its going to be a long day isnt it?',
      "It's going to be a long day, isn't it?",
      "It's going to be a long day isn't it.",
      "Its going to be a long day, isn't it?",
    ],
    answerIndex: 1,
    ruleTested: 'Contractions with a comma before a question tag',
    topic: 'apostrophes',
  },
  // ── Colons & semicolons ───────────────────────────────────────────────────
  {
    broken: 'you will need the following a pen a ruler and paper',
    options: [
      'You will need the following, a pen, a ruler and paper.',
      'You will need the following: a pen, a ruler and paper.',
      'You will need the following; a pen, a ruler and paper.',
      'You will need the following: a pen a ruler and paper.',
    ],
    answerIndex: 1,
    ruleTested: 'Colon to introduce a list',
    topic: 'colons-and-semicolons',
  },
  {
    broken: 'the journey was long the views were stunning',
    options: [
      'The journey was long, the views were stunning.',
      'The journey was long the views were stunning.',
      'The journey was long; the views were stunning.',
      'The journey was long: the views were stunning;',
    ],
    answerIndex: 2,
    ruleTested: 'Semicolon to join two related independent clauses',
    topic: 'colons-and-semicolons',
  },
  {
    broken: 'there is one thing i value above all else honesty',
    options: [
      'There is one thing I value: above all else honesty.',
      'There is one thing I value above all else: honesty.',
      'There is one thing I value above all else; honesty.',
      'There is one thing I value above all else honesty.',
    ],
    answerIndex: 1,
    ruleTested: 'Colon before an explanation or single example',
    topic: 'colons-and-semicolons',
  },
  // ── Mixed sentence-level punctuation ──────────────────────────────────────
  {
    broken: 'my favourite subjects are english history and art',
    options: [
      'My favourite subjects are english, history and art.',
      'My favourite Subjects are English, history and art.',
      'My favourite subjects are English, history and art.',
      'My favourite subjects, are English, history and art.',
    ],
    answerIndex: 2,
    ruleTested: 'Capital for the language "English"; lower case for other subjects',
    topic: 'capital-letters-and-full-stops',
  },
  {
    broken: 'on monday we have a science test',
    options: [
      'On monday we have a science test.',
      'On Monday, we have a science test.',
      'on Monday we have a science test.',
      'On Monday we have a science test',
    ],
    answerIndex: 1,
    ruleTested: 'Capital for days of the week and comma after fronted adverbial',
    topic: 'commas-after-openers',
  },
  {
    broken: 'help i cant swim he yelled',
    options: [
      '"Help, I can\'t swim!" he yelled.',
      '"Help I cant swim" he yelled.',
      '"Help, I can\'t swim!" He yelled.',
      "Help, I can't swim! he yelled.",
    ],
    answerIndex: 0,
    ruleTested: 'Speech marks, contraction and exclamation in dialogue',
    topic: 'speech-marks',
  },
  {
    broken: 'london paris and rome are european capitals',
    options: [
      'London, Paris and Rome are european capitals.',
      'london, paris and rome are European capitals.',
      'London, Paris and Rome are European capitals.',
      'London Paris and Rome are European capitals.',
    ],
    answerIndex: 2,
    ruleTested: 'Capitals for proper nouns and the adjective "European"',
    topic: 'capital-letters-and-full-stops',
  },
  {
    broken: 'have you read the novel the giver',
    options: [
      'Have you read the novel the giver?',
      'Have you read the novel The Giver?',
      'Have you read the novel "The Giver".',
      'have you read the novel The Giver?',
    ],
    answerIndex: 1,
    ruleTested: 'Capitalising a title and using a question mark',
    topic: 'capital-letters-and-full-stops',
  },
  {
    broken: 'first we mixed the ingredients then we baked the cake',
    options: [
      'First we mixed the ingredients then we baked the cake.',
      'First, we mixed the ingredients, and then we baked the cake.',
      'First we mixed the ingredients, then we baked the cake.',
      'first, we mixed the ingredients then we baked the cake.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas after a fronted adverbial and between linked clauses',
    topic: 'commas-after-openers',
  },
  {
    broken: 'dr patel will see you now said the receptionist',
    options: [
      '"Dr Patel will see you now," said the receptionist.',
      '"dr patel will see you now," said the receptionist.',
      'Dr Patel will see you now, said the receptionist.',
      '"Dr Patel will see you now" said the receptionist.',
    ],
    answerIndex: 0,
    ruleTested: 'Capital for a title/name within direct speech',
    topic: 'speech-marks',
  },
  {
    broken: 'although it was difficult i never gave up and i succeeded',
    options: [
      'Although it was difficult I never gave up and I succeeded.',
      'Although it was difficult, I never gave up, and I succeeded.',
      'although it was difficult, I never gave up and I succeeded.',
      'Although it was difficult I never gave up, and I succeeded.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after subordinate clause and before a coordinating "and"',
    topic: 'commas-after-openers',
  },
  {
    broken: 'wow that was the best concert ive ever been to',
    options: [
      'Wow that was the best concert ive ever been to.',
      "Wow, that was the best concert I've ever been to!",
      "wow, that was the best concert I've ever been to!",
      "Wow, that was the best concert I've ever been to?",
    ],
    answerIndex: 1,
    ruleTested: 'Comma after an interjection plus contraction and exclamation',
    topic: 'question-and-exclamation-marks',
  },
  {
    broken: 'priya who was tired fell asleep quickly',
    options: [
      'Priya, who was tired, fell asleep quickly.',
      'Priya, who was tired, fell asleep, quickly.',
      'Priya, who was tired fell asleep quickly.',
      'Priya who was tired, fell asleep quickly.',
    ],
    answerIndex: 0,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
  },
  {
    broken: 'mr jones our neighbour is a firefighter',
    options: [
      'Mr Jones our neighbour is a firefighter.',
      'Mr Jones, our neighbour, is a firefighter.',
      'mr jones, our neighbour, is a firefighter.',
      'Mr Jones, our neighbour is a firefighter.',
    ],
    answerIndex: 1,
    ruleTested: 'Pair of commas around an appositive (extra information)',
    topic: 'commas-around-extra-information',
  },
  {
    broken: 'turn off the lights before you leave the room',
    options: [
      'turn off the lights before you leave the room.',
      'Turn off the lights, before you leave the room.',
      'Turn off the lights before you leave the room.',
      'Turn off the lights before you leave the room?',
    ],
    answerIndex: 2,
    ruleTested: 'No comma needed before a subordinate clause that follows',
    topic: 'commas-after-openers',
  },
]

export const BANK: GameBank<PunctuationItem> = {
  slug: 'punctuation-repair',
  items: PUNCTUATION_BANK,
  // The broken sentence is what the student reads, and none appears twice.
  key: (q) => q.broken,
  answer: (q) => q.options[q.answerIndex],
  options: (q) => q.options,
  tag: (q) => q.topic,
}
