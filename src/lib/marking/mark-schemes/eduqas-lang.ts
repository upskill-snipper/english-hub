// ─── WJEC Eduqas GCSE English Language (C700QS) ────────────────────────────
// Component 1: 20th Century Literature Reading and Creative Prose Writing
//   (1 hour 45 minutes, 80 marks: Reading 40 + Writing 40)
// Component 2: 19th and 21st Century Non-fiction Reading and Transactional/
//   Persuasive Writing (2 hours, 80 marks: Reading 40 + Writing 40)
//
// REBUILT 24 October 2026 to the papers Eduqas sets. WHAT WAS WRONG
//
// Both components declared 80 marks and their questions added up to 75, a
// fault recorded on 18 September 2026 (src/lib/marking/examiner/verification.ts)
// and left open because the missing marks could not be invented without the
// board's papers. No one question was short: Section A of each component was
// built to a paper Eduqas does not set.
//
//   Component 1, Section A 35   A1 5 AO1; A2 5, AO1 3 + AO2 2; A3 10 AO2,
//                               language and structure; A4 10 AO4; A5 5 AO6,
//                               proofreading
//   Component 2, Section A 35   A1 5 AO1; A2 5, AO1 3 + AO2 2, 19th century;
//                               A3 10 AO2, 19th century; A4 10 AO3; A5 5 AO6,
//                               proofreading. Section B: B1 or B2, a choice
//
// So it marked a proofreading question neither paper has; had nothing for
// Component 1's Question 04 or Component 2's Questions 1.4 and 1.5; split
// Question 02 between inference and language where Eduqas marks it all as
// language; set Component 2's 10-mark language question on the 19th-century
// text, where Eduqas sets it on the 21st-century one; asked for structure on
// Question 03, which assesses language only; accepted only explicit points on
// Component 1's Question 01, which credits implicit ones too; and offered the
// two compulsory writing tasks as a choice. Its writing grids had other
// ranges, with four AO6 bands where Eduqas has five. And it fitted one ladder
// per objective to every tariff with a local rescaler that rounded both edges
// of each band, so A2's and A5's ladders put one mark in two bands (the
// overlaps once listed in src/__tests__/mark-scheme-grids-reach-their-maximum.test.ts).
//
// WHAT EDUQAS SETS. The figures below come from the mark-scheme guides,
// src/data/mark-scheme-guides/eduqas-lang-comp1.ts and eduqas-lang-comp2.ts,
// each checked twice on 24 October 2026, by a writer and an independent
// checker, against Eduqas's Summer 2025 question papers and marking schemes
// (C700U10-1 and C700U20-1) and the specification (Version 3, January 2019):
//
//   Component 1   Q01 5 AO1, one mark a point; Q02 5 AO2, one band a mark;
//                 Q03 10 AO2, language; Q04 10 AO2, language and structure;
//                 Q05 10 AO4; Q11, one of four titles, 40: AO5 24 + AO6 16.
//   Component 2   Q1.1 3 AO1 and Q1.3 3 AO1, one mark an answer; Q1.2 10 AO2,
//                 21st-century text; Q1.4 10 AO4, 19th-century text; Q1.5 4
//                 AO1, synthesis, one band a mark; Q1.6 10 AO3; Q2.1 and Q2.2,
//                 both compulsory, 20 each: AO5 12 + AO6 8.
//
// Every band range is Eduqas's; a mark of 0, where nothing earns credit, has
// no band. A question marked point by point has no levels, so it carries one
// band across its whole tariff and its examinerNotes say how points are
// counted (with fewer than three bands the examiner tool derives it as
// points-counted: src/lib/marking/examiner/packs/derive.ts). The descriptors
// and indicators are this file's own words, adapted from the guides' plain
// descriptions: Eduqas's level descriptors are its copyright and are not
// reproduced here.
//
// QUESTION IDS. Eduqas's 2014 sample assessment materials number Component
// 1's reading questions A1 to A5, and Component 2's questions A1 to A6, B1
// and B2, one for one with the live papers' 01 to 05, and 1.1 to 1.6, 2.1
// and 2.2 (the guides' NUMBERING notes). The ids keep that numbering, so
// Component 1's A2, which saved essays name, is Question 02 as the papers set
// it, and its writing question, live Question 11, keeps the id B1. Each
// questionType carries the live number. Ids whose question changed, none of
// them named by a saved essay on 24 October 2026: Component 1's A4 (was
// evaluation, now Question 04) and A5 (was proofreading, now Question 05);
// Component 2's A1 to A5; A6 is new.
//
// APPROVED. Correcting this changes how essays are scored, so it was put to
// the founder, who approved it on 24 October 2026 (document 30: "correct ai
// markers"). It is not in VERIFIED_SPECS (src/lib/marking/examiner/
// verification.ts), which records a check by a person, and this was not one,
// so the scheme still derives as `unverified-grid`.
// __tests__/eduqas-lang-structure.test.ts holds it to the guides.
//
// Sources:
//   https://www.eduqas.co.uk/qualifications/english-language-gcse/
//   https://pastpapers.download.wjec.co.uk/S25/S25-C700U10-1-ms.pdf
//   https://pastpapers.download.wjec.co.uk/S25/S25-C700U20-1-ms.pdf
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/** One of Eduqas's bands: the board's mark range, described in our own words. */
function band(
  n: number,
  minMarks: number,
  maxMarks: number,
  label: string,
  descriptor: string,
  indicators: readonly string[],
): BandDescriptor {
  return { band: `Band ${n}`, minMarks, maxMarks, label, descriptor, indicators }
}

