/**
 * The held edition's HTML for one scene, set out so the viewer prints it as a
 * play.
 *
 * WHAT BROKE (26 September 2026, seen in the browser; every test passed). The
 * viewer prints a scene that carries notes as plain text with its line breaks
 * kept, and a scene without notes as HTML, where a line break inside a
 * paragraph is only white space. The old reader put notes on every scene it
 * printed, so this never showed. On the whole play 16 of the 28 scenes have no
 * notes, and their verse ran on as prose ("There’s no art To find the mind’s
 * construction in the face: He was a gentleman"). Every scene did the same
 * when a student switched the overlays off. The edition's underscores, which
 * mark italic type ("[_Exeunt._]"), were printed as underscores in both, 206
 * of them; and the scene's place ("A heath."), which the old reader gave in
 * its opening stage direction, is held as `setting` and the viewer never
 * prints it.
 *
 * So each line break inside a verse speech gets a <br> before it, which breaks
 * the line in HTML and is deleted with the other tags in plain text, where the
 * "\n" still breaks it and each note's text, cut with its "\n", is still found.
 * Prose is left to flow: its breaks are the printer's, at a fixed width, and
 * a <br> there set the Porter out as ragged verse. A speech is prose when at
 * least three in ten of its continuing lines open in lower case, the rule
 * macbeth-pages-print-the-held-text.test.ts uses; in this edition that splits
 * 22 prose speeches from 365 verse ones, and the nearest verse speech has one
 * such line in seven. The speaker's name always gets its own line. The
 * underscores become <em>, and the place is printed first, in the style of the
 * stage directions. The words are the edition's; only the setting changes.
 *
 * The other plays share the viewer and its first two defects, and are not
 * changed here: this is the one reader that mounts the viewer on a held play
 * directly.
 */
export function setForTheViewer(html: string, place?: string): string {
  const body = html
    .replace(/_([^_\n<>]+)_/g, '<em>$1</em>')
    .replace(/<p([^>]*)>([\s\S]*?)<\/p>/g, (_, attrs: string, inner: string) => {
      const cls = attrs.replace(/class="/, 'class="mb-4 ') || ' class="mb-4"'
      const name = /^<strong>[^<]*<\/strong>\n/.exec(inner)?.[0] ?? ''
      const lines = inner.slice(name.length).split('\n')
      const rest = lines.slice(1)
      const prose =
        rest.length > 0 && rest.filter((l) => /^[a-z]/.test(l.trim())).length / rest.length >= 0.3
      const said = lines.join(prose ? '\n' : '<br>\n')
      return `<p${cls}>${name.replace(/\n$/, '<br>\n')}${said}</p>`
    })
  return place ? `<p class="mb-4 italic text-muted-foreground">${place}</p>\n\n${body}` : body
}
