/**
 * A plain-English reference guide to one exam paper's mark scheme
 * (24 October 2026).
 *
 * WHY THESE EXIST. The marking hub's "marking guide library" and the teacher
 * library's mark-scheme page showed sixteen boxes, each with a title and one
 * line promising "grade descriptors", "AO weightings" and "common examiner
 * comments". There was nothing behind any of them: the founder reported that
 * clicking a mark scheme "only shows boxes for each one, no reference cards
 * behind it". Each box now opens one of these guides, one for every paper the
 * AI marker can mark against (src/lib/marking/mark-schemes).
 *
 * WHAT A GUIDE IS, AND IS NOT. It explains, in our own words, what each
 * question asks, what earns marks, what each level looks like and what to
 * avoid. It is NOT the board's mark scheme: the boards' mark schemes and
 * level descriptors are their copyright and are never reproduced here, and
 * the page links to the board's own. The structure (questions, marks,
 * objectives, timing) is checked against the board's published specification
 * or sample assessment materials, and `source` records which document and when.
 *
 * Every figure here is a claim about a real exam a student will sit. Where the
 * board's published document and the AI marker's own data disagree, the guide
 * follows the board, and the disagreement is listed in KNOWN_MARKER_DIFFERENCES
 * (./index.ts) for the founder, because changing the marker changes how essays
 * are scored.
 */

export type GuideBoard =
  | 'AQA'
  | 'Edexcel'
  | 'OCR'
  | 'Eduqas'
  | 'Edexcel International GCSE'
  | 'Cambridge'

export interface GuideObjective {
  /** The board's code, e.g. 'AO2', or Cambridge's 'R1', 'W1'. */
  id: string
  /** What it tests, in one plain sentence a 14-year-old can follow. */
  plain: string
}

export interface GuideLevel {
  /** The board's own name for the level, e.g. 'Level 4' or 'Band 5'. */
  name: string
  /** The marks in that level, e.g. '7-8'. */
  marks: string
  /** What an answer at this level does, in plain words. Never the board's wording. */
  looksLike: string
}

export interface GuideQuestion {
  /** As the paper numbers it, e.g. 'Question 1' or 'Question 5 or 6 (answer one)'. */
  label: string
  /** A few words saying what kind of question it is, e.g. 'Language analysis'. */
  kind: string
  marks: number
  /** The objectives and their marks as the board splits them. */
  objectives: { id: string; marks: number }[]
  /** Suggested minutes, where the guide can honestly suggest one. */
  minutes?: number
  /** What the question asks you to do, in plain words. */
  task: string
  /** What earns marks: two to five short points. */
  rewards: string[]
  /** The levels or bands, LOWEST FIRST, in plain words. Empty for a question marked point by point. */
  levels: GuideLevel[]
  /** What loses marks or wastes time: two to four short points. */
  avoid: string[]
  /** One practical tip. */
  tip: string
  /**
   * The AI marker's question id for this question, so the page can offer
   * "mark an answer to this question" (src/lib/marking/mark-schemes). Null
   * where the marker has no matching question.
   */
  markerQuestionId: string | null
}

export interface GuideSection {
  /** e.g. 'Section A: Reading'. */
  name: string
  marks: number
  /** What the section is, in one sentence. */
  about: string
  questions: GuideQuestion[]
}

export interface MarkSchemeGuide {
  /** The marker's scheme id, e.g. 'aqa-lang-paper1'. */
  schemeId: string
  /** The card and page title, e.g. 'AQA English Language Paper 1'. Its markSchemeAnchor() is the URL slug. */
  title: string
  board: GuideBoard
  /** e.g. 'GCSE English Language (8700)'. */
  qualification: string
  /** The paper's own name, e.g. 'Explorations in Creative Reading and Writing'. */
  paperName: string
  durationMinutes: number
  totalMarks: number
  /** The paper's share of the qualification as the board states it, e.g. '50% of the GCSE'. */
  weighting: string
  /** One or two sentences: what the paper is, in plain words. */
  summary: string
  /** The board's own published document the structure was checked against. */
  source: { document: string; url: string; checkedOn: string }
  /** The board's page for its official mark schemes and past papers. */
  officialUrl: string
  /** The objectives this paper tests. */
  objectives: GuideObjective[]
  sections: GuideSection[]
  /** How to split the time, as short lines. */
  timing: string[]
  /** What to check in the last five minutes: three to six short points. */
  checklist: string[]
}
