import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Sparkles } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Jane Eyre Key Quotes -- 25 Essential Quotations | The English Hub',
    description:
      '25 key quotations from Jane Eyre by Charlotte Bronte with detailed analysis for AQA and OCR GCSE English Literature.',
  },
  title: 'Jane Eyre Key Quotes -- 25 Essential Quotations | The English Hub',
  description:
    '25 key quotations from Jane Eyre by Charlotte Bronte with detailed analysis for AQA and OCR GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jane-eyre/key-quotes',
  },
}

type KeyQuote = {
  quote: string
  speaker: string
  context: string
  analysis: string
  themes: string[]
}

const quotes: KeyQuote[] = [
  {
    quote:
      '"I am no bird; and no net ensnares me; I am a free human being with an independent will."',
    speaker: 'Jane -- Chapter 23',
    context:
      'Jane responds to Rochester during his proposal, asserting her equality before she knows he genuinely loves her.',
    analysis:
      'The bird/net metaphor rejects the idea that Jane can be trapped or possessed. The triple declaration builds in rhetorical force, culminating in "independent will" -- the philosophical foundation of Jane\'s identity. Bronte uses this speech to insist that love must be entered freely, never coerced.',
    themes: ['Independence', 'Gender', 'Love'],
  },
  {
    quote:
      '"I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself."',
    speaker: 'Jane -- Chapter 27',
    context: 'Jane resolves to leave Rochester after discovering his marriage to Bertha Mason.',
    analysis:
      'The escalating tricolon ("solitary... friendless... unsustained") acknowledges the enormous personal cost of her decision. The verb "respect" is deliberately chosen over "love" or "comfort" -- self-respect is the non-negotiable value that governs Jane\'s choices. Bronte positions moral integrity as more important than romantic happiness.',
    themes: ['Independence', 'Morality', 'Love'],
  },
  {
    quote:
      '"Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?"',
    speaker: 'Jane -- Chapter 23',
    context:
      'Jane confronts Rochester when she believes he intends to marry Blanche Ingram and dismiss her.',
    analysis:
      'Jane lists four social disadvantages -- poverty, anonymity, plainness, small stature -- and rejects the idea that external circumstances determine inner worth. The rhetorical question forces the listener to confront class prejudice. "Soulless" raises the argument from social inequality to spiritual equality.',
    themes: ['Class', 'Gender', 'Independence'],
  },
  {
    quote: '"Reader, I married him."',
    speaker: 'Jane -- Chapter 38',
    context: "The opening of the final chapter, describing Jane's marriage to Rochester.",
    analysis:
      'The most famous line in the novel. The direct address creates intimacy with the reader. Crucially, "I married him" places Jane as the grammatical subject -- she is the agent, not the object, of her own story. This syntactic choice encapsulates the entire novel\'s argument about female autonomy.',
    themes: ['Independence', 'Gender', 'Love'],
  },
  {
    quote:
      '"Women feel just as men feel; they need exercise for their faculties, and a field for their efforts as much as their brothers do."',
    speaker: 'Jane (narration) -- Chapter 12',
    context:
      'Jane reflects on her restlessness at Thornfield while pacing the third-floor corridor.',
    analysis:
      'This is the novel\'s most explicitly feminist statement. "Faculties" elevates the argument from emotion to intellect, insisting on women\'s rational equality. "Field for their efforts" demands opportunity, not just sympathy. Bronte directly challenges the Victorian doctrine of separate spheres.',
    themes: ['Gender', 'Independence'],
  },
  {
    quote: '"I was a discord in Gateshead Hall; I was like nobody there."',
    speaker: 'Jane (narration) -- Chapter 1',
    context: 'Jane reflects on her position as an unwanted dependent in the Reed household.',
    analysis:
      'The musical metaphor of "discord" suggests Jane disrupts the Reed family\'s harmony simply by existing. "Like nobody" conveys both isolation and the erasure of identity. Bronte establishes from the opening pages that Jane\'s story is a search for belonging that does not require the sacrifice of selfhood.',
    themes: ['Independence', 'Class'],
  },
  {
    quote:
      '"Unjust! -- unjust!" said my reason, forced by the agonising stimulus into precocious though transitory power.',
    speaker: 'Jane (narration) -- Chapter 2',
    context: 'Jane is locked in the red room after being punished for fighting with John Reed.',
    analysis:
      'The exclamatory repetition captures raw moral outrage. "Reason" is personified as a force that can be activated by injustice, suggesting that Jane\'s intellect is sharpened by suffering. "Precocious though transitory" shows the adult narrator reflecting on the limits of a child\'s power -- she can perceive injustice but cannot yet sustain resistance.',
    themes: ['Independence', 'Morality', 'Class'],
  },
  {
    quote:
      '"I am not deceitful: if I were, I should say I loved you; but I declare I do not love you."',
    speaker: 'Jane -- Chapter 4',
    context:
      "Jane confronts Mrs Reed after Brocklehurst's visit, rejecting her aunt's accusation of dishonesty.",
    analysis:
      "Jane uses impeccable logic to demolish Mrs Reed's claim: the honesty of her statement proves she is not a liar. The balanced syntax demonstrates rational clarity even in anger. This is the first time Jane exercises genuine rhetorical power over an adult, marking a pivotal moment in her development.",
    themes: ['Independence', 'Morality'],
  },
  {
    quote:
      '"Ere I had finished this reply, my soul began to expand, to exult, with the strangest sense of freedom, of triumph, I ever felt."',
    speaker: 'Jane (narration) -- Chapter 4',
    context: 'Jane describes her feelings immediately after confronting Mrs Reed.',
    analysis:
      'The language of spiritual liberation ("soul," "expand," "exult") elevates a child\'s defiance to a moral victory. "Freedom" and "triumph" are the rewards of speaking truth to power. The passage establishes speaking honestly as an act of self-liberation, a pattern that recurs throughout the novel.',
    themes: ['Independence', 'Morality'],
  },
  {
    quote:
      '"If all the world hated you, and believed you wicked, while your own conscience approved you, and absolved you from guilt, you would not be without friends."',
    speaker: 'Helen Burns -- Chapter 8',
    context: 'Helen comforts Jane after Brocklehurst publicly humiliates her at Lowood.',
    analysis:
      'Helen articulates a philosophy of inner moral authority that profoundly influences Jane. The idea that conscience can "absolve" independently of public opinion is revolutionary for a child raised to believe she is inherently bad. This principle becomes central to Jane\'s decision to leave Rochester.',
    themes: ['Religion', 'Morality', 'Independence'],
  },
  {
    quote:
      '"I could not help it: the restlessness was in my nature; it agitated me to pain sometimes."',
    speaker: 'Jane (narration) -- Chapter 12',
    context: 'Jane describes her dissatisfaction with the quiet routine of Thornfield.',
    analysis:
      'Jane frankly acknowledges her inner restlessness, challenging Victorian expectations of feminine contentment. "Nature" presents this drive as innate rather than a fault. Bronte frames female ambition and intellectual hunger not as aberrations but as natural human needs suppressed by social convention.',
    themes: ['Gender', 'Independence'],
  },
  {
    quote:
      '"You are like a murderer -- you are like a slave-driver -- you are like the Roman emperors!"',
    speaker: 'Jane -- Chapter 1',
    context:
      'Jane fights back against John Reed after he strikes her and throws a book at her head.',
    analysis:
      "The triple simile reveals Jane's precocious reading and instinctive sense of justice. The comparison to slave-drivers is politically charged, connecting domestic tyranny to the wider system of imperial exploitation. Each comparison escalates in severity, showing Jane's refusal to minimise her oppression.",
    themes: ['Class', 'Independence', 'Morality'],
  },
  {
    quote: '"I would always rather be happy than dignified."',
    speaker: 'Jane -- Chapter 24',
    context: 'Jane tells Rochester that she values genuine feeling over social propriety.',
    analysis:
      'This deceptively simple statement challenges the Victorian prioritisation of outward respectability. "Dignified" implies the stiff, performative virtue expected of women; "happy" implies authentic emotional fulfilment. Bronte suggests that true morality is about genuine feeling, not social display.',
    themes: ['Independence', 'Love', 'Gender'],
  },
  {
    quote:
      '"Laws and principles are not for the times when there is no temptation... they have a worth -- so I have always believed."',
    speaker: 'Jane -- Chapter 27',
    context:
      'Jane reflects on her decision to leave Rochester despite her overwhelming love for him.',
    analysis:
      'Jane articulates a moral philosophy rooted in consistency: principles that bend under pressure are not principles at all. Her acknowledgement of temptation makes her adherence more heroic. Bronte presents morality not as the absence of desire but as the triumph of conscience over passion.',
    themes: ['Morality', 'Religion', 'Independence'],
  },
  {
    quote:
      '"I will hold to the principles received by me when I was sane, and not mad -- as I am now."',
    speaker: 'Jane -- Chapter 27',
    context:
      'Jane resolves to leave Thornfield despite the emotional agony of abandoning Rochester.',
    analysis:
      'The contrast between "sane" and "mad" dramatises the internal conflict between reason and passion. Jane acknowledges that love has temporarily overwhelmed her judgement but refuses to act on that state. The word "received" suggests her principles were earned through suffering at Lowood and Gateshead, making them too precious to abandon.',
    themes: ['Morality', 'Independence', 'Love'],
  },
  {
    quote:
      '"Gentle reader, may you never feel what I then felt! May your eyes never shed such stormy, scalding, heart-wrung tears as poured from mine."',
    speaker: 'Jane (narration) -- Chapter 27',
    context: 'Jane describes her emotional state on the night she decides to leave Rochester.',
    analysis:
      'The direct address to the reader creates emotional intimacy, while the cascade of adjectives ("stormy, scalding, heart-wrung") conveys almost unbearable pain. Bronte insists that Jane\'s moral choice does not come easily -- it costs her everything. The passage prevents the reader from seeing Jane as cold or unfeeling.',
    themes: ['Love', 'Morality'],
  },
  {
    quote:
      '"I am my husband\'s life as fully as he is mine... we are precisely suited in character -- perfect concord is the result."',
    speaker: 'Jane (narration) -- Chapter 38',
    context: 'Jane describes her marriage to Rochester ten years on.',
    analysis:
      'The language of mutual dependence ("as fully as") and complementarity ("precisely suited") describes a marriage of equals. "Perfect concord" recalls the "discord" of Chapter 1, bringing the novel full circle. Jane has found belonging without sacrificing selfhood -- the resolution Bronte has been building towards.',
    themes: ['Love', 'Independence', 'Gender'],
  },
  {
    quote:
      '"I had not intended to love him; the reader knows I had wrought hard to extirpate from my soul the germs of love there detected."',
    speaker: 'Jane (narration) -- Chapter 17',
    context:
      'Jane admits her growing feelings for Rochester during the house party with Blanche Ingram.',
    analysis:
      'The clinical vocabulary ("extirpate," "germs," "detected") treats love as a disease to be surgically removed, revealing Jane\'s fear of emotional vulnerability. The passive construction "there detected" suggests love appeared without her consent. Bronte shows that Jane\'s independence, while admirable, also creates a defensive fear of attachment.',
    themes: ['Love', 'Independence'],
  },
  {
    quote:
      '"It is in vain to say human beings ought to be satisfied with tranquillity: they must have action; and they will make it if they cannot find it."',
    speaker: 'Jane (narration) -- Chapter 12',
    context: 'Jane reflects on human nature while pacing the third-floor corridor at Thornfield.',
    analysis:
      'The universal claim ("human beings") deliberately includes women, who were expected to find fulfilment in domestic tranquillity. The imperative "must" presents the need for action as a law of human nature, not a personal failing. Bronte challenges the reader to recognise that confining women to passivity creates frustration, not contentment.',
    themes: ['Gender', 'Independence'],
  },
  {
    quote: '"There was no possibility of taking a walk that day."',
    speaker: 'Jane (narration) -- Chapter 1',
    context: "The novel's opening sentence.",
    analysis:
      'The very first sentence establishes confinement as the novel\'s starting condition. "No possibility" is absolute -- Jane has no choice, no freedom, no access to the natural world. The sentence works on both literal and symbolic levels: Jane is trapped physically by the weather and socially by her dependence on the Reeds. The entire novel becomes a journey from this confinement towards freedom.',
    themes: ['Independence', 'Gothic'],
  },
  {
    quote: '"I resisted all the way: a new thing for me."',
    speaker: 'Jane (narration) -- Chapter 2',
    context: 'Jane is dragged to the red room by the servants after fighting John Reed.',
    analysis:
      'The brevity and matter-of-fact tone make this statement quietly devastating. "A new thing for me" reveals that Jane has, until this point, accepted her mistreatment passively. This is the moment she becomes a resister, and Bronte marks it with characteristic understatement. The colon creates a pause that gives weight to the revelation.',
    themes: ['Independence', 'Morality'],
  },
  {
    quote: '"If I join St John, I abandon half myself: if I go to India, I go to premature death."',
    speaker: 'Jane -- Chapter 34',
    context: "Jane weighs St John Rivers's proposal of a loveless missionary marriage.",
    analysis:
      'Jane frames St John\'s offer as a form of self-destruction. "Abandon half myself" means surrendering her emotional nature to a man who values only duty. Bronte draws a direct parallel with Rochester\'s earlier offer: both men ask Jane to sacrifice a vital part of her identity. Only a union that honours the whole self is acceptable.',
    themes: ['Independence', 'Religion', 'Love'],
  },
  {
    quote: '"I am a free human being with an independent will, which I now exert to leave you."',
    speaker: 'Jane -- Chapter 23',
    context:
      'Jane declares her intention to leave Thornfield when she believes Rochester will marry Blanche Ingram.',
    analysis:
      'The verb "exert" transforms freedom from an abstract principle into a concrete action. Jane does not merely claim independence -- she demonstrates it by choosing departure over comfortable dependence. Bronte shows that freedom is meaningless unless it is exercised, especially when exercising it is painful.',
    themes: ['Independence', 'Gender'],
  },
  {
    quote:
      '"He is not to them what he is to me... he is not of their kind. I believe he is of mine."',
    speaker: 'Jane (narration) -- Chapter 17',
    context:
      'Jane watches Rochester with the upper-class guests and recognises their fundamental kinship.',
    analysis:
      'Jane claims Rochester as a kindred spirit despite their vast social distance. "Their kind" refers to the aristocratic guests; "mine" claims a category defined by temperament and intellect rather than birth. Bronte challenges Victorian class hierarchy by suggesting that true affinity transcends social rank.',
    themes: ['Class', 'Love'],
  },
  {
    quote:
      '"A Christmas frost had come at midsummer; a white December storm had whirled over June."',
    speaker: 'Jane (narration) -- Chapter 26',
    context:
      'Jane describes her emotional state after the interrupted wedding and the revelation of Bertha Mason.',
    analysis:
      "The seasonal inversion uses pathetic fallacy to convey emotional devastation. Midsummer should be the height of warmth and fertility; instead, Jane's world has become a frozen wasteland. The imagery also suggests the unnaturalness of what has happened -- Rochester's deception has reversed the natural order, just as Bertha's concealment perverted the institution of marriage.",
    themes: ['Gothic', 'Love', 'Morality'],
  },
]

