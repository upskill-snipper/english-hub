// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'
import {
  OCR_CLUSTERS,
  OCR_POETRY_EXAM,
  OCR_SET_POEMS,
  type OcrClusterSlug,
} from '@/lib/board/ocr-anthology'
import { EDUQAS_ANTHOLOGY_2014, EDUQAS_ANTHOLOGY_2027 } from '@/lib/board/eduqas-anthology'
import {
  OCR_POEM_HOOKS,
  OCR_STUDY_PAGES,
  OCR_WIDER_READING,
} from '@/app/revision/poetry/ocr/_components/ocr-cluster-content'
import { allDictionaryKeys, lookup } from '@/lib/i18n/dictionary'
import { ALL_QUESTIONS, questionMatchesBoard } from '@/app/revision/quiz/quiz-data'

/**
 * What the site says a board sets is what that board sets.
 *
 * THE DEFECT, found 2 October 2026. The OCR poetry section described an
 * anthology OCR has never published: four clusters of fifteen, the fourth
 * ("Power and the Natural World") invented, and lists in which five of sixty
 * poems were OCR's. Its comparison guide described a different exam (the
 * poetry in Section B, a cluster poem compared with one of the student's
 * choice, AO3 assessed). Six poem pages were filed under OCR clusters, and OCR
 * sets none of the six. The Eduqas hub called the new anthology a "12-poem 2025
 * cluster" (it has fifteen poems and is examined from summer 2027) and left out
 * three of them, and eight pages written for the anthology Eduqas retired in
 * summer 2026 carried no honest account of it. One of those prints a passage
 * Eduqas never printed.
 *
 * A student who trusts a list like that revises the wrong poems. So the lists
 * now come from two modules that record where each poem was read from
 * (src/lib/board/ocr-anthology.ts, eduqas-anthology.ts), and this file holds the
 * pages to them. It reads source text and the dictionary; it renders nothing.
 */

const ROOT = process.cwd()
const read = (p: string) => readFileSync(join(ROOT, p), 'utf8')
const pageExists = (href: string) => existsSync(join(ROOT, 'src/app', href, 'page.tsx'))
const norm = (s: string) => s.toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim()

/** Every string `title:` inside the named top-level array literals of a file. */
function titlesIn(file: string, arrays: string[]): string[] {
  const sf = ts.createSourceFile(file, read(file), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const out: string[] = []
  sf.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return
    for (const d of node.declarationList.declarations) {
      if (!ts.isIdentifier(d.name) || !arrays.includes(d.name.text)) continue
      const visit = (n: ts.Node) => {
        if (
          ts.isPropertyAssignment(n) &&
          ts.isIdentifier(n.name) &&
          n.name.text === 'title' &&
          ts.isStringLiteralLike(n.initializer)
        )
          out.push(n.initializer.text)
        ts.forEachChild(n, visit)
      }
      if (d.initializer) visit(d.initializer)
    }
  })
  return out
}

