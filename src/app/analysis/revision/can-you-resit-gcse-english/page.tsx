import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Can You Resit GCSE English? A Full Guide | The English Hub',
  description:
    'Can you resit GCSE English Language or Literature? Rules, dates, costs, where to sit and how to prepare. Written by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/can-you-resit-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can You Resit GCSE English?',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A clear explanation of GCSE English resit rules, timelines and preparation tips for students who need to retake.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/can-you-resit-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Can you resit GCSE English?</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Can you resit GCSE English?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Yes &mdash; you can resit GCSE English, and in fact if you&rsquo;re under 18 and haven&rsquo;t
          yet achieved a Grade 4, the government requires you to do so as a condition of your continued
          education or training funding. This is known as the &ldquo;condition of funding&rdquo; rule.
          It applies to GCSE English Language specifically; GCSE English Literature is not legally
          required, although most students take both together.
        </p>

        <h2 className="text-xl font-semibold text-foreground">When are the resit windows?</h2>
        <p>
          GCSE English Language resits run twice a year: in <strong className="text-foreground">November</strong>
          and in the main <strong className="text-foreground">May/June</strong> series alongside
          first-time candidates. The November series is specifically designed for resit candidates and is
          open to anyone aged 16 or over. Most sixth forms and colleges enter eligible students
          automatically for the November sitting.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Who is required to resit?</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Students aged 16&ndash;18 in full-time education who have a Grade 3 or below in English Language.</li>
          <li>Students enrolled on a T-Level, BTEC or apprenticeship where GCSE English is a condition.</li>
          <li>Adults applying for certain university courses, teaching or NHS training programmes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">How do you enter for a resit?</h2>
        <p>
          If you are at school or college, your exams officer will usually enter you automatically. If
          you have left education, you will need to find a registered exam centre (many colleges and
          private centres accept external candidates) and pay an entry fee, typically between &pound;40
          and &pound;80 per paper. You do not have to resit at your original school.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Functional Skills as an alternative</h2>
        <p>
          If you are over 19 or on an apprenticeship, Functional Skills Level 2 English is often accepted
          as an equivalent to a GCSE Grade 4. Functional Skills is considered by many students to be a
          more accessible qualification because it focuses on practical reading, writing and speaking
          rather than literary analysis. Check with your employer or course provider before committing.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Is the resit paper harder?</h2>
        <p>
          No. November resit papers use exactly the same specifications, mark schemes and grade boundaries
          as the summer exam. The content is identical. What tends to feel different is the exam
          environment: fewer candidates, a different cohort, and slightly colder weather. Students
          resitting in November also benefit from the experience of having sat the exam before, which is
          a significant advantage you should not underestimate.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How to prepare for a resit</h2>
        <p>
          Most students who fall just short of Grade 4 do so because of small repeatable errors, not a
          lack of knowledge. The most efficient resit preparation is to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Read your original mark scheme and examiner report for every question.</li>
          <li>Write one full Paper 1 and one full Paper 2 under timed conditions every week.</li>
          <li>Drill the 10 most common SPaG errors (homophones, commas, apostrophes).</li>
          <li>Focus on the creative writing task, which carries 40 of 80 marks on Paper 1.</li>
          <li>Work through examiner-led feedback rather than self-assessing.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">What if you keep failing?</h2>
        <p>
          The condition of funding rule only requires you to keep studying English until you achieve a
          Grade 4 or turn 18, whichever comes first. After that, you can continue to resit voluntarily
          or switch to Functional Skills. Many universities and employers accept Functional Skills Level
          2 as a GCSE equivalent.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/what-happens-if-you-fail-gcse-english">What happens if you fail GCSE English?</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-pass-gcse-english-grade-5">How to pass GCSE English (Grade 5)</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/last-minute-gcse-english-revision">Last-minute GCSE English revision</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety in GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Prepare for your resit</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Get targeted revision and examiner feedback built for November resit candidates.
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
