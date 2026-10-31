// ─── Cambridge IGCSE First Language English (0500) Mark Scheme ──────────────
// Paper 1: Reading                            2 hours, 80 marks (4 x 20)
// Paper 2: Directed Writing and Composition   2 hours, 80 marks (40 + 40)
//
// CORRECTED 24 October 2026 SO EACH QUESTION IS MARKED THE WAY CAMBRIDGE MARKS
// IT. The figures are those of the mark-scheme guides for these papers,
// src/data/mark-scheme-guides/cambridge-0500-paper1.ts and
// cambridge-0500-paper2.ts, each written and then checked by an independent
// reader that day against Cambridge's 0500 syllabus for exams in 2027, 2028
// and 2029 (Version 1, pages 8 to 10 and 13 to 17) and its 0500/01 and 0500/02
// specimen mark schemes for examination from 2027, which give the level names
// and ranges the syllabus does not. Correcting the marker changes how essays
// are scored, so it was put to the founder, who approved it on 24 October
// 2026 (document 30). ./__tests__/cambridge-structure.test.ts holds this file
// to the guides.
//
// The paper and question totals were already right (EXAM-5, below). What was
// wrong was how the marks are given inside a question:
//
//   Paper 1 Q1   20 marks in three bands (1-7, 8-13, 14-20), described as R1,
//                R2 and R5 only. Cambridge gives a mark for each correct
//                point, part by part, with no levels, and the question tests
//                all five reading objectives. Now one point-marked objective.
//   Paper 1 Q2   one 15-mark reading grid and five 1-mark writing bands, both
//                written for a piece in role (voice, audience, form). Now the
//                three grids Cambridge marks on: 2(a) reading 10 (Levels 1-5:
//                1-2, 3-4, 5-6, 7-8, 9-10), 2(a) writing 5 (Levels 1-3: 1,
//                2-3, 4-5) and 2(b), the writer's attitude, 5 (Levels 1-3).
//   Paper 1 Q3   one 20-mark grid in five bands, one of whose indicators
//                wanted choices "from across both required paragraphs", the
//                2024-2026 language task. Now the short answers, 10 marks
//                given point by point, and the language task, 10 marks in five
//                levels of two, on the one extract the question gives.
//   Paper 1 Q4   marks and ranges unchanged (reading 10, writing 10, five
//                levels of two each), but the reading bands wanted ideas "from
//                both texts" (Question 4 answers Text C alone) and the writing
//                bands, labelled W1-W4, marked spelling, punctuation and
//                grammar, which Paper 1 does not assess. Both rewritten.
//   Paper 2 A    one 15-mark reading grid that assumed two texts and had
//                nothing for 1(a), and one 25-mark writing grid in five bands.
//                Now 1(a) 5 (Levels 1-3: 1, 2-3, 4-5), 1(b) reading 10
//                (Levels 1-5) and 1(b) writing 25 in SIX levels (1-5, 6-9,
//                10-13, 14-17, 18-21, 22-25).
//   Paper 2 B    16 and 24 unchanged, but five bands each where Cambridge has
//                six (content and structure 1-2, 3-4, 5-7, 8-10, 11-13, 14-16;
//                style and accuracy 1-4, 5-8, 9-12, 13-16, 17-20, 21-24). The
//                note that the 16/24 split "was NOT re-read for 2027-2029" is
//                withdrawn: it is the 2027 specimen's split.
//
// ONE QUESTION, ONE GRID PER PART. A question Cambridge marks in separately
// marked parts is one question here with one objective for each part's grid,
// so the question ids saved essays name still resolve: 'Section A' covers
// both parts of Question 1, as it always has. An objective's id lists the
// codes its grid covers as the guide lists them ('R1, R2, R5' is 'R1/R2/R5'),
// in upper case because feedback-generator.ts upper-cases the id the model
// returns before looking it up; Question 3's two parts cover the same codes,
// so their ids also name the part. Every label starts with its id, because
// the marking prompts (prompt-builder.ts, essay-feedback.ts) show the label,
// not the id, and ask for the id back. None of the old labels did ('R1-R5 -
// Reading comprehension' was id 'R1'). Sub-question tariffs the syllabus does
// not fix are not stated. Descriptors and indicators are our own words:
// Cambridge's level descriptors are its copyright and are not copied.
//
// Not modelled: the November 2026 series, the last on the 2024-2026 syllabus,
// whose Paper 1 has three questions (30, 25 and 25) and whose Paper 2
// Section A is one 40-mark task, because one scheme holds one structure and
// this one is the 2027-2029 syllabus's.
//
// EARLIER, EXAM-5 (19 September 2026): the papers were declared as 50 and 65
// marks. Both are 80, so every percentage and grade estimate for a Cambridge
// student had been computed against a paper that does not exist. The
// 2027-2029 syllabus was chosen over the 2024-2026 one the backlog named
// because it is the one the cohort being taught will sit;
// src/lib/board/cambridge-0475.ts describes how Cambridge's syllabus rotation
// hides which PDF is current.
//
// Source: Cambridge IGCSE First Language English 0500 syllabus for 2027, 2028
// and 2029, Version 1, pages 13-17.
// https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-first-language-english-0500/
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'

