import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'
export const metadata: Metadata = {
  openGraph: {
    title: 'Jane Eyre Key Chapters Analysed | The English Hub',
    description:
      'In-depth analysis of the most important chapters in Jane Eyre by Charlotte Bronte for AQA and OCR GCSE English Literature.',
  },
  title: 'Jane Eyre Key Chapters Analysed',
  description:
    'In-depth analysis of the most important chapters in Jane Eyre by Charlotte Bronte for AQA and OCR GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jane-eyre/chapters',
  },
}

type ChapterAnalysis = {
  chapter: string
  title: string
  significance: string
  keyEvents: string[]
  keyQuotes: { quote: string; analysis: string }[]
  examTip: string
}

const chapters: ChapterAnalysis[] = [
  {
    chapter: 'Chapter 1',
    title: "The Red Room and Jane's Rebellion",
    significance:
      "The opening chapter establishes Jane as an outsider within the Reed household and introduces the novel's central preoccupation with injustice, resistance and the right to speak. Jane's refusal to accept John Reed's bullying marks her as a character who will challenge authority throughout the narrative. Bronte immediately positions the reader to sympathise with Jane through her first-person retrospective voice, which combines a child's raw emotion with an adult's analytical clarity.",
    keyEvents: [
      'Jane is excluded from the Reed family circle and retreats behind a curtain with a book.',
      'John Reed bullies Jane, striking her and throwing a book at her head.',
      'Jane fights back physically and verbally, calling John a "wicked and cruel boy" and comparing him to a Roman emperor.',
      'The servants restrain Jane and she is sent to the red room as punishment.',
    ],
    keyQuotes: [
      {
        quote: '"I was a discord in Gateshead Hall; I was like nobody there."',
        analysis:
          'The musical metaphor of "discord" suggests Jane disrupts the harmony of the household simply by existing. This positions her as fundamentally incompatible with the Reed family, foreshadowing her lifelong search for belonging. The phrase "like nobody" conveys both isolation and erasure of identity.',
      },
      {
        quote:
          '"You are like a murderer -- you are like a slave-driver -- you are like the Roman emperors!"',
        analysis:
          "Jane's triple simile reveals her precocious reading and her instinctive sense of justice. By comparing John to historical tyrants, she frames his bullying as systemic oppression rather than childish cruelty. The escalating comparisons show her refusal to minimise her suffering, a trait that defines her throughout the novel.",
      },
    ],
    examTip:
      "Use Chapter 1 to discuss how Bronte establishes Jane's voice and the theme of social injustice from the very first page. The red room can be linked to Gothic conventions and to Jane's psychological entrapment.",
  },
  {
    chapter: 'Chapter 2',
    title: 'The Red Room',
    significance:
      "The red room is the novel's first major symbolic space. Jane is imprisoned in the room where her uncle Reed died, and its oppressive atmosphere -- red furnishings, locked door, dim light -- creates a Gothic setting that externalises Jane's emotional state. The scene dramatises the powerlessness of a child who is dependent on hostile relatives, and Jane's terror at the thought of Mr Reed's ghost introduces the supernatural element that recurs throughout the novel. Her fainting fit at the end of the chapter is caused not just by fear but by the accumulated trauma of injustice.",
    keyEvents: [
      'Jane is locked in the red room, the chamber where Mr Reed died.',
      'She examines her own reflection in the mirror, seeing herself as a strange, otherworldly figure.',
      'She reflects on the injustice of her treatment and questions why she is always the one punished.',
      'She sees a light on the wall, believes it is a ghost, screams, and faints after Mrs Reed refuses to release her.',
    ],
    keyQuotes: [
      {
        quote:
          '"Unjust! -- unjust!" said my reason, forced by the agonising stimulus into precocious though transitory power.',
        analysis:
          'The exclamatory repetition of "Unjust" captures the raw intensity of Jane\'s moral outrage. The narrator\'s self-aware description of her "reason" as "precocious" shows the adult Jane reflecting on the child\'s unusual intellectual maturity. This passage crystallises the novel\'s central tension: Jane perceives injustice clearly but lacks the social power to challenge it.',
      },
      {
        quote: '"I was a heterogeneous thing... a noxious thing."',
        analysis:
          'Jane internalises the Reed family\'s view of her as something alien and poisonous. The dehumanising word "thing" (used twice) reflects how the powerless adopt the language of their oppressors. Bronte uses this moment to show the psychological damage of being told you do not belong.',
      },
    ],
    examTip:
      "The red room is one of the most frequently examined passages. Link it to the Gothic genre, to the theme of imprisonment versus freedom, and to Jane's later refusal to accept confinement in any form -- physical, emotional or spiritual.",
  },
  {
    chapter: 'Chapter 4',
    title: 'Jane Confronts Mrs Reed',
    significance:
      "This chapter marks a turning point in Jane's development. When Mrs Reed tells Mr Brocklehurst that Jane is a liar, Jane is filled with righteous fury and, after Brocklehurst leaves, confronts her aunt directly. The confrontation is the first time Jane exercises genuine rhetorical power over an adult. The chapter explores the relationship between truth, power and social class: Mrs Reed can lie about Jane with impunity because of her social position, while Jane's truthful protest is treated as insubordination.",
    keyEvents: [
      'Mr Brocklehurst visits to interview Jane before she is sent to Lowood.',
      'Mrs Reed tells Brocklehurst that Jane is deceitful, poisoning his view of her in advance.',
      'After Brocklehurst leaves, Jane confronts Mrs Reed and accuses her of cruelty.',
      'Jane feels a brief triumph but then experiences the loneliness and guilt that follow anger.',
    ],
    keyQuotes: [
      {
        quote:
          '"I am not deceitful: if I were, I should say I loved you; but I declare I do not love you."',
        analysis:
          'Jane uses logic to dismantle Mrs Reed\'s accusation: the very honesty of her declaration proves she is not a liar. The statement is radical for a dependent child addressing her guardian, and Bronte uses it to establish that Jane values truth above social convention. The balanced syntax ("if I were... but I declare") shows Jane\'s rational mind even in a moment of passion.',
      },
      {
        quote:
          '"Ere I had finished this reply, my soul began to expand, to exult, with the strangest sense of freedom, of triumph, I ever felt."',
        analysis:
          'The language of spiritual liberation ("soul," "expand," "exult") elevates Jane\'s confrontation from a child\'s tantrum to a moral victory. The word "freedom" connects this moment to the novel\'s broader exploration of what it means to be free -- not just physically but psychologically and spiritually.',
      },
    ],
    examTip:
      "This chapter is excellent for exploring the theme of independence and Jane's development as a speaker. Compare her verbal power here with her later confrontations with Rochester and St John.",
  },
  {
    chapter: 'Chapters 5-8',
    title: 'Lowood School',
    significance:
      "Lowood represents a new form of institutional oppression, governed by the hypocritical Brocklehurst, who starves the girls while preaching Christian humility. However, it also provides Jane with her first meaningful relationships: Helen Burns and Miss Temple. Helen's stoic Christianity offers Jane an alternative to her own fierce resistance, while Miss Temple models female authority grounded in compassion rather than cruelty. The typhus epidemic that kills Helen exposes the material conditions of poverty and class inequality that Bronte critiques throughout the novel.",
    keyEvents: [
      'Jane arrives at Lowood and discovers the harsh conditions: cold, hunger, and strict discipline.',
      "Brocklehurst publicly humiliates Jane by calling her a liar, echoing Mrs Reed's accusation.",
      'Jane befriends Helen Burns, who teaches her patience and Christian forgiveness.',
      "Miss Temple clears Jane's name by writing to Mr Lloyd, restoring her reputation.",
      "A typhus epidemic sweeps Lowood; Helen dies of consumption in Jane's arms.",
    ],
    keyQuotes: [
      {
        quote:
          '"If all the world hated you, and believed you wicked, while your own conscience approved you, and absolved you from guilt, you would not be without friends."',
        analysis:
          'Helen articulates a philosophy of inner moral authority that profoundly influences Jane. The idea that conscience can "absolve" independently of public opinion is revolutionary for a child raised to believe she is inherently bad. This principle becomes central to Jane\'s later decision to leave Rochester: she acts on her own moral code regardless of what the world thinks.',
      },
      {
        quote:
          '"I could not help it: the restlessness was in my nature; it agitated me to pain sometimes."',
        analysis:
          'Jane\'s frank acknowledgement of her inner restlessness challenges Victorian expectations of feminine passivity. The word "nature" suggests this drive is innate rather than a fault to be corrected. Bronte presents Jane\'s dissatisfaction not as a character flaw but as the natural response of an intelligent, spirited woman confined by narrow circumstances.',
      },
    ],
    examTip:
      'Use the Lowood chapters to explore religion (Helen vs Brocklehurst as contrasting models of Christianity), class inequality, and the importance of female friendship and mentorship.',
  },
  {
    chapter: 'Chapters 11-15',
    title: 'Arrival at Thornfield and Meeting Rochester',
    significance:
      "Jane arrives at Thornfield as a governess, achieving a degree of financial independence for the first time. The Gothic atmosphere of the house -- its dark corridors, mysterious third-floor laughter, and isolated setting -- creates tension and foreshadows Bertha's revelation. Jane's first meeting with Rochester subverts romantic convention: he falls from his horse and she helps him, reversing the expected gender dynamics. Their intellectual sparring establishes a relationship based on mental equality rather than social hierarchy.",
    keyEvents: [
      'Jane takes up her position as governess to Adele Varens at Thornfield Hall.',
      'She hears strange laughter from the third floor, which is attributed to the servant Grace Poole.',
      'Jane meets Rochester on the road when his horse slips on ice and he falls.',
      'Rochester and Jane begin their evening conversations, revealing intellectual compatibility.',
      "Rochester tells Jane the story of Adele's mother, Celine Varens.",
    ],
    keyQuotes: [
      {
        quote:
          '"Women feel just as men feel; they need exercise for their faculties, and a field for their efforts as much as their brothers do."',
        analysis:
          'This is one of the novel\'s most explicitly feminist passages. Jane directly challenges the Victorian doctrine of separate spheres, insisting that women\'s intellectual and emotional needs are identical to men\'s. The word "faculties" elevates the argument from sentiment to reason, and "field for their efforts" demands not just feeling but action and opportunity.',
      },
      {
        quote:
          '"Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?"',
        analysis:
          'Jane lists every social disadvantage held against her -- poverty, anonymity, plainness, small stature -- and rejects the idea that external circumstances determine inner worth. The rhetorical question forces Rochester (and the reader) to confront their own assumptions about class and appearance. The word "soulless" raises the stakes to a spiritual level.',
      },
    ],
    examTip:
      'These chapters are essential for discussing gender roles and the Gothic setting of Thornfield. The feminist passage from Chapter 12 is one of the most frequently quoted in exams.',
  },
  {
    chapter: 'Chapters 23-27',
    title: 'The Proposal, the Wedding, and the Revelation',
    significance:
      "This sequence forms the novel's emotional and structural climax. Rochester's proposal under the horse-chestnut tree is followed by the tree being struck by lightning, a pathetic fallacy that signals the unnaturalness of their union while Bertha lives. The interrupted wedding is the novel's most dramatic scene: Mason's revelation that Rochester already has a wife destroys Jane's happiness and forces her to choose between passion and principle. Chapter 27, in which Jane decides to leave, is the moral centre of the novel. Her refusal to become Rochester's mistress despite her love is an act of radical self-respect.",
    keyEvents: [
      'Rochester proposes to Jane in the garden; the horse-chestnut tree is split by lightning that night.',
      "During the wedding, Mason and the solicitor Briggs halt the ceremony, revealing Bertha Mason's existence.",
      'Rochester takes the wedding party to the third floor and shows them Bertha.',
      'Rochester begs Jane to stay as his mistress; she refuses and leaves Thornfield at dawn.',
    ],
    keyQuotes: [
      {
        quote:
          '"I am no bird; and no net ensnares me; I am a free human being with an independent will."',
        analysis:
          'Jane\'s assertion of freedom uses the metaphor of a bird and a net to reject the idea that she can be trapped or owned. The triple declaration ("no bird," "no net," "free human being") builds in rhetorical force. The phrase "independent will" is the novel\'s philosophical core: Jane defines herself not by social role or relationship but by her capacity for autonomous moral choice.',
      },
      {
        quote:
          '"I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself."',
        analysis:
          'This is Jane\'s most powerful statement of self-respect. She anticipates the loneliness that will follow her departure and accepts it as the price of integrity. The escalating tricolon ("solitary... friendless... unsustained") emphasises how much she is sacrificing, making her resolve all the more impressive. The verb "respect" is deliberately chosen: she values self-respect above romantic love.',
      },
      {
        quote:
          '"Laws and principles are not for the times when there is no temptation... they have a worth -- so I have always believed; and if I cannot believe it now, it is because I am insane -- quite insane."',
        analysis:
          'Jane articulates a moral philosophy rooted in consistency: principles that bend under pressure are not principles at all. Her acknowledgement of temptation makes her adherence more heroic, not less. The self-correction ("quite insane") reveals the emotional cost of her decision while reaffirming her commitment to reason over feeling.',
      },
    ],
    examTip:
      "These chapters are the most frequently examined section of the novel. Focus on Jane's moral reasoning in Chapter 27 -- it connects to themes of independence, morality, religion, and gender. The lightning-struck tree is a classic Gothic symbol worth analysing.",
  },
  {
    chapter: 'Chapters 28-35',
    title: 'Moor House and St John Rivers',
    significance:
      "After fleeing Thornfield, Jane nearly dies on the moors before being taken in by the Rivers siblings. This section tests Jane's independence in a new way: St John Rivers offers her a life of purpose through missionary work but demands she marry him without love. His cold, dutiful Christianity contrasts with Helen Burns's warmth and Rochester's passion. Jane's inheritance from her uncle Eyre gives her financial independence for the first time, and her decision to share it equally with the Rivers siblings shows her valuing family and generosity over wealth. St John's proposal is the novel's second great temptation, and Jane's refusal of it is as significant as her refusal of Rochester's offer to be his mistress.",
    keyEvents: [
      'Jane wanders the moors, begging for food, and collapses on the doorstep of Moor House.',
      'She is taken in by Diana, Mary and St John Rivers.',
      'Jane teaches at the village school St John establishes for her.',
      'Jane inherits twenty thousand pounds from her uncle John Eyre and discovers the Rivers are her cousins.',
      'She divides the inheritance equally among the four of them.',
      'St John asks Jane to marry him and accompany him as a missionary to India.',
      "Jane hears Rochester's voice calling her name across the moors and resolves to return to him.",
    ],
    keyQuotes: [
      {
        quote:
          '"I was no longer the same individual: I had become another person... I felt myself another woman."',
        analysis:
          'Jane\'s transformation after inheriting money shows how financial independence reshapes identity. The repetition of "another" signals genuine change rather than superficial adjustment. Bronte makes a pointed social observation: Jane\'s character has not changed, but money has given her the freedom to express the self she always was.',
      },
      {
        quote:
          '"If I join St John, I abandon half myself: if I go to India, I go to premature death."',
        analysis:
          'Jane frames St John\'s proposal as a form of self-destruction. The phrase "abandon half myself" means surrendering her emotional and passionate nature to a man who demands only duty. Bronte presents this as just as dangerous as Rochester\'s earlier offer: both men ask Jane to sacrifice part of her identity. Only a relationship that honours the whole self is acceptable.',
      },
    ],
    examTip:
      "Compare St John's proposal with Rochester's to explore how Bronte constructs the theme of independence. St John represents duty without love; Rochester offered love without legality. Jane needs both.",
  },
  {
    chapter: 'Chapter 38',
    title: 'The Ending: "Reader, I married him"',
    significance:
      'The final chapter resolves every tension in the novel. Jane returns to find Thornfield burned down and Rochester blinded and maimed. Their reunion reverses the power dynamic: Jane now has money and independence, while Rochester is physically dependent. Bronte is careful to establish that Jane marries Rochester as an equal, not a subordinate. The famous opening line of the chapter -- "Reader, I married him" -- uses the active voice to make Jane the agent of her own story. Rochester\'s partial recovery of sight when their first child is born suggests that moral redemption can restore what sin destroyed.',
    keyEvents: [
      'Jane arrives at Thornfield to find it a blackened ruin, destroyed by a fire set by Bertha Mason.',
      'She learns that Bertha died in the fire and that Rochester lost his sight and one hand trying to save the servants.',
      'Jane finds Rochester at Ferndean Manor and they are reunited.',
      'They marry as equals; Jane has her inheritance and Rochester respects her independence.',
      'Rochester eventually recovers partial sight in one eye; they have a son.',
    ],
    keyQuotes: [
      {
        quote: '"Reader, I married him."',
        analysis:
          'The most famous line in the novel. The direct address to the reader creates intimacy and asserts narrative authority. Crucially, Jane says "I married him" rather than "he married me" -- she is the grammatical subject, the one who acts. This syntactic choice encapsulates the entire novel\'s argument: Jane\'s story is defined by her own choices, not by the men around her.',
      },
      {
        quote:
          '"I am my husband\'s life as fully as he is mine... we are precisely suited in character -- perfect concord is the result."',
        analysis:
          'Jane describes a marriage of absolute equality and mutual dependence. The phrase "precisely suited" suggests complementarity rather than hierarchy, and "perfect concord" recalls the "discord" of Chapter 1, bringing the novel full circle. Jane has found the belonging she sought from the first page, but only on terms that preserve her selfhood.',
      },
    ],
    examTip:
      "The ending is essential for discussing whether Bronte offers a feminist or conservative resolution. Consider whether Rochester's injuries are necessary to create equality, and what this suggests about the power dynamics Bronte saw in Victorian marriage.",
  },
]

