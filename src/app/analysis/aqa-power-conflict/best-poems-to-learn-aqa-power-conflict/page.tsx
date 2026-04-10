import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/best-poems-to-learn-aqa-power-conflict'

export const metadata: Metadata = {
  title: 'Best Poems to Learn for AQA Power and Conflict (Grade 9 Revision)',
  description:
    'Which Power and Conflict poems to prioritise for the exam, and why. Flexible poems, easy pairings, and what examiners reward. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Poems to Learn for AQA Power and Conflict',
    description: 'Grade 9 revision prioritisation for AQA Power and Conflict.',
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
        <span className="text-foreground">Best Poems to Learn</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Best Poems to Learn for AQA Power and Conflict</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          You should know all fifteen poems well enough to answer basic questions on each,
          but Grade 9 candidates always prepare a smaller &quot;go to&quot; set of five or
          six poems that are especially flexible. A flexible poem is one that can be used
          as your second-choice comparison whichever poem the exam prints. Here are the
          five we recommend above all others, and the reasons examiners keep seeing them
          in top-mark answers.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">1. Ozymandias (Shelley)</h2>
        <p>
          The anthology&apos;s most flexible poem. It can be used to compare against
          <em> London</em>, <em>My Last Duchess</em>, <em>Tissue</em>, <em>Storm on the
          Island</em> and many more. Its themes — power, time, arrogance, pride, nature&apos;s
          indifference, the failure of empire — overlap with almost every other poem in
          the cluster. The sonnet form is a gift for AO2 because the tension between
          Petrarchan and Shakespearean structures is easy to explain and hard to ignore.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">2. London (Blake)</h2>
        <p>
          Short, quotable and furious. Every line contains at least one technique, and the
          poem is a ready-made comparison for any question about human power, suffering,
          corruption, or the effects of political authority. It also gives you one of the
          easiest context points in the anthology: Blake was a Romantic radical writing
          during the French Revolution.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">3. Exposure (Owen)</h2>
        <p>
          The default second choice for any question about the reality of conflict,
          suffering or nature as an enemy. Owen&apos;s biography is famous, his imagery is
          vivid and his refrain <q>But nothing happens</q> is one of the most quotable
          lines in the whole anthology. It also pairs superbly with <em>Storm on the
          Island</em> and <em>Bayonet Charge</em>.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">4. My Last Duchess (Browning)</h2>
        <p>
          The only full dramatic monologue in the cluster, which makes it the default
          comparison for anything involving voice or the corruption of power. It also
          pairs unexpectedly well with <em>Kamikaze</em> and <em>Ozymandias</em>. Learn
          the <q>I gave commands; / Then all smiles stopped together</q> moment and you
          have an instant Grade 9 quotation.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">5. Storm on the Island (Heaney)</h2>
        <p>
          The best second choice for any nature question. The political subtext —
          possibly referencing Stormont — gives you easy AO3 marks, and the form (a
          single block of blank verse) is a gift for AO2. It pairs with <em>Exposure</em>,
          <em> The Prelude</em> and <em>Ozymandias</em>.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Honourable mentions</h2>
        <p>
          <em>Remains</em> is worth learning for the modern war questions — it pairs
          beautifully with <em>Bayonet Charge</em> or <em>War Photographer</em>.
          <em> Tissue</em> is worth learning for power of nature questions, especially in
          years where the named poem is <em>Ozymandias</em> or <em>The Prelude</em>.
          <em> Checking Out Me History</em> is worth learning for identity questions,
          where it pairs with <em>The Emigrée</em>.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 advice</h2>
        <p>
          Do not try to memorise fifteen poems to the same depth. Pick five that together
          cover nature, power, conflict, identity and memory, and know them so well that
          you could write a 45-minute essay on any of them without notes. Spend a little
          bit of revision on every other poem, but focus your energy where it will earn
          the most marks.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/easy-comparison-pairings-power-conflict" className="text-primary hover:underline">Easy Comparison Pairings</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/key-quotes-aqa-power-conflict-all-poems" className="text-primary hover:underline">Key Quotes (All Poems)</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question" className="text-primary hover:underline">How to Answer the Comparison Question</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-write-grade-9-power-conflict-essay" className="text-primary hover:underline">How to Write a Grade 9 Essay</Link></li>
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
