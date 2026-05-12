import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3 } from '@/lib/ks3/curriculum'

export const metadata: Metadata = {
  title: {
    default: 'KS3 English — Years 7, 8 & 9',
    template: '%s · KS3 English · The English Hub',
  },
  description:
    'The full KS3 English curriculum (Years 7–9) — yearly expectations, termly plans, weekly lesson frameworks, marking rubrics, skill progression, and end-of-KS3 standards.',
}

/**
 * Shared shell for the /ks3 route tree.
 *
 * Renders a left-hand year + term nav on lg+ screens and a slim
 * top navigation on smaller viewports. Designed to match the
 * established /revision and /igcse shell rhythms (prose-eh
 * typography, sticky header offset, generous spacing).
 *
 * The KS3 routes do not require an exam-board cookie — KS3 sits
 * before students pick their GCSE/IGCSE board, so middleware
 * allowlists `/ks3` for guests too.
 */
export default function KS3Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
        {/* Sidebar nav */}
        <aside className="hidden lg:block">
          <nav aria-label="KS3 navigation" className="sticky top-28 space-y-6 text-sm">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                KS3 English
              </p>
              <Link href="/ks3" className="block py-1 hover:text-foreground">
                Overview
              </Link>
              <Link href="/ks3/rubrics" className="block py-1 hover:text-foreground">
                Marking rubrics
              </Link>
              <Link href="/ks3/skills" className="block py-1 hover:text-foreground">
                Skill codes
              </Link>
              <Link href="/ks3/end-of-ks3" className="block py-1 hover:text-foreground">
                End of KS3 standard
              </Link>
            </div>
            {KS3.years.map((year) => (
              <div key={year.number}>
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                  {year.name.en}
                </p>
                <Link
                  href={`/ks3/year-${year.number}`}
                  className="block py-1 font-medium hover:text-foreground"
                >
                  Year {year.number} overview
                </Link>
                {year.terms.map((term) => (
                  <Link
                    key={term.number}
                    href={`/ks3/year-${year.number}/term-${term.number}`}
                    className="block py-1 ps-3 text-muted-foreground hover:text-foreground"
                  >
                    Term {term.number}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Page content — uses the same prose-eh variant we shipped for blogs */}
        <article className="prose prose-eh prose-lg max-w-none dark:prose-invert">
          {children}
        </article>
      </div>
    </main>
  )
}