export default async function JaneEyreChaptersPage() {
  const board = await getServerBoard()
  if (board && !['aqa', 'ocr'].includes(board)) {
    redirect('/revision/texts')
  }

  const significanceLabel = await t('rev.textgrp4.common.significance')
  const keyEventsLabel = await t('rev.textgrp4.common.key_events')
  const examTipLabel = await t('rev.textgrp4.common.exam_tip')

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Jane Eyre', url: 'https://theenglishhub.app/revision/texts/jane-eyre' },
          {
            name: 'Chapter-by-Chapter Analysis',
            url: 'https://theenglishhub.app/revision/texts/jane-eyre/chapters',
          },
        ]}
      />
      <Breadcrumb
        items={[
          { label: await t('rev.textgrp4.common.bc_revision'), href: '/revision' },
          { label: await t('rev.textgrp4.common.bc_set_texts'), href: '/revision/texts' },
          { label: 'Jane Eyre', href: '/revision/texts/jane-eyre' },
          { label: await t('rev.texts.jane-eyre.chapters.breadcrumb') },
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
            render={<Link href="/revision/texts/jane-eyre" />}
          >
            <ArrowLeft className="size-3.5" />
            {await t('rev.texts.jane-eyre.chapters.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              {await t('rev.textgrp4.common.19c_novel')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.jane-eyre.chapters.title')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {await t('rev.texts.jane-eyre.chapters.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts.jane-eyre.chapters.intro')}
          </p>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((ch, i) => (
        <section key={i}>
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="size-5 text-emerald-400" />
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {ch.chapter}: {ch.title}
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {/* Significance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{significanceLabel}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                {ch.significance}
              </CardContent>
            </Card>

            {/* Key events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">{keyEventsLabel}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1.5 pl-5 text-body-sm text-muted-foreground">
                  {ch.keyEvents.map((event, j) => (
                    <li key={j}>{event}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quotations */}
            <div className="grid gap-4">
              {ch.keyQuotes.map((q, j) => (
                <Card key={j}>
                  <CardContent className="space-y-2 p-5">
                    <div className="flex items-start gap-2">
                      <Quote className="mt-0.5 size-4 shrink-0 text-violet-400" />
                      <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Exam tip */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-clay-600" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{examTipLabel}</p>
                  <p className="mt-1 text-body-sm text-muted-foreground">{ch.examTip}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {(await t('rev.textgrp4.common.public_domain'))
          .replace('{title}', 'Jane Eyre')
          .replace('{author}', 'Charlotte Bronte')
          .replace('{year}', '1847')}
      </p>
    </div>
  )
}
