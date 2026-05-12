// ─── Cambridge IGCSE First Language English (0500) Mark Scheme ──────────────
// Paper 1: Reading — 2 hours, 40 marks
// Paper 2: Directed Writing & Composition — 2 hours, 40 marks (Q1 = 25, Q2 = 40)
// Based on the Cambridge IGCSE 0500 specification (for examination from 2024).
// Reading objectives are R1-R5; Writing objectives are W1-W5.
//
// Source: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-first-language-english-0500/
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
// ═══════════════════════════════════════════════════════════════════════════

// ─── Paper 1, Question 1(a-e): Short Answer Comprehension ──────────────────
// 15 marks total testing R1, R2, R5 across short-answer subquestions.

const p1Q1ShortAnswer: AssessmentObjective = {
  id: 'R1',
  label: 'R1/R2/R5 — Reading short answers',
  description:
    'Demonstrate understanding of explicit and implicit meanings, and select information for the purpose of the question.',
  maxMarks: 15,
  weighting: 15 / 40,
  bands: [
    {
      band: 'Low',
      minMarks: 1,
      maxMarks: 5,
      label: 'Limited',
      descriptor:
        'Limited identification of explicit meanings; little use of own words; few correct points.',
      indicators: [
        'Lifts large sections of text without selection',
        'Misunderstands or omits key implicit ideas',
      ],
    },
    {
      band: 'Mid',
      minMarks: 6,
      maxMarks: 10,
      label: 'Some',
      descriptor:
        'Identifies a range of explicit points and some implicit meanings; some use of own words; generally focused on the question.',
      indicators: ['Selects relevant explicit details', 'Begins to infer attitudes and feelings'],
    },
    {
      band: 'High',
      minMarks: 11,
      maxMarks: 15,
      label: 'Effective',
      descriptor:
        'Confidently identifies explicit and implicit meanings; uses own words consistently to demonstrate understanding; precise selection for the purpose of each subquestion.',
      indicators: [
        'Concise, precise answers',
        'Implicit meanings explained clearly without unnecessary lifting',
      ],
    },
  ],
}

// ─── Paper 1, Question 1(f): Extended Response (Effects of Language) ────────
// 15 marks for R4, focused on writers' use of language.

const p1Q1fLanguage: AssessmentObjective = {
  id: 'R4',
  label: "R4 — Analysis of writers' use of language",
  description:
    'Demonstrate understanding of how writers achieve effects and influence readers through their choice of language.',
  maxMarks: 15,
  weighting: 15 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Limited',
      descriptor:
        'A few words or phrases identified; little or no awareness of meanings beyond surface; effects not explained.',
      indicators: ['Selects isolated words with no analysis', 'May paraphrase rather than analyse'],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some appropriate choices of words and phrases; some basic explanation of meaning and a little awareness of effect.',
      indicators: ['Identifies relevant phrases', 'Begins to explain literal meaning'],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        "A range of relevant choices selected; clear explanations of meanings and effects; some attempt to consider the writer's intended effect on the reader.",
      indicators: [
        'Choices come from across both required paragraphs',
        'Clear explanation of connotations',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 12,
      label: 'Wide-ranging',
      descriptor:
        'Wide-ranging and well-judged choices of words and phrases; clear and detailed explanations of meanings and effects; evidence of analysis of how language influences readers.',
      indicators: [
        'Explains layered or connotative meanings',
        "Effects are linked to the writer's intent",
      ],
    },
    {
      band: 'Level 5',
      minMarks: 13,
      maxMarks: 15,
      label: 'Judicious',
      descriptor:
        'Judicious selection of a wide range of the most significant words and phrases; precise, detailed analysis of meanings and effects; convincing exploration of how language is used to influence readers.',
      indicators: [
        'Choices are precise and significant',
        'Analysis explores nuance, tone and connotation in depth',
      ],
    },
  ],
}

// ─── Paper 1, Question 2: Extended Response to Reading ─────────────────────
// 15 marks for Reading (R1, R2, R3, R5) + 5 marks for Writing (W1, W2).

