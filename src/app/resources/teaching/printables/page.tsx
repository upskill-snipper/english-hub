import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { getAllPrintables, type Printable } from '@/lib/printables/list'

const SITE_URL = 'https://theenglishhub.app'
const INDEX_PATH = '/resources/teaching/printables'
const INDEX_URL = `${SITE_URL}${INDEX_PATH}`

const PAGE_TITLE = 'GCSE & IGCSE English printables — The English Hub'
const PAGE_DESCRIPTION =
  'Free GCSE and IGCSE English printables for teachers and students — quote banks, essay plans, comparison grids, mark-scheme decoders, and more. Drop your email to be notified when each one lands.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: INDEX_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: INDEX_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: SITE_URL },
  { name: 'Resources', url: `${SITE_URL}/resources` },
  { name: 'Teaching', url: `${SITE_URL}/resources/teaching` },
  { name: 'Printables', url: INDEX_URL },
]

function PrintableCard({ printable }: { printable: Printable }) {
  const href = `${INDEX_PATH}/${printable.slug}`
  const comingSoon = printable.status === 'coming-soon'

  return (
    <Link
      href={href}
      className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
      aria-label={`${printable.title} — ${comingSoon ? 'coming soon, get notified' : 'open printable'}`}
    >
      <Card className="h-full transition-colors duration-200 group-hover:border-primary/40">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="secondary">{printable.educationalLevel}</Badge>
            {printable.examBoard ? <Badge variant="outline">{printable.examBoard}</Badge> : null}
            {printable.text ? <Badge variant="outline">{printable.text}</Badge> : null}
          </div>
          <CardTitle className="text-lg leading-snug">{printable.title}</CardTitle>
          <CardDescription className="leading-relaxed">{printable.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-3 mt-auto">
          {comingSoon ? (
            <Badge variant="default" className="font-medium">
              Coming soon — get notified
            </Badge>
          ) : (
            <Badge variant="default" className="font-medium">
              Available now
            </Badge>
          )}
          <span
            aria-hidden="true"
            className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
          >
            View details
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

export default async function PrintablesIndexPage() {
  const printables = await getAllPrintables()

  return (
    <>
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <p className="text-sm font-medium text-muted-foreground mb-2">Free teaching resources</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Free printables for GCSE &amp; IGCSE English
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Classroom-ready PDFs covering set texts, exam technique, and writing skills. Each
            printable maps to a specific exam board where it applies, and is free for teachers and
            students to download. New sheets are released regularly — drop your email on any page
            below to be notified when it goes live.
          </p>
        </header>

        {printables.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/60 bg-muted/30 p-8 text-center">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Printables landing soon
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-prose mx-auto">
              We&apos;re finalising the first batch of printables. Check back shortly, or browse our
              other free resources in the meantime.
            </p>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {printables.map((printable) => (
              <li key={printable.slug} className="flex">
                <PrintableCard printable={printable} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}
