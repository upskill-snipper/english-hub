import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Quote,
  Sparkles,
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Of Mice and Men — Key Quotes | The English Hub',
  description:
    'Twenty-five essential quotations from Of Mice and Men by John Steinbeck with speaker, context and detailed analysis.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/of-mice-and-men/key-quotes',
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
    text: '"Guys like us, that work on ranches, are the loneliest guys in the world."',
    speaker: 'George',
    context: 'Chapter 1 — by the pool',
    analysis:
      'The novella\'s thesis statement. George defines migrant workers by their isolation, immediately establishing loneliness as a systemic condition rather than a personal failing. The claim is universal — "guys like us" — making it political.',
    themes: ['Loneliness', 'The American Dream'],
  },
  {
    id: 2,
    text: '"I got you to look after me, and you got me to look after you."',
    speaker: 'Lennie',
    context: 'Chapter 1 — dream recitation',
    analysis:
      'Lennie articulates the friendship\'s emotional core with a simplicity George cannot match. Steinbeck gives the deepest insight to the character the world underestimates, challenging the reader\'s assumptions about intelligence and feeling.',
    themes: ['Friendship', 'The American Dream'],
  },
  {
    id: 3,
    text: '"A guy needs somebody — to be near him."',
    speaker: 'Crooks',
    context: 'Chapter 4 — to Lennie in the harness room',
    analysis:
      'The most devastatingly simple statement of loneliness in the novella. Crooks universalises his own racial isolation into a statement about all human beings. Steinbeck lets the marginalised voice speak the deepest truth.',
    themes: ['Loneliness', 'Prejudice'],
  },
  {
    id: 4,
    text: '"I could get along so easy if I didn\'t have you on my tail."',
    speaker: 'George',
    context: 'Chapter 1 — frustration with Lennie',
    analysis:
      'Reveals the cost of loyalty. George knows freedom but chooses responsibility. Steinbeck makes the sacrifice visible so the final act feels like the culmination of a lifelong burden freely accepted.',
    themes: ['Friendship', 'Loneliness'],
  },
  {
    id: 5,
    text: '"I get lonely. You can talk to people, but I can\'t talk to nobody."',
    speaker: 'Curley\'s Wife',
    context: 'Chapter 5 — to Lennie in the barn',
    analysis:
      'Humanises her moments before her death. Steinbeck forces a reappraisal: she is not the temptress the ranch men see but a young woman as isolated as they are, with even fewer escape routes.',
    themes: ['Loneliness', 'Prejudice'],
  },
  {
    id: 6,
    text: '"I ought to of shot that dog myself, George."',
    speaker: 'Candy',
    context: 'Chapter 3 — after the dog is killed',
    analysis:
      'The novella\'s most important piece of foreshadowing. Candy\'s regret about delegating a mercy killing teaches George the lesson he will act on in the final chapter. Steinbeck links the two deaths structurally.',
    themes: ['Friendship', 'Nature and animals'],
  },
  {
    id: 7,
    text: '"Tell about the rabbits, George."',
    speaker: 'Lennie',
    context: 'Recurring — Chapters 1, 3, 6',
    analysis:
      'The dream\'s refrain. Each repetition carries more weight: hope in Chapter 1, conviction in Chapter 3, heartbreak in Chapter 6. Steinbeck uses repetition to measure the distance between innocence and tragedy.',
    themes: ['The American Dream', 'Friendship'],
  },
  {
    id: 8,
    text: '"You hadda, George. I swear you hadda."',
    speaker: 'Slim',
    context: 'Chapter 6 — final lines',
    analysis:
      'The ranch\'s moral authority validates the killing. Steinbeck uses Slim\'s compassion to prevent the ending from collapsing into simple horror, offering the reader a moral position from which to process the tragedy.',
    themes: ['Friendship', 'Power'],
  },
  {
    id: 9,
    text: '"S\'pose you didn\'t have nobody... A guy goes nuts if he ain\'t got nobody."',
    speaker: 'Crooks',
    context: 'Chapter 4 — reflecting on isolation',
    analysis:
      'Crooks describes the psychological damage of enforced solitude. Steinbeck uses his intelligence to make visible the waste of human potential that racism causes.',
    themes: ['Loneliness', 'Prejudice'],
  },
  {
    id: 10,
    text: '"We\'re gonna get a little place."',
    speaker: 'George',
    context: 'Chapter 1 — the dream',
    analysis:
      'The dream in its purest form. "Little" is key — Steinbeck shows that even the most modest ambitions are unreachable for workers at the bottom of the Depression economy.',
    themes: ['The American Dream'],
  },
  {
    id: 11,
    text: '"I seen hundreds of men come by on the road... every damn one of \'em\'s got a little piece of land in his head."',
    speaker: 'Crooks',
    context: 'Chapter 4',
    analysis:
      'Crooks has watched the dream fail for every worker he has ever met. Steinbeck uses his experience as evidence that the American Dream is a systemic lie, not a personal failure.',
    themes: ['The American Dream', 'Prejudice'],
  },
  {
    id: 12,
    text: '"Coulda been in the movies, an\' had nice clothes."',
    speaker: 'Curley\'s Wife',
    context: 'Chapter 5 — to Lennie',
    analysis:
      'Her Hollywood dream parallels the men\'s land dream. Steinbeck shows the Depression crushed women\'s aspirations as brutally as men\'s, but with even fewer alternatives.',
    themes: ['The American Dream', 'Prejudice'],
  },
  {
    id: 13,
    text: '"S\'pose I went in with you guys."',
    speaker: 'Candy',
    context: 'Chapter 3 — offering savings',
    analysis:
      'The moment hope becomes tangible. Steinbeck lets the reader believe alongside the characters, making the dream\'s destruction more painful because it briefly seemed possible.',
    themes: ['The American Dream', 'Friendship'],
  },
  {
    id: 14,
    text: '"I could get you strung up on a tree so easy."',
    speaker: 'Curley\'s Wife to Crooks',
    context: 'Chapter 4',
    analysis:
      'The powerless woman weaponises racial violence against the only person below her in the hierarchy. Steinbeck exposes how oppression is reproduced within oppressed groups.',
    themes: ['Power', 'Prejudice'],
  },
  {
    id: 15,
    text: '"A water snake glided smoothly up the pool."',
    speaker: 'Narrator',
    context: 'Chapter 1 and Chapter 6',
    analysis:
      'The repeated image creates circularity. Nature continues indifferently while human tragedy unfolds. Steinbeck frames Lennie\'s death within a cycle that neither mourns nor judges.',
    themes: ['Nature and animals'],
  },
  {
    id: 16,
    text: '"He ain\'t no good to himself. Why\'n\'t you shoot him?"',
    speaker: 'Carlson on Candy\'s dog',
    context: 'Chapter 3',
    analysis:
      'Carlson\'s pragmatic cruelty toward the dog establishes the ranch\'s moral code: uselessness equals disposability. Steinbeck draws a direct line to the treatment of Lennie, Candy and Crooks.',
    themes: ['Nature and animals', 'Power'],
  },
  {
    id: 17,
    text: '"What stake you got in this guy?"',
    speaker: 'The Boss',
    context: 'Chapter 2 — interviewing George',
    analysis:
      'The Boss cannot comprehend friendship without profit motive. Steinbeck uses the question to expose how capitalism corrodes the very idea of selfless human connection.',
    themes: ['Friendship', 'Power'],
  },
  {
    id: 18,
    text: '"I think I knowed from the very first. I think I knowed we\'d never do her."',
    speaker: 'George',
    context: 'Chapter 5 — after Curley\'s wife\'s death',
    analysis:
      'George admits the dream was always fantasy. Steinbeck collapses hope and self-awareness in a single line, revealing that George carried the dream for Lennie, not for himself.',
    themes: ['The American Dream', 'Friendship'],
  },
  {
    id: 19,
    text: '"They left all the weak ones here."',
    speaker: 'Curley\'s Wife',
    context: 'Chapter 4 — in Crooks\'s room',
    analysis:
      'She identifies the marginalised group assembled in the harness room but fails to recognise herself as part of it. Steinbeck shows how internalised prejudice blinds people to their own oppression.',
    themes: ['Power', 'Prejudice'],
  },
  {
    id: 20,
    text: '"Come on, ya big son-of-a-bitch."',
    speaker: 'Curley',
    context: 'Chapter 3 — picking a fight with Lennie',
    analysis:
      'Curley targets the largest, most vulnerable man to prove his toughness. Steinbeck exposes how insecure masculinity creates violence by attacking those who cannot retaliate.',
    themes: ['Power', 'Prejudice'],
  },
  {
    id: 21,
    text: '"Ain\'t many guys travel around together... Maybe ever\'body in the whole world is scared of each other."',
    speaker: 'Slim',
    context: 'Chapter 3',
    analysis:
      'Slim names the universal fear that prevents connection. Steinbeck gives his most perceptive observation to the character with the moral authority to deliver it.',
    themes: ['Loneliness', 'Friendship'],
  },
  {
    id: 22,
    text: '"I ain\'t wanted in the bunk house."',
    speaker: 'Crooks',
    context: 'Chapter 4',
    analysis:
      'A factual statement of segregation delivered without self-pity. Steinbeck lets the plain language carry the full weight of racial injustice.',
    themes: ['Prejudice', 'Loneliness'],
  },
  {
    id: 23,
    text: '"I don\'t know why I can\'t keep it. It ain\'t nobody\'s mouse."',
    speaker: 'Lennie',
    context: 'Chapter 1',
    analysis:
      'Lennie\'s love of soft things is established with the first dead mouse. Steinbeck begins the foreshadowing chain — mice, puppy, woman — that makes the ending feel structurally inevitable.',
    themes: ['Nature and animals'],
  },
  {
    id: 24,
    text: '"I want you to stay with me, Lennie."',
    speaker: 'George',
    context: 'Chapter 6 — final scene',
    analysis:
      'George\'s last tender words before pulling the trigger. Steinbeck fuses love and violence in a single sentence, making the mercy killing an act of unbearable intimacy.',
    themes: ['Friendship'],
  },
  {
    id: 25,
    text: '"Now what the hell ya suppose is eatin\' them two guys?"',
    speaker: 'Carlson',
    context: 'Chapter 6 — closing line',
    analysis:
      'The novella\'s final line exposes Carlson\'s emotional illiteracy. Steinbeck ends with incomprehension to show that most people cannot even see the friendship they have just witnessed destroyed.',
    themes: ['Loneliness', 'Friendship'],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function OfMiceAndMenKeyQuotesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/of-mice-and-men" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Of Mice and Men
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-violet-400" />
              Modern Text — Novella
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Key Quotations
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Of Mice and Men by John Steinbeck
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty-five essential quotations for exam revision. Each quote is 15 words or fewer,
            with speaker, context, analysis and theme tags for quick reference.
          </p>
        </div>
      </section>

      {/* Quotes */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            25 Key Quotes
          </h2>
        </div>
        <div className="grid gap-4">
          {KEY_QUOTES.map((q) => (
            <Card key={q.id}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-body-md font-medium italic text-foreground">
                    {q.text}
                  </p>
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
          render={<Link href="/revision/texts/of-mice-and-men/characters" />}
        >
          Characters
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/themes" />}
        >
          Themes
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/of-mice-and-men/context" />}
        >
          Context
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
