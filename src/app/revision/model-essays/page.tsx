import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, FileText } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t, tMany } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle, ogDescription] = await tMany([
    'revision.model_essays.index.meta_title',
    'revision.model_essays.index.meta_description',
    'revision.model_essays.index.og_title',
    'revision.model_essays.index.og_description',
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/revision/model-essays' },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
    },
  }
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

// Author/work labels stay literary (English) so students see the
// canonical text title examiners use. Taglines route through t() because
// they're index-page chrome explaining each text.
const TEXT_GROUPS: { key: TextKey; label: string; taglineKey: string }[] = [
  {
    key: 'macbeth',
    label: 'Macbeth',
    taglineKey: 'revision.model_essays.index.tagline_macbeth',
  },
  {
    key: 'an-inspector-calls',
    label: 'An Inspector Calls',
    taglineKey: 'revision.model_essays.index.tagline_inspector_calls',
  },
  {
    key: 'a-christmas-carol',
    label: 'A Christmas Carol',
    taglineKey: 'revision.model_essays.index.tagline_christmas_carol',
  },
  {
    key: 'jekyll-and-hyde',
    label: 'Jekyll and Hyde',
    taglineKey: 'revision.model_essays.index.tagline_jekyll_hyde',
  },
  {
    key: 'romeo-and-juliet',
    label: 'Romeo and Juliet',
    taglineKey: 'revision.model_essays.index.tagline_romeo_juliet',
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
    if (!Array.isArray(arr)) return []
    // Sibling data files are inconsistent: macbeth.ts uses `slug`/`targetGrade`/
    // `title`, while the other four use `id`/`grade`/`topic`. The detail page
    // (`[text]/[slug]/page.tsx`) normalises the same way; mirror it here so the
    // index card links (`/revision/model-essays/<text>/<slug>`) resolve to a real
    // page instead of `/undefined`. Drop any entry that still lacks a slug.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
      (arr as any[])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((e: any) => ({
          slug: typeof e?.slug === 'string' && e.slug.length > 0 ? e.slug : e?.id,
          title: e?.title ?? e?.topic,
          text: e?.text,
          paragraphs: Array.isArray(e?.paragraphs) ? e.paragraphs : [],
          targetGrade: e?.targetGrade ?? e?.grade,
          wordCount: e?.wordCount,
          keyTechniques: Array.isArray(e?.keyTechniques) ? e.keyTechniques : [],
        }))
        .filter((e) => typeof e.slug === 'string' && e.slug.length > 0) as ModelEssay[]
    )
  } catch {
    return []
  }
}

function camelKey(key: TextKey): string {
  return key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

/* ─── Page ─────────────────────────────────────────────────────── */

export default async function ModelEssaysIndexPage() {
  // Resolve chrome strings once per render. Author/work labels and essay
  // titles stay English (literary content per scope) - everything else
  // routes through t().
  const [
    tBreadcrumbRevision,
    tBreadcrumbModelEssays,
    tBackToHub,
    tBadgeModelEssays,
    tAnnotatedSingular,
    tAnnotatedPlural,
    tH1,
    tHeroBody,
    tEssaySingular,
    tEssayPlural,
    tEmptyPrefix,
    tEmptySuffix,
    tFooterH2,
    tFooterBody,
  ] = await tMany([
    'footer.section.revision',
    'revision.model_essays.index.badge_model_essays',
    'revision.model_essays.index.back_to_revision_hub',
    'revision.model_essays.index.badge_model_essays',
    'revision.model_essays.index.annotated_essays_singular',
    'revision.model_essays.index.annotated_essays_plural',
    'revision.model_essays.index.h1',
    'revision.model_essays.index.hero_body',
    'revision.model_essays.index.count_essay_singular',
    'revision.model_essays.index.count_essay_plural',
    'revision.model_essays.index.empty_state_prefix',
    'revision.model_essays.index.empty_state_suffix',
    'revision.model_essays.index.footer_h2',
    'revision.model_essays.index.footer_body',
  ])

  const groups = await Promise.all(
    TEXT_GROUPS.map(async (g) => ({
      ...g,
      tagline: await t(g.taglineKey),
      essays: await loadEssaysFor(g.key),
    })),
  )

  const breadcrumbItems = [
    { label: tBreadcrumbRevision, href: '/revision' },
    { label: tBreadcrumbModelEssays },
  ]

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
              {tBackToHub}
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="mr-1 size-3" />
                {tBadgeModelEssays}
              </Badge>
              {totalEssays > 0 && (
                <Badge variant="outline">
                  {totalEssays} {totalEssays === 1 ? tAnnotatedSingular : tAnnotatedPlural}
                </Badge>
              )}
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">{tH1}</h1>
            <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{tHeroBody}</p>
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
                {group.essays.length} {group.essays.length === 1 ? tEssaySingular : tEssayPlural}
              </span>
            </div>

            {group.essays.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border/60 bg-card/50 p-6 text-center">
                <p className="text-body-sm text-muted-foreground">
                  {tEmptyPrefix} {group.label} {tEmptySuffix}
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
            {tFooterH2}
          </h2>
          <p className="mt-2 text-body-sm text-muted-foreground">{tFooterBody}</p>
        </section>
      </div>
    </>
  )
}

/* ─── Sub-components ───────────────────────────────────────────── */

async function EssayCard({ textKey, essay }: { textKey: TextKey; essay: ModelEssay }) {
  const href = `/revision/model-essays/${textKey}/${essay.slug}`
  const wordCount = formatWordCount(essay.wordCount)
  const [tGradePrefix, tWordsSuffix, tMoreSuffix, tViewEssay] = await tMany([
    'revision.model_essays.index.card_grade_prefix',
    'revision.model_essays.index.card_words_suffix',
    'revision.model_essays.index.card_more_suffix',
    'revision.model_essays.index.card_view_essay',
  ])
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
          {tGradePrefix} {essay.targetGrade}
        </Badge>
      </div>

      <div>
        <h3 className="text-heading-sm font-heading font-serif text-foreground group-hover:text-primary">
          {essay.title}
        </h3>
        {wordCount && (
          <p className="mt-1 text-caption text-muted-foreground">
            {wordCount} {tWordsSuffix}
          </p>
        )}
      </div>

      {essay.keyTechniques?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {essay.keyTechniques.slice(0, 3).map((technique) => (
            <span
              key={technique}
              className="inline-flex items-center rounded-full border border-border/60 bg-background px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground"
            >
              {technique}
            </span>
          ))}
          {essay.keyTechniques.length > 3 && (
            <span className="text-[0.65rem] text-muted-foreground">
              +{essay.keyTechniques.length - 3} {tMoreSuffix}
            </span>
          )}
        </div>
      )}

      <div className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-primary">
        <BookOpen className="size-3.5" />
        {tViewEssay}
        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}

function formatWordCount(n: number | undefined): string | null {
  if (typeof n !== 'number' || !Number.isFinite(n) || n <= 0) return null
  return n.toLocaleString('en-GB')
}
