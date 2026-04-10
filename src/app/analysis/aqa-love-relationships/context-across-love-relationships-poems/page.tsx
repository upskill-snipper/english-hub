import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'context-across-love-relationships-poems'
const H1 = 'Context Across the AQA Love and Relationships Poems'
const DESCRIPTION =
  'How to use context across the AQA Love and Relationships cluster. Romantic, Victorian, modern and contemporary contexts and how to weave them into a comparison. Written by GCSE examiners.'

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
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-love-relationships" className="hover:text-foreground">AQA Love and Relationships</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Context across the poems</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Why context matters in AQA</h2>
        <p>
          AO3 (context) is worth a significant chunk of the marks, but it is also the
          assessment objective students most commonly misuse. The examiner does not reward
          biography for its own sake. Context earns marks only when it illuminates the
          reading. &ldquo;Shelley was a Romantic poet&rdquo; is not context; &ldquo;Shelley
          was a second-generation Romantic who believed that human feeling should not be
          constrained by social convention, which is why &lsquo;Love&rsquo;s Philosophy&rsquo;
          treats the beloved&rsquo;s refusal as a violation of nature&rdquo; is context.
        </p>

        <h2>The Romantic context</h2>
        <p>
          Use for <em>Love&rsquo;s Philosophy</em> (Shelley) and <em>When We Two
          Parted</em> (Byron). The Romantics believed in nature as moral authority,
          individual feeling as a guide, and the body as a legitimate subject for
          poetry. Both poems draw on this inheritance &mdash; Shelley to argue for
          consummation, Byron to dramatise secret grief.
        </p>

        <h2>The Victorian context</h2>
        <p>
          Use for <em>Sonnet 29</em> (Barrett Browning), <em>Porphyria&rsquo;s Lover</em>
          (Robert Browning), <em>My Last Duchess</em> (Robert Browning) and <em>Neutral
          Tones</em> (Hardy). Victorian poetry is interested in the inner life,
          unreliable speakers, and the gap between public respectability and private
          feeling. EBB is remarkable as a female poet reclaiming the sonnet; RB is
          remarkable as the inventor of the modern dramatic monologue; Hardy is remarkable
          for his pessimism about love and nature alike.
        </p>

        <h2>Early twentieth century</h2>
        <p>
          Use for <em>The Farmer&rsquo;s Bride</em> (Charlotte Mew, 1916). Mew sits on the
          edge of modernism and writes about marriage, consent and psychological distress
          at a time when those subjects were still difficult to speak about directly.
        </p>

        <h2>Post-war British poetry</h2>
        <p>
          Use for <em>Walking Away</em> (C. Day Lewis, 1962) and <em>Eden Rock</em>
          (Causley, 1988). These are poems from a generation of British poets interested
          in family, memory and the rituals of everyday life.
        </p>

        <h2>Contemporary British poetry</h2>
        <p>
          Use for <em>Follower</em> (Heaney, 1966), <em>Mother, Any Distance</em>
          (Armitage, 1993), <em>Before You Were Mine</em> (Duffy, 1993), <em>Climbing My
          Grandfather</em> (Waterhouse), <em>Letters from Yorkshire</em> (Dooley),
          <em> Winter Swans</em> (Sheers) and <em>Singh Song!</em> (Nagra, 2007). These
          contemporary poems often use informal voice, loose form and autobiographical
          material. Nagra in particular gives you direct context: a British-Punjabi poet
          writing in &ldquo;Punglish&rdquo; to celebrate and gently satirise British Asian
          family life.
        </p>

        <h2>How to weave context in</h2>
        <p>
          Attach context to a specific quotation, not to a whole paragraph. &ldquo;The
          exclamatory &lsquo;O my palm-tree&rsquo; is unusually bold for a Victorian female
          poet, for whom desire was supposed to be private&hellip;&rdquo; Two or three
          sentences of relevant context per essay is plenty.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not start every context sentence with the poet&rsquo;s date of birth. Do not
          list the Romantics without saying what the Romantics believed. Do not treat
          context as a paragraph at the end of the essay &mdash; integrate it.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/how-to-write-grade-9-love-relationships-essay" className="text-primary hover:underline">How to write a Grade 9 essay</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">How to answer the comparison question</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/romantic-love-theme-across-anthology" className="text-primary hover:underline">Romantic love</Link></li>
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
  )
}
