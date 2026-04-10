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

const SLUG = 'class-theme-analysis'
const TITLE = 'Class — theme analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of the class theme in An Inspector Calls. Edwardian hierarchy, capital vs labour, Birling, Croft, Eva Smith and Grade 9 tips.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the class theme in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the class theme in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Class — theme analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Priestley&apos;s critique of the Edwardian class system
        </p>
        <TagRow tags={['Theme', 'Class', 'Capitalism', 'Edwardian Britain']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;These girls aren&apos;t cheap labour — they&apos;re people.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What the theme is about</SectionHeading>
        <p>
          Class is everywhere in An Inspector Calls. The play tracks
          how a wealthy family built on industrial profit treats a
          young working-class woman who crosses their path. Priestley
          wants the audience to see that class is not just about
          income; it is about who gets to be seen as a full human
          being. The Birlings live behind the privilege of never
          having to notice anyone below them. The Inspector forces
          them to notice.
        </p>

        <SectionHeading>Three social tiers</SectionHeading>
        <p>
          The play presents three layers of Edwardian society. At
          the top are the Crofts — aristocratic, established,
          effortlessly wealthy. Below them, the Birlings — rising
          industrial middle class, anxious about their status and
          desperate to climb higher. Below them, Eva Smith — the
          unseen working class, dependent on wages and charity.
          Priestley makes the anxieties of the middle tier most
          visible because his audience was full of them.
        </p>

        <SectionHeading>Capital vs labour</SectionHeading>
        <p>
          Arthur Birling owns a factory. Eva Smith works there. When
          Eva helps lead a request for higher wages, Birling sacks
          her. The exchange is a perfect miniature of the
          relationship between capital and labour in 1912. The
          employer holds all the power, the worker has none, and the
          system treats a fair request as an act of mutiny.
          Priestley wants the audience to see that a society which
          treats ordinary requests as rebellion is not stable.
        </p>

        <SectionHeading>Mrs Birling and charity</SectionHeading>
        <p>
          The other pole of class violence in the play is not the
          factory but the charity committee. Mrs Birling refuses
          Eva&apos;s request for help because she thinks the girl has
          &ldquo;absurd&rdquo; airs above her station. Priestley uses
          this scene to attack the idea that private charity can
          replace state welfare. When the person holding the purse
          strings is a snob, charity becomes a weapon.
        </p>

        <SectionHeading>Language of class</SectionHeading>
        <p>
          The characters&apos; class positions are encoded in how
          they speak. Arthur Birling uses pompous phrases and
          dramatic irony. Mrs Birling uses polite diction to say
          cruel things. Sheila starts slangy and becomes direct.
          Eva&apos;s voice is never heard at all. Priestley turns
          her silence into an accusation: a girl of her class gets
          no stage time, because a girl of her class got no voice
          in real Edwardian Britain either.
        </p>

        <SectionHeading>Context: Edwardian hierarchy and 1945 reform</SectionHeading>
        <p>
          In 1912, Britain was still a rigidly hierarchical society
          with no NHS, no unemployment insurance, and almost no
          rights for workers. The Labour movement was still a
          minority force. By 1945, the country was ready to rewrite
          the rules. Priestley&apos;s critique of class in the play
          is both a look back at Edwardian injustice and a warning
          to the post-war audience that going back to the old
          system would be catastrophic.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Class runs through the whole structure of the play: who
            enters the stage, who is absent, who has the longest
            speeches, who gets interrupted.
          </li>
          <li>
            The three tiers of Croft, Birling and Smith give you a
            ready-made framework for an essay paragraph.
          </li>
          <li>
            Priestley shows both the boss (Arthur) and the charity
            woman (Sybil) as class enforcers — class violence is
            not only economic.
          </li>
          <li>
            Eva&apos;s absence from the stage is a class statement
            in itself. Priestley denies her voice to mirror the
            society that denied it first.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/girls-of-that-class-meaning',
            title: 'Girls of that class — meaning',
            blurb: 'The clearest statement of class prejudice in the play.',
          },
          {
            href: '/analysis/inspector-calls/a-man-has-to-make-his-own-way',
            title: 'A man has to make his own way',
            blurb: 'Birling\'s capitalist class philosophy.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'The embodiment of Edwardian middle-class ambition.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'The historical backdrop of class in the play.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
