import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Users, Flame, Skull } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Lord of the Flies Chapter Summaries | The English Hub',
  description:
    'Detailed chapter-by-chapter analysis of Lord of the Flies by William Golding: key events, symbolism, character development and key quotations for every chapter.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/lord-of-the-flies/chapters',
  },
}

type ChapterData = {
  number: number
  title: string
  keyEvents: string[]
  symbolism: string[]
  characterDevelopment: string[]
  keyQuote: {
    text: string
    speaker: string
    analysis: string
  }
}

const chapters: ChapterData[] = [
  {
    number: 1,
    title: 'The Sound of the Shell',
    keyEvents: [
      'Ralph and Piggy discover the conch shell on the beach and use it to summon the scattered survivors.',
      'The boys hold their first assembly and elect Ralph as chief over Jack, who is humiliated.',
      'Jack, Ralph and Simon explore the island and confirm it is uninhabited.',
      'Jack hesitates when given the chance to kill a piglet caught in creepers.',
    ],
    symbolism: [
      'The conch represents democratic order and the right to speak; whoever holds it commands attention.',
      'The island initially appears as an Edenic paradise, echoing the Garden of Eden before the fall.',
      "Jack's inability to kill the piglet shows civilisation still restraining his violent instincts.",
    ],
    characterDevelopment: [
      'Ralph emerges as a natural, charismatic leader who values fairness and cooperation.',
      "Piggy is immediately marginalised despite his intelligence; the boys mock his body and asthma.",
      "Jack's choir marches in military formation, foreshadowing his authoritarian tendencies.",
    ],
    keyQuote: {
      text: '"We\'ve got to have rules and obey them. After all, we\'re not savages."',
      speaker: 'Jack -- Chapter 1',
      analysis:
        "Deeply ironic: Jack insists on civilised order here but will become the novel's chief agent of savagery.",
    },
  },
  {
    number: 2,
    title: 'Fire on the Mountain',
    keyEvents: [
      'Ralph insists on building a signal fire on the mountain to attract passing ships.',
      "A 'littlun' with a mulberry birthmark reports seeing a 'snake-thing' or beast in the jungle.",
      'The boys use Piggy\'s glasses to light the fire, which burns out of control and consumes part of the forest.',
      'The boy with the birthmark disappears and is never seen again.',
    ],
    symbolism: [
      'The signal fire symbolises hope of rescue and the boys\' connection to civilisation.',
      "Piggy's glasses represent intellect and scientific knowledge; seizing them foreshadows later theft.",
      "The uncontrolled fire is the first sign that the boys' good intentions can turn destructive.",
    ],
    characterDevelopment: [
      "Ralph shows leadership but also naivety -- he underestimates the difficulty of maintaining order.",
      "Piggy is ignored when he tries to take a register, highlighting society's contempt for reason.",
      'Jack begins to assert himself, dismissing the beast fears as childish.',
    ],
    keyQuote: {
      text: '"His specs -- use them as burning glasses!"',
      speaker: 'Jack -- Chapter 2',
      analysis:
        "Jack seizes Piggy's property without consent, reducing intellect to a tool for the group's immediate desire.",
    },
  },
  {
    number: 3,
    title: 'Huts on the Beach',
    keyEvents: [
      'Ralph and Simon struggle to build shelters while most boys play or swim.',
      'Jack becomes obsessed with hunting, painting his face and tracking pigs through the jungle.',
      "Ralph and Jack argue about priorities: rescue versus meat.",
      'Simon slips away to a hidden clearing in the jungle, his private sanctuary.',
    ],
    symbolism: [
      'The shelters represent civilisation, community and protection but keep collapsing, reflecting fragile order.',
      "Simon's secret clearing suggests his spiritual, contemplative nature, set apart from the others.",
      "Jack's face-paint is a mask that liberates him from civilised shame and self-consciousness.",
    ],
    characterDevelopment: [
      "Ralph grows frustrated as the gap between plans and action widens.",
      "Jack's transformation accelerates; he moves on all fours, 'dog-like,' becoming more animal than boy.",
      "Simon is established as a solitary, almost mystical figure who helps the littluns reach fruit.",
    ],
    keyQuote: {
      text: '"He tried to convey the compulsion to track down and kill."',
      speaker: 'Narrator on Jack -- Chapter 3',
      analysis:
        "Golding makes Jack's bloodlust visceral and involuntary: a 'compulsion,' not a rational choice.",
    },
  },
  {
    number: 4,
    title: 'Painted Faces and Long Hair',
    keyEvents: [
      "Roger throws stones at a littlun, Henry, but aims to miss -- the 'taboo of the old life' still holds.",
      'Jack paints his face and leads the hunters to kill their first pig.',
      'While the hunters are away, a ship passes the island but the signal fire has gone out.',
      "Ralph confronts Jack furiously; Jack smashes one lens of Piggy's glasses.",
    ],
    symbolism: [
      "Roger's stone-throwing marks civilisation's loosening grip; the invisible line he cannot yet cross will vanish.",
      "The face-paint is a liberating mask: behind it, Jack becomes 'an awesome stranger,' freed from guilt.",
      "The broken lens halves Piggy's vision -- reason is literally diminished.",
    ],
    characterDevelopment: [
      "Roger's sadism is introduced but still checked by memory of adult authority.",
      "Jack's first kill thrills him; he begins the ritual chant 'Kill the pig. Cut her throat. Spill her blood.'",
      "Ralph is devastated by the missed rescue; the gap between him and Jack becomes irreparable.",
    ],
    keyQuote: {
      text: '"Kill the pig. Cut her throat. Spill her blood."',
      speaker: 'Hunters\' chant -- Chapter 4',
      analysis:
        "The rhythmic, monosyllabic chant reduces killing to ritual. It will later mutate to accompany Simon's murder.",
    },
  },
  {
    number: 5,
    title: 'Beast from Water',
    keyEvents: [
      "Ralph calls an assembly to re-establish order, insisting on the fire, shelters and sanitation.",
      "The littluns' fear of the beast dominates the meeting and cannot be reasoned away.",
      "Simon tries to explain that the beast is internal -- 'maybe it's only us' -- but is shouted down.",
      "Jack defies the conch and leads boys away, breaking the meeting. Order collapses.",
    ],
    symbolism: [
      "The beast 'from water' represents the unknown terrors lurking in the boys' subconscious.",
      "The failed assembly shows democracy's inability to overcome irrational fear.",
      "The conch's authority weakens for the first time as Jack ignores its rules.",
    ],
    characterDevelopment: [
      "Ralph begins to doubt his own ability to lead and wishes for adult guidance.",
      "Simon's insight that the beast is within humanity marks him as the novel's moral visionary.",
      "Jack exploits fear to undermine Ralph, sensing that terror is more powerful than reason.",
    ],
    keyQuote: {
      text: '"Maybe there is a beast... maybe it\'s only us."',
      speaker: 'Simon -- Chapter 5',
      analysis:
        "The novel's thesis statement. Simon alone grasps that evil is not external but intrinsic to human nature.",
    },
  },
  {
    number: 6,
    title: 'Beast from Air',
    keyEvents: [
      'A dead parachutist lands on the mountain during the night, his body moving in the wind.',
      "Sam and Eric, on fire duty, see the figure and flee in terror, reporting a beast.",
      "The boys mount an expedition to search the island; Jack finds Castle Rock and imagines a fort.",
      "Ralph insists they must return to check the mountain and the signal fire.",
    ],
    symbolism: [
      'The dead parachutist is a literal sign from the adult world -- a world also at war and fallen.',
      "Castle Rock foreshadows Jack's fortress of tyranny in later chapters.",
      "The boys' projection of evil onto an external beast prevents them from confronting their own darkness.",
    ],
    characterDevelopment: [
      "Ralph clings to the signal fire as his purpose, showing his commitment to rescue and civilisation.",
      "Jack is more interested in Castle Rock's military potential than in being rescued.",
      "Sam and Eric, normally reliable, distort what they see through fear, showing how terror corrupts perception.",
    ],
    keyQuote: {
      text: '"However Simon thought of the beast, there rose before his inward sight the picture of a human."',
      speaker: 'Narrator -- Chapter 6',
      analysis:
        'Golding confirms Simon\'s insight: the true beast wears a human face.',
    },
  },
  {
    number: 7,
    title: 'Shadows and Tall Trees',
    keyEvents: [
      "On the march to the mountain, the boys hunt a boar; Ralph wounds it and is thrilled by the violence.",
      "The boys play-act the hunt with Robert as the pig, and the game turns dangerously rough.",
      "Ralph, Jack and Roger climb the mountain at dusk and see the dead parachutist's silhouette.",
      "All three flee in terror, convinced the beast is real.",
    ],
    symbolism: [
      "Ralph's excitement at wounding the boar reveals that savagery is latent in everyone, not just Jack.",
      "The mock hunt blurs the line between play and violence, showing how quickly boys become hunters.",
      "Darkness and shadows distort reality, reinforcing the theme that fear creates the monsters it imagines.",
    ],
    characterDevelopment: [
      "Ralph's fleeting bloodlust is a pivotal moment: even the democratic leader is susceptible to violence.",
      "Roger's eagerness during the mock hunt hints at the deeper cruelty he will later unleash.",
      "Jack uses the supposed beast sighting to further his authority.",
    ],
    keyQuote: {
      text: '"Ralph too was fighting to get near, to get a handful of that brown, vulnerable flesh."',
      speaker: 'Narrator -- Chapter 7',
      analysis:
        "Golding implicates even Ralph in the violence, proving no one is immune to the savage instinct.",
    },
  },
  {
    number: 8,
    title: 'Gift for the Darkness',
    keyEvents: [
      "Jack calls an assembly and tries to have Ralph deposed; when the vote fails, he leaves to form his own tribe.",
      "Jack's hunters kill a sow and mount her head on a stake as a 'gift for the beast.'",
      "Simon encounters the Lord of the Flies -- the pig's head -- which 'speaks' to him in a hallucination.",
      "The pig's head tells Simon the beast is part of the boys and cannot be escaped.",
    ],
    symbolism: [
      "The Lord of the Flies (Beelzebub) is the physical manifestation of innate human evil.",
      "The sow is killed in graphically sexualised violence, linking savagery with destruction of innocence.",
      "The 'gift for the darkness' is a pagan offering, marking the boys' descent into primitive ritual.",
    ],
    characterDevelopment: [
      "Jack's split from Ralph formalises the division between civilisation and savagery.",
      "Simon's confrontation with the pig's head is his spiritual crisis and moment of revelation.",
      "Piggy is relieved by Jack's departure, naively believing order will now be easier to maintain.",
    ],
    keyQuote: {
      text: '"Fancy thinking the Beast was something you could hunt and kill!"',
      speaker: 'The Lord of the Flies -- Chapter 8',
      analysis:
        "The pig's head mocks the boys' attempts to project evil outward. The beast lives inside them all.",
    },
  },
  {
    number: 9,
    title: 'A View to a Death',
    keyEvents: [
      "Simon discovers the dead parachutist on the mountain and realises the 'beast' is a dead man.",
      "Jack's tribe holds a feast with stolen meat; even Ralph and Piggy attend, drawn by hunger.",
      'A storm breaks as the boys perform their ritual dance, chanting "Kill the beast!"',
      "Simon stumbles out of the jungle to tell the truth; the boys mistake him for the beast and beat him to death.",
    ],
    symbolism: [
      "Simon's murder is staged as a sacrificial killing, echoing Christ's crucifixion -- the truth-bringer destroyed by the mob.",
      "The storm reflects the violence and chaos, pathetic fallacy at its most intense.",
      "The tide carries Simon's body out to sea in a passage of extraordinary beauty, granting him a kind of apotheosis.",
    ],
    characterDevelopment: [
      "Simon's death removes the only character who understood the island's moral reality.",
      "Ralph and Piggy participate in the circle dance, proving that complicity in violence extends to all.",
      "Jack has become a full tyrant, presiding over ritual and feast like a tribal chief.",
    ],
    keyQuote: {
      text: '"The beast struggled forward, broke the ring, fell over the steep edge of the rock."',
      speaker: 'Narrator -- Chapter 9',
      analysis:
        'Golding calls Simon "the beast," making the reader complicit in the boys\' delusion. The real beast is the mob.',
    },
  },
  {
    number: 10,
    title: 'The Shell and the Glasses',
    keyEvents: [
      "Ralph, Piggy, Sam and Eric are the only boys left on the beach; Ralph openly calls Simon's death murder.",
      "Piggy insists it was an accident and tries to rationalise their guilt.",
      "Jack's tribe raids Ralph's camp in the night and steals Piggy's glasses to control fire-making.",
      "Without the glasses, Ralph's group loses the power to signal for rescue.",
    ],
    symbolism: [
      "The theft of the glasses transfers the power of intellect and technology to the savages.",
      "The conch still exists but its authority is now meaningless without anyone to respect it.",
      "Fire shifts from symbol of rescue to tool of Jack's power.",
    ],
    characterDevelopment: [
      "Ralph is honest about what they did to Simon, showing moral awareness even through his guilt.",
      "Piggy's denial and rationalisation expose the limits of pure reason when confronting moral horror.",
      "Jack consolidates absolute power by controlling the only source of fire.",
    ],
    keyQuote: {
      text: '"That was Simon... That was murder."',
      speaker: 'Ralph -- Chapter 10',
      analysis:
        "Ralph refuses euphemism. Naming the act 'murder' is both courageous and isolating, setting him further apart from the group.",
    },
  },
  {
    number: 11,
    title: 'Castle Rock',
    keyEvents: [
      "Ralph's group goes to Castle Rock to demand Piggy's glasses back and appeal to Jack's sense of justice.",
      "Piggy holds the conch and delivers a final speech asking the boys to choose between rules and savagery.",
      "Roger levers a boulder from above that kills Piggy and shatters the conch.",
      "Jack hurls his spear at Ralph, who barely escapes. Sam and Eric are captured and tortured into joining Jack.",
    ],
    symbolism: [
      "The conch shattering into 'a thousand white fragments' is the death of democracy and ordered society.",
      "Piggy's death -- falling forty feet onto the rocks -- is the destruction of intellect and reason.",
      "Castle Rock is a fortress of totalitarian power, replacing the democratic assembly platform.",
    ],
    characterDevelopment: [
      "Piggy dies still believing in the power of rational argument, making his death both noble and futile.",
      "Roger has become a sadist freed from all civilised restraint; he kills deliberately and without remorse.",
      "Ralph is now entirely alone, hunted by the tribe that once elected him leader.",
    ],
    keyQuote: {
      text: '"The conch exploded into a thousand white fragments."',
      speaker: 'Narrator -- Chapter 11',
      analysis:
        "Democracy is destroyed in a single, violent image. The shattering is absolute and irreversible.",
    },
  },
  {
    number: 12,
    title: 'Cry of the Hunters',
    keyEvents: [
      "Ralph hides in the jungle, hunted by Jack's tribe who have sharpened a stick at both ends for his head.",
      "Sam and Eric, under torture, reveal Ralph's hiding place.",
      "Jack sets the island on fire to smoke Ralph out, destroying the fruit trees and shelter.",
      "Ralph collapses on the beach before a naval officer who has seen the smoke from a passing warship.",
    ],
    symbolism: [
      "The fire that was meant for rescue now hunts Ralph -- salvation and destruction fused in one image.",
      "The stick sharpened at both ends recalls the Lord of the Flies stake: Ralph's head would become another offering.",
      "The naval officer's crisp uniform is ironic -- he represents the adult 'civilisation' that is itself at war.",
    ],
    characterDevelopment: [
      "Ralph is reduced to a hunted animal, completing the novel's inversion of civilised boy to prey.",
      "The officer is embarrassed by the boys' savagery, expecting 'better' from British children -- an echo of the Coral Island myth Golding demolishes.",
      "Ralph weeps 'for the end of innocence, the darkness of man's heart,' achieving a final, devastating understanding.",
    ],
    keyQuote: {
      text: '"Ralph wept for the end of innocence, the darkness of man\'s heart."',
      speaker: 'Narrator -- Chapter 12',
      analysis:
        "The novel's closing judgement. Ralph mourns not just the dead but humanity's inescapable capacity for evil.",
    },
  },
]

