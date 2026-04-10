import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Unsex Me Here" Meaning and Analysis | The English Hub',
  description:
    'GCSE analysis of Lady Macbeth\'s "Unsex me here" soliloquy. Gender inversion, Jacobean context, and how to use the quote in an essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/unsex-me-here' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Unsex Me Here" Meaning and Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Lady Macbeth\'s "Unsex me here" soliloquy in Act 1 Scene 5.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/unsex-me-here',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Unsex me here</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Unsex me here&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me, from the crown to the toe, top-full / Of direst cruelty!&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Lady Macbeth &mdash; Act 1, Scene 5</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Alone on stage after reading Macbeth&rsquo;s letter, Lady Macbeth performs what is
          essentially an incantation. She calls on unnamed spirits to strip her femininity
          away, to stop her menstrual blood, to curdle her breast milk, and to fill her with
          cruelty. It is the most shocking speech a woman delivers in Shakespearean tragedy.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Lady Macbeth believes that her femininity is an obstacle to the murder. She
          associates womanhood with tenderness and compassion, and she asks the spirit world
          to remove those qualities from her body so she can carry out the killing without
          conscience.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Apostrophe</strong> &mdash; she directly addresses invisible spirits, blurring the line between prayer and witchcraft.</li>
          <li><strong className="text-foreground">Imperative verbs</strong> &mdash; &ldquo;unsex&rdquo;, &ldquo;fill&rdquo;, &ldquo;make thick&rdquo;, &ldquo;stop up&rdquo; &mdash; commands that sound like spells.</li>
          <li><strong className="text-foreground">Body imagery</strong> &mdash; she wants her physical body rewritten, suggesting she sees gender as biological and destructible.</li>
          <li><strong className="text-foreground">Superlative</strong> &mdash; &ldquo;direst cruelty&rdquo; reaches for the extremes of inhumanity.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: Jacobean anxieties about women</h2>
        <p>
          James I believed that women could be witches and wrote about them obsessively.
          Lady Macbeth inviting unnamed &ldquo;spirits&rdquo; into her body would have been
          read as a literal act of witchcraft, and her demand to be stripped of her feminine
          functions would have looked like a woman trying to escape her God-given role.
          Shakespeare is exploiting contemporary fears about ambitious women to make her
          both frightening and theatrically powerful.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          The speech is the foundation of Lady Macbeth&rsquo;s arc. Everything she does in
          Acts 1 and 2 &mdash; commanding Macbeth, planting the daggers, lying to Duncan
          &mdash; flows from this moment. But Shakespeare also plants her downfall here. The
          very qualities she asks to be rid of &mdash; conscience, tenderness, the ability to
          feel &mdash; come flooding back in Act 5 when she is sleepwalking. The spirits did
          not answer her after all.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          This is the essential quotation for gender, Lady Macbeth, and supernatural
          questions. A Grade 9 paragraph will argue that Shakespeare uses the invocation to
          stage Lady Macbeth&rsquo;s attempt to override the biological markers of Jacobean
          womanhood, and will then contrast it with her collapse in Act 5 to show that the
          play punishes her for believing femininity can be switched off.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          Lady Macbeth&rsquo;s incantation asks the spirit world to remove the feminine
          qualities she sees as obstacles to murder, yet the play eventually forces those
          same qualities back into her through uncontrollable guilt.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/the-milk-of-human-kindness">&ldquo;The milk of human kindness&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/screw-your-courage-to-the-sticking-place">&ldquo;Screw your courage&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/gender-theme-analysis">Gender theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
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
