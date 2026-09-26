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

/** A speaker's name as the play editions print it above a speech: "LADY MACBETH". */
const SPEAKER = /^[A-Z][A-Z’' .-]+$/

/**
 * A passage of a held PLAY, cut by passage() and set out as a guide prints
 * one: each speech as "SPEAKER: line / line", and speeches and stage
 * directions joined by " / ", the line mark types.ts asks for. A block that
 * continues a speech after a stage direction carries no name, as in the
 * edition, and a passage that is one speaker's soliloquy prints none.
 *
 * WHY IT EXISTS (26 September 2026). The Macbeth guide printed three passages
 * in the Folger Shakespeare Library's text, which Folger licenses for
 * non-commercial use only, and two more pasted in as strings. Cutting all five
 * from the held edition means none can differ from it; this only lays them out.
 *
 * `prose` joins a speech's lines with a space instead of " / ". The editions
 * wrap prose at a fixed width, so those breaks are the printer's, and marking
 * them as verse lines would misdescribe the sleepwalking scene, which is prose.
 *
 * Stage directions are bracketed, as the guides print them, and the edition's
 * underscores ("[_Exit._]") are dropped: they mark italic type, not words.
 */
export function playPassage(
  text: TextData,
  sectionId: string,
  from: string,
  to: string,
  opts: { prose?: boolean } = {},
): string {
  const section = text.sections.find((s) => s.id === sectionId)
  // The edition marks a stage direction by its class; passage() returns plain
  // text, so the directions are collected here to be recognised again.
  const directions = new Set(
    (section?.content ?? '')
      .split(/<\/p>\s*/)
      .filter((b) => /^<p class="italic/.test(b.trim()))
      .map((b) => decode(b.replace(/<[^>]+>/g, '').trim())),
  )
  const join = (lines: string[]) =>
    lines
      .map((l) => l.trim())
      .filter(Boolean)
      .join(opts.prose ? ' ' : ' / ')
  return passage(text, sectionId, from, to)
    .split('\n\n')
    .map((block) => {
      if (directions.has(block)) return `[${block.replace(/_/g, '').replace(/^\[|\]$/g, '')}]`
      const [first, ...rest] = block.split('\n')
      const set =
        SPEAKER.test(first.trim()) && rest.length > 0
          ? `${first.trim()}: ${join(rest)}`
          : join([first, ...rest])
      return set.replace(/_/g, '')
    })
    .join(' / ')
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
