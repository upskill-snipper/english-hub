// ─── Mock Exam Chunk Aggregator ─────────────────────────────────────────────
// Combines all 120 exam papers from 24 chunk files into a single export.

import type { MockExamPaper } from '../mock-exams'

// AQA Paper 1 (15 papers)
import { aqaP1A } from './aqa-p1-a'
import { aqaP1B } from './aqa-p1-b'
import { aqaP1C } from './aqa-p1-c'

// AQA Paper 2 (15 papers)
import { aqaP2A } from './aqa-p2-a'
import { aqaP2B } from './aqa-p2-b'
import { aqaP2C } from './aqa-p2-c'

// Edexcel Paper 1 (15 papers)
import { edexcelP1A } from './edexcel-p1-a'
import { edexcelP1B } from './edexcel-p1-b'
import { edexcelP1C } from './edexcel-p1-c'

// Edexcel Paper 2 (15 papers)
import { edexcelP2A } from './edexcel-p2-a'
import { edexcelP2B } from './edexcel-p2-b'
import { edexcelP2C } from './edexcel-p2-c'

// OCR Paper 1 (15 papers)
import { ocrP1A } from './ocr-p1-a'
import { ocrP1B } from './ocr-p1-b'
import { ocrP1C } from './ocr-p1-c'

// OCR Paper 2 (15 papers)
import { ocrP2A } from './ocr-p2-a'
import { ocrP2B } from './ocr-p2-b'
import { ocrP2C } from './ocr-p2-c'

// WJEC Component 1 (15 papers)
import { wjecC1A } from './wjec-c1-a'
import { wjecC1B } from './wjec-c1-b'
import { wjecC1C } from './wjec-c1-c'

// WJEC Component 2 (15 papers)
import { wjecC2A } from './wjec-c2-a'
import { wjecC2B } from './wjec-c2-b'
import { wjecC2C } from './wjec-c2-c'

/** All 120 expanded mock exam papers across 4 boards */
export const expandedMockExams: MockExamPaper[] = [
  // AQA (30)
  ...aqaP1A, ...aqaP1B, ...aqaP1C,
  ...aqaP2A, ...aqaP2B, ...aqaP2C,
  // Edexcel (30)
  ...edexcelP1A, ...edexcelP1B, ...edexcelP1C,
  ...edexcelP2A, ...edexcelP2B, ...edexcelP2C,
  // OCR (30)
  ...ocrP1A, ...ocrP1B, ...ocrP1C,
  ...ocrP2A, ...ocrP2B, ...ocrP2C,
  // WJEC (30)
  ...wjecC1A, ...wjecC1B, ...wjecC1C,
  ...wjecC2A, ...wjecC2B, ...wjecC2C,
]