const p1Q2Reading: AssessmentObjective = {
  id: 'R3',
  label: 'R1/R2/R3/R5 — Reading and analysis',
  description:
    'Demonstrate understanding of explicit and implicit meanings; analyse, evaluate and develop facts, ideas and opinions; select and use information for the purpose of the task.',
  maxMarks: 15,
  weighting: 15 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Limited',
      descriptor:
        'A few relevant ideas identified; little development; mostly copied from the text; little awareness of the task focus.',
      indicators: [
        'Lifts material with little selection',
        'Limited focus on the assigned voice/purpose',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some relevant ideas selected and developed; some understanding of explicit meanings; an attempt to address the task focus.',
      indicators: ['Begins to use own words', 'Lists ideas with limited development'],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        'A range of relevant ideas selected from the text; clear development with reference to both explicit and implicit meanings; a clear sense of the task focus and audience.',
      indicators: [
        'Ideas selected from across the whole text',
        'Begins to develop ideas with inference',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 12,
      label: 'Thorough',
      descriptor:
        'A wide range of well-selected ideas; thoroughly developed with clear understanding of implicit meanings; sustained focus on the task and audience.',
      indicators: ['Implicit meanings inferred and developed', 'Voice is sustained and convincing'],
    },
    {
      band: 'Level 5',
      minMarks: 13,
      maxMarks: 15,
      label: 'Sophisticated',
      descriptor:
        "A judicious selection of the most relevant ideas; sophisticated development and evaluation; assured handling of explicit and implicit meanings, fully integrated with the task's voice and purpose.",
      indicators: [
        'Ideas are evaluated and extended convincingly',
        'Voice and purpose are convincingly sustained throughout',
      ],
    },
  ],
}

const p1Q2Writing: AssessmentObjective = {
  id: 'W1',
  label: 'W1/W2 — Writing for an audience',
  description:
    'Articulate experience and express what is thought, felt and imagined; organise and structure ideas to suit the audience and purpose of the task.',
  maxMarks: 5,
  weighting: 5 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Limited',
      descriptor: 'Limited sense of audience; structure unclear; voice rarely consistent.',
      indicators: ['Inconsistent voice', 'Little structural shape'],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 2,
      label: 'Some',
      descriptor:
        'Some awareness of audience; some structural organisation; voice attempted but not sustained.',
      indicators: ['Some attempt at form (letter, journal, speech, etc.)'],
    },
    {
      band: 'Level 3',
      minMarks: 3,
      maxMarks: 3,
      label: 'Clear',
      descriptor:
        'Clear sense of audience and purpose; clear, organised structure; voice is generally consistent.',
      indicators: ['Form conventions used appropriately'],
    },
    {
      band: 'Level 4',
      minMarks: 4,
      maxMarks: 4,
      label: 'Effective',
      descriptor:
        'Effective register and voice for the audience; well-structured response; convincing handling of form.',
      indicators: ['Convincing voice; effective register'],
    },
    {
      band: 'Level 5',
      minMarks: 5,
      maxMarks: 5,
      label: 'Sophisticated',
      descriptor:
        'Sophisticated, sustained voice fully matched to audience and purpose; cohesive and effective overall structure.',
      indicators: ['Distinctive, persuasive voice throughout'],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// Writing Assessment Objectives (W1-W5)
// ═══════════════════════════════════════════════════════════════════════════
//
// W1: articulate experience and express what is thought, felt and imagined
// W2: organise and structure ideas and opinions for deliberate effect
// W3: use a range of vocabulary and sentence structures appropriate to context
// W4: use register appropriate to context
// W5: make accurate use of spelling, punctuation and grammar
// ═══════════════════════════════════════════════════════════════════════════

// ─── Paper 2 Q1: Directed Writing ───────────────────────────────────────────
// 25 marks total: 15 for Reading (R1, R2, R3, R5), 10 for Writing (W1-W5).

const p2Q1Reading: AssessmentObjective = {
  id: 'R3',
  label: 'R1/R2/R3/R5 — Reading (Directed Writing)',
  description:
    'Demonstrate understanding of explicit and implicit meanings; analyse, evaluate and develop facts, ideas and opinions from the reading texts to support the directed task.',
  maxMarks: 15,
  weighting: 15 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Limited',
      descriptor:
        'A few relevant ideas from the texts; mostly copied or paraphrased; little awareness of the directed task focus.',
      indicators: ['Few ideas drawn from the texts', 'Lifts text without development'],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some relevant ideas selected from the texts; some development; basic awareness of the form and purpose of the directed task.',
      indicators: ['Some ideas from both texts', 'Begins to use own words'],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        'A clear range of ideas selected from both texts; clear development with reference to explicit and implicit meanings; clear focus on the form, audience and purpose.',
      indicators: [
        'Ideas evaluated and grouped logically',
        'Clear focus on the directed task (e.g. letter, article, speech)',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 12,
      label: 'Thorough',
      descriptor:
        'A thorough range of well-selected ideas; thoroughly developed with clear inference; sustained focus on form, audience and purpose.',
      indicators: [
        'Implicit meanings inferred and integrated',
        'Sustained handling of the directed task voice',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 13,
      maxMarks: 15,
      label: 'Sophisticated',
      descriptor:
        'A judicious selection of the most relevant ideas; sophisticated development and evaluation; assured, integrated use of the texts to fulfil the form, audience and purpose.',
      indicators: [
        'Ideas evaluated, extended and synthesised across both texts',
        'Convincing, sustained voice throughout',
      ],
    },
  ],
}

const p2Q1Writing: AssessmentObjective = {
  id: 'W1',
  label: 'W1-W5 — Writing (Directed Writing)',
  description:
    'Articulate experience and express ideas; organise and structure for deliberate effect; use a range of vocabulary and sentence structures appropriate to context; use appropriate register; spell, punctuate and use grammar accurately.',
  maxMarks: 10,
  weighting: 10 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited',
      descriptor:
        'Limited use of vocabulary and sentence structures; register rarely appropriate; frequent errors in spelling, punctuation and grammar that impede meaning.',
      indicators: ['Limited variety of sentence structures', 'Frequent technical errors'],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some range of vocabulary and sentence structures; some appropriate register; some accurate spelling, punctuation and grammar but errors are noticeable.',
      indicators: ['Tone is broadly suited to the form', "Errors don't usually impede meaning"],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        'Clear, appropriate vocabulary and a range of sentence structures; mostly appropriate register; mostly accurate spelling, punctuation and grammar.',
      indicators: ['Clear, controlled register suited to the form', 'Sentences varied for purpose'],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Effective',
      descriptor:
        'An effective range of vocabulary and sentence structures used for deliberate effect; consistently appropriate register; accurate spelling, punctuation and grammar with only occasional errors.',
      indicators: [
        'Vocabulary chosen for precise effect',
        'Cohesion supported by varied sentence structures',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Sophisticated',
      descriptor:
        'A sophisticated range of vocabulary and sentence structures used precisely for effect; sustained, well-judged register; consistently accurate spelling, punctuation and grammar.',
      indicators: ['Distinctive, controlled style', 'Errors are rare and do not impede meaning'],
    },
  ],
}

