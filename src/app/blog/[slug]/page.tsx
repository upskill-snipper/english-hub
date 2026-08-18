/**
 * /blog/[slug] - individual blog article.
 *
 * Server component. Compiles the MDX body via `compileMDX` from
 * `next-mdx-remote/rsc` and renders the article shell with breadcrumbs,
 * prose styles and two pieces of structured data:
 *
 *   1. BreadcrumbList - Home → Blog → {Title}
 *   2. Article - headline, description, dates, author, publisher
 *
 * RENDERING MODEL (honest version, Aug 2026): this route is DYNAMICALLY
 * rendered by design. The site's i18n works by cookie/URL → middleware →
 * `x-lang` request header, and both this page and the root layout read
 * `headers()`, so posts compile per request. Two consequences, both
 * handled explicitly:
 *
 *   - Unknown slugs cannot rely on `dynamicParams = false` (that gate is
 *     only meaningful for statically-rendered routes; here it stamped a
 *     200 on the not-found shell). Instead we check the slug against the
 *     catalogue and call `notFound()`, which returns a real HTTP 404 on
 *     a dynamic render.
 *   - A post that fails MDX compilation would throw per-request and
 *     collapse the page to an empty shell WITHOUT failing the build (19
 *     posts shipped broken this way until Aug 2026 - HTML `<!-- -->`
 *     comments are invalid MDX). `scripts/check-mdx-compile.mjs` now runs
 *     in `prebuild` and fails the build on any uncompilable MDX file.
 *
 * Arabic: `/ar/blog/<slug>` is rewritten by middleware to this route with
 * `x-lang: ar`; `getBlogPost(slug, 'ar')` then serves the `<slug>.ar.mdx`
 * sibling when it exists (EN fallback otherwise). Metadata is locale-aware
 * and posts with an AR variant emit hreflang alternates + a visible
 * cross-language link.
 */

import type { Metadata } from 'next'
import type { ComponentPropsWithoutRef } from 'react'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import { AIContentLabel } from '@/components/ai/ai-content-label'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  getAllBlogPosts,
  getBlogPost,
  getBlogSlugs,
  hasArabicVariant,
  type BlogPost,
} from '@/lib/blog/posts'
import { tSync } from '@/lib/i18n/t'
import type { Locale } from '@/lib/i18n/dictionary'

const SITE_URL = 'https://theenglishhub.app'
const BLOG_URL = `${SITE_URL}/blog`

type Params = { slug: string }

