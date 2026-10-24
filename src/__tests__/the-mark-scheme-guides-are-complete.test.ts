import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import {
  MARK_SCHEME_GUIDES,
  guideBySlug,
  guideForScheme,
  guideHref,
  guideSearchDescription,
  guideSearchTitle,
  guideSlug,
} from '@/data/mark-scheme-guides'
import {
  GUIDE_TITLE_BY_SCHEME,
  MARKER_NOT_ALIGNED,
  guidePageForScheme,
} from '@/lib/marking/guide-links'

/**
 * A guide behind every mark-scheme box (24 October 2026).
 *
 * THE DEFECT. The marking hub's "marking guide library" and the teacher
 * library's mark-scheme page showed sixteen boxes, each a title and one line
 * promising "grade descriptors", "AO weightings" and "common examiner
 * comments". Nothing was behind any of them: the founder clicked a mark scheme
 * and "it only shows boxes for each one, no reference cards behind it".
 *
 * THE RULE. One guide for every paper the AI marker can mark against, so a
 * student who chooses a paper on /marking/submit can always read what it
 * rewards. Each guide's figures were checked against the board's own published
 * documents (src/data/mark-scheme-guides/types.ts), so this file also holds the
 * figures to add up, the levels to be in order and the wording to the house
 * style; it cannot check them against the board, which is why `source` must
 * name the document.
 */

const OFFICIAL = [
  'aqa.org.uk',
  'qualifications.pearson.com',
  'ocr.org.uk',
  'eduqas.co.uk',
  'wjec.co.uk',
  'cambridgeinternational.org',
]
const official = (url: string) => {
  try {
    const host = new URL(url).hostname
    return url.startsWith('https://') && OFFICIAL.some((d) => host === d || host.endsWith(`.${d}`))
  } catch {
    return false
  }
}

/** Every piece of text a reader sees in a guide. */
function textsOf(g: (typeof MARK_SCHEME_GUIDES)[number]): string[] {
  return [
    g.summary,
    g.qualification,
    g.paperName,
    g.weighting,
    ...g.objectives.map((o) => o.plain),
    ...g.timing,
    ...g.checklist,
    ...g.sections.flatMap((s) => [
      s.name,
      s.about,
      ...s.questions.flatMap((q) => [
        q.label,
        q.kind,
        q.task,
        q.tip,
        ...q.rewards,
        ...q.avoid,
        ...q.levels.flatMap((l) => [l.name, l.marks, l.looksLike]),
      ]),
    ]),
  ]
}

