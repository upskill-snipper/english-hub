import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import { getSetText } from '@/lib/board/set-texts'
import { dealReview, dealRound, ROUND_SIZE } from '@/lib/games/text-games/arrange'
import { buildTextGame, heldEdition, MIN_ITEMS } from '@/lib/games/text-games/build'
import { loadGameArt, loadHeldEdition, loadTextGame } from '@/lib/games/text-games/load'
import {
  DESCRIPTION_LIMIT,
  textGameDescription,
  textGameTitle,
  TITLE_LIMIT,
} from '@/lib/games/text-games/meta'
import { finishRound, finishRun, readProgress, startRound } from '@/lib/games/text-games/progress'
import { overTheLimits, quotedInGame } from '@/lib/games/text-games/quoted'
import { hasTextGame, LEFT_OUT_OF_TEXT_GAMES, textGameSlugs } from '@/lib/games/text-games/slugs'
import {
  normForMatch,
  occurrences,
  openingSentences,
  quoteFragments,
  whereFitsSection,
  wheresMayOverlap,
  wordsOf,
} from '@/lib/games/text-games/text'
import type { GameItem, TextGame } from '@/lib/games/text-games/types'
import { TEXT_GAMES_DICTIONARY } from '@/lib/i18n/dictionary-text-games'
import { limitsFor } from '@/lib/study-guides/fair-dealing'
import type { StudyGuide } from '@/lib/study-guides/types'
import { quotationsOf } from '@/lib/study-guides/validate'

/**
 * The guided text games are built from the study guides and nothing else.
 *
 * WHAT THIS PROTECTS. A revision game that misquotes, or marks a right answer
 * wrong, teaches the mistake. So for every text with a path, every item of
 * every round is checked against that text's guide:
 *
 * - every quotation is exactly a guide quotation (quotationsOf: a key
 *   quotation or a scene card's), and a finished quotation is that quotation;
 * - every right answer is among its options, and is right by the guide's own
 *   data; every wrong option is another entry of the same guide;
 * - no question has two right options, as far as data can show it: no wrong
 *   "where" overlaps the right one or contains the quotation in the held
 *   edition, no quotation asked about is printed twice in it, no wrong word
 *   makes a line the text or the guide really has, no wrong relationship is
 *   another link between the same two people, no wrong theme is one the
 *   moment carries;
 * - every explanation is the guide's own words;
 * - every text with a guide has a path, but the one left out, and the deal is
 *   deterministic;
 * - a path quotes nothing its guide does not, and for a text in copyright
 *   stays inside the fair-dealing limits (quoted.ts), printing the guide's
 *   acknowledgement. Texts in copyright have had paths since 10 October 2026,
 *   once it was measured that a path quotes less than its guide page.
 *
 * WHAT IT CANNOT SEE. Meaning. Two methods can describe one passage, and two
 * relationships can be true of one pair, in words that share nothing. The
 * builder keeps such options apart with families of related terms (text.ts)
 * and the method question asks which method the GUIDE gives an example for;
 * the semantic part was checked by reading the built questions, not here.
 *
 * THE HELD EDITIONS ARE READ HERE INDEPENDENTLY, through import.meta.glob,
 * not through the loader under test, so the checks above do not depend on it.
 * The loader's first version reported every edition missing under Vite's SSR
 * loader, which silently switched off the refrain and true-quotation checks
 * (see load.ts). Vitest resolved that version, so the loader test below
 * catches a loader that finds nothing, not that particular path; the path was
 * checked on the dev server.
 *
 * One public-domain text is left out of the games on the founder's
 * instruction (slugs.ts says why). This file never loads it.
 */

const WARM_MS = 180_000

const heldModules = import.meta.glob<Record<string, unknown>>('../data/full-texts/*.ts')

type Held = { sections: { title: string; text: string }[]; joined: string }

async function readHeld(slug: string): Promise<Held | null> {
  const load = heldModules[`../data/full-texts/${slug}.ts`]
  if (!load) return null
  const mod = await load()
  const data = Object.values(mod).find(
    (v): v is { sections: { title: string; content: string }[] } =>
      typeof v === 'object' && v !== null && Array.isArray((v as { sections?: unknown }).sections),
  )
  if (!data) throw new Error(`${slug}: no held text exported`)
  const sections = data.sections.map((s) => ({ title: s.title, text: normForMatch(s.content) }))
  return { sections, joined: sections.map((s) => s.text).join(' | ') }
}

