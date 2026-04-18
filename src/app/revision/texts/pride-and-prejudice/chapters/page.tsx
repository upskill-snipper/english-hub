import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Pride and Prejudice — Key Chapters Analysed | The English Hub',
  description:
    'Volume-by-volume and chapter-by-chapter analysis of Pride and Prejudice by Jane Austen with key quotations and exam-ready commentary.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/pride-and-prejudice/chapters',
  },
}

/* ─── Chapter data ───────────────────────────────────────────────────────── */

type ChapterAnalysis = {
  chapter: string
  title: string
  summary: string
  keyQuotes: { quote: string; analysis: string }[]
  significance: string
}

const CHAPTERS: ChapterAnalysis[] = [
  {
    chapter: 'Volume I, Chapter 1',
    title: 'The Bennets learn of Bingley\'s arrival',
    summary:
      'The novel opens with one of the most famous sentences in English literature. Mrs Bennet excitedly tells her husband that Netherfield Park has been let to a young man of large fortune, Mr Bingley. Mr Bennet teases his wife with dry irony while she schemes to secure an introduction for her daughters. The chapter establishes the Bennet marriage as a comic mismatch and introduces the novel\'s central preoccupation with marriage and money.',
    keyQuotes: [
      {
        quote:
          '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
        analysis:
          'Austen\'s ironic opening inverts the real situation: it is the families with daughters who are in want of wealthy husbands. The word "universally" signals satire — this is a truth acknowledged only in the narrow world of the rural gentry. The sentence establishes Austen\'s narrative voice: witty, detached and quietly subversive.',
      },
      {
        quote:
          '"You mistake me, my dear. I have a high respect for your nerves. They are my old friends. I have heard you mention them with consideration these twenty years at least."',
        analysis:
          'Mr Bennet deflects his wife\'s anxiety with irony. His wit is entertaining but also reveals a habit of disengagement — he retreats into sarcasm rather than addressing real concerns. This foreshadows his failure to manage Lydia, which nearly destroys the family.',
      },
    ],
    significance:
      'The opening chapter introduces Austen\'s ironic narrative voice, establishes the economic pressures driving the marriage market, and presents the Bennet parents as contrasting approaches to life — one anxious and foolish, the other witty but negligent. It sets the comedic tone while embedding serious social commentary about women\'s dependence on marriage for financial security.',
  },
  {
    chapter: 'Volume I, Chapter 3',
    title: 'The Meryton assembly ball',
    summary:
      'Bingley and Darcy attend the public ball at Meryton. Bingley is immediately charming, dances every dance and is clearly attracted to Jane. Darcy, by contrast, refuses to dance with anyone outside his own party and is overheard slighting Elizabeth: "She is tolerable; but not handsome enough to tempt me." The neighbourhood unanimously condemns Darcy as proud while praising Bingley.',
    keyQuotes: [
      {
        quote:
          '"She is tolerable; but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men."',
        analysis:
          'Darcy\'s dismissal of Elizabeth is the inciting moment of the novel\'s central relationship. The word "consequence" reveals his class arrogance — he believes his attention would elevate her. Elizabeth overhears this and responds with amused contempt, but it also plants a prejudice against Darcy that will take the entire novel to overcome.',
      },
      {
        quote:
          '"He is just what a young man ought to be — sensible, good humoured, lively; and I never saw such happy manners!"',
        analysis:
          'Jane\'s praise of Bingley is characteristically generous and unguarded. Her openness contrasts with Darcy\'s reserve and with Elizabeth\'s sharper judgement. Austen uses Jane to demonstrate a kind of goodness that, while admirable, also leaves her vulnerable to being hurt.',
      },
    ],
    significance:
      'This chapter creates the first impressions that drive the entire plot. Elizabeth\'s prejudice against Darcy and Darcy\'s pride in his own status are both established in a single overheard remark. Austen demonstrates how quickly and firmly people form judgements based on surfaces, and how those judgements can mislead.',
  },
  {
    chapter: 'Volume I, Chapter 11',
    title: 'Elizabeth and Darcy spar at Netherfield',
    summary:
      'While Jane recovers from illness at Netherfield, Elizabeth engages Darcy in a sparkling verbal duel about pride and vanity. Darcy admits his temper is "resentful" and that his "good opinion once lost is lost for ever." Elizabeth teases him for this inflexibility. The conversation crackles with intellectual attraction disguised as antagonism.',
    keyQuotes: [
      {
        quote:
          '"My good opinion once lost is lost for ever."',
        analysis:
          'Darcy presents his stubbornness as moral consistency, but Austen shows it to be a form of pride — the inability to revise one\'s judgement. This flaw is central to the novel\'s argument: true virtue requires the willingness to change one\'s mind when confronted with new evidence.',
      },
      {
        quote:
          '"I am perfectly convinced by it that Mr Darcy has no defect. He owns it himself without disguise."',
        analysis:
          'Elizabeth\'s irony is razor-sharp. She turns Darcy\'s self-assessment inside out, suggesting that admitting a flaw openly is itself a form of vanity. The exchange shows two exceptionally intelligent people testing each other, and hints at the compatibility they are both too proud to acknowledge.',
      },
    ],
    significance:
      'The Netherfield scenes establish the intellectual equality between Elizabeth and Darcy. Their verbal sparring is the novel\'s engine: each challenges the other\'s self-knowledge. Austen uses dialogue rather than action to drive character development, demonstrating her distinctive narrative method.',
  },
  {
    chapter: 'Volume I, Chapter 15 & Volume II, Chapter 1',
    title: 'Wickham\'s slander of Darcy',
    summary:
      'Wickham arrives with the militia and quickly charms Elizabeth with his easy manners. He tells her a detailed and apparently credible story: Darcy denied him the living promised by old Mr Darcy, out of jealousy and spite. Elizabeth believes Wickham entirely because his account confirms her existing prejudice against Darcy. She does not question why Wickham tells such a private story to a near-stranger.',
    keyQuotes: [
      {
        quote:
          '"I can much more easily believe Mr Bingley to be imposed on, than that Mr Wickham should invent such a history of himself as he gave me last night."',
        analysis:
          'Elizabeth reveals the core of her prejudice: she interprets all evidence through her initial dislike of Darcy. She cannot conceive that Wickham — who is pleasant and flattering — might be dishonest. Austen dramatises how charm and agreeableness are poor indicators of character.',
      },
    ],
    significance:
      'Wickham\'s lies are the most important test of Elizabeth\'s judgement, and she fails it entirely. Austen shows that Elizabeth\'s intelligence does not protect her from prejudice — in fact, her cleverness allows her to construct increasingly elaborate rationalisations for her wrong opinion. The reader is also deceived, which makes Elizabeth\'s later self-correction all the more powerful.',
  },
  {
    chapter: 'Volume II, Chapter 11 (Chapter 34)',
    title: 'Darcy\'s first proposal at Hunsford',
    summary:
      'Darcy visits Elizabeth at the Hunsford parsonage and, to her astonishment, proposes marriage. His proposal is a disaster: he dwells on her inferior connections, the degradation of allying himself with her family, and his struggle against his own feelings. Elizabeth refuses him furiously, accusing him of separating Jane and Bingley, of mistreating Wickham, and of proposing without civility or genuine respect.',
    keyQuotes: [
      {
        quote:
          '"In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you."',
        analysis:
          'Darcy\'s declaration is passionate but catastrophically framed. Words like "struggled" and "repressed" reveal that he sees loving Elizabeth as a weakness to overcome, not a joy to celebrate. "You must allow me" is almost a command — he cannot conceive of being refused.',
      },
      {
        quote:
          '"Could you expect me to rejoice in the inferiority of your connections? To congratulate myself on the hope of relations, whose condition in life is so decidedly beneath my own?"',
        analysis:
          'Darcy\'s honesty is genuinely shocking. He lays bare the class prejudice that governs Regency society — and that he has internalised completely. Austen forces the reader to see how even sincere love can be distorted by snobbery.',
      },
      {
        quote:
          '"You are the last man in the world whom I could ever be prevailed on to marry."',
        analysis:
          'Elizabeth\'s rejection is absolute and devastating. The superlative "last man in the world" matches Darcy\'s extremism. Both characters are at their most proud and most prejudiced in this scene — their worst selves fully exposed.',
      },
    ],
    significance:
      'The Hunsford proposal is the structural and thematic turning point of the novel. It brings the twin faults of pride and prejudice into direct collision. Darcy\'s pride makes him insult the woman he loves; Elizabeth\'s prejudice makes her misread a man whose faults are real but whose virtues she has entirely overlooked. From this point, both characters must change.',
  },
  {
    chapter: 'Volume II, Chapter 12 (Chapter 35)',
    title: 'Darcy\'s letter',
    summary:
      'The morning after the proposal, Darcy gives Elizabeth a long letter. He explains that he separated Jane and Bingley because he genuinely believed Jane did not return Bingley\'s feelings, and he provides the true history of Wickham — including Wickham\'s attempted elopement with Darcy\'s fifteen-year-old sister, Georgiana. Elizabeth reads the letter twice and is forced to confront the extent of her own misjudgement.',
    keyQuotes: [
      {
        quote:
          '"I have been a selfish being all my life, in practice, though not in principle."',
        analysis:
          'Darcy\'s self-assessment in the letter shows the beginning of genuine self-knowledge. He distinguishes between what he was taught (good principles) and how he actually behaved (selfishly). This admission is the first sign of the humility that will transform him.',
      },
      {
        quote:
          '"How despicably have I acted! I, who have prided myself on my discernment! — I, who have valued myself on my abilities!"',
        analysis:
          'Elizabeth\'s self-reproach is one of Austen\'s greatest moments. The repetition of "I" dramatises her recognition that her pride in her own intelligence was itself a form of vanity. She realises that her prejudice was not evidence-based but emotional, and that she has been as blind as the people she mocked.',
      },
      {
        quote:
          '"Till this moment, I never knew myself."',
        analysis:
          'This is the novel\'s most important single sentence. Elizabeth achieves genuine self-knowledge — the Socratic ideal that Austen places at the heart of moral growth. The sentence is devastating in its simplicity. All her wit, all her confidence, has been built on a foundation of self-deception.',
      },
    ],
    significance:
      'The letter is the mechanism of transformation. It provides Elizabeth with facts she cannot dismiss and forces her to re-evaluate every judgement she has made. Austen makes the reader re-read the novel alongside Elizabeth: events that seemed straightforward now appear in a completely different light. The letter demonstrates Austen\'s belief that moral growth requires confronting uncomfortable truths about oneself.',
  },
  {
    chapter: 'Volume III, Chapter 1 (Chapter 43)',
    title: 'Elizabeth visits Pemberley',
    summary:
      'Elizabeth tours Darcy\'s estate with the Gardiners during their Derbyshire trip. She is deeply impressed by the beauty and taste of the house and grounds, and even more by the housekeeper Mrs Reynolds, who speaks of Darcy with genuine warmth and respect. Darcy himself arrives unexpectedly and treats the Gardiners — Elizabeth\'s trade-connected relatives — with perfect courtesy, a dramatic reversal of his earlier snobbery.',
    keyQuotes: [
      {
        quote:
          '"And of this place, thought she, I might have been mistress!"',
        analysis:
          'Elizabeth\'s thought is not simply mercenary — Pemberley represents taste, responsibility and stewardship. Her admiration for the house mirrors her growing admiration for its owner. Austen uses the estate as an outward expression of Darcy\'s inner character: well-ordered, generous and beautiful.',
      },
      {
        quote:
          '"He is the best landlord, and the best master that ever lived... There is not one of his tenants or servants but what will give him a good name."',
        analysis:
          'Mrs Reynolds\'s testimony is crucial evidence. A man\'s treatment of those who depend on him — tenants and servants — reveals his true character more reliably than his behaviour in a ballroom. Austen privileges domestic virtue over social performance.',
      },
    ],
    significance:
      'Pemberley is the novel\'s most important symbolic space. Elizabeth sees Darcy\'s character reflected in his estate: responsible, tasteful, generous to dependents. Her prejudice was formed in the artificial social settings of balls and drawing rooms; it begins to dissolve when she encounters the real substance of Darcy\'s life. The scene also shows Darcy\'s transformation — his courtesy to the Gardiners proves he has listened to Elizabeth\'s reproaches.',
  },
  {
    chapter: 'Volume III, Chapters 4-6 (Chapters 46-48)',
    title: 'Lydia\'s elopement with Wickham',
    summary:
      'Elizabeth receives letters from Jane revealing that Lydia has eloped with Wickham without any prospect of marriage — a scandal that would destroy the entire family\'s reputation and ruin the other sisters\' marriage prospects. Elizabeth blames herself for not exposing Wickham\'s true character. Darcy, who is present when she receives the news, quietly leaves. Mr Bennet travels to London to find Lydia, but it is Darcy who ultimately locates the couple and bribes Wickham into marrying her.',
    keyQuotes: [
      {
        quote:
          '"I am afraid Mr Darcy — you must be gone. I can conceal it no longer. Lydia is — gone off — to Scotland, perhaps. She is gone off with Wickham!"',
        analysis:
          'Elizabeth\'s broken, fragmented speech reveals genuine distress — a sharp contrast to her usual eloquence. The dashes mimic her inability to process the catastrophe. That she turns instinctively to Darcy, the man she once despised, shows how completely her feelings have changed.',
      },
      {
        quote:
          '"How Wickham and Lydia were to be supported in tolerable independence, she could not imagine... She had never perceived, while the regiment was in Hertfordshire, that Lydia had any partiality for him."',
        analysis:
          'Austen examines the practical economic reality behind the scandal. An elopement without marriage means destitution for Lydia and disgrace for her sisters. Austen never lets the reader forget that in Regency England, a woman\'s reputation was her only social currency.',
      },
    ],
    significance:
      'The Lydia crisis is the novel\'s climactic test. It forces every character to reveal their true nature: Mr Bennet\'s negligence, Mrs Bennet\'s hysteria, Darcy\'s quiet generosity, Elizabeth\'s matured judgement. It also demonstrates the real-world consequences of the themes Austen has been exploring — pride, prejudice, reputation, class — by showing how a single reckless act can destroy a family\'s standing in society.',
  },
  {
    chapter: 'Volume III, Chapter 16 (Chapter 58)',
    title: 'Darcy\'s second proposal',
    summary:
      'After Lady Catherine\'s furious visit (in which she demands Elizabeth promise never to accept Darcy), Elizabeth and Darcy walk together. Darcy proposes again, this time with humility and genuine equality. Elizabeth accepts. They discuss their journey of mutual self-correction, each acknowledging how wrong they were. Darcy credits Elizabeth with teaching him the lesson: "You taught me a lesson, hard indeed at first, but most advantageous. By you, I was properly humbled."',
    keyQuotes: [
      {
        quote:
          '"You taught me a lesson, hard indeed at first, but most advantageous. By you, I was properly humbled."',
        analysis:
          'Darcy\'s language has completely changed from the first proposal. Instead of emphasising Elizabeth\'s inferiority, he acknowledges his own debt to her. "Properly humbled" — not crushed or degraded, but rightly brought to self-knowledge. This is Austen\'s model of moral education: painful but ultimately liberating.',
      },
      {
        quote:
          '"I was given good principles, but left to follow them in pride and conceit... I was spoilt by my parents, who... allowed, encouraged, almost taught me to be selfish and overbearing."',
        analysis:
          'Darcy traces the origin of his pride to his upbringing — good values poorly applied. Austen suggests that character is not fixed at birth but shaped by education and environment, and that recognising this is the first step toward genuine virtue.',
      },
    ],
    significance:
      'The second proposal mirrors and corrects the first. Where Darcy was arrogant, he is now humble; where Elizabeth was furious, she is now grateful. Both have undergone genuine moral growth. Austen structures the novel as a double education: each protagonist teaches the other to see past their own blind spots. The marriage that results is presented as a true partnership of equals — the ideal that the novel has been working toward from its opening sentence.',
  },
]

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default async function PrideAndPrejudiceChaptersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/pride-and-prejudice" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Pride and Prejudice
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              19th-Century Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Key Chapters Analysed
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Pride and Prejudice by Jane Austen
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            A volume-by-volume analysis of the most important chapters in the
            novel, with full public-domain quotations and exam-ready commentary
            on Austen&apos;s methods.
          </p>
        </div>
      </section>

      {/* ── Chapters ─────────────────────────────────────────────────── */}
      <section className="space-y-6">
        {CHAPTERS.map((ch) => (
          <Card key={ch.chapter}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  {ch.chapter}
                </Badge>
              </div>
              <CardTitle className="text-heading-md font-heading">
                {ch.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-body-sm text-muted-foreground">{ch.summary}</p>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Quotations
                </h4>
                {ch.keyQuotes.map((q, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2"
                  >
                    <p className="text-body-md font-medium italic text-foreground">
                      {q.quote}
                    </p>
                    <p className="text-body-sm text-muted-foreground">
                      {q.analysis}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Why this chapter matters
                </h4>
                <p className="text-body-sm text-muted-foreground">
                  {ch.significance}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ── Public domain notice ─────────────────────────────────────── */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Pride and Prejudice by Jane Austen (1813) is in the public domain.
        Quotations are reproduced freely as the text is no longer subject to
        copyright.
      </p>
    </div>
  )
}
