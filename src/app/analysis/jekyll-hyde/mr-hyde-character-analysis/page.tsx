import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Mr Hyde Character Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Mr Hyde Character Analysis — Jekyll and Hyde (GCSE)',
  description:
    'Mr Hyde character analysis for GCSE English Literature. Atavism, the id, key quotes, physical description and Grade 9 exam paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/mr-hyde-character-analysis',
  },
  openGraph: {
    title: 'Mr Hyde Character Analysis — Jekyll and Hyde',
    description: 'How Stevenson constructs Hyde as an atavistic, id-driven embodiment of evil.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="mr-hyde-character-analysis"
      h1={H1}
      headline={'Mr Hyde Character Analysis — Jekyll and Hyde'}
      schemaDescription={
        'GCSE character analysis of Mr Hyde in Stevenson\'s Jekyll and Hyde: appearance, behaviour, atavism and Grade 9 paragraph.'
      }
      intro={
        'Mr Edward Hyde is not just "the evil side of Jekyll". He is a deliberately constructed figure — dwarfish, reptilian, ape-like, undescribable — designed to embody a specifically Victorian fear of regression.'
      }
      related={[
        { title: 'Dr Jekyll character analysis', href: '/analysis/jekyll-hyde/dr-jekyll-character-analysis' },
        { title: '"Ape-like fury"', href: '/analysis/jekyll-hyde/ape-like-fury' },
        { title: '"Something troglodytic"', href: '/analysis/jekyll-hyde/something-troglodytic' },
        {
          title: 'Good and evil theme analysis',
          href: '/analysis/jekyll-hyde/good-and-evil-theme-analysis',
        },
      ]}
    >
      <h2>Who is Mr Hyde?</h2>
      <p>
        Hyde is Jekyll&rsquo;s "second self" — the personality that emerges when Jekyll drinks
        his self-invented draught. He is legally a separate man (he has his own address, cheques
        and signature), but he is physically and morally Jekyll&rsquo;s inverse: small, pale,
        dwarfish, unnerving, violent, selfish, pleasure-driven.
      </p>

      <h2>Physical description</h2>
      <p>
        Stevenson is deliberately non-specific. Every character describes Hyde in negative terms
        — something is <em>"wrong"</em>, something is <em>"deformed"</em>, something is
        <em> "displeasing"</em> — but no one can say exactly what. He is small and young-looking
        compared to Jekyll, physically strong, and has an ugly smile and a husky voice.
      </p>
      <Quote
        text="Mr Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation, he had a displeasing smile, he had borne himself to the lawyer with a sort of murderous mixture of timidity and boldness, and he spoke with a husky, whispering and somewhat broken voice."
        chapter="Chapter 2"
      />

      <h2>What kind of character is Hyde?</h2>
      <ul>
        <li>
          <strong>Atavistic</strong>. <em>"Ape-like fury"</em>, <em>"something troglodytic"</em>,
          <em> "hissing intake of the breath"</em> — Stevenson piles up animal and primate
          imagery to figure Hyde as an evolutionary throwback.
        </li>
        <li>
          <strong>Impulse-driven</strong>. Hyde has no plans, no long game, no philosophy. He
          tramples, he murders, he flees. He is appetite without reflection — almost a literary
          preview of Freud&rsquo;s "id".
        </li>
        <li>
          <strong>Undescribable</strong>. Stevenson gives Hyde a Gothic quality of
          <em> unnameable</em> wrongness. The refusal of description is not a mistake; it is the
          effect Stevenson wants.
        </li>
        <li>
          <strong>Legally real</strong>. Hyde signs cheques, rents rooms, has a key. Stevenson
          insists on his <em>administrative</em> existence, which makes the duality harder for
          the reader (and for Victorian law) to dismiss.
        </li>
        <li>
          <strong>Growing in strength</strong>. As the novella progresses, Hyde emerges without
          the drug. Jekyll&rsquo;s "better self" shrinks. The more Jekyll indulges, the more Hyde
          owns him.
        </li>
      </ul>

      <h2>Hyde is not "pure evil"</h2>
      <p>
        This is the single most important thing to say in an exam. Hyde is not a devil and he is
        not a demon. Jekyll describes him as <em>"pure evil"</em>, but Stevenson undercuts the
        phrase. Hyde is not committed to evil as an ideology; he is committed to <em>himself</em>.
        He simply has no interest in anyone else. Grade 9 answers call him <strong>pure
        selfishness</strong> rather than pure evil — that phrase is a small thing, but it
        signals real understanding.
      </p>

      <h2>Key quotations for Hyde</h2>
      <ul>
        <li>
          <em>"Trampled calmly over the child\'s body and left her screaming on the ground."</em>
          (Chapter 1)
        </li>
        <li>
          <em>"Something displeasing, something downright detestable."</em> (Chapter 1)
        </li>
        <li>
          <em>"Something troglodytic, shall we say?"</em> (Chapter 2)
        </li>
        <li>
          <em>"With ape-like fury, he was trampling his victim under foot."</em> (Chapter 4)
        </li>
        <li>
          <em>"That child of Hell had nothing human; nothing lived in him but fear and hatred."</em>
          (Chapter 10)
        </li>
      </ul>

      <h2>Context (AO3)</h2>
      <p>
        Hyde is shaped by three late-Victorian anxieties. <strong>Darwinism</strong>: the fear
        that humans are descended from apes and can slip back down the evolutionary ladder.
        <strong> Criminology</strong>: Lombroso&rsquo;s theories of "born criminals" identified
        by ape-like physical features. <strong>Urban decay</strong>: the terror of an
        "underclass" crowding into slums like Soho, imagined as physically and morally
        regressed. Stevenson condenses all three into a single small, dwarfish, hissing man who
        walks out of the most respectable laboratory in London.
      </p>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson constructs Hyde not as a figure of metaphysical evil but as a deliberate
        condensation of late-Victorian fears. The animal vocabulary — <em>"ape-like fury"</em>,
        <em> "something troglodytic"</em>, <em>"hissing intake of the breath"</em> — draws on
        Darwinian anxieties about atavism and Lombroso&rsquo;s criminology, framing Hyde as an
        evolutionary throwback wearing a gentleman&rsquo;s clothes. Yet Stevenson refuses to
        describe him clearly; every narrator is defeated by his <em>"deformity without any
        nameable malformation"</em>, and that narrative refusal is itself the point — Hyde is
        what the Victorian professional classes cannot name about themselves. When Jekyll calls
        him <em>"pure evil"</em>, Stevenson undermines the phrase almost immediately: Hyde is
        not ideologically evil, he is monstrously selfish, which is more damning because it is
        so recognisably human. Hyde is therefore less a Gothic villain than a dark mirror held up
        to the late-Victorian bourgeoisie.
      </p>
    </AnalysisPage>
  )
}
