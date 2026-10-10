import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import { PART_3_NOTES, part3Poems } from '@/app/igcse/edexcel/poetry/part-3-poems'
import { ANTHOLOGY } from '@/lib/board/edexcel-igcse-anthology'
import { textGuideHref } from '@/lib/revision/guide-href'
import {
  COPYRIGHT_GUIDE_SLUGS,
  PUBLIC_DOMAIN_GUIDE_SLUGS,
} from '@/lib/study-guides/guide-rights.generated'

/**
 * The International GCSE Literature poetry hub lists the poems Section B sets.
 *
 * WHY (10 October 2026). /igcse/edexcel/poetry is where a 4ET1 student finds
 * the anthology poems for Paper 1 Section B. Its own hand-kept list had
 * thirteen poems: Ozymandias, which the anthology does not print, five Part 2
 * poems set for English Language A, and only seven of the sixteen Part 3
 * poems. The list now comes from the register read off Issue 8, and this file
 * holds the page to it. Nothing here prints any poem.
 */

const PART_3 = ANTHOLOGY.find((p) => p.part === 3)!
const APP = join(process.cwd(), 'src/app')
const routeExists = (href: string) => existsSync(join(APP, ...href.split('/').filter(Boolean)))

describe('the poetry hub', () => {
  it('lists exactly Part 3 of the anthology, in its order', () => {
    expect(PART_3.entries).toHaveLength(16)
    const listed = part3Poems()
    expect(listed.map((p) => p.slug)).toEqual(PART_3.entries.map((e) => e.slug))
    expect(listed.map((p) => p.number)).toEqual(PART_3.entries.map((_, i) => i + 1))
    // Titles and poets as the anthology prints them, never retyped.
    expect(listed.map((p) => [p.title, p.poet])).toEqual(
      PART_3.entries.map((e) => [e.title, e.author]),
    )
  })

  it('keeps notes for no poem outside Part 3', () => {
    expect(Object.keys(PART_3_NOTES).sort()).toEqual(PART_3.entries.map((e) => e.slug).sort())
  })

  it('no longer lists the poems Section B never sets', () => {
    const slugs = part3Poems().map((p) => p.slug)
    for (const wrong of [
      'ozymandias',
      'disabled',
      'out-out',
      'an-unknown-girl',
      'the-bright-lights-of-sarajevo',
      'still-i-rise',
    ]) {
      expect(slugs, wrong).not.toContain(wrong)
    }
  })

  it('links every poem to a page that exists', () => {
    for (const poem of part3Poems()) {
      if (poem.href.startsWith('/igcse/edexcel/poetry/')) {
        expect(routeExists(poem.href), poem.href).toBe(true)
      } else {
        // A poem without its own International GCSE page goes where the site's
        // own resolver sends its guide.
        expect(poem.href, poem.slug).toBe(textGuideHref(poem.slug, 'edexcel-igcse'))
        expect(routeExists(poem.href), poem.href).toBe(true)
      }
    }
  })

  it('marks a poem public domain exactly when its guide says so', () => {
    // The badge offers a "full interactive study guide" for a public-domain
    // poem and "study notes only" for one in copyright.
    for (const poem of part3Poems()) {
      const known = PUBLIC_DOMAIN_GUIDE_SLUGS.has(poem.slug) || COPYRIGHT_GUIDE_SLUGS.has(poem.slug)
      expect(known, `${poem.slug} has no study guide`).toBe(true)
      expect(poem.publicDomain, poem.slug).toBe(PUBLIC_DOMAIN_GUIDE_SLUGS.has(poem.slug))
    }
  })

  it('is what the page renders, and the page says sixteen', () => {
    const page = readFileSync(join(APP, 'igcse/edexcel/poetry/page.tsx'), 'utf8')
    expect(page).toContain('const anthology = part3Poems()')
    expect(page).not.toMatch(/The 13 poems/)
    expect(page.match(/The 16 poems in Part 3/g) ?? []).toHaveLength(2)
  })
})
