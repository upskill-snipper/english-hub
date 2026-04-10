import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'mother-any-distance-vs-follower'
const H1 = 'Mother, Any Distance vs Follower: Parent\u2013Child Love Comparison'
const DESCRIPTION =
  'Grade 9 comparison of Simon Armitage\u2019s Mother, Any Distance and Seamus Heaney\u2019s Follower. Thesis, paragraphs and context on parent\u2013child love. Written by GCSE examiners.'

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
        <span className="text-foreground">Mother, Any Distance vs Follower</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: the child grows up and the parent does not shrink, but stays</h2>
        <p>
          Both poems stage the moment when a child has to separate from a parent who has
          defined their whole sense of self. Armitage writes from the point of view of a son
          measuring a new flat with his mother&rsquo;s tape measure; Heaney writes from the
          point of view of a son remembering how he used to trail his father round the
          ploughed field, and noticing that now his father trails him. A Grade 9 answer
          argues that both poems use extended metaphors drawn from physical labour to show
          that growing up is not a clean break: the parent stays present in the tools, the
          movement and the inherited memory.
        </p>

        <h2>Comparison 1: extended metaphor from real work</h2>
        <p>
          Armitage&rsquo;s whole poem is built around a tape measure. &ldquo;You come to help
          me measure windows, pelmets, doors&rdquo; turns an ordinary DIY task into a
          metaphor for the &ldquo;line still feeding out, unreeling / years between us.&rdquo;
          The tape is both practical and symbolic: it is the umbilical cord that has
          stretched but not yet snapped. Heaney builds his poem from ploughing. The father is
          &ldquo;an expert&rdquo; who &ldquo;would set the wing / And fit the bright
          steel-pointed sock.&rdquo; Both poets use precise, technical vocabulary to honour
          the parent&rsquo;s skill, and both let that craft become a metaphor for parental
          authority.
        </p>

        <h2>Comparison 2: form and the shifting balance of power</h2>
        <p>
          Armitage uses a loose sonnet that stretches and breaks, visually enacting the
          umbilical cord that is lengthening. The final lines isolate a single word
          (&ldquo;fall&rdquo; or &ldquo;fly&rdquo;), leaving the son suspended between
          dependence and flight. Heaney uses tightly controlled quatrains whose regularity
          mirrors the straight furrows of the father&rsquo;s ploughing, and then in the final
          stanza the form holds but the power inverts: &ldquo;But today / It is my father who
          keeps stumbling / Behind me, and will not go away.&rdquo; Both poems use form to
          show that the child is becoming the adult and the adult is becoming the child.
        </p>

        <h2>Comparison 3: the ending and what is kept</h2>
        <p>
          Armitage ends on the verb &ldquo;fall or fly&rdquo; &mdash; the outcome of growing
          up is still undecided. Heaney ends with a haunting image of the father refusing to
          leave: growing up does not mean the parent disappears, it means the parent lingers
          in the consciousness of the child, a shadow at the heel. One ending is open and
          hopeful; the other is closed and quietly heartbreaking. Both confirm that love
          between parent and child cannot be cleanly untied.
        </p>

        <h2>Context</h2>
        <p>
          Armitage is a contemporary English poet who often writes about working-class
          domestic life; &ldquo;Mother, Any Distance&rdquo; comes from his 1993 sequence
          <em> Book of Matches</em>. Heaney was a Northern Irish poet whose father was a
          farmer, and his work repeatedly returns to the farm as a site of inheritance and
          guilt. Context for both poems includes the reality that sons move out and parents
          grow old, and that neither poet can quite bear the separation he is describing.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Armitage and Heaney both argue that parental love is something you carry with you
          rather than leave behind. The tape measure and the plough are not just household
          objects &mdash; they are the instruments through which love is handed from
          generation to generation, and neither son has finished handling them.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/family-love-theme-across-anthology" className="text-primary hover:underline">Family love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/climbing-my-grandfather-vs-follower" className="text-primary hover:underline">Climbing My Grandfather vs Follower</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/walking-away-vs-before-you-were-mine" className="text-primary hover:underline">Walking Away vs Before You Were Mine</Link></li>
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
