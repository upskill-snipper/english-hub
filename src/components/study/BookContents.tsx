'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { EnglishText } from '@/components/i18n/EnglishText'
import { getStorageKey, loadFromStorage } from '@/components/study/InteractiveTextViewer'
import { useT } from '@/lib/i18n/use-t'
import type { BookChapter } from '@/lib/revision/served-by-chapter'

/** Matches the reader's own estimate (InteractiveTextViewer's READING_WPM). */
const READING_WPM = 200

/**
 * The contents of a book served a chapter to a page: every chapter as a link,
 * with its length, and the chapters this browser has read ticked.
 *
 * Progress is the reader's own, kept in this browser under the same keys, so a
 * chapter ticked on its page is ticked here. It is read after mount, as the
 * reader reads it: the server has no storage, and reading it during the first
 * render would make the server's page and the browser's disagree (the
 * hydration error the reader had until 26 September 2026).
 */
export function BookContents({ slug, chapters }: { slug: string; chapters: BookChapter[] }) {
  const t = useT()
  const [completed, setCompleted] = useState<Set<string>>(() => new Set())
  const [last, setLast] = useState<BookChapter | null>(null)

  useEffect(() => {
    setCompleted(new Set(loadFromStorage<string[]>(getStorageKey(slug, 'completed'), [])))
    const id = loadFromStorage<string>(getStorageKey(slug, 'active'), '')
    setLast(chapters.find((c) => c.id === id) ?? null)
  }, [slug, chapters])

  const start = last ?? chapters[0]

  return (
    <section aria-labelledby="book-contents" className="mt-8">
      {start ? (
        <Link
          href={start.href}
          className="inline-block max-w-full rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {last ? t('fulltext.carry_on_reading') : t('fulltext.start_reading')}:{' '}
          <EnglishText as="span">{start.title}</EnglishText>
        </Link>
      ) : null}

      <h2 id="book-contents" className="mt-8 font-heading text-heading-md text-foreground">
        {t('text_viewer.contents')}
      </h2>
      {/* grid-cols-1, not a bare grid: an implicit column grows to its longest
          title, which pushed the list past the edge of a phone. */}
      <ol className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2">
        {chapters.map((c) => (
          <li key={c.id}>
            <Link
              href={c.href}
              className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
            >
              <span className="flex min-w-0 items-center gap-2">
                {completed.has(c.id) ? (
                  <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
                ) : (
                  <span aria-hidden="true" className="size-4 shrink-0" />
                )}
                <EnglishText as="span" className="truncate">
                  {c.title}
                </EnglishText>
              </span>
              <span className="shrink-0 text-xs text-muted-foreground">
                ~{Math.ceil(c.words / READING_WPM)} {t('text_viewer.min_read')}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
