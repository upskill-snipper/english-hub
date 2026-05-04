import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, Compass, HelpCircle, Home, LibraryBig, Tag } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

/* ────────────────────────────────────────────────────────────────────────────
 * Metadata
 * 404 pages should never be indexed. Title prefixed so it's obvious in
 * tab bars and analytics that the user landed on the not-found route.
 * ──────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: '404 — Page not found — The English Hub',
  robots: { index: false, follow: false },
}

/* ────────────────────────────────────────────────────────────────────────────
 * Popular pages
 * Six entry points the founder considers the highest-value places for a
 * stranded visitor to land. Order is intentional: home first, then the
 * commercial and product hubs, then support material.
 * ──────────────────────────────────────────────────────────────────────── */

type PopularPage = {
  readonly title: string
  readonly description: string
  readonly href: string
  readonly Icon: React.ComponentType<{ className?: string }>
}

const POPULAR_PAGES: readonly PopularPage[] = [
  {
    title: 'Home',
    description: 'Pick your exam board and start revising.',
    href: '/',
    Icon: Home,
  },
  {
    title: 'Pricing',
    description: 'Plans for students, parents, and schools.',
    href: '/pricing',
    Icon: Tag,
  },
  {
    title: 'Pick your exam board',
    description: 'Choose your level and specification.',
    href: '/board-select',
    Icon: Compass,
  },
  {
    title: 'Your study hub',
    description: 'Set texts, mock papers, and progress.',
    href: '/revision',
    Icon: BookOpenCheck,
  },
  {
    title: 'Resources',
    description: 'Notes, model answers, and practice papers.',
    href: '/resources',
    Icon: LibraryBig,
  },
  {
    title: 'FAQs',
    description: 'Answers to the questions students ask most.',
    href: '/faqs',
    Icon: HelpCircle,
  },
] as const

/* ────────────────────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────────────────── */

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink-950">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-20">
        {/* Headline */}
        <header className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-clay-300 mb-3">
            404 — page not found
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight">
            Page not found
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
            That URL doesn&apos;t exist on The English Hub. Try one of the popular pages below, or
            get in touch and we&apos;ll point you in the right direction.
          </p>
        </header>

        {/* Popular pages */}
        <section aria-labelledby="popular-heading">
          <h2 id="popular-heading" className="sr-only">
            Popular pages
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {POPULAR_PAGES.map((page) => (
              <li key={page.href}>
                <PopularPageCard page={page} />
              </li>
            ))}
          </ul>
        </section>

        {/* Need help */}
        <p className="mt-12 text-center text-xs text-cream-200/55">
          Need help?{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-clay-300">
            Get in touch
          </Link>{' '}
          and we&apos;ll point you in the right direction.
        </p>
      </div>
    </main>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
 * Card
 * Mirrors the BoardCard pattern from /board-select — hover lifts the
 * border, focus ring uses the clay accent. Uses the design-system Card
 * shell to keep the rounded-2xl + border tokens consistent.
 * ──────────────────────────────────────────────────────────────────────── */

function PopularPageCard({ page }: { page: PopularPage }) {
  const { Icon } = page
  return (
    <Link
      href={page.href}
      className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 focus-visible:ring-clay-300"
    >
      <Card className="h-full bg-cream-50/[0.02] border-cream-200/10 transition-all group-hover:bg-cream-50/[0.04] group-hover:border-clay-300/40">
        <CardContent className="flex h-full flex-col gap-3">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-300/15 text-clay-300 ring-1 ring-clay-300/30"
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream-50 leading-tight">
              {page.title}
            </h3>
          </div>
          <p className="text-sm text-cream-100/70 leading-relaxed">{page.description}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-clay-300 transition-colors group-hover:text-clay-200">
            Visit page
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
