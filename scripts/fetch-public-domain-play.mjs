#!/usr/bin/env node
/**
 * Fetch a public-domain Shakespeare play and write it as a data module.
 *
 * WHY A SCRIPT AND NOT TYPING. The text has to be the real text. A model
 * reproducing a play from memory would introduce errors no reviewer would catch
 * - a dropped line here, a modernised word there - and publish them to students
 * revising for an exam. So the bytes are copied from a published edition and
 * never pass through anything that could rewrite them. That is also why this
 * uses a plain fetch rather than any summarising tool.
 *
 * WHICH EDITION, AND WHY IT MATTERS MORE THAN IT SOUNDS. The first edition this
 * was pointed at (Project Gutenberg 1112) is the old-spelling First Folio text
 * with the printers' errors deliberately PRESERVED - "vnfold your selfe" - and
 * its own header discusses Henry VI. Shipping that to a fifteen-year-old would
 * have been worse than shipping nothing. Gutenberg also marks some of its early
 * files as poorly proofed and names the replacement: 1520 and 1527 say so on
 * their own first page.
 *
 * So the id for every play was confirmed by reading that file's own Title line,
 * never guessed from a pattern, and the modern-spelling edition was checked by
 * eye before being listed in PLAYS below.
 *
 * WHAT IS STRIPPED. The Project Gutenberg header, footer, licence and every
 * reference to it, per their own terms: the underlying work is public domain and
 * may be used freely once their branding is removed. Shakespeare is out of
 * copyright everywhere, so there is no jurisdiction question here - unlike, for
 * example, Out, Out-, which is public domain in the United States and in UK
 * copyright until 2033.
 *
 * IT REFUSES RATHER THAN WRITES A THIN FILE. Every parse is checked for a
 * plausible number of acts, scenes and characters before anything is written. A
 * generator that quietly emits an empty structure and reports success is the
 * failure this codebase is full of.
 *
 *   node scripts/fetch-public-domain-play.mjs [slug]
 *   node scripts/fetch-public-domain-play.mjs          (all of them)
 *   GUTENBERG_DIR=<dir> node scripts/fetch-public-domain-play.mjs
 *                                    (from pg<id>.txt files already downloaded)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = join(ROOT, 'src/data/full-texts')

/**
 * Our slug, the Gutenberg id, and the title as that file prints it.
 *
 * `title` is not decoration: the fetch asserts the downloaded file's own Title
 * line matches it, so a renumbered or replaced edition fails loudly instead of
 * writing the wrong play under the right slug.
 */
const PLAYS = [
  // `scenes` on every play since 26 September 2026, when all thirteen were
  // regenerated together. The counts are the ones the scene-count test has
  // always asserted (src/__tests__/full-texts-are-the-real-text.test.ts), and
  // each agreed with its edition's own contents list on that run. Before, only
  // Macbeth carried one, so a play whose contents list stopped parsing would
  // have been written with whatever the body parse produced.
  //
  // `besides` is every part of the play that is not a scene, in order: a
  // prologue, a chorus before an act, an epilogue (see `parseParts`). Three
  // plays have them, and each list is the one in the edition's own contents.
  {
    slug: 'romeo-and-juliet',
    id: 1513,
    title: 'Romeo and Juliet',
    scenes: 24,
    besides: ['prologue', 'actii-chorus'],
  },
  { slug: 'a-midsummer-nights-dream', id: 1514, title: "A Midsummer Night's Dream", scenes: 9 },
  { slug: 'the-merchant-of-venice', id: 1515, title: 'The Merchant of Venice', scenes: 20 },
  { slug: 'much-ado-about-nothing', id: 1519, title: 'Much Ado about Nothing', scenes: 17 },
  {
    slug: 'henry-v',
    id: 1521,
    title: 'King Henry V',
    scenes: 23,
    besides: [
      'prologue',
      'actii-chorus',
      'actiii-chorus',
      'activ-chorus',
      'actv-chorus',
      'epilogue',
    ],
  },
  { slug: 'julius-caesar', id: 1522, title: 'Julius Caesar', scenes: 18 },
  { slug: 'hamlet', id: 1524, title: 'Hamlet', scenes: 20 },
  { slug: 'twelfth-night', id: 1526, title: 'Twelfth Night', scenes: 18 },
  { slug: 'othello', id: 1531, title: 'Othello', scenes: 15 },
  { slug: 'king-lear', id: 1532, title: 'King Lear', scenes: 26 },
  // Added 26 September 2026, a week after the others, and for a different
  // reason. Macbeth already had a hand-built reader, and its text followed the
  // Folger Shakespeare Library's edition ("So withered", "Untimely ripped").
  // Folger licenses its digital texts CC BY-NC 3.0, not for commercial use,
  // and this site sells subscriptions. Shakespeare's words are free; Folger's
  // edited text is not, so the reader and the guide now print this edition.
  //
  // `scenes` is the count in this file's own contents list (7, 4, 6, 3 and 8 by
  // act), read before this entry was written. The contents cross-check below is
  // skipped when the contents list cannot be read at all, so an explicit count
  // is the guard that still holds if the edition's front matter changes shape.
  { slug: 'macbeth', id: 1533, title: 'Macbeth', scenes: 28 },
  { slug: 'antony-and-cleopatra', id: 1534, title: 'Antony and Cleopatra', scenes: 42 },
  { slug: 'the-tempest', id: 1540, title: 'The Tempest', scenes: 9, besides: ['epilogue'] },
]

