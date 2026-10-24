/**
 * Build one text's quest from its study guide, its comic registry and the
 * guided path the text-games builder makes from them. Pure: the same inputs
 * always give the same quest, on the server and in the tests.
 *
 * WHERE EACH CHALLENGE COMES FROM
 *
 *   item          the text-games builder's own items (who, where, finish,
 *                 method, theme, and story order), unchanged but for one
 *                 thing: a "where is this from?" question asked in a part
 *                 draws its wrong places from inside that part (localWhere
 *                 below), each still a place the guide gives that cannot
 *                 overlap the answer
 *   panel-line    a comic panel's verbatim quotation (src/data/comics), against
 *   line-panel    other panels' quotations, from moments that cannot be the
 *                 same place (wheresMayOverlap)
 *   rebuild       a quotation the guide or a panel prints, word for word
 *   whose         a portrait marker's phrase, against other portraits' names
 *   marker        the same phrase, against the other markers on its portrait
 *   theme-check   a moment's own themes ("yes") or a guide theme that cannot
 *                 overlap any of them ("no"), as themesMayOverlap rules
 *   evidence      a key quotation's own analysis, its quotation of the line
 *                 elided, against quotations the guided path already asks
 *                 about (24 October 2026; buildEvidence below)
 *
 * A TEXT IN COPYRIGHT gets no comic challenges (the comics are public-domain
 * texts only) and its quotations are exactly those its guided path already
 * carries, so the quest quotes nothing the fair-dealing measure (quoted.ts) has
 * not passed. src/__tests__/a-text-quest-is-built-from-checked-material.test.ts
 * holds every quest to that.
 */

import type { ComicSet } from '@/lib/comics/types'
import { buildTextGame, type HeldEdition } from '@/lib/games/text-games/build'
import { hashSeed, rng, seededPick } from '@/lib/games/text-games/seed'
import {
  isStopWord,
  normForMatch,
  stem,
  themesMayOverlap,
  whereUnits,
  wheresMayOverlap,
  wordsOf,
} from '@/lib/games/text-games/text'
import type { GameArt, GameItem, MomentRef, OrderItem } from '@/lib/games/text-games/types'
import type { StudyGuide } from '@/lib/study-guides/types'

import { pickVaried } from './deal'
import type {
  Challenge,
  EvidenceChallenge,
  Level,
  LinePanelChallenge,
  MarkerChallenge,
  PanelLineChallenge,
  Quest,
  QuestArt,
  RebuildChallenge,
  ThemeCheckChallenge,
  WhoseChallenge,
} from './types'

export interface QuestInput {
  guide: StudyGuide
  /** The text's comic registry, or null for a text with none. */
  comics: ComicSet | null
  /** Every served panel and portrait the text has, as the text-games loader gives them. */
  art: GameArt
  held?: HeldEdition | null
}

/** A public-domain quest keeps every item the guide supports, up to this. */
export const QUEST_POOL_MAX = 200
/** A quotation is rebuilt from its words when it has this many, and no more than REBUILD_MAX. */
export const REBUILD_MIN = 4
export const REBUILD_MAX = 15
/** The fewest challenges a chapter level is worth playing with. */
export const MIN_CHAPTER = 4
/** A story-order card set: at most this many moments. */
export const SEQUENCE_MAX = 5

/**
 * How many chapters a text of `n` key moments is split into: chapters of four
 * or five moments, three at least once there are nine, six at most.
 */
export function chapterCount(n: number): number {
  if (n < 6) return 1
  if (n < 9) return 2
  return Math.min(6, Math.max(3, Math.round(n / 4.5)))
}

/** The chapter (1-based) a moment falls in, the moments shared out evenly. */
export function chapterOf(index: number, n: number, chapters: number): number {
  return Math.min(chapters, Math.floor((index * chapters) / n) + 1)
}

function momentRefs(guide: StudyGuide, art: GameArt): MomentRef[] {
  return guide.timeline.map((m, index) => ({
    index,
    title: m.title,
    where: m.where,
    significance: m.significance,
    ...(art.panels[m.title] ? { panel: m.title } : {}),
  }))
}

/** Wrong options, distinct from each other and from the answer: up to three, at least two. */
function wrongFrom(candidates: string[], answer: string, seed: number): string[] | null {
  const seen = new Set([normForMatch(answer)])
  const unique: string[] = []
  for (const c of candidates) {
    const k = normForMatch(c)
    if (!k || seen.has(k)) continue
    seen.add(k)
    unique.push(c)
  }
  if (unique.length < 2) return null
  return seededPick(unique, 3, seed)
}

