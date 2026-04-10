import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"All the Perfumes of Arabia" Meaning and Analysis | The English Hub',
  description:
    'GCSE analysis of Lady Macbeth\'s "All the perfumes of Arabia" line. Meaning, guilt imagery, context and how to use it in an essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/all-the-perfumes-of-arabia' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"All the Perfumes of Arabia" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Lady Macbeth\'s "all the perfumes of Arabia" line from Act 5 Scene 1.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/all-the-perfumes-of-arabia',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">All the perfumes of Arabia</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;All the perfumes of Arabia&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Here&rsquo;s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Lady Macbeth &mdash; Act 5, Scene 1</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          This line comes from the sleepwalking scene, shortly after &ldquo;Out, damned
          spot!&rdquo;. Lady Macbeth has moved from sight (the imagined stain) to smell
          (the imagined odour of blood). She concludes that no quantity of the finest
          perfumes in the world could cover it up.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Lady Macbeth believes she can still smell the blood of Duncan on her hand. She
          reaches for the most luxurious perfumes she can think of &mdash; from Arabia,
          then as now the source of the world&rsquo;s most expensive fragrances &mdash; and
          despairs that even they cannot mask it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Hyperbole</strong> &mdash; &ldquo;all the perfumes of Arabia&rdquo; is a deliberately extravagant image, emphasising the hopelessness of her task.</li>
          <li><strong className="text-foreground">Sensory imagery</strong> &mdash; Shakespeare shifts from visual guilt (&ldquo;spot&rdquo;) to olfactory guilt (&ldquo;smell&rdquo;), showing that conscience floods every sense.</li>
          <li><strong className="text-foreground">Diminutive</strong> &mdash; &ldquo;this little hand&rdquo; turns the once-commanding Lady Macbeth into something small and almost childlike.</li>
          <li><strong className="text-foreground">Prose, not verse</strong> &mdash; her speech is broken and rhythmic rather than poetic, dramatising her mental disintegration.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: luxury and the stain of sin</h2>
        <p>
          Arabian perfumes were a byword for luxury in Shakespeare&rsquo;s London.
          Invoking them in a scene about washing hands places the most expensive cosmetic
          substance on earth next to the cheapest image of guilt &mdash; a mark that
          cannot be scrubbed off. The audience is meant to feel the gap between material
          wealth and spiritual wretchedness.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          This is the line where Lady Macbeth finally admits, even if only to herself,
          that the murder cannot be undone. It is a complete reversal of her confident
          &ldquo;a little water clears us of this deed&rdquo; in Act 2. The play&rsquo;s
          argument is that guilt compounds over time: the same deed becomes heavier, not
          lighter, the longer a character tries to ignore it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for guilt, Lady Macbeth, or psychological breakdown
          questions. A Grade 9 paragraph will contrast it with her Act 2 line about water
          and argue that Shakespeare uses the shift from sight to smell to show conscience
          invading every sense, making guilt inescapable.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The hyperbolic image of Arabian perfumes confirms that Lady Macbeth&rsquo;s
          crime has passed the point of concealment, with sensory guilt now flooding every
          part of her body and voice.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/out-damned-spot">&ldquo;Out, damned spot!&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/blood-will-have-blood">&ldquo;Blood will have blood&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/guilt-theme-analysis">Guilt theme analysis</Link></li>
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