// ═══════════════════════════════════════════════════════════════════════════
// Reading Assessment Objectives (R1-R5)
// ═══════════════════════════════════════════════════════════════════════════
//
// R1: demonstrate understanding of explicit meanings
// R2: demonstrate understanding of implicit meanings and attitudes
// R3: analyse, evaluate and develop facts, ideas and opinions, using
//     appropriate support from the text
// R4: demonstrate understanding of how writers achieve effects and influence
//     readers
// R5: select and use information for specific purposes
//
// Writing Assessment Objectives (W1-W5)
//
// W1: articulate experience and express what is thought, felt and imagined
// W2: organise and structure ideas and opinions for deliberate effect
// W3: use a range of vocabulary and sentence structures appropriate to context
// W4: use register appropriate to context
// W5: make accurate use of spelling, punctuation and grammar
//
// W2 and W4 are worded as in 2024-2026; Cambridge says its 2027 rewording
// changed no knowledge or skill assessed (2027-2029 syllabus p. 39).
// ═══════════════════════════════════════════════════════════════════════════

// ─── Paper 1 Question 1: Comprehension, point by point ──────────────────────

const p1Q1Comprehension: AssessmentObjective = {
  id: 'R1/R2/R3/R4/R5',
  label: 'R1/R2/R3/R4/R5 - Question 1: comprehension of Text A, a mark for each correct point',
  description:
    "Short answers on Text A that test all five reading objectives: what the text says directly (R1) and what it suggests (R2), examining its ideas (R3), how the writer's words create effects (R4) and picking out what each part asks for (R5). Marked point by point, part by part, not in levels.",
  maxMarks: 20,
  weighting: 20 / 20,
  bands: [
    {
      band: 'Per mark',
      minMarks: 1,
      maxMarks: 20,
      label: 'One mark for each correct point',
      descriptor:
        'One mark for each correct, separate point, up to the marks printed for each part, added across the parts. There are no levels: the mark is the number of points credited.',
      indicators: [
        'Each point answers the part it is written under, from the lines that part points to',
        "Explanations in the student's own words wherever a part asks for them",
      ],
    },
  ],
}

// ─── Paper 1 Question 2: Summary task, three grids ──────────────────────────

