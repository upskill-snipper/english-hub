import Link from 'next/link'
import { headers } from 'next/headers'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, Quote, Sparkles, Users, Library, GraduationCap } from 'lucide-react'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Analysis — Quotes, Characters & Themes',
  description:
    'In-depth Jekyll and Hyde analysis for GCSE English Literature. Quote breakdowns, 4 character studies, 4 theme essays, Victorian context and a Grade 9 essay guide — written by GCSE markers.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde',
  },
  openGraph: {
    title: 'Jekyll and Hyde Analysis Hub — The English Hub',
    description:
      'Line-by-line Jekyll and Hyde quote analysis, character studies, theme essays and Victorian context for AQA, Edexcel and OCR GCSE English Literature.',
    type: 'article',
  },
}

const quoteAnalyses = [
  {
    title: '"Ape-like fury"',
    slug: 'ape-like-fury',
    blurb:
      'Atavism, Darwinian anxiety and the Carew murder scene — why Stevenson compares Hyde to a primate.',
  },
  {
    title: '"Something troglodytic"',
    slug: 'something-troglodytic',
    blurb:
      'Degeneration theory, physiognomy and the Gothic "other" in Utterson\'s response to Hyde.',
  },
  {
    title: '"Satan\'s signature upon a face"',
    slug: 'satans-signature-on-a-face',
    blurb:
      'Religious imagery, moral physiognomy and the Victorian idea that evil can be read on the body.',
  },
  {
    title: '"The polite fiction of the law"',
    slug: 'the-polite-fiction-of-the-law',
    blurb: 'Utterson, hypocrisy and the Victorian obsession with reputation over reality.',
  },
  {
    title: '"Downright detestable"',
    slug: 'downright-detestable',
    blurb: "Enfield's visceral, irrational disgust at Hyde and the limits of rational description.",
  },
  {
    title: 'Dual nature of man quotes',
    slug: 'dual-nature-of-man-quotes',
    blurb:
      'Six quotations on duality, ranked by how markers reward them, with textual reference and context links.',
  },
  {
    title: 'Fog symbolism analysis',
    slug: 'fog-symbolism-analysis',
    blurb:
      'How the "chocolate-coloured pall" and "swirling wreaths" of fog dramatise moral ambiguity.',
  },
  {
    title: 'Door symbolism analysis',
    slug: 'door-symbolism-analysis',
    blurb: 'The "blistered and distained" door, secrecy, repression and the Gothic threshold.',
  },
  {
    title: '"With the sea of liberty before me"',
    slug: 'with-the-sea-of-liberty-before-me',
    blurb: "Jekyll's euphoric first transformation — freedom, repression and the hedonistic id.",
  },
]

const characterTheme = [
  {
    title: 'Dr Jekyll character analysis',
    slug: 'dr-jekyll-character-analysis',
    blurb:
      'The "large, well-made, smooth-faced man of fifty" — hypocrisy, hubris and tragic downfall.',
    group: 'Character',
  },
  {
    title: 'Mr Hyde character analysis',
    slug: 'mr-hyde-character-analysis',
    blurb:
      'Atavism, the id and the Gothic double — how Stevenson constructs a walking embodiment of evil.',
    group: 'Character',
  },
  {
    title: 'Mr Utterson character analysis',
    slug: 'mr-utterson-character-analysis',
    blurb: 'The "lean, long, dusty, dreary" lawyer as reliable narrator and moral anchor.',
    group: 'Character',
  },
  {
    title: 'Dr Lanyon character analysis',
    slug: 'dr-lanyon-character-analysis',
    blurb:
      'The rational scientist whose faith in "transcendental medicine" is literally shattered.',
    group: 'Character',
  },
  {
    title: 'Duality theme analysis',
    slug: 'duality-theme-analysis',
    blurb:
      'Duality across setting, structure, character and language — the spine of the whole novella.',
    group: 'Theme',
  },
  {
    title: 'Good and evil theme analysis',
    slug: 'good-and-evil-theme-analysis',
    blurb:
      'Stevenson\'s refusal of simple moral binaries and why Hyde is not "pure evil" but pure selfishness.',
    group: 'Theme',
  },
  {
    title: 'Repression theme analysis',
    slug: 'repression-theme-analysis',
    blurb:
      'Victorian respectability, Jekyll\'s "disgraceful pleasures", and proto-Freudian repression.',
    group: 'Theme',
  },
  {
    title: 'Science theme analysis',
    slug: 'science-theme-analysis',
    blurb: '"Transcendental medicine", Darwin and the Gothic fear of unregulated experimentation.',
    group: 'Theme',
  },
  {
    title: 'Victorian society context',
    slug: 'victorian-society-context',
    blurb: 'Fin-de-siècle London, the 1885 Labouchere Amendment, Darwinism and the class divide.',
    group: 'Context',
  },
  {
    title: 'How to write a Grade 9 Jekyll and Hyde essay',
    slug: 'how-to-write-grade-9-jekyll-hyde-essay',
    blurb:
      'Thesis, topic sentences, zoomed-in language and structure analysis, context weaving and the conclusion markers reward.',
    group: 'Essay guide',
  },
]

