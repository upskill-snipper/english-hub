// ─── AQA GCSE English Language Paper 2 Mark Scheme ──────────────────────────
// Writers' Viewpoints and Perspectives - 1 hour 45 minutes, 80 marks.
// Based on the AQA 8700 specification.
//
// CORRECTED 24 October 2026, with the founder's approval (document 30). The
// mark-scheme guide for this paper (src/data/mark-scheme-guides/aqa-lang-paper2.ts),
// written and checked against AQA's 8700/2 sample question paper and mark
// scheme (version 1.0, Sample set 1, first exam June 2026) and the 8700
// specification (version 1.6, March 2026), found that this data had not
// followed AQA's summer 2026 rewording and lacked the mark scheme's caps.
// The paper's 80 marks, every question's marks and objectives, and every
// level range already agreed and are unchanged. What changed:
//   - Q2 asks what you can infer about the differences the question names,
//     using both sources. It was "write a summary of the differences (or
//     similarities)", and its grid spoke of a summary.
//   - The caps: Q2 on one source only scores 3 at most, and Level 3 or above
//     needs both sources and the question's focus; Q3 on the wrong source or
//     outside the named lines goes to the bottom of its level, and Level 3
//     or above needs the focus; Q4 on one source only scores 6 at most, and
//     Level 3 or above needs both; Q5's AO5 cannot pass 12 of 24 when the
//     writing does not address the focus of the task.
//   - Q3 says that the question names one source and the lines in it.
//   - Q4's note said "Sustained comparison is required for Level 3+"; AQA's
//     Level 3 needs both texts, and no level asks for the comparison to be
//     sustained, so its Level 3 indicator no longer says so either.
// No question id changed: saved essays name Q3.
//
// Source: https://www.aqa.org.uk/subjects/english/gcse/english-8700
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'

// ─── Reading Section A ──────────────────────────────────────────────────────

const ao1Retrieval: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify true statements',
  description:
    'Identify and interpret explicit and implicit information and ideas from the source.',
  maxMarks: 4,
  weighting: 0.05,
  bands: [
    {
      band: 'Per mark',
      minMarks: 1,
      maxMarks: 4,
      label: 'One mark per correct',
      descriptor: 'One mark awarded per correct true/false identification (maximum 4).',
      indicators: ['Accurate identification of explicit information', 'No half marks'],
    },
  ],
}

const ao1Synthesis: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Infer and synthesise',
  description:
    'Make inferences about the differences the question names, and bring together (synthesise) details from both sources to support them.',
  maxMarks: 8,
  weighting: 0.1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Mostly retells what the sources say rather than working anything out, noting a simple difference with a detail or two.',
      indicators: ['Lists details without linking the two texts'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Makes some attempt to work out what details suggest about the differences, with some relevant references from the sources.',
      indicators: ['Begins to compare explicit information'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        'Draws clear inferences about the differences from both sources, linking well-chosen details from each.',
      indicators: ['Explicit comparison with quotations from both texts'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        'Makes perceptive inferences about the differences, weaving precise details from both sources together.',
      indicators: ['Sophisticated inference and judicious synthesis'],
    },
  ],
}

const ao2Language: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language',
  description:
    'Explain, comment on and analyse how writers use language to achieve effects and influence readers, using relevant subject terminology.',
  maxMarks: 12,
  weighting: 0.15,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Simple',
      descriptor:
        'Simple comment on effect of language. Simple mention of methods. Simple references. Simple use of terminology.',
      indicators: ['Identifies devices without explaining effect'],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some understanding of effects of language. Identifies some methods. Some appropriate references. Some use of terminology.',
      indicators: ['Some effect commentary with quotations'],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        'Clear, relevant explanation of the effects of language. Clear range of relevant quotations. Clear use of subject terminology.',
      indicators: ['Explains layered effects with accurate terminology'],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 12,
      label: 'Perceptive',
      descriptor:
        'Analysis of effects of language. Judicious range of quotations. Sophisticated use of subject terminology.',
      indicators: [
        'Perceptive analysis of connotation and nuance',
        'Terminology is embedded and purposeful',
      ],
    },
  ],
}

const ao3Comparison: AssessmentObjective = {
  id: 'AO3',
  label: "AO3 - Compare writers' ideas and perspectives",
  description:
    "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.",
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        "Simple cross reference of ideas and perspectives. Simple identification of writers' methods. Simple references or textual details.",
      indicators: ['Writes about texts separately, little comparison'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Attempts to compare ideas and perspectives. Some comment on methods. Some relevant textual detail.',
      indicators: ['Begins to compare with connective language'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Clear',
      descriptor:
        "Clear comparison of ideas and perspectives. Clear explanation of writers' methods. Clear references to textual detail.",
      indicators: ['Direct comparison with clear comparative connectives'],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Perceptive',
      descriptor:
        'Perceptive analytical comparison of ideas and perspectives. Perceptive analysis of how these are conveyed. Judicious use of detail.',
      indicators: ['Integrated, perceptive comparison with judicious detail'],
    },
  ],
}

