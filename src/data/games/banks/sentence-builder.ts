import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Sentence Builder: tap the word tiles in the right order to build a sentence.
 *
 * Moved out of src/app/games/sentence-builder/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations, and by
 * the readers who checked them). The page marks a build right only if it
 * matches `correct` letter for letter. In 30 of the 47 sentences the same tiles
 * also make one or more other sentences that are also correct English, and a
 * student who builds one is marked wrong. The readings together found 51 such
 * orders, of five kinds:
 *
 *   - two clauses joined by "and", "or" or "but" that can change places, or whose
 *     objects can swap: "We can take the bus or we can walk", "He washed the
 *     dishes and she made dinner", "She sings and he plays the piano", "I like
 *     rugby and my sister likes cricket", "The film was exciting but it was long";
 *   - a phrase or an adverb that can move: "The cat on the sofa is sleeping",
 *     "The shop opens every day at eight", "If tomorrow it rains we will stay
 *     inside", "Before you leave close the window please", "She quietly spoke
 *     but everyone could hear her", "I have tea in the afternoon usually" (an
 *     adverb of frequency such as "usually" can also end a clause);
 *   - nouns that can swap, which changes the meaning but not the grammar: "She
 *     has a garden behind the small house", "The doctor who lives next door is a
 *     man", "Whenever I visit the museums I see London";
 *   - a clause that can swap with its partner: "When the pupils left the bell
 *     rang", "While she set the table he was cooking", "As soon as we left the
 *     film ended";
 *   - "so" that works as "so ... that": "I was so tired I went to bed early",
 *     "It was so cold we lit the fire".
 *
 * ACCEPTED SINCE 23 OCTOBER 2026. Each of those 30 sentences lists its other
 * orders in `alsoCorrect`, and the page marks a build that matches one right
 * (src/lib/games/scoring.ts, isAcceptedOrder). Accepting them changed what
 * counts as right, which is a scoring decision, so the list was written on
 * 16 October and left unread until the founder decided; the explanation for
 * each of those sentences meanwhile said that the other order was also correct
 * English, so a student who built one was not told it was bad English. The
 * explanations now say the game accepts it too, and
 * game-scoring-follows-the-founders-decisions.test.ts holds every order an
 * explanation calls correct to this list, and every order in the list to the
 * sentence's own tiles.
 *
 * No list of orders can be known to be complete: each reading found orders the
 * one before had missed. Orders that are grammatical but make no sense ("Because
 * we went home it was late", "Although she kept working she was tired") are not
 * listed, nor are orders that only move "a" or "the" to an unlikely place ("She
 * has the garden behind a small house"). The capital letters on the tiles
 * already rule out most other swaps, because a clause that begins with a
 * lower-case tile cannot start the sentence.
 *
 * The tiles carry no punctuation, so the explanations also show where the commas
 * go when the sentence is written down.
 */

export type SentenceType = 'simple' | 'compound' | 'complex'

export interface SentenceItem {
  tiles: string[]
  correct: string
  type: SentenceType
  note: string
  /**
   * Other orders of the same tiles that are also correct English. A build that
   * matches one is right, since 23 October 2026 (see the docblock).
   */
  alsoCorrect?: string[]
}

// Original sentence bank. `correct` is the target word order;
// tiles are presented scrambled at runtime.
export const SENTENCE_BANK: SentenceItem[] = [
  // ── Simple sentences (A2) ──────────────────────────────────────────────────
  {
    tiles: ['She', 'walks', 'to', 'school', 'every', 'morning'],
    correct: 'She walks to school every morning',
    type: 'simple',
    note: 'A simple sentence has one subject and one verb.',
  },
  {
    tiles: ['The', 'cat', 'is', 'sleeping', 'on', 'the', 'sofa'],
    correct: 'The cat is sleeping on the sofa',
    alsoCorrect: [
      'The cat on the sofa is sleeping',
      'The cat is on the sofa sleeping',
      'The sleeping cat is on the sofa',
    ],
    type: 'simple',
    note: 'Use "is + verb-ing" for an action happening now.',
  },
  {
    tiles: ['My', 'brother', 'plays', 'football', 'at', 'the', 'weekend'],
    correct: 'My brother plays football at the weekend',
    type: 'simple',
    note: 'In UK English we say "at the weekend".',
  },
  {
    tiles: ['We', 'had', 'lunch', 'in', 'the', 'park'],
    correct: 'We had lunch in the park',
    type: 'simple',
    note: '"Had" is the past tense of "have".',
  },
  {
    tiles: ['They', 'are', 'watching', 'a', 'film', 'tonight'],
    correct: 'They are watching a film tonight',
    type: 'simple',
    note: 'UK English prefers "film" over "movie".',
  },
  {
    tiles: ['I', 'bought', 'a', 'new', 'jumper', 'yesterday'],
    correct: 'I bought a new jumper yesterday',
    type: 'simple',
    note: 'A "jumper" is a knitted top in UK English.',
  },
  {
    tiles: ['The', 'train', 'leaves', 'at', 'nine', "o'clock"],
    correct: "The train leaves at nine o'clock",
    type: 'simple',
    note: 'Use the present simple for timetables.',
  },
  {
    tiles: ['Our', 'teacher', 'gave', 'us', 'some', 'homework'],
    correct: 'Our teacher gave us some homework',
    type: 'simple',
    note: '"Homework" is uncountable, so use "some".',
  },
  {
    tiles: ['She', 'has', 'a', 'small', 'garden', 'behind', 'the', 'house'],
    correct: 'She has a small garden behind the house',
    alsoCorrect: [
      'She has a small house behind the garden',
      'She has a garden behind the small house',
      'She has a house behind the small garden',
    ],
    type: 'simple',
    note: 'Adjectives like "small" go before the noun.',
  },
  {
    tiles: ['He', 'speaks', 'three', 'languages', 'very', 'well'],
    correct: 'He speaks three languages very well',
    type: 'simple',
    note: '"Very well" describes how he speaks.',
  },
  {
    tiles: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden'],
    correct: 'The children are playing in the garden',
    alsoCorrect: [
      'The children in the garden are playing',
      'The children are in the garden playing',
    ],
    type: 'simple',
    note: '"Children" is the irregular plural of "child".',
  },
  {
    tiles: ['I', 'usually', 'have', 'tea', 'in', 'the', 'afternoon'],
    correct: 'I usually have tea in the afternoon',
    alsoCorrect: ['I have tea in the afternoon usually'],
    type: 'simple',
    note: 'Adverbs of frequency like "usually" go before the main verb.',
  },
  {
    tiles: ['My', 'phone', 'is', 'on', 'the', 'kitchen', 'table'],
    correct: 'My phone is on the kitchen table',
    alsoCorrect: ['My kitchen phone is on the table'],
    type: 'simple',
    note: '"On" shows position on a surface.',
  },
  {
    tiles: ['We', 'visited', 'our', 'grandparents', 'last', 'summer'],
    correct: 'We visited our grandparents last summer',
    type: 'simple',
    note: '"Last summer" places the action in the past.',
  },
  {
    tiles: ['The', 'shop', 'opens', 'at', 'eight', 'every', 'day'],
    correct: 'The shop opens at eight every day',
    alsoCorrect: ['The shop opens every day at eight'],
    type: 'simple',
    note: 'Add "s" to the verb after "the shop" (he/she/it).',
  },
  {
    tiles: ['She', 'is', 'reading', 'an', 'interesting', 'book'],
    correct: 'She is reading an interesting book',
    type: 'simple',
    note: 'Use "an" before a vowel sound: "an interesting".',
  },

  // ── Compound sentences (A2-B1) ─────────────────────────────────────────────
  {
    tiles: ['I', 'wanted', 'to', 'go', 'out', 'but', 'it', 'was', 'raining'],
    correct: 'I wanted to go out but it was raining',
    alsoCorrect: ['I wanted to go but it was raining out'],
    type: 'compound',
    note: '"But" joins two ideas that contrast.',
  },
  {
    tiles: ['She', 'studied', 'hard', 'so', 'she', 'passed', 'the', 'exam'],
    correct: 'She studied hard so she passed the exam',
    alsoCorrect: [
      'She studied so hard she passed the exam',
      'She studied so she passed the hard exam',
    ],
    type: 'compound',
    note: '"So" shows a result.',
  },
  {
    tiles: ['We', 'can', 'walk', 'or', 'we', 'can', 'take', 'the', 'bus'],
    correct: 'We can walk or we can take the bus',
    alsoCorrect: ['We can take the bus or we can walk'],
    type: 'compound',
    note: '"Or" offers a choice between two options.',
  },
  {
    tiles: ['He', 'made', 'dinner', 'and', 'she', 'washed', 'the', 'dishes'],
    correct: 'He made dinner and she washed the dishes',
    alsoCorrect: [
      'He washed the dishes and she made dinner',
      'He made the dinner and she washed dishes',
      'He washed dishes and she made the dinner',
    ],
    type: 'compound',
    note: '"And" joins two equal ideas.',
  },
  {
    tiles: ['The', 'film', 'was', 'long', 'but', 'it', 'was', 'exciting'],
    correct: 'The film was long but it was exciting',
    alsoCorrect: ['The film was exciting but it was long'],
    type: 'compound',
    note: 'Use a comma before "but" in longer sentences.',
  },
  {
    tiles: ['I', 'was', 'tired', 'so', 'I', 'went', 'to', 'bed', 'early'],
    correct: 'I was tired so I went to bed early',
    alsoCorrect: ['I was so tired I went to bed early'],
    type: 'compound',
    note: '"So" connects a cause to its result.',
  },
  {
    tiles: ['You', 'can', 'have', 'tea', 'or', 'you', 'can', 'have', 'coffee'],
    correct: 'You can have tea or you can have coffee',
    alsoCorrect: ['You can have coffee or you can have tea'],
    type: 'compound',
    note: '"Or" presents alternatives.',
  },
  {
    tiles: ['She', 'plays', 'the', 'piano', 'and', 'he', 'sings'],
    correct: 'She plays the piano and he sings',
    alsoCorrect: ['She sings and he plays the piano'],
    type: 'compound',
    note: 'Both clauses can stand alone as sentences.',
  },
  {
    tiles: ['It', 'was', 'cold', 'so', 'we', 'lit', 'the', 'fire'],
    correct: 'It was cold so we lit the fire',
    alsoCorrect: ['It was so cold we lit the fire'],
    type: 'compound',
    note: '"Lit" is the past tense of "light".',
  },
  {
    tiles: ['He', 'tried', 'his', 'best', 'but', 'he', 'did', 'not', 'win'],
    correct: 'He tried his best but he did not win',
    alsoCorrect: ['He did not win but he tried his best'],
    type: 'compound',
    note: '"But" introduces an unexpected outcome.',
  },
  {
    tiles: ['We', 'finished', 'early', 'so', 'we', 'went', 'for', 'a', 'walk'],
    correct: 'We finished early so we went for a walk',
    alsoCorrect: [
      'We finished so we went for a walk early',
      'We finished so early we went for a walk',
    ],
    type: 'compound',
    note: 'UK English: "went for a walk".',
  },
  {
    tiles: ['I', 'like', 'cricket', 'and', 'my', 'sister', 'likes', 'rugby'],
    correct: 'I like cricket and my sister likes rugby',
    alsoCorrect: ['I like rugby and my sister likes cricket'],
    type: 'compound',
    note: '"And" links two related facts.',
  },
  {
    tiles: ['The', 'sun', 'came', 'out', 'so', 'we', 'went', 'to', 'the', 'beach'],
    correct: 'The sun came out so we went to the beach',
    type: 'compound',
    note: '"So" signals consequence.',
  },
  {
    tiles: ['She', 'spoke', 'quietly', 'but', 'everyone', 'could', 'hear', 'her'],
    correct: 'She spoke quietly but everyone could hear her',
    alsoCorrect: ['She quietly spoke but everyone could hear her'],
    type: 'compound',
    note: '"But" contrasts the two clauses.',
  },
  {
    tiles: ['You', 'should', 'revise', 'now', 'or', 'you', 'will', 'forget'],
    correct: 'You should revise now or you will forget',
    alsoCorrect: ['You should now revise or you will forget'],
    type: 'compound',
    note: '"Or" can warn of a result.',
  },

  // ── Complex sentences (B1) ─────────────────────────────────────────────────
  {
    tiles: ['Because', 'it', 'was', 'late', 'we', 'went', 'home'],
    correct: 'Because it was late we went home',
    type: 'complex',
    note: '"Because" introduces a subordinate clause giving a reason.',
  },
  {
    tiles: ['When', 'the', 'bell', 'rang', 'the', 'pupils', 'left'],
    correct: 'When the bell rang the pupils left',
    alsoCorrect: ['When the pupils left the bell rang'],
    type: 'complex',
    note: '"When" introduces a clause about time.',
  },
  {
    tiles: ['Although', 'she', 'was', 'tired', 'she', 'kept', 'working'],
    correct: 'Although she was tired she kept working',
    type: 'complex',
    note: '"Although" shows contrast within one sentence.',
  },
  {
    tiles: ['If', 'it', 'rains', 'tomorrow', 'we', 'will', 'stay', 'inside'],
    correct: 'If it rains tomorrow we will stay inside',
    alsoCorrect: [
      'If it rains we will stay inside tomorrow',
      'If tomorrow it rains we will stay inside',
    ],
    type: 'complex',
    note: 'First conditional: "If + present, will + verb".',
  },
  {
    tiles: ['The', 'book', 'that', 'I', 'read', 'was', 'fascinating'],
    correct: 'The book that I read was fascinating',
    type: 'complex',
    note: '"That I read" is a relative clause describing the book.',
  },
  {
    tiles: ['While', 'he', 'was', 'cooking', 'she', 'set', 'the', 'table'],
    correct: 'While he was cooking she set the table',
    alsoCorrect: [
      'While she set the table he was cooking',
      'While he set the table she was cooking',
      'While she was cooking he set the table',
    ],
    type: 'complex',
    note: '"While" links two actions at the same time.',
  },
  {
    tiles: ['She', 'smiled', 'because', 'she', 'had', 'won', 'the', 'prize'],
    correct: 'She smiled because she had won the prize',
    alsoCorrect: [
      'She had smiled because she won the prize',
      'She won the prize because she had smiled',
      'She had won the prize because she smiled',
    ],
    type: 'complex',
    note: 'The subordinate clause can follow the main clause.',
  },
  {
    tiles: ['After', 'we', 'had', 'eaten', 'we', 'watched', 'television'],
    correct: 'After we had eaten we watched television',
    type: 'complex',
    note: '"After" shows which action happened first.',
  },
  {
    tiles: ['The', 'man', 'who', 'lives', 'next', 'door', 'is', 'a', 'doctor'],
    correct: 'The man who lives next door is a doctor',
    alsoCorrect: [
      'The man who is a doctor lives next door',
      'The doctor who lives next door is a man',
      'The doctor who is a man lives next door',
      'The man is a doctor who lives next door',
      'The doctor is a man who lives next door',
    ],
    type: 'complex',
    note: '"Who lives next door" tells us which man.',
  },
  {
    tiles: ['Before', 'you', 'leave', 'please', 'close', 'the', 'window'],
    correct: 'Before you leave please close the window',
    alsoCorrect: ['Before you leave close the window please'],
    type: 'complex',
    note: '"Before" introduces a time clause.',
  },
  {
    tiles: ['Even', 'though', 'it', 'was', 'expensive', 'they', 'bought', 'it'],
    correct: 'Even though it was expensive they bought it',
    type: 'complex',
    note: '"Even though" emphasises a strong contrast.',
  },
  {
    tiles: ['Since', 'we', 'moved', 'here', 'we', 'have', 'made', 'new', 'friends'],
    correct: 'Since we moved here we have made new friends',
    alsoCorrect: ['Since we moved we have made new friends here'],
    type: 'complex',
    note: '"Since" can mean "from that time" with the present perfect.',
  },
  {
    tiles: ['Unless', 'you', 'hurry', 'you', 'will', 'miss', 'the', 'train'],
    correct: 'Unless you hurry you will miss the train',
    type: 'complex',
    note: '"Unless" means "if not".',
  },
  {
    tiles: ['The', 'café', 'where', 'we', 'met', 'has', 'now', 'closed'],
    correct: 'The café where we met has now closed',
    alsoCorrect: ['The café where we met has closed now', 'The café where we met now has closed'],
    type: 'complex',
    note: '"Where we met" is a relative clause about a place.',
  },
  {
    tiles: ['As', 'soon', 'as', 'the', 'film', 'ended', 'we', 'left'],
    correct: 'As soon as the film ended we left',
    alsoCorrect: ['As soon as we left the film ended'],
    type: 'complex',
    note: '"As soon as" means immediately after.',
  },
  {
    tiles: ['Whenever', 'I', 'visit', 'London', 'I', 'see', 'the', 'museums'],
    correct: 'Whenever I visit London I see the museums',
    alsoCorrect: [
      'Whenever I see the museums I visit London',
      'Whenever I see London I visit the museums',
      'Whenever I visit the museums I see London',
    ],
    type: 'complex',
    note: '"Whenever" means "every time that".',
  },
]

export const BANK: GameBank<SentenceItem> = {
  slug: 'sentence-builder',
  items: SENTENCE_BANK,
  // The student sees scrambled tiles and builds the sentence, so the sentence
  // names the question. None repeats, and the tiles joined by spaces equal it.
  key: (q) => q.correct,
  answer: (q) => q.correct,
  // The student builds the answer from tiles: there are no options to choose from.
  options: () => null,
  tag: (q) => q.type,
}
