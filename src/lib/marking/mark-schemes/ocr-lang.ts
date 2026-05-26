// ─── OCR GCSE English Language Mark Scheme ───────────────────────────────────
// J351 - Component 01 and Component 02.
// Based on the OCR J351 specification (9-1 GCSE).
//
// Source: https://www.ocr.org.uk/qualifications/gcse/english-language-j351/
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme, AssessmentObjective } from './types'

// ─── Reading Assessment Objectives ──────────────────────────────────────────

const ao1Reading: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Identify and interpret',
  description:
    'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
  maxMarks: 4,
  weighting: 0.05,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 1,
      label: 'Limited',
      descriptor:
        'Limited ability to identify information from the text. Limited selection of evidence.',
      indicators: [
        'Lists basic details with little relevance',
        'Evidence is general or inaccurate',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 2,
      maxMarks: 2,
      label: 'Some',
      descriptor:
        'Some ability to identify relevant information from the text. Some selection of appropriate evidence.',
      indicators: ['Identifies some explicit details relevant to the question'],
    },
    {
      band: 'Level 3',
      minMarks: 3,
      maxMarks: 3,
      label: 'Clear',
      descriptor:
        'Clearly identifies relevant information from the text. Clear selection of appropriate evidence.',
      indicators: [
        'Clear, focused selection of relevant information',
        'Appropriate evidence chosen',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 4,
      maxMarks: 4,
      label: 'Perceptive',
      descriptor:
        'Perceptive identification of relevant information. Judicious selection of precise evidence.',
      indicators: ['Precise, well-chosen details that show perceptive reading'],
    },
  ],
}

const ao1Synthesis: AssessmentObjective = {
  id: 'AO1',
  label: 'AO1 - Select and synthesise',
  description:
    'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
  maxMarks: 6,
  weighting: 0.075,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited',
      descriptor:
        'Limited synthesis of information from texts. Limited ability to draw connections between sources.',
      indicators: [
        'Treats sources separately with little connection',
        'Limited relevant evidence from either text',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        'Some synthesis of information from texts. Some connections drawn between sources.',
      indicators: [
        'Some relevant points from both texts',
        'Begins to draw connections between sources',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        'Clear synthesis of information from texts. Clear and effective connections between sources.',
      indicators: [
        'Draws clear, purposeful connections between texts',
        'Evidence from both sources is well selected and integrated',
      ],
    },
  ],
}

const ao2LanguageAnalysis: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language and structure',
  description:
    'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
  maxMarks: 12,
  weighting: 0.15,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 3,
      label: 'Limited',
      descriptor:
        'Limited awareness of the effects of language and/or structure. Limited use of subject terminology. Limited references to the text.',
      indicators: [
        'Identifies features without commenting on effect',
        'Subject terminology is absent or inaccurate',
        'References are sparse or irrelevant',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 4,
      maxMarks: 6,
      label: 'Some',
      descriptor:
        'Some comment on the effects of language and/or structure. Some use of relevant subject terminology. Some appropriate references.',
      indicators: [
        'Names some methods and comments briefly on effect',
        'Some accurate subject terminology',
        'Some relevant references or quotations',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 7,
      maxMarks: 9,
      label: 'Clear',
      descriptor:
        'Clear explanation of the effects of language and/or structure. Clear and accurate use of subject terminology. Well-chosen references.',
      indicators: [
        'Explains how language and structure create effects',
        'Accurate, consistently used subject terminology',
        'Well-chosen quotations support analysis',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 10,
      maxMarks: 12,
      label: 'Detailed',
      descriptor:
        'Detailed and perceptive analysis of the effects of language and/or structure. Precise use of subject terminology. Judiciously chosen references.',
      indicators: [
        'Perceptive analysis of layered meanings and effects',
        'Precise terminology used as an analytical tool',
        'Judicious, embedded references that illuminate the analysis',
      ],
    },
  ],
}

