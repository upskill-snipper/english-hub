import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

/**
 * Half a megabyte of font that never rendered a character (CUI-10).
 *
 * THE DEFECT. `src/app/layout.tsx` loaded `MonaSansVF.woff2` - 517 KB - through
 * `next/font/local`, exposed it as `--font-mona`, and stamped that variable
 * onto `<html>` on every single page. No CSS rule anywhere referenced the
 * variable. Verified live on 18 September 2026: `document.fonts` reported
 * `monaSans: unloaded` while Geist, Newsreader and JetBrains Mono were loaded
 * and applied.
 *
 * It is the quietest kind of waste. The font is declared, so it looks
 * deliberate; it is `display: 'swap'`, so nothing flashes; and because nothing
 * uses it, nothing looks wrong when it is absent. A student on a phone paid for
 * it on every page view.
 *
 * WHAT THIS FILE ALSO GUARDS. The general rule, not the one file: a font that
 * is declared in the layout must be reachable from CSS. The next one added
 * without a rule to apply it is the same defect with a different name.
 */

const ROOT = process.cwd()
const LAYOUT_RAW = readFileSync(join(ROOT, 'src/app/layout.tsx'), 'utf8')
/**
 * Comments stripped before asserting.
 *
 * The note recording WHY Mona Sans was removed necessarily names it, so a
 * plain search of the file finds the explanation and fails. This has caught
 * five assertions in this repository now; the answer is always to assert on
 * code rather than on prose.
 */
const LAYOUT = LAYOUT_RAW.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

/** Every .ts/.tsx/.css file that could reference a font variable. */
function sourceFiles(): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      if (entry === 'node_modules' || entry === '.next') continue
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) walk(full)
      else if (['.ts', '.tsx', '.css'].includes(extname(entry))) out.push(full)
    }
  }
  walk(join(ROOT, 'src'))
  out.push(join(ROOT, 'tailwind.config.ts'))
  return out
}

describe('Mona Sans', () => {
  it('is no longer loaded', () => {
    expect(LAYOUT).not.toContain('monaSans')
    expect(LAYOUT).not.toContain('--font-mona')
  })

  it('is no longer in the repository', () => {
    // The 529,632-byte file itself, not just the reference to it.
    expect(existsSync(join(ROOT, 'public/fonts/MonaSansVF.woff2'))).toBe(false)
  })
})

describe('every font the layout declares', () => {
  /** `variable: '--font-x'` declarations in the root layout. */
  const declared = [...LAYOUT.matchAll(/variable:\s*'(--font-[\w-]+)'/g)].map((m) => m[1])

  it('there are some, or the assertion below is vacuous', () => {
    expect(declared.length).toBeGreaterThanOrEqual(4)
  })

  it.each(declared)('%s is actually referenced by a CSS rule or a class', (variable) => {
    // THE RULE, not the one instance. A font variable that nothing consumes
    // means the file downloads and never renders - which is exactly what
    // Mona Sans did for six months. `next/font` will happily keep serving it.
    const consumers = sourceFiles().filter((file) => {
      if (file.endsWith('layout.tsx')) return false
      return readFileSync(file, 'utf8').includes(variable)
    })
    expect(
      consumers.length,
      `${variable} is declared in layout.tsx and used by no CSS rule or Tailwind family`,
    ).toBeGreaterThan(0)
  })
})

describe('what Arabic mode actually promises', () => {
  it('no longer says the content is in Arabic', () => {
    // The Spanish tooltip was corrected on 18 September for claiming Spanish
    // content the product does not have. The Arabic one made the same
    // overstatement in the same words and was left. Arabic mode translates the
    // interface; the model answers, mark schemes and analysis are English.
    const dict = readFileSync(join(ROOT, 'src/lib/i18n/dictionary.ts'), 'utf8')
    const at = dict.indexOf("'lang.ar.tooltip'")
    expect(at).toBeGreaterThan(-1)
    const entry = dict.slice(at, at + 400)
    expect(entry).toMatch(/interface in Arabic/)
    expect(entry).toMatch(/study material in English/)
    expect(entry).not.toMatch(/content in Arabic \(Gulf Khaleeji\)'/)
  })

  it('says it in all three languages, not only English', () => {
    // A correction that lands only in the English column leaves the Arabic
    // reader - the person the tooltip is for - with the original claim.
    const ar = readFileSync(join(ROOT, 'src/lib/i18n/generated/ar.ts'), 'utf8')
    const es = readFileSync(join(ROOT, 'src/lib/i18n/generated/es.ts'), 'utf8')
    expect(ar).toMatch(/الواجهة بالعربي/)
    expect(es).toMatch(/interfaz en árabe/)
  })
})
