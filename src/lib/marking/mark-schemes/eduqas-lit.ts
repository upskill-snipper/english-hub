// ─── WJEC Eduqas GCSE English Literature (C720QS) ──────────────────────────
//
// ONE GRID PER ANSWER, 24 October 2026. WHAT WAS WRONG
//
// Eduqas marks each Literature answer once, on one grid covering every
// objective the question assesses, "equally weighted", and gives AO4
// (spelling, punctuation and grammar) a grid of its own on the two questions
// that carry it. From 9 to 24 October 2026 this file instead split each
// question's marks between its objectives (15 as AO1 8 + AO2 7; 25 as 9 + 8 +
// 8; 35 as 18 + 17; 40 as 14 + 13 + 13) and gave each objective its own
// five-band ladder, scaled down from a 20-mark one. So the model judged AO1,
// AO2 and AO3 separately and added the marks up: a best-fit judgement Eduqas
// makes once was made two or three times, on ladders whose ranges are not
// Eduqas's (AO1 out of 8 ran 1-2, 3, 4-5, 6, 7-8).
//
// Each question now carries ONE objective for its grid: an id naming the
// objectives it covers ('AO1-AO2' or 'AO1-AO3', in upper case because
// src/lib/marking/feedback-generator.ts upper-cases the id the model returns
// before looking it up), a label saying it is one grid, the grid's marks, and
// Eduqas's five bands at the grid's own ranges. AO4 stays its own entry, on
// Eduqas's three levels. Each question's examinerNotes tell the model to score
// a grid once, under its id, because the essay-feedback route refuses a reply
// that leaves out an objective's id (src/lib/marking/essay-feedback.ts).
//
// WHAT EDUQAS SETS. The figures come from the mark-scheme guides,
// src/data/mark-scheme-guides/eduqas-lit-comp1.ts and eduqas-lit-comp2.ts,
// each checked twice on 24 October 2026, by a writer and an independent
// checker, against Eduqas's Summer 2025 question papers and marking schemes
// (C720U10-1 and C720U20-1), the specification (Version 4, August 2024) and
// the Summer 2026 examiners' report:
//
//   Component 1, 2 hours, 80 marks
//     Section A (a)  Shakespeare extract, 15: AO1-AO2, bands 1-3 to 13-15
//     Section A (b)  Shakespeare essay, 25: AO1-AO2 20, bands 1-4 to 17-20,
//                    and AO4 5 on levels 1, 2-3 and 4-5
//     Section B (a)  a named anthology poem, 15: AO1-AO3, bands 1-3 to 13-15
//     Section B (b)  a second anthology poem compared with it, 25: AO1-AO3,
//                    bands 1-5 to 21-25
//   Component 2, 2 hours 30 minutes, 120 marks
//     Section A      post-1914 prose or drama, 40: AO1-AO2 35, bands 1-7 to
//                    29-35, and AO4 5 on levels 1, 2-3 and 4-5
//     Section B      19th-century prose, 40: AO1-AO3, bands 1-8 to 33-40
//     Section C (a)  an unseen poem, 15: AO1-AO2, bands 1-3 to 13-15
//     Section C (b)  a second unseen poem compared with it, 25: AO1-AO2,
//                    bands 1-5 to 21-25
//
// A mark of 0, where nothing is worthy of credit, has no band. With one grid
// per answer there is no per-objective figure to state, so the old tension
// between the specification's weighting table (AO3 7.5% of the GCSE, 15
// marks) and equal weighting inside each question is gone: like the guides,
// this follows the mark schemes, which examiners mark with. The band
// descriptors and indicators are this file's own words, adapted from the
// guides' plain descriptions; Eduqas's level descriptors are its copyright and
// are not reproduced. The one cap the guides give, that an anthology
// comparison spending most of its length on the printed poem cannot reach the
// higher bands, is in Section B (b)'s examinerNotes. The question ids are
// unchanged, Section B (a) among them, which saved essays name.
//
// APPROVED. Correcting this changes how essays are scored, so it was put to
// the founder, who approved it on 24 October 2026 (document 30: "correct ai
// markers"). It is not in VERIFIED_SPECS (src/lib/marking/examiner/
// verification.ts), which records a check by a person, and this was not one,
// so the scheme still derives as `unverified-grid`.
// __tests__/eduqas-lit-structure.test.ts holds it to the guides.
//
// REBUILT 9 October 2026. Until then this file set each component as two
// 40-mark questions. It put AO3 and AO4 on the wrong sections of Component 1,
// put AO3 where Component 2 assesses AO4, and gave Component 2 80 marks and
// two sections where Eduqas sets 120 and three, so it had no unseen poetry at
// all; every Eduqas Literature answer was marked against objectives its
// question does not assess. That rebuild set the sections, tariffs and
// objectives above from the specification (pages 7 to 10) and the June 2024
// mark schemes, and Eduqas's Summer 2025 examiners' report agrees: in
// Component 1, "extract questions assess AO1 and AO2 and essay questions
// assess AO1, AO2 and AO4", and Section B assesses AO1, AO2 and AO3; in
// Component 2, AO3 is assessed in Section B only and AO4 in Section A only.
//
// Sources:
//   https://www.eduqas.co.uk/qualifications/english-literature-gcse/
//   https://pastpapers.download.wjec.co.uk/S25/S25-C720U10-1-ms.pdf
//   https://pastpapers.download.wjec.co.uk/S25/S25-C720U20-1-ms.pdf
//   WJEC Eduqas GCSE English Literature specification (C720QS), pages 7-10
//   GCSE English Literature examiners' report, Summer 2025
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/** One of Eduqas's five bands: the board's mark range, described in our own words. */
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

