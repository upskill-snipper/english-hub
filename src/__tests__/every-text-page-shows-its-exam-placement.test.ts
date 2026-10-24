import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Every set-text page says which board and series sets the text.
 *
 * THE DEFECT, seen on the live site on 23 October 2026. The placement card
 * (src/components/revision/exam-placement-card.tsx) prints every verified
 * placement for a text, every held Cambridge 0475 series among them with a
 * "Not set for the ... series." note, and says plainly when nothing has been
 * checked. The catch-all route rendered it. The 32 hand-built guides that
 * render TextGuide did not, so An Inspector Calls showed no Cambridge 2028
 * placement although exam-placement.ts holds it, and Macbeth showed nothing
 * of its Pearson 4ET1 placement. The 56 generated and placeholder pages did
 * show the card, but only because their shared layouts (FullStudyGuide,
 * StubStudyGuide) rendered it on their behalf; no test pinned that, and the
 * TextGuide pages simply never had it.
 *
 * THE RULE. Every page under src/app/revision/texts/<slug>/ names its own card,
 * with its own slug, and hands it to its layout as `placement`. The layouts
 * require that prop, so a page without it does not compile; this test catches
 * what the compiler cannot: a card carrying a neighbour's slug, a card
 * rendered twice, and a layout that accepts the card and never shows it.
 *
 * A directory with no page.tsx of its own (antony-and-cleopatra, disabled and
 * others that hold only a /read route) is served by the catch-all, which is
 * checked last.
 */

const ROOT = process.cwd()
const TEXTS = join(ROOT, 'src/app/revision/texts')

/**
 * Source with comments removed, so a card quoted in a docblock does not count.
 * Line comments are stripped only where `//` is not part of a URL.
 */
function code(file: string): string {
  return readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/**
 * Directories that are text pages. `[slug]` is the catch-all and `_components`
 * is a private folder of shared layouts; neither is a text.
 */
const PAGES = readdirSync(TEXTS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
  .map((d) => ({ slug: d.name, file: join(TEXTS, d.name, 'page.tsx') }))
  .filter((p) => existsSync(p.file))

/** Each `<ExamPlacementCard ... />` in the file, with the slug it passes, if literal. */
function cards(src: string): { tag: string; slug: string | null }[] {
  return [...src.matchAll(/<ExamPlacementCard\b[^>]*>/g)].map(([tag]) => ({
    tag,
    slug: /\bslug=(?:"([^"]+)"|\{\s*'([^']+)'\s*\})/.exec(tag)?.slice(1).find(Boolean) ?? null,
  }))
}

describe('every text page shows where the text is examined', () => {
  it('finds the pages, so a green result means something', () => {
    // 88 on 23 October 2026. A broken directory filter would pass vacuously.
    expect(PAGES.length).toBeGreaterThanOrEqual(80)
  })

  it('renders exactly one placement card, carrying the page’s own slug', () => {
    const offenders: string[] = []
    for (const { slug, file } of PAGES) {
      const found = cards(code(file))
      if (found.length === 0) {
        offenders.push(`${slug}: no <ExamPlacementCard />`)
      } else if (found.length > 1) {
        offenders.push(`${slug}: ${found.length} placement cards`)
      } else if (found[0]!.slug !== slug) {
        offenders.push(`${slug}: card passes ${found[0]!.slug ?? 'a non-literal slug'}`)
      }
    }
    expect(offenders, `${offenders.length} text pages:\n  ${offenders.join('\n  ')}`).toEqual([])
  })
})

describe('the layouts show the card they are given, and only that one', () => {
  // If a layout dropped `{placement}`, every page above would still pass and
  // no page would show a card. If one rendered its own card as well, pages
  // would show two.
  it.each([
    'src/app/revision/texts/_components/text-guide.tsx',
    'src/app/revision/texts/_components/full-study-guide.tsx',
    'src/app/revision/texts/_components/stub-study-guide.tsx',
  ])('%s', (rel) => {
    const src = code(join(ROOT, rel))
    expect(src.match(/\{placement\}/g) ?? [], `${rel} never renders {placement}`).toHaveLength(1)
    expect(src, `${rel} renders a card of its own`).not.toMatch(/<ExamPlacementCard\b/)
  })
})

describe('a text with no page of its own still gets the card', () => {
  it('because the catch-all renders it for whatever slug it serves', () => {
    const catchAll = code(join(TEXTS, '[slug]', 'page.tsx'))
    expect(catchAll).toContain('<ExamPlacementCard slug={text.slug} />')
  })
})
