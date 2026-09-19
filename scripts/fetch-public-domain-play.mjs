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
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
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
  { slug: 'romeo-and-juliet', id: 1513, title: 'Romeo and Juliet' },
  { slug: 'a-midsummer-nights-dream', id: 1514, title: "A Midsummer Night's Dream" },
  { slug: 'the-merchant-of-venice', id: 1515, title: 'The Merchant of Venice' },
  { slug: 'much-ado-about-nothing', id: 1519, title: 'Much Ado about Nothing' },
  { slug: 'henry-v', id: 1521, title: 'King Henry V' },
  { slug: 'julius-caesar', id: 1522, title: 'Julius Caesar' },
  { slug: 'hamlet', id: 1524, title: 'Hamlet' },
  { slug: 'twelfth-night', id: 1526, title: 'Twelfth Night' },
  { slug: 'othello', id: 1531, title: 'Othello' },
  { slug: 'king-lear', id: 1532, title: 'King Lear' },
  { slug: 'antony-and-cleopatra', id: 1534, title: 'Antony and Cleopatra' },
  { slug: 'the-tempest', id: 1540, title: 'The Tempest' },
]

/**
 * An act heading, with or without the trailing period.
 *
 * Both forms occur across these editions - Romeo and Juliet prints "ACT I",
 * Twelfth Night prints "ACT I." - and requiring one of them silently broke the
 * other. Defined once so the two places that match it cannot drift apart.
 */
const ACT_HEADING = /^ACT ([IVXLC]+)\.?$/

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
  return lines
    .slice(0, firstBodyScene)
    .filter((l) => /^Scene [IVXLC]+\./.test(l.trim())).length
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
    if (current) current.lines.push(line)
  }
  if (current) scenes.push(current)
  return scenes
}

/** Turn a scene's plain-text lines into the HTML the viewer renders. */
function toHtml(sceneLines) {
  // trimEnd, not trim. A leading trim strips the indent off the FIRST block of
  // every scene, which is almost always the opening stage direction, and renders
  // "Enter Sampson and Gregory" as though somebody said it aloud.
  const blocks = sceneLines
    .join('\n')
    .replace(/^\n+/, '')
    .trimEnd()
    .split(/\n\s*\n/)
  return blocks
    .map((block) => {
      const text = block.replace(/\s+$/gm, '')
      if (!text.trim()) return ''
      const escaped = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      // A stage direction is INDENTED in these editions; speech starts at
      // column zero with the speaker's name. One leading space is enough - the
      // first version required two and rendered every entrance and exit as
      // dialogue.
      const isDirection = /^[ 	]+\S/.test(block) && !/^[A-Z][A-Z’' .-]+\.$/m.test(text.trim())
      if (isDirection) {
        return `<p class="italic text-muted-foreground">${escaped.trim().replace(/\n\s*/g, ' ')}</p>`
      }
      // First line is the speaker when it is capitalised and ends with a stop.
      const [first, ...rest] = escaped.split('\n')
      if (/^[A-Z][A-Z’' .-]+\.$/.test(first.trim()) && rest.length > 0) {
        return `<p><strong>${first.trim().replace(/\.$/, '')}</strong>\n${rest.join('\n')}</p>`
      }
      return `<p>${escaped}</p>`
    })
    .filter(Boolean)
    .join('\n\n')
}

async function build(play) {
  const url = `https://www.gutenberg.org/cache/epub/${play.id}/pg${play.id}.txt`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${play.slug}: HTTP ${res.status}`)
  const raw = await res.text()

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

  const sections = scenes.map((s) => ({
    id: `act${s.act ?? '0'}-scene${s.scene}`.toLowerCase(),
    title: s.act ? `Act ${s.act}, Scene ${s.scene}` : `Scene ${s.scene}`,
    setting: s.setting,
    content: toHtml(s.lines),
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
  return { slug: play.slug, scenes: sections.length, chars: totalChars }
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
    console.log(`  ok   ${r.slug.padEnd(28)} ${String(r.scenes).padStart(2)} scenes, ${r.chars} chars`)
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
