import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'letters-from-yorkshire-vs-singh-song'
const H1 = 'Letters from Yorkshire vs Singh Song!: Love Across Distance and Culture'
const DESCRIPTION =
  'Grade 9 comparison of Maura Dooley\u2019s Letters from Yorkshire and Daljit Nagra\u2019s Singh Song!. Both explore love that has to exist across some kind of distance. Written by GCSE examiners.'

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
        <span className="text-foreground">Letters from Yorkshire vs Singh Song!</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: love that survives because it adapts to the conditions of distance</h2>
        <p>
          Maura Dooley and Daljit Nagra both present love that has to live across a divide.
          For Dooley, the divide is geographical: she corresponds with a friend or partner
          who lives in rural Yorkshire while she works in a city. For Nagra, the divide is
          expected but ignored: a Sikh shopkeeper should be minding the shop but is upstairs
          with his new wife, defying his parents&rsquo; expectations of what a marriage should
          look like. A Grade 9 answer argues that both poems present love as something
          stubborn that refuses to obey convention, whether that convention is the modern
          pace of work (Dooley) or the traditional pace of family duty (Nagra).
        </p>

        <h2>Comparison 1: voice and the register of intimacy</h2>
        <p>
          Dooley&rsquo;s voice is quiet, reflective and Standard English: &ldquo;In February,
          digging his garden, planting potatoes, / he saw the first lapwings return and came
          / indoors to write to me.&rdquo; The love is expressed through small, practical
          observations passed across distance. Nagra&rsquo;s voice is playful, exaggerated
          and written in &ldquo;Punglish&rdquo; &mdash; a phonetic blend of Punjabi and
          English. The love is expressed through celebratory, comic hyperbole. Both voices
          refuse the expected formal register: Dooley refuses romantic cliché, and Nagra
          refuses standard English.
        </p>

        <h2>Comparison 2: form and the shape of the relationship</h2>
        <p>
          Dooley uses tercets, a quiet form that feels like short letters. The regular stanza
          length keeps the relationship balanced and equal. Nagra uses long, loose stanzas
          broken by an italicised chorus, mimicking a Punjabi folk song or a Bollywood
          playback number. Form in both poems performs the relationship: Dooley is measured
          correspondence; Nagra is a public duet of private joy. Neither relationship looks
          like a conventional love poem, and neither form looks like a conventional sonnet.
        </p>

        <h2>Comparison 3: distance and what it permits</h2>
        <p>
          In Dooley, distance is the condition that allows love to continue. &ldquo;Still, it
          &rsquo;s you / Who sends me word of that other world.&rdquo; The lover becomes a
          reliable correspondent to a different kind of life. In Nagra, distance is the
          distance between the shop and the flat upstairs, between public duty and private
          desire. The newlyweds &ldquo;hum hum&rdquo; together while customers complain
          downstairs. Both poems argue that love requires a protected space &mdash; a letter
          in Dooley, a bedroom above the shop in Nagra &mdash; and that this space has to be
          defended against the demands of the outside world.
        </p>

        <h2>Context</h2>
        <p>
          Dooley is a contemporary English poet who writes about the everyday and the
          rural/urban divide. Nagra is a British-Punjabi poet whose collection <em>Look We
          Have Coming to Dover!</em> (2007) uses &ldquo;Punglish&rdquo; to celebrate and
          gently satirise British Asian family life. Teaching these poems together gives the
          examiner a clear contextual lens: how love is expressed when the speaker does not
          belong to one fixed world.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Letters from Yorkshire and Singh Song! both present love that thrives in the gaps
          of ordinary life. Dooley&rsquo;s lovers keep each other alive through shared
          attention at a distance; Nagra&rsquo;s newlyweds keep each other alive by hiding
          from the shop. Distance is not an obstacle to love in either poem &mdash; it is the
          condition that makes love feel chosen.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/distance-and-love-theme-across-anthology" className="text-primary hover:underline">Distance and love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/nature-and-love-theme-across-anthology" className="text-primary hover:underline">Nature and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/context-across-love-relationships-poems" className="text-primary hover:underline">Context across the poems</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure</Link></li>
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
