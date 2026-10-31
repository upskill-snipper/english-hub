import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Capital Letter Quest: the student chooses, from four, the sentence with
 * capital letters in all the right places, or the word of a sentence that
 * needs a capital or should lose one. The page shuffles the four for each
 * attempt and marks the option itself.
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
 * REBUILT FOR DEPTH: see the paragraph below the item type.
 */

/** What an answer is recorded as: a short kind, as GameRound stores it. */
export type Topic =
  | 'sentence start'
  | 'the pronoun I'
  | 'names of people'
  | 'places'
  | 'days'
  | 'months'
  | 'languages and nationalities'
  | 'titles'
  | 'brands and organisations'
  | 'several rules'
  | 'no capital'
  | 'family names'
  | 'festivals'
  | 'titles of books and films'
  | 'speech'
  | 'letters'
  | 'history and geography'

export interface CapitalQuestion {
  /** The four options: four versions of the sentence, or four words from it. */
  options: [string, string, string, string]
  /** Index (0-3) of the right option. The page shuffles the four for every attempt. */
  answerIndex: number
  /** What the answer is recorded as. */
  topic: Topic
  /** 1 A1, 2 A2, 3 B1. */
  tier: 1 | 2 | 3
  /** For a question about one word: what is asked, in place of "Which sentence is written correctly?". */
  prompt?: string
  /** For a question about one word: the sentence the four words come from, as the student sees it. */
  sentence?: string
  /**
   * The words whose capital letter the question turns on, in small letters,
   * and the names it shows; or a rule ("rule:..."). Two questions sharing one
   * are never dealt in one round, so one cannot show the other's answer.
   */
  facts?: readonly string[]
  /**
   * For a real line from a book: where it comes from, shown after the answer.
   * The sentence is the line as printed with a capital moved (two, where two
   * words are wrong), so the right answer puts the line back as printed.
   */
  source?: string
}

type Extra = Pick<CapitalQuestion, 'facts' | 'source' | 'prompt'>

/*
 * REBUILT FOR DEPTH (24 October 2026). 60 questions became 240, 80 at each
 * tier (80, 96 and 64 since the check of 31 October 2026, below): 1 A1 (the
 * first rules), 2 A2 (family words, festivals, two-word place names), 3 B1
 * (real lines, speech, titles, letters, two mistakes in one sentence).
 *
 * WHY THE OPTIONS CHANGED. All 60 questions offered the sentence in small
 * letters and 52 in Title Case, so a student who dropped the version with the
 * most capitals, then the one with the fewest, scored 98 per cent knowing no
 * rule. Every question now offers four different sentences, each wrong one
 * carrying a mistake learners make (a capital missed on a day, a language or
 * a name; one added to a season, an ordinary noun or a family word), or asks
 * about one word of a sentence that is shown. Four versions of one sentence
 * differing only in capitals cannot come back:
 * src/__tests__/a-game-question-takes-knowing.test.ts compares options
 * without case.
 *
 * THE 60 EARLIER QUESTIONS keep their right answers and recorded kinds (43 at
 * tier 1, 17 at tier 2). Each has three new wrong sentences, and its "why not"
 * entries were rewritten. The wrong versions named in the paragraph above went
 * with the rest; the two answers stand. None was removed.
 *
 * NEW KINDS, each with its sentence shown (`prompt`, `sentence`): which word
 * needs a capital letter (73), which should not have one (56), which two words
 * are wrong (13), and which line of a letter is right (3). 43 questions (27 at
 * tier 3, 16 at tier 2) are real lines from books out of UK copyright
 * (`source`, shown after the answer), checked word for word against
 * src/data/full-texts with only their capitals moved; their explanations name
 * the chapter.
 *
 * KEPT APART (`facts`). A question about one word shares a fact with every
 * question whose sentence prints that word ("word:wales"), so a sentence that
 * shows Wales with its capital is never in the round that asks about "wales";
 * a word printed in more than twelve sentences is left out, as it says
 * nothing about one question. Real lines from one book share a fact
 * ("source:..."): the page names the book after each, and a title can hold
 * another line's answer. Tier 3 answers avoid words that explanations use in
 * passing ("small", "letter"), and no sentence prints its own answer word a
 * second time with the capital it needs (a first draft had "called myself
 * pip, and came to be called Pip").
 *
 * CHECKED BY A SECOND READER (31 October 2026), every question and its
 * options, and every real line put back and found in its held text with its
 * capitals (the shared real-line test compares without case). What was wrong,
 * and what changed:
 *
 *   - SCHOOL SUBJECTS. Some schools teach, and many timetables print, "Maths"
 *     and "History" with capitals, so a careful child can have learnt the
 *     other way. Fourteen questions turned on it: a capitalised subject was the
 *     one wrong word ("On Monday I have Maths", "a Science course", "teaches
 *     History", "taught us History", "loves Maths", "revising History"), the
 *     wrong sentence ("I am good at Maths.", "Our school teaches History.", "I
 *     find Geography very interesting."), or a small subject sat beside the
 *     language as a rival answer ("maths and spanish", "music and art", "art
 *     and french", "science, history and german", "our history lesson"). Each
 *     now turns on something no school disputes (a game, a course, a school,
 *     a song, a sport, a family word after "my", a capital on "Teacher",
 *     "Class" or "Grammar"), and two explanations give the subject rule as
 *     the usual UK style. "I think Science is easier than art." went too: a
 *     child who accepts either style could pass it;
 *   - LETTERS. "Kind Regards" and "Best Wishes" are common in emails, and
 *     three questions marked them wrong with nothing else wrong in the line.
 *     Their wrong lines now carry plain mistakes (a small first word, a small
 *     title or name), and the explanations call one capital on a closing the
 *     usual UK style;
 *   - SECOND RIGHT ANSWERS. "My aunt and uncle Raj" and "my Grandma and Uncle
 *     Ken": "my" can govern both family words, and the bank's own rule ("my
 *     cousin Zara") then makes the uncle small, so the sentence the child is
 *     told is wrong can be read as right. Both now put the uncle outside "my".
 *     "Our Head Teacher is strict." went: schools print "Headteacher";
 *   - THE PROMPT for two wrong words now says they have "a wrong capital or a
 *     missing one": Austen's "Mr." with a full stop, against this bank's "Mr",
 *     could be read as wrong;
 *   - LENGTH. Five tier 2 answers were longer than every wrong sentence by a
 *     third or more; their wrong sentences were lengthened;
 *   - TIER. Sixteen real lines whose answer is a month, a day, a place or a
 *     person's name that is never an ordinary word are now tier 2 (see the
 *     comment above them): 80, 96 and 64 a tier;
 *   - KEPT APART: the seven direction questions ("drove north"), "the romans"
 *     with "The Vikings", sports with "Chess" and "Football".
 */

/** Where the right option goes: a position the question's own text fixes (the page shuffles again). */
function place(seed: string, answer: string, wrongs: readonly [string, string, string]) {
  let h = 7
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0
  const at = h % 4
  const options = [...wrongs]
  options.splice(at, 0, answer)
  return { options: options as CapitalQuestion['options'], answerIndex: at }
}

/** "Which sentence is written correctly?": the right version, then three wrong ones. */
function which(
  tier: 1 | 2 | 3,
  topic: Topic,
  answer: string,
  wrongs: readonly [string, string, string],
  extra: Extra = {},
): CapitalQuestion {
  return { ...place(answer, answer, wrongs), topic, tier, ...extra }
}

/** A question about one word of a sentence that is shown: the right word, then three wrong ones. */
function word(
  tier: 1 | 2 | 3,
  topic: Topic,
  prompt: string,
  sentence: string,
  answer: string,
  wrongs: readonly [string, string, string],
  extra: Extra = {},
): CapitalQuestion {
  return { ...place(sentence, answer, wrongs), topic, tier, prompt, sentence, ...extra }
}

/** Asked of a sentence with one capital missing. */
const NEEDS = 'Which word needs a capital letter?'
/** Asked of a sentence with one capital too many. */
const NOT = 'Which word should not have a capital letter?'
/** Asked of a sentence with two words wrong: the options are pairs of words. */
const TWO = 'In this sentence, two words have a wrong capital or a missing one. Which two?'
/** Asked of four lines of a letter or an email. */
const LINE = 'Which line is written correctly?'