// ─── The two kinds of grid ──────────────────────────────────────────────────

const AO1_TEXT =
  'AO1: read, understand and respond to the text, with a critical style and an informed personal response, using references, including quotations, to support and illustrate interpretations.'
const AO2_TEXT =
  'AO2: analyse the language, form and structure the writer uses to create meanings and effects, using relevant subject terminology where appropriate.'
const AO3_TEXT =
  'AO3: show understanding of the relationships between the text and the contexts in which it was written.'

/** AO1 and AO2 marked together, as Eduqas marks them: one grid, one mark. */
function responseAndAnalysis(
  maxMarks: number,
  weighting: number,
  bands: readonly BandDescriptor[],
): AssessmentObjective {
  return {
    id: 'AO1-AO2',
    label: 'AO1-AO2 - Response and analysis, marked together on one grid',
    description: `AO1 and AO2, marked together on one grid and counting equally. ${AO1_TEXT} ${AO2_TEXT}`,
    maxMarks,
    weighting,
    bands,
  }
}

/** AO1, AO2 and AO3 marked together, as Eduqas marks them: one grid, one mark. */
function responseAnalysisAndContext(
  maxMarks: number,
  bands: readonly BandDescriptor[],
): AssessmentObjective {
  return {
    id: 'AO1-AO3',
    label: 'AO1-AO3 - Response, analysis and context, marked together on one grid',
    description: `AO1, AO2 and AO3, marked together on one grid and counting equally. ${AO1_TEXT} ${AO2_TEXT} ${AO3_TEXT}`,
    maxMarks,
    weighting: 1,
    bands,
  }
}

/**
 * AO4, technical accuracy: 5 marks, on the Component 1 Shakespeare essay and
 * the Component 2 post-1914 question only, on Eduqas's three performance
 * levels (threshold 1, intermediate 2-3, high 4-5), marked on its own grid.
 *
 * Until 19 September 2026 its label read "AO4 - Compare and contrast", which
 * contradicted the description beneath it; told the objective was comparison,
 * the model awarded these marks for comparing texts and never looked at
 * accuracy. Until 9 October 2026 it was a 10-mark ladder of five bands on the
 * poetry question, which Eduqas does not assess for AO4 at all.
 */
function accuracy(weighting: number): AssessmentObjective {
  return {
    id: 'AO4',
    label: 'AO4 - Technical accuracy',
    description:
      'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. Marked on its own grid, apart from the response.',
    maxMarks: 5,
    weighting,
    bands: [
      {
        band: 'Threshold',
        minMarks: 1,
        maxMarks: 1,
        label: 'Threshold performance',
        descriptor:
          'Spelling and punctuation are mostly right and the sentences have some variety; where there are errors, the meaning is still clear.',
        indicators: [
          'Errors present, the meaning always clear',
          'Some variety of words and sentences',
        ],
      },
      {
        band: 'Intermediate',
        minMarks: 2,
        maxMarks: 3,
        label: 'Intermediate performance',
        descriptor:
          'Accurate in most places, with a good range of vocabulary and sentence forms, so that the argument reads clearly.',
        indicators: ['Errors few and minor', 'Words chosen with some precision'],
      },
      {
        band: 'High',
        minMarks: 4,
        maxMarks: 5,
        label: 'High performance',
        descriptor:
          'Spelling and punctuation are accurate throughout, and vocabulary and sentences are chosen with control to make the meaning precise.',
        indicators: [
          'Accurate even in complex sentences',
          'Precise, ambitious vocabulary used with control',
        ],
      },
    ],
  }
}

