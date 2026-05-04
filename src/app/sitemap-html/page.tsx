import type { Metadata } from 'next'
import Link from 'next/link'
import sitemap from '@/app/sitemap'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Sitemap — The English Hub',
  description:
    'Every page on The English Hub, organised by section. Use this to find anything: revision hubs, set texts, exam boards, resources.',
  alternates: { canonical: 'https://theenglishhub.app/sitemap-html' },
}

/* ─── Helpers ────────────────────────────────────────────────── */

const BASE = 'https://theenglishhub.app'

/** Convert a sitemap URL string back into a relative path (e.g. "/about"). */
function toPath(url: string | URL): string {
  const s = typeof url === 'string' ? url : url.toString()
  if (s === BASE || s === `${BASE}/`) return '/'
  return s.startsWith(BASE) ? s.slice(BASE.length) : s
}

/** Title-case a slug fragment ("songs-of-ourselves-v1" -> "Songs Of Ourselves V1"). */
function humanise(segment: string): string {
  if (!segment) return ''
  return segment
    .split('-')
    .map((word) => (word.length === 0 ? word : word[0]!.toUpperCase() + word.slice(1)))
    .join(' ')
}

/** Build a readable label from a path. */
function labelForPath(path: string): string {
  if (path === '/') return 'Home'
  const segments = path.split('/').filter(Boolean)
  return segments.map(humanise).join(' / ')
}

/* ─── Section grouping ───────────────────────────────────────── */

interface SectionDef {
  heading: string
  /** Test whether a path belongs in this section. */
  match: (path: string) => boolean
}

/**
 * Sections are tested in order; each path lands in the first matching section.
 * Anything unmatched falls into the "Other pages" bucket so nothing is hidden.
 */
const SECTIONS: SectionDef[] = [
  {
    heading: 'Home and key pages',
    match: (p) =>
      p === '/' ||
      p === '/board-select' ||
      p === '/exam-boards' ||
      p === '/pricing' ||
      p === '/about' ||
      p === '/contact' ||
      p === '/courses' ||
      p === '/practice' ||
      p === '/games' ||
      p === '/mock-exams' ||
      p === '/sitemap-html',
  },
  {
    heading: 'For audiences',
    match: (p) =>
      p === '/for-students' ||
      p.startsWith('/for-teachers') ||
      p.startsWith('/for-schools') ||
      p === '/for-parents' ||
      p === '/affiliates' ||
      p === '/creators',
  },
  {
    heading: 'Revision hubs',
    match: (p) =>
      p === '/revision' ||
      (p.startsWith('/revision/') &&
        !p.startsWith('/revision/texts/') &&
        !p.startsWith('/revision/poetry/')),
  },
  {
    heading: 'Set texts',
    match: (p) => p.startsWith('/revision/texts'),
  },
  {
    heading: 'Anthology poems',
    match: (p) => p.startsWith('/revision/poetry/'),
  },
  {
    heading: 'IGCSE Edexcel',
    match: (p) => p === '/igcse/edexcel' || p.startsWith('/igcse/edexcel/'),
  },
  {
    heading: 'IGCSE Edexcel Language',
    match: (p) => p === '/igcse/edexcel-lang' || p.startsWith('/igcse/edexcel-lang/'),
  },
  {
    heading: 'IGCSE Cambridge',
    match: (p) => p === '/igcse/cambridge' || p.startsWith('/igcse/cambridge/'),
  },
  {
    heading: 'IGCSE',
    match: (p) => p === '/igcse' || p.startsWith('/igcse/'),
  },
  {
    heading: 'Courses',
    match: (p) => p.startsWith('/courses/'),
  },
  {
    heading: 'Resources',
    match: (p) => p === '/resources' || p.startsWith('/resources/'),
  },
  {
    heading: 'Analysis and assessment',
    match: (p) => p.startsWith('/analysis/') || p.startsWith('/assessment/'),
  },
  {
    heading: 'Toolkit',
    match: (p) => p === '/toolkit' || p.startsWith('/toolkit/'),
  },
  {
    heading: 'Help and FAQs',
    match: (p) =>
      p === '/faqs' ||
      p === '/help' ||
      p.startsWith('/help/') ||
      p === '/safeguarding' ||
      p.startsWith('/safeguarding/'),
  },
  {
    heading: 'Legal',
    match: (p) =>
      p === '/privacy-policy' ||
      p === '/terms' ||
      p === '/cookie-policy' ||
      p === '/accessibility' ||
      p === '/refund-policy' ||
      p === '/data-processing' ||
      p.startsWith('/legal/'),
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function SitemapHtmlPage() {
  const entries = sitemap()

  // Build unique sorted paths.
  const pathSet = new Set<string>()
  for (const entry of entries) {
    pathSet.add(toPath(entry.url))
  }
  const paths = Array.from(pathSet).sort()

  // Allocate paths to sections.
  const grouped = new Map<string, string[]>()
  const headings: string[] = []
  for (const section of SECTIONS) {
    grouped.set(section.heading, [])
    headings.push(section.heading)
  }
  const otherHeading = 'Other pages'
  grouped.set(otherHeading, [])

  for (const path of paths) {
    const section = SECTIONS.find((s) => s.match(path))
    const heading = section ? section.heading : otherHeading
    grouped.get(heading)!.push(path)
  }

  // Only include "Other pages" if it actually has entries.
  const renderedHeadings: string[] = headings.filter((h) => (grouped.get(h)?.length ?? 0) > 0)
  if ((grouped.get(otherHeading)?.length ?? 0) > 0) {
    renderedHeadings.push(otherHeading)
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: BASE },
          { name: 'Sitemap', url: `${BASE}/sitemap-html` },
        ]}
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Sitemap</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Every page on The English Hub, organised by section. Use this to find anything: revision
          hubs, set texts, exam boards, resources.
        </p>

        <div className="mt-12 space-y-12">
          {renderedHeadings.map((heading) => {
            const pathsInSection = grouped.get(heading) ?? []
            if (pathsInSection.length === 0) return null
            return (
              <section key={heading}>
                <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
                <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                  {pathsInSection.map((path) => (
                    <li key={path}>
                      <Link
                        href={path}
                        className="text-sm text-primary hover:underline focus:underline focus:outline-none"
                      >
                        {labelForPath(path)}
                      </Link>
                      <span className="ml-2 text-xs text-muted-foreground">{path}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </main>
    </>
  )
}
