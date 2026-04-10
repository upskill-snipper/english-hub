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

const SLUG = 'the-inspector-stage-directions'
const TITLE = 'The Inspector\'s stage directions — analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Analysis of the Inspector\'s stage directions in An Inspector Calls: "massiveness, solidity and purposefulness" — meaning, effect, and Grade 9 GCSE commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Priestley\'s introductory stage directions for Inspector Goole.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the Inspector's introductory stage directions in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          The Inspector&apos;s stage directions — analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Priestley&apos;s opening description &middot; Act One
        </p>
        <TagRow tags={['Act One', 'Inspector Goole', 'Stage directions', 'Characterisation']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;An impression of massiveness, solidity and purposefulness.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What Priestley writes</SectionHeading>
        <p>
          When Inspector Goole first steps into the Birling dining room,
          Priestley describes him as giving an impression of massiveness,
          solidity and purposefulness. He is &ldquo;a man in his
          fifties&rdquo;, &ldquo;not a big man&rdquo;, and he speaks
          &ldquo;carefully, weightily&rdquo;. The stage directions do not
          describe his height or his clothes in any detail; instead they
          describe the effect he has on the people around him. Priestley
          is telling directors and readers that the Inspector&apos;s power
          comes from presence rather than physical size.
        </p>

        <SectionHeading>The triad of nouns</SectionHeading>
        <p>
          The three nouns work together to build one idea:
          <em> immovability</em>. Massiveness suggests weight. Solidity
          suggests density — he cannot be pushed aside. Purposefulness
          suggests direction — he is going to do a specific job. Put them
          together and you get a figure who is heavy, dense and on a
          mission. Priestley is designing a dramatic foil to the Birlings,
          who are skittish, self-interested and reactive. Goole is built
          to withstand every rhetorical move the family throws at him.
        </p>

        <SectionHeading>Why &ldquo;impression&rdquo;?</SectionHeading>
        <p>
          Priestley chooses the word &ldquo;impression&rdquo; rather than
          &ldquo;appearance&rdquo;. An impression is something a viewer
          feels, not something the Inspector himself possesses. This
          already hints at the play&apos;s supernatural edge. The
          Inspector may not be a literal man at all; he may be a force,
          a projection, a trick of the audience&apos;s own moral
          imagination. By writing the character as an impression,
          Priestley reserves the right to make him uncanny later.
        </p>

        <SectionHeading>Dramatic staging</SectionHeading>
        <p>
          The Inspector enters just as Birling is boasting about the
          Titanic and his prospective knighthood. The stage directions
          create an instant visual contrast: a dining table full of
          port, laughter and pink light meets a still, heavy figure at
          the doorway. Priestley&apos;s original directions specify that
          the lighting should shift to be &ldquo;brighter and harder&rdquo;
          when the Inspector arrives — the atmosphere itself changes
          around him. The Inspector is therefore as much a scenic event
          as a character.
        </p>

        <SectionHeading>Context: a judge for 1945</SectionHeading>
        <p>
          Priestley was writing in 1945 for an audience emerging from war.
          They needed a figure of authority who could tell the truth
          without flinching. The stage directions essentially cast Goole
          as a moral judge — someone who does not argue but simply
          stands in place while other characters expose themselves.
          That is how the play can convict the Birlings of social
          failure without ever sounding like a political lecture.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The three abstract nouns create a portrait built from
            effects, not features — the audience is told how to feel,
            not what to see.
          </li>
          <li>
            The lighting change is scripted into the stage directions.
            Priestley is choreographing the entire room around the
            Inspector.
          </li>
          <li>
            &ldquo;Massiveness&rdquo; contrasts with the earlier
            description of Birling as &ldquo;heavy-looking, rather
            portentous&rdquo; — pompous rather than powerful.
          </li>
          <li>
            &ldquo;Purposefulness&rdquo; gives the character a verb:
            Goole is moving toward an outcome the audience does not yet
            understand.
          </li>
        </ul>

        <SectionHeading>How to use this in your essay</SectionHeading>
        <p>
          Use the stage directions whenever you write about the
          Inspector as a dramatic device. Strong essays quote the
          directions alongside one of the Inspector&apos;s later
          speeches to show that his words and his staging reinforce each
          other. A Grade 9 answer notices that Priestley builds the
          Inspector&apos;s authority scenically before he speaks, so
          that the audience is already inclined to listen when Goole
          begins to accuse the family.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The Inspector\'s moral sermon in his final speech.',
          },
          {
            href: '/analysis/inspector-calls/public-men-have-responsibilities',
            title: 'Public men have responsibilities',
            blurb: 'The Inspector\'s first clash with Birling.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'A full character study built on these stage directions.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'The foil Priestley designs Goole to crush.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
