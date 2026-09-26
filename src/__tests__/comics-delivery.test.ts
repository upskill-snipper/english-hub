import { beforeAll, describe, it, expect, vi } from 'vitest'
import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createElement, isValidElement, type ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { COMIC_LOADERS } from '@/data/comics'
import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import { LazyPlate } from '@/components/comics/linocut/lazy-plate'
import { PlayOnView } from '@/components/comics/linocut/play-on-view'
import { LinocutStyles } from '@/components/comics/linocut/styles'
import { CharacterPortrait } from '@/components/study-guide/visuals/character-portrait'
import { CharactersAsDescribed } from '@/components/study-guide/visuals/characters-as-described'
import { StoryVisuals } from '@/components/study-guide/visuals/story-visuals'
import { StoryVisualsClient } from '@/components/study-guide/visuals/story-visuals-client'
import { PLATES_DIR, plateFiles, SVG_NS, type PlateFile } from '@/lib/comics/plate-file'
import { PLATE_SRC } from '@/lib/comics/plates.generated'
import type { ComicSet } from '@/lib/comics/types'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * How the linocut comics reach a page: as small descriptors, with each drawing
 * a file of its own that the browser fetches when it is about to be seen.
 *
 * WHAT BROKE (measured on production, 26 September 2026). The key-moments
 * player was handed every panel of its text as a server-rendered React
 * element, and the gallery handed PlayOnView each portrait in full, so every
 * drawing was serialised into the page's RSC payload as well as its HTML,
 * whether or not the student ever opened that moment. A Christmas Carol's page
 * was 3.3 MB of HTML and 672 KB on the wire, Macbeth's 3.7 MB and 752 KB,
 * against 476 KB and 58 KB for An Inspector Calls, which has no comics. Many
 * readers are children on phones, and these are search entry pages. See
 * src/components/study-guide/visuals/story-visuals.tsx.
 *
 * WHAT THIS PROTECTS, and what each check would report if the thing it guards
 * were missing:
 *
 * - The server hands the browser plain data. For every registered text, the
 *   real server components (StoryVisuals and CharactersAsDescribed) are
 *   called, and every client component in what they return is checked: its
 *   props must be JSON-plain (no React element, no function), and each piece's
 *   descriptor must be under DESCRIPTOR_CEILING. A drawing handed over as an
 *   element fails the first; one smuggled in as a string of markup fails the
 *   second, by several times.
 * - The HTML carries no drawing: the same trees rendered to markup hold no
 *   <svg class="lc-plate">, and one <img> of a served file for each piece that
 *   is shown on first paint, labelled with its alt text.
 * - The styles are there: both wrappers render LinocutStyles, because the
 *   frames, rendered in the browser, deliberately do not.
 * - One served file per registered piece, holding that piece's plate: the
 *   manifest names exactly the registered pieces, each by the name a fresh
 *   render gives it; public/comics/<slug>/ holds exactly those files and no
 *   others; each file is byte for byte that fresh render, its name carries
 *   its own hash, and its root is the plate, labelled with the piece's alt
 *   text, sized to its drawing, with a portrait's markers drawn.
 *
 * If the files are missing or stale, the message says what to run:
 * node scripts/generate-comic-plates.mjs (predev and pretest run it).
 */

vi.mock('@/lib/i18n/t', () => ({ t: async (key: string) => key }))

const ROOT = process.cwd()
const slugs = Object.keys(COMIC_LOADERS)
const REGENERATE = 'run: node scripts/generate-comic-plates.mjs'

/**
 * The most one piece's descriptor may weigh, as JSON. A descriptor is words:
 * the alt text (the longest registered is 1.1 KB), a quotation of at most 15
 * words or a caption, a portrait's phrases and, for a public-domain text, the
 * passage they come from, plus a URL and two numbers. The largest today is
 * 2.6 KB, the Ghost of Christmas Past's card with its passage (measured 26
 * September 2026), so 6 KB leaves room for a longer passage. The smallest
 * drawing registered is 23 KB of markup, so a piece that carried its drawing,
 * in any form, would be over this several times.
 */
const DESCRIPTOR_CEILING = 6 * 1024

/** Loading every registry and guide cold, under a loaded machine; see comics.test.ts. */
const WARM_MS = 60_000
/** Rendering every plate of every text, with room for a loaded machine. */
const RENDER_MS = 60_000

type Loaded = { set: ComicSet; guide: StudyGuide; files: PlateFile[] }
const loaded = new Map<string, Loaded>()
beforeAll(async () => {
  for (const slug of slugs) {
    const [set, guide] = await Promise.all([COMIC_LOADERS[slug](), STUDY_GUIDE_LOADERS[slug]()])
    loaded.set(slug, { set, guide, files: plateFiles(set) })
  }
}, WARM_MS + RENDER_MS)
const get = (slug: string) => loaded.get(slug)!

