import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Drama, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Blood Brothers — Key Quotes | The English Hub',
    description:
      'Twenty essential quotations from Blood Brothers by Willy Russell with speaker, context and detailed analysis.',
  },
  title: 'Blood Brothers — Key Quotes',
  description:
    'Twenty essential quotations from Blood Brothers by Willy Russell with speaker, context and detailed analysis.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/blood-brothers/key-quotes',
  },
}

/* ── Quote data ────────────────────────────────────────────────────────── */

type KeyQuote = {
  id: number
  text: string
  speaker: string
  context: string
  analysis: string
  themes: string[]
}

const KEY_QUOTES: KeyQuote[] = [
  {
    id: 1,
    text: '"So did y’ hear the story of the Johnstone twins?"',
    speaker: 'Narrator',
    context: 'Prologue — opening line',
    analysis:
      'Opens the play as a ballad already told. Russell collapses suspense so the audience watches every scene knowing the outcome, shifting attention from plot to cause. The storytelling frame makes the tragedy feel both inevitable and preventable.',
    themes: ['Fate and free will', 'Dramatic techniques'],
  },
  {
    id: 2,
    text: '"You know the devil\'s got your number."',
    speaker: 'Narrator',
    context: 'Recurring refrain throughout the play',
    analysis:
      'The "devil" functions as a metaphor for class-driven determinism. Russell wraps social-realist argument in folk-horror language, making systemic forces feel as inescapable as supernatural ones. The refrain builds dread across both acts.',
    themes: ['Superstition', 'Fate and free will'],
  },
  {
    id: 3,
    text: '"Give one to me."',
    speaker: 'Mrs Lyons',
    context: 'Act 1 — persuading Mrs Johnstone',
    analysis:
      "A blunt imperative that treats a child as a commodity. Mrs Lyons's class position allows her to frame buying a baby as reasonable. Russell exposes how economic power enables the privileged to take what the poor cannot protect.",
    themes: ['Class', 'Motherhood'],
  },
  {
    id: 4,
    text: '"You do know what they say about twins, secretly parted, don\'t you?"',
    speaker: 'Mrs Lyons',
    context: 'Act 1 — inventing the superstition',
    analysis:
      'Mrs Lyons fabricates the curse to maintain control. Russell turns a deliberate lie into a self-fulfilling prophecy driven not by magic but by the class structures that keep the twins apart. Manipulation masquerades as fate.',
    themes: ['Superstition', 'Class'],
  },
  {
    id: 5,
    text: '"Shoes upon the table."',
    speaker: 'Mrs Johnstone',
    context: 'Act 1 — superstition motif',
    analysis:
      "Working-class folk superstition used as a recurring motif. Russell parallels genuine belief with Mrs Lyons's invented curse, questioning who controls narratives of fate. People without power reach for magical explanations of systemic injustice.",
    themes: ['Superstition', 'Class'],
  },
  {
    id: 6,
    text: '"I wish I was our Sammy."',
    speaker: 'Mickey',
    context: 'Act 1 — childhood song',
    analysis:
      "An innocent wish to be older that foreshadows Mickey's devastating adult wish to have been Edward. Russell plants the theme of wanting a different life early, in a comic song, so that its tragic echo in Act 2 hits harder.",
    themes: ['Nature vs nurture', 'Childhood'],
  },
  {
    id: 7,
    text: '"We\'re blood brothers."',
    speaker: 'Mickey and Edward',
    context: 'Act 1 — the blood-brother ritual',
    analysis:
      'The boys choose kinship before knowing they share it biologically. Russell layers dramatic irony: the ritual is both redundant (they are twins) and essential (it proves that connection is natural, division imposed).',
    themes: ['Friendship', 'Nature vs nurture'],
  },
  {
    id: 8,
    text: '"You see why I don\'t want you mixing with boys like that!"',
    speaker: 'Mrs Lyons',
    context: 'Act 1 — forbidding friendship',
    analysis:
      "Mrs Lyons polices the class boundary. Her fear is not of Mickey but of what his existence reveals about Edward's origins. Russell shows class division being actively enforced by those who benefit from it.",
    themes: ['Class', 'Friendship'],
  },
  {
    id: 9,
    text: '"Only mine until the time comes round to pay the bill."',
    speaker: 'Mrs Johnstone',
    context: 'Act 1 — trying to reclaim her child',
    analysis:
      "Mrs Johnstone's anguish shows that maternal love is powerless against class privilege. Russell uses the possessive phrase to highlight the irony: the child is biologically hers, but socially he belongs to Mrs Lyons.",
    themes: ['Motherhood', 'Class'],
  },
  {
    id: 10,
    text: '"I thought we always stuck together."',
    speaker: 'Edward',
    context: 'Act 2 — confrontation with Mickey',
    analysis:
      'Edward appeals to their childhood blood-brother bond. Russell exposes how class has already broken what Edward still believes is shared: their friendship cannot bridge the gulf between Mickey’s unemployment and Edward’s privilege.',
    themes: ['Class', 'Nature vs nurture'],
  },
  {
    id: 11,
    text: '"If you\'d been born here, you would have been just like him."',
    speaker: 'Linda',
    context: 'Act 2 — adolescence',
    analysis:
      "Linda voices the play's central question directly. Russell lets a teenager articulate what adult society refuses to acknowledge: outcomes are determined by postcode, not personality.",
    themes: ['Nature vs nurture', 'Class'],
  },
  {
    id: 12,
    text: '"I suppose you still are a kid, aren\'t y\'?"',
    speaker: 'Mickey',
    context: 'Act 2 — transition to adulthood',
    analysis:
      'Mickey dismisses Edward as a kid who has been spared adult reality. Russell shows how unemployment and poverty have already aged Mickey past Edward, even though they are the same age. The line marks the boundary between childhood protection and adult vulnerability.',
    themes: ['Class', 'Violence'],
  },
  {
    id: 13,
    text: '"I wanna kiss y\'."',
    speaker: 'Mickey',
    context: 'Act 2 — Mickey to Linda, after prison',
    analysis:
      "A fragmented moment of tenderness from a Mickey numbed by antidepressants. Russell shows love persisting inside structures designed to crush it, while making the cost of poverty and prison painfully visible in Mickey's broken speech.",
    themes: ['Friendship', 'Class'],
  },
  {
    id: 14,
    text: '"If I was him, that\'s what I\'d do."',
    speaker: 'Edward',
    context: 'Act 2 — song about Mickey',
    analysis:
      'Edward fantasises about being Mickey, oblivious to the brutality of working-class life. Russell shows how privilege misreads poverty as freedom, sharpening the dramatic irony of two identical lives lived in different worlds.',
    themes: ['Friendship', 'Class'],
  },
  {
    id: 15,
    text: '"There\'s a man gone mad in the town tonight."',
    speaker: 'Narrator',
    context: 'Act 2 — approaching climax',
    analysis:
      "The Narrator's warning builds dread using the ballad form. Russell makes Mickey's breakdown feel both personal and historically inevitable, connecting one man's madness to an entire city's economic collapse.",
    themes: ['Violence', 'Fate and free will'],
  },
  {
    id: 16,
    text: '"I could have been him."',
    speaker: 'Mickey',
    context: 'Act 2 — confrontation with Edward',
    analysis:
      "Mickey grasps the nature-versus-nurture argument the audience already knows. Russell delays this realisation to maximum dramatic effect: five words that distil the entire play's thesis into ordinary speech.",
    themes: ['Nature vs nurture', 'Class'],
  },
  {
    id: 17,
    text: '"Well, how come you got everything... an\' I got nothin\'?"',
    speaker: 'Mickey',
    context: 'Act 2 — final scene',
    analysis:
      "Mickey's cry of class rage. The play's thesis distilled into ordinary speech. Russell gives the political argument to the character who has suffered most, making it viscerally personal and impossible to dismiss as abstract theory.",
    themes: ['Class', 'Nature vs nurture'],
  },
  {
    id: 18,
    text: '"Tell me it\'s not true, say it\'s just a story."',
    speaker: 'Mrs Johnstone',
    context: 'Act 2 — closing song',
    analysis:
      "The haunting refrain asks the audience to refuse the tragedy's inevitability. Russell implicates the viewers: if they are moved, they must ask why society allows this. The song operates on two levels — grief and political demand.",
    themes: ['Fate and free will', 'Motherhood'],
  },
  {
    id: 19,
    text: '"And do we blame superstition for what came to pass?"',
    speaker: 'Narrator',
    context: 'Act 2 — final line of the play',
    analysis:
      "The Narrator's closing question rejects the supernatural reading he has spent the play building. Russell demands that the audience locate blame in class structures, not fate. The play refuses closure: the audience must supply the answer.",
    themes: ['Superstition', 'Fate and free will'],
  },
  {
    id: 20,
    text: '"I\'ll get y\' after."',
    speaker: 'Sammy',
    context: 'Act 1 — childhood threats',
    analysis:
      "Casual childhood threats from Sammy that foreshadow adult violence. Russell uses Sammy's aggression to show that deprivation normalises conflict and that the criminal trajectory Mickey is later dragged into begins in childhood.",
    themes: ['Violence', 'Class'],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function BloodBrothersKeyQuotesPage() {
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
            name: 'Key Quotations',
            url: 'https://theenglishhub.app/revision/texts/blood-brothers/key-quotes',
          },
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
            Key Quotations
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Blood Brothers by Willy Russell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty essential quotations for exam revision. Each quote is 15 words or fewer, with
            speaker, context, analysis and theme tags for quick reference.
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">20 Key Quotes</h2>
        </div>
        <div className="grid gap-4">
          {KEY_QUOTES.map((q) => (
            <Card key={q.id}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                  <span className="shrink-0 flex size-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                    {q.id}
                  </span>
                </div>
                <p className="text-caption uppercase tracking-wide text-primary">
                  {q.speaker} — {q.context}
                </p>
                <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {q.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {theme}
                    </span>
                  ))}
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
          render={<Link href="/revision/texts/blood-brothers/themes" />}
        >
          Themes
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
