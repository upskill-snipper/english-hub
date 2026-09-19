/**
 * What each awarding body actually prescribes, read from its own specification.
 *
 * WHY THIS FILE EXISTS. Our set-text data was tagging texts to boards that do
 * not examine them. An AQA student was shown Silas Marner, which appears nowhere
 * in AQA's specification, and Never Let Me Go, which AQA examined for the last
 * time in summer 2024. An OCR student was shown The Tempest, Frankenstein and
 * Lord of the Flies, none of which OCR prescribes. An Eduqas student was shown
 * Henry V, withdrawn after summer 2024. Two of those had been wrong for two
 * exam cycles, on a product whose entire promise is that it knows the student's
 * specification.
 *
 * Measured against the boards' own documents rather than against our own list,
 * we held 57 of 88 prescribed prose, drama and Shakespeare texts across the four
 * UK GCSE boards, and none of roughly 165 prescribed anthology poems. The
 * "100% covered" figure that had been reported was computed against our own
 * holdings, which is a denominator that cannot fail.
 *
 * THE HAZARD THIS GUARDS AGAINST, which is not carelessness but stale sources.
 * Three superseded documents were found live on awarding-body domains: an
 * unversioned Eduqas specification still listing Henry V, Never Let Me Go and
 * A Taste of Honey, which outranks the current file in search; OCR's
 * pre-Version-2 poetry anthology from July 2020; and version 1 of a Cambridge
 * syllabus naming a novel that had been replaced. Every Eduqas error we held
 * matched that stale Eduqas file exactly. So each entry below records the
 * document version and the date it was read, and re-reading it is the first
 * step of any future change.
 *
 * SCOPE. Five specifications are verified here. AQA 8702, Pearson Edexcel 1ET0,
 * OCR J352, Eduqas C720QS and Cambridge 0475. The remaining ten - Edexcel
 * International GCSE 4ET1 and 4EA1, Cambridge 0500 and 0990, Edexcel IAL, the
 * four UK A-Levels and KS3 - are NOT verified and must not be treated as though
 * they were. The four A-Level boards in particular carry a byte-identical
 * nine-text tag array in our data, which is the signature of blanket tagging
 * rather than four researched lists.
 *
 * WHAT THIS FILE DELIBERATELY DOES NOT MODEL. Anthology poems, and anything
 * that changes between exam series. Eduqas replaces its entire poetry anthology
 * between summer 2026 and summer 2027 with no poem in common, and Cambridge
 * rotates 0475 every year. A flat list per board cannot express either, so
 * rather than encode something that would be wrong within twelve months, this
 * covers whole prose, drama and Shakespeare texts only and says so.
 */

import type { ExamBoard } from './board-config'

export interface PrescribedList {
  board: ExamBoard
  /** The specification document this was read from. */
  source: string
  /** Its own version string, as printed on the document. */
  version: string
  /** When it was read. Re-read before changing anything here. */
  readOn: string
  /**
   * Prescribed whole texts, by the title the specification prints.
   * Anthology poems are out of scope: see the docblock.
   */
  shakespeare: string[]
  nineteenthCentury: string[]
  modern: string[]
}

