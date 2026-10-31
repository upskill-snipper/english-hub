import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Apostrophe Ace: pick the sentence in which every apostrophe is used correctly.
 *
 * Moved out of src/app/games/apostrophe-ace/page.tsx on 16 October 2026, when
 * every answer gained an explanation (src/lib/games/explanations/types.ts). That
 * day three questions were found to have a second right option or an answer
 * that was not standard English, and were mended.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy"; the audit (.tmp-games-audit/REPORT-ks3.md) found that the
 * label above each question ("No apostrophe for plurals") gave away its
 * answer, that options such as "it,s", "199'0s" and "DV'Ds" were malformed, so
 * dropping them and taking the option with most apostrophes scored 57 per cent,
 * and that 2.6 questions a round asked for a form another had just shown right.
 * The bank went from 55 questions to 201 (41 at tier 1, 103 at tier 2, 57 at
 * tier 3).
 *
 *   - No label. The page no longer shows `ruleTested`, which stays only as the
 *     tag the student's account records. Where a sentence cannot itself show
 *     how many owners there are ("my parents' house"), a `prompt` says it, as
 *     a fact about the world ("Both of the writer's parents own the house"),
 *     never as the rule; elsewhere the sentence shows it: "both", "every", "a",
 *     "their eyes", "as it slept".
 *   - Only real errors. Every wrong option is a slip writers make: a missing
 *     apostrophe, one in the wrong place ("did'nt"), the wrong number of
 *     owners, an apostrophe on a plain plural or a verb ("cow's", "take's"),
 *     on a possessive pronoun ("your's"), or the sound-alike ("they're" for
 *     "their", "whose" for "who's"). Most questions set two or three of these
 *     decisions against each other, so no option is the odd one out, and no
 *     wrong option reads as another right sentence: an apostrophe put on a
 *     plain plural never stands before a verb that would let it mean "has"
 *     ("the hen's made" is "the hen has made"), and where a bare plural could
 *     name other people ("her eyes met my brothers"), a prompt gives the
 *     number. Measured on the whole bank: the option most like the others
 *     scores 27 per cent, the longest 23, the one with most apostrophes 25,
 *     against 25 for a blind guess, and the answer is the longest option in 11
 *     per cent of questions.
 *   - Real text first: 89 sentences from Animal Farm, The War of the Worlds,
 *     The Sign of Four, A Christmas Carol, Jekyll and Hyde, Great Expectations
 *     and Pride and Prejudice, every one out of UK copyright, copied word for
 *     word from src/data/full-texts (curly apostrophes printed straight) and
 *     checked there; a sentence from inside a speech loses only the speech
 *     marks round it. `source` names the book and chapter, and the page shows
 *     it. No wrong option misspells a word inside the speech marks of a real
 *     speech, which src/__tests__/every-quotation-is-the-held-text.test.ts
 *     would read as a misquotation.
 *   - New kinds: several decisions in one sentence at tier 3 ("The Joneses'
 *     dog chased its tail past the children's nursery."); one owner or several
 *     decided by the sentence or a prompt; two owners together or apart ("Sam
 *     and Ella's house" against "Sam's and Ella's bikes", a new tag); a
 *     possessive standing for a noun left out ("as low as the Ghost's had
 *     done", "to Grandma's"); time ("two weeks' notice", "a hair's breadth");
 *     possessive pronouns and whose, a new tag; verbs and plain plurals.
 *   - `facts` hold the forms a question decides, by family ("its or it's",
 *     "owner: napoleon", "don't"), so a round never asks for a form another
 *     question in it has just shown right.
 *
 * Kept, 24, each with its malformed options replaced by real errors and, where
 * the number of owners was the label's to say, a prompt: "Shes' already" became
 * "Shes already" and "has'nt"; "Its' been" became "Its been" and "has'nt";
 * "womans'" became "trainer's" and "people'" became "voice's". "My parents'
 * house", "The witnesses' statements", "The boy's football" and "The teachers'
 * meeting" gained prompts. Several, such as "It's raining" ("ca'nt") and
 * "They're certain" ("they're turn"), traded an option missing both
 * apostrophes for a misplaced or sound-alike slip, so the answer is no longer
 * always the option with most apostrophes.
 *
 * Removed, 31, each because it held one decision and its fourth option was
 * malformed or the label's to decide, so no fourth real error was possible:
 * "I don't know where she went", "Shouldn't we have told them sooner", "The
 * team lost its best player", "I think it's going to snow tonight", "Every car
 * has its own number plate", "You're going to love this film", "Is this your
 * coat on the chair", "Remember to bring your homework", "You're the best
 * person for the job", "The dog's bone", "My sister's phone", "Tom's essay",
 * "the city's main library", "The company's profits", "the doctor's pen", "The
 * baby's toy", "The dogs' bones", "The students' lockers", "The girls'
 * changing room", "The children's playground", "The mice's nest", "three
 * apples", "lots of birds", "fresh vegetables", "The students worked hard";
 * and for other reasons: "The dog wagged its tail happily" (also in Homophone
 * Hero), "The players' kit" (nearly a Punctuation Repair question), "James's
 * car" and "Charles's bike" ("James'" and "Charles'" are accepted too, so the
 * questions leant on other slips), "The 1990s" and "five DVDs" (an apostrophe
 * there is disputed, and the options were malformed).
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided: all
 * 201 questions read against their options and explanations, and all 89 real
 * sentences found in src/data/full-texts letter for letter, apostrophes
 * included (the real-line test does not compare apostrophes), each in the
 * chapter its `source` names. Changed:
 *
 *   - Two second right answers. "In the end they finished the harvest in two
 *     days' less time..." (Animal Farm) marked "two days less time" wrong, but
 *     that is correct: "two days" can measure "less", as in "ten minutes less
 *     time". It is now "...had a few minutes' conversation with Charlotte..."
 *     (Pride and Prejudice, Chapter 30). "All the runners' shoes were muddy."
 *     marked "All the runner's shoes" wrong, a correct sentence about one
 *     runner's shoes; it gained a prompt giving many runners.
 *   - Counting apostrophes won. On the 42 contraction questions the option
 *     with most apostrophes was right 47 per cent of the time, and in 13 the
 *     answer alone had the most. Ten of the 13 now set a missing apostrophe
 *     against a misplaced or added one: "Don't worry" and "Wasn't it Kate's"
 *     trade "Dont" and "Wasnt" for "Do'nt" and "Was'nt", and eight invented
 *     sentences gained a plain plural to put a stray apostrophe on ("...until
 *     they're back with the tickets", "...practised the songs", "...those
 *     rules", "...packed our bags sooner", "Let's see who's bringing the
 *     snacks", "...writing on earthquakes", "...noticed the cracks", "...with
 *     the chairs"); the first also tests "their" against "they're" now, so it
 *     moved to tier 2. The other three are real lines with no word to spare.
 *     Counting now scores 26 per cent on those 42 and 20 on the bank.
 *   - The docblock above says a stray apostrophe on a plain plural never
 *     stands where it could mean "has", but eight options in seven questions
 *     did: "the hen's made", "The dog's flanked", "Her eye's met", "the pig's
 *     intended" (twice), "eye's flitted", "whisker's twitched" and "hand's
 *     pressed". Each was wrong for another slip too; the stray apostrophe now
 *     follows the s ("the hens' made"), which cannot be read as "has".
 *   - "The student's work was displayed in the hall's." was a slip nobody
 *     makes; it is now "The students's work...".
 */

export interface ApostropheQuestion {
  options: [string, string, string, string]
  answerIndex: number
  /**
   * The rule the question tests: the tag the student's account records. It is
   * no longer shown above the question (see the docblock).
   */
  ruleTested: string
  /**
   * 1 one or two apostrophes in a plain sentence, 2 telling near neighbours
   * apart (one owner or several, its or it's, a plural or a possessive), 3
   * several decisions in one sentence, or one the meaning decides.
   */
  tier: 1 | 2 | 3
  /**
   * What the sentence must mean, shown under the question, where the number of
   * owners cannot be told from the sentence itself. It states the meaning,
   * never the rule.
   */
  prompt?: string
  /** Where a real sentence comes from, as the study guides cite it, shown under the question. */
  source?: string
  /**
   * The words the options decide, by family ("its or it's", "owner: dog",
   * "don't"): seeing one of them right in one question would answer another,
   * so no two sharing one are dealt in one round.
   */
  facts?: string[]
}

export const QUESTION_BANK: ApostropheQuestion[] = [
  // ── Contractions: letters left out ────────────────────────────────────────
  {
    options: [
      "It's raining, so we can't go out.",
      'Its raining, so we cant go out.',
      "Its raining, so we can't go out.",
      "It's raining, so we ca'nt go out.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["can't", "its or it's"],
  },
  {
    options: [
      'They wont be here until were ready.',
      "They won't be here until we're ready.",
      "They wo'nt be here until we're ready.",
      "They won't be here until were ready.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["were or we're", "won't"],
  },
  {
    options: [
      'Shes already finished, hasnt she?',
      "Shes already finished, hasn't she?",
      "She's already finished, hasn't she?",
      "She's already finished, has'nt she?",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["hasn't", "she's"],
  },
  {
    options: [
      "I'd rather wait until their back with the ticket's.",
      "I'd rather wait until their back with the tickets.",
      "I'd rather wait until they're back with the ticket's.",
      "I'd rather wait until they're back with the tickets.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["i'd", "their, there or they're"],
  },
  {
    options: [
      "You'll be fine once you've practised the songs.",
      "Youll be fine once you've practised the songs.",
      "You'll be fine once you've practised the song's.",
      "Youll be fine once you've practised the song's.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["you'll", "you've"],
  },
  {
    options: [
      "Theres no way he'll agree to those rule's.",
      "There's no way he'll agree to those rules.",
      "Theres no way he'll agree to those rules.",
      "There's no way he'll agree to those rule's.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["he'll", "there's"],
  },
  {
    options: [
      'Im sure that wasnt my fault.',
      "Im sure that wasn't my fault.",
      "I'm sure that wasn't my fault.",
      "I'm sure that was'nt my fault.",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["i'm", "wasn't"],
  },
  {
    options: [
      'Scrooge and he were partners for I dont know how many years.',
      "Scrooge and he were partners for I don't know how many year's.",
      "Scrooge and he were partners for I dont know how many year's.",
      "Scrooge and he were partners for I don't know how many years.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 1,
    source: 'A Christmas Carol, Stave 1',
    facts: ["don't"],
  },
  {
    options: [
      "I don't make merry myself at Christmas and I can't afford to make idle people merry.",
      "I do'nt make merry myself at Christmas and I can't afford to make idle people merry.",
      "I don't make merry myself at Christmas and I cant afford to make idle people merry.",
      "I do'nt make merry myself at Christmas and I cant afford to make idle people merry.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 1,
    source: 'A Christmas Carol, Stave 1',
    facts: ["can't", "don't"],
  },
  {
    options: [
      'You wouldnt believe how those two fellows went at it!',
      "You wouldn't believe how those two fellows went at it!",
      "You wouldn't believe how those two fellow's went at it!",
      "You wouldnt believe how those two fellow's went at it!",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 1,
    source: 'A Christmas Carol, Stave 2',
    facts: ["wouldn't"],
  },
  {
    options: [
      "Weve got to learn before we've got a chance.",
      "We've got to learn before weve got a chance.",
      "We've got to learn before we've got a chance.",
      'Weve got to learn before weve got a chance.',
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 1,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["we've"],
  },
  {
    options: [
      "We couldve caught the earlier train if we'd packed our bags sooner.",
      "We could've caught the earlier train if we'd packed our bag's sooner.",
      "We couldve caught the earlier train if we'd packed our bag's sooner.",
      "We could've caught the earlier train if we'd packed our bags sooner.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["could've", "we'd"],
  },
  {
    options: [
      "Aren't you glad you didn't go?",
      "Arent you glad you didn't go?",
      "Aren't you glad you did'nt go?",
      "Arent you glad you did'nt go?",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["aren't", "didn't"],
  },
  {
    options: [
      "Do'nt worry, we'll save you a seat.",
      "Don't worry, we'll save you a seat.",
      "Don't worry, well save you a seat.",
      "Do'nt worry, well save you a seat.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["don't", "we'll"],
  },
  {
    options: [
      "He wo'nt admit that he's wrong.",
      "He won't admit that hes wrong.",
      "He won't admit that he's wrong.",
      "He wo'nt admit that hes wrong.",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 1,
    facts: ["he's", "won't"],
  },
  {
    options: [
      "I could'nt keep my eyes off him.",
      "I couldn't keep my eye's off him.",
      "I could'nt keep my eye's off him.",
      "I couldn't keep my eyes off him.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 1,
    source: 'Great Expectations, Chapter 4',
    facts: ["couldn't"],
  },
  {
    options: [
      "There's the window where I saw the wandering Spirits!",
      'Theres the window where I saw the wandering Spirits!',
      "There's the window where I saw the wandering Spirit's!",
      "Theres the window where I saw the wandering Spirit's!",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 1,
    source: 'A Christmas Carol, Stave 5',
    facts: ["there's"],
  },
  {
    options: [
      'Hes going to ask your pals, too.',
      "He's going to ask your pals, too.",
      "He's going to ask your pal's, too.",
      "Hes going to ask your pal's, too.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 1,
    source: 'Great Expectations, Chapter 25',
    facts: ["he's"],
  },
  {
    options: [
      "Was'nt it Kate's idea to camp by the river?",
      "Wasn't it Kates idea to camp by the river?",
      "Wasn't it Kate's idea to camp by the river?",
      "Was'nt it Kates idea to camp by the river?",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 1,
    facts: ['owner: kate', "wasn't"],
  },
  {
    options: [
      "Were going to the park if its' sunny.",
      "Were going to the park if it's sunny.",
      "We're going to the park if its' sunny.",
      "We're going to the park if it's sunny.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["its or it's", "were or we're"],
  },
  {
    options: [
      "Let's see who's bringing the snacks.",
      "Let's see whose bringing the snacks.",
      "Let's see who's bringing the snack's.",
      "Let's see whose bringing the snack's.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["lets or let's", "whose or who's"],
  },
  {
    options: [
      "Where's the report your writing on earthquakes?",
      "Where's the report you're writing on earthquakes?",
      "Where's the report you're writing on earthquake's?",
      "Where's the report your writing on earthquake's?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["where's", "your or you're"],
  },
  {
    options: [
      "They're certain that its they're turn now.",
      "They're certain that its their turn now.",
      "They're certain that it's their turn now.",
      "Theyre certain that it's their turn now.",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["its or it's", "their, there or they're"],
  },
  {
    options: [
      "There was nothing they would'nt have cleared away, or couldn't have cleared away, with old Fezziwig looking on.",
      "There was nothing they wouldn't have cleared away, or couldnt have cleared away, with old Fezziwig looking on.",
      "There was nothing they would'nt have cleared away, or couldnt have cleared away, with old Fezziwig looking on.",
      "There was nothing they wouldn't have cleared away, or couldn't have cleared away, with old Fezziwig looking on.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 2,
    source: 'A Christmas Carol, Stave 2',
    facts: ["couldn't", "wouldn't"],
  },
  {
    options: [
      "If that's not high praise, tell me higher, and I'll use it.",
      "If thats not high praise, tell me higher, and I'll use it.",
      "If that's not high praise, tell me higher, and Ill use it.",
      'If thats not high praise, tell me higher, and Ill use it.',
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 2,
    source: 'A Christmas Carol, Stave 2',
    facts: ["i'll", "that's"],
  },
  {
    options: [
      "Here, he take's it into his head to dislike us, and he won't come and dine with us.",
      "Here, he takes it into his head to dislike us, and he won't come and dine with us.",
      'Here, he takes it into his head to dislike us, and he wont come and dine with us.',
      "Here, he take's it into his head to dislike us, and he wont come and dine with us.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 2,
    source: 'A Christmas Carol, Stave 3',
    facts: ["won't"],
  },
  {
    options: [
      'The Martians cant get out of their pit, can they?',
      "The Martians can't get out of there pit, can they?",
      "The Martians can't get out of their pit, can they?",
      'The Martians cant get out of there pit, can they?',
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 14',
    facts: ["can't", "their, there or they're"],
  },
  {
    options: [
      'And theyve made their footing good and crippled the greatest power in the world.',
      "And they've made they're footing good and crippled the greatest power in the world.",
      "And theyve made they're footing good and crippled the greatest power in the world.",
      "And they've made their footing good and crippled the greatest power in the world.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["their, there or they're", "they've"],
  },
  {
    options: [
      "It never was a war, any more than there's war between man and ants.",
      'It never was a war, any more than theres war between man and ants.',
      "It never was a war, any more than there's war between man and ant's.",
      "It never was a war, any more than theres war between man and ant's.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["there's"],
  },
  {
    options: [
      "I did'nt know that it was you, you see, or just how you'd been buried.",
      "I didn't know that it was you, you see, or just how you'd been buried.",
      "I didn't know that it was you, you see, or just how youd been buried.",
      "I did'nt know that it was you, you see, or just how youd been buried.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["didn't", "you'd"],
  },
  {
    options: [
      'Theyll wonder what people did before there were Martians to take care of them.',
      "They'll wonder what people did before there were Martian's to take care of them.",
      "They'll wonder what people did before there were Martians to take care of them.",
      "Theyll wonder what people did before there were Martian's to take care of them.",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["they'll"],
  },
  {
    options: [
      "If its amusement you're after, I reckon the game is up.",
      "If it's amusement your after, I reckon the game is up.",
      'If its amusement your after, I reckon the game is up.',
      "If it's amusement you're after, I reckon the game is up.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["its or it's", "your or you're"],
  },
  {
    options: [
      "I'm delighted to have them, for the chances are that they are all he has.",
      'Im delighted to have them, for the chances are that they are all he has.',
      "I'm delighted to have them, for the chance's are that they are all he has.",
      "Im delighted to have them, for the chance's are that they are all he has.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The Sign of Four, Chapter 7',
    facts: ["i'm"],
  },
  {
    options: [
      'Ill never forget how you lectured us all on causes and inferences and effects in the Bishopgate jewel case.',
      "I'll never forget how you lectured us all on causes and inferences and effects in the Bishopgate jewel case.",
      "I'll never forget how you lectured us all on cause's and inferences and effects in the Bishopgate jewel case.",
      "Ill never forget how you lectured us all on cause's and inferences and effects in the Bishopgate jewel case.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 2,
    source: 'The Sign of Four, Chapter 6',
    facts: ["i'll"],
  },
  {
    options: [
      "Its odd that nobody's noticed the cracks.",
      "It's odd that nobody's noticed the crack's.",
      "It's odd that nobody's noticed the cracks.",
      "Its odd that nobody's noticed the crack's.",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["its or it's", "nobody's"],
  },
  {
    options: [
      "Id have helped with the chairs if I'd known.",
      "I'd have helped with the chair's if I'd known.",
      "Id have helped with the chair's if I'd known.",
      "I'd have helped with the chairs if I'd known.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["i'd"],
  },
  {
    options: [
      "We shan't be long, so don't wait up.",
      "We sha'nt be long, so don't wait up.",
      "We shan't be long, so dont wait up.",
      "We sha'nt be long, so dont wait up.",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 2,
    facts: ["don't", "shan't"],
  },
  {
    options: [
      'It isnt quite according to what a man wants for his species, but its about what the facts point to.',
      "It isn't quite according to what a man wants for his species, but it's about what the facts point to.",
      "It isnt quite according to what a man wants for his species, but it's about what the fact's point to.",
      "It isn't quite according to what a man wants for his species, but its about what the fact's point to.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 3,
    source: 'The War of the Worlds, Book Two, Chapter 7',
    facts: ["isn't", "its or it's"],
  },
  {
    options: [
      "Mum let's us stay up late, so let's watch the film.",
      'Mum lets us stay up late, so lets watch the film.',
      "Mum lets us stay up late, so let's watch the film.",
      "Mum let's us stay up late, so lets watch the film.",
    ],
    answerIndex: 2,
    ruleTested: 'Omission',
    tier: 3,
    facts: ["lets or let's"],
  },
  {
    options: [
      'Were sure the lights were on when we left.',
      "We're sure the lights we're on when we left.",
      "Were sure the lights we're on when we left.",
      "We're sure the lights were on when we left.",
    ],
    answerIndex: 3,
    ruleTested: 'Omission',
    tier: 3,
    facts: ["were or we're"],
  },
  {
    options: [
      "Who's the girl whose bike was stolen?",
      'Whose the girl whose bike was stolen?',
      "Who's the girl who's bike was stolen?",
      "Whose the girl who's bike was stolen?",
    ],
    answerIndex: 0,
    ruleTested: 'Omission',
    tier: 3,
    facts: ["whose or who's"],
  },
  {
    options: [
      'Their over there with their coats.',
      "They're over there with their coats.",
      "They're over there with they're coats.",
      "Their over there with they're coats.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    tier: 3,
    facts: ["their, there or they're"],
  },
  // ── its and it’s ──────────────────────────────────────────────────────────
  {
    options: [
      "The tree drops it's leaves every autumn.",
      "The tree drops its leave's every autumn.",
      'The tree drops its leaves every autumn.',
      "The tree drops it's leave's every autumn.",
    ],
    answerIndex: 2,
    ruleTested: 'its vs it’s',
    tier: 1,
    facts: ["its or it's"],
  },
  {
    options: [
      "The cat licked it's paws clean.",
      "The cat licked its paw's clean.",
      "The cat licked it's paw's clean.",
      'The cat licked its paws clean.',
    ],
    answerIndex: 3,
    ruleTested: 'its vs it’s',
    tier: 1,
    facts: ["its or it's"],
  },
  {
    options: [
      'It was a crescent with twelve miles between its horns.',
      "It was a crescent with twelve miles between it's horns.",
      "It was a crescent with twelve mile's between its horns.",
      "It was a crescent with twelve mile's between it's horns.",
    ],
    answerIndex: 0,
    ruleTested: 'its vs it’s',
    tier: 1,
    source: 'The War of the Worlds, Book One, Chapter 15',
    facts: ["its or it's"],
  },
  {
    options: [
      "Its been a long day, hasn't it?",
      "It's been a long day, hasn't it?",
      "It's been a long day, has'nt it?",
      "Its been a long day, has'nt it?",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    tier: 2,
    facts: ["hasn't", "its or it's"],
  },
  {
    options: [
      'Its time the school updated its website.',
      "Its time the school updated it's website.",
      "It's time the school updated its website.",
      "It's time the school updated it's website.",
    ],
    answerIndex: 2,
    ruleTested: 'its vs it’s',
    tier: 2,
    facts: ["its or it's"],
  },
  {
    options: [
      "Again the spectre raised a cry, and shook it's chain and wrung its shadowy hands.",
      "Again the spectre raised a cry, and shook its chain and wrung it's shadowy hands.",
      "Again the spectre raised a cry, and shook it's chain and wrung it's shadowy hands.",
      'Again the spectre raised a cry, and shook its chain and wrung its shadowy hands.',
    ],
    answerIndex: 3,
    ruleTested: 'its vs it’s',
    tier: 2,
    source: 'A Christmas Carol, Stave 1',
    facts: ["its or it's"],
  },
  {
    options: [
      "It's clear the company has lost its way.",
      'Its clear the company has lost its way.',
      "It's clear the company has lost it's way.",
      "Its clear the company has lost it's way.",
    ],
    answerIndex: 0,
    ruleTested: 'its vs it’s',
    tier: 2,
    facts: ["its or it's"],
  },
  {
    options: [
      'The schools choir won its first prize.',
      "The school's choir won its first prize.",
      "The school's choir won it's first prize.",
      "The schools choir won it's first prize.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    tier: 2,
    facts: ["its or it's", 'owner: school'],
  },
  {
    options: [
      "About the Rebellion and it's results he would express no opinion.",
      "About the Rebellion and its result's he would express no opinion.",
      'About the Rebellion and its results he would express no opinion.',
      "About the Rebellion and it's result's he would express no opinion.",
    ],
    answerIndex: 2,
    ruleTested: 'its vs it’s',
    tier: 2,
    source: 'Animal Farm, Chapter 3',
    facts: ["its or it's"],
  },
  {
    options: [
      'My little sisters teddy has lost one of its ears.',
      "My little sister's teddy has lost one of it's ears.",
      "My little sisters teddy has lost one of it's ears.",
      "My little sister's teddy has lost one of its ears.",
    ],
    answerIndex: 3,
    ruleTested: 'its vs it’s',
    tier: 2,
    prompt: 'The writer has one little sister.',
    facts: ["its or it's", 'owner: sister'],
  },
  {
    options: [
      "When it's cold, the dog won't leave its basket.",
      'When its cold, the dog wont leave its basket.',
      "When its cold, the dog won't leave it's basket.",
      "When it's cold, the dog wont leave it's basket.",
    ],
    answerIndex: 0,
    ruleTested: 'its vs it’s',
    tier: 3,
    facts: ["its or it's", "won't"],
  },
  {
    options: [
      'Theres a bird in the garden, and its building its nest.',
      "There's a bird in the garden, and it's building its nest.",
      "There's a bird in the garden, and its building it's nest.",
      "Theres a bird in the garden, and it's building it's nest.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    tier: 3,
    facts: ["its or it's", "there's"],
  },
  {
    options: [
      'The companys new logo has lost its charm, and its too late to change it.',
      "The company's new logo has lost it's charm, and its too late to change it.",
      "The company's new logo has lost its charm, and it's too late to change it.",
      "The companys new logo has lost it's charm, and it's too late to change it.",
    ],
    answerIndex: 2,
    ruleTested: 'its vs it’s',
    tier: 3,
    facts: ["its or it's", 'owner: company'],
  },
  // ── your and you’re ───────────────────────────────────────────────────────
  {
    options: [
      'Your right: were almost there.',
      "Youre right: we're almost there.",
      "You're right: were almost there.",
      "You're right: we're almost there.",
    ],
    answerIndex: 3,
    ruleTested: 'your vs you’re',
    tier: 2,
    facts: ["were or we're", "your or you're"],
  },
  {
    options: [
      "I have a pretty large experience of boys, and you're a bad set of fellows.",
      'I have a pretty large experience of boys, and your a bad set of fellows.',
      "I have a pretty large experience of boy's, and you're a bad set of fellows.",
      "I have a pretty large experience of boy's, and your a bad set of fellows.",
    ],
    answerIndex: 0,
    ruleTested: 'your vs you’re',
    tier: 2,
    source: 'Great Expectations, Chapter 11',
    facts: ["your or you're"],
  },
  {
    options: [
      'Your welcome to bring your sister.',
      "You're welcome to bring your sister.",
      "You're welcome to bring you're sister.",
      "Your welcome to bring you're sister.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    tier: 2,
    facts: ["your or you're"],
  },
  {
    options: [
      'If your cold, your coat is on the hook.',
      "If you're cold, you're coat is on the hook.",
      "If you're cold, your coat is on the hook.",
      "If your cold, you're coat is on the hook.",
    ],
    answerIndex: 2,
    ruleTested: 'your vs you’re',
    tier: 2,
    facts: ["your or you're"],
  },
  {
    options: [
      "You're phone is ringing, so you're going to miss the start.",
      'Your phone is ringing, so your going to miss the start.',
      "You're phone is ringing, so your going to miss the start.",
      "Your phone is ringing, so you're going to miss the start.",
    ],
    answerIndex: 3,
    ruleTested: 'your vs you’re',
    tier: 2,
    facts: ["your or you're"],
  },
  {
    options: [
      "You're lucky it's your birthday.",
      'Your lucky its your birthday.',
      "You're lucky its you're birthday.",
      "Your lucky it's you're birthday.",
    ],
    answerIndex: 0,
    ruleTested: 'your vs you’re',
    tier: 3,
    facts: ["its or it's", "your or you're"],
  },
  // ── One owner ─────────────────────────────────────────────────────────────
  {
    options: [
      'Napoleon took no interest in Snowballs committees.',
      "Napoleon took no interest in Snowball's committees.",
      "Napoleon took no interest in Snowball's committee's.",
      "Napoleon took no interest in Snowballs committee's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'Animal Farm, Chapter 3',
    facts: ['owner: snowball'],
  },
  {
    options: [
      'All of them came to look at Snowballs drawings at least once a day.',
      "All of them came to look at Snowball's drawing's at least once a day.",
      "All of them came to look at Snowball's drawings at least once a day.",
      "All of them came to look at Snowballs drawing's at least once a day.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'Animal Farm, Chapter 5',
    facts: ['owner: snowball'],
  },
  {
    options: [
      'Tomorrow Fredericks wagons would arrive and begin carting it away.',
      "Tomorrow Frederick's wagon's would arrive and begin carting it away.",
      "Tomorrow Fredericks wagon's would arrive and begin carting it away.",
      "Tomorrow Frederick's wagons would arrive and begin carting it away.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'Animal Farm, Chapter 8',
    facts: ['owner: frederick'],
  },
  {
    options: [
      "Clover's old dim eyes flitted from one face to another.",
      'Clovers old dim eyes flitted from one face to another.',
      "Clovers' old dim eyes flitted from one face to another.",
      "Clovers old dim eyes' flitted from one face to another.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'Animal Farm, Chapter 10',
    facts: ['owner: clover'],
  },
  {
    options: [
      'A positive light appeared to issue from Fezziwigs calves.',
      "A positive light appeared to issue from Fezziwig's calves.",
      "A positive light appeared to issue from Fezziwig's calve's.",
      "A positive light appeared to issue from Fezziwigs calve's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'A Christmas Carol, Stave 2',
    facts: ['owner: fezziwig'],
  },
  {
    options: [
      'In the afternoon he turned his steps towards his nephews house.',
      "In the afternoon he turned his step's towards his nephew's house.",
      "In the afternoon he turned his steps towards his nephew's house.",
      "In the afternoon he turned his step's towards his nephews house.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'A Christmas Carol, Stave 5',
    facts: ['owner: nephew'],
  },
  {
    options: [
      'I could read it in the fellows brown eyes.',
      "I could read it in the fellow's brown eye's.",
      "I could read it in the fellows brown eye's.",
      "I could read it in the fellow's brown eyes.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 1,
    source: 'The Sign of Four, Chapter 12',
    facts: ['owner: fellow'],
  },
  {
    options: [
      "My uncle's farm has twenty cows and three horses.",
      'My uncles farm has twenty cows and three horses.',
      "My uncle's farm has twenty cow's and three horses.",
      "My uncles farm has twenty cow's and three horses.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 1,
    facts: ['owner: uncle'],
  },
  {
    options: [
      'The class read three of Shakespeares plays this year.',
      "The class read three of Shakespeare's plays this year.",
      "The class read three of Shakespeare's play's this year.",
      "The class read three of Shakespeares play's this year.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 1,
    facts: ['owner: shakespeare'],
  },
  {
    options: [
      'The cats whiskers twitched as it slept.',
      "The cats' whiskers twitched as it slept.",
      "The cat's whiskers twitched as it slept.",
      "The cats whiskers' twitched as it slept.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    facts: ['owner: cat'],
  },
  {
    options: [
      "Without saying anything to the other's, she went to Mollie's stall and turned over the straw with her hoof.",
      'Without saying anything to the others, she went to Mollies stall and turned over the straw with her hoof.',
      "Without saying anything to the other's, she went to Mollies stall and turned over the straw with her hoof.",
      "Without saying anything to the others, she went to Mollie's stall and turned over the straw with her hoof.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 5',
    facts: ['owner: mollie'],
  },
  {
    options: [
      "Major's speech had given to the more intelligent animals on the farm a completely new outlook on life.",
      'Majors speech had given to the more intelligent animals on the farm a completely new outlook on life.',
      "Major's speech had given to the more intelligent animal's on the farm a completely new outlook on life.",
      "Majors speech had given to the more intelligent animal's on the farm a completely new outlook on life.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 2',
    facts: ['owner: major'],
  },
  {
    options: [
      "Led by three young Black Minorca pullets, the hens made a determined effort to thwart Napoleons' wishes.",
      "Led by three young Black Minorca pullets, the hens made a determined effort to thwart Napoleon's wishes.",
      'Led by three young Black Minorca pullets, the hens made a determined effort to thwart Napoleons wishes.',
      "Led by three young Black Minorca pullets, the hens' made a determined effort to thwart Napoleons wishes.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 7',
    facts: ['owner: napoleon'],
  },
  {
    options: [
      "The pig's were in ecstasies over Napoleon's cunning.",
      'The pigs were in ecstasies over Napoleons cunning.',
      "The pigs were in ecstasies over Napoleon's cunning.",
      "The pig's were in ecstasies over Napoleons cunning.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 8',
    facts: ['owner: napoleon'],
  },
  {
    options: [
      'The next moment a choking roar of rage sounded from Napoleons apartments.',
      "The next moment a choking roar of rage sounded from Napoleon's apartment's.",
      "The next moment a choking roar of rage sounded from Napoleons apartment's.",
      "The next moment a choking roar of rage sounded from Napoleon's apartments.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 8',
    facts: ['owner: napoleon'],
  },
  {
    options: [
      "The dogs flanked the procession and at the head of all marched Napoleon's black cockerel.",
      "The dogs flanked the procession and at the head of all marched Napoleons' black cockerel.",
      'The dogs flanked the procession and at the head of all marched Napoleons black cockerel.',
      "The dogs' flanked the procession and at the head of all marched Napoleons black cockerel.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 9',
    facts: ['owner: napoleon'],
  },
  {
    options: [
      'The sheep spent the whole day there browsing at the leaves under Squealers supervision.',
      "The sheep spent the whole day there browsing at the leaves under Squealer's supervision.",
      "The sheep spent the whole day there browsing at the leave's under Squealer's supervision.",
      "The sheep spent the whole day there browsing at the leave's under Squealers supervision.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 10',
    facts: ['owner: squealer'],
  },
  {
    options: [
      'Like all of Napoleons speeches, it was short and to the point.',
      "Like all of Napoleon's speeche's, it was short and to the point.",
      "Like all of Napoleon's speeches, it was short and to the point.",
      "Like all of Napoleons speeche's, it was short and to the point.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Animal Farm, Chapter 10',
    facts: ['owner: napoleon'],
  },
  {
    options: [
      'The grasp, though gentle as a womans hand, was not to be resisted.',
      "The grasp, though gentle as a women's hand, was not to be resisted.",
      "The grasp, though gentle as a womans' hand, was not to be resisted.",
      "The grasp, though gentle as a woman's hand, was not to be resisted.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'A Christmas Carol, Stave 2',
    facts: ['owner: woman'],
  },
  {
    options: [
      "Scrooge bent before the Ghost's rebuke, and trembling cast his eyes upon the ground.",
      'Scrooge bent before the Ghosts rebuke, and trembling cast his eyes upon the ground.',
      "Scrooge bent before the Ghost's rebuke, and trembling cast his eye's upon the ground.",
      "Scrooge bent before the Ghosts rebuke, and trembling cast his eye's upon the ground.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'A Christmas Carol, Stave 3',
    facts: ['owner: ghost'],
  },
  {
    options: [
      "They were portly gentlemen, pleasant to behold, and now stood, with their hat's off, in Scrooge's office.",
      "They were portly gentlemen, pleasant to behold, and now stood, with their hats off, in Scrooge's office.",
      'They were portly gentlemen, pleasant to behold, and now stood, with their hats off, in Scrooges office.',
      "They were portly gentlemen, pleasant to behold, and now stood, with their hat's off, in Scrooges office.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'A Christmas Carol, Stave 1',
    facts: ['owner: scrooge'],
  },
  {
    options: [
      'What sober mans key could have scored those grooves?',
      "What sober man's key could have scored those groove's?",
      "What sober man's key could have scored those grooves?",
      "What sober mans key could have scored those groove's?",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The Sign of Four, Chapter 1',
    facts: ['owner: man'],
  },
  {
    options: [
      "It was nearly eleven o'clock when we reached this final stage of our nights adventures.",
      "It was nearly eleven o'clock when we reached this final stage of our night's adventure's.",
      "It was nearly eleven o'clock when we reached this final stage of our nights adventure's.",
      "It was nearly eleven o'clock when we reached this final stage of our night's adventures.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The Sign of Four, Chapter 5',
    facts: ['owner: night'],
  },
  {
    options: [
      "That is Bartholomew's window up there where the moonshine strikes.",
      'That is Bartholomews window up there where the moonshine strikes.',
      "That is Bartholomew's window up there where the moonshine strike's.",
      "That is Bartholomews window up there where the moonshine strike's.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The Sign of Four, Chapter 5',
    facts: ['owner: bartholomew'],
  },
  {
    options: [
      "Now, only one white men's name is on the chart.",
      "Now, only one white man's name is on the chart.",
      'Now, only one white mans name is on the chart.',
      "Now, only one white mans' name is on the chart.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The Sign of Four, Chapter 7',
    facts: ['owner: man'],
  },
  {
    options: [
      "The jewel's will be as well with us as in the Company's coffers.",
      'The jewels will be as well with us as in the Companys coffers.',
      "The jewels will be as well with us as in the Company's coffers.",
      "The jewel's will be as well with us as in the Companys coffers.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The Sign of Four, Chapter 12',
    facts: ['owner: company'],
  },
  {
    options: [
      'I started at once in this harmless seamans rig and inquired at all the yards down the river.',
      "I started at once in this harmless seaman's rig and inquired at all the yard's down the river.",
      "I started at once in this harmless seamans rig and inquired at all the yard's down the river.",
      "I started at once in this harmless seaman's rig and inquired at all the yards down the river.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The Sign of Four, Chapter 10',
    facts: ['owner: seaman'],
  },
  {
    options: [
      "Enfield's tale went by before his mind in a scroll of lighted pictures.",
      'Enfields tale went by before his mind in a scroll of lighted pictures.',
      "Enfield's tale went by before his mind in a scroll of lighted picture's.",
      "Enfields tale went by before his mind in a scroll of lighted picture's.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Strange Case of Dr Jekyll and Mr Hyde, Chapter 2',
    facts: ['owner: enfield'],
  },
  {
    options: [
      'In addition, Ogilvys wire to the Astronomical Exchange had roused every observatory in the three kingdoms.',
      "In addition, Ogilvy's wire to the Astronomical Exchange had roused every observatory in the three kingdoms.",
      "In addition, Ogilvy's wire to the Astronomical Exchange had roused every observatory in the three kingdom's.",
      "In addition, Ogilvys wire to the Astronomical Exchange had roused every observatory in the three kingdom's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 3',
    facts: ['owner: ogilvy'],
  },
  {
    options: [
      'At that I gripped my wifes arm, and without ceremony ran her out into the road.',
      "At that I gripped my wives' arm, and without ceremony ran her out into the road.",
      "At that I gripped my wife's arm, and without ceremony ran her out into the road.",
      "At that I gripped my wive's arm, and without ceremony ran her out into the road.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 9',
    facts: ['owner: wife'],
  },
  {
    options: [
      'In another moment a bend in the road hid the three men from my brothers eyes.',
      "In another moment a bend in the road hid the three men from my brother's eye's.",
      "In another moment a bend in the road hid the three men from my brothers eye's.",
      "In another moment a bend in the road hid the three men from my brother's eyes.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 16',
    facts: ['owner: brother'],
  },
  {
    options: [
      "One man's hands pressed on the back of another.",
      'One mans hands pressed on the back of another.',
      "One mans hands' pressed on the back of another.",
      "One mans' hands pressed on the back of another.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 16',
    facts: ['owner: man'],
  },
  {
    options: [
      'My brother stood at the ponies head.',
      "My brother stood at the pony's head.",
      "My brother stood at the ponies' head.",
      "My brother stood at the ponie's head.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 16',
    facts: ['owner: pony'],
  },
  {
    options: [
      'I could just see the curates face, a dim, oval shape, and his collar and cuffs.',
      "I could just see the curate's face, a dim, oval shape, and his collar and cuff's.",
      "I could just see the curate's face, a dim, oval shape, and his collar and cuffs.",
      "I could just see the curates face, a dim, oval shape, and his collar and cuff's.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 1',
    facts: ['owner: curate'],
  },
  {
    options: [
      'Going into the kitchen, I saw a dogs nose peering in through a break among the ruddy fronds.',
      "Going into the kitchen, I saw a dog's nose peering in through a break among the ruddy frond's.",
      "Going into the kitchen, I saw a dogs nose peering in through a break among the ruddy frond's.",
      "Going into the kitchen, I saw a dog's nose peering in through a break among the ruddy fronds.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 5',
    facts: ['owner: dog'],
  },
  {
    options: [
      "I heard a sound like the flutter of a bird's wings, and a hoarse croaking, but that was all.",
      'I heard a sound like the flutter of a birds wings, and a hoarse croaking, but that was all.',
      "I heard a sound like the flutter of a bird's wing's, and a hoarse croaking, but that was all.",
      "I heard a sound like the flutter of a birds wing's, and a hoarse croaking, but that was all.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'The War of the Worlds, Book Two, Chapter 5',
    facts: ['owner: bird'],
  },
  {
    options: [
      'For Gods sake, say no more of his partners.',
      "For God's sake, say no more of his partners.",
      "For God's sake, say no more of his partner's.",
      "For Gods sake, say no more of his partner's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Pride and Prejudice, Chapter 3',
    facts: ['owner: god'],
  },
  {
    options: [
      'And so, you like this mans sisters too, do you?',
      "And so, you like this man's sister's too, do you?",
      "And so, you like this man's sisters too, do you?",
      "And so, you like this mans sister's too, do you?",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Pride and Prejudice, Chapter 4',
    facts: ['owner: man'],
  },
  {
    options: [
      "His answer to this sudden attack was delightful to there mother's ear.",
      'His answer to this sudden attack was delightful to their mothers ear.',
      'His answer to this sudden attack was delightful to there mothers ear.',
      "His answer to this sudden attack was delightful to their mother's ear.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Pride and Prejudice, Chapter 9',
    facts: ['owner: mother', "their, there or they're"],
  },
  {
    options: [
      "I had hold of Joe's hand now, and Joe carried one of the torches.",
      'I had hold of Joes hand now, and Joe carried one of the torches.',
      "I had hold of Joe's hand now, and Joe carried one of the torche's.",
      "I had hold of Joes hand now, and Joe carried one of the torche's.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Great Expectations, Chapter 5',
    facts: ['owner: joe'],
  },
  {
    options: [
      'The twins wore each others jumpers.',
      "The twins wore each other's jumpers.",
      "The twins wore each others' jumpers.",
      "The twins wore each other's jumper's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    facts: ['owner: other'],
  },
  {
    options: [
      'It was nobodys fault that the trip was cancelled.',
      "It was nobodies' fault that the trip was cancelled.",
      "It was nobody's fault that the trip was cancelled.",
      "It was nobodys' fault that the trip was cancelled.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    facts: ["nobody's"],
  },
  {
    options: [
      "After a hard days work, the farmer's dog slept soundly.",
      "After a hard day's work, the farmers dog slept soundly.",
      'After a hard days work, the farmers dog slept soundly.',
      "After a hard day's work, the farmer's dog slept soundly.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    facts: ['owner: day', 'owner: farmer'],
  },
  {
    options: [
      "My sister's friends are coming to stay.",
      'My sisters friends are coming to stay.',
      "My sister's friend's are coming to stay.",
      "My sisters' friends are coming to stay.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    prompt: 'The writer has only one sister.',
    facts: ['owner: sister'],
  },
  {
    options: [
      "She quite gloated on these question's and answers, so keen was her enjoyment of Sarah Pocket's jealous dismay.",
      "She quite gloated on these questions and answers, so keen was her enjoyment of Sarah Pocket's jealous dismay.",
      'She quite gloated on these questions and answers, so keen was her enjoyment of Sarah Pockets jealous dismay.',
      "She quite gloated on these question's and answers, so keen was her enjoyment of Sarah Pockets jealous dismay.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Great Expectations, Chapter 19',
    facts: ['owner: pocket'],
  },
  {
    options: [
      "He kept his very look's to himself, and scarcely directed his eyes to Estella's face once during dinner.",
      'He kept his very looks to himself, and scarcely directed his eyes to Estellas face once during dinner.',
      "He kept his very looks to himself, and scarcely directed his eyes to Estella's face once during dinner.",
      "He kept his very looks to himself, and scarcely directed his eye's to Estellas face once during dinner.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Great Expectations, Chapter 29',
    facts: ['owner: estella'],
  },
  {
    options: [
      "Apart from any inclination's of my own, I understand Wemmick's hint now.",
      'Apart from any inclinations of my own, I understand Wemmicks hint now.',
      "Apart from any inclination's of my own, I understand Wemmicks hint now.",
      "Apart from any inclinations of my own, I understand Wemmick's hint now.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Great Expectations, Chapter 54',
    facts: ['owner: wemmick'],
  },
  {
    options: [
      "I saw the shadows of the heavy stair-rails, thrown by the watchman's lantern on the wall.",
      "I saw the shadow's of the heavy stair-rails, thrown by the watchman's lantern on the wall.",
      'I saw the shadows of the heavy stair-rails, thrown by the watchmans lantern on the wall.',
      "I saw the shadow's of the heavy stair-rails, thrown by the watchmans lantern on the wall.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'Great Expectations, Chapter 53',
    facts: ['owner: watchman'],
  },
  {
    options: [
      'Wiser now for the artillerymans teaching, I sought out food and drink.',
      "Wiser now for the artilleryman's teaching, I sought out food and drink.",
      "Wiser now for the artillerymen's teaching, I sought out food and drink.",
      "Wiser now for the artillerymans' teaching, I sought out food and drink.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 2,
    prompt: 'One artilleryman had taught the narrator.',
    source: 'The War of the Worlds, Book Two, Chapter 1',
    facts: ['owner: artilleryman'],
  },
  {
    options: [
      'The mention of Marleys funeral brings me back to the point I started from.',
      "The mention of Marley's funeral bring's me back to the point I started from.",
      "The mention of Marley's funeral brings me back to the point I started from.",
      "The mention of Marleys funeral bring's me back to the point I started from.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 2,
    source: 'A Christmas Carol, Stave 1',
    facts: ['owner: marley'],
  },
  {
    options: [
      "Well need everyone's help to finish the mural.",
      "We'll need everyones help to finish the mural.",
      'Well need everyones help to finish the mural.',
      "We'll need everyone's help to finish the mural.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 2,
    facts: ['owner: everyone', "we'll"],
  },
  {
    options: [
      "The boy's football landed in next door's garden.",
      "The boy's football landed in next doors' garden.",
      "The boys' football landed in next doors garden.",
      "The boys football landed in next door's garden.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 3,
    prompt: 'One boy owns the football.',
    facts: ['owner: boy', 'owner: door'],
  },
  {
    options: [
      "They had just noticed this when a cry of despair broke from every animals' throat.",
      "They had just noticed this when a cry of despair broke from every animal's throat.",
      'They had just noticed this when a cry of despair broke from every animals throat.',
      "They had just noticed this when a cry of despair broke from every animals's throat.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'Animal Farm, Chapter 6',
    facts: ['owner: animal'],
  },
  {
    options: [
      "Scrooges countenance fell almost as low as the Ghost's had done.",
      "Scrooge's countenance fell almost as low as the Ghosts had done.",
      "Scrooge's countenance fell almost as low as the Ghost's had done.",
      'Scrooges countenance fell almost as low as the Ghosts had done.',
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 3,
    prompt: 'Only one Ghost is with Scrooge.',
    source: 'A Christmas Carol, Stave 1',
    facts: ['owner: ghost', 'owner: scrooge'],
  },
  {
    options: [
      'Scrooges nieces sisters, and all the other ladies, expressed the same opinion.',
      "Scrooges niece's sister's, and all the other ladies, expressed the same opinion.",
      "Scrooge's nieces sister's, and all the other ladies, expressed the same opinion.",
      "Scrooge's niece's sisters, and all the other ladies, expressed the same opinion.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'A Christmas Carol, Stave 3',
    facts: ['owner: niece', 'owner: scrooge'],
  },
  {
    options: [
      "It is that the chief proof of man's real greatness lies in his perception of his own smallness.",
      'It is that the chief proof of mans real greatness lies in his perception of his own smallness.',
      "It is that the chief proof of man's real greatness lie's in his perception of his own smallness.",
      "It is that the chief proof of mans real greatness lie's in his perception of his own smallness.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'The Sign of Four, Chapter 7',
    facts: ['owner: man'],
  },
  {
    options: [
      'A boy from the town, trenching on Smiths monopoly, was selling papers with the afternoons news.',
      "A boy from the town, trenching on Smith's monopoly, was selling papers with the afternoon's news.",
      "A boy from the town, trenching on Smiths monopoly, was selling paper's with the afternoon's news.",
      "A boy from the town, trenching on Smith's monopoly, was selling paper's with the afternoons news.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'The War of the Worlds, Book One, Chapter 8',
    facts: ['owner: afternoon', 'owner: smith'],
  },
  {
    options: [
      'Her eyes met my brothers, and her hesitation ended.',
      "Her eyes met my brothers', and her hesitation ended.",
      "Her eyes met my brother's, and her hesitation ended.",
      "Her eyes' met my brothers, and her hesitation ended.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 3,
    prompt: 'The narrator has one brother.',
    source: 'The War of the Worlds, Book One, Chapter 16',
    facts: ['owner: brother'],
  },
  {
    options: [
      "A hoof missed my brothers foot by a hair's breadth.",
      "A hoof missed my brother's foot by a hairs breadth.",
      'A hoof missed my brothers foot by a hairs breadth.',
      "A hoof missed my brother's foot by a hair's breadth.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'The War of the Worlds, Book One, Chapter 16',
    facts: ['owner: brother', 'owner: hair'],
  },
  {
    options: [
      "I picked up someone else's coat by mistake.",
      'I picked up someone elses coat by mistake.',
      "I picked up someone's else coat by mistake.",
      "I picked up someone elses' coat by mistake.",
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 3,
    facts: ['owner: else'],
  },
  {
    options: [
      "We had a weeks holiday at my aunt's.",
      "We had a week's holiday at my aunt's.",
      "We had a week's holiday at my aunts.",
      "We had a weeks' holiday at my aunt's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 3,
    facts: ['owner: aunt', 'owner: week'],
  },
  {
    options: [
      "The classes' results improved, but the other classes' results fell.",
      "The class's results improved, but the other class's results fell.",
      "The class's results improved, but the other classes' results fell.",
      "The classes results improved, but the other class's results fell.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 3,
    prompt: 'One class improved, and the other four did worse.',
    facts: ['owner: clas', 'owner: classe'],
  },
  {
    options: [
      "The bosses office is next to the workers' canteen.",
      "The boss's office is next to the worker's canteen.",
      "The bosses office is next to the worker's canteen.",
      "The boss's office is next to the workers' canteen.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 3,
    prompt: 'There is one boss and many workers.',
    facts: ['owner: bos', 'owner: worker'],
  },
  {
    options: [
      "Like the clock in Miss Havisham's room, and like Miss Havisham's watch, it had stopped at twenty minutes to nine.",
      "Like the clock in Miss Havishams room, and like Miss Havisham's watch, it had stopped at twenty minute's to nine.",
      "Like the clock in Miss Havisham's room, and like Miss Havishams watch, it had stopped at twenty minute's to nine.",
      'Like the clock in Miss Havishams room, and like Miss Havishams watch, it had stopped at twenty minutes to nine.',
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'Great Expectations, Chapter 11',
    facts: ['owner: havisham'],
  },
  {
    options: [
      'I cant find my keys, and Dads are missing too.',
      "I can't find my keys, and Dad's are missing too.",
      "I cant find my key's, and Dad's are missing too.",
      "I can't find my key's, and Dads are missing too.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 3,
    facts: ["can't", 'owner: dad'],
  },
  {
    options: [
      "Whose coming to Grandma's for lunch?",
      "Who's coming to Grandmas for lunch?",
      "Who's coming to Grandma's for lunch?",
      'Whose coming to Grandmas for lunch?',
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 3,
    facts: ['owner: grandma', "whose or who's"],
  },
  {
    options: [
      "The students' work was displayed in the hall.",
      'The students work was displayed in the hall.',
      "The students's work was displayed in the hall.",
      "The student's work was displayed in the hall.",
    ],
    answerIndex: 3,
    ruleTested: 'Singular possession',
    tier: 3,
    prompt: 'All the work on display was by one student.',
    facts: ['owner: student'],
  },
  {
    options: [
      "Napoleon snuffed deeply at them and pronounced them to be Snowball's.",
      'Napoleon snuffed deeply at them and pronounced them to be Snowballs.',
      "Napoleon snuffed deeply at them and pronounced them to be Snowballs'.",
      'Napoleon snuffed deeply at them and pronounced them to be Snowball.',
    ],
    answerIndex: 0,
    ruleTested: 'Singular possession',
    tier: 3,
    source: 'Animal Farm, Chapter 6',
    facts: ['owner: snowball'],
  },
  {
    options: [
      'After an hours wait, we had to queue for another two hours.',
      "After an hour's wait, we had to queue for another two hours.",
      "After an hour's wait, we had to queue for another two hours'.",
      "After an hours' wait, we had to queue for another two hour's.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    tier: 3,
    facts: ['owner: hour'],
  },
  {
    options: [
      "Grandads stories are better than anyone else's.",
      "Grandad's stories are better than anyone elses.",
      "Grandad's stories are better than anyone else's.",
      "Grandads story's are better than anyone else's.",
    ],
    answerIndex: 2,
    ruleTested: 'Singular possession',
    tier: 3,
    facts: ['owner: else', 'owner: grandad'],
  },
  // ── Several owners ────────────────────────────────────────────────────────
  {
    options: [
      'My parents house is near the river.',
      "My parent's house is near the river.",
      "My parents's house is near the river.",
      "My parents' house is near the river.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 2,
    prompt: "Both of the writer's parents own the house.",
    facts: ['owner: parent'],
  },
  {
    options: [
      "The witnesses' statements matched exactly.",
      'The witnesses statements matched exactly.',
      "The witness's statements matched exactly.",
      "The witnesses's statements matched exactly.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 2,
    prompt: 'Several witnesses gave statements.',
    facts: ['owner: witnesse'],
  },
  {
    options: [
      'Both countries leaders signed the treaty.',
      "Both countries' leaders signed the treaty.",
      "Both country's leaders signed the treaty.",
      "Both countries's leaders signed the treaty.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: countrie'],
  },
  {
    options: [
      "Afterwards Squealer made a round of the farm and set the animal's minds at rest.",
      'Afterwards Squealer made a round of the farm and set the animals minds at rest.',
      "Afterwards Squealer made a round of the farm and set the animals' minds at rest.",
      "Afterwards Squealer made a round of the farm and set the animals's minds at rest.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 2,
    source: 'Animal Farm, Chapter 6',
    facts: ['owner: animal'],
  },
  {
    options: [
      "At this sight the animal's courage returned to them.",
      'At this sight the animals courage returned to them.',
      "At this sight the animals's courage returned to them.",
      "At this sight the animals' courage returned to them.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 2,
    source: 'Animal Farm, Chapter 8',
    facts: ['owner: animal'],
  },
  {
    options: [
      "In glowing sentences he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals' backs.",
      "In glowing sentence's he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals' backs.",
      'In glowing sentences he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals backs.',
      "In glowing sentence's he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals backs.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 2,
    source: 'Animal Farm, Chapter 5',
    facts: ['owner: animal'],
  },
  {
    options: [
      "It was mixed every day into the pig's mash.",
      "It was mixed every day into the pigs' mash.",
      'It was mixed every day into the pigs mash.',
      "It was mixed every day into the pigs's mash.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 2,
    prompt: 'The mash is for all the pigs.',
    source: 'Animal Farm, Chapter 3',
    facts: ['owner: pig'],
  },
  {
    options: [
      "Every day added something to there knowledge of the officers' names and connections.",
      "Every day added something to their knowledge of the officer's names and connections.",
      "Every day added something to their knowledge of the officers' names and connections.",
      "Every day added something to there knowledge of the officer's names and connections.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 2,
    source: 'Pride and Prejudice, Chapter 7',
    facts: ['owner: officer', "their, there or they're"],
  },
  {
    options: [
      "Are spirit's lives so short?",
      'Are spirits lives so short?',
      "Are spirits's lives so short?",
      "Are spirits' lives so short?",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 2,
    prompt: 'Scrooge is asking about spirits in general.',
    source: 'A Christmas Carol, Stave 3',
    facts: ['owner: spirit'],
  },
  {
    options: [
      "The horses' bits were covered with foam, their eyes bloodshot.",
      "The horse's bits were covered with foam, their eyes bloodshot.",
      "The horses' bits were covered with foam, their eye's bloodshot.",
      "The horse's bits were covered with foam, their eye's bloodshot.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 16',
    facts: ['owner: horse'],
  },
  {
    options: [
      "Both team's fans sang loudly.",
      "Both teams' fans sang loudly.",
      'Both teams fans sang loudly.',
      "Both teams' fan's sang loudly.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: team'],
  },
  {
    options: [
      "All the runner's shoes were muddy.",
      'All the runners shoes were muddy.',
      "All the runners' shoes were muddy.",
      "All the runners' shoe's were muddy.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 2,
    prompt: 'There were many runners, and all their shoes were muddy.',
    facts: ['owner: runner'],
  },
  {
    options: [
      "My two brother's bedrooms are next to mine.",
      "My two brothers' bedroom's are next to mine.",
      "My two brother's bedroom's are next to mine.",
      "My two brothers' bedrooms are next to mine.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: brother'],
  },
  {
    options: [
      "The three witches' chant opens the play.",
      "The three witch's chant opens the play.",
      'The three witches chant opens the play.',
      "The three witche's chant opens the play.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: witche'],
  },
  {
    options: [
      "The lady's toilets are upstairs.",
      "The ladies' toilets are upstairs.",
      "The ladys' toilets are upstairs.",
      'The ladies toilets are upstairs.',
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: ladie'],
  },
  {
    options: [
      "The baby's cots were lined up in a row.",
      "The babie's cots were lined up in a row.",
      "The babies' cots were lined up in a row.",
      'The babies cots were lined up in a row.',
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: babie'],
  },
  {
    options: [
      "Several country's flags flew outside the hotel.",
      "Several country's flag's flew outside the hotel.",
      "Several countries' flag's flew outside the hotel.",
      "Several countries' flags flew outside the hotel.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: countrie'],
  },
  {
    options: [
      "Most of my classmates' parents came to the concert.",
      "Most of my classmate's parents came to the concert.",
      "Most of my classmates' parent's came to the concert.",
      'Most of my classmates parents came to the concert.',
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 2,
    facts: ['owner: classmate'],
  },
  {
    options: [
      "She not unfrequently stopped at the Parsonage, and had a few minute's conversation with Charlotte, but was scarcely ever prevailed on to get out.",
      "She not unfrequently stopped at the Parsonage, and had a few minutes' conversation with Charlotte, but was scarcely ever prevailed on to get out.",
      'She not unfrequently stopped at the Parsonage, and had a few minutes conversation with Charlotte, but was scarcely ever prevailed on to get out.',
      "She not unfrequently stopped at the Parsonage, and had a few minutes's conversation with Charlotte, but was scarcely ever prevailed on to get out.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 3,
    source: 'Pride and Prejudice, Chapter 30',
    facts: ['owner: minute'],
  },
  {
    options: [
      "And in a few day's time the pigs' intended to hold a memorial banquet in Boxer's honour.",
      "And in a few day's time the pigs intended to hold a memorial banquet in Boxers honour.",
      "And in a few days' time the pigs intended to hold a memorial banquet in Boxer's honour.",
      "And in a few days' time the pigs' intended to hold a memorial banquet in Boxers honour.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 3,
    source: 'Animal Farm, Chapter 9',
    facts: ['owner: boxer', 'owner: day'],
  },
  {
    options: [
      "Snowball also threw on to the fire the ribbons with which the horse's manes and tails had usually been decorated on market days.",
      "Snowball also threw on to the fire the ribbons with which the horses' manes and tails had usually been decorated on market day's.",
      "Snowball also threw on to the fire the ribbons with which the horses manes and tails had usually been decorated on market day's.",
      "Snowball also threw on to the fire the ribbons with which the horses' manes and tails had usually been decorated on market days.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 3,
    source: 'Animal Farm, Chapter 2',
    facts: ['owner: horse'],
  },
  {
    options: [
      "She had been growing increasingly hysterical, fearful, and depressed during the two days' journeyings.",
      "She had been growing increasingly hysterical, fearful, and depressed during the two day's journeyings.",
      'She had been growing increasingly hysterical, fearful, and depressed during the two days journeyings.',
      "She had been growing increasingly hysterical, fearful, and depressed during the two days' journeying's.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 3,
    source: 'The War of the Worlds, Book One, Chapter 17',
    facts: ['owner: day'],
  },
  {
    options: [
      "Our landlord gave us two week's notice.",
      "Our landlord gave us two weeks' notice.",
      'Our landlord gave us two weeks notice.',
      "Our landlord gave us two weeks's notice.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: week'],
  },
  {
    options: [
      "In two year's time, the new bridge will open.",
      'In two years time, the new bridge will open.',
      "In two years' time, the new bridge will open.",
      "In two years's time, the new bridge will open.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: year'],
  },
  {
    options: [
      "The Joneses dog chased it's tail past the childrens nursery.",
      "The Jones's dog chased its tail past the childrens' nursery.",
      "The Joneses' dog chased it's tail past the childrens' nursery.",
      "The Joneses' dog chased its tail past the children's nursery.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ["its or it's", 'owner: children', 'owner: jonese'],
  },
  {
    options: [
      "The Smiths' new car is parked outside the Patels' house.",
      "The Smith's new car is parked outside the Patel's house.",
      "The Smiths new car is parked outside the Patels' house.",
      "The Smiths' new car is parked outside the Patels house.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: patel', 'owner: smith'],
  },
  {
    options: [
      "Its the twins' birthday, so theyre having a party.",
      "It's the twins' birthday, so they're having a party.",
      "Its the twin's birthday, so they're having a party.",
      "It's the twin's birthday, so theyre having a party.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ["its or it's", 'owner: twin', "their, there or they're"],
  },
  {
    options: [
      "Were meeting at Jos house, and it's only five minutes' walk.",
      "Were meeting at Jo's house, and it's only five minute's walk.",
      "We're meeting at Jo's house, and it's only five minutes' walk.",
      "We're meeting at Jos house, and it's only five minute's walk.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: jo', 'owner: minute', "were or we're"],
  },
  {
    options: [
      "The dogs' bowl is empty, but the cats' bowls are full.",
      "The dog's bowl is empty, but the cat's bowls are full.",
      "The dogs' bowl is empty, but the cat's bowls are full.",
      "The dog's bowl is empty, but the cats' bowls are full.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 3,
    prompt: 'There is one dog and there are two cats.',
    facts: ['owner: cat', 'owner: dog'],
  },
  {
    options: [
      "We'll meet outside the Taylors' house at six o'clock.",
      "Well meet outside the Taylors' house at six o'clock.",
      "We'll meet outside the Taylor's house at six o'clock.",
      "Well meet outside the Taylor's house at six o'clock.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: taylor', "we'll"],
  },
  {
    options: [
      "The teacher's meeting starts at four.",
      "The teachers' meeting starts at four.",
      'The teachers meeting starts at four.',
      "The teachers's meeting starts at four.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 3,
    prompt: 'All the teachers meet together.',
    facts: ['owner: teacher'],
  },
  {
    options: [
      "My brother's friends are noisy.",
      "My brothers' friend's are noisy.",
      "My brothers' friends are noisy.",
      'My brothers friends are noisy.',
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 3,
    prompt: 'The writer has two brothers and means the friends of both.',
    facts: ['owner: brother'],
  },
  {
    options: [
      "The two girl's bags were lighter than there brother's.",
      "The two girl's bags were lighter than their brothers.",
      "The two girls' bags were lighter than there brothers.",
      "The two girls' bags were lighter than their brother's.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: brother', 'owner: girl', "their, there or they're"],
  },
  {
    options: [
      "We've borrowed the Hendersons' ladder, but it's too short.",
      "Weve borrowed the Hendersons' ladder, but its too short.",
      "We've borrowed the Henderson's ladder, but its too short.",
      "Weve borrowed the Henderson's ladder, but it's too short.",
    ],
    answerIndex: 0,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ["its or it's", 'owner: henderson', "we've"],
  },
  {
    options: [
      "A months rent is due, but two months' rent is owed.",
      "A month's rent is due, but two months' rent is owed.",
      "A month's rent is due, but two month's rent is owed.",
      "A months' rent is due, but two month's rent is owed.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: month'],
  },
  {
    options: [
      "Macbeths ambition grows after the witches' prophecy.",
      "Macbeth's ambition grows after the witch's prophecy.",
      "Macbeth's ambition grows after the witches' prophecy.",
      "Macbeths ambition grows after the witch's prophecy.",
    ],
    answerIndex: 2,
    ruleTested: 'Plural possession',
    tier: 3,
    prompt: 'The three witches make the prophecy together.',
    facts: ['owner: macbeth', 'owner: witche'],
  },
  {
    options: [
      "In a months time, the twin's cousins will visit from abroad.",
      "In a months time, the twins' cousin's will visit from abroad.",
      "In a month's time, the twin's cousin's will visit from abroad.",
      "In a month's time, the twins' cousins will visit from abroad.",
    ],
    answerIndex: 3,
    ruleTested: 'Plural possession',
    tier: 3,
    facts: ['owner: month', 'owner: twin'],
  },
  // ── Plurals that do not end in s ──────────────────────────────────────────
  {
    options: [
      "The men's department is upstairs.",
      'The mens department is upstairs.',
      "The mens' department is upstairs.",
      "The mens's department is upstairs.",
    ],
    answerIndex: 0,
    ruleTested: 'Irregular plural possession',
    tier: 1,
    facts: ['owner: men'],
  },
  {
    options: [
      'These are the womens trainers.',
      "These are the women's trainers.",
      "These are the womens' trainers.",
      "These are the women's trainer's.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    tier: 1,
    facts: ['owner: women'],
  },
  {
    options: [
      'My little brother loves childrens books.',
      "My little brother loves childrens' books.",
      "My little brother loves children's books.",
      "My little brother loves children's book's.",
    ],
    answerIndex: 2,
    ruleTested: 'Irregular plural possession',
    tier: 1,
    facts: ['owner: children'],
  },
  {
    options: [
      'The geese pond freezes over in winter.',
      "The gooses' pond freezes over in winter.",
      "The geeses' pond freezes over in winter.",
      "The geese's pond freezes over in winter.",
    ],
    answerIndex: 3,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    facts: ['owner: geese'],
  },
  {
    options: [
      "The people's voices were finally heard.",
      'The peoples voices were finally heard.',
      "The peoples voice's were finally heard.",
      "The people's voice's were finally heard.",
    ],
    answerIndex: 0,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    facts: ['owner: people'],
  },
  {
    options: [
      'The newspaper articles had prepared mens minds for the reception of the idea.',
      "The newspaper articles had prepared men's minds for the reception of the idea.",
      "The newspaper articles had prepared mens' minds for the reception of the idea.",
      "The newspaper article's had prepared men's minds for the reception of the idea.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    source: 'The War of the Worlds, Book One, Chapter 2',
    facts: ['owner: men'],
  },
  {
    options: [
      "The firemens' helmets were gleaming in the sun.",
      'The firemens helmets were gleaming in the sun.',
      "The firemen's helmets were gleaming in the sun.",
      "The firemen's helmet's were gleaming in the sun.",
    ],
    answerIndex: 2,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    facts: ['owner: firemen'],
  },
  {
    options: [
      "The childrens' coats were hung on their pegs.",
      "The children's coats were hung on there pegs.",
      "The childrens' coats were hung on there pegs.",
      "The children's coats were hung on their pegs.",
    ],
    answerIndex: 3,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    facts: ['owner: children', "their, there or they're"],
  },
  {
    options: [
      "The women's team and the men's team trained together.",
      "The womens' team and the men's team trained together.",
      "The women's team and the mens' team trained together.",
      "The womens' team and the mens' team trained together.",
    ],
    answerIndex: 0,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    facts: ['owner: men', 'owner: women'],
  },
  {
    options: [
      "The sheeps' wool was thick, so the shearers were slow.",
      "The sheep's wool was thick, so the shearers were slow.",
      "The sheep's wool was thick, so the shearer's were slow.",
      "The sheeps' wool was thick, so the shearer's were slow.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    tier: 2,
    facts: ['owner: sheep'],
  },
  {
    options: [
      "The childrens' teacher said its their best work.",
      "The children's teacher said its they're best work.",
      "The children's teacher said it's their best work.",
      "The childrens' teacher said it's they're best work.",
    ],
    answerIndex: 2,
    ruleTested: 'Irregular plural possession',
    tier: 3,
    facts: ["its or it's", 'owner: children', "their, there or they're"],
  },
  // ── Two owners together or apart ──────────────────────────────────────────
  {
    options: [
      "Sam's and Ella's house is by the park.",
      'Sam and Ellas house is by the park.',
      "Sam's and Ellas house is by the park.",
      "Sam and Ella's house is by the park.",
    ],
    answerIndex: 3,
    ruleTested: 'Joint and separate possession',
    tier: 3,
    prompt: 'Sam and Ella share one house.',
    facts: ['owner: ella'],
  },
  {
    options: [
      "Sam's and Ella's bikes were stolen.",
      "Sam and Ella's bikes were stolen.",
      "Sam's and Ellas bikes were stolen.",
      "Sam's and Ella's bike's were stolen.",
    ],
    answerIndex: 0,
    ruleTested: 'Joint and separate possession',
    tier: 3,
    prompt: 'Sam and Ella each had a bike of their own.',
    facts: ['owner: ella', 'owner: sam'],
  },
  {
    options: [
      "Mum's and Dad's anniversary is in June.",
      "Mum and Dad's anniversary is in June.",
      'Mum and Dads anniversary is in June.',
      "Mum's and Dads anniversary is in June.",
    ],
    answerIndex: 1,
    ruleTested: 'Joint and separate possession',
    tier: 3,
    facts: ['owner: dad'],
  },
  // ── No apostrophe: plain plurals and verbs ────────────────────────────────
  {
    options: [
      "Tomato's and potatoes are on offer this week.",
      "Tomatoes and potato's are on offer this week.",
      'Tomatoes and potatoes are on offer this week.',
      "Tomato's and potato's are on offer this week.",
    ],
    answerIndex: 2,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      "We ordered two pizza's and three lemonades.",
      "We ordered two pizzas and three lemonade's.",
      "We ordered two pizza's and three lemonade's.",
      'We ordered two pizzas and three lemonades.',
    ],
    answerIndex: 3,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      'Her parents both work as nurses.',
      "Her parent's both work as nurses.",
      "Her parents both work as nurse's.",
      "Her parent's both work as nurse's.",
    ],
    answerIndex: 0,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      "She play's the piano and sings in a choir.",
      'She plays the piano and sings in a choir.',
      "She plays the piano and sing's in a choir.",
      "She play's the piano and sing's in a choir.",
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      "The shop sells cake's and biscuits.",
      "The shop sell's cakes and biscuits.",
      'The shop sells cakes and biscuits.',
      "The shop sells cake's and biscuit's.",
    ],
    answerIndex: 2,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      "My cousin collect's stamps and coins.",
      "My cousin collects stamp's and coins.",
      "My cousin collect's stamp's and coins.",
      'My cousin collects stamps and coins.',
    ],
    answerIndex: 3,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      'The puppies love their new toys.',
      "The puppie's love their new toys.",
      "The puppies love their new toy's.",
      "The puppie's love their new toy's.",
    ],
    answerIndex: 0,
    ruleTested: 'No apostrophe for plurals',
    tier: 1,
  },
  {
    options: [
      "The Brown's are coming for dinner on Sundays.",
      'The Browns are coming for dinner on Sundays.',
      "The Browns are coming for dinner on Sunday's.",
      "The Brown's are coming for dinner on Sunday's.",
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    tier: 2,
  },
  {
    options: [
      "The kitten's chased each other's tails.",
      'The kittens chased each others tails.',
      "The kittens chased each other's tails.",
      "The kitten's chased each others tails.",
    ],
    answerIndex: 2,
    ruleTested: 'No apostrophe for plurals',
    tier: 2,
    facts: ['owner: other'],
  },
  // ── No apostrophe: yours, hers, ours, theirs and whose ────────────────────
  {
    options: [
      "Is this bag your's or hers?",
      "Is this bag yours or her's?",
      "Is this bag your's or her's?",
      'Is this bag yours or hers?',
    ],
    answerIndex: 3,
    ruleTested: 'Possessive pronouns',
    tier: 2,
    facts: ['hers', 'yours'],
  },
  {
    options: [
      'The choice is ours, not theirs.',
      "The choice is our's, not theirs.",
      "The choice is ours, not their's.",
      "The choice is our's, not their's.",
    ],
    answerIndex: 0,
    ruleTested: 'Possessive pronouns',
    tier: 2,
    facts: ['ours', 'theirs'],
  },
  {
    options: [
      "Who's turn is it to feed the rabbits?",
      'Whose turn is it to feed the rabbits?',
      "Whose turn is it to feed the rabbit's?",
      "Who's turn is it to feed the rabbit's?",
    ],
    answerIndex: 1,
    ruleTested: 'Possessive pronouns',
    tier: 2,
    facts: ["whose or who's"],
  },
  {
    options: [
      "Their's is the house with the green door; ours is next door.",
      "Theirs is the house with the green door; our's is next door.",
      'Theirs is the house with the green door; ours is next door.',
      "Their's is the house with the green door; our's is next door.",
    ],
    answerIndex: 2,
    ruleTested: 'Possessive pronouns',
    tier: 2,
    facts: ['ours', 'theirs'],
  },
  {
    options: [
      "Half of it is your's and half is Thaddeus Sholto's.",
      'Half of it is yours and half is Thaddeus Sholtos.',
      "Half of it is your's and half is Thaddeus Sholtos.",
      "Half of it is yours and half is Thaddeus Sholto's.",
    ],
    answerIndex: 3,
    ruleTested: 'Possessive pronouns',
    tier: 3,
    source: 'The Sign of Four, Chapter 11',
    facts: ['owner: sholto', 'yours'],
  },
  {
    options: [
      "If ever anybody's hair stood on end with terror, mine must have done so then.",
      'If ever anybodys hair stood on end with terror, mine must have done so then.',
      "If ever anybody's hair stood on end with terror, mine's must have done so then.",
      "If ever anybodys hair stood on end with terror, mine's must have done so then.",
    ],
    answerIndex: 0,
    ruleTested: 'Possessive pronouns',
    tier: 3,
    source: 'Great Expectations, Chapter 2',
    facts: ['mine', 'owner: anybody'],
  },
  {
    options: [
      'Lets see whose turn it is.',
      "Let's see whose turn it is.",
      "Let's see who's turn it is.",
      "Lets see who's turn it is.",
    ],
    answerIndex: 1,
    ruleTested: 'Possessive pronouns',
    tier: 3,
    facts: ["lets or let's", "whose or who's"],
  },
  {
    options: [
      "Its Ben's turn, then your's, then mine.",
      "It's Bens turn, then your's, then mine.",
      "It's Ben's turn, then yours, then mine.",
      'Its Bens turn, then yours, then mine.',
    ],
    answerIndex: 2,
    ruleTested: 'Possessive pronouns',
    tier: 3,
    facts: ["its or it's", 'owner: ben', 'yours'],
  },
  {
    options: [
      'Nobodys sure whose idea it was.',
      "Nobody's sure who's idea it was.",
      "Nobodys sure who's idea it was.",
      "Nobody's sure whose idea it was.",
    ],
    answerIndex: 3,
    ruleTested: 'Possessive pronouns',
    tier: 3,
    facts: ["nobody's", "whose or who's"],
  },
  {
    options: [
      "Nobody's going to believe that it's not yours.",
      'Nobodys going to believe that its not yours.',
      "Nobody's going to believe that its not your's.",
      "Nobodys going to believe that it's not your's.",
    ],
    answerIndex: 0,
    ruleTested: 'Possessive pronouns',
    tier: 3,
    facts: ["its or it's", "nobody's", 'yours'],
  },
]

export const BANK: GameBank<ApostropheQuestion> = {
  slug: 'apostrophe-ace',
  items: QUESTION_BANK,
  // Every question shares one stem, so the right sentence names it. None repeats.
  key: (q) => q.options[q.answerIndex],
  answer: (q) => q.options[q.answerIndex],
  options: (q) => q.options,
  tag: (q) => q.ruleTested,
  // A round climbs from one apostrophe to several decisions at once.
  tier: (q) => q.tier,
  // A form shown right in one question is never asked in another that round.
  facts: (q) => q.facts ?? [],
  // Rebuilt for depth (see the docblock); held to it by
  // src/__tests__/a-game-question-takes-knowing.test.ts.
  deepened: '2026-10-24',
}
