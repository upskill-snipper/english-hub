import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Drama,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  title: 'A View from the Bridge — Character Analysis | The English Hub',
  description:
    'In-depth character analysis for A View from the Bridge by Arthur Miller: Eddie Carbone, Beatrice, Catherine, Marco, Rodolpho and Alfieri.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/a-view-from-the-bridge/characters',
  },
}

/* ── Character data ────────────────────────────────────────────────────── */

type CharacterProfile = {
  name: string
  role: string
  overview: string
  arc: string
  keyQuotes: { text: string; context: string; analysis: string }[]
  examTip: string
}

const CHARACTERS: CharacterProfile[] = [
  {
    name: 'Eddie Carbone',
    role: 'Longshoreman and tragic protagonist',
    overview:
      'Eddie is hardworking, proud and defined by a code of honour he will ultimately betray. He has raised his orphaned niece Catherine as his own daughter, and his feelings for her — which he cannot name and refuses to acknowledge — drive the entire tragedy. Miller treats him with both pity and moral clarity: Eddie is never excused, but he is always understood. His inability to see himself is the tragic flaw that classical drama demands.',
    arc: 'Eddie begins as a respected community figure who opens his home to illegal immigrants. As Catherine falls in love with Rodolpho, Eddie\'s jealousy escalates from subtle disapproval to open hostility. He seeks legal help from Alfieri, kisses both Catherine and Rodolpho in acts of desperate aggression, and finally commits the unforgivable sin: he calls Immigration. His death at Marco\'s hands is the logical end of a path he chose with his eyes closed.',
    keyQuotes: [
      {
        text: '"You can quicker get back a million dollars that was stole than a word that you gave away."',
        context: 'Act 1 — warning Catherine about informers',
        analysis:
          'Eddie states the community code he will later violate. Miller uses dramatic irony: the audience remembers this line when Eddie makes his phone call.',
      },
      {
        text: '"I want my name!"',
        context: 'Act 2 — confronting Marco before his death',
        analysis:
          'Eddie\'s final demand. Miller shows that reputation is the only currency Eddie truly values, and that he has destroyed the only thing he cannot live without.',
      },
      {
        text: '"She\'s a baby."',
        context: 'Act 1 — refusing to see Catherine as an adult',
        analysis:
          'Eddie\'s repeated refusal to let Catherine grow up. Miller makes clear that this is not protection but possession, though Eddie cannot see the difference.',
      },
    ],
    examTip:
      'Discuss Eddie as a tragic hero in the classical mould: a man destroyed by a flaw he cannot recognise. Examiners reward candidates who analyse his self-deception — he genuinely does not understand his own feelings — alongside his moral failure.',
  },
  {
    name: 'Beatrice',
    role: 'Eddie\'s wife',
    overview:
      'Beatrice is the play\'s most clear-eyed character. She sees what Eddie refuses to see — that his obsession with Catherine is not paternal — and she names it, quietly and persistently. Miller gives her the emotional intelligence that Eddie lacks, making her both the voice of reason and the character who suffers most from being unable to change what she understands.',
    arc: 'Beatrice moves from patient wife to desperate truth-teller. In Act 1, she gently encourages Catherine to grow up and take the job. As Eddie\'s behaviour becomes more erratic, Beatrice confronts him directly: "You want somethin\' else, Eddie, and you can never have her." This is the play\'s most shocking line because it says aloud what everyone — including the audience — has been thinking. Her loyalty is tested to destruction, but she remains at Eddie\'s side even as he dies.',
    keyQuotes: [
      {
        text: '"You want somethin\' else, Eddie, and you can never have her."',
        context: 'Act 2 — the confrontation',
        analysis:
          'Beatrice names the unnameable. Miller gives the play\'s most devastating revelation to the wife, making it an act of love and anger simultaneously.',
      },
      {
        text: '"When am I gonna be a wife again, Eddie?"',
        context: 'Act 1 — private conversation',
        analysis:
          'Beatrice asks about their absent intimacy. Miller uses the question to show that Eddie\'s fixation on Catherine has displaced Beatrice from her own marriage.',
      },
      {
        text: '"It\'s your fault, Eddie. Everything."',
        context: 'Act 2 — after the phone call',
        analysis:
          'Beatrice assigns blame plainly. Miller lets her simplicity carry the moral weight that Alfieri\'s legal language cannot.',
      },
    ],
    examTip:
      'Do not reduce Beatrice to a passive wife. Examiners value candidates who discuss her as the play\'s moral voice — the character who sees most clearly but has the least power to act. Compare her with Alfieri as a dual chorus.',
  },
  {
    name: 'Catherine',
    role: 'Eddie\'s seventeen-year-old niece',
    overview:
      'Catherine is bright, affectionate and emerging from girlhood. Her growing independence — a job offer, high heels, Rodolpho — is the catalyst for Eddie\'s collapse. Miller is careful to let her mature across the play without either sentimentalising or blaming her. She is not naive or provocative; she is a young woman doing something entirely normal: growing up.',
    arc: 'Catherine moves from adoring niece to independent woman. At the start she seeks Eddie\'s approval for everything; by the end she defies him openly. Her relationship with Rodolpho forces her to choose between the man who raised her and the man she loves. Miller shows that this choice is painful but necessary, and that Eddie\'s tragedy is partly his refusal to allow it.',
    keyQuotes: [
      {
        text: '"You don\'t know anything."',
        context: 'Act 2 — to Eddie',
        analysis:
          'Catherine\'s coming of age, rejecting Eddie\'s authority. Miller gives her a declaration of independence that is also, unknowingly, a statement of the truth Beatrice has long hinted at.',
      },
      {
        text: '"I\'m not gonna be a baby any more!"',
        context: 'Act 2 — asserting herself',
        analysis:
          'Catherine directly contradicts Eddie\'s repeated "she\'s a baby." Miller shows her claiming adulthood in language that deliberately echoes and rejects his.',
      },
      {
        text: '"Eddie, I\'m not gonna be a baby any more."',
        context: 'Act 1 — on the job offer',
        analysis:
          'An early assertion of independence, still phrased as a request. Miller tracks Catherine\'s growth through her changing register — from asking permission to demanding respect.',
      },
    ],
    examTip:
      'Track Catherine\'s language across both acts. Examiners reward candidates who show how Miller charts her development through increasingly assertive speech, moving from questions to statements to challenges.',
  },
  {
    name: 'Marco',
    role: 'Elder Italian cousin — strong, principled, protective',
    overview:
      'Marco is quiet, powerfully built and devoted to his starving family in Sicily. He embodies the Sicilian honour code that drives the play\'s final act: when Eddie betrays the cousins to Immigration, Marco responds with public accusation and physical violence because his code demands it. Miller uses Marco to represent the older justice system that Alfieri\'s American law cannot accommodate.',
    arc: 'Marco begins as a grateful, hardworking guest. He is largely silent in Act 1, letting Rodolpho take centre stage. But his strength is established early — the chair-lifting scene is a wordless warning to Eddie. After the betrayal, Marco becomes the agent of Eddie\'s destruction. His public accusation — spitting in Eddie\'s face, naming him as an informer — is the moment that destroys Eddie\'s reputation. The killing is the inevitable conclusion of a code that Eddie himself once endorsed.',
    keyQuotes: [
      {
        text: '"In my country he would be dead now."',
        context: 'Act 2 — to Alfieri in jail',
        analysis:
          'Marco invokes the Sicilian honour code. Miller shows that the "old world" justice system is immediate, personal and incompatible with American law.',
      },
      {
        text: '"He degraded my brother. My blood."',
        context: 'Act 2 — explaining the betrayal',
        analysis:
          'Marco frames Eddie\'s phone call as a crime against family and blood. Miller shows that for Marco, there is no distinction between personal honour and family honour.',
      },
      {
        text: '"Animal! You go on your knees to me!"',
        context: 'Act 2 — public accusation',
        analysis:
          'Marco strips Eddie of his humanity publicly. Miller uses the word "animal" to reverse the dehumanisation Eddie has directed at Rodolpho throughout the play.',
      },
    ],
    examTip:
      'Compare Marco and Eddie as two men governed by honour codes. Examiners value candidates who show how Miller tests both codes — Eddie\'s American honour and Marco\'s Sicilian justice — and finds both ultimately destructive.',
  },
  {
    name: 'Rodolpho',
    role: 'Younger Italian cousin — charismatic, artistic, romantic',
    overview:
      'Rodolpho is blond, charming, sings beautifully and cooks — qualities that Eddie reads as evidence of homosexuality and opportunism. Miller uses Rodolpho as the catalyst that tests Eddie\'s narrow vision of masculinity. He is genuinely in love with Catherine, and his artistic talents are signs of adaptability, not weakness. Eddie\'s contempt for him reveals more about Eddie\'s insecurity than about Rodolpho\'s character.',
    arc: 'Rodolpho begins as a charming newcomer and quickly becomes the focus of Eddie\'s hostility. His romance with Catherine progresses despite Eddie\'s interference. When Eddie kisses him to "prove" he is gay, Rodolpho responds with dignified resistance. He does not want to fight Eddie but will not submit to humiliation. By the end, Rodolpho offers Eddie reconciliation — "It is my fault, Eddie" — showing a generosity that Eddie can no longer accept.',
    keyQuotes: [
      {
        text: '"It is my fault, Eddie."',
        context: 'Act 2 — before Eddie\'s death',
        analysis:
          'Rodolpho offers reconciliation that Eddie cannot accept. Miller shows that the younger generation is capable of compromise — the "settling for half" that Alfieri values.',
      },
      {
        text: '"Paper Doll."',
        context: 'Act 1 — Rodolpho singing',
        analysis:
          'The song Eddie interrupts. Miller uses the performance to establish Rodolpho\'s artistic nature and to trigger Eddie\'s hostility toward anything he considers unmasculine.',
      },
    ],
    examTip:
      'Discuss Rodolpho as Miller\'s challenge to Eddie\'s definition of masculinity. Examiners reward candidates who show that Rodolpho\'s singing, cooking and gentleness are presented positively, making Eddie\'s contempt a character flaw rather than a reasonable response.',
  },
  {
    name: 'Alfieri',
    role: 'Lawyer and narrator — the play\'s chorus',
    overview:
      'Alfieri stands between the audience and the action, part Greek chorus and part reluctant witness. He represents American law, the limits of reason and the modern audience\'s inability to stop a tragedy it can already see coming. His opening monologue reaches back to Roman times, placing Eddie\'s story in a classical tradition of inevitable destruction. Miller uses him to create distance without detachment.',
    arc: 'Alfieri does not change. His function is to see what is coming, name it, and be unable to prevent it. He warns Eddie directly that there is no legal remedy for his feelings, and he tells the audience repeatedly that the ending is foretold. His closing line — "he allowed himself to be wholly known" — offers troubled, reluctant admiration for a man who refused to compromise. Alfieri settles for half; Eddie will not, and the play asks which response is braver.',
    keyQuotes: [
      {
        text: '"Most of the time now we settle for half, and I like it better."',
        context: 'Opening monologue',
        analysis:
          'The play\'s thesis on compromise versus tragic absolutism. Miller uses Alfieri to define civilisation as the willingness to accept less than everything.',
      },
      {
        text: '"He allowed himself to be wholly known."',
        context: 'Closing monologue',
        analysis:
          'Alfieri\'s reluctant eulogy. Miller makes Eddie\'s self-destruction both terrible and, in some formal sense, admirable — he held nothing back.',
      },
      {
        text: '"His eyes were like tunnels."',
        context: 'Act 1 — describing Eddie',
        analysis:
          'Alfieri sees Eddie\'s fixation narrowing his vision. Miller uses the metaphor to show that obsession eliminates peripheral vision — Eddie can see only Catherine.',
      },
    ],
    examTip:
      'Discuss Alfieri as a structural device, not just a character. Examiners reward candidates who compare him to a Greek chorus, discuss his role in creating dramatic irony and tension, and analyse the tension between his legal rationality and Eddie\'s emotional absolutism.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function AViewFromTheBridgeCharactersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <StudyTools textName="A View from the Bridge" textType="play" />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/a-view-from-the-bridge" />}>
            <ArrowLeft className="size-3.5" /> Back to A View from the Bridge
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><Drama className="mr-1 size-3 text-violet-400" />Modern Text — Play</Badge>
            <Badge variant="outline" className="text-muted-foreground"><Sparkles className="mr-1 size-3" />Edexcel IGCSE</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">Character Analysis</h1>
          <p className="mt-2 text-body-lg text-muted-foreground">A View from the Bridge by Arthur Miller</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Deep profiles for every major character: overview, arc, key quotations and examiner tips. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Characters */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Characters</h2>
        </div>
        <div className="space-y-6">
          {CHARACTERS.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{c.name}</CardTitle>
                <CardDescription>{c.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{c.overview}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Character arc</h3>
                  <p className="text-body-sm text-muted-foreground">{c.arc}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {c.keyQuotes.map((q) => (
                    <div key={q.text} className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5">
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">{q.context}</p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">Exam tip</p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{c.examTip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/themes" />}>Themes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/key-quotes" />}>Key quotes <ArrowRight className="size-3.5" /></Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/a-view-from-the-bridge/context" />}>Context <ArrowRight className="size-3.5" /></Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.
      </p>
    </div>
  )
}