type Loaded = { game: TextGame; guide: StudyGuide; held: Held | null }
const loaded = new Map<string, Loaded>()
const slugs = textGameSlugs()

beforeAll(async () => {
  for (const slug of slugs) {
    const [game, guide, held] = await Promise.all([
      loadTextGame(slug),
      STUDY_GUIDE_LOADERS[slug](),
      readHeld(slug),
    ])
    if (!game) throw new Error(`${slug}: no path`)
    loaded.set(slug, { game, guide, held })
  }
}, WARM_MS)

const get = (slug: string) => loaded.get(slug)!

/** The line of a quotation holding the gap, with `word` in it, as text.ts checks it. */
function lineWith(item: Extract<GameItem, { kind: 'finish' }>, word: string): string {
  const full = item.before + word + item.after
  const at = item.before.length
  let from = 0
  let to = full.length
  for (const s of full.matchAll(/\s*(?:\.\.\.|…|\/)\s*/g)) {
    const start = s.index ?? 0
    if (start + s[0].length <= at) from = start + s[0].length
    else if (start >= at + word.length) {
      to = start
      break
    }
  }
  return normForMatch(full.slice(from, to))
}

describe('which texts have games', () => {
  it('every guide but the one left out, and nothing else', () => {
    const guides = Object.keys(STUDY_GUIDE_LOADERS)
    const expected = guides.filter((s) => !LEFT_OUT_OF_TEXT_GAMES.has(s)).sort()
    expect(slugs).toEqual(expected)
    expect(slugs.length).toBeGreaterThan(100)
    for (const slug of guides)
      expect(hasTextGame(slug), slug).toBe(!LEFT_OUT_OF_TEXT_GAMES.has(slug))
  })

  it('both kinds of text, so the copyright checks below are not vacuous', () => {
    const status = slugs.map((s) => get(s).guide.rights.status)
    expect(status.filter((x) => x === 'public-domain').length).toBeGreaterThan(30)
    expect(status.filter((x) => x === 'copyright').length).toBeGreaterThan(60)
    expect(get('an-inspector-calls').guide.rights.status).toBe('copyright')
  })

  it('the text left out, or a slug that is no text, has no path, and nothing of it is loaded', async () => {
    for (const slug of LEFT_OUT_OF_TEXT_GAMES) expect(await loadTextGame(slug)).toBeNull()
    expect(await loadTextGame('../secrets')).toBeNull()
    expect(await loadTextGame('not-a-set-text')).toBeNull()
  })

  it('every text with a path is on the set-text register, so the index lists it', () => {
    for (const slug of slugs) expect(getSetText(slug), slug).toBeTruthy()
  })
})

describe('the held editions are found', () => {
  it(
    'for every file in src/data/full-texts, and only those',
    async () => {
      const files = readdirSync(join(process.cwd(), 'src/data/full-texts'))
        .filter((f) => f.endsWith('.ts'))
        .map((f) => f.replace(/\.ts$/, ''))
        .filter((s) => !LEFT_OUT_OF_TEXT_GAMES.has(s))
      expect(files.length).toBeGreaterThan(25)
      for (const slug of files) {
        const held = await loadHeldEdition(slug)
        expect(held?.sections.length ?? 0, `${slug}: the loader did not find it`).toBeGreaterThan(0)
      }
      for (const slug of slugs.filter((s) => !files.includes(s)))
        expect(await loadHeldEdition(slug), slug).toBeNull()
    },
    WARM_MS,
  )
})

