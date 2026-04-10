import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = '"Something troglodytic" — Jekyll and Hyde Quote Analysis'

export const metadata: Metadata = {
  title: '"Something troglodytic" Analysis — Jekyll and Hyde',
  description:
    'GCSE analysis of "something troglodytic" from Jekyll and Hyde. Degeneration theory, physiognomy, Utterson\'s reaction, and exam paragraph by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/something-troglodytic',
  },
  openGraph: {
    title: '"Something troglodytic" — Jekyll and Hyde Analysis',
    description:
      'What "troglodytic" means, why Stevenson uses it for Hyde, and how to weave it into an AO3 answer on degeneration.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="something-troglodytic"
      h1={H1}
      headline={'"Something troglodytic" — Jekyll and Hyde Analysis'}
      schemaDescription={
        'GCSE analysis of "something troglodytic" from Jekyll and Hyde: diction, physiognomy, Victorian degeneration theory and exam paragraph.'
      }
      intro={
        'In Chapter 2, "Search for Mr Hyde", Utterson finally meets Hyde in person. The word Stevenson gives him is unforgettable: "troglodytic".'
      }
      related={[
        { title: '"Ape-like fury"', href: '/analysis/jekyll-hyde/ape-like-fury' },
        {
          title: '"Satan\'s signature upon a face"',
          href: '/analysis/jekyll-hyde/satans-signature-on-a-face',
        },
        { title: 'Mr Utterson character analysis', href: '/analysis/jekyll-hyde/mr-utterson-character-analysis' },
        { title: 'Victorian society context', href: '/analysis/jekyll-hyde/victorian-society-context' },
      ]}
    >
      <h2>Where the quotation appears</h2>
      <p>
        After weeks of anxious speculation, Utterson finally ambushes Hyde outside his door.
        Their exchange is brief and uncomfortable, and afterwards Utterson walks away trying to
        account for the physical disgust Hyde has produced in him.
      </p>

      <Quote
        text="He must be deformed somewhere; he gives a strong feeling of deformity, although I couldn\'t specify the point. He\'s an extraordinary looking man, and yet I really can name nothing out of the way. No, sir; I can make no hand of it; I can\'t describe him. And it\'s not want of memory; for I declare I can see him this moment. […] Mr Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation, he had a displeasing smile, he had borne himself to the lawyer with a sort of murderous mixture of timidity and boldness, and he spoke with a husky, whispering and somewhat broken voice; all these were points against him, but not all of these together could explain the hitherto unknown disgust, loathing, and fear with which Mr Utterson regarded him. \'There must be something else,\' said the perplexed gentleman. \'There is something more, if I could find a name for it. God bless me, the man seems hardly human! Something troglodytic, shall we say?\'"
        speaker="Utterson"
        chapter='Chapter 2, "Search for Mr Hyde"'
      />

      <h2>What "troglodytic" actually means</h2>
      <p>
        The word literally means <strong>cave-dwelling</strong>. It comes from the Greek
        <em> troglodytes</em>, a term used in anthropology and zoology to describe both ancient
        cave-dwellers and certain species of great ape (<em>Pan troglodytes</em> is the Latin name
        for the chimpanzee). For a Victorian reader, "troglodytic" would have immediately evoked
        two linked ideas: the pre-civilised caveman of early anthropology, and the chimpanzee of
        Darwinian science. Utterson is not calling Hyde primitive by accident — he is reaching
        for a technical word.
      </p>

      <h2>Language analysis</h2>
      <ul>
        <li>
          <strong>"Something"</strong> — the vague pronoun is doing enormous work. Utterson cannot
          locate Hyde&rsquo;s wrongness in any single feature; the horror is diffused through the
          whole body. This is the Gothic technique of <em>unnameable</em> dread.
        </li>
        <li>
          <strong>The rhetorical question "shall we say?"</strong> gives the word a tentative,
          almost academic feel, as if Utterson — a lawyer, a rational man — is trying to file
          Hyde into a professional category that does not quite exist.
        </li>
        <li>
          <strong>"Deformity without any nameable malformation"</strong>. The paradox is
          essential: Hyde is <em>wrong</em> in a way that defeats description, which is why
          examiners love this passage for AO2 language marks.
        </li>
      </ul>

      <h2>Structural significance</h2>
      <p>
        This passage is the first extended description of Hyde we get, and it is filtered through
        Utterson&rsquo;s rational legal mind. That framing matters: Stevenson is showing us that
        even Victorian rationalism cannot explain Hyde. The narrative will later offer a
        scientific explanation (Chapter 10), but Chapter 2 has already planted the suspicion that
        Hyde belongs to an older, pre-modern category of being.
      </p>

      <h2>Context (AO3)</h2>
      <p>
        The 1880s was the decade of "degeneration theory". Writers like Max Nordau and
        criminologists like Lombroso argued that civilised societies could <em>reverse</em>
        evolution, producing physically and morally regressed individuals. Hyde fits this
        stereotype perfectly: small, dark, pale, physically wrong. Add the 1885 Labouchere
        Amendment (which criminalised "gross indecency" and made secret sexual lives a source of
        Victorian fear), and Hyde becomes a condensation of everything the late-Victorian middle
        class dreaded about themselves and their city.
      </p>

      <h2>Themes this quote unlocks</h2>
      <ul>
        <li><strong>Duality</strong> — the "nameable" and "unnameable" halves of a gentleman.</li>
        <li>
          <strong>Appearance vs reality</strong> — Hyde looks wrong, but Utterson cannot say why,
          undermining the Victorian belief that you can read morality off a face.
        </li>
        <li>
          <strong>Science and religion</strong> — "troglodytic" is a scientific word; "God bless
          me" is a religious reflex, and Stevenson deliberately puts them a sentence apart.
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson&rsquo;s choice of the adjective <em>"troglodytic"</em> lifts Hyde out of the
        category of "bad man" and places him into a late-Victorian scientific vocabulary of
        degeneration and atavism. The word carries the double charge of caveman and chimpanzee,
        aligning Hyde with both pre-civilised humanity and Darwin&rsquo;s primate cousins — a
        pairing that would have been deeply unsettling to a reader taught to treat respectable
        London as the pinnacle of civilisation. Stevenson reinforces this through the paradox
        of <em>"deformity without any nameable malformation"</em>: Hyde&rsquo;s wrongness is
        diffused through his whole body, defeating the Victorian pseudoscience of physiognomy
        that claimed morality could be read off a face. The rhetorical tentativeness of
        <em> "shall we say?"</em> suggests that even the careful lawyer Utterson has to reach for
        a word outside his professional register, implying that Hyde belongs to a category
        Victorian rationalism cannot yet name.
      </p>
    </AnalysisPage>
  )
}