const p1Q2aReading: AssessmentObjective = {
  id: 'R1/R2/R5',
  label: 'R1/R2/R5 - Question 2(a) reading: the points the summary selects from Text B',
  description:
    'Understanding what Text B says directly (R1) and what it implies (R2), and selecting only the points that fit the focus the question gives (R5), for a summary of no more than 120 words.',
  maxMarks: 10,
  weighting: 10 / 20,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Few points',
      descriptor:
        'Picks up only a few relevant points, often loses sight of the focus and does little real selecting.',
      indicators: ['Points taken almost at random', 'Material from outside the focus'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'General grasp',
      descriptor:
        'Has a general grasp of the relevant points, but keeps to the focus only some of the time and selects without much judgement.',
      indicators: ['Some relevant points, others missed', 'Detail the focus does not need'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Fair range',
      descriptor:
        'Covers a fair number of relevant points with the odd lapse in focus; it selects, but unneeded material creeps in.',
      indicators: ['Most of the obvious points', 'An example or a repeat where a point should be'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Wide and focused',
      descriptor:
        'Covers plenty of the points that matter, keeps to the focus throughout and chooses with care, so the main lines of the text start to show.',
      indicators: [
        'Points the text only implies as well as those it states',
        'Little or nothing irrelevant',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Full and precise',
      descriptor:
        'Gathers the points that matter most, never strays from the focus and selects so well that the reader sees the whole picture.',
      indicators: [
        'A wide range of relevant points, implied ones included',
        'Every point earns its place',
      ],
    },
  ],
}

const p1Q2aWriting: AssessmentObjective = {
  id: 'W1/W2/W3',
  label: 'W1/W2/W3 - Question 2(a) writing: how clearly and concisely the summary is written',
  description:
    "Expressing the points clearly in the student's own words (W1), organising them so the summary reads as one connected piece rather than a list (W2), and choosing words with care so that it says a lot in few words (W3).",
  maxMarks: 5,
  weighting: 5 / 20,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Hard to follow',
      descriptor: 'Hard to follow and loosely organised, with stretches copied from the text.',
      indicators: [
        'Notes or a list rather than linked sentences',
        "The text's own sentences reused",
      ],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 3,
      label: 'Mostly clear',
      descriptor:
        "Mostly clear and sometimes well ordered; concise in places, but elsewhere it borrows the text's own wording.",
      indicators: ['Some points linked, others simply listed', 'Own words in places'],
    },
    {
      band: 'Level 3',
      minMarks: 4,
      maxMarks: 5,
      label: 'Clear and concise',
      descriptor:
        "Fluent and easy to follow, well ordered, saying a lot in few words, in a good range of the student's own words.",
      indicators: ['Related points combined in single sentences', 'No wasted words'],
    },
  ],
}

const p1Q2bAttitude: AssessmentObjective = {
  id: 'R2/R3',
  label: "R2/R3 - Question 2(b): the writer's attitude in Text B",
  description:
    'Working out what the writer thinks and feels about the subject (R2) and examining it, with details from Text B to show it (R3).',
  maxMarks: 5,
  weighting: 5 / 20,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Basic',
      descriptor:
        'Makes a basic point about how the writer feels, with little or nothing from the text to show it.',
      indicators: ['A general feeling named', 'No supporting detail'],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 3,
      label: 'Partial',
      descriptor: "Identifies part of the writer's attitude and backs it up with a detail or two.",
      indicators: ['One side of the attitude', 'Details given but not explained'],
    },
    {
      band: 'Level 3',
      minMarks: 4,
      maxMarks: 5,
      label: 'Precise',
      descriptor:
        "Pins down the writer's attitude accurately and proves it with well-chosen details from the text.",
      indicators: [
        'The attitude stated exactly, with more than one side where it has them',
        'Each detail tied to what it shows',
      ],
    },
  ],
}

// ─── Paper 1 Question 3: short answers, then the language task ──────────────

const p1Q3ShortAnswers: AssessmentObjective = {
  id: 'R1/R2/R4-SHORT-ANSWERS',
  label:
    'R1/R2/R4-SHORT-ANSWERS - Question 3 short answers on Text C, a mark for each correct answer',
  description:
    "Short questions on words and phrases in Text C: finding the word or phrase that matches an idea (R1), explaining in the student's own words what particular words mean in their sentence (R2), and explaining what an example of the writer's language suggests (R4). Marked point by point.",
  maxMarks: 10,
  weighting: 10 / 20,
  bands: [
    {
      band: 'Per mark',
      minMarks: 1,
      maxMarks: 10,
      label: 'One mark for each correct answer',
      descriptor:
        'The marks for each part, up to the marks printed for it, added across the short-answer parts: one mark for each correct answer, except in a part the paper marks in levels.',
      indicators: [
        'The exact word or phrase from the text when a part asks for one',
        "An explanation in the student's own words that fits how the word is used",
      ],
    },
  ],
}

