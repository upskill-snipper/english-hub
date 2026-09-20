import DOMPurify from 'dompurify'

/**
 * Sanitise a fragment of HTML in the browser OR on the server.
 *
 * THE DEFECT. `DOMPurify.sanitize` needs a DOM. Imported into a component that
 * renders on the server it has no `sanitize` method at all, and calling it
 * throws `TypeError: DOMPurify.sanitize is not a function` - which Next catches
 * into an error boundary, so the page returns 200 with the content missing and
 * nothing in the user's face saying why.
 *
 * It was latent for a long time because the one server-rendered caller only
 * reached that branch when a text section had NO annotations, and the only text
 * with a full-text page was Macbeth, whose sections all have them. Adding twelve
 * public-domain plays with no annotations turned it on for every one of them:
 * twelve pages that rendered a title, a byline and no play.
 *
 * WHAT THE SERVER PATH DOES, because "there is no DOM so skip it" would be the
 * wrong answer. Returning the input unchanged would make this function a lie on
 * the half of the calls that need it most. Instead the server strips to a small
 * allowlist of formatting tags and drops every attribute except `class`, which
 * is enough for the study content we render and leaves nothing that can execute.
 * The browser still gets DOMPurify, which is stricter and context-aware.
 */

/** Tags the study content actually uses. Everything else is removed. */
const ALLOWED = new Set([
  'p',
  'br',
  'strong',
  'b',
  'em',
  'i',
  'u',
  'span',
  // `div` joined the list on 20 September 2026, when the poem analysis panels
  // started rendering on the server. The authored study HTML uses one for a
  // callout box (La Belle Dame sans Merci's version note); stripping it left
  // the client and server rendering different trees. With every attribute but
  // `class` removed, a div can carry nothing that runs, loads or navigates.
  'div',
  'blockquote',
  'ul',
  'ol',
  'li',
  'h2',
  'h3',
  'h4',
])

/**
 * A conservative server-side strip.
 *
 * Deliberately not a parser. It removes any tag not on the allowlist, removes
 * every attribute except `class`, and deletes script and style elements with
 * their contents - so nothing survives that can run, load or navigate.
 */
export function sanitiseOnServer(html: string): string {
  return (
    html
      // Elements whose CONTENT is dangerous, not just their tag.
      .replace(/<(script|style|iframe|object|embed|template)\b[\s\S]*?<\/\1\s*>/gi, '')
      .replace(/<(script|style|iframe|object|embed|template)\b[^>]*\/?>/gi, '')
      .replace(/<\/?([a-zA-Z][a-zA-Z0-9-]*)\b([^>]*)>/g, (match, rawTag: string, attrs: string) => {
        const tag = rawTag.toLowerCase()
        if (!ALLOWED.has(tag)) return ''
        if (match.startsWith('</')) return `</${tag}>`
        // Keep `class` only. No href, no src, no event handlers, no style.
        const cls = /\sclass\s*=\s*("([^"]*)"|'([^']*)')/i.exec(attrs)
        const value = cls?.[2] ?? cls?.[3]
        const safe = value ? ` class="${value.replace(/["<>]/g, '')}"` : ''
        return `<${tag}${safe}>`
      })
  )
}

/** Sanitise wherever this runs. */
export function sanitiseHtml(html: string): string {
  // Feature-detect rather than check for `window`: DOMPurify is the thing that
  // may or may not be usable, so ask it directly.
  if (typeof DOMPurify.sanitize === 'function') return DOMPurify.sanitize(html)
  return sanitiseOnServer(html)
}
