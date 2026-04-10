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

const SLUG = 'its-better-to-ask-for-the-earth'
const TITLE = '"It\'s better to ask for the earth than to take it" — analysis'

export const metadata: Metadata = {
  title: `${TITLE} | The English Hub`,
  description:
    'GCSE analysis of the Inspector\'s "it\'s better to ask for the earth than to take it" in An Inspector Calls. Rhetorical reversal and Grade 9 commentary.',
  alternates: {
    canonical: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
  },
  openGraph: {
    title: `${TITLE} | The English Hub`,
    description:
      'Examiner analysis of the Inspector\'s reversal about asking for the earth.',
    url: `https://theenglishhub.app/analysis/inspector-calls/${SLUG}`,
    type: 'article',
  },
}

export default function Page() {
  return (
    <PageContainer>
      <ArticleJsonLd
        headline={TITLE}
        description="Analysis of the Inspector's reversal 'it's better to ask for the earth than to take it' in An Inspector Calls."
        slug={SLUG}
      />

      <div className="space-y-3">
        <BackLink />
        <h1 className="text-heading-lg font-heading text-foreground">
          &ldquo;Better to ask for the earth than to take it&rdquo; — meaning
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Inspector Goole &middot; Act Two
        </p>
        <TagRow tags={['Act Two', 'Inspector Goole', 'Reversal', 'Rhetoric']} />
        <ExaminerByline />
      </div>

      <Extract>
        &ldquo;It&apos;s better to ask for the earth than to take it.&rdquo;
      </Extract>

      <Prose>
        <SectionHeading>What it means</SectionHeading>
        <p>
          The Inspector catches Mrs Birling&apos;s earlier sneer that Eva
          &ldquo;asked for the earth&rdquo; and flips it. In his reading,
          asking for what you need is honest and hopeful. Taking things
          without asking — which is what wealthy characters like Gerald
          Croft and Eric Birling have done throughout the play — is
          theft. The line turns Mrs Birling&apos;s insult into a
          compliment and, in the same breath, accuses the rich of the
          crime they just projected onto the poor.
        </p>

        <SectionHeading>Rhetorical reversal</SectionHeading>
        <p>
          Priestley uses a simple grammatical trick: he keeps Mrs
          Birling&apos;s metaphor but swaps the verbs. &ldquo;Ask&rdquo;
          and &ldquo;take&rdquo; are placed on opposite sides of a
          comparative. By the end of the sentence, the moral arithmetic
          is inverted. Asking is noble, taking is shameful. This is a
          classic rhetorical move — the chiasmus, or mirrored phrase —
          and it feels like a verbal judgement because the structure is
          so neat it cannot be argued with.
        </p>

        <SectionHeading>Who has been taking?</SectionHeading>
        <p>
          The line is particularly sharp because the Birlings and Gerald
          have all taken something from Eva without asking. Arthur
          Birling took her wages and her job. Sheila took her dignity.
          Gerald took her time and her affection. Eric took her body.
          Mrs Birling took her last hope. When the Inspector talks about
          &ldquo;taking&rdquo;, he is not speaking in the abstract: he
          is describing every single Birling crime committed against Eva
          Smith across the three acts.
        </p>

        <SectionHeading>Context: socialism and dignity</SectionHeading>
        <p>
          Priestley&apos;s socialism is built on the idea that the poor
          deserve dignity — the right to ask for help without being
          humiliated. The line becomes a defence of aspiration. Workers,
          women and families should be allowed to want things, and a
          decent society provides routes for them to ask openly rather
          than forcing them to beg or steal. In 1945, a Labour
          manifesto calling for a welfare state was essentially asking
          for the earth. Priestley wanted his audience to be proud of
          that.
        </p>

        <SectionHeading>Grade 9 analysis points</SectionHeading>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The comparative &ldquo;better&rdquo; carries the whole
            moral judgment. Priestley does not need to say
            &ldquo;wrong&rdquo; and &ldquo;right&rdquo; — the structure
            does it.
          </li>
          <li>
            The line rewrites Mrs Birling&apos;s voice inside her own
            scene, giving the Inspector verbal authority over the
            characters he interrogates.
          </li>
          <li>
            The pairing of &ldquo;ask&rdquo; and &ldquo;take&rdquo; is
            the play&apos;s quiet restatement of the difference
            between consent and exploitation.
          </li>
          <li>
            Structurally, it prepares the final speech: once the
            Inspector has reclaimed language from Mrs Birling, he is
            ready to deliver the &ldquo;fire and blood and anguish&rdquo;
            warning.
          </li>
        </ul>

        <SectionHeading>How to use this quote in your essay</SectionHeading>
        <p>
          Use this line for essays on rhetoric, the Inspector&apos;s
          authority, class, or Priestley&apos;s socialism. A
          sophisticated approach is to quote Mrs Birling&apos;s
          hyperbolic sneer first, then show the Inspector&apos;s
          reversal completing the argument. Pair with Gerald&apos;s
          treatment of Eva or Eric&apos;s confession to turn the line
          from a moral aphorism into a precise accusation.
        </p>
      </Prose>

      <RelatedAnalyses
        items={[
          {
            href: '/analysis/inspector-calls/she-asked-for-the-earth',
            title: 'She asked for the earth',
            blurb: 'The Mrs Birling sneer that the Inspector reverses.',
          },
          {
            href: '/analysis/inspector-calls/we-dont-live-alone',
            title: 'We don\'t live alone',
            blurb: 'The Inspector\'s continued moral reasoning in Act Three.',
          },
          {
            href: '/analysis/inspector-calls/inspector-goole-character-analysis',
            title: 'Inspector Goole — character analysis',
            blurb: 'The Inspector\'s rhetoric across the whole play.',
          },
          {
            href: '/analysis/inspector-calls/priestley-socialism-context',
            title: 'Priestley\'s socialism — context',
            blurb: 'The political background behind this reversal.',
          },
        ]}
      />

      <RevisionCta />
    </PageContainer>
  )
}
