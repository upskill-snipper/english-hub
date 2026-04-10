import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from './_components/AnalysisBoardGate'

export const metadata: Metadata = {
  title: 'AQA Love and Relationships Analysis: Comparisons, Themes & Quotes | The English Hub',
  description:
    'In-depth AQA Love and Relationships poetry analysis for GCSE. Compare poems side-by-side, explore every theme and master the unseen comparison question. Written by GCSE examiners.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/aqa-love-relationships' },
  openGraph: {
    title: 'AQA Love and Relationships Analysis Hub — The English Hub',
    description:
      'Grade 9 AQA Love and Relationships analysis: poem comparisons, themes, quotes and essay writing, written by GCSE examiners.',
  },
}

const comparisonPages = [
  { slug: 'sonnet-29-vs-loves-philosophy', title: 'Sonnet 29 vs Love\u2019s Philosophy', sub: 'Romantic longing' },
  { slug: 'porphyrias-lover-vs-my-last-duchess', title: 'Porphyria\u2019s Lover vs My Last Duchess', sub: 'Possessive love' },
  { slug: 'neutral-tones-vs-when-we-two-parted', title: 'Neutral Tones vs When We Two Parted', sub: 'Lost love' },
  { slug: 'mother-any-distance-vs-follower', title: 'Mother, Any Distance vs Follower', sub: 'Parent\u2013child love' },
  { slug: 'walking-away-vs-before-you-were-mine', title: 'Walking Away vs Before You Were Mine', sub: 'Parental perspective' },
  { slug: 'letters-from-yorkshire-vs-singh-song', title: 'Letters from Yorkshire vs Singh Song!', sub: 'Love across distance and culture' },
  { slug: 'climbing-my-grandfather-vs-follower', title: 'Climbing My Grandfather vs Follower', sub: 'Admiration for an older figure' },
  { slug: 'eden-rock-vs-walking-away', title: 'Eden Rock vs Walking Away', sub: 'Memory of parents' },
  { slug: 'winter-swans-vs-neutral-tones', title: 'Winter Swans vs Neutral Tones', sub: 'Relationship breakdown' },
  { slug: 'sonnet-29-vs-porphyrias-lover', title: 'Sonnet 29 vs Porphyria\u2019s Lover', sub: 'Obsessive love' },
]

const themePages = [
  { slug: 'romantic-love-theme-across-anthology', title: 'Romantic love across the anthology' },
  { slug: 'family-love-theme-across-anthology', title: 'Family love across the anthology' },
  { slug: 'lost-love-theme-across-anthology', title: 'Lost love across the anthology' },
  { slug: 'possessive-love-theme-across-anthology', title: 'Possessive love across the anthology' },
  { slug: 'nature-and-love-theme-across-anthology', title: 'Nature and love across the anthology' },
  { slug: 'memory-and-love-theme-across-anthology', title: 'Memory and love across the anthology' },
  { slug: 'time-and-love-theme-across-anthology', title: 'Time and love across the anthology' },
  { slug: 'distance-and-love-theme-across-anthology', title: 'Distance and love across the anthology' },
]

const techniquePages = [
  { slug: 'how-to-answer-aqa-love-relationships-comparison', title: 'How to answer the AQA Love and Relationships comparison question' },
  { slug: 'best-poems-to-learn-love-relationships', title: 'The best poems to learn for Love and Relationships' },
  { slug: 'key-quotes-love-relationships-all-poems', title: 'Key quotes for every Love and Relationships poem' },
  { slug: 'form-and-structure-love-relationships', title: 'Form and structure across Love and Relationships' },
  { slug: 'easy-comparison-pairings-love-relationships', title: 'The easiest comparison pairings in the anthology' },
  { slug: 'context-across-love-relationships-poems', title: 'Context across the Love and Relationships poems' },
  { slug: 'how-to-write-grade-9-love-relationships-essay', title: 'How to write a Grade 9 Love and Relationships essay' },
]

export default function AqaLoveRelationshipsHub() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span>Analysis</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">AQA Love and Relationships</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AQA Love and Relationships Analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Welcome to The English Hub&apos;s AQA Love and Relationships analysis hub. The AQA
        anthology question asks you to compare how two poets present a given idea, and the
        examiner is looking for a confident, conceptualised argument that moves beyond feature
        spotting. Every page below is written by experienced GCSE English Literature examiners
        and targets the exact question students type into search engines the night before a
        mock: how two specific poems compare, how a theme is presented across the cluster, or
        how to structure a Grade 9 comparison paragraph.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">How to use this hub</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Start with the pair of poems you already know best, then move to the theme page that
          connects them. Read the exam technique pages last so you can rehearse the sentence
          starters and comparison connectives on content you already understand. Every page
          links back here and on to the main Love and Relationships revision notes.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/poetry/love-and-relationships"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Open the Love and Relationships revision notes
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Poem comparisons (10)</h2>
        <p className="mt-2 text-muted-foreground">
          Side-by-side readings of the ten most-searched comparison pairings. Each page gives
          you a thesis, three comparison paragraphs and a model conclusion.
        </p>
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
        <h2 className="text-2xl font-bold text-foreground">Themes across the anthology (8)</h2>
        <p className="mt-2 text-muted-foreground">
          Thematic sweeps of the whole cluster. Use these when you want to know which poems
          to pair for a given exam prompt.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {themePages.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/analysis/aqa-love-relationships/${t.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Exam technique and essay writing (7)</h2>
        <p className="mt-2 text-muted-foreground">
          Step-by-step guides to the comparison question, including which poems to memorise,
          how to plan, and how to push a good answer into Grade 9 territory.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {techniquePages.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/analysis/aqa-love-relationships/${t.slug}`}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
              >
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Ready to revise the whole anthology?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          These analysis pages are designed to sit alongside our full Love and Relationships
          revision notes, which cover every poem in order with annotated text, context and
          suggested comparisons. If you are preparing for a closed-book exam, start there and
          use the analysis pages to sharpen the quotations and comparisons you plan to use.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/poetry/love-and-relationships"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Go to full Love and Relationships revision notes
          </Link>
        </div>
      </section>
    </main>
    </AnalysisBoardGate>
  )
}
