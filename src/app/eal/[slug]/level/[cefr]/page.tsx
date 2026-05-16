/**
 * EAL Topic — CEFR-banded view (server-rendered for SEO).
 *
 * Renders a real topic (concept, examples, Arabic-L1 common errors)
 * framed for one CEFR band, with the Council-of-Europe descriptor for
 * that band and routes into the interactive banded practice + the full
 * interactive topic page.
 *
 * CEFR anchor: Council of Europe global scale.
 * https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
 * Cambridge English Qualifications anchor the band naming (A2 Key,
 * B1 Preliminary, B2 First, C1 Advanced for Schools).
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { findEALTopic } from '@/lib/eal/curriculum'
import { CEFR_LABEL, CEFR_DESCRIPTORS, CEFR_PRODUCT_BANDS } from '@/lib/eal/cefr'

const LEVELS = ['a2', 'b1', 'b2', 'c1'] as const
type CefrSlug = (typeof LEVELS)[number]

function toBand(slug: CefrSlug) {
  return slug.toUpperCase() as (typeof CEFR_PRODUCT_BANDS)[number]
}

export default async function EALLevelPage({
  params,
}: {
  params: Promise<{ slug: string; cefr: string }>
}) {
  const { slug, cefr } = await params
  const topic = findEALTopic(slug)
  if (!topic) notFound()
  const level = cefr.toLowerCase() as CefrSlug
  if (!LEVELS.includes(level)) notFound()
  const band = toBand(level)

  const lang = (await headers()).get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (s: { en: string; ar?: string } | undefined): string =>
    s ? (lang === 'ar' && s.ar ? s.ar : s.en) : ''
  const isAr = lang === 'ar'

  const nativeBand = topic.cefr
  const showsNativeBand = nativeBand === band

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-teal-600 mb-3">
        <Link href={`/eal/${slug}`}>EAL · {tr(topic.title)}</Link>
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        {tr(topic.title)} — {tr(CEFR_LABEL[band])}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        {tr(CEFR_DESCRIPTORS[band])}
      </p>

      {!showsNativeBand && (
        <p className="rounded-lg border border-amber-400/30 bg-amber-500/[0.04] px-4 py-3 mb-6 text-sm">
          {isAr
            ? `هذا الموضوع موجّه أصلاً لمستوى ${nativeBand}. تشوفه الآن بإطار ${band}.`
            : `This topic is pitched at ${nativeBand}. You're viewing the ${band} framing of it.`}
        </p>
      )}

      <h2 className="text-xl font-semibold mb-2">{isAr ? 'الشرح' : 'Concept'}</h2>
      <p className="text-sm leading-relaxed text-foreground/90 mb-8">{tr(topic.concept)}</p>

      <h2 className="text-xl font-semibold mb-3">{isAr ? 'أمثلة' : 'Examples'}</h2>
      <div className="space-y-3 mb-8">
        {topic.examples.slice(0, 6).map((ex, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-4">
            <p className="font-medium text-foreground" dir="ltr" lang="en">
              {ex.en}
            </p>
            <p className="mt-1 text-sm text-muted-foreground" dir="rtl" lang="ar">
              {ex.ar}
            </p>
            {ex.note && <p className="mt-2 text-xs text-primary/80 italic">{tr(ex.note)}</p>}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">{isAr ? 'الأخطاء الشائعة' : 'Common errors'}</h2>
      <div className="space-y-3 mb-8">
        {topic.commonErrors.slice(0, 5).map((err, i) => (
          <div key={i} className="rounded-lg border border-red-500/30 bg-red-500/[0.04] p-4">
            <p className="text-sm" dir="ltr" lang="en">
              <span className="font-mono text-[10px] uppercase tracking-wider text-red-500">
                {isAr ? 'غلط' : 'Wrong'}:{' '}
              </span>
              <span className="line-through text-foreground/70">{err.wrong}</span>
            </p>
            <p className="mt-1 text-sm" dir="ltr" lang="en">
              <span className="font-mono text-[10px] uppercase tracking-wider text-teal-600">
                {isAr ? 'صح' : 'Right'}:{' '}
              </span>
              <span className="font-semibold text-foreground">{err.right}</span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{tr(err.explanation)}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-teal-400/30 bg-teal-500/[0.05] p-5 mb-8">
        <p className="font-mono text-[10px] uppercase tracking-wider text-teal-700 mb-2">
          {isAr ? 'الخطوة التالية' : 'Next step'}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/eal/${slug}`}
            className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            {isAr ? 'التمارين التفاعلية' : 'Interactive exercises'}
          </Link>
          <Link
            href={`/eal/practice/mock-exam-${level}`}
            className="rounded-lg border border-teal-500/40 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-teal-500/10"
          >
            {isAr ? `تدرّب على مستوى ${band}` : `Practise at ${band}`}
          </Link>
          <Link
            href="/eal/diagnostic"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {isAr ? 'حدّد مستواك' : 'Find your level'}
          </Link>
        </div>
      </div>

      {/* Sibling levels */}
      <h2 className="text-sm font-semibold mb-3 text-muted-foreground">
        {isAr ? 'مستويات أخرى لهذا الموضوع' : 'Other levels for this topic'}
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {LEVELS.map((l) => (
          <Link
            key={l}
            href={`/eal/${slug}/level/${l}`}
            className={`block rounded-lg border p-3 text-center text-sm font-mono uppercase tracking-wider ${
              l === level
                ? 'border-teal-500 bg-teal-500/10 text-teal-700'
                : 'border-border bg-card hover:border-teal-400/60'
            }`}
          >
            {l}
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        <Link href="/eal" className="underline">
          ← {isAr ? 'كل مواضيع EAL' : 'All EAL topics'}
        </Link>
      </p>
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; cefr: string }>
}): Promise<Metadata> {
  const { slug, cefr } = await params
  const topic = findEALTopic(slug)
  const band = cefr.toUpperCase()
  if (!topic) {
    return { title: `EAL — ${band}` }
  }
  const title = `${topic.title.en} — ${band} | EAL for Arabic speakers`
  const description = `${topic.description.en} Pitched for CEFR ${band} with bilingual (English/Arabic) explanations and Arabic-L1 common errors.`
  return {
    title,
    description,
    alternates: {
      canonical: `https://theenglishhub.app/eal/${slug}/level/${cefr.toLowerCase()}`,
    },
    openGraph: { title, description, type: 'article', locale: 'en_GB' },
  }
}
