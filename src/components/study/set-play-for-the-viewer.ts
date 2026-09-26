/**
 * A held play's scene, set out so the viewer prints it as a play.
 *
 * Every held play goes through this: FullTextReader applies it to each scene
 * of a text whose type is 'play', and the Macbeth reader, which mounts the
 * viewer itself, applies it too. It has no imports on purpose, so that
 * scripts/generate-text-annotations.mjs can load it with Node's own type
 * stripping and cut each highlight from exactly the text the viewer prints.
 *
 * WHAT BROKE (26 September 2026, seen in the browser; every test passed). The
 * viewer printed a scene without notes as HTML, where a line break inside a
 * paragraph is only white space, so verse ran on as prose: on first load
 * Hamlet showed 8 of its 20 scenes like that, Romeo and Juliet 5 of its 24
 * ("Before you visit him, to make inquiry Of his behaviour."), and Macbeth 16
 * of 28. Gutenberg's underscores, which mark italic type ("[_Exeunt._]"), were
 * printed as written, 78 of them on the Hamlet reader. And each scene's place,
 * held as `setting`, was never shown. Macbeth was mended first, in its own
 * reader; this is that repair, moved here so that every play has it.
 *
 * What it does, and why each is safe for the notes. A line break inside verse
 * gets a <br> before it, which breaks the line in HTML and is deleted with the
 * other tags when the viewer takes the plain text to find a note, where the
 * "\n" is still there, so a note cut with its "\n" is still found. The
 * speaker's name gets its own line the same way. Underscores become <em>, and
 * the place is printed first, in the style of the stage directions. No word of
 * the edition changes; src/__tests__/every-play-is-set-as-a-play.test.ts holds
 * that for all thirteen plays.
 *
 * PROSE IS LEFT TO FLOW, because its line breaks are the printer's, made at a
 * fixed width, and a <br> there sets a clown out as ragged verse. See
 * `isProse` for how a speech is judged, and `breaksAfter` for the lines inside
 * prose that do keep their break.
 *
 * THE OTHER TEXTS pass through here too (`setSectionForTheViewer`), so that
 * FullTextReader and the annotation generator have one way to print any held
 * text: a novel's underscores become italics (`italicsAsItalics`) and a poem's
 * lines are verse (`setPoemForTheViewer`). The module still has no imports,
 * for the generator's sake.
 */

/**
 * The class that marks verse for the reader (see VERSE_LINE_CLASS for its
 * stylesheet): each line a student would quote as one line keeps
 * its start at the margin, and whatever the screen makes it wrap onto is
 * indented under it.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers on a 390px
 * phone). A verse line longer than the screen wrapped to the margin, so its
 * end looked like the next line of verse: Sonnet 116 read "Let me not to the
 * marriage of true" and then "minds" as though that were line 2, and Hamlet's
 * "To be, or not to be" did the same. A student copying the lines out would
 * divide them wrongly, which an examiner reads as misquotation.
 *
 * This class says which blocks are verse; the viewer lays each of their lines
 * out as a block of its own (see `verseLinesAsBlocks` and VERSE_LINE_CLASS),
 * and the stylesheet hangs the indent on those. Prose is given no class, so it
 * flows as before.
 */
export const VERSE_CLASS = 'verse'

/**
 * The class of one line of verse as the reader lays it out: a block, its
 * first line at the margin and anything the screen wraps onto indented under
 * it (src/app/globals.css, `.prose-reader .verse-line`).
 *
 * WHAT BROKE (found 27 September 2026, in a review of the fix above). The
 * indent was first one rule on the verse block, `text-indent: 2em hanging
 * each-line`, which indents every line after a soft wrap and none after a
 * <br>. Only Chrome 146 and later, Safari 15 and later and Firefox 121 and
 * later know those keywords, and a browser that does not drops the whole rule.
 * Samsung Internet knows neither, in any version (MDN's compatibility data,
 * read that day). Measured in Chromium 145 at 390px, the Hamlet reader had
 * 2,219 verse lines wrapped and none of them indented, and Sonnet 116 had 11
 * wrapped and none indented. A line that is a block of its own takes the indent from
 * `padding` and a negative `text-indent`, which every browser has.
 */
export const VERSE_LINE_CLASS = 'verse-line'

/**
 * Gutenberg's underscores, which mark italic type ("_Exeunt._"), as italics.
 * Paired within a run of text with no tag in it, so a stray underscore could
 * never italicise the rest of a chapter; the held texts have none.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). The plays
 * were given this that morning, and the novels were not: the reader printed
 * the underscores as written, 111 spans in Silas Marner ("_You_", "_their_"),
 * 51 in The Sign of Four ("_Au revoir_"), 37 in The War of the Worlds ("_Daily
 * Telegraph_") and 10 in Jekyll and Hyde ("_protégé_").
 */
