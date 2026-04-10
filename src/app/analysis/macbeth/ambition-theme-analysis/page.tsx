import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

export const metadata: Metadata = {
  title: 'Ambition in Macbeth — Theme Analysis | The English Hub',
  description:
    'GCSE theme analysis of ambition in Macbeth. Key quotes, how Shakespeare presents ambition, and how to write about it in a Grade 9 essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/ambition-theme-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ambition in Macbeth — Theme Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE theme analysis of ambition in Macbeth, with key quotes and essay tips.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/ambition-theme-analysis',
  }
  return (
    <AnalysisBoardGate>
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Ambition theme</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How does Shakespeare present ambition in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Ambition is the central theme of <em>Macbeth</em> and the single most common
          focus for GCSE exam questions. Shakespeare does not present ambition as a simple
          vice. Instead, he shows it as something morally neutral that becomes destructive
          when it is cut loose from conscience, loyalty or moderation. The play traces
          what happens when a successful, well-regarded soldier decides he wants more than
          he has earned.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Ambition at the start of the play</h2>
        <p>
          When we first hear of Macbeth, he is &ldquo;brave Macbeth&rdquo;, a warrior who has
          just saved Scotland from rebellion. His ambition in Act 1 is still tied to service:
          he fights for Duncan, not for himself. The witches trigger a different kind of
          ambition by telling him he &ldquo;shalt be king hereafter&rdquo;, which plants the
          idea that he could take the throne by force. From that moment, his ambition
          becomes separated from loyalty.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The turning point: the &ldquo;vaulting ambition&rdquo; soliloquy</h2>
        <p>
          In Act 1 Scene 7, Macbeth delivers his most honest speech about ambition. He lists
          every reason not to kill Duncan &mdash; kinship, hospitality, duty &mdash; and
          realises the only thing pushing him forward is &ldquo;vaulting ambition, which
          o&rsquo;erleaps itself / And falls on the other.&rdquo; The image of a rider
          vaulting onto a horse and flying over it predicts his own downfall. Importantly,
          he can already see the fall. That is why examiners consider him a tragic hero
          rather than a villain: he understands what his ambition will cost him and still
          acts on it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Lady Macbeth as a second face of ambition</h2>
        <p>
          Shakespeare splits ambition across the Macbeths. While Macbeth hesitates, Lady
          Macbeth does not. Her ambition is cold, rhetorical and impatient. She calls on
          spirits to &ldquo;unsex&rdquo; her, worries her husband is &ldquo;too full o&rsquo;
          th&rsquo; milk of human kindness&rdquo;, and commands him to &ldquo;screw&rdquo;
          his courage into place. Their marriage becomes a factory for ambition in which one
          partner supplies the will and the other supplies the muscle.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Banquo as the moral counterweight</h2>
        <p>
          Banquo also hears the witches, and his descendants are promised the throne. Yet
          he does nothing about it. He prays &ldquo;cursed thoughts&rdquo; will leave him
          alone. Shakespeare uses Banquo as the control variable of the experiment: the
          same temptation, a different response. The contrast tells the audience that
          ambition is a choice, not a destiny.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Where ambition ends up</h2>
        <p>
          By Act 5, Macbeth has everything ambition promised him and it is worth nothing.
          The &ldquo;Tomorrow&rdquo; soliloquy strips the play down to a single conclusion:
          life is &ldquo;a tale told by an idiot, full of sound and fury, signifying
          nothing.&rdquo; The throne he killed for buys him isolation, paranoia and
          despair. Shakespeare&rsquo;s final statement on ambition is that it does not
          fail to deliver; it delivers exactly what it promises, and what it promises
          turns out to be empty.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: ambition, the divine right of kings, and James I</h2>
        <p>
          Shakespeare wrote Macbeth around 1606, soon after James I took the English throne.
          James believed kings were chosen by God, a doctrine known as the divine right of
          kings. To overthrow a king was therefore to overthrow God&rsquo;s order. Making
          ambition the driver of regicide allowed Shakespeare to flatter his king by showing
          what happens to men who reach for thrones they were not born to hold.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Vaulting ambition, which o&rsquo;erleaps itself&rdquo; &mdash; Macbeth, Act 1 Scene 7</li>
          <li>&ldquo;Too full o&rsquo; th&rsquo; milk of human kindness&rdquo; &mdash; Lady Macbeth, Act 1 Scene 5</li>
          <li>&ldquo;Stars, hide your fires; let not light see my black and deep desires&rdquo; &mdash; Macbeth, Act 1 Scene 4</li>
          <li>&ldquo;Tomorrow, and tomorrow, and tomorrow&rdquo; &mdash; Macbeth, Act 5 Scene 5</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">How to approach an ambition question</h2>
        <p>
          Grade 9 answers on ambition rarely succeed by labelling Macbeth as &ldquo;too
          ambitious&rdquo;. They succeed by tracking a journey: ambition as loyalty, then
          ambition as temptation, then ambition as action, then ambition as emptiness.
          Anchor each stage to a specific quote and always link back to Shakespeare&rsquo;s
          Jacobean audience and their belief in divine order.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/vaulting-ambition">&ldquo;Vaulting ambition&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/tomorrow-and-tomorrow-and-tomorrow">&ldquo;Tomorrow&rdquo; soliloquy analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/how-to-write-a-grade-9-macbeth-essay">How to write a Grade 9 Macbeth essay</Link></li>
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
    </AnalysisBoardGate>
  )
}
