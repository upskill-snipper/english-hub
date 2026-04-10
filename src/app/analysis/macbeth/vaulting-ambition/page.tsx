import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Vaulting Ambition, Which O\'erleaps Itself" Analysis | The English Hub',
  description:
    'GCSE analysis of Macbeth\'s "vaulting ambition" soliloquy. Meaning, horse imagery, context and essay writing tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/vaulting-ambition' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Vaulting Ambition" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Macbeth\'s "vaulting ambition" image in Act 1 Scene 7.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/vaulting-ambition',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Vaulting ambition</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Vaulting ambition, which o&rsquo;erleaps itself&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o&rsquo;erleaps itself / And falls on the other.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Macbeth &mdash; Act 1, Scene 7</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Macbeth delivers this line midway through his &ldquo;If it were done&rdquo;
          soliloquy. He has been trying to list reasons not to kill Duncan &mdash; Duncan is
          his king, his guest, his kinsman, and a good ruler &mdash; and he realises there
          is no moral argument on his side. The only thing pushing him forward is ambition,
          which he compares to a rider leaping so eagerly onto a horse that he flies over
          the top and crashes on the other side.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Macbeth admits he has no good reason (&ldquo;no spur&rdquo;) to go through with
          the murder, only the self-destructive force of his own ambition. Crucially, he
          already knows this ambition will destroy him. The image of vaulting predicts his
          own downfall before the crime has even happened.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Equestrian metaphor</strong> &mdash; ambition is personified as a rider vaulting onto a horse, uncontrolled and reckless.</li>
          <li><strong className="text-foreground">Self-defeating imagery</strong> &mdash; the rider &ldquo;o&rsquo;erleaps&rdquo; and falls, making ambition the cause of its own failure.</li>
          <li><strong className="text-foreground">Enjambment</strong> &mdash; the line runs on past the line-break, physically enacting the loss of control Macbeth is describing.</li>
          <li><strong className="text-foreground">Monosyllabic ending</strong> &mdash; &ldquo;falls on the other&rdquo; is short and flat, like the thud of a body hitting the ground.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: ambition and the Great Chain of Being</h2>
        <p>
          Jacobean audiences saw society as a divinely ordered hierarchy, with the king
          placed there by God. To kill a king and take his place was not just treason, it
          was rebellion against the cosmos. &ldquo;Vaulting ambition&rdquo; is therefore
          the sin of trying to leap higher in the chain than God intended, and the idea
          that such a leap must always end in a fall would have felt like a statement of
          natural law to Shakespeare&rsquo;s audience.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          Macbeth goes ahead with the murder despite understanding exactly what it will cost
          him. This is what makes him a tragic protagonist rather than a villain: he sees
          the fall coming and still vaults into it. Every later disaster in the play &mdash;
          Banquo&rsquo;s ghost, Lady Macbeth&rsquo;s madness, his own despair in Act 5
          &mdash; is the other side of the horse he was warned about.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          This is the essential quotation for ambition questions. A Grade 9 paragraph will
          not just say &ldquo;ambition is dangerous.&rdquo; It will argue that Shakespeare
          makes Macbeth the one to articulate the warning, which transforms the play from a
          moral fable into a tragedy: Macbeth understands his own destruction and chooses it
          anyway.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The vaulting metaphor lets Macbeth diagnose his own ambition as self-destructive
          before the murder has even taken place, turning the tragedy from one of ignorance
          into one of wilful damnation.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/is-this-a-dagger-which-i-see-before-me">&ldquo;Is this a dagger?&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/tomorrow-and-tomorrow-and-tomorrow">&ldquo;Tomorrow&rdquo; soliloquy analysis</Link></li>
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