/**
 * Stage directions printed at the margin that no rule can tell from a speech
 * resumed after a direction, each exactly as the edition prints it, by play.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). Each of
 * these was printed in ordinary type, as though somebody said it: the dumb
 * show's "Trumpets sound." in Hamlet, "Caesar enters the Capitol" in Julius
 * Caesar, "Fairies sing." in A Midsummer Night's Dream, and the labels over
 * Hero's epitaph and the song that follows it in Much Ado.
 *
 * WHY A LIST AND NOT A RULE. Every block with no speaker and no indent in the
 * thirteen plays, 400 of them, was read on that day. All but these (and the
 * dumb show itself, which DIRECTION_AT_MARGIN now catches) are speech resumed
 * after a direction, and the ones that look most like these are speech too:
 * "Juliet, the County stays." and "Here she comes, and her passion ends the
 * play." describe somebody in the present tense, as "Malvolio within." does. A
 * rule that took these would take those. The generator refuses to write a play
 * in which a listed direction is not found once, as a block of its own, so the
 * list cannot go quietly stale.
 */
const DIRECTIONS_AS_PRINTED = {
  hamlet: ['Trumpets sound. The dumb show enters.', 'The King rises and advances.'],
  'julius-caesar': ['Caesar enters the Capitol, the rest following. All the Senators rise.'],
  othello: ['Brabantio appears above at a window.'],
  'twelfth-night': ['Malvolio within.'],
  'the-tempest': [
    'Here Prospero discovers Ferdinand and Miranda playing at chess.',
    'ARIEL’S SONG.',
  ],
  'a-midsummer-nights-dream': ['Fairies sing.'],
  'much-ado-about-nothing': ['Epitaph.', 'Song.'],
}

/**
 * An act heading, with or without the trailing period.
 *
 * Both forms occur across these editions - Romeo and Juliet prints "ACT I",
 * Twelfth Night prints "ACT I." - and requiring one of them silently broke the
 * other. Defined once so the two places that match it cannot drift apart.
 */
const ACT_HEADING = /^ACT ([IVXLC]+)\.?$/

/**
 * The heading of a prologue spoken before Act I ("THE PROLOGUE" in Romeo and
 * Juliet, "PROLOGUE." in Henry V), and of an epilogue ("EPILOGUE." in Henry
 * V, "EPILOGUE" in The Tempest). Each is a line of its own with a blank line
 * under it; a speaker's heading has the speech under it, which is how Hamlet's
 * "PROLOGUE." in the play within the play stays a speaker.
 */
const PROLOGUE_HEADING = /^(?:THE )?PROLOGUE\.?$/
const EPILOGUE_HEADING = /^EPILOGUE\.?$/

/**
 * How far above Act I a prologue's heading may sit. Henry V's is 44 lines up,
 * the length of the speech. The edition's contents list, which names the
 * prologue too, is more than a hundred lines above in both plays.
 */
const PROLOGUE_LOOKBACK = 60

/**
 * One name as the editions print it above a speech: "LADY MACBETH". Capitals
 * with accents count: Henry V's "GRANDPRÉ." failed the rule while it knew
 * only A to Z, and was printed as the first line of his speech in ordinary
 * type (found 26 September 2026; the only such heading in the thirteen).
 */
const NAME = "[A-ZÀ-ÖØ-Þ][A-ZÀ-ÖØ-Þ’' .-]+"

/** One name, or several speaking together: "MACBETH, LENNOX", "OSRIC and LORDS". */
const NAMES = `${NAME}(?:(?:,| and|, and) ${NAME})*`