describe.each(slugs)('%s', (slug) => {
  it('has a path of at least four rounds, each with enough to ask', () => {
    const { game } = get(slug)
    expect(game.rounds.length).toBeGreaterThanOrEqual(4)
    for (const r of game.rounds)
      expect(r.items.length, r.kind).toBeGreaterThanOrEqual(r.kind === 'order' ? 1 : MIN_ITEMS)
  })

  it('asks only what the guide says, with one right answer each time', () => {
    const { game, guide, held } = get(slug)
    const quotations = quotationsOf(guide)
    const quotationsNorm = quotations.map(normForMatch)
    const timeline = guide.timeline
    for (const round of game.rounds) {
      for (const item of round.items) {
        const at = `${item.id}`
        expect(item.kind, at).toBe(round.kind)

        if (item.kind === 'order') {
          expect(item.moments.length, at).toBeGreaterThanOrEqual(4)
          item.moments.forEach((m, i) => {
            const real = timeline[m.index]
            expect([m.title, m.where, m.significance], at).toEqual([
              real.title,
              real.where,
              real.significance,
            ])
            if (i > 0)
              expect(m.index, `${at}: in the text's order`).toBeGreaterThan(
                item.moments[i - 1].index,
              )
          })
          continue
        }

        // Every choice question: the answer once among unique options, two or three wrong ones.
        expect(item.options, at).toContain(item.answer)
        expect(new Set(item.options.map((o) => o.toLowerCase())).size, `${at}: unique`).toBe(
          item.options.length,
        )
        expect(item.options.length, at).toBeGreaterThanOrEqual(3)
        expect(item.options.length, at).toBeLessThanOrEqual(4)
        expect(
          item.options.every((o) => o.trim().length > 0),
          at,
        ).toBe(true)
        expect(item.explanation.trim().length, `${at}: explanation`).toBeGreaterThan(20)
        const wrong = item.options.filter((o) => o !== item.answer)

        if (item.kind === 'who' && item.mode === 'role') {
          const c = guide.characters!.find((x) => x.name === item.answer)!
          expect(c, at).toBeTruthy()
          expect(item.role, at).toBe(c.role)
          expect(c.body.startsWith(item.explanation), `${at}: the guide's own words`).toBe(true)
          for (const w of wrong) {
            const d = guide.characters!.find((x) => x.name === w)
            expect(d, `${at}: ${w} is in the cast list`).toBeTruthy()
            expect(d!.role, `${at}: ${w} is described the same way`).not.toBe(c.role)
          }
        } else if (item.kind === 'who') {
          const r = guide.relationships.find(
            (x) => x.from === item.from && x.to === item.to && x.kind === item.answer,
          )
          expect(r, at).toBeTruthy()
          expect(item.explanation, at).toBe(r!.note)
          const samePair = guide.relationships
            .filter((x) => [x.from, x.to].sort().join() === [item.from, item.to].sort().join())
            .map((x) => x.kind)
          for (const w of wrong) {
            expect(
              guide.relationships.some((x) => x.kind === w),
              `${at}: ${w}`,
            ).toBe(true)
            expect(samePair, `${at}: ${w} is also true of this pair`).not.toContain(w)
          }
        } else if (item.kind === 'where') {
          expect(quotations, `${at}: a guide quotation`).toContain(item.quote)
          const sources = [
            ...(guide.keyQuotes ?? []).map((q) => ({
              quote: q.text,
              where: q.where,
              why: q.analysis,
            })),
            ...timeline.map((m) => ({ quote: m.quote, where: m.where, why: m.summary })),
          ]
          const src = sources.find((s) => s.quote === item.quote && s.where === item.answer)
          expect(src, `${at}: the guide puts it there`).toBeTruthy()
          expect(item.explanation, at).toBe(src!.why)
          for (const w of wrong) {
            expect(
              sources.some((s) => s.where === w),
              `${at}: ${w}`,
            ).toBe(true)
            expect(wheresMayOverlap(item.answer, w), `${at}: ${w} overlaps ${item.answer}`).toBe(
              false,
            )
          }
          if (held) {
            const parts = quoteFragments(item.quote)
            const longest = parts.reduce((a, b) => (b.length > a.length ? b : a))
            expect(occurrences(held.joined, longest), `${at}: printed once`).toBe(1)
            const section = held.sections.find((s) => occurrences(s.text, longest) > 0)!
            expect(
              whereFitsSection(item.answer, section.title),
              `${at}: ${section.title}`,
            ).not.toBe(false)
            for (const w of wrong)
              expect(whereFitsSection(w, section.title), `${at}: ${w} holds it too`).not.toBe(true)
          }
        } else if (item.kind === 'finish') {
          expect(quotations, `${at}: a guide quotation`).toContain(item.quote)
          expect(item.before + item.answer + item.after, at).toBe(item.quote)
          for (const w of wrong) {
            expect(
              quotations.some((q) => q !== item.quote && wordsOf(q).includes(w.toLowerCase())),
              `${at}: ${w} is from another quotation`,
            ).toBe(true)
            const line = lineWith(item, w)
            if (line.split(' ').length >= 2) {
              if (held)
                expect(occurrences(held.joined, line), `${at}: "${w}" makes a real line`).toBe(0)
              expect(
                quotationsNorm.some((q) => occurrences(q, line) > 0),
                `${at}: ${w}`,
              ).toBe(false)
            }
          }
        } else if (item.kind === 'method') {
          const tech = guide.languageAnalysis!.find(
            (x) => x.example === item.example && x.technique === item.answer,
          )
          expect(tech, at).toBeTruthy()
          expect(item.explanation, at).toBe(tech!.effect)
          for (const w of wrong)
            expect(
              guide.languageAnalysis!.some((x) => x.technique === w),
              `${at}: ${w}`,
            ).toBe(true)
        } else if (item.kind === 'theme') {
          const m = timeline[item.moment.index]
          expect(item.moment.title, at).toBe(m.title)
          expect(item.carries, at).toEqual(m.themes)
          expect(m.themes, at).toContain(item.answer)
          expect(item.explanation, at).toBe(m.significance)
          for (const w of wrong) expect(m.themes, `${at}: ${w} is carried too`).not.toContain(w)
        }
      }
    }
  })

  it('shows only its own art, every piece of it used, and sends the browser plain data of a page’s size', () => {
    const { game, guide } = get(slug)
    const titles = new Set(guide.timeline.map((m) => m.title))
    for (const [key, d] of Object.entries(game.art.panels)) {
      expect(titles.has(key), key).toBe(true)
      expect(d.src).toMatch(new RegExp(`^/comics/${slug}/`))
    }
    for (const d of Object.values(game.art.portraits))
      expect(d.src).toMatch(new RegExp(`^/comics/${slug}/`))
    const used = JSON.stringify(game.rounds)
    for (const key of Object.keys(game.art.panels)) expect(used, key).toContain(JSON.stringify(key))
    // The largest path today is about 85 KB; a guide is several times that.
    expect(JSON.stringify(game).length).toBeLessThan(120_000)
  })

  it('deals the same questions from the same seed, and differently on a replay', () => {
    const { game } = get(slug)
    for (const round of game.rounds) {
      const a = dealRound(slug, round, 0)
      expect(dealRound(slug, round, 0)).toEqual(a)
      expect(a.length).toBe(Math.min(ROUND_SIZE[round.kind], round.items.length))
      for (const d of a) {
        if (d.item.kind === 'order') {
          expect([...d.deck].sort()).toEqual(d.item.moments.map((_, i) => i))
          expect(
            d.deck.every((v, i) => v === i),
            'dealt already solved',
          ).toBe(false)
        } else expect([...d.options].sort()).toEqual([...d.item.options].sort())
      }
    }
    const review = game.rounds.flatMap((r) => r.items).slice(0, 4)
    expect(dealReview(slug, review, 2)).toEqual(dealReview(slug, review, 2))
  })

  it('quotes nothing its guide does not, and for a text in copyright stays inside the limits', () => {
    const { game, guide } = get(slug)
    expect(overTheLimits(game, guide)).toEqual([])
    if (guide.rights.status === 'copyright') {
      const lim = limitsFor(guide.form, guide.workLength)
      const { words, passages } = quotedInGame(game)
      expect(words).toBeLessThanOrEqual(lim.totalWords)
      expect(passages.length, 'a path that quotes nothing has nothing to measure').toBeGreaterThan(
        0,
      )
      expect(game.acknowledgement).toBe(guide.rights.acknowledgement)
      expect(game.acknowledgement?.length ?? 0).toBeGreaterThan(10)
      // Quotation is fair dealing for criticism only when comment follows it
      // (fair-dealing.ts). Every quotation a path asks about is followed, once
      // answered, by the guide's own comment on it: a key quotation's analysis
      // or a scene card's summary.
      for (const round of game.rounds)
        for (const item of round.items)
          if (item.kind === 'where' || item.kind === 'finish')
            expect(item.explanation.split(/\s+/).length, item.id).toBeGreaterThanOrEqual(15)
    } else {
      expect(game.acknowledgement).toBeUndefined()
    }
  })

  it('has a title and description that fit a search result and promise only what it has', () => {
    const { game } = get(slug)
    const title = textGameTitle(game.title)
    const description = textGameDescription(game)
    expect(title.length).toBeLessThanOrEqual(TITLE_LIMIT)
    expect(title.length).toBeGreaterThanOrEqual(5)
    expect(description.length).toBeLessThanOrEqual(DESCRIPTION_LIMIT)
    expect(description.length).toBeGreaterThanOrEqual(50)
    const kinds = new Set(game.rounds.map((r) => r.kind))
    if (!kinds.has('method')) expect(description).not.toContain('methods')
    if (!kinds.has('who')) expect(description).not.toContain('characters')
  })
})

