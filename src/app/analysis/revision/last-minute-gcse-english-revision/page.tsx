import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Last-Minute GCSE English Revision (1 Week Before) | The English Hub',
  description:
    'Exactly what to do in the final week before your GCSE English exam. An examiner-written last-minute revision plan for maximum impact.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/last-minute-gcse-english-revision',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Last-Minute GCSE English Revision',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    description: 'A 7-day last-minute GCSE English revision plan.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Audit your weaknesses', text: 'Identify the two topics that feel weakest and commit to fixing them first.' },
      { '@type': 'HowToStep', position: 2, name: 'Write one paragraph a day', text: 'Produce a short, timed paragraph every day for seven days.' },
      { '@type': 'HowToStep', position: 3, name: 'Drill quotes', text: 'Use flashcards twice a day for 10 minutes each.' },
    ],
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Last-minute revision</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Last-minute GCSE English revision
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          If your GCSE English exam is less than a week away and you feel under-prepared, stop panicking.
          Panic is the enemy of recall. The last seven days can genuinely move your grade if you spend
          them doing the right few things instead of trying to re-learn everything from scratch. The plan
          below is what we give students who come to us the Sunday before the paper.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The golden rule of last-minute revision</h2>
        <p>
          Do not try to cover everything. Pick the three or four things that will make the biggest
          difference to your specific paper and do them well. For most students, those things are: the
          opening paragraph of your Literature essay, ten flexible quotations per text, and creative
          writing openers for Language Paper 1.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A 7-day plan</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Day</th>
                <th className="border border-border px-3 py-2 text-left">Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">7 days out</td><td className="border border-border px-3 py-2">Write a thesis and opening paragraph for each probable Literature question.</td></tr>
              <tr><td className="border border-border px-3 py-2">6 days out</td><td className="border border-border px-3 py-2">Drill 10 key quotations per text. Repeat, don&rsquo;t just read.</td></tr>
              <tr><td className="border border-border px-3 py-2">5 days out</td><td className="border border-border px-3 py-2">One full Language Paper 1 under timed conditions.</td></tr>
              <tr><td className="border border-border px-3 py-2">4 days out</td><td className="border border-border px-3 py-2">Mark the paper against the mark scheme. Write a list of fixes.</td></tr>
              <tr><td className="border border-border px-3 py-2">3 days out</td><td className="border border-border px-3 py-2">One Literature essay from a past question, timed.</td></tr>
              <tr><td className="border border-border px-3 py-2">2 days out</td><td className="border border-border px-3 py-2">Re-read your Shakespeare scenes aloud. Quote drill.</td></tr>
              <tr><td className="border border-border px-3 py-2">1 day out</td><td className="border border-border px-3 py-2">Rest. Light quote review. Pack your exam bag. Early night.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">High-impact activities</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Memorising three strong quotations per character.</li>
          <li>Drafting opening and closing lines for probable essay questions.</li>
          <li>Writing one creative writing opening per day &mdash; just the first 150 words.</li>
          <li>Reading examiner reports (they tell you exactly what examiners want).</li>
          <li>Rehearsing your timing plan for each paper out loud.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Low-impact activities to avoid</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Re-reading entire novels or plays cover to cover.</li>
          <li>Making new colour-coded revision notes.</li>
          <li>Watching long YouTube lectures instead of writing.</li>
          <li>Pulling an all-nighter the day before.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The night before: what actually works</h2>
        <p>
          Sleep beats cramming. Study after study confirms that memory consolidation happens during deep
          sleep, and that a well-rested student outperforms a tired one with equal preparation. Do a
          quick 20-minute quote review, lay out your equipment, and go to bed at a reasonable hour.
          We&rsquo;ve written a full guide on this &mdash; see the link below.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One reassuring thought</h2>
        <p>
          Examiners mark positively. They are looking for things to reward, not things to punish. If you
          walk in and produce clear, answered questions with short embedded quotations and a sense of
          argument, you will pass comfortably. The final week is not about miracles &mdash; it&rsquo;s
          about showing up ready to use what you already know.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/night-before-gcse-english-exam">The night before the GCSE English exam</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/what-to-bring-to-gcse-english-exam">What to bring to your GCSE English exam</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes for GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Rapid-fire last-minute practice</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Drill quotes, run timed past paper questions and get examiner feedback in minutes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/auth/signup"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Create a free account
          </Link>
          <Link
            href="/analysis/revision"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            All revision guides
          </Link>
        </div>
      </section>
    </main>
  )
}
