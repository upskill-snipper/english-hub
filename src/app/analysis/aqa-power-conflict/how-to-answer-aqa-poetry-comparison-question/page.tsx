import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question'

export const metadata: Metadata = {
  title: 'How to Answer the AQA Poetry Comparison Question | Power and Conflict',
  description:
    'Grade 9 technique guide to the AQA Power and Conflict poetry comparison question. Structure, AO marks, timing and a model paragraph. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Answer the AQA Poetry Comparison Question',
    description: 'Grade 9 exam technique for AQA Power and Conflict.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: PAGE_URL,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-power-conflict" className="hover:text-foreground">AQA Power and Conflict</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">How to Answer the Comparison Question</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">How to Answer the AQA Poetry Comparison Question</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          The AQA Power and Conflict comparison question is worth 30 marks and sits on
          Paper 2, Section B. You are given one named poem printed on the paper and asked
          to compare it with one other poem of your choice from the Power and Conflict
          cluster. You have roughly 45 minutes. The good news is that the question barely
          changes: it is almost always a theme you already know, and the skills it tests
          are the same every year.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Assessment Objectives</h2>
        <p>
          Examiners mark three AOs on this question. AO1 (12 marks) tests your response to
          both poems, your selection of evidence and a developed argument. AO2 (12 marks)
          tests your analysis of language, form and structure and the effects these create.
          AO3 (6 marks) tests your understanding of context — the social, historical or
          biographical ideas that informed each poem. You cannot ignore any of them, but
          AO1 and AO2 together are where Grade 9 answers win their marks.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Choose the right second poem</h2>
        <p>
          Spend no more than two minutes on this. Choose a poem that lets you talk about
          at least two methods (form, structure or a specific language technique) and that
          shares a theme with the named poem but handles it differently. A contrast is
          easier to write about than a tight match. If the question names
          <em> Ozymandias</em>, for example, pair it with <em>London</em> for a contrast
          in scale, or with <em>My Last Duchess</em> for a contrast in time.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The structure that works</h2>
        <p>
          Use a four-paragraph integrated structure. Your introduction should state a clear
          thesis that identifies both the shared theme and the key difference. Then write
          three comparative body paragraphs, each led by a methodology point — for
          example, one on form, one on imagery, one on voice. End every paragraph with a
          sentence that returns to your thesis. Do not split the essay into &quot;Poem A,
          then Poem B&quot;; examiners call this the doom structure and it caps you below
          Grade 7.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Use comparative connectives</h2>
        <p>
          Phrases like &quot;Similarly...&quot;, &quot;In contrast...&quot;, &quot;Whereas
          Shelley...&quot; and &quot;Both poets...&quot; are literally the bridges the
          examiner is looking for. A rule of thumb: every paragraph should contain at least
          two connectives that explicitly name both poets.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Model thesis sentence</h2>
        <p>
          &quot;Both Shelley and Browning present powerful men whose attempts to use art
          as a vehicle for permanence expose their cruelty, but while Shelley&apos;s sonnet
          uses time to dismantle the tyrant, Browning&apos;s dramatic monologue uses the
          tyrant&apos;s own voice to do the job.&quot;
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Timing</h2>
        <p>
          Plan for five minutes, write for thirty-five, check for five. Your plan should be
          a list of three method comparisons plus two specific quotes per poem. If you
          spend longer than seven minutes planning, you are planning wrong.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/how-to-write-grade-9-power-conflict-essay" className="text-primary hover:underline">How to Write a Grade 9 Power and Conflict Essay</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/easy-comparison-pairings-power-conflict" className="text-primary hover:underline">Easy Comparison Pairings</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/best-poems-to-learn-aqa-power-conflict" className="text-primary hover:underline">Best Poems to Learn</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/key-quotes-aqa-power-conflict-all-poems" className="text-primary hover:underline">Key Quotes (All Poems)</Link></li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revising the whole cluster?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          For full poem-by-poem study, head to our Power and Conflict revision notes.
        </p>
        <div className="mt-4">
          <Link href="/revision/poetry/power-and-conflict" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Go to Power and Conflict revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