/** A quotation's words, punctuation kept with the word it follows. */
export function quoteWords(quote: string): string[] {
  return quote.trim().split(/\s+/).filter(Boolean)
}

// ── Comic challenges ─────────────────────────────────────────────────────────

interface PanelLine {
  moment: MomentRef
  quote: string
}

/** Each panel that carries a quotation, on a moment the guide's timeline has, in the text's order. */
function panelLines(comics: ComicSet | null, moments: MomentRef[]): PanelLine[] {
  if (!comics) return []
  const byTitle = new Map(moments.map((m) => [m.title, m]))
  const out: PanelLine[] = []
  for (const p of comics.panels) {
    const moment = byTitle.get(p.moment)
    if (moment && p.quote && normForMatch(p.quote)) out.push({ moment, quote: p.quote })
  }
  // A line two panels share could not be the answer for either of them.
  const counts = new Map<string, number>()
  for (const l of out)
    counts.set(normForMatch(l.quote), (counts.get(normForMatch(l.quote)) ?? 0) + 1)
  return out
    .filter((l) => counts.get(normForMatch(l.quote)) === 1)
    .sort((a, b) => a.moment.index - b.moment.index)
}

/** Lines from moments that could not be the same place as `moment`. */
function elsewhere(lines: PanelLine[], moment: MomentRef): PanelLine[] {
  return lines.filter(
    (l) => l.moment.index !== moment.index && !wheresMayOverlap(l.moment.where, moment.where),
  )
}

function buildPanelLines(slug: string, lines: PanelLine[]): PanelLineChallenge[] {
  const out: PanelLineChallenge[] = []
  for (const l of lines) {
    const wrong = wrongFrom(
      elsewhere(lines, l.moment).map((o) => o.quote),
      l.quote,
      hashSeed(slug, 'panel-line', l.moment.index),
    )
    if (!wrong) continue
    out.push({
      type: 'panel-line',
      id: `panel-line:${l.moment.index}`,
      moment: l.moment,
      options: [l.quote, ...wrong],
      answer: l.quote,
    })
  }
  return out
}

function buildLinePanels(slug: string, lines: PanelLine[]): LinePanelChallenge[] {
  const out: LinePanelChallenge[] = []
  for (const l of lines) {
    const wrong = wrongFrom(
      elsewhere(lines, l.moment).map((o) => o.moment.title),
      l.moment.title,
      hashSeed(slug, 'line-panel', l.moment.index),
    )
    if (!wrong) continue
    out.push({
      type: 'line-panel',
      id: `line-panel:${l.moment.index}`,
      quote: l.quote,
      options: [l.moment.title, ...wrong],
      answer: l.moment.title,
      moment: l.moment,
    })
  }
  return out
}

function buildWhose(slug: string, comics: ComicSet | null): WhoseChallenge[] {
  const portraits = comics?.portraits ?? []
  if (portraits.length < 3) return []
  // A phrase two portraits share could not be one character's.
  const phraseCount = new Map<string, number>()
  for (const p of portraits)
    for (const m of p.describedBy)
      phraseCount.set(normForMatch(m.phrase), (phraseCount.get(normForMatch(m.phrase)) ?? 0) + 1)
  const out: WhoseChallenge[] = []
  portraits.forEach((p, pi) => {
    p.describedBy.forEach((m, mi) => {
      if (phraseCount.get(normForMatch(m.phrase)) !== 1) return
      const wrong = wrongFrom(
        portraits.filter((o) => o.name !== p.name).map((o) => o.name),
        p.name,
        hashSeed(slug, 'whose', pi, mi),
      )
      if (!wrong) return
      out.push({
        type: 'whose',
        id: `whose:${pi}:${mi}`,
        phrase: m.phrase,
        where: p.where,
        options: [p.name, ...wrong],
        answer: p.name,
        ...(p.note ? { explanation: p.note } : {}),
      })
    })
  })
  return out
}

/** Portraits with three or more markers: a tap among two is a coin toss. */
export const MARKER_MIN = 3