// ─── Component 1, Section A: Shakespeare ────────────────────────────────────

const shakespeareExtract = responseAndAnalysis(15, 1, [
  band(
    1,
    1,
    3,
    'Basic',
    'Says a few basic things about the extract, with loose references and vague comments on its language; terms may be wrong.',
    ['Retells more than it responds', 'Loose reference, little quotation'],
  ),
  band(
    2,
    4,
    6,
    'Some understanding',
    'Partly answers the question and shows some understanding of the extract, with a few quotations and brief remarks on the language.',
    ['Some focus on the question', 'Brief, simple comment on language'],
  ),
  band(
    3,
    7,
    9,
    'Clear and focused',
    'Sticks to the question and understands the extract, with suitable quotations and the first real analysis of its language and the effects it creates.',
    ['Suitable quotations from across the extract', 'Analysis of language begins'],
  ),
  band(
    4,
    10,
    12,
    'Confident and developed',
    'Stays on the question throughout, with a confident grasp of the extract, good quotations and analysis of language that keeps getting deeper.',
    ['Sustained focus on the question', 'Increasingly analytical comment on methods'],
  ),
  band(
    5,
    13,
    15,
    'Insightful',
    'Insightful from start to finish: it sees how the extract fits the play, uses exactly the right quotations and weighs how language, form and structure shape meaning.',
    ['An overview of the extract within the play', 'Evaluates how methods create meaning'],
  ),
])

const shakespeareEssay = responseAndAnalysis(20, 20 / 25, [
  band(
    1,
    1,
    4,
    'Basic',
    "Says a few basic things about the play, with loose references and vague comments on Shakespeare's methods.",
    ['Retells more than it argues', 'Loose references to the play'],
  ),
  band(
    2,
    5,
    8,
    'Some understanding',
    'Partly answers the question and shows some knowledge of the play, with a few quotations and brief remarks on methods.',
    ['Some focus on the question', 'A few remembered quotations'],
  ),
  band(
    3,
    9,
    12,
    'Clear and focused',
    'Sticks to the question and understands the play, with suitable references and the first real analysis of methods and their effects.',
    ['Moments from more than one part of the play', 'Analysis of methods begins'],
  ),
  band(
    4,
    13,
    16,
    'Confident and developed',
    'Stays on the question throughout, with a confident grasp of the whole play, good references and analysis that keeps getting deeper.',
    ['Well-chosen references from across the play', 'Increasingly analytical'],
  ),
  band(
    5,
    17,
    20,
    'Insightful',
    "Insightful from start to finish, with a view across the whole play, exactly the right references and analysis that weighs how Shakespeare's choices shape meaning.",
    ['An overview of the whole play', 'Evaluates how methods create meaning'],
  ),
])

// ─── Component 1, Section B: the poetry anthology ──────────────────────────

const anthologyPoem = responseAnalysisAndContext(15, [
  band(
    1,
    1,
    3,
    'Basic',
    'Says a few basic things about the poem, with loose references, vague comments on its language and little sense of context.',
    ['Paraphrases more than it responds', 'Context missing or unconnected'],
  ),
  band(
    2,
    4,
    6,
    'Some understanding',
    "Partly answers the question, with a few quotations, brief remarks on the poet's methods and some mention of context.",
    ['Brief comment on methods', 'Context mentioned, loosely linked'],
  ),
  band(
    3,
    7,
    9,
    'Clear and focused',
    'Sticks to the question and understands the poem, with suitable quotations, the first real analysis of its methods and context that is relevant.',
    ['Analysis of methods begins', 'Relevant context'],
  ),
  band(
    4,
    10,
    12,
    'Confident and developed',
    'Stays on the question throughout, with good quotations, analysis that keeps getting deeper and context that clearly helps to explain the poem.',
    ['Increasingly analytical', 'Context used to explain meaning'],
  ),
  band(
    5,
    13,
    15,
    'Insightful',
    "Insightful from start to finish, with exactly the right quotations, analysis that weighs the poet's choices and context built into the argument.",
    ['Evaluates how methods create meaning', 'Context part of the argument, never bolted on'],
  ),
])

