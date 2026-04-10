import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/ozymandias-vs-my-last-duchess'

export const metadata: Metadata = {
  title: 'Ozymandias vs My Last Duchess: Comparison | AQA Power and Conflict',
  description:
    'Grade 9 comparison of Ozymandias and My Last Duchess for AQA Power and Conflict. Key quotes, themes of pride and possession, and a ready-to-use thesis. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ozymandias vs My Last Duchess: Comparison',
    description:
      'Grade 9 comparison of Ozymandias and My Last Duchess for AQA Power and Conflict.',
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
        <span className="text-foreground">Ozymandias vs My Last Duchess</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Ozymandias vs My Last Duchess: Comparison</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Shelley&apos;s <em>Ozymandias</em> and Browning&apos;s <em>My Last Duchess</em> are the
          two most popular comparison choices in the AQA Power and Conflict anthology for
          questions about human arrogance. Both poems place the reader in front of a man who
          has tried to immortalise his own authority through art — Ozymandias through a
          colossal statue in the desert, the Duke of Ferrara through a portrait on the wall
          of his palazzo — and both poems reveal the absurdity and violence of that attempt.
          The key to a Grade 9 answer is to move beyond &quot;both poems are about pride&quot; and
          show how each poet uses form, voice and irony to dismantle the speaker they have
          chosen to frame.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Context in one paragraph</h2>
        <p>
          Shelley wrote <em>Ozymandias</em> in 1817, a Romantic radical appalled by the
          Regency monarchy and the revolutionary failures of his age. The poem was published
          in response to a competition between Shelley and Horace Smith and draws on a
          fragment from the Greek historian Diodorus Siculus about Rameses II. Browning
          published <em>My Last Duchess</em> in 1842 as part of his <em>Dramatic Lyrics</em>,
          a Victorian experiment in dramatic monologue. His Duke of Ferrara is based loosely
          on Alfonso II d&apos;Este, whose first wife died in suspicious circumstances. Both
          poets are writing about the past to critique the present: Shelley attacks tyranny,
          Browning attacks the patriarchal violence hidden inside aristocratic marriage.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three similarities</h2>
        <p>
          <strong>1. Both speakers are undone by their own words.</strong> Ozymandias&apos;s
          inscription — <q>My name is Ozymandias, King of Kings</q> — becomes a punchline the
          moment we read the next line about the <q>lone and level sands</q> stretching away.
          The Duke, in the same way, tries to present himself as a man of taste and ends up
          confessing to having his wife killed: <q>I gave commands; / Then all smiles stopped
          together.</q> In both poems the speaker&apos;s voice becomes the tool of their own
          exposure.
        </p>
        <p>
          <strong>2. Both rely on art as a vehicle of power.</strong> The statue and the
          portrait are not just objects; they are attempts to freeze a human being in a
          position of dominance. Shelley shows that stone crumbles and that the
          <q> sneer of cold command</q> outlives the sneerer in embarrassing miniature. Browning
          shows that the Duke can only control his wife once she is reduced to pigment behind
          a curtain that only he can draw.
        </p>
        <p>
          <strong>3. Both poems use a frame narrator.</strong> Shelley hands the whole story
          to a <q>traveller from an antique land</q>, creating two layers of distance between
          reader and tyrant. Browning hands the story to the Duke himself, but filters it
          through a silent emissary whose shocked reaction we have to imagine. In each case
          the framing forces the reader to become the judge.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Three key contrasts</h2>
        <p>
          <strong>1. Time versus control.</strong> Ozymandias is destroyed by centuries; the
          Duchess is destroyed in the space of a sentence. Shelley&apos;s argument is that
          time is the great leveller, while Browning&apos;s is that power is at its most
          dangerous when it operates in the domestic present tense.
        </p>
        <p>
          <strong>2. Public versus private tyranny.</strong> Ozymandias is a tyrant of empire;
          the Duke is a tyrant of marriage. Shelley is attacking the monumental and
          historical, Browning the intimate and ongoing — which is part of why his poem feels
          so modern.
        </p>
        <p>
          <strong>3. Form as irony.</strong> Shelley&apos;s sonnet is a famously &quot;broken&quot;
          one: it sits between Petrarchan and Shakespearean forms, mirroring the broken
          statue. Browning&apos;s rhyming couplets are so controlled they become sinister — the
          Duke never lets a rhyme drop, just as he never lets a wife live.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Grade 9 thesis you can adapt</h2>
        <p>
          &quot;Both Shelley and Browning present powerful men who mistake art for immortality,
          but while Shelley uses the sonnet and a distant frame narrator to show how time
          ultimately mocks the tyrant, Browning uses the dramatic monologue and controlled
          couplets to show how the tyrant is most dangerous when he is most composed.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/ozymandias-vs-london" className="text-primary hover:underline">Ozymandias vs London</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/tissue-vs-ozymandias" className="text-primary hover:underline">Tissue vs Ozymandias</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/kamikaze-vs-my-last-duchess" className="text-primary hover:underline">Kamikaze vs My Last Duchess</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/corruption-of-power-theme-across-anthology" className="text-primary hover:underline">Corruption of Power — Theme Across the Anthology</Link></li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revising the whole cluster?</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          This page is a quick-answer comparison. For full poem-by-poem study, line-by-line
          annotation and context, head to our main Power and Conflict revision notes.
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
