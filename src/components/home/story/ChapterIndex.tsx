'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export type ChapterIndexItem = {
  id: string
  numeral: string
  /** "Read it": the chip row below 1280px. */
  label: string
  /** "Read": the slim rail from 1280px, which must clear the content column. */
  short: string
}

/**
 * The chapter index: a wrapping chip row on phones and tablets, so all five
 * entries show at every width, and from 1280px a slim rail that sticks beside
 * the chapters and scrolls away with them. The rail is a zero-height sticky
 * element bounded by the story, so no script decides when it shows; the only
 * script here marks the chapter in view with aria-current.
 *
 * The rail uses the short labels and sits 24px from the viewport edge; the
 * chapters' column is min(1000px, 100vw - 440px) wide from 1280px, which
 * leaves the rail at least 40px of clear space at 1280 and 1440 (measured on
 * 20 October 2026 at 1440: rail 24 to 149px, column from 220px, so 71px clear).
 *
 * Below 1280px the focus ring is the site's default teal ring; only the rail,
 * which sits on ink, uses the peach one.
 */
export function ChapterIndex({ items, label }: { items: ChapterIndexItem[]; label: string }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'))
    if (sections.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.getAttribute('data-chapter'))
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav
      aria-label={label}
      className="py-4 xl:pointer-events-none xl:sticky xl:top-[22vh] xl:z-20 xl:h-0 xl:py-0"
    >
      <ol
        className={cn(
          'mx-auto flex max-w-[1080px] flex-wrap justify-center gap-2 px-4',
          'xl:pointer-events-auto xl:absolute xl:start-6 xl:top-0 xl:m-0 xl:w-auto xl:flex-col xl:flex-nowrap xl:justify-start xl:gap-1 xl:rounded-3xl xl:border xl:border-cream-50/15 xl:bg-ink-950/90 xl:p-2 xl:shadow-md xl:backdrop-blur-md',
        )}
      >
        {items.map((item) => {
          const current = active === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? 'true' : undefined}
                className={cn(
                  'inline-flex min-h-11 items-center gap-2.5 rounded-full border border-ink-500 bg-card pe-4 ps-3 text-sm font-medium text-foreground transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'dark:border-ink-400',
                  current && 'border-foreground bg-foreground text-background',
                  'xl:rounded-2xl xl:border-0 xl:bg-transparent xl:text-ink-200 xl:hover:bg-cream-50/10 xl:hover:text-cream-50',
                  'xl:focus-visible:ring-clay-300 xl:focus-visible:ring-offset-ink-950',
                  current && 'xl:bg-cream-50/10 xl:text-cream-50',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'min-w-[1.4em] text-center font-serif text-lg font-semibold text-clay-500 dark:text-clay-300',
                    current && 'text-clay-300',
                    'xl:text-ink-200',
                    current && 'xl:text-clay-300',
                  )}
                >
                  {item.numeral}
                </span>
                <span className="xl:hidden">{item.label}</span>
                <span className="hidden xl:inline">{item.short}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
