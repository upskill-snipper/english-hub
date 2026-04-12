import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'

export const metadata: Metadata = {
  title: 'A Christmas Carol — Study Guide | The English Hub',
  description:
    'In-depth study guide for A Christmas Carol by Charles Dickens: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/a-christmas-carol',
  },
}

const data: TextGuideData = {
  title: 'A Christmas Carol',
  author: 'Charles Dickens',
  year: 'published 1843',
  category: 'Novella',
  badge: 'AQA / Edexcel / Eduqas',
  intro:
    'Charles Dickens\'s beloved novella follows the miserly Ebenezer Scrooge through a single Christmas Eve night as he is visited by three supernatural spirits who force him to confront his past, present and future. A powerful moral fable about redemption, social responsibility and the possibility of personal change, it remains one of the most influential works of English literature and helped shape the modern celebration of Christmas.',
  quickInfo: {
    genre: 'Gothic novella / Morality tale',
    setting: 'London, Victorian England, 1840s',
    length: '~28,500 words, 5 staves',
    published: '1843',
  },
  plotSummary: [
    'Stave One opens on Christmas Eve with the declaration that Jacob Marley is dead. His former business partner, Ebenezer Scrooge, is a cold, tight-fisted moneylender who despises Christmas and all human warmth. He refuses his nephew Fred\'s dinner invitation, dismisses two charity collectors with the suggestion that the poor should go to prisons and workhouses, and grudgingly allows his underpaid clerk Bob Cratchit a day off for Christmas. That night, Marley\'s ghost appears in Scrooge\'s chambers, bound in heavy chains forged from his own greed, and warns Scrooge that he will share the same fate unless he changes. Three spirits will visit him.',

    'In Stave Two, the Ghost of Christmas Past — a strange, flickering figure — takes Scrooge back through his memories. He sees himself as a lonely boy left at school over Christmas, then as a young apprentice enjoying the warmth and generosity of his employer, Mr Fezziwig. Most painfully, he watches his younger self lose Belle, the woman he loved, because his obsession with money replaced his capacity for affection. Belle tells him that "a golden idol" has displaced her, and Scrooge begs the spirit to show him no more. In Stave Three, the Ghost of Christmas Present — a jolly giant robed in green, seated on a throne of food — shows Scrooge how others celebrate despite their poverty. The Cratchit family enjoy a modest Christmas dinner with enormous love, and Scrooge is moved by the sight of Tiny Tim, Bob\'s disabled youngest son. The spirit warns that without change, the child will die. The ghost also reveals two wretched children hidden beneath his robes — Ignorance and Want — and tells Scrooge to beware them both, "but most of all beware this boy, for on his brow I see that written which is Doom."',

    'Stave Four introduces the Ghost of Christmas Yet to Come, a silent, hooded phantom who shows Scrooge a possible future. Businessmen joke callously about a recent death; thieves pawn a dead man\'s belongings, even his bed curtains; and a body lies alone and uncared for. Scrooge discovers that the dead man is himself. Meanwhile, the Cratchit family mourn the death of Tiny Tim, and Bob can barely speak through his grief. Scrooge clings to the phantom\'s robes and begs for the chance to change, promising "I will honour Christmas in my heart, and try to keep it all the year."',

    'Stave Five brings Scrooge\'s joyful transformation. He wakes on Christmas morning, giddy with relief and happiness. He sends a huge turkey to the Cratchit family, donates generously to the charity collectors, attends Fred\'s dinner party, and raises Bob\'s salary. He becomes "as good a friend, as good a master, and as good a man, as the good old city knew." Tiny Tim does not die, and Scrooge keeps Christmas well from that day forward. Dickens closes with Tiny Tim\'s words: "God bless Us, Every One!"',
  ],
  characters: [
    {
      name: 'Ebenezer Scrooge',
      role: 'Protagonist, miserly moneylender',
      body: 'Scrooge begins as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner" — Dickens heaps adjectives to make his coldness overwhelming. His transformation is the entire arc of the novella: from a man who sees other people only as obstacles or opportunities for profit to one who recognises his connection to the rest of humanity. Dickens uses Scrooge to argue that no one is beyond redemption, and that empathy is a choice that can be made at any point in life.',
    },
    {
      name: 'Bob Cratchit',
      role: 'Scrooge\'s underpaid clerk',
      body: 'Bob earns fifteen shillings a week and works in a freezing office with a "very small fire." He represents the honest, hard-working poor who are exploited by employers like Scrooge. Despite his poverty, he is generous, loving and loyal. Dickens uses him to show that wealth has nothing to do with moral worth, and his devotion to Tiny Tim makes the reader feel the human cost of economic cruelty.',
    },
    {
      name: 'Tiny Tim',
      role: 'Bob Cratchit\'s youngest son',
      body: 'Tiny Tim is a disabled child whose life depends directly on whether Scrooge will change. His famous line, "God bless Us, Every One!", makes him a symbol of Christian charity and innocence. Dickens uses him strategically: his potential death is the emotional lever that cracks Scrooge\'s selfishness. He also represents the thousands of poor Victorian children who died because society would not care for them.',
    },
    {
      name: 'Fred',
      role: 'Scrooge\'s nephew',
      body: 'Fred is everything Scrooge is not: warm, cheerful and forgiving. He insists on inviting Scrooge to Christmas dinner every year despite being rebuffed. He argues that Christmas is "a good time: a kind, forgiving, charitable, pleasant time." Fred provides a living example that generosity and happiness are available to Scrooge if he will only accept them.',
    },
    {
      name: 'Jacob Marley',
      role: 'Scrooge\'s dead business partner',
      body: 'Marley\'s ghost is a terrifying warning: he wears the chain "I forged in life," made "link by link, and yard by yard." He tells Scrooge that his own chain was "as heavy and as long as this" seven Christmases ago and has grown since. Marley represents the consequences of a life lived without compassion. His most important line is his cry that "Mankind was my business!" — the duty he ignored while alive.',
    },
    {
      name: 'Belle',
      role: 'Scrooge\'s former fiancee',
      body: 'Belle appears only in the visions of Christmas Past, but she is crucial. She releases Scrooge from their engagement because "another idol has displaced me... a golden one." Her departure marks the moment Scrooge chose money over love. Seeing her later, happily married with children, shows Scrooge the domestic joy he sacrificed. She is Dickens\'s proof that Scrooge\'s isolation is self-inflicted.',
    },
    {
      name: 'The Three Ghosts',
      role: 'Supernatural visitors',
      body: 'The Ghost of Christmas Past is ethereal and flickering, representing memory and truth that cannot be extinguished. The Ghost of Christmas Present is a generous giant surrounded by abundance, embodying the warmth of the season but also revealing the hidden suffering of Ignorance and Want. The Ghost of Christmas Yet to Come is a dark, silent phantom, the most frightening of the three, representing death and the consequences of an unchanged life. Together they form a structured moral education: regret, empathy, then fear — designed to break through Scrooge\'s defences.',
    },
  ],
  themes: [
    {
      title: 'Redemption and transformation',
      body: 'The entire novella is built around one question: can a person change? Dickens answers emphatically yes. Scrooge\'s transformation from miser to generous benefactor is presented as genuine and lasting — he becomes "as good a friend, as good a master, and as good a man, as the good old city knew." Dickens structures the three visitations as a process of moral education: confronting the past, witnessing the present, and fearing the future. The message is that it is never too late to change, but that change requires honestly facing the consequences of one\'s actions.',
    },
    {
      title: 'Poverty and social injustice',
      body: 'Dickens wrote A Christmas Carol partly as a direct response to the 1843 parliamentary report on child labour. When Scrooge asks whether there are "no prisons? no workhouses?", Dickens puts the callous language of Victorian political economy into his mouth to expose its cruelty. The Cratchit family live in real poverty — their Christmas pudding is tiny, Martha must work away from home, and Tiny Tim may die for want of proper care. The children Ignorance and Want, hidden beneath the Ghost of Christmas Present\'s robe, are Dickens\'s most explicit social message: "Are there no prisons?" the spirit throws back at Scrooge, using his own words against him.',
    },
    {
      title: 'Family and togetherness',
      body: 'Every happy scene in the novella revolves around family: young Scrooge welcomed by his sister Fan, the Fezziwigs\' party, Fred\'s dinner, and above all the Cratchit Christmas. Every miserable scene shows isolation: Scrooge alone at school, alone in his chambers, alone and dead with no one to mourn him. Dickens makes the connection between loneliness and cruelty absolute — Scrooge\'s refusal to participate in family life is both symptom and cause of his moral failure.',
    },
    {
      title: 'Christmas spirit and generosity',
      body: 'For Dickens, Christmas is not merely a festival but a moral principle — a time when people should acknowledge their shared humanity. Fred defines it as "the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely." The novella helped create the modern idea of Christmas as a season of charity and goodwill. Scrooge\'s transformation is measured by his acts of giving: the turkey, the donation, the raised salary, the family dinner.',
    },
    {
      title: 'Greed versus generosity',
      body: 'Dickens sets up a stark moral opposition. Scrooge\'s wealth makes him wretched; the Cratchits\' poverty does not prevent their joy. Fezziwig spends only "three or four pounds" on his party but creates enormous happiness. Marley\'s chains are forged from "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel" — the very instruments of commerce become instruments of punishment. Dickens insists that money spent on others creates happiness, while money hoarded creates only isolation and spiritual death.',
    },
  ],
  historicalContext: [
    'A Christmas Carol was published on 19 December 1843, during a period of extreme economic inequality in Victorian England. The Industrial Revolution had created enormous wealth for factory owners and financiers while driving millions of working-class families into grinding poverty. Cities like London were overcrowded, polluted and disease-ridden. The gap between rich and poor was vast and growing, and Dickens saw this injustice at first hand throughout his life.',

    'The Poor Law Amendment Act of 1834 had established the workhouse system, designed to make poverty so unpleasant that people would do anything to avoid it. Families were separated, conditions were deliberately harsh, and the poor were treated as morally deficient rather than economically disadvantaged. When Scrooge says that the poor should go to prisons and workhouses, and suggests they had better die "and decrease the surplus population," Dickens is quoting the utilitarian philosophy of Thomas Malthus, who argued that poverty was a natural check on overpopulation.',

    'Dickens had personal experience of poverty and its humiliations. When he was twelve years old, his father was imprisoned in the Marshalsea debtors\' prison, and the young Charles was sent to work in Warren\'s Blacking Factory, pasting labels on bottles of boot polish. This traumatic experience shaped his entire literary career and gave him a lifelong empathy with the poor and a fury at those who dismissed their suffering. A Christmas Carol was partly inspired by a visit to the ragged schools of Field Lane and by the government report on child labour that he read in 1843.',

    'The novella was a deliberate intervention in public debate. Dickens originally planned to write a political pamphlet called "An Appeal to the People of England on Behalf of the Poor Man\'s Child," but decided that a story would reach more hearts than an argument. He wrote A Christmas Carol in just six weeks and insisted on its affordable price of five shillings so that ordinary readers could buy it. The book sold out its first edition of 6,000 copies by Christmas Eve and is widely credited with helping to revive Christmas traditions in England and reshape public attitudes toward charity and social responsibility.',
  ],
  quotations: [
    {
      quote: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"',
      who: 'Narrator — Stave One',
      analysis: 'Dickens opens with a barrage of violent adjectives, each one an act of physical cruelty. The listing creates a sense of relentless, mechanical greed — Scrooge is defined entirely by what he takes from others.',
    },
    {
      quote: '"Are there no prisons? Are there no workhouses?"',
      who: 'Scrooge — Stave One',
      analysis: 'Scrooge echoes the utilitarian arguments of the Victorian establishment. Dickens makes the reader hear how cruel these words sound when spoken aloud, turning political policy into personal callousness.',
    },
    {
      quote: '"If they would rather die, they had better do it, and decrease the surplus population."',
      who: 'Scrooge — Stave One',
      analysis: 'A direct allusion to Malthus\'s theory of population. The Ghost of Christmas Present throws this line back at Scrooge in Stave Three, forcing him — and the reader — to confront its inhumanity.',
    },
    {
      quote: '"I wear the chain I forged in life. I made it link by link, and yard by yard."',
      who: 'Marley\'s Ghost — Stave One',
      analysis: 'The chain is Dickens\'s most powerful metaphor: every selfish act in life becomes a physical weight in death. The imagery of craftsmanship — "link by link" — makes greed feel deliberate and cumulative.',
    },
    {
      quote: '"Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence were, all, my business."',
      who: 'Marley\'s Ghost — Stave One',
      analysis: 'Marley redefines "business" from commerce to compassion. This is Dickens\'s thesis statement: every person\'s true business is the welfare of others, and ignoring that duty has consequences.',
    },
    {
      quote: '"A solitary child, neglected by his friends, is left there still."',
      who: 'Narrator — Stave Two',
      analysis: 'The image of young Scrooge alone at school is the emotional key to his character. Dickens shows that cruelty often begins as a response to suffering, and that understanding someone\'s past is the first step toward changing their future.',
    },
    {
      quote: '"Another idol has displaced me... a golden one."',
      who: 'Belle — Stave Two',
      analysis: 'Belle identifies money as Scrooge\'s false god. The word "idol" carries religious weight — Scrooge has committed a kind of spiritual idolatry by worshipping wealth instead of love.',
    },
    {
      quote: '"A small matter to make these silly folks so full of gratitude... He has the power to render us happy or unhappy."',
      who: 'Narrator / Scrooge — Stave Two (on Fezziwig)',
      analysis: 'Scrooge himself recognises that an employer\'s small kindness can create enormous happiness. Fezziwig spent little money but gave generously of his spirit — the opposite of Scrooge\'s treatment of Bob Cratchit.',
    },
    {
      quote: '"Oh, a wonderful pudding! Bob Cratchit said, and calmly too, that he regarded it as the greatest success achieved by Mrs Cratchit since their marriage."',
      who: 'Narrator — Stave Three',
      analysis: 'The Cratchit Christmas dinner is modest by any standard, but Dickens describes it with such warmth that it becomes a feast. The family\'s gratitude and love transform poverty into abundance.',
    },
    {
      quote: '"God bless us, every one!"',
      who: 'Tiny Tim — Stave Three',
      analysis: 'The novella\'s most famous line is a prayer for universal blessing. Tiny Tim asks for grace not just for his own family but for everyone — the generosity of spirit that Scrooge must learn to share.',
    },
    {
      quote: '"If these shadows remain unaltered by the Future, the child will die."',
      who: 'Ghost of Christmas Present — Stave Three',
      analysis: 'The conditional "if" is crucial: Tiny Tim\'s death is not inevitable but depends on whether society — represented by Scrooge — will act. Dickens places moral responsibility directly on the reader.',
    },
    {
      quote: '"This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom."',
      who: 'Ghost of Christmas Present — Stave Three',
      analysis: 'Dickens\'s most explicitly political passage. Ignorance and Want are allegorical children — products of society\'s neglect. The warning that ignorance leads to "Doom" is aimed directly at the Victorian ruling class.',
    },
    {
      quote: '"Are these the shadows of the things that Will be, or are they shadows of the things that May be, only?"',
      who: 'Scrooge — Stave Four',
      analysis: 'Scrooge grasps the central moral of the novella: the future is not fixed. This question transforms the Ghost\'s visions from prophecy to warning, and gives Scrooge — and the reader — agency and hope.',
    },
    {
      quote: '"I will honour Christmas in my heart, and try to keep it all the year."',
      who: 'Scrooge — Stave Four',
      analysis: 'Scrooge\'s vow is not just about the festive season but about maintaining compassion and generosity as a permanent way of life. The word "try" adds humility — change is a daily effort, not a single dramatic gesture.',
    },
    {
      quote: '"He became as good a friend, as good a master, and as good a man, as the good old city knew."',
      who: 'Narrator — Stave Five',
      analysis: 'Dickens uses the triple structure — friend, master, man — to show that Scrooge\'s transformation is complete in every sphere of life: personal, professional and moral. The repetition of "good" reinforces the totality of his change.',
    },
    {
      quote: '"He had no further intercourse with Spirits, but lived upon the Total Abstinence Principle, ever afterwards."',
      who: 'Narrator — Stave Five',
      analysis: 'A rare moment of Dickensian humour at the close. The pun on "spirits" (ghosts and alcohol) lightens the tone and reassures the reader that Scrooge\'s transformation is joyful, not grim.',
    },
    {
      quote: '"Old Marley was as dead as a door-nail."',
      who: 'Narrator — Stave One',
      analysis: 'The famous opening line uses a common simile to establish a matter-of-fact, conversational tone. Dickens immediately addresses the reader directly, establishing the intimate storytelling voice that runs through the entire novella.',
    },
    {
      quote: '"The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait."',
      who: 'Narrator — Stave One',
      analysis: 'Dickens uses pathetic fallacy to make Scrooge\'s inner coldness visible on his body. The cold is both literal (he is too mean to pay for heating) and metaphorical (he has frozen out all human warmth).',
    },
    {
      quote: '"I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy."',
      who: 'Scrooge — Stave Five',
      analysis: 'The triple simile mirrors the triple structure of the ghostly visits. Each comparison — lightness, happiness, merriment — undoes one of the qualities that defined the old Scrooge: heaviness of spirit, misery and hostility to joy.',
    },
    {
      quote: '"The only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely."',
      who: 'Fred — Stave One',
      analysis: 'Fred\'s defence of Christmas defines the festival not as religious ritual but as a moment of collective empathy. The metaphor of "shut-up hearts" echoes the imagery of Scrooge\'s locked counting-house and closed-off life.',
    },
    {
      quote: '"Darkness is cheap, and Scrooge liked it."',
      who: 'Narrator — Stave One',
      analysis: 'A brilliantly compressed sentence. On the surface it describes Scrooge\'s refusal to pay for candles, but symbolically it captures his preference for moral darkness — ignorance, isolation and the absence of enlightenment.',
    },
  ],
}

export default async function AChristmasCarolPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A Christmas Carol by Charles Dickens (1843) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright.
      </p>
    </>
  )
}
