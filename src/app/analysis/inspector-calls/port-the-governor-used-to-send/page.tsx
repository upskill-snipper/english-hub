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

const SLUG = 'port-the-governor-used-to-send'
const TITLE = '"The same port your father gets" — "Finchley" port analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of Birling\'s port boast in An Inspector Calls — status, class, and Priestley\'s satire of the Edwardian middle class.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Birling\'s port-boast opening the play.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Birling's port boast in the opening of An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Birling&apos;s port boast — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Arthur Birling &middot; Act One, opening scene
        </p>
        <TagRow tags={['Act One', 'Arthur Birling', 'Class', 'Status anxiety']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;Exactly the same port your father gets from him.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What is happening</SectionHeading>
        <p>
          At the very start of Act One, Arthur Birling tells Gerald
          Croft that the port at their celebration dinner is exactly the
          same port his father, the wealthy and aristocratic Sir George
          Croft, buys. It is a tiny moment that tells the audience
          everything about Birling&apos;s social world. He cannot
          simply enjoy a good drink; he has to mention its pedigree, and
          he has to anchor its pedigree to a superior family. The line
          is our first glimpse of his status anxiety.
        </p>

        <SectionHeading>The Edwardian class ladder</SectionHeading>
        <p>
          The Birlings are new money. Arthur owns a factory, he has
          been Lord Mayor and he is lobbying for a knighthood. The
          Crofts are old money and higher up the social ladder.
          Birling&apos;s repeated references to the Crofts throughout
          Act One — the port, the expected merger, the knighthood —
          show that he is obsessed with closing the gap between the two
          families. Priestley is not mocking him for trying to rise;
          Priestley is showing that social climbing has made him
          incapable of seeing anyone below him.
        </p>

        <SectionHeading>Priestley&apos;s satire</SectionHeading>
        <p>
          The port line is a joke at Birling&apos;s expense. A man who
          is completely comfortable in his class does not need to
          explain where his port comes from. Priestley gives Birling a
          small, almost embarrassing detail to prove that he is not, in
          fact, as secure as he thinks. The entire opening scene is
          built out of moments like this. Priestley wants the audience
          to laugh at Birling before the Inspector arrives, so that his
          later moral collapse feels earned rather than sudden.
        </p>

        <SectionHeading>Gerald&apos;s silence</SectionHeading>
        <p>
          Gerald&apos;s reaction is just as revealing as Birling&apos;s
          boast. He barely acknowledges the port, because for him it is
          normal. The silence marks the gulf between the families
          without a single direct statement. Priestley trusts his
          audience to notice the missing reply. A reader preparing a
          top-band essay should notice it too: who does not speak can
          matter as much as who does.
        </p>

        <SectionHeading>Context: Edwardian dinner parties</SectionHeading>
        <p>
          Dinner parties in 1912 were a form of public performance.
          The host chose the wines, the cigars and the seating to
          signal his social ambition. Priestley, writing in 1945, has
          seen the British middle class spend generations treating
          mealtimes like auditions for a higher rank. The port boast
          is a way of summarising that whole culture in a single line.
          It is also an efficient way to establish Arthur Birling as a
          man who will try to impress the Inspector for exactly the
          same reason — by name-dropping power.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The adverb &ldquo;exactly&rdquo; betrays insecurity. A
            confident host would not need precision; an anxious one
            would.
          </li>
          <li>
            &ldquo;From him&rdquo; refers to the same wine merchant and
            implies membership of a shared social circle. Birling is
            shopping for access, not just wine.
          </li>
          <li>
            The line comes in a stage direction marked by laughter and
            pink light — a vulnerable calm that the Inspector will
            shatter.
          </li>
          <li>
            Arthur&apos;s status games in Act One are punished in Act
            Three, when the knighthood he hopes for depends on not
            causing a scandal.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          Use this quotation in essays on class, Mr Birling, or
          Priestley&apos;s satirical method. A sophisticated reading
          treats the line as the play&apos;s first exhibit: Priestley
          is showing that Birling&apos;s moral failures begin with his
          social climbing. Pair it with the knighthood references later
          in the play to trace Arthur&apos;s status obsession as a
          running theme.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/a-man-has-to-make-his-own-way',
            title: 'A man has to make his own way',
            blurb: 'Birling\'s capitalist speech from the same scene.',
          },
          {
            href: '/analysis/inspector-calls/cranks-walking-out-meaning',
            title: 'Cranks walking out — meaning',
            blurb: 'Birling\'s dinner-table contempt for socialists.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'A full portrait of Priestley\'s social climber.',
          },
          {
            href: '/analysis/inspector-calls/class-theme-analysis',
            title: 'Class — theme analysis',
            blurb: 'The class system that makes Birling so anxious.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
