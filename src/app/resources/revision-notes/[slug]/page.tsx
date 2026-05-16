import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  Construction,
  BookOpen,
  Quote,
  PenTool,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getSetText } from '@/lib/board/set-texts'

/**
 * Catch-all fallback for /resources/revision-notes/<slug>.
 *
 * Static folders (macbeth, christmas-carol, jekyll-and-hyde, etc.) win the
 * Next.js route match before this dynamic [slug] segment runs, so the
 * existing 24 hand-authored notes pages are unaffected. This page only
 * renders for slugs WITHOUT a static folder — turning what was previously
 * a 404 into a graceful "study guide in production" placeholder.
 *
 * Founder feedback (02 May 2026, ship-day TestFlight): "revision notes all
 * showing 404 error page not found across site". The /revision/texts/[slug]
 * "Open revision notes" Card was already gated on REVISION_NOTES_AVAILABLE in
 * commit 99bd201, but other entry points (search, sitemap, deep links from
 * marketing emails) bypassed that gate and hit the underlying 404. This
 * page is the last line of defence: any /resources/revision-notes/<slug>
 * URL now returns 200 with a useful page, so a user clicking from anywhere
 * lands somewhere helpful.
 *
 * Real revision-notes content for the missing slugs is a content-team task
 * — when a page is hand-authored at /resources/revision-notes/<slug>/page.tsx
 * the static folder match takes over and this fallback is bypassed.
 */

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const text = getSetText(slug)
  const title = text
    ? `${text.title} — Revision notes (in production)`
    : 'Revision notes — in production'
  return {
    title: `${title}`,
    description: text
      ? `Concise revision notes for ${text.title} are being written. In the meantime explore our study guide, key quotes, and AI marking.`
      : 'Concise revision notes are being written. Explore our study guides, key quotes, and AI marking while we finish them.',
    // Don't index in-production placeholders — they aren't real content yet
    // and we don't want them ranking ahead of complete pages.
    robots: { index: false, follow: true },
    alternates: {
      canonical: `https://theenglishhub.app/resources/revision-notes/${slug}`,
    },
  }
}

export default async function RevisionNotesPlaceholder({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const text = getSetText(slug)
  const title = text?.title ?? humanise(slug)
  const author = text?.author

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 pb-16 pt-8 sm:px-6">
      {/* Back link */}
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 text-muted-foreground"
        render={<Link href="/resources/revision-notes" />}
      >
        <ArrowLeft className="size-3.5" />
        Back to all revision notes
      </Button>

      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-700 border-amber-500/20">
            <Construction className="mr-1 size-3" />
            In production
          </Badge>
          {text && (
            <Badge variant="outline" className="text-muted-foreground">
              {text.boards.length === 1 ? '1 exam board' : `${text.boards.length} exam boards`}
            </Badge>
          )}
        </div>
        <h1 className="font-heading text-display-sm text-foreground sm:text-display">{title}</h1>
        {author && <p className="text-body-lg text-muted-foreground">by {author}</p>}
      </header>

      {/* Status card */}
      <Card className="border-amber-500/30 bg-gradient-to-br from-card via-card to-amber-500/[0.04]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
              <Construction className="size-5 text-amber-700" />
            </div>
            <CardTitle className="text-heading-md font-heading">
              Revision notes are being written
            </CardTitle>
          </div>
          <CardDescription className="mt-2">
            We're hand-writing concise revision notes for {title}: plot, characters, context,
            themes, and exam-style practice anchored to the official mark schemes. They&rsquo;ll
            appear here as soon as they&rsquo;re ready.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body-md text-muted-foreground">
            In the meantime, the study materials below are already complete for {title}.
          </p>
        </CardContent>
      </Card>

      {/* Alternative paths */}
      <section className="space-y-4">
        <h2 className="font-heading text-heading-md text-foreground">What you can do now</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {text && (
            <Card className="group transition-all hover:border-border hover:shadow-card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <BookOpen className="size-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-heading-md font-heading">Full study guide</CardTitle>
                </div>
                <CardDescription className="mt-2">
                  Characters, themes, key quotations and exam-ready analysis for {title}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href={`/revision/texts/${text.slug}`} />}
                >
                  Open study guide
                  <ArrowRight className="size-3.5" />
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="group transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Quote className="size-5 text-emerald-700" />
                </div>
                <CardTitle className="text-heading-md font-heading">Browse all set texts</CardTitle>
              </div>
              <CardDescription className="mt-2">
                Every text on every board with the revision notes that are already published.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/revision/texts" />}
              >
                Browse set texts
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <PenTool className="size-5 text-violet-700" />
                </div>
                <CardTitle className="text-heading-md font-heading">AI essay marking</CardTitle>
              </div>
              <CardDescription className="mt-2">
                Submit any practice essay on {title} and get AO-aligned feedback in under a minute.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/marking" />}
              >
                Submit essay
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
                  <Sparkles className="size-5 text-rose-700" />
                </div>
                <CardTitle className="text-heading-md font-heading">Your hub</CardTitle>
              </div>
              <CardDescription className="mt-2">
                Personalised revision plan, mock papers, and progress for your exam board.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/revision" />}
              >
                Open your hub
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tell us */}
      <p className="rounded-2xl border border-border/60 bg-card p-5 text-body-sm text-muted-foreground">
        <strong className="text-foreground">Need these notes urgently?</strong> Email{' '}
        <a className="text-primary underline" href="mailto:support@theenglishhub.app">
          support@theenglishhub.app
        </a>{' '}
        and we&rsquo;ll prioritise this text in the writing queue.
      </p>
    </div>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Slug → human title fallback when getSetText() returns null. */
function humanise(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}
