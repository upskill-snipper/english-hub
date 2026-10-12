import { describe, expect, it } from 'vitest'

import { COMIC_LOADERS } from '@/data/comics'
import {
  buildQuest,
  chapterCount,
  chapterOf,
  MIN_CHAPTER,
  quoteWords,
} from '@/lib/games/quest/build'
import { dealLevel, PLAY_SIZE, placedIsRight } from '@/lib/games/quest/deal'
import { loadQuest, quotedBeyondPath } from '@/lib/games/quest/load'
import type { Challenge, Quest } from '@/lib/games/quest/types'
import { buildTextGame } from '@/lib/games/text-games/build'
import {
  loadGameArt,
  loadHeldEdition,
  loadTextGame,
  textGameSlugs,
} from '@/lib/games/text-games/load'
import { normForMatch, themesMayOverlap, wheresMayOverlap } from '@/lib/games/text-games/text'
import { loadStudyGuide } from '@/lib/study-guides/load'

/**
 * Text quests (12 October 2026) are built only from checked material, and
 * every challenge has exactly one right answer.
 *
 * A quest arranges a text's games as chapters with comic panels to collect.
 * Its new challenges come from two places only: a comic panel's verbatim
 * quotation (src/data/comics) and a portrait marker's phrase; everything else
 * is an item the text-games builder made and already proves. These tests hold
 * every quest for every text to that, and hold a text in copyright to quoting
 * nothing its measured guided path does not.
 *
 * MUTATIONS: see the note at the foot of this file for which were run, and
 * what each one failed.
 */

const slugs = textGameSlugs()
const quests = new Map<string, Quest>()

async function questFor(slug: string): Promise<Quest> {
  let q = quests.get(slug)
  if (!q) {
    q = (await loadQuest(slug))!
    quests.set(slug, q)
  }
  return q
}

function allChallenges(q: Quest): Challenge[] {
  return q.challenges
}

describe('chapters', () => {
  it('splits a text into chapters of four or five moments, three to six of them', () => {
    expect(chapterCount(4)).toBe(1)
    expect(chapterCount(7)).toBe(2)
    expect(chapterCount(12)).toBe(3)
    expect(chapterCount(23)).toBe(5)
    expect(chapterCount(33)).toBe(6)
    // Every moment lands in a chapter, in order.
    const n = 23
    const c = chapterCount(n)
    const chapters = Array.from({ length: n }, (_, i) => chapterOf(i, n, c))
    expect(chapters[0]).toBe(1)
    expect(chapters[n - 1]).toBe(c)
    expect(chapters.every((v, i) => i === 0 || v >= chapters[i - 1])).toBe(true)
  })
})