/**
 * The single band of a question marked point by point: it spans the tariff, so
 * the grid reaches its maximum, and it says how the points are counted.
 */
function points(
  maxMarks: number,
  label: string,
  descriptor: string,
  indicators: readonly string[],
): BandDescriptor {
  return { band: 'Points', minMarks: 1, maxMarks, label, descriptor, indicators }
}

// ─── Component 1: Section A, reading ────────────────────────────────────────

/** Question 01: one mark a point, up to five. */
const c1Q01: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify and interpret information',
  description:
    'Identify and interpret explicit and implicit information and ideas in the lines the question names.',
  maxMarks: 5,
  weighting: 1,
  bands: [
    points(
      5,
      'One mark for each valid point',
      'Count the valid points: one mark for each correct, separate point about what the question asks, taken from the lines it names, up to five.',
      [
        'A point the lines suggest counts as well as one they state, if the lines support it',
        'A sentence copied out without the point picked out of it earns nothing',
        'A point made twice, or taken from outside the lines, earns nothing',
      ],
    ),
  ],
}

/** Question 02: all AO2, one band a mark. */
const c1Q02: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Language: what the words suggest',
  description:
    "Explain how the writer's choice of words and phrases shows a character or situation, such as the impression a person gives or how they feel, using subject terminology where it helps.",
  maxMarks: 5,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      1,
      'Very slight',
      'A very slight answer: perhaps one point, with little or no support from the lines.',
      ['One point at most', 'Little or no quotation'],
    ),
    band(
      2,
      2,
      2,
      'Simple impressions',
      'One or two simple, obvious impressions, with some support from the lines.',
      ['Obvious points only', 'Some quotation, with little comment on it'],
    ),
    band(
      3,
      3,
      3,
      'Several supported impressions',
      'Several impressions, each backed by a quotation, with some comment on the words the writer chose.',
      ['Each point supported', 'Some comment on particular words'],
    ),
    band(
      4,
      4,
      4,
      'Accurate and well supported',
      'Accurate impressions, well supported by plenty of evidence, with clear comment on how the language creates them.',
      ['Plenty of apt evidence', 'Clear comment on how the words work'],
    ),
    band(
      5,
      5,
      5,
      'Sharp and perceptive',
      'Sharp, accurate points that notice less obvious things, each backed by a well-chosen quotation, with subject terms used to explain effects.',
      ['Notices what is less obvious', 'Subject terms used to explain, not to label'],
    ),
  ],
}

/** Question 03: language only. */
const c1Q03: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Language analysis',
  description:
    "Explain, comment on and analyse how the writer's language shows a character's thoughts and feelings, or creates an impression of a person, place or situation, across the section named, using relevant subject terminology.",
  maxMarks: 10,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      2,
      'Little explanation',
      'Mentions a detail or two that fit the question, with very little explanation.',
      ['One or two relevant details', 'Little or no comment on the words'],
    ),
    band(
      2,
      3,
      4,
      'Simple comment',
      'Finds some relevant details and says simple things about them; may name a technique without explaining it.',
      ['Some relevant details', 'Techniques named rather than explained'],
    ),
    band(
      3,
      5,
      6,
      'Beginning to explain',
      'Looks at the section in some depth and starts to explain what particular words show, using some subject terms correctly.',
      ['Explains what chosen words show', 'Some accurate subject terms'],
    ),
    band(
      4,
      7,
      8,
      'Detailed, beginning to analyse',
      'Detailed, with some real insight, and beginning to analyse how particular words affect the reader, with accurate subject terms.',
      ['Points range across the section', 'Analysis of the effect on the reader begins'],
    ),
    band(
      5,
      9,
      10,
      'Thorough and insightful',
      'Thorough and insightful across the whole section, analysing in detail how the language works, including its subtler choices, with well-judged subject terms.',
      ['Covers the whole section', 'Subtle choices analysed in detail'],
    ),
  ],
}