export function italicsAsItalics(html: string): string {
  return html.replace(/_([^_<>]+)_/g, '<em>$1</em>')
}

/** Whether an <em> is left open after `s`, given whether one was open before it. */
function italicAfter(s: string, open: boolean): boolean {
  return [...s.matchAll(/<(\/?)em>/g)].reduce((_, m) => !m[1], open)
}

/** A line break as the held texts write it: <br> in a play, <br /> in a poem. */
const BREAK = /<br\s*\/?>/

/**
 * One verse block's inner HTML with each line in a VERSE_LINE_CLASS span.
 *
 * A line is whatever sits between two breaks, and it keeps the break that
 * ends it, inside its span: a break at the end of a block starts no new line,
 * where one between two blocks would print an empty one. The newline after a
 * break stays between the spans, where it was. Italics that run from one line
 * to the next (a song, set in italics from its first line to its last) are
 * closed at the end of each line and opened again at the start of the next,
 * so no tag crosses a line's edge. Only tags are added: the text, and so
 * every note's place in it, is what it was.
 */
function linesAsBlocks(inner: string): string {
  if (inner.includes(`class="${VERSE_LINE_CLASS}"`)) return inner
  const parts = inner.split(BREAK)
  let italic = false
  return parts
    .map((part, i) => {
      const last = i === parts.length - 1
      const lead = part.startsWith('\n') ? '\n' : ''
      const line = part.slice(lead.length)
      // A break that ends the block ends the line before it, and no more.
      if (last && !line.trim()) return part
      const reopen = italic ? '<em>' : ''
      italic = italicAfter(line, italic)
      const close = italic ? '</em>' : ''
      return `${lead}<span class="${VERSE_LINE_CLASS}">${reopen}${line}${close}${last ? '' : '<br>'}</span>`
    })
    .join('')
}

/** Whether an opening tag's attributes give it `cls` as one of its classes. */
function hasClass(attrs: string, cls: string): boolean {
  const value = /\bclass="([^"]*)"/.exec(attrs)?.[1] ?? ''
  return value.split(/\s+/).includes(cls)
}

/**
 * A section's HTML with every line of its verse laid out as a block, for the
 * hanging indent (see VERSE_LINE_CLASS). The viewer applies it to whatever it
 * is given, as it is printed, so a play, a poem and the verse a prose speech
 * quotes all get it, and so does any reader that mounts the viewer itself.
 *
 * The verse blocks are the ones marked VERSE_CLASS: a speech or a stanza (a
 * <p>), or a run of verse inside a prose speech (a <span>, which holds no
 * other span). Applying it twice changes nothing.
 */
export function verseLinesAsBlocks(html: string): string {
  if (!html.includes(VERSE_CLASS)) return html
  return html
    .replace(/<span\b([^>]*)>([\s\S]*?)<\/span>/g, (whole, attrs: string, inner: string) =>
      hasClass(attrs, VERSE_CLASS) ? `<span${attrs}>${linesAsBlocks(inner)}</span>` : whole,
    )
    .replace(/<p\b([^>]*)>([\s\S]*?)<\/p>/g, (whole, attrs: string, inner: string) =>
      hasClass(attrs, VERSE_CLASS) ? `<p${attrs}>${linesAsBlocks(inner)}</p>` : whole,
    )
}

/**
 * A line as the reader sees it, for measuring: tags and the edition's
 * bracketed stage directions removed, entities decoded, spaces collapsed. A
 * direction set into a verse line ("[_Aside._] If chance will have me king")
 * makes the line longer than the verse is.
 */