export default async function JaneEyreKeyQuotesPage() {
  const board = await getServerBoard()
  if (board && !['aqa', 'ocr'].includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Jane Eyre', url: 'https://theenglishhub.app/revision/texts/jane-eyre' },
          {
            name: 'Key Quotations',
            url: 'https://theenglishhub.app/revision/texts/jane-eyre/key-quotes',
          },
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Revision', href: '/revision' },
          { label: 'Set Texts', href: '/revision/texts' },
          { label: 'Jane Eyre', href: '/revision/texts/jane-eyre' },
          { label: 'Key Quotes' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/jane-eyre" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Jane Eyre
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              19th-Century Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Jane Eyre -- 25 Key Quotes
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            by Charlotte Bronte -- published 1847
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty-five essential quotations with detailed analysis, context, and theme links. All
            quotations are from the public domain text and may be freely reproduced.
          </p>
        </div>
      </section>

      {/* Quotes */}
      <div className="grid gap-4">
        {quotes.map((q, i) => (
          <Card key={i}>
            <CardContent className="space-y-3 p-5 sm:p-6">
              <div className="flex items-start gap-2">
                <Quote className="mt-1 size-4 shrink-0 text-violet-400" />
                <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
              </div>
              <p className="text-caption uppercase tracking-wide text-primary">{q.speaker}</p>
              <p className="text-body-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Context: </span>
                {q.context}
              </p>
              <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {q.themes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Jane Eyre by Charlotte Bronte (1847) is in the public domain. Quotations are reproduced
        freely as the text is no longer subject to copyright.
      </p>
    </div>
  )
}
