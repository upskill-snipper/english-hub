import type { GameBank } from '@/lib/games/explanations/types'

/**
 * Build the Question: tap the scrambled words into the right order to make an
 * English question (do, does and did; be; modal verbs; the present perfect;
 * subject questions; question tags; indirect questions).
 *
 * Moved out of src/app/games/question-formation/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * game marks one word order right, so each sentence must be one a fluent
 * speaker would write. Five were not:
 *
 *   - four question tags were printed in a form nobody uses: "You are coming,
 *     are not you?", "It is a lovely day, is not it?", "They have left already,
 *     have not they?" and "You can swim, can not you?". The tag is "aren't
 *     you", "isn't it", "haven't they" and "can't you" (the full form puts the
 *     pronoun before "not": "are you not"). A student who built the printed
 *     version was marked right for a sentence no one says;
 *   - and the same four sets of words built a second question, which was
 *     marked wrong. Moving the "not" from the tag to the statement gives a
 *     negative statement with a positive tag, which is just as correct: "You
 *     are not coming, are you?" then, and "You aren't coming, are you?" once
 *     the tags were first contracted. So the statement's verb is now joined to
 *     its subject, and "You're coming, aren't you?", "It's a lovely day, isn't
 *     it?" and "They've left already, haven't they?" can be built only one way.
 *     "Can" has no short form joined to its subject, so that question is now
 *     negative, "You cannot swim, can you?": its words make no other question,
 *     because "cannot you" is never a tag. (Found by the second reader, 16
 *     October 2026.)
 *   - "I wonder why she left so early?" is a statement with a question mark: it
 *     is written with a full stop. The game is called Build the Question and
 *     its note teaches the word order of an indirect question, so it is now "Do
 *     you know why she left so early?", a real question with the same order.
 *
 * Each question also carries its `kind`, from the section heading it sat under
 * on the page (the last four sat under "More everyday questions" and take the
 * kind of their grammar: three with do, does or did, one with be), so a
 * student's saved results can say which kind they miss. The questions are
 * otherwise unchanged. `note` is the one-line note the page used to show after
 * an answer; the explanation panel replaces it, and it is kept here as the
 * record of what the page said.
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
  /** The full, correct question (UK English). */
  correct: string
  /** A short grammar note shown after answering. */
  note: string
  /** What the question tests, from the section heading it sat under. */
  kind: QuestionKind
}

function group(kind: QuestionKind, items: Omit<QuestionItem, 'kind'>[]): QuestionItem[] {
  return items.map((item) => ({ ...item, kind }))
}

