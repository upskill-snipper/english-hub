import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/checking-out-me-history-vs-the-emigree'

export const metadata: Metadata = {
  title: 'Checking Out Me History vs The Emigrée: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Agard\u2019s Checking Out Me History and Rumens\u2019s The Emigrée. Identity, memory, language and belonging. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Checking Out Me History vs The Emigrée: Comparison',
    description: 'Grade 9 comparison for AQA Power and Conflict.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: PAGE_URL,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-power-conflict" className="hover:text-foreground">AQA Power and Conflict</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Checking Out Me History vs The Emigrée</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Checking Out Me History vs The Emigrée: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          John Agard&apos;s <em>Checking Out Me History</em> (2007) and Carol Rumens&apos;s
          <em> The Emigrée</em> (1993) are the anthology&apos;s two poems about identity shaped
          by place and displacement. Agard writes as a Black British Caribbean poet reclaiming
          the history he was never taught in British schools. Rumens writes in the voice of
          someone who has left a homeland now under political shadow. Together they let you
          argue that identity is built out of the stories and memories a person carries, and
          that power is always involved in which stories are allowed to be told.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Agard moved from Guyana to Britain in 1977 and has spent his career confronting the
          whitewashing of Black history in British education. The figures he reclaims —
          Toussaint L&apos;Ouverture, Nanny de Maroon, Mary Seacole — are all anti-colonial or
          Black British heroes left out of the Victorian curriculum. Rumens, a British poet,
          wrote <em>The Emigrée</em> deliberately without naming a country or language, so
          that it could stand for every refugee who holds on to a sunlit city that has
          hardened into something frightening. Both poems are about the politics of
          remembering.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both use memory to resist erasure.</strong> Agard&apos;s speaker insists
          on naming forgotten heroes; Rumens&apos;s speaker insists that she will keep her
          <q> bright, filled paperweight</q> of a city alive in her mind. Both poems treat
          memory as an act of political defiance.
        </p>
        <p>
          <strong>2. Both use light imagery to talk about identity.</strong> Agard uses
          candles, lanterns and a <q>yellow sunrise</q> to mark the moment of self-discovery.
          Rumens uses the word <q>sunlight</q> like a refrain — her city is <q>sunlight-clear</q>
          even when the news is dark. Light is the metaphor each poet trusts to represent a
          truer self.
        </p>
        <p>
          <strong>3. Both end on self-assertion.</strong> Agard&apos;s final line —
          <q> I carving out me identity</q> — and Rumens&apos;s final image of the speaker
          walking with her city through the threats of the shadow city both show a speaker
          who refuses to be defined by what has been done to them.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Dialect vs standard English.</strong> Agard writes in Guyanese Creole,
          using non-standard spelling and rhythm to enact his rebellion. Rumens writes in
          standard English, letting the poem&apos;s meaning do the work rather than the
          sound of its voice.
        </p>
        <p>
          <strong>2. Anger vs longing.</strong> Agard&apos;s tone is sharp and combative.
          Rumens&apos;s tone is wistful and protective. The difference lets you argue
          about whether identity is reclaimed through defiance or through tenderness.
        </p>
        <p>
          <strong>3. Structure.</strong> Agard&apos;s poem alternates stanzas about the white
          British curriculum with italicised stanzas about Black history, making the clash
          visible on the page. Rumens uses three regular stanzas that gradually darken as
          the outside world presses in.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Agard and Rumens present identity as something built out of contested
          memory, but while Agard uses Creole and an aggressive structural clash to reclaim
          a stolen history, Rumens uses imagery of sunlight to insist on the tenderness of
          the emigrant&apos;s inner world.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/identity-theme-across-anthology" className="text-primary hover:underline">Identity — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/memory-theme-across-anthology" className="text-primary hover:underline">Memory — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/loss-theme-across-anthology" className="text-primary hover:underline">Loss — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/context-across-power-conflict-poems" className="text-primary hover:underline">Context Across the Poems</Link></li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revising the whole cluster?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          For full poem-by-poem study, head to our Power and Conflict revision notes.
        </p>
        <div className="mt-4">
          <Link href="/revision/poetry/power-and-conflict" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Go to Power and Conflict revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
