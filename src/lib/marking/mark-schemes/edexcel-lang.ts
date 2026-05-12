// ─── Edexcel GCSE English Language Mark Scheme ──────────────────────────────
// Paper 1: Fiction and Imaginative Writing — 1h45, 64 marks.
//   Q1 AO1 4 + Q2 AO2 8 + Q3 AO2 8 + Q4 AO4 20 + Q5 AO5 16 + AO6 8 = 64
// Paper 2: Non-fiction and Transactional Writing — 2h05, 96 marks.
//   Q1 AO1 4 + Q2 AO1 8 + Q3 AO2 12 + Q4 AO3 16 + Q5 (AO5 16 + AO6 12)
//     + Q6 (AO5 16 + AO6 12) = 96
// Based on the Pearson Edexcel 1EN0 specification. Descriptors are summarised
// from publicly-available Edexcel generic mark scheme grids.
//
// Sources:
//   https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html
//   https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Language/2015/specification-and-sample-assessments/GCSE-English-Language-2015-Specification.pdf
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/**
 * Scale an AO's full-range bands proportionally to a per-question maxMarks.
 *
 * Used when the same base AO (e.g. p2Ao5Writing, defined with top band = 24)
 * is reused on a question with a smaller per-AO allocation (e.g. 16 marks on
 * Q5 / Q6 of Paper 2 where AO5 = 16 and AO6 = 12). Without scaling the bands,
 * the mark-scheme coverage test sums the unscaled top-band marks across
 * questions and over-counts the paper total.
 */
function scaleAO(
  ao: AssessmentObjective,
  maxMarks: number,
  weighting: number,
): AssessmentObjective {
  const originalMax = Math.max(...ao.bands.map((b) => b.maxMarks))
  if (originalMax === maxMarks) return { ...ao, maxMarks, weighting }
  const ratio = maxMarks / originalMax
  const scaledBands: BandDescriptor[] = ao.bands.map((b, i, arr) => ({
    ...b,
    minMarks: Math.max(1, Math.round(b.minMarks * ratio)),
    maxMarks: i === arr.length - 1 ? maxMarks : Math.max(1, Math.round(b.maxMarks * ratio)),
  }))
  return { ...ao, maxMarks, weighting, bands: scaledBands }
}

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 1 — Fiction and Imaginative Writing
// ═══════════════════════════════════════════════════════════════════════════

// ─── Reading AOs (Section A) ───────────────────────────────────────────────

const p1Ao1: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 — Identify and interpret',
  description:
    'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
  maxMarks: 4,
  weighting: 4 / 64,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Simple',
      descriptor:
        'Simple, limited comment with little textual reference. May be largely narrative or descriptive.',
      indicators: ['Lists simple explicit details', 'Limited relevance to the question'],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 2,
      label: 'Some',
      descriptor: 'Some relevant comments supported by some appropriate textual reference.',
      indicators: ['Selects some relevant explicit and implicit detail'],
    },
    {
      band: 'Level 3',
      minMarks: 3,
      maxMarks: 3,
      label: 'Clear',
      descriptor: 'Clear, relevant comments with clear and appropriate textual reference.',
      indicators: ['Clear, focused identification of relevant information'],
    },
    {
      band: 'Level 4',
      minMarks: 4,
      maxMarks: 4,
      label: 'Perceptive',
      descriptor:
        'Perceptive, detailed comments showing assured identification of implicit meanings. Precise textual reference.',
      indicators: ['Judicious, precise selection of evidence'],
    },
  ],
}

const p1Ao2Language: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 — Analyse language',
  description:
    'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
  maxMarks: 8,
  weighting: 8 / 64,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Simple awareness of language features. Limited or inaccurate use of subject terminology.',
      indicators: [
        'Identifies a device without discussing its effect',
        'Limited textual reference',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some understanding of language choices and effects. Some accurate use of subject terminology.',
      indicators: [
        'Names language methods and comments briefly on effect',
        'Some relevant quotations used',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        'Clear explanation of the effects of language choices. Accurate and relevant subject terminology.',
      indicators: [
        'Explains how language creates effects for the reader',
        'Well-chosen quotations support points',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        'Perceptive, detailed analysis of language effects. Sophisticated and precise subject terminology.',
      indicators: [
        'Analyses layered meanings and connotations',
        'Terminology is embedded and purposeful',
      ],
    },
  ],
}

