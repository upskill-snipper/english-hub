import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Quote, Sparkles, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Of Mice and Men - Character Analysis | The English Hub',
    description:
      "In-depth character analysis for Of Mice and Men by John Steinbeck: George, Lennie, Curley, Curley\\'s Wife, Crooks, Candy, Slim and The Boss.",
  },
  title: 'Of Mice and Men - Character Analysis',
  description:
    "In-depth character analysis for Of Mice and Men by John Steinbeck: George, Lennie, Curley, Curley's Wife, Crooks, Candy, Slim and The Boss.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/of-mice-and-men/characters',
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
    name: 'George Milton',
    role: 'Protective, sharp-tongued migrant worker',
    overview:
      'George is small, quick-witted and defined by his loyalty to Lennie. He carries the dream of owning land as much for Lennie as for himself, and his sharp tongue masks deep tenderness. Steinbeck uses George to show how the Depression forced decent men into impossible moral choices. He is both carer and killer, protector and executioner.',
    arc: "George begins as a frustrated but devoted companion, rehearsing the dream with Lennie like a bedtime story. As the novella progresses, his hope briefly flares when Candy offers money, only to be destroyed when Lennie kills Curley's wife. His final act - shooting Lennie at the pool - transforms him from dreamer to tragic figure. He chooses mercy over justice, and the cost is his own isolation.",
    keyQuotes: [
      {
        text: '"Guys like us, that work on ranches, are the loneliest guys in the world."',
        context: 'Chapter 1 - by the pool',
        analysis:
          'Introduces the theme of isolation and immediately positions George and Lennie as exceptions. The word "loneliest" foreshadows the ending when George becomes exactly that.',
      },
      {
        text: '"I could get along so easy if I didn\'t have you on my tail."',
        context: 'Chapter 1 - frustration with Lennie',
        analysis:
          "Reveals the strain of responsibility. Steinbeck makes George's sacrifice visible: he knows what freedom looks like but chooses loyalty instead.",
      },
      {
        text: '"I want you to stay with me, Lennie."',
        context: 'Chapter 6 - final scene',
        analysis:
          "George's last words to Lennie before pulling the trigger. The tenderness makes the violence unbearable and confirms their bond as the novella's emotional centre.",
      },
    ],
    examTip:
      "Always discuss George's final act in terms of moral complexity. Examiners reward candidates who avoid reducing it to simple mercy or murder and instead explore how Steinbeck makes both readings defensible.",
  },
  {
    name: 'Lennie Small',
    role: 'Gentle, physically powerful, learning disabled',
    overview:
      'Lennie is an enormous man with a child\'s mind and an uncontrollable love of soft things. His surname "Small" is Steinbeck\'s first irony: physically he is a giant, but socially and intellectually he is the most vulnerable character. Steinbeck presents him sympathetically to challenge the casual ableism of 1930s America and to make his death genuinely devastating.',
    arc: "Lennie's arc is one of repeating, escalating accidents. He kills mice, then a puppy, then a woman - the same compulsive stroking, the same panic, the same inability to control his own strength. Steinbeck structures this escalation so that Lennie's death feels both inevitable and heartbreaking. He never learns, because he cannot learn, and that is the tragedy.",
    keyQuotes: [
      {
        text: '"I got you to look after me, and you got me to look after you."',
        context: 'Chapter 1 - the dream recitation',
        analysis:
          'Captures the childlike clarity of their bond. The mutual dependence is the emotional core of the novella, even though it is George who does most of the protecting.',
      },
      {
        text: '"Tell about the rabbits, George."',
        context: 'Recurring - Chapters 1, 3, 6',
        analysis:
          "The repeated refrain of the dream. Its final appearance, seconds before Lennie's death, is the novella's most devastating line. The rabbits symbolise innocence that can never be realised.",
      },
      {
        text: '"I done a bad thing."',
        context: "Chapter 5 - after killing Curley's wife",
        analysis:
          'Lennie knows he has done wrong but cannot comprehend the magnitude. Steinbeck uses his simplicity to expose the gap between moral awareness and moral responsibility.',
      },
    ],
    examTip:
      "Discuss Lennie in terms of Steinbeck's social purpose. Examiners value candidates who connect his characterisation to 1930s attitudes toward disability and who analyse the foreshadowing pattern of escalating violence.",
  },
  {
    name: 'Curley',
    role: 'Aggressive son of the ranch boss',
    overview:
      'Curley is small, pugnacious and obsessed with proving his masculinity. He wears a "glove fulla Vaseline" to keep his hand soft for his wife - a detail that makes the other men uncomfortable and signals his insecurity. Steinbeck uses Curley to embody the petty tyranny that thrives when men have just enough power to abuse it.',
    arc: 'Curley begins as a bully looking for fights and ends as a vengeful husband leading a lynch mob. His broken hand - crushed by Lennie in self-defence - humiliates him publicly and drives his need for revenge. He never develops self-awareness; he remains a small man wielding borrowed authority throughout.',
    keyQuotes: [
      {
        text: '"Come on, ya big son-of-a-bitch."',
        context: 'Chapter 3 - picking a fight with Lennie',
        analysis:
          'Curley targets the largest, most vulnerable man to assert dominance. Steinbeck exposes how bullies choose victims who cannot or will not fight back.',
      },
      {
        text: '"I\'ll kill the big son-of-a-bitch myself."',
        context: "Chapter 5 - after his wife's death",
        analysis:
          "Curley's rage is fuelled more by wounded pride than by grief. Steinbeck shows that his violence toward Lennie mirrors his earlier aggression - it is about power, not justice.",
      },
    ],
    examTip:
      "Compare Curley with Slim to show Steinbeck's contrast between two models of masculinity. Examiners reward candidates who analyse Curley as a structural representation of toxic power rather than a simple villain.",
  },
  {
    name: "Curley's Wife",
    role: 'Unnamed, lonely, trapped',
    overview:
      "The only significant female character is never given a name, reducing her to her husband's property. At first she appears flirtatious and dangerous - \"jail bait\" in George's words - but Steinbeck gradually reveals her as a lost young woman whose own dreams have been crushed. Her loneliness mirrors the men's, and her death is the hinge of the entire tragedy.",
    arc: "Curley's wife moves from apparent threat to sympathetic victim. Her confession to Lennie in the barn - about her dream of being in pictures - humanises her moments before her death. Steinbeck delays this vulnerability so the reader reappraises her posthumously, forcing a reckoning with the sexism that silenced her throughout.",
    keyQuotes: [
      {
        text: '"I get lonely. You can talk to people, but I can\'t talk to nobody."',
        context: 'Chapter 5 - to Lennie in the barn',
        analysis:
          "Humanises her just before her death and reframes her as a victim of isolation rather than a cause of trouble. Steinbeck uses her loneliness to universalise the novella's central theme.",
      },
      {
        text: '"Coulda been in the movies, an\' had nice clothes."',
        context: 'Chapter 5 - confiding in Lennie',
        analysis:
          "Her dream of Hollywood parallels the men's dream of land. Steinbeck shows that the Depression crushed women's aspirations as ruthlessly as men's, but with even fewer escape routes.",
      },
      {
        text: '"Think I don\'t like to talk to somebody ever\' once in a while?"',
        context: "Chapter 4 - in Crooks's room",
        analysis:
          'Her desperation overrides social boundaries. Steinbeck shows how isolation can drive people to cross lines of race and gender, only to reinforce them when threatened.',
      },
    ],
    examTip:
      'Always discuss her namelessness as a deliberate authorial choice. Examiners expect analysis of how Steinbeck uses her to critique 1930s gender roles while also showing her capacity for cruelty - she threatens Crooks with lynching, complicating any simple victim reading.',
  },
  {
    name: 'Crooks',
    role: 'Isolated black stable hand',
    overview:
      'Crooks is the only Black character on the ranch and is segregated from the other workers because of his race. He sleeps in the harness room, reads books and has developed a hard, defensive shell. Steinbeck uses him to expose the entrenched racism of the period and to show how prejudice corrodes the soul of those it targets.',
    arc: "Crooks's arc is compressed into Chapter 4 but devastating. When Lennie enters his room uninvited, Crooks initially resists, then opens up, then briefly allows himself to hope he might join the dream. When Curley's wife threatens him with lynching, he withdraws completely, retreating behind his racial barrier. Steinbeck shows that the American Dream is not available to everyone.",
    keyQuotes: [
      {
        text: '"A guy needs somebody - to be near him."',
        context: 'Chapter 4 - to Lennie',
        analysis:
          "Reveals the devastating loneliness of segregation. Steinbeck universalises Crooks's pain: the need for companionship is human, but racism denies it to him specifically.",
      },
      {
        text: "\"S'pose you didn't have nobody... A guy goes nuts if he ain't got nobody.\"",
        context: 'Chapter 4 - reflecting on isolation',
        analysis:
          "Crooks describes the psychological damage of enforced solitude. Steinbeck uses his intelligence and articulacy to make racism's waste of human potential visible.",
      },
      {
        text: '"I ain\'t wanted in the bunk house."',
        context: 'Chapter 4 - explaining his segregation',
        analysis:
          'A matter-of-fact statement that carries enormous weight. Steinbeck lets the simplicity of the language expose the brutality of the system.',
      },
    ],
    examTip:
      "Focus on Chapter 4 as a microcosm of the novella's themes. Examiners value candidates who analyse how Crooks's brief hope and rapid retreat mirror the structure of the dream itself - raised, glimpsed, then destroyed.",
  },
  {
    name: 'Candy',
    role: 'Aging one-handed swamper',
    overview:
      'Candy is old, disabled and terrified of becoming useless. His ancient dog - once the finest sheepdog in the county - is shot by Carlson because it "stinks" and can no longer work. Steinbeck uses the parallel between Candy and his dog to expose how capitalism discards those who can no longer produce. Candy\'s desperation to buy into the dream is the most poignant expression of hope in the novella.',
    arc: "Candy moves from passive acceptance to active hope and back to despair. When he overhears the dream, he offers his savings and transforms the fantasy into something almost achievable. After Lennie kills Curley's wife, Candy begs George to continue without Lennie, but both know the dream is dead. His grief at the end mirrors George's.",
    keyQuotes: [
      {
        text: '"I ought to of shot that dog myself, George."',
        context: 'Chapter 3 - after Carlson kills the dog',
        analysis:
          'Foreshadows the ending and teaches George the lesson he will act on at the pool. Steinbeck links mercy killing to personal responsibility with devastating economy.',
      },
      {
        text: '"S\'pose I went in with you guys."',
        context: 'Chapter 3 - offering to join the dream',
        analysis:
          "The moment hope becomes tangible. Steinbeck lets the reader believe alongside the characters, making the dream's destruction more painful.",
      },
      {
        text: '"You God damn tramp... You done it, di\'n\'t you?"',
        context: "Chapter 5 - to Curley's wife's body",
        analysis:
          "Candy's anger is misdirected at the dead woman rather than at the system that created the tragedy. Steinbeck shows how grief can reinforce prejudice.",
      },
    ],
    examTip:
      "Link Candy to the theme of disposability. Examiners reward candidates who discuss the dog's death as a structural parallel to Lennie's and who connect both to Steinbeck's critique of a society that values people only for their labour.",
  },
  {
    name: 'Slim',
    role: "The ranch's moral compass",
    overview:
      'Slim is the mule driver and the most respected man on the ranch. Steinbeck describes him with near-religious language: his authority is "so great that his word was taken on any subject." He is calm, perceptive and compassionate - the only character who truly understands George\'s final choice. He represents a quiet, dignified masculinity that contrasts with Curley\'s aggression.',
    arc: 'Slim does not change, and that is the point. He is a fixed moral reference against which the other characters are measured. His approval of George\'s decision - "You hadda, George" - validates the mercy killing and gives the reader permission to mourn rather than judge. He is the closest thing the novella has to a moral authority.',
    keyQuotes: [
      {
        text: '"You hadda, George. I swear you hadda."',
        context: 'Chapter 6 - final lines',
        analysis:
          "The respected moral voice validates George's impossible choice and closes the novella with painful compassion. Steinbeck uses Slim to give the ending moral weight.",
      },
      {
        text: '"Ain\'t many guys travel around together... Maybe ever\'body in the whole world is scared of each other."',
        context: 'Chapter 3 - to George',
        analysis:
          'Slim identifies the universal fear that prevents human connection. Steinbeck uses him to articulate what the other characters feel but cannot express.',
      },
    ],
    examTip:
      "Use Slim as a contrast with Curley to discuss Steinbeck's presentation of masculinity. Examiners value candidates who treat Slim not as a character who changes but as a structural device - a moral benchmark.",
  },
  {
    name: 'The Boss',
    role: 'Ranch owner',
    overview:
      'The Boss appears only once, in Chapter 2, when he interviews George and Lennie. He is suspicious of their travelling together - "What stake you got in this guy?" - because the system he operates in makes friendship between workers seem abnormal. Steinbeck uses him to represent the economic power that keeps workers atomised and disposable.',
    arc: 'The Boss has no arc. He exists to establish the power structure of the ranch and to demonstrate that the economic system views companionship with suspicion. His brief appearance is enough to show that even relatively decent employers are embedded in a structure that dehumanises workers.',
    keyQuotes: [
      {
        text: '"What stake you got in this guy?"',
        context: 'Chapter 2 - interviewing George',
        analysis:
          "The Boss cannot comprehend selfless friendship because the economic system has taught him that all relationships are transactional. Steinbeck uses the question to expose capitalism's corrosion of human bonds.",
      },
    ],
    examTip:
      'The Boss is a minor character, but his question reveals a key theme. Examiners value brief, pointed analysis of minor characters over lengthy plot summary. Use The Boss to discuss systemic distrust of worker solidarity.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function OfMiceAndMenCharactersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['edexcel-igcse']
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
            name: 'Of Mice and Men',
            url: 'https://theenglishhub.app/revision/texts/of-mice-and-men',
          },
          {
            name: 'Characters',
            url: 'https://theenglishhub.app/revision/texts/of-mice-and-men/characters',
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
            render={<Link href="/revision/texts/of-mice-and-men" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Of Mice and Men
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-violet-400" />
              Modern Text - Novella
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              Edexcel IGCSE
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Of Mice and Men by John Steinbeck
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Deep profiles for every major character: overview, arc, key quotations and examiner
            tips. All quotes are 15 words or fewer.
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
                {/* Overview */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Overview</h3>
                  <p className="text-body-sm text-muted-foreground">{c.overview}</p>
                </div>

                {/* Arc */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">Character arc</h3>
                  <p className="text-body-sm text-muted-foreground">{c.arc}</p>
                </div>

                {/* Key quotes */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                  {c.keyQuotes.map((q) => (
                    <div
                      key={q.text}
                      className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-1.5"
                    >
                      <p className="text-body-md font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption uppercase tracking-wide text-primary">
                        {q.context}
                      </p>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </div>
                  ))}
                </div>

                {/* Exam tip */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Quote className="size-3.5 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Exam tip
                    </p>
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
          render={<Link href="/revision/texts/of-mice-and-men/key-quotes" />}
        >
          Key quotes
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
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and
        Patents Act 1988 for criticism and review. Full text available from your school or local
        library.
      </p>
    </div>
  )
}
