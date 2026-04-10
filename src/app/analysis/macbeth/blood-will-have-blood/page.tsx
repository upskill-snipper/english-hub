import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Blood Will Have Blood" Meaning and Analysis | The English Hub',
  description:
    'GCSE analysis of Macbeth\'s "Blood will have blood" line. Meaning, motif of blood, context and how to use it in a Grade 9 essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/blood-will-have-blood' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Blood Will Have Blood" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Macbeth\'s "Blood will have blood" line from Act 3 Scene 4.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/blood-will-have-blood',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Blood will have blood</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Blood will have blood&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;It will have blood, they say: blood will have blood.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Macbeth &mdash; Act 3, Scene 4</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Macbeth speaks this line after the banquet scene, in which the ghost of Banquo
          has just terrified him in front of his lords. Alone with Lady Macbeth, he admits
          that violence inevitably breeds more violence. Once a murderer, always a
          murderer: blood spilled demands further bloodshed as payment.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          The saying &ldquo;blood will have blood&rdquo; expressed the Jacobean belief that
          murdered victims cried out to God for revenge, and that God would answer by
          making sure the killer eventually suffered a violent death. Macbeth is
          acknowledging that the cosmic ledger will be balanced.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Repetition</strong> &mdash; &ldquo;blood&rdquo; is repeated within a single line, pressing the word into the audience&rsquo;s ear.</li>
          <li><strong className="text-foreground">Proverbial structure</strong> &mdash; &ldquo;they say&rdquo; frames the line as a timeless truth, not Macbeth&rsquo;s personal opinion.</li>
          <li><strong className="text-foreground">Personification</strong> &mdash; blood is given agency; it &ldquo;will have&rdquo; more blood, as if it were a living creditor collecting a debt.</li>
          <li><strong className="text-foreground">Motif</strong> &mdash; blood runs through the whole play, from the &ldquo;bloody man&rdquo; of Act 1 Scene 2 to Lady Macbeth&rsquo;s sleepwalking spot.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: providential justice</h2>
        <p>
          Jacobean theology was built on the idea that God operated a strict moral economy.
          Every unpunished murder was still being counted somewhere, and eventually divine
          justice would arrive. When Macbeth says &ldquo;blood will have blood&rdquo;, he
          is conceding that he cannot outrun this system: he has killed Duncan, Banquo and
          (later) the Macduff family, and each of those deaths will return to claim his
          own.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          The line sits at exactly the halfway point of the play. Act 3 is the pivot where
          Macbeth moves from murderer to tyrant, and this is his moment of recognition.
          The irony is that his response to this recognition is not repentance but
          acceleration: &ldquo;I am in blood / Stepp&rsquo;d in so far that, should I wade
          no more, / Returning were as tedious as go o&rsquo;er.&rdquo;
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for guilt, violence, or fate questions. A Grade 9 paragraph
          will argue that Shakespeare uses the line to dramatise the moment Macbeth
          understands the moral mechanism that will destroy him, and then chooses to
          ignore that knowledge. It is the opposite of repentance: a calculated embrace of
          damnation.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The repetition of &ldquo;blood&rdquo; and the proverbial framing turn murder
          into a debt that must be repaid, and Macbeth&rsquo;s decision to keep killing
          rather than repent confirms his final refusal of grace.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/out-damned-spot">&ldquo;Out, damned spot!&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/all-the-perfumes-of-arabia">&ldquo;All the perfumes of Arabia&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/guilt-theme-analysis">Guilt theme analysis</Link></li>
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
