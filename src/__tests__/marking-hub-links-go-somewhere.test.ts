import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { markSchemeAnchor } from '@/lib/marking/mark-scheme-anchor'

/**
 * Twelve links that did nothing, and a blank square where a grade should be
 * (UX-6).
 *
 * THE DEFECT (19 September 2026). `MARK_SCHEME_DEFS` on the marking hub listed
 * twelve "mark scheme guide" links and every single `href` was `'#'`. They were
 * styled as links, they hovered as links, and clicking one did nothing at all.
 * A student with a board cookie set saw two to four of them - all dead - on the
 * page they land on to get their work marked.
 *
 * The guides they promise exist. They are the reference cards on
 * /resources/teacher-library/mark-schemes, which had no anchors, so the cards
 * were not individually addressable either.
 *
 * SEPARATELY, the hub rendered `{e.grade}` directly into a coloured badge while
 * the submit page writes `grade: null` into the same record. An essay still
 * being marked showed an EMPTY coloured square, which reads as a grade that
 * failed to load rather than as work in progress. The history page has always
 * said "Awaiting mark" there; the hub said nothing.
 *
 * This item's other two sub-claims - localStorage-only history and the missing
 * list endpoint - were fixed earlier tonight in 96b78e39 (SF-2), and its
 * remaining one (persisting legacy /api/mark results) is deliberately held:
 * doing it would put school pupils' private practice essays into their
 * teacher's dashboard.
 */

const ROOT = process.cwd()
const HUB = readFileSync(join(ROOT, 'src/app/marking/page.tsx'), 'utf8')
const GUIDE = readFileSync(
  join(ROOT, 'src/app/resources/teacher-library/mark-schemes/page.tsx'),
  'utf8',
)

/** Every reference-card title on the guide page. */
function guideCardTitles(): string[] {
  const arrayStart = GUIDE.indexOf('const MARK_SCHEMES = [')
  const arrayEnd = GUIDE.indexOf('\n]', arrayStart)
  const body = GUIDE.slice(arrayStart, arrayEnd)
  return [...body.matchAll(/title: '([^']+)'/g)].map((m) => m[1])
}

describe('the mark-scheme guide links', () => {
  it('are no longer dead', () => {
    // The whole defect in one assertion.
    expect(HUB).not.toMatch(/href: '#'/)
  })

  it('all twelve are still offered', () => {
    const defs = HUB.slice(HUB.indexOf('const MARK_SCHEME_DEFS'), HUB.indexOf('/* ─── Page'))
    const items = defs.match(/labelKey: 'marking\.scheme\./g) ?? []
    expect(items.length, 'a link was deleted rather than fixed').toBe(12)
  })

  it('every link resolves to a card that is actually on the guide page', () => {
    // The assertion that matters. A href pointing at an anchor no card carries
    // scrolls nowhere and looks exactly like the dead '#' it replaced.
    const anchors = new Set(guideCardTitles().map(markSchemeAnchor))
    expect(anchors.size).toBeGreaterThan(10)

    const linked = [...HUB.matchAll(/guideHref\('([^']+)'\)/g)].map((m) => m[1])
    expect(linked.length).toBe(12)

    const broken = linked.filter((title) => !anchors.has(markSchemeAnchor(title)))
    expect(broken, 'these hub links name a card that does not exist on the guide page').toEqual([])
  })

  it('points at the guide page, not at itself', () => {
    expect(HUB).toContain('/resources/teacher-library/mark-schemes')
  })
})

describe('the guide page', () => {
  it('stamps an anchor on every card', () => {
    expect(GUIDE).toMatch(/id=\{markSchemeAnchor\(m\.title\)\}/)
  })

  it('keeps the anchor clear of the sticky header', () => {
    // Without scroll-mt the linked card lands underneath the header and the
    // link looks broken in a different way.
    expect(GUIDE).toMatch(/scroll-mt-\d+/)
  })

  it('derives the anchor rather than hand-listing it', () => {
    // Both sides call the same function, so renaming a card cannot leave the
    // hub pointing at an id that no longer exists.
    expect(GUIDE).toContain("from '@/lib/marking/mark-scheme-anchor'")
    expect(HUB).toContain("from '@/lib/marking/mark-scheme-anchor'")
  })

  it('produces stable, url-safe ids', () => {
    expect(markSchemeAnchor('AQA English Literature Paper 1')).toBe(
      'aqa-english-literature-paper-1',
    )
    expect(markSchemeAnchor('OCR English Language Component 01')).toBe(
      'ocr-english-language-component-01',
    )
    expect(markSchemeAnchor('  Trailing & punctuation!  ')).toBe('trailing-punctuation')
  })
})

describe('an essay that has not been marked yet', () => {
  it('is typed as possibly having no grade', () => {
    // The type said `grade: number` while the submit page writes null into the
    // same record. The type was not describing the data.
    const iface = HUB.slice(HUB.indexOf('interface MarkingHistoryEntry'))
    expect(iface.slice(0, 400)).toMatch(/grade: number \| null/)
  })

  it('says "awaiting", in the same words as the history page', () => {
    expect(HUB).toContain("t('marking.history.awaiting')")
    const history = readFileSync(join(ROOT, 'src/app/marking/history/page.tsx'), 'utf8')
    expect(history).toContain('marking.history.awaiting')
  })

  it('no longer renders a bare grade into the badge', () => {
    // `{e.grade}` alone produced an empty coloured square for a null.
    expect(HUB).toMatch(/typeof e\.grade === 'number' \?/)
  })
})
