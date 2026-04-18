import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Drama,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Blood Brothers — Themes | The English Hub',
  description:
    'Detailed theme analysis for Blood Brothers by Willy Russell: Class, Nature vs Nurture, Superstition, Friendship, Violence and Fate.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/blood-brothers/themes',
  },
}

/* ── Theme data ────────────────────────────────────────────────────────── */

type ThemeData = {
  title: string
  overview: string
  howRussellPresentsIt: string
  keyQuotes: { text: string; speaker: string; analysis: string }[]
  contextLink: string
  examTip: string
}

const THEMES: ThemeData[] = [
  {
    title: 'Class and inequality',
    overview:
      'Class is the engine of the entire play. Russell sets up a controlled experiment — two genetically identical boys raised on opposite sides of the class divide — to prove that life outcomes are determined by environment, not character. Everything from accent to ambition to survival is shown to be a product of social position.',
    howRussellPresentsIt:
      'Russell uses parallel structure throughout: the same birthday, the same mother, even the same blood-brother oath, yet radically different lives. The Johnstones are rehoused in a council estate while the Lyons move to the suburbs. Mickey works in a factory; Edward goes to university. The gap widens with every scene until it becomes lethal.',
    keyQuotes: [
      {
        text: '"How come you didn\'t grow up like me?"',
        speaker: 'Mickey',
        analysis:
          'Mickey names the class gulf in plain speech. Russell gives the political thesis to the character who has suffered most from it.',
      },
      {
        text: '"Give one to me."',
        speaker: 'Mrs Lyons',
        analysis:
          'An imperative that treats a child as a commodity. Russell shows that class power lets some people buy what others cannot keep.',
      },
      {
        text: '"I could have been him."',
        speaker: 'Mickey',
        analysis:
          'The realisation that only circumstance separates them. Russell delays this to the climax for maximum emotional and political impact.',
      },
    ],
    contextLink:
      'Liverpool in the 1970s and 1980s suffered massive deindustrialisation. Unemployment rates in working-class areas exceeded 25%. Russell names Margaret Thatcher explicitly and frames the play as an indictment of policies that widened the class gap.',
    examTip:
      'Class is the safest theme to lead with in an essay because it connects to every other theme. Examiners expect precise contextual detail: name Thatcherism, deindustrialisation and the specific geography of Liverpool.',
  },
  {
    title: 'Nature versus nurture',
    overview:
      'Blood Brothers is structured as an experiment: take two identical subjects, place them in different environments, and observe the results. Russell\'s conclusion is unambiguous — nurture wins. Mickey and Edward share genes but not life chances, and every difference between them can be traced to upbringing.',
    howRussellPresentsIt:
      'Russell stages the boys\' childhood as near-identical in personality: both are curious, generous and brave. The divergence begins when their environments impose different expectations. Edward is encouraged to read and play; Mickey is left to fend for himself. By adulthood, the gap is a chasm. Russell never allows the audience to attribute Mickey\'s decline to personal failings.',
    keyQuotes: [
      {
        text: '"We\'re blood brothers."',
        speaker: 'Mickey and Edward',
        analysis:
          'The boys choose kinship before they know they share it. Russell uses the ritual to underline that connection is natural; separation is imposed.',
      },
      {
        text: '"If you\'d been born here, what would you have been?"',
        speaker: 'Linda',
        analysis:
          'Linda voices the nature-versus-nurture question directly. Russell gives this insight to a teenager to show that the truth is obvious to everyone except those in power.',
      },
    ],
    contextLink:
      'The nature-versus-nurture debate was politically charged in the 1980s. Right-wing arguments attributed poverty to personal deficiency. Russell\'s play is a direct rebuttal: it insists that social conditions, not individual character, create outcomes.',
    examTip:
      'Link this theme explicitly to the play\'s structure as a "twin study." Examiners reward candidates who discuss Russell\'s dramatic method — the controlled experiment — not just the content of the argument.',
  },
  {
    title: 'Superstition and fate',
    overview:
      'Superstition runs through the play as a constant motif — shoes on the table, broken mirrors, the Narrator\'s devilish warnings. But Russell uses superstition to critique, not to endorse. The real forces that destroy Mickey and Edward are economic and political, not magical. Superstition is the story society tells itself to avoid responsibility.',
    howRussellPresentsIt:
      'Mrs Lyons invents the twins superstition to control Mrs Johnstone, but it becomes a self-fulfilling prophecy not because of magic but because of the class structures that make the separation permanent. The Narrator\'s repeated refrain — "the devil\'s got your number" — sounds supernatural but functions as a metaphor for systemic injustice. In the final line, the Narrator asks the audience directly whether they blame superstition or something else.',
    keyQuotes: [
      {
        text: '"They say that if twins are separated they\'ll die."',
        speaker: 'Mrs Lyons',
        analysis:
          'An invented curse that becomes true — not through magic but through the class system Mrs Lyons exploits. Russell collapses the boundary between superstition and social power.',
      },
      {
        text: '"You know the devil\'s got your number."',
        speaker: 'Narrator',
        analysis:
          'The "devil" is a metaphor for systemic forces. Russell uses folk-horror language to make class oppression feel inescapable.',
      },
      {
        text: '"And do we blame superstition for what came to pass?"',
        speaker: 'Narrator',
        analysis:
          'The play\'s closing question. Russell rejects the supernatural reading and demands the audience find the real cause: inequality.',
      },
    ],
    contextLink:
      'Working-class communities have rich traditions of folk superstition. Russell draws on these authentically but also shows how powerful people — like Mrs Lyons — weaponise belief to maintain control. The play critiques both genuine superstition and the "superstition" of meritocracy.',
    examTip:
      'The strongest answers on this theme argue that Russell uses superstition as a dramatic device to expose class determinism. Avoid simply listing superstitious moments — analyse what they represent.',
  },
  {
    title: 'Friendship',
    overview:
      'Mickey and Edward\'s friendship is genuine, unselfconscious and cross-class. As children, they see no difference between themselves. Russell uses their bond to expose how artificial and destructive class barriers are: the boys have to be taught to be separate. Friendship is natural; division is imposed.',
    howRussellPresentsIt:
      'The blood-brother ritual is the play\'s central symbol: a chosen bond that mirrors the biological bond the boys do not know about. Russell stages their childhood scenes in parallel — shared games, shared language, shared laughter — to make the later separation feel violent. As adults, the friendship cannot survive the pressure of inequality. Edward\'s privilege and Mickey\'s deprivation make genuine equality between them impossible.',
    keyQuotes: [
      {
        text: '"We\'re blood brothers."',
        speaker: 'Mickey and Edward',
        analysis:
          'The title ritual enacts the play\'s argument: connection is instinctive, separation is artificial. Russell layers dramatic irony by making the boys literal twins.',
      },
      {
        text: '"I\'ll get you a job."',
        speaker: 'Edward',
        analysis:
          'Generosity becomes patronage when class is unequal. Russell shows that even genuine friendship is deformed by structural inequality.',
      },
    ],
    contextLink:
      'Russell draws on his own Liverpool childhood, where cross-class friendships were common but rarely survived into adulthood. The play dramatises the moment when structural forces overwhelm personal bonds.',
    examTip:
      'Discuss how friendship functions as evidence for Russell\'s argument: if the boys are natural friends, then only external forces can explain their destruction. Examiners value structural analysis over emotional summary.',
  },
  {
    title: 'Violence',
    overview:
      'Violence escalates steadily through the play, from Sammy\'s childhood aggression to the armed robbery to the fatal shooting. Russell traces this escalation to deprivation: violence is not innate but learned, and it intensifies as hope diminishes. The final scene — Mickey shooting Edward, police shooting Mickey — makes the link between personal violence and state violence explicit.',
    howRussellPresentsIt:
      'Russell uses Sammy as the early marker of violence, showing how poverty normalises aggression. Mickey resists violence for most of the play, but prison and depression push him toward it. The climax is deliberately chaotic: Mickey\'s gun goes off almost accidentally, and the police response is immediate and lethal. Russell refuses a clean moral: the violence is everyone\'s fault and no one\'s.',
    keyQuotes: [
      {
        text: '"There\'s a man gone mad in the town tonight."',
        speaker: 'Narrator',
        analysis:
          'The Narrator frames Mickey\'s breakdown as both personal tragedy and social crisis. Russell uses the ballad form to universalise the violence.',
      },
      {
        text: '"I\'ll get y\' after."',
        speaker: 'Sammy',
        analysis:
          'Casual childhood threat that Russell uses to plant the seed of later violence. Aggression is normalised where power is scarce.',
      },
    ],
    contextLink:
      'The 1981 Toxteth riots in Liverpool were a flashpoint of anger against unemployment, racism and police brutality. Russell\'s depiction of violence reflects a city where structural deprivation made conflict inevitable.',
    examTip:
      'Trace the escalation of violence across both acts. Examiners reward candidates who connect the final shooting to the broader pattern and argue that Russell presents violence as a symptom of inequality, not a character flaw.',
  },
  {
    title: 'Fate and free will',
    overview:
      'The play opens with its ending: the audience knows from the first line that the twins will die. This creates a powerful sense of inevitability — but Russell\'s point is that the inevitability is social, not cosmic. The boys\' fate is sealed not by prophecy but by class. Free will exists in the play, but it is unequally distributed: the rich have choices, the poor do not.',
    howRussellPresentsIt:
      'The prologue establishes dramatic irony that persists for the entire play. Every moment of childhood innocence is shadowed by the knowledge of the ending. Russell uses the Narrator as a fate figure, but his final question — "do we blame superstition?" — invites the audience to reject fate as an explanation. The real determinism is economic.',
    keyQuotes: [
      {
        text: '"Did you ever hear the story of the Johnstone twins?"',
        speaker: 'Narrator',
        analysis:
          'Opens the play as a story already told, priming the audience for inevitability. Russell uses this frame to redirect attention from what happens to why.',
      },
      {
        text: '"Tell me it\'s not true, say it\'s just a story."',
        speaker: 'Mrs Johnstone',
        analysis:
          'The closing song begs for a different outcome. Russell makes the audience feel the desire for change while forcing them to recognise that only structural change could deliver it.',
      },
      {
        text: '"Shoes upon the table."',
        speaker: 'Mrs Johnstone',
        analysis:
          'A folk superstition treated as omen. Russell uses it to show how people without power reach for magical explanations of systemic injustice.',
      },
    ],
    contextLink:
      'Fatalism has historically been used to justify inequality: if poverty is "just the way things are," no one needs to act. Russell\'s play systematically dismantles this argument by showing that the twins\' fates are engineered by social forces that could be changed.',
    examTip:
      'The best answers argue that Russell uses the appearance of fate to critique fatalism itself. Examiners reward candidates who distinguish between the play\'s atmospheric determinism and its political message of potential change.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function BloodBrothersThemesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/blood-brothers" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Blood Brothers
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Drama className="mr-1 size-3 text-violet-400" />
              Modern Text — Play
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Theme Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Blood Brothers by Willy Russell
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes explored in depth with Russell&apos;s methods, contextual links
            and examiner guidance. All quotes are 15 words or fewer.
          </p>
        </div>
      </section>

      {/* Themes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Themes</h2>
        </div>
        <div className="space-y-6">
          {THEMES.map((t) => (
            <Card key={t.title}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Overview */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>

                {/* How Russell presents it */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    How Russell presents it
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {t.howRussellPresentsIt}
                  </p>
                </div>

                {/* Key quotes */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {t.keyQuotes.map((q) => (
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
                      <p className="text-body-md font-medium italic text-foreground">
                        {q.text}
                      </p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {q.speaker}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>

                {/* Context link */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    Contextual link
                  </h3>
                  <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
                </div>

                {/* Exam tip */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Exam tip
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{t.examTip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/acts" />}
        >
          Act-by-act analysis
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/characters" />}
        >
          Characters
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/key-quotes" />}
        >
          Key quotes
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/essay-plans" />}
        >
          Essay plans
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright,
        Designs and Patents Act 1988 for criticism and review. Full text available from
        your school or local library.
      </p>
    </div>
  )
}
