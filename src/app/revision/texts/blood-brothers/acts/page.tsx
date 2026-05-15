import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Drama, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Blood Brothers — Act-by-Act Analysis | The English Hub',
    description:
      'Detailed act-by-act analysis of Blood Brothers by Willy Russell with key quotes and examiner-focused commentary.',
  },
  title: 'Blood Brothers — Act-by-Act Analysis | The English Hub',
  description:
    'Detailed act-by-act analysis of Blood Brothers by Willy Russell with key quotes and examiner-focused commentary.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers/acts',
  },
}

/* ── Act data ──────────────────────────────────────────────────────────── */

type SceneBlock = {
  heading: string
  summary: string
  quotes: { text: string; speaker: string; analysis: string }[]
  examFocus: string
}

const ACT_1: SceneBlock[] = [
  {
    heading: 'Opening & the pact',
    summary:
      'The Narrator reveals the ending before it begins: twin brothers who die on the day they discover the truth. Mrs Johnstone, a working-class mother of seven, agrees to give one of her unborn twins to her employer Mrs Lyons. Russell immediately establishes that class power, not personal wickedness, drives the separation.',
    quotes: [
      {
        text: '"So did y’ hear the story of the Johnstone twins?"',
        speaker: 'Narrator',
        analysis:
          'Opens as a ballad already told, creating dramatic irony. The audience watches knowing the outcome, which shifts attention from plot to cause.',
      },
      {
        text: '"You know the devil\'s got your number."',
        speaker: 'Narrator',
        analysis:
          'Russell layers superstitious language over social-realist drama. The "devil" functions as a metaphor for the class system that stalks both boys.',
      },
      {
        text: '"Give one to me."',
        speaker: 'Mrs Lyons',
        analysis:
          "A blunt imperative that exposes Mrs Lyons's sense of entitlement. She frames buying a child as a reasonable transaction because her class position lets her.",
      },
    ],
    examFocus:
      'The prologue collapses time so the audience reads every event through the lens of the ending. Examiners reward discussion of how Russell uses dramatic irony to politicise the plot.',
  },
  {
    heading: 'Childhood — Mickey and Edward meet',
    summary:
      'At seven, Mickey and Edward meet by chance and become instant friends. They share sweets, discover they share a birthday, and prick their fingers to become "blood brothers." Russell stages their innocence to expose how arbitrary class distinctions are: the boys are identical, yet the world treats them differently.',
    quotes: [
      {
        text: '"I wish I was our Sammy."',
        speaker: 'Mickey',
        analysis:
          "A child's song about wanting to be older. Russell uses it to foreshadow Mickey's later wish that he had Edward's life instead.",
      },
      {
        text: '"We\'re blood brothers."',
        speaker: 'Mickey and Edward',
        analysis:
          "The title ritual. Russell makes the boys' chosen bond mirror the biological bond they do not know about, layering irony.",
      },
      {
        text: '"You see why I don\'t want you mixing with boys like that!"',
        speaker: 'Mrs Lyons',
        analysis:
          'Mrs Lyons begins policing the class boundary. Her fear is not of Mickey personally but of what his existence reveals.',
      },
    ],
    examFocus:
      "Russell's controlled experiment: two genetically identical boys raised apart. The childhood scenes are crucial evidence for the nature-versus-nurture argument. Examiners expect you to connect innocence here to the destruction in Act 2.",
  },
  {
    heading: "Mrs Lyons's superstition & the move",
    summary:
      'Mrs Lyons fabricates a superstition — that separated twins will die if they learn the truth — to control Mrs Johnstone. As the friendship grows, the Lyons family relocates to the countryside. Russell shows how wealth provides the power to simply move away from problems that the Johnstones cannot escape.',
    quotes: [
      {
        text: '"You do know what they say about twins, secretly parted, don\'t you?"',
        speaker: 'Mrs Lyons',
        analysis:
          'Mrs Lyons invents the curse, but Russell turns it into a self-fulfilling prophecy driven by class forces, not magic.',
      },
      {
        text: '"Shoes upon the table."',
        speaker: 'Mrs Johnstone',
        analysis:
          "Working-class superstition used as a motif. Russell parallels folk belief with Mrs Lyons's invented superstition to question who controls narratives of fate.",
      },
    ],
    examFocus:
      'The geographical move dramatises social segregation. Examiners value analysis of how Russell uses setting — Liverpool streets versus suburban countryside — as a visual metaphor for class division.',
  },
]

