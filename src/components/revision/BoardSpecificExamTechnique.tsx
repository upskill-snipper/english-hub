/**
 * BoardSpecificExamTechnique
 * --------------------------
 * Shared content data + helpers used by the board-aware Exam Technique pages.
 *
 * Each GCSE board (AQA, Edexcel, OCR, Eduqas) has slightly different paper
 * structures, question types and timing. The data here lets the individual
 * page files render board-specific copy from a single source of truth.
 *
 * IGCSE boards (Edexcel IGCSE, Cambridge 0500, Cambridge 0990) are handled
 * by redirecting users to their dedicated /igcse/... routes.
 *
 * i18n: the EN literals below are the single source of truth. Client
 * consumers may call `useTranslatedBoardContent(board)` to receive a
 * version of the content with each translatable field passed through the
 * `revision.exam_technique.<board>.*` namespace via `useT()`. Missing keys
 * fall back to the original EN string (see lookup() in dictionary.ts).
 *
 * NOTE: this module has no `'use client'` directive so that server pages
 * can keep importing the static data + pure helpers. The translation hook
 * below uses `useT()`, which is itself a client hook - calling it from a
 * server component will error, exactly as React expects.
 */

import { useMemo } from 'react'
import type { ExamBoard } from '@/lib/board/board-config'
import { useT } from '@/lib/i18n/use-t'

/* ── Types ──────────────────────────────────────────────────────────── */

export type GcseBoard = 'aqa' | 'edexcel' | 'ocr' | 'eduqas'

export interface PaperTimingRow {
  time: string
  label: string
  detail: string
  marks?: string
  /** key hint for colour, mapped in the page */
  colour?: 'prep' | 'reading' | 'analysis' | 'creative' | 'check' | 'plan' | 'comparison'
}

export interface PaperBreakdown {
  title: string
  badge: string
  description: string
  rows: PaperTimingRow[]
  tip?: string
  warning?: string
}

export interface QuestionTypeRow {
  paper: string
  question: string
  marks: string
  description: string
  approach: string
}

export interface BoardEssayContent {
  /** Brief intro that frames how essays differ on this board */
  intro: string
  /** Which AOs the board emphasises most for literature responses */
  aoFocus: string[]
  /** Distinctive structural advice for this board's literature questions */
  structureTips: string[]
  /** A short checklist markers look for */
  examinerChecklist: string[]
  /** Specific guidance for the board's headline essay (e.g. comparison, modern text) */
  headlineEssayLabel: string
  headlineEssayGuidance: string
}

export interface BoardExamTechniqueContent {
  boardName: string
  shortName: string
  /** Total exam hours across the spec */
  totalDuration: string
  /** Brief one-liner describing the structure */
  structureSummary: string
  /** All papers in order with timings */
  papers: PaperBreakdown[]
  /** Question type tables for the question-types page */
  questionTypes: QuestionTypeRow[]
  /** Essay structure content */
  essay: BoardEssayContent
}

/* ── Helpers ────────────────────────────────────────────────────────── */

export function isGcseExamBoard(board: ExamBoard | null): board is GcseBoard {
  return board === 'aqa' || board === 'edexcel' || board === 'ocr' || board === 'eduqas'
}

/* ── Per-board content ─────────────────────────────────────────────── */

