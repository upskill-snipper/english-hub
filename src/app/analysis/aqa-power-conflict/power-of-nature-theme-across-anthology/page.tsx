import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/power-of-nature-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Power of Nature: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of the power of nature across Ozymandias, The Prelude, Storm on the Island, Exposure and Tissue. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Power of Nature — Theme Across the AQA Power and Conflict Anthology',
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
        <span className="text-foreground">Power of Nature — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Power of Nature: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Nature is one of the two biggest themes in the AQA Power and Conflict anthology,
          and it runs through at least six of the fifteen poems. A strong answer on this
          theme never treats nature as a single idea. Instead, the best essays argue that
          the anthology uses nature to expose the limits of human power: sometimes as a
          destroyer, sometimes as a teacher, and sometimes as a patient force that simply
          outlasts us.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Ozymandias (Shelley)</h2>
        <p>
          Shelley uses nature as the great leveller. The <q>lone and level sands</q> at the
          end of the sonnet roll out in every direction, swallowing the <q>colossal wreck</q>
          of a tyrant who had tried to carve himself into permanence. Here nature is not
          violent — it is patient. Its power is time itself, and time is stronger than any
          emperor. Shelley&apos;s radical politics are built into this image: if the desert
          can unmake a pharaoh, then no human ruler should feel safe.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Prelude (Wordsworth)</h2>
        <p>
          Wordsworth presents nature as a moral teacher. In the boat-stealing extract, the
          mountain <q>towered</q> and <q>strode after</q> the young Wordsworth until his mind
          was permanently changed. The poem is a Romantic argument that nature is active
          — it has a will of its own and it uses that will to chastise human arrogance. But
          the lesson is ultimately affectionate: the child is not destroyed, only humbled.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Storm on the Island (Heaney)</h2>
        <p>
          Heaney&apos;s storm is nature as enemy. The islanders begin the poem smug about
          their preparation — <q>We are prepared</q> — and end it cowering from <q>a huge
          nothing that we fear</q>. Crucially, the threat is invisible: the wind pummels the
          house but cannot be seen. Heaney uses nature to make an argument about the illusion
          of human security — and, perhaps, about the political weather gathering in
          Northern Ireland in 1966.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Exposure (Owen)</h2>
        <p>
          Owen&apos;s nature is the cruellest in the anthology. The east winds <q>knive us</q>
          and the dawn massing in the east is described as a new enemy army. For Owen,
          winter became more lethal than any German soldier during the stalemate of the
          trenches. The poem&apos;s refrain — <q>But nothing happens</q> — shows how the men
          are attacked by the weather in a war in which no military action takes place. This
          turns nature into the First World War&apos;s silent protagonist.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Tissue (Dharker)</h2>
        <p>
          Dharker uses nature subtly: sunlight shines through paper, water washes away maps,
          and the final image of <q>living tissue</q> makes the human body part of the
          natural cycle. Her argument is that what humans build is fragile, and the fragility
          itself is beautiful. Nature here is not an enemy but a quiet reminder that humans
          are not outside the world — they are made of it.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze (Garland)</h2>
        <p>
          Garland uses the pilot&apos;s memories of the sea — tuna, shoals, fishing boats —
          to pull him back from his mission. Nature in this poem is associated with life,
          family and continuity, and is the force that overpowers the violent ideology of
          his training. Unusually for the anthology, here nature is on the side of the human
          rather than against him.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the AQA Power and Conflict anthology, nature is presented not as a
          single force but as a stress test for human pretensions: Shelley&apos;s desert
          mocks empire, Wordsworth&apos;s mountains educate the soul, Heaney&apos;s storm
          exposes communal fragility, Owen&apos;s winter kills where armies cannot, and
          Dharker&apos;s sunlit tissue reminds us that even our bodies belong to the world
          we thought we were ruling.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/exposure-vs-storm-on-the-island" className="text-primary hover:underline">Exposure vs Storm on the Island</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/the-prelude-vs-storm-on-the-island" className="text-primary hover:underline">The Prelude vs Storm on the Island</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/tissue-vs-ozymandias" className="text-primary hover:underline">Tissue vs Ozymandias</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/power-of-humans-theme-across-anthology" className="text-primary hover:underline">Power of Humans — Theme</Link></li>
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
