import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/key-quotes-aqa-power-conflict-all-poems'

export const metadata: Metadata = {
  title: 'Key Quotes for AQA Power and Conflict (All 15 Poems)',
  description:
    'The key quotes Grade 9 candidates should memorise for every AQA Power and Conflict poem, with a short analysis note for each. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Key Quotes for AQA Power and Conflict (All Poems)',
    description: 'Memorise these quotes for AQA Power and Conflict.',
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
        <span className="text-foreground">Key Quotes (All Poems)</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">Key Quotes for AQA Power and Conflict (All Poems)</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          Below are the single most useful quotations to learn for each of the fifteen
          AQA Power and Conflict poems. Every quote has been chosen because it can be
          used in answers to more than one kind of question, which is exactly what an
          examiner wants from a Grade 9 candidate. Memorise the quote, then learn the
          one-sentence analysis that goes with it — that way you always have something
          to say as soon as you pick it off the page.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Ozymandias — Shelley</h2>
        <p>
          <q>My name is Ozymandias, King of Kings</q> — the inscription is undone by the
          empty desert that follows, which is the single clearest image of the corruption
          of human power in the anthology.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">London — Blake</h2>
        <p>
          <q>The mind-forg&apos;d manacles I hear</q> — the idea that oppression is
          internalised by the oppressed is Blake&apos;s most important argument, and the
          image of manacles made of thought is unforgettable.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Prelude — Wordsworth</h2>
        <p>
          <q>A huge peak, black and huge</q> — the repetition of <q>huge</q> mimics the
          child speaker&apos;s shock, and the mountain&apos;s personification represents
          nature as a moral teacher.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">My Last Duchess — Browning</h2>
        <p>
          <q>I gave commands; / Then all smiles stopped together</q> — the casual
          enjambment around the word <q>commands</q> reveals the Duke&apos;s coldness and
          hides an admission of murder inside polite conversation.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Charge of the Light Brigade — Tennyson</h2>
        <p>
          <q>Theirs not to reason why, / Theirs but to do and die</q> — the refrain captures
          both the soldiers&apos; obedience and, for the modern reader, the dark absurdity
          of the command structure that sends them to die.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Exposure — Owen</h2>
        <p>
          <q>But nothing happens</q> — the repeated refrain turns waiting into a form of
          suffering and redefines what a First World War poem can be.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Storm on the Island — Heaney</h2>
        <p>
          A short fair-use extract: the poem ends on the line about <q>a huge nothing</q>
          that the islanders fear. The phrase is a perfect echo of Owen&apos;s refrain
          and suggests an invisible enemy.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Bayonet Charge — Hughes</h2>
        <p>
          <q>The patriotic tear that had brimmed in his eye</q> — Hughes reduces the
          abstract ideology of patriotism to a single piece of salt water on a running
          soldier&apos;s face.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Remains — Armitage</h2>
        <p>
          A short fair-use extract: the line about the looter <q>bursting again</q> in
          the speaker&apos;s head shows the intrusive nature of post-traumatic stress.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Poppies — Weir</h2>
        <p>
          A short fair-use extract: Weir&apos;s line about smoothing the son&apos;s
          collar <q>like a phantom</q> turns a tender maternal act into a metaphor for grief.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">War Photographer — Duffy</h2>
        <p>
          A short fair-use extract: Duffy&apos;s image of newspaper readers whose eyes
          <q> prick with tears between the bath and pre-lunch beers</q> is the most famous
          attack on middle-class apathy in the anthology.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Tissue — Dharker</h2>
        <p>
          A short fair-use extract: Dharker&apos;s closing phrase about <q>living tissue</q>
          turns the whole poem into a pun on human skin and paper fragility.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">The Emigrée — Rumens</h2>
        <p>
          A short fair-use extract: the speaker&apos;s insistence that the city is
          <q> sunlight-clear</q> despite the shadow city of the present makes memory itself
          a form of political resistance.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Checking Out Me History — Agard</h2>
        <p>
          A short fair-use extract: the final line in which the speaker declares he is
          <q> carving out me identity</q> makes identity an active, ongoing construction
          rather than something inherited.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Kamikaze — Garland</h2>
        <p>
          A short fair-use extract: the line where the community begins to treat the
          pilot as though he <q>no longer existed</q> captures the poem&apos;s central
          argument about social erasure.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/best-poems-to-learn-aqa-power-conflict" className="text-primary hover:underline">Best Poems to Learn</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question" className="text-primary hover:underline">How to Answer the Comparison Question</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/form-and-structure-across-anthology" className="text-primary hover:underline">Form and Structure Across the Anthology</Link></li>
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
