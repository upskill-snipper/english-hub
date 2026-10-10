/**
 * Build one text's guided path from its study guide and comic art. Pure: the
 * same guide, art and held edition always give the same path, on the server,
 * in the tests and anywhere else.
 *
 * Each round is built only from the guide fields named below and is left out
 * when the guide lacks them, so a path never pads a round with anything the
 * guide does not say:
 *
 *   who     characters[].name/role, else relationships (from, to, kind, note)
 *   order   timeline, in the guide's order, which is the text's
 *   where   keyQuotes (text, where, analysis), else the scene cards' quotations
 *   finish  the same quotations, one word missing
 *   method  languageAnalysis (technique, example, effect)
 *   theme   timeline themes, against the guide's other themes
 *
 * Wrong options are other entries of the same guide, filtered so that none of
 * them could also be right: see text.ts for each rule and the case behind it.
 * A question that cannot get at least two safe wrong options is not asked.
 */

import type { GuideQuote, StudyGuide } from '@/lib/study-guides/types'

import { hashSeed, rng, seededPick, seededShuffle } from './seed'
import {
  isStopWord,
  methodsMayOverlap,
  normForMatch,
  occurrences,
  openingSentences,
  quoteFragments,
  relationKindIsSpecific,
  relationsMayOverlap,
  stem,
  themesMayOverlap,
  wheresMayOverlap,
  whereFitsSection,
  wordsOf,
} from './text'
import type {
  FinishItem,
  GameArt,
  GameItem,
  MethodItem,
  MomentRef,
  OrderItem,
  Round,
  RoundKind,
  TextGame,
  ThemeItem,
  WhereItem,
  WhoRelationItem,
  WhoRoleItem,
} from './types'
import { ROUND_KINDS } from './types'

/** The most items a round keeps: enough for a second play to differ, few enough to keep the page light. */
export const POOL_MAX = 10
/** Story-order puzzles kept per text. */
export const ORDER_POOL_MAX = 4
/** The answer and three wrong options at most; two wrong options at least. */
export const MAX_OPTIONS = 4
export const MIN_OPTIONS = 3
/** Fewer items than this and a choice round is not worth offering. */
export const MIN_ITEMS = 3

/** One section of a held edition, its text normalised for matching (normForMatch). */
export interface HeldSection {
  title: string
  text: string
}

/** The site's held copy of a public-domain text (src/data/full-texts), normalised for matching. */
export interface HeldEdition {
  sections: HeldSection[]
  /** Every section, joined so that no match can run from one into the next. */
  joined: string
}

export function heldEdition(sections: { title: string; content: string }[]): HeldEdition {
  const s = sections.map((sec) => ({ title: sec.title, text: normForMatch(sec.content) }))
  return { sections: s, joined: s.map((x) => x.text).join(' | ') }
}

export interface BuildInput {
  guide: StudyGuide
  /** Every served panel and portrait the text has; the path keeps the ones it uses. */
  art: GameArt
  /** The held edition, when the site holds one. Without it the refrain and true-quotation checks fall back to the guide. */
  held?: HeldEdition | null
}

interface Ctx {
  guide: StudyGuide
  art: GameArt
  held: HeldEdition | null
  slug: string
  /** Every guide quotation, normalised, for the true-quotation check. */
  quotations: string[]
}

// ── Shared ───────────────────────────────────────────────────────────────────

function momentRef(ctx: Ctx, index: number): MomentRef {
  const m = ctx.guide.timeline[index]
  return {
    index,
    title: m.title,
    where: m.where,
    significance: m.significance,
    ...(ctx.art.panels[m.title] ? { panel: m.title } : {}),
  }
}

/** Up to MAX_OPTIONS - 1 wrong options, picked by seed; null when fewer than MIN_OPTIONS - 1 are safe. */
function pickWrong(candidates: string[], seed: number): string[] | null {
  const seen = new Set<string>()
  const unique = candidates.filter((c) => {
    const k = c.trim().toLowerCase()
    if (!k || seen.has(k)) return false
    seen.add(k)
    return true
  })
  if (unique.length < MIN_OPTIONS - 1) return null
  return seededPick(unique, MAX_OPTIONS - 1, seed)
}

/** Keep at most `max` items, chosen by seed, in the order the guide gave them. */
function pool<T>(items: T[], max: number, seed: number): T[] {
  if (items.length <= max) return items
  const keep = new Set(seededPick(items, max, seed))
  return items.filter((i) => keep.has(i))
}