/**
 * A speech heading on a line of its own: one name, or several speaking
 * together, ending with a stop.
 *
 * WHAT BROKE (found 26 September 2026). The rule knew one name only. Joint
 * headings - "MACBETH, LENNOX.", "MARCELLUS and BARNARDO.", "CAESAR, ANTONY,
 * and LEPIDUS." - have a comma or a lower-case "and" in them, failed it, and
 * were printed as the first line of the speech in ordinary type: 19 headings
 * in 8 plays, 11 of them in Hamlet.
 */
const HEADING = new RegExp(`^${NAMES}\\.$`)

/**
 * The other ways the editions print a heading, found on the same run: with no
 * stop ("BARNARDO", "SECOND SENATOR", and SNOUT, SNUG, FAIRY and PROLOGUE
 * every time they speak), in small letters ("All.", "Both."), or on the same
 * line as the first words of the speech ("DON PEDRO. Yea, marry;", "BALTHASAR
 * [sings.]"). Each of those printed the name as ordinary text. Apart from the
 * first, which is as sure as the usual form, they are believed only for a
 * name the play uses as a heading elsewhere (see `isSpeaker`): a letter read
 * aloud is signed in capitals, and a speech can open with a word that is
 * somebody's name.
 */
const HEADING_ALONE = new RegExp(`^(${NAMES})\\.?$`, 'i')
const HEADING_WITH_SPEECH = new RegExp(`^(${NAMES})\\.? (\\S.*)$`)

/**
 * A stage direction printed at column zero. Four editions (Hamlet, Julius
 * Caesar, Much Ado and Othello) do not indent their directions, so the
 * indentation rule below never saw one, and every entrance and exit in them
 * was printed as though somebody said it. A paragraph with no speaker that is
 * wholly in brackets, or opens with an entrance or an exit (after at most three
 * short sentences of sound: "Alarum. Retreat. Enter Antony"), is a direction,
 * as is one that opens a scene (see `toHtml`); anything else without a speaker is
 * left as speech, because in every edition that is what it usually is: a
 * speech resumed after a direction. A direction in those four plays that
 * begins some other way mid-scene ("Trumpets sound. The dumb show enters.")
 * is named in DIRECTIONS_AS_PRINTED.
 *
 * The entrance may open with the underscore of italic type. Hamlet's dumb show,
 * ten lines set in italics at the margin ("_Enter a King and a Queen very
 * lovingly;"), failed the rule on its first character and was printed as a
 * speech, set out as verse (found 26 September 2026).
 */
const DIRECTION_AT_MARGIN =
  /^(?:\[[^[\]]*\]|_?(?:[A-Z][^.!?\n]{0,30}\.\s+){0,3}(?:Enter|Re-enter|Exit|Exeunt)\b[\s\S]*)$/

/**
 * Whether an indented block is spoken, although the indentation rule in
 * `toHtml` would take it for a stage direction.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). The
 * editions indent songs, scrolls and epitaphs as they indent directions, and
 * now and then the first line of a speech resumed after one. Each was printed
 * as a direction: in italic, its lines run into one. 21 blocks in 7 plays,
 * among them Henry V's "Upon the King!" soliloquy (55 lines, set as one italic
 * paragraph), Ophelia's songs, the three casket scrolls in The Merchant of
 * Venice with Morocco's reply to his, the second verse of "Sigh no more" and
 * Hero's epitaph in Much Ado, and Prospero's "How fares my gracious sir?".
 *
 * A direction here opens as one (see DIRECTION_AT_MARGIN) or is plain
 * description. So a block that does not open as one is spoken when it asks or
 * exclaims outside its brackets and quotations (a direction never does:
 * "crying “Murder!”" is quoted), or when it runs to three lines or more and
 * each after the first opens with a capital, which is verse. A description of
 * two lines ("The bodies of Goneril and / Regan are brought in.") stays a
 * direction.
 */
function spokenThoughIndented(text) {
  const trimmed = text.trim()
  if (DIRECTION_AT_MARGIN.test(trimmed)) return false
  const lines = trimmed.split('\n').map((l) => l.trim())
  const said = (l) => l.replace(/\[[^\]]*\]/g, '').replace(/[“‘][^”’]*[”’]/g, '')
  if (lines.some((l) => /[?!]/.test(said(l)))) return true
  const rest = lines.slice(1)
  return rest.length >= 2 && rest.every((l) => /^[^A-Za-z]*[A-Z]/.test(l))
}

/** Lowest counts a real Shakespeare play can have. Below these, refuse. */
const MIN_SCENES = 5
const MIN_CHARS = 8000

