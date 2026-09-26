import type { TextData } from '@/components/study/InteractiveTextViewer'

/**
 * A passage cut out of a held edition, for a guide's printed extracts.
 *
 * WHY A FUNCTION RATHER THAN A STRING. A passage typed into a guide can drop a
 * clause and nobody notices; a passage cut from src/data/full-texts cannot
 * differ from the edition. It also means the long passage is never written out
 * by hand at all, which is what the model writing a guide cannot safely do for
 * a text still in copyright elsewhere (26 September 2026).
 *
 * `from` and `to` are short phrases from the first and last paragraph (or, in
 * a poem, line) of the passage, in the section with id `sectionId`. The
 * passage runs from the start of the paragraph containing `from` to the end of
 * the one containing `to`. Either missing, or `to` before `from`, throws, so a
 * passage cannot silently drift if the edition is regenerated.
 *
 * Paragraphs come back separated by a blank line and a poem's lines by a line
 * break, as plain text: the guide renders it, not the edition's HTML.
 */
export function passage(text: TextData, sectionId: string, from: string, to: string): string {
  const section = text.sections.find((s) => s.id === sectionId)
  if (!section) throw new Error(`passage: no section "${sectionId}" in ${text.title}`)
  const blocks = section.content
    .split(/<\/p>\s*/)
    .map((b) =>
      decode(
        b
          .replace(/<br\s*\/?>\s*/g, '\n')
          .replace(/<[^>]+>/g, '')
          .trim(),
      ),
    )
    .filter(Boolean)
  const lower = (s: string) => s.toLowerCase()
  const start = blocks.findIndex((b) => lower(b).includes(lower(from)))
  if (start < 0) throw new Error(`passage: "${from}" not found in ${text.title} ${sectionId}`)
  const endOffset = blocks.slice(start).findIndex((b) => lower(b).includes(lower(to)))
  if (endOffset < 0)
    throw new Error(`passage: "${to}" not found after "${from}" in ${text.title} ${sectionId}`)
  return blocks.slice(start, start + endOffset + 1).join('\n\n')
}

/** Each line of a poem held as one section of stanza paragraphs; stanzas end with "". */
export function poemLines(text: TextData): string[] {
  const section = text.sections[0]
  if (!section) throw new Error(`poemLines: ${text.title} has no sections`)
  return section.content
    .split(/<\/p>\s*/)
    .map((stanza) =>
      decode(stanza.replace(/<[^>]+>/g, (tag) => (/^<br/.test(tag) ? '\n' : ''))).trim(),
    )
    .filter(Boolean)
    .flatMap((stanza, i, all) => [...stanza.split(/\n\s*/), ...(i < all.length - 1 ? [''] : [])])
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
}
