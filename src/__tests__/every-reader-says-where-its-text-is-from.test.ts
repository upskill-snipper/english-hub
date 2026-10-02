import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { rightsLineKey, FROM_THE_ANTHOLOGY } from '@/components/study/rights-line'
import { lookup } from '@/lib/i18n/dictionary'

/**
 * Every full-text reader says truly where its text comes from.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). One line
 * was printed under every text FullTextReader shows: out of UK copyright, and
 * "a copy of a published modern-spelling edition". True of the thirteen plays.
 * Not of the novels, copied as their editions print them ("to-day",
 * "connexion"); not of The Tyger, whose edition keeps Blake's spelling; and
 * not of Disabled or Do not go gentle, which are the text of the Pearson
 * anthology, not of any edition Project Gutenberg holds. Frankenstein's reader
 * already said "the 1831 text, in its original spelling"; the rest are chosen
 * by src/components/study/rights-line.ts.
 *
 * Each held file says in its own header what it was copied from, and that is
 * what this holds each line to.
 */

const ROOT = process.cwd()
const DIR = join(ROOT, 'src/data/full-texts')
const TEXTS = readdirSync(DIR)
  .filter((f) => f.endsWith('.ts'))
  .map((f) => f.replace(/\.ts$/, ''))

/** The held file's header comment, and the type it declares. */
function held(slug: string) {
  const src = readFileSync(join(DIR, `${slug}.ts`), 'utf8')
  const header = src.slice(0, src.indexOf('import type'))
  const type = /^ {2}type: '([^']+)',$/m.exec(src)?.[1] ?? '(none)'
  return { header, type }
}

/** Whether a reader page mounts FullTextReader, which prints the line. */
const readsThroughFullTextReader = (slug: string) =>
  readFileSync(join(ROOT, 'src/app/revision/texts', slug, 'read/page.tsx'), 'utf8').includes(
    '<FullTextReader',
  )

describe('the rights line under each held text', () => {
  it('has texts to check', () => {
    // 31 and 29 since 2 October 2026, when The Great Gatsby joined with a
    // FullTextReader page.
    expect(TEXTS.length).toBe(31)
    expect(TEXTS.filter(readsThroughFullTextReader)).toHaveLength(29)
  })

  it.each(TEXTS.filter(readsThroughFullTextReader))('%s', (slug) => {
    const { header, type } = held(slug)
    const key = rightsLineKey(slug, type)
    const en = lookup(key, 'en')
    // A play: the generator's own header says modern-spelling, and so may the
    // line. Nothing else may say it.
    expect(en.includes('modern-spelling'), `${slug}: ${key}`).toBe(
      header.includes('modern-spelling edition'),
    )
    // The anthology line exactly where the header names the anthology.
    expect(key === 'fulltext.rights.anthology', slug).toBe(
      /Pearson[\s/]+(?:\/\/\s*)?Edexcel International GCSE English Anthology/.test(header),
    )
    // "Not a retyping" only of a text the header says was copied, not typed.
    if (en.includes('not a retyping'))
      expect(header, slug).toMatch(/byte copy of a published (?:modern-spelling )?edition/)
  })

  it('is written in all three languages, and the old line is gone', () => {
    for (const key of [
      'fulltext.rights.play',
      'fulltext.rights.edition',
      'fulltext.rights.anthology',
    ] as const)
      for (const locale of ['en', 'ar', 'es'] as const) {
        const line = lookup(key, locale)
        expect(line, `${key} ${locale}`).not.toMatch(/^\[\[/)
        expect(line.length, `${key} ${locale}`).toBeGreaterThan(60)
      }
    expect(lookup('fulltext.rights.edition', 'es')).not.toContain('ortografía moderna')
    expect(lookup('fulltext.rights.edition', 'ar')).not.toContain('الحديث')
    const reader = readFileSync(join(ROOT, 'src/components/study/FullTextReader.tsx'), 'utf8')
    expect(reader).toContain('t(rightsLineKey(slug, data.type))')
    expect(reader).not.toContain('fulltext.public_domain')
  })

  it('names the anthology poems that are held', () => {
    for (const slug of FROM_THE_ANTHOLOGY) expect(TEXTS).toContain(slug)
  })
})
