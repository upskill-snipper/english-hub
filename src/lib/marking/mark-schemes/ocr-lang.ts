// ─── OCR GCSE English Language Mark Scheme ───────────────────────────────────
// J351 - Component 01 and Component 02, as OCR sets and marks them.
//
// ── REBUILT 24 October 2026: the marker now marks OCR's own questions ──────
// The figures below come from the two guides written on 24 October 2026 and
// checked twice against OCR's documents, src/data/mark-scheme-guides/
// ocr-lang-component01.ts and ocr-lang-component02.ts. Those cite OCR's
// J351/01 and J351/02 mark schemes for June 2024 (each question's marks,
// objectives and level ranges), the J351 specification, Version 2.0, March
// 2026 (2 hours and 80 marks a component) and the J351 sample assessment
// materials. Changing the marker changes how essays are scored, so it was put
// to the founder (document 30), who approved it on 24 October 2026. No person
// has checked these figures against OCR's papers, so neither component is in
// VERIFIED_SPECS (../examiner/verification.ts): both are still unverified.
//
// Component 01, Communicating information and ideas. Before: Q1 4, Q2 6, Q3
// 12, Q4 10, Q5 40 and Q5-SPaG 8.
// - Q4 marked comparison alone, out of 10 on four levels. OCR's Question 4 is
//   18 marks: a statement about both texts, evaluated (AO4, 12, six two-mark
//   levels) and compared (AO3, 6, six one-mark levels), on two grids whose
//   marks are added.
// - Q5-SPaG, an 8-mark proofreading question marked as AO4, is not on the
//   paper and has gone. AO4 in English Language is critical evaluation, which
//   Question 4 assesses; spelling and punctuation are AO6, inside the writing.
//   Those 8 marks were why the old paper still added up to 80.
// - The writing was one task, Q5. OCR sets Question 5 or Question 6 and the
//   candidate answers one, so its id is now 'Q5/Q6'.
// - Q3's AO2 had four levels (1-3 up to 10-12) and AO5 four six-mark levels;
//   OCR has six two-mark levels and six four-mark levels.
// - Q1 had four one-mark levels and asked only for explicit information. OCR
//   marks it point by point, and AO1 covers implicit information too.
// Q1 4 (AO1), Q2 6 (AO1, three levels), Q3 12 (AO2) and AO6 on four levels
// were already OCR's. Question 2 is AO1 only; the guide explains why it does
// not follow OCR's June 2024 AO grid, which also lists it under AO3.
//
// Component 02, Exploring effects and impact. Before: Q1 16 (AO2), Q2 16
// (AO4), Q3 8 (AO3) and Q4 40 (the writing). None of the reading questions was
// OCR's. They are now OCR's Question 1, 4 marks of AO1 marked point by point;
// Question 2, 6 marks of AO2 on six one-mark levels; Question 3, 12 marks of
// AO2 on six two-mark levels; and Question 4, the 18-mark evaluation and
// comparison, as in Component 01. The writing is Question 5 or 6 ('Q5/Q6'),
// with AO5 on OCR's six levels. The old Q1 allowed a 19th-century source,
// which this component never sets, and the old writing offered a description
// from a picture or a story opening, where OCR's recent tasks are a story from
// a given title or personal writing about an experience.
//
// The ids took OCR's numbering because no saved essay named a question of
// either component on 24 October 2026, and every reference moved with them
// (../essay-feedback-targets.ts, the guides' markerQuestionId, tests). The
// level descriptors are this site's own words, adapted from the guides: OCR's
// descriptors are its copyright and are not copied. The structure test,
// ./__tests__/ocr-lang-structure.test.ts, holds every figure to the guides.
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/** One level's wording: this site's own, never OCR's. */
type LevelText = Pick<BandDescriptor, 'label' | 'descriptor' | 'indicators'>