/** Question 04: language and structure together. */
const c1Q04: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Language and structure analysis',
  description:
    'Explain, comment on and analyse how the writer uses language and structure (what happens, in what order and at what pace) to create an effect such as tension and drama, or an impression of a character, using relevant subject terminology.',
  maxMarks: 10,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      2,
      'Little explanation',
      'Mentions a detail or two that fit the question, with very little explanation.',
      ['One or two relevant details', 'Little sense of how the events are put together'],
    ),
    band(
      2,
      3,
      4,
      'Simple comment',
      'Finds some relevant details and says simple things about them; techniques are named rather than explained.',
      ['Some relevant details', 'Language or structure named, not explained'],
    ),
    band(
      3,
      5,
      6,
      'Beginning to explain',
      'Looks at the section in some depth and starts to explain how the words and the order of events create the effect.',
      ['Comments on both the words and the order of events', 'Some accurate subject terms'],
    ),
    band(
      4,
      7,
      8,
      'Detailed, beginning to analyse',
      'Detailed, with some real insight, and beginning to analyse how the words and the order of events work on the reader.',
      ['Points range across the section', 'Language and structure linked to their effect'],
    ),
    band(
      5,
      9,
      10,
      'Thorough and insightful',
      'Thorough and insightful, analysing in detail how language and structure work together, including the subtler choices.',
      ['Language and structure analysed together', 'Subtle choices analysed in detail'],
    ),
  ],
}

/** Question 05: evaluation. */
const c1Q05: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate critically',
  description:
    'Evaluate the text critically: judge how far a given view of a character or the story holds, using the final lines named and the passage as a whole, and support the judgement with apt references to the text.',
  maxMarks: 10,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      2,
      'Opinion with little support',
      'An opinion, but with little more than a passing reference to the text.',
      ['A view stated, hardly supported', 'Little sense of the passage'],
    ),
    band(
      2,
      3,
      4,
      'Some evaluation',
      'Gives a view and backs it with a few obvious references, but says little about the whole passage or how the writer works.',
      ['A few obvious references', "Little on the writer's methods"],
    ),
    band(
      3,
      5,
      6,
      'Evaluation begins',
      "Starts to judge the text for real, with sensible references and some sense of the whole passage and the writer's choices.",
      ['A judgement that is argued', 'Some sense of the passage as a whole'],
    ),
    band(
      4,
      7,
      8,
      'Clear, well-argued judgement',
      "A clear, well-argued judgement that gets close to the text, with well-chosen evidence and real discussion of the writer's choices.",
      ['Well-chosen evidence', "Real discussion of the writer's choices"],
    ),
    band(
      5,
      9,
      10,
      'Persuasive and perceptive',
      "A persuasive argument that takes in the whole passage, in which every reference earns its place, with real insight into how the writer steers the reader's feelings.",
      ['Takes in the whole passage', 'Insight into how the writer shapes a response'],
    ),
  ],
}

// ─── Component 1: Section B, prose writing ──────────────────────────────────

