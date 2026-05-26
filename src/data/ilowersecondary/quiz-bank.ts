/**
 * LEH11 readiness quiz bank - 80 ORIGINAL multiple-choice questions.
 *
 * Every question, snippet and example sentence below is an original work
 * written by The English Hub. NO copyrighted Pearson source-booklet text
 * is reproduced. All qualification facts (AO descriptors, mark grids,
 * exam structure) are faithful to the canonical specification module at
 * `@/lib/ilowersecondary/spec`; where a fact is restated in an option or
 * explanation it matches that module exactly.
 *
 * Categories test readiness for the Pearson Edexcel International Award
 * in Lower Secondary English (LEH11) achievement test.
 */

export type QuizCategory =
  | 'ao-knowledge'
  | 'grammatical-terminology'
  | 'punctuation-effect'
  | 'purpose-identification'
  | 'synonym-in-context'
  | 'exam-format'

export interface QuizQuestion {
  id: string
  category: QuizCategory
  question: string
  /** Exactly four answer options. */
  options: [string, string, string, string]
  /** Index (0-3) of the correct option in `options`. */
  correctIndex: number
  explanation: string
}

export const QUIZ_CATEGORIES: {
  id: QuizCategory
  label: string
  description: string
}[] = [
  {
    id: 'ao-knowledge',
    label: 'Assessment objectives',
    description: 'What each reading and writing assessment objective (RAO/WAO) actually assesses.',
  },
  {
    id: 'grammatical-terminology',
    label: 'Grammatical terminology',
    description:
      'Identify imperative, modal, auxiliary and irregular verbs, word classes and sentence types from an original example.',
  },
  {
    id: 'punctuation-effect',
    label: 'Punctuation effect',
    description: 'The effect a punctuation mark has on the reader within a sentence.',
  },
  {
    id: 'purpose-identification',
    label: 'Purpose identification',
    description:
      'Read a short original snippet and name whether it sets out to argue, describe, explain, inform or persuade.',
  },
  {
    id: 'synonym-in-context',
    label: 'Synonym in context',
    description:
      'Choose the word that could replace the highlighted word without changing the meaning in context.',
  },
  {
    id: 'exam-format',
    label: 'Exam-format facts',
    description:
      'Facts about the LEH11/01 achievement test: timing, marks, sections and question types.',
  },
]

