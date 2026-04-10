import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'easy-comparison-pairings-love-relationships'
const H1 = 'The Easiest Comparison Pairings in AQA Love and Relationships'
const DESCRIPTION =
  'A ranked list of the easiest, most reliable poem pairings in the AQA Love and Relationships cluster, with the shared idea each pairing gives you for free. Written by GCSE examiners.'

export const metadata: Metadata = {
  title: `${H1} | The English Hub`,
  description: DESCRIPTION,
  alternates: { canonical: `https://theenglishhub.app/analysis/aqa-love-relationships/${SLUG}` },
  openGraph: { title: H1, description: DESCRIPTION },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: H1,
    description: DESCRIPTION,
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: `https://theenglishhub.app/analysis/aqa-love-relationships/${SLUG}`,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-love-relationships" className="hover:text-foreground">AQA Love and Relationships</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Easy comparison pairings</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Why some pairings are easier than others</h2>
        <p>
          Some poems in the AQA cluster were practically made for each other. They share a
          situation, a form, a setting or an image that gives you an automatic point of
          comparison and frees up your mental energy for the higher-level analysis. These
          are the pairings you should rehearse until you can write an opening thesis in
          your sleep.
        </p>

        <h2>1. Neutral Tones + Winter Swans</h2>
        <p>
          Both poems feature a couple standing beside water, both use pathetic fallacy,
          and both use birds as symbols. The only real difference is the ending. If the
          printed poem is one of these, you already have your pair.
        </p>

        <h2>2. Mother, Any Distance + Follower</h2>
        <p>
          Both feature a parent and a child, both use an extended metaphor drawn from
          physical work (tape measure, plough), and both end with a role reversal. Use
          this pairing for any family-love, memory or time question.
        </p>

        <h2>3. Neutral Tones + When We Two Parted</h2>
        <p>
          Both are nineteenth-century lost-love poems by male poets, both focus on a single
          remembered moment of parting, both externalise grief into the body or the
          landscape. A clean chronological pairing and ideal for Victorian/Romantic
          context.
        </p>

        <h2>4. Sonnet 29 + Love&rsquo;s Philosophy</h2>
        <p>
          Both nineteenth-century poems about a lover trying to dissolve the distance
          between themselves and the beloved using nature imagery. The difference in form
          (sonnet vs ballad) and outcome (arrived vs still pleading) gives you instant
          contrast.
        </p>

        <h2>5. Eden Rock + Walking Away</h2>
        <p>
          Both end on a moment of crossing. Both stage parental love as retrospective and
          irreversible. Both use ordinary sensory detail to anchor the memory. The cleanest
          pairing for memory, time or family-love questions.
        </p>

        <h2>6. Porphyria&rsquo;s Lover + The Farmer&rsquo;s Bride</h2>
        <p>
          Both use near-monologue form, both present a speaker who fails to see his lover
          as an equal, both feature imagery of stillness and capture. For any possessive-
          love or power question, this is the reliable pair.
        </p>

        <h2>7. Before You Were Mine + Walking Away</h2>
        <p>
          Both stage retrospective parental love from opposite directions &mdash; the
          child looks back at the mother, the father looks back at the child. A rich
          pairing for a question about memory or the gap between speaker and subject.
        </p>

        <h2>8. Climbing My Grandfather + Follower</h2>
        <p>
          Both use extended physical metaphors to make an older male relative feel
          heroic. Both reach a quieter, contemplative end. A good pairing for admiration
          or family-love questions.
        </p>

        <h2>9. Letters from Yorkshire + Singh Song!</h2>
        <p>
          Both contemporary, both playful with form and voice, both celebrate love that
          has to exist alongside ordinary duty. A brilliant pairing for distance, language
          or culture.
        </p>

        <h2>How to use these pairings in the exam</h2>
        <p>
          Decide, before you walk into the exam, which poem you will pair with each
          possible printed poem. Have at least two options for the four or five
          likeliest printed poems. You do not need to memorise a whole essay &mdash; you
          need to have a thesis statement ready for each rehearsed pair.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">How to answer the comparison question</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/best-poems-to-learn-love-relationships" className="text-primary hover:underline">Best poems to learn</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-write-grade-9-love-relationships-essay" className="text-primary hover:underline">How to write a Grade 9 essay</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Revise the whole anthology</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Use this technique page alongside our full Love and Relationships revision notes.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/poetry/love-and-relationships"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Go to full revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
