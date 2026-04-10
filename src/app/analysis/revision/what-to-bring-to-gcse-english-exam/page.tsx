import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Bring to Your GCSE English Exam | The English Hub',
  description:
    'A complete checklist of what to bring (and what not to bring) to your GCSE English exam, written by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/what-to-bring-to-gcse-english-exam',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What to Bring to Your GCSE English Exam',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'An exam day checklist of everything you need, and the items that are not allowed, for GCSE English.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/what-to-bring-to-gcse-english-exam',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">What to bring</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        What to bring to your GCSE English exam
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Every exam hall has a version of the same student: the one who arrives five minutes late,
          holding a plastic bag, asking to borrow a pen. Don&rsquo;t be that student. A two-minute
          checklist the night before is the cheapest grade insurance there is. Here&rsquo;s everything
          you need in your bag for GCSE English, what has to go in it, what must stay out of it, and
          what&rsquo;s genuinely optional.</p>

        <h2 className="text-xl font-semibold text-foreground">The essentials checklist</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Item</th>
                <th className="border border-border px-3 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">Clear plastic pencil case</td><td className="border border-border px-3 py-2">Mandatory. Opaque cases are confiscated.</td></tr>
              <tr><td className="border border-border px-3 py-2">2&ndash;3 black pens</td><td className="border border-border px-3 py-2">Biros or rollerballs only. Never gel or fountain pens.</td></tr>
              <tr><td className="border border-border px-3 py-2">Pencil</td><td className="border border-border px-3 py-2">For annotation of source texts in Language.</td></tr>
              <tr><td className="border border-border px-3 py-2">Rubber and sharpener</td><td className="border border-border px-3 py-2">For pencil corrections only.</td></tr>
              <tr><td className="border border-border px-3 py-2">Ruler (15cm or 30cm)</td><td className="border border-border px-3 py-2">For neat underlining and tables.</td></tr>
              <tr><td className="border border-border px-3 py-2">Water bottle (label removed)</td><td className="border border-border px-3 py-2">Hydration. Labels can have hidden notes, so they&rsquo;re banned.</td></tr>
              <tr><td className="border border-border px-3 py-2">Candidate statement of entry</td><td className="border border-border px-3 py-2">Has your candidate number printed on it.</td></tr>
              <tr><td className="border border-border px-3 py-2">Tissues</td><td className="border border-border px-3 py-2">Hayfever and emotion strikes everyone differently.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Allowed but optional</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Highlighter pens (only for use on the source text, not your answer booklet).</li>
          <li>A watch &mdash; but it must be analogue, not a smart watch or digital watch.</li>
          <li>A jumper or cardigan in case the exam hall is cold.</li>
          <li>A small clear bag of hard sweets for hayfever sufferers (check your centre&rsquo;s rules).</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Things you must NOT bring into the exam room</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Mobile phones, smart watches or any internet-connected device. Even switched off, they count as malpractice.</li>
          <li>Notes of any kind, including revision cards, mind maps or sticky notes.</li>
          <li>Your own copy of the set text. Literature exams are closed book in England.</li>
          <li>Correction fluid or tape &mdash; cross out errors with a single line instead.</li>
          <li>Opaque pencil cases.</li>
          <li>Food (unless medically authorised in advance).</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">What about calculators and dictionaries?</h2>
        <p>
          Neither is allowed in GCSE English exams. You do not need a dictionary even if you speak
          English as an additional language &mdash; the exam is specifically designed to be accessible
          without one, and bringing one in would count as malpractice.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Special access arrangements</h2>
        <p>
          If you have been granted extra time, a reader, a scribe, a prompter, a laptop or a separate
          room, your school will have told you in advance. You don&rsquo;t need to remind the invigilator;
          they&rsquo;ll have the paperwork. If you&rsquo;re unsure about an arrangement, ask your exams
          officer at least two weeks before the paper, not on the morning.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The night-before routine</h2>
        <p>
          Pack your bag the night before and put it by the door. Lay out your uniform. Charge your
          commute card or put exact change in your coat pocket. The goal is to wake up and not have to
          make any decisions before the exam. Every decision in the morning is one more thing that can
          raise your stress level.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A final calm thought</h2>
        <p>
          Remember: if you forget something, the invigilators will help. They have spare pens, spare
          paper, and a lot of experience of nervous students. The important thing is to arrive calm,
          on time, with water, and to give yourself permission to focus on the paper in front of you.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/night-before-gcse-english-exam">The night before the GCSE English exam</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/last-minute-gcse-english-revision">Last-minute revision</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/what-happens-if-you-fail-gcse-english">What happens if you fail GCSE English?</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Walk into the exam prepared</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Final-week quote drills and exam-style practice inside The English Hub.
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
