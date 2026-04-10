import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Dr Lanyon Character Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Dr Lanyon Character Analysis — Jekyll and Hyde (GCSE)',
  description:
    'Dr Lanyon character analysis for GCSE. Rival scientist, rationalism, tragic witness, key quotes and Grade 9 exam paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/dr-lanyon-character-analysis',
  },
  openGraph: {
    title: 'Dr Lanyon Character Analysis — Jekyll and Hyde',
    description: 'The rational scientist whose worldview is destroyed by what he witnesses.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="dr-lanyon-character-analysis"
      h1={H1}
      headline={'Dr Lanyon Character Analysis — Jekyll and Hyde'}
      schemaDescription={
        'GCSE character analysis of Dr Lanyon: rationalism, rivalry with Jekyll, the witness chapter and Grade 9 paragraph.'
      }
      intro={
        'Dr Lanyon is a small role with enormous thematic weight. Stevenson uses him to represent Victorian empirical science and then literally kills him with its failure.'
      }
      related={[
        { title: 'Science theme analysis', href: '/analysis/jekyll-hyde/science-theme-analysis' },
        { title: 'Dr Jekyll character analysis', href: '/analysis/jekyll-hyde/dr-jekyll-character-analysis' },
      ]}
    >
      <h2>Who is Dr Lanyon?</h2>
      <p>
        Stevenson introduces Lanyon in Chapter 2 as <em>"a hearty, healthy, dapper, red-faced
        gentleman, with a shock of hair prematurely white, and a boisterous and decided
        manner"</em>. He is an old friend and former collaborator of Jekyll&rsquo;s, but the two
        have fallen out over what Lanyon calls Jekyll&rsquo;s <em>"scientific balderdash"</em>
        and <em>"unscientific"</em> theories.
      </p>

      <h2>Lanyon as empirical scientist</h2>
      <p>
        Lanyon is Stevenson&rsquo;s mouthpiece for orthodox Victorian science: observation,
        evidence, anatomy, measurement. When Jekyll starts talking about <em>"transcendental
        medicine"</em>, Lanyon recoils because it offends everything he believes the scientific
        method should be. Stevenson is not mocking Lanyon for this — quite the opposite, he is
        about to punish him for being right.
      </p>

      <Quote
        text="Such unscientific balderdash […] would have estranged Damon and Pythias."
        speaker="Dr Hastie Lanyon"
        chapter="Chapter 2"
      />

      <h2>Key character traits</h2>
      <ul>
        <li>
          <strong>Robust and sociable</strong>. Lanyon is healthy, dapper and boisterous —
          Stevenson&rsquo;s shorthand for mental stability. The contrast with his collapsed
          appearance later makes the shock more powerful.
        </li>
        <li>
          <strong>Rational and sceptical</strong>. He will not take metaphysics or Gothic
          speculation seriously. He wants answers in the form of data.
        </li>
        <li>
          <strong>Loyal</strong>. Despite the fallout, when Jekyll sends a desperate letter
          asking for help, Lanyon agrees — because <em>"I had always liked Jekyll"</em>.
        </li>
        <li>
          <strong>Fragile in the face of the uncanny</strong>. Once Lanyon witnesses Hyde&rsquo;s
          transformation, he cannot return to his previous self. His death is, in effect, the
          death of Victorian empiricism in the novella.
        </li>
      </ul>

      <h2>The witness chapter (Chapter 9)</h2>
      <p>
        Lanyon&rsquo;s narrative is the only scene in which someone other than Jekyll actually
        sees the transformation. Stevenson gives this chapter to the rational sceptic on
        purpose. The shock is far greater when it happens to a man who did not believe in it.
      </p>
      <Quote
        text="As for the moral turpitude that man unveiled to me, even with tears of penitence, I can not, even in memory, dwell on it without a start of horror. I will say but one thing, Utterson, and that (if you can bring your mind to credit it) will be more than enough. The creature who crept into my house that night was, on Jekyll\'s own confession, known by the name of Hyde […]. My life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours of the day and night."
        speaker="Dr Lanyon"
        chapter="Chapter 9"
      />

      <h2>Why Lanyon dies</h2>
      <p>
        Lanyon does not die of violence. He dies of <strong>shock</strong>. Stevenson is very
        explicit: Lanyon&rsquo;s worldview cannot accommodate what he has seen, and without that
        worldview, he has nothing left to live on. He is the human cost of scientific hubris:
        Jekyll is the hubristic scientist, but Lanyon is the one who dies of it.
      </p>

      <h2>Key quotations for Lanyon</h2>
      <ul>
        <li>
          <em>"A hearty, healthy, dapper, red-faced gentleman ... boisterous and decided
          manner."</em> (Chapter 2)
        </li>
        <li>
          <em>"Such unscientific balderdash ... would have estranged Damon and Pythias."</em>
          (Chapter 2)
        </li>
        <li>
          <em>"I have had a shock ... and I shall never recover."</em> (Chapter 6)
        </li>
        <li>
          <em>"I had always liked Jekyll."</em> (Chapter 9)
        </li>
        <li>
          <em>"My life is shaken to its roots; sleep has left me; the deadliest terror sits by
          me at all hours."</em> (Chapter 9)
        </li>
      </ul>

      <h2>Context (AO3)</h2>
      <p>
        In the 1880s, British science was in a proud, confident phase — Darwin, Huxley, Kelvin,
        Faraday. Lanyon represents that self-confidence. Stevenson&rsquo;s decision to kill him
        off through nothing more than a demonstration is a pointed comment on its limits:
        rationalism is powerful but brittle, and the universe may contain horrors that cannot
        be disproved in a laboratory. Lanyon is the novella&rsquo;s most moving casualty because
        his crime is being sensible.
      </p>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson uses Lanyon as a sacrificial figure for Victorian empirical science. His
        introduction as a <em>"hearty, healthy, dapper, red-faced gentleman"</em> establishes
        him as the picture of rational health; his quick dismissal of Jekyll&rsquo;s
        <em> "unscientific balderdash"</em> marks him as the novella&rsquo;s orthodox empiricist.
        Stevenson then gives him the only scene in which the transformation is witnessed, a
        narrative decision designed to inflict maximum damage: the shock lands on the man whose
        worldview cannot bend to accommodate it. Lanyon&rsquo;s death — not from violence, but
        from a collapse of belief — turns him into the human cost of Jekyll&rsquo;s
        <em> "transcendental medicine"</em>, and Stevenson is careful to mourn him. In a decade
        of scientific triumphalism, Lanyon is the reminder that rationalism has nothing to say
        to a universe it refuses to admit exists, and that sensible men can still be killed by
        what they will not believe.
      </p>
    </AnalysisPage>
  )
}
