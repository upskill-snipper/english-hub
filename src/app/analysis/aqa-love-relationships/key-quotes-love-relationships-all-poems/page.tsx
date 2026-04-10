import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'key-quotes-love-relationships-all-poems'
const H1 = 'Key Quotes for Every AQA Love and Relationships Poem'
const DESCRIPTION =
  'Three key quotations for every poem in the AQA Love and Relationships cluster, with a note on how to use each one. Written by GCSE examiners.'

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
        <span className="text-foreground">Key quotes</span>
      </nav>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <p>
          The quotations below are the ones we recommend memorising first. Public-domain
          poems are quoted in full lines; for more recent poems we give short fair-use
          phrases and point to where you can find the complete line in your anthology.
        </p>

        <h2>Sonnet 29 (Barrett Browning, public domain)</h2>
        <p>
          Meaning: &ldquo;I think of thee!&rdquo; Form: &ldquo;wild vines, about a
          tree.&rdquo; Closing: &ldquo;I do not think of thee &mdash; I am too near
          thee.&rdquo; Use the final line in any question about romantic love, presence or
          paradox.
        </p>

        <h2>Love&rsquo;s Philosophy (Shelley, public domain)</h2>
        <p>
          Meaning: &ldquo;Nothing in the world is single.&rdquo; Form: &ldquo;The fountains
          mingle with the river.&rdquo; Closing: &ldquo;What is all this sweet work worth
          / If thou kiss not me?&rdquo; Use the final rhetorical question for any answer
          on argument or Romantic poetry.
        </p>

        <h2>Porphyria&rsquo;s Lover (Browning, public domain)</h2>
        <p>
          Meaning: &ldquo;And, last, she sat down by my side / And called me.&rdquo; Form:
          &ldquo;That moment she was mine, mine, fair, / Perfectly pure and good.&rdquo;
          Closing: &ldquo;And yet God has not said a word!&rdquo; Use the final line for
          any question on unreliable speakers or possessive love.
        </p>

        <h2>My Last Duchess (Browning, public domain)</h2>
        <p>
          Meaning: &ldquo;That&rsquo;s my last Duchess painted on the wall.&rdquo; Form:
          &ldquo;I gave commands; / Then all smiles stopped together.&rdquo; Closing:
          &ldquo;Notice Neptune&hellip; taming a sea-horse.&rdquo; Useful as a comparison
          option if your specification allows wider Browning.
        </p>

        <h2>Neutral Tones (Hardy, public domain)</h2>
        <p>
          Meaning: &ldquo;We stood by a pond that winter day.&rdquo; Form: &ldquo;the sun
          was white, as though chidden of God.&rdquo; Closing: &ldquo;Your face, and the
          God-curst sun, and a tree, / And a pond edged with grayish leaves.&rdquo;
        </p>

        <h2>When We Two Parted (Byron, public domain)</h2>
        <p>
          Meaning: &ldquo;When we two parted / In silence and tears.&rdquo; Form: &ldquo;The
          dew of the morning / Sunk chill on my brow.&rdquo; Closing: &ldquo;How should I
          greet thee? &mdash; / With silence and tears.&rdquo;
        </p>

        <h2>The Farmer&rsquo;s Bride (Mew, public domain)</h2>
        <p>
          Meaning: &ldquo;Three summers since I chose a maid.&rdquo; Form: &ldquo;We chased
          her, flying like a hare.&rdquo; Closing: &ldquo;Oh! my God! the down, / The
          soft young down of her, the brown, / The brown of her &mdash; her eyes, her
          hair, her hair!&rdquo;
        </p>

        <h2>Contemporary poems (fair use extracts)</h2>
        <p>
          For the contemporary poems &mdash; <em>Mother, Any Distance</em> (Armitage),
          <em> Follower</em> (Heaney), <em>Climbing My Grandfather</em> (Waterhouse),
          <em> Eden Rock</em> (Causley), <em>Walking Away</em> (C. Day Lewis), <em>Before
          You Were Mine</em> (Duffy), <em>Letters from Yorkshire</em> (Dooley),
          <em> Singh Song!</em> (Nagra) and <em>Winter Swans</em> (Sheers) &mdash; the
          anthology itself is the safest source for full quotations. We recommend learning
          one short phrase per poem from each of: the opening, a middle shift and the
          closing line. Memorable short phrases (three to six words) are plenty for Grade
          9: examiners prefer precise short quotations to long mis-quoted ones.
        </p>

        <h2>How to use quotations in the exam</h2>
        <p>
          Embed rather than attach. Instead of &ldquo;This is shown in the quote: X&rdquo;,
          write &ldquo;The &lsquo;chidden&rsquo; sun suggests&hellip;&rdquo; Short quotes
          inside your own sentence are rewarded more highly than block quotes dropped in.
          And always analyse the word or phrase you quote.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/best-poems-to-learn-love-relationships" className="text-primary hover:underline">Best poems to learn</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-answer-aqa-love-relationships-comparison" className="text-primary hover:underline">How to answer the comparison question</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/context-across-love-relationships-poems" className="text-primary hover:underline">Context across the poems</Link></li>
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