export default async function JekyllHydeHubPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const hubJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Jekyll and Hyde Analysis Hub',
    url: 'https://theenglishhub.app/analysis/jekyll-hyde',
    description:
      'Jekyll and Hyde quote analysis, character studies and theme essays for GCSE English Literature.',
    about: {
      '@type': 'Book',
      name: 'Strange Case of Dr Jekyll and Mr Hyde',
      author: { '@type': 'Person', name: 'Robert Louis Stevenson' },
      datePublished: '1886',
    },
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />
      <LearningResourceJsonLd
        name="Jekyll and Hyde Analysis — Quotes, Characters & Themes"
        description="In-depth Jekyll and Hyde analysis for GCSE English Literature. Quote breakdowns, 4 character studies, 4 theme essays, Victorian context and a Grade 9 essay guide — written by GCSE markers."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="Strange Case of Dr Jekyll and Mr Hyde"
        url="https://theenglishhub.app/analysis/jekyll-hyde"
        nonce={nonce}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Analysis', url: 'https://theenglishhub.app/analysis' },
          {
            name: 'Jekyll and Hyde Analysis — Quotes, Characters & Themes',
            url: 'https://theenglishhub.app/analysis/jekyll-hyde',
          },
        ]}
        nonce={nonce}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-violet-500/5 p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            <Sparkles className="size-3" />
            GCSE English Literature
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Jekyll and Hyde Analysis
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Line-by-line quote analysis, character studies, theme essays and Victorian context for
            Robert Louis Stevenson&rsquo;s 1886 Gothic novella. Every page is written by GCSE
            markers and mapped to AQA, Edexcel and OCR marking guides.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/revision/texts/jekyll-and-hyde"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Full revision guide
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/resources/revision-notes/jekyll-and-hyde"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <BookOpen className="size-3.5" />
              Revision notes
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <GraduationCap className="size-4 text-primary" aria-hidden="true" />
            Written by <strong className="text-foreground">GCSE markers</strong> at The English Hub
          </p>
        </div>
      </section>

      {/* Quote analyses */}
      <section className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <Quote className="size-5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Quote &amp; symbol analyses</h2>
            <p className="text-sm text-muted-foreground">
              Close-reading pages on the most examinable quotations in the novella.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {quoteAnalyses.map((q) => (
            <li key={q.slug}>
              <Link
                href={`/analysis/jekyll-hyde/${q.slug}`}
                className="group flex h-full flex-col justify-between gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-violet-500/40 hover:bg-muted"
              >
                <div>
                  <h3 className="text-sm font-bold leading-snug text-foreground group-hover:text-violet-400">
                    {q.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{q.blurb}</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-violet-500">
                  Read analysis <ArrowRight className="size-3" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Character, theme, context, essay */}
      <section className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
            <Users className="size-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Characters, themes, context &amp; essay guide
            </h2>
            <p className="text-sm text-muted-foreground">
              10 long-read pages covering every character, theme and context point on the spec.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {characterTheme.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/analysis/jekyll-hyde/${item.slug}`}
                className="group flex h-full flex-col justify-between gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-blue-500/40 hover:bg-muted"
              >
                <div>
                  <span className="mb-1 inline-block rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-500">
                    {item.group}
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-foreground group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.blurb}</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-blue-500">
                  Read analysis <ArrowRight className="size-3" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Secondary CTA */}
      <section className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Library className="mt-1 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Studying Jekyll and Hyde for GCSE?
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              The English Hub&rsquo;s full revision hub includes chapter summaries, 25+ annotated
              quotations, theme trackers, model essays at Grade 5, 7 and 9, and AI essay feedback
              trained on the AQA, Edexcel and OCR marking guides.
            </p>
            <Link
              href="/revision/texts/jekyll-and-hyde"
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Open the revision hub
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
