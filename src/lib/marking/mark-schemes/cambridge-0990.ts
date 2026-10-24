// ─── Cambridge IGCSE (9-1) First Language English (0990) Mark Scheme ────────
// Paper 1: Reading                            2 hours, 80 marks
// Paper 2: Directed Writing and Composition   2 hours, 80 marks
//
// NOTHING IS RESTATED HERE ANY MORE, and that is the fix. Paper 1 used to
// re-declare `totalMarks: 50` over the spread, with a comment explaining that
// it was stated explicitly "so the paper total cannot silently drift". It is
// exactly how it drifted: when 0500 was corrected from 50 to 80 on
// 19 September 2026, Paper 2 followed because it inherits, and Paper 1 did not
// because it did not. A duplicated constant is not a guard against drift, it
// is the mechanism of it.
//
// The guarantee lives in tests. src/__tests__/cambridge-0500-matches-the-
// syllabus.test.ts ("0990 is 0500") asserts the two schemes are identical
// apart from id, board, version and sourceUrl, which a stale copy cannot
// satisfy. (This note used to name a cambridge-0990-is-0500.test.ts, which
// never existed.) ./__tests__/cambridge-structure.test.ts holds both 0990
// papers to their own guides.
//
// 24 OCTOBER 2026. The 0500 schemes were corrected so each question is marked
// the way Cambridge marks it (cambridge-0500.ts records what changed; the
// founder approved it that day, document 30), and 0990 follows through the
// spread. That is right because the 0990 syllabus for 2027-2029 sets out the
// same papers, questions, marks and objectives as 0500 word for word
// (src/data/mark-scheme-guides/cambridge-0990-paper1.ts and -paper2.ts). One
// limit, from those guides: the level ranges come from the 0500 specimen mark
// schemes, because the 0990 ones (Images/718898 and 718899) could not be read
// on 24 October 2026, so for 0990 they rest on the identical syllabus rather
// than on a 0990 document.
//
// 0990 is the "(9-1)" graded variant of 0500 First Language English: only the
// reported grading scale (9-1 vs A*-G) differs. We therefore re-export the
// 0500 schemes with a board label of "Cambridge (9-1)" and new canonical IDs
// so the marking engine can resolve either syllabus by id.
//
// Source: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/
// ────────────────────────────────────────────────────────────────────────────

import type { MarkScheme } from './types'
import { cambridge0500Paper1, cambridge0500Paper2 } from './cambridge-0500'

export const cambridge0990Paper1: MarkScheme = {
  ...cambridge0500Paper1,
  id: 'cambridge-0990-paper1',
  board: 'Cambridge (9-1)',
  version: '0990/1 (2027-2029)',
  sourceUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/',
}

export const cambridge0990Paper2: MarkScheme = {
  ...cambridge0500Paper2,
  id: 'cambridge-0990-paper2',
  board: 'Cambridge (9-1)',
  version: '0990/2 (2027-2029)',
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