// ── Tier 1 (A1): the first rules ────────────────────────────────────────────
const TIER_1: CapitalQuestion[] = [
  // Sentence start
  which(1, 'sentence start', 'The dog is asleep.', [
    'the bus is late again.',
    'We sat on the Grass.',
    'my brother is at school.',
  ]),
  which(1, 'sentence start', 'We walk to school.', [
    'we eat lunch at noon.',
    'My Sister walks with me.',
    'the park is near our house.',
  ]),
  which(
    1,
    'sentence start',
    'It is raining today.',
    ['it is very windy.', 'We are going out Today.', 'it was sunny yesterday.'],
    { facts: ['today'] },
  ),
  which(1, 'sentence start', 'She likes tea.', [
    'he likes coffee.',
    'They drink Milk.',
    'we like orange juice.',
  ]),
  which(1, 'sentence start', 'My book is new.', [
    'my pen is red.',
    'Your Bag is heavy.',
    'his desk is by the door.',
  ]),
  which(
    1,
    'sentence start',
    'Where do you live?',
    ['where is the station?', 'What do You want?', 'how old are you?'],
    { facts: ['rule:you takes a small letter'] },
  ),
  // The pronoun I
  which(1, 'the pronoun I', 'Yesterday I was tired.', [
    'Today i feel much better.',
    'Then i went to bed.',
    'This morning I saw My friend.',
  ]),
  which(
    1,
    'the pronoun I',
    'My friend and I play football.',
    ['My sister and i play chess.', 'Tom and I play Tennis.', 'My cousin and i go swimming.'],
    { facts: ['rule:sports take a small letter', 'tom'] },
  ),
  which(
    1,
    'the pronoun I',
    'Can I help you?',
    ['Can i sit here?', 'May I ask You a question?', 'Can i have some water?'],
    { facts: ['rule:you takes a small letter'] },
  ),
  which(1, 'the pronoun I', 'I think I am right.', [
    'I know i am late.',
    'i hope I can come.',
    'I said i was sorry.',
  ]),
  which(1, 'the pronoun I', 'Tomorrow I will visit her.', [
    'Tomorrow i will call him.',
    'Today I will see Her.',
    'Next week i will write to them.',
  ]),
  // Names of people
  which(
    1,
    'names of people',
    'My name is Sara.',
    ['His name is omar.', 'Her Name is Lina.', 'My dog is called max.'],
    { facts: ['sara', 'omar', 'max'] },
  ),
  which(
    1,
    'names of people',
    'Ahmed is my brother.',
    ['Nadia is my Sister.', 'yusuf is my cousin.', 'This is my Aunt.'],
    { facts: ['ahmed', 'yusuf', 'rule:family words after my take a small letter'] },
  ),
  which(
    1,
    'names of people',
    'This is Mr Brown.',
    ['This is mrs Green.', 'That is Dr white.', 'Here is Mr hill.'],
    { facts: ['brown', 'rule:a title before a name takes a capital'] },
  ),
  which(
    1,
    'names of people',
    'I sat next to Maria and Tom.',
    ['I sat next to Leo and anna.', 'I spoke to ravi and Ella.', 'I waited for Max and ruby.'],
    { facts: ['maria', 'tom', 'anna', 'ravi', 'ruby'] },
  ),
  which(
    1,
    'names of people',
    'Have you met Lucy?',
    ['Have you met kate?', 'Have You met Hana?', 'Do you know david?'],
    { facts: ['lucy', 'kate', 'david', 'rule:you takes a small letter'] },
  ),
  which(
    1,
    'names of people',
    'My teacher is Mrs Khan.',
    ['My doctor is dr Shah.', 'Our Teacher is Mr Ross.', 'Her dentist is Mrs reed.'],
    {
      facts: [
        'khan',
        'rule:a title before a name takes a capital',
        'rule:a job takes a small letter',
      ],
    },
  ),
  // Places
  which(
    1,
    'places',
    'I live in London.',
    ['I live in leeds.', 'We live in a small Town.', 'They live in bristol.'],
    { facts: ['london', 'leeds', 'bristol'] },
  ),
  which(
    1,
    'places',
    'She is from Spain.',
    ['He is from egypt.', 'They are from a hot Country.', 'We are from greece.'],
    { facts: ['spain', 'egypt', 'greece'] },
  ),
  which(
    1,
    'places',
    'We visited Paris in June.',
    ['We visited rome in May.', 'We visited Berlin in april.', 'We visited Madrid in the Summer.'],
    { facts: ['paris', 'june', 'rome', 'april', 'summer'] },
  ),
  which(
    1,
    'places',
    'My school is in Manchester.',
    [
      'My School is in Bath.',
      'Our college is in liverpool.',
      'My cousin goes to school in glasgow.',
    ],
    { facts: ['manchester', 'liverpool', 'glasgow'] },
  ),
  which(
    1,
    'places',
    'They moved to Scotland.',
    ['They moved to wales.', 'We moved to a new City.', 'She moved to ireland.'],
    { facts: ['scotland', 'wales', 'ireland'] },
  ),
  which(
    1,
    'places',
    'Oxford Street is busy.',
    ['Baker street is long.', 'Our Street is quiet.', 'Park lane is near here.'],
    { facts: ['oxford', 'street'] },
  ),
  // Days
  which(
    1,
    'days',
    'We have a test on Monday.',
    [
      'We have maths on tuesday.',
      'We have music on Thursday Afternoon.',
      'We have a party at the Weekend.',
    ],
    { facts: ['monday', 'tuesday', 'weekend'] },
  ),
  which(
    1,
    'days',
    'See you on Friday.',
    ['See you on thursday.', 'See You next week.', 'See you on Saturday Evening.'],
    { facts: ['friday', 'thursday', 'rule:you takes a small letter'] },
  ),
  which(
    1,
    'days',
    'The shop is closed on Sunday.',
    [
      'The bank is shut on saturday.',
      'The café opens on Monday Morning.',
      'The library is open every Day.',
    ],
    { facts: ['sunday', 'saturday'] },
  ),
  which(
    1,
    'days',
    'I play tennis every Saturday.',
    [
      'I go swimming every friday.',
      'I play Football every Sunday.',
      'I visit my gran every wednesday.',
    ],
    { facts: ['saturday', 'friday', 'wednesday', 'rule:sports take a small letter'] },
  ),
  which(
    1,
    'days',
    'The meeting is on Wednesday.',
    ['The party is on tuesday.', 'The Meeting is next week.', 'The trip is on thursday.'],
    { facts: ['wednesday', 'tuesday', 'thursday'] },
  ),
  // Months
  which(
    1,
    'months',
    'My birthday is in March.',
    ['Her birthday is in may.', 'My Birthday is in October.', 'His party is in november.'],
    { facts: ['march', 'may', 'november'] },
  ),
  which(
    1,
    'months',
    'School ends in July.',
    ['Term starts in january.', 'Our holiday is in the Spring.', 'The exams are in june.'],
    { facts: ['july', 'january', 'june', 'spring'] },
  ),
  which(
    1,
    'months',
    'It snows in December.',
    ['It rains a lot in november.', 'It is cold in the Winter.', 'It is hot in august.'],
    { facts: ['december', 'november', 'august', 'winter'] },
  ),
  which(
    1,
    'months',
    'We travel in August.',
    ['We travel in october.', 'We go away every Summer.', 'We fly home in february.'],
    { facts: ['august', 'october', 'february', 'summer'] },
  ),
  which(
    1,
    'months',
    'The term starts in September.',
    ['The holiday starts in july.', 'The new Term starts next week.', 'The course ends in march.'],
    { facts: ['september', 'july', 'march'] },
  ),
  // Languages and nationalities
  which(
    1,
    'languages and nationalities',
    'I am learning English.',
    ['I am learning french.', 'My Teacher is English.', 'I am studying german.'],
    { facts: ['english', 'french', 'german'] },
  ),
  which(
    1,
    'languages and nationalities',
    'She speaks French and Arabic.',
    [
      'She speaks english and Urdu.',
      'He speaks Polish and turkish.',
      'They speak Spanish at Home.',
    ],
    { facts: ['french', 'arabic', 'english', 'turkish'] },
  ),
  which(
    1,
    'languages and nationalities',
    'He is Italian.',
    ['She is spanish.', 'They are Polish Students.', 'We are egyptian.'],
    { facts: ['italian', 'spanish', 'egyptian'] },
  ),
  which(
    1,
    'languages and nationalities',
    'We ate Polish food.',
    ['We ate indian food.', 'We had Chinese Noodles.', 'They love italian pizza.'],
    { facts: ['polish', 'indian', 'italian'] },
  ),
  which(
    1,
    'languages and nationalities',
    'My class learns Spanish.',
    ['My class learns german.', 'Our Class learns Italian.', 'Her class studies japanese.'],
    { facts: ['spanish', 'german', 'japanese'] },
  ),
  // Titles
  which(
    1,
    'titles',
    'Please call Dr Smith.',
    ['Please ask mrs Ward.', 'Please call the Doctor.', 'Please phone dr Kaur.'],
    { facts: ['smith', 'rule:a title before a name takes a capital'] },
  ),
  which(
    1,
    'titles',
    'Miss Jones is kind.',
    ['miss Hart is my teacher.', 'Mr ryan is very tall.', 'Our coach is miss Barnes.'],
    { facts: ['jones', 'rule:a title before a name takes a capital'] },
  ),
  which(
    1,
    'titles',
    'We wrote to Mr Patel.',
    ['We wrote to mrs Moore.', 'We wrote to the Manager.', 'We spoke to Dr okafor.'],
    { facts: ['patel', 'rule:a title before a name takes a capital'] },
  ),
  which(
    1,
    'titles',
    'Thank you, Mrs Evans.',
    ['Thank you, mr Cole.', 'Thank You, Dr Price.', 'Goodbye, miss Hill.'],
    {
      facts: [
        'evans',
        'rule:a title before a name takes a capital',
        'rule:you takes a small letter',
      ],
    },
  ),
  which(
    1,
    'titles',
    'Ask Professor Lee.',
    ['Ask professor Jamal.', 'Ask the Professor.', 'Ask dr Wood.'],
    { facts: ['lee', 'rule:a title before a name takes a capital'] },
  ),
  // ── Added 24 October 2026: one word wrong in a sentence ──
  // A capital missing
  word(1, 'places', NEEDS, 'In summer my uncle and aunt visit wales.', 'wales', [
    'summer',
    'uncle',
    'aunt',
  ]),
  word(1, 'names of people', NEEDS, 'My sister and her friend have a cat called luna.', 'luna', [
    'sister',
    'friend',
    'cat',
  ]),
  word(
    1,
    'languages and nationalities',
    NEEDS,
    'On Monday morning we have spanish lessons with our teacher.',
    'spanish',
    ['morning', 'lessons', 'teacher'],
    { facts: ['rule:school subjects take a small letter'] },
  ),
  word(1, 'places', NEEDS, 'My best friend lives in paris with her mum and dad.', 'paris', [
    'friend',
    'mum',
    'dad',
  ]),
  word(1, 'days', NEEDS, 'Every saturday my dad and I go to the park in town.', 'saturday', [
    'dad',
    'park',
    'town',
  ]),
  word(1, 'titles', NEEDS, 'Our teacher, mr Green, likes cats and football.', 'mr', [
    'teacher',
    'cats',
    'football',
  ]),
  word(1, 'months', NEEDS, 'The school holidays start in july, at the end of summer.', 'july', [
    'school',
    'holidays',
    'summer',
  ]),
  word(
    1,
    'languages and nationalities',
    NEEDS,
    'My grandad speaks arabic at home with my gran.',
    'arabic',
    ['grandad', 'home', 'gran'],
  ),
  word(1, 'the pronoun I', NEEDS, 'After school i saw a fox in our garden.', 'i', [
    'school',
    'fox',
    'garden',
  ]),
  word(1, 'places', NEEDS, 'In August my aunt, my cousins and I fly to spain.', 'spain', [
    'aunt',
    'cousins',
    'fly',
  ]),
  word(1, 'days', NEEDS, 'Can you come to my party on friday?', 'friday', ['you', 'party', 'come']),
  word(1, 'places', NEEDS, 'My mum is a nurse at a hospital in leeds.', 'leeds', [
    'mum',
    'nurse',
    'hospital',
  ]),
  word(1, 'places', NEEDS, 'Last winter my uncle and my cousins went to poland.', 'poland', [
    'winter',
    'uncle',
    'cousins',
  ]),
  word(1, 'places', NEEDS, 'Our new neighbour is a chef from italy.', 'italy', [
    'new',
    'neighbour',
    'chef',
  ]),
  word(1, 'days', NEEDS, 'The library is closed on sunday afternoons.', 'sunday', [
    'library',
    'closed',
    'afternoons',
  ]),
  word(1, 'names of people', NEEDS, 'On Fridays my brother plays chess with Mrs shah.', 'shah', [
    'brother',
    'plays',
    'chess',
  ]),
  word(1, 'names of people', NEEDS, 'At the weekend I go swimming with my friend jack.', 'jack', [
    'weekend',
    'swimming',
    'friend',
  ]),
  word(
    1,
    'languages and nationalities',
    NEEDS,
    'My favourite lesson of the week is french.',
    'french',
    ['favourite', 'lesson', 'week'],
  ),
  word(1, 'places', NEEDS, 'Last night we watched a film about the history of london.', 'london', [
    'night',
    'film',
    'history',
  ]),
  word(1, 'festivals', NEEDS, 'My aunt makes cakes for eid every year.', 'eid', [
    'aunt',
    'cakes',
    'year',
  ]),
  word(1, 'places', NEEDS, 'My gran and grandad have a farm near exeter.', 'exeter', [
    'gran',
    'grandad',
    'farm',
  ]),
  word(1, 'places', NEEDS, 'In the summer holidays we go to the beach at brighton.', 'brighton', [
    'summer',
    'holidays',
    'beach',
  ]),
  // A capital too many
  word(
    1,
    'no capital',
    NOT,
    'On Monday I play Chess with Mr Hall.',
    'Chess',
    ['Monday', 'I', 'Mr'],
    { facts: ['rule:sports take a small letter'] },
  ),
  word(1, 'no capital', NOT, 'In March my Sister and I go to Wales.', 'Sister', [
    'March',
    'I',
    'Wales',
  ]),
  word(1, 'no capital', NOT, 'Every July, Ben and I go to the Beach in Cornwall.', 'Beach', [
    'July',
    'Ben',
    'Cornwall',
  ]),
  word(1, 'no capital', NOT, 'In Winter, Omar and I eat soup on Sundays.', 'Winter', [
    'Omar',
    'I',
    'Sundays',
  ]),
  word(1, 'no capital', NOT, 'My Teacher, Mrs Nowak, is from Poland.', 'Teacher', [
    'Mrs',
    'Nowak',
    'Poland',
  ]),
  word(1, 'no capital', NOT, 'On Saturday, Sam and I went to the Shop in Derby.', 'Shop', [
    'Saturday',
    'Sam',
    'Derby',
  ]),
  word(1, 'no capital', NOT, 'On Fridays, Tom and I take my Dog to Hyde Park.', 'Dog', [
    'Fridays',
    'Tom',
    'Hyde',
  ]),
  word(1, 'no capital', NOT, 'I speak English and Urdu at Home with my parents.', 'Home', [
    'I',
    'English',
    'Urdu',
  ]),
  word(1, 'no capital', NOT, 'Leo and I both have birthdays in June, in the Summer.', 'Summer', [
    'Leo',
    'I',
    'June',
  ]),
  word(1, 'no capital', NOT, 'On Tuesday, Mrs Rossi gives us Homework.', 'Homework', [
    'Tuesday',
    'Mrs',
    'Rossi',
  ]),
  word(1, 'no capital', NOT, 'On Sunday my Cousin Zara flew to Dundee.', 'Cousin', [
    'Sunday',
    'Zara',
    'Dundee',
  ]),
  word(1, 'no capital', NOT, 'On Friday we had Pizza in Rome with Grandma.', 'Pizza', [
    'Friday',
    'Rome',
    'Grandma',
  ]),
  word(1, 'no capital', NOT, 'In April, Nina and I visit the Zoo.', 'Zoo', ['April', 'Nina', 'I']),
  word(1, 'no capital', NOT, 'On Saturdays my Dad and I watch football with Uncle Raj.', 'Dad', [
    'Saturdays',
    'I',
    'Uncle',
  ]),
  word(
    1,
    'no capital',
    NOT,
    'Lily and I go back to class on Monday, after the Holidays.',
    'Holidays',
    ['Lily', 'I', 'Monday'],
  ),
]

