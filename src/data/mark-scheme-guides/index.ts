import { markSchemeAnchor } from '@/lib/marking/mark-scheme-anchor'
import { GUIDES_HOME } from '@/lib/marking/guide-links'
import type { MarkSchemeGuide } from './types'

import { GUIDE as aqaLangPaper1 } from './aqa-lang-paper1'
import { GUIDE as aqaLangPaper2 } from './aqa-lang-paper2'
import { GUIDE as aqaLitPaper1 } from './aqa-lit-paper1'
import { GUIDE as aqaLitPaper2 } from './aqa-lit-paper2'
import { GUIDE as edexcelLangPaper1 } from './edexcel-lang-paper1'
import { GUIDE as edexcelLangPaper2 } from './edexcel-lang-paper2'
import { GUIDE as edexcelLitPaper1 } from './edexcel-lit-paper1'
import { GUIDE as edexcelLitPaper2 } from './edexcel-lit-paper2'
import { GUIDE as ocrLangComponent01 } from './ocr-lang-component01'
import { GUIDE as ocrLangComponent02 } from './ocr-lang-component02'
import { GUIDE as ocrLitComponent01 } from './ocr-lit-component01'
import { GUIDE as ocrLitComponent02 } from './ocr-lit-component02'
import { GUIDE as eduqasLangComp1 } from './eduqas-lang-comp1'
import { GUIDE as eduqasLangComp2 } from './eduqas-lang-comp2'
import { GUIDE as eduqasLitComp1 } from './eduqas-lit-comp1'
import { GUIDE as eduqasLitComp2 } from './eduqas-lit-comp2'
import { GUIDE as edexcelIgcseLangPaper1 } from './edexcel-igcse-lang-paper1'
import { GUIDE as edexcelIgcseLit } from './edexcel-igcse-lit'
import { GUIDE as cambridge0500Paper1 } from './cambridge-0500-paper1'
import { GUIDE as cambridge0500Paper2 } from './cambridge-0500-paper2'
import { GUIDE as cambridge0990Paper1 } from './cambridge-0990-paper1'
import { GUIDE as cambridge0990Paper2 } from './cambridge-0990-paper2'

export type { MarkSchemeGuide } from './types'

/**
 * Every mark-scheme guide, one for each paper the AI marker can mark against
 * (24 October 2026; ./types.ts says what a guide is and why they exist).
 *
 * In the order a reader meets them on /resources/teacher-library/mark-schemes:
 * the four UK GCSE boards, Language before Literature, then International
 * GCSE. the-mark-scheme-guides-are-complete.test.ts holds this list to the
 * marker's registry, so a paper added there without a guide fails.
 */
export const MARK_SCHEME_GUIDES: readonly MarkSchemeGuide[] = [
  aqaLangPaper1,
  aqaLangPaper2,
  aqaLitPaper1,
  aqaLitPaper2,
  edexcelLangPaper1,
  edexcelLangPaper2,
  edexcelLitPaper1,
  edexcelLitPaper2,
  ocrLangComponent01,
  ocrLangComponent02,
  ocrLitComponent01,
  ocrLitComponent02,
  eduqasLangComp1,
  eduqasLangComp2,
  eduqasLitComp1,
  eduqasLitComp2,
  edexcelIgcseLangPaper1,
  edexcelIgcseLit,
  cambridge0500Paper1,
  cambridge0500Paper2,
  cambridge0990Paper1,
  cambridge0990Paper2,
]

/** Where the guides live (shared with the client pages that link to them). */
export { GUIDES_HOME }

/** A guide's URL slug: the anchor its card has always had on the index page. */
export function guideSlug(guide: Pick<MarkSchemeGuide, 'title'>): string {
  return markSchemeAnchor(guide.title)
}

/** A guide's page. */
export function guideHref(guide: Pick<MarkSchemeGuide, 'title'>): string {
  return `${GUIDES_HOME}/${guideSlug(guide)}`
}

export function guideBySlug(slug: string): MarkSchemeGuide | null {
  return MARK_SCHEME_GUIDES.find((g) => guideSlug(g) === slug) ?? null
}