/** The client components a server wrapper may hand props to. */
const CLIENT = new Map<unknown, string>([
  [StoryVisualsClient, 'StoryVisualsClient'],
  [CharacterPortrait, 'CharacterPortrait'],
  [PlayOnView, 'PlayOnView'],
  [LazyPlate, 'LazyPlate'],
])

type Handed = { name: string; props: Record<string, unknown> }

/**
 * Every client component element in a server component's output, with the
 * props the server hands it. Server-side elements are walked into; a client
 * element is a boundary, and its props are what gets serialised.
 */
function handedToClient(node: ReactNode, out: Handed[] = []): Handed[] {
  if (Array.isArray(node)) for (const n of node) handedToClient(n, out)
  else if (isValidElement(node)) {
    const props = node.props as Record<string, unknown>
    const name = CLIENT.get(node.type)
    if (name) out.push({ name, props })
    else handedToClient(props.children as ReactNode, out)
  }
  return out
}

/** Paths in `value` that are not plain data: a React element, a function, a class instance. */
function notPlain(value: unknown, path = 'props'): string[] {
  if (value === null || ['string', 'number', 'boolean', 'undefined'].includes(typeof value))
    return []
  if (isValidElement(value)) return [`${path} is a React element`]
  if (typeof value !== 'object') return [`${path} is a ${typeof value}`]
  if (Array.isArray(value)) return value.flatMap((v, i) => notPlain(v, `${path}[${i}]`))
  if (Object.getPrototypeOf(value) !== Object.prototype) return [`${path} is not a plain object`]
  return Object.entries(value).flatMap(([k, v]) => notPlain(v, `${path}.${k}`))
}

/** Does the tree render LinocutStyles anywhere on the server side? */
function rendersStyles(node: ReactNode): boolean {
  if (Array.isArray(node)) return node.some(rendersStyles)
  if (!isValidElement(node)) return false
  if (node.type === LinocutStyles) return true
  if (CLIENT.has(node.type)) return false
  return rendersStyles((node.props as { children?: ReactNode }).children)
}

const bytes = (v: unknown) => Buffer.byteLength(JSON.stringify(v))
const unescapeAttr = (s: string) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')

describe('comic delivery', () => {
  it('has registered art to check', () => {
    expect(slugs.length).toBeGreaterThan(0)
  })

  it('would catch a drawing handed to the client, in either form', () => {
    // Without these, a ceiling set too high or a walk that saw nothing would
    // pass every test below while the page carried the drawings again.
    const files = slugs.flatMap((s) => get(s).files)
    const lightest = Math.min(...files.map((f) => Buffer.byteLength(f.svg)))
    expect(lightest, 'every drawing outweighs the descriptor ceiling').toBeGreaterThan(
      DESCRIPTOR_CEILING,
    )
    expect(notPlain({ panels: { a: createElement('svg') } })).toEqual([
      'props.panels.a is a React element',
    ])
    expect(notPlain({ onLoad: () => {} })).toEqual(['props.onLoad is a function'])
  })

  it.each(slugs)(
    '%s: the key-moments player is given descriptors, not drawings',
    async (slug) => {
      const { set, guide } = get(slug)
      const tree = await StoryVisuals({ guide })
      const handed = handedToClient(tree)
      expect(
        handed.map((h) => h.name),
        'the server hands the player, and nothing else',
      ).toEqual(['StoryVisualsClient'])
      const { props } = handed[0]
      expect(notPlain(props)).toEqual([])

      const panels = props.panels as Record<string, Record<string, unknown>>
      expect(Object.keys(panels).sort(), 'one descriptor per registered panel').toEqual(
        set.panels.map((p) => p.moment).sort(),
      )
      for (const p of set.panels) {
        const d = panels[p.moment]
        expect(bytes(d), `${p.moment}: descriptor weight`).toBeLessThanOrEqual(DESCRIPTOR_CEILING)
        expect(d.src, `${p.moment}: served file`).toMatch(
          new RegExp(`^/${PLATES_DIR}/${slug}/[a-z0-9-]+\\.[0-9a-f]{12}\\.svg$`),
        )
        expect([d.width, d.height, d.alt]).toEqual([p.art.width, p.art.height, p.alt])
      }
      expect(rendersStyles(tree), 'StoryVisuals renders LinocutStyles').toBe(true)

      // The HTML: no drawing, and the first moment's panel, if it has one, as
      // an <img> of its file inside a box that carries the alt text.
      const html = renderToStaticMarkup(tree)
      expect(html, 'a drawing in the HTML').not.toMatch(/<svg[^>]*class="lc-plate"/)
      const first = set.panels.find((p) => p.moment === guide.timeline[0].title)
      // `\s` before src, or a renamed data-src would still pass.
      const imgs = [...html.matchAll(/<img[^>]*\ssrc="(\/comics\/[^"]+)"[^>]*>/g)]
      expect(imgs.map((m) => m[1])).toEqual(first ? [panels[first.moment].src] : [])
      if (first) {
        const box = /<div class="lc-art" role="img" aria-label="([^"]*)"/.exec(html)?.[1]
        expect(box && unescapeAttr(box)).toBe(first.alt)
      }
    },
    RENDER_MS,
  )

  it.each(slugs)(
    '%s: the gallery is given descriptors, not drawings',
    async (slug) => {
      const { set, guide } = get(slug)
      const tree = await CharactersAsDescribed({ guide })
      if (set.portraits.length === 0) {
        expect(tree).toBeNull()
        return
      }
      const handed = handedToClient(tree)
      expect(handed.map((h) => h.name)).toEqual(set.portraits.map(() => 'CharacterPortrait'))
      handed.forEach(({ props }, i) => {
        const p = set.portraits[i]
        expect(notPlain(props), p.name).toEqual([])
        const d = props.piece as Record<string, unknown>
        expect(bytes(d), `${p.name}: descriptor weight`).toBeLessThanOrEqual(DESCRIPTOR_CEILING)
        expect([d.name, d.src, d.width, d.height, d.alt]).toEqual([
          p.name,
          PLATE_SRC[d.uid as string],
          p.art.width,
          p.art.height,
          p.alt,
        ])
      })
      expect(rendersStyles(tree), 'CharactersAsDescribed renders LinocutStyles').toBe(true)

      const html = renderToStaticMarkup(tree)
      expect(html, 'a drawing in the HTML').not.toMatch(/<svg[^>]*class="lc-plate"/)
      const boxes = [...html.matchAll(/<div class="lc-art" role="img" aria-label="([^"]*)"/g)]
      expect(boxes.map((m) => unescapeAttr(m[1]))).toEqual(set.portraits.map((p) => p.alt))
      // `\s` before src, or a renamed data-src would still pass.
      const imgs = [...html.matchAll(/<img[^>]*\ssrc="(\/comics\/[^"]+)"[^>]*>/g)]
      expect(
        imgs.map((m) => m[1]),
        'one <img> per portrait, of its own file',
      ).toEqual(handed.map((h) => (h.props.piece as { src: string }).src))
    },
    RENDER_MS,
  )
})

