import type { ExamBoard } from './board-config'
import type { ExamBoard as PrismaExamBoard } from '@prisma/client'

/**
 * Maps **Prisma** enum values to the app-level ExamBoard slugs.
 *
 * The Prisma schema has: AQA, EDEXCEL, OCR, EDUQAS, EDEXCEL_IGCSE,
 * CAMBRIDGE_0500, CAMBRIDGE_0990.
 */
export const PRISMA_TO_APP: Record<PrismaExamBoard, ExamBoard> = {
  AQA: 'aqa',
  EDEXCEL: 'edexcel',
  OCR: 'ocr',
  EDUQAS: 'eduqas',
  EDEXCEL_IGCSE: 'edexcel-igcse',
  CAMBRIDGE_0500: 'cambridge-0500',
  CAMBRIDGE_0990: 'cambridge-0990',
}

/**
 * Reverse map — all app-level boards now have a Prisma counterpart.
 */
export const APP_TO_PRISMA: Record<ExamBoard, PrismaExamBoard> = {
  'aqa': 'AQA',
  'edexcel': 'EDEXCEL',
  'ocr': 'OCR',
  'eduqas': 'EDUQAS',
  'edexcel-igcse': 'EDEXCEL_IGCSE',
  'cambridge-0500': 'CAMBRIDGE_0500',
  'cambridge-0990': 'CAMBRIDGE_0990',
}
