import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BookOpen, Sparkles, Quote } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

/* ─── Types (mirror sibling data files) ────────────────────────── */

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

const TEXT_LABELS: Record<TextKey, string> = {
  macbeth: 'Macbeth',
  'an-inspector-calls': 'An Inspector Calls',
  'a-christmas-carol': 'A Christmas Carol',
  'jekyll-and-hyde': 'Jekyll and Hyde',
  'romeo-and-juliet': 'Romeo and Juliet',
}

const ALL_TEXT_KEYS = Object.keys(TEXT_LABELS) as TextKey[]

/* ─── Aggregator ───────────────────────────────────────────────── */
// Sibling data files may not exist when this page first compiles. Resolve
// dynamically with a template-string import that bypasses TS module
// resolution; missing/malformed modules degrade to an empty array.

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
    // Some sibling data files use `id`/`grade`/`topic` instead of
    // `slug`/`targetGrade`/`title`. Normalise so the page contract is
    // satisfied; drop any entry that still lacks a usable slug after the
    // fallback (otherwise generateStaticParams crashes the production build).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
      (arr as any[])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((e: any) => {
          const slug = typeof e?.slug === 'string' && e.slug.length > 0 ? e.slug : e?.id
          const targetGrade = e?.targetGrade ?? e?.grade
          const title = e?.title ?? e?.topic
          const paragraphs = Array.isArray(e?.paragraphs)
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              e.paragraphs.map((p: any) => ({
                content: p?.content ?? p?.paragraph ?? '',
                annotation: flattenAnnotation(p?.annotation),
              }))
            : []
          return {
            slug,
            title,
            text: e?.text,
            paragraphs,
            targetGrade,
            wordCount: e?.wordCount,
            keyTechniques: Array.isArray(e?.keyTechniques) ? e.keyTechniques : [],
          } as ModelEssay
        })
        .filter((e) => typeof e.slug === 'string' && e.slug.length > 0)
    )
  } catch {
    return []
  }
}

