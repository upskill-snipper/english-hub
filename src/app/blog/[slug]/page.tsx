/**
 * /blog/[slug] — individual blog article.
 *
 * Server component. Looks the post up by slug at build time
 * (`generateStaticParams` enumerates every MDX file under `content/blog/`
 * so each article ships as a static page), compiles the MDX body via
 * `compileMDX` from `next-mdx-remote/rsc`, and renders the article shell
 * with breadcrumbs, prose styles, an email-capture lead magnet at the
 * bottom and two pieces of structured data:
 *
 *   1. BreadcrumbList — Home → Blog → {Title}
 *   2. Article — headline, description, dates, author, publisher
 *
 * The route is kept fully statically rendered (no `headers()`, no `cookies()`)
 * so that `dynamicParams = false` actually short-circuits unknown slugs to
 * a real 404 at the framework level. Calling `headers()` from this page
 * silently opts the entire route into dynamic rendering, which makes the
 * dynamicParams gate a no-op and the framework stamps 200 on the
 * not-found render instead.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { getBlogPost, getBlogSlugs, type BlogPost } from '@/lib/blog/posts'

const SITE_URL = 'https://theenglishhub.app'
const BLOG_URL = `${SITE_URL}/blog`

type Params = { slug: string }

/**
 * Static slugs only. Without this, unknown slugs at runtime render
 * `not-found.tsx` with HTTP 200, which lets Google index empty "Article
 * not found" pages and wastes crawl budget. Setting `dynamicParams = false`
 * makes Next.js return a hard 404 for any slug not in generateStaticParams.
 */
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Article not found — The English Hub',
      description: 'The article you are looking for could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const url = `${BLOG_URL}/${post.slug}`
  const title = `${post.title} — The English Hub`
  const ogImage = buildOgImage(post)

  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.description,
      images: [ogImage],
    },
  }
}

/**
 * Resolve the OG image for a given post.
 *
 * If the frontmatter `cover` is already an `/api/og?…` URL we use it
 * verbatim — that's the project convention. Otherwise we synthesise a
 * fresh /api/og URL from the title and category so the post still has a
 * branded social card.
 */
function buildOgImage(post: BlogPost): string {
  if (post.cover && post.cover.startsWith('/api/og')) return post.cover
  if (post.cover && post.cover.startsWith('http')) return post.cover
  if (post.cover && post.cover.startsWith('/')) return post.cover
  return `/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.category || 'The English Hub Blog')}`
}

function formatDisplayDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  // NOTE: We deliberately do NOT call `headers()` here. Reading per-request
  // headers opts the route into fully-dynamic rendering, which neutralises
  // `dynamicParams = false` (unknown slugs would still get rendered and the
  // framework would stamp a 200 on the not-found page instead of a real
  // 404). The CSP no longer carries a `'nonce-…'` source (see middleware
  // notes from 02 May 2026), so passing the nonce to JSON-LD scripts is
  // ceremonial — dropping it lets this whole route stay statically
  // pre-rendered and forces the framework to hard-404 unknown slugs.
  const url = `${BLOG_URL}/${post.slug}`
  const ogImage = buildOgImage(post)

  // `compileMDX` runs server-side and returns a React element ready to
  // render. We do not pass any custom component overrides yet — Tailwind
  // typography handles the default elements. Sibling content authors can
  // ship richer experiences in a follow-up by extending the `components`
  // map here (e.g. callouts, embeds).
  const { content } = await compileMDX<Record<string, unknown>>({
    source: post.content,
    options: { parseFrontmatter: false },
  })

  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-3xl lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: BLOG_URL },
          { name: post.title, url },
        ]}
      />
      <ArticleJsonLd
        headline={post.title}
        description={post.description}
        image={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`}
        datePublished={post.date}
        authorName={post.author}
        url={url}
      />

      <article>
        <header className="mb-8">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
            <Link href="/blog" className="underline underline-offset-4 hover:text-foreground">
              Blog
            </Link>
            {post.category ? (
              <>
                <span aria-hidden="true"> · </span>
                <span>{post.category}</span>
              </>
            ) : null}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDisplayDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
            <span aria-hidden="true">·</span>
            <span>{post.educationalLevel}</span>
          </div>
        </header>

        <div className="prose prose-eh prose-lg max-w-none dark:prose-invert">{content}</div>

        {post.tags.length > 0 ? (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border/60 pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </article>

      <aside className="mt-12 flex justify-center"></aside>
    </main>
  )
}
