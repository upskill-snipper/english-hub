/// <reference types="vite/client" />
// For import.meta.glob, which vitest provides at runtime and tsc does not know.
import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { COMIC_LOADERS } from '@/data/comics'
import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import { RegisteredPanel, RegisteredPortrait } from '@/components/comics/linocut'
import type { TextData } from '@/components/study/InteractiveTextViewer'
import type { ComicSet } from '@/lib/comics/types'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The linocut comic art: src/data/comics/<slug>/, drawn with the primitives in
 * src/components/comics/linocut/.
 *
 * WHAT THIS PROTECTS, and what each check would report if the thing it guards
 * were missing:
 *
 * - A panel is found by the exact title of its moment. A title reworded in the
 *   guide would make its panel silently stop showing, so every key must be a
 *   timeline title of its own text, and unique there.
 * - Quotations on art are verbatim. For a text with an edition held in
 *   src/data/full-texts, against that edition, word for word and mark for
 *   mark (only straight and curly quotation marks are treated as one); for a
 *   text with none held, against the guide's own verified quotations. A
 *   quotation may not run across a paragraph break. 15 words at most, and a
 *   whole passage only for a public-domain text.
 * - Every piece renders as one role="img" whose aria-label IS its alt text:
 *   checked on the rendered markup, not the registry, so a frame that dropped
 *   the label would fail here even with the alt text filled in.
 * - Nothing external. The art files are scanned for URLs, images and data
 *   URIs, and the rendered markup for any url() that is not a reference to an
 *   id the piece itself defines. A dangling reference would silently drop a
 *   filter or a clip, and the piece would render wrong with no error.
 * - The art stays on the server: no 'use client' file may import it.
 * - Weight: every panel of a text is sent with the page, so each piece has a
 *   ceiling.
 */

const ROOT = process.cwd()
const heldModules = import.meta.glob<Record<string, TextData>>('../data/full-texts/*.ts')

/** The held edition as paragraphs of plain text, or null if none is held. */
async function heldParagraphs(slug: string): Promise<string[] | null> {
  const load = heldModules[`../data/full-texts/${slug}.ts`]
  if (!load) return null
  const data = Object.values(await load()).find((v) => v && Array.isArray(v.sections))
  if (!data) throw new Error(`${slug}: held edition exports no TextData`)
  return data.sections.flatMap((s) =>
    s.content
      .split(/<\/p>|<br\s*\/?>/)
      .map((p) => plain(p.replace(/<[^>]+>/g, ' ')))
      .filter(Boolean),
  )
}

/**
 * Verbatim, with the only allowances a reader would not notice: curly and
 * straight quotation marks are the same mark, and runs of white space are one
 * space. Case, spelling and every other mark must match.
 */
