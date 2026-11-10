import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * English pages must not preload the Arabic fonts.
 *
 * THE DEFECT (measured 10 November 2026). next/font preloads by default, so
 * every page, Arabic or not, sent preload links for five Arabic font files
 * (about 230 KB) ahead of its own stylesheet. On a throttled phone profile
 * every one of twelve key pages took 5.2 to 6.5 seconds to show its main
 * content; holding those requests back brought first paint about a second
 * earlier. The fonts still load on demand through unicode-range when a page
 * draws Arabic text.
 */

const src = readFileSync(join(process.cwd(), 'src/app/layout.tsx'), 'utf8')

function configOf(fontFn: string): string {
  const m = src.match(new RegExp(`${fontFn}\\(\\{([\\s\\S]*?)\\}\\)`))
  if (!m) throw new Error(`${fontFn} is no longer declared in the root layout`)
  return m[1]
}

describe('the root layout fonts', () => {
  it.each(['Noto_Naskh_Arabic', 'IBM_Plex_Sans_Arabic'])('%s is not preloaded', (fontFn) => {
    expect(configOf(fontFn)).toMatch(/preload:\s*false/)
  })

  it('still preloads the Latin text face every English page draws with', () => {
    expect(configOf('Geist')).not.toMatch(/preload:\s*false/)
  })
})
