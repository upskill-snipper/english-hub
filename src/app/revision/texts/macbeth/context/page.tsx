'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Lightbulb, Quote, ScrollText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
// ── Context data ──────────────────────────────────────────────────────────────

type ContextTopic = {
  title: string
  overview: string
  detail: string
  linksToPlay: string
  relevantQuote: { quote: string; speaker: string; actScene: string; whyItMatters: string }
  keyTerms: string[]
}

const CONTEXT_TOPICS: ContextTopic[] = [
  {
    title: 'James I and the Union of Crowns',
    overview:
      'Shakespeare wrote Macbeth shortly after James VI of Scotland became James I of England in 1603, uniting the two crowns for the first time.',
    detail:
      "The accession of James I transformed the political landscape of Britain and had a direct impact on Shakespeare's career. James became patron of Shakespeare's company, which was renamed the King's Men in 1603, making Shakespeare effectively a royal servant. Macbeth was crafted as a deliberate compliment to the new king. The Stuart dynasty traced its line to Banquo and his son Fleance — a genealogy that originated in Hector Boece's sixteenth-century Scotorum Historiae and was inherited by Holinshed's Chronicles, though modern historians regard Banquo himself as legendary rather than a documented ancestor. James and his court accepted the lineage as genuine, which explains why Shakespeare transformed Banquo from a co-conspirator in his source material into a noble, innocent victim. The \"show of eight kings\" that the witches conjure for Macbeth in Act 4 depicts the Stuart line descending from Banquo, with the last king holding a mirror that would have symbolically reflected James himself in the audience. The play's Scottish setting, its exploration of legitimate succession, and its condemnation of regicide all served to flatter a king who was still establishing his authority in England.",
    linksToPlay:
      "Banquo's portrayal as virtuous and innocent (rather than complicit in Duncan's murder, as in Holinshed) directly flatters James I. The \"show of kings\" in Act 4, Scene 1 celebrates the Stuart dynasty. The play's Scottish setting honours James's heritage, and the theme of legitimate succession affirms his right to the English throne.",
    relevantQuote: {
      quote: 'Thou shalt get kings, though thou be none.',
      speaker: 'Third Witch',
      actScene: 'Act 1, Scene 3',
      whyItMatters:
        "This prophecy about Banquo's descendants becoming kings is a direct compliment to James I, whose dynasty claimed descent from Banquo through Fleance. Shakespeare flatters his royal patron by presenting the supposed ancestor as a man of moral integrity whose line is divinely ordained to rule.",
    },
    keyTerms: [
      'Union of Crowns',
      "King's Men",
      "Holinshed's Chronicles",
      'Stuart dynasty',
      "Banquo's line",
    ],
  },
  {
    title: 'Witchcraft and Demonology',
    overview:
      'James I had a well-documented fascination with witchcraft. He published Daemonologie in 1597 and personally interrogated accused witches.',
    detail:
      "James I's interest in witchcraft was both intellectual and personal. In 1590, during the North Berwick witch trials, suspects confessed to raising storms to sink the ship carrying James and his new bride, Anne of Denmark, from Denmark to Scotland. James personally interrogated the accused and was convinced of the reality of demonic power. In 1597, he published Daemonologie, a treatise arguing for the existence of witchcraft and advocating harsher persecution. This book directly influenced the Witchcraft Act of 1604, which made it a capital offence to invoke evil spirits or commune with familiar spirits. Shakespeare's portrayal of the witches in Macbeth as genuinely malevolent supernatural beings reflected and validated the king's beliefs. The witches are not comic or harmless figures but agents of genuine evil who manipulate a vulnerable man into damnation. Their association with storms, darkness, and animal familiars draws directly on contemporary demonological literature. Shakespeare walked a careful line: the witches are powerful enough to be frightening but do not override human free will, preserving the theological position that humans choose their own damnation.",
    linksToPlay:
      'The witches\' portrayal as malevolent, deceptive, and genuinely supernatural reflects James I\'s published beliefs. Their association with storms (Act 1, Scene 1), animal familiars ("Paddock calls"), and equivocation mirrors the testimony from witch trials. Lady Macbeth\'s invocation of "murdering ministers" in Act 1, Scene 5 parallels the demonological concept of witches summoning evil spirits.',
    relevantQuote: {
      quote: 'Come, you spirits / That tend on mortal thoughts, unsex me here.',
      speaker: 'Lady Macbeth',
      actScene: 'Act 1, Scene 5',
      whyItMatters:
        "Lady Macbeth's invocation of spirits mirrors the demonological belief that witches summoned demonic familiars. A Jacobean audience would have recognised this as a literal call to demons, not a metaphor, making Lady Macbeth complicit in the same supernatural evil as the witches themselves.",
    },
    keyTerms: [
      'Daemonologie',
      'North Berwick trials',
      'Witchcraft Act 1604',
      'familiar spirits',
      'demonology',
    ],
  },
  {
    title: 'The Gunpowder Plot (1605)',
    overview:
      'The play was written in the immediate aftermath of the Gunpowder Plot, when Catholic conspirators attempted to blow up Parliament and assassinate James I.',
    detail:
      "On 5 November 1605, Guy Fawkes was discovered guarding barrels of gunpowder beneath the House of Lords, part of a conspiracy led by Robert Catesby to assassinate James I and restore Catholic rule. The plot's discovery sent shockwaves through English society and intensified anti-Catholic sentiment. The subsequent trials, particularly that of the Jesuit Henry Garnet in spring 1606, introduced the concept of \"equivocation\" to public discourse. Garnet argued that misleading answers were not technically lies if the speaker mentally added qualifications -- a doctrine that outraged Protestant England. Shakespeare wrote Macbeth in this charged atmosphere. The play's themes of treason, regicide, equivocation, and the violation of the sacred bond between subject and sovereign carried intense topical resonance. The Porter's explicit reference to \"an equivocator, that could swear in both the scales against either scale\" is a direct allusion to Garnet's trial. The play's unambiguous condemnation of regicide served both as political commentary and as reassurance to a king who had narrowly escaped assassination.",
    linksToPlay:
      "The Porter's \"equivocator\" speech (Act 2, Scene 3) directly alludes to Garnet's trial. The witches' equivocating prophecies mirror the Jesuit doctrine. The play's condemnation of regicide reflects the national trauma of the Gunpowder Plot. Macbeth's violation of the host-guest relationship echoes the plotters' betrayal of the trust Parliament placed in them.",
    relevantQuote: {
      quote:
        "Faith, here's an equivocator, that could swear in both the scales against either scale.",
      speaker: 'The Porter',
      actScene: 'Act 2, Scene 3',
      whyItMatters:
        "This is a direct topical allusion to Henry Garnet's trial in spring 1606. Garnet defended the doctrine of equivocation under oath. The Porter's casual reference places the audience in familiar political territory and links the witches' deceptive prophecies to a real and dangerous form of Jacobean deception.",
    },
    keyTerms: [
      'Gunpowder Plot',
      'Guy Fawkes',
      'Robert Catesby',
      'Henry Garnet',
      'equivocation',
      'regicide',
    ],
  },
  {
    title: 'The Divine Right of Kings',
    overview:
      "The belief that monarchs were God's appointed representatives on earth, and that to murder a king was a sin against divine order.",
    detail:
      "The doctrine of the Divine Right of Kings held that the monarch's authority derived directly from God, not from the consent of the governed. The king was God's \"lieutenant\" on earth, and to rebel against the king was to rebel against God himself. This doctrine was politically convenient for James I, who used it to assert his authority over both Parliament and the Church. It had deep roots in medieval political theology and was reinforced by the Great Chain of Being, the hierarchical model of the universe that placed God at the top, followed by angels, the monarch, the nobility, and so on down to the lowest forms of life. In Macbeth, Duncan's murder is presented not merely as a political assassination but as a cosmic crime. The natural disturbances that follow -- unnatural darkness, horses eating each other, an owl killing a falcon -- signal that the entire Chain of Being has been disrupted. Macbeth's Scotland becomes a place of sighs, groans, and shrieks because the divinely appointed ruler has been unlawfully removed. The play's resolution, with Malcolm's restoration, affirms that legitimate, divinely sanctioned monarchy will always triumph over usurped power.",
    linksToPlay:
      "Duncan's murder triggers cosmic disorder (Act 2, Scene 4) because he represents divine authority. Macbeth's tyranny produces a diseased Scotland precisely because his rule lacks divine sanction. Malcolm's restoration at Scone returns the \"king-becoming graces\" to the throne. The play argues that the natural order can only function when the divinely appointed monarch rules.",
    relevantQuote: {
      quote: "Most sacrilegious murder hath broke ope / The Lord's anointed temple.",
      speaker: 'Macduff',
      actScene: 'Act 2, Scene 3',
      whyItMatters:
        "Macduff describes Duncan's body as \"the Lord's anointed temple,\" directly invoking the Divine Right doctrine. The king's body is sacred because it houses divine authority. Murder becomes sacrilege -- a crime against God, not just against a man.",
    },
    keyTerms: [
      'Divine Right of Kings',
      "God's lieutenant",
      'divine order',
      'legitimate succession',
      'political theology',
    ],
  },
  {
    title: 'The Great Chain of Being',
    overview:
      'The Elizabethan and Jacobean belief in a divinely ordered hierarchy connecting God, king, humanity, animals, and nature.',
    detail:
      'The Great Chain of Being was the dominant cosmological framework of the period. It imagined the universe as a strict hierarchy: God at the apex, then angels, then the monarch (God\'s representative on earth), then the nobility, the gentry, the common people, animals, plants, and minerals. Every creature had a fixed, divinely appointed position. To disrupt one level of the chain was to disrupt all levels -- a butterfly effect of cosmic proportions. This belief system explains the seemingly superstitious natural disturbances in Macbeth. When Duncan is murdered, the chain is broken at the level of kingship, and the disruption cascades through every other level. Animals behave unnaturally (horses eat each other, an owl kills a falcon), the sky darkens at midday, and the earth itself "was feverous and did shake." These are not mere atmospheric effects but theological statements: the murder of a king is a crime against the structure of the universe itself. The Great Chain also helps explain the play\'s attitudes to gender. Lady Macbeth\'s demand to be "unsexed" violates the chain at the level of natural gender roles, and the play presents this violation as equally unnatural and equally destructive.',
    linksToPlay:
      "The cosmic disturbances after Duncan's murder (Act 2, Scene 4) are direct consequences of breaking the Chain. Lady Macbeth's \"unsex me\" speech violates the Chain at the level of gender. The witches exist outside the Chain entirely, marking them as agents of chaos. Malcolm's coronation restores every level of the Chain to its proper order.",
    relevantQuote: {
      quote:
        "A falcon, towering in her pride of place, / Was by a mousing owl hawk'd at and kill'd.",
      speaker: 'Old Man',
      actScene: 'Act 2, Scene 4',
      whyItMatters:
        'A lowly owl killing a noble falcon inverts the natural hierarchy. In the Great Chain of Being, the falcon outranks the owl, just as the king outranks a thane. Shakespeare uses the animal kingdom to mirror the human violation: Macbeth (the lesser) has killed Duncan (the greater).',
    },
    keyTerms: [
      'Great Chain of Being',
      'cosmic hierarchy',
      'natural order',
      'correspondence theory',
      'macrocosm and microcosm',
    ],
  },
  {
    title: 'Regicide in History and Law',
    overview:
      'The killing of a king was not merely a crime but a sin against God, carrying unique legal and theological consequences.',
    detail:
      "In Jacobean England, regicide was the ultimate crime -- a category beyond ordinary murder. Because the king was God's anointed representative, killing him was simultaneously treason (a political crime), murder (a moral crime), and sacrilege (a religious crime). The punishment for treason was hanging, drawing, and quartering -- a deliberately spectacular execution designed to demonstrate the enormity of the offence. The theological dimension was equally severe: regicide was understood as a form of blasphemy, an attack on God's appointed order that endangered the killer's immortal soul. This context is essential for understanding the weight Shakespeare attaches to Duncan's murder. When Macbeth kills Duncan, he is not simply removing a political rival -- he is committing a threefold sin against the state, against morality, and against God. This explains why Macbeth cannot say \"Amen\" after the murder (Act 2, Scene 2): he has cut himself off from divine grace. It explains the cosmic disturbances: the universe itself reacts to the violation. And it explains why the play insists on Malcolm's restoration: only the return of the legitimate, divinely sanctioned line can heal the wound that regicide has inflicted on the world.",
    linksToPlay:
      "Macbeth's inability to say \"Amen\" (Act 2, Scene 2) reflects his spiritual separation from God after committing sacrilege. The Porter's hell-gate fantasy (Act 2, Scene 3) literalises the theological consequences. The play insists that Macbeth's rule is illegitimate precisely because it was gained through the ultimate sin.",
    relevantQuote: {
      quote:
        'But wherefore could not I pronounce "Amen"? / I had most need of blessing, and "Amen" / Stuck in my throat.',
      speaker: 'Macbeth',
      actScene: 'Act 2, Scene 2',
      whyItMatters:
        'Macbeth\'s inability to say "Amen" after committing regicide dramatises the theological consequence of killing God\'s representative. He has severed his connection to divine grace. A Jacobean audience would have understood this as literal spiritual damnation, not merely psychological distress.',
    },
    keyTerms: [
      'regicide',
      'treason',
      'sacrilege',
      'anointed monarch',
      'hanging, drawing and quartering',
    ],
  },
  {
    title: "Shakespeare's Patron and the King's Men",
    overview:
      "Shakespeare's company was renamed the King's Men in 1603 when James I became their patron, giving Shakespeare direct incentive to please the new monarch.",
    detail:
      "Before James I's accession, Shakespeare's company was known as the Lord Chamberlain's Men, under the patronage of Henry Carey, 1st Baron Hunsdon. When James became king, he took the company under his personal patronage, renaming them the King's Men in May 1603. This was an enormous honour and a significant financial advantage: the company received a royal patent, wore royal livery, and performed at court more frequently than any other company (they averaged 12 court performances per year under James, compared to 3 under Elizabeth). This patronage gave Shakespeare a direct commercial and artistic incentive to write plays that would appeal to James's known interests: Scottish history, witchcraft, legitimate succession, and the nature of good kingship. Macbeth addresses all four. The play was likely first performed for James in August 1606, and its relatively short length (Shakespeare's shortest tragedy at roughly 2,100 lines) may reflect the demands of a court performance.",
    linksToPlay:
      "The Scottish setting, the witchcraft themes, the celebration of Banquo's line (presented as James's ancestors), and the endorsement of the Divine Right of Kings are all designed to please Shakespeare's royal patron. The play's brevity may be a practical adaptation for court performance.",
    relevantQuote: {
      quote: 'Some I see / That two-fold balls and treble sceptres carry.',
      speaker: 'Macbeth (describing the vision)',
      actScene: 'Act 4, Scene 1',
      whyItMatters:
        'The "two-fold balls" refer to the double coronation (England and Scotland) and "treble sceptres" to the three kingdoms James ruled. The show of kings is a direct tribute to James I, transforming a supernatural scene into royal flattery. Shakespeare literally projects his patron\'s dynasty into the play.',
    },
    keyTerms: [
      "King's Men",
      "Lord Chamberlain's Men",
      'royal patent',
      'court performance',
      'patronage',
    ],
  },
  {
    title: 'The Globe Theatre and Performance Context',
    overview:
      'Macbeth was written for the Globe Theatre and likely adapted for court performance, shaping its dramatic techniques.',
    detail:
      "The Globe Theatre, built in 1599 on Bankside in Southwark, was Shakespeare's primary venue. It was an open-air amphitheatre seating approximately 3,000 spectators. Performances took place in daylight, which meant that the play's pervasive darkness imagery had to be established through language rather than lighting. When Macbeth says \"Stars, hide your fires\" or Lady Macbeth calls on \"thick night,\" the audience must imagine the darkness; they cannot see it. This reliance on verbal scene-setting explains the richness of the play's imagery. The Globe's stage had a trapdoor (used for supernatural entrances) and a gallery above (used for watching scenes or royal appearances). The witches may have used the trapdoor for their entrances and exits, reinforcing their association with the underworld. Banquo's ghost may have risen through it. The play was also performed at court and, after 1609, at the Blackfriars Theatre, an indoor venue with artificial lighting and a more elite audience. The play's theatrical self-awareness -- Macbeth's \"poor player / That struts and frets his hour upon the stage\" -- resonates differently in each venue but always reminds the audience of the artifice they are witnessing.",
    linksToPlay:
      "The darkness imagery throughout the play compensates for the Globe's daylight performances. The witches' entrances through the trapdoor would have reinforced their infernal associations. Macbeth's \"poor player\" speech in Act 5 is deeply self-aware in a theatrical context. The play's brevity suits both court and commercial performance.",
    relevantQuote: {
      quote:
        "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage.",
      speaker: 'Macbeth',
      actScene: 'Act 5, Scene 5',
      whyItMatters:
        'Macbeth\'s theatrical metaphor is profoundly self-aware: he is himself a "poor player" on Shakespeare\'s stage. At the Globe, this line would have created a moment of meta-theatrical recognition as the audience watches an actor playing a character who describes life as mere acting.',
    },
    keyTerms: [
      'Globe Theatre',
      'Bankside',
      'Blackfriars Theatre',
      'trapdoor',
      'open-air amphitheatre',
      'verbal scene-setting',
    ],
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethContextPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/revision/texts/macbeth' },
          { name: 'Context', url: 'https://theenglishhub.app/revision/texts/macbeth/context' },
        ]}
      />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/macbeth" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Macbeth overview
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <ScrollText className="mr-1 size-3 text-blue-400" />
                Historical Context
              </Badge>
              <Badge variant="outline">8 topics</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Macbeth — Historical Context
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Essential Jacobean context for Macbeth: James I, witchcraft, the Gunpowder Plot, the
              Divine Right of Kings, and the theatrical world Shakespeare wrote for. Understanding
              context is worth up to 6 marks in AQA GCSE Literature.
            </p>
          </div>
        </section>

        {/* Exam tip */}
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-4">
          <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-amber-600 dark:text-clay-600">
            <Lightbulb className="size-4" /> Using Context in Your Essays
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Context should support your argument, not replace it. The strongest approach is to embed
            context within your analysis: &ldquo;Shakespeare uses [technique] to [effect], which
            would have resonated with a Jacobean audience because [contextual reason].&rdquo; Avoid
            &ldquo;bolt-on&rdquo; context paragraphs that feel disconnected from your textual
            analysis.
          </p>
        </div>

        {/* Context topic cards */}
        {CONTEXT_TOPICS.map((topic) => (
          <Card key={topic.title} id={topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="size-5 text-blue-400" />
                {topic.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{topic.overview}</p>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Detailed explanation */}
              <div>
                <h4 className="mb-1 font-semibold">Background</h4>
                <p className="text-muted-foreground leading-relaxed">{topic.detail}</p>
              </div>

              {/* Links to the play */}
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
                <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="size-4" /> How This Connects to the Play
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.linksToPlay}</p>
              </div>

              {/* Relevant quote */}
              <div className="rounded-lg border border-border/60 p-4 space-y-2">
                <h4 className="flex items-center gap-1.5 font-semibold text-sm">
                  <Quote className="size-4 text-amber-500" /> Key Quote
                </h4>
                <p className="text-lg font-medium leading-snug">
                  &ldquo;{topic.relevantQuote.quote}&rdquo;
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {topic.relevantQuote.speaker} &mdash; {topic.relevantQuote.actScene}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Why it matters: </span>
                  {topic.relevantQuote.whyItMatters}
                </p>
              </div>

              {/* Key terms */}
              <div>
                <h4 className="mb-2 font-semibold">Key Terms</h4>
                <div className="flex flex-wrap gap-2">
                  {topic.keyTerms.map((term) => (
                    <Badge key={term} variant="outline">
                      {term}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* AO3 context advice */}
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.04] p-4 space-y-3">
          <h4 className="font-semibold text-blue-600 dark:text-blue-400">
            How Context Earns AO3 Marks
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AQA Assessment Objective 3 (AO3) asks you to &ldquo;show understanding of the
            relationships between texts and the contexts in which they were written.&rdquo; This is
            worth up to 6 marks on the Macbeth question. The key word is &ldquo;relationships&rdquo;
            -- you must connect context to the text, not bolt it on.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">
                Level 1-2
              </Badge>
              <span className="text-muted-foreground">
                Simple awareness: &ldquo;Shakespeare wrote this in the Jacobean period.&rdquo;
              </span>
            </div>
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">
                Level 3-4
              </Badge>
              <span className="text-muted-foreground">
                Clear connection: &ldquo;The witches reflect James I&apos;s interest in witchcraft,
                as shown in Daemonologie.&rdquo;
              </span>
            </div>
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">
                Level 5-6
              </Badge>
              <span className="text-muted-foreground">
                Embedded and analytical: &ldquo;Shakespeare&apos;s use of equivocating prophecies
                mirrors the Jesuit doctrine exposed during Garnet&apos;s trial, making the witches
                resonate with the national anxiety surrounding the Gunpowder Plot.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Common mistakes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="size-5 text-clay-600" />
              Common Context Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  mistake:
                    'Writing a separate "context paragraph" disconnected from textual analysis',
                  correction:
                    'Embed context within your analysis. Instead of a standalone paragraph about James I, write: "Shakespeare presents Duncan as a divinely appointed king whose murder triggers cosmic disorder, reinforcing the doctrine of the Divine Right of Kings that James I promoted."',
                },
                {
                  mistake:
                    'Saying Shakespeare "was trying to please James I" as if that is the only reason the play exists',
                  correction:
                    'Acknowledge the political context but focus on what the play means. Shakespeare used the political moment to explore universal themes of ambition, guilt, and power that transcend the Jacobean period.',
                },
                {
                  mistake:
                    'Treating the witches as proof that "people in those days believed in magic"',
                  correction:
                    'Be specific. Reference Daemonologie, the North Berwick trials, or the Witchcraft Act of 1604. Show that belief in witchcraft was not naive superstition but a structured intellectual and legal framework.',
                },
                {
                  mistake:
                    "Confusing the historical Macbeth (an 11th-century Scottish king) with Shakespeare's character",
                  correction:
                    "Shakespeare's Macbeth is based on Holinshed's Chronicles, not on historical fact. The real Macbeth (Mac Bethad mac Findlaích) ruled Scotland from 1040 to 1057, killed Duncan I in battle (not by stabbing him in his sleep), and was secure enough by 1050 to make a pilgrimage to Rome. Shakespeare condensed, blackened, and dramatised the historical record for theatrical effect — and to flatter James I.",
                },
                {
                  mistake:
                    'Saying "In Shakespeare\'s time, women had no power" as a blanket statement',
                  correction:
                    "Be more nuanced. Elizabeth I had recently ruled for 45 years. James I's wife, Anne of Denmark, was a patron of the arts. Lady Macbeth's power is transgressive not because women had none, but because she seeks it through violence and supernatural means.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-red-500/15 bg-red-500/[0.03] p-3 space-y-1.5"
                >
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    Mistake: {item.mistake}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Better:{' '}
                    </span>
                    {item.correction}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="size-5 text-blue-400" />
              Key Dates Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  year: '1590',
                  event:
                    'North Berwick witch trials -- James VI personally interrogates accused witches',
                },
                { year: '1597', event: 'James publishes Daemonologie, his treatise on witchcraft' },
                {
                  year: '1603',
                  event: 'James VI of Scotland becomes James I of England (Union of Crowns)',
                },
                {
                  year: '1603',
                  event: "Shakespeare's company renamed the King's Men under royal patronage",
                },
                {
                  year: '1604',
                  event: 'Witchcraft Act makes communing with evil spirits a capital offence',
                },
                {
                  year: '1605',
                  event:
                    'Gunpowder Plot discovered (5 November) -- Catholic conspiracy to kill James',
                },
                {
                  year: '1606',
                  event: 'Trial and execution of Jesuit Henry Garnet for equivocation',
                },
                {
                  year: '1606',
                  event: 'Macbeth written and likely first performed at court for James I',
                },
                {
                  year: '1623',
                  event: "Macbeth published in the First Folio (the play's only early text)",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <Badge variant="outline" className="mt-0.5 shrink-0 font-mono text-xs">
                    {item.year}
                  </Badge>
                  <span className="text-muted-foreground">{item.event}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-8">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-4 mr-1" /> Overview
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/essay-plans" />}>
            Essay Plans <BookOpen className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
