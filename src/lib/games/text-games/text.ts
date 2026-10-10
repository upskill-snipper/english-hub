/**
 * The language rules the text games are built with: how words are compared,
 * where a sentence ends, what a "where" reference covers, and when two answers
 * are too close for a question to have only one right one.
 *
 * WHY THESE EXIST. A multiple-choice question is only fair if exactly one
 * option is right. The guides were not written as question banks, so their
 * data has to be read carefully before it is turned into options:
 *
 * - Two "where" references can cover the same lines: "Lines 5-13" and
 *   "Lines 13-24" in My Last Duchess share line 13, and "Chapter 12" sits
 *   inside "Chapters 11 and 12" in Jane Eyre. Offering both would make a
 *   quotation from line 13 right twice. So references are parsed into units
 *   (act, scene, chapter, stanza, line...) and two that might overlap are never
 *   offered against each other.
 * - A refrain is in the text more than once, so asking where it comes from
 *   would have several right answers. A quotation the held edition prints more
 *   than once is not asked about.
 * - Methods and relationships are described in overlapping words: "Antithesis
 *   and oxymoron" against "Oxymoron and paradox", "father and son; king and
 *   heir" against "king and subject". Options that share a key word, or belong
 *   to one family of closely related terms, are kept apart.
 *
 * Every rule here errs towards leaving a distractor out. A question with two
 * options instead of three is a small loss; a question with two right answers
 * teaches a student that the right answer was wrong.
 */

// ── Words ────────────────────────────────────────────────────────────────────

/** Function words, including the archaic ones the set texts use. */
const STOP = new Set(
  (
    'a an the and or but nor of to in on at by for with from into onto upon unto as is are was ' +
    'were be been being am it its this that these those then than so such not no yes do does did ' +
    'done doth dost didst have has had having hath hast will would shall should can could may might ' +
    'must he she they them their theirs his her hers him we us our ours you your yours i me my mine ' +
    'who whom whose which what when where why how all any some each every both either neither one ' +
    'own same other more most very too also just only even there here out up down over under again ' +
    'off if about after before while though although because until till through thee thou thy thine ' +
    'art ye o oh shalt wilt tis yet now let like well into than ere nay aye whilst whom ' +
    // Longer function words, which would make a poor missing word.
    'during within without around towards toward against between among amongst across behind ' +
    'beneath beyond below above along since unless whether whither whence thus hence therefore ' +
    'however whatever whenever wherever perhaps rather quite almost often ever never always many ' +
    'much few less least those these himself herself itself myself yourself themselves ourselves ' +
    'shall unto upon onto from were where there their them then than that this with what when'
  ).split(/\s+/),
)

