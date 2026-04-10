import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'climbing-my-grandfather-vs-follower'
const H1 = 'Climbing My Grandfather vs Follower: Admiration Across Generations'
const DESCRIPTION =
  'Grade 9 comparison of Andrew Waterhouse\u2019s Climbing My Grandfather and Seamus Heaney\u2019s Follower. Both poems use extended metaphor to explore admiration for an older family figure. Written by GCSE examiners.'

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
        <span className="text-foreground">Climbing My Grandfather vs Follower</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: the older man as a landscape the child wants to inhabit</h2>
        <p>
          Both Andrew Waterhouse and Seamus Heaney write from the perspective of a younger
          male speaker looking up at an older male relative &mdash; a grandfather in
          Waterhouse, a father in Heaney. Both poets translate the older man into a physical
          landscape that the child tries to map. For Waterhouse, the grandfather becomes a
          mountain; for Heaney, the father becomes a ship moving through the ploughed field.
          A Grade 9 argument is that both poems fuse the domestic and the heroic: by
          imagining the older man as terrain or vessel, the poet gives family love an epic
          scale.
        </p>

        <h2>Comparison 1: the extended metaphor as a system for paying attention</h2>
        <p>
          Waterhouse turns his grandfather into a climb: &ldquo;I decide to do it free,
          without a rope or net.&rdquo; The child touches each part of the body as a climber
          touches a rock face &mdash; boots, trouser legs, belt, chest, chin, forehead. The
          metaphor is a device for noticing the grandfather in detail. Heaney&rsquo;s father
          is described with the same precision, but in terms of ploughing: &ldquo;His
          shoulders globed like a full sail strung / Between the shafts and the furrow.&rdquo;
          The simile converts the farmer into a heroic sea captain. Both poets use metaphor
          to slow time down and convert love into observation.
        </p>

        <h2>Comparison 2: form and the distance between speaker and subject</h2>
        <p>
          Waterhouse writes in free verse that lets the climb unfold organically, as if the
          speaker is ad-libbing each handhold. Heaney writes in tight quatrains because his
          father demands discipline and neatness. The two forms reflect the nature of the
          relationship: Waterhouse is tentatively exploring, Heaney is trying to match the
          precision of the man he admires. Both poems honour the older man by matching their
          form to his personality.
        </p>

        <h2>Comparison 3: the ending and the inversion of scale</h2>
        <p>
          Waterhouse ends at the summit: &ldquo;I rest for a while in the shade, not looking
          down.&rdquo; The child has reached his grandfather&rsquo;s face and can pause, safe.
          The reaching is complete. Heaney ends with an inversion: &ldquo;It is my father who
          keeps stumbling / Behind me, and will not go away.&rdquo; The father who was once
          the mountain has become the follower. Waterhouse closes on stillness; Heaney
          closes on role reversal. Together the endings map the life cycle of admiration:
          first you climb the older man, then you become the one he follows.
        </p>

        <h2>Context</h2>
        <p>
          Waterhouse was a contemporary English poet who wrote about rural life and family
          memory. Heaney&rsquo;s rural County Derry childhood shaped much of his early work,
          including the whole of <em>Death of a Naturalist</em> (1966). Both poems come from
          late-twentieth-century collections and both engage with the way working men leave
          physical traces on the people who love them.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Climbing My Grandfather and Follower both use extended metaphor to turn an older
          male relative into a landscape worth studying, and both recognise that admiration
          changes shape as the child grows. Where Waterhouse freezes the child at the summit,
          Heaney releases the son into adulthood and shows the older man in need of
          protection. The comparison lets you trace admiration from its innocent form into
          its complicated, reciprocal form.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/mother-any-distance-vs-follower" className="text-primary hover:underline">Mother, Any Distance vs Follower</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/family-love-theme-across-anthology" className="text-primary hover:underline">Family love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/easy-comparison-pairings-love-relationships" className="text-primary hover:underline">Easy comparison pairings</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/eden-rock-vs-walking-away" className="text-primary hover:underline">Eden Rock vs Walking Away</Link></li>
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
