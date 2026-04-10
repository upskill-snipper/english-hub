import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Science Theme Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Science Theme in Jekyll and Hyde — GCSE Analysis',
  description:
    'GCSE analysis of the science theme in Jekyll and Hyde. "Transcendental medicine", Darwin, Lanyon, key quotes and Grade 9 exam paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/science-theme-analysis',
  },
  openGraph: {
    title: 'Science in Jekyll and Hyde',
    description: 'Stevenson\'s Gothic fear of unregulated scientific experimentation.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="science-theme-analysis"
      h1={H1}
      headline={'Science Theme in Jekyll and Hyde'}
      schemaDescription={
        'GCSE thematic analysis of science in Jekyll and Hyde: "transcendental medicine", Darwin, Lanyon and Grade 9 paragraph.'
      }
      intro={
        'Stevenson wrote in a decade obsessed with science. Darwin was recent, psychology was emerging, laboratories were expanding — and the Gothic tradition had always feared what men in laboratories might do. Jekyll and Hyde lives in the tension between those two.'
      }
      related={[
        { title: 'Dr Lanyon character analysis', href: '/analysis/jekyll-hyde/dr-lanyon-character-analysis' },
        { title: '"Ape-like fury"', href: '/analysis/jekyll-hyde/ape-like-fury' },
        { title: 'Victorian society context', href: '/analysis/jekyll-hyde/victorian-society-context' },
      ]}
    >
      <h2>Two sciences in conflict</h2>
      <p>
        Stevenson does not present "science" as a single thing. He presents a war between two
        versions of it. Lanyon stands for <strong>empirical, observational, anatomical</strong>
        science: measurable, repeatable, cautious. Jekyll stands for what he calls
        <strong> "transcendental medicine"</strong>: metaphysical, speculative, willing to treat
        the soul as data. Stevenson&rsquo;s Lanyon dismisses this as <em>"unscientific
        balderdash"</em>.
      </p>
      <Quote
        text="Such unscientific balderdash […] would have estranged Damon and Pythias."
        speaker="Dr Hastie Lanyon"
        chapter="Chapter 2"
      />

      <h2>Jekyll as the Gothic scientist</h2>
      <p>
        The novella sits in a clear lineage of Gothic science stories. Mary Shelley&rsquo;s
        <em> Frankenstein</em> (1818) shows a scientist who oversteps and is punished. H. G.
        Wells&rsquo;s <em>The Island of Doctor Moreau</em> (1896) and <em>The Invisible Man</em>
        (1897) would soon follow the same pattern. Jekyll fits the template precisely: a lone
        man in a private laboratory conducting experiments his colleagues refuse to approve.
        Stevenson inherits the Gothic suspicion that science without ethics is a kind of
        alchemy.
      </p>

      <h2>Darwinism and the science of regression</h2>
      <p>
        Stevenson cannot be discussed without Darwin. <em>On the Origin of Species</em> (1859)
        and <em>The Descent of Man</em> (1871) had recently taught Victorians that they carried
        their animal ancestry inside them. Hyde is written in that shadow: <em>"ape-like"</em>,
        <em> "something troglodytic"</em>, <em>"dwarfish"</em>, <em>"hissing"</em>. Stevenson
        hints that Jekyll&rsquo;s experiment does not invent Hyde so much as unlock him, letting
        an ancestor climb up through the gentleman&rsquo;s body. Science here is not just
        overreach — it is the unleashing of evolutionary history.
      </p>

      <h2>The drug as symbol</h2>
      <p>
        Jekyll&rsquo;s potion is described with strange, almost alchemical specificity: a
        "particular salt", a "tincture", a "draught that changed colour". The novella never
        fully explains the chemistry. Stevenson deliberately keeps the science vague, leaving
        it halfway between laboratory and magic. This is typical late-Victorian anxiety: real
        science had suddenly become powerful enough to look indistinguishable from sorcery,
        and readers were unsure which category to use.
      </p>

      <h2>Lanyon as the cost of science</h2>
      <p>
        Stevenson insists on the human cost. Lanyon dies not from violence but from shock —
        his empirical worldview cannot accommodate what he has seen, so his body cannot either.
        Jekyll kills himself at the end, trapped in Hyde&rsquo;s shrinking body. Poole nearly
        breaks down. Even the servants in Jekyll&rsquo;s house are crying in the hall. The
        novella treats science&rsquo;s collateral damage as part of its subject matter, not a
        side-effect.
      </p>

      <h2>Key quotations</h2>
      <ul>
        <li>
          <em>"Unscientific balderdash."</em> (Chapter 2)
        </li>
        <li>
          <em>"Transcendental medicine."</em> (implied through Lanyon&rsquo;s complaints and
          Jekyll&rsquo;s Full Statement)
        </li>
        <li>
          <em>"I have had a shock ... and I shall never recover."</em> (Chapter 6)
        </li>
        <li>
          <em>"Ape-like fury."</em> (Chapter 4)
        </li>
        <li>
          <em>"That truth, by whose partial discovery I have been doomed to such a dreadful
          shipwreck."</em> (Chapter 10)
        </li>
      </ul>

      <h2>Context (AO3)</h2>
      <p>
        The 1880s were a moment of enormous scientific confidence: Darwinism, electromagnetism,
        germ theory, early psychology. But they were also a moment of deep scientific unease,
        as those same discoveries suggested that human beings were less godlike and more
        animal than Victorian culture liked to admit. Stevenson writes Jekyll as a doctor, not
        a chemist, so that the site of horror is the <em>human body</em>: the respectable
        gentleman is himself the experiment, and the laboratory is the self.
      </p>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson frames science in Jekyll and Hyde not as a single force but as a civil war
        inside Victorian medicine. Lanyon stands for orthodox, empirical science, dismissing
        Jekyll&rsquo;s <em>"transcendental medicine"</em> as <em>"unscientific balderdash"</em>,
        while Jekyll aligns himself with a Gothic, speculative tradition that treats the soul
        as material for the laboratory. Stevenson deliberately keeps the chemistry half-magical,
        so that Jekyll&rsquo;s <em>"particular salt"</em> hovers between science and alchemy —
        a very Victorian ambiguity in a decade when germ theory and Darwinism had begun to
        make real science look uncomfortably powerful. The cost of this experimentation is
        measured in bodies: Lanyon dies of empirical shock, Jekyll dies by his own hand, and
        the reader is left with a Gothic thesis more pointed than Shelley&rsquo;s — it is not
        the monster that destroys the scientist, but the scientist&rsquo;s own willingness to
        treat his respectable self as a specimen.
      </p>
    </AnalysisPage>
  )
}
