import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'nature-and-love-theme-across-anthology'
const H1 = 'Nature and Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of nature and love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Nature and love</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for nature and love</h2>
        <p>
          Almost every poem in the cluster uses the natural world, but the clearest
          nature-and-love poems are <em>Love&rsquo;s Philosophy</em> (Shelley),
          <em> Sonnet 29</em> (Barrett Browning), <em>Winter Swans</em> (Sheers),
          <em> Neutral Tones</em> (Hardy), <em>Letters from Yorkshire</em> (Dooley) and
          <em> The Farmer&rsquo;s Bride</em> (Mew). Each uses nature as a mirror, a model
          or a warning.
        </p>

        <h2>How nature functions differently in each poem</h2>
        <p>
          Shelley uses nature as argument: if fountains mingle with rivers, lovers should
          mingle too. EBB uses nature as fantasy: her vine-thoughts twine around her lover
          but have to be pruned. Sheers uses nature as model: the swans demonstrate the
          reconciliation the couple eventually copy. Hardy uses nature as witness and
          accomplice: the winter pond and the pale sun collaborate with the end of the
          relationship. Dooley uses nature as news: her correspondent reports the lapwings
          returning, and that report is the love letter. Mew uses nature as metaphor for
          female fear: the bride is hunted &ldquo;like a hare.&rdquo;
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          The richest nature pairings are Shelley vs Hardy (optimistic vs pessimistic
          Romanticism), Sheers vs Hardy (reconciling vs poisoning), and EBB vs Shelley
          (self-correcting imagination vs confident rhetoric).
        </p>

        <h2>Key quotations (public domain)</h2>
        <p>
          From Shelley: &ldquo;Nothing in the world is single.&rdquo; From Hardy: &ldquo;the
          sun was white, as though chidden of God.&rdquo; From EBB: &ldquo;wild vines, about
          a tree.&rdquo; These three lines will anchor almost any nature-and-love paragraph.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that nature in the AQA cluster is never neutral: it is
          always doing a specific job for the poem&rsquo;s argument about love. Identifying
          the job is the examiner&rsquo;s test for whether you understand a poem or just
          recognise it.
        </p>

        <h2>Context to weave in</h2>
        <p>
          Shelley as a second-generation Romantic who believed in nature as moral authority;
          Hardy as a Victorian realist who saw nature as indifferent; Sheers as a
          contemporary poet influenced by nature writing as therapy; Mew writing at the edge
          of modernism about rural terror.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not write &ldquo;nature reflects the speaker&rsquo;s feelings&rdquo; for every
          poem. Specify what nature <em>does</em>. Is it evidence? Backdrop? Character?
          Threat? Naming the function moves you into the top band.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/sonnet-29-vs-loves-philosophy" className="text-primary hover:underline">Sonnet 29 vs Love&rsquo;s Philosophy</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/winter-swans-vs-neutral-tones" className="text-primary hover:underline">Winter Swans vs Neutral Tones</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/letters-from-yorkshire-vs-singh-song" className="text-primary hover:underline">Letters from Yorkshire vs Singh Song!</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure</Link></li>
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