const c1Q11Content: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation',
  description:
    'Communicate clearly, effectively and imaginatively in a story or a recount, choosing a tone, style and register to suit it, and organise events and ideas so that the writing holds together.',
  maxMarks: 24,
  weighting: 24 / 40,
  bands: [
    band(
      1,
      1,
      4,
      'Simple, loosely organised',
      'The story is very simple or hard to follow, with little sense of organisation.',
      ['Events barely connected', 'Little attempt at an opening or an ending'],
    ),
    band(
      2,
      5,
      9,
      'Starting to take shape',
      'A story the reader can follow that is starting to have a shape, though its plot and characters are thin.',
      ['Some sequence of events', 'Characters and setting only sketched'],
    ),
    band(
      3,
      10,
      14,
      'Clear and organised',
      'A clear, well-organised story that is going somewhere, with some developed detail, though it plays safe.',
      ['Paragraphs move the story on', 'Some detail that brings it to life'],
    ),
    band(
      4,
      15,
      19,
      'Controlled and purposeful',
      'A story in firm control, shaped with a clear purpose, with believable detail and some original ideas.',
      ['Structure chosen for effect', 'Convincing characters and setting'],
    ),
    band(
      5,
      20,
      24,
      'Original and compelling',
      'An original story that holds the reader from start to end, with detailed characters and a carefully built structure.',
      ['Holds the reader throughout', 'A structure built with care, and an ending that works'],
    ),
  ],
}

const c1Q11Accuracy: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling, punctuation and grammar.',
  maxMarks: 16,
  weighting: 16 / 40,
  bands: [
    band(
      1,
      1,
      3,
      'Frequent errors',
      'Sentences are mostly alike, and errors in spelling, punctuation and tense are frequent.',
      ['Little variety of sentence', 'Errors in basic punctuation and tense'],
    ),
    band(
      2,
      4,
      6,
      'Some control',
      'Sentences vary a little, and most everyday words are spelt correctly.',
      ['Some variety of sentence', 'Common words mostly spelt correctly'],
    ),
    band(
      3,
      7,
      10,
      'Generally accurate',
      'Sentences vary, and most of the punctuation and spelling is right.',
      ['A range of sentence forms', 'Punctuation mostly secure'],
    ),
    band(
      4,
      11,
      13,
      'Accurate, with ambition',
      'Sentences are chosen for effect, errors are rare and the vocabulary is ambitious.',
      ['Sentences shaped for effect', 'Ambitious words, mostly spelt correctly'],
    ),
    band(
      5,
      14,
      16,
      'Close to faultless',
      'Spelling, punctuation and grammar are close to faultless, and the vocabulary is wide and exact.',
      ['Accurate across complex sentences', 'Wide, precise vocabulary'],
    ),
  ],
}

// ─── Component 1 ────────────────────────────────────────────────────────────

export const eduqasLangComp1: MarkScheme = {
  id: 'eduqas-lang-comp1',
  board: 'WJEC Eduqas',
  subject: 'English Language',
  paper: 'Component 1',
  title: '20th Century Literature Reading and Creative Prose Writing',
  totalMarks: 80,
  durationMinutes: 105,
  version: 'C700U10-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-language-gcse/',
  questions: [
    {
      id: 'A1',
      questionType: 'Information retrieval (Question 01)',
      taskDescription:
        'Read the opening lines the question names and list five things you learn about the person, place or topic it names.',
      totalMarks: 5,
      assessmentObjectives: [c1Q01],
      examinerNotes:
        'Marked point by point, not by level: one mark for each correct, separate point taken from the lines the question names, up to 5. A point the lines suggest counts as well as one they state, as long as the lines support it. No mark for a point from outside those lines, for the same point made twice, or for a sentence copied out without the point picked out of it.',
    },
    {
      // The id saved essays use. Until 24 October 2026 it was an inference
      // question marked AO1 3 + AO2 2; Eduqas's Question 02 is all AO2.
      id: 'A2',
      questionType: 'Language: short answer (Question 02)',
      taskDescription:
        'Read the lines the question names and explain what the writer shows about a character or situation, such as the impression a person gives or how they feel, and how the language does it.',
      totalMarks: 5,
      assessmentObjectives: [c1Q02],
      examinerNotes:
        'All five marks are for AO2, on one grid of five one-mark bands: the question is about how the language shows the character or situation, not only what it shows. A short, focused answer can reach full marks. Reward clear impressions, each backed by a short quotation, with comment on what particular words suggest; retelling, or naming techniques without saying what they suggest, earns little. Only the lines the question names count.',
    },
    {
      id: 'A3',
      questionType: 'Language analysis (Question 03)',
      taskDescription:
        "Explain how the writer shows a character's thoughts and feelings, or the impressions you get of a person, place or situation, in a longer section of the extract, by looking closely at the language.",
      totalMarks: 10,
      assessmentObjectives: [c1Q03],
      examinerNotes:
        'This question assesses language. Do not look for comment on structure, which Question 04 assesses. Reward a range of points that track the whole section named, short quotations each followed by an explanation of what the words show, and analysis of how particular choices affect the reader. Material from outside the section named earns nothing; quotation without explanation, or naming techniques without saying what they do, earns little.',
    },
    {
      id: 'A4',
      questionType: 'Language and structure analysis (Question 04)',
      taskDescription:
        'Explain how the writer creates an effect in a later section of the extract, such as tension and drama or an impression of a character, through both the language and the way the events are organised.',
      totalMarks: 10,
      assessmentObjectives: [c1Q04],
      examinerNotes:
        'This question assesses language and structure together: reward comment on what happens, in what order and at what pace, and how that builds the effect, as well as close comment on word choices, with subject terms for both used accurately. Points should come from across the whole section named. An answer only about words, or one that retells the events, answers half the question.',
    },
    {
      id: 'A5',
      questionType: 'Evaluation (Question 05)',
      taskDescription:
        'Respond to a view given about a character or the story, saying how far you agree, using the final lines the question names and the passage as a whole, and explaining how the writer created your thoughts and feelings.',
      totalMarks: 10,
      assessmentObjectives: [c1Q05],
      examinerNotes:
        "Candidates may agree, disagree or partly agree. Reward a clear judgement held to from start to finish, evidence from the final lines named and from across the passage, and comment on how the writer's choices create the reader's thoughts and feelings rather than on what happens. Retelling the story, or using only the final lines, holds an answer down.",
    },
    {
      id: 'B1',
      questionType: 'Creative prose writing (Question 11)',
      taskDescription:
        'Choose one of four titles and write a story, or an account of an experience, real or imagined, in about 450 to 600 words. A title may be a phrase, a time you did something, an opening line or a closing line.',
      totalMarks: 40,
      assessmentObjectives: [c1Q11Content, c1Q11Accuracy],
      examinerNotes:
        'One of four titles, Question 11 (a) to (d). Two separate marks, each found on its own grid: AO5 out of 24 for the story and how it is organised, and AO6 out of 16 for accuracy, sentence variety and vocabulary. The response should be a narrative, or a recount of an experience, real or imagined: writing that only describes, without telling a story, cannot reach the top of the mark range. A piece that does not fit the title chosen, or falls far short of the guidance of about 450 to 600 words, holds its own marks down.',
    },
  ],
}

