import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Quote } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Great Expectations Key Quotes | The English Hub',
    description:
      '25 essential quotations from Great Expectations by Charles Dickens with speaker, context and detailed analysis for AQA GCSE English Literature.',
  },
  title: 'Great Expectations Key Quotes',
  description:
    '25 essential quotations from Great Expectations by Charles Dickens with speaker, context and detailed analysis for AQA GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/great-expectations/key-quotes',
  },
}

type KeyQuote = {
  quote: string
  speaker: string
  chapter: string
  themes: string[]
  analysis: string
}

const KEY_QUOTES: KeyQuote[] = [
  {
    quote:
      '"My father\'s family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 1',
    themes: ['Identity'],
    analysis:
      'The novel\'s opening sentence is an act of self-naming that is also a self-diminution. Pip cannot fully articulate his own name, so he abbreviates himself. The passive "came to be called" suggests that identity happens to Pip rather than being chosen by him. Dickens signals from the first line that Pip\'s sense of self will be shaped by forces beyond his control.',
  },
  {
    quote:
      '"Hold your noise!" cried a terrible voice, as a man started up from among the graves at the side of the church porch. "Keep still, you little devil, or I\'ll cut your throat!"',
    speaker: 'Magwitch',
    chapter: 'Chapter 1',
    themes: ['Crime and Justice', 'Social Class'],
    analysis:
      'Magwitch erupts from "among the graves," associating him with death and the underworld. The violent threat establishes the power imbalance between adult and child, criminal and innocent. Yet Dickens gradually reveals Magwitch\'s own desperation, complicating our initial terror with sympathy. The convict\'s aggression is born of starvation and fear, not malice.',
  },
  {
    quote:
      '"He calls the knaves, Jacks, this boy! And what coarse hands he has! And what thick boots!"',
    speaker: 'Estella',
    chapter: 'Chapter 8',
    themes: ['Social Class', 'Identity'],
    analysis:
      'Estella reduces Pip to his class markers. The tricolon builds a case against him: language, hands, boots. Each detail is trivial in itself, but together they constitute a social death sentence. The difference between "knaves" and "Jacks" is meaningless, yet class power makes it devastating. Dickens shows that snobbery is taught - Estella has learned this contempt from Miss Havisham.',
  },
  {
    quote:
      '"I took the opportunity of being alone in the court-yard, to look at my coarse hands and my common boots. My opinion of those accessories was not favourable. They had never troubled me before, but they troubled me now, as vulgar appendages."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 8',
    themes: ['Social Class', 'Identity'],
    analysis:
      'Pip begins to see himself through Estella\'s eyes. The words "coarse," "common" and "vulgar" are not his own vocabulary - they are imported from the upper-class gaze. Dickens shows the exact moment class shame takes root: Pip\'s hands and boots have not changed, but his perception of them has. Self-hatred is externally imposed.',
  },
  {
    quote: '"It is a most miserable thing to feel ashamed of home."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 14',
    themes: ['Social Class', 'Loyalty', 'Identity'],
    analysis:
      'The adult narrator passes moral judgment on his younger self with devastating simplicity. No imagery, no elaboration - just a plain, honest verdict. "Miserable" carries both its modern meaning (unhappy) and its older sense (morally wretched). This is one of the novel\'s most important sentences: Dickens arguing, through Pip\'s hindsight, that class ambition poisons the capacity for love.',
  },
  {
    quote: '"I want to be a gentleman."',
    speaker: 'Pip',
    chapter: 'Chapter 17',
    themes: ['Ambition', 'Social Class'],
    analysis:
      'Pip\'s bare statement of ambition sounds simple but contains a devastating irony. His idea of a "gentleman" is entirely superficial - manners, money, social acceptance. Dickens will spend the rest of the novel dismantling this definition and replacing it with a moral one. The desire itself is not wrong, but Pip is pursuing the wrong kind of gentility.',
  },
  {
    quote: '"Do you want to be a gentleman, to spite her or to gain her over?"',
    speaker: 'Biddy',
    chapter: 'Chapter 17',
    themes: ['Ambition', 'Love', 'Identity'],
    analysis:
      'Biddy cuts to the heart of Pip\'s motivation with surgical precision. Her question exposes that Pip\'s ambition is not self-generated but Estella-driven - reactive rather than authentic. The alternatives she offers ("spite" or "gain over") are both forms of emotional manipulation. Biddy sees what Pip cannot: his desire for self-improvement is really a desire for someone else\'s approval.',
  },
  {
    quote:
      '"I walked away at a good pace... But the village was very peaceful and quiet, and the light mists were solemnly rising, as if to show me the world, and I had been so innocent and little there... that in a moment with a strong heave and sob I broke into tears."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 19',
    themes: ['Identity', 'Loyalty', 'Ambition'],
    analysis:
      'Pip\'s body rebels against his conscious decision. He tries to walk away briskly, performing confidence, but the landscape overwhelms him. The mists "rising as if to show me the world" suggest a revelation he is not ready for: that what he is leaving is more valuable than what he is going towards. Dickens uses the marshes as a symbol of Pip\'s authentic self - the self he is about to suppress.',
  },
  {
    quote:
      '"I wished Joe had been rather more genteelly brought up, and then I should have been so too."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 15',
    themes: ['Social Class', 'Loyalty'],
    analysis:
      'Pip wishes for a different upbringing - effectively wishing to be a different person. The conditional "should have been" reveals how deeply he has internalised the belief that identity is determined by class. Rather than changing himself, he wishes his guardian had been changed for him. Dickens shows class ideology distorting not just perception but imagination.',
  },
  {
    quote: '"Break their hearts, my pride and hope, break their hearts and have no mercy!"',
    speaker: 'Miss Havisham',
    chapter: 'Chapter 12',
    themes: ['Love', 'Identity'],
    analysis:
      'Miss Havisham\'s instruction to Estella reveals her as a manipulator who has weaponised a child. The words "pride and hope" are maternal vocabulary repurposed for revenge. She treats Estella not as a daughter but as a weapon - the thing she is "proud" of is Estella\'s capacity to destroy. Dickens shows how victimhood can generate cruelty: Miss Havisham was hurt, so she creates a tool to hurt others.',
  },
  {
    quote:
      "\"Pip, dear old chap, life is made of ever so many partings welded together, as I may say, and one man's a blacksmith, and one's a whitesmith, and one's a goldsmith, and one's a coppersmith. Diwisions among such must come, and must be met as they come.\"",
    speaker: 'Joe',
    chapter: 'Chapter 27',
    themes: ['Social Class', 'Loyalty', 'Identity'],
    analysis:
      'Joe uses the language of his trade to express a truth about social division. The metalwork metaphor ("partings welded together") turns a painful social reality into something crafted and purposeful. The list of smiths - blacksmith, whitesmith, goldsmith, coppersmith - acknowledges that different people work at different levels without assigning moral value to any. Joe accepts class division without bitterness, demonstrating the grace that Pip lacks.',
  },
  {
    quote: '"Ever the best of friends, ain\'t us, Pip?"',
    speaker: 'Joe',
    chapter: 'Multiple chapters',
    themes: ['Loyalty', 'Love'],
    analysis:
      "Joe's repeated question is both a statement of loyalty and a plea. The non-standard grammar (\"ain't us\") marks his class, but the sentiment - consistent, undemanding, forgiving - represents the novel's highest moral ideal. Every time Joe says this, the gap between his unconditional love and Pip's conditional loyalty widens, making the reader feel Pip's ingratitude more acutely.",
  },
  {
    quote: '"You must know that I have no heart - if that has anything to do with my memory."',
    speaker: 'Estella',
    chapter: 'Chapter 29',
    themes: ['Love', 'Identity'],
    analysis:
      'Estella diagnoses herself with clinical precision. The qualifier "if that has anything to do with my memory" adds uncertainty: she cannot be sure whether her inability to feel is a deficiency or a different form of being. She is simultaneously honest and unknowing - she can describe her condition but cannot feel its tragedy. Dickens makes the reader feel the horror Estella cannot.',
  },
  {
    quote:
      '"I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 29',
    themes: ['Love', 'Ambition'],
    analysis:
      'The anaphoric repetition of "against" makes Pip\'s love an act of wilful self-destruction. Each "against" names something healthy that his love opposes: reason, peace, hope, happiness. Dickens presents romantic obsession not as noble but as a form of self-harm. The listing structure creates a sense of accumulation - Pip is drowning in his own passion, and he knows it.',
  },
  {
    quote: '"Yes, Pip, dear boy, I\'ve made a gentleman on you! It\'s me wot has done it!"',
    speaker: 'Magwitch',
    chapter: 'Chapter 39',
    themes: ['Social Class', 'Identity', 'Ambition'],
    analysis:
      'The revelation scene\'s crucial line. Magwitch\'s non-standard grammar ("wot," "on you") marks him as lower-class, yet he is the creator of Pip\'s gentleman identity. The verb "made" reduces Pip to a manufactured product. The irony is devastating: the man who cannot speak like a gentleman has funded one. Dickens forces the reader to confront the arbitrary nature of class.',
  },
  {
    quote:
      "\"I've come to the old country fur to see my gentleman spend his money like a gentleman. That'll be my pleasure. My pleasure 'ull be fur to see him do it.\"",
    speaker: 'Magwitch',
    chapter: 'Chapter 39',
    themes: ['Social Class', 'Loyalty'],
    analysis:
      'The repetition of "gentleman" becomes almost satirical - the word has been emptied of meaning. Magwitch\'s possessive pride ("my gentleman") reveals that he sees Pip as a living trophy, a proof of his own worth. Dickens makes us see that Magwitch\'s devotion, though genuine, is also a form of objectification. Pip is not loved for who he is but for what he represents.',
  },
  {
    quote:
      '"I was always treated as if I had insisted on being born in opposition to the dictates of reason, religion, and morality."',
    speaker: 'Magwitch',
    chapter: 'Chapter 42',
    themes: ['Crime and Justice', 'Social Class'],
    analysis:
      'Magwitch mimics the legalistic language of the courts that condemned him, quoting the system back at itself with devastating irony. The suggestion that he "insisted on being born" treats his very existence as a crime. Dickens exposes the Victorian assumption that poverty is a moral failing rather than a social condition. The elaborate phrasing contrasts with Magwitch\'s usual rough speech.',
  },
  {
    quote: '"Take nothing on its looks; take everything on evidence. There\'s no better rule."',
    speaker: 'Jaggers',
    chapter: 'Chapter 40',
    themes: ['Crime and Justice', 'Identity'],
    analysis:
      "Jaggers's philosophy sounds rational and fair, but Dickens shows that the legal system it operates within does the opposite - it takes everything on looks. Compeyson gets a lighter sentence because he looks like a gentleman. Jaggers knows this, which is why his cynicism is so complete. His handwashing is the physical expression of this knowledge: he cannot make the system clean.",
  },
  {
    quote:
      '"The office is one thing, and private life is another. When I go into the office, I leave the Castle behind me, and when I come into the Castle, I leave the office behind me."',
    speaker: 'Wemmick',
    chapter: 'Chapter 25',
    themes: ['Identity'],
    analysis:
      "Wemmick's rigid separation of his public and private selves is played for comedy but contains a serious critique. Victorian capitalism demanded that workers suppress their humanity at work. Wemmick's castle - complete with drawbridge and cannon - is his resistance: a private space where he can be fully human. Dickens suggests that modern life forces people to become machines during working hours.",
  },
  {
    quote: '"What have I done! What have I done!"',
    speaker: 'Miss Havisham',
    chapter: 'Chapter 49',
    themes: ['Love', 'Identity'],
    analysis:
      "Miss Havisham's moment of agonised self-recognition. The repetition conveys not just horror but the shattering of her entire self-image: she has always seen herself as the victim, never as the perpetrator. Her realisation that she has destroyed Estella's capacity for love parallels Pip's discovery that his expectations are built on illusion. Both must face the consequences of their self-deception.",
  },
  {
    quote:
      '"Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but - I hope - into a better shape."',
    speaker: 'Estella',
    chapter: 'Chapter 59',
    themes: ['Love', 'Identity', 'Ambition'],
    analysis:
      'The metalwork metaphor ("bent and broken... into a better shape") connects Estella to Joe\'s world of forge and anvil. She has been remade through suffering, not social climbing. The hesitation "I hope" is crucial - she is not certain of her own reformation. Dickens avoids a triumphant resolution: real change is tentative, earned through pain, and never guaranteed.',
  },
  {
    quote:
      '"I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her."',
    speaker: 'Pip (narrator)',
    chapter: 'Chapter 59',
    themes: ['Love', 'Identity'],
    analysis:
      'The novel\'s final sentence is deliberately ambiguous. "No shadow of another parting" could mean they will never part, or it could mean Pip cannot yet see the parting ahead. The mist motif connects back to Chapter 19 - the same image of revelation, but now evening rather than morning. The "ruined place" is both Satis House and the ruins of their former selves. Dickens leaves the reader to decide.',
  },
  {
    quote: '"Which I meantersay, Pip, as I would in preference have carried you there."',
    speaker: 'Joe',
    chapter: 'Chapter 57',
    themes: ['Loyalty', 'Love'],
    analysis:
      'Joe\'s quiet declaration of love after nursing Pip through his fever. The non-standard "meantersay" is pure Joe - humble, inarticulate, and devastatingly sincere. He would have physically carried Pip, like a parent carrying a child. Dickens distils Joe\'s entire character into one sentence: steadfast, protective, asking nothing in return.',
  },
  {
    quote: '"I am not angry, but I am hurt."',
    speaker: 'Biddy',
    chapter: 'Chapter 19',
    themes: ['Loyalty', 'Love'],
    analysis:
      'Biddy responds to Pip\'s condescension with quiet dignity. The distinction between "angry" and "hurt" is emotionally precise: anger would give Pip an excuse to dismiss her, but hurt appeals to his conscience. Dickens uses Biddy\'s emotional intelligence to shame Pip - and the reader - more effectively than any outburst could.',
  },
  {
    quote:
      "\"If I ain't a gentleman, nor yet ain't got no learning, I'll make a better gentleman nor ever I was!\"",
    speaker: 'Magwitch',
    chapter: 'Chapter 39',
    themes: ['Social Class', 'Ambition', 'Loyalty'],
    analysis:
      'The double negative ("ain\'t... nor yet ain\'t") and non-standard comparative ("nor ever I was") mark Magwitch as uneducated, yet the sentiment is noble: he will create through Pip what society denied him. The word "better" is key - Magwitch believes that a gentleman is something you can manufacture with money. Dickens uses this to expose and then demolish the Victorian myth that class can be bought.',
  },
]

