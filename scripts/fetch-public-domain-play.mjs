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
  { slug: 'romeo-and-juliet', id: 1513, title: 'Romeo and Juliet', scenes: 24 },
  { slug: 'a-midsummer-nights-dream', id: 1514, title: "A Midsummer Night's Dream", scenes: 9 },
  { slug: 'the-merchant-of-venice', id: 1515, title: 'The Merchant of Venice', scenes: 20 },
  { slug: 'much-ado-about-nothing', id: 1519, title: 'Much Ado about Nothing', scenes: 17 },
  { slug: 'henry-v', id: 1521, title: 'King Henry V', scenes: 23 },
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
  { slug: 'the-tempest', id: 1540, title: 'The Tempest', scenes: 9 },
]

/**
 * An act heading, with or without the trailing period.
 *
 * Both forms occur across these editions - Romeo and Juliet prints "ACT I",
 * Twelfth Night prints "ACT I." - and requiring one of them silently broke the
 * other. Defined once so the two places that match it cannot drift apart.
 */
const ACT_HEADING = /^ACT ([IVXLC]+)\.?$/

/** One name as the editions print it above a speech: "LADY MACBETH". */
const NAME = "[A-Z][A-Z’' .-]+"

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
 * speech resumed after a direction. So a direction in those four plays that
 * begins some other way mid-scene ("Trumpets sound. The dumb show enters.")
 * is still printed in ordinary type.
 */
const DIRECTION_AT_MARGIN =
  /^(?:\[[^[\]]*\]|(?:[A-Z][^.!?\n]{0,30}\.\s+){0,3}(?:Enter|Re-enter|Exit|Exeunt)\b[\s\S]*)$/

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

/** Split the body into scenes, carrying the act each belongs to. */
function parseScenes(body) {
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

  const scenes = []
  let act = null
  let current = null
  for (const line of lines.slice(from)) {
    const trimmed = line.trim()
    const actMatch = ACT_HEADING.exec(trimmed)
    if (actMatch) {
      act = actMatch[1]
      continue
    }
    // Case-insensitive, deliberately. Gutenberg's Much Ado (1519) mixes
    // "SCENE III." and "Scene III." inside the SAME body, and matching only the
    // upper-case form silently folded four scenes into their predecessors -
    // Act III Scenes II to V arrived as one page. Only the body is scanned, and
    // the body begins at the first upper-case heading, so the contents list
    // above it cannot be swept up by this.
    const sceneMatch = /^SCENE ([IVXLC]+)\.?\s*(.*)$/i.exec(trimmed)
    if (sceneMatch) {
      if (current) scenes.push(current)
      current = {
        act,
        scene: sceneMatch[1],
        setting: sceneMatch[2].replace(/\s+$/, ''),
        lines: [],
      }
      continue
    }
    // A place too long for one line runs on to the next, with no blank line
    // between. The Tempest's first scene does it, and its place was cut at
    // "thunder and lightning", with "heard." printed below as a paragraph of
    // its own (seen 26 September 2026, once the reader began printing places).
    if (current && current.lines.length === 0 && trimmed && !/^\s/.test(line)) {
      current.setting = `${current.setting} ${trimmed}`.trim()
      continue
    }
    if (current) current.lines.push(line)
  }
  if (current) scenes.push(current)
  return scenes
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
function castOf(scenes) {
  const names = new Set()
  for (const { lines } of scenes) {
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

/** Turn a scene's plain-text lines into the HTML the viewer renders. */
function toHtml(sceneLines, cast, tally) {
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
  const scenes = parseScenes(body)
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

  const cast = castOf(scenes)
  const tally = { joint: 0, variant: 0, sameLine: 0, split: 0, margin: 0, spoken: 0 }
  const sections = scenes.map((s) => ({
    id: `act${s.act ?? '0'}-scene${s.scene}`.toLowerCase(),
    title: s.act ? `Act ${s.act}, Scene ${s.scene}` : `Scene ${s.scene}`,
    setting: s.setting,
    content: toHtml(s.lines, cast, tally),
  }))

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
  return { slug: play.slug, scenes: sections.length, chars: totalChars, tally }
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
    ].filter(Boolean)
    console.log(
      `  ok   ${r.slug.padEnd(28)} ${String(r.scenes).padStart(2)} scenes, ${r.chars} chars` +
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
