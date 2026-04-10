import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lady Macbeth Character Analysis | The English Hub',
  description:
    'GCSE character analysis of Lady Macbeth. Her arc, key quotes, manipulation, guilt and Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/lady-macbeth-character-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lady Macbeth Character Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE character analysis of Lady Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/lady-macbeth-character-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Lady Macbeth character analysis</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Lady Macbeth character analysis
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Lady Macbeth is one of the most studied female characters in Shakespeare.
          Examiners love her because she has a clear arc: she begins as the most
          controlled, calculating mind in the play, and she ends as its most broken.
          Grade 9 answers treat her as a fully three-dimensional character rather than
          a one-note villain.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Our first impression: Act 1 Scene 5</h2>
        <p>
          Lady Macbeth enters reading a letter from her husband. Within a few lines she
          has diagnosed him as &ldquo;too full o&rsquo; th&rsquo; milk of human
          kindness&rdquo;, decided that Duncan will die, and summoned spirits to
          &ldquo;unsex&rdquo; her. Shakespeare deliberately introduces her alone on
          stage so the audience meets her on her own terms rather than through her
          husband. She is articulate, ruthless and strategically ambitious before we
          ever see her with Macbeth.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Her relationship with Macbeth</h2>
        <p>
          Shakespeare draws their marriage as a partnership of calculated ambition.
          Macbeth addresses his letter to his &ldquo;dearest partner of greatness&rdquo;,
          which is remarkably egalitarian language for 1606. Yet the dynamic is
          asymmetrical. Lady Macbeth dominates the first two acts. She stage-manages
          the murder, plants the daggers, and mocks her husband for being afraid of a
          &ldquo;painted devil.&rdquo; The marriage works because they each supply what
          the other lacks, and it fails because the cost of the murder falls on both
          of them eventually.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Her weapon: questioning masculinity</h2>
        <p>
          When Macbeth wavers in Act 1 Scene 7, Lady Macbeth attacks his identity as a
          man. &ldquo;When you durst do it, then you were a man.&rdquo; She even claims
          she would kill her own nursing child if she had sworn to. Whether or not
          she means it literally, the rhetorical effect on Macbeth is instant. This
          scene is essential for any question about manipulation or gender.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Her disappearance in Act 3</h2>
        <p>
          After the murder of Duncan, Shakespeare starts stepping her back. By Act 3,
          Macbeth plots the murder of Banquo alone and tells her to &ldquo;be innocent
          of the knowledge, dearest chuck.&rdquo; The &ldquo;partner of greatness&rdquo;
          has become someone who needs protecting. From this moment she is sidelined,
          and her guilt begins to surface.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The sleepwalking scene</h2>
        <p>
          Act 5 Scene 1 is the pay-off for her arc. She sleepwalks, washes imaginary
          blood from her hands and confesses to the murders in fragmented prose.
          Shakespeare switches her language from confident blank verse to broken speech,
          dramatising the collapse of her mind. The doctor observing her concludes she
          needs &ldquo;the divine&rdquo; rather than a physician, marking her illness
          as spiritual. She dies offstage shortly afterwards, probably by suicide.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Why her arc matters</h2>
        <p>
          Lady Macbeth is the clearest proof that the play&rsquo;s argument about guilt
          works on both partners. She believed a &ldquo;little water&rdquo; would clear
          her, and she was wrong. Her collapse mirrors, in miniature, the play&rsquo;s
          broader claim that consequence cannot be bargained with.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Context: the transgressive woman</h2>
        <p>
          A Jacobean audience expected women to be pious, domestic and obedient. Lady
          Macbeth is none of these things in Acts 1 and 2. She calls on spirits, mocks
          her husband, questions her own femininity and participates in regicide. This
          is what made her so theatrically powerful in 1606 and what keeps her
          examinable today: she breaks the cultural rules the audience lives by, and the
          play punishes her for it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Unsex me here&rdquo; &mdash; Act 1 Scene 5</li>
          <li>&ldquo;Too full o&rsquo; th&rsquo; milk of human kindness&rdquo; &mdash; Act 1 Scene 5</li>
          <li>&ldquo;When you durst do it, then you were a man&rdquo; &mdash; Act 1 Scene 7</li>
          <li>&ldquo;Out, damned spot!&rdquo; &mdash; Act 5 Scene 1</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          Top essays never reduce Lady Macbeth to &ldquo;evil.&rdquo; They track her arc
          from dominance to disappearance to collapse, argue that Shakespeare uses her
          to test the limits of Jacobean gender roles, and link her sleepwalking scene
          directly to the language of her &ldquo;unsex me&rdquo; soliloquy to show the
          play&rsquo;s cyclical structure.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/unsex-me-here">&ldquo;Unsex me here&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/out-damned-spot">&ldquo;Out, damned spot!&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/gender-theme-analysis">Gender theme analysis</Link></li>
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
