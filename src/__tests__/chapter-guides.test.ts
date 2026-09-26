/// <reference types="vite/client" />
// For import.meta.glob, which vitest provides at runtime and tsc does not know.
import { describe, it, expect } from 'vitest'
import { readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import type { TextData } from '@/components/study/InteractiveTextViewer'
import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'
import { inPart } from '@/lib/study-guides/parts'
import { quotedSpans } from '@/lib/study-guides/validate'

/**
 * Every chapter guide in src/data/chapter-guides/<slug>/chapter-<n>.ts.
 *
 * WHAT THIS PROTECTS. A chapter page is where a student goes after reading
 * that chapter, so a quotation from the wrong chapter teaches the wrong thing
 * as surely as an invented one. For a text with an edition held in
 * src/data/full-texts, every close-reading quotation must be found word for
 * word in THAT chapter of the edition, and every phrase quoted in the prose
 * must be found somewhere in the book. The rest pins the bar the pages were
 * written to: the sections a chapter page promises are all there and filled.
 */

const ROOT = join(process.cwd(), 'src/data/chapter-guides')
const modules = import.meta.glob<{ chapter: ChapterGuide }>('../data/chapter-guides/*/chapter-*.ts')

/** Same normalisation as study-guides.test.ts, so both judge a quotation alike. */
function norm(s: string): string {
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
const fragments = (q: string) =>
  q
    .split(/\s*(?:\.\.\.|…|\/)\s*/)
    .map(norm)
    .filter((f) => f.split(' ').length >= 2)

/**
 * The held edition's sections, in order, normalised; null if none is held.
 * Loaded as a module, not read as text: Prettier rewrites these files' quotes
 * and keys at commit, and a pattern over the source would then find nothing
 * and pass every quotation.
 */
const heldModules = import.meta.glob<Record<string, TextData>>('../data/full-texts/*.ts')
async function heldSections(slug: string): Promise<string[] | null> {
  const load = heldModules[`../data/full-texts/${slug}.ts`]
  if (!load) return null
  const data = Object.values(await load()).find((v) => v && Array.isArray(v.sections))
  if (!data) throw new Error(`${slug}: held edition exports no TextData`)
  return data.sections.map((s) => norm(s.content))
}

/** Text outside quotation marks, for the house-style checks. */
const unquoted = (s: string) => s.replace(/“[^”]*”|"[^"]*"|‘[^’]*’/g, ' ')
// Whole American forms only. "labor\w*" and "humor\w*" also caught "laborious"
// and "humorous", which British English spells the same way; the Chapter 1
// writer had to put "laborious" in quotation marks to get past it.
const AMERICANISMS =
  /\b(color(s|ed|ful)?|analyz\w*|behavior(s|al)?|center(s|ed)?|favorite(s)?|honor(s|ed|able)?|humor(s)?|labor(s|ed|ing|er|ers)?|neighbor(s|hood|ing)?|theater|traveled|defense|offense|gray)\b/i

function proseOf(c: ChapterGuide): string[] {
  return [
    c.title,
    c.atAGlance,
    ...c.summary,
    ...c.keyEvents,
    ...c.closeReading.flatMap((q) => [q.technique, q.analysis]),
    ...c.characters.flatMap((x) => [x.name, x.development]),
    ...c.themes.flatMap((x) => [x.theme, x.development]),
    ...c.context.flatMap((x) => [x.heading, x.body]),
    c.structure,
    ...c.vocabulary.flatMap((v) => [v.term, v.meaning]),
    c.examQuestion.question,
    ...c.examQuestion.guidance,
    ...c.examQuestion.tips,
    ...c.quiz.flatMap((q) => [q.question, ...q.options, q.explanation]),
  ]
}

const entries = Object.keys(modules).map((path) => {
  const [, slug, file] = /chapter-guides\/([^/]+)\/(chapter-(\d+))\.ts$/.exec(path)!
  return { path, slug, n: Number(/(\d+)$/.exec(file)![1]) }
})

describe('chapter guides', () => {
  it('are found', () => {
    expect(existsSync(ROOT)).toBe(true)
    expect(entries.length).toBeGreaterThan(0)
  })

  it('cover every chapter of each text they start, with no gaps', async () => {
    const slugs = [...new Set(entries.map((e) => e.slug))]
    for (const slug of slugs) {
      const held = await heldSections(slug)
      const have = entries
        .filter((e) => e.slug === slug)
        .map((e) => e.n)
        .sort((a, b) => a - b)
      const want = Array.from({ length: held ? held.length : Math.max(...have) }, (_, i) => i + 1)
      expect(have, slug).toEqual(want)
      expect(readdirSync(join(ROOT, slug)).filter((f) => /^chapter-\d+\.ts$/.test(f)).length).toBe(
        have.length,
      )
    }
  })
})

describe.each(entries)('chapter guide: $slug chapter $n', ({ path, slug, n }) => {
  const load = async () => (await modules[path]()).chapter

  it('is the chapter its file says it is', async () => {
    const c = await load()
    expect(c.slug).toBe(slug)
    expect(c.chapter).toBe(n)
    expect(c.part).toBe(`Chapter ${n}`)
  })

  it('meets the bar a chapter page promises', async () => {
    const c = await load()
    expect(c.atAGlance.split(/\s+/).length).toBeGreaterThanOrEqual(25)
    expect(c.summary.length).toBeGreaterThanOrEqual(3)
    expect(c.keyEvents.length).toBeGreaterThanOrEqual(4)
    expect(c.closeReading.length).toBeGreaterThanOrEqual(5)
    for (const q of c.closeReading)
      expect(q.analysis.split(/\s+/).length, q.quote).toBeGreaterThanOrEqual(35)
    expect(c.characters.length).toBeGreaterThanOrEqual(2)
    expect(c.themes.length).toBeGreaterThanOrEqual(2)
    expect(c.context.length).toBeGreaterThanOrEqual(1)
    expect(c.structure.split(/\s+/).length).toBeGreaterThanOrEqual(40)
    expect(c.vocabulary.length).toBeGreaterThanOrEqual(6)
    expect(c.examQuestion.guidance.length).toBeGreaterThanOrEqual(4)
    expect(c.examQuestion.tips.length).toBeGreaterThanOrEqual(2)
    expect(c.quiz.length).toBeGreaterThanOrEqual(5)
    for (const q of c.quiz) {
      expect(q.options.length, q.question).toBe(4)
      expect(q.answer, q.question).toBeGreaterThanOrEqual(0)
      expect(q.answer, q.question).toBeLessThan(4)
    }
    // A quiz whose answer is always B teaches the letter, not the chapter.
    expect(new Set(c.quiz.map((q) => q.answer)).size).toBeGreaterThanOrEqual(2)
    expect(c.sources.length).toBeGreaterThanOrEqual(1)
  })

  it('quotes this chapter of the held edition exactly', async () => {
    const c = await load()
    const held = await heldSections(slug)
    if (!held) return // no edition held: nothing to check against
    const here = held[n - 1]
    const book = held.join(' ')
    const missing: string[] = []
    for (const q of c.closeReading)
      for (const f of fragments(q.quote))
        if (!here.includes(f)) missing.push(`close reading: ${q.quote}`)
    for (const span of proseOf(c).flatMap(quotedSpans))
      for (const f of fragments(span)) if (!book.includes(f)) missing.push(`in prose: ${span}`)
    expect(missing, 'quotations not found where the guide says they are').toEqual([])
  })

  it('writes in the house style outside its quotations', async () => {
    const c = await load()
    const bad = proseOf(c)
      .map(unquoted)
      .filter((s) => /\u2014|\u2013| -- |!/.test(s) || AMERICANISMS.test(s))
    expect(bad, 'em or en dash, exclamation mark or American spelling').toEqual([])
  })

  it('has moments for the scene player to show', async () => {
    const c = await load()
    const guide = await STUDY_GUIDE_LOADERS[slug]()
    expect(guide.timeline.filter((m) => inPart(m.where, c.part)).length).toBeGreaterThanOrEqual(1)
  })
})
