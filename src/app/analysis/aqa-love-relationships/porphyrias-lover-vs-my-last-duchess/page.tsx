import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'porphyrias-lover-vs-my-last-duchess'
const H1 = 'Porphyria\u2019s Lover vs My Last Duchess: Possessive Love Comparison'
const DESCRIPTION =
  'Grade 9 comparison of two Robert Browning dramatic monologues about possessive love. Thesis, three comparison paragraphs, quotations and context. Written by GCSE examiners.'

export const metadata: Metadata = {
  title: `${H1} | AQA Love and Relationships`,
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
        <span className="text-foreground">Porphyria&rsquo;s Lover vs My Last Duchess</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: two men who turn love into ownership</h2>
        <p>
          Both of Robert Browning&rsquo;s most famous dramatic monologues give us a male
          speaker who cannot bear that his lover has an independent self, and both end with a
          woman silenced. The crucial difference is <em>how</em> the monologue exposes the
          speaker to us. Porphyria&rsquo;s Lover narrates his own crime in language that is
          almost calm, so the horror sneaks up on the reader. The Duke in My Last Duchess
          gives a guided tour of a portrait and never once admits what he did, so we have to
          read between his politely murderous lines. A Grade 9 argument is that both poems
          use dramatic monologue to invite the reader to judge the speaker more severely than
          he judges himself.
        </p>

        <h2>Comparison 1: the language of ownership</h2>
        <p>
          The Duke&rsquo;s very first line betrays him: &ldquo;That&rsquo;s my last Duchess
          painted on the wall.&rdquo; The possessive pronoun and the past tense announce
          control and loss at the same time. Throughout the monologue she is reduced to
          &ldquo;my gift&rdquo; and a painting he keeps behind a curtain only he is allowed
          to draw. Porphyria&rsquo;s lover uses different vocabulary but reaches the same
          destination. He describes her as &ldquo;mine, mine&rdquo; and concludes that
          &ldquo;that moment she was mine, mine, fair, / Perfectly pure and good.&rdquo;
          Both men only accept the woman as an object they can fully possess, and both are
          willing to destroy her to achieve that stillness.
        </p>

        <h2>Comparison 2: form and the speaker&rsquo;s control of the story</h2>
        <p>
          My Last Duchess is written in rhyming couplets, but Browning disguises the rhyme
          with heavy enjambment so the Duke sounds like he is speaking naturally. The form
          is as controlled as the Duke&rsquo;s curtain: he hides the artifice beneath
          civility. Porphyria&rsquo;s Lover uses a five-line stanza with an ABABB rhyme
          scheme that keeps almost closing and then refuses to, mirroring a speaker who
          cannot let go. Both forms are tightly controlled; both speakers are tightly
          controlling. Form is characterisation.
        </p>

        <h2>Comparison 3: the ending and who holds the power</h2>
        <p>
          Porphyria&rsquo;s lover ends with a chilling theological flourish: &ldquo;And yet
          God has not said a word!&rdquo; He needs divine approval and will read silence as
          permission. The Duke ends by pointing at another statue, &ldquo;Neptune&hellip;
          taming a sea-horse,&rdquo; cool evidence that he is already moving on to the next
          acquisition. Porphyria&rsquo;s lover is trapped with his victim; the Duke has
          absorbed the killing into his aesthetic collection. The Duke is in many ways more
          terrifying because his power is social and ongoing.
        </p>

        <h2>Context</h2>
        <p>
          Browning wrote both poems in the 1840s, drawing on the Italian Renaissance setting
          for My Last Duchess and a gothic rural setting for Porphyria&rsquo;s Lover.
          Victorian readers were fascinated and disturbed by the idea of the unreliable
          speaker, and dramatic monologue &mdash; a form Browning helped to define &mdash;
          allowed him to expose male violence without endorsing it. Both poems can be read
          as critiques of the Victorian ideal that a woman should be owned, displayed and
          judged by her husband.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Both speakers reduce love to ownership, but the Duke is more dangerous because his
          monologue is calculated public relations, while Porphyria&rsquo;s lover is
          confessing in private. Browning uses dramatic monologue to trap the reader in the
          speaker&rsquo;s head just long enough to see how love becomes possession, and then
          to see how possession becomes murder.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/possessive-love-theme-across-anthology" className="text-primary hover:underline">Possessive love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/sonnet-29-vs-porphyrias-lover" className="text-primary hover:underline">Sonnet 29 vs Porphyria&rsquo;s Lover</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/form-and-structure-love-relationships" className="text-primary hover:underline">Form and structure across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/how-to-write-grade-9-love-relationships-essay" className="text-primary hover:underline">How to write a Grade 9 essay</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Revise the whole anthology</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Pair this comparison with our full Love and Relationships revision notes for plot
          summaries, context and annotated poem texts.
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