const ao3Comparison: AssessmentObjective = {
  id: 'AO3',
  label: "AO3 - Compare writers' ideas and perspectives",
  description:
    "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.",
  maxMarks: 10,
  weighting: 0.125,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited',
      descriptor:
        'Limited comparison of ideas and perspectives between texts. Deals with texts separately.',
      indicators: [
        'Sequential treatment with no meaningful comparison',
        'Little awareness of different perspectives',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 5,
      label: 'Some',
      descriptor:
        "Some comparison of ideas and perspectives between texts. Some connections between writers' viewpoints.",
      indicators: [
        'Some relevant comparisons are made',
        'Begins to identify similarities and differences',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 6,
      maxMarks: 8,
      label: 'Clear',
      descriptor:
        'Clear comparison of ideas and perspectives between texts. Clear analysis of how writers convey viewpoints differently.',
      indicators: [
        "Explores how and why writers' perspectives differ",
        'Clear, structured comparison with supporting evidence',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 9,
      maxMarks: 10,
      label: 'Discriminating',
      descriptor:
        'Discriminating comparison of ideas and perspectives between texts. Perceptive analysis of how methods convey different viewpoints.',
      indicators: [
        'Perceptive, sustained comparison throughout',
        'Analyses how methods shape and reinforce different perspectives',
      ],
    },
  ],
}

const ao4Evaluation: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate critically',
  description: 'Evaluate texts critically and support this with appropriate textual references.',
  maxMarks: 8,
  weighting: 0.1,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 2,
      label: 'Limited',
      descriptor: "Limited evaluative comment on the text. Limited reference to writer's methods.",
      indicators: [
        'States a basic opinion with little or no support',
        "Limited awareness of the writer's intent or method",
      ],
    },
    {
      band: 'Level 2',
      minMarks: 3,
      maxMarks: 4,
      label: 'Some',
      descriptor:
        "Some evaluative comment on the text. Some reference to writer's methods with some discussion of effect.",
      indicators: [
        'Begins to justify a personal response with reference to the text',
        'Some awareness of how methods create an effect',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 5,
      maxMarks: 6,
      label: 'Clear',
      descriptor:
        "Clear evaluation of the text supported by well-chosen references. Clear understanding of writer's methods and their effects.",
      indicators: [
        'Clear personal response supported by analysis of methods',
        'Engages critically with the text and its purpose',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 7,
      maxMarks: 8,
      label: 'Perceptive',
      descriptor:
        "Perceptive, detailed evaluation of the text. Judicious references to writer's methods and their effects on the reader.",
      indicators: [
        "Convincing, critical evaluation rooted in the writer's craft",
        'Perceptive understanding of how the text achieves its effects',
      ],
    },
  ],
}

// ─── Writing Assessment Objectives ──────────────────────────────────────────

