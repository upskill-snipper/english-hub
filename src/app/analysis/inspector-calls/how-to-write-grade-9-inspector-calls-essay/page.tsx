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

const SLUG = 'how-to-write-grade-9-inspector-calls-essay'
const TITLE = 'How to write a Grade 9 An Inspector Calls essay'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Step-by-step guide to writing a Grade 9 An Inspector Calls essay. Thesis, planning, integrated quotation, context and examiner tips from The English Hub.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'How to plan, structure and write a Grade 9 essay on An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Guide to writing a Grade 9 An Inspector Calls essay."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          How to write a Grade 9 An Inspector Calls essay
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Thesis, planning, quotation and context
        </p>
        <TagRow tags={['Essay writing', 'Grade 9', 'Exam technique', 'GCSE']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;We are responsible for each other.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Start with a thesis, not a summary</SectionHeading>
        <p>
          The single biggest step from Grade 7 to Grade 9 is having
          a thesis. A thesis is a one-sentence answer to the
          question, stated in your introduction and proved across
          the whole essay. A Grade 7 student writes &ldquo;Priestley
          presents responsibility in many ways&rdquo;. A Grade 9
          student writes &ldquo;Priestley presents responsibility as
          a political inheritance the younger generation must
          accept in order to prevent the catastrophes of their
          parents&rdquo;. Same topic, completely different level of
          control.
        </p>

        <SectionHeading>Plan in three moves, not five paragraphs</SectionHeading>
        <p>
          Stop writing five paragraphs of separate ideas. Plan
          instead around three connected moves. Move one establishes
          your thesis with one quotation. Move two complicates it
          with a contrasting character or moment. Move three
          resolves the tension and connects back to Priestley&apos;s
          purpose and context. Examiners reward clear argumentative
          arcs. Three moves make the arc visible.
        </p>

        <SectionHeading>Integrate your quotations</SectionHeading>
        <p>
          Never drop quotations. Integrate them into your own
          sentences. Instead of &ldquo;Birling says, &lsquo;A man
          has to make his own way.&rsquo;&rdquo;, write
          &ldquo;Birling&apos;s claim that a man must &lsquo;make
          his own way&rsquo; is delivered with the confident
          declarative of a man who mistakes his class position for
          a natural law.&rdquo; Every quotation should be inside an
          argumentative sentence. If you can remove the quotation
          marks and still have a readable sentence, your
          integration is good enough.
        </p>

        <SectionHeading>Short quotes only</SectionHeading>
        <p>
          Top-band essays use short, targeted quotations — often
          just one or two words inside your own sentence. Long
          block quotations waste time and look like copy-paste.
          Pick the key adjective or verb, not the whole line.
          &ldquo;Massiveness&rdquo;, &ldquo;cranks&rdquo;,
          &ldquo;nonsense&rdquo;, &ldquo;anguish&rdquo;: each of
          these single words can carry a paragraph of analysis on
          its own.
        </p>

        <SectionHeading>Zoom in on language, structure and form</SectionHeading>
        <p>
          Grade 9 essays do all three. Language: pick out a word
          and analyse its connotations, grammar and rhythm.
          Structure: show how Priestley positions the moment in the
          play — where it comes, what it contrasts with, what it
          foreshadows. Form: treat the play as a stage event, not a
          book. Stage directions, lighting, entrances and exits are
          all evidence.
        </p>

        <SectionHeading>Context must be connected, not dropped</SectionHeading>
        <p>
          Do not drop a sentence about 1945 into the middle of a
          paragraph and leave it there. Link context to your
          analysis directly: &ldquo;Priestley writes in 1945 for an
          audience about to vote for a welfare state, which is why
          Birling&apos;s sneer at &lsquo;community&rsquo; lands as
          an insult to the very voters watching him.&rdquo; Now the
          context is part of the argument.
        </p>

        <SectionHeading>End with purpose</SectionHeading>
        <p>
          Every paragraph should end by naming Priestley&apos;s
          purpose. Why did he write this moment? What does he want
          the audience to feel? Why does it matter for 1945 or
          today? Purpose is the lever that lifts Grade 7 analysis
          into Grade 9 argument.
        </p>

        <SectionHeading>A short Grade 9 opening, for reference</SectionHeading>
        <p>
          &ldquo;Priestley uses Inspector Goole to argue that
          responsibility is a political inheritance the younger
          generation must accept. Written in 1945 for an audience on
          the edge of building a welfare state, the play forces its
          Birlings to listen — and rewards only the characters who
          do. Through the Inspector&apos;s insistence that
          &lsquo;we are members of one body&rsquo;, Priestley
          converts a social theory into a moral verdict.&rdquo;
        </p>

        <SectionHeading>Grade 9 checklist</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>One-sentence thesis in the introduction.</li>
          <li>Three connected moves, not five isolated paragraphs.</li>
          <li>Short, integrated quotations — often single words.</li>
          <li>Language, structure and form covered in every paragraph.</li>
          <li>Context linked directly to the argument, not bolted on.</li>
          <li>Every paragraph ends on purpose.</li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The theme most often set in exam questions.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'Character and purpose in one place.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'The context every Grade 9 essay needs.',
          },
          {
            href: '/analysis/inspector-calls/a-chain-of-events-meaning',
            title: 'A chain of events — meaning',
            blurb: 'Structural quotation to build argument around.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
