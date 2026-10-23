import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { resolveCopy } from './copy'

export type GameLink = {
  href: string
  /** Dictionary key for the chip's label. */
  labelKey: string
  /** The last chip, to the whole hub, carries an arrow. */
  all?: boolean
}

/**
 * The games, one step from the hero and before the story. The founder's ask of
 * 10 October 2026 stands: games are a headline part of the product, so the
 * homepage says so straight after the first screen rather than three clicks
 * deep. The six links are declared in src/app/page.tsx, where
 * games-are-one-step-from-anywhere.test.ts reads them.
 *
 * The eyebrow is clay-700 on the muted band: the brand clay measures below
 * 4.5:1 there, and this is 12px text.
 */
export async function GamesBand({ links }: { links: GameLink[] }) {
  const c = await resolveCopy({
    eyebrow: 'home.story.games.eyebrow',
    heading: 'home.story.games.heading',
    body: 'home.story.games.body',
  })
  const labels = await resolveCopy(
    Object.fromEntries(links.map((l) => [l.href, l.labelKey])) as Record<string, string>,
  )

  return (
    <section aria-labelledby="games-h" className="bg-muted py-9">
      <div className="mx-auto grid w-full max-w-[1400px] gap-[18px] px-4 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-10">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-clay-700 dark:text-clay-300">
            {c.eyebrow}
          </p>
          <h2
            id="games-h"
            className="mt-2.5 font-serif text-[26px] font-medium leading-tight tracking-tight text-foreground"
          >
            {c.heading}
          </h2>
          <p className="mt-2.5 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            {c.body}
          </p>
        </div>
        <ul aria-label={c.heading} className="flex flex-wrap gap-2.5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-ink-500 bg-card px-[18px] text-base font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted motion-reduce:transform-none dark:border-ink-400"
              >
                {labels[l.href]}
                {l.all ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-clay-700 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5 motion-reduce:transition-none dark:text-clay-300"
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
