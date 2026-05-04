import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import EmailCaptureCard from '@/components/marketing/EmailCaptureCard'
import { getPrintable, getPrintableSlugs, type Printable } from '@/lib/printables/list'

const SITE_URL = 'https://theenglishhub.app'
const INDEX_PATH = '/resources/teaching/printables'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getPrintableSlugs()
  return slugs.map((slug) => ({ slug }))
}

function buildCanonical(slug: string): string {
  return `${SITE_URL}${INDEX_PATH}/${slug}`
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const printable = await getPrintable(slug)

  if (!printable) {
    return {
      title: 'Printable not found — The English Hub',
      description:
        'The printable you are looking for is not available. Browse our full library of free GCSE and IGCSE English printables.',
      robots: { index: false, follow: false },
    }
  }

  const canonical = buildCanonical(printable.slug)
  const title = `${printable.title} — Free ${printable.educationalLevel} English printable`
  const description = printable.description
  const ogImage = `${SITE_URL}/api/og?title=${encodeURIComponent(printable.title)}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: [{ url: ogImage, alt: printable.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

function buildBreadcrumbs(printable: Printable) {
  return [
    { name: 'Home', url: SITE_URL },
    { name: 'Resources', url: `${SITE_URL}/resources` },
    { name: 'Teaching', url: `${SITE_URL}/resources/teaching` },
    { name: 'Printables', url: `${SITE_URL}${INDEX_PATH}` },
    { name: printable.title, url: buildCanonical(printable.slug) },
  ]
}

function StatusBadge({ printable }: { printable: Printable }) {
  if (printable.status === 'available' && printable.pdfUrl) {
    return <Badge variant="default">Available now</Badge>
  }
  return <Badge variant="default">Coming soon — get notified</Badge>
}

export default async function PrintablePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const printable = await getPrintable(slug)

  if (!printable) {
    notFound()
  }

  const { content } = await compileMDX<Record<string, unknown>>({
    source: printable.content,
    options: { parseFrontmatter: false },
  })

  const canonical = buildCanonical(printable.slug)
  const breadcrumbs = buildBreadcrumbs(printable)

  const captureDescription =
    printable.status === 'available' && printable.pdfUrl
      ? 'Drop your email and we’ll send the printable straight to your inbox.'
      : `We’ll email you the moment ${printable.title} is ready to download.`

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <LearningResourceJsonLd
        name={printable.title}
        description={printable.description}
        educationalLevel={printable.educationalLevel}
        learningResourceType="Worksheet"
        about={printable.text}
        url={canonical}
        audienceRole="teacher"
        isAccessibleForFree={true}
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/resources" className="hover:text-foreground">
                Resources
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/resources/teaching" className="hover:text-foreground">
                Teaching
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={INDEX_PATH} className="hover:text-foreground">
                Printables
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground" aria-current="page">
              {printable.title}
            </li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="secondary">{printable.educationalLevel}</Badge>
            {printable.examBoard ? <Badge variant="outline">{printable.examBoard}</Badge> : null}
            {printable.text ? <Badge variant="outline">{printable.text}</Badge> : null}
            <StatusBadge printable={printable} />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {printable.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {printable.description}
          </p>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none">{content}</article>

        <div className="mt-12 border-t border-border/60 pt-10 flex justify-center">
          <EmailCaptureCard
            magnetTitle={printable.title}
            magnetDescription={captureDescription}
            magnetSlug={printable.slug}
          />
        </div>
      </main>
    </>
  )
}
