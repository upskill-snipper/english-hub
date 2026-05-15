import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Lightbulb, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  openGraph: {
    title: 'Great Expectations Themes | The English Hub',
    description:
      'Detailed analysis of key themes in Great Expectations by Charles Dickens: Social Class, Ambition, Justice, Love, Identity and Loyalty.',
  },
  title: 'Great Expectations Themes | The English Hub',
  description:
    'Detailed analysis of key themes in Great Expectations by Charles Dickens: Social Class, Ambition, Justice, Love, Identity and Loyalty.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/great-expectations/themes',
  },
}

type ThemeAnalysis = {
  title: string
  colour: string
  overview: string
  howDickensPresentsIt: string[]
  keyMoments: string[]
  linkedQuotes: { text: string; who: string; link: string }[]
  examTip: string
}

const THEMES: ThemeAnalysis[] = [
  {
    title: 'Social Class and Snobbery',
    colour: 'text-clay-600',
    overview:
      "Great Expectations is Dickens's most sustained attack on the Victorian class system. The novel systematically dismantles the idea that social class reflects moral worth. Pip's journey from blacksmith's boy to London \"gentleman\" and back exposes the hollowness of class distinctions: his money comes from a convict, his manners are a performance, and his happiest moments are at the forge, not in London drawing rooms. Dickens argues that the true measure of a person is their conduct, not their birth or bank balance.",
    howDickensPresentsIt: [
      'Pip\'s shame about his "coarse hands" and "thick boots" after visiting Satis House shows how class consciousness is externally imposed, not innate.',
      'Joe\'s discomfort in London — calling Pip "sir" and unable to manage his hat — reveals how social environments are designed to exclude.',
      "Magwitch's revelation demolishes the fantasy of genteel patronage: Pip's gentleman status is built on a convict's money, proving class is a construction.",
      'Compeyson receives a lighter sentence than Magwitch for the same crime because he "looks like a gentleman" — Dickens shows the justice system is rigged by class.',
      'Herbert Pocket, born genteel but penniless, is a genuine gentleman in manner, while Bentley Drummle, rich and titled, is a brute — birth guarantees nothing.',
    ],
    linkedQuotes: [
      {
        text: '"He calls the knaves, Jacks, this boy!"',
        who: 'Estella',
        link: 'Estella reduces Pip to his class markers. The difference between "knaves" and "Jacks" is trivial, but social power makes it devastating.',
      },
      {
        text: '"It is a most miserable thing to feel ashamed of home."',
        who: 'Pip (narrator)',
        link: 'The adult Pip recognises that class shame poisoned his most important relationships.',
      },
      {
        text: "\"If I ain't a gentleman, nor yet ain't got no learning, I'll make a better gentleman nor ever I was!\"",
        who: 'Magwitch',
        link: 'Magwitch\'s grammar betrays his class, but his generosity exceeds that of any "real" gentleman in the novel.',
      },
    ],
    keyMoments: [
      "Pip's first visit to Satis House (Ch. 8) — the origin of his class shame.",
      "Joe's painful visit to Pip in London (Ch. 27) — class has destroyed their relationship.",
      "Magwitch's revelation (Ch. 39) — the entire edifice of Pip's gentility collapses.",
      'Compeyson vs. Magwitch at trial — the justice system rewards appearances over character.',
    ],
    examTip:
      "This is the novel's dominant theme and appears in virtually every exam question on Great Expectations. Always argue that Dickens shows class to be a performance, not an identity. Use Joe and Magwitch as examples of moral worth existing outside the genteel class, and Drummle and Compeyson as examples of wickedness within it.",
  },
  {
    title: 'Ambition and Self-Improvement',
    colour: 'text-emerald-400',
    overview:
      'Dickens presents ambition as a double-edged force. Pip\'s desire to better himself is understandable — he lives in a society that rewards wealth and punishes poverty — but it leads him to reject the people who love him and pursue a fantasy built on false assumptions. The novel distinguishes between genuine self-improvement (moral growth, honest work, compassion) and the shallow kind (acquiring money, manners and social status). Pip must lose his "great expectations" before he can achieve genuine self-improvement.',
    howDickensPresentsIt: [
      "Pip's expectations are presented as a kind of corruption: the more money he receives, the worse he behaves.",
      'Joe represents contentment without ambition — he is happy with his forge and never wishes to be other than what he is.',
      "Herbert Pocket's genuine industriousness contrasts with Pip's idle consumption of Magwitch's money.",
      'Biddy\'s question — "Do you want to be a gentleman, to spite her or to gain her over?" — exposes Pip\'s ambition as reactive, not authentic.',
      "Pip's real self-improvement begins only after his expectations are destroyed: he works honestly abroad and learns to value people over status.",
    ],
    linkedQuotes: [
      {
        text: '"I want to be a gentleman."',
        who: 'Pip',
        link: 'Pip\'s statement of ambition sounds simple, but Dickens shows that his definition of "gentleman" is entirely superficial.',
      },
      {
        text: '"I have been bent and broken, but — I hope — into a better shape."',
        who: 'Estella',
        link: 'Genuine self-improvement comes through suffering and self-knowledge, not money.',
      },
    ],
    keyMoments: [
      "Pip's dissatisfaction after Satis House (Ch. 8-10) — ambition is planted by class shame.",
      "Pip's wasteful life in London (Ch. 21-34) — ambition without purpose leads to moral decline.",
      "Pip's secret kindness to Herbert (Ch. 37) — the one moment where his money does genuine good.",
      "Pip's years of honest work abroad (Ch. 58-59) — real self-improvement, earned not given.",
    ],
    examTip:
      "Distinguish carefully between ambition and self-improvement. Dickens does not condemn the desire to improve oneself — he condemns the Victorian assumption that improvement means climbing the social ladder. Pip's real growth is moral, not social. Always connect this theme to the Victorian context: the self-help ideology of Samuel Smiles versus Dickens's more compassionate vision.",
  },
  {
    title: 'Crime, Guilt and Justice',
    colour: 'text-red-400',
    overview:
      'The novel is saturated with crime, guilt and the machinery of justice. Magwitch is a convict, Compeyson is a swindler, Molly is a murderess, Orlick is a would-be killer, and even Pip feels like a criminal when he steals food for Magwitch as a child. Dickens argues that the criminal justice system punishes poverty rather than wickedness: Magwitch receives a harsher sentence than Compeyson because he looks rougher, not because he is more culpable. Guilt in the novel is not always proportional to crime — Pip carries enormous guilt for small transgressions, while truly dangerous characters feel none.',
    howDickensPresentsIt: [
      "Pip's childhood guilt about stealing food for Magwitch is wildly disproportionate — Dickens shows how the innocent are made to feel criminal by oppressive authority.",
      "Magwitch's life story reveals a system that creates criminals through poverty and then punishes them for existing.",
      'Jaggers\'s handwashing symbolises the impossibility of remaining "clean" within a corrupt legal system.',
      "Compeyson's lighter sentence demonstrates that justice is administered according to class, not evidence.",
      'Newgate Prison shadows the novel: its taint spreads to Pip when he discovers his money comes from a convicted felon.',
    ],
    linkedQuotes: [
      {
        text: '"I was always treated as if I had insisted on being born in opposition to the dictates of reason, religion, and morality."',
        who: 'Magwitch',
        link: 'Magwitch was criminalised from birth — society treated his very existence as an offence.',
      },
      {
        text: '"Take nothing on its looks; take everything on evidence."',
        who: 'Jaggers',
        link: "Jaggers's rational philosophy exposes the gap between appearance and truth in the justice system.",
      },
    ],
    keyMoments: [
      'Pip steals food for Magwitch (Ch. 2-3) — childhood guilt that echoes throughout the novel.',
      "Magwitch's account of his trial with Compeyson (Ch. 42) — class determines legal outcomes.",
      'Pip visits Newgate with Wemmick (Ch. 32) — the prison world bleeds into polite society.',
      "Magwitch's final trial and death (Ch. 56) — the system destroys him despite his moral reformation.",
    ],
    examTip:
      "Dickens connects crime to poverty and class, not to individual wickedness. In an exam, argue that the novel presents the justice system as fundamentally unjust. Magwitch is punished for being poor; Compeyson is protected by looking respectable. Pip's guilt is another form of social control — he is made to feel criminal for showing compassion.",
  },
  {
    title: 'Love and Relationships',
    colour: 'text-pink-400',
    overview:
      "Love in Great Expectations takes many forms — romantic obsession, parental devotion, friendship, manipulation — and Dickens examines each with unflinching honesty. Pip's love for Estella is presented as a kind of sickness: he knows she cannot love him back, yet he cannot stop himself. Miss Havisham's love has curdled into a desire for revenge. Magwitch's love for Pip is genuine but possessive. The healthiest relationships in the novel — Joe and Pip, Joe and Biddy, Pip and Herbert — are based on loyalty and mutual respect rather than romantic passion.",
    howDickensPresentsIt: [
      'Pip\'s love for Estella is irrational and self-destructive — he pursues her despite her explicit warnings that she has "no heart."',
      "Miss Havisham's jilting has transformed love into a weapon: she raises Estella specifically to destroy men emotionally.",
      "Joe's love for Pip is unconditional — he never reproaches Pip for his snobbery and nurses him without expecting gratitude.",
      "Magwitch's love for Pip is devoted but objectifying: he treats Pip as a proof of his own worth rather than as an independent person.",
      "Herbert and Clara's quiet, practical love contrasts with Pip's agonised obsession — Dickens suggests that real love is steady, not dramatic.",
    ],
    linkedQuotes: [
      {
        text: '"I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be."',
        who: 'Pip',
        link: "Pip's love for Estella is defined entirely by what it opposes — it is an act of will against his own wellbeing.",
      },
      {
        text: '"You must know that I have no heart — if that has anything to do with my memory."',
        who: 'Estella',
        link: "Estella's self-awareness is itself a tragedy: she knows she has been emotionally destroyed but cannot repair herself.",
      },
      {
        text: '"Ever the best of friends, ain\'t us, Pip?"',
        who: 'Joe',
        link: "Joe's simple declaration of friendship is the novel's purest expression of love — consistent, undemanding and resilient.",
      },
    ],
    keyMoments: [
      "Pip's first sight of Estella at Satis House (Ch. 8) — love as an act of self-destruction.",
      'Miss Havisham\'s cry of "What have I done!" (Ch. 49) — the moment she sees what her revenge has cost.',
      'Joe nurses Pip back to health (Ch. 57) — unconditional love expressed through action, not words.',
      'The final meeting with Estella (Ch. 59) — love tempered by suffering and maturity.',
    ],
    examTip:
      "Distinguish between different types of love in the novel. Pip's romantic love is obsessive and class-driven; Joe's love is selfless and constant; Miss Havisham's love has been corrupted into cruelty. Dickens values loyalty and kindness over passion. Always consider how love intersects with class — Pip loves Estella partly because she represents the world he wants to enter.",
  },
  {
    title: 'Identity and Self-Knowledge',
    colour: 'text-blue-400',
    overview:
      "Pip's search for identity drives the entire novel. He begins uncertain about who he is — an orphan who knows his parents only from their gravestones — and spends the novel trying on different identities: forge boy, gentleman, Estella's suitor, Magwitch's creation. Each identity is partly false, and Pip's moral journey is the process of stripping away pretence to discover his authentic self. Dickens suggests that self-knowledge is painful but necessary, and that it comes through suffering rather than success.",
    howDickensPresentsIt: [
      'Pip\'s name itself is unstable: he is "Philip Pirrip" but can only manage "Pip" — even his identity is a childish abbreviation.',
      "Wemmick's split personality — office self versus castle self — shows how Victorian society forces people into false identities.",
      'Estella does not know her own parentage until late in the novel, and the revelation connects her to the criminal class she was raised to despise.',
      'Magwitch tries to create a new identity for Pip ("my gentleman") just as he created a new identity for himself as "Provis."',
      'The retrospective first-person narration is itself an act of identity construction: the adult Pip shapes the story of who he was and who he has become.',
    ],
    linkedQuotes: [
      {
        text: '"I wished Joe had been rather more genteelly brought up, and then I should have been so too."',
        who: 'Pip',
        link: 'Pip tries to disown his actual identity by wishing for a different upbringing — he wants to be someone else entirely.',
      },
      {
        text: '"The office is one thing, and private life is another."',
        who: 'Wemmick',
        link: "Wemmick's rigid separation of identities is comic but also a commentary on what modern life demands of individuals.",
      },
    ],
    keyMoments: [
      "The opening at the graves (Ch. 1) — Pip tries to construct his parents' identities from tombstone letters.",
      'Pip adopts the identity of "gentleman" in London (Ch. 20-34) — a performance that gradually hollows him out.',
      "Magwitch's revelation (Ch. 39) — Pip's entire self-image collapses.",
      "Pip's return to the forge (Ch. 58) — he attempts to recover his original, authentic identity.",
    ],
    examTip:
      'Identity in Great Expectations is always constructed, never given. In an exam, argue that Dickens shows identity to be shaped by social forces — class, money, upbringing — rather than being innate. Pip must learn to define himself by his actions (moral identity) rather than by his social position (class identity). The first-person narration itself is an act of identity-building.',
  },
  {
    title: 'Loyalty and Gratitude',
    colour: 'text-violet-400',
    overview:
      "Loyalty is the novel's most positive value, and ingratitude is its most damning vice. Pip's greatest moral failure is his disloyalty to Joe and Biddy — the people who loved him when he had nothing. Magwitch's entire life is shaped by gratitude to the child who brought him food on the marshes. Joe's loyalty to Pip survives every insult. Dickens argues that loyalty is the foundation of all genuine human connection, and that betraying it — as Pip does — brings inevitable suffering.",
    howDickensPresentsIt: [
      "Joe's unwavering loyalty to Pip is the novel's moral bedrock: he never reproaches Pip, never stops loving him, and comes to nurse him when he is ill.",
      "Magwitch's gratitude is so powerful that it reshapes his entire life — every guinea he earns goes to Pip.",
      "Pip's neglect of Joe is presented as his central sin: the adult narrator is most self-critical when describing his treatment of Joe.",
      "Herbert's loyalty during the Magwitch crisis — helping to hide a wanted criminal — proves his friendship is not conditional on comfort.",
      "Miss Havisham's betrayal by Compeyson on her wedding day poisons her capacity for loyalty and turns her into a figure who demands devotion (from Estella) while being incapable of giving it.",
    ],
    linkedQuotes: [
      {
        text: '"Ever the best of friends, ain\'t us, Pip?"',
        who: 'Joe',
        link: "Joe's repeated question is both a statement of loyalty and a plea — he knows Pip is drifting away but refuses to abandon him.",
      },
      {
        text: '"Dear boy and Pip\'s comrade. You\'re a noble Handel."',
        who: 'Magwitch, speaking of Herbert',
        link: 'Even Magwitch, who sees the world through the lens of self-interest, recognises Herbert\'s loyal friendship as "noble."',
      },
    ],
    keyMoments: [
      'Young Pip brings food to Magwitch (Ch. 3) — the act of compassion that generates a lifetime of gratitude.',
      'Joe visits Pip in London and is made uncomfortable (Ch. 27) — loyalty tested by class division.',
      "Pip secretly funds Herbert's partnership (Ch. 37) — Pip's one truly loyal act during his London years.",
      'Joe nurses Pip and pays his debts (Ch. 57) — loyalty expressed through selfless action.',
    ],
    examTip:
      "Loyalty and gratitude are closely linked to the theme of class. Dickens shows that the lower-class characters (Joe, Magwitch, Biddy) are the most loyal, while the genteel characters (Miss Havisham, Compeyson, Drummle) are the most treacherous. Pip's moral education is essentially a journey from ingratitude back to gratitude. In an exam, always connect this theme to specific acts of loyalty and betrayal.",
  },
]

