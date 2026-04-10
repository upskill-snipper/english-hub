import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Happens If You Fail GCSE English? | The English Hub',
  description:
    'What really happens if you fail GCSE English? Consequences, resits, condition of funding, Functional Skills and a calm plan forward.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/what-happens-if-you-fail-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Happens If You Fail GCSE English?',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A clear, reassuring explanation of what happens if you fail GCSE English and what your options are.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/what-happens-if-you-fail-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">What happens if you fail</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        What happens if you fail GCSE English?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          If you&rsquo;re worrying about what happens if you don&rsquo;t get a Grade 4 in GCSE English,
          the short version is: it&rsquo;s not the end of anything. Plenty of successful adults failed
          GCSE English first time and went on to university, apprenticeships and careers. The system is
          specifically designed to give you more chances. Here&rsquo;s exactly what happens and what
          your options are.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What counts as &ldquo;failing&rdquo;?</h2>
        <p>
          Officially, anything below a Grade 4 is considered a fail for the purposes of government
          measures. A Grade 4 is called a &ldquo;standard pass&rdquo; and a Grade 5 is called a
          &ldquo;strong pass.&rdquo; A Grade 3 is not a pass, but it is not an outright failure either
          &mdash; you&rsquo;ve still learned the skills.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Immediate consequences</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>If you&rsquo;re under 18 and in education or training, you&rsquo;ll be required to resit.</li>
          <li>Some sixth forms require a Grade 4 or 5 for certain A-level courses, but many have alternative routes.</li>
          <li>Apprenticeship providers usually let you start while you work towards the GCSE or an equivalent.</li>
          <li>You are not kept back a year or barred from progressing in the vast majority of cases.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The condition of funding rule</h2>
        <p>
          Under the government&rsquo;s &ldquo;condition of funding&rdquo; rule, any student aged 16&ndash;18
          without a Grade 4 in English Language (and maths) must continue to study English until they
          achieve it or turn 18, whichever comes first. This means your sixth form, college or
          apprenticeship provider will enter you for a resit, usually in November or the following
          summer.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Your options after a fail</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Resit in November.</strong> Same specification, same mark scheme. Most students improve by a grade or two with focused prep.</li>
          <li><strong className="text-foreground">Resit the following summer.</strong> Sit alongside Year 11s in the main series.</li>
          <li><strong className="text-foreground">Functional Skills Level 2.</strong> Often accepted as a GCSE equivalent, especially on apprenticeships.</li>
          <li><strong className="text-foreground">T-Level alternative literacy.</strong> Available for some vocational routes.</li>
          <li><strong className="text-foreground">Private tutor or online course.</strong> Good if school support feels limited.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Does failing GCSE English affect university?</h2>
        <p>
          Most UK universities require a Grade 4 in English Language, but they accept equivalents
          including Functional Skills Level 2 and some will consider a resit grade on appeal. If
          you&rsquo;re aiming at a competitive university, a Grade 5 or above is preferred. The good
          news is that you don&rsquo;t need to have passed on your first attempt &mdash; a strong resit
          result is accepted everywhere.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Does failing GCSE English affect employment?</h2>
        <p>
          Some employers list GCSE English as a minimum, others do not. In most industries, having a
          pass by the time you apply is what matters, not whether it was on your first try. Many adults
          take GCSE English as a resit in their 20s and 30s with no impact on their career.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The emotional side</h2>
        <p>
          If you&rsquo;re opening your results and seeing a Grade 3 or below, please remember: one exam
          is not a measure of your intelligence, your potential, or your worth as a person. Take a day
          to feel what you feel, then talk to a teacher or careers adviser. There is always a plan, and
          the plan usually works.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What the smart student does next</h2>
        <p>
          The students who resit and pass almost always do three things: they read their original
          mark scheme carefully, they write one full paper a week in the lead-up to November, and they
          seek feedback from someone other than themselves. A Grade 3 to Grade 5 jump in six months is
          completely achievable.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/can-you-resit-gcse-english">Can you resit GCSE English?</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-pass-gcse-english-grade-5">How to pass GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/3-month-gcse-english-revision-plan">3-month revision plan</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Your resit starts now</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Get targeted practice and examiner feedback designed for students preparing for a November or summer resit.
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