function plain(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

/** The guide's own quotations: what a text with no held edition is checked against. */
function guideQuotations(g: StudyGuide): string[] {
  return [
    ...(g.keyQuotes ?? []).map((q) => q.text),
    ...g.timeline.flatMap((m) => (m.quote ? [m.quote] : [])),
    ...(g.extracts ?? []).flatMap((e) => [
      ...(e.text ? e.text.split(/\s+\/\s+/) : []),
      ...e.annotations.map((a) => a.phrase),
    ]),
  ].map(plain)
}

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length

const slugs = Object.keys(COMIC_LOADERS)

type Loaded = { set: ComicSet; guide: StudyGuide; held: string[] | null }
const cache = new Map<string, Promise<Loaded>>()
function load(slug: string): Promise<Loaded> {
  if (!cache.has(slug))
    cache.set(
      slug,
      (async () => ({
        set: await COMIC_LOADERS[slug](),
        guide: await STUDY_GUIDE_LOADERS[slug](),
        held: await heldParagraphs(slug),
      }))(),
    )
  return cache.get(slug)!
}

/** Is `quote` verbatim in the held edition, or failing that in the guide? */
function verbatim({ guide, held }: Loaded, quote: string): boolean {
  const q = plain(quote)
  if (held) return held.some((p) => p.includes(q))
  return guideQuotations(guide).some((g) => g.includes(q))
}

/** Every url(#id) and href="#id" in the markup points at an id it defines. */
function danglingRefs(html: string): string[] {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  const refs = [
    ...[...html.matchAll(/url\(#([^)]+)\)/g)].map((m) => m[1]),
    ...[...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]),
  ]
  return refs.filter((r) => !ids.has(r))
}

/** An attribute value as rendered, back to the string it was given as. */
const unescapeAttr = (s: string) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')

/** Upper bound on one piece's markup. The style guide asks for under 90 KB. */
const CEILING_BYTES = 110 * 1024

describe('comic registry', () => {
  it('has registered art to check', () => {
    // Without this, an emptied register would pass every test below.
    expect(slugs.length).toBeGreaterThan(0)
  })

  it.each(slugs)('%s: has a study guide, and its registry names itself', async (slug) => {
    expect(STUDY_GUIDE_LOADERS[slug], `${slug} has no study guide`).toBeTypeOf('function')
    const { set } = await load(slug)
    expect(set.slug).toBe(slug)
    expect(set.panels.length + set.portraits.length).toBeGreaterThan(0)
  })
})

describe.each(slugs)('comics: %s', (slug) => {
  it('keys every panel by the exact title of a moment in its guide, once', async () => {
    const { set, guide } = await load(slug)
    const titles = guide.timeline.map((m) => m.title)
    for (const p of set.panels) {
      expect(titles, `"${p.moment}" is not a timeline title of ${slug}`).toContain(p.moment)
      expect(
        titles.filter((t) => t === p.moment).length,
        `"${p.moment}" is the title of more than one moment, so the player cannot tell them apart`,
      ).toBe(1)
    }
    const keys = set.panels.map((p) => p.moment)
    expect(new Set(keys).size, 'two panels for one moment').toBe(keys.length)
  })

  it('names each portrait as the guide names the character', async () => {
    const { set, guide } = await load(slug)
    const names = new Set([
      ...(guide.characters ?? []).map((c) => c.name),
      ...guide.timeline.flatMap((m) => m.who),
      ...guide.relationships.flatMap((r) => [r.from, r.to]),
    ])
    for (const p of set.portraits) expect([...names], p.name).toContain(p.name)
  })

  it('quotes the text verbatim, and briefly', async () => {
    const loaded = await load(slug)
    const { set, guide } = loaded
    for (const p of set.panels) {
      if (!p.quote) continue
      expect(verbatim(loaded, p.quote), `panel "${p.moment}": "${p.quote}"`).toBe(true)
      expect(words(p.quote), `panel "${p.moment}" quotation`).toBeLessThanOrEqual(15)
    }
    for (const p of set.portraits) {
      expect(p.describedBy.length, `${p.name} has no markers`).toBeGreaterThan(0)
      for (const m of p.describedBy) {
        expect(verbatim(loaded, m.phrase), `${p.name}: "${m.phrase}"`).toBe(true)
        expect(words(m.phrase), `${p.name}: "${m.phrase}"`).toBeLessThanOrEqual(15)
      }
      if (p.passage) {
        expect(
          guide.rights.status,
          `${p.name}: a whole passage may be printed only from a public-domain text`,
        ).toBe('public-domain')
        expect(verbatim(loaded, p.passage), `${p.name}: passage`).toBe(true)
        for (const m of p.describedBy)
          expect(p.passage, `${p.name}: marker phrase not in its passage`).toContain(m.phrase)
      }
    }
  })

  it('gives every piece alt text in the house style', async () => {
    const { set } = await load(slug)
    const alts = [
      ...set.panels.map((p) => ({ key: p.moment, alt: p.alt })),
      ...set.portraits.map((p) => ({ key: p.name, alt: p.alt })),
    ]
    for (const { key, alt } of alts) {
      expect(alt.trim().length, `${key}: alt text`).toBeGreaterThanOrEqual(80)
      expect(alt, `${key}: em or en dash in alt text`).not.toMatch(/[—–]/)
      expect(alt, `${key}: exclamation mark in alt text`).not.toMatch(/!/)
    }
    for (const p of set.portraits)
      expect(p.alt, `${p.name}: alt text must say what the numbered markers point to`).toMatch(
        /marker/i,
      )
  })

  it('renders each piece as one labelled image, deterministic, self-contained and light', async () => {
    const { set } = await load(slug)
    const pieces = [
      ...set.panels.map((panel) => ({
        key: panel.moment,
        alt: panel.alt,
        markers: 0,
        el: () => createElement(RegisteredPanel, { slug, panel }),
      })),
      ...set.portraits.map((portrait) => ({
        key: portrait.name,
        alt: portrait.alt,
        markers: portrait.describedBy.length,
        el: () =>
          createElement(RegisteredPortrait, { slug, portrait, labels: { markers: 'Markers' } }),
      })),
    ]
    for (const p of pieces) {
      const html = renderToStaticMarkup(p.el())
      const imgs = [...html.matchAll(/<svg[^>]*role="img"[^>]*>/g)]
      expect(imgs.length, `${p.key}: role="img" plates`).toBe(1)
      const label = /aria-label="([^"]*)"/.exec(imgs[0][0])?.[1]
      expect(label && unescapeAttr(label), `${p.key}: aria-label`).toBe(p.alt)
      expect(renderToStaticMarkup(p.el()), `${p.key}: renders differently twice`).toBe(html)
      expect(danglingRefs(html), `${p.key}: references to ids it does not define`).toEqual([])
      expect(html, `${p.key}: external reference`).not.toMatch(
        /https?:|<image\b|<img\b|data:[a-z]+\/|url\((?!#)/i,
      )
      expect(
        [...html.matchAll(/class="lc-marker"/g)].length,
        `${p.key}: numbered markers drawn`,
      ).toBe(p.markers)
      expect(Buffer.byteLength(html), `${p.key}: markup weight`).toBeLessThanOrEqual(CEILING_BYTES)
    }
  })
})

/** Every file under a directory, recursively. */
function filesUnder(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? filesUnder(p) : [p]
  })
}
const stripComments = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^\s*\/\/.*$/gm, ' ')