export default async function GreatExpectationsKeyQuotesPage() {
  const board = await getServerBoard()
  if (board && board !== 'aqa') {
    redirect('/revision/texts')
  }

  const analysisLabel = await t('rev.texts.common.analysis')

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/great-expectations" />}
          >
            <ArrowLeft className="size-3.5" />
            {(await t('rev.texts.common.back_to_text')).replace('{text}', 'Great Expectations')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              {await t('rev.texts2.common.c19_novel')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {await t('rev.texts.common.key_quotations')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Great Expectations - Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {await t('rev.texts2.ge.key_quotes.intro')}
          </p>
        </div>
      </section>

      {/* Quotes */}
      <div className="grid gap-4">
        {KEY_QUOTES.map((q, i) => (
          <Card key={i}>
            <CardContent className="space-y-3 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-400">
                  {i + 1}
                </div>
                <div className="space-y-3 min-w-0">
                  <p className="text-body-md font-medium italic text-foreground">{q.quote}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="text-caption font-medium uppercase tracking-wide text-primary">
                      {q.speaker}
                    </p>
                    <p className="text-caption text-muted-foreground">{q.chapter}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {q.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                    <p className="flex items-center gap-1.5 mb-1.5 text-xs font-medium uppercase tracking-wide text-foreground">
                      <Quote className="size-3 text-violet-400" />
                      {analysisLabel}
                    </p>
                    <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Great Expectations</em>
        {await t('rev.texts2.common.public_domain_dickens_after')}
      </p>
    </div>
  )
}
