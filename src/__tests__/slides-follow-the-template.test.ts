import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  CANVAS,
  MARGINS,
  TYPE_SCALE,
  MIN_SIZE_AT_1080,
  MAX_LINE_CHARS,
  validateSlide,
  scaleForCanvas,
  minimumSizeFor,
} from '@/lib/social/slide-spec'

/**
 * Carousel slides, rendered from the brand template (AUTO-6).
 *
 * THE DEFECT. Instagram is 108 of the 408 calendar rows and most of its library
 * is carousels - twelve scripts, all still markdown. Nothing rendered them, so
 * Instagram, LinkedIn document posts and X cards could not be queued at all,
 * and an approval screen would have shown text-only drafts for a visual
 * platform.
 *
 * THE FONT SPIKE, WHICH THE ITEM'S VERIFIER ASKED FOR AND WHICH FOUND A REAL
 * ANSWER. Three attempts, all measured against a running server:
 *
 *   1. A hard-coded gstatic path. Both URLs answered 404 - Google versions the
 *      path, and the one written was /v20/ against a live /v26/.
 *   2. Resolving the URL from the CSS API at request time. The fetch returns
 *      bytes and Satori rejects them: "Unsupported OpenType signature".
 *   3. A vendored face. `node_modules/geist` is not installed and the only TTF
 *      in the tree is the Noto Sans @vercel/og ships as its own fallback.
 *
 * So the slide renders in a system serif and sans and SAYS SO in the
 * `x-eh-typeface` header. Embedding Newsreader and Geist means committing two
 * TTF files - about 185 KB, server-read only - which is a deliberate decision
 * about the repository, made harder to slip in by the fact that CUI-10 has just
 * removed a font for being unused.
 *
 * What is not compromised is the geometry, and that is what these tests hold.
 */

const ROOT = process.cwd()
const ROUTE = readFileSync(join(ROOT, 'src/app/api/social/render/route.tsx'), 'utf8')
const code = ROUTE.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('the canvas and margins', () => {
  it('matches the specification exactly', () => {
    expect(CANVAS.carousel).toEqual({ width: 1080, height: 1350 })
    expect(CANVAS.story).toEqual({ width: 1080, height: 1920 })
    expect(MARGINS).toEqual({ top: 88, side: 88, bottom: 96 })
  })

  it('gives the bottom margin more room, because it carries the slide number', () => {
    expect(MARGINS.bottom).toBeGreaterThan(MARGINS.top)
  })
})

describe('the 28px floor', () => {
  it('is 28 at 1080 and 32 at 1200', () => {
    // Doc 04 section 3 has the arithmetic: 28px on a 1080 canvas is roughly
    // 10px on a phone, and a 1200 canvas is viewed at a smaller fraction of
    // its native size than an Instagram frame is.
    expect(minimumSizeFor(1080)).toBe(28)
    expect(minimumSizeFor(1200)).toBe(32)
  })

  it('is what the renderer actually clamps to', () => {
    // The floor being documented is not the same as the floor being applied.
    expect(code).toMatch(/Math\.max\(floor, scaleForCanvas\(/)
  })

  it('is respected by every role in the scale', () => {
    for (const [role, entry] of Object.entries(TYPE_SCALE)) {
      expect(entry.size, `${role} is below the floor`).toBeGreaterThanOrEqual(MIN_SIZE_AT_1080)
    }
  })

  it('allows 28px only for the four roles the brief permits', () => {
    // "28px may only ever carry a source line, a slide number, a label or a
    // demo label."
    const atFloor = Object.entries(TYPE_SCALE)
      .filter(([, e]) => e.size === MIN_SIZE_AT_1080)
      .map(([role]) => role)
      .sort()
    expect(atFloor).toEqual(['footnote', 'label', 'slideNumber'])
  })
})

describe('scaling to another canvas', () => {
  it('multiplies by the width ratio, as the brief says', () => {
    expect(scaleForCanvas(96, 1080)).toBe(96)
    expect(scaleForCanvas(40, 540)).toBe(20)
    expect(scaleForCanvas(68, 2160)).toBe(136)
  })
})

describe('validateSlide', () => {
  const ok = { format: 'carousel' as const, headline: 'Mark scheme decoded' }

  it('accepts a slide that follows the template', () => {
    expect(validateSlide(ok)).toEqual([])
  })

  it('refuses a headline past the 45-character measure', () => {
    // The measure is what makes a frame readable at arm's length on a phone
    // held in bed, which the brief names as the actual reading condition.
    const long = 'x'.repeat(MAX_LINE_CHARS + 1)
    const problems = validateSlide({ ...ok, headline: long })
    expect(problems.map((p) => p.field)).toContain('headline')
  })

  it('refuses a statistic with no source line', () => {
    // The voice document's rule, enforced where the asset is made rather than
    // after it has been posted.
    const problems = validateSlide({ ...ok, headline: '42 per cent improve' })
    expect(problems.map((p) => p.field)).toContain('footnote')
    expect(
      validateSlide({
        ...ok,
        headline: '42 per cent improve',
        footnote: '* Source: Ofsted (2022).',
      }),
    ).toEqual([])
  })

  it('refuses a slide number with no total', () => {
    const problems = validateSlide({ ...ok, slideNumber: 3 })
    expect(problems.map((p) => p.field)).toContain('slideNumber')
  })

  it('refuses an empty headline', () => {
    expect(validateSlide({ ...ok, headline: '   ' }).map((p) => p.field)).toContain('headline')
  })

  it('reports every problem, not just the first', () => {
    // A batch render should be able to fix a whole carousel in one pass.
    const problems = validateSlide({
      format: 'carousel',
      headline: 'y'.repeat(60),
      body: 'z'.repeat(60),
      slideNumber: 2,
    })
    expect(problems.length).toBeGreaterThanOrEqual(3)
  })
})

describe('the route', () => {
  it('refuses a slide that breaks the template rather than rendering it', () => {
    // Rendering it anyway hides an unreadable slide behind something that
    // looks finished. Verified live: 422 with the reason.
    //
    // Asserted on the BRANCH, not on the presence of the string. The first
    // version of this checked that "422" appeared in the file, and passed
    // happily when the condition was mutated to `if (false)` - the text was
    // still there, doing nothing. That is the shape of guard this repository
    // exists to stop.
    const guard = code.indexOf('if (problems.length > 0)')
    expect(guard, 'the refusal is not conditional on there being problems').toBeGreaterThan(-1)
    const render = code.indexOf('new ImageResponse(')
    expect(render).toBeGreaterThan(-1)
    expect(guard, 'the refusal comes after the render').toBeLessThan(render)
    expect(code.slice(guard, render)).toMatch(/status: 422/)
  })

  it('is admin-gated, not a free image host with our brand on it', () => {
    expect(code).toMatch(/status: 401/)
    expect(code).toContain('CRON_SECRET')
  })

  it('says which typeface it used', () => {
    // A brand asset quietly rendered in Georgia looks finished and is not.
    expect(code).toContain("image.headers.set('x-eh-typeface'")
  })

  it('does not claim to embed the brand faces', () => {
    // The spike found it cannot. Claiming otherwise in code would be the
    // "document asserting what the code does not do" pattern.
    expect(code).not.toMatch(/fonts:\s*loaded/)
    expect(code).not.toContain("fontFamily: 'Newsreader'")
  })

  it('runs on the Node runtime, where ImageResponse is supported', () => {
    expect(code).toMatch(/runtime = 'nodejs'/)
  })
})