export default async function GreatExpectationsThemesPage() {
  const board = await getServerBoard()
  if (board && board !== 'aqa') {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/great-expectations" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Great Expectations
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              19th-Century Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Key Themes
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Great Expectations — Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Six major themes analysed in detail, with linked quotations, key moments and
            exam-focused guidance for AQA English Literature.
          </p>
        </div>
      </section>

      {/* Theme Cards */}
      <div className="space-y-8">
        {THEMES.map((theme) => (
          <Card key={theme.title} className="overflow-hidden">
            <CardHeader className="border-b border-border/40 bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
                  <Lightbulb className={`size-5 ${theme.colour}`} />
                </div>
                <CardTitle className="text-heading-lg font-heading">{theme.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6 sm:p-8">
              {/* Overview */}
              <p className="text-body-sm text-muted-foreground">{theme.overview}</p>

              {/* How Dickens presents it */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  How Dickens presents this theme
                </h3>
                <ul className="space-y-2 text-body-sm text-muted-foreground">
                  {theme.howDickensPresentsIt.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Linked Quotes */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Quote className="size-4 text-violet-400" />
                  Linked quotations
                </h3>
                {theme.linkedQuotes.map((q, i) => (
                  <div key={i} className="rounded-xl border border-border/60 bg-muted/20 p-4">
                    <p className="mb-1 text-body-sm font-medium italic text-foreground">{q.text}</p>
                    <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-primary">
                      {q.who}
                    </p>
                    <p className="text-xs text-muted-foreground">{q.link}</p>
                  </div>
                ))}
              </div>

              {/* Key Moments */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Key moments</h3>
                <ul className="space-y-1.5 text-body-sm text-muted-foreground">
                  {theme.keyMoments.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exam Tip */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">AQA exam tip</h3>
                <p className="text-body-sm text-muted-foreground">{theme.examTip}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Great Expectations by Charles Dickens (1861) is in the public domain. Quotations are
        reproduced freely as the text is no longer subject to copyright.
      </p>
    </div>
  )
}