const anthologyComparison = responseAnalysisAndContext(25, [
  band(
    1,
    1,
    5,
    'Barely compares',
    'Barely compares the poems, with loose references and little on methods or context.',
    ['The poems treated separately', 'Little on methods or context'],
  ),
  band(
    2,
    6,
    10,
    'Obvious links',
    'Points out the obvious similarities or differences, with a few quotations, brief remarks on methods and some mention of context.',
    ['Obvious links between the poems', 'Context mentioned'],
  ),
  band(
    3,
    11,
    15,
    'Sound comparison',
    'Compares with focus and makes some sound links, with the first real analysis of methods and relevant context.',
    ['Sound links between the poems', 'Analysis of methods begins'],
  ),
  band(
    4,
    16,
    20,
    'Sustained comparison',
    'Keeps the comparison going throughout, across content, methods and context, with good quotations from both poems.',
    ['Comparison sustained across content, methods and context', 'Good quotations from both'],
  ),
  band(
    5,
    21,
    25,
    'Insightful comparison',
    "An insightful comparison from start to finish that ranges widely over both poems' ideas, methods and contexts.",
    ['Wide-ranging, perceptive comparison', 'Both poems analysed in depth'],
  ),
])

// ─── Component 1: Shakespeare and Poetry (80 marks) ──────────────────────────

export const eduqasLitComp1: MarkScheme = {
  id: 'eduqas-lit-comp1',
  board: 'WJEC Eduqas',
  subject: 'English Literature',
  paper: 'Component 1',
  title: 'Shakespeare and Poetry',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'C720U10-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
  questions: [
    {
      id: 'Section A (a)',
      questionType: 'Shakespeare extract',
      taskDescription:
        'Answer the question on the printed extract from the Shakespeare play you studied, for example what the characters say and do there and how an audience might react, referring closely to the extract.',
      totalMarks: 15,
      assessmentObjectives: [shakespeareExtract],
      examinerNotes:
        "One mark out of 15 for the whole answer, on one grid on which AO1 and AO2 count equally: find the band that best fits the answer as a whole, then the mark within it, and do not mark the two objectives separately. Reward close reference to the extract and analysis of Shakespeare's language and dramatic methods and their effect on an audience. Context is not assessed in Section A and helps only where it explains the extract; events elsewhere in the play need no more than a sentence placing it. Score the grid once, under the id AO1-AO2.",
    },
    {
      id: 'Section A (b)',
      questionType: 'Shakespeare essay',
      taskDescription:
        'Write an essay about a character, relationship or theme across the whole play and how Shakespeare presents it. There is no extract: the answer draws on what the candidate knows and remembers of the play.',
      totalMarks: 25,
      assessmentObjectives: [shakespeareEssay, accuracy(5 / 25)],
      examinerNotes:
        'Two marks. One out of 20 for AO1 and AO2 together, on one grid on which they count equally, found by best fit for the essay as a whole; and a separate mark out of 5 for AO4, spelling, punctuation, vocabulary and sentence structures, on its own grid. Reward knowledge of the whole play, with moments from its beginning, middle and end linked to the question, and comment on how Shakespeare presents the idea. Context is not assessed in Section A. Score them under the ids AO1-AO2 and AO4.',
    },
    {
      // The id saved essays use.
      id: 'Section B (a)',
      questionType: 'Poetry anthology, one named poem',
      taskDescription:
        'Write about how the poet presents a theme or idea in the named poem from the Eduqas Poetry Anthology, which is printed on the paper, including its contexts.',
      totalMarks: 15,
      assessmentObjectives: [anthologyPoem],
      examinerNotes:
        'One mark out of 15 for the whole answer, on one grid on which AO1, AO2 and AO3 count equally; do not mark them separately. Context is assessed here: reward context linked to what the poem means, such as when and why it was written, rather than separate facts. Score the grid once, under the id AO1-AO3.',
    },
    {
      id: 'Section B (b)',
      questionType: 'Poetry anthology comparison',
      taskDescription:
        'Choose one other poem from the anthology on the same theme and compare it with the named poem: what each is about and how it is built, how the poets create effects, and the contexts of both. Only the named poem is printed.',
      totalMarks: 25,
      assessmentObjectives: [anthologyComparison],
      examinerNotes:
        'One mark out of 25 for the whole answer, on one grid on which AO1, AO2 and AO3 count equally, with comparison expected in all three; do not mark them separately. The second poem must come from the anthology and is written about from memory. Reward a comparison kept up throughout, across content, methods and contexts, with real detail on both poems; it may be woven through the answer or come in paragraphs of its own. An unbalanced answer that spends most of its length on the printed poem cannot reach the higher bands. Score the grid once, under the id AO1-AO3.',
    },
  ],
}

