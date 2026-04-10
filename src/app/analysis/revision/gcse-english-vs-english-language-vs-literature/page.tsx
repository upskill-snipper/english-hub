import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English vs English Language vs English Literature | The English Hub',
  description:
    'Confused about the difference between GCSE English, English Language and English Literature? A full examiner explanation of the three.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-vs-english-language-vs-literature',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCSE English vs English Language vs English Literature',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A side-by-side comparison of GCSE English, GCSE English Language and GCSE English Literature.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/gcse-english-vs-english-language-vs-literature',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">GCSE English vs Language vs Literature</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English vs English Language vs English Literature
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          One of the most common questions we get from students and parents is some variation on:
          &ldquo;What&rsquo;s the difference between GCSE English, English Language and English
          Literature?&rdquo; The short answer is that GCSE English is an umbrella term that actually
          refers to two separate qualifications. Here&rsquo;s the full explanation.
        </p>

        <h2 className="text-xl font-semibold text-foreground">&ldquo;GCSE English&rdquo; is not a single qualification</h2>
        <p>
          When schools and the government talk about &ldquo;GCSE English,&rdquo; they almost always
          mean GCSE English Language. There used to be a combined qualification simply called
          &ldquo;English,&rdquo; but this was discontinued in 2014. Today, students sit GCSE English
          Language, GCSE English Literature, or both. Most students sit both.
        </p>

        <h2 className="text-xl font-semibold text-foreground">GCSE English Language</h2>
        <p>
          English Language is a skills-based qualification. It tests your ability to read and analyse
          unfamiliar texts, write analytically, and produce your own creative and transactional
          writing. It doesn&rsquo;t test knowledge of any set text. The two papers (in AQA, 8700) are
          structured as:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Paper 1:</strong> Explorations in Creative Reading and Writing (20th&ndash;21st century fiction).</li>
          <li><strong className="text-foreground">Paper 2:</strong> Writers&rsquo; Viewpoints and Perspectives (19th&ndash;21st century non-fiction).</li>
        </ul>
        <p>
          Each paper is 1h 45m and split 50/50 between reading and writing. A pass in English Language
          is what the government requires under the condition of funding rules.
        </p>

        <h2 className="text-xl font-semibold text-foreground">GCSE English Literature</h2>
        <p>
          English Literature is a knowledge-based qualification built around set texts. Students
          study a Shakespeare play, a 19th-century novel, a modern text (play or prose) and a poetry
          anthology. Exams are closed-book in England, meaning students must memorise quotations. The
          AQA specification (8702) has two papers:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Paper 1:</strong> Shakespeare and the 19th-century novel (1h 45m).</li>
          <li><strong className="text-foreground">Paper 2:</strong> Modern texts and poetry (2h 15m).</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Side-by-side comparison</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="border border-border px-3 py-2 text-left">&nbsp;</th>
                <th className="border border-border px-3 py-2 text-left">English Language</th>
                <th className="border border-border px-3 py-2 text-left">English Literature</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-border px-3 py-2">Set texts?</td><td className="border border-border px-3 py-2">No</td><td className="border border-border px-3 py-2">Yes (4 texts)</td></tr>
              <tr><td className="border border-border px-3 py-2">Closed book?</td><td className="border border-border px-3 py-2">N/A</td><td className="border border-border px-3 py-2">Yes</td></tr>
              <tr><td className="border border-border px-3 py-2">Creative writing?</td><td className="border border-border px-3 py-2">Yes</td><td className="border border-border px-3 py-2">No</td></tr>
              <tr><td className="border border-border px-3 py-2">Required for funding?</td><td className="border border-border px-3 py-2">Yes (Grade 4+)</td><td className="border border-border px-3 py-2">No</td></tr>
              <tr><td className="border border-border px-3 py-2">Total papers</td><td className="border border-border px-3 py-2">2</td><td className="border border-border px-3 py-2">2</td></tr>
              <tr><td className="border border-border px-3 py-2">Total time</td><td className="border border-border px-3 py-2">3h 30m</td><td className="border border-border px-3 py-2">4h 00m</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-foreground">Which is harder?</h2>
        <p>
          It depends on your strengths. English Literature relies on memory and requires sustained
          reading of challenging texts like Shakespeare and Dickens. English Language is skills-based
          and rewards exam-room composition and timing. Students who prefer clear, learnable content
          often find Literature easier; students who dislike memorising find Language easier.
          Historically, Grade 9 is slightly harder to achieve in Literature than in Language.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Do you have to take both?</h2>
        <p>
          In England, almost all schools enter students for both. It&rsquo;s not a legal requirement
          to take Literature, but dropping it would likely close doors at A-level and at some
          universities. If you only take one, take Language, because that&rsquo;s the one the
          condition of funding rule tracks.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A quick glossary</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">GCSE English:</strong> Informal term. Usually means English Language.</li>
          <li><strong className="text-foreground">English Language:</strong> Skills-based; reading and writing unseen texts.</li>
          <li><strong className="text-foreground">English Literature:</strong> Knowledge-based; essays on set texts.</li>
          <li><strong className="text-foreground">Combined / Dual English:</strong> The old combined GCSE. No longer available.</li>
        </ul>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-explained-for-parents">GCSE English explained for parents</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/all-gcse-english-exam-boards-compared">All exam boards compared</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-literature-set-texts-list-2024">Literature set texts list 2024</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-language">How to get a Grade 9 in English Language</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revise both with one tool</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The English Hub covers both Language and Literature in a single study planner.
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
