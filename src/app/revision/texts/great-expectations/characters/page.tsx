import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  openGraph: {
    title: 'Great Expectations Characters | The English Hub',
    description:
      'In-depth character analysis for Great Expectations by Charles Dickens: Pip, Estella, Miss Havisham, Magwitch, Joe, Herbert, Jaggers, Wemmick and Biddy.',
  },
  title: 'Great Expectations Characters | The English Hub',
  description:
    'In-depth character analysis for Great Expectations by Charles Dickens: Pip, Estella, Miss Havisham, Magwitch, Joe, Herbert, Jaggers, Wemmick and Biddy.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/great-expectations/characters',
  },
}

type CharacterProfile = {
  name: string
  role: string
  overview: string
  development: string
  keyQuotes: { text: string; context: string }[]
  examFocus: string
}

const CHARACTERS: CharacterProfile[] = [
  {
    name: 'Pip (Philip Pirrip)',
    role: 'Protagonist and narrator',
    overview:
      'Pip is the novel\'s first-person narrator, telling his story retrospectively as an adult looking back on the mistakes and moral lessons of his youth. He begins as an orphan raised "by hand" by his harsh sister at the Kent forge, a sensitive and imaginative child who is essentially good but deeply impressionable. His visit to Satis House plants a corrosive dissatisfaction with his own class, and when he receives his "great expectations" he assumes they come from Miss Havisham and that he is destined for Estella. In London he becomes a spendthrift snob who neglects Joe and Biddy, the people who genuinely love him.',
    development:
      "Pip's moral education is the spine of the novel. His arc moves from innocence through corruption to hard-won self-knowledge. The revelation that Magwitch — not Miss Havisham — is his benefactor forces him to confront his own snobbery: he has valued people according to class rather than character. His gradual acceptance of Magwitch, his return to the forge to ask Joe's forgiveness, and his years of honest work abroad represent a genuine moral reformation. Dickens uses Pip to argue that true gentility lies in conduct, not in birth or wealth. The adult narrator's ironic, self-critical voice ensures the reader always sees more than the younger Pip can.",
    keyQuotes: [
      {
        text: '"I took the opportunity of being alone in the court-yard, to look at my coarse hands and my common boots. My opinion of those accessories was not favourable. They had never troubled me before, but they troubled me now, as vulgar appendages."',
        context:
          "After his first visit to Satis House — Pip begins to see himself through Estella's eyes and internalises class shame.",
      },
      {
        text: '"It is a most miserable thing to feel ashamed of home."',
        context:
          "Pip's retrospective honesty: the adult narrator judges his younger self, showing that self-awareness is the first step to moral recovery.",
      },
    ],
    examFocus:
      'Pip is the lens through which Dickens explores every major theme. In an exam, focus on the gap between what young Pip believes and what the adult narrator understands. Track how his definition of "gentleman" changes from social status to moral worth. Always connect his character to Dickens\'s wider critique of the Victorian class system.',
  },
  {
    name: 'Estella',
    role: "Miss Havisham's adopted daughter; Pip's love interest",
    overview:
      'Estella is raised by Miss Havisham as an instrument of revenge against men. She is taught to be beautiful, proud and emotionally cold — to attract men and then break their hearts. She is aware of her own conditioning, telling Pip repeatedly that she has "no heart" and warning him not to love her. She is the biological daughter of Magwitch and Molly (Jaggers\'s housekeeper), a fact that further demolishes the novel\'s class boundaries: the girl raised as a lady is the child of a convict and a murderess.',
    development:
      'Estella\'s arc is one of the novel\'s most painful. She marries the brutal Bentley Drummle, not from love but because she literally cannot feel love — Miss Havisham has removed that capacity. Her marriage is unhappy and Drummle dies. In the revised ending, she tells Pip that "suffering has been stronger than all other teaching," suggesting that pain has restored the emotional capacity Miss Havisham destroyed. Dickens uses Estella to argue that emotional cruelty is a form of child abuse: she is both weapon and victim.',
    keyQuotes: [
      {
        text: '"You must know that I have no heart — if that has anything to do with my memory."',
        context:
          "Estella's self-awareness is itself tragic: she knows she has been damaged but cannot undo the damage.",
      },
      {
        text: '"Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape."',
        context:
          "The revised ending — Estella acknowledges her transformation through pain, mirroring Pip's own moral education.",
      },
    ],
    examFocus:
      'Focus on Estella as both victim and instrument. Dickens uses her to explore whether people can overcome their upbringing. Her connection to Magwitch is crucial for the theme of class: the "lady" and the "gentleman" are both products of a convict\'s influence. Consider whether the revised ending gives Estella genuine agency or simply rewards Pip.',
  },
  {
    name: 'Miss Havisham',
    role: 'Wealthy recluse of Satis House',
    overview:
      "Miss Havisham was jilted on her wedding day by the swindler Compeyson and has never recovered. She sits in her decaying bridal dress, surrounded by the rotting remains of her wedding feast, all clocks stopped at twenty minutes to nine. She has withdrawn from the world and devoted her life to a single purpose: raising Estella to break men's hearts as hers was broken. She is one of Dickens's great Gothic creations — simultaneously terrifying, pitiable and morally complex.",
    development:
      'Miss Havisham\'s arc is one of belated recognition. She encourages Pip\'s belief that she is his benefactor because it serves her purposes, but she eventually realises the monstrous consequences of her revenge project. When she sees that Estella cannot love even her, she is devastated: "What have I done! What have I done!" Her attempt to help Pip financially and her desperate plea for forgiveness come too late — she catches fire from the hearth and dies from her injuries. Dickens uses her death by fire as both literal consequence and symbolic justice: the woman consumed by bitterness is literally consumed by flames.',
    keyQuotes: [
      {
        text: '"Break their hearts, my pride and hope, break their hearts and have no mercy!"',
        context:
          "Miss Havisham's instruction to Estella reveals her as a manipulator who has weaponised a child.",
      },
      {
        text: '"What have I done! What have I done!"',
        context:
          "Her moment of agonised self-recognition when she realises she has destroyed Estella's capacity for love.",
      },
    ],
    examFocus:
      'Miss Havisham is central to themes of time, revenge, and emotional manipulation. In an exam, explore how Dickens uses the Gothic imagery of Satis House to externalise her psychological state. Consider whether her late repentance is genuine redemption or too little, too late. Compare her with Magwitch as an alternative "creator" of Pip\'s expectations.',
  },
  {
    name: 'Abel Magwitch (Provis)',
    role: "Transported convict; Pip's true benefactor",
    overview:
      'Magwitch first appears as the terrifying convict in the graveyard who threatens to cut Pip\'s throat. He was transported to Australia for his crimes, made a fortune as a sheep farmer, and secretly channelled his wealth through the lawyer Jaggers to transform Pip into a gentleman. His motive is a mixture of gratitude, vicarious ambition, and defiance of the class system that condemned him. He returns to England illegally — a capital offence — because he wants to see the gentleman he has "made."',
    development:
      "Magwitch's return forces Pip to confront the central hypocrisy of his life: he has been happy to spend a convict's money while despising convicts. Pip's initial revulsion gradually gives way to genuine affection and loyalty as he comes to know Magwitch as a person rather than a class category. Magwitch's trial, imprisonment, and death are deeply moving: he dies holding Pip's hand, having been told that his daughter Estella is alive and that she is \"a lady and very beautiful.\" Dickens uses Magwitch to argue that the criminal justice system punishes poverty, not wickedness, and that true generosity can exist in the most unlikely places.",
    keyQuotes: [
      {
        text: '"Yes, Pip, dear boy, I\'ve made a gentleman on you! It\'s me wot has done it!"',
        context:
          "The revelation scene — Magwitch's pride and non-standard grammar expose the arbitrary nature of class distinctions.",
      },
      {
        text: "\"I've come to the old country fur to see my gentleman spend his money like a gentleman. That'll be my pleasure. My pleasure 'ull be fur to see him do it.\"",
        context:
          'Magwitch treats Pip as a living trophy, revealing both his devotion and the problematic nature of his project.',
      },
    ],
    examFocus:
      'Magwitch is essential for the themes of class, justice and loyalty. In an exam, explore how Dickens uses Magwitch to dismantle the idea that gentility is innate. His dialect and manners are "low," but his moral qualities — gratitude, devotion, sacrifice — are noble. Compare his genuine generosity with Miss Havisham\'s manipulative patronage. Consider how Pip\'s changing attitude to Magwitch tracks his own moral growth.',
  },
  {
    name: 'Joe Gargery',
    role: "Blacksmith; Pip's brother-in-law and surrogate father",
    overview:
      "Joe is the moral centre of the novel — a man of unwavering kindness, loyalty and decency who is entirely without ambition or pretension. He marries Pip's sister and becomes the only source of warmth and love in Pip's childhood. He is physically strong but emotionally gentle, illiterate but wise, poor but generous. His simplicity is not stupidity: he understands the social gulf that Pip's expectations will create between them and accepts it with dignity rather than resentment.",
    development:
      "Joe does not change because he does not need to — he represents the moral standard against which Pip's corruption is measured. When Pip falls dangerously ill in London, it is Joe who nurses him back to health, quietly paying off his debts and then slipping away before Pip can feel embarrassed by his presence. His marriage to Biddy after Mrs Joe's death confirms his goodness. Joe's constancy is Dickens's rebuke to the entire class system: the best man in the novel is a barely literate blacksmith who never seeks to be anything other than what he is.",
    keyQuotes: [
      {
        text: "\"Pip, dear old chap, life is made of ever so many partings welded together, as I may say, and one man's a blacksmith, and one's a whitesmith, and one's a goldsmith, and one's a coppersmith. Diwisions among such must come, and must be met as they come.\"",
        context:
          'Joe uses the language of his trade to express a profound truth about social division, accepting it without bitterness.',
      },
      {
        text: '"Which I meantersay, Pip, as I would in preference have carried you there."',
        context:
          "After nursing Pip back to health, Joe's quiet devotion — he would have carried Pip bodily — demonstrates love without conditions.",
      },
    ],
    examFocus:
      'Joe is Dickens\'s ideal: a man whose worth has nothing to do with money, education or social position. In an exam, explore how Joe functions as a moral benchmark. His visits to London, where he is visibly uncomfortable and calls Pip "sir," are painfully revealing of how class separates people who love each other. His forgiveness of Pip is unconditional, modelling the kind of generosity Pip must learn.',
  },
  {
    name: 'Herbert Pocket',
    role: "Pip's best friend and companion in London",
    overview:
      'Herbert is the son of Matthew Pocket, a relative of Miss Havisham\'s, and first meets Pip as a boy at Satis House, where they have a comical fight. In London, Herbert becomes Pip\'s roommate and closest friend. He is cheerful, optimistic, and genuinely kind, though as financially reckless as Pip. He nicknames Pip "Handel" and gently teaches him table manners without making him feel ashamed — a model of true gentility.',
    development:
      "Herbert represents what a \"gentleman\" should actually be: considerate, loyal and industrious. While Pip wastes his allowance, Herbert dreams of becoming a merchant and eventually succeeds through honest work. He helps Pip hide and protect Magwitch, risking his own safety out of friendship. Pip's secret arrangement to buy Herbert a partnership in Clarriker's business is one of Pip's few genuinely selfless acts during his London years and foreshadows his moral recovery. Herbert's steady goodness provides a counterpoint to Pip's instability.",
    keyQuotes: [
      {
        text: '"Handel, my good fellow... I want to say something to you. You look rather pale."',
        context:
          "Herbert's gentle concern for Pip after the revelation about Magwitch — his friendship is constant regardless of Pip's changing circumstances.",
      },
      {
        text: '"A gentleman must not be too ready with his fists."',
        context:
          "Herbert teaches Pip social graces without condescension — a genuine act of friendship that contrasts with Estella's humiliation.",
      },
    ],
    examFocus:
      "Herbert is a foil to Pip: born into the genteel class but without money, he shows that real gentility is about behaviour, not wealth. In an exam, contrast Herbert's natural courtesy with Pip's acquired snobbery. His willingness to help with Magwitch is a test of his character that he passes unequivocally.",
  },
  {
    name: 'Mr Jaggers',
    role: "Criminal lawyer; administrator of Pip's expectations",
    overview:
      'Jaggers is the most powerful lawyer in London, feared by clients and colleagues alike. He acts as intermediary for both Miss Havisham and Magwitch, and it is through him that Pip\'s expectations are arranged and Estella is placed with Miss Havisham. He washes his hands obsessively with scented soap after meeting clients, a ritual that Dickens uses to suggest both his desire to remain morally "clean" and the impossibility of doing so when immersed in a corrupt system.',
    development:
      "Jaggers does not change significantly, but the reader's understanding of him deepens. He inhabits a world of moral compromise: he knows the truth about Estella's parentage, about Magwitch's identity, and about the corruption of the legal system, but he operates within it rather than challenging it. His handwashing becomes increasingly symbolic as the novel progresses — a compulsive attempt to separate his professional and private selves. He represents the law as an institution: powerful, necessary, but fundamentally indifferent to justice.",
    keyQuotes: [
      {
        text: '"Take nothing on its looks; take everything on evidence. There\'s no better rule."',
        context:
          "Jaggers's philosophy of life — rational, evidence-based, emotionally detached — reflects his role as a man who has seen too much human weakness to trust appearances.",
      },
      {
        text: '"Put the case that he lived in an atmosphere of evil, and that all he saw of children was their being generated in great numbers for certain destruction."',
        context:
          "Jaggers obliquely describes Magwitch's world and justifies his decision to place Estella with Miss Havisham — a rare moment of compassion disguised as legal hypothetical.",
      },
    ],
    examFocus:
      "Jaggers connects the novel's criminal and genteel worlds. In an exam, focus on his handwashing as a symbol of moral unease. Consider how Dickens uses him to critique the legal system — Jaggers is not evil, but the system he serves rewards manipulation over truth. His knowledge of Estella's parentage links the novel's class themes to its crime themes.",
  },
  {
    name: 'John Wemmick',
    role: "Jaggers's clerk; Pip's friend and advisor",
    overview:
      'Wemmick is one of Dickens\'s most brilliantly comic creations. At work, he is brisk, hard and mechanical — his mouth like a "post-office" slot, his manner entirely businesslike. At home in Walworth, he is a completely different person: warm, playful and devoted to his deaf father (the "Aged Parent"), tending a miniature castle complete with a drawbridge, a cannon and a flagpole. He has built a literal moat between his professional and private selves.',
    development:
      "Wemmick's split life is Dickens's commentary on what industrial capitalism does to human beings. The system demands that workers suppress their emotions and individuality; Wemmick's castle is his act of resistance — a private space where he can be fully human. His advice to Pip is always different at home and at work, and he insists on the separation: \"Walworth is one place, and this office is another.\" His marriage to Miss Skiffins, conducted with comical secrecy, confirms that his domestic self is his authentic self.",
    keyQuotes: [
      {
        text: '"The office is one thing, and private life is another. When I go into the office, I leave the Castle behind me, and when I come into the Castle, I leave the office behind me."',
        context:
          "Wemmick's defining principle — the enforced separation of public and private selves that Dickens sees as a symptom of modern life.",
      },
      {
        text: '"Walworth sentiments. Get hold of portable property."',
        context:
          'Wemmick\'s practical advice — his "Walworth sentiments" are always more humane than his office pronouncements.',
      },
    ],
    examFocus:
      "Wemmick is an excellent choice for questions on the theme of identity or the effects of the Victorian social system. His split personality is played for comedy, but the underlying point is serious: the economic system forces people to become machines. Compare his deliberate separation of selves with Pip's inability to integrate his different identities.",
  },
  {
    name: 'Biddy',
    role: "Pip's childhood friend; later Joe's wife",
    overview:
      "Biddy is intelligent, practical, kind and perceptive — everything Estella is not. She is Pip's contemporary at Mr Wopsle's great-aunt's school and later helps care for Mrs Joe after her attack. She sees through Pip's pretensions more clearly than anyone: when he tells her he wants to become a gentleman, she asks the devastating question, \"Wouldn't it be better to be a gentleman at heart?\" She represents the authentic, loving life that Pip rejects in pursuit of false gentility.",
    development:
      "Biddy remains constant, like Joe, and serves as a moral compass that Pip ignores. She tries to warn him that his ambitions will make him unhappy, but he patronises her. She marries Joe, forming the loving domestic partnership that represents Dickens's ideal. When Pip returns to the forge intending to propose to Biddy (having failed with Estella), he finds her already married to Joe — a final, gentle reminder that the world does not wait for him to learn his lesson. Biddy's quiet dignity is Dickens's answer to Estella's cold beauty.",
    keyQuotes: [
      {
        text: '"Do you want to be a gentleman, to spite her or to gain her over?"',
        context:
          "Biddy cuts to the heart of Pip's motivation with one question, exposing that his ambition is driven by Estella rather than genuine self-improvement.",
      },
      {
        text: '"I am not angry, but I am hurt."',
        context:
          'When Pip condescends to her, Biddy responds with quiet dignity that shames him more than anger would.',
      },
    ],
    examFocus:
      "Biddy functions as a foil to Estella: she is everything Pip should value but doesn't. In an exam, contrast her emotional intelligence with Estella's emotional absence. Her question about being \"a gentleman at heart\" encapsulates the novel's central argument. She also represents the role of women in Victorian society — intelligent and capable but limited by class and gender.",
  },
]