// ─── Component 2, Section A: post-1914 prose or drama ──────────────────────

const modernText = responseAndAnalysis(35, 35 / 40, [
  band(
    1,
    1,
    7,
    'Basic',
    "Says a few basic things about the text, with loose references and vague comments on the writer's methods.",
    ['Retells more than it argues', 'Loose references to the text'],
  ),
  band(
    2,
    8,
    14,
    'Some understanding',
    'Partly answers the question and shows some knowledge of the text, with a few quotations and brief remarks on methods.',
    ['Some focus on the question', 'Brief comment on methods'],
  ),
  band(
    3,
    15,
    21,
    'Clear and focused',
    'Sticks to the question and understands the text, with suitable references and the first real analysis of methods and their effects.',
    ['Suitable references, the extract among them', 'Analysis of methods begins'],
  ),
  band(
    4,
    22,
    28,
    'Confident and developed',
    'Stays on the question throughout, with a confident grasp of the text, good references from the extract and beyond, and analysis that keeps getting deeper.',
    ['References from the extract and the whole text', 'Increasingly analytical'],
  ),
  band(
    5,
    29,
    35,
    'Insightful',
    "Insightful from start to finish, with a view across the whole text, exactly the right references and analysis that weighs how the writer's choices shape meaning.",
    ['An overview of the whole text', 'Evaluates how methods create meaning'],
  ),
])

// ─── Component 2, Section B: 19th-century prose ─────────────────────────────

const nineteenthCenturyNovel = responseAnalysisAndContext(40, [
  band(
    1,
    1,
    8,
    'Basic',
    'Says a few basic things about the novel, with loose references, vague comments on methods and little sense of context.',
    ['Retells more than it argues', 'Context missing or unconnected'],
  ),
  band(
    2,
    9,
    16,
    'Some understanding',
    'Partly answers the question, with a few quotations, brief remarks on methods and some mention of context.',
    ['Brief comment on methods', 'Context mentioned, loosely linked'],
  ),
  band(
    3,
    17,
    24,
    'Clear and focused',
    'Sticks to the question and understands the novel, with suitable references, the first real analysis of methods and context that is relevant.',
    ['Analysis of methods begins', 'Relevant context'],
  ),
  band(
    4,
    25,
    32,
    'Confident and developed',
    'Stays on the question throughout, with good references, analysis that keeps getting deeper and context that clearly shapes the argument.',
    ['Increasingly analytical', 'Context shapes the argument'],
  ),
  band(
    5,
    33,
    40,
    'Insightful',
    "Insightful from start to finish, with a view across the whole novel, exactly the right references, analysis that weighs the writer's choices and context built into every point.",
    ['An overview of the whole novel', 'Context part of every point, never bolted on'],
  ),
])

// ─── Component 2, Section C: unseen poetry ──────────────────────────────────

const unseenPoem = responseAndAnalysis(15, 1, [
  band(
    1,
    1,
    3,
    'Basic',
    'Says a few basic things about the poem, with loose references and vague comments on its methods.',
    ['Paraphrases more than it responds', 'Loose references'],
  ),
  band(
    2,
    4,
    6,
    'Some understanding',
    'Shows some understanding of the poem, with a few quotations and brief remarks on its methods.',
    ['Some focus on the question', 'Brief comment on methods'],
  ),
  band(
    3,
    7,
    9,
    'Clear and focused',
    'Understands the poem and sticks to the question, with suitable quotations and the first real analysis of methods and their effects.',
    ['Suitable quotations', 'Analysis of methods begins'],
  ),
  band(
    4,
    10,
    12,
    'Confident and developed',
    'A confident reading throughout, with good quotations and analysis that keeps getting deeper.',
    ['A sustained, confident reading', 'Increasingly analytical'],
  ),
  band(
    5,
    13,
    15,
    'Insightful',
    "Insightful from start to finish, with a view of the whole poem, exactly the right quotations and analysis that weighs how the poet's choices shape meaning.",
    ['An overview of the whole poem', 'Evaluates how methods create meaning'],
  ),
])