/** Lower-case words, letters and inner apostrophes only, in reading order. */
export function wordsOf(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[‘’ʼ`]/g, "'")
    .split(/[^\p{L}']+/u)
    .map((w) => w.replace(/^'+|'+$/g, ''))
    .filter(Boolean)
}

export function isStopWord(w: string): boolean {
  return STOP.has(w.toLowerCase())
}

/**
 * A plural's singular, then the first four letters: enough to match "kinsman"
 * with "kinsmen", "ironic" with "irony" and "eye" with "eyes".
 */
export function stem(w: string): string {
  const s = w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w
  return s.length > 4 ? s.slice(0, 4) : s
}

/** The words that carry the meaning: no function words, none of `generic`. */
export function keyTerms(s: string, generic: ReadonlySet<string> = new Set()): string[] {
  return wordsOf(s).filter((w) => w.length >= 3 && !STOP.has(w) && !generic.has(w))
}

/** Do two phrases share a key word, by stem? */
export function sharesKeyTerm(
  a: string,
  b: string,
  generic: ReadonlySet<string> = new Set(),
): boolean {
  const sa = new Set(keyTerms(a, generic).map(stem))
  return keyTerms(b, generic).some((w) => sa.has(stem(w)))
}

/**
 * Does `word` match a family entry? An entry is a prefix ("personif" matches
 * "personified"), or, ending in `$`, a whole word ("kin$" matches "kin" and not
 * "king"; "class$" matches "class" and not "classical").
 */
function matchesEntry(word: string, entry: string): boolean {
  return entry.endsWith('$') ? word === entry.slice(0, -1) : word.startsWith(entry)
}

/** The families a phrase belongs to: those with a word matching one of the family's entries. */
function familiesOf(s: string, families: readonly (readonly string[])[]): Set<number> {
  const words = wordsOf(s)
  const out = new Set<number>()
  families.forEach((entries, i) => {
    if (words.some((w) => entries.some((e) => matchesEntry(w, e)))) out.add(i)
  })
  return out
}

function shareFamily(a: string, b: string, families: readonly (readonly string[])[]): boolean {
  const fa = familiesOf(a, families)
  for (const f of familiesOf(b, families)) if (fa.has(f)) return true
  return false
}

// ── Sentences ────────────────────────────────────────────────────────────────

/** Words a full stop follows without ending a sentence. */
const ABBREVIATIONS = new Set([
  'mr',
  'mrs',
  'ms',
  'dr',
  'st',
  'mt',
  'no',
  'vs',
  'etc',
  'cf',
  'vol',
  'ch',
  'pp',
  'ed',
  'eds',
  'ca',
  'viz',
])

/**
 * Where the first sentence of `text` ends, or -1 if it is all one sentence.
 *
 * A stop ends a sentence when it is followed by a space and then a capital or
 * an opening quotation mark, outside any quotation that is still open, and not
 * after an abbreviation ("Mrs. Mallard", as The Story of an Hour prints it) or
 * an initial ("H. G. Wells"). A stop inside a quotation does not count: "let
 * not me play a woman. I have a beard coming" is one quotation inside one
 * sentence of the guide.
 */
function sentenceEnd(text: string, from: number): number {
  let curly = 0
  let straight = false
  for (let i = from; i < text.length; i++) {
    const c = text[i]
    if (c === '“') curly++
    else if (c === '”') curly = Math.max(0, curly - 1)
    else if (c === '"') straight = !straight
    if (!'.?!'.includes(c)) continue
    // Closing marks that belong to the sentence: a quotation's or a bracket's.
    let j = i + 1
    while (j < text.length && '”’"\')'.includes(text[j])) {
      if (text[j] === '”') curly = Math.max(0, curly - 1)
      else if (text[j] === '"') straight = !straight
      j++
    }
    if (curly > 0 || straight) continue
    if (j >= text.length) return j
    if (!/\s/.test(text[j])) continue
    let k = j
    while (k < text.length && /\s/.test(text[k])) k++
    if (k >= text.length) return j
    if (!/[\p{Lu}“‘"'(\d]/u.test(text[k])) continue
    if (c === '.') {
      const before = /([\p{L}.]+)\.$/u.exec(text.slice(Math.max(0, i - 12), i + 1))?.[1] ?? ''
      const word = before.toLowerCase()
      if (ABBREVIATIONS.has(word)) continue
      if (/^\p{Lu}$/u.test(before)) continue
    }
    return j
  }
  return -1
}

/**
 * A character's name as it reads inside a sentence. Guides name many people by
 * role ("The speaker", "The wife", "The Inspector"), and the cast list rightly
 * capitalises them; "What is The photographer to The wife?" does not read as
 * English (seen on the live site, 10 October 2026). Only a leading "The" is
 * lowered; the rest of the name is the guide's.
 */
export function midSentence(name: string): string {
  return name.replace(/^The (?=\S)/, 'the ')
}

/**
 * The opening of `text`, whole sentences only, at least `min` characters where
 * the text allows: the first sentence, or the first two when the first is
 * short. Always a prefix of `text`, so it is the guide's own words.
 */
export function openingSentences(text: string, min = 60): string {
  const t = text.trim()
  let end = sentenceEnd(t, 0)
  if (end < 0) return t
  while (end < min) {
    const next = sentenceEnd(t, end)
    if (next < 0) return t
    end = next
  }
  return t.slice(0, end).trim()
}

// ── Matching quotations with a held edition ──────────────────────────────────

/**
 * The normalisation src/__tests__/study-guides.test.ts checks quotations
 * with: case, whitespace, curly and straight marks, dashes and markup.
 * Nothing that would let a different word through.
 */
export function normForMatch(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/g, ' ')
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–-]+/g, ' ')
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/** A quotation's parts either side of an ellipsis or a line break, as the guide test reads them. */
export function quoteFragments(quote: string): string[] {
  return quote
    .split(/\s*(?:\.\.\.|…|\/)\s*/)
    .map((f) => normForMatch(f))
    .filter((f) => f.split(' ').length >= 2)
}

/** How many times `needle` occurs in `hay`, on word boundaries. */
export function occurrences(hay: string, needle: string): number {
  if (!needle) return 0
  let n = 0
  let at = hay.indexOf(needle)
  while (at >= 0) {
    const before = at === 0 ? ' ' : hay[at - 1]
    const after = hay[at + needle.length] ?? ' '
    if (!/[\p{L}\p{N}']/u.test(before) && !/[\p{L}\p{N}']/u.test(after)) n++
    at = hay.indexOf(needle, at + 1)
  }
  return n
}

// ── Where a reference points ─────────────────────────────────────────────────

const UNIT: Record<string, string> = {
  act: 'act',
  acts: 'act',
  scene: 'scene',
  scenes: 'scene',
  chapter: 'chapter',
  chapters: 'chapter',
  stanza: 'stanza',
  stanzas: 'stanza',
  line: 'line',
  lines: 'line',
  letter: 'letter',
  letters: 'letter',
  stave: 'stave',
  staves: 'stave',
  volume: 'volume',
  volumes: 'volume',
  part: 'part',
  parts: 'part',
  book: 'book',
  books: 'book',
  entry: 'entry',
  entries: 'entry',
  page: 'page',
  pages: 'page',
  quatrain: 'quatrain',
  quatrains: 'quatrain',
  paragraph: 'paragraph',
  paragraphs: 'paragraph',
  section: 'section',
  sections: 'section',
}

/** Divisions a text names without a number. */
const BARE = ['prologue', 'epilogue', 'chorus', 'octave', 'sestet', 'couplet', 'conclusion']

const NUMBER_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
}

const NUM = `(?:\\d+|[ivxlc]+|${Object.keys(NUMBER_WORDS).join('|')})`
const UNIT_RUN = new RegExp(
  `\\b(${Object.keys(UNIT).join('|')})\\s+(${NUM}(?:\\s*(?:-|–|—|to|and|,|&)\\s*${NUM})*)\\b`,
  'g',
)
const ORDINAL_UNIT = /\b(first|second|third|fourth|fifth)\s+(stage|part|book|volume)\b/g

function romanValue(s: string): number | null {
  if (!/^[ivxlc]+$/.test(s)) return null
  const v: Record<string, number> = { i: 1, v: 5, x: 10, l: 50, c: 100 }
  let total = 0
  for (let i = 0; i < s.length; i++) {
    const cur = v[s[i]]
    const nxt = v[s[i + 1]] ?? 0
    total += cur < nxt ? -cur : cur
  }
  return total > 0 ? total : null
}

function numberValue(s: string): number | null {
  if (/^\d+$/.test(s)) return Number(s)
  if (s in NUMBER_WORDS) return NUMBER_WORDS[s]
  return romanValue(s)
}

/** "2 to 5" -> 2,3,4,5; "15 and 16" -> 15,16; "I-III" -> 1,2,3. */
function expandRun(run: string): number[] {
  const out: number[] = []
  const parts = run.split(/\s*(,|&|\band\b)\s*/).filter((p) => p && !/^(,|&|and)$/.test(p))
  for (const part of parts) {
    const range = part.split(/\s*(?:-|–|—|\bto\b)\s*/)
    const a = numberValue(range[0])
    const b = range.length > 1 ? numberValue(range[range.length - 1]) : a
    if (a === null || b === null) continue
    const [lo, hi] = a <= b ? [a, b] : [b, a]
    for (let n = lo; n <= hi && n - lo < 400; n++) out.push(n)
  }
  return out
}

/**
 * What a reference covers, unit by unit: "Act 1, Scenes 2 and 3" is
 * act {1}, scene {2, 3}; "Volume II, Chapter 11 (Chapter 34)" is volume {2},
 * chapter {11, 34}; "Couplet, lines 13-14" is couplet {1}, line {13, 14}.
 * Words that are not units ("the counting-house", a speaker's name) are
 * ignored. An empty map means the reference could not be read.
 */
export function whereUnits(where: string): Map<string, Set<number>> {
  const units = new Map<string, Set<number>>()
  const add = (unit: string, nums: number[]) => {
    if (nums.length === 0) return
    const set = units.get(unit) ?? new Set<number>()
    for (const n of nums) set.add(n)
    units.set(unit, set)
  }
  const text = where.toLowerCase().replace(/[‘’]/g, "'")
  for (const m of text.matchAll(ORDINAL_UNIT)) add(m[2], [NUMBER_WORDS[m[1]]])
  for (const m of text.matchAll(UNIT_RUN)) add(UNIT[m[1]], expandRun(m[2]))
  for (const bare of BARE) if (new RegExp(`\\b${bare}\\b`).test(text)) add(bare, [1])
  return units
}

/**
 * Might two references cover some of the same text? True when they are the
 * same, when either cannot be read, and when every unit they both name
 * overlaps: "Act 1, Scene 3" and "Act 1, Scene 4" are apart (same act, other
 * scenes), "Stanza 3, lines 9-10" and "Stanza 3, lines 10-12" are not (line
 * 10). References in different divisions entirely ("Prologue" and
 * "Act 1, Scene 1") are apart.
 */
export function wheresMayOverlap(a: string, b: string): boolean {
  if (a.trim().toLowerCase() === b.trim().toLowerCase()) return true
  const ua = whereUnits(a)
  const ub = whereUnits(b)
  if (ua.size === 0 || ub.size === 0) return true
  const shared = [...ua.keys()].filter((k) => ub.has(k))
  if (shared.length === 0) return false
  return shared.every((k) => [...ua.get(k)!].some((n) => ub.get(k)!.has(n)))
}

/**
 * Is a reference consistent with a held section whose title names units ("Act
 * I, Scene V", "Stave II: ...")? Unknown (null) when they share no unit.
 */
export function whereFitsSection(where: string, sectionTitle: string): boolean | null {
  const uw = whereUnits(where)
  const us = whereUnits(sectionTitle)
  const shared = [...uw.keys()].filter((k) => us.has(k))
  if (shared.length === 0) return null
  return shared.every((k) => [...uw.get(k)!].some((n) => us.get(k)!.has(n)))
}

// ── Methods ──────────────────────────────────────────────────────────────────

/** Words in a method's name that say what kind of thing it is, not which. */
const GENERIC_METHOD_WORDS = new Set([
  'imagery',
  'image',
  'images',
  'language',
  'use',
  'uses',
  'word',
  'words',
  'device',
  'devices',
  'technique',
  'form',
  'forms',
  'effect',
  'style',
  'turned',
  'against',
  'set',
  'sign',
  'map',
  'social',
])

/**
 * Methods close enough that one example can show both. A name is in a family
 * when one of its words starts with one of the family's prefixes.
 */
const METHOD_FAMILIES: readonly (readonly string[])[] = [
  ['metaphor', 'personif', 'analog', 'conceit', 'allegor', 'simile'],
  ['antithes', 'oxymor', 'paradox', 'juxtapos', 'contrast', 'chiasm', 'incongru', 'balanc'],
  [
    'repeti',
    'repeat',
    'anaphor',
    'refrain',
    'polysyndet',
    'accumul',
    'listing',
    'list$',
    'tricolon',
    'cumulat',
    'echo',
    'tag$',
  ],
  ['pun$', 'puns$', 'wordplay', 'quibbl', 'double', 'malaprop', 'riddl'],
  ['irony', 'ironic', 'satir', 'sarcas', 'mock', 'aside', 'soliloq', 'bathos'],
  ['symbol', 'motif', 'emblem'],
  ['pathetic', 'weather', 'storm', 'season', 'fog$', 'nature', 'natural'],
  [
    'narrat',
    'retrospect',
    'indirect',
    'perspective',
    'omniscient',
    'intrusive',
    'first$',
    'voice',
    'report',
    'free$',
  ],
  ['animal', 'dehuman', 'insect', 'bird', 'monster', 'hunt', 'beast', 'angling'],
  ['rhetor', 'question', 'interrog', 'apophasis', 'persuas'],
  [
    'allusion',
    'biblical',
    'classical',
    'religio',
    'mytholog',
    'providential',
    'prayer',
    'apocalyp',
    'diabol',
    'magical',
  ],
  [
    'sound',
    'alliterat',
    'assonan',
    'sibilan',
    'onomatop',
    'consonan',
    'rhyme',
    'rhyming',
    'rhythm',
    'monosyllab',
    'plosive',
    'lyrical',
    'musical',
  ],
  [
    'dialect',
    'idiolect',
    'register',
    'speech',
    'class$',
    'plain',
    'prose',
    'verse',
    'dialogue',
    'syntax',
    'sentence',
  ],
  ['imperative', 'command', 'modal'],
  ['hyperbol', 'exaggerat', 'bombast', 'heroic', 'understate', 'euphemis'],
  [
    'blood',
    'disease',
    'poison',
    'plague',
    'infect',
    'medical',
    'rot$',
    'decay',
    'appetite',
    'excess',
  ],
  [
    'light',
    'dark',
    'colour',
    'color',
    'fire',
    'shadow',
    'black',
    'white',
    'scarlet',
    'gold',
    'ice$',
  ],
  ['sea$', 'seas$', 'water', 'tide', 'ship', 'river', 'stream', 'melt', 'dissolv', 'flood'],
  ['eye', 'seeing', 'sight', 'blind', 'vision', 'mirror', 'reflect'],
  ['stage', 'metathea', 'theatr', 'acting', 'perform', 'play'],
  ['dramatic', 'foreshadow', 'prolep'],
]

/** Line numbers an example cites: "(line 14)", "lines 13 to 15". */
function citedLines(s: string): Set<number> {
  const out = new Set<number>()
  for (const m of s.toLowerCase().matchAll(/\blines?\s+(\d+)(?:\s*(?:-|–|to)\s*(\d+))?/g)) {
    const a = Number(m[1])
    const b = m[2] ? Number(m[2]) : a
    for (let n = Math.min(a, b); n <= Math.max(a, b) && n - a < 60; n++) out.add(n)
  }
  return out
}

/** Words quoted inside an example, as runs of normalised words. */
function quotedRuns(s: string): string[][] {
  const out: string[][] = []
  for (const m of s.matchAll(/“([^”]+)”|"([^"]+)"/g)) {
    const words = normForMatch(m[1] ?? m[2])
      .split(' ')
      .filter(Boolean)
    if (words.length) out.push(words)
  }
  return out
}

/** Do two runs share `n` consecutive words, or are they the same short run? */
function shareRun(a: string[], b: string[], n: number): boolean {
  if (a.join(' ') === b.join(' ')) return true
  if (a.length < n || b.length < n) return false
  const grams = new Set<string>()
  for (let i = 0; i + n <= a.length; i++) grams.add(a.slice(i, i + n).join(' '))
  for (let i = 0; i + n <= b.length; i++) if (grams.has(b.slice(i, i + n).join(' '))) return true
  return false
}

/**
 * Do two examples cite the same place: an act and scene, a chapter, a stanza?
 * Two methods illustrated from one exchange may both be in it: A Midsummer
 * Night's Dream's "eyes" example and its stichomythia example are both matched
 * lines from Act 1, Scene 1.
 */
function citesSamePlace(a: string, b: string): boolean {
  const ua = whereUnits(a)
  const ub = whereUnits(b)
  if (ua.size === 0 || ub.size === 0) return false
  const shared = [...ua.keys()].filter((k) => ub.has(k))
  // A whole act or book is too broad to mean one exchange: A Doll's House cites
  // only acts, and every pair of its examples shares one.
  if (!shared.some((k) => FINE_UNITS.has(k))) return false
  return shared.every((k) => [...ua.get(k)!].some((n) => ub.get(k)!.has(n)))
}

/** Units small enough that two examples citing the same one may be one passage. */
const FINE_UNITS = new Set([
  'scene',
  'chapter',
  'stanza',
  'line',
  'letter',
  'stave',
  'entry',
  'paragraph',
  'page',
  'quatrain',
  'section',
])

/**
 * Could the example given for `answer` also be read as an example of
 * `other`? Then `other` cannot be offered against it. True when the two
 * names share a key word or a family; when the examples cite a line or a
 * place in common, or quote the same words; when the other example discusses
 * two or more of the words this one quotes (a sound example that lists the
 * rhyme words an imagery example quotes); or when this example uses a key word
 * of the other method's name:
 * A Midsummer Night's Dream's personification example describes "the moon",
 * so "Moon imagery" cannot be offered against it.
 */
export function methodsMayOverlap(
  answer: { technique: string; example: string },
  other: { technique: string; example: string },
): boolean {
  if (answer.technique.trim().toLowerCase() === other.technique.trim().toLowerCase()) return true
  if (sharesKeyTerm(answer.technique, other.technique, GENERIC_METHOD_WORDS)) return true
  if (shareFamily(answer.technique, other.technique, METHOD_FAMILIES)) return true
  const la = citedLines(answer.example)
  for (const n of citedLines(other.example)) if (la.has(n)) return true
  if (citesSamePlace(answer.example, other.example)) return true
  const qa = quotedRuns(answer.example)
  for (const rb of quotedRuns(other.example)) if (qa.some((ra) => shareRun(ra, rb, 2))) return true
  const quotedStems = new Set(
    qa
      .flat()
      .filter((w) => w.length >= 3 && !isStopWord(w))
      .map(stem),
  )
  const discussed = new Set(keyTerms(other.example).map(stem))
  if ([...quotedStems].filter((s) => discussed.has(s)).length >= 2) return true
  const exampleStems = new Set(keyTerms(answer.example).map(stem))
  if (keyTerms(other.technique, GENERIC_METHOD_WORDS).some((w) => exampleStems.has(stem(w))))
    return true
  return false
}

// ── Relationships ────────────────────────────────────────────────────────────

/** Words that describe so many pairs that, offered as a wrong answer, they may be right. */
const LOOSE_RELATION_WORDS = [
  'friend',
  'enem',
  'rival',
  'ally',
  'allies',
  'lover',
  'foe',
  'companion',
  'acquaint',
  'kinsm',
  'kinsw',
  'kindred',
  'opponent',
  'stranger',
]

/** Kinds of relationship one pair can hold several of at once. */
const RELATION_FAMILIES: readonly (readonly string[])[] = [
  [
    'husband',
    'wife',
    'wives',
    'marri',
    'spouse',
    'bride',
    'groom',
    'betroth',
    'fianc',
    'suitor',
    'woo$',
    'wooer',
    'wooing',
    'lover',
    'love',
    'sweetheart',
    'courtship',
    'widow',
    'engaged',
    'romanc',
    'romantic',
  ],
  [
    'father',
    'mother',
    'son$',
    'sons$',
    'daughter',
    'brother',
    'sister',
    'sibling',
    'cousin',
    'uncle',
    'aunt',
    'nephew',
    'niece',
    'parent',
    'child',
    'kinsm',
    'kinsw',
    'kindred',
    'family',
    'grand',
    'heir',
    'twin',
    'guardian',
    'ward$',
    'adopt',
    'step',
  ],
  [
    'king',
    'queen',
    'prince',
    'duke',
    'duchess',
    'lord',
    'master',
    'mistress',
    'servant',
    'subject',
    'thane',
    'ruler',
    'emperor',
    'employ',
    'clerk',
    'general',
    'soldier',
    'officer',
    'captain',
    'command',
    'courtier',
    'patron',
    'maid',
    'slave',
    'owner',
    'tenant',
    'landlord',
    'boss',
    'host',
    'guest',
  ],
  [
    'enem',
    'rival',
    'foe$',
    'foes$',
    'murder',
    'victim',
    'kill',
    'opponent',
    'antagonist',
    'betray',
    'traitor',
    'aveng',
    'revenge',
    'persecut',
    'torment',
    'bully',
    'captor',
    'prisoner',
    'hunter',
    'prey',
  ],
  [
    'friend',
    'companion',
    'ally',
    'allies',
    'confidant',
    'mentor',
    'guide',
    'advis',
    'counsel',
    'teacher',
    'pupil',
    'student',
    'tutor',
    'governess',
    'nurse',
    'protector',
    'helper',
    'comrade',
    'fellow',
  ],
  ['prophet', 'prophec', 'witch', 'spirit', 'ghost', 'creator', 'creature', 'maker'],
]

/**
 * May `kind` be offered as a wrong answer at all? Not when it is a single word,
 * or loose enough ("friends", "enemies", "rivals") to be true of many pairs.
 */
export function relationKindIsSpecific(kind: string): boolean {
  const terms = keyTerms(kind)
  if (terms.length < 2) return false
  return !wordsOf(kind).some((w) => LOOSE_RELATION_WORDS.some((p) => matchesEntry(w, p)))
}

/** Could one pair be described both ways? Shared key words, or one family. */
export function relationsMayOverlap(a: string, b: string): boolean {
  if (a.trim().toLowerCase() === b.trim().toLowerCase()) return true
  if (sharesKeyTerm(a, b)) return true
  return shareFamily(a, b, RELATION_FAMILIES)
}

// ── Themes ───────────────────────────────────────────────────────────────────

/** Two theme names that share a key word ("Guilt" and "Guilt and Conscience"). */
export function themesMayOverlap(a: string, b: string): boolean {
  if (a.trim().toLowerCase() === b.trim().toLowerCase()) return true
  return sharesKeyTerm(a, b)
}