/** Resolve the request locale the middleware stamped (see file header). */
async function resolveLocale(): Promise<{ locale: Locale; viaArUrl: boolean }> {
  const h = await headers()
  const lang = h.get('x-lang')
  return {
    locale: lang === 'ar' ? 'ar' : 'en',
    // 'url' means the visitor is on the canonical /ar/... surface (as
    // opposed to the eh-lang cookie toggling an /blog/... URL).
    viaArUrl: lang === 'ar' && h.get('x-lang-source') === 'url',
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const { locale, viaArUrl } = await resolveLocale()
  const post = getBlogPost(slug, locale)

  if (!post) {
    // Unknown slugs on this route CANNOT return a real HTTP 404: the route
    // is dynamically rendered (cookie i18n reads headers()) and Next 15
    // streams the shell - and, since 15.2, the metadata too - with a
    // committed 200 before the page body (or even this function) can
    // change the status. Verified against both the built server and dev
    // (notFound() here or in the body still yields 200 + not-found UI).
    // So we ship the next-best thing Google fully respects: an explicit
    // noindex on the streamed metadata, plus the body-level notFound() UI.
    // The June 2026 de-index audit confirmed GSC treats these as benign
    // soft-404s. A true 404 would need a blog-slug manifest consulted in
    // middleware - revisit post-launch if GSC ever complains.
    return {
      title: 'Article not found',
      description: 'The article you are looking for could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const enUrl = `${BLOG_URL}/${post.slug}`
  const arUrl = `${SITE_URL}/ar/blog/${post.slug}`
  const hasAr = hasArabicVariant(post.slug)
  // Canonical: the /ar/... surface is its own canonical URL when the post
  // really has an Arabic variant; everything else canonicalises to the EN
  // URL (cookie-toggled Arabic on /blog/... is invisible to cookieless
  // crawlers, so the EN canonical is the truthful one there).
  const url = viaArUrl && hasAr ? arUrl : enUrl
  // Document <title> must be brandless: the root layout's title template
  // (`%s - The English Hub`) appends the brand. Baking it in here too produced
  // a DOUBLED suffix ("Post - The English Hub - The English Hub") in SERPs on
  // every blog post. OG/Twitter titles are NOT templated, so they keep the
  // brand explicitly for social cards.
  const brandedTitle = `${post.title} - The English Hub`
  const ogImage = buildOgImage(post)

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      ...(hasAr ? { languages: { 'en-GB': enUrl, ar: arUrl, 'x-default': enUrl } } : {}),
    },
    openGraph: {
      title: brandedTitle,
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
      title: brandedTitle,
      description: post.description,
      images: [ogImage],
    },
  }
}

/**
 * Resolve the OG image for a given post.
 *
 * If the frontmatter `cover` is already an `/api/og?…` URL we use it
 * verbatim - that's the project convention. Otherwise we synthesise a
 * fresh /api/og URL from the title and category so the post still has a
 * branded social card.
 *
 * 2026-06-08 — SEO audit fix. Previously this returned RELATIVE URLs
 * like `/api/og?…`. Some social scrapers (LinkedIn most notably, plus
 * a handful of email clients) silently fail on relative OG image URLs
 * and render no preview card. Every URL is now absolute, prefixed with
 * `https://theenglishhub.app`.
 */
function buildOgImage(post: BlogPost): string {
  const SITE = 'https://theenglishhub.app'
  if (post.cover && post.cover.startsWith('http')) return post.cover
  if (post.cover && post.cover.startsWith('/api/og')) return `${SITE}${post.cover}`
  if (post.cover && post.cover.startsWith('/')) return `${SITE}${post.cover}`
  return `${SITE}/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.category || 'The English Hub Blog')}`
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

/**
 * Pick up to `limit` related posts that share a tag or the category with the
 * current post (excluding the post itself). Posts are scored by the number of
 * shared tags (a shared category counts as one point), then newest-first as a
 * tie-breaker, so the most topically-relevant articles surface first.
 *
 * This closes the internal-linking "island": individual articles previously
 * had no outbound links to sibling posts, so crawlers (and readers) hit a
 * dead end at the bottom of every article. Server-rendered, so the links are
 * in the static HTML and discoverable without JS.
 */
function getRelatedPosts(current: BlogPost, limit = 3): BlogPost[] {
  const currentTags = new Set(current.tags.map((t) => t.toLowerCase()))
  return getAllBlogPosts()
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      let score = 0
      for (const tag of p.tags) if (currentTags.has(tag.toLowerCase())) score++
      if (current.category && p.category === current.category) score++
      return { post: p, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => (b.score !== a.score ? b.score - a.score : a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((entry) => entry.post)
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  // Hard 404 for slugs outside the catalogue. On this dynamically-rendered
  // route `notFound()` returns a real HTTP 404 status (unlike the old
  // `dynamicParams = false` gate, which only works for static renders and
  // stamped 200 on the not-found shell here).
  if (!getBlogSlugs().includes(slug)) notFound()

  const { locale } = await resolveLocale()
  const post = getBlogPost(slug, locale)
  if (!post) notFound()

  const hasAr = hasArabicVariant(post.slug)
  const url = `${BLOG_URL}/${post.slug}`
  const ogImage = buildOgImage(post)

  // `compileMDX` runs server-side and returns a React element ready to
  // render. Tailwind typography handles the default elements; the only
  // override is demoting a leading `# Heading` in the MDX body from `<h1>`
  // to `<h2>`. The article title at L194 below is the page's single,
  // canonical `<h1>` - without this demotion every post shipped two `<h1>`s
  // (flagged by the live SEO audit as "Multiple H1s - 2 H1s"). Mapping the
  // content `h1 → h2` keeps the document outline well-formed (title is h1,
  // in-body section headings start at h2). Sibling content authors can ship
  // richer experiences by extending this `components` map (e.g. callouts).
  const { content } = await compileMDX<Record<string, unknown>>({
    source: post.content,
    options: { parseFrontmatter: false },
    components: {
      h1: (props: ComponentPropsWithoutRef<'h2'>) => <h2 {...props} />,
    },
  })

  // Localised chrome - synchronous lookups using the locale we already
  // resolved above (we avoid `tMany()` because re-reading `headers()`
  // would opt the route into dynamic rendering and defeat the static
  // `dynamicParams = false` 404 gate documented above).
  const tBlogLabel = tSync('blog.breadcrumb_label', locale)
  const readingTimeLabel = tSync('blog.reading_time', locale).replace(
    '{n}',
    String(post.readingTime),
  )

  // Related articles - up to 3 posts sharing a tag/category with this one.
  // Resolved at build time (static render) so the outbound links ship in HTML.
  const relatedPosts = getRelatedPosts(post, 3)

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
              {tBlogLabel}
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
            <span>{readingTimeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{post.educationalLevel}</span>
            <span aria-hidden="true">·</span>
            {/* PDPPL Remediation 6 - AI involvement disclosure at the
                point of consumption. Blog posts in this site are drafted
                by the agent pipeline and human-reviewed before publish. */}
            <AIContentLabel variant="inline" />
            {hasAr ? (
              <>
                <span aria-hidden="true">·</span>
                {locale === 'ar' ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underline underline-offset-4 hover:text-foreground"
                    lang="en"
                  >
                    Read in English
                  </Link>
                ) : (
                  <Link
                    href={`/ar/blog/${post.slug}`}
                    className="underline underline-offset-4 hover:text-foreground"
                    lang="ar"
                    dir="rtl"
                  >
                    اقرأ بالعربية
                  </Link>
                )}
              </>
            ) : null}
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

      {relatedPosts.length > 0 ? (
        <section
          aria-labelledby="related-articles-heading"
          className="mt-16 border-t border-border/60 pt-8"
        >
          <h2
            id="related-articles-heading"
            className="font-heading text-lg font-semibold tracking-tight text-foreground"
          >
            {tSync('blog.related.heading', locale)}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="group block h-full rounded-xl border border-border/60 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="block font-medium text-foreground transition-colors group-hover:text-primary">
                    {related.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground leading-relaxed">
                    {related.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <aside className="mt-12 flex justify-center"></aside>
    </main>
  )
}