/** Levels named as OCR names them, "Level 1" up, at the ranges given. */
function levels(
  ranges: readonly (readonly [number, number])[],
  text: readonly LevelText[],
): BandDescriptor[] {
  if (ranges.length !== text.length) throw new Error('ocr-lang: a level without its wording')
  return ranges.map(([minMarks, maxMarks], i) => ({
    band: `Level ${i + 1}`,
    minMarks,
    maxMarks,
    ...text[i]!,
  }))
}

// ─── Question 1, both components: marked point by point ─────────────────────

/**
 * OCR marks Question 1 one mark per correct answer, in two or three parts whose
 * split changes from paper to paper, so the marker holds only the total. One
 * band rather than levels, so the examiner pack counts points too.
 */
const ao1Points: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify and interpret information and ideas',
  description:
    'Find information and ideas in the lines the question names, whether the text states them outright (explicit) or only suggests them (implicit).',
  maxMarks: 4,
  weighting: 1,
  bands: [
    {
      band: 'Point-marked',
      minMarks: 1,
      maxMarks: 4,
      label: 'One mark for each correct answer',
      descriptor:
        'Not marked on levels. Each correct answer earns one mark, up to the marks shown for its part, and the parts add up to 4. The mark is the number of correct answers.',
      indicators: [
        'Each answer comes from inside the lines the question names',
        'A word, phrase or quotation, copied accurately, where the part asks for one',
        "A brief explanation in the candidate's own words where the part asks what something shows, means or why it happens",
      ],
    },
  ],
}

// ─── Component 01, Question 2: synthesis ────────────────────────────────────

const ao1Synthesis: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Select and synthesise evidence from both texts',
  description:
    'Bring together evidence from the two texts to make points about the link the question names, such as what the two writers, or their experiences, have in common.',
  maxMarks: 6,
  weighting: 1,
  bands: levels(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [
      {
        label: 'Few links',
        descriptor:
          'Picks out a few details, mostly obvious ones, and does little to connect the two texts. The evidence may come mostly from one of them.',
        indicators: [
          'Details set side by side rather than linked',
          'Evidence thin, or taken mainly from one text',
        ],
      },
      {
        label: 'Sensible links',
        descriptor:
          'Makes sensible connections between the texts with relevant evidence, though one text may get more attention than the other.',
        indicators: ['Each connection backed by relevant evidence', 'One text may be favoured'],
      },
      {
        label: 'Confident, detailed links',
        descriptor:
          'Connects the texts confidently and in detail, with well-chosen evidence from both, and sees the bigger ideas they share as well as the facts.',
        indicators: [
          'Well-chosen evidence from both texts for each point',
          'Links reach shared ideas, attitudes or feelings, not only facts',
        ],
      },
    ],
  ),
}

// ─── Question 3, both components, and Component 02 Question 2: AO2 ──────────

const ao2Description =
  'Explain, comment on and analyse how the writer uses language (word choices, imagery, tone) and structure (how the writing opens, where its focus shifts, how its sentences and paragraphs are shaped, how it ends) to create effects and influence the reader, using subject terms to support the points.'

/** The 12-mark question: six two-mark levels. */
const ao2Extended: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language and structure',
  description: ao2Description,
  maxMarks: 12,
  weighting: 1,
  bands: levels(
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ],
    [
      {
        label: 'Retells more than it analyses',
        descriptor:
          'Mostly describes or retells the lines, with little sense of how the writer creates effects and few or no subject terms.',
        indicators: [
          'Paraphrase in place of comment',
          'Few features named, fewer effects explained',
        ],
      },
      {
        label: 'Uneven, features named',
        descriptor:
          'Notices some features, but says much more about either language or structure than the other, and often names features without explaining what they do. Uses some terms, not always relevant ones.',
        indicators: [
          'One of language or structure dominates',
          'Features spotted more often than explained',
        ],
      },
      {
        label: 'Some effects explained',
        descriptor:
          'Explains some effects clearly and comments on both language and structure, though one of them is explained less fully. Some useful terms.',
        indicators: [
          'Both language and structure covered, one more thinly',
          'Some effects clearly explained',
        ],
      },
      {
        label: 'Explains with understanding',
        descriptor:
          'Explains with understanding, and in some depth, what both the language and the structure do, though one may get more attention than the other. Terms help to develop the points.',
        indicators: ['Both explained in some depth', 'Terms used to develop the points'],
      },
      {
        label: 'Analyses with insight',
        descriptor:
          'Analyses with insight, giving language and structure fairly even, detailed attention. Terms fit naturally into the explanations.',
        indicators: [
          'Language and structure in fairly even detail',
          'Terms woven into the analysis',
        ],
      },
      {
        label: 'Detailed, subtle analysis',
        descriptor:
          "Detailed, subtle analysis of language and structure in every point, showing exactly how the writer shapes the reader's response. Terms are exact and strengthen the argument.",
        indicators: [
          'Every point analyses how the writing works on the reader',
          'Exact terms that sharpen the argument',
        ],
      },
    ],
  ),
}