function stripGutenberg(raw) {
  const start = raw.indexOf('*** START OF THE PROJECT GUTENBERG')
  const end = raw.indexOf('*** END OF THE PROJECT GUTENBERG')
  if (start === -1 || end === -1) throw new Error('no Gutenberg markers - edition changed shape')
  let body = raw.slice(raw.indexOf('\n', start) + 1, end)
  // Their own trailing production credits, which are not part of the play.
  body = body.replace(/\n\s*\*{3,}[\s\S]*$/, '')
  if (/gutenberg/i.test(body.slice(-4000))) {
    body = body.replace(/\n[^\n]*gutenberg[^\n]*/gi, '\n')
  }
  return body
}

/**
 * The parts that are not scenes, as the edition's own table of contents lists
 * them, in order: 'prologue', 'chorus' or 'epilogue'. The contents run from
 * their "Contents" heading to "Dramatis Personæ", whose cast list names the
 * Chorus too and is not read. Null when the contents cannot be found, as
 * `scenesInContents` returns 0.
 */
function besidesInContents(body) {
  const lines = body.split('\n').map((l) => l.trim())
  const from = lines.findIndex((l) => l === 'Contents')
  const to = lines.findIndex((l) => /^Dramatis Person/.test(l))
  if (from === -1 || to <= from) return null
  return lines
    .slice(from + 1, to)
    .map((l) => /^(?:the )?(prologue|chorus|epilogue)\.?$/i.exec(l)?.[1].toLowerCase())
    .filter(Boolean)
}

/**
 * How many scenes the edition's own table of contents lists.
 *
 * A free cross-check the document hands us, and the one that would have caught
 * the Much Ado parse on its own rather than by someone counting scenes against
 * a play they happened to know.
 */
function scenesInContents(body) {
  const lines = body.split('\n')
  const firstBodyScene = lines.findIndex((l) => /^SCENE [IVXLC]+\./.test(l.trim()))
  if (firstBodyScene === -1) return 0
  return lines.slice(0, firstBodyScene).filter((l) => /^Scene [IVXLC]+\./.test(l.trim())).length
}

/**
 * Split the body into its parts, in order, each carrying the act it belongs
 * to: every scene, and the prologue, the choruses and the epilogue where the
 * play has them. A part is `{ kind, act, scene, setting, lines }`, `kind` being
 * 'scene', 'prologue', 'chorus' or 'epilogue'.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). This read
 * scenes only, starting at the Act I heading and cutting at each SCENE
 * heading. So Romeo and Juliet's Prologue ("Two households, both alike in
 * dignity"), one of the most examined passages in GCSE English Literature,
 * and Henry V's ("O for a Muse of fire"), both printed above Act I, were
 * never read; a chorus, printed between an act's heading and its first scene,
 * was run on to the end of the previous act's last scene (Romeo and Juliet's
 * Act II Chorus, and Henry V's four); and each epilogue was run on to the
 * play's last scene under a line of ordinary type saying "EPILOGUE".
 *
 * Each is now a part of its own, where the edition prints it, with its words
 * as they were. The scenes are cut exactly as before, so their ids, and the
 * progress and notes keyed on them, are unchanged.
 */
