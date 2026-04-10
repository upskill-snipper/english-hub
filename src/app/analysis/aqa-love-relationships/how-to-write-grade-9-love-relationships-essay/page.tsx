import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

const SLUG = 'how-to-write-grade-9-love-relationships-essay'
const H1 = 'How to Write a Grade 9 AQA Love and Relationships Essay'
const DESCRIPTION =
  'A step-by-step Grade 9 method for the AQA Love and Relationships comparison question, with sentence starters, thesis templates and a worked example. Written by GCSE examiners.'

export const metadata: Metadata = {
  title: `${H1} | The English Hub`,
  description: DESCRIPTION,
  alternates: { canonical: `https://theenglishhub.app/analysis/aqa-love-relationships/${SLUG}` },
  openGraph: { title: H1, description: DESCRIPTION },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: H1,
    description: DESCRIPTION,
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: `https://theenglishhub.app/analysis/aqa-love-relationships/${SLUG}`,
  }

  return (
    <AnalysisBoardGate>
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-love-relationships" className="hover:text-foreground">AQA Love and Relationships</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">How to write a Grade 9 essay</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>What Grade 9 actually means</h2>
        <p>
          Grade 9 answers are <em>conceptualised</em> &mdash; the student has an overall
          argument about the poems rather than a sequence of observations about them. They
          are <em>comparative throughout</em>, not two separate mini-essays stapled
          together. They read poems as crafted artefacts in which form, language and
          structure all carry meaning. And they engage with context sparingly but
          precisely.
        </p>

        <h2>The Grade 9 thesis</h2>
        <p>
          Your opening thesis should name both poems, name the shared idea the question is
          asking about, commit to a clear position, and preview one difference that
          matters. Template: &ldquo;Both [Poet A] and [Poet B] present [idea] as
          [shared concept], but where [Poet A] [uses X to suggest Y], [Poet B] [uses X to
          suggest Y]. The result is that [difference in authorial purpose].&rdquo;
        </p>

        <h2>The Grade 9 paragraph shape</h2>
        <p>
          Open with a comparative claim. Move to textual evidence from one poem. Analyse
          the language. Move to textual evidence from the other poem. Analyse the
          language. Close with a sentence that pulls the comparison back to your thesis.
          This is called a woven or integrated comparison.
        </p>

        <h2>Sample Grade 9 paragraph (on nature in Sonnet 29 vs Love&rsquo;s Philosophy)</h2>
        <p>
          &ldquo;Both Barrett Browning and Shelley use nature imagery to collapse the
          distance between lover and beloved, but where Shelley presents nature as
          evidence for a union that has not yet happened, Barrett Browning presents nature
          as a fantasy that has to be pruned back. Shelley&rsquo;s fountains and rivers
          &lsquo;mingle&rsquo; in an unstoppable pattern that makes the beloved&rsquo;s
          refusal feel unnatural, even absurd. Barrett Browning&rsquo;s thoughts
          &lsquo;twine and bud&rsquo; around her lover like &lsquo;wild vines&rsquo;, but
          the metaphor turns against her: the vines hide the real man. Where Shelley uses
          nature to argue, Barrett Browning uses nature to diagnose. One speaker is
          petitioning for a future, the other is correcting a present.&rdquo;
        </p>

        <h2>What the top band rewards</h2>
        <p>
          Conceptualised thesis. Embedded short quotations. Confident discussion of form.
          Precise comparative connectives. Sparing, relevant context. A conclusion that
          moves the argument one step forward rather than just summarising.
        </p>

        <h2>Sentence starters for the top band</h2>
        <p>
          &ldquo;Both poets stage love as&hellip;&rdquo; &ldquo;Where [Poet A] presents X
          as Y, [Poet B] presents X as Z.&rdquo; &ldquo;This is reinforced by [Poet
          A]&rsquo;s formal choice to&hellip;&rdquo; &ldquo;Read together, the two poems
          argue that&hellip;&rdquo; &ldquo;The crucial difference emerges at the end,
          when&hellip;&rdquo; &ldquo;Both speakers rely on the same image of X, but the
          image performs opposite work.&rdquo;
        </p>

        <h2>Common reasons Grade 9 answers lose marks</h2>
        <p>
          Starting with biography instead of a thesis. Running out of time on the
          conclusion. Using paraphrase instead of embedded quotation. Feature-spotting
          (&ldquo;there is a simile here&rdquo;) without saying what the feature does.
          Treating the poems as equally important when one is more relevant to the
          question.
        </p>

        <h2>A five-minute final checklist</h2>
        <p>
          Does your opening sentence name both poems and a position? Does every paragraph
          compare? Have you embedded at least four short quotations? Have you named at
          least one formal feature per poem? Have you pulled context into the analysis
          rather than leaving it as a standalone paragraph? If every answer is yes, you
          are in the top band.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">How to answer the comparison question</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/easy-comparison-pairings-love-relationships" className="text-primary hover:underline">Easy comparison pairings</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/key-quotes-love-relationships-all-poems" className="text-primary hover:underline">Key quotes</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/context-across-love-relationships-poems" className="text-primary hover:underline">Context across the poems</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Revise the whole anthology</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Use this technique page alongside our full Love and Relationships revision notes.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/poetry/love-and-relationships"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Go to full revision notes
          </Link>
        </div>
      </section>
    </main>
    </AnalysisBoardGate>
  )
}
