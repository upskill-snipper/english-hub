/// <reference types="vite/client" />
// For import.meta.glob, which vitest provides at runtime and tsc does not know.
import { beforeAll, describe, it, expect } from 'vitest'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'

import { COMIC_LOADERS } from '@/data/comics'
import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import type { TextData } from '@/components/study/InteractiveTextViewer'
import { panelAsSeen, plateFiles, portraitAsSeen, SVG_NS } from '@/lib/comics/plate-file'
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
 * - Every piece's plate file (the SVG the site serves, from
 *   src/lib/comics/plate-file.tsx) is one role="img" whose aria-label IS its
 *   alt text: checked on the rendered file, not the registry, so a plate that
 *   dropped the label would fail here even with the alt text filled in. The
 *   piece as a student's browser ends up showing it (frame, box, inlined
 *   plate) keeps the label on its box too.
 * - Nothing external. The art files are scanned for URLs, images and data
 *   URIs, and the plate files for any url() that is not a reference to an id
 *   the piece itself defines. A dangling reference would silently drop a
 *   filter or a clip, and the piece would render wrong with no error. The one
 *   URL a plate file may carry is the SVG namespace.
 * - The art stays out of the browser: no 'use client' module may import it,
 *   directly or through any chain of imports, and no app module may import
 *   the build-time renderer. How the plates reach the page instead, and the
 *   tests of that, are in comics-delivery.test.ts.
 * - Weight: a plate is fetched whole, on a phone, so each has a ceiling.
 *
 * TIMEOUTS. The first test to load a text's registry, guide and held edition
 * used to pay for those cold imports inside its own five-second budget, and
 * under the full parallel run it ran out (26 September 2026). beforeAll now
 * warms every text first, with a budget sized for a loaded machine, so each
 * test's own limit still catches a real hang.
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

/**
 * Loading every registry, guide and held edition cold. Measured on 26
 * September 2026 with four texts registered: 0.7 s with this file alone, 8.5 s
 * inside the full parallel run of 309 files, which is why a first test paying
 * for it ran out of its 5 s. Seven times the loaded figure, because twenty more
 * texts are queued and a slow machine is not a failure; a hung import still
 * fails here.
 */
const WARM_MS = 60_000
/** Rendering every plate of the largest text twice, with room for a loaded machine. */
const RENDER_MS = 30_000

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

/** Upper bound on one plate file. The style guide asks for under 90 KB. */
const CEILING_BYTES = 110 * 1024

beforeAll(async () => {
  await Promise.all(slugs.map(load))
}, WARM_MS)

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

  it(
    'renders each plate file as one labelled image, deterministic, self-contained and light',
    async () => {
      const { set } = await load(slug)
      const files = plateFiles(set)
      const again = plateFiles(set)
      const pieces = [
        ...set.panels.map((p) => ({ key: p.moment, alt: p.alt, markers: 0 })),
        ...set.portraits.map((p) => ({ key: p.name, alt: p.alt, markers: p.describedBy.length })),
      ]
      expect(
        files.map((f) => f.key),
        'one plate file per piece, in order',
      ).toEqual(pieces.map((p) => p.key))
      files.forEach((f, i) => {
        const piece = pieces[i]
        const svg = f.svg
        const imgs = [...svg.matchAll(/<svg[^>]*role="img"[^>]*>/g)]
        expect(imgs.length, `${f.key}: role="img" plates`).toBe(1)
        expect(svg.startsWith(`<svg xmlns="${SVG_NS}" class="lc-plate" `), `${f.key}: root`).toBe(
          true,
        )
        const label = /aria-label="([^"]*)"/.exec(imgs[0][0])?.[1]
        expect(label && unescapeAttr(label), `${f.key}: aria-label`).toBe(piece.alt)
        expect(again[i].svg === svg, `${f.key}: renders differently twice`).toBe(true)
        expect(danglingRefs(svg), `${f.key}: references to ids it does not define`).toEqual([])
        expect(svg.replace(`xmlns="${SVG_NS}"`, ''), `${f.key}: external reference`).not.toMatch(
          /https?:|<image\b|<img\b|data:[a-z]+\/|url\((?!#)/i,
        )
        expect(
          [...svg.matchAll(/class="lc-marker"/g)].length,
          `${f.key}: numbered markers drawn`,
        ).toBe(piece.markers)
        expect(Buffer.byteLength(svg), `${f.key}: plate weight`).toBeLessThanOrEqual(CEILING_BYTES)
      })
    },
    RENDER_MS,
  )

  it(
    'shows each piece, as the browser ends up with it, under one label',
    async () => {
      const { set } = await load(slug)
      const seen = [
        ...set.panels.map((p) => ({
          alt: p.alt,
          html: renderToStaticMarkup(panelAsSeen(slug, p)),
        })),
        ...set.portraits.map((p) => ({
          alt: p.alt,
          html: renderToStaticMarkup(portraitAsSeen(slug, p, { markers: 'Markers' })),
        })),
      ]
      for (const { alt, html } of seen) {
        // The box the plate is fetched into carries the label from the first
        // byte; the inlined plate inside it carries its own.
        const box = /<div class="lc-art" role="img" aria-label="([^"]*)"/.exec(html)?.[1]
        expect(box && unescapeAttr(box)).toBe(alt)
        expect([...html.matchAll(/<svg[^>]*role="img"/g)].length).toBe(1)
      }
    },
    RENDER_MS,
  )
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

