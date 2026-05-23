/**
 * /blog — index of every published article.
 *
 * Server component. Reads posts off disk via `getAllBlogPosts()` (parsed
 * once at build time when the page is statically rendered), renders a
 * card grid, and emits two pieces of structured data:
 *
 *   1. BreadcrumbList — Home → Blog
 *   2. CollectionPage @type "Blog" — describes the index itself
 *
 * Both JSON-LD scripts carry the per-request CSP nonce from the
 * middleware. Server-only — no client islands here.
 */

import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { getAllBlogPosts, type BlogPost } from '@/lib/blog/posts'
import { tMany, tSync } from '@/lib/i18n/t'
import type { Locale } from '@/lib/i18n/dictionary'

const SITE_URL = 'https://theenglishhub.app'
const PAGE_URL = `${SITE_URL}/blog`
const PAGE_TITLE = 'Blog — The English Hub'
const PAGE_DESCRIPTION =
  'GCSE and IGCSE English revision tips, exam-technique guides, and study advice. Calibrated to mark schemes.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `/api/og?title=${encodeURIComponent('The English Hub Blog')}&subtitle=${encodeURIComponent('Revision guides and exam technique')}`,
        width: 1200,
        height: 630,
        alt: 'The English Hub Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      `/api/og?title=${encodeURIComponent('The English Hub Blog')}&subtitle=${encodeURIComponent('Revision guides and exam technique')}`,
    ],
  },
}

/**
 * Format an ISO `YYYY-MM-DD` as a long human-readable date in en-GB
 * (e.g. `4 May 2026`). Done with `Intl.DateTimeFormat` so the output is
 * locale-stable across Node versions.
 */
function formatDisplayDate(iso: string): string {
  // Treat the date as UTC midnight to avoid the off-by-one timezone
  // shift that bites us when the build host is west of GMT.
  const d = new Date(`${iso}T00:00:00Z`)
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

export default async function BlogIndexPage() {
  const h = await headers()
  const nonce = h.get('x-nonce') ?? undefined
  const locale: Locale = h.get('x-lang') === 'ar' ? 'ar' : 'en'
  const posts = getAllBlogPosts()

  const [tEyebrow, tHeading, tLead, tEmptyTitle, tEmptyLead, tBrowseResources, tInMeantime] =
    await tMany([
      'blog.index.eyebrow',
      'blog.index.heading',
      'blog.index.lead',
      'blog.empty.title',
      'blog.empty.body_lead',
      'blog.empty.browse_resources',
      'blog.empty.in_meantime',
    ])

  // CollectionPage / Blog schema for the index itself. Each post is
  // surfaced as a `BlogPosting` so search engines can pick up the list
  // even before they crawl the individual post URLs.
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The English Hub Blog',
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'The English Hub',
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author },
    })),
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: PAGE_URL },
        ]}
        nonce={nonce}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <header className="mb-10">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
          {tEyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {tHeading}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{tLead}</p>
      </header>

      {posts.length === 0 ? (
        <EmptyState
          title={tEmptyTitle}
          bodyLead={tEmptyLead}
          browseLabel={tBrowseResources}
          inMeantime={tInMeantime}
        />
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} locale={locale} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

function EmptyState({
  title,
  bodyLead,
  browseLabel,
  inMeantime,
}: {
  title: string
  bodyLead: string
  browseLabel: string
  inMeantime: string
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/20 p-8 text-center">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {bodyLead}{' '}
        <Link href="/resources" className="underline underline-offset-4 hover:text-foreground">
          {browseLabel}
        </Link>{' '}
        {inMeantime}
      </p>
    </div>
  )
}

function PostCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  // `blog.reading_time` contains an `{n}` placeholder so AR/EN can position
  // the number naturally (e.g. "5 min read" vs "٥ دقائق قراءة").
  const readingTimeLabel = tSync('blog.reading_time', locale).replace(
    '{n}',
    String(post.readingTime),
  )
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
    >
      <Card className="h-full overflow-hidden transition-all group-hover:border-primary/40">
        {post.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt={post.title}
            width={1200}
            height={630}
            className="aspect-[1200/630] w-full object-cover"
            loading="lazy"
          />
        ) : null}
        <CardContent className="flex h-full flex-col gap-3 py-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{formatDisplayDate(post.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{readingTimeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{post.educationalLevel}</span>
          </div>
          <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
