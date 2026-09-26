/**
 * Load one text's study guide, and nothing else.
 *
 * LAZY ON PURPOSE. A guide is several thousand words. The catch-all route
 * /revision/texts/[slug] serves forty-odd texts, and a static import of every
 * guide from it would put all of them into one server bundle, the same shape as
 * the 900-question bank that was being pulled into a spelling game. Each entry
 * in the register is a separate dynamic import, so a page loads the one guide
 * it renders.
 *
 * The register is checked against its directory by study-guides.test.ts: a
 * guide file with no entry, or an entry with no file, fails the suite, so a
 * guide cannot be written and then silently never reached.
 */

import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import type { StudyGuide } from './types'

export { isCompleteGuide, sectionsPresent } from './sections'

export function hasStudyGuide(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(STUDY_GUIDE_LOADERS, slug)
}

export async function loadStudyGuide(slug: string): Promise<StudyGuide | null> {
  const load = STUDY_GUIDE_LOADERS[slug]
  return load ? load() : null
}
