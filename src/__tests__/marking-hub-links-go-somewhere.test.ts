import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { markSchemeAnchor } from '@/lib/marking/mark-scheme-anchor'
import { MARK_SCHEME_GUIDES, guideBySlug } from '@/data/mark-scheme-guides'
import { guidePageForScheme } from '@/lib/marking/guide-links'

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

describe('the mark-scheme guide links', () => {
  it('are no longer dead', () => {
    // The whole 19 September defect in one assertion.
    expect(HUB).not.toMatch(/href: '#'/)
  })

  it('every paper the marker covers is offered, the original twelve among them', () => {
    const linked = [...HUB.matchAll(/guide\('([a-z0-9-]+)'\)/g)].map((m) => m[1])
    expect(linked.length, 'a link was deleted rather than fixed').toBeGreaterThanOrEqual(12)
    expect([...linked].sort()).toEqual(MARK_SCHEME_GUIDES.map((g) => g.schemeId).sort())
  })

  it('every link opens a guide with something in it', () => {
    // 24 October 2026: the links landed on cards that were boxes with nothing
    // behind them. Each now opens a guide; a guide with no questions in it
    // would be the same defect in a new place.
    const linked = [...HUB.matchAll(/guide\('([a-z0-9-]+)'\)/g)].map((m) => m[1])
    for (const id of linked) {
      const href = guidePageForScheme(id)
      expect(href, id).toMatch(/^\/resources\/teacher-library\/mark-schemes\/[a-z0-9-]+$/)
      const g = guideBySlug(href!.split('/').pop()!)
      expect(g, id).not.toBeNull()
      expect(g!.sections.flatMap((s) => s.questions).length, id).toBeGreaterThan(0)
    }
  })

  it('points at the guides, not at itself', () => {
    expect(HUB).toContain("from '@/lib/marking/guide-links'")
  })
})

describe('the guide page', () => {
  it('stamps an anchor on every card, so old links to #<paper> still land', () => {
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
    const LINKS = readFileSync(join(ROOT, 'src/lib/marking/guide-links.ts'), 'utf8')
    expect(LINKS).toContain("from './mark-scheme-anchor'")
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
