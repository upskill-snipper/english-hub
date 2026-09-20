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
 * SCOPE. FOUR specifications are verified in this file: AQA 8702, Pearson
 * Edexcel 1ET0, OCR J352 and Eduqas C720QS.
 *
 * THIS PARAGRAPH SAID FIVE UNTIL 19 SEPTEMBER 2026, and named Cambridge 0475
 * among them. The array has never contained it. That is the failure this
 * codebase is full of and that this very file was written to prevent - a
 * document asserting what the code does not do - and it survived here because
 * nothing measured the claim. A test now does: see
 * coverage-measured-against-the-specification.test.ts, which asserts the length
 * and the board ids, so the sentence above cannot drift from the array again.
 *
 * Three specifications verified since have their own modules, because none of
 * them fits a flat shakespeare/nineteenthCentury/modern list:
 *
 *   edexcel-igcse-anthology.ts   the 4EA1 and 4ET1 anthology, three parts
 *                                split across two qualifications
 *   edexcel-igcse-literature.ts  4ET1 whole texts, three choice lists
 *   cambridge-0475.ts            Cambridge IGCSE Literature, which offers a
 *                                choice of three alternative anthologies and
 *                                rotates its set texts every single year
 *
 * Cambridge 0500 and 0990 are now verified to prescribe NOTHING - they are
 * unseen-passage and directed-writing qualifications, and that is correct by
 * design rather than a gap to fill.
 *
 * KS3 is still not verified and has no awarding body to verify against.
 *
 * EDEXCEL IAL AND THE FOUR UK A-LEVELS WERE VERIFIED ON 20 SEPTEMBER 2026, and
 * the paragraph here used to say they were not. The suspicion recorded in it
 * was right: the four A-Level boards carried a byte-identical nine-text tag
 * array, the signature of blanket tagging rather than four researched lists.
 * Reading the five specifications produced 32 corrections - 24 texts added and
 * 8 removed - including a text on three A-Level lists that was on none of them
 * and six tagged to Edexcel IAL that it does not prescribe. Those lists are
 * NOT modelled here: they were applied directly to the board tags, and the
 * evidence for each, quoting the specification and its page, is in the commit
 * that made the change.
 *
 * WHAT THIS FILE DELIBERATELY DOES NOT MODEL. Anything that changes between
 * exam series. Eduqas replaces its entire poetry anthology between summer 2026
 * and summer 2027 with no poem in common, and Cambridge rotates 0475 every
 * year. A flat list per board cannot express either, so rather than encode
 * something that would be wrong within twelve months, this stays silent about
 * them and `anthologyPoems` below records why Eduqas has no poem list.
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
   */
  shakespeare: string[]
  nineteenthCentury: string[]
  modern: string[]
  /**
   * Anthology poems, VERIFIED INDIVIDUALLY and never as a cluster.
   *
   * The docblock above used to say anthology poems were out of scope
   * altogether, and the reason was sound: a flat list cannot express a rotating
   * anthology, and Eduqas replaces its entire poetry selection between the 2026
   * and 2027 series with no poem in common. But the consequence was that no
   * poem could carry a GCSE board tag at all, so an AQA student got no shelf
   * entry for My Last Duchess, which is on their paper.
   *
   * So this list is NOT a cluster and does not claim to be complete. It holds
   * the poems whose presence on a CURRENT series has been read off the awarding
   * body's own document, one at a time, with the document named. The test reads
   * it to answer one question - is every tag we hold prescribed? - which is
   * exactly what a partial list can answer honestly.
   *
   * EDUQAS IS DELIBERATELY ABSENT. Two of its poems were verified to the same
   * standard on 20 September 2026, and both were read off the anthology "for
   * assessment from 2027". The cohort sitting in summer 2026 uses the old
   * anthology. Tagging them now would be right for one cohort and wrong for the
   * one that sits the exam first, and that needs a series-aware model rather
   * than another row here.
   */
  anthologyPoems?: string[]
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
    // Verified individually on 20 September 2026 against AQA's own
    // documents, not a cluster list: 'Past and present: poetry anthology'
    // (8702, v1.2) and the June 2023 8702/2 question paper, which prints the
    // Power and conflict contents block. AQA's 2023 change guide withdrew
    // three modern prose/drama texts and no poetry.
    anthologyPoems: ['My Last Duchess', 'War Photographer'],
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
    // Verified individually on 20 September 2026 from Appendix 3, 'Poetry
    // Anthology lists', of the 1ET0 specification PDF above (Issue 2, June
    // 2019), cross-checked against the Pearson GCSE (9-1) English Literature
    // Poetry Anthology, Issue 4, January 2023.
    anthologyPoems: ['My Last Duchess', 'La Belle Dame sans Merci', 'Half-caste'],
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
    // Verified individually on 20 September 2026 from OCR's own mark scheme
    // for J352/02 'Exploring poetry and Shakespeare', June 2024, whose
    // 'Possible poems might include' list names Robert Frost, 'Out, Out - '.
    anthologyPoems: ["'Out, Out-'"],
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

/**
 * Every text a board prescribes that we have verified, flattened.
 *
 * The anthology poems are included because the one question this answers is
 * "is every tag we hold prescribed?", and a poem tag has to be answerable too.
 * The list is not complete for poems and does not pretend to be: see
 * `anthologyPoems`.
 */
export function prescribedTitles(board: ExamBoard): string[] | null {
  const list = PRESCRIBED.find((p) => p.board === board)
  if (!list) return null
  return [
    ...list.shakespeare,
    ...list.nineteenthCentury,
    ...list.modern,
    ...(list.anthologyPoems ?? []),
  ]
}

/** The boards whose specification has actually been read. */
export function isVerifiedBoard(board: ExamBoard): boolean {
  return PRESCRIBED.some((p) => p.board === board)
}