describe('served plate files', () => {
  it('the manifest names one file per registered piece, as it is drawn now', () => {
    const files = slugs.flatMap((s) => get(s).files)
    expect(Object.keys(PLATE_SRC).sort(), `the manifest's pieces; ${REGENERATE}`).toEqual(
      files.map((f) => f.uid).sort(),
    )
    for (const f of files)
      expect(PLATE_SRC[f.uid], `${f.uid} has been redrawn; ${REGENERATE}`).toBe(f.src)
  })

  it.each(slugs)(
    '%s: public/comics holds exactly one file per piece, each holding its plate',
    (slug) => {
      const { set, files } = get(slug)
      const dir = join(ROOT, 'public', PLATES_DIR, slug)
      expect(existsSync(dir), `${dir} is missing; ${REGENERATE}`).toBe(true)
      expect(readdirSync(dir).sort(), `the files served for ${slug}; ${REGENERATE}`).toEqual(
        files.map((f) => f.src.split('/').pop()).sort(),
      )
      const pieces = new Map<string, { alt: string; w: number; h: number; markers: number }>([
        ...set.panels.map(
          (p) => [p.moment, { alt: p.alt, w: p.art.width, h: p.art.height, markers: 0 }] as const,
        ),
        ...set.portraits.map(
          (p) =>
            [
              p.name,
              { alt: p.alt, w: p.art.width, h: p.art.height, markers: p.describedBy.length },
            ] as const,
        ),
      ])
      for (const f of files) {
        const served = readFileSync(
          join(ROOT, 'public', ...f.src.split('/').filter(Boolean)),
          'utf8',
        )
        // Compared as a boolean: a failing diff of two 80 KB drawings helps nobody.
        expect(served === f.svg, `${f.src} is not ${f.key} as drawn now; ${REGENERATE}`).toBe(true)
        expect(f.src.split('.').at(-2), `${f.src}: its name is its hash`).toBe(
          createHash('sha256').update(served).digest('hex').slice(0, 12),
        )
        const piece = pieces.get(f.key)!
        const root = /^<svg [^>]*>/.exec(served)?.[0] ?? ''
        expect(root, `${f.src}: root`).toContain(`xmlns="${SVG_NS}"`)
        expect(root).toContain('class="lc-plate"')
        expect(root).toContain('role="img"')
        expect(root).toContain(`viewBox="0 0 ${piece.w} ${piece.h}"`)
        expect(unescapeAttr(/aria-label="([^"]*)"/.exec(root)?.[1] ?? ''), `${f.src}: label`).toBe(
          piece.alt,
        )
        expect([...served.matchAll(/class="lc-marker"/g)].length, `${f.src}: markers`).toBe(
          piece.markers,
        )
      }
    },
    RENDER_MS,
  )
})