function buildMarkers(comics: ComicSet | null): MarkerChallenge[] {
  const out: MarkerChallenge[] = []
  for (const p of comics?.portraits ?? []) {
    if (p.describedBy.length < MARKER_MIN) continue
    const distinct = new Set(p.describedBy.map((m) => normForMatch(m.phrase)))
    if (distinct.size !== p.describedBy.length) continue
    p.describedBy.forEach((m, i) => {
      out.push({
        type: 'marker',
        id: `marker:${p.name}:${i}`,
        portrait: p.name,
        phrase: m.phrase,
        answer: i + 1,
        where: p.where,
        ...(p.note ? { explanation: p.note } : {}),
      })
    })
  }
  return out
}

// ── Challenges from the guide ────────────────────────────────────────────────

/**
 * Quotations to rebuild: a panel's line (public-domain texts only) and every
 * quotation the guided path already asks about. Nothing else, so a text in
 * copyright quotes nothing its path does not.
 */
function buildRebuilds(
  guide: StudyGuide,
  lines: PanelLine[],
  items: GameItem[],
  moments: MomentRef[],
): RebuildChallenge[] {
  const out: RebuildChallenge[] = []
  const seen = new Set<string>()
  const add = (quote: string, where: string, explanation: string, moment?: MomentRef) => {
    const words = quoteWords(quote)
    if (words.length < REBUILD_MIN || words.length > REBUILD_MAX) return
    const k = normForMatch(quote)
    if (!k || seen.has(k)) return
    seen.add(k)
    out.push({
      type: 'rebuild',
      id: `rebuild:${out.length}:${k.slice(0, 24)}`,
      quote,
      words,
      where,
      explanation,
      ...(moment ? { moment } : {}),
    })
  }
  if (guide.rights.status !== 'copyright')
    for (const l of lines) add(l.quote, l.moment.where, l.moment.significance, l.moment)
  for (const it of items) {
    if (it.kind !== 'where' && it.kind !== 'finish') continue
    const moment = it.moment ? moments[it.moment.index] : undefined
    add(it.quote, it.where ?? moment?.where ?? '', it.explanation, moment)
  }
  return out
}

/** The fewest words a point keeps once its quotations are elided: below it, there is nothing left to match. */
export const EVIDENCE_MIN_WORDS = 12

