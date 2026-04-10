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

const SLUG = 'community-and-all-that-nonsense'
const TITLE = '"Community and all that nonsense" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Analysis of Birling\'s "community and all that nonsense" in An Inspector Calls. What the line shows about capitalism, dismissal, and Priestley\'s satire.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Birling\'s dismissal of community in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Birling's 'community and all that nonsense' line from An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Community and all that nonsense&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Arthur Birling &middot; Act One
        </p>
        <TagRow tags={['Act One', 'Arthur Birling', 'Capitalism', 'Satire']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;Community and all that nonsense.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Birling is mocking the idea that people owe anything to each other
          outside their own family. In his dinner-party lecture, he groups
          &ldquo;community&rdquo; with &ldquo;cranks&rdquo; and socialists,
          treating the whole concept as childish or absurd. In five words he
          rejects the entire foundation of the welfare state Priestley wants
          his 1945 audience to build. It is one of the clearest statements
          of the individualistic worldview that the Inspector will spend the
          rest of the play demolishing.
        </p>

        <SectionHeading>The word &ldquo;nonsense&rdquo;</SectionHeading>
        <p>
          Calling something &ldquo;nonsense&rdquo; is a rhetorical trick:
          instead of arguing against it, you dismiss it as not worth arguing
          about. Birling uses this trick on the most serious idea in the
          play. The carelessness of the word exposes him — he cannot
          actually refute social responsibility, so he laughs at it instead.
          Priestley wants the audience to see that confident people who
          refuse to debate are often hiding from evidence.
        </p>

        <SectionHeading>Contrast with the Inspector</SectionHeading>
        <p>
          The Inspector&apos;s final speech will insist that &ldquo;we are
          members of one body&rdquo; and that ignoring this truth will lead
          to &ldquo;fire and blood and anguish&rdquo;. Priestley has built
          the entire argumentative structure of the play around the contrast
          between Birling&apos;s dismissal and the Inspector&apos;s
          conviction. The louder Birling calls community nonsense, the more
          shocking it feels when the consequences of rejecting community
          walk through his front door.
        </p>

        <SectionHeading>Context: 1912 vs 1945</SectionHeading>
        <p>
          In 1912, the year the play is set, Britain had very little
          social welfare. Wages were low, strikes were crushed, and women
          could not vote. In 1945, when the play was first performed, the
          country was about to elect a Labour government that would create
          the NHS, family allowances and unemployment insurance. A 1945
          audience would hear Birling&apos;s sneer as precisely the attitude
          they had just voted out. Priestley gives Birling this line so the
          audience can feel their own moral progress since 1912.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Priestley uses Birling&apos;s dismissive tone as evidence of
            capitalist complacency. The shorter and more confident the
            sentence, the more it will be undercut later.
          </li>
          <li>
            The conjunction &ldquo;and all that&rdquo; bundles community
            with unrelated ideas as though they are a single pile of
            rubbish. It is a linguistic gesture of contempt.
          </li>
          <li>
            Birling uses this phrase just as the Inspector&apos;s doorbell
            rings. The timing is deliberate: community arrives to answer
            him.
          </li>
          <li>
            The line is structurally paired with the play&apos;s closing
            phone call. Birling will be forced to confront the community he
            sneered at when a second inspector is reported to be on the
            way.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This quotation is powerful in paragraphs on capitalism,
          individualism, the older generation, or dramatic structure. A
          top-band approach is to read Birling&apos;s dismissal as a setup:
          quote it early in your argument, then show how the Inspector
          gradually forces each Birling to admit that community is not
          nonsense. The line is also useful for comparing Arthur and Sheila
          — she ends the play believing in community, while he still calls
          it nonsense. That contrast embodies Priestley&apos;s generational
          theme.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/a-man-has-to-make-his-own-way',
            title: 'A man has to make his own way',
            blurb: 'The first half of Birling\'s capitalist manifesto.',
          },
          {
            href: '/analysis/inspector-calls/cranks-walking-out-meaning',
            title: 'Cranks walking out — meaning',
            blurb: 'Birling\'s contempt for socialists and reformers.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'The full case against Priestley\'s pompous capitalist.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The idea Birling rejects and the Inspector insists on.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
