import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Punctuation Repair: a sentence has lost its punctuation; pick the version
 * punctuated correctly.
 *
 * Moved out of src/app/games/punctuation-repair/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). That
 * day nine questions were found to offer a second correct sentence beside the
 * marked answer, and were mended; every one has since been rebuilt again, below.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy"; the audit (.tmp-games-audit/REPORT-ks3.md) found that
 * picking the option most like the others won 73 per cent of this bank,
 * because each wrong option was the answer with one mark changed, and that it
 * tested recognition only, with three colon or semicolon questions and no
 * brackets. The bank went from 57 questions to 201 (60 at tier 1, 84 at tier 2,
 * 57 at tier 3).
 *
 *   - Options that take knowing. Each wrong option is an error students make
 *     (a comma splice, a fragment, a semicolon after a clause that cannot stand
 *     alone, a comma between a subject and its verb, a colon after "includes",
 *     a mark outside the speech marks), and most questions set two or three
 *     such decisions against each other, so no option is the obvious odd one
 *     out. Measured on the whole bank: the option most like the others now
 *     scores 27 per cent, the longest 27, the one with most marks 27, against
 *     25 for a blind guess. No option lacks only its capital or its full stop,
 *     and no comma-splice question offers the faulty sentence itself.
 *   - Real text first: 93 sentences from Animal Farm, The War of the Worlds, The
 *     Sign of Four, Jekyll and Hyde, A Christmas Carol, Jane Eyre and Great
 *     Expectations, every one out of UK copyright, copied word for word from
 *     src/data/full-texts and checked there. Curly quotation marks are printed
 *     straight, as in the rest of the bank, and a sentence taken from inside a
 *     speech or a letter loses only the speech marks round it. `source` names
 *     the book and chapter, and the page shows it. Where an explanation shows
 *     a real sentence with words lifted out, an ellipsis marks the gap, so it
 *     is never passed off as the writer's wording
 *     (src/__tests__/every-quotation-is-the-held-text.test.ts); and no wrong
 *     option misspells a word inside a real speech, only its punctuation.
 *   - New kinds: punctuation that changes meaning, with a `prompt` saying which
 *     meaning is wanted (15: "The students, who were tired, went home."
 *     against "The students who were tired went home."; "I don't know, Sam.";
 *     "Call me, Sarah."; whose words are in the speech marks; and wherever a
 *     wrong option would otherwise be another right sentence, as "But we were
 *     wrong comrades" is); colons and semicolons (32, spread by the dealer as
 *     two rules, `group`); brackets
 *     (15, a new topic); commas that keep the meaning clear, for words of
 *     address and misreadings (16, a new topic, commas-for-clarity); question
 *     marks after reported questions and tags; split speech; and sentences
 *     with several marks at once.
 *   - Tiers: 1 recognising the mark a sentence needs; 2 applying a rule to a
 *     new case or telling near neighbours apart (colon or semicolon, a comma
 *     before or after "but"); 3 punctuating for a meaning, or three decisions
 *     in one real sentence.
 *   - `facts` keep apart questions that teach the same narrow point (two
 *     clauses about being tired, two semicolon lists, the linking adverbs
 *     "however", "therefore", "indeed" and "in any case", two "his friend's"
 *     sentences from Jekyll and Hyde, "Inside," and "Outside the school").
 *
 * Every question kept has new options, because the old ones failed in one of
 * two ways: each wrong option was one mark away from the answer (the 73 per
 * cent above), and in 33 questions two options differed only in capital
 * letters, which src/__tests__/a-game-question-takes-knowing.test.ts counts as
 * the same option. In particular:
 *
 *   - the no-comma version after an opening clause ("Because it was raining
 *     we stayed indoors.") is no longer offered as wrong: style guides accept
 *     it after a short clause. The wrong options are now a semicolon, a
 *     fragment or a misplaced comma, which nobody accepts;
 *   - "my favourite subjects are english history and art" now asks for three
 *     subjects, since "English history and art" is a correct sentence naming
 *     two; "thats my sisters bicycle" asks for one sister, since "sisters'"
 *     is correct for several;
 *   - "first we mixed the ingredients then we baked the cake" had added a
 *     word to its answer. The answer is now two sentences, "...ingredients.
 *     Then we baked the cake.", and the question moved to full stops;
 *   - "london paris and rome are european capitals" now tests the list commas
 *     (capitals are the same in every option) and moved to commas in lists.
 *
 * Removed, 14:
 *
 *   - "the dog ran across the field", "we visited london in july", "my friend
 *     sarah lives in manchester", "i think we should leave now" and "have you
 *     read the novel the giver": capital letters only, which cannot be offered
 *     as options that differ only in capitals. Capital Letter Quest teaches
 *     them;
 *   - "where are you going", "what a wonderful surprise" and "look out for
 *     that car": only the end mark could vary, and a full stop is defensible
 *     after a calm command or an exclamation;
 *   - "can you help me carry these books", "did she really say that" and "how
 *     did you manage to fix it so quickly": a second end mark is defensible (a
 *     request in question form may end in a full stop; a question of disbelief
 *     or admiration may take an exclamation mark);
 *   - "the film starts at eight oclock" and "the dogs tail wagged happily": a
 *     single apostrophe, which Apostrophe Ace teaches, and the second nearly
 *     repeats a sentence in two other games;
 *   - "on monday we have a science test": the comma after a short opener is
 *     optional, so the version without it was also correct.
 *
 * `ruleTested` is not shown on the page. `topic` is still the tag the
 * student's account records: the nine topics are kept, and two are added,
 * brackets and commas-for-clarity.
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided: all
 * 201 questions read against their options and explanations, and every real
 * sentence (94 now, with the one added below) found in src/data/full-texts
 * letter for letter (apostrophes, commas and end marks included, which the
 * real-line test does not compare), each in the chapter its `source` names.
 * Two questions changed, both for a second right answer:
 *
 *   - "let us face it our lives are miserable laborious and short" marked
 *     "Let us face it, our lives are..." wrong as a comma splice, but
 *     dictionaries print "Let's face it," with a comma, so a child punctuating
 *     by today's rules lost a mark for not matching Orwell. Every option now
 *     keeps his colon, and the question decides the list commas and a second
 *     colon after "are".
 *   - "inside the house was cold and dark" marked "Inside the house was cold
 *     and dark." wrong, but that is a correct sentence ("inside the house" can
 *     be its subject, as in "Inside was warm"), so nothing forced the comma.
 *     It is now a real line, "Outside, the soil was banked high against the
 *     house." (The War of the Worlds), where without the comma "outside the
 *     soil" reads as one phrase and the sentence has no subject.
 */

export interface PunctuationItem {
  /** The sentence as the student first sees it, unpunctuated: also the question's key. */
  broken: string
  options: [string, string, string, string]
  answerIndex: number
  ruleTested: string
  /** Which punctuation skill the question belongs to; the tag for the student's account. */
  topic: string
  /**
   * 1 recognising the mark a sentence needs, 2 applying a rule to a new case
   * or telling near neighbours apart, 3 punctuating for a meaning or deciding
   * several marks in one sentence.
   */
  tier: 1 | 2 | 3
  /**
   * What the punctuated sentence must say, shown under it, where the marks
   * alone decide between two meanings ("Punctuate it so that every student was
   * tired"). It names the meaning, never the rule.
   */
  prompt?: string
  /**
   * Where a real sentence comes from, as the study guides cite it, shown
   * under it. Absent where the sentence is the site's own.
   */
  source?: string
  /** The rule the dealer spreads through a round, where it is finer than the topic. */
  group?: string
  /** What would give this question away to another; no two sharing one are dealt together. */
  facts?: string[]
}

