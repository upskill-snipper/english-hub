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

const SLUG = 'a-chain-of-events-meaning'
const TITLE = '"A chain of events" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of "a chain of events" in An Inspector Calls. Causality, collective guilt, dramatic structure and Grade 9 examiner commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the Inspector\'s "chain of events" metaphor.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the 'chain of events' metaphor in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;A chain of events&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole &middot; Act One
        </p>
        <TagRow tags={['Act One', 'Inspector Goole', 'Causality', 'Structure']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;What happened to her then may have determined what happened to her afterwards.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          The Inspector asks the Birlings to imagine Eva Smith&apos;s
          life as a chain, where each event pulls the next. What Arthur
          Birling did to her in 1910 shaped what Sheila did to her in
          1911, and so on. No single Birling killed her, but each of
          them tightened a link. Priestley is telling the audience that
          responsibility is not all-or-nothing: small, ordinary acts of
          unkindness build into something lethal.
        </p>

        <SectionHeading>The chain metaphor</SectionHeading>
        <p>
          A chain is a useful image because it makes the argument
          visible. You cannot break a chain by denying one link; each
          link is still part of the structure. Priestley uses the
          metaphor to stop the Birlings from passing the blame along.
          The older characters try to say &ldquo;it wasn&apos;t really
          me&rdquo;. The chain metaphor answers: if you were a link,
          you were part of the cause.
        </p>

        <SectionHeading>Narrative structure</SectionHeading>
        <p>
          The play itself is built like a chain. Each act contains a
          fresh confession, and each confession connects to the one
          before. The Inspector interrogates Arthur, then Sheila, then
          Gerald, then Mrs Birling, then Eric — in the exact order
          their actions would have come in Eva&apos;s life. Priestley
          designs the plot to look like a sequence of causes and
          effects, so the audience experiences the chain rather than
          just hearing about it.
        </p>

        <SectionHeading>Context: before the welfare state</SectionHeading>
        <p>
          In 1912 Britain there were few mechanisms to catch a person
          falling through the social net. Losing a job meant losing a
          home. Losing a home meant losing respectability. Losing
          respectability meant losing future employment. One small
          dismissal really could end a life. Priestley wanted his 1945
          audience to understand this — and to build a state that would
          break the chain at the first link with unemployment benefit,
          housing assistance and maternity care.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The word &ldquo;chain&rdquo; gives Priestley something
            physical to compare abstract moral ideas to — perfect for a
            dramatist who needs audiences to see arguments.
          </li>
          <li>
            &ldquo;May have determined&rdquo; is carefully hedged. The
            Inspector does not claim certainty; he invites the
            characters to admit possibility. That invitation is harder
            to refuse than a direct accusation.
          </li>
          <li>
            The metaphor makes collective responsibility unavoidable.
            No single Birling can pretend to be outside the chain.
          </li>
          <li>
            At the end of the play, the chain seems to loop back on
            itself when a real inspector is rumoured to be on the way.
            Priestley hints that the chain is not just linear but
            cyclical, dragging the Birlings back into the process.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This quotation is excellent for essays on structure,
          responsibility or the Inspector&apos;s method of
          interrogation. Use it to explain the logic of Priestley&apos;s
          plot: show how the Inspector moves along the chain of
          Birlings, letting each one inherit a little of the blame the
          previous one dropped. A Grade 9 answer will also link the
          chain imagery to the cyclical ending and argue that
          Priestley&apos;s structure is itself a moral statement.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The collective image that the chain leads into.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'How the Inspector walks the Birlings along the chain.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The theme the chain metaphor exists to support.',
          },
          {
            href: '/analysis/inspector-calls/how-to-write-grade-9-inspector-calls-essay',
            title: 'How to write a Grade 9 essay',
            blurb: 'Turn the chain image into a structural argument.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
