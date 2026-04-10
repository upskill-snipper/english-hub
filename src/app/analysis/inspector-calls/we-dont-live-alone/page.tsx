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

const SLUG = 'we-dont-live-alone'
const TITLE = '"We don\'t live alone" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of the Inspector\'s "we don\'t live alone" in An Inspector Calls. Social responsibility, plural pronouns and examiner commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of "we don\'t live alone" from An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Inspector Goole's line 'we don't live alone' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;We don&apos;t live alone&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole&apos;s final speech &middot; Act Three
        </p>
        <TagRow tags={['Act Three', 'Inspector Goole', 'Responsibility', 'Pronouns']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;We don&apos;t live alone. We are responsible for each other.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          In the heart of his closing speech, the Inspector states the
          moral of the entire play in two short sentences. No one is
          self-sufficient; every life is connected to every other life;
          we owe each other care. It is the clearest statement of
          Priestley&apos;s socialism in the play, and one of the most
          quoted lines in GCSE English Literature. Goole is not
          theorising — he is closing a case by naming the principle that
          the Birlings have broken.
        </p>

        <SectionHeading>Plural pronouns</SectionHeading>
        <p>
          The line repeats &ldquo;we&rdquo; twice in twelve words.
          Priestley wants the plural pronoun to bind everyone on stage
          and in the audience together. The Inspector is not saying
          &ldquo;you Birlings&rdquo;, he is saying &ldquo;all of
          us&rdquo;. That includes the theatre full of 1945 Londoners
          who came for an evening out and are now being asked to accept
          moral responsibility for strangers they will never meet. It
          is a deceptively gentle way of conscripting the audience.
        </p>

        <SectionHeading>Negation as argument</SectionHeading>
        <p>
          The first sentence is a negation: &ldquo;We don&apos;t live
          alone.&rdquo; Priestley begins with what is not true so that
          he can replace it with what is. The structure mirrors the
          whole play: Birling believes we do live alone, and the
          Inspector dismantles that belief. Putting the negation first
          gives the second sentence — the positive statement — the full
          weight of a conclusion.
        </p>

        <SectionHeading>Context: the post-war promise</SectionHeading>
        <p>
          When the play first opened in 1945, Britain had just voted for
          a Labour government committed to the NHS, public housing and
          welfare. The line &ldquo;we are responsible for each
          other&rdquo; reads like a caption for the Beveridge Report,
          which had promised to abolish the five giants of want,
          disease, ignorance, squalor and idleness. Priestley was a
          passionate supporter of Beveridge&apos;s vision, and Goole is
          his onstage advocate. The line is less a universal truth than
          a specific political promise for 1945 Britain.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The monosyllables (&ldquo;we&rdquo;, &ldquo;don&apos;t&rdquo;,
            &ldquo;live&rdquo;, &ldquo;alone&rdquo;) make the line
            punchy and memorable, like a slogan that can be quoted back
            in a manifesto.
          </li>
          <li>
            The contrast with Birling&apos;s earlier &ldquo;own way&rdquo;
            speech is exact — two opposed philosophies in matching
            vocabulary.
          </li>
          <li>
            &ldquo;For each other&rdquo; is reciprocal. Priestley is
            careful not to make the line sound charitable or pitying —
            it is about mutual care, not noblesse oblige.
          </li>
          <li>
            The lines land just before the Inspector leaves. Priestley
            gives the audience no rebuttal because no rebuttal is
            possible; the Inspector exits while the sentences are still
            hanging in the air.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This is one of the most important quotations in the play. Use
          it to conclude paragraphs on responsibility, the Inspector or
          Priestley&apos;s purpose. A Grade 9 essay treats the line as
          Priestley&apos;s thesis statement and traces how every other
          character either accepts or rejects it by the end of the
          play. Pair it with Sheila&apos;s growing moral awareness to
          show Priestley rewarding the characters who listen.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The religious image that sits beside this line.',
          },
          {
            href: '/analysis/inspector-calls/fire-and-blood-and-anguish-meaning',
            title: 'Fire and blood and anguish — meaning',
            blurb: 'The prophetic warning that follows immediately after.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The whole theme summed up in this quotation.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'The moral mouthpiece who speaks these lines.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
