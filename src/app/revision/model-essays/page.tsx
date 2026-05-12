import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, FileText } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Grade-9 Model Essays — Annotated Paragraph-by-Paragraph | The English Hub',
  description:
    'Annotated Grade-9 model essays for Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, and Romeo and Juliet. Paragraph-by-paragraph commentary so you can see exactly how a top-band response is built.',
  alternates: { canonical: 'https://theenglishhub.app/revision/model-essays' },
  openGraph: {
    title: 'Grade-9 Model Essays — Annotated Paragraph-by-Paragraph',
    description:
      'Top-band annotated model essays for the most-taught GCSE Literature texts. Each essay is broken down paragraph-by-paragraph with technique commentary.',
  },
}

/* ─── Shared types ─────────────────────────────────────────────── */
// Mirrors the shape exported from src/data/model-essays/<text>.ts files.
// Re-declared locally to avoid coupling this page to a single helper module
// while sibling agents are still landing the data files.

type ModelEssayParagraph = {
  content: string
  annotation: string
}

type ModelEssay = {
  slug: string
  title: string
  text: string
  paragraphs: ModelEssayParagraph[]
  targetGrade: number | string
  wordCount: number
  keyTechniques: string[]
}

type TextKey =
  | 'macbeth'
  | 'an-inspector-calls'
  | 'a-christmas-carol'
  | 'jekyll-and-hyde'
  | 'romeo-and-juliet'

const TEXT_GROUPS: { key: TextKey; label: string; tagline: string }[] = [
  {
    key: 'macbeth',
    label: 'Macbeth',
    tagline: 'Ambition, guilt and the supernatural in Shakespeare’s shortest tragedy.',
  },
  {
    key: 'an-inspector-calls',
    label: 'An Inspector Calls',
    tagline: 'Priestley’s morality play on collective responsibility and class.',
  },
  {
    key: 'a-christmas-carol',
    label: 'A Christmas Carol',
    tagline: 'Dickens’s allegorical novella on transformation, charity, and want.',
  },
  {
    key: 'jekyll-and-hyde',
    label: 'Jekyll and Hyde',
    tagline: 'Stevenson’s Gothic study of duality and the Victorian self.',
  },
  {
    key: 'romeo-and-juliet',
    label: 'Romeo and Juliet',
    tagline: 'Shakespeare’s tragedy of love, fate, and feud.',
  },
]

/* ─── Aggregator ───────────────────────────────────────────────── */
// Each sibling data file (src/data/model-essays/<text>.ts) is being authored
// by a parallel agent. They may not all exist at the moment this page
// compiles, so we resolve them dynamically with a template-string import that
// TypeScript cannot eagerly resolve, and fall back to an empty array if the
// module is missing or malformed at runtime.
async function loadEssaysFor(key: TextKey): Promise<ModelEssay[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = await import(`@/data/model-essays/${key}`)
    const candidates = [
      mod?.default,
      mod?.essays,
      mod?.modelEssays,
      mod?.[`${camelKey(key)}Essays`],
      mod?.[`${camelKey(key)}ModelEssays`],
    ]
    const arr = candidates.find((c) => Array.isArray(c))
    return Array.isArray(arr) ? (arr as ModelEssay[]) : []
  } catch {
    return []
  }
}

function camelKey(key: TextKey): string {
  return key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

/* ─── Page ─────────────────────────────────────────────────────── */

export default async function ModelEssaysIndexPage() {
  const groups = await Promise.all(
    TEXT_GROUPS.map(async (g) => ({ ...g, essays: await loadEssaysFor(g.key) })),
  )

  const breadcrumbItems = [{ label: 'Revision', href: '/revision' }, { label: 'Model essays' }]

  const totalEssays = groups.reduce((acc, g) => acc + g.essays.length, 0)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Model essays', url: 'https://theenglishhub.app/revision/model-essays' },
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="space-y-10 pb-16">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-teal-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-clay-500/5 blur-3xl" />

          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Revision Hub
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="mr-1 size-3" />
                Model essays
              </Badge>
              {totalEssays > 0 && (
                <Badge variant="outline">
                  {totalEssays} annotated essay{totalEssays === 1 ? '' : 's'}
                </Badge>
              )}
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Grade-9 model essays — annotated paragraph-by-paragraph
            </h1>
            <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
              Read a top-band response, then read the marker’s thinking next to every paragraph.
              Each essay is broken into the moves a Grade-9 candidate makes — thesis, embedded
              quotation, methodical AO2, deft AO3 — so you can copy the structure, not the words.
            </p>
          </div>
        </section>

        {/* ── Cards grouped by text ─────────────────────────── */}
        {groups.map((group) => (
          <section key={group.key} aria-labelledby={`group-${group.key}`} className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2
                  id={`group-${group.key}`}
                  className="text-heading-lg font-heading font-serif text-foreground"
                >
                  {group.label}
                </h2>
                <p className="text-body-sm text-muted-foreground">{group.tagline}</p>
              </div>
              <span className="text-caption text-muted-foreground">
                {group.essays.length} essay{group.essays.length === 1 ? '' : 's'}
              </span>
            </div>

            {group.essays.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border/60 bg-card/50 p-6 text-center">
                <p className="text-body-sm text-muted-foreground">
                  Model essays for {group.label} are being written and will appear here shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {group.essays.map((essay) => (
                  <EssayCard key={essay.slug} textKey={group.key} essay={essay} />
                ))}
              </div>
            )}
          </section>
        ))}

        {/* ── Fair-dealing footer ───────────────────────────── */}
        <section
          aria-labelledby="fair-dealing-heading"
          className="rounded-2xl border border-border/60 bg-card p-6"
        >
          <h2 id="fair-dealing-heading" className="text-heading-sm font-heading text-foreground">
            About these model essays
          </h2>
          <p className="mt-2 text-body-sm text-muted-foreground">
            All essays are written by The English Hub for revision use. Any quoted text from the
            primary works is reproduced as a short fair-dealing extract for the purpose of criticism
            and review under section 30 of the Copyright, Designs and Patents Act 1988.
          </p>
        </section>
      </div>
    </>
  )
}

/* ─── Sub-components ───────────────────────────────────────────── */

function EssayCard({ textKey, essay }: { textKey: TextKey; essay: ModelEssay }) {
  const href = `/revision/model-essays/${textKey}/${essay.slug}`
  const wordCount = formatWordCount(essay.wordCount)
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <FileText className="size-5 text-primary" />
        </div>
        <Badge variant="default" className="shrink-0">
          Grade {essay.targetGrade}
        </Badge>
      </div>

      <div>
        <h3 className="text-heading-sm font-heading font-serif text-foreground group-hover:text-primary">
          {essay.title}
        </h3>
        {wordCount && <p className="mt-1 text-caption text-muted-foreground">{wordCount} words</p>}
      </div>

      {essay.keyTechniques?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {essay.keyTechniques.slice(0, 3).map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-border/60 bg-background px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {essay.keyTechniques.length > 3 && (
            <span className="text-[0.65rem] text-muted-foreground">
              +{essay.keyTechniques.length - 3} more
            </span>
          )}
        </div>
      )}

      <div className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-primary">
        <BookOpen className="size-3.5" />
        View annotated essay
        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}

function formatWordCount(n: number | undefined): string | null {
  if (typeof n !== 'number' || !Number.isFinite(n) || n <= 0) return null
  return n.toLocaleString('en-GB')
}
