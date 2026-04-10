import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English Pass Rate Statistics (2019–2024) | The English Hub',
  description:
    'GCSE English pass rate statistics from 2019 through 2024. Grade 4, Grade 5, Grade 7 and Grade 9 percentages, plus commentary from GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-pass-rate-statistics',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCSE English Pass Rate Statistics',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Multi-year pass rate data for GCSE English Language and Literature, 2019 through 2024.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/gcse-english-pass-rate-statistics',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Pass rate statistics</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English pass rate statistics
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          GCSE English pass rates are closely watched every August because English is, along with maths,
          the subject the government uses to judge whether students are &ldquo;secondary-ready&rdquo; for
          college or employment. Below is a summary of the national pass rates in GCSE English Language
          and Literature since 2019, drawn from JCQ&rsquo;s published data for England, Wales and Northern
          Ireland combined.
        </p>

        <h2 className="text-xl font-semibold text-foreground">GCSE English Language pass rates (Grade 4+)</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Year</th>
                <th className="border border-border px-3 py-2 text-left">Grade 4+</th>
                <th className="border border-border px-3 py-2 text-left">Grade 5+</th>
                <th className="border border-border px-3 py-2 text-left">Grade 7+</th>
                <th className="border border-border px-3 py-2 text-left">Grade 9</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">2019</td><td className="border border-border px-3 py-2">~70%</td><td className="border border-border px-3 py-2">~61%</td><td className="border border-border px-3 py-2">~17%</td><td className="border border-border px-3 py-2">~3.3%</td></tr>
              <tr><td className="border border-border px-3 py-2">2020</td><td className="border border-border px-3 py-2">~78%</td><td className="border border-border px-3 py-2">~70%</td><td className="border border-border px-3 py-2">~25%</td><td className="border border-border px-3 py-2">~4.5%</td></tr>
              <tr><td className="border border-border px-3 py-2">2021</td><td className="border border-border px-3 py-2">~80%</td><td className="border border-border px-3 py-2">~72%</td><td className="border border-border px-3 py-2">~28%</td><td className="border border-border px-3 py-2">~5.5%</td></tr>
              <tr><td className="border border-border px-3 py-2">2022</td><td className="border border-border px-3 py-2">~75%</td><td className="border border-border px-3 py-2">~66%</td><td className="border border-border px-3 py-2">~23%</td><td className="border border-border px-3 py-2">~4.4%</td></tr>
              <tr><td className="border border-border px-3 py-2">2023</td><td className="border border-border px-3 py-2">~71%</td><td className="border border-border px-3 py-2">~62%</td><td className="border border-border px-3 py-2">~19%</td><td className="border border-border px-3 py-2">~3.6%</td></tr>
              <tr><td className="border border-border px-3 py-2">2024</td><td className="border border-border px-3 py-2">~72%</td><td className="border border-border px-3 py-2">~63%</td><td className="border border-border px-3 py-2">~20%</td><td className="border border-border px-3 py-2">~3.8%</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">GCSE English Literature pass rates (Grade 4+)</h2>
        <p>
          Literature typically shows a very similar pattern to Language at the pass grade, but Literature
          tends to produce slightly more Grade 8s and 9s because the cohort is more self-selecting
          (students not targeting a pass often sit Language only in resit series).
        </p>

        <h2 className="text-xl font-semibold text-foreground">What the figures tell us</h2>
        <p>
          The pandemic years saw a significant rise in pass rates driven by centre- and teacher-assessed
          grades. As exams returned and Ofqual gradually re-tightened standards, pass rates have drifted
          back towards 2019 levels. By 2024, the system had almost fully returned to pre-pandemic norms:
          around 70&ndash;72% of students achieved Grade 4+, around 20% achieved Grade 7+, and about 4%
          achieved the very top grade of 9.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Why English tends to have a lower top grade rate than maths</h2>
        <p>
          Grade 9 in English is harder to access than in maths because English is marked on a sliding
          scale of quality rather than right-or-wrong answers. A maths candidate can pick up full marks
          on a 16-mark question with the correct method; an English candidate can only reach the top of
          the band by demonstrating sustained, thoughtful analysis across multiple paragraphs, which is
          inherently harder to produce consistently.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What this means if you&rsquo;re targeting Grade 7+</h2>
        <p>
          Roughly one in five students nationally reach Grade 7, so if you&rsquo;re targeting a 7 you are
          aiming for the top 20% of the cohort. That&rsquo;s achievable with a focused 8&ndash;12 week
          revision plan and deliberate exam practice. Targeting a 9 means you&rsquo;re aiming for roughly
          the top 4% &mdash; not impossible, but it requires consistent Grade 8-level paragraph writing
          under timed conditions.
        </p>

        <p className="text-xs italic text-muted-foreground">
          Source: JCQ published GCSE results for England, Wales and Northern Ireland. Figures are
          approximate and rounded to one decimal place where applicable.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-grade-boundaries-2024">GCSE English grade boundaries 2024</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-grade-boundaries-historical">Historical grade boundaries</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-pass-gcse-english-grade-5">How to pass GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Know the numbers, hit your target</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Track your own pass rate with mock practice and examiner feedback on The English Hub.
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