describe('the fair-dealing measure of a path', () => {
  // overTheLimits() is what stands between a path and quoting more of a text
  // in copyright than the site's limits allow. So it is shown here to catch
  // each breach, on a real path with one thing changed. Nothing here prints
  // more of the text than the guide does.
  const game = () => get('an-inspector-calls').game
  const guide = () => get('an-inspector-calls').guide
  const firstWhere = () =>
    game().rounds.find((r) => r.kind === 'where')!.items[0] as Extract<GameItem, { kind: 'where' }>
  const withOnly = (item: GameItem): TextGame => ({
    ...game(),
    rounds: [{ kind: item.kind, items: [item] }],
  })

  it('passes the real path', () => {
    expect(overTheLimits(game(), guide())).toEqual([])
  })

  it('catches a quotation stretched past the limit, which the guide never made', () => {
    const stretched = withOnly({
      ...firstWhere(),
      quote: `${firstWhere().quote} ${'and so on '.repeat(8)}`,
    })
    const out = overTheLimits(stretched, guide()).join('\n')
    expect(out).toMatch(/over the 14-word limit/)
    expect(out).toMatch(/a quotation its guide does not make/)
  })

  it('counts a quotation slipped into an explanation', () => {
    const sneaked = withOnly({
      ...firstWhere(),
      explanation: 'As the play puts it, “words that this guide never quotes anywhere”.',
    })
    expect(overTheLimits(sneaked, guide()).join('\n')).toMatch(
      /a quotation its guide does not make/,
    )
  })

  it('caps the total by the length of the work, as on the guide page', () => {
    // The same path, measured as if the play were a 500-word piece: ten per
    // cent is 50 words, which the real path quotes more than.
    const short = { ...guide(), workLength: { words: 500, basis: 'test' } }
    expect(quotedInGame(game()).words).toBeGreaterThan(50)
    expect(overTheLimits(game(), short).join('\n')).toMatch(/over the 50-word limit/)
  })

  it('holds a text in the public domain to no limits, as the guides do', () => {
    const stretched = withOnly({
      ...firstWhere(),
      quote: `${firstWhere().quote} ${'and so on '.repeat(8)}`,
    })
    expect(overTheLimits(stretched, get('macbeth').guide)).toEqual([])
  })
})

