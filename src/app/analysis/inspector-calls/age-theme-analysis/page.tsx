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

const SLUG = 'age-theme-analysis'
const TITLE = 'Age — theme analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of the age theme in An Inspector Calls. Young vs old, who changes, why it matters and Priestley\'s generational argument.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the age theme in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the age theme in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Age — theme analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Priestley&apos;s generational argument
        </p>
        <TagRow tags={['Theme', 'Age', 'Generational change', 'Hope']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;You&apos;re beginning to pretend... as if nothing had really happened.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What the theme is about</SectionHeading>
        <p>
          An Inspector Calls draws a hard line between the older and
          younger generations. The older Birlings refuse to change;
          the younger ones cannot go back. Priestley uses age as a
          structural device to show that moral growth is possible
          but not automatic. The older characters have spent too
          many years protecting their comfort to see what the
          Inspector sees. The younger characters are still flexible
          enough to absorb the lesson.
        </p>

        <SectionHeading>The old: Arthur and Sybil</SectionHeading>
        <p>
          Arthur Birling&apos;s worldview is fixed. Even after
          learning what the family did to Eva, he worries about the
          scandal rather than the death. Sybil Birling is the same:
          she refuses all blame, maintains her class prejudices, and
          believes that the story will go away if nobody admits
          anything. Both parents celebrate when the Inspector
          appears to have been a hoax. Priestley presents them as
          the past — the generation that brought Britain to the
          edge of two world wars and then refused to learn from
          either.
        </p>

        <SectionHeading>The young: Sheila and Eric</SectionHeading>
        <p>
          Sheila and Eric both accept responsibility. They listen to
          the Inspector. They cry, they admit their mistakes, they
          warn their parents that denial will not save them. By the
          end of the play, they are the only Birlings who understand
          that the lesson is real whether or not the Inspector is.
          Priestley gives the young the moral high ground because
          his 1945 audience was also young — demobilised soldiers,
          returning civilians and a rising Labour vote.
        </p>

        <SectionHeading>Gerald: a middle position</SectionHeading>
        <p>
          Gerald Croft sits awkwardly between the two groups. He is
          young in years, but his class loyalty aligns him with the
          older generation. When the Inspector turns out to be
          fake, Gerald sides with Arthur. Priestley uses Gerald to
          show that age is not the only factor — privilege and
          complacency can age a person prematurely. Sheila sees
          this and withdraws from the engagement.
        </p>

        <SectionHeading>Refusing to go back</SectionHeading>
        <p>
          The crucial moment in the play&apos;s age theme is
          Sheila&apos;s refusal to celebrate when the Inspector is
          exposed as possibly fake. Her parents immediately start
          pouring drinks again; Sheila begs them to stop pretending.
          Priestley stages this so the audience can see the
          difference in real time. Age becomes not just a number
          but a decision: the young refuse to unlearn what they have
          learned, and the old refuse to learn in the first place.
        </p>

        <SectionHeading>Context: 1945 Britain</SectionHeading>
        <p>
          Priestley was writing for a country of young voters about
          to elect a Labour government and build a welfare state.
          The age theme maps directly onto that political moment.
          Older voters might want to go back to the Edwardian
          certainties; younger voters could not forget what the war
          had shown them. Priestley wants the young members of his
          audience to recognise themselves in Sheila and Eric, and
          to feel that the country&apos;s future depends on them.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Priestley uses stage action, not just dialogue, to
            separate the generations. The parents drink, the
            children refuse.
          </li>
          <li>
            Sheila&apos;s shift in vocabulary from &ldquo;mummy&rdquo;
            to direct address marks her move away from childhood.
          </li>
          <li>
            Gerald is a warning that youth alone is not enough;
            privilege can undo it.
          </li>
          <li>
            The theme is bound up with responsibility — the young
            are receptive precisely because they still believe the
            world can change.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/sheila-birling-character-analysis',
            title: 'Sheila Birling — character analysis',
            blurb: 'The clearest example of generational growth.',
          },
          {
            href: '/analysis/inspector-calls/eric-birling-character-analysis',
            title: 'Eric Birling — character analysis',
            blurb: 'The other side of the younger generation.',
          },
          {
            href: '/analysis/inspector-calls/arthur-birling-character-analysis',
            title: 'Arthur Birling — character analysis',
            blurb: 'The stubborn older generation.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The lesson only the young accept.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
