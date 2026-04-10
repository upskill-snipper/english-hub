import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = '"Ape-like fury" — Jekyll and Hyde Quote Analysis'

export const metadata: Metadata = {
  title: '"Ape-like fury" Analysis — Jekyll and Hyde (Carew Murder)',
  description:
    'GCSE analysis of "ape-like fury" from the Carew murder in Jekyll and Hyde. Darwinism, atavism, simile analysis and exam paragraph, written by GCSE examiners.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/ape-like-fury' },
  openGraph: {
    title: '"Ape-like fury" — Jekyll and Hyde Quote Analysis',
    description:
      'Why Stevenson uses the simile "ape-like fury" during the Carew murder scene and how to use it for AO3 Darwinism marks.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="ape-like-fury"
      h1={H1}
      headline={'"Ape-like fury" — Jekyll and Hyde Analysis'}
      schemaDescription={
        'GCSE analysis of "ape-like fury" from the Carew murder scene in Jekyll and Hyde: simile, Darwinian context, and exam-ready paragraph.'
      }
      intro={
        'This simile appears in Chapter 4, "The Carew Murder Case", during the most violent scene of the novella. It is the classic AO3 quotation for Darwinism and atavism.'
      }
      related={[
        { title: '"Something troglodytic"', href: '/analysis/jekyll-hyde/something-troglodytic' },
        { title: 'Science theme analysis', href: '/analysis/jekyll-hyde/science-theme-analysis' },
        { title: 'Mr Hyde character analysis', href: '/analysis/jekyll-hyde/mr-hyde-character-analysis' },
      ]}
    >
      <h2>Where the quotation appears</h2>
      <p>
        A maidservant, watching from her window in the moonlight, sees Sir Danvers Carew — a
        white-haired, courteous MP — approach Mr Hyde on the street. After a brief, pleasant
        exchange, Hyde suddenly snaps and attacks him with his cane.
      </p>

      <Quote
        text="And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman. […] And next moment, with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows, under which the bones were audibly shattered and the body jumped upon the roadway."
        chapter='Chapter 4, "The Carew Murder Case"'
      />

      <h2>Why "ape-like" is the examiner favourite</h2>
      <p>
        Stevenson was writing in the long shadow of Darwin. <em>On the Origin of Species</em>
        (1859) and <em>The Descent of Man</em> (1871) had taught Victorian readers that humans
        and apes shared a common ancestor. That idea terrified a culture that liked to see itself
        as the pinnacle of civilisation. By calling Hyde&rsquo;s fury <strong>"ape-like"</strong>,
        Stevenson positions him as a <em>throwback</em> — a literal evolutionary regression, the
        animal ancestor the Victorians thought they had outgrown.
      </p>

      <h2>Language analysis</h2>
      <ul>
        <li>
          <strong>The simile "ape-like"</strong> is zoological. It removes Hyde from the category
          of "man" and slots him into "animal", which is far more damning than an abstract
          adjective like "evil".
        </li>
        <li>
          <strong>"Fury"</strong> connotes irrational, uncontrollable rage, contrasting with the
          earlier "calmly" of the trampling scene. Stevenson shows us both poles of Hyde&rsquo;s
          emotional range — cold indifference <em>and</em> unrestrained violence.
        </li>
        <li>
          <strong>The verb cluster "stamping ... brandishing ... carrying on"</strong> mimics
          frantic, uncoordinated movement, reinforcing the image of a primate rather than a
          gentleman.
        </li>
        <li>
          <strong>"The bones were audibly shattered"</strong> shifts into onomatopoeic brutality.
          The passive voice removes Hyde as an agent, making the violence feel almost
          meteorological.
        </li>
      </ul>

      <h2>Structural significance</h2>
      <p>
        Chapter 4 is the structural climax of the first half of the novella. Before it, Hyde is a
        rumour; after it, he is a wanted murderer. Stevenson uses the third-person
        narrator here — not Enfield, not Utterson — because the maidservant&rsquo;s view through
        her window is the only time the reader gets "direct" access to a Hyde scene. That window
        frame is significant: we are still looking at Hyde through glass, at distance, at night.
      </p>

      <h2>Context (AO3)</h2>
      <p>
        Cesare Lombroso&rsquo;s criminal anthropology, popular in the 1870s and 80s, claimed you
        could identify born criminals by ape-like facial features, heavy brows and long arms.
        Stevenson is not just using a stylish simile — he is drawing on an entire pseudoscience
        of <strong>atavism</strong> (the idea that criminals were evolutionary throwbacks). A
        Victorian reader would have linked <em>"ape-like fury"</em> to real contemporary anxieties
        about hereditary criminality, urban degeneration and the "underclass" of fin-de-siècle
        London.
      </p>

      <h2>Themes this quote unlocks</h2>
      <ul>
        <li>
          <strong>Science</strong> — Hyde is the dark product of Jekyll&rsquo;s "transcendental"
          experiments, but he looks like a pre-human creature.
        </li>
        <li>
          <strong>Duality</strong> — the courteous MP and the ape-like attacker meet in a single
          frame, collapsing the civilised/savage binary.
        </li>
        <li>
          <strong>Repression</strong> — this "fury" is everything Jekyll was never allowed to
          express in polite society, now weaponised.
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson&rsquo;s simile <em>"ape-like fury"</em> collapses the cultural distance between
        civilised Victorian gentleman and evolutionary ancestor in a single phrase. Writing less
        than three decades after Darwin&rsquo;s <em>Origin of Species</em>, Stevenson exploits the
        Victorian reader&rsquo;s newly instilled fear that the gentleman and the primate were on
        the same evolutionary tree; Hyde is figured as the atavistic throwback who has slipped
        back down it. The violent verb cluster <em>"stamping ... brandishing ... carrying on"</em>
        mimics the uncoordinated movement of an agitated animal, while the passive construction
        <em> "the bones were audibly shattered"</em> denies Hyde moral agency, as though he were
        simply a force of nature. In doing so, Stevenson transforms the Carew murder from an
        individual crime into a cultural warning about what lies beneath the thin crust of
        respectable late-Victorian civilisation.
      </p>
    </AnalysisPage>
  )
}
