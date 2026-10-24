/**
 * Cambridge IGCSE (9-1) First Language English (0990) Paper 1: Reading.
 *
 * THE SAME PAPER AS 0500 PAPER 1, so the content is shared, not copied: a
 * copy is how the two drift apart (src/lib/marking/mark-schemes/
 * cambridge-0990.ts records the marker's own 0990 Paper 1 drifting to 50
 * marks that way). Everything except the fields set below comes from
 * ./cambridge-0500-paper1.ts, whose docblock gives the checks, the November
 * 2026 note and the differences from the AI marker; they apply here unchanged,
 * because the marker's 0990 schemes are the 0500 ones under new ids.
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
 *    Paper 1 and Paper 2 details are word for word those of 0500 for the same
 *    years, so the November 2026 note in the summary holds for 0990 too.
 *    https://www.cambridgeinternational.org/Images/635234-2024-2026-syllabus.pdf
 *  - the level ranges come from the 0500/01 specimen mark scheme for 2027
 *    (Images/718838). The 0990/01 specimen mark scheme (Images/718898) could
 *    not be read: see below.
 *
 * HOW THE DOCUMENTS WERE READ. cambridgeinternational.org was down for
 * maintenance on the morning of 24 October 2026. The 2027-2029 syllabus was
 * read from a copy downloaded on 19 September 2026, byte-identical to the
 * Internet Archive's capture of the official URL above taken 5 October 2026;
 * the 2024-2026 syllabus from the Archive's capture of its official URL taken
 * 30 November 2023 (Version 4, the latest according to Cambridge's own
 * syllabus update notice). The 0990/01 specimen mark scheme has no archived
 * copy, so its level ranges are NOT independently confirmed: they are the
 * 0500 ones, which the identical syllabus implies but does not prove.
 *
 * SECOND CHECK, 24 October 2026, by an independent reader. The two 0990
 * syllabuses were fetched again from the Archive captures named above (5
 * October 2026; 30 November 2023) and are byte-identical (SHA-256) to the
 * copies used; a line-by-line comparison with the 0500 syllabuses for the
 * same years confirms the differences listed, and the 2024-2026 update
 * notice (Images/652753, captured 4 December 2023) names Version 4 as the
 * latest. The 0990/01 specimen mark scheme is a real file (Images/718898 is
 * listed on the Archive's capture of Cambridge's 0990 past-papers page, 6
 * March 2026), but it has no Archive capture and the live site was still
 * down, so its level ranges stay unconfirmed. Fixed: the summary's November
 * 2026 note now says plainly that this guide's question numbers and marks are
 * not that candidate's (0990 2024-2026 syllabus pp. 13-14). The fixes in
 * ./cambridge-0500-paper1.ts reach this guide through the spread.
 */

import type { MarkSchemeGuide } from './types'
import { GUIDE as CAMBRIDGE_0500_PAPER1 } from './cambridge-0500-paper1'

export const GUIDE: MarkSchemeGuide = {
  ...CAMBRIDGE_0500_PAPER1,
  schemeId: 'cambridge-0990-paper1',
  title: 'Cambridge IGCSE (9-1) First Language English Paper 1',
  qualification: 'Cambridge IGCSE (9-1) First Language English (0990), 2027-2029 syllabus',
  summary:
    'Set out exactly as First Language English 0500 Paper 1, with the same structure, marks and objectives: four compulsory questions, 20 marks each, on three texts printed in a separate insert. This guide is for exams in 2027, 2028 and 2029; if you sit Paper 1 in November 2026, your paper follows the older 2024-2026 syllabus, with three questions worth 30, 25 and 25 marks, so its question numbers and marks are not the ones in this guide.',
  source: {
    document:
      'Cambridge IGCSE (9-1) First Language English 0990 syllabus for exams in 2027, 2028 and 2029, Version 1 (pages 13 to 15), with the 0500/01 specimen mark scheme for examination from 2027 for the level ranges',
    url: 'https://www.cambridgeinternational.org/Images/718785-2027-2029-syllabus.pdf',
    checkedOn: '2026-10-24',
  },
  officialUrl:
    'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-9-1-first-language-english-0990/past-papers/',
}
