import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English Grade Boundaries 2024 (AQA, Edexcel, OCR, Eduqas) | The English Hub',
  description:
    'The 2024 GCSE English grade boundaries for AQA, Edexcel, OCR and WJEC Eduqas. Language and Literature, with the marks needed for each grade.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-grade-boundaries-2024',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCSE English Grade Boundaries 2024',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'An overview of the 2024 GCSE English grade boundaries for the four main exam boards.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/gcse-english-grade-boundaries-2024',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">GCSE English grade boundaries 2024</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English grade boundaries 2024
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Grade boundaries in GCSE English are set once all papers have been marked, so they shift from
          year to year to maintain a consistent standard of performance across cohorts. The summer 2024
          boundaries came in slightly higher than 2023 as Ofqual continued to return the system to
          pre-pandemic norms. Below is an overview of the approximate marks needed to hit each grade at
          the four major English boards.
        </p>

        <h2 className="text-xl font-semibold text-foreground">AQA GCSE English Language (8700) &mdash; 2024</h2>
        <p>Total marks: 160 (two 80-mark papers).</p>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Grade</th>
                <th className="border border-border px-3 py-2 text-left">Approx. mark</th>
                <th className="border border-border px-3 py-2 text-left">Approx. %</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">9</td><td className="border border-border px-3 py-2">130</td><td className="border border-border px-3 py-2">81%</td></tr>
              <tr><td className="border border-border px-3 py-2">8</td><td className="border border-border px-3 py-2">117</td><td className="border border-border px-3 py-2">73%</td></tr>
              <tr><td className="border border-border px-3 py-2">7</td><td className="border border-border px-3 py-2">103</td><td className="border border-border px-3 py-2">64%</td></tr>
              <tr><td className="border border-border px-3 py-2">6</td><td className="border border-border px-3 py-2">89</td><td className="border border-border px-3 py-2">56%</td></tr>
              <tr><td className="border border-border px-3 py-2">5</td><td className="border border-border px-3 py-2">74</td><td className="border border-border px-3 py-2">46%</td></tr>
              <tr><td className="border border-border px-3 py-2">4</td><td className="border border-border px-3 py-2">60</td><td className="border border-border px-3 py-2">38%</td></tr>
              <tr><td className="border border-border px-3 py-2">3</td><td className="border border-border px-3 py-2">46</td><td className="border border-border px-3 py-2">29%</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">AQA GCSE English Literature (8702) &mdash; 2024</h2>
        <p>Total marks: 160 (two papers, Shakespeare &amp; 19th-century novel + modern texts and poetry).</p>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Grade</th>
                <th className="border border-border px-3 py-2 text-left">Approx. mark</th>
                <th className="border border-border px-3 py-2 text-left">Approx. %</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">9</td><td className="border border-border px-3 py-2">121</td><td className="border border-border px-3 py-2">76%</td></tr>
              <tr><td className="border border-border px-3 py-2">8</td><td className="border border-border px-3 py-2">107</td><td className="border border-border px-3 py-2">67%</td></tr>
              <tr><td className="border border-border px-3 py-2">7</td><td className="border border-border px-3 py-2">93</td><td className="border border-border px-3 py-2">58%</td></tr>
              <tr><td className="border border-border px-3 py-2">6</td><td className="border border-border px-3 py-2">79</td><td className="border border-border px-3 py-2">49%</td></tr>
              <tr><td className="border border-border px-3 py-2">5</td><td className="border border-border px-3 py-2">65</td><td className="border border-border px-3 py-2">41%</td></tr>
              <tr><td className="border border-border px-3 py-2">4</td><td className="border border-border px-3 py-2">52</td><td className="border border-border px-3 py-2">33%</td></tr>
              <tr><td className="border border-border px-3 py-2">3</td><td className="border border-border px-3 py-2">39</td><td className="border border-border px-3 py-2">24%</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Why boundaries change each year</h2>
        <p>
          Boundaries are set after marking to account for paper difficulty. If the 2024 papers were felt
          to be slightly harder than 2023, boundaries were lowered; if they were easier, boundaries went
          up. Ofqual&rsquo;s aim is that a Grade 5 this year represents the same level of achievement as
          a Grade 5 last year, even if the marks needed differ by five or six points either way.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Other boards at a glance (2024)</h2>
        <p>
          Edexcel, OCR and WJEC Eduqas all published broadly similar 2024 boundaries. A Grade 9 in
          Literature typically landed around 75&ndash;78% of total marks, a Grade 7 around 58&ndash;62%,
          and a Grade 5 around 38&ndash;42%. Language boundaries sat 3&ndash;5% higher than Literature
          boundaries across all boards, which is broadly consistent with the pre-pandemic pattern.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How to use grade boundaries in revision</h2>
        <p>
          Knowing the boundary lets you reverse-engineer your target. If a Grade 7 in AQA Literature needs
          roughly 93 out of 160, that&rsquo;s about 23 of a possible 34 marks on the Shakespeare question,
          and about 23 of 34 on the 19th-century novel question &mdash; a realistic target if you can
          consistently write Level 5 paragraphs under timed conditions.
        </p>

        <p className="text-xs italic text-muted-foreground">
          Note: the figures above are approximate and based on publicly available 2024 data. Always check
          your exam board&rsquo;s official grade boundary document before relying on specific numbers.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-grade-boundaries-historical">Historical GCSE English grade boundaries</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-pass-rate-statistics">GCSE English pass rate statistics</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/all-gcse-english-exam-boards-compared">All GCSE English exam boards compared</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-7-gcse-english">How to get a Grade 7 in GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Know your target &mdash; hit your target</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Track your progress against grade boundaries with The English Hub.
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