function parseParts(body) {
  const lines = body.split('\n')
  // The body starts at the first ALL-CAPS scene heading; everything above it is
  // the dramatis personae and the table of contents, which use "Scene I."
  const firstScene = lines.findIndex((l) => /^SCENE [IVXLC]+\./.test(l.trim()))
  if (firstScene === -1) throw new Error('no ALL-CAPS scene headings - edition changed shape')

  // Walk back to the ACT heading that owns it.
  //
  // BOUNDED, and the bound is not caution for its own sake. Twelfth Night
  // (1526) prints its body heading as "ACT I." WITH a trailing period, which an
  // unanchored-period regex missed, so the walk-back sailed past it, past the
  // dramatis personae, and landed on "ACT V" inside the table of CONTENTS -
  // sweeping a contents line in as a nineteenth scene and misattributing the
  // acts. A real act heading sits within a few lines of its first scene.
  const LOOKBACK = 40
  let from = firstScene
  for (let i = firstScene; i >= Math.max(0, firstScene - LOOKBACK); i--) {
    if (ACT_HEADING.test(lines[i].trim())) {
      from = i
      break
    }
  }

  // A prologue spoken before Act I is printed above its heading, after the
  // cast list. Bounded for the same reason as the walk-back above.
  let start = from
  for (let i = from - 1; i >= Math.max(0, from - PROLOGUE_LOOKBACK); i--) {
    if (PROLOGUE_HEADING.test(lines[i].trim()) && !lines[i + 1]?.trim()) {
      start = i
      break
    }
  }

  const parts = []
  let act = null
  let current = null
  // A part that holds nothing but blank lines is not a part: the gap between
  // an act's heading and its first scene, in every act without a chorus.
  const begin = (part) => {
    if (current && (current.kind === 'scene' || current.lines.some((l) => l.trim())))
      parts.push(current)
    current = part
  }
  lines.slice(start).forEach((line, i, rest) => {
    const trimmed = line.trim()
    const alone = !rest[i + 1]?.trim()
    if (act === null && current === null && PROLOGUE_HEADING.test(trimmed) && alone) {
      begin({ kind: 'prologue', act: null, lines: [] })
      return
    }
    const actMatch = ACT_HEADING.exec(trimmed)
    if (actMatch) {
      act = actMatch[1]
      // Whatever the edition prints before the act's first scene is its
      // chorus: Romeo and Juliet's Act II and Henry V's Acts II to V.
      begin({ kind: 'chorus', act, lines: [] })
      return
    }
    if (act !== null && EPILOGUE_HEADING.test(trimmed) && alone) {
      begin({ kind: 'epilogue', act, lines: [] })
      return
    }
    // Case-insensitive, deliberately. Gutenberg's Much Ado (1519) mixes
    // "SCENE III." and "Scene III." inside the SAME body, and matching only the
    // upper-case form silently folded four scenes into their predecessors -
    // Act III Scenes II to V arrived as one page. Only the body is scanned, and
    // the body begins at the first upper-case heading (or the prologue just
    // above it), so the contents list above it cannot be swept up by this.
    const sceneMatch = /^SCENE ([IVXLC]+)\.?\s*(.*)$/i.exec(trimmed)
    if (sceneMatch) {
      begin({
        kind: 'scene',
        act,
        scene: sceneMatch[1],
        setting: sceneMatch[2].replace(/\s+$/, ''),
        lines: [],
      })
      return
    }
    // A place too long for one line runs on to the next, with no blank line
    // between. The Tempest's first scene does it, and its place was cut at
    // "thunder and lightning", with "heard." printed below as a paragraph of
    // its own (seen 26 September 2026, once the reader began printing places).
    if (current?.kind === 'scene' && current.lines.length === 0 && trimmed && !/^\s/.test(line)) {
      current.setting = `${current.setting} ${trimmed}`.trim()
      return
    }
    if (current) current.lines.push(line)
  })
  begin(null)
  return parts
}

/**
 * Who speaks in this play: every name printed as a heading on its own line at
 * column zero, after a blank line, with the speech under it; and the words
 * those names are made of.
 *
 * The repairs in `toHtml` below believe a heading only if its name is in
 * here. Capitals are not enough on their own: a letter read aloud is signed in
 * capitals ("THE FORTUNATE UNHAPPY."), a song is announced in them ("ARIEL’S
 * SONG."), and neither is somebody speaking.
 */
function castOf(parts) {
  const names = new Set()
  for (const { lines } of parts) {
    lines.forEach((line, i) => {
      const heading = line.trimEnd()
      if (!HEADING.test(heading) || lines[i - 1]?.trim() || !lines[i + 1]?.trim()) return
      for (const one of heading.slice(0, -1).split(/,? and |, /)) names.add(one)
    })
  }
  return { names, words: new Set([...names].flatMap((n) => n.split(' '))) }
}

/**
 * Whether `name` is somebody in this play: every name in it heads a speech
 * elsewhere. With `loose`, a name of two words or more may instead be made of
 * words the play's headings use. That is for one heading: THIRD WATCH speaks
 * once in Romeo and Juliet, on the line he shares with his words, and "THIRD"
 * and "WATCH" are in "THIRD MUSICIAN" and "FIRST WATCH".
 */
function isSpeaker(name, cast, loose = false) {
  return name
    .split(/,? and |, /)
    .every(
      (one) =>
        cast.names.has(one) ||
        (loose && one.includes(' ') && one.split(' ').every((w) => cast.words.has(w))),
    )
}

/**
 * The speaker of a block that starts at column zero, and the lines they say,
 * or null when the block names nobody. `tally` counts each repair, so a run
 * says what it changed.
 */