describe('the guides', () => {
  it('cover every paper the marker can mark, once each', () => {
    const registry = Object.keys(MARK_SCHEMES).sort()
    const guided = MARK_SCHEME_GUIDES.map((g) => g.schemeId).sort()
    expect(guided).toEqual(registry)
    expect(new Set(guided).size).toBe(guided.length)
  })

  it('are linked from the client pages by the same address (src/lib/marking/guide-links.ts)', () => {
    expect(Object.keys(GUIDE_TITLE_BY_SCHEME).sort()).toEqual(
      MARK_SCHEME_GUIDES.map((g) => g.schemeId).sort(),
    )
    for (const g of MARK_SCHEME_GUIDES) {
      expect(GUIDE_TITLE_BY_SCHEME[g.schemeId], g.schemeId).toBe(g.title)
      expect(guidePageForScheme(g.schemeId)).toBe(guideHref(g))
    }
  })

  it('name, as not yet aligned with the marker, only papers the marker has', () => {
    for (const id of MARKER_NOT_ALIGNED) expect(MARK_SCHEMES[id], id).toBeDefined()
  })

  it('each have their own address, which leads back to them', () => {
    const slugs = MARK_SCHEME_GUIDES.map(guideSlug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const g of MARK_SCHEME_GUIDES) {
      expect(guideBySlug(guideSlug(g))).toBe(g)
      expect(guideForScheme(g.schemeId)).toBe(g)
    }
  })

  it('each fit a search result, measured here because their pages compute them', () => {
    // a-title-fits-in-a-search-result.test.ts cannot read a title made in
    // generateMetadata, and counts such pages instead; this is where these are
    // held to its 60 and 160. The page sets the title as absolute, so no
    // template is added to it.
    const titles = MARK_SCHEME_GUIDES.map(guideSearchTitle)
    expect(new Set(titles).size, 'no two guides share a search title').toBe(titles.length)
    for (const g of MARK_SCHEME_GUIDES) {
      const title = guideSearchTitle(g)
      const description = guideSearchDescription(g)
      expect(title.length, title).toBeLessThanOrEqual(60)
      expect(title, 'says what the page is').toMatch(/mark scheme/)
      expect(description.length, description).toBeLessThanOrEqual(160)
      expect(description.length, description).toBeGreaterThanOrEqual(50)
    }
  })

  it.each(MARK_SCHEME_GUIDES.map((g) => [g.schemeId, g] as const))(
    '%s: the marks add up, question to section to paper',
    (_id, g) => {
      expect(
        g.sections.reduce((n, s) => n + s.marks, 0),
        'sections to the paper',
      ).toBe(g.totalMarks)
      for (const s of g.sections) {
        expect(
          s.questions.reduce((n, q) => n + q.marks, 0),
          `${s.name}: questions to the section`,
        ).toBe(s.marks)
        for (const q of s.questions) {
          const sum = q.objectives.reduce((n, o) => n + o.marks, 0)
          expect(Math.round(sum * 100) / 100, `${q.label}: objectives to the question`).toBe(
            q.marks,
          )
        }
      }
    },
  )

  it.each(MARK_SCHEME_GUIDES.map((g) => [g.schemeId, g] as const))(
    '%s: every question is written out, and links only to a question the marker has',
    (_id, g) => {
      const marker = MARK_SCHEMES[g.schemeId]
      const ids = new Set(marker.questions.map((q) => q.id))
      for (const s of g.sections) {
        for (const q of s.questions) {
          expect(q.task.length, `${q.label}: task`).toBeGreaterThan(20)
          expect(q.rewards.length, `${q.label}: rewards`).toBeGreaterThanOrEqual(2)
          expect(q.avoid.length, `${q.label}: avoid`).toBeGreaterThanOrEqual(1)
          expect(q.tip.length, `${q.label}: tip`).toBeGreaterThan(15)
          for (const l of q.levels) {
            expect(l.looksLike.length, `${q.label} ${l.name}`).toBeGreaterThan(15)
          }
          if (q.markerQuestionId !== null) {
            expect(ids.has(q.markerQuestionId), `${q.label}: ${q.markerQuestionId}`).toBe(true)
          }
        }
      }
    },
  )

  it.each(MARK_SCHEME_GUIDES.map((g) => [g.schemeId, g] as const))(
    '%s: names the board document it was checked against, on the board s own site',
    (_id, g) => {
      expect(g.source.document.length).toBeGreaterThan(10)
      expect(official(g.source.url), g.source.url).toBe(true)
      expect(official(g.officialUrl), g.officialUrl).toBe(true)
      expect(g.source.checkedOn).toMatch(/^2026-\d{2}-\d{2}$/)
    },
  )

  it.each(MARK_SCHEME_GUIDES.map((g) => [g.schemeId, g] as const))(
    '%s: keeps the house style, and promises nothing',
    (_id, g) => {
      for (const t of textsOf(g)) {
        expect(t, 'an em or en dash').not.toMatch(/[–—]/)
        expect(t, 'an exclamation mark').not.toMatch(/!/)
        expect(t, 'a grade').not.toMatch(/\bgrades?\b/i)
        expect(t, 'American spelling').not.toMatch(/\b(analyze|organize|color|practicing)\b/i)
      }
    },
  )
})