const p1Ao2Structure: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 — Analyse structure',
  description:
    'Explain, comment on and analyse how writers use structure to achieve effects and influence readers.',
  maxMarks: 8,
  weighting: 8 / 64,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor: 'Simple awareness of structural features. Limited comment on their effect.',
      indicators: [
        'Notes beginning, middle, end without analysis',
        'Lists structural features without discussing effect',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some understanding of how structural features create effects. Identifies some structural choices.',
      indicators: [
        'Comments on shifts in focus or perspective',
        'Some awareness of narrative structure',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        'Clear explanation of structural choices and their effects. Relevant examples from the text.',
      indicators: ['Explains how pacing, openings, endings and perspective shifts shape meaning'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        'Perceptive analysis of structural features and their cumulative effect on the reader. Judicious examples.',
      indicators: [
        'Analyses whole-text structure and its relationship to meaning and reader response',
      ],
    },
  ],
}

const p1Ao4Evaluation: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 — Evaluate critically',
  description: 'Evaluate texts critically and support this with appropriate textual references.',
  maxMarks: 20,
  weighting: 20 / 64,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 5,
      label: 'Simple',
      descriptor:
        "Simple evaluative comment(s) with simple reference to writer's methods. Limited textual reference.",
      indicators: ['Expresses a basic opinion with little support'],
    },
    {
      band: 'Level 2',
      minMarks: 6,
      maxMarks: 10,
      label: 'Some',
      descriptor:
        "Some evaluative comments with some reference to writer's methods. Some appropriate textual reference.",
      indicators: ['Begins to justify an opinion with some reference to the text'],
    },
    {
      band: 'Level 3',
      minMarks: 11,
      maxMarks: 15,
      label: 'Clear',
      descriptor:
        "Clear, relevant evaluation of the text. Clear references to writer's methods and their effects. Well-chosen textual references.",
      indicators: ['Clear, considered personal response tied to analysis of method'],
    },
    {
      band: 'Level 4',
      minMarks: 16,
      maxMarks: 20,
      label: 'Perceptive',
      descriptor:
        "Perceptive, detailed evaluation of the text. Judicious references to writer's methods. Convincing textual support.",
      indicators: [
        "Convincing, critical evaluation fully rooted in analysis of the writer's craft",
      ],
    },
  ],
}

// ─── Writing AOs (Section B) ──────────────────────────────────────────────

const p1Ao5Writing: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 — Content and organisation',
  description:
    'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
  maxMarks: 16,
  weighting: 16 / 64,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        'Simple communication of ideas. Simple awareness of the reader. Simple organisational features; paragraphs may be used.',
      indicators: [
        'Limited vocabulary and basic sentence forms',
        'Tone is inconsistent or unclear',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some evidence of clear communication. Some awareness of audience. Paragraphs used with some discourse markers.',
      indicators: ['Tone begins to match purpose', 'Some deliberate vocabulary choices'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Clear and consistent',
      descriptor:
        'Clear, effective communication. Matching of tone, style and register to purpose and audience. Well-structured paragraphs with effective discourse markers.',
      indicators: [
        'Engaging and well-sequenced writing',
        'Imaginative or descriptive writing that creates effects',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Convincing, compelling',
      descriptor:
        'Convincing and compelling communication. Sophisticated matching of tone, style and register. Varied and inventive structural choices.',
      indicators: [
        'Distinctive voice and compelling narrative or description',
        'Sophisticated structural choices (motifs, circularity, shifts in perspective)',
      ],
    },
  ],
}

const p1Ao6Technical: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 — Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 8,
  weighting: 8 / 64,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Simple range of vocabulary. Simple sentence forms. Some accurate basic spelling and punctuation.',
      indicators: ['Simple sentences dominate', 'Frequent technical errors'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some range of vocabulary. Some variety of sentence forms. Some accurate spelling and punctuation.',
      indicators: ['Some variety in sentence structures'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Considerable',
      descriptor:
        'Considerable range of vocabulary used effectively. Varied sentence forms. Mostly accurate spelling and punctuation.',
      indicators: ['Controlled variety of sentence types for effect'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Extensive',
      descriptor:
        'Extensive and ambitious vocabulary. Full range of sentence forms for effect. Consistently accurate spelling and punctuation.',
      indicators: [
        'Consistently accurate across ambitious constructions',
        'Punctuation used to create precise effects',
      ],
    },
  ],
}

// ─── Paper 1 ────────────────────────────────────────────────────────────────

