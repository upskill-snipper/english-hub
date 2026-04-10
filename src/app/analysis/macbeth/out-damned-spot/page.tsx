import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Out, Damned Spot!" Meaning and Analysis | The English Hub',
  description:
    'GCSE analysis of Lady Macbeth\'s sleepwalking line "Out, damned spot!". Meaning, guilt imagery, context and essay writing tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/out-damned-spot' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Out, Damned Spot!" Meaning and Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Lady Macbeth\'s sleepwalking scene and the line "Out, damned spot!".',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/out-damned-spot',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Out, damned spot!</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Out, damned spot!&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Out, damned spot! out, I say!&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Lady Macbeth &mdash; Act 5, Scene 1</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          This is Lady Macbeth&rsquo;s most famous line, spoken in the sleepwalking scene. A
          doctor and gentlewoman watch as she paces her chamber in the middle of the night,
          washing her hands and desperately trying to scrub away an invisible bloodstain. The
          &ldquo;spot&rdquo; is not real; it is the psychological residue of her part in
          Duncan&rsquo;s murder.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Lady Macbeth believes there is a spot of blood on her hand and she cannot make it
          come off. The ironic power of the line comes from Act 2, when she dismissed the
          idea that blood on the hands could be a moral problem: &ldquo;A little water clears
          us of this deed.&rdquo; In the sleepwalking scene, the water is gone and the blood
          has moved inward, into her conscience, where no washing can reach it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Imperative verb</strong> &mdash; &ldquo;Out&rdquo; is a command, echoing the controlling, decisive Lady Macbeth of Act 1. Now, though, the command is futile.</li>
          <li><strong className="text-foreground">Short sentences</strong> &mdash; Shakespeare has switched her from elegant blank verse to fractured prose, marking her mental collapse.</li>
          <li><strong className="text-foreground">Motif of blood</strong> &mdash; the spot is a visual symbol of guilt. The play argues that blood, unlike water, cannot be removed once it has been spilled.</li>
          <li><strong className="text-foreground">Dramatic irony</strong> &mdash; the doctor realises she is confessing to murder before she does; the audience has known for four acts.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: guilt and damnation</h2>
        <p>
          Jacobean Christianity taught that unrepented sin stained the soul and led to hell.
          Lady Macbeth&rsquo;s sleepwalking would have looked to Shakespeare&rsquo;s audience
          like the body of a damned woman acting out the inner torture of a soul that knows
          it cannot be forgiven. The doctor&rsquo;s line &ldquo;more needs she the divine
          than the physician&rdquo; confirms this reading: her illness is spiritual, not
          medical.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the quote fits the play</h2>
        <p>
          Lady Macbeth&rsquo;s arc is a mirror image of her husband&rsquo;s. In Act 1 she is
          ruthless and commanding and Macbeth is hesitant; by Act 5 he has hardened into a
          tyrant while she has shrunk into a guilt-ravaged insomniac. &ldquo;Out, damned
          spot&rdquo; is the moment that reversal is made visible. It also foreshadows her
          offstage death in Act 5 Scene 5, which Macbeth receives with his own despairing
          &ldquo;tomorrow&rdquo; soliloquy.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          This is the go-to quotation for guilt, Lady Macbeth, or gender questions. A Grade
          9 paragraph will not just label the spot as a symbol of guilt; it will contrast
          the imperative &ldquo;Out&rdquo; with her earlier commands to the spirits to
          &ldquo;unsex&rdquo; her, arguing that her attempt to unseat her own femininity
          collapses into a fragile, almost child-like voice by Act 5.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          Lady Macbeth&rsquo;s futile imperative dramatises the play&rsquo;s central argument
          that bloodshed stains the soul, not the skin, and that the guilt she once dismissed
          as weakness ultimately destroys her.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/all-the-perfumes-of-arabia">&ldquo;All the perfumes of Arabia&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/unsex-me-here">&ldquo;Unsex me here&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/guilt-theme-analysis">Guilt theme analysis</Link></li>
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