export const AQA_CONTENT: BoardExamTechniqueContent = {
  boardName: 'AQA',
  shortName: 'AQA',
  // 31 October 2026: this said 8 hours. The four papers below are 1h 45m, 1h 45m,
  // 1h 45m and 2h 15m, which is 7 hours 30 minutes.
  totalDuration: '7 hours 30 minutes total across 4 papers',
  structureSummary:
    'AQA assesses GCSE English across four papers: Literature Paper 1 (Shakespeare + 19th-century novel), Literature Paper 2 (Modern texts, anthology poetry, unseen poetry), Language Paper 1 (Fiction reading + creative writing) and Language Paper 2 (Non-fiction reading + transactional writing).',
  papers: [
    {
      title: 'AQA English Language Paper 1',
      badge: '1h 45m',
      description:
        'Explorations in Creative Reading and Writing. One literary fiction extract with four reading questions and one creative writing question.',
      rows: [
        {
          time: '0:00 - 0:15',
          label: 'Read the source text carefully',
          detail:
            'Read the full extract once for understanding, then re-read sections referenced by each question. Underline key words.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          // 31 October 2026: this was "List four things", Question 1's format
          // before summer 2026. It is now four multiple-choice parts, 1.1 to 1.4
          // (src/data/mark-scheme-guides/aqa-lang-paper1.ts). Paper 2's Question 2
          // below was a "summary of differences"; from 2026 it asks what you can
          // infer about the differences named (aqa-lang-paper2.ts).
          time: '0:15 - 0:20',
          label: 'Q1 - Multiple choice (4 marks)',
          detail:
            'Four parts, 1.1 to 1.4. Find the words in the named lines that prove one option, then shade it.',
          marks: '4 marks',
          colour: 'reading',
        },
        {
          time: '0:20 - 0:28',
          label: 'Q2 - Language analysis (8 marks)',
          detail:
            "Pick 2-3 specific words or phrases. Identify technique, explain effect, link to writer's intention.",
          marks: '8 marks',
          colour: 'reading',
        },
        {
          time: '0:28 - 0:36',
          label: 'Q3 - Structure analysis (8 marks)',
          detail:
            'Analyse opening, shifts in focus, narrative perspective, sentence and paragraph length.',
          marks: '8 marks',
          colour: 'reading',
        },
        {
          time: '0:36 - 0:56',
          label: 'Q4 - Evaluation (20 marks)',
          detail:
            'Take a clear position on a statement. Use 3 pieces of evidence with detailed analysis.',
          marks: '20 marks',
          colour: 'analysis',
        },
        {
          time: '0:56 - 1:01',
          label: 'Q5 - Plan creative writing',
          detail: 'Five minutes planning: hook, 3-4 sections, ending, deliberate techniques.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:01 - 1:40',
          label: 'Q5 - Write creative piece (40 marks)',
          detail: '24 marks AO5 + 16 marks AO6. 400-600 words. Vary sentences, deploy techniques.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:40 - 1:45',
          label: 'Proofread',
          detail: "Check spelling, full stops, homophones (there/their/they're).",
          marks: 'Check',
          colour: 'check',
        },
      ],
      tip: 'Q5 is worth half the marks on the entire paper. Protect your Q5 time by capping Q4 at 20 minutes.',
    },
    {
      title: 'AQA English Language Paper 2',
      badge: '1h 45m',
      description:
        "Writers' Viewpoints and Perspectives. Two linked non-fiction texts with four reading questions and one transactional writing question.",
      rows: [
        {
          time: '0:00 - 0:15',
          label: 'Read both source texts',
          detail:
            'Source A and Source B fully. Note tone, purpose, audience, similarities and differences.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:15 - 0:19',
          label: 'Q1 - True or false (4 marks)',
          detail: 'Shade four correct statements from Source A. Do not overthink.',
          marks: '4 marks',
          colour: 'reading',
        },
        {
          time: '0:19 - 0:27',
          label: 'Q2 - Inferring differences (8 marks)',
          detail:
            'Infer the differences the question names, from both sources, with brief quotations.',
          marks: '8 marks',
          colour: 'reading',
        },
        {
          time: '0:27 - 0:39',
          label: 'Q3 - Language analysis (12 marks)',
          detail: 'One source. Aim for 3-4 detailed language points with subject terminology.',
          marks: '12 marks',
          colour: 'analysis',
        },
        {
          time: '0:39 - 0:55',
          label: 'Q4 - Comparison (16 marks)',
          detail:
            'Compare how the writers convey different perspectives. Use both texts in every paragraph.',
          marks: '16 marks',
          colour: 'comparison',
        },
        {
          time: '0:55 - 1:00',
          label: 'Q5 - Plan transactional writing',
          detail:
            'Identify purpose, audience, form. Plan 3-4 key points with rhetorical techniques.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:00 - 1:40',
          label: 'Q5 - Write transactional piece (40 marks)',
          detail: '24 marks AO5 + 16 marks AO6. Match the form. Use persuasive techniques.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:40 - 1:45',
          label: 'Proofread',
          detail: 'Check spelling, punctuation, paragraphing, form conventions.',
          marks: 'Check',
          colour: 'check',
        },
      ],
      warning:
        'Q4 is the hardest reading question. Cap it at 16 minutes - partial comparison beats one-sided analysis.',
    },
    {
      title: 'AQA English Literature Paper 1',
      badge: '1h 45m',
      description:
        'Shakespeare and the 19th-century novel. Two essay questions, each based on an extract plus the wider text.',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read Shakespeare extract and question',
          detail: 'Read twice. Underline key words. Identify focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:05 - 0:10',
          label: 'Plan Shakespeare essay',
          detail: 'Thesis + 3 paragraph topics (at least one beyond extract) + key quotations.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '0:10 - 0:50',
          label: 'Write Shakespeare essay (30 marks + 4 SPaG = 34 total)',
          detail:
            'Intro + 3 PEEL paragraphs + conclusion. At least one paragraph beyond the extract.',
          marks: '30+4',
          colour: 'creative',
        },
        {
          time: '0:50 - 0:55',
          label: 'Read 19th-century novel extract and question',
          detail: 'Read extract. Identify focus. Plan wider-text references.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:55 - 1:00',
          label: 'Plan novel essay',
          detail:
            'Thesis + 3 paragraph topics + quotations. At least one paragraph beyond extract.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:00 - 1:40',
          label: 'Write novel essay (30 marks)',
          detail: 'Intro + 3 paragraphs + conclusion. Integrate context naturally.',
          marks: '30 marks',
          colour: 'creative',
        },
        {
          time: '1:40 - 1:45',
          label: 'Proofread both essays',
          detail: 'Skim. Fix errors. Add final contextual points if time.',
          marks: 'Check',
          colour: 'check',
        },
      ],
    },
    {
      title: 'AQA English Literature Paper 2',
      badge: '2h 15m',
      description:
        'Modern texts and poetry. Three sections: modern prose/drama, poetry anthology comparison, and unseen poetry.',
      rows: [
        {
          time: '0:00 - 0:45',
          label: 'Section A - Modern text (e.g. An Inspector Calls)',
          detail:
            '5 mins planning + 35 mins writing + 5 mins proofread. Quotations from memory. 30 + 4 SPaG = 34 total.',
          marks: '30+4',
          colour: 'creative',
        },
        {
          time: '0:45 - 1:30',
          label: 'Section B - Poetry comparison (30 marks)',
          detail:
            'Compare a printed poem with one from the anthology. 5 mins planning + 35 mins writing + 5 mins proofread.',
          marks: '30 marks',
          colour: 'comparison',
        },
        {
          time: '1:30 - 1:55',
          label: 'Section C Part 1 - Unseen poem (24 marks)',
          detail: 'Read 3 times. 5 mins planning + 15 mins writing. Language, structure, form.',
          marks: '24 marks',
          colour: 'reading',
        },
        {
          time: '1:55 - 2:15',
          label: 'Section C Part 2 - Compare unseen poems (8 marks)',
          detail: '2-3 focused comparison paragraphs.',
          marks: '8 marks',
          colour: 'reading',
        },
      ],
      tip: 'Prepare comparison pairings in advance for each anthology theme. Know 2-3 poems you can confidently compare to any anthology poem.',
    },
  ],
  questionTypes: [
    {
      paper: 'Lang P1',
      question: 'Q1 - Multiple choice (1.1 to 1.4)',
      marks: '4',
      description: 'Four short questions on a specified section, one answer to shade in each.',
      approach: 'Check each option against the lines. Beware options that only repeat a word.',
    },
    {
      paper: 'Lang P1',
      question: 'Q2 - Language analysis',
      marks: '8',
      description: 'How does the writer use language to describe X?',
      approach: "2-3 zoomed-in quotations. Technique → effect → writer's intention.",
    },
    {
      paper: 'Lang P1',
      question: 'Q3 - Structure analysis',
      marks: '8',
      description:
        'How has the writer structured the text to create the effect named, such as tension?',
      approach: 'Opening, shifts, perspective, sentence and paragraph length, ending.',
    },
    {
      paper: 'Lang P1',
      question: 'Q4 - Evaluation',
      marks: '20',
      description: 'To what extent do you agree with a statement?',
      approach: 'Clear position. 3 evidenced points. Use evaluative language.',
    },
    {
      paper: 'Lang P1',
      question: 'Q5 - Creative writing',
      marks: '40',
      description: 'Descriptive or narrative writing linked to a stimulus.',
      approach: 'Single moment or setting. Sensory detail. Varied sentences. 400-600 words.',
    },
    {
      paper: 'Lang P2',
      question: 'Q1 - True or false',
      marks: '4',
      description: 'Shade four correct statements from Source A.',
      approach: 'Quick retrieval. Maximum 4 minutes.',
    },
    {
      paper: 'Lang P2',
      question: 'Q2 - Inferring differences',
      marks: '8',
      description:
        'What you can infer about the differences the question names, from both sources.',
      approach: '3 differences with short embedded quotations from both sources.',
    },
    {
      paper: 'Lang P2',
      question: 'Q3 - Language analysis',
      marks: '12',
      description: 'How does the writer use language in one source?',
      approach: '3-4 detailed points with subject terminology. Deeper than P1 Q2.',
    },
    {
      paper: 'Lang P2',
      question: 'Q4 - Comparison',
      marks: '16',
      description: 'Compare how the writers convey their different perspectives.',
      approach: 'Both texts in every paragraph. Focus on methods, not just content.',
    },
    {
      paper: 'Lang P2',
      question: 'Q5 - Transactional writing',
      marks: '40',
      description: 'Letter, article, speech or leaflet on a viewpoint.',
      approach: 'Match the form. Persuasive techniques. Counter-arguments.',
    },
    {
      paper: 'Lit P1',
      question: 'Shakespeare extract essay',
      marks: '30+4',
      description:
        'Starting with the extract, explore how Shakespeare presents X. 30 marks AO1-AO3 + 4 marks AO4 SPaG.',
      approach: 'Start with extract. At least one paragraph from wider play. Context.',
    },
    {
      paper: 'Lit P1',
      question: '19th-century novel extract essay',
      marks: '30',
      description: 'Starting with the extract, explore how the writer presents X.',
      approach: 'Same structure as Shakespeare. Refer to extract and wider novel.',
    },
    {
      paper: 'Lit P2',
      question: 'Modern text essay (no extract)',
      marks: '30+4',
      description:
        'Choice of two questions on your studied modern text. 30 marks AO1-AO3 + 4 marks AO4 SPaG.',
      approach: 'Quotations from memory. Thematic argument across the whole text.',
    },
    {
      paper: 'Lit P2',
      question: 'Anthology poetry comparison',
      marks: '30',
      description: 'Compare a printed anthology poem with one of your choice.',
      approach: 'Pre-prepared pairings. Compare methods within paragraphs.',
    },
    {
      paper: 'Lit P2',
      question: 'Unseen poetry - single poem',
      marks: '24',
      description: 'How does the poet present X in this poem?',
      approach: 'Language, structure, form. No context required.',
    },
    {
      paper: 'Lit P2',
      question: 'Unseen poetry - comparison',
      marks: '8',
      description: 'Compare how the two poets present X.',
      approach: '2-3 focused comparison paragraphs on methods.',
    },
  ],
  essay: {
    intro:
      'AQA literature essays follow a clear extract-to-wider-text pattern. You are expected to weave AO1 (response), AO2 (language and structure) and AO3 (context) throughout, with SPaG (AO4) explicitly marked on Shakespeare and the modern text.',
    aoFocus: [
      'AO1 - personal, evidenced response with embedded quotations',
      'AO2 - analysis of language, form and structure with subject terminology',
      'AO3 - context that informs interpretation (not bolted on)',
      'AO4 - accurate spelling, punctuation and grammar (Shakespeare + modern text only)',
    ],
    structureTips: [
      'Open with a thesis that takes a clear position on the question.',
      'On extract-based questions, make your first body paragraph anchored in the extract.',
      'Always have at least one body paragraph that draws from the wider text.',
      'Embed AO3 context inside your analysis paragraphs - never as a stand-alone opener.',
      'On Lit P2 modern text, weave in Priestley/Stevenson/etc. authorial intent.',
    ],
    examinerChecklist: [
      'Conceptualised, thesis-driven argument',
      'Methods analysed (not just spotted)',
      'Subject terminology used precisely',
      'Context as interpretation, not biography',
      'Wider text references on extract questions',
    ],
    headlineEssayLabel: 'Lit P2 anthology poetry comparison (30 marks)',
    headlineEssayGuidance:
      'Compare methods inside every paragraph. Use the printed poem as your anchor and pull in your second poem with a clear comparative connective. AO3 context for both poets is expected.',
  },
}