describe('the build', () => {
  it(
    'is deterministic: the same guide and art give the same path',
    async () => {
      const slug = 'macbeth'
      const [guide, art, held] = await Promise.all([
        STUDY_GUIDE_LOADERS[slug](),
        loadGameArt(slug),
        loadHeldEdition(slug),
      ])
      const a = buildTextGame({ guide, art, held })
      expect(buildTextGame({ guide, art, held })).toEqual(a)
      expect(a).toEqual(get(slug).game)
    },
    WARM_MS,
  )

  it('puts the right answer in every position about equally, over many plays', () => {
    // The guides list each answer first among its options, so a round dealt
    // in authored order would be answered by always choosing A, which is the
    // fault no-quiz-answer-is-always-b.test.ts was written for (10 October
    // 2026). Counted over every choice question of every path and 20 plays.
    const counts = [0, 0, 0, 0]
    let total = 0
    for (const slug of slugs)
      for (const round of get(slug).game.rounds)
        for (let play = 0; play < 20; play++)
          for (const d of dealRound(slug, round, play)) {
            if (d.item.kind === 'order' || d.options.length !== 4) continue
            counts[d.options.indexOf(d.item.answer)]++
            total++
          }
    expect(total).toBeGreaterThan(2000)
    for (const [i, n] of counts.entries())
      expect(n / total, `answer in position ${'ABCD'[i]}`).toBeGreaterThan(0.18)
    for (const [i, n] of counts.entries())
      expect(n / total, `answer in position ${'ABCD'[i]}`).toBeLessThan(0.32)
  })

  it('replays deal differently somewhere, or the seed is not reaching the shuffle', () => {
    const differs = slugs.some((slug) =>
      get(slug).game.rounds.some(
        (r) => JSON.stringify(dealRound(slug, r, 0)) !== JSON.stringify(dealRound(slug, r, 1)),
      ),
    )
    expect(differs).toBe(true)
  })

  it('keeps a refrain out of "Where is it?" when the held edition prints it twice', () => {
    // A made-up poem, so no set text is quoted here.
    const guide = {
      slug: 'test-poem',
      title: 'Test',
      author: 'Nobody',
      form: 'poem',
      scope: 'The poem',
      rights: { status: 'public-domain', acknowledgement: '' },
      relationships: [],
      sources: [],
      timeline: [1, 2, 3, 4, 5].map((n) => ({
        where: `Stanza ${n}, lines ${n * 2 - 1}-${n * 2}`,
        title: `Moment ${n}`,
        summary: `What happens in stanza ${n}, in the guide's own words.`,
        setting: 'A field',
        who: [],
        quote: n === 1 ? 'the bells ring over the hill' : `a line that stanza ${n} prints once`,
        themes: ['Time'],
        tension: 1,
        significance: `Why stanza ${n} matters.`,
      })),
    } as unknown as StudyGuide
    const poem = [1, 2, 3, 4, 5]
      .map(
        (n) =>
          (n === 1 || n === 4 ? 'the bells ring over the hill ' : '') +
          `a line that stanza ${n} prints once`,
      )
      .join(' ')
    const held = heldEdition([{ title: 'Test', content: poem }])
    const game = buildTextGame({ guide, art: { panels: {}, portraits: {} }, held })
    const where = game.rounds.find((r) => r.kind === 'where')!
    expect(where.items.map((i) => (i as { quote: string }).quote)).not.toContain(
      'the bells ring over the hill',
    )
    expect(where.items.length).toBe(4)
  })
})

