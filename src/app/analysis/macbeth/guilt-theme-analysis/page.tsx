import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guilt in Macbeth — Theme Analysis | The English Hub',
  description:
    'GCSE theme analysis of guilt in Macbeth. Blood imagery, sleep, and how Shakespeare punishes the Macbeths psychologically. Grade 9 essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/guilt-theme-analysis' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Guilt in Macbeth — Theme Analysis',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'GCSE theme analysis of guilt in Macbeth.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/guilt-theme-analysis',
  }
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Guilt theme</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How does Shakespeare present guilt in Macbeth?
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Guilt is the mechanism through which Shakespeare punishes his tragic couple.
          There are no lengthy trials, no righteous avengers and almost no onstage divine
          justice in <em>Macbeth</em>. Instead, conscience does all the work. The Macbeths
          torture themselves more effectively than any court ever could, and the play
          traces that process with unnerving detail.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Guilt before the crime</h2>
        <p>
          Shakespeare shows that guilt can precede action. The dagger soliloquy in Act 2
          Scene 1 dramatises Macbeth&rsquo;s conscience projecting an imagined weapon in
          front of his eyes. The vision arrives before the murder, which means his mind
          is already punishing him for a crime he has not yet committed. Guilt in the
          play is therefore not only a reaction; it is a warning system Macbeth chooses
          to ignore.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Blood as the main motif</h2>
        <p>
          Blood is the play&rsquo;s master symbol for guilt. Immediately after the murder,
          Macbeth asks whether &ldquo;all great Neptune&rsquo;s ocean&rdquo; can wash the
          blood from his hand and concludes that his hand will instead dye the ocean red.
          Lady Macbeth responds with her infamous &ldquo;a little water clears us of this
          deed.&rdquo; Her confidence will collapse in Act 5 when she scrubs at a
          non-existent spot and despairs that &ldquo;all the perfumes of Arabia will not
          sweeten this little hand.&rdquo; The trajectory of the blood imagery tracks the
          growth of guilt.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Sleep as the other motif</h2>
        <p>
          Shakespeare pairs blood with sleep. Macbeth thinks he hears a voice saying
          &ldquo;Macbeth shall sleep no more&rdquo; during Duncan&rsquo;s murder. Lady
          Macbeth sleepwalks in Act 5, reliving the crime in fragments. Both characters
          lose the rest a clear conscience would have given them. For a Jacobean audience,
          broken sleep was a visible sign of a damaged soul, which is why Shakespeare uses
          it so relentlessly.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The banquet scene: guilt made visible</h2>
        <p>
          The arrival of Banquo&rsquo;s ghost at the banquet is the moment where
          Macbeth&rsquo;s guilt breaks out of his mind and onto the public stage. Only
          Macbeth can see the ghost, but his lords can see his terror, and his kingship
          is damaged as a result. Guilt, in other words, is politically dangerous &mdash;
          it makes a tyrant appear weak in front of his own court.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The sleepwalking scene as a sentencing</h2>
        <p>
          Lady Macbeth&rsquo;s sleepwalking scene is the play&rsquo;s verdict on her.
          Shakespeare switches her from confident blank verse to broken prose, dramatising
          her loss of control. The doctor observes that she needs &ldquo;the divine&rdquo;
          rather than a physician, which tells the Jacobean audience her damage is
          spiritual rather than medical. She will die offstage in Act 5, and her death
          feels inevitable by the time we hear of it.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Why the couple split</h2>
        <p>
          One of the most examinable features of this theme is the way the Macbeths swap
          positions. In Act 1, Lady Macbeth is ruthless and Macbeth is hesitant. By Act 5,
          Macbeth is numb and Lady Macbeth is destroyed. Shakespeare is showing that guilt
          finds everyone eventually, but the character who buried it deepest, fastest,
          breaks first.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Essay-ready key quotes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>&ldquo;Will all great Neptune&rsquo;s ocean wash this blood / Clean from my hand?&rdquo; &mdash; Macbeth, Act 2 Scene 2</li>
          <li>&ldquo;Out, damned spot!&rdquo; &mdash; Lady Macbeth, Act 5 Scene 1</li>
          <li>&ldquo;Macbeth shall sleep no more&rdquo; &mdash; Macbeth, Act 2 Scene 2</li>
          <li>&ldquo;All the perfumes of Arabia&rdquo; &mdash; Lady Macbeth, Act 5 Scene 1</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Grade 9 approach</h2>
        <p>
          The top essays on guilt never flatten it into one reaction. They trace the motif
          across the play, they notice the role-reversal between husband and wife, and
          they connect the imagery of blood and sleep to Jacobean beliefs about conscience
          and damnation. Anchor every point to a specific moment in the text.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/out-damned-spot">&ldquo;Out, damned spot!&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/blood-will-have-blood">&ldquo;Blood will have blood&rdquo; analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-shall-sleep-no-more">&ldquo;Macbeth shall sleep no more&rdquo; analysis</Link></li>
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
