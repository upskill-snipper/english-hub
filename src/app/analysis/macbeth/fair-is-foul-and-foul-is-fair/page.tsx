import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Does "Fair is Foul, and Foul is Fair" Mean? | The English Hub',
  description:
    'A GCSE-level analysis of "Fair is foul, and foul is fair" from Macbeth. Meaning, context, literary devices, and how to use the quote in a Grade 9 essay.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/macbeth/fair-is-foul-and-foul-is-fair',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Does "Fair is Foul, and Foul is Fair" Mean?',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'GCSE analysis of the witches\' paradox "Fair is foul, and foul is fair" in Macbeth: meaning, devices, context, and essay use.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/fair-is-foul-and-foul-is-fair',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Fair is foul, and foul is fair</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        What does &ldquo;Fair is foul, and foul is fair&rdquo; mean in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Fair is foul, and foul is fair: / Hover through the fog and filthy air.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">The Three Witches &mdash; Act 1, Scene 1</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          The line is spoken in unison by the three witches at the very end of the first
          scene of <em>Macbeth</em>, as they leave the blasted heath. On a literal level
          it means that what looks good is actually evil, and what looks evil is actually
          good. The witches are announcing that the moral universe of the play is about
          to be turned upside down.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Meaning in simple terms</h2>
        <p>
          Shakespeare is giving his audience a warning. For the next five acts, appearances
          will deceive almost every character. A brave soldier will become a tyrant, a
          loving host will murder his king, and a loyal wife will lose her mind. The
          witches&rsquo; paradox tells us not to trust the surface of anything we are about to see.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Chiasmus</strong> &mdash; the mirrored
            structure &ldquo;fair&hellip;foul / foul&hellip;fair&rdquo; creates an audible
            reversal that sounds like a magic spell.
          </li>
          <li>
            <strong className="text-foreground">Paradox</strong> &mdash; two opposing
            ideas are held in the same breath, foreshadowing the collapse of moral order.
          </li>
          <li>
            <strong className="text-foreground">Trochaic tetrameter</strong> &mdash; the
            witches speak in a falling, chant-like rhythm that marks them out as
            supernatural and separate from human verse.
          </li>
          <li>
            <strong className="text-foreground">Alliteration</strong> &mdash; the harsh
            &ldquo;f&rdquo; sounds spit out of the witches&rsquo; mouths, creating a sense
            of disgust.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Jacobean context</h2>
        <p>
          Shakespeare wrote <em>Macbeth</em> around 1606, during the reign of James I, who
          had personally written a book on witchcraft called <em>Daemonologie</em>. A
          Jacobean audience would have heard this paradox as a genuinely dangerous spiritual
          threat: witches were believed to invert God&rsquo;s natural order, and language
          like this was thought to conjure real evil. The line therefore primes the audience
          to see Macbeth&rsquo;s rise as part of a cosmic disturbance, not just a personal fall.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the line echoes later in the play</h2>
        <p>
          Macbeth&rsquo;s very first line, &ldquo;So foul and fair a day I have not seen,&rdquo;
          deliberately picks up the witches&rsquo; language. Before he has even met them, his
          speech is already infected with their paradoxes, which suggests he was morally
          vulnerable from the start. The motif returns when Lady Macbeth tells him to
          &ldquo;look like the innocent flower, / But be the serpent under&rsquo;t,&rdquo;
          another expression of the gap between appearance and reality.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in a GCSE essay</h2>
        <p>
          This is the quotation examiners expect you to reach for if your question is about
          the supernatural, appearance versus reality, or the moral world of the play. A
          Grade 9 paragraph will do three things: identify the chiasmus, link it to
          Macbeth&rsquo;s opening line, and then zoom out to Jacobean beliefs about witches
          to explain why the inversion felt genuinely frightening to Shakespeare&rsquo;s
          audience. Avoid simply translating the line &mdash; your examiner wants conceptual
          analysis, not paraphrase.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The witches&rsquo; chiasmus dismantles the audience&rsquo;s trust in appearances
          before the play has even begun, framing Macbeth as a protagonist whose moral
          vision will be corrupted from his very first line onward.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/look-like-the-innocent-flower">&ldquo;Look like the innocent flower&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/appearance-vs-reality-theme">Appearance vs Reality theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/supernatural-theme-analysis">The Supernatural theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/double-double-toil-and-trouble">&ldquo;Double, double toil and trouble&rdquo; analysis</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revise the whole play</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          For plot, context and act-by-act notes, head to our full Macbeth revision notes.
        </p>
        <div className="mt-4">
          <Link
            href="/resources/revision-notes/macbeth"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Open Macbeth revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
