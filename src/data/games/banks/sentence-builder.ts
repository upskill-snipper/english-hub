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
 * Until 24 October 2026 the tiles carried no punctuation, so the explanations
 * showed where the commas go when the sentence is written down. A sentence can
 * now carry comma and semicolon tiles (see below); the 30 sentences with other
 * accepted orders still have none, because their orders are held, tile for
 * tile, by game-scoring-follows-the-founders-decisions.test.ts.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "weak in
 * depth and content"; the audit (.tmp-games-audit/REPORT-ks3.md) found 47
 * sentences labelled A2 (beginner EAL) for a KS3 game, the first word given
 * away in 46 of them (it was the only tile with a capital letter), 12 of the
 * 16 complex sentences needing a comma no tile could supply, and "and", "but"
 * or "so" joining the same round over and over. The bank now holds 202: 70
 * simple (tier 1), 62 compound (tier 2) and 70 complex (tier 3). The page
 * deals four of each type a round and prefers sentences the student has not
 * met, so fifteen rounds pass before a compound sentence comes back, and
 * seventeen before a simple or a complex one does.
 *
 *   - Real text first. 89 of the 155 new sentences are copied word for word,
 *     by script, from the out-of-copyright novels in src/data/full-texts
 *     (Dickens, Orwell, Charlotte Brontë, Austen, Mary Shelley, Wells, Conan
 *     Doyle, Stevenson, George Eliot, Fitzgerald), each with its `source`,
 *     which the page shows. The other 66 are the site's own, written for one
 *     structure each: a fronted adverbial, a semicolon, a conditional, a
 *     relative clause. Half of the site's own are compound, because few real
 *     compound sentences pass the one-right-order reading below.
 *   - Punctuation tiles. A sentence whose written form needs a comma or a
 *     semicolon has it as a tile, placed by the student like any word: after
 *     a fronted clause or phrase, before the conjunction joining two main
 *     clauses, around a relative clause that adds information. The page
 *     joins a punctuation tile to the word before it (joinTiles), so the
 *     tiles in order are the sentence as written. Five existing complex
 *     sentences that open with their subordinate clause gained the comma
 *     they need ("Because it was late, we went home"); their keys changed
 *     with it.
 *   - Capitals. 93 of the 155 new sentences have a second tile with a capital
 *     letter, a name or "I", so the capital no longer marks the first word on
 *     its own. In the other 62 it still does ("The curtain rose, and everyone
 *     gasped"), and it stays: the capital on the first word is what
 *     keeps a clause that begins with a small letter from starting the
 *     sentence, so it is part of what gives the tiles one right order.
 *   - One right order. Every new sentence was read twice for a second order
 *     of its tiles that is also good English, and none has one, so none lists
 *     `alsoCorrect` (game-scoring-follows-the-founders-decisions.test.ts holds
 *     the bank to the founder's 30 sentences and 51 orders). The second
 *     reading, held to the kinds of order the founder accepted, took out 30
 *     real sentences that the first had passed and replaced 33 of the site's
 *     own. What they had: two clauses that could trade places ("When I got
 *     into the courtyard, I found Estella waiting"); a name and a pronoun, or
 *     two nouns, that could swap ("Mollie agreed, but she did not sound very
 *     convinced", "Individuals vary, but percentages remain constant"); an
 *     adjective that could move to the other noun ("Each had his own
 *     following, and there were some violent debates"); or an adverb or a
 *     phrase that could move, often to the front of the second clause ("Snow
 *     had fallen all night", "Haggerston has our directions, and all will be
 *     completed in a week"). As the docblock above says of the earlier
 *     sentences, orders that make no sense, or that only move "a" or "the"
 *     to an unlikely place, were not counted.
 *
 * The round's four of each type and the tiers (simple 1, compound 2, complex
 * 3) are the page's own and unchanged. `group` (joinsOf) is the word or mark
 * that joins the clauses, so a round no longer holds four sentences joined by
 * "so". The 47 earlier sentences are kept as they were, apart from those five
 * commas: they are the easiest in the bank, and 30 of them carry the accepted
 * orders the founder decided on 23 October 2026.
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided. Every
 * sentence was read again for a second order of its tiles that is good
 * English, held to the kinds of order the founder accepted, and every real
 * line against the book (in the chapter named, starting and ending where the
 * book's sentence does, with its capitals and commas). Three had one:
 *
 *   - "Her eyes met my brother’s, and her hesitation ended" (The War of the
 *     Worlds) also builds "Her hesitation ended, and her eyes met my
 *     brother’s": two clauses that trade places, as "She sings and he plays
 *     the piano" does; removed.
 *   - "The drawing-room curtains were open, and I saw that the room was empty"
 *     (The Great Gatsby) also builds "The room was empty, and I saw that the
 *     drawing-room curtains were open"; removed.
 *   - "The curtain rose, and the audience gasped", the site's own, also built
 *     "The audience gasped, and the curtain rose". It is now "The curtain
 *     rose, and everyone gasped": a clause that opens with a small letter
 *     cannot start the sentence, and a curtain cannot gasp.
 *
 * None could take its second order into `alsoCorrect`, which is the founder's
 * list (game-scoring-follows-the-founders-decisions.test.ts holds it at 30
 * sentences and 51 orders). For the same reason the seven accepted-order
 * complex sentences that open with a subordinate clause still have no comma
 * tile: "When the bell rang the pupils left", "If it rains tomorrow we will
 * stay inside", "While he was cooking she set the table", "Before you leave
 * please close the window", "Since we moved here we have made new friends",
 * "As soon as the film ended we left" and "Whenever I visit London I see the
 * museums". Adding one is his decision.
 *
 * The figures above are the rebuild's. The bank now holds 200: 70 simple
 * (tier 1), 60 compound (tier 2) and 70 complex (tier 3), 153 of them added on
 * 24 October 2026 and 87 of those real lines. The tiers climb as they should:
 * tier 3 has the longest sentences (9.3 word tiles on average, against 8.7 at
 * tier 2 and 7.3 at tier 1), each with a clause that depends on another.
 */

export type SentenceType = 'simple' | 'compound' | 'complex'

export interface SentenceItem {
  /**
   * The tiles in the sentence's own order (the page scrambles them). A comma or
   * semicolon is a tile of its own, joined to the word before it.
   */
  tiles: string[]
  correct: string
  type: SentenceType
  /** A one-line teaching note from the 16 October bank; the explanation now does this job. */
  note?: string
  /**
   * Other orders of the same tiles that are also correct English. A build that
   * matches one is right, since 23 October 2026 (see the docblock).
   */
  alsoCorrect?: string[]
  /** Where a real sentence comes from, copied exactly; shown under the tiles. */
  source?: string
}

/** The tiles as written: words joined by spaces, a comma or semicolon joined to the word before it. */
export function joinTiles(tiles: readonly string[]): string {
  return tiles.join(' ').replace(/ ([,;:])/g, '$1')
}

// `correct` is the sentence as written (no full stop: the page adds one);
// the tiles, in order, joined by joinTiles, are `correct`.
export const SENTENCE_BANK: SentenceItem[] = [
  // ── Simple sentences (tier 1) ──────────────────────────────────────────────────
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

  // ── Compound sentences (tier 2) ────────────────────────────────────────────
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

  // ── Complex sentences (tier 3) ─────────────────────────────────────────────────
  {
    tiles: ['Because', 'it', 'was', 'late', ',', 'we', 'went', 'home'],
    correct: 'Because it was late, we went home',
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
    tiles: ['Although', 'she', 'was', 'tired', ',', 'she', 'kept', 'working'],
    correct: 'Although she was tired, she kept working',
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
    tiles: ['After', 'we', 'had', 'eaten', ',', 'we', 'watched', 'television'],
    correct: 'After we had eaten, we watched television',
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
    tiles: ['Even', 'though', 'it', 'was', 'expensive', ',', 'they', 'bought', 'it'],
    correct: 'Even though it was expensive, they bought it',
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
    tiles: ['Unless', 'you', 'hurry', ',', 'you', 'will', 'miss', 'the', 'train'],
    correct: 'Unless you hurry, you will miss the train',
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
  // ── Simple sentences added for depth (tier 1): real lines first, then the site's own ────
  {
    tiles: ['Napoleon', 'took', 'no', 'interest', 'in', "Snowball's", 'committees'],
    correct: "Napoleon took no interest in Snowball's committees",
    type: 'simple',
    source: 'George Orwell, Animal Farm, Chapter III',
  },
  {
    tiles: ['The', 'pigs', 'were', 'in', 'ecstasies', 'over', "Napoleon's", 'cunning'],
    correct: "The pigs were in ecstasies over Napoleon's cunning",
    type: 'simple',
    source: 'George Orwell, Animal Farm, Chapter VIII',
  },
  {
    tiles: ['Wistful', 'glances', 'were', 'sent', 'in', 'the', 'direction', 'of', 'Foxwood'],
    correct: 'Wistful glances were sent in the direction of Foxwood',
    type: 'simple',
    source: 'George Orwell, Animal Farm, Chapter VIII',
  },
  {
    tiles: ['All', 'the', 'habits', 'of', 'Man', 'are', 'evil'],
    correct: 'All the habits of Man are evil',
    type: 'simple',
    source: 'George Orwell, Animal Farm, Chapter I',
  },
  {
    tiles: ['Comrade', 'Snowball', 'will', 'lead', 'the', 'way'],
    correct: 'Comrade Snowball will lead the way',
    type: 'simple',
    source: 'George Orwell, Animal Farm, Chapter II',
  },
  {
    tiles: [
      'Mr.',
      'Hyde',
      'shrank',
      'back',
      'with',
      'a',
      'hissing',
      'intake',
      'of',
      'the',
      'breath',
    ],
    correct: 'Mr. Hyde shrank back with a hissing intake of the breath',
    type: 'simple',
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Search for Mr. Hyde',
  },
  {
    tiles: ['The', 'quarrel', 'with', 'Lanyon', 'was', 'incurable'],
    correct: 'The quarrel with Lanyon was incurable',
    type: 'simple',
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Incident of Dr. Lanyon',
  },
  {
    tiles: ['It', 'was', 'the', 'hand', 'of', 'Edward', 'Hyde'],
    correct: 'It was the hand of Edward Hyde',
    type: 'simple',
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Henry Jekyll’s Full Statement of the Case',
  },
  {
    tiles: ['Mr.', 'Abel', 'White', 'was', 'an', 'obstinate', 'man'],
    correct: 'Mr. Abel White was an obstinate man',
    type: 'simple',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter XII',
  },
  {
    tiles: ['Major', 'Sholto', 'was', 'the', 'hardest', 'hit'],
    correct: 'Major Sholto was the hardest hit',
    type: 'simple',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter XII',
  },
  {
    tiles: ['The', 'sixth', 'star', 'fell', 'at', 'Wimbledon'],
    correct: 'The sixth star fell at Wimbledon',
    type: 'simple',
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter XVII',
  },
  {
    tiles: ['We', 'crossed', 'Richmond', 'Bridge', 'about', 'half', 'past', 'eight'],
    correct: 'We crossed Richmond Bridge about half past eight',
    type: 'simple',
    source: 'H. G. Wells, The War of the Worlds, Book Two, Chapter I',
  },
  {
    tiles: ['All', 'the', 'rest', 'of', 'London', 'was', 'black'],
    correct: 'All the rest of London was black',
    type: 'simple',
    source: 'H. G. Wells, The War of the Worlds, Book Two, Chapter VII',
  },
  {
    tiles: ['The', 'Ghost', 'of', 'Christmas', 'Present', 'rose'],
    correct: 'The Ghost of Christmas Present rose',
    type: 'simple',
    source: 'Charles Dickens, A Christmas Carol, Stave III',
  },
  {
    tiles: [
      'Any',
      'Cratchit',
      'would',
      'have',
      'blushed',
      'to',
      'hint',
      'at',
      'such',
      'a',
      'thing',
    ],
    correct: 'Any Cratchit would have blushed to hint at such a thing',
    type: 'simple',
    source: 'Charles Dickens, A Christmas Carol, Stave III',
  },
  {
    tiles: ['A', 'positive', 'light', 'appeared', 'to', 'issue', 'from', "Fezziwig's", 'calves'],
    correct: "A positive light appeared to issue from Fezziwig's calves",
    type: 'simple',
    source: 'Charles Dickens, A Christmas Carol, Stave II',
  },
  {
    tiles: ["It's", 'twice', 'the', 'size', 'of', 'Tiny', 'Tim'],
    correct: "It's twice the size of Tiny Tim",
    type: 'simple',
    source: 'Charles Dickens, A Christmas Carol, Stave V',
  },
  {
    tiles: ['Mr.', 'Kirwin', 'regarded', 'me', 'with', 'a', 'troubled', 'countenance'],
    correct: 'Mr. Kirwin regarded me with a troubled countenance',
    type: 'simple',
    source: 'Mary Shelley, Frankenstein, Chapter XXI',
  },
  {
    tiles: ['I', 'saw', 'Mr.', 'Pumblechook', 'balance', 'his', 'knife'],
    correct: 'I saw Mr. Pumblechook balance his knife',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 4',
  },
  {
    tiles: ['I', 'considered', 'Mr.', 'Pumblechook', 'wretched', 'company'],
    correct: 'I considered Mr. Pumblechook wretched company',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 8',
  },
  {
    tiles: ['In', 'these', 'discussions', ',', 'Joe', 'bore', 'no', 'part'],
    correct: 'In these discussions, Joe bore no part',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 12',
  },
  {
    tiles: ['Instead', 'of', 'answering', ',', 'Estella', 'burst', 'out', 'laughing'],
    correct: 'Instead of answering, Estella burst out laughing',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 33',
  },
  {
    tiles: ['A', 'thousand', 'Miss', 'Havishams', 'haunted', 'me'],
    correct: 'A thousand Miss Havishams haunted me',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 38',
  },
  {
    tiles: ['All', 'this', 'time', ',', 'Estella', 'knitted', 'on'],
    correct: 'All this time, Estella knitted on',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 44',
  },
  {
    tiles: ['Such', 'was', 'my', 'first', 'day', 'at', 'Lowood'],
    correct: 'Such was my first day at Lowood',
    type: 'simple',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 5',
  },
  {
    tiles: ['I', 'was', 'brought', 'face', 'to', 'face', 'with', 'Necessity'],
    correct: 'I was brought face to face with Necessity',
    type: 'simple',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 28',
  },
  {
    tiles: ['Diana', 'offered', 'to', 'teach', 'me', 'German'],
    correct: 'Diana offered to teach me German',
    type: 'simple',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 30',
  },
  {
    tiles: ['Mr.', 'Wood', 'seemed', 'at', 'a', 'loss'],
    correct: 'Mr. Wood seemed at a loss',
    type: 'simple',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 26',
  },
  {
    tiles: ['Sir', 'William', 'had', 'been', 'delighted', 'with', 'him'],
    correct: 'Sir William had been delighted with him',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 3',
  },
  {
    tiles: ['In', 'understanding', 'Darcy', 'was', 'the', 'superior'],
    correct: 'In understanding Darcy was the superior',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 4',
  },
  {
    tiles: ['Mr.', 'Collins', 'was', 'eloquent', 'in', 'her', 'praise'],
    correct: 'Mr. Collins was eloquent in her praise',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 14',
  },
  {
    tiles: ['It', 'gives', 'me', 'pain', 'to', 'speak', 'ill', 'of', 'a', 'Darcy'],
    correct: 'It gives me pain to speak ill of a Darcy',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 16',
  },
  {
    tiles: ['Sir', 'William', 'did', 'not', 'say', 'much'],
    correct: 'Sir William did not say much',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 29',
  },
  {
    tiles: ['Mr.', 'Darcy', 'had', 'been', 'at', 'her', "sister's", 'wedding'],
    correct: "Mr. Darcy had been at her sister's wedding",
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 51',
  },
  {
    tiles: ['Mrs.', 'Bennet', 'was', 'quite', 'in', 'the', 'fidgets'],
    correct: 'Mrs. Bennet was quite in the fidgets',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 53',
  },
  {
    tiles: ['There', 'had', 'been', 'no', 'bells', 'in', 'Lantern', 'Yard'],
    correct: 'There had been no bells in Lantern Yard',
    type: 'simple',
    source: 'George Eliot, Silas Marner, Chapter X',
  },
  {
    tiles: ['Mr.', 'Pocket', 'uttered', 'a', 'dismal', 'groan'],
    correct: 'Mr. Pocket uttered a dismal groan',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 23',
  },
  {
    tiles: ['A', 'change', 'passed', 'over', 'Mr.', 'Trabb'],
    correct: 'A change passed over Mr. Trabb',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 19',
  },
  {
    tiles: ['Miss', 'Sarah', 'Pocket', 'came', 'to', 'the', 'gate'],
    correct: 'Miss Sarah Pocket came to the gate',
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 15',
  },
  {
    tiles: ['Miss', "Skiffins's", 'brother', 'conducted', 'the', 'negotiation'],
    correct: "Miss Skiffins's brother conducted the negotiation",
    type: 'simple',
    source: 'Charles Dickens, Great Expectations, Chapter 37',
  },
  {
    tiles: ['Mr.', 'Rochester', 'professed', 'to', 'be', 'puzzled'],
    correct: 'Mr. Rochester professed to be puzzled',
    type: 'simple',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 24',
  },
  {
    tiles: ['St.', 'John', 'passed', 'the', 'window', 'reading', 'a', 'letter'],
    correct: 'St. John passed the window reading a letter',
    type: 'simple',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 30',
  },
  {
    tiles: ['Mrs.', 'Bennet', 'was', 'profuse', 'in', 'her', 'acknowledgments'],
    correct: 'Mrs. Bennet was profuse in her acknowledgments',
    type: 'simple',
    source: 'Jane Austen, Pride and Prejudice, Chapter 9',
  },
  {
    tiles: [
      'Every',
      'Saturday',
      ',',
      'Grandpa',
      'Joe',
      'swims',
      'fifty',
      'lengths',
      'of',
      'the',
      'pool',
    ],
    correct: 'Every Saturday, Grandpa Joe swims fifty lengths of the pool',
    type: 'simple',
  },
  {
    tiles: ['Mr', 'Patel', 'taught', 'our', 'class', 'the', 'rules', 'of', 'chess'],
    correct: 'Mr Patel taught our class the rules of chess',
    type: 'simple',
  },
  {
    tiles: ['Without', 'a', 'word', ',', 'Amira', 'slipped', 'out', 'of', 'the', 'room'],
    correct: 'Without a word, Amira slipped out of the room',
    type: 'simple',
  },
  {
    tiles: ['The', 'Romans', 'built', 'straight', 'roads', 'across', 'Britain'],
    correct: 'The Romans built straight roads across Britain',
    type: 'simple',
  },
  {
    tiles: ['In', '1666', ',', 'a', 'great', 'fire', 'destroyed', 'much', 'of', 'London'],
    correct: 'In 1666, a great fire destroyed much of London',
    type: 'simple',
  },
  {
    tiles: ['Sunlight', 'takes', 'about', 'eight', 'minutes', 'to', 'reach', 'the', 'Earth'],
    correct: 'Sunlight takes about eight minutes to reach the Earth',
    type: 'simple',
  },
  {
    tiles: ['During', 'the', 'storm', ',', "Kemi's", 'kitten', 'hid', 'under', 'the', 'stairs'],
    correct: "During the storm, Kemi's kitten hid under the stairs",
    type: 'simple',
  },
  {
    tiles: ['Our', 'neighbour', ',', 'Mrs', 'Nowak', ',', 'keeps', 'bees', 'in', 'her', 'garden'],
    correct: 'Our neighbour, Mrs Nowak, keeps bees in her garden',
    type: 'simple',
  },
  {
    tiles: [
      'After',
      'lunch',
      ',',
      'the',
      'whole',
      'of',
      'Year',
      '8',
      'walked',
      'to',
      'the',
      'museum',
    ],
    correct: 'After lunch, the whole of Year 8 walked to the museum',
    type: 'simple',
  },
  {
    tiles: ['Behind', 'the', 'library', ',', 'a', 'footpath', 'winds', 'through', 'the', 'woods'],
    correct: 'Behind the library, a footpath winds through the woods',
    type: 'simple',
  },
  {
    tiles: ['Like', 'most', 'cats', ',', 'Biscuit', 'sleeps', 'for', 'most', 'of', 'the', 'day'],
    correct: 'Like most cats, Biscuit sleeps for most of the day',
    type: 'simple',
  },
  // ── Compound sentences added for depth (tier 2): real lines first, then the site's own ────
  {
    tiles: ['Darkness', 'is', 'cheap', ',', 'and', 'Scrooge', 'liked', 'it'],
    correct: 'Darkness is cheap, and Scrooge liked it',
    type: 'compound',
    source: 'Charles Dickens, A Christmas Carol, Stave I',
  },
  {
    tiles: ['Everything', 'was', 'unchanged', ',', 'and', 'Miss', 'Havisham', 'was', 'alone'],
    correct: 'Everything was unchanged, and Miss Havisham was alone',
    type: 'compound',
    source: 'Charles Dickens, Great Expectations, Chapter 15',
  },
  {
    tiles: ['You', "don't", 'deserve', 'help', ',', 'but', "I'll", 'help', 'you'],
    correct: "You don't deserve help, but I'll help you",
    type: 'compound',
    source: 'Charles Dickens, Great Expectations, Chapter 18',
  },
  {
    tiles: ['Breakfast', 'was', 'over', ',', 'and', 'none', 'had', 'breakfasted'],
    correct: 'Breakfast was over, and none had breakfasted',
    type: 'compound',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 5',
  },
  {
    tiles: ['Four', 'weeks', 'passed', 'away', ',', 'and', 'Jane', 'saw', 'nothing', 'of', 'him'],
    correct: 'Four weeks passed away, and Jane saw nothing of him',
    type: 'compound',
    source: 'Jane Austen, Pride and Prejudice, Chapter 26',
  },
  {
    tiles: ['Her', 'colour', 'changed', ',', 'and', 'she', 'said', 'no', 'more'],
    correct: 'Her colour changed, and she said no more',
    type: 'compound',
    source: 'Jane Austen, Pride and Prejudice, Chapter 43',
  },
  {
    tiles: ['The', 'tears', 'fell', ',', 'and', 'Nancy', 'ceased', 'to', 'speak'],
    correct: 'The tears fell, and Nancy ceased to speak',
    type: 'compound',
    source: 'George Eliot, Silas Marner, Chapter XVIII',
  },
  {
    tiles: ['He', 'was', 'hatless', ',', 'and', 'his', 'coat', 'was', 'unbuttoned'],
    correct: 'He was hatless, and his coat was unbuttoned',
    type: 'compound',
    source: 'H. G. Wells, The War of the Worlds, Book One, Chapter XI',
  },
  {
    tiles: ['I', 'am', 'miserable', ',', 'and', 'they', 'shall', 'share', 'my', 'wretchedness'],
    correct: 'I am miserable, and they shall share my wretchedness',
    type: 'compound',
    source: 'Mary Shelley, Frankenstein, Chapter X',
  },
  {
    tiles: [
      'The',
      'task',
      'of',
      'his',
      'destruction',
      'was',
      'mine',
      ',',
      'but',
      'I',
      'have',
      'failed',
    ],
    correct: 'The task of his destruction was mine, but I have failed',
    type: 'compound',
    source: 'Mary Shelley, Frankenstein, Chapter XXIV',
  },
  {
    tiles: [
      'Miss',
      'Darcy',
      'and',
      'her',
      'brother',
      'appeared',
      ',',
      'and',
      'this',
      'formidable',
      'introduction',
      'took',
      'place',
    ],
    correct: 'Miss Darcy and her brother appeared, and this formidable introduction took place',
    type: 'compound',
    source: 'Jane Austen, Pride and Prejudice, Chapter 44',
  },
  {
    tiles: [
      'I',
      'have',
      'been',
      'a',
      'disappointed',
      'man',
      ',',
      'and',
      'my',
      'spirits',
      'will',
      'not',
      'bear',
      'solitude',
    ],
    correct: 'I have been a disappointed man, and my spirits will not bear solitude',
    type: 'compound',
    source: 'Jane Austen, Pride and Prejudice, Chapter 16',
  },
  {
    tiles: ['The', 'bus', 'broke', 'down', ',', 'so', 'Maya', 'missed', 'assembly'],
    correct: 'The bus broke down, so Maya missed assembly',
    type: 'compound',
  },
  {
    tiles: ['Kofi', 'plays', 'the', 'drums', ',', 'but', 'his', 'parents', 'prefer', 'silence'],
    correct: 'Kofi plays the drums, but his parents prefer silence',
    type: 'compound',
  },
  {
    tiles: [
      'The',
      'river',
      'burst',
      'its',
      'banks',
      ',',
      'and',
      'hundreds',
      'of',
      'homes',
      'flooded',
    ],
    correct: 'The river burst its banks, and hundreds of homes flooded',
    type: 'compound',
  },
  {
    tiles: ['The', 'kettle', 'boiled', ',', 'and', 'Mum', 'made', 'the', 'tea'],
    correct: 'The kettle boiled, and Mum made the tea',
    type: 'compound',
  },
  {
    tiles: ['The', 'sun', 'came', 'out', ',', 'so', 'we', 'had', 'a', 'picnic'],
    correct: 'The sun came out, so we had a picnic',
    type: 'compound',
  },
  {
    tiles: ['The', 'curtain', 'rose', ',', 'and', 'everyone', 'gasped'],
    correct: 'The curtain rose, and everyone gasped',
    type: 'compound',
  },
  {
    tiles: ['Gran', 'knitted', 'me', 'a', 'scarf', ',', 'but', 'the', 'dog', 'chewed', 'it'],
    correct: 'Gran knitted me a scarf, but the dog chewed it',
    type: 'compound',
  },
  {
    tiles: ['The', 'waves', 'were', 'enormous', ';', 'nobody', 'dared', 'to', 'swim'],
    correct: 'The waves were enormous; nobody dared to swim',
    type: 'compound',
  },
  {
    tiles: [
      'The',
      'film',
      'lasted',
      'three',
      'hours',
      ',',
      'but',
      'Priya',
      'enjoyed',
      'every',
      'minute',
    ],
    correct: 'The film lasted three hours, but Priya enjoyed every minute',
    type: 'compound',
  },
  {
    tiles: ['The', 'shops', 'were', 'shut', ',', 'so', 'Dad', 'made', 'pancakes'],
    correct: 'The shops were shut, so Dad made pancakes',
    type: 'compound',
  },
  {
    tiles: ['The', 'museum', 'was', 'closed', ',', 'so', 'we', 'explored', 'Conwy'],
    correct: 'The museum was closed, so we explored Conwy',
    type: 'compound',
  },
  {
    tiles: ['Grandad', 'fell', 'asleep', ',', 'and', 'the', 'popcorn', 'went', 'cold'],
    correct: 'Grandad fell asleep, and the popcorn went cold',
    type: 'compound',
  },
  {
    tiles: ['The', 'printer', 'jammed', ',', 'so', 'Ms', 'Okafor', 'dictated', 'the', 'questions'],
    correct: 'The printer jammed, so Ms Okafor dictated the questions',
    type: 'compound',
  },
  {
    tiles: ['The', 'referee', 'blew', 'the', 'final', 'whistle', ',', 'and', 'Wales', 'had', 'won'],
    correct: 'The referee blew the final whistle, and Wales had won',
    type: 'compound',
  },
  {
    tiles: [
      'The',
      'lift',
      'has',
      'broken',
      'down',
      ',',
      'so',
      'we',
      'must',
      'take',
      'the',
      'stairs',
    ],
    correct: 'The lift has broken down, so we must take the stairs',
    type: 'compound',
  },
  {
    tiles: ['The', 'baby', 'was', 'asleep', ',', 'so', 'we', 'whispered'],
    correct: 'The baby was asleep, so we whispered',
    type: 'compound',
  },
  {
    tiles: ['The', 'volcano', 'erupted', ',', 'and', 'flights', 'were', 'cancelled'],
    correct: 'The volcano erupted, and flights were cancelled',
    type: 'compound',
  },
  {
    tiles: [
      'The',
      'puppy',
      'ate',
      'my',
      'homework',
      ',',
      'but',
      'Mr',
      'Lewis',
      'did',
      'not',
      'believe',
      'me',
    ],
    correct: 'The puppy ate my homework, but Mr Lewis did not believe me',
    type: 'compound',
  },
  {
    tiles: ['It', 'was', 'raining', ',', 'so', 'we', 'played', 'board', 'games'],
    correct: 'It was raining, so we played board games',
    type: 'compound',
  },
  {
    tiles: ['Take', 'an', 'umbrella', ',', 'or', 'you', 'will', 'get', 'soaked'],
    correct: 'Take an umbrella, or you will get soaked',
    type: 'compound',
  },
  {
    tiles: ['The', 'alarm', 'rang', ',', 'but', 'nobody', 'woke', 'up'],
    correct: 'The alarm rang, but nobody woke up',
    type: 'compound',
  },
  {
    tiles: ['The', 'Jacksons', 'were', 'on', 'holiday', ',', 'so', 'Mia', 'fed', 'their', 'cat'],
    correct: 'The Jacksons were on holiday, so Mia fed their cat',
    type: 'compound',
  },
  {
    tiles: [
      'Zara',
      'loves',
      'horror',
      'films',
      ',',
      'but',
      'they',
      'give',
      'her',
      'brother',
      'nightmares',
    ],
    correct: 'Zara loves horror films, but they give her brother nightmares',
    type: 'compound',
  },
  {
    tiles: ['Wear', 'a', 'coat', ',', 'or', 'you', 'will', 'catch', 'a', 'cold'],
    correct: 'Wear a coat, or you will catch a cold',
    type: 'compound',
  },
  {
    tiles: ['Hurry', 'up', ',', 'or', 'we', 'will', 'miss', 'the', 'train'],
    correct: 'Hurry up, or we will miss the train',
    type: 'compound',
  },
  {
    tiles: ['The', 'snow', 'was', 'deep', ';', 'nobody', 'went', 'out'],
    correct: 'The snow was deep; nobody went out',
    type: 'compound',
  },
  {
    tiles: ['The', 'tide', 'came', 'in', ',', 'and', 'our', 'sandcastle', 'vanished'],
    correct: 'The tide came in, and our sandcastle vanished',
    type: 'compound',
  },
  {
    tiles: [
      'Our',
      'car',
      'would',
      'not',
      'start',
      ',',
      'so',
      'Mrs',
      'Evans',
      'gave',
      'us',
      'a',
      'lift',
    ],
    correct: 'Our car would not start, so Mrs Evans gave us a lift',
    type: 'compound',
  },
  {
    tiles: ['The', 'phone', 'rang', ',', 'but', 'Tia', 'let', 'it', 'ring'],
    correct: 'The phone rang, but Tia let it ring',
    type: 'compound',
  },
  {
    tiles: ['The', 'rain', 'stopped', ',', 'and', 'a', 'rainbow', 'appeared'],
    correct: 'The rain stopped, and a rainbow appeared',
    type: 'compound',
  },
  {
    tiles: [
      'The',
      'kitten',
      'climbed',
      'the',
      'curtains',
      ',',
      'and',
      'Dad',
      'had',
      'to',
      'rescue',
      'her',
    ],
    correct: 'The kitten climbed the curtains, and Dad had to rescue her',
    type: 'compound',
  },
  {
    tiles: ['The', 'test', 'was', 'difficult', ',', 'yet', 'everyone', 'passed'],
    correct: 'The test was difficult, yet everyone passed',
    type: 'compound',
  },
  {
    tiles: ['Entry', 'is', 'free', ',', 'yet', 'hardly', 'anyone', 'visits', 'the', 'gallery'],
    correct: 'Entry is free, yet hardly anyone visits the gallery',
    type: 'compound',
  },
  // ── Complex sentences added for depth (tier 3): real lines first, then the site's own ────
  {
    tiles: [
      'After',
      'his',
      'hoof',
      'had',
      'healed',
      'up',
      ',',
      'Boxer',
      'worked',
      'harder',
      'than',
      'ever',
    ],
    correct: 'After his hoof had healed up, Boxer worked harder than ever',
    type: 'complex',
    source: 'George Orwell, Animal Farm, Chapter IX',
  },
  {
    tiles: [
      'As',
      'the',
      'human',
      'beings',
      'approached',
      'the',
      'farm',
      'buildings',
      ',',
      'Snowball',
      'launched',
      'his',
      'first',
      'attack',
    ],
    correct:
      'As the human beings approached the farm buildings, Snowball launched his first attack',
    type: 'complex',
    source: 'George Orwell, Animal Farm, Chapter IV',
  },
  {
    tiles: ['If', 'she', 'favours', 'you', ',', 'love', 'her'],
    correct: 'If she favours you, love her',
    type: 'complex',
    source: 'Charles Dickens, Great Expectations, Chapter 29',
  },
  {
    tiles: ['If', 'you', 'are', 'distrustful', ',', 'bring', 'two', 'friends'],
    correct: 'If you are distrustful, bring two friends',
    type: 'complex',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter II',
  },
  {
    tiles: [
      'If',
      'Holmes’s',
      'researches',
      'were',
      'successful',
      ',',
      'she',
      'would',
      'be',
      'an',
      'heiress',
    ],
    correct: 'If Holmes’s researches were successful, she would be an heiress',
    type: 'complex',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter VII',
  },
  {
    tiles: ['If', 'this', 'be', 'the', 'case', ',', 'he', 'deserves', 'you'],
    correct: 'If this be the case, he deserves you',
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 59',
  },
  {
    tiles: [
      'When',
      'this',
      'was',
      'done',
      ',',
      'she',
      'had',
      'a',
      'less',
      'active',
      'part',
      'to',
      'play',
    ],
    correct: 'When this was done, she had a less active part to play',
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 25',
  },
  {
    tiles: ['I', 'looked', 'at', 'Wemmick', ',', 'whose', 'face', 'was', 'very', 'grave'],
    correct: 'I looked at Wemmick, whose face was very grave',
    type: 'complex',
    source: 'Charles Dickens, Great Expectations, Chapter 51',
  },
  {
    tiles: [
      'I',
      'found',
      'Adèle',
      'peeping',
      'through',
      'the',
      'schoolroom',
      'door',
      ',',
      'which',
      'she',
      'held',
      'ajar',
    ],
    correct: 'I found Adèle peeping through the schoolroom door, which she held ajar',
    type: 'complex',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 17',
  },
  {
    tiles: [
      'There',
      'was',
      'a',
      'pause',
      ',',
      'during',
      'which',
      'Mr.',
      'Utterson',
      'struggled',
      'with',
      'himself',
    ],
    correct: 'There was a pause, during which Mr. Utterson struggled with himself',
    type: 'complex',
    source: 'Robert Louis Stevenson, Jekyll and Hyde, Incident of the Letter',
  },
  {
    tiles: [
      'They',
      'were',
      'interrupted',
      'by',
      'Miss',
      'Bennet',
      ',',
      'who',
      'came',
      'to',
      'fetch',
      'her',
      "mother's",
      'tea',
    ],
    correct: "They were interrupted by Miss Bennet, who came to fetch her mother's tea",
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 48',
  },
  {
    tiles: [
      'He',
      'was',
      'able',
      'to',
      'prove',
      'an',
      'alibi',
      'which',
      'could',
      'not',
      'be',
      'shaken',
    ],
    correct: 'He was able to prove an alibi which could not be shaken',
    type: 'complex',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter IX',
  },
  {
    tiles: ['It', 'is', 'the', 'only', 'hypothesis', 'which', 'covers', 'the', 'facts'],
    correct: 'It is the only hypothesis which covers the facts',
    type: 'complex',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter VII',
  },
  {
    tiles: [
      'His',
      'appearance',
      'corresponded',
      'to',
      'the',
      'sounds',
      'which',
      'we',
      'had',
      'heard',
    ],
    correct: 'His appearance corresponded to the sounds which we had heard',
    type: 'complex',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter IX',
  },
  {
    tiles: [
      'I',
      'gazed',
      'on',
      'the',
      'picture',
      'of',
      'my',
      'mother',
      ',',
      'which',
      'stood',
      'over',
      'the',
      'mantel-piece',
    ],
    correct: 'I gazed on the picture of my mother, which stood over the mantel-piece',
    type: 'complex',
    source: 'Mary Shelley, Frankenstein, Chapter VII',
  },
  {
    tiles: ['It', 'beckoned', 'Scrooge', 'to', 'approach', ',', 'which', 'he', 'did'],
    correct: 'It beckoned Scrooge to approach, which he did',
    type: 'complex',
    source: 'Charles Dickens, A Christmas Carol, Stave I',
  },
  {
    tiles: [
      'The',
      'rule',
      'was',
      'against',
      'sheets',
      ',',
      'which',
      'are',
      'a',
      'human',
      'invention',
    ],
    correct: 'The rule was against sheets, which are a human invention',
    type: 'complex',
    source: 'George Orwell, Animal Farm, Chapter VI',
  },
  {
    tiles: [
      'These',
      'two',
      'disagreed',
      'at',
      'every',
      'point',
      'where',
      'disagreement',
      'was',
      'possible',
    ],
    correct: 'These two disagreed at every point where disagreement was possible',
    type: 'complex',
    source: 'George Orwell, Animal Farm, Chapter V',
  },
  {
    tiles: ['Foul', 'weather', "didn't", 'know', 'where', 'to', 'have', 'him'],
    correct: "Foul weather didn't know where to have him",
    type: 'complex',
    source: 'Charles Dickens, A Christmas Carol, Stave I',
  },
  {
    tiles: [
      'Bessie',
      'went',
      'into',
      'the',
      'housemaid’s',
      'apartment',
      ',',
      'which',
      'was',
      'near',
    ],
    correct: 'Bessie went into the housemaid’s apartment, which was near',
    type: 'complex',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 3',
  },
  {
    tiles: ['She', 'will', 'follow', 'wherever', 'Lydia', 'leads'],
    correct: 'She will follow wherever Lydia leads',
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 41',
  },
  {
    tiles: ['Mrs.', 'Collins', 'knew', 'not', 'what', 'to', 'make', 'of', 'him'],
    correct: 'Mrs. Collins knew not what to make of him',
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 32',
  },
  {
    tiles: ['What', 'I', 'have', 'to', 'say', 'relates', 'to', 'poor', 'Lydia'],
    correct: 'What I have to say relates to poor Lydia',
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 46',
  },
  {
    tiles: ['She', 'possessed', 'eyes', 'whose', 'gaze', 'I', 'delighted', 'to', 'encounter'],
    correct: 'She possessed eyes whose gaze I delighted to encounter',
    type: 'complex',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 29',
  },
  {
    tiles: [
      'A',
      'fine',
      'spring',
      'shone',
      'round',
      'me',
      ',',
      'which',
      'I',
      'could',
      'not',
      'enjoy',
    ],
    correct: 'A fine spring shone round me, which I could not enjoy',
    type: 'complex',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 34',
  },
  {
    tiles: [
      'We',
      'had',
      'to',
      'walk',
      'two',
      'miles',
      'to',
      'Brocklebridge',
      'Church',
      ',',
      'where',
      'our',
      'patron',
      'officiated',
    ],
    correct: 'We had to walk two miles to Brocklebridge Church, where our patron officiated',
    type: 'complex',
    source: 'Charlotte Brontë, Jane Eyre, Chapter 7',
  },
  {
    tiles: [
      'Joe',
      'offered',
      'me',
      'more',
      'gravy',
      ',',
      'which',
      'I',
      'was',
      'afraid',
      'to',
      'take',
    ],
    correct: 'Joe offered me more gravy, which I was afraid to take',
    type: 'complex',
    source: 'Charles Dickens, Great Expectations, Chapter 4',
  },
  {
    tiles: ['If', 'she', 'wounds', 'you', ',', 'love', 'her'],
    correct: 'If she wounds you, love her',
    type: 'complex',
    source: 'Charles Dickens, Great Expectations, Chapter 29',
  },
  {
    tiles: [
      'If',
      'all',
      'is',
      'well',
      ',',
      'my',
      'shoulders',
      'are',
      'broad',
      'enough',
      'to',
      'bear',
      'the',
      'blame',
    ],
    correct: 'If all is well, my shoulders are broad enough to bear the blame',
    type: 'complex',
    source: 'Robert Louis Stevenson, Jekyll and Hyde, The Last Night',
  },
  {
    tiles: ['The', 'old', 'lady', 'is', 'Mrs.', 'Jenkinson', ',', 'who', 'lives', 'with', 'them'],
    correct: 'The old lady is Mrs. Jenkinson, who lives with them',
    type: 'complex',
    source: 'Jane Austen, Pride and Prejudice, Chapter 28',
  },
  {
    tiles: ['If', 'you', 'do', ',', 'all', 'will', 'be', 'in', 'vain'],
    correct: 'If you do, all will be in vain',
    type: 'complex',
    source: 'Arthur Conan Doyle, The Sign of Four, Chapter II',
  },
  {
    tiles: [
      'It',
      'was',
      'the',
      'first',
      'of',
      'their',
      'proceedings',
      'which',
      'had',
      'no',
      'heartiness',
    ],
    correct: 'It was the first of their proceedings which had no heartiness',
    type: 'complex',
    source: 'Charles Dickens, A Christmas Carol, Stave III',
  },
  {
    tiles: ['If', 'you', 'drop', 'litter', ',', 'you', 'could', 'be', 'fined'],
    correct: 'If you drop litter, you could be fined',
    type: 'complex',
  },
  {
    tiles: ['If', 'the', 'pitch', 'is', 'frozen', ',', 'the', 'match', 'will', 'be', 'cancelled'],
    correct: 'If the pitch is frozen, the match will be cancelled',
    type: 'complex',
  },
  {
    tiles: ['Unless', 'you', 'set', 'an', 'alarm', ',', 'you', 'will', 'oversleep'],
    correct: 'Unless you set an alarm, you will oversleep',
    type: 'complex',
  },
  {
    tiles: ['Because', 'the', 'bridge', 'was', 'closed', ',', 'Dad', 'was', 'late', 'for', 'work'],
    correct: 'Because the bridge was closed, Dad was late for work',
    type: 'complex',
  },
  {
    tiles: [
      'Since',
      'Amir',
      'joined',
      'the',
      'orchestra',
      ',',
      'our',
      'house',
      'has',
      'been',
      'noisy',
    ],
    correct: 'Since Amir joined the orchestra, our house has been noisy',
    type: 'complex',
  },
  {
    tiles: [
      'We',
      'visited',
      'Caernarfon',
      'Castle',
      ',',
      'where',
      'King',
      'Edward',
      'II',
      'was',
      'born',
    ],
    correct: 'We visited Caernarfon Castle, where King Edward II was born',
    type: 'complex',
  },
  {
    tiles: ['Nobody', 'knew', 'why', 'the', 'lights', 'had', 'gone', 'out'],
    correct: 'Nobody knew why the lights had gone out',
    type: 'complex',
  },
  {
    tiles: ['I', 'wonder', 'whether', 'Leon', 'remembered', 'his', 'lines'],
    correct: 'I wonder whether Leon remembered his lines',
    type: 'complex',
  },
  {
    tiles: ['What', 'Jade', 'said', 'surprised', 'us', 'all'],
    correct: 'What Jade said surprised us all',
    type: 'complex',
  },
  {
    tiles: [
      'The',
      'film',
      'was',
      'so',
      'frightening',
      'that',
      'Tom',
      'watched',
      'it',
      'through',
      'his',
      'fingers',
    ],
    correct: 'The film was so frightening that Tom watched it through his fingers',
    type: 'complex',
  },
  {
    tiles: ['It', 'was', 'such', 'a', 'hot', 'day', 'that', 'the', 'tarmac', 'melted'],
    correct: 'It was such a hot day that the tarmac melted',
    type: 'complex',
  },
  {
    tiles: ['Because', 'Kemi', 'had', 'practised', ',', 'the', 'solo', 'went', 'perfectly'],
    correct: 'Because Kemi had practised, the solo went perfectly',
    type: 'complex',
  },
  {
    tiles: [
      'Dad',
      'burnt',
      'the',
      'toast',
      ',',
      'which',
      'made',
      'the',
      'smoke',
      'alarm',
      'go',
      'off',
    ],
    correct: 'Dad burnt the toast, which made the smoke alarm go off',
    type: 'complex',
  },
  {
    tiles: ['Unless', 'the', 'rain', 'stops', ',', 'the', 'picnic', 'will', 'be', 'cancelled'],
    correct: 'Unless the rain stops, the picnic will be cancelled',
    type: 'complex',
  },
  {
    tiles: [
      'Before',
      'you',
      'leave',
      'the',
      'lab',
      ',',
      'check',
      'that',
      'the',
      'gas',
      'taps',
      'are',
      'off',
    ],
    correct: 'Before you leave the lab, check that the gas taps are off',
    type: 'complex',
  },
  {
    tiles: [
      'After',
      'the',
      'storm',
      'had',
      'passed',
      ',',
      'neighbours',
      'cleared',
      'the',
      'fallen',
      'branches',
    ],
    correct: 'After the storm had passed, neighbours cleared the fallen branches',
    type: 'complex',
  },
  {
    tiles: ['The', 'scientist', 'who', 'discovered', 'penicillin', 'was', 'Alexander', 'Fleming'],
    correct: 'The scientist who discovered penicillin was Alexander Fleming',
    type: 'complex',
  },
  {
    tiles: ['Whoever', 'breaks', 'a', 'window', 'must', 'pay', 'for', 'it'],
    correct: 'Whoever breaks a window must pay for it',
    type: 'complex',
  },
  {
    tiles: ['So', 'that', 'nobody', 'would', 'hear', 'her', ',', 'Eva', 'whispered'],
    correct: 'So that nobody would hear her, Eva whispered',
    type: 'complex',
  },
  {
    tiles: [
      'Until',
      'the',
      'paint',
      'has',
      'dried',
      ',',
      'the',
      'benches',
      'are',
      'out',
      'of',
      'use',
    ],
    correct: 'Until the paint has dried, the benches are out of use',
    type: 'complex',
  },
  {
    tiles: ['This', 'is', 'the', 'house', 'where', 'my', 'grandfather', 'was', 'born'],
    correct: 'This is the house where my grandfather was born',
    type: 'complex',
  },
  {
    tiles: [
      'Our',
      'flight',
      'was',
      'delayed',
      'by',
      'six',
      'hours',
      ',',
      'which',
      'ruined',
      'the',
      'first',
      'day',
      'of',
      'the',
      'holiday',
    ],
    correct: 'Our flight was delayed by six hours, which ruined the first day of the holiday',
    type: 'complex',
  },
]

/** Words that open a complex sentence's subordinate clause, longest first. */
const OPENERS = [
  'As soon as',
  'Even though',
  'So that',
  'Whenever',
  'Wherever',
  'Whoever',
  'Although',
  'Because',
  'Unless',
  'Before',
  'Since',
  'Until',
  'After',
  'While',
  'When',
  'What',
  'If',
  'As',
]

/**
 * The word or mark that joins a sentence's clauses: "so", "but", "semicolon",
 * "if", "who". A round holds at most two sentences joined the same way, not
 * back to back (src/lib/games/deal-round.ts). A simple sentence has none.
 */
export function joinsOf(q: SentenceItem): string | undefined {
  if (q.type === 'simple') return undefined
  const s = q.correct
  if (q.type === 'compound') {
    if (s.includes(';')) return 'semicolon'
    return s.match(/,? (and|but|so|yet|or) /)?.[1]
  }
  const opener = OPENERS.find((w) => s.startsWith(w + ' '))
  if (opener) return opener.toLowerCase()
  return s.match(
    /\b(who|whom|whose|which|where|wherever|why|whether|what|that|because|when|while|if|before|after|since|until|unless)\b/,
  )?.[1]
}

export const BANK: GameBank<SentenceItem> = {
  slug: 'sentence-builder',
  items: SENTENCE_BANK,
  // The student sees scrambled tiles and builds the sentence, so the sentence
  // names the question. None repeats, and joinTiles(tiles) equals it.
  key: (q) => q.correct,
  answer: (q) => q.correct,
  // The student builds the answer from tiles: there are no options to choose from.
  options: () => null,
  tag: (q) => q.type,
  // The round climbs from simple to compound to complex (24 October 2026).
  tier: (q) => (q.type === 'simple' ? 1 : q.type === 'compound' ? 2 : 3),
  // Spread the joining words: not four sentences joined by "so" in one round.
  group: joinsOf,
  // Two sentences from one chapter of a book share its scene: never one round.
  facts: (q) => (q.source ? [`scene:${q.source}`] : []),
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
