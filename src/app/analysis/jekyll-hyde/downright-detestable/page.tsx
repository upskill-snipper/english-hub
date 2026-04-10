import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = '"Downright detestable" — Jekyll and Hyde Quote Analysis'

export const metadata: Metadata = {
  title: '"Downright detestable" Analysis — Jekyll and Hyde',
  description:
    'GCSE analysis of Enfield\'s "downright detestable" from Jekyll and Hyde. The failure of rational language and exam paragraph by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/downright-detestable',
  },
  openGraph: {
    title: '"Downright detestable" — Jekyll and Hyde Analysis',
    description:
      'Why Enfield\'s visceral disgust at Hyde is more important than it looks.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="downright-detestable"
      h1={H1}
      headline={'"Downright detestable" — Jekyll and Hyde Analysis'}
      schemaDescription={
        'GCSE analysis of Enfield\'s phrase "downright detestable" in Jekyll and Hyde: diction, the failure of description, and exam paragraph.'
      }
      intro={
        'In Chapter 1, Enfield describes Hyde to Utterson. His inability to say exactly what is wrong with him becomes a running motif in the novella — and the phrase "downright detestable" is the clearest admission of that failure.'
      }
      related={[
        { title: '"Something troglodytic"', href: '/analysis/jekyll-hyde/something-troglodytic' },
        { title: 'Mr Hyde character analysis', href: '/analysis/jekyll-hyde/mr-hyde-character-analysis' },
        {
          title: 'Good and evil theme analysis',
          href: '/analysis/jekyll-hyde/good-and-evil-theme-analysis',
        },
      ]}
    >
      <h2>Where the quotation appears</h2>
      <p>
        Utterson presses Enfield to describe Hyde. What he gets back is a string of half-tries
        and then an admission of defeat.
      </p>

      <Quote
        text="He is not easy to describe. There is something wrong with his appearance; something displeasing, something downright detestable. I never saw a man I so disliked, and yet I scarce know why. He must be deformed somewhere; he gives a strong feeling of deformity, although I couldn\'t specify the point."
        speaker="Enfield"
        chapter='Chapter 1, "Story of the Door"'
      />

      <h2>The failure of rational language</h2>
      <p>
        Enfield is a <em>"well-known man about town"</em>, a rational, social observer. His job in
        this passage is to give a clear description — the way a lawyer or journalist would. But
        Stevenson deliberately shows him reaching for three different vague phrases
        (<em>"something wrong"</em>, <em>"something displeasing"</em>, <em>"something downright
        detestable"</em>) before giving up entirely with <em>"I scarce know why"</em>.
      </p>
      <p>
        The failure of language <em>is</em> the point. Hyde is something Victorian rational
        discourse cannot categorise. The novella is haunted by this inability to name the thing
        everyone can feel.
      </p>

      <h2>Language analysis</h2>
      <ul>
        <li>
          <strong>"Downright"</strong> is a plain, Anglo-Saxon intensifier. After the Latinate
          vagueness of <em>"displeasing"</em>, the switch to blunt monosyllables feels almost
          desperate, as if Enfield has abandoned politeness.
        </li>
        <li>
          <strong>"Detestable"</strong> comes from the Latin <em>detestari</em>, "to curse or
          call down" — originally a religious word. Hidden inside the adjective is an echo of
          <em> damnation</em>, the same register Utterson reaches for with "Satan&rsquo;s
          signature".
        </li>
        <li>
          <strong>The triple "something ... something ... something"</strong> creates a
          grammatical fog. Stevenson makes us feel Hyde&rsquo;s wrongness as diffused, unlocated
          — exactly the effect of Gothic unease.
        </li>
      </ul>

      <h2>Structural significance</h2>
      <p>
        This failure of description is a running motif. Utterson cannot describe him either. The
        maidservant can only say he was <em>"particularly small and particularly wicked-looking"</em>.
        Even Jekyll&rsquo;s own "Full Statement" struggles to define Hyde&rsquo;s evil. Stevenson
        is showing that Hyde resists every Victorian register — legal, medical, religious —
        until Jekyll finally calls him <em>"a being inherently malign and villainous"</em>, and
        even that sounds inadequate.
      </p>

      <h2>Context (AO3)</h2>
      <p>
        Nineteenth-century realism was obsessed with description: think of Dickens&rsquo;s
        crowded paragraphs or George Eliot&rsquo;s minute psychological inventories. Stevenson
        writes in the opposite mode. He withholds description on purpose because he is closer to
        the emerging Gothic-modernist tradition, where the real horror is what cannot be said.
        This connects Jekyll and Hyde to later texts like <em>Heart of Darkness</em> (1899) and,
        eventually, Freudian psychoanalysis, which will give this unspeakable inner Hyde a new
        name: <em>the unconscious</em>.
      </p>

      <h2>Themes this quote unlocks</h2>
      <ul>
        <li>
          <strong>Duality</strong> — Hyde resists description because he is the half of Jekyll
          that language has been trained not to acknowledge.
        </li>
        <li>
          <strong>Repression</strong> — the things you cannot name are the things your society
          has forbidden you to feel.
        </li>
        <li>
          <strong>Appearance vs reality</strong> — Hyde <em>looks</em> wrong, but no one can say
          which feature is at fault.
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson stages the failure of rational description in Enfield&rsquo;s triple hedge,
        <em> "something wrong ... something displeasing ... something downright detestable"</em>,
        each vague pronoun marking the retreat of Victorian rationalism in the face of Hyde. The
        plain, Anglo-Saxon intensifier <em>"downright"</em> contrasts with the Latinate
        <em> "displeasing"</em> to dramatise a linguistic register collapsing under pressure, as
        if Enfield has had to abandon politeness for primitive disgust. Buried inside
        <em> "detestable"</em> is the Latin <em>detestari</em>, to curse, returning us to the
        religious idiom of damnation that Utterson will reach for later. In a late-Victorian
        culture obsessed with classification and legal clarity, Stevenson&rsquo;s refusal to let
        his narrators describe Hyde turns the horror inward: the reader is shown that what
        cannot be named by a respectable gentleman is precisely what that gentleman cannot afford
        to acknowledge about himself.
      </p>
    </AnalysisPage>
  )
}
