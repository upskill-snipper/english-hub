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

const SLUG = 'public-men-have-responsibilities'
const TITLE = '"Public men... have responsibilities" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of Inspector Goole\'s "public men have responsibilities as well as privileges" speech in An Inspector Calls.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the Inspector\'s rebuke "public men... have responsibilities as well as privileges".',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Inspector Goole's rebuke about public men and responsibilities."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Public men... have responsibilities&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole &middot; Act One
        </p>
        <TagRow tags={['Act One', 'Inspector Goole', 'Power', 'Responsibility']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;Public men... have responsibilities as well as privileges.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          The Inspector reminds Birling that people in positions of power
          owe duties to the people below them. Birling has been bragging
          about his magistrate&apos;s bench, his knighthood prospects and
          his business success. Goole&apos;s reply is simple: those
          privileges come with obligations. The louder you shout about
          your status, the more you must answer for the way you used it.
          It is the first direct confrontation between Birling and the
          Inspector, and it sets the play&apos;s moral agenda.
        </p>

        <SectionHeading>The word &ldquo;public&rdquo;</SectionHeading>
        <p>
          Priestley picks the adjective &ldquo;public&rdquo; deliberately.
          Birling likes to think of himself as a private businessman
          pursuing his own interests. The Inspector relocates him in the
          public sphere, where his decisions affect workers, neighbours
          and the wider community. The sentence reframes Birling&apos;s
          identity against his will: he is not only the head of a family,
          he is a man whose choices reach out into other people&apos;s
          lives.
        </p>

        <SectionHeading>Balance of clauses</SectionHeading>
        <p>
          The grammar is perfectly weighted: privileges on one side,
          responsibilities on the other. Birling only sees the first half
          of that balance. The Inspector&apos;s syntax quietly restores
          the second half. Priestley uses the rhythm of the sentence to
          make the moral argument feel inevitable — once you hear both
          sides of the scale, you cannot pretend only one exists.
        </p>

        <SectionHeading>Context: Edwardian elites and 1945 reform</SectionHeading>
        <p>
          In 1912, &ldquo;public men&rdquo; meant mayors, magistrates,
          MPs and employers — people who had power but faced very little
          democratic accountability. Workers could not easily sue, women
          could not vote, and factory inspectors had limited reach. By
          1945, Britain was ready to ask more of its public men, because
          it had seen what happened when privilege went unchecked. The
          Inspector&apos;s line reads as a manifesto for the kind of
          post-war state Priestley wanted.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The line is one of the Inspector&apos;s first moments of
            authority. Up to this point he has mostly asked questions;
            here he begins to teach.
          </li>
          <li>
            The sentence directly contradicts Birling&apos;s earlier
            &ldquo;a man has to make his own way&rdquo; speech. Priestley
            is giving Act One a debate structure: thesis, antithesis,
            then the rest of the play as evidence.
          </li>
          <li>
            The pause after &ldquo;public men&rdquo; lets Birling (and
            the audience) anticipate a compliment. The swerve into
            &ldquo;responsibilities&rdquo; punctures his vanity.
          </li>
          <li>
            The plural &ldquo;men&rdquo; generalises the rebuke beyond
            Birling himself, implicating every wealthy audience member
            listening in 1945.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          Use this quotation in any essay on responsibility, class or
          the dramatic function of the Inspector. It is especially
          effective as a pivot: start a paragraph with Birling&apos;s
          boast about his status, then cite this line to show the
          Inspector turning the boast inside out. A Grade 9 response
          will also link it to later lines like &ldquo;we are members of
          one body&rdquo; to show how Priestley builds a staircase of
          moral arguments across the three acts.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/a-man-has-to-make-his-own-way',
            title: 'A man has to make his own way',
            blurb: 'The Birling speech this line directly answers.',
          },
          {
            href: '/analysis/inspector-calls/the-inspector-stage-directions',
            title: 'The Inspector\'s stage directions',
            blurb: 'How Priestley prepares Goole to speak with authority.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'The moral voice of the play explained in full.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'How the play builds its central theme across three acts.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
