import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/form-and-structure-across-anthology'

export const metadata: Metadata = {
  title: 'Form and Structure Across the AQA Power and Conflict Anthology',
  description:
    'Grade 9 analysis of form and structure across the Power and Conflict poems. Sonnets, dramatic monologues, blank verse, free verse and more. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Form and Structure Across the Anthology',
    description: 'Grade 9 AO2 guide for AQA Power and Conflict.',
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
        <span className="text-foreground">Form and Structure</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Form and Structure Across the Anthology</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          AO2 asks you to comment on form and structure, not just language, and this is
          where Grade 9 answers separate themselves. The Power and Conflict anthology is
          generous with formal variety — you get sonnets, dramatic monologues, blank verse,
          free verse, ballad-like refrains and a prose-poem dense block. Here is a
          cross-anthology guide to what each form is doing.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Sonnets</h2>
        <p>
          Shelley&apos;s <em>Ozymandias</em> is the most famous sonnet in the cluster. It
          sits between Petrarchan and Shakespearean structures, deliberately broken to mirror
          the broken statue. The sonnet form is traditionally about love, so using it for
          political satire is itself a political act. When you comment on form here, always
          say <em>why</em> Shelley has chosen the form he is subverting.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Dramatic monologue</h2>
        <p>
          Browning&apos;s <em>My Last Duchess</em> is the purest example. The Duke speaks,
          the reader listens, and the silent emissary becomes our substitute. Agard&apos;s
          <em> Checking Out Me History</em> is also monologic, but uses a collective
          historical voice. In both poems, hearing one speaker without interruption is
          itself part of the experience the poet wants the reader to notice.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Blank verse</h2>
        <p>
          Wordsworth&apos;s <em>Prelude</em> extract is unrhymed iambic pentameter — the
          default Romantic form. Its flexibility lets Wordsworth shift between action and
          philosophical reflection. Heaney&apos;s <em>Storm on the Island</em> is also in
          blank verse, but jammed into a single block of nineteen lines, which is the exact
          opposite effect. Always compare form <em>uses</em>, not just names.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Irregular free verse</h2>
        <p>
          <em>Poppies</em>, <em>Remains</em>, <em>Bayonet Charge</em> and <em>Kamikaze</em>
          all use irregular stanzas and loose line lengths. In each case the form is
          mimicking a psychological state — grief, trauma, panic, memory. When you spot
          free verse in this anthology, ask what it is imitating.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Regular stanzas used ironically</h2>
        <p>
          <em>War Photographer</em> is the prime example — four perfectly regular six-line
          stanzas and a controlled rhyme scheme surrounding images of chaos. Blake&apos;s
          <em> London</em> does something similar, using four neat quatrains of tetrameter
          to describe suffering. The irony of order around chaos is a Grade 9 point.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Refrains</h2>
        <p>
          Tennyson&apos;s <em>Charge of the Light Brigade</em> uses a repeated refrain to
          make the charge feel inevitable. Owen&apos;s <em>Exposure</em> uses a refrain
          (<q>But nothing happens</q>) that does the opposite — instead of propelling action
          it stops it. Comparing how two poets use refrain for opposite effects is an easy
          AO2 win.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 tip</h2>
        <p>
          Never write &quot;the poet uses regular stanzas to show order&quot; and leave it
          there. Ask what the order is doing — mimicking, ironising, reinforcing,
          concealing? That one extra question is the move that earns your analysis AO2
          marks instead of AO1 marks.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question" className="text-primary hover:underline">How to Answer the Comparison Question</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-write-grade-9-power-conflict-essay" className="text-primary hover:underline">How to Write a Grade 9 Essay</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/key-quotes-aqa-power-conflict-all-poems" className="text-primary hover:underline">Key Quotes (All Poems)</Link></li>
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