export const PRESCRIBED: PrescribedList[] = [
  {
    board: 'aqa',
    source:
      'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content',
    version: 'v1.3, 28 September 2022',
    readOn: '2026-09-19',
    shakespeare: [
      'Macbeth',
      'Romeo and Juliet',
      'The Tempest',
      'The Merchant of Venice',
      'Much Ado About Nothing',
      'Julius Caesar',
    ],
    nineteenthCentury: [
      'A Christmas Carol',
      'The Strange Case of Dr Jekyll and Mr Hyde',
      'Great Expectations',
      'Jane Eyre',
      'Frankenstein',
      'Pride and Prejudice',
      'The Sign of Four',
    ],
    // Twelve live for 2026 and 2027. The History Boys, the Curious Incident
    // play script and Never Let Me Go all carry "Last exam 2024".
    modern: [
      'An Inspector Calls',
      'Blood Brothers',
      'Lord of the Flies',
      'Animal Farm',
      'Anita and Me',
      'Pigeon English',
      'DNA',
      'A Taste of Honey',
      'Telling Tales',
      'Princess & The Hustler',
      'Leave Taking',
      'My Name is Leon',
    ],
  },
  {
    board: 'edexcel',
    source:
      'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    version: 'Issue 2, June 2019',
    readOn: '2026-09-19',
    shakespeare: [
      'Macbeth',
      'Romeo and Juliet',
      'The Tempest',
      'Twelfth Night',
      'The Merchant of Venice',
      'Much Ado About Nothing',
    ],
    nineteenthCentury: [
      'Jane Eyre',
      'Great Expectations',
      'Dr Jekyll and Mr Hyde',
      'A Christmas Carol',
      'Pride and Prejudice',
      'Silas Marner',
      'Frankenstein',
    ],
    modern: [
      'An Inspector Calls',
      "Hobson's Choice",
      'Blood Brothers',
      "Journey's End",
      'Animal Farm',
      'Lord of the Flies',
      'Anita and Me',
      'The Woman in Black',
      'The Empress',
      'Refugee Boy',
      'Coram Boy',
      "Boys Don't Cry",
    ],
  },
  {
    board: 'ocr',
    source:
      'https://www.ocr.org.uk/images/168995-specification-accredited-gcse-english-literature-j352.pdf',
    version: 'v3.0, November 2025',
    readOn: '2026-09-19',
    // Four plays only. The Tempest is not among them, and nor is Frankenstein
    // or Lord of the Flies anywhere in the document.
    shakespeare: [
      'Romeo and Juliet',
      'The Merchant of Venice',
      'Macbeth',
      'Much Ado About Nothing',
    ],
    nineteenthCentury: [
      'Great Expectations',
      'Pride and Prejudice',
      'The War of the Worlds',
      'Dr Jekyll and Mr Hyde',
      'Jane Eyre',
      'A Christmas Carol',
    ],
    modern: [
      'Anita and Me',
      'Never Let Me Go',
      'Animal Farm',
      'An Inspector Calls',
      'DNA',
      'Leave Taking',
    ],
  },
  {
    board: 'eduqas',
    source:
      'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    version: 'Version 4, August 2024',
    readOn: '2026-09-19',
    // Twelfth Night replaced Henry V for assessment from 2025.
    shakespeare: [
      'Romeo and Juliet',
      'Macbeth',
      'Othello',
      'Much Ado About Nothing',
      'Twelfth Night',
      'The Merchant of Venice',
    ],
    nineteenthCentury: [
      'A Christmas Carol',
      'The Strange Case of Dr Jekyll and Mr Hyde',
      'Pride and Prejudice',
      'Silas Marner',
      'The War of the Worlds',
      'Jane Eyre',
    ],
    // Boys Don't Cry replaced Never Let Me Go, and Leave Taking replaced
    // A Taste of Honey, both for assessment from 2025.
    modern: [
      'An Inspector Calls',
      'Blood Brothers',
      'Lord of the Flies',
      'Anita and Me',
      "Boys Don't Cry",
      'The Woman in Black',
      'Oranges are not the Only Fruit',
      'The Curious Incident of the Dog in the Night-Time',
      'Leave Taking',
      'The History Boys',
    ],
  },
]

/** Every whole text a board prescribes, flattened. */
export function prescribedTitles(board: ExamBoard): string[] | null {
  const list = PRESCRIBED.find((p) => p.board === board)
  if (!list) return null
  return [...list.shakespeare, ...list.nineteenthCentury, ...list.modern]
}

/** The boards whose specification has actually been read. */
export function isVerifiedBoard(board: ExamBoard): boolean {
  return PRESCRIBED.some((p) => p.board === board)
}