/** Names compared without possessives: "Hermia’s father" mentions Hermia. */
function bareWords(s: string): string[] {
  return wordsOf(s).map((w) => w.replace(/'s$/, ''))
}

// ── Who's who ────────────────────────────────────────────────────────────────

function buildWhoRoles(ctx: Ctx): WhoRoleItem[] {
  const chars = ctx.guide.characters ?? []
  const items: WhoRoleItem[] = []
  chars.forEach((c, i) => {
    const roleWords = new Set(bareWords(c.role))
    const nameWords = (n: string) => bareWords(n).filter((w) => w.length >= 3 && !isStopWord(w))
    // A role that names its character answers itself ("Nick Bottom, a weaver").
    if (nameWords(c.name).some((w) => roleWords.has(w))) return
    const wrong = pickWrong(
      chars
        .filter((d) => d.name !== c.name)
        // Not someone the role mentions ("Hermia’s father" is not Hermia), and
        // not someone the guide describes in exactly the same words.
        .filter((d) => !nameWords(d.name).some((w) => roleWords.has(w)))
        .filter((d) => d.role.trim().toLowerCase() !== c.role.trim().toLowerCase())
        .map((d) => d.name),
      hashSeed(ctx.slug, 'who-role', i),
    )
    if (!wrong) return
    items.push({
      kind: 'who',
      mode: 'role',
      id: `who:char:${i}`,
      role: c.role,
      answer: c.name,
      options: [c.name, ...wrong],
      explanation: openingSentences(c.body),
      ...(ctx.art.portraits[c.name] ? { portrait: c.name } : {}),
    })
  })
  return items
}

function buildWhoRelations(ctx: Ctx): WhoRelationItem[] {
  const rels = ctx.guide.relationships
  const pairKey = (a: string, b: string) => [a, b].sort().join('\u0000')
  const items: WhoRelationItem[] = []
  rels.forEach((r, i) => {
    if (r.from === r.to || !r.kind.trim()) return
    const pair = pairKey(r.from, r.to)
    const wrong = pickWrong(
      rels
        .filter((s) => s !== r)
        // Another link between the same two people is also true of them.
        .filter((s) => pairKey(s.from, s.to) !== pair)
        .filter((s) => relationKindIsSpecific(s.kind))
        .filter((s) => !relationsMayOverlap(r.kind, s.kind))
        .map((s) => s.kind),
      hashSeed(ctx.slug, 'who-rel', i),
    )
    if (!wrong) return
    items.push({
      kind: 'who',
      mode: 'relation',
      id: `who:rel:${i}`,
      from: r.from,
      to: r.to,
      answer: r.kind,
      options: [r.kind, ...wrong],
      explanation: r.note,
      portraits: [r.from, r.to].filter((n) => ctx.art.portraits[n]),
    })
  })
  return items
}

function buildWho(ctx: Ctx): GameItem[] {
  const roles = buildWhoRoles(ctx)
  const items: GameItem[] = [...roles]
  // The cast list first; the character map fills the round where the cast list
  // is short or, in a supplement guide, lives on the text's own page.
  if (items.length < POOL_MAX) items.push(...buildWhoRelations(ctx))
  return pool(items, POOL_MAX, hashSeed(ctx.slug, 'who', 'pool'))
}

// ── Story order ──────────────────────────────────────────────────────────────

function buildOrder(ctx: Ctx): OrderItem[] {
  const tl = ctx.guide.timeline
  if (tl.length < 4) return []
  const k = tl.length >= 10 ? 5 : 4
  const puzzles: OrderItem[] = []
  const seen = new Set<string>()
  for (let attempt = 0; puzzles.length < ORDER_POOL_MAX && attempt < 24; attempt++) {
    // One moment from each of k stretches of the text, so a puzzle spans the
    // whole of it rather than asking which of two adjacent scenes came first.
    const next = rng(hashSeed(ctx.slug, 'order', attempt))
    const picks: number[] = []
    for (let s = 0; s < k; s++) {
      const lo = Math.floor((s * tl.length) / k)
      const hi = Math.floor(((s + 1) * tl.length) / k)
      picks.push(lo + Math.floor(next() * (hi - lo)))
    }
    const key = picks.join(',')
    if (seen.has(key)) continue
    seen.add(key)
    // Two cards with one title could not be told apart.
    if (new Set(picks.map((i) => tl[i].title)).size !== picks.length) continue
    puzzles.push({
      kind: 'order',
      id: `order:${puzzles.length}`,
      moments: picks.map((i) => momentRef(ctx, i)),
    })
  }
  return puzzles
}

// ── Quotations: where, and finish ────────────────────────────────────────────

interface QuoteSource {
  /** `kq:<n>` for keyQuotes[n], `tl:<n>` for the scene card of timeline[n]. */
  key: string
  quote: string
  where: string
  explanation: string
  moment?: MomentRef
}

function quoteSources(ctx: Ctx): { keyQuotes: QuoteSource[]; scenes: QuoteSource[] } {
  const keyQuotes = (ctx.guide.keyQuotes ?? []).map(
    (q: GuideQuote, i): QuoteSource => ({
      key: `kq:${i}`,
      quote: q.text,
      where: q.where,
      explanation: q.analysis,
    }),
  )
  const scenes = ctx.guide.timeline.flatMap((m, i): QuoteSource[] =>
    m.quote
      ? [
          {
            key: `tl:${i}`,
            quote: m.quote,
            where: m.where,
            explanation: m.summary,
            moment: momentRef(ctx, i),
          },
        ]
      : [],
  )
  return { keyQuotes, scenes }
}

/**
 * Where the held edition prints a quotation: how many times its longest part
 * occurs, and the section it is in when that is one place. Null without a
 * held edition, when nothing can be checked.
 */
function locate(
  ctx: Ctx,
  quote: string,
): { count: number; section: { title: string } | null } | null {
  if (!ctx.held) return null
  const parts = quoteFragments(quote)
  if (parts.length === 0) return { count: 0, section: null }
  const longest = parts.reduce((a, b) => (b.length > a.length ? b : a))
  const count = occurrences(ctx.held.joined, longest)
  const sections = ctx.held.sections.filter((s) => occurrences(s.text, longest) > 0)
  return { count, section: count === 1 && sections.length === 1 ? sections[0] : null }
}

function buildWhereFrom(ctx: Ctx, sources: QuoteSource[]): WhereItem[] {
  const items: WhereItem[] = []
  sources.forEach((src, i) => {
    // The same words at two places in the guide: either place would be right.
    const norm = normForMatch(src.quote)
    if (sources.some((o) => o !== src && normForMatch(o.quote) === norm && o.where !== src.where))
      return
    const at = locate(ctx, src.quote)
    // A refrain, or words the held edition does not print as given: not asked.
    if (at && at.count !== 1) return
    // A guide reference the held edition contradicts is not taught.
    if (at?.section && whereFitsSection(src.where, at.section.title) === false) return
    const wrong = pickWrong(
      sources
        .map((o) => o.where)
        .filter((w) => !wheresMayOverlap(src.where, w))
        .filter((w) => !(at?.section && whereFitsSection(w, at.section.title) === true)),
      hashSeed(ctx.slug, 'where', src.key, i),
    )
    if (!wrong) return
    items.push({
      kind: 'where',
      id: `where:${src.key}`,
      quote: src.quote,
      where: src.where,
      answer: src.where,
      options: [src.where, ...wrong],
      explanation: src.explanation,
      ...(src.moment ? { moment: src.moment } : {}),
    })
  })
  return items
}

function buildWhere(ctx: Ctx): GameItem[] {
  const { keyQuotes, scenes } = quoteSources(ctx)
  // Key quotations first, each against the others; the scene cards' quotations,
  // against each other, where the key quotations are on the text's own page.
  // Never mixed in one question: their references are written differently.
  const fromKeyQuotes = buildWhereFrom(ctx, keyQuotes)
  const items =
    fromKeyQuotes.length >= MIN_ITEMS
      ? fromKeyQuotes
      : [...fromKeyQuotes, ...buildWhereFrom(ctx, scenes)]
  return pool(items, POOL_MAX, hashSeed(ctx.slug, 'where', 'pool'))
}

interface Token {
  word: string
  at: number
  /** Capitalised and not starting a line or sentence: a name, kept with names. */
  proper: boolean
}

/** The words of a quotation that could be its missing word, with where each sits. */
function blankable(quote: string): Token[] {
  const out: Token[] = []
  for (const m of quote.matchAll(/\p{L}[\p{L}’']*/gu)) {
    const word = m[0]
    const at = m.index ?? 0
    if (!/^\p{L}+$/u.test(word) || word.length < 4 || isStopWord(word)) continue
    const before = quote.slice(0, at)
    const startsLine = /(^|\/)\s*$/.test(before) || /[.?!:;]["”’']?\s+$/.test(before)
    const capital = /^\p{Lu}/u.test(word)
    // A capital that starts a line or a sentence says nothing about the word,
    // and a lower-case word offered in its place would look wrong.
    if (capital && startsLine) continue
    out.push({ word, at, proper: capital })
  }
  return out
}

/** Endings that make a wrong word read as the same kind of word as the answer. */
function ending(w: string): string {
  const l = w.toLowerCase()
  for (const e of ['ing', 'ed', 'ly', 'est', 'er', 'ness', 'tion']) if (l.endsWith(e)) return e
  if (l.endsWith('s') && !l.endsWith('ss')) return 's'
  return ''
}

/**
 * The line of `quote` that holds the word at `at` to `end`, as text either side
 * of it: the stretch between the line breaks (" / ") or ellipses around it.
 * A wrong word is checked against the held edition in that line, because a
 * quotation's lines are not always consecutive in the edition.
 */
function lineAround(quote: string, at: number, end: number): { pre: string; post: string } {
  let from = 0
  let to = quote.length
  for (const s of quote.matchAll(/\s*(?:\.\.\.|…|\/)\s*/g)) {
    const sStart = s.index ?? 0
    const sEnd = sStart + s[0].length
    if (sEnd <= at) from = sEnd
    else if (sStart >= end) {
      to = sStart
      break
    }
  }
  return { pre: quote.slice(from, at), post: quote.slice(end, to) }
}

function buildFinishFrom(ctx: Ctx, sources: QuoteSource[], all: QuoteSource[]): FinishItem[] {
  const items: FinishItem[] = []
  const lower = (w: string) => w.toLowerCase()
  for (const src of sources) {
    const quoteWords = wordsOf(src.quote)
    const inQuote = new Set(quoteWords)
    // Only a word the quotation has once: a second copy left showing would give it away.
    const once = blankable(src.quote).filter(
      (t) => quoteWords.filter((w) => w === lower(t.word)).length === 1,
    )
    if (once.length === 0) continue
    // The longest words carry the most meaning; one of the three, by seed.
    const top = once
      .slice()
      .sort((a, b) => b.word.length - a.word.length || a.at - b.at)
      .slice(0, 3)
    const blank = top[Math.floor(rng(hashSeed(ctx.slug, 'finish', src.key))() * top.length)]
    const before = src.quote.slice(0, blank.at)
    const after = src.quote.slice(blank.at + blank.word.length)
    const { pre, post } = lineAround(src.quote, blank.at, blank.at + blank.word.length)

    /** Would this word in the gap make words the text, or the guide, really prints? */
    const makesATrueQuotation = (word: string) => {
      const candidate = normForMatch(pre + word + post)
      if (candidate.split(' ').length < 2) return false
      if (ctx.held && occurrences(ctx.held.joined, candidate) > 0) return true
      return ctx.quotations.some((q) => occurrences(q, candidate) > 0)
    }

    const candidates: string[] = []
    const seen = new Set<string>([lower(blank.word)])
    for (const other of all) {
      if (normForMatch(other.quote) === normForMatch(src.quote)) continue
      for (const t of blankable(other.quote)) {
        const k = lower(t.word)
        if (seen.has(k)) continue
        seen.add(k)
        // Names against names, other words against other words.
        if (t.proper !== blank.proper) continue
        // An inflection of the answer ("dagger", "daggers") is nearly right;
        // a word already in the quotation looks wrong for the wrong reason.
        if (stem(k) === stem(lower(blank.word))) continue
        if (inQuote.has(k)) continue
        candidates.push(t.word)
      }
    }
    // The likeliest-looking wrong words first: the same ending, a similar
    // length. Ties are broken by seed, not by the order of the guide.
    const tiebreak = new Map(
      seededShuffle(candidates, hashSeed(ctx.slug, 'finish-wrong', src.key)).map((w, n) => [w, n]),
    )
    const score = (w: string) =>
      (ending(w) === ending(blank.word) ? 2 : 0) +
      (Math.abs(w.length - blank.word.length) <= 2 ? 1 : 0)
    const wrong = candidates
      .filter((w) => !makesATrueQuotation(w))
      .sort((a, b) => score(b) - score(a) || tiebreak.get(a)! - tiebreak.get(b)!)
      .slice(0, MAX_OPTIONS - 1)
    if (wrong.length < MIN_OPTIONS - 1) continue
    items.push({
      kind: 'finish',
      id: `finish:${src.key}`,
      quote: src.quote,
      before,
      after,
      where: src.where,
      answer: blank.word,
      options: [blank.word, ...wrong],
      explanation: src.explanation,
      ...(src.moment ? { moment: src.moment } : {}),
    })
  }
  return items
}

function buildFinish(ctx: Ctx): GameItem[] {
  const { keyQuotes, scenes } = quoteSources(ctx)
  const all = [...keyQuotes, ...scenes]
  const fromKeyQuotes = buildFinishFrom(ctx, keyQuotes, all)
  const items =
    fromKeyQuotes.length >= MIN_ITEMS
      ? fromKeyQuotes
      : [...fromKeyQuotes, ...buildFinishFrom(ctx, scenes, all)]
  return pool(items, POOL_MAX, hashSeed(ctx.slug, 'finish', 'pool'))
}

// ── Method spotter ───────────────────────────────────────────────────────────

function buildMethod(ctx: Ctx): GameItem[] {
  const list = ctx.guide.languageAnalysis ?? []
  const items: MethodItem[] = []
  list.forEach((t, i) => {
    const wrong = pickWrong(
      list.filter((u) => u !== t && !methodsMayOverlap(t, u)).map((u) => u.technique),
      hashSeed(ctx.slug, 'method', i),
    )
    if (!wrong) return
    items.push({
      kind: 'method',
      id: `method:${i}`,
      example: t.example,
      answer: t.technique,
      options: [t.technique, ...wrong],
      explanation: t.effect,
    })
  })
  return pool(items, POOL_MAX, hashSeed(ctx.slug, 'method', 'pool'))
}

// ── Theme match ──────────────────────────────────────────────────────────────

function buildTheme(ctx: Ctx): GameItem[] {
  const tl = ctx.guide.timeline
  // The guide's own theme list where it has one; a supplement's moments name
  // the themes its text's own page sets out.
  const universe =
    ctx.guide.themes && ctx.guide.themes.length > 0
      ? ctx.guide.themes.map((t) => t.title)
      : [...new Set(tl.flatMap((m) => m.themes))]
  const items: ThemeItem[] = []
  tl.forEach((m, i) => {
    if (m.themes.length === 0) return
    const answer = m.themes[Math.floor(rng(hashSeed(ctx.slug, 'theme', i))() * m.themes.length)]
    const wrong = pickWrong(
      universe.filter((u) => !m.themes.some((c) => themesMayOverlap(c, u))),
      hashSeed(ctx.slug, 'theme-wrong', i),
    )
    if (!wrong) return
    items.push({
      kind: 'theme',
      id: `theme:${i}`,
      moment: momentRef(ctx, i),
      where: m.where,
      carries: m.themes.slice(),
      answer,
      options: [answer, ...wrong],
      explanation: m.significance,
    })
  })
  return pool(items, POOL_MAX, hashSeed(ctx.slug, 'theme', 'pool'))
}

// ── The path ─────────────────────────────────────────────────────────────────

const BUILDERS: Record<RoundKind, (ctx: Ctx) => GameItem[]> = {
  who: buildWho,
  order: buildOrder,
  where: buildWhere,
  finish: buildFinish,
  method: buildMethod,
  theme: buildTheme,
}

/** The art the items show: panels by moment title, portraits by name. */
function usedArt(rounds: Round[], art: GameArt): GameArt {
  const panels = new Set<string>()
  const portraits = new Set<string>()
  const moment = (m?: MomentRef) => {
    if (m?.panel) panels.add(m.panel)
  }
  for (const r of rounds)
    for (const it of r.items) {
      if (it.kind === 'order') it.moments.forEach(moment)
      else if (it.kind === 'theme' || it.kind === 'where' || it.kind === 'finish') moment(it.moment)
      else if (it.kind === 'who' && it.mode === 'role' && it.portrait) portraits.add(it.portrait)
      else if (it.kind === 'who' && it.mode === 'relation')
        it.portraits.forEach((p) => portraits.add(p))
    }
  return {
    panels: Object.fromEntries([...panels].map((k) => [k, art.panels[k]])),
    portraits: Object.fromEntries([...portraits].map((k) => [k, art.portraits[k]])),
  }
}

export function buildTextGame({ guide, art, held = null }: BuildInput): TextGame {
  const ctx: Ctx = {
    guide,
    art,
    held,
    slug: guide.slug,
    quotations: [
      ...(guide.keyQuotes ?? []).map((q) => q.text),
      ...guide.timeline.flatMap((m) => (m.quote ? [m.quote] : [])),
    ].map(normForMatch),
  }
  const rounds: Round[] = []
  for (const kind of ROUND_KINDS) {
    const items = BUILDERS[kind](ctx)
    if (items.length >= (kind === 'order' ? 1 : MIN_ITEMS)) rounds.push({ kind, items })
  }
  return {
    slug: guide.slug,
    title: guide.title,
    author: guide.author,
    rounds,
    art: usedArt(rounds, art),
    ...(guide.rights.status === 'copyright'
      ? { acknowledgement: guide.rights.acknowledgement }
      : {}),
  }
}
