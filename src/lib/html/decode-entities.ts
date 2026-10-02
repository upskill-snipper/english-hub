/**
 * Turn the character references in a run of text back into the characters
 * they stand for: `&amp;c.` becomes `&c.`, `&rsquo;` becomes `’`.
 *
 * THE DEFECT (found 26 September 2026). The full-text readers hold each play
 * as HTML, and render it one of two ways. With no overlay switched on, the
 * HTML goes to the browser and the browser decodes it. With an overlay on,
 * which is the default, `AnnotatedContent` strips the tags with a regex and
 * hands the remainder to React as TEXT, so every reference in it reached the
 * page literally. Hamlet's stage directions read "Enter two Clowns with spades,
 * &amp;c." on the live site, and so did seven other plays.
 *
 * Why this is decoded at render time and not fixed in the data: the data is
 * correct. It is HTML, the other render path needs it to be HTML, and in HTML
 * `&amp;` is how an ampersand is written. The bug is a tag-stripper that
 * stopped halfway to plain text. Call this AFTER stripping tags, never before,
 * or an escaped `&lt;b&gt;` in the text would become a tag and be stripped.
 *
 * Unknown names are left exactly as written rather than guessed at.
 */

const NAMED: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  mdash: '—',
  ndash: '–',
  hellip: '…',
  laquo: '«',
  raquo: '»',
  middot: '·',
  bull: '•',
  eacute: 'é',
  egrave: 'è',
  euml: 'ë',
  auml: 'ä',
  ccedil: 'ç',
}

export function decodeHtmlEntities(text: string): string {
  return text.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]*);/g, (whole, ref: string) => {
    if (ref[0] === '#') {
      const hex = ref[1] === 'x' || ref[1] === 'X'
      const code = parseInt(ref.slice(hex ? 2 : 1), hex ? 16 : 10)
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff
        ? String.fromCodePoint(code)
        : whole
    }
    return Object.prototype.hasOwnProperty.call(NAMED, ref) ? NAMED[ref] : whole
  })
}
