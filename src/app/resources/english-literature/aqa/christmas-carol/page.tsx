import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa/christmas-carol' },
  title: "A Christmas Carol Study Guide - AQA English Literature GCSE",
  description:
    "Complete A Christmas Carol revision guide for AQA GCSE English Literature. Stave-by-stave summary, character analysis, themes, 20+ key quotations, Victorian context, and essay planning.",
};

/* ─── Data ──────────────────────────────────────────────────── */

const staveSummaries = [
  {
    stave: "Stave One",
    title: "Marley's Ghost",
    summary: [
      "The novella opens on Christmas Eve. Scrooge is introduced as a cold, miserly man who values money above all human connection. His dead business partner Jacob Marley is described as 'dead as a doornail.'",
      "Scrooge refuses charity collectors, dismissing the poor as surplus population ('Are there no prisons? Are there no workhouses?'). He grudgingly allows his clerk Bob Cratchit a day off for Christmas.",
      "Scrooge rejects his nephew Fred's invitation to Christmas dinner. Fred represents the Christmas spirit of generosity and family that Scrooge has lost.",
      "That evening, Marley's ghost appears, bound in heavy chains forged from his own greed. He warns Scrooge that he will share the same fate unless he changes. Three spirits will visit him.",
    ],
    keyMoments:
      "Scrooge's introduction establishes his isolation and coldness. Marley's chains symbolise the moral consequences of selfishness. The charity collectors represent Dickens's direct appeal to Victorian society.",
  },
  {
    stave: "Stave Two",
    title: "The First of the Three Spirits",
    summary: [
      "The Ghost of Christmas Past takes Scrooge back through his memories. Scrooge sees himself as a lonely boy left at school during the holidays, explaining his emotional isolation.",
      "He sees his beloved sister Fan (Fred's mother) who rescued him from school. Her early death may explain Scrooge's difficulty with human connection.",
      "Scrooge relives his time as an apprentice to the warm, generous Fezziwig, whose small acts of kindness made his employees happy. This contrasts with Scrooge's treatment of Cratchit.",
      "He watches his younger self lose his fiancee Belle, who leaves him because his love of money has replaced his love for her. She says he has replaced her with 'a golden idol.' Scrooge is deeply moved and begs the spirit to show no more.",
    ],
    keyMoments:
      "Dickens uses the past to explain (not excuse) Scrooge's character. Fezziwig demonstrates that kindness costs little but means everything. Belle's departure shows the human cost of greed.",
  },
  {
    stave: "Stave Three",
    title: "The Second of the Three Spirits",
    summary: [
      "The Ghost of Christmas Present shows Scrooge the current Christmas celebrations he is missing. The spirit is jolly and abundant, surrounded by a feast that represents generosity.",
      "Scrooge visits the Cratchit family's modest Christmas dinner. Despite poverty, they are loving and grateful. Tiny Tim, Bob's disabled youngest son, is cheerful but seriously ill. The spirit warns that Tiny Tim will die if 'these shadows remain unaltered.'",
      "Scrooge visits Fred's Christmas party. Fred defends his uncle despite being rejected, and his guests enjoy games and laughter. Scrooge begins to wish he could join in.",
      "The spirit reveals two starving children hidden beneath his robe: Ignorance and Want, representing the social problems Dickens most feared. The spirit uses Scrooge's own words against him: 'Are there no prisons? Are there no workhouses?'",
    ],
    keyMoments:
      "The Cratchit family shows that wealth is not needed for happiness - love is. Ignorance and Want are Dickens's most direct social message. The spirit's use of Scrooge's words creates powerful dramatic irony.",
  },
  {
    stave: "Stave Four",
    title: "The Last of the Spirits",
    summary: [
      "The Ghost of Christmas Yet to Come is silent and terrifying, resembling Death itself. It shows Scrooge a future in which a wealthy man has died and no one mourns him.",
      "Businessmen discuss the dead man's funeral with indifference. Scrooge's charwoman, laundress, and undertaker steal his possessions and sell them. His bed curtains are stripped from around his corpse.",
      "The Cratchit family are mourning Tiny Tim, who has died. Bob's grief is understated and deeply moving.",
      "Scrooge is finally shown his own gravestone. He realises the unmourned dead man is himself. He desperately begs the spirit for a chance to change: 'I will honour Christmas in my heart, and try to keep it all the year.'",
    ],
    keyMoments:
      "The contrast between Scrooge's unmourned death and Tiny Tim's deeply felt loss shows that love, not money, gives life meaning. Scrooge's transformation is driven by both compassion and self-interest.",
  },
  {
    stave: "Stave Five",
    title: "The End of It",
    summary: [
      "Scrooge wakes on Christmas morning transformed. He is giddy with joy and relief. His first act is to buy the biggest turkey in the shop and send it anonymously to the Cratchit family.",
      "He meets the charity collectors from Stave One and pledges a huge donation, whispering the amount so the reader never learns how much.",
      "He goes to Fred's Christmas dinner and is welcomed warmly. He surprises Bob Cratchit by raising his salary and promising to help his family.",
      "Scrooge becomes 'as good a friend, as good a master, and as good a man, as the good old city knew.' Tiny Tim does not die. Scrooge has learned to 'keep Christmas' all year long.",
    ],
    keyMoments:
      "The transformation is immediate and joyful. Dickens shows that change is possible at any age. Scrooge's generosity is both personal (turkey, Fred) and systemic (charity, Cratchit's salary). The novella ends with hope.",
  },
];

