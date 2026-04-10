import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/identity-theme-across-anthology'

export const metadata: Metadata = {
  title: 'Identity: Theme Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of identity across Checking Out Me History, The Emigrée, Kamikaze and Tissue. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Identity — Theme Across the Anthology',
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
        <span className="text-foreground">Identity — Theme</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Identity: Theme Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Identity questions in AQA Power and Conflict are asking you to compare how a
          speaker&apos;s sense of self is shaped, attacked or reclaimed by the power
          structures around them. The theme runs through the modern poems of the anthology
          especially strongly, and the best essays treat identity as a site where the
          personal and the political collide.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Checking Out Me History (Agard)</h2>
        <p>
          Agard&apos;s poem is a direct attack on a British school curriculum that tried
          to erase Black history. By reclaiming figures like Nanny de Maroon and Mary
          Seacole, and by writing in Guyanese Creole, Agard insists that his identity is
          built on a different history than the one he was taught. The final line —
          <q> I carving out me identity</q> — treats identity as something actively made by
          the speaker rather than inherited.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Emigrée (Rumens)</h2>
        <p>
          Rumens gives us identity as a protected interior memory. Her speaker&apos;s
          homeland has hardened politically, but the city she carries inside her remains
          <q> bright</q> and <q>sunlight-clear</q>. The poem insists that identity does not
          have to match the territory you were born in — it can live in a version of a
          place that the world has moved past.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze (Garland)</h2>
        <p>
          For Garland, identity is defined by the people around you. The pilot&apos;s sense
          of self is destroyed by his family and community after he turns back from his
          mission, and we see him through his daughter&apos;s memory — already half-erased.
          The poem warns that identity is fragile when it depends on collective acceptance.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Tissue (Dharker)</h2>
        <p>
          Dharker closes her poem with the image of <q>living tissue</q> — a pun that turns
          identity into the paper-thin skin of the human body itself. For Dharker, identity
          is not political documentation or historical record but the soft, shared
          material of being alive. This is the most philosophical version of identity in
          the anthology.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Ozymandias (Shelley)</h2>
        <p>
          Ozymandias also belongs in an identity essay. Shelley&apos;s pharaoh is a man so
          obsessed with being remembered that his identity is reduced to a name on a
          pedestal — and then even that is undone by the sand. It is a cautionary tale
          about letting authority do your identity work for you.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Across the anthology, identity is presented as something that is constantly
          contested by power: Agard carves his identity out of a curriculum that denied it,
          Rumens protects hers inside an unchangeable memory, Garland watches a community
          erase a man who broke its code, Dharker recasts identity as shared living tissue,
          and Shelley warns what happens to an identity built only on the fantasy of
          being remembered.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/checking-out-me-history-vs-the-emigree" className="text-primary hover:underline">Checking Out Me History vs The Emigrée</Link></li>
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
