import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get a Grade 9 in GCSE English Language | The English Hub',
  description:
    'A GCSE examiner guide to getting a Grade 9 in GCSE English Language: Paper 1 and Paper 2 technique, analytical writing and creative writing secrets.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/how-to-get-grade-9-gcse-english-language',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get a Grade 9 in GCSE English Language',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Examiner-written guide to the techniques, timings and reading skills needed to achieve a Grade 9 in GCSE English Language.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/how-to-get-grade-9-gcse-english-language',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Grade 9 GCSE English Language</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to get a Grade 9 in GCSE English Language
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          GCSE English Language is a skills paper, not a knowledge paper, which makes it simultaneously
          easier and harder than Literature. Easier because you cannot &ldquo;forget&rdquo; the content.
          Harder because every mark depends on what you produce on the day, usually in under 15 minutes per
          question. A Grade 9 is achievable even for students who have not read widely, provided they drill
          the right techniques under timed conditions.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What the Grade 9 student does differently</h2>
        <p>
          Top candidates do not read the texts faster or write more words. They make better strategic
          choices about where their time goes. On a typical AQA Paper 1, they finish the reading section
          inside 45 minutes so they have a full 45 minutes for creative writing, which carries 40 of the
          80 marks. On Paper 2, they read both non-fiction sources carefully, annotate as they go, and never
          skip Question 4 because they know it&rsquo;s a 16-mark prize for good comparative thinking.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Reading questions: the examiner&rsquo;s checklist</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Quote short. A two- or three-word quotation lets you analyse sound, connotation and structure in one sentence.</li>
          <li>Zoom to the word, not the sentence. Choose a single verb, adjective or noun to unpack.</li>
          <li>Name the effect on the reader before you name the technique.</li>
          <li>For structure questions, talk about focus shifts, perspective and pacing &mdash; not just &ldquo;it starts with...&rdquo;.</li>
          <li>For evaluation questions, agree with the statement but push back in a sophisticated way.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Creative writing: the Grade 9 formula</h2>
        <p>
          The single biggest differentiator at the top of the mark band is <strong className="text-foreground">restraint</strong>.
          Grade 6 students write crowded descriptions stuffed with similes. Grade 9 students slow down, choose
          a small moment, and describe it in sensory detail using three carefully placed devices instead of
          fifteen rushed ones. Open on a verb or an image, not a clich&eacute;. Control the tense. Use the
          semicolon twice, deliberately. Aim for roughly 600&ndash;700 words of genuine craft rather than
          1,000 words of padding.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Non-fiction writing (Paper 2 Q5)</h2>
        <p>
          For the transactional task, structure beats flourish. Open with a short, confident hook; signpost
          a clear argument; use a rhetorical device in every paragraph; and close with a call to action.
          Examiners reward a clear register, accurate spelling and a sophisticated vocabulary &mdash; not
          artificial rhetorical fireworks. One well-used anaphora is worth ten forced ones.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Timings that work</h2>
        <p>Most Grade 9 students follow a version of this plan on Paper 1:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">0&ndash;15 minutes:</strong> Read source, annotate, plan creative piece in the margin.</li>
          <li><strong className="text-foreground">15&ndash;60 minutes:</strong> Questions 1&ndash;4 (reading).</li>
          <li><strong className="text-foreground">60&ndash;105 minutes:</strong> Question 5 (creative writing).</li>
          <li><strong className="text-foreground">Last 5 minutes:</strong> Proofread creative piece for SPaG.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Accuracy is non-negotiable</h2>
        <p>
          The creative writing and transactional tasks each carry 16 marks for technical accuracy. A
          candidate who misses basic apostrophes or homophones will be capped, no matter how imaginative
          their writing is. Drill the top ten comma errors, learn your its/it&rsquo;s and their/there/they&rsquo;re,
          and practise proofreading in the last two minutes of every mock.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What to do in the final month</h2>
        <p>
          Write one full Paper 1 and one full Paper 2 under strict timing every week. Mark them against the
          published mark schemes. Keep a list of every error and technique you want to repeat, and revisit
          it before the exam. Reading and annotating past papers is not the same as writing them; examiners
          can always tell the difference.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9 in GCSE English Literature</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-vs-english-language-vs-literature">English Language vs Literature explained</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/active-recall-techniques-gcse-english">Active recall techniques for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/last-minute-gcse-english-revision">Last-minute GCSE English revision</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Ready to practise?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Get examiner-graded feedback on your Paper 1 and Paper 2 responses with The English Hub.
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