function speechOf(first, rest, cast, tally) {
  const line = first.trim()
  // The edition's own form: capitals and a stop, on a line of its own. Taken
  // as it always was, known name or not.
  if (rest.length > 0 && HEADING.test(line)) {
    const name = line.slice(0, -1)
    if (/,| and /.test(name)) tally.joint++
    return { name, said: rest }
  }
  // No stop: "BARNARDO", and "SNOUT", whom A Midsummer Night's Dream never
  // prints with one. In capitals that is as sure as the form above. In small
  // letters ("All.", "Both.") only a name the play uses as a heading
  // elsewhere, and only with its stop, so a line of speech that happens to be
  // a name ("Romeo") is not taken.
  const alone = HEADING_ALONE.exec(line)
  if (rest.length > 0 && alone) {
    const name = alone[1].replace(/\.$/, '')
    const capitals = line === line.toUpperCase()
    if (capitals || (line.endsWith('.') && isSpeaker(name.toUpperCase(), cast))) {
      tally.variant++
      return { name, said: rest }
    }
  }
  // The heading on the same line as the first words.
  const same = HEADING_WITH_SPEECH.exec(line)
  if (same && isSpeaker(same[1].replace(/\.$/, ''), cast, true)) {
    tally.sameLine++
    return { name: same[1].replace(/\.$/, ''), said: [same[2], ...rest] }
  }
  return null
}

/**
 * A block split where the edition runs a stage direction straight into the
 * next speech, with no blank line between: " _Sounds retreat far off._" and
 * then "ANTONY." on the next line. Read as one block, it was neither a
 * direction nor a speech, and printed the name as a line of ordinary text.
 * Split only at a known speaker's heading that follows an indented line, so a
 * name inside a speech (a letter's signature) is left where it is.
 */
function splitRunTogether(block, cast, tally) {
  const lines = block.split('\n')
  const parts = [[]]
  lines.forEach((line, i) => {
    const name = line.trimEnd()
    const heading = HEADING.test(name) && isSpeaker(name.slice(0, -1), cast)
    if (i > 0 && heading && /^[ \t]/.test(lines[i - 1])) {
      parts.push([])
      tally.split++
    }
    parts[parts.length - 1].push(line)
  })
  return parts.map((p) => p.join('\n'))
}

/**
 * Turn a part's plain-text lines into the HTML the viewer renders. `listed`
 * maps each of the play's DIRECTIONS_AS_PRINTED to the times it was found.
 */
function toHtml(sceneLines, cast, tally, listed) {
  // trimEnd, not trim. A leading trim strips the indent off the FIRST block of
  // every scene, which is almost always the opening stage direction, and renders
  // "Enter Sampson and Gregory" as though somebody said it aloud.
  const blocks = sceneLines
    .join('\n')
    .replace(/^\n+/, '')
    .trimEnd()
    .split(/\n\s*\n/)
    .flatMap((block) => splitRunTogether(block, cast, tally))
  const direction = (escaped) =>
    `<p class="italic text-muted-foreground">${escaped.trim().replace(/\n\s*/g, ' ')}</p>`
  return blocks
    .map((block, index) => {
      const text = block.replace(/\s+$/gm, '')
      if (!text.trim()) return ''
      const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      // A stage direction is INDENTED in these editions; speech starts at
      // column zero with the speaker's name. One leading space is enough - the
      // first version required two and rendered every entrance and exit as
      // dialogue. Unless it is a song or a speech the edition happens to
      // indent: see spokenThoughIndented.
      const indented =
        /^[ \t]+\S/.test(block) &&
        !text
          .trim()
          .split('\n')
          .some((l) => HEADING.test(l))
      if (indented && !spokenThoughIndented(text)) return direction(escaped)
      if (indented) tally.spoken++
      // First line is the speaker: see speechOf for the forms it takes.
      const [first, ...rest] = escaped.split('\n')
      const speech = speechOf(first, rest, cast, tally)
      if (speech) return `<p><strong>${speech.name}</strong>\n${speech.said.join('\n')}</p>`
      // No speaker. In the four editions that print directions at the margin,
      // an entrance, an exit, a bracketed direction, or whatever opens the
      // scene, which cannot be a speech resumed ("Thunder and lightning. Enter
      // Caesar, in his nightgown."); otherwise a speech resumed after a
      // direction, as it was. An indented block found to be spoken is speech
      // here too, wherever it falls.
      if (!indented && (index === 0 || DIRECTION_AT_MARGIN.test(text.trim()))) {
        tally.margin++
        return direction(escaped)
      }
      // Or one of the directions no rule can tell from speech, named by play.
      if (!indented && listed.has(text.trim())) {
        listed.set(text.trim(), listed.get(text.trim()) + 1)
        tally.listed++
        return direction(escaped)
      }
      return `<p>${escaped}</p>`
    })
    .filter(Boolean)
    .join('\n\n')
}

/**
 * The edition's text: from GUTENBERG_DIR when that is set (pg<id>.txt, as the
 * site serves it, for a run that regenerates all thirteen plays more than
 * once), otherwise from the site, naming this script and giving up after a
 * minute rather than hanging on a slow mirror.
 */
