import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Crown,
  Flame,
  Skull,
  Swords,
  Scale,
  Users,
  Wind,
  Eye,
  ShieldAlert,
  LandPlot,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Animal Farm Chapter Analysis - All 10 Chapters | The English Hub',
    description:
      'Chapter-by-chapter analysis of Animal Farm by George Orwell. Key events, character development, allegory, and short quotations for GCSE revision.',
  },
  title: 'Animal Farm Chapter Analysis - All 10 Chapters',
  description:
    'Chapter-by-chapter analysis of Animal Farm by George Orwell. Key events, character development, allegory, and short quotations for GCSE revision.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/animal-farm/chapters',
  },
}

/* ── Chapter data ──────────────────────────────────────────────────────── */

type ChapterData = {
  number: number
  title: string
  icon: typeof BookOpen
  iconColour: string
  keyEvents: string[]
  characterDevelopment: string[]
  allegory: string[]
  quotes: { text: string; speaker: string }[]
}

const chapters: ChapterData[] = [
  {
    number: 1,
    title: "Old Major's Speech",
    icon: Crown,
    iconColour: 'text-clay-600',
    keyEvents: [
      'Old Major gathers the animals in the barn and delivers a rousing speech about human tyranny.',
      "He teaches them 'Beasts of England', a song imagining a future without human oppression.",
      'The animals are united in hope and a shared vision of freedom.',
    ],
    characterDevelopment: [
      'Old Major is established as the intellectual father of the revolution -- wise, respected, and idealistic.',
      'Napoleon and Snowball are introduced as attentive listeners but their rivalry is not yet visible.',
      'Boxer and Clover listen faithfully, establishing their loyal natures.',
    ],
    allegory: [
      "Old Major's speech parallels Marx's Communist Manifesto and Lenin's revolutionary oratory.",
      'The vision of a classless society mirrors the ideals of Marxism before it was implemented.',
      "'Beasts of England' functions like 'The Internationale' -- a unifying anthem for revolution.",
    ],
    quotes: [
      { text: '"Man is the only creature that consumes without producing"', speaker: 'Old Major' },
      { text: '"All men are enemies. All animals are comrades"', speaker: 'Old Major' },
    ],
  },
  {
    number: 2,
    title: 'The Rebellion',
    icon: Flame,
    iconColour: 'text-red-400',
    keyEvents: [
      'Old Major dies three nights after his speech.',
      'The pigs formulate his teachings into a system called Animalism.',
      'Mr Jones neglects the animals; they break into the store-shed and drive him out.',
      'The Seven Commandments are painted on the barn wall.',
    ],
    characterDevelopment: [
      'Napoleon, Snowball and Squealer emerge as the leadership class among the pigs.',
      'Mollie asks whether she can still wear ribbons -- foreshadowing her shallow loyalty.',
      'Moses the raven talks about Sugarcandy Mountain, distracting the animals from revolution.',
    ],
    allegory: [
      'The Rebellion represents the October Revolution of 1917.',
      'Mr Jones is Tsar Nicholas II -- negligent, drunk, and overthrown.',
      'The Seven Commandments are the idealistic principles of early communism.',
      "Mollie's concern about ribbons represents the bourgeoisie's fear of losing luxury.",
    ],
    quotes: [
      { text: '"All animals are equal"', speaker: 'Seventh Commandment' },
      { text: '"Four legs good, two legs bad"', speaker: "Snowball's simplification" },
    ],
  },
  {
    number: 3,
    title: 'Organising the Farm',
    icon: LandPlot,
    iconColour: 'text-emerald-400',
    keyEvents: [
      'The harvest is a great success -- bigger than under Jones.',
      'The pigs direct the work but do no physical labour themselves.',
      "The pigs take the milk and apples, claiming they need them for 'brainwork'.",
      'Snowball organises committees and tries to educate the animals.',
    ],
    characterDevelopment: [
      "Boxer's immense work ethic is established -- he arrives early and works late.",
      'Snowball is energetic and creative, organising reading classes and committees.',
      "Napoleon takes no interest in committees -- he focuses on the young, taking puppies to 'educate'.",
      "Squealer justifies the pigs' milk and apple privilege with the threat of Jones returning.",
    ],
    allegory: [
      "The pigs' appropriation of milk and apples mirrors the early Soviet elite's special privileges.",
      "Napoleon's quiet removal of the puppies parallels Stalin's building of the secret police (NKVD).",
      "Squealer's justification foreshadows Soviet propaganda techniques.",
    ],
    quotes: [
      { text: '"I will work harder"', speaker: 'Boxer' },
      { text: '"Surely you do not want Jones back?"', speaker: 'Squealer' },
    ],
  },
  {
    number: 4,
    title: 'The Battle of the Cowshed',
    icon: Swords,
    iconColour: 'text-blue-400',
    keyEvents: [
      'Jones and neighbouring farmers attack to retake the farm.',
      "Snowball leads the defence, having studied a book on Julius Caesar's campaigns.",
      'The animals win decisively. Snowball is wounded and awarded "Animal Hero, First Class".',
      'Boxer is distressed after appearing to kill a stable-lad (who later recovers).',
    ],
    characterDevelopment: [
      'Snowball proves himself a brave and capable military leader.',
      'Napoleon is notably absent from the front line.',
      "Boxer's gentle nature is revealed -- he is horrified at the thought of killing.",
      'Mollie is found hiding in her stall during the battle.',
    ],
    allegory: [
      'The Battle of the Cowshed represents the Russian Civil War (1918-1921) and the Allied intervention.',
      "Snowball's military leadership mirrors Trotsky's role as head of the Red Army.",
      "Napoleon's absence foreshadows Stalin's distance from the front lines of revolution.",
    ],
    quotes: [
      { text: '"The only good human being is a dead one"', speaker: 'Snowball' },
      { text: '"I have no wish to take life"', speaker: 'Boxer' },
    ],
  },
  {
    number: 5,
    title: "Snowball's Expulsion",
    icon: Wind,
    iconColour: 'text-cyan-400',
    keyEvents: [
      'Mollie defects to a neighbouring farm, lured by sugar and ribbons.',
      'Snowball and Napoleon clash over the windmill plan at a crucial meeting.',
      'Napoleon summons nine enormous dogs, who chase Snowball from the farm.',
      'Napoleon abolishes Sunday meetings and announces all decisions will be made by a committee of pigs.',
    ],
    characterDevelopment: [
      'Napoleon seizes total power -- his patience and ruthlessness are fully revealed.',
      "Snowball's idealism proves no defence against brute force.",
      'Boxer accepts the coup, adopting the maxim "Napoleon is always right".',
      'Squealer begins rewriting history, claiming Napoleon was never against the windmill.',
    ],
    allegory: [
      "Snowball's expulsion mirrors Trotsky's exile from the Soviet Union in 1929.",
      "The nine dogs represent Stalin's secret police.",
      "The end of democratic debate parallels Stalin's consolidation of one-party rule.",
      "Mollie's defection represents the flight of the Russian bourgeoisie and aristocracy.",
    ],
    quotes: [
      { text: '"Napoleon is always right"', speaker: 'Boxer' },
      { text: '"Discipline, comrades, iron discipline!"', speaker: 'Squealer' },
    ],
  },
  {
    number: 6,
    title: 'The Windmill and Trade',
    icon: LandPlot,
    iconColour: 'text-clay-600',
    keyEvents: [
      'Napoleon announces the windmill will be built after all -- claiming it was his idea.',
      'The animals work gruelling 60-hour weeks. Napoleon begins trading with neighbouring farms through a human solicitor, Mr Whymper.',
      'The pigs move into the farmhouse and begin sleeping in beds.',
      'The windmill is destroyed in a storm; Napoleon blames Snowball.',
    ],
    characterDevelopment: [
      "Napoleon's hypocrisy grows -- he adopts Snowball's plans while demonising Snowball.",
      'Squealer alters the Fourth Commandment: beds are acceptable so long as they have no sheets.',
      'Boxer works himself to exhaustion, rising earlier than anyone.',
      'The animals begin to doubt their own memories as history is rewritten.',
    ],
    allegory: [
      "The windmill represents Stalin's Five-Year Plans for rapid industrialisation.",
      "Trading with Mr Whymper mirrors the Soviet Union's contradictory trade with capitalist nations.",
      'Blaming Snowball for every setback mirrors the Soviet show trials and scapegoating of Trotsky.',
      "The rewriting of commandments represents the Soviet regime's manipulation of its own constitution.",
    ],
    quotes: [
      { text: '"Snowball has done this thing!"', speaker: 'Napoleon (on the windmill)' },
      { text: '"No animal shall sleep in a bed with sheets"', speaker: 'Altered Commandment' },
    ],
  },
  {
    number: 7,
    title: 'The Purges',
    icon: Skull,
    iconColour: 'text-red-500',
    keyEvents: [
      'A bitter winter brings near-starvation. Napoleon conceals the food shortage from the outside world.',
      'The hens rebel when ordered to surrender their eggs for trade; Napoleon starves them into submission.',
      'Napoleon stages public confessions and executions -- animals admit to conspiring with Snowball and are killed by the dogs.',
      'Clover looks out over the farm and senses something has gone terribly wrong, but cannot articulate it.',
    ],
    characterDevelopment: [
      "Napoleon's regime becomes openly violent and terroristic.",
      "Clover's silent grief is one of the novel's most moving passages -- she knows the revolution has been betrayed but lacks the words to say so.",
      "Squealer's propaganda reaches new heights as he claims Snowball was always a traitor.",
      "The hens' rebellion shows the limit of passive resistance under tyranny.",
    ],
    allegory: [
      "The executions directly parallel Stalin's Great Purge (1936-1938).",
      'The forced confessions mirror the Moscow Show Trials.',
      "The hens' egg rebellion may represent the Ukrainian resistance to forced collectivisation.",
      'The concealment of famine mirrors the Soviet cover-up of the Holodomor.',
    ],
    quotes: [
      {
        text: '"No animal shall kill any other animal without cause"',
        speaker: 'Altered Commandment',
      },
      { text: '"If Comrade Napoleon says it, it must be right"', speaker: 'Boxer' },
    ],
  },
  {
    number: 8,
    title: 'Napoleon the Leader',
    icon: ShieldAlert,
    iconColour: 'text-violet-400',
    keyEvents: [
      'Napoleon adopts the title "Leader" and is rarely seen in public, appearing only with a bodyguard of dogs.',
      'Squealer reads out fabricated statistics showing production has increased.',
      'Napoleon negotiates with both Frederick and Pilkington, eventually selling timber to Frederick.',
      'Frederick pays in forged banknotes and attacks the farm, dynamiting the windmill.',
      'The pigs discover whisky in the farmhouse cellar and get drunk.',
    ],
    characterDevelopment: [
      'Napoleon has fully transformed into a dictator -- remote, paranoid and surrounded by enforcers.',
      "Minimus composes a poem in Napoleon's honour, establishing a full personality cult.",
      "Squealer's statistics are complete fabrications -- the animals are hungrier than ever.",
      'Boxer remains loyal despite everything, fighting bravely in the Battle of the Windmill.',
    ],
    allegory: [
      "Napoleon's cult of personality mirrors Stalin's self-glorification.",
      "The deal with Frederick parallels the Nazi-Soviet Pact (1939) and Germany's subsequent betrayal.",
      "The forged banknotes represent Hitler's broken promises to Stalin.",
      'The Battle of the Windmill parallels the Battle of Stalingrad.',
      "The altered Fifth Commandment (alcohol) mirrors the Soviet elite's private luxuries.",
    ],
    quotes: [
      { text: '"Napoleon is always right"', speaker: 'Boxer (repeated)' },
      { text: '"No animal shall drink alcohol to excess"', speaker: 'Altered Commandment' },
    ],
  },
  {
    number: 9,
    title: "Boxer's Fate",
    icon: Eye,
    iconColour: 'text-rose-400',
    keyEvents: [
      'Boxer collapses while hauling stone for the rebuilt windmill.',
      'Napoleon promises to send Boxer to the veterinary surgeon. A van arrives marked "Horse Slaughterer".',
      "Benjamin reads the sign but is too late -- Boxer is taken to the knacker's.",
      'Squealer claims the van had been bought from the knacker and not yet repainted. The pigs buy a case of whisky.',
    ],
    characterDevelopment: [
      "Boxer's betrayal is the novel's emotional climax -- his lifetime of loyalty is repaid with death.",
      "Benjamin finally reacts, but too late -- Orwell's portrait of the intellectual who acts only when it is futile.",
      "Squealer's lie about the van is the most audacious and cruel of his propaganda.",
      "Clover's grief deepens, but she remains unable to resist.",
    ],
    allegory: [
      "Boxer's fate represents the betrayal of the Soviet working class by the regime they served.",
      "The whisky purchased with the proceeds of Boxer's death symbolises the elite profiting from workers' sacrifice.",
      "The knacker's van is Orwell's image of the totalitarian state disposing of those who are no longer useful.",
    ],
    quotes: [
      { text: '"I will work harder"', speaker: "Boxer's last effort" },
      { text: '"Fools! Do you not see what is written?"', speaker: 'Benjamin' },
    ],
  },
  {
    number: 10,
    title: 'Pigs and Men',
    icon: Scale,
    iconColour: 'text-slate-400',
    keyEvents: [
      'Years pass. Most animals who remember the Rebellion are dead.',
      'The pigs walk on two legs and carry whips.',
      'The Seven Commandments are replaced by a single line: "All animals are equal, but some animals are more equal than others."',
      'The pigs host a dinner for the neighbouring human farmers. Napoleon renames the farm "Manor Farm".',
      'The animals look through the window and cannot tell the pigs from the humans.',
    ],
    characterDevelopment: [
      'Napoleon has fully become Mr Jones -- the revolution has devoured its own ideals.',
      "Squealer's propaganda has succeeded so thoroughly that no one questions the new order.",
      'Clover, old and dimming, represents the last thread of honest memory.',
      'Benjamin remains cynical and unchanged -- he predicted this all along.',
    ],
    allegory: [
      'The pigs walking on two legs represents the Soviet leadership becoming indistinguishable from the capitalist ruling class they overthrew.',
      'The dinner with farmers parallels the Tehran Conference (1943) where Stalin allied with Churchill and Roosevelt.',
      'The renaming to Manor Farm signifies the complete circle back to pre-revolutionary conditions.',
      "The final image -- pig indistinguishable from man -- is Orwell's verdict on all revolutions that replace one elite with another.",
    ],
    quotes: [
      {
        text: '"All animals are equal, but some are more equal than others"',
        speaker: 'Final Commandment',
      },
      {
        text: '"The creatures outside looked from pig to man, and from man to pig"',
        speaker: 'Narrator',
      },
    ],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ChaptersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
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
          { name: 'Animal Farm', url: 'https://theenglishhub.app/revision/texts/animal-farm' },
          {
            name: 'Chapter-by-Chapter Analysis',
            url: 'https://theenglishhub.app/revision/texts/animal-farm/chapters',
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
            render={<Link href="/revision/texts/animal-farm" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Animal Farm
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-blue-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Chapter-by-Chapter Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Animal Farm by George Orwell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            All 10 chapters analysed with key events, character development, allegorical parallels
            and short quotations. Use this as a detailed revision companion alongside your own
            annotated copy.
          </p>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((ch) => {
        const Icon = ch.icon
        return (
          <section key={ch.number} id={`chapter-${ch.number}`}>
            <div className="mb-5 flex items-center gap-3">
              <Icon className={`size-5 ${ch.iconColour}`} />
              <h2 className="text-heading-lg font-heading text-foreground">
                Chapter {ch.number}: {ch.title}
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* Key Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">Key Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                  <ul className="list-disc space-y-2 pl-4">
                    {ch.keyEvents.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Character Development */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">
                    Character Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                  <ul className="list-disc space-y-2 pl-4">
                    {ch.characterDevelopment.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Allegory */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">
                    Allegorical Parallels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                  <ul className="list-disc space-y-2 pl-4">
                    {ch.allegory.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Key Quotes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">Key Quotes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-body-sm">
                  {ch.quotes.map((q, i) => (
                    <div key={i} className="rounded-lg border border-border/60 bg-muted/30 p-3">
                      <p className="font-medium italic text-foreground">{q.text}</p>
                      <p className="mt-1 text-caption uppercase tracking-wide text-primary">
                        {q.speaker}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>
        )
      })}

      {/* Rights / fair-dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <strong>Rights notice:</strong> While <em>Animal Farm</em> entered UK public domain in 2021,
        the Orwell estate (AM Heath) actively manages educational use. Quotations on this page are
        short fair-dealing extracts; longer engagement should use a school-licensed edition. Short
        quotations (each under 15 words) reproduced under the fair dealing provision of the
        Copyright, Designs and Patents Act 1988 (s.30) for the purpose of criticism, review and
        educational study. <em>Animal Farm</em> by George Orwell is published by Penguin Books. Full
        text available from your school or local library.
      </p>
    </div>
  )
}
