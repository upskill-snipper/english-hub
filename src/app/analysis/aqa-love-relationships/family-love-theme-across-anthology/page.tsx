import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'family-love-theme-across-anthology'
const H1 = 'Family Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of family love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Family love theme</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for family love</h2>
        <p>
          Seven of the anthology&rsquo;s poems engage directly with family love:
          <em> Mother, Any Distance</em> (Armitage), <em>Follower</em> (Heaney),
          <em> Climbing My Grandfather</em> (Waterhouse), <em>Eden Rock</em> (Causley),
          <em> Walking Away</em> (C. Day Lewis), <em>Before You Were Mine</em> (Duffy) and
          arguably <em>The Farmer&rsquo;s Bride</em> (Mew) through the failure of marital
          intimacy. Family love in the cluster is rarely uncomplicated: it is inherited,
          watched from a distance, re-imagined, or mourned.
        </p>

        <h2>How the cluster defines family love</h2>
        <p>
          Across these poems, family love is almost always retrospective. Heaney writes
          about his father from adulthood; Causley writes about his dead parents; Day Lewis
          writes about a memory eighteen years old; Duffy imagines her mother before she
          was born. Even Armitage, writing in the present tense, frames the moment of
          separation as already over. The AQA cluster presents family love as something
          you only fully feel when it is receding.
        </p>

        <h2>Extended metaphors as the cluster&rsquo;s signature move</h2>
        <p>
          Family love in the cluster tends to be carried by one sustained metaphor: a tape
          measure (Armitage), a ploughed field (Heaney), a climbed mountain (Waterhouse), a
          picnic tableau beside water (Causley), a school touch-line (Day Lewis), a
          dance-hall photograph (Duffy). This is one of the safest patterns you can
          generalise about in an essay.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Pair <em>Mother, Any Distance</em> with <em>Follower</em> to track the moment
          power shifts between parent and child. Pair <em>Walking Away</em> with <em>Before
          You Were Mine</em> to compare the gaze of a parent watching a child leave with
          the gaze of a child imagining a parent&rsquo;s earlier life. Pair <em>Climbing My
          Grandfather</em> with <em>Eden Rock</em> to compare ways of holding a dead or
          aged relative in the mind.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument: the AQA cluster presents family love as an act of
          reconstruction. The speaker is always stitching the relative back together
          through memory, metaphor and careful sensory detail. Love is the act of
          assembling the missing person out of the things they once held or walked over.
        </p>

        <h2>Context to weave in</h2>
        <p>
          Heaney&rsquo;s Northern Irish farming childhood, Causley&rsquo;s Cornish
          upbringing, Duffy&rsquo;s Glaswegian working-class memory, Armitage&rsquo;s
          Yorkshire domestic realism. These regional identities are not decoration &mdash;
          they are part of how each poet defines what a parent or grandparent is.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not call every family poem &ldquo;a celebration.&rdquo; Several are shot
          through with guilt, loss or premature mourning. Avoid treating the child-speaker
          as identical to the poet; the gap between them is often where the feeling lives.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/mother-any-distance-vs-follower" className="text-primary hover:underline">Mother, Any Distance vs Follower</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/eden-rock-vs-walking-away" className="text-primary hover:underline">Eden Rock vs Walking Away</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/climbing-my-grandfather-vs-follower" className="text-primary hover:underline">Climbing My Grandfather vs Follower</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/walking-away-vs-before-you-were-mine" className="text-primary hover:underline">Walking Away vs Before You Were Mine</Link></li>
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