const characters = [
  {
    name: "Ebenezer Scrooge",
    role: "Protagonist",
    description:
      "A miserly, cold-hearted businessman who undergoes a complete moral transformation over the course of one Christmas Eve. Scrooge represents the wealthy Victorians whom Dickens criticised for ignoring the suffering of the poor. His journey from isolation to community, from greed to generosity, is the moral heart of the novella.",
    keyPoints: [
      "Introduced through a cluster of cold imagery: 'hard and sharp as flint,' 'solitary as an oyster'",
      "His past reveals the roots of his coldness: loneliness, abandonment, loss of love",
      "Each stave peels back a layer: past explains him, present shames him, future terrifies him",
      "His transformation is genuine but also self-serving - he changes partly to avoid a lonely death",
      "In Stave Five he becomes a symbol of Dickens's belief that anyone can change",
      "Dickens uses Scrooge to argue that the wealthy have a moral duty to help the poor",
    ],
    keyQuotes: [
      "'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!'",
      "'Are there no prisons? And the Union Workhouses?'",
      "'I will honour Christmas in my heart, and try to keep it all the year'",
      "'He became as good a friend, as good a master, and as good a man, as the good old city knew'",
    ],
  },
  {
    name: "Bob Cratchit",
    role: "Scrooge's Clerk",
    description:
      "Bob Cratchit is Scrooge's underpaid, overworked clerk who represents the exploited working class. Despite his poverty, he is loving, cheerful, and devoted to his family. He serves as a moral contrast to Scrooge and embodies Dickens's argument that the poor are worthy of compassion and respect.",
    keyPoints: [
      "Works in terrible conditions: 'a dismal little cell,' warming himself at a candle",
      "Earns 15 shillings a week - barely enough to feed his large family",
      "Never complains about Scrooge, even toasting him at Christmas dinner",
      "His love for Tiny Tim is one of the novella's most emotional threads",
      "Represents the 'deserving poor' - hardworking, moral, family-oriented",
      "His improved situation in Stave Five shows the positive impact of individual generosity",
    ],
    keyQuotes: [
      "'The clerk in the tank... tried to warm himself at the candle'",
      "'Mr Scrooge! A merry Christmas, sir!'",
      "'My little, little child! My little child!'",
    ],
  },
  {
    name: "Tiny Tim",
    role: "Bob's Youngest Son",
    description:
      "Tiny Tim is a young, disabled boy who is cheerful and loving despite his illness and poverty. He is a sentimental figure designed to move both Scrooge and the reader. His potential death represents the real consequences of social inequality - children die when society refuses to help.",
    keyPoints: [
      "His disability (possibly rickets, caused by malnutrition) is a direct result of poverty",
      "His catchphrase 'God bless us, every one!' captures the novella's message of universal compassion",
      "The Ghost of Christmas Present warns he will die 'if these shadows remain unaltered'",
      "His death in the alternative future is deeply affecting - Dickens uses sentiment as a political tool",
      "His survival in Stave Five proves that individual action can save lives",
      "He symbolises the vulnerable members of society who depend on others' generosity",
    ],
    keyQuotes: [
      "'God bless us, every one!'",
      "'If these shadows remain unaltered... the child will die'",
      "'As good as gold... and better'",
    ],
  },
  {
    name: "Jacob Marley",
    role: "Scrooge's Dead Partner / Warning",
    description:
      "Marley's ghost appears in Stave One to warn Scrooge that unless he changes, he will share Marley's fate: an eternity of suffering, weighed down by chains forged from his own greed. Marley represents what Scrooge will become if he does not change.",
    keyPoints: [
      "His chains are 'long, and wound about him like a tail' - each link represents a selfish act",
      "He says his spirit should have walked among the living helping others, not counting money",
      "His suffering is eternal: he can see people in need but can never help them",
      "He is not seeking redemption for himself (it is too late) but trying to save Scrooge",
      "His warning that 'Mankind was my business' is the novella's central moral message",
    ],
    keyQuotes: [
      "'I wear the chain I forged in life'",
      "'Mankind was my business. The common welfare was my business'",
      "'I am here tonight to warn you, that you have yet a chance and hope of escaping my fate'",
    ],
  },
  {
    name: "Fred (Scrooge's Nephew)",
    role: "The Christmas Spirit",
    description:
      "Fred is Scrooge's cheerful, warm-hearted nephew who embodies the Christmas spirit. He persistently tries to include Scrooge in his family celebrations despite being rejected every year. He represents unconditional love and the idea that Christmas can bring out the best in people.",
    keyPoints: [
      "He is Fan's son - a living connection to Scrooge's happier past",
      "His defence of Christmas as 'a kind, forgiving, charitable time' articulates Dickens's ideal",
      "He refuses to give up on Scrooge, showing that compassion should be persistent",
      "His laughter is warm and inclusive, contrasting with Scrooge's cold isolation",
      "He welcomes Scrooge in Stave Five without resentment, demonstrating forgiveness",
    ],
    keyQuotes: [
      "'A merry Christmas, uncle! God save you!'",
      "'I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time'",
    ],
  },
  {
    name: "The Three Spirits",
    role: "Agents of Transformation",
    description:
      "The Ghost of Christmas Past, Present, and Yet to Come represent different dimensions of Scrooge's moral education. Past shows the causes of his behaviour, Present shows its consequences for others, and Future shows the ultimate cost to himself.",
    keyPoints: [
      "Christmas Past: flickering light (truth/memory), childlike but old (timeless). Uses Scrooge's memories as evidence against him",
      "Christmas Present: jolly giant surrounded by abundance, but ages rapidly and dies at midnight - joy is temporary and must be shared",
      "Christmas Yet to Come: silent, dark, death-like. The most terrifying because it shows what will happen if nothing changes",
      "The spirits never directly instruct Scrooge - they show him evidence and let him draw his own conclusions",
      "Their supernatural nature allows Dickens to compress his moral argument into one night",
    ],
    keyQuotes: [
      "'The Phantom slowly, gravely, silently approached'",
      "'I see a vacant seat... and a crutch without an owner'",
    ],
  },
];

