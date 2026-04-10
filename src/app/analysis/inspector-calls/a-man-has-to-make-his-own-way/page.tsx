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

const SLUG = 'a-man-has-to-make-his-own-way'
const TITLE = '"A man has to make his own way" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Analysis of Arthur Birling\'s "a man has to make his own way" speech in An Inspector Calls. Capitalism, individualism, and dramatic irony explained.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner-written GCSE analysis of Birling\'s "a man has to make his own way" speech.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Arthur Birling's 'a man has to make his own way' speech in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;A man has to make his own way&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Arthur Birling &middot; Act One
        </p>
        <TagRow tags={['Act One', 'Arthur Birling', 'Capitalism', 'Dramatic irony']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;A man has to make his own way — has to look after himself.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Arthur Birling is explaining his philosophy of life to his son
          Eric and his future son-in-law Gerald at the dinner table. He is
          saying: every man is responsible only for himself and his own
          family. There is no collective duty to anyone else. Hard work and
          self-interest are what build success. It is the classic argument
          of laissez-faire Edwardian capitalism, and Priestley sets it up in
          Act One precisely so the rest of the play can dismantle it.
        </p>

        <SectionHeading>The voice of Edwardian capitalism</SectionHeading>
        <p>
          Birling belongs to the rising industrial middle class. He owns a
          factory, he is a former Lord Mayor, he is on his way to a
          knighthood. His speech is a kind of manifesto for the world that
          created him. The repetition of &ldquo;has to&rdquo; makes
          self-interest sound like a natural law rather than a personal
          choice. He presents individualism as common sense — something no
          reasonable man could deny. This confident, lecturing tone is part
          of why he is so easy to dislike later in the play.
        </p>

        <SectionHeading>Dramatic irony</SectionHeading>
        <p>
          Priestley surrounds this speech with other Birling lines that the
          audience knows are wrong: the Titanic is &ldquo;absolutely
          unsinkable&rdquo;, war is &ldquo;impossible&rdquo;, there will be
          peace and prosperity for decades. Placing the &ldquo;own way&rdquo;
          line among these failed predictions invites the audience to dismiss
          it by association. If Birling is wrong about ships and wars, why
          would he be right about morality? Priestley uses dramatic irony as
          a tool of persuasion, undermining his antagonist before the
          Inspector even arrives.
        </p>

        <SectionHeading>Structural role: Act One as a thesis to be destroyed</SectionHeading>
        <p>
          The speech is deliberately placed at the dinner party, a moment of
          complacency and celebration. Sheila and Gerald have just got
          engaged, the port is flowing, and Birling is holding forth. The
          doorbell rings mid-speech — the Inspector arrives. Priestley could
          not have designed a more theatrical collision. Every idea Birling
          announces at the table will be attacked within minutes. The
          &ldquo;own way&rdquo; philosophy is literally interrupted by the
          arrival of the play&apos;s moral opposite.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The masculine universal &ldquo;a man&rdquo; excludes women and
            workers. It is a rule for people like Birling himself.
          </li>
          <li>
            The phrase &ldquo;his own way&rdquo; uses the possessive to push
            community and solidarity out of the sentence entirely.
          </li>
          <li>
            The verb &ldquo;look after&rdquo; is later hijacked by the
            Inspector: the Birlings have failed to &ldquo;look after&rdquo;
            Eva Smith in any meaningful sense.
          </li>
          <li>
            Priestley matches this speech to Birling&apos;s pompous stage
            directions (&ldquo;heavy-looking&rdquo;, &ldquo;portentous&rdquo;)
            so his confidence is already slightly ridiculous.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          Use the line whenever you are writing about capitalism,
          individualism, the older generation, or Priestley&apos;s use of
          dramatic irony. The strongest essays treat it as the thesis
          Priestley sets up to demolish: quote it, then show how the
          Inspector, Sheila&apos;s moral growth and the final phone call
          each attack it in turn. Pairing it with &ldquo;we are members of
          one body&rdquo; gives you an instant contrast structure for a
          paragraph on responsibility.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/community-and-all-that-nonsense',
            title: 'Community and all that nonsense',
            blurb: 'Birling\'s second attack on collective responsibility.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'The capitalist patriarch and the target of Priestley\'s critique.',
          },
          {
            href: '/analysis/inspector-calls/class-theme-analysis',
            title: 'Class — theme analysis',
            blurb: 'How class and power run through this speech.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'The 1945 world view Priestley is arguing for.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