function camelKey(key: TextKey): string {
  return key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

/**
 * Sibling data files use one of two annotation shapes:
 *   • a plain string (macbeth.ts), OR
 *   • an object with AO1 / AO2 / AO3 keys (jekyll-and-hyde.ts).
 * Flatten the object form into a single readable string so we can render
 * the annotation column without runtime React errors.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenAnnotation(a: any): string {
  if (typeof a === 'string') return a
  if (a && typeof a === 'object') {
    const parts: string[] = []
    if (typeof a.AO1 === 'string') parts.push(`AO1 — ${a.AO1}`)
    if (typeof a.AO2 === 'string') parts.push(`AO2 — ${a.AO2}`)
    if (typeof a.AO3 === 'string') parts.push(`AO3 — ${a.AO3}`)
    if (parts.length > 0) return parts.join('\n\n')
  }
  return ''
}

function isTextKey(s: string): s is TextKey {
  return (ALL_TEXT_KEYS as string[]).includes(s)
}

/* ─── Static params ────────────────────────────────────────────── */

export async function generateStaticParams() {
  const all = await Promise.all(
    ALL_TEXT_KEYS.map(async (text) => {
      const essays = await loadEssaysFor(text)
      return essays.map((e) => ({ text, slug: e.slug }))
    }),
  )
  return all.flat()
}

/* ─── Metadata ─────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ text: string; slug: string }>
}): Promise<Metadata> {
  const { text, slug } = await params
  if (!isTextKey(text)) {
    return { title: await t('analysis.deep.model_essay.fallback_title') }
  }
  const essays = await loadEssaysFor(text)
  const essay = essays.find((e) => e.slug === slug)
  const textLabel = TEXT_LABELS[text]
  if (!essay) {
    return {
      title: `${textLabel} model essay — The English Hub`,
      alternates: { canonical: `https://theenglishhub.app/revision/model-essays/${text}/${slug}` },
    }
  }
  return {
    title: `${essay.title} — Annotated Grade ${essay.targetGrade} model essay (${textLabel})`,
    description: `Read a Grade ${essay.targetGrade} model essay on ${textLabel} (${essay.title}) with paragraph-by-paragraph marker commentary covering structure, AO2 method analysis, and AO3 context.`,
    alternates: {
      canonical: `https://theenglishhub.app/revision/model-essays/${text}/${slug}`,
    },
    openGraph: {
      title: `${essay.title} — Annotated Grade ${essay.targetGrade} model essay`,
      description: `Annotated Grade ${essay.targetGrade} ${textLabel} essay with paragraph-level commentary.`,
    },
  }
}

/* ─── Page ─────────────────────────────────────────────────────── */

export default async function ModelEssayPage({
  params,
}: {
  params: Promise<{ text: string; slug: string }>
}) {
  const { text, slug } = await params

  if (!isTextKey(text)) notFound()

  const essays = await loadEssaysFor(text)
  const essay = essays.find((e) => e.slug === slug)

  if (!essay) notFound()

  const textLabel = TEXT_LABELS[text]
  const breadcrumbItems = [
    { label: 'Revision', href: '/revision' },
    { label: 'Model essays', href: '/revision/model-essays' },
    { label: textLabel },
  ]

  const wordCount = formatWordCount(essay.wordCount)

  // Chrome translations. Essay paragraphs, marker annotations, the essay
  // title and textLabel stay in source language (literary/marker content
  // per task scope).
  const tBackToEssays = await t('analysis.deep.model_essay.back_to_essays')
  const tGradePrefix = await t('analysis.deep.model_essay.grade_prefix')
  const tWordsSuffix = await t('analysis.deep.model_essay.words_suffix')
  const tKeyTechniques = await t('analysis.deep.model_essay.key_techniques')
  const tFooterH2 = await t('analysis.deep.model_essay.footer_h2')
  const tFooterBody = await t('analysis.deep.model_essay.footer_body')
  const tRevisionHub = await t('analysis.deep.model_essay.cta_revision_hub')
  const tFairDealingPre = await t('analysis.deep.model_essay.fair_dealing_prefix')
  const tFairDealingPost = await t('analysis.deep.model_essay.fair_dealing_suffix')

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Model essays', url: 'https://theenglishhub.app/revision/model-essays' },
          {
            name: textLabel,
            url: `https://theenglishhub.app/revision/model-essays/${text}`,
          },
          {
            name: essay.title,
            url: `https://theenglishhub.app/revision/model-essays/${text}/${slug}`,
          },
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <article className="space-y-10 pb-16">
        {/* ── Hero ──────────────────────────────────────────── */}
        <header className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-teal-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-clay-500/5 blur-3xl" />

          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/model-essays" />}
            >
              <ArrowLeft className="size-3.5" />
              {tBackToEssays}
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Sparkles className="mr-1 size-3" />
                {textLabel}
              </Badge>
              <Badge variant="default">
                {tGradePrefix} {essay.targetGrade}
              </Badge>
              {wordCount && (
                <Badge variant="outline">
                  {wordCount} {tWordsSuffix}
                </Badge>
              )}
            </div>

            <h1 className="text-display-sm font-heading font-serif text-foreground sm:text-display">
              {essay.title}
            </h1>

            {essay.keyTechniques?.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-caption uppercase tracking-wider text-muted-foreground">
                  {tKeyTechniques}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {essay.keyTechniques.map((technique) => (
                    <span
                      key={technique}
                      className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/5 px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-300"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* ── Paragraphs ────────────────────────────────────── */}
        <section aria-label="Annotated essay" className="space-y-6">
          {essay.paragraphs.map((p, i) => (
            <ParagraphRow key={i} index={i} paragraph={p} />
          ))}
        </section>

        {/* ── Footer / back link ────────────────────────────── */}
        <section
          aria-labelledby="essay-footer-heading"
          className="space-y-4 rounded-2xl border border-border/60 bg-card p-6"
        >
          <h2
            id="essay-footer-heading"
            className="text-heading-sm font-heading font-serif text-foreground"
          >
            {tFooterH2}
          </h2>
          <p className="text-body-sm text-muted-foreground">{tFooterBody}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="default" size="sm" render={<Link href="/revision/model-essays" />}>
              <ArrowLeft className="size-3.5" />
              {tBackToEssays}
            </Button>
            <Button variant="outline" size="sm" render={<Link href="/revision" />}>
              <BookOpen className="size-3.5" />
              {tRevisionHub}
            </Button>
          </div>

          <p className="border-t border-border/60 pt-4 text-caption text-muted-foreground">
            {tFairDealingPre} {textLabel} {tFairDealingPost}
          </p>
        </section>
      </article>
    </>
  )
}

/* ─── Sub-components ───────────────────────────────────────────── */

async function ParagraphRow({
  index,
  paragraph,
}: {
  index: number
  paragraph: ModelEssayParagraph
}) {
  const tParagraph = await t('analysis.deep.model_essay.paragraph_label')
  const tAnnotationFor = await t('analysis.deep.model_essay.annotation_for')
  const tMarkersNotes = await t('analysis.deep.model_essay.markers_notes')
  return (
    <div className="grid gap-4 rounded-2xl border border-border/60 bg-card p-5 sm:p-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-6">
      {/* Essay paragraph (serif body) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {index + 1}
          </span>
          <span className="text-caption uppercase tracking-wider text-muted-foreground">
            {tParagraph} {index + 1}
          </span>
        </div>
        <ParagraphBody content={paragraph.content} />
      </div>

      {/* Annotation column (mono) */}
      <aside
        aria-label={`${tAnnotationFor} ${index + 1}`}
        className="rounded-xl border border-dashed border-border/60 bg-background/60 p-4"
      >
        <div className="mb-2 flex items-center gap-1.5 text-caption uppercase tracking-wider text-muted-foreground">
          <Quote className="size-3.5" />
          {tMarkersNotes}
        </div>
        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
          {paragraph.annotation}
        </p>
      </aside>
    </div>
  )
}

// Render essay paragraph text. We split on double newlines (rare for a single
// paragraph, but supported for multi-clause samples) and treat any single-quote
// or smart-quoted span surrounded by whitespace as inline emphasis. The
// surrounding container already supplies font-serif, so we simply set spacing.
function ParagraphBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/g).filter(Boolean)
  if (blocks.length === 0) {
    return <p className="font-serif text-body leading-relaxed text-foreground">{content}</p>
  }
  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        // A paragraph that begins with a smart-quote or straight-quote longer
        // than ~40 chars is rendered as a pull-quote with a left border for
        // emphasis. Everything else is normal serif body text.
        const trimmed = block.trim()
        const isPullQuote =
          trimmed.length > 40 && /^["“'‘]/.test(trimmed) && /["”'’]$/.test(trimmed)
        if (isPullQuote) {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-clay-500/60 pl-4 font-serif italic text-body text-foreground/90"
            >
              {trimmed}
            </blockquote>
          )
        }
        return (
          <p key={i} className="font-serif text-body leading-relaxed text-foreground">
            {block}
          </p>
        )
      })}
    </div>
  )
}

function formatWordCount(n: number | undefined): string | null {
  if (typeof n !== 'number' || !Number.isFinite(n) || n <= 0) return null
  return n.toLocaleString('en-GB')
}
