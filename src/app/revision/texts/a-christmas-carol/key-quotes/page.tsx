'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Lightbulb,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── Quote data ──────────────────────────────────────────────────────── */

type KeyQuote = {
  id: number
  quote: string
  speaker: string
  stave: string
  context: string
  analysis: string
  themes: string[]
  examTip: string
}

const quotes: KeyQuote[] = [
  {
    id: 1,
    quote: '"Old Marley was as dead as a door-nail."',
    speaker: 'Narrator',
    stave: 'Stave 1',
    context: 'The opening line of the novella, establishing the fact of Marley\'s death.',
    analysis:
      'The famous opening uses a common simile to establish a conversational, almost conspiratorial tone. Dickens immediately addresses the reader directly, creating the intimate storytelling voice that runs through the entire novella. The matter-of-fact declaration also sets up the supernatural shock of Marley\'s later appearance -- if we accept he is truly dead, his ghost becomes genuinely unsettling.',
    themes: ['Death and Mortality'],
    examTip: 'Use this as an opening quote in any essay about narrative voice or the supernatural. The direct address establishes the novella as a spoken story.',
  },
  {
    id: 2,
    quote: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"',
    speaker: 'Narrator',
    stave: 'Stave 1',
    context: 'The narrator\'s first description of Scrooge\'s character.',
    analysis:
      'Dickens uses a listing technique with seven consecutive adjectives, each suggesting physical violence or theft. The progressive participles ("-ing" endings) create a relentless, grinding rhythm. The exclamatory sentence and direct address involve the reader as witness. Every adjective describes taking -- Scrooge is defined entirely by what he extracts from the world, never by what he gives.',
    themes: ['Greed and Capitalism'],
    examTip: 'This is the definitive characterisation quote. Analyse the listing technique and the violent connotations of each verb. Compare with the positive adjectives of Stave 5.',
  },
  {
    id: 3,
    quote: '"The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait."',
    speaker: 'Narrator',
    stave: 'Stave 1',
    context: 'Describing Scrooge\'s physical appearance as he walks through London.',
    analysis:
      'Pathetic fallacy makes Scrooge\'s inner emotional coldness manifest on his body. The "cold within him" is both literal (too miserly to pay for heating) and metaphorical (frozen out all human warmth). The verbs "froze," "nipped," "shrivelled," "stiffened" suggest decay and death -- Scrooge is already becoming corpse-like while alive, foreshadowing the death imagery of Stave 4.',
    themes: ['Isolation', 'Death and Mortality'],
    examTip: 'A brilliant example of pathetic fallacy. Use it to discuss how Dickens makes internal character traits visible through physical description.',
  },
  {
    id: 4,
    quote: '"Darkness is cheap, and Scrooge liked it."',
    speaker: 'Narrator',
    stave: 'Stave 1',
    context: 'Describing Scrooge\'s preference for keeping his chambers dark.',
    analysis:
      'A brilliantly compressed sentence that works on two levels. On the surface, it describes Scrooge\'s refusal to pay for candles. Symbolically, it captures his preference for moral darkness -- ignorance, isolation, and the absence of enlightenment. The word "liked" suggests active choice: Scrooge does not merely tolerate darkness but embraces it.',
    themes: ['Greed and Capitalism', 'Isolation'],
    examTip: 'Perfect for discussing symbolism and Dickens\'s economy of language. One sentence contains both literal and metaphorical meaning.',
  },
  {
    id: 5,
    quote: '"The only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely."',
    speaker: 'Fred',
    stave: 'Stave 1',
    context: 'Fred\'s passionate defence of Christmas when Scrooge dismisses it as humbug.',
    analysis:
      'Fred defines Christmas not as a religious ritual but as a collective act of empathy. "Shut-up hearts" uses the metaphor of a locked door -- echoing Scrooge\'s counting-house and closed-off life. "By one consent" suggests shared, voluntary action. This speech is the novella\'s thesis statement about what Christmas means.',
    themes: ['Christmas Spirit and Generosity', 'Family'],
    examTip: 'Learn this quote -- it is the novella\'s definition of Christmas spirit. Use it as a thesis statement in any essay about the meaning of Christmas in the text.',
  },
  {
    id: 6,
    quote: '"Are there no prisons? Are there no workhouses?"',
    speaker: 'Scrooge',
    stave: 'Stave 1',
    context: 'Scrooge\'s response to charity collectors asking for donations for the poor.',
    analysis:
      'Scrooge parrots the language of Victorian utilitarian policy. The rhetorical questions dismiss personal responsibility -- if institutions exist, why should he help? Dickens makes the reader hear how cruel this reasoning sounds from an individual. The Ghost of Christmas Present throws these exact words back at Scrooge in Stave 3, transforming them from dismissal into accusation.',
    themes: ['Social Responsibility', 'Greed and Capitalism'],
    examTip: 'Link to the Poor Law Amendment Act of 1834 and workhouse conditions for strong contextual marks. Track how the quote echoes back in Stave 3.',
  },
  {
    id: 7,
    quote: '"If they would rather die, they had better do it, and decrease the surplus population."',
    speaker: 'Scrooge',
    stave: 'Stave 1',
    context: 'Scrooge\'s dismissal of the poor when asked to donate to charity.',
    analysis:
      'A direct allusion to Thomas Malthus\'s theory that poverty was a natural check on overpopulation. Dickens puts this utilitarian philosophy into Scrooge\'s mouth to expose its inhumanity. The Ghost of Christmas Present repeats these words about Tiny Tim in Stave 3, making the abstract language confront a real, specific child.',
    themes: ['Social Responsibility', 'Greed and Capitalism'],
    examTip: 'Always analyse the Malthusian allusion. The structural echo in Stave 3 is one of the most powerful moments in the novella -- discuss it in essays about Dickens\'s technique.',
  },
  {
    id: 8,
    quote: '"I wear the chain I forged in life. I made it link by link, and yard by yard."',
    speaker: 'Marley\'s Ghost',
    stave: 'Stave 1',
    context: 'Marley explains the chain he wears in death, made from the instruments of commerce.',
    analysis:
      'The chain is Dickens\'s central metaphor for the cumulative consequences of selfishness. The craftsmanship language -- "forged," "link by link," "yard by yard" -- makes greed feel deliberate. First-person ownership ("I forged," "I made") emphasises personal responsibility. The chain is composed of "cash-boxes, keys, padlocks, ledgers" -- commerce becomes punishment.',
    themes: ['Greed and Capitalism', 'Death and Mortality', 'Redemption'],
    examTip: 'The single most important symbol. Analyse its components and the craftsmanship language. Compare with Scrooge\'s liberation in Stave 5.',
  },
  {
    id: 9,
    quote: '"Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence were, all, my business."',
    speaker: 'Marley\'s Ghost',
    stave: 'Stave 1',
    context: 'Marley\'s anguished declaration about what his true purpose in life should have been.',
    analysis:
      'Marley redefines "business" from commerce to compassion -- the key thematic pivot of the novella. The anaphoric repetition of "my business" with increasing moral weight creates a hammering rhythm. The listing of virtues (charity, mercy, forbearance, benevolence) directly contrasts with the listing of Scrooge\'s vices in the opening paragraph.',
    themes: ['Social Responsibility', 'Redemption'],
    examTip: 'This is Dickens\'s thesis statement. Use it in ANY essay about social responsibility. The redefinition of "business" is the moral argument in a single word.',
  },
  {
    id: 10,
    quote: '"A solitary child, neglected by his friends, is left there still."',
    speaker: 'Narrator',
    stave: 'Stave 2',
    context: 'The vision of young Scrooge alone at boarding school during Christmas holidays.',
    analysis:
      'The emotional key to Scrooge\'s character. "Solitary" and "neglected" show his isolation began in childhood -- he was made cold, not born cold. "Left there still" is devastating: the child is still waiting, still alone. Dickens implies the lonely boy exists inside the old miser, buried but not gone. This generates the sympathy needed for the reader to want Scrooge to change.',
    themes: ['Isolation', 'Time and Memory'],
    examTip: 'This quote explains Scrooge\'s psychology. Use it to argue that Dickens generates sympathy before demanding change -- understanding the past is the first step.',
  },
  {
    id: 11,
    quote: '"Father is so much kinder than he used to be, that home\'s like Heaven!"',
    speaker: 'Fan',
    stave: 'Stave 2',
    context: 'Fan arrives at school to bring young Scrooge home for Christmas.',
    analysis:
      'This brief line reveals a history of domestic cruelty. "Than he used to be" implies Scrooge\'s father was once harsh -- explaining, though not excusing, Scrooge\'s own emotional coldness. The simile "like Heaven" is poignant given Fan\'s early death. Dickens hints at a cycle of coldness passed down through generations.',
    themes: ['Family', 'Isolation'],
    examTip: 'A deceptively important line. Use it to discuss how Dickens explains Scrooge\'s character through family history -- the cycle of emotional coldness.',
  },
  {
    id: 12,
    quote: '"He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil."',
    speaker: 'Scrooge (reflecting on Fezziwig)',
    stave: 'Stave 2',
    context: 'Scrooge watches Fezziwig\'s Christmas party and reflects on the power of employers.',
    analysis:
      'Scrooge himself articulates the novella\'s social message: employers have moral power over their workers\' lives. The balanced antithetical pairings ("happy or unhappy," "light or burdensome") present the choice as binary. This is a direct rebuke to his own treatment of Bob Cratchit -- and Scrooge knows it.',
    themes: ['Social Responsibility', 'Christmas Spirit'],
    examTip: 'One of the most important quotes for essays about employers and social responsibility. Scrooge already knows the truth -- his moral failure is choosing to ignore it.',
  },
  {
    id: 13,
    quote: '"Another idol has displaced me... a golden one."',
    speaker: 'Belle',
    stave: 'Stave 2',
    context: 'Belle releases Scrooge from their engagement because of his obsession with money.',
    analysis:
      'Belle identifies money as Scrooge\'s false god. "Idol" carries deliberate biblical weight -- the worship of a golden idol (the Golden Calf) is one of the most condemned sins in the Old Testament. Dickens frames greed as spiritual corruption, not merely a personality flaw. "Displaced" is precise: love has been physically pushed aside by gold.',
    themes: ['Greed and Capitalism', 'Isolation'],
    examTip: 'The biblical allusion elevates this from personal observation to spiritual judgement. Use it in essays about greed or Scrooge\'s character.',
  },
  {
    id: 14,
    quote: '"You fear the world too much. All your other hopes have merged into the hope of being beyond the chance of its sordid reproach."',
    speaker: 'Belle',
    stave: 'Stave 2',
    context: 'Belle diagnoses the psychology behind Scrooge\'s greed.',
    analysis:
      'Belle sees that Scrooge\'s greed is rooted in fear -- fear of poverty, vulnerability, and the world\'s judgement. His pursuit of money is defensive, not ambitious. This gives Scrooge psychological depth: he hoards wealth as armour against a world that hurt him as a child. Belle\'s diagnosis connects the lonely schoolboy to the miserly old man.',
    themes: ['Greed and Capitalism', 'Isolation', 'Time and Memory'],
    examTip: 'This quote gives Scrooge psychological complexity. Use it to argue that Dickens explains greed through fear, not just selfishness.',
  },
  {
    id: 15,
    quote: '"God bless Us, Every One!"',
    speaker: 'Tiny Tim',
    stave: 'Stave 3',
    context: 'Tiny Tim\'s words at the Cratchit family Christmas dinner.',
    analysis:
      'The novella\'s most famous line is a prayer for universal blessing. "Every One" does not exclude -- it includes Scrooge, the rich, the poor, the cruel and the kind. The fact that this prayer comes from the poorest, most vulnerable character is Dickens\'s sharpest moral point: those with the least give the most.',
    themes: ['Christmas Spirit', 'Social Responsibility'],
    examTip: 'Short but essential. Use it to discuss Tiny Tim\'s symbolic function and the irony that the most generous spirit belongs to the most vulnerable character.',
  },
  {
    id: 16,
    quote: '"Oh, a wonderful pudding! Bob Cratchit said, and calmly too, that he regarded it as the greatest success achieved by Mrs Cratchit since their marriage."',
    speaker: 'Narrator',
    stave: 'Stave 3',
    context: 'The Cratchit family celebrates their modest Christmas dinner.',
    analysis:
      'The comedy and warmth of Bob\'s deadpan compliment disguises real poverty. The pudding is "a small one for so large a family," but the Cratchits\' love transforms it into a triumph. "Calmly" adds humour -- Bob performs solemnity to honour his wife\'s effort. Dickens argues that wealth and happiness are not the same thing.',
    themes: ['Family', 'Christmas Spirit', 'Social Responsibility'],
    examTip: 'Use this to discuss how Dickens portrays the Cratchits\' poverty with warmth rather than despair. The tone is crucial to the moral argument.',
  },
  {
    id: 17,
    quote: '"If these shadows remain unaltered by the Future, the child will die."',
    speaker: 'Ghost of Christmas Present',
    stave: 'Stave 3',
    context: 'The Ghost warns Scrooge about Tiny Tim\'s fate.',
    analysis:
      'The conditional "if" is the most important word. Tiny Tim\'s death is not a prophecy but a warning -- the future can be changed. "Shadows" suggests possibilities, not certainties. Dickens places moral agency in the reader\'s hands: if children die, it is because we allow it.',
    themes: ['Social Responsibility', 'Death and Mortality', 'Redemption'],
    examTip: 'Focus on the conditional language. The word "if" turns prophecy into warning and gives Scrooge (and the reader) agency.',
  },
  {
    id: 18,
    quote: '"This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom."',
    speaker: 'Ghost of Christmas Present',
    stave: 'Stave 3',
    context: 'The Ghost reveals two wretched, allegorical children hidden beneath its robe.',
    analysis:
      'Dickens\'s most explicitly political passage. The children are allegories: Ignorance and Want are the products of society\'s neglect. "Yellow, meagre, ragged, scowling, wolfish" describes them in dehumanising terms. The warning that ignorance leads to "Doom" targets the Victorian ruling class directly: deny the poor education, and civilisation will fall.',
    themes: ['Social Responsibility', 'Greed and Capitalism'],
    examTip: 'The political heart of the novella. Link to the 1843 context -- ragged schools, child labour, the Poor Law. This passage was inspired by real conditions.',
  },
  {
    id: 19,
    quote: '"Come in! and know me better, man!"',
    speaker: 'Ghost of Christmas Present',
    stave: 'Stave 3',
    context: 'The Ghost\'s greeting to Scrooge on its first appearance.',
    analysis:
      'A warm and imperative invitation. "Come in!" commands engagement with the world rather than withdrawal. "Know me better" implies Scrooge must understand the present before he can change the future. The colloquial "man" adds warmth and informality -- this Ghost is approachable and generous, unlike the terrifying phantom of Stave 4.',
    themes: ['Christmas Spirit', 'Redemption'],
    examTip: 'Useful for comparing the three Ghosts. This one\'s warmth contrasts with the Past\'s gentle firmness and the Future\'s terrifying silence.',
  },
  {
    id: 20,
    quote: '"Are these the shadows of the things that Will be, or are they shadows of the things that May be, only?"',
    speaker: 'Scrooge',
    stave: 'Stave 4',
    context: 'Scrooge begs the Ghost of Christmas Yet to Come to tell him whether the future is fixed.',
    analysis:
      'The philosophical pivot of the novella. The distinction between "Will be" (definite) and "May be" (conditional) is crucial. Dickens\'s moral depends on the answer being "may be" -- free will exists, and redemption is always possible. This question transforms the Ghost\'s visions from prophecy to warning and gives Scrooge agency.',
    themes: ['Redemption', 'Time and Memory'],
    examTip: 'Analyse the modal verbs "will" and "may" closely. This question contains the entire philosophy of the novella in a single sentence.',
  },
  {
    id: 21,
    quote: '"The case of this unhappy man might be my own. My life tends that way, now."',
    speaker: 'Scrooge',
    stave: 'Stave 4',
    context: 'Scrooge reflects on the dead man whose possessions are being stolen.',
    analysis:
      'Scrooge begins connecting the vision to himself. "Tends that way" is careful -- his life is moving in this direction but has not arrived yet. There is still time. "Unhappy" is his own judgement: he recognises that greed produces misery, not security. This self-awareness precedes the gravestone revelation.',
    themes: ['Death and Mortality', 'Redemption', 'Greed and Capitalism'],
    examTip: 'Shows Scrooge\'s growing self-awareness before the climactic gravestone scene. Track his understanding through Stave 4.',
  },
  {
    id: 22,
    quote: '"My little, little child! My little child!"',
    speaker: 'Bob Cratchit',
    stave: 'Stave 4',
    context: 'Bob mourns Tiny Tim in the vision of the future.',
    analysis:
      'The heartbreaking simplicity of this line is its power. The fourfold repetition of "little" conveys grief too deep for elaborate language. Bob\'s pain is raw and unadorned. The diminutive "little" reminds the reader of how small and vulnerable Tiny Tim was, making society\'s failure to protect him feel criminal.',
    themes: ['Family', 'Death and Mortality', 'Social Responsibility'],
    examTip: 'Analyse the power of simple diction. Compare this with the elaborate language used to describe Scrooge -- grief strips away all artifice.',
  },
  {
    id: 23,
    quote: '"I will honour Christmas in my heart, and try to keep it all the year."',
    speaker: 'Scrooge',
    stave: 'Stave 4',
    context: 'Scrooge\'s vow at the gravestone, promising the Ghost he will change.',
    analysis:
      'Scrooge\'s promise extends Christmas from a single day to a permanent way of life. "Honour" carries connotations of reverence and duty. "Try" adds humility -- he does not claim perfection. "All the year" echoes Fred\'s Stave 1 speech about opening hearts freely. This vow answers Fred\'s definition of Christmas and completes Scrooge\'s moral journey.',
    themes: ['Redemption', 'Christmas Spirit'],
    examTip: 'The climactic vow. Link it back to Fred\'s Stave 1 speech to show structural unity. The word "try" is worth close analysis.',
  },
  {
    id: 24,
    quote: '"I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy."',
    speaker: 'Scrooge',
    stave: 'Stave 5',
    context: 'Scrooge wakes on Christmas morning, transformed.',
    analysis:
      'The triple simile mirrors the triple ghostly visitation. "Light" undoes his heaviness, "happy" undoes his misery, "merry" undoes his hostility. "School-boy" echoes the lonely child of Stave 2 -- Scrooge reclaims childhood joy. The anaphoric "I am" asserts a new identity with confidence. The rhythm is giddy and breathless.',
    themes: ['Redemption', 'Christmas Spirit'],
    examTip: 'The triple structure echoes the three ghosts. Each simile reverses a specific quality of the old Scrooge. Analyse this symmetry.',
  },
  {
    id: 25,
    quote: '"I\'ll raise your salary, and endeavour to assist your struggling family."',
    speaker: 'Scrooge',
    stave: 'Stave 5',
    context: 'Scrooge tells Bob Cratchit his intentions on Boxing Day.',
    analysis:
      'Scrooge translates moral transformation into practical action. "Raise your salary" addresses economic injustice. "Endeavour" shows commitment. "Struggling" is the key word -- Scrooge now sees the Cratchits as real people with real difficulties, not abstractions. Personal redemption produces social reform.',
    themes: ['Social Responsibility', 'Redemption'],
    examTip: 'Use this to show that Dickens insists spiritual change must produce material change. Redemption is not just feeling better -- it is DOING better.',
  },
  {
    id: 26,
    quote: '"He became as good a friend, as good a master, and as good a man, as the good old city knew."',
    speaker: 'Narrator',
    stave: 'Stave 5',
    context: 'The narrator\'s summary of Scrooge\'s lasting transformation.',
    analysis:
      'The triple structure -- friend, master, man -- proves transformation across every sphere: personal, professional, and moral. The fourfold repetition of "good" reinforces completeness. "As the good old city knew" connects Scrooge\'s private redemption to public recognition. The rhythm and balance give this sentence the weight of a definitive verdict.',
    themes: ['Redemption', 'Social Responsibility', 'Christmas Spirit'],
    examTip: 'The definitive statement of Scrooge\'s change. Analyse the triple structure and link each element (friend/master/man) to specific evidence.',
  },
  {
    id: 27,
    quote: '"He had no further intercourse with Spirits, but lived upon the Total Abstinence Principle, ever afterwards."',
    speaker: 'Narrator',
    stave: 'Stave 5',
    context: 'The narrator\'s closing observation about Scrooge\'s life after transformation.',
    analysis:
      'A rare moment of Dickensian humour. The pun on "Spirits" (ghosts and alcohol) lightens the tone. "Total Abstinence" was a temperance movement phrase, adding another layer of wordplay. The joke signals that Scrooge\'s new life is joyful, not grim. He has internalised the lesson and no longer needs supernatural intervention.',
    themes: ['Redemption'],
    examTip: 'Use this to discuss Dickens\'s narrative voice and his use of humour to close the novella on a warm, reassuring note.',
  },
  {
    id: 28,
    quote: '"I mean to give him the same chance every year, whether he likes it or not, for I pity him."',
    speaker: 'Fred',
    stave: 'Stave 3',
    context: 'Fred explains at his party why he continues to invite Scrooge to Christmas dinner.',
    analysis:
      'Fred refuses to give up on Scrooge. "Pity" is crucial -- he sees his uncle as suffering, not as an enemy. This mirrors Dickens\'s own approach: understanding and patience, not punishment, lead to reform. Fred\'s persistence is ultimately rewarded in Stave 5 when Scrooge arrives at his door.',
    themes: ['Christmas Spirit', 'Family', 'Redemption'],
    examTip: 'Fred\'s constancy is key. He does not change -- he waits for Scrooge to change. Discuss what this says about Dickens\'s view of patience and forgiveness.',
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function KeyQuotesPage() {
  // Group quotes by stave for navigation
  const staves = ['Stave 1', 'Stave 2', 'Stave 3', 'Stave 4', 'Stave 5']

  return (
    <div className="space-y-10 pb-16">
      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
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
              <Quote className="mr-1 size-3 text-violet-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Key Quotes Bank
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            A Christmas Carol by Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Twenty-eight essential quotations organised by stave. Each quote
            includes speaker, context, detailed language analysis, theme links,
            and an exam technique tip.
          </p>
        </div>
      </section>

      {/* Jump to stave */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 text-heading-md font-heading text-foreground">
              Jump to a Stave
            </h2>
            <div className="flex flex-wrap gap-2">
              {staves.map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/40"
                >
                  <BookOpen className="size-3.5 text-violet-400" />
                  {s}
                  <span className="text-xs text-muted-foreground">
                    ({quotes.filter((q) => q.stave === s).length})
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quotes by stave */}
      {staves.map((stave) => {
        const staveQuotes = quotes.filter((q) => q.stave === stave)
        return (
          <section
            key={stave}
            id={stave.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-8 space-y-5"
          >
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                {stave.split(' ')[1]}
              </div>
              <h2 className="text-heading-lg font-heading text-foreground">
                {stave}
              </h2>
            </div>

            <div className="grid gap-4">
              {staveQuotes.map((q) => (
                <Card key={q.id}>
                  <CardContent className="space-y-4 p-5 sm:p-6">
                    {/* Quote */}
                    <div className="rounded-lg border-l-4 border-l-primary/40 bg-muted/30 p-4">
                      <p className="text-body-md font-medium italic text-foreground">
                        {q.quote}
                      </p>
                      <p className="mt-2 text-xs font-mono text-primary">
                        {q.speaker} -- {q.stave}
                      </p>
                    </div>

                    {/* Context */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        Context
                      </h4>
                      <p className="text-body-sm text-muted-foreground">
                        {q.context}
                      </p>
                    </div>

                    {/* Analysis */}
                    <div>
                      <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                        Language Analysis
                      </h4>
                      <p className="text-body-sm text-muted-foreground">
                        {q.analysis}
                      </p>
                    </div>

                    {/* Themes & Exam Tip */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                      <div className="flex-1">
                        <h4 className="mb-1.5 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                          Themes
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {q.themes.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1.5 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Lightbulb className="size-3 text-clay-600" />
                          Exam Tip
                        </h4>
                        <p className="text-body-sm text-muted-foreground">
                          {q.examTip}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