export const EDEXCEL_CONTENT: BoardExamTechniqueContent = {
  boardName: 'Pearson Edexcel',
  shortName: 'Edexcel',
  // 31 October 2026: said 8 hours. Language 1h 45m and 2h 5m, Literature 1h 45m
  // and 2h 15m, from the checked guides, come to 7 hours 50 minutes.
  totalDuration: '7 hours 50 minutes total across 4 papers',
  structureSummary:
    'Pearson Edexcel GCSE English assesses across four papers: Literature Paper 1 (Shakespeare + post-1914 British play/novel), Literature Paper 2 (19th-century novel + poetry), Language Paper 1 (Fiction) and Language Paper 2 (Non-fiction).',
  papers: [
    {
      title: 'Edexcel English Language Paper 1',
      badge: '1h 45m',
      // 31 October 2026: rewritten to src/data/mark-scheme-guides/edexcel-lang-paper1.ts.
      // The rows gave Q2 as a 4-mark language question, Q3 as 15 marks and Q4 as a
      // 20-mark "to what extent do you agree": 64 marks of questions on a paper whose
      // reading section is 24. The extract was "19th-, 20th- or 21st-century"; it is
      // 19th-century. The minutes follow the guide's suggestion inside the board's
      // advice of about 1 hour on Section A and 45 minutes on Section B.
      description:
        'Fiction and Imaginative Writing. One unseen extract from a 19th-century novel or story with four reading questions, then one piece of imaginative writing from a choice of two tasks.',
      rows: [
        {
          time: '0:00 - 0:10',
          label: 'Read the source text',
          detail: 'Read fully. Mark sections referenced by each question.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:10 - 0:12',
          label: 'Q1 - Identify (1 mark)',
          detail: 'Quick retrieval from the lines named. A word or short quotation.',
          marks: '1 mark',
          colour: 'reading',
        },
        {
          time: '0:12 - 0:16',
          label: 'Q2 - Retrieval (2 marks)',
          detail: 'Two different points from a short section, quoted or in your own words.',
          marks: '2 marks',
          colour: 'reading',
        },
        {
          time: '0:16 - 0:28',
          label: 'Q3 - Language and structure (6 marks)',
          detail:
            'A short section named in the question. Cover structure as well as language, each quotation linked to its effect.',
          marks: '6 marks',
          colour: 'analysis',
        },
        {
          time: '0:28 - 1:00',
          label: 'Q4 - Evaluation (15 marks)',
          detail:
            'How successfully does the writer create the effect the question names? A clear verdict, 3-4 evidenced paragraphs.',
          marks: '15 marks',
          colour: 'analysis',
        },
        {
          time: '1:00 - 1:05',
          label: 'Q5/6 - Plan imaginative writing',
          detail:
            'Choice of two tasks; one comes with two pictures for ideas. Plan opening, structure, ending.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:05 - 1:40',
          label: 'Q5/6 - Write imaginative piece (40 marks)',
          detail: '24 marks AO5 + 16 marks AO6. Single focused moment.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:40 - 1:45',
          label: 'Proofread',
          detail: 'Check spelling, punctuation, sentence variety.',
          marks: 'Check',
          colour: 'check',
        },
      ],
      tip: 'Q3 asks for language and structure together: an answer on language alone stays in Level 1. Plan your paragraphs to cover both so the marker sees you addressing both halves of the AO.',
    },
    {
      title: 'Edexcel English Language Paper 2',
      badge: '2h 5m',
      // 31 October 2026: rewritten to src/data/mark-scheme-guides/edexcel-lang-paper2.ts.
      // This said the texts were "one 19th-century, one 20th/21st-century", which is
      // AQA's Paper 2, and that the paper sets "two transactional writing tasks",
      // which is Eduqas's Component 2. Pearson prints two 20th- and 21st-century
      // texts and asks for one piece of writing, Question 8 or 9. The question rows
      // were also wrong in number and tariff (Q2 6 marks, Q4 15, Q5 4, the writing
      // as Q7/8). The minutes follow the guide: about 1 hour 20 on Section A, 45 on B.
      description:
        'Non-Fiction and Transactional Writing. Two unseen non-fiction texts from the 20th and 21st centuries, linked by a theme, with seven reading questions, then one piece of transactional writing from a choice of two tasks.',
      rows: [
        {
          time: '0:00 - 0:06',
          label: 'Read Text 1',
          detail: 'Read it fully. Mark the lines Questions 1 to 3 refer to.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:06 - 0:10',
          label: 'Q1 and Q2 - Retrieval from Text 1 (2 + 2 marks)',
          detail: 'Two points for each, from the lines named. No explanation needed.',
          marks: '4 marks',
          colour: 'reading',
        },
        {
          time: '0:10 - 0:28',
          label: 'Q3 - Language and structure, Text 1 (15 marks)',
          detail:
            'Language and structure across the whole text, with subject terminology. Both are needed to pass Level 2.',
          marks: '15 marks',
          colour: 'analysis',
        },
        {
          time: '0:28 - 0:34',
          label: 'Read Text 2',
          detail: 'Read it fully. Mark the lines Questions 4 and 5 refer to.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:34 - 0:36',
          label: 'Q4 and Q5 - Retrieval from Text 2 (1 + 1 mark)',
          detail: 'One point for each, from two different sets of lines.',
          marks: '2 marks',
          colour: 'reading',
        },
        {
          time: '0:36 - 0:54',
          label: 'Q6 - Evaluation, Text 2 (15 marks)',
          detail: 'How successfully does the writer achieve the aim the question names?',
          marks: '15 marks',
          colour: 'analysis',
        },
        {
          time: '0:54 - 1:02',
          label: 'Q7(a) - Synthesis (6 marks)',
          detail: 'Similarities between the two texts, with evidence from both in every point.',
          marks: '6 marks',
          colour: 'reading',
        },
        {
          time: '1:02 - 1:20',
          label: 'Q7(b) - Comparison (14 marks)',
          detail: "Compare the writers' perspectives and the methods that convey them.",
          marks: '14 marks',
          colour: 'comparison',
        },
        {
          time: '1:20 - 1:25',
          label: 'Q8/9 - Plan transactional writing',
          detail: 'Answer one of the two tasks. Identify form, audience, purpose.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:25 - 2:00',
          label: 'Q8/9 - Write transactional piece (40 marks)',
          detail: '24 AO5 + 16 AO6. Match the form conventions.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '2:00 - 2:05',
          label: 'Proofread',
          detail: 'Check spelling, paragraphing, form.',
          marks: 'Check',
          colour: 'check',
        },
      ],
      warning:
        'Edexcel Lang P2 is 20 minutes longer than AQA, and it has seven reading questions on two texts. Keep the four short retrievals to about 6 minutes in all so that Q3, Q6 and Q7(b), worth 44 marks between them, get their time.',
    },
    {
      title: 'Edexcel English Literature Paper 1',
      badge: '1h 45m',
      description:
        'Shakespeare and Post-1914 Literature. Section A: Shakespeare extract + linked essay. Section B: Post-1914 British play or novel essay (no extract).',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read Shakespeare extract and question (a)',
          detail: 'Read extract. Identify focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        // 9 October 2026: part (a) ended at 0:25 and part (b) took 30 minutes. Pearson's
        // 1ET0/01 question paper says about 55 minutes on Section A, divided equally between
        // (a) and (b); part (b) asks about the theme elsewhere in the play, with its context.
        {
          time: '0:05 - 0:27',
          label: 'Section A part (a) - Extract analysis (20 marks)',
          detail: 'Close analysis of the printed extract. Language, structure, form.',
          marks: '20 marks',
          colour: 'analysis',
        },
        {
          time: '0:27 - 0:30',
          label: 'Plan part (b)',
          detail: 'Wider play essay. Thesis + 3 points + quotations from memory.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '0:30 - 0:55',
          label: 'Section A part (b) - Wider play essay (20 marks)',
          detail: 'The theme from the extract elsewhere in the play, with its context (5 marks).',
          marks: '20 marks',
          colour: 'creative',
        },
        {
          time: '0:55 - 1:00',
          label: 'Plan Section B',
          detail: 'Post-1914 text essay. Thesis + 3 paragraph topics.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:00 - 1:40',
          label: 'Section B - Post-1914 essay (40 marks)',
          detail:
            'No extract. Choice of two questions. Quotations from memory. AO4 SPaG marked here.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:40 - 1:45',
          label: 'Proofread',
          detail: 'Skim both sections for errors.',
          marks: 'Check',
          colour: 'check',
        },
      ],
      tip: 'Edexcel splits Shakespeare into two linked questions (a) extract + (b) wider play. Treat them as separate essays with separate plans - do not blur them together.',
    },
    // Corrected 2 October 2026 against Pearson's specification (1ET0, Issue 2). This had a
    // Section C (Paper 2 has two sections; the unseen comparison is Section B Part 2), SPaG
    // on part (b) (none on Paper 2), and "two named anthology poems" with a warning that
    // Edexcel gives you both. The paper prints only the named poem; the second is the
    // student's choice from the same collection, from memory, as on AQA.
    {
      title: 'Edexcel English Literature Paper 2',
      badge: '2h 15m',
      description:
        '19th-century novel + poetry. Section A: 19th-century novel, (a) extract + (b) the novel as a whole. Section B: Part 1 anthology poetry comparison, Part 2 unseen poetry comparison.',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read 19th-century novel extract',
          detail: 'Read the extract and both parts of the question. Identify the focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        // 9 October 2026: Section A ran to 1:00, both poetry parts had 35 minutes and a final
        // check took the last 5. Pearson's 1ET0/02 question papers (May 2017, May 2025) say
        // about 55 minutes on Section A, divided equally between (a) and (b), 35 on Section B
        // Part 1 and 45 on Part 2, which is the whole paper; checking happens within each.
        {
          time: '0:05 - 0:27',
          label: 'Section A part (a) - Extract (20 marks)',
          detail: 'Close analysis of the printed extract: language, form and structure.',
          marks: '20 marks',
          colour: 'analysis',
        },
        {
          time: '0:27 - 0:55',
          label: 'Section A part (b) - The novel as a whole (20 marks)',
          detail: 'An argument about the theme or character across the novel, from memory.',
          marks: '20 marks',
          colour: 'creative',
        },
        {
          time: '0:55 - 1:30',
          label: 'Section B Part 1 - Anthology poetry comparison (20 marks)',
          detail:
            'Compare the named poem, printed on the paper, with one of your choice from the same collection. Compare methods within paragraphs.',
          marks: '20 marks',
          colour: 'comparison',
        },
        {
          time: '1:30 - 2:15',
          label: 'Section B Part 2 - Unseen poetry comparison (20 marks)',
          detail:
            'Compare two unseen poems. 10 mins reading and planning, 32 mins writing, 3 mins checking.',
          marks: '20 marks',
          colour: 'comparison',
        },
      ],
      warning:
        'Edexcel prints only the named anthology poem. The second poem is your choice from the same collection and comes from memory, so revise every poem in your collection, not just your favourites.',
    },
  ],
  // 31 October 2026: the Language rows were rewritten to the 1EN0 guides
  // (src/data/mark-scheme-guides/edexcel-lang-paper1.ts, edexcel-lang-paper2.ts).
  // Paper 1 summed to 80 marks and Paper 2 had five reading questions and the
  // writing as Q7/8; the papers are 64 and 96 marks, with seven questions on
  // Paper 2 and the writing as Q8 or Q9.
  questionTypes: [
    {
      paper: 'Lang P1',
      question: 'Q1 - Identify',
      marks: '1',
      description: 'One detail from the lines named.',
      approach: 'A word or short quotation.',
    },
    {
      paper: 'Lang P1',
      question: 'Q2 - Retrieval',
      marks: '2',
      description: 'Two things from a short section.',
      approach: 'Two different points, quoted or in your own words.',
    },
    {
      paper: 'Lang P1',
      question: 'Q3 - Language and structure',
      marks: '6',
      description: 'Language and structure in a short section.',
      approach: 'Both language and structure; language alone stays in Level 1.',
    },
    {
      paper: 'Lang P1',
      question: 'Q4 - Evaluation',
      marks: '15',
      description: 'How successfully the writer creates an effect the question names.',
      approach: 'Clear verdict. 3-4 evaluative points with evidence.',
    },
    {
      paper: 'Lang P1',
      question: 'Q5/6 - Imaginative writing',
      marks: '40',
      description: 'One task from a choice of two; one comes with two pictures.',
      approach: 'Single focused moment. Sensory detail. Varied sentences.',
    },
    {
      paper: 'Lang P2',
      question: 'Q1 and Q2 - Retrieval, Text 1',
      marks: '2 + 2',
      description: 'Two things from named lines, twice.',
      approach: 'Short answers. No explanation needed.',
    },
    {
      paper: 'Lang P2',
      question: 'Q3 - Language and structure, Text 1',
      marks: '15',
      description: 'How the writer holds the reader’s interest.',
      approach: 'Both language and structure, across the whole text.',
    },
    {
      paper: 'Lang P2',
      question: 'Q4 and Q5 - Retrieval, Text 2',
      marks: '1 + 1',
      description: 'One thing from each of two sets of lines.',
      approach: 'A few words each.',
    },
    {
      paper: 'Lang P2',
      question: 'Q6 - Evaluation, Text 2',
      marks: '15',
      description: 'How successfully the writer achieves an aim the question names.',
      approach: 'Clear verdict, tested against Text 2 alone.',
    },
    {
      paper: 'Lang P2',
      question: 'Q7(a) - Synthesis',
      marks: '6',
      description: 'Similarities between the two texts.',
      approach: 'Evidence from both texts in every point.',
    },
    {
      paper: 'Lang P2',
      question: 'Q7(b) - Comparison',
      marks: '14',
      description: "Compare writers' ideas and perspectives.",
      approach: 'Both texts in every paragraph. Methods focus.',
    },
    {
      paper: 'Lang P2',
      question: 'Q8/9 - Transactional writing',
      marks: '40',
      description: 'One task from a choice of two, each with a set form, audience and purpose.',
      approach: 'Match form. Persuasive techniques. Counter-arguments.',
    },
    {
      paper: 'Lit P1',
      question: 'Shakespeare (a) extract',
      marks: '20',
      description: 'Close analysis of extract.',
      approach: 'Extract only. Language, structure, form.',
    },
    {
      paper: 'Lit P1',
      question: 'Shakespeare (b) wider play',
      marks: '20',
      description: 'Same focus across the wider play.',
      approach: 'Quotations from memory. Different scenes/acts.',
    },
    {
      paper: 'Lit P1',
      question: 'Post-1914 British text',
      marks: '40',
      description: 'Choice of two essay questions.',
      approach: 'No extract. Thesis + 4 paragraphs from memory. SPaG marked.',
    },
    {
      paper: 'Lit P2',
      question: '19th-century (a) extract',
      marks: '20',
      description: 'Close analysis of extract.',
      approach: 'Extract only.',
    },
    {
      paper: 'Lit P2',
      question: '19th-century (b) the novel as a whole',
      marks: '20',
      description: 'The focus explored across the whole novel.',
      approach: 'Quotations from memory. Marked for your argument; no SPaG on Paper 2.',
    },
    {
      paper: 'Lit P2',
      question: 'Anthology poetry comparison',
      marks: '20',
      description: 'Compare the named poem with one of your choice from the same collection.',
      approach: 'Both poems in every paragraph. Methods, with context.',
    },
    {
      paper: 'Lit P2',
      question: 'Unseen poetry comparison',
      marks: '20',
      description: 'Compare two unseen poems.',
      approach: 'Five-minute read. Methods + effects.',
    },
  ],
  essay: {
    intro:
      'Edexcel literature essays heavily emphasise comparison. The board splits Shakespeare and 19th-century novel into two linked questions: extract analysis (a) and wider text essay (b). The poetry sections require comparison from the start.',
    aoFocus: [
      'AO1 - informed personal response with embedded textual references',
      'AO2 - language, form and structure analysis with subject terminology',
      'AO3 - context shaping interpretation',
      'AO4 - accurate written communication (the Paper 1 post-1914 essay only)',
    ],
    structureTips: [
      'Treat Shakespeare (a) and (b) as separate essays - do not write one continuous response.',
      'Anthology poetry comparison expects comparative connectives in every paragraph.',
      'Unseen poetry comparison: read both poems before choosing your line of argument.',
      'Section B (Post-1914) is 40 marks - your longest essay. Plan four developed paragraphs.',
      'Use AO3 to inform your interpretation, not as a stand-alone biography paragraph.',
    ],
    examinerChecklist: [
      'Comparative connectives in poetry questions',
      'Methods (not just content) when comparing writers',
      'Both halves of (a) and (b) Shakespeare answered fully',
      'Subject terminology used accurately',
      'Context that supports the argument',
    ],
    headlineEssayLabel: 'Lit P1 Section B - Post-1914 essay (40 marks)',
    headlineEssayGuidance:
      'No extract is given, so quotations must come from memory. Plan a thesis-driven argument with four developed body paragraphs across the whole text. AO4 SPaG is marked here, so leave 5 minutes to proofread.',
  },
}

