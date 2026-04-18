/**
 * Paper structures for every supported exam board.
 *
 * Each board has a set of papers. Each paper has sections (e.g. Section A,
 * Section B), and each section has links to existing revision content.
 *
 * Link types:
 *   text     - set text study guide
 *   poetry   - poetry anthology / poem page
 *   technique - exam technique / essay structure
 *   practice - practice questions / quizzes
 *   mock     - mock exams
 */

import type { ExamBoard } from '@/lib/board/board-config'

// ─── Types ───────────────────────────────────────────────────────────

export type LinkType = 'text' | 'poetry' | 'technique' | 'practice' | 'mock'

export type PaperLink = {
  label: string
  href: string
  type: LinkType
}

export type PaperSection = {
  title: string
  description: string
  links: PaperLink[]
}

export type Paper = {
  id: string
  name: string
  subtitle: string
  examCode: string
  duration: string
  totalMarks: number
  colour: 'teal' | 'clay' | 'sage' | 'ochre' | 'ink'
  sections: PaperSection[]
}

export type BoardPapers = {
  board: ExamBoard
  papers: Paper[]
}

// ─── AQA GCSE ────────────────────────────────────────────────────────

const AQA_PAPERS: Paper[] = [
  {
    id: 'aqa-lit-p1',
    name: 'Literature Paper 1',
    subtitle: 'Shakespeare and the 19th-century Novel',
    examCode: '8702/1',
    duration: '1h 45m',
    totalMarks: 64,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Shakespeare',
        description: 'One question on your studied Shakespeare play with an extract and essay.',
        links: [
          { label: 'Macbeth Study Guide', href: '/revision/texts/macbeth', type: 'text' },
          { label: 'Romeo & Juliet Study Guide', href: '/revision/texts/romeo-and-juliet', type: 'text' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'Lit Paper 1 Mock Exams', href: '/mock-exams?paper=aqa-lit-p1', type: 'mock' },
        ],
      },
      {
        title: 'Section B: 19th-century Novel',
        description: 'One question on your studied 19th-century novel with an extract and essay.',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          { label: 'Frankenstein', href: '/revision/texts/frankenstein', type: 'text' },  // TODO: page not yet built
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
  {
    id: 'aqa-lit-p2',
    name: 'Literature Paper 2',
    subtitle: 'Modern Texts and Poetry',
    examCode: '8702/2',
    duration: '2h 15m',
    totalMarks: 96,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Modern Text',
        description: 'One essay question on your studied modern prose or drama text (no extract).',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          { label: 'Animal Farm', href: '/revision/texts/animal-farm', type: 'text' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies', type: 'text' },
          { label: 'Blood Brothers', href: '/revision/texts/blood-brothers', type: 'text' },
          { label: 'Never Let Me Go', href: '/revision/texts/never-let-me-go', type: 'text' },
          { label: 'A View from the Bridge', href: '/revision/texts/a-view-from-the-bridge', type: 'text' },
          { label: 'Pigeon English', href: '/revision/texts/pigeon-english', type: 'text' },
          { label: 'Anita and Me', href: '/revision/texts/anita-and-me', type: 'text' },
          { label: 'Curious Incident', href: '/revision/texts/curious-incident', type: 'text' },
        ],
      },
      {
        title: 'Section B: Poetry Anthology',
        description: 'One comparison question on a named poem and one of your choice from the cluster.',
        links: [
          { label: 'Power & Conflict Poems', href: '/revision/poetry/power-and-conflict', type: 'poetry' },
          { label: 'Love & Relationships Poems', href: '/revision/poetry/love-and-relationships', type: 'poetry' },
          { label: 'Poetry Comparison Technique', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Section C: Unseen Poetry',
        description: 'Two questions: one analysis of an unseen poem, one comparison of two unseen poems.',
        links: [
          { label: 'Unseen Poetry Practice', href: '/revision/poetry/unseen-poetry', type: 'practice' },
          { label: 'Lit Paper 2 Mock Exams', href: '/mock-exams?paper=aqa-lit-p2', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p1',
    name: 'Language Paper 1',
    subtitle: 'Explorations in Creative Reading and Writing',
    examCode: '8700/1',
    duration: '1h 45m',
    totalMarks: 80,
    colour: 'sage',
    sections: [
      {
        title: 'Section A: Reading (Q1-Q4)',
        description: 'Four reading questions on one unseen fiction extract.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Question Types Breakdown', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'Lang Paper 1 Mock Exams', href: '/mock-exams?paper=aqa-lang-p1', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing (Q5)',
        description: 'One creative writing task: descriptive or narrative writing.',
        links: [
          { label: 'Creative Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Essay Structure', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
  {
    id: 'aqa-lang-p2',
    name: 'Language Paper 2',
    subtitle: "Writers' Viewpoints and Perspectives",
    examCode: '8700/2',
    duration: '1h 45m',
    totalMarks: 80,
    colour: 'ochre',
    sections: [
      {
        title: 'Section A: Reading (Q1-Q4)',
        description: 'Four reading questions on two linked non-fiction sources.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Comparison Technique', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'Lang Paper 2 Mock Exams', href: '/mock-exams?paper=aqa-lang-p2', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing (Q5)',
        description: 'One transactional writing task: article, letter, speech, or essay.',
        links: [
          { label: 'Transactional Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── Edexcel GCSE ────────────────────────────────────────────────────

const EDEXCEL_PAPERS: Paper[] = [
  {
    id: 'edexcel-lit-p1',
    name: 'Literature Paper 1',
    subtitle: 'Shakespeare and Post-1914 Literature',
    examCode: '1ET0/01',
    duration: '1h 45m',
    totalMarks: 80,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Shakespeare',
        description: 'One extract-based question on your studied Shakespeare play.',
        links: [
          { label: 'Macbeth Study Guide', href: '/revision/texts/macbeth', type: 'text' },
          { label: 'Romeo & Juliet Study Guide', href: '/revision/texts/romeo-and-juliet', type: 'text' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'Edexcel Lit Mock Exams', href: '/mock-exams?paper=edexcel-lit', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Post-1914 British Play or Novel',
        description: 'One essay question on your studied modern text (no extract provided).',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          { label: 'Animal Farm', href: '/revision/texts/animal-farm', type: 'text' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies', type: 'text' },
          { label: 'Blood Brothers', href: '/revision/texts/blood-brothers', type: 'text' },
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
        ],
      },
    ],
  },
  {
    id: 'edexcel-lit-p2',
    name: 'Literature Paper 2',
    subtitle: '19th-century Novel and Poetry since 1789',
    examCode: '1ET0/02',
    duration: '2h 15m',
    totalMarks: 100,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: 19th-century Novel',
        description: 'One extract-based question on your studied 19th-century novel.',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
        ],
      },
      {
        title: 'Section B: Poetry Anthology',
        description: 'One comparison question on a printed poem and one of your choice.',
        links: [
          { label: 'Edexcel Poetry Anthology', href: '/revision/poetry/edexcel', type: 'poetry' },
          { label: 'Conflict Cluster', href: '/revision/poetry/edexcel/conflict', type: 'poetry' },
          { label: 'Time and Place Cluster', href: '/revision/poetry/edexcel/time-and-place', type: 'poetry' },
        ],
      },
      {
        title: 'Section C: Unseen Poetry',
        description: 'Two questions on unseen poems: one analysis, one comparison.',
        links: [
          { label: 'Unseen Poetry Practice', href: '/revision/poetry/unseen-poetry', type: 'practice' },
          { label: 'Edexcel Lit Mock Exams', href: '/mock-exams?paper=edexcel-lit', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'edexcel-lang-p1',
    name: 'Language Paper 1',
    subtitle: 'Fiction and Imaginative Writing',
    examCode: '1EN0/01',
    duration: '1h 45m',
    totalMarks: 64,
    colour: 'sage',
    sections: [
      {
        title: 'Section A: Reading',
        description: 'Questions on one unseen 19th-century fiction extract.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'Edexcel Lang P1 Mock Exams', href: '/mock-exams?paper=edexcel-lang-p1', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Imaginative Writing',
        description: 'One imaginative writing task from a choice of two.',
        links: [
          { label: 'Creative Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Essay Structure', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
    ],
  },
  {
    id: 'edexcel-lang-p2',
    name: 'Language Paper 2',
    subtitle: 'Non-fiction and Transactional Writing',
    examCode: '1EN0/02',
    duration: '2h 05m',
    totalMarks: 96,
    colour: 'ochre',
    sections: [
      {
        title: 'Section A: Reading',
        description: 'Questions on two thematically linked non-fiction sources.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Comparison Technique', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'Edexcel Lang P2 Mock Exams', href: '/mock-exams?paper=edexcel-lang-p2', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Transactional Writing',
        description: 'Two transactional/discursive writing tasks.',
        links: [
          { label: 'Transactional Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── OCR GCSE ────────────────────────────────────────────────────────

const OCR_PAPERS: Paper[] = [
  {
    id: 'ocr-lit-c1',
    name: 'Literature Component 01',
    subtitle: 'Exploring Modern and Literary Heritage Texts',
    examCode: 'J352/01',
    duration: '2h',
    totalMarks: 80,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Modern Prose or Drama',
        description: 'One extract-based question on your studied modern text.',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          { label: 'Animal Farm', href: '/revision/texts/animal-farm', type: 'text' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies', type: 'text' },
          { label: 'Never Let Me Go', href: '/revision/texts/never-let-me-go', type: 'text' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Section B: 19th-century Prose',
        description: 'One essay question on your studied 19th-century novel.',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          { label: 'OCR Lit Mock Exams', href: '/mock-exams?paper=ocr-lit', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'ocr-lit-c2',
    name: 'Literature Component 02',
    subtitle: 'Poetry and Shakespeare',
    examCode: 'J352/02',
    duration: '2h',
    totalMarks: 80,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Poetry Anthology',
        description: 'One comparison question on a named poem and one of your choice.',
        links: [
          { label: 'OCR Poetry Anthology', href: '/revision/poetry/ocr', type: 'poetry' },
          { label: 'Conflict Cluster', href: '/revision/poetry/ocr/conflict', type: 'poetry' },
          { label: 'Love & Relationships', href: '/revision/poetry/ocr/love-and-relationships', type: 'poetry' },
          { label: 'Youth & Age', href: '/revision/poetry/ocr/youth-and-age', type: 'poetry' },
          { label: 'Power & Natural World', href: '/revision/poetry/ocr/power-and-natural-world', type: 'poetry' },
        ],
      },
      {
        title: 'Section B: Shakespeare',
        description: 'One extract-based question on your studied Shakespeare play.',
        links: [
          { label: 'Macbeth Study Guide', href: '/revision/texts/macbeth', type: 'text' },
          { label: 'Romeo & Juliet Study Guide', href: '/revision/texts/romeo-and-juliet', type: 'text' },
          { label: 'Unseen Poetry Practice', href: '/revision/poetry/unseen-poetry', type: 'practice' },
        ],
      },
      {
        title: 'Section C: Unseen Poetry',
        description: 'One analysis question on an unseen poem.',
        links: [
          { label: 'Unseen Poetry Practice', href: '/revision/poetry/unseen-poetry', type: 'practice' },
          { label: 'OCR Lit Mock Exams', href: '/mock-exams?paper=ocr-lit', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'ocr-lang-c1',
    name: 'Language Component 01',
    subtitle: 'Communicating Information and Ideas',
    examCode: 'J351/01',
    duration: '2h',
    totalMarks: 80,
    colour: 'sage',
    sections: [
      {
        title: 'Section A: Reading',
        description: 'Questions on unseen non-fiction and literary non-fiction texts.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'OCR Lang Mock Exams', href: '/mock-exams?paper=ocr-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing',
        description: 'Two writing tasks: one short and one extended piece of non-fiction writing.',
        links: [
          { label: 'Writing Skills Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'SPAG Guide', href: '/revision/language/spag', type: 'technique' },
        ],
      },
    ],
  },
  {
    id: 'ocr-lang-c2',
    name: 'Language Component 02',
    subtitle: 'Exploring Effects and Impact',
    examCode: 'J351/02',
    duration: '2h',
    totalMarks: 80,
    colour: 'ochre',
    sections: [
      {
        title: 'Section A: Reading',
        description: 'Questions on one unseen 19th-century literary fiction text.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Comparison Technique', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'OCR Lang Mock Exams', href: '/mock-exams?paper=ocr-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing',
        description: 'Two writing tasks: one short and one extended piece of fiction writing.',
        links: [
          { label: 'Creative Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── Eduqas (WJEC) GCSE ─────────────────────────────────────────────

const EDUQAS_PAPERS: Paper[] = [
  {
    id: 'eduqas-lit-c1',
    name: 'Literature Component 1',
    subtitle: 'Shakespeare and Poetry',
    examCode: 'C720U10-1',
    duration: '2h',
    totalMarks: 80,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Shakespeare',
        description: 'Two-part extract-based question on your studied Shakespeare play.',
        links: [
          { label: 'Macbeth Study Guide', href: '/revision/texts/macbeth', type: 'text' },
          { label: 'Romeo & Juliet Study Guide', href: '/revision/texts/romeo-and-juliet', type: 'text' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Section B: Poetry',
        description: 'Two poetry questions: one comparison from the anthology, one unseen.',
        links: [
          { label: 'Eduqas Poetry Anthology', href: '/revision/poetry/eduqas', type: 'poetry' },
          { label: 'Unseen Poetry Practice', href: '/revision/poetry/unseen-poetry', type: 'practice' },
          { label: 'Eduqas Lit Mock Exams', href: '/mock-exams?paper=eduqas-lit', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'eduqas-lit-c2',
    name: 'Literature Component 2',
    subtitle: 'Post-1914 Prose/Drama and 19th-century Prose',
    examCode: 'C720U20-1',
    duration: '2h 30m',
    totalMarks: 80,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Post-1914 Prose/Drama',
        description: 'Extract-based question on your studied modern text.',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          { label: 'Blood Brothers', href: '/revision/texts/blood-brothers', type: 'text' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies', type: 'text' },
          { label: 'Animal Farm', href: '/revision/texts/animal-farm', type: 'text' },
          { label: 'A View from the Bridge', href: '/revision/texts/a-view-from-the-bridge', type: 'text' },
        ],
      },
      {
        title: 'Section B: 19th-century Prose',
        description: 'Essay question on your studied 19th-century novel (no extract).',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          { label: 'Eduqas Lit Mock Exams', href: '/mock-exams?paper=eduqas-lit', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'eduqas-lang-c1',
    name: 'Language Component 1',
    subtitle: '20th-century Literature Reading and Creative Prose Writing',
    examCode: 'C700U10-1',
    duration: '1h 45m',
    totalMarks: 80,
    colour: 'sage',
    sections: [
      {
        title: 'Section A: Reading',
        description: 'Structured questions on one unseen 20th-century literature extract.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'Eduqas Lang Mock Exams', href: '/mock-exams?paper=eduqas-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Creative Prose Writing',
        description: 'One piece of creative prose writing from a choice of four titles.',
        links: [
          { label: 'Creative Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Essay Structure', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
    ],
  },
  {
    id: 'eduqas-lang-c2',
    name: 'Language Component 2',
    subtitle: '19th and 21st-century Non-fiction Reading and Transactional/Persuasive Writing',
    examCode: 'C700U20-1',
    duration: '2h',
    totalMarks: 80,
    colour: 'ochre',
    sections: [
      {
        title: 'Section A: Reading',
        description: 'Structured questions on two linked non-fiction texts from different centuries.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Comparison Technique', href: '/revision/exam-technique/essay-structure', type: 'technique' },
          { label: 'Eduqas Lang Mock Exams', href: '/mock-exams?paper=eduqas-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Transactional/Persuasive Writing',
        description: 'Two compulsory transactional writing tasks.',
        links: [
          { label: 'Transactional Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── Edexcel IGCSE Literature ────────────────────────────────────────

const EDEXCEL_IGCSE_PAPERS: Paper[] = [
  {
    id: 'igcse-lit-p1',
    name: 'Paper 1',
    subtitle: 'Poetry and Modern Prose',
    examCode: '4ET1/01',
    duration: '1h 30m',
    totalMarks: 60,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Poetry Anthology',
        description: 'One comparison question on a named poem and one of your choice.',
        links: [
          { label: 'IGCSE Poetry Anthology', href: '/revision/poetry/edexcel', type: 'poetry' },
          { label: 'Conflict Cluster', href: '/revision/poetry/edexcel/conflict', type: 'poetry' },
          { label: 'Time and Place Cluster', href: '/revision/poetry/edexcel/time-and-place', type: 'poetry' },
          { label: 'IGCSE Lit Mock Exams', href: '/mock-exams?paper=igcse-lit', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Modern Prose',
        description: 'One extract-based question on your studied modern prose text.',
        links: [
          { label: 'Of Mice and Men', href: '/revision/texts/of-mice-and-men', type: 'text' },
          { label: 'To Kill a Mockingbird', href: '/revision/texts/to-kill-a-mockingbird', type: 'text' },
          { label: 'Animal Farm', href: '/revision/texts/animal-farm', type: 'text' },
          { label: 'Things Fall Apart', href: '/revision/texts/things-fall-apart', type: 'text' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
    ],
  },
  {
    id: 'igcse-lit-p2',
    name: 'Paper 2',
    subtitle: 'Drama and Literary Heritage Texts',
    examCode: '4ET1/02',
    duration: '1h 30m',
    totalMarks: 60,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Drama',
        description: 'One essay question on your studied drama text (no extract).',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          { label: 'Romeo & Juliet', href: '/revision/texts/romeo-and-juliet', type: 'text' },
          { label: 'Macbeth', href: '/revision/texts/macbeth', type: 'text' },
          { label: 'A View from the Bridge', href: '/revision/texts/a-view-from-the-bridge', type: 'text' },
        ],
      },
      {
        title: 'Section B: Literary Heritage Text',
        description: 'One extract-based question on your studied heritage prose text.',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'IGCSE Lit Mock Exams', href: '/mock-exams?paper=igcse-lit', type: 'mock' },
        ],
      },
    ],
  },
]

// ─── Cambridge 0500 (A*-G) ──────────────────────────────────────────

const CAMBRIDGE_0500_PAPERS: Paper[] = [
  {
    id: 'cam0500-p1',
    name: 'Paper 1',
    subtitle: 'Reading',
    examCode: '0500/12',
    duration: '2h',
    totalMarks: 80,
    colour: 'teal',
    sections: [
      {
        title: 'Question 1: Directed Writing',
        description: 'Read a passage and respond to it in a directed writing task (e.g. letter, report).',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Cambridge Reading Hub', href: '/igcse/cambridge/reading', type: 'technique' },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
      {
        title: 'Question 2: Writer\'s Effect',
        description: 'Analyse how language is used for effect in a passage.',
        links: [
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Question 3: Summary',
        description: 'Write a summary using information from two passages.',
        links: [
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
  {
    id: 'cam0500-p2',
    name: 'Paper 2',
    subtitle: 'Writing',
    examCode: '0500/22',
    duration: '2h',
    totalMarks: 80,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Argumentative/Discursive',
        description: 'One argumentative, discursive, or persuasive writing task.',
        links: [
          { label: 'Transactional Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Essay Structure', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Section B: Descriptive/Narrative',
        description: 'One descriptive or narrative composition task.',
        links: [
          { label: 'Creative Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'SPAG Guide', href: '/revision/language/spag', type: 'technique' },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
    ],
  },
]

// ─── Cambridge 0990 (9-1) ───────────────────────────────────────────

const CAMBRIDGE_0990_PAPERS: Paper[] = [
  {
    id: 'cam0990-p1',
    name: 'Paper 1',
    subtitle: 'Reading',
    examCode: '0990/12',
    duration: '2h',
    totalMarks: 80,
    colour: 'teal',
    sections: [
      {
        title: 'Question 1: Directed Writing',
        description: 'Read a passage and respond to it in a directed writing task.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Cambridge Reading Hub', href: '/igcse/cambridge/reading', type: 'technique' },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
      {
        title: 'Question 2: Writer\'s Effect',
        description: 'Analyse how language is used for effect in a passage.',
        links: [
          { label: 'Question Types', href: '/revision/exam-technique/question-types', type: 'technique' },
          { label: 'Essay Structure Guide', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Question 3: Summary',
        description: 'Write a summary comparing information from two passages.',
        links: [
          { label: 'Time Management', href: '/revision/exam-technique/time-management', type: 'technique' },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
  {
    id: 'cam0990-p2',
    name: 'Paper 2',
    subtitle: 'Writing',
    examCode: '0990/22',
    duration: '2h',
    totalMarks: 80,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Argumentative/Discursive',
        description: 'One argumentative, discursive, or persuasive writing task.',
        links: [
          { label: 'Transactional Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'Essay Structure', href: '/revision/exam-technique/essay-structure', type: 'technique' },
        ],
      },
      {
        title: 'Section B: Descriptive/Narrative',
        description: 'One descriptive or narrative composition task.',
        links: [
          { label: 'Creative Writing Guide', href: '/revision/language/writing', type: 'technique' },
          { label: 'SPAG Guide', href: '/revision/language/spag', type: 'technique' },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
    ],
  },
]

// ─── Lookup ──────────────────────────────────────────────────────────

const ALL_BOARD_PAPERS: BoardPapers[] = [
  { board: 'aqa', papers: AQA_PAPERS },
  { board: 'edexcel', papers: EDEXCEL_PAPERS },
  { board: 'ocr', papers: OCR_PAPERS },
  { board: 'eduqas', papers: EDUQAS_PAPERS },
  { board: 'edexcel-igcse', papers: EDEXCEL_IGCSE_PAPERS },
  { board: 'cambridge-0500', papers: CAMBRIDGE_0500_PAPERS },
  { board: 'cambridge-0990', papers: CAMBRIDGE_0990_PAPERS },
]

export function getPapersForBoard(board: ExamBoard): Paper[] {
  return ALL_BOARD_PAPERS.find((bp) => bp.board === board)?.papers ?? []
}

export { ALL_BOARD_PAPERS }