/** Component 02's 6-mark question: six one-mark levels. */
const ao2Short: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language and structure',
  description: ao2Description,
  maxMarks: 6,
  weighting: 1,
  bands: levels(
    [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
    ],
    [
      {
        label: 'Retells',
        descriptor:
          'Describes or retells the lines, with little sense of how the writer creates the effect and few or no subject terms.',
        indicators: ['Paraphrase in place of comment'],
      },
      {
        label: 'Uneven, features named',
        descriptor:
          'Notices some features, but says much more about either language or structure than the other, and mostly names features without explaining what they do.',
        indicators: ['One of language or structure dominates'],
      },
      {
        label: 'Some effects explained',
        descriptor:
          'Explains some effects clearly and mentions both language and structure, though not both fully.',
        indicators: ['Both mentioned, one more thinly'],
      },
      {
        label: 'Explains with understanding',
        descriptor:
          'Explains with understanding what both the language and the structure do, though one may get more attention than the other.',
        indicators: ['Both explained, perhaps unevenly'],
      },
      {
        label: 'Analyses with insight',
        descriptor:
          'Analyses with insight, giving language and structure fairly even, detailed attention, with terms that fit naturally.',
        indicators: ['Fairly even, detailed attention to both'],
      },
      {
        label: 'Consistent, subtle analysis',
        descriptor:
          'Analyses language and structure in consistent depth and with subtlety. The terms are exact and strengthen each point.',
        indicators: ['Consistent depth on both', 'Exact terms in every point'],
      },
    ],
  ),
}

// ─── Question 4, both components: evaluation and comparison ─────────────────
// Two grids whose marks are added, as OCR marks them (June 2024 mark schemes).

const ao3Comparison: AssessmentObjective = {
  id: 'AO3',
  label: "AO3 - Compare writers' ideas and perspectives",
  description:
    'Compare the ideas and viewpoints the two writers present, and how each one conveys them, across the two texts.',
  maxMarks: 6,
  weighting: 6 / 18,
  bands: levels(
    [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
    ],
    [
      {
        label: 'Basic likenesses or differences',
        descriptor: "Notes one or two basic likenesses or differences between the writers' ideas.",
        indicators: ['A point of comparison made in passing'],
      },
      {
        label: 'Main links spotted',
        descriptor: "Spots the main ways the writers' ideas and viewpoints are alike or different.",
        indicators: ['Main similarities or differences identified'],
      },
      {
        label: 'Clear comparison of ideas',
        descriptor:
          "Sets the writers' ideas side by side clearly, and begins to compare their methods too.",
        indicators: ['Ideas compared clearly', 'Methods starting to be compared'],
      },
      {
        label: 'Developed comparison',
        descriptor: 'Develops the comparison of both what the writers think and how they show it.',
        indicators: ['Ideas and methods both compared, with some development'],
      },
      {
        label: 'Sustained comparison',
        descriptor:
          'Keeps the comparison going through the whole answer, covering both ideas and methods.',
        indicators: ['Comparison kept up from start to finish'],
      },
      {
        label: 'Detailed comparison throughout',
        descriptor:
          'Moves between the two texts all the way through, exploring in detail what each writer thinks and how each one shows it.',
        indicators: [
          'Moves between the texts in every point',
          'Detailed on both ideas and methods',
        ],
      },
    ],
  ),
}