const themes = [
  {
    title: "Social Responsibility and Poverty",
    colour: "bg-red-500/10 border-red-500/30",
    analysis:
      "This is the novella's most important theme. Dickens wrote A Christmas Carol as an explicit attack on the indifference of the wealthy towards the poor. Scrooge's initial attitude ('Are there no prisons?') reflects real Victorian views that poverty was the fault of the poor themselves. Through Scrooge's transformation, Dickens argues that the wealthy have a moral and social duty to help those less fortunate. The novella is fundamentally a political text disguised as a Christmas story.",
    keyPoints: [
      "The charity collectors represent Dickens's direct appeal to Victorian society's conscience",
      "Scrooge's 'surplus population' remark echoes Thomas Malthus's argument that the poor should be left to die",
      "The Cratchit family proves that the poor are not lazy or immoral - they are victims of an unjust system",
      "Ignorance and Want (Stave Three) are Dickens's most explicit social message - these children are society's shame",
      "'Mankind was my business' - Marley's statement is Dickens's thesis: we are all responsible for each other",
      "Dickens published the novella cheaply so working-class people could afford it",
    ],
    keyQuotes: [
      "'Are there no prisons? And the Union Workhouses?'",
      "'If they would rather die... they had better do it, and decrease the surplus population'",
      "'Mankind was my business'",
      "'This boy is Ignorance. This girl is Want. Beware them both'",
    ],
  },
  {
    title: "Redemption and Transformation",
    colour: "bg-green-500/10 border-green-500/30",
    analysis:
      "A Christmas Carol is fundamentally a story about the possibility of change. Dickens shows that even someone as deeply entrenched in selfishness as Scrooge can be redeemed. The transformation is not gradual but sudden and dramatic - reflecting Dickens's optimistic belief that moral awakening can happen at any moment. However, Scrooge's change is driven by both compassion for others (Tiny Tim) and fear for himself (his own death), raising the question of whether true altruism is possible.",
    keyPoints: [
      "Scrooge's transformation parallels a Christian redemption narrative: sin, repentance, salvation",
      "The structure of three spirits mirrors a trial: evidence from past, present, and future",
      "Change comes through emotional experience, not intellectual argument - Dickens appeals to the heart",
      "Scrooge's joy in Stave Five is childlike and excessive - he is reborn",
      "The transformation is both personal (kindness to individuals) and systemic (paying Cratchit a fair wage, donating to charity)",
      "Dickens challenges the reader: if Scrooge can change, so can you",
    ],
    keyQuotes: [
      "'I will honour Christmas in my heart, and try to keep it all the year'",
      "'I am not the man I was'",
      "'He became as good a friend, as good a master, and as good a man, as the good old city knew'",
    ],
  },
  {
    title: "Christmas and Generosity",
    colour: "bg-amber-500/10 border-amber-500/30",
    analysis:
      "Christmas in the novella represents more than a religious festival. It symbolises everything Scrooge lacks: warmth, generosity, family, community, and compassion. Dickens helped shape the modern idea of Christmas as a time for giving and togetherness. Fred's defence of Christmas as 'a kind, forgiving, charitable, pleasant time' is the novella's manifesto. However, Scrooge learns to 'keep Christmas all the year' - generosity should not be limited to one day.",
    keyPoints: [
      "Christmas serves as a moral lens that exposes Scrooge's failings",
      "The Cratchit and Fred's celebrations show Christmas as communal, warm, and inclusive",
      "Food imagery throughout represents abundance, sharing, and generosity",
      "The Ghost of Christmas Present is surrounded by plenty - but dies at midnight, warning that generosity must not be temporary",
      "Scrooge's first redeemed act is buying a turkey - food symbolises care for others",
    ],
    keyQuotes: [
      "'A kind, forgiving, charitable, pleasant time'",
      "'God bless us, every one!'",
      "'It was always said of him, that he knew how to keep Christmas well'",
    ],
  },
  {
    title: "Family and Isolation",
    colour: "bg-blue-500/10 border-blue-500/30",
    analysis:
      "The novella contrasts warm family life (the Cratchits, Fred) with Scrooge's cold isolation. Dickens shows that money cannot compensate for human connection. Scrooge's past reveals how isolation was imposed on him (abandoned at school) before he chose it (rejecting Belle, rejecting Fred). His redemption is a return to community - he becomes a 'second father' to Tiny Tim and joins Fred's celebrations.",
    keyPoints: [
      "Scrooge's childhood loneliness explains (but does not excuse) his adult isolation",
      "The Cratchit family are poor but rich in love - they have what Scrooge lacks",
      "Fred's persistent invitations show that family love endures despite rejection",
      "Scrooge's unmourned death (Stave Four) is the ultimate consequence of isolation",
      "His reintegration into family and community in Stave Five completes his redemption",
      "Fan's death left Scrooge without family; Fred reconnects him to it",
    ],
    keyQuotes: [
      "'Solitary as an oyster'",
      "'A solitary child, neglected by his friends, is left there still'",
      "'They were not a handsome family... But, they were happy'",
    ],
  },
  {
    title: "Greed and Wealth",
    colour: "bg-yellow-500/10 border-yellow-500/30",
    analysis:
      "Dickens presents greed as spiritually and socially destructive. Scrooge and Marley devoted their lives to accumulating wealth, but it brought neither happiness nor fulfilment. Marley's chains - each link forged from a selfish act - visualise the moral cost of greed. The novella does not argue against wealth itself, but against hoarding it while others suffer. Fezziwig shows that wealth used generously brings joy to everyone.",
    keyPoints: [
      "Scrooge's money is described in cold, hard imagery: 'hard and sharp as flint'",
      "Belle identifies Scrooge's 'golden idol' - money has replaced love and compassion",
      "Marley's chains show that greed has eternal consequences - it imprisons the soul",
      "Fezziwig spends modest amounts but creates enormous happiness - generosity is about spirit, not size",
      "The thieves in Stave Four strip Scrooge's possessions - wealth is meaningless in death",
      "In Stave Five, Scrooge's generosity brings him more joy than decades of hoarding",
    ],
    keyQuotes: [
      "'Hard and sharp as flint, from which no steel had ever struck out generous fire'",
      "'Another idol has displaced me... a golden one'",
      "'I wear the chain I forged in life'",
    ],
  },
];