const unseenComparison = responseAndAnalysis(25, 1, [
  band(
    1,
    1,
    5,
    'Barely compares',
    'Barely compares the poems, with loose references and vague comments on methods.',
    ['The poems treated separately', 'Loose references'],
  ),
  band(
    2,
    6,
    10,
    'Obvious links',
    'Points out the obvious similarities or differences, with a few quotations and brief remarks on methods.',
    ['Obvious links between the poems', 'Brief comment on methods'],
  ),
  band(
    3,
    11,
    15,
    'Sound comparison',
    'Compares with focus and makes some sound links, with the first real analysis of methods and their effects.',
    ['Sound links between the poems', 'Analysis of methods begins'],
  ),
  band(
    4,
    16,
    20,
    'Sustained comparison',
    'Keeps the comparison going throughout, across ideas and methods, with good quotations from both poems.',
    ['Comparison sustained across ideas and methods', 'Good quotations from both'],
  ),
  band(
    5,
    21,
    25,
    'Insightful comparison',
    'An insightful comparison from start to finish that ranges widely over both poems and weighs how their methods shape meaning.',
    ['Wide-ranging, perceptive comparison', 'Both poems analysed in depth'],
  ),
])

// ─── Component 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry (120 marks)

export const eduqasLitComp2: MarkScheme = {
  id: 'eduqas-lit-comp2',
  board: 'WJEC Eduqas',
  subject: 'English Literature',
  paper: 'Component 2',
  title: 'Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
  totalMarks: 120,
  durationMinutes: 150,
  version: 'C720U20-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
  questions: [
    {
      id: 'Section A',
      questionType: 'Post-1914 prose/drama',
      taskDescription:
        'Write about a character, relationship or theme in the post-1914 novel or play studied and how it is presented at different points in the text, using the printed extract and knowledge of the whole text.',
      totalMarks: 40,
      assessmentObjectives: [modernText, accuracy(5 / 40)],
      examinerNotes:
        'Two marks. One out of 35 for AO1 and AO2 together, on one grid on which they count equally, found by best fit for the answer as a whole; and a separate mark out of 5 for AO4, spelling, punctuation, vocabulary and sentence structures, on its own grid. The answer should use both the printed extract and the text as a whole, in no set order, and for a play may discuss dramatic methods such as stage directions. Context is not assessed in Section A. Score them under the ids AO1-AO2 and AO4.',
    },
    {
      id: 'Section B',
      questionType: '19th century prose',
      taskDescription:
        'Write about a character, relationship or theme in the 19th-century novel studied and how it is presented at different points in the novel, using the printed extract and knowledge of the whole novel, and referring to its contexts.',
      totalMarks: 40,
      assessmentObjectives: [nineteenthCenturyNovel],
      examinerNotes:
        "One mark out of 40 for the whole answer, on one grid on which AO1, AO2 and AO3 count equally; do not mark them separately. The answer should use the extract and the novel as a whole. Context is assessed here, and only here in this component: reward context woven into the argument, showing how the time, society or the writer's purpose shapes what is discussed, rather than a separate history lesson. It need not take up a third of the essay. Score the grid once, under the id AO1-AO3.",
    },
    {
      id: 'Section C (a)',
      questionType: 'Unseen poetry',
      taskDescription:
        'Write about the first unseen poem, from the 20th or 21st century, and its effect: its subject, how it is put together, the ideas behind it and the effect of its words and images.',
      totalMarks: 15,
      assessmentObjectives: [unseenPoem],
      examinerNotes:
        'One mark out of 15 for the whole answer, on one grid on which AO1 and AO2 count equally; do not mark them separately. The candidate has not studied the poem: reward any sensible reading the poem supports, with analysis of its language, imagery, form and structure. Context is not assessed in Section C. Score the grid once, under the id AO1-AO2.',
    },
    {
      id: 'Section C (b)',
      questionType: 'Unseen poetry comparison',
      taskDescription:
        'Compare the second unseen poem with the first: their subjects and how each is put together, the ideas behind them, their words and images, and the response each one draws.',
      totalMarks: 25,
      assessmentObjectives: [unseenComparison],
      examinerNotes:
        'One mark out of 25 for the whole answer, on one grid on which AO1 and AO2 count equally, with comparison expected in both; do not mark them separately. Reward comparison of ideas, mood, language and structure, detailed analysis of the second poem, quotations from both and a personal response to each; the comparison may be woven through or come in paragraphs of its own. Repeating the answer to Section C (a) before adding a little on the second poem, or treating the poems separately, holds an answer down. Context is not assessed. Score the grid once, under the id AO1-AO2.',
    },
  ],
}
