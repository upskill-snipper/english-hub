import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All GCSE English Exam Boards Compared (AQA, Edexcel, OCR, Eduqas) | The English Hub',
  description:
    'A side-by-side comparison of the four main GCSE English exam boards: AQA, Edexcel, OCR and WJEC Eduqas. Papers, set texts and key differences.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/all-gcse-english-exam-boards-compared',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'All GCSE English Exam Boards Compared',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A comparison of AQA, Edexcel, OCR and WJEC Eduqas GCSE English Language and Literature specifications.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/all-gcse-english-exam-boards-compared',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">All exam boards compared</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        All GCSE English exam boards compared
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Four exam boards currently offer GCSE English in England and Wales: AQA, Pearson Edexcel, OCR
          and WJEC Eduqas. Students do not get to choose &mdash; your school decides which board to
          enter you for, usually based on what texts the department has chosen to teach. The
          specifications are broadly similar, but there are important differences in paper structure,
          set texts and unseen poetry requirements that affect how you should revise.
        </p>

        <h2 className="text-xl font-semibold text-foreground">AQA</h2>
        <p>
          AQA is by far the most popular board, used by the majority of English state schools. The
          English Language specification (8700) consists of two 1h 45m papers each worth 50% of the
          grade. The Literature specification (8702) runs two papers, each closed-book, covering
          Shakespeare, the 19th-century novel, a modern text and a poetry anthology called
          &ldquo;Power and Conflict&rdquo; or &ldquo;Love and Relationships.&rdquo;
        </p>

        <h2 className="text-xl font-semibold text-foreground">Edexcel</h2>
        <p>
          Edexcel (Pearson) is the second most popular. Language is tested across two papers of
          roughly the same structure as AQA. Literature includes a slightly different anthology (the
          Pearson Poetry Anthology) and a more prominent unseen poetry element &mdash; students must
          analyse two unseen poems comparatively. The 19th-century novel and Shakespeare options are
          similar, but the specific texts on offer vary.
        </p>

        <h2 className="text-xl font-semibold text-foreground">OCR</h2>
        <p>
          OCR is used by a smaller proportion of schools but has a strong following in grammar schools
          and independents. Its English Language specification has a slightly heavier emphasis on
          transactional writing, and its Literature specification is notable for giving schools the
          option of teaching 20th-century literature across a wider range of genres.
        </p>

        <h2 className="text-xl font-semibold text-foreground">WJEC Eduqas</h2>
        <p>
          Eduqas (the English-medium arm of WJEC) is popular in Wales and parts of southern England.
          Its Literature specification uniquely splits the paper into two components: one on
          Shakespeare and poetry, and one on 19th- and 20th-century prose. Its unseen poetry element
          is comparative, and its Language papers include a distinct proofreading task.
        </p>

        <h2 className="text-xl font-semibold text-foreground">At-a-glance comparison</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">Board</th>
                <th className="border border-border px-3 py-2 text-left">Market share</th>
                <th className="border border-border px-3 py-2 text-left">Poetry anthology</th>
                <th className="border border-border px-3 py-2 text-left">Unseen poetry</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">AQA</td><td className="border border-border px-3 py-2">~50%</td><td className="border border-border px-3 py-2">Power &amp; Conflict / Love &amp; Relationships</td><td className="border border-border px-3 py-2">Two poems, one comparison</td></tr>
              <tr><td className="border border-border px-3 py-2">Edexcel</td><td className="border border-border px-3 py-2">~25%</td><td className="border border-border px-3 py-2">Pearson Anthology (Conflict / Relationships / Time &amp; Place)</td><td className="border border-border px-3 py-2">Two poems, comparison required</td></tr>
              <tr><td className="border border-border px-3 py-2">OCR</td><td className="border border-border px-3 py-2">~15%</td><td className="border border-border px-3 py-2">Love and Relationships / Conflict</td><td className="border border-border px-3 py-2">Single poem analysis</td></tr>
              <tr><td className="border border-border px-3 py-2">Eduqas</td><td className="border border-border px-3 py-2">~10%</td><td className="border border-border px-3 py-2">Poetry Anthology (Eduqas)</td><td className="border border-border px-3 py-2">Comparative unseen</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Are some boards easier than others?</h2>
        <p>
          No. Ofqual regulates all boards against the same national standards, and grade boundaries are
          adjusted annually to ensure that a Grade 7 on AQA means the same thing as a Grade 7 on
          Eduqas. Don&rsquo;t let anyone tell you that switching to another board would boost your
          grade &mdash; it won&rsquo;t.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How to find out your board</h2>
        <p>
          Ask your English teacher, check your statement of entry, or look at the front of any past
          paper your school has given you. The board is always printed at the top of the paper along
          with the specification number (e.g. 8700 for AQA English Language).
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-literature-set-texts-list-2024">Literature set texts list 2024</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-grade-boundaries-2024">GCSE English grade boundaries 2024</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-vs-english-language-vs-literature">Language vs Literature explained</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-explained-for-parents">GCSE English explained for parents</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Board-specific practice</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The English Hub has targeted practice for AQA, Edexcel, OCR and Eduqas students.
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
