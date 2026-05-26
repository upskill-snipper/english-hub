import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { AnalysisBoardGate } from './_components/AnalysisBoardGate'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Macbeth Analysis: Quotes, Themes & Characters',
  description:
    'In-depth Macbeth analysis for GCSE. Explore 15 famous quotes line-by-line, key themes like ambition and guilt, and character studies of Macbeth, Lady Macbeth and Banquo. Written by GCSE markers.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth' },
  openGraph: {
    title: 'Macbeth Analysis Hub - The English Hub',
    description:
      'Grade 9 Macbeth analysis: quotes, themes, characters and essay writing, written by GCSE markers.',
  },
}

const quotePages = [
  { slug: 'fair-is-foul-and-foul-is-fair', title: '"Fair is foul, and foul is fair"' },
  {
    slug: 'is-this-a-dagger-which-i-see-before-me',
    title: '"Is this a dagger which I see before me?"',
  },
  { slug: 'out-damned-spot', title: '"Out, damned spot!"' },
  { slug: 'tomorrow-and-tomorrow-and-tomorrow', title: '"Tomorrow, and tomorrow, and tomorrow"' },
  {
    slug: 'screw-your-courage-to-the-sticking-place',
    title: '"Screw your courage to the sticking-place"',
  },
  { slug: 'vaulting-ambition', title: '"Vaulting ambition, which o\'erleaps itself"' },
  { slug: 'unsex-me-here', title: '"Unsex me here"' },
  { slug: 'the-milk-of-human-kindness', title: '"The milk of human kindness"' },
  { slug: 'double-double-toil-and-trouble', title: '"Double, double toil and trouble"' },
  {
    slug: 'look-like-the-innocent-flower',
    title: '"Look like the innocent flower, but be the serpent under\'t"',
  },
  { slug: 'a-tale-told-by-an-idiot', title: '"A tale told by an idiot"' },
  { slug: 'macbeth-shall-sleep-no-more', title: '"Macbeth shall sleep no more"' },
  { slug: 'life-is-but-a-walking-shadow', title: '"Life\'s but a walking shadow"' },
  { slug: 'blood-will-have-blood', title: '"Blood will have blood"' },
  { slug: 'all-the-perfumes-of-arabia', title: '"All the perfumes of Arabia"' },
]

const themePages = [
  { slug: 'ambition-theme-analysis', title: 'Ambition - Theme Analysis' },
  { slug: 'guilt-theme-analysis', title: 'Guilt - Theme Analysis' },
  { slug: 'supernatural-theme-analysis', title: 'The Supernatural - Theme Analysis' },
  { slug: 'kingship-theme-analysis', title: 'Kingship - Theme Analysis' },
  { slug: 'gender-theme-analysis', title: 'Gender - Theme Analysis' },
  { slug: 'appearance-vs-reality-theme', title: 'Appearance vs Reality - Theme Analysis' },
  { slug: 'lady-macbeth-character-analysis', title: 'Lady Macbeth - Character Analysis' },
  { slug: 'macbeth-character-analysis', title: 'Macbeth - Character Analysis' },
  { slug: 'banquo-character-analysis', title: 'Banquo - Character Analysis' },
  { slug: 'how-to-write-a-grade-9-macbeth-essay', title: 'How to Write a Grade 9 Macbeth Essay' },
]

export default async function MacbethAnalysisHub() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const tBreadHome = await t('analysis.breadcrumb.home')
  const tBreadAnalysis = await t('analysis.breadcrumb.analysis')
  const tH1Suffix = await t('analysis.text.h1_suffix')
  const tByline = await t('analysis.byline.markers')
  const tIntroLead = await t('analysis.macbeth.intro')
  const tHowH2 = await t('analysis.how_to_use.h2')
  const tHowMacbethBody = await t('analysis.macbeth.how_to_use_body')
  const tOpenMacbethNotes = await t('analysis.macbeth.cta.notes')
  const tQuoteH2 = await t('analysis.macbeth.quotes.h2')
  const tQuoteBody = await t('analysis.macbeth.quotes.body')
  const tThemeH2 = await t('analysis.macbeth.themes.h2')
  const tThemeBody = await t('analysis.macbeth.themes.body')
  const tFootH2 = await t('analysis.macbeth.foot.h2')
  const tFootBody = await t('analysis.macbeth.foot.body')
  const tFootCta = await t('analysis.macbeth.foot.cta')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Macbeth Analysis Hub',
    description:
      'A collection of Macbeth analysis pages covering key quotes, themes and characters for GCSE English Literature.',
    url: 'https://theenglishhub.app/analysis/macbeth',
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
          name="Macbeth Analysis: Quotes, Themes & Characters"
          description="In-depth Macbeth analysis for GCSE. Explore 15 famous quotes line-by-line, key themes like ambition and guilt, and character studies of Macbeth, Lady Macbeth and Banquo. Written by GCSE markers."
          educationalLevel="GCSE"
          learningResourceType="Study guide"
          about="Macbeth"
          url="https://theenglishhub.app/analysis/macbeth"
          nonce={nonce}
        />
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://theenglishhub.app' },
            { name: 'Analysis', url: 'https://theenglishhub.app/analysis' },
            {
              name: 'Macbeth Analysis: Quotes, Themes & Characters',
              url: 'https://theenglishhub.app/analysis/macbeth',
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
          <span className="text-foreground">Macbeth</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Macbeth {tH1Suffix}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{tByline}</p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{tIntroLead}</p>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">{tHowH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{tHowMacbethBody}</p>
          <div className="mt-4">
            <Link
              href="/resources/revision-notes/macbeth"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              {tOpenMacbethNotes}
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">{tQuoteH2}</h2>
          <p className="mt-2 text-muted-foreground">{tQuoteBody}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {quotePages.map((q) => (
              <li key={q.slug}>
                <Link
                  href={`/analysis/macbeth/${q.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {q.title}
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
                  href={`/analysis/macbeth/${theme.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {theme.title}
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
              href="/resources/revision-notes/macbeth"
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
