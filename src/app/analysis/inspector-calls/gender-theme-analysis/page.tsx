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

const SLUG = 'gender-theme-analysis'
const TITLE = 'Gender — theme analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of the gender theme in An Inspector Calls. Patriarchy, Sheila, Eva, Mrs Birling and Grade 9 examiner commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the gender theme in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the gender theme in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          Gender — theme analysis
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Patriarchy, double standards and women&apos;s agency
        </p>
        <TagRow tags={['Theme', 'Gender', 'Patriarchy', 'Edwardian women']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;These girls aren&apos;t cheap labour — they&apos;re people.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What the theme is about</SectionHeading>
        <p>
          The gender theme in An Inspector Calls follows how women
          are treated by the men and the wealthy women around them.
          Priestley presents a society that lets men behave badly
          and blames women when anything goes wrong. Eva Smith is
          treated as a worker, a shop dummy, a mistress and a
          charity applicant — four different roles, all of them
          shaped by male power. Priestley makes her story a
          compressed history of Edwardian patriarchy.
        </p>

        <SectionHeading>Eva Smith as a symbol</SectionHeading>
        <p>
          Eva never appears on stage. The audience only hears about
          her through the Birlings. Priestley uses that absence to
          reproduce the silencing of working-class women in real
          life. The men in the play decide what Eva is — first a
          troublesome worker, then a mistress, then a burden — and
          she has no chance to answer back. A Grade 9 essay notices
          that the absence is the argument.
        </p>

        <SectionHeading>Double standards</SectionHeading>
        <p>
          Gerald Croft&apos;s affair with Eva is treated by Arthur
          Birling as understandable male behaviour. Eric&apos;s
          drinking and assault are downplayed. Mrs Birling is more
          furious with Eva for being pregnant than with her son for
          causing the pregnancy. Priestley stacks up these double
          standards so the audience can feel how heavily the
          Edwardian moral code fell on women. A woman&apos;s
          reputation could be destroyed by behaviour that raised a
          man&apos;s social standing.
        </p>

        <SectionHeading>Sheila as a test case</SectionHeading>
        <p>
          Sheila begins the play as a young woman whose identity
          depends on her father and fiancé. She ends it as a moral
          voice who can challenge both of them. Priestley gives her
          a gentle arc: she starts defending her engagement, ends
          by returning the ring, and is the first Birling to
          recognise the Inspector for what he is. Her growth is the
          counter-argument to the idea that women of her class must
          stay decorative. Priestley uses her to argue that a 1945
          audience should expect more from its women — and that
          women should expect more from themselves.
        </p>

        <SectionHeading>Mrs Birling as warning</SectionHeading>
        <p>
          Sybil Birling shows how women can be complicit in
          patriarchy as well as victims of it. Her charity committee
          punishes other women for the crime of needing help.
          Priestley is careful to make her gender performance part
          of the problem: polite diction, strict class loyalty, a
          refusal to imagine the lives of those beneath her. Sheila
          is a possibility; Sybil is a warning. The play suggests
          both futures are available to women of her class.
        </p>

        <SectionHeading>Context: suffrage and 1945</SectionHeading>
        <p>
          In 1912, women could not vote in British general
          elections. By 1945, they could. The gender theme in the
          play is therefore partly historical: Priestley is
          reminding his audience how much had changed, and how much
          still had to change, in just three decades. Eva would not
          have had a vote or a voice in 1912. The 1945 audience had
          both. Priestley wants them to use them.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Eva&apos;s absence is a structural device. Priestley
            makes the audience confront the gap where her voice
            should be.
          </li>
          <li>
            The four roles forced on Eva (worker, shop assistant,
            mistress, applicant) map out the limited options
            available to Edwardian working-class women.
          </li>
          <li>
            Sheila&apos;s ring-returning gesture is one of the
            clearest actions of female agency in the play.
          </li>
          <li>
            Mrs Birling proves that class loyalty can cancel gender
            solidarity — patriarchy depends on women as well as
            men.
          </li>
        </ul>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/sheila-birling-character-analysis',
            title: 'Sheila Birling — character analysis',
            blurb: 'The play\'s clearest example of growing female agency.',
          },
          {
            href: '/analysis/inspector-calls/girls-of-that-class-meaning',
            title: 'Girls of that class — meaning',
            blurb: 'Mrs Birling\'s prejudice against working-class women.',
          },
          {
            href: '/analysis/inspector-calls/class-theme-analysis',
            title: 'Class — theme analysis',
            blurb: 'Where class and gender overlap in the play.',
          },
          {
            href: '/analysis/inspector-calls/eric-birling-character-analysis',
            title: 'Eric Birling — character analysis',
            blurb: 'How masculinity is shaped in the play.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
