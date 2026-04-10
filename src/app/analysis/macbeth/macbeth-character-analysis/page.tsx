import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Macbeth Character Analysis | The English Hub',
  description:
    'GCSE character analysis of Macbeth. Tragic hero arc, key quotes, ambition, guilt and Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/macbeth-character-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Macbeth Character Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE character analysis of Macbeth as a tragic hero.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/macbeth-character-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Macbeth character analysis</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Macbeth character analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Macbeth is Shakespeare&rsquo;s most concentrated study of a tragic hero. The
          character travels from celebrated warrior to hunted tyrant in the space of
          five acts, and the play gives the audience a front-row seat to every stage of
          his moral disintegration. To write about him at Grade 9 level, you need to be
          able to trace that arc with specific textual evidence.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Act 1: the noble soldier</h2>
        <p>
          When we first hear of Macbeth, he is &ldquo;brave Macbeth&rdquo; and
          &ldquo;valour&rsquo;s minion&rdquo;, a warrior who has just crushed a
          rebellion against Duncan. This initial presentation is important because it
          gives the audience something to lose. Shakespeare is establishing a man whose
          fall will feel like the destruction of something valuable, not the exposure
          of a secret villain.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Act 1 to 2: the hesitant murderer</h2>
        <p>
          Once the witches have planted the prophecy, Macbeth enters his first phase of
          moral struggle. The &ldquo;If it were done&rdquo; soliloquy in Act 1 Scene 7
          is the key text here. Macbeth lists every reason not to kill Duncan and
          concludes that he has no good argument except ambition itself. The
          &ldquo;vaulting ambition&rdquo; image reveals that he already knows the crime
          will destroy him. That self-knowledge is what makes him tragic.
        </p>
        <p>
          The dagger soliloquy in Act 2 Scene 1 extends the struggle. The hallucinated
          weapon represents either supernatural influence or guilty projection, and
          Shakespeare leaves the ambiguity open. Either way, Macbeth sees the crime
          coming and chooses it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Act 3: the paranoid king</h2>
        <p>
          Once crowned, Macbeth collapses fast. He orders the murder of Banquo without
          consulting Lady Macbeth and then sees Banquo&rsquo;s ghost at the banquet.
          Shakespeare uses the banquet scene to show that Macbeth&rsquo;s crime is
          poisoning not just his conscience but his ability to rule. Kingship requires
          public performance, and paranoia destroys performance.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Act 4: the tyrant</h2>
        <p>
          By Act 4, Macbeth is killing children. The decision to slaughter
          Macduff&rsquo;s wife and son is the moment Shakespeare closes the door on
          any lingering audience sympathy. The hesitant soldier has become a figure
          who kills out of wounded pride. Yet Shakespeare still lets Macbeth speak in
          soaring poetry, which keeps him humanly recognisable even as his actions
          become monstrous.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Act 5: the emptied man</h2>
        <p>
          The final act strips Macbeth back to his own voice. The &ldquo;Tomorrow&rdquo;
          soliloquy is his verdict on his own life: &ldquo;a tale told by an idiot, full
          of sound and fury, signifying nothing.&rdquo; He has what he wanted and it
          means nothing. The tragedy is complete when he realises this and still
          chooses to fight rather than repent. He dies unreformed, which is what
          distinguishes him from a character like Othello, who begs forgiveness, or
          Lear, who recognises his errors.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Is he a tragic hero?</h2>
        <p>
          Yes, in the Aristotelian sense. He has high status, a tragic flaw (ambition),
          a moment of recognition (the &ldquo;vaulting ambition&rdquo; speech, and
          later the &ldquo;Tomorrow&rdquo; soliloquy), and a downfall that is morally
          proportional to his actions. What makes him unusual is that his recognition
          never turns into repentance. Shakespeare writes a hero who sees everything
          and still chooses the worst option.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: the Jacobean tragic hero</h2>
        <p>
          Jacobean audiences expected their tragic heroes to fall because of a sin, not
          because of bad luck. Macbeth gives them exactly this: ambition, the sin of
          wanting more than God allotted you. Shakespeare also shapes the play around
          James I&rsquo;s political priorities, making Macbeth a warning against
          regicide and an endorsement of divine right.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Brave Macbeth&rdquo; &mdash; Captain, Act 1 Scene 2</li>
          <li>&ldquo;Vaulting ambition&rdquo; &mdash; Macbeth, Act 1 Scene 7</li>
          <li>&ldquo;Is this a dagger which I see before me?&rdquo; &mdash; Act 2 Scene 1</li>
          <li>&ldquo;Tomorrow, and tomorrow, and tomorrow&rdquo; &mdash; Act 5 Scene 5</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          The best essays on Macbeth treat him as a man who understands his own
          destruction in advance and still chooses it. Frame him as a tragic hero,
          track his arc scene by scene, and always link back to the Jacobean belief
          that ambition without moderation is a form of self-damnation.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/vaulting-ambition">&ldquo;Vaulting ambition&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/tomorrow-and-tomorrow-and-tomorrow">&ldquo;Tomorrow&rdquo; soliloquy analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
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