export default async function LotFChaptersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb
        items={[
          { label: 'Revision', href: '/revision' },
          { label: 'Set Texts', href: '/revision/texts' },
          { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies' },
          { label: 'Chapters' },
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
            render={<Link href="/revision/texts/lord-of-the-flies" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Lord of the Flies
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-blue-400" />
              Chapter-by-Chapter Analysis
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Lord of the Flies -- Chapters
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            by William Golding -- published 1954
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Detailed analysis of all twelve chapters, covering key events, symbolism,
            character development and a key quotation for each.
          </p>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((ch) => (
        <section key={ch.number} id={`chapter-${ch.number}`}>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
              <span className="text-sm font-bold text-blue-400">{ch.number}</span>
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                Chapter {ch.number}: {ch.title}
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Key Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Flame className="size-4 text-orange-400" />
                  Key Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                {ch.keyEvents.map((e, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-orange-400/60" />
                    <p>{e}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Symbolism */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Skull className="size-4 text-violet-400" />
                  Symbolism
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                {ch.symbolism.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-violet-400/60" />
                    <p>{s}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Character Development */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Users className="size-4 text-emerald-400" />
                  Character Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                {ch.characterDevelopment.map((c, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                    <p>{c}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Quote */}
            <Card className="border-primary/20 bg-primary/[0.03]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Quote className="size-4 text-primary" />
                  Key Quotation
                </CardTitle>
                <CardDescription>{ch.keyQuote.speaker}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-body-md font-medium italic text-foreground">
                  {ch.keyQuote.text}
                </p>
                <p className="text-body-sm text-muted-foreground">{ch.keyQuote.analysis}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Copyright notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations from <em>Lord of the Flies</em> by William Golding (1954) are reproduced
        under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the
        purpose of criticism, review and educational study. Full text available from your school
        or local library.
      </p>
    </div>
  )
}
