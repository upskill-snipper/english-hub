import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Dr Jekyll Character Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Dr Jekyll Character Analysis — Jekyll and Hyde (GCSE)',
  description:
    'Dr Jekyll character analysis for GCSE English Literature. Personality, motivation, key quotes, tragic arc and Grade 9 exam paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/dr-jekyll-character-analysis',
  },
  openGraph: {
    title: 'Dr Jekyll Character Analysis — Jekyll and Hyde',
    description: 'The respectable doctor, his hidden duplicity and his tragic downfall.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="dr-jekyll-character-analysis"
      h1={H1}
      headline={'Dr Jekyll Character Analysis — Jekyll and Hyde'}
      schemaDescription={
        'GCSE character analysis of Dr Jekyll in Stevenson\'s Jekyll and Hyde: personality, motivation, key quotes and Grade 9 paragraph.'
      }
      intro={
        'Dr Henry Jekyll is not simply "the good side" of the novella. He is a complex, compromised, self-deceiving figure whose tragic flaw is not evil but the desire to enjoy evil without consequence.'
      }
      related={[
        { title: 'Mr Hyde character analysis', href: '/analysis/jekyll-hyde/mr-hyde-character-analysis' },
        {
          title: '"The very pink of the proprieties"',
          href: '/analysis/jekyll-hyde/the-very-pink-of-the-proprieties',
        },
        {
          title: '"The unjust might go his way"',
          href: '/analysis/jekyll-hyde/the-unjust-might-go-his-way',
        },
        { title: 'Repression theme analysis', href: '/analysis/jekyll-hyde/repression-theme-analysis' },
      ]}
    >
      <h2>Who is Dr Jekyll?</h2>
      <p>
        When Stevenson introduces Jekyll in Chapter 3, he gives us a very specific Victorian
        type: a wealthy, middle-aged doctor with scientific credentials and a fine house in a
        respectable London square. Enfield and Utterson both like him. He is generous, clever
        and hospitable. On the surface, he is <em>"the very pink of the proprieties"</em>.
      </p>
      <p>
        Stevenson even gives us a physical description: <em>"a large, well-made, smooth-faced man
        of fifty, with something of a slyish cast perhaps, but every mark of capacity and
        kindness"</em>. Pay attention to <strong>"slyish"</strong> — a tiny word that plants an
        early suspicion.
      </p>

      <h2>His central motivation</h2>
      <p>
        In Chapter 10, Jekyll confesses his real motive. He was never content to simply suppress
        his <em>"pleasures"</em> — he wanted to <em>enjoy</em> them without damaging his
        reputation. His experiments are not, fundamentally, in the service of science or moral
        improvement. They are in the service of <strong>consequence-free hedonism</strong>.
      </p>

      <Quote
        text="If each, I told myself, could be housed in separate identities, life would be relieved of all that was unbearable; the unjust might go his way, delivered from the aspirations and remorse of his more upright twin."
        speaker="Dr Henry Jekyll"
        chapter="Chapter 10"
      />

      <h2>Key aspects of his character</h2>
      <ul>
        <li>
          <strong>Duplicity</strong>. Jekyll confesses to a <em>"profound duplicity of life"</em>
          that began long before the experiment. He is used to concealing pleasures and
          performing gravity.
        </li>
        <li>
          <strong>Intellectual pride / hubris</strong>. Jekyll believes his science is
          <em> "transcendental"</em> — beyond the ordinary limits of medicine. He is convinced he
          can solve a moral problem with chemistry.
        </li>
        <li>
          <strong>Self-deception</strong>. When Hyde commits the Carew murder, Jekyll momentarily
          renounces him — but slips back into him the first moment of stress. His repentance is
          never stable.
        </li>
        <li>
          <strong>Cowardice</strong>. Stevenson is not subtle: Jekyll is afraid of public shame,
          afraid of exposure, afraid of Lanyon&rsquo;s judgement. The experiment is as much
          about hiding as it is about liberation.
        </li>
        <li>
          <strong>Final tragic awareness</strong>. In the Full Statement, Jekyll becomes, briefly,
          a clear-eyed narrator of his own downfall. This is where the novella earns its status
          as tragedy rather than horror.
        </li>
      </ul>

      <h2>The tragic arc</h2>
      <p>
        Stevenson structures Jekyll&rsquo;s story in four stages. <strong>First</strong>, secret
        hedonism — a man who conceals his pleasures. <strong>Second</strong>, willed duality —
        the moment he drinks the draught and meets Hyde. <strong>Third</strong>, addiction —
        Hyde becomes involuntary, appearing even when Jekyll does not take the drug.
        <strong> Fourth</strong>, collapse — Hyde permanently overwrites Jekyll, forcing him to
        take his own life to kill them both. Each stage is self-inflicted. Stevenson makes sure
        we cannot blame Hyde for Jekyll&rsquo;s fate.
      </p>

      <h2>Key quotations for Jekyll</h2>
      <ul>
        <li>
          <em>"A large, well-made, smooth-faced man of fifty ... every mark of capacity and
          kindness."</em> (Chapter 3) — the respectable surface.
        </li>
        <li>
          <em>"The very pink of the proprieties."</em> (Chapter 10) — public reputation as a trap.
        </li>
        <li>
          <em>"Profound duplicity of life."</em> (Chapter 10) — self-diagnosis of hypocrisy.
        </li>
        <li>
          <em>"Man is not truly one, but truly two."</em> (Chapter 10) — his scientific thesis.
        </li>
        <li>
          <em>"I was slowly losing hold of my original and better self, and becoming slowly
          incorporated with my second and worse."</em> (Chapter 10) — the moment of moral
          collapse.
        </li>
      </ul>

      <h2>Context (AO3)</h2>
      <p>
        Jekyll embodies the contradictions of the late-Victorian professional class: wealth
        built on reputation, a scientific worldview competing with residual religious morality,
        and a strict public/private split that made secret lives not only possible but
        structurally encouraged. Stevenson is not picking on an unusual man. He is using an
        unusually intelligent man to dramatise an entire culture&rsquo;s hypocrisy. Jekyll is
        the novella&rsquo;s real villain — not Hyde.
      </p>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson presents Jekyll as a tragic figure whose downfall is authored not by Hyde but
        by himself. The narrator of the Full Statement confesses a <em>"profound duplicity of
        life"</em> that predates the experiment, so that Hyde becomes the visible symptom of a
        moral split Jekyll had already chosen. By giving Jekyll the vocabulary of scientific
        ambition — <em>"that truth, by whose partial discovery I have been doomed to such a
        dreadful shipwreck"</em> — Stevenson aligns him with the Victorian archetype of the
        hubristic, Frankenstein-adjacent scientist, punished for treating the soul as a
        laboratory problem. Yet the real tragedy is smaller and more human: Jekyll simply wants
        <em> "the unjust" to "go his way"</em>, to have his pleasures without his punishments.
        In making Jekyll that recognisable, Stevenson turns him into an indictment of an entire
        professional class whose respectability runs on secret compartments.
      </p>
    </AnalysisPage>
  )
}