// ─── Component 2: Section A, reading ────────────────────────────────────────

/** Question 1.1: one mark an answer, 21st-century text. */
const c2Q11: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify information',
  description: 'Identify explicit information and ideas in the 21st-century text.',
  maxMarks: 3,
  weighting: 1,
  bands: [
    points(
      3,
      'One mark for each correct answer',
      'Count the correct answers: one mark for each short question answered correctly from the 21st-century text, 3 marks in all.',
      [
        'A short phrase is enough for each answer',
        'An answer from the 19th-century text earns nothing',
      ],
    ),
  ],
}

/** Question 1.2: how the writer achieves a purpose, 21st-century text. */
const c2Q12: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Language and structure analysis',
  description:
    'Explain, comment on and analyse how the writer of the 21st-century text tries to achieve a purpose, such as persuading the reader or showing what a person or event is like, through what is said, the language, tone and structure and other methods, using relevant subject terminology.',
  maxMarks: 10,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      2,
      'Little focus',
      'Notices a detail or two, but the answer is short and drifts from the question.',
      ['One or two details', 'Little link to what the question asks'],
    ),
    band(
      2,
      3,
      4,
      'Some comment',
      'Finds some useful details and says a little about them, but misses parts of the text.',
      ['Some useful details', 'Parts of the text left out'],
    ),
    band(
      3,
      5,
      6,
      'Beginning to explain',
      "Covers a fair spread of details and starts to explain how the writer's words, tone and structure do their job.",
      ['A fair spread of details', 'Explanation of method begins'],
    ),
    band(
      4,
      7,
      8,
      'Detailed, beginning to analyse',
      'Plenty of well-chosen details, explained correctly, with analysis of how the writer influences the reader starting to come through and subject terms that help.',
      ['Well-chosen details from across the text', 'Analysis of influence on the reader begins'],
    ),
    band(
      5,
      9,
      10,
      'Thorough and perceptive',
      "Covers the whole text with sharp, well-explained points, and analyses in detail how the writer's methods work on the reader.",
      ['Covers the whole text', 'Detailed analysis of methods and their effect'],
    ),
  ],
}

