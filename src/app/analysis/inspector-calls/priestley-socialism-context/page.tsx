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

const SLUG = 'priestley-socialism-context'
const TITLE = 'Priestley\'s socialism and the context of An Inspector Calls'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Context for An Inspector Calls: J. B. Priestley\'s socialism, 1912 vs 1945, the welfare state, WWI and WWII, and why Grade 9 essays need this.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner-written context guide to Priestley\'s socialism and An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Context: Priestley's socialism and the world behind An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Priestley&apos;s socialism — context
        </h1>
        <p className="text-body-sm text-muted-foreground">
          1912, 1945 and the world behind the play
        </p>
        <TagRow tags={['Context', 'Priestley', 'Socialism', '1945']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;We are members of one body. We are responsible for each other.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Who was J. B. Priestley?</SectionHeading>
        <p>
          John Boynton Priestley (1894&ndash;1984) was a Yorkshire-born
          novelist, playwright and broadcaster. He served in the
          First World War, lost close friends in the trenches, and
          spent the rest of his life arguing that Britain owed its
          working people a better society. During the Second World
          War his radio broadcasts were enormously popular and
          helped shape public support for reform. By 1945 he was
          one of the country&apos;s most widely known socialists.
          All of that experience feeds directly into An Inspector
          Calls.
        </p>

        <SectionHeading>Two dates that matter</SectionHeading>
        <p>
          The play is set in 1912 but was written and first
          performed in 1945. Priestley chose these dates deliberately.
          Between them sat two world wars, the Russian Revolution,
          the rise of fascism, the Great Depression, and the
          beginnings of the welfare state. Everything Birling
          confidently predicts in Act One — unsinkable Titanics,
          no war, no labour unrest — was destroyed in the 33-year
          gap. The audience in 1945 had lived through all of it.
        </p>

        <SectionHeading>1912: the Edwardian ceiling</SectionHeading>
        <p>
          The Britain of 1912 had no NHS, no unemployment insurance
          for most workers, no old-age security worth the name, and
          no vote for women. Class power was nearly absolute. Trade
          unions were growing but often violently suppressed.
          Children of the poor still worked in factories and mines.
          Women like Eva Smith had almost no legal protection. The
          Birlings live at the top of this ceiling and cannot see
          how much it is pressing down on the people beneath them.
        </p>

        <SectionHeading>1945: the post-war moment</SectionHeading>
        <p>
          The play opened in the USSR in 1945 (where Priestley could
          get it staged first) and in London in 1946. That year,
          Britain elected a Labour government in a landslide. The
          Beveridge Report had promised to attack the &ldquo;five
          giants&rdquo; of want, disease, ignorance, squalor and
          idleness. The NHS would follow in 1948. The audience for
          An Inspector Calls included returning soldiers, bombed-out
          civilians and newly enfranchised voters. Priestley&apos;s
          message — that society must look after its weakest — was
          meeting a nation willing to listen.
        </p>

        <SectionHeading>Inspector Goole as socialist voice</SectionHeading>
        <p>
          Priestley channels his own politics through Inspector
          Goole. The Inspector&apos;s speeches about collective
          responsibility, &ldquo;one body&rdquo;, and &ldquo;fire
          and blood and anguish&rdquo; are Priestley&apos;s essays
          turned into stage dialogue. His stage presence is
          designed to carry moral authority without feeling like a
          party-political broadcast, so that the message lands
          even on audience members who would never read a Labour
          pamphlet.
        </p>

        <SectionHeading>Why the context matters for your essay</SectionHeading>
        <p>
          Every quotation in the play works better when linked to
          its dates. When Birling mocks socialists as
          &ldquo;cranks&rdquo;, the 1945 audience knew those
          cranks had just helped win the war and were rebuilding
          the country. When Mrs Birling refuses charity, the
          audience was about to vote for a state that would never
          put a woman in her position again. When the Inspector
          warns of fire and blood and anguish, the audience had
          already lived through both wars. Context is not optional
          colour; it is the engine of the play&apos;s meaning.
        </p>

        <SectionHeading>Grade 9 context points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Always connect the 1912 setting with the 1945 audience.
            Priestley writes for both dates at once.
          </li>
          <li>
            Use the Beveridge Report and the 1945 Labour election
            as touchstones when analysing responsibility-themed
            quotations.
          </li>
          <li>
            Link the Inspector&apos;s authority to Priestley&apos;s
            wartime broadcasts — he was a known voice of conscience
            in the 1940s.
          </li>
          <li>
            Avoid vague &ldquo;Priestley was a socialist&rdquo;
            sentences. Tie his politics to a specific policy,
            event, or date.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'Priestley\'s central political argument in the play.',
          },
          {
            href: '/analysis/inspector-calls/class-theme-analysis',
            title: 'Class — theme analysis',
            blurb: 'How the class system shapes the entire play.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'Priestley\'s voice on stage.',
          },
          {
            href: '/analysis/inspector-calls/how-to-write-grade-9-inspector-calls-essay',
            title: 'How to write a Grade 9 essay',
            blurb: 'Turn context into top-band analysis.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
