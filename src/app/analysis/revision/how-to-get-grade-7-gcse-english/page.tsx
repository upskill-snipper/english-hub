import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get a Grade 7 in GCSE English | The English Hub',
  description:
    'Step-by-step guide for students targeting a Grade 7 in GCSE English. The techniques, timings and essay structures that move you from Grade 6 to 7.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/how-to-get-grade-7-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get a Grade 7 in GCSE English',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A practical plan for moving from Grade 6 to Grade 7 in GCSE English Language and Literature.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/how-to-get-grade-7-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Grade 7 GCSE English</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to get a Grade 7 in GCSE English
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          A Grade 7 in GCSE English is the equivalent of the old A, and roughly the top 20% of students
          nationally achieve it. For most candidates who are already comfortably hitting Grade 5s and 6s
          in mocks, the jump to Grade 7 is about tightening essay structure, choosing better quotations
          and making sharper analytical points &mdash; not learning more content from scratch.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Where Grade 6 candidates lose the mark</h2>
        <p>
          The gap between Grade 6 and Grade 7 in the examiner&rsquo;s mark scheme is the difference between
          &ldquo;clear understanding&rdquo; and &ldquo;thoughtful and developed response.&rdquo; In plain
          English: Grade 6 students explain what&rsquo;s happening; Grade 7 students explain why the writer
          made that choice. That single shift in mindset, applied to every paragraph, is usually enough to
          move up a grade.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The four habits to build</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Short quotations.</strong> Never quote more than 6 words. Embed them in your sentence.</li>
          <li><strong className="text-foreground">Word-level analysis.</strong> Pick one word from your quotation and explain its connotations.</li>
          <li><strong className="text-foreground">Authorial intention.</strong> Start or end every paragraph with &ldquo;Shakespeare / Dickens / the writer does this because...&rdquo;</li>
          <li><strong className="text-foreground">Thesis-led structure.</strong> Every essay needs a line in your first paragraph that directly answers the question.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">A Grade 7 revision plan for the final 8 weeks</h2>
        <p>Use this as a weekly rhythm:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Two timed paragraphs (25 minutes each) marked against the mark scheme.</li>
          <li>One full essay written in silence, under timed conditions, every other weekend.</li>
          <li>Daily 15-minute quote drills using flashcards and spaced repetition.</li>
          <li>Weekly re-read of one key scene or chapter, highlighting fresh quotations.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The Grade 7 phrase bank</h2>
        <p>
          Grade 7 students tend to use precise academic verbs. Swap &ldquo;shows&rdquo; for &ldquo;suggests,
          implies, foregrounds, dramatises, complicates, destabilises, mirrors, undermines.&rdquo; These
          verbs force you to make a specific claim about what the writer is doing rather than just
          describing the text.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: little, often and relevant</h2>
        <p>
          At Grade 7, context becomes part of the argument rather than a separate paragraph. Instead of
          writing &ldquo;this play was written in the Jacobean era when people believed in witches,&rdquo;
          a Grade 7 candidate writes &ldquo;the Jacobean audience&rsquo;s genuine belief in witchcraft
          meant Shakespeare&rsquo;s weird sisters were not a dramatic convenience but a spiritual threat
          that primed the audience for the cosmic disorder to come.&rdquo;
        </p>

        <h2 className="text-xl font-semibold text-foreground">The mindset shift</h2>
        <p>
          Stop thinking of English as a subject where you recall content and start thinking of it as a
          subject where you argue a case. Every question the exam asks is an invitation for you to take a
          position. Grade 6 students describe. Grade 7 students argue. Once that click happens, your
          paragraphs naturally develop the thoughtfulness the examiner is looking for.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9 in GCSE English Literature</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/3-month-gcse-english-revision-plan">3-month GCSE English revision plan</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/active-recall-techniques-gcse-english">Active recall techniques for GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Practise Grade 7 paragraphs</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The English Hub gives you examiner feedback on every paragraph you write.
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