describe('every text quest', () => {
  it('builds for every text with guided games, with a finale and chapters worth playing', async () => {
    expect(slugs.length).toBeGreaterThan(100)
    for (const slug of slugs) {
      const q = await questFor(slug)
      expect(q, slug).toBeTruthy()
      expect(q.levels.at(-1)?.kind, slug).toBe('finale')
      const ids = new Set(q.challenges.map((c) => c.id))
      expect(ids.size, `${slug} challenges are stored once`).toBe(q.challenges.length)
      for (const l of q.levels) {
        if (l.kind === 'chapter')
          expect(l.pool.length, `${slug} ${l.id}`).toBeGreaterThanOrEqual(MIN_CHAPTER)
        for (const id of l.pool) expect(ids.has(id), `${slug} ${l.id} ${id}`).toBe(true)
      }
      // Light enough for a phone: the whole quest the page carries.
      expect(JSON.stringify(q).length, `${slug} quest size`).toBeLessThan(160_000)
    }
  }, 300_000)

  it('gives every choice one right answer among distinct options', async () => {
    for (const slug of slugs) {
      const q = await questFor(slug)
      for (const c of allChallenges(q)) {
        if (c.type === 'panel-line' || c.type === 'line-panel' || c.type === 'whose') {
          expect(c.options, `${slug} ${c.id}`).toContain(c.answer)
          expect(new Set(c.options.map(normForMatch)).size, `${slug} ${c.id}`).toBe(
            c.options.length,
          )
          expect(c.options.length, `${slug} ${c.id}`).toBeGreaterThanOrEqual(3)
        }
        if (c.type === 'rebuild') {
          expect(c.words.join(' '), `${slug} ${c.id}`).toBe(quoteWords(c.quote).join(' '))
          expect(
            placedIsRight(
              c,
              c.words.map((_, i) => i),
            ),
          ).toBe(true)
        }
      }
    }
  }, 300_000)

  it('quotes only what a text in copyright already quotes on its measured path, and shows it no comic challenge', async () => {
    let checked = 0
    for (const slug of slugs) {
      const guide = await loadStudyGuide(slug)
      if (guide?.rights.status !== 'copyright') continue
      const q = await questFor(slug)
      const game = await loadTextGame(slug)
      expect(quotedBeyondPath(q, game!), slug).toEqual([])
      const comic = allChallenges(q).filter((c) =>
        ['panel-line', 'line-panel', 'whose', 'marker'].includes(c.type),
      )
      expect(comic, slug).toEqual([])
      expect(q.hasComic, slug).toBe(false)
      checked++
    }
    expect(checked).toBeGreaterThan(50)
  }, 300_000)

  it('gives a text in copyright no comic even when it has one', async () => {
    // No text in copyright has a comic, so the case above cannot fail on the
    // comic rule whatever the builder does. This one can: Macbeth's own
    // guide, comic and art, with the guide's rights set to copyright.
    const real = (await loadStudyGuide('macbeth'))!
    const guide = { ...real, rights: { ...real.rights, status: 'copyright' as const } }
    const [art, held, comics] = await Promise.all([
      loadGameArt('macbeth'),
      loadHeldEdition('macbeth'),
      COMIC_LOADERS.macbeth(),
    ])
    expect(comics.panels.length).toBeGreaterThan(0)
    const q = buildQuest({ guide, comics, art, held })
    const comic = allChallenges(q).filter((c) =>
      ['panel-line', 'line-panel', 'whose', 'marker'].includes(c.type),
    )
    expect(comic).toEqual([])
    expect(q.hasComic).toBe(false)
    expect(q.levels.flatMap((l) => l.panels)).toEqual([])
    // And it quotes nothing its own path does not.
    const path = buildTextGame({ guide, art, held })
    expect(quotedBeyondPath(q, path)).toEqual([])
  })
})

