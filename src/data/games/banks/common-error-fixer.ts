import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Fix the Common Mistake: each sentence has one typical English mistake (two
 * at the top tier), and the student chooses the right correction of four.
 *
 * Moved out of src/app/games/common-error-fixer/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * game marks one option right and tells the student the sentence has ONE
 * mistake, so every other option must be wrong. In five questions it was not:
 *
 *   - "It cost ten pounds." is correct English: "cost" is also the past tense,
 *     and the sentence gave no time. A student who read it as the past and chose
 *     the unchanged sentence was marked wrong. The sentence and its options now
 *     end "now", which only the present fits ("It costs ten pounds now.");
 *   - "He bought a umbrella yesterday." offered "He bought the umbrella
 *     yesterday.", and "He is engineer from Egypt." offered "He is the engineer
 *     from Egypt.". Both are correct sentences that change the meaning instead
 *     of mending the article. They are now "He bought an umbrellas yesterday."
 *     and "He is an engineer from the Egypt.", which no one can defend;
 *   - "Where you are going now?" offered "You are going where now?", a correct
 *     echo question ("You are going WHERE?"). It is now "Where are going you
 *     now?";
 *   - "I like very much this book." offered "I very much like this book." and
 *     "This book I like very much.", and both are correct English (the first is
 *     ordinary British English, the second puts the object first). They are now
 *     "I very like this book." and "I like this book very.". Its one-line rule
 *     said "Very much goes at the end", which is not the rule: the mistake is
 *     the adverb between the verb and its object, so the rule now says that.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy". Measured that day (.tmp-games-audit/REPORT-eal.md): the
 * faulty sentence was itself one of the four options in all 53 questions, so a
 * student who struck it out chose from three; the error type was shown as a
 * badge before answering, which named the rule; and a round of 15 from 53
 * repeated two thirds of itself by the fifth play. And measured on a first
 * draft of new options: where each wrong option is the right one with a
 * single change, "pick the option most like the other three" finds the answer
 * in 90 per cent of questions. Now:
 *
 *   - the four options are four CORRECTIONS, one right; the faulty sentence is
 *     never offered. The wrong ones are crossed in a square, so that no option
 *     sits in the middle of the others: the mistake mended the wrong way ("an
 *     student"), the mistake mended and a new slip made ("He buyed an
 *     umbrella"), and both together; or a change in the wrong place that leaves
 *     the mistake. The consensus pick now finds the answer in a quarter of
 *     questions, chance; the answer is the unique longest option in 8 per cent
 *     and the unique shortest in 27;
 *   - the page names the error type only after the answer;
 *   - 240 questions, 80 a tier. Tier 1 (A1): a and an, "be", the -s of he and
 *     she, on Monday and in June, he and she, my and your, plurals, simple
 *     questions and negatives, there is and there are. Tier 2 (A2): past and
 *     present tenses, the present perfect with since and for, comparatives,
 *     countable nouns, verb patterns (enjoy -ing, want someone to, let and
 *     make), make and do, say and tell, dependent prepositions, -ed and -ing
 *     adjectives. Tier 3 (B1): a sentence or a short text with TWO mistakes
 *     ("My brother work in a bank and he don’t like it."), its kinds in
 *     `kinds`. Its wrong options mend one mistake and leave the other, or mend
 *     one wrongly, so both must be known. Thirteen tier 3 sentences are real
 *     lines from books out of UK copyright (Jane Eyre, A Christmas Carol, Great
 *     Expectations, Animal Farm, The Sign of Four), checked word for word
 *     against src/data/full-texts/, with two mistakes put in; `source` names
 *     the book, the page says so, and the right answer is the line as printed;
 *   - `facts` names what a question turns on: the corrected form as the answer
 *     prints it ("went", "interested in") or a rule ("rule:at with clock
 *     times"), and every other question whose sentence or explanation shows it
 *     shares it, so the two are never dealt in one round. Explanations were
 *     rewritten wherever they listed another question's answer;
 *   - the one-line rules the page showed before 16 October (`explanation`)
 *     are dropped: nothing has read them since the explanation panel replaced
 *     them, and git keeps them.
 *
 * THE 53 EARLIER QUESTIONS keep their faulty sentences and right answers, and
 * all lost the faulty sentence as an option and gained the crossed wrong
 * options above, with new "why not" entries. Wrong options dropped on the way,
 * because a careful reader could defend them or no learner writes them:
 *
 *   - "I am the student at this college." is a correct sentence (one
 *     particular student);
 *   - "She always is late for class." is correct with stress on "is";
 *   - "He arrived in the airport late." can be defended (inside the building);
 *   - "I do know nothing not about it.", "He can find his keys nowhere not.",
 *     "They never don’t go nowhere on holiday.", "I have car a red.", "She
 *     speaks well very English.", "Where going you are now?", "Do you know is
 *     where the station?" and "We arrived by 9 o’clock late." are scrambles
 *     that mend nothing;
 *   - "Where are going you now?", the 16 October replacement above, gave way
 *     to the crossed options.
 *
 * Removed: "The teacher gave us homework. She told us his name." Its "his" can
 * name another man, so the faulty sentence is arguably correct. It is replaced
 * by "My sister is ten. His name is Hana.", where only the sister can be meant.
 *
 * CHECKED BY A SECOND READER (31 October 2026), every question and its
 * options. What was wrong, and what changed:
 *
 *   - "He maked a cake": "He did a cake for my birthday." was marked wrong,
 *     but informal British English does a cake ("Mum did the cake"). Both
 *     "did" options are now "maded", the past made twice;
 *   - the first line of Jane Eyre: "There is no possibility of taking a walk
 *     that day." was marked wrong, but "that day" can be a day still to come,
 *     so it is correct English, and it reads as the book's own line. Both "is"
 *     options are now "are", plural against "possibility";
 *   - "My mother made me to clean my room before I can go out." could be read
 *     with the going out still to come, which makes "before I can go out"
 *     right. It now starts "Yesterday", so only "could" fits;
 *   - "There are many cares in the street.": "cares" is a different word
 *     (worries), not a mistake learners make. It is now "car’s", the
 *     apostrophe plural learners do write;
 *   - kept apart, because one's explanation teaches the other's answer: "box"
 *     and "watch" with "brother" and "go" (-es after s, x, z, ch and sh);
 *     "Every students ... nobody bring" with "everyone" and "everybody", and
 *     with "every days" and "every day" (singular after every and after
 *     everyone); "five child" with "the people is" (person, people).
 */

export type ErrorType =
  | 'Articles'
  | 'Verb "to be"'
  | 'Subject-verb agreement'
  | 'Prepositions'
  | 'Double negative'
  | 'Word order'
  | 'He / she'
  | 'Plural "s"'
  | 'Pronouns'
  | 'Questions'
  | 'Negatives'
  | 'Modal verbs'
  | 'Past tense'
  | 'Present tenses'
  | 'Present perfect'
  | 'Future'
  | 'Conditionals'
  | 'Comparatives'
  | 'Countable nouns'
  | 'Verb patterns'
  | 'Word choice'
  | 'Adjectives'
  | 'Linking words'
  | 'Relative clauses'
  | 'Two mistakes'

export interface ErrorItem {
  /** The sentence the student sees: one mistake, or two at tier 3. */
  wrong: string
  /** Four candidate corrections, one right. The page shuffles them for every attempt. */
  options: [string, string, string, string]
  answerIndex: number
  /** The mistake, recorded with each answer: "Two mistakes" at tier 3. */
  errorType: ErrorType
  /** 1 A1, 2 A2, 3 B1 (two mistakes). */
  tier: 1 | 2 | 3
  /** At tier 3: the two mistakes. */
  kinds?: readonly [ErrorType, ErrorType]
  /**
   * What the question turns on: the corrected word or phrase as the answer
   * prints it, or a rule ("rule:..."). Two questions sharing one are never
   * dealt in one round, so one cannot teach the other's answer.
   */
  facts?: readonly string[]
  /** For a real line from a book: where it comes from. The answer is the line as printed. */
  source?: string
}

type Extra = Pick<ErrorItem, 'facts' | 'source'>

/**
 * One question: the right correction, then three wrong ones. The right one is
 * placed where the sentence's own hash puts it; the page shuffles the four
 * again for every attempt and marks the sentence chosen, so no position is a
 * cue.
 */
function fix(
  tier: 1 | 2,
  errorType: ErrorType,
  wrong: string,
  answer: string,
  wrongs: readonly [string, string, string],
  extra: Extra = {},
): ErrorItem {
  return build({ wrong, answer, wrongs, errorType, tier, ...extra })
}

/** A tier 3 question: a sentence or a short text with two mistakes. */
function two(
  kinds: readonly [ErrorType, ErrorType],
  wrong: string,
  answer: string,
  wrongs: readonly [string, string, string],
  extra: Extra = {},
): ErrorItem {
  return build({ wrong, answer, wrongs, errorType: 'Two mistakes', tier: 3, kinds, ...extra })
}

function build(q: {
  wrong: string
  answer: string
  wrongs: readonly [string, string, string]
  errorType: ErrorType
  tier: 1 | 2 | 3
  kinds?: readonly [ErrorType, ErrorType]
  facts?: readonly string[]
  source?: string
}): ErrorItem {
  let h = 7
  for (const c of q.wrong) h = (h * 31 + c.charCodeAt(0)) >>> 0
  const at = h % 4
  const options = [...q.wrongs]
  options.splice(at, 0, q.answer)
  const item: ErrorItem = {
    wrong: q.wrong,
    options: options as ErrorItem['options'],
    answerIndex: at,
    errorType: q.errorType,
    tier: q.tier,
  }
  if (q.kinds) item.kinds = q.kinds
  if (q.facts) item.facts = q.facts
  if (q.source) item.source = q.source
  return item
}

// ── Tier 1 (A1): the first rules ────────────────────────────────────────────
const TIER_1: ErrorItem[] = [
  // Articles
  fix(
    1,
    'Articles',
    'I am student at this college.',
    'I am a student at this college.',
    [
      'I am an student at this college.',
      'I am student at the college.',
      'I am an student at the college.',
    ],
    { facts: ['a student'] },
  ),
  fix(
    1,
    'Articles',
    'He bought a umbrella yesterday.',
    'He bought an umbrella yesterday.',
    [
      'He bought an umbrellas yesterday.',
      'He buyed an umbrella yesterday.',
      'He buyed an umbrellas yesterday.',
    ],
    { facts: ['an umbrella', 'bought', 'rule:silent h takes an'] },
  ),
  fix(
    1,
    'Articles',
    'She plays the football on Sundays.',
    'She plays football on Sundays.',
    [
      'She plays a football on Sundays.',
      'She play football on Sundays.',
      'She play a football on Sundays.',
    ],
    { facts: ['plays football', 'rule:no article before a sport', 'rule:on with days'] },
  ),
  fix(
    1,
    'Articles',
    'He is engineer from Egypt.',
    'He is an engineer from Egypt.',
    [
      'He is a engineer from Egypt.',
      'He is an engineer from the Egypt.',
      'He is a engineer from the Egypt.',
    ],
    { facts: ['an engineer', 'rule:no the before a country'] },
  ),
  // Verb "to be"
  fix(1, 'Verb "to be"', 'She very tired today.', 'She is very tired today.', [
    'She are very tired today.',
    'She is very much tired today.',
    'She are very much tired today.',
  ]),
  fix(1, 'Verb "to be"', 'They happy with the result.', 'They are happy with the result.', [
    'They is happy with the result.',
    'Them are happy with the result.',
    'Them is happy with the result.',
  ]),
  fix(1, 'Verb "to be"', 'I a teacher at this school.', 'I am a teacher at this school.', [
    'I are a teacher at this school.',
    'I am teacher at this school.',
    'I are teacher at this school.',
  ]),
  fix(
    1,
    'Verb "to be"',
    'The weather very hot in summer.',
    'The weather is very hot in summer.',
    [
      'The weather are very hot in summer.',
      'The weather is very hot on summer.',
      'The weather are very hot on summer.',
    ],
    { facts: ['in summer', 'rule:weather is singular'] },
  ),
  fix(1, 'Verb "to be"', 'He not ready for the exam.', 'He is not ready for the exam.', [
    'He are not ready for the exam.',
    'He is not ready for exam.',
    'He are not ready for exam.',
  ]),
  fix(
    1,
    'Verb "to be"',
    'My parents at home now.',
    'My parents are at home now.',
    ['My parents is at home now.', 'My parents are in home now.', 'My parents is in home now.'],
    { facts: ['at home'] },
  ),
  // Subject-verb agreement
  fix(
    1,
    'Subject-verb agreement',
    'He go to the gym every morning.',
    'He goes to the gym every morning.',
    [
      'He gos to the gym every morning.',
      'He goes to gym every morning.',
      'He gos to gym every morning.',
    ],
    { facts: ['goes to', 'rule:-es after s x z ch sh'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'My sister live in London.',
    'My sister lives in London.',
    ['My sister is live in London.', 'My sister lives at London.', 'My sister is live at London.'],
    { facts: ['lives'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'The students works very hard.',
    'The students work very hard.',
    [
      'The students are work very hard.',
      'The students work very hardly.',
      'The students are work very hardly.',
    ],
    { facts: ['students work'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'She have two brothers.',
    'She has two brothers.',
    ['She haves two brothers.', 'She has two brother.', 'She haves two brother.'],
    { facts: ['rule:has after he she it', 'brothers'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'My friend do not like coffee.',
    'My friend does not like coffee.',
    [
      'My friend does not likes coffee.',
      'My friends does not like coffee.',
      'My friends does not likes coffee.',
    ],
    { facts: ['does not like', 'doesn’t like'] },
  ),
  // Prepositions
  fix(
    1,
    'Prepositions',
    'I will see you in Monday.',
    'I will see you on Monday.',
    ['I will see you at Monday.', 'I will to see you on Monday.', 'I will to see you at Monday.'],
    { facts: ['on monday', 'rule:on with days'] },
  ),
  fix(
    1,
    'Prepositions',
    'We arrived in 9 o’clock.',
    'We arrived at 9 o’clock.',
    ['We arrived on 9 o’clock.', 'We arrived at 9 hours.', 'We arrived on 9 hours.'],
    { facts: ['rule:at with clock times', 'arrived at'] },
  ),
  fix(
    1,
    'Prepositions',
    'I was born in 15 May.',
    'I was born on 15 May.',
    ['I was born at 15 May.', 'I born on 15 May.', 'I born at 15 May.'],
    { facts: ['was born', 'rule:on with dates'] },
  ),
  // Word order
  fix(
    1,
    'Word order',
    'I have a car red.',
    'I have a red car.',
    ['I have red a car.', 'I have a red cars.', 'I have red a cars.'],
    { facts: ['a red car'] },
  ),
  fix(
    1,
    'Word order',
    'Where you are going now?',
    'Where are you going now?',
    ['Where do you going now?', 'Where you are going tonight?', 'Where do you going tonight?'],
    { facts: ['where are you going'] },
  ),
  // He / she
  fix(
    1,
    'He / she',
    'My mother is a doctor. He works in a hospital.',
    'My mother is a doctor. She works in a hospital.',
    [
      'My mother is a doctor. It works in a hospital.',
      'My mother is a doctor. She work in a hospital.',
      'My mother is a doctor. It work in a hospital.',
    ],
    { facts: ['a doctor', 'works in'] },
  ),
  fix(
    1,
    'He / she',
    'My brother is kind. She helps everyone.',
    'My brother is kind. He helps everyone.',
    [
      'My brother is kind. Him helps everyone.',
      'My brother is kind. He help everyone.',
      'My brother is kind. Him help everyone.',
    ],
  ),
  fix(
    1,
    'He / she',
    'This is my friend Sara. He is from Jordan.',
    'This is my friend Sara. She is from Jordan.',
    [
      'This is my friend Sara. Her is from Jordan.',
      'This is my friend Sara. She are from Jordan.',
      'This is my friend Sara. Her are from Jordan.',
    ],
  ),
  fix(
    1,
    'He / she',
    'I have a son. She is six years old.',
    'I have a son. He is six years old.',
    [
      'I have a son. Him is six years old.',
      'I have a son. He has six years old.',
      'I have a son. Him has six years old.',
    ],
    { facts: ['rule:an age takes be'] },
  ),
  fix(
    1,
    'He / she',
    'My sister is ten. His name is Hana.',
    'My sister is ten. Her name is Hana.',
    [
      'My sister is ten. Hers name is Hana.',
      'My sister is ten. Her name are Hana.',
      'My sister is ten. Hers name are Hana.',
    ],
    { facts: ['her name'] },
  ),
  // Plural "s"
  fix(
    1,
    'Plural "s"',
    'I have three brother.',
    'I have three brothers.',
    ['I have three brother’s.', 'I has three brothers.', 'I has three brother’s.'],
    { facts: ['brothers', 'rule:-es after s x z ch sh'] },
  ),
  fix(
    1,
    'Plural "s"',
    'There are many car in the street.',
    'There are many cars in the street.',
    [
      'There are many car’s in the street.',
      'There is many cars in the street.',
      'There is many car’s in the street.',
    ],
    { facts: ['many cars', 'there are many'] },
  ),
  fix(
    1,
    'Plural "s"',
    'She bought two box of apples.',
    'She bought two boxes of apples.',
    [
      'She bought two boxs of apples.',
      'She bought two boxes of apple.',
      'She bought two boxs of apple.',
    ],
    { facts: ['boxes', 'bought', 'rule:-es after s x z ch sh'] },
  ),
  fix(
    1,
    'Plural "s"',
    'There are five child in the room.',
    'There are five children in the room.',
    [
      'There are five childrens in the room.',
      'There is five children in the room.',
      'There is five childrens in the room.',
    ],
    { facts: ['children', 'rule:people is plural'] },
  ),
  fix(
    1,
    'Plural "s"',
    'He has many friend at school.',
    'He has many friends at school.',
    [
      'He has many friendes at school.',
      'He have many friends at school.',
      'He have many friendes at school.',
    ],
    { facts: ['many friends'] },
  ),
  fix(
    1,
    'Plural "s"',
    'We saw three woman at the door.',
    'We saw three women at the door.',
    [
      'We saw three womens at the door.',
      'We seen three women at the door.',
      'We seen three womens at the door.',
    ],
    { facts: ['women', 'saw'] },
  ),
  fix(
    1,
    'Plural "s"',
    'There are a lot of book on the shelf.',
    'There are a lot of books on the shelf.',
    [
      'There are a lot of bookes on the shelf.',
      'There are a lots of books on the shelf.',
      'There are a lots of bookes on the shelf.',
    ],
    { facts: ['a lot of books'] },
  ),
  // ── Added 24 October 2026 ──
  // Articles
  fix(
    1,
    'Articles',
    'My aunt is a artist in Paris.',
    'My aunt is an artist in Paris.',
    [
      'My aunt is artist in Paris.',
      'My aunt are an artist in Paris.',
      'My aunt are artist in Paris.',
    ],
    { facts: ['an artist'] },
  ),
  fix(
    1,
    'Articles',
    'I eat a orange after lunch.',
    'I eat an orange after lunch.',
    [
      'I eat an oranges after lunch.',
      'I eats an orange after lunch.',
      'I eats an oranges after lunch.',
    ],
    { facts: ['an orange'] },
  ),
  fix(
    1,
    'Articles',
    'We have an new teacher.',
    'We have a new teacher.',
    ['We have new teacher.', 'We has a new teacher.', 'We has new teacher.'],
    { facts: ['a new teacher'] },
  ),
  fix(
    1,
    'Articles',
    'It is a old house.',
    'It is an old house.',
    ['It is an old houses.', 'It are an old house.', 'It are an old houses.'],
    { facts: ['an old house'] },
  ),
  fix(
    1,
    'Articles',
    'My father is doctor.',
    'My father is a doctor.',
    ['My father is an doctor.', 'My father are a doctor.', 'My father are an doctor.'],
    { facts: ['a doctor'] },
  ),
  // Verb "to be"
  fix(
    1,
    'Verb "to be"',
    'I have twelve years old.',
    'I am twelve years old.',
    ['I is twelve years old.', 'I am twelve year old.', 'I is twelve year old.'],
    { facts: ['rule:an age takes be'] },
  ),
  fix(1, 'Verb "to be"', 'You is my best friend.', 'You are my best friend.', [
    'You am my best friend.',
    'You are me best friend.',
    'You am me best friend.',
  ]),
  fix(1, 'Verb "to be"', 'We is in the same class.', 'We are in the same class.', [
    'We was in the same class.',
    'We are in same class.',
    'We was in same class.',
  ]),
  fix(
    1,
    'Verb "to be"',
    'There is two cats in the garden.',
    'There are two cats in the garden.',
    [
      'There has two cats in the garden.',
      'There are two cat in the garden.',
      'There has two cat in the garden.',
    ],
    { facts: ['there are two'] },
  ),
  fix(
    1,
    'Verb "to be"',
    'It has a park near my house.',
    'There is a park near my house.',
    [
      'There has a park near my house.',
      'There are a park near my house.',
      'It have a park near my house.',
    ],
    { facts: ['rule:there is for something that exists'] },
  ),
  fix(
    1,
    'Verb "to be"',
    'There are a bank in the town centre.',
    'There is a bank in the town centre.',
    [
      'There has a bank in the town centre.',
      'There is an bank in the town centre.',
      'There has an bank in the town centre.',
    ],
    { facts: ['rule:there is for something that exists'] },
  ),
  fix(
    1,
    'Verb "to be"',
    'The shops is closed on Sunday.',
    'The shops are closed on Sunday.',
    [
      'The shops was closed on Sunday.',
      'The shops are closed in Sunday.',
      'The shops was closed in Sunday.',
    ],
    { facts: ['shops are', 'rule:on with days'] },
  ),
  // Subject-verb agreement
  fix(
    1,
    'Subject-verb agreement',
    'She watch TV every evening.',
    'She watches TV every evening.',
    [
      'She watchs TV every evening.',
      'She watches TV every evenings.',
      'She watchs TV every evenings.',
    ],
    { facts: ['watches', 'rule:-es after s x z ch sh'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'My uncle work in a hotel.',
    'My uncle works in a hotel.',
    ['My uncle is work in a hotel.', 'My uncle works in hotel.', 'My uncle is work in hotel.'],
    { facts: ['works in'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'The baby cry at night.',
    'The baby cries at night.',
    ['The baby crys at night.', 'The baby cries at the night.', 'The baby crys at the night.'],
    { facts: ['cries', 'at night'] },
  ),
  fix(
    1,
    'Subject-verb agreement',
    'He don’t eat meat.',
    'He doesn’t eat meat.',
    ['He doesn’t eats meat.', 'Him doesn’t eat meat.', 'Him doesn’t eats meat.'],
    { facts: ['doesn’t eat'] },
  ),
  // Prepositions
  fix(
    1,
    'Prepositions',
    'I get up at the morning.',
    'I get up in the morning.',
    ['I get up on the morning.', 'I gets up in the morning.', 'I gets up on the morning.'],
    { facts: ['in the morning'] },
  ),
  fix(
    1,
    'Prepositions',
    'We go to the beach on summer.',
    'We go to the beach in summer.',
    ['We go to the beach at summer.', 'We go to beach in summer.', 'We go to beach at summer.'],
    { facts: ['in summer'] },
  ),
  fix(
    1,
    'Prepositions',
    'My birthday is on June.',
    'My birthday is in June.',
    ['My birthday is at June.', 'My birthday is in the June.', 'My birthday is at the June.'],
    { facts: ['in june', 'rule:in with months'] },
  ),
  fix(
    1,
    'Prepositions',
    'The film starts in half past seven.',
    'The film starts at half past seven.',
    [
      'The film starts on half past seven.',
      'The film starts at half past of seven.',
      'The film starts on half past of seven.',
    ],
    { facts: ['rule:at with clock times'] },
  ),
  fix(
    1,
    'Prepositions',
    'I go to school with bus.',
    'I go to school by bus.',
    ['I go to school on bus.', 'I go to school by the bus.', 'I go to school with the bus.'],
    { facts: ['by bus'] },
  ),
  // He / she
  fix(
    1,
    'He / she',
    'My grandmother is 80. He lives with us.',
    'My grandmother is 80. She lives with us.',
    [
      'My grandmother is 80. Her lives with us.',
      'My grandmother is 80. She live with us.',
      'My grandmother is 80. Her live with us.',
    ],
    { facts: ['lives'] },
  ),
  fix(
    1,
    'He / she',
    'My uncle has a shop. She sells bread.',
    'My uncle has a shop. He sells bread.',
    [
      'My uncle has a shop. Him sells bread.',
      'My uncle has a shop. He sell bread.',
      'My uncle has a shop. Him sell bread.',
    ],
  ),
  // Pronouns
  fix(
    1,
    'Pronouns',
    'Is cold today.',
    'It is cold today.',
    ['There is cold today.', 'Is very cold today.', 'There is very cold today.'],
    { facts: ['rule:it for the weather'] },
  ),
  fix(1, 'Pronouns', 'Them are my friends.', 'They are my friends.', [
    'Their are my friends.',
    'They are my friend.',
    'Their are my friend.',
  ]),
  fix(
    1,
    'Pronouns',
    'I like she very much.',
    'I like her very much.',
    ['I like herself very much.', 'I likes her very much.', 'I likes herself very much.'],
    { facts: ['very much'] },
  ),
  fix(
    1,
    'Pronouns',
    'Is this you bag?',
    'Is this your bag?',
    ['Is this yours bag?', 'Is these your bag?', 'Is these yours bag?'],
    { facts: ['your bag'] },
  ),
  fix(
    1,
    'Pronouns',
    'Me name is Ali.',
    'My name is Ali.',
    ['Mine name is Ali.', 'My name are Ali.', 'Mine name are Ali.'],
    { facts: ['my name'] },
  ),
  // Questions
  fix(
    1,
    'Questions',
    'Does she likes music?',
    'Does she like music?',
    ['Do she likes music?', 'Do she like music?', 'Does she liking music?'],
    { facts: ['does she like'] },
  ),
  fix(
    1,
    'Questions',
    'Where you live?',
    'Where do you live?',
    ['Where does you live?', 'Where do you lives?', 'Where does you lives?'],
    { facts: ['where do you live'] },
  ),
  fix(
    1,
    'Questions',
    'How old you are?',
    'How old are you?',
    ['How old is you?', 'How old have you?', 'How many years have you?'],
    { facts: ['how old are you', 'rule:an age takes be'] },
  ),
  fix(
    1,
    'Questions',
    'Are you like pizza?',
    'Do you like pizza?',
    ['Does you like pizza?', 'Do you likes pizza?', 'Does you likes pizza?'],
    { facts: ['do you like'] },
  ),
  fix(
    1,
    'Questions',
    'What she is doing?',
    'What is she doing?',
    ['What does she doing?', 'What she is making?', 'What does she making?'],
    { facts: ['what is she doing'] },
  ),
  fix(
    1,
    'Questions',
    'What you want?',
    'What do you want?',
    ['What does you want?', 'What do you wants?', 'What does you wants?'],
    { facts: ['what do you want'] },
  ),
  // Modal verbs
  fix(
    1,
    'Modal verbs',
    'Can you to help me?',
    'Can you help me?',
    ['Can you helping me?', 'Can you help I?', 'Can you helping I?'],
    { facts: ['can you help'] },
  ),
  fix(
    1,
    'Modal verbs',
    'She can swims very well.',
    'She can swim very well.',
    ['She can to swim very well.', 'She can swim very good.', 'She can to swim very good.'],
    { facts: ['can swim', 'rule:good and well'] },
  ),
  fix(
    1,
    'Modal verbs',
    'I can to speak three languages.',
    'I can speak three languages.',
    [
      'I can speaking three languages.',
      'I can speak three language.',
      'I can speaking three language.',
    ],
    { facts: ['can speak'] },
  ),
  // Plural "s", and this and these
  fix(
    1,
    'Plural "s"',
    'These book is mine.',
    'This book is mine.',
    ['This book are mine.', 'These books is mine.', 'This books is mine.'],
    { facts: ['this book'] },
  ),
  fix(
    1,
    'Plural "s"',
    'This shoes are new.',
    'These shoes are new.',
    ['This shoes is new.', 'These shoe are new.', 'These shoes is new.'],
    { facts: ['these shoes'] },
  ),
  fix(
    1,
    'Plural "s"',
    'My baby has two tooth.',
    'My baby has two teeth.',
    ['My baby has two teeths.', 'My baby have two teeth.', 'My baby have two teeths.'],
    { facts: ['teeth'] },
  ),
  fix(
    1,
    'Plural "s"',
    'My foots are cold.',
    'My feet are cold.',
    ['My feets are cold.', 'My feet is cold.', 'My feets is cold.'],
    { facts: ['feet'] },
  ),
  fix(
    1,
    'Plural "s"',
    'I eat two banana every day.',
    'I eat two bananas every day.',
    [
      'I eat two banana’s every day.',
      'I eat two bananas every days.',
      'I eat two banana’s every days.',
    ],
    { facts: ['bananas', 'every day', 'rule:every takes a singular noun'] },
  ),
  // Word order
  fix(
    1,
    'Word order',
    'Is big your house?',
    'Is your house big?',
    ['Is your big house?', 'Is you house big?', 'Is you big house?'],
    { facts: ['is your house big'] },
  ),
  fix(
    1,
    'Word order',
    'She is a girl clever.',
    'She is a clever girl.',
    ['She is clever a girl.', 'She is an clever girl.', 'She is clever an girl.'],
    { facts: ['a clever girl'] },
  ),
  // Negatives
  fix(
    1,
    'Negatives',
    'No touch the oven. It is hot.',
    'Don’t touch the oven. It is hot.',
    [
      'Not touch the oven. It is hot.',
      'Don’t touching the oven. It is hot.',
      'Not touching the oven. It is hot.',
    ],
    { facts: ['don’t touch'] },
  ),
  fix(
    1,
    'Negatives',
    'I no like cold weather.',
    'I don’t like cold weather.',
    [
      'I doesn’t like cold weather.',
      'I don’t likes cold weather.',
      'I doesn’t likes cold weather.',
    ],
    { facts: ['don’t like'] },
  ),
  fix(
    1,
    'Negatives',
    'She not works on Fridays.',
    'She doesn’t work on Fridays.',
    ['She don’t work on Fridays.', 'She doesn’t works on Fridays.', 'She don’t works on Fridays.'],
    { facts: ['doesn’t work', 'rule:on with days'] },
  ),
  // Countable nouns
  fix(
    1,
    'Countable nouns',
    'My sister has got long hairs.',
    'My sister has got long hair.',
    [
      'My sister have got long hair.',
      'My sister have got long hairs.',
      'My sister has got longs hair.',
    ],
    { facts: ['long hair', 'rule:hair is uncountable'] },
  ),
]

// ── Tier 2 (A2): tenses, patterns and near neighbours ───────────────────────
const TIER_2: ErrorItem[] = [
  // Articles
  fix(
    2,
    'Articles',
    'She is best teacher in the school.',
    'She is the best teacher in the school.',
    [
      'She is the most best teacher in the school.',
      'She is best teacher of the school.',
      'She is the most best teacher of the school.',
    ],
    { facts: ['the best'] },
  ),
  fix(
    2,
    'Articles',
    'I go to the work by bus every day.',
    'I go to work by bus every day.',
    [
      'I go to a work by bus every day.',
      'I go to work by the bus every day.',
      'I go to a work by the bus every day.',
    ],
    { facts: ['go to work', 'by bus', 'every day'] },
  ),
  fix(
    2,
    'Articles',
    'The honesty is very important.',
    'Honesty is very important.',
    [
      'An honesty is very important.',
      'Honesty are very important.',
      'An honesty are very important.',
    ],
    { facts: ['honesty', 'rule:silent h takes an'] },
  ),
  fix(
    2,
    'Articles',
    'I have a information for you.',
    'I have some information for you.',
    [
      'I have some informations for you.',
      'I have an information for you.',
      'I have an informations for you.',
    ],
    { facts: ['information'] },
  ),
  // Subject-verb agreement
  fix(
    2,
    'Subject-verb agreement',
    'It cost ten pounds now.',
    'It costs ten pounds now.',
    ['It is cost ten pounds now.', 'It costs ten pound now.', 'It is cost ten pound now.'],
    { facts: ['costs'] },
  ),
  fix(
    2,
    'Subject-verb agreement',
    'Everyone in the class want to pass.',
    'Everyone in the class wants to pass.',
    [
      'Everyone in the class are want to pass.',
      'Everyone in the class wants pass.',
      'Everyone in the class are want pass.',
    ],
    { facts: ['rule:everyone takes a singular verb', 'wants'] },
  ),
  // Prepositions
  fix(
    2,
    'Prepositions',
    'She is good in mathematics.',
    'She is good at mathematics.',
    ['She is good on mathematics.', 'She is well at mathematics.', 'She is well on mathematics.'],
    { facts: ['good at'] },
  ),
  fix(
    2,
    'Prepositions',
    'He arrived to the airport late.',
    'He arrived at the airport late.',
    [
      'He arrived on the airport late.',
      'He arrived at the airport lately.',
      'He arrived on the airport lately.',
    ],
    { facts: ['arrived at'] },
  ),
  fix(
    2,
    'Prepositions',
    'I am interested on this job.',
    'I am interested in this job.',
    [
      'I am interested at this job.',
      'I am interesting in this job.',
      'I am interesting at this job.',
    ],
    { facts: ['interested in'] },
  ),
  fix(
    2,
    'Prepositions',
    'She depends of her parents.',
    'She depends on her parents.',
    [
      'She depends at her parents.',
      'She is depend on her parents.',
      'She is depend at her parents.',
    ],
    { facts: ['depends on'] },
  ),
  fix(
    2,
    'Prepositions',
    'He listened the music all night.',
    'He listened to the music all night.',
    [
      'He listened at the music all night.',
      'He listen to the music all night.',
      'He listen at the music all night.',
    ],
    { facts: ['listened to'] },
  ),
  // Double negative
  fix(
    2,
    'Double negative',
    'I don’t know nothing about it.',
    'I don’t know anything about it.',
    [
      'I don’t know none about it.',
      'I doesn’t know anything about it.',
      'I doesn’t know none about it.',
    ],
    { facts: ['anything'] },
  ),
  fix(
    2,
    'Double negative',
    'She didn’t see nobody at the party.',
    'She didn’t see anybody at the party.',
    [
      'She didn’t see no one at the party.',
      'She didn’t saw anybody at the party.',
      'She didn’t saw no one at the party.',
    ],
    { facts: ['anybody'] },
  ),
  fix(
    2,
    'Double negative',
    'We don’t have no homework today.',
    'We don’t have any homework today.',
    [
      'We don’t have none homework today.',
      'We don’t have any homeworks today.',
      'We don’t have none homeworks today.',
    ],
    { facts: ['homework'] },
  ),
  fix(
    2,
    'Double negative',
    'He can’t find his keys nowhere.',
    'He can’t find his keys anywhere.',
    [
      'He not can find his keys anywhere.',
      'He can’t find the keys nowhere.',
      'He not can find the keys anywhere.',
    ],
    { facts: ['anywhere'] },
  ),
  fix(
    2,
    'Double negative',
    'They never go nowhere on holiday.',
    'They never go anywhere on holiday.',
    [
      'They don’t never go anywhere on holiday.',
      'They never go anywhere in holiday.',
      'They don’t never go anywhere in holiday.',
    ],
    { facts: ['anywhere'] },
  ),
  // Word order
  fix(
    2,
    'Word order',
    'She speaks very well English.',
    'She speaks English very well.',
    [
      'She very well speaks English.',
      'She speaks the English very well.',
      'She very well speaks the English.',
    ],
    { facts: ['english very well', 'rule:no article before a language'] },
  ),
  fix(
    2,
    'Word order',
    'I like very much this book.',
    'I like this book very much.',
    ['I like this book very.', 'I very like this book.', 'I like this book much very.'],
    { facts: ['very much', 'this book'] },
  ),
  fix(
    2,
    'Word order',
    'Always she is late for class.',
    'She is always late for class.',
    [
      'She is late always for class.',
      'She are always late for class.',
      'She are late always for class.',
    ],
    { facts: ['is always late'] },
  ),
  fix(
    2,
    'Word order',
    'Do you know where is the station?',
    'Do you know where the station is?',
    [
      'Do you know where the station?',
      'Do you know where is station?',
      'Do you know where the station it is?',
    ],
    { facts: ['rule:statement order in an indirect question'] },
  ),
  // Plural "s"
  fix(
    2,
    'Plural "s"',
    'I need to buy some potato.',
    'I need to buy some potatoes.',
    [
      'I need to buy some potatos.',
      'I need to buying some potatoes.',
      'I need to buying some potatos.',
    ],
    { facts: ['potatoes'] },
  ),
  // ── Added 24 October 2026 ──
  // Past tense
  fix(
    2,
    'Past tense',
    'Yesterday I go to the cinema.',
    'Yesterday I went to the cinema.',
    [
      'Yesterday I goed to the cinema.',
      'Yesterday I went to cinema.',
      'Yesterday I goed to cinema.',
    ],
    { facts: ['went'] },
  ),
  fix(
    2,
    'Past tense',
    'She buyed a new dress.',
    'She bought a new dress.',
    ['She boughted a new dress.', 'She bought an new dress.', 'She boughted an new dress.'],
    { facts: ['bought'] },
  ),
  fix(
    2,
    'Past tense',
    'We was very tired after the trip.',
    'We were very tired after the trip.',
    [
      'We been very tired after the trip.',
      'We were very tire after the trip.',
      'We been very tire after the trip.',
    ],
    { facts: ['we were'] },
  ),
  fix(
    2,
    'Past tense',
    'I didn’t went to school on Monday.',
    'I didn’t go to school on Monday.',
    [
      'I didn’t goes to school on Monday.',
      'I didn’t go to school in Monday.',
      'I didn’t goes to school in Monday.',
    ],
    { facts: ['didn’t go', 'on monday', 'rule:on with days', 'went'] },
  ),
  fix(
    2,
    'Past tense',
    'Did you saw the match last night?',
    'Did you see the match last night?',
    [
      'Did you seen the match last night?',
      'Did you see the match at last night?',
      'Did you seen the match at last night?',
    ],
    { facts: ['did you see'] },
  ),
  fix(
    2,
    'Past tense',
    'He maked a cake for my birthday.',
    'He made a cake for my birthday.',
    [
      'He maded a cake for my birthday.',
      'He made a cake to my birthday.',
      'He maded a cake to my birthday.',
    ],
    { facts: ['made a cake', 'rule:make and do'] },
  ),
  fix(
    2,
    'Past tense',
    'Last week we visit our grandparents.',
    'Last week we visited our grandparents.',
    [
      'Last week we visitted our grandparents.',
      'Last week we visited ours grandparents.',
      'Last week we visitted ours grandparents.',
    ],
    { facts: ['visited'] },
  ),
  fix(
    2,
    'Past tense',
    'The train leaved at six o’clock.',
    'The train left at six o’clock.',
    [
      'The train lefted at six o’clock.',
      'The train left in six o’clock.',
      'The train lefted in six o’clock.',
    ],
    { facts: ['left', 'rule:at with clock times'] },
  ),
  fix(
    2,
    'Past tense',
    'My phone falled on the floor.',
    'My phone fell on the floor.',
    [
      'My phone felt on the floor.',
      'Mine phone fell on the floor.',
      'Mine phone felt on the floor.',
    ],
    { facts: ['fell'] },
  ),
  fix(
    2,
    'Past tense',
    'When I was young, I can swim very well.',
    'When I was young, I could swim very well.',
    [
      'When I was young, I could swam very well.',
      'When I was young, I can swam very well.',
      'When I was young, I could swim very good.',
    ],
    { facts: ['could swim', 'can swim', 'rule:good and well', 'could'] },
  ),
  fix(
    2,
    'Past tense',
    'I am born in 2010.',
    'I was born in 2010.',
    ['I were born in 2010.', 'I was born on 2010.', 'I were born on 2010.'],
    { facts: ['was born'] },
  ),
  // Present tenses
  fix(
    2,
    'Present tenses',
    'I am knowing the answer.',
    'I know the answer.',
    ['I knows the answer.', 'I know a answer.', 'I knows a answer.'],
    { facts: ['know the answer', 'rule:state verbs take the simple form'] },
  ),
  fix(
    2,
    'Present tenses',
    'Look, it rains outside.',
    'Look, it is raining outside.',
    [
      'Look, it is rainning outside.',
      'Look, it are raining outside.',
      'Look, it are rainning outside.',
    ],
    { facts: ['is raining'] },
  ),
  fix(
    2,
    'Present tenses',
    'He is wanting a new bike.',
    'He wants a new bike.',
    ['He want a new bike.', 'He wants an new bike.', 'He want an new bike.'],
    { facts: ['wants', 'rule:state verbs take the simple form'] },
  ),
  // Present perfect
  fix(
    2,
    'Present perfect',
    'I live here since 2015.',
    'I have lived here since 2015.',
    ['I have live here since 2015.', 'I have lived here for 2015.', 'I have live here for 2015.'],
    { facts: ['have lived', 'rule:for with a length of time'] },
  ),
  fix(
    2,
    'Present perfect',
    'I have seen him yesterday.',
    'I saw him yesterday.',
    ['I seen him yesterday.', 'I saw he yesterday.', 'I seen he yesterday.'],
    { facts: ['saw'] },
  ),
  fix(
    2,
    'Present perfect',
    'We have known each other since three years.',
    'We have known each other for three years.',
    [
      'We have known each other during three years.',
      'We have know each other for three years.',
      'We have know each other during three years.',
    ],
    { facts: ['for three years', 'rule:for with a length of time'] },
  ),
  fix(
    2,
    'Present perfect',
    'Have you ever went to London?',
    'Have you ever been to London?',
    [
      'Have you ever being to London?',
      'Has you ever been to London?',
      'Has you ever being to London?',
    ],
    { facts: ['been to', 'went'] },
  ),
  fix(
    2,
    'Present perfect',
    'She has finish her homework.',
    'She has finished her homework.',
    [
      'She has finishing her homework.',
      'She have finished her homework.',
      'She have finishing her homework.',
    ],
    { facts: ['has finished', 'homework'] },
  ),
  // Comparatives
  fix(
    2,
    'Comparatives',
    'My house is more bigger than yours.',
    'My house is bigger than yours.',
    [
      'My house is biger than yours.',
      'My house is bigger that yours.',
      'My house is biger that yours.',
    ],
    { facts: ['bigger'] },
  ),
  fix(
    2,
    'Comparatives',
    'This test is more easy than the last one.',
    'This test is easier than the last one.',
    [
      'This test is easyer than the last one.',
      'This test is easier then the last one.',
      'This test is easyer then the last one.',
    ],
    { facts: ['easier'] },
  ),
  fix(
    2,
    'Comparatives',
    'My English is gooder now.',
    'My English is better now.',
    [
      'My English is more better now.',
      'My English are better now.',
      'My English are more better now.',
    ],
    { facts: ['better'] },
  ),
  fix(
    2,
    'Comparatives',
    'She is the most tall girl in our class.',
    'She is the tallest girl in our class.',
    [
      'She is the most tallest girl in our class.',
      'She is the tallest girls in our class.',
      'She is the most tallest girls in our class.',
    ],
    { facts: ['tallest'] },
  ),
  fix(
    2,
    'Comparatives',
    'A car is fast than a bike.',
    'A car is faster than a bike.',
    [
      'A car is more fast than a bike.',
      'A car is faster as a bike.',
      'A car is more fast as a bike.',
    ],
    { facts: ['faster'] },
  ),
  fix(
    2,
    'Comparatives',
    'My brother is as tall than my father.',
    'My brother is as tall as my father.',
    [
      'My brother is as tall like my father.',
      'My brother is as taller as my father.',
      'My brother is as taller like my father.',
    ],
    { facts: ['as tall as', 'rule:as ... as'] },
  ),
  // Countable nouns
  fix(
    2,
    'Countable nouns',
    'Can I give you an advice?',
    'Can I give you some advice?',
    ['Can I give you many advice?', 'Can I give you some advices?', 'Can I give you many advices?'],
    { facts: ['advice'] },
  ),
  fix(
    2,
    'Countable nouns',
    'There are too much cars in the city.',
    'There are too many cars in the city.',
    [
      'There are too lot of cars in the city.',
      'There are too many car in the city.',
      'There are too lot of car in the city.',
    ],
    { facts: ['many cars'] },
  ),
  fix(
    2,
    'Countable nouns',
    'We bought some new furnitures.',
    'We bought some new furniture.',
    ['We bought a new furniture.', 'We bought a new furnitures.', 'We bought many new furniture.'],
    { facts: ['furniture', 'bought'] },
  ),
  fix(
    2,
    'Countable nouns',
    'How much students are in your class?',
    'How many students are in your class?',
    [
      'How many student are in your class?',
      'How much student are in your class?',
      'How many students is in your class?',
    ],
    { facts: ['how many students'] },
  ),
  fix(
    2,
    'Countable nouns',
    'I need a few water.',
    'I need a little water.',
    ['I need a little waters.', 'I need few water.', 'I needs a little water.'],
    { facts: ['a little water'] },
  ),
  fix(
    2,
    'Countable nouns',
    'The news are very good today.',
    'The news is very good today.',
    ['The news are very well today.', 'The new is very good today.', 'The new is very well today.'],
    { facts: ['news is', 'rule:news is singular', 'rule:good and well'] },
  ),
  // Verb patterns
  fix(
    2,
    'Verb patterns',
    'I enjoy to play the guitar.',
    'I enjoy playing the guitar.',
    [
      'I enjoy to playing the guitar.',
      'I enjoys playing the guitar.',
      'I enjoys to playing the guitar.',
    ],
    { facts: ['enjoy playing'] },
  ),
  fix(
    2,
    'Verb patterns',
    'I want that you come with me.',
    'I want you to come with me.',
    ['I want you come with me.', 'I wants you to come with me.', 'I wants you come with me.'],
    { facts: ['want you to', 'rule:want someone to do'] },
  ),
  fix(
    2,
    'Verb patterns',
    'My parents let me to stay up late.',
    'My parents let me stay up late.',
    [
      'My parents let me staying up late.',
      'My parents let me stay up lately.',
      'My parents let me staying up lately.',
    ],
    { facts: ['let me stay', 'rule:let and make take the base verb'] },
  ),
  fix(
    2,
    'Verb patterns',
    'He made me to laugh.',
    'He made me laugh.',
    ['He made me laughing.', 'He did me laugh.', 'He did me laughing.'],
    { facts: ['made me laugh', 'rule:let and make take the base verb'] },
  ),
  fix(
    2,
    'Verb patterns',
    'I would like go to Spain.',
    'I would like to go to Spain.',
    [
      'I would like to going to Spain.',
      'I would like to go in Spain.',
      'I would like to going in Spain.',
    ],
    { facts: ['would like to'] },
  ),
  fix(
    2,
    'Verb patterns',
    'Thank you for help me.',
    'Thank you for helping me.',
    ['Thank you for helped me.', 'Thanks you for helping me.', 'Thanks you for helped me.'],
    { facts: ['for helping', 'rule:-ing after a preposition'] },
  ),
  // Modal verbs
  fix(
    2,
    'Modal verbs',
    'You must to wear a uniform.',
    'You must wear a uniform.',
    ['You must wearing a uniform.', 'You must wear an uniform.', 'You must wearing an uniform.'],
    { facts: ['must wear'] },
  ),
  fix(
    2,
    'Modal verbs',
    'You should to drink more water.',
    'You should drink more water.',
    [
      'You should drinking more water.',
      'Your should drink more water.',
      'Your should drinking more water.',
    ],
    { facts: ['should drink'] },
  ),
  // Word choice
  fix(
    2,
    'Word choice',
    'I did a mistake in the test.',
    'I made a mistake in the test.',
    [
      'I maked a mistake in the test.',
      'I made a mistakes in the test.',
      'I maked a mistakes in the test.',
    ],
    { facts: ['made a mistake', 'rule:make and do'] },
  ),
  fix(
    2,
    'Word choice',
    'She said me the answer.',
    'She told me the answer.',
    ['She told to me the answer.', 'She tell me the answer.', 'She tell to me the answer.'],
    { facts: ['told me', 'rule:tell someone, say something'] },
  ),
  fix(
    2,
    'Word choice',
    'Can you borrow me your pen?',
    'Can you lend me your pen?',
    ['Can you lent me your pen?', 'Can you lend me you pen?', 'Can you lent me you pen?'],
    { facts: ['lend me'] },
  ),
  fix(
    2,
    'Word choice',
    'I always make my homework after dinner.',
    'I always do my homework after dinner.',
    [
      'I always does my homework after dinner.',
      'I always do my homeworks after dinner.',
      'I always does my homeworks after dinner.',
    ],
    { facts: ['do my homework', 'homework', 'rule:make and do'] },
  ),
  fix(
    2,
    'Word choice',
    'He explained me the rule.',
    'He explained the rule to me.',
    ['He explained the rule me.', 'He explain the rule to me.', 'He explain the rule me.'],
    { facts: ['explained the rule to me', 'rule:explain to someone'] },
  ),
  fix(
    2,
    'Verb "to be"',
    'I am agree with you.',
    'I agree with you.',
    ['I agrees with you.', 'I agree to you.', 'I agrees to you.'],
    { facts: ['i agree'] },
  ),
  // Prepositions
  fix(
    2,
    'Prepositions',
    'She is married with a pilot.',
    'She is married to a pilot.',
    ['She is married at a pilot.', 'She is marry to a pilot.', 'She is marry at a pilot.'],
    { facts: ['married to'] },
  ),
  fix(
    2,
    'Prepositions',
    'I am afraid from spiders.',
    'I am afraid of spiders.',
    ['I am afraid at spiders.', 'I am afraid of spider.', 'I am afraid at spider.'],
    { facts: ['afraid of'] },
  ),
  fix(
    2,
    'Prepositions',
    'Please wait me here.',
    'Please wait for me here.',
    ['Please wait to me here.', 'Please waiting for me here.', 'Please waiting to me here.'],
    { facts: ['wait for'] },
  ),
  fix(
    2,
    'Prepositions',
    'We discussed about the problem.',
    'We discussed the problem.',
    ['We discussed on the problem.', 'Us discussed the problem.', 'Us discussed on the problem.'],
    { facts: ['discussed the problem'] },
  ),
  // Articles
  fix(
    2,
    'Articles',
    'She is a honest girl.',
    'She is an honest girl.',
    ['She is honest girl.', 'She are an honest girl.', 'She are honest girl.'],
    { facts: ['an honest', 'rule:silent h takes an'] },
  ),
  fix(
    2,
    'Articles',
    'My cousin lives in the Spain.',
    'My cousin lives in Spain.',
    ['My cousin lives in a Spain.', 'My cousin live in Spain.', 'My cousin live in a Spain.'],
    { facts: ['in spain', 'rule:no the before a country', 'lives'] },
  ),
  fix(
    2,
    'Articles',
    'My cousin speaks the Arabic.',
    'My cousin speaks Arabic.',
    ['My cousin speaks Arab.', 'My cousin speak Arabic.', 'My cousin speak Arab.'],
    { facts: ['speaks arabic', 'rule:no article before a language'] },
  ),
  // Adjectives
  fix(
    2,
    'Adjectives',
    'I am very boring in this lesson.',
    'I am very bored in this lesson.',
    [
      'I am very bore in this lesson.',
      'I have very bored in this lesson.',
      'I have very bore in this lesson.',
    ],
    { facts: ['bored', 'rule:-ed and -ing adjectives'] },
  ),
  fix(
    2,
    'Adjectives',
    'The film was very interested.',
    'The film was very interesting.',
    [
      'The film was very interestingly.',
      'The film were very interesting.',
      'The film were very interestingly.',
    ],
    { facts: ['interesting', 'rule:-ed and -ing adjectives'] },
  ),
  fix(
    2,
    'Adjectives',
    'We were very exciting about the trip.',
    'We were very excited about the trip.',
    [
      'We were very excite about the trip.',
      'We was very excited about the trip.',
      'We was very excite about the trip.',
    ],
    { facts: ['excited', 'rule:-ed and -ing adjectives', 'we were'] },
  ),
  // Pronouns
  fix(
    2,
    'Pronouns',
    'He hurt hisself in the park.',
    'He hurt himself in the park.',
    [
      'He hurt his self in the park.',
      'He hurted himself in the park.',
      'He hurted his self in the park.',
    ],
    { facts: ['himself'] },
  ),
  fix(
    2,
    'Pronouns',
    'My sister she plays the piano.',
    'My sister plays the piano.',
    [
      'My sister her plays the piano.',
      'My sister play the piano.',
      'My sister her play the piano.',
    ],
    { facts: ['rule:one subject only'] },
  ),
  // Future
  fix(
    2,
    'Future',
    'I will to call you tomorrow.',
    'I will call you tomorrow.',
    ['I will calling you tomorrow.', 'I wills call you tomorrow.', 'I wills calling you tomorrow.'],
    { facts: ['will call', 'rule:will takes the base verb'] },
  ),
  // Questions
  fix(
    2,
    'Questions',
    'What means this word?',
    'What does this word mean?',
    ['What does this word means?', 'What do this word mean?', 'What do this word means?'],
    { facts: ['what does this word mean'] },
  ),
]

// ── Tier 3 (B1): two mistakes in one sentence or a short text ───────────────
const TIER_3: ErrorItem[] = [
  two(
    ['Subject-verb agreement', 'Negatives'],
    'My brother work in a bank and he don’t like it.',
    'My brother works in a bank and he doesn’t like it.',
    [
      'My brother working in a bank and he doesn’t like it.',
      'My brother works in a bank and he don’t like it.',
      'My brother working in a bank and he don’t like it.',
    ],
    { facts: ['works in', 'doesn’t like', 'don’t like'] },
  ),
  two(
    ['Past tense', 'Subject-verb agreement'],
    'Last summer we go to Spain and the weather were very hot.',
    'Last summer we went to Spain and the weather was very hot.',
    [
      'Last summer we go to Spain and the weather was very hot.',
      'Last summer we went to Spain and the weather is very hot.',
      'Last summer we go to Spain and the weather is very hot.',
    ],
    { facts: ['went', 'rule:weather is singular'] },
  ),
  two(
    ['Conditionals', 'Future'],
    'If it will rain, we will stays at home.',
    'If it rains, we will stay at home.',
    [
      'If it rain, we will stay at home.',
      'If it rains, we will stays at home.',
      'If it rain, we will stays at home.',
    ],
    { facts: ['if it rains', 'rule:will takes the base verb', 'at home'] },
  ),
  two(
    ['Word choice', 'Verb patterns'],
    'My teacher said me to sitting down.',
    'My teacher told me to sit down.',
    [
      'My teacher said me to sit down.',
      'My teacher told me to sat down.',
      'My teacher said me to sat down.',
    ],
    { facts: ['told me', 'rule:tell someone, say something'] },
  ),
  two(
    ['Present perfect', 'Prepositions'],
    'I am living in London since two years.',
    'I have lived in London for two years.',
    [
      'I have live in London for two years.',
      'I have lived in London since two years.',
      'I have live in London since two years.',
    ],
    { facts: ['have lived', 'rule:for with a length of time'] },
  ),
  two(
    ['Verb "to be"', 'Pronouns'],
    'There is many people in the park because is sunny.',
    'There are many people in the park because it is sunny.',
    [
      'There is many people in the park because it is sunny.',
      'There are many people in the park because there is sunny.',
      'There is many people in the park because there is sunny.',
    ],
    { facts: ['there are many', 'rule:it for the weather'] },
  ),
  two(
    ['Present perfect', 'Pronouns'],
    'I have seen this film last week and I enjoyed very much.',
    'I saw this film last week and I enjoyed it very much.',
    [
      'I seen this film last week and I enjoyed it very much.',
      'I saw this film last week and I enjoyed very much.',
      'I seen this film last week and I enjoyed very much.',
    ],
    { facts: ['saw', 'very much'] },
  ),
  two(
    ['Comparatives', 'Comparatives'],
    'This year the exams were more easy and the results were more better.',
    'This year the exams were easier and the results were better.',
    [
      'This year the exams were more easy and the results were better.',
      'This year the exams were easier and the results were more good.',
      'This year the exams were more easy and the results were more good.',
    ],
    { facts: ['easier', 'better'] },
  ),
  two(
    ['Linking words', 'Past tense'],
    'Although it was rain, but we went to the beach.',
    'Although it was raining, we went to the beach.',
    [
      'Although it was rained, we went to the beach.',
      'Although it was raining, but we went to the beach.',
      'Although it was rained, but we went to the beach.',
    ],
    { facts: ['although', 'was raining', 'went'] },
  ),
  two(
    ['Present tenses', 'Verb patterns'],
    'I am look forward to meet you on Friday.',
    'I am looking forward to meeting you on Friday.',
    [
      'I am look forward to meeting you on Friday.',
      'I am looking forward for meeting you on Friday.',
      'I am look forward for meeting you on Friday.',
    ],
    { facts: ['looking forward to', 'rule:-ing after a preposition', 'rule:on with days'] },
  ),
  two(
    ['Verb patterns', 'Word choice'],
    'My friend suggested to go to the cinema, but I was too much tired.',
    'My friend suggested going to the cinema, but I was too tired.',
    [
      'My friend suggested to going to the cinema, but I was too tired.',
      'My friend suggested going to the cinema, but I was too much tired.',
      'My friend suggested to going to the cinema, but I was too much tired.',
    ],
    { facts: ['suggested going', 'rule:too before an adjective'] },
  ),
  two(
    ['Relative clauses', 'Subject-verb agreement'],
    'The man which lives next door have three dogs.',
    'The man who lives next door has three dogs.',
    [
      'The man which lives next door has three dogs.',
      'The man who lives next door haves three dogs.',
      'The man which lives next door haves three dogs.',
    ],
    { facts: ['the man who', 'rule:has after he she it', 'rule:who for people', 'lives'] },
  ),
  two(
    ['Prepositions', 'Past tense'],
    'When I arrived to the station, the train has already left.',
    'When I arrived at the station, the train had already left.',
    [
      'When I arrived on the station, the train had already left.',
      'When I arrived at the station, the train has already left.',
      'When I arrived on the station, the train has already left.',
    ],
    { facts: ['arrived at', 'had already left', 'left'] },
  ),
  two(
    ['Past tense', 'Prepositions'],
    'I didn’t knew the answer, so I asked to my teacher.',
    'I didn’t know the answer, so I asked my teacher.',
    [
      'I didn’t knew the answer, so I asked my teacher.',
      'I didn’t know the answer, so I asked at my teacher.',
      'I didn’t knew the answer, so I asked at my teacher.',
    ],
    { facts: ['didn’t know', 'rule:ask someone', 'know the answer'] },
  ),
  two(
    ['Subject-verb agreement', 'Countable nouns'],
    'Everybody were happy because the teacher gave us less homeworks.',
    'Everybody was happy because the teacher gave us less homework.',
    [
      'Everybody were happy because the teacher gave us less homework.',
      'Everybody was happy because the teacher gave us fewer homework.',
      'Everybody were happy because the teacher gave us fewer homework.',
    ],
    { facts: ['rule:everyone takes a singular verb', 'homework'] },
  ),
  two(
    ['Prepositions', 'Plural "s"'],
    'He is very good in football and he plays every days.',
    'He is very good at football and he plays every day.',
    [
      'He is very good on football and he plays every day.',
      'He is very good at football and he plays every days.',
      'He is very good on football and he plays every days.',
    ],
    { facts: ['good at', 'every day', 'rule:every takes a singular noun'] },
  ),
  two(
    ['Present perfect', 'Past tense'],
    'We are friends since we was children.',
    'We have been friends since we were children.',
    [
      'We are friends since we were children.',
      'We have been friends since we are children.',
      'We are friends since we are children.',
    ],
    { facts: ['have been friends', 'we were', 'children'] },
  ),
  two(
    ['Conditionals', 'Modal verbs'],
    'If I would have more money, I will travel around the world.',
    'If I had more money, I would travel around the world.',
    [
      'If I would have more money, I would travel around the world.',
      'If I had more money, I would to travel around the world.',
      'If I would have more money, I would to travel around the world.',
    ],
    { facts: ['if i had', 'would travel'] },
  ),
  two(
    ['Verb patterns', 'Modal verbs'],
    'Yesterday my mother made me to clean my room before I can go out.',
    'Yesterday my mother made me clean my room before I could go out.',
    [
      'Yesterday my mother made me cleaning my room before I could go out.',
      'Yesterday my mother made me clean my room before I can go out.',
      'Yesterday my mother made me cleaning my room before I can go out.',
    ],
    { facts: ['made me clean', 'rule:let and make take the base verb', 'could'] },
  ),
  two(
    ['Double negative', 'Past tense'],
    'There aren’t no buses after midnight, so we taked a taxi.',
    'There aren’t any buses after midnight, so we took a taxi.',
    [
      'There aren’t no buses after midnight, so we took a taxi.',
      'There aren’t any buses after midnight, so we tooked a taxi.',
      'There aren’t no buses after midnight, so we tooked a taxi.',
    ],
    { facts: ['aren’t any', 'took'] },
  ),
  two(
    ['Subject-verb agreement', 'Verb patterns'],
    'There were no possibility of take a walk that day.',
    'There was no possibility of taking a walk that day.',
    [
      'There are no possibility of taking a walk that day.',
      'There was no possibility of take a walk that day.',
      'There are no possibility of take a walk that day.',
    ],
    {
      facts: ['there was no possibility', 'rule:-ing after a preposition'],
      source: 'Jane Eyre by Charlotte Brontë (1847)',
    },
  ),
  two(
    ['Countable nouns', 'Subject-verb agreement'],
    'Can you give me some informations about the trip and what time it start?',
    'Can you give me some information about the trip and what time it starts?',
    [
      'Can you give me some informations about the trip and what time it starts?',
      'Can you give me some information about the trip and what time it starting?',
      'Can you give me some informations about the trip and what time it starting?',
    ],
    { facts: ['information', 'it starts'] },
  ),
  two(
    ['Word order', 'Prepositions'],
    'I don’t know where does she live, but I can ask to her brother.',
    'I don’t know where she lives, but I can ask her brother.',
    [
      'I don’t know where she live, but I can ask her brother.',
      'I don’t know where she lives, but I can ask to her brother.',
      'I don’t know where she live, but I can ask to her brother.',
    ],
    {
      facts: [
        'where she lives',
        'rule:statement order in an indirect question',
        'rule:ask someone',
        'lives',
      ],
    },
  ),
  two(
    ['Present perfect', 'Negatives'],
    'Yesterday I have bought a new phone, but it doesn’t works.',
    'Yesterday I bought a new phone, but it doesn’t work.',
    [
      'Yesterday I have bought a new phone, but it doesn’t work.',
      'Yesterday I bought a new phone, but it don’t work.',
      'Yesterday I have bought a new phone, but it don’t work.',
    ],
    { facts: ['bought', 'doesn’t work'] },
  ),
  two(
    ['Verb patterns', 'Verb "to be"'],
    'My parents want that I study medicine, but I am prefer art.',
    'My parents want me to study medicine, but I prefer art.',
    [
      'My parents want me study medicine, but I prefer art.',
      'My parents want me to study medicine, but I am prefer art.',
      'My parents want me study medicine, but I am prefer art.',
    ],
    { facts: ['want me to', 'rule:want someone to do', 'prefer art'] },
  ),
  two(
    ['Past tense', 'Past tense'],
    'The boys was playing football when it start to rain.',
    'The boys were playing football when it started to rain.',
    [
      'The boys was playing football when it started to rain.',
      'The boys were playing football when it starting to rain.',
      'The boys was playing football when it starting to rain.',
    ],
    { facts: ['were playing', 'started'] },
  ),
  two(
    ['Verb "to be"', 'Modal verbs'],
    'I’m agree that we should to protect the environment.',
    'I agree that we should protect the environment.',
    [
      'I agrees that we should protect the environment.',
      'I agree that we should to protect the environment.',
      'I agrees that we should to protect the environment.',
    ],
    { facts: ['i agree', 'should protect'] },
  ),
  two(
    ['Adjectives', 'Adjectives'],
    'He drives very careful because the roads are very danger.',
    'He drives very carefully because the roads are very dangerous.',
    [
      'He drives very careful because the roads are very dangerous.',
      'He drives very carefully because the roads are very dangerously.',
      'He drives very careful because the roads are very dangerously.',
    ],
    { facts: ['carefully', 'dangerous'] },
  ),
  two(
    ['Prepositions', 'Subject-verb agreement'],
    'My sister is married with a man who work in Dubai.',
    'My sister is married to a man who works in Dubai.',
    [
      'My sister is married at a man who works in Dubai.',
      'My sister is married to a man who work in Dubai.',
      'My sister is married at a man who work in Dubai.',
    ],
    { facts: ['married to', 'works in'] },
  ),
  two(
    ['Questions', 'Present perfect'],
    'How long time do you live in this city?',
    'How long have you lived in this city?',
    [
      'How long time have you lived in this city?',
      'How long have you live in this city?',
      'How long time have you live in this city?',
    ],
    { facts: ['how long have you lived', 'have lived'] },
  ),
  two(
    ['Modal verbs', 'Modal verbs'],
    'I can’t to come to your party because I have help my parents.',
    'I can’t come to your party because I have to help my parents.',
    [
      'I can’t coming to your party because I have to help my parents.',
      'I can’t come to your party because I have help my parents.',
      'I can’t coming to your party because I have help my parents.',
    ],
    { facts: ['can’t come', 'have to help'] },
  ),
  two(
    ['Comparatives', 'Subject-verb agreement'],
    'She is the more intelligent student in the class and she always help others.',
    'She is the most intelligent student in the class and she always helps others.',
    [
      'She is the more intelligent student in the class and she always helps others.',
      'She is the most intelligent student in the class and she always helping others.',
      'She is the more intelligent student in the class and she always helping others.',
    ],
    { facts: ['the most intelligent', 'helps others'] },
  ),
  two(
    ['Articles', 'Articles'],
    'Yesterday I saw a film. A film was about the history of the Egypt.',
    'Yesterday I saw a film. The film was about the history of Egypt.',
    [
      'Yesterday I saw a film. Film was about the history of Egypt.',
      'Yesterday I saw a film. The film was about the history of the Egypt.',
      'Yesterday I saw a film. Film was about the history of the Egypt.',
    ],
    { facts: ['rule:the for a second mention', 'rule:no the before a country', 'saw'] },
  ),
  two(
    ['Word order', 'Word order'],
    'Could you tell me where is the post office and when it close?',
    'Could you tell me where the post office is and when it closes?',
    [
      'Could you tell me where is the post office and when it closes?',
      'Could you tell me where the post office is and when does it close?',
      'Could you tell me where is the post office and when does it close?',
    ],
    { facts: ['where the post office is', 'rule:statement order in an indirect question'] },
  ),
  two(
    ['Word choice', 'Modal verbs'],
    'The weather was so much bad that we must stay inside all day.',
    'The weather was so bad that we had to stay inside all day.',
    [
      'The weather was such bad that we had to stay inside all day.',
      'The weather was so bad that we must stay inside all day.',
      'The weather was such bad that we must stay inside all day.',
    ],
    { facts: ['so bad', 'had to stay'] },
  ),
  two(
    ['Adjectives', 'Verb patterns'],
    'I am interesting in learn new languages.',
    'I am interested in learning new languages.',
    [
      'I am interesting in learning new languages.',
      'I am interested in to learn new languages.',
      'I am interesting in to learn new languages.',
    ],
    {
      facts: ['interested in', 'rule:-ed and -ing adjectives', 'rule:-ing after a preposition'],
    },
  ),
  two(
    ['Verb "to be"', 'Subject-verb agreement'],
    'My grandfather has 75 years and he still walk every day.',
    'My grandfather is 75 years old and he still walks every day.',
    [
      'My grandfather is 75 years and he still walks every day.',
      'My grandfather is 75 years old and he still walk every day.',
      'My grandfather is 75 years and he still walk every day.',
    ],
    { facts: ['rule:an age takes be', 'walks', 'every day'] },
  ),
  two(
    ['Adjectives', 'Past tense'],
    'The film was so bored that many people leaved before the end.',
    'The film was so boring that many people left before the end.',
    [
      'The film was so bored that many people left before the end.',
      'The film was so boring that many people lefted before the end.',
      'The film was so bored that many people lefted before the end.',
    ],
    { facts: ['boring', 'rule:-ed and -ing adjectives', 'left'] },
  ),
  two(
    ['Future', 'Adjectives'],
    'I will to buy a new laptop because my old one is broke.',
    'I will buy a new laptop because my old one is broken.',
    [
      'I will buying a new laptop because my old one is broken.',
      'I will buy a new laptop because my old one is broke.',
      'I will buying a new laptop because my old one is broke.',
    ],
    { facts: ['will buy', 'rule:will takes the base verb', 'broken'] },
  ),
  two(
    ['Past tense', 'Past tense'],
    'We didn’t went to the party because we was too tired.',
    'We didn’t go to the party because we were too tired.',
    [
      'We didn’t went to the party because we were too tired.',
      'We didn’t go to the party because we are too tired.',
      'We didn’t went to the party because we are too tired.',
    ],
    { facts: ['didn’t go', 'we were', 'rule:too before an adjective'] },
  ),
  two(
    ['Present tenses', 'Past tense'],
    'Usually I am going to work on foot, but yesterday I taked the bus.',
    'Usually I go to work on foot, but yesterday I took the bus.',
    [
      'Usually I goes to work on foot, but yesterday I took the bus.',
      'Usually I go to work on foot, but yesterday I taked the bus.',
      'Usually I goes to work on foot, but yesterday I taked the bus.',
    ],
    { facts: ['go to work', 'took'] },
  ),
  two(
    ['Adjectives', 'Modal verbs'],
    'She can speak English very good, but she can’t writes it.',
    'She can speak English very well, but she can’t write it.',
    [
      'She can speak English very good, but she can’t write it.',
      'She can speak English very well, but she can’t to write it.',
      'She can speak English very good, but she can’t to write it.',
    ],
    { facts: ['english very well', 'rule:good and well', 'can’t write', 'can speak'] },
  ),
  two(
    ['Plural "s"', 'Subject-verb agreement'],
    'Every students in my class has a laptop, but nobody bring it to school.',
    'Every student in my class has a laptop, but nobody brings it to school.',
    [
      'Every of the students in my class has a laptop, but nobody brings it to school.',
      'Every student in my class has a laptop, but nobody bring it to school.',
      'Every of the students in my class has a laptop, but nobody bring it to school.',
    ],
    {
      facts: [
        'every student',
        'nobody brings',
        'rule:every takes a singular noun',
        'rule:everyone takes a singular verb',
      ],
    },
  ),
  two(
    ['Present perfect', 'Verb patterns'],
    'I have been to Paris last year and I want go there again.',
    'I went to Paris last year and I want to go there again.',
    [
      'I have been to Paris last year and I want to go there again.',
      'I went to Paris last year and I want going there again.',
      'I have been to Paris last year and I want going there again.',
    ],
    { facts: ['went', 'want to go', 'been to'] },
  ),
  two(
    ['Verb "to be"', 'Countable nouns'],
    'There are a lot of traffics in the city centre.',
    'There is a lot of traffic in the city centre.',
    [
      'There are a lot of traffic in the city centre.',
      'There is many traffic in the city centre.',
      'There are many traffic in the city centre.',
    ],
    { facts: ['traffic', 'rule:there is for something that exists'] },
  ),
  two(
    ['Verb patterns', 'Articles'],
    'My father doesn’t let me to go out alone at the night.',
    'My father doesn’t let me go out alone at night.',
    [
      'My father doesn’t let me going out alone at night.',
      'My father doesn’t let me go out alone at the night.',
      'My father doesn’t let me going out alone at the night.',
    ],
    { facts: ['let me go', 'rule:let and make take the base verb', 'at night'] },
  ),
  two(
    ['Subject-verb agreement', 'Prepositions'],
    'The bus were late, so the teacher was angry on me.',
    'The bus was late, so the teacher was angry with me.',
    [
      'The bus were late, so the teacher was angry with me.',
      'The bus was late, so the teacher was angry to me.',
      'The bus were late, so the teacher was angry to me.',
    ],
    { facts: ['the bus was', 'angry with'] },
  ),
  two(
    ['Verb patterns', 'Plural "s"'],
    'I want improve my English, so I read a lot of book.',
    'I want to improve my English, so I read a lot of books.',
    [
      'I want improving my English, so I read a lot of books.',
      'I want to improve my English, so I read a lot of book.',
      'I want improving my English, so I read a lot of book.',
    ],
    { facts: ['want to improve', 'a lot of books'] },
  ),
  two(
    ['Articles', 'Past tense'],
    'When I was child, I use to play football in the street.',
    'When I was a child, I used to play football in the street.',
    [
      'When I was child, I used to play football in the street.',
      'When I was a child, I used to playing football in the street.',
      'When I was child, I used to playing football in the street.',
    ],
    { facts: ['a child', 'used to play'] },
  ),
  two(
    ['Verb patterns', 'Countable nouns'],
    'My doctor told me don’t eat so much sugars.',
    'My doctor told me not to eat so much sugar.',
    [
      'My doctor told me to don’t eat so much sugar.',
      'My doctor told me not to eat so much sugars.',
      'My doctor told me to don’t eat so much sugars.',
    ],
    { facts: ['not to eat', 'sugar', 'rule:tell someone, say something', 'told me'] },
  ),
  two(
    ['Past tense', 'Adjectives'],
    'I’m tired because I didn’t slept good last night.',
    'I’m tired because I didn’t sleep well last night.',
    [
      'I’m tired because I didn’t slept well last night.',
      'I’m tired because I didn’t sleep nice last night.',
      'I’m tired because I didn’t slept nice last night.',
    ],
    { facts: ['didn’t sleep', 'rule:good and well'] },
  ),
  two(
    ['Past tense', 'Word order'],
    'Last night we watch a film very funny.',
    'Last night we watched a very funny film.',
    [
      'Last night we watching a very funny film.',
      'Last night we watched a film very funny.',
      'Last night we watching a film very funny.',
    ],
    { facts: ['watched', 'a very funny film'] },
  ),
  two(
    ['Present perfect', 'Prepositions'],
    'I am waiting you since nine o’clock.',
    'I have been waiting for you since nine o’clock.',
    [
      'I am waiting for you since nine o’clock.',
      'I have been waiting to you since nine o’clock.',
      'I am waiting to you since nine o’clock.',
    ],
    { facts: ['have been waiting', 'wait for'] },
  ),
  two(
    ['Word order', 'Prepositions'],
    'He is a person very kind and he always helps to his neighbours.',
    'He is a very kind person and he always helps his neighbours.',
    [
      'He is a kind very person and he always helps his neighbours.',
      'He is a very kind person and he always helps to his neighbours.',
      'He is a kind very person and he always helps to his neighbours.',
    ],
    { facts: ['a very kind person', 'helps his'] },
  ),
  two(
    ['Prepositions', 'Subject-verb agreement'],
    'I prefer tea than coffee, but my sister prefer coffee.',
    'I prefer tea to coffee, but my sister prefers coffee.',
    [
      'I prefer tea than coffee, but my sister prefers coffee.',
      'I prefer tea to coffee, but my sister is prefer coffee.',
      'I prefer tea than coffee, but my sister is prefer coffee.',
    ],
    { facts: ['prefer tea to', 'prefers'] },
  ),
  two(
    ['Double negative', 'Verb patterns'],
    'I haven’t never eaten sushi, but I would like try it.',
    'I have never eaten sushi, but I would like to try it.',
    [
      'I have never ate sushi, but I would like to try it.',
      'I have never eaten sushi, but I would like try it.',
      'I have never ate sushi, but I would like try it.',
    ],
    { facts: ['have never eaten', 'would like to'] },
  ),
  two(
    ['Word order', 'Articles'],
    'I’m not enough tall to play basketball, so I play the tennis.',
    'I’m not tall enough to play basketball, so I play tennis.',
    [
      'I’m not enough tall to play basketball, so I play tennis.',
      'I’m not tall enough to play basketball, so I play a tennis.',
      'I’m not enough tall to play basketball, so I play a tennis.',
    ],
    { facts: ['tall enough', 'rule:no article before a sport'] },
  ),
  two(
    ['Subject-verb agreement', 'Word choice'],
    'The shoes was too much expensive, so I didn’t buy them.',
    'The shoes were too expensive, so I didn’t buy them.',
    [
      'The shoes is too expensive, so I didn’t buy them.',
      'The shoes were too much expensive, so I didn’t buy them.',
      'The shoes is too much expensive, so I didn’t buy them.',
    ],
    { facts: ['shoes were', 'rule:too before an adjective'] },
  ),
  two(
    ['Subject-verb agreement', 'Verb patterns'],
    'Man is the only creature that consume without produce.',
    'Man is the only creature that consumes without producing.',
    [
      'Man is the only creature that consume without producing.',
      'Man is the only creature that consumes without to produce.',
      'Man is the only creature that consume without to produce.',
    ],
    {
      facts: ['consumes', 'rule:-ing after a preposition'],
      source: 'Animal Farm by George Orwell (1945)',
    },
  ),
  two(
    ['Future', 'Comparatives'],
    'I will to work more hard.',
    'I will work harder.',
    ['I will working harder.', 'I will work more hard.', 'I will working more hard.'],
    {
      facts: ['will work', 'harder', 'rule:will takes the base verb'],
      source: 'Animal Farm by George Orwell (1945)',
    },
  ),
  two(
    ['Verb "to be"', 'Past tense'],
    'It were past two when he go to bed.',
    'It was past two when he went to bed.',
    [
      'It were past two when he went to bed.',
      'It was past two when he goed to bed.',
      'It were past two when he goed to bed.',
    ],
    { facts: ['went'], source: 'A Christmas Carol by Charles Dickens (1843)' },
  ),
  two(
    ['Subject-verb agreement', 'Adjectives'],
    'The voice were soft and gently.',
    'The voice was soft and gentle.',
    [
      'The voices was soft and gentle.',
      'The voice was soft and gently.',
      'The voices was soft and gently.',
    ],
    { facts: ['the voice was', 'gentle'], source: 'A Christmas Carol by Charles Dickens (1843)' },
  ),
  two(
    ['Verb "to be"', 'Past tense'],
    'There are no doubt that Marley were dead.',
    'There is no doubt that Marley was dead.',
    [
      'There are no doubt that Marley was dead.',
      'There is no doubt that Marley dead.',
      'There are no doubt that Marley dead.',
    ],
    { facts: ['there is no doubt'], source: 'A Christmas Carol by Charles Dickens (1843)' },
  ),
  two(
    ['Comparatives', 'Comparatives'],
    'I am as light than a feather, I am as happy like an angel, I am as merry as a schoolboy.',
    'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.',
    [
      'I am as lighter as a feather, I am as happy as an angel, I am as merry as a schoolboy.',
      'I am as light as a feather, I am as happy like an angel, I am as merry as a schoolboy.',
      'I am as lighter as a feather, I am as happy like an angel, I am as merry as a schoolboy.',
    ],
    {
      facts: ['as light as', 'rule:as ... as'],
      source: 'A Christmas Carol by Charles Dickens (1843)',
    },
  ),
  two(
    ['Articles', 'Countable nouns'],
    'She had slight figure, a pale, gentle face, and fair hairs.',
    'She had a slight figure, a pale, gentle face, and fair hair.',
    [
      'She had slight figure, a pale, gentle face, and fair hair.',
      'She had a slight figure, a pale, gentle face, and fairs hair.',
      'She had slight figure, a pale, gentle face, and fairs hair.',
    ],
    {
      facts: ['a slight figure', 'rule:hair is uncountable', 'gentle'],
      source: 'Jane Eyre by Charlotte Brontë (1847)',
    },
  ),
  two(
    ['Verb "to be"', 'Countable nouns'],
    'There were nothing in them but a piece of breads.',
    'There was nothing in them but a piece of bread.',
    [
      'There were nothing in them but a piece of bread.',
      'There was nothing in them but piece of bread.',
      'There were nothing in them but piece of bread.',
    ],
    {
      facts: ['there was nothing', 'a piece of bread'],
      source: 'Great Expectations by Charles Dickens (1861)',
    },
  ),
  two(
    ['Verb "to be"', 'Plural "s"'],
    'There was three lady in the room and one gentleman.',
    'There were three ladies in the room and one gentleman.',
    [
      'There was three ladies in the room and one gentleman.',
      'There were three ladys in the room and one gentleman.',
      'There was three ladys in the room and one gentleman.',
    ],
    {
      facts: ['there were three', 'ladies'],
      source: 'Great Expectations by Charles Dickens (1861)',
    },
  ),
  two(
    ['Past tense', 'Prepositions'],
    'He were waiting me with great impatience.',
    'He was waiting for me with great impatience.',
    [
      'He were waiting for me with great impatience.',
      'He was waiting to me with great impatience.',
      'He were waiting to me with great impatience.',
    ],
    {
      facts: ['he was waiting', 'wait for'],
      source: 'Great Expectations by Charles Dickens (1861)',
    },
  ),
  two(
    ['Plural "s"', 'Subject-verb agreement'],
    'Eliminate all other factor, and the one which remain must be the truth.',
    'Eliminate all other factors, and the one which remains must be the truth.',
    [
      'Eliminate all others factors, and the one which remains must be the truth.',
      'Eliminate all other factors, and the one which remain must be the truth.',
      'Eliminate all others factors, and the one which remain must be the truth.',
    ],
    {
      facts: ['all other factors', 'remains'],
      source: 'The Sign of Four by Arthur Conan Doyle (1890)',
    },
  ),
  two(
    ['Subject-verb agreement', 'Pronouns'],
    'Darkness are cheap, and Scrooge liked.',
    'Darkness is cheap, and Scrooge liked it.',
    [
      'Darkness are cheap, and Scrooge liked it.',
      'Darkness is cheap, and Scrooge liking it.',
      'Darkness are cheap, and Scrooge liking it.',
    ],
    { facts: ['darkness is', 'liked it'], source: 'A Christmas Carol by Charles Dickens (1843)' },
  ),
  two(
    ['Countable nouns', 'Pronouns'],
    'The news were so surprising that nobody could believe them.',
    'The news was so surprising that nobody could believe it.',
    [
      'The news were so surprising that nobody could believe it.',
      'The news was so surprising that nobody could to believe it.',
      'The news were so surprising that nobody could to believe it.',
    ],
    { facts: ['news was', 'rule:news is singular', 'believe it', 'could'] },
  ),
  two(
    ['Relative clauses', 'Pronouns'],
    'Peter is the person which I told you about him.',
    'Peter is the person who I told you about.',
    [
      'Peter is the person what I told you about.',
      'Peter is the person who I told you about him.',
      'Peter is the person what I told you about him.',
    ],
    { facts: ['the person who', 'rule:who for people'] },
  ),
  two(
    ['Present perfect', 'Plural "s"'],
    'She has gone to the market yesterday and bought three kilo of apples.',
    'She went to the market yesterday and bought three kilos of apples.',
    [
      'She has gone to the market yesterday and bought three kilos of apples.',
      'She went to the market yesterday and bought three kilo’s of apples.',
      'She has gone to the market yesterday and bought three kilo’s of apples.',
    ],
    { facts: ['went', 'three kilos', 'bought'] },
  ),
  two(
    ['Prepositions', 'Subject-verb agreement'],
    'My little brother is afraid from the dark, so he always sleep with the light on.',
    'My little brother is afraid of the dark, so he always sleeps with the light on.',
    [
      'My little brother is afraid at the dark, so he always sleeps with the light on.',
      'My little brother is afraid of the dark, so he always sleep with the light on.',
      'My little brother is afraid at the dark, so he always sleep with the light on.',
    ],
    { facts: ['afraid of', 'sleeps'] },
  ),
  two(
    ['Past tense', 'Prepositions'],
    'We was lost, so we asked to a policeman the way to the station.',
    'We were lost, so we asked a policeman the way to the station.',
    [
      'We was lost, so we asked a policeman the way to the station.',
      'We were lost, so we asked at a policeman the way to the station.',
      'We was lost, so we asked at a policeman the way to the station.',
    ],
    { facts: ['we were', 'rule:ask someone'] },
  ),
  two(
    ['Comparatives', 'Subject-verb agreement'],
    'This is the more beautiful place I have ever seen, and the people is very friendly.',
    'This is the most beautiful place I have ever seen, and the people are very friendly.',
    [
      'This is most beautiful place I have ever seen, and the people are very friendly.',
      'This is the most beautiful place I have ever seen, and the people is very friendly.',
      'This is most beautiful place I have ever seen, and the people is very friendly.',
    ],
    { facts: ['the most beautiful', 'people are', 'rule:people is plural'] },
  ),
  two(
    ['Past tense', 'Double negative'],
    'I didn’t understood nothing, so the teacher explained it again.',
    'I didn’t understand anything, so the teacher explained it again.',
    [
      'I didn’t understood anything, so the teacher explained it again.',
      'I didn’t understand none, so the teacher explained it again.',
      'I didn’t understood none, so the teacher explained it again.',
    ],
    { facts: ['didn’t understand', 'anything'] },
  ),
  two(
    ['Future', 'Verb patterns'],
    'When I will finish school, I want to study for be a nurse.',
    'When I finish school, I want to study to be a nurse.',
    [
      'When I finishing school, I want to study to be a nurse.',
      'When I finish school, I want to study for be a nurse.',
      'When I finishing school, I want to study for be a nurse.',
    ],
    { facts: ['when i finish', 'to be a nurse'] },
  ),
  two(
    ['Subject-verb agreement', 'Subject-verb agreement'],
    'There is a new student in our class. She come from Brazil and speak three languages.',
    'There is a new student in our class. She comes from Brazil and speaks three languages.',
    [
      'There is a new student in our class. She come from Brazil and speaks three languages.',
      'There is a new student in our class. She comes from Brazil and speaking three languages.',
      'There is a new student in our class. She come from Brazil and speaking three languages.',
    ],
    { facts: ['comes from', 'speaks three languages'] },
  ),
  two(
    ['Pronouns', 'Double negative'],
    'I lost my glasses. Did you see it anywhere? I can’t see nothing without them.',
    'I lost my glasses. Did you see them anywhere? I can’t see anything without them.',
    [
      'I lost my glasses. Did you see they anywhere? I can’t see anything without them.',
      'I lost my glasses. Did you see them anywhere? I can’t see nothing without them.',
      'I lost my glasses. Did you see they anywhere? I can’t see nothing without them.',
    ],
    { facts: ['see them', 'anything', 'anywhere'] },
  ),
]

export const ERROR_BANK: ErrorItem[] = [...TIER_1, ...TIER_2, ...TIER_3]

export const BANK: GameBank<ErrorItem> = {
  slug: 'common-error-fixer',
  items: ERROR_BANK,
  // The faulty sentence is unique in the bank, and it is what the student sees.
  key: (q) => q.wrong,
  answer: (q) => q.options[q.answerIndex],
  options: (q) => q.options,
  tag: (q) => q.errorType,
  tier: (q) => q.tier,
  facts: (q) => q.facts ?? [],
  // A round spreads the rules: at most two questions on one, and a sentence
  // with two mistakes counts as the pair it mixes.
  group: (q) => (q.kinds ? [...q.kinds].sort().join(' + ') : q.errorType),
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
