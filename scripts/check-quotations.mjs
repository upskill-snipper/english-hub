#!/usr/bin/env node
/**
 * Every quotation the site attributes to a held text, checked against that text.
 *
 * WHY IT EXISTS (27 September 2026). Students memorise these quotations for
 * their exams, so a quotation shown as a writer's must be the writer's words,
 * in the wording of the edition the site holds (src/data/full-texts). Until
 * now only some pages were checked: study-guides.test.ts reads the guide data,
 * and two per-text tests read the Macbeth and Frankenstein pages. Reviews that
 * night found misquotations on pages no test reads: Macbeth's board resource
 * pages, analysis pages and model essays, still in the Folger Shakespeare
 * Library's wording the site no longer prints (src/data/model-essays/macbeth.ts
 * said its quotations came from "the standard Folger / RSC editions"), and the
 * Frankenstein revision-notes page. study-guides.test.ts also skips quotations
 * of one word and matches a fragment inside a word ("yellow eye" passed for
 * "yellow eyes"). This reads the whole site the same way for every held text.
 *
 * FINISHED AND VERIFIED 2 October 2026. The first draft ran, but nobody had
 * judged its verdicts. Judging samples by hand found two kinds of fault, both
 * fixed and each pinned by the self-test: false alarms (a name inside a
 * neighbouring quotation, or a writer's name 450 lines up a page, deciding
 * whose words a quotation were; an EAL grammar example; Eliot's own line in
 * The Waste Land's guide; a marking note quoting the student's essay; "(echoing
 * Act 1.7)" read as a place), and misquotations passed over unseen (an elided
 * word cost two edits against its full form, so "justice, verity, temperance,
 * stableness" was no quotation of Macbeth at all; a verdict with no cost was
 * thrown away whenever the sentence also named another work; "instead of"
 * anywhere within 250 characters excused a quotation).
 *
 * A GUARD SINCE 2 October 2026. Until then this was a command someone had to
 * remember to run. src/__tests__/every-quotation-is-the-held-text.test.ts now
 * imports audit() and fails on any quotation it finds wrong, on every push;
 * the command line runs only when this file is run (main). For that the audit
 * was made about six times faster (mentionsIn, pairCost, align, namesNoWork),
 * and every record of a full run, those passed over included, was compared
 * with the slower version's and found identical. What the guard must not fail
 * on is declared here, in one place for both: EXCEPTIONS, quotations the
 * checker takes for a held text's that are not its words at all, and SKIPPED,
 * held texts passed over by decision.
 *
 * WHAT IT READS. Every .ts and .tsx file under src/app, src/data, src/lib and
 * src/components, the i18n dictionary shards among them; the .mdx files under
 * content/ (the blog, lesson plans, printables); and the mobile app's screens,
 * components and data, JSON included, which quote the set texts too. Not the
 * held texts themselves, the tests, the generated i18n maps (copies of the
 * shards), and not the mock-exam banks or the comics, which have checkers of
 * their own (scripts/check-mock-exam-extracts.mjs, comics.test.ts). Not the
 * reader's highlight anchors in text-annotations.generated.ts, which are cut
 * from the edition by character and checked by
 * the-highlights-highlight-something.test.ts (their notes are read). Not a
 * guide's sources, rights or quotesFromElsewhere, which record editions.
 * Quotations are found by the scanner the fair-dealing tests use
 * (src/__tests__/helpers/quotations.ts): spans in double quotation marks,
 * spans in single ones that are not apostrophes, and the whole value of a
 * quotation field (quote, keyQuote, phrase and their kin). A poem page's
 * language-device `example` is one: the poem viewer prints it between
 * quotation marks it adds itself. Until 2 October 2026 no `example` was read
 * whole, so a misquoted device example was never checked (Sonnet 116's
 * "finds / bends" dropped the "Or" that opens line 4, unseen). An `example`
 * anywhere else is a model sentence or a frame and is read, as before, only
 * for what it puts in quotation marks; a device example that is the site's
 * own note, opening with a square bracket or ending "(paraphrase)", is not
 * read, as the fair-dealing guards do not read it.
 *
 * WHICH TEXT A QUOTATION BELONGS TO. The nearest context that names a work
 * decides: the sentence the quotation sits in, leaving out names inside the
 * other quotations there ("Wherefore art thou Romeo?" does not make the next
 * line in a list Romeo and Juliet's); then each enclosing object (by its own
 * string fields only, so a sibling card naming another play does not claim
 * it), JSX element, or map entry keyed by a text's slug, outward, where a
 * character's or writer's name counts within 1,500 characters and a title
 * within 8,000, and nothing beyond; then a dictionary string's key and the
 * pages that print it; then the file's path (src/app/revision/texts/macbeth,
 * study-guides/macbeth.ts, a blog post's slug); then the one held text the
 * whole file names by title three times or more. A title is a strong mention
 * and decides alone; a name is weak (Beatrice is in Much Ado and in A View
 * from the Bridge; Napoleon is in Animal Farm and in Byron), so it adds its
 * text to what the path says rather than replacing it. A context naming more
 * than three works is a hub or a comparison and decides nothing. Works that
 * are not held are named too (the set texts in copyright, the anthology poems,
 * short stories by the same writers, any folder named for a work), so that a
 * quotation of one is left alone rather than blamed on the held text beside it.
 *
 * WHAT COUNTS AS A QUOTATION OF IT, and so is checked:
 *   - a span found word for word in the text (checked, and passes);
 *   - a span close to a passage of the text but not the same: a changed,
 *     dropped or added word, a changed spelling, lines out of order, or two
 *     passages run together with nothing to mark the gap;
 *   - one or two words that are a changed form of a word the text prints whole
 *     ("yearning" where Shelley has "yearned"), when a quotation field holds
 *     them or the sentence presents them as the text's ("the word", "describes
 *     his");
 *   - a span of six words or more found word for word in another held text
 *     the file never names (a line from another work);
 *   - a quotation field (quote, keyQuote, phrase, the text of a quotation card,
 *     a <Quote> or <QuoteCard>, a poem's printed line) of four words or more
 *     that is in no held text at all but is written in the text's own
 *     vocabulary, or such a span a speech verb gives to one of the text's
 *     characters ("Scrooge says").
 * Anything else in quotation marks is not treated as the text's: our own
 * titles and labels (the whole value of a `text` field that is not a
 * quotation card counts only if it is the text word for word), scare quotes,
 * exam question wording, sentence frames, critics' words, a quotation beside
 * a `source` or `critic` field, a span in another script (a translation), a
 * note quoting the essay or answer it annotates, an unmarked description in a
 * list of marked quotations, a reading set against another ("X" for "Y"), and
 * the example in a sentence about misquotation. What is declared to come from
 * elsewhere is excused: a study guide's quotesFromElsewhere, the Frankenstein
 * test's NOT_THE_NOVEL, and DECLARED below. A page that says it prints another
 * printing (OTHER_PRINTINGS) has its differences reported apart, as
 * `printing`, not as wrong.
 *
 * HOW IT COMPARES. Case, quotation marks, dash styles (-- and a dash alike),
 * apostrophe shapes, whitespace (so "on 't" and "on't" are one), a standalone
 * "&" for "and", scansion hyphens ("TY-ger") and HTML tags are normalised, and
 * nothing else. The verdicts:
 *   words        a word changed, added or dropped;
 *   spelling     the same word spelt otherwise ("tomorrow" for the edition's
 *                "to-morrow", "withered" for "wither'd", "the" for "th'",
 *                "colour" for "color"), reported apart because the fix is
 *                mechanical, but still wrong: the rule is the held wording;
 *   tag          a speech tag cut with no ellipsis ("said Scrooge"), which an
 *                ellipsis would put right;
 *   join         passages run together, words cut with no ellipsis;
 *   order        parts or lines of the text in another order;
 *   other-work   a line from another held text;
 *   not-in-text  a quotation field, or a line given to a character, in no
 *                held text;
 *   place        the act and scene, chapter or stave given is not where the
 *                edition has it;
 *   speaker      the edition gives the line to someone else.
 * "...", "[...]" and a cloze blank ("_____") may stand for omitted words, and
 * a bracketed editorial insertion for the words it replaces; the parts must be
 * in the text in that order. " / " marks a line break, so the lines either
 * side must be consecutive. A speaker's name set into a quotation of a play
 * ("MERCUTIO: I am hurt") is not counted as words, and stage directions may
 * be left out. A place is read from a sibling `where`, `act`, `actScene`,
 * `chapter` or `stave` field, a `speaker` like "Macbeth (1.5)", or "(Act 1,
 * Scene 5)" just after a quotation in prose, but not "(echoing Act 1.7)".
 *
 * WHAT IT CANNOT SEE. A quotation of a held text in a context that names no
 * work and sits in no text's folder; an invented line outside a quotation
 * field that no speech verb gives to a character; a quotation so far from the
 * text that it shares less than three in five of its words in step, or only
 * small ones. Texts that are not held (in copyright, or not yet fetched) are
 * not checked at all. Punctuation inside a quotation is not compared
 * (macbeth-pages-print-the-held-text.test.ts compares it on the Macbeth
 * reader's pages). The held La Belle Dame is Colvin's text, not the letter
 * text the Edexcel anthology prints: the anthology page and the course that
 * say they quote the anthology have their differences reported apart, as
 * `printing`, and cannot be checked here; anywhere else (the reader's notes,
 * beside the Colvin text) the anthology's wording is reported as wrong.
 *
 * OUTPUT. Per held text: quotations checked, how many are wrong and why, in
 * which files, and up to five examples, each the first eight words of the
 * quotation and the reason. Never more than eight words of any quotation, and
 * no fragment of the text in a reason longer than six words: printing
 * passages is what the fair-dealing tests exist to prevent. The quotations
 * EXCEPTIONS excuses are listed apart, as excepted, with whose words they
 * are; a skipped text (SKIPPED) is counted, never named.
 *
 *   node scripts/check-quotations.mjs                    the audit
 *   node scripts/check-quotations.mjs --text macbeth     one held text
 *   node scripts/check-quotations.mjs --list             every wrong quotation, not five
 *   node scripts/check-quotations.mjs --json out.json    the full result, for a fixer
 *   node scripts/check-quotations.mjs --file <path> [--trace]
 *                                                        one file's quotations, and with
 *                                                        --trace those passed over, and why
 *   node scripts/check-quotations.mjs --sample 40 [--verdict wrong|ok] [--why words] [--seed 3] [--context]
 *                                                        a random sample, to judge by hand
 *   node scripts/check-quotations.mjs --trace --json out.json
 *                                                        every record, the passed-over too,
 *                                                        for auditing what is left out
 *   node scripts/check-quotations.mjs --try macbeth "<quotation>"
 *                                                        one quotation against one text
 *   node scripts/check-quotations.mjs --self-test        the reverse test
 *
 * Exit code: 1 when the self-test fails, or with --strict when any quotation
 * is wrong or an entry in EXCEPTIONS matches none; otherwise 0.
 */

import ts from 'typescript'
import createJiti from 'jiti'
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = process.cwd()
const jiti = createJiti(import.meta.url, { alias: { '@': resolve('src') }, interopDefault: true })
const posix = (p) => relative(ROOT, p).split('\\').join('/')
const SCANNER = jiti(join(ROOT, 'src/__tests__/helpers/quotations.ts'))

// ── Words ───────────────────────────────────────────────────────────────────

/**
 * A string as the words a reader would say, lower case, each with what joined
 * it to the word before: ' ' (a space), '-' (a hyphen or dash) or "'" (an
 * apostrophe). Words are divided at apostrophes as well as spaces, so that
 * "on 't" and "on't" are the same words; `sep` keeps "wither'd" printable.
 * Apostrophe shapes are one and Gutenberg's underscores (italics) go.
 */
