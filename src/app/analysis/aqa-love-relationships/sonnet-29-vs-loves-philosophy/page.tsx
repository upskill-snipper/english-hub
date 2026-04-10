import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'sonnet-29-vs-loves-philosophy'
const H1 = 'Sonnet 29 vs Love\u2019s Philosophy: Comparison Analysis'
const DESCRIPTION =
  'Grade 9 comparison of Sonnet 29 by Elizabeth Barrett Browning and Love\u2019s Philosophy by Percy Bysshe Shelley. Thesis, three comparison paragraphs, quotations and context. Written by GCSE examiners.'

export const metadata: Metadata = {
  title: `${H1} | AQA Love and Relationships`,
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
        <span className="text-foreground">Sonnet 29 vs Love&rsquo;s Philosophy</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: two very different demands made of absent lovers</h2>
        <p>
          Both Elizabeth Barrett Browning and Percy Bysshe Shelley write from the position of a
          lover whose beloved is not in the room, and both turn that absence into an urgent
          demand for physical presence. The crucial difference is tone. Barrett Browning writes
          from <em>inside</em> an established, mutual relationship and uses the Petrarchan sonnet
          to stage a private correction of her own fantasy. Shelley writes from <em>outside</em>
          an unestablished relationship and uses the hymn-like ballad form to stage a public,
          rhetorical seduction. A Grade 9 answer argues that both poems fight absence with
          nature imagery, but that Barrett Browning is confident of reciprocation where Shelley
          is still trying to earn it.
        </p>

        <h2>Comparison 1: how nature is used to justify desire</h2>
        <p>
          Shelley builds his entire argument from natural pairing. &ldquo;The fountains mingle
          with the river / And the rivers with the ocean&rdquo; sets up an <em>a fortiori</em>
          logic: if everything in the universe is bonded, &ldquo;Why not I with thine?&rdquo;
          The repeated rhetorical question makes the beloved&rsquo;s refusal feel unnatural,
          almost immoral. Barrett Browning also uses nature, but she turns it inward. Her
          thoughts &ldquo;twine and bud&rdquo; around her lover like &ldquo;wild vines, about a
          tree,&rdquo; but she then rejects this growth as a screen that hides the real man.
          Shelley&rsquo;s nature is evidence; Barrett Browning&rsquo;s nature is a
          self-criticism she has to prune away.
        </p>

        <h2>Comparison 2: form and the power dynamic</h2>
        <p>
          The Petrarchan sonnet gives Barrett Browning a built-in volta. Her turn arrives at
          line six with the imperative &ldquo;I will not have my thoughts instead of thee,&rdquo;
          and the remainder of the sonnet is a sequence of commands: &ldquo;Renew thy
          presence,&rdquo; &ldquo;Rustle thy boughs.&rdquo; As a Victorian woman writing about
          physical desire, her use of the imperative is quietly radical. Shelley&rsquo;s
          two-stanza ballad, by contrast, ends each stanza with a rhetorical question rather
          than a command. His speaker has no authority to command; he can only ask. A top-band
          answer notices that the formal difference <em>is</em> the meaning: the sonnet enacts
          certainty, the hymn enacts pleading.
        </p>

        <h2>Comparison 3: the ending and what it leaves us with</h2>
        <p>
          Shelley closes with the transactional kiss: &ldquo;What is all this sweet work
          worth / If thou kiss not me?&rdquo; Love is offered as a debt the beloved owes to
          nature. Barrett Browning closes with a paradox: &ldquo;I do not think of thee &mdash;
          I am too near thee.&rdquo; Presence has replaced imagination altogether. Shelley
          ends hoping, Barrett Browning ends already satisfied. Both endings are about
          fulfilment, but only one of them has actually reached it.
        </p>

        <h2>Context</h2>
        <p>
          Barrett Browning composed <em>Sonnets from the Portuguese</em> during her secret
          courtship with Robert Browning in the 1840s. As a woman writing desire, her use of
          the sonnet &mdash; a form historically used by men to address idealised women &mdash;
          is itself an act of reclamation. Shelley was a Romantic radical whose entire worldview
          rested on the idea that human feeling should not be constrained by convention.
          &ldquo;Love&rsquo;s Philosophy&rdquo; (1819) is both a love poem and a piece of
          Romantic argument: the speaker wants the beloved to accept that nature has already
          authorised their union.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Barrett Browning and Shelley both weaponise nature against absence, but the sonnet
          form lets Barrett Browning move from doubt to certainty in fourteen lines, while the
          ballad form traps Shelley&rsquo;s speaker in a question he cannot answer on his own.
          The real difference is authority: one lover is already loved back, and one is still
          trying to be.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>
            <Link href="/analysis/aqa-love-relationships/sonnet-29-vs-porphyrias-lover" className="text-primary hover:underline">
              Sonnet 29 vs Porphyria&rsquo;s Lover
            </Link>
          </li>
          <li>
            <Link href="/analysis/aqa-love-relationships/romantic-love-theme-across-anthology" className="text-primary hover:underline">
              Romantic love across the anthology
            </Link>
          </li>
          <li>
            <Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">
              How to answer the comparison question
            </Link>
          </li>
          <li>
            <Link href="/analysis/aqa-love-relationships/key-quotes-love-relationships-all-poems" className="text-primary hover:underline">
              Key quotes for every poem
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Revise the whole anthology</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Pair this comparison with our full Love and Relationships revision notes for plot
          summaries, context and annotated poem texts.
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
