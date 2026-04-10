import type { Metadata } from 'next'
import {
  ArticleJsonLd,
  BackLink,
  ExaminerByline,
  Extract,
  PageContainer,
  Prose,
  RelatedAnalyses,
  RevisionCta,
  SectionHeading,
  TagRow,
} from '../_components/analysis-page'

const SLUG = 'inspector-goole-character-analysis'
const TITLE = 'Inspector Goole — character analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Full GCSE character analysis of Inspector Goole in An Inspector Calls. Name, stage directions, speech, dramatic function and Grade 9 essay tips.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner-written character analysis of Inspector Goole in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Character analysis of Inspector Goole from An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Inspector Goole — character analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          The moral mouthpiece of An Inspector Calls
        </p>
        <TagRow tags={['Character', 'Inspector Goole', 'Dramatic device', 'Responsibility']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;We don&apos;t live alone. We are responsible for each other.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Who is Inspector Goole?</SectionHeading>
        <p>
          Inspector Goole is the mysterious visitor who arrives at the
          Birling house in Act One and spends the next two hours
          questioning each member of the family about their part in
          Eva Smith&apos;s suicide. He is not an ordinary police
          officer. He already knows the answers before he asks the
          questions, he controls the pacing of the interrogation, and
          his name sounds like &ldquo;ghoul&rdquo;. By the end of the
          play, it is unclear whether he was a man at all. Priestley
          designs him to be part inspector, part judge, part prophet.
        </p>

        <SectionHeading>Name and meaning</SectionHeading>
        <p>
          The name &ldquo;Goole&rdquo; is a deliberate pun on
          &ldquo;ghoul&rdquo; — a spirit that haunts the living. It is
          also phonetically close to &ldquo;Google&rdquo; in modern
          English, although that is coincidence. Priestley wants the
          audience to feel that the Inspector is not quite of this
          world. Combined with the supernatural telephone call at the
          end, the name nudges us toward reading him as a symbol of
          conscience rather than a literal visitor.
        </p>

        <SectionHeading>Stage directions and presence</SectionHeading>
        <p>
          Priestley describes the Inspector as giving an impression of
          &ldquo;massiveness, solidity and purposefulness&rdquo;. He is
          not physically huge, but he is immovable. He speaks
          &ldquo;carefully, weightily&rdquo; and stares hard at the
          person he is addressing. These directions make him feel like
          a stage presence before he says a word. In a room full of
          skittish, interrupting Birlings, he is the only still object.
        </p>

        <SectionHeading>Method of interrogation</SectionHeading>
        <p>
          The Inspector works one person at a time, showing each a
          photograph of Eva Smith and waiting for them to incriminate
          themselves. He refuses to let anyone jump ahead. This
          deliberate pacing controls the drama: the audience can only
          know what the current character knows. Priestley uses the
          Inspector&apos;s method to build the play&apos;s rising
          moral pressure, moving from Arthur to Sheila to Gerald to
          Mrs Birling to Eric in the exact order of Eva&apos;s life.
        </p>

        <SectionHeading>Speech and rhetoric</SectionHeading>
        <p>
          Goole starts quietly, asking simple questions. As he
          uncovers more, his language becomes biblical and prophetic.
          By the end he is talking about &ldquo;fire and blood and
          anguish&rdquo; and insisting that &ldquo;we are members of
          one body&rdquo;. The shift from interrogator to preacher is
          one of the clearest markers of his dramatic function: he
          exists to deliver a sermon, and Priestley uses the crime
          plot to earn the right to preach it.
        </p>

        <SectionHeading>A dramatic device</SectionHeading>
        <p>
          The Inspector is less a rounded character than a function.
          He has no backstory, no family, no opinions about anything
          outside Eva&apos;s case. Priestley gives him only the
          qualities a moral force needs: authority, patience and
          conviction. This is why he can exit the play while leaving
          the audience still unsure whether he was real. Priestley
          wants us to worry less about the man and more about the
          message.
        </p>

        <SectionHeading>Context: Priestley&apos;s mouthpiece</SectionHeading>
        <p>
          Priestley was a committed socialist writing at the end of
          the Second World War. He believed Britain had to become a
          society that looked after its weakest members. Inspector
          Goole speaks that argument directly into the dinner room of
          an Edwardian capitalist. You can read almost every line of
          Goole&apos;s dialogue as a Priestley essay compressed into
          a few short sentences.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            He is a structural catalyst. The play would not move
            without his questions, and the family would not change
            without his pressure.
          </li>
          <li>
            His name, pacing, lighting and speech all work together.
            Priestley writes him scenically as well as verbally.
          </li>
          <li>
            He is morally binary but rhetorically flexible — he can
            shift from gentle sympathy with Sheila to hard judgement
            with Mrs Birling within a single scene.
          </li>
          <li>
            The ambiguity about whether he is real is the point.
            Priestley wants conscience to feel uncanny enough to
            unsettle the audience.
          </li>
        </ul>

        <SectionHeading>How to use him in your essay</SectionHeading>
        <p>
          When writing about the Inspector, always connect character
          to purpose. Do not describe his behaviour without asking
          what Priestley is arguing through him. The strongest essays
          treat him as both a dramatic device and a political
          argument, and use his stage directions, his speeches and
          his exits as evidence for the same thesis: Priestley wants
          his audience to accept collective responsibility before
          another catastrophe forces it on them.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/the-inspector-stage-directions',
            title: 'The Inspector\'s stage directions',
            blurb: 'The directions that set up his authority on stage.',
          },
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The Inspector\'s central moral statement.',
          },
          {
            href: '/analysis/inspector-calls/fire-and-blood-and-anguish-meaning',
            title: 'Fire and blood and anguish — meaning',
            blurb: 'His prophetic warning in the final speech.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The theme the Inspector exists to advocate.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
