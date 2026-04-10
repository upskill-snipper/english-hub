import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Look Like the Innocent Flower, but Be the Serpent Under\'t" Analysis | The English Hub',
  description:
    'GCSE analysis of Lady Macbeth\'s "innocent flower" line. Meaning, Edenic imagery, duplicity and essay writing tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/look-like-the-innocent-flower' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Look Like the Innocent Flower" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Lady Macbeth\'s "innocent flower, serpent under\'t" line in Act 1 Scene 5.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/look-like-the-innocent-flower',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Look like the innocent flower</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Look like the innocent flower, but be the serpent under&rsquo;t&rdquo;
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Look like the innocent flower, / But be the serpent under&rsquo;t.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Lady Macbeth &mdash; Act 1, Scene 5</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Lady Macbeth gives this instruction to Macbeth as he arrives home in Act 1. Duncan
          will be their guest that night, and she wants her husband to play the gracious
          host on the surface while secretly preparing to kill him. The line is her
          philosophy of deceit condensed into a single image.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          She tells Macbeth to look outwardly beautiful and harmless, like a flower, but to
          conceal a poisonous serpent underneath. Appearance is the costume; reality is the
          snake waiting in the leaves.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Biblical allusion</strong> &mdash; the serpent evokes the Garden of Eden, making Lady Macbeth sound like a second Eve tempting her husband into sin.</li>
          <li><strong className="text-foreground">Juxtaposition</strong> &mdash; flower and serpent sit on top of each other in the same image, forcing the audience to hold innocence and evil together.</li>
          <li><strong className="text-foreground">Imperatives</strong> &mdash; &ldquo;Look&rdquo; and &ldquo;be&rdquo; are commands, not suggestions. She is directing his performance.</li>
          <li><strong className="text-foreground">Natural imagery</strong> &mdash; drawn from God&rsquo;s creation, but used to plan a murder, reinforcing the play&rsquo;s inverted moral world.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: the serpent and Eve</h2>
        <p>
          Jacobean audiences knew the story of Eden intimately. A woman advising a man to
          be a serpent mapped directly onto Eve offering the forbidden fruit, which made
          Lady Macbeth feel like a re-enactment of the original sin. Shakespeare is not
          subtle here: he wants the audience to see her instruction as the start of a fall.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the line fits the play</h2>
        <p>
          The flower/serpent image becomes the play&rsquo;s working definition of appearance
          versus reality. Duncan walks into the Macbeths&rsquo; castle praising its &ldquo;pleasant
          seat&rdquo; just hours before he is murdered in his bed. Macbeth himself plays the
          innocent host, then murders his guest. Even the fourth apparition &mdash; the
          sight of a moving forest &mdash; is a version of a flower that is really a
          serpent: a harmless image concealing a deadly truth.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          This is a key quotation for appearance versus reality, gender, and deception
          questions. A Grade 9 paragraph will connect it to the witches&rsquo; &ldquo;fair
          is foul&rdquo; paradox and argue that Shakespeare uses both images to show a world
          in which the surface of things cannot be trusted &mdash; a world in which moral
          vision itself has been poisoned.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          Lady Macbeth&rsquo;s Edenic imagery turns her husband into a calculated
          hypocrite, telling him to weaponise hospitality so that his outward innocence
          conceals the serpent of regicide underneath.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/fair-is-foul-and-foul-is-fair">&ldquo;Fair is foul&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/appearance-vs-reality-theme">Appearance vs Reality theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/the-milk-of-human-kindness">&ldquo;The milk of human kindness&rdquo; analysis</Link></li>
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
