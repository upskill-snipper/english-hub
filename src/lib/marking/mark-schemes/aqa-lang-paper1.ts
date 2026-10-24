// ─── AQA GCSE English Language Paper 1 Mark Scheme ──────────────────────────
// Explorations in Creative Reading and Writing - 1 hour 45 minutes, 80 marks.
// Based on the AQA 8700 specification.
//
// CORRECTED 24 October 2026, with the founder's approval (document 30). The
// mark-scheme guide for this paper (src/data/mark-scheme-guides/aqa-lang-paper1.ts),
// written and checked against AQA's 8700/1 sample question paper and mark
// scheme (version 1.1, Sample set 1, first exam June 2026) and the 8700
// specification (version 1.6, March 2026), found that this data had not
// followed AQA's summer 2026 rewording. The paper's 80 marks, every
// question's marks and objectives, and the level ranges of Q2 to Q5 already
// agreed and are unchanged. What changed:
//   - Q1 is four multiple-choice parts, 1.1 to 1.4, a mark for each correct
//     answer and no levels. It was "list four things" on a four-level ladder
//     ending "Level 4: Perceptive" for one mark, which neither form of AQA's
//     question has: the list it replaced was also a mark a point, and an
//     answer in that form is still marked that way.
//   - Q2's note said "Precise quotation is essential at Level 3+"; AQA's
//     Level 3 asks for a range of relevant detail and sets no quotation
//     rule. The cap for an answer only about lines outside the ones printed
//     in the question (Level 2 at most) was missing.
//   - Q3 asks how the whole source is structured to create one effect the
//     question names (tension, on the sample), not to interest the reader.
//   - Q4 asks how far you agree and/or disagree with a view about a part of
//     the source the question names.
//   - Q5 is a description, any picture given for ideas only, or narrative
//     writing (the opening of a story, on the sample); the cap of 12 of 24
//     for AO5 when the writing does not address the focus of the task was
//     missing.
// No question id changed: saved essays name Q2 to Q5.
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8700
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'

// ─── Reading Assessment Objectives ──────────────────────────────────────────

// Question 1 is point-marked: one band, so the examiner tool counts points
// rather than placing the answer in a level (../examiner/packs/derive.ts).
const ao1Retrieval: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify information and ideas',
  description:
    'Identify explicit and implicit information and ideas in the lines the question names.',
  maxMarks: 4,
  weighting: 0.05,
  bands: [
    {
      band: 'Per mark',
      minMarks: 1,
      maxMarks: 4,
      label: 'One mark per correct answer',
      descriptor:
        'One mark for each of the four parts, 1.1 to 1.4, answered correctly, up to 4. There are no levels.',
      indicators: [
        'Each answer checked against the lines the question names',
        'Four things listed from the named lines, the form set before summer 2026: one mark per valid point',
      ],
    },
  ],
}

const ao2Language: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language',
  description:
    'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
  maxMarks: 8,
  weighting: 0.1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Simple comment on the effect of language. Simple mention of method. Simple references. Simple use of subject terminology.',
      indicators: ['Identifies devices but not their effect', 'Limited or inaccurate terminology'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some understanding of effects of language. Identifies some methods. Some appropriate references. Some use of terminology.',
      indicators: ['Names methods correctly and comments briefly on effect'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        "Clear, relevant explanation of the effects of the writer's choice of language. Range of relevant quotations. Accurate subject terminology.",
      indicators: ['Explains effect with clear reference', 'Accurate terminology'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        "Analysis of the effects of the writer's choice of language. Judicious range of quotations. Sophisticated use of terminology.",
      indicators: [
        'Perceptive, detailed analysis of layered meanings',
        'Precise, embedded terminology',
      ],
    },
  ],
}

