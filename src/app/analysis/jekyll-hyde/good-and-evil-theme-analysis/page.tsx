import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Good and Evil Theme Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Good and Evil Theme in Jekyll and Hyde — GCSE Analysis',
  description:
    'GCSE analysis of the good and evil theme in Jekyll and Hyde. Why Hyde is not "pure evil", key quotes, context and Grade 9 exam paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/good-and-evil-theme-analysis',
  },
  openGraph: {
    title: 'Good and Evil in Jekyll and Hyde',
    description: 'Why Stevenson refuses the simple binary of good and evil.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="good-and-evil-theme-analysis"
      h1={H1}
      headline={'Good and Evil Theme in Jekyll and Hyde'}
      schemaDescription={
        'GCSE thematic analysis of good and evil in Jekyll and Hyde: Hyde as selfishness, Jekyll as compromised, and exam paragraph.'
      }
      intro={
        'At first glance, Jekyll and Hyde looks like a classic good-versus-evil story. In fact, Stevenson is doing something far more interesting: he is showing us why the good/evil binary itself is a Victorian fiction.'
      }
      related={[
        { title: 'Duality theme analysis', href: '/analysis/jekyll-hyde/duality-theme-analysis' },
        { title: 'Mr Hyde character analysis', href: '/analysis/jekyll-hyde/mr-hyde-character-analysis' },
        {
          title: '"Satan\'s signature upon a face"',
          href: '/analysis/jekyll-hyde/satans-signature-on-a-face',
        },
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
      ]}
    >
      <h2>The Victorian binary Stevenson inherits</h2>
      <p>
        Nineteenth-century moral thought — Evangelical Christianity, melodrama, popular Gothic
        — often imagined good and evil as clearly opposed forces. Virtue was visible, sin was
        visible, and good men could easily be told from bad ones. Stevenson writes in this
        tradition but complicates it at every turn.
      </p>

      <h2>Hyde is not pure evil</h2>
      <p>
        Jekyll himself calls Hyde <em>"pure evil"</em>, and a weak answer will take him at his
        word. But look carefully at what Hyde actually does. He tramples a child, <em>
        calmly</em>. He murders a courteous MP, in <em>fury</em>. He lives in Soho, drinks wine,
        signs cheques, and runs away when threatened. He is not plotting to corrupt humanity.
        He has no philosophy of evil. He is, above all, <strong>selfish</strong> — free of the
        social restraints that would stop him from doing what he wants in the moment.
      </p>
      <p>
        Grade 9 answers say this plainly: Stevenson&rsquo;s Hyde is not pure evil, he is pure
        selfishness. That is more terrifying because it is more recognisable.
      </p>

      <Quote
        text="That child of Hell had nothing human; nothing lived in him but fear and hatred."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />

      <h2>Jekyll is not pure good</h2>
      <p>
        The novella is equally ruthless with Jekyll. Before the experiment, he lives a
        <em> "profound duplicity of life"</em>, concealing pleasures in the pursuit of a
        respectable reputation. His scientific ambition is not moral purification but the
        engineering of consequence-free sin. Even at his most penitent, he returns to the drug
        at the first moment of stress. Stevenson denies us a simple <em>"good man corrupted by
        evil"</em> narrative.
      </p>

      <h2>The religious register</h2>
      <p>
        Stevenson laces the novella with religious vocabulary — Satan, Hell, Cain, damnation,
        Eden-like hissing, Biblical antithesis — but he never lets it settle into a clean
        allegory. When Utterson imagines <em>"Satan&rsquo;s signature upon a face"</em>, the
        reader is tempted to read Hyde as literally demonic, only to learn in Chapter 10 that
        Hyde is Jekyll&rsquo;s own willed invention. Stevenson borrows the shape of Christian
        good-and-evil but uses it to expose the Victorian self, not to reassert the devil.
      </p>

      <h2>The real evil: indifference</h2>
      <p>
        If the novella has a moral villain, it is indifference. Hyde&rsquo;s defining scene is
        the trampling of a child, and the word Stevenson chooses is <em>"calmly"</em>. Violence
        can be explained; calm cruelty cannot. Stevenson is arguing that the specific evil of
        his age is not passion but detachment — the ease with which respectable men can
        overlook suffering as long as it happens to someone else.
      </p>

      <h2>Key quotations</h2>
      <ul>
        <li>
          <em>"Trampled calmly over the child\'s body."</em> (Chapter 1)
        </li>
        <li>
          <em>"Satan\'s signature upon a face."</em> (Chapter 2)
        </li>
        <li>
          <em>"I had come out of that lecture-room an abject creature."</em> (Chapter 9)
        </li>
        <li>
          <em>"That child of Hell had nothing human."</em> (Chapter 10)
        </li>
        <li>
          <em>"The pleasures which I made haste to seek in my disguise were, as I have said,
          undignified."</em> (Chapter 10)
        </li>
      </ul>

      <h2>Context (AO3)</h2>
      <p>
        Stevenson&rsquo;s Calvinist Edinburgh upbringing gave him the religious vocabulary of
        good and evil. His late-Victorian London gave him the professional class whose
        respectability was built on selective blindness. His Darwinian moment gave him the
        suspicion that evil was not metaphysical but evolutionary. He combines all three. The
        novella does not reject morality — it rejects the comforting simplicity of Victorian
        melodrama, in which good and evil could be told apart at a glance.
      </p>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson refuses the comforting Victorian binary of good and evil. Hyde is called
        <em> "pure evil"</em> by Jekyll himself, but the novella&rsquo;s evidence is more
        unsettling: he is not a devil with a plan but a being of pure appetite, who tramples a
        child <em>"calmly"</em> and murders in <em>"ape-like fury"</em>. Jekyll is no better:
        his "good" half is already compromised by a <em>"profound duplicity of life"</em>, and
        his experiment is not moral cleansing but an engineered way to enjoy sin without
        consequences. Stevenson borrows religious vocabulary — Satan, Hell, Cain, Eden — only
        to expose how thinly it maps onto the actual horrors of his respectable professional
        world. The novella&rsquo;s most frightening crime is not rage but indifference: the
        <em> calm</em> with which respectable men can step over a child&rsquo;s body, literally
        or figuratively, as long as the reputation of their class remains intact.
      </p>
    </AnalysisPage>
  )
}
