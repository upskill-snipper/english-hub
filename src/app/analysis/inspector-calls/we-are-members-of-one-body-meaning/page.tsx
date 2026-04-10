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

const SLUG = 'we-are-members-of-one-body-meaning'
const TITLE = '"We are members of one body" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Meaning, context and analysis of "We are members of one body" from An Inspector Calls. Religious imagery, collective responsibility and Grade 9 GCSE analysis.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Full GCSE analysis of the Inspector\'s line "We are members of one body" — meaning, context, and examiner-written commentary.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Meaning, context and Grade 9 analysis of Inspector Goole's line 'We are members of one body' from An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;We are members of one body&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole&apos;s final speech &middot; Act Three
        </p>
        <TagRow tags={['Act Three', 'Inspector Goole', 'Responsibility', 'Religious imagery']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;We are members of one body.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          In his final speech before leaving the Birling household, Inspector
          Goole tells the family that every person belongs to the same moral
          community. The &ldquo;one body&rdquo; is humankind itself. Goole is
          arguing that no one can cut themselves off from the consequences of
          their actions, because every individual is part of a larger social
          organism. What one person does to another, the whole body feels.
        </p>

        <SectionHeading>Religious allusion</SectionHeading>
        <p>
          The phrase deliberately echoes the language of Saint Paul in his
          First Letter to the Corinthians, where the early Christians are
          described as many parts forming a single body. Priestley is a
          secular socialist, not a preacher, but he borrows scripture because
          a 1945 audience would recognise it immediately. By putting the
          language of Christian community into the mouth of a mysterious
          inspector, Priestley gives his socialist argument an almost
          religious weight. Goole stops being an ordinary policeman and begins
          to sound like a prophet or a moral judge.
        </p>

        <SectionHeading>Why Priestley uses body imagery</SectionHeading>
        <p>
          A body is a useful metaphor because bodies cannot survive by
          cutting off their limbs. If the arm is wounded, the whole body
          hurts. Arthur Birling has spent Act One insisting that &ldquo;a man
          has to mind his own business and look after himself and his
          own&rdquo; — exactly the opposite philosophy. Goole&apos;s line is
          the direct ideological answer to that earlier speech. Priestley
          structures the play so that the two viewpoints collide, and the
          collective body imagery is meant to win the argument morally.
        </p>

        <SectionHeading>Context: 1912 and 1945</SectionHeading>
        <p>
          The play is set in 1912, on the eve of the First World War, but was
          written and first performed in 1945, just after the Second World
          War and days before the landslide Labour victory that would create
          the NHS and the welfare state. Priestley wanted his audience to
          feel that a country which still behaved like Arthur Birling —
          treating workers and women as disposable — would face catastrophe
          again. The &ldquo;one body&rdquo; metaphor is a direct appeal to
          build a collective, caring society from the ashes of the war.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The plural pronoun &ldquo;we&rdquo; binds Goole and the audience
            together with the Birlings. Nobody is exempt.
          </li>
          <li>
            The definite article &ldquo;one body&rdquo; presents the idea as
            undeniable fact rather than opinion — there is no alternative
            humanity to belong to.
          </li>
          <li>
            The sentence is short, simple and declarative, which gives it
            biblical finality. Priestley lets it sit on stage as a verdict,
            not a debate.
          </li>
          <li>
            It reverses Birling&apos;s Act One metaphor of the world as
            &ldquo;bees in a hive — community and all that nonsense&rdquo;.
            Birling mocked the idea of the collective; Goole makes it
            sacred.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This line works best in essays on responsibility, Priestley&apos;s
          message, or the role of the Inspector as a dramatic device. Pair it
          with Birling&apos;s &ldquo;a man has to mind his own business&rdquo;
          to show the moral arc of the play in a single contrast, or with
          Sheila&apos;s &ldquo;these girls aren&apos;t cheap labour — they&apos;re
          people&rdquo; to show how the younger generation begins to echo
          Goole&apos;s worldview. Top-band answers treat the quotation as
          Priestley&apos;s thesis statement and track how the rest of the
          play either supports or resists it.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/fire-and-blood-and-anguish-meaning',
            title: 'Fire and blood and anguish — meaning',
            blurb:
              'The Inspector\'s warning that follows the "one body" line.',
          },
          {
            href: '/analysis/inspector-calls/we-dont-live-alone',
            title: 'We don\'t live alone',
            blurb:
              'Another key line from Goole\'s closing speech, analysed.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'The moral centre of the play and Priestley\'s mouthpiece.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'How the "one body" metaphor drives the whole play.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
