import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The Arabic fonts were loaded and never applied.
 *
 * THE DEFECT (19 September 2026). src/app/layout.tsx loads Noto Naskh Arabic
 * as --font-arabic-serif and IBM Plex Sans Arabic as --font-arabic-sans, and
 * stamps dir="rtl" on the Arabic surface. No stylesheet referenced either
 * variable. So every visitor downloaded both Arabic families, and Arabic text
 * rendered in whatever the reader's operating system happened to default to.
 *
 * /ar is the only indexed Arabic entry point and feeds the GBP 39/month IELTS
 * plan. Paying for two font families and then not using them is the worst of
 * both outcomes.
 *
 * The three assertions that matter are about the WAY the fix is written, not
 * that a rule exists at all - each corresponds to a version of this fix that
 * looks correct and does nothing:
 *
 *   1. a selector that does not name `body` is overridden by the direct
 *      font-family declaration on body and paints nothing;
 *   2. Arabic-first ordering repaints all the Latin text on the page;
 *   3. inheritance never reaches an explicit Tailwind font utility.
 */

const css = readFileSync(join(process.cwd(), 'src/app/globals.css'), 'utf8')
const layout = readFileSync(join(process.cwd(), 'src/app/layout.tsx'), 'utf8')

/** The declaration block for a selector list containing `needle`. */
function blockContaining(needle: string): string {
  const idx = css.indexOf(needle)
  if (idx === -1) return ''
  const open = css.indexOf('{', idx)
  const close = css.indexOf('}', open)
  return css.slice(open, close)
}

describe('the Arabic fonts are actually used', () => {
  it('are still loaded by the layout', () => {
    // If someone removes the font loading, the CSS below silently falls back
    // and this suite should say so rather than passing.
    expect(layout).toContain('--font-arabic-serif')
    expect(layout).toContain('--font-arabic-sans')
  })

  it('are referenced by a stylesheet at all, which was the whole defect', () => {
    expect(css).toContain('--font-arabic-sans')
    expect(css).toContain('--font-arabic-serif')
  })
})

describe('the rule is written so that it actually paints', () => {
  it('names body, because body carries a direct font-family declaration', () => {
    // `[dir='rtl'] { font-family: ... }` matches <html> only. The `body` rule
    // in this file applies font-sans directly, and a direct declaration beats
    // an inherited one, so a selector that stops at <html> changes nothing.
    expect(css).toMatch(/\[dir='rtl'\]\s+body/)
  })

  it('puts the Latin family first, so Latin text is not repainted', () => {
    // Both Arabic families ship basic-Latin faces. Naming them first would
    // repaint the brand name, AQA, Edexcel, Cambridge, every numeral and the
    // English passages an EAL student is revising, in the Arabic fonts' Latin
    // glyphs. Geist and Newsreader are subset to ['latin'] and carry no
    // Arabic codepoints, so Arabic falls straight through to the next family.
    const sans = blockContaining("[dir='rtl'] .font-sans")
    expect(sans.indexOf('--font-geist')).toBeGreaterThan(-1)
    expect(sans.indexOf('--font-geist')).toBeLessThan(sans.indexOf('--font-arabic-sans'))

    const serif = blockContaining("[dir='rtl'] .font-serif")
    expect(serif.indexOf('--font-newsreader')).toBeGreaterThan(-1)
    expect(serif.indexOf('--font-newsreader')).toBeLessThan(serif.indexOf('--font-arabic-serif'))
  })

  it('covers the Tailwind font utilities, which inheritance cannot reach', () => {
    // font-heading appears in 415 components and font-serif in 100. Each is a
    // direct declaration, so a <div className="font-heading"> on an Arabic
    // page would keep Newsreader and its Arabic would keep falling to the OS
    // default - the original defect, unfixed.
    expect(css).toContain("[dir='rtl'] .font-heading")
    expect(css).toContain("[dir='rtl'] .font-serif")
    expect(css).toContain("[dir='rtl'] .font-sans")
  })

  it('still covers the real heading elements', () => {
    for (const h of ['h1', 'h2', 'h3']) {
      expect(css).toContain(`[dir='rtl'] ${h}`)
    }
  })

  it('leaves font-mono alone, because exam codes are Latin by definition', () => {
    expect(css).not.toContain("[dir='rtl'] .font-mono")
  })

  it('always ends with a generic family, so a font failure is not a blank page', () => {
    expect(blockContaining("[dir='rtl'] .font-sans")).toMatch(/sans-serif/)
    expect(blockContaining("[dir='rtl'] .font-serif")).toMatch(/serif/)
  })
})