export const OCR_CONTENT: BoardExamTechniqueContent = {
  boardName: 'OCR',
  shortName: 'OCR',
  totalDuration: '8 hours total across 4 papers',
  structureSummary:
    'OCR GCSE English assesses across four papers: Literature Paper 1 (Exploring modern and literary heritage texts), Literature Paper 2 (Exploring poetry and Shakespeare), Language Paper 1 (Communicating information and ideas) and Language Paper 2 (Exploring effects and impact).',
  papers: [
    {
      title: 'OCR English Language Paper 1',
      badge: '2h',
      // 31 October 2026: both Language papers rewritten to the J351 guides in
      // src/data/mark-scheme-guides/ocr-lang-component01.ts and -component02.ts.
      // The rows had Q1 at 8 marks, Q2 as a 12-mark language question, Q3 as a
      // 12-mark comparison and the writing as "Q4", planned "(16 + 24 marks)". Each
      // paper is Q1 4, Q2 6, Q3 12 and Q4 18 (evaluation 12 + comparison 6), then
      // one writing task, Question 5 or 6, for 40. Paper 2's texts were "two literary
      // fiction extracts"; they are two literary prose texts, at least one fiction.
      // The minutes follow the guides' suggestion inside OCR's advice of about an
      // hour on each section.
      description:
        'Communicating information and ideas. Two unseen non-fiction texts (one 19th-century, one from the 20th or 21st century) with four reading questions, then one piece of non-fiction writing from a choice of two tasks.',
      rows: [
        {
          time: '0:00 - 0:12',
          label: 'Read both source texts',
          detail: 'Read both fully. Note purpose and key ideas.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:12 - 0:17',
          label: 'Q1 - Information retrieval (4 marks)',
          detail:
            'Short parts on the lines named in Text 1: a word, phrase or quotation, or a point in your own words.',
          marks: '4 marks',
          colour: 'reading',
        },
        {
          time: '0:17 - 0:25',
          label: 'Q2 - Bringing the texts together (6 marks)',
          detail: 'A link between the two texts, with evidence from both. No language analysis.',
          marks: '6 marks',
          colour: 'comparison',
        },
        {
          time: '0:25 - 0:40',
          label: 'Q3 - Language and structure (12 marks)',
          detail:
            'How one writer uses language and structure to create the effect named. Cover both, with subject terminology.',
          marks: '12 marks',
          colour: 'analysis',
        },
        {
          time: '0:40 - 1:00',
          label: 'Q4 - Evaluation and comparison (18 marks)',
          detail:
            "How far you agree with a statement about both texts (12 marks), comparing the writers' ideas and methods (6 marks).",
          marks: '18 marks',
          colour: 'comparison',
        },
        {
          time: '1:00 - 1:08',
          label: 'Q5 or Q6 - Choose and plan',
          detail: 'Read both tasks, choose one, then plan your viewpoint, paragraphs and ending.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:08 - 1:55',
          label: 'Q5 or Q6 - Write the non-fiction piece (40 marks)',
          detail:
            '24 marks content/organisation + 16 marks technical accuracy. Match form, audience, purpose.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:55 - 2:00',
          label: 'Proofread',
          detail: 'Check spelling, sentence variety, form conventions.',
          marks: 'Check',
          colour: 'check',
        },
      ],
    },
    {
      title: 'OCR English Language Paper 2',
      badge: '2h',
      description:
        'Exploring effects and impact. Two unseen literary prose texts from the 20th or 21st century, at least one of them fiction, with four reading questions, then one piece of creative writing from a choice of two tasks.',
      rows: [
        {
          time: '0:00 - 0:12',
          label: 'Read both texts',
          detail: 'Read both fully. Note tone, voice, devices.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:12 - 0:17',
          label: 'Q1 - Information / inference (4 marks)',
          detail: 'Short parts on the lines named in Text 1.',
          marks: '4 marks',
          colour: 'reading',
        },
        {
          time: '0:17 - 0:25',
          label: 'Q2 - Language and structure, short (6 marks)',
          detail: 'How the writer creates the effect named in a short section of Text 1.',
          marks: '6 marks',
          colour: 'analysis',
        },
        {
          time: '0:25 - 0:40',
          label: 'Q3 - Language and structure (12 marks)',
          detail:
            'How the writer of Text 2 presents what the question names. Cover both, with subject terminology.',
          marks: '12 marks',
          colour: 'analysis',
        },
        {
          time: '0:40 - 1:00',
          label: 'Q4 - Evaluation and comparison (18 marks)',
          detail:
            'How far you agree with a statement about both texts (12 marks), comparing how the writers present their ideas (6 marks).',
          marks: '18 marks',
          colour: 'comparison',
        },
        {
          time: '1:00 - 1:08',
          label: 'Q5 or Q6 - Choose and plan',
          detail: 'Read both tasks, choose one, then plan opening, development, ending.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:08 - 1:55',
          label: 'Q5 or Q6 - Write creative piece (40 marks)',
          detail: '24 marks content/organisation + 16 marks technical accuracy.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:55 - 2:00',
          label: 'Proofread',
          detail: 'Check homophones, sentence variety.',
          marks: 'Check',
          colour: 'check',
        },
      ],
      tip: "OCR's 2-hour Language papers give you more time per question than AQA - use the extra minutes on the Q5 or Q6 writing rather than padding the reading answers.",
    },
    {
      title: 'OCR English Literature Paper 1',
      badge: '2h',
      description:
        'Exploring modern and literary heritage texts. Section A: modern prose or drama. Section B: 19th-century prose.',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read modern text question',
          detail: 'Choose one of two questions. Underline focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:05 - 0:10',
          label: 'Plan modern text essay',
          detail: 'Thesis + 3-4 paragraph topics + quotations.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '0:10 - 0:55',
          label: 'Section A - Modern text essay (40 marks)',
          detail: 'Choice of two questions. Quotations from memory. AO4 SPaG marked.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '0:55 - 1:00',
          label: 'Read 19th-century extract and question',
          detail: 'Read extract. Identify focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '1:00 - 1:05',
          label: 'Plan 19th-century essay',
          detail: 'Thesis + extract + wider novel paragraphs.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:05 - 1:55',
          label: 'Section B - 19th-century essay (40 marks)',
          detail: 'Extract + wider novel. AO4 SPaG marked.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:55 - 2:00',
          label: 'Proofread',
          detail: 'Both essays. SPaG focus.',
          marks: 'Check',
          colour: 'check',
        },
      ],
    },
    {
      title: 'OCR English Literature Paper 2',
      badge: '2h',
      description:
        'Exploring poetry and Shakespeare. Section A: anthology poetry comparison. Section B: unseen poetry. Section C: Shakespeare.',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read anthology poems and question',
          detail: 'Identify the named poem and choose your comparison poem.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:05 - 0:10',
          label: 'Plan anthology comparison',
          detail: 'Compare methods. Pre-prepared pairings help here.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '0:10 - 0:40',
          label: 'Section A - Anthology poetry comparison (20 marks)',
          detail: 'Compare two anthology poems on a given focus.',
          marks: '20 marks',
          colour: 'comparison',
        },
        {
          time: '0:40 - 0:50',
          label: 'Read unseen poem(s)',
          detail: 'Read 2-3 times. Annotate.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:50 - 1:20',
          label: 'Section B - Unseen poetry (20 marks)',
          detail: 'Analyse how the poet creates effects. Language, structure, form.',
          marks: '20 marks',
          colour: 'analysis',
        },
        {
          time: '1:20 - 1:25',
          label: 'Read Shakespeare extract and question',
          detail: 'Identify focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '1:25 - 2:00',
          label: 'Section C - Shakespeare (40 marks)',
          detail: 'Extract + wider play. Quotations from memory. AO4 SPaG marked.',
          marks: '40 marks',
          colour: 'creative',
        },
      ],
      warning:
        'OCR Lit P2 has THREE sections to balance. Stick rigidly to your timings - running over on poetry will eat into your 40-mark Shakespeare essay.',
    },
  ],
  questionTypes: [
    {
      paper: 'Lang P1',
      question: 'Q1 - Information retrieval',
      marks: '4',
      description: 'Short questions on a set of lines from Text 1, in two or three parts.',
      approach: 'Use only the lines named. Short, exact answers.',
    },
    {
      paper: 'Lang P1',
      question: 'Q2 - Bringing two texts together',
      marks: '6',
      description: 'A link between the two texts that the question names, with evidence from both.',
      approach: 'Three linked points, evidence from each text. No language analysis.',
    },
    {
      paper: 'Lang P1',
      question: 'Q3 - Language and structure',
      marks: '12',
      description: 'How does one writer use language and structure to create an effect?',
      approach: '3-4 detailed points with subject terminology. Cover structure as well.',
    },
    {
      paper: 'Lang P1',
      question: 'Q4 - Evaluation and comparison',
      marks: '18',
      description:
        'How far do you agree with a statement about both texts? Evaluation 12 marks, comparison 6.',
      approach: 'Clear verdict. Both texts in every paragraph. Comparative connectives.',
    },
    {
      paper: 'Lang P1',
      question: 'Q5 or Q6 - Non-fiction writing',
      marks: '40',
      description: 'One non-fiction piece (article, letter, speech) from a choice of two tasks.',
      approach: 'Match form. Persuasive techniques. Plan for 5 minutes.',
    },
    {
      paper: 'Lang P2',
      question: 'Q1 - Information / inference',
      marks: '4',
      description: 'Short questions on a set of lines from Text 1.',
      approach: 'Direct answers, one per line.',
    },
    {
      paper: 'Lang P2',
      question: 'Q2 - Language and structure (short)',
      marks: '6',
      description: 'How does the writer create an effect in a short section of Text 1?',
      approach: 'Two or three quotations, each explained. Something on structure.',
    },
    {
      paper: 'Lang P2',
      question: 'Q3 - Language and structure',
      marks: '12',
      description: 'How does the writer of Text 2 present what the question names?',
      approach: 'Detailed methods analysis with subject terminology, language and structure.',
    },
    {
      paper: 'Lang P2',
      question: 'Q4 - Evaluation and comparison',
      marks: '18',
      description:
        'How far do you agree with a statement about both texts? Evaluation 12 marks, comparison 6.',
      approach: 'Verdict first. Judge and compare the texts in every paragraph.',
    },
    {
      paper: 'Lang P2',
      question: 'Q5 or Q6 - Creative writing',
      marks: '40',
      description:
        'One creative piece from a choice of two, such as a story from a title or personal writing about an experience.',
      approach: 'Single focused moment. Sensory detail.',
    },
    {
      paper: 'Lit P1',
      question: 'Modern text essay',
      marks: '40',
      description: 'Choice of two questions on modern prose or drama.',
      approach: 'Thesis + 4 paragraphs from memory. SPaG marked.',
    },
    {
      paper: 'Lit P1',
      question: '19th-century prose essay',
      marks: '40',
      description: 'Extract + wider novel essay.',
      approach: 'Anchor in extract, then move to wider text. SPaG marked.',
    },
    {
      paper: 'Lit P2',
      question: 'Anthology poetry comparison',
      marks: '20',
      description: 'Compare two anthology poems on a given theme.',
      approach: 'Pre-prepared pairings. Methods in every paragraph.',
    },
    {
      paper: 'Lit P2',
      question: 'Unseen poetry',
      marks: '20',
      description: 'Analyse a single unseen poem.',
      approach: 'Language, structure, form. No context required.',
    },
    {
      paper: 'Lit P2',
      question: 'Shakespeare',
      marks: '40',
      description: 'Extract + wider play essay.',
      approach: 'Anchor in extract, move outward. SPaG marked.',
    },
  ],
  essay: {
    intro:
      'OCR literature essays are weighted heavily towards two long 40-mark essays per paper. You need stamina, structure and a clear thesis-led argument supported by quotations from memory.',
    aoFocus: [
      'AO1 - sustained, perceptive personal response',
      'AO2 - analysis of language, form and structure',
      'AO3 - relationships between texts and contexts',
      'AO4 - accurate written communication on Lit essays',
    ],
    structureTips: [
      'Plan four developed paragraphs for the 40-mark essays - quality not quantity.',
      'Open with a thesis and signpost your argument across the whole text.',
      'On extract-based essays, anchor in the extract first, then move outwards.',
      'Embed AO3 context inside analysis paragraphs.',
      'Leave 3-5 minutes proofreading on Lit essays - AO4 marks are gettable.',
    ],
    examinerChecklist: [
      'Sustained thesis across the whole essay',
      'Methods analysed, not spotted',
      'Wider text knowledge demonstrated',
      'Subject terminology accurate and embedded',
      'AO4 (SPaG) accuracy on Lit essays',
    ],
    headlineEssayLabel: 'Lit P2 Section C - Shakespeare (40 marks)',
    headlineEssayGuidance:
      'OCR Shakespeare is 40 marks split across an extract + wider play. Plan a thesis, open in the extract, then move to two or three wider-play paragraphs that develop your argument with quotations from memory.',
  },
}