const keyQuotations = [
  {
    quote: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge!",
    speaker: "Narrator (Stave One)",
    analysis:
      "The narrator directly addresses the reader, establishing Scrooge's miserliness. 'Tight-fisted' is literal (he clutches his money) and metaphorical (he is emotionally closed). 'Grindstone' suggests he grinds down everything - money, people, joy. The exclamatory 'Oh!' creates an almost gleeful tone, as if the narrator is enjoying the description.",
  },
  {
    quote: "Hard and sharp as flint, from which no steel had ever struck out generous fire",
    speaker: "Narrator (Stave One)",
    analysis:
      "A cluster of adjectives ('hard,' 'sharp') presents Scrooge through cold, mineral imagery. Flint is used to start fires, but Scrooge's flint produces no warmth - he is cold even by the standards of cold things. 'Generous fire' links warmth to generosity, establishing the novella's symbolic framework: warmth = goodness, cold = selfishness.",
  },
  {
    quote: "Solitary as an oyster",
    speaker: "Narrator (Stave One)",
    analysis:
      "This simile captures Scrooge's isolation perfectly. An oyster is hard-shelled and closed tight - like Scrooge's emotional defences. But oysters also contain pearls, suggesting that something valuable lies hidden inside Scrooge, waiting to be opened. The simile is economical and memorable - ideal for the exam.",
  },
  {
    quote: "Are there no prisons? And the Union Workhouses?",
    speaker: "Scrooge (Stave One)",
    analysis:
      "Scrooge's response to charity collectors reveals his cruel indifference. He suggests the poor belong in prisons and workhouses - institutions Dickens despised as dehumanising. The rhetorical questions imply the poor are already adequately provided for. These words are thrown back at Scrooge by the Ghost of Christmas Present, creating powerful dramatic irony.",
  },
  {
    quote: "If they would rather die, they had better do it, and decrease the surplus population",
    speaker: "Scrooge (Stave One)",
    analysis:
      "Scrooge echoes Thomas Malthus's theory that population growth among the poor should be left unchecked. The phrase 'surplus population' dehumanises the poor, treating them as economic data. This is Scrooge at his most monstrous. The Ghost of Christmas Present will later apply these words to Tiny Tim, forcing Scrooge to confront their cruelty.",
  },
  {
    quote: "I wear the chain I forged in life. I made it link by link, and yard by yard",
    speaker: "Marley's Ghost (Stave One)",
    analysis:
      "Marley's chains are a physical metaphor for moral debt. Each selfish act added a link. The repetition of 'link by link, and yard by yard' emphasises that damnation is gradual - it accumulates through daily choices. This warns Scrooge (and the reader) that every small act of selfishness has consequences.",
  },
  {
    quote: "Mankind was my business. The common welfare was my business",
    speaker: "Marley's Ghost (Stave One)",
    analysis:
      "The novella's thesis statement. Marley laments that he focused on his commercial business while ignoring his real business: caring for other people. The repetition of 'my business' redefines the word - true 'business' is social responsibility, not profit. This encapsulates Dickens's central argument.",
  },
  {
    quote: "A solitary child, neglected by his friends, is left there still",
    speaker: "Narrator (Stave Two)",
    analysis:
      "Scrooge sees his younger self alone at school during Christmas. 'Neglected' and 'solitary' echo his present isolation, showing that his coldness has roots in childhood trauma. Dickens generates sympathy for Scrooge - he did not choose to become this way. The reader begins to understand, if not excuse, his behaviour.",
  },
  {
    quote: "Another idol has displaced me... a golden one",
    speaker: "Belle (Stave Two)",
    analysis:
      "Belle tells the young Scrooge that money has replaced her in his heart. 'Idol' carries biblical weight - the golden calf in Exodus was a false god. Scrooge has committed idolatry by worshipping wealth. This is the moment Scrooge lost his chance at love and happiness, making his present isolation self-inflicted.",
  },
  {
    quote: "They were not a handsome family; they were not well dressed... But, they were happy",
    speaker: "Narrator (Stave Three)",
    analysis:
      "The Cratchit family's happiness despite poverty is the novella's most powerful argument. The tricolon of negatives ('not handsome,' 'not well dressed') is overturned by the simple conjunction 'But.' Dickens shows that happiness comes from love and togetherness, not material wealth. The contrast with Scrooge's wealthy misery is implicit.",
  },
  {
    quote: "God bless us, every one!",
    speaker: "Tiny Tim (Stave Three)",
    analysis:
      "Tiny Tim's catchphrase embodies the novella's message of universal compassion. 'Every one' is inclusive - it extends blessing even to Scrooge. The religious language ('God bless') connects generosity to Christian duty. Its simplicity is its power - a child states what adults have forgotten. The phrase bookends the novella, appearing in the final line.",
  },
  {
    quote: "If these shadows remain unaltered by the Future, the child will die",
    speaker: "Ghost of Christmas Present (Stave Three)",
    analysis:
      "A conditional statement that places responsibility directly on Scrooge (and society). 'Shadows' suggests the future is not fixed - it can be changed by human action. This is Dickens's most urgent appeal: children like Tiny Tim are dying because of social neglect, and it is within society's power to prevent it.",
  },
  {
    quote: "This boy is Ignorance. This girl is Want. Beware them both",
    speaker: "Ghost of Christmas Present (Stave Three)",
    analysis:
      "Two emaciated children hidden beneath the spirit's robe represent society's greatest failings. Ignorance and Want are capitalised as abstract nouns - they are not individual problems but systemic ones. 'Beware' is a warning to Scrooge and to Dickens's readers. The spirit singles out Ignorance as the most dangerous: 'Most of all beware this boy.'",
  },
  {
    quote: "I will honour Christmas in my heart, and try to keep it all the year",
    speaker: "Scrooge (Stave Four)",
    analysis:
      "Scrooge's declaration of change, made at his own gravestone. 'Honour' suggests reverence and commitment. 'Keep it all the year' extends Christmas values beyond December - generosity must be permanent. 'Try' is realistic: Dickens acknowledges that maintaining goodness requires ongoing effort. This is the climax of Scrooge's moral journey.",
  },
  {
    quote: "I am not the man I was",
    speaker: "Scrooge (Stave Four)",
    analysis:
      "A simple but powerful declaration of transformation. Scrooge explicitly acknowledges his past self was wrong. The present tense 'I am not' asserts that change is already happening, not just planned. Dickens uses Scrooge to argue that identity is not fixed - people can choose to become better.",
  },
  {
    quote: "He became as good a friend, as good a master, and as good a man, as the good old city knew",
    speaker: "Narrator (Stave Five)",
    analysis:
      "The tricolon ('friend,' 'master,' 'man') shows Scrooge's transformation is complete across all roles: personal, professional, and moral. The repetition of 'good' hammers home the change. 'The good old city knew' suggests Scrooge becomes famous for generosity, reversing his previous reputation. This sentence completes the narrative arc.",
  },
  {
    quote: "It was always said of him, that he knew how to keep Christmas well, if any man alive possessed the knowledge",
    speaker: "Narrator (Stave Five)",
    analysis:
      "The past tense ('it was always said') gives the impression of a story already completed, like a fairy tale. 'Keep Christmas' means more than celebrating - it means living by its values of generosity, compassion, and togetherness. The superlative ('if any man alive') makes Scrooge a model for the reader to follow.",
  },
];