export const edexcelLangPaper1: MarkScheme = {
  id: 'edexcel-lang-paper1',
  board: 'Edexcel',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Fiction and Imaginative Writing',
  totalMarks: 64,
  durationMinutes: 105,
  version: '1EN0/01',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval (short answer)',
      taskDescription:
        'Read a 19th-century fiction extract and answer a short-answer question that tests understanding of explicit information.',
      totalMarks: 4,
      assessmentObjectives: [p1Ao1],
      examinerNotes:
        'Award one mark for each valid identification. Accept direct quotation or paraphrase.',
    },
    {
      id: 'Q2',
      questionType: 'Language analysis',
      taskDescription:
        'Analyse how the writer uses language to create effects in a specified section of the fiction extract.',
      totalMarks: 8,
      assessmentObjectives: [p1Ao2Language],
      examinerNotes:
        'Reward analysis of effect, not device-spotting. Precise quotation is essential at Level 3+.',
    },
    {
      id: 'Q3',
      questionType: 'Structure analysis',
      taskDescription: 'Analyse how the writer has structured the text to interest the reader.',
      totalMarks: 8,
      assessmentObjectives: [p1Ao2Structure],
      examinerNotes:
        'Students must consider whole-text structure. Reward awareness of shifts in focus, narrative perspective and pacing.',
    },
    {
      id: 'Q4',
      questionType: 'Evaluation',
      taskDescription:
        'Evaluate how successfully the writer achieves a particular effect. Support your views with textual references.',
      totalMarks: 20,
      assessmentObjectives: [p1Ao4Evaluation],
      examinerNotes:
        'Reward personal engagement supported by analysis of methods. Level 4 requires convincing, perceptive evaluation.',
    },
    {
      id: 'Q5',
      questionType: 'Imaginative Writing',
      taskDescription:
        'Write imaginatively from a choice of tasks: narrative or descriptive writing linked to a stimulus (image or title). Approximately 45 minutes.',
      totalMarks: 24,
      assessmentObjectives: [p1Ao5Writing, p1Ao6Technical],
      examinerNotes:
        'AO5 is marked out of 16, AO6 out of 8. Reward deliberate crafting, distinctive voice and structural control.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 — Non-fiction and Transactional Writing
// ═══════════════════════════════════════════════════════════════════════════

// ─── Reading AOs (Section A) ───────────────────────────────────────────────

const p2Ao1Retrieval: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 — Identify and interpret',
  description:
    'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
  maxMarks: 4,
  weighting: 4 / 96,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Simple',
      descriptor: 'Simple, limited comment with little textual reference.',
      indicators: ['Lists simple explicit details'],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 2,
      label: 'Some',
      descriptor: 'Some relevant comments supported by some appropriate textual reference.',
      indicators: ['Selects some relevant detail'],
    },
    {
      band: 'Level 3',
      minMarks: 3,
      maxMarks: 3,
      label: 'Clear',
      descriptor: 'Clear, relevant comments with clear textual reference.',
      indicators: ['Clear, focused selection of information'],
    },
    {
      band: 'Level 4',
      minMarks: 4,
      maxMarks: 4,
      label: 'Perceptive',
      descriptor: 'Perceptive, detailed comments with precise textual reference.',
      indicators: ['Judicious, precise selection of evidence'],
    },
  ],
}

const p2Ao1Synthesis: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 — Summarise and synthesise',
  description:
    'Select and synthesise evidence from different texts to summarise similarities or differences.',
  maxMarks: 8,
  weighting: 8 / 96,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Simple',
      descriptor:
        'Simple awareness of differences or similarities. Simple references. Simple inferences.',
      indicators: ['Lists details without linking texts'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor: 'Some summary attempted with some relevant quotation. Attempts inference.',
      indicators: ['Begins to compare explicit information'],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        'Clear, relevant summary with clear synthesis of evidence. Clear inferences drawn.',
      indicators: ['Explicit comparison with quotations from both texts'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        'Perceptive summary with judicious synthesis of evidence from both texts. Perceptive inferences.',
      indicators: ['Sophisticated inference and judicious synthesis'],
    },
  ],
}