const ACT_2: SceneBlock[] = [
  {
    heading: 'Adolescence — Linda, Mickey and Edward',
    summary:
      'The teenagers reunite after the Johnstones are rehoused near the Lyons. Mickey, Edward and Linda form a triangle. Russell uses song montages to compress time and show how the same experiences — school, first love, growing up — produce different outcomes depending on class.',
    quotes: [
      {
        text: '"If you\'d been born here, you would have been just like him."',
        speaker: 'Linda',
        analysis:
          "Linda voices the play's central question directly. Russell lets a teenager articulate what adult society refuses to acknowledge.",
      },
      {
        text: '"I thought we always stuck together."',
        speaker: 'Edward',
        analysis:
          'Edward’s plea invokes the childhood blood-brother bond. Russell exposes how class has already corroded it: Edward’s sentimentality cannot reach Mickey’s lived reality of unemployment.',
      },
    ],
    examFocus:
      "The adolescence section compresses years into minutes using songs and montage. Examiners reward discussion of Russell's theatrical techniques and how structure reflects the accelerating pressure of class forces.",
  },
  {
    heading: 'Adulthood — unemployment and collapse',
    summary:
      "Mickey leaves school for a factory job, then loses it in the recession. Edward goes to university. When Sammy involves Mickey in a robbery, Mickey is imprisoned. Released depressed and dependent on medication, he is unable to reconnect with Linda or himself. Russell makes the economic context explicit: this is Thatcher's Liverpool.",
    quotes: [
      {
        text: '"I suppose you still are a kid, aren\'t y\'?"',
        speaker: 'Mickey',
        analysis:
          'Mickey calls Edward a kid because Edward has been spared adult reality. Russell shows how unemployment and poverty have aged Mickey past his twin, even though they are the same age. The line marks the end of childhood equality.',
      },
      {
        text: '"There\'s a man gone mad in the town tonight."',
        speaker: 'Narrator',
        analysis:
          "The Narrator's warning builds toward the climax. Russell uses the ballad form to make Mickey's breakdown feel both personal and systemic.",
      },
      {
        text: '"I could have been him."',
        speaker: 'Mickey',
        analysis:
          'Mickey realises that only circumstance separates him from Edward. Russell distils the entire nature-versus-nurture argument into five words.',
      },
    ],
    examFocus:
      "Mickey's decline is Russell's strongest political argument: environment, not character, determines outcomes. Examiners expect contextual links to 1980s Liverpool, deindustrialisation and Thatcherism.",
  },
  {
    heading: 'The climax — truth and death',
    summary:
      "Mickey, armed and desperate, confronts Edward at the town hall. Mrs Johnstone arrives and tells both sons they are twins. The revelation destroys Mickey: everything could have been different. He accidentally fires the gun, killing Edward; the police shoot Mickey. The Narrator's prophecy is fulfilled, but Russell makes clear that the real killer is a society that assigns life chances at birth.",
    quotes: [
      {
        text: '"Well, how come you got everything... an\' I got nothin\'?"',
        speaker: 'Mickey',
        analysis:
          "Mickey's final cry of class rage. Russell gives him the play's thesis in ordinary speech, making the political argument viscerally human.",
      },
      {
        text: '"Tell me it\'s not true, say it\'s just a story."',
        speaker: 'Mrs Johnstone',
        analysis:
          'The closing song asks the audience to refuse inevitability. Russell implicates the viewers: if they are moved, they must ask why society allows this.',
      },
      {
        text: '"And do we blame superstition for what came to pass?"',
        speaker: 'Narrator',
        analysis:
          "The Narrator's final question rejects the supernatural reading. Russell demands that the audience locate blame in class structures, not fate.",
      },
    ],
    examFocus:
      "The ending rewards structural analysis: the prologue promised this death, so the audience's task is to understand why, not what. Examiners look for discussion of Russell's use of dramatic irony, the Narrator's choric function and the political message.",
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function BloodBrothersActsPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Blood Brothers',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers',
          },
          {
            name: 'Act-by-Act Analysis',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers/acts',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
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
            Act-by-Act Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Blood Brothers by Willy Russell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            A detailed walk-through of both acts with key quotations, Russell&apos;s methods and
            examiner-focused analysis. Every quote is 15 words or fewer for memorisation.
          </p>
        </div>
      </section>

      {/* Act 1 */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Act 1</h2>
        </div>
        <div className="space-y-6">
          {ACT_1.map((block) => (
            <Card key={block.heading}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{block.heading}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-sm text-muted-foreground">{block.summary}</p>

                <div className="space-y-3">
                  {block.quotes.map((q) => (
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {q.speaker}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Exam focus
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{block.examFocus}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Act 2 */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Act 2</h2>
        </div>
        <div className="space-y-6">
          {ACT_2.map((block) => (
            <Card key={block.heading}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{block.heading}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-sm text-muted-foreground">{block.summary}</p>

                <div className="space-y-3">
                  {block.quotes.map((q) => (
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {q.speaker}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Exam focus
                    </p>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{block.examFocus}</p>
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
          render={<Link href="/revision/texts/blood-brothers/characters" />}
        >
          Characters
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/blood-brothers/themes" />}
        >
          Themes
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
        <strong>Rights notice:</strong> &copy; Methuen Drama / Bloomsbury on behalf of Willy Russell
        (b. 1947). Quotations are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism,
        review, quotation). For full text, students should consult the licensed school edition.
      </p>
    </div>
  )
}