export default async function GreatExpectationsCharactersPage() {
  const board = await getServerBoard()
  if (board && board !== 'aqa') {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
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
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Great Expectations — Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Detailed profiles of nine key characters covering their role, development, key
            quotations and exam focus points.
          </p>
        </div>
      </section>

      {/* Character Cards */}
      <div className="space-y-8">
        {CHARACTERS.map((c) => (
          <Card key={c.name} className="overflow-hidden">
            <CardHeader className="border-b border-border/40 bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Users className="size-5 text-emerald-400" />
                </div>
                <div>
                  <CardTitle className="text-heading-lg font-heading">{c.name}</CardTitle>
                  <CardDescription>{c.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6 sm:p-8">
              {/* Overview */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Overview</h3>
                <p className="text-body-sm text-muted-foreground">{c.overview}</p>
              </div>

              {/* Development */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Character development
                </h3>
                <p className="text-body-sm text-muted-foreground">{c.development}</p>
              </div>

              {/* Key Quotes */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">Key quotations</h3>
                {c.keyQuotes.map((q, i) => (
                  <div key={i} className="rounded-xl border border-border/60 bg-muted/20 p-4">
                    <p className="mb-1.5 text-body-sm font-medium italic text-foreground">
                      {q.text}
                    </p>
                    <p className="text-xs text-muted-foreground">{q.context}</p>
                  </div>
                ))}
              </div>

              {/* Exam Focus */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">Exam focus</h3>
                <p className="text-body-sm text-muted-foreground">{c.examFocus}</p>
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
