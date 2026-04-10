import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Macbeth Shall Sleep No More" Meaning and Analysis | The English Hub',
  description:
    'GCSE analysis of "Macbeth shall sleep no more". Meaning, sleep imagery, guilt and how to use the quote in a Grade 9 essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/macbeth-shall-sleep-no-more' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Macbeth Shall Sleep No More" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of "Macbeth shall sleep no more" from Act 2 Scene 2.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/macbeth-shall-sleep-no-more',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Macbeth shall sleep no more</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Macbeth shall sleep no more&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Methought I heard a voice cry, &lsquo;Sleep no more! / Macbeth does murder sleep&rsquo; &hellip; &lsquo;Macbeth shall sleep no more.&rsquo;&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Macbeth &mdash; Act 2, Scene 2</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Macbeth reports this line to his wife immediately after killing Duncan. He thinks
          he heard a disembodied voice condemning him as he committed the murder. The line
          is both a prophecy and a curse: from this moment, Macbeth will never rest
          peacefully again.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Macbeth believes he has murdered sleep itself by killing Duncan in his bed.
          Because Duncan died asleep and defenceless, Macbeth has violated the most
          intimate and vulnerable state a human can be in, and he will be punished with
          insomnia.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Personification</strong> &mdash; sleep is treated as a living thing that can be murdered.</li>
          <li><strong className="text-foreground">Auditory hallucination</strong> &mdash; the &ldquo;voice&rdquo; is probably a product of his guilty conscience, echoing the earlier dagger hallucination.</li>
          <li><strong className="text-foreground">Prophetic structure</strong> &mdash; the voice speaks in the future tense, making Macbeth&rsquo;s punishment inevitable.</li>
          <li><strong className="text-foreground">Repetition of &ldquo;sleep&rdquo;</strong> &mdash; Shakespeare piles up images of the &ldquo;innocent sleep, sleep that knits up the ravell&rsquo;d sleave of care&rdquo; to emphasise what Macbeth has destroyed.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: sleep and the Jacobean conscience</h2>
        <p>
          In Jacobean thought, a clear conscience produced untroubled sleep. To lose sleep
          was a sign of spiritual sickness or possession, and to be unable to sleep at all
          was a mark of the damned. Macbeth&rsquo;s insomnia therefore is not just tiredness;
          it is a visible sign, legible to the audience, that his soul is beyond repair.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          Sleep becomes a running motif. Banquo is murdered on the way to bed. Lady Macbeth
          sleepwalks in Act 5 because she cannot sleep properly either. The doctor who
          observes her says her trouble is a matter that requires a priest, not medicine.
          Every character with blood on their hands is eventually denied rest.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for guilt, punishment, or Macbeth&rsquo;s character. A Grade 9
          paragraph will link it to Lady Macbeth&rsquo;s sleepwalking to argue that sleep
          deprivation is Shakespeare&rsquo;s chosen metaphor for psychological damnation,
          and that the play punishes its guilty couple long before the armies arrive.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          By personifying sleep and declaring it murdered, Shakespeare turns insomnia into
          the play&rsquo;s most intimate punishment, marking the Macbeths out as spiritually
          dead long before they are physically killed.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/is-this-a-dagger-which-i-see-before-me">&ldquo;Is this a dagger?&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/out-damned-spot">&ldquo;Out, damned spot!&rdquo; analysis</Link></li>
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
