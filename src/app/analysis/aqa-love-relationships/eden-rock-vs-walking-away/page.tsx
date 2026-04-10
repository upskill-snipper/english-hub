import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

const SLUG = 'eden-rock-vs-walking-away'
const H1 = 'Eden Rock vs Walking Away: Memory of Parents Comparison'
const DESCRIPTION =
  'Grade 9 comparison of Charles Causley\u2019s Eden Rock and C. Day Lewis\u2019s Walking Away. Both poems use memory and the symbol of crossing to explore parental love. Written by GCSE examiners.'

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
    <AnalysisBoardGate>
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-love-relationships" className="hover:text-foreground">AQA Love and Relationships</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Eden Rock vs Walking Away</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: crossing, separation and the refusal to look away</h2>
        <p>
          Both Charles Causley and C. Day Lewis close their poems on a moment of crossing.
          Causley watches his dead parents &ldquo;beckon to me from the other bank,&rdquo;
          inviting him to rejoin them; Day Lewis watches his young son walk into a school
          field and understands that a certain version of their closeness is over. A Grade 9
          argument is that both poems use the physical act of crossing a threshold as an
          image for the deepest parental love: the willingness to let your child move to
          somewhere you cannot follow, and the matching willingness of the grown child to
          remember every step of the goodbye.
        </p>

        <h2>Comparison 1: the tableau and the stillness of remembered love</h2>
        <p>
          Causley describes a picnic scene with forensic care: &ldquo;They are waiting for me
          somewhere beyond Eden Rock: / My father, twenty-five, in the same suit / Of Genuine
          Irish Tweed, his terrier Jack / Still two years old and trembling at his feet.&rdquo;
          Memory preserves them at a specific, happy age. Day Lewis does the same with his
          son: &ldquo;A sunny day with leaves just turning, / The touch-lines new-ruled.&rdquo;
          Both poets freeze a sensory detail to guard against forgetting. The act of noticing
          small physical things is itself an act of love.
        </p>

        <h2>Comparison 2: form and the shape of farewell</h2>
        <p>
          Causley uses five unrhymed stanzas that move towards the final isolated line,
          &ldquo;I had not thought that it would be like this,&rdquo; which sits alone on the
          page like a gasp. Day Lewis uses four regular five-line stanzas and a final
          controlled aphorism. Causley&rsquo;s structure enacts the suddenness of
          recognition; Day Lewis&rsquo;s structure enacts the slow, considered acceptance of
          loss. Both forms end on a line the speaker could not say in the original moment.
        </p>

        <h2>Comparison 3: the symbol of the crossing</h2>
        <p>
          Causley crosses water into the next world &mdash; a recognisable Christian and
          mythological symbol of the river between life and death. Day Lewis crosses a
          touch-line at a school field &mdash; an ordinary boundary that becomes symbolic.
          Both symbols turn a small physical act into a metaphysical one. The point is that
          parental love is measured at the threshold, not inside the house.
        </p>

        <h2>Context</h2>
        <p>
          Causley was a Cornish poet whose work often draws on hymn forms and rural memory.
          He wrote &ldquo;Eden Rock&rdquo; late in life, after the death of his parents, and
          the title puns on both a real place and the biblical Eden. Day Lewis wrote
          &ldquo;Walking Away&rdquo; for his son Sean and dated the memory eighteen years
          earlier. Both poems are written long after the event they describe, which is why
          they share a quality of ache.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Eden Rock and Walking Away both treat parental love as something you only fully
          understand in retrospect, at a distance, across a line you have been made to cross
          alone. The boundary is the poem&rsquo;s whole subject: love is the refusal to look
          away from the moment of separation.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/walking-away-vs-before-you-were-mine" className="text-primary hover:underline">Walking Away vs Before You Were Mine</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/memory-and-love-theme-across-anthology" className="text-primary hover:underline">Memory and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/family-love-theme-across-anthology" className="text-primary hover:underline">Family love across the anthology</Link></li>
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
    </AnalysisBoardGate>
  )
}
