import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { AnalysisBoardGate } from './_components/AnalysisBoardGate'

export const metadata: Metadata = {
  title: 'AQA Power and Conflict Poetry Analysis: Comparisons, Themes & Quotes | The English Hub',
  description:
    'Complete AQA Power and Conflict poetry analysis hub. 25 Grade 9 pages covering comparisons, themes, key quotes and exam technique. Written by GCSE markers.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/aqa-power-conflict' },
  openGraph: {
    title: 'AQA Power and Conflict Analysis Hub — The English Hub',
    description:
      'Grade 9 AQA Power and Conflict analysis: poem comparisons, theme essays, key quotes and exam technique.',
  },
}

const comparisonPages = [
  { slug: 'ozymandias-vs-my-last-duchess', title: 'Ozymandias vs My Last Duchess' },
  { slug: 'ozymandias-vs-london', title: 'Ozymandias vs London' },
  { slug: 'exposure-vs-storm-on-the-island', title: 'Exposure vs Storm on the Island' },
  { slug: 'remains-vs-war-photographer', title: 'Remains vs War Photographer' },
  { slug: 'poppies-vs-war-photographer', title: 'Poppies vs War Photographer' },
  {
    slug: 'bayonet-charge-vs-the-charge-of-the-light-brigade',
    title: 'Bayonet Charge vs Charge of the Light Brigade',
  },
  {
    slug: 'checking-out-me-history-vs-the-emigree',
    title: 'Checking Out Me History vs The Emigrée',
  },
  { slug: 'kamikaze-vs-my-last-duchess', title: 'Kamikaze vs My Last Duchess' },
  { slug: 'tissue-vs-ozymandias', title: 'Tissue vs Ozymandias' },
  { slug: 'the-prelude-vs-storm-on-the-island', title: 'The Prelude vs Storm on the Island' },
]

const themePages = [
  {
    slug: 'power-of-nature-theme-across-anthology',
    title: 'Power of Nature — Theme Across the Anthology',
  },
  {
    slug: 'power-of-humans-theme-across-anthology',
    title: 'Power of Humans — Theme Across the Anthology',
  },
  {
    slug: 'reality-of-conflict-theme-across-anthology',
    title: 'Reality of Conflict — Theme Across the Anthology',
  },
  { slug: 'memory-theme-across-anthology', title: 'Memory — Theme Across the Anthology' },
  { slug: 'identity-theme-across-anthology', title: 'Identity — Theme Across the Anthology' },
  { slug: 'loss-theme-across-anthology', title: 'Loss — Theme Across the Anthology' },
  { slug: 'suffering-theme-across-anthology', title: 'Suffering — Theme Across the Anthology' },
  {
    slug: 'corruption-of-power-theme-across-anthology',
    title: 'Corruption of Power — Theme Across the Anthology',
  },
]

const techniquePages = [
  {
    slug: 'how-to-answer-aqa-poetry-comparison-question',
    title: 'How to Answer the AQA Poetry Comparison Question',
  },
  {
    slug: 'best-poems-to-learn-aqa-power-conflict',
    title: 'Best Poems to Learn for AQA Power and Conflict',
  },
  {
    slug: 'key-quotes-aqa-power-conflict-all-poems',
    title: 'Key Quotes for AQA Power and Conflict (All Poems)',
  },
  { slug: 'form-and-structure-across-anthology', title: 'Form and Structure Across the Anthology' },
  {
    slug: 'easy-comparison-pairings-power-conflict',
    title: 'Easy Comparison Pairings for Power and Conflict',
  },
  {
    slug: 'context-across-power-conflict-poems',
    title: 'Context Across the Power and Conflict Poems',
  },
  {
    slug: 'how-to-write-grade-9-power-conflict-essay',
    title: 'How to Write a Grade 9 Power and Conflict Essay',
  },
]

export default function AQAPowerConflictHub() {
  const nonce = headers().get('x-nonce') ?? undefined
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AQA Power and Conflict Analysis Hub',
    description:
      'A collection of AQA Power and Conflict poetry analysis pages covering comparisons, themes, key quotes and exam technique for GCSE English Literature.',
    url: 'https://theenglishhub.app/analysis/aqa-power-conflict',
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
        <nav className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Analysis</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">AQA Power and Conflict</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          AQA Power and Conflict Poetry Analysis
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Written by GCSE markers</p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Welcome to The English Hub&apos;s AQA Power and Conflict analysis hub. Every page below is
          written by experienced GCSE English Literature markers and targets the specific questions
          students ask the night before a mock. Whether you need a head-to-head comparison of two
          poems, a theme essay that runs across the whole anthology, or a walkthrough of how to plan
          a Grade 9 essay, you will find the exact analysis, context and critical vocabulary you can
          lift straight into your own writing.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">How to use this hub</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Start with a comparison page for the pairing you are most nervous about, then move to
            the theme essay that links them. Finish with a technique page so you know exactly how to
            convert what you have just learned into marks in the exam. Every page links back here,
            and every page links onward to the main Power and Conflict revision notes so you can
            zoom out into full poem-by-poem study when you need it.
          </p>
          <div className="mt-4">
            <Link
              href="/revision/poetry/power-and-conflict"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              Open the main Power and Conflict revision notes
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Poem comparisons (10)</h2>
          <p className="mt-2 text-muted-foreground">
            Head-to-head comparisons of the most exam-likely Power and Conflict pairings. Each page
            gives you three points of comparison, three points of contrast, and a ready-made thesis
            sentence you can adapt in the exam.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {comparisonPages.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/analysis/aqa-power-conflict/${p.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Theme essays (8)</h2>
          <p className="mt-2 text-muted-foreground">
            Eight cross-anthology theme essays tracing how Power and Conflict poets treat nature,
            human power, conflict, memory, identity, loss, suffering and the corruption of power.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {themePages.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/analysis/aqa-power-conflict/${p.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Technique and exam (7)</h2>
          <p className="mt-2 text-muted-foreground">
            Everything you need to convert knowledge into marks: how the comparison question works,
            the best poems to memorise, the most quotable lines, form and structure, easy pairings,
            context and a Grade 9 essay walkthrough.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {techniquePages.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/analysis/aqa-power-conflict/${p.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Ready to revise the whole anthology?
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These analysis pages are designed to sit alongside our full Power and Conflict revision
            notes, which cover every one of the 15 poems in order with line-by-line annotation,
            context and essay plans. If you are preparing for a closed-book exam, start there and
            use the analysis pages to sharpen the comparisons and themes you plan to write about.
          </p>
          <div className="mt-4">
            <Link
              href="/revision/poetry/power-and-conflict"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              Go to full Power and Conflict revision notes
            </Link>
          </div>
        </section>
      </main>
    </AnalysisBoardGate>
  )
}