const ao4Evaluation: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate texts critically',
  description:
    'Judge how far the statement holds for each text and how the texts affect the reader, and support the judgement with well-chosen quotations from both.',
  maxMarks: 12,
  weighting: 12 / 18,
  bands: levels(
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ],
    [
      {
        label: 'Retells more than it judges',
        descriptor:
          'Mostly says what happens in the texts, often by copying out lines or retelling them, with little real judgement of the statement.',
        indicators: ['Narration or quotation in place of judgement'],
      },
      {
        label: 'Simple judgements',
        descriptor:
          'Gives simple judgements on the statement, notices a little of how the texts affect a reader, and uses some suitable quotations.',
        indicators: ['Agrees or disagrees with simple reasons', 'Some suitable quotations'],
      },
      {
        label: 'Clear judgements',
        descriptor:
          'Makes clear judgements on the statement, shows some sense of how the texts affect a reader, and backs them with suitable quotations.',
        indicators: ['A clear view on the statement', 'Some sense of the effect on a reader'],
      },
      {
        label: 'Developed judgements',
        descriptor:
          'Develops its judgements on the statement, comments on the effect on the reader and chooses quotations well.',
        indicators: ['Judgements developed with reasons', 'Quotations chosen to prove points'],
      },
      {
        label: 'Careful, convincing evaluation',
        descriptor:
          'Weighs up the statement with care and good understanding, explains clearly how the texts affect the reader, and picks quotations that make the case convincing.',
        indicators: [
          'How far the statement holds is weighed, not asserted',
          'Quotations make the case convincing',
        ],
      },
      {
        label: 'Sharp, balanced evaluation',
        descriptor:
          'Judges the statement sharply and with balance from start to finish, explains fully how the texts work on the reader, and builds exactly the right quotations into the argument.',
        indicators: [
          'A balanced verdict sustained through the whole answer',
          'Exactly the right quotations built into the argument',
        ],
      },
    ],
  ),
}

// ─── Section B, both components: the writing ────────────────────────────────

const ao5Description =
  'Communicate clearly, effectively and imaginatively, choosing and adapting tone, style and register for the form, purpose and audience, and organise ideas with paragraphs and structural features so the piece holds together.'

/** Component 01: non-fiction writing in a set form. */
const ao5NonFiction: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation',
  description: ao5Description,
  maxMarks: 24,
  weighting: 24 / 40,
  bands: levels(
    [
      [1, 4],
      [5, 8],
      [9, 12],
      [13, 16],
      [17, 20],
      [21, 24],
    ],
    [
      {
        label: 'Some attempt at the form',
        descriptor:
          'Makes some attempt at a suitable form, but does little to suit the tone to the reader, and there is little planned structure or paragraphing.',
        indicators: ['Form only partly followed', 'Little sense of the reader or a plan'],
      },
      {
        label: 'Some control',
        descriptor:
          'Mostly keeps to a suitable form, tries for a fitting tone, and shows some organisation through paragraphs and links.',
        indicators: ['Tone attempted for the audience', 'Some paragraphs and links'],
      },
      {
        label: 'Clear, slipping at times',
        descriptor:
          'Sticks to the form and keeps the audience and purpose clearly in mind. The tone is right but slips at times. The piece has a clear shape overall, and paragraphs and links mostly work.',
        indicators: ['Audience and purpose clearly in mind', 'A clear overall shape'],
      },
      {
        label: 'Clearly adapted, well organised',
        descriptor:
          'Adapts the form clearly for the reader and purpose, with a tone and style that suit the task. A well-organised piece that sometimes uses its structure for effect.',
        indicators: ['Tone and style suit the task', 'Structure used for effect at times'],
      },
      {
        label: 'Confident and sustained',
        descriptor:
          'Uses the form confidently, with a sure sense of the reader and the purpose. The tone and style hold steady from start to finish, and paragraphs and sentences are planned to do specific jobs for the reader.',
        indicators: [
          'Tone and style held from start to finish',
          'Paragraphs and sentences planned for the reader',
        ],
      },
      {
        label: 'Bold and fully controlled',
        descriptor:
          'Bends the form on purpose to influence the reader. Bold, well-judged choices of tone and style drive the purpose, and every part of the structure is under control and used for effect.',
        indicators: [
          'Form shaped deliberately to influence the reader',
          'Every structural choice controlled and purposeful',
        ],
      },
    ],
  ),
}

