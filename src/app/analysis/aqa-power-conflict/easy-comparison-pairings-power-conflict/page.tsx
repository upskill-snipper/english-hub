import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/easy-comparison-pairings-power-conflict'

export const metadata: Metadata = {
  title: 'Easy Comparison Pairings for AQA Power and Conflict (Grade 9)',
  description:
    'The easiest high-scoring pairings for the AQA Power and Conflict comparison question. Matches for every theme. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Easy Comparison Pairings for Power and Conflict',
    description: 'Grade 9 comparison pairings for AQA Power and Conflict.',
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
        <span className="text-foreground">Easy Comparison Pairings</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Easy Comparison Pairings for AQA Power and Conflict</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          The cheat code for the AQA Power and Conflict comparison question is to walk
          into the exam already knowing which poem you will pair with each of the fifteen
          possible printed poems. Below are the pairings examiners see top-mark candidates
          use, organised by theme. Memorise the ones that cover the themes you are
          weakest on, and do not waste time trying to prove original matches in the exam.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Power of nature</h2>
        <p>
          Exposure ↔ Storm on the Island. This is the default nature pairing because both
          poems present nature as an enemy and both end on the word &quot;nothing&quot;.
          Back-up options: The Prelude ↔ Storm on the Island, or Tissue ↔ Ozymandias for
          a more conceptual take on the power of time.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Power of humans / corruption of power</h2>
        <p>
          Ozymandias ↔ My Last Duchess. The cleanest comparison in the whole anthology —
          two powerful men undone by the art they commissioned. Back-up options:
          Ozymandias ↔ London for public power, or Kamikaze ↔ My Last Duchess for
          domestic power over others.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Reality of conflict</h2>
        <p>
          Remains ↔ Bayonet Charge. Two modern war poems that both dramatise psychological
          breakdown in a soldier. Back-up options: Bayonet Charge ↔ Charge of the Light
          Brigade for a Victorian vs modern contrast, or Remains ↔ War Photographer for
          trauma.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Memory and loss</h2>
        <p>
          Poppies ↔ War Photographer. Both present civilian speakers trying to hold on to
          images they cannot control. Back-up options: Poppies ↔ The Emigrée for maternal
          grief versus emigrant longing, or Remains ↔ Poppies for trauma vs grief.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Identity</h2>
        <p>
          Checking Out Me History ↔ The Emigrée. The clearest identity pairing. Back-up:
          Kamikaze ↔ The Emigrée for identity under social pressure.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Suffering</h2>
        <p>
          London ↔ Exposure. Blake&apos;s institutional suffering paired with Owen&apos;s
          military suffering is a natural fit, and you can bring in context from both the
          French Revolution and the First World War.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Pairings to avoid</h2>
        <p>
          Do not try to compare Tissue with anything unless you have prepared it specifically
          — it is one of the harder poems to write about in a 45-minute essay. Do not pair
          Poppies with Bayonet Charge, because they have too little in common and you will
          spend half your time explaining the differences. And do not pair Checking Out Me
          History with Ozymandias unless you have planned it in advance — the forms are too
          far apart.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 tip</h2>
        <p>
          Prepare one gold-standard pairing per theme. Know the two key quotes, the two
          methodology points and the two context points for each poem in your pairing.
          With six ready-to-go pairings, you are covered for every likely exam question.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/best-poems-to-learn-aqa-power-conflict" className="text-primary hover:underline">Best Poems to Learn</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question" className="text-primary hover:underline">How to Answer the Comparison Question</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/key-quotes-aqa-power-conflict-all-poems" className="text-primary hover:underline">Key Quotes (All Poems)</Link></li>
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