export const PUNCTUATION_BANK: PunctuationItem[] = [
  // ── Full stops between sentences ──────────────────────────────────────────
  {
    broken: 'no animal must ever kill any other animal all animals are equal',
    options: [
      'No animal must ever kill any other animal. All animals are equal.',
      'No animal must ever kill any other animal, all animals are equal.',
      'No animal must ever kill any other animal. All animals, are equal.',
      'No animal must ever kill any other animal, all animals, are equal.',
    ],
    answerIndex: 0,
    ruleTested: 'A full stop between two complete sentences',
    topic: 'capital-letters-and-full-stops',
    tier: 1,
    source: 'Animal Farm, Chapter 1',
  },
  {
    broken: 'a terrible sight had met their eyes the windmill was in ruins',
    options: [
      'A terrible sight had met their eyes, the windmill was in ruins.',
      'A terrible sight had met their eyes. The windmill was in ruins.',
      'A terrible sight had met their eyes. The windmill, was in ruins.',
      'A terrible sight had met their eyes, the windmill, was in ruins.',
    ],
    answerIndex: 1,
    ruleTested: 'A full stop between two complete sentences',
    topic: 'capital-letters-and-full-stops',
    tier: 1,
    source: 'Animal Farm, Chapter 6',
  },
  {
    broken: 'the dog barked all night the neighbours were furious',
    options: [
      'The dog barked all night, the neighbours were furious.',
      "The dog barked all night. The neighbour's were furious.",
      'The dog barked all night. The neighbours were furious.',
      "The dog barked all night, the neighbour's were furious.",
    ],
    answerIndex: 2,
    ruleTested: 'A full stop between two complete sentences',
    topic: 'capital-letters-and-full-stops',
    tier: 1,
  },
  {
    broken: 'its getting dark we should head back',
    options: [
      "It's getting dark, we should head back.",
      'Its getting dark. We should head back.',
      'Its getting dark, we should head back.',
      "It's getting dark. We should head back.",
    ],
    answerIndex: 3,
    ruleTested: 'A full stop between two complete sentences',
    topic: 'capital-letters-and-full-stops',
    tier: 1,
  },
  {
    broken: 'clover forced her way to the front the van began to gather speed',
    options: [
      'Clover forced her way to the front. The van began to gather speed.',
      'Clover forced her way to the front, the van began to gather speed.',
      'Clover forced her way to the front. The van, began to gather speed.',
      'Clover forced her way to the front, the van, began to gather speed.',
    ],
    answerIndex: 0,
    ruleTested: 'A full stop between two complete sentences',
    topic: 'capital-letters-and-full-stops',
    tier: 1,
    source: 'Animal Farm, Chapter 9',
  },
  {
    broken: 'a sudden chill came over me there was a loud shriek from a woman behind',
    options: [
      'A sudden chill came over me, there was a loud shriek from a woman behind.',
      'A sudden chill came over me. There was a loud shriek from a woman behind.',
      'A sudden chill, came over me. There was a loud shriek from a woman behind.',
      'A sudden chill, came over me, there was a loud shriek from a woman behind.',
    ],
    answerIndex: 1,
    ruleTested: 'A full stop between two complete sentences',
    topic: 'capital-letters-and-full-stops',
    tier: 1,
    source: 'The War of the Worlds, Book One, Chapter 4',
  },
  {
    broken: 'first we mixed the ingredients then we baked the cake',
    options: [
      'First, we mixed the ingredients, then we baked the cake.',
      'First, we mixed the ingredients then we baked the cake.',
      'First, we mixed the ingredients. Then we baked the cake.',
      'First, we mixed the ingredients then, we baked the cake.',
    ],
    answerIndex: 2,
    ruleTested: "A full stop before 'then' when it starts a new sentence",
    topic: 'capital-letters-and-full-stops',
    tier: 2,
  },
  {
    broken: 'they limped into the yard the pellets under the skin of boxers leg smarted painfully',
    options: [
      "They limped into the yard, the pellets under the skin of Boxer's leg smarted painfully.",
      'They limped into the yard. The pellets under the skin of Boxers leg smarted painfully.',
      'They limped into the yard, the pellets under the skin of Boxers leg smarted painfully.',
      "They limped into the yard. The pellets under the skin of Boxer's leg smarted painfully.",
    ],
    answerIndex: 3,
    ruleTested: 'A sentence boundary and a possessive apostrophe',
    topic: 'capital-letters-and-full-stops',
    tier: 2,
    source: 'Animal Farm, Chapter 8',
  },
  {
    broken:
      'they had won but they were weary and bleeding slowly they began to limp back towards the farm',
    options: [
      'They had won, but they were weary and bleeding. Slowly they began to limp back towards the farm.',
      'They had won but, they were weary and bleeding. Slowly they began to limp back towards the farm.',
      'They had won, but they were weary and bleeding, slowly they began to limp back towards the farm.',
      'They had won but, they were weary and bleeding, slowly they began to limp back towards the farm.',
    ],
    answerIndex: 0,
    ruleTested: "A comma before 'but', then a new sentence",
    topic: 'capital-letters-and-full-stops',
    tier: 2,
    source: 'Animal Farm, Chapter 8',
  },
  {
    broken: 'the experiment failed twice on the third try it worked',
    options: [
      'The experiment failed twice, on the third try, it worked.',
      'The experiment failed twice. On the third try, it worked.',
      'The experiment failed twice on the third try. It worked.',
      'The experiment failed twice, on the third try it worked.',
    ],
    answerIndex: 1,
    ruleTested: 'Where one sentence ends and the next begins',
    topic: 'capital-letters-and-full-stops',
    tier: 2,
  },
  {
    broken: 'when we arrived the door was locked nobody answered',
    options: [
      'When we arrived, the door was locked, nobody answered.',
      'When we arrived; the door was locked. Nobody answered.',
      'When we arrived, the door was locked. Nobody answered.',
      'When we arrived; the door was locked, nobody answered.',
    ],
    answerIndex: 2,
    ruleTested: 'A comma after an opening clause, then a full stop',
    topic: 'capital-letters-and-full-stops',
    tier: 2,
  },
  {
    broken: 'startled the animals stopped in their tracks it was clovers voice',
    options: [
      "Startled; the animals stopped in their tracks, it was Clover's voice.",
      'Startled; the animals stopped in their tracks. It was Clovers voice.',
      'Startled, the animals stopped in their tracks, it was Clovers voice.',
      "Startled, the animals stopped in their tracks. It was Clover's voice.",
    ],
    answerIndex: 3,
    ruleTested: 'An opener, a sentence boundary and a possessive apostrophe',
    topic: 'capital-letters-and-full-stops',
    tier: 3,
    source: 'Animal Farm, Chapter 10',
  },
  // ── Question and exclamation marks ────────────────────────────────────────
  {
    broken: 'do you know what would happen if we pigs failed in our duty',
    options: [
      'Do you know what would happen if we pigs failed in our duty?',
      'Do you know what would happen if we pigs failed in our duty.',
      'Do you know, what would happen if we pigs failed in our duty?',
      'Do you know, what would happen if we pigs failed in our duty.',
    ],
    answerIndex: 0,
    ruleTested: 'Question mark for a direct question',
    topic: 'question-and-exclamation-marks',
    tier: 1,
    source: 'Animal Farm, Chapter 3',
  },
  {
    broken: 'can you imagine a milking stool tilted and bowled violently along the ground',
    options: [
      'Can you imagine a milking stool tilted and bowled violently along the ground.',
      'Can you imagine a milking stool tilted and bowled violently along the ground?',
      'Can you imagine, a milking stool tilted and bowled violently along the ground?',
      'Can you imagine, a milking stool tilted and bowled violently along the ground.',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark for a direct question',
    topic: 'question-and-exclamation-marks',
    tier: 1,
    source: 'The War of the Worlds, Book One, Chapter 10',
  },
  {
    broken: 'what i want is a long holiday',
    options: [
      'What I want is a long holiday?',
      'What I want, is a long holiday.',
      'What I want is a long holiday.',
      'What I want, is a long holiday?',
    ],
    answerIndex: 2,
    ruleTested: 'A statement that starts with a question word',
    topic: 'question-and-exclamation-marks',
    tier: 1,
  },
  {
    broken: 'nobody called while i was out did they',
    options: [
      'Nobody called while I was out did they?',
      'Nobody called while I was out, did they.',
      'Nobody called while I was out did they.',
      'Nobody called while I was out, did they?',
    ],
    answerIndex: 3,
    ruleTested: 'Comma before a question tag, question mark after it',
    topic: 'question-and-exclamation-marks',
    tier: 1,
  },
  {
    broken: 'where did you find that old map',
    options: [
      'Where did you find that old map?',
      'Where did you find that old map.',
      'Where did you find, that old map?',
      'Where did you find, that old map.',
    ],
    answerIndex: 0,
    ruleTested: 'Question mark for a direct question',
    topic: 'question-and-exclamation-marks',
    tier: 1,
  },
  {
    broken: 'have you ever had occasion to study character in handwriting',
    options: [
      'Have you ever had occasion to study character in handwriting.',
      'Have you ever had occasion to study character in handwriting?',
      'Have you ever had occasion, to study character in handwriting?',
      'Have you ever had occasion, to study character in handwriting.',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark for a direct question',
    topic: 'question-and-exclamation-marks',
    tier: 1,
    source: 'The Sign of Four, Chapter 2',
  },
  {
    broken: 'wow that was the best concert ive ever been to',
    options: [
      "Wow that was the best concert I've ever been to!",
      'Wow, that was the best concert Ive ever been to!',
      "Wow, that was the best concert I've ever been to!",
      'Wow that was the best concert Ive ever been to!',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after an interjection plus contraction and exclamation',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'if his messenger could go to one place why could he not go to another',
    options: [
      'If his messenger could go to one place; why could he not go to another?',
      'If his messenger could go to one place, why could he not go to another.',
      'If his messenger could go to one place; why could he not go to another.',
      'If his messenger could go to one place, why could he not go to another?',
    ],
    answerIndex: 3,
    ruleTested: 'A fronted clause, then a question',
    topic: 'question-and-exclamation-marks',
    tier: 2,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 9',
  },
  {
    broken: 'whether we win or lose depends on today',
    options: [
      'Whether we win or lose depends on today.',
      'Whether we win or lose depends on today?',
      'Whether we win or lose, depends on today.',
      'Whether we win or lose, depends on today?',
    ],
    answerIndex: 0,
    ruleTested: 'A statement whose subject is a whole clause',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'lets start with the hardest question shall we',
    options: [
      'Lets start with the hardest question, shall we?',
      "Let's start with the hardest question, shall we?",
      "Let's start with the hardest question, shall we.",
      'Lets start with the hardest question, shall we.',
    ],
    answerIndex: 1,
    ruleTested: 'A question tag after a suggestion',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'how can we ignore the plastic in our oceans any longer',
    options: [
      'How can we ignore the plastic in our oceans any longer.',
      'How can we ignore, the plastic in our oceans any longer?',
      'How can we ignore the plastic in our oceans any longer?',
      'How can we ignore, the plastic in our oceans any longer.',
    ],
    answerIndex: 2,
    ruleTested: 'Question mark for a rhetorical question',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'i wonder whether the shop is still open',
    options: [
      'I wonder whether the shop is still open?',
      'I wonder, whether the shop is still open?',
      'I wonder, whether the shop is still open.',
      'I wonder whether the shop is still open.',
    ],
    answerIndex: 3,
    ruleTested: 'No question mark after an indirect question',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'she asked me where i had put the scissors',
    options: [
      'She asked me where I had put the scissors.',
      'She asked me where I had put the scissors?',
      'She asked me, where I had put the scissors?',
      'She asked me, where I had put the scissors.',
    ],
    answerIndex: 0,
    ruleTested: 'No question mark after a reported question',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'when the alarm rang did everyone leave the building',
    options: [
      'When the alarm rang; did everyone leave the building?',
      'When the alarm rang, did everyone leave the building?',
      'When the alarm rang, did everyone leave the building.',
      'When the alarm rang; did everyone leave the building.',
    ],
    answerIndex: 1,
    ruleTested: 'A fronted clause, then a question',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken: 'the bus was late again why does this always happen',
    options: [
      'The bus was late again, why does this always happen?',
      'The bus was late again. Why does this always happen.',
      'The bus was late again. Why does this always happen?',
      'The bus was late again, why does this always happen.',
    ],
    answerIndex: 2,
    ruleTested: 'A statement followed by a question',
    topic: 'question-and-exclamation-marks',
    tier: 2,
  },
  {
    broken:
      'and you hens how many eggs have you laid in this last year and how many of those eggs ever hatched into chickens',
    options: [
      'And you hens how many eggs, have you laid in this last year, and how many of those eggs ever hatched into chickens?',
      'And you hens how many eggs have you laid in this last year, and how many of those eggs ever hatched into chickens.',
      'And you hens, how many eggs, have you laid in this last year, and how many of those eggs ever hatched into chickens.',
      'And you hens, how many eggs have you laid in this last year, and how many of those eggs ever hatched into chickens?',
    ],
    answerIndex: 3,
    ruleTested: 'Direct address, two joined questions and a question mark',
    topic: 'question-and-exclamation-marks',
    tier: 3,
    source: 'Animal Farm, Chapter 1',
  },
  // ── Commas in lists ───────────────────────────────────────────────────────
  {
    broken: 'i bought apples bananas grapes and oranges',
    options: [
      'I bought apples, bananas, grapes and oranges.',
      'I bought: apples, bananas, grapes and oranges.',
      'I bought apples bananas, grapes and oranges.',
      'I bought: apples bananas, grapes and oranges.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas to separate items in a list',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'she packed a towel sun cream a hat and a book',
    options: [
      'She packed, a towel, sun cream, a hat and a book.',
      'She packed a towel, sun cream, a hat and a book.',
      'She packed a towel sun cream, a hat and a book.',
      'She packed, a towel sun cream, a hat and a book.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list of nouns',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'the recipe needs flour butter sugar and eggs',
    options: [
      'The recipe, needs flour, butter, sugar and eggs.',
      'The recipe needs flour butter, sugar and eggs.',
      'The recipe needs flour, butter, sugar and eggs.',
      'The recipe, needs flour butter, sugar and eggs.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas separating list items before "and"',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'we hiked swam cycled and camped during the trip',
    options: [
      'We hiked swam, cycled and camped during the trip.',
      'We hiked, swam cycled and camped during the trip.',
      'We hiked swam cycled and camped during the trip.',
      'We hiked, swam, cycled and camped during the trip.',
    ],
    answerIndex: 3,
    ruleTested: 'Commas in a list of verbs',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'the flag was red white and blue',
    options: [
      'The flag was red, white and blue.',
      'The flag was, red, white and blue.',
      'The flag was red white and blue.',
      'The flag was, red white and blue.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas in a short list of adjectives',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'london paris and rome are european capitals',
    options: [
      'London Paris and Rome are European capitals.',
      'London, Paris and Rome are European capitals.',
      'London, Paris and Rome, are European capitals.',
      'London Paris and Rome, are European capitals.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list that is the subject of the sentence',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'the winning numbers were 4 17 23 and 31',
    options: [
      'The winning numbers were 4 17, 23 and 31.',
      'The winning numbers were: 4, 17, 23 and 31.',
      'The winning numbers were 4, 17, 23 and 31.',
      'The winning numbers were: 4 17, 23 and 31.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas in a list of numbers',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'would you like tea coffee or juice',
    options: [
      'Would you like tea coffee or juice?',
      'Would you like tea, coffee or juice.',
      'Would you like tea coffee or juice.',
      'Would you like tea, coffee or juice?',
    ],
    answerIndex: 3,
    ruleTested: 'Commas in a list of choices',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'we saw giraffes zebras and lions at the zoo',
    options: [
      'We saw giraffes, zebras and lions at the zoo.',
      'We saw, giraffes, zebras and lions at the zoo.',
      'We saw giraffes zebras, and lions at the zoo.',
      'We saw, giraffes zebras, and lions at the zoo.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas in a list of nouns',
    topic: 'commas-in-lists',
    tier: 1,
  },
  {
    broken: 'they were all thirsty weary and footsore',
    options: [
      'They were all thirsty weary, and footsore.',
      'They were all thirsty, weary, and footsore.',
      'They were all, thirsty, weary, and footsore.',
      'They were all, thirsty weary, and footsore.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list of adjectives',
    topic: 'commas-in-lists',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 16',
  },
  {
    broken: 'the guests included dr khan mrs evans and professor lee',
    options: [
      'The guests included Dr Khan Mrs Evans and Professor Lee.',
      'The guests included: Dr Khan, Mrs Evans and Professor Lee.',
      'The guests included Dr Khan, Mrs Evans and Professor Lee.',
      'The guests included: Dr Khan Mrs Evans and Professor Lee.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas in a list of names with titles',
    topic: 'commas-in-lists',
    tier: 2,
  },
  {
    broken: 'my favourite subjects are english history and art',
    options: [
      'My favourite subjects are: English, history and art.',
      'My favourite subjects are English history and art.',
      'My favourite subjects are: English history and art.',
      'My favourite subjects are English, history and art.',
    ],
    answerIndex: 3,
    ruleTested: 'A comma that decides how many items a list holds',
    topic: 'commas-in-lists',
    tier: 3,
    prompt: 'Punctuate it so that it names three subjects.',
  },
  {
    broken:
      'i let myself in with my latchkey closed locked and bolted the door staggered to the foot of the staircase and sat down',
    options: [
      'I let myself in with my latchkey, closed, locked and bolted the door, staggered to the foot of the staircase, and sat down.',
      'I let myself in with my latchkey, closed locked and bolted the door, staggered to the foot of the staircase, and sat down.',
      'I let myself in with my latchkey, closed, locked and bolted the door, staggered to the foot of the staircase and, sat down.',
      'I let myself in with my latchkey, closed locked and bolted the door, staggered to the foot of the staircase and, sat down.',
    ],
    answerIndex: 0,
    ruleTested: 'A list of actions with a smaller list inside it',
    topic: 'commas-in-lists',
    tier: 3,
    source: 'The War of the Worlds, Book One, Chapter 10',
  },
  {
    broken:
      'there was need of paraffin oil nails string dog biscuits and iron for the horses shoes none of which could be produced on the farm',
    options: [
      "There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses' shoes; none of which could be produced on the farm.",
      "There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses' shoes, none of which could be produced on the farm.",
      'There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses shoes, none of which could be produced on the farm.',
      'There was need of paraffin oil, nails, string, dog biscuits, and iron for the horses shoes; none of which could be produced on the farm.',
    ],
    answerIndex: 1,
    ruleTested: 'A list, a plural possessive and a comment on the list',
    topic: 'commas-in-lists',
    tier: 3,
    source: 'Animal Farm, Chapter 6',
  },
  {
    broken: 'i invited my parents ayesha and tom',
    options: [
      'I invited my parents, Ayesha and Tom.',
      'I invited my parents Ayesha and Tom.',
      'I invited my parents, Ayesha, and Tom.',
      'I invited, my parents, Ayesha, and Tom.',
    ],
    answerIndex: 2,
    ruleTested: 'An Oxford comma that removes a second meaning',
    topic: 'commas-in-lists',
    tier: 3,
    prompt: "Punctuate it so that Ayesha and Tom are clearly not the writer's parents.",
  },
  // ── Commas after an opening word, phrase or clause ────────────────────────
  {
    broken: 'because it was raining we stayed indoors',
    options: [
      'Because it was raining; we stayed indoors.',
      'Because it was raining. We stayed indoors.',
      'Because it was raining: we stayed indoors.',
      'Because it was raining, we stayed indoors.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma after a subordinate clause at the start',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'after the match had finished the players shook hands',
    options: [
      'After the match had finished, the players shook hands.',
      'After the match had finished, the players, shook hands.',
      'After the match had finished; the players, shook hands.',
      'After the match had finished; the players shook hands.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma after a fronted subordinate clause',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'although she was tired she finished her homework',
    options: [
      'Although, she was tired, she finished her homework.',
      'Although she was tired, she finished her homework.',
      'Although she was tired; she finished her homework.',
      'Although, she was tired; she finished her homework.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma separating a fronted "although" clause',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'when the bell rang the students left the room',
    options: [
      'When the bell rang, the students, left the room.',
      'When the bell rang. The students left the room.',
      'When the bell rang, the students left the room.',
      'When the bell rang. The students, left the room.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a "when" subordinate clause',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'suddenly the lights went out',
    options: [
      'Suddenly, the lights, went out.',
      'Suddenly; the lights went out.',
      'Suddenly the lights, went out.',
      'Suddenly, the lights went out.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma after a fronted adverbial',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'if you finish early you may go outside',
    options: [
      'If you finish early, you may go outside.',
      'If you finish early; you may go outside.',
      'If you finish early. You may go outside.',
      'If you finish early you, may go outside.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma after a fronted conditional clause',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'meanwhile the rest of the team kept practising',
    options: [
      'Meanwhile, the rest of the team, kept practising.',
      'Meanwhile, the rest of the team kept practising.',
      'Meanwhile; the rest of the team kept practising.',
      'Meanwhile; the rest of the team, kept practising.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted adverbial of time',
    topic: 'commas-after-openers',
    tier: 1,
  },
  {
    broken: 'as winter drew on mollie became more and more troublesome',
    options: [
      'As winter drew on; Mollie became more and more troublesome.',
      'As winter drew on. Mollie became more and more troublesome.',
      'As winter drew on, Mollie became more and more troublesome.',
      'As winter drew, on Mollie became more and more troublesome.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a fronted time clause',
    topic: 'commas-after-openers',
    tier: 1,
    source: 'Animal Farm, Chapter 5',
  },
  {
    broken: 'when the hens heard this they raised a terrible outcry',
    options: [
      'When the hens heard this they, raised a terrible outcry.',
      'When the hens heard this; they raised a terrible outcry.',
      'When the hens, heard this they raised a terrible outcry.',
      'When the hens heard this, they raised a terrible outcry.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma after a fronted "when" clause',
    topic: 'commas-after-openers',
    tier: 1,
    source: 'Animal Farm, Chapter 7',
  },
  {
    broken: 'as bradshaw left the lawyer looked at his watch',
    options: [
      'As Bradshaw left, the lawyer looked at his watch.',
      'As Bradshaw left the lawyer, looked at his watch.',
      'As Bradshaw left; the lawyer looked at his watch.',
      'As Bradshaw left. The lawyer looked at his watch.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma after a fronted time clause, preventing a misreading',
    topic: 'commas-after-openers',
    tier: 1,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 8',
  },
  {
    broken: 'after his hoof had healed up boxer worked harder than ever',
    options: [
      'After his hoof had healed up; Boxer worked harder than ever.',
      'After his hoof had healed up, Boxer worked harder than ever.',
      'After his hoof, had healed up Boxer worked harder than ever.',
      'After his hoof had healed up. Boxer worked harder than ever.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted "after" clause',
    topic: 'commas-after-openers',
    tier: 1,
    source: 'Animal Farm, Chapter 9',
  },
  {
    broken: 'however these stories were never fully believed',
    options: [
      'However, these stories, were never fully believed.',
      'However; these stories were never fully believed.',
      'However, these stories were never fully believed.',
      'However; these stories, were never fully believed.',
    ],
    answerIndex: 2,
    ruleTested: "Comma after an opening 'However'",
    topic: 'commas-after-openers',
    tier: 1,
    source: 'Animal Farm, Chapter 4',
  },
  {
    broken: 'indeed all the animals worked like slaves that year',
    options: [
      'Indeed, all the animals, worked like slaves that year.',
      'Indeed; all the animals worked like slaves that year.',
      'Indeed; all the animals, worked like slaves that year.',
      'Indeed, all the animals worked like slaves that year.',
    ],
    answerIndex: 3,
    ruleTested: "Comma after an opening 'Indeed'",
    topic: 'commas-after-openers',
    tier: 1,
    source: 'Animal Farm, Chapter 9',
  },
  {
    broken: 'although it was difficult i never gave up and i succeeded',
    options: [
      'Although it was difficult, I never gave up, and I succeeded.',
      'Although it was difficult, I never gave up and, I succeeded.',
      'Although it was difficult; I never gave up, and I succeeded.',
      'Although it was difficult; I never gave up and, I succeeded.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma after a subordinate clause and before a coordinating "and"',
    topic: 'commas-after-openers',
    tier: 2,
  },
  {
    broken: 'turn off the lights before you leave the room',
    options: [
      'Turn off the lights. Before you leave the room.',
      'Turn off the lights before you leave the room.',
      'Turn off, the lights. Before you leave the room.',
      'Turn off, the lights before you leave the room.',
    ],
    answerIndex: 1,
    ruleTested: 'No comma needed before a subordinate clause that follows',
    topic: 'commas-after-openers',
    tier: 2,
  },
  {
    broken: 'when the clock struck eleven this domestic ball broke up',
    options: [
      'When the clock struck eleven, this domestic ball, broke up.',
      'When the clock struck eleven; this domestic ball broke up.',
      'When the clock struck eleven, this domestic ball broke up.',
      'When the clock struck eleven; this domestic ball, broke up.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a fronted time clause',
    topic: 'commas-after-openers',
    tier: 2,
    source: 'A Christmas Carol, Stave 2',
  },
  {
    broken: 'while the rest of the body dwindled the hands would grow larger',
    options: [
      'While the rest of the body dwindled; the hands would grow larger.',
      'While the rest of the body dwindled, the hands, would grow larger.',
      'While the rest of the body dwindled; the hands, would grow larger.',
      'While the rest of the body dwindled, the hands would grow larger.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma after a fronted "while" clause',
    topic: 'commas-after-openers',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 2',
  },
  {
    broken: 'as it bulged up and caught the light it glistened like wet leather',
    options: [
      'As it bulged up and caught the light, it glistened like wet leather.',
      'As it bulged up, and caught the light it glistened like wet leather.',
      'As it bulged up and caught the light; it glistened like wet leather.',
      'As it bulged up and caught the light. It glistened like wet leather.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma after a fronted clause with two verbs',
    topic: 'commas-after-openers',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 4',
  },
  {
    broken:
      'if they had no more food than they had had in joness day at least they did not have less',
    options: [
      "If they had no more food than they had had in Jones's day; at least they did not have less.",
      "If they had no more food than they had had in Jones's day, at least they did not have less.",
      "If they had no more food than they had had in Jones's day. At least they did not have less.",
      "If they had no more food than they had had in Jones's day: at least they did not have less.",
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a long fronted conditional clause',
    topic: 'commas-after-openers',
    tier: 2,
    source: 'Animal Farm, Chapter 6',
  },
  {
    broken: 'as scrooge looked fixedly at this phenomenon it was a knocker again',
    options: [
      'As Scrooge looked fixedly at this phenomenon; it was a knocker again.',
      'As Scrooge looked fixedly, at this phenomenon it was a knocker again.',
      'As Scrooge looked fixedly at this phenomenon, it was a knocker again.',
      'As Scrooge looked fixedly at this phenomenon. It was a knocker again.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a fronted "as" clause',
    topic: 'commas-after-openers',
    tier: 2,
    source: 'A Christmas Carol, Stave 1',
  },
  {
    broken: 'when i saw how deadly white her face was i ceased abruptly',
    options: [
      'When I saw how deadly white her face was; I ceased abruptly.',
      'When I saw how deadly white her face was. I ceased abruptly.',
      'When I saw how deadly white, her face was I ceased abruptly.',
      'When I saw how deadly white her face was, I ceased abruptly.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma after a fronted time clause',
    topic: 'commas-after-openers',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 7',
  },
  {
    broken: 'while i was occupied in this way one of the dismounted hussars came running up',
    options: [
      'While I was occupied in this way, one of the dismounted hussars came running up.',
      'While I was occupied in this way; one of the dismounted hussars came running up.',
      'While I was occupied, in this way one of the dismounted hussars came running up.',
      'While I was occupied in this way one of the dismounted hussars, came running up.',
    ],
    answerIndex: 0,
    ruleTested: "Comma after a fronted 'while' clause",
    topic: 'commas-after-openers',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 9',
  },
  {
    broken: 'if i am the chief of sinners i am the chief of sufferers also',
    options: [
      'If I am the chief of sinners; I am the chief of sufferers also.',
      'If I am the chief of sinners, I am the chief of sufferers also.',
      'If I am the chief of sinners. I am the chief of sufferers also.',
      'If I am the chief of sinners: I am the chief of sufferers also.',
    ],
    answerIndex: 1,
    ruleTested: "Comma after a fronted 'if' clause",
    topic: 'commas-after-openers',
    tier: 2,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 6',
  },
  {
    broken: 'after breakfast instead of working i decided to walk down towards the common',
    options: [
      'After breakfast; instead of working I decided to walk down towards the common.',
      'After breakfast; instead of working, I decided, to walk down towards the common.',
      'After breakfast, instead of working, I decided to walk down towards the common.',
      'After breakfast, instead of working I decided, to walk down towards the common.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas after two openers in a row',
    topic: 'commas-after-openers',
    tier: 3,
    source: 'The War of the Worlds, Book One, Chapter 9',
  },
  {
    broken:
      'meanwhile through the agency of whymper napoleon was engaged in complicated negotiations with frederick and pilkington',
    options: [
      'Meanwhile; through the agency of Whymper Napoleon was engaged in complicated negotiations with Frederick and Pilkington.',
      'Meanwhile; through the agency of Whymper, Napoleon, was engaged in complicated negotiations with Frederick and Pilkington.',
      'Meanwhile, through the agency of Whymper Napoleon, was engaged in complicated negotiations with Frederick and Pilkington.',
      'Meanwhile, through the agency of Whymper, Napoleon was engaged in complicated negotiations with Frederick and Pilkington.',
    ],
    answerIndex: 3,
    ruleTested: 'Commas after two openers in a row',
    topic: 'commas-after-openers',
    tier: 3,
    source: 'Animal Farm, Chapter 8',
  },
  {
    broken:
      'as soon as they were weaned napoleon took them away from their mothers saying that he would make himself responsible for their education',
    options: [
      'As soon as they were weaned, Napoleon took them away from their mothers, saying that he would make himself responsible for their education.',
      'As soon as they were weaned; Napoleon took them away from their mothers, saying that he would make himself responsible for their education.',
      'As soon as they were weaned, Napoleon took them away from their mothers saying that he would make himself responsible for their education.',
      'As soon as they were weaned; Napoleon took them away from their mothers saying that he would make himself responsible for their education.',
    ],
    answerIndex: 0,
    ruleTested: 'A comma after an opening clause, and one that shows who is speaking',
    topic: 'commas-after-openers',
    tier: 3,
    source: 'Animal Farm, Chapter 3',
  },
  {
    broken:
      'my fathers family name being pirrip and my christian name philip my infant tongue could make of both names nothing longer or more explicit than pip',
    options: [
      'My fathers family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip.',
      "My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip.",
      "My father's family name being Pirrip, and my Christian name Philip; my infant tongue could make of both names nothing longer or more explicit than Pip.",
      'My fathers family name being Pirrip, and my Christian name Philip; my infant tongue could make of both names nothing longer or more explicit than Pip.',
    ],
    answerIndex: 1,
    ruleTested: 'A comma after a long opening phrase, and a possessive apostrophe',
    topic: 'commas-after-openers',
    tier: 3,
    source: 'Great Expectations, Chapter 1',
  },
  // ── Comma splices ─────────────────────────────────────────────────────────
  {
    broken: 'my uncle is a chef he works in a hotel',
    options: [
      'My uncle is a chef, he works in a hotel.',
      'My uncle, is a chef, he works in a hotel.',
      'My uncle is a chef. He works in a hotel.',
      'My uncle, is a chef. He works in a hotel.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice by using two sentences',
    topic: 'comma-splices',
    tier: 1,
  },
  {
    broken: 'it was late, we went home',
    options: [
      'It was late, so, we went home.',
      'It was late so, we went home.',
      'It was late we went home.',
      'It was late, so we went home.',
    ],
    answerIndex: 3,
    ruleTested: 'Fixing a comma splice with a conjunction',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'the test was hard, everyone passed it',
    options: [
      'The test was hard, but everyone passed it.',
      'The test was hard, but, everyone passed it.',
      'The test was hard but, everyone passed it.',
      'The test was hard everyone passed it.',
    ],
    answerIndex: 0,
    ruleTested: 'Fixing a comma splice with "but"',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'she loves reading, her brother prefers sport',
    options: [
      'She loves reading; her brother, prefers sport.',
      'She loves reading; her brother prefers sport.',
      'She loves reading: her brother prefers sport.',
      'She loves reading, her brother, prefers sport.',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a semicolon',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'the rain stopped, the sun came out',
    options: [
      'The rain stopped, and the sun, came out.',
      'The rain stopped and, the sun came out.',
      'The rain stopped, and the sun came out.',
      'The rain stopped, and, the sun came out.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "and"',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'he trained every day, he wanted to win',
    options: [
      'He trained every day; because he wanted to win.',
      'He trained every day, because, he wanted to win.',
      'He trained every day because, he wanted to win.',
      'He trained every day because he wanted to win.',
    ],
    answerIndex: 3,
    ruleTested: 'Fixing a comma splice with a subordinating conjunction',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'we waited for an hour, the bus never arrived',
    options: [
      'We waited for an hour. The bus never arrived.',
      'We waited for an hour. The bus, never arrived.',
      'We waited for an hour the bus never arrived.',
      'We waited for an hour the bus, never arrived.',
    ],
    answerIndex: 0,
    ruleTested: 'Fixing a comma splice by using two sentences',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'the museum was closed, we visited the park instead',
    options: [
      'The museum was closed, so we visited, the park instead.',
      'The museum was closed, so we visited the park instead.',
      'The museum was closed so, we visited the park instead.',
      'The museum was closed, so, we visited the park instead.',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with "so"',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'i love football my favourite position is goalkeeper',
    options: [
      'I love football, my favourite position is goalkeeper.',
      'I love football; my favourite position, is goalkeeper.',
      'I love football; my favourite position is goalkeeper.',
      'I love football, my favourite position, is goalkeeper.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with a semicolon',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'we were hungry, we ate the sandwiches',
    options: [
      'As we were hungry. We ate the sandwiches.',
      'As we were hungry; we ate the sandwiches.',
      'As, we were hungry we ate the sandwiches.',
      'As we were hungry, we ate the sandwiches.',
    ],
    answerIndex: 3,
    ruleTested: 'Fixing a comma splice by making one part depend on the other',
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'she plays the piano she also sings in a choir',
    options: [
      'She plays the piano; she also sings in a choir.',
      'She plays the piano, she also sings in a choir.',
      'She plays the piano; she also, sings in a choir.',
      'She plays the piano, she also, sings in a choir.',
    ],
    answerIndex: 0,
    ruleTested: "Fixing a comma splice that 'also' cannot fix",
    topic: 'comma-splices',
    tier: 2,
  },
  {
    broken: 'the road was icy therefore we drove slowly',
    options: [
      'The road was icy, therefore, we drove slowly.',
      'The road was icy; therefore, we drove slowly.',
      'The road was icy, therefore we drove slowly.',
      'The road was icy therefore, we drove slowly.',
    ],
    answerIndex: 1,
    ruleTested: "Semicolon before 'therefore' between two sentences",
    topic: 'comma-splices',
    tier: 2,
    facts: ['a linking adverb between two sentences'],
  },
  {
    broken: 'my aunt lives in wales, she breeds sheep',
    options: [
      'My aunt, who lives in Wales; breeds sheep.',
      'My aunt, who lives in Wales breeds sheep.',
      'My aunt, who lives in Wales, breeds sheep.',
      'My aunt; who lives in Wales; breeds sheep.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with a relative clause',
    topic: 'comma-splices',
    tier: 3,
  },
  // ── Speech marks ──────────────────────────────────────────────────────────
  {
    broken: 'come here at once said the teacher',
    options: [
      '"Come here at once" said the teacher.',
      '"Come here at once", said the teacher.',
      '"Come here at once." said the teacher.',
      '"Come here at once," said the teacher.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma inside speech marks before the reporting clause',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'tom asked are we nearly there yet',
    options: [
      'Tom asked, "Are we nearly there yet?"',
      'Tom asked, "Are we nearly there yet"?',
      'Tom asked "Are we nearly there yet?"',
      'Tom asked "Are we nearly there yet"?',
    ],
    answerIndex: 0,
    ruleTested: 'Question mark inside speech marks',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'i am so excited shouted maya',
    options: [
      '"I am so excited!", shouted Maya.',
      '"I am so excited!" shouted Maya.',
      '"I am so excited" shouted Maya.',
      '"I am so excited"! shouted Maya.',
    ],
    answerIndex: 1,
    ruleTested: 'Exclamation mark inside speech marks',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'please be quiet whispered the librarian',
    options: [
      '"Please be quiet", whispered the librarian.',
      'Please be quiet, whispered the librarian.',
      '"Please be quiet," whispered the librarian.',
      'Please be quiet whispered the librarian.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma inside speech marks with a reporting verb',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'she said i will meet you after school',
    options: [
      'She said, "I will meet you after school".',
      '"She said, I will meet you after school."',
      'She said "I will meet you after school".',
      'She said, "I will meet you after school."',
    ],
    answerIndex: 3,
    ruleTested: 'Comma before direct speech and capital to begin it',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'wait for me called jack',
    options: [
      '"Wait for me!" called Jack.',
      '"Wait for me!", called Jack.',
      'Wait for me!, called Jack.',
      'Wait for me! called Jack.',
    ],
    answerIndex: 0,
    ruleTested: 'Exclamation mark and speech marks for a shout',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'dr patel will see you now said the receptionist',
    options: [
      '"Dr Patel will see you now" said the receptionist.',
      '"Dr Patel will see you now," said the receptionist.',
      '"Dr Patel will see you now." Said the receptionist.',
      '"Dr Patel will see you now", said the receptionist.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma at the end of speech that comes before the reporting clause',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'bravery is not enough said squealer',
    options: [
      '"Bravery is not enough." Said Squealer.',
      '"Bravery is not enough", said Squealer.',
      '"Bravery is not enough," said Squealer.',
      '"Bravery is not enough" said Squealer.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma inside speech marks before the reporting clause',
    topic: 'speech-marks',
    tier: 1,
    source: 'Animal Farm, Chapter 5',
  },
  {
    broken: 'what is that gun firing for said boxer',
    options: [
      '"What is that gun firing for", said Boxer.',
      '"What is that gun firing for," said Boxer.',
      '"What is that gun firing for"? said Boxer.',
      '"What is that gun firing for?" said Boxer.',
    ],
    answerIndex: 3,
    ruleTested: 'Question mark inside speech marks',
    topic: 'speech-marks',
    tier: 1,
    source: 'Animal Farm, Chapter 8',
  },
  {
    broken: 'we must get help at once said clover',
    options: [
      '"We must get help at once," said Clover.',
      '"We must get help at once." said Clover.',
      'We must get help at once, said Clover.',
      '"We must get help at once, said Clover."',
    ],
    answerIndex: 0,
    ruleTested: 'Speech marks round the spoken words only',
    topic: 'speech-marks',
    tier: 1,
    source: 'Animal Farm, Chapter 9',
  },
  {
    broken: 'and shall i still be allowed to wear ribbons in my mane asked mollie',
    options: [
      '"And shall I still be allowed to wear ribbons in my mane," asked Mollie.',
      '"And shall I still be allowed to wear ribbons in my mane?" asked Mollie.',
      '"And shall I still be allowed to wear ribbons in my mane", asked Mollie.',
      '"And shall I still be allowed to wear ribbons in my mane"? asked Mollie.',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark inside speech marks, small letter after',
    topic: 'speech-marks',
    tier: 1,
    source: 'Animal Farm, Chapter 2',
  },
  {
    broken: 'a horses lungs do not last for ever she said to him',
    options: [
      '"A horse\'s lungs do not last for ever." she said to him.',
      '"A horse\'s lungs do not last for ever", she said to him.',
      '"A horse\'s lungs do not last for ever," she said to him.',
      "A horse's lungs do not last for ever, she said to him.",
    ],
    answerIndex: 2,
    ruleTested: 'Comma inside speech marks before the reporting clause',
    topic: 'speech-marks',
    tier: 1,
    source: 'Animal Farm, Chapter 9',
  },
  {
    broken: 'major sholto was a very particular friend of papas she said',
    options: [
      '"Major Sholto was a very particular friend of papa\'s." she said.',
      '"Major Sholto was a very particular friend of papa\'s", she said.',
      "Major Sholto was a very particular friend of papa's, she said.",
      '"Major Sholto was a very particular friend of papa\'s," she said.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma inside speech marks before the reporting clause',
    topic: 'speech-marks',
    tier: 1,
    source: 'The Sign of Four, Chapter 3',
  },
  {
    broken: 'ill be back soon said dad',
    options: [
      '"I\'ll be back soon," said Dad.',
      '"Ill be back soon," said Dad.',
      '"I\'ll be back soon", said Dad.',
      '"Ill be back soon", said Dad.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma inside speech marks, apostrophe in a contraction',
    topic: 'speech-marks',
    tier: 1,
  },
  {
    broken: 'the guide explained this castle is over 800 years old',
    options: [
      'The guide explained, "This castle is over 800 years old".',
      'The guide explained, "This castle is over 800 years old."',
      'The guide explained "This castle is over 800 years old."',
      'The guide explained "This castle is over 800 years old".',
    ],
    answerIndex: 1,
    ruleTested: 'Comma before speech and full stop inside the closing speech marks',
    topic: 'speech-marks',
    tier: 2,
  },
  {
    broken: 'help i cant swim he yelled',
    options: [
      '"Help, I cant swim!" he yelled.',
      '"Help, I can\'t swim!", he yelled.',
      '"Help, I can\'t swim!" he yelled.',
      '"Help, I cant swim!", he yelled.',
    ],
    answerIndex: 2,
    ruleTested: 'Speech marks, contraction and exclamation in dialogue',
    topic: 'speech-marks',
    tier: 2,
  },
  {
    broken: 'perhaps you are right watson he said',
    options: [
      '"Perhaps you are right Watson," he said.',
      '"Perhaps you are right, Watson", he said.',
      '"Perhaps you are right Watson", he said.',
      '"Perhaps you are right, Watson," he said.',
    ],
    answerIndex: 3,
    ruleTested: 'A word of address inside speech',
    topic: 'speech-marks',
    tier: 2,
    source: 'The Sign of Four, Chapter 1',
  },
  {
    broken: 'the date asked holmes opening his note-book',
    options: [
      '"The date?" asked Holmes, opening his note-book.',
      '"The date," asked Holmes, opening his note-book.',
      '"The date", asked Holmes, opening his note-book.',
      '"The date"? asked Holmes, opening his note-book.',
    ],
    answerIndex: 0,
    ruleTested: 'A one-word question in speech',
    topic: 'speech-marks',
    tier: 2,
    source: 'The Sign of Four, Chapter 2',
  },
  {
    broken: 'stop shouted the guard you cannot go in there',
    options: [
      '"Stop!" shouted the guard, "you cannot go in there."',
      '"Stop!" shouted the guard. "You cannot go in there."',
      '"Stop!", shouted the guard. "You cannot go in there."',
      '"Stop!", shouted the guard, "you cannot go in there."',
    ],
    answerIndex: 1,
    ruleTested: 'Two spoken sentences either side of the reporting clause',
    topic: 'speech-marks',
    tier: 2,
  },
  {
    broken:
      'if your friend she said would be good enough to stop he might be of inestimable service to me',
    options: [
      '"If your friend," she said. "Would be good enough to stop, he might be of inestimable service to me."',
      '"If your friend" she said, "would be good enough to stop, he might be of inestimable service to me."',
      '"If your friend," she said, "would be good enough to stop, he might be of inestimable service to me."',
      '"If your friend" she said. "Would be good enough to stop, he might be of inestimable service to me."',
    ],
    answerIndex: 2,
    ruleTested: 'A spoken sentence split by its reporting clause',
    topic: 'speech-marks',
    tier: 3,
    source: 'The Sign of Four, Chapter 2',
  },
  {
    broken: 'for my part said holmes whatever you may choose to say will go no further',
    options: [
      '"For my part" said Holmes, "whatever you may choose to say will go no further".',
      '"For my part" said Holmes, "whatever you may choose to say will go no further."',
      '"For my part," said Holmes, "whatever you may choose to say will go no further".',
      '"For my part," said Holmes, "whatever you may choose to say will go no further."',
    ],
    answerIndex: 3,
    ruleTested: 'A spoken sentence split by its reporting clause',
    topic: 'speech-marks',
    tier: 3,
    source: 'The Sign of Four, Chapter 4',
  },
  {
    broken:
      'boxer who had now had time to think things over voiced the general feeling by saying if comrade napoleon says it it must be right',
    options: [
      'Boxer, who had now had time to think things over, voiced the general feeling by saying: "If Comrade Napoleon says it, it must be right."',
      'Boxer who had now had time to think things over voiced the general feeling by saying: "If Comrade Napoleon says it it must be right."',
      'Boxer who had now had time to think things over, voiced the general feeling by saying: "If Comrade Napoleon says it, it must be right".',
      'Boxer, who had now had time to think things over voiced the general feeling by saying: "If Comrade Napoleon says it it must be right".',
    ],
    answerIndex: 0,
    ruleTested: 'Commas round extra information, then a colon introducing speech',
    topic: 'speech-marks',
    tier: 3,
    source: 'Animal Farm, Chapter 5',
  },
  {
    broken: 'are you coming asked leo or staying here',
    options: [
      '"Are you coming?" asked Leo, "or staying here?"',
      '"Are you coming," asked Leo, "or staying here?"',
      '"Are you coming?" asked Leo, "or staying here"?',
      '"Are you coming," asked Leo, "or staying here"?',
    ],
    answerIndex: 1,
    ruleTested: 'A spoken question split by its reporting clause',
    topic: 'speech-marks',
    tier: 3,
  },
  {
    broken: 'you finished the essay didnt you asked mr hall',
    options: [
      '"You finished the essay didn\'t you," asked Mr Hall.',
      '"You finished the essay didnt you?" asked Mr Hall.',
      '"You finished the essay, didn\'t you?" asked Mr Hall.',
      '"You finished the essay, didnt you," asked Mr Hall.',
    ],
    answerIndex: 2,
    ruleTested: 'A question tag inside speech',
    topic: 'speech-marks',
    tier: 3,
  },
  {
    broken: 'the teacher said the inspector was late',
    options: [
      'The teacher said, "The inspector was late."',
      '"The teacher" said the inspector "was late."',
      '"The teacher," said the inspector. "Was late."',
      '"The teacher," said the inspector, "was late."',
    ],
    answerIndex: 3,
    ruleTested: 'Speech marks that decide who is speaking',
    topic: 'speech-marks',
    tier: 3,
    prompt: 'Punctuate it so that the teacher is the one who was late.',
  },
  // ── Apostrophes in context ────────────────────────────────────────────────
  {
    broken: 'we couldnt find the keys anywhere',
    options: [
      "We couldn't find the keys anywhere.",
      "We could'nt find the keys anywhere.",
      "We couldn't find the key's anywhere.",
      "We could'nt find the key's anywhere.",
    ],
    answerIndex: 0,
    ruleTested: 'Apostrophe in a contraction (could not), none in a plural',
    topic: 'apostrophes',
    tier: 1,
  },
  {
    broken: 'thats my sisters bicycle',
    options: [
      "Thats my sister's bicycle.",
      "That's my sister's bicycle.",
      "That's my sisters bicycle.",
      "That's my sisters' bicycle.",
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophes for contraction and singular possession',
    topic: 'apostrophes',
    tier: 2,
    prompt: 'Punctuate it so that the bicycle belongs to one sister.',
  },
  {
    broken: 'the players changing room was locked',
    options: [
      'The players changing room was locked.',
      "The players' changing room, was locked.",
      "The players' changing room was locked.",
      'The players changing room, was locked.',
    ],
    answerIndex: 2,
    ruleTested: 'Apostrophe for plural possession',
    topic: 'apostrophes',
    tier: 2,
  },
  {
    broken: 'its going to be a long day isnt it',
    options: [
      "Its going to be a long day, isn't it?",
      "It's going to be a long day, isn't it.",
      "Its going to be a long day, isn't it.",
      "It's going to be a long day, isn't it?",
    ],
    answerIndex: 3,
    ruleTested: 'Contractions with a comma before a question tag',
    topic: 'apostrophes',
    tier: 2,
  },
  {
    broken: 'the companys profits rose but its share price fell',
    options: [
      "The company's profits rose, but its share price fell.",
      'The companys profits rose, but its share price fell.',
      "The company's profits rose, but it's share price fell.",
      "The companys profits rose, but it's share price fell.",
    ],
    answerIndex: 0,
    ruleTested: "A possessive apostrophe, and 'its' meaning 'belonging to it'",
    topic: 'apostrophes',
    tier: 2,
  },
  // ── Colons and semicolons ─────────────────────────────────────────────────
  {
    broken: 'you will need the following a pen a ruler and paper',
    options: [
      'You will need the following; a pen, a ruler and paper.',
      'You will need the following: a pen, a ruler and paper.',
      'You will need the following: a pen a ruler and paper.',
      'You will need the following; a pen a ruler and paper.',
    ],
    answerIndex: 1,
    ruleTested: 'Colon to introduce a list',
    topic: 'colons-and-semicolons',
    tier: 1,
    group: 'colons',
  },
  {
    broken: 'the journey was long the views were stunning',
    options: [
      'The journey was long, the views were stunning.',
      'The journey was long: the views were stunning.',
      'The journey was long; the views were stunning.',
      'The journey was long the views were stunning.',
    ],
    answerIndex: 2,
    ruleTested: 'Semicolon to join two related independent clauses',
    topic: 'colons-and-semicolons',
    tier: 2,
    group: 'semicolons',
  },
  {
    broken: 'there is one thing i value above all else honesty',
    options: [
      'There is one thing I value: above all else honesty.',
      'There is one thing I value above all else; honesty.',
      'There is one thing I value above all else honesty.',
      'There is one thing I value above all else: honesty.',
    ],
    answerIndex: 3,
    ruleTested: 'Colon before an explanation or single example',
    topic: 'colons-and-semicolons',
    tier: 2,
    group: 'colons',
  },
  {
    broken: 'the life of an animal is misery and slavery that is the plain truth',
    options: [
      'The life of an animal is misery and slavery: that is the plain truth.',
      'The life of an animal is misery and slavery, that is the plain truth.',
      'The life of an animal, is misery and slavery: that is the plain truth.',
      'The life of an animal, is misery and slavery, that is the plain truth.',
    ],
    answerIndex: 0,
    ruleTested: 'Colon between two sentences when the second drives home the first',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Animal Farm, Chapter 1',
    group: 'colons',
  },
  {
    broken: 'they had one very good quality they let you alone and asked no questions',
    options: [
      'They had one very good quality, they let you alone and asked no questions.',
      'They had one very good quality: they let you alone and asked no questions.',
      'They had one very good quality: they let you alone and, asked no questions.',
      'They had one very good quality, they let you alone and, asked no questions.',
    ],
    answerIndex: 1,
    ruleTested: 'Colon before what a sentence has promised',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'The Sign of Four, Chapter 12',
    group: 'colons',
  },
  {
    broken: 'let us face it our lives are miserable laborious and short',
    options: [
      'Let us face it: our lives are: miserable, laborious, and short.',
      'Let us face it: our lives are miserable laborious, and short.',
      'Let us face it: our lives are miserable, laborious, and short.',
      'Let us face it: our lives are: miserable laborious, and short.',
    ],
    answerIndex: 2,
    ruleTested: 'A list after a colon, with no second colon after the verb',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Animal Farm, Chapter 1',
    group: 'colons',
  },
  {
    broken: 'tongues of flame darted round the bed the curtains were on fire',
    options: [
      'Tongues of flame darted round the bed, the curtains were on fire.',
      'Tongues of flame darted round the bed: the curtains, were on fire.',
      'Tongues of flame darted round the bed, the curtains, were on fire.',
      'Tongues of flame darted round the bed: the curtains were on fire.',
    ],
    answerIndex: 3,
    ruleTested: 'Colon before a sentence that explains the first',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Jane Eyre, Chapter 15',
    group: 'colons',
  },
  {
    broken: 'raw and chill was the winter morning my teeth chattered as i hastened down the drive',
    options: [
      'Raw and chill was the winter morning: my teeth chattered as I hastened down the drive.',
      'Raw and chill was the winter morning, my teeth chattered as I hastened down the drive.',
      'Raw and chill, was the winter morning: my teeth chattered as I hastened down the drive.',
      'Raw and chill, was the winter morning, my teeth chattered as I hastened down the drive.',
    ],
    answerIndex: 0,
    ruleTested: 'Colon between a statement and what shows it',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Jane Eyre, Chapter 5',
    group: 'colons',
  },
  {
    broken: 'the kit includes a tent a stove and a map',
    options: [
      'The kit includes: a tent, a stove and a map.',
      'The kit includes a tent, a stove and a map.',
      'The kit includes a tent a stove and a map.',
      'The kit includes: a tent a stove and a map.',
    ],
    answerIndex: 1,
    ruleTested: "No colon after 'includes'",
    topic: 'colons-and-semicolons',
    tier: 2,
    group: 'colons',
  },
  {
    broken: 'the match was cancelled the pitch was flooded',
    options: [
      'The match was cancelled, the pitch was flooded.',
      'The match was cancelled: the pitch, was flooded.',
      'The match was cancelled: the pitch was flooded.',
      'The match was cancelled, the pitch, was flooded.',
    ],
    answerIndex: 2,
    ruleTested: 'Colon before a reason',
    topic: 'colons-and-semicolons',
    tier: 2,
    group: 'colons',
  },
  {
    broken:
      'there was no wastage whatever the hens and ducks with their sharp eyes had gathered up the very last stalk',
    options: [
      'There was no wastage whatever, the hens and ducks with their sharp eyes had gathered up the very last stalk.',
      'There was no wastage whatever; the hens and ducks with their sharp eyes, had gathered up the very last stalk.',
      'There was no wastage whatever, the hens and ducks with their sharp eyes, had gathered up the very last stalk.',
      'There was no wastage whatever; the hens and ducks with their sharp eyes had gathered up the very last stalk.',
    ],
    answerIndex: 3,
    ruleTested: 'Semicolon between two linked sentences',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Animal Farm, Chapter 3',
    group: 'semicolons',
  },
  {
    broken: 'napoleon stood sternly surveying his audience then he uttered a high-pitched whimper',
    options: [
      'Napoleon stood sternly surveying his audience; then he uttered a high-pitched whimper.',
      'Napoleon stood sternly surveying his audience, then he uttered a high-pitched whimper.',
      'Napoleon stood sternly surveying his audience then he uttered a high-pitched whimper.',
      'Napoleon stood sternly surveying his audience: then he uttered a high-pitched whimper.',
    ],
    answerIndex: 0,
    ruleTested: "Semicolon before 'then' between two sentences",
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Animal Farm, Chapter 7',
    group: 'semicolons',
  },
  {
    broken:
      'all relations with foxwood had been broken off insulting messages had been sent to pilkington',
    options: [
      'All relations with Foxwood had been broken off, insulting messages had been sent to Pilkington.',
      'All relations with Foxwood had been broken off; insulting messages had been sent to Pilkington.',
      'All relations with Foxwood had been broken off; insulting messages, had been sent to Pilkington.',
      'All relations with Foxwood had been broken off, insulting messages, had been sent to Pilkington.',
    ],
    answerIndex: 1,
    ruleTested: 'Semicolon between two linked sentences',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Animal Farm, Chapter 8',
    group: 'semicolons',
  },
  {
    broken: 'the lawyer listened gloomily he did not like his friends feverish manner',
    options: [
      "The lawyer listened gloomily, he did not like his friend's feverish manner.",
      'The lawyer listened gloomily; he did not like his friends feverish manner.',
      "The lawyer listened gloomily; he did not like his friend's feverish manner.",
      'The lawyer listened gloomily, he did not like his friends feverish manner.',
    ],
    answerIndex: 2,
    ruleTested: 'Semicolon between two sentences, and a possessive apostrophe',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 5',
    group: 'semicolons',
    facts: ["his friend's"],
  },
  {
    broken: 'the forecast promised sunshine however it rained all day',
    options: [
      'The forecast promised sunshine, however, it rained all day.',
      'The forecast promised sunshine however, it rained all day.',
      'The forecast promised sunshine. however, it rained all day.',
      'The forecast promised sunshine; however, it rained all day.',
    ],
    answerIndex: 3,
    ruleTested: "Semicolon before 'however', comma after it",
    topic: 'colons-and-semicolons',
    tier: 2,
    group: 'semicolons',
    facts: ['a linking adverb between two sentences'],
  },
  {
    broken:
      'semi-starvation and neglected colds had predisposed most of the pupils to receive infection forty-five out of the eighty girls lay ill at one time',
    options: [
      'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection: forty-five out of the eighty girls lay ill at one time.',
      'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection, forty-five out of the eighty girls lay ill at one time.',
      'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection: forty-five out of the eighty girls, lay ill at one time.',
      'Semi-starvation and neglected colds had predisposed most of the pupils to receive infection, forty-five out of the eighty girls, lay ill at one time.',
    ],
    answerIndex: 0,
    ruleTested: 'Colon before the evidence for a statement',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Jane Eyre, Chapter 9',
    group: 'colons',
  },
  {
    broken:
      'these seven commandments would now be inscribed on the wall they would form an unalterable law by which all the animals on animal farm must live for ever after',
    options: [
      'These Seven Commandments would now be inscribed on the wall, they would form an unalterable law by which all the animals on Animal Farm must live for ever after.',
      'These Seven Commandments would now be inscribed on the wall; they would form an unalterable law by which all the animals on Animal Farm must live for ever after.',
      'These Seven Commandments, would now be inscribed on the wall; they would form an unalterable law by which all the animals on Animal Farm must live for ever after.',
      'These Seven Commandments, would now be inscribed on the wall, they would form an unalterable law by which all the animals on Animal Farm must live for ever after.',
    ],
    answerIndex: 1,
    ruleTested: 'Semicolon between two linked sentences',
    topic: 'colons-and-semicolons',
    tier: 2,
    source: 'Animal Farm, Chapter 2',
    group: 'semicolons',
  },
  {
    broken:
      'but it was noticed that these two were never in agreement whatever suggestion either of them made the other could be counted on to oppose it',
    options: [
      'But it was noticed that these two were never in agreement, whatever suggestion either of them made the other could be counted on to oppose it.',
      'But it was noticed, that these two were never in agreement, whatever suggestion either of them made, the other could be counted on to oppose it.',
      'But it was noticed that these two were never in agreement: whatever suggestion either of them made, the other could be counted on to oppose it.',
      'But it was noticed, that these two were never in agreement: whatever suggestion either of them made the other could be counted on to oppose it.',
    ],
    answerIndex: 2,
    ruleTested: 'A colon before the proof of a claim, with a comma inside the proof',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Animal Farm, Chapter 3',
    group: 'colons',
  },
  {
    broken:
      'remember comrades there must be no alteration in our plans they shall be carried out to the day',
    options: [
      'Remember, comrades, there must be no alteration in our plans, they shall be carried out to the day.',
      'Remember, comrades there must be no alteration in our plans: they shall be carried out to the day.',
      'Remember, comrades there must be no alteration in our plans, they shall be carried out to the day.',
      'Remember, comrades, there must be no alteration in our plans: they shall be carried out to the day.',
    ],
    answerIndex: 3,
    ruleTested: 'Commas round a word of address, and a colon',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Animal Farm, Chapter 6',
    group: 'colons',
  },
  {
    broken: 'i shook him but he only murmured and turned the smoke had stupefied him',
    options: [
      'I shook him, but he only murmured and turned: the smoke had stupefied him.',
      'I shook him but, he only murmured and turned: the smoke had stupefied him.',
      'I shook him, but he only murmured and turned, the smoke had stupefied him.',
      'I shook him but, he only murmured and turned, the smoke had stupefied him.',
    ],
    answerIndex: 0,
    ruleTested: "A comma before 'but', then a colon before the explanation",
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Jane Eyre, Chapter 15',
    group: 'colons',
  },
  {
    broken:
      'miss temples whole attention was absorbed by the patients she lived in the sick-room never quitting it except to snatch a few hours rest at night',
    options: [
      "Miss Temples whole attention was absorbed by the patients, she lived in the sick-room, never quitting it except to snatch a few hours' rest at night.",
      "Miss Temple's whole attention was absorbed by the patients: she lived in the sick-room, never quitting it except to snatch a few hours' rest at night.",
      "Miss Temple's whole attention was absorbed by the patients, she lived in the sick-room, never quitting it except to snatch a few hours rest at night.",
      'Miss Temples whole attention was absorbed by the patients: she lived in the sick-room, never quitting it except to snatch a few hours rest at night.',
    ],
    answerIndex: 1,
    ruleTested: 'A colon before the proof, and two possessive apostrophes',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Jane Eyre, Chapter 9',
    group: 'colons',
  },
  {
    broken:
      'he is not very forgiving he broke with his family and now for many years he has led an unsettled kind of life',
    options: [
      'He is not very forgiving he broke with his family, and now for many years he has led an unsettled kind of life.',
      'He is not very forgiving: he broke with his family and, now for many years he has led an unsettled kind of life.',
      'He is not very forgiving: he broke with his family, and now for many years he has led an unsettled kind of life.',
      'He is not very forgiving, he broke with his family and, now for many years he has led an unsettled kind of life.',
    ],
    answerIndex: 2,
    ruleTested: "A colon before the evidence, and a comma before 'and'",
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Jane Eyre, Chapter 13',
    group: 'colons',
  },
  {
    broken: 'we visited three cities paris france rome italy and madrid spain',
    options: [
      'We visited three cities: Paris, France, Rome, Italy, and Madrid, Spain.',
      'We visited three cities; Paris, France; Rome, Italy; and Madrid, Spain.',
      'We visited three cities; Paris, France, Rome, Italy, and Madrid, Spain.',
      'We visited three cities: Paris, France; Rome, Italy; and Madrid, Spain.',
    ],
    answerIndex: 3,
    ruleTested: 'A colon to introduce a list, semicolons between items that contain commas',
    topic: 'colons-and-semicolons',
    tier: 3,
    group: 'colons',
    facts: ['semicolons in a list'],
  },
  {
    broken:
      'the human beings did not hate animal farm any less now that it was prospering indeed they hated it more than ever',
    options: [
      'The human beings did not hate Animal Farm any less now that it was prospering; indeed, they hated it more than ever.',
      'The human beings did not hate Animal Farm any less now that it was prospering, indeed, they hated it more than ever.',
      'The human beings, did not hate Animal Farm any less now that it was prospering; indeed, they hated it more than ever.',
      'The human beings, did not hate Animal Farm any less now that it was prospering, indeed, they hated it more than ever.',
    ],
    answerIndex: 0,
    ruleTested: "Semicolon before 'indeed' between two sentences",
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Animal Farm, Chapter 6',
    group: 'semicolons',
    facts: ['a linking adverb between two sentences'],
  },
  {
    broken:
      'the animals found the problem insoluble in any case they had little time for speculating on such things now',
    options: [
      'The animals found the problem insoluble, in any case, they had little time for speculating on such things now.',
      'The animals found the problem insoluble; in any case, they had little time for speculating on such things now.',
      'The animals, found the problem insoluble; in any case, they had little time for speculating on such things now.',
      'The animals, found the problem insoluble, in any case, they had little time for speculating on such things now.',
    ],
    answerIndex: 1,
    ruleTested: "Semicolon before a linking phrase such as 'in any case'",
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Animal Farm, Chapter 10',
    group: 'semicolons',
    facts: ['a linking adverb between two sentences'],
  },
  {
    broken:
      'if they went hungry it was not from feeding tyrannical human beings if they worked hard at least they worked for themselves',
    options: [
      'If they went hungry, it was not from feeding tyrannical human beings, if they worked hard, at least they worked for themselves.',
      'If they went hungry; it was not from feeding tyrannical human beings, if they worked hard; at least they worked for themselves.',
      'If they went hungry, it was not from feeding tyrannical human beings; if they worked hard, at least they worked for themselves.',
      'If they went hungry, it was not from feeding tyrannical human beings; if they worked hard; at least they worked for themselves.',
    ],
    answerIndex: 2,
    ruleTested: 'A semicolon between two balanced halves, commas after their openers',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Animal Farm, Chapter 10',
    group: 'semicolons',
  },
  {
    broken:
      'utterson ruminated awhile he was surprised at his friends selfishness and yet relieved by it',
    options: [
      'Utterson ruminated awhile, he was surprised at his friends selfishness, and yet relieved by it.',
      "Utterson ruminated awhile, he was surprised at his friend's selfishness and, yet relieved by it.",
      'Utterson ruminated awhile; he was surprised at his friends selfishness and, yet relieved by it.',
      "Utterson ruminated awhile; he was surprised at his friend's selfishness, and yet relieved by it.",
    ],
    answerIndex: 3,
    ruleTested: 'A semicolon, a possessive apostrophe and a comma before a contrast',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 5',
    group: 'semicolons',
    facts: ["his friend's"],
  },
  {
    broken: 'i want nothing from you i ask nothing of you why cannot we be friends',
    options: [
      'I want nothing from you; I ask nothing of you; why cannot we be friends?',
      'I want nothing from you; I ask nothing of you, why cannot we be friends.',
      'I want nothing from you; I ask nothing of you, Why cannot we be friends?',
      'I want nothing from you; I ask nothing of you; Why cannot we be friends.',
    ],
    answerIndex: 0,
    ruleTested: 'Semicolons between three short sentences, ending in a question',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'A Christmas Carol, Stave 1',
    group: 'semicolons',
  },
  {
    broken:
      'many thousands are in want of common necessaries hundreds of thousands are in want of common comforts sir',
    options: [
      'Many thousands are in want of common necessaries, hundreds of thousands are in want of common comforts, sir.',
      'Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir.',
      'Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts sir.',
      'Many thousands are in want of common necessaries, hundreds of thousands are in want of common comforts sir.',
    ],
    answerIndex: 1,
    ruleTested: 'A semicolon between two growing statements, and a comma before a word of address',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'A Christmas Carol, Stave 1',
    group: 'semicolons',
  },
  {
    broken:
      'it was only his appearance that was a little altered his hide was less shiny than it had used to be and his great haunches seemed to have shrunken',
    options: [
      'It was only his appearance that was a little altered his hide was less shiny than it had used to be, and his great haunches seemed to have shrunken.',
      'It was only his appearance that was a little altered; his hide was less shiny than it had used to be and, his great haunches seemed to have shrunken.',
      'It was only his appearance that was a little altered; his hide was less shiny than it had used to be, and his great haunches seemed to have shrunken.',
      'It was only his appearance that was a little altered, his hide was less shiny than it had used to be and, his great haunches seemed to have shrunken.',
    ],
    answerIndex: 2,
    ruleTested: "A semicolon before the details, and a comma before 'and'",
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'Animal Farm, Chapter 9',
    group: 'semicolons',
  },
  {
    broken: 'the team included sam the captain priya the goalkeeper and leo the coach',
    options: [
      'The team included Sam, the captain, Priya, the goalkeeper, and Leo, the coach.',
      'The team included: Sam, the captain; Priya, the goalkeeper; and Leo, the coach.',
      'The team included: Sam, the captain, Priya, the goalkeeper, and Leo, the coach.',
      'The team included Sam, the captain; Priya, the goalkeeper; and Leo, the coach.',
    ],
    answerIndex: 3,
    ruleTested: 'Semicolons between list items that contain commas',
    topic: 'colons-and-semicolons',
    tier: 3,
    group: 'semicolons',
    facts: ['semicolons in a list'],
  },
  {
    broken:
      'every one of them wore chains like marleys ghost some few they might be guilty governments were linked together none were free',
    options: [
      "Every one of them wore chains like Marley's Ghost; some few (they might be guilty governments) were linked together; none were free.",
      "Every one of them wore chains like Marley's Ghost, some few (they might be guilty governments) were linked together, none were free.",
      'Every one of them wore chains like Marleys Ghost, some few (they might be guilty governments) were linked together; none were free.',
      'Every one of them wore chains like Marleys Ghost; some few (they might be guilty governments) were linked together, none were free.',
    ],
    answerIndex: 0,
    ruleTested: 'Semicolons between three statements, brackets and an apostrophe',
    topic: 'colons-and-semicolons',
    tier: 3,
    source: 'A Christmas Carol, Stave 1',
    group: 'semicolons',
  },
  // ── Commas around extra information ───────────────────────────────────────
  {
    broken: 'the eiffel tower which is in paris was finished in 1889',
    options: [
      'The Eiffel Tower, which is in Paris was finished in 1889.',
      'The Eiffel Tower, which is in Paris, was finished in 1889.',
      'The Eiffel Tower, which is in Paris; was finished in 1889.',
      'The Eiffel Tower which is in Paris was finished in 1889.',
    ],
    answerIndex: 1,
    ruleTested: 'Pair of commas around extra information',
    topic: 'commas-around-extra-information',
    tier: 1,
  },
  {
    broken: 'my cousin zara who is twelve plays the cello',
    options: [
      'My cousin Zara, who is twelve plays the cello.',
      'My cousin Zara, who is twelve; plays the cello.',
      'My cousin Zara, who is twelve, plays the cello.',
      'My cousin Zara who is twelve plays the cello.',
    ],
    answerIndex: 2,
    ruleTested: 'Pair of commas around extra information',
    topic: 'commas-around-extra-information',
    tier: 1,
  },
  {
    broken: 'charles dickens the author of oliver twist was born in portsmouth',
    options: [
      'Charles Dickens, the author of Oliver Twist was born in Portsmouth.',
      'Charles Dickens, the author of Oliver Twist; was born in Portsmouth.',
      'Charles Dickens the author of Oliver Twist was born in Portsmouth.',
      'Charles Dickens, the author of Oliver Twist, was born in Portsmouth.',
    ],
    answerIndex: 3,
    ruleTested: 'Pair of commas around an appositive',
    topic: 'commas-around-extra-information',
    tier: 1,
  },
  {
    broken: 'priya who was tired fell asleep quickly',
    options: [
      'Priya, who was tired, fell asleep quickly.',
      'Priya, who was tired fell asleep quickly.',
      'Priya, who was tired; fell asleep quickly.',
      'Priya who was tired fell asleep quickly.',
    ],
    answerIndex: 0,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    facts: ['the tired clause'],
  },
  {
    broken: 'mr jones our neighbour is a firefighter',
    options: [
      'Mr Jones, our neighbour is a firefighter.',
      'Mr Jones, our neighbour, is a firefighter.',
      'Mr Jones, our neighbour; is a firefighter.',
      'Mr Jones our neighbour is a firefighter.',
    ],
    answerIndex: 1,
    ruleTested: 'Pair of commas around an appositive (extra information)',
    topic: 'commas-around-extra-information',
    tier: 2,
  },
  {
    broken: 'napoleon who seldom moved out of a walk raced ahead of them all',
    options: [
      'Napoleon, who seldom moved out of a walk raced ahead of them all.',
      'Napoleon, who seldom moved out of a walk; raced ahead of them all.',
      'Napoleon, who seldom moved out of a walk, raced ahead of them all.',
      'Napoleon who seldom moved out of a walk raced ahead of them all.',
    ],
    answerIndex: 2,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    source: 'Animal Farm, Chapter 6',
  },
  {
    broken: 'even boxer who seldom asked questions was puzzled',
    options: [
      'Even Boxer, who seldom asked questions was puzzled.',
      'Even Boxer, who seldom asked questions; was puzzled.',
      'Even Boxer who seldom asked questions was puzzled.',
      'Even Boxer, who seldom asked questions, was puzzled.',
    ],
    answerIndex: 3,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    source: 'Animal Farm, Chapter 7',
  },
  {
    broken: 'the other farm which was called pinchfield was smaller and better kept',
    options: [
      'The other farm, which was called Pinchfield, was smaller and better kept.',
      'The other farm, which was called Pinchfield was smaller and better kept.',
      'The other farm, which was called Pinchfield; was smaller and better kept.',
      'The other farm which was called Pinchfield was smaller and better kept.',
    ],
    answerIndex: 0,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    source: 'Animal Farm, Chapter 4',
  },
  {
    broken: 'the door which was equipped with neither bell nor knocker was blistered and distained',
    options: [
      'The door, which was equipped with neither bell nor knocker was blistered and distained.',
      'The door, which was equipped with neither bell nor knocker, was blistered and distained.',
      'The door which was equipped with neither bell nor knocker, was blistered and distained.',
      'The door, which was equipped with neither bell nor knocker; was blistered and distained.',
    ],
    answerIndex: 1,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 1',
  },
  {
    broken:
      'the yard was so dark that even scrooge who knew its every stone was fain to grope with his hands',
    options: [
      'The yard was so dark that even Scrooge, who knew its every stone was fain to grope with his hands.',
      'The yard was so dark that even Scrooge, who knew its every stone; was fain to grope with his hands.',
      'The yard was so dark that even Scrooge, who knew its every stone, was fain to grope with his hands.',
      'The yard was so dark that even Scrooge who knew its every stone was fain to grope with his hands.',
    ],
    answerIndex: 2,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    source: 'A Christmas Carol, Stave 1',
  },
  {
    broken:
      'this fact which has been very clearly made out proves conclusively that it was no mere haphazard burglary',
    options: [
      'This fact, which has been very clearly made out proves conclusively that it was no mere haphazard burglary.',
      'This fact, which has been very clearly made out; proves conclusively that it was no mere haphazard burglary.',
      'This fact which has been very clearly made out proves conclusively that it was no mere haphazard burglary.',
      'This fact, which has been very clearly made out, proves conclusively that it was no mere haphazard burglary.',
    ],
    answerIndex: 3,
    ruleTested: 'Pair of commas around a non-defining relative clause',
    topic: 'commas-around-extra-information',
    tier: 2,
    source: 'The Sign of Four, Chapter 8',
  },
  {
    broken: 'we visited york a city full of history',
    options: [
      'We visited York, a city full of history.',
      'We visited York a city full of history.',
      'We visited, York, a city full of history.',
      'We visited, York a city full of history.',
    ],
    answerIndex: 0,
    ruleTested: 'One comma before extra information at the end of a sentence',
    topic: 'commas-around-extra-information',
    tier: 2,
  },
  {
    broken: 'ella whose brother plays for england came to watch',
    options: [
      'Ella, whose brother plays for England came to watch.',
      'Ella, whose brother plays for England, came to watch.',
      'Ella, whose brother plays for England; came to watch.',
      'Ella whose brother plays for England came to watch.',
    ],
    answerIndex: 1,
    ruleTested: "Pair of commas around a 'whose' clause",
    topic: 'commas-around-extra-information',
    tier: 2,
  },
  {
    broken: 'the train was cancelled which meant we were late',
    options: [
      'The train was cancelled which meant we were late.',
      'The train was cancelled; which meant we were late.',
      'The train was cancelled, which meant we were late.',
      'The train was cancelled. Which meant we were late.',
    ],
    answerIndex: 2,
    ruleTested: "Comma before a 'which' clause about the whole sentence",
    topic: 'commas-around-extra-information',
    tier: 2,
  },
  {
    broken:
      'in the year 1878 my father who was senior captain of his regiment obtained twelve months leave and came home',
    options: [
      "In the year 1878 my father who was senior captain of his regiment obtained twelve months' leave and came home.",
      'In the year 1878 my father who was senior captain of his regiment, obtained twelve months leave and came home.',
      'In the year 1878 my father, who was senior captain of his regiment obtained twelve months leave and came home.',
      "In the year 1878 my father, who was senior captain of his regiment, obtained twelve months' leave and came home.",
    ],
    answerIndex: 3,
    ruleTested: 'A pair of commas round extra information, and a time apostrophe',
    topic: 'commas-around-extra-information',
    tier: 3,
    source: 'The Sign of Four, Chapter 2',
  },
  {
    broken:
      'snowball who had studied an old book of julius caesars campaigns which he had found in the farmhouse was in charge of the defensive operations',
    options: [
      "Snowball, who had studied an old book of Julius Caesar's campaigns which he had found in the farmhouse, was in charge of the defensive operations.",
      "Snowball who had studied an old book of Julius Caesar's campaigns which he had found in the farmhouse was in charge of the defensive operations.",
      'Snowball who had studied an old book of Julius Caesars campaigns which he had found in the farmhouse, was in charge of the defensive operations.',
      'Snowball, who had studied an old book of Julius Caesars campaigns which he had found in the farmhouse was in charge of the defensive operations.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas round a long non-defining clause, none round a defining one inside it',
    topic: 'commas-around-extra-information',
    tier: 3,
    source: 'Animal Farm, Chapter 4',
  },
  {
    broken:
      'the rats which had been troublesome that winter were also said to be in league with snowball',
    options: [
      'The rats which had been troublesome that winter were also said to be in league with Snowball.',
      'The rats, which had been troublesome that winter, were also said to be in league with Snowball.',
      'The rats, which had been troublesome that winter were also said to be in league with Snowball.',
      'The rats which had been troublesome that winter, were also said to be in league with Snowball.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas that make a clause describe every one of the group',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that every rat on the farm had been troublesome that winter.',
    source: 'Animal Farm, Chapter 7',
  },
  {
    broken:
      'london which had gone to bed on sunday night oblivious and inert was awakened in the small hours of monday morning to a vivid sense of danger',
    options: [
      'London, which had gone to bed on Sunday night oblivious and inert was awakened, in the small hours of Monday morning, to a vivid sense of danger.',
      'London, which had gone to bed on Sunday night oblivious and inert, was awakened in the small hours of Monday morning, to a vivid sense of danger.',
      'London, which had gone to bed on Sunday night oblivious and inert, was awakened, in the small hours of Monday morning, to a vivid sense of danger.',
      'London, which had gone to bed on Sunday night oblivious and inert was awakened in the small hours of Monday morning, to a vivid sense of danger.',
    ],
    answerIndex: 2,
    ruleTested: 'Two pairs of commas in one sentence',
    topic: 'commas-around-extra-information',
    tier: 3,
    source: 'The War of the Worlds, Book One, Chapter 14',
  },
  {
    broken:
      'the wounds on snowballs back which a few of the animals still remembered to have seen had been inflicted by napoleons teeth',
    options: [
      "The wounds on Snowballs back, which a few of the animals still remembered to have seen had been inflicted by Napoleon's teeth.",
      "The wounds on Snowball's back, which a few of the animals still remembered to have seen had been inflicted by Napoleons teeth.",
      'The wounds on Snowballs back, which a few of the animals still remembered to have seen, had been inflicted by Napoleons teeth.',
      "The wounds on Snowball's back, which a few of the animals still remembered to have seen, had been inflicted by Napoleon's teeth.",
    ],
    answerIndex: 3,
    ruleTested: 'A pair of commas and two possessive apostrophes',
    topic: 'commas-around-extra-information',
    tier: 3,
    source: 'Animal Farm, Chapter 9',
  },
  {
    broken: 'the students who were tired went home',
    options: [
      'The students, who were tired, went home.',
      'The students who were tired went home.',
      'The students, who were tired went home.',
      'The students who were tired, went home.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas that make a clause describe the whole group',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that every student was tired and every student went home.',
    facts: ['the tired clause'],
  },
  {
    broken: 'my brother who lives in leeds is a nurse',
    options: [
      'My brother, who lives in Leeds, is a nurse.',
      'My brother who lives in Leeds is a nurse.',
      'My brother, who lives in Leeds is a nurse.',
      'My brother who lives in Leeds, is a nurse.',
    ],
    answerIndex: 1,
    ruleTested: 'No commas round a clause that picks out which person is meant',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that it shows the writer has more than one brother.',
  },
  {
    broken: 'the cakes which had nuts in were eaten first',
    options: [
      'The cakes, which had nuts in, were eaten first.',
      'The cakes, which had nuts in were eaten first.',
      'The cakes which had nuts in were eaten first.',
      'The cakes which had nuts in, were eaten first.',
    ],
    answerIndex: 2,
    ruleTested: 'No commas round a clause that picks out some of a group',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that only the cakes with nuts were eaten first.',
  },
  {
    broken: 'the passengers who had tickets were allowed on board',
    options: [
      'The passengers, who had tickets, were allowed on board.',
      'The passengers who had tickets, were allowed on board.',
      'The passengers, who had tickets were allowed on board.',
      'The passengers who had tickets were allowed on board.',
    ],
    answerIndex: 3,
    ruleTested: 'No commas round a clause that picks out some of a group',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that passengers without tickets were turned away.',
  },
  {
    broken: 'the players who had trained all summer were exhausted',
    options: [
      'The players, who had trained all summer, were exhausted.',
      'The players who had trained all summer were exhausted.',
      'The players who had trained all summer, were exhausted.',
      'The players, who had trained all summer were exhausted.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas that make a clause describe the whole group',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that it says the whole team had trained all summer.',
  },
  {
    broken: 'the book that i borrowed which was due back today is lost',
    options: [
      'The book, that I borrowed, which was due back today, is lost.',
      'The book that I borrowed, which was due back today, is lost.',
      'The book that I borrowed which was due back today is lost.',
      'The book, that I borrowed which was due back today, is lost.',
    ],
    answerIndex: 1,
    ruleTested: 'A defining clause with no commas, then a non-defining clause with a pair',
    topic: 'commas-around-extra-information',
    tier: 3,
    prompt: 'Punctuate it so that it says the writer borrowed only one book.',
  },
  // ── Brackets ──────────────────────────────────────────────────────────────
  {
    broken: 'my grandmother who is ninety still swims every day',
    options: [
      'My grandmother, (who is ninety) still swims every day.',
      'My grandmother (who is ninety), still swims every day.',
      'My grandmother (who is ninety) still swims every day.',
      'My grandmother, (who is ninety), still swims every day.',
    ],
    answerIndex: 2,
    ruleTested: 'Brackets round extra information',
    topic: 'brackets',
    tier: 1,
  },
  {
    broken: 'the national health service nhs was founded in 1948',
    options: [
      'The National Health Service, (NHS) was founded in 1948.',
      'The National Health Service, (NHS was founded in 1948).',
      'The National Health Service (NHS was founded in 1948).',
      'The National Health Service (NHS) was founded in 1948.',
    ],
    answerIndex: 3,
    ruleTested: 'Brackets round a short form after the full name',
    topic: 'brackets',
    tier: 1,
  },
  {
    broken: 'the diagram see page 12 shows how the heart pumps blood',
    options: [
      'The diagram (see page 12) shows how the heart pumps blood.',
      'The diagram (see page 12 shows how the heart pumps blood).',
      'The diagram, (see page 12 shows how the heart pumps blood).',
      'The diagram, (see page 12) shows how the heart pumps blood.',
    ],
    answerIndex: 0,
    ruleTested: 'Brackets round a reference',
    topic: 'brackets',
    tier: 1,
  },
  {
    broken: 'that was the problem that crushing my temples in my hands i set myself to solve',
    options: [
      'That was the problem that crushing my temples in my hands I set myself to solve.',
      'That was the problem that (crushing my temples in my hands) I set myself to solve.',
      'That was the problem that (crushing my temples in my hands I set myself to solve).',
      'That was the problem (that crushing my temples in my hands) I set myself to solve.',
    ],
    answerIndex: 1,
    ruleTested: 'Brackets round an interruption',
    topic: 'brackets',
    tier: 2,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 10',
  },
  {
    broken:
      'and then a swift movement of the steamboat she had suddenly come round to avoid being run down flung him headlong from the seat upon which he was standing',
    options: [
      'And then a swift movement of the steamboat (she had suddenly come round to avoid being run down flung him headlong from the seat upon which he was standing).',
      'And then a swift movement of the steamboat, (she had suddenly come round to avoid being run down flung him headlong from the seat upon which he was standing).',
      'And then a swift movement of the steamboat (she had suddenly come round to avoid being run down) flung him headlong from the seat upon which he was standing.',
      'And then a swift movement of the steamboat, (she had suddenly come round to avoid being run down) flung him headlong from the seat upon which he was standing.',
    ],
    answerIndex: 2,
    ruleTested: 'Brackets round an explanation inside a sentence',
    topic: 'brackets',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 17',
  },
  {
    broken: 'the museum is open every day except mondays',
    options: [
      'The museum is open every day (except Mondays.)',
      'The museum is open every day, (except Mondays).',
      'The museum is open every day, (except Mondays.)',
      'The museum is open every day (except Mondays).',
    ],
    answerIndex: 3,
    ruleTested: 'Full stop outside brackets that end a sentence',
    topic: 'brackets',
    tier: 2,
  },
  {
    broken: 'the capital of australia canberra is smaller than sydney',
    options: [
      'The capital of Australia (Canberra) is smaller than Sydney.',
      'The capital of Australia, (Canberra), is smaller than Sydney.',
      'The capital of Australia (Canberra), is smaller than Sydney.',
      'The capital of Australia, (Canberra) is smaller than Sydney.',
    ],
    answerIndex: 0,
    ruleTested: 'Brackets round a single word of extra information',
    topic: 'brackets',
    tier: 2,
  },
  {
    broken: 'literally i was what he often called me the apple of his eye',
    options: [
      'Literally, I was (what he often called me the apple of his eye).',
      'Literally, I was (what he often called me) the apple of his eye.',
      'Literally, I was, (what he often called me) the apple of his eye.',
      'Literally, I was, (what he often called me the apple of his eye).',
    ],
    answerIndex: 1,
    ruleTested: 'Brackets round an aside in the middle of a sentence',
    topic: 'brackets',
    tier: 2,
    source: 'Jane Eyre, Chapter 38',
  },
  {
    broken:
      'the want of house or brass by which i suppose you mean money does not make a beggar in your sense of the word',
    options: [
      'The want of house or brass, (by which I suppose you mean money) does not make a beggar in your sense of the word.',
      'The want of house or brass (by which I suppose you mean money), does not make a beggar in your sense of the word.',
      'The want of house or brass (by which I suppose you mean money) does not make a beggar in your sense of the word.',
      'The want of house or brass, (by which I suppose you mean money), does not make a beggar in your sense of the word.',
    ],
    answerIndex: 2,
    ruleTested: 'Brackets round an explanation, with no commas beside them',
    topic: 'brackets',
    tier: 2,
    source: 'Jane Eyre, Chapter 29',
  },
  {
    broken:
      'milk and apples this has been proved by science comrades contain substances absolutely necessary to the well-being of a pig',
    options: [
      'Milk and apples (this has been proved by Science comrades) contain substances absolutely necessary to the well-being of a pig.',
      'Milk and apples (this has been proved by Science) comrades contain substances absolutely necessary to the well-being of a pig.',
      'Milk and apples (this has been proved by Science), comrades contain substances absolutely necessary to the well-being of a pig.',
      'Milk and apples (this has been proved by Science, comrades) contain substances absolutely necessary to the well-being of a pig.',
    ],
    answerIndex: 3,
    ruleTested: 'Brackets round a whole aside, with a comma before a word of address inside',
    topic: 'brackets',
    tier: 3,
    source: 'Animal Farm, Chapter 3',
  },
  {
    broken:
      'at any rate the seeds which the martians intentionally or accidentally brought with them gave rise in all cases to red-coloured growths',
    options: [
      'At any rate, the seeds which the Martians (intentionally or accidentally) brought with them gave rise in all cases to red-coloured growths.',
      'At any rate; the seeds which the Martians (intentionally or accidentally) brought with them gave rise in all cases to red-coloured growths.',
      'At any rate, the seeds which the Martians (intentionally or accidentally brought with them) gave rise in all cases to red-coloured growths.',
      'At any rate; the seeds which the Martians (intentionally or accidentally brought with them) gave rise in all cases to red-coloured growths.',
    ],
    answerIndex: 0,
    ruleTested: 'Brackets round only the words that can be lifted out',
    topic: 'brackets',
    tier: 3,
    source: 'The War of the Worlds, Book Two, Chapter 2',
  },
  {
    broken: 'the match was postponed the pitch was waterlogged',
    options: [
      'The match was postponed. (The pitch was waterlogged).',
      'The match was postponed. (The pitch was waterlogged.)',
      'The match was postponed (The pitch was waterlogged.)',
      'The match was postponed, (the pitch was waterlogged).',
    ],
    answerIndex: 1,
    ruleTested: 'A whole sentence in brackets keeps its full stop inside',
    topic: 'brackets',
    tier: 3,
  },
  {
    broken: 'the film have you seen it won three awards',
    options: [
      'The film (have you seen it) won three awards?',
      'The film (have you seen it?) won three awards?',
      'The film (have you seen it?) won three awards.',
      'The film (have you seen it) won three awards.',
    ],
    answerIndex: 2,
    ruleTested: 'A question in brackets keeps its own question mark',
    topic: 'brackets',
    tier: 3,
  },
  {
    broken: 'my sister who lives in rome is visiting next week',
    options: [
      'My sister who lives in Rome is visiting next week.',
      'My sister (who lives in Rome is visiting next week).',
      'My sister (who lives) in Rome is visiting next week.',
      'My sister (who lives in Rome) is visiting next week.',
    ],
    answerIndex: 3,
    ruleTested: 'Brackets that make a clause extra information',
    topic: 'brackets',
    tier: 3,
    prompt: 'Punctuate it so that the writer has only one sister.',
  },
  {
    broken:
      'a handsome mince-pie had been made yesterday morning which accounted for the mincemeat not being missed and the pudding was already on the boil',
    options: [
      'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed), and the pudding was already on the boil.',
      'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed,) and the pudding was already on the boil.',
      'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed) and, the pudding was already on the boil.',
      'A handsome mince-pie had been made yesterday morning (which accounted for the mincemeat not being missed,) and, the pudding was already on the boil.',
    ],
    answerIndex: 0,
    ruleTested: 'A comma after a closing bracket, before a joining word',
    topic: 'brackets',
    tier: 3,
    source: 'Great Expectations, Chapter 4',
  },
  // ── Commas that keep the meaning clear ────────────────────────────────────
  {
    broken: 'but we were wrong comrades',
    options: [
      'But we were wrong comrades.',
      'But we were wrong, comrades.',
      'But we were wrong; comrades.',
      'But we were, wrong comrades.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma before a word of address',
    topic: 'commas-for-clarity',
    tier: 1,
    prompt: 'Punctuate it so that the speaker is addressing his listeners as comrades.',
    source: 'Animal Farm, Chapter 7',
  },
  {
    broken: 'sam where did you put my keys',
    options: [
      'Sam where did you put my keys?',
      'Sam, where did you put my keys.',
      'Sam, where did you put my keys?',
      'Sam where did you put my keys.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a name used to address someone',
    topic: 'commas-for-clarity',
    tier: 1,
  },
  {
    broken: 'thank you for your help miss ali',
    options: [
      'Thank you for your help Miss Ali.',
      'Thank you for your help; Miss Ali.',
      'Thank you for your help: Miss Ali.',
      'Thank you for your help, Miss Ali.',
    ],
    answerIndex: 3,
    ruleTested: 'Comma before a word of address',
    topic: 'commas-for-clarity',
    tier: 1,
  },
  {
    broken: 'reader i married him',
    options: [
      'Reader, I married him.',
      'Reader I married him.',
      'Reader; I married him.',
      'Reader: I married him.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma after a word of address',
    topic: 'commas-for-clarity',
    tier: 2,
    source: 'Jane Eyre, Chapter 38',
  },
  {
    broken: 'there comrades is the answer to all our problems',
    options: [
      'There comrades, is the answer to all our problems.',
      'There, comrades, is the answer to all our problems.',
      'There, comrades is the answer to all our problems.',
      'There comrades is the answer to all our problems.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas on both sides of a word of address',
    topic: 'commas-for-clarity',
    tier: 2,
    source: 'Animal Farm, Chapter 1',
  },
  {
    broken: 'oh no i have left my bag on the bus',
    options: [
      'Oh, no I have left my bag on the bus.',
      'Oh no I have left my bag on the bus.',
      'Oh no, I have left my bag on the bus.',
      'Oh no; I have left my bag on the bus.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after an interjection',
    topic: 'commas-for-clarity',
    tier: 2,
  },
  {
    broken: 'outside the soil was banked high against the house',
    options: [
      'Outside the soil was banked high against the house.',
      'Outside the soil, was banked high against the house.',
      'Outside; the soil was banked high against the house.',
      'Outside, the soil was banked high against the house.',
    ],
    answerIndex: 3,
    ruleTested: 'A comma after a one-word opener that stops a misreading',
    topic: 'commas-for-clarity',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 1',
    facts: ['an opening word of place'],
  },
  {
    broken: 'its no longer needed comrade said squealer stiffly',
    options: [
      '"It\'s no longer needed, comrade," said Squealer stiffly.',
      '"It\'s no longer needed comrade," said Squealer stiffly.',
      '"It\'s no longer needed, comrade", said Squealer stiffly.',
      '"It\'s no longer needed comrade", said Squealer stiffly.',
    ],
    answerIndex: 0,
    ruleTested: 'A word of address inside speech',
    topic: 'commas-for-clarity',
    tier: 2,
    source: 'Animal Farm, Chapter 7',
  },
  {
    broken: 'but sometimes you might make the wrong decisions comrades and then where should we be',
    options: [
      'But sometimes you might make the wrong decisions, comrades, and then where should we be.',
      'But sometimes you might make the wrong decisions, comrades, and then where should we be?',
      'But sometimes you might make the wrong decisions, comrades and then where should we be?',
      'But sometimes you might make the wrong decisions, comrades and then where should we be.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas round a word of address, and a question mark',
    topic: 'commas-for-clarity',
    tier: 3,
    source: 'Animal Farm, Chapter 5',
  },
  {
    broken:
      'what is the use of having powers doctor when one has no field upon which to exert them',
    options: [
      'What is the use of having powers, doctor when one has no field upon which to exert them?',
      'What is the use of having powers, doctor, when one has no field upon which to exert them.',
      'What is the use of having powers, doctor, when one has no field upon which to exert them?',
      'What is the use of having powers, doctor when one has no field upon which to exert them.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas round a word of address inside a question',
    topic: 'commas-for-clarity',
    tier: 3,
    source: 'The Sign of Four, Chapter 1',
  },
  {
    broken: 'at last however came what we had waited for so long',
    options: [
      'At last however came what we had waited for so long.',
      'At last, however came what we had waited for so long.',
      'At last; however, came what we had waited for so long.',
      'At last, however, came what we had waited for so long.',
    ],
    answerIndex: 3,
    ruleTested: "Commas round an interrupting 'however'",
    topic: 'commas-for-clarity',
    tier: 3,
    source: 'The Sign of Four, Chapter 12',
  },
  {
    broken: 'however hard she tried the lid would not move',
    options: [
      'However hard she tried, the lid would not move.',
      'However, hard she tried, the lid would not move.',
      'However, hard she tried the lid would not move.',
      'However hard, she tried the lid would not move.',
    ],
    answerIndex: 0,
    ruleTested: "No comma after 'however' meaning 'no matter how'",
    topic: 'commas-for-clarity',
    tier: 3,
  },
  {
    broken: 'i dont know sam',
    options: ["I don't know Sam.", "I don't know, Sam.", 'I dont know, Sam.', 'I dont know Sam.'],
    answerIndex: 1,
    ruleTested: 'A comma that turns a name into a word of address',
    topic: 'commas-for-clarity',
    tier: 3,
    prompt: 'Punctuate it so that the speaker is talking to Sam.',
  },
  {
    broken: 'call me sarah',
    options: ['Call me Sarah.', 'Call me; Sarah.', 'Call me, Sarah.', 'Call me: Sarah.'],
    answerIndex: 2,
    ruleTested: 'A comma that turns a name into a word of address',
    topic: 'commas-for-clarity',
    tier: 3,
    prompt: 'Punctuate it so that the speaker is asking Sarah to phone.',
  },
  {
    broken: 'while the band played the audience sang along',
    options: [
      'While the band played the audience, sang along.',
      'While the band, played the audience sang along.',
      'While the band played the audience sang along.',
      'While the band played, the audience sang along.',
    ],
    answerIndex: 3,
    ruleTested: 'A comma that stops a misreading',
    topic: 'commas-for-clarity',
    tier: 3,
  },
  {
    broken: 'outside the school was a large crowd',
    options: [
      'Outside the school was a large crowd.',
      'Outside, the school was a large crowd.',
      'Outside the school, was a large crowd.',
      'Outside, the school, was a large crowd.',
    ],
    answerIndex: 0,
    ruleTested: 'No comma after a place phrase in an inverted sentence',
    topic: 'commas-for-clarity',
    tier: 3,
    facts: ['an opening word of place'],
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
  // A round climbs from recognising a mark to punctuating for a meaning.
  tier: (q) => q.tier,
  // Two questions that teach the same narrow point are never dealt in one round.
  facts: (q) => q.facts ?? [],
  // Colons and semicolons are spread as two rules; every other topic is one.
  group: (q) => q.group ?? q.topic,
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