/**
 * The one module under src/components/comics that is not art: it fetches the
 * served plate files and shows each as an <img> until it arrives. It has its
 * own, narrower check below instead of the art files' blanket ban.
 */
const DELIVERY = join(ROOT, 'src/components/comics/linocut/lazy-plate.tsx')

describe('comic art files', () => {
  const art = [
    ...filesUnder(join(ROOT, 'src/data/comics')),
    ...filesUnder(join(ROOT, 'src/components/comics')),
  ].filter((f) => /\.tsx?$/.test(f) && f !== DELIVERY)

  it('are found', () => {
    expect(art.length).toBeGreaterThan(5)
  })

  it('the delivery module fetches and shows only a plate its page was given', () => {
    const code = stripComments(readFileSync(DELIVERY, 'utf8'))
    expect(code, 'a URL').not.toMatch(/https?:\/\/|["'`]\/\/[a-z]/i)
    expect(code, 'a data URI').not.toMatch(/data:[a-z]+\//i)
    // One fetch, of the `src` a PlateRef named, and one <img>, of the same.
    expect([...code.matchAll(/\bfetch\(/g)].length).toBe(1)
    expect(code).toMatch(/\bfetch\(src\)/)
    expect(code).toMatch(/src=\{plate\.src\}/)
    // What it inlines must look like one of our plates first.
    expect(code).toMatch(/class="lc-plate"/)
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

/**
 * The local modules a file imports, resolved to paths: "@/..." and relative
 * specifiers, following re-exports and dynamic imports, skipping `import type`
 * (erased before bundling) and packages.
 */
const importsOf = new Map<string, string[]>()
function localImports(file: string): string[] {
  const known = importsOf.get(file)
  if (known) return known
  const src = stripComments(readFileSync(file, 'utf8'))
  const specs = [
    ...src.matchAll(/^\s*(?:import|export)(?!\s+type\b)[^'"]*?from\s+['"]([^'"]+)['"]/gm),
    ...src.matchAll(/^\s*import\s+['"]([^'"]+)['"]/gm),
    ...src.matchAll(/\bimport\(\s*['"]([^'"]+)['"]\s*\)/g),
  ].map((m) => m[1])
  const out: string[] = []
  for (const spec of specs) {
    const base = spec.startsWith('@/')
      ? join(ROOT, 'src', spec.slice(2))
      : spec.startsWith('.')
        ? join(dirname(file), spec)
        : null
    if (!base) continue
    const hit = ['', '.ts', '.tsx', '/index.ts', '/index.tsx']
      .map((ext) => base + ext)
      .find((p) => existsSync(p) && statSync(p).isFile())
    if (hit) out.push(hit)
  }
  importsOf.set(file, out)
  return out
}

/** Every local module a file reaches, directly or through others. */
function reachable(file: string): Set<string> {
  const seen = new Set<string>()
  const todo = [file]
  while (todo.length) {
    const f = todo.pop()!
    if (seen.has(f)) continue
    seen.add(f)
    todo.push(...localImports(f))
  }
  seen.delete(file)
  return seen
}

describe('the art stays out of the browser', () => {
  const sources = filesUnder(join(ROOT, 'src')).filter(
    (p) => /\.tsx?$/.test(p) && !p.startsWith(join(ROOT, 'src', '__tests__')),
  )
  const linocut = (f: string) => join(ROOT, 'src/components/comics/linocut', f)
  /** What must never be bundled for the browser: the drawings and what builds them. */
  const artOnly = (p: string) =>
    p.startsWith(join(ROOT, 'src/data/comics')) ||
    [
      join(ROOT, 'src/lib/comics/load.ts'),
      join(ROOT, 'src/lib/comics/plate-file.tsx'),
      linocut('index.ts'),
      linocut('plate.tsx'),
      linocut('carve.ts'),
    ].includes(p)

  it('finds the client modules that show comics', () => {
    // Without this, a broken import walk would pass the test below vacuously.
    const player = join(ROOT, 'src/components/study-guide/visuals/story-visuals-client.tsx')
    expect(reachable(player)).toContain(linocut('lazy-plate.tsx'))
    expect(reachable(player)).toContain(linocut('frames.tsx'))
    // And it follows a chain: the player reaches timing.ts only through frames.tsx.
    expect(reachable(player)).toContain(linocut('timing.ts'))
  })

  it(
    'no client module reaches the drawings, the registry or the plate renderer',
    () => {
      const offenders: string[] = []
      for (const f of sources) {
        if (!/^\s*['"]use client['"]/.test(readFileSync(f, 'utf8'))) continue
        for (const r of reachable(f))
          if (artOnly(r)) offenders.push(`${relative(ROOT, f)} reaches ${relative(ROOT, r)}`)
      }
      expect(offenders).toEqual([])
    },
    RENDER_MS,
  )

  it('no app module imports the build-time plate renderer', () => {
    // It imports react-dom/server, which Next refuses in the server components
    // layer; this says so before a build does.
    const renderer = join(ROOT, 'src/lib/comics/plate-file.tsx')
    const offenders = sources
      .filter((f) => f !== renderer && localImports(f).includes(renderer))
      .map((f) => relative(ROOT, f))
    expect(offenders).toEqual([])
  })
})
