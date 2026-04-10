import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gender in Macbeth — Theme Analysis | The English Hub',
  description:
    'GCSE theme analysis of gender in Macbeth. Masculinity, femininity, Lady Macbeth and the witches. Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/gender-theme-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gender in Macbeth — Theme Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE theme analysis of gender in Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/gender-theme-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Gender theme</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How does Shakespeare present gender in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Gender in <em>Macbeth</em> is unstable. Shakespeare writes a world where women
          want to be stripped of their femininity, men are goaded into proving their
          manhood, and supernatural beings blur the boundary between male and female
          altogether. Gender is not a fixed category in the play; it is a performance
          that can be switched on, turned against other people, and manipulated into
          violence.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Lady Macbeth and the rejection of femininity</h2>
        <p>
          Lady Macbeth&rsquo;s first major speech is her &ldquo;unsex me here&rdquo;
          soliloquy, in which she asks spirits to remove the biological markers of her
          womanhood: stop her menstrual blood, curdle her breast milk, and fill her with
          cruelty. Her understanding of gender is that femininity means compassion and
          masculinity means action. She wants the second.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Manipulating Macbeth&rsquo;s masculinity</h2>
        <p>
          In Act 1 Scene 7, when Macbeth says he will not kill Duncan, Lady Macbeth
          responds by questioning his manhood: &ldquo;When you durst do it, then you were
          a man.&rdquo; She even claims she would kill her own nursing baby if she had
          sworn to. This is the play&rsquo;s central insight about toxic masculinity:
          when &ldquo;being a man&rdquo; is defined as the willingness to commit
          violence, a man can be manipulated into almost anything by someone who
          questions it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The witches and gender ambiguity</h2>
        <p>
          When Banquo meets the witches, he notes that they &ldquo;should be women, / And
          yet your beards forbid me to interpret / That you are so.&rdquo; Shakespeare
          deliberately makes the witches gender-ambiguous. In a Jacobean cultural
          context, that ambiguity was frightening because it broke a category that was
          supposed to be fixed by God. The witches are unnatural not only because they
          practise magic but because they refuse to fit the gender system.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Macbeth&rsquo;s definition of masculinity</h2>
        <p>
          Macbeth himself struggles with what being a man means. His most honest moment
          on the subject comes when he tells his wife: &ldquo;I dare do all that may
          become a man; / Who dares do more is none.&rdquo; He is trying to argue that
          masculinity has moral limits. She destroys this idea in seconds. By Act 4,
          when Macbeth orders the murder of Macduff&rsquo;s wife and children,
          masculinity has collapsed into simple cruelty.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Macduff and a different kind of manhood</h2>
        <p>
          Shakespeare offers a counter-model in Macduff. When Macduff learns his family
          has been slaughtered, Malcolm tells him to respond &ldquo;like a man.&rdquo;
          Macduff famously replies, &ldquo;I shall do so; / But I must also feel it as a
          man.&rdquo; This is the play&rsquo;s alternative: being a man includes feeling
          grief, not suppressing it. Shakespeare is quietly rewriting the definition of
          masculinity that the Macbeths have been trying to enforce.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: Jacobean patriarchy</h2>
        <p>
          Jacobean society expected women to be pious, silent and obedient. Lady Macbeth
          and the witches break every one of these expectations, which is exactly why
          they were theatrically powerful in 1606. For a modern audience, the theme
          shades into a critique of how rigid gender roles create monstrous
          consequences, which is why gender questions are increasingly popular on GCSE
          papers.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Unsex me here&rdquo; &mdash; Lady Macbeth, Act 1 Scene 5</li>
          <li>&ldquo;When you durst do it, then you were a man&rdquo; &mdash; Lady Macbeth, Act 1 Scene 7</li>
          <li>&ldquo;I dare do all that may become a man&rdquo; &mdash; Macbeth, Act 1 Scene 7</li>
          <li>&ldquo;I must also feel it as a man&rdquo; &mdash; Macduff, Act 4 Scene 3</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          Top essays argue that Shakespeare uses the play to interrogate the definition
          of masculinity itself, contrasting the Macbeths&rsquo; violent version of
          manhood with Macduff&rsquo;s emotionally honest one. The most sophisticated
          answers read Lady Macbeth not as a villain but as a character who has
          internalised patriarchal logic and turned it against her own husband.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/unsex-me-here">&ldquo;Unsex me here&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/the-milk-of-human-kindness">&ldquo;The milk of human kindness&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/screw-your-courage-to-the-sticking-place">&ldquo;Screw your courage&rdquo; analysis</Link></li>
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
