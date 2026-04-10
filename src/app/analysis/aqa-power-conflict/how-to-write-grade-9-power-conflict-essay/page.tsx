import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

const PAGE_URL = 'https://theenglishhub.app/analysis/aqa-power-conflict/how-to-write-grade-9-power-conflict-essay'

export const metadata: Metadata = {
  title: 'How to Write a Grade 9 AQA Power and Conflict Essay',
  description:
    'Step-by-step guide to writing a Grade 9 AQA Power and Conflict comparison essay. Thesis, methods-led paragraphs, context and model introduction. Written by GCSE examiners.',
  alternates: { canonical: PAGE_URL },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write a Grade 9 Power and Conflict Essay',
    description: 'Grade 9 essay walkthrough for AQA Power and Conflict.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: PAGE_URL,
  }

  return (
    <AnalysisBoardGate>
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-power-conflict" className="hover:text-foreground">AQA Power and Conflict</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">How to Write a Grade 9 Essay</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">How to Write a Grade 9 Power and Conflict Essay</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground">
        <p>
          A Grade 9 essay on AQA Power and Conflict is not about writing more words than
          the next candidate. It is about writing a focused, methods-led, comparative
          argument that never takes its eye off the question. Here is the exact process
          we teach our top candidates, from the moment you open the paper to the moment
          you stop writing.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 1: Read the question twice</h2>
        <p>
          Underline the key theme word and the command word. The examiner is not asking
          you to say everything you know about both poems — they are asking you to argue
          a position on a particular theme. Read the theme word twice. It will guide every
          paragraph you write.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 2: Choose your second poem in 90 seconds</h2>
        <p>
          Do not deliberate. Have four or five go-to pairings already prepared for each
          theme. Choose the one where you know the quotes cold and where you can make a
          real contrast, not just a loose match. A contrast is easier to sustain for 35
          minutes than a similarity.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 3: Plan around methods, not content</h2>
        <p>
          Your three body paragraphs should each be organised around a method: one on
          form and structure, one on imagery or sound, one on voice or tone. That way
          every paragraph automatically hits AO2. Write your plan as three method labels,
          each followed by one quote from each poem.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 4: Write a thesis that carries the whole essay</h2>
        <p>
          The thesis is one sentence. It states the shared concern of both poems, then
          identifies the most important difference in how they handle that concern. Your
          three body paragraphs should each return to this thesis in their final sentence.
          Example: &quot;Both Shelley and Browning present powerful men undone by the art
          they commissioned, but while Shelley allows time to do the dismantling, Browning
          gives the job to the Duke&apos;s own voice.&quot;
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 5: Use comparative connectives in every paragraph</h2>
        <p>
          &quot;Similarly,&quot; &quot;By contrast,&quot; &quot;Whereas Browning,&quot;
          &quot;In the same way,&quot; &quot;Unlike Shelley,&quot; &quot;Both poets.&quot;
          These are the phrases examiners are literally scanning for. Every paragraph
          needs at least two of them, and they should appear early, not at the end.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 6: Embed context, never bolt it on</h2>
        <p>
          Do not write a &quot;context paragraph&quot;. Instead, introduce one context
          point per body paragraph, inside the same sentence as a piece of analysis. The
          phrase &quot;because Shelley was writing against the Regency monarchy&quot; earns
          your AO3 mark without sacrificing flow.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 7: Pick analytical verbs and modal language</h2>
        <p>
          Grade 9 candidates use the word &quot;suggests&quot; sparingly because they
          have better verbs. Try &quot;exposes&quot;, &quot;undermines&quot;,
          &quot;dramatises&quot;, &quot;enacts&quot;, &quot;destabilises&quot;,
          &quot;reframes&quot;. And use tentative modal language for interpretation —
          &quot;the form perhaps mirrors&quot; or &quot;the imagery might be read as&quot;
          — which shows you know analysis is argument rather than fact.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 8: Finish with a genuine conclusion</h2>
        <p>
          A conclusion is not a restatement of the thesis. It is one additional idea that
          your three body paragraphs together point toward. Answer the implicit question
          behind the explicit one: so what? Why do these two poems matter together?
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Step 9: Check the first line of every paragraph</h2>
        <p>
          Your topic sentences should, read together, be a summary of the whole essay. If
          you check only one thing in your last five minutes, check that.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-foreground">Model introduction</h2>
        <p>
          &quot;Both Shelley in <em>Ozymandias</em> and Browning in <em>My Last Duchess</em>
          present powerful men who have commissioned art to immortalise their authority,
          and both poets use form to turn the men&apos;s own choices against them. Yet
          while Shelley&apos;s broken sonnet and distant frame narrator allow time to
          ultimately mock the tyrant, Browning&apos;s dramatic monologue and controlled
          couplets show how the tyrant is most dangerous precisely when he is in
          complete, composed control of the voice that describes him.&quot;
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/analysis/aqa-power-conflict/how-to-answer-aqa-poetry-comparison-question" className="text-primary hover:underline">How to Answer the Comparison Question</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/easy-comparison-pairings-power-conflict" className="text-primary hover:underline">Easy Comparison Pairings</Link></li>
          <li><Link href="/analysis/aqa-power-conflict/form-and-structure-across-anthology" className="text-primary hover:underline">Form and Structure</Link></li>
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
    </AnalysisBoardGate>
  )
}
