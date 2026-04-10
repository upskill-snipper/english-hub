import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'how-to-answer-aqa-love-relationships-comparison'
const H1 = 'How to Answer the AQA Love and Relationships Comparison Question'
const DESCRIPTION =
  'Step-by-step method for the AQA Love and Relationships comparison question. Thesis, structure, sentence starters and a sample top-band paragraph. Written by GCSE examiners.'

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
        <span className="text-foreground">How to answer the comparison question</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>The task</h2>
        <p>
          The AQA Love and Relationships comparison question gives you one printed poem
          from the anthology and asks you to compare how the poets present a given idea
          (love, memory, distance, power, time) using that printed poem and <em>one other
          from the cluster you have studied</em>. The examiner is marking for a conceptual
          comparison across both poems, not a feature-spotting walk through each one
          separately.
        </p>

        <h2>A five-step method</h2>
        <p>
          (1) Read the given poem twice. (2) Annotate three moments: an opening statement,
          a shift in tone and a closing statement. (3) Choose your comparison poem &mdash;
          the one you know best that can genuinely engage with the prompt. (4) Plan three
          comparison paragraphs, each with a shared argument and contrasting evidence. (5)
          Open with a thesis sentence that answers the question directly and commits to a
          position both poems will test.
        </p>

        <h2>Structure that reliably hits the top band</h2>
        <p>
          Introduction (thesis). Paragraph 1: both poets present X in this way, with
          evidence from both. Paragraph 2: both poets use Y method, with evidence from
          both. Paragraph 3: a difference that matters &mdash; for example, the ending.
          Conclusion that returns to the thesis and names a final difference in authorial
          purpose. This is called an integrated or woven comparison, and it is what the
          top band rewards.
        </p>

        <h2>Sentence starters for each paragraph</h2>
        <p>
          &ldquo;Both poets frame love as&hellip;&rdquo; &ldquo;Where Hardy
          presents&hellip;Sheers presents&hellip;&rdquo; &ldquo;This is reinforced by the
          shared use of&hellip;&rdquo; &ldquo;The crucial difference arrives in the final
          stanza, where&hellip;&rdquo; &ldquo;Read together, the two poems argue
          that&hellip;&rdquo; Writing these starters into your plan guarantees you stay in
          comparative mode.
        </p>

        <h2>Sample top-band paragraph</h2>
        <p>
          &ldquo;Both Hardy and Sheers use pathetic fallacy to diagnose the health of a
          relationship, but Sheers lets the landscape forgive the couple while Hardy lets
          it convict them. Sheers&rsquo; rain stops halfway through &ldquo;Winter
          Swans,&rdquo; allowing the couple to walk into a world that has finished
          weeping; Hardy&rsquo;s sun stays &ldquo;white, as though chidden of God,&rdquo;
          a landscape that has already delivered its verdict. The difference is not just
          tonal &mdash; it is a difference in what each poet believes nature is for. Hardy
          uses nature as witness to irreparable damage; Sheers uses nature as a model the
          couple can copy.&rdquo;
        </p>

        <h2>Common mistakes to avoid</h2>
        <p>
          Do not write about the printed poem for three paragraphs and then add your
          comparison at the end. Do not use one comparison connective (&ldquo;similarly&rdquo;,
          &ldquo;in contrast&rdquo;) for the whole essay &mdash; vary them. Do not treat
          context as a separate final paragraph; weave it into your analysis wherever the
          poem&rsquo;s context actually illuminates the meaning.
        </p>

        <h2>Timing</h2>
        <p>
          You will have roughly 45 minutes. Spend five minutes planning, five minutes on
          the introduction, and about eight minutes per comparison paragraph. Leave four
          minutes for a tight conclusion.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/how-to-write-grade-9-love-relationships-essay" className="text-primary hover:underline">How to write a Grade 9 essay</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/easy-comparison-pairings-love-relationships" className="text-primary hover:underline">Easy comparison pairings</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/best-poems-to-learn-love-relationships" className="text-primary hover:underline">Best poems to learn</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/key-quotes-love-relationships-all-poems" className="text-primary hover:underline">Key quotes</Link></li>
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