describe('comic art files', () => {
  const art = [
    ...filesUnder(join(ROOT, 'src/data/comics')),
    ...filesUnder(join(ROOT, 'src/components/comics')),
  ].filter((f) => /\.tsx?$/.test(f))

  it('are found', () => {
    expect(art.length).toBeGreaterThan(5)
  })

  it.each(art.map((f) => relative(ROOT, f)))('%s reaches for nothing external', (file) => {
    const src = readFileSync(join(ROOT, file), 'utf8')
    expect(src, 'a URL').not.toMatch(/https?:\/\/|["'`]\/\/[a-z]/i)
    expect(src, 'an image').not.toMatch(/<image\b|<img\b|\bxlinkHref\b/)
    expect(src, 'a data URI').not.toMatch(/data:[a-z]+\//i)
    expect(src, 'a url() that is not a fragment').not.toMatch(/url\((?!#)/)
    // The one href that is not a fragment is the stylesheet's dedupe key.
    expect(src, 'an href that is not a fragment').not.toMatch(/\bhref=["'{`](?!#|lc-linocut")/)
    expect(src, 'a fetch, import or font').not.toMatch(/\bfetch\(|@import|@font-face/)
  })

  it.each(art.filter((f) => f.includes('data')).map((f) => relative(ROOT, f)))(
    '%s is a pure server drawing',
    (file) => {
      const code = stripComments(readFileSync(join(ROOT, file), 'utf8'))
      expect(code, "'use client'").not.toMatch(/['"]use client['"]/)
      expect(code, 'Math.random: use rng(seed)').not.toMatch(/Math\.random/)
      expect(code, 'the date or time').not.toMatch(/\bnew Date\b|Date\.now/)
      expect(code, 'a React hook').not.toMatch(/\buse(State|Effect|Ref|Memo|Callback|Id|Context)\b/)
    },
  )
})

describe('the art stays on the server', () => {
  it('no client component imports the drawings or the registry', () => {
    const offenders: string[] = []
    for (const f of filesUnder(join(ROOT, 'src')).filter((p) => /\.tsx?$/.test(p))) {
      const src = readFileSync(f, 'utf8')
      if (!/^\s*['"]use client['"]/.test(src)) continue
      const imports = [...src.matchAll(/from\s+['"]([^'"]+)['"]/g)].map((m) => m[1])
      for (const i of imports)
        if (
          i.startsWith('@/data/comics') ||
          i === '@/lib/comics/load' ||
          (i.startsWith('@/components/comics/linocut') &&
            i !== '@/components/comics/linocut/play-on-view')
        )
          offenders.push(`${relative(ROOT, f)} imports ${i}`)
    }
    expect(offenders).toEqual([])
  })
})
