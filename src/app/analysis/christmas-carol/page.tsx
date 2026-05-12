import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'A Christmas Carol Analysis — Quotes, Characters & Themes',
  description:
    'In-depth GCSE analysis of A Christmas Carol by Charles Dickens. Key quotations, character studies, themes and Grade 9 essay guidance written by GCSE markers.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/christmas-carol',
  },
  openGraph: {
    title: 'A Christmas Carol Analysis — Quotes, Characters & Themes',
    description:
      'In-depth GCSE analysis of A Christmas Carol by Charles Dickens. Key quotations, character studies, themes and Grade 9 essay guidance.',
    url: 'https://theenglishhub.app/analysis/christmas-carol',
    type: 'article',
  },
}

const quoteAnalyses: { slug: string; title: string; blurb: string }[] = [
  {
    slug: 'squeezing-wrenching-grasping-scraping',
    title: '"Squeezing, wrenching, grasping, scraping"',
    blurb: "Dickens's asyndetic list of verbs exposing Scrooge's miserly greed.",
  },
  {
    slug: 'solitary-as-an-oyster',
    title: '"Solitary as an oyster"',
    blurb: "The famous simile characterising Scrooge's emotional isolation.",
  },
  {
    slug: 'are-there-no-prisons',
    title: '"Are there no prisons?"',
    blurb: "Scrooge's callous echo of Malthusian Victorian attitudes.",
  },
  {
    slug: 'decrease-the-surplus-population',
    title: '"Decrease the surplus population"',
    blurb: 'The phrase that haunts Scrooge throughout the novella.',
  },
  {
    slug: 'mankind-was-my-business',
    title: '"Mankind was my business"',
    blurb: "Marley's anguished revelation about moral duty.",
  },
  {
    slug: 'i-wear-the-chain-i-forged-in-life',
    title: '"I wear the chain I forged in life"',
    blurb: "Marley's metaphor for the consequences of sin.",
  },
  {
    slug: 'god-bless-us-every-one',
    title: '"God bless us, every one!"',
    blurb: "Tiny Tim's closing benediction and its symbolic weight.",
  },
  {
    slug: 'ignorance-and-want-analysis',
    title: 'Ignorance and Want',
    blurb: "The allegorical children revealed beneath the Ghost of Christmas Present's robe.",
  },
  {
    slug: 'bah-humbug-meaning',
    title: '"Bah! Humbug!"',
    blurb: "Scrooge's signature dismissal of Christmas joy and generosity.",
  },
  {
    slug: 'marleys-ghost-analysis',
    title: "Marley's Ghost",
    blurb: "Analysis of Marley's spectral warning and Gothic entrance.",
  },
  {
    slug: 'good-old-fezziwig',
    title: '"Good old Fezziwig"',
    blurb: "Dickens's model of the benevolent capitalist employer.",
  },
  {
    slug: 'tiny-tim-blessing',
    title: "Tiny Tim's Blessing",
    blurb: 'Analysis of Tim\'s church reflections and the "crutch without an owner".',
  },
  {
    slug: 'his-own-heart-laughed',
    title: '"His own heart laughed"',
    blurb: "Scrooge's jubilant transformation in Stave Five.",
  },
  {
    slug: 'i-am-as-light-as-a-feather',
    title: '"I am as light as a feather"',
    blurb: "Scrooge's ecstatic simile after his redemption.",
  },
  {
    slug: 'the-chains-he-drew-were-clasped',
    title: '"The chain he drew was clasped about his middle"',
    blurb: "Dickens's Gothic description of Marley's burden.",
  },
]

