import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Appearance vs Reality in Macbeth — Theme Analysis | The English Hub',
  description:
    'GCSE theme analysis of appearance vs reality in Macbeth. Key quotes, deception, Jacobean context and Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/appearance-vs-reality-theme' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Appearance vs Reality in Macbeth — Theme Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE theme analysis of appearance vs reality in Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/appearance-vs-reality-theme',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Appearance vs Reality</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How does Shakespeare present appearance vs reality in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Appearance versus reality is the structural spine of <em>Macbeth</em>. The
          entire play asks a single question: can you trust what you see? The witches say
          fair is foul. Lady Macbeth tells her husband to look like a flower and be a
          serpent. Apparitions tell literal truths that mean something completely
          different. Shakespeare builds a world in which the surface of everything has
          been separated from its reality.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The witches open the theme</h2>
        <p>
          &ldquo;Fair is foul, and foul is fair&rdquo; is the first complete thought the
          audience hears. It is a paradox, a chiasmus and a warning, all in one line.
          Macbeth&rsquo;s own first line &mdash; &ldquo;So foul and fair a day I have not
          seen&rdquo; &mdash; echoes the witches before he has even met them, which
          primes the audience to notice that his moral perception is already blurred.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Lady Macbeth as the theory of deceit</h2>
        <p>
          Lady Macbeth provides the most explicit instruction: &ldquo;Look like the
          innocent flower, / But be the serpent under&rsquo;t.&rdquo; This is the
          play&rsquo;s working definition of hypocrisy. Duncan arrives at the castle
          praising its &ldquo;pleasant seat&rdquo; while the Macbeths are already
          planning to kill him. The gap between the host&rsquo;s welcome and the
          host&rsquo;s intention is the theme in miniature.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Duncan&rsquo;s warning in Act 1</h2>
        <p>
          Shakespeare plants an early warning about appearance versus reality in Duncan
          himself. After executing the previous Thane of Cawdor, Duncan says,
          &ldquo;There&rsquo;s no art / To find the mind&rsquo;s construction in the
          face.&rdquo; He is complaining that he cannot read loyalty on a man&rsquo;s
          features. He then turns and gives the title &ldquo;Thane of Cawdor&rdquo; to
          Macbeth, who will murder him by the end of the night. The dramatic irony is
          brutal.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Equivocation and the apparitions</h2>
        <p>
          In Act 4, the witches show Macbeth apparitions that appear to guarantee his
          safety. &ldquo;None of woman born&rdquo; will harm him, and he will not be
          defeated until Birnam Wood moves to Dunsinane. Both prophecies are literally
          true. But Macduff was &ldquo;from his mother&rsquo;s womb / Untimely
          ripp&rsquo;d&rdquo; (a Caesarean birth), and the English army camouflages
          itself with branches from Birnam Wood. The surface of the prophecy has nothing
          to do with its meaning. This technique is called equivocation, and it was
          politically loaded in 1606 because of the Gunpowder Plot trial, where
          conspirators had used equivocal language to avoid confessing under oath.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Macbeth&rsquo;s internal theme: mind vs eye</h2>
        <p>
          The theme is not only political. It is psychological. Macbeth sees a dagger
          that is not there. Banquo&rsquo;s ghost appears at the banquet but only to
          Macbeth. Lady Macbeth sees blood on a clean hand. The audience watches
          characters argue with their own perception. Shakespeare is showing that once
          guilt enters the mind, the eye can no longer be trusted, and once the eye
          can no longer be trusted, moral judgement collapses.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: Jacobean anxieties about deception</h2>
        <p>
          The theme was topical. The Gunpowder Plot had been discovered just a year
          before the play was performed, and the Catholic priest Henry Garnet had
          defended equivocation as a way of protecting Catholics from Protestant
          persecution. To a Jacobean audience, therefore, the idea that the truth could
          be weaponised by language was not an abstract literary idea; it was a matter
          of national security.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Fair is foul, and foul is fair&rdquo; &mdash; Witches, Act 1 Scene 1</li>
          <li>&ldquo;Look like the innocent flower&rdquo; &mdash; Lady Macbeth, Act 1 Scene 5</li>
          <li>&ldquo;There&rsquo;s no art / To find the mind&rsquo;s construction in the face&rdquo; &mdash; Duncan, Act 1 Scene 4</li>
          <li>&ldquo;None of woman born&rdquo; &mdash; Apparition, Act 4 Scene 1</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          The best essays connect the theme to the play&rsquo;s language, plot and
          context simultaneously. Argue that Shakespeare is not just staging examples of
          deception but constructing a world in which moral perception has broken down,
          and link this to Jacobean anxieties about equivocation after the Gunpowder
          Plot.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/fair-is-foul-and-foul-is-fair">&ldquo;Fair is foul&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/look-like-the-innocent-flower">&ldquo;Innocent flower&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/supernatural-theme-analysis">The Supernatural theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/is-this-a-dagger-which-i-see-before-me">&ldquo;Is this a dagger?&rdquo; analysis</Link></li>
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
