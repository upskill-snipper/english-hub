import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'time-and-love-theme-across-anthology'
const H1 = 'Time and Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of time and love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Time and love</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for time and love</h2>
        <p>
          Time shapes almost every poem in the cluster, but the most explicit engagements
          are in <em>Walking Away</em> (Day Lewis, memory eighteen years old),
          <em> Before You Were Mine</em> (Duffy, a decade backwards), <em>Mother, Any
          Distance</em> (Armitage, the present tense of separation), <em>When We Two
          Parted</em> (Byron, years of silent grief), <em>Neutral Tones</em> (Hardy, a
          poisoned past still present) and <em>Follower</em> (Heaney, the inversion of two
          generations).
        </p>

        <h2>How time functions in the cluster</h2>
        <p>
          Time is never linear in these poems. The poets loop, stretch, freeze and
          fast-forward. Day Lewis writes in 1956 about a memory from 1938. Duffy writes in
          the present about her mother&rsquo;s youth. Heaney writes in the present about
          his childhood then pivots, in the final stanza, into an unexpected present that
          reverses the earlier relationship. Armitage uses present tense and future tense
          in the same sonnet. Time becomes a technique.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Pair <em>Walking Away</em> with <em>Before You Were Mine</em> for the two opposite
          directions of retrospective love (forward to the child, backwards to the mother).
          Pair <em>Mother, Any Distance</em> with <em>Follower</em> for the present tense
          reversal of parent-child power. Pair <em>Neutral Tones</em> with <em>When We Two
          Parted</em> for lost love that will not let the present tense begin.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that the cluster shows how love distorts time. The
          relationship you love most is the one you cannot stop returning to, and the
          tense of the poem tells you which relationship that is. Tense is
          characterisation.
        </p>

        <h2>Context to weave in</h2>
        <p>
          Modernist and post-modernist literature&rsquo;s interest in fractured time
          (Woolf, Eliot) sits behind many of the contemporary poems in the cluster.
          Traditional Victorian elegy sits behind Hardy and Byron. The cluster lets you
          compare two whole centuries of English poetry and time.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not describe the tense of the poem as a surface feature. Tense is almost
          always the engine of the emotion. If a poem is in the present tense, ask why the
          poet needs it to be happening now; if it is in the past tense, ask why the poet
          needs distance.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/walking-away-vs-before-you-were-mine" className="text-primary hover:underline">Walking Away vs Before You Were Mine</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/mother-any-distance-vs-follower" className="text-primary hover:underline">Mother, Any Distance vs Follower</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/memory-and-love-theme-across-anthology" className="text-primary hover:underline">Memory and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/lost-love-theme-across-anthology" className="text-primary hover:underline">Lost love</Link></li>
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
