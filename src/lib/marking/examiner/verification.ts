// ─── Which mark schemes have actually been checked against a published spec ──
//
// THE PROBLEM THIS EXISTS TO FIX (18 September 2026)
//
// The examiner tool derived a pack for all 21 registered mark schemes and told
// teachers, in its own system prompt, "PAPER STRUCTURE AND GRIDS (verbatim from
// the published scheme)", while the provenance line shown in the interface said
// "Mark ranges and descriptors are the board's own". For most of those 21 that
// was not true: the corpus is hand-authored, nine papers had never been checked
// against a published specification at all, and auditing them on 18 September
// turned up two concrete defects in the first pass:
//
//   • aqa-lang-paper1: the structure objective carried id 'AO3'. AQA assesses
//     structure under AO2; AO3 is comparison and is not on Paper 1 at all. Every
//     Question 3 commentary ended "appropriate for AO3". Fixed.
//   • eduqas-lang-comp1 and eduqas-lang-comp2: the questions sum to 75 on a
//     paper declared as 80. Not fixed, because inventing the missing five marks
//     would be exactly the failure this file exists to prevent. Recorded below
//     and pinned by a test.
//
// THE RULE
//
// A scheme appears in VERIFIED_SPECS only when someone has put the pack side by
// side with the board's own published material and confirmed the tariffs, the
// assessment objectives and the level ranges. Not "it looks plausible". Not
// "the total adds up". Everything else is unverified and says so, loudly, on
// every surface a teacher can reach.
//
// Adding an entry here is a claim about the real world. The date and the
// document are part of the record so the claim can be re-checked and, if it was
// wrong, traced back to whoever made it.
// ────────────────────────────────────────────────────────────────────────────

/** A record that a pack was checked against the board's published material. */
export interface SpecVerification {
  /** The document checked against, named precisely enough to find again. */
  readonly document: string
  /** The series or specification issue the check covers. */
  readonly issue: string
  /** ISO date the check was performed. */
  readonly checkedOn: string
  /** Who performed it. 'Claude' is not a second pair of eyes; see the note. */
  readonly checkedBy: string
  /** Where the document can be found. */
  readonly url?: string
  /** What the check actually covered, so its limits are on the record. */
  readonly scope: string
}

/**
 * The only schemes permitted to describe their grids as the board's own.
 *
 * Three of twenty-one. That ratio is the honest state of the corpus on
 * 18 September 2026 and it is meant to be uncomfortable: promoting a scheme
 * into this map is the unit of work for the verification programme (EXAM-2).
 */
export const VERIFIED_SPECS: Readonly<Record<string, SpecVerification>> = {
  'edexcel-igcse-lang-paper1': {
    document:
      'Pearson OLS standardisation ePACKs for 4EA1_01, series 2606GQ, generated 27 May 2026; plus the June 2026 question paper and the Summer 2023 "A Passage to Africa" exemplar pack',
    issue: '4EA1/01, June 2026 series',
    checkedOn: '2026-09-18',
    checkedBy: 'Claude, against primary documents supplied by the owner',
    scope:
      'Question tariffs (2, 4, 5, 12, 22, 45), the AO4/AO5 split on Section B, and the level ranges, all confirmed against real marked scripts carrying examiner annotation. This is the one paper in the tool with exemplar-derived calibration.',
  },
  'aqa-lang-paper1': {
    document: 'AQA GCSE English Language 8700 specification and assessment resources',
    issue: '8700/1, 2015 specification, current at September 2026',
    checkedOn: '2026-09-18',
    checkedBy: 'Claude',
    url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources',
    scope:
      "Question structure and tariffs (Q1 4 AO1, Q2 8 AO2 language, Q3 8 AO2 structure, Q4 20 AO4, Q5 40 split AO5 24 / AO6 16) and the four-level grids. The AO3 mislabelling on Q3 was found and fixed by this check. Band descriptor wording is the corpus author's paraphrase, not the board's verbatim text.",
  },
  'aqa-lang-paper2': {
    document: 'AQA GCSE English Language 8700 specification and assessment resources',
    issue: '8700/2, 2015 specification, current at September 2026',
    checkedOn: '2026-09-18',
    checkedBy: 'Claude',
    url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/assessment-resources',
    scope:
      "Question structure and tariffs (Q1 4 AO1, Q2 8 AO1 summary, Q3 12 AO2, Q4 16 AO3 comparison, Q5 40 split AO5 24 / AO6 16) and the four-level grids. Band descriptor wording is the corpus author's paraphrase, not the board's verbatim text.",
  },
}

/**
 * Schemes whose questions do not sum to their own declared paper total.
 *
 * These are arithmetic contradictions inside the corpus, independent of any
 * board document, and they are recorded rather than silently corrected because
 * guessing which question is short would put an invented tariff in front of a
 * teacher. The structural test pins this map exactly: a new broken scheme fails
 * the build, and fixing one of these fails the build until its entry is
 * removed. Neither can happen quietly.
 */
export const KNOWN_TOTAL_MISMATCHES: Readonly<Record<string, string>> = {
  'eduqas-lang-comp1':
    'Section A questions sum to 35 (5+5+10+10+5) against a declared paper total of 80 with a 40-mark Section B. Eduqas Section A is a 40-mark section, so five marks are unaccounted for. Which question is short has not been established against a published paper.',
  'eduqas-lang-comp2':
    'Section A questions sum to 35 (5+5+10+10+5) against a declared paper total of 80 with two 20-mark Section B tasks. Same 5-mark shortfall as Component 1.',
}

/** The verification record for a scheme, or null if it has never been checked. */
export function verificationFor(schemeId: string): SpecVerification | null {
  return VERIFIED_SPECS[schemeId] ?? null
}

/** True only when a human-checkable record exists. Absence means unverified. */
export function isSpecVerified(schemeId: string): boolean {
  return schemeId in VERIFIED_SPECS
}

/** One sentence for the interface and the prompt, stating the real status. */
export function verificationSentence(schemeId: string): string {
  const v = VERIFIED_SPECS[schemeId]
  if (!v) {
    return "NOT VERIFIED: this paper's structure and grids have not been checked against the board's published specification. Treat every mark as indicative only and check it against the real mark scheme before using it with students."
  }
  return `Verified against ${v.document} (${v.issue}) on ${v.checkedOn}. ${v.scope}`
}
