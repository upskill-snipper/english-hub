'use client'

import Link from 'next/link'
import { ArrowLeft, Lightbulb, Quote, BookOpen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ─── Types ──────────────────────────────────────────────────── */

type ThemeStudy = {
  title: string
  overview: string
  detailed: string
  keyQuotes: { quote: string; speaker: string; analysis: string }[]
  contextLink: string
  essayTip: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const THEMES: ThemeStudy[] = [
  {
    title: 'Love (Romantic, Courtly, Bawdy)',
    overview:
      'Shakespeare presents love in multiple, contrasting forms -- Petrarchan convention, mutual passion, bawdy physicality, and parental duty -- to argue that only love which transcends social roles is genuine.',
    detailed:
      'Love is the play\'s dominant theme, but Shakespeare never presents it as a single, simple emotion. Romeo\'s early infatuation with Rosaline is Petrarchan: he borrows the conventions of courtly love poetry, using oxymorons and sighing soliloquies. This love is a performance, directed at a woman who never appears on stage. When Romeo meets Juliet, their shared sonnet at the Capulet feast marks a shift to mutual, reciprocal love: they complete each other\'s lines, their language is religious ("pilgrim," "shrine," "saints"), and both are active participants. Shakespeare contrasts this further with Mercutio\'s bawdy reduction of love to sex ("If love be rough with you, be rough with love") and the Nurse\'s earthy pragmatism. Lady Capulet presents love as a transaction (Paris is a "book" to be "read"), while Lord Capulet treats Juliet\'s love as his property to bestow. By placing the lovers\' genuine passion against these debased versions, Shakespeare argues that authentic love is rare, dangerous, and incompatible with the social structures of Verona. The love between Romeo and Juliet is defined by its opposition to the world: it can only exist in darkness (the balcony scene, the wedding night) and must be hidden from daylight society. This is why it can only be fully realised in death.',
    keyQuotes: [
      {
        quote: 'If I profane with my unworthiest hand / This holy shrine, the gentle sin is this: / My lips, two blushing pilgrims, ready stand / To smooth that rough touch with a tender kiss.',
        speaker: 'Romeo -- Act 1, Scene 5',
        analysis:
          'The pilgrim-and-saint conceit elevates physical attraction into religious experience. By structuring their first exchange as a shared sonnet, Shakespeare shows the lovers completing each other\'s thoughts. The religious language ("shrine," "pilgrims," "saints") sanctifies their love, setting it apart from Mercutio\'s bawdy reductions.',
      },
      {
        quote: 'My bounty is as boundless as the sea, / My love as deep; the more I give to thee, / The more I have, for both are infinite.',
        speaker: 'Juliet -- Act 2, Scene 2',
        analysis:
          'Juliet redefines love as abundance rather than scarcity. The sea metaphor suggests love that is vast, powerful and beyond human control. "The more I give... the more I have" inverts economic logic: love grows through spending, not hoarding. Shakespeare presents Juliet\'s love as intellectually and emotionally more sophisticated than Romeo\'s.',
      },
      {
        quote: 'If love be rough with you, be rough with love; / Prick love for pricking, and you beat love down.',
        speaker: 'Mercutio -- Act 1, Scene 4',
        analysis:
          'Mercutio reduces love to a physical contest. The bawdy pun on "prick" and "beat love down" treats sex as combat. Shakespeare uses Mercutio\'s cynicism as a foil to show the extraordinary quality of Romeo and Juliet\'s connection.',
      },
    ],
    contextLink:
      'Shakespeare draws on the Petrarchan love tradition popular in Elizabethan England, where poets like Sir Philip Sidney used elaborate conceits to describe unrequited desire. By giving Romeo Petrarchan language for Rosaline and then shifting to something richer for Juliet, Shakespeare critiques the artificiality of courtly love poetry while celebrating genuine mutual passion.',
    essayTip:
      'Always distinguish between the different types of love in the play. Examiners reward candidates who can identify Petrarchan, mutual, bawdy and parental love and show how Shakespeare uses each to illuminate the others.',
  },
  {
    title: 'Conflict and Violence',
    overview:
      'The feud between the Montagues and Capulets structures the entire play. Shakespeare presents violence as a cycle that poisons every aspect of Veronese society.',
    detailed:
      'Conflict operates on multiple levels: public (the street brawls), private (Capulet\'s domestic tyranny), internal (Romeo\'s divided loyalty), and cosmic (the lovers against fate). The play opens with a brawl and ends with bodies in a tomb, framing the narrative entirely within violence. Shakespeare structures the plot so that every act of love triggers an act of violence: Romeo and Juliet\'s meeting provokes Tybalt\'s challenge; their marriage leads to Mercutio\'s death; their wedding night is interrupted by banishment. The link between love and violence is not accidental but structural: in Verona, the two are inseparable because the social order is built on honour, revenge and masculine aggression. Tybalt embodies the feud\'s worst impulses, but even the peacemaking Benvolio draws his sword and Romeo, the lover, kills Tybalt. Shakespeare argues that violence is not a matter of individual character but of social conditioning: the feud creates a world where every interaction carries the potential for bloodshed.',
    keyQuotes: [
      {
        quote: 'What, drawn and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee.',
        speaker: 'Tybalt -- Act 1, Scene 1',
        analysis:
          'Tybalt cannot tolerate even the concept of peace. The escalating triple object (hell, Montagues, Benvolio) shows hatred intensifying with each breath. Shakespeare establishes from the opening scene that the feud has produced individuals for whom violence is an identity.',
      },
      {
        quote: 'A plague o\' both your houses! They have made worms\' meat of me.',
        speaker: 'Mercutio -- Act 3, Scene 1',
        analysis:
          'Mercutio\'s dying curse blames both families equally. "Worms\' meat" is brutally physical, reducing a vibrant life to decomposing flesh. The curse functions as both prophecy and moral verdict: the feud will indeed bring plague-like destruction to both houses.',
      },
      {
        quote: 'O, I am fortune\'s fool!',
        speaker: 'Romeo -- Act 3, Scene 1',
        analysis:
          'After killing Tybalt, Romeo sees himself as fate\'s victim. But Shakespeare invites the audience to question this: is Romeo truly a passive victim of fortune, or has the culture of masculine honour made violence his reflex response? The line captures the play\'s central ambiguity about agency and responsibility.',
      },
    ],
    contextLink:
      'Elizabethan London was a violent city where street fights, duels and public executions were common. The culture of honour that Shakespeare depicts in Verona had direct parallels in the aristocratic feuding of Tudor England. The play was written during a period when Queen Elizabeth I was actively trying to suppress private warfare among the nobility.',
    essayTip:
      'When writing about conflict, always link it to the theme of love. Show how Shakespeare structures the play so that every act of love generates a corresponding act of violence. This demonstrates that you understand the play\'s architecture, not just its plot.',
  },
  {
    title: 'Fate and Free Will',
    overview:
      'The Prologue announces the lovers\' deaths before the play begins. Shakespeare creates a tension between the feeling that the tragedy is inevitable and the suggestion that human choices cause it.',
    detailed:
      'The Prologue calls Romeo and Juliet "star-cross\'d lovers" whose "death-mark\'d love" ends in suicide. This immediately establishes fate as a force, inviting the audience to watch for the mechanisms of destiny. Throughout the play, characters invoke fate, stars, dreams and premonitions. Romeo has a presentiment of "some consequence yet hanging in the stars" before the Capulet feast; Juliet sees Romeo "as one dead in the bottom of a tomb"; the Friar\'s letter fails to reach Mantua by pure chance. Yet Shakespeare simultaneously shows that human choices drive the tragedy: Romeo chooses to gate-crash the feast, Tybalt chooses to fight, Capulet chooses to force the marriage, the Friar chooses to use a dangerous potion rather than tell the truth. The play never resolves this tension. It is simultaneously a story about cosmic inevitability and about the disastrous consequences of human impulsiveness, pride and secrecy. This ambiguity is one of its greatest strengths: it mirrors the real human experience of feeling that some events were "meant to be" while knowing that different choices could have changed everything.',
    keyQuotes: [
      {
        quote: 'A pair of star-cross\'d lovers take their life.',
        speaker: 'Chorus -- Prologue',
        analysis:
          'The Prologue reveals the ending before the play begins. "Star-cross\'d" means opposed by the stars (fate), and "take their life" carries a double meaning: they live their lives and they end their lives. By telling the audience the outcome, Shakespeare shifts interest from what happens to why and how it happens.',
      },
      {
        quote: 'I fear, too early; for my mind misgives / Some consequence yet hanging in the stars.',
        speaker: 'Romeo -- Act 1, Scene 4',
        analysis:
          'Romeo senses disaster before the Capulet feast. "Hanging in the stars" suggests fate is poised, ready to fall. But Romeo goes to the feast anyway, making his premonition both a prophecy and a demonstration of the reckless courage that defines his character.',
      },
      {
        quote: 'Then I defy you, stars!',
        speaker: 'Romeo -- Act 5, Scene 1',
        analysis:
          'Romeo\'s defiance of fate is his most tragic moment. By trying to master his destiny (through suicide), he ironically fulfils it. The brevity of the line conveys explosive emotion. Shakespeare collapses the distinction between free will and fate: Romeo\'s choice to die is both a free act and a predetermined outcome.',
      },
    ],
    contextLink:
      'Elizabethan audiences believed in astrology and the influence of the stars on human affairs. The Great Chain of Being placed celestial forces above human will. Yet the Protestant Reformation emphasised individual moral responsibility. Shakespeare\'s play holds both worldviews in tension, reflecting a culture that was uncertain about the boundary between destiny and choice.',
    essayTip:
      'Avoid arguing simply that "fate causes the tragedy." The best essays show how Shakespeare creates ambiguity: every apparently fated event can also be explained by human choice. Discuss both possibilities and argue that the tension between them is deliberate.',
  },
  {
    title: 'Family and Honour',
    overview:
      'The Montague-Capulet feud structures Verona\'s society. Shakespeare shows how family loyalty and masculine honour create the conditions that destroy the lovers.',
    detailed:
      'Family in Romeo and Juliet is simultaneously a source of identity and a prison. Juliet\'s famous question "What\'s in a name?" challenges the idea that family identity should determine individual destiny, but the rest of the play demonstrates how powerfully it does. Lord Capulet treats Juliet as property to be disposed of ("An you be mine, I\'ll give you to my friend"), and the feud requires every family member to treat the opposing house as an enemy. Honour -- the obligation to defend the family\'s reputation through violence -- is the mechanism that perpetuates the conflict. Tybalt fights because honour demands it; Romeo kills because Mercutio\'s death challenges his masculine standing. Shakespeare presents honour as a code that sounds noble but produces only suffering. The play\'s resolution requires the death of the families\' children: only the sight of Romeo and Juliet\'s bodies can persuade Capulet and Montague to shake hands. Shakespeare\'s argument is bleak: the patriarchal family, as constructed in Verona, cannot accommodate genuine love and must be broken by tragedy before it can reform.',
    keyQuotes: [
      {
        quote: 'What\'s in a name? That which we call a rose / By any other word would smell as sweet.',
        speaker: 'Juliet -- Act 2, Scene 2',
        analysis:
          'Juliet\'s argument is philosophically radical: she claims identity is inherent, not imposed by family labels. If Romeo were not called "Montague," he would be the same person. But the play proves her wrong in practice: the name "Montague" is powerful enough to kill them both.',
      },
      {
        quote: 'My only love sprung from my only hate! / Too early seen unknown, and known too late!',
        speaker: 'Juliet -- Act 1, Scene 5',
        analysis:
          'The antithesis of "love" and "hate" captures the central paradox: Juliet\'s deepest personal feeling is generated by the family structure that will destroy it. "Too early" and "too late" convey the sense that timing and family allegiance are enemies of love.',
      },
      {
        quote: 'Hang thee, young baggage! Disobedient wretch! / I tell thee what: get thee to church o\' Thursday, / Or never after look me in the face.',
        speaker: 'Lord Capulet -- Act 3, Scene 5',
        analysis:
          'Capulet\'s rage reveals the violence underlying patriarchal authority. "Baggage" and "wretch" reduce Juliet to worthless property. The ultimatum -- obey or be disowned -- shows how family love becomes tyranny when challenged. Shakespeare exposes the gap between Capulet\'s earlier claim to value Juliet\'s consent and his actual exercise of power.',
      },
    ],
    contextLink:
      'Elizabethan England was a patriarchal society in which fathers had legal authority over their daughters\' marriages. Arranged marriages among the upper classes were common and were seen as economic and political alliances rather than romantic unions. Shakespeare\'s play questions this system by showing its human cost.',
    essayTip:
      'Link family and honour to the theme of conflict. Show how the code of honour makes violence a family obligation and how patriarchal authority isolates Juliet. This demonstrates structural understanding rather than character-level observation.',
  },
  {
    title: 'Youth vs Age',
    overview:
      'The play dramatises a generational divide: the young lovers\' passion and idealism clash with the older generation\'s pragmatism, authority and entrenched hatreds.',
    detailed:
      'Romeo and Juliet is, among other things, a play about the failure of the older generation. The parents have created and sustained the feud; the Friar\'s schemes are catastrophically flawed; the Nurse betrays Juliet\'s trust by advising pragmatic compromise. Every adult in the play fails the young people they are supposed to protect. Shakespeare consistently aligns youth with intensity, authenticity and risk-taking, and age with caution, compromise and rigidity. The lovers\' speed (they meet, marry and die within four days) is set against the adults\' slowness to act and their inability to understand what is happening. Lord Capulet\'s changing attitude to Juliet\'s marriage -- from patient ("Let two more summers wither in their pride") to authoritarian ("Get thee to church o\' Thursday") -- encapsulates the older generation\'s failure: they offer guidance when it is not needed and coercion when guidance is required. The play\'s ending, in which the parents finally reconcile over their children\'s corpses, is Shakespeare\'s bleakest commentary on the generational divide: the old learn from the young, but only through the young\'s destruction.',
    keyQuotes: [
      {
        quote: 'These violent delights have violent ends.',
        speaker: 'Friar Lawrence -- Act 2, Scene 6',
        analysis:
          'The Friar\'s warning to Romeo is wise in principle but useless in practice. He understands the danger intellectually but proceeds with the marriage anyway. Shakespeare presents adult wisdom as inadequate: the Friar can diagnose the problem but cannot solve it.',
      },
      {
        quote: 'Wisely and slow; they stumble that run fast.',
        speaker: 'Friar Lawrence -- Act 2, Scene 3',
        analysis:
          'This proverbial advice is undercut by dramatic irony: the Friar himself "runs fast" by agreeing to a hasty marriage and later devising reckless schemes. Shakespeare shows that adult caution is hypocritical when adults themselves act impulsively.',
      },
      {
        quote: 'Is she not proud? Doth she not count her blest, / Unworthy as she is, that we have wrought / So worthy a gentleman to be her bride?',
        speaker: 'Lord Capulet -- Act 3, Scene 5',
        analysis:
          'Capulet cannot comprehend Juliet\'s refusal. "Unworthy" and "wrought" reveal his view of her as raw material to be shaped. The older generation sees marriage as achievement; the younger sees it as a matter of the heart. Shakespeare dramatises the collision between these worldviews.',
      },
    ],
    contextLink:
      'Elizabethan society was gerontocratic: authority resided with older men, and young people were expected to obey without question. Shakespeare\'s plays frequently challenge this hierarchy, giving young characters moral clarity that their elders lack. Romeo and Juliet is his most sustained exploration of generational conflict.',
    essayTip:
      'Frame the generational divide as structural, not personal. It is not that individual adults are bad people, but that the social system gives them unchecked power over the young. This is a more sophisticated argument than simply blaming specific characters.',
  },
  {
    title: 'Light and Dark Imagery',
    overview:
      'Shakespeare uses a sustained pattern of light and dark imagery to characterise the lovers\' relationship and to link love with danger.',
    detailed:
      'Romeo and Juliet is built on a paradox of light and dark. The lovers consistently associate each other with light: Romeo calls Juliet the sun, the east, a "bright angel," a "jewel" hanging "upon the cheek of night"; Juliet wants Romeo cut out in "little stars." Yet their love can only exist in darkness. They meet at a night-time feast, declare love on a darkened balcony, marry in secret, consummate their marriage at night, and die in a dark tomb. Every significant encounter takes place in shadow. Shakespeare uses this pattern to argue that in Verona\'s corrupt daylight world -- the world of the feud, of patriarchal authority, of public honour -- genuine love has no place. It must hide in darkness to survive, and ultimately darkness becomes the only space where it can be permanently preserved (the tomb). The imagery also foreshadows death throughout: Juliet is "rich" enough to be a jewel only against the "cheek of night," and Romeo shines "like a snowy dove trooping with crows" -- beautiful but conspicuous and vulnerable.',
    keyQuotes: [
      {
        quote: 'But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun.',
        speaker: 'Romeo -- Act 2, Scene 2',
        analysis:
          'Romeo transforms Juliet into a cosmic force. The sun dispels darkness and brings life, but it also blinds and burns. The metaphor elevates Juliet above the ordinary world but also separates her from it. Shakespeare links love to light while foreshadowing its destructive intensity.',
      },
      {
        quote: 'O, she doth teach the torches to burn bright! / It seems she hangs upon the cheek of night / Like a rich jewel in an Ethiop\'s ear.',
        speaker: 'Romeo -- Act 1, Scene 5',
        analysis:
          'Juliet outshines artificial light ("torches"). The jewel image makes her beautiful but also precious and possessable. "Cheek of night" personifies darkness as a backdrop that enhances her brilliance. Shakespeare presents love as something that shines brightest against the darkest background.',
      },
      {
        quote: 'More light and light, more dark and dark our woes!',
        speaker: 'Juliet -- Act 3, Scene 5',
        analysis:
          'As dawn forces Romeo to leave after their wedding night, Juliet recognises that daylight is their enemy. The chiastic structure mirrors the inverse relationship: more physical light means more emotional darkness. Shakespeare crystallises the entire light-dark motif in a single line.',
      },
    ],
    contextLink:
      'The Globe Theatre was an open-air venue with performances held in daylight. Shakespeare\'s audience had to imagine darkness. This means every reference to light and dark is deliberate and emphatic -- Shakespeare is creating atmosphere through language alone, which heightens its poetic intensity.',
    essayTip:
      'Light and dark imagery is one of the most effective ways to analyse Shakespeare\'s language techniques. Track the pattern across the play and show how it supports the broader themes of love, secrecy and death. Examiners value sustained analysis of imagery across multiple scenes.',
  },
  {
    title: 'Death and Sacrifice',
    overview:
      'Death pervades the play from the Prologue\'s spoiler to the final tomb scene. Shakespeare presents the lovers\' deaths as simultaneously tragic waste and necessary sacrifice.',
    detailed:
      'The play is saturated with death from its opening lines. The Prologue announces that "a pair of star-cross\'d lovers take their life," removing all suspense about the outcome. Characters constantly foreshadow death: Romeo sees "some consequence yet hanging in the stars"; Juliet sees Romeo "as one dead in the bottom of a tomb"; the Friar warns of "violent ends." Death imagery infects even the love language: Juliet imagines Romeo cut into stars after death; Romeo drinks poison as a toast "to my love." Shakespeare links death and love so tightly that they become inseparable: in Verona, the only way to love purely is to die. The lovers\' deaths function as a sacrifice that redeems the community. Their bodies in the tomb become the evidence that finally persuades the patriarchs to end the feud. Shakespeare draws on Christian imagery of redemptive sacrifice (the lovers die to save others) while simultaneously refusing to romanticise the deaths. The Prince\'s final line -- "All are punished" -- insists that the deaths are a tragedy, not a triumph. The play holds both readings in tension: the deaths are both meaningless waste and meaningful sacrifice.',
    keyQuotes: [
      {
        quote: 'For never was a story of more woe / Than this of Juliet and her Romeo.',
        speaker: 'Prince -- Act 5, Scene 3',
        analysis:
          'The play\'s final couplet is deliberately conventional in its rhyme and rhythm, as if the enormity of the tragedy can only be expressed in the simplest possible language. "Her Romeo" gives Juliet possession, reversing the patriarchal ownership that controlled her in life.',
      },
      {
        quote: 'Death, that hath suck\'d the honey of thy breath, / Hath had no power yet upon thy beauty.',
        speaker: 'Romeo -- Act 5, Scene 3',
        analysis:
          'Romeo personifies Death as a vampire-lover, creating a disturbing love triangle between himself, Juliet and Death. The dramatic irony is devastating: Juliet\'s beauty is preserved because she is not dead. "Honey" makes her breath sweet and sensual even in apparent death.',
      },
      {
        quote: 'All are punished.',
        speaker: 'Prince -- Act 5, Scene 3',
        analysis:
          'Three words that refuse a comfortable ending. No one is innocent; no one escapes the consequences. Shakespeare distributes guilt across the entire community. The line prevents the audience from finding consolation in the patriarchs\' reconciliation.',
      },
    ],
    contextLink:
      'Death was far more visible in Elizabethan England than in modern Western society. Plague epidemics, public executions, and high infant mortality meant audiences had direct experience of sudden, violent death. The play was likely written during or shortly after a major plague outbreak that closed the theatres, giving its references to plague and death particular resonance.',
    essayTip:
      'The strongest essays on death in Romeo and Juliet argue that it is both tragic and redemptive. Show the waste (young, innocent lives destroyed) and the social function (the deaths end the feud), then evaluate which reading Shakespeare emphasises. There is no single right answer, and examiners reward nuanced argument.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietThemesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Romeo and Juliet" textType="play" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
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
                <Lightbulb className="mr-1 size-3 text-amber-400" />
                Theme Analysis
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Themes — Deep Study
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              Romeo and Juliet by William Shakespeare
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              Comprehensive analysis of the seven key themes with quotations, contextual
              links, and exam strategies for top-grade responses.
            </p>
          </div>
        </section>

        {/* Themes */}
        <div className="mt-10 space-y-10">
          {THEMES.map((t) => (
            <section key={t.title}>
              <div className="mb-5 flex items-center gap-3">
                <Lightbulb className="size-5 text-amber-400" />
                <div>
                  <h2 className="text-heading-lg font-heading text-foreground">{t.title}</h2>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Detailed analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">Detailed Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{t.detailed}</p>
                  </CardContent>
                </Card>

                {/* Key Quotes */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Quote className="size-5 text-violet-400" />
                      <CardTitle className="text-heading-md font-heading">Key Quotations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {t.keyQuotes.map((q, i) => (
                      <div key={i} className="space-y-1.5">
                        <p className="text-body-md font-medium italic text-foreground">
                          &ldquo;{q.quote}&rdquo;
                        </p>
                        <p className="text-caption uppercase tracking-wide text-primary">
                          {q.speaker}
                        </p>
                        <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Context link */}
                <Card className="border-l-4 border-l-emerald-400">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="size-4 text-emerald-400" />
                      <p className="text-sm font-semibold text-foreground">Context link</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
                  </CardContent>
                </Card>

                {/* Essay tip */}
                <Card className="bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="size-4 text-amber-400" />
                      <p className="text-sm font-semibold text-foreground">Essay tip</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{t.essayTip}</p>
                  </CardContent>
                </Card>
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
