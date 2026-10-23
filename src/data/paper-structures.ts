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
          {
            label: 'Romeo & Juliet Study Guide',
            href: '/revision/texts/romeo-and-juliet',
            type: 'text',
          },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          { label: 'Lit Paper 1 Mock Exams', href: '/mock-exams?paper=aqa-lit-p1', type: 'mock' },
        ],
      },
      {
        title: 'Section B: 19th-century Novel',
        description: 'One question on your studied 19th-century novel with an extract and essay.',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          { label: 'Frankenstein', href: '/revision/texts/frankenstein', type: 'text' }, // TODO: page not yet built
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
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
          {
            label: 'A View from the Bridge',
            href: '/revision/texts/a-view-from-the-bridge',
            type: 'text',
          },
          { label: 'Pigeon English', href: '/revision/texts/pigeon-english', type: 'text' },
          { label: 'Anita and Me', href: '/revision/texts/anita-and-me', type: 'text' },
          { label: 'Curious Incident', href: '/revision/texts/curious-incident', type: 'text' },
        ],
      },
      {
        title: 'Section B: Poetry Anthology',
        description:
          'One comparison question on a named poem and one of your choice from the cluster.',
        links: [
          {
            label: 'Power & Conflict Poems',
            href: '/revision/poetry/power-and-conflict',
            type: 'poetry',
          },
          {
            label: 'Love & Relationships Poems',
            href: '/revision/poetry/love-and-relationships',
            type: 'poetry',
          },
          {
            label: 'Poetry Comparison Technique',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
      {
        title: 'Section C: Unseen Poetry',
        description:
          'Two questions: one analysis of an unseen poem, one comparison of two unseen poems.',
        links: [
          {
            label: 'Unseen Poetry Practice',
            href: '/revision/poetry/unseen-poetry',
            type: 'practice',
          },
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
          {
            label: 'Question Types Breakdown',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          { label: 'Lang Paper 1 Mock Exams', href: '/mock-exams?paper=aqa-lang-p1', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing (Q5)',
        description: 'One creative writing task: descriptive or narrative writing.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Essay Structure',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
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
          {
            label: 'Comparison Technique',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'Lang Paper 2 Mock Exams', href: '/mock-exams?paper=aqa-lang-p2', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing (Q5)',
        description: 'One transactional writing task: article, letter, speech, or essay.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
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
          {
            label: 'Romeo & Juliet Study Guide',
            href: '/revision/texts/romeo-and-juliet',
            type: 'text',
          },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
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
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
        ],
      },
    ],
  },
  // Corrected 2 October 2026 against Pearson's specification (1ET0, Issue 2): totalMarks
  // read 100 (it is 80), and a "Section C: Unseen Poetry" of two questions, one analysis and
  // one comparison, stood in for Section B Part 2, one comparison of two unseen poems.
  {
    id: 'edexcel-lit-p2',
    name: 'Literature Paper 2',
    subtitle: '19th-century Novel and Poetry since 1789',
    examCode: '1ET0/02',
    duration: '2h 15m',
    totalMarks: 80,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: 19th-century Novel',
        description:
          'One two-part question on your studied 19th-century novel: (a) a printed extract, (b) the novel as a whole.',
        links: [
          { label: 'A Christmas Carol', href: '/revision/texts/a-christmas-carol', type: 'text' },
          { label: 'Jekyll & Hyde', href: '/revision/texts/jekyll-and-hyde', type: 'text' },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
        ],
      },
      {
        title: 'Section B Part 1: Poetry Anthology',
        description:
          'One comparison question on a printed poem and one of your choice from the same collection.',
        links: [
          { label: 'Edexcel Poetry Anthology', href: '/revision/poetry/edexcel', type: 'poetry' },
          {
            label: 'Conflict Collection',
            href: '/revision/poetry/edexcel/conflict',
            type: 'poetry',
          },
          {
            label: 'Time and Place Collection',
            href: '/revision/poetry/edexcel/time-and-place',
            type: 'poetry',
          },
        ],
      },
      {
        title: 'Section B Part 2: Unseen Poetry',
        description: 'One question comparing two unseen poems linked by a theme.',
        links: [
          {
            label: 'Unseen Poetry Practice',
            href: '/revision/poetry/unseen-poetry',
            type: 'practice',
          },
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
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          {
            label: 'Edexcel Lang P1 Mock Exams',
            href: '/mock-exams?paper=edexcel-lang-p1',
            type: 'mock',
          },
        ],
      },
      {
        title: 'Section B: Imaginative Writing',
        description: 'One imaginative writing task from a choice of two.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Essay Structure',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
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
          {
            label: 'Comparison Technique',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Edexcel Lang P2 Mock Exams',
            href: '/mock-exams?paper=edexcel-lang-p2',
            type: 'mock',
          },
        ],
      },
      {
        title: 'Section B: Transactional Writing',
        description: 'Two transactional/discursive writing tasks.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── OCR GCSE ────────────────────────────────────────────────────────
//
// CORRECTED 2 October 2026 against the J352 specification, Version 3.0, and
// OCR's own set-text page. Component 01 listed Lord of the Flies, which OCR
// does not set. Component 02 linked a "Power and the Natural World" cluster
// OCR has never had, described the poetry as a named poem compared with one of
// the student's choice, and gave the paper a "Section C: Unseen Poetry" it does
// not have: the unseen poem is part (a) of Section A, compared with a poem from
// the student's cluster. See src/lib/board/ocr-anthology.ts.

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
          { label: 'Never Let Me Go', href: '/revision/texts/never-let-me-go', type: 'text' },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
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
        title: 'Section A: Poetry across time',
        description:
          'One question on your cluster, in two parts: (a) compare a poem from it with an unseen poem; (b) explore one other poem from the anthology.',
        links: [
          { label: 'OCR Poetry Anthology', href: '/revision/poetry/ocr', type: 'poetry' },
          { label: 'Conflict Cluster', href: '/revision/poetry/ocr/conflict', type: 'poetry' },
          {
            label: 'Love & Relationships',
            href: '/revision/poetry/ocr/love-and-relationships',
            type: 'poetry',
          },
          { label: 'Youth & Age', href: '/revision/poetry/ocr/youth-and-age', type: 'poetry' },
          {
            label: 'Unseen Poetry Practice',
            href: '/revision/poetry/unseen-poetry',
            type: 'practice',
          },
        ],
      },
      {
        title: 'Section B: Shakespeare',
        description: 'One extract-based question on your studied Shakespeare play.',
        links: [
          { label: 'Macbeth Study Guide', href: '/revision/texts/macbeth', type: 'text' },
          {
            label: 'Romeo & Juliet Study Guide',
            href: '/revision/texts/romeo-and-juliet',
            type: 'text',
          },
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
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
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
          {
            label: 'Comparison Technique',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'OCR Lang Mock Exams', href: '/mock-exams?paper=ocr-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Writing',
        description: 'Two writing tasks: one short and one extended piece of fiction writing.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── Eduqas (WJEC) GCSE ─────────────────────────────────────────────
//
// CORRECTED 2 October 2026 against the Eduqas specification, Version 4, August
// 2024. Component 1 Section B is two questions on the anthology, one of them a
// comparison; it was described as "one comparison from the anthology, one
// unseen". The unseen poetry is Component 2 Section C, which was missing, so
// Component 2 showed 80 marks rather than 120. Component 2 also listed Animal
// Farm and A View from the Bridge, which Eduqas does not set.

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
          {
            label: 'Romeo & Juliet Study Guide',
            href: '/revision/texts/romeo-and-juliet',
            type: 'text',
          },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
      {
        title: 'Section B: Poetry',
        description:
          'Two questions on the anthology: one on a named poem, then a second poem of your choice compared with it.',
        links: [
          { label: 'Eduqas Poetry Anthology', href: '/revision/poetry/eduqas', type: 'poetry' },
          { label: 'Eduqas Lit Mock Exams', href: '/mock-exams?paper=eduqas-lit', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'eduqas-lit-c2',
    name: 'Literature Component 2',
    subtitle: 'Post-1914 Prose/Drama, 19th-century Prose and Unseen Poetry',
    examCode: 'C720U20-1',
    duration: '2h 30m',
    totalMarks: 120,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Post-1914 Prose/Drama',
        description: 'Extract-based question on your studied modern text.',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          { label: 'Blood Brothers', href: '/revision/texts/blood-brothers', type: 'text' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies', type: 'text' },
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
      {
        title: 'Section C: Unseen Poetry',
        description:
          'Two questions on unseen poems from the 20th or 21st century, one a comparison.',
        links: [
          {
            label: 'Unseen Poetry Practice',
            href: '/revision/poetry/unseen-poetry',
            type: 'practice',
          },
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
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          { label: 'Eduqas Lang Mock Exams', href: '/mock-exams?paper=eduqas-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Creative Prose Writing',
        description: 'One piece of creative prose writing from a choice of four titles.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Essay Structure',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
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
        description:
          'Structured questions on two linked non-fiction texts from different centuries.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          {
            label: 'Comparison Technique',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'Eduqas Lang Mock Exams', href: '/mock-exams?paper=eduqas-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Transactional/Persuasive Writing',
        description: 'Two compulsory transactional writing tasks.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
]

// ─── Edexcel IGCSE Literature ────────────────────────────────────────

// Paper 1 CORRECTED 10 October 2026 against the 4ET1 specification (Issue 3,
// Component 1) and the question papers from the specimen to June 2025. It gave
// the paper as 1h 30m and 60 marks (it is 2 hours and 90), left out the unseen
// poem (Section A), and put the anthology in Section A with "one comparison
// question on a named poem and one of your choice", which is only one of the
// two questions Section B offers. Its anthology links went to the clusters of
// the UK GCSE (1ET0) anthology, which 4ET1 does not set, and its prose section
// was called extract-based (the paper prints no extract) and listed Animal
// Farm, which is not a 4ET1 text.
const EDEXCEL_IGCSE_PAPERS: Paper[] = [
  {
    id: 'igcse-lit-p1',
    name: 'Paper 1',
    subtitle: 'Poetry and Modern Prose',
    examCode: '4ET1/01',
    duration: '2h',
    totalMarks: 90,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Unseen Poetry',
        description: 'One question on a single unseen poem, printed in the paper. No comparison.',
        links: [
          { label: 'Unseen Poetry', href: '/igcse/edexcel/unseen-poetry', type: 'technique' },
        ],
      },
      {
        title: 'Section B: Anthology Poetry',
        description:
          'One question from a choice of two, both comparing two Part 3 poems: one names both, the other names one and you choose the second.',
        links: [
          { label: 'IGCSE Anthology Poetry', href: '/igcse/edexcel/poetry', type: 'poetry' },
          { label: 'IGCSE Lit Mock Exams', href: '/mock-exams?paper=igcse-lit', type: 'mock' },
        ],
      },
      {
        title: 'Section C: Modern Prose',
        description:
          'One essay question, from a choice of two, on your studied modern prose text. Closed book.',
        links: [
          { label: 'Of Mice and Men', href: '/revision/texts/of-mice-and-men', type: 'text' },
          {
            label: 'To Kill a Mockingbird',
            href: '/revision/texts/to-kill-a-mockingbird',
            type: 'text',
          },
          { label: 'Things Fall Apart', href: '/revision/texts/things-fall-apart', type: 'text' },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
    ],
  },
  // Paper 2 CORRECTED 10 October 2026 against the specification (Issue 3, PDF
  // pp11, 14 and 19), the Paper 2 question papers of May 2023 and May 2024 (2
  // and 2R) and src/lib/board/edexcel-igcse-literature.ts. Section A listed
  // Romeo and Juliet and Macbeth, which are literary heritage texts; Section B
  // was "one extract-based question on your studied heritage prose text" and
  // linked A Christmas Carol and Jekyll and Hyde, which 4ET1 does not set. Each
  // section is one 30-mark essay from a choice of two on each text, with no
  // extract; Section B's six texts are three plays and three novels, and it
  // alone assesses context. The paper is open book: clean copies of the set
  // texts may be taken in. The links are the eleven Paper 2 set texts.
  {
    id: 'igcse-lit-p2',
    name: 'Paper 2',
    subtitle: 'Modern Drama and Literary Heritage Texts',
    examCode: '4ET1/02',
    duration: '1h 30m',
    totalMarks: 60,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Modern Drama',
        description:
          'One essay question, from a choice of two, on your studied play (no extract). Open book: a clean copy of the play is allowed.',
        links: [
          { label: 'An Inspector Calls', href: '/revision/texts/an-inspector-calls', type: 'text' },
          {
            label: 'A View from the Bridge',
            href: '/revision/texts/a-view-from-the-bridge',
            type: 'text',
          },
          {
            label: 'The Curious Incident of the Dog in the Night-time',
            href: '/revision/texts/curious-incident',
            type: 'text',
          },
          { label: 'Kindertransport', href: '/revision/texts/kindertransport', type: 'text' },
          {
            label: "Death and the King's Horseman",
            href: '/revision/texts/death-and-the-kings-horseman',
            type: 'text',
          },
        ],
      },
      {
        title: 'Section B: Literary Heritage Texts',
        description:
          'One essay question, from a choice of two, on your studied Shakespeare play or novel (no extract), with context assessed. Open book: a clean copy of the text is allowed.',
        links: [
          { label: 'Romeo & Juliet', href: '/revision/texts/romeo-and-juliet', type: 'text' },
          { label: 'Macbeth', href: '/revision/texts/macbeth', type: 'text' },
          {
            label: 'The Merchant of Venice',
            href: '/revision/texts/the-merchant-of-venice',
            type: 'text',
          },
          {
            label: 'Pride and Prejudice',
            href: '/revision/texts/pride-and-prejudice',
            type: 'text',
          },
          { label: 'Great Expectations', href: '/revision/texts/great-expectations', type: 'text' },
          { label: 'The Scarlet Letter', href: '/revision/texts/the-scarlet-letter', type: 'text' },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          { label: 'IGCSE Lit Mock Exams', href: '/mock-exams?paper=igcse-lit', type: 'mock' },
        ],
      },
    ],
  },
]

// ─── Cambridge 0500 (A*-G) ──────────────────────────────────────────
//
// CORRECTED 23 October 2026 against Cambridge's own syllabuses. Paper 1 was
// shown as "Question 1: Directed Writing", "Question 2: Writer's Effect" and
// "Question 3: Summary ... from two passages". No 0500 syllabus has that paper.
// Directed writing is Paper 2 Section A, and the summary is one task on ONE
// text (Text B).
//
// WHICH SYLLABUS. The structure below is the syllabus for examination in 2027,
// 2028 and 2029 (Version 1, cambridgeinternational.org/Images/718783-2027-2029-
// syllabus.pdf, pages 13-17), which is what src/lib/marking/mark-schemes/
// cambridge-0500.ts already marks against: Paper 1 is FOUR questions of 20.
// The 2024-2026 syllabus (Version 1, published September 2021,
// cambridgeinternational.org/Images/635230-2024-2026-syllabus.pdf, pages
// 13-15), which a November 2026 candidate still sits, has THREE Paper 1
// questions: Q1 Comprehension and summary (30, Texts A and B), Q2 Short-answer
// questions and language task (25, Text C), Q3 Extended response to reading
// (25, Text C); and a single directed writing task in Paper 2 Section A. One
// structure per paper cannot show both, and the expiring one would be wrong
// for almost every reader, so it is recorded here rather than rendered.
//
// 0990 below mirrors 0500. The 0990 2027-2029 document was not re-read on 23
// October 2026; the two were verified as the same papers under different
// grading on 19 September 2026 (cambridge-0500-matches-the-syllabus.test.ts,
// mark-schemes/cambridge-0990.ts), and nothing read since contradicts that.

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
        title: 'Question 1: Comprehension (20 marks)',
        description:
          'Short answers on Text A, testing understanding of explicit and implicit meanings.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'Cambridge Reading Hub', href: '/igcse/cambridge/reading', type: 'technique' },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
      {
        title: 'Question 2: Summary task (20 marks)',
        description:
          'On Text B: 2(a) a selective summary in your own words of no more than 120 words; 2(b) a short answer on attitudes and opinions.',
        links: [
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
      {
        title: 'Question 3: Short-answer questions and language task (20 marks)',
        description:
          'On Text C: short answers, then about 200-250 words on how the writer achieves effects.',
        links: [
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
      {
        title: 'Question 4: Extended response to reading (20 marks)',
        description:
          'About 250-300 words on Text C as a letter, report, journal, speech, interview or article.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'cam0500-p2',
    name: 'Paper 2',
    subtitle: 'Directed Writing and Composition',
    examCode: '0500/22',
    duration: '2h',
    totalMarks: 80,
    colour: 'clay',
    sections: [
      {
        title: 'Section A: Directed Writing (40 marks)',
        description:
          'One question in two parts on one or two texts: 1(a) a structured question on the text(s) (5 marks); 1(b) a discursive, argumentative or persuasive speech, letter, article or report of about 250-350 words using them.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Essay Structure',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
      {
        title: 'Section B: Composition (40 marks)',
        description:
          'One composition of about 350-450 words from a choice of four titles: two descriptive and two narrative.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          { label: 'SPAG Guide', href: '/revision/language/spag', type: 'technique' },
          { label: 'Cambridge Mock Exams', href: '/mock-exams?paper=cambridge', type: 'mock' },
        ],
      },
    ],
  },
]

// ─── Cambridge 0990 (9-1) ───────────────────────────────────────────
//
// The same papers as 0500 under 9-1 grading (see the 0500 note above for the
// basis). Derived from the 0500 structure so the two cannot drift apart, which
// is how the old wrong Paper 1 came to exist twice.

const CAMBRIDGE_0990_PAPERS: Paper[] = CAMBRIDGE_0500_PAPERS.map((paper) => ({
  ...paper,
  id: paper.id.replace('cam0500', 'cam0990'),
  examCode: paper.examCode.replace('0500', '0990'),
}))

// ─── Edexcel IGCSE Language (4EA1) ──────────────────────────────────

const EDEXCEL_IGCSE_LANG_PAPERS: Paper[] = [
  {
    id: 'igcse-lang-p1',
    name: 'Paper 1',
    subtitle: 'Non-fiction Texts and Transactional Writing',
    examCode: '4EA1/01',
    duration: '2h 15m',
    totalMarks: 90,
    colour: 'sage',
    sections: [
      {
        title: 'Section A: Reading Non-fiction',
        description:
          'Questions on two non-fiction passages - comprehension, language analysis, comparison.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
          { label: 'IGCSE Lang Mock Exams', href: '/mock-exams?paper=igcse-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Transactional Writing',
        description:
          'One transactional writing task (letter, article, report, or speech) based on the reading material.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Essay Structure',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
        ],
      },
    ],
  },
  {
    id: 'igcse-lang-p2',
    name: 'Paper 2',
    subtitle: 'Poetry and Prose Texts and Imaginative Writing',
    examCode: '4EA1/02',
    duration: '1h 30m',
    totalMarks: 60,
    colour: 'ochre',
    sections: [
      {
        title: 'Section A: Reading Poetry and Prose',
        description:
          'Questions on an unseen poem and an unseen prose extract - language, structure and meaning.',
        links: [
          {
            label: 'Unseen Poetry Practice',
            href: '/revision/poetry/unseen-poetry',
            type: 'practice',
          },
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          { label: 'IGCSE Lang Mock Exams', href: '/mock-exams?paper=igcse-lang', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Imaginative Writing',
        description: 'One imaginative/creative writing task from a choice of titles.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
        ],
      },
    ],
  },
]

// ─── Cambridge IGCSE Literature (0475) ─────────────────────────────

const CAMBRIDGE_0475_PAPERS: Paper[] = [
  {
    id: 'cam0475-p1',
    name: 'Paper 1',
    subtitle: 'Poetry and Prose',
    examCode: '0475/12',
    duration: '1h 30m',
    totalMarks: 50,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Poetry',
        description: 'One essay question on a studied poetry text or poems from the set anthology.',
        links: [
          {
            label: 'Poetry Analysis Guide',
            href: '/revision/poetry/unseen-poetry',
            type: 'poetry',
          },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Cambridge Lit Mock Exams',
            href: '/mock-exams?paper=cambridge-lit',
            type: 'mock',
          },
        ],
      },
      {
        title: 'Section B: Prose',
        description: 'One essay question on a studied prose text. Extract-based or essay format.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
        ],
      },
    ],
  },
  // Papers 2 and 3 corrected 23 October 2026 against the 0475 syllabus for
  // examination in 2027 (Version 2, published October 2024), pages 8 and 13-15.
  // Paper 2 said "One essay question on a studied drama text": it is two
  // questions on two different set texts, one passage-based and one essay.
  // "Paper 3" was labelled Coursework: Paper 3 is Drama (Open Text), 45 minutes
  // and 25 marks, on ONE set text; coursework is Component 5, taken with Paper
  // 3, and Paper 4 is Unseen. The 2028-2030 syllabus replaces this structure
  // (one Paper 2, Drama and Unseen): see src/lib/board/cambridge-0475.ts.
  {
    id: 'cam0475-p2',
    name: 'Paper 2',
    subtitle: 'Drama',
    examCode: '0475/22',
    duration: '1h 30m',
    totalMarks: 50,
    colour: 'clay',
    sections: [
      {
        title: 'Drama',
        description:
          'Two questions on two different set texts: one passage-based and one essay (25 marks each). Taken instead of Paper 3.',
        links: [
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Time Management',
            href: '/revision/exam-technique/time-management',
            type: 'technique',
          },
          {
            label: 'Cambridge Lit Mock Exams',
            href: '/mock-exams?paper=cambridge-lit',
            type: 'mock',
          },
        ],
      },
    ],
  },
  {
    id: 'cam0475-p3',
    name: 'Paper 3',
    subtitle: 'Drama (Open Text)',
    examCode: '0475 Paper 3',
    duration: '45m',
    totalMarks: 25,
    colour: 'ochre',
    sections: [
      {
        title: 'Drama (Open Text)',
        description:
          'One question from a choice of two on ONE set text, from the same list as Paper 2. Clean copies of the set text may be taken in. Taken with Paper 4 or Component 5, instead of Paper 2.',
        links: [
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Cambridge Lit Mock Exams',
            href: '/mock-exams?paper=cambridge-lit',
            type: 'mock',
          },
        ],
      },
    ],
  },
  {
    id: 'cam0475-p4',
    name: 'Paper 4',
    subtitle: 'Unseen',
    examCode: '0475 Paper 4',
    duration: '1h 15m',
    totalMarks: 25,
    colour: 'ink',
    sections: [
      {
        title: 'Unseen',
        description:
          'One question requiring critical commentary on an unseen text. Taken with Paper 3, instead of Component 5.',
        links: [
          {
            label: 'Poetry Analysis Guide',
            href: '/revision/poetry/unseen-poetry',
            type: 'poetry',
          },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
        ],
      },
    ],
  },
  {
    id: 'cam0475-c5',
    name: 'Component 5',
    subtitle: 'Coursework',
    examCode: '0475 Component 5',
    duration: 'Coursework',
    totalMarks: 25,
    colour: 'sage',
    sections: [
      {
        title: 'Coursework Portfolio',
        description:
          'Portfolio of two assignments, each on a different text. Internally assessed and externally moderated. Taken with Paper 3, instead of Paper 4.',
        links: [
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
        ],
      },
    ],
  },
]

// ─── International A-Level Edexcel ─────────────────────────────────

const IAL_EDEXCEL_PAPERS: Paper[] = [
  {
    id: 'ial-unit1',
    name: 'Unit 1',
    subtitle: 'Post-2000 Poetry and Prose',
    examCode: 'WEN01/01',
    duration: '2h 15m',
    totalMarks: 80,
    colour: 'teal',
    sections: [
      {
        title: 'Section A: Post-2000 Poetry',
        description: 'One comparative essay question on an unseen poem and a studied collection.',
        links: [
          {
            label: 'Unseen Poetry Practice',
            href: '/revision/poetry/unseen-poetry',
            type: 'practice',
          },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'IAL Mock Exams', href: '/mock-exams?paper=ial', type: 'mock' },
        ],
      },
      {
        title: 'Section B: Post-2000 Prose',
        description:
          'One essay question on a studied prose text - close reading and wider textual knowledge.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
        ],
      },
    ],
  },
  {
    id: 'ial-unit2',
    name: 'Unit 2',
    subtitle: 'Drama',
    examCode: 'WEN02/01',
    duration: '1h 30m',
    totalMarks: 60,
    colour: 'clay',
    sections: [
      {
        title: 'Drama',
        description:
          'One essay question on a studied drama text. Extract-based or discursive question.',
        links: [
          { label: 'Macbeth Study Guide', href: '/revision/texts/macbeth', type: 'text' },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'IAL Mock Exams', href: '/mock-exams?paper=ial', type: 'mock' },
        ],
      },
    ],
  },
  {
    id: 'ial-unit3',
    name: 'Unit 3',
    subtitle: 'Coursework / Extended Essay',
    examCode: 'WEN03/01',
    duration: 'Coursework',
    totalMarks: 60,
    colour: 'sage',
    sections: [
      {
        title: 'Coursework Portfolio',
        description:
          'Two essays: one re-creative piece with commentary and one comparative essay across two texts.',
        links: [
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
        ],
      },
    ],
  },
]

// ─── KS3 ───────────────────────────────────────────────────────────

const KS3_PAPERS: Paper[] = [
  {
    id: 'ks3-reading',
    name: 'Reading Skills',
    subtitle: 'Comprehension, inference and analysis',
    examCode: 'KS3',
    duration: 'Ongoing',
    totalMarks: 0,
    colour: 'teal',
    sections: [
      {
        title: 'Fiction Reading',
        description: 'Analyse fiction extracts - character, setting, language and structure.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          {
            label: 'Question Types',
            href: '/revision/exam-technique/question-types',
            type: 'technique',
          },
        ],
      },
      {
        title: 'Non-fiction Reading',
        description: 'Understand and compare non-fiction texts - articles, speeches, letters.',
        links: [
          { label: 'Reading Skills Guide', href: '/revision/language/reading', type: 'technique' },
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-writing',
    name: 'Writing Skills',
    subtitle: 'Creative, transactional and analytical writing',
    examCode: 'KS3',
    duration: 'Ongoing',
    totalMarks: 0,
    colour: 'clay',
    sections: [
      {
        title: 'Creative Writing',
        description:
          'Develop narrative and descriptive writing with vocabulary and structural variety.',
        links: [
          {
            label: 'Creative Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          { label: 'SPAG Guide', href: '/revision/language/spag', type: 'technique' },
        ],
      },
      {
        title: 'Transactional Writing',
        description: 'Write for purpose and audience - letters, articles, speeches and reviews.',
        links: [
          {
            label: 'Transactional Writing Guide',
            href: '/revision/language/writing',
            type: 'technique',
          },
          {
            label: 'Essay Structure',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
        ],
      },
    ],
  },
  {
    id: 'ks3-speaking',
    name: 'Speaking & Listening',
    subtitle: 'Oral communication and presentation skills',
    examCode: 'KS3',
    duration: 'Ongoing',
    totalMarks: 0,
    colour: 'sage',
    sections: [
      {
        title: 'Speaking & Listening',
        description:
          'Practise presentations, debates and discussion skills for classroom assessment.',
        links: [
          {
            label: 'Essay Structure Guide',
            href: '/revision/exam-technique/essay-structure',
            type: 'technique',
          },
          { label: 'Practice Questions', href: '/revision/quiz', type: 'practice' },
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
  { board: 'edexcel-igcse-lang', papers: EDEXCEL_IGCSE_LANG_PAPERS },
  { board: 'cambridge-0500', papers: CAMBRIDGE_0500_PAPERS },
  { board: 'cambridge-0990', papers: CAMBRIDGE_0990_PAPERS },
  { board: 'cambridge-0475', papers: CAMBRIDGE_0475_PAPERS },
  { board: 'ial-edexcel', papers: IAL_EDEXCEL_PAPERS },
  { board: 'ks3', papers: KS3_PAPERS },
]

export function getPapersForBoard(board: ExamBoard): Paper[] {
  return ALL_BOARD_PAPERS.find((bp) => bp.board === board)?.papers ?? []
}

export { ALL_BOARD_PAPERS }
