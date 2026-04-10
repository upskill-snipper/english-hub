import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '6-Month GCSE English Revision Plan | The English Hub',
  description:
    'An examiner-written 6-month GCSE English revision plan with a month-by-month breakdown for Language, Literature, quotes and mocks.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/6-month-gcse-english-revision-plan',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '6-Month GCSE English Revision Plan',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    description: 'A 6-month plan for GCSE English Language and Literature revision.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Months 1–2', text: 'Rebuild content knowledge and read each text carefully.' },
      { '@type': 'HowToStep', position: 2, name: 'Months 3–4', text: 'Shift to paragraph writing and quote memorisation.' },
      { '@type': 'HowToStep', position: 3, name: 'Months 5–6', text: 'Move to full timed papers and final polish.' },
    ],
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">6-month revision plan</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        6-month GCSE English revision plan
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          If you&rsquo;re starting six months out, you have the gift of time. This plan assumes you want
          a Grade 7 or better and are willing to do 4&ndash;6 hours a week of targeted English revision.
          The shape is simple: two months of content, two months of paragraphs, two months of mocks. Each
          phase feeds directly into the next, and every week has at least one marked piece of writing.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month 1: Re-read and understand</h2>
        <p>
          Re-read each set text cover to cover, making margin notes as you go. Don&rsquo;t try to revise
          for the exam yet; the goal is to refresh your memory of plot, character and the big ideas of
          each text. Finish the month with a one-page plot summary and a one-page character map for each
          text. These will become your revision scaffolding for the rest of the plan.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month 2: Context and quotations</h2>
        <p>
          Build your context notes for each text (Jacobean beliefs, Victorian London, the Gothic
          tradition, etc.) and start assembling a bank of 15&ndash;20 quotations per text. Pick quotes
          with analysable features: imagery, sound patterns, structure. Begin daily 5-minute quote drills.
          The aim by the end of month two is to have 60&ndash;80 total quotes logged across all texts.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month 3: Paragraph drills begin</h2>
        <p>
          Transition from reading to writing. Start every study session with a 10-minute quote drill and
          then write one timed paragraph. Rotate through: Shakespeare, 19th-century novel, poetry and
          unseen. Mark every paragraph against the mark scheme and note a specific improvement target
          for the next session.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month 4: Language Paper practice</h2>
        <p>
          Shift some of your focus to English Language. Work through individual questions from Paper 1
          and Paper 2 in isolation. Spend one session a week on creative writing openings. By the end of
          month four you should have written at least 20 individual Language questions to timing.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month 5: Full papers</h2>
        <p>
          Every weekend, write one full paper (alternate Language and Literature) under timed silent
          conditions. Mark it the same day and note patterns in your mistakes. This is the phase where
          nervous students make their biggest grade jumps because they&rsquo;re finally experiencing the
          real shape of the exam.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month 6: Polish, taper, rest</h2>
        <p>
          In the final month, keep the quote drills going but scale back on fresh papers. Spend more
          time refining your openings, memorising your best sentence structures, and re-reading examiner
          reports. In the last week, drop the intensity entirely. Rest matters more than one extra
          paragraph.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Month-by-month summary</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Month</th>
                <th className="border border-border px-3 py-2 text-left">Focus</th>
                <th className="border border-border px-3 py-2 text-left">Weekly output</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">1</td><td className="border border-border px-3 py-2">Re-read texts</td><td className="border border-border px-3 py-2">1 character map</td></tr>
              <tr><td className="border border-border px-3 py-2">2</td><td className="border border-border px-3 py-2">Context + quotes</td><td className="border border-border px-3 py-2">15 memorised quotes</td></tr>
              <tr><td className="border border-border px-3 py-2">3</td><td className="border border-border px-3 py-2">Lit paragraphs</td><td className="border border-border px-3 py-2">3 marked paragraphs</td></tr>
              <tr><td className="border border-border px-3 py-2">4</td><td className="border border-border px-3 py-2">Language Q practice</td><td className="border border-border px-3 py-2">5 Language Qs</td></tr>
              <tr><td className="border border-border px-3 py-2">5</td><td className="border border-border px-3 py-2">Full papers</td><td className="border border-border px-3 py-2">1 full mock</td></tr>
              <tr><td className="border border-border px-3 py-2">6</td><td className="border border-border px-3 py-2">Polish + rest</td><td className="border border-border px-3 py-2">Quote drills only</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Why 6 months beats 3 months</h2>
        <p>
          The biggest advantage of a 6-month plan isn&rsquo;t more time to study &mdash; it&rsquo;s more
          space for spaced repetition. When you learn something in month one and revisit it in month
          three, your brain encodes it as important. Three-month plans rush students through content
          without this spaced layer, which is why students who start earlier retain more in the exam
          room.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/3-month-gcse-english-revision-plan">3-month GCSE English revision plan</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-revision-timetable-template">Revision timetable template</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/spaced-repetition-for-gcse-english">Spaced repetition for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Automate your 6-month plan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Let The English Hub schedule your sessions, mark your mocks and drill your quotes for you.
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