function bare(line: string): string {
  return line
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\[[^\]]*\]/g, '')
    .replace(/_/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * A line of prose the printer had to break: with a space and the next line's
 * first word it would reach FULL characters. Twelve of the editions wrap prose
 * at 71 characters and King Lear's at about 65, so 65 catches them all; about
 * one verse line in five hundred reaches it (measured on the thirteen plays,
 * 26 September 2026).
 */
const FULL = 65

/**
 * Shorter than this, a line inside a prose speech ends where the edition
 * chose to end it: a printer filling lines to 65 or 71 characters never stops
 * a line this early, so what follows is a song, a letter, a verse quotation or
 * a new start ("Ay, every inch a king." then "When I do stare, see how the
 * subject quakes.").
 */
const SHORT = 45

function firstWord(line: string): string {
  return bare(line).split(' ')[0] ?? ''
}

/**
 * Whether a speech, as its lines, is prose.
 *
 * Two tests, either enough. At least three in ten of its continuing lines open
 * in lower case, which a verse line in these editions almost never does (a
 * quotation mark or a dash before the first letter is passed over, so
 * "‘music with her silver sound’" counts). Or most of its lines are full (see
 * FULL). The first rule alone, which is how Macbeth's reader was mended,
 * missed the short prose speech whose next line happens to open with a name
 * or "I" - "I think Alexander the Great was born in Macedon" then "Philip of
 * Macedon, as I take it." - and set 56 such speeches across the thirteen
 * plays as verse, broken where the printer ran out of room; none of Macbeth's.
 * "Most" is strictly more than half of the lines that could be full (all but
 * the last), so a verse speech of three lines or more is not taken for prose
 * on one long line. A speech of two lines is taken for prose when its first
 * line is full: every such speech in the thirteen plays is prose (read on 26
 * September 2026; this said otherwise until then).
 */
export function isProse(lines: string[]): boolean {
  const rest = lines.slice(1)
  if (rest.length === 0) return false
  if (rest.filter((l) => /^[^A-Za-z]*[a-z]/.test(bare(l))).length / rest.length >= 0.3) return true
  const full = lines
    .slice(0, -1)
    .filter((l, i) => bare(l).length + 1 + firstWord(lines[i + 1]).length >= FULL).length
  return full * 2 > lines.length - 1
}

/**
 * A line as the printer measured it: tags removed and entities decoded, like
 * `bare`, but with its bracketed directions kept, because they took up room
 * on the line.
 */
function printed(line: string): string {
  return line
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/_/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * For each line of a speech but the last, whether it ends with a line break.
 * Verse breaks every line. Prose breaks after a short line (see SHORT), so a
 * clown's song or a letter read aloud keeps its lines while the prose around
 * it flows, and after a line that stops early among others that do.
 *
 * WHAT BROKE (26 September 2026, in a review of the readers). SHORT alone ran
 * together the verse a prose speech quotes wherever its lines were 45
 * characters or longer. Hamlet's Pyrrhus speech in Act 2, Scene 2 read
 * "Hath now this dread and black complexion smear'd With heraldry more
 * dismal."; his couplet in Act 5, Scene 1 read "O, that that earth which kept
 * the world in awe Should patch a wall"; and Lear's "I pardon that man's life"
 * in Act 4, Scene 6 ran six of its lines into their neighbours.
 *
 * So a line also keeps its break when the printer could have gone on filling
 * it (with the next word it stays under FULL, measured as `printed`), the next
 * line opens with a capital, and a line beside it also stops early or is
 * short. The neighbour is the guard: an edition that wraps its prose narrower
 * than 71 (Much Ado's runs to about 62) leaves an odd line like that in
 * ordinary prose ("to the world's end?" then "I will go on the slightest
 * errand"), but never two together. Measured on the thirteen plays, this kept
 * 17 more breaks: 15 in those three speeches, Sir Andrew's signature to his
 * challenge in Twelfth Night, and one in Don Pedro's report of Beatrice
 * ("‘a good wit.’" then "‘Just,’ said she"), a new sentence either way.
 *
 * The same review found the converse in speeches judged verse: a full line
 * whose next line opens in lower case is the printer's, not the poet's. Most
 * are the prose part of a speech that goes on to a song or a letter
 * (Emilia's "as would store the world they / played for." in Othello, Act 4,
 * Scene 3), the rest a verse line the edition had to wrap because a direction
 * sits in it (Kent's "[To Regan and Goneril.] And your large speeches may
 * your deeds / approve," in King Lear, Act 1, Scene 1). Each broke where the
 * printer ran out of room. Such a line now runs on: 15 lines in the thirteen
 * plays, none of them joining two lines of verse, which here open with a
 * capital.
 */
export function breaksAfter(lines: string[]): boolean[] {
  const room = (i: number) =>
    printed(lines[i]).length + 1 + (printed(lines[i + 1]).split(' ')[0] ?? '').length
  if (!isProse(lines))
    return lines
      .slice(0, -1)
      .map((_, i) => room(i) < FULL || !/^[^A-Za-z]*[a-z]/.test(bare(lines[i + 1])))
  const last = lines.length - 1
  const short = (i: number) => bare(lines[i]).length < SHORT
  const early = (i: number) => room(i) < FULL && /^[^A-Za-z]*[A-Z]/.test(bare(lines[i + 1]))
  const stops = (i: number) => i >= 0 && i < last && (short(i) || early(i))
  return lines.slice(0, -1).map((_, i) => short(i) || (early(i) && (stops(i - 1) || stops(i + 1))))
}

/**
 * A prose speech's lines, with the verse it quotes or sings marked as verse.
 *
 * `breaksAfter` keeps the break after each line the edition chose to end, so a
 * line with a break before it and after it (or at the end of the speech) was
 * set on its own. Three or more such lines together, each opening with a
 * capital, are verse: the same test the play generator uses for a song the
 * edition indents. They are set in a block marked VERSE_CLASS, so a long one
 * carries on indented, as Hamlet's "Hath now this dread and black complexion
 * smear’d" does in Act 2, Scene 2. Measured on the thirteen plays (26
 * September 2026) that is 12 runs, every one a song or quoted verse: the
 * Fool's and Edgar's songs and "Ay, every inch a king" in King Lear, Bottom's
 * songs, the Pyrrhus lines and "Imperious Caesar" in Hamlet. The other 32
 * runs of lines set alone (shorter, or with a line in lower case) are mostly
 * prose, a signature or an aside, and are left as they were, as is a run whose
 * italics carry across its edge, which the block would cut in two.
 *
 * The prose around them flows as it did. Every <br> and every "\n" stays where
 * `breaksAfter` put it, so the text a note is found in does not change.
 */
function proseAndItsVerse(lines: string[], breaks: boolean[]): string {
  const units: string[][] = [[]]
  lines.forEach((line, i) => {
    units[units.length - 1].push(line)
    if (i < lines.length - 1 && breaks[i]) units.push([])
  })
  const capital = (l: string) => {
    const b = bare(l)
    return !b || /^[^A-Za-z]*[A-Z]/.test(b)
  }
  const out: string[] = []
  let italic = false
  for (let u = 0; u < units.length; ) {
    const more = () => u < units.length
    const run: string[] = []
    while (u + run.length < units.length && units[u + run.length].length === 1)
      run.push(units[u + run.length][0])
    const inside = run.join('<br>\n')
    if (run.length >= 3 && run.every(capital) && !italic && !italicAfter(inside, false)) {
      u += run.length
      // The last <br> sits inside the block: after it, it would start a line
      // of its own and print an empty one.
      out.push(`<span class="${VERSE_CLASS}">${inside}${more() ? '<br>' : ''}</span>`)
      continue
    }
    const text = `${units[u++].join('\n')}${more() ? '<br>' : ''}`
    italic = italicAfter(text, italic)
    out.push(text)
  }
  return out.join('\n')
}

/**
 * A scene's HTML, as the held edition stores it, set out for the viewer.
 *
 * `place` is the scene's `setting`, printed first when there is one. A
 * prologue, a chorus or an epilogue has none.
 */
export function setForTheViewer(html: string, place?: string): string {
  const body = html.replace(/<p([^>]*)>([\s\S]*?)<\/p>/g, (_, attrs: string, held: string) => {
    // Paired within the paragraph, across its lines: a song or a letter is
    // italic from its first line to its last ("_Come unto these yellow
    // sands,"). Paired within a line only, as Macbeth's reader first did, left
    // 150 underscores in the other plays, 48 of them in Twelfth Night.
    const inner = italicsAsItalics(held)
    const name = /^<strong>[^<]*<\/strong>\n/.exec(inner)?.[0] ?? ''
    const lines = inner.slice(name.length).split('\n')
    const breaks = breaksAfter(lines)
    // A stage direction carries the edition's class and is one line; a
    // speech carries none. A speech in verse is marked as verse (see
    // VERSE_CLASS), and a speech in prose only where it sings or quotes verse
    // (see proseAndItsVerse).
    const prose = isProse(lines)
    const said = prose
      ? proseAndItsVerse(lines, breaks)
      : lines.map((l, i) => (breaks[i] ? `${l}<br>` : l)).join('\n')
    const cls = attrs
      ? attrs.replace(/class="/, 'class="mb-4 ')
      : ` class="mb-4${prose ? '' : ` ${VERSE_CLASS}`}"`
    return `<p${cls}>${name.replace(/\n$/, '<br>\n')}${said}</p>`
  })
  if (!place) return body
  // Escaped as the edition's text is: the place is held as plain text.
  const at = place.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `<p class="mb-4 italic text-muted-foreground">${at}</p>\n\n${body}`
}

/**
 * A poem's HTML set out for the viewer: every stanza is verse (see
 * VERSE_CLASS), and any underscore is italic. The held poems set their lines
 * with <br /> already; this adds a class and changes no text.
 */
export function setPoemForTheViewer(html: string): string {
  return italicsAsItalics(html).replace(/<p(\s[^>]*)?>/g, (_, attrs?: string) =>
    attrs && /class="/.test(attrs)
      ? `<p${attrs.replace(/class="/, `class="${VERSE_CLASS} `)}>`
      : `<p${attrs ?? ''} class="${VERSE_CLASS}">`,
  )
}

/** What a held text declares itself to be (TextData['type']). */
export type HeldTextType = 'play' | 'novel' | 'novella' | 'poem'

/**
 * Any held text's section as the reader prints it, and as the annotation
 * generator cuts its notes from: a play set out as a play, a poem as verse, a
 * novel with its italics. `place` is a scene's setting, for a play.
 */
export function setSectionForTheViewer(type: HeldTextType, html: string, place?: string): string {
  if (type === 'play') return setForTheViewer(html, place)
  if (type === 'poem') return setPoemForTheViewer(html)
  return italicsAsItalics(html)
}
