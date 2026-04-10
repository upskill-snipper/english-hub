import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Dual Nature of Man Quotes — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Dual Nature of Man Quotes — Jekyll and Hyde Analysis',
  description:
    'The six most powerful dual nature of man quotes from Jekyll and Hyde, ranked for examiner value, with context and exam analysis.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/dual-nature-of-man-quotes',
  },
  openGraph: {
    title: 'Dual Nature of Man Quotes — Jekyll and Hyde',
    description:
      'Six essential duality quotes from Jekyll and Hyde, with analysis for GCSE exam paragraphs.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="dual-nature-of-man-quotes"
      h1={H1}
      headline={'Dual Nature of Man Quotes — Jekyll and Hyde Analysis'}
      schemaDescription={
        'Six of the strongest dual nature of man quotations from Jekyll and Hyde, with examiner-ranked analysis.'
      }
      intro={
        'If you only learn six duality quotes for your GCSE Jekyll and Hyde exam, these are the six. Each one is ranked by how flexibly it can be used across AO1, AO2 and AO3.'
      }
      related={[
        {
          title: '"Man is not truly one, but truly two"',
          href: '/analysis/jekyll-hyde/man-is-not-truly-one-but-truly-two',
        },
        { title: 'Duality theme analysis', href: '/analysis/jekyll-hyde/duality-theme-analysis' },
        {
          title: '"With the sea of liberty before me"',
          href: '/analysis/jekyll-hyde/with-the-sea-of-liberty-before-me',
        },
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
      ]}
    >
      <h2>1. "Man is not truly one, but truly two"</h2>
      <Quote
        text="Man is not truly one, but truly two."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />
      <p>
        The thesis statement of the entire novella. Use this for any question on duality — it is
        the most flexible quotation Stevenson gives you. Strong answers point out that Jekyll
        immediately hedges with <em>"a mere polity of multifarious … denizens"</em>, suggesting
        even "two" is too simple.
      </p>

      <h2>2. "The thorough and primitive duality of man"</h2>
      <Quote
        text="With every day, and from both sides of my intelligence, the moral and the intellectual, I thus drew steadily nearer to that truth, by whose partial discovery I have been doomed to such a dreadful shipwreck: that man is not truly one, but truly two. […] the thorough and primitive duality of man."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />
      <p>
        The word <strong>"primitive"</strong> is the gold here. Jekyll claims duality is not a
        modern discovery but an <em>original</em> condition of being human. This lets you
        discuss Darwinism and atavism — the idea that the "second" self is evolutionary.
      </p>

      <h2>3. "I felt younger, lighter, happier in body"</h2>
      <Quote
        text="I felt younger, lighter, happier in body; within I was conscious of a heady recklessness, a current of disordered sensual images running like a mill race in my fancy, a solution of the bonds of obligation, an unknown but not an innocent freedom of the soul."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />
      <p>
        Grade 9 students use this to show duality is not just good/evil — it is
        restraint/liberation. The metaphor of a <em>"mill race"</em> (a fast-flowing industrial
        water channel) gives you a 19th-century industrial image of repressed energy escaping.
      </p>

      <h2>4. "A being inherently malign and villainous"</h2>
      <Quote
        text="This, too, was myself. It seemed natural and human. In my eyes it bore a livelier image of the spirit, it seemed more express and single, than the imperfect and divided countenance I had been hitherto accustomed to call mine."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />
      <p>
        Jekyll looks in the mirror as Hyde and recognises him as <em>"myself"</em>. The adjective
        <em> "single"</em> is crucial — ironically, Hyde is the one self that feels
        <em> undivided</em>. That paradox shows Stevenson&rsquo;s duality is more psychological
        than theological.
      </p>

      <h2>5. "That child of Hell had nothing human"</h2>
      <Quote
        text="That child of Hell had nothing human; nothing lived in him but fear and hatred."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />
      <p>
        Useful counterweight to Quote 4. Jekyll tries to re-externalise Hyde as <em>"nothing
        human"</em>, but he has just called him <em>"myself"</em>. Strong answers notice that
        Jekyll keeps swinging between ownership and disowning, modelling duality at the level of
        his own prose.
      </p>

      <h2>6. "O my poor old Harry Jekyll … Satan\'s signature upon a face"</h2>
      <Quote
        text="O my poor old Harry Jekyll, if ever I read Satan\'s signature upon a face, it is on that of your new friend."
        speaker="Mr Utterson"
        chapter="Chapter 2"
      />
      <p>
        Earlier in the novella, this quotation dramatises duality from the outside. Utterson
        imagines Hyde as Jekyll&rsquo;s evil <em>"friend"</em>, not realising he is Jekyll. The
        address <em>"O my poor old Harry"</em> dramatises the blind loyalty of the respectable
        class, which insists on seeing only the "good" half of a man.
      </p>

      <h2>How to deploy these quotes in an exam</h2>
      <p>
        Do not drop all six into one essay. Pick two that contrast — for example, Quote 1
        (Jekyll&rsquo;s abstract thesis) and Quote 4 (his concrete mirror moment). Show that
        Stevenson stages duality both as a scientific claim and as a lived, embodied
        experience. Use Quote 6 if you want a third voice from outside Jekyll&rsquo;s head,
        showing duality as a social as well as psychological phenomenon.
      </p>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson frames the dual nature of man on at least three levels: as scientific thesis
        (<em>"man is not truly one, but truly two"</em>), as embodied experience (<em>"I felt
        younger, lighter, happier in body"</em>) and as social impression (<em>"Satan&rsquo;s
        signature upon a face"</em>). The power of the novella lies in the tension between these
        registers — Jekyll&rsquo;s abstract theory and his bodily liberation both assume that the
        "two selves" can be cleanly separated, but Stevenson repeatedly undermines that
        assumption by having Jekyll slip between calling Hyde <em>"myself"</em> and <em>"that
        child of Hell"</em>. Duality is not a stable binary but a moving target: respectability
        and vice, control and appetite, ownership and disowning. In a late-Victorian culture
        that needed a clean surface and a hidden underside, Stevenson shows that the very
        attempt to divide the self is what produces the monster.
      </p>
    </AnalysisPage>
  )
}