describe('where references', () => {
  it.each([
    ['Act 1, Scene 3', 'Act 1, Scene 4', false],
    ['Act 1, Scene 3', 'Act 2, Scene 3', false],
    ['Lines 5-13', 'Lines 13-24', true],
    ['Chapter 12', 'Chapters 11 and 12', true],
    ['Stanza 3, lines 9-10', 'Stanza 3, lines 10-12', true],
    ['Stanza 6, lines 16-17', 'Stanza 6, lines 18-19', false],
    ['Prologue', 'Act 1, Scene 1', false],
    ['Volume II, Chapter 11 (Chapter 34)', 'Volume III, Chapter 1 (Chapter 43)', false],
    ['Book Two, Chapter X (the Epilogue)', 'Book Two, Chapters IX and X', true],
    ['Stave I, the counting-house', 'Stave I, the charity collectors', true],
    ['somewhere unreadable', 'Act 1, Scene 1', true],
  ])('%s against %s: may overlap %s', (a, b, overlap) => {
    expect(wheresMayOverlap(a, b)).toBe(overlap)
  })
})

describe('the opening of a guide entry', () => {
  it('ends at a sentence, not at an abbreviation, an initial or a stop inside a quotation', () => {
    expect(openingSentences('She is named “Mrs. Mallard” once. Then only “she”.', 10)).toBe(
      'She is named “Mrs. Mallard” once.',
    )
    expect(openingSentences('He read H. G. Wells at school. Later he wrote.', 10)).toBe(
      'He read H. G. Wells at school.',
    )
    expect(openingSentences('She says “do not. Stop” and goes. Then it rains.', 10)).toBe(
      'She says “do not. Stop” and goes.',
    )
    // A short first sentence takes the next one with it.
    expect(openingSentences('Short. A second sentence that carries the meaning here.', 30)).toBe(
      'Short. A second sentence that carries the meaning here.',
    )
  })
})