/** Question 1.3: one mark an answer, 19th-century text. */
const c2Q13: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify and interpret information',
  description:
    'Identify and interpret explicit information and ideas in the 19th-century text, showing that its older language has been understood.',
  maxMarks: 3,
  weighting: 1,
  bands: [
    points(
      3,
      'One mark for each correct answer',
      'Count the correct answers: one mark for each correct answer about what the 19th-century text says or means, 3 marks in all.',
      [
        'Older language understood and put simply',
        'An answer from the 21st-century text earns nothing',
      ],
    ),
  ],
}

/** Question 1.4: evaluation, 19th-century text. */
const c2Q14: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate critically',
  description:
    'Evaluate the 19th-century text critically, often by judging how far a statement about it holds, thinking about both what is said and how it is said, with apt references from across the text.',
  maxMarks: 10,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      2,
      'Opinion with little support',
      'A quick opinion, or a detail or two, with little to back it up.',
      ['A view stated, hardly supported', 'One or two details'],
    ),
    band(
      2,
      3,
      4,
      'Some evaluation',
      'Begins to test the statement against the text, with some evidence, but leaves parts of the text out.',
      ['Some evidence', 'Parts of the text not used'],
    ),
    band(
      3,
      5,
      6,
      'Evaluation begins',
      'Judges the statement properly, using details from across the text and noticing how the language helps.',
      ['Details from across the text', 'Some comment on the language'],
    ),
    band(
      4,
      7,
      8,
      'Clear, well-argued judgement',
      "A clear, well-argued judgement with well-chosen evidence, showing how the writer's words and details reveal their feelings or views.",
      ['Well-chosen evidence', "The writer's attitude traced through the language"],
    ),
    band(
      5,
      9,
      10,
      'Persuasive and perceptive',
      'A detailed, persuasive argument that takes in the whole text and makes sharp points about how it works, in which every reference earns its place.',
      ['Takes in the whole text', 'Sharp points on how the text works'],
    ),
  ],
}

/** Question 1.5: synthesis from both texts, one band a mark. */
const c2Q15: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Select and synthesise evidence',
  description:
    'Select relevant details from both texts on one shared topic and bring them together in a brief answer.',
  maxMarks: 4,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      1,
      'Little, or one text',
      'Only a little relevant detail, or details from just one text.',
      ['Few relevant details', 'May use only one text'],
    ),
    band(2, 2, 2, 'Some from each text', 'A relevant detail or two from each of the two texts.', [
      'Both texts used',
      'Details relevant but few',
    ]),
    band(
      3,
      3,
      3,
      'Several, brought together',
      'Several relevant details from both texts, brought together sensibly.',
      ['Several details from both texts', 'Brought together with some sense'],
    ),
    band(
      4,
      4,
      4,
      'Precise and well synthesised',
      'A good spread of exactly the right details from both texts, brought together clearly.',
      ['Precise details covering the whole question', 'Clear which text each comes from'],
    ),
  ],
}

/** Question 1.6: comparison across both texts. */
const c2Q16: AssessmentObjective = {
  id: 'AO3',
  label: "AO3 - Compare writers' ideas and perspectives",
  description:
    "Compare the two writers' ideas, experiences or attitudes on a shared topic, and how each conveys them to readers, across both texts.",
  maxMarks: 10,
  weighting: 1,
  bands: [
    band(
      1,
      1,
      2,
      'Little comparison',
      'A detail or two, perhaps from only one text or with no way to tell which text is meant.',
      ['Few details', 'May use only one text'],
    ),
    band(
      2,
      3,
      4,
      'Some comparison',
      'Some sound details from both texts, and a first attempt at saying how the writers get them across.',
      ['Both texts used', 'How the writers convey ideas touched on'],
    ),
    band(
      3,
      5,
      6,
      'Sound comparison',
      'A fair number of sound details from both texts, and an attempt to explore how each writer presents them.',
      ['A fair number of details from both texts', 'Methods explored, if not yet in depth'],
    ),
    band(
      4,
      7,
      8,
      'Detailed comparison',
      'Details from both texts examined properly, with detailed comment on the methods each writer uses.',
      ['Details from both texts examined', 'Detailed comment on methods'],
    ),
    band(
      5,
      9,
      10,
      'Perceptive comparison',
      "Both texts examined in depth, with a clear grasp of how and why each writer's methods work on readers.",
      ['Both texts in depth', 'How and why each writer works on readers'],
    ),
  ],
}

