'use client'

import Link from 'next/link'
import { ArrowLeft, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ─── Types ──────────────────────────────────────────────────── */

type KeyQuote = {
  quote: string
  speaker: string
  act: string
  analysis: string
}

type ThemeQuotes = {
  theme: string
  colour: string
  quotes: KeyQuote[]
}

/* ─── Data ───────────────────────────────────────────────────── */

const QUOTES_BY_THEME: ThemeQuotes[] = [
  {
    theme: 'Love',
    colour: 'bg-rose-400',
    quotes: [
      {
        quote: 'O brawling love, O loving hate, / O anything of nothing first create!',
        speaker: 'Romeo',
        act: 'Act 1, Scene 1',
        analysis:
          'Romeo\'s stacked oxymorons reveal his love for Rosaline as a performance. The paradoxes cancel out, suggesting this "love" is empty and artificial. Shakespeare uses it as a foil for Romeo\'s later authentic passion for Juliet.',
      },
      {
        quote: 'If I profane with my unworthiest hand / This holy shrine, the gentle sin is this: / My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss.',
        speaker: 'Romeo',
        act: 'Act 1, Scene 5',
        analysis:
          'The shared sonnet elevates first meeting to sacred ritual. The pilgrim-and-saint conceit presents love as devotion and Juliet as divine. Both lovers participate equally, completing each other\'s lines -- Shakespeare shows mutual love in form as well as content.',
      },
      {
        quote: 'My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite.',
        speaker: 'Juliet',
        act: 'Act 2, Scene 2',
        analysis:
          'Juliet redefines love as abundance. The sea metaphor suggests love beyond human control. "The more I give... the more I have" inverts economic logic: love grows through generosity, not acquisition.',
      },
      {
        quote: 'Give me my Romeo; and when I shall die, / Take him and cut him out in little stars, / And he will make the face of heaven so fine / That all the world will be in love with night.',
        speaker: 'Juliet',
        act: 'Act 3, Scene 2',
        analysis:
          'Juliet\'s epithalamium transforms Romeo into a cosmic image. "My Romeo" claims ownership against patriarchal convention. "Die" carries an Elizabethan double meaning (sexual climax), linking love, sex and death. The stars image foreshadows Romeo\'s association with fate and astrology.',
      },
      {
        quote: 'These violent delights have violent ends / And in their triumph die, like fire and powder, / Which as they kiss consume.',
        speaker: 'Friar Lawrence',
        act: 'Act 2, Scene 6',
        analysis:
          'The Friar\'s simile of "fire and powder" presents love as a chemical reaction: beautiful in intensity but inherently self-destructive. "As they kiss consume" links the physical act of kissing to mutual annihilation. The warning foreshadows the play\'s ending.',
      },
    ],
  },
  {
    theme: 'Conflict and Violence',
    colour: 'bg-red-400',
    quotes: [
      {
        quote: 'What, drawn and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee.',
        speaker: 'Tybalt',
        act: 'Act 1, Scene 1',
        analysis:
          'Tybalt\'s opening line defines the feud as an active choice, not a passive inheritance. The triple escalation (hell, Montagues, Benvolio) intensifies hatred with each item. Even the concept of peace is repulsive to him.',
      },
      {
        quote: 'A plague o\' both your houses! They have made worms\' meat of me.',
        speaker: 'Mercutio',
        act: 'Act 3, Scene 1',
        analysis:
          'Mercutio\'s dying curse blames both families equally. "Worms\' meat" is brutally physical, reducing a vibrant life to decomposing flesh. The curse resonates as both prophecy and moral verdict through the rest of the play.',
      },
      {
        quote: 'O, I am fortune\'s fool!',
        speaker: 'Romeo',
        act: 'Act 3, Scene 1',
        analysis:
          'After killing Tybalt, Romeo sees himself as fate\'s victim. But Shakespeare invites the audience to question whether the culture of masculine honour, not fortune, made violence his reflex response.',
      },
      {
        quote: 'Romeo, the love I bear thee can afford / No better term than this: thou art a villain.',
        speaker: 'Tybalt',
        act: 'Act 3, Scene 1',
        analysis:
          'Tybalt\'s formal challenge is devastating because Romeo now secretly loves him as family. "Villain" demands a response according to the honour code. Shakespeare shows how rigid social conventions make peace impossible even when individuals desire it.',
      },
      {
        quote: 'If ever you disturb our streets again, / Your lives shall pay the forfeit of the peace.',
        speaker: 'Prince',
        act: 'Act 1, Scene 1',
        analysis:
          'The Prince establishes lethal stakes from the opening scene. "Forfeit of the peace" makes peace a commodity paid for in blood. The threat foreshadows the ending: it is the lovers\' lives that ultimately pay.',
      },
    ],
  },
  {
    theme: 'Fate and Free Will',
    colour: 'bg-indigo-400',
    quotes: [
      {
        quote: 'A pair of star-cross\'d lovers take their life.',
        speaker: 'Chorus',
        act: 'Prologue',
        analysis:
          'The Prologue spoils the ending before the play begins. "Star-cross\'d" means opposed by the stars (fate). "Take their life" carries a double meaning: they live their lives and end them. Shakespeare shifts interest from outcome to causation.',
      },
      {
        quote: 'I fear, too early; for my mind misgives / Some consequence yet hanging in the stars.',
        speaker: 'Romeo',
        act: 'Act 1, Scene 4',
        analysis:
          'Romeo senses disaster before the Capulet feast. "Hanging in the stars" suggests fate poised to fall. But Romeo goes to the feast anyway, making this both prophecy and evidence of his characteristic recklessness.',
      },
      {
        quote: 'Then I defy you, stars!',
        speaker: 'Romeo',
        act: 'Act 5, Scene 1',
        analysis:
          'Romeo\'s defiance of fate is his most tragic moment. By trying to master his destiny through suicide, he ironically fulfils it. The brevity conveys explosive emotion. Free will and fate collapse into the same act.',
      },
      {
        quote: 'O, I am fortune\'s fool!',
        speaker: 'Romeo',
        act: 'Act 3, Scene 1',
        analysis:
          'Romeo casts himself as fate\'s plaything after killing Tybalt. "Fortune\'s fool" alliterates for emphasis. The line can be read as genuine victimhood or self-excusing evasion -- Shakespeare leaves the ambiguity open.',
      },
      {
        quote: 'My only love sprung from my only hate! / Too early seen unknown, and known too late!',
        speaker: 'Juliet',
        act: 'Act 1, Scene 5',
        analysis:
          'The antithesis of "love" and "hate" encapsulates the play\'s central tragic irony. "Too early" and "too late" introduce the sense that timing itself conspires against the lovers. Juliet recognises the hopelessness of her situation from the very start.',
      },
    ],
  },
  {
    theme: 'Family and Honour',
    colour: 'bg-amber-400',
    quotes: [
      {
        quote: 'What\'s in a name? That which we call a rose / By any other word would smell as sweet.',
        speaker: 'Juliet',
        act: 'Act 2, Scene 2',
        analysis:
          'Juliet\'s philosophical argument challenges the social structure of the feud. Identity is inherent, not imposed by family names. But the play proves her wrong in practice: the name "Montague" is powerful enough to destroy them both.',
      },
      {
        quote: 'Hang thee, young baggage! Disobedient wretch!',
        speaker: 'Lord Capulet',
        act: 'Act 3, Scene 5',
        analysis:
          'Capulet\'s violent language reduces Juliet to disposable property. "Baggage" and "wretch" dehumanise her. The scene exposes how patriarchal authority operates through emotional and verbal violence before physical force.',
      },
      {
        quote: 'My will to her consent is but a part; / An she agree, within her scope of choice / Lies my consent.',
        speaker: 'Lord Capulet',
        act: 'Act 1, Scene 2',
        analysis:
          'Capulet appears progressive, claiming Juliet should consent. But "scope of choice" sets boundaries he defines. The contrast with his later tyranny reveals how patriarchal benevolence is conditional on obedience.',
      },
      {
        quote: 'Talk not to me, for I\'ll not speak a word. / Do as thou wilt, for I have done with thee.',
        speaker: 'Lady Capulet',
        act: 'Act 3, Scene 5',
        analysis:
          'Lady Capulet abandons Juliet at her most desperate moment. "I have done with thee" severs the maternal bond. Shakespeare shows how women within the patriarchal system become its enforcers rather than allies.',
      },
    ],
  },
  {
    theme: 'Light and Dark',
    colour: 'bg-sky-400',
    quotes: [
      {
        quote: 'But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun.',
        speaker: 'Romeo',
        act: 'Act 2, Scene 2',
        analysis:
          'Romeo transforms Juliet into a cosmic force. The sun dispels darkness and brings life but also blinds. The metaphor elevates Juliet above the ordinary world while foreshadowing love\'s destructive intensity.',
      },
      {
        quote: 'O, she doth teach the torches to burn bright! / It seems she hangs upon the cheek of night / Like a rich jewel in an Ethiop\'s ear.',
        speaker: 'Romeo',
        act: 'Act 1, Scene 5',
        analysis:
          'Juliet outshines artificial light. The jewel image makes her precious but also possessable. "Cheek of night" personifies darkness as a backdrop that enhances beauty. Love shines brightest against the darkest background.',
      },
      {
        quote: 'More light and light, more dark and dark our woes!',
        speaker: 'Juliet',
        act: 'Act 3, Scene 5',
        analysis:
          'As dawn forces Romeo to leave, Juliet recognises daylight as the enemy. The chiastic structure mirrors the inverse relationship between physical light and emotional darkness. The entire light-dark motif crystallises in one line.',
      },
      {
        quote: 'Come, gentle night; come, loving, black-brow\'d night, / Give me my Romeo.',
        speaker: 'Juliet',
        act: 'Act 3, Scene 2',
        analysis:
          'Juliet invokes night as an ally, personifying it as gentle and loving. Darkness is the space where their love can exist freely. The repetition of "come" conveys urgent desire. Shakespeare aligns love with secrecy and concealment.',
      },
    ],
  },
  {
    theme: 'Death and Sacrifice',
    colour: 'bg-purple-400',
    quotes: [
      {
        quote: 'Here\'s to my love! O true apothecary, / Thy drugs are quick. Thus with a kiss I die.',
        speaker: 'Romeo',
        act: 'Act 5, Scene 3',
        analysis:
          'Romeo dies with a kiss, linking love and death in a single act. "Quick" means both fast-acting and alive -- a painful pun. "True apothecary" is bitterly ironic: the poison-seller is more reliable than fate or fortune.',
      },
      {
        quote: 'O happy dagger, / This is thy sheath. There rust, and let me die.',
        speaker: 'Juliet',
        act: 'Act 5, Scene 3',
        analysis:
          'Juliet\'s final words are brief and decisive. "Happy dagger" personifies the weapon as willing. The sexual innuendo of "sheath" links death to consummation. Her suicide is an act of agency in a life controlled by others.',
      },
      {
        quote: 'Death, that hath suck\'d the honey of thy breath, / Hath had no power yet upon thy beauty.',
        speaker: 'Romeo',
        act: 'Act 5, Scene 3',
        analysis:
          'Romeo personifies Death as a vampire-lover. The dramatic irony is devastating: Juliet looks alive because she is alive. "Honey" makes her breath sweet and sensual even in apparent death.',
      },
      {
        quote: 'Death is my son-in-law, Death is my heir.',
        speaker: 'Lord Capulet',
        act: 'Act 4, Scene 5',
        analysis:
          'Capulet personifies Death as family, replacing the future he planned for Juliet. The repetition hammers home consequences. By trying to control Juliet\'s marriage, he has given her to the one bridegroom he cannot defeat.',
      },
      {
        quote: 'For never was a story of more woe / Than this of Juliet and her Romeo.',
        speaker: 'Prince',
        act: 'Act 5, Scene 3',
        analysis:
          'The final couplet is deliberately simple, as if the enormity of tragedy can only be expressed in the plainest language. "Her Romeo" gives Juliet possession in death that was denied to her in life.',
      },
      {
        quote: 'All are punished.',
        speaker: 'Prince',
        act: 'Act 5, Scene 3',
        analysis:
          'Three words that refuse a comfortable ending. No one is innocent; no one escapes consequences. Shakespeare distributes guilt across the entire community and prevents the audience from finding consolation in the patriarchs\' reconciliation.',
      },
    ],
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietKeyQuotesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Romeo and Juliet" textType="play" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-rose-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/romeo-and-juliet" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Romeo and Juliet
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Quote className="mr-1 size-3 text-violet-400" />
                Key Quotations
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              30 Key Quotes by Theme
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              Romeo and Juliet by William Shakespeare
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              Every quotation you need for the exam, organised by theme with detailed
              analysis. All from the public-domain text.
            </p>
          </div>
        </section>

        {/* Quick-navigation */}
        <section className="mt-10">
          <Card>
            <CardContent className="p-5">
              <p className="text-sm font-semibold text-foreground mb-3">Jump to theme</p>
              <div className="flex flex-wrap gap-2">
                {QUOTES_BY_THEME.map((section) => (
                  <a
                    key={section.theme}
                    href={`#${section.theme.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                  >
                    <span className={`block size-2 rounded-full ${section.colour}`} />
                    {section.theme}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quotes by theme */}
        <div className="mt-10 space-y-10">
          {QUOTES_BY_THEME.map((section) => (
            <section
              key={section.theme}
              id={section.theme.toLowerCase().replace(/\s+/g, '-')}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className={`block size-3 rounded-full ${section.colour}`} />
                <h2 className="text-heading-lg font-heading text-foreground">
                  {section.theme}
                </h2>
                <Badge variant="outline" className="text-muted-foreground">
                  {section.quotes.length} quotes
                </Badge>
              </div>

              <div className="grid gap-4">
                {section.quotes.map((q, i) => (
                  <Card key={i}>
                    <CardContent className="space-y-2 p-5">
                      <p className="text-body-md font-medium italic text-foreground">
                        &ldquo;{q.quote}&rdquo;
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="text-caption uppercase tracking-wide text-primary">
                          {q.speaker}
                        </p>
                        <span className="text-border">|</span>
                        <p className="text-caption text-muted-foreground">{q.act}</p>
                      </div>
                      <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          <em>Romeo and Juliet</em> (c. 1594-96) by William Shakespeare is in the
          public domain. All quotations are reproduced freely.
        </p>
      </div>
    </div>
  )
}
