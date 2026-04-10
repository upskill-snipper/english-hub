import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'neutral-tones-vs-when-we-two-parted'
const H1 = 'Neutral Tones vs When We Two Parted: Lost Love Comparison'
const DESCRIPTION =
  'Grade 9 comparison of Thomas Hardy\u2019s Neutral Tones and Lord Byron\u2019s When We Two Parted. Thesis, paragraphs, quotations and context. Written by GCSE examiners.'

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
        <span className="text-foreground">Neutral Tones vs When We Two Parted</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: two poets staring at the moment love died</h2>
        <p>
          Both Thomas Hardy and Lord Byron write from the vantage point of a lover years after
          the relationship ended, returning to the one scene that poisoned everything else.
          Hardy stands in a winter landscape that the breakup has drained of colour. Byron
          circles a secret parting that he cannot admit to anyone else. A Grade 9 reading is
          that both poets use a single remembered image to argue that lost love infects every
          future act of loving, but Hardy reaches resignation while Byron stays furious.
        </p>

        <h2>Comparison 1: landscape and the emotional climate</h2>
        <p>
          Hardy opens on a pond on a winter day. &ldquo;We stood by a pond that winter day, /
          And the sun was white, as though chidden of God, / And a few leaves lay on the
          starving sod.&rdquo; The sun is colourless, the ground is &ldquo;starving&rdquo; and
          the scene is static. Byron has no landscape; his poem is dominated by the body:
          &ldquo;The dew of the morning / Sunk chill on my brow &mdash; / It felt like the
          warning / Of what I feel now.&rdquo; Where Hardy externalises grief into a
          washed-out pond, Byron internalises it as a chill the speaker still carries in his
          skin. Both pathetic fallacies say <em>the moment of ending never left</em>.
        </p>

        <h2>Comparison 2: form and the speaker&rsquo;s control</h2>
        <p>
          Hardy uses four regular quatrains and closes with a deliberately flat summary:
          &ldquo;Your face, and the God-curst sun, and a tree, / And a pond edged with
          grayish leaves.&rdquo; The regular form mirrors a speaker who has rehearsed this
          memory so often it has become liturgy. Byron uses shorter, hammering quatrains
          whose rhymes feel like a pulse: &ldquo;In silence and tears.&rdquo; The brevity and
          repetition (the phrase returns in the final stanza) make his grief feel unresolved,
          like a bell that will not stop ringing. Hardy has accepted; Byron is still
          bleeding.
        </p>

        <h2>Comparison 3: the ending and what the poets have learned</h2>
        <p>
          Hardy ends with a universal claim: the memory has taught him that &ldquo;love
          deceives&rdquo; and the natural world is an accomplice. Byron ends with a
          hypothetical: &ldquo;If I should meet thee / After long years, / How should I greet
          thee? &mdash; / With silence and tears.&rdquo; Hardy has turned the memory into a
          philosophy; Byron has turned it into a rehearsal for a reunion that may never
          happen. One ending is resigned, the other is still waiting to deliver a verdict.
        </p>

        <h2>Context</h2>
        <p>
          Hardy wrote &ldquo;Neutral Tones&rdquo; in 1867, early in his career and years
          before his own unhappy marriage. The poem fits into his wider Victorian pessimism:
          love is another thing nature allows to fail. Byron wrote &ldquo;When We Two
          Parted&rdquo; about a secret affair with a married woman, which is why the poem
          insists on privacy (&ldquo;In secret we met &mdash; / In silence I grieve&rdquo;).
          Byron is the Romantic outlaw; Hardy is the Victorian realist. Their century-long
          gap and their very different temperaments give the examiner clear contextual
          contrast.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Both poems argue that a single moment can contaminate a lifetime, but the tones are
          different because the speakers are at different stages of grief. Hardy&rsquo;s
          monochrome landscape is grief finished and filed; Byron&rsquo;s shivering skin is
          grief still happening. Put together, they chart the long half-life of lost love.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/lost-love-theme-across-anthology" className="text-primary hover:underline">Lost love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/winter-swans-vs-neutral-tones" className="text-primary hover:underline">Winter Swans vs Neutral Tones</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/time-and-love-theme-across-anthology" className="text-primary hover:underline">Time and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/key-quotes-love-relationships-all-poems" className="text-primary hover:underline">Key quotes for every poem</Link></li>
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
