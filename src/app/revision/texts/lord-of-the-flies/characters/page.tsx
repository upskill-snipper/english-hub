import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Users, Quote, Sparkles, Shield, Skull } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Lord of the Flies Character Analysis | The English Hub',
  description:
    'In-depth character analysis for Lord of the Flies by William Golding: Ralph, Jack, Piggy, Simon, Roger, Sam and Eric -- allegorical roles, development and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/lord-of-the-flies/characters',
  },
}

type CharacterData = {
  name: string
  role: string
  allegoricalRole: string
  overview: string
  development: string[]
  keyQuotes: { text: string; context: string }[]
  examTip: string
}

const characters: CharacterData[] = [
  {
    name: 'Ralph',
    role: 'Elected chief, protagonist',
    allegoricalRole: 'Democracy, civilisation and moral order',
    overview:
      'Ralph is elected leader in Chapter 1 because of his physical attractiveness and possession of the conch. He represents democratic governance, insisting on rules, shelters and the signal fire. Golding makes him sympathetic but deliberately ordinary -- he is not exceptionally clever or brave, which makes his struggle to maintain order more realistic and his eventual defeat more devastating.',
    development: [
      'Begins as a confident, optimistic leader who believes rescue is inevitable and order is natural.',
      'Grows increasingly frustrated as the boys ignore his rules; the shelters collapse, the fire goes out and meetings dissolve into chaos.',
      'In Chapter 7, Ralph experiences the thrill of wounding a boar, briefly revealing the savage instinct within even him.',
      'Participates in the frenzied dance that kills Simon, showing that complicity in violence is universal.',
      'By Chapter 12 he is hunted like an animal across the burning island, stripped of all authority.',
      'His final weeping "for the end of innocence, the darkness of man\'s heart" is the novel\'s moral conclusion.',
    ],
    keyQuotes: [
      { text: '"We\'ve got to have rules and obey them."', context: 'Ch. 1 -- establishing democratic order' },
      { text: '"The fire is the most important thing."', context: 'Ch. 2 -- prioritising rescue over hunting' },
      { text: '"That was Simon... That was murder."', context: 'Ch. 10 -- refusing to deny the truth' },
      { text: '"Ralph wept for the end of innocence."', context: 'Ch. 12 -- final moral reckoning' },
    ],
    examTip:
      'Ralph is most useful for questions on civilisation vs savagery, leadership and loss of innocence. Emphasise that Golding makes him flawed -- his moment of bloodlust in Chapter 7 proves no one is exempt from the "darkness of man\'s heart."',
  },
  {
    name: 'Jack Merridew',
    role: 'Head hunter, eventual dictator',
    allegoricalRole: 'Authoritarianism, savagery and the will to power',
    overview:
      'Jack arrives on the island already in a position of authority as leader of the choir. He is humiliated by losing the election to Ralph and spends the novel clawing back power through fear, spectacle and violence. Golding uses him as a portrait of how dictators rise: by exploiting fear, offering the thrill of hunting and punishing dissenters.',
    development: [
      'In Chapter 1 he insists on rules and cannot kill the piglet, showing civilisation still restrains him.',
      'Becomes obsessed with hunting; in Chapter 4 he paints his face and the mask "liberates him from shame and self-consciousness."',
      'Lets the signal fire go out while a ship passes, prioritising the hunt over rescue.',
      'In Chapter 8 he splits from Ralph\'s group and forms his own tribe based on meat, ritual and obedience.',
      'Presides over Simon\'s murder during the feast in Chapter 9 and Piggy\'s death in Chapter 11.',
      'By Chapter 12 he has set the entire island ablaze to hunt Ralph, destroying everything to maintain power.',
    ],
    keyQuotes: [
      { text: '"We\'re not savages. We\'re English."', context: 'Ch. 2 -- ironic confidence in civilisation' },
      { text: '"Bollocks to the rules! We\'re strong."', context: 'Ch. 5 -- rejecting democratic order' },
      { text: '"Kill the pig. Cut her throat."', context: 'Ch. 4 -- ritual chant marking descent' },
      { text: '"Sharpen a stick at both ends."', context: 'Ch. 12 -- planning to mount Ralph\'s head' },
    ],
    examTip:
      'Jack is essential for essays on power, fear and the fragility of civilisation. Note the irony of his opening insistence on rules. His painted face is a key symbol: when Jack hides behind the mask, the "taboo of the old life" falls away.',
  },
  {
    name: 'Piggy',
    role: 'Rational outsider, Ralph\'s adviser',
    allegoricalRole: 'Intellect, science and rational thought',
    overview:
      'Piggy is the most intelligent boy on the island but is consistently marginalised because of his body, his asthma and his working-class accent. His glasses -- the only tool for making fire -- symbolise the power of scientific knowledge. Golding uses Piggy to show how societies dismiss reason when it comes from the "wrong" person, and how intellect alone cannot resist brute force.',
    development: [
      'From the start he is mocked -- "Sucks to your ass-mar!" -- despite being the one who recognises the conch\'s potential.',
      'Acts as Ralph\'s adviser, urging practical solutions: a register, shelters, sanitation rules.',
      'After Simon\'s death in Chapter 9, Piggy rationalises the murder as an accident, exposing the limits of logic when confronting moral horror.',
      'After Jack steals his glasses in Chapter 10, Piggy is nearly blind -- intellect without power is helpless.',
      'He dies in Chapter 11 still clutching the conch, still believing reason should prevail, killed by Roger\'s boulder.',
    ],
    keyQuotes: [
      { text: '"Sucks to your ass-mar!"', context: 'Ch. 1 -- the boys\' immediate cruelty' },
      { text: '"Which is better -- law and rescue, or hunting and breaking things up?"', context: 'Ch. 11 -- final appeal to reason' },
      { text: '"I got the conch! I got a right to speak!"', context: 'Ch. 2 -- insisting on democratic process' },
    ],
    examTip:
      'Piggy is vital for questions on civilisation, social class and the role of intellect. His death alongside the conch\'s destruction is the single most symbolic moment in the novel -- democracy and reason destroyed together.',
  },
  {
    name: 'Simon',
    role: 'Visionary, prophetic outsider',
    allegoricalRole: 'Spiritual truth, innate goodness, a Christ figure',
    overview:
      'Simon is the moral and spiritual centre of the novel. A quiet, epileptic boy, he alone understands that the beast is not an external creature but "part of" the boys themselves. His confrontation with the Lord of the Flies and his subsequent murder during the storm are staged with deliberate religious overtones -- the truth-teller sacrificed by the mob.',
    development: [
      'Established early as different: he helps the littluns reach fruit and retreats to a secret clearing for solitary contemplation.',
      'In Chapter 5 he tries to articulate the idea that the beast is internal -- "maybe it\'s only us" -- but the boys shout him down.',
      'In Chapter 8 he hallucinates a conversation with the Lord of the Flies, which tells him "I\'m part of you."',
      'In Chapter 9 he climbs the mountain alone, discovers the dead parachutist is a harmless corpse and rushes to tell the others.',
      'He is beaten to death during the ritual dance, his body washed out to sea in a passage of luminous, almost sacred imagery.',
    ],
    keyQuotes: [
      { text: '"Maybe there is a beast... maybe it\'s only us."', context: 'Ch. 5 -- the novel\'s thesis' },
      { text: '"Fancy thinking the Beast was something you could hunt and kill!"', context: 'Ch. 8 -- the Lord of the Flies speaks' },
      { text: '"What else is there to do?"', context: 'Ch. 8 -- the inevitability of confronting truth' },
    ],
    examTip:
      'Simon is the key character for essays on the beast, innate evil, and religious allegory. His death is structurally parallel to a crucifixion: a figure who brings truth is destroyed by a fearful crowd. Contrast his moral insight with Piggy\'s rationalism.',
  },
  {
    name: 'Roger',
    role: 'Jack\'s lieutenant, sadist',
    allegoricalRole: 'Unchecked cruelty, the id unleashed without civilisation\'s restraint',
    overview:
      'Roger begins as a quiet, furtive boy and ends as a torturer and murderer. Golding uses him to chart the removal of civilised restraint in precise stages. In Chapter 4, Roger throws stones at a littlun but "the taboo of the old life" makes him aim to miss. By Chapter 11, no taboo remains and he levers a boulder that kills Piggy without hesitation.',
    development: [
      'In Chapter 4, his stone-throwing at Henry establishes the "invisible yet strong" arm of civilised conditioning.',
      'He joins Jack\'s tribe early and embraces the painted mask and hunting rituals.',
      'Takes an active role in Simon\'s murder during the frenzied dance in Chapter 9.',
      'In Chapter 11 he deliberately kills Piggy by rolling a boulder from Castle Rock -- Golding writes that the lever moves "with a sense of delirious abandonment."',
      'By Chapter 12 he has become Jack\'s torturer, wielding "a nameless authority" over the tribe.',
    ],
    keyQuotes: [
      { text: '"Roger gathered a handful of stones and began to throw them."', context: 'Ch. 4 -- the taboo still holds' },
      { text: '"Roger, with a sense of delirious abandonment, leaned his weight on the lever."', context: 'Ch. 11 -- the taboo broken' },
    ],
    examTip:
      'Roger is crucial for essays on civilisation vs savagery and innate evil. His progression from missing on purpose to killing without remorse is one of Golding\'s most precise demonstrations of the thesis. Pair the Chapter 4 stone-throwing with the Chapter 11 boulder for maximum analytical contrast.',
  },
  {
    name: 'Sam and Eric (Samneric)',
    role: 'Inseparable twins',
    allegoricalRole: 'The ordinary individual, conformity and peer pressure',
    overview:
      'Treated by Golding almost as a single character, Sam and Eric represent the decent, ordinary person who wants to do right but ultimately submits to the stronger force. Their journey from loyal supporters of Ralph to reluctant members of Jack\'s tribe illustrates how totalitarian regimes absorb the majority through fear rather than conviction.',
    development: [
      'They are among Ralph\'s most reliable allies, maintaining the signal fire and attending assemblies.',
      'In Chapter 6, their terrified report of the "beast" (the dead parachutist) accelerates the island\'s descent into fear.',
      'They participate in Simon\'s murder alongside everyone else in Chapter 9.',
      'In Chapter 11, they are captured at Castle Rock and forced under torture to join Jack\'s tribe.',
      'In Chapter 12 they reveal Ralph\'s hiding place under duress, betraying him despite their sympathy.',
    ],
    keyQuotes: [
      { text: '"They were savages it was true; but they were Samneric."', context: 'Ch. 12 -- identity consumed by the tribe' },
      { text: '"You got to go because it\'s not safe."', context: 'Ch. 12 -- warning Ralph even after joining Jack' },
    ],
    examTip:
      'Sam and Eric are useful for essays on fear, conformity and the mechanics of totalitarianism. They show that most people do not actively choose evil but are coerced into compliance -- making them more relatable and arguably more disturbing than Jack or Roger.',
  },
]

