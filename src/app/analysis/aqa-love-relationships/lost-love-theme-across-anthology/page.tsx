import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'lost-love-theme-across-anthology'
const H1 = 'Lost Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of lost love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Lost love theme</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for lost love</h2>
        <p>
          The strongest lost-love poems in the cluster are <em>Neutral Tones</em> (Hardy),
          <em> When We Two Parted</em> (Byron), <em>The Farmer&rsquo;s Bride</em> (Mew) and
          to an extent <em>Winter Swans</em> (Sheers) and <em>Porphyria&rsquo;s Lover</em>
          (Browning). Lost love appears in three different stages: the memory of the end
          (Hardy), the ongoing ache (Byron), and the failure to reach the beloved in the
          first place (Mew, Browning).
        </p>

        <h2>How the cluster defines lost love</h2>
        <p>
          Lost love in the AQA cluster is almost always told after the fact and almost
          always attached to a specific, remembered physical detail: a pond, a morning
          dew, a farmhouse stair. The poets are not interested in abstract grief. They
          want the reader to experience one vivid moment that has not stopped happening.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Pair <em>Neutral Tones</em> and <em>When We Two Parted</em> for the two
          best-matched lost-love poems in the cluster: both focus on a single parting, both
          use landscape or body to externalise grief, and both were written by
          nineteenth-century male poets writing about the same emotional territory a
          generation apart. Pair <em>The Farmer&rsquo;s Bride</em> with <em>Porphyria&rsquo;s
          Lover</em> for a darker pairing about a lover who cannot reach the beloved and
          turns that failure into something disturbing.
        </p>

        <h2>Key quotations (public domain)</h2>
        <p>
          Hardy&rsquo;s &ldquo;the sun was white, as though chidden of God&rdquo; and
          Byron&rsquo;s &ldquo;In silence and tears&rdquo; are the two quotations you
          should have at the front of your mind for any lost-love question. Both are short,
          both are unambiguous, and both give you ready-made language about
          colourlessness and silence.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that lost love in the AQA cluster survives not as pain but
          as sensory residue: a specific sound, image or weather condition that the poet
          cannot stop replaying. The poets are interested in the mechanics of memory more
          than in the original relationship.
        </p>

        <h2>Context to weave in</h2>
        <p>
          For Hardy, Victorian pessimism about nature and marriage. For Byron, his Romantic
          reputation for scandalous affairs (&ldquo;When We Two Parted&rdquo; was written
          about a relationship that had to be kept secret). For Mew, early twentieth-century
          concerns about marriage, consent and psychological distress.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not collapse all lost-love poems into &ldquo;sad poems about heartbreak.&rdquo;
          Distinguish between loss after a relationship (Hardy, Byron), loss because the
          relationship was never mutual (Mew) and loss as the result of violence
          (Browning). Lost love and possessive love can overlap, but they are not the same
          category.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/neutral-tones-vs-when-we-two-parted" className="text-primary hover:underline">Neutral Tones vs When We Two Parted</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/winter-swans-vs-neutral-tones" className="text-primary hover:underline">Winter Swans vs Neutral Tones</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/memory-and-love-theme-across-anthology" className="text-primary hover:underline">Memory and love</Link></li>
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
