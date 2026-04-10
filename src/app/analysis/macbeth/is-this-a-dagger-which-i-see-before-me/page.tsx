import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Is This a Dagger Which I See Before Me?" Analysis | The English Hub',
  description:
    'GCSE analysis of Macbeth\'s dagger soliloquy. Meaning, hallucination imagery, literary devices and how to use the quote in a Grade 9 essay.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/macbeth/is-this-a-dagger-which-i-see-before-me',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Is This a Dagger Which I See Before Me?" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE-level analysis of Macbeth\'s dagger soliloquy in Act 2 Scene 1.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/macbeth/is-this-a-dagger-which-i-see-before-me',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Is this a dagger which I see before me?</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Is this a dagger which I see before me?&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Is this a dagger which I see before me, / The handle toward my hand?&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Macbeth &mdash; Act 2, Scene 1</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          This is the opening line of Macbeth&rsquo;s most famous soliloquy, delivered alone
          on stage moments before he murders King Duncan. He sees, or thinks he sees, a
          floating dagger pointing him towards the king&rsquo;s chamber. The question mark is
          critical: even Macbeth is not sure whether the weapon is real or a projection of
          his guilty imagination.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Macbeth asks whether the dagger in front of him is genuinely physical or whether
          his mind has created it. He reaches for it, cannot grasp it, and concludes that
          it must be &ldquo;a dagger of the mind, a false creation, / Proceeding from the
          heat-oppressed brain.&rdquo; Even so, he decides to follow it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Hallucination</strong> &mdash; the dagger is a visual symbol of Macbeth&rsquo;s fractured psychology; his guilty conscience manifests before the murder has even happened.</li>
          <li><strong className="text-foreground">Rhetorical question</strong> &mdash; the interrogative opening shows Macbeth is trying, and failing, to rationalise what he is seeing.</li>
          <li><strong className="text-foreground">Personification</strong> &mdash; the dagger is given agency; it &ldquo;marshall&rsquo;st me the way that I was going,&rdquo; as if the murder is happening to Macbeth rather than because of him.</li>
          <li><strong className="text-foreground">Blood imagery</strong> &mdash; moments later the blade is &ldquo;gouts of blood,&rdquo; anticipating the murder and the cycle of violence to follow.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: free will and damnation</h2>
        <p>
          A Jacobean audience believed strongly in personal responsibility and the danger of
          hell. The dagger soliloquy matters because Macbeth knows the act is wrong; he is
          not being forced by witches, by his wife, or by the dagger itself. He chooses to
          follow the vision, which is exactly why Shakespeare makes him question it. The
          scene dramatises the moment a man walks willingly into damnation.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How it fits the play</h2>
        <p>
          The dagger soliloquy sits between the whispering of ambition (Act 1) and the noise
          of guilt (Act 2 onwards). It is the pivot point: before it, Macbeth is a hesitant
          thinker; after it, he is a regicide. The hallucination is the first in a long
          chain of supernatural disturbances &mdash; Banquo&rsquo;s ghost, the voices crying
          &ldquo;Sleep no more,&rdquo; the apparitions &mdash; that track his disintegrating mind.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Reach for this soliloquy when answering on ambition, guilt, the supernatural, or
          Macbeth&rsquo;s character. A Grade 9 paragraph will not simply say &ldquo;the dagger
          is a hallucination.&rdquo; It will argue that the hallucination reveals the gap
          between Macbeth&rsquo;s conscience and his will, and that Shakespeare is showing the
          Jacobean audience how ambition corrupts perception itself.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The hallucinated dagger externalises Macbeth&rsquo;s guilty conscience, yet his
          decision to follow it transforms him from a man tempted by ambition into a man
          choosing damnation.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-shall-sleep-no-more">&ldquo;Macbeth shall sleep no more&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/guilt-theme-analysis">Guilt theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revise the whole play</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          For plot, context and act-by-act notes, head to our full Macbeth revision notes.
        </p>
        <div className="mt-4">
          <Link href="/resources/revision-notes/macbeth" className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Open Macbeth revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
