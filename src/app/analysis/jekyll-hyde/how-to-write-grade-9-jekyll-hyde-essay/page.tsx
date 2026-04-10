import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'How to Write a Grade 9 Jekyll and Hyde Essay'

export const metadata: Metadata = {
  title: 'How to Write a Grade 9 Jekyll and Hyde Essay — GCSE Guide',
  description:
    'Step-by-step guide to writing a Grade 9 Jekyll and Hyde essay. Thesis, topic sentences, AO2 zoom, AO3 weaving, conclusion and model paragraph.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/jekyll-hyde/how-to-write-grade-9-jekyll-hyde-essay',
  },
  openGraph: {
    title: 'How to Write a Grade 9 Jekyll and Hyde Essay',
    description: 'The exact structure top-band Jekyll and Hyde essays use, written by GCSE examiners.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="how-to-write-grade-9-jekyll-hyde-essay"
      h1={H1}
      headline={'How to Write a Grade 9 Jekyll and Hyde Essay'}
      schemaDescription={
        'A step-by-step GCSE guide to writing a Grade 9 Jekyll and Hyde essay: thesis, topic sentences, AO2 zoom, AO3 and conclusion.'
      }
      intro={
        'Grade 9 Jekyll and Hyde essays are not written by accident. They follow a clear, repeatable structure. This page breaks down that structure and gives you a model paragraph you can imitate.'
      }
      related={[
        { title: 'Duality theme analysis', href: '/analysis/jekyll-hyde/duality-theme-analysis' },
        { title: 'Dual nature of man quotes', href: '/analysis/jekyll-hyde/dual-nature-of-man-quotes' },
        { title: 'Victorian society context', href: '/analysis/jekyll-hyde/victorian-society-context' },
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
      ]}
    >
      <h2>Step 1: Write a real thesis, not a summary</h2>
      <p>
        A Grade 9 essay opens with a <strong>thesis</strong>: an argument you are going to
        prove. It is <em>not</em> "In this essay I will explore how Stevenson presents
        duality". A thesis looks like this:
      </p>
      <p className="rounded-lg border border-border bg-card p-4 text-sm">
        <em>
          Stevenson presents duality not as a scientific discovery but as a diagnosis of
          late-Victorian respectability: Hyde is not the opposite of Jekyll but the
          unspoken cost of being the "very pink of the proprieties".
        </em>
      </p>
      <p>
        The thesis must be <strong>arguable</strong> (someone could disagree), <strong>
        specific</strong> (it names a precise reading), and <strong>tied to context</strong>
        (the Victorian angle is already there). Every paragraph will then be a proof step
        for the thesis.
      </p>

      <h2>Step 2: Topic sentences that argue, not describe</h2>
      <p>
        Each body paragraph should open with a sentence that advances your argument. Weak
        topic sentences describe the text. Strong topic sentences make a claim about what
        Stevenson is doing and why.
      </p>
      <ul>
        <li>
          <strong>Weak:</strong> "In Chapter 1, Enfield describes the trampling of a child."
        </li>
        <li>
          <strong>Strong:</strong> "Stevenson plants the novella&rsquo;s moral diagnosis on its
          first page by making Hyde&rsquo;s defining crime not rage but indifference."
        </li>
      </ul>

      <h2>Step 3: Zoom in on language (AO2)</h2>
      <p>
        Grade 9 essays do not just quote — they <em>zoom</em>. Pick the smallest possible unit
        of language (a word, a prefix, a single adjective) and analyse it in detail. Examiners
        reward close reading far more than bulk quotation.
      </p>
      <Quote
        text="Trampled calmly over the child\'s body."
        chapter="Chapter 1"
      />
      <p>
        A weak answer says "this shows Hyde is violent". A Grade 9 answer zooms on
        <em> "calmly"</em>, notices that the adverb implies moral detachment rather than
        passion, contrasts it with Chapter 4&rsquo;s <em>"ape-like fury"</em> to show
        Stevenson building a full emotional range for Hyde, and links both to Enfield&rsquo;s
        inability to describe him — the novella&rsquo;s theme of unnameable wrongness.
      </p>

      <h2>Step 4: Weave context through, don't bolt it on (AO3)</h2>
      <p>
        Do not write a paragraph of "context" and leave it. Weave it into the language
        analysis. A good test: remove your context sentence, and the paragraph should feel
        less complete. If it still makes full sense without the context, you have bolted it
        on.
      </p>
      <p>
        Good AO3 hooks for Jekyll and Hyde: Darwinism, degeneration theory, the 1885
        Labouchere Amendment, Stevenson&rsquo;s Scottish Calvinism, fin-de-siècle London fog,
        the Victorian public/private split, the Gothic scientist tradition (from Frankenstein
        to Wells). Pick two or three and use them as lenses, not add-ons.
      </p>

      <h2>Step 5: Track structure across the novella</h2>
      <p>
        Examiners reward answers that notice <strong>structural</strong> choices, not only
        language. For Jekyll and Hyde that means:
      </p>
      <ul>
        <li>
          The shift from third-person detective narrative (Chapters 1-8) to first-person
          confession (Chapters 9-10).
        </li>
        <li>
          The delayed explanation — we get the theory last.
        </li>
        <li>
          The recurring motifs: doors, fog, letters, cheques, signatures.
        </li>
        <li>
          Cyclical imagery — sea of liberty / shipwreck; hissing / damned; gentleman / ape.
        </li>
      </ul>

      <h2>Step 6: Conclude with a counter-reading</h2>
      <p>
        Grade 9 conclusions do not restate the essay — they <em>push it further</em>. One
        classic move: acknowledge a simpler reading of the novella and argue that Stevenson
        complicates it. For example:
      </p>
      <p className="rounded-lg border border-border bg-card p-4 text-sm">
        <em>
          A simpler reading treats Jekyll and Hyde as a moral fable about the triumph of good
          over evil. But Stevenson denies his reader the comfort of that binary. Jekyll is
          compromised, Hyde is selfish rather than satanic, and Utterson&rsquo;s rational
          discretion is part of the culture that made Hyde possible. The novella ends not with
          moral victory but with a suicide and a locked letter — a conclusion far closer to
          tragedy than melodrama.
        </em>
      </p>

      <h2>A model Grade 9 paragraph</h2>
      <p>
        Stevenson plants his moral diagnosis on the first page by making Hyde&rsquo;s defining
        crime not rage but <em>"calm"</em>. The adverb in <em>"trampled calmly over the
        child&rsquo;s body"</em> is far more disturbing than any verb of anger, because it
        implies a being cut off from moral emotion altogether; Enfield&rsquo;s simile of a
        <em> "damned Juggernaut"</em> a line earlier intensifies this by figuring Hyde as an
        unstoppable mechanical force rather than a man. In a late-Victorian culture obsessed
        with protecting childhood innocence — the same decade that would produce the 1889
        Prevention of Cruelty to Children Act — the choice of victim collapses the comforting
        line between respectable gentleman and street violence. Stevenson will later offer a
        supposedly scientific explanation in Jekyll&rsquo;s <em>"Full Statement"</em>, but the
        real explanation has already been delivered through a single adverb: the novella is
        not a story about a man becoming evil, but a story about a culture that produced men
        capable of walking calmly away from suffering.
      </p>

      <h2>Five revision habits of Grade 9 students</h2>
      <ul>
        <li>
          Learn quotes by theme, not by chapter. You need to be able to pivot.
        </li>
        <li>
          Learn <em>short</em> quotes. Five words you can analyse beats twenty you can&rsquo;t.
        </li>
        <li>
          Practise topic sentences, cold, without the paragraph. One minute, five tries.
        </li>
        <li>
          Use the writer&rsquo;s name. Say "Stevenson presents", not "the book says".
        </li>
        <li>
          Read your old essays and underline where you only described. Rewrite those sentences
          as arguments.
        </li>
      </ul>
    </AnalysisPage>
  )
}
