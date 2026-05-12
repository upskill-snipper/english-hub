// ─── WJEC Eduqas GCSE English Literature Mark Scheme ────────────────────────
// Component 1: Shakespeare and Poetry (2 hours, 80 marks)
//   Section A — Shakespeare extract + essay (40 marks: AO1 15 + AO2 15 + AO3 10)
//   Section B — Poetry comparison           (40 marks: AO1 10 + AO2 20 + AO4 10)
// Component 2: Post-1914 Prose/Drama and 19th Century Prose (2h30, 80 marks)
//   Section A — Post-1914 extract + essay  (40 marks: AO1 15 + AO2 15 + AO3 10)
//   Section B — 19th century prose essay   (40 marks: AO1 15 + AO2 15 + AO3 10)
// Based on the WJEC Eduqas C720QS specification.
//
// Sources:
//   https://www.eduqas.co.uk/qualifications/english-literature-gcse/
//   https://www.eduqas.co.uk/media/pphbnk1d/eduqas-gcse-english-literature-spec-from-2015-e-30-09-19.pdf
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective, BandDescriptor } from './types'

/**
 * Scale an AO's full-range bands proportionally to a per-question maxMarks.
 *
 * The shared AO definitions below carry their full bands (e.g. AO1 0–20). When
 * the AO is reused on a question worth fewer marks for that AO (e.g. AO1 = 15
 * within a 40-mark question), the band ranges must be scaled to match, so that
 * the top band's maxMarks equals the per-question allocation. Without this,
 * the mark-scheme coverage test sums the original (unscaled) top-band marks
 * across all questions and over-counts the paper total.
 */
function scaleAO(
  ao: AssessmentObjective,
  maxMarks: number,
  weighting: number,
): AssessmentObjective {
  const originalMax = Math.max(...ao.bands.map((b) => b.maxMarks))
  const ratio = maxMarks / originalMax
  const scaledBands: BandDescriptor[] = ao.bands.map((b, i, arr) => ({
    ...b,
    minMarks:
      i === 0 ? Math.max(0, Math.round(b.minMarks * ratio)) : Math.round(b.minMarks * ratio),
    // Pin the top band's maxMarks to the exact target so the per-question
    // allocation is always reachable and the coverage test sums precisely.
    maxMarks: i === arr.length - 1 ? maxMarks : Math.round(b.maxMarks * ratio),
  }))
  return { ...ao, maxMarks, weighting, bands: scaledBands }
}

// ─── Assessment Objectives ─────────────────────────────────────────────────

