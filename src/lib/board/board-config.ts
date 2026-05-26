// Server-safe board config + data.
// This file has NO 'use client' so it can be imported by both server and client components.
// The zustand store in ./board-store.ts re-exports these types/values for client code.

export type ExamBoard =
  | 'ks3'
  | 'aqa'
  | 'edexcel'
  | 'ocr'
  | 'eduqas'
  | 'edexcel-igcse'
  | 'edexcel-igcse-lang'
  | 'cambridge-0500'
  | 'cambridge-0990'
  | 'cambridge-0475'
  | 'ial-edexcel'
  | 'aqa-a-level'
  | 'edexcel-a-level'
  | 'ocr-a-level'
  | 'eduqas-a-level'

export type BoardCategory =
  | 'ks3'
  | 'gcse'
  | 'igcse-literature'
  | 'igcse-language-a'
  | 'igcse-language-b'
  | 'igcse-language'
  | 'ial'
  | 'a-level'

export type BoardConfig = {
  id: ExamBoard
  name: string
  fullName: string
  shortName: string
  type: 'ks3' | 'gcse' | 'igcse' | 'ial' | 'a-level'
  examCode: string
  category: BoardCategory
  description: string
}

export const BOARDS: readonly BoardConfig[] = [
  {
    id: 'ks3',
    name: 'KS3',
    shortName: 'KS3',
    fullName: 'Key Stage 3 English',
    type: 'ks3',
    examCode: 'KS3',
    category: 'ks3',
    description: 'Years 7-9 foundation English',
  },
  {
    id: 'aqa',
    name: 'AQA',
    shortName: 'AQA',
    fullName: 'AQA GCSE English Literature & Language',
    type: 'gcse',
    examCode: 'AQA',
    category: 'gcse',
    description: 'Most popular UK exam board for GCSE English',
  },
  {
    id: 'edexcel',
    name: 'Edexcel',
    shortName: 'Edexcel',
    fullName: 'Pearson Edexcel GCSE English Literature & Language',
    type: 'gcse',
    examCode: 'Edexcel',
    category: 'gcse',
    description: 'Pearson Edexcel GCSE English courses',
  },
  {
    id: 'ocr',
    name: 'OCR',
    shortName: 'OCR',
    fullName: 'OCR GCSE English Literature & Language',
    type: 'gcse',
    examCode: 'OCR',
    category: 'gcse',
    description: 'Oxford Cambridge and RSA GCSE English',
  },
  {
    id: 'eduqas',
    name: 'Eduqas',
    shortName: 'Eduqas',
    fullName: 'WJEC Eduqas GCSE English Literature & Language',
    type: 'gcse',
    examCode: 'Eduqas',
    category: 'gcse',
    description: 'WJEC Eduqas single-anthology GCSE',
  },
  {
    id: 'edexcel-igcse',
    name: 'Edexcel IGCSE Literature (4ET1)',
    shortName: 'IGCSE Lit',
    fullName: 'IGCSE English Literature',
    type: 'igcse',
    examCode: '4ET1',
    category: 'igcse-literature',
    description: 'International GCSE - Pearson Edexcel Literature',
  },
  // TODO: edexcel-igcse-lang - content not yet built; currently falls back to edexcel-igcse filtering
  {
    id: 'edexcel-igcse-lang',
    name: 'Edexcel IGCSE Language (4EA1)',
    shortName: 'IGCSE Lang',
    fullName: 'IGCSE English Language',
    type: 'igcse',
    examCode: '4EA1',
    category: 'igcse-language',
    description: 'International GCSE - Pearson Edexcel Language',
  },
  {
    id: 'cambridge-0500',
    name: 'Cambridge (A*-G)',
    shortName: 'Cam 0500',
    fullName: 'Cambridge First Language English (0500)',
    type: 'igcse',
    examCode: '0500',
    category: 'igcse-language-a',
    description: 'Cambridge First Language English - A*-G grading',
  },
  {
    id: 'cambridge-0990',
    name: 'Cambridge (9-1)',
    shortName: 'Cam 0990',
    fullName: 'Cambridge First Language English (0990)',
    type: 'igcse',
    examCode: '0990',
    category: 'igcse-language-b',
    description: 'Cambridge First Language English - 9-1 grading',
  },
  // TODO: cambridge-0475 - content not yet built; Literature in Other Languages paper
  {
    id: 'cambridge-0475',
    name: 'Cambridge Literature (0475)',
    shortName: 'Cam 0475',
    fullName: 'Cambridge IGCSE Literature in English (0475)',
    type: 'igcse',
    examCode: '0475',
    category: 'igcse-literature',
    description: 'Cambridge IGCSE Literature in English',
  },
  {
    id: 'ial-edexcel',
    name: 'Edexcel IAL',
    shortName: 'IAL',
    fullName: 'Pearson Edexcel International A-Level English',
    type: 'ial',
    examCode: 'IAL',
    category: 'ial',
    description: 'International Advanced Level English - Pearson Edexcel',
  },
  // UK A-Level boards - scaffold only; full content on roadmap.
  {
    id: 'aqa-a-level',
    name: 'AQA A-Level',
    shortName: 'AQA A-Level',
    fullName: 'AQA A-Level English Literature (7712) & Language (7702)',
    type: 'a-level',
    examCode: '7712 / 7702',
    category: 'a-level',
    description: 'AQA A-Level English - Literature (7712) and Language (7702)',
  },
  {
    id: 'edexcel-a-level',
    name: 'Edexcel A-Level',
    shortName: 'Edexcel A-Level',
    fullName: 'Pearson Edexcel A-Level English Literature (9ET0) & Language (9EN0)',
    type: 'a-level',
    examCode: '9ET0 / 9EN0',
    category: 'a-level',
    description: 'Pearson Edexcel A-Level English - Literature (9ET0) and Language (9EN0)',
  },
  {
    id: 'ocr-a-level',
    name: 'OCR A-Level',
    shortName: 'OCR A-Level',
    fullName: 'OCR A-Level English Literature (H472) & Language (H470)',
    type: 'a-level',
    examCode: 'H472 / H470',
    category: 'a-level',
    description: 'OCR A-Level English - Literature (H472) and Language (H470)',
  },
  {
    id: 'eduqas-a-level',
    name: 'Eduqas A-Level',
    shortName: 'Eduqas A-Level',
    fullName: 'WJEC Eduqas A-Level English Literature & Language',
    type: 'a-level',
    examCode: 'Eduqas A-Level',
    category: 'a-level',
    description: 'WJEC Eduqas A-Level English - Literature and Language',
  },
]

export function getBoardConfig(id: ExamBoard | null): BoardConfig | null {
  if (!id) return null
  return BOARDS.find((b) => b.id === id) ?? null
}

/** Returns the student-friendly display name (no exam codes). */
export function getDisplayName(id: ExamBoard): string {
  const config = getBoardConfig(id)
  return config?.name ?? id
}
