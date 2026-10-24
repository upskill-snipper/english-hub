/**
 * Cambridge IGCSE (9-1) First Language English (0990) Paper 2: Directed
 * Writing and Composition.
 *
 * THE SAME PAPER AS 0500 PAPER 2, so the content is shared, not copied: a
 * copy is how the two drift apart (src/lib/marking/mark-schemes/
 * cambridge-0990.ts records the marker's own 0990 Paper 1 drifting that way).
 * Everything except the fields set below comes from ./cambridge-0500-paper2.ts,
 * whose docblock gives the checks, the November 2026 note and the differences
 * from the AI marker; they apply here unchanged, because the marker's 0990
 * schemes are the 0500 ones under new ids.
 *
 * CHECKED 24 October 2026 against Cambridge's own documents:
 *  - Cambridge IGCSE (9-1) First Language English 0990 syllabus for exams in
 *    2027, 2028 and 2029, Version 1 (September 2024), compared line by line
 *    with the 0500 syllabus for the same years. The papers, questions, marks,
 *    word counts, objectives and weightings are word for word the same. The
 *    only differences are the name and code, the results scale, the March
 *    series (offered for 0500 in India only), and that a candidate cannot take
 *    both in the same series.
 *    https://www.cambridgeinternational.org/Images/718785-2027-2029-syllabus.pdf
 *  - the 0990 syllabus for 2024, 2025 and 2026, Version 4 (April 2023): its
 *    Paper 2 details are word for word those of 0500 for the same years, so
 *    the November 2026 note in the summary holds for 0990 too.
 *    https://www.cambridgeinternational.org/Images/635234-2024-2026-syllabus.pdf
 *  - the level ranges and the composition's 16/24 split come from the 0500/02
 *    specimen mark scheme for 2027 (Images/718839). The 0990/02 specimen mark
 *    scheme (Images/718899) could not be read: see below.
 *
 * HOW THE DOCUMENTS WERE READ. cambridgeinternational.org was down for
 * maintenance on the morning of 24 October 2026. The 2027-2029 syllabus was
 * read from a copy downloaded on 19 September 2026, byte-identical to the
 * Internet Archive's capture of the official URL above taken 5 October 2026;
 * the 2024-2026 syllabus from the Archive's capture of its official URL taken
 * 30 November 2023 (Version 4, the latest according to Cambridge's own
 * syllabus update notice). The 0990/02 specimen mark scheme has no archived
 * copy, so its level ranges and the 16/24 split are NOT independently
 * confirmed: they are the 0500 ones, which the identical syllabus implies but
 * does not prove.
 *
 * SECOND CHECK, 24 October 2026, by an independent reader. The two 0990
 * syllabuses were fetched again from the Archive captures named above (5
 * October 2026; 30 November 2023) and are byte-identical (SHA-256) to the
 * copies used; a line-by-line comparison with the 0500 syllabuses for the
 * same years confirms the differences listed, and the 2024-2026 update
 * notice (Images/652753, captured 4 December 2023) names Version 4 as the
 * latest. The 0990/02 specimen mark scheme is a real file (Images/718899 is
 * listed on the Archive's capture of Cambridge's 0990 past-papers page, 6
 * March 2026), but it has no Archive capture and the live site was still
 * down, so its level ranges and the 16/24 split stay unconfirmed. Fixed: the
 * summary's November 2026 note now says what still applies to that candidate
 * (0990 2024-2026 syllabus p. 15: Section A one 40-mark task, Section B as
 * here; no 0990 mark scheme from that syllabus was archived, so 'its marks
 * are the same' rests on the syllabus and on 0500's June 2024 mark scheme).
 * The fixes in ./cambridge-0500-paper2.ts reach this guide through the spread.
 */

import type { MarkSchemeGuide } from './types'
import { GUIDE as CAMBRIDGE_0500_PAPER2 } from './cambridge-0500-paper2'

export const GUIDE: MarkSchemeGuide = {
  ...CAMBRIDGE_0500_PAPER2,
  schemeId: 'cambridge-0990-paper2',
  title: 'Cambridge IGCSE (9-1) First Language English Paper 2',
  qualification: 'Cambridge IGCSE (9-1) First Language English (0990), 2027-2029 syllabus',
  summary:
    'Set out exactly as First Language English 0500 Paper 2, with the same structure, marks and objectives: directed writing based on one or two short texts, then a composition chosen from four titles, each worth 40 marks. This guide is for exams in 2027, 2028 and 2029; if you sit Paper 2 in November 2026, your paper follows the older 2024-2026 syllabus, where Section A is one directed writing task worth 40 marks with no 5-mark question first, but the Section B composition and its marks are the same as here.',
  source: {
    document:
      'Cambridge IGCSE (9-1) First Language English 0990 syllabus for exams in 2027, 2028 and 2029, Version 1 (pages 16 and 17), with the 0500/02 specimen mark scheme for examination from 2027 for the level ranges and the composition split',
    url: 'https://www.cambridgeinternational.org/Images/718785-2027-2029-syllabus.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/past-papers/',
}
