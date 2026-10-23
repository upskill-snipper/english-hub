/**
 * The boards that set a text, as one label, read from the registry.
 *
 * WHY THIS EXISTS. The board-less set-text index (src/app/revision/texts/
 * page.tsx) carried a hand-written board list beside each title: "AQA only",
 * "OCR only", "IGCSE + some legacy GCSE". Nothing read them, so they drifted
 * from SET_TEXTS without anybody noticing. On 23 October 2026 four were false:
 * Pride and Prejudice was "AQA only" against six boards in the registry, Much
 * Ado About Nothing "AQA only" against four, Julius Caesar "OCR only" when OCR
 * does not set it and AQA does, and DNA "AQA only" against AQA and OCR. Two
 * rows labelled texts "Cambridge IGCSE 0475" that no 0475 syllabus has ever
 * listed.
 *
 * So the label is derived here, and a source scan in
 * spec-truth-agrees-with-registry.test.ts stops a literal list coming back.
 *
 * A slug that is not in the registry throws. The page is static and its slugs
 * are tested, so this cannot fire in production for a reason other than a
 * typo, and a typo should fail the build rather than print nothing.
 */

import { getDisplayName } from './board-config'
import { getSetText } from './set-texts'

/** "AQA / Edexcel / OCR / Eduqas", from the row's own boards. */
export function boardsLabel(slug: string): string {
  const text = getSetText(slug)
  if (!text) throw new Error(`boardsLabel: no set text with slug "${slug}"`)
  if (text.boards.length === 0) return 'on no current specification we have read'
  return text.boards.map(getDisplayName).join(' / ')
}
