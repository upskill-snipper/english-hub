import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Double, Double Toil and Trouble" Analysis | The English Hub',
  description:
    'GCSE analysis of the witches\' "Double, double toil and trouble" chant. Meaning, meter, Jacobean context and how to use it in an essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/double-double-toil-and-trouble' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Double, Double Toil and Trouble" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of the witches\' chant in Act 4 Scene 1 of Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/double-double-toil-and-trouble',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Double, double toil and trouble</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Double, double toil and trouble&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Double, double toil and trouble; / Fire burn, and cauldron bubble.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">The Three Witches &mdash; Act 4, Scene 1</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          The witches chant these lines as they stir their cauldron, preparing the prophecy
          scene that Macbeth is about to stumble into. The rhyme is hypnotic, sing-song and
          instantly recognisable, which is exactly the point: Shakespeare wants the language
          itself to feel like a spell being cast in front of the audience.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          The witches are announcing that trouble is doubling &mdash; intensifying &mdash;
          as they brew their potion. They are summoning the apparitions that will mislead
          Macbeth about his future. The chant is both a working incantation and a piece of
          theatre designed to build dread.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Trochaic tetrameter</strong> &mdash; the falling, four-beat meter is reserved for the witches throughout the play, marking them as supernatural and unnatural.</li>
          <li><strong className="text-foreground">Rhyming couplets</strong> &mdash; the neat rhyme gives the lines a nursery-rhyme quality that feels both childlike and sinister.</li>
          <li><strong className="text-foreground">Alliteration</strong> &mdash; the repeated &ldquo;t&rdquo; and &ldquo;b&rdquo; sounds bubble like the cauldron itself.</li>
          <li><strong className="text-foreground">Repetition</strong> &mdash; &ldquo;double, double&rdquo; enacts the multiplication of evil on the stage.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: King James and witch-hunting</h2>
        <p>
          James I had personally overseen witch trials and genuinely believed witches could
          conjure storms, summon spirits and harm babies in the womb. Shakespeare&rsquo;s
          cauldron scene gave the king exactly the witches he expected to see &mdash;
          chanting, stirring foul ingredients, communing with infernal powers. The sing-song
          meter makes the scene unforgettable, and the content of the potion, which includes
          parts of murdered infants, would have been genuinely horrifying to the original
          audience.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the chant fits the play</h2>
        <p>
          The cauldron scene is the second major interaction between Macbeth and the witches.
          Unlike Act 1, where he stumbled on them by chance, he now seeks them out, which
          shows how far he has fallen. The chant therefore marks a turning point: the
          supernatural is no longer something happening to Macbeth, it is something he has
          chosen to join.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for supernatural or fate questions. A Grade 9 paragraph will
          not just describe the chant; it will argue that Shakespeare uses the childlike
          rhythm to make evil sound playful, which both charms and unsettles the audience.
          A top paragraph will connect it to &ldquo;fair is foul&rdquo; &mdash; both moments
          show the witches using paradoxical, musical language to destabilise moral order.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The hypnotic trochaic meter turns the witches&rsquo; chant into a theatrical
          spell, reinforcing the play&rsquo;s argument that evil in Macbeth&rsquo;s world
          arrives wrapped in seductive rhythm and pleasant-sounding lies.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/fair-is-foul-and-foul-is-fair">&ldquo;Fair is foul&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/supernatural-theme-analysis">The Supernatural theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/appearance-vs-reality-theme">Appearance vs Reality theme</Link></li>
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