// ── Tier 2 (A2): near neighbours ────────────────────────────────────────────
const TIER_2: CapitalQuestion[] = [
  which(
    2,
    'places',
    'The River Thames is long.',
    ['The River severn is wide.', 'We swam in the River.', 'Mount snowdon is in Wales.'],
    { facts: ['thames', 'river', 'severn', 'snowdon', 'wales'] },
  ),
  which(
    2,
    'several rules',
    'The Chinese New Year is fun.',
    ['We love diwali.', 'Easter is in the Spring.', 'Ramadan ends with eid.'],
    { facts: ['chinese', 'new year', 'diwali', 'eid', 'spring'] },
  ),
  // Brands and organisations
  which(
    2,
    'brands and organisations',
    'I have a new Samsung phone.',
    ['He has an apple watch.', 'She wants a Sony Camera.', 'We bought a lego set.'],
    { facts: ['samsung'] },
  ),
  which(
    2,
    'brands and organisations',
    'We drink Coca-Cola at parties.',
    ['They drink pepsi at lunch.', 'I like Heinz Beans.', 'She eats cadbury chocolate.'],
    { facts: ['coca-cola'] },
  ),
  which(
    2,
    'brands and organisations',
    'She bought Nike trainers.',
    ['He wears Puma Shoes.', 'I want levi’s jeans.', 'She has a primark coat.'],
    { facts: ['nike'] },
  ),
  which(
    2,
    'brands and organisations',
    'He watched a film on Netflix.',
    [
      'She heard it on the Radio.',
      'I listened to it on spotify.',
      'We saw the advert on Television.',
    ],
    { facts: ['netflix'] },
  ),
  which(
    2,
    'brands and organisations',
    'I searched for it on Google.',
    ['I bought it on amazon.', 'I found it on the Website.', 'I read about it on wikipedia.'],
    { facts: ['google'] },
  ),
  which(
    2,
    'brands and organisations',
    'The Toyota is parked outside.',
    ['The ford is in the garage.', 'My dad drives a red Car.', 'Her honda is very old.'],
    { facts: ['toyota'] },
  ),
  which(
    2,
    'brands and organisations',
    'Do you like the BBC news?',
    ['Do you live in the uk?', 'Do You watch the news?', 'Is he a doctor for the nhs?'],
    { facts: ['bbc', 'rule:you takes a small letter'] },
  ),
  // Several rules
  which(
    2,
    'several rules',
    'On Monday I fly to France.',
    ['On tuesday I fly to Italy.', 'On Friday i fly to Greece.', 'In june I fly to Portugal.'],
    { facts: ['monday', 'france', 'tuesday', 'june'] },
  ),
  which(
    2,
    'several rules',
    'In April Sam visits Germany.',
    ['In may Leo visits Austria.', 'In June mia visits Wales.', 'In July Ben visits holland.'],
    { facts: ['april', 'germany', 'sam', 'may'] },
  ),
  which(
    2,
    'several rules',
    'I think English is easier than German.',
    [
      'I think french is harder than Spanish.',
      'I think Italian is a Beautiful language.',
      'I know polish is hard to learn.',
    ],
    { facts: ['english', 'german', 'french', 'polish'] },
  ),
  which(
    2,
    'several rules',
    'Next Friday Dr Ali leaves for Cairo.',
    [
      'Next monday Dr Ben flies to Rome.',
      'Next Tuesday mrs Hill leaves for Oslo.',
      'Next Sunday Mr Ray goes to athens.',
    ],
    { facts: ['friday', 'cairo', 'ali', 'monday', 'rule:a title before a name takes a capital'] },
  ),
  which(
    2,
    'several rules',
    'My friend Olga speaks Russian and English.',
    [
      'My Friend Ivan speaks Russian very well.',
      'My cousin anna speaks Greek and Dutch.',
      'My aunt Rosa speaks portuguese with us.',
    ],
    { facts: ['olga', 'russian', 'english', 'anna'] },
  ),
  which(
    2,
    'several rules',
    'In January we move to Canada.',
    ['In march we move to Kenya.', 'In May we move to india.', 'In the Autumn we move to Chile.'],
    { facts: ['january', 'canada', 'march', 'india', 'autumn'] },
  ),
  which(
    2,
    'several rules',
    'Miss Ford and I visit York on Sunday.',
    [
      'Mr Cox and i visit Leeds on Monday.',
      'Mrs Bell and I visit hull on Tuesday.',
      'Dr Fox and I visit Bath on saturday.',
    ],
    { facts: ['york', 'sunday', 'ford', 'saturday', 'rule:a title before a name takes a capital'] },
  ),
  which(
    2,
    'several rules',
    'We celebrate Christmas in December.',
    [
      'We celebrate easter in April.',
      'We celebrate Eid in the Summer.',
      'They celebrate Diwali in november.',
    ],
    { facts: ['christmas', 'december', 'easter', 'november', 'summer'] },
  ),
  // ── Added 24 October 2026 ──
  // Four different sentences: near neighbours
  which(
    2,
    'family names',
    'Can Grandad come to the party?',
    ['I asked mum for some money.', 'My Mum is a teacher.', 'Is your Dad at home?'],
    {
      facts: [
        'rule:family words after my take a small letter',
        'rule:a family word used as a name',
      ],
    },
  ),
  which(
    2,
    'titles',
    'The dentist, Dr Kaur, was very kind.',
    [
      'My Doctor gave me some medicine.',
      'We met professor Grey at the museum.',
      'Ask the Nurse for a plaster.',
    ],
    {
      facts: [
        'kaur',
        'rule:a title before a name takes a capital',
        'rule:a job takes a small letter',
      ],
    },
  ),
  which(
    2,
    'places',
    'We walked along the river to Tower Bridge.',
    [
      'We sailed across lake Geneva in a small boat.',
      'They live in a flat on church Street.',
      'We climbed a Mountain in Wales last year.',
    ],
    { facts: ['river', 'tower bridge', 'geneva', 'street'] },
  ),
  which(
    2,
    'festivals',
    'We give presents at Christmas, in the winter.',
    [
      'We eat Pancakes on Shrove Tuesday.',
      'Halloween comes at the end of October, in the Autumn.',
      'Our family celebrates eid with a big meal.',
    ],
    { facts: ['christmas', 'winter', 'autumn', 'eid'] },
  ),
  which(
    2,
    'languages and nationalities',
    'My best friend at school speaks Portuguese.',
    [
      'I find Polish Grammar very interesting.',
      'We have french after lunch.',
      'Our new teacher speaks Italian and english.',
    ],
    { facts: ['portuguese', 'french', 'polish'] },
  ),
  which(
    2,
    'places',
    'We drove south to visit friends in South Wales.',
    [
      'Every morning the sun rises in the East.',
      'My uncle lives in a big city in north America.',
      'We sailed West across the sea to France.',
    ],
    { facts: ['south', 'rule:a direction takes a small letter'] },
  ),
  which(
    2,
    'brands and organisations',
    'My aunt works for the United Nations.',
    ['She has a job at the bbc.', 'He studies at a University in Hull.', 'We live in the uk now.'],
    { facts: ['united nations', 'bbc'] },
  ),
  which(
    2,
    'brands and organisations',
    'She took a photo with her Canon camera.',
    [
      'He drinks coffee from Starbucks every Morning.',
      'I want a new Phone for my birthday.',
      'I read the news on the bbc website.',
    ],
    { facts: ['canon', 'bbc'] },
  ),
  which(
    2,
    'days',
    'See you on Monday morning, after the weekend.',
    [
      'The party is on Friday Night at my house.',
      'We have a test and a quiz next Week.',
      'I start my new job on tuesday, in the city.',
    ],
    { facts: ['monday', 'weekend', 'tuesday'] },
  ),
  which(
    2,
    'months',
    'My birthday is on 3 May, in the spring.',
    [
      'School starts again on 5 september.',
      'The leaves fall in the Autumn.',
      'The Month of June is my favourite.',
    ],
    { facts: ['may', 'spring', 'september', 'autumn'] },
  ),
  which(
    2,
    'names of people',
    'My friend Rose grows roses in her garden.',
    [
      'My cousin Grace sang a Song.',
      'Our cat is called pepper.',
      'Jack used a Jack to lift the car.',
    ],
    { facts: ['rose'] },
  ),
  which(
    2,
    'languages and nationalities',
    'Most people in Wales speak English, and many speak Welsh too.',
    [
      'My friend is from japan, and she speaks Japanese very well.',
      'She is Brazilian, and she speaks portuguese with her family.',
      'We stayed with a Greek Family on a small island near Athens.',
    ],
    { facts: ['welsh', 'portuguese', 'japan', 'japanese'] },
  ),
  which(
    2,
    'places',
    'My brother goes to Riverside Primary School.',
    [
      'Our School has a big library.',
      'My sister studies at Durham university.',
      'I want to go to the University of oxford.',
    ],
    { facts: ['riverside primary school', 'rule:a school or a university by name'] },
  ),
  // One word needs a capital
  word(2, 'places', NEEDS, 'In the spring my uncle and I climbed mount Snowdon.', 'mount', [
    'spring',
    'uncle',
    'climbed',
  ]),
  word(2, 'family names', NEEDS, 'Can mum pick us up from school after the match?', 'mum', [
    'school',
    'match',
    'pick',
  ]),
  word(2, 'family names', NEEDS, 'My aunt and I visited uncle Raj at the seaside.', 'uncle', [
    'aunt',
    'visited',
    'seaside',
  ]),
  word(2, 'places', NEEDS, 'Our team won the cup at Park road School.', 'road', [
    'team',
    'cup',
    'won',
  ]),
  word(
    2,
    'places',
    NEEDS,
    'We drove north for two hours to reach the city of inverness.',
    'inverness',
    ['north', 'hours', 'city'],
    { facts: ['rule:a direction takes a small letter'] },
  ),
  word(
    2,
    'places',
    NEEDS,
    'In the summer my cousin flew from north America to see us.',
    'north',
    ['summer', 'cousin', 'flew'],
    { facts: ['rule:a direction takes a small letter'] },
  ),
  word(
    2,
    'languages and nationalities',
    NEEDS,
    'For my birthday we had dinner at an indian restaurant.',
    'indian',
    ['birthday', 'dinner', 'restaurant'],
  ),
  word(
    2,
    'festivals',
    NEEDS,
    'In November my family watches the fireworks on bonfire Night.',
    'bonfire',
    ['family', 'watches', 'fireworks'],
  ),
  word(
    2,
    'festivals',
    NEEDS,
    'In the winter we celebrate christmas with my grandparents.',
    'christmas',
    ['winter', 'celebrate', 'grandparents'],
  ),
  word(2, 'titles', NEEDS, 'The doctor at the desk said that dr Okoro would see me.', 'dr', [
    'doctor',
    'desk',
    'see',
  ]),
  word(
    2,
    'languages and nationalities',
    NEEDS,
    'This year my sister and I are learning german at school.',
    'german',
    ['sister', 'year', 'school'],
    { facts: ['rule:school subjects take a small letter'] },
  ),
  word(2, 'places', NEEDS, 'My little brother wants a ride on the London eye this summer.', 'eye', [
    'brother',
    'ride',
    'summer',
  ]),
  word(
    2,
    'festivals',
    NEEDS,
    'Every year in ramadan my family eats together after sunset.',
    'ramadan',
    ['year', 'family', 'sunset'],
  ),
  word(2, 'months', NEEDS, 'My best friend’s birthday party is on 3 june.', 'june', [
    'friend’s',
    'birthday',
    'party',
  ]),
  word(2, 'places', NEEDS, 'Last night my dad and I watched england play Brazil.', 'england', [
    'night',
    'dad',
    'watched',
  ]),
  word(2, 'brands and organisations', NEEDS, 'My uncle works for the nhs as a nurse.', 'nhs', [
    'uncle',
    'works',
    'nurse',
  ]),
  word(2, 'places', NEEDS, 'Next summer my parents want to visit lake Como.', 'lake', [
    'summer',
    'parents',
    'visit',
  ]),
  word(2, 'festivals', NEEDS, 'My family always goes for a walk on new Year’s Day.', 'new', [
    'family',
    'always',
    'walk',
  ]),
  word(
    2,
    'brands and organisations',
    NEEDS,
    'At the weekend we went to a lego show in Birmingham.',
    'lego',
    ['weekend', 'show', 'went'],
  ),
  word(2, 'places', NEEDS, 'My grandma comes from jamaica and makes great food.', 'jamaica', [
    'grandma',
    'great',
    'food',
  ]),
  word(2, 'titles', NEEDS, 'Our English teacher, miss Price, gives us a lot of homework.', 'miss', [
    'teacher',
    'lot',
    'homework',
  ]),
  word(
    2,
    'festivals',
    NEEDS,
    'Every year my sister makes cards for valentine’s Day.',
    'valentine’s',
    ['year', 'sister', 'cards'],
  ),
  word(
    2,
    'history and geography',
    NEEDS,
    'At the museum we learned about the romans and their roads.',
    'romans',
    ['museum', 'roads', 'learned'],
  ),
  word(2, 'places', NEEDS, 'On our trip we saw the guards at buckingham Palace.', 'buckingham', [
    'trip',
    'guards',
    'saw',
  ]),
  word(2, 'places', NEEDS, 'Have you ever been to the city of edinburgh?', 'edinburgh', [
    'ever',
    'been',
    'city',
  ]),
  // One word has a capital it should not have
  word(2, 'no capital', NOT, 'On Monday, Mum and I went to see the Doctor.', 'Doctor', [
    'Monday',
    'Mum',
    'I',
  ]),
  word(2, 'family names', NOT, 'In August my Uncle took us to Lake Windermere.', 'Uncle', [
    'August',
    'Lake',
    'Windermere',
  ]),
  word(2, 'no capital', NOT, 'On Sunday we swam in the River near Aunt Lena’s farm.', 'River', [
    'Sunday',
    'Aunt',
    'Lena’s',
  ]),
  word(2, 'no capital', NOT, 'Every Autumn, Grandma takes us to Kew Gardens.', 'Autumn', [
    'Grandma',
    'Kew',
    'Gardens',
  ]),
  word(
    2,
    'no capital',
    NOT,
    'On Friday we drove North from London to Durham.',
    'North',
    ['Friday', 'London', 'Durham'],
    { facts: ['rule:a direction takes a small letter'] },
  ),
  word(2, 'no capital', NOT, 'In September, Ana starts a new Course in Bristol.', 'Course', [
    'September',
    'Ana',
    'Bristol',
  ]),
  word(2, 'no capital', NOT, 'On Saturday we bought Chinese food and a Cake for Dad.', 'Cake', [
    'Saturday',
    'Chinese',
    'Dad',
  ]),
  word(2, 'family names', NOT, 'In May, my Grandma flew to Ireland with Uncle Ken.', 'Grandma', [
    'May',
    'Uncle',
    'Ireland',
  ]),
  word(
    2,
    'no capital',
    NOT,
    'Next September Kingsway Academy will open a new Library.',
    'Library',
    ['September', 'Kingsway', 'Academy'],
  ),
  word(2, 'no capital', NOT, 'On Christmas Day we eat Turkey with Aunt Jo.', 'Turkey', [
    'Christmas',
    'Day',
    'Aunt',
  ]),
  word(2, 'no capital', NOT, 'Is the Bank on Station Road open on Sundays?', 'Bank', [
    'Station',
    'Road',
    'Sundays',
  ]),
  word(
    2,
    'no capital',
    NOT,
    'In the Easter holidays, Leo and I visited a Castle in Wales.',
    'Castle',
    ['Easter', 'Leo', 'Wales'],
  ),
  word(2, 'no capital', NOT, 'On Friday Dad bought a new Car from the Ford garage.', 'Car', [
    'Friday',
    'Dad',
    'Ford',
  ]),
  word(2, 'no capital', NOT, 'Mr Doyle teaches French and Spanish at our School.', 'School', [
    'Mr',
    'Doyle',
    'French',
  ]),
  word(2, 'no capital', NOT, 'Our Neighbour, Mrs Clarke, has a dog called Biscuit.', 'Neighbour', [
    'Mrs',
    'Clarke',
    'Biscuit',
  ]),
  word(2, 'family names', NOT, 'In June we fly to New York with my Brother.', 'Brother', [
    'June',
    'New',
    'York',
  ]),
  word(2, 'no capital', NOT, 'Dad says the UK and France are joined by a Tunnel.', 'Tunnel', [
    'Dad',
    'UK',
    'France',
  ]),
  word(2, 'no capital', NOT, 'On Valentine’s Day, Sam gave Mia a Rose.', 'Rose', [
    'Valentine’s',
    'Sam',
    'Mia',
  ]),
  word(
    2,
    'no capital',
    NOT,
    'Grandad and I watched the Olympics on the BBC every day in the Summer.',
    'Summer',
    ['Grandad', 'Olympics', 'BBC'],
  ),
  word(
    2,
    'family names',
    NOT,
    'Ravi’s Grandparents celebrate Diwali in October or November.',
    'Grandparents',
    ['Ravi’s', 'Diwali', 'October'],
  ),
  word(2, 'no capital', NOT, 'Our teacher, Mr Wong, grew up in Lima, near the Ocean.', 'Ocean', [
    'Mr',
    'Wong',
    'Lima',
  ]),
  word(2, 'no capital', NOT, 'On Tuesday, Mum and I visited Grandad in Hospital.', 'Hospital', [
    'Tuesday',
    'Mum',
    'Grandad',
  ]),
  word(2, 'no capital', NOT, 'Every Easter, Uncle Tariq bakes a Chocolate cake.', 'Chocolate', [
    'Easter',
    'Uncle',
    'Tariq',
  ]),
  word(2, 'family names', NOT, 'In March my Mum started work at Lloyds Bank in Cardiff.', 'Mum', [
    'March',
    'Lloyds',
    'Cardiff',
  ]),
  word(2, 'no capital', NOT, 'Is your Teacher Mr Grant or Mrs Shaw?', 'Teacher', [
    'Mr',
    'Grant',
    'Shaw',
  ]),
]

