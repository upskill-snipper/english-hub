import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Build the Question: tap the scrambled words into the right order to make an
 * English question.
 *
 * Moved out of src/app/games/question-formation/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 * That day four question tags printed in a form nobody uses ("are not you")
 * were contracted, and "I wonder why she left so early?", a statement, was
 * replaced (git keeps the details). `note`, the one-line note the page showed
 * before then, is dropped: nothing has read it since the explanation panel.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy". Measured that day (.tmp-games-audit/REPORT-eal.md): 51
 * questions, and every tile was the word as printed, so the one tile with a
 * capital went first and the one with "?" went last whatever the student knew.
 * Now:
 *
 *   - the tiles carry no capital at the start, no question mark and no comma
 *     (tilesOf); the page puts the capital and the "?" on whatever the student
 *     builds, so neither end is given away. No question starts with a name;
 *   - 240 questions: 80 at tier 1, 98 at tier 2 and 62 at tier 3 (see
 *     CHECKED below). Tier 1 (A1): "be" questions, do and does, can, would
 *     like, what time, how old, how many. Tier 2 (A2): did, was and were, the
 *     present continuous, going to, will, should, may, shall and must, how
 *     far, how long and how much, which and whose, what is it like, subject
 *     and object questions, and the present perfect, "ever" included. Tier 3
 *     (B1): the present perfect with how long or how many times, its
 *     continuous form and its passive, the past continuous, passives,
 *     question tags, negative questions, "Do you know if...?", words like
 *     "for" and "to" at the end, used to, and should, could and would for
 *     advice, possibility and what you would do;
 *   - a question from its answer: 153 questions show the answer first ("I
 *     live in Leeds."), in `reply`. For "Who called you?" and "Who did you
 *     call?" the answer is what tells the two apart;
 *   - 45 real questions from eight books out of UK copyright (A Christmas
 *     Carol, Great Expectations, Jane Eyre, Pride and Prejudice, Dr Jekyll and
 *     Mr Hyde, Silas Marner, Frankenstein and Animal Farm), each with its
 *     `source`, which the page shows; each is in its held text word for word
 *     (src/__tests__/a-game-real-line-is-the-held-text.test.ts), and each
 *     explanation names who asks it;
 *   - `group` is the question's shape (a "did" question, a passive, a tag), so
 *     a round mixes them; `frame` keeps apart two questions that would give
 *     each other away (four are about where someone lives). `kind` is unchanged and
 *     is still what each answer records.
 *
 * ONE ORDER ONLY. The game marks one order right, so every question was
 * checked for a second order of its tiles that is also good English. Two
 * kinds of order are not counted: a statement said with a rising voice ("you
 * are ready to go?") and an echo question ("you live where?"). Both are
 * spoken English for surprise or checking; neither is the question form the
 * game teaches, and the uninverted question is the commonest learner error it
 * exists to correct. Three explanations say so ("Are you happy here?", "Are
 * you ready to go?", "Has the film started?"); the others do not, and none
 * mentions the echo question. Counted on 31 October 2026, 114 questions can
 * be built in one of these orders (60 as a statement, 54 as an echo
 * question), and 22 more as a statement with a stressed "do" ("you do like
 * pizza?"); the page marks each "Not quite" and shows the question, without
 * calling it wrong English. Whether that stands is the founder's decision.
 * Nor is the stressed "Who did call you?" counted: every object question
 * with "did" shows its answer ("I called my aunt."), which only the object
 * question asks for.
 *
 * Without the capital and the "?", 23 of the 51 earlier questions had a
 * second good order, or nearly did. Each was changed:
 *
 *   - a time or place that can also start the question ("In London, when did
 *     you arrive?"): "When did you arrive in London?", "Were they at home
 *     yesterday?", "Why are you so tired today?", "What are you doing this
 *     weekend?", "Will you be at the office tomorrow?", "Must we finish this
 *     today?" (now "Must we wear a tie?"), "What have you done today?" (now
 *     "What have you bought?"), "What happened at the end?" (now "...to your
 *     bike?"), "Can you help me with this?", "What did they say about the
 *     plan?", "Who did you meet at the conference?" and "Who is knocking at
 *     the door?" (now "Who is making that noise?") lost the movable part;
 *   - a word that can move: "please" ("Please could you repeat that?"),
 *     "already" ("They've already left") and "yet" ("Have they yet
 *     arrived?", formal but correct; now "Has the film started?");
 *   - "How often do you go to the gym?" could split as "How do you go to the
 *     gym often?", and is removed;
 *   - "Which team won the match?" could become "Which match won the team?",
 *     and is now "Which team won?";
 *   - two tags with "not" could become formal full tags: "She does eat meat,
 *     does she not?" and "He did call you, did he not?". They are now "She
 *     eats meat, doesn't she?" and "He called you, didn't he?", whose words
 *     make no other tag;
 *   - four indirect questions had a spoken second order or a second meaning:
 *     "Where is the station, do you know?", "How could you tell me this
 *     works?", "Why do you know she left so early?" and "What time is it, do
 *     you have any idea?". They are replaced by "Do you know if...?"
 *     questions, whose inside part has an ordinary verb and nothing to move.
 *
 * The other 28 are unchanged; many gained an answer to show.
 *
 * CHECKED (31 October 2026) by a second reader, as the founder decided:
 *
 *   - "Do you like the teachers?" (Jane Eyre) had a second good order, "Do
 *     the teachers like you?", and no answer shown to rule it out. It is
 *     replaced by Jane's next real question to Helen Burns, "Is he a good
 *     man?", which has one;
 *   - 18 questions moved from tier 3 to tier 2, because the bank already
 *     teaches the same grammar at tier 2 and they add nothing to it: six
 *     object questions with "did" (as "What did they say?"), five subject
 *     questions (as "Who broke the window?"; the frames that pair "Who called
 *     you?" with "Who did you call?" keep the two apart, so they are never
 *     played side by side), six present perfect questions (as "What has he
 *     done?") and "Have you ever eaten sushi?" (as "Have you ever been to
 *     Spain?"). Tier 3 now holds 62, above the quarter the bank must keep, and
 *     a later pass should add new B1 questions to bring it back to 80. A tier
 *     sets the XP a right answer earns (src/lib/games/progression.ts), so
 *     these now earn 15, not 20, like their tier 2 twins;
 *   - all 45 real questions were found in their held texts word for word,
 *     the three under four words ("Who are you?", "Who is there?", "Where is
 *     Mollie?") by hand, since the real-line test reads four words or more,
 *     and each speaker the explanations name is the book's.
 */

export type QuestionKind =
  | 'do-does-did'
  | 'be-questions'
  | 'modal-verbs'
  | 'present-perfect'
  | 'subject-questions'
  | 'question-tags'
  | 'indirect-questions'

export interface QuestionItem {
  /** The full, correct question (UK English). Its words are the tiles: see tilesOf. */
  correct: string
  /** What the question tests, recorded with each answer. */
  kind: QuestionKind
  /** The question's shape, which the dealer spreads: at most two of one in a round. */
  group: string
  /** 1 A1, 2 A2, 3 B1. */
  tier: 1 | 2 | 3
  /** The answer to the question, shown before the student builds it. */
  reply?: string
  /** A real question from a book: the book and its author, shown with the tiles. */
  source?: string
  /** What the question turns on, where another question shares it: never two in one round. */
  frame?: string
}

const CAROL = 'A Christmas Carol by Charles Dickens'
const EYRE = 'Jane Eyre by Charlotte Brontë'
const JEKYLL = 'Dr Jekyll and Mr Hyde by Robert Louis Stevenson'
const PRIDE = 'Pride and Prejudice by Jane Austen'
const EXPECTATIONS = 'Great Expectations by Charles Dickens'
const FARM = 'Animal Farm by George Orwell'
const FRANKENSTEIN = 'Frankenstein by Mary Shelley'
const MARNER = 'Silas Marner by George Eliot'

export const QUESTION_BANK: QuestionItem[] = [
  // ── Tier 1 (A1) ───────────────────────────────────────────────────────────
  {
    correct: 'Who are you?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    source: CAROL,
    frame: 'who are you',
  },
  { correct: 'What is the matter?', kind: 'be-questions', group: 'be-wh', tier: 1, source: CAROL },
  {
    correct: 'What do you call this?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    source: CAROL,
  },
  {
    correct: 'Would you like to go to school?',
    kind: 'modal-verbs',
    group: 'would-like',
    tier: 1,
    source: EYRE,
    frame: 'would like',
  },
  {
    correct: 'Does he live here?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    source: EYRE,
    frame: 'live',
  },
  {
    correct: 'Is he a good man?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    source: EYRE,
  },
  {
    correct: 'Are you happy here?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    source: EYRE,
  },
  {
    correct: 'Is your book interesting?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    source: EYRE,
  },
  {
    correct: 'Do you want to see it?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    source: JEKYLL,
    frame: 'want',
  },
  {
    correct: 'What is his name?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    source: PRIDE,
    frame: 'name',
  },
  {
    correct: 'Can I have the carriage?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 1,
    source: PRIDE,
  },
  {
    correct: 'Is my father in town?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    source: PRIDE,
  },
  {
    correct: 'How are you all?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    source: PRIDE,
    frame: 'how are',
  },
  {
    correct: 'What do you think?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    source: PRIDE,
    frame: 'think',
  },
  {
    correct: 'Do you hear that?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    source: EXPECTATIONS,
  },
  {
    correct: 'Are you ready to play?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    source: EXPECTATIONS,
    frame: 'ready',
  },
  {
    correct: 'Can I help you?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 1,
    source: EXPECTATIONS,
    frame: 'help',
  },
  {
    correct: 'What do you want?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    source: EXPECTATIONS,
    frame: 'want',
  },
  { correct: 'Where is Mollie?', kind: 'be-questions', group: 'be-wh', tier: 1, source: FARM },
  { correct: 'Who is there?', kind: 'be-questions', group: 'be-wh', tier: 1, source: FRANKENSTEIN },
  {
    correct: 'What do you mean?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    source: FRANKENSTEIN,
    frame: 'mean',
  },
  {
    correct: 'Where do you live?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: 'I live in Leeds.',
    frame: 'live',
  },
  {
    correct: 'What do these words mean?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    frame: 'mean',
  },
  {
    correct: 'What does this word mean?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    frame: 'mean',
  },
  {
    correct: 'Are you ready to go?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    frame: 'ready',
  },
  { correct: 'Is this seat free?', kind: 'be-questions', group: 'be-yes-no', tier: 1 },
  {
    correct: 'How are your parents?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: 'They are very well, thanks.',
    frame: 'how are',
  },
  {
    correct: 'Would you like some tea?',
    kind: 'modal-verbs',
    group: 'would-like',
    tier: 1,
    frame: 'would like',
  },
  {
    correct: 'Can she speak three languages?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 1,
    reply: 'Yes, she can: English, Arabic and French.',
    frame: 'speak',
  },
  { correct: 'How do you spell your surname?', kind: 'do-does-did', group: 'do-wh', tier: 1 },
  {
    correct: 'Where does your sister work?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: 'She works in a hospital.',
    frame: 'work',
  },
  { correct: 'Can you help me?', kind: 'modal-verbs', group: 'can', tier: 1, frame: 'help' },
  {
    correct: "What's your name?",
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "My name's Ola.",
    frame: 'name',
  },
  {
    correct: 'How old are you?',
    kind: 'be-questions',
    group: 'how',
    tier: 1,
    reply: "I'm twelve.",
    frame: 'how old',
  },
  {
    correct: 'How old is your brother?',
    kind: 'be-questions',
    group: 'how',
    tier: 1,
    reply: "He's sixteen.",
    frame: 'how old',
  },
  {
    correct: 'Where are you from?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "I'm from Poland.",
  },
  {
    correct: 'Where is the library?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "It's next to the gym.",
  },
  { correct: 'Is it cold outside?', kind: 'be-questions', group: 'be-yes-no', tier: 1 },
  {
    correct: 'Are you hungry?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    reply: 'Yes, I am. I could eat a horse.',
  },
  {
    correct: 'Is he your brother?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    reply: "Yes, he is. He's older than me.",
  },
  { correct: 'Are they your friends?', kind: 'be-questions', group: 'be-yes-no', tier: 1 },
  {
    correct: 'Is it your birthday?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    reply: "Yes, I'm thirteen today.",
    frame: 'birthday',
  },
  {
    correct: 'Do you like pizza?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    reply: 'Yes, I love it.',
    frame: 'like',
  },
  {
    correct: 'Does she like cats?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    reply: "No, she doesn't. She likes dogs.",
    frame: 'like',
  },
  {
    correct: 'Do you have a pet?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    reply: 'Yes, a rabbit called Snowy.',
  },
  { correct: 'Do you play football?', kind: 'do-does-did', group: 'do-yes-no', tier: 1 },
  {
    correct: 'Does he speak English?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    frame: 'speak',
  },
  {
    correct: 'Do they live near you?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    frame: 'live',
  },
  {
    correct: 'What sports do you like?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: 'I like tennis and swimming.',
  },
  {
    correct: 'What time is it?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "It's half past three.",
    frame: 'what time',
  },
  {
    correct: 'What time do you get up?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: "At seven o'clock.",
    frame: 'what time',
  },
  {
    correct: 'Where do you go to school?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: 'I go to Park Lane School.',
    frame: 'to school',
  },
  {
    correct: 'When is your birthday?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "It's on 4 June.",
    frame: 'birthday',
  },
  {
    correct: 'Who is your teacher?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: 'Mr Okafor.',
    frame: 'teacher',
  },
  {
    correct: 'How many people are in your family?',
    kind: 'be-questions',
    group: 'how',
    tier: 1,
    reply: 'Five: my parents, my two brothers and me.',
  },
  {
    correct: 'Can you ride a bike?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 1,
    reply: 'Yes, I can.',
  },
  {
    correct: 'Can I go to the toilet?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 1,
    frame: 'toilet',
  },
  { correct: 'Can we play outside?', kind: 'modal-verbs', group: 'can', tier: 1 },
  { correct: 'Are there any biscuits?', kind: 'be-questions', group: 'there', tier: 1 },
  { correct: 'Is there any milk?', kind: 'be-questions', group: 'there', tier: 1 },
  {
    correct: 'Who is that boy?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "That's my cousin, Adam.",
  },
  { correct: 'What is your phone number?', kind: 'be-questions', group: 'be-wh', tier: 1 },
  {
    correct: 'Where are my keys?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "They're on the table.",
  },
  {
    correct: 'Do you speak French?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    frame: 'speak',
  },
  {
    correct: 'Is your sister at home?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    reply: "No, she's at work.",
  },
  { correct: 'Are you a student?', kind: 'be-questions', group: 'be-yes-no', tier: 1 },
  {
    correct: 'What does your dad do?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: "He's a bus driver.",
    frame: 'work',
  },
  {
    correct: 'How do you get to school?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: "I walk. It isn't far.",
    frame: 'to school',
  },
  {
    correct: 'Where do your grandparents live?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 1,
    reply: 'They live in Krakow.',
    frame: 'live',
  },
  {
    correct: 'Do you like my new shoes?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    frame: 'like',
  },
  {
    correct: 'Is she your teacher?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    frame: 'teacher',
  },
  {
    correct: 'What colour is your bike?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "It's red.",
  },
  { correct: 'Can you open the door?', kind: 'modal-verbs', group: 'can', tier: 1 },
  {
    correct: 'Would you like a drink?',
    kind: 'modal-verbs',
    group: 'would-like',
    tier: 1,
    frame: 'would like',
  },
  {
    correct: 'What would you like?',
    kind: 'modal-verbs',
    group: 'would-like',
    tier: 1,
    reply: 'A cheese sandwich, please.',
    frame: 'would like',
  },
  {
    correct: "Where's the toilet?",
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    frame: 'toilet',
  },
  {
    correct: 'How much is this?',
    kind: 'be-questions',
    group: 'how',
    tier: 1,
    reply: "It's two pounds.",
  },
  {
    correct: 'What day is it?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 1,
    reply: "It's Thursday.",
  },
  {
    correct: 'Is your mum a teacher?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 1,
    frame: 'teacher',
  },
  {
    correct: 'Do you walk to school?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 1,
    frame: 'to school',
  },
  // @@TIER1_END

  // ── Tier 2 (A2) ───────────────────────────────────────────────────────────
  {
    correct: 'When will you come to see me?',
    kind: 'modal-verbs',
    group: 'will',
    tier: 2,
    source: CAROL,
  },
  {
    correct: 'Why did you get married?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    source: CAROL,
  },
  {
    correct: 'What do you want with me?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 2,
    source: CAROL,
    frame: 'want',
  },
  {
    correct: 'Why do you doubt your senses?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 2,
    source: CAROL,
  },
  {
    correct: 'Will you do me that favour?',
    kind: 'modal-verbs',
    group: 'will',
    tier: 2,
    source: CAROL,
  },
  {
    correct: 'What does he look like?',
    kind: 'do-does-did',
    group: 'what-like',
    tier: 2,
    source: EYRE,
  },
  {
    correct: 'What is it about?',
    kind: 'be-questions',
    group: 'preposition',
    tier: 2,
    source: EYRE,
  },
  {
    correct: 'Can you tell me some of them?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 2,
    source: EYRE,
  },
  {
    correct: 'How did you know me?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    source: JEKYLL,
  },
  {
    correct: 'Have you seen him?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    source: JEKYLL,
  },
  {
    correct: 'What has he done?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    source: JEKYLL,
    frame: 'what has he done',
  },
  {
    correct: 'Are you pleased with Kent?',
    kind: 'be-questions',
    group: 'be-yes-no',
    tier: 2,
    source: PRIDE,
  },
  {
    correct: 'Are you going much farther?',
    kind: 'be-questions',
    group: 'continuous',
    tier: 2,
    source: PRIDE,
  },
  {
    correct: 'What is your own opinion?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 2,
    source: PRIDE,
  },
  {
    correct: 'What do you think of her?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 2,
    source: EXPECTATIONS,
    frame: 'think',
  },
  {
    correct: 'Does he like the trade?',
    kind: 'do-does-did',
    group: 'do-yes-no',
    tier: 2,
    source: EXPECTATIONS,
  },
  {
    correct: 'What did you say?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    source: EXPECTATIONS,
    frame: 'say',
  },
  {
    correct: 'How can I get the money?',
    kind: 'modal-verbs',
    group: 'can',
    tier: 2,
    source: MARNER,
  },
  {
    correct: 'What do you intend to do?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 2,
    source: FRANKENSTEIN,
  },
  {
    correct: 'What did this mean?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    source: FRANKENSTEIN,
    frame: 'mean',
  },
  {
    correct: 'What time does the train leave?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 2,
    reply: 'At ten past nine.',
  },
  {
    correct: 'When did you arrive?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'I arrived on Monday.',
  },
  {
    correct: 'Why does she always arrive late?',
    kind: 'do-does-did',
    group: 'do-wh',
    tier: 2,
    reply: 'Because she misses the bus.',
  },
  {
    correct: 'What did they say?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'They said yes.',
    frame: 'say',
  },
  {
    correct: 'Which book do you recommend?',
    kind: 'do-does-did',
    group: 'which-whose',
    tier: 2,
    reply: "Try Treasure Island. It's brilliant.",
  },
  {
    correct: 'How much does this jacket cost?',
    kind: 'do-does-did',
    group: 'how',
    tier: 2,
    reply: 'It costs forty pounds.',
  },
  {
    correct: 'How long did the meeting last?',
    kind: 'do-does-did',
    group: 'how',
    tier: 2,
    reply: 'About an hour.',
  },
  {
    correct: 'Is she coming to the party?',
    kind: 'be-questions',
    group: 'continuous',
    tier: 2,
    reply: "Yes, she is. She's bringing a cake.",
    frame: 'party',
  },
  {
    correct: 'Were they at home?',
    kind: 'be-questions',
    group: 'was-were',
    tier: 2,
    reply: 'No, they were at the cinema.',
  },
  {
    correct: 'Why are you so tired?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 2,
    reply: 'I went to bed late.',
  },
  {
    correct: 'What are you doing?',
    kind: 'be-questions',
    group: 'continuous',
    tier: 2,
    reply: "I'm making a cake.",
  },
  {
    correct: 'Should I bring anything to the party?',
    kind: 'modal-verbs',
    group: 'modal',
    tier: 2,
    reply: 'Just some crisps, if you like.',
    frame: 'party',
  },
  {
    correct: 'May I open the window?',
    kind: 'modal-verbs',
    group: 'modal',
    tier: 2,
    frame: 'window',
  },
  {
    correct: 'Will you be at home?',
    kind: 'modal-verbs',
    group: 'will',
    tier: 2,
    reply: 'Yes, all evening.',
  },
  {
    correct: 'Has he finished his homework?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: "Not yet. He's still working on it.",
  },
  {
    correct: 'Have you ever been to Spain?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: 'Yes, twice.',
  },
  {
    correct: 'Who broke the window?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'Leo did. It was an accident.',
  },
  {
    correct: 'Which team won?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'The blue team.',
  },
  {
    correct: 'What happened to your bike?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'The tyre went flat.',
  },
  { correct: 'Could you repeat that?', kind: 'modal-verbs', group: 'modal', tier: 2 },
  {
    correct: 'Where did you buy that bag?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'In a shop in town.',
  },
  { correct: 'Are there any tickets left?', kind: 'be-questions', group: 'there', tier: 2 },
  {
    correct: 'Did you have a nice weekend?',
    kind: 'do-does-did',
    group: 'did-yes-no',
    tier: 2,
    reply: 'Yes, thanks. It was great.',
    frame: 'weekend',
  },
  {
    correct: 'Did she call you?',
    kind: 'do-does-did',
    group: 'did-yes-no',
    tier: 2,
    reply: 'Yes, she called last night.',
  },
  {
    correct: 'Where did you stay?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'In a small hotel by the sea.',
  },
  {
    correct: 'How was your weekend?',
    kind: 'be-questions',
    group: 'was-were',
    tier: 2,
    reply: 'Great, thanks.',
    frame: 'weekend',
  },
  {
    correct: 'Was it expensive?',
    kind: 'be-questions',
    group: 'was-were',
    tier: 2,
    reply: 'No, it was really cheap.',
  },
  {
    correct: 'Are you going to watch the match?',
    kind: 'be-questions',
    group: 'going-to',
    tier: 2,
  },
  {
    correct: 'What are you going to wear?',
    kind: 'be-questions',
    group: 'going-to',
    tier: 2,
    reply: 'My blue dress.',
  },
  {
    correct: 'When are you going to tell her?',
    kind: 'be-questions',
    group: 'going-to',
    tier: 2,
    reply: 'Tomorrow, I think.',
  },
  {
    correct: 'Is it going to rain?',
    kind: 'be-questions',
    group: 'going-to',
    tier: 2,
    reply: 'Yes, look at those clouds.',
  },
  { correct: 'Are you listening to me?', kind: 'be-questions', group: 'continuous', tier: 2 },
  {
    correct: 'What is she reading?',
    kind: 'be-questions',
    group: 'continuous',
    tier: 2,
    reply: 'A book about space.',
  },
  {
    correct: 'Why is the baby crying?',
    kind: 'be-questions',
    group: 'continuous',
    tier: 2,
    reply: "She's hungry.",
  },
  {
    correct: 'Who is she talking to?',
    kind: 'be-questions',
    group: 'preposition',
    tier: 2,
    reply: 'Her best friend.',
  },
  {
    correct: "What's the weather like?",
    kind: 'be-questions',
    group: 'what-like',
    tier: 2,
    reply: 'Cold and windy.',
  },
  {
    correct: 'What is your school like?',
    kind: 'be-questions',
    group: 'what-like',
    tier: 2,
    reply: "It's big and friendly.",
  },
  {
    correct: 'How far is the station?',
    kind: 'be-questions',
    group: 'how',
    tier: 2,
    reply: "About ten minutes' walk.",
  },
  {
    correct: 'How long is the film?',
    kind: 'be-questions',
    group: 'how',
    tier: 2,
    reply: 'Two hours.',
    frame: 'film',
  },
  {
    correct: 'How much water do you drink?',
    kind: 'do-does-did',
    group: 'how',
    tier: 2,
    reply: 'About six glasses a day.',
  },
  {
    correct: 'Which bus goes to Leeds?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'The number 36.',
  },
  {
    correct: 'Whose coat is on the floor?',
    kind: 'be-questions',
    group: 'which-whose',
    tier: 2,
    reply: "It's mine. Sorry.",
  },
  {
    correct: 'Who wants an ice cream?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'Me, please.',
  },
  {
    correct: 'Who lives next door?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'An old man with a dog.',
  },
  {
    correct: 'What makes you happy?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'Music and my friends.',
  },
  { correct: 'Should I call the doctor?', kind: 'modal-verbs', group: 'modal', tier: 2 },
  { correct: 'Could you carry my bag?', kind: 'modal-verbs', group: 'modal', tier: 2 },
  {
    correct: 'Would you like to come?',
    kind: 'modal-verbs',
    group: 'would-like',
    tier: 2,
    frame: 'would like',
  },
  { correct: 'Can I borrow your pen?', kind: 'modal-verbs', group: 'can', tier: 2 },
  {
    correct: 'Shall we go to the park?',
    kind: 'modal-verbs',
    group: 'modal',
    tier: 2,
    reply: "Good idea. Let's go.",
  },
  {
    correct: 'Shall I open the window?',
    kind: 'modal-verbs',
    group: 'modal',
    tier: 2,
    frame: 'window',
  },
  {
    correct: 'Were your friends at the party?',
    kind: 'be-questions',
    group: 'was-were',
    tier: 2,
    frame: 'party',
  },
  {
    correct: 'Did you enjoy the film?',
    kind: 'do-does-did',
    group: 'did-yes-no',
    tier: 2,
    frame: 'film',
  },
  { correct: 'Did your team win?', kind: 'do-does-did', group: 'did-yes-no', tier: 2 },
  {
    correct: 'Where did you find it?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'Under the sofa.',
  },
  {
    correct: 'When did you start learning English?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'Two years ago.',
  },
  {
    correct: 'What time did you go to bed?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    reply: 'At eleven. Too late.',
  },
  {
    correct: 'What did your teacher say?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 2,
    frame: 'say',
  },
  {
    correct: 'Must we wear a tie?',
    kind: 'modal-verbs',
    group: 'modal',
    tier: 2,
    reply: "Yes, it's the school rule.",
  },
  {
    correct: 'Was there a lot of traffic?',
    kind: 'be-questions',
    group: 'there',
    tier: 2,
    reply: 'Yes, we were stuck for an hour.',
  },
  // @@TIER2_END

  // ── Tier 3 (B1) ───────────────────────────────────────────────────────────
  {
    correct: 'What has he done with his money?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 3,
    source: CAROL,
    frame: 'what has he done',
  },
  {
    correct: 'How long has she been such a favourite?',
    kind: 'present-perfect',
    group: 'how-long',
    tier: 3,
    source: PRIDE,
  },
  {
    correct: 'What sort of a girl is Miss Darcy?',
    kind: 'be-questions',
    group: 'be-wh',
    tier: 3,
    source: PRIDE,
  },
  {
    correct: 'Is it written down anywhere?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    source: FARM,
  },
  {
    correct: 'How long have you known her?',
    kind: 'present-perfect',
    group: 'how-long',
    tier: 3,
    reply: 'Since we were five.',
  },
  {
    correct: 'Where was the meeting held?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    reply: 'In the school hall.',
  },
  {
    correct: 'What have you bought?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: "I've bought a new jumper.",
  },
  {
    correct: 'Has the film started?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: 'Yes, about five minutes ago.',
  },
  {
    correct: 'Who is making that noise?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 3,
    reply: 'The boys next door.',
  },
  {
    correct: "You're coming, aren't you?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'Yes, of course I am.',
  },
  {
    correct: "She eats meat, doesn't she?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'Yes, she does. She loves chicken.',
  },
  { correct: "It's a lovely day, isn't it?", kind: 'question-tags', group: 'tag', tier: 3 },
  {
    correct: "They've left, haven't they?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'Yes, they went an hour ago.',
  },
  {
    correct: 'You cannot swim, can you?',
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: "No, I can't. I'm learning.",
  },
  {
    correct: "He called you, didn't he?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'Yes, he did. He rang this morning.',
  },
  {
    correct: 'Who did you meet?',
    kind: 'do-does-did',
    group: 'object',
    tier: 2,
    reply: 'I met my cousin.',
  },
  {
    correct: 'Do you know if she likes pizza?',
    kind: 'indirect-questions',
    group: 'indirect',
    tier: 3,
    reply: 'Yes, she loves it.',
  },
  {
    correct: 'How long have you lived here?',
    kind: 'present-perfect',
    group: 'how-long',
    tier: 3,
    reply: 'Since I was six.',
  },
  {
    correct: 'How long have you been learning English?',
    kind: 'present-perfect',
    group: 'how-long',
    tier: 3,
    reply: 'For two years.',
  },
  {
    correct: 'How long have you been waiting?',
    kind: 'present-perfect',
    group: 'how-long',
    tier: 3,
    reply: 'About twenty minutes.',
  },
  {
    correct: 'Have you ever eaten sushi?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: 'No, never. Is it nice?',
  },
  {
    correct: 'Has anyone seen my phone?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: "Yes, it's on the sofa.",
  },
  {
    correct: 'Where have you been?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: "At the dentist's.",
  },
  {
    correct: 'What have you done to your hair?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 3,
    reply: "I've cut it short.",
  },
  {
    correct: 'Who has eaten my sandwich?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 3,
    reply: 'Sorry, I have. I was hungry.',
  },
  {
    correct: 'Why have you stopped?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: "I'm tired.",
  },
  {
    correct: 'How many times have you seen it?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 3,
    reply: 'Three times.',
  },
  {
    correct: 'Have you met my sister?',
    kind: 'present-perfect',
    group: 'perfect',
    tier: 2,
    reply: "No, I haven't. Hello.",
  },
  {
    correct: 'What were you doing?',
    kind: 'be-questions',
    group: 'past-continuous',
    tier: 3,
    reply: 'I was reading in my room.',
  },
  {
    correct: 'Where were you going?',
    kind: 'be-questions',
    group: 'past-continuous',
    tier: 3,
    reply: 'To the shops.',
  },
  {
    correct: 'Who were you talking to?',
    kind: 'be-questions',
    group: 'preposition',
    tier: 3,
    reply: 'My cousin in Spain.',
  },
  {
    correct: 'Was it raining?',
    kind: 'be-questions',
    group: 'past-continuous',
    tier: 3,
    reply: 'Yes, it was pouring.',
  },
  {
    correct: 'When was this bridge built?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    reply: 'In 1890.',
  },
  {
    correct: 'Where were these photos taken?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    reply: 'At the seaside.',
  },
  {
    correct: 'Who was this book written by?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    reply: 'Charlotte Brontë.',
  },
  {
    correct: 'How is cheese made?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    reply: 'From milk.',
  },
  { correct: 'Is English spoken here?', kind: 'be-questions', group: 'passive', tier: 3 },
  {
    correct: 'Was anyone hurt?',
    kind: 'be-questions',
    group: 'passive',
    tier: 3,
    reply: 'No, luckily.',
  },
  {
    correct: 'Has the window been fixed?',
    kind: 'present-perfect',
    group: 'passive',
    tier: 3,
    reply: 'Not yet.',
  },
  {
    correct: 'Who called you?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'My aunt called me.',
    frame: 'call',
  },
  {
    correct: 'Who did you call?',
    kind: 'do-does-did',
    group: 'object',
    tier: 2,
    reply: 'I called my aunt.',
    frame: 'call',
  },
  {
    correct: 'Who told you?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'Sam told me.',
    frame: 'tell',
  },
  {
    correct: 'Who did you tell?',
    kind: 'do-does-did',
    group: 'object',
    tier: 2,
    reply: 'I told my mum.',
    frame: 'tell',
  },
  {
    correct: 'Who won the race?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'Amira won it.',
    frame: 'win',
  },
  {
    correct: 'What did you win?',
    kind: 'do-does-did',
    group: 'object',
    tier: 2,
    reply: 'I won a medal.',
    frame: 'win',
  },
  {
    correct: 'Who likes chocolate?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'Everyone does.',
  },
  {
    correct: 'What did she buy?',
    kind: 'do-does-did',
    group: 'object',
    tier: 2,
    reply: 'She bought a new coat.',
  },
  {
    correct: 'Who saw you?',
    kind: 'subject-questions',
    group: 'subject',
    tier: 2,
    reply: 'My teacher saw me.',
    frame: 'see',
  },
  {
    correct: 'Who did you see?',
    kind: 'do-does-did',
    group: 'object',
    tier: 2,
    reply: 'I saw my teacher.',
    frame: 'see',
  },
  {
    correct: "You live near here, don't you?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'Yes, just round the corner.',
  },
  {
    correct: "She's your sister, isn't she?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: "Yes, she's two years older.",
  },
  {
    correct: "You'll be there, won't you?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'Of course I will.',
  },
  {
    correct: "You've never been there, have you?",
    kind: 'question-tags',
    group: 'tag',
    tier: 3,
    reply: 'No, never.',
  },
  {
    correct: "Why didn't you call me?",
    kind: 'do-does-did',
    group: 'negative',
    tier: 3,
    reply: 'My phone was dead.',
  },
  {
    correct: "Don't you like it?",
    kind: 'do-does-did',
    group: 'negative',
    tier: 3,
    reply: "No, sorry. It's too sweet for me.",
  },
  {
    correct: "Isn't it beautiful?",
    kind: 'be-questions',
    group: 'negative',
    tier: 3,
    reply: "Yes, it's amazing.",
  },
  {
    correct: "Why isn't she here?",
    kind: 'be-questions',
    group: 'negative',
    tier: 3,
    reply: "She's ill.",
  },
  {
    correct: "Why can't you come?",
    kind: 'modal-verbs',
    group: 'negative',
    tier: 3,
    reply: 'I have to look after my brother.',
  },
  {
    correct: 'Do you know if they won?',
    kind: 'indirect-questions',
    group: 'indirect',
    tier: 3,
    reply: 'Yes, they won three nil.',
  },
  {
    correct: 'Do you know if he plays chess?',
    kind: 'indirect-questions',
    group: 'indirect',
    tier: 3,
    reply: "I think so. He's in the chess club.",
  },
  {
    correct: "Do you know if she's coming?",
    kind: 'indirect-questions',
    group: 'indirect',
    tier: 3,
    reply: "No idea. I'll ask her.",
  },
  {
    correct: 'Who are you waiting for?',
    kind: 'be-questions',
    group: 'preposition',
    tier: 3,
    reply: "My brother. He's always late.",
    frame: 'who are you',
  },
  {
    correct: 'Who does this bag belong to?',
    kind: 'do-does-did',
    group: 'preposition',
    tier: 3,
    reply: "It's Sam's.",
  },
  {
    correct: 'Who did you go with?',
    kind: 'do-does-did',
    group: 'preposition',
    tier: 3,
    reply: 'With my cousins.',
  },
  {
    correct: 'Who is this present for?',
    kind: 'be-questions',
    group: 'preposition',
    tier: 3,
    reply: "It's for my mum.",
  },
  {
    correct: 'What is this button for?',
    kind: 'be-questions',
    group: 'preposition',
    tier: 3,
    reply: 'It turns the machine off.',
  },
  {
    correct: 'Did you use to live here?',
    kind: 'do-does-did',
    group: 'used-to',
    tier: 3,
    reply: 'Yes, when I was little.',
  },
  {
    correct: 'Where did you use to go to school?',
    kind: 'do-does-did',
    group: 'used-to',
    tier: 3,
    reply: 'In Lagos, before we moved.',
  },
  {
    correct: 'What games did you use to play?',
    kind: 'do-does-did',
    group: 'used-to',
    tier: 3,
    reply: 'Hide and seek, mostly.',
  },
  {
    correct: 'What should I do?',
    kind: 'modal-verbs',
    group: 'modal-advice',
    tier: 3,
    reply: 'Tell your teacher.',
  },
  {
    correct: 'Could it be true?',
    kind: 'modal-verbs',
    group: 'modal-advice',
    tier: 3,
    reply: "Maybe. Let's check.",
  },
  {
    correct: 'Would you mind closing the door?',
    kind: 'modal-verbs',
    group: 'modal-advice',
    tier: 3,
    reply: 'Not at all.',
  },
  {
    correct: 'How could you forget?',
    kind: 'modal-verbs',
    group: 'modal-advice',
    tier: 3,
    reply: "I'm so sorry.",
  },
  {
    correct: 'What would you do?',
    kind: 'modal-verbs',
    group: 'modal-advice',
    tier: 3,
    reply: "I'd tell the truth.",
  },
  {
    correct: 'Who should I ask?',
    kind: 'modal-verbs',
    group: 'modal-advice',
    tier: 3,
    reply: 'Ask Mrs Hill in the office.',
  },
  {
    correct: 'How long does it take to get there?',
    kind: 'do-does-did',
    group: 'how',
    tier: 3,
    reply: 'About half an hour.',
  },
  {
    correct: 'Why did nobody tell me?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 3,
    reply: 'We thought you knew.',
  },
  {
    correct: 'What did you think of the film?',
    kind: 'do-does-did',
    group: 'did-wh',
    tier: 3,
    reply: 'It was brilliant.',
  },
  {
    correct: 'Which one do you want?',
    kind: 'do-does-did',
    group: 'which-whose',
    tier: 3,
    reply: 'The blue one, please.',
  },
  {
    correct: 'How much do I owe you?',
    kind: 'do-does-did',
    group: 'how',
    tier: 3,
    reply: 'Three pounds fifty.',
  },
  // @@TIER3_END
]

/**
 * The tiles a question is built from: its words, with no question mark and no
 * commas, and the first word in small letters (unless it is "I", which always
 * has a capital). No question here starts with a name, so the capital that
 * marked the first word, and the "?" that marked the last, no longer give
 * either away (24 October 2026). The page adds the capital and the question
 * mark to whatever the student builds.
 */
export function tilesOf(item: QuestionItem): string[] {
  return item.correct
    .replace(/\?$/, '')
    .split(/\s+/)
    .map((w) => w.replace(/,$/, ''))
    .map((w, i) => (i === 0 && !/^I(\b|')/.test(w) ? w.charAt(0).toLowerCase() + w.slice(1) : w))
}

export const BANK: GameBank<QuestionItem> = {
  slug: 'question-formation',
  items: QUESTION_BANK,
  // No two questions are the same, and the question is what the student builds.
  key: (q) => q.correct,
  answer: (q) => q.correct,
  // The student builds the question from scrambled words: there are no options.
  options: () => null,
  tag: (q) => q.kind,
  tier: (q) => q.tier,
  group: (q) => q.group,
  facts: (q) => (q.frame ? [`frame:${q.frame}`] : []),
  deepened: '2026-10-24',
}
