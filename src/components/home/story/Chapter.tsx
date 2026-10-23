import { cn } from '@/lib/utils'
import type { ChapterId } from './chapters'

/**
 * The frame every chapter shares: a large numeral, an eyebrow that reads
 * "Chapter I of V. Read it", the heading, the copy, and the media beside it.
 * Chapters alternate ink and cream bands; on wide screens the odd ones put the
 * media on the right and the even ones flip it.
 *
 * The column is 1080px wide at most and, from 1280px, min(1000px, 100vw minus
 * 440px), which is what keeps the sticky chapter rail clear of it.
 */
export function Chapter({
  id,
  numeral,
  eyebrow,
  heading,
  ink = false,
  flip = false,
  children,
  media,
}: {
  id: ChapterId
  numeral: string
  eyebrow: string
  heading: string
  ink?: boolean
  flip?: boolean
  children: React.ReactNode
  media: React.ReactNode
}) {
  return (
    <section
      id={id}
      data-chapter={id}
      aria-labelledby={`${id}-h`}
      className={cn(
        'scroll-mt-24 py-14 md:py-20 lg:py-[104px]',
        ink ? 'bg-ink-900 text-cream-50 dark:bg-ink-800' : 'bg-background text-foreground',
      )}
    >
      {/* The media always takes the wider (7fr) column, whichever side it is
          on; a flipped chapter swaps the template as well as the order. */}
      <div
        className={cn(
          'mx-auto grid w-full max-w-[1080px] gap-8 px-4 lg:items-center lg:gap-14 xl:max-w-[min(1000px,100vw_-_440px)] 2xl:max-w-[min(1080px,100vw_-_440px)]',
          flip ? 'lg:grid-cols-[7fr_5fr]' : 'lg:grid-cols-[5fr_7fr]',
        )}
      >
        <div className={cn('grid content-start gap-4', flip && 'lg:order-2')}>
          <p
            aria-hidden="true"
            className={cn(
              'mb-2 font-serif text-[88px] font-medium leading-[0.8] tracking-[-0.04em] md:text-[120px] lg:text-[148px]',
              ink ? 'text-clay-300' : 'text-clay-500 dark:text-clay-300',
            )}
          >
            {numeral}
          </p>
          <p
            className={cn(
              'font-mono text-xs font-medium uppercase tracking-[0.14em]',
              ink ? 'text-clay-300' : 'text-clay-700 dark:text-clay-300',
            )}
          >
            {eyebrow}
          </p>
          <h2
            id={`${id}-h`}
            className="max-w-[16ch] font-serif text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl"
          >
            {heading}
          </h2>
          {children}
        </div>
        <div className={cn('grid content-center gap-4', flip && 'lg:order-1')}>{media}</div>
      </div>
    </section>
  )
}

/** A chapter paragraph: 16px, measured at 52 characters. */
export function ChapterText({
  ink = false,
  children,
}: {
  ink?: boolean
  children: React.ReactNode
}) {
  return (
    <p
      className={cn(
        'max-w-[52ch] text-base leading-relaxed',
        ink ? 'text-ink-200' : 'text-muted-foreground',
      )}
    >
      {children}
    </p>
  )
}

/** The row of links under a chapter's copy. */
export function ChapterLinks({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-x-6 gap-y-1">{children}</div>
}