describe('the comic challenges', () => {
  const comicSlugs = Object.keys(COMIC_LOADERS).filter((s) => slugs.includes(s))

  it('ask for a panel line that is that panel’s own, verbatim, and appears on one panel only', async () => {
    for (const slug of comicSlugs) {
      const comics = await COMIC_LOADERS[slug]()
      const q = await questFor(slug)
      const quoteOf = new Map(comics.panels.map((p) => [p.moment, p.quote]))
      for (const c of allChallenges(q)) {
        if (c.type === 'panel-line') {
          expect(c.answer, `${slug} ${c.id}`).toBe(quoteOf.get(c.moment.title))
          const sharing = comics.panels.filter(
            (p) => p.quote && normForMatch(p.quote) === normForMatch(c.answer),
          )
          expect(sharing.length, `${slug} ${c.id}`).toBe(1)
        }
        if (c.type === 'line-panel') {
          expect(quoteOf.get(c.answer), `${slug} ${c.id}`).toBe(c.quote)
        }
      }
    }
  }, 300_000)

  it('drop a line two panels share, which could be the answer for neither', async () => {
    // No comic has two panels with one line today, so the case above cannot
    // fail on this rule whatever the builder does. This one gives Macbeth's
    // comic a second panel carrying a line the quest really asks about.
    const guide = (await loadStudyGuide('macbeth'))!
    const [art, held, real] = await Promise.all([
      loadGameArt('macbeth'),
      loadHeldEdition('macbeth'),
      COMIC_LOADERS.macbeth(),
    ])
    const plain = buildQuest({ guide, comics: real, art, held })
    const asked = plain.challenges.find((c) => c.type === 'panel-line')
    expect(asked, 'Macbeth asks no panel line, so this proves nothing').toBeTruthy()
    const line = (asked as Extract<Challenge, { type: 'panel-line' }>).answer
    const other = real.panels.find((p) => p.quote && normForMatch(p.quote) !== normForMatch(line))!
    const comics = {
      ...real,
      panels: real.panels.map((p) => (p === other ? { ...p, quote: line } : p)),
    }
    const q = buildQuest({ guide, comics, art, held })
    const uses = q.challenges.filter(
      (c) =>
        (c.type === 'panel-line' &&
          c.options.some((o) => normForMatch(o) === normForMatch(line))) ||
        (c.type === 'line-panel' && normForMatch(c.quote) === normForMatch(line)),
    )
    expect(uses.map((c) => c.id)).toEqual([])
  })

  it('panel lines come from elsewhere: no wrong option could be the same place', async () => {
    for (const slug of comicSlugs) {
      const comics = await COMIC_LOADERS[slug]()
      const q = await questFor(slug)
      const whereOf = new Map(q.moments.map((m) => [m.title, m.where]))
      const momentOfQuote = new Map(
        comics.panels.filter((p) => p.quote).map((p) => [normForMatch(p.quote!), p.moment]),
      )
      for (const c of allChallenges(q)) {
        if (c.type === 'panel-line') {
          for (const o of c.options.filter((o) => o !== c.answer)) {
            const m = momentOfQuote.get(normForMatch(o))!
            expect(wheresMayOverlap(whereOf.get(m)!, c.moment.where), `${slug} ${c.id}: ${o}`).toBe(
              false,
            )
          }
        }
        if (c.type === 'line-panel') {
          for (const o of c.options.filter((o) => o !== c.answer)) {
            expect(wheresMayOverlap(whereOf.get(o)!, c.moment.where), `${slug} ${c.id}: ${o}`).toBe(
              false,
            )
          }
        }
      }
    }
  }, 300_000)

  it('ask whose description a marker phrase is, and which marker, from the portrait registry', async () => {
    for (const slug of comicSlugs) {
      const comics = await COMIC_LOADERS[slug]()
      const q = await questFor(slug)
      for (const c of allChallenges(q)) {
        if (c.type === 'whose') {
          const p = comics.portraits.find((x) => x.name === c.answer)!
          expect(
            p.describedBy.map((m) => m.phrase),
            `${slug} ${c.id}`,
          ).toContain(c.phrase)
          for (const o of c.options.filter((o) => o !== c.answer)) {
            const other = comics.portraits.find((x) => x.name === o)!
            expect(other.describedBy.map((m) => normForMatch(m.phrase))).not.toContain(
              normForMatch(c.phrase),
            )
          }
        }
        if (c.type === 'marker') {
          const p = comics.portraits.find((x) => x.name === c.portrait)!
          expect(p.describedBy[c.answer - 1].phrase, `${slug} ${c.id}`).toBe(c.phrase)
          expect(q.art.markers[c.portrait].at).toEqual(p.describedBy.map((m) => m.at))
          expect(q.art.markers[c.portrait].at.length).toBeGreaterThanOrEqual(3)
        }
      }
    }
  }, 300_000)

  it('mark a theme card yes only for a theme the moment carries, and no only for one that cannot overlap', async () => {
    for (const slug of slugs) {
      const q = await questFor(slug)
      for (const c of allChallenges(q)) {
        if (c.type !== 'theme-check') continue
        if (c.answer) expect(c.carries, `${slug} ${c.id}`).toContain(c.theme)
        else
          expect(
            c.carries.some((t) => themesMayOverlap(t, c.theme)),
            `${slug} ${c.id}`,
          ).toBe(false)
      }
    }
  }, 300_000)
})

