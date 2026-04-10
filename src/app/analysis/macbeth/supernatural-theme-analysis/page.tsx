import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Supernatural in Macbeth — Theme Analysis | The English Hub',
  description:
    'GCSE theme analysis of the supernatural in Macbeth. Witches, apparitions, Jacobean context and how to use it in a Grade 9 essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/supernatural-theme-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Supernatural in Macbeth — Theme Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE theme analysis of the supernatural in Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/supernatural-theme-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Supernatural theme</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How does Shakespeare present the supernatural in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          The supernatural saturates <em>Macbeth</em>. Witches, ghosts, visions,
          apparitions and prophetic voices appear in almost every act. Shakespeare uses
          these elements to destabilise the moral world of the play and to ask a genuinely
          difficult question: if evil is already moving through the universe, how
          responsible is Macbeth for what he does?
        </p>

        <h2 className="text-xl font-semibold text-foreground">The witches and their function</h2>
        <p>
          The play opens with the three witches on a blasted heath, chanting in trochaic
          tetrameter and announcing that &ldquo;fair is foul, and foul is fair.&rdquo;
          They are the first voices the audience hears, which gives them a structural
          importance greater than Duncan, Macbeth or even the play&rsquo;s narrator. By
          meeting Macbeth within a hundred lines of the opening, they make evil feel
          inevitable before it has had a chance to become a choice.
        </p>
        <p>
          Importantly, the witches do not actually tell Macbeth to kill Duncan. They
          simply say he will be king. The thought to murder is his own. This is the
          tightrope Shakespeare walks throughout the play: the supernatural creates the
          opportunity, but the character supplies the will.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The dagger and the ghost</h2>
        <p>
          Supernatural events in Macbeth often double as psychological events. The
          hallucinated dagger is either a genuine vision sent by the witches or a guilty
          projection of Macbeth&rsquo;s own mind. Shakespeare deliberately leaves this
          ambiguous so the scene can do double work: the dagger is a sign of cosmic
          disturbance <em>and</em> an X-ray of Macbeth&rsquo;s conscience. The same goes
          for Banquo&rsquo;s ghost at the banquet, which only Macbeth can see.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The apparitions of Act 4</h2>
        <p>
          When Macbeth visits the witches a second time, they show him three apparitions:
          an armed head, a bloody child and a crowned child with a tree. Each one is
          literally true but strategically misleading, a technique known as
          &ldquo;equivocation.&rdquo; Shakespeare uses the apparitions to stage how evil
          works in the play &mdash; it tells the truth in a way designed to destroy the
          person listening.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: King James and witchcraft</h2>
        <p>
          James I, the monarch when Macbeth was written, had personally overseen witch
          trials in Scotland and had published a book called <em>Daemonologie</em> in
          1597. He genuinely believed witches existed, could conjure weather, and acted
          as agents of the devil. Shakespeare was writing a play with his king sitting in
          the audience, so the witches had to look real and their threat had to feel
          immediate. Referencing &ldquo;equivocation&rdquo; also nodded at the recent
          Gunpowder Plot of 1605, in which conspirators were said to have lied under
          oath by using equivocal language.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the supernatural shapes the plot</h2>
        <p>
          The supernatural drives the play&rsquo;s three major turning points. The first
          meeting with the witches triggers Macbeth&rsquo;s ambition. The hallucinated
          dagger gives him the nerve to murder Duncan. The apparitions at the cauldron
          give him the false confidence that no man &ldquo;of woman born&rdquo; can kill
          him, which leads him to keep killing until he is destroyed. Evil does not
          commit the murders, but it shapes the path that makes them possible.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Fair is foul, and foul is fair&rdquo; &mdash; Witches, Act 1 Scene 1</li>
          <li>&ldquo;Double, double toil and trouble&rdquo; &mdash; Witches, Act 4 Scene 1</li>
          <li>&ldquo;Is this a dagger which I see before me?&rdquo; &mdash; Macbeth, Act 2 Scene 1</li>
          <li>&ldquo;None of woman born shall harm Macbeth&rdquo; &mdash; Apparition, Act 4 Scene 1</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          The strongest answers on the supernatural avoid deciding whether the witches
          &ldquo;caused&rdquo; Macbeth to act. Instead they argue that Shakespeare holds
          two ideas in tension: a cosmos that is already corrupted, and a human who
          chooses to step into the corruption. Link every point to Jacobean beliefs about
          witchcraft and equivocation.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/fair-is-foul-and-foul-is-fair">&ldquo;Fair is foul&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/double-double-toil-and-trouble">&ldquo;Double, double&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/is-this-a-dagger-which-i-see-before-me">&ldquo;Is this a dagger?&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/appearance-vs-reality-theme">Appearance vs Reality theme</Link></li>
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
