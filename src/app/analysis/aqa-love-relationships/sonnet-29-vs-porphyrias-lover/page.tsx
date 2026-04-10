import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'sonnet-29-vs-porphyrias-lover'
const H1 = 'Sonnet 29 vs Porphyria\u2019s Lover: Obsessive Love Comparison'
const DESCRIPTION =
  'Grade 9 comparison of Elizabeth Barrett Browning\u2019s Sonnet 29 and Robert Browning\u2019s Porphyria\u2019s Lover. Both poems stage obsessive thought about a beloved. Written by GCSE examiners.'

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
        <span className="text-foreground">Sonnet 29 vs Porphyria&rsquo;s Lover</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: two poets of obsession, but only one is self-aware</h2>
        <p>
          Both Elizabeth Barrett Browning and Robert Browning put us inside a head consumed by
          the beloved. EBB&rsquo;s speaker admits that her thoughts about her lover have
          overgrown the real person. RB&rsquo;s speaker does not seem aware that he has lost
          perspective at all. A Grade 9 argument is that both poems stage obsessive love, but
          Sonnet 29 demonstrates how a thinking lover can correct herself, while
          Porphyria&rsquo;s Lover demonstrates how a dramatic monologue can expose a lover
          who cannot.
        </p>

        <h2>Comparison 1: the metaphor of the overgrowing vine vs. the tightening hair</h2>
        <p>
          EBB compares her thoughts to &ldquo;wild vines, about a tree,&rdquo; and then
          catches herself in the act: &ldquo;I will not have my thoughts instead of thee.&rdquo;
          RB&rsquo;s speaker sees Porphyria&rsquo;s &ldquo;yellow hair&rdquo; and decides to
          use it: &ldquo;three times her little throat around, / And strangled her.&rdquo;
          Both poems use a physical image of encircling &mdash; a vine around a trunk, hair
          around a throat &mdash; but EBB&rsquo;s metaphor is a self-diagnosis, and
          RB&rsquo;s is an action. The examiner will reward an answer that tracks how the
          same kind of image can be therapy in one poem and murder in the other.
        </p>

        <h2>Comparison 2: form and the self-correcting sonnet vs. the runaway monologue</h2>
        <p>
          The Petrarchan sonnet gives EBB a volta: at line six she turns. The form is a
          device for self-correction built into fourteen lines. Porphyria&rsquo;s Lover is
          written in sixty unbroken lines with a rhyme scheme (ABABB) that keeps refusing to
          close. The dramatic monologue has no structural place for self-correction; the
          speaker can ramble on as long as Browning lets him. Form is characterisation.
          Sonnet = self-awareness; monologue = runaway obsession.
        </p>

        <h2>Comparison 3: the ending and the relationship with reality</h2>
        <p>
          EBB ends with the celebrated paradox: &ldquo;I do not think of thee &mdash; I am
          too near thee.&rdquo; Reality replaces imagination. RB ends with
          &ldquo;And yet God has not said a word!&rdquo; His speaker has swapped reality for
          a theological fantasy in which silence is consent. Both endings are about the
          relationship between thought and presence, but EBB celebrates thought giving way
          to reality, while RB traps his speaker in a reality only he believes in.
        </p>

        <h2>Context</h2>
        <p>
          Elizabeth Barrett Browning and Robert Browning were married in 1846 and their
          correspondence contains some of the most famous love letters in the language. It
          is not an accident that the two poems we are comparing were written by husband and
          wife. Both share a Victorian fascination with the inner life, but they write about
          it from opposite sides: EBB&rsquo;s speaker is a woman reclaiming the right to
          desire; RB&rsquo;s speaker is a man whose desire has curdled into pathology.

        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Reading the two Brownings together makes the point that obsessive love is not
          inherently destructive &mdash; it depends on whether the speaker can catch herself.
          EBB gives us a lover who can; RB gives us a lover who cannot. The shared imagery
          of encircling is the hinge on which both poems turn.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/sonnet-29-vs-loves-philosophy" className="text-primary hover:underline">Sonnet 29 vs Love&rsquo;s Philosophy</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/porphyrias-lover-vs-my-last-duchess" className="text-primary hover:underline">Porphyria&rsquo;s Lover vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/possessive-love-theme-across-anthology" className="text-primary hover:underline">Possessive love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/romantic-love-theme-across-anthology" className="text-primary hover:underline">Romantic love across the anthology</Link></li>
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