/** A quotation inside an analysis: in double, curly or single quotation marks. */
const QUOTED_IN_ANALYSIS =
  /[\u201c"][^\u201d"]+?[\u201d"]|\u2018[^\u2019]+?\u2019|'[^']{2,}?'(?![a-z])/g

/** Content words worth comparing: four letters or more, not a stop word, by stem. */
function contentStems(s: string): Set<string> {
  return new Set(
    wordsOf(s)
      .filter((w) => w.length >= 4 && !isStopWord(w))
      .map(stem),
  )
}

/** The fewest words a quotation needs to be offered, as the answer or as a wrong option. */
export const EVIDENCE_MIN_QUOTE_WORDS = 3

/**
 * Evidence challenges, from the guide's key quotations and their analyses.
 *
 * Only a quotation the guided path already asks about (a "where" or
 * "finish" question) is used, as answer or as wrong option: those are located
 * in the held edition where there is one, and for a text in copyright they are
 * exactly what its measured path quotes, so this quotes nothing new.
 *
 * The point is the analysis with every quotation in it elided. It is asked
 * only where nothing of the line is left in it (no content word of four
 * letters or more survives: "Henna does fade within weeks" gave away "fade
 * in a week") and EVIDENCE_MIN_WORDS words remain. Every option is a
 * quotation of EVIDENCE_MIN_QUOTE_WORDS words or more. A wrong option shares
 * no content word with the point, so it cannot be argued to bear it out, and
 * the three are the nearest in length to the answer, so length does not give
 * it away.
 */
function buildEvidence(guide: StudyGuide, items: GameItem[]): EvidenceChallenge[] {
  // A line the guide reads twice (a refrain, an opening line that returns at
  // the end) has two readings, either of which would be the point: not asked.
  const times = new Map<string, number>()
  for (const k of guide.keyQuotes ?? [])
    times.set(normForMatch(k.text), (times.get(normForMatch(k.text)) ?? 0) + 1)
  const analysed = new Map<string, { analysis: string }>()
  for (const k of guide.keyQuotes ?? [])
    if (k.analysis && times.get(normForMatch(k.text)) === 1)
      analysed.set(normForMatch(k.text), { analysis: k.analysis })
  const asked: { quote: string; where: string }[] = []
  const seen = new Set<string>()
  for (const it of items) {
    if (it.kind !== 'where' && it.kind !== 'finish') continue
    const k = normForMatch(it.quote)
    if (!k || seen.has(k)) continue
    seen.add(k)
    if (wordsOf(it.quote).length < EVIDENCE_MIN_QUOTE_WORDS) continue
    asked.push({ quote: it.quote, where: it.where ?? '' })
  }
  const out: EvidenceChallenge[] = []
  for (const a of asked) {
    const key = normForMatch(a.quote)
    const found = analysed.get(key)
    if (!found) continue
    const point = found.analysis.replace(QUOTED_IN_ANALYSIS, '\u2026').replace(/\s+/g, ' ').trim()
    if (wordsOf(point).length < EVIDENCE_MIN_WORDS) continue
    const line = contentStems(a.quote)
    const pointStems = contentStems(point)
    if ([...line].some((w) => pointStems.has(w))) continue
    const wrong = asked
      .filter((o) => {
        const k = normForMatch(o.quote)
        if (k === key || k.includes(key) || key.includes(k)) return false
        return ![...contentStems(o.quote)].some((w) => pointStems.has(w))
      })
      .sort(
        (x, y) =>
          Math.abs(x.quote.length - a.quote.length) - Math.abs(y.quote.length - a.quote.length),
      )
      .slice(0, 6)
      .map((o) => o.quote)
    if (wrong.length < 2) continue
    const picked = seededPick(wrong, 3, hashSeed(guide.slug, 'evidence', key))
    out.push({
      type: 'evidence',
      id: `evidence:${key.slice(0, 32)}`,
      point,
      options: [a.quote, ...picked],
      answer: a.quote,
      where: a.where,
      explanation: found.analysis,
    })
  }
  return out
}

function buildThemeChecks(
  slug: string,
  guide: StudyGuide,
  moments: MomentRef[],
): ThemeCheckChallenge[] {
  const tl = guide.timeline
  const universe =
    guide.themes && guide.themes.length > 0
      ? guide.themes.map((t) => t.title)
      : [...new Set(tl.flatMap((m) => m.themes))]
  const out: ThemeCheckChallenge[] = []
  tl.forEach((m, i) => {
    if (m.themes.length === 0) return
    const next = rng(hashSeed(slug, 'theme-check', i))
    const carried = m.themes[Math.floor(next() * m.themes.length)]
    out.push({
      type: 'theme-check',
      id: `theme-check:${i}:yes`,
      moment: moments[i],
      theme: carried,
      answer: true,
      carries: m.themes.slice(),
    })
    const absent = universe.filter((u) => !m.themes.some((c) => themesMayOverlap(c, u)))
    if (absent.length > 0) {
      out.push({
        type: 'theme-check',
        id: `theme-check:${i}:no`,
        moment: moments[i],
        theme: absent[Math.floor(next() * absent.length)],
        answer: false,
        carries: m.themes.slice(),
      })
    }
  })
  return out
}

/** A story-order set of up to SEQUENCE_MAX moments from `indices`, spread across them. */
function sequenceOf(id: string, indices: number[], moments: MomentRef[]): OrderItem | null {
  if (indices.length < 3) return null
  const k = Math.min(SEQUENCE_MAX, indices.length)
  const picks: number[] = []
  for (let s = 0; s < k; s++) picks.push(indices[Math.floor((s * indices.length) / k)])
  // Two cards with one title could not be told apart.
  if (new Set(picks.map((i) => moments[i].title)).size !== picks.length) return null
  return { kind: 'order', id, moments: picks.map((i) => moments[i]) }
}

// ── The quest ────────────────────────────────────────────────────────────────

const item = (it: GameItem): Challenge => ({ type: 'item', id: `item:${it.id}`, item: it })

/** The most challenges a level's pool keeps: several plays' worth, varied. */
export const POOL_CAP: Record<'chapter' | 'cast' | 'craft', number> = {
  chapter: 20,
  cast: 30,
  craft: 12,
}

/** The moment a challenge is about, when it is about one. */
export function momentOf(c: Challenge): MomentRef | undefined {
  switch (c.type) {
    case 'item':
      return c.item.kind === 'where' || c.item.kind === 'finish' || c.item.kind === 'theme'
        ? c.item.moment
        : undefined
    case 'panel-line':
    case 'line-panel':
    case 'theme-check':
      return c.moment
    case 'rebuild':
      return c.moment
    default:
      return undefined
  }
}

/**
 * Which moment's chapter a challenge is asked in. Its own moment where it has
 * one; otherwise, for a quotation the guide places by act or chapter but not
 * in its timeline, the first moment whose place it could be. This only decides
 * WHEN a question is asked, never what its answer is.
 *
 * A place neither side can read decides nothing (24 October 2026).
 * wheresMayOverlap says "may overlap" for a reference it cannot read, which
 * is right for keeping wrong options apart and wrong here: every such
 * quotation landed in the first part it was compared with, 285 of the 1,423
 * placed by reference, so DNA's Part 1 quoted Acts Three and Four. Such a
 * quotation is now asked in no part.
 */
function placeOf(c: Challenge, moments: MomentRef[]): number | undefined {
  const own = momentOf(c)
  if (own) return own.index
  const where =
    c.type === 'item' && (c.item.kind === 'where' || c.item.kind === 'finish')
      ? c.item.where
      : c.type === 'rebuild' || c.type === 'evidence'
        ? c.where
        : undefined
  if (!where || whereUnits(where).size === 0) return undefined
  return moments.find((m) => whereUnits(m.where).size > 0 && wheresMayOverlap(where, m.where))
    ?.index
}

/**
 * A "where is this from?" question as a part asks it: its wrong places drawn
 * from inside the part (24 October 2026). The map labels each part by where
 * it runs in the text ("From Act 1, Scene 1 to Act 1, Scene 5"), so a wrong
 * place from another part would be ruled out by the label alone. Places come
 * from the same family of references as the question's own (a key quotation's
 * against key quotations', a scene card's against scene cards'), as the
 * text-games builder keeps them, since the two are written differently. A
 * question its part cannot give two such places is not asked in the part.
 */
function localWhere(
  c: Challenge,
  partWheres: string[],
  family: Map<string, string[]>,
  seed: number,
): Challenge | null {
  if (c.type !== 'item' || c.item.kind !== 'where') return c
  const it = c.item
  const kin = family.get(familyOfWhere(it.id)) ?? []
  const inPart = (w: string) =>
    whereUnits(w).size > 0 &&
    partWheres.some((p) => whereUnits(p).size > 0 && wheresMayOverlap(w, p))
  const seen = new Set<string>([normForMatch(it.answer)])
  const candidates: string[] = []
  for (const w of kin) {
    const k = normForMatch(w)
    if (seen.has(k)) continue
    seen.add(k)
    if (!wheresMayOverlap(w, it.answer) && inPart(w)) candidates.push(w)
  }
  if (candidates.length < 2) return null
  const wrong = seededPick(candidates, 3, seed)
  return { ...c, item: { ...it, options: [it.answer, ...wrong] } }
}

/** A where question's family of references: its source key's prefix ("kq", "tl"). */
function familyOfWhere(id: string): string {
  return id.replace(/^where:/, '').split(':')[0]
}

interface Pools {
  chapter: Challenge[]
  cast: Challenge[]
  craft: Challenge[]
  orders: Challenge[]
}

function assemble(
  slug: string,
  chapters: number,
  moments: MomentRef[],
  pools: Pools,
): { levels: Level[]; kept: Challenge[] } | null {
  const n = moments.length
  const kept = new Map<string, Challenge>()
  const keep = (list: Challenge[]) => {
    list.forEach((c) => kept.set(c.id, c))
    return list.map((c) => c.id)
  }
  // Every place each family of where questions offers, for localWhere.
  const family = new Map<string, string[]>()
  for (const ch of pools.chapter) {
    if (ch.type !== 'item' || ch.item.kind !== 'where') continue
    const f = familyOfWhere(ch.item.id)
    family.set(f, [...(family.get(f) ?? []), ...ch.item.options])
  }
  const chapterLevels: Level[] = []
  for (let c = 1; c <= chapters; c++) {
    const indices = moments.filter((m) => chapterOf(m.index, n, chapters) === c).map((m) => m.index)
    const partWheres = indices.map((i) => moments[i].where)
    const inChapter = pools.chapter
      .filter((ch) => {
        const at = placeOf(ch, moments)
        return at !== undefined && chapterOf(at, n, chapters) === c
      })
      .map((ch) => localWhere(ch, partWheres, family, hashSeed(slug, 'where-local', ch.id)))
      .filter((ch): ch is Challenge => ch !== null)
    const seq = sequenceOf(`order:chapter-${c}`, indices, moments)
    const all = [...(seq ? [item(seq)] : []), ...inChapter]
    if (all.length < MIN_CHAPTER) return null
    chapterLevels.push({
      id: `chapter-${c}`,
      kind: 'chapter',
      chapter: c,
      span: { from: moments[indices[0]].title, to: moments[indices[indices.length - 1]].title },
      ...(moments[indices[0]].where.trim() && moments[indices[indices.length - 1]].where.trim()
        ? {
            where: {
              from: moments[indices[0]].where.trim(),
              to: moments[indices[indices.length - 1]].where.trim(),
            },
          }
        : {}),
      pool: keep(pickVaried(all, POOL_CAP.chapter, hashSeed(slug, 'pool', c), {})),
      panels: indices.filter((i) => moments[i].panel).map((i) => moments[i].title),
    })
  }
  const castLevel: Level | null =
    pools.cast.length >= MIN_CHAPTER
      ? {
          id: 'cast',
          kind: 'cast',
          pool: keep(pickVaried(pools.cast, POOL_CAP.cast, hashSeed(slug, 'pool', 'cast'), {})),
          panels: [],
        }
      : null
  const craftLevel: Level | null =
    pools.craft.length >= 3
      ? {
          id: 'craft',
          kind: 'craft',
          pool: keep(pickVaried(pools.craft, POOL_CAP.craft, hashSeed(slug, 'pool', 'craft'), {})),
          panels: [],
        }
      : null
  // The path: two chapters, the cast, two more, the craft, the rest, the finale.
  const levels: Level[] = []
  chapterLevels.forEach((l, i) => {
    levels.push(l)
    if (i === Math.min(1, chapterLevels.length - 1) && castLevel) levels.push(castLevel)
    if (i === Math.min(3, chapterLevels.length - 1) && craftLevel) levels.push(craftLevel)
  })
  // The finale: the whole-text story orders, every other level's pool except
  // the chapters' own story orders, and anything placed in no chapter.
  const unplaced = pools.chapter.filter((c) => placeOf(c, moments) === undefined)
  const finalePool = [
    ...keep(pools.orders),
    ...levels.flatMap((l) => l.pool.filter((id) => !id.startsWith('item:order:chapter'))),
    ...keep(unplaced.slice(0, POOL_CAP.chapter)),
  ]
  levels.push({ id: 'finale', kind: 'finale', pool: [...new Set(finalePool)], panels: [] })
  return { levels, kept: [...kept.values()] }
}

export function buildQuest({ guide, comics, art, held = null }: QuestInput): Quest {
  const game = buildTextGame({ guide, art, held, poolMax: QUEST_POOL_MAX })
  const moments = momentRefs(guide, art)
  const items = game.rounds.flatMap((r) => r.items)
  const publicDomain = guide.rights.status !== 'copyright'
  const lines = publicDomain ? panelLines(comics, moments) : []

  const pools: Pools = {
    chapter: [
      ...items
        .filter((i) => i.kind === 'where' || i.kind === 'finish' || i.kind === 'theme')
        .map(item),
      ...buildPanelLines(guide.slug, lines),
      ...buildLinePanels(guide.slug, lines),
      ...buildRebuilds(guide, lines, items, moments),
      ...buildThemeChecks(guide.slug, guide, moments),
      ...buildEvidence(guide, items),
    ],
    cast: [
      ...items.filter((i) => i.kind === 'who').map(item),
      ...(publicDomain ? buildWhose(guide.slug, comics) : []),
      ...(publicDomain ? buildMarkers(comics) : []),
    ],
    craft: items.filter((i) => i.kind === 'method').map(item),
    orders: items.filter((i) => i.kind === 'order').map(item),
  }

  // Fewer chapters until each has enough to play: a short or thinly quoted
  // text gets one longer chapter rather than a thin one.
  let built: { levels: Level[]; kept: Challenge[] } | null = null
  for (let c = chapterCount(moments.length); c >= 1 && !built; c--) {
    built = assemble(guide.slug, c, moments, pools)
  }
  if (!built) {
    const everything = [...pools.orders, ...pools.chapter, ...pools.cast, ...pools.craft]
    const finale = pickVaried(
      everything,
      POOL_CAP.chapter * 2,
      hashSeed(guide.slug, 'pool', 'finale'),
      {},
    )
    built = {
      levels: [{ id: 'finale', kind: 'finale', pool: finale.map((c) => c.id), panels: [] }],
      kept: finale,
    }
  }
  // A text in copyright has no comic to collect: an inked panel prints its
  // quotation, and such a quest quotes nothing its measured path does not.
  // No text in copyright has a comic today (they are drawn only for texts out
  // of copyright), so this holds the rule rather than trusting the data.
  if (!publicDomain) for (const level of built.levels) level.panels = []

  return {
    slug: guide.slug,
    title: guide.title,
    author: guide.author,
    levels: built.levels,
    challenges: built.kept.map(slim),
    moments,
    art: questArt(built.levels, built.kept, moments, comics, art),
    hasComic: publicDomain && moments.some((m) => m.panel),
    ...(game.acknowledgement ? { acknowledgement: game.acknowledgement } : {}),
  }
}

/**
 * A moment inside a challenge, slimmed: its significance is the longest thing
 * it carries, and a story-order challenge carries five moments, so each copy
 * of it is blanked here and the player reads it once from Quest.moments by
 * index (see SLIM in ./types.ts). A quest was 548 KB for Animal Farm before
 * challenges were stored once and moments slimmed; the test holds every
 * quest under 160 KB.
 */
function slimMoment<T extends MomentRef | undefined>(m: T): T {
  return (m ? { ...m, significance: '' } : m) as T
}

function slim(c: Challenge): Challenge {
  switch (c.type) {
    case 'item': {
      const it = c.item
      if (it.kind === 'order') return { ...c, item: { ...it, moments: it.moments.map(slimMoment) } }
      if (it.kind === 'where' || it.kind === 'finish')
        return { ...c, item: { ...it, moment: slimMoment(it.moment) } }
      if (it.kind === 'theme') return { ...c, item: { ...it, moment: slimMoment(it.moment) } }
      return c
    }
    case 'panel-line':
    case 'line-panel':
    case 'theme-check':
      return { ...c, moment: slimMoment(c.moment) }
    case 'rebuild':
      return { ...c, moment: slimMoment(c.moment) }
    default:
      return c
  }
}

/** Only the art some challenge or a chapter's comic uses, and the marker positions a marker challenge needs. */
function questArt(
  levels: Level[],
  challenges: Challenge[],
  moments: MomentRef[],
  comics: ComicSet | null,
  art: GameArt,
): QuestArt {
  const panels = new Set<string>()
  const portraits = new Set<string>()
  const markers: QuestArt['markers'] = {}
  const addMoment = (m?: MomentRef) => {
    if (m?.panel) panels.add(m.panel)
  }
  for (const level of levels) level.panels.forEach((p) => panels.add(p))
  for (const c of challenges) {
    if (c.type === 'item') {
      const it = c.item
      if (it.kind === 'order') it.moments.forEach(addMoment)
      else if (it.kind === 'where' || it.kind === 'finish' || it.kind === 'theme')
        addMoment(it.moment)
      else if (it.kind === 'who' && it.mode === 'role' && it.portrait) portraits.add(it.portrait)
      else if (it.kind === 'who' && it.mode === 'relation')
        it.portraits.forEach((p) => portraits.add(p))
    } else if (c.type === 'panel-line' || c.type === 'theme-check') addMoment(c.moment)
    else if (c.type === 'line-panel') {
      c.options.forEach((title) => addMoment(moments.find((m) => m.title === title)))
    } else if (c.type === 'rebuild') addMoment(c.moment)
    else if (c.type === 'whose') c.options.forEach((name) => portraits.add(name))
    else if (c.type === 'marker') {
      portraits.add(c.portrait)
      if (!markers[c.portrait]) {
        const p = comics?.portraits.find((x) => x.name === c.portrait)
        if (p)
          markers[c.portrait] = {
            width: p.art.width,
            height: p.art.height,
            at: p.describedBy.map((m) => m.at),
          }
      }
    }
  }
  return {
    panels: Object.fromEntries(
      [...panels].filter((k) => art.panels[k]).map((k) => [k, art.panels[k]]),
    ),
    // The passage and the art note are for the gallery; no challenge shows them.
    portraits: Object.fromEntries(
      [...portraits]
        .filter((k) => art.portraits[k])
        .map((k) => {
          const { passage: _passage, artNote: _artNote, ...card } = art.portraits[k]
          return [k, card]
        }),
    ),
    markers,
  }
}
