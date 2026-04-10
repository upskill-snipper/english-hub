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

const SLUG = 'she-asked-for-the-earth'
const TITLE = '"She had only herself to blame" — "she asked for the earth" analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of Mrs Birling\'s "she asked for the earth" line in An Inspector Calls. Class contempt, hyperbole and examiner commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of "she asked for the earth" from An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Mrs Birling's line 'she asked for the earth' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;She asked for the earth&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Mrs Birling &middot; Act Two
        </p>
        <TagRow tags={['Act Two', 'Mrs Birling', 'Hyperbole', 'Class']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;She was claiming elaborate fine feelings... that were simply absurd in a girl in her position.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Mrs Birling complains that Eva Smith wanted too much from her
          charity committee. In reality Eva wanted help during a crisis
          pregnancy; in Mrs Birling&apos;s telling, she &ldquo;asked for
          the earth&rdquo;. The hyperbole exposes Mrs Birling&apos;s
          inability to imagine genuine need. Asking for bread sounds to
          her like asking for the planet. Priestley wants the audience
          to see how a comfortable woman can mistake modest requests
          for outrageous demands when they come from the poor.
        </p>

        <SectionHeading>Hyperbole as prejudice</SectionHeading>
        <p>
          The whole point of the metaphor &ldquo;the earth&rdquo; is
          that it is impossible. No person could ever literally receive
          it. By choosing that image, Mrs Birling turns Eva&apos;s
          reasonable request into something greedy and absurd. Priestley
          uses the hyperbole to show how the Edwardian upper-middle
          class manufactured outrage whenever workers asked for fair
          treatment. Small demands are scaled up until they sound
          revolutionary.
        </p>

        <SectionHeading>The Inspector&apos;s reversal</SectionHeading>
        <p>
          Minutes later in Act Two, the Inspector turns the phrase back
          on Mrs Birling. He suggests that it is in fact better for
          people to ask for more than to ask for less — that aspiration
          is not a sin. Priestley takes Mrs Birling&apos;s insult and
          converts it into a moral ideal within the same scene. That
          reversal is one of the play&apos;s most satisfying rhetorical
          moves and confirms Goole as a master of language.
        </p>

        <SectionHeading>Context: charity vs welfare</SectionHeading>
        <p>
          In 1912 there was no state welfare safety net. Women like Eva
          depended on private charities run by local committees of
          wealthy women. Those committees could ask intrusive personal
          questions and refuse aid for almost any reason. Priestley is
          attacking a system where the poor had to perform gratitude
          and humility in front of people who held their survival in
          their hands. Mrs Birling&apos;s phrase is a symptom of that
          system&apos;s casual cruelty.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            &ldquo;Asked&rdquo; is passive and mild, while &ldquo;the
            earth&rdquo; is cosmic. The gap between the verb and the
            object is where the prejudice hides.
          </li>
          <li>
            &ldquo;A girl in her position&rdquo; assumes that poverty
            should place limits on what a person is allowed to feel or
            want.
          </li>
          <li>
            The Inspector&apos;s reply reshapes the metaphor: wanting
            the earth becomes a sign of dignity, not greed.
          </li>
          <li>
            Priestley has Mrs Birling narrate Eva&apos;s story from
            memory, which shows that she still believes her own version
            even after confession.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This quotation is ideal for essays on class, prejudice, the
          older generation or rhetoric. Pair it with the Inspector&apos;s
          reversal to show Priestley attacking the Edwardian charity
          system from inside its own language. A Grade 9 answer will
          notice that Priestley lets Mrs Birling condemn herself without
          any direct narration — her own words do the work. You can
          link the quote to &ldquo;girls of that class&rdquo; for a
          paragraph on cumulative prejudice.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/its-better-to-ask-for-the-earth',
            title: 'It\'s better to ask for the earth',
            blurb: 'The Inspector\'s reversal of this very phrase.',
          },
          {
            href: '/analysis/inspector-calls/girls-of-that-class-meaning',
            title: 'Girls of that class — meaning',
            blurb: 'Mrs Birling\'s class prejudice in the same scene.',
          },
          {
            href: '/analysis/inspector-calls/class-theme-analysis',
            title: 'Class — theme analysis',
            blurb: 'The class system Priestley attacks in this line.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'How the Inspector rewrites Mrs Birling\'s metaphor.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
