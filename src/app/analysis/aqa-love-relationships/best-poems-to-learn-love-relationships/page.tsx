import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

const SLUG = 'best-poems-to-learn-love-relationships'
const H1 = 'The Best Poems to Learn for AQA Love and Relationships'
const DESCRIPTION =
  'Which Love and Relationships poems to prioritise if you are short on revision time, with the reasoning behind each choice. Written by GCSE examiners.'

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
        <span className="text-foreground">Best poems to learn</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>The honest answer: learn all fifteen, but some more deeply</h2>
        <p>
          In an ideal world you learn all fifteen poems thoroughly, because the exam will
          give you one and you have to be able to pair it with another. In the real world,
          most students prioritise six poems for deep knowledge and another five for
          working familiarity. Here are the six we recommend and why.
        </p>

        <h2>1. Sonnet 29 (Barrett Browning)</h2>
        <p>
          A public-domain poem, short enough to memorise, and it pairs with almost anything
          that mentions romantic love, obsessive thought, nature or form. The paradoxical
          ending is gold.
        </p>

        <h2>2. Porphyria&rsquo;s Lover (Browning)</h2>
        <p>
          The anthology&rsquo;s most dramatic dramatic monologue. Possessive love,
          unreliable speaker, and form that rewards formal analysis. Pairs with Sonnet 29,
          The Farmer&rsquo;s Bride, and anything about power or control.
        </p>

        <h2>3. Neutral Tones (Hardy)</h2>
        <p>
          The anthology&rsquo;s cleanest lost-love poem. Short, symbolic, monochrome. Pairs
          with Winter Swans, When We Two Parted, Before You Were Mine and anything about
          memory or time.
        </p>

        <h2>4. Mother, Any Distance (Armitage)</h2>
        <p>
          A contemporary sonnet with a single killer extended metaphor. Easy to memorise
          quotations. Pairs with Follower, Walking Away, Climbing My Grandfather, and
          anything about family love or distance.
        </p>

        <h2>5. Follower (Heaney)</h2>
        <p>
          A perfect example of formal control and a final-stanza role reversal that
          rewards close reading. Pairs with almost every family poem in the cluster.
        </p>

        <h2>6. Love&rsquo;s Philosophy (Shelley)</h2>
        <p>
          Public-domain, short, and full of rhetorical questions you can quote. The
          clearest example of Romantic love as argument. Pairs with Sonnet 29, Winter
          Swans and anything nature-based.
        </p>

        <h2>The second group (know them well, but deprioritise if time is short)</h2>
        <p>
          Winter Swans, Walking Away, When We Two Parted and Before You Were Mine. These
          are all strong poems that give you safe pairings, especially for memory and
          retrospection questions.
        </p>

        <h2>The outliers you still cannot skip</h2>
        <p>
          The Farmer&rsquo;s Bride, Singh Song!, Letters from Yorkshire, Eden Rock and
          Climbing My Grandfather. Each of these has a good chance of appearing as the
          printed poem, and you need a working knowledge of all of them so that you can
          at least write a sensible comparison if one comes up.
        </p>

        <h2>How to prioritise memorisation</h2>
        <p>
          Learn three quotations per poem for your six priority poems (one on meaning,
          one on form and one on closing). For the rest, learn one strong quotation plus
          the shape of the poem so you can write about structure even if you cannot quote
          precisely.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/key-quotes-love-relationships-all-poems" className="text-primary hover:underline">Key quotes for every poem</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/easy-comparison-pairings-love-relationships" className="text-primary hover:underline">Easy comparison pairings</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">How to answer the comparison question</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-write-grade-9-love-relationships-essay" className="text-primary hover:underline">How to write a Grade 9 essay</Link></li>
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