// ─── Paper 2 Q2: Composition (Narrative or Descriptive) ─────────────────────
// 40 marks total: 16 for Content & Structure (W1, W2), 24 for Style & Accuracy (W3, W4, W5).

const p2Q2ContentStructure: AssessmentObjective = {
  id: 'W1',
  label: 'W1/W2 — Content and structure',
  description:
    'Articulate experience and express what is thought, felt and imagined; organise and structure ideas and opinions for deliberate effect.',
  maxMarks: 16,
  weighting: 16 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Limited',
      descriptor: 'Few ideas; little structure; unclear sequence; little engagement with the task.',
      indicators: ['Brief or undeveloped content', 'Disjointed structure'],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some relevant ideas; some attempt at structure; basic engagement with narrative or descriptive purpose.',
      indicators: [
        'Some sense of beginning, middle, end (narrative)',
        'Some sensory description (descriptive)',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        'A clear, developed range of ideas; clear paragraphing and overall structure; engaging treatment of the chosen task.',
      indicators: [
        'Clear narrative arc with rising tension',
        'Clear descriptive focus and shifts of perspective',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 13,
      label: 'Effective',
      descriptor:
        'Well-developed ideas with effective use of detail; effective structural choices used for deliberate effect; consistently engaging.',
      indicators: [
        'Deliberate structural choices (flashback, motif, cyclical structure)',
        'Effective control of pace and atmosphere',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 14,
      maxMarks: 16,
      label: 'Sophisticated',
      descriptor:
        'Sophisticated, well-judged ideas with convincing detail; sophisticated structural choices used for deliberate, sustained effect; compelling and original treatment of the task.',
      indicators: [
        'Distinctive voice and original ideas',
        'Sustained, controlled structural shaping',
      ],
    },
  ],
}

const p2Q2StyleAccuracy: AssessmentObjective = {
  id: 'W3',
  label: 'W3/W4/W5 — Style and accuracy',
  description:
    'Use a range of vocabulary and sentence structures appropriate to context; use register appropriate to context; make accurate use of spelling, punctuation and grammar.',
  maxMarks: 24,
  weighting: 24 / 40,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 5,
      label: 'Limited',
      descriptor:
        'Limited range of vocabulary and sentence structures; register rarely appropriate; frequent errors in spelling, punctuation and grammar that impede meaning.',
      indicators: ['Simple sentences dominate', 'Frequent technical errors'],
    },
    {
      band: 'Level 2',
      minMarks: 6,
      maxMarks: 10,
      label: 'Some',
      descriptor:
        'Some range of vocabulary and sentence structures; some attempts at appropriate register; some accurate spelling, punctuation and grammar but errors are frequent.',
      indicators: ['Some variety in sentence forms', "Errors don't usually impede meaning"],
    },
    {
      band: 'Level 3',
      minMarks: 11,
      maxMarks: 15,
      label: 'Clear',
      descriptor:
        'Clear, appropriate vocabulary and varied sentence structures; mostly appropriate register; mostly accurate spelling, punctuation and grammar.',
      indicators: ['Vocabulary chosen with some precision', 'Punctuation used to control meaning'],
    },
    {
      band: 'Level 4',
      minMarks: 16,
      maxMarks: 20,
      label: 'Effective',
      descriptor:
        'An effective range of vocabulary and sentence structures used for deliberate effect; consistently appropriate register; accurate spelling, punctuation and grammar with only occasional errors.',
      indicators: [
        'Sentence variety used for atmosphere and pace',
        'Vocabulary is precise and ambitious',
      ],
    },
    {
      band: 'Level 5',
      minMarks: 21,
      maxMarks: 24,
      label: 'Sophisticated',
      descriptor:
        'A sophisticated range of vocabulary and sentence structures used precisely for effect; sustained, well-judged register; consistently accurate spelling, punctuation and grammar.',
      indicators: [
        'Distinctive, controlled style throughout',
        'Errors are rare and never impede meaning',
      ],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 1 — Reading (2 hours, 40 marks)
// ═══════════════════════════════════════════════════════════════════════════

export const cambridge0500Paper1: MarkScheme = {
  id: 'cambridge-0500-paper1',
  board: 'Cambridge',
  subject: 'English Language',
  paper: 'Paper 1',
  title: 'Reading',
  totalMarks: 40,
  durationMinutes: 120,
  version: '0500/1',
  sourceUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-first-language-english-0500/',
  questions: [
    {
      id: 'Q1a-e',
      questionType: 'Short-answer comprehension',
      taskDescription:
        'Read Text A and answer a series of short-answer questions (typically 1(a)-(e)) testing explicit and implicit understanding. 15 marks across the subquestions.',
      totalMarks: 15,
      assessmentObjectives: [p1Q1ShortAnswer],
      examinerNotes:
        'Reward use of own words for implicit-meaning questions; do not credit unselective lifting. Mark by the published mark scheme tariff for each subquestion.',
    },
    {
      id: 'Q1f',
      questionType: "Extended response on writers' use of language",
      taskDescription:
        'Re-read two specified paragraphs of Text A. Explain how the writer uses language to convey meaning and to create effect. Choose three examples from each paragraph and explain their effect.',
      totalMarks: 15,
      assessmentObjectives: [p1Q1fLanguage],
      examinerNotes:
        'Reward analysis of meaning AND effect, not feature-spotting. Examples must be drawn from both required paragraphs for Levels 3+.',
    },
    {
      id: 'Q2',
      questionType: 'Extended response to reading',
      taskDescription:
        'Read Text B (and sometimes Text A) and write an extended response in a specified form (e.g. a letter, journal entry or speech) using ideas drawn from the text.',
      totalMarks: 20,
      assessmentObjectives: [p1Q2Reading, p1Q2Writing],
      examinerNotes:
        '15 marks for Reading (R1, R2, R3, R5) and 5 marks for Writing (W1, W2). Reward selection, development and evaluation of ideas in a sustained, appropriate voice.',
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// PAPER 2 — Directed Writing and Composition (2 hours, 40 marks)
// ═══════════════════════════════════════════════════════════════════════════

export const cambridge0500Paper2: MarkScheme = {
  id: 'cambridge-0500-paper2',
  board: 'Cambridge',
  subject: 'English Language',
  paper: 'Paper 2',
  title: 'Directed Writing and Composition',
  totalMarks: 65,
  durationMinutes: 120,
  version: '0500/2',
  sourceUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-first-language-english-0500/',
  questions: [
    {
      id: 'Q1',
      questionType: 'Directed writing',
      taskDescription:
        'Read two short texts on a related theme and use their ideas to produce a piece of directed writing in a specified form (e.g. a letter, article, report or speech) for a specified audience and purpose. Approximately 250-350 words.',
      totalMarks: 25,
      assessmentObjectives: [p2Q1Reading, p2Q1Writing],
      examinerNotes:
        '15 marks for Reading (selection, development and evaluation of ideas) and 10 marks for Writing (style, register and accuracy). Both texts should inform the response.',
    },
    {
      id: 'Q2',
      questionType: 'Composition (Descriptive or Narrative)',
      taskDescription:
        'Choose ONE composition task from a choice of four (typically two descriptive and two narrative). Write approximately 350-450 words.',
      totalMarks: 40,
      assessmentObjectives: [p2Q2ContentStructure, p2Q2StyleAccuracy],
      examinerNotes:
        '16 marks for Content & Structure (W1, W2) and 24 marks for Style & Accuracy (W3, W4, W5). Reward deliberate craft, distinctive voice and structural shaping.',
    },
  ],
}

/**
 * Aggregated export of all Cambridge IGCSE 0500 (First Language English)
 * mark schemes — Paper 1 (Reading) and Paper 2 (Directed Writing & Composition).
 */
export const cambridge0500MarkSchemes: readonly MarkScheme[] = [
  cambridge0500Paper1,
  cambridge0500Paper2,
]
