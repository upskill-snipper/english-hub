import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { AnalysisBoardGate } from './_components/AnalysisBoardGate'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'AQA Love and Relationships Analysis: Comparisons, Themes & Quotes',
  description:
    'In-depth AQA Love and Relationships poetry analysis for GCSE. Compare poems side-by-side, explore every theme and master the unseen comparison question. Written by GCSE markers.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/aqa-love-relationships' },
  openGraph: {
    title: 'AQA Love and Relationships Analysis Hub — The English Hub',
    description:
      'Grade 9 AQA Love and Relationships analysis: poem comparisons, themes, quotes and essay writing, written by GCSE markers.',
  },
}

const comparisonPages = [
  {
    slug: 'sonnet-29-vs-loves-philosophy',
    title: 'Sonnet 29 vs Love’s Philosophy',
    sub: 'Romantic longing',
  },
  {
    slug: 'porphyrias-lover-vs-my-last-duchess',
    title: 'Porphyria’s Lover vs My Last Duchess',
    sub: 'Possessive love',
  },
  {
    slug: 'neutral-tones-vs-when-we-two-parted',
    title: 'Neutral Tones vs When We Two Parted',
    sub: 'Lost love',
  },
  {
    slug: 'mother-any-distance-vs-follower',
    title: 'Mother, Any Distance vs Follower',
    sub: 'Parent–child love',
  },
  {
    slug: 'walking-away-vs-before-you-were-mine',
    title: 'Walking Away vs Before You Were Mine',
    sub: 'Parental perspective',
  },
  {
    slug: 'letters-from-yorkshire-vs-singh-song',
    title: 'Letters from Yorkshire vs Singh Song!',
    sub: 'Love across distance and culture',
  },
  {
    slug: 'climbing-my-grandfather-vs-follower',
    title: 'Climbing My Grandfather vs Follower',
    sub: 'Admiration for an older figure',
  },
  {
    slug: 'eden-rock-vs-walking-away',
    title: 'Eden Rock vs Walking Away',
    sub: 'Memory of parents',
  },
  {
    slug: 'winter-swans-vs-neutral-tones',
    title: 'Winter Swans vs Neutral Tones',
    sub: 'Relationship breakdown',
  },
  {
    slug: 'sonnet-29-vs-porphyrias-lover',
    title: 'Sonnet 29 vs Porphyria’s Lover',
    sub: 'Obsessive love',
  },
]

const themePages = [
  { slug: 'romantic-love-theme-across-anthology', title: 'Romantic love across the anthology' },
  { slug: 'family-love-theme-across-anthology', title: 'Family love across the anthology' },
  { slug: 'lost-love-theme-across-anthology', title: 'Lost love across the anthology' },
  { slug: 'possessive-love-theme-across-anthology', title: 'Possessive love across the anthology' },
  { slug: 'nature-and-love-theme-across-anthology', title: 'Nature and love across the anthology' },
  { slug: 'memory-and-love-theme-across-anthology', title: 'Memory and love across the anthology' },
  { slug: 'time-and-love-theme-across-anthology', title: 'Time and love across the anthology' },
  {
    slug: 'distance-and-love-theme-across-anthology',
    title: 'Distance and love across the anthology',
  },
]

const techniquePages = [
  {
    slug: 'how-to-answer-aqa-love-relationships-comparison',
    title: 'How to answer the AQA Love and Relationships comparison question',
  },
  {
    slug: 'best-poems-to-learn-love-relationships',
    title: 'The best poems to learn for Love and Relationships',
  },
  {
    slug: 'key-quotes-love-relationships-all-poems',
    title: 'Key quotes for every Love and Relationships poem',
  },
  {
    slug: 'form-and-structure-love-relationships',
    title: 'Form and structure across Love and Relationships',
  },
  {
    slug: 'easy-comparison-pairings-love-relationships',
    title: 'The easiest comparison pairings in the anthology',
  },
  {
    slug: 'context-across-love-relationships-poems',
    title: 'Context across the Love and Relationships poems',
  },
  {
    slug: 'how-to-write-grade-9-love-relationships-essay',
    title: 'How to write a Grade 9 Love and Relationships essay',
  },
]

