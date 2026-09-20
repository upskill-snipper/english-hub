import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

/**
 * Almost nothing on the site had an image to share.
 *
 * MEASURED 20 September 2026, and the first measurement was wrong, which is
 * worth recording because it nearly became the fix.
 *
 * Crawling with a browser user agent said 1,127 of 1,329 pages had no
 * `og:image`. That number was reading Next's STREAMED FALLBACK head: for a
 * client that renders JavaScript, Next flushes a shell carrying the root
 * layout's metadata and sends the page's own tags later in the body, so a grep
 * that takes the first match reads the homepage's card on every URL. Re-checked
 * with `ClaudeBot/1.0`, which Next blocks the stream for, the gap is real but
 * different: /a-level, /revision/texts/macbeth and
 * /courses/aqa-lit-christmas-carol genuinely serve no image, while
 * /analysis/macbeth/ambition serves the root's generic one.
 *
 * So the defect is not "1,127 pages are broken" and it is not nothing. It is
 * that 558 `openGraph` blocks across `src/app` declared a title and a
 * description and no image, and a declared block is what the page serves.
 * Every share of those links, and every answer-engine card built from them,
 * was text on a blank rectangle.
 *
 * THE RULE THIS PINS is the one that is checkable from source and does not
 * depend on Next's merge semantics, which I could not pin down from the served
 * HTML: if a file declares `openGraph`, it declares `images` too. That holds
 * whatever Next does with inheritance.
 *
 * The caption reuses whatever expression the block already uses for its title,
 * so the card says what the page says rather than showing one house image on
 * 1,300 URLs. `/api/og` already existed and had 20 callers.
 *
 * MUTATIONS RUN, each verified to have altered the file first: deleting the
 * images array from src/app/a-level/page.tsx fails; deleting it from the
 * generated-metadata block in src/app/courses/[id]/page.tsx fails; pointing
 * every card at one constant URL fails the counterweight.
 */

const FILES = execSync('git ls-files src/app', { encoding: 'utf8' })
  .split('\n')
  .filter((f) => /\/(page|layout)\.tsx$/.test(f))

/** Every `openGraph: { ... }` object literal in a file, balanced-brace sliced. */
function openGraphBlocks(src: string): string[] {
  const out: string[] = []
  let i = -1
  while ((i = src.indexOf('openGraph:', i + 1)) !== -1) {
    const open = src.indexOf('{', i)
    if (open === -1) break
    let depth = 0
    for (let j = open; j < src.length; j++) {
      const c = src[j]
      if (c === '{') depth++
      else if (c === '}') {
        depth--
        if (depth === 0) {
          out.push(src.slice(open, j))
          break
        }
      }
    }
  }
  return out
}

const READ = new Map<string, string>()
const read = (f: string) => {
  if (!READ.has(f)) READ.set(f, readFileSync(f, 'utf8'))
  return READ.get(f) as string
}

const WITH_OG = FILES.filter((f) => openGraphBlocks(read(f)).length > 0)

/**
 * The `url` of the first entry in a block's `images` array.
 *
 * Scoped to the images array on purpose. The first draft of this file matched
 * `url:` anywhere in the block and picked up openGraph's own page `url`, so it
 * reported 33 files as pointing at the wrong generator, and the
 * one-card-per-page check passed for the wrong reason: page URLs are distinct
 * whatever the images are.
 */
function cardUrl(block: string): string | null {
  const at = block.indexOf('images:')
  if (at === -1) return null
  const m = /url:\s*['"`]([^'"`]*)/.exec(block.slice(at))
  return m ? m[1] : null
}

describe('every share card has an image', () => {
  it('reads a real tree', () => {
    // Vacuity guard: an empty walk passes the sweep below.
    expect(FILES.length).toBeGreaterThan(800)
    expect(WITH_OG.length).toBeGreaterThan(400)
    expect(WITH_OG).toContain('src/app/a-level/page.tsx')
  })

  it('the brace slicer finds a whole block, not a prefix', () => {
    // The sweep is worthless if this returns the first few characters.
    const [block] = openGraphBlocks(
      "export const metadata = { openGraph: { title: 'x', images: [{ url: 'y' }] } }",
    )
    expect(block).toContain('images')
    expect(openGraphBlocks('const a = 1')).toEqual([])
  })

  it('and cardUrl reads the image, not the page url beside it', () => {
    // The bug this file shipped with for ten minutes, pinned so it cannot come
    // back: an openGraph block carries its own `url`, and it comes first.
    const block =
      "{ title: 'x', url: 'https://theenglishhub.app/a-level', images: [{ url: '/api/og?title=A' }] }"
    expect(cardUrl(block)).toBe('/api/og?title=A')
    expect(cardUrl("{ title: 'x' }")).toBeNull()
  })

  it('no openGraph block declares a card with no image', () => {
    const offenders: string[] = []
    for (const file of WITH_OG) {
      for (const block of openGraphBlocks(read(file))) {
        if (!/\bimages\s*:/.test(block)) offenders.push(file)
      }
    }
    expect(
      [...new Set(offenders)],
      'A declared openGraph block is what the page serves. Without `images` the ' +
        'share card and the answer-engine card are text on a blank rectangle. ' +
        'Add images using the same expression the block uses for its title.',
    ).toEqual([])
  })

  it('and the cards are captioned per page, not one house image', () => {
    // The counterweight. One static image on every block would satisfy the
    // assertion above and lose the reason to have an image at all.
    const urls: string[] = []
    for (const file of WITH_OG) {
      for (const block of openGraphBlocks(read(file))) {
        const url = cardUrl(block)
        if (url) urls.push(url)
      }
    }
    expect(urls.length).toBeGreaterThan(400)
    const distinct = new Set(urls).size
    expect(
      distinct / urls.length,
      `only ${distinct} distinct card URLs across ${urls.length} blocks`,
    ).toBeGreaterThan(0.6)
  })

  it('and they point at a card this site can actually serve', () => {
    // `/api/og` is the generator that already existed. A designed file under
    // /og/ is better still and is not to be replaced by a generated one:
    // /for-schools ships og/schools.png, which is why this is not a bare
    // "must contain /api/og" check.
    const wrong: string[] = []
    for (const file of WITH_OG) {
      for (const block of openGraphBlocks(read(file))) {
        const url = cardUrl(block)
        if (url && !url.includes('/api/og') && !/\/og\/[\w-]+\.(png|jpg|webp)/.test(url)) {
          wrong.push(`${file}: ${url}`)
        }
      }
    }
    expect(wrong).toEqual([])
  })
})
