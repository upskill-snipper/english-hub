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

const SLUG = 'eric-birling-character-analysis'
const TITLE = 'Eric Birling — character analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Full GCSE character analysis of Eric Birling in An Inspector Calls. Guilt, alcohol, masculinity, moral growth and Grade 9 essay tips.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Eric Birling in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Character analysis of Eric Birling in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Eric Birling — character analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          The guilty son of the younger generation
        </p>
        <TagRow tags={['Character', 'Eric Birling', 'Guilt', 'Masculinity']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;The fact remains that I did what I did.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Who is Eric Birling?</SectionHeading>
        <p>
          Eric is Arthur and Sybil Birling&apos;s son. Priestley
          describes him as &ldquo;in his early twenties, not quite at
          ease, half shy, half assertive&rdquo;. That awkwardness is
          the key to the character. Eric has been given every
          advantage by his family and yet he cannot settle into
          anything. He drinks too much. He gets a girl pregnant and
          steals from his father&apos;s business. By the end of the
          play he is the most visibly wrecked member of the family,
          but also one of the most morally honest.
        </p>

        <SectionHeading>Alcohol and secrecy</SectionHeading>
        <p>
          Sheila tells the Inspector that Eric &ldquo;has been
          steadily drinking too much for the last two years&rdquo;.
          His own parents had not noticed. Priestley uses the drinking
          to show how little the Birling household really listens to
          one another: they celebrate Sheila&apos;s engagement without
          seeing that their son is falling apart at the same table.
          Eric&apos;s drinking is also a symbol of the destructive
          freedom young men of his class enjoyed. He can afford the
          bars, and nobody holds him responsible.
        </p>

        <SectionHeading>His confession</SectionHeading>
        <p>
          Eric admits that he met Eva Smith in a bar, forced his way
          into her lodgings, and fathered a child. He then tried to
          give her stolen money. The confession is one of the
          play&apos;s most painful moments. Priestley writes it as
          the climax of the chain: each previous Birling added a
          link, and Eric supplies the final one. The confession is
          also the point where the play&apos;s class critique turns
          directly into a critique of male entitlement.
        </p>

        <SectionHeading>Relationship with Mrs Birling</SectionHeading>
        <p>
          The scene where Eric realises his mother refused his
          pregnant girlfriend&apos;s charity request is the emotional
          peak of Act Two. He is furious, horrified, and unable to
          look at her. Priestley uses this encounter to show that
          Mrs Birling&apos;s polite denial is not neutral — it has
          consequences for her own son. The line of her class
          prejudice runs directly into her family. There is no
          escape from the chain.
        </p>

        <SectionHeading>Moral growth</SectionHeading>
        <p>
          Like Sheila, Eric accepts responsibility even after the
          Inspector&apos;s identity becomes uncertain. He tells his
          parents that whatever the truth about the Inspector, the
          fact remains that he did what he did. Priestley rewards
          Eric with a small piece of moral dignity at the end of the
          play because he has done the hardest thing: owned his
          actions without needing an official audience to make him.
        </p>

        <SectionHeading>Masculinity in 1912</SectionHeading>
        <p>
          Eric&apos;s behaviour is shaped by Edwardian expectations
          about young men — drinking, pursuing women, avoiding
          emotional honesty. Priestley does not excuse Eric, but he
          does show that the culture around him encouraged every one
          of his mistakes. When Eric tries to talk honestly at the
          dinner table, his father shuts him down. Masculinity in the
          play is something that has been handed to him broken.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            His awkward stage directions set up the character before
            he speaks. Priestley plants his discomfort early.
          </li>
          <li>
            His drinking is a structural clue for the audience but
            invisible to his parents — a symbol of the family&apos;s
            moral blindness.
          </li>
          <li>
            He mirrors Sheila but in a darker register: same
            generational shift, worse personal cost.
          </li>
          <li>
            His final refusal to let the Inspector&apos;s identity
            cancel his guilt is one of the play&apos;s most mature
            lines.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/sheila-birling-character-analysis',
            title: 'Sheila Birling — character analysis',
            blurb: 'Eric\'s counterpart in the younger generation.',
          },
          {
            href: '/analysis/inspector-calls/i-wasnt-in-any-way-responsible',
            title: 'I wasn\'t in any way responsible',
            blurb: 'Mrs Birling\'s denial that lands directly on Eric.',
          },
          {
            href: '/analysis/inspector-calls/age-theme-analysis',
            title: 'Age — theme analysis',
            blurb: 'Where Eric fits in Priestley\'s generational critique.',
          },
          {
            href: '/analysis/inspector-calls/gender-theme-analysis',
            title: 'Gender — theme analysis',
            blurb: 'How the play reads Edwardian masculinity.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