const ao2Structure: AssessmentObjective = {
  // AQA assesses structure under AO2, not AO3. This carried id 'AO3' while its
  // own label said AO2, so every commentary on Paper 1 Question 3 ended
  // "appropriate for AO3" — on a paper where AO3 (comparing writers' ideas
  // across texts) is not assessed at all; it appears only on Paper 2 Q4. The
  // label, description and 8-mark tariff were already correct.
  id: 'AO2',
  label: 'AO2 - Analyse structure',
  description:
    'Explain, comment on and analyse how writers use structure to achieve effects and influence readers.',
  maxMarks: 8,
  weighting: 0.1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor: 'Simple awareness of structural features. Simple references or textual details.',
      indicators: ['Notes beginning/middle/end', 'Lists features without effect'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some understanding of effects of structural features. Identifies some structural features.',
      indicators: ['Comments briefly on how shifts in focus affect reader'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        "Clear, relevant explanation of effects of writer's choice of structure. Range of relevant examples.",
      indicators: ['Explains how pacing, perspective shifts, openings and endings shape meaning'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        "Analysis of effects of writer's choice of structural features. Judicious selection of examples.",
      indicators: [
        'Perceptive analysis of whole-text structure and its cumulative effect on readers',
      ],
    },
  ],
}

const ao4Evaluation: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate critically',
  description: 'Evaluate texts critically and support this with appropriate textual references.',
  maxMarks: 20,
  weighting: 0.25,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 5,
      label: 'Simple',
      descriptor: "Simple evaluative comment(s). Simple reference(s) to writer's methods.",
      indicators: ['Expresses basic opinion with limited support'],
    },
    {
      band: 'Level 2',
      minMarks: 6,
      maxMarks: 10,
      label: 'Some',
      descriptor:
        "Some evaluative comment(s). Some reference to writer's methods with some effect.",
      indicators: ['Begins to justify an opinion with reference'],
    },
    {
      band: 'Level 3',
      minMarks: 11,
      maxMarks: 15,
      label: 'Clear',
      descriptor:
        "Clear evaluation of the text. Clear reference to writer's methods and their effect.",
      indicators: ['Clear, considered personal response tied to method'],
    },
    {
      band: 'Level 4',
      minMarks: 16,
      maxMarks: 20,
      label: 'Perceptive',
      descriptor:
        "Perceptive and detailed evaluation of the text. Judicious reference to writer's methods.",
      indicators: ["Convincing, critical evaluation fully rooted in analysis of writer's craft"],
    },
  ],
}

// ─── Writing Assessment Objectives (Q5) ─────────────────────────────────────

const ao5Writing: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation',
  description:
    'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
  maxMarks: 24,
  weighting: 0.3,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 6,
      label: 'Simple, limited',
      descriptor:
        'Simple communication. Simple awareness of the reader. Simple linking of ideas. Paragraphs may be used.',
      indicators: [
        'Limited range of vocabulary and sentence forms',
        'Basic, often inconsistent tone',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 7,
      maxMarks: 12,
      label: 'Some, attempting',
      descriptor:
        'Some clear communication. Some attempt to adapt for purpose, audience and form. Some linking of ideas. Attempts paragraphs with some discourse markers.',
      indicators: ['Tone starts to match form', 'Some conscious vocabulary choices'],
    },
    {
      band: 'Level 3',
      minMarks: 13,
      maxMarks: 18,
      label: 'Clear and consistent',
      descriptor:
        'Clear and consistent communication. Matching of tone, style and register to purpose, audience and form. Usually coherent paragraphs with clear discourse markers.',
      indicators: ['Writing is engaging and well-sequenced', 'Clear sense of purpose and audience'],
    },
    {
      band: 'Level 4',
      minMarks: 19,
      maxMarks: 24,
      label: 'Convincing, compelling',
      descriptor:
        'Convincing and compelling communication. Sophisticated matching of tone, style and register. Varied and inventive use of structural features.',
      indicators: [
        'Distinctive voice and compelling narrative',
        'Sophisticated structural choices (motifs, circularity, shifts)',
      ],
    },
  ],
}

