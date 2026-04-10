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

const SLUG = 'sheila-birling-character-analysis'
const TITLE = 'Sheila Birling — character analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Full GCSE character analysis of Sheila Birling in An Inspector Calls. Moral growth, gender, generational change and Grade 9 essay tips.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of Sheila Birling\'s moral growth across An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Character analysis of Sheila Birling in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Sheila Birling — character analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          The younger generation&apos;s moral voice
        </p>
        <TagRow tags={['Character', 'Sheila Birling', 'Moral growth', 'Gender']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;These girls aren&apos;t cheap labour — they&apos;re people.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>Who is Sheila Birling?</SectionHeading>
        <p>
          Sheila is Arthur and Sybil Birling&apos;s daughter, recently
          engaged to Gerald Croft. At the start of the play she is
          &ldquo;very pleased with life and rather excited&rdquo;. By
          the end she has transformed into the most morally aware
          person on stage. Priestley designs her as a case study in
          the kind of change he hopes his 1945 audience will undergo:
          from comfortable ignorance to active social conscience.
        </p>

        <SectionHeading>Act One: privilege and limitation</SectionHeading>
        <p>
          At the start of Act One, Sheila is a typical daughter of the
          Edwardian upper-middle class. She plays with her new
          engagement ring, asks her mother how she looks, and speaks
          in the slangy tone of a pampered young woman. She is not
          cruel, but she is self-absorbed. Priestley gives her this
          opening so that her transformation will feel earned rather
          than instant.
        </p>

        <SectionHeading>Her confession</SectionHeading>
        <p>
          Sheila admits she had Eva Smith sacked from Milwards
          because she thought the girl had smirked at her during a
          dress fitting. The confession is immediate and painful —
          she does not try to hide it. The moment reveals two things
          at once: she has done something cruel, and she is capable
          of the honesty the rest of her family lack. Priestley
          separates her from her parents in this scene, and from
          then on she is closer to the Inspector than to them.
        </p>

        <SectionHeading>The moral pivot</SectionHeading>
        <p>
          After the confession, Sheila becomes an active questioner.
          She echoes the Inspector&apos;s phrases, sees through
          Gerald&apos;s evasions, and calls out her parents for their
          denials. When her mother tries to hide Eric&apos;s
          involvement, Sheila begs her to stop because she knows it
          will trap her. Priestley uses Sheila to model what a
          sincere engagement with social responsibility looks like
          moment by moment: listening, admitting, questioning, and
          refusing to go back to comfortable lies.
        </p>

        <SectionHeading>Gender and agency</SectionHeading>
        <p>
          Sheila begins the play defined by her fiancé and her
          father. She ends it challenging both of them. She returns
          the ring to Gerald, not as a tantrum but as a principled
          stand: she needs to think about who he really is. Priestley
          gives her a kind of independence that was unusual for a
          woman of her class in 1912. She embodies the possibility
          that women, given moral agency, can lead change where the
          men around them refuse to.
        </p>

        <SectionHeading>The younger generation</SectionHeading>
        <p>
          Priestley aligns Sheila with Eric — the two young Birlings
          are receptive to the Inspector&apos;s message in a way
          their parents are not. Sheila&apos;s famous line about the
          difference between her and her mother — &ldquo;But you&apos;re
          beginning all wrong&rdquo; — is one of the clearest
          statements of generational split in the play. Priestley
          invests his hope in the young, because his 1945 audience
          includes a new generation of voters about to create a
          welfare state.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Her language shifts from the slangy (&ldquo;mummy&rdquo;,
            &ldquo;so pleased&rdquo;) to the direct and plain. The
            change is tracked at a sentence level.
          </li>
          <li>
            She repeats the Inspector&apos;s phrases because she is
            learning to think like him. Look for moments where her
            diction imitates his.
          </li>
          <li>
            Her return of the ring is an action, not a speech. Her
            growth is shown through stage gesture as well as words.
          </li>
          <li>
            Her final attitude — worried, listening, ready to change
            — is the model Priestley wants his audience to adopt.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/eric-birling-character-analysis',
            title: 'Eric Birling — character analysis',
            blurb: 'The other member of the younger generation.',
          },
          {
            href: '/analysis/inspector-calls/age-theme-analysis',
            title: 'Age — theme analysis',
            blurb: 'How Priestley divides the old and young characters.',
          },
          {
            href: '/analysis/inspector-calls/gender-theme-analysis',
            title: 'Gender — theme analysis',
            blurb: 'Sheila\'s agency within Edwardian patriarchy.',
          },
          {
            href: '/analysis/inspector-calls/social-responsibility-theme',
            title: 'Social responsibility — theme',
            blurb: 'The moral value Sheila learns to embrace.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