/** Component 02: creative writing. */
const ao5Creative: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation',
  description: ao5Description,
  maxMarks: 24,
  weighting: 24 / 40,
  bands: levels(
    [
      [1, 4],
      [5, 8],
      [9, 12],
      [13, 16],
      [17, 20],
      [21, 24],
    ],
    [
      {
        label: 'Some attempt at the task',
        descriptor:
          'Makes some attempt at the kind of writing asked for, but does little to suit the tone to the reader, and there is little sense of a planned shape or paragraphs.',
        indicators: ['Task only partly followed', 'Little sense of a planned shape'],
      },
      {
        label: 'Some control',
        descriptor:
          'Mostly keeps to the task, tries for a fitting tone, and shows some organisation through paragraphs and links.',
        indicators: ['A fitting tone attempted', 'Some paragraphs and links'],
      },
      {
        label: 'Clear, slipping at times',
        descriptor:
          'Stays with the task and keeps the reader in mind. The tone is right but slips at times. The piece has a clear shape overall, and paragraphs mostly work.',
        indicators: ['The reader kept in mind', 'A clear overall shape'],
      },
      {
        label: 'Clearly handled, well organised',
        descriptor:
          'Handles the form clearly for the reader, with a voice and style that suit the task. A well-organised piece that sometimes uses its structure for effect.',
        indicators: ['Voice and style suit the task', 'Structure used for effect at times'],
      },
      {
        label: 'Confident and sustained',
        descriptor:
          'Writes with confidence, and the voice and style suit the task from start to finish. The piece is firmly shaped, and paragraphs and sentences are planned to do specific jobs for the reader.',
        indicators: ['Voice held from start to finish', 'A firmly shaped piece'],
      },
      {
        label: 'Bold and fully controlled',
        descriptor:
          'Shapes every part of the piece on purpose to work on the reader. Bold, well-judged choices of voice and style, and a structure fully under control and used for a range of effects.',
        indicators: [
          'Every part shaped to work on the reader',
          'Structure controlled and used for a range of effects',
        ],
      },
    ],
  ),
}

const ao6Accuracy: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 16,
  weighting: 16 / 40,
  bands: levels(
    [
      [1, 4],
      [5, 8],
      [9, 12],
      [13, 16],
    ],
    [
      {
        label: 'Mostly simple',
        descriptor:
          'Sentences are mostly simple, with some tries at longer ones. Punctuation is uneven, words are plain but relevant, and everyday words are largely spelt correctly.',
        indicators: ['Simple sentences dominate', 'Uneven punctuation'],
      },
      {
        label: 'Mostly accurate',
        descriptor:
          'Uses different kinds of sentence, mostly correctly and now and then for effect. Punctuation is usually right, some words are clearly picked for effect, and there are a few spelling slips, including on harder words.',
        indicators: ['Varied sentences, mostly correct', 'A few spelling slips'],
      },
      {
        label: 'Accurate and varied',
        descriptor:
          'Varies sentences widely and on purpose. Punctuation is accurate throughout and makes the meaning clear. Some ambitious words work well, and longer regular words are spelt correctly, with the odd slip on irregular or unusual ones.',
        indicators: ['Sentences varied on purpose', 'Accurate punctuation throughout'],
      },
      {
        label: 'Precise and ambitious',
        descriptor:
          'Bold, varied sentences are built to give each idea its full force. Punctuation is accurate and chosen for effect as well as for clarity. Words are precise and finely chosen, and even difficult or unusual words are spelt correctly, with only the very occasional slip.',
        indicators: [
          'Punctuation chosen for effect as well as clarity',
          'Precise vocabulary, difficult words spelt correctly',
        ],
      },
    ],
  ),
}

