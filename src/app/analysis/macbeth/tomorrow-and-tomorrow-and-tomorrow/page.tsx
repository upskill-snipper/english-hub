import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Tomorrow, and Tomorrow, and Tomorrow" Analysis | The English Hub',
  description:
    'GCSE analysis of Macbeth\'s "Tomorrow" soliloquy. Nihilism, time imagery, and how to use the quote in a Grade 9 essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/tomorrow-and-tomorrow-and-tomorrow' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Tomorrow, and Tomorrow, and Tomorrow" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Macbeth\'s nihilistic "Tomorrow" soliloquy from Act 5 Scene 5.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/tomorrow-and-tomorrow-and-tomorrow',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Tomorrow, and tomorrow, and tomorrow</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Tomorrow, and tomorrow, and tomorrow&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day&hellip;&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Macbeth &mdash; Act 5, Scene 5</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          This is arguably Shakespeare&rsquo;s most famous statement of despair. Macbeth speaks
          it after learning that Lady Macbeth is dead and that his castle is being stormed by
          the English forces. Cornered, grieving, and facing defeat, he reflects on the
          worthlessness of time, life, and ambition.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Macbeth says that each day trudges pointlessly into the next and has done so since
          the beginning of recorded time. Life, he concludes, is &ldquo;a poor player&rdquo;
          who struts and frets his hour and is then forgotten. It is &ldquo;a tale told by an
          idiot, full of sound and fury, signifying nothing.&rdquo; Ambition has delivered
          him nothing but meaninglessness.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Repetition</strong> &mdash; the threefold &ldquo;tomorrow&rdquo; drags the rhythm into a tedious, monotonous crawl.</li>
          <li><strong className="text-foreground">Personification</strong> &mdash; time &ldquo;creeps&rdquo;, making the days feel like slow-moving insects rather than a meaningful progression.</li>
          <li><strong className="text-foreground">Metatheatrical imagery</strong> &mdash; Shakespeare turns life itself into a bad play, with a forgettable actor who vanishes from the stage.</li>
          <li><strong className="text-foreground">Blank verse collapsing into nihilism</strong> &mdash; the regular iambic pentameter contains a chaotic, despairing argument, mirroring the gap between Macbeth&rsquo;s outward stoicism and inner emptiness.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: the fall of the tragic hero</h2>
        <p>
          Jacobean tragedy often ended with the protagonist recognising the cost of his
          ambition. But Macbeth&rsquo;s recognition is unusually bleak. Unlike characters who
          repent, Macbeth simply decides that nothing matters. For an audience raised on
          Christian eschatology, the idea that life might &ldquo;signify nothing&rdquo; was
          genuinely shocking. Shakespeare is showing what happens to a soul that has cut
          itself off from grace.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          The soliloquy is the emotional climax of Macbeth&rsquo;s downfall. In Act 1, time
          was something to seize (&ldquo;If chance will have me king, why, chance may crown
          me&rdquo;). By Act 5, time has become something to endure. The entire arc of his
          ambition is summarised in this one speech: the future he killed for has arrived,
          and it is empty.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          This is the quotation for any question about ambition, time, tragedy, or
          Macbeth&rsquo;s downfall. A Grade 9 paragraph will not just call the speech
          &ldquo;nihilistic.&rdquo; It will argue that Shakespeare uses this moment to stage
          the exact opposite of the hope Macbeth felt when he first heard the witches&rsquo;
          prophecy, turning the thrill of future possibility into the grind of future
          emptiness.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          Shakespeare uses the crawling repetition of &ldquo;tomorrow&rdquo; to dramatise
          the final bankruptcy of Macbeth&rsquo;s ambition: the future he murdered for turns
          out to be nothing more than a tedious wait for death.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/a-tale-told-by-an-idiot">&ldquo;A tale told by an idiot&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/life-is-but-a-walking-shadow">&ldquo;Life&rsquo;s but a walking shadow&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revise the whole play</h2>
        <p className="mt-2 text-sm text-muted-foreground">For plot, context and act-by-act notes, head to our full Macbeth revision notes.</p>
        <div className="mt-4">
          <Link href="/resources/revision-notes/macbeth" className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Open Macbeth revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
