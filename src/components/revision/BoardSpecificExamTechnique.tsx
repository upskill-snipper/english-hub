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
 */

import type { ExamBoard } from '@/lib/board/board-config'

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
  totalDuration: '8 hours total across 4 papers',
  structureSummary:
    'AQA assesses GCSE English across four papers: Literature Paper 1 (Shakespeare + 19th-century novel), Literature Paper 2 (Modern texts, anthology poetry, unseen poetry), Language Paper 1 (Fiction reading + creative writing) and Language Paper 2 (Non-fiction reading + transactional writing).',
  papers: [
    {
      title: 'AQA English Language Paper 1',
      badge: '1h 45m',
      description:
        'Explorations in Creative Reading and Writing. One literary fiction extract with four reading questions and one creative writing question.',
      rows: [
        { time: '0:00 - 0:15', label: 'Read the source text carefully', detail: 'Read the full extract once for understanding, then re-read sections referenced by each question. Underline key words.', marks: 'Prep', colour: 'prep' },
        { time: '0:15 - 0:20', label: 'Q1 — List four things (4 marks)', detail: 'Simple retrieval. Four clear, short statements, one per line.', marks: '4 marks', colour: 'reading' },
        { time: '0:20 - 0:28', label: 'Q2 — Language analysis (8 marks)', detail: 'Pick 2-3 specific words or phrases. Identify technique, explain effect, link to writer\'s intention.', marks: '8 marks', colour: 'reading' },
        { time: '0:28 - 0:36', label: 'Q3 — Structure analysis (8 marks)', detail: 'Analyse opening, shifts in focus, narrative perspective, sentence and paragraph length.', marks: '8 marks', colour: 'reading' },
        { time: '0:36 - 0:56', label: 'Q4 — Evaluation (20 marks)', detail: 'Take a clear position on a statement. Use 3 pieces of evidence with detailed analysis.', marks: '20 marks', colour: 'analysis' },
        { time: '0:56 - 1:01', label: 'Q5 — Plan creative writing', detail: 'Five minutes planning: hook, 3-4 sections, ending, deliberate techniques.', marks: 'Plan', colour: 'plan' },
        { time: '1:01 - 1:40', label: 'Q5 — Write creative piece (40 marks)', detail: '24 marks AO5 + 16 marks AO6. 400-600 words. Vary sentences, deploy techniques.', marks: '40 marks', colour: 'creative' },
        { time: '1:40 - 1:45', label: 'Proofread', detail: 'Check spelling, full stops, homophones (there/their/they\'re).', marks: 'Check', colour: 'check' },
      ],
      tip: 'Q5 is worth half the marks on the entire paper. Protect your Q5 time by capping Q4 at 20 minutes.',
    },
    {
      title: 'AQA English Language Paper 2',
      badge: '1h 45m',
      description:
        'Writers\' Viewpoints and Perspectives. Two linked non-fiction texts with four reading questions and one transactional writing question.',
      rows: [
        { time: '0:00 - 0:15', label: 'Read both source texts', detail: 'Source A and Source B fully. Note tone, purpose, audience, similarities and differences.', marks: 'Prep', colour: 'prep' },
        { time: '0:15 - 0:19', label: 'Q1 — True or false (4 marks)', detail: 'Shade four correct statements from Source A. Do not overthink.', marks: '4 marks', colour: 'reading' },
        { time: '0:19 - 0:27', label: 'Q2 — Summary of differences (8 marks)', detail: 'Three clear differences across both sources with brief quotations.', marks: '8 marks', colour: 'reading' },
        { time: '0:27 - 0:39', label: 'Q3 — Language analysis (12 marks)', detail: 'One source. Aim for 3-4 detailed language points with subject terminology.', marks: '12 marks', colour: 'analysis' },
        { time: '0:39 - 0:55', label: 'Q4 — Comparison (16 marks)', detail: 'Compare how the writers convey different perspectives. Use both texts in every paragraph.', marks: '16 marks', colour: 'comparison' },
        { time: '0:55 - 1:00', label: 'Q5 — Plan transactional writing', detail: 'Identify purpose, audience, form. Plan 3-4 key points with rhetorical techniques.', marks: 'Plan', colour: 'plan' },
        { time: '1:00 - 1:40', label: 'Q5 — Write transactional piece (40 marks)', detail: '24 marks AO5 + 16 marks AO6. Match the form. Use persuasive techniques.', marks: '40 marks', colour: 'creative' },
        { time: '1:40 - 1:45', label: 'Proofread', detail: 'Check spelling, punctuation, paragraphing, form conventions.', marks: 'Check', colour: 'check' },
      ],
      warning: 'Q4 is the hardest reading question. Cap it at 16 minutes — partial comparison beats one-sided analysis.',
    },
    {
      title: 'AQA English Literature Paper 1',
      badge: '1h 45m',
      description:
        'Shakespeare and the 19th-century novel. Two essay questions, each based on an extract plus the wider text.',
      rows: [
        { time: '0:00 - 0:05', label: 'Read Shakespeare extract and question', detail: 'Read twice. Underline key words. Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:10', label: 'Plan Shakespeare essay', detail: 'Thesis + 3 paragraph topics (at least one beyond extract) + key quotations.', marks: 'Plan', colour: 'plan' },
        { time: '0:10 - 0:50', label: 'Write Shakespeare essay (34 marks + 4 SPaG)', detail: 'Intro + 3 PEEL paragraphs + conclusion. At least one paragraph beyond the extract.', marks: '34+4', colour: 'creative' },
        { time: '0:50 - 0:55', label: 'Read 19th-century novel extract and question', detail: 'Read extract. Identify focus. Plan wider-text references.', marks: 'Prep', colour: 'prep' },
        { time: '0:55 - 1:00', label: 'Plan novel essay', detail: 'Thesis + 3 paragraph topics + quotations. At least one paragraph beyond extract.', marks: 'Plan', colour: 'plan' },
        { time: '1:00 - 1:40', label: 'Write novel essay (30 marks)', detail: 'Intro + 3 paragraphs + conclusion. Integrate context naturally.', marks: '30 marks', colour: 'creative' },
        { time: '1:40 - 1:45', label: 'Proofread both essays', detail: 'Skim. Fix errors. Add final contextual points if time.', marks: 'Check', colour: 'check' },
      ],
    },
    {
      title: 'AQA English Literature Paper 2',
      badge: '2h 15m',
      description:
        'Modern texts and poetry. Three sections: modern prose/drama, poetry anthology comparison, and unseen poetry.',
      rows: [
        { time: '0:00 - 0:45', label: 'Section A — Modern text (e.g. An Inspector Calls)', detail: '5 mins planning + 35 mins writing + 5 mins proofread. Quotations from memory. 34 + 4 SPaG.', marks: '34+4', colour: 'creative' },
        { time: '0:45 - 1:30', label: 'Section B — Poetry comparison (30 marks)', detail: 'Compare a printed poem with one from the anthology. 5 mins planning + 35 mins writing + 5 mins proofread.', marks: '30 marks', colour: 'comparison' },
        { time: '1:30 - 1:55', label: 'Section C Part 1 — Unseen poem (24 marks)', detail: 'Read 3 times. 5 mins planning + 15 mins writing. Language, structure, form.', marks: '24 marks', colour: 'reading' },
        { time: '1:55 - 2:15', label: 'Section C Part 2 — Compare unseen poems (8 marks)', detail: '2-3 focused comparison paragraphs.', marks: '8 marks', colour: 'reading' },
      ],
      tip: 'Prepare comparison pairings in advance for each anthology theme. Know 2-3 poems you can confidently compare to any anthology poem.',
    },
  ],
  questionTypes: [
    { paper: 'Lang P1', question: 'Q1 — List four things', marks: '4', description: 'Simple retrieval from a specified section.', approach: 'Four clear sentences. One point per line. Do not over-explain.' },
    { paper: 'Lang P1', question: 'Q2 — Language analysis', marks: '8', description: 'How does the writer use language to describe X?', approach: '2-3 zoomed-in quotations. Technique → effect → writer\'s intention.' },
    { paper: 'Lang P1', question: 'Q3 — Structure analysis', marks: '8', description: 'How has the writer structured the text to interest the reader?', approach: 'Opening, shifts, perspective, sentence and paragraph length, ending.' },
    { paper: 'Lang P1', question: 'Q4 — Evaluation', marks: '20', description: 'To what extent do you agree with a statement?', approach: 'Clear position. 3 evidenced points. Use evaluative language.' },
    { paper: 'Lang P1', question: 'Q5 — Creative writing', marks: '40', description: 'Descriptive or narrative writing linked to a stimulus.', approach: 'Single moment or setting. Sensory detail. Varied sentences. 400-600 words.' },
    { paper: 'Lang P2', question: 'Q1 — True or false', marks: '4', description: 'Shade four correct statements from Source A.', approach: 'Quick retrieval. Maximum 4 minutes.' },
    { paper: 'Lang P2', question: 'Q2 — Summary of differences', marks: '8', description: 'Summary of differences across both sources on a topic.', approach: '3 differences with short embedded quotations from both sources.' },
    { paper: 'Lang P2', question: 'Q3 — Language analysis', marks: '12', description: 'How does the writer use language in one source?', approach: '3-4 detailed points with subject terminology. Deeper than P1 Q2.' },
    { paper: 'Lang P2', question: 'Q4 — Comparison', marks: '16', description: 'Compare how the writers convey their different perspectives.', approach: 'Both texts in every paragraph. Focus on methods, not just content.' },
    { paper: 'Lang P2', question: 'Q5 — Transactional writing', marks: '40', description: 'Letter, article, speech or leaflet on a viewpoint.', approach: 'Match the form. Persuasive techniques. Counter-arguments.' },
    { paper: 'Lit P1', question: 'Shakespeare extract essay', marks: '34+4', description: 'Starting with the extract, explore how Shakespeare presents X.', approach: 'Start with extract. At least one paragraph from wider play. Context.' },
    { paper: 'Lit P1', question: '19th-century novel extract essay', marks: '30', description: 'Starting with the extract, explore how the writer presents X.', approach: 'Same structure as Shakespeare. Refer to extract and wider novel.' },
    { paper: 'Lit P2', question: 'Modern text essay (no extract)', marks: '34+4', description: 'Choice of two questions on your studied modern text.', approach: 'Quotations from memory. Thematic argument across the whole text.' },
    { paper: 'Lit P2', question: 'Anthology poetry comparison', marks: '30', description: 'Compare a printed anthology poem with one of your choice.', approach: 'Pre-prepared pairings. Compare methods within paragraphs.' },
    { paper: 'Lit P2', question: 'Unseen poetry — single poem', marks: '24', description: 'How does the poet present X in this poem?', approach: 'Language, structure, form. No context required.' },
    { paper: 'Lit P2', question: 'Unseen poetry — comparison', marks: '8', description: 'Compare how the two poets present X.', approach: '2-3 focused comparison paragraphs on methods.' },
  ],
  essay: {
    intro:
      'AQA literature essays follow a clear extract-to-wider-text pattern. You are expected to weave AO1 (response), AO2 (language and structure) and AO3 (context) throughout, with SPaG (AO4) explicitly marked on Shakespeare and the modern text.',
    aoFocus: [
      'AO1 — personal, evidenced response with embedded quotations',
      'AO2 — analysis of language, form and structure with subject terminology',
      'AO3 — context that informs interpretation (not bolted on)',
      'AO4 — accurate spelling, punctuation and grammar (Shakespeare + modern text only)',
    ],
    structureTips: [
      'Open with a thesis that takes a clear position on the question.',
      'On extract-based questions, make your first body paragraph anchored in the extract.',
      'Always have at least one body paragraph that draws from the wider text.',
      'Embed AO3 context inside your analysis paragraphs — never as a stand-alone opener.',
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
  totalDuration: '8 hours total across 4 papers',
  structureSummary:
    'Pearson Edexcel GCSE English assesses across four papers: Literature Paper 1 (Shakespeare + post-1914 British play/novel), Literature Paper 2 (19th-century novel + poetry), Language Paper 1 (Fiction) and Language Paper 2 (Non-fiction).',
  papers: [
    {
      title: 'Edexcel English Language Paper 1',
      badge: '1h 45m',
      description:
        'Fiction and Imaginative Writing. One 19th-, 20th- or 21st-century literary fiction extract with four reading questions and one imaginative writing question.',
      rows: [
        { time: '0:00 - 0:10', label: 'Read the source text', detail: 'Read fully. Mark sections referenced by each question.', marks: 'Prep', colour: 'prep' },
        { time: '0:10 - 0:14', label: 'Q1 — Identify (1 mark)', detail: 'Quick retrieval. One sentence answer.', marks: '1 mark', colour: 'reading' },
        { time: '0:14 - 0:24', label: 'Q2 — Language analysis (4 marks)', detail: 'Quotation + technique + brief effect. Stay concise.', marks: '4 marks', colour: 'reading' },
        { time: '0:24 - 0:39', label: 'Q3 — Language and structure (15 marks)', detail: 'Combined language and structure analysis. 4-5 detailed points with subject terminology.', marks: '15 marks', colour: 'analysis' },
        { time: '0:39 - 0:59', label: 'Q4 — Evaluation (20 marks)', detail: 'To what extent do you agree? Use 3-4 evidenced evaluative points.', marks: '20 marks', colour: 'analysis' },
        { time: '0:59 - 1:04', label: 'Q5/6 — Plan imaginative writing', detail: 'Choice of two prompts (often image-based). Plan opening, structure, ending.', marks: 'Plan', colour: 'plan' },
        { time: '1:04 - 1:40', label: 'Q5/6 — Write imaginative piece (40 marks)', detail: '24 marks AO5 + 16 marks AO6. Single focused moment.', marks: '40 marks', colour: 'creative' },
        { time: '1:40 - 1:45', label: 'Proofread', detail: 'Check spelling, punctuation, sentence variety.', marks: 'Check', colour: 'check' },
      ],
      tip: 'Q3 (language + structure together) is unique to Edexcel. Plan your paragraphs to alternate between the two so the marker sees you addressing both halves of the AO.',
    },
    {
      title: 'Edexcel English Language Paper 2',
      badge: '2h 5m',
      description:
        'Non-Fiction and Transactional Writing. Two linked non-fiction texts (one 19th-century, one 20th/21st-century) with reading questions and two transactional writing tasks.',
      rows: [
        { time: '0:00 - 0:15', label: 'Read both source texts', detail: 'Both texts fully. Note differences in tone, purpose, perspective.', marks: 'Prep', colour: 'prep' },
        { time: '0:15 - 0:19', label: 'Q1 — Identify (1 mark)', detail: 'Quick retrieval from Text 1.', marks: '1 mark', colour: 'reading' },
        { time: '0:19 - 0:27', label: 'Q2 — Language and structure (6 marks)', detail: 'Brief analysis of methods in Text 1.', marks: '6 marks', colour: 'reading' },
        { time: '0:27 - 0:35', label: 'Q3 — Comprehension (2 marks)', detail: 'Short retrieval question on Text 2.', marks: '2 marks', colour: 'reading' },
        { time: '0:35 - 0:50', label: 'Q4 — Language analysis Text 2 (15 marks)', detail: 'Detailed methods analysis of Text 2 with subject terminology.', marks: '15 marks', colour: 'analysis' },
        { time: '0:50 - 1:10', label: 'Q5 — Synthesis (4 marks)', detail: 'Combine information from both texts on a given focus.', marks: '4 marks', colour: 'reading' },
        { time: '1:10 - 1:32', label: 'Q6 — Comparison (14 marks)', detail: 'Compare writers\' ideas and perspectives across both texts.', marks: '14 marks', colour: 'comparison' },
        { time: '1:32 - 1:37', label: 'Q7/8 — Plan transactional writing', detail: 'Choice of one task. Identify form, audience, purpose.', marks: 'Plan', colour: 'plan' },
        { time: '1:37 - 2:00', label: 'Q7/8 — Write transactional piece (40 marks)', detail: '24 AO5 + 16 AO6. Match the form conventions.', marks: '40 marks', colour: 'creative' },
        { time: '2:00 - 2:05', label: 'Proofread', detail: 'Check spelling, paragraphing, form.', marks: 'Check', colour: 'check' },
      ],
      warning: 'Edexcel Lang P2 is 20 minutes longer than AQA. Use the extra time on Q6 (comparison) where it pays back the most marks.',
    },
    {
      title: 'Edexcel English Literature Paper 1',
      badge: '1h 45m',
      description:
        'Shakespeare and Post-1914 Literature. Section A: Shakespeare extract + linked essay. Section B: Post-1914 British play or novel essay (no extract).',
      rows: [
        { time: '0:00 - 0:05', label: 'Read Shakespeare extract and question (a)', detail: 'Read extract. Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:25', label: 'Section A part (a) — Extract analysis (20 marks)', detail: 'Close analysis of the printed extract. Language, structure, form.', marks: '20 marks', colour: 'analysis' },
        { time: '0:25 - 0:30', label: 'Plan part (b)', detail: 'Wider play essay. Thesis + 3 points + quotations from memory.', marks: 'Plan', colour: 'plan' },
        { time: '0:30 - 0:55', label: 'Section A part (b) — Wider play essay (20 marks)', detail: 'Discuss the same theme/character across the wider play.', marks: '20 marks', colour: 'creative' },
        { time: '0:55 - 1:00', label: 'Plan Section B', detail: 'Post-1914 text essay. Thesis + 3 paragraph topics.', marks: 'Plan', colour: 'plan' },
        { time: '1:00 - 1:40', label: 'Section B — Post-1914 essay (40 marks)', detail: 'No extract. Choice of two questions. Quotations from memory. AO4 SPaG marked here.', marks: '40 marks', colour: 'creative' },
        { time: '1:40 - 1:45', label: 'Proofread', detail: 'Skim both sections for errors.', marks: 'Check', colour: 'check' },
      ],
      tip: 'Edexcel splits Shakespeare into two linked questions (a) extract + (b) wider play. Treat them as separate essays with separate plans — do not blur them together.',
    },
    {
      title: 'Edexcel English Literature Paper 2',
      badge: '2h 15m',
      description:
        '19th-century novel + poetry. Section A: 19th-century novel extract + linked essay. Section B: anthology poetry comparison. Section C: unseen poetry comparison.',
      rows: [
        { time: '0:00 - 0:05', label: 'Read 19th-century novel extract', detail: 'Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:25', label: 'Section A part (a) — Extract (20 marks)', detail: 'Close analysis of the printed extract.', marks: '20 marks', colour: 'analysis' },
        { time: '0:25 - 0:50', label: 'Section A part (b) — Wider novel essay (20 marks)', detail: 'Same theme/character across the novel. AO4 SPaG marked here.', marks: '20 marks', colour: 'creative' },
        { time: '0:50 - 1:35', label: 'Section B — Anthology poetry comparison (20 marks)', detail: 'Compare two named anthology poems on a given focus. Compare methods within paragraphs.', marks: '20 marks', colour: 'comparison' },
        { time: '1:35 - 2:15', label: 'Section C — Unseen poetry comparison (20 marks)', detail: 'Compare two unseen poems. 5 mins reading, 5 mins planning, 30 mins writing.', marks: '20 marks', colour: 'comparison' },
      ],
      warning: 'Edexcel anthology comparison gives you BOTH poems (unlike AQA where you choose one). Read both carefully before deciding your line of argument.',
    },
  ],
  questionTypes: [
    { paper: 'Lang P1', question: 'Q1 — Identify', marks: '1', description: 'Single fact retrieval.', approach: 'One sentence answer.' },
    { paper: 'Lang P1', question: 'Q2 — Language analysis', marks: '4', description: 'Brief language analysis.', approach: 'Quotation, technique, effect — be concise.' },
    { paper: 'Lang P1', question: 'Q3 — Language and structure', marks: '15', description: 'Combined language and structure analysis.', approach: '4-5 detailed points alternating language and structure.' },
    { paper: 'Lang P1', question: 'Q4 — Evaluation', marks: '20', description: 'To what extent do you agree with a critic\'s statement?', approach: 'Clear position. 3-4 evaluative points with evidence.' },
    { paper: 'Lang P1', question: 'Q5/6 — Imaginative writing', marks: '40', description: 'Choice of two image-linked prompts.', approach: 'Single focused moment. Sensory detail. Varied sentences.' },
    { paper: 'Lang P2', question: 'Q1 — Identify', marks: '1', description: 'Quick retrieval from Text 1.', approach: 'One short answer.' },
    { paper: 'Lang P2', question: 'Q2 — Methods Text 1', marks: '6', description: 'Brief language and structure analysis.', approach: '2-3 short paragraphs.' },
    { paper: 'Lang P2', question: 'Q3 — Comprehension Text 2', marks: '2', description: 'Short retrieval from Text 2.', approach: 'Direct answer with evidence.' },
    { paper: 'Lang P2', question: 'Q4 — Language analysis Text 2', marks: '15', description: 'Detailed methods analysis.', approach: '4-5 detailed points with subject terminology.' },
    { paper: 'Lang P2', question: 'Q5 — Synthesis', marks: '4', description: 'Combine information across both texts.', approach: 'Use both texts. Brief.' },
    { paper: 'Lang P2', question: 'Q6 — Comparison', marks: '14', description: 'Compare writers\' ideas and perspectives.', approach: 'Both texts in every paragraph. Methods focus.' },
    { paper: 'Lang P2', question: 'Q7/8 — Transactional writing', marks: '40', description: 'Choice of one form-based task.', approach: 'Match form. Persuasive techniques. Counter-arguments.' },
    { paper: 'Lit P1', question: 'Shakespeare (a) extract', marks: '20', description: 'Close analysis of extract.', approach: 'Extract only. Language, structure, form.' },
    { paper: 'Lit P1', question: 'Shakespeare (b) wider play', marks: '20', description: 'Same focus across the wider play.', approach: 'Quotations from memory. Different scenes/acts.' },
    { paper: 'Lit P1', question: 'Post-1914 British text', marks: '40', description: 'Choice of two essay questions.', approach: 'No extract. Thesis + 4 paragraphs from memory. SPaG marked.' },
    { paper: 'Lit P2', question: '19th-century (a) extract', marks: '20', description: 'Close analysis of extract.', approach: 'Extract only.' },
    { paper: 'Lit P2', question: '19th-century (b) wider novel', marks: '20', description: 'Same focus across the novel.', approach: 'Quotations from memory. SPaG marked.' },
    { paper: 'Lit P2', question: 'Anthology poetry comparison', marks: '20', description: 'Compare two named anthology poems.', approach: 'Both poems in every paragraph. Methods focus.' },
    { paper: 'Lit P2', question: 'Unseen poetry comparison', marks: '20', description: 'Compare two unseen poems.', approach: 'Five-minute read. Methods + effects.' },
  ],
  essay: {
    intro:
      'Edexcel literature essays heavily emphasise comparison. The board splits Shakespeare and 19th-century novel into two linked questions: extract analysis (a) and wider text essay (b). The poetry sections require comparison from the start.',
    aoFocus: [
      'AO1 — informed personal response with embedded textual references',
      'AO2 — language, form and structure analysis with subject terminology',
      'AO3 — context shaping interpretation',
      'AO4 — accurate written communication (specific essays only)',
    ],
    structureTips: [
      'Treat Shakespeare (a) and (b) as separate essays — do not write one continuous response.',
      'Anthology poetry comparison expects comparative connectives in every paragraph.',
      'Unseen poetry comparison: read both poems before choosing your line of argument.',
      'Section B (Post-1914) is 40 marks — your longest essay. Plan four developed paragraphs.',
      'Use AO3 to inform your interpretation, not as a stand-alone biography paragraph.',
    ],
    examinerChecklist: [
      'Comparative connectives in poetry questions',
      'Methods (not just content) when comparing writers',
      'Both halves of (a) and (b) Shakespeare answered fully',
      'Subject terminology used accurately',
      'Context that supports the argument',
    ],
    headlineEssayLabel: 'Lit P1 Section B — Post-1914 essay (40 marks)',
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
      description:
        'Communicating information and ideas. Two non-fiction texts (one 19th-century, one modern) with reading questions and one writing task.',
      rows: [
        { time: '0:00 - 0:15', label: 'Read both source texts', detail: 'Read both fully. Note purpose and key ideas.', marks: 'Prep', colour: 'prep' },
        { time: '0:15 - 0:25', label: 'Q1 — Information retrieval (8 marks)', detail: 'Identify and explain information from the texts.', marks: '8 marks', colour: 'reading' },
        { time: '0:25 - 0:40', label: 'Q2 — Language analysis (12 marks)', detail: 'How does the writer use language? Use subject terminology.', marks: '12 marks', colour: 'analysis' },
        { time: '0:40 - 1:00', label: 'Q3 — Comparison (12 marks)', detail: 'Compare ideas and perspectives across both texts.', marks: '12 marks', colour: 'comparison' },
        { time: '1:00 - 1:05', label: 'Q4 — Plan extended writing', detail: 'Plan structure for the writing task (16 + 24 marks).', marks: 'Plan', colour: 'plan' },
        { time: '1:05 - 1:55', label: 'Q4 — Write extended task (40 marks)', detail: '24 marks content/organisation + 16 marks technical accuracy. Match form, audience, purpose.', marks: '40 marks', colour: 'creative' },
        { time: '1:55 - 2:00', label: 'Proofread', detail: 'Check spelling, sentence variety, form conventions.', marks: 'Check', colour: 'check' },
      ],
    },
    {
      title: 'OCR English Language Paper 2',
      badge: '2h',
      description:
        'Exploring effects and impact. Two literary fiction extracts with reading questions and one creative writing task.',
      rows: [
        { time: '0:00 - 0:15', label: 'Read both fiction extracts', detail: 'Read both fully. Note tone, voice, devices.', marks: 'Prep', colour: 'prep' },
        { time: '0:15 - 0:25', label: 'Q1 — Information / inference (8 marks)', detail: 'Retrieval and inference from one extract.', marks: '8 marks', colour: 'reading' },
        { time: '0:25 - 0:40', label: 'Q2 — Language analysis (12 marks)', detail: 'How does the writer create an effect? Subject terminology.', marks: '12 marks', colour: 'analysis' },
        { time: '0:40 - 1:00', label: 'Q3 — Comparison (12 marks)', detail: 'Compare how the writers create effects across both extracts.', marks: '12 marks', colour: 'comparison' },
        { time: '1:00 - 1:05', label: 'Q4 — Plan creative writing', detail: 'Plan opening, development, ending. Note techniques.', marks: 'Plan', colour: 'plan' },
        { time: '1:05 - 1:55', label: 'Q4 — Write creative piece (40 marks)', detail: '24 marks content/organisation + 16 marks technical accuracy.', marks: '40 marks', colour: 'creative' },
        { time: '1:55 - 2:00', label: 'Proofread', detail: 'Check homophones, sentence variety.', marks: 'Check', colour: 'check' },
      ],
      tip: 'OCR\'s 2-hour Language papers give you more time per question than AQA — use the extra minutes on Q4 writing rather than padding the reading answers.',
    },
    {
      title: 'OCR English Literature Paper 1',
      badge: '2h',
      description:
        'Exploring modern and literary heritage texts. Section A: modern prose or drama. Section B: 19th-century prose.',
      rows: [
        { time: '0:00 - 0:05', label: 'Read modern text question', detail: 'Choose one of two questions. Underline focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:10', label: 'Plan modern text essay', detail: 'Thesis + 3-4 paragraph topics + quotations.', marks: 'Plan', colour: 'plan' },
        { time: '0:10 - 0:55', label: 'Section A — Modern text essay (40 marks)', detail: 'Choice of two questions. Quotations from memory. AO4 SPaG marked.', marks: '40 marks', colour: 'creative' },
        { time: '0:55 - 1:00', label: 'Read 19th-century extract and question', detail: 'Read extract. Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '1:00 - 1:05', label: 'Plan 19th-century essay', detail: 'Thesis + extract + wider novel paragraphs.', marks: 'Plan', colour: 'plan' },
        { time: '1:05 - 1:55', label: 'Section B — 19th-century essay (40 marks)', detail: 'Extract + wider novel. AO4 SPaG marked.', marks: '40 marks', colour: 'creative' },
        { time: '1:55 - 2:00', label: 'Proofread', detail: 'Both essays. SPaG focus.', marks: 'Check', colour: 'check' },
      ],
    },
    {
      title: 'OCR English Literature Paper 2',
      badge: '2h',
      description:
        'Exploring poetry and Shakespeare. Section A: anthology poetry comparison. Section B: unseen poetry. Section C: Shakespeare.',
      rows: [
        { time: '0:00 - 0:05', label: 'Read anthology poems and question', detail: 'Identify the named poem and choose your comparison poem.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:10', label: 'Plan anthology comparison', detail: 'Compare methods. Pre-prepared pairings help here.', marks: 'Plan', colour: 'plan' },
        { time: '0:10 - 0:40', label: 'Section A — Anthology poetry comparison (20 marks)', detail: 'Compare two anthology poems on a given focus.', marks: '20 marks', colour: 'comparison' },
        { time: '0:40 - 0:50', label: 'Read unseen poem(s)', detail: 'Read 2-3 times. Annotate.', marks: 'Prep', colour: 'prep' },
        { time: '0:50 - 1:20', label: 'Section B — Unseen poetry (20 marks)', detail: 'Analyse how the poet creates effects. Language, structure, form.', marks: '20 marks', colour: 'analysis' },
        { time: '1:20 - 1:25', label: 'Read Shakespeare extract and question', detail: 'Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '1:25 - 2:00', label: 'Section C — Shakespeare (40 marks)', detail: 'Extract + wider play. Quotations from memory. AO4 SPaG marked.', marks: '40 marks', colour: 'creative' },
      ],
      warning: 'OCR Lit P2 has THREE sections to balance. Stick rigidly to your timings — running over on poetry will eat into your 40-mark Shakespeare essay.',
    },
  ],
  questionTypes: [
    { paper: 'Lang P1', question: 'Q1 — Information retrieval', marks: '8', description: 'Identify and explain information from non-fiction texts.', approach: 'Direct retrieval with brief explanation.' },
    { paper: 'Lang P1', question: 'Q2 — Language analysis', marks: '12', description: 'How does the writer use language?', approach: '3-4 detailed points with subject terminology.' },
    { paper: 'Lang P1', question: 'Q3 — Comparison', marks: '12', description: 'Compare ideas and perspectives across both texts.', approach: 'Both texts in every paragraph. Comparative connectives.' },
    { paper: 'Lang P1', question: 'Q4 — Extended writing', marks: '40', description: 'Non-fiction writing task (article, letter, speech).', approach: 'Match form. Persuasive techniques. Plan for 5 minutes.' },
    { paper: 'Lang P2', question: 'Q1 — Information / inference', marks: '8', description: 'Retrieval and inference from a fiction extract.', approach: 'Direct answers with brief explanation.' },
    { paper: 'Lang P2', question: 'Q2 — Language analysis', marks: '12', description: 'How does the writer create effects?', approach: 'Detailed methods analysis with subject terminology.' },
    { paper: 'Lang P2', question: 'Q3 — Comparison', marks: '12', description: 'Compare effects across both fiction extracts.', approach: 'Methods focus. Both extracts in every paragraph.' },
    { paper: 'Lang P2', question: 'Q4 — Creative writing', marks: '40', description: 'Narrative or descriptive writing task.', approach: 'Single focused moment. Sensory detail.' },
    { paper: 'Lit P1', question: 'Modern text essay', marks: '40', description: 'Choice of two questions on modern prose or drama.', approach: 'Thesis + 4 paragraphs from memory. SPaG marked.' },
    { paper: 'Lit P1', question: '19th-century prose essay', marks: '40', description: 'Extract + wider novel essay.', approach: 'Anchor in extract, then move to wider text. SPaG marked.' },
    { paper: 'Lit P2', question: 'Anthology poetry comparison', marks: '20', description: 'Compare two anthology poems on a given theme.', approach: 'Pre-prepared pairings. Methods in every paragraph.' },
    { paper: 'Lit P2', question: 'Unseen poetry', marks: '20', description: 'Analyse a single unseen poem.', approach: 'Language, structure, form. No context required.' },
    { paper: 'Lit P2', question: 'Shakespeare', marks: '40', description: 'Extract + wider play essay.', approach: 'Anchor in extract, move outward. SPaG marked.' },
  ],
  essay: {
    intro:
      'OCR literature essays are weighted heavily towards two long 40-mark essays per paper. You need stamina, structure and a clear thesis-led argument supported by quotations from memory.',
    aoFocus: [
      'AO1 — sustained, perceptive personal response',
      'AO2 — analysis of language, form and structure',
      'AO3 — relationships between texts and contexts',
      'AO4 — accurate written communication on Lit essays',
    ],
    structureTips: [
      'Plan four developed paragraphs for the 40-mark essays — quality not quantity.',
      'Open with a thesis and signpost your argument across the whole text.',
      'On extract-based essays, anchor in the extract first, then move outwards.',
      'Embed AO3 context inside analysis paragraphs.',
      'Leave 3-5 minutes proofreading on Lit essays — AO4 marks are gettable.',
    ],
    examinerChecklist: [
      'Sustained thesis across the whole essay',
      'Methods analysed, not spotted',
      'Wider text knowledge demonstrated',
      'Subject terminology accurate and embedded',
      'AO4 (SPaG) accuracy on Lit essays',
    ],
    headlineEssayLabel: 'Lit P2 Section C — Shakespeare (40 marks)',
    headlineEssayGuidance:
      'OCR Shakespeare is 40 marks split across an extract + wider play. Plan a thesis, open in the extract, then move to two or three wider-play paragraphs that develop your argument with quotations from memory.',
  },
}

export const EDUQAS_CONTENT: BoardExamTechniqueContent = {
  boardName: 'WJEC Eduqas',
  shortName: 'Eduqas',
  totalDuration: '7 hours total across 4 papers (2 Lit + 2 Lang)',
  structureSummary:
    'Eduqas GCSE English uses a Component 1 / Component 2 structure. Literature: Component 1 (Shakespeare + Poetry from 1789), Component 2 (Post-1914 prose/drama + 19th-century prose + Unseen poetry). Language: Component 1 (Fiction reading + creative writing), Component 2 (Non-fiction reading + transactional writing).',
  papers: [
    {
      title: 'Eduqas English Language Component 1',
      badge: '1h 45m',
      description:
        '20th- and 21st-century literature reading and creative prose writing. One literary fiction extract with five reading questions and one creative writing task.',
      rows: [
        { time: '0:00 - 0:10', label: 'Read the source text', detail: 'Read fully. Mark sections referenced by each question.', marks: 'Prep', colour: 'prep' },
        { time: '0:10 - 0:15', label: 'A1 — Retrieval (5 marks)', detail: 'Quick retrieval question.', marks: '5 marks', colour: 'reading' },
        { time: '0:15 - 0:25', label: 'A2 — Language analysis (5 marks)', detail: 'Brief language analysis.', marks: '5 marks', colour: 'reading' },
        { time: '0:25 - 0:35', label: 'A3 — Methods (10 marks)', detail: 'Detailed language and structure analysis.', marks: '10 marks', colour: 'analysis' },
        { time: '0:35 - 0:45', label: 'A4 — Effect on reader (10 marks)', detail: 'How is the reader made to feel? Reference effects directly.', marks: '10 marks', colour: 'analysis' },
        { time: '0:45 - 1:00', label: 'A5 — Evaluation (10 marks)', detail: 'To what extent do you agree? Take a clear position.', marks: '10 marks', colour: 'analysis' },
        { time: '1:00 - 1:05', label: 'B — Plan creative writing', detail: 'Choice of four prompts. Plan opening, structure, ending.', marks: 'Plan', colour: 'plan' },
        { time: '1:05 - 1:40', label: 'B — Write creative piece (40 marks)', detail: '24 marks AO5 + 16 marks AO6.', marks: '40 marks', colour: 'creative' },
        { time: '1:40 - 1:45', label: 'Proofread', detail: 'Check spelling, punctuation, sentence variety.', marks: 'Check', colour: 'check' },
      ],
      tip: 'Eduqas Lang Component 1 has FIVE reading questions, more than any other board. Pace yourself ruthlessly — none should take longer than its mark value in minutes.',
    },
    {
      title: 'Eduqas English Language Component 2',
      badge: '2h',
      description:
        '19th- and 21st-century non-fiction reading and transactional/persuasive writing. Two non-fiction texts with six reading questions and two writing tasks.',
      rows: [
        { time: '0:00 - 0:15', label: 'Read both source texts', detail: 'Read both fully. Note tone, audience, purpose.', marks: 'Prep', colour: 'prep' },
        { time: '0:15 - 0:25', label: 'A1-A2 — Retrieval and language (10 marks)', detail: 'Two short questions on Text 1.', marks: '10 marks', colour: 'reading' },
        { time: '0:25 - 0:35', label: 'A3 — Inference (10 marks)', detail: 'Inference and impressions from Text 1.', marks: '10 marks', colour: 'reading' },
        { time: '0:35 - 0:45', label: 'A4 — Retrieval Text 2 (10 marks)', detail: 'Retrieval and inference from Text 2.', marks: '10 marks', colour: 'reading' },
        { time: '0:45 - 1:00', label: 'A5 — Comparison of attitudes (10 marks)', detail: 'Compare writers\' attitudes across both texts.', marks: '10 marks', colour: 'comparison' },
        { time: '1:00 - 1:05', label: 'B1 — Plan task 1 writing', detail: 'Identify form, audience, purpose.', marks: 'Plan', colour: 'plan' },
        { time: '1:05 - 1:30', label: 'B1 — Writing task 1 (20 marks)', detail: 'Persuasive or transactional writing.', marks: '20 marks', colour: 'creative' },
        { time: '1:30 - 1:55', label: 'B2 — Writing task 2 (20 marks)', detail: 'Second persuasive or transactional task.', marks: '20 marks', colour: 'creative' },
        { time: '1:55 - 2:00', label: 'Proofread', detail: 'Check both writing tasks.', marks: 'Check', colour: 'check' },
      ],
      warning: 'Eduqas Lang Component 2 has TWO writing tasks (20 marks each), not one big one. Both must be different forms. Plan both before starting.',
    },
    {
      title: 'Eduqas English Literature Component 1',
      badge: '2h',
      description:
        'Shakespeare and Poetry from 1789. Section A: Shakespeare extract + wider play essay. Section B: Poetry from 1789 (anthology comparison + named poem question).',
      rows: [
        { time: '0:00 - 0:05', label: 'Read Shakespeare extract and question', detail: 'Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:55', label: 'Section A — Shakespeare (40 marks)', detail: 'Extract analysis + wider play essay. AO4 SPaG marked.', marks: '40 marks', colour: 'creative' },
        { time: '0:55 - 1:00', label: 'Plan anthology comparison', detail: 'Choose comparison poem.', marks: 'Plan', colour: 'plan' },
        { time: '1:00 - 1:25', label: 'Section B Part 1 — Anthology comparison (20 marks)', detail: 'Compare a named anthology poem with one of your choice.', marks: '20 marks', colour: 'comparison' },
        { time: '1:25 - 2:00', label: 'Section B Part 2 — Named anthology poem (20 marks)', detail: 'Detailed analysis of a single anthology poem.', marks: '20 marks', colour: 'analysis' },
      ],
      tip: 'Eduqas Lit C1 has THREE distinct tasks in 2 hours. The Shakespeare 40-marker is your biggest — protect 50 minutes for it.',
    },
    {
      title: 'Eduqas English Literature Component 2',
      badge: '2h 30m',
      description:
        'Post-1914 prose/drama + 19th-century prose + Unseen poetry. Three sections.',
      rows: [
        { time: '0:00 - 0:05', label: 'Read post-1914 question', detail: 'Choose one of two questions. Underline focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:05 - 0:50', label: 'Section A — Post-1914 prose/drama (40 marks)', detail: 'No extract. Quotations from memory. AO4 SPaG marked.', marks: '40 marks', colour: 'creative' },
        { time: '0:50 - 0:55', label: 'Read 19th-century extract', detail: 'Identify focus.', marks: 'Prep', colour: 'prep' },
        { time: '0:55 - 1:40', label: 'Section B — 19th-century prose (40 marks)', detail: 'Extract + wider novel essay. AO4 SPaG marked.', marks: '40 marks', colour: 'creative' },
        { time: '1:40 - 1:50', label: 'Read unseen poems', detail: 'Two unseen poems. Annotate.', marks: 'Prep', colour: 'prep' },
        { time: '1:50 - 2:10', label: 'Section C Part 1 — Unseen poem (15 marks)', detail: 'Single unseen poem analysis.', marks: '15 marks', colour: 'analysis' },
        { time: '2:10 - 2:30', label: 'Section C Part 2 — Unseen comparison (25 marks)', detail: 'Compare both unseen poems.', marks: '25 marks', colour: 'comparison' },
      ],
      warning: 'Eduqas Lit C2 is the longest paper at 2h 30m. Three sections, two 40-mark essays and unseen poetry. Stamina is essential — practise full papers under timed conditions.',
    },
  ],
  questionTypes: [
    { paper: 'Lang C1', question: 'A1 — Retrieval', marks: '5', description: 'List or identify from extract.', approach: 'Quick, focused retrieval. 5 minutes max.' },
    { paper: 'Lang C1', question: 'A2 — Language analysis', marks: '5', description: 'How does the writer use language?', approach: 'Two short language points.' },
    { paper: 'Lang C1', question: 'A3 — Methods', marks: '10', description: 'Detailed language and structure analysis.', approach: '3-4 points combining language and structure.' },
    { paper: 'Lang C1', question: 'A4 — Effect on reader', marks: '10', description: 'How is the reader made to feel?', approach: 'Trace effects across the extract with quotations.' },
    { paper: 'Lang C1', question: 'A5 — Evaluation', marks: '10', description: 'To what extent do you agree with a statement?', approach: 'Clear position. 3 evaluative points with evidence.' },
    { paper: 'Lang C1', question: 'B — Creative writing', marks: '40', description: 'Choice of four prompts (descriptive or narrative).', approach: 'Single focused moment. Sensory detail.' },
    { paper: 'Lang C2', question: 'A1-A2 — Retrieval and language', marks: '10', description: 'Two short questions on Text 1.', approach: 'Direct answers with brief explanation.' },
    { paper: 'Lang C2', question: 'A3 — Inference', marks: '10', description: 'Inference and impressions from Text 1.', approach: 'Quotation + inference + explanation.' },
    { paper: 'Lang C2', question: 'A4 — Retrieval Text 2', marks: '10', description: 'Retrieval and inference from Text 2.', approach: 'Direct answers with evidence.' },
    { paper: 'Lang C2', question: 'A5 — Comparison of attitudes', marks: '10', description: 'Compare writers\' attitudes.', approach: 'Both texts in every paragraph.' },
    { paper: 'Lang C2', question: 'B1 — Writing task 1', marks: '20', description: 'Persuasive or transactional writing.', approach: 'Match form. Persuasive techniques.' },
    { paper: 'Lang C2', question: 'B2 — Writing task 2', marks: '20', description: 'Second writing task in different form.', approach: 'Different form from B1. Match conventions.' },
    { paper: 'Lit C1', question: 'Shakespeare', marks: '40', description: 'Extract + wider play essay.', approach: 'Anchor in extract. AO4 SPaG marked.' },
    { paper: 'Lit C1', question: 'Anthology poetry comparison', marks: '20', description: 'Compare a named poem with one of your choice.', approach: 'Methods in every paragraph.' },
    { paper: 'Lit C1', question: 'Named anthology poem', marks: '20', description: 'Detailed analysis of a single named poem.', approach: 'Language, form, structure, context.' },
    { paper: 'Lit C2', question: 'Post-1914 prose/drama', marks: '40', description: 'Choice of two questions. No extract.', approach: 'Quotations from memory. SPaG marked.' },
    { paper: 'Lit C2', question: '19th-century prose', marks: '40', description: 'Extract + wider novel essay.', approach: 'Anchor in extract. SPaG marked.' },
    { paper: 'Lit C2', question: 'Unseen poem', marks: '15', description: 'Single unseen poem analysis.', approach: 'Language, structure, form, voice.' },
    { paper: 'Lit C2', question: 'Unseen poetry comparison', marks: '25', description: 'Compare both unseen poems.', approach: 'Methods in every paragraph.' },
  ],
  essay: {
    intro:
      'Eduqas literature essays are notable for their three big 40-mark essays (Shakespeare, Post-1914, 19th-century). The poetry sections combine an anthology comparison with a single-poem question, and unseen poetry has both a single-poem and a comparison question.',
    aoFocus: [
      'AO1 — informed personal response with embedded quotations',
      'AO2 — language, form and structure analysis with subject terminology',
      'AO3 — context and authorial intent',
      'AO4 — accurate written communication on the three 40-mark essays',
    ],
    structureTips: [
      'Plan four developed paragraphs for each 40-mark essay.',
      'Anthology comparison (20 marks) needs a tight comparative structure.',
      'Single-poem questions reward close reading and form analysis.',
      'Pace yourself across Lit C2 — three sections with stamina demands.',
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