describe('a play of a level', () => {
  it('deals at most a play’s worth, no challenge twice, a chapter opening with its story order', async () => {
    const q = await questFor('macbeth')
    for (const l of q.levels) {
      const dealt = dealLevel(q, l, 0)
      expect(dealt.length).toBeLessThanOrEqual(PLAY_SIZE[l.kind])
      expect(new Set(dealt.map((d) => d.challenge.id)).size).toBe(dealt.length)
      if (l.kind === 'chapter') expect(dealt[0].challenge.id).toMatch(/^item:order:chapter-/)
    }
  })

  it('puts the right answer in every position about as often, across every quest', async () => {
    // The site's rule (no-quiz-answer-is-always-b.test.ts) checks that a
    // surface uses the shared shuffle. This measures what students meet: the
    // right answer's position in every four-option choice, over three plays
    // of every level of every quest. The guides list each answer first, so a
    // deal in authored order would put it at A every time.
    const counts = [0, 0, 0, 0]
    let n = 0
    for (const slug of slugs) {
      const q = await questFor(slug)
      for (const l of q.levels)
        for (const play of [0, 1, 2])
          for (const d of dealLevel(q, l, play)) {
            if (d.options.length !== 4) continue
            const c = d.challenge
            const answer =
              c.type === 'item'
                ? (c.item as { answer: string }).answer
                : (c as { answer: string }).answer
            const i = d.options.indexOf(answer)
            expect(i, `${slug} ${c.id}`).toBeGreaterThanOrEqual(0)
            counts[i]++
            n++
          }
    }
    expect(n).toBeGreaterThan(5000)
    for (const [i, k] of counts.entries()) {
      expect(k / n, `answer in position ${'ABCD'[i]}`).toBeGreaterThan(0.18)
      expect(k / n, `answer in position ${'ABCD'[i]}`).toBeLessThan(0.32)
    }
  }, 300_000)

  it('deals every option and card, and never a story order or quotation already solved', async () => {
    // Carried over from the guided path's dealer when it was retired
    // (text-games-are-built-from-the-guides.test.ts, 12 October 2026).
    let decks = 0
    for (const slug of slugs) {
      const q = await questFor(slug)
      for (const l of q.levels)
        for (const play of [0, 1])
          for (const d of dealLevel(q, l, play)) {
            const c = d.challenge
            const where = `${slug} ${l.id} play ${play} ${c.id}`
            const n =
              c.type === 'rebuild'
                ? c.words.length
                : c.type === 'item' && c.item.kind === 'order'
                  ? c.item.moments.length
                  : 0
            if (n > 0) {
              expect(
                [...d.deck].sort((a, b) => a - b),
                where,
              ).toEqual(Array.from({ length: n }, (_, i) => i))
              if (n > 1)
                expect(
                  d.deck.every((v, i) => v === i),
                  `${where} dealt solved`,
                ).toBe(false)
              decks++
            }
            const offered =
              c.type === 'item'
                ? ((c.item as { options?: string[] }).options ?? [])
                : 'options' in c
                  ? c.options
                  : []
            expect([...d.options].sort(), where).toEqual([...offered].sort())
          }
    }
    expect(decks).toBeGreaterThan(1000)
  }, 300_000)

  it('is the same deal for the same play, and a different one for the next', async () => {
    const q = await questFor('macbeth')
    const l = q.levels[0]
    expect(dealLevel(q, l, 0).map((d) => d.challenge.id)).toEqual(
      dealLevel(q, l, 0).map((d) => d.challenge.id),
    )
    expect(dealLevel(q, l, 1).map((d) => d.challenge.id)).not.toEqual(
      dealLevel(q, l, 0).map((d) => d.challenge.id),
    )
  })

  it('is built the same way twice', async () => {
    const guide = (await loadStudyGuide('macbeth'))!
    const [art, held] = await Promise.all([loadGameArt('macbeth'), loadHeldEdition('macbeth')])
    const comics = await COMIC_LOADERS.macbeth()
    const a = buildQuest({ guide, comics, art, held })
    const b = buildQuest({ guide, comics, art, held })
    expect(JSON.stringify(a)).toBe(JSON.stringify(b))
  })
})

/*
 * MUTATIONS RUN on 12 October 2026, each checked to have changed the file,
 * then the file restored. Each was caught by the test named:
 *
 *   - panel distractors allowed from the same place (wheresMayOverlap removed
 *     from elsewhere()): "panel lines come from elsewhere".
 *   - panel lines built for a text in copyright, and, separately, a copyright
 *     quest keeping its panels to collect: "gives a text in copyright no
 *     comic even when it has one".
 *   - a line two panels share let through: "drop a line two panels share".
 *     This one SURVIVED the first run, against an earlier docblock that
 *     claimed "appears on one panel only" would catch it. It cannot: no comic
 *     has a shared line, so that test never meets one. The synthetic case was
 *     written for it and catches it.
 *   - the deal's shuffle removed (deal.ts): "puts the right answer in every
 *     position" (position 0 at 100%), and "shuffles its options" in
 *     no-quiz-answer-is-always-b.test.ts.
 *   - a story order or quotation allowed to be dealt already solved
 *     (deal.ts, shuffledDeck): "deals every option and card, and never a
 *     story order or quotation already solved".
 *
 * The player's own mutations (scoring, review order, storage, the map, the
 * keyboard, marking, the comic) are listed in
 * a-quest-plays-from-the-map-to-the-comic.test.tsx.
 */
