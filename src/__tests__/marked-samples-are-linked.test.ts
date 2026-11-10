import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The paid feature's worked samples are reachable from where people decide.
 *
 * Found 10 November 2026: /marking/sample (grade 5, 7 and 9 essays marked by
 * AI) was linked only from /marking, so neither the home page's AI marking
 * section nor the pricing page let a visitor see what the paid feature
 * returns before starting a trial.
 */

function src(path: string): string {
  return readFileSync(join(process.cwd(), path), 'utf8')
}

describe('the marked samples', () => {
  it('are linked from the home page AI marking section', () => {
    const s = src('src/components/home/story/ChapterWrite.tsx')
    expect(s).toContain('href="/marking/sample"')
    expect(s).toContain("'home.story.write.sample'")
  })

  it('are linked from the pricing page', () => {
    const s = src('src/app/pricing/page.tsx')
    expect(s).toContain('href="/marking/sample"')
    expect(s).toContain("t('pricing.see_marked_samples')")
  })

  it('exist as a page', () => {
    expect(src('src/app/marking/sample/page.tsx').length).toBeGreaterThan(0)
  })
})
