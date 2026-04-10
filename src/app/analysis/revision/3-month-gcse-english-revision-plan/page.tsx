import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '3-Month GCSE English Revision Plan | The English Hub',
  description:
    'A week-by-week 3-month GCSE English revision plan covering Language, Literature, quotes and mock papers, written by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/3-month-gcse-english-revision-plan',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '3-Month GCSE English Revision Plan',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    description: 'A structured 12-week GCSE English revision plan starting three months before the exam.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Weeks 1–4: Content recap', text: 'Re-read texts, build quote banks and revisit context for each text.' },
      { '@type': 'HowToStep', position: 2, name: 'Weeks 5–8: Paragraph drills', text: 'Write timed paragraphs against past questions every other day.' },
      { '@type': 'HowToStep', position: 3, name: 'Weeks 9–12: Full mocks', text: 'Move to full timed papers and refine weaknesses against examiner feedback.' },
    ],
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">3-month revision plan</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        3-month GCSE English revision plan
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Three months is the sweet spot for GCSE English revision. It&rsquo;s long enough to relearn any
          content you&rsquo;ve forgotten, long enough to build real exam stamina, and short enough that
          you can maintain focus without burning out. The plan below is broken into three four-week
          phases: content, paragraphs and full mocks. Expect to spend 5&ndash;7 hours a week on English.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Weeks 1&ndash;4: Content recap phase</h2>
        <p>
          In this first phase, the focus is on remembering what you&rsquo;ve studied. You&rsquo;re not
          writing full essays yet; you&rsquo;re rebuilding your mental map of each text.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Re-read your Shakespeare text (Macbeth, Romeo &amp; Juliet, The Merchant of Venice).</li>
          <li>Re-read your 19th-century novel (A Christmas Carol, Dr Jekyll and Mr Hyde, Great Expectations).</li>
          <li>Make a one-page character map for each major character.</li>
          <li>Build a starter bank of 10 quotes per text, choosing ones with rich technique.</li>
          <li>Review the 15 poems in your anthology and pick 4&ndash;5 favourites.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Weeks 5&ndash;8: Paragraph drill phase</h2>
        <p>
          Now the emphasis shifts from input to output. Every session should end with you having produced
          at least one written paragraph.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Write three timed paragraphs per week on Literature questions.</li>
          <li>Write two timed Language Paper 1 Q2 and Q3 responses per week.</li>
          <li>Begin daily 10-minute quote drills using flashcards.</li>
          <li>Mark every paragraph against the mark scheme and note one &ldquo;fix&rdquo;.</li>
          <li>By week 8, you should have written ~40 paragraphs of various types.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Weeks 9&ndash;12: Full mocks phase</h2>
        <p>
          In the final four weeks, start writing whole papers. This is where stamina and time management
          get built. Doing three or four full mocks under silent, timed conditions is the single biggest
          predictor of a good exam-day performance.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>One full paper per weekend, alternating Language and Literature.</li>
          <li>Mark each mock the same day using the published mark scheme.</li>
          <li>Continue daily quote drills; add context quizzes twice a week.</li>
          <li>Rehearse your exact timing plan out loud before each mock.</li>
          <li>In the final week, drop intensity and focus on rest and light review.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Typical weekly shape during the plan</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Day</th>
                <th className="border border-border px-3 py-2 text-left">Focus</th>
                <th className="border border-border px-3 py-2 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">Mon</td><td className="border border-border px-3 py-2">Quote drill + Lit paragraph</td><td className="border border-border px-3 py-2">60 min</td></tr>
              <tr><td className="border border-border px-3 py-2">Tue</td><td className="border border-border px-3 py-2">Language Q2 / Q3</td><td className="border border-border px-3 py-2">45 min</td></tr>
              <tr><td className="border border-border px-3 py-2">Wed</td><td className="border border-border px-3 py-2">Poetry comparison</td><td className="border border-border px-3 py-2">60 min</td></tr>
              <tr><td className="border border-border px-3 py-2">Thu</td><td className="border border-border px-3 py-2">Quote drill + Lit paragraph</td><td className="border border-border px-3 py-2">60 min</td></tr>
              <tr><td className="border border-border px-3 py-2">Fri</td><td className="border border-border px-3 py-2">Creative writing</td><td className="border border-border px-3 py-2">45 min</td></tr>
              <tr><td className="border border-border px-3 py-2">Sat</td><td className="border border-border px-3 py-2">Full mock / extended practice</td><td className="border border-border px-3 py-2">105 min</td></tr>
              <tr><td className="border border-border px-3 py-2">Sun</td><td className="border border-border px-3 py-2">Rest / marking</td><td className="border border-border px-3 py-2">30 min</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Common 3-month mistakes</h2>
        <p>
          Students who come to us halfway through a 3-month plan usually make one of three mistakes:
          spending the whole first month making notes instead of writing, trying to cover everything
          instead of focusing on weak topics, or skipping the marking stage. Mark your work. Mark it
          every time. That&rsquo;s where the grade comes from.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/6-month-gcse-english-revision-plan">6-month GCSE English revision plan</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-revision-timetable-template">Revision timetable template</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/spaced-repetition-for-gcse-english">Spaced repetition for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Follow this plan inside The English Hub</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We&rsquo;ll track your sessions, queue your practice and give you feedback on every paragraph.
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
