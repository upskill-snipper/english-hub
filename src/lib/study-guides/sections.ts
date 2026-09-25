import { SECTION_KEYS, type SectionKey, type StudyGuide } from './types'

/** The sections a guide actually holds, in reading order. Empty arrays do not count. */
export function sectionsPresent(guide: StudyGuide): SectionKey[] {
  return SECTION_KEYS.filter((key) => {
    if (key === 'overview') return (guide.overview?.summary.length ?? 0) > 0
    if (key === 'examPractice') return (guide.examPractice?.questions.length ?? 0) > 0
    if (key === 'modelAnswer') return Boolean(guide.modelAnswer?.paragraph)
    const value = guide[key]
    return Array.isArray(value) && value.length > 0
  })
}

/**
 * Whether a guide holds every section itself, so it can BE a text's page rather
 * than supplement one. A guide that points some sections at an existing page
 * through `native` is a supplement and belongs on that page.
 */
export function isCompleteGuide(guide: StudyGuide): boolean {
  const present = new Set(sectionsPresent(guide))
  return SECTION_KEYS.every((k) => present.has(k))
}
