import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/loss-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Loss: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of loss across Poppies, Kamikaze, The Emigrée, Remains and Bayonet Charge. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Loss — Theme Across the Anthology',
    description: 'Grade 9 theme analysis for AQA Power and Conflict.',
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
        <span className="text-foreground">Loss — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Loss: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Loss in the AQA Power and Conflict anthology is rarely just the loss of a person.
          The poets dramatise the loss of innocence, of home, of selfhood, of a belief in
          authority — and they show how these losses are caused by political violence or
          by the ordinary passage of time. A strong answer on loss argues that the poets
          are interested in what conflict takes away that cannot be replaced.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Poppies (Weir)</h2>
        <p>
          Weir writes about a mother&apos;s loss of her son and, with it, the loss of the
          shared physical closeness of parenting. Tiny details — smoothing his collar,
          running her fingers through his hair — show how grief relives the body&apos;s
          memory of another body. The final image at the war memorial is loss as a kind of
          listening that hears nothing back.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze (Garland)</h2>
        <p>
          Garland gives us a man who loses his family while remaining alive. After the
          pilot turns back from his mission, his wife <q>would not speak to him</q> and his
          children eventually learn to do the same. The poem is one of the anthology&apos;s
          cruellest pictures of social loss.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Emigrée (Rumens)</h2>
        <p>
          Rumens dramatises the loss of a homeland whose politics have turned violent.
          The speaker&apos;s city is hardening in the present while she holds on to its
          softer past. The poem shows that loss can be geographic: you can lose a place
          without moving from it, because the place itself can change into something
          unrecognisable.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Remains (Armitage)</h2>
        <p>
          Armitage stages the soldier&apos;s loss of his pre-war self. The looter he shot
          keeps <q>bursting again</q> in his head until he cannot sleep, and the colloquial
          voice insists that the loss is total and ordinary at the same time. This is loss
          as the slow erosion of one&apos;s own mind.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Bayonet Charge (Hughes)</h2>
        <p>
          Hughes&apos;s single infantryman loses his belief in the cause while his body
          is still running towards it. The middle stanza, when he realises that his
          patriotism has shrunk to a <q>patriotic tear</q>, is the exact moment of lost
          faith. Hughes makes the abstract loss physical.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the anthology, loss is not a single event but a long after-effect of
          conflict: Weir loses a child, Garland a family, Rumens a homeland, Armitage a
          self and Hughes a set of beliefs — and each poet finds formal tools to make that
          loss physically felt on the page.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/memory-theme-across-anthology" className="text-primary hover:underline">Memory — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/suffering-theme-across-anthology" className="text-primary hover:underline">Suffering — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/poppies-vs-war-photographer" className="text-primary hover:underline">Poppies vs War Photographer</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/kamikaze-vs-my-last-duchess" className="text-primary hover:underline">Kamikaze vs My Last Duchess</Link></li>
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
