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

const SLUG = 'social-responsibility-theme'
const TITLE = 'Social responsibility — theme analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of the social responsibility theme in An Inspector Calls. Priestley\'s thesis, the Inspector, the Birlings and Grade 9 essay tips.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the social responsibility theme in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the social responsibility theme in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Social responsibility — theme analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          The central argument of An Inspector Calls
        </p>
        <TagRow tags={['Theme', 'Responsibility', 'Priestley', 'Socialism']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;We are responsible for each other.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Priestley&apos;s thesis</SectionHeading>
        <p>
          Social responsibility is the central theme of An Inspector
          Calls. Priestley believes that every person&apos;s life is
          tangled up with every other person&apos;s, and that
          pretending otherwise is dangerous. The play exists to argue
          that case. Every character, line and stage direction is
          built around the question of whether people owe one another
          care — and what happens when they refuse to pay that debt.
        </p>

        <SectionHeading>Two opposed worldviews</SectionHeading>
        <p>
          The play sets up a direct contrast between Arthur Birling
          and Inspector Goole. Birling insists on individualism — a
          man must look after himself and his own. The Inspector
          insists on community — we are members of one body, we are
          responsible for each other. Each act uses the plot to test
          these two views against reality, and by the end of Act
          Three the individualist position has been thoroughly
          dismantled.
        </p>

        <SectionHeading>How the plot teaches the theme</SectionHeading>
        <p>
          Each Birling is shown causing harm through what looks like
          ordinary, respectable behaviour: firing a worker, getting
          jealous over a shop assistant, enjoying an affair,
          refusing a charity request, abusing a young woman while
          drunk. None of them intended to kill Eva Smith. Priestley
          shows how a series of small, private choices becomes a
          shared public crime. Responsibility is not about big
          obvious evils; it is about the cumulative effect of
          normal selfishness.
        </p>

        <SectionHeading>The generational split</SectionHeading>
        <p>
          Sheila and Eric accept responsibility; Arthur and Sybil
          refuse. Priestley is arguing that social responsibility
          can be learned — and that the young are better placed to
          learn it. The play ends with Sheila and Eric horrified by
          their family&apos;s denial, while their parents start
          drinking again. The theme is not just about ethics; it is
          about generational hope.
        </p>

        <SectionHeading>The Inspector as advocate</SectionHeading>
        <p>
          Inspector Goole is designed to speak the theme out loud.
          His closing speech is almost a sermon: we don&apos;t live
          alone, we are members of one body, millions of Eva Smiths
          still walk the streets, and ignoring them will lead to
          fire and blood and anguish. The Inspector is less a
          character than a moral megaphone. Priestley uses him to
          deliver his thesis directly to the audience while the
          Birlings stand on stage as the evidence.
        </p>

        <SectionHeading>Context: 1912 and 1945</SectionHeading>
        <p>
          The play is set in 1912 — a time of laissez-faire
          capitalism, grinding inequality and limited welfare. It
          was written in 1945 — a time when Britain was about to
          build a welfare state and create the NHS. The gap between
          the two dates is the size of the lesson Priestley wants
          his audience to have learned. The theme of social
          responsibility is therefore both timeless and extremely
          specific to its moment.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Priestley structures Acts One to Three as a moral
            argument — thesis, antithesis, evidence. The theme is
            not illustrated, it is argued.
          </li>
          <li>
            Stage directions (lighting, entrances, sound) reinforce
            the ethical stakes scenically as well as verbally.
          </li>
          <li>
            The cyclical ending — the possibility of a second
            inspection — traps the older Birlings in the very
            responsibility they tried to dismiss.
          </li>
          <li>
            Eva Smith is absent throughout. She is the empty space
            the theme fills — an everywoman whose memory asks the
            audience to act.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The single line that names the theme.',
          },
          {
            href: '/analysis/inspector-calls/we-dont-live-alone',
            title: 'We don\'t live alone',
            blurb: 'The Inspector\'s clearest statement of the theme.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'The character built to advocate this theme.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'The political background behind the theme.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
