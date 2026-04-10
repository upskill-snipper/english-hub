import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = '"Satan\'s signature upon a face" — Jekyll and Hyde Quote Analysis'

export const metadata: Metadata = {
  title: '"Satan\'s signature upon a face" Analysis — Jekyll and Hyde',
  description:
    'GCSE analysis of "Satan\'s signature upon a face" from Jekyll and Hyde. Physiognomy, religious imagery, and exam paragraph from GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/satans-signature-on-a-face',
  },
  openGraph: {
    title: '"Satan\'s signature upon a face" — Jekyll and Hyde Analysis',
    description:
      'Why Utterson imagines Hyde as branded by Satan, and how to use this quotation for religion, physiognomy and duality.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="satans-signature-on-a-face"
      h1={H1}
      headline={'"Satan\'s signature upon a face" — Jekyll and Hyde Analysis'}
      schemaDescription={
        'GCSE close reading of "Satan\'s signature upon a face" from Jekyll and Hyde: religious imagery, physiognomy and exam paragraph.'
      }
      intro={
        'Utterson\'s startling phrase from Chapter 2 fuses two very Victorian ideas: physiognomy (that a face can reveal a soul) and religion (that evil is authored, like a signed document).'
      }
      related={[
        { title: '"Something troglodytic"', href: '/analysis/jekyll-hyde/something-troglodytic' },
        {
          title: '"The polite fiction of the law"',
          href: '/analysis/jekyll-hyde/the-polite-fiction-of-the-law',
        },
        {
          title: 'Good and evil theme analysis',
          href: '/analysis/jekyll-hyde/good-and-evil-theme-analysis',
        },
        { title: 'Mr Utterson character analysis', href: '/analysis/jekyll-hyde/mr-utterson-character-analysis' },
      ]}
    >
      <h2>Where the quotation appears</h2>
      <p>
        Just after Utterson meets Hyde for the first time, he stands at the door of Jekyll&rsquo;s
        house and tries to process what he has just experienced. Stevenson lets us inside
        Utterson&rsquo;s head as the rational lawyer reaches for a religious metaphor.
      </p>

      <Quote
        text="The man seems hardly human! Something troglodytic, shall we say? or can it be the old story of Dr Fell? or is it the mere radiance of a foul soul that thus transpires through, and transfigures, its clay continent? The last, I think; for, O my poor old Harry Jekyll, if ever I read Satan\'s signature upon a face, it is on that of your new friend."
        speaker="Utterson"
        chapter='Chapter 2, "Search for Mr Hyde"'
      />

      <h2>The central metaphor</h2>
      <p>
        Stevenson treats Hyde&rsquo;s face as a <strong>document</strong> and evil as its
        <strong> author</strong>. A signature is a legal mark of ownership — and Utterson is a
        lawyer, so the metaphor is drawn from his own professional world. Calling Satan the
        signatory implies that Hyde&rsquo;s body literally belongs to evil, as if it had been
        legally assigned to it.
      </p>

      <h2>Language analysis</h2>
      <ul>
        <li>
          <strong>"Signature"</strong> frames Hyde&rsquo;s face as a text that can be read. This
          directly reflects Victorian <em>physiognomy</em>, the pseudoscience that taught people
          to interpret moral character from facial features.
        </li>
        <li>
          <strong>"Foul soul ... clay continent"</strong>. Stevenson drops in a Biblical echo:
          humans are made of clay (Genesis 2:7). The metaphor contrasts the pure material of
          creation with the "foul" spirit now inhabiting it, emphasising moral corruption.
        </li>
        <li>
          <strong>"Transpires ... transfigures"</strong>. The prefixed Latinate verbs suggest
          something inner breaking through to the surface. Evil is not applied to Hyde&rsquo;s
          face from outside; it radiates through it from within.
        </li>
      </ul>

      <h2>Structural significance</h2>
      <p>
        This quotation is the first time a character uses explicitly religious language about
        Hyde, and it sets up a recurring motif. Lanyon will later speak of the "deadly" and
        "supernatural"; Jekyll&rsquo;s confession describes Hyde as "the evil side of my nature".
        Stevenson is slowly shifting the novella from legal mystery to moral and religious
        fable.
      </p>

      <h2>Context (AO3)</h2>
      <p>
        Stevenson grew up in a strict Scottish Calvinist household, and Calvinism teaches that
        human beings are radically sinful, and that the elect and the damned can sometimes be
        told apart by outward signs. The phrase <em>"Satan&rsquo;s signature"</em> belongs to
        this theological inheritance. Victorian audiences would also have recognised echoes of
        Milton, Hogg&rsquo;s <em>Confessions of a Justified Sinner</em> (a Scottish Gothic
        influence Stevenson knew well), and the Book of Revelation&rsquo;s idea that the damned
        are "marked".
      </p>

      <h2>Themes this quote unlocks</h2>
      <ul>
        <li>
          <strong>Good and evil</strong> — the novella keeps flirting with the idea that evil is
          a supernatural, identifiable presence, only to complicate it later.
        </li>
        <li>
          <strong>Appearance and reality</strong> — this quote <em>insists</em> that the face
          tells the truth, in contrast to Jekyll&rsquo;s respectable mask.
        </li>
        <li>
          <strong>Duality</strong> — the "clay continent" holds a "foul soul"; body and soul are
          treated as separable, echoing Jekyll&rsquo;s two-selves thesis.
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        By having his lawyer-narrator imagine Hyde&rsquo;s face as bearing <em>"Satan&rsquo;s
        signature"</em>, Stevenson fuses the legal and the religious in a single metaphor: the
        face becomes a signed document, evil a legal owner. The Latinate verbs <em>"transpires"
        </em> and <em>"transfigures"</em> suggest that this moral corruption radiates from
        within, drawing on the Victorian pseudoscience of physiognomy, which taught that
        character could be read off the body. Stevenson&rsquo;s Calvinist upbringing is audible
        here too — the idea that the damned can be visually identified — yet the narrative will
        ultimately complicate this, because the "signature" belongs to Jekyll himself once he is
        exposed as the author of Hyde. Stevenson thus uses Utterson&rsquo;s pious metaphor to
        tempt the reader into a neat good/evil binary that the final chapters will dismantle.
      </p>
    </AnalysisPage>
  )
}
