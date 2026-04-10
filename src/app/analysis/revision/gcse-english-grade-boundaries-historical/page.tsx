import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

export const metadata: Metadata = {
  title: 'GCSE English Grade Boundaries (Historical Trends) | The English Hub',
  description:
    'Historical GCSE English grade boundaries from 2017 to 2024, showing how much marks needed for each grade have changed across AQA and Edexcel.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-grade-boundaries-historical',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCSE English Grade Boundaries (Historical Trends)',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Historical AQA GCSE English grade boundaries from 2017 through 2024 with commentary on trends.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/gcse-english-grade-boundaries-historical',
  }

  return (
    <AnalysisBoardGate
      contentBoards={['aqa']}
      contentName="AQA GCSE English historical grade boundaries"
      redirectTo="/revision"
    >
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Historical grade boundaries</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English grade boundaries: historical trends
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Grade boundaries for GCSE English have shifted noticeably since the 9&ndash;1 reformed specifications
          were first examined in 2017. Understanding the trends helps students, parents and teachers set
          realistic targets and interpret mock results sensibly. Below is a summary of AQA English
          Literature Grade 9, Grade 5 and Grade 4 boundaries from 2017 to 2024 as a percentage of the
          total mark, along with commentary on what changed each year.
        </p>

        <h2 className="text-xl font-semibold text-foreground">AQA English Literature boundary trends</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Year</th>
                <th className="border border-border px-3 py-2 text-left">Grade 9</th>
                <th className="border border-border px-3 py-2 text-left">Grade 5</th>
                <th className="border border-border px-3 py-2 text-left">Grade 4</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">2017</td><td className="border border-border px-3 py-2">~80%</td><td className="border border-border px-3 py-2">~44%</td><td className="border border-border px-3 py-2">~36%</td></tr>
              <tr><td className="border border-border px-3 py-2">2018</td><td className="border border-border px-3 py-2">~77%</td><td className="border border-border px-3 py-2">~43%</td><td className="border border-border px-3 py-2">~34%</td></tr>
              <tr><td className="border border-border px-3 py-2">2019</td><td className="border border-border px-3 py-2">~77%</td><td className="border border-border px-3 py-2">~44%</td><td className="border border-border px-3 py-2">~35%</td></tr>
              <tr><td className="border border-border px-3 py-2">2020</td><td className="border border-border px-3 py-2" colSpan={3}>Centre-assessed (COVID)</td></tr>
              <tr><td className="border border-border px-3 py-2">2021</td><td className="border border-border px-3 py-2" colSpan={3}>Teacher-assessed (COVID)</td></tr>
              <tr><td className="border border-border px-3 py-2">2022</td><td className="border border-border px-3 py-2">~68%</td><td className="border border-border px-3 py-2">~38%</td><td className="border border-border px-3 py-2">~29%</td></tr>
              <tr><td className="border border-border px-3 py-2">2023</td><td className="border border-border px-3 py-2">~72%</td><td className="border border-border px-3 py-2">~40%</td><td className="border border-border px-3 py-2">~31%</td></tr>
              <tr><td className="border border-border px-3 py-2">2024</td><td className="border border-border px-3 py-2">~76%</td><td className="border border-border px-3 py-2">~41%</td><td className="border border-border px-3 py-2">~33%</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">What the trend tells us</h2>
        <p>
          Between 2017 and 2019, boundaries were relatively stable, with Grade 9 in Literature sitting
          around 77&ndash;80% of total marks. The pandemic years (2020 and 2021) saw no public exams, with
          grades awarded by teachers. When exams returned in 2022, Ofqual took the deliberate step of
          lowering boundaries significantly, giving students the &ldquo;midway point&rdquo; between 2019
          and the teacher-assessed inflation. Since then, boundaries have steadily climbed back towards
          their pre-pandemic level, and the 2024 cohort saw the most stringent boundaries since 2019.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What this means for your revision</h2>
        <p>
          When you are using past papers as mocks, you should always use the grade boundaries from the
          year the paper was sat. Using a 2019 paper with 2022 boundaries will massively inflate your
          apparent grade. The best practice is to check your exam board&rsquo;s official boundary document
          each summer and mark your papers against the most recent published boundaries.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Are boundaries rising again?</h2>
        <p>
          Yes, slowly. Ofqual has stated publicly that the system is now back to &ldquo;pre-pandemic
          normal,&rdquo; and we expect 2025 boundaries to sit broadly in line with 2024 or climb one or
          two marks higher. Students targeting Grade 7+ should prepare for boundaries closer to 2019
          levels rather than relying on the softer 2022 figures.
        </p>

        <p className="text-xs italic text-muted-foreground">
          Note: all historical figures above are approximate and drawn from publicly available AQA
          grade boundary documents. Exact numbers vary by specification and tier.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-grade-boundaries-2024">GCSE English grade boundaries 2024</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-pass-rate-statistics">GCSE English pass rate statistics</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9 in GCSE English Literature</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Track your mocks against real boundaries</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Upload and score past papers automatically against official boundaries using The English Hub.
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
    </AnalysisBoardGate>
  )
}
