/**
 * KS3 Unit Landing — server-rendered.
 *
 * Source: DfE National Curriculum in England — English programmes of
 *   study: key stage 3 (statutory).
 * https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 *
 * Each "unit" maps to a half-term block in the typed lesson data
 * (src/lib/ks3/year-N.ts). The unit page surfaces:
 *   - overview (from the half-term label + the term overview),
 *   - lesson list (every week in the half-term),
 *   - key vocabulary,
 *   - navigation to the 7 deep sub-routes (characters / themes /
 *     key-quotes / context / extract-walkthrough / essay-plans /
 *     practice).
 */
import Link from 'next/link'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { KS3, loc, type YearNumber, type HalfTermId } from '@/lib/ks3/curriculum'

const SUB_ROUTES = [
  { slug: 'characters', en: 'Characters', ar: 'الشخصيات' },
  { slug: 'themes', en: 'Themes', ar: 'الموضوعات' },
  { slug: 'key-quotes', en: 'Key Quotes', ar: 'الاقتباسات المفتاحية' },
  { slug: 'context', en: 'Context', ar: 'السياق' },
  { slug: 'extract-walkthrough', en: 'Extract Walkthrough', ar: 'تحليل المقاطع' },
  { slug: 'essay-plans', en: 'Essay Plans', ar: 'خطط المقالات' },
  { slug: 'practice', en: 'Practice', ar: 'تمارين' },
] as const

export default async function KS3UnitPage({
  params,
}: {
  params: Promise<{ year: string; unit: string }>
}) {
  const { year: yearStr, unit } = await params
  const yearNum = Number(yearStr.replace('year-', '')) as YearNumber
  if (![7, 8, 9].includes(yearNum)) notFound()

  const year = KS3.years.find((y) => y.number === yearNum)
  if (!year) notFound()

  // Unit slug format: term-N-half-M (e.g. 'term-1-half-1').
  const ht = unit.match(/^term-(\d)-half-(\d)$/)
  if (!ht) notFound()
  const halfId = `${ht[1]}.${ht[2]}` as HalfTermId
  const term = year.terms.find((t) => t.halfTerms.some((h) => h.id === halfId))
  const halfTerm = term?.halfTerms.find((h) => h.id === halfId)
  if (!term || !halfTerm) notFound()

  const lang = (await headers()).get('x-lang') === 'ar' ? 'ar' : 'en'
  const tr = (s: { en: string; ar?: string } | undefined): string =>
    s ? (lang === 'ar' && s.ar ? s.ar : s.en) : ''

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-violet-600 mb-3">
        KS3 · Year {yearNum} · {tr(term.label)} · {tr(halfTerm.label)}
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        {tr(halfTerm.label)}
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">{tr(term.overview)}</p>
      {term.setText && (
        <p className="text-sm rounded-lg border border-violet-300/30 bg-violet-500/[0.04] px-4 py-3 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700">
            {lang === 'ar' ? 'النص الأساسي' : 'Set text'}:{' '}
          </span>
          <span className="font-medium">{tr(term.setText)}</span>
        </p>
      )}

      {/* Sub-route nav (deep content) */}
      <h2 className="text-xl font-semibold mt-10 mb-4">
        {lang === 'ar' ? 'دراسة الوحدة بعمق' : 'Study this unit in depth'}
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {SUB_ROUTES.map((r) => (
          <Link
            key={r.slug}
            href={`/ks3/year-${yearNum}/${unit}/${r.slug}`}
            className="block rounded-xl border border-border bg-card p-4 hover:border-violet-400/60 hover:bg-violet-500/[0.04] transition-colors"
          >
            <p className="font-semibold text-foreground">{lang === 'ar' ? r.ar : r.en}</p>
          </Link>
        ))}
      </div>

      {/* Weekly lessons */}
      <h2 className="text-xl font-semibold mt-10 mb-4">
        {lang === 'ar' ? 'دروس الأسابيع' : 'Weekly lessons'}
      </h2>
      <ol className="space-y-2">
        {halfTerm.weeks.map((w) => (
          <li key={w.number}>
            <Link
              href={`/ks3/year-${yearNum}/${term.number}/${halfId}-${w.number}`}
              className="block rounded-lg border border-border bg-card px-4 py-3 hover:border-violet-400/60 transition-colors"
            >
              <p className="font-medium text-sm text-foreground">
                {lang === 'ar' ? 'الأسبوع' : 'Week'} {w.number}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {w.keyVocabulary.slice(0, 4).map(tr).join(' · ')}
              </p>
            </Link>
          </li>
        ))}
      </ol>

      <p className="mt-12 text-sm text-muted-foreground">
        <Link href={`/ks3/year-${yearNum}`} className="underline">
          ← {lang === 'ar' ? 'العودة لـ السنة' : 'Back to Year'} {yearNum}
        </Link>
      </p>
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string; unit: string }>
}) {
  const { year, unit } = await params
  return {
    title: `KS3 ${year.replace('-', ' ')} ${unit.replace(/-/g, ' ')} — The English Hub`,
  }
}