const ao1Lit: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 — Read, understand and respond',
  description:
    'Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.',
  maxMarks: 20,
  weighting: 0.35,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 4,
      label: 'Basic',
      descriptor:
        'Responses are limited and simple. Basic awareness of meaning, with simple comments. Basic references to the text.',
      indicators: [
        'Simple, surface-level understanding of the text',
        'Limited textual references with little relevance',
        'Responses may retell rather than analyse',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some understanding',
      descriptor:
        'Some understanding of the text shown through mostly supported comments. Selection of some appropriate references.',
      indicators: [
        'Some relevant comments about the text',
        'Some appropriate quotations or references',
        'Begins to develop a personal response',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Sound understanding',
      descriptor:
        'Sound understanding of the text. Appropriate selection of references to support interpretations. Sound critical style developing.',
      indicators: [
        'Clear and coherent interpretation of the text',
        'Well-chosen references to support points',
        'A developing critical voice and personal engagement',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Thorough understanding',
      descriptor:
        'Thorough, thoughtful understanding of the text. Apt references integrated into interpretation. Sustained critical style with confident personal response.',
      indicators: [
        'Sustained, well-developed interpretation',
        'Apt and varied textual references integrated fluently',
        'Confident personal engagement with the text',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Perceptive, assured',
      descriptor:
        'Perceptive, assured understanding of the text. Judicious, precise references used to support a convincing personal response. Assured critical style throughout.',
      indicators: [
        'Insightful, original interpretation of the text',
        'Judicious, precise textual references throughout',
        'Assured critical voice with perceptive personal engagement',
      ],
    },
  ],
}

const ao2Lit: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 — Analyse language, form and structure',
  description:
    'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
  maxMarks: 20,
  weighting: 0.35,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 4,
      label: 'Basic awareness',
      descriptor:
        'Basic awareness of language, form and structure. Basic use of subject terminology.',
      indicators: [
        'Identifies obvious techniques without exploring effect',
        'Limited or inaccurate subject terminology',
        'Little awareness of the writer as craftsperson',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some understanding',
      descriptor:
        'Some understanding of language, form and structure. Some appropriate use of subject terminology.',
      indicators: [
        'Identifies some techniques with simple comment on effect',
        'Some accurate subject terminology',
        'Begins to recognise authorial choices',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Sound analysis',
      descriptor:
        'Sound analysis of language, form and structure. Accurate, consistent use of relevant subject terminology.',
      indicators: [
        'Explains how methods create specific effects',
        'Accurate, relevant subject terminology used consistently',
        'Clear awareness of the writer shaping meaning',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Thorough analysis',
      descriptor:
        'Thorough, detailed analysis of language, form and structure. Effective, well-integrated subject terminology.',
      indicators: [
        'Detailed analysis of how language, form and structure interact',
        'Subject terminology enhances rather than decorates the argument',
        'Explores layers of meaning created by the writer',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 17,
      maxMarks: 20,
      label: 'Perceptive analysis',
      descriptor:
        'Perceptive, assured analysis of language, form and structure. Subject terminology used judiciously and precisely.',
      indicators: [
        "Perceptive exploration of the writer's craft and its effect on readers",
        'Terminology used with judicious precision to illuminate meaning',
        'Evaluates the interplay of language, form and structure across the whole text',
      ],
    },
  ],
}

const ao3Lit: AssessmentObjective = {
  id: 'AO3',
  label: 'AO3 — Context',
  description:
    'Show understanding of the relationships between texts and the contexts in which they were written.',
  maxMarks: 10,
  weighting: 0.15,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 2,
      label: 'Basic awareness',
      descriptor:
        'Basic awareness of contextual factors. Context treated as bolt-on information rather than integrated into discussion.',
      indicators: [
        'Context mentioned as separate biographical or historical facts',
        'No connection between context and meaning',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some understanding',
      descriptor:
        'Some understanding of contextual factors with some links made between context and the text.',
      indicators: [
        'Some relevant contextual knowledge linked to the text',
        'Context beginning to inform understanding',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound understanding',
      descriptor:
        'Sound understanding of contextual factors. Context clearly linked to meaning and interpretation.',
      indicators: [
        'Context used to deepen interpretation of themes and characters',
        'Clear links between social, historical and cultural context and the text',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thorough understanding',
      descriptor:
        'Thorough understanding of contextual factors integrated purposefully into the argument.',
      indicators: [
        'Context integrated throughout to shape interpretation',
        "Explores how context influences the writer's purpose and the reader's reception",
      ],
    },
    {
      band: 'Band 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Perceptive understanding',
      descriptor:
        'Perceptive, assured understanding of contextual factors. Context woven seamlessly into a sophisticated argument.',
      indicators: [
        'Context is integral to the argument, never bolted on',
        'Explores ideological and cultural dimensions with nuance',
        'Considers how different contexts shape different readings',
      ],
    },
  ],
}

const ao4Lit: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 — Compare and contrast',
  description:
    'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. (In poetry comparison questions, AO4 measures the ability to make connections and comparisons between texts.)',
  maxMarks: 10,
  weighting: 0.15,
  bands: [
    {
      band: 'Band 1',
      minMarks: 0,
      maxMarks: 2,
      label: 'Basic connections',
      descriptor:
        'Basic connections between texts. Simple awareness of similarities or differences.',
      indicators: [
        'Identifies surface-level similarities without development',
        'Writes about texts separately with minimal comparison',
      ],
    },
    {
      band: 'Band 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some connections',
      descriptor: 'Some connections between texts. Some relevant comparative points made.',
      indicators: [
        'Begins to compare ideas and methods across texts',
        'Some use of comparative connectives',
      ],
    },
    {
      band: 'Band 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Sound comparison',
      descriptor: 'Sound comparison between texts. Clear connections made in a structured way.',
      indicators: [
        'Sustained comparison with clear comparative points',
        'Links ideas, themes and methods across texts',
      ],
    },
    {
      band: 'Band 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Thorough comparison',
      descriptor:
        'Thorough, developed comparison between texts. Well-integrated comparative discussion.',
      indicators: [
        'Detailed comparison of how writers use different methods to explore similar themes',
        'Comparative argument is sustained and well-structured',
      ],
    },
    {
      band: 'Band 5',
      minMarks: 9,
      maxMarks: 10,
      label: 'Perceptive comparison',
      descriptor:
        'Perceptive, assured comparison between texts. Sophisticated connections that illuminate both texts.',
      indicators: [
        'Insightful, evaluative comparison that deepens understanding of both texts',
        'Explores how different contexts and methods create different effects',
      ],
    },
  ],
}

// ─── Component 1: Shakespeare and Poetry ────────────────────────────────────

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
      id: 'Section A',
      questionType: 'Shakespeare extract + essay',
      taskDescription:
        'Read the extract from a studied Shakespeare play and answer the question that follows, using the extract as a starting point and referring to the play as a whole.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Lit, 15, 15 / 40),
        scaleAO(ao2Lit, 15, 15 / 40),
        scaleAO(ao3Lit, 10, 10 / 40),
      ],
      examinerNotes:
        'Candidates must use the extract as a starting point but should range across the whole play. Context (AO3) should be integrated, not bolted on. Reward any valid interpretation supported by evidence.',
    },
    {
      id: 'Section B',
      questionType: 'Poetry comparison',
      taskDescription:
        'Compare how two poets present a theme or idea. One named poem from the anthology and one unseen poem are provided.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Lit, 10, 10 / 40),
        scaleAO(ao2Lit, 20, 20 / 40),
        scaleAO(ao4Lit, 10, 10 / 40),
      ],
      examinerNotes:
        'Both poems must be discussed. AO4 rewards genuine comparison rather than sequential treatment. Reward exploration of methods and their effects on the reader.',
    },
  ],
}