// Where each real line comes from (the right answer is the line as printed).
const CAROL = 'A Christmas Carol by Charles Dickens (1843)'
const JANE_EYRE = 'Jane Eyre by Charlotte Brontë (1847)'
const ANIMAL_FARM = 'Animal Farm by George Orwell (1945)'
const GREAT_EXPECTATIONS = 'Great Expectations by Charles Dickens (1861)'
const SIGN_OF_FOUR = 'The Sign of Four by Arthur Conan Doyle (1890)'
const PRIDE = 'Pride and Prejudice by Jane Austen (1813)'
const FRANKENSTEIN = 'Frankenstein by Mary Shelley (1818)'
const WAR_OF_THE_WORLDS = 'The War of the Worlds by H. G. Wells (1898)'
const JEKYLL = 'Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson (1886)'
const GATSBY = 'The Great Gatsby by F. Scott Fitzgerald (1925)'
const SCARLET_LETTER = 'The Scarlet Letter by Nathaniel Hawthorne (1850)'

// ── Tier 3 (B1): capitals in longer sentences, real lines and short texts ───
const TIER_3: CapitalQuestion[] = [
  // Real lines from books out of UK copyright, one capital changed. Each is
  // the held edition's line (src/data/full-texts) with one word's first
  // letter made small or large; the explanation gives the line as printed.
  // Sixteen of them are tier 2 (relabelled 31 October 2026): their answer is a
  // month, a day, a place or a person's name that is never an ordinary word,
  // so the longer sentence asks for a first rule, not a judgement in context.
  word(
    3,
    'festivals',
    NEEDS,
    'For they said, it was a shame to quarrel upon christmas Day.',
    'christmas',
    ['said', 'shame', 'quarrel'],
    { source: CAROL },
  ),
  word(
    3,
    'places',
    NEEDS,
    'It came in a full tide down exhibition Road.',
    'exhibition',
    ['came', 'full', 'tide'],
    { source: WAR_OF_THE_WORLDS },
  ),
  word(
    3,
    'names of people',
    NEEDS,
    "It's twice the size of tiny Tim.",
    'tiny',
    ['twice', 'the', 'size'],
    {
      source: CAROL,
    },
  ),
  word(
    3,
    'names of people',
    NEEDS,
    'That woman was no other than grace Poole.',
    'grace',
    ['woman', 'other', 'than'],
    { source: JANE_EYRE },
  ),
  word(
    2,
    'places',
    NEEDS,
    'The next day I left Marsh End for morton.',
    'morton',
    ['next', 'day', 'left'],
    {
      source: JANE_EYRE,
    },
  ),
  word(
    2,
    'names of people',
    NEEDS,
    'After the horses came muriel, the white goat, and Benjamin, the donkey.',
    'muriel',
    ['horses', 'goat', 'donkey'],
    { source: ANIMAL_FARM },
  ),
  word(
    3,
    'names of people',
    NEEDS,
    'The animals had their breakfast, and then snowball and Napoleon called them together again.',
    'snowball',
    ['animals', 'breakfast', 'together'],
    { source: ANIMAL_FARM },
  ),
  word(
    3,
    'names of people',
    NEEDS,
    'Only boxer and Clover never lost heart.',
    'boxer',
    ['never', 'lost', 'heart'],
    { source: ANIMAL_FARM },
  ),
  word(
    3,
    'names of people',
    NEEDS,
    'It was uncertain whether Boxer had understood what clover had said.',
    'clover',
    ['uncertain', 'understood', 'said'],
    { source: ANIMAL_FARM },
  ),
  word(
    3,
    'no capital',
    NOT,
    'Miss Sarah Pocket came to the Gate.',
    'Gate',
    ['Miss', 'Sarah', 'Pocket'],
    { source: GREAT_EXPECTATIONS },
  ),
  word(
    3,
    'places',
    NEEDS,
    'It was past midnight when I crossed London bridge.',
    'bridge',
    ['past', 'midnight', 'crossed'],
    { source: GREAT_EXPECTATIONS },
  ),
  word(
    2,
    'places',
    NEEDS,
    'Business had taken Herbert on a journey to marseilles.',
    'marseilles',
    ['taken', 'on', 'journey'],
    { source: GREAT_EXPECTATIONS },
  ),
  word(
    2,
    'names of people',
    NEEDS,
    'Evidently biddy had taught Joe to write.',
    'biddy',
    ['had', 'taught', 'write'],
    { source: GREAT_EXPECTATIONS },
  ),
  word(
    2,
    'months',
    NEEDS,
    'One afternoon late in october I saw Tom Buchanan.',
    'october',
    ['afternoon', 'late', 'saw'],
    { source: GATSBY },
  ),
  word(
    3,
    'places',
    NEEDS,
    'A bath at Baker street and a complete change freshened me up wonderfully.',
    'street',
    ['bath', 'change', 'wonderfully'],
    { source: SIGN_OF_FOUR },
  ),
  word(
    2,
    'places',
    NEEDS,
    'Major Sholto was to go to india to test our story.',
    'india',
    ['go', 'test', 'story'],
    { source: SIGN_OF_FOUR },
  ),
  word(
    2,
    'days',
    NEEDS,
    'He comes down on thursday at the latest, very likely on Wednesday.',
    'thursday',
    ['comes', 'latest', 'likely'],
    { source: PRIDE },
  ),
  word(
    2,
    'places',
    NEEDS,
    'Henry Clerval was the son of a merchant of geneva.',
    'geneva',
    ['was', 'son', 'merchant'],
    { source: FRANKENSTEIN },
  ),
  word(
    2,
    'months',
    NEEDS,
    'It was on a dreary night of november, that I beheld the accomplishment of my toils.',
    'november',
    ['dreary', 'accomplishment', 'toils'],
    { source: FRANKENSTEIN },
  ),
  word(
    3,
    'history and geography',
    NEEDS,
    'My younger brother was in London when the martians fell at Woking.',
    'martians',
    ['younger', 'brother', 'fell'],
    { source: WAR_OF_THE_WORLDS },
  ),
  word(
    2,
    'places',
    NEEDS,
    'We crossed richmond Bridge about half past eight.',
    'richmond',
    ['crossed', 'half', 'past'],
    { source: WAR_OF_THE_WORLDS },
  ),
  word(
    2,
    'places',
    NEEDS,
    'In spite of Ogilvy, I still believed that there were men in mars.',
    'mars',
    ['spite', 'believed', 'men'],
    { source: WAR_OF_THE_WORLDS },
  ),
  word(
    2,
    'names of people',
    NEEDS,
    'Yes, I had gone to bed Henry jekyll, I had awakened Edward Hyde.',
    'jekyll',
    ['gone', 'bed', 'awakened'],
    { source: JEKYLL },
  ),
  word(
    2,
    'names of people',
    NEEDS,
    'His name was announced as roger Chillingworth.',
    'roger',
    ['name', 'announced', 'as'],
    { source: SCARLET_LETTER },
  ),
  word(
    3,
    'months',
    NOT,
    'November, December, and half of January Passed away.',
    'Passed',
    ['November', 'December', 'January'],
    { source: JANE_EYRE },
  ),
  word(
    2,
    'languages and nationalities',
    NOT,
    'Whether It were Greek or German I could not tell.',
    'It',
    ['Greek', 'German', 'I'],
    { source: JANE_EYRE },
  ),
  word(
    3,
    'no capital',
    NOT,
    'As usual, Snowball and Napoleon were in Disagreement.',
    'Disagreement',
    ['As', 'Snowball', 'Napoleon'],
    { source: ANIMAL_FARM },
  ),
  word(
    3,
    'no capital',
    NOT,
    'Everything was Unchanged, and Miss Havisham was alone.',
    'Unchanged',
    ['Everything', 'Miss', 'Havisham'],
    { source: GREAT_EXPECTATIONS },
  ),
  word(
    3,
    'no capital',
    NOT,
    'Estella was Knitting, and Miss Havisham was looking on.',
    'Knitting',
    ['Estella', 'Miss', 'Havisham'],
    { source: GREAT_EXPECTATIONS },
  ),
  word(
    2,
    'names of people',
    NEEDS,
    'We shall have no peace at Longbourn if lydia does not go to Brighton.',
    'lydia',
    ['shall', 'peace', 'does'],
    { source: PRIDE },
  ),
  word(
    3,
    'no capital',
    NOT,
    'The Ladies of Longbourn soon waited on those of Netherfield.',
    'Ladies',
    ['The', 'Longbourn', 'Netherfield'],
    { source: PRIDE },
  ),
  word(
    2,
    'places',
    NEEDS,
    'You are all to come to pemberley at Christmas.',
    'pemberley',
    ['all', 'come', 'are'],
    { source: PRIDE },
  ),
  word(
    3,
    'no capital',
    NOT,
    "Charlotte's Reply was spared by the entrance of Jane and Elizabeth.",
    'Reply',
    ["Charlotte's", 'Jane', 'Elizabeth'],
    { source: PRIDE },
  ),
  word(
    3,
    'speech',
    TWO,
    '"My dear Mr. Bennet," said his lady to him one day, "Have you heard that Netherfield park is let at last?"',
    '‘Have’ and ‘park’',
    ['‘Mr.’ and ‘park’', '‘Have’ and ‘Bennet’', '‘Mr.’ and ‘Bennet’'],
    { source: PRIDE },
  ),
  word(
    3,
    'no capital',
    NOT,
    'From Italy they Visited Germany and France.',
    'Visited',
    ['Italy', 'Germany', 'France'],
    { source: FRANKENSTEIN },
  ),
  word(
    3,
    'no capital',
    NOT,
    'The Majority of people in London do not read Sunday papers.',
    'Majority',
    ['The', 'London', 'Sunday'],
    { source: WAR_OF_THE_WORLDS },
  ),
  word(
    3,
    'places',
    NEEDS,
    'We must go to the British museum and pick all those books through.',
    'museum',
    ['pick', 'books', 'through'],
    { source: WAR_OF_THE_WORLDS },
  ),
  word(
    3,
    'places',
    NOT,
    'I turned Northwards, marvelling, towards the iron gates of Hyde Park.',
    'Northwards',
    ['I', 'Hyde', 'Park'],
    { source: WAR_OF_THE_WORLDS, facts: ['rule:a direction takes a small letter'] },
  ),
  word(3, 'no capital', NOT, 'It was the Hand of Edward Hyde.', 'Hand', ['It', 'Edward', 'Hyde'], {
    source: JEKYLL,
  }),
  word(
    3,
    'no capital',
    NOT,
    'The Hatred of Hyde for Jekyll was of a different order.',
    'Hatred',
    ['The', 'Hyde', 'Jekyll'],
    { source: JEKYLL },
  ),
  word(
    3,
    'family names',
    NOT,
    'He thinks she goes to see her Sister in New York.',
    'Sister',
    ['He', 'New', 'York'],
    { source: GATSBY },
  ),
  word(
    3,
    'no capital',
    NOT,
    'A Fortnight of dubious calm succeeded my return to Thornfield Hall.',
    'Fortnight',
    ['A', 'Thornfield', 'Hall'],
    { source: JANE_EYRE },
  ),
  word(
    3,
    'no capital',
    NOT,
    'The Firm was known as Scrooge and Marley.',
    'Firm',
    ['The', 'Scrooge', 'Marley'],
    { source: CAROL },
  ),
  // Four different sentences: speech, titles, letters, history and geography
  which(3, 'speech', '“We are late,” said Amir, “so we must run.”', [
    '“we are late,” said Amir.',
    '“Come in,” Said Mrs Lee.',
    '“I know,” she said, “But I am very tired today.”',
  ]),
  which(3, 'speech', 'Mum asked, “Have you finished your homework?”', [
    'Dad said, “we are going out.”',
    '“Where is my bag?” Asked Sam.',
    '“It is raining,” said Ella. “bring your coat.”',
  ]),
  which(3, 'speech', '“If you are ready,” said the coach, “we can start.”', [
    '“Thank you,” said Miss Patel. “that was very kind of you.”',
    '“Good morning,” Said the head teacher.',
    '“I like it,” he said, “Because it is fun.”',
  ]),
  which(3, 'speech', '“See you on Monday,” said Mrs Grant.', [
    '“Bye,” Said Leo.',
    '“are you coming?” asked Ana.',
    '“We won,” she said. “we played well.”',
  ]),
  which(
    3,
    'titles of books and films',
    'We are reading The War of the Worlds in class.',
    [
      'Have you seen the film Finding nemo?',
      'My favourite book is The secret Garden.',
      'We watched Beauty And the Beast at the cinema last night.',
    ],
    { facts: ['rule:titles of books and films'] },
  ),
  which(
    3,
    'titles of books and films',
    'My sister’s favourite book is Pride and Prejudice.',
    [
      'I am reading great Expectations.',
      'Have you read Of mice and men?',
      'We saw A Christmas carol at the theatre at Christmas.',
    ],
    { facts: ['rule:titles of books and films'] },
  ),
  which(
    3,
    'titles of books and films',
    'Our class is studying Animal Farm by George Orwell.',
    [
      'We read jane Eyre last term.',
      'Is Frankenstein By Mary Shelley?',
      'I loved reading the hound of the Baskervilles last summer.',
    ],
    { facts: ['rule:titles of books and films'] },
  ),
  which(
    3,
    'titles of books and films',
    'Our play this year is A Midsummer Night’s Dream.',
    [
      'We are reading Twelfth night.',
      'My little brother likes the book treasure Island.',
      'Have you read Little women?',
    ],
    { facts: ['rule:titles of books and films'] },
  ),
  which(
    3,
    'letters',
    'Yours sincerely,',
    ['best wishes,', 'Dear mrs Ahmed,', 'dear Sir or Madam,'],
    {
      prompt: LINE,
      facts: ['rule:the lines of a letter'],
    },
  ),
  which(
    3,
    'letters',
    'Dear Mr Hughes,',
    ['Dear sir or madam,', 'yours faithfully,', 'Dear miss Carter,'],
    { prompt: LINE, facts: ['rule:the lines of a letter'] },
  ),
  which(
    3,
    'letters',
    'Best wishes, Hannah',
    ['kind regards, Oliver', 'Love, gran', 'Thanks again, leo'],
    {
      prompt: LINE,
      facts: ['rule:the lines of a letter'],
    },
  ),
  which(3, 'history and geography', 'The Second World War ended in 1945.', [
    'The first World War began in 1914.',
    'The Romans built Hadrian’s wall.',
    'The great Exhibition opened in 1851.',
  ]),
  which(3, 'history and geography', 'Queen Victoria ruled Britain for over sixty years.', [
    'The victorians built many railways.',
    'King henry VIII had six wives.',
    'The middle ages in Europe lasted about a thousand years.',
  ]),
  which(3, 'history and geography', 'Shakespeare wrote Macbeth in the early 1600s.', [
    'Charles Dickens lived in the victorian age.',
    'Jane austen wrote six novels.',
    'Mary Shelley wrote Frankenstein when she was a Teenager.',
  ]),
  which(
    3,
    'history and geography',
    'The Vikings came to Britain from Scandinavia.',
    [
      'The anglo-Saxons spoke Old English.',
      'The romans built roads across Europe.',
      'The Normans came to England from northern france.',
    ],
    { facts: ['word:romans'] },
  ),
  which(3, 'history and geography', 'The River Nile flows through Egypt.', [
    'Mount everest is the highest mountain.',
    'The Pacific ocean is very deep.',
    'The sahara Desert is in Africa.',
  ]),
  which(3, 'history and geography', 'London is the capital of England.', [
    'Cardiff is the Capital of Wales.',
    'Belfast is in northern ireland.',
    'The thames flows through the middle of London.',
  ]),
  which(
    3,
    'history and geography',
    'We drove south from York to London.',
    [
      'Many people live in south America.',
      'Japan is an island Country in Asia.',
      'We drove North to Glasgow.',
    ],
    { facts: ['rule:a direction takes a small letter'] },
  ),
  which(3, 'brands and organisations', 'My uncle works for the BBC in Salford.', [
    'She works for the united Nations.',
    'He joined the Royal navy.',
    'We visited the houses of Parliament in London.',
  ]),
  which(3, 'names of people', 'Mr Baker is a baker, and Mrs Cook is a cook.', [
    'Our neighbour, mr Gardener, loves his garden.',
    'Mrs Bell rang the Bell at lunchtime.',
    'Bill paid the Bill at the café.',
  ]),
  which(3, 'months', 'The concert is on Friday 14 March at seven o’clock.', [
    'The exam is on monday 12 May.',
    'Term ends on the last Friday in july.',
    'Her birthday party is on Saturday 3 June, in the Summer.',
  ]),
  which(3, 'the pronoun I', 'I’m sure I’ll see you before I leave.', [
    'i’m sure we will win.',
    'I think i’ll stay at home.',
    'If I’d known, I would have Come to see you.',
  ]),
  which(3, 'sentence start', 'Where is Omar? He is late again.', [
    'Is it raining? it looks cold.',
    'We were tired, So we went home.',
    'It was late. we caught the last bus.',
  ]),
  which(3, 'sentence start', 'I love autumn. The leaves turn red and gold.', [
    'I hate Winter. The days are short.',
    'It is spring. the birds are singing in the garden.',
    'Summer is here. We go to the Beach.',
  ]),
  which(3, 'sentence start', 'Our trip to Rome was in May. We saw the Colosseum.', [
    'We went to Paris in april. It was warm and sunny every day.',
    'The trip was fun. we loved the food.',
    'My aunt lives in Madrid. Her Flat is small.',
  ]),
  // Two words wrong in one sentence
  word(
    3,
    'several rules',
    TWO,
    'In the Summer, Mum and my brother visited paris.',
    '‘Summer’ and ‘paris’',
    ['‘Summer’ and ‘brother’', '‘brother’ and ‘paris’', '‘Mum’ and ‘brother’'],
  ),
  word(
    3,
    'family names',
    TWO,
    'Every Spring, aunt Sara takes us to the River Severn.',
    '‘Spring’ and ‘aunt’',
    ['‘Spring’ and ‘River’', '‘aunt’ and ‘River’', '‘River’ and ‘Sara’'],
  ),
  word(
    3,
    'places',
    TWO,
    'We drove North to see my grandad in scotland.',
    '‘North’ and ‘scotland’',
    ['‘North’ and ‘grandad’', '‘grandad’ and ‘scotland’', '‘my’ and ‘grandad’'],
    { facts: ['rule:a direction takes a small letter'] },
  ),
  word(3, 'titles', TWO, 'At the weekend, Mrs patel taught us a new Song.', '‘patel’ and ‘Song’', [
    '‘Mrs’ and ‘patel’',
    '‘weekend’ and ‘Song’',
    '‘Mrs’ and ‘weekend’',
  ]),
  word(
    3,
    'languages and nationalities',
    TWO,
    'My cousin speaks french, Arabic and English, and he loves Football.',
    '‘french’ and ‘Football’',
    ['‘french’ and ‘Arabic’', '‘Arabic’ and ‘Football’', '‘Arabic’ and ‘English’'],
    { facts: ['rule:sports take a small letter'] },
  ),
  word(
    3,
    'festivals',
    TWO,
    'Last december we watched the fireworks on New year’s Eve.',
    '‘december’ and ‘year’s’',
    ['‘december’ and ‘fireworks’', '‘fireworks’ and ‘year’s’', '‘New’ and ‘Eve’'],
  ),
  word(
    3,
    'titles',
    TWO,
    'My Teacher, mr Hall, lives near the river in Bath.',
    '‘Teacher’ and ‘mr’',
    ['‘mr’ and ‘river’', '‘Teacher’ and ‘river’', '‘river’ and ‘Bath’'],
  ),
  word(
    3,
    'history and geography',
    TWO,
    'On monday we have a test on the Romans and the Vikings, so I am revising with my Sister.',
    '‘monday’ and ‘Sister’',
    ['‘monday’ and ‘Romans’', '‘Romans’ and ‘Vikings’', '‘Vikings’ and ‘Sister’'],
  ),
  word(3, 'speech', TWO, '“come and see,” said Leo. “it is snowing.”', '‘come’ and ‘it’', [
    '‘come’ and ‘said’',
    '‘said’ and ‘it’',
    '‘said’ and ‘Leo’',
  ]),
  word(
    3,
    'titles of books and films',
    TWO,
    'Our class watched Romeo And juliet at the theatre.',
    '‘And’ and ‘juliet’',
    ['‘Romeo’ and ‘juliet’', '‘And’ and ‘theatre’', '‘Romeo’ and ‘theatre’'],
  ),
  word(
    3,
    'titles',
    TWO,
    'I wrote to mrs Shaw to thank her for the Present.',
    '‘mrs’ and ‘Present’',
    ['‘I’ and ‘mrs’', '‘Shaw’ and ‘Present’', '‘I’ and ‘Shaw’'],
  ),
  word(
    3,
    'history and geography',
    TWO,
    'The great fire of London started in a bakery in Pudding Lane.',
    '‘great’ and ‘fire’',
    ['‘great’ and ‘bakery’', '‘fire’ and ‘Lane’', '‘bakery’ and ‘Lane’'],
  ),
]