async function edition(play) {
  const name = `pg${play.id}.txt`
  if (process.env.GUTENBERG_DIR) return readFileSync(join(process.env.GUTENBERG_DIR, name), 'utf8')
  const url = `https://www.gutenberg.org/cache/epub/${play.id}/${name}`
  const res = await fetch(url, {
    headers: { 'User-Agent': 'TheEnglishHub-factcheck/1.0' },
    signal: AbortSignal.timeout(60_000),
  })
  if (!res.ok) throw new Error(`${play.slug}: HTTP ${res.status}`)
  return res.text()
}

async function build(play) {
  // Line endings normalised first. Gutenberg serves these files to fetch() with
  // CRLF endings, and every rule below splits on "\n" alone, so each line kept a
  // trailing "\r". Most rules trim it away; the stage-direction test does not.
  // A scene's opening direction ("Alarum within. Enter King Duncan...") sits
  // after a blank line, so its block began with "\r" rather than an indent, was
  // read as speech, and was published as a plain paragraph opening on a blank
  // line: 23 of Macbeth's 28 scenes when it was added on 26 September 2026. The
  // other twelve plays were regenerated with it the same day.
  const raw = (await edition(play)).replace(/\r\n?/g, '\n')

  // The edition must still be the play we confirmed by hand.
  const titleLine = /^Title:\s*(.+)$/m.exec(raw)
  if (!titleLine) throw new Error(`${play.slug}: no Title line`)
  if (titleLine[1].trim() !== play.title) {
    throw new Error(
      `${play.slug}: expected "${play.title}", got "${titleLine[1].trim()}" - id ${play.id} now points somewhere else`,
    )
  }
  if (/PROOFING METHODS AND TOOLS WERE NOT WELL DEVELOPED/.test(raw)) {
    throw new Error(`${play.slug}: Gutenberg marks id ${play.id} as poorly proofed`)
  }

  const body = stripGutenberg(raw)
  const parts = parseParts(body)
  const scenes = parts.filter((p) => p.kind === 'scene')
  if (scenes.length < MIN_SCENES) {
    throw new Error(`${play.slug}: parsed only ${scenes.length} scenes - refusing to write`)
  }

  // The edition lists its own scenes in a contents block. If our parse
  // disagrees with it we have dropped or invented one, and either way the
  // student would get scenes run together under the wrong heading.
  const listed = scenesInContents(body)
  if (listed > 0 && listed !== scenes.length) {
    throw new Error(
      `${play.slug}: contents lists ${listed} scenes, parsed ${scenes.length} - refusing to write`,
    )
  }
  if (play.scenes !== undefined && play.scenes !== scenes.length) {
    throw new Error(
      `${play.slug}: expected ${play.scenes} scenes, parsed ${scenes.length} - refusing to write`,
    )
  }

  // Scene COUNT can be right while act ATTRIBUTION is wrong, which is how the
  // Twelfth Night overshoot would have read if it had happened to balance. Every
  // scene must belong to an act, and the acts must be the ones the play has.
  const unattributed = scenes.filter((s) => !s.act)
  if (unattributed.length > 0) {
    throw new Error(`${play.slug}: ${unattributed.length} scenes belong to no act`)
  }
  const acts = [...new Set(scenes.map((s) => s.act))]
  if (acts.length !== 5) {
    throw new Error(`${play.slug}: found ${acts.length} acts (${acts.join(', ')}), expected 5`)
  }

  // The parts that are not scenes, by id, and checked twice: against the list
  // for this play above, and against the edition's own contents, so a prologue
  // that stopped parsing (or a stray line after an act heading taken for a
  // chorus) refuses the write rather than reaching a student.
  const idOf = (p) =>
    p.kind === 'scene'
      ? `act${p.act}-scene${p.scene}`.toLowerCase()
      : p.kind === 'chorus'
        ? `act${p.act}-chorus`.toLowerCase()
        : p.kind
  const besides = parts.filter((p) => p.kind !== 'scene')
  const expected = play.besides ?? []
  if (besides.map(idOf).join() !== expected.join()) {
    throw new Error(
      `${play.slug}: expected [${expected.join(', ')}] besides the scenes, parsed [${besides.map(idOf).join(', ')}] - refusing to write`,
    )
  }
  const contents = besidesInContents(body)
  if (contents && contents.join() !== besides.map((p) => p.kind).join()) {
    throw new Error(
      `${play.slug}: contents lists [${contents.join(', ')}], parsed [${besides.map((p) => p.kind).join(', ')}] - refusing to write`,
    )
  }

  const cast = castOf(parts)
  const tally = { joint: 0, variant: 0, sameLine: 0, split: 0, margin: 0, spoken: 0, listed: 0 }
  const asPrinted = new Map((DIRECTIONS_AS_PRINTED[play.slug] ?? []).map((d) => [d, 0]))
  const sections = parts.map((p) => ({
    id: idOf(p),
    title:
      p.kind === 'scene'
        ? `Act ${p.act}, Scene ${p.scene}`
        : p.kind === 'chorus'
          ? `Act ${p.act}, Chorus`
          : p.kind === 'prologue'
            ? 'Prologue'
            : 'Epilogue',
    // A prologue, a chorus or an epilogue has no place of its own in the edition.
    ...(p.kind === 'scene' ? { setting: p.setting } : {}),
    content: toHtml(p.lines, cast, tally, asPrinted),
  }))
  const unfound = [...asPrinted].filter(([, n]) => n !== 1).map(([d, n]) => `"${d}" ${n} times`)
  if (unfound.length > 0) {
    throw new Error(
      `${play.slug}: listed direction(s) not found once each: ${unfound.join('; ')} - refusing to write`,
    )
  }

  const totalChars = sections.reduce((n, s) => n + s.content.length, 0)
  if (totalChars < MIN_CHARS) {
    throw new Error(`${play.slug}: only ${totalChars} characters of text - refusing to write`)
  }
  const empty = sections.filter((s) => s.content.trim().length < 200)
  if (empty.length > 2) {
    throw new Error(`${play.slug}: ${empty.length} near-empty scenes - parse is wrong`)
  }

  const file = `// AUTO-GENERATED by scripts/fetch-public-domain-play.mjs - do not edit by hand.
//
// ${play.title}, by William Shakespeare. Public domain worldwide.
//
// The text is a byte copy of a published modern-spelling edition, not typed and
// not reproduced from memory, so it cannot contain invented lines. Source
// edition: Project Gutenberg #${play.id}, whose branding and licence text are
// stripped per their terms; the underlying work is out of copyright.
//
// Re-run the generator to refresh. It refuses to write a file if the edition's
// own Title line stops matching, if Gutenberg has flagged the edition as poorly
// proofed, or if the parse yields too few scenes or too little text.

import type { TextData } from '@/components/study/InteractiveTextViewer'

export const ${play.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Text: TextData = {
  title: ${JSON.stringify(play.title)},
  author: 'William Shakespeare',
  type: 'play',
  sections: ${JSON.stringify(sections, null, 2).replace(/\n/g, '\n  ')},
}
`
  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(join(OUT_DIR, `${play.slug}.ts`), file, 'utf8')
  return {
    slug: play.slug,
    scenes: scenes.length,
    besides: besides.map(idOf),
    chars: totalChars,
    tally,
  }
}

