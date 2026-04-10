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

const SLUG = 'cranks-walking-out-meaning'
const TITLE = '"Cranks walking out" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of Birling\'s "cranks walking out" in An Inspector Calls. Contempt for socialism, dramatic irony and examiner commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Birling\'s contempt for "cranks" in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Birling's 'cranks walking out' speech in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Cranks walking out&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Arthur Birling &middot; Act One
        </p>
        <TagRow tags={['Act One', 'Arthur Birling', 'Satire', 'Capitalism']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;A lot of wild talk... cranks... like bees in a hive.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Birling is warning Gerald about socialists, trade unionists
          and other reformers he has read about in the papers. He calls
          them &ldquo;cranks&rdquo; — eccentrics with silly, impractical
          ideas — and mocks their talk of community by comparing humans
          to &ldquo;bees in a hive&rdquo;. For Birling, human life
          should be individual competition, not collective cooperation.
          The line is part of his dinner-party lecture setting out the
          philosophy that the rest of the play will destroy.
        </p>

        <SectionHeading>The word &ldquo;cranks&rdquo;</SectionHeading>
        <p>
          &ldquo;Crank&rdquo; is a dismissive Edwardian word for
          someone with unconventional beliefs. Labelling reformers as
          cranks is a rhetorical shortcut: you do not have to engage
          with their arguments, you can simply say they are odd.
          Priestley reaches for this word because it captures the
          lazy confidence of the Edwardian establishment. It is also
          darkly funny in 1945, when the &ldquo;cranks&rdquo; Birling
          dismissed had just helped build the NHS.
        </p>

        <SectionHeading>The bee metaphor</SectionHeading>
        <p>
          Birling compares collectivists to &ldquo;bees in a hive&rdquo;
          to make them sound small, mindless and conformist. Priestley
          lets the metaphor rebound. A hive is actually an example of
          coordinated, highly productive community life. Birling has
          chosen an image that proves the opposite of his point. A
          sharp examiner reading will notice that his contempt betrays
          his ignorance: he has not thought hard enough about his own
          simile.
        </p>

        <SectionHeading>Dramatic irony in the dinner speech</SectionHeading>
        <p>
          This line sits inside the speech where Birling also predicts
          that the Titanic will not sink and that there will not be a
          war. By 1945, the audience knows he was wrong about both.
          Priestley wraps the &ldquo;cranks&rdquo; sneer in those
          famous errors so that anyone hearing it will already be
          primed to dismiss it. Dramatic irony is turned into an
          argumentative weapon.
        </p>

        <SectionHeading>Context: 1912 and the rise of socialism</SectionHeading>
        <p>
          The early 1910s saw real political change in Britain: the
          Liberal welfare reforms, the rise of the Labour movement,
          major industrial strikes and the suffragette campaign.
          Birling is right that the country was full of &ldquo;wild
          talk&rdquo;, but he is wrong to dismiss it. Priestley is
          writing from the future; he knows that the &ldquo;cranks&rdquo;
          eventually became the governing majority. The line is his
          way of telling the audience that history vindicates the
          reformers, not the Birlings.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Priestley makes the target of Birling&apos;s sneer vague
            (&ldquo;these fellows&rdquo;, &ldquo;a lot of wild
            talk&rdquo;) because Birling has not listened carefully.
            The vagueness exposes his laziness.
          </li>
          <li>
            The metaphor of the hive backfires. Priestley allows
            Birling to choose the image and then shows the audience
            what the image really suggests.
          </li>
          <li>
            The speech is structurally placed just before the
            Inspector arrives, so Birling&apos;s attack on reformers
            is immediately answered by a reformer in the flesh.
          </li>
          <li>
            &ldquo;Cranks&rdquo; is a word the 1945 audience will
            associate with people they just voted for, turning
            Birling&apos;s insult into a compliment.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          Use this line in essays on Birling, capitalism, socialism or
          dramatic irony. A strong paragraph quotes the hive metaphor,
          then shows how Priestley undermines it within the same
          scene. Pair it with &ldquo;a man has to make his own way&rdquo;
          and &ldquo;community and all that nonsense&rdquo; to build a
          triptych of capitalist statements that the Inspector
          dismantles one by one.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/a-man-has-to-make-his-own-way',
            title: 'A man has to make his own way',
            blurb: 'The second part of Birling\'s capitalist sermon.',
          },
          {
            href: '/analysis/inspector-calls/community-and-all-that-nonsense',
            title: 'Community and all that nonsense',
            blurb: 'Birling\'s short, sharp dismissal of community.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'The political world Birling is sneering at.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'A deeper study of Priestley\'s capitalist target.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
