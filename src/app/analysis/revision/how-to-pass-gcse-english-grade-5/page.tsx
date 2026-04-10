import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Pass GCSE English (Grade 5) | The English Hub',
  description:
    'A calm, practical GCSE examiner guide to passing GCSE English with a Grade 5. What counts as a pass, what examiners look for and a simple revision plan.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/how-to-pass-gcse-english-grade-5',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Pass GCSE English (Grade 5)',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A reassuring, step-by-step plan for students who need to pass GCSE English at Grade 5.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/how-to-pass-gcse-english-grade-5',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">How to pass GCSE English (Grade 5)</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to pass GCSE English with a Grade 5
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          If you&rsquo;re reading this, you are probably targeting a Grade 4 or 5 in GCSE English and you
          want to know exactly what it takes to get there. The good news is that passing GCSE English is
          more about doing the basics reliably than it is about writing brilliant, unusual analysis. Most
          students who fall short at Grade 5 do so because of time management, not ability.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What does a &ldquo;pass&rdquo; actually mean?</h2>
        <p>
          Officially, a Grade 4 is a &ldquo;standard pass&rdquo; and a Grade 5 is a &ldquo;strong
          pass.&rdquo; A Grade 4 is what colleges and the government consider the minimum acceptable level,
          and a Grade 5 is what many employers and sixth forms prefer. If you do not get a Grade 4, the
          law requires you to resit English until you are 18 or achieve it, whichever comes first.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The five things every Grade 5 essay needs</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>A clear answer to the actual question in the first sentence.</li>
          <li>At least three short quotations, embedded in your sentences.</li>
          <li>At least two named techniques (metaphor, simile, alliteration, personification, etc.).</li>
          <li>An explanation of how the quotation makes the reader feel.</li>
          <li>Spelling and punctuation that a reader can follow without having to re-read.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The Point-Evidence-Explain method</h2>
        <p>
          For a Grade 5 you do not need a fancy essay structure. The traditional Point&ndash;Evidence&ndash;Explain
          (PEE) paragraph, done neatly three or four times, is enough. Make a point that answers the
          question, back it up with a short quotation, and explain the effect the writer creates. Repeat.
          Examiners do not reward length; they reward clarity.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The smallest number of quotes you can get away with</h2>
        <p>
          You do not need fifty quotations. For a Literature text, aim for eight to ten flexible quotations
          that cover the main themes and characters. Pick quotes that have at least one obvious technique
          in them (a metaphor, a colour image, a piece of alliteration) so you always have something to
          say about them. Drill them daily in the final month using flashcards.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The biggest mistake students make</h2>
        <p>
          Running out of time. A surprising number of Grade 4 candidates are capable of Grade 5 work but
          leave the creative writing section in English Language half-finished, or write a beautiful
          Question 1 on Literature and then never answer Question 2. Timing practice is the cheapest
          grade boost there is: put your phone across the room, set a timer, and finish every paper.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A simple weekly revision plan</h2>
        <p>In the final two months before the exam, try this every week:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Monday &mdash; Revise 5 quotes from Macbeth / A Christmas Carol / your Literature text.</li>
          <li>Tuesday &mdash; Write one Language Paper 1 Question 2 or Question 3 to time.</li>
          <li>Wednesday &mdash; Revise 5 quotes from a different text.</li>
          <li>Thursday &mdash; Write one Literature paragraph answering a past question.</li>
          <li>Friday &mdash; Short creative writing exercise (20 minutes).</li>
          <li>Saturday &mdash; Rest or catch up.</li>
          <li>Sunday &mdash; Mark the week&rsquo;s work against the mark scheme.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">You can do this</h2>
        <p>
          GCSE English rewards consistency, not panic. If you follow the basics &mdash; short quotes, clear
          PEE paragraphs, full answers under timed conditions and a handful of techniques you can name
          confidently &mdash; you will pass. Many students who think they are &ldquo;bad at English&rdquo;
          are simply under-practised, not under-skilled.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/what-happens-if-you-fail-gcse-english">What happens if you fail GCSE English?</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/can-you-resit-gcse-english">Can you resit GCSE English?</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/last-minute-gcse-english-revision">Last-minute GCSE English revision</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety in GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Get examiner support</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign up for free, work through guided practice, and get examiner feedback designed for Grade 4&ndash;5 students.
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