export const EDUQAS_CONTENT: BoardExamTechniqueContent = {
  boardName: 'WJEC Eduqas',
  shortName: 'Eduqas',
  // 31 October 2026: this said 7 hours. The four components below are 1h 45m, 2h,
  // 2h and 2h 30m, which is 8 hours 15 minutes.
  totalDuration: '8 hours 15 minutes total across 4 papers (2 Lit + 2 Lang)',
  structureSummary:
    'Eduqas GCSE English uses a Component 1 / Component 2 structure. Literature: Component 1 (Shakespeare + Poetry from 1789), Component 2 (Post-1914 prose/drama + 19th-century prose + Unseen poetry). Language: Component 1 (Fiction reading + creative writing), Component 2 (Non-fiction reading + transactional writing).',
  papers: [
    {
      title: 'Eduqas English Language Component 1',
      badge: '1h 45m',
      // 31 October 2026: both Language components rewritten to the C700 guides in
      // src/data/mark-scheme-guides/eduqas-lang-comp1.ts and eduqas-lang-comp2.ts.
      // Component 1 was "20th- and 21st-century" (it is 20th-century), its Q03 was
      // given structure (that is Q04's) and the tip said five reading questions is
      // more than any other board (Component 2 sets six). Component 2's reading rows
      // were four 10-mark questions; it sets 1.1 3, 1.2 10, 1.3 3, 1.4 10, 1.5 4 and
      // 1.6 10, and its warning said the two writing tasks "must be different forms",
      // where the paper sets each one's form. The numbering is the live papers'
      // (A1 to A5 was the 2014 sample's); the section times are the board's advice.
      description:
        '20th-century literature reading and creative prose writing. One 20th-century literary prose extract with five reading questions, then one piece of creative prose writing from a choice of four titles.',
      rows: [
        {
          time: '0:00 - 0:10',
          label: 'Read the source text',
          detail: 'Read fully. Mark sections referenced by each question.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:10 - 0:15',
          label: 'Q01 - Retrieval (5 marks)',
          detail: 'List five things from the opening lines named.',
          marks: '5 marks',
          colour: 'reading',
        },
        {
          time: '0:15 - 0:21',
          label: 'Q02 - Language (5 marks)',
          detail:
            'What the writer shows about a character or situation, and how the language does it.',
          marks: '5 marks',
          colour: 'reading',
        },
        {
          time: '0:21 - 0:34',
          label: 'Q03 - Language analysis (10 marks)',
          detail: 'Thoughts, feelings or impressions in a longer section, through the language.',
          marks: '10 marks',
          colour: 'analysis',
        },
        {
          time: '0:34 - 0:47',
          label: 'Q04 - Language and structure (10 marks)',
          detail:
            'How the writer creates an effect, such as tension, through the words and the order of events.',
          marks: '10 marks',
          colour: 'analysis',
        },
        {
          time: '0:47 - 1:00',
          label: 'Q05 - Evaluation (10 marks)',
          detail: 'How far do you agree with a view? Use the final lines and the whole passage.',
          marks: '10 marks',
          colour: 'analysis',
        },
        {
          time: '1:00 - 1:10',
          label: 'Q11 - Plan creative writing',
          detail:
            'Choice of four titles. Plan where the story starts, its turning point and its ending.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:10 - 1:42',
          label: 'Q11 - Write creative piece (40 marks)',
          detail: '24 marks AO5 + 16 marks AO6. A story or account of about 450-600 words.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:42 - 1:45',
          label: 'Proofread',
          detail: 'Check spelling, punctuation, sentence variety.',
          marks: 'Check',
          colour: 'check',
        },
      ],
      tip: 'Eduqas Lang Component 1 has FIVE reading questions in about 50 minutes. Pace yourself: about 5 minutes on Q01, 6 on Q02 and 13 on each 10-mark question.',
    },
    {
      title: 'Eduqas English Language Component 2',
      badge: '2h',
      description:
        '19th- and 21st-century non-fiction reading and transactional/persuasive writing. Two non-fiction texts, one from each century, with six reading questions and two compulsory writing tasks.',
      rows: [
        {
          time: '0:00 - 0:10',
          label: 'Read both source texts',
          detail: 'Read both fully. Note tone, audience, purpose.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:10 - 0:14',
          label: 'Q1.1 - Retrieval, 21st-century text (3 marks)',
          detail: 'Short answers. A phrase is usually enough.',
          marks: '3 marks',
          colour: 'reading',
        },
        {
          time: '0:14 - 0:26',
          label: 'Q1.2 - How the writer achieves a purpose (10 marks)',
          detail: 'The 21st-century text: what is said, language, tone and structure.',
          marks: '10 marks',
          colour: 'analysis',
        },
        {
          time: '0:26 - 0:30',
          label: 'Q1.3 - Understanding, 19th-century text (3 marks)',
          detail: 'Short answers on what the older text says or means.',
          marks: '3 marks',
          colour: 'reading',
        },
        {
          time: '0:30 - 0:42',
          label: 'Q1.4 - Evaluation, 19th-century text (10 marks)',
          detail: 'Your judgement on the text, often on a statement about it. Use all of it.',
          marks: '10 marks',
          colour: 'analysis',
        },
        {
          time: '0:42 - 0:47',
          label: 'Q1.5 - Bringing details together (4 marks)',
          detail: 'Details from both texts on one shared topic, briefly.',
          marks: '4 marks',
          colour: 'reading',
        },
        {
          time: '0:47 - 1:00',
          label: 'Q1.6 - Comparison (10 marks)',
          detail: 'Compare what the writers say and how they say it, across both texts.',
          marks: '10 marks',
          colour: 'comparison',
        },
        {
          time: '1:00 - 1:05',
          label: 'Q2.1 - Plan task 1 writing',
          detail: 'Identify the form, audience and purpose the task sets.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:05 - 1:30',
          label: 'Q2.1 - Writing task 1 (20 marks)',
          detail: 'About 300-400 words. 12 marks AO5 + 8 marks AO6.',
          marks: '20 marks',
          colour: 'creative',
        },
        {
          time: '1:30 - 1:35',
          label: 'Q2.2 - Plan task 2 writing',
          detail: 'Its form and reader may differ from the first task.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:35 - 2:00',
          label: 'Q2.2 - Writing task 2 (20 marks)',
          detail: 'About 300-400 words, then check both pieces.',
          marks: '20 marks',
          colour: 'creative',
        },
      ],
      warning:
        'Eduqas Lang Component 2 has TWO compulsory writing tasks (20 marks each), not one big one. The paper sets the form and reader for each: give each one its full 30 minutes.',
    },
    {
      title: 'Eduqas English Literature Component 1',
      badge: '2h',
      description:
        'Shakespeare and Poetry from 1789. Section A: Shakespeare extract + wider play essay. Section B: Poetry from 1789 (anthology comparison + named poem question).',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read Shakespeare extract and question',
          detail: 'Identify focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:05 - 0:55',
          label: 'Section A - Shakespeare (40 marks)',
          detail: 'Extract analysis + wider play essay. AO4 SPaG marked.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '0:55 - 1:00',
          label: 'Plan anthology comparison',
          detail: 'Choose comparison poem.',
          marks: 'Plan',
          colour: 'plan',
        },
        {
          time: '1:00 - 1:25',
          label: 'Section B Part 1 - Anthology comparison (20 marks)',
          detail: 'Compare a named anthology poem with one of your choice.',
          marks: '20 marks',
          colour: 'comparison',
        },
        {
          time: '1:25 - 2:00',
          label: 'Section B Part 2 - Named anthology poem (20 marks)',
          detail: 'Detailed analysis of a single anthology poem.',
          marks: '20 marks',
          colour: 'analysis',
        },
      ],
      tip: 'Eduqas Lit C1 has THREE distinct tasks in 2 hours. The Shakespeare 40-marker is your biggest - protect 50 minutes for it.',
    },
    {
      title: 'Eduqas English Literature Component 2',
      badge: '2h 30m',
      description: 'Post-1914 prose/drama + 19th-century prose + Unseen poetry. Three sections.',
      rows: [
        {
          time: '0:00 - 0:05',
          label: 'Read post-1914 question',
          detail: 'Choose one of two questions. Underline focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:05 - 0:50',
          label: 'Section A - Post-1914 prose/drama (40 marks)',
          detail: 'No extract. Quotations from memory. AO4 SPaG marked.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '0:50 - 0:55',
          label: 'Read 19th-century extract',
          detail: 'Identify focus.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '0:55 - 1:40',
          label: 'Section B - 19th-century prose (40 marks)',
          detail: 'Extract + wider novel essay. AO4 SPaG marked.',
          marks: '40 marks',
          colour: 'creative',
        },
        {
          time: '1:40 - 1:50',
          label: 'Read unseen poems',
          detail: 'Two unseen poems. Annotate.',
          marks: 'Prep',
          colour: 'prep',
        },
        {
          time: '1:50 - 2:10',
          label: 'Section C Part 1 - Unseen poem (15 marks)',
          detail: 'Single unseen poem analysis.',
          marks: '15 marks',
          colour: 'analysis',
        },
        {
          time: '2:10 - 2:30',
          label: 'Section C Part 2 - Unseen comparison (25 marks)',
          detail: 'Compare both unseen poems.',
          marks: '25 marks',
          colour: 'comparison',
        },
      ],
      warning:
        'Eduqas Lit C2 is the longest paper at 2h 30m. Three sections, two 40-mark essays and unseen poetry. Stamina is essential - practise full papers under timed conditions.',
    },
  ],
  questionTypes: [
    {
      paper: 'Lang C1',
      question: 'Q01 - Retrieval',
      marks: '5',
      description: 'List five things from the opening lines named.',
      approach: 'Quick, focused retrieval. 5 minutes max.',
    },
    {
      paper: 'Lang C1',
      question: 'Q02 - Language',
      marks: '5',
      description: 'What does the writer show about a character or situation, and how?',
      approach: 'Three or four impressions, each with a short quotation.',
    },
    {
      paper: 'Lang C1',
      question: 'Q03 - Language analysis',
      marks: '10',
      description: 'Thoughts, feelings or impressions in a longer section, through the language.',
      approach: '3-4 points on word choices, tracking the whole section.',
    },
    {
      paper: 'Lang C1',
      question: 'Q04 - Language and structure',
      marks: '10',
      description: 'How does the writer create an effect, such as tension, in a later section?',
      approach: 'Combine the words with the order of events. Trace it across the section.',
    },
    {
      paper: 'Lang C1',
      question: 'Q05 - Evaluation',
      marks: '10',
      description: 'How far do you agree with a view about a character or the story?',
      approach: 'Clear position. 3 evaluative points from across the passage.',
    },
    {
      paper: 'Lang C1',
      question: 'Q11 - Creative writing',
      marks: '40',
      description:
        'Choice of four titles: a story, or an account of an experience, real or imagined.',
      approach: 'Single focused moment. Sensory detail. A shape that ends well.',
    },
    {
      paper: 'Lang C2',
      question: 'Q1.1 - Retrieval',
      marks: '3',
      description: 'Short questions on the 21st-century text.',
      approach: 'Direct answers, a phrase each.',
    },
    {
      paper: 'Lang C2',
      question: 'Q1.2 - How the writer achieves a purpose',
      marks: '10',
      description: 'What is said, language, tone and structure in the 21st-century text.',
      approach: 'Quotation + method + effect, through the whole text.',
    },
    {
      paper: 'Lang C2',
      question: 'Q1.3 - Understanding',
      marks: '3',
      description: 'Short questions on what the 19th-century text says or means.',
      approach: 'Answers in plain words, from the right text.',
    },
    {
      paper: 'Lang C2',
      question: 'Q1.4 - Evaluation',
      marks: '10',
      description: 'Your judgement on the 19th-century text, often on a statement about it.',
      approach: 'Decide first, then track the text from beginning to end.',
    },
    {
      paper: 'Lang C2',
      question: 'Q1.5 - Bringing details together',
      marks: '4',
      description: 'What both texts tell you about one shared topic.',
      approach: 'One or two sentences on each text, naming which is which.',
    },
    {
      paper: 'Lang C2',
      question: 'Q1.6 - Comparison',
      marks: '10',
      description: 'Compare what the writers say and how they say it.',
      approach: 'Both texts in every paragraph.',
    },
    {
      paper: 'Lang C2',
      question: 'Q2.1 - Writing task 1',
      marks: '20',
      description: 'Compulsory transactional or persuasive task, form and reader set by the paper.',
      approach: 'Match form. Persuasive techniques.',
    },
    {
      paper: 'Lang C2',
      question: 'Q2.2 - Writing task 2',
      marks: '20',
      description: 'Second compulsory task, with its own form and reader.',
      approach: 'Match its conventions and register, which may differ from Q2.1.',
    },
    {
      paper: 'Lit C1',
      question: 'Shakespeare',
      marks: '40',
      description: 'Extract + wider play essay.',
      approach: 'Anchor in extract. AO4 SPaG marked.',
    },
    {
      paper: 'Lit C1',
      question: 'Anthology poetry comparison',
      marks: '20',
      description: 'Compare a named poem with one of your choice.',
      approach: 'Methods in every paragraph.',
    },
    {
      paper: 'Lit C1',
      question: 'Named anthology poem',
      marks: '20',
      description: 'Detailed analysis of a single named poem.',
      approach: 'Language, form, structure, context.',
    },
    {
      paper: 'Lit C2',
      question: 'Post-1914 prose/drama',
      marks: '40',
      description: 'Choice of two questions. No extract.',
      approach: 'Quotations from memory. SPaG marked.',
    },
    {
      paper: 'Lit C2',
      question: '19th-century prose',
      marks: '40',
      description: 'Extract + wider novel essay.',
      approach: 'Anchor in extract. SPaG marked.',
    },
    {
      paper: 'Lit C2',
      question: 'Unseen poem',
      marks: '15',
      description: 'Single unseen poem analysis.',
      approach: 'Language, structure, form, voice.',
    },
    {
      paper: 'Lit C2',
      question: 'Unseen poetry comparison',
      marks: '25',
      description: 'Compare both unseen poems.',
      approach: 'Methods in every paragraph.',
    },
  ],
  essay: {
    intro:
      'Eduqas literature essays are notable for their three big 40-mark essays (Shakespeare, Post-1914, 19th-century). The poetry sections combine an anthology comparison with a single-poem question, and unseen poetry has both a single-poem and a comparison question.',
    aoFocus: [
      'AO1 - informed personal response with embedded quotations',
      'AO2 - language, form and structure analysis with subject terminology',
      'AO3 - context and authorial intent',
      'AO4 - accurate written communication on the three 40-mark essays',
    ],
    structureTips: [
      'Plan four developed paragraphs for each 40-mark essay.',
      'Anthology comparison (20 marks) needs a tight comparative structure.',
      'Single-poem questions reward close reading and form analysis.',
      'Pace yourself across Lit C2 - three sections with stamina demands.',
      'Use AO3 to inform interpretation, never as a stand-alone biography.',
    ],
    examinerChecklist: [
      'Sustained, conceptualised argument',
      'Methods analysed precisely',
      'Quotations embedded fluently',
      'Context that informs reading',
      'AO4 accuracy on the 40-mark essays',
    ],
    headlineEssayLabel: 'Lit C1 Shakespeare (40 marks)',
    headlineEssayGuidance:
      'Eduqas Shakespeare gives you an extract + wider play question worth 40 marks. Anchor your first paragraph in the extract, then build outward with two or three wider-play paragraphs from memory. AO4 SPaG is marked here, so leave 5 minutes proofreading.',
  },
}

