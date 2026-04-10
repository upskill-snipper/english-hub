import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English Revision Timetable Template (Free) | The English Hub',
  description:
    'A free, examiner-written GCSE English revision timetable template. 8-week weekly schedule covering Language, Literature, quotes and mocks.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-revision-timetable-template',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'GCSE English Revision Timetable Template',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    description: 'How to build and use an 8-week GCSE English revision timetable.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Block out study sessions', text: 'Commit to four 45-minute sessions per weekday plus two on weekends.' },
      { '@type': 'HowToStep', position: 2, name: 'Assign topics to days', text: 'Rotate Language, Literature, quotes and mocks so nothing is left until the last week.' },
      { '@type': 'HowToStep', position: 3, name: 'Mix passive and active revision', text: 'Alternate reading with timed writing so you build both recall and stamina.' },
    ],
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Revision timetable template</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English revision timetable template
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          The best revision timetable is one you&rsquo;ll actually stick to. The template below is
          deliberately modest: four 45-minute sessions on weekdays and two on weekends, spread across
          eight weeks. It covers English Language, English Literature and quote memorisation in a
          rotation that keeps every topic fresh without any last-minute cramming.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The weekly template</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Day</th>
                <th className="border border-border px-3 py-2 text-left">Session 1</th>
                <th className="border border-border px-3 py-2 text-left">Session 2</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">Monday</td><td className="border border-border px-3 py-2">Language Paper 1 Q2 practice</td><td className="border border-border px-3 py-2">Quote drill &mdash; Macbeth</td></tr>
              <tr><td className="border border-border px-3 py-2">Tuesday</td><td className="border border-border px-3 py-2">Literature paragraph (Shakespeare)</td><td className="border border-border px-3 py-2">Quote drill &mdash; A Christmas Carol</td></tr>
              <tr><td className="border border-border px-3 py-2">Wednesday</td><td className="border border-border px-3 py-2">Language Paper 2 Q4 practice</td><td className="border border-border px-3 py-2">Re-read one chapter / scene</td></tr>
              <tr><td className="border border-border px-3 py-2">Thursday</td><td className="border border-border px-3 py-2">Literature paragraph (19th-century novel)</td><td className="border border-border px-3 py-2">Quote drill &mdash; poetry anthology</td></tr>
              <tr><td className="border border-border px-3 py-2">Friday</td><td className="border border-border px-3 py-2">Creative writing practice (Q5)</td><td className="border border-border px-3 py-2">Review week&rsquo;s written work</td></tr>
              <tr><td className="border border-border px-3 py-2">Saturday</td><td className="border border-border px-3 py-2">Full timed paper (Language or Literature)</td><td className="border border-border px-3 py-2">&mdash;</td></tr>
              <tr><td className="border border-border px-3 py-2">Sunday</td><td className="border border-border px-3 py-2">Rest / catch up</td><td className="border border-border px-3 py-2">Mark last week&rsquo;s work</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">How to use the template</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Print it out and put it somewhere visible, not just on your phone.</li>
          <li>Tick off each session as you complete it &mdash; visible progress is motivating.</li>
          <li>Every second Saturday, do a full paper; in between, do single questions.</li>
          <li>Build in one full rest day. Burnout is the enemy of retention.</li>
          <li>Keep a &ldquo;miss log&rdquo;: when you skip a session, simply reschedule it, don&rsquo;t abandon it.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Why this timetable works</h2>
        <p>
          It works because it interleaves topics (quotes on the same day you revise the relevant text),
          forces output (written paragraphs) alongside input (reading), and reserves weekends for real
          timed practice. Far too many revision timetables are colour-coded fantasies that fall apart in
          week two. This one is plain on purpose so that you can stick to it when motivation dips.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Adapting it to your needs</h2>
        <p>
          If you&rsquo;re already comfortable with Literature, swap a Literature session for a Language
          creative writing session. If your grade boundary target is lower, drop one session per day and
          keep the rest. The principles &mdash; interleaving, output, rest and weekly marking &mdash;
          matter more than the specific grid.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Final tip: mark against the mark scheme</h2>
        <p>
          The single most overlooked step is marking your own work against the published mark scheme.
          Examiners consistently report that students who self-mark see bigger grade jumps than those who
          just hand work in. Spending 15 minutes marking is often worth more than an extra 45-minute
          session of reading.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/3-month-gcse-english-revision-plan">3-month GCSE English revision plan</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/6-month-gcse-english-revision-plan">6-month GCSE English revision plan</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/spaced-repetition-for-gcse-english">Spaced repetition for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes for GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Stick to your plan with The English Hub</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Log your sessions, track your progress and get examiner-style feedback on every paragraph.
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
