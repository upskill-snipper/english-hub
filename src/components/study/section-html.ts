/**
 * A section's HTML as a small tree, with each piece of text placed in the
 * section's plain text, so the viewer can lay its highlights into the HTML
 * rather than throwing the HTML away.
 *
 * WHY (26 September 2026). The viewer printed a section with notes as plain
 * text: it deleted every tag, found each note in what was left, and printed
 * the result with its line breaks kept. So a scene with notes lost its bold
 * speaker names, its italic stage directions and the spacing between
 * speeches, and prose broke wherever the printer had run out of room, while
 * the same scene with the overlays switched off was printed properly. Every
 * play scene with a note looked like that.
 *
 * `plain` is exactly the text the notes are cut from and matched against: the
 * HTML with its tags deleted and its entities decoded, as it always was. Each
 * text node records where it starts in `plain`, which is how a highlight finds
 * the pieces of HTML it covers.
 *
 * Only the tags the study texts use are rebuilt, with their class and nothing
 * else, the same allowlist as src/lib/html/sanitise.ts. Any other tag is
 * dropped and its text kept, so this can print nothing that runs, loads or
 * navigates.
 */

export type HtmlNode =
  | { kind: 'text'; text: string; start: number }
  | {
      kind: 'element'
      tag: string
      className?: string
      children: HtmlNode[]
      /** Where the element's text starts and ends in `plain`. */
      start: number
      end: number
    }

/** Elements that make a block. A highlight never wraps one of these. */
export const BLOCK_TAGS = new Set(['p', 'div', 'blockquote', 'ul', 'ol', 'li', 'h2', 'h3', 'h4'])

const INLINE_TAGS = new Set(['strong', 'b', 'em', 'i', 'u', 'span'])

/** Tags with no closing tag. */
const VOID_TAGS = new Set(['br'])

/**
 * The entities the play editions escape, back to the characters they stand for.
 *
 * An entity left in plain text is shown to the student as written. Macbeth's
 * Act 4, Scene 1 prints a stage direction ending "&amp;c.", and once the scene
 * carried notes it read "Black Spirits, &amp;c." on the page (26 September
 * 2026). `&amp;` goes last, so "&amp;lt;" becomes "&lt;" and not "<".
 */
export function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

/** The HTML as a tree, and the plain text its positions refer to. */
export function parseSectionHtml(html: string): { nodes: HtmlNode[]; plain: string } {
  const root: HtmlNode[] = []
  const open: Extract<HtmlNode, { kind: 'element' }>[] = []
  let plain = ''
  const here = () => (open.length ? open[open.length - 1].children : root)

  // Every "<...>" is a tag, as it was when the tags were simply deleted; a "<"
  // that opens no tag is text.
  for (const [token] of html.matchAll(/<[^>]*>|<|[^<]+/g)) {
    const tag = /^<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\b([^>]*)>$/.exec(token)
    if (token.length > 1 && token.startsWith('<')) {
      if (!tag) continue
      const [, closing, rawName, attrs] = tag
      const name = rawName.toLowerCase()
      const known = BLOCK_TAGS.has(name) || INLINE_TAGS.has(name) || VOID_TAGS.has(name)
      if (!known) continue
      if (closing) {
        const at = open.map((e) => e.tag).lastIndexOf(name)
        if (at === -1) continue
        for (const e of open.splice(at)) e.end = plain.length
        continue
      }
      const cls = /\sclass\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(attrs)
      const element: Extract<HtmlNode, { kind: 'element' }> = {
        kind: 'element',
        tag: name,
        className: cls?.[1] ?? cls?.[2] ?? undefined,
        children: [],
        start: plain.length,
        end: plain.length,
      }
      here().push(element)
      if (!VOID_TAGS.has(name)) open.push(element)
      continue
    }
    const text = decodeEntities(token)
    here().push({ kind: 'text', text, start: plain.length })
    plain += text
  }
  for (const e of open) e.end = plain.length
  return { nodes: root, plain }
}
