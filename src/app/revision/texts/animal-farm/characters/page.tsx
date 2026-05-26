import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Users } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Animal Farm Characters - In-Depth Analysis | The English Hub',
    description:
      'Detailed character analysis for Animal Farm: Napoleon, Snowball, Squealer, Boxer, Old Major, Benjamin, Mollie and Clover. Allegorical significance, key quotes and character arcs.',
  },
  title: 'Animal Farm Characters - In-Depth Analysis',
  description:
    'Detailed character analysis for Animal Farm: Napoleon, Snowball, Squealer, Boxer, Old Major, Benjamin, Mollie and Clover. Allegorical significance, key quotes and character arcs.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/animal-farm/characters',
  },
}

/* ── Character data ────────────────────────────────────────────────────── */

type CharacterData = {
  name: string
  role: string
  allegorical: string
  description: string
  arc: string[]
  keyQuotes: { text: string; context: string }[]
  examTips: string[]
}

const characters: CharacterData[] = [
  {
    name: 'Napoleon',
    role: 'Berkshire boar; emerges as sole dictator of Animal Farm',
    allegorical:
      'Represents Joseph Stalin. Like Stalin, Napoleon is patient, calculating and ruthless. He has no interest in debate or ideas -- only in power. He eliminates rivals, rewrites history and builds a personality cult.',
    description:
      "Napoleon is Orwell's study in how dictators rise. He rarely speaks in public, preferring to work through intermediaries (Squealer) and enforcers (the dogs). He contributes nothing to the intellectual life of the farm -- Snowball designs the windmill, not Napoleon -- yet he takes credit for everything. His key qualities are patience, brutality and total indifference to the animals' suffering.",
    arc: [
      'Chapters 1-2: Quiet, unremarkable pig who listens to Old Major\'s speech. Takes the puppies to "educate" them privately.',
      "Chapters 3-5: Opposes Snowball's windmill plan, then uses his trained dogs to expel Snowball. Seizes absolute power and abolishes democratic meetings.",
      "Chapters 6-8: Adopts Snowball's windmill as his own idea. Stages show-trial executions. Builds a cult of personality with titles and a poem by Minimus.",
      'Chapters 9-10: Sells Boxer to the knacker. Walks on two legs, carries a whip, dines with humans. Renames the farm "Manor Farm". He has become Mr Jones.',
    ],
    keyQuotes: [
      {
        text: '"Napoleon is always right"',
        context: "Boxer's maxim -- shows how blind loyalty enables tyranny",
      },
      {
        text: '"Comrade Napoleon... is a terrible and magnificent boar"',
        context: "Minimus's poem -- satirises personality cults",
      },
      {
        text: '"All animals are equal, but some are more equal"',
        context: "Final commandment -- Napoleon's regime in a single line",
      },
    ],
    examTips: [
      'Compare Napoleon to Mr Jones to show how revolution replaces one oppressor with another.',
      "Track the progression of the Seven Commandments as a measure of Napoleon's corruption.",
      'Note that Napoleon never fights in any battle -- power without personal risk.',
    ],
  },
  {
    name: 'Snowball',
    role: 'Idealistic pig; intellectual leader driven into exile',
    allegorical:
      'Represents Leon Trotsky. Like Trotsky, Snowball is energetic, intellectually gifted and genuinely invested in improving the lives of the workers. He is outmanoeuvred and driven into exile, then turned into a scapegoat for everything that goes wrong.',
    description:
      'Snowball is the revolution\'s best hope and its greatest failure. He leads the Battle of the Cowshed, designs the windmill and tries to educate the animals. But Orwell refuses to idealise him: Snowball also participates in the pigs\' early privileges (milk and apples) and simplifies Animalism into the reductive slogan "Four legs good, two legs bad." His exile marks the death of honest debate on the farm.',
    arc: [
      'Chapters 1-2: Co-formulates Animalism. Energetic and articulate during the Rebellion.',
      "Chapters 3-4: Organises committees, reading classes and the farm's defence. Leads the animals to victory at the Cowshed.",
      'Chapter 5: Proposes the windmill. Napoleon unleashes the dogs and Snowball flees, never to return.',
      'Chapters 6-10: Absent physically but omnipresent as a scapegoat. Every failure is blamed on "Snowball\'s treachery."',
    ],
    keyQuotes: [
      {
        text: '"Four legs good, two legs bad"',
        context: "Snowball's simplification -- sows the seeds of intellectual decline",
      },
      {
        text: '"The only good human being is a dead one"',
        context: 'Battle of the Cowshed -- zealous revolutionary rhetoric',
      },
    ],
    examTips: [
      "Snowball is not perfect -- discuss how his simplifications enable Napoleon's later manipulation.",
      'After Chapter 5, Snowball exists only as a propaganda tool. Track how Squealer transforms him from hero to villain.',
      "Compare his intellectual approach (education, committees) with Napoleon's approach (dogs, fear).",
    ],
  },
  {
    name: 'Squealer',
    role: "Propagandist pig; Napoleon's mouthpiece",
    allegorical:
      "Represents the Soviet propaganda machine, especially the newspaper Pravda. Squealer shows how language can be weaponised to control a population. He is the mechanism by which Napoleon's lies become accepted truth.",
    description:
      'Squealer is small, fat and persuasive. Orwell says he can "turn black into white." He never holds formal power, but he is arguably the most important character in maintaining Napoleon\'s regime. Every altered commandment, every falsified production figure, every rewriting of history passes through Squealer. Without him, the animals would see the truth.',
    arc: [
      "Chapter 3: Justifies the pigs' milk and apple privilege by invoking the threat of Jones.",
      "Chapters 5-6: Rewrites history after Snowball's expulsion, claiming Napoleon always supported the windmill.",
      'Chapter 7: Orchestrates the public confessions before the executions.',
      'Chapters 8-10: Fabricates production statistics. Alters each commandment. Found one night lying beneath the barn wall with paint and a ladder -- the physical act of changing history.',
    ],
    keyQuotes: [
      {
        text: '"Surely you do not want Jones back?"',
        context: 'His go-to threat -- deflects criticism with fear',
      },
      {
        text: '"Discipline, comrades, iron discipline!"',
        context: "After Snowball's expulsion -- replaces debate with obedience",
      },
    ],
    examTips: [
      'Squealer is Orwell\'s central warning about propaganda. Link him to Orwell\'s essay "Politics and the English Language."',
      'Discuss the scene where Squealer is found with paint and a ladder -- the physical evidence of propaganda at work.',
      'He rarely threatens violence directly; his weapon is language. This makes him more insidious than the dogs.',
    ],
  },
  {
    name: 'Boxer',
    role: "Cart-horse; the revolution's muscle and moral heart",
    allegorical:
      'Represents the loyal, exploited working class -- the proletariat who gave everything to the revolution and received nothing in return. His two maxims capture the tragedy: "I will work harder" (selfless devotion) and "Napoleon is always right" (uncritical obedience).',
    description:
      "Boxer is the most physically powerful animal on the farm and the most emotionally vulnerable. He is honest, generous and incapable of questioning authority. His death -- sold to the knacker so the pigs can buy whisky -- is the novel's most devastating moment and Orwell's most savage indictment of totalitarianism.",
    arc: [
      'Chapters 1-3: Embraces Animalism wholeheartedly. Works harder than any other animal.',
      "Chapters 4-5: Fights bravely at the Cowshed but is distressed at the thought of killing. Accepts Napoleon's coup without question.",
      'Chapters 6-8: Works himself to exhaustion building the windmill. His health visibly declines.',
      'Chapter 9: Collapses. Napoleon sends him to the knacker disguised as a veterinary van. Benjamin realises too late.',
    ],
    keyQuotes: [
      {
        text: '"I will work harder"',
        context: 'His personal motto -- devotion exploited until death',
      },
      {
        text: '"Napoleon is always right"',
        context: 'His second maxim -- shows how loyalty becomes complicity',
      },
      {
        text: '"I have no wish to take life"',
        context: 'Battle of the Cowshed -- reveals his gentle nature',
      },
    ],
    examTips: [
      "Boxer's two maxims work together: one is admirable, the other dangerous. Explore how the second enables Napoleon.",
      "His death is the emotional climax. Discuss why Orwell makes the reader feel Boxer's betrayal so acutely.",
      'Compare Boxer and Benjamin: one trusts too much, the other trusts too little. Neither saves the farm.',
    ],
  },
  {
    name: 'Old Major',
    role: 'Prize boar; intellectual father of the revolution',
    allegorical:
      'Represents Karl Marx (the theorist of communism) and Vladimir Lenin (the revolutionary leader). Like Marx, Old Major provides the vision; like Lenin, he dies before seeing how the vision will be corrupted.',
    description:
      'Old Major is wise, respected and 12 years old -- ancient for a pig. His speech in Chapter 1 is the ideological foundation of Animalism. He identifies the real enemy (Man), articulates the dream (equality), and gives the animals their anthem ("Beasts of England"). But he is also conveniently dead before the hard work of governing begins, which is Orwell\'s quiet suggestion that theory without practice is incomplete.',
    arc: [
      'Chapter 1: Delivers his visionary speech. Teaches "Beasts of England." Dies three nights later.',
      'Chapters 2-10: His skull is displayed on a post in the yard -- venerated but increasingly irrelevant as the pigs distort his teachings beyond recognition.',
    ],
    keyQuotes: [
      {
        text: '"Man is the only creature that consumes without producing"',
        context: 'Identifies human exploitation -- the ideological seed',
      },
      {
        text: '"All men are enemies. All animals are comrades"',
        context: 'Binary worldview -- noble but dangerously simplistic',
      },
    ],
    examTips: [
      "Old Major's vision is decent but abstract. Discuss how its vagueness allows Napoleon to reshape it.",
      "His skull on a post parallels Lenin's embalmed body in Red Square -- a revolution worshipping its dead founder while betraying his ideas.",
      'Note that Old Major is never tested by power. He dies with his integrity intact precisely because he never has to govern.',
    ],
  },
  {
    name: 'Benjamin',
    role: 'Cynical donkey; the oldest animal on the farm',
    allegorical:
      'Represents the weary, disillusioned intellectual class who see clearly what is happening but refuse to act until it is too late. He may also represent Orwell himself -- the writer who understands tyranny but feels powerless to stop it.',
    description:
      'Benjamin never laughs. He claims that "life would go on as it had always gone on -- that is, badly." He is the only animal who can read as well as the pigs, yet he refuses to use this ability to help the others. His one moment of action -- screaming at the animals as Boxer is taken to the knacker -- comes too late.',
    arc: [
      'Chapters 1-5: Present but passive. He observes the corruption but makes no effort to challenge it.',
      'Chapters 6-8: His cynicism deepens. He appears unsurprised by each new betrayal.',
      "Chapter 9: Finally acts -- reads the sign on the knacker's van and tries to save Boxer. Too late.",
      'Chapter 10: Still alive at the end, unchanged. His silence has been complicit all along.',
    ],
    keyQuotes: [
      {
        text: '"Fools! Do you not see what is written?"',
        context: "The knacker's van -- the cost of waiting too long to speak",
      },
      {
        text: '"Life would go on as it had always gone on"',
        context: 'His fatalistic worldview -- intelligent but paralysing',
      },
    ],
    examTips: [
      "Benjamin is Orwell's challenge to the reader: understanding tyranny is not the same as resisting it.",
      'Compare him with Boxer: Boxer acts without thinking; Benjamin thinks without acting.',
      "Discuss whether Orwell condemns Benjamin's passivity or merely reports it.",
    ],
  },
  {
    name: 'Mollie',
    role: 'Vain white mare; defects to the humans',
    allegorical:
      'Represents the Russian bourgeoisie and aristocracy who fled after the Revolution, unwilling to sacrifice comfort and luxury for the collective good. She cares more about sugar and ribbons than about equality.',
    description:
      'Mollie is beautiful, foolish and entirely self-interested. She asks during the early meetings whether she will still be allowed sugar and ribbons -- the only questions that matter to her. She is found being stroked by a man from a neighbouring farm and eventually defects, reappearing "between the shafts of a smart dogcart" with a new owner.',
    arc: [
      'Chapter 2: Asks about ribbons during the Animalism debates -- concerned only with personal comfort.',
      'Chapter 4: Hides in her stall during the Battle of the Cowshed.',
      'Chapter 5: Caught fraternising with humans. Defects to Foxwood farm. Never seen again on Animal Farm.',
    ],
    keyQuotes: [
      {
        text: '"Will there still be sugar after the Rebellion?"',
        context: 'Her only concern -- luxury over liberation',
      },
    ],
    examTips: [
      'Mollie is often overlooked but she represents an important response to revolution: those who simply opt out.',
      'Contrast her with Boxer: she values comfort, he values duty. Neither is free.',
      'Her ribbons symbolise the superficial freedoms that capitalism offers at the expense of collective equality.',
    ],
  },
  {
    name: 'Clover',
    role: "Stout motherly mare; Boxer's companion",
    allegorical:
      "Represents the decent, compassionate working class who sense the revolution has been betrayed but lack the education or confidence to articulate their feelings. She is the reader's emotional surrogate.",
    description:
      'Clover is kind, protective and deeply moral. She shields the ducklings during Old Major\'s speech, comforts Boxer, and after the executions in Chapter 7 looks out over the farm with tears in her eyes, feeling that "this was not what they had aimed at." She is the character closest to the reader\'s own grief -- she knows something is wrong but cannot name it.',
    arc: [
      'Chapters 1-3: A warm, nurturing presence. Protects the younger animals.',
      'Chapter 7: After the executions, she gazes over the farm and senses the betrayal. She tries to think of the words but cannot.',
      "Chapter 9: Witnesses Boxer's removal. Her grief is silent and helpless.",
      'Chapter 10: Old and dim-sighted, she watches the pigs walk on two legs. She cannot see clearly enough to distinguish pig from man.',
    ],
    keyQuotes: [
      {
        text: '"These scenes of terror were not what they had looked forward to"',
        context: 'Chapter 7 -- the inarticulate grief of the betrayed',
      },
    ],
    examTips: [
      "Clover's Chapter 7 moment is crucial for exam essays on the theme of betrayal. She feels the truth but cannot express it.",
      'Compare her with Benjamin: she lacks the words, he has them but refuses to speak.',
      'Her dimming eyesight in Chapter 10 is symbolic -- the working class losing the ability to see the truth at all.',
    ],
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function CharactersPage() {
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
            name: 'Characters',
            url: 'https://theenglishhub.app/revision/texts/animal-farm/characters',
          },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
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
              <Users className="mr-1 size-3 text-emerald-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Animal Farm by George Orwell</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Eight key characters analysed in depth: role, allegorical significance, character arc,
            key quotations and exam tips. Each character is a lens through which Orwell examines
            power, loyalty and betrayal.
          </p>
        </div>
      </section>

      {/* Characters */}
      {characters.map((ch) => (
        <section key={ch.name} id={ch.name.toLowerCase().replace(/\s+/g, '-')}>
          <div className="mb-5 flex items-center gap-3">
            <Users className="size-5 text-emerald-400" />
            <h2 className="text-heading-lg font-heading text-foreground">{ch.name}</h2>
          </div>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-heading-md font-heading">{ch.name}</CardTitle>
              <CardDescription>{ch.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-body-sm text-muted-foreground">
              {/* Allegorical significance */}
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  Allegorical Significance
                </h3>
                <p>{ch.allegorical}</p>
              </div>

              {/* Description */}
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">Role in the Novel</h3>
                <p>{ch.description}</p>
              </div>

              {/* Character Arc */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Character Arc</h3>
                <ul className="list-disc space-y-2 pl-4">
                  {ch.arc.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Key Quotes */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Key Quotes</h3>
                <div className="space-y-3">
                  {ch.keyQuotes.map((q, i) => (
                    <div key={i} className="rounded-lg border border-border/60 bg-muted/30 p-3">
                      <p className="font-medium italic text-foreground">{q.text}</p>
                      <p className="mt-1 text-caption text-primary">{q.context}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Tips */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Exam Tips</h3>
                <ul className="list-disc space-y-2 pl-4">
                  {ch.examTips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}

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