// ─── Component 2: Section B, transactional and persuasive writing ───────────

/** AO5 on each of the two compulsory tasks. */
const c2WritingContent: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation',
  description:
    'Communicate clearly and effectively in the form the task sets, matching tone, style and register to its purpose and reader, and organise ideas so that the writing holds together.',
  maxMarks: 12,
  weighting: 12 / 20,
  bands: [
    band(
      1,
      1,
      2,
      'Little to say',
      'Some idea of the form and the reader, but little to say, and ideas in a simple order.',
      ['Some sense of the form', 'Ideas listed rather than developed'],
    ),
    band(
      2,
      3,
      4,
      'Some awareness',
      'Aware of the purpose and reader, with a few reasons and some paragraphs, though points are not developed.',
      ['Some awareness of purpose and reader', 'Paragraphs, with points undeveloped'],
    ),
    band(
      3,
      5,
      7,
      'Fits the task',
      'Fits the task and the reader, with reasons that are developed and paragraphs that build a sensible case.',
      ['Tone suited to the reader', 'Developed reasons in a sensible order'],
    ),
    band(
      4,
      8,
      10,
      'Secure and well shaped',
      'Right for the task and the reader all the way through, with detailed, carefully chosen content and a clear structure.',
      ['Form and register sustained', 'Detailed content, clearly structured'],
    ),
    band(
      5,
      11,
      12,
      'Ambitious and persuasive',
      'Ambitious, polished writing: the tone is exactly right for the reader, and the ideas are developed in depth and persuade.',
      ['Register exactly judged', 'Ideas developed in depth'],
    ),
  ],
}

/** AO6 on each of the two compulsory tasks. */
const c2WritingAccuracy: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling, punctuation and grammar.',
  maxMarks: 8,
  weighting: 8 / 20,
  bands: [
    band(
      1,
      1,
      1,
      'Frequent errors',
      'Sentences are mostly alike, and errors are frequent throughout.',
      ['Little variety of sentence', 'Frequent errors'],
    ),
    band(2, 2, 3, 'Some control', 'Sentences vary a little, and most of the spelling is right.', [
      'Some variety of sentence',
      'Common words mostly spelt correctly',
    ]),
    band(
      3,
      4,
      5,
      'Mostly accurate',
      'Mostly accurate, with a mix of sentence forms and punctuation.',
      ['A mix of sentence forms', 'Punctuation mostly secure'],
    ),
    band(4, 6, 7, 'Accurate and varied', 'Sentences are varied for effect, and errors are rare.', [
      'Sentences varied for effect',
      'Errors rare',
    ]),
    band(
      5,
      8,
      8,
      'Close to faultless',
      'Accuracy is close to faultless, with a wide and precise vocabulary.',
      ['Accurate throughout', 'Wide, precise vocabulary'],
    ),
  ],
}

// ─── Component 2 ────────────────────────────────────────────────────────────

