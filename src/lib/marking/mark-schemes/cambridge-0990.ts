// ─── Cambridge IGCSE (9-1) First Language English (0990) Mark Scheme ────────
// Paper 1: Reading - 2 hours, 40 marks
// Paper 2: Directed Writing & Composition - 2 hours, 65 marks
//
// 0990 is the "(9-1)" graded variant of 0500 First Language English. The
// syllabus content, papers, assessment objectives (R1-R5, W1-W5) and band
// descriptors are IDENTICAL to 0500 - only the reported grading scale
// (9-1 vs A*-G) differs. We therefore re-export the same band/AO/question
// structures from 0500 with a board label of "Cambridge (9-1)" and new
// canonical IDs so the marking engine can resolve either syllabus by id.
//
// Source: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme } from './types'
import { cambridge0500Paper1, cambridge0500Paper2 } from './cambridge-0500'

export const cambridge0990Paper1: MarkScheme = {
  ...cambridge0500Paper1,
  id: 'cambridge-0990-paper1',
  board: 'Cambridge (9-1)',
  version: '0990/1',
  sourceUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/',
}

export const cambridge0990Paper2: MarkScheme = {
  ...cambridge0500Paper2,
  id: 'cambridge-0990-paper2',
  board: 'Cambridge (9-1)',
  version: '0990/2',
  sourceUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/',
}

/**
 * Aggregated export of all Cambridge IGCSE (9-1) 0990 mark schemes.
 * Content is identical to 0500; only the grading scale and id differ.
 */
export const cambridge0990MarkSchemes: readonly MarkScheme[] = [
  cambridge0990Paper1,
  cambridge0990Paper2,
]