const ao5ContentOrganisation: AssessmentObjective = {
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
      label: 'Limited',
      descriptor:
        'Limited communication of ideas. Limited awareness of the reader. Limited linking of ideas. Limited paragraphing.',
      indicators: [
        'Narrow range of vocabulary',
        'Limited sense of purpose or audience',
        'Ideas are loosely connected or disjointed',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 7,
      maxMarks: 12,
      label: 'Some',
      descriptor:
        'Some successful communication. Some attempt to adapt for purpose, audience and form. Some attempt at paragraphing with some discourse markers.',
      indicators: [
        'Some appropriate vocabulary choices',
        'Tone begins to match the form and purpose',
        'Some structure emerging through paragraphs',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 13,
      maxMarks: 18,
      label: 'Clear and consistent',
      descriptor:
        'Clear and consistent communication matched to purpose, audience and form. Coherent paragraphs with clear discourse markers and effective structural features.',
      indicators: [
        'Engaging writing with a clear sense of audience',
        'Well-sequenced paragraphs with effective connectives',
        'Appropriate register sustained throughout',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 19,
      maxMarks: 24,
      label: 'Compelling',
      descriptor:
        'Compelling and sophisticated communication. Tone, style and register are convincingly matched to purpose and audience. Varied and inventive structural features used with control.',
      indicators: [
        'Distinctive voice and compelling content',
        'Sophisticated structural choices (e.g. motifs, circularity, counterargument)',
        'Vocabulary is ambitious, precise and purposeful',
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
      label: 'Limited',
      descriptor:
        'Limited range of vocabulary. Occasional use of varied sentence forms. Some accurate basic punctuation. Occasional accurate spelling of simple words.',
      indicators: [
        'Simple sentences dominate',
        'Frequent errors in spelling and punctuation',
        'Vocabulary is basic and repetitive',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some range of vocabulary. Some variety of sentence forms for effect. Some accurate punctuation. Some accurate spelling, including more ambitious words.',
      indicators: [
        'Some attempt at varied sentence structures',
        'Punctuation is sometimes used to clarify meaning',
        'Spelling of common words is mostly accurate',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Considerable',
      descriptor:
        'Considerable range of vocabulary used effectively. Varied use of sentence forms for effect. Accurate punctuation. Mostly accurate spelling, including ambitious vocabulary.',
      indicators: [
        'Controlled variety of sentence types for deliberate effect',
        'Punctuation is accurate and aids clarity',
        'Ambitious vocabulary is spelled correctly',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Extensive',
      descriptor:
        'Extensive and ambitious vocabulary used with precision. Full range of sentence forms for effect. Wide range of accurate punctuation. Consistently accurate spelling of ambitious words.',
      indicators: [
        'Consistently accurate across complex constructions',
        'Punctuation is used to create precise effects',
        'Ambitious vocabulary deployed with control and precision',
      ],
    },
  ],
}

// ─── Component 01: Communicating Information and Ideas ──────────────────────

export const ocrLangComponent01: MarkScheme = {
  id: 'ocr-lang-component01',
  board: 'OCR',
  subject: 'English Language',
  paper: 'Component 01',
  title: 'Communicating Information and Ideas',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J351/01',
  sourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/english-language-j351/',
  questions: [
    {
      id: 'Q1',
      questionType: 'Information retrieval',
      taskDescription: 'Identify explicit information from the source text.',
      totalMarks: 4,
      assessmentObjectives: [ao1Reading],
      examinerNotes:
        'Award one mark per correct identification of explicit information. Do not penalise minor copying errors.',
    },
    {
      id: 'Q2',
      questionType: 'Synthesis',
      taskDescription:
        'Use details from both sources to write a summary of the similarities and/or differences.',
      totalMarks: 6,
      assessmentObjectives: [ao1Synthesis],
      examinerNotes:
        'Reward inference and synthesis across both sources. Clear connections between sources are required for Level 3.',
    },
    {
      id: 'Q3',
      questionType: 'Language and structure analysis',
      taskDescription:
        'Analyse how the writer uses language and structure to achieve effects and influence the reader.',
      totalMarks: 12,
      assessmentObjectives: [ao2LanguageAnalysis],
      examinerNotes:
        'Reward analysis of effect, not device-spotting. Precise quotation is essential at Level 3+. Both language and structure should be addressed for higher levels.',
    },
    {
      id: 'Q4',
      questionType: "Comparison of writers' ideas and perspectives",
      taskDescription:
        'Compare how the two writers convey their different ideas and perspectives on [topic].',
      totalMarks: 10,
      assessmentObjectives: [ao3Comparison],
      examinerNotes:
        'Reward genuine comparison, not sequential treatment. Higher marks require analysis of how methods convey perspective.',
    },
    {
      id: 'Q5',
      questionType: 'Transactional / persuasive writing',
      taskDescription:
        'Write a text for a specified audience, purpose and form (e.g. a letter, article, speech, or leaflet).',
      totalMarks: 40,
      assessmentObjectives: [ao5ContentOrganisation, ao6TechnicalAccuracy],
      examinerNotes:
        'AO5 is marked out of 24, AO6 out of 16. Writing should match the specified form. Reward deliberate crafting and awareness of audience.',
    },
    {
      id: 'Q5-SPaG',
      questionType: 'Editing / proofreading',
      taskDescription:
        'Edit a short passage for clarity, correcting errors in grammar, spelling and punctuation.',
      totalMarks: 8,
      assessmentObjectives: [ao4Evaluation],
      examinerNotes:
        'Award marks for accurate identification and correction of errors. Accept any reasonable correction that improves the text.',
    },
  ],
}

// ─── Component 02: Exploring Effects and Impact ─────────────────────────────

const ao2ExtendedAnalysis: AssessmentObjective = {
  id: 'AO2',
  label: 'AO2 - Analyse language, form and structure',
  description:
    'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Limited',
      descriptor:
        'Limited awareness of the effects of language and/or structure. Limited use of subject terminology. Limited textual references.',
      indicators: [
        'Identifies features without commenting on effect',
        'Subject terminology absent or inaccurate',
        'References are sparse',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some comment on effects of language and/or structure. Some use of relevant subject terminology. Some appropriate references.',
      indicators: [
        'Names some methods and comments briefly on effect',
        'Some accurate subject terminology',
        'Some relevant references or quotations',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Clear',
      descriptor:
        'Clear explanation of effects of language and/or structure. Clear and accurate use of subject terminology. Well-chosen references support analysis.',
      indicators: [
        'Explains how language and structure create effects',
        'Accurate and consistent subject terminology',
        'Well-chosen quotations support the analysis',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Detailed',
      descriptor:
        'Detailed, perceptive analysis of the effects of language and/or structure. Precise and judicious use of subject terminology. Expertly chosen references.',
      indicators: [
        'Perceptive analysis of layered meanings and effects',
        'Terminology is precise and enhances the analysis',
        'Judicious references illuminate the argument',
      ],
    },
  ],
}

const ao4ExtendedEval: AssessmentObjective = {
  id: 'AO4',
  label: 'AO4 - Evaluate critically',
  description: 'Evaluate texts critically and support this with appropriate textual references.',
  maxMarks: 16,
  weighting: 0.2,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 4,
      label: 'Limited',
      descriptor:
        "Limited evaluative comment on the text. Limited reference to writer's methods with little comment on effect.",
      indicators: [
        'States a basic opinion with little support',
        "Limited awareness of writer's purpose or method",
      ],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        "Some evaluative comment on the text. Some reference to writer's methods with some comment on effect.",
      indicators: [
        'Begins to justify a personal response',
        'Some connection between method and effect',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Clear',
      descriptor:
        "Clear and considered evaluation of the text. Clear reference to writer's methods and their effects, supported by well-chosen references.",
      indicators: [
        'Clear personal response supported by method analysis',
        "Critical engagement with the text's purpose and effects",
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Perceptive',
      descriptor:
        "Perceptive, detailed and critical evaluation of the text. Judicious reference to writer's methods and their effects on the reader.",
      indicators: [
        'Convincing, critical evaluation fully rooted in analysis',
        'Perceptive understanding of how the text achieves its effects',
      ],
    },
  ],
}

const ao5Narrative: AssessmentObjective = {
  id: 'AO5',
  label: 'AO5 - Content and organisation (creative)',
  description:
    'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
  maxMarks: 24,
  weighting: 0.3,
  bands: [
    {
      band: 'Level 1',
      minMarks: 1,
      maxMarks: 6,
      label: 'Limited',
      descriptor:
        'Limited communication of ideas. Limited awareness of purpose and reader. Limited organisation. Paragraphs may be used.',
      indicators: [
        'Narrow vocabulary range',
        'Little sense of voice or audience',
        'Ideas are loosely organised',
      ],
    },
    {
      band: 'Level 2',
      minMarks: 7,
      maxMarks: 12,
      label: 'Some',
      descriptor:
        'Some clear communication. Some attempt to adapt for purpose and audience. Some linking of ideas with attempts at paragraphing.',
      indicators: [
        'Some conscious vocabulary choices',
        'Tone begins to match purpose',
        'Some structural awareness',
      ],
    },
    {
      band: 'Level 3',
      minMarks: 13,
      maxMarks: 18,
      label: 'Clear and consistent',
      descriptor:
        'Clear and consistent imaginative communication. Register and tone matched to purpose and audience. Coherent paragraphs with effective discourse markers.',
      indicators: [
        'Engaging, well-sequenced writing',
        'Clear voice and sense of audience',
        'Effective use of structural features',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 19,
      maxMarks: 24,
      label: 'Compelling',
      descriptor:
        'Compelling, sophisticated and imaginative communication. Distinctive voice with convincing register and tone. Varied and inventive structural features.',
      indicators: [
        'Distinctive, memorable voice',
        'Sophisticated narrative or descriptive crafting',
        'Ambitious structural choices enhance meaning',
      ],
    },
  ],
}

const ao6Accuracy: AssessmentObjective = {
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
      label: 'Limited',
      descriptor:
        'Limited range of vocabulary. Occasional varied sentence forms. Some accurate basic punctuation. Occasional accurate spelling.',
      indicators: ['Simple sentences dominate', 'Frequent errors hinder meaning'],
    },
    {
      band: 'Level 2',
      minMarks: 5,
      maxMarks: 8,
      label: 'Some',
      descriptor:
        'Some range of vocabulary. Some variety of sentence forms. Some accurate punctuation. Some accurate spelling of more ambitious words.',
      indicators: ['Some variety in sentence structures', 'Punctuation sometimes used for effect'],
    },
    {
      band: 'Level 3',
      minMarks: 9,
      maxMarks: 12,
      label: 'Considerable',
      descriptor:
        'Considerable range of vocabulary. Varied sentence forms for effect. Accurate punctuation. Mostly accurate spelling of ambitious vocabulary.',
      indicators: [
        'Controlled variety for deliberate effect',
        'Punctuation is accurate and purposeful',
      ],
    },
    {
      band: 'Level 4',
      minMarks: 13,
      maxMarks: 16,
      label: 'Extensive',
      descriptor:
        'Extensive, ambitious vocabulary with precision. Full range of sentence forms for effect. Wide range of accurate punctuation. Consistently accurate spelling.',
      indicators: [
        'Consistently accurate across complex constructions',
        'Punctuation creates precise effects',
      ],
    },
  ],
}

export const ocrLangComponent02: MarkScheme = {
  id: 'ocr-lang-component02',
  board: 'OCR',
  subject: 'English Language',
  paper: 'Component 02',
  title: 'Exploring Effects and Impact',
  totalMarks: 80,
  durationMinutes: 120,
  version: 'J351/02',
  sourceUrl: 'https://www.ocr.org.uk/qualifications/gcse/english-language-j351/',
  questions: [
    {
      id: 'Q1',
      questionType: 'Language and structure analysis (extended)',
      taskDescription:
        'Analyse how the writer uses language and structure to engage and influence the reader in a 19th-century or literary non-fiction source.',
      totalMarks: 16,
      assessmentObjectives: [ao2ExtendedAnalysis],
      examinerNotes:
        'Reward analysis of both language and structure. At Level 3+, students should discuss the interplay between language choices and structural decisions.',
    },
    {
      id: 'Q2',
      questionType: 'Evaluation',
      taskDescription:
        'Evaluate how effectively the writer conveys their ideas and perspective. Support your views with detailed reference to the text.',
      totalMarks: 16,
      assessmentObjectives: [ao4ExtendedEval],
      examinerNotes:
        "Reward critical personal response supported by analysis of methods. Level 4 requires convincing, perceptive evaluation rooted in the writer's craft.",
    },
    {
      id: 'Q3',
      questionType: "Comparison of writers' ideas and perspectives",
      taskDescription:
        'Compare how the two writers convey their different ideas and perspectives on [topic].',
      totalMarks: 8,
      assessmentObjectives: [
        {
          ...ao3Comparison,
          maxMarks: 8,
          weighting: 1,
          bands: [
            {
              band: 'Level 1',
              minMarks: 1,
              maxMarks: 2,
              label: 'Limited',
              descriptor: 'Limited comparison of ideas and perspectives. Texts treated separately.',
              indicators: [
                'Sequential treatment with no connection',
                'Little awareness of differing perspectives',
              ],
            },
            {
              band: 'Level 2',
              minMarks: 3,
              maxMarks: 4,
              label: 'Some',
              descriptor:
                "Some comparison of ideas and perspectives. Some connections between writers' viewpoints.",
              indicators: [
                'Some relevant comparisons',
                'Begins to identify similarities and differences',
              ],
            },
            {
              band: 'Level 3',
              minMarks: 5,
              maxMarks: 6,
              label: 'Clear',
              descriptor:
                'Clear comparison of ideas and perspectives. Clear analysis of how writers convey viewpoints differently.',
              indicators: [
                'Explores how and why writers differ',
                'Structured comparison with evidence',
              ],
            },
            {
              band: 'Level 4',
              minMarks: 7,
              maxMarks: 8,
              label: 'Discriminating',
              descriptor:
                'Discriminating comparison with perceptive analysis of how methods convey different perspectives.',
              indicators: [
                'Perceptive, sustained comparison',
                'Methods analysed in relation to perspective',
              ],
            },
          ],
        },
      ],
      examinerNotes:
        'Reward genuine comparison throughout, not sequential treatment. Higher marks require analysis of how methods convey perspective.',
    },
    {
      id: 'Q4',
      questionType: 'Creative / narrative writing',
      taskDescription:
        'Either write a description suggested by a picture, or write the opening of a narrative on a given theme.',
      totalMarks: 40,
      assessmentObjectives: [ao5Narrative, ao6Accuracy],
      examinerNotes:
        'AO5 is marked out of 24, AO6 out of 16. Reward deliberate crafting, distinctive voice and structural control. Accept either task option.',
    },
  ],
}
