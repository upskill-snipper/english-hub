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

const SLUG = 'arthur-birling-character-analysis'
const TITLE = 'Arthur Birling — character analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Full GCSE character analysis of Arthur Birling in An Inspector Calls. Capitalism, dramatic irony, class and Priestley\'s satirical target.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner-written character analysis of Arthur Birling in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Character analysis of Arthur Birling from An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Arthur Birling — character analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          The pompous capitalist at the head of Priestley&apos;s satire
        </p>
        <TagRow tags={['Character', 'Arthur Birling', 'Capitalism', 'Dramatic irony']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;A man has to make his own way... community and all that nonsense.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Who is Arthur Birling?</SectionHeading>
        <p>
          Arthur Birling is the head of the household, a wealthy
          factory owner, a former Lord Mayor of Brumley and a
          magistrate. He is celebrating his daughter Sheila&apos;s
          engagement to Gerald Croft at the start of the play and
          hoping the match will boost his business. Priestley
          describes him as &ldquo;heavy-looking, rather portentous&rdquo;.
          He is the loudest voice in Act One and the least changed
          voice in Act Three. The play is structured to put his
          worldview on trial.
        </p>

        <SectionHeading>Act One: the thesis</SectionHeading>
        <p>
          In Act One, Birling delivers a long dinner-party speech full
          of confident predictions. He dismisses socialists as
          &ldquo;cranks&rdquo;, calls community &ldquo;nonsense&rdquo;,
          insists that a man must &ldquo;make his own way&rdquo;, and
          claims that the Titanic is &ldquo;absolutely unsinkable&rdquo;.
          Priestley treats these lines as the thesis the rest of the
          play will demolish. The dramatic irony is relentless: a 1945
          audience knew that every one of Birling&apos;s predictions
          was wrong, and the speech primes them to distrust his
          morality as well.
        </p>

        <SectionHeading>Capitalism and class</SectionHeading>
        <p>
          Birling is the play&apos;s clearest picture of Edwardian
          laissez-faire capitalism. He believes that wages should be
          kept low to protect profits, that workers are replaceable,
          and that strikes should be crushed. When the Inspector
          asks if he feels any responsibility for sacking Eva Smith,
          Birling refuses. His class identity is built on keeping
          distance between himself and the people beneath him.
          Priestley wants the audience to see how small everyday
          decisions — like refusing a pay rise — become part of a
          larger violence.
        </p>

        <SectionHeading>Status anxiety</SectionHeading>
        <p>
          Underneath Birling&apos;s confidence is a powerful
          insecurity about his place in the class ladder. He keeps
          mentioning that he is in line for a knighthood. He boasts
          that his port is the same as Sir George Croft&apos;s. He
          worries aloud that a scandal could cost him his title.
          Priestley gives him this anxiety so that his moral failure
          in Act Three has a practical motive: he is not just wrong,
          he is afraid of being exposed.
        </p>

        <SectionHeading>How he changes — or doesn&apos;t</SectionHeading>
        <p>
          Sheila and Eric begin to accept responsibility as the
          evidence mounts. Arthur does not. Even after learning what
          his family did to Eva Smith, he focuses on the possibility
          that the story is a hoax and that his reputation might
          survive. When the final phone call reveals that a real
          inspector is coming, Birling still sounds panicked about
          himself rather than ashamed for Eva. Priestley uses him to
          show that some people never learn, which is precisely why
          the audience must.
        </p>

        <SectionHeading>Relationship with the Inspector</SectionHeading>
        <p>
          Birling tries to intimidate Inspector Goole by name-dropping
          the Chief Constable. The move fails. For the rest of the
          play he is on the back foot, defensive and pompous. The
          Inspector&apos;s calm authority exposes how little real
          power Birling has when he cannot pull rank. Priestley is
          quietly arguing that a man whose morality depends on
          connections is no moral man at all.
        </p>

        <SectionHeading>Context: Edwardian vs post-war Britain</SectionHeading>
        <p>
          Arthur Birling represents the Edwardian ruling class that
          failed to see the First World War coming. Priestley, writing
          in 1945, wants the audience to recognise that a second
          generation of Birlings could fail to see the next
          catastrophe as well. The play uses him to warn against
          complacency in an era of reconstruction.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            His speech patterns are declarative, repetitive and
            confident. Priestley makes him easy to quote precisely so
            that every line can be turned against him.
          </li>
          <li>
            He is surrounded by dramatic irony. Readers should always
            mention the 1945 audience when analysing his lines.
          </li>
          <li>
            His lack of change is a structural statement: Priestley
            is arguing that capitalism has no built-in mechanism for
            self-correction.
          </li>
          <li>
            His reaction to the final phone call — fear, not shame —
            is the most revealing moment of his character.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/a-man-has-to-make-his-own-way',
            title: 'A man has to make his own way',
            blurb: 'Birling\'s defining capitalist manifesto.',
          },
          {
            href: '/analysis/inspector-calls/community-and-all-that-nonsense',
            title: 'Community and all that nonsense',
            blurb: 'Birling\'s dismissive view of social responsibility.',
          },
          {
            href: '/analysis/inspector-calls/cranks-walking-out-meaning',
            title: 'Cranks walking out — meaning',
            blurb: 'Birling\'s contempt for reformers analysed.',
          },
          {
            href: '/analysis/inspector-calls/age-theme-analysis',
            title: 'Age — theme analysis',
            blurb: 'Why Birling refuses to change while his children can\'t.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
