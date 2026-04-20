import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { AnalysisBoardGate } from './_components/AnalysisBoardGate'

export const metadata: Metadata = {
  title: 'Macbeth Analysis: Quotes, Themes & Characters | The English Hub',
  description:
    'In-depth Macbeth analysis for GCSE. Explore 15 famous quotes line-by-line, key themes like ambition and guilt, and character studies of Macbeth, Lady Macbeth and Banquo. Written by GCSE markers.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth' },
  openGraph: {
    title: 'Macbeth Analysis Hub — The English Hub',
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
  { slug: 'ambition-theme-analysis', title: 'Ambition — Theme Analysis' },
  { slug: 'guilt-theme-analysis', title: 'Guilt — Theme Analysis' },
  { slug: 'supernatural-theme-analysis', title: 'The Supernatural — Theme Analysis' },
  { slug: 'kingship-theme-analysis', title: 'Kingship — Theme Analysis' },
  { slug: 'gender-theme-analysis', title: 'Gender — Theme Analysis' },
  { slug: 'appearance-vs-reality-theme', title: 'Appearance vs Reality — Theme Analysis' },
  { slug: 'lady-macbeth-character-analysis', title: 'Lady Macbeth — Character Analysis' },
  { slug: 'macbeth-character-analysis', title: 'Macbeth — Character Analysis' },
  { slug: 'banquo-character-analysis', title: 'Banquo — Character Analysis' },
  { slug: 'how-to-write-a-grade-9-macbeth-essay', title: 'How to Write a Grade 9 Macbeth Essay' },
]

export default function MacbethAnalysisHub() {
  const nonce = headers().get('x-nonce') ?? undefined
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
        <nav className="mb-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Analysis</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Macbeth</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Macbeth Analysis: Quotes, Themes and Characters
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Written by GCSE markers</p>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Welcome to The English Hub&apos;s Macbeth analysis hub. Every page below is written by
          experienced GCSE English Literature markers and targets the specific questions students
          type into search engines the night before an essay is due. Whether you need a line-by-line
          reading of a famous quote, a full theme breakdown, or a character study, you will find
          Grade 9-standard explanations, context and critical vocabulary you can drop straight into
          your own writing.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">How to use this hub</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Start with a quote you need to unpack, then move to the related theme page to see how it
            fits into the wider argument of the play. Finish with the character analysis for the
            person speaking the line so you can trace their development across the five acts. Every
            page links back here, and every page links onward to the main Macbeth revision notes so
            you can zoom out whenever you need the plot and context.
          </p>
          <div className="mt-4">
            <Link
              href="/resources/revision-notes/macbeth"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              Open the Macbeth revision notes
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Quote analysis (15)</h2>
          <p className="mt-2 text-muted-foreground">
            Line-by-line analysis of the most-searched Macbeth quotes. Each page includes meaning,
            literary devices, context, and how to use the quote in an essay.
          </p>
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
          <h2 className="text-2xl font-bold text-foreground">Themes, characters and essays (10)</h2>
          <p className="mt-2 text-muted-foreground">
            Deep-dive analyses of every major theme, the three key characters, and a Grade 9 essay
            walkthrough.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {themePages.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/analysis/macbeth/${t.slug}`}
                  className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="text-xl font-semibold text-foreground">Ready to revise the whole play?</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These analysis pages are designed to sit alongside our full Macbeth revision notes,
            which cover plot, context, form and structure, and every act in order. If you are
            preparing for a closed-book exam, start there and use the analysis pages to sharpen the
            quotations you plan to memorise.
          </p>
          <div className="mt-4">
            <Link
              href="/resources/revision-notes/macbeth"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              Go to full Macbeth revision notes
            </Link>
          </div>
        </section>
      </main>
    </AnalysisBoardGate>
  )
}
