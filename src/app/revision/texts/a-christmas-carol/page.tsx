import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

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

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'acc-1',
    question: 'How many staves (chapters) does A Christmas Carol have?',
    type: 'multiple-choice',
    options: ['Three', 'Four', 'Five', 'Six'],
    correctIndex: 2,
    explanation: 'The novella has five staves — Dickens chose the musical term "stave" instead of "chapter" because the word links to Christmas carols and songs, reinforcing the novella\'s joyful moral message.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'acc-2',
    question: 'What is the first line of the novella?',
    type: 'multiple-choice',
    options: ['"Bah! Humbug!"', '"Marley was dead: to begin with."', '"God bless Us, Every One!"', '"A merry Christmas, Uncle!"'],
    correctIndex: 1,
    explanation: '"Marley was dead: to begin with." Dickens establishes the death of Scrooge\'s business partner immediately. This is essential because Marley\'s ghost must return as a warning, and the reader needs to know he is truly dead for the supernatural events to have impact.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'acc-3',
    question: 'How does Dickens describe Scrooge at the start of the novella?',
    type: 'multiple-choice',
    options: ['"A kind and generous old man"', '"A squeezing, wrenching, grasping, scraping, clutching, covetous old sinner"', '"A quiet, modest gentleman"', '"A lonely but respectable businessman"'],
    correctIndex: 1,
    explanation: 'Dickens heaps adjectives upon Scrooge to make his coldness overwhelming. The accumulation of negative descriptors creates a portrait of total moral deficiency that makes his eventual transformation all the more dramatic.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'acc-4',
    question: 'Who is the Ghost of Christmas Present?',
    type: 'multiple-choice',
    options: ['A silent, hooded phantom', 'A flickering, ethereal figure', 'A jolly giant robed in green seated on a throne of food', 'A small, cheerful child'],
    correctIndex: 2,
    explanation: 'The Ghost of Christmas Present is a generous giant surrounded by abundance, embodying the warmth of the season. But he also reveals suffering: he shows Scrooge the hidden children Ignorance and Want beneath his robes.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'acc-5',
    question: 'Who says "God bless Us, Every One!"?',
    type: 'multiple-choice',
    options: ['Scrooge', 'Bob Cratchit', 'Tiny Tim', 'Fred'],
    correctIndex: 2,
    explanation: 'Tiny Tim speaks this famous line, which serves as the novella\'s moral conclusion. His words embody Christian charity, generosity, and inclusivity — the values Dickens wants the reader to embrace.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'acc-6',
    question: 'What did Jacob Marley\'s ghost wear that symbolised his punishment?',
    type: 'multiple-choice',
    options: ['A crown of thorns', 'Heavy chains forged from his own greed', 'A blindfold', 'Torn and ragged clothing'],
    correctIndex: 1,
    explanation: 'Marley wears the chain "I forged in life," made "link by link, and yard by yard." Each link represents a selfish act. Marley warns that Scrooge\'s own chain was already as heavy seven years ago and has grown since.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'acc-7',
    question: 'When was A Christmas Carol published?',
    type: 'multiple-choice',
    options: ['1837', '1843', '1851', '1860'],
    correctIndex: 1,
    explanation: 'The novella was published in 1843, during the Victorian era. Dickens wrote it partly as a response to the harsh conditions created by the 1834 Poor Law Amendment Act, which forced the destitute into workhouses.',
    topic: 'Context',
    difficulty: 'foundation',
  },
  {
    id: 'acc-8',
    question: 'What does Scrooge suggest the poor should go to when asked for charity?',
    type: 'multiple-choice',
    options: ['Churches', 'Hospitals', 'Prisons and workhouses', 'Schools'],
    correctIndex: 2,
    explanation: 'Scrooge dismisses the charity collectors by saying the poor should go to prisons and workhouses. This echoes the cruel provisions of the 1834 Poor Law, which Dickens despised. Scrooge\'s callousness is meant to shock the reader.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'acc-9',
    question: 'Why does Belle break off her engagement to Scrooge?',
    type: 'multiple-choice',
    options: ['She falls in love with someone else', 'Scrooge insults her family', 'His love of money has replaced his love for her', 'Her father forbids the marriage'],
    correctIndex: 2,
    explanation: 'Belle tells young Scrooge that "another idol has displaced me... a golden one." She releases him from their engagement because his obsession with wealth has replaced his capacity for love. This moment marks when Scrooge chose money over human connection.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'acc-10',
    question: 'What two children does the Ghost of Christmas Present reveal under his robes?',
    type: 'multiple-choice',
    options: ['Joy and Sorrow', 'Ignorance and Want', 'Hunger and Cold', 'Sin and Virtue'],
    correctIndex: 1,
    explanation: 'The wretched children Ignorance and Want are hidden beneath the ghost\'s robes. The ghost warns Scrooge to "beware them both, but most of all beware this boy" (Ignorance), "for on his brow I see that written which is Doom." Dickens argues that society\'s refusal to educate the poor will destroy everyone.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'acc-11',
    question: 'How does the structure of the three ghosts work as a moral education for Scrooge?',
    type: 'multiple-choice',
    options: ['Past, Present, Future — matching three random moments', 'Regret, empathy, then fear — designed to break through Scrooge\'s defences', 'Joy, sadness, then joy again', 'Warning, punishment, then reward'],
    correctIndex: 1,
    explanation: 'The ghosts form a structured moral education: Christmas Past produces regret, Christmas Present produces empathy for others\' suffering, and Christmas Yet to Come produces fear of the consequences of an unchanged life. Each stage breaks down another layer of Scrooge\'s defences.',
    topic: 'Writer\'s Methods',
    difficulty: 'higher',
  },
  {
    id: 'acc-12',
    question: 'What is the significance of Dickens calling the chapters "staves" rather than chapters?',
    type: 'multiple-choice',
    options: ['It was a printing error', 'A stave is a section of a song, linking the novella to music and Christmas carols', 'It was a common Victorian convention', 'It sounds more formal'],
    correctIndex: 1,
    explanation: 'A stave is a verse or section of a song. By using this musical term, Dickens connects his novella to the tradition of Christmas carols, reinforcing its message of joy, generosity, and communal celebration.',
    topic: 'Writer\'s Methods',
    difficulty: 'higher',
  },
  {
    id: 'acc-13',
    question: 'What does Marley\'s cry that "Mankind was my business!" mean?',
    type: 'multiple-choice',
    options: ['He regrets not expanding his company', 'He realises his true duty was caring for other people, not accumulating wealth', 'He wants to return to his job', 'He blames mankind for his death'],
    correctIndex: 1,
    explanation: 'Marley\'s cry expresses the novella\'s central moral: the true business of life is caring for other people, not making money. He ignored this duty while alive and is now condemned to wander in chains. This is the lesson Scrooge must learn.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'acc-14',
    question: 'How does Dickens use Tiny Tim strategically in the narrative?',
    type: 'multiple-choice',
    options: ['As a source of comedy', 'As the emotional lever that cracks Scrooge\'s selfishness and represents the thousands of poor Victorian children who died', 'As a minor background character', 'To show the Cratchits are irresponsible parents'],
    correctIndex: 1,
    explanation: 'Tiny Tim\'s potential death is the emotional lever that cracks Scrooge\'s selfishness. He represents the thousands of poor Victorian children who died because society would not care for them. The ghost\'s warning that "the child will die" directly links Scrooge\'s miserliness to real human consequences.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'acc-15',
    question: 'Why is it significant that Scrooge\'s transformation happens on Christmas morning?',
    type: 'multiple-choice',
    options: ['It is a coincidence', 'Christmas represents rebirth and redemption, mirroring Christian ideas of salvation', 'It was the only day Scrooge was not working', 'The ghosts could only appear at Christmas'],
    correctIndex: 1,
    explanation: 'Christmas morning symbolises rebirth and new beginnings, mirroring Christian ideas of redemption and salvation. Scrooge waking transformed on Christmas Day suggests that change is always possible and that generosity should be practised year-round.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'acc-16',
    question: 'What does the 1834 Poor Law Amendment Act have to do with the novella?',
    type: 'multiple-choice',
    options: ['It inspired the ghost scenes', 'It created harsh workhouses for the poor, which Dickens attacks through Scrooge\'s callous attitudes', 'It banned Christmas celebrations', 'It improved conditions for workers'],
    correctIndex: 1,
    explanation: 'The 1834 Poor Law forced the destitute into brutal workhouses designed to be as unpleasant as possible. Scrooge\'s suggestion that the poor should go to "prisons and workhouses" echoes this cruel policy, which Dickens campaigned against throughout his career.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'acc-17',
    question: 'How does Dickens use the contrast between light and darkness throughout the novella?',
    type: 'multiple-choice',
    options: ['To describe the weather', 'Light represents warmth, generosity and redemption; darkness represents isolation and moral blindness', 'To show the time of day', 'There is no consistent pattern'],
    correctIndex: 1,
    explanation: 'Dickens consistently associates light with warmth and generosity (the Cratchits\' firelight, Christmas candles) and darkness with Scrooge\'s cold isolation. Scrooge\'s transformation is marked by a movement from darkness into light, reflecting his moral awakening.',
    topic: 'Writer\'s Methods',
    difficulty: 'grade-9',
  },
  {
    id: 'acc-18',
    question: 'Why does Dickens make Scrooge\'s redemption so exaggerated and joyful in Stave Five?',
    type: 'multiple-choice',
    options: ['To provide a happy ending for children', 'To argue that no one is beyond redemption and to model the generosity he wants Victorian society to embrace', 'Because it was fashionable at the time', 'To make the novella longer'],
    correctIndex: 1,
    explanation: 'The exaggerated joy of Scrooge\'s transformation is Dickens\'s argument that change is possible for anyone. By making Scrooge\'s generosity so complete and infectious, Dickens models the behaviour he wants his readers — particularly wealthy Victorian readers — to adopt.',
    topic: 'Writer\'s Methods',
    difficulty: 'grade-9',
  },
  {
    id: 'acc-19',
    question: 'How does the Ghost of Christmas Yet to Come differ from the other ghosts, and why?',
    type: 'multiple-choice',
    options: ['It is friendlier', 'It is a silent, hooded phantom representing death, designed to produce fear as the final stage of Scrooge\'s moral education', 'It speaks the most', 'It shows Scrooge happy memories'],
    correctIndex: 1,
    explanation: 'The final ghost is a dark, silent phantom — the most frightening of the three. Its silence forces Scrooge to interpret what he sees without guidance. It represents death and the consequences of an unchanged life, completing the sequence of regret (Past), empathy (Present), and fear (Future).',
    topic: 'Characters',
    difficulty: 'grade-9',
  },
  {
    id: 'acc-20',
    question: 'What is the significance of Scrooge\'s employer Mr Fezziwig in the narrative?',
    type: 'multiple-choice',
    options: ['He is a minor character with no importance', 'He represents the generous employer Scrooge could have been, proving that wealth and kindness are compatible', 'He is Scrooge\'s enemy', 'He taught Scrooge to value money'],
    correctIndex: 1,
    explanation: 'Mr Fezziwig represents the kind, generous employer who uses his wealth to create happiness. His warmth contrasts sharply with Scrooge\'s miserliness and proves that being a good employer is a choice. Scrooge\'s recognition of this during the Past vision is a key step in his transformation.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Redemption and Transformation',
    summary: 'Scrooge\'s transformation from miser to generous benefactor is the entire arc of the novella.',
    keyPoints: [
      'Dickens argues that no one is beyond redemption',
      'The three ghosts provide a structured moral education: regret, empathy, fear',
      'Scrooge\'s change is instant and complete in Stave Five',
      '"I will honour Christmas in my heart, and try to keep it all the year"',
      'Christmas morning symbolises rebirth and new beginnings',
    ],
  },
  {
    topic: 'Social Responsibility and Poverty',
    summary: 'Dickens attacks Victorian society\'s treatment of the poor and argues for collective responsibility.',
    keyPoints: [
      'Scrooge\'s "prisons and workhouses" echoes the cruel 1834 Poor Law',
      'Marley\'s cry: "Mankind was my business!"',
      'Ignorance and Want beneath the ghost\'s robes represent society\'s hidden suffering',
      'Tiny Tim represents thousands of poor children dying from neglect',
      'Dickens wrote the novella partly as social campaigning',
    ],
  },
  {
    topic: 'Family and Togetherness',
    summary: 'Dickens contrasts Scrooge\'s isolation with the warmth of families like the Cratchits.',
    keyPoints: [
      'The Cratchits are poor but rich in love and togetherness',
      'Fred represents warmth and forgiveness despite Scrooge\'s rejection',
      'Belle\'s happy family shows what Scrooge sacrificed for money',
      'Scrooge\'s cold solitude is presented as self-inflicted',
      'The novella ends with Scrooge joining Fred\'s dinner party, re-entering the family',
    ],
  },
  {
    topic: 'Greed and Generosity',
    summary: 'The novella presents greed as a destructive force and generosity as the path to happiness.',
    keyPoints: [
      'Scrooge hoards wealth while Bob Cratchit earns fifteen shillings a week',
      'Marley\'s chains are forged from acts of selfishness',
      'Mr Fezziwig proves that wealth and kindness are compatible',
      'The thieves pawning the dead man\'s belongings show greed\'s ultimate destination',
      'Scrooge\'s final generosity — the turkey, the raise, the charity donation — models Dickens\'s ideal',
    ],
  },
  {
    topic: 'The Supernatural',
    summary: 'Dickens uses ghosts as a dramatic device to force Scrooge to confront truths he has been avoiding.',
    keyPoints: [
      'Marley\'s ghost serves as a terrifying warning',
      'Each ghost has a distinct appearance matching its function',
      'The supernatural framework draws on the Gothic tradition',
      'The ghosts allow Dickens to compress an entire moral education into one night',
      'The Ghost of Christmas Yet to Come is the most frightening because it is silent',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Dickens present Scrooge\'s transformation in A Christmas Carol?',
  'How does Dickens use the ghosts to convey his message about social responsibility?',
  'How does Dickens explore the theme of poverty and its effects in A Christmas Carol?',
  'How does Dickens present the importance of family and togetherness?',
  'How does Dickens use the character of Tiny Tim to influence the reader?',
]

export default async function AChristmasCarolPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <TextStudyHub
        textName="A Christmas Carol"
        textType="novella"
        examBoard="AQA"
        basePath="/revision/texts/a-christmas-carol"
        subPages={[
          { id: 'read', href: '/revision/texts/a-christmas-carol/read', icon: 'read' as const, title: 'Read Full Text', description: 'With annotations' },
          { id: 'staves', href: '/revision/texts/a-christmas-carol/staves', icon: 'acts' as const, title: 'Stave-by-Stave Analysis', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/a-christmas-carol/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/a-christmas-carol/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/a-christmas-carol/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'context', href: '/revision/texts/a-christmas-carol/context', icon: 'context' as const, title: 'Context', description: 'Historical context' },
          { id: 'essays', href: '/revision/texts/a-christmas-carol/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'GCSE essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Dickens present Scrooge\'s transformation in A Christmas Carol?',
          'How does Dickens use the ghosts to convey his message about social responsibility?',
          'How does Dickens explore the theme of poverty in A Christmas Carol?',
          'How does Dickens present the importance of family and togetherness?',
          'How does Dickens use the character of Tiny Tim to influence the reader?',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="A Christmas Carol"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <TextGuide data={data} />
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A Christmas Carol by Charles Dickens (1843) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright.
      </p>
    </>
  )
}
