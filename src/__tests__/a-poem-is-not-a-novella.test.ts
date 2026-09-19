import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { DICTIONARY } from '@/lib/i18n/dictionary'

/**
 * Six poems told the reader they were novellas.
 *
 * `TextData.type` is not metadata. The viewer prints it under the title, and
 * uses it to choose the word for a section:
 *
 *   {data.author} · {t(`text_viewer.type_${data.type}`)} · {n} {scenes|chapters}
 *
 * The poem fetcher emitted `type: 'novella'` as a fixed string, because the
 * union had no 'poem' member and nobody looked at the rendered header. So a
 * student who opened The Tyger was told "William Blake · novella · 1 chapters",
 * and the same for If, Remember, Disabled, Sonnet 116 and My Last Duchess.
 *
 * Nothing failed. The page rendered, the text was correct, the label was a lie.
 *
 * WHAT THIS FILE CHECKS. Not the six files, which would pass again the moment a
 * seventh poem is fetched. It checks the two things that made it possible: that
 * a single-section file whose section is the poem itself is typed as a poem,
 * and that every type in use has a word in all three locales. The fetcher is
 * asserted too, because it is what wrote the wrong value six times.
 */

const ROOT = process.cwd()
const DIR = join(ROOT, 'src/data/full-texts')

interface TextFile {
  name: string
  src: string
  type: string
  sectionIds: string[]
}

const FILES: TextFile[] = readdirSync(DIR)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .map((f) => {
    const src = readFileSync(join(DIR, f), 'utf8')
    return {
      name: f.replace(/\.ts$/, ''),
      src,
      type: src.match(/^ {2}type: '([^']+)',$/m)?.[1] ?? '(none)',
      sectionIds: [...src.matchAll(/^ {6}id: '([^']+)',$/gm)].map((m) => m[1]),
    }
  })

/**
 * The union the viewer declares, read from the viewer rather than restated.
 *
 * Anchored inside `interface TextData`, because an unanchored search for a
 * `type:` line finds the annotation union thirty lines earlier and every
 * assertion below then fails against the wrong five words.
 */
const VIEWER = readFileSync(join(ROOT, 'src/components/study/InteractiveTextViewer.tsx'), 'utf8')
const TEXT_DATA = VIEWER.slice(VIEWER.indexOf('interface TextData {'))
const UNION = (TEXT_DATA.match(/^ {2}type: ((?:'[a-z]+'(?: \| )?)+)$/m)?.[1] ?? '')
  .split('|')
  .map((s) => s.trim().replace(/'/g, ''))
  .filter(Boolean)

describe('there are texts to check', () => {
  it('found them', () => {
    // Without this the file passes by finding nothing, which is how the six
    // got in.
    expect(FILES.length).toBeGreaterThan(20)
    expect(UNION.length).toBeGreaterThanOrEqual(4)
  })
})

describe('every text declares a type the viewer understands', () => {
  it.each(FILES.map((f) => [f.name, f.type]))('%s is "%s"', (_name, type) => {
    expect(UNION).toContain(type)
  })
})

describe('a file whose only section is the poem itself is typed as a poem', () => {
  // The poem fetcher writes exactly one section, with id 'poem'. That is a
  // structural fact about the file, not a judgement about the work, so it can
  // be asserted without anybody deciding what counts as poetry.
  const poems = FILES.filter((f) => f.sectionIds.length === 1 && f.sectionIds[0] === 'poem')

  it('there are some, so this is not vacuous', () => {
    expect(poems.length).toBeGreaterThanOrEqual(6)
  })

  it.each(poems.map((f) => [f.name, f.type]))('%s is typed "%s"', (_name, type) => {
    expect(type).toBe('poem')
  })

  it('and nothing else claims to be a poem', () => {
    // The counterweight: typing everything 'poem' would satisfy the above.
    const claiming = FILES.filter((f) => f.type === 'poem').map((f) => f.name)
    const structural = poems.map((f) => f.name)
    expect(claiming.sort()).toEqual(structural.sort())
  })
})

describe('every type in use has a word for it, in all three locales', () => {
  const used = [...new Set(FILES.map((f) => f.type))]

  it.each(used)('text_viewer.type_%s exists', (type) => {
    const entry = DICTIONARY[`text_viewer.type_${type}`]
    expect(entry, `no dictionary entry for text_viewer.type_${type}`).toBeDefined()
    expect(entry.en.length).toBeGreaterThan(0)
    expect(entry.ar?.length ?? 0).toBeGreaterThan(0)
    expect(entry.es?.length ?? 0).toBeGreaterThan(0)
  })

  it('and a poem is counted in stanzas, not chapters', () => {
    const CODE = VIEWER.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(CODE).toContain("t('text_viewer.stanzas')")
    expect(CODE).toContain("t('text_viewer.end_of_poem')")
    expect(CODE).toMatch(/data\.type === 'poem'/)
  })
})

describe('the fetcher that wrote the wrong value six times', () => {
  const FETCHER = readFileSync(join(ROOT, 'scripts/fetch-public-domain-poem.mjs'), 'utf8')

  it('emits a poem', () => {
    expect(FETCHER).toContain("type: 'poem',")
  })

  it('and no longer emits a novella', () => {
    expect(FETCHER).not.toContain("type: 'novella',")
  })
})