const p1Q3LanguageTask: AssessmentObjective = {
  id: 'R1/R2/R4-LANGUAGE-TASK',
  label: "R1/R2/R4-LANGUAGE-TASK - Question 3 language task: how the writer's words create effects",
  description:
    'About 200 to 250 words on the extract of Text C the question gives: choosing striking words and phrases, explaining what they mean there (R1, R2) and what they suggest, and how the writer uses them to create effects and influence the reader (R4).',
  maxMarks: 10,
  weighting: 10 / 20,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Weak choices',
      descriptor:
        'Chooses words that do little for the task and shows little understanding of them.',
      indicators: ['Long quotations or whole sentences', 'Meanings misread or left out'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Vague',
      descriptor:
        'Chooses less telling words; the comments mostly repeat the text or stay vague, even where techniques are named correctly.',
      indicators: ['Techniques named but not explained', 'Comments that could fit any word'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sensible',
      descriptor:
        'Chooses sensible words and explains what most of them mean, but any comment on their effect is basic.',
      indicators: ['Meaning in context explained', 'Effect stated in general terms'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Good',
      descriptor:
        'Good choices, confidently explained in the passage, with a first attempt at explaining images and some sense of what the writer is doing.',
      indicators: ['What words suggest, not only what they mean', 'Images begin to be explained'],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Sharpest',
      descriptor:
        'The sharpest choices, each opened up to show what it suggests and why the writer used it, with images explained exactly and thoughtfully.',
      indicators: [
        'A range of precise choices, images among them',
        'Connotations and effects explored in depth',
      ],
    },
  ],
}

// ─── Paper 1 Question 4: Extended response to reading ───────────────────────

const p1Q4Reading: AssessmentObjective = {
  id: 'R1/R2/R3/R5',
  label: 'R1/R2/R3/R5 - Question 4 reading: ideas from Text C, used and developed',
  description:
    'Understanding what Text C says and suggests (R1, R2), developing and weighing up its ideas with details from the text (R3), and selecting what the task and each bullet point need (R5), in a voice that suits the role the question sets.',
  maxMarks: 10,
  weighting: 10 / 20,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Very little',
      descriptor: 'Uses very little from the text, or copies it without reshaping it for the task.',
      indicators: ['Few ideas from Text C', 'Copied stretches'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some main ideas',
      descriptor:
        'Picks up some main ideas but leans on the words of the text, drifts from the bullet points and may sound wrong for the role.',
      indicators: ['A bullet point missed or barely touched', 'The wording of the text reused'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Simple',
      descriptor:
        'Offers simple ideas from the text but rarely takes them further; some bullet points get more attention than others and the voice is flat.',
      indicators: ['Ideas listed, not developed', 'Uneven coverage of the bullet points'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Developed',
      descriptor:
        'Uses many of the useful ideas and develops some, covers all the bullet points, backs points up often and sounds right for the role.',
      indicators: ['Every bullet point covered', 'Some ideas taken beyond what the text states'],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Thorough',
      descriptor:
        'Uses most of the useful ideas, develops and weighs them up, weaves in detail throughout, covers every bullet point fully and keeps a believable voice.',
      indicators: ['Ideas developed and evaluated', 'A convincing voice from start to finish'],
    },
  ],
}

const p1Q4Writing: AssessmentObjective = {
  id: 'W1/W2/W3/W4',
  label: 'W1/W2/W3/W4 - Question 4 writing: clarity, organisation, vocabulary and style',
  description:
    "Expressing ideas clearly in the student's own words (W1), organising them for the reader rather than in the order of the text (W2), varied and precise vocabulary and sentences (W3), and a style and register that suit the form, audience and purpose (W4). Spelling, punctuation and grammar are not an objective on this paper.",
  maxMarks: 10,
  weighting: 10 / 20,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Hard to follow',
      descriptor:
        'Hard to understand, too short to develop anything, and partly copied from the text.',
      indicators: ['Meaning often unclear', 'Borrowed wording'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Clumsy',
      descriptor:
        'Clumsy in places and jumbled in order, with plain or borrowed words and little thought for the audience.',
      indicators: ['Ideas in a confusing order', 'A register wrong for the form'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Plain',
      descriptor:
        'Easy to follow but plain; it sticks to the order of the original text, the vocabulary does the job and there is some sense of the audience.',
      indicators: ['Follows the text paragraph by paragraph', 'Some sense of the form'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Mostly fluent',
      descriptor:
        'Reads smoothly most of the time, with ideas in a sensible order, a good range of words and a tone that often fits.',
      indicators: ['Material reordered for the task', 'A tone mostly right for the audience'],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Confident',
      descriptor:
        'Confident and fluent, shaped so the reader follows it easily, with wide and exact vocabulary and a tone that fits throughout.',
      indicators: ['A structure built for the reader', 'Precise, varied vocabulary'],
    },
  ],
}

// ─── Paper 2 Question 1(a): analysing and evaluating the text ───────────────

const p2Q1aAnalysis: AssessmentObjective = {
  id: 'R3/R4',
  label: 'R3/R4 - Question 1(a): analysing and evaluating the text',
  description:
    "A short structured answer that analyses and weighs up something in the text or an extract from it, such as a person's attitude (R3), including how the writer's choice of words reveals it (R4), in the student's own words with details from the text as evidence.",
  maxMarks: 5,
  weighting: 5 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Slight',
      descriptor: 'Shows only a slight grasp of what the question asks about.',
      indicators: ['A general comment', 'Little or no evidence'],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 3,
      label: 'Partial',
      descriptor:
        'Partly understands what the question asks about and backs it up with a detail or two.',
      indicators: ['Some sound points', 'Details given but not explained'],
    },
    {
      band: 'Level 3',
      minMarks: 4,
      maxMarks: 5,
      label: 'Secure',
      descriptor:
        'Gets to the heart of what the question asks about and supports each point with well-chosen details from the text.',
      indicators: [
        'A clear judgement that answers exactly what is asked',
        'What the words suggest as well as what they say',
      ],
    },
  ],
}

// ─── Paper 2 Question 1(b): Directed writing, reading and writing ───────────

const p2Q1bReading: AssessmentObjective = {
  id: 'R1/R2/R3/R5',
  label: 'R1/R2/R3/R5 - Question 1(b) reading: ideas from the text or texts, used and evaluated',
  description:
    "Understanding what the text or texts say and suggest (R1, R2), developing and evaluating their ideas rather than repeating them (R3), and selecting what the task needs (R5), blended into the student's own argument.",
  maxMarks: 10,
  weighting: 10 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Barely uses the text',
      descriptor:
        'Barely uses the text or texts, or copies chunks of them without choosing what matters.',
      indicators: ['Few relevant ideas', 'Copied stretches'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Obvious points',
      descriptor: 'Refers briefly to the more obvious points and may copy parts of the text.',
      indicators: ['Ideas mentioned in passing', "Little of the student's own reasoning"],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Simple use',
      descriptor:
        'Uses a fair amount of simple material but rarely builds on it, often just following the text point by point.',
      indicators: [
        'Ideas repeated rather than developed',
        'The order of the text, not of an argument',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Developed',
      descriptor:
        'Draws on plenty of the useful material, develops some of it and supports some points with details.',
      indicators: ['Ideas put to work for the task', 'Some evaluation'],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Evaluated',
      descriptor:
        'Draws on most of the useful material, builds on it and weighs it up, and blends it smoothly into the argument.',
      indicators: [
        'Ideas judged, not just repeated',
        'Where there are two texts, both brought together',
      ],
    },
  ],
}

const p2Q1bWriting: AssessmentObjective = {
  id: 'W1/W2/W3/W4/W5',
  label: 'W1/W2/W3/W4/W5 - Question 1(b) writing: structure, style, register and accuracy',
  description:
    'Expressing ideas clearly (W1), organising them into an argument that guides the reader (W2), well-chosen vocabulary and varied sentences (W3), a register and tone that suit the form and the audience (W4), and accurate spelling, punctuation and grammar (W5).',
  maxMarks: 25,
  weighting: 25 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 5,
      label: 'Hard to follow',
      descriptor:
        'Hard to follow: ideas are barely ordered, words are few or copied, the reader is ignored and errors block the meaning.',
      indicators: ['Little sense of the form', 'Errors that obscure the meaning'],
    },
    {
      band: 'Level 2',
      minMarks: 6,
      maxMarks: 9,
      label: 'Loose',
      descriptor:
        'Loosely ordered, with a narrow or borrowed vocabulary, little sense of who is reading and repeated errors that sometimes get in the way.',
      indicators: ['Paragraphs that do not build an argument', 'Errors that sometimes confuse'],
    },
    {
      band: 'Level 3',
      minMarks: 10,
      maxMarks: 13,
      label: 'Uneven',
      descriptor:
        'The meaning is clear but the writing is uneven: it follows the order of the texts, the words are simple, the audience is only partly in mind and errors are frequent.',
      indicators: ['Simple vocabulary', 'Frequent errors that do not block the meaning'],
    },
    {
      band: 'Level 4',
      minMarks: 14,
      maxMarks: 17,
      label: 'Works in places',
      descriptor:
        'Works in places: ideas mostly follow a sensible order, the vocabulary suits the task, the tone partly fits the audience and the accuracy is generally good.',
      indicators: ['A recognisable line of argument', 'The conventions of the form partly used'],
    },
    {
      band: 'Level 5',
      minMarks: 18,
      maxMarks: 21,
      label: 'Works well',
      descriptor:
        'Works well throughout: soundly organised, words chosen with some care, a tone that fits the audience and only occasional small errors.',
      indicators: ['Paragraphs that move the reader on', 'A register that suits the audience'],
    },
    {
      band: 'Level 6',
      minMarks: 22,
      maxMarks: 25,
      label: 'Confident',
      descriptor:
        'Confident and exact: the structure carries the reader, the vocabulary is precise, the tone is just right for the audience and errors are very rare.',
      indicators: [
        'A structure that guides or persuades the reader',
        'Precise vocabulary and controlled sentences',
      ],
    },
  ],
}