const contextPoints = [
  {
    title: "Victorian Poverty and the Poor Law",
    detail:
      "Dickens wrote A Christmas Carol in 1843, during a period of extreme poverty in industrial England. The Poor Law Amendment Act (1834) created workhouses where the destitute were forced to live in deliberately harsh conditions to discourage people from seeking help. Scrooge's reference to prisons and workhouses reflects this cruel system. Dickens visited workhouses and saw their brutality first-hand.",
  },
  {
    title: "Thomas Malthus and 'Surplus Population'",
    detail:
      "Thomas Malthus argued that population growth among the poor would outstrip food supply, and that helping the poor only encouraged them to have more children. His ideas influenced the harsh Poor Laws. Scrooge's 'decrease the surplus population' directly echoes Malthusian thinking. Dickens viewed these ideas as morally bankrupt and used Scrooge to discredit them.",
  },
  {
    title: "Child Labour and Education",
    detail:
      "In 1843, many children worked in factories, mines, and chimneys rather than attending school. Dickens himself was sent to work in a blacking factory aged 12 when his father was imprisoned for debt. Tiny Tim represents the vulnerable children failed by Victorian society. The allegory of Ignorance and Want argues that lack of education is the root of social problems.",
  },
  {
    title: "Dickens as Social Reformer",
    detail:
      "Dickens did not write A Christmas Carol purely as entertainment. He had just read a parliamentary report on child labour and was outraged. He originally planned to write a political pamphlet but decided a story would reach more people. He priced the book at five shillings (affordable for the middle class) and insisted on high-quality production. It sold 6,000 copies in five days.",
  },
  {
    title: "Christianity and Charity",
    detail:
      "Victorian Britain was deeply Christian. The duty to help the poor was a religious obligation. Scrooge's refusal to give charity is not just unkind - it is unchristian. Tiny Tim's 'God bless us, every one!' and the Christmas setting remind the reader of Christian teachings about charity and compassion. Marley's chains suggest divine punishment for selfishness.",
  },
  {
    title: "The Industrial Revolution",
    detail:
      "Rapid industrialisation created vast wealth for factory owners but terrible conditions for workers. Cities grew rapidly, creating overcrowded slums with poor sanitation. The gap between rich and poor was enormous. Dickens uses Scrooge (wealthy, comfortable) and Cratchit (poor, exploited) to dramatise this inequality and argue for social reform.",
  },
];