// ─── Writing Section B (Q5) ─────────────────────────────────────────────────

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
      label: 'Simple',
      descriptor:
        'Simple communication. Simple awareness of purpose and/or audience. Simple linking of ideas. Paragraphs may be used.',
      indicators: [
        'Limited awareness of form (letter, article, speech etc.)',
        'Basic, often inconsistent tone',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 7,
      maxMarks: 12,
      label: 'Some',
      descriptor:
        'Some clear communication. Some adaptation for purpose and audience. Some use of structural features.',
      indicators: ['Form conventions attempted', 'Some rhetorical devices'],
    },
    {
      band: 'Level 3',
      minMarks: 13,
      maxMarks: 18,
      label: 'Clear and consistent',
      descriptor:
        'Clear, consistent communication. Clear matching of tone, style and register to purpose, audience and form. Effective use of structural features.',
      indicators: [
        'Clear argumentative voice and persuasive structure',
        'Rhetorical devices used with awareness of effect',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 19,
      maxMarks: 24,
      label: 'Convincing and compelling',
      descriptor:
        'Convincing and compelling communication. Sophisticated matching of tone, style and register. Varied and inventive use of structural features.',
      indicators: [
        'Persuasive voice is distinctive and compelling',
        'Structural control used for rhetorical effect',
      ],
    },
  ],
}

const ao6TechnicalAccuracy: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 - Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        'Simple range of vocabulary. Occasional use of sentence variety. Some basic punctuation. Occasional accurate spelling.',
      indicators: ['Simple sentences dominate', 'Frequent technical errors'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some range of vocabulary with some ambition. Some variety of sentence forms. Some accurate punctuation. Some accurate spelling including ambitious words.',
      indicators: ['Some variety of sentence structures'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Considerable',
      descriptor:
        'Considerable range of vocabulary used effectively. Varied use of sentence forms. Accurate punctuation. Mostly accurate spelling.',
      indicators: ['Controlled variety of sentence types for effect'],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Extensive',
      descriptor:
        'Extensive and ambitious vocabulary. Full range of appropriate sentence forms. Wide range of accurate punctuation. Accurate spelling.',
      indicators: ['Consistently accurate across ambitious constructions'],
    },
  ],
}

// ─── Paper ───────────────────────────────────────────────────────────────────

export const aqaLangPaper2: MarkScheme = {
  id: 'aqa-lang-paper2',
  board: 'AQA',
  subject: 'English Language',
  paper: 'Paper 2',
  title: "Writers' Viewpoints and Perspectives",
  totalMarks: 80,
  durationMinutes: 105,
  version: '8700/2',
  sourceUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources',
  questions: [
    {
      id: 'Q1',
      questionType: 'True/False Identification',
      taskDescription: 'Choose four true statements about part of source A.',
      totalMarks: 4,
      assessmentObjectives: [ao1Retrieval],
      examinerNotes: 'One mark per correct identification. Four required.',
    },
    {
      id: 'Q2',
      questionType: 'Inference and synthesis',
      taskDescription:
        'Using details from both sources, explain what you can infer about the differences the question names (on the 2026 sample, the differences between two trains).',
      totalMarks: 8,
      assessmentObjectives: [ao1Synthesis],
      examinerNotes:
        'Reward inference and synthesis, not mere listing of details. An answer that uses only one source scores 3 marks at most. Level 3 and above need both sources and the focus the question names.',
    },
    {
      id: 'Q3',
      questionType: 'Language Analysis',
      taskDescription:
        'The question names one source and a set of lines in it: analyse how the writer uses language in those lines to describe [topic].',
      totalMarks: 12,
      assessmentObjectives: [ao2Language],
      examinerNotes:
        'Reward analysis of effect, not device-spotting. Subject terminology should be accurate. An answer that writes about the other source, or about lines outside the ones named, goes to the bottom of the level it would otherwise reach. Level 3 and above need the focus the question names.',
    },
    {
      id: 'Q4',
      questionType: 'Comparing Viewpoints and Perspectives',
      taskDescription:
        'Compare how the writers of the two sources convey their different attitudes/perspectives on [topic].',
      totalMarks: 16,
      assessmentObjectives: [ao3Comparison],
      examinerNotes:
        'Both ideas and methods must be compared. An answer that uses only one source scores 6 marks at most, and Level 3 and above need both sources.',
    },
    {
      id: 'Q5',
      questionType: 'Transactional / Persuasive Writing',
      taskDescription:
        'Write a letter, article, speech or essay expressing a viewpoint on a given topic. Approximately 45 minutes.',
      totalMarks: 40,
      assessmentObjectives: [ao5Writing, ao6TechnicalAccuracy],
      examinerNotes:
        'AO5 is marked out of 24, AO6 out of 16. Reward rhetorical awareness, clear form conventions and sophisticated argument. Writing that does not address the focus of the task (the statement, in the way the task asks) cannot score more than 12 of the 24 AO5 marks.',
    },
  ],
}
