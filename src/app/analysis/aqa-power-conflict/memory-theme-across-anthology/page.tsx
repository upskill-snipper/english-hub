import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/memory-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Memory: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of memory across Poppies, War Photographer, Remains, Kamikaze and The Emigrée. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Memory — Theme Across the Anthology',
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
        <span className="text-foreground">Memory — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Memory: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Memory is the theme most likely to turn up in a question that asks about the
          effects of conflict on those who come afterwards. The AQA Power and Conflict
          poets treat memory as dangerous: sometimes it preserves love, sometimes it becomes
          a trauma the speaker cannot stop replaying, and sometimes it is the only form of
          resistance a displaced speaker has left. The best essays on this theme argue that
          memory in this anthology is never passive — it is always doing political or
          psychological work.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Poppies (Weir)</h2>
        <p>
          Weir stages memory as a mother&apos;s ritual: pinning a poppy, smoothing a collar,
          standing at a war memorial. The poem drifts between past and present, using
          enjambment and free verse to mimic grief. For Weir, memory is an act of love that
          keeps a missing child alive in the mother&apos;s imagination.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Remains (Armitage)</h2>
        <p>
          Armitage gives us memory as trauma. The soldier&apos;s killing of a looter replays
          itself <q>week after week</q>, finally invading his sleep and his sober hours. This
          is memory as a wound that will not close, and the colloquial voice makes it
          unbearably ordinary.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">War Photographer (Duffy)</h2>
        <p>
          For Duffy&apos;s photographer, memory is a professional burden. The images develop
          in his dark-room, but the real developing is happening in his head. The poem shows
          how the people who carry a war&apos;s memory are often the people the war touched
          most lightly in body and most heavily in mind.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze (Garland)</h2>
        <p>
          Garland uses memory to show how the natural world can overpower ideology. The
          pilot&apos;s recollection of his father&apos;s fishing boat, the shoals of
          mackerel and the bright colours of childhood is what pulls him back from his
          mission. But the frame story — his daughter remembering — shows how one person&apos;s
          act of memory can become another person&apos;s inherited silence.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Emigrée (Rumens)</h2>
        <p>
          Rumens gives us memory as political resistance. Her speaker holds her childhood
          city in her mind so fiercely that even the shadow city of the present cannot
          unmake it. The poem argues that memory is an act of preservation in the face of
          political violence — that what a person refuses to forget is part of who they
          are.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the anthology, memory is the place where conflict carries on long
          after the guns have stopped: Weir presents it as the last love a mother has left,
          Armitage and Duffy present it as an injury that the body cannot shake, and
          Garland and Rumens present it as the only weapon a silenced or displaced speaker
          can still use.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/poppies-vs-war-photographer" className="text-primary hover:underline">Poppies vs War Photographer</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/remains-vs-war-photographer" className="text-primary hover:underline">Remains vs War Photographer</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/loss-theme-across-anthology" className="text-primary hover:underline">Loss — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/identity-theme-across-anthology" className="text-primary hover:underline">Identity — Theme</Link></li>
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
