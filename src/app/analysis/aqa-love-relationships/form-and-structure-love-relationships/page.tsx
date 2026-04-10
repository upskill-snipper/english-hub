import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'form-and-structure-love-relationships'
const H1 = 'Form and Structure Across AQA Love and Relationships'
const DESCRIPTION =
  'How form and structure work across the AQA Love and Relationships cluster. Sonnet, dramatic monologue, free verse and more, with how to write about them. Written by GCSE examiners.'

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
        <span className="text-foreground">Form and structure</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Why form and structure matter in AQA Love and Relationships</h2>
        <p>
          The AQA mark scheme rewards writing that treats form as meaningful &mdash; not
          just describing a sonnet, but explaining why the poet needed a sonnet. The
          cluster is particularly good for this because it includes the sonnet, the
          dramatic monologue, the ballad, tercets, quatrains, free verse and loose
          non-traditional forms. Each poet has chosen their form carefully.
        </p>

        <h2>The sonnet</h2>
        <p>
          <em>Sonnet 29</em> (Barrett Browning) uses a Petrarchan sonnet because the volta
          lets her correct her own fantasy at line six. <em>Mother, Any Distance</em>
          (Armitage) uses a loose sonnet that stretches and then snaps, enacting the
          umbilical cord it describes. Both poets use a form historically associated with
          male desire and turn it to a different purpose.
        </p>

        <h2>The dramatic monologue</h2>
        <p>
          <em>Porphyria&rsquo;s Lover</em> and <em>My Last Duchess</em> (Browning) use the
          monologue to expose the speaker. The form gives the reader more information than
          the speaker intends &mdash; his own voice becomes the evidence against him.
          Identifying the dramatic monologue in your answer is an immediate mark-scheme
          win.
        </p>

        <h2>The ballad</h2>
        <p>
          <em>Love&rsquo;s Philosophy</em> (Shelley) and <em>When We Two Parted</em> (Byron)
          both use ballad-like stanzas. The short lines and repetitive rhymes give these
          poems a song-like, public quality &mdash; Shelley&rsquo;s is a public seduction,
          Byron&rsquo;s is a public elegy for a private grief.
        </p>

        <h2>Tight quatrains and controlled stanzas</h2>
        <p>
          <em>Neutral Tones</em> (Hardy) and <em>Follower</em> (Heaney) use tight regular
          quatrains because control is the point. Hardy is describing a speaker who has
          polished the memory until it is frictionless; Heaney is mimicking his
          father&rsquo;s straight furrows.
        </p>

        <h2>Free verse and loose forms</h2>
        <p>
          <em>Climbing My Grandfather</em> (Waterhouse), <em>Letters from Yorkshire</em>
          (Dooley), <em>Eden Rock</em> (Causley), <em>Singh Song!</em> (Nagra) and
          <em> Before You Were Mine</em> (Duffy) all sit closer to free verse. The poets
          use form to let the voice sound natural, intimate or playful. Free verse does
          not mean &ldquo;no form&rdquo; &mdash; it means a form chosen by the poem&rsquo;s
          rhythm rather than a template.
        </p>

        <h2>Sentence starters for writing about form</h2>
        <p>
          &ldquo;By choosing the sonnet, Barrett Browning frames her emotional
          correction as a formal correction&hellip;&rdquo; &ldquo;The dramatic monologue
          allows Browning to expose the speaker without endorsing him&hellip;&rdquo;
          &ldquo;The loose quatrains let Nagra celebrate the relationship without
          constraining it to a traditional English love lyric&hellip;&rdquo;
        </p>

        <h2>Common student mistakes</h2>
        <p>
          Do not just name the form. Explain why the form <em>is</em> the meaning. Do not
          describe enjambment without saying what it enacts. Do not treat free verse as
          formlessness. Form is always part of the poet&rsquo;s argument about love.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">How to answer the comparison question</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/porphyrias-lover-vs-my-last-duchess" className="text-primary hover:underline">Porphyria&rsquo;s Lover vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/sonnet-29-vs-loves-philosophy" className="text-primary hover:underline">Sonnet 29 vs Love&rsquo;s Philosophy</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-write-grade-9-love-relationships-essay" className="text-primary hover:underline">How to write a Grade 9 essay</Link></li>
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
