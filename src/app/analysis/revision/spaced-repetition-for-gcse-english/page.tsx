import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spaced Repetition for GCSE English | The English Hub',
  description:
    'How to use spaced repetition to revise GCSE English Literature quotes and key context. Intervals, apps and a free schedule, written by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/spaced-repetition-for-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Spaced Repetition for GCSE English',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A practical explanation of how to apply spaced repetition to GCSE English revision.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/spaced-repetition-for-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Spaced repetition</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Spaced repetition for GCSE English
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Spaced repetition is the most extensively researched memory technique in cognitive science, and
          it&rsquo;s a near-perfect match for the demands of GCSE English Literature. The technique is
          simple: instead of cramming a quote once and re-reading it endlessly, you review it at
          gradually increasing intervals, so your brain encodes it as important rather than disposable.
          Used properly, it lets you hold 10&ndash;12 quotes per text in long-term memory with about 10
          minutes of daily effort.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Why it works</h2>
        <p>
          When you first learn something, your brain treats it as low-priority information and marks it
          for forgetting. Every time you successfully retrieve it before it&rsquo;s lost, your brain
          lengthens the shelf-life of that memory. This is called the &ldquo;forgetting curve&rdquo;
          effect, first described by Hermann Ebbinghaus in the 1880s and replicated thousands of times
          since. Spaced repetition deliberately hits the memory just before it fades, reinforcing it
          each time.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The basic schedule</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Review</th>
                <th className="border border-border px-3 py-2 text-left">When</th>
                <th className="border border-border px-3 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">1st</td><td className="border border-border px-3 py-2">Same day</td><td className="border border-border px-3 py-2">Consolidate short-term recall</td></tr>
              <tr><td className="border border-border px-3 py-2">2nd</td><td className="border border-border px-3 py-2">Day 2</td><td className="border border-border px-3 py-2">Catch the first forgetting spike</td></tr>
              <tr><td className="border border-border px-3 py-2">3rd</td><td className="border border-border px-3 py-2">Day 5</td><td className="border border-border px-3 py-2">Reinforce encoding</td></tr>
              <tr><td className="border border-border px-3 py-2">4th</td><td className="border border-border px-3 py-2">Day 12</td><td className="border border-border px-3 py-2">Shift to long-term memory</td></tr>
              <tr><td className="border border-border px-3 py-2">5th</td><td className="border border-border px-3 py-2">Day 25</td><td className="border border-border px-3 py-2">Lock in for exam day</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Applying it to English</h2>
        <p>
          Use spaced repetition for three kinds of content: quotations (front: context; back: the quote),
          context facts (front: question; back: three relevant facts), and named techniques (front: a
          quotation; back: the technique and its effect). Don&rsquo;t use it for essay structures or
          creative writing &mdash; those need practice, not memorisation.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Tools that implement it for you</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Anki &mdash; the free, hard-core option that many sixth-formers use.</li>
          <li>Quizlet &mdash; more polished but less customisable.</li>
          <li>Paper flashcards in a Leitner box (five stacks, move cards up or down as you get them right).</li>
          <li>The English Hub&rsquo;s built-in quote drills, which use spaced repetition by default.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">How much time you need</h2>
        <p>
          Ten minutes a day for eight weeks is enough to memorise 40&ndash;60 quotes and keep them in
          long-term memory until exam day. That&rsquo;s less than most students spend re-reading their
          notes. The efficiency of spaced repetition is precisely why top students and medical students
          use it: it gives you more recall for less effort.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Common mistakes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Skipping the active retrieval step and just reading the cards.</li>
          <li>Giving up when reviews feel difficult &mdash; the difficulty is the point.</li>
          <li>Adding hundreds of cards in one go instead of 5 a day.</li>
          <li>Using it for creative writing and essay structures, which need practice not flashcards.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The one-sentence summary</h2>
        <p>
          Spaced repetition is the closest thing to a memory superpower available to GCSE students &mdash;
          ten minutes a day of the right kind of review will give you recall that fifty minutes of
          passive reading cannot.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/active-recall-techniques-gcse-english">Active recall techniques for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-revision-timetable-template">Revision timetable template</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/mind-map-gcse-english-revision">Mind maps for GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Spaced repetition, built-in</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The English Hub schedules your quote reviews automatically using proven spaced repetition intervals.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/auth/register"
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
