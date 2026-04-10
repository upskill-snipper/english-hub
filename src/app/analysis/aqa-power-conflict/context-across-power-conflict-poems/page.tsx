import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/context-across-power-conflict-poems'

export const metadata: Metadata = {
  title: 'Context Across the AQA Power and Conflict Poems (AO3 Revision)',
  description:
    'AO3 context for every AQA Power and Conflict poem. Romanticism, the two World Wars, the Troubles and post-colonial writing. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Context Across the Power and Conflict Poems',
    description: 'AO3 revision for AQA Power and Conflict.',
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
        <span className="text-foreground">Context Across the Poems</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Context Across the AQA Power and Conflict Poems</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          AO3 is worth six marks and is the easiest place to lose them in the exam. The
          trick is not to write context in bolted-on sentences but to weave it into your
          analysis so that the examiner sees you understand how the historical moment
          shaped the choices the poet made. Here is the context you need for every one
          of the fifteen poems, compressed into one or two usable sentences each.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Romantic radicals (late 1700s to early 1800s)</h2>
        <p>
          Blake wrote <em>London</em> in 1794, during the French Revolution, and was
          furious about child labour and the state&apos;s complicity with the church.
          Wordsworth&apos;s <em>Prelude</em> was written in 1805, part of a Romantic
          philosophy that nature was a moral teacher. Shelley wrote <em>Ozymandias</em>
          in 1817, as a radical opponent of the Regency monarchy. The three Romantic poets
          share a belief that political power is temporary and that individual
          perception — of suffering, of nature, of time — is morally important.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Victorian empire (mid-1800s)</h2>
        <p>
          Browning published <em>My Last Duchess</em> in 1842, at the height of Victorian
          patriarchal confidence. Tennyson, as Poet Laureate, wrote <em>The Charge of the
          Light Brigade</em> in 1854, six weeks after the real charge at Balaclava. Both
          poets are shaping, and sometimes quietly criticising, the confident imperial
          voice of nineteenth-century Britain.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">First World War (1914 to 1918)</h2>
        <p>
          Owen wrote <em>Exposure</em> in 1918 during the brutal winter stalemate on the
          Western Front. He died one week before the Armistice. His poetry was part of a
          wider &quot;war poets&quot; generation that rejected Victorian glamour and
          insisted on the dirt, boredom and futility of the trenches.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Mid-twentieth-century reckonings</h2>
        <p>
          Hughes&apos;s <em>Bayonet Charge</em> (1957) was written in response to his
          father&apos;s experience at Gallipoli, part of a post-1945 effort to remember
          the First World War from the soldier&apos;s perspective rather than the
          commander&apos;s. Heaney&apos;s <em>Storm on the Island</em> (1966) was written
          in Northern Ireland on the edge of the Troubles, which gives the poem its
          veiled political warning.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Contemporary voices (1985 to 2013)</h2>
        <p>
          Duffy&apos;s <em>War Photographer</em> (1985) responded to the image-saturated
          coverage of the Falklands, Vietnam and Lebanon, and was informed by her
          friendships with photojournalists. Rumens&apos;s <em>The Emigrée</em> (1993)
          deliberately refuses to name its country so that it can stand for every refugee
          of the late twentieth century. Agard&apos;s <em>Checking Out Me History</em>
          (2007) is an act of post-colonial reclamation of Black Caribbean and Black
          British history. Dharker&apos;s <em>Tissue</em> (2006) was published in
          <em> The Terrorist at My Table</em>, a collection about the paperwork of political
          violence. Weir&apos;s <em>Poppies</em> (2009) was commissioned for a poetry
          anthology responding to British war deaths in Iraq and Afghanistan. Armitage&apos;s
          <em> Remains</em> (2008) is based on a verbatim interview with a veteran for a
          Channel 4 documentary on PTSD. Garland&apos;s <em>Kamikaze</em> (2013) draws on
          the Second World War Japanese tradition and the real social shame faced by
          pilots who turned back.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 tip</h2>
        <p>
          Use context to <em>explain</em> a choice, never to list facts. The phrase
          &quot;because Shelley was writing against the Regency monarchy&quot; earns a
          mark; the phrase &quot;Shelley was born in 1792&quot; does not.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/key-quotes-aqa-power-conflict-all-poems" className="text-primary hover:underline">Key Quotes (All Poems)</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/form-and-structure-across-anthology" className="text-primary hover:underline">Form and Structure</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-write-grade-9-power-conflict-essay" className="text-primary hover:underline">How to Write a Grade 9 Essay</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question" className="text-primary hover:underline">How to Answer the Comparison Question</Link></li>
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