export default async function AqaLoveRelationshipsHub() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const tBreadHome = await t('analysis.breadcrumb.home')
  const tBreadAnalysis = await t('analysis.breadcrumb.analysis')
  const tH1Suffix = await t('analysis.text.h1_short')
  const tByline = await t('analysis.byline.markers')
  const tIntro = await t('analysis.love.intro')
  const tHowH2 = await t('analysis.how_to_use.h2')
  const tHowBody = await t('analysis.love.how.body')
  const tHowCta = await t('analysis.love.how.cta')
  const tCompH2 = await t('analysis.love.compare.h2')
  const tCompBody = await t('analysis.love.compare.body')
  const tThemeH2 = await t('analysis.love.themes.h2')
  const tThemeBody = await t('analysis.love.themes.body')
  const tTechH2 = await t('analysis.love.technique.h2')
  const tTechBody = await t('analysis.love.technique.body')
  const tFootH2 = await t('analysis.love.foot.h2')
  const tFootBody = await t('analysis.love.foot.body')
  const tFootCta = await t('analysis.love.foot.cta')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AQA Love and Relationships Analysis Hub',
    description:
      'A collection of AQA Love and Relationships analysis pages covering comparisons, themes, quotes and exam technique for GCSE English Literature.',
    url: 'https://theenglishhub.app/analysis/aqa-love-relationships',
    author: { '@type': 'Organization', name: 'The English Hub' },
  }

  return (
    <AnalysisBoardGate>
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LearningResourceJsonLd
          name="AQA Love and Relationships Analysis: Comparisons, Themes & Quotes"
          description="In-depth AQA Love and Relationships poetry analysis for GCSE. Compare poems side-by-side, explore every theme and master the unseen comparison question. Written by GCSE markers."
          educationalLevel="GCSE"
          learningResourceType="Study guide"
          about="AQA Love and Relationships poetry"
          url="https://theenglishhub.app/analysis/aqa-love-relationships"
          nonce={nonce}
        />
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://theenglishhub.app' },
            { name: 'Analysis', url: 'https://theenglishhub.app/analysis' },
            {
              name: 'AQA Love and Relationships Analysis: Comparisons, Themes & Quotes',
              url: 'https://theenglishhub.app/analysis/aqa-love-relationships',
            },
          ]}
          nonce={nonce}
        />
        <nav className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            {tBreadHome}
          </Link>
          <span className="mx-2">/</span>
          <span>{tBreadAnalysis}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">AQA Love and Relationships</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          AQA Love and Relationships {tH1Suffix}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{tByline}</p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{tIntro}</p>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">{tHowH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{tHowBody}</p>
          <div className="mt-4">
            <Link
              href="/revision/poetry/love-and-relationships"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              {tHowCta}
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">{tCompH2}</h2>
          <p className="mt-2 text-muted-foreground">{tCompBody}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {comparisonPages.map((q) => (
              <li key={q.slug}>
                <Link
                  href={`/analysis/aqa-love-relationships/${q.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  <span className="font-semibold">{q.title}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{q.sub}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">{tThemeH2}</h2>
          <p className="mt-2 text-muted-foreground">{tThemeBody}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {themePages.map((theme) => (
              <li key={theme.slug}>
                <Link
                  href={`/analysis/aqa-love-relationships/${theme.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {theme.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">{tTechH2}</h2>
          <p className="mt-2 text-muted-foreground">{tTechBody}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {techniquePages.map((tech) => (
              <li key={tech.slug}>
                <Link
                  href={`/analysis/aqa-love-relationships/${tech.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {tech.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="text-xl font-semibold text-foreground">{tFootH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{tFootBody}</p>
          <div className="mt-4">
            <Link
              href="/revision/poetry/love-and-relationships"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              {tFootCta}
            </Link>
          </div>
        </section>
      </main>
    </AnalysisBoardGate>
  )
}
