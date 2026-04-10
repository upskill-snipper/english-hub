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

const SLUG = 'fire-and-blood-and-anguish-meaning'
const TITLE = '"Fire and blood and anguish" — meaning and analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'What "fire and blood and anguish" means in An Inspector Calls: biblical imagery, WWI context, triadic structure and Grade 9 GCSE analysis.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner-written analysis of the Inspector\'s prophetic warning "fire and blood and anguish" in An Inspector Calls.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of Inspector Goole's warning 'fire and blood and anguish' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Fire and blood and anguish&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole&apos;s final speech &middot; Act Three
        </p>
        <TagRow tags={['Act Three', 'Inspector Goole', 'War imagery', 'Prophecy']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;They will be taught it in fire and blood and anguish.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          The Inspector warns the Birlings that if people refuse to learn the
          lesson of responsibility, they will learn it violently. The
          &ldquo;it&rdquo; is the idea that every person is responsible for
          every other person. Goole is saying: if you won&apos;t accept this
          truth through reason and conscience, history will force it on you
          through suffering. It is a prophecy, and for a 1945 audience it had
          already come true.
        </p>

        <SectionHeading>The triad: fire, blood, anguish</SectionHeading>
        <p>
          Priestley builds the phrase from three heavy, monosyllabic nouns.
          Each word lands like a hammer blow. &ldquo;Fire&rdquo; suggests
          shelling, explosions and bombed cities. &ldquo;Blood&rdquo; evokes
          battlefield wounds and the physical cost of war. &ldquo;Anguish&rdquo;
          shifts from the body to the mind — the grief and trauma left behind.
          The polysyndetic &ldquo;and... and&rdquo; slows the line down and
          forces each word to register separately, as if Goole is listing
          punishments.
        </p>

        <SectionHeading>Biblical and apocalyptic resonance</SectionHeading>
        <p>
          Phrases of this shape — fire, blood, wrath — belong to the
          vocabulary of the Bible&apos;s Book of Revelation and Old Testament
          prophecy. Priestley leans on that association to give Goole the
          authority of a divine judge announcing the consequences of sin.
          Combined with the earlier line &ldquo;we are members of one body&rdquo;,
          the Inspector sounds less like a police officer and more like a
          messenger from outside ordinary time. This supernatural edge is
          what makes the Inspector feel like more than a man.
        </p>

        <SectionHeading>Context: two world wars</SectionHeading>
        <p>
          The play is set in 1912, before the First World War. Priestley
          wrote it in 1945, as the Second World War ended. A 1945 theatre
          audience had lived through the Blitz, rationing, conscription and
          the news from the concentration camps. &ldquo;Fire and blood and
          anguish&rdquo; would not have sounded like a metaphor to them —
          it was a description of the previous five years. Priestley is
          effectively telling his audience: you have already paid the price
          that the Inspector warns about. Do not pay it a third time.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The word order escalates: physical fire, then the human body
            (blood), then the internal mind (anguish). The damage spreads
            inward.
          </li>
          <li>
            The passive &ldquo;will be taught&rdquo; removes any teacher.
            The lesson is inevitable; no one grants it, no one can stop it.
          </li>
          <li>
            &ldquo;They&rdquo; shifts responsibility onto the audience as
            much as the Birlings. Priestley addresses 1945 directly.
          </li>
          <li>
            The line lies at the climax of the Inspector&apos;s exit — it is
            the last thing the family hears before the door closes, which is
            why it haunts the rest of Act Three.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          This line is ideal for essays on Priestley&apos;s purpose, the
          Inspector&apos;s dramatic function, or warnings and morality in
          the play. Use it to close an argument about the Inspector as
          Priestley&apos;s mouthpiece: first establish his earlier teaching,
          then show that the &ldquo;fire and blood and anguish&rdquo; line
          converts teaching into prophecy. Strong answers link the imagery
          to the specific historical moment of 1945 and to the play&apos;s
          cyclical structure, in which the phone call at the end threatens a
          second inspection precisely because the lesson was not learned.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
            title: 'We are members of one body — meaning',
            blurb: 'The line that directly precedes this warning.',
          },
          {
            href: '/analysis/inspector-calls/millions-and-millions-of-eva-smiths',
            title: 'Millions and millions of Eva Smiths',
            blurb: 'The Inspector\'s universalising warning, analysed.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'The dramatic function of the Inspector explained.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'Why 1945 makes this warning so urgent.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
