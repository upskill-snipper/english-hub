import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'winter-swans-vs-neutral-tones'
const H1 = 'Winter Swans vs Neutral Tones: Relationship Breakdown Comparison'
const DESCRIPTION =
  'Grade 9 comparison of Owen Sheers\u2019s Winter Swans and Thomas Hardy\u2019s Neutral Tones. Both poems use a walk beside water to examine a relationship under strain. Written by GCSE examiners.'

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
        <span className="text-foreground">Winter Swans vs Neutral Tones</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: two couples beside water, but only one comes back together</h2>
        <p>
          Both poems are built around the same situation: a couple walking beside water after
          a rupture. Hardy closes his poem with the relationship finished and the landscape
          poisoned. Sheers closes his with the couple&rsquo;s hands finding each other
          &ldquo;like a pair of wings settling after flight.&rdquo; A Grade 9 answer argues
          that both poets use natural imagery to diagnose the health of a relationship, but
          Hardy uses nature to record loss while Sheers uses nature to model repair.
        </p>

        <h2>Comparison 1: pathetic fallacy and the weather of the relationship</h2>
        <p>
          Hardy gives us a grey, leached landscape: &ldquo;We stood by a pond that winter
          day, / And the sun was white, as though chidden of God.&rdquo; Even the daylight
          has been told off. Sheers gives us a landscape that is wet and heavy but still
          alive: &ldquo;The clouds had given their all &mdash; / two days of rain and then a
          break.&rdquo; The rain has stopped; something can grow. The pathetic fallacy in
          Hardy forecloses the future; in Sheers it reopens it.
        </p>

        <h2>Comparison 2: the symbol of the birds</h2>
        <p>
          Sheers&rsquo; swans arrive as a demonstration: &ldquo;they mate for life&rdquo;
          the partner says, and the birds&rsquo; steady pairing becomes a model the humans
          instinctively copy. Hardy has no swans; he has &ldquo;a grin of bitterness&rdquo;
          on his lover&rsquo;s face &ldquo;like an ominous bird a-wing.&rdquo; Both poets
          use a bird image, but Sheers&rsquo; is a whole pair of swans teaching the humans
          how to reunite, while Hardy&rsquo;s is a single &ldquo;ominous bird&rdquo; leaving
          a warning. The examiner will love a paragraph that tracks how the same symbol
          (birds) does opposite jobs.
        </p>

        <h2>Comparison 3: form and the trajectory of the walk</h2>
        <p>
          Sheers uses six tercets and then a final couplet, structurally enacting the
          couple&rsquo;s return to two-ness. The shape of the poem performs the reuniting of
          the hands. Hardy&rsquo;s four regular quatrains loop back to the opening image and
          then close with a fragmentary list: &ldquo;Your face, and the God-curst sun, and a
          tree.&rdquo; The form in Hardy is circular and entrapping; in Sheers it is linear
          and generative. Form is argument.
        </p>

        <h2>Context</h2>
        <p>
          Sheers is a contemporary Welsh poet whose landscape writing is rooted in the Welsh
          borderlands. Hardy wrote &ldquo;Neutral Tones&rdquo; in 1867, in his late twenties,
          before the novels that would make him famous for his pessimism. The century-long
          gap between them maps neatly onto the change in how poems about relationships
          imagine repair: Hardy&rsquo;s Victorian speaker cannot conceive of it; Sheers&rsquo;
          twenty-first-century speaker expects it.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Both poems watch a damaged relationship from the edge of a body of water, but only
          Sheers lets the natural world teach the couple how to survive. Hardy&rsquo;s nature
          is witness; Sheers&rsquo; nature is therapist. The shared setting makes the
          difference in tone and outcome even more striking.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/neutral-tones-vs-when-we-two-parted" className="text-primary hover:underline">Neutral Tones vs When We Two Parted</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/lost-love-theme-across-anthology" className="text-primary hover:underline">Lost love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/nature-and-love-theme-across-anthology" className="text-primary hover:underline">Nature and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/easy-comparison-pairings-love-relationships" className="text-primary hover:underline">Easy comparison pairings</Link></li>
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
