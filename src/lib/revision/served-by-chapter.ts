import type { Metadata } from 'next'
import type { TextData } from '@/components/study/InteractiveTextViewer'

/**
 * The held texts too long to send in one page, which the reader serves a
 * chapter to a page instead.
 *
 * WHY. Every other held text is one route that sends the whole work to the
 * browser: Frankenstein, the longest of them, is about 450 KB of text inside
 * the page's JavaScript, and a phone parses all of it before the first line
 * shows. Pride and Prejudice, Great Expectations and Jane Eyre are 120,000 to
 * 190,000 words each, up to three times that, and were left unheld for exactly
 * this reason (see scripts/fetch-public-domain-prose.mjs). So the book stays on
 * the server: /read lists the chapters and /read/<n> sends one. Their comics
 * were waiting on this, because a comic is drawn only for a text we hold.
 *
 * The counts are here so the sitemap can list the chapter pages without
 * loading three novels to count them. src/__tests__/a-long-book-sends-one-chapter.test.ts
 * holds each to its held text.
 */
export const SERVED_BY_CHAPTER = {
  'pride-and-prejudice': 61,
  'great-expectations': 59,
  'jane-eyre': 38,
} as const

export type ChapterServedSlug = keyof typeof SERVED_BY_CHAPTER

/** One line of a served book's contents. Built on the server, sent to the browser. */
export interface BookChapter {
  /** The held section's id, which is also the reader's storage key for it. */
  id: string
  title: string
  href: string
  words: number
}

export const readerHref = (slug: string): string => `/revision/texts/${slug}/read`

export const chapterHref = (slug: string, n: number): string => `${readerHref(slug)}/${n}`

/** Counted as the reader counts them, so the contents and the reader agree. */
export function countWords(html: string): number {
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text ? text.split(' ').length : 0
}

/** The whole book's contents: titles, links and lengths, and none of the text. */
export function bookContents(slug: string, data: TextData): BookChapter[] {
  return data.sections.map((s, i) => ({
    id: s.id,
    title: s.title,
    href: chapterHref(slug, i + 1),
    words: countWords(s.content),
  }))
}

/** The book without its text, for the contents page. */
export function withoutText(data: TextData): TextData {
  return { ...data, sections: [] }
}

/**
 * The book with one chapter in it, for that chapter's page, or null when the
 * number names no chapter. Chapters are numbered straight through, as students
 * know them, whatever volume the edition prints them in.
 */
export function oneChapter(data: TextData, chapter: string): TextData | null {
  if (!/^[1-9]\d*$/.test(chapter)) return null
  const section = data.sections[Number(chapter) - 1]
  return section ? { ...data, sections: [section] } : null
}

export function chapterParams(data: TextData): { chapter: string }[] {
  return data.sections.map((_, i) => ({ chapter: String(i + 1) }))
}

export function chapterMetadata(slug: string, data: TextData, chapter: string): Metadata {
  const one = oneChapter(data, chapter)
  if (!one) return {}
  const part = one.sections[0].title
  return {
    title: `Read ${data.title}, ${part}`,
    description: `${part} of ${data.title} by ${data.author}, in full and free: the complete public-domain novel, a chapter at a time.`,
    alternates: { canonical: chapterHref(slug, Number(chapter)) },
  }
}
