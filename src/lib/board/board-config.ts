// Server-safe board config + data.
// This file has NO 'use client' so it can be imported by both server and client components.
// The zustand store in ./board-store.ts re-exports these types/values for client code.

export type ExamBoard =
  | 'aqa' | 'edexcel' | 'ocr' | 'eduqas'
  | 'edexcel-igcse' | 'cambridge-0500' | 'cambridge-0990'

export type BoardConfig = {
  id: ExamBoard
  name: string
  fullName: string
  shortName: string
  type: 'gcse' | 'igcse'
  description: string
}

export const BOARDS: readonly BoardConfig[] = [
  { id: 'aqa', name: 'AQA', shortName: 'AQA', fullName: 'AQA GCSE English Literature & Language', type: 'gcse', description: 'Most popular UK exam board for GCSE English' },
  { id: 'edexcel', name: 'Edexcel', shortName: 'Edexcel', fullName: 'Pearson Edexcel GCSE English Literature & Language', type: 'gcse', description: 'Pearson Edexcel GCSE English specifications' },
  { id: 'ocr', name: 'OCR', shortName: 'OCR', fullName: 'OCR GCSE English Literature & Language', type: 'gcse', description: 'Oxford Cambridge and RSA GCSE English' },
  { id: 'eduqas', name: 'Eduqas', shortName: 'Eduqas', fullName: 'WJEC Eduqas GCSE English Literature & Language', type: 'gcse', description: 'WJEC Eduqas single-anthology GCSE' },
  { id: 'edexcel-igcse', name: 'Edexcel IGCSE', shortName: 'Edexcel IGCSE', fullName: 'Pearson Edexcel IGCSE 4ET1', type: 'igcse', description: 'International GCSE — Pearson Edexcel' },
  { id: 'cambridge-0500', name: 'Cambridge 0500', shortName: 'Cambridge 0500', fullName: 'Cambridge IGCSE 0500 First Language English', type: 'igcse', description: 'Cambridge A*-G grading' },
  { id: 'cambridge-0990', name: 'Cambridge 0990', shortName: 'Cambridge 0990', fullName: 'Cambridge IGCSE 0990 First Language English 9-1', type: 'igcse', description: 'Cambridge 9-1 grading' },
]

export function getBoardConfig(id: ExamBoard | null): BoardConfig | null {
  if (!id) return null
  return BOARDS.find((b) => b.id === id) ?? null
}