const essayQuestions = [
  {
    question:
      "Starting with this extract, how does Dickens present Scrooge's transformation?",
    plan: [
      "Extract analysis: identify how the extract shows a specific stage of Scrooge's transformation (e.g., Stave Five - joyful, generous, childlike language, exclamatory sentences showing excitement)",
      "Wider text - Scrooge before: 'hard and sharp as flint,' 'solitary as an oyster.' Dickens uses cold, hard imagery and the pathetic fallacy of winter to characterise his selfishness",
      "Wider text - The turning points: Belle's departure (past), Tiny Tim (present), his own gravestone (future). Each spirit provides evidence that forces Scrooge to confront his failings",
      "Wider text - Scrooge after: 'as good a friend, as good a master, and as good a man.' The tricolon shows transformation across all aspects of life. His generosity is both personal and systemic",
      "Context: Dickens uses Scrooge's transformation to argue that Victorian society can and must change. If one stubborn old miser can reform overnight, surely a wealthy nation can choose to help its poor.",
    ],
  },
  {
    question:
      "How does Dickens present the theme of social responsibility?",
    plan: [
      "Extract analysis: e.g., the charity collectors scene - Scrooge's rhetorical questions ('Are there no prisons?') echo real Victorian attitudes. His dismissal of the poor as 'surplus population' references Malthus",
      "Wider text - Marley's chains: 'Mankind was my business' is the novella's thesis. Marley's punishment shows that ignoring social duty has eternal consequences",
      "Wider text - Ignorance and Want: the most explicit social message. The Ghost's warning ('Beware them both') is directed at the reader as much as Scrooge. Dickens identifies lack of education as the root problem",
      "Wider text - Scrooge's redemption: he raises Cratchit's salary, donates to charity, becomes a 'second father' to Tiny Tim. Individual action can make a difference",
      "Context: Poor Law, workhouses, child labour, the vast inequality of industrial Britain. Dickens wrote the novella as a direct intervention in social policy debates.",
    ],
  },
  {
    question:
      "How does Dickens use the character of Tiny Tim?",
    plan: [
      "Extract analysis: e.g., the Cratchit Christmas dinner - Tim is 'as good as gold,' cheerful despite illness. His 'God bless us, every one!' extends compassion to all, including Scrooge",
      "Wider text - Tim as victim: his illness (likely rickets from malnutrition) is a direct result of poverty. He represents the children failed by Victorian society",
      "Wider text - Tim as moral catalyst: the Ghost's warning ('the child will die') is what begins Scrooge's emotional awakening. Tim's potential death makes poverty personal and immediate",
      "Wider text - Tim's survival: in Stave Five, Scrooge's generosity saves Tim's life. Dickens argues that individual action can prevent the deaths of real children",
      "Context: child labour, child mortality rates in Victorian slums, Dickens's own childhood poverty. Tim is a sentimental figure, but Dickens uses sentimentality as a deliberate political strategy.",
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function ChristmasCarolPage() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            AQA English Literature &middot; Paper 1
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Christmas Carol &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Charles Dickens &middot; Published 1843 &middot; Novella
          </p>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border px-4 py-3 overflow-x-auto">
        <div className="mx-auto flex max-w-5xl gap-2 text-xs font-medium sm:text-sm sm:gap-4 whitespace-nowrap">
          {[
            ["#plot", "Plot"],
            ["#characters", "Characters"],
            ["#themes", "Themes"],
            ["#quotations", "Quotations"],
            ["#context", "Context"],
            ["#essays", "Essay Planning"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-border px-3 py-1 text-muted-foreground transition hover:bg-primary hover:text-foreground hover:border-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Plot Summary ─────────────────────────────────────────── */}
      <section id="plot" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Plot Summary: Stave by Stave
        </h2>
        <p className="mt-2 text-muted-foreground">
          Dickens called the five chapters &quot;staves&quot; (musical term for sections
          of a song), reinforcing the idea of Christmas carol and harmony.
        </p>

        <div className="mt-8 space-y-10">
          {staveSummaries.map((stave) => (
            <div key={stave.stave}>
              <h3 className="text-lg font-bold text-primary">
                {stave.stave}: {stave.title}
              </h3>
              <div className="mt-4 space-y-3">
                {stave.summary.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-sm text-primary bg-primary/10 rounded-lg p-3">
                <span className="font-semibold">Key moments:</span>{" "}
                {stave.keyMoments}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Characters ───────────────────────────────────────────── */}
      <section id="characters" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Remember: characters are constructs. Discuss what Dickens is trying
            to show through each character, not what they &quot;feel.&quot;
          </p>

          <div className="mt-8 space-y-8">
            {characters.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {char.name}
                  </h3>
                  <span className="text-sm text-accent font-medium">
                    {char.role}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Points for Analysis
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {char.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  <div className="mt-2 space-y-1">
                    {char.keyQuotes.map((q) => (
                      <p
                        key={q}
                        className="text-sm italic text-primary bg-primary/10 rounded px-3 py-1.5"
                      >
                        {q}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────── */}
      <section id="themes" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Key Themes</h2>

        <div className="mt-8 space-y-8">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className={`rounded-xl border p-6 ${theme.colour}`}
            >
              <h3 className="text-xl font-bold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {theme.analysis}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Points
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {theme.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Quotations
                </h4>
                <div className="mt-2 space-y-1">
                  {theme.keyQuotes.map((q) => (
                    <p
                      key={q}
                      className="text-sm italic text-muted-foreground bg-card/60 rounded px-3 py-1.5"
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Quotations ───────────────────────────────────────── */}
      <section id="quotations" className="bg-primary/10 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotations with Analysis
          </h2>

          <div className="mt-8 space-y-4">
            {keyQuotations.map((q, i) => (
              <div
                key={i}
                className="rounded-xl bg-card p-5 shadow-md border border-border"
              >
                <p className="text-base font-semibold italic text-primary">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context ──────────────────────────────────────────────── */}
      <section id="context" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Historical and Social Context
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {contextPoints.map((ctx) => (
            <div
              key={ctx.title}
              className="rounded-xl border border-border p-5"
            >
              <h3 className="font-bold text-primary">{ctx.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {ctx.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Essay Planning ───────────────────────────────────────── */}
      <section id="essays" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Essay Planning: Common Questions
          </h2>

          <div className="mt-8 space-y-6">
            {essayQuestions.map((eq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="font-bold text-foreground">
                  Q: {eq.question}
                </h3>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Suggested Paragraph Plan
                  </p>
                  <ol className="mt-3 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                    {eq.plan.map((p, j) => (
                      <li key={j} className="leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/resources/english-literature/aqa"
          className="text-sm font-medium text-accent hover:text-primary transition"
        >
          &larr; Back to AQA English Literature
        </Link>
      </section>

    </>
  );
}