const ao6TechnicalAccuracy: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 - Technical accuracy',
  description:
    'Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        'Simple range of vocabulary, occasionally ambitious. Occasional use of sentence variety. Some accurate basic punctuation. Occasional accurate spelling of simple words.',
      indicators: ['Simple sentences dominate', 'Frequent technical errors'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some range of vocabulary with some ambition. Some variety of sentence forms for effect. Some accurate punctuation. Some accurate spelling including more ambitious words.',
      indicators: ['Some variety of sentence structures'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Considerable',
      descriptor:
        'Considerable range of vocabulary used effectively. Varied use of sentence forms. Accurate punctuation. Mostly accurate spelling including ambitious vocabulary.',
      indicators: ['Controlled variety of sentence types for effect'],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Extensive',
      descriptor:
        'Extensive and ambitious vocabulary. Full range of appropriate sentence forms for effect. Wide range of accurate punctuation. Accurate spelling including ambitious words.',
      indicators: [
        'Consistently accurate across ambitious constructions',
        'Punctuation used to create precise effects',
      ],
    },
  ],
}

// ─── Paper ───────────────────────────────────────────────────────────────────

export const aqaLangPaper1: MarkScheme = {
  id: 'aqa-lang-paper1',
  board: 'AQA',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Explorations in Creative Reading and Writing',
  totalMarks: 80,
  durationMinutes: 105,
  version: '8700/1',
  sourceUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources',
  questions: [
    {
      id: 'Q1',
      questionType: 'Multiple choice (parts 1.1 to 1.4)',
      taskDescription:
        'Four short multiple-choice parts, 1.1 to 1.4, on the lines of the source the question names: for each part, choose the one correct answer from the options given.',
      totalMarks: 4,
      assessmentObjectives: [ao1Retrieval],
      examinerNotes:
        'Point-marked, with no levels: one mark for each part answered correctly, 4 in all. Check each answer against the lines the question names; the paper asks for one answer in each part. An answer in the form set before summer 2026, four things listed from the named lines, is marked the same way: one mark for each valid point from those lines, up to 4.',
    },
    {
      id: 'Q2',
      questionType: 'Language Analysis',
      taskDescription:
        'Look closely at the lines of the source printed in the question and analyse how the writer uses language to describe [topic]: words and phrases, language features and techniques, and sentence forms.',
      totalMarks: 8,
      assessmentObjectives: [ao2Language],
      examinerNotes:
        'Reward analysis of effect, not device-spotting. Level 3 asks for a range of relevant detail from the given lines, quoted or closely referred to, with no rule that quotation must be precise. An answer that writes only about language outside the lines printed in the question stays in Level 1 or Level 2, 4 marks at most.',
    },
    {
      id: 'Q3',
      questionType: 'Structure Analysis',
      taskDescription:
        'Think about the whole source and analyse how the writer has structured it to create the effect the question names (from summer 2026 one named effect, such as tension on the sample paper; earlier papers asked how it was structured to interest the reader): beginnings and endings, shifts of focus or perspective, changes of pace or mood, turning points.',
      totalMarks: 8,
      assessmentObjectives: [ao2Structure],
      examinerNotes:
        'Students must consider the whole text. Reward whole-text structural awareness, not just language within paragraphs. Each structural point should be linked to the effect the question names.',
    },
    {
      id: 'Q4',
      questionType: 'Evaluation',
      taskDescription:
        "The question names a part of the source and gives a view about it: how far do you agree and/or disagree? Evaluate that part of the source, what happens in it and the writer's methods, and your own response, with references to the text.",
      totalMarks: 20,
      assessmentObjectives: [ao4Evaluation],
      examinerNotes:
        'Reward critical personal engagement supported by analysis of methods. Agreeing, disagreeing or doing some of both are equally valid; the evaluation should be of the part of the source the question names. Level 4 requires convincing, perceptive evaluation.',
    },
    {
      id: 'Q5',
      questionType: 'Creative Writing (Descriptive or Narrative)',
      taskDescription:
        'Choose one of two tasks: a description from your imagination, where a picture may be given for ideas only and need not be described exactly as shown, or narrative writing (on the 2026 sample, the opening of a story about a given subject). The task sets a situation and a reader, such as a competition entry. Approximately 45 minutes.',
      totalMarks: 40,
      assessmentObjectives: [ao5Writing, ao6TechnicalAccuracy],
      examinerNotes:
        'AO5 is marked out of 24, AO6 out of 16. Reward deliberate crafting, distinctive voice and structural control. Writing that does not address the focus of the task cannot score more than 12 of the 24 AO5 marks.',
    },
  ],
}
