import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'memory-and-love-theme-across-anthology'
const H1 = 'Memory and Love Across the AQA Love and Relationships Anthology'
const DESCRIPTION =
  'Grade 9 thematic analysis of memory and love across the AQA Love and Relationships cluster. Best poems, key quotes and comparative angles. Written by GCSE examiners.'

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
        <span className="text-foreground">Memory and love</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Core poems for memory and love</h2>
        <p>
          Memory drives many of the anthology&rsquo;s most moving poems:
          <em> Eden Rock</em> (Causley), <em>Walking Away</em> (Day Lewis),
          <em> Follower</em> (Heaney), <em>Before You Were Mine</em> (Duffy),
          <em> Neutral Tones</em> (Hardy) and <em>When We Two Parted</em> (Byron). The
          cluster repeatedly stages love as an act of remembering rather than as an act of
          being together.
        </p>

        <h2>How the cluster defines memory</h2>
        <p>
          Memory in these poems is specific and sensory. Causley remembers his father&rsquo;s
          &ldquo;Genuine Irish Tweed&rdquo; suit and his dog. Day Lewis remembers the
          &ldquo;new-ruled&rdquo; touch-lines. Heaney remembers the plough&rsquo;s
          &ldquo;bright steel-pointed sock.&rdquo; Duffy imagines her mother&rsquo;s pals
          laughing on a Glasgow corner. Hardy freezes &ldquo;a pond edged with grayish
          leaves.&rdquo; Byron carries the chill dew on his brow. Love survives as one
          vivid moment the poet cannot put down.
        </p>

        <h2>Contrasts and pairings</h2>
        <p>
          Pair <em>Eden Rock</em> with <em>Walking Away</em> for parental memory that ends
          in a moment of crossing. Pair <em>Before You Were Mine</em> with <em>Walking
          Away</em> for the retrospective gaze applied to the opposite generation. Pair
          <em> Neutral Tones</em> with <em>When We Two Parted</em> for lost-love memory as
          an ongoing sensation.
        </p>

        <h2>Essay angle for Grade 9</h2>
        <p>
          A top-band argument is that memory in the AQA cluster is an active,
          reconstructive craft. The poets are not passively recalling; they are sorting,
          framing and choosing which sensory details to keep. Love is the labour of
          remembering well.
        </p>

        <h2>Key quotations (public domain)</h2>
        <p>
          Hardy&rsquo;s &ldquo;Your face, and the God-curst sun, and a tree&rdquo; and
          Byron&rsquo;s &ldquo;In silence and tears&rdquo; are two of the most quotable
          memory-of-loss lines in the cluster. For family memory, use Causley&rsquo;s tweed
          suit and Heaney&rsquo;s &ldquo;bright steel-pointed sock.&rdquo;
        </p>

        <h2>Context to weave in</h2>
        <p>
          Mention the shift from Victorian models of memory (fixed, solemn, often
          retrospective after a death) to contemporary models (Armitage, Duffy, Sheers)
          where memory is playful, imagined and even fabricated. The cluster lets you
          track how love poetry has changed its relationship to time.
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not treat memory as a background. Memory is usually the <em>subject</em> of
          these poems, not the setting. The poet is not describing love; the poet is
          describing remembering love.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/eden-rock-vs-walking-away" className="text-primary hover:underline">Eden Rock vs Walking Away</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/walking-away-vs-before-you-were-mine" className="text-primary hover:underline">Walking Away vs Before You Were Mine</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/time-and-love-theme-across-anthology" className="text-primary hover:underline">Time and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/family-love-theme-across-anthology" className="text-primary hover:underline">Family love</Link></li>
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