// Words are derived by splitting `correct`, then shuffled at runtime.
export const QUESTION_BANK: QuestionItem[] = [
  // ── Wh- questions with do/does/did support ──
  ...group('do-does-did', [
    { correct: 'Where do you live?', note: 'Wh- word + auxiliary "do" + subject + base verb.' },
    {
      correct: 'What time does the train leave?',
      note: '"Does" is used for third-person singular subjects.',
    },
    {
      correct: 'When did you arrive in London?',
      note: '"Did" carries the past tense, so the main verb stays in its base form.',
    },
    {
      correct: 'Why does she always arrive late?',
      note: 'Adverbs of frequency sit between the subject and the main verb.',
    },
    {
      correct: 'How often do you go to the gym?',
      note: '"How often" asks about frequency; it takes "do" + base verb.',
    },
    {
      correct: 'What did they say about the plan?',
      note: '"Did" + base verb "say" forms the past simple question.',
    },
    {
      correct: 'Which book do you recommend?',
      note: '"Which" + noun begins a question about a limited choice.',
    },
    {
      correct: 'How much does this jacket cost?',
      note: '"How much" is used with uncountable ideas like price.',
    },
    {
      correct: 'Who did you meet at the conference?',
      note: 'When "who" is the object, we still need "did" + base verb.',
    },
    {
      correct: 'How long did the meeting last?',
      note: '"How long" asks about duration; "did" forms the past question.',
    },
    {
      correct: 'Where does your sister work?',
      note: 'Third-person singular "sister" requires "does".',
    },
    {
      correct: 'What do these words mean?',
      note: 'Plural subject "words" takes "do" + base verb "mean".',
    },
  ]),

  // ── Be / present & past continuous & states ──
  ...group('be-questions', [
    {
      correct: 'Are you ready to go?',
      note: 'With "be", the verb itself moves in front of the subject.',
    },
    {
      correct: 'Is she coming to the party?',
      note: 'Present continuous question: "is" + subject + verb-ing.',
    },
    {
      correct: 'Were they at home yesterday?',
      note: '"Were" is the past form of "be" for plural subjects.',
    },
    {
      correct: 'Why are you so tired today?',
      note: 'Wh- word + "be" + subject for an adjective complement.',
    },
    {
      correct: 'What are you doing this weekend?',
      note: 'Present continuous can describe a future arrangement.',
    },
    {
      correct: 'Where was the meeting held?',
      note: 'Passive past question: "was" + subject + past participle.',
    },
    { correct: 'Is this seat free?', note: 'Yes/no question with "be" + subject + adjective.' },
    { correct: 'How are your parents?', note: '"How" + "be" asks about wellbeing or condition.' },
  ]),

  // ── Modal verbs ──
  ...group('modal-verbs', [
    {
      correct: 'Can you help me with this?',
      note: 'Modals like "can" go before the subject; no "do" is needed.',
    },
    {
      correct: 'Could you repeat that, please?',
      note: '"Could" makes a polite request more formal.',
    },
    {
      correct: 'Should I bring anything to the party?',
      note: '"Should" asks for advice; the main verb stays in base form.',
    },
    { correct: 'Would you like some tea?', note: '"Would you like" is a polite offer.' },
    { correct: 'May I open the window?', note: '"May" asks for formal permission.' },
    {
      correct: 'Will you be at the office tomorrow?',
      note: '"Will" forms questions about the future.',
    },
    {
      correct: 'Must we finish this today?',
      note: '"Must" expresses strong obligation in questions.',
    },
    {
      correct: 'Can she speak three languages?',
      note: 'Modals never take an "-s" for third-person singular.',
    },
  ]),

  // ── Present perfect ──
  ...group('present-perfect', [
    {
      correct: 'Have you ever been to Spain?',
      note: 'Present perfect: "have" + subject + past participle.',
    },
    {
      correct: 'Has he finished his homework?',
      note: 'Third-person singular uses "has" in the present perfect.',
    },
    {
      correct: 'How long have you known her?',
      note: '"How long" + present perfect asks about duration up to now.',
    },
    { correct: 'What have you done today?', note: '"Done" is the past participle of "do" here.' },
    { correct: 'Have they arrived yet?', note: '"Yet" often ends present perfect questions.' },
  ]),

  // ── Subject vs object questions ──
  ...group('subject-questions', [
    {
      correct: 'Who broke the window?',
      note: 'When "who" is the subject, no auxiliary is needed.',
    },
    {
      correct: 'What happened at the end?',
      note: 'Subject question with "what" - no "did" required.',
    },
    {
      correct: 'Who is knocking at the door?',
      note: 'Subject "who" with continuous "is knocking".',
    },
    {
      correct: 'Which team won the match?',
      note: 'Subject question: "which team" acts as the subject.',
    },
  ]),

  // ── Question tags ──
  ...group('question-tags', [
    { correct: "You're coming, aren't you?", note: 'A positive statement takes a negative tag.' },
    {
      correct: 'She does not eat meat, does she?',
      note: 'A negative statement takes a positive tag.',
    },
    {
      correct: "It's a lovely day, isn't it?",
      note: 'The tag mirrors the auxiliary of the main clause.',
    },
    {
      correct: "They've left already, haven't they?",
      note: 'Present perfect statements use a "have" tag.',
    },
    {
      correct: 'You cannot swim, can you?',
      note: 'Modal statements take the same modal in the tag.',
    },
    {
      correct: 'He did not call you, did he?',
      note: 'A negative "did not" clause takes a positive "did" tag.',
    },
  ]),

  // ── Indirect / longer questions ──
  ...group('indirect-questions', [
    {
      correct: 'Do you know where the station is?',
      note: 'In indirect questions the word order stays statement-like.',
    },
    {
      correct: 'Could you tell me how this works?',
      note: 'After "tell me how", use statement word order.',
    },
    {
      correct: 'Do you know why she left so early?',
      note: 'Embedded questions keep subject before verb.',
    },
    {
      correct: 'Do you have any idea what time it is?',
      note: 'No inversion after "what time" in an indirect question.',
    },
  ]),

  // ── More everyday questions ──
  ...group('do-does-did', [
    {
      correct: 'How do you spell your surname?',
      note: '"How" + "do" asks about manner or method.',
    },
    {
      correct: 'What does this word mean?',
      note: 'Singular "word" takes "does" + base verb "mean".',
    },
    {
      correct: 'Where did you buy that bag?',
      note: '"Did" forms the past simple; "buy" stays in base form.',
    },
  ]),

  ...group('be-questions', [
    {
      correct: 'Are there any tickets left?',
      note: '"Are there" questions existence with plural nouns.',
    },
  ]),
]

export const BANK: GameBank<QuestionItem> = {
  slug: 'question-formation',
  items: QUESTION_BANK,
  // No two questions are the same, and the question is what the student builds.
  key: (q) => q.correct,
  answer: (q) => q.correct,
  // The student builds the question from scrambled words: there are no options.
  options: () => null,
  tag: (q) => q.kind,
}
