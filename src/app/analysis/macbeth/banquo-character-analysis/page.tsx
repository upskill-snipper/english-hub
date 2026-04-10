import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Banquo Character Analysis | The English Hub',
  description:
    'GCSE character analysis of Banquo in Macbeth. His role as a foil, loyalty, the prophecy and Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/banquo-character-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Banquo Character Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE character analysis of Banquo in Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/banquo-character-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Banquo character analysis</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Banquo character analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Banquo is the moral mirror Shakespeare holds up to Macbeth. They are both
          generals, they both meet the witches, and they both receive prophecies about
          future greatness. What Banquo does differently is the whole point of his
          character, and it is also the reason examiners love asking questions about
          him.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Banquo as a foil</h2>
        <p>
          A foil is a character whose role is to contrast with another character in
          order to highlight their qualities. Banquo is Macbeth&rsquo;s foil in the
          cleanest possible way. Both receive prophecies. Macbeth rushes towards his
          by committing murder. Banquo waits. In Act 2 Scene 1 he prays,
          &ldquo;Merciful powers, / Restrain in me the cursed thoughts that nature /
          Gives way to in repose.&rdquo; He is admitting that the prophecy has tempted
          him, and he is actively resisting the temptation. Macbeth does the opposite.
        </p>

        <h2 className="text-xl font-semibold text-foreground">His reaction to the witches</h2>
        <p>
          Banquo is the first to question the witches&rsquo; motives. He warns Macbeth
          that &ldquo;the instruments of darkness tell us truths, / Win us with honest
          trifles, to betray&rsquo;s / In deepest consequence.&rdquo; This is an almost
          textbook definition of equivocation, and it predicts the entire structure of
          the apparitions in Act 4. Shakespeare uses Banquo as the audience&rsquo;s
          moral commentator on the supernatural.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Banquo&rsquo;s loyalty to Duncan</h2>
        <p>
          In the banquet scene before the murder, Banquo praises the castle&rsquo;s
          &ldquo;pleasant seat&rdquo; and notes the &ldquo;temple-haunting martlet&rdquo;
          nesting there. These are all signs of natural, sacred order. Shakespeare puts
          this description in Banquo&rsquo;s mouth precisely because Banquo still
          represents the moral world that the Macbeths are about to break.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Why Macbeth has to kill him</h2>
        <p>
          The prophecy says Banquo will be the &ldquo;father to a line of kings.&rdquo;
          Once Macbeth is on the throne, Banquo becomes a living threat to his dynasty.
          In his Act 3 soliloquy, Macbeth admits that his &ldquo;fears in Banquo stick
          deep&rdquo; and describes him as a noble man he cannot bear to live
          alongside. The irony is that Macbeth&rsquo;s fear of Banquo is really a fear
          of his own conscience, since Banquo represents the virtuous path Macbeth
          refused.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Banquo&rsquo;s ghost</h2>
        <p>
          After his murder, Banquo&rsquo;s ghost appears at the banquet and only
          Macbeth can see it. The ghost does not speak. Its silent presence is enough
          to collapse Macbeth&rsquo;s public performance of kingship in front of his
          lords. Symbolically, Banquo keeps being a moral witness even after his
          death.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: Banquo and James I</h2>
        <p>
          The real Banquo was considered an ancestor of King James I, which is why
          Shakespeare had to be so careful with him. He could not write Banquo as a
          co-conspirator in Duncan&rsquo;s murder because that would insult the reigning
          monarch. The apparition scene in Act 4 even shows Banquo&rsquo;s descendants
          as a &ldquo;line of kings&rdquo; stretching to the reign of James himself. In
          other words, Shakespeare uses Banquo to flatter his king by writing the Stuart
          line into the play&rsquo;s prophecy.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;The instruments of darkness tell us truths&rdquo; &mdash; Banquo, Act 1 Scene 3</li>
          <li>&ldquo;Restrain in me the cursed thoughts&rdquo; &mdash; Banquo, Act 2 Scene 1</li>
          <li>&ldquo;Thou hast it now: king, Cawdor, Glamis, all&rdquo; &mdash; Banquo, Act 3 Scene 1</li>
          <li>&ldquo;Our fears in Banquo stick deep&rdquo; &mdash; Macbeth, Act 3 Scene 1</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          The strongest essays treat Banquo as a structural device as well as a
          character. He is the foil, the moral commentator on the witches, and the
          ancestor who links the play&rsquo;s prophecy to James I&rsquo;s present-day
          court. Writing about him means writing about Macbeth, the supernatural and
          the politics of the play simultaneously.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/supernatural-theme-analysis">The Supernatural theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/kingship-theme-analysis">Kingship theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
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
