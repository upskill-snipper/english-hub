import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English Revision & Grade Guides | The English Hub',
  description:
    'Complete GCSE English revision hub: grade 9 guides, timetables, grade boundaries, exam-day tips and parent help. 25 guides written by GCSE examiners.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/revision' },
  openGraph: {
    title: 'GCSE English Revision & Grade Guides — The English Hub',
    description:
      'Free, examiner-written GCSE English revision guides covering grade targets, revision plans, exam day prep and parent support.',
  },
}

const gradePages = [
  { slug: 'how-to-get-grade-9-gcse-english-literature', title: 'How to get a Grade 9 in GCSE English Literature' },
  { slug: 'how-to-get-grade-9-gcse-english-language', title: 'How to get a Grade 9 in GCSE English Language' },
  { slug: 'how-to-get-grade-7-gcse-english', title: 'How to get a Grade 7 in GCSE English' },
  { slug: 'how-to-pass-gcse-english-grade-5', title: 'How to pass GCSE English (Grade 5)' },
  { slug: 'gcse-english-grade-boundaries-2024', title: 'GCSE English grade boundaries 2024' },
  { slug: 'gcse-english-grade-boundaries-historical', title: 'GCSE English grade boundaries (historical)' },
  { slug: 'can-you-resit-gcse-english', title: 'Can you resit GCSE English?' },
  { slug: 'gcse-english-pass-rate-statistics', title: 'GCSE English pass rate statistics' },
]

const revisionPages = [
  { slug: 'gcse-english-revision-timetable-template', title: 'GCSE English revision timetable template' },
  { slug: 'last-minute-gcse-english-revision', title: 'Last-minute GCSE English revision' },
  { slug: '3-month-gcse-english-revision-plan', title: '3-month GCSE English revision plan' },
  { slug: '6-month-gcse-english-revision-plan', title: '6-month GCSE English revision plan' },
  { slug: 'how-to-memorise-quotes-gcse-english', title: 'How to memorise quotes for GCSE English' },
  { slug: 'spaced-repetition-for-gcse-english', title: 'Spaced repetition for GCSE English' },
  { slug: 'active-recall-techniques-gcse-english', title: 'Active recall techniques for GCSE English' },
  { slug: 'mind-map-gcse-english-revision', title: 'Mind mapping GCSE English revision' },
]

const examDayPages = [
  { slug: 'night-before-gcse-english-exam', title: 'The night before the GCSE English exam' },
  { slug: 'what-to-bring-to-gcse-english-exam', title: 'What to bring to your GCSE English exam' },
  { slug: 'dealing-with-exam-anxiety-gcse-english', title: 'Dealing with exam anxiety in GCSE English' },
  { slug: 'what-happens-if-you-fail-gcse-english', title: 'What happens if you fail GCSE English?' },
]

const parentPages = [
  { slug: 'gcse-english-explained-for-parents', title: 'GCSE English explained for parents' },
  { slug: 'how-to-help-your-child-revise-gcse-english', title: 'How to help your child revise GCSE English' },
  { slug: 'gcse-english-vs-english-language-vs-literature', title: 'GCSE English vs Language vs Literature' },
  { slug: 'all-gcse-english-exam-boards-compared', title: 'All GCSE English exam boards compared' },
  { slug: 'gcse-english-literature-set-texts-list-2024', title: 'GCSE English Literature set texts list 2024' },
]

export default function RevisionHub() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GCSE English Revision & Grade Guides',
    description:
      'A library of GCSE English revision and grade-targeting guides written by GCSE examiners.',
    url: 'https://theenglishhub.app/analysis/revision',
    author: { '@type': 'Organization', name: 'The English Hub' },
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis" className="hover:text-foreground">Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Revision &amp; Grade Guides</span>
      </nav>

      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          GCSE English Revision &amp; Grade Guides
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground leading-relaxed">
          A complete set of free, examiner-written guides to help you hit the grade you want in GCSE English
          Language and Literature. Use the sections below to plan revision, understand grade boundaries, prep
          for the exam day and &mdash; if you&rsquo;re a parent &mdash; support a student at home.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Grade targeting</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          What it takes to reach a specific grade, boundaries and pass rates.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {gradePages.map((p) => (
            <li key={p.slug} className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40">
              <Link href={`/analysis/revision/${p.slug}`} className="text-sm font-medium text-primary hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Revision planning</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Timetables, techniques and memory strategies that actually work for English.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {revisionPages.map((p) => (
            <li key={p.slug} className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40">
              <Link href={`/analysis/revision/${p.slug}`} className="text-sm font-medium text-primary hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Exam day &amp; mindset</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          How to stay calm, prepared and focused in the final 24 hours.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {examDayPages.map((p) => (
            <li key={p.slug} className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40">
              <Link href={`/analysis/revision/${p.slug}`} className="text-sm font-medium text-primary hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">For parents &amp; general info</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Clear explanations of how GCSE English works and how to support a student at home.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {parentPages.map((p) => (
            <li key={p.slug} className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40">
              <Link href={`/analysis/revision/${p.slug}`} className="text-sm font-medium text-primary hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Start revising with The English Hub</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Want examiner-graded practice, quote flashcards and personalised study plans? Create a free account
          and pick up where these guides leave off.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/auth/signup"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Create a free account
          </Link>
          <Link
            href="/revision"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            Browse revision tools
          </Link>
        </div>
      </section>
    </main>
  )
}