export const QUIZ_BANK: QuizQuestion[] = [
  // ─── AO knowledge (1-14) ────────────────────────────────────────────
  {
    id: 'ao-1',
    category: 'ao-knowledge',
    question:
      'Which assessment objective is targeted when you simply find and copy out a fact that is stated directly in a text?',
    options: ['RAO1', 'RAO2', 'RAO4', 'RAO5'],
    correctIndex: 0,
    explanation:
      'RAO1 is about identifying and retrieving ideas and information from a range of texts - straightforward retrieval of what is explicitly stated.',
  },
  {
    id: 'ao-2',
    category: 'ao-knowledge',
    question:
      'A question asks you to work out a character’s feelings even though the writer never names them. Which AO is being assessed?',
    options: ['RAO1', 'RAO2', 'RAO3', 'WAO1'],
    correctIndex: 1,
    explanation:
      'RAO2 covers deducing, inferring or interpreting information, events or ideas - reading beyond the literal and explicit meaning.',
  },
  {
    id: 'ao-3',
    category: 'ao-knowledge',
    question:
      'Which AO is assessed when you comment on how a text is built - its paragraphing, openings and overall organisation?',
    options: ['RAO2', 'RAO3', 'RAO5', 'WAO2'],
    correctIndex: 1,
    explanation:
      'RAO3 is about identifying and commenting on the structure and organisation of texts.',
  },
  {
    id: 'ao-4',
    category: 'ao-knowledge',
    question:
      'Exploring a writer’s use of grammatical and literary language at word and sentence level is the focus of which AO?',
    options: ['RAO3', 'RAO4', 'RAO5', 'WAO1'],
    correctIndex: 1,
    explanation:
      'RAO4 assesses exploration of writers’ use of grammatical and literary language at word and sentence level. It carries the highest reading weighting.',
  },
  {
    id: 'ao-5',
    category: 'ao-knowledge',
    question:
      'Which AO asks you to consider a writer’s purpose and viewpoint and the overall effect of the text on the reader?',
    options: ['RAO4', 'RAO5', 'WAO1', 'WAO2'],
    correctIndex: 1,
    explanation:
      'RAO5 covers considering writers’ purposes and viewpoints, and the overall effect of the text on the reader.',
  },
  {
    id: 'ao-6',
    category: 'ao-knowledge',
    question:
      'Which writing AO rewards matching form, audience and purpose and organising the response coherently?',
    options: ['WAO1', 'WAO2', 'RAO1', 'RAO5'],
    correctIndex: 0,
    explanation:
      'WAO1 is about communicating appropriately for form, audience and purpose, and organising and structuring writing coherently.',
  },
  {
    id: 'ao-7',
    category: 'ao-knowledge',
    question:
      'Accurate grammar, punctuation and spelling in your own writing is credited under which AO?',
    options: ['WAO1', 'WAO2', 'RAO3', 'RAO4'],
    correctIndex: 1,
    explanation:
      'WAO2 assesses communicating meaning in writing through the use of accurate grammar, punctuation and spelling.',
  },
  {
    id: 'ao-8',
    category: 'ao-knowledge',
    question: 'Which assessment objectives belong to the reading strand?',
    options: ['RAO1 to RAO5', 'WAO1 and WAO2', 'RAO1 to RAO3 only', 'RAO1, RAO2 and WAO1'],
    correctIndex: 0,
    explanation: 'The reading strand is RAO1 to RAO5; the writing strand is WAO1 and WAO2.',
  },
  {
    id: 'ao-9',
    category: 'ao-knowledge',
    question:
      'You explain how a single word choice creates a vivid image for the reader. Which AO is the best fit?',
    options: ['RAO1', 'RAO3', 'RAO4', 'WAO2'],
    correctIndex: 2,
    explanation: 'Working at word level on the writer’s language and its effect is RAO4.',
  },
  {
    id: 'ao-10',
    category: 'ao-knowledge',
    question:
      'Which AO would a question target if it asked you to track how a writer’s opinion shifts from the start to the end of a text?',
    options: ['RAO2', 'RAO3', 'RAO5', 'WAO1'],
    correctIndex: 2,
    explanation: 'Following a writer’s viewpoint and the overall effect across a text is RAO5.',
  },
  {
    id: 'ao-11',
    category: 'ao-knowledge',
    question:
      'Sequencing and structuring information appropriately and coherently in your response is part of which AO?',
    options: ['WAO1', 'WAO2', 'RAO3', 'RAO5'],
    correctIndex: 0,
    explanation:
      'WAO1 covers organising writing, sequencing and structuring information appropriately and coherently.',
  },
  {
    id: 'ao-12',
    category: 'ao-knowledge',
    question:
      'A question asks you to name the difference in viewpoint between two writers and explain the effect on the reader. Which AOs combine here?',
    options: ['RAO2, RAO4 and RAO5', 'RAO1 and RAO3', 'WAO1 and WAO2', 'RAO3 and RAO5'],
    correctIndex: 0,
    explanation:
      'The extended comparison item assesses RAO2 (inference), RAO4 (language at word level) and RAO5 (purpose, viewpoint and effect) together.',
  },
  {
    id: 'ao-13',
    category: 'ao-knowledge',
    question:
      'Which AO is most directly about reading beyond the literal and explicit meaning of a text?',
    options: ['RAO1', 'RAO2', 'RAO4', 'WAO2'],
    correctIndex: 1,
    explanation:
      'RAO2 is the inference and interpretation objective - reading beyond literal and explicit meaning.',
  },
  {
    id: 'ao-14',
    category: 'ao-knowledge',
    question:
      'In the reading strand, which objective is concerned specifically with structure and organisation rather than word-level language?',
    options: ['RAO3', 'RAO4', 'RAO5', 'RAO1'],
    correctIndex: 0,
    explanation:
      'RAO3 is the structure and organisation objective; RAO4 is the word- and sentence-level language objective.',
  },

  // ─── Grammatical terminology (15-34) ────────────────────────────────
  {
    id: 'gram-1',
    category: 'grammatical-terminology',
    question:
      'In the sentence "Close the gate before the storm arrives.", what kind of verb is "Close"?',
    options: ['Modal verb', 'Imperative verb', 'Auxiliary verb', 'Irregular verb'],
    correctIndex: 1,
    explanation:
      'A command that tells someone to do something uses an imperative verb. "Close" gives a direct instruction.',
  },
  {
    id: 'gram-2',
    category: 'grammatical-terminology',
    question: 'Identify the modal verb in: "You must finish the experiment before the bell rings."',
    options: ['finish', 'must', 'rings', 'before'],
    correctIndex: 1,
    explanation:
      'Modal verbs (can, could, may, might, must, shall, should, will, would) express necessity or possibility. "Must" shows obligation.',
  },
  {
    id: 'gram-3',
    category: 'grammatical-terminology',
    question: 'In "She has painted the fence already.", which word is the auxiliary verb?',
    options: ['She', 'has', 'painted', 'already'],
    correctIndex: 1,
    explanation:
      '"Has" is the auxiliary (helping) verb working with the main verb "painted" to form the perfect tense.',
  },
  {
    id: 'gram-4',
    category: 'grammatical-terminology',
    question:
      'Which underlined verb is irregular: "Yesterday she swam across the lake and felt proud."?',
    options: ['"swam" only', '"felt" only', 'Both "swam" and "felt"', 'Neither verb is irregular'],
    correctIndex: 2,
    explanation:
      'Irregular verbs do not form the past tense with "-ed". "Swim" becomes "swam" and "feel" becomes "felt" - both are irregular.',
  },
  {
    id: 'gram-5',
    category: 'grammatical-terminology',
    question: 'What word class is "quickly" in: "The hawk dived quickly toward the field"?',
    options: ['Adjective', 'Adverb', 'Noun', 'Preposition'],
    correctIndex: 1,
    explanation:
      '"Quickly" modifies the verb "dived", telling us how the action happened, so it is an adverb.',
  },
  {
    id: 'gram-6',
    category: 'grammatical-terminology',
    question: 'In "The ancient oak shaded the weary travellers.", which word is an adjective?',
    options: ['oak', 'shaded', 'ancient', 'travellers'],
    correctIndex: 2,
    explanation:
      '"Ancient" describes the noun "oak", so it is an adjective. "Weary" is also an adjective; "ancient" is the only listed option.',
  },
  {
    id: 'gram-7',
    category: 'grammatical-terminology',
    question: 'What type of sentence is: "What an extraordinary discovery this is!"?',
    options: [
      'Declarative (statement)',
      'Interrogative (question)',
      'Imperative (command)',
      'Exclamative (exclamation)',
    ],
    correctIndex: 3,
    explanation:
      'It opens with "What" and ends with an exclamation mark to express strong feeling, making it an exclamative sentence.',
  },
  {
    id: 'gram-8',
    category: 'grammatical-terminology',
    question: 'Which sentence is a simple sentence (one independent clause)?',
    options: [
      'The rain fell.',
      'The rain fell and the river rose.',
      'When the rain fell, the river rose.',
      'The rain fell because the clouds burst.',
    ],
    correctIndex: 0,
    explanation:
      'A simple sentence has a single independent clause with one subject and verb. "The rain fell." is the only one.',
  },
  {
    id: 'gram-9',
    category: 'grammatical-terminology',
    question: 'Which sentence is a compound sentence?',
    options: [
      'Although it was late, we kept walking.',
      'We kept walking, and the moon rose behind us.',
      'We kept walking.',
      'Walking quietly, we reached the cabin.',
    ],
    correctIndex: 1,
    explanation:
      'A compound sentence joins two independent clauses with a coordinating conjunction such as "and". The second option does this.',
  },
  {
    id: 'gram-10',
    category: 'grammatical-terminology',
    question:
      'Which sentence is a complex sentence (an independent clause plus a subordinate clause)?',
    options: [
      'The bell rang.',
      'The bell rang and the pupils left.',
      'Because the bell rang, the pupils left.',
      'The bell rang; the pupils left.',
    ],
    correctIndex: 2,
    explanation:
      'A complex sentence contains a subordinate clause. "Because the bell rang" cannot stand alone, so it subordinates to the main clause.',
  },
  {
    id: 'gram-11',
    category: 'grammatical-terminology',
    question: 'What word class is "under" in: "The cat slept under the warm blanket"?',
    options: ['Preposition', 'Conjunction', 'Adverb', 'Pronoun'],
    correctIndex: 0,
    explanation:
      '"Under" shows the position of the cat relative to the blanket, so it is a preposition.',
  },
  {
    id: 'gram-14',
    category: 'grammatical-terminology',
    question:
      'Which verb in this sentence is an irregular verb: "He brought a torch and lighted, then walked on"? (Choose the past tense that is irregular.)',
    options: ['"lighted"', '"brought"', '"walked"', 'None are irregular'],
    correctIndex: 1,
    explanation:
      'The past tense of "bring" is the irregular form "brought". "Walked" is regular; "lighted" is a regular (and dispreferred) form.',
  },
  {
    id: 'gram-15',
    category: 'grammatical-terminology',
    question: 'What kind of sentence is: "Please water the seedlings every morning."?',
    options: ['Interrogative', 'Imperative', 'Exclamative', 'Declarative'],
    correctIndex: 1,
    explanation:
      'It issues an instruction with the imperative verb "water", so it is an imperative sentence even though it begins politely with "Please".',
  },
  {
    id: 'gram-16',
    category: 'grammatical-terminology',
    question: 'In "We are building a raft from driftwood.", what is the function of "are"?',
    options: ['Main verb', 'Auxiliary verb', 'Modal verb', 'Adverb'],
    correctIndex: 1,
    explanation:
      '"Are" is an auxiliary verb supporting the main verb "building" to form the present continuous tense.',
  },

  // ─── Punctuation effect ─────────────────────────────────────────────
  {
    id: 'punc-1',
    category: 'punctuation-effect',
    question: 'What is the main effect of the exclamation mark in: "We had finally won!"?',
    options: [
      'It adds emphasis and conveys strong excitement.',
      'It signals a list is about to begin.',
      'It shows the speaker is uncertain.',
      'It joins two independent clauses.',
    ],
    correctIndex: 0,
    explanation:
      'An exclamation mark adds emphasis and conveys strong feeling such as surprise or excitement.',
  },
  {
    id: 'punc-2',
    category: 'punctuation-effect',
    question:
      'What effect do the dashes create in: "The result - against every expectation - was a tie"?',
    options: [
      'They set off an interruption to add extra, dramatic information.',
      'They show ownership.',
      'They mark the end of a sentence.',
      'They indicate direct speech.',
    ],
    correctIndex: 0,
    explanation:
      'Paired dashes isolate an aside, drawing attention to the extra information and creating a dramatic pause.',
  },
  {
    id: 'punc-3',
    category: 'punctuation-effect',
    question:
      'What is the effect of the colon in: "She packed one thing: her grandmother’s compass"?',
    options: [
      'It introduces and emphasises what follows.',
      'It shows a question is being asked.',
      'It separates two unrelated ideas.',
      'It indicates a contraction.',
    ],
    correctIndex: 0,
    explanation:
      'A colon introduces an explanation or example, directing the reader’s attention onto what comes next for emphasis.',
  },
  {
    id: 'punc-4',
    category: 'punctuation-effect',
    question: 'What does the ellipsis (…) suggest in: "She opened the door and …"?',
    options: [
      'A trailing off that builds suspense or leaves a thought unfinished.',
      'A complete and certain conclusion.',
      'A list of three items.',
      'A shout or raised voice.',
    ],
    correctIndex: 0,
    explanation:
      'An ellipsis suggests a pause, hesitation or trailing off, often building tension or suspense.',
  },
  {
    id: 'punc-5',
    category: 'punctuation-effect',
    question:
      'What is the effect of the question mark in a rhetorical question such as: "Who would not want a safer planet?"',
    options: [
      'It draws the reader in and makes them reflect, without expecting an answer.',
      'It shows the writer is genuinely confused.',
      'It ends a command.',
      'It marks possession.',
    ],
    correctIndex: 0,
    explanation:
      'A rhetorical question engages the reader and prompts reflection; the writer does not expect a literal reply.',
  },
  {
    id: 'punc-6',
    category: 'punctuation-effect',
    question: 'What does the semicolon do in: "The storm passed; the village began to rebuild"?',
    options: [
      'It links two closely related independent clauses without a conjunction.',
      'It introduces a list.',
      'It shows a missing letter.',
      'It signals a question.',
    ],
    correctIndex: 0,
    explanation:
      'A semicolon joins two closely related independent clauses, showing a balanced connection without a conjunction.',
  },
  {
    id: 'punc-7',
    category: 'punctuation-effect',
    question:
      'What is the effect of the brackets in: "The festival (now in its tenth year) attracts thousands"?',
    options: [
      'They add extra, non-essential information quietly to the side.',
      'They emphasise the most important idea.',
      'They show direct speech.',
      'They end the sentence.',
    ],
    correctIndex: 0,
    explanation:
      'Brackets enclose additional, non-essential information that the sentence would still make sense without.',
  },
  {
    id: 'punc-8',
    category: 'punctuation-effect',
    question: 'In "the dog’s lead", what does the apostrophe show?',
    options: [
      'Possession - the lead belongs to the dog.',
      'A plural of "dog".',
      'A missing letter.',
      'A direct quotation.',
    ],
    correctIndex: 0,
    explanation:
      'Here the apostrophe before the "s" shows possession: the lead belonging to the dog.',
  },
  {
    id: 'punc-9',
    category: 'punctuation-effect',
    question:
      'What is the effect of the listing commas in: "She gathered rope, water, a map and a torch"?',
    options: [
      'They separate items in a list so each is clear.',
      'They join two sentences.',
      'They show possession.',
      'They create suspense.',
    ],
    correctIndex: 0,
    explanation: 'Commas in a list separate the items so the reader can take each one in clearly.',
  },
  {
    id: 'punc-10',
    category: 'punctuation-effect',
    question:
      'What effect does a single short sentence ending in a full stop create after several long sentences, e.g. "It was over."?',
    options: [
      'It creates a deliberate, emphatic pause that lands the point firmly.',
      'It signals a question.',
      'It introduces a list.',
      'It shows the writer is uncertain.',
    ],
    correctIndex: 0,
    explanation:
      'A short sentence after longer ones, closed by a full stop, slows the pace and gives the idea blunt emphasis.',
  },
  {
    id: 'punc-11',
    category: 'punctuation-effect',
    question: 'What do the speech marks do in: "“Run!” she shouted"?',
    options: [
      'They show the exact words spoken aloud by a character.',
      'They indicate possession.',
      'They mark a quotation from a source list.',
      'They join two clauses.',
    ],
    correctIndex: 0,
    explanation: 'Speech marks (inverted commas) enclose the exact words a character says.',
  },
  {
    id: 'punc-12',
    category: 'punctuation-effect',
    question:
      'What is the effect of the comma after the opening phrase in: "Without warning, the lights went out"?',
    options: [
      'It separates the introductory phrase and creates a brief, tense pause.',
      'It shows possession.',
      'It joins two independent clauses on its own.',
      'It marks the end of the sentence.',
    ],
    correctIndex: 0,
    explanation:
      'A comma after a fronted adverbial separates it from the main clause and adds a short pause that can heighten tension.',
  },
  // ─── Purpose identification ─────────────────────────────────────────
  {
    id: 'purp-1',
    category: 'purpose-identification',
    question:
      'Snippet: "Fold the paper in half, then crease the edge firmly. Next, turn the sheet over and repeat." What is the writer’s main purpose?',
    options: ['To inform', 'To explain', 'To persuade', 'To argue'],
    correctIndex: 1,
    explanation:
      'Step-by-step instructions that tell the reader how to carry out a process are written to explain.',
  },
  {
    id: 'purp-2',
    category: 'purpose-identification',
    question:
      'Snippet: "The harbour stretched out below, its water the colour of polished slate, gulls wheeling above the silent boats." What is the main purpose?',
    options: ['To describe', 'To inform', 'To argue', 'To persuade'],
    correctIndex: 0,
    explanation:
      'Rich sensory detail that paints a picture for the reader, without instruction or argument, is written to describe.',
  },
  {
    id: 'purp-3',
    category: 'purpose-identification',
    question:
      'Snippet: "Surely no reasonable person could ignore this crisis any longer. We must act, and we must act now." What is the main purpose?',
    options: ['To inform', 'To describe', 'To argue', 'To explain'],
    correctIndex: 2,
    explanation:
      'A one-sided case pressing a clear position with assertive, reasoned claims is written to argue.',
  },
  {
    id: 'purp-4',
    category: 'purpose-identification',
    question:
      'Snippet: "The library opens at 8 a.m. on weekdays and closes at 6 p.m. Members may borrow up to eight books at a time." What is the main purpose?',
    options: ['To persuade', 'To inform', 'To describe', 'To argue'],
    correctIndex: 1,
    explanation:
      'Neutral, factual detail giving the reader information clearly and without bias is written to inform.',
  },
  {
    id: 'purp-5',
    category: 'purpose-identification',
    question:
      'Snippet: "Imagine never queuing again. Join today and unlock a faster, smarter way to travel - you deserve it." What is the main purpose?',
    options: ['To persuade', 'To explain', 'To inform', 'To describe'],
    correctIndex: 0,
    explanation:
      'Direct address, flattery and an emotive call to action aim to win the reader over, so the purpose is to persuade.',
  },
  {
    id: 'purp-6',
    category: 'purpose-identification',
    question:
      'Snippet: "Plants make their own food through photosynthesis: leaves capture sunlight, which the plant uses to turn water and carbon dioxide into sugar." What is the main purpose?',
    options: ['To explain', 'To argue', 'To persuade', 'To describe'],
    correctIndex: 0,
    explanation:
      'Setting out how or why a process works so the reader understands it is writing to explain.',
  },
  {
    id: 'purp-7',
    category: 'purpose-identification',
    question:
      'Snippet: "The recommendation is clear, and the evidence overwhelming: every school should ban single-use plastics this year." What is the main purpose?',
    options: ['To inform', 'To describe', 'To argue', 'To explain'],
    correctIndex: 2,
    explanation:
      'A decisive stance backed by claims and a recommendation, pressing one viewpoint, is writing to argue.',
  },
  {
    id: 'purp-8',
    category: 'purpose-identification',
    question:
      'Snippet: "The cliff path narrowed until it was barely a ribbon of chalk, the sea hissing far below against jagged black rocks." What is the main purpose?',
    options: ['To describe', 'To explain', 'To inform', 'To persuade'],
    correctIndex: 0,
    explanation:
      'Vivid imagery building atmosphere and a clear picture, with no instruction or argument, is writing to describe.',
  },
  {
    id: 'purp-9',
    category: 'purpose-identification',
    question:
      'Snippet: "To reset the device, hold the side button for ten seconds. When the light flashes blue, release it." What is the main purpose?',
    options: ['To explain', 'To persuade', 'To describe', 'To argue'],
    correctIndex: 0,
    explanation:
      'Clear procedural steps that show the reader how to carry out a task are written to explain.',
  },
  {
    id: 'purp-10',
    category: 'purpose-identification',
    question:
      'Snippet: "Don’t miss out - act before midnight and claim your free upgrade. Thousands have already joined; will you?" What is the main purpose?',
    options: ['To persuade', 'To inform', 'To explain', 'To describe'],
    correctIndex: 0,
    explanation:
      'Urgency, a rhetorical question and a strong call to action are persuasive techniques, so the purpose is to persuade.',
  },
  {
    id: 'purp-11',
    category: 'purpose-identification',
    question:
      'Snippet: "The festival runs from 12 to 15 July. Tickets cost £6 for adults and are free for under-12s." What is the main purpose?',
    options: ['To inform', 'To argue', 'To describe', 'To persuade'],
    correctIndex: 0,
    explanation:
      'Plain factual detail presented neutrally for the reader’s information is writing to inform.',
  },
  {
    id: 'purp-12',
    category: 'purpose-identification',
    question:
      'Snippet: "It is simply wrong to claim the scheme has failed. The figures prove otherwise, and critics must accept that." What is the main purpose?',
    options: ['To describe', 'To inform', 'To argue', 'To explain'],
    correctIndex: 2,
    explanation:
      'A combative, one-sided rebuttal that asserts a position and challenges opponents is writing to argue.',
  },
  // ─── Synonym in context ─────────────────────────────────────────────
  {
    id: 'syn-1',
    category: 'synonym-in-context',
    question:
      'In "The hikers were exhausted after the long climb", which word could replace "exhausted" without changing the meaning?',
    options: ['drained', 'bored', 'curious', 'cautious'],
    correctIndex: 0,
    explanation:
      '"Drained" means very tired, matching "exhausted" in this context. The others change the meaning.',
  },
  {
    id: 'syn-2',
    category: 'synonym-in-context',
    question: 'In "She gave a brief reply and walked on", which word best replaces "brief"?',
    options: ['short', 'loud', 'kind', 'angry'],
    correctIndex: 0,
    explanation: '"Brief" here means lasting only a short time, so "short" preserves the meaning.',
  },
  {
    id: 'syn-3',
    category: 'synonym-in-context',
    question:
      'In "The ancient bridge was fragile and swayed in the wind", which word could replace "fragile"?',
    options: ['delicate', 'modern', 'heavy', 'noisy'],
    correctIndex: 0,
    explanation: '"Fragile" means easily broken or weak; "delicate" carries the same sense here.',
  },
  {
    id: 'syn-4',
    category: 'synonym-in-context',
    question:
      'In "He spoke in a calm voice to settle the nervous crowd", which word best replaces "calm"?',
    options: ['composed', 'cheerful', 'rapid', 'harsh'],
    correctIndex: 0,
    explanation: '"Composed" means controlled and untroubled, matching "calm" in this context.',
  },
  {
    id: 'syn-5',
    category: 'synonym-in-context',
    question:
      'In "The discovery was remarkable and stunned the scientists", which word could replace "remarkable"?',
    options: ['extraordinary', 'ordinary', 'expected', 'tiny'],
    correctIndex: 0,
    explanation:
      '"Remarkable" means worthy of attention or extraordinary; "extraordinary" keeps the meaning.',
  },
  {
    id: 'syn-6',
    category: 'synonym-in-context',
    question:
      'In "A faint light glowed at the end of the tunnel", which word best replaces "faint"?',
    options: ['dim', 'blinding', 'warm', 'sudden'],
    correctIndex: 0,
    explanation:
      '"Faint" describes something weak or barely there; "dim" fits the same meaning for a light.',
  },
  {
    id: 'syn-7',
    category: 'synonym-in-context',
    question:
      'In "The instructions were clear, so nobody got lost", which word could replace "clear"?',
    options: ['plain', 'transparent', 'sunny', 'loud'],
    correctIndex: 0,
    explanation:
      'Here "clear" means easy to understand. "Plain" carries that sense; "transparent" would suggest see-through, which does not fit.',
  },
  {
    id: 'syn-8',
    category: 'synonym-in-context',
    question:
      'In "She felt anxious before the interview began", which word best replaces "anxious"?',
    options: ['uneasy', 'delighted', 'sleepy', 'generous'],
    correctIndex: 0,
    explanation: '"Anxious" means worried or nervous; "uneasy" preserves the meaning in context.',
  },
  {
    id: 'syn-9',
    category: 'synonym-in-context',
    question: 'In "The river was tranquil at dawn", which word could replace "tranquil"?',
    options: ['peaceful', 'turbulent', 'crowded', 'icy'],
    correctIndex: 0,
    explanation:
      '"Tranquil" means calm and quiet; "peaceful" matches. "Turbulent" is the opposite.',
  },
  {
    id: 'syn-10',
    category: 'synonym-in-context',
    question: 'In "He made a swift decision and left at once", which word best replaces "swift"?',
    options: ['quick', 'careless', 'reluctant', 'gentle'],
    correctIndex: 0,
    explanation: '"Swift" means fast; "quick" keeps the meaning. The others change the sense.',
  },
  {
    id: 'syn-11',
    category: 'synonym-in-context',
    question:
      'In "The teacher praised her thorough research", which word could replace "thorough"?',
    options: ['detailed', 'hasty', 'brief', 'careless'],
    correctIndex: 0,
    explanation:
      '"Thorough" means complete and careful; "detailed" fits, while "hasty" and "careless" are opposites.',
  },
  {
    id: 'syn-12',
    category: 'synonym-in-context',
    question: 'In "A vast desert stretched to the horizon", which word best replaces "vast"?',
    options: ['enormous', 'narrow', 'tiny', 'shallow'],
    correctIndex: 0,
    explanation: '"Vast" means extremely large; "enormous" preserves the meaning in context.',
  },

  // ─── Exam-format facts (75-80, plus extras to reach 80) ─────────────
  {
    id: 'fmt-1',
    category: 'exam-format',
    question: 'How long is the LEH11/01 achievement test?',
    options: ['1 hour 45 minutes', '1 hour 30 minutes', '2 hours', '1 hour'],
    correctIndex: 0,
    explanation:
      'The single externally-set achievement test lasts 1 hour 45 minutes (105 minutes).',
  },
  {
    id: 'fmt-2',
    category: 'exam-format',
    question: 'What is the total number of marks available on the LEH11/01 paper?',
    options: ['70 marks', '40 marks', '100 marks', '30 marks'],
    correctIndex: 0,
    explanation:
      'The paper is worth 70 marks in total: 40 for Section A (Reading) and 30 for Section B (Writing).',
  },
  {
    id: 'fmt-3',
    category: 'exam-format',
    question: 'How is the paper divided?',
    options: [
      'Section A: Reading and Section B: Writing',
      'Section A: Writing and Section B: Speaking',
      'Three reading sections only',
      'A single combined section',
    ],
    correctIndex: 0,
    explanation:
      'The test has two sections: Section A: Reading (40 marks) and Section B: Writing (30 marks).',
  },
  {
    id: 'fmt-4',
    category: 'exam-format',
    question: 'How many marks is Section A: Reading worth?',
    options: ['40 marks', '30 marks', '70 marks', '20 marks'],
    correctIndex: 0,
    explanation: 'Section A: Reading is worth 40 marks of the 70-mark paper.',
  },
  {
    id: 'fmt-5',
    category: 'exam-format',
    question: 'How many marks is Section B: Writing worth?',
    options: ['30 marks', '40 marks', '18 marks', '12 marks'],
    correctIndex: 0,
    explanation: 'Section B: Writing is worth 30 marks, assessed as WAO1 (18) and WAO2 (12).',
  },
  {
    id: 'fmt-6',
    category: 'exam-format',
    question: 'How many texts are students given to read in Section A, and what types?',
    options: [
      'Three texts - two non-fiction and one fiction',
      'One non-fiction text only',
      'Two fiction texts only',
      'Four texts, all non-fiction',
    ],
    correctIndex: 0,
    explanation:
      'Section A presents three unseen texts linked by a common theme: two non-fiction and one fiction.',
  },
  {
    id: 'fmt-7',
    category: 'exam-format',
    question: 'Are dictionaries allowed in the LEH11 assessment?',
    options: [
      'No, dictionaries are not allowed',
      'Yes, any dictionary is allowed',
      'Only bilingual dictionaries',
      'Only in Section B',
    ],
    correctIndex: 0,
    explanation: 'Dictionaries are not allowed in the assessment.',
  },
  {
    id: 'fmt-8',
    category: 'exam-format',
    question: 'On the LEH11 grading scale, which grade is the highest?',
    options: ['S4', 'S1', 'A*', 'Grade 9'],
    correctIndex: 0,
    explanation:
      'The qualification is graded on a four-level scale from S1 to S4, of which S4 is the highest and S1 the lowest.',
  },
  {
    id: 'fmt-9',
    category: 'exam-format',
    question: 'What does an outcome below the minimum standard receive?',
    options: [
      'An unclassified (U) result',
      'Grade S1 automatically',
      'A resit voucher',
      'Grade S2',
    ],
    correctIndex: 0,
    explanation: 'Achievement below the minimum standard receives an unclassified (U) result.',
  },
  {
    id: 'fmt-10',
    category: 'exam-format',
    question: 'How does the "circle the synonym" question type expect you to respond?',
    options: [
      'Choose one word from four options',
      'Write a 6-mark essay',
      'Tick three boxes',
      'Underline a whole sentence',
    ],
    correctIndex: 0,
    explanation:
      'The synonym question is a closed item: circle one word from four options; do not select more than one.',
  },
  {
    id: 'fmt-11',
    category: 'exam-format',
    question:
      'The extended comparison question on the paper is typically worth how many marks and is marked how?',
    options: [
      '6 marks, marked against a levelled grid',
      '1 mark, marked right or wrong',
      '30 marks, marked as a full essay',
      '2 marks, point and evidence',
    ],
    correctIndex: 0,
    explanation:
      'The comparison item is a 6-mark extended response marked against a levelled grid, assessing RAO2, RAO4 and RAO5 together.',
  },
  {
    id: 'fmt-12',
    category: 'exam-format',
    question:
      'In a 2-mark "effect of a punctuation mark" question, how are the marks usually split?',
    options: [
      'One mark for naming the effect, one for an explanation linked to the text',
      'Two marks for copying the sentence out',
      'Both marks for naming the mark only',
      'One mark per option ticked',
    ],
    correctIndex: 0,
    explanation:
      'Typically one mark is for naming the effect of the mark and one for an explanation linked to the text content.',
  },
  {
    id: 'fmt-13',
    category: 'exam-format',
    question: 'What does Section B require students to produce?',
    options: [
      'A single extended writing task related to the Section A theme',
      'Three short comprehension answers',
      'A spoken presentation',
      'A multiple-choice grammar test',
    ],
    correctIndex: 0,
    explanation:
      'Section B is a single extended writing task that requires extended writing and is related to the theme in Section A.',
  },
  {
    id: 'fmt-14',
    category: 'exam-format',
    question: 'How is Section B (30 marks) split across the writing assessment objectives?',
    options: [
      'WAO1 out of 18 and WAO2 out of 12',
      'WAO1 out of 12 and WAO2 out of 18',
      'WAO1 out of 15 and WAO2 out of 15',
      'All 30 marks to WAO1',
    ],
    correctIndex: 0,
    explanation:
      'The writing task is marked on WAO1 (form, communication and purpose) out of 18 and WAO2 (grammar, punctuation and spelling) out of 12.',
  },
  {
    id: 'fmt-15',
    category: 'exam-format',
    question: 'In which exam series is the LEH11 assessment available?',
    options: ['June and October', 'January and May', 'October only', 'Every month'],
    correctIndex: 0,
    explanation: 'The assessment is available in the June and October series.',
  },
  {
    id: 'fmt-16',
    category: 'exam-format',
    question: 'Are the Section A reading texts printed in the question paper itself?',
    options: [
      'No - they are provided in a separate Source Booklet',
      'Yes, they appear before every question',
      'Only the fiction text is printed',
      'There are no texts in Section A',
    ],
    correctIndex: 0,
    explanation:
      'The three unseen texts are provided in a separate Source Booklet, linked by a common theme.',
  },
]