export const eduqasLangComp2: MarkScheme = {
  id: 'eduqas-lang-comp2',
  board: 'WJEC Eduqas',
  subject: 'English Language',
  paper: 'Component 2',
  title: '19th and 21st Century Non-fiction Reading and Transactional/Persuasive Writing',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'C700U20-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-language-gcse/',
  questions: [
    {
      id: 'A1',
      questionType: 'Information retrieval, 21st-century text (Question 1.1)',
      taskDescription:
        'Answer short questions on the 21st-century text, worth 3 marks in all, each asking for a piece of information it gives.',
      totalMarks: 3,
      assessmentObjectives: [c2Q11],
      examinerNotes:
        'Marked point by point, not by level: one mark for each correct answer, 3 marks in all, taken from the 21st-century text: from anywhere in it, unless a part names particular lines. A short phrase is enough. An answer from the 19th-century text earns nothing.',
    },
    {
      id: 'A2',
      questionType: 'How the writer achieves a purpose, 21st-century text (Question 1.2)',
      taskDescription:
        'Explain how the writer of the 21st-century text tries to achieve a purpose, for example to persuade you or to show what a person or event is like, thinking about what is said, the language, tone and structure, and other methods.',
      totalMarks: 10,
      assessmentObjectives: [c2Q12],
      examinerNotes:
        'Set on the 21st-century text. Reward a range of details from all parts of the text, worked through in order, each explained in terms of what the question asks, with analysis of language, tone and structure (for example facts and figures, quotations from experts, the order of ideas) and subject terms used accurately. Quotations should be long enough to make sense and be followed by comment: fragments with no explanation earn little. An answer that covers only the opening paragraphs, or lists techniques without linking them to the question, holds itself down.',
    },
    {
      id: 'A3',
      questionType: 'Information retrieval and understanding, 19th-century text (Question 1.3)',
      taskDescription:
        'Answer short questions on the 19th-century text, worth 3 marks in all, asking what it says or what it means.',
      totalMarks: 3,
      assessmentObjectives: [c2Q13],
      examinerNotes:
        'Marked point by point, not by level: one mark for each correct answer, 3 marks in all, from the 19th-century text. Reward answers that show the older language has been understood, put simply. An answer from the 21st-century text earns nothing, and a long passage copied out does not show the understanding the question asks for.',
    },
    {
      id: 'A4',
      questionType: 'Evaluation, 19th-century text (Question 1.4)',
      taskDescription:
        'Give a judgement on the 19th-century text, often by saying how far you agree with a statement about it, thinking about both what is said and how it is said.',
      totalMarks: 10,
      assessmentObjectives: [c2Q14],
      examinerNotes:
        "Set on the 19th-century text. Reward a clear judgement kept up from start to finish, a range of details from across the whole text, worked through in order, and comment on how the writer's language shows their feelings or attitudes. A summary that does not judge, or an answer that uses only part of the text, holds itself down; material from the 21st-century text earns nothing here.",
    },
    {
      id: 'A5',
      questionType: 'Synthesis, both texts (Question 1.5)',
      taskDescription:
        'Using both texts, explain briefly what they tell you about one shared topic, bringing together the relevant details from each.',
      totalMarks: 4,
      assessmentObjectives: [c2Q15],
      examinerNotes:
        'One grid of four one-mark bands. Both texts are needed: an answer that uses only one text stays in Band 1, 1 mark, however full it is. Reward precise, relevant details that cover every part of what is asked, with it clear which text each comes from; one or two sentences on each text can be enough. Analysis of language is not asked for and earns nothing here.',
    },
    {
      id: 'A6',
      questionType: "Comparison of writers' ideas and methods, both texts (Question 1.6)",
      taskDescription:
        "Compare the two texts on a shared topic: the writers' ideas, experiences or attitudes, and how each writer gets them across to readers.",
      totalMarks: 10,
      assessmentObjectives: [c2Q16],
      examinerNotes:
        'Both texts and both halves of the question are expected: what the writers say, and how they get it across. Reward valid details from across both texts, explored rather than listed, with it always clear which text is meant, and links drawn between the texts. An answer on one text, or one that covers what the writers say but not how, holds itself down.',
    },
    {
      id: 'B1',
      questionType: 'Transactional / persuasive writing, first task (Question 2.1)',
      taskDescription:
        'The first of two compulsory writing tasks: write the piece the task sets, for example a letter, article, report, review or speech, for the purpose and reader it names, in about 300 to 400 words.',
      totalMarks: 20,
      assessmentObjectives: [c2WritingContent, c2WritingAccuracy],
      examinerNotes:
        'Compulsory: Questions 2.1 and 2.2 are both answered and each is marked on its own. The task sets the form, purpose and reader. Two separate marks, each found on its own grid: AO5 out of 12 for content and organisation, and AO6 out of 8 for accuracy, sentence variety and vocabulary. Reward the conventions of the form set, a tone that suits the reader, and ideas developed with reasons and detail in paragraphs that build a case. Writing far below the word guidance rarely develops its points.',
    },
    {
      id: 'B2',
      questionType: 'Transactional / persuasive writing, second task (Question 2.2)',
      taskDescription:
        "The second compulsory writing task: write the piece the paper sets, for its own purpose and reader, again in about 300 to 400 words. Its form, purpose or reader may differ from the first task's.",
      totalMarks: 20,
      assessmentObjectives: [c2WritingContent, c2WritingAccuracy],
      examinerNotes:
        "Compulsory, and marked on its own: judge it against the form, purpose and reader this task sets, which may differ from Question 2.1's. Two separate marks, each found on its own grid: AO5 out of 12 for content and organisation, and AO6 out of 8 for accuracy, sentence variety and vocabulary. Reward the conventions of the form set, a tone and register that suit this reader, and a clear viewpoint developed with reasons, examples and detail.",
    },
  ],
}