const characterThemePages: { slug: string; title: string; blurb: string }[] = [
  {
    slug: 'scrooge-character-analysis',
    title: 'Scrooge Character Analysis',
    blurb: "Full study of Ebenezer Scrooge's transformation across the five staves.",
  },
  {
    slug: 'bob-cratchit-character-analysis',
    title: 'Bob Cratchit Character Analysis',
    blurb: 'The loyal, impoverished clerk who embodies Victorian working-class dignity.',
  },
  {
    slug: 'tiny-tim-character-analysis',
    title: 'Tiny Tim Character Analysis',
    blurb: 'The vulnerable child whose suffering exposes systemic cruelty.',
  },
  {
    slug: 'fred-character-analysis',
    title: 'Fred Character Analysis',
    blurb: "Scrooge's cheerful nephew and the novella's advocate of Christmas spirit.",
  },
  {
    slug: 'jacob-marley-character-analysis',
    title: 'Jacob Marley Character Analysis',
    blurb: 'The chained ghost whose warning sets the narrative in motion.',
  },
  {
    slug: 'redemption-theme-analysis',
    title: 'Redemption Theme',
    blurb: "How Dickens structures Scrooge's moral and spiritual salvation.",
  },
  {
    slug: 'poverty-theme-analysis',
    title: 'Poverty Theme',
    blurb: "Dickens's condemnation of Victorian inequality and the Poor Laws.",
  },
  {
    slug: 'family-theme-analysis',
    title: 'Family Theme',
    blurb: 'The Cratchits and Fred as symbols of love over wealth.',
  },
  {
    slug: 'dickens-victorian-context',
    title: 'Dickens & Victorian Context',
    blurb: 'The social, economic and philosophical backdrop to the novella.',
  },
  {
    slug: 'how-to-write-grade-9-christmas-carol-essay',
    title: 'How to Write a Grade 9 Essay',
    blurb: 'Marker-written structure, language and context tips for top marks.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'A Christmas Carol Analysis Hub',
  description:
    'Comprehensive GCSE analysis of A Christmas Carol by Charles Dickens, including key quotations, characters, themes and essay guidance.',
  url: 'https://theenglishhub.app/analysis/christmas-carol',
  author: {
    '@type': 'Organization',
    name: 'The English Hub',
  },
  about: {
    '@type': 'Book',
    name: 'A Christmas Carol',
    author: { '@type': 'Person', name: 'Charles Dickens' },
    datePublished: '1843-12-19',
  },
}

export default async function ChristmasCarolAnalysisHub() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const tEyebrow = await t('analysis.eyebrow.lit')
  const tH1Short = await t('analysis.text.h1_short')
  const tCarolIntro = await t('analysis.carol.intro')
  const tByline2026 = await t('analysis.byline.markers_updated')
  const tCarolQuoteH2 = await t('analysis.carol.quotes.h2')
  const tCarolCharH2 = await t('analysis.carol.char.h2')
  const tCarolFootH2 = await t('analysis.carol.foot.h2')
  const tCarolFootBody = await t('analysis.carol.foot.body')
  const tOpenRevHub = await t('analysis.cta.open_revision_hub')

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LearningResourceJsonLd
        name="A Christmas Carol Analysis — Quotes, Characters & Themes"
        description="In-depth GCSE analysis of A Christmas Carol by Charles Dickens. Key quotations, character studies, themes and Grade 9 essay guidance written by GCSE markers."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="A Christmas Carol"
        url="https://theenglishhub.app/analysis/christmas-carol"
        nonce={nonce}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Analysis', url: 'https://theenglishhub.app/analysis' },
          {
            name: 'A Christmas Carol Analysis — Quotes, Characters & Themes',
            url: 'https://theenglishhub.app/analysis/christmas-carol',
          },
        ]}
        nonce={nonce}
      />

      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{tEyebrow}</p>
        <h1 className="text-4xl font-heading font-bold text-foreground sm:text-5xl">
          A Christmas Carol {tH1Short}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{tCarolIntro}</p>
        <p className="text-sm text-muted-foreground">{tByline2026}</p>
      </header>

      <section>
        <h2 className="mb-6 text-2xl font-heading font-bold text-foreground">{tCarolQuoteH2}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quoteAnalyses.map((q) => (
            <Link
              key={q.slug}
              href={`/analysis/christmas-carol/${q.slug}`}
              className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-card-hover"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                {q.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{q.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-heading font-bold text-foreground">{tCarolCharH2}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {characterThemePages.map((p) => (
            <Link
              key={p.slug}
              href={`/analysis/christmas-carol/${p.slug}`}
              className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-card-hover"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-heading font-bold text-foreground">{tCarolFootH2}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{tCarolFootBody}</p>
        <Link
          href="/revision/texts"
          className="mt-6 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {tOpenRevHub}
        </Link>
      </section>
    </div>
  )
}