describe('scores stay in this browser, and a broken store never breaks the game', () => {
  const store = new Map<string, string>()
  const fake = {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  }
  beforeEach(() => {
    store.clear()
    ;(globalThis as { window?: unknown }).window = { localStorage: fake }
  })
  afterEach(() => {
    delete (globalThis as { window?: unknown }).window
  })

  it('counts plays, keeps a best per round and per path, and calls a first finish a best', () => {
    expect(startRound('macbeth', 'who', 5)).toBe(0)
    expect(startRound('macbeth', 'who', 5)).toBe(1)
    expect(finishRound('macbeth', 'who', 3, 6).newBest).toBe(true)
    expect(finishRound('macbeth', 'who', 2, 6).newBest).toBe(false)
    expect(finishRound('macbeth', 'who', 5, 6).newBest).toBe(true)
    const p = readProgress('macbeth')
    expect(p.rounds.who).toEqual({ best: 5, max: 6, plays: 2, done: true })
    expect(p.total).toBe(5)
    expect(finishRun('macbeth', 20, 27).newBest).toBe(true)
    expect(finishRun('macbeth', 19, 27).newBest).toBe(false)
    expect(readProgress('macbeth').bestRun).toEqual({ score: 20, max: 27 })
    // Its own keys, never the skills games' eh_game_ prefix.
    expect([...store.keys()]).toEqual(['eh_textgame_macbeth'])
  })

  it('reads an edited or corrupt record as a fresh one', () => {
    store.set('eh_textgame_macbeth', '{not json')
    expect(readProgress('macbeth').rounds).toEqual({})
    store.set(
      'eh_textgame_macbeth',
      JSON.stringify({ v: 1, rounds: { who: { best: 9, max: 6, plays: 1 } } }),
    )
    expect(readProgress('macbeth').rounds.who).toBeUndefined()
  })

  it('plays on when storage throws, as in a private window', () => {
    ;(globalThis as { window?: unknown }).window = {
      localStorage: {
        getItem: () => {
          throw new Error('denied')
        },
        setItem: () => {
          throw new Error('denied')
        },
      },
    }
    expect(() => startRound('macbeth', 'who', 5)).not.toThrow()
    expect(finishRound('macbeth', 'who', 3, 6).newBest).toBe(true)
    expect(readProgress('macbeth').rounds).toEqual({})
  })

  it('and with no window at all, on the server', () => {
    delete (globalThis as { window?: unknown }).window
    expect(readProgress('macbeth').rounds).toEqual({})
  })
})

describe('the interface copy', () => {
  const entries = Object.entries(TEXT_GAMES_DICTIONARY)

  it('is in English, Arabic and Spanish', () => {
    expect(entries.length).toBeGreaterThan(60)
    for (const [key, v] of entries) {
      expect(v.en, key).toBeTruthy()
      expect(v.ar, key).toMatch(/[؀-ۿ]/)
      expect(v.es, key).toBeTruthy()
    }
  })

  it('in the house style: no exclamation marks and no dashes for punctuation', () => {
    for (const [key, v] of entries)
      for (const s of [v.en, v.ar ?? '', v.es ?? '']) {
        expect(s, key).not.toMatch(/[!¡]/)
        expect(s, key).not.toMatch(/[—–]| - /)
      }
  })

  it('and every placeholder in English is in the translations too', () => {
    for (const [key, v] of entries) {
      const ph = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort()
      expect(ph(v.ar ?? ''), key).toEqual(ph(v.en))
      expect(ph(v.es ?? ''), key).toEqual(ph(v.en))
    }
  })
})

it('reads the real tree', () => {
  // Vacuity guard: an empty slug list passes every describe.each above.
  expect(existsSync(join(process.cwd(), 'src/data/full-texts'))).toBe(true)
  expect(loaded.size).toBe(slugs.length)
})
