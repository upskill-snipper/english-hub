import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/* ── Shared building blocks for Inspector Calls analysis pages ─────────────
 *
 * Every detail page composes these server components. Keeps markup
 * consistent, minimises bundle size, and relies only on theme tokens
 * so light/dark modes stay correct.
 * ─────────────────────────────────────────────────────────────────── */

export type RelatedLink = {
  href: string
  title: string
  blurb: string
}

export function ArticleJsonLd({
  headline,
  description,
  slug,
}: {
  headline: string
  description: string
  slug: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Organization',
      name: 'The English Hub',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'The English Hub',
      url: 'https://theenglishhub.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://theenglishhub.app/analysis/inspector-calls/${slug}`,
    },
    about: {
      '@type': 'Book',
      name: 'An Inspector Calls',
      author: { '@type': 'Person', name: 'J. B. Priestley' },
    },
    educationalLevel: 'GCSE',
    inLanguage: 'en-GB',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BackLink() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="mb-3 -ml-2 text-muted-foreground"
      render={<Link href="/analysis/inspector-calls" />}
    >
      <ArrowLeft className="size-3.5" />
      Back to Inspector Calls hub
    </Button>
  )
}

export function ExaminerByline() {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <GraduationCap className="size-3.5" />
      <span>
        Written by GCSE examiners &middot; The English Hub editorial team
      </span>
    </div>
  )
}

export function Extract({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="flex gap-3 rounded-xl border border-border/60 bg-muted/40 p-4 sm:p-5">
      <Quote className="mt-0.5 size-4 shrink-0 text-muted-foreground/70" />
      <p className="text-body-sm italic leading-relaxed text-foreground/90">
        {children}
      </p>
    </blockquote>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-heading-md font-heading text-foreground">{children}</h2>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-body-sm leading-relaxed text-foreground/90">
      {children}
    </div>
  )
}

export function RelatedAnalyses({ items }: { items: RelatedLink[] }) {
  return (
    <section className="space-y-4">
      <SectionHeading>Related analyses</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent/30"
          >
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
              {item.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {item.blurb}
            </p>
            <div className="mt-3 flex items-center gap-1 text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground group-hover:text-primary">
              Read analysis
              <ArrowRight className="size-3" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function RevisionCta() {
  return (
    <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/[0.08] via-card to-card p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-primary" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
              Revision hub
            </span>
          </div>
          <h3 className="text-heading-sm font-heading text-foreground">
            Revise An Inspector Calls for GCSE English Literature
          </h3>
          <p className="text-body-sm text-muted-foreground">
            Grade 5, 7 and 9 revision plans, model answers and exam technique
            from experienced GCSE examiners.
          </p>
        </div>
        <Button render={<Link href="/revision" />}>
          Go to revision
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  )
}

export function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="text-[0.65rem] uppercase tracking-wider"
        >
          {tag}
        </Badge>
      ))}
    </div>
  )
}

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="space-y-8">{children}</div>
    </div>
  )
}
