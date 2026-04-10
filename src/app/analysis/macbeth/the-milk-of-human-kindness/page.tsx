import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"The Milk of Human Kindness" Analysis | The English Hub',
  description:
    'GCSE analysis of Lady Macbeth\'s "milk of human kindness" line. Meaning, imagery of nurture and weakness, context and essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/the-milk-of-human-kindness' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"The Milk of Human Kindness" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Lady Macbeth\'s "milk of human kindness" line in Act 1 Scene 5.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/the-milk-of-human-kindness',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">The milk of human kindness</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;The milk of human kindness&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Yet do I fear thy nature; / It is too full o&rsquo; th&rsquo; milk of human kindness / To catch the nearest way.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Lady Macbeth &mdash; Act 1, Scene 5</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Lady Macbeth speaks this line after reading her husband&rsquo;s letter about the
          witches&rsquo; prophecy. She worries that Macbeth has ambition, but not the
          ruthlessness needed to act on it. The &ldquo;nearest way&rdquo; to the crown, she
          is already thinking, is murder &mdash; and her husband is too decent, too maternal,
          too human to take it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Lady Macbeth is saying that Macbeth is too gentle and too compassionate to become
          king by foul means. Her verdict is clearly an insult: she equates kindness with
          weakness, and she plans to talk him out of it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Metaphor</strong> &mdash; kindness is turned into milk, a substance associated with mothers, babies and nurture.</li>
          <li><strong className="text-foreground">Gendered imagery</strong> &mdash; milk is coded feminine; Lady Macbeth is effectively calling her husband unmanly.</li>
          <li><strong className="text-foreground">Euphemism</strong> &mdash; &ldquo;the nearest way&rdquo; avoids saying &ldquo;murder&rdquo;, showing how comfortable she already is with the idea.</li>
          <li><strong className="text-foreground">Verb of suspicion</strong> &mdash; &ldquo;I fear&rdquo; positions her as a strategist already plotting around a problem.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: masculinity, milk and witches</h2>
        <p>
          In Jacobean thinking, milk was the archetypal feminine substance, while blood was
          the archetypal masculine one. By saying Macbeth has too much milk, Lady Macbeth is
          arguing he has too much woman in him. The line also foreshadows her own demand to
          be &ldquo;unsexed&rdquo; and to have her milk turned to &ldquo;gall&rdquo; &mdash;
          suggesting that she sees the marriage as needing to swap its gender roles.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          This is Lady Macbeth&rsquo;s opening diagnosis of her husband, and Shakespeare
          makes her wrong in the long run. Macbeth is not too full of kindness; he is
          already thinking about the crown before she opens her mouth. But in the short
          run, her reading of him is accurate enough to manipulate. The line sets up the
          dynamic that drives the first two acts: she pushes, he wavers, she pushes harder.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for gender, Lady Macbeth, or marriage questions. A Grade 9
          paragraph will argue that Shakespeare is using milk imagery to draw a boundary
          between the Macbeths&rsquo; roles that Lady Macbeth then spends the rest of the
          scene trying to demolish. It is a setup for the &ldquo;unsex me&rdquo; soliloquy
          that follows later in the same scene.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          Lady Macbeth turns kindness into a feminine substance she associates with
          weakness, using the metaphor of milk to justify stripping her husband of his
          conscience in order to win the crown.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/unsex-me-here">&ldquo;Unsex me here&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/gender-theme-analysis">Gender theme analysis</Link></li>
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
