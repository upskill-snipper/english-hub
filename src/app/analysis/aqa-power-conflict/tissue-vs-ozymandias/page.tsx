import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/tissue-vs-ozymandias'

export const metadata: Metadata = {
  title: 'Tissue vs Ozymandias: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Dharker\u2019s Tissue and Shelley\u2019s Ozymandias. Power of time, fragility of human authority, and the imagery of stone versus paper. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tissue vs Ozymandias: Comparison',
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
        <span className="text-foreground">Tissue vs Ozymandias</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Tissue vs Ozymandias: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Imtiaz Dharker&apos;s <em>Tissue</em> (2006) and Percy Bysshe Shelley&apos;s
          <em> Ozymandias</em> (1818) are a favourite pairing for questions about the power
          of time. Both poems argue that human attempts to create permanence are doomed, but
          they use opposite materials to make the case. Shelley points at stone that crumbles;
          Dharker points at paper that was fragile to begin with. The contrast lets you argue
          that human authority is weak whether it tries to look eternal or admits its own
          softness from the start.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Shelley was a Romantic radical who believed that all political power was a form of
          temporary delusion. His sonnet retells a story about the broken statue of
          Ramesses II in the Egyptian desert. Dharker, a Pakistani-born British poet, is
          interested in how much of human culture is held together by paper —
          maps, receipts, Korans, architectural plans, passports. <em>Tissue</em> was
          published in her collection <em>The Terrorist at My Table</em>, which asks how
          political violence is enabled by paperwork. Reading the two poems together lets
          you set a Romantic argument about time against a modern argument about bureaucracy.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both insist that nothing built by people lasts.</strong> Shelley gives us
          the <q>colossal wreck</q> of a pharaoh; Dharker gives us paper that the sun can
          shine through. In both poems the materials of empire are revealed as fragile.
        </p>
        <p>
          <strong>2. Both use imagery of decay and wear.</strong> Shelley describes a
          <q> shattered visage</q>; Dharker describes paper <q>smoothed and stroked and turned
          transparent with attention</q>. Both poets want the reader to feel the materials
          aging.
        </p>
        <p>
          <strong>3. Both use a calm, almost distant voice.</strong> Shelley uses a frame
          narrator — a traveller telling a story — to create detachment. Dharker uses a
          meditative, reflective voice that never raises itself. In both cases the calmness
          is the argument: time is so obviously stronger than power that there is no need
          to shout.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. What the poem is attacking.</strong> Shelley is attacking tyranny
          specifically — the arrogance of a single ruler. Dharker is attacking the broader
          human attempt to pin reality down on paper, from holy books to architectural
          drawings.
        </p>
        <p>
          <strong>2. Tone.</strong> Shelley&apos;s tone is ironic. Dharker&apos;s tone is
          almost reverent: she does not mock paper, she celebrates its softness. The
          difference lets you argue that Dharker finds beauty in fragility while Shelley
          finds comedy in collapse.
        </p>
        <p>
          <strong>3. Form.</strong> Shelley uses a tight, ironic sonnet. Dharker uses ten
          short, airy, unrhymed quatrains with lots of white space, imitating paper itself.
          In each poem the form is part of the argument.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Dharker and Shelley argue that human attempts at permanence are doomed,
          but while Shelley uses the sonnet and an ironic frame narrator to mock a tyrant
          whose stone has crumbled, Dharker uses airy free verse to celebrate the beauty of
          fragility as a more honest relationship with time.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-my-last-duchess" className="text-primary hover:underline">Ozymandias vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-london" className="text-primary hover:underline">Ozymandias vs London</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/power-of-nature-theme-across-anthology" className="text-primary hover:underline">Power of Nature — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology" className="text-primary hover:underline">Corruption of Power — Theme</Link></li>
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
