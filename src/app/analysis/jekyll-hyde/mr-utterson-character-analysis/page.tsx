import type { Metadata } from 'next'
import { AnalysisPage, Quote } from '../_components/AnalysisPage'

const H1 = 'Mr Utterson Character Analysis — Jekyll and Hyde'

export const metadata: Metadata = {
  title: 'Mr Utterson Character Analysis — Jekyll and Hyde (GCSE)',
  description:
    'Mr Utterson character analysis for GCSE. The lawyer-narrator, discretion, reliability, key quotes and Grade 9 exam paragraph.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/jekyll-hyde/mr-utterson-character-analysis',
  },
  openGraph: {
    title: 'Mr Utterson Character Analysis — Jekyll and Hyde',
    description: 'How Stevenson uses Utterson as the reliable lawyer-narrator of his Gothic mystery.',
  },
}

export default function Page() {
  return (
    <AnalysisPage
      slug="mr-utterson-character-analysis"
      h1={H1}
      headline={'Mr Utterson Character Analysis — Jekyll and Hyde'}
      schemaDescription={
        'GCSE character analysis of Mr Utterson in Jekyll and Hyde: discretion, profession, reliability and Grade 9 paragraph.'
      }
      intro={
        'Utterson is the lawyer whose point of view we share for most of the novella. Stevenson chooses him very carefully — and the choice tells us a great deal about how the story wants to be read.'
      }
      related={[
        { title: 'Dr Jekyll character analysis', href: '/analysis/jekyll-hyde/dr-jekyll-character-analysis' },
        {
          title: '"The polite fiction of the law"',
          href: '/analysis/jekyll-hyde/the-polite-fiction-of-the-law',
        },
        {
          title: '"Satan\'s signature upon a face"',
          href: '/analysis/jekyll-hyde/satans-signature-on-a-face',
        },
        { title: 'Victorian society context', href: '/analysis/jekyll-hyde/victorian-society-context' },
      ]}
    >
      <h2>Who is Mr Utterson?</h2>
      <p>
        Stevenson opens the novella with his most famous description:
      </p>
      <Quote
        text="Mr Utterson the lawyer was a man of a rugged countenance, that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary, and yet somehow lovable. At friendly meetings, and when the wine was to his taste, something eminently human beaconed from his eye; something indeed which never found its way into his talk, but which spoke not only in these silent symbols of the after-dinner face, but more often and loudly in the acts of his life."
        chapter="Chapter 1"
      />

      <h2>Why a lawyer?</h2>
      <p>
        Stevenson could have narrated this story through any respectable professional — a
        doctor, a journalist, a clergyman. Choosing a lawyer is a loaded decision.
      </p>
      <ul>
        <li>
          A lawyer is trained to read documents carefully and sceptically. The novella is
          literally built out of legal and epistolary documents (Jekyll&rsquo;s will,
          Lanyon&rsquo;s letter, Jekyll&rsquo;s Full Statement). Utterson is the right reader for
          them.
        </li>
        <li>
          A lawyer represents <em>respectability</em>, discretion and the rule of social norms.
          If even Utterson cannot ignore Hyde, the problem must be real.
        </li>
        <li>
          A lawyer is paid to <em>not judge prematurely</em>. Utterson&rsquo;s slowness to act is
          not cowardice but professional habit — and Stevenson uses that habit to prolong the
          Gothic suspense.
        </li>
      </ul>

      <h2>Key character traits</h2>
      <ul>
        <li>
          <strong>Discreet</strong>. Utterson famously keeps his friends&rsquo; secrets. He
          hates gossip, and he refuses to repeat Enfield&rsquo;s story beyond necessity. In
          Victorian terms, this makes him trustworthy; in ours, complicit.
        </li>
        <li>
          <strong>Loyal</strong>. He risks his own reputation to protect Jekyll — from the will,
          from the police, from himself. Stevenson presents loyalty as morally ambiguous.
        </li>
        <li>
          <strong>Repressed but warm</strong>. The famous description says Utterson is
          <em> "cold, scanty and embarrassed in discourse"</em> yet <em>"somehow lovable"</em>.
          He cannot express affection, but it exists.
        </li>
        <li>
          <strong>A reluctant detective</strong>. The novella&rsquo;s plot is driven by
          Utterson&rsquo;s detective work, yet he keeps hoping each new clue will prove
          <em> innocent</em>. He wants to rescue his friend, not solve the crime.
        </li>
        <li>
          <strong>Rational</strong>. Utterson reaches for legal, medical and rational
          explanations first, and only gives in to supernatural/religious language when those
          fail.
        </li>
      </ul>

      <h2>The narrative function</h2>
      <p>
        Stevenson uses Utterson as a <strong>reliable narrator</strong> precisely because he is
        so cautious. If the Gothic horror were filtered through an emotional or impressionable
        witness, we would not believe it. Utterson&rsquo;s scepticism guarantees that when even
        he reaches for phrases like <em>"Satan&rsquo;s signature"</em>, we have to take them
        seriously.
      </p>

      <h2>Utterson's limitations</h2>
      <p>
        The novella is also quietly critical of Utterson. His discretion is part of the culture
        that enables Jekyll&rsquo;s double life. By treating every scandal as something to be
        hushed up, he participates in the structure of respectability that produced Hyde in the
        first place. Enfield&rsquo;s motto — <em>"the more it looks like Queer Street, the less
        I ask"</em> — is one Utterson clearly lives by. Stevenson neither condemns him nor
        exempts him; he is a reliable narrator but a morally compromised citizen.
      </p>

      <h2>Key quotations for Utterson</h2>
      <ul>
        <li>
          <em>"A man of a rugged countenance, that was never lighted by a smile."</em> (Chapter 1)
        </li>
        <li>
          <em>"I incline to Cain\'s heresy; I let my brother go to the devil in his own way."</em>
          (Chapter 1)
        </li>
        <li>
          <em>"If he be Mr Hyde, I shall be Mr Seek."</em> (Chapter 2)
        </li>
        <li>
          <em>"O my poor old Harry Jekyll, if ever I read Satan\'s signature upon a face, it is
          on that of your new friend."</em> (Chapter 2)
        </li>
        <li>
          <em>"We have come too late, whether to save or punish."</em> (Chapter 8)
        </li>
      </ul>

      <h2>Exam-ready paragraph</h2>
      <p>
        Stevenson chooses a lawyer as his narrator because only a lawyer could make the
        novella&rsquo;s Gothic material survive Victorian scepticism. Utterson&rsquo;s famous
        description — <em>"cold, scanty and embarrassed in discourse"</em> yet <em>"somehow
        lovable"</em> — marks him as a man of restrained emotion and trained judgement, exactly
        the kind of witness a respectable reader would believe. His self-confessed
        <em> "Cain\'s heresy"</em>, his willingness to let his <em>"brother go to the devil in
        his own way"</em>, makes him a reliable narrator precisely because he is not eager to
        condemn. Yet Stevenson also uses Utterson to indict an entire culture of professional
        discretion: the very silence that makes him trustworthy is the silence that allowed
        Jekyll to build a double life in the first place. By the time Utterson reaches for
        <em> "Satan\'s signature upon a face"</em>, a phrase outside his professional register,
        Stevenson has shown that even the most rational Victorian narrator has to abandon his
        vocabulary when confronted with what respectability has quietly grown in its own back
        garden.
      </p>
    </AnalysisPage>
  )
}
