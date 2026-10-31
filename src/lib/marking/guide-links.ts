import { markSchemeAnchor } from './mark-scheme-anchor'

/**
 * Where each paper's mark-scheme guide lives, without its content
 * (24 October 2026).
 *
 * The guides themselves (src/data/mark-scheme-guides) are long, and the
 * marking hub and the essay form are client pages: importing the guides there
 * would put every guide's text into those pages' JavaScript to build a link.
 * This maps each of the marker's scheme ids to its guide's title, whose anchor
 * is the guide's URL slug. the-mark-scheme-guides-are-complete.test.ts holds
 * it to the guides, so a guide renamed there cannot leave a link here going
 * nowhere.
 */

export const GUIDES_HOME = '/resources/teacher-library/mark-schemes'

export const GUIDE_TITLE_BY_SCHEME: Readonly<Record<string, string>> = {
  'aqa-lang-paper1': 'AQA English Language Paper 1',
  'aqa-lang-paper2': 'AQA English Language Paper 2',
  'aqa-lit-paper1': 'AQA English Literature Paper 1',
  'aqa-lit-paper2': 'AQA English Literature Paper 2',
  'edexcel-lang-paper1': 'Edexcel English Language Paper 1',
  'edexcel-lang-paper2': 'Edexcel English Language Paper 2',
  'edexcel-lit-paper1': 'Edexcel English Literature Paper 1',
  'edexcel-lit-paper2': 'Edexcel English Literature Paper 2',
  'ocr-lang-component01': 'OCR English Language Component 01',
  'ocr-lang-component02': 'OCR English Language Component 02',
  'ocr-lit-component01': 'OCR English Literature Component 01',
  'ocr-lit-component02': 'OCR English Literature Component 02',
  'eduqas-lang-comp1': 'Eduqas English Language Component 1',
  'eduqas-lang-comp2': 'Eduqas English Language Component 2',
  'eduqas-lit-comp1': 'Eduqas English Literature Component 1',
  'eduqas-lit-comp2': 'Eduqas English Literature Component 2',
  'edexcel-igcse-lang-paper1': 'Edexcel International GCSE English Language A Paper 1',
  'edexcel-igcse-lit': 'Edexcel International GCSE English Literature Paper 1',
  'cambridge-0500-paper1': 'Cambridge IGCSE First Language English Paper 1',
  'cambridge-0500-paper2': 'Cambridge IGCSE First Language English Paper 2',
  'cambridge-0990-paper1': 'Cambridge IGCSE (9-1) First Language English Paper 1',
  'cambridge-0990-paper2': 'Cambridge IGCSE (9-1) First Language English Paper 2',
}

/** The guide page for one of the marker's schemes, or null where there is none. */
export function guidePageForScheme(schemeId: string): string | null {
  const title = GUIDE_TITLE_BY_SCHEME[schemeId]
  return title ? `${GUIDES_HOME}/${markSchemeAnchor(title)}` : null
}

/**
 * Papers whose guide, checked against the board's documents on 24 October
 * 2026, shows that the AI marker's own data for the paper does not follow the
 * paper's real questions: questions it marks that the paper does not have, or
 * marks it splits differently. The guide follows the board; correcting the
 * marker changes how essays are scored, which is the founder's decision, so
 * until then the guide says plainly that a mark from the marker is a rough
 * guide for this paper. Each difference is listed in the guide's docblock.
 */
export const MARKER_NOT_ALIGNED: ReadonlySet<string> = new Set([
  // ocr-lang-component01 and ocr-lang-component02 left on 24 October 2026,
  // when the marker took OCR's questions (mark-schemes/ocr-lang.ts).
  // eduqas-lang-comp1 and eduqas-lang-comp2 left on 24 October 2026, when the
  // marker took Eduqas's questions, marks and writing tasks
  // (mark-schemes/eduqas-lang.ts).
  // edexcel-igcse-lit left on 24 October 2026, when the marker took Pearson's
  // one grid per section and the AO3 and AO4 guidance was the right way round
  // (mark-schemes/edexcel-igcse-lit.ts).
])