// ─── Paper 2 Section B: Composition, two grids of six levels ────────────────

const p2CompContentStructure: AssessmentObjective = {
  id: 'W1/W2',
  label: 'W1/W2 - Composition: content and structure',
  description:
    'Ideas that fit the title and are developed in detail (W1), in a structure shaped on purpose from the opening to the ending (W2): in a description, a picture built from precise detail; in a story, a plot, characters and setting that hold together.',
  maxMarks: 16,
  weighting: 16 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Unclear',
      descriptor:
        'Mostly off the title or unclear, with little shape; hard to picture or to follow.',
      indicators: ['Little link to the title', 'No clear shape'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Thin',
      descriptor:
        'Thin, simple ideas with a loose shape; a few relevant details, or events that do not link up well.',
      indicators: ['Undeveloped ideas', 'Details or events that do not connect'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 7,
      label: 'Simple',
      descriptor:
        'Keeps to the title in a simple way, with a shape that mostly holds together; a string of relevant details, or a plain story told in order.',
      indicators: ['A list of details or events', 'A beginning, middle and end, simply handled'],
    },
    {
      band: 'Level 4',
      minMarks: 8,
      maxMarks: 10,
      label: 'Developed in places',
      descriptor:
        'Clearly on the title, with some development and sensible organisation; some details that work, or a connected plot where character and setting start to come through.',
      indicators: [
        'Some detail that brings the scene or the story alive',
        'Paragraphs in a sensible order',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 11,
      maxMarks: 13,
      label: 'Engaging',
      descriptor:
        'Developed and largely holds the reader, with some deliberate choices about order and pace; a picture the reader can mostly see, or a plot that builds through character, detail and a climax.',
      indicators: ['Structure used for effect', 'A climax or shift of focus that pays off'],
    },
    {
      band: 'Level 6',
      minMarks: 14,
      maxMarks: 16,
      label: 'Controlled',
      descriptor:
        'Tightly focused on the title, rich and gripping throughout, with a balanced structure controlled for effect; a picture the reader can fully see, or a plot crafted with care from start to finish.',
      indicators: ['Every part serves the whole', 'Opening and ending shaped together'],
    },
  ],
}

const p2CompStyleAccuracy: AssessmentObjective = {
  id: 'W3/W4/W5',
  label: 'W3/W4/W5 - Composition: style and accuracy',
  description:
    'Precise vocabulary and sentences varied for effect (W3), language and a register that hold the reader (W4), and accurate spelling, punctuation and grammar (W5).',
  maxMarks: 24,
  weighting: 24 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Often unclear',
      descriptor:
        'Words and sentences are often wrong for what is meant, and mistakes make it hard to read.',
      indicators: ['Errors that block the meaning', 'A very limited vocabulary'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Narrow',
      descriptor:
        'A narrow choice of words and sentences, little thought for the reader, and repeated mistakes that sometimes confuse.',
      indicators: ['The same sentence patterns again and again', 'Errors that sometimes confuse'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Plain',
      descriptor:
        'Plain words and simple sentence patterns, some thought for the reader, and many mistakes, though the meaning mostly comes through.',
      indicators: ['Simple vocabulary used correctly', 'Many errors, the meaning mostly clear'],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Some effect',
      descriptor:
        'Some well-chosen words and a mix of sentence types, now and then used for effect; the reader is interested at times, and mistakes are not frequent.',
      indicators: ['Some precise vocabulary', 'Sentences varied now and then'],
    },
    {
      band: 'Level 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Crafted',
      descriptor:
        'Words chosen with care and sentences varied on purpose; the reader is kept interested, with only the odd small slip.',
      indicators: ['Vocabulary chosen for effect', 'Few errors'],
    },
    {
      band: 'Level 6',
      minMarks: 21,
      maxMarks: 24,
      label: 'Precise',
      descriptor:
        'Exact, well-judged words and sentences shaped for effect throughout; the reader is gripped and mistakes are very rare.',
      indicators: ['Sentences shaped for atmosphere and pace', 'Errors very rare'],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 1 - Reading (2 hours, 80 marks: four questions of 20)
// ═══════════════════════════════════════════════════════════════════════════

const SRC_0500 =
  'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-first-language-english-0500/'

export const cambridge0500Paper1: MarkScheme = {
  id: 'cambridge-0500-paper1',
  board: 'Cambridge',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Reading',
  totalMarks: 80,
  durationMinutes: 120,
  version: '0500/1 (2027-2029)',
  sourceUrl: SRC_0500,
  questions: [
    {
      id: 'Q1',
      questionType: 'Comprehension',
      taskDescription:
        "Answer a series of short questions on Text A. Some ask for a detail from the text, some for the meaning of a word or phrase in the student's own words, and some for what the writer suggests, why something happens or why a particular word is used.",
      totalMarks: 20,
      assessmentObjectives: [p1Q1Comprehension],
      examinerNotes:
        "Point-marked, part by part, with no levels: give one mark for each correct, separate point, up to the marks printed for that part, and add the parts. Where a part asks for the student's own words, credit only answers in them; where a part asks the student to explain, an answer lifted word for word from the text can earn nothing even if own words were not asked for. Where a part asks what a phrase means, each part of the phrase needs explaining, and explaining only some of it earns only some of the marks. A point made twice earns one mark, and answers should come from the paragraph or lines the part points to.",
    },
    {
      id: 'Q2',
      questionType: 'Summary task',
      taskDescription:
        "Two parts on Text B. 2(a): select the points that fit the focus the question gives and write them up as a summary in the student's own words, in continuous writing of no more than 120 words. 2(b): explain the writer's attitude to the subject, with details from the text to support it.",
      totalMarks: 20,
      assessmentObjectives: [p1Q2aReading, p1Q2aWriting, p1Q2bAttitude],
      examinerNotes:
        "Three grids, each marked on its own and then added: the 2(a) summary for reading (R1/R2/R5, 10) and for writing (W1/W2/W3, 5), and 2(b) for the writer's attitude (R2/R3, 5). The summary is continuous writing, not notes or bullet points, of no more than 120 words, in the student's own words and keeping to the focus: examples, quotations, repetition and the student's own opinions are not points of the summary. 2(b) rewards a precise statement of the attitude, which may have more than one side, backed by details from Text B, as many as the question asks for. Mark each part only on what the student wrote for it: a part not answered scores 0 on its grid.",
    },
    {
      id: 'Q3',
      questionType: 'Short-answer questions and language task',
      taskDescription:
        "Respond to Text C. First, short-answer parts on words and phrases: find the word or phrase that matches an idea, explain what particular words mean in the student's own words, or explain what an example of the writer's language suggests. Then a language task of about 200 to 250 words on the extract the question gives: choose striking words and phrases, images among them, and explain what they suggest and how the writer uses them to create effects.",
      totalMarks: 20,
      assessmentObjectives: [p1Q3ShortAnswers, p1Q3LanguageTask],
      examinerNotes:
        "Two parts, marked separately and added. Short answers (10): one mark for each correct answer, up to the marks printed for each part; the exact word or phrase where a part asks the student to find one, and explanations in the student's own words, not the same word or another form of it. A part on what one example of the writer's language suggests may be marked in levels instead, as in Cambridge's specimen paper: judge it by how fully and precisely the suggestion is explained. Language task (10, five levels): choices come from the extract the question gives; reward what each choice means there and what it suggests, with images explained rather than named; comments on grammar, sentence shape or punctuation earn credit only on top of comments on the words themselves; judge the analysis as a whole rather than counting choices, though the top levels expect a range of choices that includes images. Mark each part only on what the student wrote for it: a part not answered scores 0.",
    },
    {
      id: 'Q4',
      questionType: 'Extended response to reading',
      taskDescription:
        'Write about 250 to 300 words based on Text C, in the form the question sets (a letter, report, journal, speech, interview or article), in the situation and role it gives, using and developing ideas from the text to cover each of its bullet points.',
      totalMarks: 20,
      assessmentObjectives: [p1Q4Reading, p1Q4Writing],
      examinerNotes:
        'Two grids, marked separately and added: reading (R1/R2/R3/R5, 10) and writing (W1/W2/W3/W4, 10). The answer draws on Text C alone. Reading rewards ideas from Text C used, developed beyond what the text states and backed by its details, every bullet point covered in a balanced way, and a voice that suits the role and the form, which counts towards the reading mark; ideas should grow out of the text, not be invented. Writing is W1 to W4 only: Paper 1 has no objective for spelling, punctuation and grammar, so do not add or take away marks for accuracy as such.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 - Directed Writing and Composition (2 hours, 80 marks: 40 + 40)
// ═══════════════════════════════════════════════════════════════════════════

export const cambridge0500Paper2: MarkScheme = {
  id: 'cambridge-0500-paper2',
  board: 'Cambridge',
  subject: 'English Language',
  paper: 'Paper 2',
  title: 'Directed Writing and Composition',
  totalMarks: 80,
  durationMinutes: 120,
  version: '0500/2 (2027-2029)',
  sourceUrl: SRC_0500,
  questions: [
    {
      id: 'Section A',
      questionType: 'Directed writing',
      taskDescription:
        "Question 1, on one or two texts of about 550 to 650 words in all. 1(a): a short structured answer that analyses and evaluates something in the text, such as a person's attitude, in the student's own words with details as evidence. 1(b): a speech, letter, article or report of about 250 to 350 words that discusses, argues or persuades, using, developing and evaluating the ideas in the text or texts, in the form and for the audience the question sets.",
      totalMarks: 40,
      assessmentObjectives: [p2Q1aAnalysis, p2Q1bReading, p2Q1bWriting],
      examinerNotes:
        "Question 1 is marked on three grids and the marks added: 1(a) (R3/R4, 5), 1(b) reading (R1/R2/R3/R5, 10) and 1(b) writing (W1/W2/W3/W4/W5, 25, six levels). 1(a) is answered in the student's own words with details from the text, from the extract if the question gives one. 1(b) covers each point the question lists, in the form and for the audience it sets; its reading mark rewards ideas from the text or texts used, developed and evaluated rather than repeated and, where there are two texts, ideas from both brought together; its writing mark includes spelling, punctuation and grammar. Mark each part only on what the student wrote for it: a response with no answer to 1(a) scores 0 on the 1(a) grid, and the 1(b) piece is not credited there.",
    },
    {
      id: 'Section B',
      questionType: 'Composition (descriptive or narrative)',
      taskDescription:
        'Choose one of four titles, two descriptive and two narrative, and write a description or a story of about 350 to 450 words.',
      totalMarks: 40,
      assessmentObjectives: [p2CompContentStructure, p2CompStyleAccuracy],
      examinerNotes:
        "One composition, marked on two grids of six levels each and the marks added: content and structure (W1/W2, 16) and style and accuracy (W3/W4/W5, 24), the split in Cambridge's 2027 specimen mark scheme. A descriptive title is answered with a description that builds a picture, a narrative title with a story; reward each on its own terms. Spelling, punctuation and grammar count in the style and accuracy mark.",
    },
  ],
}

/**
 * Aggregated export of all Cambridge IGCSE 0500 (First Language English)
 * mark schemes - Paper 1 (Reading) and Paper 2 (Directed Writing & Composition).
 */
export const cambridge0500MarkSchemes: readonly MarkScheme[] = [
  cambridge0500Paper1,
  cambridge0500Paper2,
]
