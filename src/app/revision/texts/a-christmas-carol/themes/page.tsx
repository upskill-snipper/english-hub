'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Heart,
  Sparkles,
  Flame,
  Quote,
  Lightbulb,
  Scale,
  Clock,
  Skull,
  Users,
  HandHeart,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Theme data ──────────────────────────────────────────────────────── */

type ThemeQuote = {
  text: string
  speaker: string
  stave: string
}

type StaveEvidence = {
  stave: string
  evidence: string
}

type ThemeData = {
  title: string
  icon: typeof Heart
  iconColour: string
  definition: string
  overview: string
  staveEvidence: StaveEvidence[]
  keyQuotes: ThemeQuote[]
  contextLinks: string[]
  essayTips: string[]
}

const themes: ThemeData[] = [
  {
    title: 'Redemption and Change',
    icon: Sparkles,
    iconColour: 'text-clay-600',
    definition:
      'The idea that a person can acknowledge their past wrongs, choose to live differently, and be genuinely transformed.',
    overview:
      'The entire novella is built around one question: can a person change? Dickens answers emphatically yes. Scrooge\'s transformation from miser to generous benefactor is presented as genuine and lasting. Dickens structures the three visitations as a process of moral education: confronting the past (regret), witnessing the present (empathy), and fearing the future (terror). The message is that it is never too late to change, but that change requires honestly facing the consequences of one\'s actions. Scrooge\'s vow -- "I will honour Christmas in my heart, and try to keep it all the year" -- uses the word "try" deliberately: redemption is a daily effort, not a single dramatic gesture.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'Marley\'s ghost offers "a chance and hope" of redemption. The word "chance" establishes that change is possible but not guaranteed -- Scrooge must earn it. Marley himself represents the failure to change: he sees the truth only after death.',
      },
      {
        stave: 'Stave 2',
        evidence:
          'The Ghost of Christmas Past begins the process of self-examination. Scrooge weeps at his lonely childhood self and recognises his failure as an employer after seeing Fezziwig. These are the first cracks in his emotional armour.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'Scrooge feels genuine empathy for Tiny Tim and asks "with an interest he had never felt before" about the child\'s future. Empathy -- the ability to feel for another person -- is the crucial middle stage of transformation.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'Fear of dying unmourned and unloved completes the process. Scrooge clings to the phantom\'s robe and makes his vow: "I am not the man I was." He claims transformation in the present tense.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge proves his redemption through action: the turkey, the donation, Fred\'s dinner, Bob\'s raise. He becomes "as good a friend, as good a master, and as good a man, as the good old city knew." Transformation is shown, not just told.',
      },
    ],
    keyQuotes: [
      {
        text: '"I will honour Christmas in my heart, and try to keep it all the year."',
        speaker: 'Scrooge',
        stave: 'Stave 4',
      },
      {
        text: '"I am not the man I was."',
        speaker: 'Scrooge',
        stave: 'Stave 4',
      },
      {
        text: '"He became as good a friend, as good a master, and as good a man, as the good old city knew."',
        speaker: 'Narrator',
        stave: 'Stave 5',
      },
      {
        text: '"I am here to-night to warn you, that you have yet a chance and hope of escaping my fate."',
        speaker: 'Marley',
        stave: 'Stave 1',
      },
    ],
    contextLinks: [
      'Dickens believed in the possibility of individual moral reform. He supported reformatory schools and charitable institutions.',
      'The novella was written as a deliberate alternative to a political pamphlet -- Dickens chose story over argument because he believed narrative could change hearts.',
      'Victorian Christianity emphasised the possibility of repentance and salvation -- Scrooge\'s transformation mirrors a conversion narrative.',
    ],
    essayTips: [
      'Structure an essay around the three stages of change: regret (Stave 2), empathy (Stave 3), and fear (Stave 4). Which is most important?',
      'The word "try" in Scrooge\'s vow is worth close analysis -- it adds realism and humility.',
      'Compare Marley (who cannot change) with Scrooge (who can) to show that timing matters.',
      'Always link to Dickens\'s PURPOSE: he wanted to convince his wealthy readers that personal change was possible and necessary.',
    ],
  },
  {
    title: 'Social Responsibility and Poverty',
    icon: Scale,
    iconColour: 'text-blue-400',
    definition:
      'The moral obligation of the wealthy and powerful to care for the poor and vulnerable in society.',
    overview:
      'Dickens wrote A Christmas Carol partly as a direct response to the 1843 parliamentary report on child labour. When Scrooge asks "Are there no prisons? Are there no workhouses?", Dickens puts the callous language of Victorian political economy into his mouth to expose its cruelty. The novella argues that poverty is a social failure, not a personal one, and that the wealthy have a duty to help those less fortunate. The children Ignorance and Want are Dickens\'s most explicit statement: society\'s neglect of the poor leads to collective doom.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'Scrooge dismisses the charity collectors with "Are there no prisons? Are there no workhouses?" -- echoing the utilitarian arguments of the Victorian establishment. His suggestion that the poor should die to "decrease the surplus population" references Malthus directly.',
      },
      {
        stave: 'Stave 2',
        evidence:
          'Fezziwig demonstrates that employers have the "power to render us happy or unhappy." This establishes the principle of employer responsibility. Bob Cratchit earns only fifteen shillings a week -- Dickens makes the reader calculate the human cost of low wages.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'The Cratchit family\'s poverty is shown in loving detail -- the small goose, the tiny pudding, Tiny Tim\'s crutch. The children Ignorance and Want, hidden beneath the Ghost\'s robe, are Dickens\'s most powerful political statement.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'Tiny Tim\'s death in the alternative future demonstrates the ultimate consequence of social indifference. A child dies because society refuses to help.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge\'s transformation into social responsibility: he donates generously, raises Bob\'s salary, and becomes "a second father" to Tiny Tim. Personal moral change produces social reform.',
      },
    ],
    keyQuotes: [
      {
        text: '"Are there no prisons? Are there no workhouses?"',
        speaker: 'Scrooge',
        stave: 'Stave 1',
      },
      {
        text: '"Mankind was my business. The common welfare was my business."',
        speaker: 'Marley',
        stave: 'Stave 1',
      },
      {
        text: '"This boy is Ignorance. This girl is Want. Beware them both."',
        speaker: 'Ghost of Christmas Present',
        stave: 'Stave 3',
      },
      {
        text: '"If these shadows remain unaltered by the Future, the child will die."',
        speaker: 'Ghost of Christmas Present',
        stave: 'Stave 3',
      },
    ],
    contextLinks: [
      'The Poor Law Amendment Act of 1834 created the workhouse system, deliberately designed to make poverty as unpleasant as possible.',
      'Thomas Malthus argued that poverty was a natural check on population -- Scrooge\'s "surplus population" line is a direct allusion.',
      'Dickens visited the Field Lane ragged schools in 1843 and read the government report on child labour -- both directly inspired the novella.',
      'The novella was originally planned as a political pamphlet: "An Appeal to the People of England on Behalf of the Poor Man\'s Child."',
    ],
    essayTips: [
      'Marley\'s redefinition of "business" from commerce to compassion is the thesis statement of the novella. Build an essay around it.',
      'Ignorance and Want are the most explicitly political passage -- link them to Dickens\'s real-world context.',
      'Scrooge\'s "surplus population" line is echoed back by the Ghost in Stave 3. Analyse this structural echo and its devastating effect.',
      'Discuss whether Dickens blames individuals (Scrooge) or systems (the Poor Law) -- the best answers consider both.',
    ],
  },
  {
    title: 'Christmas Spirit and Generosity',
    icon: HandHeart,
    iconColour: 'text-emerald-400',
    definition:
      'The idea that Christmas represents a moral principle of collective warmth, charity, and goodwill -- not merely a religious festival.',
    overview:
      'For Dickens, Christmas is not merely a day off work but a moral principle -- a time when people acknowledge their shared humanity. Fred defines it as "the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely." The novella helped create the modern idea of Christmas as a season of charity and goodwill. Scrooge\'s transformation is measured by his acts of giving: the turkey, the donation, the raised salary, the family dinner. Dickens argues that generosity creates happiness for both giver and receiver.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'Fred\'s passionate speech defends Christmas against Scrooge\'s "Humbug!" The contrast between Fred\'s warmth and Scrooge\'s coldness establishes the moral framework.',
      },
      {
        stave: 'Stave 2',
        evidence:
          'Fezziwig\'s party demonstrates that generosity does not require great wealth -- "three or four pounds" creates enormous joy. Christmas celebrations at the school show communal warmth.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'The Ghost of Christmas Present embodies abundance and sharing. London\'s streets glow with Christmas spirit. The Cratchit dinner transforms poverty into celebration through love and gratitude.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'The absence of Christmas spirit: the dead man is unmourned, his possessions stolen. This is what a life without generosity produces -- not grief but contempt.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge\'s transformation is expressed entirely through acts of generosity: the turkey, the donation, Fred\'s dinner, Bob\'s raise. Dickens shows that giving is a source of delight, not sacrifice.',
      },
    ],
    keyQuotes: [
      {
        text: '"The only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely."',
        speaker: 'Fred',
        stave: 'Stave 1',
      },
      {
        text: '"God bless Us, Every One!"',
        speaker: 'Tiny Tim',
        stave: 'Stave 3',
      },
      {
        text: '"I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy."',
        speaker: 'Scrooge',
        stave: 'Stave 5',
      },
    ],
    contextLinks: [
      'A Christmas Carol is widely credited with reviving and reshaping the English celebration of Christmas in the 1840s.',
      'The novella was priced at five shillings -- affordable for middle-class readers -- because Dickens wanted wide distribution.',
      'Victorian Christmas traditions (turkey, family gatherings, charity) were being established during this period, and Dickens helped define them.',
    ],
    essayTips: [
      'Fred\'s Stave 1 speech is the novella\'s definition of Christmas spirit. Learn it and use it as a thesis quote.',
      'Compare Scrooge\'s joyful giving in Stave 5 with his miserable hoarding in Stave 1 -- Dickens argues that generosity is more enjoyable than greed.',
      'Discuss how Dickens extends Christmas from a single day to a permanent moral principle: "I will honour Christmas in my heart, and try to keep it all the year."',
    ],
  },
  {
    title: 'Family and Isolation',
    icon: Users,
    iconColour: 'text-violet-400',
    definition:
      'The contrast between the warmth of family connection and the misery of self-imposed isolation.',
    overview:
      'Every happy scene in the novella revolves around family: young Scrooge welcomed by Fan, Fezziwig\'s party, Fred\'s dinner, and above all the Cratchit Christmas. Every miserable scene shows isolation: Scrooge alone at school, alone in his chambers, alone and dead with no one to mourn him. Dickens makes the connection between loneliness and cruelty absolute -- Scrooge\'s refusal to participate in family life is both symptom and cause of his moral failure. His transformation is marked by his return to family: attending Fred\'s dinner and becoming "a second father" to Tiny Tim.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'Scrooge rejects Fred\'s dinner invitation. He sits alone in his cold, dark chambers while the world celebrates. "Darkness is cheap, and Scrooge liked it."',
      },
      {
        stave: 'Stave 2',
        evidence:
          'The lonely schoolboy is the key to Scrooge\'s character. Fan\'s arrival brings warmth. Belle\'s departure removes it. Scrooge is shown how he chose isolation over love.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'The Cratchit family\'s togetherness contrasts with Scrooge\'s loneliness. Fred\'s party is full of warmth and laughter. Even the poorest families celebrate together.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'The dead man has no family to mourn him. The Cratchits\' grief for Tiny Tim proves the value of family bonds. The contrast between the two deaths is devastating.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge returns to family: Fred\'s dinner party. He becomes "a second father" to Tiny Tim. His isolation is completely reversed.',
      },
    ],
    keyQuotes: [
      {
        text: '"A solitary child, neglected by his friends, is left there still."',
        speaker: 'Narrator',
        stave: 'Stave 2',
      },
      {
        text: '"Darkness is cheap, and Scrooge liked it."',
        speaker: 'Narrator',
        stave: 'Stave 1',
      },
      {
        text: '"I mean to give him the same chance every year, whether he likes it or not, for I pity him."',
        speaker: 'Fred',
        stave: 'Stave 3',
      },
    ],
    contextLinks: [
      'Victorian society idealised the family unit. Dickens himself was deeply affected by his family\'s separation during his father\'s imprisonment.',
      'The workhouse system deliberately separated families -- a cruelty Dickens particularly abhorred.',
      'The novella helped establish Christmas as specifically a family occasion in British culture.',
    ],
    essayTips: [
      'Map the contrast between isolation and family systematically across all five staves.',
      'The lonely schoolboy of Stave 2 explains Scrooge\'s adult cruelty. Discuss how Dickens uses backstory to generate sympathy.',
      'Scrooge\'s return to Fred\'s dinner in Stave 5 completes a journey from rejection (Stave 1) to acceptance. Analyse this structural echo.',
    ],
  },
  {
    title: 'Time and Memory',
    icon: Clock,
    iconColour: 'text-teal-400',
    definition:
      'The novella\'s structural use of past, present and future to argue that understanding where you came from is essential to changing where you are going.',
    overview:
      'The three-ghost structure is fundamentally about time. The Ghost of Christmas Past forces Scrooge to confront his memories. The Ghost of Christmas Present forces him to see reality as it is now. The Ghost of Christmas Yet to Come shows him the consequences of inaction. Dickens argues that these three temporal perspectives are all necessary for moral change: you must understand how you got here (past), see the reality of your current impact (present), and understand where your current path leads (future). The novella also explores nostalgia -- the bittersweet power of memory to reveal both what was beautiful and what was lost.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'Marley announces the temporal structure: three spirits representing past, present and future. The past and future frame the present as a moment of choice.',
      },
      {
        stave: 'Stave 2',
        evidence:
          'The Ghost of Christmas Past uses memory as a tool of self-understanding. Scrooge weeps at his childhood, smiles at Fezziwig, grieves at Belle. Memory is shown as both painful and essential.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'The Ghost of Christmas Present ages and dies within a single stave -- a reminder that the present is always fleeting. Its lifespan is just one day (Christmas Day), emphasising the urgency of the present moment.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'The future is conditional, not fixed: "the shadows of the things that May be." Dickens rejects fatalism -- the future can be changed by present action.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge vows to "live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me." He has learned to integrate all three perspectives.',
      },
    ],
    keyQuotes: [
      {
        text: '"I will live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me."',
        speaker: 'Scrooge',
        stave: 'Stave 4',
      },
      {
        text: '"Are these the shadows of the things that Will be, or are they shadows of the things that May be, only?"',
        speaker: 'Scrooge',
        stave: 'Stave 4',
      },
      {
        text: '"These are but shadows of the things that have been. They are what they are, do not blame me!"',
        speaker: 'Ghost of Christmas Past',
        stave: 'Stave 2',
      },
    ],
    contextLinks: [
      'Dickens called his chapters "staves" -- a musical term meaning lines on which notes are written. The structure mirrors a carol: each stave builds toward a harmonious conclusion.',
      'Victorian interest in the supernatural was growing. Dickens uses the ghost story tradition to explore psychological and moral questions about time.',
      'The novella was published in December 1843, designed to be read at Christmas -- its temporal structure mirrors the reader\'s own experience of the season.',
    ],
    essayTips: [
      'The three-ghost structure is itself a metaphor for moral education. Discuss how each temporal stage contributes to Scrooge\'s change.',
      'Analyse the conditional language around the future ("may be" vs "will be") -- this is philosophically important.',
      'The Ghost of Christmas Present aging and dying within one stave is worth analysing: the present is fleeting and must be seized.',
    ],
  },
  {
    title: 'Death and Mortality',
    icon: Skull,
    iconColour: 'text-slate-400',
    definition:
      'The awareness that life is finite, and that how we live determines how we are remembered after death.',
    overview:
      'Death runs through the novella like a dark thread. Marley is dead before the story begins. Tiny Tim may die. The Ghost of Christmas Present ages and dies. Scrooge\'s own death is shown as unmourned and degrading. Dickens uses death not as a punishment but as a revelation: it strips away pretence and shows the true value of a life. A life of love (Tiny Tim) is mourned with genuine grief. A life of greed (Scrooge\'s possible future) is met with contempt and robbery. The novella belongs to the "memento mori" tradition -- reminders of death used to encourage a better life.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'The novella opens with the declaration "Old Marley was as dead as a door-nail." Marley\'s ghost -- chained and wailing -- shows the consequences of dying without having lived compassionately.',
      },
      {
        stave: 'Stave 2',
        evidence:
          'Fan\'s death is mentioned briefly but significantly -- she died young, leaving Fred behind. This adds to the pattern of loss in Scrooge\'s life.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'The Ghost of Christmas Present warns that Tiny Tim will die "if these shadows remain unaltered." The Ghost itself ages and dies within the stave.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'The entire stave is about death: the dead man whose possessions are stolen, the body lying alone and unattended, the gravestone bearing Scrooge\'s name. The Cratchits\' grief for Tiny Tim contrasts with the contempt shown to the dead miser.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge wakes alive -- the threat of death has been transformed into motivation for life. Tiny Tim does not die. Death has been averted through moral change.',
      },
    ],
    keyQuotes: [
      {
        text: '"Old Marley was as dead as a door-nail."',
        speaker: 'Narrator',
        stave: 'Stave 1',
      },
      {
        text: '"The case of this unhappy man might be my own. My life tends that way, now."',
        speaker: 'Scrooge',
        stave: 'Stave 4',
      },
      {
        text: '"Spirit! hear me! I am not the man I was!"',
        speaker: 'Scrooge',
        stave: 'Stave 4',
      },
    ],
    contextLinks: [
      'Death was a constant presence in Victorian life. High infant mortality, disease (cholera, typhus) and poor sanitation made death visible and frequent.',
      'The "memento mori" tradition -- art and literature reminding people of death to encourage moral reflection -- has roots in medieval Christianity.',
      'Dickens was deeply affected by the death of his sister-in-law Mary Hogarth and frequently explored grief and mortality in his fiction.',
    ],
    essayTips: [
      'Compare the two deaths in Stave 4: the unmourned miser vs the deeply mourned Tiny Tim. This contrast is the moral argument.',
      'The novella opens and closes with death (Marley\'s death / Tiny Tim\'s averted death). Discuss how death frames the narrative.',
      'Link to the "memento mori" tradition and Victorian attitudes to death for contextual marks.',
    ],
  },
  {
    title: 'Greed and Capitalism',
    icon: Flame,
    iconColour: 'text-clay-600',
    definition:
      'Dickens\'s critique of the idea that the pursuit of individual wealth should take priority over collective welfare.',
    overview:
      'Dickens sets up a stark moral opposition throughout the novella. Scrooge\'s wealth makes him wretched; the Cratchits\' poverty does not prevent their joy. Fezziwig spends only "three or four pounds" but creates enormous happiness. Marley\'s chains are forged from "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel" -- the instruments of commerce become instruments of eternal punishment. Dickens does not argue against wealth itself but against the hoarding of wealth at the expense of others. Money spent on others creates happiness; money hoarded creates only isolation and spiritual death.',
    staveEvidence: [
      {
        stave: 'Stave 1',
        evidence:
          'Scrooge is described entirely through the language of commerce and extraction. His counting-house is cold because he is too mean to pay for coal. His character is built from economic adjectives: "squeezing, wrenching, grasping."',
      },
      {
        stave: 'Stave 2',
        evidence:
          'Belle identifies money as Scrooge\'s "golden idol" -- he has committed idolatry by worshipping wealth. The contrast between Fezziwig\'s modest spending and Scrooge\'s hoarding highlights the moral failure of greed.',
      },
      {
        stave: 'Stave 3',
        evidence:
          'The Cratchits\' tiny goose and pudding are transformed into a feast by love. Scrooge\'s wealth has not brought him any of this joy. The message: happiness comes from giving, not hoarding.',
      },
      {
        stave: 'Stave 4',
        evidence:
          'At Old Joe\'s shop, the dead man\'s possessions are sold for pennies. His bed curtains, his shirt, even his buttons are stripped away. A lifetime of hoarding produces nothing but contempt.',
      },
      {
        stave: 'Stave 5',
        evidence:
          'Scrooge uses his wealth generously -- the enormous turkey, the massive donation, the raised salary. Money itself is not evil; its moral value depends on how it is used.',
      },
    ],
    keyQuotes: [
      {
        text: '"Another idol has displaced me... a golden one."',
        speaker: 'Belle',
        stave: 'Stave 2',
      },
      {
        text: '"I wear the chain I forged in life. I made it link by link, and yard by yard."',
        speaker: 'Marley',
        stave: 'Stave 1',
      },
      {
        text: '"If they would rather die, they had better do it, and decrease the surplus population."',
        speaker: 'Scrooge',
        stave: 'Stave 1',
      },
    ],
    contextLinks: [
      'The Industrial Revolution created enormous wealth for factory owners while driving millions into poverty. Dickens saw this inequality at first hand.',
      'Laissez-faire economics argued that government should not interfere in business or assist the poor. Scrooge embodies this philosophy.',
      'Dickens was not opposed to capitalism -- he was a successful businessman himself -- but he argued passionately for ethical capitalism that included social responsibility.',
    ],
    essayTips: [
      'Marley\'s chain is the central symbol of greed\'s consequences. Always analyse its components -- the instruments of commerce become instruments of punishment.',
      'Dickens does not condemn wealth itself -- Scrooge is still wealthy in Stave 5. He condemns the hoarding of wealth. Make this distinction.',
      'Compare Fezziwig (ethical employer) with Scrooge (exploitative employer) to demonstrate Dickens\'s vision of how capitalism should work.',
      'Belle\'s "golden idol" line uses biblical allusion. Discuss how Dickens frames greed as spiritual corruption, not just a personality flaw.',
    ],
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function ThemesPage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "A Christmas Carol", url: "https://theenglishhub.app/revision/texts/a-christmas-carol" },
          { name: "Themes", url: "https://theenglishhub.app/revision/texts/a-christmas-carol/themes" },
        ]}
      />
      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/a-christmas-carol" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to A Christmas Carol
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Theme Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            A Christmas Carol by Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Seven major themes explored in depth: definition, evidence from each
            stave, key quotations, links to historical context, and essay
            planning tips for GCSE success.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 text-heading-md font-heading text-foreground">
              Jump to a Theme
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {themes.map((th) => {
                const Icon = th.icon
                return (
                  <a
                    key={th.title}
                    href={`#${th.title.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className={`size-4 ${th.iconColour}`} />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90 truncate">
                      {th.title}
                    </p>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Themes */}
      {themes.map((theme) => {
        const Icon = theme.icon
        return (
          <section
            key={theme.title}
            id={theme.title.toLowerCase().replace(/[\s&]+/g, '-')}
            className="scroll-mt-8 space-y-5"
          >
            {/* Theme header */}
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className={`size-5 ${theme.iconColour}`} />
              </div>
              <div>
                <h2 className="text-heading-lg font-heading text-foreground">
                  {theme.title}
                </h2>
                <p className="text-body-sm italic text-muted-foreground">
                  {theme.definition}
                </p>
              </div>
            </div>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <BookOpen className="size-4 text-blue-400" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{theme.overview}</p>
              </CardContent>
            </Card>

            {/* Evidence from each stave */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <Flame className="size-4 text-clay-600" />
                  Evidence Across the Novella
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-body-sm text-muted-foreground">
                {theme.staveEvidence.map((se) => (
                  <div key={se.stave}>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">
                      {se.stave}
                    </h4>
                    <p>{se.evidence}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key quotes */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Quote className="size-4 text-violet-400" />
                <h3 className="text-heading-md font-heading text-foreground">
                  Key Quotations
                </h3>
              </div>
              <div className="grid gap-3">
                {theme.keyQuotes.map((q, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <p className="font-medium italic text-foreground">
                        {q.text}
                      </p>
                      <p className="mt-1 text-xs font-mono text-primary">
                        {q.speaker} -- {q.stave}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Context links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <BookOpen className="size-4 text-teal-400" />
                  Links to Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-body-sm text-muted-foreground">
                  {theme.contextLinks.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Essay tips */}
            <Card className="bg-primary/[0.03] border-primary/10">
              <CardContent className="p-5 sm:p-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lightbulb className="size-4 text-clay-600" />
                  Essay Planning Tips
                </h4>
                <ul className="list-disc space-y-2 pl-4 text-body-sm text-muted-foreground">
                  {theme.essayTips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )
      })}

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A Christmas Carol by Charles Dickens (1843) is in the public domain.
        Quotations are reproduced freely as the text is no longer subject to
        copyright.
      </p>
    </div>
  )
}
