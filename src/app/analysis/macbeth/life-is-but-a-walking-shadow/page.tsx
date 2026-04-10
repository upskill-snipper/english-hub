import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '"Life\'s but a Walking Shadow" Meaning and Analysis | The English Hub',
  description:
    'GCSE analysis of Macbeth\'s "Life\'s but a walking shadow" line. Meaning, theatrical metaphor and how to use the quote in a Grade 9 essay.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/life-is-but-a-walking-shadow' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '"Life\'s but a Walking Shadow" Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE analysis of Macbeth\'s "life\'s but a walking shadow" line from the Tomorrow soliloquy.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/life-is-but-a-walking-shadow',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Life&rsquo;s but a walking shadow</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        &ldquo;Life&rsquo;s but a walking shadow&rdquo; &mdash; meaning and analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <div className="mt-6 rounded-lg border-l-4 border-accent bg-primary/10 p-4">
        <p className="italic text-foreground">&ldquo;Life&rsquo;s but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more.&rdquo;</p>
        <p className="mt-1 text-xs text-muted-foreground">Macbeth &mdash; Act 5, Scene 5</p>
      </div>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          This is the middle section of Macbeth&rsquo;s &ldquo;Tomorrow&rdquo; soliloquy.
          Having just heard that his wife has died, Macbeth compares human life to a shadow
          and to a bad actor. We have no substance; we are only a brief silhouette on a
          stage.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Literal meaning</h2>
        <p>
          Life is as flimsy as a shadow and as short as the performance of a minor actor
          who spends his &ldquo;hour upon the stage&rdquo; and then vanishes. The
          implication is that human beings have no lasting weight, no permanence and no
          significance.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Key literary devices</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Metaphor</strong> &mdash; life is turned into a moving shadow, a strong visual image that suggests presence without substance.</li>
          <li><strong className="text-foreground">Theatrical imagery</strong> &mdash; Shakespeare writes into the play a metatheatrical moment where an actor on a stage is saying life is a stage, collapsing art and reality.</li>
          <li><strong className="text-foreground">Verbs of frustration</strong> &mdash; &ldquo;struts and frets&rdquo; reduce human action to nervous self-importance.</li>
          <li><strong className="text-foreground">Abrupt ending</strong> &mdash; &ldquo;and then is heard no more&rdquo; cuts the sentence off, enacting the silence that follows death.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Context: memento mori</h2>
        <p>
          Jacobean culture was saturated with memento mori &mdash; reminders of death,
          from skulls on jewellery to sermons about the shortness of life. Shakespeare is
          drawing on that tradition, but he strips away the usual Christian consolation:
          there is no mention here of heaven, resurrection or judgement. The shadow simply
          disappears.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How the line fits the play</h2>
        <p>
          Macbeth spent four acts trying to cement his legacy. He killed Duncan to become
          king, Banquo to stop Banquo&rsquo;s sons inheriting, and Macduff&rsquo;s family to
          crush rebellion. This line is the collapse of everything he fought for. If life
          is a walking shadow, then none of those murders bought him anything that lasts.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Using this quote in an essay</h2>
        <p>
          Use this quotation for tragedy, ambition, or existential questions. A Grade 9
          paragraph will do more than identify the theatrical metaphor. It will argue that
          Shakespeare, a working playwright, is asking the audience to consider whether
          their own lives differ from the one they have just watched acted out on stage,
          turning the soliloquy into a mirror held up to the Globe&rsquo;s audience.
        </p>

        <h2 className="text-xl font-semibold text-foreground">One-sentence analysis for revision</h2>
        <p>
          The walking-shadow metaphor fuses tragedy with metatheatre, forcing the audience
          to watch an actor on a stage deny the reality of life &mdash; and therefore of the
          play they are currently watching.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/tomorrow-and-tomorrow-and-tomorrow">&ldquo;Tomorrow&rdquo; soliloquy analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/a-tale-told-by-an-idiot">&ldquo;A tale told by an idiot&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
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
