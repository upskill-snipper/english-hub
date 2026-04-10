import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/the-prelude-vs-storm-on-the-island'

export const metadata: Metadata = {
  title: 'The Prelude vs Storm on the Island: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Wordsworth\u2019s Prelude (boat-stealing) and Heaney\u2019s Storm on the Island. Nature as teacher versus nature as enemy. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Prelude vs Storm on the Island: Comparison',
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
        <span className="text-foreground">The Prelude vs Storm on the Island</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">The Prelude vs Storm on the Island: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          William Wordsworth&apos;s extract from <em>The Prelude</em> (1805) and Seamus
          Heaney&apos;s <em>Storm on the Island</em> (1966) both dramatise a moment when a
          confident speaker&apos;s relationship with nature is turned inside out. Wordsworth
          is writing a Romantic spiritual autobiography; Heaney is writing a tight modern
          lyric with possibly allegorical intentions. The best comparison essays argue that
          both poets present nature as a teacher of humility, but Wordsworth finds something
          almost religious in the lesson while Heaney leaves the reader with political dread.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Wordsworth&apos;s <em>Prelude</em> is a life-long autobiographical poem about
          how his mind was formed by the Lake District landscape. The boat-stealing episode
          in Book One captures a moment of childhood pride giving way to a sense of
          <q> unknown modes of being</q>. Heaney, born in rural County Derry, wrote <em>Storm
          on the Island</em> in 1966, the year before the first major Civil Rights marches
          in Northern Ireland. Many critics read the poem&apos;s first eight letters as the
          word &quot;STORMONT&quot; — the name of the Northern Irish parliament — making the
          poem a veiled warning about the political weather ahead.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both speakers begin in confidence.</strong> Wordsworth&apos;s child steps
          into a borrowed boat <q>with an unswerving line</q>, sure of his control. Heaney&apos;s
          islanders declare, <q>We are prepared: we build our houses squat</q>. In both poems
          nature is about to humble a speaker who thinks they have already mastered it.
        </p>
        <p>
          <strong>2. Nature is personified.</strong> Wordsworth makes the mountain
          <q> towered</q> and <q>strode after me</q>. Heaney&apos;s wind
          <q> pummels your house too</q>. In both poems the landscape is given agency and
          intention.
        </p>
        <p>
          <strong>3. Both end in a changed psychology.</strong> Wordsworth&apos;s mind is
          haunted afterwards by <q>huge and mighty forms</q> that move through his dreams.
          Heaney ends on <q>a huge nothing that we fear</q>. Both speakers are left with
          something they cannot unsee.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Nature as teacher vs nature as enemy.</strong> Wordsworth&apos;s
          encounter deepens his spiritual life. Heaney&apos;s encounter exposes communal
          fragility. Wordsworth is grateful; Heaney is wary.
        </p>
        <p>
          <strong>2. Individual vs collective.</strong> Wordsworth uses first-person
          singular; Heaney uses first-person plural. The contrast lets you argue about
          whether nature&apos;s power is a private revelation or a shared crisis.
        </p>
        <p>
          <strong>3. Form.</strong> Wordsworth uses unrhymed blank verse — flexible,
          expansive, philosophical. Heaney uses a single block of nineteen lines that
          mimics the claustrophobia of a community waiting for the worst.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Wordsworth and Heaney dramatise a confident speaker being humbled by
          nature, but while Wordsworth uses the expansive blank verse of his spiritual
          autobiography to turn the encounter into a lesson in awe, Heaney uses the
          claustrophobic single-stanza form to turn it into a warning about the limits
          of communal preparation.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/exposure-vs-storm-on-the-island" className="text-primary hover:underline">Exposure vs Storm on the Island</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/power-of-nature-theme-across-anthology" className="text-primary hover:underline">Power of Nature — Theme</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/form-and-structure-across-anthology" className="text-primary hover:underline">Form and Structure Across the Anthology</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/easy-comparison-pairings-power-conflict" className="text-primary hover:underline">Easy Comparison Pairings</Link></li>
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
