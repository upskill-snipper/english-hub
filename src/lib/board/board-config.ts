// Server-safe board config + data.
// This file has NO 'use client' so it can be imported by both server and client components.
// The zustand store in ./board-store.ts re-exports these types/values for client code.

export type ExamBoard =
  | 'ks3'
  | 'aqa' | 'edexcel' | 'ocr' | 'eduqas'
  | 'edexcel-igcse' | 'cambridge-0500' | 'cambridge-0990'

export type BoardCategory =
  | 'ks3'
  | 'gcse'
  | 'igcse-literature'
  | 'igcse-language-a'
  | 'igcse-language-b'

export type BoardConfig = {
  id: ExamBoard
  name: string
  fullName: string
  shortName: string
  type: 'ks3' | 'gcse' | 'igcse'
  examCode: string
  category: BoardCategory
  description: string
}

export const BOARDS: readonly BoardConfig[] = [
  { id: 'ks3', name: 'KS3', shortName: 'KS3', fullName: 'Key Stage 3 English', type: 'ks3', examCode: 'KS3', category: 'ks3', description: 'Years 7-9 foundation English' },
  { id: 'aqa', name: 'AQA', shortName: 'AQA', fullName: 'AQA GCSE English Literature & Language', type: 'gcse', examCode: 'AQA', category: 'gcse', description: 'Most popular UK exam board for GCSE English' },
  { id: 'edexcel', name: 'Edexcel', shortName: 'Edexcel', fullName: 'Pearson Edexcel GCSE English Literature & Language', type: 'gcse', examCode: 'Edexcel', category: 'gcse', description: 'Pearson Edexcel GCSE English courses' },
  { id: 'ocr', name: 'OCR', shortName: 'OCR', fullName: 'OCR GCSE English Literature & Language', type: 'gcse', examCode: 'OCR', category: 'gcse', description: 'Oxford Cambridge and RSA GCSE English' },
  { id: 'eduqas', name: 'Eduqas', shortName: 'Eduqas', fullName: 'WJEC Eduqas GCSE English Literature & Language', type: 'gcse', examCode: 'Eduqas', category: 'gcse', description: 'WJEC Eduqas single-anthology GCSE' },
  { id: 'edexcel-igcse', name: 'Edexcel IGCSE Literature (4ET1)', shortName: 'IGCSE Lit', fullName: 'IGCSE English Literature', type: 'igcse', examCode: '4ET1', category: 'igcse-literature', description: 'International GCSE — Pearson Edexcel' },
  { id: 'cambridge-0500', name: 'Cambridge (A*-G)', shortName: 'Cam 0500', fullName: 'Cambridge First Language English (0500)', type: 'igcse', examCode: '0500', category: 'igcse-language-a', description: 'Cambridge First Language English — A*-G grading' },
  { id: 'cambridge-0990', name: 'Cambridge (9-1)', shortName: 'Cam 0990', fullName: 'Cambridge First Language English (0990)', type: 'igcse', examCode: '0990', category: 'igcse-language-b', description: 'Cambridge First Language English — 9-1 grading' },
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