const p2Ao2Language: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 — Analyse language',
  description:
    'Explain, comment on and analyse how writers use language to achieve effects and influence readers, using relevant subject terminology.',
  maxMarks: 12,
  weighting: 12 / 96,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Simple',
      descriptor:
        'Simple comment on the effect of language. Simple mention of methods. Simple use of terminology.',
      indicators: ['Identifies devices without explaining effect'],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some understanding of language effects. Identifies some methods. Some appropriate references and terminology.',
      indicators: ['Some effect commentary with quotations'],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        'Clear, relevant explanation of language effects. Range of relevant quotations. Accurate subject terminology.',
      indicators: ['Explains layered effects with accurate terminology'],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 12,
      label: 'Perceptive',
      descriptor:
        'Perceptive analysis of language effects. Judicious range of quotations. Sophisticated use of terminology.',
      indicators: [
        'Perceptive analysis of connotation and nuance',
        'Terminology is embedded and purposeful',
      ],
    },
  ],
}

const p2Ao3Comparison: AssessmentObjective = {
  id: 'AO3',
  label: "AO3 — Compare writers' ideas and perspectives",
  description:
    "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.",
  maxMarks: 16,
  weighting: 16 / 96,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        'Simple cross-reference of ideas and perspectives. Simple identification of methods. Simple textual references.',
      indicators: ['Writes about texts separately with little comparison'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Attempts to compare ideas and perspectives. Some comment on methods. Some relevant textual detail.',
      indicators: ['Begins to compare using comparative connectives'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Clear',
      descriptor:
        'Clear comparison of ideas and perspectives. Clear explanation of methods. Clear references to textual detail.',
      indicators: ['Sustained comparison with clear comparative connectives'],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Perceptive',
      descriptor:
        'Perceptive analytical comparison of ideas and perspectives. Perceptive analysis of how these are conveyed. Judicious textual detail.',
      indicators: ['Integrated, perceptive comparison with judicious detail'],
    },
  ],
}

// ─── Writing AOs (Section B) ──────────────────────────────────────────────

