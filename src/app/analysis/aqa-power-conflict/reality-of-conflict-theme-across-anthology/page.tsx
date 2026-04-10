import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/reality-of-conflict-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Reality of Conflict: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of the reality of conflict across Exposure, Bayonet Charge, Remains, War Photographer and Charge of the Light Brigade. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reality of Conflict — Theme Across the Anthology',
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
        <span className="text-foreground">Reality of Conflict — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Reality of Conflict: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Questions about the reality of conflict are asking you to compare the version of
          war that civilians and politicians are shown against the version experienced by
          the people actually fighting or surviving it. The AQA anthology is full of poems
          that strip away glamour, and the strongest essays argue that the poets from the
          twentieth and twenty-first centuries are in constant dialogue with the Victorian
          patriotism of Tennyson.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Exposure (Owen)</h2>
        <p>
          Owen&apos;s First World War trench poem is the benchmark. His men are killed
          not by German fire but by weather, hunger and boredom. The refrain <q>But nothing
          happens</q> turns the poem into a slow attack on the idea that war is about heroic
          action. The enemy is invisible and the real battlefield is the men&apos;s own
          minds.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Bayonet Charge (Hughes)</h2>
        <p>
          Hughes zooms in on a single infantryman running across no man&apos;s land. The
          poem opens mid-action — <q>Suddenly he awoke and was running</q> — and never
          looks away from the soldier&apos;s fear. Hughes dismantles patriotic abstractions
          by reducing them to a running <q>patriotic tear</q>. This is the reality of
          conflict as pure adrenaline and confusion.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Remains (Armitage)</h2>
        <p>
          Armitage&apos;s modern war poem gives us the psychological reality after the bullets
          stop. The speaker is an Iraq veteran who cannot get the image of a looter he shot
          out of his head. The poem shows that the reality of conflict extends years into
          the soldier&apos;s future and into a domestic space that used to feel safe.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">War Photographer (Duffy)</h2>
        <p>
          Duffy stages the reality of conflict through the eyes of a professional witness.
          Her photographer has spent years in places where <q>a hundred agonies</q> were the
          daily weather. The poem argues that civilians back home cannot handle the truth
          of what he has seen, so the photographer becomes a man doomed to carry a reality
          that his audience refuses.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Charge of the Light Brigade (Tennyson)</h2>
        <p>
          Tennyson&apos;s 1854 poem is the anthology&apos;s great outlier: written to
          commemorate bravery, it presents the reality of conflict through a romantic
          Victorian lens. But the phrase <q>Someone had blunder&apos;d</q> lets slip that
          even Tennyson knew what really happened. Treating this poem as a counterweight to
          the others strengthens any argument about how our image of war has changed.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;From Owen&apos;s frozen trench to Armitage&apos;s flashbacking veteran, the
          anthology is a long argument against the Victorian glamour Tennyson tried to
          preserve; the modern poets insist that the real reality of conflict is boredom,
          terror, commodified images and lasting psychological damage, and they use form
          and voice to force the reader to feel it.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/remains-vs-war-photographer" className="text-primary hover:underline">Remains vs War Photographer</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/bayonet-charge-vs-the-charge-of-the-light-brigade" className="text-primary hover:underline">Bayonet Charge vs Light Brigade</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/suffering-theme-across-anthology" className="text-primary hover:underline">Suffering — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/memory-theme-across-anthology" className="text-primary hover:underline">Memory — Theme</Link></li>
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
