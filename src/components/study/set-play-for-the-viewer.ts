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
 */

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
 * A scene's HTML, as the held edition stores it, set out for the viewer.
 *
 * `place` is the scene's `setting`, printed first when there is one.
 */
export function setForTheViewer(html: string, place?: string): string {
  const body = html.replace(/<p([^>]*)>([\s\S]*?)<\/p>/g, (_, attrs: string, held: string) => {
    const cls = attrs.replace(/class="/, 'class="mb-4 ') || ' class="mb-4"'
    // Paired within the paragraph, across its lines: a song or a letter is
    // italic from its first line to its last ("_Come unto these yellow
    // sands,"). Paired within a line only, as Macbeth's reader first did, left
    // 150 underscores in the other plays, 48 of them in Twelfth Night.
    const inner = held.replace(/_([^_<>]+)_/g, '<em>$1</em>')
    const name = /^<strong>[^<]*<\/strong>\n/.exec(inner)?.[0] ?? ''
    const lines = inner.slice(name.length).split('\n')
    const breaks = breaksAfter(lines)
    const said = lines.map((l, i) => (breaks[i] ? `${l}<br>` : l)).join('\n')
    return `<p${cls}>${name.replace(/\n$/, '<br>\n')}${said}</p>`
  })
  if (!place) return body
  // Escaped as the edition's text is: the place is held as plain text.
  const at = place.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return `<p class="mb-4 italic text-muted-foreground">${at}</p>\n\n${body}`
}