/** The same, for `slug:`. */
function slugsIn(file: string, array: string): string[] {
  const text = read(file)
  const at = text.indexOf(`const ${array}`)
  if (at < 0) return []
  const end = text.indexOf('\n]\n', at)
  return [...text.slice(at, end).matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
}

describe('OCR: what the site says OCR sets', () => {
  it('records three clusters of fifteen, five of each added in 2022, and none repeated', () => {
    expect(OCR_CLUSTERS.map((c) => c.slug)).toEqual([
      'love-and-relationships',
      'conflict',
      'youth-and-age',
    ])
    for (const c of OCR_CLUSTERS) {
      expect(c.poems, c.slug).toHaveLength(15)
      expect(
        c.poems.filter((p) => p.added2022),
        c.slug,
      ).toHaveLength(5)
      expect(c.removedIn2022, c.slug).toHaveLength(5)
      const removed = new Set(c.removedIn2022.map((p) => p.title))
      for (const p of c.poems) expect(removed.has(p.title), p.title).toBe(false)
    }
    expect(new Set(OCR_SET_POEMS.map((p) => p.title)).size).toBe(45)
  })

  it('renders each cluster page from that list, and has no fourth cluster page', () => {
    for (const c of OCR_CLUSTERS) {
      const src = read(`src/app/revision/poetry/ocr/${c.slug}/page.tsx`)
      expect(src, c.slug).toContain(`<OcrClusterPage slug="${c.slug}"`)
    }
    // The hub's cards are the module's clusters, no more and no fewer.
    const hub = read('src/app/revision/poetry/ocr/page.tsx')
    const cards = [...hub.matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
    expect(cards).toEqual(OCR_CLUSTERS.map((c) => c.slug))
    // The old fourth cluster's URL survives only as a noindex notice.
    const notice = read('src/app/revision/poetry/ocr/power-and-natural-world/page.tsx')
    expect(notice).toContain('robots: { index: false')
    expect(notice).not.toContain('OcrClusterPage')
  })

  it('describes every poem OCR sets, and no poem it does not', () => {
    const set = OCR_SET_POEMS.map((p) => p.title).sort()
    expect(Object.keys(OCR_POEM_HOOKS).sort()).toEqual(set)
    for (const [title, hook] of Object.entries(OCR_POEM_HOOKS)) {
      expect(hook.length, title).toBeGreaterThan(20)
    }
  })

  it('links a poem to a study page only where the page exists', () => {
    for (const [title, p] of Object.entries(OCR_STUDY_PAGES)) {
      expect(set(OCR_SET_POEMS.map((x) => x.title)).has(title), title).toBe(true)
      expect(pageExists(p.href), p.href).toBe(true)
      expect(lookup(p.whereKey, 'en'), p.whereKey).not.toBe(`[[${p.whereKey}]]`)
    }
  })

  it('labels every poem page filed under OCR as wider reading, because OCR sets none of them', () => {
    const setTitles = set(OCR_SET_POEMS.map((p) => norm(p.title)))
    const listed = new Set(
      Object.values(OCR_WIDER_READING)
        .flat()
        .map((w) => w.href),
    )
    let pages = 0
    const subdirs = (p: string) =>
      readdirSync(p, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .map((e) => e.name)
    for (const cluster of subdirs(join(ROOT, 'src/app/revision/poetry/ocr'))) {
      if (cluster.startsWith('_')) continue
      const dir = join(ROOT, 'src/app/revision/poetry/ocr', cluster)
      for (const poem of subdirs(dir)) {
        const file = join(dir, poem, 'page.tsx')
        if (!existsSync(file)) continue
        pages++
        const src = readFileSync(file, 'utf8')
        const title = src.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1].trim() ?? poem
        expect(setTitles.has(norm(title)), `${title} is an OCR set poem; label it as one`).toBe(
          false,
        )
        expect(src, `${cluster}/${poem}`).toContain('<OcrWiderReadingNotice')
        expect(src, `${cluster}/${poem}`).not.toMatch(/cluster="/)
        // A page under a real cluster is offered from that cluster's page.
        if (cluster !== 'power-and-natural-world')
          expect(listed.has(`/revision/poetry/ocr/${cluster}/${poem}`), poem).toBe(true)
      }
    }
    expect(pages, 'the walk found the six pages').toBe(6)
    for (const href of listed) expect(pageExists(href), href).toBe(true)
  })

  it('states the exam as OCR sets it', () => {
    const body = lookup('poetry_hub.ocr.exam_body', 'en')
    expect(body).toContain(
      `(${OCR_POETRY_EXAM.partA.marks} marks, about ${OCR_POETRY_EXAM.partA.suggestedMinutes} minutes)`,
    )
    expect(body).toContain(
      `(${OCR_POETRY_EXAM.partB.marks} marks, about ${OCR_POETRY_EXAM.partB.suggestedMinutes} minutes)`,
    )
    expect(body).toContain('Section A')
    expect(lookup('poetry_hub.ocr.cg.marks_value', 'en')).toContain(String(OCR_POETRY_EXAM.marks))
    expect(lookup('poetry_hub.ocr.cg.assess_value', 'en')).toMatch(/^AO1 and AO2\b/)
    // Comments are dropped first: the docblock quotes what the page used to say.
    const guide = read('src/app/revision/poetry/ocr/comparison-guide/page.tsx').replace(
      /^\s*\/\/.*$/gm,
      '',
    )
    expect(guide).not.toMatch(/another poem of your choice/i)
    expect(guide).not.toMatch(/Section B tests/)
  })

  it('says nowhere in the OCR strings that there are four clusters or a natural-world one', () => {
    const offenders = allDictionaryKeys()
      .filter(
        (k) => /(^|\.)ocr(\.|_|$)|board\.desc\.ocr|board\.ocr/.test(k) && !k.includes('pnw_notice'),
      )
      .filter((k) =>
        /four (thematic )?clusters|4 (thematic )?clusters|natural world|power & natural/i.test(
          lookup(k, 'en'),
        ),
      )
    expect(offenders).toEqual([])
  })
})

describe('Eduqas: what the site says Eduqas sets', () => {
  const HUB = 'src/app/revision/poetry/eduqas/page.tsx'

  /** The hub's card for each poem of the 2027 anthology: its title, slug and status. */
  const cards2027 = () => {
    const sf = ts.createSourceFile(HUB, read(HUB), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    const arrays = [
      'CHILDHOOD_AND_NATURE',
      'LOVE_AND_RELATIONSHIPS',
      'WAR_AND_CONFLICT',
      'IDENTITY_AND_VOICE',
    ]
    const out: { title: string; slug: string | null; publicDomain: boolean }[] = []
    sf.forEachChild((node) => {
      if (!ts.isVariableStatement(node)) return
      for (const d of node.declarationList.declarations) {
        if (!ts.isIdentifier(d.name) || !arrays.includes(d.name.text)) continue
        if (!d.initializer || !ts.isArrayLiteralExpression(d.initializer)) continue
        for (const e of d.initializer.elements) {
          if (!ts.isObjectLiteralExpression(e)) continue
          const get = (name: string) =>
            e.properties.find(
              (p): p is ts.PropertyAssignment =>
                ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name,
            )?.initializer
          const title = get('title')
          const slug = get('slug')
          out.push({
            title: title && ts.isStringLiteralLike(title) ? title.text : '',
            slug: slug && ts.isStringLiteralLike(slug) ? slug.text : null,
            publicDomain: get('publicDomain')?.kind === ts.SyntaxKind.TrueKeyword,
          })
        }
      }
    })
    return out
  }

  it('records fifteen poems from 2027 and eighteen to 2026, with none in common', () => {
    expect(EDUQAS_ANTHOLOGY_2027.poems).toHaveLength(15)
    expect(EDUQAS_ANTHOLOGY_2014.poems).toHaveLength(18)
    const old = set(EDUQAS_ANTHOLOGY_2014.poems.map((p) => p.title))
    for (const p of EDUQAS_ANTHOLOGY_2027.poems) expect(old.has(p.title), p.title).toBe(false)
  })

  it('lists exactly the fifteen poems of the anthology examined from 2027 on the hub', () => {
    const titles = titlesIn(HUB, [
      'CHILDHOOD_AND_NATURE',
      'LOVE_AND_RELATIONSHIPS',
      'WAR_AND_CONFLICT',
      'IDENTITY_AND_VOICE',
    ]).map((t) => t.replace(/\s*\([^)]*\)\s*$/, ''))
    expect(titles.sort()).toEqual(EDUQAS_ANTHOLOGY_2027.poems.map((p) => p.title).sort())
    expect(read(HUB)).not.toMatch(/Source confidence: LOW/)
  })

  /**
   * ADDED 10 October 2026. Until then five of the seven public-domain poems of the
   * 2027 anthology (The Schoolboy, I Wandered Lonely as a Cloud, Sonnet 29, Disabled
   * and I Shall Return) had no page, and the hub said "no study page yet" beside each.
   * Every poem Eduqas sets that the site may print now has one, and this holds it so.
   */
  it('gives every public-domain poem of the 2027 anthology a page, linked from the hub', () => {
    const pd = cards2027().filter((c) => c.publicDomain)
    // The vacuity guard: were the hub misread, no poem would be public domain.
    expect(pd.map((c) => c.title.replace(/\s*\([^)]*\)\s*$/, '')).sort()).toEqual([
      'Cousin Kate',
      'Disabled',
      'Drummer Hodge',
      'I Shall Return',
      'I Wandered Lonely as a Cloud',
      'Sonnet 29',
      'The Schoolboy',
    ])
    for (const c of pd) {
      expect(c.slug, c.title).toBeTruthy()
      expect(pageExists(`revision/poetry/eduqas/${c.slug}`), c.title).toBe(true)
    }
  })

  it('labels every page written for the 2014 anthology as such, and lists each on the hub', () => {
    const current = new Set(cards2027().flatMap((c) => (c.slug ? [c.slug] : [])))
    const pages = readdirSync(join(ROOT, 'src/app/revision/poetry/eduqas')).filter(
      (d) =>
        !d.startsWith('_') &&
        d !== 'essay-plans' &&
        existsSync(join(ROOT, 'src/app/revision/poetry/eduqas', d, 'page.tsx')),
    )
    const old = pages.filter((d) => !current.has(d))
    expect(old).toHaveLength(8)
    expect(slugsIn(HUB, 'PREVIOUS_ANTHOLOGY').sort()).toEqual([...old].sort())
    for (const d of pages) {
      const src = read(`src/app/revision/poetry/eduqas/${d}/page.tsx`)
      if (current.has(d)) expect(src, d).not.toContain('EduqasPreviousAnthologyNotice')
      else expect(src, d).toContain('<EduqasPreviousAnthologyNotice')
      expect(src, d).not.toMatch(/pre-2025|2025 cluster/)
    }
  })

  it('says nowhere in the Eduqas strings that the anthology is a 2025 cluster of twelve', () => {
    const offenders = allDictionaryKeys()
      .filter((k) => /eduqas/i.test(k))
      .filter((k) =>
        /2025 (anthology|cluster)|eduqas (gcse )?2025|\b12 poems|twelve/i.test(lookup(k, 'en')),
      )
    expect(offenders).toEqual([])
  })
})

describe('the quiz: what it serves a student of each board', () => {
  it('serves no question on the Eduqas anthology retired in summer 2026', () => {
    const old = EDUQAS_ANTHOLOGY_2014.poems.map((p) => `"${p.title}"`)
    const onOld = ALL_QUESTIONS.filter((q) => old.some((t) => q.question.includes(t)))
    // The vacuity guard: the bank does hold such questions; they must all be retired.
    expect(onOld.length).toBeGreaterThan(0)
    for (const q of onOld) {
      if (q.boards?.includes('eduqas')) {
        expect(q.retired, q.id).toBeTruthy()
        expect(questionMatchesBoard(q, 'eduqas'), q.id).toBe(false)
        expect(questionMatchesBoard(q, null), q.id).toBe(false)
      }
    }
  })
})

function set<T>(xs: T[]): Set<T> {
  return new Set(xs)
}
