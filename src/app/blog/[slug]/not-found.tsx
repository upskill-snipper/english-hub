/**
 * /blog/[slug]/not-found — graceful 404 when a post slug is missing.
 *
 * Triggered by `notFound()` inside the article page when a slug arrives
 * that doesn't exist in `content/blog/`. We surface a short message and
 * a link back to the index so visitors aren't dead-ended.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Article not found — The English Hub',
  robots: { index: false, follow: false },
}

export default async function BlogArticleNotFound() {
  const [eyebrow, title, body, back, browseResources] = await tMany([
    'not_found.blog.eyebrow',
    'not_found.blog.title',
    'not_found.blog.body',
    'not_found.blog.back',
    'not_found.blog.browse_resources',
  ])

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {back}
        </Link>
        <Link
          href="/resources"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          {browseResources}
        </Link>
      </div>
    </main>
  )
}