// ─── Component 2: Post-1914 Prose/Drama and 19th Century Prose ──────────────

export const eduqasLitComp2: MarkScheme = {
  id: 'eduqas-lit-comp2',
  board: 'WJEC Eduqas',
  subject: 'English Literature',
  paper: 'Component 2',
  title: 'Post-1914 Prose/Drama and 19th Century Prose',
  totalMarks: 80,
  durationMinutes: 150,
  version: 'C720U20-1',
  sourceUrl: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
  questions: [
    {
      id: 'Section A',
      questionType: 'Post-1914 prose/drama extract + essay',
      taskDescription:
        'Read the extract from a studied post-1914 prose or drama text and answer the question that follows, using the extract as a starting point and referring to the text as a whole.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Lit, 15, 15 / 40),
        scaleAO(ao2Lit, 15, 15 / 40),
        scaleAO(ao3Lit, 10, 10 / 40),
      ],
      examinerNotes:
        'Candidates must use the extract as a starting point but should consider the text as a whole. Context should enhance interpretation. Accept any valid, supported reading.',
    },
    {
      id: 'Section B',
      questionType: '19th century prose essay',
      taskDescription:
        'Answer one question on a studied 19th century prose text, exploring how the writer presents a theme, character, or idea.',
      totalMarks: 40,
      assessmentObjectives: [
        scaleAO(ao1Lit, 15, 15 / 40),
        scaleAO(ao2Lit, 15, 15 / 40),
        scaleAO(ao3Lit, 10, 10 / 40),
      ],
      examinerNotes:
        'No extract is provided. Candidates must refer to the whole text. Reward detailed knowledge and the ability to select apposite references. Context (AO3) should be integrated throughout.',
    },
  ],
}