/* ── Lookup ────────────────────────────────────────────────────────── */

export function getBoardExamTechniqueContent(board: GcseBoard): BoardExamTechniqueContent {
  switch (board) {
    case 'aqa':
      return AQA_CONTENT
    case 'edexcel':
      return EDEXCEL_CONTENT
    case 'ocr':
      return OCR_CONTENT
    case 'eduqas':
      return EDUQAS_CONTENT
  }
}

/**
 * Returns the IGCSE redirect path for a given IGCSE board, or null if the
 * board is not IGCSE.
 */
export function getIgcseRedirectPath(board: ExamBoard | null): string | null {
  switch (board) {
    case 'edexcel-igcse':
      return '/igcse/edexcel/exam-technique'
    case 'cambridge-0500':
      return '/igcse/cambridge/0500'
    case 'cambridge-0990':
      return '/igcse/cambridge/0990'
    default:
      return null
  }
}

/* ── i18n translation hook ─────────────────────────────────────────── */

/**
 * Translate a single field using the `revision.exam_technique.<board>.<field>`
 * namespace, with graceful fallback to the original EN string. The dictionary
 * `lookup()` returns `[[key]]` for missing entries - we treat that as a miss
 * and return the EN fallback instead, so EN consumers see no regression.
 */
function translateField(
  t: (key: string) => string,
  board: GcseBoard,
  field: string,
  fallback: string,
): string {
  const key = `revision.exam_technique.${board}.${field}`
  const resolved = t(key)
  return resolved.startsWith('[[') && resolved.endsWith(']]') ? fallback : resolved
}