function wordsOf(s) {
  const t = s
    .replace(/[\u2018\u2019\u02BC`\u00B4\u2032]/g, "'")
    .replace(/_/g, '')
    // An ampersand standing alone is the word "and": Blake's "& what art",
    // where the held Tyger prints "and what art".
    .replace(/(?<![\p{L}\p{N}])&(?![\p{L}\p{N}#])/gu, ' and ')
    .toLowerCase()
  const out = []
  let last = 0
  for (const m of t.matchAll(/[\p{L}\p{N}]+/gu)) {
    const between = t.slice(last, m.index)
    const sep = /\s/.test(between) || !out.length ? ' ' : between.includes("'") ? "'" : /[-\u2010-\u2015\u2212]/.test(between) ? '-' : ' '
    // `brk`: a stop or a quotation mark before the word (not a comma, which
    // falls inside a passage as often as at its edge).
    out.push({ w: m[0], sep, brk: /[.;:!?"“”«»]/.test(between) })
    last = m.index + m[0].length
  }
  return out
}
const tokenise = (s) => wordsOf(s).map((x) => x.w)

const STOP = new Set(
  (
    'a an the and or but of to in on at by for with from as is are was were be been am it its ' +
    'i me my we us our you your thou thee thy he him his she her they them their this that these those ' +
    'not no so do did does have has had will would shall should can could may might must o oh what which who ' +
    'all if then than there here when where how why now up out into upon too very more most such own same s t d ll th'
  ).split(' '),
)
const contentWords = (ws) => ws.filter((w) => !STOP.has(w)).length

// ── The held texts ──────────────────────────────────────────────────────────

const ROMAN = { i: 1, v: 5, x: 10, l: 50, c: 100 }
function roman(s) {
  const t = s.toLowerCase()
  if (!/^[ivxlc]+$/.test(t)) return NaN
  let n = 0
  for (let i = 0; i < t.length; i++) {
    const v = ROMAN[t[i]]
    const next = ROMAN[t[i + 1]] ?? 0
    n += v < next ? -v : v
  }
  return n
}
const WORDNUM = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 }
function num(s) {
  if (!s) return NaN
  if (/^\d+$/.test(s)) return Number(s)
  return WORDNUM[s.toLowerCase()] ?? roman(s)
}

/** Where a held section sits: act and scene, or book and chapter, or stave, or letter. */
function placeOf(title, i) {
  let m = /^Act ([IVX]+), Scene ([IVX]+)/.exec(title)
  if (m) return { act: roman(m[1]), scene: roman(m[2]) }
  m = /^Act ([IVX]+), (?:Chorus|Prologue)/.exec(title)
  if (m) return { act: roman(m[1]), chorus: true }
  if (/^Prologue/.test(title)) return { act: 1, prologue: true }
  if (/^Epilogue/.test(title)) return { epilogue: true }
  m = /^Book (One|Two), Chapter ([IVXL]+)/.exec(title)
  if (m) return { book: num(m[1]), chapter: roman(m[2]) }
  m = /^Stave ([IVX]+)/.exec(title)
  if (m) return { stave: roman(m[1]) }
  m = /^Chapter ([IVXL]+)/.exec(title)
  if (m) return { chapter: roman(m[1]) }
  m = /^Letter ([IVX]+)/.exec(title)
  if (m) return { letter: roman(m[1]) }
  return { ordinal: i + 1, title }
}

/** A stream of words with an index: {tokens, seps, index, at (its place in the full text)}. */
function stream(tokens, seps, at, brk = []) {
  const index = new Map()
  tokens.forEach((w, i) => {
    let a = index.get(w)
    if (!a) index.set(w, (a = []))
    a.push(i)
  })
  return { tokens, seps, index, at, brk }
}

function loadHeld() {
  const dir = join(ROOT, 'src/data/full-texts')
  return readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .sort()
    .map((f) => {
      const slug = f.replace(/\.ts$/, '')
      const data = Object.values(jiti(join(dir, f))).find((v) => v && Array.isArray(v.sections))
      const tokens = []
      const seps = []
      const brk = []
      const sec = []
      const spk = []
      const sd = []
      const speakers = []
      data.sections.forEach((s, si) => {
        for (const para of s.content.replace(/&amp;/g, '&').split(/<\/p>/)) {
          let speaker = -1
          let body = para
          const m = /<strong>([^<]*)<\/strong>/.exec(para)
          if (m) {
            const name = m[1].replace(/\.$/, '').trim().toLowerCase()
            speaker = speakers.indexOf(name)
            if (speaker < 0) speaker = speakers.push(name) - 1
            body = para.replace(m[0], ' ')
          }
          const direction = /class="italic/.test(para)
          body = body.replace(/<[^>]+>/g, ' ')
          // A stage direction inside a speech is bracketed: "[_Exit._]".
          for (const piece of body.split(/(\[[^\]]*\])/)) {
            const inBrackets = piece.startsWith('[')
            for (const { w, sep, brk: b } of wordsOf(piece)) {
              tokens.push(w)
              seps.push(sep)
              brk.push(b)
              sec.push(si)
              spk.push(speaker)
              sd.push(direction || inBrackets)
            }
          }
        }
      })
      // How often each word is capitalised in the edition, to tell a name
      // ("Macbeth", "Christmas") from a title word the text uses as a word
      // ("animal", "letter").
      const caps = new Map()
      for (const s of data.sections)
        for (const m of s.content.replace(/<[^>]+>/g, ' ').matchAll(/\p{L}+/gu)) {
          const w = m[0].toLowerCase()
          const c = caps.get(w) ?? [0, 0]
          c[0] += m[0][0] !== w[0] ? 1 : 0
          c[1]++
          caps.set(w, c)
        }
      const full = stream(tokens, seps, null, brk)
      // The same text without its stage directions, for a quotation that
      // leaves one out, with each word's place in the full text.
      const keep = tokens.map((_, i) => i).filter((i) => !sd[i])
      const spoken = stream(
        keep.map((i) => tokens[i]),
        keep.map((i) => seps[i]),
        keep,
        keep.map((i) => brk[i]),
      )
      return {
        slug,
        title: data.title,
        type: data.type,
        sections: data.sections.map((s, i) => ({ title: s.title, place: placeOf(s.title, i) })),
        ...full,
        full,
        spoken,
        sec,
        spk,
        speakers,
        vocab: new Set(tokens),
        // Words the edition joins with an apostrophe or hyphen, as printed:
        // "cross'd", "temp'rance", "to-morrow".
        joined: new Set(tokens.slice(1).flatMap((w, k) => (seps[k + 1] !== ' ' ? [tokens[k] + seps[k + 1] + w] : []))),
        // Words the edition prints whole somewhere, not only as half of "compar'd" or "grind-stone".
        whole: new Set(tokens.filter((w, k) => seps[k] === ' ' && (k + 1 >= tokens.length || seps[k + 1] === ' '))),
        caps,
      }
    })
}

const HELD = loadHeld()
const HELD_BY_SLUG = new Map(HELD.map((t) => [t.slug, t]))

// ── Finding words in a text ─────────────────────────────────────────────────

/** Every start at which `words` run consecutively in stream s. */
function occurrencesIn(s, words) {
  if (!words.length) return []
  let rare = -1
  let best = Infinity
  for (let i = 0; i < words.length; i++) {
    const n = s.index.get(words[i])?.length ?? 0
    if (n === 0) return []
    if (n < best) {
      best = n
      rare = i
    }
  }
  const out = []
  for (const p of s.index.get(words[rare])) {
    const at = p - rare
    if (at < 0 || at + words.length > s.tokens.length) continue
    let ok = true
    for (let j = 0; j < words.length; j++)
      if (s.tokens[at + j] !== words[j]) {
        ok = false
        break
      }
    if (ok) out.push(at)
  }
  return out
}

/** Occurrences as [start, end) in the full text; stage directions may be left out. */
function occurrences(t, words) {
  const full = occurrencesIn(t.full, words).map((s) => [s, s + words.length])
  if (full.length) return full
  return occurrencesIn(t.spoken, words).map((s) => [t.spoken.at[s], t.spoken.at[s + words.length - 1] + 1])
}

/**
 * Where the parts of a quotation are, in order. Returns the chains found
 * (each a list of [start, end)), 'order' if every part is there but never in
 * this order, or null if a part is missing.
 */
function findParts(t, parts) {
  if (!parts.length) return null
  const occ = parts.map((p) => occurrences(t, p))
  if (occ.some((o) => !o.length)) return null
  const chains = []
  for (const first of occ[0]) {
    const chain = [first]
    let ok = true
    for (let k = 1; k < occ.length && ok; k++) {
      const next = occ[k].find(([s]) => s >= chain[chain.length - 1][1])
      if (next) chain.push(next)
      else ok = false
    }
    if (ok) chains.push(chain)
    if (chains.length > 40) break
  }
  return chains.length ? chains : 'order'
}

/**
 * Edit weights for an alignment. A changed word costs 10 and the same word
 * spelt another way 4; a text word the quotation leaves out costs 10 and a
 * word it adds 11. So of two readings with the same number of edits, the one
 * that pairs a quoted word with the text's is preferred to one that calls the
 * quoted word added and the text's left out. Until 2 October 2026 the tie went
 * the other way, and the reasons misled whoever had to fix the page: "adds
 * "occasions"" for a quotation that had dropped "do", "adds "thrice
 * disturbed"" for one that spelt "disturb'd" in full.
 */
const W_SPELL = 4
const W_SUB = 10
const W_DEL = 10
const W_INS = 11
// The steps an alignment can take into a cell, for walking it back.
const DIAG = 1
const INS = 2
const DEL = 3
const JOIN_W = 4 // one quoted word for two the text runs together ("temperance", "temp'rance")
const JOIN_P = 5 // two quoted words for one of the text's ("plann'd", "planned")

/**
 * The cost of reading quoted word a where the text has b. A changed word that
 * is nearly the text's (another form of it, or its letters with one changed
 * or rearranged) costs a little less than any other, so that of two passages
 * the closer is preferred: "ate each other" is Ross's "eat each other", not
 * "wake each other" two scenes before.
 */
function pairCost(a, b) {
  return a === b ? 0 : costIn(costsOf(a), a, b)
}
/**
 * pairCost's answers so far, by quoted word and then the text's: the same
 * pairs of words recur in every alignment. Until 2 October 2026 one map keyed
 * by both words held at most 500,000 answers and was emptied 14 times in a
 * full audit, each time to work the same answers out again: 7 million of them,
 * a third of the audit's time. A full audit asks about 4 million pairs; the
 * map is emptied after 3 million answers, which costs little now that an
 * answer is quick to work out again (formsOf), and keeps the audit's memory
 * within what a test worker has.
 */
const PAIRS = new Map()
let PAIRS_HELD = 0
/** The answers so far for quoted word a, by the text's word. */
function costsOf(a) {
  let row = PAIRS.get(a)
  if (row === undefined) PAIRS.set(a, (row = new Map()))
  return row
}
/** pairCost for two different words, with a's answers so far (costsOf). */
function costIn(row, a, b) {
  let c = row.get(b)
  if (c === undefined) {
    c = spelling(a, b) ? W_SPELL : nearly(a, b) ? W_SUB - 1 : W_SUB
    // A row held by an alignment under way stays usable when the map is emptied.
    if (++PAIRS_HELD > 3000000) {
      PAIRS.clear()
      PAIRS_HELD = 0
    }
    row.set(b, c)
  }
  return c
}
/** Another form of the word, or its letters with one changed or rearranged. */
function nearly(a, b) {
  if (Math.abs(a.length - b.length) > 3) return false
  if (a.length >= 3 && a.length === b.length && formsOf(a).sorted === formsOf(b).sorted) return true
  if (Math.min(a.length, b.length) >= 4 && oneEditApart(a, b)) return true
  return formOf(a, b)
}

/**
 * The cost of reading `one` word as `a` and `b` joined by `sep`: nothing for
 * a space ("anything" and "any thing"), a spelling for a hyphen or an
 * apostrophe ("tomorrow" and "to-morrow", "temperance" and "temp'rance").
 * Infinity when they are not one word.
 *
 * Words are divided at apostrophes and hyphens, so that "on 't" and "on't" are
 * the same words. Until 2 October 2026 that made an elided word cost two edits
 * against its full form, and a short quotation in modern spelling ("justice,
 * verity, temperance, stableness" for the held "temp'rance") was not
 * recognised as a quotation of the text at all, and so passed unchecked.
 */
function joinCost(one, a, sep, b) {
  // `one === a + b`, without building a + b for every cell of every table.
  if (one.length === a.length + b.length && one.startsWith(a) && one.endsWith(b)) return sep === ' ' ? 0 : W_SPELL
  if (sep !== ' ' && spelling(one, a + sep + b)) return W_SPELL
  return Infinity
}

/**
 * The cost table aligning quoted words P (each with the separator before it,
 * PS) against text words W (WS), and the step taken into each cell. With
 * `free`, the quotation may start and end anywhere in W. cols[j][i] is
 * pairCost(P[i], W[j]), worked out by the caller (align) once for every
 * window it tries.
 *
 * Cell (i, j) is D[i * (n + 1) + j], in one table reused by every alignment
 * (TABLE_D, TABLE_S), so the caller reads what it needs before the next
 * alignment begins. Until 2 October 2026 each alignment made two arrays a row,
 * millions of them in a full audit, for the garbage collector to clear.
 */
function alignTable(P, PS, W, WS, free, cols) {
  const m = P.length
  const n = W.length
  const w1 = n + 1
  if (TABLE_D.length < (m + 1) * w1) {
    TABLE_D = new Float64Array(2 * (m + 1) * w1)
    TABLE_S = new Uint8Array(2 * (m + 1) * w1)
  }
  const D = TABLE_D
  const S = TABLE_S
  // Every cell is written before it is read: row 0 and column 0 here, the rest in order below.
  D[0] = 0
  S[0] = 0
  for (let i = 1; i <= m; i++) {
    D[i * w1] = D[(i - 1) * w1] + W_INS
    S[i * w1] = INS
  }
  for (let j = 1; j <= n; j++) {
    D[j] = free ? 0 : D[j - 1] + W_DEL
    S[j] = DEL
  }
  // A join across a space costs nothing only when the letters add up, and
  // otherwise is no join at all (joinCost is Infinity), so it is tried only
  // then: most cells of most tables are not one word printed as two.
  for (let i = 1; i <= m; i++) {
    const p = P[i - 1]
    const p2 = i >= 2 ? P[i - 2] : ''
    const ps = PS[i - 1]
    const up = (i - 1) * w1
    const up2 = (i - 2) * w1
    const here = i * w1
    for (let j = 1; j <= n; j++) {
      const w = W[j - 1]
      let best = D[up + j - 1] + cols[j - 1][i - 1]
      let step = DIAG
      if (j >= 2 && (WS[j - 1] !== ' ' || p.length === W[j - 2].length + w.length)) {
        const c = D[up + j - 2] + joinCost(p, W[j - 2], WS[j - 1], w)
        if (c < best) {
          best = c
          step = JOIN_W
        }
      }
      if (i >= 2 && (ps !== ' ' || w.length === p2.length + p.length)) {
        const c = D[up2 + j - 1] + joinCost(w, p2, ps, p)
        if (c < best) {
          best = c
          step = JOIN_P
        }
      }
      if (D[here + j - 1] + W_DEL < best) {
        best = D[here + j - 1] + W_DEL
        step = DEL
      }
      if (D[up + j] + W_INS < best) {
        best = D[up + j] + W_INS
        step = INS
      }
      D[here + j] = best
      S[here + j] = step
    }
  }
  return { D, S, w1 }
}
/** alignTable's tables, reused from one alignment to the next. */
let TABLE_D = new Float64Array(4096)
let TABLE_S = new Uint8Array(4096)

/**
 * Walk an alignment back from cell (i, j). Each step: the quoted words it
 * reads (indices into P), the text's (indices into W) and its cost. With
 * `free`, the walk ends when the quotation is used up.
 */
function walkBack(P, PS, W, WS, S, i, j, free) {
  const steps = []
  const w1 = W.length + 1
  while (i > 0 || (!free && j > 0)) {
    const s = i === 0 ? DEL : j === 0 ? INS : S[i * w1 + j]
    if (s === DIAG) {
      steps.push({ kind: DIAG, q: [i - 1], w: [j - 1], cost: pairCost(P[i - 1], W[j - 1]) })
      i--
      j--
    } else if (s === JOIN_W) {
      steps.push({ kind: JOIN_W, q: [i - 1], w: [j - 2, j - 1], cost: joinCost(P[i - 1], W[j - 2], WS[j - 1], W[j - 1]) })
      i--
      j -= 2
    } else if (s === JOIN_P) {
      steps.push({ kind: JOIN_P, q: [i - 2, i - 1], w: [j - 1], cost: joinCost(W[j - 1], P[i - 2], PS[i - 1], P[i - 1]) })
      i -= 2
      j--
    } else if (s === DEL) {
      steps.push({ kind: DEL, q: [], w: [j - 1], cost: W_DEL })
      j--
    } else {
      steps.push({ kind: INS, q: [i - 1], w: [], cost: W_INS })
      i--
    }
  }
  return steps.reverse()
}

/** Words as printed, with the apostrophes and hyphens that joined them, at most `max` of them. */
function printed(ws, seps, max = 6) {
  let out = ''
  let n = 0
  for (let k = 0; k < ws.length; k++) {
    const sep = seps[k] ?? ' '
    if (k && sep === ' ') n++
    if (n >= max) return `${out} ...`
    out += k ? (sep === ' ' ? ' ' : sep) : ''
    out += ws[k]
  }
  return out
}

/** The separators of a list of words: those it carries, or spaces. */
const sepsOf = (P) => P.seps ?? P.map(() => ' ')

/**
 * The passage of stream s closest to quoted words P: a semi-global alignment
 * (free start and end in the text) around the starts the rarer words vote for.
 * `names` are the text's own names and title words, which do not count as
 * evidence that a span is the text's ("the scarlet letter symbolises
 * adultery" is not a misquotation of Hawthorne).
 */
function align(s, P, names = new Set()) {
  const m = P.length
  const PS = sepsOf(P)
  // Each word votes for where the quotation would start if it were there; a
  // small word's vote counts a quarter, or every "the ... of the ..." in a
  // play outvotes the one place "dagger" and "mind" agree on ("the dagger of
  // the mind" was never tried against "A dagger of the mind" until 2 October
  // 2026, and so passed as no quotation of Macbeth at all).
  const votes = new Map()
  for (let i = 0; i < m; i++) {
    const L = s.index.get(P[i])
    if (!L || L.length > 3000) continue
    const v = STOP.has(P[i]) ? 0.25 : 1
    for (const p of L) votes.set(p - i, (votes.get(p - i) ?? 0) + v)
  }
  if (!votes.size) return null
  // The ten starts with the most votes at and around them, most first, ties in
  // the order first voted for: what sorting every start and taking ten gave
  // until 2 October 2026, without sorting tens of thousands of starts for a
  // quotation of common words.
  const top = []
  for (const [st, v] of votes) {
    let near = v
    for (let d = -2; d <= 2; d++) if (d) near += (votes.get(st + d) ?? 0) * 0.9
    if (top.length === 10 && near <= top[9][1]) continue
    let k = top.length
    while (k > 0 && top[k - 1][1] < near) k--
    top.splice(k, 0, [st, near])
    if (top.length > 10) top.pop()
  }
  // Each quoted word's cost against the text's word at a place, worked out
  // once for all the windows tried, which overlap: until 2 October 2026 every
  // window looked every pair up again, 37 million lookups in a full audit.
  const rows = P.map(costsOf)
  const columns = new Map()
  const column = (at) => {
    let c = columns.get(at)
    if (c === undefined) {
      const w = s.tokens[at]
      c = new Float64Array(m)
      for (let i = 0; i < m; i++) c[i] = P[i] === w ? 0 : costIn(rows[i], P[i], w)
      columns.set(at, c)
    }
    return c
  }
  let best = null
  for (const [st] of top) {
    // Wide enough to see a tag of a dozen words left out of the middle.
    const lo = Math.max(0, st - 4)
    const hi = Math.min(s.tokens.length, st + m + 16)
    const W = s.tokens.slice(lo, hi)
    const WS = s.seps.slice(lo, hi)
    const cols = []
    for (let at = lo; at < hi; at++) cols.push(column(at))
    const { D, S, w1 } = alignTable(P, PS, W, WS, true, cols)
    // The latest end of least cost, so that a quotation ending in a changed
    // spelling ("grindstone, Scrooge") is aligned through to its last word.
    let end = 0
    for (let j = 1; j <= W.length; j++) if (D[m * w1 + j] <= D[m * w1 + end]) end = j
    const steps = walkBack(P, PS, W, WS, S, m, end, true)
    // A word changed at either edge of the passage, across a stop or a
    // quotation mark in the edition, is a word added, not one put for the
    // text's: "More than eighteen hundred brothers" adds "brothers"; it does
    // not put it for the "said" after Dickens's closing quotation mark.
    const changed = (st) => st.kind === DIAG && st.cost >= W_SUB - 1
    const across = (a, b) => s.brk.slice(lo + a, lo + b + 1).some(Boolean) // a stop before any word from a to b
    const firstMatch = steps.findIndex((st) => st.cost === 0)
    const lastMatch = steps.findLastIndex((st) => st.cost === 0)
    if (firstMatch > 0)
      for (const st of steps.slice(0, firstMatch))
        if (changed(st) && across(st.w[0] + 1, steps[firstMatch].w[0])) Object.assign(st, { kind: INS, w: [], cost: W_INS })
    if (lastMatch >= 0)
      for (const st of steps.slice(lastMatch + 1))
        if (changed(st) && across(steps[lastMatch].w[steps[lastMatch].w.length - 1] + 1, st.w[0])) Object.assign(st, { kind: INS, w: [], cost: W_INS })
    const r = { weight: D[m * w1 + end], exact: 0, spelt: 0, changed: 0, added: 0, dropped: 0, meaningful: 0, steps: [], s }
    let named = 0
    for (const st of steps) {
      st.w = st.w.map((k) => k + lo)
      r.steps.push(st)
      if (st.cost === 0) {
        r.exact += st.q.length
        for (const k of st.q) if (names.has(P[k])) named++
        else if (!STOP.has(P[k])) r.meaningful++
      } else if (st.cost === W_SPELL) {
        r.spelt++
        if (st.w.some((k) => !STOP.has(s.tokens[k]))) r.meaningful++
      } else if (st.kind === INS) r.added++
      else if (st.kind === DEL) r.dropped++
      else r.changed++
    }
    // A name is evidence of which text a span is from, but one is enough:
    // "Macbeth and Banquo ARE generals" is not a line of the play.
    r.meaningful += Math.min(1, named)
    const ws = r.steps.flatMap((st) => st.w)
    // Take in the rest of a word the text divides at an apostrophe or hyphen ("ripp'd", "grind-stone").
    let a = ws.length ? Math.min(...ws) : lo
    let b = ws.length ? Math.max(...ws) + 1 : lo
    while (a > 0 && s.seps[a] !== ' ') a--
    while (b < s.tokens.length && s.seps[b] !== ' ') b++
    r.start = a
    r.end = b
    r.cost = r.spelt + r.changed + r.added + r.dropped
    if (!best || r.weight < best.weight || (r.weight === best.weight && r.exact > best.exact)) best = r
    if (best.weight === 0) break
  }
  return best
}

/**
 * The edits of an alignment in runs, each the quoted words and the text's
 * between two words that match, as printed, with whether the run is only a
 * spelling of the same words.
 */
function runsOf(P, al) {
  const PS = sepsOf(P)
  const T = al.s
  const runs = []
  let cur = null
  for (const st of al.steps) {
    if (st.cost === 0) {
      cur = null
      continue
    }
    if (!cur) runs.push((cur = { q: [], w: [], spelt: true }))
    cur.q.push(...st.q)
    cur.w.push(...st.w)
    if (st.cost !== W_SPELL) cur.spelt = false
  }
  for (const r of runs) {
    r.qWords = r.q.map((k) => P[k])
    r.wWords = r.w.map((k) => T.tokens[k])
    r.qText = printed(r.qWords, r.q.map((k) => PS[k]))
    r.wText = printed(r.wWords, r.w.map((k) => T.seps[k]))
    // A changed and a dropped word that together are the text's word spelt
    // another way ("wither'd" read as a change and a drop) are a spelling.
    if (!r.spelt && r.qWords.length && r.wWords.length)
      r.spelt = spelling(printed(r.qWords, r.q.map((k) => PS[k]), 99), printed(r.wWords, r.w.map((k) => T.seps[k]), 99))
  }
  return runs
}

const plain = (w) =>
  w
    .replace(/[' -]/g, '')
    // "judgement" and "judgment", "ageing" and "aging": one word, two spellings.
    .replace(/dgement/g, 'dgment')
    .replace(/geing$/, 'ging')
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/[èéê]/g, 'e')

/** The elided forms Shakespeare's editions print, and the words they stand for. */
const ELIDED = { th: ['the'], i: ['in'], o: ['of', 'on'], t: ['it'], ta: ['take'], gainst: ['against'], ne: ['ne'] }

/**
 * "temp'rance" and "temperance", "o'er" and "over", "ta'en" and "taken": an
 * apostrophe inside a word standing for one to three letters of it.
 */
function elides(full, short) {
  const k = short.indexOf("'")
  if (k <= 0 || k === short.length - 1 || short.indexOf("'", k + 1) >= 0 || full.includes("'")) return false
  const a = short.slice(0, k)
  const b = short.slice(k + 1)
  // "where's" is two words, "where is", not a spelling of "whereas".
  if (/^(?:s|t|ll|re|ve|m)$/.test(b)) return false
  const gap = full.length - a.length - b.length
  return gap >= 1 && gap <= 3 && full.startsWith(a) && full.endsWith(b)
}

/**
 * The same words spelt another way: an elision ("wither'd", "withered"; "th'",
 * "the"; "temp'rance", "temperance"), a hyphen ("to-morrow", "tomorrow"), a
 * ligature ("dæmon"), an accent ("fixèd"), a doubled letter, or British and
 * American spelling ("honour").
 */
function spelling(q, w) {
  if (!q || !w || q === w) return false
  if (elides(q, w) || elides(w, q)) return true
  const a = formsOf(q)
  const b = formsOf(w)
  const x = a.plain
  const y = b.plain
  if (x === y) return true
  // Own keys only: "constructor" is a word, and every object has one.
  if ((Object.hasOwn(ELIDED, x) && ELIDED[x].includes(y)) || (Object.hasOwn(ELIDED, y) && ELIDED[y].includes(x))) return true
  if (a.ed === b.ed) return true
  if (a.single === b.single && x.length >= 5) return true
  if (a.or === b.or) return true
  return a.ize === b.ize
}

/**
 * A word as spelling() and nearly() compare it, worked out once a word: its
 * plain form, that form with a final "ed" as "d", with doubled letters single,
 * with "our" as "or" and with "-ise" as "-ize", and its letters in order.
 * Until 2 October 2026 each was worked out again for every pair of words
 * compared, millions of times in an audit.
 */
const FORMS = new Map()
function formsOf(s) {
  let f = FORMS.get(s)
  if (f === undefined) {
    const x = plain(s)
    f = {
      plain: x,
      ed: x.replace(/ed$/, 'd'),
      single: x.replace(/(.)\1/g, '$1'),
      or: x.replace(/our/g, 'or'),
      ize: x.replace(/is(e|ed|es|ing|ation)$/, 'iz$1'),
      sorted: [...s].sort().join(''),
    }
    if (FORMS.size >= 200000) FORMS.clear()
    FORMS.set(s, f)
  }
  return f
}

/**
 * Is one word the other with at most one letter changed, added or taken away
 * (a Levenshtein distance of 0 or 1)? Read from the first difference, in one
 * pass: until 2 October 2026 the whole distance was worked out for every pair
 * of words compared, only to ask whether it was more than one.
 */
function oneEditApart(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1)
  return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1)
}

/** Endings that make another form of one word: "yearn-ing", "yearn-ed", "eye-s". */
const ENDINGS = new Set(['', 's', 'es', 'ed', 'd', 'ing', 'er', 'ers', 'est', 'st', 'eth', 'th', 'ly', 'n', 'en', 'y', 'ies', 'ied'])

/** "yearning" and "yearned", "eye" and "eyes": one word, another form. */
function formOf(a, b) {
  if (!a || !b || a === b) return false
  if (spelling(a, b)) return true
  const x = formsOf(a).plain
  const y = formsOf(b).plain
  let p = 0
  while (p < x.length && p < y.length && x[p] === y[p]) p++
  const ok = (tail) => ENDINGS.has(tail) || ENDINGS.has(tail.replace(/^e/, ''))
  // A shared stem of four letters or more (three for "eye"), different endings.
  if (p >= 4 || (p === 3 && Math.min(x.length, y.length) === 3)) return ok(x.slice(p)) && ok(y.slice(p))
  return false
}

/** Why an alignment differs, in a few words, and whether only the spelling does. */
function describe(P, al) {
  const out = []
  let spellingOnly = true
  for (const r of runsOf(P, al)) {
    if (!r.spelt) spellingOnly = false
    if (r.qWords.length && r.wWords.length) out.push(`"${r.qText}" for "${r.wText}"`)
    else if (r.qWords.length) out.push(`adds "${r.qText}"`)
    else out.push(`leaves out "${r.wText}"`)
  }
  const text = out.slice(0, 3).join(', ') + (out.length > 3 ? `, and ${out.length - 3} more` : '')
  return { text, spellingOnly: spellingOnly && out.length > 0, spaceOnly: out.length === 0 }
}

/**
 * Is the passage the alignment found close enough that the quotation must be
 * meant as it? For four words or more: three of the quotation's words kept
 * (the same, or spelt another way), three in five of the quotation's words and
 * the text's in step, two kept words that carry meaning and are not the text's
 * names or title, and at most two in five changed, added or dropped. For three
 * words: one edit, two meaningful words, and a changed word must be the text's
 * spelt another way or another form of it.
 */
function isNear(P, al) {
  if (!al) return false
  const m = P.length
  const hard = al.changed + al.added + al.dropped
  const kept = al.exact + al.spelt
  // Two kept words that carry meaning, or one where five words or more are
  // kept and only one is changed ("Nought's had, all's spent", where "had",
  // "all" and "'s" carry none).
  if (al.meaningful < 2 && !(al.meaningful === 1 && kept >= 5 && hard <= 1)) return false
  if (m >= 4) return kept >= 3 && kept / Math.max(m, kept + al.dropped) >= 0.6 && contentWords(P) >= 2 && hard <= Math.max(1, Math.floor(m * 0.4))
  if (m === 3) {
    if (hard + al.spelt !== 1 || contentWords(P) < 2) return false
    const r = runsOf(P, al)[0]
    if (!r) return false
    // A spelling, or a word added or left out ("Crown to toe", "Long live Napoleon").
    if (r.spelt || !r.qWords.length || !r.wWords.length) return true
    // A changed word must be another form of the text's, or its letters with
    // one changed or rearranged ("ate" for "eat"); not any short word ("we" for "I").
    return r.qWords.length === 1 && r.wWords.length === 1 && nearly(r.qWords[0], r.wWords[0])
  }
  return false
}

/**
 * One word the text lacks, and the form of it the text has: the same word
 * spelt as the edition spells it ("crossed", "star-cross'd"), or another form
 * of it ("yearning", "yearned").
 */
function nearWord(t, w) {
  if (t.vocab.has(w) || w.length < 3) return null
  for (const v of t.joined) if (spelling(w, v)) return v
  // Whole words only: "compar" is half of "compar'd", not a word "compare" could be a form of.
  for (const v of t.whole) if (v[0] === w[0] && formOf(w, v)) return v
  return null
}

// ── Places: act and scene, chapter, stave ───────────────────────────────────

/** A place named in a reference string, or null. */
function parseRef(s) {
  if (!s) return null
  const t = s.replace(/\s+/g, ' ')
  if (/\bvol(?:ume)?\.?\s/i.test(t)) return null // the 1818 volumes: another edition's numbering
  let m = /\bAct\s+([IVX]+|\d+)\s*[,.:;]?\s*(?:Scene|Sc\.?)\s+([IVXivx]+|\d+)/i.exec(t)
  if (m) return { act: num(m[1]), scene: num(m[2].toUpperCase()) }
  m = /\b(?:Prologue|Chorus)\s+(?:to|before)\s+Act\s+([IVX]+|\d+)/i.exec(t)
  if (m) return { act: num(m[1]), chorus: true }
  m = /\bAct\s+([IVX]+|\d+)\s*[,.:;]?\s*(?:Prologue|Chorus)\b/i.exec(t)
  if (m) return { act: num(m[1]), chorus: true }
  m = /(?:^|[\s(])([1-5])\.([1-9]|1[0-4])(?:\.\d+)?(?=$|[\s),;])/.exec(t)
  if (m) return { act: Number(m[1]), scene: Number(m[2]) }
  m = /\b([IVX]+)\.([ivx]+)\b/.exec(t)
  if (m && roman(m[1]) <= 5) return { act: roman(m[1]), scene: roman(m[2]) }
  m = /\bAct\s+([IVX]+|\d+)\b/i.exec(t)
  if (m) return { act: num(m[1]) }
  m = /\bStave\s+(One|Two|Three|Four|Five|[IV]+|\d)\b/i.exec(t)
  if (m) return { stave: num(/^[ivx]+$/i.test(m[1]) ? m[1].toUpperCase() : m[1]) }
  m = /\bBook\s+(One|Two|1|2|I|II)\b[^A-Za-z0-9]*(?:Chapter|Ch\.?)\s+([IVXL]+|\d+)/i.exec(t)
  if (m) return { book: num(m[1]), chapter: num(m[2]) }
  m = /\b(?:Chapter|Ch\.?)\s+([IVXL]+|\d+|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve)\b/i.exec(t)
  if (m) return { chapter: num(/^[ivxl]+$/i.test(m[1]) ? m[1].toUpperCase() : m[1]) }
  m = /\bLetter\s+([IV]+|\d)\b/.exec(t)
  if (m) return { letter: num(m[1]) }
  return null
}

function fmtPlace(p) {
  if (p.act && p.scene) return `Act ${p.act} Scene ${p.scene}`
  if (p.act && p.chorus) return `the Act ${p.act} Chorus`
  if (p.prologue) return 'the Prologue'
  if (p.epilogue) return 'the Epilogue'
  if (p.act) return `Act ${p.act}`
  if (p.stave) return `Stave ${p.stave}`
  if (p.letter) return `Letter ${p.letter}`
  if (p.chapter) return `${p.book ? `Book ${p.book}, ` : ''}Chapter ${p.chapter}`
  return `Chapter ${p.ordinal} ("${p.title}")`
}

/** Does held section i answer reference r? undefined when r cannot apply to t. */
function placeMatches(t, i, r) {
  const p = t.sections[i].place
  if (r.act !== undefined) {
    if (t.type !== 'play') return undefined
    if (r.chorus) return (p.chorus && p.act === r.act) || (p.prologue && r.act === 1)
    if (p.prologue) return r.act === 1 && r.scene === undefined
    if (p.epilogue) return r.act === 5 && r.scene === undefined
    if (p.act !== r.act) return false
    return r.scene === undefined || p.chorus || p.scene === r.scene
  }
  if (t.type === 'play' || t.type === 'poem') return undefined
  if (r.stave !== undefined) return p.stave === undefined ? undefined : p.stave === r.stave
  if (r.letter !== undefined) return p.letter === undefined ? undefined : p.letter === r.letter
  if (r.chapter !== undefined) {
    if (p.chapter !== undefined) return p.chapter === r.chapter && (!r.book || !p.book || p.book === r.book)
    if (p.stave !== undefined) return p.stave === r.chapter
    if (p.letter !== undefined) return false
    // Chapters with names only (Jekyll and Hyde): the nth section is Chapter n.
    return p.ordinal === r.chapter
  }
  return undefined
}

const placeExists = (t, r) => t.sections.some((_, i) => placeMatches(t, i, r) === true)

// ── Speakers ────────────────────────────────────────────────────────────────

/** The held speakers a stated name means, or null if it means none of them. */
function speakersNamed(t, stated) {
  const n = stated
    .toLowerCase()
    .replace(/[’']s$/, '')
    .replace(/^the\s+/, '')
    .replace(/\s+/g, ' ')
    .trim()
  if (!n || n.length < 3) return null
  const out = new Set()
  t.speakers.forEach((h, i) => {
    const hn = h.replace(/^(?:first|second|third|1st|2nd|3rd)\s+/, '')
    if (h === n || hn === n) out.add(i)
  })
  // "The Witches": each witch, and the lines they speak together.
  if (!out.size && /^[a-z]+s$/.test(n)) {
    const sing = n.replace(/es$/, '').replace(/s$/, '')
    t.speakers.forEach((h, i) => {
      const hn = h.replace(/^(?:first|second|third|1st|2nd|3rd)\s+/, '')
      if (hn === sing || hn === n.slice(0, -1)) out.add(i)
    })
    if (out.size) t.speakers.forEach((h, i) => (h === 'all' || h === 'both') && out.add(i))
  }
  // "King Henry" and "Henry": the edition's names are sometimes longer than the page's.
  if (!out.size)
    t.speakers.forEach((h, i) => {
      if (h.split(' ').length > 1 && (h.endsWith(` ${n}`) || h.startsWith(`${n} `)) && !/^lady /.test(h)) out.add(i)
    })
  // "King Henry" and "King": Gutenberg's Henry V names him by his title in
  // some scenes and by title and name in others, so both are his.
  t.speakers.forEach((h, i) => {
    if (/^(?:king|queen|duke|prince|friar)$/.test(h) && n.startsWith(`${h} `)) out.add(i)
  })
  return out.size ? out : null
}

// ── The works a context can name ────────────────────────────────────────────

/**
 * How each held text is named. `title` is a strong mention (case-sensitive),
 * `people` a weak one: its characters and its writer, where no other held
 * text shares them (Antonio, Sebastian and Portia are in two plays each) and
 * they are not ordinary words (Hero, Bottom, Pearl). `path` is tested against
 * a file's path. A slug in quotation marks ('macbeth') is a strong mention too.
 */
const NAMES = {
  'a-christmas-carol': { title: /\bChristmas Carol\b/, people: /\bScrooge\b|\bMarley\b|\bCratchits?\b|\bFezziwig\b|\bTiny Tim\b/, path: /christmas-carol/ },
  'a-midsummer-nights-dream': { title: /\bMidsummer Night['’]s Dream\b/, people: /\bPuck\b|\bOberon\b|\bTitania\b|\bHermia\b|\bLysander\b|\bDemetrius\b|\bTheseus\b|\bHippolyta\b/, path: /midsummer/ },
  'animal-farm': { title: /\bAnimal Farm\b/, people: /\bSnowball\b|\bSquealer\b|\bBoxer\b|\bOld Major\b|\bMollie\b|\bManor Farm\b|\bNapoleon\b|\bOrwell\b/, path: /animal-farm/ },
  'antony-and-cleopatra': { title: /\bAntony and Cleopatra\b/, people: /\bCleopatra\b|\bEnobarbus\b|\bOctavia\b|\bCharmian\b/, path: /antony/ },
  disabled: { title: /[‘'"“]Disabled[’'"”,.]|\bDisabled\b(?= by | \(Owen| \(Wilfred|[’'"”])|Owen['’]s Disabled/, path: /(?:^|\/)disabled(?:\/|\.ts|$)/ },
  'do-not-go-gentle-into-that-good-night': { title: /\bDo [Nn]ot [Gg]o [Gg]entle\b/, people: /\bDylan Thomas\b/, path: /do-not-go-gentle/ },
  frankenstein: { title: /\bFrankenstein\b/, people: /\bClerval\b|\bJustine\b|\bDe Lacey\b|\bMary Shelley\b/, path: /frankenstein/ },
  // No bare "Dickens": A Christmas Carol is held too.
  'great-expectations': { title: /\bGreat Expectations\b/, people: /\bPip\b|\bMagwitch\b|\bHavisham\b|\bEstella\b|\bJaggers\b|\bWemmick\b|\bPumblechook\b|\bGargery\b|\bMrs Joe\b|\bHerbert Pocket\b|\bDrummle\b|\bOrlick\b|\bCompeyson\b|\bSatis House\b/, path: /great-expectations/ },
  hamlet: { title: /\bHamlet\b/, people: /\bOphelia\b|\bPolonius\b|\bClaudius\b|\bGertrude\b|\bLaertes\b|\bHoratio\b|\bElsinore\b/, path: /hamlet/ },
  'henry-v': { title: /\bHenry V\b/, people: /\bKing Henry\b|\bFluellen\b|\bAgincourt\b|\bHarfleur\b/, path: /henry-v(?!i)/ },
  if: { title: /[‘'"“]If[—–-]*[’'"”]|\bIf—/, people: /\bKipling\b/, path: /(?:^|\/)if(?:\/|\.ts|$)|kipling/ },
  // No bare "Jane" or "Charlotte": Pride and Prejudice has both.
  'jane-eyre': { title: /\bJane Eyre\b/, people: /\bRochester\b|\bThornfield\b|\bLowood\b|\bGateshead\b|\bBrocklehurst\b|\bHelen Burns\b|\bSt\.? John Rivers\b|\bBertha Mason\b|\bGrace Poole\b|\bAd[eè]le Varens\b|\bMrs\.? Fairfax\b|\bFerndean\b|\bCharlotte Bront[eë]\b/, path: /jane-eyre/ },
  'jekyll-and-hyde': { title: /\bJekyll and Hyde\b|\bJekyll & Hyde\b/, people: /\bJekyll\b|\bHyde\b(?! Park)|\bUtterson\b|\bLanyon\b|\bEnfield\b|\bCarew\b|\bStevenson\b/, path: /jekyll/ },
  'julius-caesar': { title: /\bJulius Caesar\b/, people: /\bBrutus\b|\bCassius\b|\bCalpurnia\b|\bCasca\b/, path: /julius-caesar/ },
  'king-lear': { title: /\bKing Lear\b/, people: /\bLear\b|\bCordelia\b|\bGoneril\b|\bRegan\b|\bGloucester\b/, path: /king-lear/ },
  'la-belle-dame-sans-merci': { title: /\bBelle Dame\b|\bbelle dame\b/, people: /\bKeats\b/, path: /la-belle-dame/ },
  macbeth: { title: /\bMacbeth\b|\bMACBETH\b/, people: /\bBanquo\b|\bMacduff\b|\bDuncan\b|\bFleance\b|\bDunsinane\b|\bBirnam\b|\bCawdor\b/, path: /macbeth/ },
  'much-ado-about-nothing': { title: /\bMuch Ado\b/, people: /\bBeatrice\b|\bBenedick\b|\bDogberry\b|\bLeonato\b|\bDon John\b|\bDon Pedro\b/, path: /much-ado/ },
  'my-last-duchess': { title: /\bLast Duchess\b/, people: /\bDuchess\b|\bFerrara\b/, path: /my-last-duchess/ },
  othello: { title: /\bOthello\b/, people: /\bIago\b|\bDesdemona\b|\bCassio\b|\bRoderigo\b|\bBrabantio\b/, path: /othello/ },
  piano: { title: /[‘'"“]Piano[’'"”,.]|\bPiano\b(?= by | \(D)|Lawrence['’]s Piano/, people: /\bD\.\s?H\.\s?Lawrence\b/, path: /(?:^|\/)piano(?:\/|\.ts|$)/ },
  // No bare "Elizabeth" (Frankenstein has one) or "Jane" (Jane Eyre).
  'pride-and-prejudice': { title: /\bPride and Prejudice\b/, people: /\bDarcy\b|\bBingley\b|\bWickham\b|\bBennets?\b|\bLady Catherine\b|\bCharlotte Lucas\b|\bMr\.? Collins\b|\bPemberley\b|\bLongbourn\b|\bNetherfield\b|\bRosings\b|\bMeryton\b|\bJane Austen\b/, path: /pride-and-prejudice/ },
  remember: { title: /[‘'"“]Remember[’'"”,.]|\bRemember\b(?= by | \(Ross)/, people: /\bChristina Rossetti\b/, path: /(?:^|\/)remember(?:\/|\.ts|$)/ },
  'romeo-and-juliet': { title: /\bRomeo and Juliet\b|\bRomeo & Juliet\b/, people: /\bRomeo\b|\bJuliet\b|\bMercutio\b|\bTybalt\b|\bCapulets?\b|\bMontagues?\b|\bBenvolio\b|\bFriar Lau?rence\b/, path: /romeo/ },
  'silas-marner': { title: /\bSilas Marner\b/, people: /\bSilas\b|\bMarner\b|\bEppie\b|\bGodfrey\b|\bDunstan\b|\bRaveloe\b|\bLantern Yard\b|\bGeorge Eliot\b/, path: /silas-marner/ },
  'sonnet-116': { title: /\bSonnet 116\b/, people: /\bmarriage of true minds\b/, path: /sonnet-116/ },
  // No bare "Daisy": An Inspector Calls has a Daisy Renton.
  'the-great-gatsby': { title: /\bGreat Gatsby\b/, people: /\bGatsby\b|\bCarraway\b|\bBuchanans?\b|\bJordan Baker\b|\bMyrtle Wilson\b|\bWest Egg\b|\bEast Egg\b|\bF\.\s?Scott Fitzgerald\b/, path: /great-gatsby/ },
  'the-merchant-of-venice': { title: /\bMerchant of Venice\b/, people: /\bShylock\b|\bBassanio\b|\bNerissa\b|\bGratiano\b/, path: /merchant-of-venice/ },
  'the-scarlet-letter': { title: /\bScarlet Letter\b/, people: /\bHester\b|\bPrynne\b|\bDimmesdale\b|\bChillingworth\b|\bHawthorne\b/, path: /scarlet-letter/ },
  'the-sign-of-four': { title: /\bSign of (?:the )?Four\b/, people: /\bSherlock\b|\bHolmes\b|\bMorstan\b|\bSholto\b|\bJonathan Small\b|\bAthelney Jones\b/, path: /sign-of-(?:the-)?four/ },
  'the-tempest': { title: /\bThe Tempest\b/, people: /\bProspero\b|\bCaliban\b|\bAriel\b|\bMiranda\b|\bTrinculo\b|\bStephano\b/, path: /tempest/ },
  'the-tyger': { title: /\bTyger\b/, path: /tyger/ },
  'the-war-of-the-worlds': { title: /\bWar of the Worlds\b/, people: /\bMartians?\b|\bOgilvy\b|\bHorsell\b|\bH\.\s?G\.\s?Wells\b/, path: /war-of-the-worlds/ },
  'twelfth-night': { title: /\bTwelfth Night\b/, people: /\bMalvolio\b|\bOrsino\b|\bViola\b|\bOlivia\b|\bSir Toby\b|\bSir Andrew\b|\bFeste\b/, path: /twelfth-night/ },
}
for (const t of HELD) if (!NAMES[t.slug]) throw new Error(`no names for held text ${t.slug}: add it to NAMES`)
for (const t of HELD) NAMES[t.slug].slugRe = new RegExp(`(?<=['"\`/])${t.slug}(?=['"\`/#?])`)
/**
 * A text's names and title words, lower case. They are how a page says which
 * text it means, so they are not also evidence that a span is the text's
 * words: until 2 October 2026 "Macbeth and Banquo ARE generals", an EAL
 * grammar example, aligned to a stage direction and was reported as a
 * misquotation, and so was "the scarlet letter symbolises adultery".
 */
for (const t of HELD)
  t.names = new Set(
    // Capitalised words only (Sonnet 116 is named by a phrase of its own,
    // "marriage of true minds"), and only those the edition itself nearly
    // always capitalises: "Macbeth" and "Christmas" are names, but Animal
    // Farm's "animal" and The Scarlet Letter's "letter" are words of the text.
    ([NAMES[t.slug].title.source, NAMES[t.slug].people?.source ?? '', t.title].join(' ').replace(/\\[a-z]/gi, ' ').match(/[A-Z][a-z]{2,}/g) ?? [])
      .map((w) => w.toLowerCase())
      .filter((w) => !STOP.has(w))
      .filter((w) => {
        const c = t.caps.get(w)
        return !c || c[0] / c[1] >= 0.9
      }),
  )

/**
 * Works the site quotes that are not held: the registered set texts, the
 * anthology poems and some that pages compare with. Named so that a quotation
 * of one is left alone, not blamed on a held text beside it.
 */
const OTHER_TITLES = [
  'Ozymandias', 'The Prelude', 'Charge of the Light Brigade', 'Exposure', 'Storm on the Island', 'Bayonet Charge',
  'Remains', 'Poppies', 'War Photographer', 'Tissue', 'The Emigrée', 'The Emigree', 'Checking Out Me History',
  'Kamikaze', 'When We Two Parted', "Love's Philosophy", "Porphyria's Lover", 'Sonnet 29', 'Sonnet 43', 'Sonnet 18',
  'Sonnet 130', 'Neutral Tones', 'Letters from Yorkshire', "The Farmer's Bride", 'Walking Away', 'Eden Rock', 'Follower',
  'Mother, any distance', 'Before You Were Mine', 'Winter Swans', 'Singh Song', 'Climbing My Grandfather',
  'Dulce et Decorum Est', 'Anthem for Doomed Youth', 'Futility', 'Doctor Faustus', 'Dr Faustus', 'Paradise Lost',
  'Dracula', 'The Picture of Dorian Gray', 'Wuthering Heights', 'Richard III', 'Measure for Measure',
  "The Winter's Tale", 'As You Like It', 'Henry IV', 'Richard II', 'Coriolanus', 'Titus Andronicus',
  'The Duchess of Malfi', 'The Rime of the Ancient Mariner', 'Kubla Khan', 'I Wandered Lonely', 'Cousin Kate',
  'Goblin Market', 'London', 'The Chimney Sweeper', 'A Poison Tree', 'Holy Thursday', 'The Lamb', 'Ode to a Nightingale',
  'Ode on a Grecian Urn', 'To Autumn', 'Bright Star', 'Dover Beach', 'The Soldier', 'Invictus', 'Rebecca',
  'Mametz Wood', 'The Manhunt', 'Cozy Apologia', 'Valentine', 'One Flesh', 'i wanna be yours', 'Nettles',
  'Jerusalem', 'Genesis', 'the Bible', 'Book of Job', 'Nineteen Eighty-Four', 'The Destruction of Sennacherib',
  'She Walks in Beauty', 'The Hound of the Baskervilles', 'The Time Machine', 'Hard Times', 'Oliver Twist',
  'Of Mice and Men', 'The Hunger Games', 'Plutarch', 'Holinshed', 'Chronicles', 'Lives of the Noble Grecians',
  // Short stories and novels the language pages quote, by the same writers as held texts.
  'The Red Room', 'The Signal-Man', 'The Signalman', 'The Monkey’s Paw', "The Monkey's Paw", 'The Necklace', 'The Tell-Tale Heart',
  'Great Expectations', 'Bleak House', 'Jane Eyre', 'The Speckled Band', 'A Study in Scarlet', 'The Invisible Man', 'The Island of Doctor Moreau',
]
/**
 * Folders whose sub-folders (or files) hold one work each: below one of
 * these, the first name that is not a grouping (a board, a cluster, a paper)
 * is the work's slug. revision/poetry/power-and-conflict/kamikaze is Kamikaze.
 */
const WORK_FOLDERS = new Set(['poetry', 'poems', 'poem', 'texts', 'drama', 'prose', 'novels', 'novel', 'plays', 'play', 'revision-notes', 'anthology', 'study-guides', 'chapter-guides', 'model-essays', 'set-texts', 'english-literature', 'sample', 'shakespeare'])
const NOT_WORKS = new Set(['page', 'layout', 'index', 'content', 'data', 'poetry', 'drama', 'prose', 'texts', 'anthology', 'conflict', 'relationships', 'time-and-place', 'power-and-conflict', 'love-and-relationships', 'worlds-and-lives', 'belonging', 'unseen', 'components', 'english-literature', 'english-language', 'paper-1', 'paper-2', 'section-a', 'section-b', 'key-quotes', 'read', 'acts', 'characters', 'themes', 'context', 'analysis', 'quiz', 'essays', 'revision', 'resources', 'igcse', 'gcse', 'shakespeare', 'modern-texts', 'nineteenth-century', '19th-century-novel', 'modern-prose', 'modern-drama', 'pearson-igcse', 'literature', 'language', 'overview', 'guide', 'guides', 'notes', 'summary', 'extract', 'extracts', 'practice', 'questions', 'mock', 'mocks', 'lang', 'edexcel-lit', 'aqa-lit', 'poets', 'chapters', 'chapter', 'scenes', 'scene', 'model-answers', 'plans', 'lesson', 'lessons', 'edexcel', 'aqa', 'ocr', 'caie', 'wjec', 'eduqas', 'cambridge'])

function otherWorks() {
  const out = []
  const { SET_TEXTS } = jiti(join(ROOT, 'src/lib/board/set-texts.ts'))
  const titles = new Set(OTHER_TITLES)
  for (const s of SET_TEXTS) if (!HELD_BY_SLUG.has(s.slug)) titles.add(s.title.replace(/^'|'$/g, '').replace(/[-–—]$/, ''))
  for (const title of titles) {
    const esc = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "['’]")
    // A one-word title that is also an ordinary word counts only in quotation marks.
    const common = !/\s/.test(title) && /^[A-Z][a-z]+$/.test(title)
    out.push({ slug: `other:${title}`, title: common ? new RegExp(`[‘'"“]${esc}[’'"”]`) : new RegExp(`\\b${esc}\\b`) })
  }
  for (const s of SET_TEXTS)
    if (!HELD_BY_SLUG.has(s.slug) && s.slug.length > 3)
      out.push({ slug: `other:${s.title}`, path: new RegExp(`(?:^|[/-])${s.slug}(?:[/.-]|$)`) })
  return out
}
const WORKS = [...HELD.map((t) => ({ slug: t.slug, held: true, ...NAMES[t.slug] })), ...otherWorks().map((w) => ({ ...w, held: false }))]
const isHeld = (slug) => HELD_BY_SLUG.has(slug)

/**
 * The text every match of a pattern contains: for each of its top-level
 * alternatives, the longest run of characters it always matches, one after
 * another ("Scrooge", "Cratchit" of "Cratchits?", "Sign of " of "Sign of
 * (?:the )?Four"). null when an alternative has no such run of two characters
 * or more. A string that holds none of them cannot match the pattern.
 *
 * Read conservatively, so that a run is only ever shorter than it might be,
 * never wrong: what is inside a group, a class or a lookaround is passed over;
 * a character a quantifier makes optional or repeats ends the run; an escape
 * that is not a plain character (\s, \d, \u2019) ends it and takes with it any
 * hex digits or braces after it. Only \b and \B, which match no character,
 * leave a run unbroken.
 */
function mustContain(source) {
  const alts = [[]]
  let run = ''
  const end = () => {
    if (run) alts[alts.length - 1].push(run)
    run = ''
  }
  const skipClass = (i) => {
    for (i++; i < source.length && source[i] !== ']'; i++) if (source[i] === '\\') i++
    return i
  }
  const skipGroup = (i) => {
    for (let depth = 0; i < source.length; i++) {
      if (source[i] === '\\') i++
      else if (source[i] === '[') i = skipClass(i)
      else if (source[i] === '(') depth++
      else if (source[i] === ')' && --depth === 0) return i
    }
    return i
  }
  // The length of a quantifier starting at i (with a lazy "?" after it), or 0.
  const quantifier = (i) => {
    const m = /^(?:[?*+]|\{\d+(?:,\d*)?\})\??/.exec(source.slice(i, i + 12))
    return m ? m[0].length : 0
  }
  for (let i = 0; i < source.length; i++) {
    const c = source[i]
    let atom = c
    let last = i
    if (c === '|') {
      end()
      alts.push([])
      continue
    }
    if (c === '(' || c === '[') {
      end()
      i = c === '(' ? skipGroup(i) : skipClass(i)
      i += quantifier(i + 1)
      continue
    }
    if (c === '\\') {
      const e = source[i + 1] ?? ''
      if (e === 'b' || e === 'B') {
        i++
        continue
      }
      if (/[A-Za-z0-9]/.test(e)) {
        end()
        i++
        while (i + 1 < source.length && /[0-9A-Fa-f{}]/.test(source[i + 1])) i++
        i += quantifier(i + 1)
        continue
      }
      atom = e
      last = i + 1
    } else if ('.^$?*+{})]'.includes(c)) {
      end()
      i += quantifier(i + 1)
      continue
    }
    const q = quantifier(last + 1)
    if (!q) {
      run += atom
      i = last
      continue
    }
    // Repeated ("+"): the character is there, but what follows may be more of it.
    if (source[last + 1] === '+') run += atom
    end()
    i = last + q
  }
  end()
  const best = alts.map((runs) => runs.reduce((a, r) => (r.length > a.length ? r : a), ''))
  return best.every((r) => r.length >= 2) ? [...new Set(best)] : null
}

/**
 * Each way of naming a work, compiled once to search a whole string: [pattern,
 * slug, strong, the text a match must contain], in the order mentionsIn has
 * always read them (each work's title, slug, then people), so that mentions at
 * one offset keep that order.
 */
const PATTERNS = WORKS.flatMap((w) =>
  [
    [w.title, true],
    [w.slugRe, true],
    [w.people, false],
  ]
    .filter(([re]) => re)
    .map(([re, strong]) => [new RegExp(re.source, 'g'), w.slug, strong, mustContain(re.source)]),
)
/**
 * The runs PATTERNS need, by their first two characters: [run, the patterns
 * that need it]. Two characters are one number, a key cheap to look up at
 * every offset of a string.
 */
const NEEDED = new Map()
PATTERNS.forEach(([, , , runs], k) => {
  for (const run of runs ?? []) {
    const key = run.charCodeAt(0) * 65536 + run.charCodeAt(1)
    const bucket = NEEDED.get(key) ?? []
    const entry = bucket.find((e) => e[0] === run)
    if (entry) entry[1].push(k)
    else bucket.push([run, [k]])
    NEEDED.set(key, bucket)
  }
})
/** mentionsIn's answers for the strings it has read: an object's fields are read again for every quotation inside it. */
const MENTIONS = new Map()

/**
 * Every mention of a work in a string: [offset, slug, strong], in order. The
 * array returned is shared: read it, never change it. With `remember` false
 * the answer is not kept, for a string read only once.
 *
 * Until 2 October 2026 this compiled each work's 267 patterns afresh on every
 * call, ran every one over every string, and read the same strings again and
 * again (176,796 calls for 42,826 strings): most of the 100 seconds a full
 * audit took. The guard (every-quotation-is-the-held-text.test.ts) runs the
 * audit on every push, so now the patterns are compiled once, each string is
 * read once, and a pattern runs only over a string that holds the text every
 * match of it contains (mustContain). The mentions found are the same.
 */
function mentionsIn(src, remember = true) {
  const known = MENTIONS.get(src)
  if (known) return known
  const possible = PATTERNS.map(([, , , runs]) => !runs)
  for (let i = 0; i + 1 < src.length; i++) {
    const bucket = NEEDED.get(src.charCodeAt(i) * 65536 + src.charCodeAt(i + 1))
    if (bucket === undefined) continue
    for (const [run, ks] of bucket) if (src.startsWith(run, i)) for (const k of ks) possible[k] = true
  }
  const out = []
  PATTERNS.forEach(([re, slug, strong], k) => {
    if (!possible[k]) return
    re.lastIndex = 0
    for (let m = re.exec(src); m; m = re.exec(src)) {
      out.push([m.index, slug, strong])
      // As matchAll does: a match of nothing moves on one character.
      if (!m[0]) re.lastIndex++
    }
  })
  out.sort((a, b) => a[0] - b[0])
  if (!remember) return out
  if (MENTIONS.size >= 50000) MENTIONS.clear()
  MENTIONS.set(src, out)
  return out
}

/** The work a file's path names: a held text's folder, a set text's, or any folder holding one work. */
function worksInPath(file) {
  const p = file.toLowerCase()
  const held = WORKS.filter((w) => w.held && w.path?.test(p)).map((w) => w.slug)
  if (held.length) return held
  const other = WORKS.filter((w) => !w.held && w.path?.test(p)).map((w) => w.slug)
  if (other.length) return other.slice(0, 1)
  const segs = p.split('/')
  const at = segs.findIndex((x) => WORK_FOLDERS.has(x))
  if (at < 0 || /^content\/(?:blog|printables|lesson-plans)\//.test(p)) return []
  for (const seg of segs.slice(at + 1)) {
    const name = seg.replace(/\.(?:tsx?|mdx?)$/, '')
    if (name.length < 4 || NOT_WORKS.has(name) || /^(?:y\d|year|ks\d|unit|paper|set\d|\[)/.test(name)) continue
    return [`other:${name}`]
  }
  return []
}

// ── Declared: what a context quotes from somewhere else ─────────────────────

/**
 * Phrases in quotation marks, in a held text's context, that are known not to
 * be that text. Keyed by the words of the quotation; each says where it comes
 * from. Add to it only with the source named. The Frankenstein test's own
 * list (NOT_THE_NOVEL) and every study guide's quotesFromElsewhere are read
 * as well, so each declaration is made once.
 */
const DECLARED = {}

function declarations() {
  const out = new Map(HELD.map((t) => [t.slug, new Set()]))
  const add = (slug, s) => out.get(slug)?.add(tokenise(s).join(' '))
  for (const k of Object.keys(DECLARED)) for (const t of HELD) add(t.slug, k)
  const dir = join(ROOT, 'src/data/study-guides')
  for (const f of readdirSync(dir)) {
    const slug = f.replace(/\.ts$/, '')
    if (!isHeld(slug)) continue
    const src = readFileSync(join(dir, f), 'utf8')
    if (!/quotesFromElsewhere/.test(src)) continue
    const sf = ts.createSourceFile(f, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
    const visit = (n) => {
      if (ts.isPropertyAssignment(n) && n.name.getText() === 'quotesFromElsewhere' && ts.isArrayLiteralExpression(n.initializer))
        for (const e of n.initializer.elements) if (literalText(e) !== null) add(slug, literalText(e))
      ts.forEachChild(n, visit)
    }
    visit(sf)
  }
  const test = join(ROOT, 'src/__tests__/frankenstein-pages-quote-the-held-text.test.ts')
  if (existsSync(test)) {
    const sf = ts.createSourceFile('t.ts', readFileSync(test, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
    const visit = (n) => {
      if (ts.isVariableDeclaration(n) && n.name.getText() === 'NOT_THE_NOVEL' && n.initializer && ts.isObjectLiteralExpression(n.initializer))
        for (const p of n.initializer.properties) if (ts.isPropertyAssignment(p)) add('frankenstein', p.name.getText().replace(/^['"]|['"]$/g, ''))
      ts.forEachChild(n, visit)
    }
    visit(sf)
  }
  return out
}

// ── Skipped and excepted ────────────────────────────────────────────────────

/**
 * Held texts the audit passes over by decision, each with when and why. None
 * is checked, and nothing is recorded that could print more than a word or
 * two of one: no record of a quotation the context gives it alone, or of one
 * that runs its words together and is not another held text's word for word
 * (echoesSkipped); not its name in a report; and under --trace, a quotation
 * passed over that would print its words is recorded without them. The guard
 * (every-quotation-is-the-held-text.test.ts) does not check it, and
 * `node scripts/check-quotations.mjs` does not print it. To check one again,
 * delete its entry.
 */
export const SKIPPED = {
  'do-not-go-gentle-into-that-good-night':
    "Skipped by the founder's decision on 2 October 2026: agents working on it are stopped by the content filter. Its one known misquotation, two passages joined without an ellipsis in src/data/edexcel-igcse-lit-poetry-courses-2.ts, is left for a person to put right.",
}
for (const slug of Object.keys(SKIPPED)) if (!HELD_BY_SLUG.has(slug)) throw new Error(`SKIPPED names ${slug}, which is not a held text`)
const SKIPPED_TEXTS = HELD.filter((t) => Object.hasOwn(SKIPPED, t.slug))
const isSkipped = (slug) => Object.hasOwn(SKIPPED, slug)

/**
 * Does a string run words of a skipped text together: three of them, two of
 * which carry meaning, or four with one? A record of it could then print the
 * text, so none is made. Generous on purpose: a quotation that shares such a
 * run and is not word for word the held text its context names goes
 * unchecked, even if it is a misquotation of that text, rather than risk
 * printing the skipped one. One or two words are not a run.
 */
function echoesSkipped(s) {
  for (const t of SKIPPED_TEXTS) {
    const ws = tokenise(cleanQuote(s, t))
    for (let i = 0; i + 3 <= ws.length; i++) {
      const three = ws.slice(i, i + 3)
      if (contentWords(three) >= 2 && occurrences(t, three).length) return true
      const four = ws.slice(i, i + 4)
      if (four.length === 4 && contentWords(four) >= 1 && occurrences(t, four).length) return true
    }
  }
  return false
}

/**
 * Quotations the audit finds wrong that are not misquotations, each with the
 * held text it was taken for, the file, its first words and whose words they
 * are. The audit reports each as `excepted`, not `wrong`, and lists any entry
 * that no longer matches a quotation, which the guard fails on, so that the
 * list cannot outlive what it excuses. Add to it only what is not the held
 * text's words at all, and say whose they are: a misquotation is put right on
 * the page, never listed here.
 *
 * These six were what remained on 2 October 2026, once the misquotations of
 * every held text had been put right: the checker reads each as the text's
 * words because the context names the text, and none of them is.
 */
export const EXCEPTIONS = [
  {
    text: 'a-christmas-carol',
    file: 'src/app/demo/teacher/lessons/page.tsx',
    starts: 'The door opened',
    why: "the model answer's own example of a one-sentence paragraph, which the question asks the student to write; not Dickens's words",
  },
  {
    text: 'a-christmas-carol',
    file: 'src/app/revision/quiz/quiz-questions-text-extra.ts',
    starts: 'A jolly, generous old fellow',
    why: "a wrong option in a quiz on how Scrooge is described, there to be rejected; the right option (correctIndex 1) is Dickens's",
  },
  {
    text: 'animal-farm',
    file: 'src/app/revision/texts/animal-farm/context/page.tsx',
    starts: 'Every line of serious work',
    why: "Orwell's essay \"Why I Write\" (1946), which the sentence names; not the novel",
  },
  {
    text: 'animal-farm',
    file: 'src/data/lesson-plans/animal-farm-lessons.ts',
    starts: 'Napoleon secretly trained the dogs',
    why: "one of the statement cards the lesson's ranking activity asks groups to sort, in the lesson's words; not Orwell's",
  },
  {
    text: 'macbeth',
    file: 'src/data/edexcel-lit-courses.ts',
    starts: 'stave',
    why: "the word for a chapter of A Christmas Carol, which the question is about, in a wrong option; not Macbeth's \"staves\"",
  },
  {
    text: 'macbeth',
    file: 'src/data/lesson-plans/edexcel-lessons.ts',
    starts: 'stave',
    why: "the word for a chapter of A Christmas Carol, which the model answer is about; not Macbeth's \"staves\"",
  },
]

// ── Reading a file ──────────────────────────────────────────────────────────

/** A .mdx file as TypeScript the scanner can read: each paragraph one template string, lines kept. */
function mdxAsSource(text) {
  const esc = text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
  return 'const body = [`' + esc.replace(/\n[ \t]*\n/g, (m) => '`,' + m + '`') + '`]\n'
}

// `example` so that a language device's is read whole; checkFile passes over
// every other `example`'s whole value (see deviceExample there).
const QUOTE_FIELDS = new Set([...SCANNER.QUOTE_FIELDS, 'phrase', 'keyQuotation', 'example'])
/** Fields that hold a quotation and nothing else. `text`, `line`, `lines` and `original` only on a quotation card. */
const ALWAYS_QUOTE = new Set(['quote', 'quotation', 'keyQuote', 'keyQuotes', 'quotes', 'keyQuotation', 'fragment', 'phrase'])
const CARD_SIBLINGS = /^(analysis|speaker|technique|effect|meaning|lineRef|significance|interpretation)$/
const PLACE_FIELDS = /^(where|act|actScene|scene|chapter|stave|lineRef|location|reference|ref|part|sceneRef|chapterRef)$/
const SPEAKER_FIELDS = /^(speaker|who|said|saidBy|by)$/
const SOURCE_FIELDS = /^(source|author|critic|critics|scholar|attribution|citation|cite|critical|criticism)$/i

const VERBS =
  '(?:says?|said|tells?|told|cries|cried|declares?|declared|exclaims?|exclaimed|asks?|asked|admits?|replies|replied|shouts?|whispers?|announces?|insists?|warns?|orders?|commands?|begs?|pleads?|boasts?|laments?|confesses|vows?|swears?|screams?|mutters?|responds?|answers?|proclaims?|urges?|taunts?)'
/** "Scrooge says," "Lady Macbeth tells him": a character, then a speech verb, just before a quotation. */
const SPEECH = new Map(
  Object.entries(NAMES).map(([slug, n]) => [
    slug,
    new RegExp(`(?:${[n.title.source, n.people?.source].filter(Boolean).join('|')})(?:['’]s? \\w+)?(?:\\s+\\w+){0,2}\\s+${VERBS}(?:\\s+\\w+)?\\s*[,:]?\\s*(?:that\\s+)?$`),
  ]),
)
/** Words that present one or two words as the text's own: "the word", "describes her as". */
const WORD_CUE =
  /(?:\bthe (?:word|words|verb|noun|adjective|adverb|phrase|term)s?\b[^.;]{0,20}|\b(?:describes?|described|calls?|called|names?|named|labels?|labelled)\b(?: \w+){0,3}(?: as)?)\s*$/i
const EXAM_QUESTION =
  /^(?:how|why|what|to what extent|explain|explore|discuss|compare|write|starting with|analyse|analyze|in what ways|describe|consider|evaluate)\b(?=.*\b(?:Shakespeare|Dickens|Stevenson|Shelley|Orwell|Doyle|Eliot|Wells|Hawthorne|Keats|Browning|Blake|Owen|Kipling|Lawrence|Rossetti|writer|author|poet|presents?|presented|extract|characters?|themes?|readers?|audience|novel|novella|play|poem|essay|language|structure|impressions?|effects?|techniques?|methods?|feelings?|attitudes?|ideas?|views?)\b)/i
/** A sentence frame for students ("This suggests... because..."), not a quotation. */
const TEMPLATE =
  /^(?:\.\.\.|…)?\s*(?:I think|I believe|In my opinion|This (?:shows|suggests|creates|implies|highlights|reveals|demonstrates|could|may|might)|The (?:writer|author|poet|narrator)['’]?s?|(?:Shakespeare|Dickens|Stevenson|Shelley|Orwell|Priestley|Doyle|Eliot|Wells|Owen|Keats|Browning|Blake|Kipling|Hawthorne)\s+(?:uses|presents|shows|suggests|creates|explores|portrays|conveys))\b/i
/** The words of commentary about a text, which the text itself does not use of itself. */
const ANALYSIS_WORDS =
  /\b(?:Shakespeare|Dickens|Stevenson|Shelley|Orwell|Doyle|Eliot|Wells|Hawthorne|Keats|Browning|Blake|Owen|Kipling|Lawrence|Rossetti|narrative|narrator|duality|reader|readers|audience|theme|themes|symbol\w*|represents?|suggests?|presents?|portray\w*|context|Victorian|Jacobean|Elizabethan|society|message|character|characters|metaphor|imagery|juxtapos\w*|motif|foreshadow\w*|dramatic|protagonist|antagonist|divine right)\b/i
/** A placeholder in a frame: "[technique]", "X", "Y". */
const PLACEHOLDER = /\[(?:[a-z]+(?: [a-z]+){0,3})\]|\b[XYZ]\b/
/** Fields that record where a text came from, not what it says. */
const PROVENANCE = /^(sources|source|provenance|rights|acknowledgement|edition|editions|basis|workLength|quotesFromElsewhere)$/
/**
 * Talk of the early printings just before a quotation: it is their reading,
 * not the held edition's (Henry V's "a Table of green fields", the Folio's,
 * which editors emend to "babbled").
 */
const EDITION_TALK = /\b(?:Folio|Quartos?|Q[12]|emend\w*)\b/
/** A reading set against another: “a great a pang” for “as great a pang”. */
const VARIANT = /^\s*["”’']?\s*[,;)]?\s*(?:for|instead of|rather than|in place of|where \w+ (?:has|prints|reads))\s+["“‘']/i

/** Words naming misquotation: a quotation near them is the example of one. */
const MISQUOTE_WORDS = /\bmisquot|\bmisremember|\bdegrad/i
/**
 * Phrases that put a wrong example just before a quotation. Not "wrong",
 * "weak" or "error" alone: "prove him wrong" in a note on Sonnet 116 and
 * Dogberry "using the wrong word" are about something else, and a weak model
 * answer that misquotes ("So fair and foul a day") still teaches the
 * misquotation.
 */
const WRONG_BEFORE = /\b(?:instead of|incorrect\w*|wrongly|not credit\w*|common (?:mistake|error)s?|(?:spelling|typical) errors?|don['’]t write|never write)\b/gi
/** Words that then offer the better version, which is the page's own quotation again. */
const BETTER = /\b(?:write|better|try|use|correct(?:ed|ion)?|improved|strong(?:er)?|right)\b\s*[:"'“‘]/i

/**
 * Is the quotation an example of a misquotation, or of a weak answer? Words
 * naming misquotation anywhere near say so; ordinary words ("instead of",
 * "error", "weak") only when they come just before it, with no "Write:" or
 * "Better:" after them. Until 2 October 2026 any of them within 250
 * characters excused a quotation, and a grade-5 page's recommended sentence,
 * after "Instead of ... Write:", quoted "the dagger of the mind" (Shakespeare:
 * "A dagger of the mind") unchecked.
 */
function misquoteTalk(code, q) {
  if (MISQUOTE_WORDS.test(readable(code.slice(Math.max(0, q.srcStart - 250), q.srcStart) + ' ' + code.slice(q.srcEnd, q.srcEnd + 250)))) return true
  const before = readable(code.slice(Math.max(0, q.srcStart - 120), q.srcStart))
  let last = -1
  for (const m of before.matchAll(WRONG_BEFORE)) last = m.index + m[0].length
  return last >= 0 && !BETTER.test(before.slice(last))
}
const SPEECH_TAG = /^(?:said|says|cried|replied|asked|returned|answered|exclaimed|observed|continued|rejoined|added|pursued|whispered|muttered|repeated|demanded|inquired|resumed|thought|interposed|retorted|urged)$/
const OTHER_SCRIPT = /[\u0590-\u06FF\u0400-\u04FF\u4E00-\u9FFF]/

/** Source text near a span, read as a reader would: tags, braces and entities gone. */
function readable(s) {
  return s
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{\s*['"`]\s*['"`]\s*\}/g, ' ')
    .replace(/\{['"`]([^'"`]*)['"`]\}/g, '$1')
    .replace(/&[lr]squo;|&apos;|&#39;|\\u2019|\\u2018/g, "'")
    .replace(/&[lr]dquo;|&quot;|\\u201[cCdD]/g, '"')
    .replace(/&mdash;|\\u2014/g, '—')
    .replace(/&nbsp;|&amp;/g, ' ')
    .replace(/\s+/g, ' ')
}

/** The chain of nodes containing `pos`, innermost first. */
function chainAt(sf, pos) {
  const chain = []
  let n = sf
  for (;;) {
    chain.push(n)
    let next = null
    ts.forEachChild(n, (c) => {
      if (!next && c.getStart() <= pos && pos < c.getEnd()) next = c
    })
    if (!next) break
    n = next
  }
  return chain.reverse()
}

const literalText = (n) =>
  ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n) ? n.text : ts.isTemplateExpression(n) ? n.getText().slice(1, -1) : null

/** An object's own string fields, by name; `arrays` names those that were lists. */
function ownFields(obj) {
  const fields = {}
  const arrays = new Set()
  for (const p of obj.properties) {
    // A JSX card's attributes are its fields too: <QuoteCard quote="..." speaker="Small" />.
    if (ts.isJsxAttribute(p) && p.initializer) {
      const v = ts.isJsxExpression(p.initializer) ? p.initializer.expression : p.initializer
      const s = v ? literalText(v) : null
      if (s !== null) fields[p.name.getText()] = s
      continue
    }
    if (!ts.isPropertyAssignment(p)) continue
    const name = p.name.getText().replace(/['"]/g, '')
    let v = p.initializer
    while (ts.isParenthesizedExpression(v) || ts.isAsExpression(v)) v = v.expression
    if (ts.isCallExpression(v) && v.arguments.length === 1) v = v.arguments[0]
    const s = literalText(v)
    if (s !== null) fields[name] = s
    else if (ts.isArrayLiteralExpression(v) && v.elements.every((e) => literalText(e) !== null)) {
      fields[name] = v.elements.map(literalText).join(' \u0000 ')
      arrays.add(name)
    }
  }
  return { fields, arrays }
}

/** A quotation's text with what is not its words taken out: tags, a play's speaker names. */
function cleanQuote(text, t) {
  let s = text
    .replace(/<br\s*\/?>/gi, ' / ')
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/gi, ' ')
    // A label after the words: "(Seventh of the Seven Commandments)", "(Act 1, Scene 5)".
    .replace(/\s*\([^()]*\)\s*$/, '')
    // An attribution after a dash: "... - Macbeth, Act 5".
    .replace(/\s+[—–-]{1,2}\s+[A-Z][\w .’',]*(?:Act|Scene|Chapter|Stave|\d)[\w .,]*$/, '')
  // Scansion, the stressed syllables in capitals ("TY-ger TY-ger BURN-ing
  // BRIGHT"): its hyphens divide syllables, they are not the edition's spelling.
  if ((s.match(/\p{Lu}{2,}-\p{Ll}|\p{Ll}-\p{Lu}{2,}/gu) ?? []).length >= 2) s = s.replace(/(\p{L})-(?=\p{L})/gu, '$1')
  if (t?.type === 'play') {
    // "MERCUTIO: I am hurt" and "MERCUTIO / I am hurt": the name is a label.
    s = s.replace(/(^|\/\s*|\n\s*)([A-Z][A-Z .'’]*[A-Z]|[A-Z][a-z]+(?: [A-Z][a-z]+)?)\s*(?::|\/(?=\s))\s*/g, (m, pre, name) =>
      t.speakers.includes(name.toLowerCase().replace(/\.$/, '')) ? pre : m,
    )
  }
  return s
}

/**
 * What may stand for words left out of a quotation: an ellipsis ("...", "…"),
 * an editorial bracket ("[...]", "[the king]"), or the blank of a cloze
 * exercise ("Look like th'innocent _______").
 */
const ELLIPSIS = /\s*(?:\.\s?\.\s?\.|…|\[[^\]]*\]|_{3,})\s*/

/** The parts of a quotation between its ellipses, each a list of words carrying their separators. */
const splitParts = (s) =>
  s
    .split(ELLIPSIS)
    .map((piece) => {
      const ws = wordsOf(piece)
      const p = ws.map((x) => x.w)
      p.seps = ws.map((x) => x.sep)
      return p
    })
    .filter((p) => p.length)

// ── The scan ────────────────────────────────────────────────────────────────

function filesToScan() {
  const skip = (f) =>
    /^src\/data\/(full-texts|comics|temp)\//.test(f) ||
    /^src\/data\/mock-exams/.test(f) ||
    /^src\/lib\/(comics|i18n\/generated)\//.test(f) ||
    /(^|\/)__tests__\//.test(f) ||
    /\.(test|spec)\.tsx?$/.test(f) ||
    /\.d\.ts$/.test(f)
  // The site, and the mobile app's screens and data, which students read too
  // (its daily quotations, flashcards and quizzes quote the set texts).
  const code = ['src/app', 'src/data', 'src/lib', 'src/components', 'mobile/app', 'mobile/components', 'mobile/data']
    .filter((d) => existsSync(join(ROOT, d)))
    .flatMap((d) => SCANNER.sourcesUnder(join(ROOT, d)))
    .filter((f) => !skip(f))
  const more = []
  const walk = (d, re) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name)
      if (e.isDirectory()) walk(p, re)
      else if (re.test(e.name)) more.push(posix(p))
    }
  }
  walk(join(ROOT, 'content'), /\.mdx$/)
  if (existsSync(join(ROOT, 'mobile/data'))) walk(join(ROOT, 'mobile/data'), /\.json$/)
  return [...code.sort(), ...more.sort()]
}

/** Which pages print each dictionary key, for a dictionary string's context. */
function keyUsers(files, sources) {
  const users = new Map()
  for (const f of files) {
    if (/^src\/lib\/i18n\//.test(f)) continue
    for (const { key } of SCANNER.keyMentions(sources.get(f))) {
      if (!users.has(key)) users.set(key, new Set())
      users.get(key).add(f)
    }
  }
  return users
}

/** How large an enclosing element or object may be and still name a quotation's text, in characters of source: by a name, and by a title. */
const ENCLOSING_WEAK = 1500
const ENCLOSING_STRONG = 8000

/**
 * For the exclusion audit (--trace): how close a quotation passed over as not
 * near came to the text it was attributed to: "kept/words" of its longest
 * alignment, so that the closest near-misses can be read by hand.
 */
function closest(held, words, env) {
  if (!held.length || words.length < 4 || !env.trace) return undefined
  const t = HELD_BY_SLUG.get(held[0])
  const al = align(t.type === 'play' ? t.spoken : t.full, words, t.names)
  return al ? `${al.exact + al.spelt}/${words.length}` : undefined
}

/**
 * Pages that say they print another printing of a held text. A quotation on
 * one that differs from the held edition is reported apart, as `printing`,
 * and not counted as wrong: that printing is not held, so it cannot be
 * checked here. Add to it only where the page itself says which printing it
 * prints, and say where it says so.
 */
const OTHER_PRINTINGS = [
  {
    // The page's version note: "The Edexcel IGCSE anthology prints the earlier
    // text of the poem, the one Keats wrote out in a letter in April 1819 ...
    // (the version printed here)". The held text is Colvin's (Gutenberg
    // #36356), which differs from it in several lines ("gazed" for "wept",
    // "Who cried" for "They cried", "hill side" for "hill's side").
    text: 'la-belle-dame-sans-merci',
    files: /^src\/app\/igcse\/edexcel\/poetry\/la-belle-dame-sans-merci\//,
    printing: "the anthology's letter text, not the held Colvin text",
  },
  {
    // The Edexcel IGCSE poetry course's version note: "The Edexcel IGCSE
    // anthology prints Keats's original 1819 version ... Always quote from the
    // anthology version". Not the reader's notes in text-annotations, which
    // sit beside the held Colvin text and so must quote it.
    text: 'la-belle-dame-sans-merci',
    files: /^src\/data\/edexcel-igcse-lit-poetry-courses-2\.ts$/,
    printing: "the anthology's letter text, as its version note says, not the held Colvin text",
  },
  {
    // The page's footer: "The poem is printed as it appears in the WJEC Eduqas GCSE
    // (9-1) English Literature Poetry Anthology (C720)", and its note above the poem on
    // the 1920 edition. Eduqas prints the words of Owen's Poems (1920): "pleasure",
    // "bloodsmear", "To-night", no "all their guilt, / And Austria's". The held text is
    // Pearson's IGCSE printing (src/data/full-texts/disabled.ts), which has them.
    text: 'disabled',
    files: /^src\/app\/revision\/poetry\/eduqas\/disabled\//,
    printing: "the Eduqas anthology's text, in the words of Owen's Poems (1920), not the held Pearson text",
  },
]

/**
 * Does a quotation field quote a longer string of an object around it: an
 * annotation quoting the essay paragraph it annotates, a feedback note
 * quoting the answer it marks?
 */
function quotesOwnText(chain, field, words) {
  if (words.length < 3) return false
  // Only a note, or a `quote` in a list of annotations, quoting an essay,
  // answer or paragraph beside it. Not any field quoting any other: the
  // bilingual revision notes repeat each English quotation inside the Arabic
  // string beside it, and the first version of this excused 77 misquotations
  // that way.
  const lit = chain.find((n) => literalText(n) !== null)
  const owner = lit?.parent && ts.isPropertyAssignment(lit.parent) ? lit.parent.parent : null
  const list = owner?.parent && ts.isArrayLiteralExpression(owner.parent) && ts.isPropertyAssignment(owner.parent.parent) ? owner.parent.parent.name.getText() : ''
  if (!NOTE_FIELDS.test(field ?? '') && !/^(annotations|comments|notes|feedback)$/.test(list)) return false
  const needle = ` ${words.join(' ')} `
  for (const n of chain) {
    if (!ts.isObjectLiteralExpression(n)) continue
    for (const p of n.properties) {
      if (!ts.isPropertyAssignment(p)) continue
      const name = p.name.getText().replace(/['"]/g, '')
      if (name === field || !ESSAY_FIELDS.test(name)) continue
      const s = literalText(p.initializer)
      if (s === null) continue
      const hay = tokenise(s)
      if (hay.length > words.length + 2 && ` ${hay.join(' ')} `.includes(needle)) return true
    }
  }
  return false
}
/** Fields that comment on a piece of writing beside them. */
const NOTE_FIELDS = /^(annotation|comment|note|feedback|examinerComment|examinerNote|commentary|marginNote)$/
/** Fields that hold a piece of writing a note may quote: an essay paragraph, an answer, a response. */
const ESSAY_FIELDS = /^(content|text|paragraph|response|answer|essay|studentAnswer|modelAnswer|body|sample)$/

/**
 * Is the string a quotation sits in an entry, without quotation marks of its
 * own, of a list whose other entries begin with them? The entry itself is
 * read, not the quotation: a marked entry's quotation is the span inside its
 * marks, and until this read the entry the first version excused every one.
 */
function unmarkedAmongMarked(chain) {
  const lit = chain.find((n) => literalText(n) !== null)
  if (!lit || !ts.isArrayLiteralExpression(lit.parent)) return false
  const marked = (s) => /^\s*["'“‘]/.test(s)
  if (marked(literalText(lit))) return false
  const items = lit.parent.elements.map(literalText)
  return !items.some((s) => s === null) && lit.parent.elements.some((e, k) => e !== lit && marked(items[k]))
}

/** A speech verb just before a quotation, given to one of these texts' people. */
function speechBy(code, at, slugs) {
  const b = readable(code.slice(Math.max(0, at - 140), at)).replace(/["“”'‘’]\s*$/, '').trimEnd()
  return slugs.some((s) => SPEECH.get(s)?.test(b))
}

/** An object keyed by a held text's slug written as a bare name ({ macbeth: ... }), a comment allowed before the colon. */
const SLUG_KEY = new RegExp(
  `\\b(?:${HELD.map((t) => t.slug)
    .filter((s) => /^[A-Za-z_$][\w$]*$/.test(s))
    .join('|')})\\b(?:\\s|/\\*[\\s\\S]*?\\*/|//[^\\n]*\\n)*:`,
)

/**
 * Source as its strings read once their escapes are: "Night\u2019s Dream" as
 * "Night’s Dream", "\nMacbeth" with a line break before the name. Applied to
 * the whole file at once, so that every string literal's text is in it.
 */
const cooked = (code) =>
  code
    .replace(/\r\n?/g, '\n')
    .replace(/\\(?:u\{([0-9a-fA-F]{1,6})\}|u([0-9a-fA-F]{4})|x([0-9a-fA-F]{2})|([0-3][0-7]{0,2}|[4-7][0-7]?)|(\n|\u2028|\u2029)|([^]))/g, (m, cp, u, x, oct, nl, c) => {
      if (cp !== undefined) return parseInt(cp, 16) <= 0x10ffff ? String.fromCodePoint(parseInt(cp, 16)) : m
      if (u !== undefined) return String.fromCharCode(parseInt(u, 16))
      if (x !== undefined) return String.fromCharCode(parseInt(x, 16))
      if (oct !== undefined) return String.fromCharCode(parseInt(oct, 8))
      if (nl !== undefined) return ''
      return { n: '\n', t: '\t', r: '\r', b: '\b', f: '\f', v: '\v' }[c] ?? c
    })

/**
 * Does the file give no quotation to any work, so that it can have no record?
 * A quotation is given to a work only by a name or title in the source around
 * it (mentionsIn), in the strings of an object around it once their escapes
 * are read (cooked: the source's "\nMacbeth" has no word boundary before the
 * name, its text does), by an object keyed by a held text's slug, by the
 * file's path, or by a dictionary shard's keys. A file with none of these
 * gives every quotation to nothing. Until 2 October 2026 each of the 2,500
 * such files was parsed, twice, to find that out.
 */
function namesNoWork(file, code) {
  return (
    !/^src\/lib\/i18n\/dictionary/.test(file) &&
    !worksInPath(file).length &&
    !mentionsIn(code).length &&
    !SLUG_KEY.test(code) &&
    !mentionsIn(cooked(code), false).length
  )
}

/**
 * Check one file. `src` may be a planted copy (the self-test). Returns a
 * record for each quotation that belongs to a held text.
 */
function checkFile(file, src, env) {
  const isMdx = /\.mdx$/.test(file)
  // A JSON file (the mobile app's flashcards) is read as a module exporting it, its lines kept.
  const code = isMdx ? mdxAsSource(src) : /\.json$/.test(file) ? `export default ${src}` : src
  // Not under --trace, which records every quotation passed over, and why.
  if (!env.trace && namesNoWork(file, code)) return []
  const tsFile = file.replace(/\.(mdx|json)$/, '.ts')
  const quotes = SCANNER.scanSource(tsFile, code, QUOTE_FIELDS)
  if (!quotes.length) return []
  const kind = tsFile.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  const sf = ts.createSourceFile(tsFile, code, ts.ScriptTarget.Latest, true, kind)
  const mentions = mentionsIn(code)
  // The quotations each mention sits inside, so that a name inside one
  // quotation does not say whose words its neighbour is. "Wherefore art thou
  // Romeo?" named Romeo, and until 2 October 2026 that made the next item in
  // the list, "Get thee to a nunnery!", a line of Romeo and Juliet's.
  const inside = mentions.map(([at]) => quotes.filter((o) => o.srcStart <= at && at < o.srcEnd))
  /** The works named between s and e: slug, and whether by title. Names (weak mentions) only if `weak`. */
  const inRange = (s, e, q = null, weak = true) => {
    const out = new Map()
    mentions.forEach(([at, slug, strong], k) => {
      if (at < s || at >= e || (!strong && !weak)) return
      if (q && inside[k].some((o) => o !== q && !(o.srcStart <= q.srcStart && q.srcEnd <= o.srcEnd))) return
      out.set(slug, (out.get(slug) ?? false) || strong)
    })
    return out
  }
  const pathWorks = worksInPath(file)
  // The file's folder or name is another work's: The Waste Land's guide, a page on Kamikaze.
  const otherPath = pathWorks.length > 0 && pathWorks.every((s) => !isHeld(s))
  const named = new Set(mentions.map((m) => m[1]))
  // The one held text the file names by title three times or more, and no other work as often.
  const titleCounts = new Map()
  for (const [, slug, strong] of mentions) if (strong) titleCounts.set(slug, (titleCounts.get(slug) ?? 0) + 1)
  const ranked = [...titleCounts].sort((a, b) => b[1] - a[1])
  const byTitle = ranked.length && ranked[0][1] >= 3 && isHeld(ranked[0][0]) && (ranked.length === 1 || ranked[1][1] < ranked[0][1]) ? [ranked[0][0]] : []
  const fileLevel = pathWorks.length ? pathWorks : byTitle
  const isDict = /^src\/lib\/i18n\/dictionary/.test(file)

  const out = []
  // With env.trace, every quotation passed over is recorded with the reason,
  // so that what is filtered out can be audited as hard as what is counted:
  // without its words if it runs a skipped text's words together, or follows
  // them (SKIPPED).
  const skip = (q, why, held, near) => {
    if (!env.trace) return
    const before = readable(code.slice(Math.max(0, q.srcStart - 160), q.srcStart)).trim()
    const withheld = why === 'skipped-text' || echoesSkipped(q.text) || echoesSkipped(before)
    out.push({
      near,
      file,
      line: q.line,
      words8: withheld ? '' : q.text.replace(/\s+/g, ' ').trim().split(' ').slice(0, 8).join(' '),
      before8: withheld ? '' : before.split(' ').slice(-8).join(' '),
      verdict: 'skip',
      why: withheld ? 'skipped-text' : why,
      held: held?.map((s) => (isSkipped(s) ? 'skipped' : s)).join(','),
    })
  }
  for (const q of quotes) {
    const raw = q.text.replace(/\s+/g, ' ').trim()
    // Not quotations: a slug or class name, a route, code, a translation, a
    // span that holds other quotations.
    if (/^[a-z0-9]+(?:[-_][a-z0-9]+)+$/.test(raw) || /[{}=<>]|\/[a-z]/.test(raw.replace(/<\/?(?:br|em|i|strong|b)\s*\/?>/gi, ''))) {
      skip(q, "code")
      continue
    }
    if (OTHER_SCRIPT.test(raw)) {
      skip(q, "script")
      continue
    }
    if (/(?:^|[\s(])['‘"“][^'’"”]{2,}['’"”](?=[\s,.;:!?)]|$)/.test(raw) && raw.length > 12) {
      skip(q, "nested")
      continue
    }
    if (/\s['‘"“]\p{Lu}/u.test(raw)) {
      skip(q, "nested")
      continue
    }
    // The scanner closes a single-quoted span at an elision's apostrophe
    // ('Look like th’ innocent flower' ends at "th"): what it found is not the quotation.
    if (/(?:^|\s)(?:th|i|o|t|ta|ne|e|o'er|gainst)$/i.test(raw) && /^['’]\s+\p{L}/u.test(code.slice(q.srcEnd, q.srcEnd + 3))) {
      skip(q, "elision-cut")
      continue
    }

    const chain = chainAt(sf, q.srcStart)
    let field
    let owner
    let tag = ''
    for (const n of chain) {
      if (ts.isPropertyAssignment(n)) {
        field = n.name.getText().replace(/['"]/g, '')
        owner = n.parent
        break
      }
      if (ts.isJsxAttribute(n)) {
        field = n.name.getText()
        tag = n.parent?.parent?.tagName?.getText() ?? ''
        owner = n.parent
        break
      }
      if (ts.isObjectLiteralExpression(n) || ts.isJsxElement(n)) break
    }
    const own = owner && (ts.isObjectLiteralExpression(owner) || ts.isJsxAttributes(owner)) ? ownFields(owner) : { fields: {}, arrays: new Set() }
    const card = Object.keys(own.fields).some((k) => CARD_SIBLINGS.test(k))
    // A line of a poem the page prints, { text, annotations } in a `lines` list: the poem's own words.
    const poemLine =
      !!field &&
      /^(text|line)$/.test(field) &&
      !!owner &&
      ts.isArrayLiteralExpression(owner.parent) &&
      ts.isPropertyAssignment(owner.parent.parent) &&
      /^(lines|stanzas|verses|poem)$/.test(owner.parent.parent.name.getText())
    // A component that prints a quotation: <Quote text="...">, <QuoteCard quote="...">.
    const quoteTag = /quot/i.test(tag) && /^(text|line|lines)$/.test(field ?? '')
    // A language device's example, { device, example, effect, lineRef } in a
    // poem's `languageDevices`: the viewer prints it as a quotation of the poem.
    const deviceExample =
      field === 'example' &&
      !!owner &&
      ts.isObjectLiteralExpression(owner) &&
      ts.isArrayLiteralExpression(owner.parent) &&
      ts.isPropertyAssignment(owner.parent.parent) &&
      owner.parent.parent.name.getText() === 'languageDevices'
    const quoteField =
      !!field &&
      (ALWAYS_QUOTE.has(field) ||
        poemLine ||
        quoteTag ||
        deviceExample ||
        (/^(text|line|lines|original)$/.test(field) && card && tokenise(own.fields[field] ?? '').length <= 30))
    // The whole value of a `text`, `line` or `original` field that is neither:
    // the shared scanner reports every such value as a quotation, but most are
    // the page's own words, a heading or a label ("La Belle Dame Sans Merci -
    // TWO versions exist"). They count only where they are the text word for word.
    // A guide's sources and rights: notes on editions, which quote another
    // edition's readings on purpose (Twelfth Night's “a great a pang” for “as
    // great a pang”, comparing two printings).
    if (chain.some((n) => ts.isPropertyAssignment(n) && PROVENANCE.test(n.name.getText().replace(/['"]/g, '')))) {
      skip(q, 'provenance')
      continue
    }
    // The reader's highlight anchors are cut from the edition by character, not
    // by word ("n just between twelve and one" ends the edition's "even"), and
    // the-highlights-highlight-something.test.ts checks each is in the text.
    // The notes beside them are quotations, and are read like any other.
    if (file === 'src/data/text-annotations.generated.ts' && field === 'text') {
      skip(q, 'anchor')
      continue
    }
    const lit0 = chain.find((n) => literalText(n) !== null)
    const wholeValue =
      !!lit0 && code.slice(lit0.getStart() + 1, q.srcStart).trim() === '' && code.slice(q.srcEnd, lit0.getEnd() - 1).trim() === ''
    // An `example` that is not a device's is read only for what it quotes, as
    // before 2 October 2026; a device's that is the site's own note is not read.
    if (field === 'example' && wholeValue && !deviceExample) {
      skip(q, 'model-example')
      continue
    }
    if (deviceExample && wholeValue && (/^\s*\[/.test(raw) || /\(paraphrase\)\s*$/i.test(raw))) {
      skip(q, 'note')
      continue
    }
    const looseField = !!field && /^(text|line|lines|original)$/.test(field) && !quoteField && wholeValue
    // The fields beside a quotation field describe it; beside prose they describe something else.
    const siblings = quoteField ? own : { fields: {}, arrays: new Set() }

    // ── Which work: the nearest context that names one.
    const lit = chain.find((n) => literalText(n) !== null || ts.isJsxText(n))
    const unit = lit && ts.isJsxText(lit) ? lit.parent : lit ?? chain[0]
    const levels = [['sentence', inRange(Math.max(unit.getStart(), q.srcStart - 300), Math.min(unit.getEnd(), q.srcEnd + 200), q)]]
    for (const n of chain) {
      if (ts.isObjectLiteralExpression(n)) {
        const m = new Map()
        const text = Object.values(ownFields(n).fields).join(' \u0000 ')
        // A character's or writer's name counts in a card, not in a long lesson object.
        for (const [, slug, strong] of mentionsIn(text)) if (strong || text.length <= ENCLOSING_WEAK) m.set(slug, (m.get(slug) ?? false) || strong)
        levels.push(['enclosing', m])
      } else if (ts.isJsxElement(n) || ts.isJsxFragment(n)) {
        // An element the size of a page section is not a quotation's context:
        // "Typical authors: Dickens, Hardy, Shelley, Stevenson" near the top of
        // the Edexcel Language paper page made quotations 450 lines below it
        // Jekyll and Hyde's until 2 October 2026. A name counts in a small
        // element, a title in a larger one, and nothing beyond that.
        const size = n.getEnd() - n.getStart()
        if (size > ENCLOSING_STRONG) break
        levels.push(['enclosing', inRange(n.getStart(), n.getEnd(), q, size <= ENCLOSING_WEAK)])
      } else if (ts.isPropertyAssignment(n)) {
        // A map keyed by slug: { 'a-christmas-carol': { ... } }.
        const k = n.name.getText().replace(/^['"`]|['"`]$/g, '')
        if (isHeld(k)) levels.push(['keyed', new Map([[k, true]])])
      }
    }
    if (isDict) {
      // A dictionary string: its key, and the pages that print it.
      const entry = chain.find((n) => ts.isPropertyAssignment(n) && ts.isObjectLiteralExpression(n.initializer) && n.initializer.properties.some((p) => p.name?.getText() === 'en'))
      if (entry) {
        const key = entry.name.getText().replace(/^['"`]|['"`]$/g, '')
        const m = new Map()
        for (const s of worksInPath(key.replace(/\./g, '/').replace(/_/g, '-'))) m.set(s, true)
        for (const page of env.keyUsers?.get(key) ?? []) for (const s of worksInPath(page)) m.set(s, true)
        levels.push(['dictionary', m])
      }
    }
    let cands = null
    let level = ''
    for (const [name, m] of levels) {
      if (!m.size) continue
      if (m.size > 3) break
      cands = new Set(m.keys())
      // What the path says stays a candidate: a character's name, or a title
      // in a sentence on a page about another work, adds a text; it does not
      // replace the page's own.
      for (const s of fileLevel) cands.add(s)
      level = name
      break
    }
    if (!cands && fileLevel.length) {
      cands = new Set(fileLevel)
      level = pathWorks.length ? 'path' : 'file'
    }
    if (!cands) {
      skip(q, "no-work")
      continue
    }
    // A text skipped by decision (SKIPPED) is not checked, and no record is
    // made of a quotation the context gives it alone, so that none can print
    // it. Where the context names another held text too, the quotation is
    // checked as that text's, unless it is not that text's word for word and
    // runs the skipped text's words together (echoesSkipped, below).
    const heldNamed = [...cands].filter(isHeld)
    if (heldNamed.length && heldNamed.every(isSkipped)) {
      skip(q, 'skipped-text', heldNamed)
      continue
    }
    const held = heldNamed.filter((s) => !isSkipped(s))
    const others = [...cands].filter((c) => !isHeld(c))
    const lang = isDict ? chain.map((n) => (ts.isPropertyAssignment(n) ? n.name.getText() : null)).find((x) => x === 'en' || x === 'ar' || x === 'es') : undefined

    const words8 = raw.split(' ').slice(0, 8).join(' ')
    // The eight words before it, the page's own, so that a sample can be judged by hand.
    const before8 = readable(code.slice(Math.max(0, q.srcStart - 160), q.srcStart)).trim().split(' ').slice(-8).join(' ')
    const rec = { file, line: q.line, words8, before8, level, field: quoteField ? field : undefined, lang }

    // ── Found word for word in a text the context names?
    let found = null
    let foundIn = null
    let order = null
    for (const slug of held) {
      const t = HELD_BY_SLUG.get(slug)
      const ps = splitParts(cleanQuote(q.text, t))
      if (!ps.length) continue
      const r = findParts(t, ps)
      if (Array.isArray(r)) {
        found = r
        foundIn = t
        break
      }
      // Parts out of order: the longest of three words or more, so "We must... We must" is not a quotation.
      if (r === 'order' && Math.max(...ps.map((x) => x.length)) >= 3 && contentWords(ps.flat()) >= 3) order = t
    }
    if (!found && echoesSkipped(q.text)) {
      skip(q, 'skipped-text', heldNamed)
      continue
    }
    const parts = splitParts(cleanQuote(q.text, foundIn ?? (held.length ? HELD_BY_SLUG.get(held[0]) : null)))
    const words = parts.flat()
    if (!words.length) {
      skip(q, "empty", held)
      continue
    }
    rec.n = words.length
    const key = words.join(' ')
    if (held.some((s) => env.declared?.get(s)?.has(key))) {
      skip(q, "declared", held)
      continue
    }

    const before = readable(code.slice(Math.max(0, q.srcStart - 80), q.srcStart)).replace(/["“”'‘’]\s*$/, '').trimEnd()
    const cue = quoteField || WORD_CUE.test(before) || speechBy(code, q.srcStart, held)
    if (found) {
      // One or two words found in the text are counted as a quotation of it
      // only where something says so: a quotation field, a cue, the text's own
      // page, or a sentence naming the text. Otherwise "silver" on a page
      // about Kamikaze would be counted as Much Ado's.
      const named0 = levels[0][1].get(foundIn.slug) === true
      if (words.length <= 2 && !(cue || level === 'path' || level === 'keyed' || named0)) {
      skip(q, "short-no-cue", held)
      continue
    }
      Object.assign(rec, { text: foundIn.slug, verdict: 'ok' })
      if (words.length >= 3) checkPlace(rec, foundIn, parts, q, code, siblings.fields)
      if (quoteField) checkSpeaker(rec, foundIn, found, siblings)
      out.push(rec)
      continue
    }
    if (looseField) {
      skip(q, 'label', held)
      continue
    }
    // Frames, placeholders, titles and talk of misquotation: not quotations, unless exact.
    if (EXAM_QUESTION.test(raw) && words.length >= 5) {
      skip(q, "exam-question", held)
      continue
    }
    if (TEMPLATE.test(raw) || PLACEHOLDER.test(raw)) {
      skip(q, "template", held)
      continue
    }
    const capitals = raw.split(/\s+/).filter((w) => /\p{L}/u.test(w) && !STOP.has(w.toLowerCase().replace(/[^\p{L}]/gu, '')))
    if (capitals.length >= 2 && words.length <= 8 && capitals.every((w) => /^[‘'"“(]?\p{Lu}/u.test(w))) {
      skip(q, "title", held)
      continue
    }
    if (misquoteTalk(code, q) || VARIANT.test(readable(code.slice(q.srcEnd, q.srcEnd + 30))) || EDITION_TALK.test(readable(code.slice(Math.max(0, q.srcStart - 80), q.srcStart)))) {
      skip(q, "misquote-talk", held)
      continue
    }
    if (order) {
      Object.assign(rec, { text: order.slug, verdict: 'wrong', why: 'order', reason: 'its parts are in the text, but not in this order' })
      out.push(rec)
      continue
    }

    // ── Word for word in another held text?
    if (words.length >= 6 || (words.length === 5 && contentWords(words) >= 2)) {
      // Never a skipped text (SKIPPED): its record would print its words.
      const elsewhere = HELD.filter((t) => !held.includes(t.slug) && !isSkipped(t.slug) && Array.isArray(findParts(t, parts)))
      if (elsewhere.length && elsewhere.length <= 2) {
        const e = elsewhere[0]
        // The file names that work somewhere: it is quoting it, not misattributing it.
        if (named.has(e.slug) || !held.length || level === 'file') {
          Object.assign(rec, { text: e.slug, verdict: 'ok' })
          out.push(rec)
          continue
        }
        if (!others.length) {
          Object.assign(rec, { text: held[0], verdict: 'wrong', why: 'other-work', reason: `a line from ${e.title}, not ${HELD_BY_SLUG.get(held[0]).title}` })
          out.push(rec)
          continue
        }
      }
    }
    if (!held.length) {
      skip(q, "not-held", held)
      continue
    }

    // A note quoting the essay or answer it annotates, which used the phrase as
    // its own words: "invokes 'the king's two bodies'", the essay's term from
    // political theory, was reported as a misquotation of Macbeth's "the
    // King's two sons" until 2 October 2026. If the essay quotes the play
    // wrongly, its own quotation is reported where it stands.
    if (!quoteField && quotesOwnText(chain, field, words)) {
      skip(q, 'quotes-own-text', held)
      continue
    }

    // ── Close to the text a context names?
    let verdict = null
    for (const slug of held) {
      const t = HELD_BY_SLUG.get(slug)
      const ps = splitParts(cleanQuote(q.text, t))
      verdict = judgeNear(t, ps, cleanQuote(q.text, t), { cue, alone: !others.length && level !== 'file' })
      // On a page about another work, a near quotation is that work's own
      // words echoing this one: The Waste Land's "The Chair she sat in, like a
      // burnished throne" is Eliot's, not a misquotation of Enobarbus, though
      // the card beside it names Antony and Cleopatra (counted as one until 2
      // October 2026). Where another work is only named nearby, or the text
      // is known only from the file as a whole, a single slip in a long
      // quotation is counted, or a spelling.
      if (verdict && !verdict.ok && otherPath) verdict = null
      // Known only from the file as a whole, the text must be all but
      // certain: a spelling only. A Year 8 lesson's "I no longer see you",
      // a line of Harry's in another book, was reported as Frankenstein's
      // "I shall no longer see the sun" until 2 October 2026.
      if (verdict && !verdict.ok && (others.length || level === 'file') && !(verdict.cost !== undefined && verdict.cost <= (level === 'file' ? 0 : 1) && words.length >= 5)) verdict = null
      // A phrase the text's guide declares it takes from another printing
      // ("has withered", the anthology's La Belle Dame) is not a misquotation.
      if (verdict && !verdict.ok && [...(env.declared?.get(slug) ?? [])].some((d) => excusedBy(t, ps, d))) verdict = { excused: true }
      if (verdict) {
        foundIn = t
        break
      }
    }
    if (verdict?.excused) {
      skip(q, "excused", held)
      continue
    }
    if (verdict?.ok) {
      // The text's words, apart from a space ("any thing" for "anything").
      Object.assign(rec, { text: foundIn.slug, verdict: 'ok' })
      out.push(rec)
      continue
    }
    if (verdict) {
      delete verdict.cost
      Object.assign(rec, { text: foundIn.slug, verdict: 'wrong', ...verdict })
      // A page that says it prints another printing of the text: reported
      // apart, since that printing is not held and cannot be checked here.
      const other = OTHER_PRINTINGS.find((o) => o.text === foundIn.slug && o.files.test(file))
      if (other) Object.assign(rec, { verdict: 'printing', reason: `${rec.reason} (the page prints ${other.printing})` })
      out.push(rec)
      continue
    }

    // ── In no held text: an invented line, if something says it is a quotation.
    if (others.length || words.length < 4 || held.length !== 1) {
      skip(q, "not-near", held, closest(held, words, env))
      continue
    }
    // Invented lines are looked for on the text's own pages, or where no path says otherwise.
    if (pathWorks.length && !pathWorks.includes(held[0])) {
      skip(q, "not-near-other-path", held)
      continue
    }
    if (Object.keys(own.fields).some((k) => SOURCE_FIELDS.test(k))) {
      skip(q, "source-field", held)
      continue
    }
    const t = HELD_BY_SLUG.get(held[0])
    // Written in the text's own words: most of its meaningful words are the text's.
    const meaningful = words.filter((w) => !STOP.has(w))
    const familiar = meaningful.filter((w) => t.vocab.has(w)).length
    if (meaningful.length < 2 || familiar / meaningful.length < 0.7) {
      skip(q, "not-near", held, closest(held, words, env))
      continue
    }
    // Commentary, not the text: a student's sentence in a marked sample, a note in a card.
    if (ANALYSIS_WORDS.test(raw)) {
      skip(q, "commentary", held)
      continue
    }
    // An annotation quoting the essay it annotates, not the novel: the
    // Jekyll and Hyde marking sample's notes on a student's "everyone has a
    // good side and a bad side" were reported as invented lines until 2
    // October 2026.
    if (quotesOwnText(chain, field, words)) {
      skip(q, "quotes-own-text", held)
      continue
    }
    // A list of key quotations whose other entries carry their own marks: an
    // entry without them is the page's description of a moment ("His ghost's
    // silent presence at the banquet"), not a quotation.
    if (unmarkedAmongMarked(chain)) {
      skip(q, "description", held)
      continue
    }
    const spoken = speechBy(code, q.srcStart, held)
    const fieldQuote = quoteField && level !== 'file'
    if (!fieldQuote && !spoken) {
      skip(q, "not-near", held, closest(held, words, env))
      continue
    }
    Object.assign(rec, {
      text: t.slug,
      verdict: 'wrong',
      why: 'not-in-text',
      reason: fieldQuote ? `a ${field} field, and in no held text` : 'given to a character, and not in the text',
    })
    out.push(rec)
  }
  return out
}

/** Is quotation parts `ps` in t once declared phrase d is allowed to stand where t differs? */
function excusedBy(t, ps, d) {
  const dw = d.split(' ')
  const cut = []
  for (const p of ps) {
    let cur = []
    for (let i = 0; i < p.length; i++) {
      if (p.slice(i, i + dw.length).join(' ') === d) {
        if (cur.length) cut.push(cur)
        cur = []
        i += dw.length - 1
      } else cur.push(p[i])
    }
    if (cur.length) cut.push(cur)
  }
  if (cut.flat().length === ps.flat().length) return false
  return !cut.length || Array.isArray(findParts(t, cut))
}

/**
 * A quotation of several lines (" / ") whose lines are each the text's, or
 * close to it, read line by line: what is wrong in each line, and whether the
 * lines follow one another in the text. null unless every line is the text's
 * or near it, and at least one is not exact.
 */
function lineVerdict(t, piece) {
  const texts = piece.split(/\s+\/\s+/)
  if (texts.length < 2) return null
  const ls = texts.map((x) => splitParts(x).flat()).map((l, k) => Object.assign(l, { seps: splitParts(texts[k]).flatMap((p) => p.seps) }))
  if (ls.some((l) => l.length < 3)) return null
  const s = t.type === 'play' ? t.spoken : t.full
  const full = (k) => (s.at ? s.at[Math.min(k, s.at.length - 1)] : k)
  const seen = ls.map((l) => {
    const occ = occurrences(t, l)
    if (occ.length) return { at: occ }
    const al = align(s, l, t.names)
    if (!al || !isNear(l, al)) return null
    return { al, at: [[full(al.start), full(al.end - 1) + 1]] }
  })
  if (seen.some((x) => !x) || seen.every((x) => !x.al)) return null
  const notes = []
  let spellingOnly = true
  seen.forEach((x, k) => {
    if (!x.al) return
    const d = describe(ls[k], x.al)
    if (d.spaceOnly) return
    if (!d.spellingOnly) spellingOnly = false
    notes.push(seen.filter((y) => y.al).length > 1 ? `line ${k + 1}: ${d.text}` : d.text)
  })
  // Each line must begin where the one before it ends, give or take a stage direction.
  const together = seen.every((x, k) => !k || x.at.some(([a]) => seen[k - 1].at.some(([, b]) => a >= b && a - b <= 3)))
  if (!together) return { why: 'join', reason: `${notes.length ? `${notes.join('; ')}; and ` : ''}its lines are not together in the text`, cost: 1 }
  if (!notes.length) return null
  const hard = seen.reduce((n, x) => n + (x.al ? x.al.changed + x.al.added + x.al.dropped : 0), 0)
  return { why: spellingOnly ? 'spelling' : 'words', reason: notes.join('; '), cost: hard }
}

/**
 * The nearest occurrence of words `head` ending at most `most` words before an
 * occurrence of `tail`, and at least one word before it: [head end, tail
 * start], or null. Searched back from each occurrence of the tail, so that a
 * common first word ("made", "for") is found where it is, not at its first
 * forty occurrences in the book, which is where a search forward from the
 * head would look.
 */
function nearestBefore(t, head, tail, most) {
  let best = null
  for (const [s] of occurrences(t, tail)) {
    for (let g = 1; g <= most && s - g - head.length >= 0; g++) {
      const a = s - g - head.length
      if (head.every((w, i) => t.tokens[a + i] === w)) {
        if (!best || g < best[1] - best[0]) best = [a + head.length, s]
        break
      }
    }
  }
  return best
}

/** The text's words from a to b, as a gap: {words, seps, length}. */
const gapOf = (t, a, b) => ({ words: t.tokens.slice(a, b), seps: t.seps.slice(a, b), length: b - a })

/**
 * What a quotation leaves out, unmarked, between runs of the text it joins:
 * only a speech tag ("said Scrooge", "he had thought"), which an ellipsis
 * would put right; a word or two, which is a changed quotation; or a passage,
 * which runs two passages together. The first is reported apart, `tag`, so
 * that it is not mistaken for the worse kinds.
 */
function gapVerdict(gaps) {
  const n = gaps.reduce((a, g) => a + g.length, 0)
  // Each gap as the text prints it, six words at most in all.
  const each = gaps.map((g) => printed(g.words, [' ', ...g.seps.slice(1)], 6))
  const shown = n <= 6 ? each.join('", "') : `${each[0]}${gaps.length > 1 ? `", and ${gaps.length - 1} more` : ''}`
  // `cost` is how many slips the verdict finds: a cut between runs of the
  // text is one, however long, and a word or two left out is each a slip.
  // Without it, a verdict on a quotation in a sentence that also names
  // another work was thrown away (until 2 October 2026 that hid "If these
  // shadows remain unchanged, the child will die", Dickens's "unaltered by
  // the Future").
  if (gaps.every((g) => g.length <= 6 && g.words.some((w) => SPEECH_TAG.test(w))))
    return { why: 'tag', reason: `leaves out "${shown}" without an ellipsis`, cost: 1 }
  if (n <= 2) return { why: 'words', reason: `leaves out "${shown}"`, cost: n }
  return { why: 'join', reason: n <= 5 ? `leaves out "${shown}" without an ellipsis` : `leaves out ${n} words between its parts without an ellipsis`, cost: 1 }
}

/**
 * Runs of a quotation's words that are in the text word for word, three words
 * or more and two that carry meaning, longest first: [quoted start, quoted
 * end, text start]. For a quotation whose parts are in the text but far apart
 * or out of order, which no single passage of the text is close to.
 */
function coverOf(t, p) {
  const found = []
  const used = new Array(p.length).fill(false)
  for (let len = p.length; len >= 3; len--)
    for (let i = 0; i + len <= p.length; i++) {
      if (used.slice(i, i + len).some(Boolean)) continue
      const w = p.slice(i, i + len)
      if (w.filter((x) => !STOP.has(x) && !t.names.has(x)).length < 2) continue
      const occ = occurrences(t, w)
      if (!occ.length || occ.length > 20) continue
      found.push({ i, end: i + len, occ })
      for (let k = i; k < i + len; k++) used[k] = true
    }
  // A run the text has once fixes where the quotation is; a run it has more
  // than once (the Ghost repeats "If these shadows remain unaltered by the
  // Future") is taken at the place nearest that.
  const anchor = found.find((r) => r.occ.length === 1)
  if (!anchor) return []
  const at = anchor.occ[0][0] - anchor.i
  return found
    .map((r) => {
      const best = r.occ.reduce((a, o) => (Math.abs(o[0] - r.i - at) < Math.abs(a[0] - r.i - at) ? o : a))
      return [r.i, r.end, best[0], best[1]]
    })
    .sort((a, b) => a[0] - b[0])
}

/**
 * Is a quotation that is not in text t a misquotation of it, and why? null
 * when it is not close enough to t to be meant as t.
 */
function judgeNear(t, parts, text, { cue, alone }) {
  // An exact part vouches for its neighbours only if it carries meaning: "It
  // was gone" is in most novels, and made Wells's The Red Room ("My candle
  // flared... It was gone") a misquotation of The War of the Worlds.
  const exactParts = parts.filter((p) => p.length >= 3 && contentWords(p.filter((w) => !t.names.has(w))) >= 2 && occurrences(t, p).length).length
  const pieces = text.split(ELLIPSIS)
  let missing = 0
  let spaced = 0
  for (const p of parts) {
    if (occurrences(t, p).length) continue
    missing++
    const piece = pieces.find((s) => tokenise(s).join(' ') === p.join(' ')) ?? ''
    // Two passages run together: each clause is there, in order, close
    // together, but not together. Clauses end at a stop or a comma, or at a
    // dash ("Brave Macbeth - well he deserves that name - ...").
    const clauses = piece
      .split(/(?<=[.?!;:,])\s+|\s+[—–-]{1,2}\s+/)
      .map(tokenise)
      .filter((x) => x.length)
    if (clauses.length >= 2 && p.length >= 4 && contentWords(p) >= 2) {
      const chains = findParts(t, clauses)
      const chain = Array.isArray(chains) ? chains.find((c) => c[c.length - 1][1] - c[0][0] <= p.length + 40) : null
      if (chain) {
        const gaps = []
        for (let k = 1; k < chain.length; k++) if (chain[k][0] > chain[k - 1][1]) gaps.push(gapOf(t, chain[k - 1][1], chain[k][0]))
        if (gaps.length) return gapVerdict(gaps)
      }
    }
    // Words left out with no mark at all: the quotation is two runs of the
    // text, in order, close together ("the milk and the windfall apples ...
    // should be reserved", with the text's parenthesis silently cut). The
    // first run may be one word that carries meaning ("Whence ... did the
    // principle of life proceed?", with "I often asked myself" cut), if what
    // was cut is short.
    // Where only a speech tag was cut, the runs either side may be small
    // words ("For me," said Sherlock Holmes, "there still remains ...").
    // Of every way to divide the quotation, the one with the shortest gap.
    if (p.length >= 4 && contentWords(p) >= 2) {
      let best = null
      for (let k = 1; k <= p.length - 1; k++) {
        const head = p.slice(0, k)
        const tail = p.slice(k)
        if (Math.max(k, p.length - k) < 3) continue
        // A last word on its own is a run only after a long one, with a short
        // cut ("my black ... desires" for "my black and deep desires"); else
        // the free end of the alignment reads it as "desires" for "and".
        if (tail.length === 1 && (STOP.has(tail[0]) || contentWords(head) < 2)) continue
        const hit = nearestBefore(t, head, tail, tail.length === 1 ? 3 : 40)
        if (!hit) continue
        const gap = gapOf(t, hit[0], hit[1])
        const tag = gap.length <= 6 && gap.words.some((w) => SPEECH_TAG.test(w))
        if (!tag) {
          if (contentWords(p) < 3 || !contentWords(head) || !contentWords(tail)) continue
          if (k === 1 && (tail.length < 3 || gap.length > 15 || (t.names.has(head[0]) && gap.length > 6))) continue
        }
        if (!best || gap.length < best.length) best = gap
      }
      if (best) return gapVerdict([best])
    }
    // Lines out of order, or not consecutive: each line there, the whole not.
    const lines = piece.split(/\s\/\s/).map(tokenise).filter((l) => l.length)
    if (lines.length > 1 && lines.every((l) => l.length >= 3) && lines.every((l) => occurrences(t, l).length))
      return { why: 'order', reason: 'each line is in the text, but not in this order or not together', cost: 1 }
    // Some lines exact and some near: each line read on its own, so that the
    // reason says what is wrong in each ("What are these creatures? / That
    // look not like..." had been explained as "what are these creatures" for
    // "wild in their attire"), and the lines must follow one another.
    const lv = lineVerdict(t, piece)
    if (lv) return lv
    if (p.length >= 3) {
      const s = t.type === 'play' ? t.spoken : t.full
      const al = align(s, p, t.names)
      // A part of three words is near only if another part of the quotation is
      // exact, or it is the whole quotation: "We cannot ignore... We cannot
      // pretend..." is an example of anaphora, not "I cannot ignore" misquoted.
      const short = p.length === 3 && parts.length > 1 && !exactParts
      if (al && !short && (isNear(p, al) || (exactParts && contentWords(p) >= 1 && al.exact + al.spelt >= 1))) {
        const runs = runsOf(p, al)
        // Commentary, not the text: a word of analysis the text never uses,
        // in place of the text's ("the scarlet letter symbolises adultery").
        if (runs.some((r) => r.qWords.some((w) => !t.vocab.has(w) && ANALYSIS_WORDS.test(w)))) return null
        const d = describe(p, al)
        if (d.spaceOnly) {
          spaced++
          continue
        }
        return { why: d.spellingOnly ? 'spelling' : 'words', reason: d.text, cost: al.cost - al.spelt }
      }
      // Parts of the text far apart, or out of order, run together with
      // nothing to mark it: most of the quotation is runs of the text.
      if (p.length >= 6 && contentWords(p) >= 3) {
        const runs = coverOf(t, p)
        const covered = runs.reduce((a, r) => a + r[1] - r[0], 0)
        if (runs.length >= 2 && covered / p.length >= 0.75) {
          const inOrder = runs.every((r, k) => !k || r[2] >= runs[k - 1][3])
          const span = runs[runs.length - 1][3] - runs[0][2]
          if (!inOrder && span < 400) return { why: 'order', reason: 'its parts are in the text, but not in this order', cost: 1 }
          if (inOrder && span <= 120) {
            const notes = []
            const placed = new Set()
            const gaps = []
            for (let k = 1; k < runs.length; k++) {
              const a = runs[k - 1][3]
              let b = runs[k][2]
              // A quoted word just before this run that is the text's word just
              // before it, spelt another way ("unseamed" for "unseam'd").
              const i = runs[k][0] - 1
              if (i >= runs[k - 1][1]) {
                let c = b - 1
                while (c > a && t.seps[c] !== ' ') c--
                const w = printed(t.tokens.slice(c, b), [' ', ...t.seps.slice(c + 1, b)], 9)
                if (c >= a && spelling(p[i], w)) {
                  notes.push(`"${p[i]}" for "${w}"`)
                  placed.add(i)
                  b = c
                }
              }
              if (b > a) gaps.push(gapOf(t, a, b))
            }
            const loose = p.filter((_, i) => !placed.has(i) && !runs.some((r) => i >= r[0] && i < r[1]))
            if (loose.length) notes.push(`adds "${printed(loose, loose.map(() => ' '), 3)}"`)
            if (!gaps.length) return { why: loose.length ? 'words' : 'spelling', reason: notes.join(', '), cost: loose.length }
            const v = gapVerdict(gaps)
            if (notes.length) v.reason += `, and ${notes.join(', ')}`
            if (v.why === 'tag' && loose.length) v.why = 'join'
            return v
          }
        }
      }
      continue
    }
    // One or two words: a changed form of the text's own word, presented as the text's.
    if (!alone || (!cue && !exactParts)) continue
    const absent = p.filter((w) => !t.vocab.has(w))
    if (absent.length !== 1) continue
    const v = nearWord(t, absent[0])
    if (!v) continue
    if (p.length === 2 && !occurrences(t, p.flatMap((w) => (w === absent[0] ? tokenise(v) : [w]))).length) continue
    return { why: spelling(absent[0], v) ? 'spelling' : 'words', reason: `"${absent[0]}" for "${v}"` }
  }
  // Every part that was not found differs from the text only by a space: it is the text.
  return missing && spaced === missing ? { ok: true } : null
}

/** Words in a reference that send the reader elsewhere rather than say where the quotation is. */
const RECALLS = /\b(?:echo\w*|recall\w*|compare\w*|cf|like|unlike|mirror\w*|repeat\w*|contrast\w*|see|also|again|later|earlier|before|after|until|since|foreshadow\w*|link\w*|anticipat\w*|revers\w*|answer\w*|vs?)\b/i

/** The place a quotation field says it is from, or prose says just after it. */
function statedPlace(q, code, fields) {
  for (const [k, v] of Object.entries(fields))
    if (PLACE_FIELDS.test(k)) {
      const r = parseRef(v)
      if (r) return r
    }
  for (const [k, v] of Object.entries(fields))
    if (SPEAKER_FIELDS.test(k)) {
      const r = parseRef(v)
      if (r) return r
    }
  const after = readable(code.slice(q.srcEnd, q.srcEnd + 90))
  const m = /^\s*["”'’»]?\s*[,.;:]?\s*\(([^()]{2,60})\)/.exec(after)
  // "(echoing Act 1.7)" says what a line recalls, not where it is: until 2
  // October 2026 Lady Macbeth's "Are you a man?" (3.4) was reported as put in
  // the wrong scene because a lesson said it echoes 1.7.
  if (!m || RECALLS.test(m[1])) return null
  return parseRef(m[1])
}

function checkPlace(rec, t, parts, q, code, fields) {
  const r = statedPlace(q, code, fields)
  if (!r || !placeExists(t, r)) return // a numbering this edition does not have cannot be checked
  // Where the longest part is: a short first part ("Spirit! ...") is found everywhere.
  const longest = parts.reduce((a, p) => (p.length > a.length ? p : a), [])
  const secs = [...new Set(occurrences(t, longest).map(([s]) => t.sec[s]))]
  if (secs.some((i) => placeMatches(t, i, r) !== false)) return
  const where = secs
    .slice(0, 2)
    .map((i) => fmtPlace(t.sections[i].place))
    .join(' or ')
  Object.assign(rec, { verdict: 'wrong', why: 'place', reason: `says ${fmtPlace(r)}; the text has it in ${where}` })
}

function checkSpeaker(rec, t, chains, { fields, arrays }) {
  if (rec.verdict !== 'ok' || t.type !== 'play') return
  let stated = null
  for (const [k, v] of Object.entries(fields))
    if (SPEAKER_FIELDS.test(k) && !arrays.has(k)) {
      stated = v.split(/\s+(?:[—–-]{1,2}|\()\s*|,\s*(?=Act|to\b)|\s+to\s+|\s+\(|\s+on\s+|\s+about\s+/)[0].trim()
      break
    }
  // A guide's `where` names the speaker first: "Lysander, Act 1, Scene 1".
  if (!stated && typeof fields.where === 'string') {
    const m = /^([A-Z][\w .’']{1,30}?),\s*(?:to [^,]{1,30},\s*)?(?:Act|Prologue|Chorus|Epilogue)\b/.exec(fields.where)
    if (m) stated = m[1]
  }
  if (!stated) return
  const who = speakersNamed(t, stated)
  if (!who) return
  for (const chain of chains) for (const [s, e] of chain) for (let i = s; i < e; i++) if (who.has(t.spk[i]) || t.spk[i] < 0) return
  const actual = new Set(chains.map((c) => t.speakers[t.spk[c[0][0]]] ?? 'a stage direction'))
  Object.assign(rec, { verdict: 'wrong', why: 'speaker', reason: `given to ${stated}; the text gives it to ${[...actual].slice(0, 2).join(' or ')}` })
}

// ── Running it ──────────────────────────────────────────────────────────────

/**
 * A quotation's record: where it is, its first eight words and the eight
 * before it, the held text it was taken for, and the verdict (ok, wrong,
 * printing, excepted, or with --trace skip), with `why` and `reason` when it is
 * not ok and `exception` when it is excepted.
 * @typedef {{ file: string, line: number, words8: string, before8: string, verdict: string, text?: string, why?: string, reason?: string, exception?: string, level?: string, field?: string, held?: string, n?: number }} QuotationRecord
 */

/**
 * Every quotation of a held text in every file the audit reads, checked: a
 * record for each (with `trace`, for each passed over too, and why). `file`
 * reads that file alone. A quotation EXCEPTIONS names is `excepted`, not
 * `wrong`; `staleExceptions` are the entries that matched nothing.
 * @param {{ file?: string, trace?: boolean }} [options]
 * @returns {{ files: number, records: QuotationRecord[], staleExceptions: typeof EXCEPTIONS }}
 */
export function audit({ file, trace = false } = {}) {
  const files = filesToScan()
  const sources = new Map(files.map((f) => [f, readFileSync(join(ROOT, f), 'utf8')]))
  const env = { keyUsers: keyUsers(files, sources), declared: declarations(), trace }
  const records = []
  for (const f of files) if (!file || f === file) records.push(...checkFile(f, sources.get(f), env))
  const used = new Set()
  for (const r of records) {
    if (r.verdict !== 'wrong') continue
    const e = EXCEPTIONS.find((x) => x.text === r.text && x.file === r.file && r.words8.startsWith(x.starts))
    if (!e) continue
    used.add(e)
    Object.assign(r, { verdict: 'excepted', exception: e.why })
  }
  const staleExceptions = EXCEPTIONS.filter((e) => (!file || e.file === file) && !used.has(e))
  return { files: files.length, records, staleExceptions }
}

/** Per held text, skipped texts left out: quotations checked, how many are wrong and why, where, and those reported apart. */
export function summarise(records) {
  const by = new Map(
    HELD.filter((t) => !isSkipped(t.slug)).map((t) => [t.slug, { slug: t.slug, checked: 0, wrong: 0, files: new Map(), examples: [], why: {}, printing: [], excepted: [] }]),
  )
  for (const r of records) {
    const e = by.get(r.text)
    if (!e) continue
    e.checked++
    if (r.verdict === 'printing') e.printing.push(r)
    if (r.verdict === 'excepted') e.excepted.push(r)
    if (r.verdict !== 'wrong') continue
    e.wrong++
    e.why[r.why] = (e.why[r.why] ?? 0) + 1
    e.files.set(r.file, (e.files.get(r.file) ?? 0) + 1)
    e.examples.push(r)
  }
  return [...by.values()]
}

/** Up to five examples, from as many files as there are, most affected first. */
function examplesOf(e) {
  const pool = [...e.examples].sort((a, b) => (e.files.get(b.file) ?? 0) - (e.files.get(a.file) ?? 0))
  const picked = []
  const seen = new Set()
  for (const r of pool)
    if (!seen.has(r.file) && picked.length < 5) {
      seen.add(r.file)
      picked.push(r)
    }
  for (const r of pool) if (picked.length < 5 && !picked.includes(r)) picked.push(r)
  return picked
}

function printReport(summary, list) {
  for (const e of summary) {
    const whys = Object.entries(e.why)
      .map(([k, v]) => `${k} ${v}`)
      .join(', ')
    const printing = e.printing.length ? `; ${e.printing.length} more differ on a page that prints another printing` : ''
    const excepted = e.excepted.length ? `; ${e.excepted.length} excepted (EXCEPTIONS)` : ''
    console.log(`\n${e.slug}: ${e.checked} checked, ${e.wrong} wrong${whys ? ` (${whys})` : ''}${printing}${excepted}`)
    for (const r of e.printing.slice(0, list ? Infinity : 3)) console.log(`  (printing) ${r.file}:${r.line}  "${r.words8}"  ${r.reason}`)
    for (const r of e.excepted) console.log(`  (excepted) ${r.file}:${r.line}  "${r.words8}"  ${r.exception}`)
    if (!e.wrong) continue
    const files = [...e.files].sort((a, b) => b[1] - a[1])
    console.log(`  files: ${files.map(([f, n]) => `${f} (${n})`).join(', ')}`)
    for (const r of list ? e.examples : examplesOf(e)) console.log(`  ${r.file}:${r.line}  "${r.words8}"  ${r.reason}`)
  }
}

// ── The reverse test ────────────────────────────────────────────────────────

/**
 * Plants each kind of misquotation in a copy of a real file, or in a page
 * written for the test at a real page's path, and checks it is caught for the
 * right reason; checks that a correct quotation passes; and checks that what
 * is not a quotation of a held text is not counted: a critic's words, exam
 * question wording, scare quotes, and every shape that was wrongly reported
 * while this was built (2 October 2026), so that none of them comes back.
 * Nothing is written to disk. The output is checked too: no reason may quote
 * more than eight words. Returns each check as [name, passed]; `log` prints
 * each as it is made (the guard passes one that prints nothing), and `debug`
 * prints a failed check's records.
 */
export function selfTest({ log = console.log, debug = false } = {}) {
  const env = { keyUsers: new Map(), declared: declarations() }
  const results = []
  const seen = []
  let last = []
  const expect = (name, ok) => {
    results.push([name, ok])
    log(`${ok ? 'PASS' : 'FAIL'}  ${name}`)
    if (!ok && debug) for (const r of last) log('   ', r.verdict, r.why ?? '', r.level, r.field ?? '', '|', r.words8, '|', r.reason ?? '')
  }
  // The records on the planted line, and only those.
  const one = (file, src) => {
    const line = src.split('\n').findIndex((l) => l.includes('Planted for the self-test')) + 1
    // A test whose plant missed would pass "not counted" by checking nothing.
    if (!line) throw new Error(`nothing was planted in ${file}`)
    last = checkFile(file, src, env).filter((r) => r.line === line)
    seen.push(...last)
    return last
  }
  const wrong = (rs, why) => rs.length > 0 && rs.some((r) => r.verdict === 'wrong' && (!why || r.why === why))
  const clean = (rs) => rs.every((r) => r.verdict !== 'wrong')
  const read = (f) => readFileSync(join(ROOT, f), 'utf8')
  /** A page written for the test: its body is JSX. */
  const page = (path, body) => one(path, `export default function P() {\n  return (\n    <main>\n      ${body}\n    </main>\n  )\n}\n`)

  // ── Caught. A quotation card in a real study guide (A Midsummer Night's Dream's key quotations).
  const guide = 'src/data/study-guides/a-midsummer-nights-dream.ts'
  const g = read(guide)
  const plant = (quote, where = 'Lysander, Act 1, Scene 1') =>
    g.replace(/keyQuotes:\s*\[/, `keyQuotes: [\n    { text: ${JSON.stringify(quote)}, where: ${JSON.stringify(where)}, analysis: 'Planted for the self-test.' },`)
  const LOVE = 'The course of true love never did run smooth'
  const correct = one(guide, plant(`${LOVE}; / But either it was different in blood`))
  expect('a correct quotation is checked and passes', correct.length === 1 && correct[0].verdict === 'ok')
  expect('a changed word is caught', wrong(one(guide, plant('The course of true love never does run smooth; / But either it was different in blood')), 'words'))
  expect('a dropped word is caught', wrong(one(guide, plant('The course of love never did run smooth; / But either it was different in blood')), 'words'))
  expect('a line from another play is caught', wrong(one(guide, plant('To be, or not to be, that is the question')), 'other-work'))
  expect('a line put in the wrong scene is caught', wrong(one(guide, plant(LOVE, 'Lysander, Act 3, Scene 2')), 'place'))
  expect('a line given to the wrong speaker is caught', wrong(one(guide, plant(LOVE, 'Hermia, Act 1, Scene 1')), 'speaker'))
  expect('an invented key quotation is caught', wrong(one(guide, plant('The woods at night are full of mischief and of love')), 'not-in-text'))
  expect('lines in the wrong order are caught', wrong(one(guide, plant(`But either it was different in blood / ${LOVE};`)), 'order'))
  const ellipsis = one(guide, plant('The course of true love ... run smooth'))
  expect('an ellipsis may stand for omitted words', ellipsis.length === 1 && ellipsis[0].verdict === 'ok')

  // Prose in a real model essay (Macbeth's), where the Folger wording was found.
  const essay = 'src/data/model-essays/macbeth.ts'
  const e = read(essay)
  const para = (s, note = 'Planted for the self-test.') => e.replace(/paragraphs:\s*\[/, `paragraphs: [\n      { content: ${JSON.stringify(s)}, annotation: ${JSON.stringify(note)} },`)
  expect('the Folger wording ("poisoned" for "poison’d") is caught', wrong(one(essay, para('Macbeth sees that “this even-handed justice / Commends th’ ingredience of our poisoned chalice / To our own lips”.')), 'spelling'))
  const held = one(essay, para('Macbeth sees that “this even-handed justice / Commends th’ ingredience of our poison’d chalice / To our own lips”.'))
  expect("the held edition's wording passes", held.length === 1 && held[0].verdict === 'ok')
  const spaced = one(essay, para('Lady Macbeth tells him to “look like the innocent flower, / But be the serpent under ’t”.'))
  expect('a space before an elision ("under ’t" for "under’t") is not a misquotation', spaced.length === 1 && spaced[0].verdict === 'ok')
  expect('a line from King Lear in a Macbeth essay is caught', wrong(one(essay, para('Lady Macbeth mocks him: “Nothing will come of nothing, speak again”.')), 'other-work'))
  expect('the famous misquotation ("that" for "which") is caught', wrong(one(essay, para('He asks, “Is this a dagger that I see before me?”')), 'words'))
  expect(
    'a short quotation in modern spelling is caught ("temperance" for "temp’rance")',
    wrong(one(essay, para('Malcolm lists the king-becoming graces, “justice, verity, temperance, stableness”.')), 'spelling'),
  )
  expect('three words with one left out are caught ("crown to toe")', wrong(one(essay, para('She asks to be filled from “crown to toe” with cruelty.')), 'words'))

  // Prose on a page written for the test: a critic, an exam question, a scare quote, one word in a changed form.
  const fpage = 'src/app/revision/texts/frankenstein/planted/page.tsx'
  const prose = (s) => `export default function P() { return <p>${s}</p> } // Planted for the self-test\n`
  expect("a critic's words are not counted", clean(one(fpage, prose('The critic Anne Mellor calls the novel "a feminist critique of masculine science and its dangers".'))))
  expect('exam question wording is not counted', clean(one(fpage, prose('Answer this: "How does Shelley present the Creature as a victim of society?"'))))
  expect('scare quotes are not counted as wrong', clean(one(fpage, prose('Victor is the true "monster" of the novel, a "mad scientist".'))))
  const form = one(fpage, prose('The Creature describes his "yearning" for the cottagers.'))
  expect('one word in a changed form is caught ("yearning" for "yearned")', form.length === 1 && form[0].verdict === 'wrong')
  const eyes = one(fpage, prose('Victor sees "the dull yellow eyes" of the Creature.'))
  expect('a fragment inside a word is not matched ("eyes" for "eye")', eyes.length === 1 && eyes[0].verdict === 'wrong')
  const good = one(fpage, prose('He sees "the dull yellow eye of the creature open".'))
  expect('the same fragment, as Shelley wrote it, passes', good.length === 1 && good[0].verdict === 'ok')

  // The other places a quotation is printed: a quotation component, a card's
  // speaker and chapter, a poem's printed lines, an .mdx page.
  expect(
    'a changed word in <Quote text> is caught',
    wrong(page('src/app/resources/revision-notes/macbeth/planted/page.tsx', '<Quote text="Out, damned spot! out, I tell you!" note="Planted for the self-test" />'), 'words'),
  )
  expect(
    "a <QuoteCard>'s wrong speaker is caught",
    wrong(page('src/app/revision/texts/romeo-and-juliet/planted/page.tsx', '<QuoteCard quote="More light and light, more dark and dark our woes" speaker="Juliet" analysis="Planted for the self-test" />'), 'speaker'),
  )
  expect(
    "a <QuoteCard>'s wrong chapter is caught (Jekyll and Hyde)",
    wrong(page('src/app/resources/revision-notes/jekyll-and-hyde/planted/page.tsx', `<QuoteCard quote="Satan's signature upon a face" where="Chapter 1" analysis="Planted for the self-test" />`), 'place'),
  )
  expect(
    'a wrong stave is caught (A Christmas Carol)',
    wrong(one('src/data/planted-christmas-carol.ts', `export const q = [{ quote: 'His wealth is of no use to him.', stave: 'Stave 1', analysis: 'Planted for the self-test.' }]\n`), 'place'),
  )
  expect(
    'a speech tag cut with no ellipsis is caught, as a tag',
    wrong(page('src/app/revision/texts/jekyll-and-hyde/planted/page.tsx', '<p>Utterson thinks: "If he be Mr Hyde, I shall be Mr Seek." Planted for the self-test</p>'), 'tag'),
  )
  expect(
    'two passages run together are caught ("Are there no prisons? Are there no workhouses?")',
    wrong(page('src/app/revision/texts/a-christmas-carol/planted/page.tsx', '<p>Scrooge asks, "Are there no prisons? Are there no workhouses?" Planted for the self-test</p>'), 'join'),
  )
  const tyger = 'src/app/igcse/edexcel/poetry/the-tyger/page.tsx'
  const line = (src, text) => src.replace(/lines:\s*\[/, `lines: [\n    { text: ${JSON.stringify(text)} }, // Planted for the self-test`)
  const ty = read(tyger)
  expect("a changed word in a poem's printed line is caught", wrong(one(tyger, line(ty, 'What dread hand? & what dread toes?')), 'words'))
  const amp = one(tyger, line(ty, 'What dread hand? & what dread feet?'))
  expect('"&" for "and" in a printed line passes', amp.length === 1 && amp[0].verdict === 'ok')
  // A language device's example, which the poem viewer prints as a quotation.
  const device = (src, example) =>
    src.replace(
      /languageDevices:\s*\[/,
      `languageDevices: [\n    { device: 'Planted', example: ${JSON.stringify(example)}, effect: 'Planted for the self-test.', lineRef: 0 },`,
    )
  expect("a changed word in a language device's example is caught", wrong(one(tyger, device(ty, 'What dread hand? & what dread toes?')), 'words'))
  const devOk = one(tyger, device(ty, 'What dread hand? & what dread feet?'))
  expect("a device example as the poem has it passes", devOk.length === 1 && devOk[0].verdict === 'ok')
  // A note that would be reported if it were read as a quotation.
  expect("a device example that is the site's bracketed note is not counted", clean(one(tyger, device(ty, '[Line 12] What dread hand? & what dread toes?'))))
  expect(
    'an `example` outside a poem\'s language devices is not read whole',
    clean(one(tyger, ty.replace(/languageDevices:\s*\[/, `tips: [{ technique: 'x', example: 'What dread hand? & what dread toes?' }], // Planted for the self-test\n  languageDevices: [`))),
  )
  const lbd = 'src/app/igcse/edexcel/poetry/la-belle-dame-sans-merci/page.tsx'
  const printing = one(lbd, line(read(lbd), 'And there she wept and sighed full sore,'))
  expect('a page that says it prints another printing is reported apart, not wrong', printing.length === 1 && printing[0].verdict === 'printing')
  const course = 'src/data/edexcel-igcse-lit-poetry-courses-2.ts'
  const inCourse = one(
    course,
    read(course).replace(
      /const laBelleDameModules: CourseModule\[\] = \[/,
      `const laBelleDameModules: CourseModule[] = [\n  { quote: 'And there she wept and sighed full sore,', poem: 'La Belle Dame sans Merci' }, // Planted for the self-test`,
    ),
  )
  expect('so is a course whose version note says to quote the anthology', inCourse.length === 1 && inCourse[0].verdict === 'printing')
  expect('a misquotation on an .mdx page is caught', wrong(one('content/blog/planted-macbeth.mdx', 'Late in the play Macbeth admits "I have supped full with horrors". Planted for the self-test.\n'), 'spelling'))
  expect(
    'the better version after "Instead of ... Write:" is checked',
    wrong(page('src/app/resources/grade-targets/planted/page.tsx', `<p>Instead of: "A quote that shows this is the dagger." Write: Macbeth's reference to "the dagger of the mind" shows guilt. Planted for the self-test</p>`), 'words'),
  )
  expect(
    'a misquotation in a weak model answer is still caught',
    wrong(page('src/app/resources/grade-targets/planted/page.tsx', `<p>Weak: Shakespeare uses irony when Macbeth says "So fair and foul a day I have not seen". Planted for the self-test</p>`), 'words'),
  )

  // ── Not counted: the shapes wrongly reported while this was built.
  expect(
    'a line from another play in a list beside "Romeo" is not called Romeo and Juliet’s',
    clean(one('src/data/curriculum/planted.ts', `export const s = 'Display famous lines (e.g. "Wherefore art thou Romeo?", "Get thee to a nunnery!", "Out, out, brief candle!") Planted for the self-test'\n`)),
  )
  const filler = `<section><p>${'A paragraph on reading skills, the same sentence again and again. '.repeat(30)}</p></section>\n`.repeat(6)
  expect(
    "a writer's name far up a long page does not claim a quotation below",
    clean(page('src/app/resources/english-language/edexcel/planted/page.tsx', `<p>Typical authors: Dickens, Hardy, Shelley, Stevenson.</p>\n${filler}<section><p>The adverb "wearily," shows fatigue. Planted for the self-test</p></section>`)),
  )
  expect(
    "nor does a title, beyond a page section's length",
    clean(page('src/app/resources/english-language/edexcel/planted/page.tsx', `<p>Set texts include Jekyll and Hyde.</p>\n${filler}<section><p>The adverb "wearily," shows fatigue. Planted for the self-test</p></section>`)),
  )
  expect(
    "an annotation quoting the essay's own term is not a misquotation (\"the king's two bodies\")",
    clean(one(essay, para("James I's divine right drew on the political theory of the king's two bodies, which this scene stages.", "Sophisticated AO3: invokes 'the king's two bodies', a political theory. Planted for the self-test."))),
  )
  expect(
    'an EAL grammar example naming two characters is not a misquotation',
    clean(one('src/lib/eal/planted.ts', `export const s = { en: 'Plural subjects take plural verbs ("Macbeth and Banquo ARE generals"). Planted for the self-test' }\n`)),
  )
  const waste = 'src/data/study-guides/the-waste-land.ts'
  expect(
    "another work's own line echoing a held text is not its misquotation (The Waste Land)",
    clean(
      one(
        waste,
        read(waste).replace(
          /keyQuotes:\s*\[/,
          `keyQuotes: [\n    { text: 'The Chair she sat in, like a burnished throne', where: 'Part II', analysis: 'Echoes Enobarbus on Cleopatra in Antony and Cleopatra. Planted for the self-test.' },`,
        ),
      ),
    ),
  )
  expect(
    "a marking note quoting the student's essay is not an invented line",
    clean(
      one(
        'src/app/marking/sample/jekyll-hyde/planted.tsx',
        `const p = { label: 'Intro', text: 'Stevenson shows that everyone has a good side and a bad side in the novella.', annotations: [{ quote: 'everyone has a good side and a bad side', kind: 'improve', comment: 'Planted for the self-test.' }] }\n`,
      ),
    ),
  )
  const echo = one(essay, para('At the banquet she asks “Are you a man?” (echoing Act 1.7) in front of the thanes.'))
  expect('"(echoing Act 1.7)" after a quotation is not read as its place', echo.length === 1 && echo[0].verdict === 'ok')
  expect(
    "a heading in a `text` field is not a quotation",
    clean(one('src/app/revision/common-errors/planted.tsx', `const e = [{ text: 'La Belle Dame Sans Merci - TWO versions exist', fix: 'Planted for the self-test.' }]\n`)),
  )
  expect(
    '"whereas" is not "where’s" spelt another way',
    clean(one('src/data/lesson-plans/planted.ts', `export const s = 'When comparing Brutus and Cassius, use the word "whereas" to link points. Planted for the self-test'\n`)),
  )
  const scan = page('src/app/igcse/edexcel/poetry/the-tyger/planted/page.tsx', '<p>The stresses fall: "TY-ger TY-ger BURN-ing BRIGHT / In the FOR-ests of the NIGHT". Planted for the self-test</p>')
  expect('scansion marks are not a changed spelling', scan.length === 1 && scan[0].verdict === 'ok')
  expect(
    "an early printing's reading, introduced as such, is not a misquotation (the Folio's \"a Table\")",
    clean(page('src/app/resources/revision-notes/henry-v/planted/page.tsx', `<p>Editors emend the Folio's "a Table of green fields" to babbled. Planted for the self-test</p>`)),
  )
  const titled = `// Frankenstein, Frankenstein and Frankenstein: the file names it three times.\nexport const s = 'Echo-read Harry\\'s "I no longer see you." Discuss irony. Planted for the self-test'\n`
  expect('a text known only from the whole file must be all but certain ("I no longer see you")', clean(one('src/lib/ks3/planted-year-8.ts', titled)))
  const edge = page('src/app/revision/texts/a-christmas-carol/planted/page.tsx', '<p>The Ghost answers "More than eighteen hundred brothers." Planted for the self-test</p>')
  expect('a word added after the text\'s closing quotation mark is reported as added', wrong(edge, 'words') && edge.some((r) => /adds "brothers"/.test(r.reason ?? '')))
  const ann = 'src/data/text-annotations.generated.ts'
  expect(
    "the reader's highlight anchors are not counted as quotations",
    one(ann, read(ann).replace(/'section-1': \[/, `'section-1': [\n      { type: 'quote', text: 'Old Marley was as dead as a door-nail', note: 'Planted for the self-test.' },`)).length === 0,
  )

  // ── The short cuts taken for speed (2 October 2026) find what the long way
  // finds. A short cut that went wrong would not fail: it would read less,
  // and report nothing wrong in what it never read.
  const runs = (re) => mustContain(re.source)
  expect(
    'the text a pattern needs is read as its matches always hold it',
    JSON.stringify(
      [/\bScrooge\b|\bMarley\b/, /\bCratchits?\b/, /\bSign of (?:the )?Four\b/, /[‘'"“]If[—–-]*[’'"”]|\bIf—/, /\bD\.\s?H\.\s?Lawrence\b/, /(?<=['"`/])macbeth(?=['"`/#?])/, /\bHyde\b(?! Park)/, /ab+c/, /ab{2}c/, /a|/].map(runs),
    ) === JSON.stringify([['Scrooge', 'Marley'], ['Cratchit'], ['Sign of '], ['If', 'If—'], ['Lawrence'], ['macbeth'], ['Hyde'], ['ab'], null, null]),
  )
  const plainMentions = (src) => {
    const out = []
    for (const [re, slug, strong] of PATTERNS) for (const m of src.matchAll(new RegExp(re.source, 'g'))) out.push([m.index, slug, strong])
    return out.sort((a, b) => a[0] - b[0])
  }
  const guides = readdirSync(join(ROOT, 'src/data/study-guides')).filter((f) => f.endsWith('.ts'))
  expect(
    `every work the study guides name is found as every pattern run over every guide finds it (${guides.length} guides)`,
    guides.length > 20 && guides.every((f) => JSON.stringify(mentionsIn(read(`src/data/study-guides/${f}`), false)) === JSON.stringify(plainMentions(read(`src/data/study-guides/${f}`)))),
  )
  // Every tenth file the audit does not parse, because it names no work, read the long way (--trace): nothing in it is a held text's.
  const unread = filesToScan().filter((f, k) => {
    if (k % 10) return false
    const src = read(f)
    return namesNoWork(f, /\.mdx$/.test(f) ? mdxAsSource(src) : /\.json$/.test(f) ? `export default ${src}` : src)
  })
  expect(
    `a file that names no work holds no quotation of a held text, read the long way (${unread.length} files)`,
    unread.length > 50 && unread.every((f) => checkFile(f, read(f), { ...env, trace: true }).every((r) => r.verdict === 'skip')),
  )

  // ── The output: no reason quotes more than eight words.
  const longest = Math.max(...seen.flatMap((r) => [...(r.reason ?? '').matchAll(/"([^"]*)"/g)].map((m) => m[1].split(/\s+/).filter(Boolean).length)), 0)
  expect(`no reason quotes more than eight words (longest: ${longest})`, longest <= 8 && seen.every((r) => r.words8.split(' ').length <= 8))
  expect('a long changed run is cut to six words', printed('a b c d e f g h i'.split(' '), Array(9).fill(' ')).split(' ').length === 7)

  const failed = results.filter(([, ok]) => !ok).length
  log(`\n${results.length - failed} of ${results.length} passed`)
  return results
}

// ── Main ────────────────────────────────────────────────────────────────────

/**
 * The command line, run only when this file is run, not when the guard
 * (every-quotation-is-the-held-text.test.ts) imports it: until 2 October 2026
 * the audit ran as the file was loaded, so nothing could import its logic
 * without running it, and the only check was a person remembering to run it.
 */
function main(args) {
  const FLAG = (f) => args.includes(f)
  const OPT = (f) => {
    const i = args.indexOf(f)
    return i >= 0 ? args[i + 1] : undefined
  }

  if (FLAG('--self-test')) process.exit(selfTest({ debug: FLAG('--debug') }).every(([, ok]) => ok) ? 0 : 1)

  if (OPT('--try')) {
    // One quotation against one held text: the verdict and the alignment's
    // counts, never the text's words beyond the reason's few.
    const t = HELD_BY_SLUG.get(OPT('--try'))
    const quote = args[args.indexOf('--try') + 2] ?? ''
    if (!t) throw new Error(`no held text ${OPT('--try')}`)
    if (isSkipped(t.slug)) {
      console.log('That text is skipped by decision; see SKIPPED in scripts/check-quotations.mjs.')
      process.exit(0)
    }
    const ps = splitParts(cleanQuote(quote, t))
    const found = findParts(t, ps)
    console.log('exact:', Array.isArray(found) ? `yes, ${found.length} place(s)` : found === 'order' ? 'parts out of order' : 'no')
    for (const p of ps) {
      const al = align(t.type === 'play' ? t.spoken : t.full, p, t.names)
      if (al) console.log(`part of ${p.length}: exact ${al.exact}, spelt ${al.spelt}, changed ${al.changed}, added ${al.added}, dropped ${al.dropped}, meaningful ${al.meaningful}, near ${isNear(p, al)}`)
    }
    console.log('verdict:', JSON.stringify(judgeNear(t, ps, cleanQuote(quote, t), { cue: true, alone: true })))
    process.exit(0)
  }

  const only = OPT('--text')
  const t0 = Date.now()
  const all = audit({ file: OPT('--file'), trace: FLAG('--trace') })
  const records = only ? all.records.filter((r) => r.text === only) : all.records
  const summary = summarise(records).filter((e) => !only || e.slug === only)

  if (OPT('--file')) {
    // One file, every quotation it attributes to a held text, for whoever fixes
    // it; with --trace, those it passed over too, and why.
    for (const r of records)
      console.log(
        r.verdict === 'skip'
          ? `${r.line}\tskip\t${r.held || '-'}\t[${r.why}]\t"${r.words8}"`
          : `${r.line}\t${r.verdict}\t${r.text}\t[${r.level}${r.field ? `/${r.field}` : ''}]\t"${r.words8}"\t${r.reason ?? ''}${r.exception ? `\t(excepted: ${r.exception})` : ''}`,
      )
    process.exit(0)
  }

  if (OPT('--sample')) {
    // A seeded sample, for judging by hand: the verdict, eight words and the reason, never more.
    let seed = Number(OPT('--seed') ?? 1)
    const rand = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648
    const want = OPT('--verdict')
    const why = OPT('--why')
    const pool = records.filter((r) => (!want || r.verdict === want) && (!why || r.why === why))
    const n = Math.min(Number(OPT('--sample')), pool.length)
    const picked = new Set()
    while (picked.size < n) picked.add(pool[Math.floor(rand() * pool.length)])
    for (const r of picked)
      console.log(
        `${r.verdict.padEnd(5)} ${r.text}  ${r.file}:${r.line}  [${r.level}${r.field ? `/${r.field}` : ''}]${FLAG('--context') ? `  ...${r.before8}` : ''}  "${r.words8}"  ${r.reason ?? ''}`,
      )
    process.exit(0)
  }

  if (OPT('--json'))
    writeFileSync(
      OPT('--json'),
      JSON.stringify(
        {
          files: all.files,
          summary: summary.map((e) => ({ ...e, files: Object.fromEntries(e.files), examples: examplesOf(e) })),
          wrong: records.filter((r) => r.verdict === 'wrong'),
          staleExceptions: all.staleExceptions,
          // With --trace, every record, those passed over included, for auditing what is left out.
          ...(FLAG('--trace') ? { records } : {}),
        },
        null,
        1,
      ),
    )
  printReport(summary, FLAG('--list'))
  for (const e of all.staleExceptions) console.log(`\nStale exception, which matched no quotation: ${e.text} in ${e.file}, "${e.starts}". Remove it from EXCEPTIONS.`)
  const checked = summary.reduce((a, e) => a + e.checked, 0)
  const wrong = summary.reduce((a, e) => a + e.wrong, 0)
  const excepted = summary.reduce((a, e) => a + e.excepted.length, 0)
  const skipped = Object.keys(SKIPPED).length
  console.log(
    `\n${all.files} files read, ${checked} quotations of held texts checked, ${wrong} wrong, ${excepted} excepted` +
      `${skipped ? `; ${skipped} held text${skipped === 1 ? '' : 's'} skipped by decision (SKIPPED)` : ''} (${((Date.now() - t0) / 1000).toFixed(1)}s)`,
  )
  process.exit(FLAG('--strict') && (wrong || all.staleExceptions.length) ? 1 : 0)
}

// Compared without regard to case: Windows may give the drive letter either way.
if (process.argv[1] && resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase()) main(process.argv.slice(2))
