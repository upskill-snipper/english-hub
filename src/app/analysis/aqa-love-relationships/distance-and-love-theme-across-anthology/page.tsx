import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'distance-and-love-theme-across-anthology'
const H1 = 'Distance and Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of distance and love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Distance and love</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for distance and love</h2>
        <p>
          Distance &mdash; geographical, emotional or generational &mdash; is everywhere in
          the cluster. The clearest poems are <em>Letters from Yorkshire</em> (Dooley),
          <em> Mother, Any Distance</em> (Armitage), <em>Walking Away</em> (Day Lewis),
          <em> Eden Rock</em> (Causley), <em>Singh Song!</em> (Nagra, distance from family
          duty) and <em>Sonnet 29</em> (Barrett Browning, distance as the condition of
          imagination).
        </p>

        <h2>How the cluster defines distance</h2>
        <p>
          Distance in the AQA cluster is almost always productive. It allows love to
          become attention, correspondence, memory or fantasy. Dooley&rsquo;s correspondent
          writes letters because they live apart. Armitage&rsquo;s umbilical tape measure
          only has meaning because the son is moving out. Causley&rsquo;s parents can only
          speak to him because they are on the other bank. EBB&rsquo;s thoughts can only
          twine around her lover because he is absent.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Pair <em>Letters from Yorkshire</em> with <em>Singh Song!</em> for love that
          thrives in spite of or because of distance from social expectation. Pair
          <em> Mother, Any Distance</em> with <em>Walking Away</em> for parent-child
          distance across two generations.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that distance in the cluster is a <em>condition</em> of
          love rather than an obstacle to it. The poets who are closest to their beloved
          (Nagra) still have to negotiate distance (the shop below), and the poets who
          are physically separated (Dooley) are able to notice their love in ways that
          co-presence might blur.
        </p>

        <h2>Context to weave in</h2>
        <p>
          Letter writing as a Victorian and twentieth-century form of intimacy (Dooley,
          EBB by extension). Post-war British social mobility producing the first
          generation of children who leave home for university (Armitage, Day Lewis).
          Migration and British Asian family life (Nagra).
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not treat distance as simply sad. In most of these poems distance is the
          thing that lets the speaker see the beloved at all. The cluster invites you to
          argue that proximity and love are not the same thing.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/letters-from-yorkshire-vs-singh-song" className="text-primary hover:underline">Letters from Yorkshire vs Singh Song!</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/mother-any-distance-vs-follower" className="text-primary hover:underline">Mother, Any Distance vs Follower</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/family-love-theme-across-anthology" className="text-primary hover:underline">Family love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/time-and-love-theme-across-anthology" className="text-primary hover:underline">Time and love</Link></li>
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
