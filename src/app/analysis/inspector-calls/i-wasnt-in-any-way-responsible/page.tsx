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

const SLUG = 'i-wasnt-in-any-way-responsible'
const TITLE = '"I wasn\'t in any way responsible" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of Mrs Birling\'s "I wasn\'t in any way responsible" in An Inspector Calls. Denial, guilt and Priestley\'s moral critique.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Mrs Birling\'s denial of responsibility in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Mrs Birling's denial 'I wasn't in any way responsible' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;I wasn&apos;t in any way responsible&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Mrs Birling &middot; Act Two
        </p>
        <TagRow tags={['Act Two', 'Mrs Birling', 'Responsibility', 'Denial']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;I accept no blame for it at all.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Mrs Birling insists that she had no part in Eva Smith&apos;s
          death. She rejected Eva&apos;s request for charity because she
          believed the girl was dishonest, and she feels her committee did
          nothing wrong. In her mind the blame belongs entirely to
          &ldquo;the young man&rdquo; who got Eva pregnant. She does not
          yet know that the young man is her own son Eric. Priestley uses
          the line as a trap: the audience watches Mrs Birling refuse
          responsibility in the very moment she is about to be cornered by
          it.
        </p>

        <SectionHeading>The refusal to budge</SectionHeading>
        <p>
          Every other Birling wobbles during the inspection. Mr Birling
          becomes defensive, Sheila and Eric begin to cry, Gerald grows
          uncomfortable. Only Mrs Birling remains icy. Her refusal is
          presented as a kind of strength she is proud of — she thinks
          emotional detachment proves her innocence. Priestley disagrees.
          For him, detachment is precisely the problem. The woman who
          cannot feel guilt is the woman who cannot be trusted with other
          people&apos;s welfare.
        </p>

        <SectionHeading>Dramatic irony and cornering</SectionHeading>
        <p>
          Priestley gives Mrs Birling her strongest denials just before the
          Inspector reveals that the father is Eric. The confidence of
          &ldquo;no blame at all&rdquo; turns to panic within a single
          page. Structurally, the Inspector lets her build the rhetorical
          noose herself, then pulls it tight. This is one of the reasons
          the play feels so inevitable: each character&apos;s worst line
          becomes evidence against them within minutes.
        </p>

        <SectionHeading>Context: respectability and denial</SectionHeading>
        <p>
          Mrs Birling comes from a class that values respectability above
          almost everything. Admitting fault would mean admitting that her
          committee&apos;s decisions could be wrong, and that the whole
          machinery of charitable gatekeeping can destroy rather than
          save. Priestley uses her to indict the comfortable 1912
          establishment who assumed that private virtue could replace
          public welfare. The 1945 audience, having just voted for a
          welfare state, would hear her refusal as a relic of a world they
          had chosen to leave behind.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The totalising &ldquo;no blame... at all&rdquo; leaves no room
            for nuance. Priestley gives Mrs Birling the most extreme
            possible position so the audience can reject it cleanly.
          </li>
          <li>
            The first-person pronoun &ldquo;I&rdquo; is insistent:
            throughout Act Two she protects her own reputation rather
            than accepting shared responsibility.
          </li>
          <li>
            The denial is framed by polite Edwardian diction. Cruelty in
            the play usually sounds like decorum.
          </li>
          <li>
            The line is directly contradicted by the very next revelation
            about Eric, making Mrs Birling&apos;s refusal structurally
            self-defeating.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This quotation is perfect for essays on responsibility, denial
          and the older generation. A strong paragraph quotes it, then
          pairs it with the Inspector&apos;s insistence that
          &ldquo;public men... have responsibilities as well as
          privileges&rdquo;. For a Grade 9 answer, show how Priestley
          sequences Mrs Birling&apos;s denials so the audience watches
          her build a case she cannot sustain. The line also works well
          in comparison with Sheila&apos;s immediate acceptance of guilt
          in Act One.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/girls-of-that-class-meaning',
            title: 'Girls of that class — meaning',
            blurb: 'Mrs Birling\'s class prejudice in the same scene.',
          },
          {
            href: '/analysis/inspector-calls/she-asked-for-the-earth',
            title: 'She asked for the earth',
            blurb: 'Mrs Birling\'s contempt for Eva, analysed.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The theme Mrs Birling refuses to accept.',
          },
          {
            href: '/analysis/inspector-calls/age-theme-analysis',
            title: 'Age — theme analysis',
            blurb: 'Why the older Birlings refuse to change.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
