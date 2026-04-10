import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Screw Your Courage to the Sticking-Place" Analysis | The English Hub',
  description:
    'GCSE analysis of Lady Macbeth\'s line "Screw your courage to the sticking-place". Meaning, imagery, context and essay writing tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/screw-your-courage-to-the-sticking-place' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Screw Your Courage to the Sticking-Place" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Lady Macbeth manipulating her husband in Act 1 Scene 7.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/screw-your-courage-to-the-sticking-place',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Screw your courage to the sticking-place</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Screw your courage to the sticking-place&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;But screw your courage to the sticking-place, / And we&rsquo;ll not fail.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Lady Macbeth &mdash; Act 1, Scene 7</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Lady Macbeth speaks this line to her wavering husband after he has decided he will
          &ldquo;proceed no further in this business.&rdquo; She tells him to tighten his
          resolve like a bowstring or a musket lock. The image is mechanical and violent: she
          wants his nerve screwed into position so that it cannot slip.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          The &ldquo;sticking-place&rdquo; refers to the point on a crossbow where the cord
          is fully drawn and held, ready to release. Lady Macbeth is telling Macbeth to push
          his courage to its absolute limit and lock it there. It is a line about
          forcing yourself past hesitation.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Extended metaphor</strong> &mdash; courage is treated as a mechanical part that can be tightened into place, stripping it of its moral weight.</li>
          <li><strong className="text-foreground">Imperative verb</strong> &mdash; &ldquo;Screw&rdquo; is harsh, forceful and unusually violent for a woman addressing her husband in Jacobean drama.</li>
          <li><strong className="text-foreground">Plural pronoun</strong> &mdash; &ldquo;we&rdquo;ll not fail&rdquo; binds them into a single unit, making the murder feel like a shared act of will.</li>
          <li><strong className="text-foreground">Martial imagery</strong> &mdash; weapons vocabulary from a woman amplifies the gender inversion that runs through the entire play.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: Jacobean gender expectations</h2>
        <p>
          In 1606, a wife was expected to be pious, obedient and domestic. Lady Macbeth
          inverts every one of these roles in this scene: she plans a murder, she mocks her
          husband&rsquo;s manhood, and she uses the language of war. Shakespeare stages a
          woman weaponising her femininity to dominate a male warrior, which would have been
          genuinely disturbing to his original audience and is what makes the scene so
          examinable today.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the line fits the play</h2>
        <p>
          This is the turning point of Act 1. Macbeth leaves the scene committed to the
          murder, and Lady Macbeth has stage-managed the entire conversation. Yet the same
          steel she asks him to show will eventually desert her: by Act 5 she is washing
          invisible blood from her hands and pacing her bedroom at night. The tragedy of the
          line is that her own &ldquo;sticking-place&rdquo; does not hold.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for questions on gender, Lady Macbeth, manipulation, or
          ambition. A Grade 9 paragraph will not just label her as manipulative; it will
          argue that Shakespeare makes her vocabulary deliberately mechanical in order to
          show how ambition dehumanises both partners long before the dagger is drawn.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          Lady Macbeth&rsquo;s crossbow metaphor reframes courage as a machine to be locked
          into position, revealing how ambition has already stripped the humanity out of
          the Macbeths&rsquo; marriage before the murder has even begun.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/unsex-me-here">&ldquo;Unsex me here&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/the-milk-of-human-kindness">&ldquo;The milk of human kindness&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/gender-theme-analysis">Gender theme analysis</Link></li>
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
