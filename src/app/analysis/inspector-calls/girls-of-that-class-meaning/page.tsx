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

const SLUG = 'girls-of-that-class-meaning'
const TITLE = '"Girls of that class" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'Analysis of Mrs Birling\'s "girls of that class" in An Inspector Calls. Class prejudice, Eva Smith and Grade 9 GCSE commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner-written analysis of Mrs Birling\'s dismissive phrase "girls of that class".',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Mrs Birling's phrase 'girls of that class' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Girls of that class&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Mrs Birling &middot; Act Two
        </p>
        <TagRow tags={['Act Two', 'Mrs Birling', 'Class prejudice', 'Gender']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;Girls of that class&mdash;&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          Mrs Birling uses this phrase to dismiss Eva Smith when explaining
          why she refused her charity request. In her view, working-class
          women like Eva are a separate and inferior category of human being
          — not individuals, but a type. The three short words contain a
          whole worldview: class is destiny, the poor deserve their poverty,
          and respectable ladies need not think too hard about the people
          they judge. It is one of the coldest lines in the play.
        </p>

        <SectionHeading>Priestley&apos;s attack on class prejudice</SectionHeading>
        <p>
          By reducing Eva to &ldquo;that class&rdquo;, Mrs Birling strips
          her of name, history and personality. Priestley wants the audience
          to notice this erasure. He repeatedly reminds us that the girl has
          a name, a face and a story, while Mrs Birling can only see a
          label. The play&apos;s central argument — that every person
          matters — depends on the audience rejecting Mrs Birling&apos;s
          category thinking.
        </p>

        <SectionHeading>Dramatic irony</SectionHeading>
        <p>
          The phrase becomes horribly ironic because Mrs Birling does not
          yet know that her son Eric is the father of Eva&apos;s unborn
          child. The class she sneers at is about to be joined to her own
          family by blood. Priestley times the reveal so that the audience
          hears &ldquo;girls of that class&rdquo; with full knowledge of
          what is coming. When Eric&apos;s involvement emerges later in the
          act, the line recoils back on Mrs Birling like a trap.
        </p>

        <SectionHeading>Context: the Edwardian ruling class</SectionHeading>
        <p>
          In 1912 Britain, class distinctions were encoded in clothes,
          accent, education and law. Charitable committees run by wealthy
          women decided who deserved help and who did not, and their
          decisions could be life or death. Priestley had seen at first
          hand how arbitrary and cruel those judgements could be. Mrs
          Birling represents the worst version of that system: a woman who
          has power over other women&apos;s lives but refuses to
          acknowledge the humanity of anyone below her social rank.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The demonstrative &ldquo;that&rdquo; pushes Eva away from the
            speaker — she is not part of Mrs Birling&apos;s world, not even
            worth the pronoun &ldquo;this&rdquo;.
          </li>
          <li>
            The unfinished dash after &ldquo;class&rdquo; shows that
            Sheila interrupts her. The younger generation will not allow
            the sentence to finish.
          </li>
          <li>
            Mrs Birling&apos;s phrase makes &ldquo;class&rdquo; sound
            biological — as if Eva belongs to a different species.
            Priestley invites the audience to reject that idea as immoral.
          </li>
          <li>
            The quotation is structurally paired with Sheila&apos;s
            &ldquo;these girls aren&apos;t cheap labour — they&apos;re
            people&rdquo;. Comparing the two lines shows the generational
            divide in a single paragraph.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This quotation is ideal for essays on class, Mrs Birling, gender,
          or the failure of the older generation. Use it to open a
          paragraph on how Priestley exposes unconscious prejudice in
          respectable language. Strong answers notice that the phrase is
          deliberately short and vague — Mrs Birling does not need to say
          more because she assumes everyone agrees with her. Priestley
          makes that assumption unbearable by the end of Act Two.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/she-asked-for-the-earth',
            title: 'She asked for the earth',
            blurb: 'Mrs Birling\'s next attack on Eva Smith, analysed.',
          },
          {
            href: '/analysis/inspector-calls/i-wasnt-in-any-way-responsible',
            title: 'I wasn\'t in any way responsible',
            blurb: 'Mrs Birling\'s refusal to accept guilt.',
          },
          {
            href: '/analysis/inspector-calls/class-theme-analysis',
            title: 'Class — theme analysis',
            blurb: 'Edwardian hierarchy across the whole play.',
          },
          {
            href: '/analysis/inspector-calls/gender-theme-analysis',
            title: 'Gender — theme analysis',
            blurb: 'Sheila, Eva and the double standards of 1912.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