// ─── Examiner notes shared by both components ───────────────────────────────

const Q3_NOTES =
  'Language and structure both count: an answer that says much more about one than the other sits in the lower levels, and Levels 5 and 6 need fairly even, detailed analysis of both. Reward effects explained, not features named, with subject terms used inside the explanation. Keep to the text and the lines the question names.'

const Q4_NOTES =
  "Two grids, marked separately and added: AO4, 12 marks, for judging the statement across both texts and their effect on the reader, and AO3, 6 marks, for comparing the writers' ideas and how each presents them. OCR accepts evaluation and comparison woven together all the way through. The candidate may find the statement truer of one text than the other. Quotations from both texts are expected, and an answer that treats the texts separately and never links them earns very little of the AO3 mark."

// ─── Component 01: Communicating information and ideas ──────────────────────

export const ocrLangComponent01: MarkScheme = {
  id: 'ocr-lang-component01',
  board: 'OCR',
  subject: 'English Language',
  paper: 'Component 01',
  title: 'Communicating Information and Ideas',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J351/01',
  sourceUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-language-j351-from-2015/assessment/',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval',
      taskDescription:
        "Short questions on a set of lines from one of the two non-fiction texts (Text 1 in recent papers), 4 marks in two or three parts: a part may ask for a word, a phrase or a quotation, or for a point explained briefly in the candidate's own words.",
      totalMarks: 4,
      assessmentObjectives: [ao1Points],
      examinerNotes:
        "Marked point by point, not on levels: one mark for each correct answer, up to the marks each part carries, the parts adding up to 4 (OCR splits them two or three ways, differently from paper to paper). Credit only answers drawn from the lines the question names. Where a part asks for a word, a phrase or a quotation, credit it when it is accurate; where it asks for a point explained in the candidate's own words, credit a correct explanation in their own words. AO1 covers what the text implies as well as what it states.",
    },
    {
      id: 'Q2',
      questionType: 'Synthesis',
      taskDescription:
        'Bring the two texts together: write about the link the question names, for example what the two writers or their experiences have in common, using evidence from both texts.',
      totalMarks: 6,
      assessmentObjectives: [ao1Synthesis],
      examinerNotes:
        'AO1 only: this question rewards bringing the two texts together (synthesis), and there are no marks for analysing language. Credit points that link the texts on the idea the question names, each supported by evidence from both. A fair balance of evidence between the texts, and links that reach shared ideas, attitudes or feelings rather than surface facts, lift an answer up the levels; writing about one text and then the other without linking them stays low.',
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis',
      taskDescription:
        'Explore how the writer of one text (Text 2 in recent papers) uses language and structure to create the effect the question names, in the whole text or in the lines it sets.',
      totalMarks: 12,
      assessmentObjectives: [ao2Extended],
      examinerNotes: Q3_NOTES,
    },
    {
      id: 'Q4',
      questionType: 'Evaluation and comparison',
      taskDescription:
        'Respond to a statement about both texts and say how far you agree: judge the texts and their effect on you as a reader (evaluation, AO4, 12 marks), and compare the ideas the writers present and how they present them (comparison, AO3, 6 marks), quoting from both texts.',
      totalMarks: 18,
      assessmentObjectives: [ao3Comparison, ao4Evaluation],
      examinerNotes: Q4_NOTES,
    },
    {
      id: 'Q5/Q6',
      questionType: 'Non-fiction writing',
      taskDescription:
        'Answer one of two tasks, Question 5 or Question 6: a piece of non-fiction writing, such as a speech, a letter or an article, in the form and for the audience and purpose the task sets, linked to the theme of the reading texts.',
      totalMarks: 40,
      assessmentObjectives: [ao5NonFiction, ao6Accuracy],
      examinerNotes:
        'The candidate answers one task, Question 5 or Question 6, and both are marked the same way. Two grids, marked separately and added: AO5, 24 marks, for content and organisation (fitting the form, audience and purpose, with a suitable tone and a planned structure), and AO6, 16 marks, for technical accuracy (varied sentences, precise vocabulary, accurate spelling and punctuation). Reward writing that fits the form the task sets: a speech should sound like someone speaking to listeners, and a letter should be set out and addressed as a letter.',
    },
  ],
}