export default async function LotFCharactersPage() {
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
          { label: 'Characters' },
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
            render={<Link href="/revision/texts/lord-of-the-flies" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Lord of the Flies
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Users className="mr-1 size-3 text-emerald-400" />
              Character Analysis
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Lord of the Flies -- Characters
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            by William Golding -- published 1954
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Detailed analysis of every major character, including their allegorical roles,
            development across the novel, key quotations and exam-focused advice.
          </p>
        </div>
      </section>

      {/* Allegorical Overview */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Allegorical Framework</h2>
        </div>
        <Card>
          <CardContent className="p-6 sm:p-8 text-body-sm text-muted-foreground space-y-3">
            <p>
              <em>Lord of the Flies</em> is an allegory: each character represents an abstract idea
              or force in human nature and society. Golding uses the boys to stage a debate about
              whether civilisation is inherent or merely a fragile construction.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-2">
              {characters.map((ch) => (
                <div
                  key={ch.name}
                  className="rounded-xl border border-border/60 bg-background/50 p-3 space-y-1"
                >
                  <p className="text-sm font-semibold text-foreground">{ch.name}</p>
                  <p className="text-xs text-muted-foreground">{ch.allegoricalRole}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Individual Characters */}
      {characters.map((ch) => (
        <section key={ch.name} id={ch.name.toLowerCase().replace(/\s+/g, '-')}>
          <div className="mb-5 flex items-center gap-3">
            <Shield className="size-5 text-emerald-400" />
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{ch.name}</h2>
              <p className="text-body-sm text-muted-foreground">{ch.role}</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Overview</CardTitle>
                <CardDescription>Allegorical role: {ch.allegoricalRole}</CardDescription>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{ch.overview}</p>
              </CardContent>
            </Card>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* Development */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                    <Users className="size-4 text-emerald-400" />
                    Character Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-body-sm text-muted-foreground">
                  {ch.development.map((d, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-emerald-400/60" />
                      <p>{d}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Key Quotes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                    <Quote className="size-4 text-violet-400" />
                    Key Quotations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {ch.keyQuotes.map((q, i) => (
                    <div key={i} className="space-y-0.5">
                      <p className="text-body-sm font-medium italic text-foreground">{q.text}</p>
                      <p className="text-caption text-muted-foreground">{q.context}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Exam Tip */}
            <Card className="border-primary/20 bg-primary/[0.03]">
              <CardContent className="flex gap-3 p-5">
                <Skull className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Exam Tip</p>
                  <p className="text-body-sm text-muted-foreground">{ch.examTip}</p>
                </div>
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
