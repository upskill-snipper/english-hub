import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ReactElement } from 'react'
import type { TextData } from '@/components/study/InteractiveTextViewer'
import { SERVED_BY_CHAPTER, chapterHref, type BookChapter } from '@/lib/revision/served-by-chapter'

vi.mock('next/navigation', () => ({
  notFound: () => {
    throw new Error('NEXT_NOT_FOUND')
  },
}))

/**
 * A long novel is sent a chapter at a time, never whole.
 *
 * WHY (10 October 2026). Pride and Prejudice, Great Expectations and Jane Eyre
 * are 120,000 to 190,000 words each. Every other held text is one route whose
 * page ships the whole work to the browser; one of these shipped that way is a
 * megabyte of text a phone must parse before it shows a line. So they are
 * served by chapter (src/lib/revision/served-by-chapter.ts): /read lists the
 * chapters, and /read/<n> renders on the server and hands the browser that
 * chapter and the contents.
 *
 * What would undo it without failing anything else: one 'use client' at the
 * top of a route file. The page would still render, every chapter would still
 * be there, and the whole book would be back in the browser's bundle. So that
 * is asserted, and so is what each page hands the reader: what a server
 * component passes to a client component is exactly what the browser receives.
 */

type Props = { data: TextData; book?: { chapters: BookChapter[] } }
type Route = {
  default: (args: { params: Promise<{ chapter: string }> }) => Promise<ReactElement<Props>>
  generateStaticParams: () => { chapter: string }[]
  dynamicParams?: boolean
}

const ROOT = process.cwd()
const SLUGS = Object.keys(SERVED_BY_CHAPTER) as (keyof typeof SERVED_BY_CHAPTER)[]
const routeFile = (slug: string, file: string) =>
  join(ROOT, 'src/app/revision/texts', slug, 'read', file)

async function held(slug: string): Promise<TextData> {
  const mod = (await import(`@/data/full-texts/${slug}`)) as Record<string, TextData>
  return Object.values(mod)[0]
}

describe('a long novel is served by chapter', () => {
  it('has the three novels to serve', () => {
    expect(SLUGS.sort()).toEqual(['great-expectations', 'jane-eyre', 'pride-and-prejudice'])
  })

  it.each(SLUGS)('%s: the chapter count the sitemap lists is the held text’s', async (slug) => {
    expect((await held(slug)).sections).toHaveLength(SERVED_BY_CHAPTER[slug])
  })

  it.each(SLUGS)('%s: no route file is a client component', (slug) => {
    for (const file of ['page.tsx', 'layout.tsx', '[chapter]/page.tsx']) {
      const src = readFileSync(routeFile(slug, file), 'utf8')
      expect(src, `${slug}/read/${file}`).not.toMatch(/^\s*['"]use client['"]/)
    }
  })

  it.each(SLUGS)('%s: the contents page hands the reader no text at all', async (slug) => {
    const { default: Page } = (await import(`@/app/revision/texts/${slug}/read/page`)) as {
      default: () => ReactElement<Props>
    }
    const { data, book } = Page().props
    expect(data.sections).toHaveLength(0)
    expect(book?.chapters).toHaveLength(SERVED_BY_CHAPTER[slug])
    expect(JSON.stringify(book).length).toBeLessThan(20_000)
  })

  it.each(SLUGS)('%s: each chapter page hands the reader that chapter alone', async (slug) => {
    const route = (await import(`@/app/revision/texts/${slug}/read/[chapter]/page`)) as Route
    const text = await held(slug)
    expect(route.dynamicParams).toBe(false)
    const params = route.generateStaticParams()
    expect(params.map((p) => p.chapter)).toEqual(text.sections.map((_, i) => String(i + 1)))

    for (const n of [1, Math.ceil(text.sections.length / 2), text.sections.length]) {
      const { data, book } = (
        await route.default({ params: Promise.resolve({ chapter: String(n) }) })
      ).props
      expect(data.sections, `${slug} chapter ${n}`).toEqual([text.sections[n - 1]])
      expect(book?.chapters[n - 1].href).toBe(chapterHref(slug, n))
      // The whole page's payload stays within one chapter plus the contents.
      expect(JSON.stringify({ data, book }).length).toBeLessThan(
        JSON.stringify(text.sections[n - 1]).length + 20_000,
      )
    }
  })

  it.each(SLUGS)('%s: a chapter that does not exist is not a page', async (slug) => {
    const route = (await import(`@/app/revision/texts/${slug}/read/[chapter]/page`)) as Route
    for (const bad of ['0', String(SERVED_BY_CHAPTER[slug] + 1), '01', 'one', '-1']) {
      await expect(
        route.default({ params: Promise.resolve({ chapter: bad }) }),
        bad,
      ).rejects.toThrow('NEXT_NOT_FOUND')
    }
  })
})