/** The guide for one of the marker's schemes, or null. */
export function guideForScheme(schemeId: string): MarkSchemeGuide | null {
  return MARK_SCHEME_GUIDES.find((g) => g.schemeId === schemeId) ?? null
}

/** "1 hour 45 minutes", "2 hours". */
export function durationWords(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const hours = h === 0 ? '' : h === 1 ? '1 hour' : `${h} hours`
  const mins = m === 0 ? '' : `${m} minutes`
  return [hours, mins].filter(Boolean).join(' ')
}

/** The number of questions a reader answers or chooses between, counted as the guide lists them. */
export function questionCount(guide: MarkSchemeGuide): number {
  return guide.sections.reduce((n, s) => n + s.questions.length, 0)
}

/**
 * What a search result shows for each guide: at most 60 characters, the most
 * Google prints (src/__tests__/a-title-fits-in-a-search-result.test.ts). A
 * guide's own title is not enough: "Edexcel International GCSE English
 * Literature Paper 1" is 53 characters before "mark scheme" is said, and the
 * section's " - The English Hub" template would take any of them past 60. So
 * each is written here, with the qualification a student types ("GCSE",
 * "IGCSE", the Cambridge syllabus code), and the page sets it as an absolute
 * title. the-mark-scheme-guides-are-complete.test.ts measures every one,
 * since a title computed per page cannot be measured from the page's source.
 */
const SEARCH_TITLE: Readonly<Record<string, string>> = {
  'aqa-lang-paper1': 'AQA English Language Paper 1 mark scheme, explained',
  'aqa-lang-paper2': 'AQA English Language Paper 2 mark scheme, explained',
  'aqa-lit-paper1': 'AQA English Literature Paper 1 mark scheme, explained',
  'aqa-lit-paper2': 'AQA English Literature Paper 2 mark scheme, explained',
  'edexcel-lang-paper1': 'Edexcel GCSE English Language Paper 1 mark scheme',
  'edexcel-lang-paper2': 'Edexcel GCSE English Language Paper 2 mark scheme',
  'edexcel-lit-paper1': 'Edexcel GCSE English Literature Paper 1 mark scheme',
  'edexcel-lit-paper2': 'Edexcel GCSE English Literature Paper 2 mark scheme',
  'ocr-lang-component01': 'OCR GCSE English Language Component 01 mark scheme',
  'ocr-lang-component02': 'OCR GCSE English Language Component 02 mark scheme',
  'ocr-lit-component01': 'OCR GCSE English Literature Component 01 mark scheme',
  'ocr-lit-component02': 'OCR GCSE English Literature Component 02 mark scheme',
  'eduqas-lang-comp1': 'Eduqas GCSE English Language Component 1 mark scheme',
  'eduqas-lang-comp2': 'Eduqas GCSE English Language Component 2 mark scheme',
  'eduqas-lit-comp1': 'Eduqas GCSE English Literature Component 1 mark scheme',
  'eduqas-lit-comp2': 'Eduqas GCSE English Literature Component 2 mark scheme',
  'edexcel-igcse-lang-paper1': 'Edexcel IGCSE English Language A Paper 1 mark scheme',
  'edexcel-igcse-lit': 'Edexcel IGCSE English Literature Paper 1 mark scheme',
  'cambridge-0500-paper1': 'Cambridge 0500 First Language English Paper 1 mark scheme',
  'cambridge-0500-paper2': 'Cambridge 0500 First Language English Paper 2 mark scheme',
  'cambridge-0990-paper1': 'Cambridge 0990 First Language English Paper 1 mark scheme',
  'cambridge-0990-paper2': 'Cambridge 0990 First Language English Paper 2 mark scheme',
}

/** A guide's title in a search result; the guide's own title where none is written. */
export function guideSearchTitle(guide: MarkSchemeGuide): string {
  return SEARCH_TITLE[guide.schemeId] ?? `${guide.title} mark scheme`
}

/** A guide's description in a search result: at most 160 characters, for the same reason. */
export function guideSearchDescription(guide: MarkSchemeGuide): string {
  return `What each question on ${guide.title} asks, what earns marks and what each level looks like, in plain words.`
}