export const QUESTION_BANK: CapitalQuestion[] = [...TIER_1, ...TIER_2, ...TIER_3]

/** A text's words in small letters, apostrophes kept: "Lena’s" is "lena's". */
function wordsIn(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .split(/[^a-z']+/)
    .map((w) => w.replace(/^'+|'+$/g, ''))
    .filter(Boolean)
}

/**
 * The words that a question about one word turns on: its answer ("wales",
 * "Summer"), and for two words each of them. Another question whose sentence
 * prints that word, in either case, shows how it is written, so the two share
 * a fact and are never dealt in one round (see the docblock).
 */
const WORD_ANSWERS = (() => {
  const answers = new Set(
    QUESTION_BANK.filter((q) => q.sentence).flatMap((q) =>
      q.options[q.answerIndex].split(' and ').flatMap(wordsIn),
    ),
  )
  // A word printed in more than a dozen sentences ("have", "my") tells a
  // student nothing about any one question, and would keep too much apart.
  const printed = new Map<string, number>()
  for (const q of QUESTION_BANK)
    for (const w of new Set(wordsIn(q.sentence ?? q.options[q.answerIndex])))
      printed.set(w, (printed.get(w) ?? 0) + 1)
  return new Set([...answers].filter((w) => (printed.get(w) ?? 0) <= 12))
})()

export const BANK: GameBank<CapitalQuestion> = {
  slug: 'capital-letter-quest',
  items: QUESTION_BANK,
  // A question about one word is named by its sentence; any other by its right
  // answer, one of the four sentences the student sees. No two are alike.
  key: (q) => q.sentence ?? q.options[q.answerIndex],
  answer: (q) => q.options[q.answerIndex],
  options: (q) => q.options,
  tag: (q) => q.topic,
  tier: (q) => q.tier,
  deepened: '2026-10-24',
  facts: (q) => [
    ...(q.facts ?? []),
    // The page names the book after each real line, and a title can hold
    // another line's answer ("A Christmas Carol", "Dr Jekyll"): one line of
    // a book to a round.
    ...(q.source ? [`source:${q.source}`] : []),
    ...new Set(
      wordsIn(q.sentence ?? q.options[q.answerIndex])
        .filter((w) => w.length > 1 && WORD_ANSWERS.has(w))
        .map((w) => `word:${w}`),
    ),
  ],
}
