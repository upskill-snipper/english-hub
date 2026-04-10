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

const SLUG = 'millions-and-millions-of-eva-smiths'
const TITLE = '"Millions and millions of Eva Smiths" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of "millions and millions of Eva Smiths and John Smiths" in An Inspector Calls. Universality, socialism and examiner commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the Inspector\'s "millions and millions" line in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of 'millions and millions of Eva Smiths' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Millions and millions of Eva Smiths&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole&apos;s final speech &middot; Act Three
        </p>
        <TagRow tags={['Act Three', 'Inspector Goole', 'Universality', 'Socialism']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;There are millions and millions of Eva Smiths and John Smiths still with us.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Near the end of his exit speech, the Inspector reminds the
          Birlings that Eva Smith is not unique. Her story is the
          story of countless working-class men and women whose lives
          are shaped by the decisions of the rich. The plural,
          repeated &ldquo;millions&rdquo; converts one death into a
          census. Priestley does not want the audience to leave the
          theatre thinking about a single girl; he wants them to think
          about the whole country.
        </p>

        <SectionHeading>Eva Smith and John Smith as types</SectionHeading>
        <p>
          &ldquo;Smith&rdquo; is the most common English surname. By
          giving his victim that name, Priestley deliberately turns
          her into an everywoman. The inclusion of &ldquo;John
          Smiths&rdquo; extends the argument to working-class men as
          well. The Inspector is saying: look beyond the specific
          biography you heard tonight — every poor household in the
          country contains someone the Birlings would have treated
          the same way.
        </p>

        <SectionHeading>Repetition as rhetoric</SectionHeading>
        <p>
          &ldquo;Millions and millions&rdquo; uses repetition to make
          the number feel larger than any single figure could. It
          sounds almost biblical, like a crowd of the dead. A calmer
          phrase — &ldquo;many Eva Smiths&rdquo; — would not land as
          hard. Priestley wants the audience to feel sheer volume.
          The doubled word is a rhetorical hammer.
        </p>

        <SectionHeading>Context: Britain in 1945</SectionHeading>
        <p>
          The 1945 audience had just lived through the Blitz, where
          ordinary civilians were casualty numbers in the thousands
          every week. They knew what &ldquo;millions&rdquo; felt like.
          They were also about to vote in an election that would
          replace charity with welfare, meaning that the lives of
          these Eva and John Smiths would no longer depend on the
          goodwill of wealthy committees. The line is an appeal to
          that political moment: we already know there are millions,
          so let us act accordingly.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The present tense &ldquo;are&rdquo; makes the statement
            urgent and current. Priestley does not let the Birlings
            treat Eva as a completed story.
          </li>
          <li>
            &ldquo;Still with us&rdquo; traps the audience in the
            same sentence as the victims, undermining any attempt to
            distance themselves.
          </li>
          <li>
            The addition of &ldquo;John Smiths&rdquo; quietly
            broadens the argument from gender to class, making sure
            the Inspector&apos;s critique covers both exploitation and
            sexism.
          </li>
          <li>
            Priestley places this line just before the
            &ldquo;fire and blood and anguish&rdquo; warning, so the
            universality of suffering leads directly into the
            prophecy of punishment.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          Use the quotation in essays on Priestley&apos;s purpose,
          Eva Smith as a symbol, or the Inspector&apos;s function.
          The strongest essays notice that Eva is only ever reported,
          never seen, and that Priestley needs lines like this one to
          keep her story alive in the audience&apos;s mind as a
          collective rather than an individual. Pair it with
          &ldquo;we are members of one body&rdquo; to complete a
          Grade 9 paragraph on Priestley&apos;s universalising
          rhetoric.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/fire-and-blood-and-anguish-meaning',
            title: 'Fire and blood and anguish — meaning',
            blurb: 'The prophecy that follows this universalising line.',
          },
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The collective image paired with this line.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The theme this line carries to the audience.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'Why "millions" meant so much in 1945 Britain.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