function translatePaperRow(
  t: (key: string) => string,
  board: GcseBoard,
  paperIndex: number,
  rowIndex: number,
  row: PaperTimingRow,
): PaperTimingRow {
  const base = `papers.${paperIndex}.rows.${rowIndex}`
  return {
    ...row,
    label: translateField(t, board, `${base}.label`, row.label),
    detail: translateField(t, board, `${base}.detail`, row.detail),
    marks: row.marks != null ? translateField(t, board, `${base}.marks`, row.marks) : row.marks,
  }
}

function translatePaper(
  t: (key: string) => string,
  board: GcseBoard,
  index: number,
  paper: PaperBreakdown,
): PaperBreakdown {
  const base = `papers.${index}`
  return {
    title: translateField(t, board, `${base}.title`, paper.title),
    badge: translateField(t, board, `${base}.badge`, paper.badge),
    description: translateField(t, board, `${base}.description`, paper.description),
    rows: paper.rows.map((row, i) => translatePaperRow(t, board, index, i, row)),
    tip: paper.tip != null ? translateField(t, board, `${base}.tip`, paper.tip) : paper.tip,
    warning:
      paper.warning != null
        ? translateField(t, board, `${base}.warning`, paper.warning)
        : paper.warning,
  }
}

function translateQuestionType(
  t: (key: string) => string,
  board: GcseBoard,
  index: number,
  q: QuestionTypeRow,
): QuestionTypeRow {
  const base = `question_types.${index}`
  return {
    paper: translateField(t, board, `${base}.paper`, q.paper),
    question: translateField(t, board, `${base}.question`, q.question),
    marks: translateField(t, board, `${base}.marks`, q.marks),
    description: translateField(t, board, `${base}.description`, q.description),
    approach: translateField(t, board, `${base}.approach`, q.approach),
  }
}

