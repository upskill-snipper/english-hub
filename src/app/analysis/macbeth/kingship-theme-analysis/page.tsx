import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kingship in Macbeth — Theme Analysis | The English Hub',
  description:
    'GCSE theme analysis of kingship in Macbeth. Duncan, Macbeth, Malcolm and the divine right of kings. Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/kingship-theme-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kingship in Macbeth — Theme Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE theme analysis of kingship in Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/kingship-theme-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Kingship theme</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How does Shakespeare present kingship in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Kingship is one of the most politically loaded themes in <em>Macbeth</em>.
          Shakespeare was writing a Scottish play for a Scottish king, James I, who
          believed his authority came directly from God. The play therefore had to
          celebrate legitimate kingship, condemn usurpation, and do so in front of the
          very monarch whose ancestors appear in its apparition scene. Shakespeare
          handles this with remarkable subtlety by contrasting three different versions
          of kingship.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Duncan: the ideal but vulnerable king</h2>
        <p>
          Duncan is presented as generous, trusting and holy. He calls Macbeth
          &ldquo;worthiest cousin&rdquo; and rewards him openly. His speech is full of the
          vocabulary of gratitude. Yet Shakespeare also makes him old and physically
          defenceless, which is why the murder in his sleep feels so transgressive. The
          play suggests that goodness in a king does not come with armour; legitimacy is
          protected by loyalty, and when loyalty fails, kings die. Macduff&rsquo;s later
          description of Duncan as &ldquo;a most sainted king&rdquo; confirms his moral
          status.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Macbeth: the tyrant</h2>
        <p>
          Once Macbeth is on the throne, Shakespeare systematically dismantles any
          illusion that he could be a legitimate king. He murders Banquo, orders the
          slaughter of the Macduff family, relies on the witches for advice and rules
          through fear. Characters stop speaking his name and start calling him a
          &ldquo;tyrant&rdquo; and a &ldquo;dwarfish thief&rdquo; wearing &ldquo;a giant&rsquo;s
          robe.&rdquo; The point is that kingship is not a job title; it is a moral
          condition, and Macbeth never holds it legitimately.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Malcolm&rsquo;s test: the king as moral checklist</h2>
        <p>
          In Act 4 Scene 3, Malcolm pretends to be worse than Macbeth in order to test
          Macduff. He lists the &ldquo;king-becoming graces&rdquo;: &ldquo;Justice,
          verity, temperance, stableness, / Bounty, perseverance, mercy, lowliness.&rdquo;
          This is essentially Shakespeare spelling out his definition of a good king on
          stage. When Malcolm reveals he actually possesses all of these, the audience
          sees the template being restored.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Edward the Confessor as the ideal benchmark</h2>
        <p>
          The same scene mentions Edward the Confessor, the English king, who is able to
          heal the sick simply by touching them. This is Shakespeare flattering the
          English crown but also reinforcing that true kingship is a divine power. The
          contrast with Macbeth&rsquo;s Scotland is deliberate: England is blessed
          because its king is blessed.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: the divine right of kings</h2>
        <p>
          James I believed a king was chosen by God, which meant killing a king was
          killing God&rsquo;s representative on earth. He had also survived the Gunpowder
          Plot in 1605, which made the question of regicide urgently topical. Shakespeare
          uses <em>Macbeth</em> to reinforce the doctrine: usurpers will be destroyed,
          legitimate kings will eventually be restored, and the universe itself will
          punish anyone who reaches for a throne they were not born to.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The restoration in Act 5</h2>
        <p>
          Shakespeare&rsquo;s resolution is extremely orthodox: Macbeth is killed, his
          head is paraded on a pole, and Malcolm is crowned at Scone. The play ends with
          a legitimate king restored to his rightful throne. The political message is
          precisely the one James I wanted his subjects to hear.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;There&rsquo;s no art / To find the mind&rsquo;s construction in the face&rdquo; &mdash; Duncan, Act 1 Scene 4</li>
          <li>&ldquo;Worthy Macbeth&rdquo; &mdash; Duncan, Act 1 Scene 3</li>
          <li>&ldquo;This tyrant, whose sole name blisters our tongues&rdquo; &mdash; Malcolm, Act 4 Scene 3</li>
          <li>&ldquo;The king-becoming graces&rdquo; &mdash; Malcolm, Act 4 Scene 3</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          The best essays on kingship do not just compare Duncan, Macbeth and Malcolm.
          They argue that Shakespeare uses all three to construct a definition of
          legitimate rule, and that the play functions as political theatre reassuring
          James I of the Stuart line&rsquo;s divinely sanctioned authority.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/banquo-character-analysis">Banquo character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
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
  )
}