const only = process.argv[2]
const wanted = only ? PLAYS.filter((p) => p.slug === only) : PLAYS
if (wanted.length === 0) {
  console.error(`No play with slug "${only}". Known: ${PLAYS.map((p) => p.slug).join(', ')}`)
  process.exit(1)
}

let failed = 0
for (const play of wanted) {
  try {
    const r = await build(play)
    // What the heading and direction repairs changed, by kind, so a run on a
    // new edition shows where it leant on them.
    const t = r.tally
    const repaired = [
      t.joint && `${t.joint} joint heading(s)`,
      t.variant && `${t.variant} heading(s) without a stop or in small letters`,
      t.sameLine && `${t.sameLine} heading(s) on the speech's own line`,
      t.split && `${t.split} direction(s) run into a speech`,
      t.margin && `${t.margin} direction(s) at the margin`,
      t.spoken && `${t.spoken} indented song(s) or speech(es) kept as speech`,
      t.listed && `${t.listed} listed direction(s)`,
    ].filter(Boolean)
    console.log(
      `  ok   ${r.slug.padEnd(28)} ${String(r.scenes).padStart(2)} scenes, ${r.chars} chars` +
        (r.besides.length ? `, and ${r.besides.join(', ')}` : '') +
        (repaired.length ? `\n         ${repaired.join(', ')}` : ''),
    )
  } catch (err) {
    failed++
    console.error(`  FAIL ${play.slug.padEnd(28)} ${err.message}`)
  }
}
if (!existsSync(OUT_DIR)) {
  console.error('nothing written')
  process.exit(1)
}
console.log(failed === 0 ? `\n${wanted.length} plays written.` : `\n${failed} failed.`)
process.exit(failed === 0 ? 0 : 1)
