import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Sparkles, Users } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Pride and Prejudice — Character Analysis | The English Hub',
  description:
    'In-depth character analysis for Pride and Prejudice by Jane Austen: Elizabeth Bennet, Darcy, Jane, Bingley, Wickham, Mr & Mrs Bennet, Lydia and Lady Catherine.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/pride-and-prejudice/characters',
  },
}

/* ─── Character data ─────────────────────────────────────────────────────── */

type CharacterProfile = {
  name: string
  role: string
  overview: string
  keyTraits: string[]
  development: string
  keyQuotes: { quote: string; analysis: string }[]
  examTip: string
}

const CHARACTERS: CharacterProfile[] = [
  {
    name: 'Elizabeth Bennet',
    role: 'Protagonist — the second Bennet daughter',
    overview:
      'Elizabeth is intelligent, witty and fiercely independent. She is Austen\'s most celebrated heroine: a woman who refuses to compromise her principles even when economic pressures make marriage her only route to financial security. She possesses a sharp, ironic mind that rivals her father\'s, but unlike him she is willing to engage with the world rather than retreat from it. Her central flaw is the prejudice of the novel\'s title — she forms rapid judgements based on first impressions and defends them long after the evidence has shifted.',
    keyTraits: ['Intelligent', 'Witty', 'Independent', 'Prejudiced', 'Self-aware (eventually)'],
    development:
      'Elizabeth\'s arc is one of humbling self-discovery. She begins confident in her ability to read character, dismissing Darcy and trusting Wickham on insufficient evidence. Darcy\'s letter at Hunsford forces her to confront her own bias: "Till this moment, I never knew myself." From that point she undergoes genuine moral growth, learning to separate genuine discernment from mere prejudice. By the novel\'s end she is wiser without being diminished — she retains her wit and spirit while gaining humility.',
    keyQuotes: [
      {
        quote: '"I could easily forgive his pride, if he had not mortified mine."',
        analysis:
          'Elizabeth acknowledges that her hostility to Darcy is personal and emotional, not principled. The parallel structure ("his pride... mine") reveals that she shares the very fault she condemns in him. Austen uses this moment to hint that Elizabeth\'s self-knowledge is less complete than she believes.',
      },
      {
        quote: '"Till this moment, I never knew myself."',
        analysis:
          'The novel\'s most important sentence. Elizabeth achieves genuine self-recognition after reading Darcy\'s letter. All her confidence in her own judgement collapses in six words. Austen presents self-knowledge as painful but necessary — the prerequisite for real moral growth.',
      },
      {
        quote: '"I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness, without reference to you, or to any person so wholly unconnected with me."',
        analysis:
          'Elizabeth\'s defiant response to Lady Catherine demonstrates her refusal to submit to social pressure. She asserts her right to define her own happiness — a radical position for a woman of her time and class.',
      },
    ],
    examTip:
      'Elizabeth is not simply a "strong female character." Austen shows that her intelligence can be a liability as well as a strength — she uses her wit to justify prejudice. The best essays will explore both her virtues and her flaws, and trace how she learns to distinguish discernment from bias.',
  },
  {
    name: 'Mr Darcy (Fitzwilliam Darcy)',
    role: 'Male lead — wealthy landowner of Pemberley',
    overview:
      'Darcy is enormously wealthy, reserved and initially dismissive of those he considers beneath him. His pride is rooted in his upbringing: he was "given good principles, but left to follow them in pride and conceit." He is honest, principled and deeply loyal, but his social manners are terrible — he lacks the easy charm that makes Bingley and Wickham immediately likeable. Austen uses him to explore the difference between genuine worth and surface agreeability.',
    keyTraits: ['Proud', 'Honest', 'Generous (privately)', 'Reserved', 'Capable of change'],
    development:
      'Darcy\'s transformation is as dramatic as Elizabeth\'s. His first proposal is a masterclass in arrogance — he insults Elizabeth even while declaring his love. Elizabeth\'s rejection stings him into self-examination. His letter shows the beginnings of humility, and his behaviour at Pemberley and during the Lydia crisis demonstrates that he has genuinely changed. By the second proposal he has learned to express love without condescension, and to value Elizabeth\'s family because they are hers.',
    keyQuotes: [
      {
        quote: '"She is tolerable; but not handsome enough to tempt me."',
        analysis:
          'Darcy\'s dismissal of Elizabeth at the Meryton ball is the novel\'s inciting incident. The word "tolerable" is devastatingly lukewarm, and "tempt me" implies that his attention would be a gift. This single remark creates Elizabeth\'s prejudice and drives the entire plot.',
      },
      {
        quote: '"In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you."',
        analysis:
          'The first proposal reveals Darcy\'s pride at its most damaging. He frames his love as a battle he has lost, and his language — "struggled," "repressed," "you must" — suggests compulsion rather than joy. He cannot separate his genuine feelings from his class consciousness.',
      },
      {
        quote: '"You taught me a lesson, hard indeed at first, but most advantageous. By you, I was properly humbled."',
        analysis:
          'Darcy\'s acknowledgement at the second proposal shows complete transformation. He credits Elizabeth with his moral education and uses the word "humbled" without resentment. Austen\'s ideal is not the elimination of pride but its proper regulation through self-knowledge.',
      },
    ],
    examTip:
      'Avoid presenting Darcy as simply "rude then nice." His pride has genuine roots — he was raised to believe in his social superiority. The interesting question is how and why he changes, and what Austen suggests about the relationship between class, character and education.',
  },
  {
    name: 'Jane Bennet',
    role: 'Eldest Bennet daughter — Elizabeth\'s confidante',
    overview:
      'Jane is beautiful, gentle, kind and consistently sees the best in everyone. She is the moral centre of the Bennet family — the daughter who most deserves happiness. However, Austen also shows that Jane\'s goodness can be a limitation: her refusal to think badly of anyone makes her a poor judge of character, and her restrained manners nearly cost her Bingley. Charlotte Lucas and Darcy both observe that Jane\'s feelings are not visible enough to secure her a proposal.',
    keyTraits: ['Kind', 'Beautiful', 'Reserved', 'Trusting', 'Non-judgemental'],
    development:
      'Jane\'s arc is subtler than Elizabeth\'s. She does not undergo a dramatic revelation but quietly endures the pain of Bingley\'s apparent rejection. Her constancy is eventually rewarded, but Austen makes clear that it was a close-run thing — without Darcy\'s intervention, Bingley would never have returned. Jane\'s story tests whether goodness alone is sufficient in a world governed by pride and social manoeuvring.',
    keyQuotes: [
      {
        quote: '"I do not pretend to be anything extraordinary now. I was tempted to be so by the circumstances, but I hope I am not."',
        analysis:
          'Jane\'s modesty is genuine and touching, but also reveals her vulnerability. In a society that rewards performance and display, her quiet integrity risks being overlooked.',
      },
      {
        quote: '"There are few people whom I really love, and still fewer of whom I think well. The more I see of the world, the more am I dissatisfied with it."',
        analysis:
          'Elizabeth\'s words, but spoken about Jane. This quote illuminates the contrast between the sisters: Elizabeth is disillusioned by the world, while Jane maintains her faith in human goodness despite evidence to the contrary.',
      },
    ],
    examTip:
      'Jane is often overlooked in essays, but she is a crucial foil for Elizabeth. Compare their approaches to judging character: Elizabeth is too quick to condemn, Jane too slow. Austen suggests that neither extreme is ideal.',
  },
  {
    name: 'Mr Bingley (Charles Bingley)',
    role: 'Darcy\'s wealthy friend — Jane\'s suitor',
    overview:
      'Bingley is everything Darcy is not in public: open, cheerful, warm and immediately likeable. He falls for Jane at the first ball and never wavers in his affection — only in his confidence. His central weakness is his susceptibility to influence: Darcy and his sisters persuade him to leave Netherfield, and he accepts their judgement over his own feelings. Austen uses him to explore whether agreeableness without firmness is truly a virtue.',
    keyTraits: ['Amiable', 'Wealthy', 'Easily influenced', 'Sincere', 'Modest'],
    development:
      'Bingley\'s arc is the simplest in the novel. He loves Jane, is persuaded to leave, and returns when Darcy admits his interference was wrong. He does not change significantly — his constancy of feeling is admirable, but his lack of independence is a real flaw. Austen suggests that goodness without self-reliance makes a person vulnerable to manipulation.',
    keyQuotes: [
      {
        quote: '"He is just what a young man ought to be — sensible, good humoured, lively; and I never saw such happy manners!"',
        analysis:
          'Jane\'s assessment of Bingley, which also reveals her own values. Bingley\'s "happy manners" make him universally popular, but Austen will show that manner is not the same as substance.',
      },
    ],
    examTip:
      'Bingley works best in essays as a contrast to Darcy. Where Darcy is proud but independent, Bingley is amiable but weak. Together they illustrate Austen\'s argument that the ideal character combines warmth with firmness.',
  },
  {
    name: 'Mr Wickham (George Wickham)',
    role: 'Militia officer — the novel\'s antagonist',
    overview:
      'Wickham is charming, handsome and an accomplished liar. He is the son of old Mr Darcy\'s steward and was raised alongside Darcy, but squandered every advantage he was given. He attempted to elope with Darcy\'s fifteen-year-old sister Georgiana for her fortune, and later seduces and runs away with the sixteen-year-old Lydia Bennet. Wickham is Austen\'s most dangerous character precisely because he is the most likeable on first acquaintance.',
    keyTraits: ['Charming', 'Dishonest', 'Mercenary', 'Manipulative', 'Superficially agreeable'],
    development:
      'Wickham does not change. His function is to test other characters\' judgement. Elizabeth believes him because his easy manners match her prejudice against the reserved Darcy. Only after Darcy\'s letter does she recognise that Wickham\'s charm was a calculated performance. Austen uses him to argue that the most dangerous people are those who seem the most pleasant.',
    keyQuotes: [
      {
        quote: '"Mr Wickham is blessed with such happy manners as may ensure his making friends — whether he may be equally capable of retaining them, is less certain."',
        analysis:
          'Darcy\'s measured assessment in the letter contrasts with Wickham\'s self-serving narrative. The distinction between "making friends" and "retaining them" captures the difference between surface charm and genuine character.',
      },
      {
        quote: '"Wickham\'s chief object was unquestionably my sister\'s fortune, which is thirty thousand pounds."',
        analysis:
          'Darcy\'s revelation about Wickham\'s attempted elopement with Georgiana exposes his true motive: money. Austen shows that mercenary behaviour is not limited to women seeking wealthy husbands — men could be equally calculating.',
      },
    ],
    examTip:
      'Wickham is essential for any essay on appearances versus reality, or on Austen\'s critique of social judgement. He proves that charm and agreeableness are morally neutral qualities — they can disguise villainy as easily as they can express genuine warmth.',
  },
  {
    name: 'Mr Bennet',
    role: 'Father of the five Bennet daughters',
    overview:
      'Mr Bennet is intelligent, sardonic and deeply entertaining, but Austen makes clear that his wit masks a fundamental irresponsibility. He married a foolish woman for her beauty and has spent twenty years retreating into his library and his sarcasm rather than managing his family. His favourite daughter is Elizabeth, whose intelligence mirrors his own, but he has failed to discipline Lydia or save money for his daughters\' futures. He is Austen\'s portrait of what happens when cleverness is not accompanied by duty.',
    keyTraits: ['Witty', 'Sardonic', 'Detached', 'Negligent', 'Intelligent'],
    development:
      'Mr Bennet\'s arc is one of belated recognition. After Lydia\'s elopement he admits, "I am not afraid of being overpowered by the impression. It will pass away soon enough." Even his remorse is filtered through irony. He briefly resolves to be a better father but quickly reverts to his old habits. Austen suggests that self-knowledge without action is insufficient — Mr Bennet understands his own failings but cannot change them.',
    keyQuotes: [
      {
        quote: '"For what do we live, but to make sport for our neighbours, and laugh at them in our turn?"',
        analysis:
          'Mr Bennet\'s philosophy of life, delivered as a joke. But Austen shows that treating everything as a source of amusement is a form of moral evasion. His wit protects him from having to engage with real problems.',
      },
      {
        quote: '"I am not afraid of being overpowered by the impression. It will pass away soon enough."',
        analysis:
          'Spoken after Lydia\'s disgrace, this is Mr Bennet at his most troubling. He recognises that his guilt will fade — and accepts this as inevitable rather than fighting it. Austen reveals the dark side of detachment: it makes sustained moral effort impossible.',
      },
    ],
    examTip:
      'Mr Bennet is a fascinating character for essays on responsibility or the limits of intelligence. He shows that wit without duty is as dangerous as foolishness — his negligence directly enables Lydia\'s catastrophe.',
  },
  {
    name: 'Mrs Bennet',
    role: 'Mother of the five Bennet daughters',
    overview:
      'Mrs Bennet is silly, vulgar, anxious and obsessed with marrying off her daughters. She is the novel\'s most obviously comic character, and Austen\'s narrator treats her with cool contempt: she is "a woman of mean understanding, little information, and uncertain temper." Yet Austen also makes her situation sympathetically clear: if Mr Bennet dies, Mrs Bennet and her unmarried daughters will be homeless, since the estate is entailed away to Mr Collins. Her desperation, however undignified, has real economic roots.',
    keyTraits: ['Anxious', 'Foolish', 'Vulgar', 'Determined', 'Oblivious to irony'],
    development:
      'Mrs Bennet does not change. She functions as a fixed point against which other characters\' development can be measured. Her reaction to Lydia\'s elopement — initially hysteria, then triumph when marriage is secured — reveals her values with brutal clarity: reputation matters only insofar as it affects marriageability. She is delighted by Darcy\'s proposal purely because of his wealth: "Ten thousand a year!"',
    keyQuotes: [
      {
        quote: '"A woman of mean understanding, little information, and uncertain temper. When she was discontented she fancied herself nervous. The business of her life was to get her daughters married."',
        analysis:
          'Austen\'s narrator is brutally concise. "Mean understanding" means limited intelligence; "uncertain temper" means unpredictable moods. But the final sentence carries a sting of social criticism — in a world where women cannot earn or inherit, getting daughters married is not merely foolish ambition but economic survival.',
      },
      {
        quote: '"Oh! my dear Lydia! — she will be married at sixteen! — My good, kind brother! — How I long to see her! and to see dear Wickham too!"',
        analysis:
          'Mrs Bennet\'s ecstatic response to Lydia\'s forced marriage reveals her inability to grasp the moral dimension of the crisis. She sees only the social outcome — marriage — and not the disgrace or the cost. Austen uses her to satirise a society that values the appearance of respectability over genuine virtue.',
      },
    ],
    examTip:
      'Do not simply dismiss Mrs Bennet as comic relief. The best essays will note that her anxiety, though expressed absurdly, is grounded in the real economic vulnerability of women under the entail. She is both ridiculous and, on some level, right to be afraid.',
  },
  {
    name: 'Lydia Bennet',
    role: 'Youngest Bennet daughter',
    overview:
      'Lydia is fifteen years old, loud, flirtatious and completely uncontrolled. She is her mother\'s favourite and her father\'s least concern. Her elopement with Wickham is the novel\'s crisis — a catastrophe that nearly destroys the entire family. Austen presents her not as wicked but as dangerously unformed: she has had no proper education, no discipline and no moral guidance. She is what happens when parents abdicate their responsibilities.',
    keyTraits: ['Reckless', 'Vain', 'Uncontrolled', 'Immature', 'Unapologetic'],
    development:
      'Lydia does not grow or learn. After her enforced marriage she is proud rather than ashamed, boasting of being the first Bennet sister to wed. Her lack of self-awareness is chilling — she has been rescued from ruin and does not even realise it. Austen uses her to show the consequences of failed parenting and to argue that young women without proper guidance are vulnerable to exploitation.',
    keyQuotes: [
      {
        quote: '"She was sure they should be married some time or other, and it did not much signify when."',
        analysis:
          'Lydia\'s casual attitude to her own ruin reveals a terrifying naivety. She does not understand the difference between elopement and marriage, or what her situation would mean if Darcy had not intervened. Austen shows how ignorance — the ignorance Lydia\'s parents should have prevented — can be as destructive as malice.',
      },
    ],
    examTip:
      'Lydia is essential for essays on parenting, responsibility and reputation. Blame for her fall can be distributed among multiple characters: Wickham\'s predation, Mrs Bennet\'s encouragement, Mr Bennet\'s neglect. The best essays will see Lydia as a symptom of a dysfunctional family.',
  },
  {
    name: 'Lady Catherine de Bourgh',
    role: 'Darcy\'s aunt — patroness of Hunsford',
    overview:
      'Lady Catherine is domineering, snobbish and utterly convinced of her own importance. She embodies the worst aspects of aristocratic pride: she issues commands, expects deference and cannot conceive that a woman of Elizabeth\'s rank might refuse her. Her visit to Longbourn to forbid Elizabeth from accepting Darcy is one of the novel\'s most dramatic scenes — and ironically, it confirms Darcy\'s hope that Elizabeth might accept him.',
    keyTraits: ['Authoritarian', 'Snobbish', 'Outspoken', 'Entitled', 'Unintentionally comic'],
    development:
      'Lady Catherine does not change. She exists to embody the social hierarchy that Darcy must learn to question. Her fury at Elizabeth\'s defiance — "Are the shades of Pemberley to be thus polluted?" — reveals the class anxiety beneath aristocratic confidence. She is afraid that Elizabeth will contaminate her world, which is precisely the kind of thinking Darcy has had to overcome.',
    keyQuotes: [
      {
        quote: '"Are the shades of Pemberley to be thus polluted?"',
        analysis:
          'Lady Catherine\'s language reveals the ideology behind aristocratic pride. "Polluted" treats Elizabeth\'s lower status as a form of contamination — a metaphor that dehumanises. Austen exposes the cruelty at the heart of class snobbery.',
      },
      {
        quote: '"I am almost the nearest relation he has in the world, and am entitled to know all his dearest concerns."',
        analysis:
          'Lady Catherine confuses social rank with personal authority. She believes her status as Darcy\'s aunt gives her the right to control his marriage. Austen satirises the aristocratic assumption that family connection equals ownership.',
      },
    ],
    examTip:
      'Lady Catherine is useful in essays on class and pride. She represents the unreformed version of Darcy\'s snobbery — what he might have remained without Elizabeth\'s influence. Her confrontation with Elizabeth also showcases Elizabeth\'s courage and independence.',
  },
]

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default async function PrideAndPrejudiceCharactersPage() {
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
            Character Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Pride and Prejudice by Jane Austen
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Detailed analysis of every major character, with key quotations,
            development arcs and exam tips for GCSE and A-Level literature.
          </p>
        </div>
      </section>

      {/* ── Characters ───────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Major Characters
          </h2>
        </div>

        <div className="space-y-6">
          {CHARACTERS.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">
                  {c.name}
                </CardTitle>
                <CardDescription>{c.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-body-sm text-muted-foreground">
                  {c.overview}
                </p>

                {/* Key traits */}
                <div className="flex flex-wrap gap-1.5">
                  {c.keyTraits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Character development */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Character development
                  </h4>
                  <p className="text-body-sm text-muted-foreground">
                    {c.development}
                  </p>
                </div>

                {/* Key quotes */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  {c.keyQuotes.map((q, i) => (
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

                {/* Exam tip */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <h4 className="text-sm font-semibold text-amber-300 mb-1">
                    Exam tip
                  </h4>
                  <p className="text-body-sm text-muted-foreground">
                    {c.examTip}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
