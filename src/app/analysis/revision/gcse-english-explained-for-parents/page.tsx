import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English Explained for Parents | The English Hub',
  description:
    'A clear explanation of GCSE English for parents: what Language and Literature involve, the grading system, what a pass is, and how to help at home.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-explained-for-parents',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCSE English Explained for Parents',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'What parents need to know about GCSE English Language and Literature, grade boundaries, resits and how to help at home.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/gcse-english-explained-for-parents',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">GCSE English explained for parents</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English explained for parents
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          GCSE English changed significantly in 2017, and if you last sat an English exam yourself more
          than a decade ago, quite a lot will look unfamiliar. The content is more demanding, the
          grading scale now goes from 9 to 1 instead of A* to G, and there is no longer any coursework
          in most specifications. This guide explains exactly what your child is being assessed on,
          what a pass looks like, and how you can help at home without taking over.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Two separate qualifications</h2>
        <p>
          GCSE English is actually two qualifications: <strong className="text-foreground">English
          Language</strong> and <strong className="text-foreground">English Literature</strong>. Most
          students sit both, and the government only requires a pass in English Language for the
          purposes of further education funding. Both are 100% exam-based. There is no longer any
          controlled assessment or coursework.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The 9&ndash;1 grading scale</h2>
        <p>
          In 2017, the old A*&ndash;G scale was replaced with a 9&ndash;1 numerical scale. A Grade 9 is
          roughly equivalent to the top end of the old A* (only the top 4% of students reach it). A
          Grade 7 is broadly an A. A Grade 5 is a &ldquo;strong pass&rdquo; and a Grade 4 is a
          &ldquo;standard pass&rdquo; &mdash; the minimum needed for most colleges and apprenticeships.
        </p>

        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">9&ndash;1 grade</th>
                <th className="border border-border px-3 py-2 text-left">Old equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">9</td><td className="border border-border px-3 py-2">Top end of A*</td></tr>
              <tr><td className="border border-border px-3 py-2">8</td><td className="border border-border px-3 py-2">Lower A*</td></tr>
              <tr><td className="border border-border px-3 py-2">7</td><td className="border border-border px-3 py-2">A</td></tr>
              <tr><td className="border border-border px-3 py-2">6</td><td className="border border-border px-3 py-2">High B</td></tr>
              <tr><td className="border border-border px-3 py-2">5</td><td className="border border-border px-3 py-2">Low B / high C (strong pass)</td></tr>
              <tr><td className="border border-border px-3 py-2">4</td><td className="border border-border px-3 py-2">C (standard pass)</td></tr>
              <tr><td className="border border-border px-3 py-2">3</td><td className="border border-border px-3 py-2">D</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">English Language, at a glance</h2>
        <p>
          English Language is a skills-based qualification. Students sit two papers: one on 20th- and
          21st-century fiction, one on non-fiction writing. Each paper has a reading section
          (analysing a source text) and a writing section (producing their own creative or
          transactional writing). There are no set texts &mdash; they cannot revise the sources in
          advance.
        </p>

        <h2 className="text-xl font-semibold text-foreground">English Literature, at a glance</h2>
        <p>
          English Literature is a knowledge-plus-analysis qualification based on set texts. Most boards
          require a Shakespeare play, a 19th-century novel, a modern text and a poetry anthology. The
          exams are closed-book in England, meaning students must memorise quotations. This is where
          most of the revision pressure comes from.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How can you help at home?</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Test them on quotations &mdash; you don&rsquo;t need to understand the quote, just the words.</li>
          <li>Ask them to explain a scene to you &ldquo;as if you knew nothing.&rdquo;</li>
          <li>Read their practice essays aloud together &mdash; ears catch mistakes eyes miss.</li>
          <li>Make sure they take breaks, eat, sleep and get outside regularly.</li>
          <li>Stay calm. Anxiety is contagious in both directions.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">What if they don&rsquo;t pass?</h2>
        <p>
          If your child gets below a Grade 4 in English Language, they will be required to resit. This
          is not a disaster &mdash; resit pass rates are high and there are November and June sittings.
          Functional Skills Level 2 is also often accepted as a GCSE equivalent for apprenticeships
          and many employers.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Three things that make the biggest difference</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Writing regularly, in timed conditions, with feedback.</li>
          <li>Memorising a small bank of strong quotations using spaced repetition.</li>
          <li>Sleep, food and exercise in the weeks leading up to the paper.</li>
        </ol>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-help-your-child-revise-gcse-english">How to help your child revise GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-vs-english-language-vs-literature">English Language vs Literature explained</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/all-gcse-english-exam-boards-compared">All exam boards compared</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-literature-set-texts-list-2024">Literature set texts list 2024</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Support your child&rsquo;s revision</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign up as a parent to track progress, see examiner feedback and understand where your child needs help.
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