function translateEssay(
  t: (key: string) => string,
  board: GcseBoard,
  essay: BoardEssayContent,
): BoardEssayContent {
  return {
    intro: translateField(t, board, 'essay.intro', essay.intro),
    aoFocus: essay.aoFocus.map((s, i) => translateField(t, board, `essay.ao_focus.${i}`, s)),
    structureTips: essay.structureTips.map((s, i) =>
      translateField(t, board, `essay.structure_tips.${i}`, s),
    ),
    examinerChecklist: essay.examinerChecklist.map((s, i) =>
      translateField(t, board, `essay.examiner_checklist.${i}`, s),
    ),
    headlineEssayLabel: translateField(
      t,
      board,
      'essay.headline_essay_label',
      essay.headlineEssayLabel,
    ),
    headlineEssayGuidance: translateField(
      t,
      board,
      'essay.headline_essay_guidance',
      essay.headlineEssayGuidance,
    ),
  }
}

/**
 * Client hook that returns the board exam-technique content with every
 * translatable string passed through the `revision.exam_technique.<board>.*`
 * namespace. Memoised on the resolved locale (via the identity of the
 * `t` function returned by `useT`), so re-renders are free until the
 * language toggle fires.
 */
export function useTranslatedBoardContent(board: GcseBoard): BoardExamTechniqueContent {
  const t = useT()
  return useMemo(() => {
    const raw = getBoardExamTechniqueContent(board)
    return {
      boardName: translateField(t, board, 'board_name', raw.boardName),
      shortName: translateField(t, board, 'short_name', raw.shortName),
      totalDuration: translateField(t, board, 'total_duration', raw.totalDuration),
      structureSummary: translateField(t, board, 'structure_summary', raw.structureSummary),
      papers: raw.papers.map((paper, i) => translatePaper(t, board, i, paper)),
      questionTypes: raw.questionTypes.map((q, i) => translateQuestionType(t, board, i, q)),
      essay: translateEssay(t, board, raw.essay),
    }
  }, [t, board])
}
