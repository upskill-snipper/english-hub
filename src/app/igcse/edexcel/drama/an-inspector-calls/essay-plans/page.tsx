import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Info, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'An Inspector Calls Essay Plans - Edexcel IGCSE Literature',
    description:
      'Five ready-to-use essay plans for An Inspector Calls covering responsibility, Sheila\u2019s development, the Inspector\u2019s role, class and dramatic techniques.',
  },
  title: 'An Inspector Calls Essay Plans - Edexcel IGCSE Literature',
  description:
    'Five ready-to-use essay plans for An Inspector Calls covering responsibility, Sheila\u2019s development, the Inspector\u2019s role, class and dramatic techniques.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/essay-plans',
  },
}

const essays = [
  {
    question:
      'How does Priestley present the theme of social responsibility in An Inspector Calls?',
    thesis:
      'Priestley uses the Inspector as a mouthpiece for collective responsibility and structures the play so that each Birling\u2019s denial sharpens the audience\u2019s understanding of what responsibility means.',
    paragraphs: [
      {
        point: 'Birling\u2019s anti-responsibility speech as a target',
        detail:
          'Open with Birling\u2019s Act One declaration that "a man has to make his own way". Show how Priestley uses dramatic irony (Titanic, wars) to discredit this worldview before the Inspector even arrives. The speech sets up the thesis the rest of the play will dismantle.',
        quote: '"a man has to make his own way"',
      },
      {
        point: 'The chain of responsibility',
        detail:
          'Trace how each Birling contributed to Eva\u2019s death: sacking, dismissal, affair, charity refusal, exploitation. Argue that Priestley structures the play as a chain to show responsibility is collective, not individual. Each person\u2019s action only becomes lethal in combination with the others.',
        quote: '"We all helped to kill her"',
      },
      {
        point: 'The Inspector\u2019s final speech',
        detail:
          'Analyse "We are members of one body" as a socialist sermon. Note the biblical register ("one body"), the political context (1945 welfare state), and the warning of "fire and blood and anguish" that the audience has already lived through.',
        quote: '"fire and blood and anguish"',
      },
      {
        point: 'The generational split',
        detail:
          'Contrast Sheila and Eric (who accept responsibility) with their parents (who deny it). Argue that Priestley locates hope in the younger generation while suggesting the older one is beyond change.',
        quote: '"You\u2019re beginning to pretend now that nothing\u2019s really happened"',
      },
      {
        point: 'The phone-call twist reinforces the message',
        detail:
          'The ending punishes those who rejected responsibility. A real girl has died; a real inspector is coming. Priestley denies the Birlings (and the audience) the comfort of dismissing the lesson as a hoax.',
        quote: '"A girl has just died"',
      },
    ],
  },
  {
    question: 'How does Priestley present Sheila\u2019s development across the play?',
    thesis:
      'Sheila\u2019s arc moves from pampered daughter to moral conscience, and Priestley uses her transformation to embody the play\u2019s argument that change is possible for those willing to accept it.',
    paragraphs: [
      {
        point: 'Act One: "pretty" and "pleased with life"',
        detail:
          'Sheila begins as a product of her class \u2014 delighted by her ring, excited by the engagement, and deferring to her parents. The Milwards confession shows she once wielded class power carelessly, having Eva sacked out of jealousy.',
        quote: '"pretty\u2026 pleased with life"',
      },
      {
        point: 'Immediate acceptance of guilt',
        detail:
          'Unlike her parents, Sheila accepts blame at once. Her line "I know I\u2019m to blame" is direct, unqualified, and early. Priestley positions her speed of acceptance as a moral marker separating the young from the old.',
        quote: '"I know I\u2019m to blame \u2014 and I\u2019m desperately sorry"',
      },
      {
        point: 'Growing perceptiveness',
        detail:
          'By Act Two, Sheila is ahead of the Inspector: she notices Gerald\u2019s reaction, warns her mother not to build a "wall", and anticipates the trap closing on Eric. Priestley gives her the play\u2019s sharpest observational lines.',
        quote: '"I hate to think how much he knows that we don\u2019t know yet"',
      },
      {
        point: 'The ring as symbol',
        detail:
          'Sheila returns her engagement ring \u2014 a physical rejection of the values it represents. The ring\u2019s meaning inverts across the play: from joyful symbol of union to token of a world she no longer wishes to inhabit.',
        quote: '"Not yet. It\u2019s too soon."',
      },
      {
        point: 'Act Three: the play\u2019s conscience',
        detail:
          'Sheila refuses to join the retrenchment. Her line "You and I aren\u2019t the same people who sat down to dinner here" shows she understands that knowledge, once gained, cannot be put aside. Priestley makes her the measure of the audience\u2019s own response.',
        quote: '"You and I aren\u2019t the same people who sat down to dinner here"',
      },
    ],
  },
  {
    question: 'How does Priestley use the Inspector to challenge the Birlings and the audience?',
    thesis:
      'The Inspector functions simultaneously as detective, moral judge and quasi-supernatural figure, and Priestley uses his structural control of the play to force both the Birlings and the audience into confrontation with their values.',
    paragraphs: [
      {
        point: 'Entrance and stage presence',
        detail:
          'The stage directions describe the Inspector as creating "an impression of massiveness, solidity and purposefulness". He is physically imposing in a way that is deliberately disproportionate to his role as a police inspector. The lighting change on his arrival signals that he brings a different kind of reality into the room.',
        quote: '"an impression of massiveness, solidity and purposefulness"',
      },
      {
        point: 'Control of information',
        detail:
          'The Inspector controls who speaks, when, and in what order. He shows the photograph to one person at a time. This method prevents the Birlings from collaborating on a story and mirrors Priestley\u2019s dramatic technique of unfolding one confession at a time.',
        quote: '"One person and one line of inquiry at a time"',
      },
      {
        point: 'Moral authority',
        detail:
          'The Inspector\u2019s language is direct and often moralising: "Public men have responsibilities as well as privileges." He speaks in short, plain sentences that cut through Birling\u2019s bluster. Priestley gives him the rhetorical authority of a preacher, not a policeman.',
        quote: '"Public men have responsibilities as well as privileges"',
      },
      {
        point: 'The final speech as political argument',
        detail:
          'The "one body" speech is Priestley\u2019s socialism made explicit. Its biblical language ("members of one body") reaches beyond politics into morality, and its warning of "fire and blood" connects to the audience\u2019s lived experience of war. The Inspector addresses not just the Birlings but the audience.',
        quote: '"We are members of one body"',
      },
      {
        point: 'Ambiguous identity',
        detail:
          'The Inspector\u2019s name \u2014 "Goole", a pun on "ghoul" \u2014 and his impossible knowledge leave his identity deliberately unresolved. Whether he is a ghost, a time traveller, or a dramatic device, the play insists that his moral argument stands regardless.',
        quote: '"Inspector Goole"',
      },
    ],
  },
  {
    question: 'How does Priestley present ideas about class in An Inspector Calls?',
    thesis:
      'Priestley presents the Edwardian class system as a structure that protects the wealthy by making the working class invisible, and he uses the Inspector to force the Birlings to see what their privilege has concealed.',
    paragraphs: [
      {
        point: 'The dining room as class microcosm',
        detail:
          'The set \u2014 heavy furniture, port decanter, cigar box, maid \u2014 physically represents Edwardian wealth. Edna\u2019s silent presence shows working-class labour sustaining upper-class comfort. Priestley makes the class structure visible in the stage directions before the dialogue begins.',
        quote: '"pink and intimate"',
      },
      {
        point: 'Birling\u2019s factory: class as economic power',
        detail:
          'Birling sacked Eva for demanding a modest pay rise. His language \u2014 "they\u2019d soon be asking for the earth" \u2014 frames workers\u2019 basic needs as unreasonable greed. Priestley uses the wage dispute to ground class analysis in material reality.',
        quote: '"they\u2019d soon be asking for the earth"',
      },
      {
        point: 'Mrs Birling\u2019s class prejudice',
        detail:
          'Sybil refuses Eva charity because of class assumptions: Eva used the name "Mrs Birling" and seemed above her station. Her unfinished phrase "Girls of that class \u2014" is the play\u2019s most chilling reduction of a person to a category.',
        quote: '"Girls of that class \u2014"',
      },
      {
        point: 'Eva as representative figure',
        detail:
          'Eva never appears onstage. Her absence makes her a representative of all working-class women exploited by the Birlings\u2019 world. The Inspector\u2019s "millions and millions of Eva Smiths" universalises her story, turning one woman\u2019s death into an indictment of a system.',
        quote: '"millions and millions of Eva Smiths"',
      },
      {
        point: 'Gerald and old-money class',
        detail:
          'Gerald Croft represents inherited aristocratic wealth, contrasting with Birling\u2019s self-made capitalism. His affair with Daisy is framed as noblesse oblige, but Priestley exposes it as another form of class exploitation \u2014 kindness that depends on absolute power difference.',
        quote: '"She was young and pretty and warm-hearted"',
      },
    ],
  },
  {
    question:
      'How does Priestley use dramatic techniques to engage the audience in An Inspector Calls?',
    thesis:
      'Priestley uses dramatic irony, the well-made play structure, lighting, the phone-call twist and the classical unities to create a play that is simultaneously a detective story and a political argument.',
    paragraphs: [
      {
        point: 'Dramatic irony',
        detail:
          'Birling\u2019s confident predictions (Titanic, no war, no community) are wrong, and a 1945 audience knows it. Priestley weaponises the audience\u2019s historical knowledge against the character, making Birling\u2019s worldview visibly absurd before the Inspector arrives.',
        quote: '"The Titanic\u2026 unsinkable, absolutely unsinkable"',
      },
      {
        point: 'Lighting as metaphor',
        detail:
          'The stage directions specify a shift from "pink and intimate" to "brighter and harder" when the Inspector arrives. The lighting change externalises the play\u2019s moral shift: the Birlings\u2019 comfortable self-image is replaced by harsh exposure.',
        quote: '"brighter and harder"',
      },
      {
        point: 'Unity of time and place',
        detail:
          'The entire play takes place in one room in one evening. This classical unity creates claustrophobia \u2014 the Birlings cannot escape each other or the Inspector. The compression of time intensifies the emotional pressure on each character.',
        quote: '"We were having a nice little family celebration tonight"',
      },
      {
        point: 'The chain structure',
        detail:
          'Each character\u2019s confession leads to the next. The play is not a whodunit with one guilty party but a chain of complicity. Priestley\u2019s structure forces the audience to see responsibility as cumulative \u2014 no single person killed Eva, but no single person is innocent either.',
        quote: '"One person and one line of inquiry at a time"',
      },
      {
        point: 'The telephone twist',
        detail:
          'The final phone call collapses the Birlings\u2019 attempted retrenchment. It punishes denial, rewards attentiveness (Sheila and Eric are vindicated), and leaves the audience with an unresolved question: will the Birlings repeat their mistakes? Priestley ends on uncertainty to provoke the audience into answering for themselves.',
        quote: '"A girl has just died"',
      },
    ],
  },
]

export default async function InspectorCallsEssayPlansPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Drama', url: 'https://theenglishhub.app/igcse/edexcel/drama' },
          {
            name: 'An Inspector Calls',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls',
          },
          {
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/igcse/edexcel/drama/an-inspector-calls/essay-plans',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/edexcel/drama/an-inspector-calls" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to')} An Inspector Calls
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.page.badge_edexcel_lit')}
            </Badge>
            <Badge variant="secondary">{await t('igcse.page.section.essay_plans')}</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls: Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Five exam-ready essay plans with thesis statements, paragraph points and supporting
            quotations for top-band responses.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              {await t('igcse.page.copyright_heading')}
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for study and criticism. These plans
              are starting frameworks &mdash; always develop your own argument.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Essay plans</h2>
        </div>
        <div className="space-y-8">
          {essays.map((essay, i) => (
            <article key={i} className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="text-heading-md font-heading text-foreground">{essay.question}</h3>
              <p className="mt-2 text-body-sm font-medium text-primary">Thesis: {essay.thesis}</p>
              <div className="mt-4 space-y-4">
                {essay.paragraphs.map((p, j) => (
                  <div key={j} className="rounded-lg border border-border/40 bg-muted/30 p-4">
                    <p className="text-body-sm font-semibold text-foreground">
                      {j + 1}. {p.point}
                    </p>
                    <p className="mt-1 text-body-sm leading-relaxed text-muted-foreground">
                      {p.detail}
                    </p>
                    <blockquote className="mt-2 border-l-2 border-primary/40 pl-3 text-body-xs italic text-foreground">
                      {p.quote}
                    </blockquote>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under
        the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of
        criticism and review.
      </p>
    </div>
  )
}
