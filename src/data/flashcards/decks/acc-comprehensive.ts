// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'acc-comprehensive',
  title: 'A Christmas Carol - Comprehensive Study',
  description:
    '40 exam-ready flashcards covering key quotations, characters, themes, and context for A Christmas Carol',
  category: 'Literature',
  board: 'All',
  cards: [
    // ===== QUOTATION CARDS (15) =====
    {
      id: 'acc-q1',
      front: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker/Narrator: Third-person narrator\nTechnique: Exclamatory, metaphor ("grindstone" implies relentless, mechanical labour for profit), direct address to the reader ("Oh!")\nTheme: Greed and miserliness\n\nAnalysis: Dickens opens his characterisation of Scrooge with a visceral metaphor - the "grindstone" suggests he squeezes every last penny from others with industrial efficiency. The narrator\'s exclamatory tone ("Oh!") creates a conversational, almost gossipy rapport with the reader, inviting us to judge Scrooge from the outset. This sets up the moral framework of the novella: Scrooge embodies everything Dickens wants Victorian society to reject.`,
    },
    {
      id: 'acc-q2',
      front: '"Bah! Humbug!"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker: Ebenezer Scrooge\nTechnique: Exclamatory, dismissive tone, minor sentence/fragment\nTheme: Isolation, rejection of Christmas spirit\n\nAnalysis: Scrooge\'s iconic catchphrase is a blunt rejection of Christmas joy. "Humbug" means fraud or nonsense - Scrooge sees generosity and celebration as a deception. The brevity of the exclamation mirrors his emotional barrenness; he has no time for warmth or connection. Dickens uses this to represent the attitude of the wealthy Victorians who dismissed charity as pointless sentimentality.`,
    },
    {
      id: 'acc-q3',
      front: '"Are there no prisons? Are there no workhouses?"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker: Ebenezer Scrooge\nTechnique: Rhetorical questions, repetition, callous tone\nTheme: Social responsibility, poverty, class\n\nAnalysis: Scrooge deflects responsibility for the poor by pointing to institutions that Dickens\'s readers would recognise as cruel and dehumanising. The rhetorical questions imply he believes the poor are already "dealt with." Dickens directly critiques the 1834 Poor Law and the Malthusian attitude that poverty was the fault of the poor. These words return to haunt Scrooge via the Ghost of Christmas Present, turning his own logic against him.`,
    },
    {
      id: 'acc-q4',
      front: '"I wear the chain I forged in life"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker: Jacob Marley\'s Ghost\nTechnique: Metaphor (chain = accumulated sins), first person, past tense ("forged")\nTheme: Consequences, redemption, greed\n\nAnalysis: Marley\'s chain is a powerful symbol - each link represents a selfish act during his lifetime. The verb "forged" has connotations of heavy industry, linking sin to the dehumanising capitalism of the era. Marley serves as a prophetic mirror for Scrooge: his punishment is to wander the earth burdened by the weight of his own greed. Dickens implies that moral debts, unlike financial ones, cannot be escaped after death.`,
    },
    {
      id: 'acc-q5',
      front: '"Mankind was my business"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker: Jacob Marley\'s Ghost\nTechnique: Declarative, irony (he ignored "mankind" in life), emotive language\nTheme: Social responsibility, redemption\n\nAnalysis: Marley realises too late that caring for others - not making money - was his true "business." Dickens uses the word "business" with bitter irony: Marley spent his life obsessed with commerce, yet the only business that mattered was compassion. This line is the moral thesis of the entire novella and directly challenges the Victorian belief that charity was not the concern of businessmen.`,
    },
    {
      id: 'acc-q6',
      front: '"A solitary child, neglected by his friends"',
      back: `Stave: Two (The First of the Three Spirits)\nSpeaker/Narrator: Third-person narrator describing young Scrooge\nTechnique: Pathetic imagery, isolation motif, adjective "solitary"\nTheme: Isolation, childhood, empathy\n\nAnalysis: This moment is the turning point in reader sympathy. Dickens shows that Scrooge\'s coldness has roots in childhood neglect and loneliness. The adjective "solitary" will echo through the novella - Scrooge chose isolation as an adult because it was all he knew as a child. Dickens encourages the Victorian reader to see that cruelty often stems from suffering, and that compassion, not punishment, is the remedy.`,
    },
    {
      id: 'acc-q7',
      front: '"Another idol has displaced me... a golden one"',
      back: `Stave: Two (The First of the Three Spirits)\nSpeaker: Belle (Scrooge\'s former fiancee)\nTechnique: Metaphor (idol = money worshipped like a god), allusion to biblical idolatry\nTheme: Greed vs love, loss, moral corruption\n\nAnalysis: Belle accuses Scrooge of replacing her with money - the "golden idol" alludes to the biblical golden calf, making Scrooge\'s worship of wealth a form of sin. Dickens shows that the pursuit of money costs Scrooge his only chance at love and family. Belle\'s departure marks the moment Scrooge chose isolation over connection, and he must witness it again to understand what he lost.`,
    },
    {
      id: 'acc-q8',
      front: '"God bless us, every one!"',
      back: `Stave: Three (The Second of the Three Spirits) and Stave Five\nSpeaker: Tiny Tim\nTechnique: Exclamatory, inclusive language ("every one"), religious register\nTheme: Generosity, family, Christian charity, hope\n\nAnalysis: Tiny Tim\'s blessing is the moral heart of the novella. "Every one" is radically inclusive - it extends goodwill even to those like Scrooge who would let him die. The religious language reinforces Dickens\'s Christian message that compassion must be universal. Tim\'s innocence and generosity despite poverty shames the wealthy who hoard their resources. His words bookend the novella, showing that Scrooge has adopted Tim\'s philosophy by Stave Five.`,
    },
    {
      id: 'acc-q9',
      front: '"If he be like to die, he had better do it, and decrease the surplus population"',
      back: `Stave: One (Marley\'s Ghost) - echoed in Stave Three\nSpeaker: Scrooge (original); Ghost of Christmas Present (quoting Scrooge back to him)\nTechnique: Callous tone, Malthusian language ("surplus population"), dramatic irony\nTheme: Social responsibility, poverty, consequences of indifference\n\nAnalysis: Scrooge parrots Thomas Malthus\'s theory that overpopulation causes poverty - a view many wealthy Victorians used to justify inaction. When the Ghost of Christmas Present throws these words back at Scrooge in reference to Tiny Tim, the abstraction becomes personal. Dickens forces both Scrooge and the reader to confront the human cost of such ideology: it is not "surplus population" but a real, beloved child who will die.`,
    },
    {
      id: 'acc-q10',
      front: '"This boy is Ignorance. This girl is Want."',
      back: `Stave: Three (The Second of the Three Spirits)\nSpeaker: Ghost of Christmas Present\nTechnique: Allegory, personification, declarative sentences, capitalisation of abstract nouns\nTheme: Social responsibility, education, poverty\n\nAnalysis: The two wretched children clinging to the Ghost\'s robes are allegorical - they represent the consequences of society\'s neglect. Dickens capitalises "Ignorance" and "Want" to make them universal forces, not individual failings. The Ghost warns: "Most of all beware this boy" (Ignorance), because an uneducated populace will destroy society. Dickens directly advocates for education reform and challenges the idea that poverty is the poor\'s own fault.`,
    },
    {
      id: 'acc-q11',
      front: '"I am as light as a feather, I am as happy as an angel"',
      back: `Stave: Five (The End of It)\nSpeaker: Ebenezer Scrooge\nTechnique: Similes, tricolon (the full line continues with a third comparison), joyful tone, transformation\nTheme: Redemption, joy, transformation\n\nAnalysis: Scrooge\'s language is utterly transformed - from blunt, monosyllabic dismissals to effusive, childlike similes. The "feather" suggests his burden of guilt has been lifted; the "angel" connects his newfound joy to spiritual salvation. The tricolon structure creates a breathless, giddy rhythm that mirrors Scrooge\'s overwhelming relief. Dickens shows that redemption is not solemn but joyous - it restores a person to their truest, happiest self.`,
    },
    {
      id: 'acc-q12',
      front: '"Solitary as an oyster"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker/Narrator: Third-person narrator\nTechnique: Simile, symbolism\nTheme: Isolation, greed\n\nAnalysis: The oyster simile works on multiple levels: oysters are closed, hard-shelled, and impenetrable - like Scrooge\'s emotional walls. But oysters also contain pearls, hinting that something valuable is hidden inside Scrooge if he can be opened. Dickens signals from the start that Scrooge is not irredeemable - his goodness is locked away, waiting to be released. This optimistic undercurrent drives the novella\'s redemption narrative.`,
    },
    {
      id: 'acc-q13',
      front: '"Old Marley was as dead as a door-nail"',
      back: `Stave: One (Marley\'s Ghost) - opening line\nSpeaker/Narrator: Third-person narrator\nTechnique: Simile, colloquial idiom, dark humour, direct address to reader\nTheme: Death, the supernatural\n\nAnalysis: Dickens opens with a comic, matter-of-fact declaration of death, establishing the novella\'s tone: serious moral themes delivered with wit and warmth. The narrator then playfully digresses about why door-nails are considered dead, creating an intimate, storytelling voice. Establishing Marley\'s death is essential - the reader must believe Marley is truly dead for his ghostly return to carry weight.`,
    },
    {
      id: 'acc-q14',
      front: '"The cold within him froze his old features"',
      back: `Stave: One (Marley\'s Ghost)\nSpeaker/Narrator: Third-person narrator\nTechnique: Metaphor, pathetic fallacy (internal weather), semantic field of cold\nTheme: Isolation, emotional coldness\n\nAnalysis: Dickens externalises Scrooge\'s inner nature - the cold is not from the weather but from within his soul. This internal pathetic fallacy links Scrooge\'s emotional state to his physical appearance, suggesting that cruelty visibly corrupts a person. The semantic field of cold and ice runs throughout Stave One and only thaws as Scrooge transforms, creating a structural motif that mirrors his redemption arc.`,
    },
    {
      id: 'acc-q15',
      front: '"He became as good a friend, as good a master, and as good a man"',
      back: `Stave: Five (The End of It)\nSpeaker/Narrator: Third-person narrator\nTechnique: Tricolon, anaphora ("as good a"), declarative\nTheme: Redemption, social responsibility, generosity\n\nAnalysis: The tricolon summarises Scrooge\'s complete transformation across three social roles: friend (personal), master (professional/economic), and man (moral/universal). The anaphora of "as good a" hammers home that Scrooge\'s change is not partial - it touches every aspect of his life. Dickens\'s message is that individual moral transformation can heal society: if one man changes, he improves the lives of everyone around him.`,
    },

    // ===== CHARACTER CARDS (10) =====
    {
      id: 'acc-c1',
      front: 'Ebenezer Scrooge',
      back: `Role: Protagonist - a wealthy, miserly London moneylender who despises Christmas and refuses to help the poor.\n\nKey Quotes:\n• "Bah! Humbug!" - dismisses Christmas joy\n• "Solitary as an oyster" - isolated but containing hidden goodness\n• "I am as light as a feather" - transformed, joyful\n\nDevelopment Arc: Scrooge undergoes the novella\'s central transformation. He begins as cold, isolated, and cruel (Stave 1), is forced to confront his past pain (Stave 2), witness the consequences of his indifference (Staves 3-4), and ultimately chooses redemption (Stave 5). His arc moves from isolation to community, greed to generosity.\n\nMarker Tip: Always link Scrooge to Dickens\'s wider social message - he represents the wealthy Victorians Dickens wanted to change. His redemption proves that individual moral transformation can address social injustice. Frame his journey as Dickens\'s argument that compassion is a choice available to everyone.`,
    },
    {
      id: 'acc-c2',
      front: 'Bob Cratchit',
      back: `Role: Scrooge\'s underpaid clerk - represents the honest, hardworking poor exploited by the wealthy.\n\nKey Quotes:\n• Described working with a "comforter" because Scrooge won\'t pay for coal\n• Toasts Scrooge as "the Founder of the Feast" despite mistreatment\n• His family is loving despite poverty\n\nDevelopment Arc: Bob does not change - he is a moral constant. His goodness, loyalty, and warmth despite suffering serve as a foil to Scrooge. He endures exploitation without bitterness.\n\nMarker Tip: Bob represents the "deserving poor" - Dickens uses him to argue that poverty is caused by unjust employers, not laziness. His willingness to toast Scrooge shows extraordinary grace, shaming the reader into recognising how the poor are treated. Link Bob to Dickens\'s critique of Victorian labour conditions and low wages.`,
    },
    {
      id: 'acc-c3',
      front: 'Tiny Tim',
      back: `Role: Bob Cratchit\'s youngest son - disabled, sickly, but full of joy and Christian charity.\n\nKey Quotes:\n• "God bless us, every one!" - inclusive, generous despite suffering\n• Described with his crutch and "his limbs supported by an iron frame"\n• His empty chair and crutch "without an owner" in the future vision\n\nDevelopment Arc: Tim does not develop as a character - he functions as a symbol. His potential death is the emotional catalyst for Scrooge\'s transformation.\n\nMarker Tip: Tiny Tim is Dickens\'s most powerful weapon against Malthusian ideology. When Scrooge says the poor should "decrease the surplus population," Dickens puts a face to that statistic. Tim\'s disability was likely caused by malnutrition (linked to poverty), making his suffering a direct consequence of social neglect. His survival in Stave 5 proves that generosity literally saves lives.`,
    },
    {
      id: 'acc-c4',
      front: "Jacob Marley's Ghost",
      back: `Role: Scrooge\'s deceased business partner - appears as a ghost bound in chains to warn Scrooge to change.\n\nKey Quotes:\n• "I wear the chain I forged in life" - every selfish act added a link\n• "Mankind was my business" - realises too late what truly mattered\n• Described with "cash-boxes, keys, padlocks, ledgers, deeds"\n\nDevelopment Arc: Marley is static but prophetic. He exists to show Scrooge what awaits him if he does not repent - an eternity of regret and restless wandering.\n\nMarker Tip: Marley is Scrooge\'s doppelganger - they were identical in life ("We were alike"), so Marley\'s fate is Scrooge\'s guaranteed future. His chains are a concrete, visual metaphor for how greed imprisons the soul. Link Marley to the Gothic tradition (ghosts, supernatural warnings) and to Dickens\'s use of fear as a tool for moral instruction.`,
    },
    {
      id: 'acc-c5',
      front: 'Ghost of Christmas Past',
      back: `Role: The first of three spirits - shows Scrooge key memories from his past to reawaken his buried emotions.\n\nKey Quotes/Description:\n• "A strange figure - like a child: yet not so like a child as like an old man" - ambiguous, dreamlike\n• Wears white, emits light from its head, carries a cap that can extinguish its light\n• Scrooge tries to push the cap down to block the light\n\nDevelopment Arc: The Ghost is a supernatural guide, not a character with an arc. It forces Scrooge to feel rather than think.\n\nMarker Tip: The light symbolises truth and memory - Scrooge trying to extinguish it shows his desire to suppress painful memories. The Ghost\'s childlike/old appearance suggests memory is timeless. This stave establishes empathy: once we understand WHY Scrooge became cold (neglect, loss of Belle), we begin to pity rather than hate him.`,
    },
    {
      id: 'acc-c6',
      front: 'Ghost of Christmas Present',
      back: `Role: The second spirit - a giant, jolly figure who shows Scrooge how others celebrate Christmas now, and the suffering he ignores.\n\nKey Quotes/Description:\n• Sits on a throne of food - "turkeys, geese, great joints of meat, sucking-pigs"\n• Wears a green robe bordered with white fur, carries a glowing torch\n• Reveals Ignorance and Want beneath his robes\n• Ages visibly during the stave - his life spans only one Christmas Day\n\nDevelopment Arc: The Ghost moves from warmth and abundance to a dark warning (Ignorance and Want), mirroring the novella\'s shift from celebration to social critique.\n\nMarker Tip: The Ghost embodies Christmas generosity - his torch sprinkles goodwill on the poor. His ageing represents the fleeting nature of the present moment, urging Scrooge (and the reader) to act NOW. The reveal of Ignorance and Want is Dickens\'s most direct political message - address these social evils or face destruction.`,
    },
    {
      id: 'acc-c7',
      front: 'Ghost of Christmas Yet to Come',
      back: `Role: The third and final spirit - a dark, hooded, silent figure who shows Scrooge a terrifying vision of the future if he does not change.\n\nKey Quotes/Description:\n• "Shrouded in a deep black garment" - associated with death\n• "The Phantom slowly, gravely, silently, approached" - adverb list creates dread\n• Points but never speaks\n\nDevelopment Arc: The Ghost is static and terrifying - it is the culmination of fear that breaks Scrooge\'s resistance and drives him to repent.\n\nMarker Tip: This Ghost resembles the Grim Reaper - its silence is more powerful than words because Scrooge must interpret the visions himself. The lack of dialogue forces Scrooge into active moral reasoning rather than passive listening. Link to the Gothic genre: darkness, death, fear of the unknown. This stave uses terror where the others used nostalgia and warmth - Dickens understands that different people are moved by different emotions.`,
    },
    {
      id: 'acc-c8',
      front: "Fred (Scrooge's nephew)",
      back: `Role: Scrooge\'s cheerful, warm-hearted nephew - the son of Scrooge\'s beloved sister Fan. Repeatedly invites Scrooge to Christmas dinner despite constant rejection.\n\nKey Quotes:\n• "I have always thought of Christmas time... as a good time; a kind, forgiving, charitable, pleasant time" - asyndetic list of positive adjectives\n• "I mean to give him the same chance every year, whether he likes it or not" - persistent compassion\n\nDevelopment Arc: Fred does not change - like Bob, he is a moral constant. His unwavering kindness represents the Christmas spirit Scrooge rejects then embraces.\n\nMarker Tip: Fred is Scrooge\'s foil - same family, same class, opposite values. He proves that wealth does not have to produce miserliness. His connection to Fan (Scrooge\'s sister) is significant: he represents the loving family life Scrooge could have had. Fred\'s persistence shows that compassion should never give up on people - a key Dickensian message.`,
    },
    {
      id: 'acc-c9',
      front: 'Belle',
      back: `Role: Scrooge\'s former fiancee who breaks off their engagement because his love of money has replaced his love for her.\n\nKey Quotes:\n• "Another idol has displaced me... a golden one" - money as false god\n• "You fear the world too much" - suggests Scrooge\'s greed stems from insecurity\n• She is later seen with a happy family - the life Scrooge lost\n\nDevelopment Arc: Belle appears only in Stave Two as a memory. She represents Scrooge\'s last chance at love and warmth before he fully committed to isolation.\n\nMarker Tip: Belle\'s departure is the novella\'s key turning point in Scrooge\'s backstory. Her accusation that a "golden idol" has replaced her connects greed to idolatry (a biblical sin), reinforcing Dickens\'s moral framework. The vision of her happy family is designed to make Scrooge feel regret - Dickens shows the reader that the cost of greed is not just money but love, family, and human connection.`,
    },
    {
      id: 'acc-c10',
      front: 'Fezziwig',
      back: `Role: Scrooge\'s former employer during his apprenticeship - a generous, jovial businessman who treats his workers with warmth and stages a joyful Christmas party.\n\nKey Quotes:\n• "Old Fezziwig laid down his pen... No more work tonight. Christmas Eve, Dick. Christmas!"\n• The narrator notes: "The happiness he gives, is quite as great as if it cost a fortune"\n• Scrooge watches and says quietly: "I should like to be able to say a word or two to my clerk just now"\n\nDevelopment Arc: Fezziwig appears only in Stave Two as a memory. He does not change but serves as a model of how employers should treat workers.\n\nMarker Tip: Fezziwig is the anti-Scrooge - proof that capitalism and compassion can coexist. Dickens uses him to show that an employer\'s power extends beyond wages: small acts of generosity create immense happiness. The moment Scrooge recognises his failure to be like Fezziwig to Bob Cratchit is a crucial step in his transformation. Link Fezziwig to Dickens\'s argument that the wealthy have a moral duty to their workers.`,
    },

    // ===== THEME CARDS (8) =====
    {
      id: 'acc-t1',
      front: 'Theme: Redemption',
      back: `Definition: The idea that people can be saved from sin or moral failure by recognising their wrongs and choosing to change.\n\nKey Moments:\n• Marley warns Scrooge he can still escape Marley\'s fate\n• Scrooge weeps at his childhood self (Stave 2) - empathy reawakens\n• Scrooge begs the Ghost of Christmas Yet to Come: "I will honour Christmas in my heart, and try to keep it all the year"\n• Stave 5: Scrooge wakes transformed and immediately acts on his new values\n\nKey Quotes:\n• "I will honour Christmas in my heart" - pledges lasting change\n• "I am as light as a feather, I am as happy as an angel" - joy of transformation\n• "He became as good a friend, as good a master, and as good a man" - transformation across all roles\n\nHow Dickens Presents It: Dickens structures the entire novella around redemption - the five staves mirror the five acts of a morality play. Scrooge\'s journey from sin to salvation follows a Christian template: confession (recognising his wrongs), penance (witnessing consequences), and absolution (being given a second chance). Dickens\'s message is optimistic - no one is beyond saving if they choose to change.`,
    },
    {
      id: 'acc-t2',
      front: 'Theme: Social Responsibility',
      back: `Definition: The duty of the wealthy and powerful to care for the poor and vulnerable in society.\n\nKey Moments:\n• Scrooge refuses the charity collectors and suggests the poor go to workhouses (Stave 1)\n• Marley\'s ghost declares "Mankind was my business" (Stave 1)\n• The Ghost of Christmas Present reveals Ignorance and Want (Stave 3)\n• Scrooge raises Bob\'s salary and helps his family (Stave 5)\n\nKey Quotes:\n• "Are there no prisons? Are there no workhouses?" - callous dismissal\n• "Mankind was my business" - moral duty recognised too late\n• "This boy is Ignorance. This girl is Want." - allegorical warning\n\nHow Dickens Presents It: Dickens wrote A Christmas Carol partly as a response to a parliamentary report on child labour. He uses the novella as a direct appeal to the wealthy middle classes, arguing that ignoring poverty is both morally wrong and socially dangerous (Ignorance and Want will destroy society). Scrooge\'s transformation models the change Dickens wants from his readers - personal generosity as a first step toward social justice.`,
    },
    {
      id: 'acc-t3',
      front: 'Theme: Isolation vs Community',
      back: `Definition: The contrast between Scrooge\'s lonely, self-imposed isolation and the warmth of communal celebration and family.\n\nKey Moments:\n• Scrooge spends Christmas Eve alone in his dark chambers (Stave 1)\n• The Cratchit family\'s joyful, crowded Christmas dinner (Stave 3)\n• Fred\'s party - full of laughter, games, and togetherness (Stave 3)\n• In the future, Scrooge dies alone and unmourned - his possessions are stolen (Stave 4)\n• Redeemed Scrooge joins Fred\'s party and becomes a "second father" to Tiny Tim (Stave 5)\n\nKey Quotes:\n• "Solitary as an oyster" - isolation as Scrooge\'s defining trait\n• "A solitary child, neglected by his friends" - roots of isolation in childhood\n• Fred: "I have always thought of Christmas time... as a good time"\n\nHow Dickens Presents It: Dickens juxtaposes Scrooge\'s dark, cold isolation against the bright warmth of every communal scene. Even the poorest characters (the Cratchits, the miners, the lighthouse keepers) find joy in togetherness. Dickens argues that isolation is both the cause and consequence of greed - and that community and connection are the true sources of happiness, regardless of wealth.`,
    },
    {
      id: 'acc-t4',
      front: 'Theme: Poverty and Inequality',
      back: `Definition: The vast gap between rich and poor in Victorian England, and the suffering caused by the wealthy\'s indifference.\n\nKey Moments:\n• Bob Cratchit earns 15 shillings a week and cannot afford proper coal or medical care for Tim\n• Scrooge dismisses the poor as "surplus population" (Stave 1)\n• The Cratchit Christmas dinner - they make the most of very little (Stave 3)\n• Ignorance and Want - starving, ragged children hidden beneath the Ghost\'s robes (Stave 3)\n• In Stave 4, the poor steal from Scrooge\'s corpse - poverty breeds desperation\n\nKey Quotes:\n• "If he be like to die, he had better do it, and decrease the surplus population" - Malthusian cruelty\n• "This boy is Ignorance. This girl is Want." - social consequences of neglect\n\nHow Dickens Presents It: Dickens does not sentimentalise poverty - he shows it kills (Tiny Tim), degrades (Ignorance and Want), and corrupts (the thieves in Stave 4). He places blame squarely on the wealthy, not the poor. The Cratchits\' dignity despite poverty contrasts with Scrooge\'s moral poverty despite wealth, inverting the Victorian assumption that the rich are morally superior.`,
    },
    {
      id: 'acc-t5',
      front: 'Theme: Christmas and Generosity',
      back: `Definition: Christmas as a time of kindness, charity, forgiveness, and communal joy - a moral ideal that should extend beyond one day.\n\nKey Moments:\n• Fred defends Christmas as "a kind, forgiving, charitable, pleasant time" (Stave 1)\n• Fezziwig\'s Christmas party - generosity costs little but means everything (Stave 2)\n• The Ghost of Christmas Present\'s torch spreads warmth to the poor (Stave 3)\n• Scrooge buys the prize turkey for the Cratchits and donates to charity (Stave 5)\n• "He knew how to keep Christmas well, if any man alive possessed the knowledge" (Stave 5)\n\nKey Quotes:\n• "God bless us, every one!" - Tim\'s universal goodwill\n• "I will honour Christmas in my heart, and try to keep it all the year"\n\nHow Dickens Presents It: Dickens uses Christmas as a vehicle for his social message - it is not about religion alone but about the principle of generosity toward all people. The key phrase is "keep it all the year" - Dickens argues Christmas spirit must be a permanent way of living, not a single day of charity. The novella itself was published at Christmas 1843 and was intended as a "Christmas gift" to readers that would inspire real social change.`,
    },
    {
      id: 'acc-t6',
      front: 'Theme: Family',
      back: `Definition: The importance of family bonds, and how both the presence and absence of family shape characters\' lives.\n\nKey Moments:\n• Young Scrooge is left alone at school - abandoned by his father (Stave 2)\n• Fan collects Scrooge: "Father is so much kinder than he used to be" (Stave 2)\n• Belle\'s happy family - the life Scrooge rejected (Stave 2)\n• The Cratchits\' loving Christmas dinner (Stave 3)\n• Fred keeps inviting Scrooge - family loyalty despite rejection (Staves 1 & 3)\n• Scrooge becomes "a second father to Tiny Tim" (Stave 5)\n\nKey Quotes:\n• "A solitary child, neglected by his friends" - childhood loneliness\n• "God bless us, every one!" - family as source of moral goodness\n\nHow Dickens Presents It: Dickens shows that family is not about wealth but about love and togetherness. The Cratchits have almost nothing but are emotionally rich; Scrooge has everything but is emotionally bankrupt. Scrooge\'s backstory reveals that his isolation began with family breakdown (absent father). His redemption ends with family restoration - he re-enters Fred\'s family and adopts the Cratchits. Dickens argues that family and community are the foundations of a moral society.`,
    },
    {
      id: 'acc-t7',
      front: 'Theme: Time and Regret',
      back: `Definition: The idea that time is limited, the past cannot be changed, but the future is still within our control if we act now.\n\nKey Moments:\n• Marley\'s ghost regrets wasting his time alive on greed (Stave 1)\n• Ghost of Christmas Past shows Scrooge moments he can never undo (Stave 2)\n• Ghost of Christmas Present ages and dies within a single stave - time is short (Stave 3)\n• Ghost of Christmas Yet to Come shows a future that has not happened yet (Stave 4)\n• Scrooge wakes and exclaims: "I will live in the Past, the Present, and the Future!" (Stave 5)\n\nKey Quotes:\n• "I wear the chain I forged in life" - the past creates consequences\n• "The Spirits of all Three shall strive within me" - learning from every time period\n\nHow Dickens Presents It: The three-ghost structure literally moves through past, present, and future - Dickens shows that understanding all three is necessary for moral growth. The past explains why we are who we are; the present shows the consequences of our choices on others; the future warns us what will happen if we do not change. Dickens\'s message: it is never too late to change, but you must act now because time is running out.`,
    },
    {
      id: 'acc-t8',
      front: 'Theme: The Supernatural',
      back: `Definition: The use of ghosts, spirits, and otherworldly elements to convey moral and social messages.\n\nKey Moments:\n• Marley\'s face appears on Scrooge\'s door knocker (Stave 1)\n• Marley\'s ghost appears in chains, jaw bandage, transparent body (Stave 1)\n• Three spirits visit Scrooge on successive nights - each more frightening\n• The Ghost of Christmas Yet to Come is the most terrifying: silent, shrouded, deathlike (Stave 4)\n\nKey Quotes:\n• "Old Marley was as dead as a door-nail" - establishes the supernatural premise\n• "The Phantom slowly, gravely, silently, approached" - dread and fear\n\nHow Dickens Presents It: Dickens draws on the Gothic tradition and the Victorian fascination with ghosts. The supernatural serves a moral purpose - the ghosts are not there to terrify for entertainment but to force Scrooge (and the reader) into self-reflection. Each ghost escalates in fear: nostalgia, warmth, then sheer terror. Dickens uses the ghost story format to make his social critique palatable and entertaining - readers came for the ghosts and left thinking about poverty and compassion.`,
    },

    // ===== CONTEXT CARDS (7) =====
    {
      id: 'acc-cx1',
      front: 'Context: Victorian Workhouses',
      back: `Key Facts:\n• The 1834 Poor Law Amendment Act established workhouses as the main form of relief for the poor.\n• Conditions were deliberately harsh to deter people from seeking help - families were separated, food was minimal, work was gruelling.\n• They were seen as shameful; entering one meant you had "failed."\n• Many Victorians believed poverty was caused by laziness, not systemic injustice.\n\nConnection to the Novella:\n• Scrooge refers to workhouses when asked to donate: "Are there no prisons? Are there no workhouses?"\n• He uses their existence to justify his refusal to help - the state has "provided" for the poor.\n• Dickens directly attacks this attitude: the charity collectors reply that many "would rather die" than enter workhouses.\n\nUseful for AO3: Shows Dickens writing to challenge the dominant ideology of his time. His contemporary readers would have recognised Scrooge\'s attitude as common among the wealthy. Dickens argues that workhouses are not charity - they are punishment disguised as help. Link to Dickens\'s own childhood experience of poverty when his father was imprisoned for debt.`,
    },
    {
      id: 'acc-cx2',
      front: 'Context: Malthusian Economics',
      back: `Key Facts:\n• Thomas Malthus (1766-1834) argued that population growth would always outstrip food supply, leading to poverty and famine.\n• His theory was used to justify not helping the poor - if they were "surplus," helping them would only make the problem worse.\n• Many wealthy Victorians adopted Malthusian views to ease their conscience about poverty.\n• The phrase "surplus population" was well known in Dickens\'s time.\n\nConnection to the Novella:\n• Scrooge directly echoes Malthus: "If he be like to die, he had better do it, and decrease the surplus population."\n• The Ghost of Christmas Present throws these words back at Scrooge when he asks about Tiny Tim\'s fate.\n• Dickens personifies the "surplus population" as a real, innocent child to dismantle the cold abstraction of Malthusian theory.\n\nUseful for AO3: Demonstrates that Dickens was engaging with specific contemporary economic debates, not just telling a ghost story. His novella is a direct counter-argument to Malthus: the poor are not statistics but people. This context elevates your analysis from character study to political commentary.`,
    },
    {
      id: 'acc-cx3',
      front: "Context: Dickens's Own Life",
      back: `Key Facts:\n• Charles Dickens (1812-1870) experienced poverty firsthand - aged 12, he worked in a blacking factory while his father was in debtors\' prison.\n• This traumatic experience shaped his lifelong sympathy for the poor and hatred of institutions that failed them.\n• Dickens wrote A Christmas Carol in just six weeks in 1843, partly in response to a parliamentary report on child labour.\n• He personally funded the publication to keep the price low (5 shillings) so more people could read it.\n\nConnection to the Novella:\n• Young Scrooge\'s loneliness at boarding school may reflect Dickens\'s own childhood feelings of abandonment.\n• Dickens\'s belief that no child should suffer poverty drives the characterisation of Tiny Tim and the children Ignorance and Want.\n• The novella was intended as a practical act of social reform - Dickens called it "a sledgehammer" blow for the poor.\n\nUseful for AO3: Linking the text to Dickens\'s biography shows sophisticated understanding of authorial intent. Dickens did not write from a position of privilege - he understood poverty from the inside. This gives his critique of the wealthy extra moral authority and emotional power.`,
    },
    {
      id: 'acc-cx4',
      front: 'Context: Christianity and Victorian Morality',
      back: `Key Facts:\n• Victorian Britain was an overwhelmingly Christian society - church attendance was expected, and Christian values (charity, forgiveness, love) were publicly endorsed.\n• However, many wealthy Christians ignored the biblical instruction to help the poor, using Malthusian economics as justification.\n• The hypocrisy of professing Christianity while ignoring suffering was a major target for social reformers like Dickens.\n\nConnection to the Novella:\n• Tiny Tim\'s "God bless us, every one!" is a direct Christian message of universal goodwill.\n• Scrooge\'s transformation follows a Christian pattern: sin, repentance, redemption, and salvation.\n• Marley\'s chains and eternal punishment echo the Christian concept of damnation for the greedy.\n• Fred defends Christmas as "a kind, forgiving, charitable, pleasant time" - listing Christian virtues.\n\nUseful for AO3: Dickens weaponises Christianity against the hypocritical wealthy. He essentially asks: how can you call yourself a Christian while letting children starve? The novella\'s moral framework is explicitly Christian - sin, repentance, and redemption - making it both a ghost story and a sermon. This dual purpose is key to understanding Dickens\'s craft.`,
    },
    {
      id: 'acc-cx5',
      front: 'Context: The Industrial Revolution',
      back: `Key Facts:\n• By the 1840s, Britain was the world\'s leading industrial power - factories, railways, and mass production had transformed the economy.\n• Industrialisation created enormous wealth for factory owners and businessmen but appalling conditions for workers: long hours, low pay, dangerous work, child labour.\n• Cities like London and Manchester grew rapidly, creating overcrowded slums with poor sanitation, disease, and high mortality.\n• The gap between rich and poor widened dramatically.\n\nConnection to the Novella:\n• Scrooge represents the new industrial capitalist - wealthy, self-made, but morally bankrupt.\n• Marley\'s chain includes "cash-boxes, keys, padlocks, ledgers" - the tools of commerce.\n• Bob Cratchit is the exploited worker: underpaid, overworked, unable to afford heating or medical care.\n• Fezziwig represents the older, more humane model of business - personal, generous, community-minded.\n\nUseful for AO3: Dickens contrasts Fezziwig\'s paternalistic capitalism (where employers feel responsible for workers) with Scrooge\'s new, impersonal capitalism (where workers are expendable). This context helps explain why Dickens frames the solution as personal generosity rather than political revolution - he wanted to reform the hearts of the wealthy, not overthrow the system.`,
    },
    {
      id: 'acc-cx6',
      front: 'Context: The Ghost Story Tradition',
      back: `Key Facts:\n• Ghost stories were a popular Victorian Christmas tradition - families would gather around the fire on Christmas Eve to share supernatural tales.\n• The Gothic genre (Frankenstein, 1818; early Poe stories) had made supernatural fiction respectable and popular.\n• Dickens was a master of the ghost story format and published many in his magazines.\n• A Christmas Carol was published on 19 December 1843 - timed for the Christmas market.\n\nConnection to the Novella:\n• Dickens uses the ghost story format to deliver a serious social message in an entertaining package.\n• The three spirits escalate in fear: nostalgic (Past), warm then warning (Present), terrifying (Yet to Come).\n• Marley\'s ghost draws on Gothic conventions: chains, wailing, transparent body, jaw bandage.\n• The novella\'s structure (a haunting that leads to transformation) gives the moral message dramatic power.\n\nUseful for AO3: Understanding genre helps you analyse HOW Dickens delivers his message, not just WHAT it is. He chose the ghost story deliberately - it was the most popular and accessible form of Christmas entertainment. By embedding social criticism inside a ghost story, Dickens ensured maximum readership and emotional impact. This is a strong point for discussing Dickens\'s methods and craft (AO2).`,
    },
    {
      id: 'acc-cx7',
      front: 'Context: The Structure of Five Staves',
      back: `Key Facts:\n• Dickens divides the novella into five "staves" rather than chapters - a "stave" is a verse of a song or a staff of music.\n• This musical terminology reinforces the title: the novella is a "carol," a song of joy.\n• The five-stave structure mirrors a five-act play or morality tale: exposition, complication, climax, crisis, resolution.\n• The novella was designed to be read aloud - Dickens himself performed public readings of it throughout his life.\n\nConnection to the Novella:\n• Stave 1: Establishes Scrooge\'s miserliness and introduces the supernatural premise.\n• Stave 2: Explores Scrooge\'s past - builds empathy.\n• Stave 3: Shows the present - contrasts poverty with generosity, introduces Ignorance and Want.\n• Stave 4: The dark future - fear drives Scrooge to repent.\n• Stave 5: Redemption and joy - the "carol" reaches its uplifting conclusion.\n\nUseful for AO3: The term "stave" signals that this is not just a story but a performance - a song intended to move and inspire. The cyclical structure (beginning and ending on Christmas morning) suggests renewal and rebirth. Discussing Dickens\'s structural choices shows sophisticated understanding of form and is an excellent way to address AO2 (methods) in your exam response.`,
    },
  ],
}

export default deck
