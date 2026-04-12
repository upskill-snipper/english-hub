import type { ExamBoard } from './board-config'
import type { ExamBoard as PrismaExamBoard } from '@prisma/client'

/**
 * Maps **Prisma** enum values to the app-level ExamBoard slugs.
 *
 * The Prisma schema currently has: AQA, EDEXCEL, CAMBRIDGE, CAIE, OCR.
 * App-level boards that have no direct Prisma counterpart (eduqas,
 * edexcel-igcse, cambridge-0500, cambridge-0990) are not stored in the
 * DB yet and therefore excluded from the Prisma mapping.
 */
export const PRISMA_TO_APP: Record<PrismaExamBoard, ExamBoard> = {
  AQA: 'aqa',
  EDEXCEL: 'edexcel',
  OCR: 'ocr',
  CAMBRIDGE: 'cambridge-0500',
  CAIE: 'cambridge-0990',
}

/**
 * Partial reverse map — only covers boards that exist in the Prisma enum.
 */
export const APP_TO_PRISMA: Partial<Record<ExamBoard, PrismaExamBoard>> = {
  'aqa': 'AQA',
  'edexcel': 'EDEXCEL',
  'ocr': 'OCR',
  'cambridge-0500': 'CAMBRIDGE',
  'cambridge-0990': 'CAIE',
}
