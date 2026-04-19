import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowLeft,
  BookOpen,
  Drama,
  Lightbulb,
  MessageSquare,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'An Inspector Calls Acts Analysis | The English Hub',
  description:
    'Detailed analysis of all three acts of An Inspector Calls by J.B. Priestley: key quotes, language techniques, dramatic devices and structural analysis.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/an-inspector-calls/acts',
  },
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type QuoteAnalysis = {
  quote: string
  speaker: string
  analysis: string
}

type Technique = {
  device: string
  example: string
  effect: string
}

type ActData = {
  number: number
  title: string
  summary: string[]
  quotes: QuoteAnalysis[]
  languageTechniques: Technique[]
  dramaticTechniques: Technique[]
}

const acts: ActData[] = [
  {
    number: 1,
    title: 'Act One — Celebration and Exposure',
    summary: [
      'The play opens on the Birling family celebrating the engagement of Sheila to Gerald Croft. Arthur Birling dominates the evening with after-dinner speeches about progress, self-reliance and the impossibility of war. His confidence is undercut by dramatic irony: the audience knows that the Titanic will sink and that two world wars are coming. Priestley deliberately makes Birling wrong about everything to discredit the capitalist philosophy he represents.',
      'Inspector Goole arrives to investigate the suicide of a young woman called Eva Smith. He reveals that Birling sacked Eva from his factory after she helped lead a strike for higher wages. Birling defends himself by insisting he paid standard rates and that cheap labour is essential to business. His language reduces Eva to an economic unit rather than a person.',
      'Sheila is then shown a photograph and recognises Eva as the shop girl she had dismissed from Milwards out of jealous spite. Unlike her father, Sheila immediately feels guilt and shame. Her rapid acceptance of responsibility marks the beginning of her moral transformation and separates her from the older generation.',
      'By the end of Act One, Gerald has visibly reacted to the name Daisy Renton, and the audience senses that further revelations are coming. Priestley structures the act to move from complacent celebration to uncomfortable exposure, establishing the pattern of interrogation that will continue throughout the play.',
    ],
    quotes: [
      {
        quote: '"The Titanic \u2014 unsinkable, absolutely unsinkable."',
        speaker: 'Arthur Birling',
        analysis:
          'The audience knows the Titanic sank in 1912. Birling\u2019s certainty is immediately discredited, and Priestley invites the audience to distrust everything else he says. The dramatic irony functions as a political argument: if Birling is wrong about facts, he is wrong about values.',
      },
      {
        quote: '"a man has to look after himself and his own"',
        speaker: 'Arthur Birling',
        analysis:
          'Birling articulates the capitalist individualism that Priestley wrote the play to attack. The phrase "his own" limits moral obligation to the family unit, excluding the working class entirely. It is the precise opposite of the Inspector\u2019s final message.',
      },
      {
        quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
        speaker: 'Sheila Birling',
        analysis:
          'Sheila\u2019s awakening to social responsibility. She rejects her father\u2019s economic language and insists on Eva\u2019s humanity. This short sentence carries the play\u2019s moral weight in miniature.',
      },
      {
        quote: '"I\u2019ll never, never do it again to anybody."',
        speaker: 'Sheila Birling',
        analysis:
          'The repetition of "never" conveys genuine remorse. Sheila is the first character to accept guilt fully, modelling the moral change Priestley wants from his audience.',
      },
      {
        quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
        speaker: 'Inspector Goole',
        analysis:
          'The Inspector directly challenges the idea that wealth entitles its holders to immunity. The balanced phrasing of "responsibilities as well as privileges" frames social duty as non-negotiable.',
      },
    ],
    languageTechniques: [
      {
        device: 'Dramatic irony',
        example: 'Birling\u2019s predictions about the Titanic and war',
        effect:
          'The audience\u2019s superior knowledge makes Birling a figure of ridicule. Priestley weaponises hindsight to undermine capitalist confidence and make the audience question authority figures who claim certainty.',
      },
      {
        device: 'Listing and repetition',
        example: 'Birling\u2019s speech piles up confident claims',
        effect:
          'The cumulative effect of Birling\u2019s assertions creates a rhetorical bubble that the Inspector\u2019s doorbell will burst. Each wrong prediction compounds the audience\u2019s distrust.',
      },
      {
        device: 'Imperative and declarative sentences',
        example: 'The Inspector\u2019s controlled, authoritative questions',
        effect:
          'The Inspector speaks in short, commanding sentences that contrast with Birling\u2019s bluster. His linguistic economy conveys moral authority.',
      },
      {
        device: 'Euphemism',
        example: 'Birling describes sacking Eva as a routine business decision',
        effect:
          'Birling\u2019s corporate language sanitises exploitation. Priestley exposes how economic vocabulary can disguise human suffering.',
      },
    ],
    dramaticTechniques: [
      {
        device: 'The doorbell',
        example: 'Rings immediately after Birling\u2019s speech about self-reliance',
        effect:
          'The timing is deliberate: Priestley interrupts Birling at his most complacent. The doorbell becomes a structural metaphor for the interruption of capitalist certainty by moral reality.',
      },
      {
        device: 'The photograph',
        example: 'Shown to one character at a time',
        effect:
          'The Inspector controls who sees the photograph and when, allowing Priestley to manage the pace of revelation. It also raises the question of whether each character is looking at the same girl.',
      },
      {
        device: 'Stage directions',
        example: 'The lighting shifts from "pink and intimate" to "brighter and harder"',
        effect:
          'The change in lighting mirrors the shift from comfortable self-deception to uncomfortable exposure. Priestley uses the stage itself as a metaphor for moral scrutiny.',
      },
      {
        device: 'Unity of time and place',
        example: 'The entire play unfolds in one room in real time',
        effect:
          'The claustrophobic single setting traps the Birlings with the Inspector. There is no escape from the interrogation, mirroring the inescapability of moral responsibility.',
      },
    ],
  },
  {
    number: 2,
    title: 'Act Two — Complicity and Denial',
    summary: [
      'Act Two opens with the continuation of Gerald\u2019s confession. He admits that he kept Eva \u2014 now calling herself Daisy Renton \u2014 as his mistress, installing her in a friend\u2019s flat before ending the affair when it suited him. Gerald claims genuine affection, but the power imbalance is clear: he rescued her from Alderman Meggarty\u2019s predatory attention only to make her dependent on himself.',
      'Sheila recognises that Gerald\u2019s story confirms a pattern of exploitation by wealthy men. She returns the engagement ring, demonstrating that her moral awakening extends to her personal life. Priestley uses this moment to show that accepting responsibility has real consequences.',
      'The Inspector then turns to Sybil Birling, who chaired the Brumley Women\u2019s Charity Organisation. Eva, now pregnant and desperate, had appealed to the committee for help. Sybil refused her application, offended that Eva had initially given the name "Mrs Birling." Sybil\u2019s refusal was motivated by class snobbery and personal pique rather than any assessment of Eva\u2019s need.',
      'In a devastating piece of dramatic irony, Sybil insists that the father of the child should bear full responsibility. She does not yet know that the father is her own son Eric. The audience and Sheila can see the trap closing, but Sybil walks into it with absolute confidence, making her eventual humiliation a direct consequence of her own moral blindness.',
    ],
    quotes: [
      {
        quote: '"I didn\u2019t feel about her as she felt about me."',
        speaker: 'Gerald Croft',
        analysis:
          'Gerald\u2019s admission reveals the power imbalance in his relationship with Daisy. He had the freedom to leave; she did not. The asymmetry of feeling exposes how class privilege allows emotional exploitation.',
      },
      {
        quote: '"I was quite justified."',
        speaker: 'Sybil Birling',
        analysis:
          'Sybil\u2019s stubborn self-righteousness in three words. She refuses to accept guilt even when confronted with the consequences. The phrase reveals a person whose moral framework is built entirely on class position.',
      },
      {
        quote: '"Girls of that class\u2014"',
        speaker: 'Sybil Birling',
        analysis:
          'The interrupted phrase exposes Sybil\u2019s deep-rooted class prejudice as instinctive and unexamined. She categorises people by economic status before she has finished her sentence.',
      },
      {
        quote: '"he ought to be dealt with very severely"',
        speaker: 'Sybil Birling',
        analysis:
          'Sybil unknowingly condemns her own son. Priestley constructs the scene so that Sybil\u2019s desire for punishment will rebound on her family, punishing her moral hypocrisy with dramatic irony.',
      },
      {
        quote: '"the father of the child \u2026 is entirely responsible"',
        speaker: 'Sybil Birling',
        analysis:
          'Sybil attempts to deflect blame from herself onto the unknown father. The audience and Sheila already suspect the father is Eric. Sybil\u2019s insistence turns her into the architect of her own exposure.',
      },
    ],
    languageTechniques: [
      {
        device: 'Dramatic irony',
        example: 'Sybil condemns the father of the child, not knowing it is Eric',
        effect:
          'The audience watches Sybil dig her own trap. Priestley makes her self-assurance the instrument of her humiliation, showing how moral blindness leads to self-destruction.',
      },
      {
        device: 'Class-based language',
        example: 'Sybil\u2019s repeated references to "girls of that class"',
        effect:
          'Priestley exposes how class prejudice is embedded in everyday language. Sybil\u2019s words reveal that she sees Eva not as a person but as a category.',
      },
      {
        device: 'Conditional and passive voice',
        example: 'Gerald describes his affair in distancing language',
        effect:
          'Gerald\u2019s evasive phrasing minimises his agency. Priestley uses his linguistic hedging to show how the upper classes avoid accountability through verbal sophistication.',
      },
      {
        device: 'Short declarative sentences',
        example: 'The Inspector\u2019s blunt corrections and challenges',
        effect:
          'The Inspector\u2019s concise phrasing cuts through the evasions and euphemisms of the other characters. His directness represents moral clarity.',
      },
    ],
    dramaticTechniques: [
      {
        device: 'The engagement ring',
        example: 'Sheila returns it to Gerald mid-act',
        effect:
          'A visual symbol of the disintegration of the Birling-Croft alliance. Priestley makes the personal consequences of moral reckoning tangible and immediate.',
      },
      {
        device: 'Exits and entrances',
        example: 'Gerald leaves after his confession; Eric is absent then returns',
        effect:
          'Priestley carefully controls which characters are on stage. Gerald\u2019s exit allows the focus to shift to Sybil, and Eric\u2019s absence builds suspense for the Act Three reveal.',
      },
      {
        device: 'The Inspector\u2019s control of information',
        example: 'He reveals facts one at a time in a strict sequence',
        effect:
          'Priestley structures the interrogation so that each confession makes the next worse. The escalation creates a sense of inevitability and collective guilt.',
      },
      {
        device: 'Audience knowledge vs. character knowledge',
        example: 'Sheila and the audience see the trap that Sybil cannot',
        effect:
          'Priestley splits the characters into those who understand the Inspector\u2019s purpose and those who resist it. The audience is aligned with Sheila, experiencing the play as an exercise in moral awakening.',
      },
    ],
  },
  {
    number: 3,
    title: 'Act Three — Reckoning and Repetition',
    summary: [
      'Eric returns and the full chain of responsibility is laid bare. He confesses that he met Eva at a bar, forced himself on her when drunk, and got her pregnant. He stole money from his father\u2019s firm to support her, but she refused to accept stolen money \u2014 showing more moral integrity than any of the Birlings. Eric\u2019s confession is the most violent in the play, and Priestley does not soften it.',
      'The Inspector delivers his final speech before leaving. He warns the Birlings that if people do not learn to share responsibility for one another, they will be taught it in "fire and blood and anguish." The speech is both a political manifesto and a prophecy: the audience knows that two world wars fulfilled the warning. Priestley uses the Inspector as a mouthpiece for the democratic socialist argument that society must take collective responsibility for its weakest members.',
      'After the Inspector departs, the family fractures along generational lines. Gerald and Arthur investigate and discover that no police inspector called Goole exists, and that no girl has died at the local infirmary. The older Birlings celebrate their apparent escape, trying to return to the comfort of the evening\u2019s opening. Sheila and Eric, however, insist that the moral lesson matters regardless of whether the Inspector was real.',
      'The telephone rings. A real inspector is on his way to investigate a girl\u2019s suicide. The play ends on this devastating circularity: the Birlings will face the same reckoning again. Priestley\u2019s final message is that moral responsibility cannot be evaded by discrediting the messenger. The cycle will repeat until the lesson is learned.',
    ],
    quotes: [
      {
        quote: '"We are members of one body. We are responsible for each other."',
        speaker: 'Inspector Goole',
        analysis:
          'The play\u2019s thesis statement. The biblical echo of "one body" from St Paul\u2019s letters lends moral authority, while the simple present tense makes collective responsibility a permanent fact, not a political opinion.',
      },
      {
        quote: '"Fire and blood and anguish."',
        speaker: 'Inspector Goole',
        analysis:
          'A prophetic warning that the audience knows was fulfilled by two world wars. The tricolon builds in intensity. Priestley gives the Inspector an almost supernatural authority through this foreknowledge.',
      },
      {
        quote: '"You\u2019re not the kind of father a chap could go to."',
        speaker: 'Eric Birling',
        analysis:
          'Eric\u2019s accusation exposes the emotional bankruptcy beneath Birling\u2019s patriarchal authority. The phrase reveals that the family\u2019s dysfunction is not caused by the Inspector but was always present.',
      },
      {
        quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
        speaker: 'Sheila Birling',
        analysis:
          'Sheila insists that the moral lesson matters regardless of the Inspector\u2019s identity. She cuts through her parents\u2019 evasion with a clarity that marks her as the play\u2019s moral centre alongside the Inspector.',
      },
      {
        quote: '"You began to learn something. And now you\u2019ve stopped."',
        speaker: 'Sheila Birling',
        analysis:
          'Sheila accuses Gerald and her parents of moral regression. The short sentences convey disappointment and frustration, sharpening the generational divide at the play\u2019s climax.',
      },
      {
        quote: '"the famous younger generation who know it all"',
        speaker: 'Arthur Birling',
        analysis:
          'Birling dismisses his children\u2019s moral growth as youthful arrogance. The sarcasm reveals his refusal to learn. Priestley uses the line to sharpen the generational conflict that drives the play\u2019s ending.',
      },
    ],
    languageTechniques: [
      {
        device: 'Biblical register',
        example: 'The Inspector\u2019s final speech uses language echoing scripture',
        effect:
          'The elevated, prophetic tone gives the Inspector\u2019s words the force of a sermon. Priestley appropriates religious language for a socialist argument, turning moral authority against the church-going middle class.',
      },
      {
        device: 'Tricolon',
        example: '"fire and blood and anguish"',
        effect:
          'The three-part structure builds rhythmically to a climax. Each noun escalates the consequence, moving from destruction to suffering to psychological torment.',
      },
      {
        device: 'Contrasting registers',
        example: 'Birling\u2019s dismissive slang vs. the Inspector\u2019s measured authority',
        effect:
          'Priestley uses the gap between the two registers to expose Birling\u2019s moral inadequacy. His colloquial bluster sounds hollow next to the Inspector\u2019s grave precision.',
      },
      {
        device: 'Simple present tense',
        example: '"We are responsible" \u2014 not "we should be" or "we were"',
        effect:
          'The Inspector states responsibility as a present and permanent fact. Priestley avoids the conditional or past tense to make the message feel inescapable and universal.',
      },
    ],
    dramaticTechniques: [
      {
        device: 'The telephone',
        example: 'Rings in the final line of the play',
        effect:
          'The telephone call mirrors the Inspector\u2019s doorbell in Act One, creating a cyclical structure. Priestley denies the Birlings \u2014 and the audience \u2014 the comfort of closure. The reckoning will repeat.',
      },
      {
        device: 'The generational split',
        example: 'Sheila and Eric vs. Arthur and Sybil',
        effect:
          'Priestley divides the stage into those who have learned and those who refuse to. The split enacts his argument that social change must come from the younger generation.',
      },
      {
        device: 'The Inspector\u2019s exit',
        example: 'He leaves abruptly after his final speech',
        effect:
          'The Inspector does not wait for a response. His departure forces the characters to reckon with his message without his presence, testing whether the moral lesson will survive without external pressure.',
      },
      {
        device: 'Cyclical structure',
        example: 'The play ends as it began: with an inspector arriving',
        effect:
          'Priestley\u2019s circular ending suggests that moral lessons ignored will be repeated. It is both a dramatic coup and a political warning: the audience cannot escape responsibility any more than the Birlings can.',
      },
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default async function ActsPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "An Inspector Calls", url: "https://theenglishhub.app/revision/texts/an-inspector-calls" },
          { name: "Act-by-Act Analysis", url: "https://theenglishhub.app/revision/texts/an-inspector-calls/acts" },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/an-inspector-calls" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to An Inspector Calls
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              Act-by-Act Analysis
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / OCR / Eduqas / Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            An Inspector Calls &mdash; Acts Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            by J.B. Priestley &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Detailed analysis of all three acts with key quotations, language
            techniques and dramatic devices. Every quote is 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Acts */}
      {acts.map((act) => (
        <section key={act.number} className="space-y-6">
          {/* Act heading */}
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
              <BookOpen className="size-5 text-violet-400" />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {act.title}
            </h2>
          </div>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-md font-heading">Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              {act.summary.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </CardContent>
          </Card>

          {/* Key Quotes */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Quote className="size-4.5 text-clay-600" />
              <h3 className="text-heading-sm font-heading text-foreground">
                Key Quotes &mdash; Act {act.number}
              </h3>
            </div>
            <div className="grid gap-4">
              {act.quotes.map((q, i) => (
                <Card key={i}>
                  <CardContent className="space-y-2 p-5">
                    <p className="text-body-md font-medium italic text-foreground">
                      {q.quote}
                    </p>
                    <p className="text-caption uppercase tracking-wide text-primary">
                      {q.speaker}
                    </p>
                    <p className="text-body-sm text-muted-foreground">
                      {q.analysis}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Language Techniques */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <MessageSquare className="size-4.5 text-blue-400" />
              <h3 className="text-heading-sm font-heading text-foreground">
                Language Techniques &mdash; Act {act.number}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {act.languageTechniques.map((t, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">
                      {t.device}
                    </CardTitle>
                    <CardDescription className="italic">
                      {t.example}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    {t.effect}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dramatic Techniques */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="size-4.5 text-emerald-400" />
              <h3 className="text-heading-sm font-heading text-foreground">
                Dramatic Techniques &mdash; Act {act.number}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {act.dramaticTechniques.map((t, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">
                      {t.device}
                    </CardTitle>
                    <CardDescription className="italic">
                      {t.example}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    {t.effect}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Divider between acts */}
          {act.number < 3 && (
            <div className="border-t border-border/40 pt-4" />
          )}
        </section>
      ))}

      {/* Navigation */}
      <section>
        <Card className="bg-primary/5">
          <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-heading-md font-heading text-foreground">
                Continue studying
              </h3>
              <p className="mt-1 text-body-sm text-muted-foreground">
                Explore essay plans and key quotes for An Inspector Calls.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                size="sm"
                render={<Link href="/revision/texts/an-inspector-calls/essay-plans" />}
              >
                Essay Plans
              </Button>
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/revision/texts/an-inspector-calls/key-quotes" />}
              >
                Key Quotes
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Fair-dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations (&le;15 words each) reproduced under the fair dealing
        provision of the Copyright, Designs and Patents Act 1988 for the purpose
        of criticism, review and educational study.{' '}
        <em>An Inspector Calls</em> &copy; J.B. Priestley Estate. Full text
        available from your school or local library.
      </p>
    </div>
  )
}