// ─── Component 02: Exploring effects and impact ─────────────────────────────

export const ocrLangComponent02: MarkScheme = {
  id: 'ocr-lang-component02',
  board: 'OCR',
  subject: 'English Language',
  paper: 'Component 02',
  title: 'Exploring Effects and Impact',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J351/02',
  sourceUrl:
    'https://www.ocr.org.uk/qualifications/gcse/english-language-j351-from-2015/assessment/',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval',
      taskDescription:
        "Short questions on a set of lines from one of the two literary prose texts (Text 1 in recent papers), 4 marks in parts that change from paper to paper: picking out words or phrases, or saying briefly, in the candidate's own words, what something shows or why it happens.",
      totalMarks: 4,
      assessmentObjectives: [ao1Points],
      examinerNotes:
        "Marked point by point, not on levels: one mark for each correct answer, up to the marks each part carries, the parts adding up to 4 and changing from paper to paper. Credit only answers drawn from the lines the question names. Where a part asks for words or phrases, credit accurate ones; where it asks what something shows or why it happens, credit a brief correct answer in the candidate's own words. An answer line that packs in several possible answers can earn nothing.",
    },
    {
      id: 'Q2',
      questionType: 'Language and structure analysis (short)',
      taskDescription:
        'Explain how the writer uses language and structure in a short section of one text (Text 1 in recent papers) to create the effect the question names, using subject terms.',
      totalMarks: 6,
      assessmentObjectives: [ao2Short],
      examinerNotes:
        'Language and structure both count, as in Question 3 at half the marks: an answer that says much more about one than the other sits in the lower levels, and Levels 5 and 6 need fairly even, detailed attention to both. Reward the effects of a few well-chosen quotations from the given lines, explained with accurate subject terms.',
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis',
      taskDescription:
        "Explore how the writer of the other text (Text 2 in recent papers) presents what the question names, such as a character's feelings or attitude, through the language and structure of the lines given.",
      totalMarks: 12,
      assessmentObjectives: [ao2Extended],
      examinerNotes: Q3_NOTES,
    },
    {
      id: 'Q4',
      questionType: 'Evaluation and comparison',
      taskDescription:
        'Respond to a statement about both texts and say how far you agree: weigh up your impressions of the texts and their effect on you as a reader (evaluation, AO4, 12 marks), and compare how the two writers present their ideas (comparison, AO3, 6 marks), quoting from both texts.',
      totalMarks: 18,
      assessmentObjectives: [ao3Comparison, ao4Evaluation],
      examinerNotes: Q4_NOTES,
    },
    {
      id: 'Q5/Q6',
      questionType: 'Creative writing',
      taskDescription:
        'Answer one of two tasks, Question 5 or Question 6: a piece of creative writing linked to the theme of the reading texts. In recent papers the two tasks were a story from a given title and personal writing about an experience, each with bullet points suggesting what to include.',
      totalMarks: 40,
      assessmentObjectives: [ao5Creative, ao6Accuracy],
      examinerNotes:
        'The candidate answers one task, Question 5 or Question 6, and both are marked the same way. Two grids, marked separately and added: AO5, 24 marks, for content and organisation (a clear, consistent viewpoint and voice, precise description and a deliberate shape), and AO6, 16 marks, for technical accuracy (varied sentences, ambitious vocabulary, accurate spelling and punctuation, including the punctuation of any speech). The task chosen, its title or focus and its bullet points, decides what is relevant.',
    },
  ],
}
