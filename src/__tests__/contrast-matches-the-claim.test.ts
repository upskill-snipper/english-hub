import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  check,
  readTokens,
  usedOpacityVariants,
  contrast,
  composite,
  hslToRgb,
} from '../../scripts/check-contrast.mjs'

/**
 * The palette, against the claim the accessibility statement makes (A11Y-8).
 *
 * THE CLAIM. The statement says our colours "target the WCAG 2.2 AA contrast
 * ratios in both themes". Nothing in the repository had ever checked it, and
 * on 19 September 2026 twenty-one token pairs did not meet it.
 *
 * THE MISTAKE THAT MAKES THIS KIND OF CHECK USELESS. `text-muted-foreground/70`
 * is not a colour, it is a colour at 70% alpha, and what the eye receives is
 * the composite over whatever is behind it. Comparing the token to the
 * background as if the alpha were not there reports 7.04:1 on text that is
 * actually 3.46:1. Every opacity variant is composited before comparison, and
 * the first test below is the one that proves the compositing is happening.
 *
 * AND WHAT THE TOKEN CHECK STILL CANNOT SEE. It reads `globals.css`, so it
 * knows nothing about hard-coded colours. A browser pass over /pricing on the
 * same day found nine more failures the token maths could not reach: the
 * language and theme toggles at 2.27:1 (a light-theme grey used in the dark
 * glass header), the footer's `text-[#B5B8B3]/55` at 3.60:1, `text-emerald-600`
 * at 3.10:1, and white on `bg-sky-600` and `bg-purple-500` at 3.96:1 - the
 * latter two being the IELTS and Teacher plan CTAs, on the page where people
 * decide to pay. That is why the item asked for a browser measurement, and why
 * a passing run of this file is a floor rather than a clean bill of health.
 */

const ROOT = process.cwd()
const CSS = readFileSync(join(ROOT, 'src/app/globals.css'), 'utf8')
// `check-contrast.mjs` is plain JavaScript (it is a CLI first), so the shapes
// are declared here rather than inferred as `{}`.
type Tokens = { light: Record<string, string>; dark: Record<string, string> }
type Result = {
  theme: string
  pair: string
  ratio: number
  threshold: number
  passes: boolean
  gated?: boolean
}
const tokens = readTokens(CSS) as Tokens
const results = check(tokens, usedOpacityVariants(join(ROOT, 'src'))) as Result[]

describe('the contrast maths', () => {
  it('composites alpha before comparing, which is the whole trap', () => {
    // muted-foreground at 70% over the cream background. Uncomposited the same
    // token reads 7.04:1; composited it is 3.46:1, and 3.46 is what the reader
    // sees. If this ever equals the uncomposited number, the checker has
    // stopped doing the one thing that makes it worth running.
    const fg = hslToRgb('150 6% 30%')
    const bg = hslToRgb('37 47% 92%')
    expect(contrast(fg, bg)).toBeCloseTo(7.04, 1)
    expect(contrast(composite(fg, bg, 0.7), bg)).toBeCloseTo(3.46, 1)
  })

  it('agrees with a known WCAG pair', () => {
    // Black on white is 21:1 by definition. If this drifts the formula is
    // wrong and every number in the report is wrong with it.
    expect(contrast([0, 0, 0], [255, 255, 255])).toBeCloseTo(21, 1)
  })

  it('found some tokens, or every assertion below is vacuous', () => {
    expect(Object.keys(tokens.light).length).toBeGreaterThan(20)
    expect(Object.keys(tokens.dark).length).toBeGreaterThan(20)
    expect(results.length).toBeGreaterThan(30)
  })
})

describe('the palette', () => {
  const gated = results.filter((r) => r.gated !== false)

  it('meets the ratio the accessibility statement claims', () => {
    const failing = gated
      .filter((r) => !r.passes)
      .map((r) => `${r.theme} ${r.pair} = ${r.ratio}:1 (needs ${r.threshold})`)
    expect(failing).toEqual([])
  })

  it.each([['muted-foreground-subtle', 'the token that replaced the failing opacity variants']])(
    'defines --%s in both themes',
    (name) => {
      expect(tokens.light[name], `--${name} missing from :root`).toBeTruthy()
      expect(tokens.dark[name], `--${name} missing from .dark`).toBeTruthy()
    },
  )
})

describe('the opacity variants', () => {
  const SRC_VARIANTS = usedOpacityVariants(join(ROOT, 'src')) as Map<string, number>

  it('no longer uses any variant at 50% or above', () => {
    // 219 uses of /70, /60 and /50 and 37 of /80 were moved onto
    // --muted-foreground-subtle. Reintroducing one puts failing text back on a
    // page, so the checker gates them and this pins the intent.
    const gatedVariants = [...SRC_VARIANTS.keys()].filter((k) => Number(k.split('|')[1]) >= 50)
    expect(gatedVariants).toEqual([])
  })

  it('keeps the decorative ones countable', () => {
    // /40 and /30 survive on small icons beside a visible label - a Lock on a
    // gated resource, an X in a feature table - which WCAG treats as
    // decorative. The five em-dash "no data" placeholders that were also at
    // /40 and /20 were moved onto the subtle token, because an em dash meaning
    // "nothing here" has to be legible. Pinned so a new one is a decision.
    const total = [...SRC_VARIANTS.entries()]
      .filter(([k]) => Number(k.split('|')[1]) < 50)
      .reduce((sum, [, count]) => sum + count, 0)
    expect(total).toBeLessThanOrEqual(30)
  })
})

describe('the statement itself', () => {
  it('still makes the claim this file checks', () => {
    // If the claim were removed, this whole file would be guarding nothing and
    // should be reconsidered rather than left passing quietly.
    const en = readFileSync(join(ROOT, 'src/lib/i18n/generated/en.ts'), 'utf8')
    expect(en).toMatch(/WCAG 2\.2 AA contrast/i)
  })
})
