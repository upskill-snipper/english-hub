import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'possessive-love-theme-across-anthology'
const H1 = 'Possessive Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of possessive love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Possessive love theme</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for possessive love</h2>
        <p>
          The anthology&rsquo;s darkest strand is possessive love, and the two indispensable
          poems are <em>Porphyria&rsquo;s Lover</em> and <em>The Farmer&rsquo;s Bride</em>.
          <em> My Last Duchess</em> (not in this cluster but useful as a wider Browning
          comparison if your specification allows) runs alongside Porphyria. <em>Sonnet 29</em>
          offers a productive contrast: a speaker who notices her own possessiveness and
          corrects it, before it can curdle.
        </p>

        <h2>How the cluster defines possessive love</h2>
        <p>
          Possessive love in the AQA cluster is marked by the reduction of the beloved to a
          thing the speaker can control. In Browning&rsquo;s Porphyria&rsquo;s Lover the
          woman becomes a body to be arranged (&ldquo;I propped her head up as before, /
          Only, this time my shoulder bore / Her head, which droops upon it still&rdquo;).
          In Mew&rsquo;s The Farmer&rsquo;s Bride the young wife is an animal to be hunted:
          &ldquo;We chased her, flying like a hare.&rdquo; Both poems use imagery of
          pursuit, capture and stillness to signal that the speaker does not understand
          love as reciprocal.
        </p>

        <h2>Dramatic monologue as the vehicle</h2>
        <p>
          The cluster&rsquo;s possessive-love poems are delivered by unreliable speakers in
          dramatic monologue or near-monologue. This is not an accident. Dramatic monologue
          lets the poet give the reader more information than the speaker intends: the
          speaker&rsquo;s own words become the evidence against him. A Grade 9 essay will
          explicitly name the form and explain why it is the perfect vehicle for
          possessiveness.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Pair <em>Porphyria&rsquo;s Lover</em> with <em>The Farmer&rsquo;s Bride</em> for
          the anthology&rsquo;s two clearest possessive-love poems. Pair <em>Sonnet 29</em>
          with <em>Porphyria&rsquo;s Lover</em> to contrast healthy self-correcting obsession
          with pathological, unreflective obsession.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that possessive love in the cluster is always framed by
          the poet, not endorsed by him. Browning and Mew do not celebrate these speakers;
          they stage them so that the reader can judge them. The form (monologue, rural
          gothic setting, controlled rhyme) becomes the poet&rsquo;s silent commentary.
        </p>

        <h2>Context to weave in</h2>
        <p>
          For Browning, the Victorian fascination with the criminal mind and the rise of
          dramatic monologue. For Mew, early twentieth-century anxieties about marriage,
          consent and the psychological cost of rural isolation. Both poets are writing at
          a distance from their speakers, and the gap is the whole point.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not conflate the speaker with the poet. Do not describe the killing in
          Porphyria&rsquo;s Lover as &ldquo;romantic.&rdquo; Do not miss that the
          Farmer&rsquo;s Bride is a victim, not a character to be analysed on equal terms
          with her husband. Ethical reading is itself an AQA criterion.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/porphyrias-lover-vs-my-last-duchess" className="text-primary hover:underline">Porphyria&rsquo;s Lover vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/sonnet-29-vs-porphyrias-lover" className="text-primary hover:underline">Sonnet 29 vs Porphyria&rsquo;s Lover</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/lost-love-theme-across-anthology" className="text-primary hover:underline">Lost love across the anthology</Link></li>
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
  )
}
