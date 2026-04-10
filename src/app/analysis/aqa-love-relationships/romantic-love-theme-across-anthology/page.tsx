import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

const SLUG = 'romantic-love-theme-across-anthology'
const H1 = 'Romantic Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of romantic love across the AQA Love and Relationships cluster. Best poems, key quotes, contrasts and essay angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Romantic love theme</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for romantic love</h2>
        <p>
          The strongest romantic-love poems in the cluster are <em>Sonnet 29</em> by
          Elizabeth Barrett Browning, <em>Love&rsquo;s Philosophy</em> by Shelley, <em>Singh
          Song!</em> by Daljit Nagra and <em>Winter Swans</em> by Owen Sheers. Each presents
          romantic love through a different lens: EBB through obsessive imagination that
          corrects itself, Shelley through rhetorical seduction, Nagra through comic
          celebration, and Sheers through wordless reconciliation. Understanding romantic
          love in the anthology means recognising that it is never simple &mdash; it is
          always coloured by the form the poet chooses and the audience they imagine.
        </p>

        <h2>How the cluster defines romantic love</h2>
        <p>
          AQA has selected poems that push back against greeting-card ideas of romance.
          Barrett Browning corrects her own fantasy because reality is better than
          imagination. Shelley uses nature to argue the beloved into a kiss but is still
          pleading at the final line. Nagra places romantic love inside an ordinary shop
          above which two newlyweds are deliriously happy, and uses playful, non-standard
          English to refuse the inherited English love lyric. Sheers restores a relationship
          wordlessly, letting swans model the behaviour the couple reproduce.
        </p>

        <h2>Key quotations (public domain and fair use)</h2>
        <p>
          From <em>Sonnet 29</em>: &ldquo;I do not think of thee &mdash; I am too near
          thee.&rdquo; From <em>Love&rsquo;s Philosophy</em>: &ldquo;Nothing in the world is
          single.&rdquo; These two lines, placed side by side, make the ideal opening to a
          romantic-love essay because they encapsulate the central argument of each poem:
          reality trumps thought, and separation trumps the natural order.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Romantic love in the cluster is best understood by contrast. Pair <em>Sonnet 29</em>
          with <em>Porphyria&rsquo;s Lover</em> to show how the same obsessive attention can
          become healthy self-correction or pathological violence. Pair <em>Winter Swans</em>
          with <em>Neutral Tones</em> to show how the same setting &mdash; a couple beside
          water &mdash; can produce either reconciliation or resignation. Pair <em>Singh
          Song!</em> with <em>Love&rsquo;s Philosophy</em> to show how playful, non-English
          forms can out-argue Romantic tradition.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that romantic love in the AQA cluster is always negotiated
          against something &mdash; against fantasy, against convention, against family
          duty, against the failed previous relationship. The poets who celebrate romantic
          love most fully (Nagra, Sheers) are the ones who let it exist alongside the
          ordinary rather than above it.
        </p>

        <h2>Context to weave in</h2>
        <p>
          Use Victorian context for EBB and Shelley, contemporary British Asian context for
          Nagra, and post-1990s British poetry for Sheers. The movement from Victorian
          seriousness to contemporary playfulness is one of the most useful arcs you can
          point to in an exam essay.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Avoid treating romantic love as a single idea across the cluster. Avoid writing
          about the poets as if they all believe the same thing about romance. Always
          distinguish between what the speaker says and what the poem itself appears to
          endorse &mdash; the dramatic monologue in particular makes this gap load-bearing.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/sonnet-29-vs-loves-philosophy" className="text-primary hover:underline">Sonnet 29 vs Love&rsquo;s Philosophy</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/winter-swans-vs-neutral-tones" className="text-primary hover:underline">Winter Swans vs Neutral Tones</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/possessive-love-theme-across-anthology" className="text-primary hover:underline">Possessive love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/key-quotes-love-relationships-all-poems" className="text-primary hover:underline">Key quotes for every poem</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Revise the whole anthology</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Use this theme page alongside our full Love and Relationships revision notes for
          context and annotated poem texts.
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
