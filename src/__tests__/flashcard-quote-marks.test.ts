import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

import { withoutOuterQuotes } from '@/lib/study-guides/quote-marks'

/**
 * A flashcard shows its quotation inside one pair of quotation marks.
 *
 * THE DEFECT, found 26 September 2026 on the live A Christmas Carol page. The
 * flashcard drill in TextStudyHub prints curly marks round each card, and the
 * pages build their cards from quotations stored with marks of their own, so
 * the first card read ""Oh! But he was a tight-fisted hand..."".
 *
 * This reads the quotations each /revision/texts overview actually feeds the
 * drill (its first eight), and fails if any would still show a second pair
 * once the drill has taken its own off.
 */

const TEXTS = join(process.cwd(), 'src/app/revision/texts')
const HUB = join(process.cwd(), 'src/components/study/TextStudyHub.tsx')
const MARK = /^["'“”‘’]|["'“”‘’]$/

function drillQuotes(src: string): string[] {
  const start = src.indexOf('quotations: [')
  if (start < 0) return []
  return [...src.slice(start).matchAll(/\bquote:\s*(['"`])((?:\\.|(?!\1)[\s\S])*)\1/g)]
    .slice(0, 8)
    .map((m) => m[2].replace(/\\(.)/g, '$1'))
}

describe('flashcard quotation marks', () => {
  it('removes one matching outer pair and nothing else', () => {
    expect(withoutOuterQuotes('"Fair is foul"')).toBe('Fair is foul')
    expect(withoutOuterQuotes('“Fair is foul”')).toBe('Fair is foul')
    expect(withoutOuterQuotes("'Fair is foul'")).toBe('Fair is foul')
    expect(withoutOuterQuotes('Fair is foul')).toBe('Fair is foul')
    // an elision at the start is part of the line, not a mark
    expect(withoutOuterQuotes("'Tis the season")).toBe("'Tis the season")
    // only one layer
    expect(withoutOuterQuotes('"\'Out, damned spot\'"')).toBe("'Out, damned spot'")
    expect(withoutOuterQuotes('"')).toBe('"')
  })

  it('is what the drill prints', () => {
    const hub = readFileSync(HUB, 'utf8')
    expect(hub).toMatch(/&ldquo;\{withoutOuterQuotes\(card\.front\)\}&rdquo;/)
  })

  const pages = readdirSync(TEXTS, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => join(TEXTS, e.name, 'page.tsx'))
    .filter((p) => {
      try {
        return /flashcards=\{data\.quotations/.test(readFileSync(p, 'utf8'))
      } catch {
        return false
      }
    })

  it('finds the pages that build flashcards from their quotations', () => {
    expect(pages.length).toBeGreaterThanOrEqual(28)
  })

  it.each(pages.map((p) => [p.split(/[\\/]/).slice(-2, -1)[0], p]))(
    '%s shows each card in one pair of marks',
    (_slug, p) => {
      const quotes = drillQuotes(readFileSync(p, 'utf8'))
      expect(quotes.length).toBeGreaterThan(0)
      const doubled = quotes.filter((q) => MARK.test(withoutOuterQuotes(q)))
      expect(doubled).toEqual([])
    },
  )
})
