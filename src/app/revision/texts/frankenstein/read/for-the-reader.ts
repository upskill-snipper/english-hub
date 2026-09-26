import type { TextData } from '@/components/study/InteractiveTextViewer'
import { CHARACTERS, CONTEXT_NOTES, NOTES, THEMES } from './notes'

/**
 * The held edition as this reader prints it: the edition's italics as
 * italics, and the notes and panels of ./notes.ts merged on by section title.
 *
 * WHAT BROKE (found 26 September 2026, reviewing the reader the day it was
 * rebuilt on the held text). Project Gutenberg's plain text marks italic type
 * with underscores, and the held file keeps them, as it keeps every other
 * character of the edition. The viewer printed them: forty-six spans, among
 * them "_To Mrs. Saville, England._" under each of Walton's letters and
 * "_I will be with you on your wedding-night._" where Victor recalls the
 * threat. The plays had the same fault, and FullTextReader sets their
 * underscores as italics (src/components/study/set-play-for-the-viewer.ts);
 * this reader mounts the viewer directly, so it does the same here.
 *
 * Paired within a paragraph only, so a stray underscore could never italicise
 * the rest of a chapter; there is none, and
 * src/__tests__/frankenstein-reader-notes-land.test.ts fails if one appears.
 * The viewer finds notes in the text with its tags deleted, so a note is
 * found in the italic text exactly as it was in the held one.
 */
export function forTheReader(held: TextData): TextData {
  return {
    ...held,
    sections: held.sections.map((section) => {
      const content = section.content.replace(/_([^_<>]+)_/g, '<em>$1</em>')
      const annotations = NOTES[section.title]
      return annotations ? { ...section, content, annotations } : { ...section, content }
    }),
    characters: CHARACTERS,
    themes: THEMES,
    contextNotes: CONTEXT_NOTES,
  }
}