const p2Ao5Writing: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 — Content and organisation',
  description:
    'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
  maxMarks: 24,
  weighting: 24 / 96,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 6,
      label: 'Simple',
      descriptor:
        'Simple communication. Simple awareness of purpose and/or audience. Simple linking of ideas. Paragraphs may be used.',
      indicators: [
        'Limited awareness of form conventions (letter, article, speech, etc.)',
        'Basic, often inconsistent tone',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 7,
      maxMarks: 12,
      label: 'Some',
      descriptor:
        'Some clear communication. Some adaptation for purpose and audience. Some use of structural features and discourse markers.',
      indicators: ['Form conventions attempted', 'Some rhetorical devices used'],
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

const p2Ao6Technical: AssessmentObjective = {
  id: 'AO6',
  label: 'AO6 — Technical accuracy',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
  maxMarks: 16,
  weighting: 16 / 96,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Simple',
      descriptor:
        'Simple range of vocabulary. Simple sentence forms. Some accurate basic spelling and punctuation.',
      indicators: ['Simple sentences dominate', 'Frequent technical errors'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some range of vocabulary with some ambition. Some variety of sentence forms. Some accurate spelling and punctuation.',
      indicators: ['Some variety in sentence structures'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Considerable',
      descriptor:
        'Considerable range of vocabulary used effectively. Varied sentence forms. Mostly accurate spelling and punctuation.',
      indicators: ['Controlled variety of sentence types for effect'],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Extensive',
      descriptor:
        'Extensive and ambitious vocabulary. Full range of sentence forms. Consistently accurate spelling and punctuation.',
      indicators: [
        'Consistently accurate across ambitious constructions',
        'Punctuation used to create precise effects',
      ],
    },
  ],
}

// ─── Paper 2 ────────────────────────────────────────────────────────────────

export const edexcelLangPaper2: MarkScheme = {
  id: 'edexcel-lang-paper2',
  board: 'Edexcel',
  subject: 'English Language',
  paper: 'Paper 2',
  title: 'Non-fiction and Transactional Writing',
  totalMarks: 96,
  durationMinutes: 125,
  version: '1EN0/02',
  sourceUrl:
    'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval (short answer)',
      taskDescription:
        'Read a 19th-century non-fiction extract and answer a short-answer question testing understanding of explicit information.',
      totalMarks: 4,
      assessmentObjectives: [p2Ao1Retrieval],
      examinerNotes: 'Award one mark per valid identification. Accept quotation or paraphrase.',
    },
    {
      id: 'Q2',
      questionType: 'Summary and synthesis',
      taskDescription:
        'Summarise the differences or similarities between the ideas in two non-fiction sources.',
      totalMarks: 8,
      assessmentObjectives: [p2Ao1Synthesis],
      examinerNotes: 'Reward inference and synthesis, not mere listing of details.',
    },
    {
      id: 'Q3',
      questionType: 'Language analysis',
      taskDescription:
        'Analyse how the writer uses language to achieve effects in one of the non-fiction sources.',
      totalMarks: 12,
      assessmentObjectives: [p2Ao2Language],
      examinerNotes:
        'Reward analysis of effect with accurate terminology. Precise quotation expected at Level 3+.',
    },
    {
      id: 'Q4',
      questionType: 'Comparing viewpoints and perspectives',
      taskDescription:
        'Compare how the writers of the two sources convey their different viewpoints and perspectives on a given topic.',
      totalMarks: 16,
      assessmentObjectives: [p2Ao3Comparison],
      examinerNotes:
        'Both ideas and methods must be compared. Sustained, integrated comparison required for Level 3+.',
    },
    {
      id: 'Q5',
      questionType: 'Transactional Writing (Task 1)',
      taskDescription:
        'Write a text in a specified form (e.g. letter, article, speech, review) for a given purpose and audience.',
      totalMarks: 28,
      assessmentObjectives: [
        scaleAO(p2Ao5Writing, 16, 16 / 28),
        {
          ...p2Ao6Technical,
          maxMarks: 12,
          weighting: 12 / 28,
          bands: [
            {
              band: 'Level 1',
              minMarks: 1,
              maxMarks: 3,
              label: 'Simple',
              descriptor:
                'Simple range of vocabulary. Simple sentence forms. Some accurate basic spelling and punctuation.',
              indicators: ['Simple sentences dominate', 'Frequent errors'],
            },
            {
              band: 'Level 2',
              minMarks: 4,
              maxMarks: 6,
              label: 'Some',
              descriptor:
                'Some range of vocabulary. Some variety of sentence forms. Some accurate spelling and punctuation.',
              indicators: ['Some variety in sentence structures'],
            },
            {
              band: 'Level 3',
              minMarks: 7,
              maxMarks: 9,
              label: 'Considerable',
              descriptor:
                'Considerable vocabulary range. Varied sentence forms. Mostly accurate spelling and punctuation.',
              indicators: ['Controlled variety for effect'],
            },
            {
              band: 'Level 4',
              minMarks: 10,
              maxMarks: 12,
              label: 'Extensive',
              descriptor:
                'Extensive vocabulary. Full range of sentence forms. Consistently accurate spelling and punctuation.',
              indicators: ['Consistently accurate and ambitious'],
            },
          ],
        },
      ],
      examinerNotes:
        'AO5 marked out of 16, AO6 out of 12. Reward awareness of form conventions and rhetorical techniques.',
    },
    {
      id: 'Q6',
      questionType: 'Transactional Writing (Task 2)',
      taskDescription:
        'Write a second text in a different specified form (e.g. letter, article, speech, review, essay) for a given purpose and audience.',
      totalMarks: 28,
      assessmentObjectives: [
        scaleAO(p2Ao5Writing, 16, 16 / 28),
        {
          ...p2Ao6Technical,
          maxMarks: 12,
          weighting: 12 / 28,
          bands: [
            {
              band: 'Level 1',
              minMarks: 1,
              maxMarks: 3,
              label: 'Simple',
              descriptor:
                'Simple range of vocabulary. Simple sentence forms. Some accurate basic spelling and punctuation.',
              indicators: ['Simple sentences dominate', 'Frequent errors'],
            },
            {
              band: 'Level 2',
              minMarks: 4,
              maxMarks: 6,
              label: 'Some',
              descriptor:
                'Some range of vocabulary. Some variety of sentence forms. Some accurate spelling and punctuation.',
              indicators: ['Some variety in sentence structures'],
            },
            {
              band: 'Level 3',
              minMarks: 7,
              maxMarks: 9,
              label: 'Considerable',
              descriptor:
                'Considerable vocabulary range. Varied sentence forms. Mostly accurate spelling and punctuation.',
              indicators: ['Controlled variety for effect'],
            },
            {
              band: 'Level 4',
              minMarks: 10,
              maxMarks: 12,
              label: 'Extensive',
              descriptor:
                'Extensive vocabulary. Full range of sentence forms. Consistently accurate spelling and punctuation.',
              indicators: ['Consistently accurate and ambitious'],
            },
          ],
        },
      ],
      examinerNotes:
        'AO5 marked out of 16, AO6 out of 12. Reward different form conventions from Q5. Credit sustained and compelling voice.',
    },
  ],
}
